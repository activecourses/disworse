import { plainToInstance } from "class-transformer";
import {
    IsBoolean,
    IsEnum,
    IsNumber,
    IsString,
    Max,
    Min,
    validateSync,
} from "class-validator";

enum Environment {
    Development = "development",
    Production = "production",
    Test = "test",
}

export class EnvironmentVariables {
    @IsEnum(Environment)
    NODE_ENV: Environment;

    @IsNumber()
    @Min(0)
    @Max(65535)
    PORT: number;

    @IsString()
    DATABASE_URL: string;

    @IsString()
    POSTGRES_DB: string;

    @IsString()
    POSTGRES_USER: string;

    @IsString()
    POSTGRES_PASSWORD: string;

    @IsString()
    REDIS_URL: string;

    @IsString()
    SESSION_SECRET: string;

    @IsNumber()
    COOKIE_MAX_AGE: number;
}

export function validate(config: Record<string, unknown>) {
    const validatedConfig = plainToInstance(EnvironmentVariables, config, {
        enableImplicitConversion: true,
    });
    const errors = validateSync(validatedConfig, {
        skipMissingProperties: false,
    });

    if (errors.length > 0) {
        throw new Error(errors.toString());
    }
    return validatedConfig;
}
