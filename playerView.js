class SkillViewButton{
    constructor(actionButton, entityObject)
    {
        this.buttonRef = actionButton;
        this.entityRef = entityObject;

        console.log(this.entityRef);
        console.log(actionButton);
        this.buttonRef.addEventListener("click", () => {
            //serverInterface.startEntityAction();
            //ZoneView.playerRef.performEntityAction();

          })
    }
}


class PlayerView
{
    static currentEnt;
    static activityElement;
    static playerObject;
    static playerContainer
    static actionButtons
    static playerElement
    static setup()
    {
        PlayerView.actionButtons = [];
        PlayerView.playerContainer = document.querySelector(".player-container");
        PlayerView.playerElement = document.createElement("div");

    }

    static get(obj)
    {
        PlayerView.setup();
        PlayerView.playerObject = obj;

        let titleElement = document.createElement("h1");
        titleElement.innerHTML = (`${PlayerView.playerObject.name}<br>`);

        PlayerView.playerElement.replaceChildren(titleElement);

        //list out skills
        for (let skill of PlayerView.playerObject.skills)
        {
            console.log(skill);
            let skillElement = document.createElement("div");
            skillElement.classList.add('skill-element');
            skillElement.innerHTML = (`
           
            <label class="skill-label" id="${skill.name}}-text">${skill.name}  </label> 
            <label class="skill-xp-label" id="${skill.name}-xp-label">  ${skill.xp}  </label> `);
            PlayerView.playerElement.appendChild(skillElement);

            //make the skill label clickable
            let skillViewButton = PlayerView.playerElement.querySelector(`#${skill.name}-text`);
            console.log(PlayerView.playerElement)
            console.log(skillViewButton);   
            PlayerView.actionButtons.push( new SkillViewButton(skillViewButton, skill));

        }
        PlayerView.playerContainer.replaceChildren( PlayerView.skillElement);
    }
}