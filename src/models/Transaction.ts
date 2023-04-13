import Consumer from "./Consumer.js";
import Provider from "./Provider.js";
import AdditionData from "./AdditionData.js";

export default class Transaction {
    consumer: Consumer
    provider: Provider
    additionData?: AdditionData
    
    constructor(consumer: Consumer, provider: Provider, additionData?:AdditionData) {
        this.consumer = consumer;
        this.provider = provider;
        this.additionData = additionData;
    }
}