function clicked() {
    document.title= document.querySelector("input").value;
}

function button1 (){
    let k = document.getElementById("button1").innerText
    k = JSON.parse(k)
    k++
    localStorage.setItem("button 1",k)
    document.getElementById("button1").innerText = k;

}
function button2 (){
    let j = document.getElementById("button2").innerText
    j = JSON.parse(j)
    j++
    sessionStorage.setItem("button 2",j)
    document.getElementById("button2").innerText = j;
}
function loading (){
    if(localStorage.getItem("button 1")){
        document.getElementById("button1").innerText=localStorage.getItem("button 1")
    }

    if(sessionStorage.getItem("button 2")){
        document.getElementById("button2").innerText=sessionStorage.getItem("button 2")
    }
}