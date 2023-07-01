import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Button from '../src/components/Button.vue';

describe('ColorPalette.vue', () => {
  it('mounted', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'asdfsd',
      },
    });
    expect(wrapper.text()).toBe('asdfsd');
  });
});
