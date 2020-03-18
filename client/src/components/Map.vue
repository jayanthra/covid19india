<template>

  <div>
  <div class="header"> 
    <h2>Coronavirus COVID-19 Indian Cases : Ministry of Health and Family Welfare </h2>
  </div>

  <div class="content">
    <div class="left-content">
      <div class="total">
        <p class="title">Total confirmed</p>
        <p class="count">{{total}}</p>
      </div>
      <div class="list">
        <li class="list-item" v-for="(item,key) in cityList" :key="key">
          <div class="details">
            <span class="list-state">{{item.state}}</span><span class="list-count">{{item.total}}</span>
          </div>
        </li>
      </div>
    </div>
    <div class="right-content">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="latLng(21.295132, 81.828232)"
      :options="mapOptions"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    ><l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <div v-for="(item,key) in cityList" :key="key">
        <l-marker :lat-lng="latLng(item.location.lat, item.location.long)">
        <l-popup>
          <div >
            {{item.state}}
            <p>
              Total : {{item.total}}
            </p>
            <p>
               Dead : {{item.dead}}
            </p>
            <p>
               Recovered : {{item.recovered}}
            </p>
          </div>
        </l-popup>
      </l-marker>
      </div>
    </l-map>
    </div>
  </div>
  
  
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { Icon } from 'leaflet';
import { LPopup } from "vue2-leaflet";
import cases from '@/api/case'

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  name: "Map",
  components: {
    LPopup
  },
  data() {
    return {
      zoom: 5,
      center: latLng(21.295132, 81.828232),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(21.295132, 81.828232),
      withTooltip: latLng(23.473324, 77.947998),
      currentZoom: 3,
      currentCenter: latLng(23.473324, 77.947998),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      cityList: [],
      total: 0,
    };
  },
  mounted() {
    cases.loadAllCases().then(result=> {
      this.total = 0
      this.cityList = result.data
      this.cityList.forEach(element => {
        element.state = element.state.replace("Union Territory of", "")
        console.log('t',  element.state)
        this.total += element.total
      });
    })
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    latLng(x,y) {
      if(x && y)
        return latLng(parseInt(x),parseInt(y))
    }
  }
};
</script>

<style>
.header {
  background: #404040;
  padding: 10px;
  margin: 0;
  color: #bdbdbd;
  border: 1px solid #363636;
}

.header h2 {
  margin: 0;
}

.content {
  display: flex;
}

.content .left-content {
  width: 30%;
  height: 750px;
  margin-top: 8px;
  margin-right: 4px;
}
.content .right-content {
  width: 70%;
  height: 750px;
  margin-top: 8px;
  margin-left: 4px;
}

.total {
  background: #404040;
  height: 20%;
  padding-top: 23px;
}
.list {
  margin-top: 8px;
  background: #404040;
  height: 80%;
  padding: 12px;
}
.title {
  color: white;
  font-size: 26px;
  line-height: normal;
  margin: 0;
}
.count {
  font-size: 64px;
  margin: 0;
  font-weight: bold;
  color: #e30101;
}
.list .list-item {
  list-style: none;
  font-size: 20px;
  margin-bottom: 5px;
  border-bottom: 1px solid #bdbdbd5c;
}
.list-state {
  color: white;
}
.list-count {
  color: #e30101;
  font-weight: bold;
}
.details {
  display: flex;
  justify-content: space-between;
}
</style>
