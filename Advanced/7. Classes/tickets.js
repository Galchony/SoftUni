function tickets(arr, criterion) {
    //     let obj = {};
    //     let outputArr = [];
    //     arr.forEach(element => {
    //         let [destinationName, price, status] = element.split('|');
    //         obj = { destination: destinationName, price: Number(price), status };
    //         outputArr.push(obj);
    //     });
    //     let criterionObj = {
    //         destination:  outputArr.slice().sort((a,b)=>a.destination.localeCompare(b.destination)),
    //         price: outputArr.slice().sort((a,b)=>a.price-b.price),
    //         status: outputArr.slice().sort((a,b)=>a.status.localeCompare(b.status))
    //     }
    //    return criterionObj[criterion];


    class Ticket {
        constructor(d, p, s) {
            this.destination = d;
            this.price = Number(p);
            this.status = s;
        }
    }
    return arr
        .map(x => x.split('|'))
        .map(([d, p, s]) => new Ticket(d, p, s))
        .sort((a, b) => {
            return typeof a[criterion] !== "number" ?   a[criterion].localeCompare(b[criterion]) :a[criterion]-b[criterion];
        })


}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
))