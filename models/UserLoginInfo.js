module.exports = (sequelize, DataTypes) => {
  const UserLoginInfo = sequelize.define('UserLoginInfo', {
    orig_id: DataTypes.BIGINT,
    last_login: DataTypes.DATE
    // các field khác...
  }, {
    tableName: 'vidmh_user_login_info',
    timestamps: false
  });

  return UserLoginInfo;
};

