import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

interface LoginFormProps extends React.ComponentProps<"div"> {
  onLogin?: (data: { email: string; password: string }) => void;
  onForgotPassword?: () => void;
  onCreateAccount?: () => void;
  isLoading?: boolean;
}

export function LoginForm({
  className,
  onForgotPassword,
  onCreateAccount,
  isLoading = false,
  ...props
}: LoginFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/Home";
  };

  const handleInputChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: "",
        }));
      }
    };

  return (
    <>
      <div
        className={cn("flex flex-col w-full pt-2.5 pb-6", className)}
        {...props}
      >
        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          {/* Email Input */}
          <div>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email or phone number"
              value={formData.email}
              onChange={handleInputChange("email")}
              className={cn(
                "w-full h-[48px] px-3 text-[16px] rounded-md transition-colors",
                "bg-white border border-[#dddfe2] placeholder-[#8a8d91]",
                "focus:border-[#1877f2] focus:bg-white focus:outline-none",
                errors.email && "border-red-500 focus:border-red-500"
              )}
              disabled={isLoading}
              autoComplete="email"
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="text-red-500 text-xs mt-1"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange("password")}
              className={cn(
                "w-full h-[48px] px-3 text-[16px] rounded-md transition-colors",
                "bg-white border border-[#dddfe2] placeholder-[#8a8d91]",
                "focus:border-[#1877f2] focus:bg-white focus:outline-none",
                errors.password && "border-red-500 focus:border-red-500"
              )}
              disabled={isLoading}
              autoComplete="current-password"
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            {errors.password && (
              <p
                id="password-error"
                className="text-red-500 text-xs mt-1"
                role="alert"
              >
                {errors.password}
              </p>
            )}
          </div>

          {/* Login Button */}
          <div className="pt-1">
            <Button
              variant="facebook-login"
              type="submit"
              disabled={isLoading}
              className="w-full h-[44px] text-[18px] font-bold cursor-pointer rounded-md disabled:opacity-50"
            >
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
          </div>

          {/* Forgotten Password Link */}
          <div className="text-center pt-2 pb-2">
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-[#1877f2] text-[13px] hover:underline transition-colors cursor-pointer focus:outline-none focus:underline"
              disabled={isLoading}
            >
              Forgotten password?
            </button>
          </div>

          {/* Divider */}
          <div className="relative pt-0.5" role="separator" aria-label="or">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#dadde1]"></div>
            </div>
          </div>

          {/* Create Account Button */}
          <div className="flex justify-center ">
            <Button
              variant="facebook-register"
              type="button"
              onClick={onCreateAccount}
              disabled={isLoading}
              className="h-[44px] px-4 relative cursor-pointer -bottom-4 text-[16px] font-bold rounded-md w-auto disabled:opacity-50"
            >
              <Link to="/register">Create New Account</Link>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
