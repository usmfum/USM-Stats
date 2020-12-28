export function networkLoaded(provider){
  return {
    type: 'NETWORK_LOADED',
    provider
  }
}

export function usmLoaded(usm) {
  return {
    type: 'USM_LOADED',
    usm
  }
}
