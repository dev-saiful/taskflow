import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Card className="w-full max-w-sm p-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          <Button className="w-full">Sign In</Button>
          <p className="text-center text-sm text-gray-600 mt-2">
            Don{"'"}t have an account? <Link href="/register" className="text-blue-500 hover:underline">Sign Up</Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
