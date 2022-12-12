let set = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let userId = "";
for(let i=0; i<=9; i++) {
    let userIdgen = Math.floor(Math.random() * set.length -1) + 1;
    userId += set.charAt(userIdgen);
}

let pin = Math.floor(Math.random() * 8999) + 1000;
console.log(`User Id : ${userId}`);
console.log(`PIN : ${pin}`);

