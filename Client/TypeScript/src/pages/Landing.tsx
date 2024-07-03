import {useState} from 'react';
import '../custom.css'
import logo from '../../public/assets/images/logo.jpeg'
import {useTheme} from "@/hooks/useTheme.tsx";
import {SignInForm} from "@/components/Authentication/SignInForm.tsx";
import {SignupForm} from "@/components/Authentication/SignupForm.tsx";

export const Landing = () => {
    const [isRegister, setIsRegister] = useState(false);
    const {theme} = useTheme()

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div
            className={`flex items-center justify-center min-h-screen relative overflow-hidden ${theme == "light" ? 'bg-content-light' : 'bg-content-dark'}`}>
            <div className='absolute w-full h-full hidden md:flex items-center justify-items-start'>
                <div className='w-1/2 h-full text-center flex justify-center'>
                    {/*{content goes here}*/}
                </div>
            </div>
            {/* Desktop layout */}
            <div
                className={`absolute top-0 right-0 h-full w-full md:w-1/2 bg-card shadow-lg rounded-l-lg flex items-center justify-center transition-transform duration-500 transform ${isRegister ? 'md:translate-x-full' : 'md:translate-x-0'}`}>
                <div className='p-8'>
                    <img src={logo} alt="Logo" className='w-32 h-32 rounded-3xl m-auto'/>
                    <SignInForm toggleForm={toggleForm}/>
                </div>
            </div>
            <div
                className={`absolute top-0 right-0 h-full w-full md:w-1/2 bg-primary shadow-lg rounded-l-lg flex items-center justify-center transition-transform duration-500 transform ${isRegister ? 'md:translate-x-0' : 'md:translate-x-full'}`}>
                <div className='p-8'>
                    <img src={logo} alt="Logo" className='w-32 h-32 rounded-3xl m-auto'/>
                    <SignupForm toggleForm={toggleForm}/>
                </div>
            </div>
            {/* Tablet/Mobile layout */}
            <div
                className={`absolute top-0 left-0 h-full w-full md:hidden pt-16 bg-secondary shadow-lg flex flex-col justify-start items-center transition-transform duration-500 transform ${isRegister ? '-translate-y-full' : 'translate-y-0'}`}>
                <div>
                    <img src={logo} alt="Logo" className='w-32 h-32 rounded-3xl m-auto'/>
                    <SignInForm toggleForm={toggleForm}/>
                </div>
            </div>
            <div
                className={`absolute top-0 left-0 h-full w-full md:hidden pt-16 bg-muted shadow-lg flex flex-col justify-start items-center transition-transform duration-500 transform ${isRegister ? 'translate-y-0' : 'translate-y-full'}`}>
                <div>
                    <img src={logo} alt="Logo" className='w-32 h-32 rounded-3xl m-auto'/>
                    <SignupForm toggleForm={toggleForm}/>
                </div>
            </div>
        </div>
    );
};