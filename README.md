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
GeomEditor(olMapInstance, options)
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

## GeomEditor has some functions

| function           | desc                                     |
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
| removeFeatures     | remove features                          |
| completeEdit       | complete edit                            |

### add features

### select feature

### deselect feature

### draw geometry

### modify geometry

### move geometry

### remove geometry

### complete editor
