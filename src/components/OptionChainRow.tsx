import React from 'react'
import { OptionChain } from '../models/option_chain_response'

type OptionChainRowProps = {
    optionChain: OptionChain
}


const OptionChainRow = (props: OptionChainRowProps) => {
    return (
        <div className='flex justify-center '>
            {OptionChainRowValue()}
            {OptionChainRowValue()}
            {OptionChainRowValue()}
            {OptionChainRowValue()}
            {StrikePriceValue()}
            {OptionChainRowValue()}
            {OptionChainRowValue()}
            {OptionChainRowValue()}
            {OptionChainRowValue()}
        </div>
    )
}

export default OptionChainRow

function StrikePriceValue() {
    return <div className="inline-flex items-center justify-center w-20 h-12 p-0.5 bg-gray-800 border border-green-500">
        <div className="flex items-start justify-start px-2 py-1 bg-gray-700 border rounded-full border-green-500">
            <p className="text-sm font-medium leading-tight text-green-400">34500</p>
        </div>
    </div>
}

function OptionChainRowValue() {
    return <div className="inline-flex flex-col space-y-1 items-center justify-center w-20 h-12 p-0.5 bg-gray-900 border-y border-red-400">
        <p className="text-xs leading-none text-purple-300">579.00</p>
        <p className="text-xs leading-none text-red-400">(-2%)</p>
    </div>
}
