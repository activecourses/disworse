import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field(() => Int)
    id: number;

    @Field()
    username: string;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    dob: string;

    @Field({ nullable: true })
    bio?: string;

    @Field()
    createdAt: string;

    @Field()
    updatedAt: string;

    @Field({ nullable: true })
    profileImage?: string;

    @Field({ nullable: true })
    coverImage?: string;

    @Field({ nullable: true })
    google_id: string;

    @Field({ nullable: true })
    github_id: string;

    @Field({ nullable: true })
    deleted_at: string;
}
