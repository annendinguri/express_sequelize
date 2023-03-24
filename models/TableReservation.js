import { DataTypes } from 'sequelize';

const TableReservation = (sequelize, Sequelize) => {
    const TableReservation = sequelize.define("table_reservations", {
      table_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      reservation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }

    });
    return TableReservation;
  };

  export default TableReservation;