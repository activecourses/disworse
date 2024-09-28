import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsGoodPassword } from "src/common/custom-validation/password";

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    email: string;

    @IsGoodPassword()
    password: string;
}
