const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const os = require("os");
const host = findLocalIp();

function findLocalIp() {
  let ip = "",
    interfaces = os.networkInterfaces();

  const excludeIps = ["127.0.0.1"];

  for (const i of Object.values(interfaces)) {
    i.forEach((item) => {
      if (
        item.family === "IPv4" &&
        !item.internal &&
        !excludeIps.includes(item.address)
      ) {
        ip = item.address;
      }
    });
  }

  return ip;
}

module.exports = merge(common, {
  devtool: "source-map",
  devServer: {
    host: host,
    port: "8493",
    contentBase: "./dist",
    hot: true,
  },
});
