const name  = "Tikva";
const numebr = 13;
const User = {
firstName: "tikva",
lastName : "yosef",
age: 25
}
const t = true;

function SumOfArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum+ array[i];
    }
    console.log(sum) 
}


// console.log(name)

// function PrintHello(hello){
//     console.log(hello)
// }

// export {name,PrintHello}
// export default name;
// export default numebr;
// export default User;
export {name,numebr,User,t}
export default SumOfArray 