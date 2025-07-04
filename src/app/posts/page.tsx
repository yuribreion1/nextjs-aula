interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[];
}

export default async function Posts() {

    const baseUrl = process.env.DUMMY_BASE_URL

    const response = await fetch(`${baseUrl}/posts`)
    const data: ResponseProps = await response.json()

    async function handleFetchPosts() {
        'use server';
        const response = await fetch(`${baseUrl}/posts`)
        const data: ResponseProps = await response.json()

        console.log(data)
    }

    return (
        <div>
            <h1 className={"text-center mt-5 mb-2 font-bold text-3xl"}>Todos os posts</h1>

            <button onClick={handleFetchPosts} className={"bg-blue-500 text-white px-4 py-2 rounded-md"}>
                Buscar posts
            </button>

            <div className={"flex flex-col gap-4"}>
                {data.posts.map(post => (
                    <div key={post.id} className={"bg-gray-100 p-4 mx-2 rounded-md"}>
                        <h2 className={"font-bold"}>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}