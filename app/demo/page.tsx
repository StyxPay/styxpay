'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDownLeft,
  ArrowDownToLine,
  ArrowLeft,
  ArrowUpRight,
  Bell,
  ChevronDown,
  Coffee,
  CreditCard,
  Figma,
  LayoutDashboard,
  MoreHorizontal,
  Package,
  RefreshCcw,
  Search,
  Send,
  Server,
  Settings,
  ShieldCheckIcon,
  TrendingUp,
  User,
  Wallet,
} from 'lucide-react'

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-[#030303] flex">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:flex-col w-64 border-r border-white/5 bg-neutral-900/20">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.png" alt="StyxPay" width={32} height={32} className="w-8 h-8" />
            <span className="font-display text-xl font-semibold text-white">StyxPay</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'overview'
                ? 'bg-white/10 text-white'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('vaults')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'vaults'
                ? 'bg-white/10 text-white'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Wallet className="w-4 h-4" />
            <span>Vaults</span>
          </button>

          <button
            onClick={() => setActiveTab('cards')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'cards'
                ? 'bg-white/10 text-white'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Cards</span>
          </button>

          <button
            onClick={() => setActiveTab('activity')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'activity'
                ? 'bg-white/10 text-white'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Activity</span>
          </button>

          <div className="pt-4 mt-4 border-t border-white/5">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-3 border-t border-white/5">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">John Nakamoto</div>
              <div className="text-xs text-neutral-500 truncate">john@styxpay.app</div>
            </div>
            <ChevronDown className="w-4 h-4 text-neutral-500" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-neutral-900/20">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="lg:hidden flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <button className="hidden md:flex min-w-[300px] items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-neutral-400 hover:text-white">
              <Search className="w-4 h-4" />
              <span className="text-sm">Search</span>
            </button>

            {/* Notifications */}
            <button className="relative p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-neutral-400 hover:text-white">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-indigo-500 border border-[#030303]"></span>
            </button>

            <Link
              href="/"
              className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors text-white text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Exit App</span>
            </Link>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-white mb-2 font-display">
                Welcome back, John Nakamoto
              </h1>
              <p className="text-sm text-neutral-400">
                Here's what's happening with your account today
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="glass-card rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">
                    Total Balance
                  </div>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-semibold text-white mb-2 font-display">
                  $124,592.00
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                    +12.5%
                  </span>
                  <span className="text-neutral-500">vs last month</span>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">
                    Total Spent
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </div>
                <div className="text-3xl font-semibold text-white mb-2 font-display">
                  $8,421.50
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                    This month
                  </span>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">
                    Active Cards
                  </div>
                  <CreditCard className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-3xl font-semibold text-white mb-2 font-display">3</div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                    2 virtual, 1 physical
                  </span>
                </div>
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Chart and Transactions */}
              <div className="lg:col-span-2 space-y-6">
                {/* Chart Card */}
                <div className="glass-card rounded-xl p-6 border border-white/5">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-medium text-white">Cash Flow</h3>
                      <span className="text-xs bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded border border-white/5">
                        USD
                      </span>
                    </div>
                    <div className="flex bg-neutral-900 rounded-lg p-0.5 border border-white/5">
                      <button className="px-3 py-1 text-xs font-medium text-white bg-white/10 rounded">
                        1W
                      </button>
                      <button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors">
                        1M
                      </button>
                      <button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors">
                        1Y
                      </button>
                    </div>
                  </div>

                  <div className="h-64 w-full relative">
                    <svg
                      viewBox="0 0 400 150"
                      preserveAspectRatio="none"
                      className="w-full h-full text-indigo-500"
                    >
                      <defs>
                        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.2"></stop>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,150 L0,110 C40,100 60,130 100,90 S160,40 200,70 S280,100 320,60 S360,20 400,50 L400,150 Z"
                        fill="url(#gradient)"
                        stroke="none"
                      ></path>
                      <path
                        d="M0,110 C40,100 60,130 100,90 S160,40 200,70 S280,100 320,60 S360,20 400,50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* Transactions Card */}
                <div className="glass-card rounded-xl p-6 border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-medium text-white">Recent Transactions</h4>
                    <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                      View All
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <ArrowDownLeft className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm text-white font-medium">Coinbase</div>
                          <div className="text-xs text-neutral-500">Today, 10:23 AM</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-emerald-400 font-medium">+$4,200.00</div>
                        <div className="text-xs text-neutral-500">Received</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-neutral-300">
                          <Server className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm text-white font-medium">Amazon Web Services</div>
                          <div className="text-xs text-neutral-500">Yesterday, 4:00 PM</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-white font-medium">-$240.50</div>
                        <div className="text-xs text-neutral-500">Auto-pay</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-neutral-300">
                          <Figma className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm text-white font-medium">Figma Subscription</div>
                          <div className="text-xs text-neutral-500">Nov 24, 2025</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-white font-medium">-$15.00</div>
                        <div className="text-xs text-neutral-500">Card ••4921</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-neutral-300">
                          <Coffee className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm text-white font-medium">Blue Bottle Coffee</div>
                          <div className="text-xs text-neutral-500">Nov 23, 2025</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-white font-medium">-$6.50</div>
                        <div className="text-xs text-neutral-500">Pending</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Actions and Card */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="glass-card rounded-xl p-6 border border-white/5">
                  <h4 className="text-base font-medium text-white mb-4">Quick Actions</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group">
                      <Send className="w-5 h-5 text-neutral-300 group-hover:text-white" />
                      <span className="text-xs text-neutral-400 group-hover:text-white">Send</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group">
                      <ArrowDownToLine className="w-5 h-5 text-neutral-300 group-hover:text-white" />
                      <span className="text-xs text-neutral-400 group-hover:text-white">Add</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group">
                      <RefreshCcw className="w-5 h-5 text-neutral-300 group-hover:text-white" />
                      <span className="text-xs text-neutral-400 group-hover:text-white">Swap</span>
                    </button>
                  </div>
                </div>

                {/* Active Card */}
                <div className="glass-card rounded-xl p-6 border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-medium text-white">Active Card</h4>
                    <MoreHorizontal className="w-4 h-4 text-neutral-500 cursor-pointer" />
                  </div>

                  <div className="relative bg-gradient-to-br from-neutral-800 to-black rounded-xl px-4 py-3 border border-white/10 shadow-lg overflow-hidden group cursor-pointer hover:border-indigo-500/30 transition-all">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                    <div className="flex justify-between items-start mb-12 relative z-10">
                      <Image
                        alt="Logo"
                        src="/logo.png"
                        height={40}
                        width={40}
                        className="w-10 h-10"
                      />
                      <ShieldCheckIcon className="w-5 h-5 text-neutral-500" />
                    </div>
                    <div className="text-lg font-mono text-neutral-300 tracking-widest mb-6">
                      •••• •••• •••• 4921
                    </div>
                    <div className="flex justify-between items-end relative z-10">
                      <div>
                        <div className="text-xs text-neutral-500 mb-1">Monthly Limit</div>
                        <div className="text-base text-white font-medium">$25,000</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-neutral-500 mb-1">Spent</div>
                        <div className="text-base text-white font-medium">$3,250</div>
                      </div>
                    </div>
                    <div className="w-full bg-neutral-800 h-1 mt-3 rounded-full overflow-hidden">
                      <div className="bg-indigo-500 h-full w-[65%]"></div>
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm font-medium transition-colors">
                    Create New Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
