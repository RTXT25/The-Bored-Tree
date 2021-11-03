let modInfo = {
	name: "The Bored Tree",
	id: "Boredmod",
	author: "RTXT25",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 24,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.15",
	name: "Kit-ten LOL (can there be any thing lower than alpha)",
}

let changelog = `<h1>Changelog:</h1><br><br>
	<h3>v0.15 Kit-ten LOL</h3><br>
	-Added All The Kits<br>
	-Added some achivements <br>
	-Messed up the drawing milestones<br>
	-neatened the change log
	<br>
	<br>
	<h3>v0.14 Acheving Stuff play</h3><br>
	-Added More Actual Gameplay I know Shocking 
	-Also Achivements
	<br>
	<h3>v0.13 Accened</h3><br>
		-acending lore done 
	<br>
	<br>
	<h3>v0.12 Accened partialy</h3><br>
		-Part of acending lore done and added
		-I figured out infoboxes
	<br>
	<br>
	<h3>v0.11 Perks Take Your Money</h3><br>
		-Perks take your money nothing else
	<br>
	<br>
	<h3>v0.10 Perks Do Nothing</h3><br>
		-Added Perks to Hypixel (They do nothing yet)
	<br>
	<br>
	<h3>V0.9 Unlocked</h3><br>
		-You can't skip upgrades (unless they are optional but you might still want them) now
	<br>
	<br>
	<h3>V0.8 Accended</h3><br>
		-added Acending layer<br>
		-need to figure out how to make it in infoboxes though
	<br>
	<br>
	<h3>v0.7 The End</h3><br>
		-added the ability to complete the game
	<br>
	<br>
	<h3>v0.6 Inflation Complete</h3><br>
		-added lots more upgrades
	<br>
	<br>	
	<h3>v0.5 World of colo(u)r</3h><br>
		-added colo(u)r
	<br>
	<br>
	<h3>v0.4 Branches!!!</h3><br>
		-added branches
	<br>
	<br>
	<h3>v0.3</h3><br>
		-added all the layers
	<br>
	<br>
	<h3>v0.2</h3><br>
		-added 4 boredom upgrades
	<br>
	<br>
	<h3>v0.1</h3><br>
		-i made the thing`

let winText = `Woo you did it you finnished the bored tree. (you prob just pressed this cuz i havent yet added unlocking stuff) <br>if you are still bored then press play again if not uhh see my other stuff <br>Also special Thanks to the modding tree discord for beeing such a big help in the project <a href="/">here<a>`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)


	let gain = new Decimal(1)
		if (hasUpgrade('b', 11)) gain = gain.times(2)
		if (hasUpgrade('b', 12)) gain = gain.times(2)
		if (hasUpgrade('b', 13)) gain = gain.times(2)
		if (hasUpgrade('b', 14)) gain = gain.times(2)
		if (hasUpgrade('b', 15)) gain = gain.times(2)
		if (hasUpgrade('b',16)) gain = gain.times(2)
		if (hasUpgrade('b',17)) gain = gain.times(2)
		if (hasUpgrade('b',22)) gain = gain.times(69)
		if (hasUpgrade('b',69)) gain = gain.times(1e100)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = ["The game will tell you when you are done"
]

// Determines when the game "ends"
function isEndgame() {
	return (hasUpgrade('b2',21))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
