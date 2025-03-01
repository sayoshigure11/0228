"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

function RenderingPage() {
    const router = useRouter()

    const handleClientRouter = (url:string) => {
        router.push(`/rendering/${url}`)
    }
    // const handleSeverRouter = (url:string) => {
    //     router.push(`/rendering/${url}`)
    // }

    return (
        <div>
            <h1 className="text-3xl font-semibold">RenderingPage</h1>
            <div className="mt-10 flex items-center gap-x-2">
                <button
                    onClick={() => handleClientRouter("csr")}
                    className="border-2 bg-slate-300 p-2 cursor-pointer hover:bg-slate-100"
                >
                    csr
                </button>
                <button
                    onClick={() => handleClientRouter("ssr/static/ssg")}
                    className="border-2 bg-slate-300 p-2 cursor-pointer hover:bg-slate-100"
                >
                    ssg
                </button>
                <button
                    onClick={() => handleClientRouter("ssr/static/isr")}
                    className="border-2 bg-slate-300 p-2 cursor-pointer hover:bg-slate-100"
                >
                    isr
                </button>
                <button
                    onClick={() => handleClientRouter("ssr/dynamic")}
                    className="border-2 bg-slate-300 p-2 cursor-pointer hover:bg-slate-100"
                >
                    dynamic
                </button>
            </div>
            <div>
                <Link href={"/"}>ホームに戻る</Link>
            </div>
            <div
                className="border p-2 bg-slate-300 cursor-pointer hover:bg-slate-100"
            >
                <Link href={"/rendering/revalidateIsr"}>Revalidateに戻る</Link>
            </div>

        </div>
    )
}

export default RenderingPage