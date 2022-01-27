import {Web3Provider} from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'


export const connector = new InjectedConnector({
    supportedChainIds: [1]
})




export const getLibrary = (provider: any) => {
    return new Web3Provider(provider)
}