const yargs = require("yargs");
const {sequelize} = require("./db/connection");
const {add, list, remove, updateT, updateA, updateR } = require("./functions/functions.js");



const app = async(yargsObj)=>{
    try{

        // will wait for the database to complete/update
        await sequelize.sync({alter: true});

        if (yargsObj.add){
            //adding to the table
            await add({ title: yargsObj.title, actor: yargsObj.actor, rating: yargsObj.rating }, {userName: yargsObj.userName});
            console.log(`${yargsObj.title} has been added`)

        }else if(yargsObj.list){
            //showing the data
            console.log(await list());

        } else if (yargsObj.delete){
            await remove({title: yargsObj.title});
            console.log(`Deleted ${yargsObj.title}`);

        } else if (yargsObj.updateT){
            //state new title then old title
            await updateT({newtitle: yargsObj.newtitle, title: yargsObj.title});
        } else if (yargsObj.updateA){
            await updateA({newactor: yargsObj.newactor, title: yargsObj.title});
        } else if (yargsObj.updateR){
            await updateR({newrating: yargsObj.newrating, title: yargsObj.title});

        }else{
            console.log("Incorrect Command");
        }
    }catch(error){
        console.log(error);
    }finally{
        await sequelize.close();
    }
}

app(yargs.argv)

//COMMANDS
//node src/app.js --add --title "" --actor "" --rating  --userName ""
//node src/app.js --list
//node src/app.js --delete --title ""
//node src/app.js --updateT --newtitle "" --title ""
//node src/app.js --updateA --newactor "" --title ""
//node src/app.js --updateR --newrating  --title ""