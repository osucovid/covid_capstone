<template>
  <div>
    <div class="row map">
      <h2>Center is {{ currentCenter }}, zoom level is {{ currentZoom }}</h2>
      <!-- {{ hospitals }} -->

      <l-map
        @update:zoom="zoomUpdate"
        @update:center="centerUpdate"
        :zoom="zoom"
        :center="center"
        ref="map"
      >
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <v-geosearch :options="geosearchOptions" />
        <l-marker
          :key="index"
          v-for="(hospital, index) in hospitals"
          :lat-lng="getLatLng(hospital)"
        >
          <!-- delete popup later -->
          <l-popup :content="hospital"></l-popup>
          <l-icon :icon-url="icon" :icon-size="hospital.iconSize" />
        </l-marker>
      </l-map>
      <!-- <pre class="code" v-text="address" /> -->
      {{ address }}
    </div>
    <!-- /.row map -->
  </div>
</template>

<script>
// import L from "leaflet";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";
// import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import VGeosearch from "vue2-leaflet-geosearch";
import hospitalMarker from "@/assets/h-marker.svg";

// /* eslint-disable vue/no-unused-components */

// const provider = new OpenStreetMapProvider();

// const searchControl = new GeoSearchControl({
//   provider: provider,
// });

// const map = new LMap("map");
// map.addControl(searchControl);

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
      geosearchOptions: {
        position: "topright",
        style: "button",
        searchLabel: "Enter address",
        provider: new OpenStreetMapProvider(),
      },
      address: "",
      icon: hospitalMarker,
      iconSize: [15, 15],
      // icon: L.icon({
      //   iconUrl: "src/assets/h-marker.svg",
      //   iconSize: [38, 95],
      //   iconAnchor: [22, 94],
      // popupAnchor: [-3, -76],
      // shadowUrl: "my-icon-shadow.png",
      // shadowSize: [68, 95],
      // shadowAnchor: [22, 94],
      // }),
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    VGeosearch,
    LIcon,
    LPopup,
  },
  mounted() {
    console.log(this);
    this.$refs.map.mapObject.on("geosearch/showlocation", (response) => {
      this.address = response.location.label;
      console.log(this.address);
      console.log(typeof this.address);
    });
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
  height: 100vh;
}
</style>
