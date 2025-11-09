'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, User, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

interface FormState {
  name: string
  email: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export default function WorkshopRegistrationForm() {
  const [formData, setFormData] = useState<FormState>({ name: '', email: '' })
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading' })

    try {
      const response = await fetch('/api/workshop-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Zapisałeś się na warsztat! Sprawdź swoją skrzynkę email.',
        })
        setFormData({ name: '', email: '' })
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Wystąpił błąd. Spróbuj ponownie.',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Błąd połączenia. Sprawdź swoje połączenie internetowe.',
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status.type !== 'idle') setStatus({ type: 'idle' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
            Imię
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-matrix-cyan" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status.type === 'loading'}
              className="w-full pl-12 pr-4 py-3 bg-neural-dark/50 border border-matrix-cyan/30 rounded-lg
                       text-white placeholder-gray-500 focus:outline-none focus:border-matrix-cyan
                       focus:ring-2 focus:ring-matrix-cyan/20 transition-all disabled:opacity-50"
              placeholder="Twoje imię"
              aria-label="Imię"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
            Adres email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-matrix-cyan" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status.type === 'loading'}
              className="w-full pl-12 pr-4 py-3 bg-neural-dark/50 border border-matrix-cyan/30 rounded-lg
                       text-white placeholder-gray-500 focus:outline-none focus:border-matrix-cyan
                       focus:ring-2 focus:ring-matrix-cyan/20 transition-all disabled:opacity-50"
              placeholder="twoj@email.com"
              aria-label="Adres email"
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status.type === 'loading' || status.type === 'success'}
          whileHover={status.type === 'idle' || status.type === 'error' ? { scale: 1.02 } : {}}
          whileTap={status.type === 'idle' || status.type === 'error' ? { scale: 0.98 } : {}}
          className="w-full relative group/btn overflow-hidden rounded-lg bg-gradient-to-r from-matrix-cyan to-matrix-purple
                   p-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="relative bg-neural-dark rounded-lg px-6 py-3 group-hover/btn:bg-opacity-80 transition-all">
            <div className="flex items-center justify-center gap-2">
              {status.type === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
              {status.type === 'success' && <CheckCircle2 className="w-5 h-5 text-matrix-cyan" />}
              <span className="font-semibold text-lg gradient-text">
                {status.type === 'loading'
                  ? 'Zapisywanie...'
                  : status.type === 'success'
                    ? 'Zapisano!'
                    : 'Zapisz się na warsztat'}
              </span>
            </div>
          </div>
        </motion.button>

        {/* Status Messages */}
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-3 p-4 rounded-lg ${
              status.type === 'success'
                ? 'bg-matrix-cyan/10 border border-matrix-cyan/30'
                : 'bg-red-500/10 border border-red-500/30'
            }`}
          >
            {status.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-matrix-cyan flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            )}
            <p
              className={`text-sm ${status.type === 'success' ? 'text-matrix-cyan' : 'text-red-400'}`}
            >
              {status.message}
            </p>
          </motion.div>
        )}

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center">
          Zapisując się, wyrażasz zgodę na przetwarzanie danych osobowych w celu uczestnictwa w
          warsztacie.
        </p>
      </form>
    </motion.div>
  )
}
