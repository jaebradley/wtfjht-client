# `wtfjht-client`

[![Build Status](https://travis-ci.org/jaebradley/wtfjht-client.svg?branch=master)](https://travis-ci.org/jaebradley/wtfjht-client)
[![codecov](https://codecov.io/gh/jaebradley/wtfjht-client/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/wtfjht-client)
[![npm](https://img.shields.io/npm/dt/wtfjht-client.svg)](https://www.npmjs.com/package/wtfjht-client)
[![npm](https://img.shields.io/npm/v/wtfjht-client.svg)](https://www.npmjs.com/package/wtfjht-client)

## Introduction

Going to [`https://whatthefuckjusthappenedtoday.com/`](https://whatthefuckjusthappenedtoday.com/) is "today's essential guide to the daily shock and awe in national politics."

It has [a very basic API](https://github.com/mkiser/WTFJHT/wiki/API-Specs) with three endpoints
* [`/api/today.json`](https://whatthefuckjusthappenedtoday.com/api/today.json)
  * A list of things that have happened today
* [`/api/v1/random.json`](https://whatthefuckjusthappenedtoday.com/api/v1/random.json)
  * A list of all the days, along with the URLs for the specific pages for those days
  * I *think* the endpoint is called `random` because it powers the "choose random day" feature
* [`/api/v1/status.json`](https://whatthefuckjusthappenedtoday.com/api/v1/status.json)
  * A basic status page with information like "has Trump been impeached"

## API

* `getToday` - get all the fucking stories that fucking happened today

```javascript
import { getToday } from 'wtfjht-client';

const whatTheFuckJustHappenedToday = await getToday();
```

* `getAllDailyPages` - get details for all tracked days

```javascript
import { getAllDailyPages } from 'wtfjht-client';

const allDailyPages = await getAllDailyPages();
```

* `getStatus` - get the current state of things

```javascript
import { getStatus } from 'wtfjht-client';

const status = await getStatus();
```
