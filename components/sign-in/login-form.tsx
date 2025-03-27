"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "@/schema/login";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation'

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
    },
  });

  const router = useRouter();
  const { toast } = useToast();

  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    toast({
      title: "Status",
      description: "Successfully connected",
    });
    console.log("Form submitted!", values)
    router.push("/dashboard")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <Image
          src={"/images/taekwondo2.png"}
          alt="Logo"
          width={100}
          height={500}
          className="mb-4 h-12 w-12"
        />

        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="m@example.com"
                  {...register("username")}
                />
                {errors.username && (
                  <span className="text-red-500">{errors.username.message}</span>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" {...register("password")} />
                {errors.password && (
                  <span className="text-red-500">{errors.password.message}</span>
                )}
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
