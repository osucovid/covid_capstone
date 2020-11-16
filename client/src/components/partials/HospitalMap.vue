<template>
  <div>
    <div class="row map">
      <!-- <h2>Center is {{ currentCenter }}, zoom level is {{ currentZoom }}</h2> -->
      <!-- {{ hospitals }} -->
      <l-map
        @update:zoom="zoomUpdate"
        @update:center="centerUpdate"
        :zoom="zoom"
        :center="center"
      >
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker
          :key="index"
          v-for="(hospital, index) in hospitals"
          :lat-lng="getLatLng(hospital)"
        ></l-marker>
        <!-- <l-icon :icon-size="hospital.iconSize"></l-icon> -->
      </l-map>
    </div>
    <!-- /.row map -->
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

// var myIcon = {
//   iconUrl: "my-icon.png",
//   iconSize: [38, 95],
//   iconAnchor: [22, 94],
//   popupAnchor: [-3, -76],
//   shadowUrl: "my-icon-shadow.png",
//   shadowSize: [68, 95],
//   shadowAnchor: [22, 94],
// };

export default {
  Name: "HospitalMap",
  props: {
    hospitals: Array,
  },
  //can be written as data() {
  data: function() {
    return {
      zoom: 13,
      center: latLng(37.7749, -122.4194),
      currentCenter: latLng(37.7749, -122.4194),
      currentZoom: 13,
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(37.7749, -122.4194),
      // icon: myIcon,
      // iconSize: [15, 15],
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    // LIcon,
  },
  methods: {
    getLatLng: function(hospital) {
      // console.log(hospital.point.coordinates[1], hospital.point.coordinates[0]);
      return [hospital.point.coordinates[1], hospital.point.coordinates[0]];
    },
    centerUpdate: function(center) {
      this.currentCenter = center;
    },
    zoomUpdate: function(zoom) {
      this.currentZoom = zoom;
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  height: 95vh;
}
</style>
