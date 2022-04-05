var a = 10;
var b = 2;

var result = [];
var calculated = ['sum','diff','product','quotient','remainder','increment','decrement']
for (i=0; i<7;i++)
{
    result[i] = calculator (`${calculated[i]}`,a,b);
    console.log(`${calculated[i]} = ${result}`);
}

function calculator (input,a,b){
    switch(input){
        case 'sum':return (a+b);
        case 'diff':return (a-b);
        case 'product':return (a*b);
        case 'quotienct':return (a/b);
        case 'remainder':return (a%b);
        case 'increment':return (a++);
        case 'decrement':return (a--);
        case 'default':return 1;
    }
    return console.log('parameter input salah');
}