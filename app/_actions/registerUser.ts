'use server'
import axios from 'axios'; // Import axios
import { cookies } from 'next/headers';
import { Inputs } from '../_types/User';


let url = process.env.NEXT_PUBLIC_DB

export async function registerUser(data:Inputs) {

  try {
    const response = await axios.post(`${url}/api/users/register`,data); // Replace with your actual endpoint

    if(response.data.code == 400){
      return response.data
    }else {
      if(response.data.data.role == 'user'){
        (await cookies()).set('user-tk',response.data.token);
        (await cookies()).set('user-info',response.data.data);
      }else {
        (await cookies()).set('vendor-tk',response.data.token);
        (await cookies()).set('vendor-info',response.data.data);
      }
      return response.data; // Return the fetched data

    }

  } catch (err:any) {
    console.log("🚀 ~ registerUser ~ err:", err)
    // console.error('Error fetching data:', err.response?.status);
    return {err}
  }
}