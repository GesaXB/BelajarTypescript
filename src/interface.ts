interface Processor {
  brand: string
  baseModel: string
  modelName: string
  clockSize: number
}

interface Intel extends Processor {
  turboBost: boolean
}

interface Amd extends Processor {
  preccisonBoosts?: boolean
}

const createIntel = (processor: Intel): void => {
  console.log(`Berhasil membuat processor ${processor.brand}
BaseModel: ${processor.baseModel}
ModelName: ${processor.modelName}
ClockSize: ${processor.clockSize}
tubroBoosts: ${processor.turboBost}`)
}

const IntelCorei5: Intel = {
  brand: "Intel",
  baseModel: "IntelCore",
  modelName: "i5 Three",
  clockSize: 20,
  turboBost: true
}

createIntel(IntelCorei5)
