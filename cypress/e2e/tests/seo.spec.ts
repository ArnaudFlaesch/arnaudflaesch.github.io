/// <reference types='cypress' />

describe("SEO tests", () => {
  it("Should get the RSS feed file", () => {
    cy.request({
      url: "/rss.xml"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property("content-type", "text/xml");
    });
  });

  it("Should get the robots.txt file", () => {
    const expectedRobotsTxtContent =
      "# START nuxt-robots (indexable)\nUser-agent: *\nAllow: /\nAllow: /en/\n\nSitemap: https://arnaudflaesch.github.io/sitemap_index.xml\n# END nuxt-robots";
    cy.request({
      url: "/robots.txt"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property("content-type", "text/plain; charset=utf-8");
      expect(response.body).to.equal(expectedRobotsTxtContent);
    });
  });

  it("Should get the sitemap index", () => {
    cy.request({
      url: "/sitemap_index.xml"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property("content-type", "text/xml; charset=UTF-8");
    });
  });
});
