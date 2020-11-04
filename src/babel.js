async function start() {
  return await Promise.resolve("async is here!");
}

start().then(console.log);

class Util {
  static id = Date.now();
}

console.log("util id", Util.id);
