console.log("App is starting");

setTimeout(()=>
{
    console.log("second message");
},2000);

setTimeout(()=>
{
    console.log("third message");
},0);

console.log("App Finishes");