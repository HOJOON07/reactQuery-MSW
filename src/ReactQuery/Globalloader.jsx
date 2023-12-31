import React from "react";
import { useIsFetching } from "react-query";

export default function Globalloader() {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div style={{ color: "white", backgroundColor: "black " }}>
      Queries are fetching in the background...
    </div>
  ) : null;
}
