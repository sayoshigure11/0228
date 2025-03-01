"use client"

import { myAction } from "./actions";

export default function Home() {
  return (
    <div >
      <form action={myAction}>
        <input name="id" type="number" placeholder="idを入力してください"/>
        <input name="text" type="text" placeholder="テキストを入力してください" />
        
        <button type="submit">
          送信
        </button>
      </form>
    </div>
  );
}