"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createIntel = (processor) => {
    console.log(`Berhasil membuat processor ${processor.brand}
BaseModel: ${processor.baseModel}
ModelName: ${processor.modelName}
ClockSize: ${processor.clockSize}
tubroBoosts: ${processor.turboBost}`);
};
const IntelCorei5 = {
    brand: "Intel",
    baseModel: "IntelCore",
    modelName: "i5 Three",
    clockSize: 20,
    turboBost: true
};
createIntel(IntelCorei5);
//# sourceMappingURL=interface.js.map