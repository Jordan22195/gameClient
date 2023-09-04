class EntityActionButton{
    constructor(actionButton, entityObject)
    {
        this.buttonRef = actionButton;
        this.entityRef = entityObject;

        console.log(this.entityRef);
        console.log(actionButton);
        this.buttonRef.addEventListener("click", () => {
            serverInterface.setEntityTarget(this.entityRef);
            //ActivityView.get();
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
    constructor(playerObject)
    {
        ZoneView.actionButtons = [];
        ZoneView.playerRef = playerObject
        ZoneView.zoneContainer = document.querySelector(".zone-container");
        ZoneView.zoneElement = document.createElement("div");

    }

    get(zoneObject)
    {
        ZoneView.currentZone = zoneObject;
        console.log(ZoneView.currentZone.entities)

        let titleElement = document.createElement("h1");
        titleElement.innerHTML = (`${ZoneView.currentZone.name}<br>`);
        ZoneView.zoneContainer.appendChild(titleElement);

        for (let ent of ZoneView.currentZone.entities)
        {
            console.log(ent);
            let entityElement = document.createElement("div");
            entityElement.classList.add('entity-element')
            entityElement.innerHTML = (`
           
            <label class="entity-label" id="${ent.id}-activity-text">${ent.name}  </label> 
            <label class="entity-quantity-label" id="${ent.id}-quantity-label">x${ent.count}  </label> 
            <button class="entity-action-button" id="${ent.id}-button"></button>`)
            ZoneView.zoneElement.appendChild(entityElement);

            
            let entityActionButton = ZoneView.zoneElement.querySelector(`#${ent.id}-button`);
            console.log("button")
            console.log(entityElement);
            console.log(entityActionButton);
            ZoneView.actionButtons.push( new EntityActionButton(entityActionButton, ent));

        }
        ZoneView.zoneContainer.appendChild( ZoneView.zoneElement);

    }

}