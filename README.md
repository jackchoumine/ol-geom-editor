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
import { GeomEditor } from 'ol-geom-editor'

const geomEditor = new GeomEditor(olMap) // pass ol map instance
```

> in browser

```html
<script src="https://unpkg.com/ol-geom-editor"></script>
```

then

```js
const { GeomEditor } = 'olGeomEditor'

const geomEditor = new GeomEditor(olMap) // pass ol map instance
```

## create a geomEditor instance

GeomEditor has two params :

```js
GeomEditor(olMapInstance, options)
```

options has some props:

| prop            | type                            | default                                      | desc                         |
| --------------- | ------------------------------- | -------------------------------------------- | ---------------------------- |
| showToolBar     | boolean                         | true                                         | render tool bar or not       |
| supportFreehand | boolean                         | true                                         | support freehand draw or not |
| drawTypes       | Array<string>                   | ['Point', 'LineString', 'Polygon', 'Circle'] | draw geometry types          |
| actions         | Array<string>                   | ['remove', 'modify', 'move', 'complete']     | operations on geometry       |
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

## core functions

### add features

### select feature

### deselect feature

### draw geometry

### modify geometry

### move geometry

### remove geometry

### complete editor
