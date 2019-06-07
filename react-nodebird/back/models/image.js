module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    src: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  });

  return Image;
};
