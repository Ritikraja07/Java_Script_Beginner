const accountId = 144553
let accountEmail = "Ritikraja@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2

accountEmail = "hc@hc.com"
accountPassword = "2122121"
accountCity = "Bengaluru"

console.log(accountId);

/* Prefer not to use var
because of issue in block scope and functional scope */

console.table([accountId,accountEmail,accountPassword, accountCity,accountState])