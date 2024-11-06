import Link from "next/link";

export default function signUp() {

    return (<div>
        Vous avez déjà un compte ?
        <Link href={"/signIn"} className="w-10 bg-blue-500 p-3" >
            Sign in
        </Link>
    </div>)


}