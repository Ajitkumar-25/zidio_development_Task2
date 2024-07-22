// import React, {Component} from 'react';
// import {TextField, Button, Container, Divider} from '@material-ui/core';
// import {Card, CardHeader, CardContent} from '@material-ui/core';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
// import LinkIcon from '@material-ui/icons/Link';
// import TitleIcon from '@material-ui/icons/Title';
// import DescriptionIcon from '@material-ui/icons/Description';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import {Row, Col} from 'react-bootstrap';
// import {Paper, withStyles, Grid} from '@material-ui/core';
// import Snackbar from "@material-ui/core/Snackbar";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import MuiAlert from '@mui/material/Alert';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// const styles = theme => ({
//   margin: {
//     margin: theme.spacing(1.5),
//   },
//   padding: {
//     padding: theme.spacing(1),
//   },
// });

// class Projects extends Component {
//   state = {
//     open : false
//   };

//   continue = e => {
//     e.preventDefault ();
//     this.props.nextStep ();
//   };

//   back = e => {
//     e.preventDefault ();
//     this.props.prevStep ();
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

//   render () {
//     const {values} = this.props;
//     const {classes} = this.props;

//     return (
//       <Paper className={classes.padding}>
//         <Card>
//           <CardHeader title="Projects Developed" />
//         </Card>
//         <CardContent>
//           <div className={classes.margin}>
//             <Grid container spacing={2} alignItems="center" lg={12}>
//               <Grid item xs={12} lg={12}>
//                 <h5>Project 1</h5>
//               </Grid>
//               <Grid item md={12} sm={12} xs={12} lg={12}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="title1"
//                   label="Title"
//                   style={{width: '80%'}}
//                   required
//                   value={values.title1}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="start">
//                         <TitleIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item md={4} sm={6} xs={12} lg={12}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="link1"
//                   label="Link"
//                   style={{width: '80%'}}
//                   required
//                   value={values.link1}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="start">
//                         <LinkIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>

//               <Grid item md={12} sm={12} xs={12} lg={12}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="projectDescription1"
//                   label="Description"
//                   style={{width: '80%'}}
//                   required
//                   value={values.projectDescription1}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="start">
//                         <DescriptionIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//             </Grid>
//             <br />
//             <Divider />
//             <br />
//             <Grid container spacing={2} alignItems="center" lg={12}>
//               <Grid item xs={12} lg={12}>
//                 <h5>Project 2</h5>
//               </Grid>
//               <Grid item md={12} sm={12} xs={12} lg={12}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="title2"
//                   label="Title"
//                   style={{width: '80%'}}
//                   required
//                   value={values.title2}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="start">
//                         <TitleIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item md={4} sm={6} xs={12} lg={12}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="link2"
//                   label="Link"
//                   style={{width: '80%'}}
//                   required
//                   value={values.link2}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="start">
//                         <LinkIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>

//               <Grid item md={12} sm={12} xs={12} lg={12}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="projectDescription2"
//                   label="Description"
//                   style={{width: '80%'}}
//                   required
//                   value={values.projectDescription2}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="start">
//                         <DescriptionIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//             </Grid>
//             <br />
//             <Divider />
//             <br />
//             <Grid container spacing={2} alignItems="center" lg={12}>
//               <Grid item xs={12} lg={12}>
//                 <h5>Project 3</h5>
//               </Grid>
//               <Grid item md={12} sm={12} xs={12} lg={12}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="title3"
//                   label="Title"
//                   style={{width: '80%'}}
//                   value={values.title3}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="start">
//                         <TitleIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item md={12} sm={12} xs={12} lg={12}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="link3"
//                   label="Link"
//                   style={{width: '80%'}}
//                   value={values.link3}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="start">
//                         <LinkIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>

//               <Grid item md={12} sm={12} xs={12} lg={12}>
//                 <TextField
//                   margin="dense"
//                   variant="outlined"
//                   name="projectDescription3"
//                   label="Description"
//                   style={{width: '80%'}}
//                   value={values.projectDescription3}
//                   onChange={this.props.handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="start">
//                         <DescriptionIcon />
//                       </InputAdornment>
//                     ),
//                   }}
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
//         <p className="text-center text-muted">Page 3</p>
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

// export default withStyles (styles) (Projects);

import React, { Component } from 'react';
import { TextField, Button, Container, Divider , Typography} from '@material-ui/core';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import LinkIcon from '@material-ui/icons/Link';
import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import InputAdornment from '@material-ui/core/InputAdornment';
// import { Row, Col } from 'react-bootstrap';
import { Paper, withStyles, Grid } from '@material-ui/core';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const styles = theme => ({
  padding: {
    padding: theme.spacing(3),
  },
  card: {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    marginBottom: theme.spacing(2),
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  margin: {
    margin: theme.spacing(2),
  },
});

class Projects extends Component {
  state = {
    open: false,
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  save = e => {
    const promise = this.props.save();
    promise
      .then(res => {
        if (res.status === 200) {
          this.setState({ open: true });
        }
      })
      .catch(err => console.log(err));
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const { values, classes } = this.props;

    return (
      <Container maxWidth="md" className={classes.padding}>
        <Paper className={classes.padding} style={{backgroundColor:"#38BDF8"}}>
          <Card className={classes.card} style={{backgroundColor:"#F3F4F6"}}>
            <CardHeader title="Projects Developed" className={classes.cardHeader} />
            <CardContent>
              <div className={classes.margin}>
                {/* Project 1 */}
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <h5>Project 1</h5>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="title1"
                      label="Title"
                      required
                      value={values.title1}
                      onChange={this.props.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <TitleIcon />
                          </InputAdornment>
                        ),
                      }}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="link1"
                      label="Link"
                      required
                      value={values.link1}
                      onChange={this.props.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <LinkIcon />
                          </InputAdornment>
                        ),
                      }}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="projectDescription1"
                      label="Description"
                      required
                      value={values.projectDescription1}
                      onChange={this.props.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <DescriptionIcon />
                          </InputAdornment>
                        ),
                      }}
                      className={classes.textField}
                    />
                  </Grid>
                </Grid>

                {/* Project 2 */}
                <Divider className={classes.margin} />
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <h5>Project 2</h5>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="title2"
                      label="Title"
                      required
                      value={values.title2}
                      onChange={this.props.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <TitleIcon />
                          </InputAdornment>
                        ),
                      }}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="link2"
                      label="Link"
                      required
                      value={values.link2}
                      onChange={this.props.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <LinkIcon />
                          </InputAdornment>
                        ),
                      }}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="projectDescription2"
                      label="Description"
                      required
                      value={values.projectDescription2}
                      onChange={this.props.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <DescriptionIcon />
                          </InputAdornment>
                        ),
                      }}
                      className={classes.textField}
                    />
                  </Grid>
                </Grid>

                {/* Project 3 */}
                <Divider className={classes.margin} />
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <h5>Project 3</h5>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="title3"
                      label="Title"
                      value={values.title3}
                      onChange={this.props.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <TitleIcon />
                          </InputAdornment>
                        ),
                      }}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="link3"
                      label="Link"
                      value={values.link3}
                      onChange={this.props.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <LinkIcon />
                          </InputAdornment>
                        ),
                      }}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="projectDescription3"
                      label="Description"
                      value={values.projectDescription3}
                      onChange={this.props.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <DescriptionIcon />
                          </InputAdornment>
                        ),
                      }}
                      className={classes.textField}
                    />
                  </Grid>
                </Grid>
              </div>
            </CardContent>
          <Grid container className={classes.buttonContainer}>
            <Grid item xs={12}>
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
          </Grid>
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
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
            >
            <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
              Your data has been saved successfully!
            </Alert>
          </Snackbar>
        <Typography variant="body2" color="textSecondary" align="center">Page 3</Typography>
            <Button variant="contained" color="primary" onClick={this.save} className={classes.button}>
              Save
            </Button>
            </Card>
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
        </Paper>
      </Container>
    );
  }
}

export default withStyles(styles)(Projects);
