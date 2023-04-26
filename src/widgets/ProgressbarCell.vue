<template>
  <div class="wrapper">
    <div
      :class="classObject"
      role="progressbar"
      :aria-valuenow="percents"
      aria-valuemin="0"
      aria-valuemax="100"
      :style="{ '--value': percents }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['percents'],
  computed: {
    classObject() {
      return {
        cell: true,
        red: this.percents < 70,
        green: this.percents >= 75,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

[role='progressbar'] {
  --percentage: var(--value);
  --primary: orange;
  --secondary: #e6e6e6;
  --size: 38px;
  width: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
}

[role='progressbar']::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: conic-gradient(var(--primary) calc(var(--percentage) * 1%), var(--secondary) 0);
  mask: radial-gradient(white 55%, transparent 0);
  mask-mode: alpha;
  -webkit-mask: radial-gradient(#0000 55%, #000 0);
  -webkit-mask-mode: alpha;
}

[role='progressbar']::after {
  counter-reset: percentage var(--value);
  content: counter(percentage) '%';
  font-size: 10px;
  color: black;
}
.red {
  --primary: red;
}
.green {
  --primary: green;
}
</style>
