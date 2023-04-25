<template>
  <div :class="classObject">{{ score }}</div>
</template>

<script>
export default {
  props: ['score', 'isSum'],

  computed: {
    classObject() {
      if (!this.isSum) {
        return {
          cell: true,
          red: this.score < 3,
          green: this.score >= 4,
        };
      }
      return {
        cell: true,
        red: this.score < 9,
        green: this.score >= 12,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  color: orange;
  font-weight: 700;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>
