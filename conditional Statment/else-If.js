const prompt=require("prompt-sync")();
let score=prompt("enter the score:");
if(score>=90){
    console.log("A grade");
}
else if(score>=80){
    console.log("B grade");
}       
else if(score>=70){
    console.log("C grade");
}       
else{
    console.log("fail");
}