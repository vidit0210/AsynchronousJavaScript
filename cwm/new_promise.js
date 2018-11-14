console.log('Before');
// getUser(1, (user) => {
//     getRepositories(user.gitHubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });
console.log('After');
getUser(1)
    .then(user=>getRepositories(user.githubUserName))
    .then(repos=>getCommits(repos[0]))
    .then(commits=>console.log(commits))
    .catch(err=>console.log("New Error",err.message));


function getUser(id) {

    return new Promise((resolve, reject) => {setTimeout(() => {
        console.log('Reading a user from a database...');
        resolve({ id: id, gitHubUsername: 'mosh' });
    }, 2000);});

}

function getRepositories(username) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API For Repos...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    }));
}

function getCommits(repo) {
    return new Promise((resolve, reject) => { setTimeout(() => {
        console.log('Calling GitHub API for Committa...');
        resolve(['commit']);
    }, 2000);})

}