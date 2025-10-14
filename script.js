/*let a=6;
let b=a;
a=4;
console.log(b);

let obj1={age:33};
let obj2=obj1;
obj1.age=44;
console.log(obj2.age);
*//*
let a =true;
let b =false;
if(a||b){
    console.log("hello");
}
console.log(9<<2);
console.log(9|5);
console.log(9^5);


function sum(a,b){
    console.log(a+b);
}
sum(10,11)
/* used in react function*/
/*const sum2=(a,b,c)=>{
    console.log(a+b+c);
}
sum2(10,11,12)

function double(num){
    return num*2;
}
let arr=[2,3,4,5,6,7]
let doubleArr=arr.map(double);
console.log(doubleArr);
const triplearr=arr.map((num)=>num*3);
console.log(triplearr);

const numbers=[1,2,3,4,5,6,7,8,9];
const oddNumbers=[];
numbers.map(num =>{
    if(num%2!==0){
    oddNumbers.push(num);
    }
});
       console.log(oddNumbers);

function isOdd(num){
    return num%2!==0;

}
let oddnumbers = arr.filter((num)=>num%2!==0);
console.log(oddNumbers);

let array=[13,15,20,35,27];
let mulmultify=array.filter((num)=>num%5===0);
console.log(mulmultify);

let array1=[1,2,3,4,5,6];
let sum1 = array1.reduce((product,current)=>{
    return product*current;
},1);
console.log(sum1);

const numbers1=[1,2,3,4,5,6];
const tripled=numbers1.map(num=>num*3);
const evenTripled=tripled.filter(num=>num%2===0);
const sum3 = evenTripled.reduce((acc,cur)=>acc+cur,0);
console.log(numbers1);
console.log(tripled);
console.log(evenTripled);
console.log(sum3);

const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            resolve("Promise resolved successfully");
        }else{
            reject("Promise rejected");
        }
    },1000);
})
console.log("Before promise execution");
promise.then((result)=>console.log(result))
.catch((error)=>console.log(error))
.finally(()=>console.log("Promise execution completed"));

let object3={name:"virat",age:38,country:"India"}
console.log(object3.country);
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response=>{return response.json()})
.then((data) => {data.map((user)=>{console.log(user.name)})})
.catch(error=>console.log("Error fetching data:",error));

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
       const data = await response.json();
       console.log(data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

//string literals
let name="virat";
let age=38;
console.log(`My name is ${name} and my age is ${age}`);

const mul=(a,b)=>{
    return a*b;
}
const square=(n)=>{
    return mul(n,n);
}
const print=(n)=>{
    let s= square(n);
    console.log(s);
}
//print(4);
*/
console.log('First');
Promise.resolve().then(console.log('from promises'))
setTimeout(()=>{
    console.log('Inside timeout');
},2000)
console.log('last')