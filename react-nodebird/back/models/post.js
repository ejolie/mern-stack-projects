module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    text: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  });

  return Post;
};
