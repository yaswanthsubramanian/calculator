function displayNum(n){
    result.value+=n

}

function allClear(){
    result.value=""
     
}
function evalexpr(){
    expr=result.value
    out=eval(expr)
    result.value=out
}
function backSpace(){
    cur_str=result.value
    result.value=cur_str.slice(0,-1)
}
hones=document.quer