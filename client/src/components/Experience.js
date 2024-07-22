import React, {Component} from 'react';
import {TextField, Button, Container, Divider, Typography} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import DescriptionIcon from '@material-ui/icons/Description';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import BusinessIcon from '@material-ui/icons/Business';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Paper, withStyles, Grid} from '@material-ui/core';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const styles = theme => ({
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

class Experience extends Component {
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
            <CardHeader title="Experience Details" className={classes.cardHeader} />
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" className={classes.sectionTitle}>Experience 1</Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="institute1"
                    label="Institute/Organisation"
                    required
                    value={values.institute1}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <BusinessIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    label="Position"
                    variant="outlined"
                    name="position1"
                    required
                    value={values.position1}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EventSeatIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    label="Duration"
                    variant="outlined"
                    name="duration1"
                    required
                    value={values.duration1}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <TimelapseIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    margin="dense"
                    label="Description"
                    variant="outlined"
                    name="experienceDescription1"
                    required
                    value={values.experienceDescription1}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <DescriptionIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Divider className={classes.margin} />
              <Typography variant="h6" className={classes.sectionTitle}>Experience 2</Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="institute2"
                    label="Institute/Organisation"
                    required
                    value={values.institute2}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <BusinessIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    label="Position"
                    variant="outlined"
                    name="position2"
                    required
                    value={values.position2}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EventSeatIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    label="Duration"
                    variant="outlined"
                    name="duration2"
                    required
                    value={values.duration2}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <TimelapseIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    margin="dense"
                    label="Description"
                    variant="outlined"
                    name="experienceDescription2"
                    required
                    value={values.experienceDescription2}
                    onChange={this.props.handleChange}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <DescriptionIcon />
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
                      onClick={this.back}
                      startIcon={<NavigateBeforeIcon />}
                      className={classes.button}
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
            <Typography variant="body2" color="textSecondary" align="center">Page 4</Typography>
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

export default withStyles(styles)(Experience);
