declare module '*.svg' {
  import * as React from 'react'
  const SVGComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
  export default SVGComponent
  export const ReactComponent: typeof SVGComponent
}

declare module '*.svg?url' {
  const content: string
  export default content
}
