function getSmallestNumbers(num) {
	var result = num[0];
	num.forEach(function (n) {
		if (n < result) result = n;
	});
	return result;
}
function helloWorld(){
	return true;
}
function sumSmallestNumbers(numbers) {
	//just making sure the initial values can not be smaller than the smallest 2 values since the sum of 
	var num1 = numbers[0];
	var num2 = numbers[1];
  // your code
	for (var i = 1; i < numbers.length; i++){
		if (numbers[i] <= num1) {
	  		num2 = num1;
	  		num1 = numbers[i];
	  	} else if ( numbers[i] <= num2) {
	  		num2 = numbers[i];
	  	}
	}
	return num1 + num2;
}
function sameXOAmount(str) {
  // your code
  var strUp = str.toUpperCase();
  var xCount = 0;
  var oCount = 0;
  for (var i = 0; i < strUp.length; i++){
  	if (strUp[i] === "X") {
  		xCount++;
  	} else if (strUp[i] === "O") {
  		oCount++;
  	}
  }
  return xCount == oCount;
}
function findOddAmount(numbers) {
	var result = [];
	numbers.forEach(function(n){
		result.includes(n) ? result.splice(result.indexOf(n), 1) : result.push(n)
	});
	return result[0];
}

