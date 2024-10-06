import { ArgsType, Field } from "@nestjs/graphql";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsGoodPassword } from "src/common/custom-validation/password";

@ArgsType()
export class LoginDto {
    @Field()
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    email: string;

    @Field()
    @IsGoodPassword()
    password: string;
}
