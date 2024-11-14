const ROCyearDropdownList = '#label0'
const monthDropdownList = '#form > div > div.groups > div.group.date-select.M > span > select:nth-child(2)'
const stockCodeInput = '[name=stockNo]'
const searchButton ='button[class=search]'
const closingPrices = '#reports > div.main-content > div.rwd-table.last-is-sum.dragscroll.sortable.F1.R2_.enable-dock > table > tbody > tr'
const closingPriceTable = '#reports > div.main-content > div.rwd-table.last-is-sum.dragscroll.sortable.F1.R2_ > table'

export class StockDayAvgPage {
    searchStock(ROCyear, month, stockCode) {
        cy.get(ROCyearDropdownList).select(`民國 ${ROCyear} 年`)
        cy.get(monthDropdownList).select(`${month}月`)
        cy.get(stockCodeInput).type(stockCode)
        cy.get(searchButton).click()
    }
    getClosingPrices() {
        cy.get(closingPrices).then(function(element) {
            cy.log(`${element.length-1} closingPrices`)
            for(let i = 1; i <= element.length-1; i++) {
                cy.get(`${closingPrices}:nth-child(${i}) > td:nth-child(2)`).then(function(element) {
                    cy.log(element.text())
               })
            }
       })
    }
    getClosingPriceTableScreenShot() {
        cy.get(closingPriceTable).screenshot('closingPriceTableScreenShot')
    }
}
export const stockDayAvgPage = new StockDayAvgPage()