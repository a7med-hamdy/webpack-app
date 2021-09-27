import { checker } from '../Checker';

describe("testing checker", ()=>{
    test("checker function", () =>{
        const input = [
            { code : '200'},
            { code : '100'},
            { code : '0' } 
        ]
        const output = [false, true]
        expect(checker({status : input[0]})).toEqual(output[0])
        expect(checker({status : input[1]})).toEqual(output[0])
        expect(checker({status : input[2]})).toEqual(output[1])
    })
})