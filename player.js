
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

class Player{

    name
    skills
    bag
    entityTarget;
    performingAction;
  
    constructor()
    {
        this.bag = new Inventory();
        this.skills = [];
        this.skills[skillEnumeration.WOODCUTTING] = new WoodcuttingSkill();
        this.skills[skillEnumeration.MINING] = new MiningSkill();
        this.performingAction = false;
        this.d = new Date();

        this.activitySessionItems = new Map();
        this.activitySessionXp = 0
        this.activitySessionStartTime = 0;
        this.activitySessionActionsPerformed = 0;
    }

    buildPlayerFromString(messageList)
    {
        const wordList = message.split('\n');
        for (let index = 0; index < messageList; index++) 
        {

            if(index == "WOODCUTTING_XP")
            {
                index++;
                skills[WoodcuttingSkill].setXpFromString(wordList[index])
            }
            if(index == "ATTACK_XP")
            {
                index++;
                skills[WoodcuttingSkill].setXpFromString(wordList[index])
            }
            if(index == "WOODCUTTING_XP")
            {
                index++;
                skills[WoodcuttingSkill].setXpFromString(wordList[index])
            }
            if(index == "WOODCUTTING_XP")
            {
                index++;
                skills[WoodcuttingSkill].setXpFromString(wordList[index])
            }
            if(index == "ITEM")
            {
                index;
                let name = wordList[index+1]
                let quantity = worldList[index+2]

                let item = new Item(name, quantity)
                this.bag.addItem(item);
            }


        }
    }
  
    setEntityTarget(entity)
    {
        this.entityTarget = entity;
    }

    getActiveSkill()
    {
        if (this.entityTarget)
            return this.skills[this.entityTarget.skillType]
    }

    activitySessionItems

    getActivitySessionItemsString()
    {
        let text = "";
       // console.log(this.activitySessionItems);
        if(this.activitySessionItems)
        {
            for (let [key, value] of this.activitySessionItems)
            {
                text = `${text}` + `${key}` +  ' : ' + `${value}`; 
            }
                
            
        }

        return text;
    }

    formatDuration(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const days = Math.floor(seconds / (60 * 60 * 24));
        const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const remainingSeconds = seconds % 60;
    
        const formattedParts = [
            days > 0 ? days + 'd' : '',
            hours > 0 ? hours + 'h' : '',
            minutes > 0 ? minutes + 'm' : '',
            remainingSeconds + 's'
        ];
    
        return formattedParts.filter(part => part !== '').join(':');
    }

    getActivitySessionDurationString()
    {
        if(this.activitySessionStartTime != 0)
        {
            let durration_ms =  new Date().getTime() - this.activitySessionStartTime

            let s=  (this.formatDuration(durration_ms));
            return s;
        }
    }


    async  performEntityAction()
    {
        this.activitySessionItems = new Map();
        this.activitySessionXp = 0
        this.activitySessionStartTime = new Date().getTime();
        this.activitySessionActionsPerformed = 0;

        let skill = this.skills[this.entityTarget.skillType];
        while (this.performingAction == true)
        {   console.log("waiting for previous action to complete")
            this.stopAction = true;
            await sleep(500);
        }

        if (skill.level >= this.entityTarget.levelRequirement)
        {
            this.performingAction = true;
            this.stopAction = false;
            while (this.performingAction)
            {
                
                
            
                console.log("progress bar start");
                ActivityView.move(skill.actionInterval)
                await sleep(skill.actionInterval);

                if(this.stopAction == true)
                {
                    console.log("stop action");
                    this.performingAction = false;
                    return;
                }
                console.log("gather action");

                var res = this.entityTarget.gatherAction();
                skill.addXp(res.xp);
                this.bag.addItems(res.loot);
                this.activitySessionXp += res.xp;
                this.activitySessionActionsPerformed++;
                for ( let {item, quantity} of res.loot)
                {
                    if (this.activitySessionItems.get(item.name))
                    {
                        this.activitySessionItems.set(item.name,this.activitySessionItems.get(item.name) + quantity);
                    }
                    else
                    {
                        this.activitySessionItems.set(item.name, quantity);
                    }
                }
                
                

                //this.bag.showInventory();
                // increase xp
                // put loot in bag
                
            }
        }

    }

  
  }