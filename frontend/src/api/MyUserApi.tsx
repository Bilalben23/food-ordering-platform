import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


type CreateUserRequest = {
    auth0Id: string;
    email: string
}


const createMyUser = async (user: CreateUserRequest) => {

    const { getAccessTokenSilently } = useAuth0();

    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/v1/my/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        throw new Error(`Error creating user: ${response.statusText}`);
    }

    return response.json();
}


export const useCreateMyUser = () => {

    return useMutation({
        mutationKey: ['createMyUser'],
        mutationFn: createMyUser
    });
}   
