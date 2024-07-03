import {Button} from "@/components/ui/button"
import {CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

type signupFormProps = {
    toggleForm: () => void
}

export function SignupForm({toggleForm}: signupFormProps) {

    const handleSwitch = () => {
        toggleForm()
    }

    return (
        <div className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-xl">Sign up</CardTitle>
                <CardDescription>
                    Enter your information to create an account
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
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password"/>
                    </div>
                    <Button type="submit" className="w-full">
                        Create an account
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Button variant='link' onClick={handleSwitch}>
                        Sign in
                    </Button>
                </div>
            </CardContent>
        </div>
    )
}
