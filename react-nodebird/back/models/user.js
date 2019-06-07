module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },
    {
      // 한글 저장 가능
      charset: 'utf8',
      collate: 'utf-_general_ci'
    }
  );

  // 관계 정의
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
  };

  return User;
};
