const ITEMS = 
{
    REGULAR_LOGS: "regular logs"
}

class Item
{

    constructor()
    {
        this.name = "";
        this.description = "";
    }
}

class RegularLogs extends Item
{
    constructor()
    {
        super();
        this.name = "Regular Logs"
    }
}

class CopperOre extends Item
{
    constructor()
    {
        super();
        this.name = "Copper Ore";
    }
}
