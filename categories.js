class GameCategories {
    constructor(abbrev, image, other_nicknames=[]) {
        this.abbrev = abbrev;
        this.image = image;
        this.other_nicknames = other_nicknames;
    }
}

/* Now creating all our catgeories. For the time being this is the 30 teams. */

const atlantaHawks = new GameCategories("ATL", "category_images/ATL.svg");
const brooklynNets = new GameCategories("BRK", "category_images/BRK.svg", ["BKN", "NJN"]);
const bostonCeltics = new GameCategories("BOS", "category_images/BOS.svg");
const charlotteHornets = new GameCategories("CHO", "category_images/CHO.svg", ["CHA", "CHH"]);
const chicagoBulls = new GameCategories("CHI", "category_images/CHI.svg");
const clevelandCavaliers = new GameCategories("CLE", "category_images/CLE.svg");
const dallasMavericks = new GameCategories("DAL", "category_images/DAL.svg");
const denverNuggets = new GameCategories("DEN", "category_images/DEN.svg");
const detroitPistons = new GameCategories("DET", "category_images/DET.svg");
const goldenStateWarriors = new GameCategories("GSW", "category_images/GSW.svg");
const losAngelesClippers = new GameCategories("LAC", "category_images/LAC.svg");
const losAngelesLakers = new GameCategories("LAL", "category_images/LAL.svg");
const memphisGrizzlies = new GameCategories("MEM", "category_images/MEM.svg", ["VAN"]);
const miamiHeat = new GameCategories("MIA", "category_images/MIA.svg");
const milwaukeeBucks = new GameCategories("MIL", "category_images/MIL.svg");
const minnesotaTimberwolves = new GameCategories("MIN", "category_images/MIN.svg");
const newOrleansPelicans = new GameCategories("NOP", "category_images/NOP.svg", ["NOH", "NOK"]);
const newYorkKnicks = new GameCategories("NYK", "category_images/NYK.svg");
const oklahomaCityThunder = new GameCategories("OKC", "category_images/OKC.svg", ["SEA"]);
const orlandoMagic = new GameCategories("ORL", "category_images/ORL.svg");
const philadelphia76ers = new GameCategories("PHI", "category_images/PHI.svg");
const phoenixSuns = new GameCategories("PHO", "category_images/PHO.svg", ["PHX"]);
const portlandTrailBlazers = new GameCategories("POR", "category_images/POR.svg");
const sacramentoKings = new GameCategories("SAC", "category_images/SAC.svg");
const sanAntonioSpurs = new GameCategories("SAS", "category_images/SAS.svg");
const torontoRaptors = new GameCategories("TOR", "category_images/TOR.svg");
const utahJazz = new GameCategories("UTA", "category_images/UTA.svg");
const washingtonWizards = new GameCategories("WAS", "category_images/WAS.svg", ["WSB"]);


// testing
const col1 = document.getElementById("col-1")
col1.innerHTML = `<img src="${losAngelesLakers.image}"/>`;
