import React from "react";
import { useSuperheroesData } from "../hooks/useSuperheroesData";

const onSuccess = () => {
  console.log("on Success");
};
const onError = (error) => {
  console.log("ops on Error", error.message)
};

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useSuperheroesData(onSuccess,onError)
  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  //error
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ Super Heroes</h2>
      <button
        style={{
          border: "none",
          background: "#ff4154",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={refetch}
      >
        show data
      </button>
      {data?.data.map((el) => (
        <p key={el.id}>{el.name}</p>
      ))}
    </>
  );
};

export default RQSuperHeroes;
