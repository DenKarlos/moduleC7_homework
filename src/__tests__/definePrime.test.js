import { definePrime } from "../definePrime.js";

describe("Тестируем функцию по нахождению простого числа", () => {
    it("Корректное выполнение ф-ии с простым числом", () => {
        expect(definePrime(23)).toBe("Число 23 - простое число");
    }),
    it("Корректное выполнение ф-ии с составным числом", () => {
        expect(definePrime(69)).toBe("Число 69 - составное число");
    }),
    it("Корректное выполнение ф-ии с некорректыми данными", () => {
        expect(definePrime(-1)).toBe("Данные неверны");
    })
});