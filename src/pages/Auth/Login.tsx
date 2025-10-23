import Button from '@components/ui/Button/Button'
import { Input } from '@components/ui/Input/Input'
import useAuth from '@hooks/useAuth'
import { REGISTER } from '@utils/routesUrl'
import { validateLoginForm } from '@utils/validationForms'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

function Login() {
  const { loginMutation } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const validation = validateLoginForm(formData);

    if (!validation.isValid) {
      toast.error(validation.errors.join('\n'));
      return;
    }

    loginMutation.mutate({ email, password });
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to explore the world</p>
        </div>

        <div className="rounded-xl border bg-card p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="eve.holt@reqres.in"
                required
                name='email'
                value={'eve.holt@reqres.in'}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                name='password'
                autoComplete="current-password"
                value={'pistol'}
              />
            </div>

            <Button isLoading={loginMutation.isPending}>Sign In</Button>
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