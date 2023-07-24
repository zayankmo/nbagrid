class Team {
    constructor(abbrev, image, other_nicknames=[]) {
        this.abbrev = abbrev;
        this.image = image;
        this.other_nicknames = other_nicknames;
    }
}

/* Now creating all our catgeories. For the time being this is the 30 teams. */

const atlantaHawks = new Team("ATL", "category_images/ATL.svg");
const brooklynNets = new Team("BRK", "category_images/BRK.svg", ["BKN", "NJN"]);
const bostonCeltics = new Team("BOS", "category_images/BOS.svg");
const charlotteHornets = new Team("CHO", "category_images/CHO.svg", ["CHA", "CHH"]);
const chicagoBulls = new Team("CHI", "category_images/CHI.svg");
const clevelandCavaliers = new Team("CLE", "category_images/CLE.svg");
const dallasMavericks = new Team("DAL", "category_images/DAL.svg");
const denverNuggets = new Team("DEN", "category_images/DEN.svg");
const detroitPistons = new Team("DET", "category_images/DET.svg");
const goldenStateWarriors = new Team("GSW", "category_images/GSW.svg");
const losAngelesClippers = new Team("LAC", "category_images/LAC.svg");
const losAngelesLakers = new Team("LAL", "category_images/LAL.svg");
const memphisGrizzlies = new Team("MEM", "category_images/MEM.svg", ["VAN"]);
const miamiHeat = new Team("MIA", "category_images/MIA.svg");
const milwaukeeBucks = new Team("MIL", "category_images/MIL.svg");
const minnesotaTimberwolves = new Team("MIN", "category_images/MIN.svg");
const newOrleansPelicans = new Team("NOP", "category_images/NOP.svg", ["NOH", "NOK"]);
const newYorkKnicks = new Team("NYK", "category_images/NYK.svg");
const oklahomaCityThunder = new Team("OKC", "category_images/OKC.svg", ["SEA"]);
const orlandoMagic = new Team("ORL", "category_images/ORL.svg");
const philadelphia76ers = new Team("PHI", "category_images/PHI.svg");
const phoenixSuns = new Team("PHO", "category_images/PHO.svg", ["PHX"]);
const portlandTrailBlazers = new Team("POR", "category_images/POR.svg");
const sacramentoKings = new Team("SAC", "category_images/SAC.svg");
const sanAntonioSpurs = new Team("SAS", "category_images/SAS.svg");
const torontoRaptors = new Team("TOR", "category_images/TOR.svg");
const utahJazz = new Team("UTA", "category_images/UTA.svg");
const washingtonWizards = new Team("WAS", "category_images/WAS.svg", ["WSB"]);


// adding to array so we can use randomly select
let categories = [atlantaHawks, brooklynNets, bostonCeltics, charlotteHornets, chicagoBulls,
    clevelandCavaliers, dallasMavericks, denverNuggets, detroitPistons, goldenStateWarriors, losAngelesClippers,
    losAngelesLakers, memphisGrizzlies, miamiHeat, milwaukeeBucks, minnesotaTimberwolves, newOrleansPelicans,
    newYorkKnicks, oklahomaCityThunder, orlandoMagic, philadelphia76ers, phoenixSuns, portlandTrailBlazers,
    sacramentoKings, sanAntonioSpurs, torontoRaptors, utahJazz, washingtonWizards]

// testing
const col1 = document.getElementById("col-1");
const col2 = document.getElementById("col-2");
const col3 = document.getElementById("col-3");
const row1 = document.getElementById("row-1");
const row2 = document.getElementById("row-2");
const row3 = document.getElementById("row-3");
const newBoard = document.getElementById("new-board");
//col1.innerHTML = `<img src="${losAngelesLakers.image}"/>`;

newBoard.addEventListener("click", function() {
    col1.innerHTML = `<img src="${losAngelesLakers.image}"/>`;
})
