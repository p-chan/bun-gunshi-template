#!/usr/bin/env bun
import { cli } from "gunshi";
import main from "./main.ts";
import hello from "./commands/hello.ts";

await cli(Bun.argv.slice(2), main, {
  name: "my-app",
  version: "1.0.0",
  subCommands: {
    hello,
  },
});
