# no-ai-robots

Contains a `robots.txt` with deny directives for known AI robots.

## Blocked robots

See [robots.txt](robots.txt)

## Usage with express

```js
const noRobots = require("@bonniernews/no-ai-robots");

function noRobotsMiddleware(req, res) {
  res.set("Cache-Control", "max-age=300");
  res.set("Content-Type", "text/plain; charset=utf-8");
  return res.send(`${noRobots}
    Sitemap: https://epic-site/sitemap.xml
  `);
}

app.use("/robots.txt", noRobotsMiddleware);
```
