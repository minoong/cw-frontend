<script setup lang="ts">
import { computed } from 'vue';

/**
 * ButtonAtom
 * @description 버튼 컴포넌트
 */

interface Props {
  wrapClass?: 'borderTop' | 'bottom_btn' | 'layBtn' | 'terms_fix_btn' | 'full' | 'inblock' | 'txtC' | 'txtR';
  wrapMode?: boolean;
  size?: 'sizeL' | 'sizeM' | 'sizeS' | 'sizeFull';
  color?: 'btnWhite' | 'btnBlack' | 'btnBlue';
  type?: 'button' | 'submit';
  disabled?: boolean;
  auto?: boolean;
  label?: string;
  noneStyle?: boolean;
  isPending?: boolean;
  onClick?: (e: MouseEvent) => void;
  onKeyup?: (e: KeyboardEvent) => void;
}

const props = withDefaults(defineProps<Props>(), {
  wrapClass: undefined,
  size: undefined,
  color: undefined,
  type: 'button',
  label: undefined,
  onClick: undefined,
  onKeyup: undefined,
});

const handleClick = (e: MouseEvent) => {
  props.onClick?.(e);
};

const handleKeyup = (e: KeyboardEvent) => {
  props.onKeyup?.(e);
};

const buttonDisabled = computed<boolean>(() => {
  return props.disabled || props.isPending;
});
</script>

<template>
  <div v-if="wrapMode" class="btn_wrap" :class="wrapClass" tabindex="0">
    <button :type="type" :class="noneStyle ? '' : ['btnBasic', size, color, { disabled }, { auto }]" :disabled="buttonDisabled" @click="handleClick" @keyup.enter="handleKeyup">
      <span v-if="label">{{ label }}</span>
    </button>
  </div>
  <button v-else :type="type" :class="noneStyle ? '' : ['btnBasic', size, color, { disabled }, { auto }]" :disabled="buttonDisabled" @click="handleClick" @keyup.enter="handleKeyup">
    <span v-if="label">{{ label }}</span>
  </button>
</template>
