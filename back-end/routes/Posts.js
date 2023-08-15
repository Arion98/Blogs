const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const Post = require('../model/Post');


sequelize.sync()

//GET Retorna todas Postagens com paginação e ordenação decrecente. 
router.get('/Posts', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    sequelize.query(`SELECT * FROM Posts ORDER BY updatedAt DESC LIMIT ? OFFSET ?`,
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

//GET Consulta uma postagem pelo ID.
router.get('/Posts/:id', async (req, res) => {
    sequelize.query(`SELECT * FROM Posts WHERE id = ?`, { replacements: [req.params.id] })
    .then(([results, metadata]) => {
        if (results.length === 0) {
            res.status(404).json({
                success: false,
                message: "Post não encontrado",
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

//POST Cria uma Postagem.
router.post('/Posts', async (req, res) => {
    sequelize.query(`INSERT INTO Posts (titulo, conteudo, autor_id, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)`,
        { replacements: [req.body.titulo,req.body.conteudo,req.body.autor_id, new Date(), new Date()] }
    )
    .then(([results, metadata]) => {
        res.status(201).json({
            success: true,
            message: "Post criada com sucesso",
        });
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});

//PUT Atualiza uma Postagem pelo ID.
router.put('/Posts/:id', async (req, res) => {
    sequelize.query(`UPDATE Posts SET description = ? WHERE id = ?`,
        { replacements: [req.body.titulo,req.body.conteudo,req.body.autor_id, req.params.id] }
    )
    .then(([results, metadata]) => {
        if (metadata.affectedRows === 0) {
            res.status(404).json({
                success: false,
                message: "Post não encontrado",
            });
        } else {
            res.json({
                success: true,
                message: "Post atualizado com sucesso",
            });
        }
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});

//DELETE Deleta uma Postagem pelo ID
router.delete('/Posts/:id', async (req, res) => {
    sequelize.query(`DELETE FROM Posts WHERE id = ?`, { replacements: [req.params.id] })
    .then(([results, metadata]) => {
        if (metadata.affectedRows === 0) {
            res.status(404).json({
                success: false,
                message: "Post não encontrada",
            });
        } else {
            res.json({
                success: true,
                message: "Post deletado com sucesso",
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