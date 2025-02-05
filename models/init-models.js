var DataTypes = require("sequelize").DataTypes;
var _align_database = require("./align_database");
var _analyze_result = require("./analyze_result");
var _uploaded_sequences = require("./uploaded_sequences");
var _users = require("./users");

function initModels(sequelize) {
  var align_database = _align_database(sequelize, DataTypes);
  var analyze_result = _analyze_result(sequelize, DataTypes);
  var uploaded_sequences = _uploaded_sequences(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  analyze_result.belongsTo(uploaded_sequences, { as: "sequence", foreignKey: "sequence_id"});
  uploaded_sequences.hasOne(analyze_result, { as: "analyze_result", foreignKey: "sequence_id"});
  align_database.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(align_database, { as: "align_databases", foreignKey: "user_id"});
  uploaded_sequences.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(uploaded_sequences, { as: "uploaded_sequences", foreignKey: "user_id"});

  return {
    align_database,
    analyze_result,
    uploaded_sequences,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
