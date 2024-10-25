import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation(() => User)
    createUser(@Args("createUserInput") createUserInput: CreateUserInput) {
        return this.userService.create(createUserInput);
    }

    @Query(() => [User], { name: "user" })
    findAll() {
        return this.userService.findAll();
    }

    @Query(() => User, { name: "user" })
    findOne(@Args("id", { type: () => Int }) id: number) {
        return this.userService.findOne(id);
    }

    //   @Mutation(() => User)
    //   updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    //     return this.userService.update(updateUserInput.id, updateUserInput);
    //   }

    //   @Mutation(() => User)
    //   removeUser(@Args('id', { type: () => Int }) id: number) {
    //     return this.userService.remove(id);
    //   }
}
