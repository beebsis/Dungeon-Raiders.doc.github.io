const myItems = {
    itemTier1: [
        {
            helmet: [
                {
                    title: "helmet T1",
                    buff: "armor buff",
                    stats: "+6.8"
                }
            ],
            boots: [
                {
                    title: "helmet T1",
                    buff: "armor buff",
                    stats: "+6.8"
                }
            ]
        }
    ],

    itemTier2: [
        {
            helmet: [
                {
                    title: "helmet T1",
                    buff: "armor buff",
                    stats: "+6.8"
                }
            ],
            boots: [
                {
                    title: "helmet T1",
                    buff: "armor buff",
                    stats: "+6.8"
                }
            ]
        }
    ]
};


    //const myItemObj = JSON.stringify(myItems);
    //const myObj = JSON.parse (myItemObj);

    try {


        //logs specific item
        //console.log(myItems.itemTier1.map(x => x.helmet))

        //Logs list of item in tier1
        console.log(myItems.itemTier1.map(x => x))
        console.log(myItems.itemTier2.map(x => x))


        
    } catch(err) {
        console.log(err);
    }
   // document.getElementById("demo").innerHTML = (myObj + `${myObj.id[0]}`);