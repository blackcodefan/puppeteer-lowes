const puppeteer = require('puppeteer');

const main = async () => {

    const browser = await puppeteer.launch({headless: false, defaultViewport: null, args: ['--start-maximized']});

    const page = await browser.newPage();

    await page.goto('https://www.lowesforpros.com/pd/Google-Nest-Mini-2nd-Generation-with-Google-Assistant-Charcoal/1001334238')

    await page.waitFor(200000);
};

main();