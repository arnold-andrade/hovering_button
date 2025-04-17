const puppeteer = require('puppeteer');

describe('Hover Button Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('file://' + __dirname + '/../data/index.html');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Button changes color on hover', async () => {
    // Get initial background color
    const initialColor = await page.$eval('#hoverBox', el => {
      return window.getComputedStyle(el).backgroundColor;
    });
    
    // Hover over the button
    await page.hover('#hoverBox');
    
    // Wait for transition
    await page.waitForTimeout(400);
    
    // Get color after hover
    const hoverColor = await page.$eval('#hoverBox', el => {
      return window.getComputedStyle(el).backgroundColor;
    });
    
    // Verify colors are different
    expect(initialColor).not.toBe(hoverColor);
  });
});