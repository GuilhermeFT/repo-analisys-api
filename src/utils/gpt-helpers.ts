export const getEstimatedGPTTokens = (text: string) => {
  console.log(text)

  return text.split(' ').length
}
