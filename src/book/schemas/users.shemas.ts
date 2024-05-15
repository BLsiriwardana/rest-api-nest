import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})
export class User {
    @Prop()
    name: string;

    @Prop({unique:[true, 'Allready registerd !']})
    email: string;

    @Prop()
    password: string;


}

export const userSchema = SchemaFactory.createForClass(User);