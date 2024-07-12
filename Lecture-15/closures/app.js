//function a(){
  //  let b=100;
    //function b(){
      //  console.log(b)
    //}
    //b()
//}

//not a closure
// for closure you have to return not to call a funtion

//it is a closure
function a(){
    let b=100;
    function b(){
        console.log(b)
    }
    return b() //
}


