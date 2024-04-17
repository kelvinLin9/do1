var a = 5
b = 6

// 騷操作1
// var a = a + b
// var b = a - b
// var a = a - b
// console.log(a, b)

// 騷操作2
// 先看 a 後面的表達式，b + (b = a) - b，
// 1. 從左到右進行運算，括號先算所以b = a = 5
// 2. 6 + 5 - 5 = 6
// 3. 所以 a = 6, b = 5
// var a = b + (b = a) - b
// console.log(a, b)

// 騷操作3 XOR（異或運算符）
a = a ^ b
b = a ^ b
a = a ^ b



// ES6 解構賦值
// [b, a] = [a, b] 
// console.log(a, b)

// 一般變量交換
// var temp = a
// a = b
// b = temp
// console.log(a, b)