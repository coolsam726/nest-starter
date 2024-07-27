import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, mongo } from 'mongoose';

export type UserDocument = User & Document;
@Schema({ timestamps: true, autoSearchIndex: true })
export class User extends Document {
  @Prop({ auto: true })
  id: string;
  @Prop({ auto: true })
  _id: mongoose.Types.ObjectId;
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  name?: string;

  @Prop({ required: false })
  phone?: string;

  @Prop({ required: false })
  firebaseId: string;

  @Prop({ reqired: true, type: mongo.Timestamp, auto: true })
  readonly createdAt: Date;

  @Prop({ type: mongo.Timestamp, auto: true })
  readonly updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
