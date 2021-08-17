#!/usr/bin/env node

const { spawn } = require("child_process");

const parser = require("minimal-cli-parser");

const pkg = require("../package.json");

const spawnCommand = (command, args) => {
  const isWindows = process.platform === "win32";
  let extra = "";
  if (isWindows && !command.endsWith(".cmd")) {
    // Spawn doesn't work without this extra stuff in Windows
    // See https://github.com/nodejs/node/issues/3675
    extra = ".cmd";
  }

  return new Promise((resolve, reject) => {
    let stdout = "";
    let stderr = "";
    const cmdProcess = spawn(command + extra, args, {
      cwd: process.cwd(),
    });
    cmdProcess.stdout.on("data", (chunk) => {
      stdout += chunk;
      stderr += chunk;
      process.stdout.write(chunk);
    });
    cmdProcess.on("error", reject);
    cmdProcess.on("exit", (code) => {
      if (code === 0) {
        resolve(stdout);
      } else {
        reject(stderr);
      }
    });
  });
};

const argv = parser(process.argv.slice(2));

if (argv?._?.includes("installPeerDeps")) {
  const targets = ["javascript", "typescript", "typescript-react"];
  const targetConfig = argv._.find((target) => targets.includes(target));
  if (!targetConfig) {
    console.log(`Please pick one of these: ${targets.join(", ")}`);
  } else {
    // default client is yarn
    const clients = ["npm", "yarn"];
    const targetClient =
      clients.find((client) => client === argv.client) || "yarn";
    const deps = [
      ...pkg.installPeerDeps.common,
      ...pkg.installPeerDeps[targetConfig],
    ].reduce((versions, dependency) => {
      if (pkg.peerDependencies[dependency]) {
        return { ...versions, [dependency]: pkg.peerDependencies[dependency] };
      }
      return versions;
    }, {});

    const commandString = `${
      targetClient === "npm" ? "npm install --save-dev" : "yarn add --dev"
    } ${Object.keys(deps)
      .map((dependency) => `${dependency}@${deps[dependency]}`)
      .join(" ")}`;

    console.log(commandString);

    const [command, ...args] = commandString.split(" ");

    spawnCommand(command, args)
      .then((r) => {
        console.log(r);
      })
      .catch((e) => console.log(e));
  }
}
