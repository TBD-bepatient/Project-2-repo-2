module.exports = function (sequelize, DataTypes) {
    let Trades = sequelize.define("Trades", {

        tradeUser: {
            type: DataTypes.INTERGER,
            allowNull: false,
        },

        askedGameID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        offeredGameID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Trades;
}