async function func1() {
    for(let i=0; i<1000000000;i++) {
    }
    console.log("func1");
    return Promise.reject(new Error('fail11')); 
    // return Promise.reject(new Error('fail')); 
}
async function func2(res) {
    // console.log("res: ", res)
    console.log("func2");
    return "func2 return"
}
async  function func3(res) {
    console.log("func3");
    return Promise.reject(new Error('fail3')); 
}
function func4() {
    console.log("func4");
}
function reject(err) {
    console.log("reject: ", err)
}


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000); // (*)
// })
// .then(func1, err)
// .then(func2)
// .then(func3)
// .catch(err =>{
//     console.log("catch: ", err)
// })


// Promise.resolve(func1()).then(
//     res=> {
//         console.log("then: ", res)
//         Promise.resolve(func2()).then(
//             res=> {
//                 console.log("then2: ", res)
//             },
//             err=> {
//                 console.log("catch2: ", err)
//             }
//         )
//     },
//     err=> {
//         console.log("catch: ", err)
//     }
// )

// async function test() {
//     await func1()
  

//     await func2(res)


//     const res3 = await func3()

// }
                