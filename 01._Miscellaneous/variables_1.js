// use const if possible (ikke konstant )
// const dekleration 
const name = "Oliver"; 

// console.log bare til default ikke til brugere
console.log("Hello World");
console.log("Hello World", name)     // vi anvender , og ikke + da det kan give fejl i forhold til typer
console.log("Hello World" + name)

// string literals 
const firstGreeting = 'It is a nice day today'; // single quotes
const secondGreeting = "It's a nice day today"; // her vil single quotes give problemer grundet it's, hvilket vil aflutte sætningen
const thirdGreeting = `It's a nice 
day today`; // backticks -> vil ikke skabe problemer - muliggører også multi lines 

// string interpolation 
console.log(`Mit navn er ${name}`) // her bliver alt til en String 

// js objects 
const person = {
    name: "Oliver", // key-value pair 
}


