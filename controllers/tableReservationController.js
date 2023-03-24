import db from "../models/index.js";

const TableReservation = db.TableReservation;

const getAllTableReservations = async (req, res) => {
    try {
        const response = await TableReservation.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No tabler reservation found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getTableReservationById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await TableReservation.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "Table reservation not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createTableReservation = async (req, res) => {
    try {
        const response = await TableReservation.create(req.body);
        res.status(201).json({"message": "TableReservation created."});
    } catch (error) {
        res.status(401).json(error);
    }
}

const updateTableReservationById = async (req, res) => {
    const { table_id, reservation_id } = req.params;
    
    try {
        const [ response ] = await TableReservation.update(
            {
                "reservation_id": reservation_id,
                "table_id": table_id},
                { where: { table_id: table_id, reservation_id: reservation_id }});
        if(response === 0){
            res.status(404).json({"message": "Table reservation not found"});
        }else if(response){
            res.status(201).json({"message": "Table reservation updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteTableReservationById = async (req, res) => {
    const { table_id, reservation_id} = req.params;

    try {
        const response = await TableReservation.destroy({where: { table_id: table_id, reservation_id: reservation_id}})
        if(response === 0){
            res.status(404).json({"message": "Table reservation not found"});
        }else if(response){
            res.status(200).json({"message": "Table reservation deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createTableReservation, getAllTableReservations, getTableReservationById, updateTableReservationById, deleteTableReservationById };
