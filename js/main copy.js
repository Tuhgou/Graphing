var x = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];
let y = 0;

var i = 0;
let f = 0;

let a = 0;
let b = 0;
let c = 0;
let d = 0;

    function beregn() {
        if (f=0){
            y=a*x[i]+b;
            console.log(y);
        } elseif (f=1);{
            y=a*x[i]^2+b*x[i]+c;  
            console.log(y);
        } elseif (f=2);{
            y=a*x[i]^3+b*x[i]^2+c*x[i]+d;
            console.log(y);
        } elseif (f=3);{
            y=b+x[i]^a;
            console.log(y);
        }
}

export { beregn };