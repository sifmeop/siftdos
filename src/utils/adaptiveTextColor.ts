import chroma from 'chroma-js'

export const adaptiveTextColor = (color: string) => {
  const luminance = chroma(color).luminance()

  return luminance > 0.5 ? '#252525' : '#eeeeee'
}
