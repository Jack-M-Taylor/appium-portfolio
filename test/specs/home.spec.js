const homePage = require('../pageObjects/home.page');

describe('ApiDemos - Home Screen', () => {
    before(async () => {
        await homePage.open();
    });

    it('should display the Accessibility menu item', async () => {
        await expect(homePage.accessibilityLink).toBeDisplayed();
    });

    it('should display the Views menu item', async () => {
        
        await expect(homePage.viewsLink).toBeDisplayed();
    });

    it('should navigate to Accessibility section', async () => {
        await homePage.tapAccessibility();
           const firstItem = await $('~Accessibility Node Provider');
         await expect(firstItem).toBeDisplayed();
        await driver.back();
    });
});
