import db from "../models/index.js";

const Menu = db.Menu;

const getAllMenus = async (req, res) => {
    try {
        const response = await Menu.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No Menu found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getMenuById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Menu.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "Menu not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createMenu = async (req, res) => {
    const Menu = req.body;

    try {
        const response = await Menu.create(Menu);
            if(!response){
                res.status(500).json({"message": "Internal server error"});
            }else if(response){
                res.status(201).json({"message": "Menu created."});
            }
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateMenuById = async (req, res) => {
    const { id } = req.params;
    const { Menuname, email, password} = req.body;
    try {
        const [ response ] = await Menu.update(
            {
                "Menuname": Menuname,
                "email": email,
                "password": password},
                { where: { id: id}});
        if(response === 0){
            res.status(404).json({"message": "Menu not found"});
        }else if(response){
            res.status(201).json({"message": "Menu updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteMenuById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Menu.destroy({where: {id: id}})
        if(response === 0){
            res.status(404).json({"message": "Menu not found"});
        }else if(response){
            res.status(200).json({"message": "Menu deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createMenu, getAllMenus, getMenuById, updateMenuById, deleteMenuById };

