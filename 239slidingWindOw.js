//--------- Brute-Force Approach (O(n*k) time complexity)----------------//
function maxSlidingWindowBruteForce(nums, k) {
  const result = [];
  for (let i = 0; i <= nums.length - k; i++) {
    let max = nums[i];
    for (let j = i + 1; j < i + k; j++) {
      // or can be the j = i , i+k-1
      max = Math.max(max, nums[j]);
    }
    result.push(max);
  }
  return result;
}
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindowBruteForce(nums, k));

//-------------Optimized Approach Using Monotonic Deque (O(n) time complexity)-------------//
function maxSlidingWindowOptimized(nums, k) {
  const result = [];
  const deque = []; // Will store indices of elements, not the elements themselves
  for (let i = 0; i < nums.length; i++) {
    // MOTE - yha hum dono trf se values ko udaayenge kbhi samne se (fornt) to kbhi peeche se (pop)
    // Remove elements from the front of the deque if they are out of the current window
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();// this remove the elements from the first position means 0 index
    }
    // Remove elements from the back of the deque if they are smaller than the current element
    while(deque.length>0 && nums[deque[deque.length-1]]<=nums[i]){
        deque.pop();
    }
    deque.push(i) ; 
    // If we have processed at least `k` elements, add the maximum to the result
    if(i>=k-1){
        result.push(nums[deque[0]])
    }
  }
  return result
}

/**
 * Let's dry-run the optimized code, focusing on the condition `if (i >= k - 1) { result.push(nums[deque[0]]) }`. This condition is crucial because it determines when to add the maximum value of the current sliding window to the `result` array.

### Setup:
- **Array**: `nums = [1, 3, -1, -3, 5, 3, 6, 7]`
- **Window size**: `k = 3`
- **Deque**: Used to store the indices of elements in `nums`.

### Dry-Run:
We'll walk through the loop for each element in the array `nums`.

#### Initial State:
- `deque = []`
- `result = []`

#### Iteration 1 (`i = 0`):
- Current element: `nums[0] = 1`
- Add index `0` to `deque`: `deque = [0]`
- `i` is not yet `k - 1`, so we don't push anything to `result`.

#### Iteration 2 (`i = 1`):
- Current element: `nums[1] = 3`
- `nums[deque[deque.length - 1]] = 1` is less than `3`, so remove `0` from `deque`.
- Add index `1` to `deque`: `deque = [1]`
- `i` is not yet `k - 1`, so we don't push anything to `result`.

#### Iteration 3 (`i = 2`):
- Current element: `nums[2] = -1`
- No element in `deque` is greater than `-1`, so add index `2` to `deque`: `deque = [1, 2]`
- Now, `i = k - 1 = 2`.
  - The element at `deque[0]` is the maximum of the current window `[1, 3, -1]`.
  - `result.push(nums[1]) = 3`
- `result = [3]`

#### Iteration 4 (`i = 3`):
- Current element: `nums[3] = -3`
- No element in `deque` is greater than `-3`, so add index `3` to `deque`: `deque = [1, 2, 3]`
- Now, `i >= k - 1 = 2`.
  - The element at `deque[0]` is the maximum of the current window `[3, -1, -3]`.
  - `result.push(nums[1]) = 3`
- `result = [3, 3]`

#### Iteration 5 (`i = 4`):
- Current element: `nums[4] = 5`
- `deque[0] = 1` is out of the window, so remove it.
- `nums[deque[deque.length - 1]] = -3` and `-1` are less than `5`, so remove `3` and `2`.
- Add index `4` to `deque`: `deque = [4]`
- Now, `i >= k - 1 = 2`.
  - The element at `deque[0]` is the maximum of the current window `[-1, -3, 5]`.
  - `result.push(nums[4]) = 5`
- `result = [3, 3, 5]`

#### Iteration 6 (`i = 5`):
- Current element: `nums[5] = 3`
- `nums[deque[deque.length - 1]] = 5` is greater than `3`, so keep `4` in the deque.
- Add index `5` to `deque`: `deque = [4, 5]`
- Now, `i >= k - 1 = 2`.
  - The element at `deque[0]` is the maximum of the current window `[-3, 5, 3]`.
  - `result.push(nums[4]) = 5`
- `result = [3, 3, 5, 5]`

#### Iteration 7 (`i = 6`):
- Current element: `nums[6] = 6`
- `nums[deque[deque.length - 1]] = 3` and `5` are less than `6`, so remove `5` and `4`.
- Add index `6` to `deque`: `deque = [6]`
- Now, `i >= k - 1 = 2`.
  - The element at `deque[0]` is the maximum of the current window `[5, 3, 6]`.
  - `result.push(nums[6]) = 6`
- `result = [3, 3, 5, 5, 6]`

#### Iteration 8 (`i = 7`):
- Current element: `nums[7] = 7`
- `nums[deque[deque.length - 1]] = 6` is less than `7`, so remove `6`.
- Add index `7` to `deque`: `deque = [7]`
- Now, `i >= k - 1 = 2`.
  - The element at `deque[0]` is the maximum of the current window `[3, 6, 7]`.
  - `result.push(nums[7]) = 7`
- `result = [3, 3, 5, 5, 6, 7]`

### Final Result:
- `result = [3, 3, 5, 5, 6, 7]`

### Key Observations:
- The condition `if (i >= k - 1)` is used to ensure that the sliding window has fully formed.
- Once the window has formed, the value at `nums[deque[0]]` is always the maximum value in the current window.
- The indices in `deque` are maintained in such a way that the front always holds the index of the maximum value in the current window, ensuring an `O(1)` lookup for the maximum value.
 */
