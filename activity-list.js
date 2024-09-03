/**
 * The gole of the problem is to use prototypal inheritance in JavaScript
 * 
 * Implement inheritance 
 * 
 * Create a function Activity accept parameter amount as a number 
 * 
 * Add following function to the Activity prototype:
 * 
 * 1. setAmount -- if value less then or equal to 0 return false otherwise assigned to the member variable amount and return
 * 
 * 2. getAmount -- it retuns the value of the member variable amount
 * 
 * Create a function Payment that :
 *      1. inherite from parent Activity
 *      2. takes 2 parameters - amount(Number) and reciver(String)
 *         amount assigned to parent member variable and reciver to self member variable
 *         
 * Add prototype to Payment - setReciver and getReciver
 * 
 * Create a function Refund that - inharites from parent Activity and take two parameter amount & sender
 * similarly as Payment add two prototype setSender and getSender
 * 
 */

//==Activity==
function Activity(amount) {
    this.setAmount(amount);
}

Activity.prototype.setAmount = amount => {
    if(amount <= 0){
        return false;
    } else {
        this.amount = amount;
        return  true;
    }
}

Activity.prototype.getAmount = () => this.amount;

//==Payment==
function Payment(amount, reciver) {
    this.setAmount(amount);
    this.setReciver(reciver)
}

Payment.prototype = Object.create(Activity.prototype);

Payment.prototype.setReciver = reciver => this.reciver = reciver;

Payment.prototype.getReciver = () => this.reciver;


//==Refund==
function Refund(amount, sender){
    this.setAmount(amount);
    this.setSender(sender);
}

Refund.prototype = Object.create(Activity.prototype);

Refund.prototype.setSender = sender => this.sender = sender;

Refund.prototype.getSender = () => this.sender;