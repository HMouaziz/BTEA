import AuthProvider from "./context/AuthContext.tsx";
import Routes from "./routes/Routes.tsx";
import {ThemeProvider} from "@/context/ThemeContext.tsx";


function App() {
    return (
        <AuthProvider>
            <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
                    <Routes />
            </ThemeProvider>
        </AuthProvider>
    )
}

export default App