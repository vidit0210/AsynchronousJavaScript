//Get User CallBack
//Understanding CallBacks and the Problems With The Callback Incoming
//It Keeps on Getting Messy and Messy
console.log("First World");
getUser(1,(user)=>{
    console.log(user.githubUserName);
    getGithubRepositories(user.githubUserName,(repos)=>{
        console.log(repos);
    })
});
console.log("Second World");

function getUser(id,callback){
    setTimeout(()=>{
        console.log("Reading from DataBase");
        callback({id:id,githubUserName:'Mosh'});
    },2000);
}

function getGithubRepositories(username,callback) {
    setTimeout(()=>{
        console.log("Getting Github Repositories");
        callback(['repo1','repo2','repo3']);
    },2000)
}