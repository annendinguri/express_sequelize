import { DataTypes } from 'sequelize';

const Table=(sequelize,Sequelize)=>{
    const Table= sequelize.define("table",{
        id: {
         type: DataTypes.INTEGER,
         primaryKey: true

        },
        tablename: {
            type: DataTypes.INTEGER,
            allowNull: false
   
           },
           location: {
            type: DataTypes.STRING,
            alloNull: false
   
           },
           is_available: {
            type: DataTypes.BOOLEAN,
             allowNull: false
   
           }
    });
    return Table





};
export default Table;