import { getServerSession } from "next-auth";
import { options } from '@/app/options'

export async function getSession(){
    return await getServerSession(options);
}

export async function getCurrentUser(){
    try{
        const session = await getSession();

        console.log(session);

        if(!session) return null;

        return session.user;
    }
    catch(error){
        return null;
    }
}