'use strict';
module.exports = (sequelize, DataTypes) => {
  const linkstaffad = sequelize.define('linkstaffad', {
    content: DataTypes.STRING,
    title: DataTypes.STRING,
    redirectUrl: DataTypes.STRING,
    startdate: DataTypes.DATEONLY,
    enddate: DataTypes.DATEONLY,
    is_active: DataTypes.BOOLEAN
  }, {});
  linkstaffad.associate = function(models) {
    // associations can be defined here
  };
  return linkstaffad;
};