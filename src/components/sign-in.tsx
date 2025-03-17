import { HandleSignIn } from "@/libs/authActions";

export default function SignIn() {
  return (
    <form
      action={HandleSignIn}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
