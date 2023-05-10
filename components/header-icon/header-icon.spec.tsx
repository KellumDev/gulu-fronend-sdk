import { render } from '@testing-library/react';

import HeaderIcon from './header-icon';

describe('HeaderIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderIcon />);
    expect(baseElement).toBeTruthy();
  });
});
