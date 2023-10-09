function listOfNames(arr) {
    arr.sort((a,b)=>a.localeCompare(b));
    let num = 1;
for (const el of arr) {
    console.log(`${num}.${el}`);
    num++;
}
}
listOfNames(["John",
"Bob",
"Christina",
"Ema"]
)