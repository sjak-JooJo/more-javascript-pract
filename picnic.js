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