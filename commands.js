const adminGiveOres = function(block, amt) {
    if (amt === undefined)
        amt = 100;
    if (block === undefined) {
        for (let propertyName in oreList) {
            playerInventory[propertyName]["normalAmt"] += amt;
            inventoryObj[propertyName] = 0;
            
        }
    } else {
        playerInventory[block]["normalAmt"] += amt;
        inventoryObj[block] = 0;
    }
}
const adminGivePickaxe = function(num) {
    if (num === undefined) {
        for (let pickaxe in player.pickaxes) player.pickaxes[pickaxe] = true;
    } else {
        player.pickaxes[`pickaxe${num}`] = true;
    }
}
const adminGiveGear = function(num) {
    if (num === undefined) {
        for (let gear in player.gears) player.gears[gear] = true;
    } else {
        player.gears[`gear${num}`] = true;
    }
}
const adminRemovePickaxe = function(num) {
    if (num === undefined) {
        for (let pickaxe in player.pickaxes) player.pickaxes[pickaxe] = false;
    } else {
        player.pickaxes[`pickaxe${num}`] = false;
    }
}
const adminRemoveGear = function(num) {

    if (num === undefined) {
        for (let gear in player.gears) player.gears[gear] = false;
    } else {
        player.gears[`gear${num}`] = false;
    }

}
let allGearNames = [
    "Ore Tracker",
    "Real Candilium",
    "Real Vitriol",
    "Infinity Collector",
    "Layer Materializer",
    "Fortune III Book",
    "Haste II Beacon",
    "Energy Siphoner",
    "Sugar Rush",
    "Silly TP",
    "Logical Randomiser",
    "Storm Sneakers",
    "Artifice Annihilator",
    "Repurposed Replicator",
    "Cavern Capacitator",
    "High Powered Vacuum",
    "Unlocked Speedcap",
    "Infinity Collector II",
    "Clover's Undoing",
    "Fantastical Feather",
    "Statistical Analyzer",
    "Oblivion Fracturer",
    "Replicator Prototype",
    "Hyperdrive Accelerator",
    "Superenergetic Automaton",
    "Alteration Reiterator",
    "Stratum Nonillonator",
    "Biome Enchanter",
    "Celestian Reaper"
]
const adminListNums = function() {
    let output = "";
    for (let i = 0; i < allPickaxeNames.length; i++) {
        output += allPickaxeNames[i] + " " + (i+1) + "\n";
    }
    output += "\n";
    for (let i = 0; i < allGearNames.length; i++) {
        output += allGearNames[i] + " " + i + "\n";
    }
    console.log(output);
}
const adminGetHelp = function() {
    console.log("adminGiveOres(block, amt) - Block is the block you want, enter undefined without quotes for all blocks, else put block in quotes. Amt is the amount, leave blank for 100.");
    console.log("adminGivePickaxe(num) - Num is the pickaxe you want to receive, leave blank for all.");
    console.log("adminRemovePickaxe(num) - Num is the pickaxe you want to delete, leave blank for all.");
    console.log("adminGiveGear(num) - Num is the gear you want to receive, leave blank for all.");
    console.log("adminRemoveGear(num) - Num is the gear you want to delete, leave blank for all.");
    console.log("adminListNums() - Lists all the numbers for specific pickaxes and gears.")
    console.log("adminChangeLuck(value) - Changes the luck used for block generation to the chosen value.")
}
const adminChangeLuck = function(value) {
        cat = value;
        updateAllLayers()
}
const displayLarge = function() {
    if (confirm("PERFORMING THIS ACTION WILL REQUIRE YOU TO RESTART YOUR GAME AFTER")) {
        let element = document.createElement("div");
        element.width = "10000px";
        element.height = "10000px";
        document.body.innerHTML = "";
        document.body.style.overflow = "scroll"
        let text = document.createElement('p');
        let output = "";
        for (let y = curY - 50; y < curY + 50; y++) {
            mine[y] ??= [];
            for (let x = curX - 50; x < curX + 50; x++) {
                if (mine[y][x]) {
                    output += mine[y][x].ore === undefined ? mine[y][x] : mine[y][x].ore;
                } else {
                    output += "⬛";
                }
            }
            output += "<br>"
        }
        element.id = "largeDisplay";
        element.style.maxWidth = "10000vw";
        element.style.fontSize = "0.75vw"
        element.style.lineHeight = "0.75vw";
        element.style.border = "none";
        text.innerHTML = output;
        clearInterval(dataTimer);
        clearInterval(limitedTimer);
        element.appendChild(text);
        document.body.appendChild(element);
    }
}
const removeCooldowns = function() {
        for (let cooldown in player.powerupCooldowns) player.powerupCooldowns[cooldown].cooldown = 0;
}
