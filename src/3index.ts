class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

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
console.log(blockchain);
export {};
