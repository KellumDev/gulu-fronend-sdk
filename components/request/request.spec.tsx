import { render } from '@testing-library/react';

import Request from './request';

describe('Request', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Request />);
    expect(baseElement).toBeTruthy();
  });
});
