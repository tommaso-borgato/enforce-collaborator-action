import * as core from '@actions/core';
import * as github from '@actions/github';

try {    
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

    console.log(`Github github.context.payload.repository.full_name: ${github.context.payload.repository.full_name}`);
    const OWNER = github.context.payload.repository.full_name.split('/')[0];
    const REPOSITORY = github.context.payload.repository.full_name.split('/')[1];

    // token
    const github_token = core.getInput('github_token', { required: true });

    // logged in user 
    const login = github.context.payload.sender.login;
    console.log(`github.context.payload.sender.login: ${github.context.payload.sender.login}`);

    // collaborators for the current repository
    const octokit = new github.getOctokit(github_token);
    const collaborators = await octokit.request('GET /repos/{owner}/{repo}/collaborators', {
        owner: OWNER,
        repo: REPOSITORY,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    console.log(`collaborators: ${JSON.stringify(collaborators, undefined, 2)}`);

    var isCollaborator = 'false';
    collaborators.data.forEach(element => {
        if (element.login == login) {
            isCollaborator = 'true';
        }
    });
    console.log(`Is Collaborator: ${isCollaborator}`);
    core.setOutput("is_collaborator", isCollaborator);
} catch (error) {
    console.log(`Error: ${error}`);
    core.setOutput("is_collaborator", 'false');
    core.setFailed(error.message);
}
