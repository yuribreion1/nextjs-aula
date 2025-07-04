import {PostProps} from "../../page";

export async function PostInfo({ id }: { id: string }) {

    const baseUrl = process.env.DUMMY_BASE_URL

    // Example para testar caching
    await new Promise(resolve => setTimeout(resolve, 4000))

    const response = await fetch(`${baseUrl}/posts/${ id }`)
    const data: PostProps = await response.json()

    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    )
}