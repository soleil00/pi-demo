import { services } from "@/constants/services";
import { Avatar, Badge, Grid, Paper } from "@mui/material";
import Link from "next/link";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col h-full text-white ">
      <Paper className="p-2 flex-1">
        <h2>Services</h2>
        <Grid container spacing={1}>
          {services?.map((service) => (
            <Grid item xs={3} sm={3} key={service.name}>
              <Link href={service.href}>
                <ServiceCard service={service} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default Services;
