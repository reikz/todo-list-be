import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  id: String,
  name: String,
  userId: String
});
