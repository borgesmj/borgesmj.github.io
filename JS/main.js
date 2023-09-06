function sendMail(){
    let messageBody = document.getElementById("Emailtext").value;
    let messageSubjetc =document.getElementById("Subject").value;
    window.location.href = "mailto:borgesmj19@gmail.com?subject="+messageSubjetc+"&body="+messageBody;
    
}