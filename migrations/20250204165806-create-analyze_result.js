'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('analyze_result', { 
      sequence_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'uploaded_sequences',
          key: 'id'
        }
      },
      cdrl1: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      cdrl2: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      cdrl3: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      cdrh1: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      cdrh2: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      cdrh3: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      hi: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      mw: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      pi: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      net_charge: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      createAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updateAt: {
        type: Sequelize.DATE,
        allowNull: false
      } 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('analyze_result');
  }
};
