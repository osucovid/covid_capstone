<template>
  <div class="container">
    <h1 class="text-center text-info ">JSON Map</h1>

    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-danger">Hospital Listx</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6 ">
        <div class="card hospital-list">
          <ul class="list-group list-group-flush">
            <HospitalList
              @mouse-over-hospital="mouseOverHospital"
              @mouse-left-hospital="mouseLeftHospital"
              v-bind:hospitals="hospitals"
            />
          </ul>
          <div class="card-footer">
            Card footer
          </div>
        </div>
      </div>
      <div class="col-6">
        <HospitalMap :hospitals="hospitals" />
      </div>
    </div>
    <!-- <l-map style="height: 350px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-geo-json :geojson="geojson"></l-geo-json>
    </l-map> -->
  </div>
</template>

<script>
// import { latLng } from "leaflet";
// import { LMap, LTileLayer, LMarker, LGeoJson } from "vue2-leaflet";
// import { LMap, LTileLayer, LGeoJson } from "vue2-leaflet";
// import data from "../assets/Historic-Landmarks.json";

import axios from "axios";
import HospitalList from "@/components/partials/HospitalList.vue";
import HospitalMap from "@/components/partials/HospitalMap.vue";

export default {
  name: "JsonMap2",
  components: {
    HospitalList,
    HospitalMap,
    // LMap,
    // LTileLayer,
    // LGeoJson,
    // LMarker,
  },
  data: function() {
    return {
      hospitals: [],
      normalIcon: [15, 15],
      largeIcon: [50, 50],
    };
  },
  mounted: function() {
    //axios returns a promise, not the data
    axios.get("https://data.sfgov.org/resource/dtit-7gp4.json").then((r) => {
      this.hospitals = r.data;
    });
    //to filter out only public hospitals
    // axios.get("https://data.sfgov.org/resource/dtit-7gp4.json").then((r) => {
    //   this.hospitals = r.data
    //     .filter((r) => r.location_type == "Public")
    //     .map((r) => {
    //       r.iconSize = this.normalIcon;
    //       return r;
    //     });
    // });
  },
  methods: {
    mouseOverHospital: function(index) {
      this.hospitals[index].iconSize = this.largeIcon;
      console.log(index + "mouse over");
    },
    mouseLeftHospital: function(index) {
      this.hospitals[index].iconSize = this.normalIcon;
      console.log(index + "mouse left");
    },
  },
};
</script>

<style lang="scss" scoped></style>
