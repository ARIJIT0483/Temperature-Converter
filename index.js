const math =()=>{
    let c = document.getElementById("text").value;
    c = Number.parseInt(c);
    // alert(c);
    console.log(typeof c);
    const check =()=>{
        document.getElementById("output-f").value = ((9*c)/5 + 32);
        document.getElementById("output-k").value = (273+c);
    }
    // document.getElementById("convert").addEventListener("click",()=>{
    //     check();
    // })
    check();
}
document.getElementById("text").addEventListener("keyup",()=>{
    math();
    
})

        
    

