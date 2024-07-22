// import React, { Component } from "react";
// import { TextField, Button, Container } from "@material-ui/core";
// import { Card, CardHeader, CardContent } from "@material-ui/core";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";
// import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
// import EmailIcon from "@material-ui/icons/Email";
// import PhoneIcon from "@material-ui/icons/Phone";
// import LanguageIcon from "@material-ui/icons/Language";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import { Row, Col } from "react-bootstrap";
// import { Paper, withStyles, Grid } from "@material-ui/core";
// import Snackbar from "@material-ui/core/Snackbar";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import MuiAlert from '@mui/material/Alert';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });


// const styles = (theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   padding: {
//     padding: theme.spacing(1),
//   },
// });

// class Profile extends Component {
//   state = {
//     open: false,
//   };

//   continue = (e) => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

//   save = (e) => {
//     const promise = this.props.save();
//     promise
//       .then((res) => {
//         if (res.status === 200) {
//           this.setState((prevState) => ({
//             open: true,
//           }));
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   handleClick = () => {
//     this.setState((prevState) => ({
//       open: true,
//     }));
//   };

//   handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     this.setState((prevState) => ({
//       open: false,
//     }));
//   };

//   action = (
//     <React.Fragment>
//       <IconButton
//         size="small"
//         aria-label="close"
//         color="inherit"
//         onClick={this.handleClose}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//     </React.Fragment>
//   );

//   render() {
//     const { values } = this.props;
//     const { classes } = this.props;

//     return (
//       <Paper className={classes.padding}>
//         <Card>
//           <CardHeader title="Personal Details" />
//         </Card>
//         <CardContent>
//           <div className={classes.margin}>
//             <Grid container spacing={2} alignItems="center" lg={12}>
//               <Grid item md={6} sm={12} xs={12} lg={6}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="firstname"
//                   label="First Name"
//                   style={{ width: "80%" }}
//                   required={true}
//                   value={values.firstname}
//                   onChange={this.props.handleChange}
//                 />
//               </Grid>
//               <Grid item md={6} sm={12} xs={12} lg={6}>
//                 <TextField
//                   margin="dense"
//                   label="Last Name"
//                   variant="outlined"
//                   style={{ width: "80%" }}
//                   name="lastname"
//                   required
//                   value={values.lastname}
//                   onChange={this.props.handleChange}
//                 />
//               </Grid>

//               <Grid item md={6} sm={12} xs={12} lg={6}>
//                 <TextField
//                   margin="dense"
//                   label="Email"
//                   variant="outlined"
//                   name="email"
//                   required
//                   style={{ alignItems: "left", width: "80%" }}
//                   value={values.email}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <EmailIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>

//               <Grid item lg={6} xs={12} sm={12} md={6}>
//                 <TextField
//                   margin="dense"
//                   label="Phone Number"
//                   variant="outlined"
//                   name="phone"
//                   style={{ alignItems: "left", width: "80%" }}
//                   value={values.phone}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <PhoneIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>

//               <Grid item md={6} sm={12} xs={12} lg={6}>
//                 <TextField
//                   margin="dense"
//                   label="Your Website"
//                   variant="outlined"
//                   name="website"
//                   style={{ alignItems: "left", width: "80%" }}
//                   value={values.website}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <LanguageIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item md={6} sm={12} xs={12} lg={6}>
//                 <TextField
//                   margin="dense"
//                   label="GitHub"
//                   variant="outlined"
//                   name="github"
//                   style={{ alignItems: "left", width: "80%" }}
//                   value={values.github}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <GitHubIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item md={6} sm={12} xs={12} lg={6}>
//                 <TextField
//                   margin="dense"
//                   label="Linked In"
//                   variant="outlined"
//                   name="linkedin"
//                   style={{ alignItems: "left", width: "80%" }}
//                   value={values.linkedin}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <LinkedInIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item md={6} sm={12} xs={12} lg={6}>
//                 <TextField
//                   margin="dense"
//                   label="Twitter"
//                   variant="outlined"
//                   name="twitter"
//                   style={{ alignItems: "left", width: "80%" }}
//                   value={values.twitter}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <TwitterIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item md={6} sm={12} xs={12} lg={6}>
//                 <TextField
//                   margin="dense"
//                   label="Facebook"
//                   variant="outlined"
//                   name="facebook"
//                   style={{ alignItems: "left", width: "80%" }}
//                   value={values.facebook}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <FacebookIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item md={6} sm={12} xs={12} lg={6}>
//                 <TextField
//                   margin="dense"
//                   label="Instagram"
//                   variant="outlined"
//                   name="instagram"
//                   style={{ alignItems: "left", width: "80%" }}
//                   value={values.instagram}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <InstagramIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//             </Grid>
//             <Container className={classes.margin}>
//               <Row>
//                 <Col lg={3} xs={0} />
//                 <Col lg={3} xs={5}>
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={this.nextStep}
//                     disabled
//                     startIcon={<NavigateBeforeIcon />}
//                   >
//                     Back
//                   </Button>
//                 </Col>
//                 <Col lg={3} xs={5}>
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={this.continue}
//                     endIcon={<NavigateNextIcon />}
//                   >
//                     Next
//                   </Button>
//                 </Col>
//                 <Col lg={3} xs={1} />
//               </Row>
//             </Container>
//           </div>
//         </CardContent>
//         <p className="text-center text-muted">Page 1</p>
//         <Button variant="contained" color="primary" onClick={this.save}>
//           {" "}
//           Save
//         </Button>
//         <Snackbar
//           open={this.state.open}
//           autoHideDuration={6000}
//           onClose={this.handleClose}
//           // message="Your data has been saved successfully !"
//           action={this.action}
//         >
//           <Alert
//             onClose={this.handleClose}
//             severity="success"
//             sx={{ width: "100%" }}
//           >
//             Your data has been saved successfully !
//           </Alert>
//         </Snackbar>
//       </Paper>
//     );
//   }
// }

// export default withStyles(styles)(Profile);

import React, { Component } from "react";
import { TextField, Button, Container, Paper, withStyles, Grid, IconButton, Snackbar, Typography } from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import InputAdornment from "@material-ui/core/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const styles = (theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(3),
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
  cardContent: {
    backgroundColor: theme.palette.background.default,
  },
  textField: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.shape.borderRadius,
    },
  },
  button: {
    margin: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  iconButton: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 500,
  },
  card: {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
  },
  container: {
    padding: theme.spacing(3),
  },
});

class Profile extends Component {
  state = {
    open: false,
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  save = (e) => {
    const promise = this.props.save();
    promise
      .then((res) => {
        if (res.status === 200) {
          this.setState({ open: true });
        }
      })
      .catch((err) => console.log(err));
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const { values, classes } = this.props;

    return (
      <Container maxWidth="md" className={classes.container}>
        <Paper className={classes.padding} style={{backgroundColor:"#38BDF8"}}>
          <Card className={classes.card} style={{backgroundColor:"#F3F4F6"}}>
            <CardHeader title="Personal Details" className={classes.cardHeader} />
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" className={classes.sectionTitle}>Basic Information</Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="firstname"
                    label="First Name"
                    required
                    value={values.firstname}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    label="Last Name"
                    variant="outlined"
                    name="lastname"
                    required
                    value={values.lastname}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                  />
                </Grid>
              </Grid>
              <Typography variant="h6" className={classes.sectionTitle}>Contact Information</Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    label="Email"
                    variant="outlined"
                    name="email"
                    required
                    value={values.email}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    label="Phone Number"
                    variant="outlined"
                    name="phone"
                    value={values.phone}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Typography variant="h6" className={classes.sectionTitle}>Social Profiles</Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    label="Your Website"
                    variant="outlined"
                    name="website"
                    value={values.website}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LanguageIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    label="GitHub"
                    variant="outlined"
                    name="github"
                    value={values.github}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <GitHubIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    label="Linked In"
                    variant="outlined"
                    name="linkedin"
                    value={values.linkedin}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LinkedInIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    label="Twitter"
                    variant="outlined"
                    name="twitter"
                    value={values.twitter}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <TwitterIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    label="Facebook"
                    variant="outlined"
                    name="facebook"
                    value={values.facebook}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <FacebookIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    label="Instagram"
                    variant="outlined"
                    name="instagram"
                    value={values.instagram}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <InstagramIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Container className={classes.margin}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.nextStep}
                      startIcon={<NavigateBeforeIcon />}
                      className={classes.button}
                      disabled
                    >
                      Back
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.continue}
                      endIcon={<NavigateNextIcon />}
                      className={classes.button}
                    >
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </CardContent>
            <Typography variant="body2" color="textSecondary" align="center">Page 1</Typography>
            <Button variant="contained" color="primary" onClick={this.save} className={classes.button}>
              Save
            </Button>
            <Snackbar
              open={this.state.open}
              autoHideDuration={6000}
              onClose={this.handleClose}
              action={
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={this.handleClose}
                  className={classes.iconButton}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            >
              <Alert onClose={this.handleClose} severity="success" sx={{ width: "100%" }}>
                Your data has been saved successfully!
              </Alert>
            </Snackbar>
          </Card>
        </Paper>
      </Container>
    );
  }
}

export default withStyles(styles)(Profile);
