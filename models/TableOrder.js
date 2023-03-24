import { DataTypes } from 'sequelize';

const TableOrder = (sequelize, Sequelize) => {
    const TableOrder = sequelize.define("table_orders", {
      table_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }

    });
    return TableOrder;
  };

  export default TableOrder;