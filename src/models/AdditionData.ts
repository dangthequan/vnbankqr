export default class AdditionData {
    billNumber?: string
    mobileNumber?: string
    storeLabel?: string
    loyalNumber?: string
    referenceLabel?: string
    customerLabel?: string
    terminalLabel?: string
    transactionPurpose?: string
    additionDataRequest?: string
    
    constructor(params:{[key: string]: any}) {
        this.billNumber = params?.billNumber;
        this.mobileNumber = params?.mobileNumber;
        this.storeLabel = params?.storeLabel;
        this.loyalNumber = params?.loyaltyNumber;
        this.referenceLabel = params?.referenceLabel;
        this.customerLabel = params?.customerLabel;
        this.terminalLabel = params?.terminalLabel;
        this.transactionPurpose = params?.transactionPurpose;
        this.additionDataRequest = params?.additionDataRequest;
    }

}