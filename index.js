import core from "@actions/core";
import {readFileSync} from "fs";

try {
    core.info('🛫 Start getting the package.json version...');
    const path = core.getInput('path');
    const cleanedPath = `${process.cwd()}${path.startsWith('./') ? path.slice(1, path.length) : '/' + path}`;
    core.info(`ℹ️ Get the input path: ${cleanedPath}`);
    let packageFile = JSON.parse(readFileSync(cleanedPath));
    core.info(`🥳 Fetched the package.json version: ${packageFile['version']}`);
    core.setOutput("version", packageFile['version']);
} catch (e) {
    core.setFailed(e);
}