const { sequelize } = require("../db/connection");
const Movie = require("../tables/moviesTable");
const User = require("../tables/userTable")


// add movie function
exports.add = async (movieObj, userObj) => {
    try {
        await Movie.create(movieObj);
        await User.create(userObj);
        console.log("Success");
    } catch (error) {
        console.log(error)
    }
};

//list function
exports.list = async () => {
    try {
        console.log(await Movie.findAll()); 
        console.log(await User.findAll()); 
    } catch (error) {
        console.log(error);
    }
};

//delete movie function usign title
exports.remove = async (movieObj) => {
    try {
        await Movie.destroy({
            where: {
                title: movieObj.title 
            }
            });
    } catch (error) {
        console.log(error)
    }
};

// update movie function by title
exports.updateT = async (movieObj) => {
    try {
        await Movie.update({ 
            title: movieObj.newtitle }, 
        { where: { 
            title: movieObj.title 
        } 
    });
        console.log("Updated movie");
    } catch (error) {
        console.log("update title",error)
    }
};
exports.updateA = async (movieObj) => {
    try {
        await Movie.update({ 
            actor: movieObj.newactor }, 
        { where: { 
            title: movieObj.title 
        } 
    });
        console.log("Updated Actor");
    } catch (error) {
        console.log("update actor", error)
    }
};
exports.updateR = async (movieObj) => {
    try {
        await Movie.update({ 
            rating: movieObj.newrating}, 
        { where: { 
            title: movieObj.title 
        } 
    });
        console.log("Updated Rating");
    } catch (error) {
        console.log("update rating",error)
    }
};