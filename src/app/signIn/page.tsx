import Link from "next/link";

export default function SignIn() {
    return (
        <div>
            Vous n'avez pas de compte ?
            <Link href={"/signUp"} className="w-10 bg-blue-500 p-3" >
                Creer un compte
            </Link>
        </div>
    );
}
