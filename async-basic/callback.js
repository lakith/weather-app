var getuser = (id,callback) =>
{
    var user = {
        id : id,
        name : "lakith"
    };

    callback (user);
};

getuser(25, (userobject)=>{
    console.log(userobject);
});

