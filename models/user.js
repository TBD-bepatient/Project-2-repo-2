module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("User", {

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    unsolicitedTrades: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });

  return User;
}
