import { Exclude } from "class-transformer/types/decorators";
import { randomUUID } from "crypto";

export class User {
  readonly id: string;
  name: string;
  username: string;
  email: string;

  @Exclude()
  password: string;

  constructor(){
    this.id = randomUUID();
  }
}
