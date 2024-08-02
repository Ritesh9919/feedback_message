import {z} from 'zod'


export const usernameValidation = z
.string()
.min(2, 'username most be 2 characters')
.max(20, 'username should not be more than 20 characters')
.regex(/^[a-zA-Z0-9_]{3,16}$/, "username most not contain special character")



export const signupSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6, {message:"Password most be atleast 6 character"})
})