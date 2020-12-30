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

export const oracleHighlight = (referencePrice, actualPrice) => {
  const difference = Math.abs(Number.parseFloat(referencePrice) - Number.parseFloat(actualPrice))
  if (difference <= 2) {
    return colours[0]
  }
  else if (difference > 2 && difference <= 4) {
    return colours[1]
  }
  else if (difference > 4 && difference <= 6) {
    return colours[2]
  }
  else if (difference > 6 && difference <= 8) {
    return colours[3]
  }
  else if (difference > 8 && difference <= 10) {
    return colours[4]
  }
  else if (difference > 10 && difference <= 12) {
    return colours[5]
  }
  else if (difference > 12 && difference <= 14) {
    return colours[6]
  }
  else if (difference > 14 && difference <= 20) {
    return colours[7]
  }
  else if (difference > 20) {
    return colours[8]
  }
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
