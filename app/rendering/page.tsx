"use client"

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
                {/* <button
                    onClick={() => handleSeverRouter("ssr/dynamic")}
                    className="border-2 bg-slate-300 p-2 cursor-pointer hover:bg-slate-100"
                >
                    dynamic
                </button> */}
            </div>
        </div>
    )
}

export default RenderingPage