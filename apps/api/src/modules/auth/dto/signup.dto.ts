import { Transform } from "class-transformer";
import { IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsGoodPassword } from "src/common/custom-validation/password";
import { IsGoodUsername } from "src/common/custom-validation/username";

export class SignupDto {
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    email: string;

    @IsNotEmpty()
    @IsDateString()
    @Transform(({ value }) => value.trim())
    dob: string;

    @IsGoodUsername()
    username: string;

    @IsGoodPassword()
    password: string;
}
