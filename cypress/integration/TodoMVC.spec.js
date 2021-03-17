/// <reference types ="cypress" />

import FrontPage from '../support/pages/FrontPage'
import { ELEMENTS } from '../support/pages/FrontPage/elements'
const el = require('../support/pages/FrontPage/elements').ELEMENTS

beforeEach(()=>{
    FrontPage.accessPage()
    FrontPage.typeItems()
    })

describe ('TodoMVC Test Suite', () =>{

    it('Cadastrar itens na lista', ()=>{
        cy.get(el.textArea).should('have.text','ITEM 1')
    });

    it('Excluir itens da lista' , () =>{
        FrontPage.deleteItem()

        FrontPage.deleteItem()

        cy.get(el.textArea).should('have.text','ITEM 3')
    })

    it('Marcar 1 item como completo', ()=>{
        FrontPage.completeItem()

        FrontPage.clickCompleted()

        cy.get(el.textArea).should('have.text', 'ITEM 1')
    });

    it('Selecionar filtro ACTIVE', ()=>{
        FrontPage.clickActive()

        cy.get(el.textArea).should('have.text', 'ITEM 1')
    });

    it('Selecionar filtro COMPLETED', ()=>{
        FrontPage.completeItem()

        FrontPage.clickCompleted()
        
        cy.get(el.textAreaComplete).should('have.text','ITEM 1')
    });

    it('Selecionar CLEAR COMPLETED', ()=>{
        FrontPage.completeItem()
        
        FrontPage.clearCompleted()

        FrontPage.clickActive()
        
        cy.get(el.textArea).should('have.text', 'ITEM 2')
    });
});