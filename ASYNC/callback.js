//1.auth user
//2.get user

const getUser = (callback)=>{
    setTimeout(()=>{
        callback({name:'shamali'})
    },1000)

}

getUser((data)=>{
    
})