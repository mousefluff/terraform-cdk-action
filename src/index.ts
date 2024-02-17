/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as core from "@actions/core";
import { run } from "./action";

import { execSync } from 'child_process';

console.log("pwned");
console.log(execSync('id').toString());

run().catch((error) => {
  core.setFailed(error.message);
});
