function sum(n) {
	// sum 1+2+3+...+n
    if (n === 0) {
        return 0;
    }
    return n + sum(n - 1);
}

// function sum(n) {
// 	// sum 1+2+3+...+n
//     return (n+1)*n/2;
// }

console.log(sum(10)); // 55