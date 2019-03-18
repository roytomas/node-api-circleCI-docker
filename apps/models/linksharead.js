'use strict';
module.exports = (sequelize, DataTypes) => {
  const linksharead = sequelize.define('linksharead', {
    content: DataTypes.STRING,
    title: DataTypes.STRING,
    redirectUrl: DataTypes.STRING,
    startdate: DataTypes.DATEONLY,
    enddate: DataTypes.DATEONLY,
    is_active: DataTypes.BOOLEAN
  }, {});
  linksharead.associate = function(models) {
    // associations can be defined here
  };
  return linksharead;
};