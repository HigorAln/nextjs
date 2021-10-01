import router from "next/router";
import { createContext, useState } from "react";
import firebase from "../lib/firebase";

const AuthContext = createContext();    // usado para fazer a autenticacao em todas as paginas de _app

export function AuthProvider({ children }){ 
    const [user, setUser]= useState(null)
    const [loading,setLoading]=useState(true)

    const signin =()=>{
        try{
            setLoading(true)    //colocando a tela de loading enquanto tenta connectar
            return firebase // firebase sendo chamado pra fazer a conexao...
            .auth() // fazendo a autenticacao do firebase
            .signInWithPopup(new firebase.auth.GithubAuthProvider())    //githubauthprovider esta vindo de firebase por que exportamos tudo do firebase
            .then((response)=>{
                setUser(response.user); // colocando o resultado do usuario na variavel
                router.push('/dashboard');  // direcionando para a pagina dashboard
            });
        } finally{
            setLoading(false);
        }
    }
    const signout = () =>{
        try{
            Router.push('/')
            
            return firebase
            .auth()
            .signOut()
            .then(()=> setUser(false))
        } finally{
            setLoading(false)
        }
    }

    return<AuthContext.Provider value={{
            user,
            loading,
            signin,
            signout
    }}>{children}</AuthContext.Provider>;
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;