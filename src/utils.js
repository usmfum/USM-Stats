export const colours = [
  '#00ff44',
  '#aaff00',
  '#fbff00',
  '#ffe100',
  '#ffc400',
  '#ff9d00',
  '#ff8400',
  '#ff5900',
  '#ff0000'
]

export const colorisor = (actualNumber, ranges) => {
  if (actualNumber <= ranges[0]) {
    return colours[0]
  }
  else if (actualNumber > ranges[0] && actualNumber <= ranges[1]) {
    return colours[1]
  }
  else if (actualNumber > ranges[1] && actualNumber <= ranges[2]) {
    return colours[2]
  }
  else if (actualNumber > ranges[2] && actualNumber <= ranges[3]) {
    return colours[3]
  }
  else if (actualNumber > ranges[3] && actualNumber <= ranges[4]) {
    return colours[4]
  }
  else if (actualNumber > ranges[4] && actualNumber <= ranges[5]) {
    return colours[5]
  }
  else if (actualNumber > ranges[5] && actualNumber <= ranges[6]) {
    return colours[6]
  }
  else if (actualNumber > ranges[6] && actualNumber <= ranges[7]) {
    return colours[7]
  }
  else if (actualNumber > ranges[7]) {
    return colours[8]
  }
}

export const usmPriceHighlight = (price) => {
  const difference = Math.abs(1.00 - Number.parseFloat(price))
  const ranges = [.01, .02, .03, .04, .05, .06, .07, .08]
  return colorisor(difference, ranges)
}

export const debtRatioHighlight = (debtRatio) => {
  const ranges = [.5, .6, .65, .7, .725, .75, .775, .8]
  return colorisor(debtRatio, ranges)
}

export const oracleHighlight = (referencePrice, actualPrice) => {
  const difference = Math.abs(Number.parseFloat(referencePrice) - Number.parseFloat(actualPrice))
  const ranges = [2, 4, 6, 8, 10, 12, 14, 20]
  return colorisor(difference, ranges)
}

export const decimalPlaces = (numberString, decimals = 2) => {
  return Number(
    Number.parseFloat(numberString).toFixed(decimals)
  ).toLocaleString(undefined, {minimumFractionDigits: decimals, maximumFractionDigits: decimals})
}

export const toPercentage = (decimalString) => {
  const num = Number.parseFloat(decimalString) * 100
  return decimalPlaces(num.toString())
}

export const stringMul = (a, b) => {
  return (Number.parseFloat(a) * Number.parseFloat(b))
}
