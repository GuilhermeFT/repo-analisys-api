import puppeteer from 'puppeteer'

export class Images {
  private appUrl?: string

  constructor(data: { appUrl?: string }) {
    this.appUrl = data.appUrl
  }

  public async createImage() {
    if (!this.appUrl) {
      throw new Error('App URL is required to create an image.')
    }

    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    // Navigate the page to a URL.
    await page.goto(this.appUrl)

    // Set screen size.
    await page.setViewport({ width: 1280, height: 720 })

    // Take a screenshot.
    const screenshot = await page.screenshot()

    // Close the browser.
    await browser.close()

    // return the screenshot
    return screenshot
  }
}
