const tickets = require("../data/tickets");

const {
    namesOfTickets,
    totalFromTicketNames,
  } = require("../src/tickets");

  describe("namesOfTickets()", () => {
    test("Returns a ticket object when given the name.", () => {
      const actual = namesOfTickets(tickets, "Adult Matinee");
      const expected = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 };
      expect(actual).toStrictEqual(expected);
    });
    test("Return `null` if no object is found.", () => {
      const actual = namesOfTickets(tickets, "Nat");
      const expected = null;
      expect(actual).toBe(expected);
    });
  });

  describe("totalFromTicketNames()", () => {
    test("The total value of all tickets from the `names` array.", () => {
      const actual = totalFromTicketNames(tickets, ["Adult Matinee", "Senior Matinee", "Child Matinee", "Adult Regular", "Senior Regular", "Child Regular"]);
      const expected = 6114;
      expect(actual).toBe(expected);
    });
    test("Returns 0 if the ticket name has no matches.", () => {
      const actual = totalFromTicketNames(tickets, ["Adult Pass", "Child Pass"]);
      const expected = 0;
      expect(actual).toBe(expected);
    });
  });