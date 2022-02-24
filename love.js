var personOne = prompt ("Enter first person name");
var personTwo = prompt ("Enter person 2 name");
//generate random numbers
var n = Math.random();
//round-down to the nearest whole number with math.floor() and random numbers between 1 - 100.
n = Math.floor(n * 100) + 1;

//control logic
if (n > 70) {
    alert(personOne + ' and ' + personTwo + ' has ' + n +  '%' + ' it is a perfect match 💕');
}; if (n > 30 && n <= 70) {
    alert(personOne + ' and ' + personTwo + ' has ' + n + ' % ' + " you need to work more on your relationship" );
}; if(n < 30){
    alert(personOne + ' and ' + personTwo + ' has ' + n +  '%' + ' you guys dont match');
};
