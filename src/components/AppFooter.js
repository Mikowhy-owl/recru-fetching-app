import React from "react";
import { AppBar, Toolbar, Typography, Grid, Link } from "@material-ui/core";
import { withRouter } from "react-router-dom";

function AppFooter() {
  return (
    <AppBar position="fixed" style={{ bottom: 0, top: "auto" }}>
      <Toolbar>
        <Grid container justify="center">
          <Typography variant="body2" align="center">
            {"Copyright © "}
            <Link color="secondary" href="https://github.com/Mikowhy-owl">
              Mikowhy Owl
            </Link>{" "}
            {new Date().getFullYear()}
            {". All Rights Reserved."}
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default withRouter(AppFooter);
