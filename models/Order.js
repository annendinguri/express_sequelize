import { DataTypes } from 'sequelize';

const Order=(sequelize,Sequelize)=>{
    const Order= sequelize.define("order",{
        order_id: {
            type: DataTypes.INTEGER,
            primaryKey:true
          },
          date_ordered: {
            type: DataTypes.STRING,
            allowNull:false 
          },
          total_amount: {
            type: DataTypes.STRING,
            allowNull:false 
          },
          // special_request: {
          //   type: DataTypes.STRING,
          //   allowNull:false 
          // }


    });
    return Order

    };
    export default Order;


