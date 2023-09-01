var myVar='hey their"fun" doing or what huh';
document.write(myVar.length);
document.write(myVar.toUpperCase());
document.write(myVar.tolowerCase());
document.write(myVar.indexOf("doing"));
 
if(myVar.indexOf("doing")==  -1){
    document.write("okok kool");  
}
else{
    document.write("NOT kool");  

}


var x='abc';
var y='ABC';

document.write(x==y);
document.write(x.toUpperCase==y);
document.write(x<y);
