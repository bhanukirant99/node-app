const callback = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('ree') 
    }, 2000) 
})

callback.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})