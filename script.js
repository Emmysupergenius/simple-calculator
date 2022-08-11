let result = document.getElementById("screen");
let calculate=(number)=>{
    result.value+=number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter the valid result input");
    }
}

function clr(){
    result.value=""
}