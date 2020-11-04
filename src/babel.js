async function start() {
  return await Promise.resolve("async is here!");
}

const unused = "var";
console.log("alex");

start().then(console.log);

// class Util {
//   static id = Date.now();
// }

// console.log("util id", Util.id);

import("lodash")
  .then((_) => {
    console.log("lodash", _.default().random(0, 42, true));
  })
  .catch((e) => console.log("e", e));
