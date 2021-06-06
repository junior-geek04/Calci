function add()
{
    var a,b,c;
    a=Number(document.getElementById("b1").value);
    b=Number(document.getElementById("b2").value);
    c=a+b;
    document.getElementById("b3").value=c;
}
function sub()
{
    var a,b,c;
    a=Number(document.getElementById("b1").value);
    b=Number(document.getElementById("b2").value);
    c=a-b;
    document.getElementById("b3").value=c;
}
function mul()
{
    var a,b,c;
    a=Number(document.getElementById("b1").value);
    b=Number(document.getElementById("b2").value);
    c=a*b;
    document.getElementById("b3").value=c;
}
function div()
{
    var a,b,c;
    a=Number(document.getElementById("b1").value);
    b=Number(document.getElementById("b2").value);
    c=a/b;
    document.getElementById("b3").value=c;
}