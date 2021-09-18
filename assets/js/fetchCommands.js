fetch("https://github.com/LawTRIBAL-Official/Dungeon-Raiders.doc.github.io/blob/main/assets/data/commandsdb.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.commands);
    }) .catch(e => {
        console.log(e);
    });