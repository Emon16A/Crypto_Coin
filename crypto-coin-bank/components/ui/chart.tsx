"use client"

import { cn } from "@/components/lib/utils"
import * as Tooltip from "@radix-ui/react-tooltip"
import type { LucideIcon } from "lucide-react"
import * as React from "react"

// Types
export interface ChartConfig {
  [key: string]: {
    label: string
    color?: string
    icon?: LucideIcon
  }
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

interface ChartTooltipProps {
  content?: React.ReactNode
  children?: React.ReactNode
}

interface ChartTooltipContentProps {
  active?: boolean
  payload?: Array<{
    value: number
    name: string
    dataKey: string
    payload: Record<string, any>
  }>
  label?: string
  formatter?: (value: number, name: string, props: any) => React.ReactNode
  labelFormatter?: (label: string) => React.ReactNode
  hideLabel?: boolean
  indicator?: "dot" | "line"
  formatValue?: (value: number) => string
}

// Chart Container Component
export function ChartContainer({ config, children, className, ...props }: ChartContainerProps) {
  // Create CSS variables for chart colors
  const style = React.useMemo(() => {
    return Object.entries(config).reduce(
      (acc, [key, value]) => {
        if (value.color) {
          acc[`--color-${key}`] = value.color
        }
        return acc
      },
      {} as Record<string, string>
    )
  }, [config])

  return (
    <div className={cn("chart-container", className)} style={style} {...props}>
      {children}
    </div>
  )
}

// ✅ Fixed Chart Tooltip Component (using Radix UI)
export function ChartTooltip({ content, children }: ChartTooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="rounded-md bg-black text-white p-2 text-sm shadow-md"
            side="top"
            align="center"
          >
            {content}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

// Chart Tooltip Content Component
export function ChartTooltipContent({
  active,
  payload,
  label,
  formatter,
  labelFormatter,
  hideLabel = false,
  indicator = "dot",
  formatValue,
}: ChartTooltipContentProps) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-md">
      {!hideLabel && label && (
        <div className="px-3 py-1.5 text-xs text-muted-foreground">
          {labelFormatter ? labelFormatter(label) : label}
        </div>
      )}
      <div className="px-3 py-1.5">
        {payload.map((item, index) => {
          const dataKey = item.dataKey || ""
          const name = item.name || dataKey
          const color = `var(--color-${dataKey})`

          return (
            <div key={`item-${index}`} className="flex items-center py-1">
              {indicator === "dot" && <div className="mr-2 h-2 w-2 rounded-full" style={{ backgroundColor: color }} />}
              {indicator === "line" && <div className="mr-2 h-2 w-3 rounded-sm" style={{ backgroundColor: color }} />}
              <div className="flex w-full items-center justify-between gap-2">
                {formatter ? (
                  formatter(item.value, name, item)
                ) : (
                  <>
                    <span className="text-xs font-medium text-muted-foreground">{name}</span>
                    <span className="text-xs font-medium">{formatValue ? formatValue(item.value) : item.value}</span>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
