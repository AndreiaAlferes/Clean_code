// function BuyBeer (age, money){
//     if(age>=21 && money>=20){
//         return true
//     }
//     return false
// }


//Solution

function BuyBeer (age:number, money:number): boolean{
    const legalAgeToBuyBeer = 21;
    const beerPrice = 20;

    if(age<legalAgeToBuyBeer || money<beerPrice){
        return false;
    }
    return true;
}