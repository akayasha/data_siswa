import crypto from 'crypto';

const generateSecretKey = (): String =>{
    return crypto.randomBytes(32).toString('hex')
}

const config = {
    secret: generateSecretKey()
}

export default config;