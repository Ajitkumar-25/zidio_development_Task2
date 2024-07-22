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
