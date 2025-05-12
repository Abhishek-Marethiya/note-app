import { Request, Response } from 'express';
import Note from '../db/Note';

export const getSingleNote = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const note = await Note.findById(id);
    if (!note) { res.status(404).json({ message: 'Note not found' });
    return;}
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAllNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Note.find();
    if (!notes) {
      res.status(404).json({ message: 'Note not found' });
      return;}
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createNote = async (req: Request, res: Response) => {
  try {

    const {  title, content } = req.body;
    
    const existingNote = await Note.findOne({title});
    if (existingNote) {
      res.status(400).json({ message: 'Note with this title already exists' });  
      return;
    }

    const note = new Note({title, content });
    await note.save();
    console.log(note);
    
    res.status(201).json(note);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    if (!note){
res.status(404).json({ message: 'Note not found' });
return;
    } 
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) { res.status(404).json({ message: 'Note not found' });
    return;
  }
    res.status(200).json({ message: 'Note deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
