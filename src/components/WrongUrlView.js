import { Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class WrongUrlView extends Component {
  render() {
    return (
      <>
        <Grid container justify="center" style={{ padding: "10px" }}>
          <Typography variant="h6">Wrong url!</Typography>
        </Grid>
      </>
    );
  }
}
