function create(): number {
  return 2
}
const create2 = (): string => "Hello world"
console.log(create())
console.log(create2())

const tambah = (a: number,b: number): number => a + b
const kali = (a: number, b: number): number => a * b

const kurang = (a: number, b:number): string => {
  return `hasilnya adalah ${a - b}`
}

console.log(kurang(20,10))
