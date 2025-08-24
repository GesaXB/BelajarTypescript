type Friend = {
  name: string
  isKind: boolean
}

type Woman = string
type Man = boolean

type human = Woman | Man

let person: human
person = "Geisha Lutfan Waldhani"


let myFriend: Friend = {
  name: "FakeFriend",
  isKind: true
}

console.log({myFriend})
