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

    @Field({ nullable: true })
    public bio?: string;

    @Field()
    public createdAt: string;

    @Field()
    public updatedAt: string;

    @Field({ nullable: true })
    public profileImage?: string;

    @Field({ nullable: true })
    public coverImage?: string;

    @Field({ nullable: true })
    public google_id: string;

    @Field({ nullable: true })
    public github_id: string;

    @Field({ nullable: true })
    public deleted_at: string;
}
