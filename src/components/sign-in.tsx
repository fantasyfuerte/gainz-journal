import { HandleSignIn } from "@/libs/authActions";

export default function SignIn() {

  return (
    <form
      action={HandleSignIn}
      className=" text-lg font-bold text-primary flex mx-10 font-sans mt-2"
    >
      <button type="submit" className="rounded-lg bg-button px-3 py-2 grow">
        Sign in with Google
      </button>
    </form>
  );
}
