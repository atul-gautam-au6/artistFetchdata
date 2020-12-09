import React from "react";
import MeadiaCard from "./MeadiaCard";
import Loading from "../Loading";
const Result = ({ books, loading }) => {
  return loading ? (
    <Loading />
  ) : books ? (
    <MeadiaCard card={books} />
  ) : (
    <div></div>
  );
};

export default Result;
