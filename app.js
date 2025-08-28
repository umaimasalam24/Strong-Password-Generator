function generate(){
let length = document.getElementById("length").value||12;
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+';
let pass ='';
for(let i =0; i<length; i++){
    pass += chars.charAt(Math.floor( Math.random()*chars.length));
}
document.getElementById('password').value=pass;
}

function copyPass(){
let pass = document.getElementById("password");
pass.select();
document.execCommand("copy");
alert(`Copied: , ${pass.value}`)
}