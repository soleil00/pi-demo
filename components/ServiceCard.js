import { Stack, Typography } from "@mui/material";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      {service.icon}
      <Typography fontSize={"13px"}>{service.name}</Typography>
    </Stack>
  );
};

export default ServiceCard;
