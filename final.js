function anaToVori(ana){
    return ana * 0.0625;
    
}
console.log("Total Vori: "+anaToVori(50));


function pandaCost(singara, somucha, zilapi){
    const perSingara = 7;
    const perSomucha = 10;
    const perZilapi = 15;

    return (singara * perSingara) + (somucha * perSomucha) + (zilapi * perZilapi);

}

console.log("Total bill: "+ pandaCost(1,1,1));


function picnicBudget(num){
    if(num > 200){
        const result = ((num-200)*3000)+(100*5000)+(100*4000);
        return result;
    }
    else if(num > 100){
        const result = ((num - 100)*4000)+(100*5000);
        return result; 
    }
    else{
        const result = (num * 5000);
        return result;
    }
}

console.log("Total cost of picnic: "+ picnicBudget(250));

function oddFriend(names){
    for( let x of names){
    if(x.length % 2 == 1){
         return x;
         
    }
    
}
}
const freinds = ['alal','lalu','kalu', 'dulal', 'salam', 'kalam', 'abeka', 'rabeka', 'sabeka'];

console.log("The result is: "+ oddFriend(freinds));