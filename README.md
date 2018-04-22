# reading-time

Calculate the amount of time a string would take to read.

# Installation

```sh
npm i --save @hugodf/reading-time
```

# Usage

```js
const { readingTime } = require("reading-time");
// or
import { readingTime } from "reading-time";

const time = readingTime("My text...");
// 1, time to read in minutes
```

# Advanced Usage

## Pass a custom wordCount -> readingTime function

```js
const readingTimeFunction = wordCount => {
  return wordCount / 100;
  // default divides by 200 and rounds to nearest integer > 0
};
const time = readingTime("My text...", readingTimeFunction);
// 0.02
```

## Accessing the average reading time function

There is a built-in `averageReadingTime` function which uses 200 words per minute
(average reading time).

This can be used to create a function to format the output without using a custom
readingTime function eg. if the formatting in whole minutes is not acceptable

```js
const { readingTime, averageReadingTime } = require("reading-time");
// or
import { readingTime, averageReadingTime } from "reading-time";

const roundedDownAverageReadingTimeFn = wordCount => {
  // Always round down the minutes.
  return Math.floor(averageReadingTime(wordCount));
};
const time = readingTime("My text...", roundedDownAverageReadingTimeFn);
// 0
```
