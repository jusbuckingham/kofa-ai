import { ethers } from 'ethers'

export function connectToBlockchain() {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.WEB3_PROVIDER_URL
  )
  return provider
}
