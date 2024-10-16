import { ArgsType, Field } from "@nestjs/graphql";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsGoodPassword } from "../../../common/custom-validation/password";

@ArgsType()
export class LoginDto {
    @Field()
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    public email: string;

    @Field()
    @IsGoodPassword()
    public password: string;
}
