//Create a gitrepo and push this code to git repo

import {test} from "@playwright/test"

test(`login to leaftaps`, async({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');

            await page.fill('#username', 'democsr');
            await page.fill ('#password', 'crmsfa');
            await page.click('.decorativeSubmit');
            await page.getByText('CRM/SFA').click();
})