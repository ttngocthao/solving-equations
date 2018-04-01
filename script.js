function solveEquations(){
 var a= Number(document.equations.a.value);
 var b= Number(document.equations.b.value);
 var c= Number(document.equations.c.value);
 var d= Number(document.equations.d.value);
 var e= Number(document.equations.e.value);
 var f= Number(document.equations.f.value);
 var answer;
 var delta = a*e - b*d;
 var deltax= c*e - b*f;
 var deltay= a*f - c*d;
 
 if (delta === 0 && (deltax !==0 || deltay !== 0)) {
        answer = '<div> There is no x and y solution. </div>';
    } else if (delta ===0 && deltax ===0 && deltay === 0) {
        answer ='<div> There is infinitely many solutions.'+'<br/>'+' x is a real number, y = '+ c/b +' - '+ a/b +'x </div>';
    } else {
        answer = '<div> There is one solution.'+'<br/>'+ 'x = '+deltax/delta + ' and y = '+ deltay/delta +' </div>';      
}
document.getElementById('answer').innerHTML = answer;
}