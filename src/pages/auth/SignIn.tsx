import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const SignIn = () => {
  const nav = useNavigate();
  
  useEffect(() => {
    document.title = "Sign In — HiveSphere";
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    const userType = email.includes('brand') || email.includes('company') ? 'brand' : 'influencer';
    
    toast({ title: "Welcome back!", description: "You have been signed in successfully." });
    
    if (userType === 'brand') {
      nav("/dashboard/brand");
    } else {
      nav("/dashboard/influencer");
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <img src="/logo.png" alt="HiveSphere logo" className="h-8 w-auto mx-auto mb-4" />
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-balance text-muted-foreground">
              Enter your credentials to access your dashboard
            </p>
          </div>
          <form className="grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <Button variant="outline" className="w-full">
              Sign in with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <div className="flex flex-col justify-between h-full p-12 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
          <div>
            <h2 className="text-3xl font-bold mb-4">Unlock Your Influence.</h2>
            <p className="text-muted-foreground text-lg">
              Join a community of top-tier brands and creators.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Find perfect matches with our AI-powered discovery engine.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Manage campaigns, communication, and payments seamlessly.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Track performance with real-time analytics and insights.</span>
              </li>
            </ul>
          </div>
          <footer className="text-sm text-muted-foreground">
            © 2025 HiveSphere. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SignIn;