const skillEnumeration = {

    WOODCUTTING: 0,
    MINING: 1
}

const XP_LEVEL_REQUIREMENTS = 
    [0, 
    100,
    500,
    1000,
    5000];


class Skill
{
    level
    xp
    actionInterval;
    constructor()
    {
        this.level = 1;
        this.xp = 0;
        this.actionInterval = 1;
        //this.name = "";
    }

    addXp(xpAmount)
    {
        this.xp = this.xp + xpAmount;
        //console.log("%s xp: %d", this.name, this.xp);
        while (this.xp >= XP_LEVEL_REQUIREMENTS[this.level])
        {
            this.levelUp();
        }
    }

    levelUp()
    {
        this.level++;
        //console.log("You just advanced a %s level!", this.name);
        //console.log("Your %s level is now %d", this.name, this.level);
    }


}





class WoodcuttingSkill extends Skill
{
    static skillName = "Woodcutting"
    constructor()
    {
        super();
        this.actionInterval = 2000;
    }
    get name()
    {
        return WoodcuttingSkill.skillName;
    }

}

class MiningSkill extends Skill
{
    static skillName = "Mining"
    constructor()
    {
        super();
        this.actionInterval = 2000;
    }
    get name()
    {
        return MiningSkill.skillName;
    }

}


class StrengthSkill
{
    
}