const p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(new Error('This is an Error'));
    },1000);
})
p.then(result=>{console.log("Result of this is",result)});
p.catch(result=>{console.log("result is",result.message)});

