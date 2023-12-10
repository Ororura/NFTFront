import React from "react";

const Container = ({children}) => {
  return (<div style={{
    display: "grid",
    width: "30%",
    justifyContent: "center",
    margin: "auto",
    marginTop: "20px",
    backgroundColor: "#c081d5",
    borderRadius: "15px",
    padding: "10px"
  }}>{children}</div>)
}

export default Container;