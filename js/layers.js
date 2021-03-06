addLayer("ac", {
    name: "Achivements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "side", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#fff700",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Achivements Completed", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    infoboxes: {
    },
    achievements: {
        11: {
            name: "Bored",
            done() {
                return player.b.points.gte(1) // pre-0.21 players should be able to get it
            },
            tooltip: "Own 1 Boredom",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
        12: {
            name: "Bored-er",
            done() {
                return player.b.points.gte(2) // pre-0.21 players should be able to get it
            },
            tooltip: "Own 2 Boredom",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
        13: {
            name: "Bored-er-er",
            done() {
                return player.b.points.gte(3) 
            },
            tooltip: "Own 3 Boredom",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
        14:{
            name: "Not The Same",
            done() {
                return  hasUpgrade('b',16)
            },
            tooltip: "Very Different",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
        15:{
            name: "My Screen Can't Fit This In The Same Row",
            done() {
                return  hasUpgrade('b',17)
            },
            tooltip: "Play The Game",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
        16:{
            name: "NICE",
            done() {
                return  hasUpgrade('b',22)
            },
            tooltip: "69 Nice",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
        21: {
            name: "High In The Sky",
            done() {
                return player.h.points.gte(1) 
            },
            tooltip: "Own 1 Coin",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
        22: {
            name: "The Definition Of Boredom",
            done() {
                return player.d.points.gte(1) 
            },
            tooltip: "Draw 1 Drawing",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
        23: {
            name: "Television",
            done() {
                return player.h.points.gte(1) && player.d.points.gte(1)
            },
            tooltip: "Have both Second layers",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
        31:{
            name: "Scribblin",
            done() {
                return hasMilestone('d',0)
            },
            tooltip: "Start Scriblin",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
        32:{
            name: "Sticks",
            done() {
                return hasMilestone('d',1)
            },
            tooltip: "Draw Stick figures",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
        41:{
            name: "Kitted UP",
            done() {
                return hasUpgrade('h',12)
            },
            tooltip: "Unlock Kits",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
        42:{
            name: "Perky",
            done() {
                return hasUpgrade('h',14)
            },
            tooltip: "What do you think (Unlock Perks)",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
        43:{
            name: "Yeah Fortnite we bout get down get down",
            done() {
                return hasUpgrade('h',14)
            },
            tooltip: "Gain a Victory Royale a.k.a. Win One game",
            onComplete() {
                player.ac.points = player.ac.points.add(1)
            },
        },
    },
})
addLayer("b", {
    name: "bored", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#b5b5b5",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Boredom", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        if (hasUpgrade('b', 23)) mult = mult.times(upgradeEffect('b',23))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "b: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    infoboxes : {
        loreB :{
            title: "The Begining",
            body() { return "You are Bored  So you play a game with the word bored in the title" },
        },
    },
    upgrades :{
        11:{
            title : "bored",
            description : "gain more points",
            cost : new Decimal(1),
        },
        12:{
            title : "the same upgrade",
            description : "the same upgrade as the last one how boring",
            cost: new Decimal(1),
            unlocked() {
                return hasUpgrade('b', 11)
            },
        },
        13:{
            title : "stop giving me the same upgrade",
            description : "OK this costs more",
            cost : new Decimal(5),
            unlocked() {
                return hasUpgrade('b', 12)
            },
        },
        14:{
            title : "the last same upgrade",
            description : "the last one I promise",
            cost : new Decimal(10),
            unlocked() {
                return hasUpgrade('b', 13)
            },
        },
        15:{
            title : "I lied",
            description : "this is the last one",
            cost : new Decimal(20),
            unlocked() {
                return hasUpgrade('b', 14)
            },
        },
        16:{
            title : "multiply by 4x",
            description : "it is not the same",
            cost : new Decimal(30),
            unlocked() {
                return hasUpgrade('b', 15)
            },
        },
        17:{
            title : "be more bored",
            description : "double bored",
            cost : new Decimal(40),
            unlocked() {
                return hasUpgrade('b', 16)
            },
        },
        21:{
            title : "useless upgrade",
            description : "it does nothing",
            cost : new Decimal(10),
            unlocked() {
                return hasUpgrade('b', 17)
            },
        },
        22:{
            title : "nice",
            description : "boost by 69",
            cost : new Decimal(69),
            unlocked() {
                return hasUpgrade('b', 17)
            },
        },
        23:{
            title : "inflation",
            description : "boost Boredom by Boredom",
            effect(){return player[this.layer].points.times(player[this.layer].points+1)},
            cost : new Decimal(100),
            unlocked() {
                return hasUpgrade('b', 22)
            },
        },
        24:{
            title :"inflation is to OP (DUH)",
            description : "just make it a 10x multiplier(not working)",
            cost: new Decimal(1e100),
            unlocked() {
                return hasUpgrade('b', 23)
            },
        },
        25:{
            title: "the same upgrade returns",
            description:"But is is very expensive",
            cost: new Decimal(100),
            unlocked() {
                return hasUpgrade('b', 24)
            },
        },
        31:{
            title: "High",
            description : "I am bored with this layer get a new one Unlock Hypixel",
            cost:new Decimal(200),
            unlocked() {
                return hasUpgrade('b', 25)
            },
        },
        32:{
            title : "Definition",
            description : "I am bored with this layer get a new one Unlock Drawing",
            cost:new Decimal(200),
            unlocked() {
                return hasUpgrade('b', 25)
            },
        },
       // 69:{title : "test Upgrade remove when relase"},
    },
    branches:['h','d']
})
addLayer("h", {
    name: "Hypixel", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "H", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "0", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    //layerShown(),
    color: "#a11800",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "COINS", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "1", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    infoboxes : {
        loreH :{
            title: "Hypixel",
            body() { return "You are Bored So you play some Minecraft on the Hypixel network" },
            },
        loreK :{
            title: "Kits",
            body() { return "Kits exist they also do nothing YET" },
            },
        loreP :{
            title: "Perks",
            body() { return "We steal ur money" },
            },
    },
    tabFormat: {
        "Skywars": {
            content: [
                "main-display",
                ["infobox", "loreH"],
                "blank",
                ["row", [["upgrade", 11],["upgrade", 12],["upgrade", 13],["upgrade", 14],["upgrade", 15],["upgrade", 16]],],
                ["row", [["upgrade", 21],],],
            ],
 
        },
        "Kits" :{
            content: [
                "main-display",
                ["infobox","loreK"],
                ["row", [["upgrade", 99],["upgrade", 98],["upgrade", 97],["upgrade", 96],["upgrade", 95],["upgrade", 94]],],
                ["row", [["upgrade", 93],["upgrade", 92],["upgrade", 91],["upgrade", 89],["upgrade", 88],["upgrade", 87]],],
                ["row", [["upgrade", 86],["upgrade", 85],["upgrade", 84],["upgrade", 83],["upgrade", 82],["upgrade", 81]],],
                ["row", [["upgrade", 79],["upgrade", 78],["upgrade", 77],["upgrade", 76],["upgrade", 75],["upgrade", 74]],],
                ["row", [["upgrade", 73],["upgrade", 72],["upgrade", 71],["upgrade", 69],["upgrade", 68],["upgrade", 67]],],
                ["row", [["upgrade", 66],["upgrade", 65],["upgrade", 64],["upgrade", 63],["upgrade", 62],],],
            ],
            unlocked() {
                return hasUpgrade('h', 12)
            },
        },
        "Perks": {
            content: [
                "main-display",
                ["infobox","loreP"],
                "buyables",
            ],
            unlocked() {
                return hasUpgrade('h', 14)
            },
 
        },
    },
    upgrades:{
        11: {
            title :"Gaming",
            description : "start earning COINS",
            cost : new Decimal(0),
        },
        12: {
            title :"Kits",
            description : "learn that you can pick a kit",
            cost: new Decimal(100),
            unlocked() {
                return hasUpgrade('h', 11)
            },
        },
        13: {
            title:"Murder",
            description: "Get a Lucky Ambush Void Kill Boosting your ego",
            cost: new Decimal(500),
            unlocked() {
                return hasUpgrade('h', 12)
            },
        },
        14:{
            title: "Perks",
            description: "Learn that Perks exsist",
            cost: new Decimal(750),
            unlocked() {
                return hasUpgrade('h', 13)
            },
        },
        15:{
            title: "Another one bite the dust",
            description: "Murder But again",
            cost: new Decimal(1000),
            unlocked() {
                return hasUpgrade('h', 14)
            },
        },
        16:{
            title: "Victory Royale",
            description: "You win because every one left the game",
            cost: new Decimal(2000),
            unlocked() {
                return hasUpgrade('h', 15)
            },
        },
        21:{
            title: "Murder 2",
            description: "you get 2 kills in a game boosing your ego but murder times 2",
            cost: new Decimal(2000),
            unlocked() {
                return hasUpgrade('h', 16)
            },
        },
        99:{
            title: "Armoursmith",
            cost: new Decimal(15000),
        },
        98:{
            title: "Ecologist",
            cost: new Decimal(15000),
        },
        97:{
            title: "Enchanter",
            cost: new Decimal(15000),
        },
        96:{
            title: "Rookie",
            cost: new Decimal(15000),
        },
        95:{
            title: "Batguy",
            cost: new Decimal(15000),
        },
        94:{
            title: "Disco",
            cost: new Decimal(15000),
        },
        93:{
            title: "Energix",
            cost: new Decimal(15000),
        },
        92:{
            title: "Frog",
            cost: new Decimal(15000),
        },
        91:{
            title: "Grenade",
            cost: new Decimal(15000),
        },
        89:{
            title: "Healer",
            cost: new Decimal(15000),
        },
        88:{
            title: "Scout",
            cost: new Decimal(15000),
        },
        87:{
            title: "Cactus",
            cost: new Decimal(15000),
        },
        87:{
            title: "Armourer",
            cost: new Decimal(20000),
        },
        86:{
            title: "Baseball Player",
            cost: new Decimal(20000),
        },
        85:{
            title: "Enderchest",
            cost: new Decimal(20000),
        },
        84:{
            title: "Farmer",
            cost: new Decimal(20000),
        },
        83:{
            title: "Fisherman",
            cost: new Decimal(20000),
        },
        82:{
            title: "Hunter",
            cost: new Decimal(20000),
        },
        81:{
            title: "Knight",
            cost: new Decimal(20000),
        },
        79:{
            title: "Pharaoh",
            cost: new Decimal(20000),
        },
        78:{
            title: "Snowman",
            cost: new Decimal(20000),
        },
        77:{
            title: "Speleologist",
            cost: new Decimal(20000),
        },
        76:{
            title: "Princess",
            cost: new Decimal(20000),
        },
        75:{
            title: "Engineer",
            cost: new Decimal(20000),
        },
        74:{
            title: "Pig Rider",
            cost: new Decimal(20000),
        },
        73:{
            title: "Sloth",
            cost: new Decimal(20000),
        },
        72:{
            title: "Magician",
            cost: new Decimal(20000),
        },
        71:{
            title: "Warlock",
            cost: new Decimal(20000),
        },
        69:{
            title: "Cannoneer",
            cost: new Decimal(30000),
        },
        68:{
            title: "Enderman",
            cost: new Decimal(30000),
        },
        67:{
            title: "Pyro",
            cost: new Decimal(30000),
        },
        68:{
            title: "Troll",
            cost: new Decimal(30000),
        },
        67:{
            title: "Guardian",
            cost: new Decimal(30000),
        },
        66:{
            title: "Salmon",
            cost: new Decimal(30000),
        },
        65:{
            title: "Slime",
            cost: new Decimal(30000),
        },
        64:{
            title: "Jester",
            cost: new Decimal(30000),
        },
        63:{
            title: "Zookeeper",
            cost: new Decimal(30000),
        },
        62:{
            title: "Archeologist",
            cost: new Decimal(30000),
        },
    },
    buyables:{
        11: {
            title: "Ender Mastery",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        12:{
            title: "Instant Smelting",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        13:{
            title: "Mining Expertise",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        14:{
            title: "Resistance Boost",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        15:{
            title: "Knowledge",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        16:{
            title: "Nourishment",            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        17:{
            title: "Bridger",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        18:{
            title: "Lucky Charm",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        21:{
            title: "Arrow Recovery",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        22:{
            title: "Blazing Arrows",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        23:{
            title: "Juggernaut",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        24:{
            title: "Speed Boost",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        25:{
            title: "Annoy-o-mite",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        26:{
            title: "Fat",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        27:{
            title: "Enviromental Expert",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        31:{
            title: "Marksmanship",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        32:{
            title: "Bullldozer",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        33:{
            title: "Revenge",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        34:{
            title: "Necromancer",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        35:{
            title: "Black Magic",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        36:{
            title: "Robbery",
                        cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        37:{
            title: "Frost",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        38:{
            title: "Barbarian",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        69 : {
            title: "this layer has not been fully implemented (You can waste your coins here)",
            cost(x) { return new Decimal(1).mul(x) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
    },
    update(diff) {
        hgain = new Decimal(1)
        if(hasUpgrade('h',17)) hgain = hgain.times(8)
        if(hasUpgrade('h',16)) hgain = hgain.times(2)
        if(hasUpgrade('h',15)) hgain = hgain.times(4)
        if(hasUpgrade('h',14)) hgain = hgain.times(4)
        if(hasUpgrade('h',13)) hgain = hgain.times(4)
        if(hasUpgrade('h',12)) hgain = hgain.times(2)

        if(hasUpgrade('h',11)) player[this.layer].points = player[this.layer].points.add(hgain)
      },
    branches: ['p','t']
})
addLayer("d", {
    name: "Drawing", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "1", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffffff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Drawings", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "1", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    infoboxes : {
        loreD :{
            title: "Drawing",
            body() { return "You are Bored <br> So you decide to draw stuff <br> not yet fully implemented" },
            },
        loreC :{
            title: "Classes",
            body() { return "Do Class Get Mad SkillZ" },
            },
        loreCo :{
            title: "Contest",
            body() { return "Dem tests of skill" },
            },
    },
    upgrades:{
        11:{
            title: "A piece of paper",
            description: "Draw on a piece of paper",
        },
        12: {
            title: "Crayons",
            description: "Wait how did you draw with only a piece of paper",
            cost: new Decimal(250),
            unlocked() {
                return hasMilestone('d', 0)
            },
        },
        13: {
            title: "Oil pastels",
            description: "What is the differnece between Oil pastels And Crayons",
            cost: new Decimal(500),
            unlocked() {
                return hasMilestone('d', 0)
            },
        },
        14: {
            title: "Charcoal Pencil",
            description: "Ok I get it you are not a toddler",
            cost: new Decimal(750),
            unlocked() {
                return hasMilestone('d', 0)
            },
        },
        16: {
            title: "A pencil",
            description: "yay a normal B8 Pencil",
            unlocked() {
                return hasMilestone('d', 1)
            },
        },
        17: {
            title: "A pencil again",
            description: "yay a normal H8 Pencil",
            unlocked() {
                return hasMilestone('d', 1)
            },
        },
        19: {
            title: "A pencil again again",
            description: "yay an actual normal HB Pencil",
            unlocked() {
                return hasMilestone('d', 1)
            },
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 Drawing",
            effectDescription: "Learn to Scrible",
            done() {
                return player.d.points.gte(1)
            },
        },
        1: {
            requirementDescription: "1000 Drawing",
            effectDescription: "Learn to make Stick Figures",
            done() {
                return player.d.points.gte(1000)
            },
        },
        2: {
            requirementDescription: "1000000 Drawing",
            effectDescription: "Learn to draw Lumpy Chibi Things and realise that you suck so you get Classes",
            done() {
                return player.d.points.gte(1000000)
            },
        },
    },
    buyables:{
        11:{
            title:"drawing faces",
            description:"Go to classes to learn to draw faces"
        },
    },
    challenges: {
        11: {
            name: "Modern Art",
            challengeDescription: "You are bad at drawing so you can make very good? modern art<br>Drawing gain halfed",           
            canComplete: function() {return player[this.layer].points.gte(10000)},
            goalDescription: "10000 points",
            onStart() { 
                player[this.layer].points.times(0)
            },
        },
    },

    update(diff) {
        dgain = new Decimal(1)

        if(hasUpgrade('d',14)) dgain = dgain.times(6)
        if(hasUpgrade('d',13)) dgain = dgain.times(4)
        if(hasUpgrade('d',12)) dgain = dgain.times(2)

        if(hasChallenge('d', 11)) dgain = dgain.times(2)

        if(inChallenge('d',11)) dgain = dgain.times(0.5)

        if(hasUpgrade('d',11)) player[this.layer].points = player[this.layer].points.add(dgain)
      },
      tabFormat: {
        "Drawing": {
            content: [
                "main-display",
                ["infobox","loreD"],
                "upgrades",
                "milestones",
            ],
 
        },
        "Classes" :{
            content: [
                "main-display",
                ["infobox","loreC"],
                "buyables",
            ],
        },
        "Contest" :{
            content: [
                "main-display",
                ["infobox","loreCo"],
                "challenges",
            ],
        },
    },
    branches: ['g','s']
})
addLayer("p", {
    name: "Pokemon", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "0", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#3887ab",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "2", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    branches: ['a']
})
addLayer("t", {
    name: "Tik Tok", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "T", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "1", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#e019c9",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "2", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    branches: ['yt']
})
addLayer("g", {
    name: "Touching Grass", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "2", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#178538",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "2", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    branches: ['c']
})
addLayer("s", {
    name: "Survival", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "3", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#633b0f",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "2", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    branches: ['e']
})
addLayer("a", {
    name: "Anime", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "0", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffa600",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "3", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    branches: ['m']
})
addLayer("yt", {
    name: "YouTube", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Y", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "1", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff0000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "3", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    branches: ['m']
})
addLayer("c", {
    name: "Cooking", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "2", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffce52",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "3", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    branches: ['u']
})
addLayer("e", {
    name: "The End", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "3", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#f5d993",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "3", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    branches: ['u']
})
addLayer("m", {
    name: "Memes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "0", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#8378fa",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "4", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    branches: ['co']
})
addLayer("u", {
    name: "Undertale", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "U", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "1", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#96008f",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "4", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    branches: ['co']
})
addLayer("co", {
    name: "Codding", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#212121",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "5", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
})
addLayer("as", {
    name: "accending",
    symbol: "A",
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#4BDC13",                       // The color for this layer, which affects many elements.
    resource: "",            // The name of this layer's main prestige resource.
    row: 7,                                 // The row this layer is on (0 is the first row).

    baseResource: "",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "none",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.

    upgrades: {
        11:{
            title:"Where am I",
        },
        12:{
            title:"Who are you",
            unlocked() {
                return hasUpgrade('as', 11)
            },
        },
        13:{
            title:"Why am I here",
            unlocked() {
                return hasUpgrade('as', 12)
            },
        },
        14:{
            title:"Wait I have done every thing but I'm still bored",
            unlocked() {
                return hasUpgrade('as', 13)
            },
        },
        15:{
            title:"What is it",
            unlocked() {
                return hasUpgrade('as', 14)
            },
        },
        16:{
            title:"Ok and that means??????",
            unlocked() {
                return hasUpgrade('as', 15)
            },
        },
        17:{
            title:"Go Where!?!?!?!?!?!?!???!?!?!?!",
            unlocked() {
                return hasUpgrade('as', 16)
            },
        },
        18:{
            title:"Ok!",
            unlocked() {
                return hasUpgrade('as', 17)
            },
        },
        19:{
            title:"No!",
            unlocked() {
                return hasUpgrade('as', 17)
            },
        },
        20:{
            title:"Enter The Portal",
            description : "Leave every thing behind and enter the portal",
            unlocked() {
                return hasUpgrade('as', 18) || hasUpgrade('as',19)
            },
        },
        // Look in the upgrades docs to see what goes here!
    },
    infoboxes:{
        v1:{
            title: " ",
            body() {return "<h1><i>*You awake in a void of nothingness*</i></h1>"}
        },
        v2:{
            title: " ",
            body() {return "<h1>You are in the acendant plane</h1>"},
            unlocked() {
                return hasUpgrade('as', 11)
            },
        },
        v3:{
            title: " ",
            body() {return "<h1>I am the mere care taker of this realm</h1>"},
            unlocked() {
                return hasUpgrade('as', 12)
            },
        },
        v4:{
            title: " ",
            body() {return "<h1>You are here beacuse you have done all things</h1>"},
            unlocked() {
                return hasUpgrade('as', 13)
            },
        },
        v5:{
            title: " ",
            body() {return "<h1>Quit whining there is still one more thing you have not done</h1>"},
            unlocked() {
                return hasUpgrade('as', 14)
            },
        },
        v6:{
            title: " ",
            body() {return "<h1>Follow me</h1><br><h3>The Hall Has Been Unlocked"},
            unlocked() {
                return hasUpgrade('as', 15)
            },
        },
        h1: {
            title: " ",
            body() {return "<h1>Welcome to the Hall<br>This is the place where people like you walk into the new world</h1>"},
            unlocked() {
                return hasUpgrade('as', 15)
            },
        },
        h2: {
            title: " ",
            body() {return "<h1>Ok fine yeah I'll cut to the chase you gotta go...</h1>"},
            unlocked() {
                return hasUpgrade('as', 16)
            },
        },
        h3: {
            title: " ",
            body() {return "<h1>Uhhhggggg. Go to the big door that says death and go through it</h1>"},
            unlocked() {
                return hasUpgrade('as', 17)
            },
        },
        h4: {
            title: " ",
            body() {return "<h1>Ok I am joking here is the Portal</h1><br><h3>Portal has been unlocked</h3>"},
            unlocked() {
                return hasUpgrade('as', 18) || hasUpgrade('as',19)
            },
        },
        p1: {
            title: " ",
            body() {return "<h1><i>The Portal glows and beckons you</i><br>Enter And be taken to the new world</h1>"},
            unlocked() {
                return hasUpgrade('as', 18) || hasUpgrade('as',19)
            },
        },
    },
    tabFormat: {
        "???": {
            content: [
                ["infobox","v1"],
                ["upgrade", 11],
                ["infobox","v2"],
                ["upgrade",12],
                ["infobox","v3"],
                ["upgrade", 13],
                ["infobox","v4"],
                ["upgrade",14],
                ["infobox","v5"],
                ["upgrade",15],
                ["infobox","v6"],
            ],

        },
        "The Hall": {
            content:[
                ["infobox","h1"],
                ["upgrade",16],
                ["infobox","h2"],
                ["upgrade",17],
                ["infobox","h3"],
                ["upgrade",18],
                ["upgrade",19],
                ["infobox","h4"],
            ],
            unlocked() {
                return hasUpgrade('as', 15)
            },
        },
        "Portal": {
            content:[
                ["infobox","p1"],
                ["upgrade",20],
            ],
            unlocked() {
                return hasUpgrade('as', 18) || hasUpgrade('as',19)
            },
        },
        
    },
})
addLayer("st", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#4BDC13",                       // The color for this layer, which affects many elements.
    resource: " ",            // The name of this layer's main prestige resource.
    row: 7,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "none",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return false },          // Returns a bool for if this layer's node should be visible in the tree.

    upgrades: {
        // Look in the upgrades docs to see what goes here!
    },
})
addLayer("b2", {
    name: "boredom2", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#b5b5b5",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Boredom", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "6", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    infoboxes : {
        loreBw :{
            title: "The Begining?",
            body() { return "You are Bored  So you play a game with the word bored in the title" },
        },
    },
    
    upgrades :{

        11:{
         title : "bored",
            description : "gain more points",
            cost : new Decimal(1),
        },
        12:{
            title : "the same upgrade",
            description : "the same upgrade as the last one how boring",
            cost: new Decimal(1),
            unlocked() {
                return hasUpgrade('b2', 11)
            },
        },
        13:{
            title : "stop giving me the same upgrade",
            description : "OK this costs more",
           cost : new Decimal(5),
           unlocked() {
            return hasUpgrade('b2', 12)
        },
        },
        21:{
            title :"The End",
            description : "finish the game",
            unlocked() {
                return hasUpgrade('b2', 13)
            },
        },
        31:{
            title: "show stuff",
            description : "show all previous layers",
            unlocked() {
                return hasUpgrade('b2', 21)
            },
        },
    },
})