/**
 * Button.stories
 * @description 버튼 컴포넌트 스토리북
 */

import { defineComponent } from 'vue';

import { Button } from '../src';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    wrapMode: {
      control: 'boolean',
    },
    wrapClass: {
      control: 'select',
      options: [undefined, 'borderTop', 'bottom_btn', 'layBtn', 'terms_fix_btn', 'full', 'inblock', 'txtC', 'txtR'],
    },
    size: {
      control: 'select',
      options: ['sizeL', 'sizeM', 'sizeS', 'sizeFull'],
    },
    color: {
      control: 'select',
      options: ['btnWhite', 'btnBlack', 'btnBlue'],
    },
    disabled: {
      control: 'boolean',
    },
    auto: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    noneStyle: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn<typeof Button> = (args) =>
  defineComponent({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args"/>',
  });

export const Default = Template.bind({});
Default.args = {
  wrapMode: true,
  wrapClass: 'borderTop',
  size: 'sizeL',
  color: 'btnBlack',
  disabled: false,
  label: 'button',
};

export const NoneStyle = Template.bind({});
NoneStyle.args = {
  noneStyle: true,
  label: 'NoneStyleButton',
};

export const Send = Template.bind({});
Send.args = {
  size: 'sizeL',
  color: 'btnWhite',
  disabled: false,
  label: '전송/인증',
};

export const AlertButton = Template.bind({});
AlertButton.args = {
  wrapMode: true,
  wrapClass: 'layBtn',
  size: 'sizeM',
  color: 'btnBlack',
  label: '확인',
};

export const Next = Template.bind({});
Next.args = {
  wrapMode: true,
  wrapClass: 'bottom_btn',
  size: 'sizeL',
  color: 'btnBlack',
  auto: true,
  disabled: true,
  label: '다음',
};

export const NoWrapper = Template.bind({});
NoWrapper.args = {
  wrapMode: true,
  wrapClass: undefined,
  size: 'sizeM',
  color: 'btnWhite',
  disabled: false,
  label: 'nowrapper',
};
