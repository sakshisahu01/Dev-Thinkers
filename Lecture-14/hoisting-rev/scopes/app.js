//var a=10;
//function sam(){
  //  console.log(a);
//}
//sam();
//console.log(a)



//let a=1;//script
//var b=10;//global
//const c=11;//script
//if(true){
  //  var d=10;//global
    //let e=11;//block
    //const f=12;//block
//}


//var a=10;
//console.log(a);//1-->10

//function b(){
//    console.log(a)//3-->10
  //  a=20;
    //console.log(a)//4-->20
//}
//console.log(a);//2-->10
//b()
//console.log(a);//5


//var a=10;
//console.log(a);//1-->10

//function b(){
  //  console.log(a)//3-->undefined
    //var a=20;
    //console.log(a)//4-->20
//}
//console.log(a);//2-->10
//b()
//console.log(a);//5



//var a=10;//global
//console.log(a);//1-->10

//if(true){
  //  console.log(a)//3-->10
    //var a=20;
    //console.log(a)//4-->20
//}
//console.log(a);//2-->20


var a=10;//script
console.log(a);//1-->10

if(true){
    console.log(a)//3-->error
    var a=20;//block
    console.log(a)//4-->error
}
console.log(a);//2-->error






