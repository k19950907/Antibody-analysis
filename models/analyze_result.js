const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('analyze_result', {
    sequence_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'uploaded_sequences',
        key: 'id'
      }
    },
    cdrl1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cdrl2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cdrl3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cdrh1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cdrh2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cdrh3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hi: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    mw: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pi: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    net_charge: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'analyze_result',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sequence_id" },
        ]
      },
      {
        name: "sequence_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sequence_id" },
        ]
      },
    ]
  });
};
