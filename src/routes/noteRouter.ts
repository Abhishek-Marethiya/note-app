import express from 'express';
import {createNote,getAllNotes,getSingleNote, updateNote,deleteNote} from '../controllers/noteControllers'; 

const router = express.Router();

router.post('/', createNote);
router.get('/', getAllNotes);
router.get('/:id', getSingleNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
