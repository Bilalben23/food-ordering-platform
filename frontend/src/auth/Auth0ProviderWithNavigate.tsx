import { Auth0Provider, type User, type AppState } from '@auth0/auth0-react';
import { type FC, type ReactNode } from 'react';

type Auth0ProviderWithNavigateProps = {
    children: ReactNode
}

const Auth0ProviderWithNavigate: FC<Auth0ProviderWithNavigateProps> = ({ children }) => {

    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;




    if (!domain || !clientId || !redirectUri) {
        throw new Error('Unable to initialize auth.');
    }

    const onRedirectCallback = (appState?: AppState, user?: User) => {
        console.log("USER:", user);


    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithNavigate