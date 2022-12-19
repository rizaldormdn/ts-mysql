"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
class userController {
    constructor() {
        this.createUser = ((req, res) => {
            database_1.db.query('INSERT INTO user SET ?', [req.body], (err, data) => {
                if (err) {
                    return res.status(400).json({
                        message: 'not OK',
                        error: err.message
                    });
                }
                return res.status(200).json({
                    message: 'datanya masuk pak',
                    user: data
                });
            });
        });
        this.getUser = ((req, res) => {
            database_1.db.query('SELECT * FROM user', (err, data) => {
                if (err) {
                    return res.status(400).json({
                        message: 'not OK',
                        error: err.message
                    });
                }
                return res.status(200).json({
                    message: 'datanya ada pak',
                    user: data
                });
            });
        });
        this.getUSerById = ((req, res) => {
            database_1.db.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, data) => {
                if (err) {
                    return res.status(400).json({
                        message: 'not OK',
                        error: err.message
                    });
                }
                return res.status(200).json({
                    message: 'datanya ada pak',
                    user: data,
                });
            });
        });
        this.updateUSer = ((req, res) => {
            database_1.db.query('UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?', [req.body.name, req.body.email, req.body.password, req.params.id], (err, data) => {
                if (err) {
                    return res.status(400).json({
                        message: 'not OK',
                        error: err.message
                    });
                }
                return res.status(200).json({
                    message: 'berhasil diubah nih pak',
                    user: data
                });
            });
        });
        this.deleteUser = ((req, res) => {
            database_1.db.query('DELETE FROM user WHERE id = ?', [req.params.id], (err, data) => {
                if (err) {
                    return res.status(400).json({
                        message: 'not OK',
                        error: err.message
                    });
                }
                return res.status(200).json({
                    message: 'berhasil dihapus ya pak',
                    user: data
                });
            });
        });
    }
}
exports.default = new userController();
