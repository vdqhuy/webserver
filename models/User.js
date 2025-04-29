module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    login_id: DataTypes.STRING,
    orig_id: DataTypes.BIGINT
    // các field khác...
  }, {
    tableName: 'vidmh_user',
    timestamps: false
  });

  return User;
};

