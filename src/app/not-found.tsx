import Link from "next/link";

export default function NotFound() {
    return(
        <div className={"flex flex-col items-center justify-center w-full h-screen"}>
            <h1 className={"text-center font-bold mt-9 text-6-1"}>Página nao encontrada</h1>
            <p>A pagina acessada nao existe</p>
            <Link href={"/"} className={"mt-5"}>Voltar para home</Link>
        </div>
    )
}