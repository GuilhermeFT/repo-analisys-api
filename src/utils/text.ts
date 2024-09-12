export const removeIndentation = (text: string) => {
  // Remove quebras de linha e múltiplos espaços em branco
  return text.replace(/\n+/g, '').replace(/\s+/g, ' ').trim()
}
