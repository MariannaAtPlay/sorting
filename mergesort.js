function mergeSort(array){


}

function merge(arr1, arr2){

}

function split(array){
	var firstHalf, secondHalf, newLength;
	if (array.length % 2 === 0){
		newLength = array.length / 2;
		firstHalf = array.slice(0, newLength);
		secondHalf = array.slice(newLength);
	} else {
		newLength = Math.round(array.length / 2);
		firstHalf = array.slice(0, newLength);
		secondHalf = array.slice(newLength);
	}
	return [firstHalf, secondHalf];
}