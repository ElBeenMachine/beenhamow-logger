<h1 align = "center">BeenhamOW Logger</h1>
<div align = "center">
    <p>
        <a href="https://discord.gg/uB4dcpsMSR">
            <img src="https://discordapp.com/api/guilds/506436049816518657/embed.png" alt="Discord server" />
        </a>
        <a href="https://www.npmjs.com/package/beenhamow-logger">
            <img src="https://img.shields.io/npm/v/beenhamow-logger.svg?maxAge=3600" alt="NPM version" />
        </a>
        <a href="https://www.npmjs.com/package/beenhamow-logger">
            <img src="https://img.shields.io/npm/dt/beenhamow-logger.svg?maxAge=3600" alt="NPM downloads" />
        </a>
    </p>
    <img src = "https://nodei.co/npm/beenhamow-logger.png?downloads=true&stars=true">
</div>

# About
BeenhamOW Logger is a simple logging package that formats the logs in my code to a format providing useful information.

## Installation
```
npm install beenhamow-logger
```
# Example Usage
## Writing Logs
```js
const logger = require("beenhamow-logger");

logger.log("This is a log");
logger.warn("This is a warning");
logger.error("This is an error");
logger.debug("This is a debugging message");
```

## Output
```
[05-01-2022 12:26:55][ LOG ]: This is a log
[05-01-2022 12:26:55][ WARN ]: This is a warning
[05-01-2022 12:26:55][ ERROR ]: This is an error
[05-01-2022 12:26:55][ DEBUG ]: This is a debugging message
```