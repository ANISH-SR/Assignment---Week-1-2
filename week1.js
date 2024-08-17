//Promisified Version of fs.readFile

const fs = require("fs");
const { resolve } = require("path");

function promisifiedreadme(filename,encoding){
    return new Promise((resolve,reject) => {
        fs.readFile(filename,encoding,(err,data)=>{
            if(!err){
                resolve(data);
            }
            else{
                reject(err);
            }
        })
    })
}


promisifiedreadme("file1.txt","utf-8").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})




//Making setTimeout synchronous:

function setTimeoutsync(timeout){
    let startTime = new Date();
    while(1){
        let currentTime = new Date();
        if(currentTime.getTime() - startTime.getTime() > timeout){
            break;
        }
    }
}

setTimeoutsync(1000);
console.log("Hi bro")





//Promisified setTimeout

function PromisifiedsetTimeout(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

PromisifiedsetTimeout(2000).then(() => {
    console.log("Duck Duck Go!")
})

