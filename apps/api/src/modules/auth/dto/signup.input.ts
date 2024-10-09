import { ArgsType, Field } from "@nestjs/graphql";
import { Transform } from "class-transformer";
import { IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsGoodPassword } from "src/common/custom-validation/password";
import { IsGoodUsername } from "src/common/custom-validation/username";

@ArgsType()
export class SignupDto {
    @Field()
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    name: string;

    @Field()
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    email: string;

    @Field()
    @IsNotEmpty()
    @IsDateString()
    @Transform(({ value }) => value.trim())
    dob: string;

    @Field()
    @IsGoodUsername()
    username: string;

    @Field()
    @IsGoodPassword()
    password: string;
}