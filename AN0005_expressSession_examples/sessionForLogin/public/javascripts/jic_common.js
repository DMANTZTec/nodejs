function GenerateCaptcha() {
    var chr1 = Math.ceil(Math.random() * 10) + '';
    var chr2 = Math.ceil(Math.random() * 10) + '';
    var chr3 = Math.ceil(Math.random() * 10) + '';
    var str = new Array(4).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); });
    var captchaCode = str + chr1 + ' ' + chr2 + ' ' + chr3;
    document.getElementById("txtCaptcha").value = captchaCode
}
function removeSpaces(string) {
    return string.split(' ').join('');
}
function loginform(){
    var ele = document.getElementById('login1');
    if(ele.style.display == 'none')
    {
        ele.style.display = 'block';
        document.getElementById('btn').style.display='none';
    }
}
function logout(){
    document.getElementById('userid').value="";
    document.getElementById("pass").value="";
    document.getElementById("txtCompare").value="";
    var ele1 = document.getElementById('frm2');
    if(ele1.style.display == 'none')
    {
        ele1.style.display = 'block';
    }
    else{
        ele1.style.display = 'none';
    }
    var ele2 = document.getElementById('btn');
    if(ele2.style.display == 'none')
    {
        ele2.style.display = 'block';
    }
}
function validatelogin()
{
    if(document.getElementById('login1').style.display=='block')
        document.getElementById('login1').style.display='none';
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var lreg = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    femail = document.getElementById("userid").value;
    fpass = document.getElementById("pass").value;
    captch1 = document.getElementById("txtCompare").value;
    var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
    var str2 = removeSpaces(document.getElementById('txtCompare').value);

    if (femail == "" || fpass == "") {
        document.getElementById('demo').innerHTML = "enter the email and password";
        return false;
    }
    else if (!emailRegex.test(femail)) {
        document.getElementById('demo').innerHTML = "enter the valid email";
        return false;
    }
    else if (!lreg.test(fpass)) {
        document.getElementById('demo').innerHTML = "enter the valid password";
        return false;
    }
    else if (captch1 == "") {
        document.getElementById('demo').innerHTML = "enter the captcha";
    }
    else if (str1 != str2)
        document.getElementById("demo").innerHTML = "please enter correct captchcode";

    else {
        console.log("In checkform()");
        var xhttp = new XMLHttpRequest();
        var url="http://localhost:3002/login";
        var myarr = {User: document.getElementById("userid").value,
            password: document.getElementById("pass").value,
            thirdparty: "no"};
        var params = JSON.stringify(myarr);
        console.log(params);
        var params = "inputJsonStr" + "=" + params;
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.onreadystatechange = function ()
        {
           if ((this.readyState == 4) && (this.status == 200)) {
               console.log("after getting response" + xhttp.responseText);
            // var my = JSON.parse(this.responseText);
                 //document.getElementById('demo1').innerHTML=my;
                //document.getElementById('demo1').innerHTML="your session expires in:"+my.session+"<br/>"
                  //  +"welcome "+my.username;
            }
        };
        console.log("before sending request");
        xhttp.send(params);
    }
}

