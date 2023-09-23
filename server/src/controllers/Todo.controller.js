
import express from "express"
import { TodoModel } from "../models/Todo.Model.js";
/** 
  * 
  * @param {express.Request} req 
  * @param {express.Response} res 
  * @returns 
  */

class TodoController {
    async getTodo(req, res) {
        try {
            const data = await TodoModel.find()
            return res.status(200).json({
                data,
                message: "Data arrived"
            })
        } catch (err) {
            console.log(err.message);
        }
    }
    /**
        * 
        * @param {express.Request} req 
        * @param {express.Response} res 
        * @returns 
        */


    async getTodoId(req, res) {
        try {
            const { id } = req.params
            // const idd = Types.ObjectId(id)
            const data = await TodoModel.findById(id)
            console.log(data);
            return res.status(200).json({
                data,
                message: "Data found"
            })
        } catch (err) {
            console.log(err.message);
        }
    }







    /**
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     * @returns 
     */
    async postTodo(req, res) {
        try {
            const { name, email, age } = req.body
            console.log(req.body);
            const postData = new TodoModel({
                name,
                email,
                age
            })
            await postData.save()
            return res.status(201).json({
                data: postData,
                message: "Todo created"
            })
        } catch (err) {
            console.log(err.message);
        }
    }

    /**
   * 
   * @param {express.Request} req 
   * @param {express.Response} res 
   * @returns 
   */

    async putData(req, res) {
        try {
            const { id } = req.params
            const { name, email, age } = req.body
            const putId = await TodoModel.findOneAndUpdate({ _id: id }, {
                name,
                email,
                age
            })

            await putId.save()
            return res.status(201).json({
                data: putId,
                message: "Updated successfuly"
            })
        } catch (err) {
            console.log(err.message);
        }
    }

    /**
  * 
  * @param {express.Request} req 
  * @param {express.Response} res 
  * @returns 
  */

    async deleteData(req, res) {
        try {
            const { id } = req.params
            const delData = await TodoModel.findByIdAndDelete({ _id: id })

            return res.status(200).json({
                message: "Data is deleted"
            })
        } catch (err) {
            console.log(err.message);
        }
    }
}

export default new TodoController