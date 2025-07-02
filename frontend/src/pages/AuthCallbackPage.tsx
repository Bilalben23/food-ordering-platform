import { useCreateMyUser } from '@/api/MyUserApi';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthCallbackPage() {
    const { mutateAsync: createMyUser } = useCreateMyUser();
    const { user } = useAuth0();
    const navigate = useNavigate();
    const hasCreateUserRef = useRef(false);

    useEffect(() => {
        if (user?.sub && user.email && !hasCreateUserRef.current) {
            createMyUser({
                auth0Id: user.sub,
                email: user.email
            });
            hasCreateUserRef.current = true;
        }
        navigate("/");

    }, [createMyUser, user, navigate]);

    return <>Loading...</>
}
