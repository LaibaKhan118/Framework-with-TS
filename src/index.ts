import { User } from "./models/User";

const user = new User({ name: 'NEW Record', age: 9 });


user.save();