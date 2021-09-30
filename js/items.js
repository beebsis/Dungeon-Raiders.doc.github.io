let glovesList = '{ "gloves" : [' +
'{ "itemTier":"T1" , "itemBuff":"Increase Damage" },' +
'{ "itemTier":"T2" , "itemBuff":"Increase Damage" }  ,' +
'{ "itemTier":"T3" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T4" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T5" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T6" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T7" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T8" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T9" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T10" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T11" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T12" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T13" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T14" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T15" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T16" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T17" , "itemBuff":"Increase Damage" } ,' +
'{ "itemTier":"T18" , "itemBuff":"Increase Damage" } ]}'; 

let bootsList = '{ "boots" : [' +
'{ "itemTier":"T1" , "itemBuff":"Increase Max HP" },' +
'{ "itemTier":"T2" , "itemBuff":"Increase Max HP" }  ,' +
'{ "itemTier":"T3" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T4" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T5" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T6" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T7" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T8" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T9" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T10" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T11" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T12" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T13" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T14" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T15" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T16" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T17" , "itemBuff":"Increase Max HP" } ,' +
'{ "itemTier":"T18" , "itemBuff":"Increase Max HP" } ]}'; 

let beltsList = '{ "belts" : [' +
'{ "itemTier":"T1" , "itemBuff":"Increase Armor" },' +
'{ "itemTier":"T2" , "itemBuff":"Increase Armor" }  ,' +
'{ "itemTier":"T3" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T4" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T5" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T6" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T7" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T8" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T9" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T10" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T11" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T12" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T13" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T14" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T15" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T16" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T17" , "itemBuff":"Increase Armor" } ,' +
'{ "itemTier":"T18" , "itemBuff":"Increase Armor" } ]}'; 

let ringsList = '{ "rings" : [' +
'{ "itemTier":"T1" , "itemBuff":"Increase Fury gain" },' +
'{ "itemTier":"T2" , "itemBuff":"Increase Fury gain" }  ,' +
'{ "itemTier":"T3" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T4" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T5" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T6" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T7" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T8" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T9" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T10" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T11" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T12" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T13" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T14" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T15" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T16" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T17" , "itemBuff":"Increase Fury gain" } ,' +
'{ "itemTier":"T18" , "itemBuff":"Increase Fury gain" } ]}'; 

const gloves = JSON.parse(glovesList);
const boots = JSON.parse(bootsList);
const belts = JSON.parse(beltsList);
const rings = JSON.parse(ringsList);

let i = 1;

//Generates items based on json data
while (i < 18) {
    let div = document.createElement('div');
    div.className = 'item-card';
    let text = document.getElementById("gloves").innerHTML = gloves.gloves[i].itemTier + " " + gloves.gloves[i].itemBuff;
    div.appendChild(text);
    document.body.appendChild(div);

    i++;
}


/*

<div class="item-card" id="glove">
    <img src="../assets/img/Gloves/spr_gloves_0.png" alt="Gloves">
    <h2>T0</h2>
    <p>Stat Weight</p>
    <p>Stats</p>
</div>

*/