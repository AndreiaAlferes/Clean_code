// let chemichalSymbols = {
//     Sodium:"Na",
//     Hydrogen:"H",
//     Helium:"He",
//     O:"O",
// };

// function getSymbol(name){
//     var s= chemichalSymbols[name];
//     if(s){
//         return s;
//     }
//     console.log("symbol not found");
//     return "not found";
// }


//Resolution

const chemichalSymbols: Record<string,string>=  {
    Sodium:"Na",
    Hydrogen:"H",
    Helium:"He",
    Oxygen:"O",
};

function getSymbol(name:string):string{
    const symbol = chemichalSymbols[name];
    return symbol ? symbol : "not found"   
}

console.log(getSymbol("Sodium")) //output:Na

