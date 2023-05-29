import React, { useEffect } from 'react'

type OptionChainHeaderProps = {
    isLtp: boolean

}

const OptionChainHeader = (props: OptionChainHeaderProps) => {


    useEffect(() => { }, [])
    return (

        <div className='justify-center flex'>
            <div>
                <div className="flex items-start justify-center p-2.5 bg-gray-100 border border-gray-50">
                    <p className="text-base font-medium leading-normal text-gray-900">CALL </p>
                </div>
                <div >
                    <OptionChainSubHeader value={"OI"} />
                    <OptionChainSubHeader value={"BID"} />
                    <OptionChainSubHeader value={"ASK"} />
                    <OptionChainSubHeader value={"LTP"} />
                </div>
            </div>
            <div className="inline-flex items-center justify-center w-20 h-20 p-2.5 bg-gray-50">
                <p className="text-base font-medium leading-normal text-center text-gray-900">Strike<br />Price</p>
            </div>
            <div>
                <div className="flex items-start justify-center p-2.5 bg-gray-100 border border-gray-50">
                    <p className="text-base font-medium leading-normal text-gray-900">PUT </p>
                </div>
                <div >
                    <OptionChainSubHeader value={"LTP"} />
                    <OptionChainSubHeader value={"ASK"} />
                    <OptionChainSubHeader value={"BID"} />
                    <OptionChainSubHeader value={"OI"} />

                </div>
            </div>

        </div>
    )
}

export default OptionChainHeader

type OptionChainSubHeaderProps = { value: String }

function OptionChainSubHeader(props: OptionChainSubHeaderProps) {
    return <div className="inline-flex items-center justify-center w-20 h-8 p-0.5 bg-gray-100 border border-gray-50">
        <p className="text-sm font-medium leading-tight text-gray-500">{props.value}</p>
    </div>
}
