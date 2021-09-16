fs.readFileSync("./assets/data/commandsdb.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.commands);
    }) .catch(e => {
        console.log(e);
    });