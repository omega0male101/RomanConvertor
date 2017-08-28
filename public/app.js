window.onload = function(){

  //Mapping varables to elements on HTML page.

  var input = document.getElementById('input');
  var output = document.getElementById('output');
  var button = document.getElementById('convert');

 //Creating an event listner on button click to run the function.
  button.addEventListener("click", function(event){
    output.value = convert(input.value);
  })

  function convert(integer) {
    
   var romanHash = {
          M:1000,
          CM:900,
          D:500,
          CD:400,
          C:100,
          XC:90,
          L:50,
          XL:40,
          X:10,
          IX:9,
          V:5,
          IV:4,
          I:1
        },

  //Creating a empty varaible for the convereted integer.
    result = '' ;

  //This will run through the Hash until the input number is greater or equal to the one found in the hash array.
   for ( i in romanHash ) {
     while ( integer >= romanHash[i] ) 
      
     {
      console.log("inside loop: " + i)

      //Once found, we add the charactor to our result 
        result += i;
      
      //Then we subtract the input interger away from the value found in the Hash. The new number generated is then used again to do another search within the Hash. 
        integer -= romanHash[i];
    
     }
   }

   return result;
  }
}
