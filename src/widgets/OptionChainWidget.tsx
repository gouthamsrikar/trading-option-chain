import React from 'react'
import OptionChainHeader from '../components/OptionChainHeader'
import OptionChainRow from '../components/OptionChainRow'
import { OptionChain } from '../models/option_chain_response'
import OptionChainStrikePriceIndicator from '../components/OptionChainStrikePriceIndicator'

const OptionChainWidget = () => {
    return (
        <div className='border-black border  w-auto bg-black'>
            <OptionChainHeader isLtp={true} />
            <div className='relative'>
                <div className='flex transition duration-300 justify-center absolute top-[200px]'>
                    <OptionChainStrikePriceIndicator />
                </div>
                {
                    [
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                    ].map((item) =>
                        <OptionChainRow optionChain={{
                            ce: { ltp: 12 },
                            pe: { ltp: 12 },
                            strikePrice: 12
                        }} />
                    )
                }
            </div>

        </div>
    )
}

export default OptionChainWidget