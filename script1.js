function equal(){
let a = document.getElementById("fnum").value;
let b = document.getElementById("snum").value;
    let x = (a==b) && a!='' && b!='' ? 'числа совпадают' : 'числа не совпадают';
 alert(x);
}