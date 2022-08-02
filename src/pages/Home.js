import React from "react";
import Input from "../components/Input";
import List from "../components/List";

const Home = () => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Input />
        <List />
      </div>
    </div>
  );
};

export default Home;
