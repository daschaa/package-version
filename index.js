import core from "@actions/core";
import path from 'path';
import {readFileSync} from "fs";

try {
    core.info('🛫 Start getting the package.json version...');
    const inputPath = core.getInput('path');
    const inputPathWithoutSlash = inputPath.match(/[^\.\\/]\w+[\w\.\\/]*/).join('');
    const cleanedPath = path.join(process.cwd(), inputPathWithoutSlash);
    core.info(`ℹ️ Get the input path: ${cleanedPath}`);
    let packageFile = JSON.parse(readFileSync(cleanedPath));
    core.info(`🥳 Fetched the package.json version: ${packageFile['version']}`);
    core.setOutput("current-version", packageFile['version']);
} catch (e) {
    core.setFailed(e);
}