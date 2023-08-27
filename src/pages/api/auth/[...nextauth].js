import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
import GithubProvider from "next-auth/providers/github";


export const authOptions = {
    providers : [
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
        }),
        
        GithubProvider({
            clientId: process.env.Github_client,
            clientSecret: process.env.Github_Secret,
        }),
    ],
    secret : 'jwt'
};

export default NextAuth(authOptions);

