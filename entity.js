

class Entity
{
    name
    health
    loot
    respawnTime
    xpValue
    count

    constructor()
    {

        this.name = "";
        this.health = 0;
        this.loot = [];
        this.respawnTime = 0;
        this.xpValue = 0;
        this.count = 0;

    }

    get id()
    {
        return this.name.replace(/\s/g, "");
    }

  droploot()
  {
    var lootDrop = [];
    for (let entry of this.dropTable)
    {
        let dropChanceRoll = this.getRandomFloat(0, 1.00);
        if (dropChanceRoll <= entry.dropChance)
        {
            lootDrop.push({item: entry.item, quantity: this.getRandomNumber(entry.quantityLow, entry.quantityHigh)})
        }
    }
    return lootDrop;

  }

    getRandomNumber(min, max) 
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }   

    getRandomFloat(min, max) {
        if (min >= max) {
            throw new Error("min must be less than max");
        }
        return Math.random() * (max - min) + min;
    }



}



class ResourceEntity extends Entity
{

    skillType
    levelRequirement
    difficulty //percent chance player will be successful with no skill increase

    constructor()
    {
        super();
        this.skillType = {};
        this.levelRequirement = 0;
        this.difficulty = 0;
    }
    
    gatherAction()
    {
        this.health--;
        //console.log("gather action %s", this.name);
        return ({xp: this.xpValue, loot: this.droploot()});
    }

}


class Tree extends ResourceEntity
{

    constructor()
    {
        super();
        this.skillType = skillEnumeration.WOODCUTTING;
        this.levelRequirement = 1;
        this.name = "tree";
        this.health = 10;
        this.xpValue = 5;

        this.dropTable = [{item: new RegularLogs(), dropChance: 1.00, quantityLow: 1, quantityHigh: 1}];

    }

}

class CopperVein extends ResourceEntity
{

    constructor()
    {
        super();
        this.skillType = skillEnumeration.MINING;
        this.levelRequirement = 1;
        this.name = "Copper Vein";
        this.health = 10;
        this.xpValue = 5;

        this.dropTable = [{item: new CopperOre(), dropChance: 1.00, quantityLow: 1, quantityHigh: 1}];

    }

}