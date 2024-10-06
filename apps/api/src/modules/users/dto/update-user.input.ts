import { Field, InputType, Int, PartialType } from "@nestjs/graphql";
import { CreateUserInput } from "./create-user.input";

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
    @Field(() => Int)
    id: number;
}
