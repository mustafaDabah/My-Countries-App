import Button from "@components/ui/Button/Button"
import { Input } from "@components/ui/Input/Input"
import { LOGIN } from "@utils/routes"
import { Link } from "react-router-dom"

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-muted-foreground">Start your journey around the world</p>
        </div>

        <div className="rounded-xl border bg-card p-8 shadow-lg">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="eve.holt@reqres.in"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                required
              />
            </div>

            <Button>Create Account</Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to={LOGIN} className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-lg border bg-muted/50 p-4 text-sm">
          <p className="font-medium mb-2">Note:</p>
          <p className="text-muted-foreground">Use eve.holt@reqres.in for testing with the demo API</p>
        </div>
      </div>
    </div>
  )
}

export default Register