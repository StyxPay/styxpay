'use client'

import Link from 'next/link'
import { ArrowLeft, Check, Mail, User, Building2, Briefcase, Loader2, Clock, Globe, FileBadge } from 'lucide-react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    useCase: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
      const response = await fetch(`${apiUrl}/v1/sign-up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Sign up failed' }))
        throw new Error(errorData.message || 'Sign up failed')
      }

      const data = await response.json()
      console.log('Sign up successful:', data)
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during sign up')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#0A0A14] flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <div className="glass-card rounded-2xl p-12 border border-white/10">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                <Check className="w-8 h-8 text-emerald-400" />
              </div>
              <h1 className="font-display text-3xl font-medium tracking-tighter text-white mb-4">
                You're on the list!
              </h1>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Thank you for your interest in StyxPay. We'll be in touch soon with early access details.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Link>
            </div>
          </div>
        </div>
      <Footer />
      </>
    )
  }

  return (
    <>
        <Navbar />
      <div className="min-h-screen bg-[#0A0A14]">
        {/* Sign Up Form */}
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">
                Join the waitlist
              </h1>
              <p className="text-neutral-400 text-lg font-light max-w-xl mx-auto">
                Be among the first to experience the future of onchain banking. Limited spots available.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10 border border-white/10">
              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-300 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-neutral-600"
                        placeholder="John"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-300 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-neutral-600"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address *
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
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-neutral-600"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-neutral-300 mb-2">
                    Role
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select your role</option>
                      <option value="founder">Founder/CEO</option>
                      <option value="developer">Developer</option>
                      <option value="product">Product Manager</option>
                      <option value="finance">Finance/Treasury</option>
                      <option value="individual">Individual User</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Use Case */}
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-neutral-300 mb-2">
                    What do you plan to use StyxPay for?
                  </label>
                  <textarea
                    id="useCase"
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-neutral-600 resize-none"
                    placeholder="Tell us about your use case..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white text-black py-3.5 rounded-lg font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Early Access</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Benefits */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 border border-indigo-500/20">
                  <Clock className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-sm font-medium text-white mb-1">Priority Access</h3>
                <p className="text-xs text-neutral-500">Be first in line when we launch</p>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 border border-indigo-500/20">
                  <FileBadge className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-sm font-medium text-white mb-1">Exclusive Perks</h3>
                <p className="text-xs text-neutral-500">Special benefits for early adopters</p>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 border border-indigo-500/20">
                  <Globe className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-sm font-medium text-white mb-1">Shape the Future</h3>
                <p className="text-xs text-neutral-500">Your feedback will guide development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
