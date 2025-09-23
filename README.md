# ol-geom-editor

An elegant OpenLayers extension for editing geometric shapes.

## Usage

### install

> in node

```bash
npm i ol-geom-editor
```

then

```js
import { GeomEditor } from olGeomEditor

const geomEditor = new GeomEditor(olMap) // pass ol map instance
```

> in browser

```html
<script src="https://unpkg.com/ol-geom-editor"></script>
```

then

```js
const { GeomEditor } = olGeomEditor

const geomEditor = new GeomEditor(olMap) // pass ol map instance
```

## create a geomEditor instance

GeomEditor has two params:

```js
const geomEditor = new GeomEditor(olMapInstance, options)
```

options has some props:

| prop            | type                            | default                                      | desc                         |
| --------------- | ------------------------------- | -------------------------------------------- | ---------------------------- |
| showToolBar     | boolean                         | true                                         | render tool bar or not       |
| supportFreehand | boolean                         | true                                         | support freehand draw or not |
| drawTypes       | Array                           | ['Point', 'LineString', 'Polygon', 'Circle'] | draw geometry types          |
| actions         | Array                           | ['remove', 'modify', 'move', 'complete']     | operations on geometry       |
| layerStyle      | Style \| StyleLike \| FlatStyle | openLayers default feature style             | default feature style        |
| selectedStyle   | StyleLike                       | below                                        | feature style after style    |

default selected style:

```js
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'

const selectedStyle = new Style({
  fill: new Fill({ color: 'rgba(255,255,255,0.5)' }),
  stroke: new Stroke({
    width: 2.5,
    color: 'red',
  }),
  image: new CircleStyle({
    radius: 5,
    stroke: new Stroke({ width: 2.5, color: 'red' }),
  }),
})
```

## GeomEditor has some methods

| method             | desc                                     |
| ------------------ | ---------------------------------------- |
| addFeatureFromWKT  | add feature by wkt                       |
| addFeatureFromJSON | add feature by GeoJSON or GeoJSON Object |
| enableDraw         | enable draw interaction                  |
| disableDraw        | disable draw interaction                 |
| enableFreehand     | enable freehand draw                     |
| disableFreehand    | disable freehand draw                    |
| select             | select features                          |
| deselect           | deselect features                        |
| enableSelect       | enable select interaction                |
| disableSelect      | disable select interaction               |
| enableModify       | enable modify interaction                |
| disableModify      | disable modify interaction               |
| enableTranslate    | enable translate interaction             |
| disableTranslate   | disable translate interaction            |
| removeFeatures     | remove features                          |
| completeEdit       | complete edit                            |

### add features

You can add feature by WKT or GeoJSON.

> addFeatureFromWKT(wkt:string, id?:string, dataProjection?:string | FeatureOptions)

| param          | type                     | default value | optional | desc            |
| -------------- | ------------------------ | ------------- | -------- | --------------- |
| wkt            | string                   |               | required | WKT             |
| id             | string \| number         | random string | ✅       | id of feature   |
| dataProjection | string \| FeatureOptions | 'EPSG:4326'   | ✅       | EPSG projection |

FeatureOptions is a Object :

| prop              | type      | default value            | optional | desc            |
| ----------------- | --------- | ------------------------ | -------- | --------------- |
| dataProjection    | string    | 'EPSG:4326'              | ✅       | EPSG projection |
| featureProjection | string    | 'EPSG:3857'              | ✅       | map projection  |
| style             | StyleLike | default ol feature style | ✅       | feature style   |

> addFeatureFromJSON(JSON:string | geoJSONObj, dataProjection?:string | FeatureOptions)

#### examples

```js
const lineWKT = 'LINESTRING(106.55773424492708 26.68974989181626,106.79592190619702 26.712142565234185)'
geomEditor.addFeatureFromWKT(lineWKT, 'test', 'EPSG:3857')
const pointJSON = JSON.stringify({
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [106.51521987473564, 26.73992541007939],
  },
  properties: null,
  id: 'p2CQqn2lFk',
})
geomEditor.addFeatureFromJSON(pointJSON, 'EPSG:3857')

const circle = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [106.66476503874576, 26.738016763637745],
        [106.68640913786953, 26.736111276601743],
        [106.70721936319747, 26.730468229538047],
        [106.72639420813869, 26.721305014609847],
        [106.74319560707363, 26.708974566151827],
        [106.75697747969463, 26.69395167555302],
        [106.76721062138205, 26.676814601696407],
        [106.77350297396065, 26.658222705723794],
        [106.77561450846642, 26.63889099150018],
        [106.77346617656862, 26.619562548517454],
        [106.76714262863425, 26.6009799682551],
        [106.75688864282368, 26.58385683635614],
        [106.7430994506547, 26.568850391436218],
        [106.7263053711149, 26.556536388677117],
        [106.70715137023352, 26.54738711575494],
        [106.68637234032467, 26.541753384449873],
        [106.66476503874576, 26.539851168674797],
        [106.64315773716687, 26.541753384449873],
        [106.62237870725802, 26.54738711575494],
        [106.60322470637662, 26.556536388677117],
        [106.58643062683683, 26.568850391436218],
        [106.57264143466786, 26.58385683635614],
        [106.5623874488573, 26.6009799682551],
        [106.55606390092291, 26.619562548517454],
        [106.55391556902511, 26.63889099150018],
        [106.55602710353088, 26.658222705723794],
        [106.56231945610948, 26.676814601696407],
        [106.5725525977969, 26.69395167555302],
        [106.5863344704179, 26.708974566151827],
        [106.60313586935284, 26.721305014609847],
        [106.62231071429407, 26.730468229538047],
        [106.64312093962201, 26.736111276601743],
        [106.66476503874576, 26.738016763637745],
      ],
    ],
  },
  properties: {
    geometryType: 'circle',
    center3857: [11873867.329697348, 3078433.290578392],
    center: [106.66476503874576, 26.638933966156273],
    radius: 11017.51961571537,
  },
}
geomEditor.addFeatureFromJSON(circle, { featureProjection: 'EPSG:3857' })
```

### draw geometry

> enableDraw(type: GeomType, style?: Style | StyleLike | FlatStyle)

| param | type                            | default value           | optional | desc               |
| ----- | ------------------------------- | ----------------------- | -------- | ------------------ |
| type  | string                          |                         | required | draw geometry type |
| style | Style \| StyleLike \| FlatStyle | ol default sketch style | ✅       | sketch style       |

type pass `None` to draw nothing.

> disableDraw() -- disable draw interaction.

> enableFreehand() -- enable freehand draw interaction.
> disableFreehand() -- disable freehand draw interaction.

### select feature

> select(id: Id | Id[], options?: SelectOptions): Feature[]

select some features.

| param   | type                 | default value | optional | desc       |
| ------- | -------------------- | ------------- | -------- | ---------- |
| id      | string \| string[]   |               | required | feature id |
| options | SelectOptions Object | below         | ✅       |            |

options is a object , props :

| prop          | type                             | default value | optional | desc                         |
| ------------- | -------------------------------- | ------------- | -------- | ---------------------------- |
| selectedStyle | Style \| StyleLike \| FlatStyle  | below         | ✅       | selected style               |
| eachFeature   | function                         |               | ✅       | traverse features            |
| fit           | boolean \| viewFitOptions Object | true          | ✅       | fit selected feature to view |

default selected style:

```js
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'

const highlightStyle = new Style({
  fill: new Fill({ color: 'rgba(255,255,255,0.5)' }),
  stroke: new Stroke({
    width: 2.5,
    color: 'red',
  }),
  image: new CircleStyle({
    radius: 5,
    stroke: new Stroke({ width: 2.5, color: 'red' }),
  }),
})
```

eachFeature return truthy value, will stop traverse.

#### examples

```ts
const fillColor = 'rgba(218,228,194,0.5)'
const strokeColor = 'rgba(255, 204, 51, 0.9)'

const features = geomEditor.select(['line1', 'p2CQqn2lFk'], {
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
```

### deselect feature

> deselect(id: Id | Id[], options?: DeselectOptions)

options is a object, props:

| prop            | type                            | default value | optional | desc              |
| --------------- | ------------------------------- | ------------- | -------- | ----------------- |
| deselectedStyle | Style \| StyleLike \| FlatStyle |               | ✅       | deselected style  |
| eachFeature     | function                        |               | ✅       | traverse features |

### examples

```ts
geomEditor.deselect(['line1', 'p2CQqn2lFk'])
```

### modify geometry

> enableModify(style?: StyleLike | FlatStyle) -- enable modify interaction

> disableModify() -- disable modify interaction

### translate geometry

> enableTranslate() -- enable translate interaction

> disableTranslate() -- disable translate interaction

### remove geometry

> removeFeatures(id?: Id | Id[]) - remove features

| param | type               | default value | optional | desc       |
| ----- | ------------------ | ------------- | -------- | ---------- |
| id    | string \| string[] |               | ✅       | feature id |

if don't pass id, will remove all selected features.

#### examples

```ts
geomEditor.removeFeatures() // remove all selected features
geomEditor.removeFeatures('test') // remove one feature by id
geomEditor.removeFeatures(['test1', 'test2']) // remove features by id array
```

### complete editor

> completeEdit() -- complete edit

all features will reset original status.
