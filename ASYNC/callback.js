//1.auth user
//2.get user


const getUser = (callback)=>{
    setTimeout(()=>{
        callback({name:'shamali'})
    },1000)

}

getUser((data)=>{
    console.log(data);
})

const checkAuth=(abc)=>{
    setTimeout(()=>{
        abc({auth:true},undefined);
    },1000);
}

checkAuth((d,e)=>{
    if(d){
        console.log(d);
    }
    else{
        console.log(e);
    }
})
