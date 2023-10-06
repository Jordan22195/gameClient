class EntityActionButton{
    constructor(actionButton, entityObject)
    {
        this.buttonRef = actionButton;
        this.entityRef = entityObject;

        console.log(this.entityRef);
        console.log(actionButton);
        this.buttonRef.addEventListener("click", () => {
            serverInterface.startEntityAction();
            //ZoneView.playerRef.performEntityAction();

          })
    }
}


class EntityView
{
    static currentEnt;
    static activityElement;
    static playerRef
    static zoneContainer
    static actionButtons
    static entityElement
    constructor(playerObject)
    {
        EntityView.actionButtons = [];
        EntityView.playerRef = playerObject
        EntityView.entityContainer = document.querySelector(".entity-container");
        EntityView.entityElement = document.createElement("div");

    }

    static get(entObject)
    {
        EntityView.currentEnt = entObject;
        EntityView.entityContainer = document.querySelector(".entity-container");
        EntityView.actionButtons = [];
        console.log(ZoneView.currentZone.entities)

        let titleElement = document.createElement("h1");
        titleElement.innerHTML = (`${entObject.name}<br>`);

        EntityView.entityElement = document.createElement("div");
        EntityView.entityElement.replaceChildren(titleElement);

     
        console.log(entObject);
        let entityContents = document.createElement("div");

        entityContents.innerHTML = (`
        
        <label class="hp-label" >HP:  ${entObject.health} / ${entObject.maxHealth}  </label> 

        <button class="entity-action-button" id="${entObject.id}-button"></button>`)
    
        EntityView.entityElement.appendChild(entityContents);
        
        let entityActionButton = EntityView.entityElement.querySelector(`#${entObject.id}-button`);
        console.log("button")
   
        EntityView.actionButtons.push( new EntityActionButton(entityActionButton, entObject));

        
        EntityView.entityContainer.replaceChildren( EntityView.entityElement);

    }

}