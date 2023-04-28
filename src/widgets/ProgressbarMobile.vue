<template>
  <div class="mobileProgressbar">
    {{ this.percents }}
    <progress
      value="50"
      max="100"
      :class="classObject"
      :style="{ '--value': this.percents, '--max': 100 }"
    ></progress>
  </div>
</template>

<script>
export default {
  props: ['percents'],
  computed: {
    classObject() {
      return {
        red: this.percents < 70,
        green: this.percents >= 75,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.mobileProgressbar {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  @property --progress-value {
    syntax: '<integer>';
    inherits: true;
    initial-value: 0;
  }

  --progress-bar-color: #cfd8dc;
  --progress-value-color: orange;

  progress[value] {
    display: block;
    position: relative;
    appearance: none;
    width: 80%;
    height: 6px;
    border: 0;
    --border-radius: 10px;
    border-radius: var(--border-radius);
    counter-reset: progress var(--progress-value);
    --progress-value-string: counter(progress) '%';
    --progress-max-decimal: calc(var(--value, 0) / var(--max, 0));
    --progress-value-decimal: calc(var(--progress-value, 0) / var(--max, 0));
    @supports selector(::-moz-progress-bar) {
      --progress-value-decimal: calc(var(--value, 0) / var(--max, 0));
    }
    --progress-value-percent: calc(var(--progress-value-decimal) * 100%);
    animation: calc(0s * var(--progress-max-decimal)) linear 0.5s 1 normal both progress;
  }

  progress[value]::-webkit-progress-bar {
    background-color: var(--progress-bar-color);
    border-radius: var(--border-radius);
    overflow: hidden;
  }

  progress[value]::-webkit-progress-value {
    width: var(--progress-value-percent) !important;
    background-color: var(--progress-value-color);
    border-radius: var(--border-radius);
  }

  progress[value]::-moz-progress-bar {
    width: var(--progress-value-percent) !important;
    background-color: var(--progress-value-color);
    border-radius: var(--border-radius);
  }
  @keyframes progress {
    from {
      --progress-value: 0;
    }
    to {
      --progress-value: var(--value);
    }
  }
  .red {
    --progress-value-color: red !important;
  }
  .green {
    --progress-value-color: green !important;
  }
}
</style>
