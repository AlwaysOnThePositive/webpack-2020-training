import Post from "./Post.js";
// import json from "./assets/json.json";
// import xml from "./assets/data.xml";
// import csv from "./assets/data.csv";
import WebpackImage from "./assets/webpack-logo.png";
import "./styles/style.css";

console.log('image', WebpackImage);
const post = new Post("Post title 1", WebpackImage);

console.log("Post to string", post.toString());
// console.log("JSON", json);
// console.log("XML", xml);
// console.log("CSV", csv);
