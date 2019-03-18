'use strict';
module.exports = (sequelize, DataTypes) => {
  const hospitalad = sequelize.define('hospitalad', {
    hospital_code: DataTypes.STRING,
    content: DataTypes.STRING,
    title: DataTypes.STRING,
    redirectUrl: DataTypes.STRING,
    startdate: DataTypes.DATEONLY,
    enddate: DataTypes.DATEONLY,
    is_active: DataTypes.BOOLEAN
  }, {});
  hospitalad.associate = function(models) {
    // associations can be defined here
  };
  return hospitalad;
};