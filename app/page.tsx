"use client"

import { useRouter } from "next/navigation";
import { myAction } from "./actions";

export default function Home() {
  const router = useRouter()
    const handleClientRouter = (url:string) => {
        router.push(`/rendering/${url}`)
    }

  return (
    <div >
      <form action={myAction}>
        <input name="id" type="number" placeholder="idを入力してください"/>
        <input name="text" type="text" placeholder="テキストを入力してください" />
        
        <button type="submit">
          送信
        </button>
      </form>
      <div>
        <button
            onClick={() => handleClientRouter("")}
            className="border-2 bg-slate-300 p-2 cursor-pointer hover:bg-slate-100"
        >
            renderingページに移動
        </button>

      </div>
    </div>
  );
}