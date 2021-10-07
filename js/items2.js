const data = {
    tier1: {
        id: 1,
        type: "helmet1",
        stats: {
            type1: "Armor buff",
            type2: "test"
        },
        
        id: 2,
        type: "vest1",
        stats: {
            type1: "Const buff",
            type2: "test"
        },

        id: 3,
        type: "belt1",
        stats: {
            type1: "Dex buff",
            type2: "test"
        }
    },
    tier2: {
        id: 1,
        type: "helmet2",
        stats: {
            type1: "Armor buff2",
            type2: "test2"
        }
    }
}




try {

/*
console.log(data.tier.map(x => x))
const items = data.tier[0];
console.log(items);
*/


const isObject = function(val) {
    if (val === null) {
        return false;
    }
    return (typeof val === 'object')
}

//itterating through data props
const objProps = function(obj) {
    for ( let val in obj ) {
        if (isObject(obj[val])) {
            objProps(obj[val]);
        } 
        else {
            console.log("val: " + val, obj[val]);
        }
    };
}

objProps(data);



// Complicated nesting frustration INSERT HERE REEEEEEEEEEEEEEEEEE





        
    } catch(err) {
        console.log(err);
    }
   // document.getElementById("demo").innerHTML = (myObj + `${myObj.id[0]}`);