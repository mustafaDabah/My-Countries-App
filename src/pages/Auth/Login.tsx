import Button from '@components/ui/Button/Button'
import { Input } from '@components/ui/Input/Input'
import { REGISTER } from '@utils/routes'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent p-3 mb-4">
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to explore the world</p>
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

            <Button>Sign In</Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link to={REGISTER} className="text-primary hover:underline font-medium">
              Sign up
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-lg border bg-muted/50 p-4 text-sm">
          <p className="font-medium mb-2">Test Credentials:</p>
          <p className="text-muted-foreground">Email: eve.holt@reqres.in</p>
          <p className="text-muted-foreground">Password: pistol</p>
        </div>
      </div>

    </div>

  )
}

export default Login;				