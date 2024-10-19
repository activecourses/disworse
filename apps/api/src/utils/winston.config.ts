import * as winston from "winston";
import "winston-daily-rotate-file";
import { utilities as nestWinstonModuleUtilities } from "nest-winston";

const dbRotateTransport = new winston.transports.DailyRotateFile({
    filename: "logs/db-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
    format: winston.format.combine(
        winston.format((info) => {
            if (
                info.context === "Drizzle:Service" ||
                info.context === "Drizzle:TransactionInterceptor"
            )
                return info;
            else return false;
        })(),
        winston.format.json(),
    ),
});

const httpRotateTransport = new winston.transports.DailyRotateFile({
    filename: "logs/graphql-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
    format: winston.format.combine(
        winston.format((info) => {
            if (info.context === "GraphQL") return info;
            else return false;
        })(),
        winston.format.json(),
    ),
});

const errorRotateTransport = new winston.transports.DailyRotateFile({
    filename: "logs/error-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
    level: "error",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
    ),
});

export const winstonConfig = {
    level: process.env.LOG_LEVEL || "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
    ),
    handleExceptions: true,
    handleRejections: true,
    exitOnError: false,
    transports: [
        errorRotateTransport,
        dbRotateTransport,
        httpRotateTransport,
        new winston.transports.Console({
            format: winston.format.combine(
                nestWinstonModuleUtilities.format.nestLike("NestWinston", {
                    colors: true,
                    prettyPrint: true,
                }),
            ),
        }),
    ],
};
