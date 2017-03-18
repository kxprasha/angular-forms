"use strict";
class NumberValidators {
    static range(min, max) {
        return (c) => {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    }
}
exports.NumberValidators = NumberValidators;
//# sourceMappingURL=number.validator.js.map