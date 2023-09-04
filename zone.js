

class Zone{


    constructor()
    {
        this.entities = []
    }

    buildZoneFromString(message)
    {
        const wordList = message.split('\n');
        for (let index = 0; index < wordList.length; index++) {
            if (wordList[index] == "ZONE")
            {
                index++;
                this.name = wordList[index]
            }
            if (wordList[index] == "ENTITIES")
            {
                index++;
                this.numEntities = wordList[index]

            }
            if (wordList[index] == "ENTITY")
            {
                let e = new Entity();
                e.name = wordList[index+1];
                e.skillType = wordList[index+2];
                e.health = wordList[index+3];
                e.maxHealth = wordList[index+4];
                e.count = wordList[index+5];
                e.maxCount = wordList[index+6];
                console.log("created entity: ", e);
                this.entities.push(e);
                index += 6;
            }
        }
        console.log("zone create: ", this);

    }


}