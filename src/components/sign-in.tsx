import { HandleSignIn } from "@/libs/authActions";

export default function SignIn() {
  return (
    <form
      action={HandleSignIn}
      className="text-lg font-bold text-primary flex font-sans mt-2 mx-auto w-fit rounded-lg bg-gradient-to-r from-primary to-button to-35% hover:scale-95 active:scale-95 transition-transform"
    >
      <button type="submit" className="px-3 py-2 grow flex items-center gap-2">
        <img width={30} height={30} src="/google.svg"></img>Sign in with Google
      </button>
    </form>
  );
}
