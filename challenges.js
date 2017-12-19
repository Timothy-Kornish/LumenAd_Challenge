//------------------------------------------------------------------------------
//                Challenge 1
//------------------------------------------------------------------------------

document.getElementByClassName("btn-primary")[4].onclick =  function(){
  console.log("User has clicked button 5");
}

//------------------------------------------------------------------------------
//                Challenge 2
//------------------------------------------------------------------------------

document.getElementById("form-submit").onclick = function() {
  var select = document.getElementById("exampleFormControlSelect1");
  var value = select[select.selectedIndex].value;
  console.log("value of dropdown is: ", value);
}

//------------------------------------------------------------------------------
//                Challenge 3
//
//  Call all three functions on the array in order of appearance
//------------------------------------------------------------------------------

Array.prototype.flatNDimArray = function() {
  return this.reduce(function(a, b) {
    var next = [].concat(b).some(Array.isArray);
    return a.concat(next ? b.flatNDimArray() : b);
  }, []);
}


Array.prototype.filterVals = function() {
  return this.filter((value) => typeof value === 'number' && !isNaN(value))
}

Array.prototype.sumNumbers = function() {
  return this.reduce(function (a, b) {
    return a + b;
  });
}

// test array
var total = [[[1,78],[false,'true'],[45,'foo']],[3,5, '7'], [NaN]].flatNDimArray()
                                                                  .filterVals()
                                                                  .sumNumbers();
