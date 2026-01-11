'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  Aperture,
  ArrowDownLeft,
  ArrowDownToLine,
  ArrowRight,
  Blocks,
  Box,
  Check,
  Coffee,
  Cpu,
  Eye,
  EyeOff,
  Figma,
  Fingerprint,
  Globe,
  Hexagon,
  Layers,
  Lock,
  MoreHorizontal,
  RefreshCcw,
  Send,
  Server,
  Shield,
  ShieldCheckIcon,
  TrendingUp,
  Zap,
} from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="stars-container">
        <div className="shooting-star" style={{ top: '-10%', left: '10%', animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="shooting-star" style={{ top: '20%', left: '-10%', animationDuration: '4s', animationDelay: '2s' }}></div>
        <div className="shooting-star" style={{ top: '-5%', left: '40%', animationDuration: '2.5s', animationDelay: '4s' }}></div>
        <div className="shooting-star" style={{ top: '40%', left: '-20%', animationDuration: '5s', animationDelay: '1.5s' }}></div>
        <div className="shooting-star" style={{ top: '0%', left: '70%', animationDuration: '3.5s', animationDelay: '3s' }}></div>
        <div className="shooting-star" style={{ top: '30%', left: '0%', animationDuration: '4.5s', animationDelay: '5s' }}></div>
        <div className="shooting-star" style={{ top: '-15%', left: '90%', animationDuration: '4s', animationDelay: '1s' }}></div>
      </div>
      <div className="fixed inset-0 z-[-2] glow-mesh pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-50"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-indigo-300 font-medium tracking-wide uppercase mb-8 hover:bg-white/10 transition-colors cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            Now in Private Beta
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 mb-6 leading-[1.1]">
            Onchain Banking,
            <br className="hidden sm:block" />
            <span className="text-gradient-primary">Reimagined</span>
          </h1>

          {/* Subtitle */}
          <p className="text-neutral-400 text-lg sm:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed tracking-tight">
            Enterprise-grade onchain banking with programmable security. Secure your assets with
            programmable authorization logic. Zero compromises.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link href="/sign-up" className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group">
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="/demo" className="w-full sm:w-auto px-8 py-3.5 glass-card text-white rounded-lg font-medium text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2.5">
              <Eye className="w-4 h-4 transition-transform" />
              <span>Early Preview</span>
            </Link>
          </div>

          {/* Demo dashboard */}
          <div className="relative max-w-5xl mx-auto float">
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] -z-10 rounded-full"></div>

            <div className="glass-card rounded-xl border border-white/10 p-2 overflow-hidden shadow-2xl">
              <div className="bg-[#050505] rounded-lg overflow-hidden border border-white/5 w-full relative flex flex-col min-h-[400px]">
                <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-neutral-900/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div className="flex gap-4 text-[10px] font-medium text-neutral-500">
                    <span className="text-white">Overview</span>
                    <span className="hover:text-white cursor-pointer transition-colors">
                      Vaults
                    </span>
                    <span className="hover:text-white cursor-pointer transition-colors">
                      Cards
                    </span>
                    <span className="hover:text-white cursor-pointer transition-colors">
                      Activity
                    </span>
                  </div>
                  <div className="w-8"></div>
                </div>

                <div className="flex-1 flex flex-col md:flex-row">
                  {/* Left Sidebar Panel */}
                  <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-neutral-900/10 p-6 flex flex-col gap-8">
                    {/* Balance Block */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                          Total Balance
                        </div>
                        <MoreHorizontal className="w-3 h-3 text-neutral-500 cursor-pointer" />
                      </div>
                      <div className="text-2xl font-semibold tracking-tight text-white mb-1 font-display">
                        $124,592.00
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px]">
                        <span className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                          <TrendingUp className="w-2.5 h-2.5" />
                          12.5%
                        </span>
                        <span className="text-neutral-500">vs last month</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-3 gap-2">
                      <button className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group">
                        <Send className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white" />
                        <span className="text-[9px] text-neutral-400">Send</span>
                      </button>
                      <button className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group">
                        <ArrowDownToLine className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white" />
                        <span className="text-[9px] text-neutral-400">Add</span>
                      </button>
                      <button className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group">
                        <RefreshCcw className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white" />
                        <span className="text-[9px] text-neutral-400">Swap</span>
                      </button>
                    </div>

                    {/* Active Card */}
                    <div className="mt-auto">
                      <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold mb-3">
                        Active Card
                      </div>
                      <div className="relative bg-gradient-to-br from-neutral-800 to-black rounded-lg p-2 border border-white/10 shadow-lg overflow-hidden group cursor-pointer hover:border-indigo-500/30 transition-all">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl -mr-10 -mt-10"></div>
                        <div className="flex justify-between items-start mb-8 relative z-10">
                          <Image alt="Logo" src="/logo.png" height={50} width={50} className="w-6 h-6 text-white" />
                          <ShieldCheckIcon className="w-3 h-3 text-neutral-500" />
                        </div>
                        <div className="text-xs font-mono text-neutral-300 tracking-widest mb-3">
                          •••• •••• •••• 4921
                        </div>
                        <div className="flex justify-between items-end relative z-10">
                          <div className="text-[9px] text-neutral-500 font-medium">
                            Monthly Limit
                          </div>
                          <div className="text-[10px] text-white font-medium">
                            $25,000
                          </div>
                        </div>
                        <div className="w-full bg-neutral-800 h-0.5 mt-1 rounded-full overflow-hidden">
                          <div className="bg-indigo-500 h-full w-[65%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 p-6 flex flex-col bg-gradient-to-b from-transparent to-black/20">
                    {/* Chart Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-white">Cash Flow</h3>
                        <span className="text-[10px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded border border-white/5">
                          USD
                        </span>
                      </div>
                      <div className="flex bg-neutral-900 rounded-md p-0.5 border border-white/5">
                        <button className="px-2 py-0.5 text-[10px] font-medium text-white bg-white/10 rounded shadow-sm">
                          1W
                        </button>
                        <button className="px-2 py-0.5 text-[10px] font-medium text-neutral-500 hover:text-neutral-300 transition-colors">
                          1M
                        </button>
                        <button className="px-2 py-0.5 text-[10px] font-medium text-neutral-500 hover:text-neutral-300 transition-colors">
                          1Y
                        </button>
                      </div>
                    </div>

                    {/* SVG Area Chart */}
                    <div className="h-40 w-full relative mb-8">
                      <svg viewBox="0 0 400 150" preserveAspectRatio="none" className="w-full h-full text-indigo-500">
                        <defs>
                          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2"></stop>
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0"></stop>
                          </linearGradient>
                        </defs>
                        <path d="M0,150 L0,110 C40,100 60,130 100,90 S160,40 200,70 S280,100 320,60 S360,20 400,50 L400,150 Z" fill="url(#gradient)" stroke="none"></path>
                        <path d="M0,110 C40,100 60,130 100,90 S160,40 200,70 S280,100 320,60 S360,20 400,50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke"></path>
                      </svg>
                      {/* Tooltip Indicator */}
                      <div className="absolute top-[40%] left-[80%] w-px h-[60%] bg-indigo-500/50 border-r border-indigo-500 border-dashed">
                        <div className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-indigo-500 border-2 border-[#050505]"></div>
                        <div className="absolute -top-8 -left-8 bg-neutral-800 border border-white/10 px-2 py-1 rounded text-[10px] text-white whitespace-nowrap shadow-xl">
                          $42,300.21
                        </div>
                      </div>
                    </div>

                    {/* Transactions Header */}
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-medium text-neutral-400">
                        Recent Transactions
                      </h4>
                      <button className="text-[10px] text-indigo-400 hover:text-indigo-300 transition-colors">
                        View All
                      </button>
                    </div>

                    <div className="text-start space-y-1 overflow-y-auto flex-1 pr-1">
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-default group">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-neutral-300">
                            <ArrowDownLeft className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs text-white font-medium">
                              Coinbase
                            </div>
                            <div className="text-[9px] text-neutral-500">
                              Today, 10:23 AM
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-emerald-400 font-medium">
                            +$4,200.00
                          </div>
                          <div className="text-[9px] text-neutral-500 bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 rounded inline-block mt-0.5">
                            Received
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-default group">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-neutral-300">
                            <Server className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs text-white font-medium">
                              Amazon Web Services
                            </div>
                            <div className="text-[9px] text-neutral-500">
                              Yesterday, 4:00 PM
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-white font-medium">
                            -$240.50
                          </div>
                          <div className="text-[9px] text-neutral-500">Auto-pay</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-default group">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-neutral-300">
                            <Figma className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs text-white font-medium">
                              Figma Subscription
                            </div>
                            <div className="text-[9px] text-neutral-500">
                              Nov 24, 2025
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-white font-medium">
                            -$15.00
                          </div>
                          <div className="text-[9px] text-neutral-500">
                            Card ••4921
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-default group">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-neutral-300">
                            <Coffee className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs text-white font-medium">
                              Blue Bottle Coffee
                            </div>
                            <div className="text-[9px] text-neutral-500">
                              Nov 23, 2025
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-white font-medium">-$6.50</div>
                          <div className="text-[9px] text-neutral-500">Pending</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-10 border-y border-white/5 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs text-neutral-500 uppercase tracking-widest mb-8">
            Powered and secured by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-20 opacity-80">
            <svg aria-label="Vercel logotype" height="20" role="img" viewBox="0 0 262 52" width="100" xmlns="http://www.w3.org/2000/svg"><path d="M59.8019 52L29.9019 0L0.00190544 52H59.8019ZM89.9593 49.6328L114.947 2.36365H104.139L86.9018 36.6921L69.6647 2.36365H58.8564L83.8442 49.6328H89.9593ZM260.25 2.36365V49.6329H251.302V2.36365H260.25ZM210.442 31.99C210.442 28.3062 211.211 25.0661 212.749 22.2699C214.287 19.4737 216.431 17.321 219.181 15.812C221.93 14.3029 225.146 13.5484 228.828 13.5484C232.09 13.5484 235.026 14.2585 237.636 15.6788C240.245 17.0991 242.319 19.2074 243.857 22.0036C245.395 24.7998 246.187 28.2174 246.234 32.2564V34.3202H219.88C220.066 37.2496 220.928 39.5576 222.466 41.2442C224.051 42.8864 226.171 43.7075 228.828 43.7075C230.505 43.7075 232.043 43.2637 233.441 42.376C234.839 41.4883 235.888 40.2899 236.587 38.7808L245.745 39.4466C244.626 42.7754 242.529 45.4385 239.453 47.4358C236.377 49.4331 232.835 50.4317 228.828 50.4317C225.146 50.4317 221.93 49.6772 219.181 48.1681C216.431 46.6591 214.287 44.5064 212.749 41.7102C211.211 38.914 210.442 35.6739 210.442 31.99ZM237.006 28.6612C236.68 25.7762 235.771 23.668 234.28 22.3365C232.789 20.9606 230.971 20.2726 228.828 20.2726C226.358 20.2726 224.354 21.0049 222.816 22.4696C221.278 23.9343 220.322 25.9982 219.95 28.6612H237.006ZM195.347 22.3365C196.838 23.5348 197.77 25.1993 198.143 27.3297L207.371 26.8637C207.044 24.1562 206.089 21.8039 204.505 19.8066C202.92 17.8093 200.869 16.278 198.353 15.2128C195.883 14.1032 193.157 13.5484 190.174 13.5484C186.492 13.5484 183.277 14.3029 180.527 15.812C177.777 17.321 175.634 19.4737 174.096 22.2699C172.558 25.0661 171.789 28.3062 171.789 31.99C171.789 35.6739 172.558 38.914 174.096 41.7102C175.634 44.5064 177.777 46.6591 180.527 48.1681C183.277 49.6772 186.492 50.4317 190.174 50.4317C193.25 50.4317 196.046 49.8769 198.563 48.7673C201.079 47.6133 203.13 45.9933 204.714 43.9072C206.299 41.8212 207.254 39.38 207.58 36.5838L198.283 36.1844C197.957 38.5367 197.048 40.3565 195.557 41.6436C194.065 42.8864 192.271 43.5078 190.174 43.5078C187.285 43.5078 185.048 42.5091 183.463 40.5118C181.879 38.5145 181.086 35.6739 181.086 31.99C181.086 28.3062 181.879 25.4656 183.463 23.4683C185.048 21.471 187.285 20.4723 190.174 20.4723C192.178 20.4723 193.902 21.0937 195.347 22.3365ZM149.955 14.3457H158.281L158.522 21.1369C159.113 19.2146 159.935 17.7218 160.988 16.6585C162.514 15.1166 164.642 14.3457 167.371 14.3457H170.771V21.6146H167.302C165.359 21.6146 163.763 21.8789 162.514 22.4075C161.311 22.9362 160.386 23.7732 159.739 24.9186C159.137 26.064 158.837 27.5178 158.837 29.2799V49.6328H149.955V14.3457ZM111.548 22.2699C110.01 25.0661 109.241 28.3062 109.241 31.99C109.241 35.6739 110.01 38.914 111.548 41.7102C113.086 44.5064 115.229 46.6591 117.979 48.1681C120.729 49.6772 123.944 50.4317 127.626 50.4317C131.634 50.4317 135.176 49.4331 138.252 47.4358C141.327 45.4385 143.425 42.7754 144.543 39.4466L135.385 38.7808C134.686 40.2899 133.638 41.4883 132.24 42.376C130.842 43.2637 129.304 43.7075 127.626 43.7075C124.97 43.7075 122.849 42.8864 121.265 41.2442C119.727 39.5576 118.865 37.2496 118.678 34.3202H145.032V32.2564C144.986 28.2174 144.194 24.7998 142.656 22.0036C141.118 19.2074 139.044 17.0991 136.434 15.6788C133.824 14.2585 130.888 13.5484 127.626 13.5484C123.944 13.5484 120.729 14.3029 117.979 15.812C115.229 17.321 113.086 19.4737 111.548 22.2699ZM133.079 22.3365C134.57 23.668 135.479 25.7762 135.805 28.6612H118.748C119.121 25.9982 120.076 23.9343 121.614 22.4696C123.152 21.0049 125.156 20.2726 127.626 20.2726C129.77 20.2726 131.587 20.9606 133.079 22.3365Z" fill="white"></path></svg>
            <Image src="/aws-color.png" width={65} height={20} alt="AWS" />
            <Image src="/solanaLogo.svg" width={150} height={30} alt="AWS" />
            <Image src="/pumpfun.png" width={45} height={30} alt="AWS" />
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-white">
              Financial freedom,
              <br />
              <span className="text-neutral-500">without the surveillance.</span> 
            </h2>
            <p className="text-neutral-400 max-w-xl font-light leading-relaxed">
              StyxPay replaces traditional banking rails with cryptographic
              authorization. You decide who pulls funds, when, and how much.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1: Large Span */}
            <div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group border border-white/5 hover:border-white/10 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Lock className="w-32 h-32 text-indigo-500 rotate-12" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20">
                  <Fingerprint className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-white mb-2 tracking-tight">
                    Authorization-Based Security
                  </h3>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-sm">
                    Unlike traditional crypto wallets that push, StyxPay uses a
                    &apos;pull&apos; model authorized by signatures. No more drained wallets
                    from malicious approvals.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2: Tall */}
            <div className="md:row-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group border border-white/5 hover:border-white/10 transition-colors">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
                  <Globe className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-display text-xl font-medium text-white mb-2 tracking-tight">
                  Spend Anywhere
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
                  Create virtual cards instantly. Spend your crypto at 40M+
                  merchants worldwide while keeping your main vault completely
                  anonymous onchain.
                </p>

                <div className="w-fit mb-2 relative bg-gradient-to-br from-neutral-800 to-black rounded-lg p-2 border border-white/10 shadow-lg overflow-hidden group cursor-pointer hover:border-indigo-500/30 transition-all rotate-5 hover:rotate-4">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl -mr-10 -mt-10"></div>
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <Image alt="Logo" src="/logo.png" height={50} width={50} className="w-6 h-6 text-white" />
                    <ShieldCheckIcon className="w-3 h-3 text-neutral-500" />
                  </div>
                  <div className="text-xs font-mono text-neutral-300 tracking-widest mb-3">
                    •••• •••• •••• 4202
                  </div>
                </div>
                <div className="w-fit ml-auto relative bg-gradient-to-br from-neutral-800 to-black rounded-lg p-2 border border-white/10 shadow-lg overflow-hidden group cursor-pointer hover:border-indigo-500/30 transition-all -rotate-5 hover:-rotate-4">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl -mr-10 -mt-10"></div>
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <Image alt="Logo" src="/logo.png" height={50} width={50} className="w-6 h-6 text-white" />
                    <ShieldCheckIcon className="w-3 h-3 text-neutral-500" />
                  </div>
                  <div className="text-xs font-mono text-neutral-300 tracking-widest mb-3">
                    •••• •••• •••• 5921
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-display text-xl font-medium text-white mb-2 tracking-tight">
                Instant Settlement
              </h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                Say goodbye to T+2 settlement days. Transfers within the Styx
                network are instant and final within seconds.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
                <EyeOff className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-display text-xl font-medium text-white mb-2 tracking-tight">
                Zero-Knowledge Privacy
              </h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                Transaction details are encrypted using ZK-proofs. Only you and
                the counterparty know the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Comparison / Code Section */}
      <section id="developers" className="py-20 bg-neutral-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-card rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-3 bg-black/40 border-b border-white/5 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                <div className="ml-2 text-xs text-neutral-500 font-mono">
                  auth_config.json
                </div>
              </div>
              <div className="p-6 bg-black/60 overflow-x-auto">
                <SyntaxHighlighter
                  language="json"
                  style={vscDarkPlus}
                  customStyle={{
                    background: 'transparent',
                    padding: 0,
                    margin: 0,
                    fontSize: 'inherit',
                  }}
                  codeTagProps={{
                    style: {
                      fontFamily: 'inherit',
                    }
                  }}
                >
{`{
  "authorization_policy": {
    "type": "whitelist_only",
    "daily_limit": 5000,
    "currency": "USDC",
    "merchants": [
      "amazon.com",
      "uber",
      "apple_services"
    ],
    "zk_proof_required": true
  }
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              <span className="text-indigo-400 uppercase text-xs font-semibold tracking-widest">
                Developer First
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tighter text-white mb-6">
              Programmable Money.
              <br />
              Literally.
            </h2>
            <p className="text-neutral-400 text-lg font-light leading-relaxed mb-8">
              Define spending rules directly in code. Whether it&apos;s a corporate
              treasury requiring multi-sig for transactions over $10k, or a
              personal vault that only pays for subscriptions, StyxPay gives you
              granular control.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[18px]">
                  <Check className="w-4.5 h-4.5 text-indigo-400" />
                </div>
                <span className="text-neutral-300 font-light">
                  API access for automated treasury management.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[18px]">
                  <Check className="w-4.5 h-4.5 text-indigo-400" />
                </div>
                <span className="text-neutral-300 font-light">
                  Webhooks for real-time transaction monitoring.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[18px]">
                  <Check className="w-4.5 h-4.5 text-indigo-400" />
                </div>
                <span className="text-neutral-300 font-light">
                  Custom SDKs for React, Node, and Python.
                </span>
              </li>
            </ul>
            <Link href="https://docs.styxpay.app" className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-500 text-white rounded-lg font-medium text-sm hover:bg-indigo-600 transition-colors group mt-10">
              <span>Read documentation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/5">
            <div>
              <div className="font-display text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-2">
                $0
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest">
                Fees
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-2">
                &lt; 240ms
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest">
                Latency
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-2">
                100%
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest">
                Onchain
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-2">
                zk_proof
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest">
                Encrypted
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              <span className="text-indigo-400 uppercase text-xs font-semibold tracking-widest">
                Tokenomics
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-white">
              Introducing $STYX
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl font-light leading-relaxed">
              The official utility token for StyxPay, launching on Solana. Hold $STYX to unlock exclusive rewards and features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Benefit 1: Cashback */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group border border-white/5 hover:border-indigo-500/30 transition-all">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20">
                  <TrendingUp className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="font-display text-xl font-medium text-white mb-3 tracking-tight">
                  4.5% Cashback
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  Earn 4.5% cashback in $USDC on all your transactions. Automatically deposited to your StyxPay vault.
                </p>
              </div>
            </div>

            {/* Benefit 2: Early Access */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group border border-white/5 hover:border-emerald-500/30 transition-all">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-display text-xl font-medium text-white mb-3 tracking-tight">
                  Early Feature Access
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  Get first access to new StyxPay features, beta products, and exclusive integrations before the general public.
                </p>
              </div>
            </div>

            {/* Benefit 3: Airport Lounge */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
                  <Aperture className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-display text-xl font-medium text-white mb-3 tracking-tight">
                  Priority Pass Access
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  Enjoy complimentary airport lounge access worldwide with Priority Pass membership included.
                </p>
              </div>
            </div>
          </div>

          {/* Token Info Card */}
          <div className="mt-12 glass-card rounded-2xl p-8 md:p-10 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-2xl font-medium text-white mb-4 tracking-tight">
                  Built on Solana
                </h3>
                <p className="text-neutral-400 font-light leading-relaxed mb-6">
                  $STYX leverages Solana&apos;s high-speed, low-cost infrastructure to provide instant rewards and seamless token utility across the StyxPay ecosystem.
                </p>
                <div className="flex gap-4">

                <Link href="https://pump.fun/coin/" className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-500 text-white rounded-lg font-medium text-sm hover:bg-indigo-600 transition-colors group">
                  <span>Buy $STYX</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                 <Link href="https://docs.styxpay.app" className="w-full sm:w-auto px-8 py-3.5 glass-card text-white rounded-lg font-medium text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2.5">
              <span>Learn more</span>
            </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                  <Image src="/card.png" width={400} height={400} alt="StyxPay card" className='-rotate-10' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-10 md:p-16 text-center border border-white/10 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none"></div>

          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tighter text-white mb-6 relative z-10">
            Ready to regain control of your money?
          </h2>
          <p className="text-neutral-400 text-lg font-light mb-10 max-w-xl mx-auto relative z-10">
            Join other users who have switched to the safest,<br/>private way to
            bank onchain.
          </p>

           <Link href="/sign-up" className="w-fit mx-auto px-8 py-3.5 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group">
              <span>Join the waitlist for early access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <p className="text-[11px] text-neutral-600 mt-6 relative z-10">
            No spam. Unsubscribe anytime. No pressure.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
