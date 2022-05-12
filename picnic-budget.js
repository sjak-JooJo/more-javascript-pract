function picnicBudget(num){
    const budget = [0];
    if(num <= 100){
        const result = num * 5000;
        return result;
    }
    else if ( num > 100 && 200 >= num){
        const restPeople = num - 100;
        const first100People = 100 * 5000;
        const after100People = restPeople * 4000;
        const result = first100People + after100People;
        return result;
    }
    else{
        const first100People = 100 * 5000;
        const restPeopleAfter200 = num - 200;
        const PeopleAfter200 = restPeopleAfter200 * 3000;
        
        const find1 = num - restPeopleAfter200;
        const find2 = find1 - 100;

        const PeopleBefore200 = find2 * 4000;

        const result = first100People + PeopleAfter200 + PeopleBefore200;

        return result;
        
    }
}

console.log("Total cost of picnic: "+ picnicBudget(550));