// Import the js file to test
import { checkForUrl } from "../js/urlChecker"
describe("Testing the url validity functionality", () => {
    test("Testing the url validation function declaration", () => {
        expect(checkForUrl).toBeDefined();
    })
    test("Testing the handleSubmition() function", () => {
        expect(checkForUrl).toBeDefined();
    })
    test('check valid url should return true', () => {
        expect(checkForUrl('http://example.com')).toBeTruthy()
    })

    test('check invalid url should return false', () => {
        expect(checkForUrl('invalid url')).toBeFalsy()
    })
});

// Import the url to test with nodemocks
var httpMocks = require('node-mocks-http');
describe('Test, the function "checkForUrl()" throw error if user inputs is incorrect' , () => {
    test('checkForUrl should throw error if incorrect user inputs', () => {
        const next = jest.fn();
        const req = httpMocks.createRequest({
            body: {
            url: "https://www.datasciencecentra.com/profiles/blogs/11-great-articles-about-natural-language-processing-nlp"
            }
        })
    })
})