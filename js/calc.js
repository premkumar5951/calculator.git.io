

let getbtn = document.getElementsByClassName('getbtn');
let screen = document.getElementById("screen");
let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let main = document.getElementById("main");
let main2 = document.getElementById("main2");
let screenvalue = "0";
window.addEventListener("keydown",work);
function work(e){
    // addkey(String.fromCharCode(e.keyCode))
    console.log(e.keyCode)
    if(e.keyCode>47&&e.keyCode<58||e.keyCode>95&&e.keyCode<106||e.keyCode==190||e.keyCode==111||e.keyCode==106||e.keyCode==107||e.keyCode==109||e.keyCode==191||e.keyCode==187||e.keyCode==189)
    {
        addkey(e.key);
    }
    if((e.keyCode==8))
    {
        back();
    }
    if((e.keyCode==13))
    {
        result();
    }
    
}


for (let i in getbtn) {
    getbtn[i].addEventListener('click', (e) => {
        let a = e.target.innerText
        if (screenvalue == 0) {
            screenvalue = "";
            screenvalue += a;
            screen.value = screenvalue;
        }
        else {

            screenvalue=screenvalue.toString(); 
            if(screenvalue.slice(-1)=='/'||screenvalue.slice(-1)=='*'||screenvalue.slice(-1)=='-'||screenvalue.slice(-1)=='+'||screenvalue.slice(-1)=='%'||screenvalue.slice(-1)=='.')
            {
                if(a!='/'&&a!='*'&&a!='+'&&a!='-'&&a!='%'&&a!='.'){
                    screenvalue += a;
                    screen.value = screenvalue;
                }

            }
            else{
                screenvalue += a;
                    screen.value = screenvalue;
            }
        }

    })

}

function result() {
    try {
        screen2.value=screenvalue;
        screenvalue = eval(screen.value);
        screen1.value='Ans= '+screenvalue;
        screen.value = screenvalue;

    }
    catch {
        screen.value = "INVALID"
        screen1.value=screen.value;
    }

}
function back() {
    screenvalue=screenvalue.toString();
    screenvalue = screenvalue.slice(0, -1);
    screen.value = screenvalue;
}

function clearme() {
    console.log("hihih");
    screenvalue = "0";
    screen.value = screenvalue;
}
function trigo1() {
    if (screenvalue == 0) {
        screenvalue = "";
        screenvalue += 'Math.'+ main.innerText+'(';
        screen.value = screenvalue;
    }
    else {
        screenvalue += 'Math.'+ main.innerText+'(';
        screen.value = screenvalue;
    }

}
function trigo2(e) {
    if (screenvalue == 0) {
        screenvalue = "";
        screenvalue += 'Math.'+ main2.innerText+'(';
        screen.value = screenvalue;
    }
    else {
        screenvalue += 'Math.'+ main2.innerText+'(';
        screen.value = screenvalue;
    }

}
function dbtn(){
    screenvalue=screenvalue.toString();
    if(screenvalue.slice(-1)!='/'&&screenvalue.slice(-1)!='*'&&screenvalue.slice(-1)!='-'&&screenvalue.slice(-1)!='+'&&screenvalue.slice(-1)!='%'){
        screenvalue+='/';
        screen.value=screenvalue;
    }

}
function xbtn(){
    screenvalue=screenvalue.toString();
    if(screenvalue.slice(-1)!='/'&&screenvalue.slice(-1)!='*'&&screenvalue.slice(-1)!='-'&&screenvalue.slice(-1)!='+'&&screenvalue.slice(-1)!='%')
{
    screenvalue+='*';
    screen.value=screenvalue;
}
    
}
function addkey(val)
{
    if (screenvalue == 0) {
        screenvalue = "";
        screenvalue += val;
        screen.value = screenvalue;
    }
    else {

        screenvalue=screenvalue.toString(); 
        if(screenvalue.slice(-1)=='/'||screenvalue.slice(-1)=='*'||screenvalue.slice(-1)=='-'||screenvalue.slice(-1)=='+'||screenvalue.slice(-1)=='%'||screenvalue.slice(-1)=='.')
        {
            if(val!='/'&&val!='*'&&val!='+'&&val!='-'&&val!='%'&&val!='.'){
                screenvalue += val;
                screen.value = screenvalue;
            }

        }
        else{
            screenvalue +=val;
                screen.value = screenvalue;
        }
    }

}

