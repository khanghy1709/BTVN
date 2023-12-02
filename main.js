//Count++ & ++Count 
//VD1: a=1, b=7
let a= 1;
let b= 7;
b= ++a; //1+1=2
a= b++ + ++a; // a= (2+1) + (1+1) =5
console.log(a);

//VD2: d=6,c=5
let d= 6;
let c= 5;
c= d++;//c=6
d= ++d + c++// (6+1)+(6+1)=14
console.log(d);

//Vòng lặp
//VD1 : n = 10 và total = 0 in ra total = ?
let VD1="";
for(let n=10 ; n <=20; n++ ){
    if(n % 2 == 0){
        VD1 += 0 
    }
}
console.log(VD1);
//có n={10,11,12,13,14...,20}
//nếu n <= 20 thì check n%2 ? 
//ko thì loop đến khi có n%2 (mỗi lần loop n+1) 
//nếu n%2 thì VD1 = VD1 + 0 = 0
//nếu n <= 20 tiếp tục check , n=> 20 :dừng 
//n%2 = {10,12,14,16,18,20} ==> có 5 số
//==> có 5 số 0


//VD2: Total = 0 và in ra total =?
let VD2="";
for(let x=1 ; x<= 10; x++){
    if(x%1 == 0){
        VD2 +=0
    }
}
console.log(VD2);
//có x={1,2,3,4,5,6,7,8,9,10}
//nếu x <= 10 thì check x%1 ? 
//ko thì loop đến khi có x%1 (mỗi lần loop x+1) 
//nếu x%1 thì VD2 = VD2 + 0 = 0
//nếu n <= 10 tiếp tục check , n=> 10 :dừng 
//n%1 = {1,2,3,4,5,6,7,8,9,10} ==> có 10 số
//==> có 10 số 0