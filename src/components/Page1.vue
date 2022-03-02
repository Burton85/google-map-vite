
<script setup lang="ts">
    import { onMounted,reactive } from 'vue'
    import curICON from '../img/icon-current.png'
    import markICON from '../img/icon-marker.png'
    import pinIcon from '../img/pin-03.png'

    const map: object={}
      // 預設經緯度在信義區附近
    const data: any =[{
          male: false,
          bot: false,
          address: "台北市信義區忠孝東路五段1-7號4樓",
          zip: 110,
          city: "台北市",
          _key: "心品診所",
          name: "心品診所",
          division: "皮膚科",
          lng: 121.564994,
          zone: "北部",
          qrcode: false,
          phone: "02-27567099",
          sort: "d",
          hpv: "A",
          payment: false,
          vip: true,
          lat: 25.041522
      },
      {
          male: false,
          bot: false,
          address: "台北市信義區忠孝東路五段1-7號4樓",
          zip: 110,
          city: "台北市",
          _key: "心品診所",
          name: "心品診所",
          division: "皮膚科",
          lng: 121.564994,
          zone: "北部",
          qrcode: false,
          phone: "02-27567099",
          sort: "d",
          hpv: "A",
          payment: false,
          vip: true,
          lat: 25.041522
      },
      {
          phone: "02-27605757",
          city: "台北市",
          payment: false,
          bot: false,
          address: "台北市信義區永吉路30巷148弄6號",
          zip: 110,
          name: "俊安診所",
          division: "家醫科",
          lng: 121.568465,
          _key: "俊安診所",
          zone: "北部",
          lat: 25.042623,
          sort: "d",
          qrcode: false,
          hpv: false,
          male: false,
          vip: true
      },
      {
          qrcode: false,
          zip: 110,
          bot: false,
          address: "台北市信義區松隆路88號",
          phone: "02-27631373",
          hpv: false,
          vip: true,
          male: false,
          lng: 121.569419,
          name: "松展診所",
          city: "台北市",
          lat: 25.0445809,
          _key: "松展診所",
          zone: "北部",
          division: "小兒科",
          payment: false,
          sort: "d"
      },
      {
          male: false,
          lat: 25.0333271,
          vip: false,
          _key: "臺北市立聯合醫院附設信義門診部",
          phone: "02-87804152",
          city: "台北市",
          zone: "北部",
          payment: false,
          zip: 110,
          lng: 121.5668474,
          qrcode: false,
          sort: "d",
          bot: false,
          name: "臺北市立聯合醫院附設信義門診部",
          division: "其他",
          address: "台北市信義區信義路5段15號1樓",
          hpv: false
    }]
    let currentPosition:any = reactive({
          lat: 25.046891,
          lng: 121.516602
    })
    let centerPosition:any = reactive({})
    let centerPosition_marker:any = reactive({})
    let infowindow:any = reactive({})
    let markerList:any = reactive([])

   // 建立地圖
   function initMap(map:object) {
      // 透過 Map 物件建構子建立新地圖 map 物件實例，並將地圖呈現在 id 為 map 的元素中
      map = new google.maps.Map(document.getElementById("map"), {
        // 設定地圖的中心點經緯度位置
        center: centerPosition,
        // 設定地圖縮放比例 0-20
        zoom: 10,
        // 限制使用者能縮放地圖的最大比例
        maxZoom: 20,
        // 限制使用者能縮放地圖的最小比例
        minZoom: 3,
        // 設定是否呈現右下角街景小人
        streetViewControl: false,
        // 設定是否讓使用者可以切換地圖樣式：一般、衛星圖等
        mapTypeControl: false
      });
      centerPosition_marker = new google.maps.Marker({
            position: centerPosition,
            icon: curICON,
            map: map
      });
      infowindow = new google.maps.InfoWindow({content: ''});
      infowindow.setContent('<div class="info__box"><div class="info__title">您在這裡!</div></div>');
      infowindow.open(map, centerPosition_marker);
    }
   function getCurrentPosition() {
        if (navigator.geolocation) {
            var _options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            function _success(pos:any) {
                var crd = pos.coords;
                console.log('Your current position is:');
                console.log('Latitude : ' + crd.latitude);
                console.log('Longitude: ' + crd.longitude);
                console.log('More or less ' + crd.accuracy + ' meters.');
                currentPosition = {
                    lat: crd.latitude,
                    lng: crd.longitude
                };
                centerPosition = currentPosition
                initMap(map);
            }
            ;function _error(err:any) {
                console.warn('ERROR(' + err.code + '): ' + err.message);
                currentPosition = {
                    lat: 25.046891,
                    lng: 121.516602
                };
            }
            ;navigator.geolocation.getCurrentPosition(_success, _error, _options);
        } else {
            currentPosition = {
                lat: 25.046891,
                lng: 121.516602
            };
        }
    }
    function createClinicMarker() {
      for (var _index = 0; _index < data.length; _index++) {
          var _data = data[_index];	//取得診所相關資料
          if (_data.lat != '' && _data.lng != '') {
            var _marker = new google.maps.Marker({
              position: {
                lat: _data.lat,
                lng: _data.lng
              },
              icon: markICON,
              map: map,
              data: _data,	//<------------ **Marker附加診所資料
            });        
            _marker.addListener('click', function () { //click事件
              // var _currentMarker:any = this;
              // handleMarkerClick(_currentMarker);
            });
            
          markerList.push(_marker);//<------------ 建立Marker列表供後續資料顯示使用
          console.log(markerList)
        }
      }
    }
    onMounted(() => {
        console.log('mounted in the composition api!')
        // initMap(currentPosition.lat,currentPosition.lang,map);
        getCurrentPosition()
        createClinicMarker()
    })
</script>
<template>
  <div class="container mt-4">
    <h2 class="text-center text-secondary pb-2">我的診所</h2>
    <div class="map-container border rounded">
      <ul class="nav justify-content-center border-bottom">
        <!--營運地區 nav-->
      </ul>
      <!--地圖呈現在此-->
      <div class="google-map" id="map"></div>
    </div>
    <ul class="nav justify-content-center border-bottom" v-for="itm in markerList" :key="itm.data.zip">
      <li>{{itm.data.name}}</li>
    </ul>

  </div>
</template>

<style scoped>
.google-map {
  width: 100%;
  height: 400px;
}
</style>