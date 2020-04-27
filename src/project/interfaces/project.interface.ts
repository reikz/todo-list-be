import { Document } from 'mongoose';

export interface Project extends Document {
  readonly id: string;
  readonly name: string;
  readonly userId: string;
}
