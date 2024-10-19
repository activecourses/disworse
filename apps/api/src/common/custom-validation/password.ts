import {
    ValidationArguments,
    ValidationOptions,
    registerDecorator,
} from "class-validator";

export function IsGoodPassword(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "is good password",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: string): boolean {
                    const regex: RegExp =
                        /^(?=.*[0-9])(?=.*[a-zA-Z])(?!.* ).{8,50}$/;
                    return regex.test(value);
                },
                defaultMessage(_args: ValidationArguments): string {
                    return `passwrd must be between 8 and 50 characters length, at least one number and one character`;
                },
            },
        });
    };
}
