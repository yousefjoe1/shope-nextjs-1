'use server'
import axios from 'axios'; // Import axios
import { cookies } from 'next/headers';



export async function getData(route:string) {
  const url = process.env.NEXT_PUBLIC_DB
  const token = (await cookies()).get('user-tk')?.value

//   if(!token){
//     return {code: 404, msg: 'Token required', stauts: "error"}
//   }

  try {
    const response = await axios.get(`${url}/api/${route}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }); // Replace with your actual endpoint
    // Handle successful response
    return response.data; // Return the fetched data

  } catch (err:unknown) {
    console.log("🚀 ~ getCart ~ err:", err)
    // console.error('Error fetching data:', err.response?.status);
    return {err}
  }
}