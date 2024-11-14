const popupAdCloseButton = '#popUpAd > a > bottom'
const tradingInformationButton = '#mega > ul > li:nth-child(2) > a'
const stockDayAvgButton = '#mega > ul > li:nth-child(2) > div > div > ul:nth-child(2) > li:nth-child(10) > a'

export class HomePage {
    goToStockDayAvgPage() {
        cy.visit('zh/index.html')
        cy.get(popupAdCloseButton).click()
        cy.get(tradingInformationButton).click()
        cy.get(stockDayAvgButton).click()
    }
}
export const homePage = new HomePage()