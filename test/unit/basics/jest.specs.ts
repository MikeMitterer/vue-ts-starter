import 'jest-extended'

class Name {
    public readonly firstname: string | null

    constructor(firstname: string | null) {
        this.firstname = `Hi ${firstname}`
    }
}

describe('basics', () => {
    test('Test Jest', () => {
        const name = new Name('Mike')

        expect(name.firstname).toStartWith('Hi')
    })
})
