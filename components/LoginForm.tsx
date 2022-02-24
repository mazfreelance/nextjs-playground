import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import styles from '../styles/Home.module.css'
import { auth, db } from "../configs/firebase";

interface LoginData {
    email: string;
    password: string;
}

/* export default function LoginForm() {
    return (
        <div className={styles.login_box + ' p-3'}>
            <h1 className="display-6 mb-3">Login</h1>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}

                onSubmit={(
                    values: LoginData,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 500 )
                }}
            >

                <Form>
                    <Field className="form-control mb-3" id="username" name="username" placeholder="Username" aria-describedby="usernameHelp"></Field>
                    <Field className="form-control mb-3" type="password" id="password" name="password" placeholder="Password"></Field>
                    <button className="btn btn-primary" type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    )
} */

const signIn = ({ email, password }: any) => {
    return auth
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            console.log('response signIn', response)
            // setUser(response.user);
            // getUserAdditionalData(user);
            // return response.user;
        })
        .catch((error) => {
            console.log('response error', error.message);
            return { error };
        });
};
const LoginForm: React.FC = () => {
    const { register, setError, formState: { errors }, handleSubmit } = useForm<LoginData>();
    const onSubmit = (data: LoginData) => {
        console.log('login', data);

        const auth = useAuth();
        // const router = useRouter();
        // router.push('/index');
        return auth.signIn(data).then(() => {
            console.log('data', data)
            // router.push('/');
        });
        return signIn(data).then(() => {
            // router.push('/index');
        return {data};
        })
        .catch((error) => {
            console.log('signIn error', error);
            return { error };
        });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mt-1 rounded-md">
                <input
                    id="email"
                    type="email"
                    {...register('email', { required: 'Please enter an email' })}
                />
                {errors.email && (
                    <div className="mt-2 text-xs text-red-600">
                        {errors.email.message}
                    </div>
                )}
            </div>

            <div className="mt-1 rounded-md">
                <input
                    id="password"
                    type="password"
                    {...register('password', {
                        required: 'Please enter a password',
                        minLength: {
                            value: 6,
                            message: 'Should have at least 6 characters',
                        }
                    })}
                />
                {errors.password && (
                    <div className="mt-2 text-xs text-red-600">
                        {errors.password.message}
                    </div>
                )}
            </div>
            <button
                type="submit"
            >
                Log in
            </button>
            {/* <div className="rounded-md">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Email address
                </label>
                <div className="mt-1 rounded-md">
                    <input
                        id="email"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                        type="email"
                        {...register('email', { required: 'Please enter an email' })}
                    />
                    {errors.email && (
                        <div className="mt-2 text-xs text-red-600">
                            {errors.email.message}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Password
                </label>
                <div className="mt-1 rounded-md">
                    <input
                        id="password"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                        type="password"
                        {...register('password', {
                            required: 'Please enter a password',
                            minLength: {
                                value: 6,
                                message: 'Should have at least 6 characters',
                            }
                        })}
                    />
                    {errors.password && (
                        <div className="mt-2 text-xs text-red-600">
                            {errors.password.message}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4">
                <span className="block w-full rounded-md shadow-sm">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                        Log in
                    </button>
                </span>
            </div> */}
        </form>
    );
};
export default LoginForm;
