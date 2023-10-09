function solution() {
    let internalStr = '';
    let obj = {
        append(string) {
            internalStr += string;
        },
        removeStart(num) {
            internalStr = internalStr.substring(num);
        },
        removeEnd(num) {
            internalStr = internalStr.substring(0,internalStr.length - num);
        },
        print() {
            console.log(internalStr);
        }
    }
    return obj;
}
let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

