"use client"

import Prism from "prismjs"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-jsx"
import "prismjs/themes/prism.css"
import { useEffect, useRef } from "react"

export function CodeBlock() {
  const codeRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [])

  const code = `import { initOnramp } from '@wallet/pay.js';

initOnramp({
  target: '*pay with coinbank*',
  appId: 'your app id',
  widgetParameters: {
    destinationWallets: {
      address: '0x32523X8534ds4...',
      blockchains: ['ethereum', 'bitcoin', 'xrp', 'solana']
    }
  }
})`

  return (
    <div className="font-mono text-sm">
      <pre ref={codeRef} className="language-javascript">
        <code>{code}</code>
      </pre>
    </div>
  )
}

