var test1 = [1,2,3,2,3,4,5]; // should be 4
var test2 = [2,1,2,3,4]; // should be 3
var test3 = [5,4,3,2,1,2,3];  //should be 2
var test4 = [3,4,3,2,1]; // should be 1

// function maxProfit(arr) {

// 	var min = arr[0];
// 	var max = 0;

// 	for (i = 1; i < arr.length; i++) {
// 		if (arr[i] < min) {
// 			min = arr[i];
// 		}
// 		else if (arr[i] > max) {
// 			max = arr[i];
// 		}
// 	}

// 	console.log('min ' + min);
// 	console.log('max ' + max);
// }


function maxProfit(arr) {
	var bestProfit = 0;
	for (i = 0; i < arr.length; i++) {
		for (j = i + 1; j < arr.length; j++) {
			if (arr[j] > arr[i] &&  (arr[j] - arr[i]) > bestProfit) {
				bestProfit = arr[j] - arr[i];
			}
		}
	}
	console.log(bestProfit);
}

console.log('Test 1');
maxProfit(test1);
console.log('Test 2');
maxProfit(test2);
console.log('Test 3');
maxProfit(test3);
console.log('Test 4')
maxProfit(test4);