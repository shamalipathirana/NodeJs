//1.auth user
//2.get user

const getUser=()=>{
    return new Promise(()=>{
        setTimeout(()=>{
            resolve({user:'shamali'},undefined)
        },1000)

        setTimeout(()=>{
            reject({user:'shamali'},undefined)
        },1000)
    })
}

getUser().then((data)=>{
    console.log(data)
})
    .catch((error)=>{
        console.log(error)
    })