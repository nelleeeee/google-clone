import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">about</Link>
          <Link to="/store">store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">gmail</Link>
          <Link to="/images">images</Link>
          <AppsIcon />
          <Avatar />
          {/* Avatar */}
        </div>
      </div>
      <div className="home__body"></div>
    </div>
  );
}

export default Home;
