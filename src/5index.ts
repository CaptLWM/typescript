import * as CryptoJS from "crypto-js";
class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  //block 클래스 안에서 자유롭게 사용할 method
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string => CryptoJS.SHA256(index + previousHash + data).toString();

  //생성자
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp?: number //물음표는 필수아님
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
} // 블록구조 생성

const genesisBlock: Block = new Block(0, "20202020202020020", "", "Hello", 12);

let blockchain: [Block] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain; // 블록체인 얻고

const getLatestBlock = (): Block => blockchain[blockchain.length - 1]; //최신 블록체인 획득

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previosBlock: Block = getLatestBlock();
  const newIndex: number = previosBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previosBlock.hash,
    newTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previosBlock.hash,
    data,
    newTimestamp
  );

  return newBlock;
};
console.log(createNewBlock("hello"), createNewBlock("bye bye"));
export {};
