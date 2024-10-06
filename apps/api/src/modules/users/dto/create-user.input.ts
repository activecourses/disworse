import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
    @Field(() => Int, { description: "Example field (placeholder)" })
    exampleField: number;
}
