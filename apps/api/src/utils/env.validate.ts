import { plainToInstance } from "class-transformer";
import {
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
    // ENV
    @IsEnum(Environment)
    NODE_ENV: Environment;

    @IsNumber()
    @Min(1024)
    @Max(65535)
    BACKEND_PORT: number;

    // POSTGRES
    @IsString()
    DATABASE_URL: string;

    @IsString()
    POSTGRES_DB: string;

    @IsString()
    POSTGRES_USER: string;

    @IsString()
    POSTGRES_PASSWORD: string;

    @IsNumber()
    @Min(1024)
    @Max(65535)
    POSTGRES_PORT: number;

    @IsString()
    POSTGRES_HOST: string;

    // REDIS
    @IsString()
    REDIS_URL: string;

    @IsNumber()
    @Min(1024)
    @Max(65535)
    REDIS_PORT: number;

    @IsString()
    REDIS_HOST: string;

    // SESSION AND COOKIES
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
