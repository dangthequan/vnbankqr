import { getBankByShortName, getBankByCode } from "./Bank.js";

export default class Consumer {
    merchantBankBin: string
    merchantBankNumber: string
    amount: number
    currency: string
    message: string
    
    constructor(merchantBankShortNameOrCode:string, merchantBankNumber:string, amount:number, currency:string, message:string) {
        let bank = getBankByShortName(merchantBankShortNameOrCode) || getBankByCode(merchantBankShortNameOrCode);
        if (bank == null || bank === undefined) {
            throw new Error("Bank not found");
        }
        this.merchantBankBin = bank.bin;
        this.merchantBankNumber = merchantBankNumber;
        this.amount = amount;
        this.currency = currency;
        this.message = message;
    }
}