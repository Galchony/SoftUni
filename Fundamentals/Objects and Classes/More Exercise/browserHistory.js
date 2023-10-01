function browserHistory(obj, arr) {
    for (const command of arr) {
        let [action, tab] = command.split(" ");
        if (action === "Open") {
            obj["Open Tabs"].push(tab);
            obj["Browser Logs"].push(command);
        } else if (action === "Close") {
            if (obj["Open Tabs"].includes(tab)) {
                obj["Open Tabs"].splice(obj["Open Tabs"].indexOf(tab), 1);
                obj["Recently Closed"].push(tab);
                obj["Browser Logs"].push(command);
            }
        } else if (action === "Clear") {
            obj["Open Tabs"].splice(0, obj["Open Tabs"].length);
            obj["Recently Closed"].splice(0, obj["Recently Closed"].length);;
            obj["Browser Logs"].splice(0, obj["Browser Logs"].length);;
        }
    }
    console.log(obj["Browser Name"]);
    console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${obj["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${obj["Browser Logs"].join(", ")}`);
}
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)