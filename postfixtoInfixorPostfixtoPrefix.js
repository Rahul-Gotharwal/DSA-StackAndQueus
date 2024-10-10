//-----------Postfix to Infix -----------------//
function isOperator(x) {
    switch (x) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
            return true;
    }
    return false;
}

function postfixToInfix(postfix) {
    let stack = [];
    
    for (let i = 0; i < postfix.length; i++) {
        let char = postfix[i];
        
        if (isOperator(char)) {
            let op1 = stack.pop();
            let op2 = stack.pop();
            let temp = '(' + op2 + char + op1 + ')';
            stack.push(temp);
        } else {
            stack.push(char);
        }
    }
    
    return stack.pop();
}

// Example usage
let postfixExp = "abc*+de*f+g*+";
console.log(postfixToInfix(postfixExp)); // Output: (((a+(b*c))+((d*e))+f)*g)


// ------------postfix to prefix --------------//
// function isOperator(x) {
//     switch (x) {
//         case '+':
//         case '-':
//         case '*':
//         case '/':
//         case '^':
//             return true;
//     }
//     return false;
// }

// function postfixToPrefix(postfix){
//     let stack = [];
//     for(let i = 0 ; i<postfix.length ; i++){
//         let char = postfix[i];
//         if(isOperator(char)){
//             let op1 = stack.pop();
//             let op2 = stack.pop();
//             let temp = char+op2+op1;
//             stack.push(temp)
//         }else{
//             stack.push(char)
//         }
//     }
//     //return stack //[ '++a*bc*+*defg' ] 
//     return stack.pop()
// }
// let postfixExp2 = "abc*+de*f+g*+";
// console.log(postfixToPrefix(postfixExp2));