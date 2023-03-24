import { DataTypes } from 'sequelize';

const Customer = (sequelize, Sequelize) => {
    const Customer= sequelize.define("customer", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey:true
      },
      customername: {
        type: DataTypes.STRING,
        allowNull:false 
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false 
      },
      phone: {
        type: DataTypes.STRING,
        allowNull:false

      },
      address: {
        type: DataTypes.STRING,
        allowNull:false
      }
     
    });
    return Customer;
  };

  export default Customer;





