import React from "react";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top bg-danger">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Movie Search Application
            </a>
          </div>
          <ul className="nav navbar-nav d-flex flex-row mx-auto justify-content-around">
            <li
              className="active mx-3"
              style={{ textDecoration: "none", listStyle: "none" }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "black",
                }}
                className="fs-5"
                to={"/"}
              >
                Movie
              </Link>
            </li>
            <li
              className="mx-3"
              style={{ textDecoration: "none", listStyle: "none" }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "black",
                }}
                className="fs-5"
                to="/addMovie"
              >
                Create New
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbars;
