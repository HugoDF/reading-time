import { readingTime } from "./index";

const HUNDRED_AND_NINETY_NINE_WORD_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed ac ipsum maximus, efficitur erat sed, euismod nisi.
Etiam faucibus ornare neque sed efficitur.
Sed pharetra, diam vel sagittis sollicitudin, nibh augue condimentum leo, id scelerisque nisl est hendrerit lectus.
Curabitur ornare blandit nisi, non ultrices tellus porttitor non.
In quis enim vitae sem varius commodo eu id metus.
Donec imperdiet sapien ac nisi scelerisque lacinia non non felis.
Suspendisse venenatis, purus ac rutrum faucibus, dui nulla faucibus sem, a semper lorem arcu vitae leo.
Phasellus eget risus iaculis, semper quam sed, cursus mauris. In finibus ipsum quis maximus cursus.
Aliquam turpis felis, aliquet eu est nec, convallis ullamcorper orci.
Fusce euismod nisl sed velit varius lacinia. Praesent aliquet feugiat maximus.
Donec varius pretium tincidunt. Mauris convallis mauris sollicitudin arcu faucibus, sit amet fermentum metus ultricies.
Duis nec massa eu eros mattis bibendum ut ut sem.

Ut eget eros quis erat tempus cursus. Sed mattis dapibus arcu, et lacinia dui fringilla sit amet.
Phasellus vel sem magna.
Fusce gravida, turpis in interdum pretium, purus tortor vestibulum est, ut bibendum enim justo at odio.
Sed vitae tellus imperdiet, eleifend risus eu, fringilla nisl. Curabitur mollis fermentum libero sit amet rhoncus.
Cras.`;

const TWO_HUNDRED_WORD_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed ac ipsum maximus, efficitur erat sed, euismod nisi.
Etiam faucibus ornare neque sed efficitur.
Sed pharetra, diam vel sagittis sollicitudin, nibh augue condimentum leo, id scelerisque nisl est hendrerit lectus.
Curabitur ornare blandit nisi, non ultrices tellus porttitor non.
In quis enim vitae sem varius commodo eu id metus.
Donec imperdiet sapien ac nisi scelerisque lacinia non non felis.
Suspendisse venenatis, purus ac rutrum faucibus, dui nulla faucibus sem, a semper lorem arcu vitae leo.
Phasellus eget risus iaculis, semper quam sed, cursus mauris. In finibus ipsum quis maximus cursus.
Aliquam turpis felis, aliquet eu est nec, convallis ullamcorper orci.
Fusce euismod nisl sed velit varius lacinia. Praesent aliquet feugiat maximus.
Donec varius pretium tincidunt. Mauris convallis mauris sollicitudin arcu faucibus, sit amet fermentum metus ultricies.
Duis nec massa eu eros mattis bibendum ut ut sem.

Ut eget eros quis erat tempus cursus. Sed mattis dapibus arcu, et lacinia dui fringilla sit amet.
Phasellus vel sem magna.
Fusce gravida, turpis in interdum pretium, purus tortor vestibulum est, ut bibendum enim justo at odio.
Sed vitae tellus imperdiet, eleifend risus eu, fringilla nisl. Curabitur mollis fermentum libero sit amet rhoncus.
Cras tristique.`;

const TWO_HUNDRED_AND_ONE_WORD_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Integer euismod purus a odio pharetra, vel molestie erat commodo.
Donec et venenatis metus, in laoreet lorem. 
Suspendisse malesuada leo odio, at mollis nunc lobortis nec.
Vestibulum euismod elementum urna in interdum. 
Nullam sit amet eros eget dui efficitur dignissim consequat ut purus. 
Nulla facilisi. Sed pellentesque sapien eget neque posuere tincidunt. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Fusce viverra neque non tempor sollicitudin. 
Sed luctus odio neque, id auctor mauris blandit at. 
Maecenas eget sem non nisi luctus pulvinar nec ut arcu.

Duis tempus dui felis, ut tincidunt nulla maximus in. 
Donec consequat tellus at enim posuere placerat. 
Nam risus eros, fringilla eget hendrerit vitae, congue et nisl. 
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Maecenas dui nunc, feugiat eget elit quis, dapibus pretium erat.
Nunc luctus egestas odio ac condimentum.
Suspendisse blandit purus arcu, vel feugiat arcu tempus ac.

In dolor leo, auctor non turpis vitae, congue facilisis ipsum. 
Ut ac molestie nisi, sit amet eleifend mi. 
Duis et velit in est auctor auctor sed non odio. 
Nam venenatis tincidunt odio et placerat. 
Mauris porttitor pulvinar placerat. 
Sed libero ipsum, iaculis sed ultricies.`;

test("readingTime should pass 0 word count to readingTimeFunction", () => {
  const mockReadingTimeFunction = jest.fn();
  readingTime("", mockReadingTimeFunction);
  expect(mockReadingTimeFunction).toHaveBeenCalledWith(0);
});

test("readingTime should pass 199 word count to readingTimeFunction", () => {
  const mockReadingTimeFunction = jest.fn();
  readingTime(HUNDRED_AND_NINETY_NINE_WORD_TEXT, mockReadingTimeFunction);
  expect(mockReadingTimeFunction).toHaveBeenCalledWith(199);
});

test("readingTime should pass 200 word count to readingTimeFunction", () => {
  const mockReadingTimeFunction = jest.fn();
  readingTime(TWO_HUNDRED_WORD_TEXT, mockReadingTimeFunction);
  expect(mockReadingTimeFunction).toHaveBeenCalledWith(200);
});

test("readingTime should return output of passed readingTimeFunction", () => {
  const mockReadingTimeFunction = jest.fn().mockReturnValue(1);
  expect(
    readingTime(
      TWO_HUNDRED_WORD_TEXT + TWO_HUNDRED_WORD_TEXT + TWO_HUNDRED_WORD_TEXT,
      mockReadingTimeFunction
    )
  ).toBe(1);
});

test("readingTime should respond correctly for empty string (minimum reading time ever is 0) if no passed readingTimeFunction", () => {
  expect(readingTime("")).toBe(1);
});

test("readingTime should respond correctly for short english-character text if no passed readingTimeFunction", () => {
  const text = "Lorem ipsum dolor sit amet.";
  expect(readingTime(text)).toMatchSnapshot();
});

test("readingTime should respond correctly for 199 word english-character text if no passed readingTimeFunction", () => {
  expect(readingTime(HUNDRED_AND_NINETY_NINE_WORD_TEXT)).toMatchSnapshot();
});

test("readingTime should respond correctly for 200 word english-character text if no passed readingTimeFunction", () => {
  expect(readingTime(TWO_HUNDRED_WORD_TEXT)).toMatchSnapshot();
});

test("readingTime should respond correctly for >200 words english-character text if no passed readingTimeFunction", () => {
  expect(readingTime(TWO_HUNDRED_AND_ONE_WORD_TEXT)).toMatchSnapshot();
});

test("readingTime should respond correctly for 399 word english-character text if no passed readingTimeFunction", () => {
  expect(
    readingTime(HUNDRED_AND_NINETY_NINE_WORD_TEXT + TWO_HUNDRED_WORD_TEXT)
  ).toMatchSnapshot();
});

test("readingTime should respond correctly for 400 word english-character text if no passed readingTimeFunction", () => {
  expect(
    readingTime(TWO_HUNDRED_WORD_TEXT + TWO_HUNDRED_WORD_TEXT)
  ).toMatchSnapshot();
});

test("readingTime should respond correctly for >400 words english-character text if no passed readingTimeFunction", () => {
  expect(
    readingTime(TWO_HUNDRED_AND_ONE_WORD_TEXT + TWO_HUNDRED_WORD_TEXT)
  ).toMatchSnapshot();
});

test("readingTime should respond correctly for 599 word english-character text if no passed readingTimeFunction", () => {
  expect(
    readingTime(
      HUNDRED_AND_NINETY_NINE_WORD_TEXT +
        TWO_HUNDRED_WORD_TEXT +
        TWO_HUNDRED_WORD_TEXT
    )
  ).toMatchSnapshot();
});

test("readingTime should respond correctly for 600 word english-character text if no passed readingTimeFunction", () => {
  expect(
    readingTime(
      TWO_HUNDRED_WORD_TEXT + TWO_HUNDRED_WORD_TEXT + TWO_HUNDRED_WORD_TEXT
    )
  ).toMatchSnapshot();
});

test("readingTime should respond correctly for >600 words english-character text if no passed readingTimeFunction", () => {
  expect(
    readingTime(
      TWO_HUNDRED_AND_ONE_WORD_TEXT +
        TWO_HUNDRED_WORD_TEXT +
        TWO_HUNDRED_WORD_TEXT
    )
  ).toMatchSnapshot();
});
