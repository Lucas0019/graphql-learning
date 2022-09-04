import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
class User {
  push(user: { id: string; name: string; }) {
    throw new Error("Method not implemented.");
  }
  @Field(_type => ID)
  id: string;

  @Field(_type => String)
  name: string;  
}

export { User };