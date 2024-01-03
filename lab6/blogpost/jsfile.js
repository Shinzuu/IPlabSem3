function hello(){
    let x,y,z;
    x =10;
    y=5;
    z = x+y;

    console.log("z is "+z);
    console.log("this was a funtion call");
}
function printMsg(msg, times)
{
    for ( let i=0; i<times; i++)
    {
        console.log(msg);
    }
}

let msg = "string";
let times = 10;
printMsg(msg, times);
hello();