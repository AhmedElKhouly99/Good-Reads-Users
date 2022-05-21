import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserBooks from "../Tabs/UserBooks";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let count = 0;
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        marginTop: "5%",
        border: "black",
        "border width": 2,
        "border-style": "solid",
        "border-radius": 5,
        boxShadow: 20,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="Read" {...a11yProps(1)} />
        <Tab label="Currently Reading" {...a11yProps(2)} />
        <Tab label="Want To Read" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <UserBooks tab={value} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserBooks tab={value} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UserBooks tab={value} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <UserBooks tab={value} />
      </TabPanel>
    </Box>
  );
}
