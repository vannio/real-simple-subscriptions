import { getFirstParagraph } from './getFirstParagraph';

describe('getFirstParagraph', () => {
  test('gets the first paragraph', () => {
    expect(getFirstParagraph(`<p>paragraph 1</p><p>paragraph 2</p>`)).toEqual(
      '<p>paragraph 1</p>',
    );
  });

  test('gets all content up until the end of the first paragraph', () => {
    expect(
      getFirstParagraph(
        `<h1>Hello</h1><img src="image.png"><p>paragraph 1</p><p>paragraph 2</p>`,
      ),
    ).toEqual('<h1>Hello</h1><img src="image.png"><p>paragraph 1</p>');
  });
});
