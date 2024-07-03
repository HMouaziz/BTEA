import { useState } from 'react';
import '../custom.css'

export const Landing = () => {
    const [isRegister, setIsRegister] = useState(false);

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div className='flex items-center justify-center min-h-screen relative overflow-hidden'>
            <div className='absolute w-full h-full hidden md:flex items-center justify-items-start bg-content'>
                <div className='w-1/2 text-center'>
                    <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
                    <p>Additional content or image goes here.</p>
                </div>
            </div>
            {/* Desktop layout */}
            <div className={`absolute top-0 right-0 h-full w-full md:w-1/2 bg-secondary shadow-lg rounded-l-lg flex items-center justify-center transition-transform duration-500 transform ${isRegister ? 'md:translate-x-full' : 'md:translate-x-0'}`}>
                <div className='p-8'>
                    <h2 className="text-2xl font-bold text-card-foreground mb-4">Login</h2>
                    <div>Login Form</div>
                    <button className="mt-4 text-blue-500 border-2 cursor-pointer" onClick={toggleForm}>
                        Don't have an account? Register
                    </button>
                </div>
            </div>
            <div className={`absolute top-0 right-0 h-full w-full md:w-1/2 bg-muted shadow-lg rounded-l-lg flex items-center justify-center transition-transform duration-500 transform ${isRegister ? 'md:translate-x-0' : 'md:translate-x-full'}`}>
                <div className='p-8'>
                    <h2 className="text-2xl font-bold text-card-foreground mb-4">Register</h2>
                    <div>Register Form</div>
                    <button className="mt-4 text-blue-500 border-2 cursor-pointer" onClick={toggleForm}>
                        Already have an account? Login
                    </button>
                </div>
            </div>
            {/* Tablet/Mobile layout */}
            <div className={`absolute top-0 left-0 h-full w-full md:hidden bg-secondary shadow-lg flex flex-col justify-center items-center transition-transform duration-500 transform ${isRegister ? '-translate-y-full' : 'translate-y-0'}`}>
                <div className='p-8'>
                    <h2 className="text-2xl font-bold text-card-foreground mb-4">Login</h2>
                    <div>Login Form</div>
                    <button className="mt-4 text-blue-500 border-2 cursor-pointer" onClick={toggleForm}>
                        Don't have an account? Register
                    </button>
                </div>
            </div>
            <div className={`absolute top-0 left-0 h-full w-full md:hidden bg-muted shadow-lg flex flex-col justify-center items-center transition-transform duration-500 transform ${isRegister ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className='p-8'>
                    <h2 className="text-2xl font-bold text-card-foreground mb-4 ">Register</h2>
                    <div>Register Form</div>
                    <button className="mt-4 text-blue-500 border-2 cursor-pointer" onClick={toggleForm}>
                        Already have an account? Login
                    </button>
                </div>
            </div>
        </div>
    );
};