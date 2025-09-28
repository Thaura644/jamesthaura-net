import React from 'react'

interface ValuePropositionProps {
  content: string
}

export function ValueProposition({ content }: ValuePropositionProps) {
  // Parse the markdown-like content and convert to JSX
  const parseContent = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim())
    const elements: React.ReactElement[] = []
    
    lines.forEach((line, index) => {
      const trimmed = line.trim()
      
      if (trimmed.startsWith('🎯 **') || trimmed.startsWith('💡 **') || trimmed.startsWith('🚀 **') || trimmed.startsWith('🌍 **') || trimmed.startsWith('📈 **') || trimmed.startsWith('📱 **') || trimmed.startsWith('🤖 **')) {
        // Main section headers
        const emoji = trimmed.slice(0, 2)
        const boldText = trimmed.match(/\*\*(.*?)\*\*/)?.[1] || ''
        const remainingText = trimmed.replace(/^.*?\*\*.*?\*\*:?\s*/, '')
        
        elements.push(
          <div key={index} className="mb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span className="text-2xl">{emoji}</span>
              <span className="text-foreground">{boldText}</span>
            </h3>
            {remainingText && (
              <p className="text-muted-foreground leading-relaxed">{remainingText}</p>
            )}
          </div>
        )
      } else if (trimmed.startsWith('• **')) {
        // Bullet points with bold labels
        const boldText = trimmed.match(/\*\*(.*?)\*\*/)?.[1] || ''
        const remainingText = trimmed.replace(/^• \*\*.*?\*\*:\s*/, '')
        
        elements.push(
          <div key={index} className="mb-3 ml-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <span className="font-semibold text-foreground">{boldText}:</span>
                <span className="text-muted-foreground ml-2">{remainingText}</span>
              </div>
            </div>
          </div>
        )
      } else if (trimmed.startsWith('•')) {
        // Regular bullet points
        const text = trimmed.replace(/^•\s*/, '')
        
        elements.push(
          <div key={index} className="mb-2 ml-4">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
              <span className="text-muted-foreground">{text}</span>
            </div>
          </div>
        )
      } else if (trimmed) {
        // Regular paragraph text
        elements.push(
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {trimmed}
          </p>
        )
      }
    })
    
    return elements
  }
  
  return (
    <div className="space-y-2">
      {parseContent(content)}
    </div>
  )
}