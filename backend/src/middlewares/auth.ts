import { ENV_VARS } from "@/config/envVars";
import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
    audience: ENV_VARS.AUTH0_AUDIENCE,
    issuerBaseURL: ENV_VARS.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
});



