

function oddFriend(names){
        for( let x of names){
        if(x.length % 2 == 1){
             return x;
             
        }
        
    }
}
const freinds = ['alal','lalu','kalu', 'dulal', 'salam', 'kalam', 'abeka', 'rabeka', 'sabeka'];

console.log("The result is: "+ oddFriend(freinds));


