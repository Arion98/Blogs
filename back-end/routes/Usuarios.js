const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const Usuario = require('../model/Usuario');


sequelize.sync()

//GET Retorna todas os usuários com paginação e ordenação decrecente.
router.get('/Usuarios', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    sequelize.query(`SELECT * FROM Usuarios ORDER BY updatedAt DESC LIMIT ? OFFSET ?`,
        { replacements: [parseInt(limit), (page - 1) * parseInt(limit)] }
    )
    .then(([results, metadata]) => {
        res.json(results);
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});

//GET Consulta uma usuário pelo ID.
router.get('/Usuarios/:id', async (req, res) => {
    sequelize.query(`SELECT * FROM Usuarios WHERE id = ?`, { replacements: [req.params.id] })
    .then(([results, metadata]) => {
        if (results.length === 0) {
            res.status(404).json({
                success: false,
                message: "usuário não encontrado",
            });
        } else {
            res.json({
                success: true,
                task: results[0],
            });
        }
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});

//POST Cria um usuário no banco de dados.
router.post('/Usuarios', async (req, res) => {
    sequelize.query(`INSERT INTO Usuarios (nome, email, createdAt, updatedAt) VALUES (?, ?, ?, ?)`,
        { replacements: [req.body.nome,req.body.email, new Date(), new Date()] }
    )
    .then(([results, metadata]) => {
        res.status(201).json({
            success: true,
            message: "usuário criada com sucesso",
        });
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});

//PUT Atualiza uma usuário pelo ID.
router.put('/Usuarios/:id', async (req, res) => {
    sequelize.query(`UPDATE Usuarios SET nome = ?, email = ? WHERE id = ?`,
        { replacements: [req.body.nome,req.body.email, req.params.id] }
    )
    .then(([results, metadata]) => {
        if (metadata.affectedRows === 0) {
            res.status(404).json({
                success: false,
                message: "usuário não encontrado",
            });
        } else {
            res.json({
                success: true,
                message: "usuário atualizado com sucesso",
            });
        }
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});

//DELETE Deleta um usuário pelo ID.
router.delete('/Usuarios/:id', async (req, res) => {
    sequelize.query(`DELETE FROM Usuarios WHERE id = ?`, { replacements: [req.params.id] })
    .then(([results, metadata]) => {
        if (metadata.affectedRows === 0) {
            res.status(404).json({
                success: false,
                message: "usuário não encontrado",
            });
        } else {
            res.json({
                success: true,
                message: "usuário deletado com sucesso",
            });
        }
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});
module.exports = router;