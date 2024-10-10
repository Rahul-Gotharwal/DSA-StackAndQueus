// // Function to return precedence of operators
// function prec(c){
//     if(c==='^'){
//         return 3
//     }
//     else if(c==='/' || c==='*'){
//         return 2
//     }
//     else if(c==='+' || c==='-'){
//         return 1
//     }
//     else{
//         return -1
//     }
// }
// // The main function to convert infix expression to postfix expression
// function infixToPostfix(s){
//     let st  = [];
//     let result = '';
//     for(let i = 0 ; i<s.length ; i++){
//         let c =s[i];
//         // If the scanned character is an operand, add it to output string.
//         if((c>='a' && c<='z') || (c>='A' && c<='Z') || c>='0' && c<='9'){
//             result+=c;
//         }
//         // If the scanned character is an ‘(‘, push it to the stack.
//         else if(c==='('){
//             st.push('(')
//         }
//         // If the scanned character is an ‘)’, pop and to output string from the stack until an ‘(‘ is encountered.
//         else if(c===')'){
//             // stack ki length 0 se km na ho or stack k andar hmko '(' ye na mil jaye
//             while(st.length > 0 && st[st.length-1]!=='('){
//                   result+=st.pop();
//             }
//             st.pop();// permanently pop out the () because they dont need in the postfix expression
//         }
//         // if an operator is scanned
//         else{ 
//             // chota aaya he s[i] to bda bahr jayega jo ki phle se andar tha 
//             while(st.length>0 && prec(s[i]) <= prec(st[st.length - 1])){
//                 result+=st.pop(); // if the case is like +*(^ and - comes then we have to add the ^ opetraor to the result
//             }
//             st.push(c) // pop krne k baad new element ko push to krna pdega na isiliye yah push(c)
//         }
//     }
//     // Pop all the remaining elements from the stack
//     while(st.length>0){
//         result+=st.pop();
//     }
//     console.log("Postfix Expression:: " + result);
// }
// let exp = "(p+q)*(m-n)";
// console.log("Infix expression: " + exp);
// infixToPostfix(exp);

//------------------Infix to Prefix conversion--------------//


function getPriority(C) {
    if (C === '-' || C === '+')
        return 1;
    else if (C === '*' || C === '/')
        return 2;
    else if (C === '^')
        return 3;
    return 0;
}

function infixToPostfix(s) {
    let st = [];
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        // If the scanned character is an operand, add it to output string.
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) {
            result += c;
        }
        // If the scanned character is an ‘(‘, push it to the stack.
        else if (c === '(') {
            st.push(c);
        }
        // If the scanned character is an ‘)’, pop and to output string from the stack until an ‘(‘ is encountered.
        else if (c === ')') {
            while (st.length > 0 && st[st.length - 1] !== '(') {
                result += st.pop();
            }
            st.pop();
        }
        // If an operator is scanned
        else {
            while (st.length > 0 && getPriority(c) < getPriority(st[st.length - 1])) {
                result += st.pop();
            }
            st.push(c);
        }
    }
    // Pop all the remaining elements from the stack
    while (st.length > 0) {
        result += st.pop();
    }
    return result;
}

function infixToPrefix(infix) {
    // Reverse the infix expression
    let reversedInfix = infix.split('').reverse().join('');
   // console.log(reversedInfix)
    
    // Replace '(' with ')' and vice versa
    // NOTE - below is the summary about the replace
    reversedInfix = reversedInfix.replace(/\(/g, '#').replace(/\)/g, '(').replace(/#/g, ')');
    
    // Convert the modified infix expression to postfix
    let postfix = infixToPostfix(reversedInfix);
    
    // Reverse the postfix expression to get the prefix expression
    let prefix = postfix.split('').reverse().join('');
    
    return prefix;
}

let exp = "(p+q)*(c-d)";
console.log("Infix expression: " + exp);
console.log("Prefix Expression: " + infixToPrefix(exp));
// replce tech
/**
 * Replacing '(' with '#'

javascript
Copy code
reversedInfix = reversedInfix.replace(/\(/g, '#');
The replace function is used to replace all occurrences of the character (.
The regular expression /\(/g matches every ( character in the string.
Each ( is replaced with #.
After this step, the string becomes:

css
Copy code
i-)h*g+f(^)-e-d^c#*b+a
Replacing ')' with '('

javascript
Copy code
reversedInfix = reversedInfix.replace(/\)/g, '(');
The replace function is used to replace all occurrences of the character ).
The regular expression /\)/g matches every ) character in the string.
Each ) is replaced with (.
After this step, the string becomes:

css
Copy code
i-(h*g+f(^(-e-d^c#*b+a
Replacing '#' with ')'

javascript
Copy code
reversedInfix = reversedInfix.replace(/#/g, ')');
The replace function is used to replace all occurrences of the character #.
The regular expression /#/g matches every # character in the string.
Each # is replaced with ).
After this step, the string becomes:

less
Copy code
i-(h*g+f(^)-e-d^c)*b+a
 */