module.exports = function reverse (n) {
	if (n<0) {
		n = n * (-1)
	}
	return Number(n.toString().split("").reverse().join(""));
	// .parseInt();
  
}
// reverse(12314);
