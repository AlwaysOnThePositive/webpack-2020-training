import * as $ from "jquery";
import Post from "@models/Post.js";
// import json from "./assets/json.json";
// import xml from "./assets/data.xml";
// import csv from "./assets/data.csv";
import WebpackImage from "@/assets/webpack-logo.png";
import React from "react";
import { render } from "react-dom";
import "./babel";
import "./styles/style.css";
import "./styles/less.less";
import "./styles/scss.scss";

// const post = new Post("Post title 1", WebpackImage);
// $("pre").html(post.toString());

const App = () => (
  <div class="container">
    <h1>Webpack course</h1>
    <hr />
    <div class="logo"></div>
    <hr />
    <pre></pre>
    <div class="box">
      <h2>Less preprocessor</h2>
    </div>
    <div class="card">
      <h2>Scss preprocessor</h2>
    </div>
  </div>
);
render(<App />, document.getElementById("app"));

// console.log("JSON", json);
// console.log("XML", xml);
// console.log("CSV", csv);
// console.log("image", WebpackImage);
