'use client'

import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
      const response = await fetch(`${apiUrl}/v1/sign-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          rememberMe,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to sign in' }))
        throw new Error(errorData.message || 'Failed to sign in')
      }

      const data = await response.json()
      console.log('Sign in successful:', data)
      setIsSuccess(true)

      // Redirect after successful sign-in (adjust as needed)
      // You might want to store the token and redirect to a dashboard
      // window.location.href = '/dashboard'
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during sign in')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0A0A14]">
        {/* Sign In Form */}
        <div className="min-h-screen flex items-center justify-center px-6 pt-16">
          <div className="max-w-md w-full">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">
                Welcome back
              </h1>
              <p className="text-neutral-400 text-lg font-light">
                Sign in to access your account
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 border border-white/10 mb-6">
              {/* Error Message */}
              {error && (
                <div className="mb-5 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              {/* Success Message */}
              {isSuccess && (
                <div className="mb-5 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Sign in successful! Redirecting...
                </div>
              )}

              <div className="space-y-5">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-neutral-600"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-12 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-neutral-600"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <Checkbox
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked === true)}
                      className="border-white/10 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500"
                    />
                    <span className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      Remember me
                    </span>
                  </label>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || isSuccess}
                  className="w-full bg-white text-black py-3.5 rounded-lg font-medium text-sm hover:bg-neutral-200 transition-all mt-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </div>
            </form>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-neutral-400">
              Don't have an account?{' '}
              <Link href="/sign-up" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                Sign up for early access
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
