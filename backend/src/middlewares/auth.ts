import { ENV_VARS } from "@/config/envVars";
import User from "@/models/user.mode";
import { auth } from "express-oauth2-jwt-bearer";
import { NextFunction, Request, Response } from "express-serve-static-core";
import jwt from "jsonwebtoken";


declare global {
    namespace Express {
        interface Request {
            auth0Id?: string;
            userId?: string;
        }
    }
}

export const jwtCheck = auth({
    audience: ENV_VARS.AUTH0_AUDIENCE,
    issuerBaseURL: ENV_VARS.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
});



export const jwtParse = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer ')) {
        res.status(401).json({
            error: 'Unauthorized'
        });
        return;
    }
    const token = authorization.split(' ')[1];

    try {
        const decoded = jwt.decode(token) as jwt.JwtPayload;
        const auth0Id = decoded.sub;

        const user = await User.findOne({ auth0Id });
        if (!user) {
            res.status(401).json({
                error: 'Unauthorized'
            });
            return;
        }

        req.auth0Id = auth0Id as string;
        req.userId = user._id.toString();

        next();

    } catch (err) {
        console.error(err);
        res.status(401).json({ error: 'Unauthorized' });
    }
};

