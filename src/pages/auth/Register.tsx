import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Register = () => {
  const nav = useNavigate();
  const [userType, setUserType] = useState<string>("");
  
  useEffect(() => {
    document.title = "Register — HiveSphere";
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userType) {
      toast({ title: "Please select account type", variant: "destructive" });
      return;
    }
    
    toast({ title: "Welcome to HiveSphere!", description: "Your account has been created successfully." });
    
    nav(`/onboarding?role=${userType}`);
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <img src="/logo.png" alt="HiveSphere logo" className="h-8 w-auto mx-auto mb-4" />
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-balance text-muted-foreground">
              Enter your details below to join the community
            </p>
          </div>
          <form className="grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Max Robinson" required />
            </div>
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
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="userType">I am a...</Label>
              <Select value={userType} onValueChange={setUserType}>
                <SelectTrigger id="userType">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brand">Brand / Business</SelectItem>
                  <SelectItem value="influencer">Influencer / Creator</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="underline">
              Sign in
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

export default Register;