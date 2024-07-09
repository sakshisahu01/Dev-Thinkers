//when you pass a funtion as an argument to someother fun it is HOF
//when you return any fun from another fun then it is HOF
//dono mai koi bhi true ho jaati hai toh HOF hota hai


//------------HOF-------------------
//1st def
//function A(){
  //  console.log("i am A")
//}
//function B(fn){  //HOF
  //  console.log("i am B")
    //fn();
//}
//B(A);//argument


//---------------HOF--------------------

//2nd def
function C(){ //HOF
    console.log("i am C")
    function D(){
        console.log("i am D")
    }
    return D;
}

//------------------------------------



//---------CB (Callback function)-----------------
//agar cll kr rhe ho toh cb hai warna nhi hai
function A(){  
    console.log("i am A")
}
function B(fn){
    console.log("i am B")
    fn() //cb
}
B(A);

// yeh nhi hai kyuki cll nhi karwaya hai
function A(){  
    console.log("i am A")
}
function B(fn){
    console.log("i am B")
    
}
B(A);




