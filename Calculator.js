const calculer=(x,o,y)=>{
    let calcul;
    switch(o){
     case "+":
        calcul=x+y;
        break;
    case"-":
        calcul=x-y;
        break;
    case"*":
        calcul=x*y;
        break;
    case"/":
        calcul=x/y;
        break;
    }
    return calcul;
  }

  console.log(calculer(7, "+", 6));  // 10
  console.log(calculer(4, "-", 6));  // -2
  console.log(calculer(5, "*", 0));  // 0
  console.log(calculer(12, "/", 0)); // Infinity