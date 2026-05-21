class HomePage {
    get accessibilityLink() {
        return $('~Accessibility');
    }

    get viewsLink() {
        return $('~Views');
    }

    async open() {
        // App launches to home automatically; just wait for it
        await this.accessibilityLink.waitForDisplayed({ timeout: 10000 });
    }

    async tapAccessibility() {
        await this.accessibilityLink.click();
    }

    async tapViews() {
        await this.viewsLink.click();
    }
}

module.exports = new HomePage();
