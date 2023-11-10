import { Arg, Query, Resolver } from "type-graphql";
import { User } from "../entity/User";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users() {
    const result = await User.find();
    return result;
  }

  @Query(() => User)
  async user(@Arg("id") id: number) {
    const result = await User.findBy({
      id
    });
    return result;
  }
}
