import * as argon2 from "argon2";

export async function hash(password: string) {
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
}

export async function verify(original: string, hash: string) {
    const isMatch = await argon2.verify(hash, original);
    return isMatch;
}
