console.log("Start of the execution queue")

setTimeout(() => {
    console.log("Final code block to be executed")
}, 0)

for(let j =1; j<=100;j++){
    console.log(j)
}

console.log("End of the loop printing")