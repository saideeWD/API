const  name = "kuddus";
function add(num1 , num2){
   totol = num1 + num2 ;
    console.log("result inside", name);
    function dubble(num){
        return num * 2 ;
    }
    const result = dubble(totol);
    return result ;
}
console.log("Out side", name)
const element = add(20 , 21);
console.log(element);