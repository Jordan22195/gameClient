class ActivityView
{
    static activityElement;
    static centerWindowContainer;
    static playerRef
    constructor(playerObject)
    {
        ActivityView.playerRef = playerObject
        ActivityView.centerWindowContainer = document.querySelector(".center-window");
        ActivityView.activityElement = document.createElement("div");

    }

    static get()
    {

        ActivityView.activityElement.innerHTML = (`
        <h1 class="activity-header">Activity Window</h1>
        <p>Level: <label class="level-text">xx</label>   <br>
        XP: <label class="xp-text">xx</label></p>
        <div class="activity-progress-bar-containter"> <div id="activity-progress-bar" class="progress-bar"> </div></div>
        <p>Items Collected: <label class="items-collected-text">xx</label></p>
        <p><label class="action-name">Actions Performed</label>: <label class="actions-performed-text">xx</label></p>
        <p>Time Active: <label class="duration-text">xx</label></p>
        `);
        ActivityView.centerWindowContainer.appendChild(ActivityView.activityElement);

        console.log(ActivityView.playerRef.getActiveSkill());
        if(ActivityView.playerRef.getActiveSkill()){

            ActivityView.activityElement.querySelector(".activity-header").innerText = ActivityView.playerRef.getActiveSkill().name;
            ActivityView.activityElement.querySelector(".level-text").innerText = ActivityView.playerRef.getActiveSkill().level;
            ActivityView.activityElement.querySelector(".xp-text").innerText = ActivityView.playerRef.getActiveSkill().xp;
            ActivityView.activityElement.querySelector(".items-collected-text").innerText = ActivityView.playerRef.getActivitySessionItemsString();
            //ActivityView.activityElement.querySelector(".action-name").innerText = ActivityView.playerRef.getActiveSkill().name;
            ActivityView.activityElement.querySelector(".actions-performed-text").innerText = ActivityView.playerRef.activitySessionActionsPerformed;
            ActivityView.activityElement.querySelector(".duration-text").innerText = ActivityView.playerRef.getActivitySessionDurationString();

            ActivityView.update();
        }
        else{

        }
    }

    static async update()
    {
        
        
        if(ActivityView.playerRef.getActiveSkill()){
            while(ActivityView.playerRef.getActiveSkill()){
            await sleep(500);
            ActivityView.activityElement.querySelector(".activity-header").innerText = ActivityView.playerRef.getActiveSkill().name;
            ActivityView.activityElement.querySelector(".level-text").innerText = ActivityView.playerRef.getActiveSkill().level;
            ActivityView.activityElement.querySelector(".xp-text").innerText = ActivityView.playerRef.getActiveSkill().xp;
            ActivityView.activityElement.querySelector(".items-collected-text").innerText = ActivityView.playerRef.getActivitySessionItemsString();
            //ActivityView.activityElement.querySelector(".action-name").innerText = ActivityView.playerRef.getActiveSkill().name;
            ActivityView.activityElement.querySelector(".actions-performed-text").innerText = ActivityView.playerRef.activitySessionActionsPerformed;
            ActivityView.activityElement.querySelector(".duration-text").innerText = ActivityView.playerRef.getActivitySessionDurationString();
            }
        }
        else{

        }

    }

static i = 0;
  static move(duration_ms) 
  {
    let elem = ActivityView.activityElement.querySelector(".progress-bar")
    if (true)
    {

        let id = null;
        clearInterval(id);
        ActivityView.i = 1;
        let width = 0;
        id = setInterval(frame, duration_ms/100);
        function frame() {
            if (width >= 100) 
            {
                ActivityView.i = 0;
                clearInterval(id);
            } 
            else 
            {
                width++;
                elem.style.width = width + "%";
            }
        }
    }   
 
}



}