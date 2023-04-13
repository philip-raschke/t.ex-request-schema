# Installation

To use t.ex-request-schema, you need to install Node.js (ideally v16+) and npm (ideally v8+). Use the following command to install the dependencies.

```npm install```

Afterwards you can convert HTTP/S requests to t.ex-Graph with the following command:

```node index.js json examples/```

# Documentation

Following this link [t.ex-request-schema](https://t-ex-tools.github.io/t.ex-request-schema/),you can find the documentation of the code.

# Manual

```
Usage: t.ex-request-schema [options] [command]

A tool to generate the JSON schema of the T.EX request format which relies on the WebExtensions interface of the different browsers.

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  json <dir>      Generate JSON schema from T.EX dump.
  help [command]  display help for command

---

Usage: t.ex-request-schema json [options] <dir>

Generate JSON schema from T.EX dump.

Arguments:
  dir         path to JSON files

Options:
  -h, --help  display help for command  
```