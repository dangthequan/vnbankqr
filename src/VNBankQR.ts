import {FieldID, ProviderFieldID, ConsumerFieldID, AdditionDataFieldID} from './constants/Fields.js';
import {addField, checksum, padStart} from './utils/Utils.js';
import Country from './constants/Country.js';
import Currency from './constants/Currency.js';
import Transaction from './models/Transaction.js';

class VNBankQR {    
    version: string
    initMethod: string
    country: string
    currency: string
    transaction?: Transaction
    
    constructor(configs:{[key: string]: any}) {
        this.version = configs?.version || "01";
        this.initMethod = configs?.initMethod || "11";
        this.country = configs?.country || Country.VIET_NAM;
        this.currency = configs?.currency || Currency.VND;
    }
    
    generate(transaction:Transaction) {
        let qrData = ""
        this.transaction = transaction;
        
        // Add version
        qrData = addField(qrData, FieldID.VERSION, this.version);
        // Add initations method
        qrData = addField(qrData, FieldID.INIT_METHOD, this.initMethod);
        // Add merchant info
        qrData = this.addMerchantFields(qrData, transaction);
        // Add transaction
        qrData = this.addTransactionFields(qrData, transaction);
        // Add provider
        qrData = this.addProviderFields(qrData, transaction);
        // Add addition data
        qrData = this.addAdditionDataFields(qrData, transaction)
        // Add crc checksum
        qrData = this.addChecksumFields(qrData);
        
        return qrData;
    }
    
    addAdditionDataFields(qrData:string, transaction:Transaction) {
        let additionObj = transaction?.additionData;
        let consumer = transaction?.consumer;
        if (additionObj) {
            let newValue = "";
            let additionData = "";
            if(additionObj?.billNumber) {
                additionData = addField(additionData, AdditionDataFieldID.BILL_NUMBER, additionObj?.billNumber)
            }
            if(additionObj?.mobileNumber) {
                additionData = addField(additionData, AdditionDataFieldID.MOBILE_NUMBER, additionObj?.mobileNumber)
            }
            if(additionObj?.storeLabel) {
                additionData = addField(additionData, AdditionDataFieldID.STORE_LABEL, additionObj?.storeLabel)
            }
            if(additionObj?.loyalNumber) {
                additionData = addField(additionData, AdditionDataFieldID.LOYALTY_NUMBER, additionObj?.loyalNumber)
            }
            if(additionObj?.referenceLabel) {
                additionData = addField(additionData, AdditionDataFieldID.REFERENCE_LABEL, additionObj?.referenceLabel)
            }
            if(additionObj?.customerLabel) {
                additionData = addField(additionData, AdditionDataFieldID.CUSTOMER_LABEL, additionObj?.customerLabel)
            }
            if(additionObj?.terminalLabel) {
                additionData = addField(additionData, AdditionDataFieldID.TERMINAL_LABEL, additionObj?.terminalLabel)
            }
            if(additionObj?.transactionPurpose || consumer?.message) {
                additionData = addField(additionData, AdditionDataFieldID.TRANSACTION_PURPOSE, additionObj?.transactionPurpose || consumer?.message)
            }
            if(additionObj?.additionDataRequest) {
                additionData = addField(additionData, AdditionDataFieldID.ADDITION_CONSUMER_DATA_REQUEST, additionObj?.additionDataRequest)
            }
            if (additionData.length > 0) {
                newValue = addField(qrData, FieldID.ADDITION_DATA, additionData)
                return newValue;
            }
        }
        return qrData;
    }
    
    addTransactionFields(qrData:string, transaction:Transaction) {
        let consumer = transaction.consumer
        let currency = consumer?.currency || this.currency;
        let amount = consumer.amount;
        
        // Add currency
        let newValue = addField(qrData, FieldID.CURRENCY, currency);
        // Add transaction amount
        newValue = addField(newValue, FieldID.TRANSACTION_AMOUNT, amount+"");
        // // Add provider name
        // newValue = addField(newValue, FieldID.TRANSACTION_FEE_TYPE, transaction.fee.type)
        // // Add transaction fee
        // newValue = addField(newValue, FieldID.TRANSACTION_FEE, transaction.fee.fee)
        // // Add transaction fee in percentage
        // newValue = addField(newValue, FieldID.TRANSACTION_FEE_IN_PERCENTAGE, transaction.fee.feeInPercentage)
        return newValue;
    }
    
    addProviderFields(qrData:string, transaction:Transaction) {
        let provider = transaction.provider;
        // Add country code
        let newValue = addField(qrData, FieldID.COUNTRY_CODE, provider.country);
        // Add provider name
        newValue = addField(newValue, FieldID.PROVIDER_NAME, provider.name)
        // Add provider city
        newValue = addField(newValue, FieldID.PROVIDER_CITY, provider.city)
        return newValue
    }
    
    addMerchantFields(qrData:string, transaction:Transaction) {
        let consumer = transaction.consumer;
        let provider = transaction.provider;
        
        let receiverInfo = ""
        let providerInfo = ""
        
        receiverInfo = addField(receiverInfo, ConsumerFieldID.BANK_BIN, consumer.merchantBankBin);
        receiverInfo = addField(receiverInfo, ConsumerFieldID.BANK_NUMBER, consumer.merchantBankNumber);

        providerInfo = addField(providerInfo, ProviderFieldID.GUID, provider.guid);
        providerInfo = addField(providerInfo, ProviderFieldID.DATA, receiverInfo);
        providerInfo = addField(providerInfo, ProviderFieldID.SERVICE, provider.service);
        
        let newValue = addField(qrData, provider.id, providerInfo);
        newValue = addField(newValue, FieldID.PROVIDER_CATEGORY_CODE, provider.category)
        
        return newValue;
    }
    
    addChecksumFields(qrData:string) {
        let crcChecksum = checksum(qrData+FieldID.CRC+"04");
        crcChecksum = padStart(crcChecksum, 4);
        // Add crc checksum
        let newValue = addField(qrData, FieldID.CRC, crcChecksum);
        return newValue
    }
    
}

export default VNBankQR;