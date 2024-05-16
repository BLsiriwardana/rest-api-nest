import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsEmpty } from 'class-validator';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  name: string;
  
  @IsEmpty()
  @IsEmail()
  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
