import {connectToDB} from '@/utils/database'
import Form from '@/models/form';

export const POST = async(req)=>{
    const data = await req.json();
    // console.log("hello")
    try {
        await connectToDB();
        const newData = new Form(data)
        await newData.save()
        
        return new Respose(JSON.stringify(newData),{status:201})
    } catch (error) {
        return new Response('Failed to create new form',{status:500})
    }
}