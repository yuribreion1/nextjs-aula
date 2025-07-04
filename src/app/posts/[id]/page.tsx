import { PostInfo } from "@/app/posts/[id]/_components/post";
import {Suspense} from "react";

export default async function DetailPost({params}: { params: Promise<{ id: string }>} ) {

    const { id } = await params;

    return (
        <div>
            <h1 className={"text-4-1 font-bold text-center"}>Detalhes do post { id }</h1>
            <Suspense fallback={<h1>Carregando...</h1>}>
                <PostInfo id={id} />
            </Suspense>
        </div>
    )
}