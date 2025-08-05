// Conditional Statements Problem
// largest of three numbers
/*let num1=17,num2=12,num3=21;
if(num1>num2 && num1>num3){
    console.log(num1+"Is the Largest");
}
else if(num2>num1 && num2>num3){
    console.log(num2+" is the largest");
}
else{
    console.log(num3+" is the largest");
}*/

// Grading System
/*
 let score=58;
if(score>=90){
    console.log("Grade A");
}
else if(score<90 && score>=80){
    console.log("Grade B");
}
else if(score<80 && score>=70){
    console.log("Grade C");
}

else if(score<70 && score>=60){
    console.log("Grade D");
}
else if(score<60){
    console.log("Grade F");
}
*/

// div by 3 & 5
/* let num=15;
if(num%5==0 && num%3==0){
    console.log("fizz buzz");
}
else if(num%3==0){
    console.log("fizz");
}
else if(num%5==0){
    console.log("fuzz");
}*/

// Voting Age
/*let age=18;
if(age>=18){
    console.log("Eligible for Voting");
    
}
else{
    console.log("Not Eligible for voting");
}*/

//Roller Coaster
/*let height_in_cm=165;
if(height_in_cm>165){
    console.log("Eligible for ride");
    
}
else{
    console.log("Not Eligible for ride");
}*/

//1 -10 loop
/*for(let i=1;i<=10;i++){
    console.log(i);
}*/

//even num bw 1-20
/*for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    } 
}*/

// div by 7 in range if 1-100
/*let count=0;
for(let i=1;i<=100;i++){
    if(i%7==0){
        count++;
    } 
}
console.log(count);*/


//odd num bw 1-50
/*for(let i=1;i<=50;i++){
    if(i%2!=0){
        console.log(i);
    } 
}*/

//multiplication table
/*let count=10,num=5;
for (let i=1;i<=count;i++){
    console.log(num+"*"+i+"="+num*i);
   
}*/

//100-1 in rev
/*for(let i=100;i>=1;i--){
    console.log(i);
    
}*/

//square of num
/*for(let i=1;i<=20;i++){
    console.log(i*i);
    
}*/

//odd and even
/*let even=0,odd=0;
for(let i=1;i<=100;i++){
    if(i%2==0){
        even++;  
    }
    else{
        odd++;
    }
}
console.log(even);
console.log(odd);
*/

//fizzbuzz with range
/*for(let i=1;i<=50;i++){
    if(i%5==0 && i%3==0){
        console.log(i+"FizzBuzz"); 
    }
    else if(i%5==0){
        console.log(i+"Buzz");
    }
    else if(i%3==0){
        console.log(i+"Fizz");
    }
}*/

//skip num div by 4
/*for(let i=1;i<=50;i++){
    if(i%4==0){
        continue;
    }
    console.log(i);
    
}*/

// skip 45
/*for(let i=1;i<=100;i++){
    if(i===45){
        break;
    }
    console.log(i);
    
}*/

//factorial
/*let num=5,count=1;
for(let i=1;i<=num;i++){
    count =count*i;     
}
console.log(count);*/

//Count of input
/*let x="rexronald10"
console.log(x.length);
*/


// Capitalize First Letter of a String
/*function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirst("hello world"));
*/

