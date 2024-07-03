import {Button} from "@/components/ui/button"
import {CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

type signInFormProps = {
    toggleForm: () => void
}

export function SignInForm({ toggleForm }: signInFormProps) {

    const handleSwitch = () => {
        toggleForm()
    }

    return (
        <div className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Sign in</CardTitle>
                <CardDescription>
                    Enter your email below to sign in to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                        </div>
                        <Input id="password" type="password" required/>
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>

                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Button variant="link" onClick={handleSwitch}>
                        Sign up
                    </Button>
                </div>
            </CardContent>
        </div>
    )
}
