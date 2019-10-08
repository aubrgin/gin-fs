const fs = require('fs');
const os = require('os');


module.exports = {
  ginPath: `${os.homedir()}/.gin/`,
  getConfig(key, namespace = 'gin') {
    const path = this.namespacedPath(namespace);

    let config = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path, 'utf8')) : {};

    return config[key];
  },
  setConfig(key, value, namespace = 'gin') {
    const path = this.namespacedPath(namespace);

    let config = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path, 'utf8')) : {};

    config[key] = value;

    fs.writeFileSync(this.namespacedPath(namespace), JSON.stringify(config));
  },
  namespacedPath(namespace) {
    return `${this.ginPath}/${namespace}`;
  },
};
