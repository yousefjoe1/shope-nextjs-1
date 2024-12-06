'use server'
import axios from 'axios'; // Import axios
import { cookies } from 'next/headers';
import { Inputs } from '../_types/User';


let url = process.env.NEXT_PUBLIC_DB

export async function login(data:Inputs) {
console.log("🚀 ~ ~ data:", data)

  try {
    const response = await axios.post(`${url}/api/users/login`,data); // Replace with your actual endpoint
    // Handle successful response
    (await cookies()).set('user-tk',response.data.token)
    console.log("🚀 ~ login ~ response:", response.data)
    return response.data; // Return the fetched data

  } catch (err:any) {
    console.log("🚀 ~ getCart ~ err:", err)
    // console.error('Error fetching data:', err.response?.status);
    return {err}
  }
}