#!/usr/bin/env node
var argv = require("optimist").argv,
    util = require("util");

var help = [
    "usage: juggernaut [options] ",
    "",
    "Starts a juggernaut server using the specified command-line options",
    "",
    "options:",
    "  --port          PORT       Port that the Juggernaut server should run on",
    "  --address       ADDRESS    IP   that the Juggernaut server should run on",
    "  --redis_url     URL        Redis URL for the Redis db the Juggernaut server should use",
    "  --silent            Silence the log output",
    "  -h, --help          You're staring at it"
].join('\n');

if (argv.h || argv.help) {
  return util.puts(help);
}

if (argv.redis_url) {
  // Set the REDISTOGO_URL environment to the URL.
  process.env.REDISTOGO_URL = argv.redis_url
}

Juggernaut = require("./index");
Juggernaut.listen(argv.port, argv.address);
