const core = require('@actions/core');
const github = require('@actions/github');

// const releaseTag = process.env.GITHUB_REF;
// const authToken = process.env.GITHUB_TOKEN;
// const repository = process.env.GITHUB_REPO;
// const owner = process.env.GITHUB_OWNER;
const releaseTag = core.getInput('GITHUB_REF');
const authToken = core.getInput('GITHUB_TOKEN');
const repository = core.getInput('GITHUB_REPO');
const owner = core.getInput('GITHUB_OWNER');

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