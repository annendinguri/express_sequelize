import { DataTypes } from 'sequelize';

const Reservation =(sequelize,Sequelize)=>{
    const Reservation= sequelize.define("reservation",{
        id: {
         type: DataTypes.INTEGER,
         primaryKey: true

        },
            reservation_time: {
            type: DataTypes.STRING,
            alloNull: false
   
           },
           num_guest: {
            type: DataTypes.INTEGER,
             allowNull: false
   
           },
           special_requst: {
            type: DataTypes.STRING,
            allowNull:false
           }

    });
    return Reservation





};
export default Reservation;