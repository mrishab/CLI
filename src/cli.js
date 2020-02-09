const minimist = require("minimist");

class CLI {

    read() {
        this.args = process.argv.slice(2);
    }

    parse() {
        this.args = minimist(this.args);
    }

    getArray(key, delim) {
        const arg = this._get(key);

        return arg.split(delim);
    }

    getString(key) {
        const arg = this._get(key);

        return arg;
    }

    _get(key) {
        const arg = this.args[key];
        if (!arg) {
            throw new Error(`No such argument: ${key}`);
        }

        return arg;
    }
}

module.exports = {
    CLI
}