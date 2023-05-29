// To parse this data:
//
//   import { Convert, OptionChainResponse } from "./file";
//
//   const optionChainResponse = Convert.toOptionChainResponse(json);

export interface OptionChainResponse {
    success?: boolean;
    message?: string;
    data?: Data;
}

export interface Data {
    optionChain?: OptionChain[];
}

export interface OptionChain {
    ce?: OptionChainDetails;
    pe?: OptionChainDetails;
    strikePrice?: number;
}

export interface OptionChainDetails {
    instrumentId?: string;
    instrumentSymbol?: string;
    brokerSymbol?: string;
    segmentType?: SegmentType;
    exchange?: Exchange;
    optionType?: OptionType;
    lotSize?: number;
    ltp?: number | null;
    oi?: number | null;
    prevClose?: null;
    prevOi?: null;
}

export enum Exchange {
    Nse = "NSE",
}

export enum OptionType {
    Ce = "CE",
    PE = "PE",
}

export enum SegmentType {
    Options = "OPTIONS",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toOptionChainResponse(json: string): OptionChainResponse {
        return JSON.parse(json);
    }

    public static optionChainResponseToJson(value: OptionChainResponse): string {
        return JSON.stringify(value);
    }
}
