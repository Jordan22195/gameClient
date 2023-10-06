class EntityViewButton{
    constructor(actionButton, entityObject)
    {
        this.buttonRef = actionButton;
        this.entityRef = entityObject;

        console.log(this.entityRef);
        console.log(actionButton);
        this.buttonRef.addEventListener("click", () => {
            serverInterface.setEntityTarget(this.entityRef);
            //EntityView.get(this.entityRef)
            //ZoneView.playerRef.performEntityAction();

          })
    }
}

class ZoneExploreButton{
    constructor(actionButton)
    {
        this.buttonRef = actionButton;


        console.log(actionButton);
        this.buttonRef.addEventListener("click", () => {
            serverInterface.exploreZoneAction();
            //ZoneView.playerRef.performEntityAction();

          })
    }
}



class ZoneView
{
    static currentZone;
    static activityElement;
    static playerRef
    static zoneContainer
    static actionButtons
    static exploreButton

    constructor(playerObject)
    {
        ZoneView.actionButtons = [];
        ZoneView.playerRef = playerObject
        ZoneView.zoneContainer = document.querySelector(".zone-container");
        ZoneView.zoneElement = document.createElement("div");

    }

    get(zoneObject)
    {
        ZoneView.currentZone = zoneObject.data;
        console.log(ZoneView.currentZone.entities)

        let titleElement = document.createElement("h1");
        titleElement.innerHTML = (`${ZoneView.currentZone.name}<br>`);

        ZoneView.zoneElement.replaceChildren(titleElement);

        let exploreButtonElement = document.createElement("div");
        exploreButtonElement.innerHTML = (`

        <button class="zone-explore-button" id="zone-explore-button">Explore</button>`)
    
        ZoneView.zoneElement.appendChild(exploreButtonElement);
        let btn = ZoneView.zoneElement.querySelector(`#zone-explore-button`);
        ZoneView.exploreButton =  new ZoneExploreButton(btn);

        for (let ent of ZoneView.currentZone.entities)
        {
            console.log(ent);
            let entityElement = document.createElement("div");
            entityElement.classList.add('entity-element')
            entityElement.innerHTML = (`
           
            <label class="entity-label" id="${ent.id}-activity-text">${ent.name}  </label> 
            <label class="entity-quantity-label" id="${ent.id}-quantity-label">x${ent.count}  </label>`)
            ZoneView.zoneElement.appendChild(entityElement);

            
            let entityActionButton = ZoneView.zoneElement.querySelector(`#${ent.id}-activity-text`);
            console.log("button")
            console.log(entityElement);
            console.log(entityActionButton);
            ZoneView.actionButtons.push( new EntityViewButton(entityActionButton, ent));

        }
        ZoneView.zoneContainer.replaceChildren( ZoneView.zoneElement);

    }

}