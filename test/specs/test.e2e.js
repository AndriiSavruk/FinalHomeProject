import { expect } from '@wdio/globals'

describe("Tast cases", () => {

    it('Test case #1',  async () => {
        await browser.url('https://github.com/');

        await $('.HeaderMenu-link--sign-up').click(); // Click 'Sign up' button

        const welcText = await $('/html/body/div[1]/div[4]/main/div[2]/text-suggester/div[1]/typing-effect/span[1]');
        await expect(welcText).toExist();
        await expect(welcText).toHaveTextContaining('Welcome to GitHub!');
    })

})

