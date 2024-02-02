import { axiosClient } from "@/config/backendConfiguration";

export const getUserTransactions = async () => {
  try {
    //   const token = localStorage.getItem("accessToken");
    const token = localStorage.getItem("accessToken");

    if (!token) {
      // Handle the case where the token is missing
      throw new Error("Access token not found");
    }

    const response = await axiosClient.post("/transactions", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    return response.data.transactions;
  } catch (error) {
    console.error("Error fetching user transactions", error);

    // Handle the error according to your application's requirements
    return null;
  }
};
