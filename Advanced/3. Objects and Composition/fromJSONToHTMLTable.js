function fromJSONToHTMLTable(text) {
    let input = JSON.parse(text);
    let output = '<table>\n';
    let keys = Object.keys(input[0]);
    keys.map(x => escapeString(x));
    output += `\t<tr><th>${(keys.join('</th><th>'))}</th></tr>\n`;
    for (const el of input) {
        let valuesArr = Object.values(el);
        valuesArr.map(x => escapeString(x));
        output += `\t<tr><td>${valuesArr.join('</td><td>')}</td></tr>\n`;
    }

    output += '</table>';
    console.log(output);
    function escapeString(key) {
        let entityMap = {
            '&': '&amp',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            " ": '&nbsp;',
            "-": '&ndash;',
            "—": '&mdash;',
            "©": '&copy;',
            "®": '&reg;',
            "™": '&trade;',
            "≈": '&asymp;',
            "≠": '&ne;',
            "£": '&pound;',
            "€": '&euro;',
            "°": '&deg;'
        };
        return key.toString().replace(/[&<>" -—©®™°€£≠≈]/g, (key) => entityMap[key]);
    }


}

fromJSONToHTMLTable(`[{"Name":"Pesho",
"&Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`

)