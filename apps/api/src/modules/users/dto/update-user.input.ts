import { Field, InputType, Int, PartialType } from "@nestjs/graphql";
import { CreateUserInput } from "./create-user.input";

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
    @Field()
    name?: string;

    @Field({ nullable: true })
    profile_image_url?: string;

    @Field({ nullable: true })
    bio?: string;

    @Field({ nullable: true })
    cover_image_url?: string;
}
