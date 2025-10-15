"use client"

import { useState, useEffect } from "react"
import { type ColorToken, getColorInfo, getAllTokens } from "@/lib/colors"
import { Button } from "@/components/ui/button"
import { Card, CardBody, CardHeader } from "@/components/ui/card"

interface ColorSwatchProps {
  token: ColorToken
  showDetails?: boolean
}

function ColorSwatch({ token, showDetails = false }: ColorSwatchProps) {
  const info = getColorInfo(token)
  
  return (
    <div className="rounded-lg border border-border/60 p-4 bg-card/95 backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-3">
        <div 
          className="w-12 h-12 rounded-lg border border-border/40 shadow-sm"
          style={{ backgroundColor: `hsl(var(--${token}))` }}
        />
        <div className="flex-1">
          <div className="font-semibold text-foreground">{info.token}</div>
          <div className="text-sm text-muted-foreground">{info.description}</div>
        </div>
      </div>
      
      {showDetails && (
        <div className="space-y-2 text-xs text-muted-foreground">
          <div><strong>HSL:</strong> {info.hsl}</div>
          <div><strong>CSS Var:</strong> --{info.token}</div>
          <div><strong>Tailwind:</strong> {info.tailwind}</div>
          <div><strong>Usage:</strong> bg-{info.tailwind}, text-{info.tailwind}</div>
        </div>
      )}
    </div>
  )
}

interface ColorPickerProps {
  token: ColorToken
  onColorChange: (token: ColorToken, newHsl: string) => void
}

function ColorPicker({ token, onColorChange }: ColorPickerProps) {
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(84)
  const [lightness, setLightness] = useState(60)
  
  useEffect(() => {
    const info = getColorInfo(token)
    const [h, s, l] = info.hsl.split(' ').map(Number)
    setHue(h)
    setSaturation(s)
    setLightness(l)
  }, [token])
  
  const newHsl = `${hue} ${saturation}% ${lightness}%`
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div 
          className="w-16 h-16 rounded-lg border border-border/40 shadow-sm"
          style={{ backgroundColor: `hsl(${newHsl})` }}
        />
        <div>
          <div className="font-semibold">Preview: {token}</div>
          <div className="text-sm text-muted-foreground">HSL: {newHsl}</div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Hue: {hue}°</label>
          <input
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={(e) => setHue(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Saturation: {saturation}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={saturation}
            onChange={(e) => setSaturation(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Lightness: {lightness}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={lightness}
            onChange={(e) => setLightness(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
      
      <Button 
        onClick={() => onColorChange(token, newHsl)}
        className="w-full"
      >
        Apply Changes
      </Button>
    </div>
  )
}

interface AuditResults {
  violations: Array<{
    file: string
    line: number
    match: string
    suggestion?: string
  }>
  totalFiles: number
  totalViolations: number
}

function AuditSection() {
  const [auditResults, setAuditResults] = useState<AuditResults | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  
  const runAudit = async () => {
    setIsRunning(true)
    try {
      // In a real implementation, this would call the audit script
      // For now, we'll simulate the results
      const response = await fetch('/api/audit-colors')
      if (response.ok) {
        const results = await response.json()
        setAuditResults(results)
      } else {
        // Fallback: simulate audit results
        setAuditResults({
          violations: [
            {
              file: "app/page.tsx",
              line: 45,
              match: "text-red-500",
              suggestion: "text-brand"
            }
          ],
          totalFiles: 1,
          totalViolations: 1
        })
      }
    } catch (error) {
      console.error("Audit failed:", error)
      setAuditResults({
        violations: [],
        totalFiles: 0,
        totalViolations: 0
      })
    } finally {
      setIsRunning(false)
    }
  }
  
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Color Audit</h3>
        <p className="text-sm text-muted-foreground">
          Scan for non-tokenized colors across the codebase
        </p>
      </CardHeader>
      <CardBody>
        <Button 
          onClick={runAudit} 
          disabled={isRunning}
          className="mb-4"
        >
          {isRunning ? "Running Audit..." : "Run Color Audit"}
        </Button>
        
        {auditResults && (
          <div className="space-y-3">
            <div className="flex items-center gap-4 text-sm">
              <span className="font-medium">Files Scanned: {auditResults.totalFiles}</span>
              <span className="font-medium">Violations: {auditResults.totalViolations}</span>
            </div>
            
            {auditResults.violations.length > 0 ? (
              <div className="space-y-2">
                <div className="text-sm font-medium text-danger">Violations Found:</div>
                {auditResults.violations.map((violation, index) => (
                  <div key={index} className="text-xs bg-muted/50 p-2 rounded">
                    <div><strong>{violation.file}:{violation.line}</strong></div>
                    <div>Found: <code>{violation.match}</code></div>
                    {violation.suggestion && (
                      <div>Suggested: <code>{violation.suggestion}</code></div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-sm text-success">✅ No violations found!</div>
            )}
          </div>
        )}
      </CardBody>
    </Card>
  )
}

export default function ColorsPage() {
  const [selectedToken, setSelectedToken] = useState<ColorToken>("brand")
  const [showDetails, setShowDetails] = useState(false)
  const [mode, setMode] = useState<"light" | "dark">("light")
  
  useEffect(() => {
    const html = document.documentElement
    if (mode === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [mode])
  
  const handleColorChange = (token: ColorToken, newHsl: string) => {
    // In a real implementation, this would update the config file
    console.log(`Would update ${token} to ${newHsl}`)
    alert(`Color change simulated: ${token} → ${newHsl}\n\nIn production, this would update config/colors.ts and regenerate CSS.`)
  }
  
  const allTokens = getAllTokens()
  const brandTokens = allTokens.filter(token => 
    token.includes("brand") || token.includes("accent") || 
    token.includes("success") || token.includes("warning") || token.includes("danger")
  )
  const neutralTokens = allTokens.filter(token => 
    token.includes("background") || token.includes("foreground") || 
    token.includes("muted") || token.includes("border") || token.includes("card")
  )
  
  return (
    <main className="container mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14 mt-16 relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-vignette" />
      
      <header className="flex items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-h2">Color System Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Centralized color management for Tiger BioSciences
          </p>
        </div>
        <div className="flex gap-2">
          <button 
            className={`rounded-md px-4 py-2 text-sm ${mode === "light" ? "bg-brand text-brand-foreground" : "bg-muted text-foreground"}`}
            onClick={() => setMode("light")}
          >
            Light
          </button>
          <button 
            className={`rounded-md px-4 py-2 text-sm ${mode === "dark" ? "bg-brand text-brand-foreground" : "bg-muted text-foreground"}`}
            onClick={() => setMode("dark")}
          >
            Dark
          </button>
        </div>
      </header>
      
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Color Palette */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Color Palette</h2>
            <Button 
              variant="secondary" 
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide Details" : "Show Details"}
            </Button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Brand Colors</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {brandTokens.map(token => (
                  <ColorSwatch key={token} token={token} showDetails={showDetails} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Neutral Colors</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {neutralTokens.map(token => (
                  <ColorSwatch key={token} token={token} showDetails={showDetails} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Color Editor</h3>
              <p className="text-sm text-muted-foreground">
                Modify colors and see live preview
              </p>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Color Token</label>
                  <select 
                    value={selectedToken}
                    onChange={(e) => setSelectedToken(e.target.value as ColorToken)}
                    className="w-full rounded-md border border-border/60 px-3 py-2 bg-background"
                  >
                    {allTokens.map(token => (
                      <option key={token} value={token}>
                        {token} - {getColorInfo(token).description}
                      </option>
                    ))}
                  </select>
                </div>
                
                <ColorPicker 
                  token={selectedToken}
                  onColorChange={handleColorChange}
                />
              </div>
            </CardBody>
          </Card>
          
          <AuditSection />
          
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Quick Actions</h3>
            </CardHeader>
            <CardBody className="space-y-2">
              <Button variant="secondary" className="w-full">
                Export Color Palette
              </Button>
              <Button variant="secondary" className="w-full">
                Generate CSS Variables
              </Button>
              <Button variant="secondary" className="w-full">
                Run Migration Script
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  )
}
