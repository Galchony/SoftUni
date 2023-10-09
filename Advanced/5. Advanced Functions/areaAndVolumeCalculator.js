function areaAndVolumeCalculator(a, v, jsonText) {
    let input = JSON.parse(jsonText);
    let result = [];
    for (const line of input) {
        let areaResult = a.call(line);
        let volumeResult = v.call(line);
        let obj = { area: areaResult, volume: volumeResult };
        result.push(obj);
    }
    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};


console.log(areaAndVolumeCalculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`))