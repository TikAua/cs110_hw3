
	const reverse = function(arr){
      const ourarray=[];
      
	for(let n = 0, rev_counter = arr.length - 1; n < arr.length; n = n + 1, rev_counter = rev_counter - 1){
      	 ourarray[n]=arr[rev_counter];
      }
      return ourarray;
	}
	console.log(reverse([1,2,3,4]));


