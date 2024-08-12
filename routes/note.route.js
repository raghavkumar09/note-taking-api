const { Router } = require('express');
const { createNote, fetchNoteById, updateNote, queryNotesByTitle } = require('../controllers/note.controller');
const router = Router();

router.post('/', createNote);
router.get('/:id', fetchNoteById);
router.get('/', queryNotesByTitle);
router.put('/:id', updateNote);

module.exports = router;
