'use server'
import axios from 'axios'; // Import axios
import { cookies } from 'next/headers';


let url = process.env.NEXT_PUBLIC_DB

export async function getData(route:string) {
  let token = (await cookies()).get('tk-user')?.value

  try {
    const response = await axios.get(`${url}/api/${route}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }); // Replace with your actual endpoint
    // Handle successful response
    return response.data; // Return the fetched data

  } catch (err:any) {
    console.log("🚀 ~ getCart ~ err:", err)
    // console.error('Error fetching data:', err.response?.status);
    return {err}
  }
}