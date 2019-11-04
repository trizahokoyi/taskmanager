const add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (a<0 || b<0) {
                return reject('Numbers must be non-negative');
            }
            resolve(a+b);
        }, 3000);
    });
}

const doWork = async() => {
    const sum= await add(12,13);
    return sum;
}
doWork().then((result) =>{
    console.log(result)
});

//using async-await
const dowork = async () => {
    const sum = await add(5,7);
    const sum2 = await add(sum,4);
    return sum2;
}
dowork().then((result) => {
    console.log(result);
});

 //const dowork = async () =>{
   // return 'painting';
//}
   
//console.log(doWork());

//const doWork = async () =>{
   // return 'painting';
//}


//using promises only
add(5,7).then((sum) => {
    return add(sum,4);
}).then((sum2) => {
    console.log(sum2);
});

updateAgeAndCount('5db2f528f8d299280698ee9c', 42).then((count) => {
    console.log(count);
});