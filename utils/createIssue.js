const core = require('@actions/core');
const github = require('@actions/github');

const releaseTag = core.getInput('ref');
const authToken = core.getInput('token');
const repository = core.getInput('repo');
const owner = core.getInput('owner');

console.log('releaseTag', releaseTag);
console.log('repository', repository);
console.log('owner', owner);
console.log('authToken', authToken);

// const octokit = new Octokit({ authToken })

// const owner = core.getInput('owner');
// const time = (new Date()).toTimeString();

// const REPO_INFO = {
//   owner,
//   repo: "unit-demo-cra",
// }

// // Get all issues
// async function getAllIssues() {
//   return await octokit.paginate(octokit.rest.issues.listForRepo, {
//     ...REPO_INFO, per_page: 100,
//   })
// }

// try {
//   getAllIssues((issues) => {
//     console.log('issues', issues);

//     const payload = JSON.stringify(github.context.payload, undefined, 2)
//     console.log(`The event payload: ${payload}`);

//     // octokit.rest.issues.create({
//     //   ...REPO_INFO,
//     //   title: 'Relesase',
//     //   body: 'Release'
//     // });
//   })


// } catch (error) {
//   core.setFailed(error.message);
// }