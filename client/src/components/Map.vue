<template>

  <div>
  <div class="header"> 
    <h3>Coronavirus COVID-19 Indian Cases : Ministry of Health and Family Welfare </h3>
  </div>

  <div class="content">
    <div class="left-content">
      <div class="total">
        <p class="title">Total confirmed</p>
        <p class="count">{{total}}</p>
      </div>

      <div class="total lower">
        <p class="title">Total Recovered</p>
        <p class="count green">{{totalRecovered}}</p>
      </div>

      <div class="total lower">
        <p class="title">Total Active</p>
        <p class="count orange">{{totalActive}}</p>
      </div>

      <div class="total lower">
        <p class="title">Total Death</p>
        <p class="count">{{totalDeath}}</p>
      </div>

      <div class="lower">
        <line-chart :chart-data="datacollection"></line-chart>
      </div>
    </div>
    <div class="center-content">
      <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="latLng(21.295132, 81.828232)"
        :options="mapOptions"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate">
        <l-tile-layer
          :url="url"
          :attribution="attribution"/>
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
    <div class="right-content">
      <div class="list">
        <li class="list-item" v-for="(item,key) in cityList" :key="key">
          <div class="details">
            <span class="list-state">{{item.state}}</span><span class="list-count">{{item.total}}</span>
          </div>
        </li>
      </div>
    </div>
  </div>
  <div class="footer">
    <p>Data sourced from :  <a href="https://www.mohfw.gov.in/">MOHFW</a></p>
  </div>
  </div>
</template>

<script>
import { latLng } from 'leaflet';
import { Icon } from 'leaflet';
import { LPopup } from "vue2-leaflet";
import cases from '@/api/case'
import LineChart from './linechart.js'

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  name: "Map",
  components: {
    LPopup,
    LineChart
  },
  data() {
    return {
      datacollection: null,
      zoom: 5,
      center: latLng(21.295132, 81.828232),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 3,
      currentCenter: latLng(23.473324, 77.947998),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      cityList: [],
      total: 0,
      totalActive: 0,
      totalDeath: 0,
      totalRecovered : 0
    };
  },
  mounted() {
    this.loadIndiaData()
    this.loadWorldData()
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
    },
    loadWorldData () {
      cases.loadAllCasesWorld().then(result=> {
        let labels = []
         let data = []
        let indianData = result.data.filter(item => 
          { return item.country === 'India'}
        )
        
        for (let value of Object.values(indianData[0].cases)) {
          data.push(parseInt(value))
        }

        for (let key of Object.keys(indianData[0].cases)) {
          labels.push(parseInt(key))
        }

        this.datacollection = {
        labels: labels,
        datasets: [
          {
            label: 'Daily cases',
            backgroundColor: 'red',
            data: data
          }
        ]
      }
      })
      
    },
    loadIndiaData() {
      cases.loadAllCasesIndia().then(result=> {
        this.total = 0
        this.totalActive = 0
        this.totalDeath = 0
        this.totalRecovered = 0
        this.cityList = result.data
        this.cityList.forEach(element => {
          element.state = element.state.replace("Union Territory of", "")
          this.total += element.total
          this.totalDeath += parseInt(element.dead)
          this.totalRecovered += parseInt(element.recovered)
        });
        this.totalActive = this.total - this.totalDeath - this.totalRecovered
      })
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

.header h3 {
  margin: 0;
}

.content {
  display: flex;
}

.content .left-content {
  width: 25%;
  height: 750px;
  margin-top: 8px;
  margin-right: 4px;
}
.content .center-content {
  width: 50%;
  height: 830px;
  margin-top: 8px;
  margin-left: 4px;
  margin-right: 4px;
}

.content .right-content {
  width: 25%;
  margin-top: 8px;
  margin-left: 4px;
}


.total {
  background: #404040;
  height: 125px;
  padding-top: 23px;
}
.list {
  background: #404040;
  padding: 12px;
  height: 830px;
}
.title {
  color: white;
  font-size: 20px;
  line-height: normal;
  margin: 0;
}
.count {
  font-size: 50px;
  margin: 0;
  font-weight: bold;
  color: #e30101;
}
.green {
  color: green;
}
.orange {
  color: orange;
}
.list .list-item {
  list-style: none;
  font-size: 18px;
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
.footer {
  position: absolute;
  bottom: 0;
  text-align: center;
  font-size: 13px;
  right: 0;
}
.lower {
  margin-top: 8px;
}
#line-chart {
  max-height: 300px;
}
</style>
