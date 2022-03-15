"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp //물음표는 필수아님
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
} // 블록구조 생성
const genesisBlock = new Block(0, "20202020202020020", "", "Hello", 12);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=3index.js.map