import { ethers } from 'ethers'

const provider = new ethers.JsonRpcProvider(process.env.WEB3_PROVIDER_URL)

export default provider
