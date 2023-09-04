



function buildWorld()
{

  zoneRef=  firebase.database().ref(`zones/zone1`);

  treeRef = firebase.database().ref(`zones/zone1/entities/z1_tree`);
  treeRef.set({name: "z1_tree", health: 10});


}


(function () {

  serverInterface.connect();

  login.loginView()

  return

  const testTree = new Tree();
  let zone1 = new Zone();
  zone1.addEntity(new Tree(), 1);
  zone1.addEntity(new CopperVein(), 1);
  const playerObject = new Player()
  const zoneView = new ZoneView(playerObject);
  const activityView = new ActivityView(playerObject);

  zoneView.get(zone1);

  //playerObject.setEntityTarget(testTree);

  //activityView.get();
  //activityView.update();

  //playerObject.performEntityAction();


  function initGame()
  {
    // all new players get assigned to zone1
    if( playerObject.zone == "")
    {
      playerObject.setValue("zone", "zone1");



    }
    const characterElement = document.createElement("div");
    characterElement.innerHTML = (`
    <input type="text" id="Name" name="nameInput" placeholder="Name" size="30" required>
    <button type="submit" id="nameSubmitButton" autofocus>
    Submit
  </button>
    `);
    const gameContainer = document.querySelector(".player");
    gameContainer.appendChild(characterElement);
  
    //set the world ref to be the player's zone
    zoneObject = new zone("zone1");
    console.log(zoneObject);
    console.log(playerObject.playerId);
    zoneObject.registerPlayerToZone(playerObject.playerId, {name: playerObject.name});

  
  const playerNameButton = document.querySelector("#nameSubmitButton");
    //Update player color on button click
  playerNameButton.addEventListener("click", (e) => {
      playerObject.setValue("name", document.querySelector("#Name").value);
      })
   
    
    }



})();
