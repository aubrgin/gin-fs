const fs = require('fs');
const os = require('os');


module.exports = {
  ginPath: `${os.homedir()}/.gin/`,
  getConfig(key, namespace = 'gin') {
    let config = JSON.parse(fs.readFileSync(this.namespacedPath(namespace), 'utf8')) || {};

    return config[key];
  },
  setConfig(key, value, namespace = 'gin') {
    let config = JSON.parse(fs.readFileSync(this.namespacedPath(namespace), 'utf8')) || {};

    config[key] = value;

    fs.writeFileSync(this.namespacedPath(namespace). JSON.stringify(config));
  },
  namespacedPath(namespace) {
    return `${this.ginPath}/${namespace}`;
  },
};
