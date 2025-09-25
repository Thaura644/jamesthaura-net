'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, CreditCard, X, Check } from 'lucide-react'

interface PaymentBlockProps {
  projectTitle: string
  projectId: string
  onClose: () => void
}

export function PaymentBlock({ projectTitle, onClose }: PaymentBlockProps) {
  const [selectedPlan, setSelectedPlan] = useState<'source' | 'complete'>('source')

  const plans = {
    source: {
      title: 'Source Code Access',
      price: '$1999',
      description: 'Get access to the complete source code',
      features: [
        'Complete source code',
        'Documentation & README',
        'Installation instructions',
        'Basic setup guide'
      ]
    },
    complete: {
      title: 'Complete Package',
      price: '$7999',
      description: 'Source code + deployment guide + 30min consultation',
      features: [
        'Complete source code',
        'Detailed documentation',
        'Deployment guide',
        'Environment setup scripts',
        '30-minute consultation call',
        'Email support for 30 days'
      ]
    }
  }

  const handlePurchase = () => {
    // This would integrate with your payment processor
    // For now, we'll show a contact message
    alert(`To purchase ${plans[selectedPlan].title} for ${projectTitle}, please contact me via WhatsApp or email. Payment can be made via PayPal, M-Pesa, or bank transfer.`)
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-card border border-border rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Premium Content</h3>
              <p className="text-sm text-muted-foreground">{projectTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message */}
        <div className="bg-muted/50 rounded-lg p-4 mb-6">
          <p className="text-sm text-muted-foreground">
            🔒 This project's source code is available as a premium offering. 
            Choose your preferred package below to get access to the complete codebase, 
            documentation, and additional resources.
          </p>
        </div>

        {/* Plan Selection */}
        <div className="space-y-4 mb-6">
          {(Object.keys(plans) as Array<keyof typeof plans>).map((planKey) => {
            const plan = plans[planKey]
            const isSelected = selectedPlan === planKey
            
            return (
              <div
                key={planKey}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  isSelected 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedPlan(planKey)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-primary bg-primary' : 'border-muted-foreground'
                    }`}>
                      {isSelected && <Check className="w-2 h-2 text-white" />}
                    </div>
                    <div>
                      <h4 className="font-semibold">{plan.title}</h4>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary">{plan.price}</div>
                </div>
                
                <ul className="space-y-1 ml-7">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="w-3 h-3 text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handlePurchase}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white dark:text-black hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <CreditCard className="w-4 h-4" />
            Get Access - {plans[selectedPlan].price}
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 border border-border hover:bg-accent hover:text-accent-foreground rounded-lg font-medium transition-colors"
          >
            Cancel
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t text-center">
          <p className="text-xs text-muted-foreground mb-2">
            💳 Secure payment via PayPal, M-Pesa, or Bank Transfer
          </p>
          <p className="text-xs text-muted-foreground">
            Questions? <span className="text-primary">Contact me directly</span> for custom arrangements
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}