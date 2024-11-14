import { homePage } from '../../support/pages/HomePageClass'
import { stockDayAvgPage } from '../../support/pages/StockDayAvgPageClass'

describe('twse web site test', function() {
    it('Go to the stock day average page, search for stock code 2330 in 112/01, then print the closing prices and take a screenshot', function() {
        homePage.goToStockDayAvgPage()
        stockDayAvgPage.searchStock('112', '01', '2330')
        stockDayAvgPage.getClosingPrices()
        stockDayAvgPage.getClosingPriceTableScreenShot()
    })
})