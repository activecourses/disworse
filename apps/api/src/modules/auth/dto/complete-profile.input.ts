import { ArgsType, Field } from "@nestjs/graphql";
import { Transform } from "class-transformer";
import { IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsGoodPassword } from "../../../common/custom-validation/password";
import { IsGoodUsername } from "../../../common/custom-validation/username";

@ArgsType()
export class CompleteProfileDto {
    @Field()
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    public name: string;

    @Field()
    @IsNotEmpty()
    @IsDateString()
    @Transform(({ value }) => value.trim())
    public dob: string;

    @Field()
    @IsGoodUsername()
    public username: string;

    @Field()
    @IsGoodPassword()
    public password: string;

    @Field()
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    public email: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    public github_id: string;
}
