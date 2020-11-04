import * as $ from "jquery";
import Post from "@models/Post.js";
// import json from "./assets/json.json";
// import xml from "./assets/data.xml";
// import csv from "./assets/data.csv";
import WebpackImage from "@/assets/webpack-logo.png";
import "./babel";
import "./styles/style.css";
import "./styles/less.less";
import "./styles/scss.scss";

const post = new Post("Post title 1", WebpackImage);
$("pre").html(post.toString());

// console.log("JSON", json);
// console.log("XML", xml);
// console.log("CSV", csv);
// console.log("image", WebpackImage);
