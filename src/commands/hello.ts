import { define } from "gunshi";

export default define({
  name: "hello",
  description: "Say hello",
  args: {
    name: {
      type: "string",
      short: "n",
      description: "Name to greet",
      default: "World",
    },
  },
  run: (ctx) => {
    console.log(`Hello, ${ctx.values.name}!`);
  },
});
