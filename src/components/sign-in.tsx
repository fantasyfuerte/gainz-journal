import { HandleSignIn } from "@/libs/authActions";

export default function SignIn() {
  return (
    <form action={HandleSignIn} className="px-3 py-2 rounded-lg bg-button text-lg font-bold text-primary flex justify-center mx-10 font-sans">
      <button type="submit">Sign In</button>
    </form>
  );
}
