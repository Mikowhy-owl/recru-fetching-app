import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Grid,
  TextField,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Table,
  TableHead,
  TableBody,
  withStyles,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import SearchIcon from "@material-ui/icons/Search";

class HomeView extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    let params = this.props.match.params;

    if (params.page) {
      this.setState({ page: params.page });
      this.getData(params.page);
    } else {
      this.props.history.replace("/home/1");
    }
  }

  getData = (page) => {
    fetch(
      `https://gorest.co.in/public-api/users?page=${page ?? this.state.page}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data.data.slice(0, 5),
          filteredData: data.data.slice(0, 5),
          tableLoading: false,
        });
        if (this.state.isLoading === true) {
          this.setState({ isLoading: false });
        }
      })
      .catch((error) => {
        this.setState({
          fetchingError: true,
          fetchingErrorMessage:
            "Error fetching and parsing data TypeError: Failed to fetch",
          isLoading: false,
        });
        console.log("Error fetching and parsing data", error);
      });
  };

  searchData(e) {
    e.persist();
    this.setState({
      filteredData: this.state.data.filter((x) =>
        x.name.toLowerCase().includes(e?.target?.value.toLowerCase())
      ),
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        {!this.state.isLoading ? (
          <>
            {!this.state.fetchingError ? (
              !this.state.tableLoading ? (
                <Grid container justify="center">
                  <Grid container item md={10} lg={8} spacing={4}>
                    <Grid container item justify="flex-end">
                      <Paper className={classes.searchContainer}>
                        <Grid container>
                          <Grid item xs={2} className={classes.searchIconItem}>
                            <SearchIcon />
                          </Grid>
                          <Grid item xs={10}>
                            <TextField
                              className={classes.searchInput}
                              onChange={(e) => this.searchData(e)}
                              id="input-with-icon-textfield"
                            />
                          </Grid>
                        </Grid>
                      </Paper>

                      <TableContainer component={Paper}>
                        <Table
                          className={classes.table}
                          aria-label="simple table"
                        >
                          <TableHead>
                            <StyledTableRow>
                              <StyledTableCell>Name</StyledTableCell>
                              <StyledTableCell>E-mail</StyledTableCell>
                              <StyledTableCell>Gender</StyledTableCell>
                              <StyledTableCell>Status</StyledTableCell>
                            </StyledTableRow>
                          </TableHead>
                          <TableBody>
                            {this.state.filteredData.length != 0 ? (
                              this.state.filteredData.map((item) => (
                                <StyledTableRow key={item.name}>
                                  <StyledTableCell component="th" scope="row">
                                    {item.name}
                                  </StyledTableCell>
                                  <StyledTableCell component="th" scope="row">
                                    {item.email}
                                  </StyledTableCell>
                                  <StyledTableCell component="th" scope="row">
                                    {item.gender}
                                  </StyledTableCell>
                                  <StyledTableCell component="th" scope="row">
                                    {item.status}
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))
                            ) : (
                              <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                  No data
                                </StyledTableCell>
                              </StyledTableRow>
                            )}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <Grid container className={classes.progressContainer}>
                  <CircularProgress />
                </Grid>
              )
            ) : (
              <Grid container justify="center">
                <Typography variant="h5" color="error">
                  {this.state.fetchingErrorMessage}
                </Typography>
              </Grid>
            )}

            <Grid container>
              <Grid item className={classes.pagination}>
                <Pagination
                  count={10}
                  defaultPage={parseInt(this.state.page) ?? 1}
                  color="primary"
                  onChange={(e, v) => {
                    this.setState({ tableLoading: true });
                    window.history.replaceState(null, "", `/home/${v}`);
                    this.getData(v);
                  }}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid container className={classes.progressContainer}>
            <CircularProgress />
          </Grid>
        )}
      </>
    );
  }
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const classes = (theme) => ({
  searchContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  searchIconItem: {
    alignSelf: "center",
    textAlign: "center",
    paddingTop: theme.spacing(1),
  },
  searchInput: {
    padding: theme.spacing(1),
  },
  pagination: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  progressContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    minHeight: "322px",
  },
});

export default withRouter(withStyles(classes)(HomeView));
