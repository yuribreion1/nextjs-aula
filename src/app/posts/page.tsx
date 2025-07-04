import Link from "next/link";

export interface PostProps {
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

    async function handleFetchPostById(formData: FormData) {
        'use server';

        const userId = formData.get('userId')
        const response = await fetch(`${baseUrl}/posts/user/${userId}`, {})
        const data: ResponseProps = await response.json()
    }

    return (
        <div>
            <h1 className={"text-center mt-5 mb-2 font-bold text-3xl"}>Todos os posts</h1>

            <form
                className={"flex gap-2 my-4"}
                action={handleFetchPostById}
            >
                <input
                    type={"text"}
                    placeholder={"ID do usuário"}
                    className={"border border-gray-200 p-2 rounded-md"}
                    name={"userId"}
                />
                <button
                    type={"submit"}
                    className={"bg-blue-500 text-white p-2 rounded-md"}
                >
                    Buscar
                </button>
            </form>

            <div className={"flex flex-col gap-4"}>
                {data.posts.map(post => (
                    <div key={post.id} className={"bg-gray-100 p-4 mx-2 rounded-md"}>
                        <h2 className={"font-bold"}>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link href={`/posts/${post.id}`}>
                            Acessar detalhes
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}