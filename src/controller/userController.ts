import { Request, Response } from "express";
import { MysqlError } from "mysql";
import { db } from '../config/database'

class userController {

     createUser = ((req: Request, res: Response) => {
          db.query('INSERT INTO user SET ?', [req.body], (err: MysqlError | null, data: any) => {
               if (err) {
                    return res.status(400).json({
                         message: 'not OK',
                         error: err.message
                    })
               }
               return res.status(200).json({
                    message: 'datanya masuk pak',
                    user: data
               })
          })
     })
     getUser = ((req: Request, res: Response) => {
          db.query('SELECT * FROM user', (err: MysqlError | null, data: any) => {
               if (err) {
                    return res.status(400).json({
                         message: 'not OK',
                         error: err.message
                    })
               }
               return res.status(200).json({
                    message: 'datanya ada pak',
                    user: data
               })
          })
     })
     getUSerById = ((req: Request, res: Response) => {
          db.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err: MysqlError | null, data: any) => {
               if (err) {
                    return res.status(400).json({
                         message: 'not OK',
                         error: err.message
                    })
               }
               return res.status(200).json({
                    message: 'datanya ada pak',
                    user: data,
               })
          })
     })
     updateUSer = ((req: Request, res: Response) => {
          db.query('UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?',
               [req.body.name, req.body.email, req.body.password, req.params.id], (err: MysqlError | null, data: any) => {
                    if (err) {
                         return res.status(400).json({
                              message: 'not OK',
                              error: err.message
                         })
                    }
                    return res.status(200).json({
                         message: 'berhasil diubah nih pak',
                         user: data
                    })
               })
     })
     deleteUser = ((req: Request, res: Response) => {
          db.query('DELETE FROM user WHERE id = ?', [req.params.id], (err: MysqlError | null, data: any) => {
               if (err) {
                    return res.status(400).json({
                         message: 'not OK',
                         error: err.message
                    })
               }
               return res.status(200).json({
                    message: 'berhasil dihapus ya pak',
                    user: data
               })
          })
     })
}

export default new userController()
