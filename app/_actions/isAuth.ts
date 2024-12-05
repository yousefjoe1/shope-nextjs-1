'use server'
import { cookies } from 'next/headers';


export async function isAuth() {
  let token = (await cookies()).get('tk-user')?.value

  if(!token){
    return {code: 404, msg: 'Token required', stauts: "error"}
  }

}