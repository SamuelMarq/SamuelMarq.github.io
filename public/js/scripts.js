function Post(host, controllerName, value){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            alert("added");
        }
    };
    
    request.open("POST", host+"/api/"+controllerName);
    request.setRequestHeader('Content-type', 'text/json');
    request.send(JSON.stringify(value));
}

function Get(host, controllerName, value){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            alert("got");
        }
    };
    
    request.open("GET", host+"/api/"+controllerName+"/"+value);
    request.send();
}

function Put(host, controllerName, value){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            alert("updated");
        }
    };
    
    request.open("PUT", host+"/api/"+controllerName);
    request.setRequestHeader('Content-type', 'text/json');
    request.send(JSON.stringify(value));
}

function Delete(host, controllerName, value){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            alert("deleted");
        }
    };
    
    request.open("DELETE", host+"/api/"+controllerName+"/"+value);
    request.send();
}

var btn = document.getElementById("btn");
var nameInput = document.getElementById("name-input");
var nameSpan = document.getElementById("name-error-span");
// console.log(btn);
// console.log(nameInput);
// console.log(nameSpan);


btn.addEventListener("click", ()=>{
    var nameValue = nameInput.value;
    if(nameValue==""){
        alert("fail")
        nameSpan.style.setProperty("display", "block");
    }
    else{
        nameSpan.style.setProperty("display", "none");
        var value = {"name":nameValue};
        Get("https://localhost:44353", "dietaryrestriction", "FE94F732-9E92-40F7-D311-08D823FC3DCC")
    }
});
