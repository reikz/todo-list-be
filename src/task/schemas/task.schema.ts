import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  id: String,
  name: String,
  projectId: String
});
