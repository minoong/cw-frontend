import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from '../src/Button';

// The two tests marked with concurrent will be run in parallel
describe('suite', () => {
  it('renders headline', () => {
    render(<Button label="safd" />);

    // screen.debug();

    const headline = screen.getByText(/safd/i);
    expect(headline).toBeDefined();
  });
});
