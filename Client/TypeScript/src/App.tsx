import AuthProvider from "./context/AuthContext.tsx";
import Routes from "./routes/Routes.tsx";




function App() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}

export default App