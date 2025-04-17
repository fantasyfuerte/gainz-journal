import { HandleSignIn } from "@/libs/authActions";

export default function SignIn() {
  return (
    <form
      action={HandleSignIn}
      className="text-lg font-bold text-primary flex font-sans mt-2 mx-auto w-fit rounded-lg bg-button "
    >
      <button type="submit" className="px-3 py-2 grow">
        Sign in with Google
      </button>
    </form>
  );
}
