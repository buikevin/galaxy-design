/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Login block - Full login page with form, social auth, and validation
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface LoginBlockProps {
  title?: string;
  subtitle?: string;
  onSubmit?: (data: {
    email: string;
    password: string;
    remember: boolean;
  }) => void;
  showSocial?: boolean;
  className?: string;
}

export function LoginBlock({
  title = 'Welcome back',
  subtitle = 'Enter your email to sign in to your account',
  onSubmit,
  showSocial = true,
  className,
}: LoginBlockProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ email, password, remember });
  };

  return (
    <div
      className={cn(
        'flex min-h-screen items-center justify-center bg-background',
        className
      )}
    >
      <div className="w-full max-w-sm space-y-6 px-4">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.({ email, password, remember });
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium leading-none"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded"
            />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Sign In
          </button>
        </form>

        {showSocial && (
          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <button
              type="button"
              className="w-full inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              GitHub
            </button>
          </div>
        )}

        <p className="px-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <a
            href="/register"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
LoginBlock.displayName = 'LoginBlock';
