
//nothing return --> undefined
//function abc(){

//}
//console.log(abc())
  

//constructor fn --> object return


function Abc(){

}
console.log(new Abc())



//convention --> good practice --> constructor capital letter (not compulsion)


//this --> newly created object
// in case of constructor equal to sign and colon is used
//function Abc(){
  //  this.name="sam"
    //this.age=90;
// } 
//let obj1 =new Abc()
//console.log(obj)
//let obj2 =new Abc()
//console.log(obj2)


//--------------------------------------------


//function Abc(){
   // this.name = naam
   // this.age = umar;
//} 
//let obj1 =new Abc('sam' , 45)
//console.log(obj)
//let obj2 =new Abc('saku' , 65)
//console.log(obj2)


//--------------------------------------
function Abc(){
    this.name = naam
    this.age = umar;
    //this.greet = function(){
      //  console.log(`hello from ${this.name}`)
    }
//} 

Abc.prototype.greet=this.greet = function(){
    console.log(`hello from ${this.name}`)
}


let obj1 =new Abc('sam' , 45)
console.log(obj)
obj1.greet
let obj2 =new Abc('saku' , 65)
console.log(obj2)
obj2.greet





