import db from "../models/index.js";

const Reservation = db.Reservation;

const getAllReservations = async (req, res) => {
    try {
        const response = await Reservation.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No Reservation found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getReservationById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Reservation.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "Reservation not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createReservation = async (req, res) => {
    const Reservation = req.body;

    try {
        const response = await Reservation.create(Reservation);
            if(!response){
                res.status(500).json({"message": "Internal server error"});
            }else if(response){
                res.status(201).json({"message": "Reservation created."});
            }
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateReservationById = async (req, res) => {
    const { id } = req.params;
    const { Reservationname, email, password} = req.body;
    try {
        const [ response ] = await Reservation.update(
            {
                "Reservationname": Reservationname,
                "email": email,
                "password": password},
                { where: { id: id}});
        if(response === 0){
            res.status(404).json({"message": "Reservation not found"});
        }else if(response){
            res.status(201).json({"message": "Reservation updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteReservationById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Reservation.destroy({where: {id: id}})
        if(response === 0){
            res.status(404).json({"message": "Reservation not found"});
        }else if(response){
            res.status(200).json({"message": "Reservation deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createReservation, getAllReservations, getReservationById, updateReservationById, deleteReservationById };

