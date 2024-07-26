import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, mongo } from 'mongoose';

export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  name?: string;

  @Prop({ required: false })
  phone?: string;

  @Prop({ required: false })
  firebaseId: string;

  @Prop({ reqired: true, type: mongo.Timestamp })
  createdAt: Date;

  @Prop({ type: mongo.Timestamp })
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
