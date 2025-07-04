import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Home - Aula Next.JS do zero",
    description: "Aprendendo Next.JS",
    openGraph: {
        title: "Home - Aula Next.JS do zero",
        description: "Aprendendo Next.JS",
        images: ['https://sujeitoprogramador.com/steve.png']
    },
    robots: "index, follow"
}

export default function Home() {
    return (
        <div>
            <h1>Pagina HOME</h1>
        </div>
    )
}