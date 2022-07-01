# mySQL
Use npm install to install the node modules
(npm i yargs dotenv sequelize mysql2)
(https://sequelize.org/docs/v6/) -sequalize docs

COMMANDS
node src/app.js --add --title "" --actor "" --rating --userName ""
Adds the movie to the database, 
if the actor is not specified it'll add "not specifed",
if the rating is not specified it'll mark it as 0.

node src/app.js --list 
Lists all data entries from both the user table and movie table

node src/app.js --delete --title ""
Delets the record with the associated movie title

node src/app.js --updateT --newtitle "" --title ""
Updates the title to the newtitle

//node src/app.js --updateA --newactor "" --title ""
Updates the actor to the newactor targeted by the title 

//node src/app.js --updateR --newrating  --title ""
Updates the rating to the newrating targeted by the title 