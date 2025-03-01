"use client"

import { revalidateISRPage } from "@/app/actions"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

function RevalidateISR() {
    const router = useRouter()
    const [isRevalidating, setIsRevalidate] = useState<boolean>(false)

    const handleClientRouter = (url:string) => {
        router.push(`/rendering/${url}`)
    }

    const handleRevalidateAndNavigate = async () => {
        setIsRevalidate(true)
        try {
            await revalidateISRPage()
            router.push("/rendering/ssr/static/isr")
        } finally {
            setIsRevalidate(false)
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-semibold">RevalidateISR</h1>
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
                    isrキャッシュあり
                </button>
                <button
                    onClick={handleRevalidateAndNavigate}
                    disabled={isRevalidating}
                    className="border-2 bg-green-300 p-2 cursor-pointer hover:bg-green-100 disabled:opacity-50"
                >
                    {isRevalidating ? "再検証中..." : "isr (サーバーアクション)"}
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
        </div>
    )
}

export default RevalidateISR