//Making sure result gets when both the Promises are true
const  p1 = new Promise((resolve) => {
    setTimeout(()=>{
        console.log('Async task 1 is getting Runned');
        resolve(1);
    },2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(()=>{
        console.log('Async Task 2 is getting runned');
        resolve(2);
    },1000);
});
Promise.all([p1,p2])
    .then(result=>console.log(result));
// Promise.race([p1,p2])
//     .then(result => console.log(result));

