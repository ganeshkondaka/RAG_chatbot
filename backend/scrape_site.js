import { launch } from "puppeteer";
import { writeFileSync } from "fs";

async function scrapePortfolio(url) {
    const browser = await launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle2" });

    // Get visible text from the page
    const content = await page.evaluate(() => {
        return document.body.innerText;
    });

    // console.log("content is ........:", content);
    // Optional: Clean up text
    const cleaned = content
        .split("\n")
        .map(line => line.trim())
        // .filter(line => line.length > 30) // Skip short/unrelated lines
        .join(",");
    console.log("cleaned is ........:", cleaned);

    // Extract all hyperlinks (href values)
    const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("a"))
            .map(a => a.href)
            .filter(href => href && !href.startsWith("javascript:"));
    });

    // console.log("links are ......:", links);

    // const finaldata = cleaned + links
    const finaldata = `${cleaned}${links.join("\n")}`
    console.log("finaldata is ........:",finaldata)
      writeFileSync("scraped_content.txt", cleaned);

    console.log("✅ Scraped and saved to scraped_content.txt");

    await browser.close();
}

scrapePortfolio("https://ganeshprofolio.vercel.app/"); // Replace with your actual URL
