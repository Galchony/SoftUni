function factoriel (args){
let n = Number(args[0]);
//let num = 1;
let result = 1;
for (let row=1; row<=n; row++){
    result *= row;
  //  num++; 
}
console.log(result);
}
factoriel (["10"]);