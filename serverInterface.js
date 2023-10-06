//packet format
// Character Name
// Request Type
// Request Paramaters

const SERVER_REQUESTS_TYPES = 
{
    LOGIN_REQUEST: "LOGIN",
    GET_PLAYER_STATS: "GET_PLAYER_STATS",


}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

class serverInterface
{

    constructor()
    {
        serverInterface.player = new Player()
    }


    socket
    loginSuccess = false;
    connected=false;
    static processIncomingServerMessage(message)
    {

        let serverMessage = JSON.parse(message);
        //console.log("process server data", serverMessage);

        // Display the message in the container
        document.querySelector(".server-message").innerHTML = message + "<br>" + document.querySelector(".server-message").innerHTML;

        if(serverMessage.clientName =! this.playerName)
        {

            console.log("unknown client id")
            return;

        }

        if(serverMessage.type == "COMMAND_RESPONSE")
        {
            if(serverMessage.data.action == "LOGIN")
            {
                if(serverMessage.data.response == "SUCCESS")
                {
                    console.log("login success")
                    this.loginSuccess = true;
                    this.zone = new Zone();
                    this.zone.buildZone(serverMessage.data.zone);
                    let zoneview = new ZoneView();
                    zoneview.get(this.zone);
                }
            }

            // do something with set entity target command response
            if(serverMessage.data.action == "SET_ENTITY_TARGET")
            {
                if(serverMessage.data.result == "SUCCESS")
                {
                    EntityView.get(serverMessage.data.entity);
                }
            }

            // do something with start entity action command response
            if(serverMessage.data.action == "PERFORM_ENTITY_ACTION")
            {
                if(serverMessage.data.result == "SUCCESS")
                {
                    //do gui stuff like start progress bar
                }
            }
        }

        

        if(serverMessage.type == "PLAYER")
        {
            PlayerView.get(serverMessage.data)
        }

        if(serverMessage.type == "ACTION_RESULT")
        {
            //player.process action results
        }
        if (serverMessage.type == "ENTITY")
        {
            if(serverMessage.data.id == EntityView.currentEnt.id)
            {
                EntityView.get(serverMessage.data);
            }
        }


    }

    static setEntityTarget(entity)
    {
        let message = this.playerName + "\nSET_ENTITY_TARGET \n" + entity.id + "\n";// + "\nPERFORM_ENTITY_ACTION\n" 
        serverInterface.send(message);
    }

    static startEntityAction()
    {
        let message = this.playerName + "\nPERFORM_ENTITY_ACTION\n" 
        serverInterface.send(message);
    }

    static exploreZoneAction()
    {
        let message = this.playerName + "\nEXPLORE_ZONE\n" 
        serverInterface.send(message);
    }


    static send(message)
    {
        document.querySelector(".client-message").innerHTML = message + "<br>" + document.querySelector(".client-message").innerHTML;
        serverInterface.socket.send(message);
    }

    static connect()
    {
            const websocketURL = 'ws://3.129.253.156:12345'; // Replace with your WebSocket server URL

            // Create a WebSocket connection
            serverInterface.socket = new WebSocket(websocketURL);

            // Listen for WebSocket open event
            serverInterface.socket.addEventListener("open", (event) => {
                serverInterface.connected = true;
                console.log("WebSocket connection established.");
            });

            // Listen for WebSocket message event
            serverInterface.socket.addEventListener("message", (event) => {
                console.log("server messaged received");
                this.processIncomingServerMessage(event.data);
            });

            // Listen for WebSocket close event
            serverInterface.socket.addEventListener("close", (event) => {
                serverInterface.connected = false;
                console.log("WebSocket connection closed.");
            });

            // Listen for WebSocket error event
            serverInterface.socket.addEventListener("error", (event) => {
                console.error("WebSocket error:", event);
                serverInterface.connected = false;
            });

        
        
    }

    static loginRequest(playerName)
    {

        if(serverInterface.connected==true)
        {
            this.playerName = playerName;
            serverInterface.send(playerName + "\nLOGIN\n0")
            

        }
        else
        {
        serverInterface.connect()
        for (let i = 0; i < 5; i++) {
            sleep(1000);

            if(serverInterface.connected==true)
            {
                serverInterface.send(playerName + "\nLOGIN\n0")
                break
    
            }
          }
        }

          for (let i = 0; i < 5; i++) {
              sleep(1000);
  
              if(serverInterface.loginSuccess==true)
              {
                  // display zone view
                  return
      
              }
            }

    }

    
}