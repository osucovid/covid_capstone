<template>
  <div>
    <li
      @mouseover="mouseOver(index)"
      @mouseleave="mouseLeave(index)"
      v-for="(hospital, index) in hospitals"
      class="list-group-item"
      v-bind:key="index"
    >
      {{ index + 1 }}. {{ hospital.name }} {{ hospital.address }}
    </li>
  </div>
</template>

<script>
export default {
  name: "HospitalList",
  props: {
    hospitals: Array,
  },
  methods: {
    mouseOver: function(index) {
      this.$emit("mouse-over-hospital", index);
    },
    mouseLeave: function(index) {
      this.$emit("mouse-left-hospital", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.hospital-list {
  overflow-y: scroll;
  height: 95vh;
  li {
    &:hover {
      background-color: darkgrey;
    }
  }
}
</style>
