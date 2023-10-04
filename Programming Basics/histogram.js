function histogram(args) {
    let n = Number(args[0]);
    let num = 0;
    let p1=0;
    let p2=0;
    let p3=0;
    let p4=0;
    let p5=0;
    for (let index = 1; index < args.length; index++) {
        num = args[index];
        if (num < 200) {
             p1 +=1;
        }
        else if (num <= 399) {
            p2+=1;
        }
        else if (num <= 599) {
            p3+=1;
        }
        else if (num <= 799) {
            p4+=1;
        }
        else if (num >=800) {
            p5+=1;
        }
    }
    console.log(`${(p1/n*100).toFixed(2)}%`);
    console.log(`${(p2/n*100).toFixed(2)}%`);
    console.log(`${(p3/n*100).toFixed(2)}%`);
    console.log(`${(p4/n*100).toFixed(2)}%`);
    console.log(`${(p5/n*100).toFixed(2)}%`);

}
histogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"])



