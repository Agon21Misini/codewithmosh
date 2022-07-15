// Logical AND (&&)
// Returns if both operands are TRUE
// console.log(true && true);
// console.log(true && false);

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log(eligibleForLoan);
// NOT (!)
let highIncome = false;
// let goodCreditScore = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible", eligibleForLoan);
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);
