var items = {
    itemTier1: [
        {
            helmet: [
                {
                    title: "Helmet T1",
                    buff: "armor buff",
                    stats: "+6.8"
                }
            ],
            chest: [
                {
                    title: "Chest T1",
                    buff: "Const buff",
                    stats: "+16.7"
                }
            ],
            belt: [
                {
                    title: "Belt T1",
                    buff: "HP regen buff",
                    stats: "+24.2"
                }
            ],
            pants: [
                {
                    title: "Pants T1",
                    buff: "Crit Chance buff",
                    stats: "+2.7"
                }
            ],
            weapon: [
                {
                    title: "Weapon T1",
                    buff: "Strenght buff",
                    stats: "+22.4"
                }
            ],
            amulet: [
                {
                    title: "Amulet T1",
                    buff: "Life steal buff",
                    stats: "+4.6"
                }
            ],
            ring: [
                {
                    title: "Ring T1",
                    buff: "Fury buff",
                    stats: "+6.3"
                }
            ],
            glove: [
                {
                    title: "Glove T1",
                    buff: "Dexterity buff",
                    stats: "+12.3"
                }
            ],
            boot: [
                {
                    title: "Boot T1",
                    buff: "Agility buff",
                    stats: "+9.8"
                }
            ],
            spellbook: [
                {
                    title: "Spell Book T1",
                    buff: "Intelligence buff",
                    stats: "+14.8"
                }
            ]
        }
    ],

    itemTier2: [
        {
            helmet: [
                {
                    title: "Helmet T2",
                    buff: "armor buff",
                    stats: "+8.8"
                }
            ],
            chest: [
                {
                    title: "Chest T2",
                    buff: "Const buff",
                    stats: "+207"
                }
            ],
            belt: [
                {
                    title: "Belt T2",
                    buff: "HP regen buff",
                    stats: "+30.2"
                }
            ],
            pants: [
                {
                    title: "Pants T2",
                    buff: "Crit Chance buff",
                    stats: "+5.7"
                }
            ],
            weapon: [
                {
                    title: "Weapon T2",
                    buff: "Strenght buff",
                    stats: "+28.4"
                }
            ],
            amulet: [
                {
                    title: "Amulet T2",
                    buff: "Life steal buff",
                    stats: "+7.6"
                }
            ],
            ring: [
                {
                    title: "Ring T2",
                    buff: "Fury buff",
                    stats: "+12.3"
                }
            ],
            glove: [
                {
                    title: "Glove T2",
                    buff: "Dexterity buff",
                    stats: "+14.3"
                }
            ],
            boot: [
                {
                    title: "Boot T2",
                    buff: "Agility buff",
                    stats: "+12.8"
                }
            ],
            spellbook: [
                {
                    title: "Spell Book T2",
                    buff: "Intelligence buff",
                    stats: "+24.8"
                }
            ]
        }
    ],
};

const iterate = (items) => {
    Object.keys(items).forEach(key => {
        console.log(`Key: ${key}, value: ${items[key]}`)

        if (typeof items[key] === 'object') {
            iterate(items[key]);
        }
    })
};


// Display key values
console.log("Last line log: " + Object.keys(items));

//Array checking
// console.log(items.itemTier2);