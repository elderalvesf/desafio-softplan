//ações de interação com a página
const el = require('./elements').ELEMENTS

class FrontPage {
    accessPage(){
        cy.visit('https://todomvc.com/examples/typescript-react/#/')
    }

    typeItems(){
        cy.get(el.searchArea).type('ITEM 1')
        cy.get(el.searchArea).type('{enter}')

        cy.get(el.searchArea).type('ITEM 2')
        cy.get(el.searchArea).type('{enter}')

        cy.get(el.searchArea).type('ITEM 3')
        cy.get(el.searchArea).type('{enter}')
    }

    deleteItem(){
        cy.get(el.deleteButton).click({force:true})
    }

    completeItem(){
        cy.get(el.checkButton).click({force:true})
    }

    clickActive(){
        cy.get(el.activeButton).click({force:true})
    }

    clickCompleted(){
        cy.get(el.completedButton).click({force:true})
    }

    clearCompleted(){
        cy.get(el.clearCompleted).click()
    }
}

export default new FrontPage();