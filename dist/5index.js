"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    //생성자
    constructor(index, hash, previousHash, data, timestamp //물음표는 필수아님
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
} // 블록구조 생성
//block 클래스 안에서 자유롭게 사용할 method
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + data).toString();
const genesisBlock = new Block(0, "20202020202020020", "", "Hello", 12);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain; // 블록체인 얻고
const getLatestBlock = () => blockchain[blockchain.length - 1]; //최신 블록체인 획득
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previosBlock = getLatestBlock();
    const newIndex = previosBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previosBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previosBlock.hash, data, newTimestamp);
    return newBlock;
};
console.log(createNewBlock("hello"), createNewBlock("bye bye"));
//# sourceMappingURL=5index.js.map