import { define } from "gunshi";

export default define({
  name: "my-app",
  description: "My CLI application",
  run: () => {
    console.log('Run "my-app --help" for available commands');
  },
});
