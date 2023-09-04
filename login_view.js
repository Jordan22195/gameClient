class login
{

    static loginView()
    {
        let centerWindowContainer = document.querySelector(".primary-container");
        let loginElement = document.createElement("div");

        loginElement.innerHTML = (`
        <h1 class="activity-header">Welcome To Dominion</h1>
        <input type="text" id="Name" name="nameInput" placeholder="Name" size="30" required>
        <button type="submit" id="nameSubmitButton" autofocus style="height:200px;width:200px">login</button>


        `);

        centerWindowContainer.appendChild(loginElement);

        const playerNameButton = document.querySelector("#nameSubmitButton");
        //Update player color on button click
        playerNameButton.addEventListener("click", (e) => {
          serverInterface.loginRequest(document.querySelector("#Name").value);
          })
    }



}