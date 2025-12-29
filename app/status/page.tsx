'use client'

import { CheckCircle, AlertCircle, XCircle, Clock, Loader2, TrendingUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface Service {
  name: string
  description: string
  status: 'operational' | 'degraded' | 'outage'
  uptime: number
  responseTime: number
  lastChecked: string
}

interface IncidentUpdate {
  timestamp: string
  status: string
  message: string
}

interface Incident {
  id: string
  title: string
  description: string
  severity: 'minor' | 'major' | 'critical'
  status: string
  affectedServices: string[]
  startTime: string
  endTime?: string
  duration: string
  updates: IncidentUpdate[]
}

interface StatusData {
  overall: string
  uptime: number
  services: Service[]
  incidents: {
    current: Incident[]
    past: Incident[]
  }
  timestamp: string
}

export default function Status() {
  const [statusData, setStatusData] = useState<StatusData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const response = await fetch(`${apiUrl}/v1/status`)

        if (!response.ok) {
          throw new Error('Failed to fetch status')
        }

        const data = await response.json()
        setStatusData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchStatus()
    // Refresh status every 10 minutes
    const interval = setInterval(fetchStatus, 600000)
    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
      case 'degraded':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20'
      case 'outage':
        return 'text-red-400 bg-red-500/10 border-red-500/20'
      default:
        return 'text-neutral-400 bg-neutral-500/10 border-neutral-500/20'
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400 bg-red-500/10 border-red-500/20'
      case 'major':
        return 'text-orange-400 bg-orange-500/10 border-orange-500/20'
      case 'minor':
        return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20'
      default:
        return 'text-neutral-400 bg-neutral-500/10 border-neutral-500/20'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="min-h-screen bg-[#0A0A14]">
      {/* Main Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">
              System Status
            </h1>
            <p className="text-neutral-400 text-lg font-light">
              Real-time status of all StyxPay services
            </p>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-indigo-400" />
            </div>
          ) : error ? (
            <div className="glass-card rounded-2xl p-8 border border-red-500/20 bg-red-500/5">
              <p className="text-red-400 text-center">Failed to load status: {error}</p>
            </div>
          ) : statusData ? (
            <>
              {/* Overall Status */}
              <div className="glass-card rounded-2xl p-8 border border-white/10 mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <h2 className="text-xl font-medium text-white capitalize">
                        All Systems {statusData.overall}
                      </h2>
                      <p className="text-sm text-neutral-400 mt-1">
                        Last updated: {formatDate(statusData.timestamp)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2.5 text-emerald-400 mb-1">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-2xl font-display font-medium">{statusData.uptime}%</span>
                    </div>
                    <p className="text-xs text-neutral-500">Uptime</p>
                  </div>
                </div>
              </div>

              {/* Current Incidents */}
              {statusData.incidents.current.length > 0 && (
                <div className="glass-card rounded-2xl p-8 border border-amber-500/20 bg-amber-500/5 mb-8">
                  <h2 className="text-xl font-medium text-white mb-4">Current Incidents</h2>
                  <div className="space-y-4">
                    {statusData.incidents.current.map((incident) => (
                      <div
                        key={incident.id}
                        className="p-4 bg-black/30 border border-white/10 rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-white font-medium">{incident.title}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium capitalize border ${getSeverityColor(incident.severity)}`}>
                            {incident.severity}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-400 mb-3">{incident.description}</p>
                        <div className="flex gap-2">
                          {incident.affectedServices.map((service) => (
                            <span
                              key={service}
                              className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-neutral-300"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tabs for Services and Incident History */}
              <Tabs defaultValue="services" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="incidents">Incident History</TabsTrigger>
                </TabsList>

                {/* Services Tab */}
                <TabsContent value="services">
                  <div className="glass-card rounded-2xl p-8 border border-white/10">
                    <h2 className="text-xl font-medium text-white mb-6">Services</h2>
                    <div className="space-y-4">
                      {statusData.services.map((service) => (
                        <div
                          key={service.name}
                          className="p-4 glass-card border border-white/10 rounded-lg hover:bg-black/40 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-start gap-3 flex-1">
                              <div className="flex-1">
                                <h3 className="text-white font-medium mb-1">{service.name}</h3>
                                <p className="text-sm text-neutral-300">{service.description}</p>
                              </div>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-medium capitalize border ${getStatusColor(service.status)}`}>
                              {service.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-6 mt-3 text-sm text-neutral-400">
                            <div className="flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              <span>{service.uptime}% uptime</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{service.responseTime}ms response</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Incident History Tab */}
                <TabsContent value="incidents">
                  <div className="glass-card rounded-2xl p-8 border border-white/10">
                    <h2 className="text-xl font-medium text-white mb-6">Incident History</h2>
                    {statusData.incidents.past.length > 0 ? (
                      <Accordion type="single" collapsible className="space-y-4 w-full">
                        {statusData.incidents.past.map((incident) => (
                          <AccordionItem key={incident.id} value={incident.id} className="border-0">
                            <AccordionTrigger>
                              <div className="flex items-start justify-between w-full pr-4">
                                <div className="flex-1 text-left">
                                  <h3 className="text-white mb-2">{incident.title}</h3>
                                  <div className="flex items-center gap-4 text-xs text-neutral-500">
                                    <span>{formatDate(incident.startTime)}</span>
                                    <span>•</span>
                                    <span>Duration: {incident.duration}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                  <span className={`px-2 py-1 rounded text-xs font-medium capitalize border ${getSeverityColor(incident.severity)}`}>
                                    {incident.severity}
                                  </span>
                                  <span className="px-2 py-1 rounded text-xs font-medium capitalize border text-neutral-400 bg-neutral-500/10 border-neutral-500/20">
                                    {incident.status}
                                  </span>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pt-4">
                                <p className="text-sm text-neutral-400 mb-4">{incident.description}</p>
                                <div className="flex gap-2 mb-4 flex-wrap">
                                  {incident.affectedServices.map((service) => (
                                    <span
                                      key={service}
                                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-neutral-300"
                                    >
                                      {service}
                                    </span>
                                  ))}
                                </div>
                                <div className="space-y-3">
                                  <h4 className="text-sm font-medium text-white">Updates</h4>
                                  {incident.updates.map((update, index) => (
                                    <div key={index} className="flex gap-3">
                                      <div className="flex-shrink-0 w-1 h-1 rounded-full bg-indigo-400 mt-2"></div>
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                          <span className="text-xs text-neutral-500">
                                            {formatDate(update.timestamp)}
                                          </span>
                                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium capitalize border ${getStatusColor(update.status)}`}>
                                            {update.status}
                                          </span>
                                        </div>
                                        <p className="text-sm text-neutral-400">{update.message}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    ) : (
                      <p className="text-neutral-400 text-center py-8">No past incidents</p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
