// var makePromise = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("things go well");
//         resolve("things go well 2");
//     },3000)

//    // reject("things went wrong");
    
// });

// makePromise.then((message)=>{
//     console.log('Success : ',message);
// }, (errorMessage)=>{
//     console.log('Error : ',errorMessage);
// });


var asyncAdd = (a,b) =>{

    return new Promise((resolve,reject)=>{
        if(typeof a === 'number' && typeof b === 'number')
        {
            resolve(a+b);
        } else {
            reject ('Number addition failed');
        }
    });

};


asyncAdd(10,15).then((answer)=>{
    
    console.log ('value : ',answer); 
    return asyncAdd (answer, 10);  
}).then((answer2)=>{
    console.log('value : ',answer2);
}).catch((errorMessage)=>{
    console.log('error : ',errorMessage);
})