// import React, { Component } from "react";
// import { TextField, Button, Container, Divider } from "@material-ui/core";
// import { Card, CardHeader, CardContent } from "@material-ui/core";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";
// import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
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
//     margin: theme.spacing(1.5),
//   },
//   padding: {
//     padding: theme.spacing(1),
//   },
// });

// class Education extends Component {
//   state = {
//     open: false,
//   };

//   continue = (e) => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

//   back = (e) => {
//     e.preventDefault();
//     this.props.prevStep();
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
//           <CardHeader title="Education Details" />
//         </Card>
//         <CardContent>
//           <div className={classes.margin}>
//             <Grid container spacing={2} alignItems="center" lg={12}>
//               <Grid item md={4} sm={12} xs={12} lg={4}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="college"
//                   label="College/Unviersity"
//                   style={{ width: "80%" }}
//                   required
//                   value={values.college}
//                   onChange={this.props.handleChange}
//                 />
//               </Grid>
//               <Grid item md={4} sm={6} xs={12} lg={4}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="fromyear1"
//                   label="From Year"
//                   type="date"
//                   style={{ width: "80%" }}
//                   required
//                   value={values.fromyear1}
//                   onChange={this.props.handleChange}
//                 />
//               </Grid>

//               <Grid item md={4} sm={6} xs={12} lg={4}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="toyear1"
//                   type="date"
//                   label="To Year"
//                   style={{ width: "80%" }}
//                   required
//                   value={values.toyear1}
//                   onChange={this.props.handleChange}
//                 />
//               </Grid>

//               <Grid item md={4} sm={12} xs={12} lg={4}>
//                 <TextField
//                   margin="dense"
//                   label="Qualification"
//                   variant="outlined"
//                   style={{ width: "80%" }}
//                   name="qualification1"
//                   required
//                   value={values.qualification1}
//                   onChange={this.props.handleChange}
//                 />
//               </Grid>

//               <Grid item md={8} sm={12} xs={12} lg={8}>
//                 <TextField
//                   margin="dense"
//                   label="Description"
//                   variant="outlined"
//                   style={{ width: "90%" }}
//                   name="description1"
//                   required
//                   value={values.description1}
//                   onChange={this.props.handleChange}
//                 />
//               </Grid>
//             </Grid>
//             <br />
//             <Divider />
//             <br />
//             <Grid container spacing={2} alignItems="center" lg={12}>
//               <Grid item md={4} sm={12} xs={12} lg={4}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="school"
//                   label="School"
//                   style={{ width: "80%" }}
//                   required
//                   value={values.school}
//                   onChange={this.props.handleChange}
//                 />
//               </Grid>
//               <Grid item md={4} sm={6} xs={12} lg={4}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="fromyear2"
//                   label="From Year"
//                   type="date"
//                   style={{ width: "80%" }}
//                   required
//                   value={values.fromyear2}
//                   onChange={this.props.handleChange}
//                 />
//               </Grid>

//               <Grid item md={4} sm={6} xs={12} lg={4}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="toyear2"
//                   label="To Year"
//                   type="date"
//                   style={{ width: "80%" }}
//                   required
//                   value={values.toyear2}
//                   onChange={this.props.handleChange}
//                 />
//               </Grid>

//               <Grid item md={4} sm={12} xs={12} lg={4}>
//                 <TextField
//                   margin="dense"
//                   label="Qualification"
//                   variant="outlined"
//                   style={{ width: "80%" }}
//                   name="qualification2"
//                   required
//                   value={values.qualification2}
//                   onChange={this.props.handleChange}
//                 />
//               </Grid>

//               <Grid item md={8} sm={8} xs={8} lg={8}>
//                 <TextField
//                   margin="dense"
//                   label="Description"
//                   variant="outlined"
//                   style={{ width: "90%" }}
//                   name="description2"
//                   required
//                   value={values.description2}
//                   onChange={this.props.handleChange}
//                 />
//               </Grid>
//             </Grid>
//           </div>
//         </CardContent>
//         <Container className={classes.margin}>
//           <Row>
//             <Col xs={4} />
//             <Col xs={2}>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={this.back}
//                 startIcon={<NavigateBeforeIcon />}
//               >
//                 Back
//               </Button>
//             </Col>
//             <Col xs={2}>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={this.continue}
//                 endIcon={<NavigateNextIcon />}
//               >
//                 Next
//               </Button>
//             </Col>
//             <Col xs={4} />
//           </Row>
//         </Container>
//         <p className="text-center text-muted">Page 2</p>
//         <Button variant="contained" color="primary" onClick={this.save}>
//           {" "}
//           Save
//         </Button>
//         <Snackbar
//           open={this.state.open}
//           autoHideDuration={6000}
//           onClose={this.handleClose}
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

// export default withStyles(styles)(Education);

import React, { Component } from "react";
import { TextField, Button, Container, Divider, Typography } from "@material-ui/core";
import { Card, CardHeader, CardContent, withStyles, Grid } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { Paper } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
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
    marginBottom: theme.spacing(2),
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
  card: {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
  },
  container: {
    padding: theme.spacing(3),
  },
});

class Education extends Component {
  state = {
    open: false,
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  save = (e) => {
    const promise = this.props.save();
    promise
      .then((res) => {
        if (res.status === 200) {
          this.setState((prevState) => ({
            open: true,
          }));
        }
      })
      .catch((err) => console.log(err));
  };

  handleClick = () => {
    this.setState((prevState) => ({
      open: true,
    }));
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState((prevState) => ({
      open: false,
    }));
  };

  render() {
    const { values, classes } = this.props;

    return (
      <Container maxWidth="md" className={classes.container}>
        <Paper className={classes.padding} style={{backgroundColor:"#38BDF8"}}>
          <Card className={classes.card} style={{backgroundColor:"#F3F4F6"}}>
            <CardHeader title="Education Details" className={classes.cardHeader} />
            <CardContent className={classes.cardContent}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="college"
                    label="College/University"
                    required
                    value={values.college}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    margin="dense"
                    label="From Year"
                    variant="outlined"
                    type="date"
                    required
                    name="fromyear1"
                    value={values.fromyear1}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    margin="dense"
                    label="To Year"
                    variant="outlined"
                    type="date"
                    required
                    name="toyear1"
                    value={values.toyear1}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    label="Qualification"
                    variant="outlined"
                    required
                    name="qualification1"
                    value={values.qualification1}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    label="Description"
                    variant="outlined"
                    required
                    name="description1"
                    value={values.description1}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                  />
                </Grid>
              </Grid>
              <Divider className={classes.margin} />
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="school"
                    label="School"
                    required
                    value={values.school}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    margin="dense"
                    label="From Year"
                    variant="outlined"
                    type="date"
                    required
                    name="fromyear2"
                    value={values.fromyear2}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    margin="dense"
                    label="To Year"
                    variant="outlined"
                    type="date"
                    required
                    name="toyear2"
                    value={values.toyear2}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    label="Qualification"
                    variant="outlined"
                    required
                    name="qualification2"
                    value={values.qualification2}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    label="Description"
                    variant="outlined"
                    required
                    name="description2"
                    value={values.description2}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center" className={classes.margin}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.back}
                  startIcon={<NavigateBeforeIcon />}
                  className={classes.button}
                >
                  Back
                </Button>
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
            </CardContent>
            <Typography variant="body2" color="textSecondary" align="center">Page 2</Typography>
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

export default withStyles(styles)(Education);
