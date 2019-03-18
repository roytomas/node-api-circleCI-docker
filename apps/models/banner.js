'use strict';
module.exports = (sequelize, DataTypes) => {
  const banner = sequelize.define('banner', {
    width: DataTypes.STRING,
    height: DataTypes.STRING,
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    redirectUrl: DataTypes.STRING,
    bgimgUrl: DataTypes.STRING,
    startdate: DataTypes.DATEONLY,
    enddate: DataTypes.DATEONLY,
    is_active: DataTypes.BOOLEAN
  }, {});
  banner.associate = function(models) {
    // associations can be defined here
  };
  return banner;
};