"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type User = {
    id: string,
    text: string
}

type Users = {
    dataList: {id: string, text: string}
}

function RenderingClientPage() {
    const [prismaData, setPrismaData] = useState<User[]>([])
    // const [isLoading, setIsLoading] = useState<boolean>(true)
    const router = useRouter()

    const handleRouter = () => {
        router.push("/rendering")
    }

    useEffect(() => {
        async function GetData() {
            const getData = await fetch("/api/rendering")
            console.log("getData",getData)
            const users: Users = await getData.json()
            console.log("users.dataList",users.dataList)
            
            setPrismaData([users.dataList])
        }

        GetData()
        // setIsLoading(false)
    },[])

    return (
        <div>
            <h1 className="text-3xl font-semibold">RenderingClientPage</h1>
            <div className="mt-10 flex flex-col gap-y-2">
                {/* {isLoading && (
                    <div className="text-xl font-semibold">Loading...</div>
                )} */}
                {prismaData.map((data, i) => (
                    <div key={i} className="border p-2 flex flex-col gap-y-1">
                        <div>id:{data.id}</div>
                        {/* <div>email:{data.email}</div> */}
                        <div>text:{data.text}</div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <button
                    className="border p-2 bg-slate-300 cursor-pointer hover:bg-slate-100"
                    onClick={handleRouter}
                >
                    Renderingに戻る
                </button>
                <div
                    className="border p-2 bg-slate-300 cursor-pointer hover:bg-slate-100"
                >
                    <Link href={"/rendering/revalidateIsr"}>Revalidateに戻る</Link>
                </div>

            </div>
        </div>
    )
}

export default RenderingClientPage