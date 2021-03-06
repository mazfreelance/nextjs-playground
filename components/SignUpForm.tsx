import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import { auth, db } from '../configs/firebase';
import { useRouter } from 'next/router';

interface SignUpData {
    name: string;
    email: string;
    password: string;
}

const SignUpForm: React.FC = () => {
    const { register, handleSubmit, reset, setValue, getValues, setError, formState: { errors }, formState } = useForm<SignUpData>();
    const onSubmit = (data: SignUpData) => {
        console.log('data', data);
        const auth = useAuth();
        const router = useRouter();
        return auth.signUp(data).then((user: any) => {
            console.log('user sign up', user);
            // router.push('/index');
        });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md shadow-sm">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Name
                </label>
                <input
                    id="name"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    type="text"
                    {...register('name', { required: 'Please enter an name' })}
                />
                {errors.name && (
                    <div className="mt-2 text-xs text-red-600">
                        {errors.name.message}
                    </div>
                )}
            </div>
            <div className="mt-6">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Email address
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                    <input
                        id="email"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
            <div className="mt-6">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                    <input
                        id="password"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        type="password"
                        {...register('password', { required: 'Please enter a password' })}
                    />
                    {errors.password && (
                        <div className="mt-2 text-xs text-red-600">
                            {errors.password.message}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                        Sign up
                    </button>
                </span>
            </div>
        </form>
    );
}

export default SignUpForm;