import chroma from 'chroma-js'

export const adaptiveTextColor = (color: string) => {
  const luminance = chroma(color ?? '#ffffff').luminance()
  return luminance > 0.5 ? 'var(--black)' : '#ffffff'
}
