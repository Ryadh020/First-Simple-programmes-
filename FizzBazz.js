let number="";
for(var i=0;i<=100;i++){
  if(i%3===0 && i%5===0){
    number="FizzBazz";
  } else if(i%3!==0 && i%5===0){
    number="Buzz";
  } else if(i%3===0){
    number="Fizz";
  } else {
    number=i;
  } 
  console.log(number);
}