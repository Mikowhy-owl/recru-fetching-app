import { Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AboutUsImage from "../images/about-us-image.jpg";

class AboutUsView extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.mainContainer} justify="center">
        <Grid container item md={10} lg={8} spacing={4}>
          <Grid container item xs={12}>
            <Typography variant="h3"> Title</Typography>
            <Typography variant="p" align="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              euismod malesuada vulputate. Curabitur enim lorem, porta nec justo
              nec, rhoncus mollis tellus. Fusce finibus purus quis porttitor
              volutpat. Nam ullamcorper dictum elit. Mauris ut metus quis tellus
              luctus tempus non sit amet ipsum. Aenean eu ipsum felis.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Pellentesque porttitor feugiat
              tristique. Vivamus quis felis nec nulla malesuada sodales ac vel
              nulla. Aenean pretium sed mauris eget molestie. Integer viverra
              luctus commodo. Praesent posuere enim maximus ante auctor
              facilisis. Suspendisse eu consectetur mi, eget pharetra arcu.
              Integer justo lectus, ornare et fringilla in, lobortis id risus.
              Maecenas mauris tellus, vehicula quis lectus ut, fringilla
              interdum justo. Sed sed justo ut metus dictum rhoncus faucibus
              tristique tortor.
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <img src={AboutUsImage} alt="About us" className={classes.image} />
          </Grid>
          <Grid container item md={6}>
            <Typography variant="h4">Lorem Ipsum</Typography>
            <Typography variant="p" align="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              euismod malesuada vulputate. Curabitur enim lorem, porta nec justo
              nec, rhoncus mollis tellus. Fusce finibus purus quis porttitor
              volutpat. Nam ullamcorper dictum elit. Mauris ut metus quis tellus
              luctus tempus non sit amet ipsum. Aenean eu ipsum felis.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Pellentesque porttitor feugiat
              tristique. Vivamus quis felis nec nulla malesuada sodales ac vel
              nulla. Aenean pretium sed mauris eget molestie. Integer viverra
              luctus commodo. Praesent posuere enim maximus ante auctor
              facilisis. Suspendisse eu consectetur mi, eget pharetra arcu.
              Integer justo lectus, ornare et fringilla in, lobortis id risus.
              Maecenas mauris tellus, vehicula quis lectus ut, fringilla
              interdum justo. Sed sed justo ut metus dictum rhoncus faucibus
              tristique tortor.
            </Typography>
          </Grid>
          <Grid container item md={6}>
            <Typography variant="h4">Lorem Ipsum</Typography>
            <Typography variant="p" align="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              euismod malesuada vulputate. Curabitur enim lorem, porta nec justo
              nec, rhoncus mollis tellus. Fusce finibus purus quis porttitor
              volutpat. Nam ullamcorper dictum elit. Mauris ut metus quis tellus
              luctus tempus non sit amet ipsum. Aenean eu ipsum felis.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Pellentesque porttitor feugiat
              tristique. Vivamus quis felis nec nulla malesuada sodales ac vel
              nulla. Aenean pretium sed mauris eget molestie. Integer viverra
              luctus commodo. Praesent posuere enim maximus ante auctor
              facilisis. Suspendisse eu consectetur mi, eget pharetra arcu.
              Integer justo lectus, ornare et fringilla in, lobortis id risus.
              Maecenas mauris tellus, vehicula quis lectus ut, fringilla
              interdum justo. Sed sed justo ut metus dictum rhoncus faucibus
              tristique tortor.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const classes = (theme) => ({
  mainContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(12),
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
});

export default withRouter(withStyles(classes)(AboutUsView));
