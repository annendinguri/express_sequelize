import db from "../models/index.js";


const Table = db.Table;

const getAllTables = async (req, res) => {
    try {
        const response = await Table.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No table found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getTableById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Table.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "Table not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createTable = async (req, res) => {
    const table = req.body;

    try {
        const response = await Table.create(table);
            if(!response){
                res.status(500).json({"message": "Internal server error"});
            }else if(response){
                res.status(201).json({"message": "Table created."});
            }
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateTableById = async (req, res) => {
    const { id } = req.params;
    const { Tablename, email, password} = req.body;
    try {
        const [ response ] = await Table.update(
            {
                "Tablename": Tablename,
                "email": email,
                "password": password},
                { where: { id: id}});
        if(response === 0){
            res.status(404).json({"message": "Table not found"});
        }else if(response){
            res.status(201).json({"message": "Table updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteTableById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Table.destroy({where: {id: id}})
        if(response === 0){
            res.status(404).json({"message": "Table not found"});
        }else if(response){
            res.status(200).json({"message": "Table deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createTable, getAllTables, getTableById, updateTableById, deleteTableById };

