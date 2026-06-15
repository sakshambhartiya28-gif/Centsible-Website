const { chromium } = require('/opt/node22/lib/node_modules/playwright');

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();

  const shoot = async (url, file, scroll = 0) => {
    await page.goto(url, { waitUntil: 'networkidle' });
    if (scroll) await page.evaluate(y => window.scrollTo(0, y), scroll);
    await page.waitForTimeout(400);
    await page.screenshot({ path: file });
    console.log('saved', file);
  };

  await shoot('http://localhost:3000', '/tmp/p1_home_hero.png');
  await shoot('http://localhost:3000', '/tmp/p2_home_mission.png', 900);
  await shoot('http://localhost:3000', '/tmp/p3_home_courses.png', 1800);
  await shoot('http://localhost:3000', '/tmp/p4_home_games.png', 3100);
  await shoot('http://localhost:3000', '/tmp/p5_home_testimonials.png', 4300);
  await shoot('http://localhost:3000/courses', '/tmp/p6_courses.png');
  await shoot('http://localhost:3000/courses', '/tmp/p7_courses_modules.png', 900);
  await shoot('http://localhost:3000/games', '/tmp/p8_games.png');
  await shoot('http://localhost:3000/about', '/tmp/p9_about.png');
  await shoot('http://localhost:3000/about', '/tmp/p10_about_founders.png', 1100);
  await shoot('http://localhost:3000/about', '/tmp/p11_about_team.png', 1900);
  await shoot('http://localhost:3000/dashboard', '/tmp/p12_dashboard.png');

  // Simulate marking 6 modules complete
  await page.goto('http://localhost:3000/dashboard', { waitUntil: 'networkidle' });
  const circles = await page.locator('button[aria-label^="Mark"]').all();
  for (let i = 0; i < Math.min(6, circles.length); i++) await circles[i].click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: '/tmp/p13_dashboard_progress.png' });
  console.log('saved /tmp/p13_dashboard_progress.png');

  await shoot('http://localhost:3000/contact', '/tmp/p14_contact.png');
  await shoot('http://localhost:3000/resources', '/tmp/p15_resources.png');

  // Open chatbot
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.click('button[aria-label="Open chat"]');
  await page.waitForTimeout(700);
  await page.screenshot({ path: '/tmp/p16_chatbot.png' });
  console.log('saved /tmp/p16_chatbot.png');

  await browser.close();
  console.log('All done');
})();
