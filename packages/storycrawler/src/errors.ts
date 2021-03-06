export class InvalidUrlError extends Error {
  name = ' InvalidUrlError';

  constructor(invalidUrl: string) {
    super();
    this.message = `The URL ${invalidUrl} is invalid.`;
  }
}

export class StorybookServerTimeoutError extends Error {
  name = 'ScreenshotTimeoutError';

  constructor(msec: number) {
    super();
    this.message = `Storybook server launch timeout exceeded in ${msec} ms.`;
  }
}

export class NoStoriesError extends Error {
  name = 'NoStoriesError';
}
