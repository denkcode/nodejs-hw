import createHttpError from "http-errors";
import { Notes } from "../models/note.js";


export const getAllNotes = async (req, res) => {
  const students = await Notes.find();
  res.status(200).json(students);
};

export const getNotesById = async (req, res) => {
  const { notesId } = req.params;
  const notes = await Notes.findById(notesId);

  if (!notes) {
    throw createHttpError(404, "Note not found");
  }

  res.status(200).json(notes);
};

export const createNote = async (req, res) => {
  const notes = await Notes.create(req.body);
  res.status(201).json(notes)
}

export const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  const notes = await Notes.findOneAndDelete({ _id: noteId });

  if (!notes) {
    throw createHttpError(404, "Note not found");
  }

  res.status(200).json(notes)
}
