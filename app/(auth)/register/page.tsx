import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <Card className="w-full max-w-sm p-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Create Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Jhon Doe" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          <Button className="w-full">Sign Up</Button>
          <p className="text-center text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterPage;
