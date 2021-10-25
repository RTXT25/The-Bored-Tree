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
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
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

        if (hasUpgrade('b', 23)) mult = mult.times(player[this.layer].points+1)
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
            body() { return "You are Bored <br> So you play a game with the word bored in the title" },
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
        },
        13:{
            title : "stop giving me the same upgrade",
            description : "OK this costs more",
            cost : new Decimal(5)
        },
        14:{
            title : "the last same upgrade",
            description : "the last one I promise",
            cost : new Decimal(10)
        },
        15:{
            title : "I lied",
            description : "this is the last one",
            cost : new Decimal(20)
        },
        16:{
            title : "multiply by 4x",
            description : "it is not the same",
            cost : new Decimal(30)
        },
        17:{
            title : "be more bored",
            description : "double bored",
            cost : new Decimal(40)
        },
        21:{
            title : "useless upgrade",
            description : "it does nothing",
            cost : new Decimal(123456789)
        },
        22:{
            title : "nice",
            description : "boost by 69",
            cost : new Decimal(69)
        },
        23:{
            title : "inflation",
            description : "boost Boredom by Boredom",
            cost : new Decimal(100)
        },
        24:{
            title :"inflation is to OP (DUH)",
            description : "just make it a 10x multiplier(not working)",
            cost: new Decimal(1e100)
        },
    },
    branches:['h','d']
})
addLayer("h", {
    name: "Hypixel", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "H", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "0", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#a11800",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "COINS", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    passiveGeneration() {return 2},
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "1", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    infoboxes : {
        loreH :{
            title: "Hypixel",
            body() { return "You are Bored <br> So you play some Minecraft on the Hypixel network" },
            },
    },  
    tabFormat: {
        "Skywars": {
            content: [
                "main-display",
                "blank",
                "milestones",
                "blank",
                "blank",
                "upgrades"
            ],
 
        },
        "Perks": {
            content: [
                "buyables"
            ],
 
        },
    },
    upgrades:{
        11: {
            title :"Gaming",
            description : "start earning COINS",
            cost : new Decimal(1)
        },
        69: {
            title : "this layer has not been implemented yet",
            description : "also this upgrrades does nothing",
        },
    },
    buyables:{
        11 : {
            title: "this layer has not been implemented"
        },
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
    row: "1", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    infoboxes : {
        loreD :{
            title: "Drawing",
            body() { return "You are Bored <br> So you decide to draw stuff <br> not yet implemented" },
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
    row: 6,                                 // The row this layer is on (0 is the first row).

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
            title:"so you have done every thing but your still bored",
        },
        21:{
            title:"Yes",
        },
        31:{
            title:"Hmmm, there sitll is one more thing you haven't done",
        },
        41:{
            title:"really?"
        },
        51:{
            title:"Yes, I can send you there"
        },
        61:{
            title:"so are you ready to accend"
        },
        71:{
            title:"ACCEND",
            description:"enter the new world",
        }
        // Look in the upgrades docs to see what goes here!
    },
    infoboxes:{
        part1:{
            tile: "WOW",
            body() {return "EPICWOW ACeNCDSSDSDASDFGBGHJGJBKNK"}

        },
    },
    tabFormat: {
        "The End?": {
            content: [
                "upgrades",
            ],
 
        },
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
    row: "7", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
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
        },
        13:{
            title : "stop giving me the same upgrade",
            description : "OK this costs more",
           cost : new Decimal(5)
        },
        21:{
            title :"The End",
            description : "finish the game",
        },
        31:{
            title: "show stuff",
            description : "show all previous layers",
        },
    },
})