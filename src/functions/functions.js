const { sequelize } = require("../db/connection");
const Movie = require("../tables/movies");



// add movie function
exports.add = async (movieObj) => {
    try {
        await Movie.create(movieObj);
        console.log("Success");
    } catch (error) {
        console.log(error)
    }
};

//list function
exports.list = async () => {
    try {
        console.log(await Movie.findAll()); 
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
exports.update = async (movieObj) => {
    try {
        await Movie.update({ 
            title: movieObj.newtitle }, 
        { where: { 
            title: movieObj.title 
        } 
    });
        console.log("Updated movie");
    } catch (error) {
        console.log(error)
    }
};