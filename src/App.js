import React, { useState } from 'react';
import { Paper, Tabs, Tab, TextField, Button, Typography, Box, MenuItem, Grid, FormControl, InputLabel, Select, Divider, Link } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import "./App.css"

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address1: '',
    address2: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleNextTab = () => {
    setActiveTab(activeTab + 1);
  }

  const renderFormSection = () => {
    switch (activeTab) {
      case 0:
        return (
          <Box sx={{ backgroundColor: 'transparent', p: 2 }}>
            <TextField
              name="name"
              label={<b>Name</b>}
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              sx={{ mb: 3, backgroundColor: "white" }}
            />
            <TextField
              name="email"
              label={<b>Email Address</b>}
              helperText="The purchase receipt would be sent to this address"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              sx={{ mb: 3, backgroundColor: "white" }}
            />
            <TextField
              name="address1"
              label={<b>Address 1</b>}
              value={formData.address1}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              sx={{ mb: 3, backgroundColor: "white" }}
            />
            <TextField
              name="address2"
              label={<b>Address 2</b>}
              value={formData.address2}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              sx={{ mb: 3, backgroundColor: "white" }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="localGovernment"
                  label={<b>Local Government</b>}
                  value={formData.localGovernment}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 3, backgroundColor: "white" }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="state"
                  label={<b>State</b>}
                  value={formData.state}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  select
                  sx={{ mb: 3, backgroundColor: "white" }}
                >
                  <MenuItem value="">Select State</MenuItem>
                  <MenuItem value="Abia">Abia</MenuItem>
                  <MenuItem value="Adamawa">Adamawa</MenuItem>
                  {/* Add more states as needed */}
                </TextField>
              </Grid>
              <Grid
                container
                sx={{ mb: 2, width: "50%" }}
              >
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "goldenrod",
                    color: "white",
                    marginRight: "8px",
                  }}
                  onClick={() => handleNextTab()}
                >
                  Next
                </Button>
                <Button color="primary" sx={{
                  color: "#4e598c"
                }}>
                  Cancel payment
                </Button>
              </Grid>
            </Grid>
          </Box>

        );
      case 1:
        return (
          <Box sx={{ backgroundColor: 'transparent', p: 2 }}>
            <TextField
              name="nameOnCard"
              label={<b>Name on Card</b>}
              value={formData.nameOnCard}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              sx={{ mb: 3, backgroundColor: "white" }}
            />
            <FormControl
              variant="outlined"
              fullWidth
              sx={{ mb: 3, backgroundColor: "white" }}
            >
              <InputLabel><b>Card Type</b></InputLabel>
              <Select
                name="cardType"
                value={formData.cardType}
                onChange={handleChange}
                label={<b>Card Type</b>}
              >
                <MenuItem value="visa">VISA</MenuItem>
                <MenuItem value="mastercard">Mastercard</MenuItem>
                <MenuItem value="verve">Verve</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <TextField
                  name="cardNumber"
                  label={<b>Card Number</b>}
                  value={formData.cardNumber}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 3, backgroundColor: "white" }}
                  inputProps={{
                    maxLength: 19,
                    pattern: "\\d{4}\\s\\d{4}\\s\\d{4}\\s\\d{4}",
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  name="expirationDate"
                  label={<b>Expiration Date (MM/YY)</b>}
                  value={formData.expirationDate}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 3, backgroundColor: "white" }}
                  inputProps={{
                    maxLength: 5,
                    pattern: "\\d{2}/\\d{2}",
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  name="cvv"
                  label={<b>CVV</b>}
                  value={formData.cvv}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 3, backgroundColor: "white" }}
                />
              </Grid>
            </Grid>

            <Grid
              container
              sx={{ mb: 2, width: "50%" }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: "goldenrod",
                  color: "white",
                  marginRight: "8px",
                }}
                onClick={() => handleNextTab()}
              >
                Next
              </Button>
              <Button color="primary" sx={{
                color: "#4e598c"
              }}>
                Cancel payment
              </Button>
            </Grid>
          </Box>
        );

      case 2:
        return (
          <Box sx={{ backgroundColor: "#F5F5DC", p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
              Confirm Payment
            </Typography>

            <Paper elevation={3} sx={{ mb: 3, borderRadius: "10px", backgroundColor: "#fff", paddingBottom:"20px" }}>
              <Box sx={{ backgroundColor: "#2f80ed", color: "#fff", display: "flex", justifyContent: "space-between", p: 2, borderRadius: "10px", marginBottom:"30px"}}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginLeft: "40px" }}>
                  Item Name
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginRight: "40px" }}>
                  Price
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
                <Typography variant="body1">
                  Data science and usability
                </Typography>
                <Typography variant="body1">
                  50,000.00
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
                <Typography variant="body1">
                  Shipping
                </Typography>
                <Typography variant="body1">
                  0.00
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between", p: 1, m:3,border:"1px solid black" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Total
                </Typography>
                <Typography variant="body1">
                  50,000.00
                </Typography>
              </Box>
            </Paper>

            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "goldenrod", color: "white" }}
                  onClick={handleNextTab}
                >
                  Confirm
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ color: "#4e598c" }}
                >
                  Cancel Payment
                </Button>
              </Grid>
            </Grid>
          </Box>
        );

      default:
        return (
          <Box sx={{ backgroundColor: "#F5F5DC", p: 2, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center", maxWidth: 500 }}>
              <CheckCircleOutlineIcon sx={{ fontSize: 50, color: "green", mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Purchase Completed
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Please check your email for details concerning this transaction.
              </Typography>
              <Link href="/" underline="none" sx={{ color: "goldenrod", fontWeight: "bold" }}>
                Return Home
              </Link>
            </Paper>
          </Box>
        );    }
  };

  return (
    <div style={{
      margin: "10%"
    }}>
      <h1 style={{ color: "#4e598c" }}>Complete your Purchase</h1>

      <Paper elevation={3} sx={{ backgroundColor: "transparent", p: 2 }}>
        <Tabs
          value={activeTab}
          onChange={(event, newValue) => setActiveTab(newValue)}
          indicatorColor="primary"
          textColor="primary"
          sx={{
            mb: 2,
            "& .MuiTabs-indicator": {
              backgroundColor: "#f2994a",
            },
            "& .MuiTab-root": {
              color: "#ccc",
              "&.Mui-selected": {
                color: "#f2994a",
              },
            },
          }}
        >
          <Tab label="Personal Info" />
          <Tab label="Billing Info" />
          <Tab label="Confirm Payment" />
        </Tabs>

        {renderFormSection()}
      </Paper>
    </div>

  );
}

export default App;