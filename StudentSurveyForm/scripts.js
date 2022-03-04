function valid(data){
    var inv_val=document.getElementById("invalid-val");
    data=data.split(',');
    inv_val.innerHTML='';
    if (data.length!==10){
        inv_val.innerHTML="Please enter 10 comma seperated numbers";
        return false;
    }
    for (var x of data){
        if (x===""){
            inv_val.innerHTML="Please enter valid 10 numbers";
            return false;
        }
        if (!parseFloat(x)||x<1||x>100){
            inv_val.innerHTML="Please enter numbers within range [1-100]";
            return false;
        }
    }
}

function valForm(event) {
    var err="";
    if (!document.getElementById("FName").value.match(/^[A-Za-z]+$/)) {
        err+="First Name should only contain Alphabets\n";
        document.getElementById("FName").value="";
    }
    if (!document.getElementById("LName").value.match(/^[A-Za-z]+$/)) {
        err+="Last Name should only contain Alphabets\n";
        document.getElementById("LName").value="";
    }
    if (!document.getElementById("Street").value.match(/^[A-Za-z0-9]+$/)) {
        err+="Street address text boxes should only contain numeric, alphabetic or alphanumeric characters\n";
        document.getElementById("Street").value="";
    }
    if (!document.getElementById("Email").value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        err+="Email id should be valid. \n";
        document.getElementById("Email").value="";
    }
    var like=document.getElementsByName("likes");
    var count=0;
    for (var i=0;i<like.length;i++){
        if (like[i].checked){ count++;}
    }
    if (count<2){err+="Please check atleast 2 options for what you like about GMU\n";}
    var interest = document.getElementsByName("interest");
    checked=false;
    for (var i=0;i<interest.length;i++){
        if (interest[i].checked){
            checked=true;
            break;
        }
    }
    if (!checked){ err+="Please check what interested you the most at GMU\n";}
    if (err=="") {
        alert("Feedback submitted!");
        return true;
    } else { 
        alert(err);
        event.preventDefault();
        return false;
    }
}


function clear() {
    document.getElementById('FName').innerHTML="";
    document.getElementById('LName').innerHTML="";
    document.getElementById("GMUID").innerHTML="";
    document.getElementById("Street").innerHTML="";
    document.getElementById("City").innerHTML="";
    document.getElementById("State").innerHTML="";
    document.getElementById('Zip').innerHTML="";
    document.getElementById('invalid-zip').innerHTML="";
    document.getElementById('Phone').innerHTML="";
    document.getElementById("Email").innerHTML="";
    document.getElementById("URL").innerHTML="";
    document.getElementById("Date").innerHTML="";
    document.getElementById("interest").innerHTML="";
    document.getElementById('recd').innerHTML="";
    document.getElementById('graduation_month').innerHTML="";
    document.getElementById("graduation_year").innerHTML="";
    document.getElementById("Comments").innerHTML="";
    document.getElementById("values").innerHTML="";
    document.getElementById("invalid-val").innerHTML="";
}