function anaToVori(ana){
    return ana * 0.0625;
    
}
console.log("Total Vori: "+anaToVori(50));

// singara somucha and zilapi countation

// function pandaCost(singara, somucha, zilapi){
//     const perSingara = 7;
//     const perSomucha = 10;
//     const perZilapi = 15;

//     const totalSingara = singara * perSingara;
//     const totalSomucha = somucha * perSomucha;
//     const totalZilapi = zilapi * perZilapi;

//     const totalCost = totalSingara + totalSomucha + totalZilapi;

//     return totalCost;
// }

function pandaCost(singara, somucha, zilapi){
    const perSingara = 7;
    const perSomucha = 10;
    const perZilapi = 15;

    return (singara * perSingara) + (somucha * perSomucha) + (zilapi * perZilapi);

}

console.log("Total bill: "+ pandaCost(1,1,1));