<script setup lang="ts">
const props = defineProps<{
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  bgClass?: string;
  mainClass?: string;
  width?: number;
}>();

const sizeClass = `ui-spinner-${props.size ?? "md"}`;
</script>

<template>
  <div class="ui-spinner" :class="sizeClass">
    <span class="ui-spinner__background" :class="[sizeClass, bgClass]">
      <svg class="" viewBox="22 22 44 44">
        <circle
          class="ui-spinner__circle"
          cx="44"
          cy="44"
          r="20"
          fill="none"
          :stroke-width="width ?? 4"
        />
      </svg>
    </span>
    <span class="ui-spinner__main" :class="[sizeClass, mainClass]">
      <svg class="" viewBox="22 22 44 44">
        <circle
          class="ui-spinner__circle"
          cx="44"
          cy="44"
          r="20"
          fill="none"
          :stroke-width="width ?? 4"
        />
      </svg>
    </span>
  </div>
</template>

<style lang="scss">
.ui-spinner {
  display: inline-block;

  position: relative;

  &__main,
  &__background {
    display: inline-block;
  }

  &__main {
    position: absolute;

    top: 0;
    left: 0;

    & .ui-spinner__circle {
      stroke-linecap: round;

      stroke-dasharray: 80px, 200px;
      stroke-dashoffset: 0;
    }

    animation: 550ms linear 0s infinite normal none running spin-animation;
  }

  &__background {
    transform: rotate(-90deg);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &__circle {
    stroke: currentcolor;

    stroke-dasharray: 125.664;
    stroke-dashoffset: 0px;
  }

  &-xl {
    width: 48px;
    height: 48px;
  }

  &-lg {
    width: 40px;
    height: 40px;
  }

  &-md {
    width: 32px;
    height: 32px;
  }

  &-sm {
    width: 24px;
    height: 24px;
  }

  &-xs {
    width: 18px;
    height: 18px;
  }
}

@keyframes spin-animation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
