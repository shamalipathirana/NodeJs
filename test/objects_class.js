const user1={
    name:"Shamali",
    password:"abcde5",
    login:function(){
        console.log("log");
    },
    logout:()=>{
        console.log("logout");
    }
}

console.log(user1);
user1.login();