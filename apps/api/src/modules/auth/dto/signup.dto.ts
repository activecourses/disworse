import { IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsGoodPassword } from "src/common/custom-validation/password";
import { IsGoodUsername } from "src/common/custom-validation/username";

export class SignupDto {
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsDateString()
    dob: string;

    @IsGoodUsername()
    username: string;

    @IsGoodPassword()
    password: string;
}
