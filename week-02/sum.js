// ary: number array
// sol1: forEach
function sum(ary) {
	// TODO: sum all elements in ary
    let result = 0;
    ary.forEach(element => {
        result += element;
    });
    return result;
}

// // ary: number array
// // sol2: reduce
// function sum(ary) {
// 	// TODO: sum all elements in ary
//     return ary.reduce((acc, cur) => acc + cur, 0);
// }

// // ary: number array
// // sol3: recursion
// function sum(ary) {
// 	// TODO: sum all elements in ary
//     if (ary.length === 0) 
//         return 0;
//     return ary[0] + sum(ary.slice(1));
// }

console.log(sum([1, 5, 3, 2])); // 11