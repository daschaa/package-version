import core from "@actions/core";
import fs from "fs";
try {
    const path = core.getInput('path');
    const cleanedPath = `${process.cwd()}${path.startsWith('./') ? path.slice(1, path.length) : '/' + path}`;
    let packageFile = JSON.parse(fs.readFileSync(cleanedPath));
    core.setOutput("version", packageFile.version);
} catch (e) {
    core.setFailed(e);
}