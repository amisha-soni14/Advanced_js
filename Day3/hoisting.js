// Undefined error 
function codeHoist(){
  var name;
  console.log(name);
  name = "amisha";
}
codeHoist();
 
// Reference error
function code(){
  console.log(a);
  let a=10;
}
code();
    
