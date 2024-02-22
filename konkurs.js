function zatwierdz(){
var a = document.getElementById("odp1").checked==true;
var b = document.getElementById("odp2").checked==true;
var c = document.getElementById("odp3").checked==true;
var d = document.getElementById("odp4").checked==true;
var e = document.getElementById("odp5").checked==true;
var f = document.getElementById("odp6").checked==true;
var g = document.getElementById("odp7").checked==true;
var h = document.getElementById("odp8").checked==true;
var i = document.getElementById("odp9").checked==true;
var j = document.getElementById("odp10").checked==true;
var k = document.getElementById("odp11").checked==true;
var l = document.getElementById("odp12").checked==true;
var m = document.getElementById("odp13").checked==true;
var wynik=0;

if(a)
{
    wynik++;
}
if(b)
{
    wynik++;
}
if(c)
{
    wynik++;
}
if(d)
{
    wynik++;
}
if(e)
{
    wynik++;
}
if(f)
{
    wynik++;
}
if(g)
{
    wynik++;
}
if(h)
{
    wynik++;
}
if(i)
{
    wynik++;
}
if(j)
{
    wynik++;
}if(k)
{
    wynik++;
}if(l)
{
    wynik++;
}
if(m)
{
    wynik++;
}
if(wynik<=6)
{
    document.getElementById("wynikkonkurs").innerHTML=wynik+"/13 Uhuhu tragedia"
}
else if(wynik>6 && wynik<10)
(
    document.getElementById("wynikkonkurs").innerHTML=wynik+"/13 Gratki"
)
else if(wynik>=10 && wynik<=12)
{
    document.getElementById("wynikkonkurs").innerHTML=wynik+"/13 Prawie prawie"
}
else
{
    document.getElementById("wynikkonkurs").innerHTML=wynik+"/13 Jebani stalkerzy"
}
}