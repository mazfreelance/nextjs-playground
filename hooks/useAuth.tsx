import { exit } from "process";
import React, {
    useState,
    useEffect,
    useContext,
    createContext,
    ReactNode
} from "react";
import { auth, db } from "../configs/firebase";

const authContext = createContext<any>('');

// const { Provider } = authContext;

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function AuthProvider({ children }: any) {
    const auth = useAuthProvider();
    return <authContext.Provider value={ auth }>{ children }</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth: any = () => {
    console.log('authContext', authContext);
    // return;
    return useContext(authContext);
};

// Provider hook that creates an auth object and handles it's state
export const useAuthProvider = () => {
    const [user, setUser] = useState<any | null>(null);

    /* const createUser = (user: any) => {
        return db
            .collection('users')
            .doc(user.uid)
            .set(user)
            .then(() => {
                console.log('createUser success');
                setUser(user);
                return user;
            })
            .catch((error: any) => {
                console.log('createUser error', error);
                return { error };
            });
    };

    const signUp = ({ name, email, password }: any) => {
        return auth
            .createUserWithEmailAndPassword(email, password)
            .then((response: any) => {
                console.log('response', response);
                // auth.currentUser.sendEmailVerification();
                return createUser({ uid: response.user.uid, email, name });
            })
            .catch((error: any) => {
                return { error };
            });
    }; */

    const signIn = ({ email, password }: any) => {
        return auth
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log('response signIn', response)
                setUser(response.user);
                // getUserAdditionalData(user);
                return response.user;
            })
            .catch((error) => {
                return { error };
            });
    };

    /* const signOut = () => {
        return auth.signOut().then(() => {
            setUser(false)
        });
    }; */

    // const getUserAdditionalData = (user: firebase.User) => {
    //     return db
    //         .collection('users')
    //         .doc(user.uid)
    //         .get()
    //         .then((userData) => {
    //             if (userData.data()) {
    //                 setUser(userData.data());
    //             }
    //         });
    // };

    // const handleAuthStateChanged = (user: firebase.User) => {
    //     setUser(user);
    //     if (user) {
    //         getUserAdditionalData(user);
    //     }
    // };

    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
          } else {
            setUser(false);
          }
        });
        // Cleanup subscription on unmount
        return () => unsubscribe();
      }, []);
    // useEffect(() => {
    //     const unsub = auth.onAuthStateChanged(handleAuthStateChanged);
        
    //     return () => unsub();
    //    }, []);

    return {
        user,
        // signUp,
        signIn,
        // signOut
    }
};