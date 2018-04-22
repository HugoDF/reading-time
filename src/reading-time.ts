import makeWordRegex from "word-regex";

const AVERAGE_WORDS_PER_MINUTE = 200;
const wordRegex = makeWordRegex();

export function averageReadingTime(wordCount: number) {
  return wordCount / AVERAGE_WORDS_PER_MINUTE;
}

export function defaultReadingTimeFunction(wordCount: number): number {
  const time = Math.round(averageReadingTime(wordCount));
  return time > 0 ? time : 1;
}

export function readingTime(
  text: string,
  readingTimeFunction: (wordCount: number) => any = defaultReadingTimeFunction
): any {
  const wordMatches = text.match(wordRegex);
  const wordsCount = wordMatches ? wordMatches.length : 0;
  return readingTimeFunction(wordsCount);
}
