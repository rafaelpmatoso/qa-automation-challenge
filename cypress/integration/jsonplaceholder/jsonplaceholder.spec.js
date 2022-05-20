/// <reference types="cypress" />

context('GET request', () => {

    it('returns with status code 200', () => {
        cy.request('http://jsonplaceholder.typicode.com/posts').its('status').should('equal', 200)
    })

    it('has headers property', () => {
        cy.request('http://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response).to.have.property('headers')
        })
    })

    it('body returns with data', () => {
        cy.request('http://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.body).to.have.length(100)
            const index = Cypress._.random(0, 99)
            expect(response.body[index].userId).to.be.a('number')
            expect(response.body[index].id).to.be.a('number')
            expect(response.body[index].title).to.be.a('string')
            expect(response.body[index].body).to.be.a('string')
        })
    })

})

context('POST request', () => {

    it('returns with status code 201', () => {
        cy.request('POST', 'http://jsonplaceholder.typicode.com/posts').its('status').should('equal', 201)
    })

    it('has headers property', () => {
        cy.request('POST', 'http://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response).to.have.property('headers')
        })
    })

    it('body returns new post id', () => {
        cy.request('POST', 'http://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.body.id).to.be.a('number')
        })
    })

})