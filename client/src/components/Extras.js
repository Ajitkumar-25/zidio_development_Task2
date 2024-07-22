import React, { Component } from "react";
import {
  TextField,
  Button,
  Container,
  Divider,
  Typography,
} from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import axios from "axios";
import { saveAs } from "file-saver";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Paper, withStyles, Grid } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@mui/material/Alert";

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
    textAlign: "center",
  },
  cardContent: {
    backgroundColor: theme.palette.background.default,
  },
  textField: {
    width: "90%",
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

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  createAndDownloadPDF = () => {
    axios
      .post("create-pdf", this.props.values)
      .then(() => {
        axios
          .get("fetch-pdf", { responseType: "arraybuffer" })
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf" });
            saveAs(pdfBlob, `${this.props.values.firstname}'s Resume.pdf`);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
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
        <Paper
          className={classes.padding}
          style={{ backgroundColor: "#38BDF8" }}
        >
          <Card className={classes.card} style={{ backgroundColor: "#F3F4F6" }}>
            <CardHeader title="Extra Details" className={classes.cardHeader} />
            <CardContent className={classes.cardContent}>
              <div className={classes.margin}>
                <Typography variant="h6" className={classes.sectionTitle}>
                  <CheckCircleIcon /> Skills/Languages
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="skill1"
                      label="Skill 1"
                      value={values.skill1}
                      onChange={this.props.handleChange}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: <InputAdornment position="start" />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="skill2"
                      label="Skill 2"
                      value={values.skill2}
                      onChange={this.props.handleChange}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: <InputAdornment position="start" />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="skill3"
                      label="Skill 3"
                      value={values.skill3}
                      onChange={this.props.handleChange}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: <InputAdornment position="start" />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="skill4"
                      label="Skill 4"
                      value={values.skill4}
                      onChange={this.props.handleChange}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: <InputAdornment position="start" />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="skill5"
                      label="Skill 5"
                      value={values.skill5}
                      onChange={this.props.handleChange}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: <InputAdornment position="start" />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="skill6"
                      label="Skill 6"
                      value={values.skill6}
                      onChange={this.props.handleChange}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: <InputAdornment position="start" />,
                      }}
                    />
                  </Grid>
                </Grid>
                <Divider className={classes.margin} />
                <Typography variant="h6" className={classes.sectionTitle}>
                  <CheckCircleIcon /> Interest
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="interest1"
                      label="Interest 1"
                      value={values.interest1}
                      onChange={this.props.handleChange}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: <InputAdornment position="start" />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="interest2"
                      label="Interest 2"
                      value={values.interest2}
                      onChange={this.props.handleChange}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: <InputAdornment position="start" />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="interest3"
                      label="Interest 3"
                      value={values.interest3}
                      onChange={this.props.handleChange}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: <InputAdornment position="start" />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="interest4"
                      label="Interest 4"
                      value={values.interest4}
                      onChange={this.props.handleChange}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: <InputAdornment position="start" />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="interest5"
                      label="Interest 5"
                      value={values.interest5}
                      onChange={this.props.handleChange}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: <InputAdornment position="start" />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="interest6"
                      label="Interest 6"
                      value={values.interest6}
                      onChange={this.props.handleChange}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: <InputAdornment position="start" />,
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
            </CardContent>
            <Container className={classes.margin}>
              <Grid container justifyContent="center" spacing={2}>
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
                    disabled
                    className={classes.button}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
              <Typography variant="body2" color="textSecondary" align="center">
                Page 5
              </Typography>

              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.createAndDownloadPDF}
                    endIcon={<GetAppIcon />}
                    className={classes.button}
                  >
                    Download Resume
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.save}
                    className={classes.button}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Container>
            <Snackbar
              open={this.state.open}
              autoHideDuration={6000}
              onClose={this.handleClose}
              action={this.action}
            >
              <Alert
                onClose={this.handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
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
