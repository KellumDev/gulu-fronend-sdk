import { render } from '@testing-library/react';

import Thumbnail from './thumbnail';

describe('Thumbnail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Thumbnail />);
    expect(baseElement).toBeTruthy();
  });
});
