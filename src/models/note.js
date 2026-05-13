import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: false,
      default: '',
      trim: true,
    },
    tag: {
      type: String,
      required: false,
      default: 'Todo',
      enum: TAGS,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

NoteSchema.index({
  tag: 1
})

export const Note = model('Note', NoteSchema);
