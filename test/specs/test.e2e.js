import { expect } from '@wdio/globals'
import { Key } from 'webdriverio'


describe("Tast cases", () => {

    it('Test case #1',  async () => {
        await browser.url('https://github.com/');

        await $('.HeaderMenu-link--sign-up').click(); // Click 'Sign up' button

        // Check whether message 'Welcome to GitHub!' appears
        const welcText = await $('/html/body/div[1]/div[4]/main/div[2]/text-suggester/div[1]/typing-effect/span[1]');
        await expect(welcText).toExist();
        await expect(welcText).toHaveTextContaining('Welcome to GitHub!');

        // Fill in the form and submit
        await browser.pause(2000);
        const emailField = await $('#email');
        await emailField.waitForExist({timeout: 5000});
        await emailField.addValue(Math.random().toString(5).substring(2)+"@gmail.com");
        const emailButton = await $('//*[@id="email-container"]/div[2]/button');
        await emailButton.waitForEnabled({timeout: 5000});
        await emailButton.click();
        const passwordField = await $('#password');
        await passwordField.waitForExist({timeout: 5000});
        await passwordField.addValue('QWERTYasdfgh123456789');
        const passwordButton = await $('//*[@id="password-container"]/div[2]/button');
        await passwordButton.waitForEnabled({timeout: 5000});
        await passwordButton.click();
        const loginField = await $('#login');
        await loginField.waitForExist({timeout: 5000});
        await loginField.addValue(Math.random().toString(5).substring(2));
        const loginButton = await $('//*[@id="username-container"]/div[2]/button');
        await loginButton.waitForEnabled({timeout: 5000});
        await loginButton.click();
        const questField = await $('//*[@id="opt_in"]');
        await questField.waitForExist({timeout: 5000});
        await questField.addValue('y');
        const questButton = await $('//*[@id="opt-in-container"]/div[2]/button');
        await questButton.waitForEnabled({timeout: 5000});
        await questButton.click();
    })

    it('Test case #2', async () => {
        await browser.url('https://github.com/');

        // Check whether text "The plays for anyone ..." exists
        const placeText = await $('/html/body/div[1]/div[4]/main/div[4]/div[1]/div/div/div/h2');
        await placeText.scrollIntoView();
        await expect(placeText).toHaveText('The place for anyone from anywhere to build anything');
        // Check whether 'free trial' link is displayed and click on it
        const trialLink = await $('/html/body/div[1]/div[4]/main/div[4]/div[1]/div/div/div/div/div/a[2]');
        let isDisplayed = await trialLink.isDisplayed();
        console.log(isDisplayed);
        await trialLink.click();
        // Check text and click on link and check if sign form appears
        await browser.pause(2000);
        const pickText = await $('/html/body/div[1]/div[4]/main/div/div[1]/h1')
        await expect(pickText).toExist();
        await $('/html/body/div[1]/div[4]/main/div/div[2]/div/div/div[1]/a/div/div').click();
        await browser.pause(2000);
        const signTitle = await $('//*[@id="login"]/div[1]/h1');
        await expect(signTitle).toExist();
    })

    it('Test case #3', async () => {
        await browser.url('https://github.com/');
        // Check if 'Subscribe' button exists, clickable and click on it
        const subsButton = await $('/html/body/div[1]/footer/div[1]/div/div[1]/div/a');
        await subsButton.scrollIntoView();
        await expect(subsButton).toExist();
        let isClickable = await subsButton.isClickable();
        console.log(isClickable);
        await subsButton.click();
        // Check new url and check if 'Subscribe to ...' text exist
        await browser.pause(2000);
        await expect(browser).toHaveUrl('https://resources.github.com/newsletter/');
        const subscText = await $('//*[@id="form"]/form/div/button');
        await expect(subscText).toExist();
        // Fill in the form and submit
        await browser.pause(2000);
        await $('//*[@id="FormControl--:R8d7m:"]/label').scrollIntoView();
        await $('//*[@id=":R8d7m:"]').addValue(Math.random().toString(5).substring(2)+"@gmail.com");
        await $('#country').selectByVisibleText('Ukraine');
        await $('//*[@id="gated-agree-marketingEmailOptin1"]').click();
        await $('//*[@id="form"]/form/div/button').click();

        await browser.pause(2000);
        const thankText = await $('//*[@id="hero-section-brand-heading"]');
        await expect(thankText).toHaveText('Thanks for subscribing!');
    })

    it('Test case #4', async () => {
        await browser.url('https://github.com/');
        // Type 'act' on the search field and press 'Enter'
        await $('/html/body/div[1]/div[1]/header/div/div[2]/div/div/qbsearch-input/div[1]/button').click();
        await $('#query-builder-test').setValue('act');
        await browser.keys(Key.Enter);
        // Check if first el. has 'act' in it's name
        await browser.pause(2000);
        const elem = await $('/html/body/div[1]/div[4]/main/react-app/div/div/div[1]/div/div/main/div[2]/div/div[1]/div[4]/div/div/div[1]/div/div[1]/h3/div');
        await expect(elem).toHaveTextContaining('act');
    })

    it('Test case #5', async () => {
        await browser.url('https://github.com/');
        // Click on 'Pricing' and check if 'Get the ...' text appears
        await $('/html/body/div[1]/div[1]/header/div/div[2]/div/nav/ul/li[4]/a').click();
        await browser.pause(2000);
        const getText = await $('/html/body/div[1]/div[4]/main/div[1]/h1');
        await expect(getText).toHaveText('Get the complete developer platform.');
        // Scroll to 'Compare ...' link and click on it
        const comparLink = await $('/html/body/div[1]/div[4]/main/div[2]/div[2]/div[3]/a')
        await comparLink.scrollIntoView();
        await comparLink.click();
        // Check text 'Compare ...'
        const comparText = await $('/html/body/div[1]/div[4]/main/div[4]/h1');
        await comparText.waitForExist({timeout: 5000});
        await expect(comparText).toHaveText('Compare features');
    })

})

