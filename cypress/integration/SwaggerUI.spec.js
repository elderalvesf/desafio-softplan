describe('API Testing Suite',()=>{

    Cypress.config('baseUrl', 'https://fakerestapi.azurewebsites.net/api/v1')


    it ('POST - Cadastrar um novo livro', ()=>{
     const requestBody = {
        "id": 1,
        "title": "Livro Elder",
        "description": "Desafio Técnico Softplan",
        "pageCount": 111,
        "excerpt": "string",
        "publishDate": "2021-03-17T17:23:31.095Z"
      }
        cy.request('POST','/Books', requestBody).its('body').should('include', {title:'Livro Elder'})

    })

    it ('GET - Validar retorno de todos os livros cadastrados', ()=>{
        cy.request('GET','/Books').then((response)=>{
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null

        })
    })

    it ('GET - Validar retorno de dados do livro desejado', ()=>{
        cy.request('GET','/Books/4').its('body').should('include',{title:'Book 4'})
    })
})