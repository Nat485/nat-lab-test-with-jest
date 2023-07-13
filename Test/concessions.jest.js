const concessions = require("../data/concessions");

const {
    concessionID,
    addTotalFromIDs,
} = require("../src/concessions");

describe("concessionID()", () => {
    test("These are the ID's that match the concession objects", () => {
        const actual = concessionID(concessions, "g9sZdG1hI");
        const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 };
        expect(actual).toStrictEqual(expected);
    });
    test("Return `null` if there is no object that matches.", () => {
        const actual = concessionID(concessions, "g9sZpQ1hI");
        const expected = null;
        expect(actual).toBe(expected);
    });
});

