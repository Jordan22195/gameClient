class DBInterface
{
    login()
    {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
            if (user) {
            //You're logged in!
            playerObject = new player(user.uid);

            //buildWorld();


            initGame();


            } else {
            //You're logged out.
            }
        })

        firebase.auth().signInAnonymously().catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log("try login");
            console.log(errorCode, errorMessage);
        });
}
}