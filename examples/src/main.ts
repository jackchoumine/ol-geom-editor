import { Map, View } from 'ol'
import type { Feature } from 'ol'
import { Tile } from 'ol/layer'
import 'ol/ol.css'
import { fromLonLat } from 'ol/proj'
import { OSM } from 'ol/source'
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'

import { GeomEditor } from '../../src/GeomEditor'
import '../../src/geom-editor.scss'

//import { GeomEditor } from '../../dist/index.js'
//import '../../dist/geom-editor.css'

import './style.css'
import { circle, geoJSONObj, lineWKT, pointJSON, polygonWKT } from './testData.ts'

const guiYang = [106.675271, 26.579508]

const guiYang3857 = fromLonLat(guiYang)

// const olDraw = new OlDraw()
const map = new Map({
  target: 'ol-geom-editor-map',
  layers: [
    new Tile({
      source: new OSM(),
    }),
  ],
  // interactions: ,
  view: new View({
    center: guiYang3857, // Initial center (longitude, latitude)
    zoom: 10, // Initial zoom level
  }),
})

const layerStyle = {
  'fill-color': 'rgba(255,255,255,0.4)',
  'stroke-color': '#3399CC',
  'stroke-width': 1.25,
  'circle-radius': 5,
  'circle-fill-color': 'rgba(255,255,255,0.4)',
  'circle-stroke-width': 1.25,
  'circle-stroke-color': '#3399CC',
}

const olDraw = new GeomEditor(map, {
  layerStyle,
})

olDraw.on('select', event => {
  console.log({ event })
})

olDraw.on('deselect', event => {
  console.log({ event })
})
olDraw.on('drawstart', event => {
  console.log({ event })
})
olDraw.on('drawend', event => {
  console.log({ event })
})

olDraw.on('drawBegin', event => {
  console.log({ event })
})

olDraw.on('drawComplete', event => {
  console.log({ event })
})
olDraw.on('translatestart', event => {
  console.log({ event })
})

olDraw.on('translateend', event => {
  console.log({ event })
})
olDraw.on('translateBegin', event => {
  console.log({ event })
})

olDraw.on('translateComplete', event => {
  console.log({ event })
})
olDraw.on('modifystart', event => {
  console.log({ event })
})
olDraw.on('modifyend', event => {
  console.log({ event })
})
olDraw.on('modifyBegin', event => {
  console.log({ event })
})
olDraw.on('modifyComplete', event => {
  console.log({ event })
})
olDraw.on('remove', event => {
  console.log({ event })
})
olDraw.on('complete', event => {
  console.log({ event })
})

document.querySelector('#add-wkt')!.addEventListener('click', addWKT)
document.querySelector('#add-JSON')!.addEventListener('click', addJSON)
document.querySelector('#add-JSONObj')!.addEventListener('click', addJSONObj)
document.querySelector('#remove-feature')!.addEventListener('click', removeFeature)
document.querySelector('#remove-selected-features')!.addEventListener('click', removeSelectedFeatures)
document.querySelector('#remove-all-features')!.addEventListener('click', removeAllFeatures)
document.querySelector('#select-features')!.addEventListener('click', onSelect)
document.querySelector('#deselect-features')!.addEventListener('click', onDeselect)
document.querySelector('#enable-select')!.addEventListener('click', enableSelect)
document.querySelector('#enable-select-single')!.addEventListener('click', enableSingleSelect)
document.querySelector('#disable-select')!.addEventListener('click', disableSelect)
document.querySelector('#translate-features')!.addEventListener('click', onTranslate)
document.querySelector('#disable-translate')!.addEventListener('click', disableTranslate)
document.querySelector('#enable-modify')!.addEventListener('click', enableModify)
document.querySelector('#disable-modify')!.addEventListener('click', disableModify)
document.querySelector('#select-type')!.addEventListener('change', onChangeType)
document.querySelector('#freehand')!.addEventListener('change', onChangeFreehand)

function addWKT() {
  console.log('addWKT')
  olDraw.addFeatureFromWKT(lineWKT, 'line1')
  olDraw.addFeatureFromWKT(polygonWKT)
}

function addJSON() {
  console.log('addJSON')
  // { dataProjection: 'EPSG:4326' }
  olDraw.addFeatureFromJSON(pointJSON)
}

function addJSONObj() {
  console.log('addJSONObj')
  olDraw.addFeatureFromJSON(geoJSONObj)
  olDraw.addFeatureFromJSON(circle)
}

function removeSelectedFeatures() {
  olDraw.removeFeatures()
}

function removeFeature() {
  olDraw.removeFeatures(['line1', 'p2CQqn2lFk'])
}

function removeAllFeatures() {
  olDraw.removeAllFeatures().then(success => {
    console.log({ success })
  })
}

const fillColor = 'rgba(218,228,194,0.5)'
const strokeColor = 'rgba(255, 204, 51, 0.9)'

function onSelect() {
  const features = olDraw.select(['line1', 'p2CQqn2lFk'], {
    selectedStyle: new Style({
      fill: new Fill({
        color: fillColor,
      }),
      stroke: new Stroke({
        color: strokeColor,
        width: 4,
      }),
      image: new CircleStyle({
        radius: 7,
        fill: new Fill({ color: fillColor }),
        stroke: new Stroke({ color: strokeColor, width: 2 }),
      }),
    }),
    eachFeature: (feat: Feature, index: number) => {
      console.log({ feat })
      if (index === 0) return true
    },
  })
  console.log('selected features:', features)
}

function onDeselect() {
  olDraw.deselect(['line1', 'p2CQqn2lFk'])
}

function enableSelect() {
  olDraw.enableSelect()
}

function enableSingleSelect() {
  olDraw.enableSelect({ single: true })
}

function disableSelect() {
  olDraw.disableSelect()
}

function onTranslate() {
  olDraw.enableTranslate()
}

function disableTranslate() {
  olDraw.disableTranslate()
}

function enableModify() {
  olDraw.enableModify()
}

function disableModify() {
  olDraw.disableModify()
}

const canFreehandTypes = ['LineString', 'Polygon']

const flatStyle = {
  'fill-color': 'rgba(255, 200, 200, 0.4)',
  'stroke-color': '#ff0000',
  'stroke-line-dash': [5, 10],
  'circle-radius': 6,
  'circle-fill-color': '#ff0000',
  'circle-stroke-color': 'yellow',
  'circle-stroke-width': 2,
}

function onChangeType(e: Event) {
  const type = (e.target as HTMLSelectElement).value
  console.log('change type to:', type)
  const freehandCheckbox = document.querySelector('#freehand') as HTMLInputElement
  const freehand = document.querySelector('#freehand-box') as HTMLInputElement
  if (canFreehandTypes.includes(type)) {
    // freehand.classList.remove('none')
    freehand.title = 'Freehand drawing for ' + type
    freehandCheckbox.disabled = false
  } else {
    // freehand.classList.add('none')
    freehand.title = '仅线和面支持自由绘制'
    freehandCheckbox.checked = false
    freehandCheckbox.disabled = true
    olDraw.disableFreehand()
  }

  olDraw.enableDraw(
    type as any,
    flatStyle,
    //new Style({
    //  fill: new Fill({ color: 'rgba(255, 200, 200, 0.4)' }),
    //  stroke: new Stroke({ color: '#ff0000', lineDash: [10, 10], width: 2 }),
    //  image: new CircleStyle({
    //    radius: 6,
    //    fill: new Fill({ color: '#ff0000' }),
    //    stroke: new Stroke({ color: '#fff', width: 2 }),
    //  }),
    //}),
  )
}

function onChangeFreehand(e: Event) {
  const freehand = (e.target as HTMLInputElement).checked
  console.log('change freehand to:', freehand)
  if (freehand) {
    olDraw.enableFreehand()
  } else {
    olDraw.disableFreehand()
  }
}

//function enableDraw(type: GeoType, style?: StyleLike | FlatStyle): void {
//  // 只能同时启用一种绘制类型，先禁用之前的绘制
//  this.#draw.value = new Draw({
//    source: this.#source,
//    type,
//    style
//  })
//  this.#map.addInteraction(this.#draw.value)
//}
