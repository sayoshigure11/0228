"use server"

import { redis } from "./rendering/components/redis"




export async function myAction(formData: FormData) {
    const id = formData.get("id") as string
    const text = formData.get("text")

    const datalist = {
        id,
        text
    }
    console.log("datalist", datalist)

    await redis.set("datalist", datalist)
}





import { revalidatePath } from 'next/cache';

export async function revalidateISRPage() {
  revalidatePath('/rendering/ssr/static/isr');
  return { success: true, timestamp: Date.now() };
}