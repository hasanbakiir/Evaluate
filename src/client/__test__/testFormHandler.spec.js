// Import the js file to test with Jest the handleSubmition function
import { handleSubmition } from "../js/formHandler"
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmition() function", () => {
        expect(handleSubmition).toBeDefined();
    })
    test("Testing the handleSubmition() function", () => {
        expect(handleSubmition).toBeTruthy();
    })
});
