const { axiosClient } = require("@/config/backendConfiguration");

export const signInUser = async () => {
  const scopes = ["username", "payments"];
  const authResult = await window.Pi.authenticate(
    scopes,
    onIncompletePaymentFound
  );

  try {
    const response = await axiosClient.post("/user/signin", { authResult });
    const { currentUser, token } = response.data;

    return { currentUser, token };
  } catch (error) {
    console.error("Error during sign-in:", error);

    throw error;
  }
};

export const signOutUser = async () => {
  localStorage.removeItem("accessToken");
  await axiosClient.post("/user/signout");
};

export const onIncompletePaymentFound = (payment) => {
  console.log("onIncompletePaymentFound", payment);

  const token = localStorage.getItem("accessToken");

  return axiosClient.post(
    "/payments/incomplete",
    { payment },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

const onReadyForServerApproval = (paymentId) => {
  console.log("onReadyForServerApproval", paymentId);

  const token = localStorage.getItem("accessToken");

  axiosClient.post(
    "/payments/approve",
    { paymentId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

const onReadyForServerCompletion = (paymentId, txid) => {
  console.log("onReadyForServerCompletion", paymentId, txid);

  const token = localStorage.getItem("accessToken");

  axiosClient.post(
    "/payments/complete",
    { paymentId, txid },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

const onCancel = (paymentId) => {
  console.log("onCancel", paymentId);
  return axiosClient.post("/payments/cancelled_payment", { paymentId });
};

const onError = (error, payment) => {
  console.log("onError", error);
  if (payment) {
    console.log(payment);
  }
};

export const userInitiateDeposit = async (memo, amount, paymentMetadata) => {
  const paymentData = { amount, memo, metadata: paymentMetadata };

  const callbacks = {
    onReadyForServerApproval,
    onReadyForServerCompletion,
    onCancel,
    onError,
  };

  try {
    const payment = await window.Pi.createPayment(paymentData, callbacks);
    console.log("this is payment created : ", payment);
    // Handle the created payment (e.g., update UI)

    return payment;
  } catch (error) {
    console.error("Error creating payment:", error);
    // Handle the error (e.g., show an error message to the user)
  }
};

export const autoLoginUser = async () => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    try {
      const response = await axiosClient.post("/user/verify-token", { token });
      const { currentUser } = response.data;

      return { currentUser, token };
    } catch (error) {
      console.error("Error verifying token:", error);
      localStorage.removeItem("accessToken");
    }
  }

  return null;
};
