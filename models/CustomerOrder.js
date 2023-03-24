import { DataTypes } from 'sequelize';

const CustomerOrder = (sequelize, Sequelize) => {
    const CustomerOrder = sequelize.define("customer_orders", {
      customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }

    });
    return CustomerOrder;
  };

  export default CustomerOrder;