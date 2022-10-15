import React, { useState } from "react";
import { Typography, Box, Container, Tabs, Tab } from "@mui/material";
import ReceivedRequests from "./ReceivedRequests";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SentRequests from "./SentRequests";
import { capitalCase } from "change-case";

function FriendRequests() {
  const [currentTab, setCurrentTab] = useState("received");

  const REQUEST_TABS = [
    {
      value: "received",
      icon: <CallReceivedIcon sx={{ fontSize: 30 }} />,
      component: <ReceivedRequests />,
    },
    {
      value: "sent",
      icon: <ArrowOutwardIcon sx={{ fontSize: 30 }} />,
      component: <SentRequests profile={{}} />,
    },
  ];

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Account Settings
      </Typography>
      <Tabs
        value={currentTab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={(e, value) => setCurrentTab(value)}
      >
        {REQUEST_TABS.map((tab) => (
          <Tab
            disableRipple
            key={tab.value}
            label={capitalCase(tab.value)}
            icon={tab.icon}
            value={tab.value}
          />
        ))}
      </Tabs>

      <Box sx={{ mb: 5 }} />

      {REQUEST_TABS.map((tab) => {
        const isMatched = tab.value === currentTab;
        return isMatched && <Box key={tab.value}>{tab.component}</Box>;
      })}
    </Container>
  );
}

export default FriendRequests;
