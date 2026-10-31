describe("SEO tests", () => {
  it("Should get the RSS feed file", () => {
    cy.request("/rss.xml").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property("content-type", "text/xml");
    });
  });

  it("Should get the robots.txt file", () => {
    const expectedRobotsTxtContent =
      "User-Agent: *\nAllow: /\nAllow: /en/\n\nSitemap: https://arnaudflaesch.github.io/sitemap_index.xml\n";
    cy.request("/robots.txt").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property("content-type", "text/plain");
      expect(response.body).to.equal(expectedRobotsTxtContent);
    });
  });

  it("Should get the sitemap index", () => {
    cy.request("/sitemap_index.xml").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property("content-type", "text/xml; charset=UTF-8");
    });
  });
});
