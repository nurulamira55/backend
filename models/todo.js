//const { DataTypes } = require("sequelize/types")

module.exports = (sequelize, Datatypes) => {
    const Todos =sequelize.define ('Todos' ,{
        title: Datatypes.STRING,
        description:  Datatypes.STRING,
    });

    return Todos;
};