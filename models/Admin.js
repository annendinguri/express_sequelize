import { DataTypes } from 'sequelize';

const Admin =(sequelize,Sequelize)=>{
    const Admin= sequelize.define("admin",{
        id: {
         type: DataTypes.INTEGER,
         primaryKey: true

        },
        adminname: {
            type: DataTypes.STRING,
            allowNull: false
   
           },
           job_tittle: {
            type: DataTypes.STRING,
            alloNull: false
   
           },
           email: {
            type: DataTypes.STRING,
             allowNull: false
   
           }

    });
    return Admin





};
export default Admin;