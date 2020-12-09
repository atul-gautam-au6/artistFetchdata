import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import { getData } from "../../Action/Queryaction";
import { useDispatch, useSelector } from "react-redux";
import Result from "./Result";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "12px auto 12px auto",
    width: "100%",
  },
  searchInputOn: {
    borderRadius: "20px",
    width: "20vh",
    height: "3vh",
    outline: "none",
  },

  searchInput: {
    borderRadius: "20px",
    width: "10vh",
    height: "4vh",
    outline: "none",
    color: "primary",
    fontWeight: "bold",
  },
}));
const Searchengin = () => {
  const classes = useStyles();
  const [query, setQuery] = React.useState("");

  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (query.length > 0) {
      dispatch(getData(query));
      setQuery("");
    }
  };
  const queryValidate = useSelector((state) => state.booklist);
  const { loading, books } = queryValidate;
  // console.log(queryValidate);
  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={handlesubmit} className={classes.form}>
          <input
            type="text"
            value={query}
            color="primary"
            onChange={(e) => setQuery(e.target.value)}
            className={classes.searchInputOn}
          />
          <input
            className={classes.searchInput}
            type="submit"
            color="primary"
            value="Search"
            disabled={!(query.length > 0)}
          />
        </form>
      </Container>
      <Result books={books} loading={loading} />
    </>
  );
};

export default Searchengin;
