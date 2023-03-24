import db from "../models/index.js";

const Role = db.Role;

const getAllRoles = async (req, res) => {
    try {
        const response = await Role.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No Role found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getRoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Role.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "Role not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}


const createRole = async (req, res) => {
    // const Role = req.body;
    try {
        const response = await Role.create(req.body);
            if(!response){
                res.status(500).json({"message": "Internal server error"});
            }else if(response){
                res.status(201).json({"message": "role created."});
            }
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateRoleById = async (req, res) => {
    const { id } = req.params;
    const {name} = req.body;
    try {
        const [ response ] = await Role.update(
            {
                "username":name,
            },
                { where: { id: id}});
        if(response === 0){
            res.status(404).json({"message": "Role not found"});
        }else if(response){
            res.status(201).json({"message": "Role updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }

}

const deleteRoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Role.destroy({where: {id: id}})
        if(response === 0){
            res.status(404).json({"message": "Role not found"});
        }else if(response){
            res.status(200).json({"message": "Role deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }

}
export{getAllRoles, getRoleById, createRole, updateRoleById, deleteRoleById};