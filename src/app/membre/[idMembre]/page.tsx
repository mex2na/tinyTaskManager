
export default async function membreUnique({ params }) {

    const idPoete = await params;

    return <>
        <div className="text-xl">Voir information ou modifier information d'un membre {params.idMembre}</div>


    </>


}