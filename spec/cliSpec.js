const { CLI } = require("../src/cli");

describe("CLI Spec", () => {

    let cli;

    beforeEach(() => {
        cli = new CLI();
    });

    it("getArray returns array separated by delimiter", () => {
        process.argv = ["node", "/path/to/file", "--values", "v1,v2,v3,v4,v5"];
        cli.read();
        cli.parse();

        const ret = cli.getArray("values", ",");

        expect(ret.length).toBe(5);
        expect(ret[0]).toBe("v1");
        expect(ret[1]).toBe("v2");
        expect(ret[2]).toBe("v3");
        expect(ret[3]).toBe("v4");
        expect(ret[4]).toBe("v5");
    });

    it("getArray returns the element with single value when delimiter is missing", () => {
        process.argv = ["node", "/path/to/file", "--values", "v1,v2,v3,v4,v5"];
        cli.read();
        cli.parse();

        const ret = cli.getArray("values", "%");

        expect(ret.length).toBe(1);
        expect(ret[0]).toBe("v1,v2,v3,v4,v5");
    });

    it("getArray throws error when no mapping for 'values'", () => {
        process.argv = ["node", "/path/to/file", "--something-else", "v1,v2,v3,v4,v5"];
        cli.read();
        cli.parse();

        expect(() => { cli.getArray("values") }).toThrowError("No such argument: values");
    })

    it("getString returns string value for the specified key", () => {
        process.argv = ["node", "/path/to/file", "--key", "value"];
        cli.read();
        cli.parse();

        const ret = cli.getString("key");

        expect(ret).toBe("value");
    });

    it("getString throws error when non-existing key is passed", () => {
        process.argv = ["node", "/path/to/file", "--key", "value"];
        cli.read();
        cli.parse();

        expect(() => cli.getString("nonExistingKey")).toThrowError("No such argument: nonExistingKey");
    });
});