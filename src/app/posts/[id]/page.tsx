import {PostProps} from "@/app/posts/page";

export default async function DetailPost({params}: { params: Promise<{ id: string }>} ) {

    const { id } = await params;
    const baseUrl = process.env.DUMMY_BASE_URL

    const response = await fetch(`${baseUrl}/posts/${ id }`)
    const data: PostProps = await response.json()

    return (
        <div>
            <h1>Detalhes do post { id }</h1>

            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    )
}