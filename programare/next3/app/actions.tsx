'use server'
 
import { permanentRedirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
 
export async function createPost(id: string) {
  
 
  // revalidatePath('/posts') // Update cached posts
  permanentRedirect("/dummy") // Navigate to the new post page
}