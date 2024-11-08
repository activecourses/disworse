import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field(() => Int)
    public id: number;

    @Field()
    public username: string;

    @Field()
    public name: string;

    @Field()
    public email: string;

    @Field()
    public dob: string;

    @Field(() => String, { nullable: true })
    public bio?: string | null;

    @Field(() => String, { nullable: true })
    public profile_image?: string;

    @Field(() => String, { nullable: true })
    public cover_image?: string;

    @Field(() => String, { nullable: true })
    public google_id: string | null;

    @Field(() => String, { nullable: true })
    public github_id: string | null;

    @Field(() => String, { nullable: true })
    public deleted_at?: string | null;

    @Field(() => String, { nullable: true })
    public created_at?: string | null;

    @Field(() => String, { nullable: true })
    public updated_at?: string | null;
}
