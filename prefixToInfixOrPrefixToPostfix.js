// ---------Prefix to Infix Conversion-------------//
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

function prefixToInfix(prefix) {
    let stack = [];
    
    // Traverse the prefix expression from right to left
    for (let i = prefix.length - 1; i >= 0; i--) {
        let char = prefix[i];
        
        if (isOperator(char)) {
            let op1 = stack.pop();
            let op2 = stack.pop();
            let temp = '(' + op1 + char + op2 + ')';
            stack.push(temp);
        } else {
            stack.push(char);
        }
    }
    
    return stack.pop();
}

// Example usage
let prefixExp = "*-A/BC-/AKL";
console.log(prefixToInfix(prefixExp)); // Output: "((A-(B/C))*((A/K)-L))"

//---------Prefix to Postfix Conversion--------------------------//
function prefixToPostfix(prefix) {
    let stack = [];
    
    // Traverse the prefix expression from right to left
    for (let i = prefix.length - 1; i >= 0; i--) {
        let char = prefix[i];
        
        if (isOperator(char)) {
            let op1 = stack.pop();
            let op2 = stack.pop();
            let temp = op1 + op2 + char;
            stack.push(temp);
        } else {
            stack.push(char);
        }
    }
    
    return stack.pop();
}

// Example usage
let prefixExp2 = "*-A/BC-/AKL";
console.log(prefixToPostfix(prefixExp2)); // Output: "ABC/-AK/L-*"
