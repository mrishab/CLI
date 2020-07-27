# Introduction
CLI is a minimal parser to read command line arguments using the `minist` library. This tool is helpful in building command line applications.

# Install

1. Clone this repository
    ```
    git clone git@github.com:mrishab/CLI.git
    ```

2. Go to the project's root directory and install dependencies.
    ```
    npm install
    ```

3. Create a TAR file locally.
    ```
    npm pack
    ```
    This will create a tarball locally in the current directory, named `cli-<version>.tgz`.

4. Now you can install this project in a different project using the relative file path.
    ```
    npm install -f /path/to/this/project/root/directory/cli-<version>.tgz
    ```

# Usage

1. Create an instance of CLI
    ```
    const { CLI } = require("cli");

    const cli = new CLI();
    ```

2. Initialize the cli instance of read and parse the arguments
    ```
    cli.read();
    cli.parse();
    ```

3. Read the argument as a specified type. Consider that the following arguments were passed:

    ```
    node app.js --arg1 something --arg2 v1,v2,v3
    ```

    3.1 The values can be read as string.
        ```
        const x = cli.getString("arg1");

        x >>> something
        ```
    3.2 It can also be read as an array.
        ```
        const x = cli.getArray("arg2", ",");

        x >>> ["v1", "v2", "v3"];
        ```
