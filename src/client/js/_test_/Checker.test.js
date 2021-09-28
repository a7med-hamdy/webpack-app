import { checker } from '../Checker';

describe("testing checker", ()=>{
    test("checker function", () =>{
        const input = [
            'https://api.meaningcloud.com/sentiment-2.1?key=9996a7a12be6e3cf6be7b994c58342ad&txt=text&lang=en',
            'https://api.meaningcloud.com/sentiment-2.1?key=9996a7a12be6e3cf6be7b994c58342ad&lang=en',
        ]
        const output = [false, true]
        expect(checker(input[0])).toEqual(output[1])
        expect(checker(input[1])).toEqual(output[1])
    })
})