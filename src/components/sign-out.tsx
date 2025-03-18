import { HandleSignOut } from "@/libs/authActions"

function SignOut() {
  return (
    <h5 onClick={HandleSignOut} className="text-secondary absolute bottom-0 py-2 text-center font-medium text-lg mx-auto hover:opacity-65">Sign Out</h5>
  )
}

export default SignOut