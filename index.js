import core from "@actions/core";
import github from "@actions/github";
import fs from "fs";

try {
    const path = core.getInput('path');
    let packageFile = JSON.parse(fs.readFileSync(path));
    core.setOutput("version", packageFile.version);
} catch (e) {
    core.setFailed(e);
}