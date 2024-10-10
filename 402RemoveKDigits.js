function removeKDigits(num ,  k){
    let stack = [];
    for(let i =0 ; i<num.length ; i++){
        while(k>0 && stack.length>0 && stack[stack.length-1]>num[i]){
            stack.pop();
            k = k-1 // decrese the k after every pop
        }
        stack.push(num[i])
    }
    // after the entire traversal if k is not 0 , then start pop from the top
    while(k>0){
        stack.pop();
        k--;
    }
    // we reverse the stack"s value
    // let result = "";
    // for(let digit of stack){
    //     if(!(result === "" && digit === "0")){
    //         result+=digit
    //     }
    // }
    //return result === ""?"0":result;

    // using the while loop

    let result = "";
    while (stack.length > 0) {
        let digit = stack.shift(); // remove the element from the front
        if (!(result === "" && digit === "0")) { // remove leading zeros
            result += digit;
        }
    }
    
    // If result is empty, return "0"
    return result === "" ? "0" : result;
    
    
}
console.log(removeKDigits("1432219", 3)); // Output: "1219"
console.log(removeKDigits("00200", 1));   // Output: "200"
console.log(removeKDigits("10", 2));      // Output: "0"