const prompt=require("prompt-sync")();
let temperature=prompt("enter the temperature:");
if(temperature>25){
    console.log("it is hot outside");}
    else{
        console.log("it is cold outside");
    }       