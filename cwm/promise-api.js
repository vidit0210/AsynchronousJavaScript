//Create promises which Are resolved or rejected

const  p = Promise.resolve({id:1});
p.then(result  => {console.log(result.id)});

const r = Promise.reject(new Error("This got Rejected Bro !"));
r.catch(result =>console.log(result));