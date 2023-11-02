const URL = "https://restcountries.com/v3.1/all"
 const myReq = new XMLHttpRequest();

myReq.open("GET", URL);
myReq.send()

myReq.addEventListener("load" , function(){
    console.log(this.response)

    const name = JSON.parse(this.response)

    for(let val of name){
        console.log(val.flags.png)
        
    }
});