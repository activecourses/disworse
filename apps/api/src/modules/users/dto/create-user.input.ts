import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
    @Field()
    username: string;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    dob: string; //TODO: change type.

    @Field({ nullable: true })
    bio?: string;

    @Field({ nullable: true })
    profile_image_url?: string;

    @Field({ nullable: true })
    cover_image_url?: string;

    @Field({ nullable: true })
    google_id?: string;

    @Field({ nullable: true })
    github_id?: string;
}
