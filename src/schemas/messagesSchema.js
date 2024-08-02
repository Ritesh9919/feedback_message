import {z} from 'zod';



export const messageSchema = z.object({
    content:z.string().min(10, {message:"Message must be atleast 10 character"}).max(300, {message:"Content no longer than 300 character"})
})