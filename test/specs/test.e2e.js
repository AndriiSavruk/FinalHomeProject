import { expect } from '@wdio/globals'

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

})

