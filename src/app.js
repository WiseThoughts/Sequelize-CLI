const yargs = require("yargs");
const {sequelize} = require("./db/connection");
const {add, list, remove, update } = require("./functions/functions.js");


const app = async(yargsObj)=>{
    try{

        // will wait for the database to complete/update
        await sequelize.sync({alter: true});

        if (yargsObj.add){
            //adding to the table
            await add({ title: yargsObj.title, actor: yargsObj.actor, rating: yargsObj.rating });
            console.log(`${yargsObj.title} has been added`)

        }else if(yargsObj.list){
            //showing the data
            console.log(await list());

        } else if (yargsObj.delete){
            await remove({title: yargsObj.title});
            console.log(`Deleted ${yargsObj.title}`);

        } else if (yargsObj.update){
            //state new title then old title
            await update({newtitle: yargsObj.newtitle, title: yargsObj.title});

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
//node src/app.js --add --title "" --actor "" --rating ""
//node src/app.js --list
// $ node src/app.js --add --id=1 --title="SpiderMan" --actor="Tom Holland" --rating="8" --userName="Linden"