'use server'
import { cookies } from 'next/headers';


export async function isAuth() {
  let token = (await cookies()).get('user-tk')?.value

  if(!token){
    return {code: 404, msg: 'Token required', stauts: "error"}
  }

}