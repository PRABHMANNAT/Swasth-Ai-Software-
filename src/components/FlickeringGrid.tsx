import { useEffect, useRef, useCallback } from "react"

interface FlickeringGridProps {
  squareSize?: number
  gridGap?: number
  color?: string
  maxOpacity?: number
  flickerChance?: number
  className?: string
  width?: number
  height?: number
}

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  color = "#6B7280",
  maxOpacity = 0.5,
  flickerChance = 0.1,
  className,
  width,
  height,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const opacitiesRef = useRef<Float32Array | null>(null)

  // Parse hex color → [r, g, b]
  const parseColor = useCallback((hex: string): [number, number, number] => {
    const c = hex.replace("#", "")
    if (c.length === 3) {
      return [
        parseInt(c[0] + c[0], 16),
        parseInt(c[1] + c[1], 16),
        parseInt(c[2] + c[2], 16),
      ]
    }
    return [
      parseInt(c.slice(0, 2), 16),
      parseInt(c.slice(2, 4), 16),
      parseInt(c.slice(4, 6), 16),
    ]
  }, [])

  const setupCanvas = useCallback((canvas: HTMLCanvasElement, w: number, h: number) => {
    const dpr = window.devicePixelRatio || 1
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    const ctx = canvas.getContext("2d")!
    ctx.scale(dpr, dpr)

    const cols = Math.floor((w + gridGap) / (squareSize + gridGap))
    const rows = Math.floor((h + gridGap) / (squareSize + gridGap))
    const total = cols * rows

    opacitiesRef.current = new Float32Array(total)
    for (let i = 0; i < total; i++) {
      opacitiesRef.current[i] = Math.random() * maxOpacity
    }

    return { ctx, cols, rows, total }
  }, [squareSize, gridGap, maxOpacity])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const [r, g, b] = parseColor(color)

    let cols = 0, rows = 0, total = 0
    let ctx: CanvasRenderingContext2D

    const init = () => {
      const w = width ?? container.offsetWidth
      const h = height ?? container.offsetHeight
      const res = setupCanvas(canvas, w, h)
      ctx = res.ctx
      cols = res.cols
      rows = res.rows
      total = res.total
    }

    init()

    const tick = () => {
      if (!ctx || !opacitiesRef.current) return
      const opacities = opacitiesRef.current

      // Randomise opacities
      for (let i = 0; i < total; i++) {
        if (Math.random() < flickerChance) {
          opacities[i] = Math.random() * maxOpacity
        }
      }

      const w = canvas.width / (window.devicePixelRatio || 1)
      const h = canvas.height / (window.devicePixelRatio || 1)
      ctx.clearRect(0, 0, w, h)

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const idx = row * cols + col
          const opacity = opacities[idx]
          ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`
          ctx.fillRect(
            col * (squareSize + gridGap),
            row * (squareSize + gridGap),
            squareSize,
            squareSize,
          )
        }
      }

      animRef.current = requestAnimationFrame(tick)
    }

    tick()

    const onResize = () => {
      cancelAnimationFrame(animRef.current)
      init()
      tick()
    }

    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(container)

    return () => {
      cancelAnimationFrame(animRef.current)
      resizeObserver.disconnect()
    }
  }, [squareSize, gridGap, color, maxOpacity, flickerChance, width, height, parseColor, setupCanvas])

  return (
    <div ref={containerRef} className={className} style={{ width: "100%", height: "100%" }}>
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  )
}
