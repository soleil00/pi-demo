"use client";

import React, { useContext, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import "@/path-to-your-tailwind-css-file/styles.css"; // Import your custom Tailwind CSS styles

import Actions from "@/components/Actions";
import Balance from "@/components/Balance";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Transactions from "@/components/Transactions";
import NoUser from "@/components/NoUser";
import { AppContext } from "./context/userContext";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Balance key="balance" onDragStart={handleDragStart} role="presentation" />,
  <Services key="services" onDragStart={handleDragStart} role="presentation" />,
  <Balance key="balance" onDragStart={handleDragStart} role="presentation" />,
  <Services key="services" onDragStart={handleDragStart} role="presentation" />,
];

const Homepage = () => {
  const { user, autoLogin, getTransaction, transactions } =
    useContext(AppContext);

  useEffect(() => {
    autoLogin();
    getTransaction();
  }, []);

  const responsive = {
    0: { items: 1, itemsFit: "contain" },
    600: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <div className="p-5">
      {user ? (
        <>
          <Header />
          <AliceCarousel
            items={items}
            autoPlay
            infinite
            mouseTracking
            disableButtonsControls
            responsive={responsive}
            autoPlayInterval={4000}
            buttonsDisabled={true}
            // disableDotsControls
            mouseTrackingEnabled={true}
            animationDuration={400}
          />

          <Actions />
          <Services />
          <Transactions />
        </>
      ) : (
        <NoUser />
      )}
    </div>
  );
};

export default Homepage;
