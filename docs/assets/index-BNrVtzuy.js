;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n)
  new MutationObserver(n => {
    for (const r of n)
      if (r.type === 'childList')
        for (const o of r.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && i(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function e(n) {
    const r = {}
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : n.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    )
  }
  function i(n) {
    if (n.ep) return
    n.ep = !0
    const r = e(n)
    fetch(n.href, r)
  }
})()
const gl = {
  1: 'The view center is not defined',
  2: 'The view resolution is not defined',
  3: 'The view rotation is not defined',
  4: '`image` and `src` cannot be provided at the same time',
  5: '`imgSize` must be set when `image` is provided',
  7: '`format` must be set when `url` is set',
  8: 'Unknown `serverType` configured',
  9: '`url` must be configured or set using `#setUrl()`',
  10: 'The default `geometryFunction` can only handle `Point` geometries',
  11: '`options.featureTypes` must be an Array',
  12: '`options.geometryName` must also be provided when `options.bbox` is set',
  13: 'Invalid corner',
  14: 'Invalid color',
  15: 'Tried to get a value for a key that does not exist in the cache',
  16: 'Tried to set a value for a key that is used already',
  17: '`resolutions` must be sorted in descending order',
  18: 'Either `origin` or `origins` must be configured, never both',
  19: 'Number of `tileSizes` and `resolutions` must be equal',
  20: 'Number of `origins` and `resolutions` must be equal',
  22: 'Either `tileSize` or `tileSizes` must be configured, never both',
  24: 'Invalid extent or geometry provided as `geometry`',
  25: 'Cannot fit empty extent provided as `geometry`',
  26: 'Features must have an id set',
  27: 'Features must have an id set',
  28: '`renderMode` must be `"hybrid"` or `"vector"`',
  30: 'The passed `feature` was already added to the source',
  31: 'Tried to enqueue an `element` that was already added to the queue',
  32: 'Transformation matrix cannot be inverted',
  33: 'Invalid units',
  34: 'Invalid geometry layout',
  36: 'Unknown SRS type',
  37: 'Unknown geometry type found',
  38: '`styleMapValue` has an unknown type',
  39: 'Unknown geometry type',
  40: 'Expected `feature` to have a geometry',
  41: 'Expected an `ol/style/Style` or an array of `ol/style/Style.js`',
  42: 'Question unknown, the answer is 42',
  43: 'Expected `layers` to be an array or a `Collection`',
  47: 'Expected `controls` to be an array or an `ol/Collection`',
  48: 'Expected `interactions` to be an array or an `ol/Collection`',
  49: 'Expected `overlays` to be an array or an `ol/Collection`',
  50: '`options.featureTypes` should be an Array',
  51: 'Either `url` or `tileJSON` options must be provided',
  52: 'Unknown `serverType` configured',
  53: 'Unknown `tierSizeCalculation` configured',
  55: 'The {-y} placeholder requires a tile grid with extent',
  56: 'mapBrowserEvent must originate from a pointer event',
  57: 'At least 2 conditions are required',
  59: 'Invalid command found in the PBF',
  60: 'Missing or invalid `size`',
  61: 'Cannot determine IIIF Image API version from provided image information JSON',
  62: 'A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`',
  64: 'Layer opacity must be a number',
  66: '`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has not been enabled. This is done by providing adequate shaders using the `hitVertexShader` and `hitFragmentShader` properties of `WebGLPointsLayerRenderer`',
  67: 'A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both',
  68: 'A VectorTile source can only be rendered if it has a projection compatible with the view projection',
  69: '`width` or `height` cannot be provided together with `scale`',
}
class qo extends Error {
  constructor(t) {
    const e = gl[t]
    ;(super(e), (this.code = t), (this.name = 'AssertionError'), (this.message = e))
  }
}
class at {
  constructor(t) {
    ;(this.propagationStopped, this.defaultPrevented, (this.type = t), (this.target = null))
  }
  preventDefault() {
    this.defaultPrevented = !0
  }
  stopPropagation() {
    this.propagationStopped = !0
  }
}
const yi = { PROPERTYCHANGE: 'propertychange' }
class nr {
  constructor() {
    this.disposed = !1
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal())
  }
  disposeInternal() {}
}
function _l(s, t, e) {
  let i, n
  e = e || Ne
  let r = 0,
    o = s.length,
    a = !1
  for (; r < o; ) ((i = r + ((o - r) >> 1)), (n = +e(s[i], t)), n < 0 ? (r = i + 1) : ((o = i), (a = !n)))
  return a ? r : ~r
}
function Ne(s, t) {
  return s > t ? 1 : s < t ? -1 : 0
}
function sr(s, t, e) {
  if (s[0] <= t) return 0
  const i = s.length
  if (t <= s[i - 1]) return i - 1
  if (typeof e == 'function') {
    for (let n = 1; n < i; ++n) {
      const r = s[n]
      if (r === t) return n
      if (r < t) return e(t, s[n - 1], r) > 0 ? n - 1 : n
    }
    return i - 1
  }
  if (e > 0) {
    for (let n = 1; n < i; ++n) if (s[n] < t) return n - 1
    return i - 1
  }
  if (e < 0) {
    for (let n = 1; n < i; ++n) if (s[n] <= t) return n
    return i - 1
  }
  for (let n = 1; n < i; ++n) {
    if (s[n] == t) return n
    if (s[n] < t) return s[n - 1] - t < t - s[n] ? n - 1 : n
  }
  return i - 1
}
function ml(s, t, e) {
  for (; t < e; ) {
    const i = s[t]
    ;((s[t] = s[e]), (s[e] = i), ++t, --e)
  }
}
function Vt(s, t) {
  const e = Array.isArray(t) ? t : [t],
    i = e.length
  for (let n = 0; n < i; n++) s[s.length] = e[n]
}
function ce(s, t) {
  const e = s.length
  if (e !== t.length) return !1
  for (let i = 0; i < e; i++) if (s[i] !== t[i]) return !1
  return !0
}
function pl(s, t, e) {
  const i = t || Ne
  return s.every(function (n, r) {
    if (r === 0) return !0
    const o = i(s[r - 1], n)
    return !(o > 0 || o === 0)
  })
}
function le() {
  return !0
}
function Be() {
  return !1
}
function xi() {}
function yl(s) {
  let t = !1,
    e,
    i,
    n
  return function () {
    const r = Array.prototype.slice.call(arguments)
    return (
      (!t || this !== n || !ce(r, i)) && ((t = !0), (n = this), (i = r), (e = s.apply(this, arguments))),
      e
    )
  }
}
function Zi(s) {
  for (const t in s) delete s[t]
}
function Ei(s) {
  let t
  for (t in s) return !1
  return !t
}
class $n extends nr {
  constructor(t) {
    ;(super(),
      (this.eventTarget_ = t),
      (this.pendingRemovals_ = null),
      (this.dispatching_ = null),
      (this.listeners_ = null))
  }
  addEventListener(t, e) {
    if (!t || !e) return
    const i = this.listeners_ || (this.listeners_ = {}),
      n = i[t] || (i[t] = [])
    n.includes(e) || n.push(e)
  }
  dispatchEvent(t) {
    const e = typeof t == 'string',
      i = e ? t : t.type,
      n = this.listeners_ && this.listeners_[i]
    if (!n) return
    const r = e ? new at(t) : t
    r.target || (r.target = this.eventTarget_ || this)
    const o = this.dispatching_ || (this.dispatching_ = {}),
      a = this.pendingRemovals_ || (this.pendingRemovals_ = {})
    ;(i in o || ((o[i] = 0), (a[i] = 0)), ++o[i])
    let l
    for (let h = 0, c = n.length; h < c; ++h)
      if (
        ('handleEvent' in n[h] ? (l = n[h].handleEvent(r)) : (l = n[h].call(this, r)),
        l === !1 || r.propagationStopped)
      ) {
        l = !1
        break
      }
    if (--o[i] === 0) {
      let h = a[i]
      for (delete a[i]; h--; ) this.removeEventListener(i, xi)
      delete o[i]
    }
    return l
  }
  disposeInternal() {
    this.listeners_ && Zi(this.listeners_)
  }
  getListeners(t) {
    return (this.listeners_ && this.listeners_[t]) || void 0
  }
  hasListener(t) {
    return this.listeners_ ? (t ? t in this.listeners_ : Object.keys(this.listeners_).length > 0) : !1
  }
  removeEventListener(t, e) {
    const i = this.listeners_ && this.listeners_[t]
    if (i) {
      const n = i.indexOf(e)
      n !== -1 &&
        (this.pendingRemovals_ && t in this.pendingRemovals_
          ? ((i[n] = xi), ++this.pendingRemovals_[t])
          : (i.splice(n, 1), i.length === 0 && delete this.listeners_[t]))
    }
  }
}
const O = {
  CHANGE: 'change',
  ERROR: 'error',
  CONTEXTMENU: 'contextmenu',
  CLICK: 'click',
  DBLCLICK: 'dblclick',
  KEYDOWN: 'keydown',
  KEYPRESS: 'keypress',
  LOAD: 'load',
  TOUCHMOVE: 'touchmove',
  WHEEL: 'wheel',
}
function j(s, t, e, i, n) {
  if ((i && i !== s && (e = e.bind(i)), n)) {
    const o = e
    e = function () {
      ;(s.removeEventListener(t, e), o.apply(this, arguments))
    }
  }
  const r = { target: s, type: t, listener: e }
  return (s.addEventListener(t, e), r)
}
function Dn(s, t, e, i) {
  return j(s, t, e, i, !0)
}
function q(s) {
  s && s.target && (s.target.removeEventListener(s.type, s.listener), Zi(s))
}
class qi extends $n {
  constructor() {
    ;(super(),
      (this.on = this.onInternal),
      (this.once = this.onceInternal),
      (this.un = this.unInternal),
      (this.revision_ = 0))
  }
  changed() {
    ;(++this.revision_, this.dispatchEvent(O.CHANGE))
  }
  getRevision() {
    return this.revision_
  }
  onInternal(t, e) {
    if (Array.isArray(t)) {
      const i = t.length,
        n = new Array(i)
      for (let r = 0; r < i; ++r) n[r] = j(this, t[r], e)
      return n
    }
    return j(this, t, e)
  }
  onceInternal(t, e) {
    let i
    if (Array.isArray(t)) {
      const n = t.length
      i = new Array(n)
      for (let r = 0; r < n; ++r) i[r] = Dn(this, t[r], e)
    } else i = Dn(this, t, e)
    return ((e.ol_key = i), i)
  }
  unInternal(t, e) {
    const i = e.ol_key
    if (i) An(i)
    else if (Array.isArray(t)) for (let n = 0, r = t.length; n < r; ++n) this.removeEventListener(t[n], e)
    else this.removeEventListener(t, e)
  }
}
qi.prototype.on
qi.prototype.once
qi.prototype.un
function An(s) {
  if (Array.isArray(s)) for (let t = 0, e = s.length; t < e; ++t) q(s[t])
  else q(s)
}
function F() {
  throw new Error('Unimplemented abstract method.')
}
let xl = 0
function D(s) {
  return s.ol_uid || (s.ol_uid = String(++xl))
}
class Ur extends at {
  constructor(t, e, i) {
    ;(super(t), (this.key = e), (this.oldValue = i))
  }
}
class Xt extends qi {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      D(this),
      (this.values_ = null),
      t !== void 0 && this.setProperties(t))
  }
  get(t) {
    let e
    return (this.values_ && this.values_.hasOwnProperty(t) && (e = this.values_[t]), e)
  }
  getKeys() {
    return (this.values_ && Object.keys(this.values_)) || []
  }
  getProperties() {
    return (this.values_ && Object.assign({}, this.values_)) || {}
  }
  hasProperties() {
    return !!this.values_
  }
  notify(t, e) {
    let i
    ;((i = `change:${t}`),
      this.hasListener(i) && this.dispatchEvent(new Ur(i, t, e)),
      (i = yi.PROPERTYCHANGE),
      this.hasListener(i) && this.dispatchEvent(new Ur(i, t, e)))
  }
  addChangeListener(t, e) {
    this.addEventListener(`change:${t}`, e)
  }
  removeChangeListener(t, e) {
    this.removeEventListener(`change:${t}`, e)
  }
  set(t, e, i) {
    const n = this.values_ || (this.values_ = {})
    if (i) n[t] = e
    else {
      const r = n[t]
      ;((n[t] = e), r !== e && this.notify(t, r))
    }
  }
  setProperties(t, e) {
    for (const i in t) this.set(i, t[i], e)
  }
  applyProperties(t) {
    t.values_ && Object.assign(this.values_ || (this.values_ = {}), t.values_)
  }
  unset(t, e) {
    if (this.values_ && t in this.values_) {
      const i = this.values_[t]
      ;(delete this.values_[t], Ei(this.values_) && (this.values_ = null), e || this.notify(t, i))
    }
  }
}
const ot = { ADD: 'add', REMOVE: 'remove' },
  Zr = { LENGTH: 'length' }
class dn extends at {
  constructor(t, e, i) {
    ;(super(t), (this.element = e), (this.index = i))
  }
}
class ut extends Xt {
  constructor(t, e) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (e = e || {}),
      (this.unique_ = !!e.unique),
      (this.array_ = t || []),
      this.unique_)
    )
      for (let i = 0, n = this.array_.length; i < n; ++i) this.assertUnique_(this.array_[i], i)
    this.updateLength_()
  }
  clear() {
    for (; this.getLength() > 0; ) this.pop()
  }
  extend(t) {
    for (let e = 0, i = t.length; e < i; ++e) this.push(t[e])
    return this
  }
  forEach(t) {
    const e = this.array_
    for (let i = 0, n = e.length; i < n; ++i) t(e[i], i, e)
  }
  getArray() {
    return this.array_
  }
  item(t) {
    return this.array_[t]
  }
  getLength() {
    return this.get(Zr.LENGTH)
  }
  insertAt(t, e) {
    if (t < 0 || t > this.getLength()) throw new Error('Index out of bounds: ' + t)
    ;(this.unique_ && this.assertUnique_(e),
      this.array_.splice(t, 0, e),
      this.updateLength_(),
      this.dispatchEvent(new dn(ot.ADD, e, t)))
  }
  pop() {
    return this.removeAt(this.getLength() - 1)
  }
  push(t) {
    this.unique_ && this.assertUnique_(t)
    const e = this.getLength()
    return (this.insertAt(e, t), this.getLength())
  }
  remove(t) {
    const e = this.array_
    for (let i = 0, n = e.length; i < n; ++i) if (e[i] === t) return this.removeAt(i)
  }
  removeAt(t) {
    if (t < 0 || t >= this.getLength()) return
    const e = this.array_[t]
    return (this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(new dn(ot.REMOVE, e, t)), e)
  }
  setAt(t, e) {
    const i = this.getLength()
    if (t >= i) {
      this.insertAt(t, e)
      return
    }
    if (t < 0) throw new Error('Index out of bounds: ' + t)
    this.unique_ && this.assertUnique_(e, t)
    const n = this.array_[t]
    ;((this.array_[t] = e),
      this.dispatchEvent(new dn(ot.REMOVE, n, t)),
      this.dispatchEvent(new dn(ot.ADD, e, t)))
  }
  updateLength_() {
    this.set(Zr.LENGTH, this.array_.length)
  }
  assertUnique_(t, e) {
    for (let i = 0, n = this.array_.length; i < n; ++i) if (this.array_[i] === t && i !== e) throw new qo(58)
  }
}
function G(s, t) {
  if (!s) throw new qo(t)
}
class _t extends Xt {
  constructor(t) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (this.id_ = void 0),
      (this.geometryName_ = 'geometry'),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      (this.geometryChangeKey_ = null),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      t)
    )
      if (typeof t.getSimplifiedGeometry == 'function') {
        const e = t
        this.setGeometry(e)
      } else {
        const e = t
        this.setProperties(e)
      }
  }
  clone() {
    const t = new _t(this.hasProperties() ? this.getProperties() : null)
    t.setGeometryName(this.getGeometryName())
    const e = this.getGeometry()
    e && t.setGeometry(e.clone())
    const i = this.getStyle()
    return (i && t.setStyle(i), t)
  }
  getGeometry() {
    return this.get(this.geometryName_)
  }
  getId() {
    return this.id_
  }
  getGeometryName() {
    return this.geometryName_
  }
  getStyle() {
    return this.style_
  }
  getStyleFunction() {
    return this.styleFunction_
  }
  handleGeometryChange_() {
    this.changed()
  }
  handleGeometryChanged_() {
    this.geometryChangeKey_ && (q(this.geometryChangeKey_), (this.geometryChangeKey_ = null))
    const t = this.getGeometry()
    ;(t && (this.geometryChangeKey_ = j(t, O.CHANGE, this.handleGeometryChange_, this)), this.changed())
  }
  setGeometry(t) {
    this.set(this.geometryName_, t)
  }
  setStyle(t) {
    ;((this.style_ = t), (this.styleFunction_ = t ? El(t) : void 0), this.changed())
  }
  setId(t) {
    ;((this.id_ = t), this.changed())
  }
  setGeometryName(t) {
    ;(this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_),
      (this.geometryName_ = t),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      this.handleGeometryChanged_())
  }
}
function El(s) {
  if (typeof s == 'function') return s
  let t
  return (
    Array.isArray(s) ? (t = s) : (G(typeof s.getZIndex == 'function', 41), (t = [s])),
    function () {
      return t
    }
  )
}
const ve =
    typeof navigator < 'u' && typeof navigator.userAgent < 'u' ? navigator.userAgent.toLowerCase() : '',
  Cl = ve.includes('firefox'),
  wl = ve.includes('safari') && !ve.includes('chrom')
wl && (ve.includes('version/15.4') || /cpu (os|iphone os) 15_4 like mac os x/.test(ve))
const Tl = ve.includes('webkit') && !ve.includes('edge'),
  Ho = ve.includes('macintosh'),
  Jo = typeof devicePixelRatio < 'u' ? devicePixelRatio : 1,
  rr = typeof WorkerGlobalScope < 'u' && typeof OffscreenCanvas < 'u' && self instanceof WorkerGlobalScope,
  Sl = typeof Image < 'u' && Image.prototype.decode,
  $o = (function () {
    let s = !1
    try {
      const t = Object.defineProperty({}, 'passive', {
        get: function () {
          s = !0
        },
      })
      ;(window.addEventListener('_', null, t), window.removeEventListener('_', null, t))
    } catch {}
    return s
  })()
new Array(6)
function Kt() {
  return [1, 0, 0, 1, 0, 0]
}
function vl(s, t, e, i, n, r, o) {
  return ((s[0] = t), (s[1] = e), (s[2] = i), (s[3] = n), (s[4] = r), (s[5] = o), s)
}
function Rl(s, t) {
  return ((s[0] = t[0]), (s[1] = t[1]), (s[2] = t[2]), (s[3] = t[3]), (s[4] = t[4]), (s[5] = t[5]), s)
}
function rt(s, t) {
  const e = t[0],
    i = t[1]
  return ((t[0] = s[0] * e + s[2] * i + s[4]), (t[1] = s[1] * e + s[3] * i + s[5]), t)
}
function Il(s, t, e) {
  return vl(s, t, 0, 0, e, 0, 0)
}
function Re(s, t, e, i, n, r, o, a) {
  const l = Math.sin(r),
    h = Math.cos(r)
  return (
    (s[0] = i * h),
    (s[1] = n * l),
    (s[2] = -i * l),
    (s[3] = n * h),
    (s[4] = o * i * h - a * i * l + t),
    (s[5] = o * n * l + a * n * h + e),
    s
  )
}
function or(s, t) {
  const e = bl(t)
  G(e !== 0, 32)
  const i = t[0],
    n = t[1],
    r = t[2],
    o = t[3],
    a = t[4],
    l = t[5]
  return (
    (s[0] = o / e),
    (s[1] = -n / e),
    (s[2] = -r / e),
    (s[3] = i / e),
    (s[4] = (r * l - o * a) / e),
    (s[5] = -(i * l - n * a) / e),
    s
  )
}
function bl(s) {
  return s[0] * s[3] - s[1] * s[2]
}
let qr
function Qo(s) {
  const t = 'matrix(' + s.join(', ') + ')'
  if (rr) return t
  const e = qr || (qr = document.createElement('div'))
  return ((e.style.transform = t), e.style.transform)
}
const st = { UNKNOWN: 0, INTERSECTING: 1, ABOVE: 2, RIGHT: 4, BELOW: 8, LEFT: 16 }
function gt(s) {
  const t = Ct()
  for (let e = 0, i = s.length; e < i; ++e) ki(t, s[e])
  return t
}
function Hi(s, t, e) {
  return e
    ? ((e[0] = s[0] - t), (e[1] = s[1] - t), (e[2] = s[2] + t), (e[3] = s[3] + t), e)
    : [s[0] - t, s[1] - t, s[2] + t, s[3] + t]
}
function ta(s, t) {
  return t ? ((t[0] = s[0]), (t[1] = s[1]), (t[2] = s[2]), (t[3] = s[3]), t) : s.slice()
}
function Ve(s, t, e) {
  let i, n
  return (
    t < s[0] ? (i = s[0] - t) : s[2] < t ? (i = t - s[2]) : (i = 0),
    e < s[1] ? (n = s[1] - e) : s[3] < e ? (n = e - s[3]) : (n = 0),
    i * i + n * n
  )
}
function Qn(s, t) {
  return ar(s, t[0], t[1])
}
function ci(s, t) {
  return s[0] <= t[0] && t[2] <= s[2] && s[1] <= t[1] && t[3] <= s[3]
}
function ar(s, t, e) {
  return s[0] <= t && t <= s[2] && s[1] <= e && e <= s[3]
}
function Ns(s, t) {
  const e = s[0],
    i = s[1],
    n = s[2],
    r = s[3],
    o = t[0],
    a = t[1]
  let l = st.UNKNOWN
  return (
    o < e ? (l = l | st.LEFT) : o > n && (l = l | st.RIGHT),
    a < i ? (l = l | st.BELOW) : a > r && (l = l | st.ABOVE),
    l === st.UNKNOWN && (l = st.INTERSECTING),
    l
  )
}
function Ct() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0]
}
function he(s, t, e, i, n) {
  return n ? ((n[0] = s), (n[1] = t), (n[2] = e), (n[3] = i), n) : [s, t, e, i]
}
function Ji(s) {
  return he(1 / 0, 1 / 0, -1 / 0, -1 / 0, s)
}
function On(s, t) {
  const e = s[0],
    i = s[1]
  return he(e, i, e, i, t)
}
function ea(s, t, e, i, n) {
  const r = Ji(n)
  return ia(r, s, t, e, i)
}
function Gi(s, t) {
  return s[0] == t[0] && s[2] == t[2] && s[1] == t[1] && s[3] == t[3]
}
function lr(s, t) {
  return (
    t[0] < s[0] && (s[0] = t[0]),
    t[2] > s[2] && (s[2] = t[2]),
    t[1] < s[1] && (s[1] = t[1]),
    t[3] > s[3] && (s[3] = t[3]),
    s
  )
}
function ki(s, t) {
  ;(t[0] < s[0] && (s[0] = t[0]),
    t[0] > s[2] && (s[2] = t[0]),
    t[1] < s[1] && (s[1] = t[1]),
    t[1] > s[3] && (s[3] = t[1]))
}
function ia(s, t, e, i, n) {
  for (; e < i; e += n) Fl(s, t[e], t[e + 1])
  return s
}
function Fl(s, t, e) {
  ;((s[0] = Math.min(s[0], t)),
    (s[1] = Math.min(s[1], e)),
    (s[2] = Math.max(s[2], t)),
    (s[3] = Math.max(s[3], e)))
}
function hr(s, t) {
  let e
  return ((e = t(ts(s))), e || ((e = t(es(s))), e) || ((e = t(is(s))), e) || ((e = t(Ke(s))), e) ? e : !1)
}
function Xs(s) {
  let t = 0
  return (ns(s) || (t = $(s) * Zt(s)), t)
}
function ts(s) {
  return [s[0], s[1]]
}
function es(s) {
  return [s[2], s[1]]
}
function Xe(s) {
  return [(s[0] + s[2]) / 2, (s[1] + s[3]) / 2]
}
function Ll(s, t) {
  let e
  return (
    t === 'bottom-left'
      ? (e = ts(s))
      : t === 'bottom-right'
        ? (e = es(s))
        : t === 'top-left'
          ? (e = Ke(s))
          : t === 'top-right'
            ? (e = is(s))
            : G(!1, 13),
    e
  )
}
function Ws(s, t, e, i, n) {
  const [r, o, a, l, h, c, u, d] = Ys(s, t, e, i)
  return he(Math.min(r, a, h, u), Math.min(o, l, c, d), Math.max(r, a, h, u), Math.max(o, l, c, d), n)
}
function Ys(s, t, e, i) {
  const n = (t * i[0]) / 2,
    r = (t * i[1]) / 2,
    o = Math.cos(e),
    a = Math.sin(e),
    l = n * o,
    h = n * a,
    c = r * o,
    u = r * a,
    d = s[0],
    f = s[1]
  return [
    d - l + u,
    f - h - c,
    d - l - u,
    f - h + c,
    d + l - u,
    f + h + c,
    d + l + u,
    f + h - c,
    d - l + u,
    f - h - c,
  ]
}
function Zt(s) {
  return s[3] - s[1]
}
function Di(s, t, e) {
  const i = e || Ct()
  return (
    mt(s, t)
      ? (s[0] > t[0] ? (i[0] = s[0]) : (i[0] = t[0]),
        s[1] > t[1] ? (i[1] = s[1]) : (i[1] = t[1]),
        s[2] < t[2] ? (i[2] = s[2]) : (i[2] = t[2]),
        s[3] < t[3] ? (i[3] = s[3]) : (i[3] = t[3]))
      : Ji(i),
    i
  )
}
function Ke(s) {
  return [s[0], s[3]]
}
function is(s) {
  return [s[2], s[3]]
}
function $(s) {
  return s[2] - s[0]
}
function mt(s, t) {
  return s[0] <= t[2] && s[2] >= t[0] && s[1] <= t[3] && s[3] >= t[1]
}
function ns(s) {
  return s[2] < s[0] || s[3] < s[1]
}
function Pl(s, t) {
  return t ? ((t[0] = s[0]), (t[1] = s[1]), (t[2] = s[2]), (t[3] = s[3]), t) : s
}
function Ml(s, t, e) {
  let i = !1
  const n = Ns(s, t),
    r = Ns(s, e)
  if (n === st.INTERSECTING || r === st.INTERSECTING) i = !0
  else {
    const o = s[0],
      a = s[1],
      l = s[2],
      h = s[3],
      c = t[0],
      u = t[1],
      d = e[0],
      f = e[1],
      g = (f - u) / (d - c)
    let _, m
    ;(r & st.ABOVE && !(n & st.ABOVE) && ((_ = d - (f - h) / g), (i = _ >= o && _ <= l)),
      !i && r & st.RIGHT && !(n & st.RIGHT) && ((m = f - (d - l) * g), (i = m >= a && m <= h)),
      !i && r & st.BELOW && !(n & st.BELOW) && ((_ = d - (f - a) / g), (i = _ >= o && _ <= l)),
      !i && r & st.LEFT && !(n & st.LEFT) && ((m = f - (d - o) * g), (i = m >= a && m <= h)))
  }
  return i
}
function na(s, t) {
  const e = t.getExtent(),
    i = Xe(s)
  if (t.canWrapX() && (i[0] < e[0] || i[0] >= e[2])) {
    const n = $(e),
      o = Math.floor((i[0] - e[0]) / n) * n
    ;((s[0] -= o), (s[2] -= o))
  }
  return s
}
function Al(s, t) {
  if (t.canWrapX()) {
    const e = t.getExtent()
    if (!isFinite(s[0]) || !isFinite(s[2])) return [[e[0], s[1], e[2], s[3]]]
    na(s, t)
    const i = $(e)
    if ($(s) > i) return [[e[0], s[1], e[2], s[3]]]
    if (s[0] < e[0])
      return [
        [s[0] + i, s[1], e[2], s[3]],
        [e[0], s[1], s[2], s[3]],
      ]
    if (s[2] > e[2])
      return [
        [s[0], s[1], e[2], s[3]],
        [e[0], s[1], s[2] - i, s[3]],
      ]
  }
  return [s]
}
const cr = {
  radians: 6370997 / (2 * Math.PI),
  degrees: (2 * Math.PI * 6370997) / 360,
  ft: 0.3048,
  m: 1,
  'us-ft': 1200 / 3937,
}
class sa {
  constructor(t) {
    ;((this.code_ = t.code),
      (this.units_ = t.units),
      (this.extent_ = t.extent !== void 0 ? t.extent : null),
      (this.worldExtent_ = t.worldExtent !== void 0 ? t.worldExtent : null),
      (this.axisOrientation_ = t.axisOrientation !== void 0 ? t.axisOrientation : 'enu'),
      (this.global_ = t.global !== void 0 ? t.global : !1),
      (this.canWrapX_ = !!(this.global_ && this.extent_)),
      (this.getPointResolutionFunc_ = t.getPointResolution),
      (this.defaultTileGrid_ = null),
      (this.metersPerUnit_ = t.metersPerUnit))
  }
  canWrapX() {
    return this.canWrapX_
  }
  getCode() {
    return this.code_
  }
  getExtent() {
    return this.extent_
  }
  getUnits() {
    return this.units_
  }
  getMetersPerUnit() {
    return this.metersPerUnit_ || cr[this.units_]
  }
  getWorldExtent() {
    return this.worldExtent_
  }
  getAxisOrientation() {
    return this.axisOrientation_
  }
  isGlobal() {
    return this.global_
  }
  setGlobal(t) {
    ;((this.global_ = t), (this.canWrapX_ = !!(t && this.extent_)))
  }
  getDefaultTileGrid() {
    return this.defaultTileGrid_
  }
  setDefaultTileGrid(t) {
    this.defaultTileGrid_ = t
  }
  setExtent(t) {
    ;((this.extent_ = t), (this.canWrapX_ = !!(this.global_ && t)))
  }
  setWorldExtent(t) {
    this.worldExtent_ = t
  }
  setGetPointResolution(t) {
    this.getPointResolutionFunc_ = t
  }
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_
  }
}
const $i = 6378137,
  ui = Math.PI * $i,
  Ol = [-ui, -ui, ui, ui],
  kl = [-180, -85, 180, 85],
  fn = $i * Math.log(Math.tan(Math.PI / 2))
class ti extends sa {
  constructor(t) {
    super({
      code: t,
      units: 'm',
      extent: Ol,
      global: !0,
      worldExtent: kl,
      getPointResolution: function (e, i) {
        return e / Math.cosh(i[1] / $i)
      },
    })
  }
}
const Hr = [
  new ti('EPSG:3857'),
  new ti('EPSG:102100'),
  new ti('EPSG:102113'),
  new ti('EPSG:900913'),
  new ti('http://www.opengis.net/def/crs/EPSG/0/3857'),
  new ti('http://www.opengis.net/gml/srs/epsg.xml#3857'),
]
function Dl(s, t, e) {
  const i = s.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = s.slice()) : (t = new Array(i))))
  for (let n = 0; n < i; n += e) {
    t[n] = (ui * s[n]) / 180
    let r = $i * Math.log(Math.tan((Math.PI * (+s[n + 1] + 90)) / 360))
    ;(r > fn ? (r = fn) : r < -fn && (r = -fn), (t[n + 1] = r))
  }
  return t
}
function jl(s, t, e) {
  const i = s.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = s.slice()) : (t = new Array(i))))
  for (let n = 0; n < i; n += e)
    ((t[n] = (180 * s[n]) / ui), (t[n + 1] = (360 * Math.atan(Math.exp(s[n + 1] / $i))) / Math.PI - 90))
  return t
}
const Gl = 6378137,
  Jr = [-180, -90, 180, 90],
  Nl = (Math.PI * Gl) / 180
class Le extends sa {
  constructor(t, e) {
    super({
      code: t,
      units: 'degrees',
      extent: Jr,
      axisOrientation: e,
      global: !0,
      metersPerUnit: Nl,
      worldExtent: Jr,
    })
  }
}
const $r = [
  new Le('CRS:84'),
  new Le('EPSG:4326', 'neu'),
  new Le('urn:ogc:def:crs:OGC:1.3:CRS84'),
  new Le('urn:ogc:def:crs:OGC:2:84'),
  new Le('http://www.opengis.net/def/crs/OGC/1.3/CRS84'),
  new Le('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
  new Le('http://www.opengis.net/def/crs/EPSG/0/4326', 'neu'),
]
let zs = {}
function Xl(s) {
  return zs[s] || zs[s.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] || null
}
function Wl(s, t) {
  zs[s] = t
}
let gi = {}
function jn(s, t, e) {
  const i = s.getCode(),
    n = t.getCode()
  ;(i in gi || (gi[i] = {}), (gi[i][n] = e))
}
function Yl(s, t) {
  let e
  return (s in gi && t in gi[s] && (e = gi[s][t]), e)
}
function tt(s, t, e) {
  return Math.min(Math.max(s, t), e)
}
function zl(s, t, e, i, n, r) {
  const o = n - e,
    a = r - i
  if (o !== 0 || a !== 0) {
    const l = ((s - e) * o + (t - i) * a) / (o * o + a * a)
    l > 1 ? ((e = n), (i = r)) : l > 0 && ((e += o * l), (i += a * l))
  }
  return se(s, t, e, i)
}
function se(s, t, e, i) {
  const n = e - s,
    r = i - t
  return n * n + r * r
}
function Bl(s) {
  const t = s.length
  for (let i = 0; i < t; i++) {
    let n = i,
      r = Math.abs(s[i][i])
    for (let a = i + 1; a < t; a++) {
      const l = Math.abs(s[a][i])
      l > r && ((r = l), (n = a))
    }
    if (r === 0) return null
    const o = s[n]
    ;((s[n] = s[i]), (s[i] = o))
    for (let a = i + 1; a < t; a++) {
      const l = -s[a][i] / s[i][i]
      for (let h = i; h < t + 1; h++) i == h ? (s[a][h] = 0) : (s[a][h] += l * s[i][h])
    }
  }
  const e = new Array(t)
  for (let i = t - 1; i >= 0; i--) {
    e[i] = s[i][t] / s[i][i]
    for (let n = i - 1; n >= 0; n--) s[n][t] -= s[n][i] * e[i]
  }
  return e
}
function Qr(s) {
  return (s * 180) / Math.PI
}
function _i(s) {
  return (s * Math.PI) / 180
}
function je(s, t) {
  const e = s % t
  return e * t < 0 ? e + t : e
}
function vt(s, t, e) {
  return s + e * (t - s)
}
function ss(s, t) {
  const e = Math.pow(10, t)
  return Math.round(s * e) / e
}
function gn(s, t) {
  return Math.floor(ss(s, t))
}
function _n(s, t) {
  return Math.ceil(ss(s, t))
}
function Vl(s, t) {
  return ((s[0] += +t[0]), (s[1] += +t[1]), s)
}
function Kl(s, t) {
  const e = t.getRadius(),
    i = t.getCenter(),
    n = i[0],
    r = i[1],
    o = s[0],
    a = s[1]
  let l = o - n
  const h = a - r
  l === 0 && h === 0 && (l = 1)
  const c = Math.sqrt(l * l + h * h),
    u = n + (e * l) / c,
    d = r + (e * h) / c
  return [u, d]
}
function ur(s, t) {
  const e = s[0],
    i = s[1],
    n = t[0],
    r = t[1],
    o = n[0],
    a = n[1],
    l = r[0],
    h = r[1],
    c = l - o,
    u = h - a,
    d = c === 0 && u === 0 ? 0 : (c * (e - o) + u * (i - a)) / (c * c + u * u || 0)
  let f, g
  return (
    d <= 0 ? ((f = o), (g = a)) : d >= 1 ? ((f = l), (g = h)) : ((f = o + d * c), (g = a + d * u)),
    [f, g]
  )
}
function jt(s, t) {
  let e = !0
  for (let i = s.length - 1; i >= 0; --i)
    if (s[i] != t[i]) {
      e = !1
      break
    }
  return e
}
function dr(s, t) {
  const e = Math.cos(t),
    i = Math.sin(t),
    n = s[0] * e - s[1] * i,
    r = s[1] * e + s[0] * i
  return ((s[0] = n), (s[1] = r), s)
}
function Ul(s, t) {
  return ((s[0] *= t), (s[1] *= t), s)
}
function re(s, t) {
  const e = s[0] - t[0],
    i = s[1] - t[1]
  return e * e + i * i
}
function Gn(s, t) {
  return Math.sqrt(re(s, t))
}
function Zl(s, t) {
  return re(s, ur(s, t))
}
function ra(s, t) {
  if (t.canWrapX()) {
    const e = $(t.getExtent()),
      i = ql(s, t, e)
    i && (s[0] -= i * e)
  }
  return s
}
function ql(s, t, e) {
  const i = t.getExtent()
  let n = 0
  return (
    t.canWrapX() && (s[0] < i[0] || s[0] > i[2]) && ((e = e || $(i)), (n = Math.floor((s[0] - i[0]) / e))),
    n
  )
}
const oa = 63710088e-1
function Nn(s, t, e) {
  e = e || oa
  const i = _i(s[1]),
    n = _i(t[1]),
    r = (n - i) / 2,
    o = _i(t[0] - s[0]) / 2,
    a = Math.sin(r) * Math.sin(r) + Math.sin(o) * Math.sin(o) * Math.cos(i) * Math.cos(n)
  return 2 * e * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
function Hl(s, t, e, i) {
  i = i || oa
  const n = _i(s[1]),
    r = _i(s[0]),
    o = t / i,
    a = Math.asin(Math.sin(n) * Math.cos(o) + Math.cos(n) * Math.sin(o) * Math.cos(e)),
    l = r + Math.atan2(Math.sin(e) * Math.sin(o) * Math.cos(n), Math.cos(o) - Math.sin(n) * Math.sin(a))
  return [Qr(l), Qr(a)]
}
function aa(...s) {
  console.warn(...s)
}
let Bs = !0
function la(s) {
  Bs = !1
}
function fr(s, t) {
  if (t !== void 0) {
    for (let e = 0, i = s.length; e < i; ++e) t[e] = s[e]
    t = t
  } else t = s.slice()
  return t
}
function ha(s, t) {
  if (t !== void 0 && s !== t) {
    for (let e = 0, i = s.length; e < i; ++e) t[e] = s[e]
    s = t
  }
  return s
}
function Jl(s) {
  ;(Wl(s.getCode(), s), jn(s, s, fr))
}
function $l(s) {
  s.forEach(Jl)
}
function it(s) {
  return typeof s == 'string' ? Xl(s) : s || null
}
function to(s, t, e, i) {
  s = it(s)
  let n
  const r = s.getPointResolutionFunc()
  if (r) n = r(t, e)
  else {
    const o = s.getUnits()
    if ((o == 'degrees' && !i) || i == 'degrees') n = t
    else {
      const a = _r(s, it('EPSG:4326'))
      if (a === ha && o !== 'degrees') n = t * s.getMetersPerUnit()
      else {
        let h = [e[0] - t / 2, e[1], e[0] + t / 2, e[1], e[0], e[1] - t / 2, e[0], e[1] + t / 2]
        h = a(h, h, 2)
        const c = Nn(h.slice(0, 2), h.slice(2, 4)),
          u = Nn(h.slice(4, 6), h.slice(6, 8))
        n = (c + u) / 2
      }
      const l = s.getMetersPerUnit()
      l !== void 0 && (n /= l)
    }
  }
  return n
}
function eo(s) {
  ;($l(s),
    s.forEach(function (t) {
      s.forEach(function (e) {
        t !== e && jn(t, e, fr)
      })
    }))
}
function Ql(s, t, e, i) {
  s.forEach(function (n) {
    t.forEach(function (r) {
      ;(jn(n, r, e), jn(r, n, i))
    })
  })
}
function gr(s, t) {
  return s ? (typeof s == 'string' ? it(s) : s) : it(t)
}
function ri(s, t) {
  return (la(), Dt(s, 'EPSG:4326', 'EPSG:3857'))
}
function Ae(s, t) {
  if (s === t) return !0
  const e = s.getUnits() === t.getUnits()
  return (s.getCode() === t.getCode() || _r(s, t) === fr) && e
}
function _r(s, t) {
  const e = s.getCode(),
    i = t.getCode()
  let n = Yl(e, i)
  return (n || (n = ha), n)
}
function Xn(s, t) {
  const e = it(s),
    i = it(t)
  return _r(e, i)
}
function Dt(s, t, e) {
  return Xn(t, e)(s, void 0, s.length)
}
function We(s, t) {
  return s
}
function J(s, t) {
  return (
    Bs &&
      !jt(s, [0, 0]) &&
      s[0] >= -180 &&
      s[0] <= 180 &&
      s[1] >= -90 &&
      s[1] <= 90 &&
      ((Bs = !1),
      aa('Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.')),
    s
  )
}
function rs(s, t) {
  return s
}
function we(s, t) {
  return s
}
function th() {
  ;(eo(Hr), eo($r), Ql($r, Hr, Dl, jl))
}
th()
function Ge(s, t, e, i, n, r) {
  r = r || []
  let o = 0
  for (let a = t; a < e; a += i) {
    const l = s[a],
      h = s[a + 1]
    ;((r[o++] = n[0] * l + n[2] * h + n[4]), (r[o++] = n[1] * l + n[3] * h + n[5]))
  }
  return (r && r.length != o && (r.length = o), r)
}
function mr(s, t, e, i, n, r, o) {
  o = o || []
  const a = Math.cos(n),
    l = Math.sin(n),
    h = r[0],
    c = r[1]
  let u = 0
  for (let d = t; d < e; d += i) {
    const f = s[d] - h,
      g = s[d + 1] - c
    ;((o[u++] = h + f * a - g * l), (o[u++] = c + f * l + g * a))
    for (let _ = d + 2; _ < d + i; ++_) o[u++] = s[_]
  }
  return (o && o.length != u && (o.length = u), o)
}
function eh(s, t, e, i, n, r, o, a) {
  a = a || []
  const l = o[0],
    h = o[1]
  let c = 0
  for (let u = t; u < e; u += i) {
    const d = s[u] - l,
      f = s[u + 1] - h
    ;((a[c++] = l + n * d), (a[c++] = h + r * f))
    for (let g = u + 2; g < u + i; ++g) a[c++] = s[g]
  }
  return (a && a.length != c && (a.length = c), a)
}
function ih(s, t, e, i, n, r, o) {
  o = o || []
  let a = 0
  for (let l = t; l < e; l += i) {
    ;((o[a++] = s[l] + n), (o[a++] = s[l + 1] + r))
    for (let h = l + 2; h < l + i; ++h) o[a++] = s[h]
  }
  return (o && o.length != a && (o.length = a), o)
}
const io = Kt()
class ca extends Xt {
  constructor() {
    ;(super(),
      (this.extent_ = Ct()),
      (this.extentRevision_ = -1),
      (this.simplifiedGeometryMaxMinSquaredTolerance = 0),
      (this.simplifiedGeometryRevision = 0),
      (this.simplifyTransformedInternal = yl(function (t, e, i) {
        if (!i) return this.getSimplifiedGeometry(e)
        const n = this.clone()
        return (n.applyTransform(i), n.getSimplifiedGeometry(e))
      })))
  }
  simplifyTransformed(t, e) {
    return this.simplifyTransformedInternal(this.getRevision(), t, e)
  }
  clone() {
    return F()
  }
  closestPointXY(t, e, i, n) {
    return F()
  }
  containsXY(t, e) {
    const i = this.getClosestPoint([t, e])
    return i[0] === t && i[1] === e
  }
  getClosestPoint(t, e) {
    return ((e = e || [NaN, NaN]), this.closestPointXY(t[0], t[1], e, 1 / 0), e)
  }
  intersectsCoordinate(t) {
    return this.containsXY(t[0], t[1])
  }
  computeExtent(t) {
    return F()
  }
  getExtent(t) {
    if (this.extentRevision_ != this.getRevision()) {
      const e = this.computeExtent(this.extent_)
      ;((isNaN(e[0]) || isNaN(e[1])) && Ji(e), (this.extentRevision_ = this.getRevision()))
    }
    return Pl(this.extent_, t)
  }
  rotate(t, e) {
    F()
  }
  scale(t, e, i) {
    F()
  }
  simplify(t) {
    return this.getSimplifiedGeometry(t * t)
  }
  getSimplifiedGeometry(t) {
    return F()
  }
  getType() {
    return F()
  }
  applyTransform(t) {
    F()
  }
  intersectsExtent(t) {
    return F()
  }
  translate(t, e) {
    F()
  }
  transform(t, e) {
    const i = it(t),
      n =
        i.getUnits() == 'tile-pixels'
          ? function (r, o, a) {
              const l = i.getExtent(),
                h = i.getWorldExtent(),
                c = Zt(h) / Zt(l)
              return (Re(io, h[0], h[3], c, -c, 0, 0, 0), Ge(r, 0, r.length, a, io, o), Xn(i, e)(r, o, a))
            }
          : Xn(i, e)
    return (this.applyTransform(n), this)
  }
}
class be extends ca {
  constructor() {
    ;(super(), (this.layout = 'XY'), (this.stride = 2), (this.flatCoordinates = null))
  }
  computeExtent(t) {
    return ea(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
  }
  getCoordinates() {
    return F()
  }
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride)
  }
  getFlatCoordinates() {
    return this.flatCoordinates
  }
  getLastCoordinate() {
    return this.flatCoordinates.slice(this.flatCoordinates.length - this.stride)
  }
  getLayout() {
    return this.layout
  }
  getSimplifiedGeometry(t) {
    if (
      (this.simplifiedGeometryRevision !== this.getRevision() &&
        ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = this.getRevision())),
      t < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
          t <= this.simplifiedGeometryMaxMinSquaredTolerance))
    )
      return this
    const e = this.getSimplifiedGeometryInternal(t)
    return e.getFlatCoordinates().length < this.flatCoordinates.length
      ? e
      : ((this.simplifiedGeometryMaxMinSquaredTolerance = t), this)
  }
  getSimplifiedGeometryInternal(t) {
    return this
  }
  getStride() {
    return this.stride
  }
  setFlatCoordinates(t, e) {
    ;((this.stride = Wn(t)), (this.layout = t), (this.flatCoordinates = e))
  }
  setCoordinates(t, e) {
    F()
  }
  setLayout(t, e, i) {
    let n
    if (t) n = Wn(t)
    else {
      for (let r = 0; r < i; ++r) {
        if (e.length === 0) {
          ;((this.layout = 'XY'), (this.stride = 2))
          return
        }
        e = e[0]
      }
      ;((n = e.length), (t = nh(n)))
    }
    ;((this.layout = t), (this.stride = n))
  }
  applyTransform(t) {
    this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed())
  }
  rotate(t, e) {
    const i = this.getFlatCoordinates()
    if (i) {
      const n = this.getStride()
      ;(mr(i, 0, i.length, n, t, e, i), this.changed())
    }
  }
  scale(t, e, i) {
    ;(e === void 0 && (e = t), i || (i = Xe(this.getExtent())))
    const n = this.getFlatCoordinates()
    if (n) {
      const r = this.getStride()
      ;(eh(n, 0, n.length, r, t, e, i, n), this.changed())
    }
  }
  translate(t, e) {
    const i = this.getFlatCoordinates()
    if (i) {
      const n = this.getStride()
      ;(ih(i, 0, i.length, n, t, e, i), this.changed())
    }
  }
}
function nh(s) {
  let t
  return (s == 2 ? (t = 'XY') : s == 3 ? (t = 'XYZ') : s == 4 && (t = 'XYZM'), t)
}
function Wn(s) {
  let t
  return (s == 'XY' ? (t = 2) : s == 'XYZ' || s == 'XYM' ? (t = 3) : s == 'XYZM' && (t = 4), t)
}
function sh(s, t, e) {
  const i = s.getFlatCoordinates()
  if (!i) return null
  const n = s.getStride()
  return Ge(i, 0, i.length, n, t, e)
}
function no(s, t, e, i, n, r, o) {
  const a = s[t],
    l = s[t + 1],
    h = s[e] - a,
    c = s[e + 1] - l
  let u
  if (h === 0 && c === 0) u = t
  else {
    const d = ((n - a) * h + (r - l) * c) / (h * h + c * c)
    if (d > 1) u = e
    else if (d > 0) {
      for (let f = 0; f < i; ++f) o[f] = vt(s[t + f], s[e + f], d)
      o.length = i
      return
    } else u = t
  }
  for (let d = 0; d < i; ++d) o[d] = s[u + d]
  o.length = i
}
function pr(s, t, e, i, n) {
  let r = s[t],
    o = s[t + 1]
  for (t += i; t < e; t += i) {
    const a = s[t],
      l = s[t + 1],
      h = se(r, o, a, l)
    ;(h > n && (n = h), (r = a), (o = l))
  }
  return n
}
function yr(s, t, e, i, n) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((n = pr(s, t, a, i, n)), (t = a))
  }
  return n
}
function rh(s, t, e, i, n) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((n = yr(s, t, a, i, n)), (t = a[a.length - 1]))
  }
  return n
}
function xr(s, t, e, i, n, r, o, a, l, h, c) {
  if (t == e) return h
  let u, d
  if (n === 0) {
    if (((d = se(o, a, s[t], s[t + 1])), d < h)) {
      for (u = 0; u < i; ++u) l[u] = s[t + u]
      return ((l.length = i), d)
    }
    return h
  }
  c = c || [NaN, NaN]
  let f = t + i
  for (; f < e; )
    if ((no(s, f - i, f, i, o, a, c), (d = se(o, a, c[0], c[1])), d < h)) {
      for (h = d, u = 0; u < i; ++u) l[u] = c[u]
      ;((l.length = i), (f += i))
    } else f += i * Math.max(((Math.sqrt(d) - Math.sqrt(h)) / n) | 0, 1)
  if (r && (no(s, e - i, t, i, o, a, c), (d = se(o, a, c[0], c[1])), d < h)) {
    for (h = d, u = 0; u < i; ++u) l[u] = c[u]
    l.length = i
  }
  return h
}
function Er(s, t, e, i, n, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = xr(s, t, f, i, n, r, o, a, l, h, c)), (t = f))
  }
  return h
}
function oh(s, t, e, i, n, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = Er(s, t, f, i, n, r, o, a, l, h, c)), (t = f[f.length - 1]))
  }
  return h
}
function ua(s, t, e, i) {
  for (let n = 0, r = e.length; n < r; ++n) s[t++] = e[n]
  return t
}
function os(s, t, e, i) {
  for (let n = 0, r = e.length; n < r; ++n) {
    const o = e[n]
    for (let a = 0; a < i; ++a) s[t++] = o[a]
  }
  return t
}
function Cr(s, t, e, i, n) {
  n = n || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = os(s, t, e[o], i)
    ;((n[r++] = l), (t = l))
  }
  return ((n.length = r), n)
}
function ah(s, t, e, i, n) {
  n = n || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = Cr(s, t, e[o], i, n[r])
    ;(l.length === 0 && (l[0] = t), (n[r++] = l), (t = l[l.length - 1]))
  }
  return ((n.length = r), n)
}
function wr(s, t, e, i, n, r, o) {
  const a = (e - t) / i
  if (a < 3) {
    for (; t < e; t += i) ((r[o++] = s[t]), (r[o++] = s[t + 1]))
    return o
  }
  const l = new Array(a)
  ;((l[0] = 1), (l[a - 1] = 1))
  const h = [t, e - i]
  let c = 0
  for (; h.length > 0; ) {
    const u = h.pop(),
      d = h.pop()
    let f = 0
    const g = s[d],
      _ = s[d + 1],
      m = s[u],
      p = s[u + 1]
    for (let y = d + i; y < u; y += i) {
      const x = s[y],
        E = s[y + 1],
        C = zl(x, E, g, _, m, p)
      C > f && ((c = y), (f = C))
    }
    f > n && ((l[(c - t) / i] = 1), d + i < c && h.push(d, c), c + i < u && h.push(c, u))
  }
  for (let u = 0; u < a; ++u) l[u] && ((r[o++] = s[t + u * i]), (r[o++] = s[t + u * i + 1]))
  return o
}
function lh(s, t, e, i, n, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = wr(s, t, c, i, n, r, o)), a.push(o), (t = c))
  }
  return o
}
function Me(s, t) {
  return t * Math.round(s / t)
}
function hh(s, t, e, i, n, r, o) {
  if (t == e) return o
  let a = Me(s[t], n),
    l = Me(s[t + 1], n)
  ;((t += i), (r[o++] = a), (r[o++] = l))
  let h, c
  do if (((h = Me(s[t], n)), (c = Me(s[t + 1], n)), (t += i), t == e)) return ((r[o++] = h), (r[o++] = c), o)
  while (h == a && c == l)
  for (; t < e; ) {
    const u = Me(s[t], n),
      d = Me(s[t + 1], n)
    if (((t += i), u == h && d == c)) continue
    const f = h - a,
      g = c - l,
      _ = u - a,
      m = d - l
    if (
      f * m == g * _ &&
      ((f < 0 && _ < f) || f == _ || (f > 0 && _ > f)) &&
      ((g < 0 && m < g) || g == m || (g > 0 && m > g))
    ) {
      ;((h = u), (c = d))
      continue
    }
    ;((r[o++] = h), (r[o++] = c), (a = h), (l = c), (h = u), (c = d))
  }
  return ((r[o++] = h), (r[o++] = c), o)
}
function da(s, t, e, i, n, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = hh(s, t, c, i, n, r, o)), a.push(o), (t = c))
  }
  return o
}
function ch(s, t, e, i, n, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l],
      u = []
    ;((o = da(s, t, c, i, n, r, o, u)), a.push(u), (t = c[c.length - 1]))
  }
  return o
}
function Te(s, t, e, i, n) {
  n = n !== void 0 ? n : []
  let r = 0
  for (let o = t; o < e; o += i) n[r++] = s.slice(o, o + i)
  return ((n.length = r), n)
}
function Ni(s, t, e, i, n) {
  n = n !== void 0 ? n : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((n[r++] = Te(s, t, l, i, n[r])), (t = l))
  }
  return ((n.length = r), n)
}
function Vs(s, t, e, i, n) {
  n = n !== void 0 ? n : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((n[r++] = l.length === 1 && l[0] === t ? [] : Ni(s, t, l, i, n[r])), (t = l[l.length - 1]))
  }
  return ((n.length = r), n)
}
function fa(s, t, e, i) {
  let n = 0,
    r = s[e - i],
    o = s[e - i + 1]
  for (; t < e; t += i) {
    const a = s[t],
      l = s[t + 1]
    ;((n += o * a - r * l), (r = a), (o = l))
  }
  return n / 2
}
function ga(s, t, e, i) {
  let n = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((n += fa(s, t, a, i)), (t = a))
  }
  return n
}
function uh(s, t, e, i) {
  let n = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((n += ga(s, t, a, i)), (t = a[a.length - 1]))
  }
  return n
}
class Xi extends be {
  constructor(t, e) {
    ;(super(),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
  }
  clone() {
    return new Xi(this.flatCoordinates.slice(), this.layout)
  }
  closestPointXY(t, e, i, n) {
    return n < Ve(this.getExtent(), t, e)
      ? n
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            pr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        xr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !0, t, e, i, n))
  }
  getArea() {
    return fa(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getCoordinates() {
    return Te(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getSimplifiedGeometryInternal(t) {
    const e = []
    return (
      (e.length = wr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0)),
      new Xi(e, 'XY')
    )
  }
  getType() {
    return 'LinearRing'
  }
  intersectsExtent(t) {
    return !1
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = os(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
class At extends be {
  constructor(t, e) {
    ;(super(), this.setCoordinates(t, e))
  }
  clone() {
    const t = new At(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, n) {
    const r = this.flatCoordinates,
      o = se(t, e, r[0], r[1])
    if (o < n) {
      const a = this.stride
      for (let l = 0; l < a; ++l) i[l] = r[l]
      return ((i.length = a), o)
    }
    return n
  }
  getCoordinates() {
    return this.flatCoordinates ? this.flatCoordinates.slice() : []
  }
  computeExtent(t) {
    return On(this.flatCoordinates, t)
  }
  getType() {
    return 'Point'
  }
  intersectsExtent(t) {
    return ar(t, this.flatCoordinates[0], this.flatCoordinates[1])
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 0),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = ua(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
function dh(s, t, e, i, n) {
  return !hr(n, function (o) {
    return !Oe(s, t, e, i, o[0], o[1])
  })
}
function Oe(s, t, e, i, n, r) {
  let o = 0,
    a = s[e - i],
    l = s[e - i + 1]
  for (; t < e; t += i) {
    const h = s[t],
      c = s[t + 1]
    ;(l <= r
      ? c > r && (h - a) * (r - l) - (n - a) * (c - l) > 0 && o++
      : c <= r && (h - a) * (r - l) - (n - a) * (c - l) < 0 && o--,
      (a = h),
      (l = c))
  }
  return o !== 0
}
function Tr(s, t, e, i, n, r) {
  if (e.length === 0 || !Oe(s, t, e[0], i, n, r)) return !1
  for (let o = 1, a = e.length; o < a; ++o) if (Oe(s, e[o - 1], e[o], i, n, r)) return !1
  return !0
}
function fh(s, t, e, i, n, r) {
  if (e.length === 0) return !1
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    if (Tr(s, t, l, i, n, r)) return !0
    t = l[l.length - 1]
  }
  return !1
}
function _a(s, t, e, i, n, r, o) {
  let a, l, h, c, u, d, f
  const g = n[r + 1],
    _ = []
  for (let y = 0, x = e.length; y < x; ++y) {
    const E = e[y]
    for (c = s[E - i], d = s[E - i + 1], a = t; a < E; a += i)
      ((u = s[a]),
        (f = s[a + 1]),
        ((g <= d && f <= g) || (d <= g && g <= f)) && ((h = ((g - d) / (f - d)) * (u - c) + c), _.push(h)),
        (c = u),
        (d = f))
  }
  let m = NaN,
    p = -1 / 0
  for (_.sort(Ne), c = _[0], a = 1, l = _.length; a < l; ++a) {
    u = _[a]
    const y = Math.abs(u - c)
    ;(y > p && ((h = (c + u) / 2), Tr(s, t, e, i, h, g) && ((m = h), (p = y))), (c = u))
  }
  return (isNaN(m) && (m = n[r]), o ? (o.push(m, g, p), o) : [m, g, p])
}
function gh(s, t, e, i, n) {
  let r = []
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((r = _a(s, t, l, i, n, 2 * o, r)), (t = l[l.length - 1]))
  }
  return r
}
function ma(s, t, e, i, n) {
  let r
  for (t += i; t < e; t += i) if (((r = n(s.slice(t - i, t), s.slice(t, t + i))), r)) return r
  return !1
}
function as(s, t, e, i, n) {
  const r = ia(Ct(), s, t, e, i)
  return mt(n, r)
    ? ci(n, r) || (r[0] >= n[0] && r[2] <= n[2]) || (r[1] >= n[1] && r[3] <= n[3])
      ? !0
      : ma(s, t, e, i, function (o, a) {
          return Ml(n, o, a)
        })
    : !1
}
function _h(s, t, e, i, n) {
  for (let r = 0, o = e.length; r < o; ++r) {
    if (as(s, t, e[r], i, n)) return !0
    t = e[r]
  }
  return !1
}
function pa(s, t, e, i, n) {
  return !!(
    as(s, t, e, i, n) ||
    Oe(s, t, e, i, n[0], n[1]) ||
    Oe(s, t, e, i, n[0], n[3]) ||
    Oe(s, t, e, i, n[2], n[1]) ||
    Oe(s, t, e, i, n[2], n[3])
  )
}
function ya(s, t, e, i, n) {
  if (!pa(s, t, e[0], i, n)) return !1
  if (e.length === 1) return !0
  for (let r = 1, o = e.length; r < o; ++r)
    if (dh(s, e[r - 1], e[r], i, n) && !as(s, e[r - 1], e[r], i, n)) return !1
  return !0
}
function mh(s, t, e, i, n) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    if (ya(s, t, a, i, n)) return !0
    t = a[a.length - 1]
  }
  return !1
}
function ph(s, t, e, i) {
  for (; t < e - i; ) {
    for (let n = 0; n < i; ++n) {
      const r = s[t + n]
      ;((s[t + n] = s[e - i + n]), (s[e - i + n] = r))
    }
    ;((t += i), (e -= i))
  }
}
function xa(s, t, e, i) {
  let n = 0,
    r = s[e - i],
    o = s[e - i + 1]
  for (; t < e; t += i) {
    const a = s[t],
      l = s[t + 1]
    ;((n += (a - r) * (l + o)), (r = a), (o = l))
  }
  return n === 0 ? void 0 : n > 0
}
function Ea(s, t, e, i, n) {
  n = n !== void 0 ? n : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = xa(s, t, a, i)
    if (r === 0) {
      if ((n && l) || (!n && !l)) return !1
    } else if ((n && !l) || (!n && l)) return !1
    t = a
  }
  return !0
}
function yh(s, t, e, i, n) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    if (!Ea(s, t, a, i, n)) return !1
    a.length && (t = a[a.length - 1])
  }
  return !0
}
function Ks(s, t, e, i, n) {
  n = n !== void 0 ? n : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = xa(s, t, a, i)
    ;((r === 0 ? (n && l) || (!n && !l) : (n && !l) || (!n && l)) && ph(s, t, a, i), (t = a))
  }
  return t
}
function so(s, t, e, i, n) {
  for (let r = 0, o = e.length; r < o; ++r) t = Ks(s, t, e[r], i, n)
  return t
}
class It extends be {
  constructor(t, e, i) {
    ;(super(),
      (this.ends_ = []),
      (this.flatInteriorPointRevision_ = -1),
      (this.flatInteriorPoint_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      e !== void 0 && i ? (this.setFlatCoordinates(e, t), (this.ends_ = i)) : this.setCoordinates(t, e))
  }
  appendLinearRing(t) {
    ;(this.flatCoordinates
      ? Vt(this.flatCoordinates, t.getFlatCoordinates())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed())
  }
  clone() {
    const t = new It(this.flatCoordinates.slice(), this.layout, this.ends_.slice())
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, n) {
    return n < Ve(this.getExtent(), t, e)
      ? n
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(yr(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Er(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, i, n))
  }
  containsXY(t, e) {
    return Tr(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, e)
  }
  getArea() {
    return ga(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride)
  }
  getCoordinates(t) {
    let e
    return (
      t !== void 0
        ? ((e = this.getOrientedFlatCoordinates().slice()), Ks(e, 0, this.ends_, this.stride, t))
        : (e = this.flatCoordinates),
      Ni(e, 0, this.ends_, this.stride)
    )
  }
  getEnds() {
    return this.ends_
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const t = Xe(this.getExtent())
      ;((this.flatInteriorPoint_ = _a(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, 0)),
        (this.flatInteriorPointRevision_ = this.getRevision()))
    }
    return this.flatInteriorPoint_
  }
  getInteriorPoint() {
    return new At(this.getFlatInteriorPoint(), 'XYM')
  }
  getLinearRingCount() {
    return this.ends_.length
  }
  getLinearRing(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new Xi(this.flatCoordinates.slice(t === 0 ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout)
  }
  getLinearRings() {
    const t = this.layout,
      e = this.flatCoordinates,
      i = this.ends_,
      n = []
    let r = 0
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o],
        h = new Xi(e.slice(r, l), t)
      ;(n.push(h), (r = l))
    }
    return n
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates
      ;(Ea(t, 0, this.ends_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = Ks(
            this.orientedFlatCoordinates_,
            0,
            this.ends_,
            this.stride,
          ))),
        (this.orientedRevision_ = this.getRevision()))
    }
    return this.orientedFlatCoordinates_
  }
  getSimplifiedGeometryInternal(t) {
    const e = [],
      i = []
    return (
      (e.length = da(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t), e, 0, i)),
      new It(e, 'XY', i)
    )
  }
  getType() {
    return 'Polygon'
  }
  intersectsExtent(t) {
    return ya(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []))
    const i = Cr(this.flatCoordinates, 0, t, this.stride, this.ends_)
    ;((this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1]), this.changed())
  }
}
function xh(s, t, e, i) {
  e = e || 32
  const n = []
  for (let r = 0; r < e; ++r) Vt(n, Hl(s, t, (2 * Math.PI * r) / e, i))
  return (n.push(n[0], n[1]), new It(n, 'XY', [n.length]))
}
function ro(s) {
  if (ns(s)) throw new Error('Cannot create polygon from empty extent')
  const t = s[0],
    e = s[1],
    i = s[2],
    n = s[3],
    r = [t, e, t, n, i, n, i, e, t, e]
  return new It(r, 'XY', [r.length])
}
function Eh(s, t, e) {
  t = t || 32
  const i = s.getStride(),
    n = s.getLayout(),
    r = s.getCenter(),
    o = i * (t + 1),
    a = new Array(o)
  for (let c = 0; c < o; c += i) {
    ;((a[c] = 0), (a[c + 1] = 0))
    for (let u = 2; u < i; u++) a[c + u] = r[u]
  }
  const l = [a.length],
    h = new It(a, n, l)
  return (Ch(h, r, s.getRadius()), h)
}
function Ch(s, t, e, i) {
  const n = s.getFlatCoordinates(),
    r = s.getStride(),
    o = n.length / r - 1,
    a = 0
  for (let l = 0; l <= o; ++l) {
    const h = l * r,
      c = a + (je(l, o) * 2 * Math.PI) / o
    ;((n[h] = t[0] + e * Math.cos(c)), (n[h + 1] = t[1] + e * Math.sin(c)))
  }
  s.changed()
}
const Ut = {
  PRERENDER: 'prerender',
  POSTRENDER: 'postrender',
  PRECOMPOSE: 'precompose',
  POSTCOMPOSE: 'postcompose',
  RENDERCOMPLETE: 'rendercomplete',
}
class qt {
  constructor(t) {
    ;((t = t || {}), (this.color_ = t.color !== void 0 ? t.color : null))
  }
  clone() {
    const t = this.getColor()
    return new qt({ color: Array.isArray(t) ? t.slice() : t || void 0 })
  }
  getColor() {
    return this.color_
  }
  setColor(t) {
    this.color_ = t
  }
}
function Ca(s, t, e, i, n, r, o) {
  let a, l
  const h = (e - t) / i
  if (h === 1) a = t
  else if (h === 2) ((a = t), (l = n))
  else if (h !== 0) {
    let c = s[t],
      u = s[t + 1],
      d = 0
    const f = [0]
    for (let m = t + i; m < e; m += i) {
      const p = s[m],
        y = s[m + 1]
      ;((d += Math.sqrt((p - c) * (p - c) + (y - u) * (y - u))), f.push(d), (c = p), (u = y))
    }
    const g = n * d,
      _ = _l(f, g)
    _ < 0 ? ((l = (g - f[-_ - 2]) / (f[-_ - 1] - f[-_ - 2])), (a = t + (-_ - 2) * i)) : (a = t + _ * i)
  }
  ;((o = o > 1 ? o : 2), (r = r || new Array(o)))
  for (let c = 0; c < o; ++c)
    r[c] = a === void 0 ? NaN : l === void 0 ? s[a + c] : vt(s[a + c], s[a + i + c], l)
  return r
}
function Us(s, t, e, i, n, r) {
  if (e == t) return null
  let o
  if (n < s[t + i - 1]) return r ? ((o = s.slice(t, t + i)), (o[i - 1] = n), o) : null
  if (s[e - 1] < n) return r ? ((o = s.slice(e - i, e)), (o[i - 1] = n), o) : null
  if (n == s[t + i - 1]) return s.slice(t, t + i)
  let a = t / i,
    l = e / i
  for (; a < l; ) {
    const d = (a + l) >> 1
    n < s[(d + 1) * i - 1] ? (l = d) : (a = d + 1)
  }
  const h = s[a * i - 1]
  if (n == h) return s.slice((a - 1) * i, (a - 1) * i + i)
  const c = s[(a + 1) * i - 1],
    u = (n - h) / (c - h)
  o = []
  for (let d = 0; d < i - 1; ++d) o.push(vt(s[(a - 1) * i + d], s[a * i + d], u))
  return (o.push(n), o)
}
function wh(s, t, e, i, n, r, o) {
  if (o) return Us(s, t, e[e.length - 1], i, n, r)
  let a
  if (n < s[i - 1]) return r ? ((a = s.slice(0, i)), (a[i - 1] = n), a) : null
  if (s[s.length - 1] < n) return r ? ((a = s.slice(s.length - i)), (a[i - 1] = n), a) : null
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    if (t != c) {
      if (n < s[t + i - 1]) return null
      if (n <= s[c - 1]) return Us(s, t, c, i, n, !1)
      t = c
    }
  }
  return null
}
function wa(s, t, e, i) {
  let n = s[t],
    r = s[t + 1],
    o = 0
  for (let a = t + i; a < e; a += i) {
    const l = s[a],
      h = s[a + 1]
    ;((o += Math.sqrt((l - n) * (l - n) + (h - r) * (h - r))), (n = l), (r = h))
  }
  return o
}
class Gt extends be {
  constructor(t, e) {
    ;(super(),
      (this.flatMidpoint_ = null),
      (this.flatMidpointRevision_ = -1),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
  }
  appendCoordinate(t) {
    ;(this.flatCoordinates ? Vt(this.flatCoordinates, t) : (this.flatCoordinates = t.slice()), this.changed())
  }
  clone() {
    const t = new Gt(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, n) {
    return n < Ve(this.getExtent(), t, e)
      ? n
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            pr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        xr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !1, t, e, i, n))
  }
  forEachSegment(t) {
    return ma(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
  }
  getCoordinateAtM(t, e) {
    return this.layout != 'XYM' && this.layout != 'XYZM'
      ? null
      : ((e = e !== void 0 ? e : !1),
        Us(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e))
  }
  getCoordinates() {
    return Te(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getCoordinateAt(t, e) {
    return Ca(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, this.stride)
  }
  getLength() {
    return wa(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getFlatMidpoint() {
    return (
      this.flatMidpointRevision_ != this.getRevision() &&
        ((this.flatMidpoint_ = this.getCoordinateAt(0.5, this.flatMidpoint_)),
        (this.flatMidpointRevision_ = this.getRevision())),
      this.flatMidpoint_
    )
  }
  getSimplifiedGeometryInternal(t) {
    const e = []
    return (
      (e.length = wr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0)),
      new Gt(e, 'XY')
    )
  }
  getType() {
    return 'LineString'
  }
  intersectsExtent(t) {
    return as(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = os(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
class Nt {
  constructor(t) {
    ;((t = t || {}),
      (this.color_ = t.color !== void 0 ? t.color : null),
      (this.lineCap_ = t.lineCap),
      (this.lineDash_ = t.lineDash !== void 0 ? t.lineDash : null),
      (this.lineDashOffset_ = t.lineDashOffset),
      (this.lineJoin_ = t.lineJoin),
      (this.miterLimit_ = t.miterLimit),
      (this.width_ = t.width))
  }
  clone() {
    const t = this.getColor()
    return new Nt({
      color: Array.isArray(t) ? t.slice() : t || void 0,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth(),
    })
  }
  getColor() {
    return this.color_
  }
  getLineCap() {
    return this.lineCap_
  }
  getLineDash() {
    return this.lineDash_
  }
  getLineDashOffset() {
    return this.lineDashOffset_
  }
  getLineJoin() {
    return this.lineJoin_
  }
  getMiterLimit() {
    return this.miterLimit_
  }
  getWidth() {
    return this.width_
  }
  setColor(t) {
    this.color_ = t
  }
  setLineCap(t) {
    this.lineCap_ = t
  }
  setLineDash(t) {
    this.lineDash_ = t
  }
  setLineDashOffset(t) {
    this.lineDashOffset_ = t
  }
  setLineJoin(t) {
    this.lineJoin_ = t
  }
  setMiterLimit(t) {
    this.miterLimit_ = t
  }
  setWidth(t) {
    this.width_ = t
  }
}
const Q = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3 }
function oo(s) {
  return s[0] > 0 && s[1] > 0
}
function Th(s, t, e) {
  return (e === void 0 && (e = [0, 0]), (e[0] = (s[0] * t + 0.5) | 0), (e[1] = (s[1] * t + 0.5) | 0), e)
}
function Mt(s, t) {
  return Array.isArray(s) ? s : (t === void 0 ? (t = [s, s]) : ((t[0] = s), (t[1] = s)), t)
}
class ls {
  constructor(t) {
    ;((this.opacity_ = t.opacity),
      (this.rotateWithView_ = t.rotateWithView),
      (this.rotation_ = t.rotation),
      (this.scale_ = t.scale),
      (this.scaleArray_ = Mt(t.scale)),
      (this.displacement_ = t.displacement),
      (this.declutterMode_ = t.declutterMode))
  }
  clone() {
    const t = this.getScale()
    return new ls({
      opacity: this.getOpacity(),
      scale: Array.isArray(t) ? t.slice() : t,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode(),
    })
  }
  getOpacity() {
    return this.opacity_
  }
  getRotateWithView() {
    return this.rotateWithView_
  }
  getRotation() {
    return this.rotation_
  }
  getScale() {
    return this.scale_
  }
  getScaleArray() {
    return this.scaleArray_
  }
  getDisplacement() {
    return this.displacement_
  }
  getDeclutterMode() {
    return this.declutterMode_
  }
  getAnchor() {
    return F()
  }
  getImage(t) {
    return F()
  }
  getHitDetectionImage() {
    return F()
  }
  getPixelRatio(t) {
    return 1
  }
  getImageState() {
    return F()
  }
  getImageSize() {
    return F()
  }
  getOrigin() {
    return F()
  }
  getSize() {
    return F()
  }
  setDisplacement(t) {
    this.displacement_ = t
  }
  setOpacity(t) {
    this.opacity_ = t
  }
  setRotateWithView(t) {
    this.rotateWithView_ = t
  }
  setRotation(t) {
    this.rotation_ = t
  }
  setScale(t) {
    ;((this.scale_ = t), (this.scaleArray_ = Mt(t)))
  }
  listenImageChange(t) {
    F()
  }
  load() {
    F()
  }
  unlistenImageChange(t) {
    F()
  }
}
const Sh = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,
  vh = /^([a-z]*)$|^hsla?\(.*\)$/i
function Ta(s) {
  return typeof s == 'string' ? s : Sa(s)
}
function Rh(s) {
  const t = document.createElement('div')
  if (((t.style.color = s), t.style.color !== '')) {
    document.body.appendChild(t)
    const e = getComputedStyle(t).color
    return (document.body.removeChild(t), e)
  }
  return ''
}
const Ih = (function () {
  const t = {}
  let e = 0
  return function (i) {
    let n
    if (t.hasOwnProperty(i)) n = t[i]
    else {
      if (e >= 1024) {
        let r = 0
        for (const o in t) (r++ & 3) === 0 && (delete t[o], --e)
      }
      ;((n = bh(i)), (t[i] = n), ++e)
    }
    return n
  }
})()
function Yn(s) {
  return Array.isArray(s) ? s : Ih(s)
}
function bh(s) {
  let t, e, i, n, r
  if ((vh.exec(s) && (s = Rh(s)), Sh.exec(s))) {
    const o = s.length - 1
    let a
    o <= 4 ? (a = 1) : (a = 2)
    const l = o === 4 || o === 8
    ;((t = parseInt(s.substr(1 + 0 * a, a), 16)),
      (e = parseInt(s.substr(1 + 1 * a, a), 16)),
      (i = parseInt(s.substr(1 + 2 * a, a), 16)),
      l ? (n = parseInt(s.substr(1 + 3 * a, a), 16)) : (n = 255),
      a == 1 && ((t = (t << 4) + t), (e = (e << 4) + e), (i = (i << 4) + i), l && (n = (n << 4) + n)),
      (r = [t, e, i, n / 255]))
  } else
    s.startsWith('rgba(')
      ? ((r = s.slice(5, -1).split(',').map(Number)), ao(r))
      : s.startsWith('rgb(')
        ? ((r = s.slice(4, -1).split(',').map(Number)), r.push(1), ao(r))
        : G(!1, 14)
  return r
}
function ao(s) {
  return (
    (s[0] = tt((s[0] + 0.5) | 0, 0, 255)),
    (s[1] = tt((s[1] + 0.5) | 0, 0, 255)),
    (s[2] = tt((s[2] + 0.5) | 0, 0, 255)),
    (s[3] = tt(s[3], 0, 1)),
    s
  )
}
function Sa(s) {
  let t = s[0]
  t != (t | 0) && (t = (t + 0.5) | 0)
  let e = s[1]
  e != (e | 0) && (e = (e + 0.5) | 0)
  let i = s[2]
  i != (i | 0) && (i = (i + 0.5) | 0)
  const n = s[3] === void 0 ? 1 : Math.round(s[3] * 100) / 100
  return 'rgba(' + t + ',' + e + ',' + i + ',' + n + ')'
}
function Bt(s) {
  return Array.isArray(s) ? Sa(s) : s
}
function pt(s, t, e, i) {
  let n
  return (
    e && e.length
      ? (n = e.shift())
      : rr
        ? (n = new OffscreenCanvas(s || 300, t || 300))
        : (n = document.createElement('canvas')),
    s && (n.width = s),
    t && (n.height = t),
    n.getContext('2d', i)
  )
}
function hs(s) {
  const t = s.canvas
  ;((t.width = 1), (t.height = 1), s.clearRect(0, 0, 1, 1))
}
function lo(s, t) {
  const e = t.parentNode
  e && e.replaceChild(s, t)
}
function Zs(s) {
  return s && s.parentNode ? s.parentNode.removeChild(s) : null
}
function Fh(s) {
  for (; s.lastChild; ) s.removeChild(s.lastChild)
}
function Lh(s, t) {
  const e = s.childNodes
  for (let i = 0; ; ++i) {
    const n = e[i],
      r = t[i]
    if (!n && !r) break
    if (n !== r) {
      if (!n) {
        s.appendChild(r)
        continue
      }
      if (!r) {
        ;(s.removeChild(n), --i)
        continue
      }
      s.insertBefore(r, n)
    }
  }
}
const mn = 'ol-hidden',
  cs = 'ol-unselectable',
  Sr = 'ol-control',
  ho = 'ol-collapsed',
  Ph = new RegExp(
    [
      '^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)',
      '(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)',
      '(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)',
      '(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?',
      '(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))',
      '(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))',
      `?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`,
    ].join(''),
    'i',
  ),
  co = ['style', 'variant', 'weight', 'size', 'lineHeight', 'family'],
  va = function (s) {
    const t = s.match(Ph)
    if (!t) return null
    const e = { lineHeight: 'normal', size: '1.2em', style: 'normal', weight: 'normal', variant: 'normal' }
    for (let i = 0, n = co.length; i < n; ++i) {
      const r = t[i + 1]
      r !== void 0 && (e[co[i]] = r)
    }
    return ((e.families = e.family.split(/,\s?/)), e)
  },
  Ra = '10px sans-serif',
  Et = '#000',
  zn = 'round',
  oe = [],
  ae = 0,
  Ci = 'round',
  Wi = 10,
  Yi = '#000',
  zi = 'center',
  Bn = 'middle',
  ke = [0, 0, 0, 0],
  Bi = 1,
  ie = new Xt()
let oi = null,
  qs
const Hs = {},
  Mh = (function () {
    const t = '32px ',
      e = ['monospace', 'serif'],
      i = e.length,
      n = 'wmytzilWMYTZIL@#/&?$%10'
    let r, o
    function a(h, c, u) {
      let d = !0
      for (let f = 0; f < i; ++f) {
        const g = e[f]
        if (((o = Vn(h + ' ' + c + ' ' + t + g, n)), u != g)) {
          const _ = Vn(h + ' ' + c + ' ' + t + u + ',' + g, n)
          d = d && _ != o
        }
      }
      return !!d
    }
    function l() {
      let h = !0
      const c = ie.getKeys()
      for (let u = 0, d = c.length; u < d; ++u) {
        const f = c[u]
        ie.get(f) < 100 &&
          (a.apply(
            this,
            f.split(`
`),
          )
            ? (Zi(Hs), (oi = null), (qs = void 0), ie.set(f, 100))
            : (ie.set(f, ie.get(f) + 1, !0), (h = !1)))
      }
      h && (clearInterval(r), (r = void 0))
    }
    return function (h) {
      const c = va(h)
      if (!c) return
      const u = c.families
      for (let d = 0, f = u.length; d < f; ++d) {
        const g = u[d],
          _ =
            c.style +
            `
` +
            c.weight +
            `
` +
            g
        ie.get(_) === void 0 &&
          (ie.set(_, 100, !0),
          a(c.style, c.weight, g) || (ie.set(_, 0, !0), r === void 0 && (r = setInterval(l, 32))))
      }
    }
  })(),
  Ah = (function () {
    let s
    return function (t) {
      let e = Hs[t]
      if (e == null) {
        if (rr) {
          const i = va(t),
            n = Ia(t, 'Žg')
          e =
            (isNaN(Number(i.lineHeight)) ? 1.2 : Number(i.lineHeight)) *
            (n.actualBoundingBoxAscent + n.actualBoundingBoxDescent)
        } else
          (s ||
            ((s = document.createElement('div')),
            (s.innerHTML = 'M'),
            (s.style.minHeight = '0'),
            (s.style.maxHeight = 'none'),
            (s.style.height = 'auto'),
            (s.style.padding = '0'),
            (s.style.border = 'none'),
            (s.style.position = 'absolute'),
            (s.style.display = 'block'),
            (s.style.left = '-99999px')),
            (s.style.font = t),
            document.body.appendChild(s),
            (e = s.offsetHeight),
            document.body.removeChild(s))
        Hs[t] = e
      }
      return e
    }
  })()
function Ia(s, t) {
  return (oi || (oi = pt(1, 1)), s != qs && ((oi.font = s), (qs = oi.font)), oi.measureText(t))
}
function Vn(s, t) {
  return Ia(s, t).width
}
function uo(s, t, e) {
  if (t in e) return e[t]
  const i = t
    .split(
      `
`,
    )
    .reduce((n, r) => Math.max(n, Vn(s, r)), 0)
  return ((e[t] = i), i)
}
function Oh(s, t) {
  const e = [],
    i = [],
    n = []
  let r = 0,
    o = 0,
    a = 0,
    l = 0
  for (let h = 0, c = t.length; h <= c; h += 2) {
    const u = t[h]
    if (
      u ===
        `
` ||
      h === c
    ) {
      ;((r = Math.max(r, o)), n.push(o), (o = 0), (a += l))
      continue
    }
    const d = t[h + 1] || s.font,
      f = Vn(d, u)
    ;(e.push(f), (o += f))
    const g = Ah(d)
    ;(i.push(g), (l = Math.max(l, g)))
  }
  return { width: r, height: a, widths: e, heights: i, lineWidths: n }
}
function kh(s, t, e, i, n, r, o, a, l, h, c) {
  ;(s.save(),
    e !== 1 && (s.globalAlpha *= e),
    t && s.setTransform.apply(s, t),
    i.contextInstructions
      ? (s.translate(l, h), s.scale(c[0], c[1]), Dh(i, s))
      : c[0] < 0 || c[1] < 0
        ? (s.translate(l, h), s.scale(c[0], c[1]), s.drawImage(i, n, r, o, a, 0, 0, o, a))
        : s.drawImage(i, n, r, o, a, l, h, o * c[0], a * c[1]),
    s.restore())
}
function Dh(s, t) {
  const e = s.contextInstructions
  for (let i = 0, n = e.length; i < n; i += 2)
    Array.isArray(e[i + 1]) ? t[e[i]].apply(t, e[i + 1]) : (t[e[i]] = e[i + 1])
}
class us extends ls {
  constructor(t) {
    const e = t.rotateWithView !== void 0 ? t.rotateWithView : !1
    ;(super({
      opacity: 1,
      rotateWithView: e,
      rotation: t.rotation !== void 0 ? t.rotation : 0,
      scale: t.scale !== void 0 ? t.scale : 1,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      declutterMode: t.declutterMode,
    }),
      (this.canvas_ = void 0),
      (this.hitDetectionCanvas_ = null),
      (this.fill_ = t.fill !== void 0 ? t.fill : null),
      (this.origin_ = [0, 0]),
      (this.points_ = t.points),
      (this.radius_ = t.radius !== void 0 ? t.radius : t.radius1),
      (this.radius2_ = t.radius2),
      (this.angle_ = t.angle !== void 0 ? t.angle : 0),
      (this.stroke_ = t.stroke !== void 0 ? t.stroke : null),
      (this.size_ = null),
      (this.renderOptions_ = null),
      this.render())
  }
  clone() {
    const t = this.getScale(),
      e = new us({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        points: this.getPoints(),
        radius: this.getRadius(),
        radius2: this.getRadius2(),
        angle: this.getAngle(),
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        scale: Array.isArray(t) ? t.slice() : t,
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      })
    return (e.setOpacity(this.getOpacity()), e)
  }
  getAnchor() {
    const t = this.size_
    if (!t) return null
    const e = this.getDisplacement(),
      i = this.getScaleArray()
    return [t[0] / 2 - e[0] / i[0], t[1] / 2 + e[1] / i[1]]
  }
  getAngle() {
    return this.angle_
  }
  getFill() {
    return this.fill_
  }
  setFill(t) {
    ;((this.fill_ = t), this.render())
  }
  getHitDetectionImage() {
    return (
      this.hitDetectionCanvas_ || this.createHitDetectionCanvas_(this.renderOptions_),
      this.hitDetectionCanvas_
    )
  }
  getImage(t) {
    let e = this.canvas_[t]
    if (!e) {
      const i = this.renderOptions_,
        n = pt(i.size * t, i.size * t)
      ;(this.draw_(i, n, t), (e = n.canvas), (this.canvas_[t] = e))
    }
    return e
  }
  getPixelRatio(t) {
    return t
  }
  getImageSize() {
    return this.size_
  }
  getImageState() {
    return Q.LOADED
  }
  getOrigin() {
    return this.origin_
  }
  getPoints() {
    return this.points_
  }
  getRadius() {
    return this.radius_
  }
  getRadius2() {
    return this.radius2_
  }
  getSize() {
    return this.size_
  }
  getStroke() {
    return this.stroke_
  }
  setStroke(t) {
    ;((this.stroke_ = t), this.render())
  }
  listenImageChange(t) {}
  load() {}
  unlistenImageChange(t) {}
  calculateLineJoinSize_(t, e, i) {
    if (e === 0 || this.points_ === 1 / 0 || (t !== 'bevel' && t !== 'miter')) return e
    let n = this.radius_,
      r = this.radius2_ === void 0 ? n : this.radius2_
    if (n < r) {
      const T = n
      ;((n = r), (r = T))
    }
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2,
      a = (2 * Math.PI) / o,
      l = r * Math.sin(a),
      h = Math.sqrt(r * r - l * l),
      c = n - h,
      u = Math.sqrt(l * l + c * c),
      d = u / l
    if (t === 'miter' && d <= i) return d * e
    const f = e / 2 / d,
      g = (e / 2) * (c / u),
      m = Math.sqrt((n + f) * (n + f) + g * g) - n
    if (this.radius2_ === void 0 || t === 'bevel') return m * 2
    const p = n * Math.sin(a),
      y = Math.sqrt(n * n - p * p),
      x = r - y,
      C = Math.sqrt(p * p + x * x) / p
    if (C <= i) {
      const T = (C * e) / 2 - r - n
      return 2 * Math.max(m, T)
    }
    return m * 2
  }
  createRenderOptions() {
    let t = Ci,
      e = 0,
      i = null,
      n = 0,
      r,
      o = 0
    this.stroke_ &&
      ((r = this.stroke_.getColor()),
      r === null && (r = Yi),
      (r = Bt(r)),
      (o = this.stroke_.getWidth()),
      o === void 0 && (o = Bi),
      (i = this.stroke_.getLineDash()),
      (n = this.stroke_.getLineDashOffset()),
      (t = this.stroke_.getLineJoin()),
      t === void 0 && (t = Ci),
      (e = this.stroke_.getMiterLimit()),
      e === void 0 && (e = Wi))
    const a = this.calculateLineJoinSize_(t, o, e),
      l = Math.max(this.radius_, this.radius2_ || 0),
      h = Math.ceil(2 * l + a)
    return {
      strokeStyle: r,
      strokeWidth: o,
      size: h,
      lineDash: i,
      lineDashOffset: n,
      lineJoin: t,
      miterLimit: e,
    }
  }
  render() {
    this.renderOptions_ = this.createRenderOptions()
    const t = this.renderOptions_.size
    ;((this.canvas_ = {}), (this.size_ = [t, t]))
  }
  draw_(t, e, i) {
    if ((e.scale(i, i), e.translate(t.size / 2, t.size / 2), this.createPath_(e), this.fill_)) {
      let n = this.fill_.getColor()
      ;(n === null && (n = Et), (e.fillStyle = Bt(n)), e.fill())
    }
    this.stroke_ &&
      ((e.strokeStyle = t.strokeStyle),
      (e.lineWidth = t.strokeWidth),
      t.lineDash && (e.setLineDash(t.lineDash), (e.lineDashOffset = t.lineDashOffset)),
      (e.lineJoin = t.lineJoin),
      (e.miterLimit = t.miterLimit),
      e.stroke())
  }
  createHitDetectionCanvas_(t) {
    if (this.fill_) {
      let e = this.fill_.getColor(),
        i = 0
      if (
        (typeof e == 'string' && (e = Yn(e)),
        e === null ? (i = 1) : Array.isArray(e) && (i = e.length === 4 ? e[3] : 1),
        i === 0)
      ) {
        const n = pt(t.size, t.size)
        ;((this.hitDetectionCanvas_ = n.canvas), this.drawHitDetectionCanvas_(t, n))
      }
    }
    this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.getImage(1))
  }
  createPath_(t) {
    let e = this.points_
    const i = this.radius_
    if (e === 1 / 0) t.arc(0, 0, i, 0, 2 * Math.PI)
    else {
      const n = this.radius2_ === void 0 ? i : this.radius2_
      this.radius2_ !== void 0 && (e *= 2)
      const r = this.angle_ - Math.PI / 2,
        o = (2 * Math.PI) / e
      for (let a = 0; a < e; a++) {
        const l = r + a * o,
          h = a % 2 === 0 ? i : n
        t.lineTo(h * Math.cos(l), h * Math.sin(l))
      }
      t.closePath()
    }
  }
  drawHitDetectionCanvas_(t, e) {
    ;(e.translate(t.size / 2, t.size / 2),
      this.createPath_(e),
      (e.fillStyle = Et),
      e.fill(),
      this.stroke_ &&
        ((e.strokeStyle = t.strokeStyle),
        (e.lineWidth = t.strokeWidth),
        t.lineDash && (e.setLineDash(t.lineDash), (e.lineDashOffset = t.lineDashOffset)),
        (e.lineJoin = t.lineJoin),
        (e.miterLimit = t.miterLimit),
        e.stroke()))
  }
}
class Ue extends us {
  constructor(t) {
    ;((t = t || { radius: 5 }),
      super({
        points: 1 / 0,
        fill: t.fill,
        radius: t.radius,
        stroke: t.stroke,
        scale: t.scale !== void 0 ? t.scale : 1,
        rotation: t.rotation !== void 0 ? t.rotation : 0,
        rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1,
        displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
        declutterMode: t.declutterMode,
      }))
  }
  clone() {
    const t = this.getScale(),
      e = new Ue({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        radius: this.getRadius(),
        scale: Array.isArray(t) ? t.slice() : t,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      })
    return (e.setOpacity(this.getOpacity()), e)
  }
  setRadius(t) {
    ;((this.radius_ = t), this.render())
  }
}
class Rt {
  constructor(t) {
    ;((t = t || {}),
      (this.geometry_ = null),
      (this.geometryFunction_ = fo),
      t.geometry !== void 0 && this.setGeometry(t.geometry),
      (this.fill_ = t.fill !== void 0 ? t.fill : null),
      (this.image_ = t.image !== void 0 ? t.image : null),
      (this.renderer_ = t.renderer !== void 0 ? t.renderer : null),
      (this.hitDetectionRenderer_ = t.hitDetectionRenderer !== void 0 ? t.hitDetectionRenderer : null),
      (this.stroke_ = t.stroke !== void 0 ? t.stroke : null),
      (this.text_ = t.text !== void 0 ? t.text : null),
      (this.zIndex_ = t.zIndex))
  }
  clone() {
    let t = this.getGeometry()
    return (
      t && typeof t == 'object' && (t = t.clone()),
      new Rt({
        geometry: t,
        fill: this.getFill() ? this.getFill().clone() : void 0,
        image: this.getImage() ? this.getImage().clone() : void 0,
        renderer: this.getRenderer(),
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        text: this.getText() ? this.getText().clone() : void 0,
        zIndex: this.getZIndex(),
      })
    )
  }
  getRenderer() {
    return this.renderer_
  }
  setRenderer(t) {
    this.renderer_ = t
  }
  setHitDetectionRenderer(t) {
    this.hitDetectionRenderer_ = t
  }
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_
  }
  getGeometry() {
    return this.geometry_
  }
  getGeometryFunction() {
    return this.geometryFunction_
  }
  getFill() {
    return this.fill_
  }
  setFill(t) {
    this.fill_ = t
  }
  getImage() {
    return this.image_
  }
  setImage(t) {
    this.image_ = t
  }
  getStroke() {
    return this.stroke_
  }
  setStroke(t) {
    this.stroke_ = t
  }
  getText() {
    return this.text_
  }
  setText(t) {
    this.text_ = t
  }
  getZIndex() {
    return this.zIndex_
  }
  setGeometry(t) {
    ;(typeof t == 'function'
      ? (this.geometryFunction_ = t)
      : typeof t == 'string'
        ? (this.geometryFunction_ = function (e) {
            return e.get(t)
          })
        : t
          ? t !== void 0 &&
            (this.geometryFunction_ = function () {
              return t
            })
          : (this.geometryFunction_ = fo),
      (this.geometry_ = t))
  }
  setZIndex(t) {
    this.zIndex_ = t
  }
}
function jh(s) {
  let t
  if (typeof s == 'function') t = s
  else {
    let e
    ;(Array.isArray(s) ? (e = s) : (G(typeof s.getZIndex == 'function', 41), (e = [s])),
      (t = function () {
        return e
      }))
  }
  return t
}
let ys = null
function Gh(s, t) {
  if (!ys) {
    const e = new qt({ color: 'rgba(255,255,255,0.4)' }),
      i = new Nt({ color: '#3399CC', width: 1.25 })
    ys = [new Rt({ image: new Ue({ fill: e, stroke: i, radius: 5 }), fill: e, stroke: i })]
  }
  return ys
}
function ba() {
  const s = {},
    t = [255, 255, 255, 1],
    e = [0, 153, 255, 1],
    i = 3
  return (
    (s.Polygon = [new Rt({ fill: new qt({ color: [255, 255, 255, 0.5] }) })]),
    (s.MultiPolygon = s.Polygon),
    (s.LineString = [
      new Rt({ stroke: new Nt({ color: t, width: i + 2 }) }),
      new Rt({ stroke: new Nt({ color: e, width: i }) }),
    ]),
    (s.MultiLineString = s.LineString),
    (s.Circle = s.Polygon.concat(s.LineString)),
    (s.Point = [
      new Rt({
        image: new Ue({
          radius: i * 2,
          fill: new qt({ color: e }),
          stroke: new Nt({ color: t, width: i / 2 }),
        }),
        zIndex: 1 / 0,
      }),
    ]),
    (s.MultiPoint = s.Point),
    (s.GeometryCollection = s.Polygon.concat(s.LineString, s.Point)),
    s
  )
}
function fo(s) {
  return s.getGeometry()
}
const Nh = '#333'
class vr {
  constructor(t) {
    ;((t = t || {}),
      (this.font_ = t.font),
      (this.rotation_ = t.rotation),
      (this.rotateWithView_ = t.rotateWithView),
      (this.scale_ = t.scale),
      (this.scaleArray_ = Mt(t.scale !== void 0 ? t.scale : 1)),
      (this.text_ = t.text),
      (this.textAlign_ = t.textAlign),
      (this.justify_ = t.justify),
      (this.repeat_ = t.repeat),
      (this.textBaseline_ = t.textBaseline),
      (this.fill_ = t.fill !== void 0 ? t.fill : new qt({ color: Nh })),
      (this.maxAngle_ = t.maxAngle !== void 0 ? t.maxAngle : Math.PI / 4),
      (this.placement_ = t.placement !== void 0 ? t.placement : 'point'),
      (this.overflow_ = !!t.overflow),
      (this.stroke_ = t.stroke !== void 0 ? t.stroke : null),
      (this.offsetX_ = t.offsetX !== void 0 ? t.offsetX : 0),
      (this.offsetY_ = t.offsetY !== void 0 ? t.offsetY : 0),
      (this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null),
      (this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null),
      (this.padding_ = t.padding === void 0 ? null : t.padding))
  }
  clone() {
    const t = this.getScale()
    return new vr({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(t) ? t.slice() : t,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      justify: this.getJustify(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0,
      backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0,
      padding: this.getPadding() || void 0,
    })
  }
  getOverflow() {
    return this.overflow_
  }
  getFont() {
    return this.font_
  }
  getMaxAngle() {
    return this.maxAngle_
  }
  getPlacement() {
    return this.placement_
  }
  getRepeat() {
    return this.repeat_
  }
  getOffsetX() {
    return this.offsetX_
  }
  getOffsetY() {
    return this.offsetY_
  }
  getFill() {
    return this.fill_
  }
  getRotateWithView() {
    return this.rotateWithView_
  }
  getRotation() {
    return this.rotation_
  }
  getScale() {
    return this.scale_
  }
  getScaleArray() {
    return this.scaleArray_
  }
  getStroke() {
    return this.stroke_
  }
  getText() {
    return this.text_
  }
  getTextAlign() {
    return this.textAlign_
  }
  getJustify() {
    return this.justify_
  }
  getTextBaseline() {
    return this.textBaseline_
  }
  getBackgroundFill() {
    return this.backgroundFill_
  }
  getBackgroundStroke() {
    return this.backgroundStroke_
  }
  getPadding() {
    return this.padding_
  }
  setOverflow(t) {
    this.overflow_ = t
  }
  setFont(t) {
    this.font_ = t
  }
  setMaxAngle(t) {
    this.maxAngle_ = t
  }
  setOffsetX(t) {
    this.offsetX_ = t
  }
  setOffsetY(t) {
    this.offsetY_ = t
  }
  setPlacement(t) {
    this.placement_ = t
  }
  setRepeat(t) {
    this.repeat_ = t
  }
  setRotateWithView(t) {
    this.rotateWithView_ = t
  }
  setFill(t) {
    this.fill_ = t
  }
  setRotation(t) {
    this.rotation_ = t
  }
  setScale(t) {
    ;((this.scale_ = t), (this.scaleArray_ = Mt(t !== void 0 ? t : 1)))
  }
  setStroke(t) {
    this.stroke_ = t
  }
  setText(t) {
    this.text_ = t
  }
  setTextAlign(t) {
    this.textAlign_ = t
  }
  setJustify(t) {
    this.justify_ = t
  }
  setTextBaseline(t) {
    this.textBaseline_ = t
  }
  setBackgroundFill(t) {
    this.backgroundFill_ = t
  }
  setBackgroundStroke(t) {
    this.backgroundStroke_ = t
  }
  setPadding(t) {
    this.padding_ = t
  }
}
const U = {
  OPACITY: 'opacity',
  VISIBLE: 'visible',
  EXTENT: 'extent',
  Z_INDEX: 'zIndex',
  MAX_RESOLUTION: 'maxResolution',
  MIN_RESOLUTION: 'minResolution',
  MAX_ZOOM: 'maxZoom',
  MIN_ZOOM: 'minZoom',
  SOURCE: 'source',
  MAP: 'map',
}
class Fa extends Xt {
  constructor(t) {
    ;(super(), this.on, this.once, this.un, (this.background_ = t.background))
    const e = Object.assign({}, t)
    ;(typeof t.properties == 'object' && (delete e.properties, Object.assign(e, t.properties)),
      (e[U.OPACITY] = t.opacity !== void 0 ? t.opacity : 1),
      G(typeof e[U.OPACITY] == 'number', 64),
      (e[U.VISIBLE] = t.visible !== void 0 ? t.visible : !0),
      (e[U.Z_INDEX] = t.zIndex),
      (e[U.MAX_RESOLUTION] = t.maxResolution !== void 0 ? t.maxResolution : 1 / 0),
      (e[U.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0),
      (e[U.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0),
      (e[U.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0),
      (this.className_ = e.className !== void 0 ? e.className : 'ol-layer'),
      delete e.className,
      this.setProperties(e),
      (this.state_ = null))
  }
  getBackground() {
    return this.background_
  }
  getClassName() {
    return this.className_
  }
  getLayerState(t) {
    const e = this.state_ || { layer: this, managed: t === void 0 ? !0 : t },
      i = this.getZIndex()
    return (
      (e.opacity = tt(Math.round(this.getOpacity() * 100) / 100, 0, 1)),
      (e.visible = this.getVisible()),
      (e.extent = this.getExtent()),
      (e.zIndex = i === void 0 && !e.managed ? 1 / 0 : i),
      (e.maxResolution = this.getMaxResolution()),
      (e.minResolution = Math.max(this.getMinResolution(), 0)),
      (e.minZoom = this.getMinZoom()),
      (e.maxZoom = this.getMaxZoom()),
      (this.state_ = e),
      e
    )
  }
  getLayersArray(t) {
    return F()
  }
  getLayerStatesArray(t) {
    return F()
  }
  getExtent() {
    return this.get(U.EXTENT)
  }
  getMaxResolution() {
    return this.get(U.MAX_RESOLUTION)
  }
  getMinResolution() {
    return this.get(U.MIN_RESOLUTION)
  }
  getMinZoom() {
    return this.get(U.MIN_ZOOM)
  }
  getMaxZoom() {
    return this.get(U.MAX_ZOOM)
  }
  getOpacity() {
    return this.get(U.OPACITY)
  }
  getSourceState() {
    return F()
  }
  getVisible() {
    return this.get(U.VISIBLE)
  }
  getZIndex() {
    return this.get(U.Z_INDEX)
  }
  setBackground(t) {
    ;((this.background_ = t), this.changed())
  }
  setExtent(t) {
    this.set(U.EXTENT, t)
  }
  setMaxResolution(t) {
    this.set(U.MAX_RESOLUTION, t)
  }
  setMinResolution(t) {
    this.set(U.MIN_RESOLUTION, t)
  }
  setMaxZoom(t) {
    this.set(U.MAX_ZOOM, t)
  }
  setMinZoom(t) {
    this.set(U.MIN_ZOOM, t)
  }
  setOpacity(t) {
    ;(G(typeof t == 'number', 64), this.set(U.OPACITY, t))
  }
  setVisible(t) {
    this.set(U.VISIBLE, t)
  }
  setZIndex(t) {
    this.set(U.Z_INDEX, t)
  }
  disposeInternal() {
    ;(this.state_ && ((this.state_.layer = null), (this.state_ = null)), super.disposeInternal())
  }
}
const ct = { ANIMATING: 0, INTERACTING: 1 },
  kt = { CENTER: 'center', RESOLUTION: 'resolution', ROTATION: 'rotation' },
  Xh = 42,
  Rr = 256
function go(s, t, e) {
  return function (i, n, r, o, a) {
    if (!i) return
    if (!n && !t) return i
    const l = t ? 0 : r[0] * n,
      h = t ? 0 : r[1] * n,
      c = a ? a[0] : 0,
      u = a ? a[1] : 0
    let d = s[0] + l / 2 + c,
      f = s[2] - l / 2 + c,
      g = s[1] + h / 2 + u,
      _ = s[3] - h / 2 + u
    ;(d > f && ((d = (f + d) / 2), (f = d)), g > _ && ((g = (_ + g) / 2), (_ = g)))
    let m = tt(i[0], d, f),
      p = tt(i[1], g, _)
    if (o && e && n) {
      const y = 30 * n
      ;((m += -y * Math.log(1 + Math.max(0, d - i[0]) / y) + y * Math.log(1 + Math.max(0, i[0] - f) / y)),
        (p += -y * Math.log(1 + Math.max(0, g - i[1]) / y) + y * Math.log(1 + Math.max(0, i[1] - _) / y)))
    }
    return [m, p]
  }
}
function Wh(s) {
  return s
}
function Ir(s, t, e, i) {
  const n = $(t) / e[0],
    r = Zt(t) / e[1]
  return i ? Math.min(s, Math.max(n, r)) : Math.min(s, Math.min(n, r))
}
function br(s, t, e) {
  let i = Math.min(s, t)
  const n = 50
  return (
    (i *= Math.log(1 + n * Math.max(0, s / t - 1)) / n + 1),
    e && ((i = Math.max(i, e)), (i /= Math.log(1 + n * Math.max(0, e / s - 1)) / n + 1)),
    tt(i, e / 2, t * 2)
  )
}
function Yh(s, t, e, i) {
  return (
    (t = t !== void 0 ? t : !0),
    function (n, r, o, a) {
      if (n !== void 0) {
        const l = s[0],
          h = s[s.length - 1],
          c = e ? Ir(l, e, o, i) : l
        if (a) return t ? br(n, c, h) : tt(n, h, c)
        const u = Math.min(c, n),
          d = Math.floor(sr(s, u, r))
        return s[d] > c && d < s.length - 1 ? s[d + 1] : s[d]
      }
    }
  )
}
function zh(s, t, e, i, n, r) {
  return (
    (i = i !== void 0 ? i : !0),
    (e = e !== void 0 ? e : 0),
    function (o, a, l, h) {
      if (o !== void 0) {
        const c = n ? Ir(t, n, l, r) : t
        if (h) return i ? br(o, c, e) : tt(o, e, c)
        const u = 1e-9,
          d = Math.ceil(Math.log(t / c) / Math.log(s) - u),
          f = -a * (0.5 - u) + 0.5,
          g = Math.min(c, o),
          _ = Math.floor(Math.log(t / g) / Math.log(s) + f),
          m = Math.max(d, _),
          p = t / Math.pow(s, m)
        return tt(p, e, c)
      }
    }
  )
}
function _o(s, t, e, i, n) {
  return (
    (e = e !== void 0 ? e : !0),
    function (r, o, a, l) {
      if (r !== void 0) {
        const h = i ? Ir(s, i, a, n) : s
        return !e || !l ? tt(r, t, h) : br(r, h, t)
      }
    }
  )
}
function Fr(s) {
  if (s !== void 0) return 0
}
function mo(s) {
  if (s !== void 0) return s
}
function Bh(s) {
  const t = (2 * Math.PI) / s
  return function (e, i) {
    if (i) return e
    if (e !== void 0) return ((e = Math.floor(e / t + 0.5) * t), e)
  }
}
function Vh(s) {
  return (
    (s = s || _i(5)),
    function (t, e) {
      if (e) return t
      if (t !== void 0) return Math.abs(t) <= s ? 0 : t
    }
  )
}
function La(s) {
  return Math.pow(s, 3)
}
function wi(s) {
  return 1 - La(1 - s)
}
function Kh(s) {
  return 3 * s * s - 2 * s * s * s
}
function Uh(s) {
  return s
}
const xs = 0
class Yt extends Xt {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      (t = Object.assign({}, t)),
      (this.hints_ = [0, 0]),
      (this.animations_ = []),
      this.updateAnimationKey_,
      (this.projection_ = gr(t.projection, 'EPSG:3857')),
      (this.viewportSize_ = [100, 100]),
      (this.targetCenter_ = null),
      this.targetResolution_,
      this.targetRotation_,
      (this.nextCenter_ = null),
      this.nextResolution_,
      this.nextRotation_,
      (this.cancelAnchor_ = void 0),
      t.projection && la(),
      t.center && (t.center = J(t.center, this.projection_)),
      t.extent && (t.extent = we(t.extent, this.projection_)),
      this.applyOptions_(t))
  }
  applyOptions_(t) {
    const e = Object.assign({}, t)
    for (const a in kt) delete e[a]
    this.setProperties(e, !0)
    const i = qh(t)
    ;((this.maxResolution_ = i.maxResolution),
      (this.minResolution_ = i.minResolution),
      (this.zoomFactor_ = i.zoomFactor),
      (this.resolutions_ = t.resolutions),
      (this.padding_ = t.padding),
      (this.minZoom_ = i.minZoom))
    const n = Zh(t),
      r = i.constraint,
      o = Hh(t)
    ;((this.constraints_ = { center: n, resolution: r, rotation: o }),
      this.setRotation(t.rotation !== void 0 ? t.rotation : 0),
      this.setCenterInternal(t.center !== void 0 ? t.center : null),
      t.resolution !== void 0 ? this.setResolution(t.resolution) : t.zoom !== void 0 && this.setZoom(t.zoom))
  }
  get padding() {
    return this.padding_
  }
  set padding(t) {
    let e = this.padding_
    this.padding_ = t
    const i = this.getCenterInternal()
    if (i) {
      const n = t || [0, 0, 0, 0]
      e = e || [0, 0, 0, 0]
      const r = this.getResolution(),
        o = (r / 2) * (n[3] - e[3] + e[1] - n[1]),
        a = (r / 2) * (n[0] - e[0] + e[2] - n[2])
      this.setCenterInternal([i[0] + o, i[1] - a])
    }
  }
  getUpdatedOptions_(t) {
    const e = this.getProperties()
    return (
      e.resolution !== void 0 ? (e.resolution = this.getResolution()) : (e.zoom = this.getZoom()),
      (e.center = this.getCenterInternal()),
      (e.rotation = this.getRotation()),
      Object.assign({}, e, t)
    )
  }
  animate(t) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0)
    const e = new Array(arguments.length)
    for (let i = 0; i < e.length; ++i) {
      let n = arguments[i]
      ;(n.center && ((n = Object.assign({}, n)), (n.center = J(n.center, this.getProjection()))),
        n.anchor && ((n = Object.assign({}, n)), (n.anchor = J(n.anchor, this.getProjection()))),
        (e[i] = n))
    }
    this.animateInternal.apply(this, e)
  }
  animateInternal(t) {
    let e = arguments.length,
      i
    e > 1 && typeof arguments[e - 1] == 'function' && ((i = arguments[e - 1]), --e)
    let n = 0
    for (; n < e && !this.isDef(); ++n) {
      const c = arguments[n]
      ;(c.center && this.setCenterInternal(c.center),
        c.zoom !== void 0 ? this.setZoom(c.zoom) : c.resolution && this.setResolution(c.resolution),
        c.rotation !== void 0 && this.setRotation(c.rotation))
    }
    if (n === e) {
      i && pn(i, !0)
      return
    }
    let r = Date.now(),
      o = this.targetCenter_.slice(),
      a = this.targetResolution_,
      l = this.targetRotation_
    const h = []
    for (; n < e; ++n) {
      const c = arguments[n],
        u = {
          start: r,
          complete: !1,
          anchor: c.anchor,
          duration: c.duration !== void 0 ? c.duration : 1e3,
          easing: c.easing || Kh,
          callback: i,
        }
      if (
        (c.center && ((u.sourceCenter = o), (u.targetCenter = c.center.slice()), (o = u.targetCenter)),
        c.zoom !== void 0
          ? ((u.sourceResolution = a),
            (u.targetResolution = this.getResolutionForZoom(c.zoom)),
            (a = u.targetResolution))
          : c.resolution &&
            ((u.sourceResolution = a), (u.targetResolution = c.resolution), (a = u.targetResolution)),
        c.rotation !== void 0)
      ) {
        u.sourceRotation = l
        const d = je(c.rotation - l + Math.PI, 2 * Math.PI) - Math.PI
        ;((u.targetRotation = l + d), (l = u.targetRotation))
      }
      ;(Jh(u) ? (u.complete = !0) : (r += u.duration), h.push(u))
    }
    ;(this.animations_.push(h), this.setHint(ct.ANIMATING, 1), this.updateAnimations_())
  }
  getAnimating() {
    return this.hints_[ct.ANIMATING] > 0
  }
  getInteracting() {
    return this.hints_[ct.INTERACTING] > 0
  }
  cancelAnimations() {
    this.setHint(ct.ANIMATING, -this.hints_[ct.ANIMATING])
    let t
    for (let e = 0, i = this.animations_.length; e < i; ++e) {
      const n = this.animations_[e]
      if ((n[0].callback && pn(n[0].callback, !1), !t))
        for (let r = 0, o = n.length; r < o; ++r) {
          const a = n[r]
          if (!a.complete) {
            t = a.anchor
            break
          }
        }
    }
    ;((this.animations_.length = 0),
      (this.cancelAnchor_ = t),
      (this.nextCenter_ = null),
      (this.nextResolution_ = NaN),
      (this.nextRotation_ = NaN))
  }
  updateAnimations_() {
    if (
      (this.updateAnimationKey_ !== void 0 &&
        (cancelAnimationFrame(this.updateAnimationKey_), (this.updateAnimationKey_ = void 0)),
      !this.getAnimating())
    )
      return
    const t = Date.now()
    let e = !1
    for (let i = this.animations_.length - 1; i >= 0; --i) {
      const n = this.animations_[i]
      let r = !0
      for (let o = 0, a = n.length; o < a; ++o) {
        const l = n[o]
        if (l.complete) continue
        const h = t - l.start
        let c = l.duration > 0 ? h / l.duration : 1
        c >= 1 ? ((l.complete = !0), (c = 1)) : (r = !1)
        const u = l.easing(c)
        if (l.sourceCenter) {
          const d = l.sourceCenter[0],
            f = l.sourceCenter[1],
            g = l.targetCenter[0],
            _ = l.targetCenter[1]
          this.nextCenter_ = l.targetCenter
          const m = d + u * (g - d),
            p = f + u * (_ - f)
          this.targetCenter_ = [m, p]
        }
        if (l.sourceResolution && l.targetResolution) {
          const d =
            u === 1 ? l.targetResolution : l.sourceResolution + u * (l.targetResolution - l.sourceResolution)
          if (l.anchor) {
            const f = this.getViewportSize_(this.getRotation()),
              g = this.constraints_.resolution(d, 0, f, !0)
            this.targetCenter_ = this.calculateCenterZoom(g, l.anchor)
          }
          ;((this.nextResolution_ = l.targetResolution),
            (this.targetResolution_ = d),
            this.applyTargetState_(!0))
        }
        if (l.sourceRotation !== void 0 && l.targetRotation !== void 0) {
          const d =
            u === 1
              ? je(l.targetRotation + Math.PI, 2 * Math.PI) - Math.PI
              : l.sourceRotation + u * (l.targetRotation - l.sourceRotation)
          if (l.anchor) {
            const f = this.constraints_.rotation(d, !0)
            this.targetCenter_ = this.calculateCenterRotate(f, l.anchor)
          }
          ;((this.nextRotation_ = l.targetRotation), (this.targetRotation_ = d))
        }
        if ((this.applyTargetState_(!0), (e = !0), !l.complete)) break
      }
      if (r) {
        ;((this.animations_[i] = null),
          this.setHint(ct.ANIMATING, -1),
          (this.nextCenter_ = null),
          (this.nextResolution_ = NaN),
          (this.nextRotation_ = NaN))
        const o = n[0].callback
        o && pn(o, !0)
      }
    }
    ;((this.animations_ = this.animations_.filter(Boolean)),
      e &&
        this.updateAnimationKey_ === void 0 &&
        (this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this))))
  }
  calculateCenterRotate(t, e) {
    let i
    const n = this.getCenterInternal()
    return (n !== void 0 && ((i = [n[0] - e[0], n[1] - e[1]]), dr(i, t - this.getRotation()), Vl(i, e)), i)
  }
  calculateCenterZoom(t, e) {
    let i
    const n = this.getCenterInternal(),
      r = this.getResolution()
    if (n !== void 0 && r !== void 0) {
      const o = e[0] - (t * (e[0] - n[0])) / r,
        a = e[1] - (t * (e[1] - n[1])) / r
      i = [o, a]
    }
    return i
  }
  getViewportSize_(t) {
    const e = this.viewportSize_
    if (t) {
      const i = e[0],
        n = e[1]
      return [
        Math.abs(i * Math.cos(t)) + Math.abs(n * Math.sin(t)),
        Math.abs(i * Math.sin(t)) + Math.abs(n * Math.cos(t)),
      ]
    }
    return e
  }
  setViewportSize(t) {
    ;((this.viewportSize_ = Array.isArray(t) ? t.slice() : [100, 100]),
      this.getAnimating() || this.resolveConstraints(0))
  }
  getCenter() {
    const t = this.getCenterInternal()
    return t && We(t, this.getProjection())
  }
  getCenterInternal() {
    return this.get(kt.CENTER)
  }
  getConstraints() {
    return this.constraints_
  }
  getConstrainResolution() {
    return this.get('constrainResolution')
  }
  getHints(t) {
    return t !== void 0 ? ((t[0] = this.hints_[0]), (t[1] = this.hints_[1]), t) : this.hints_.slice()
  }
  calculateExtent(t) {
    const e = this.calculateExtentInternal(t)
    return rs(e, this.getProjection())
  }
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_()
    const e = this.getCenterInternal()
    G(e, 1)
    const i = this.getResolution()
    G(i !== void 0, 2)
    const n = this.getRotation()
    return (G(n !== void 0, 3), Ws(e, i, n, t))
  }
  getMaxResolution() {
    return this.maxResolution_
  }
  getMinResolution() {
    return this.minResolution_
  }
  getMaxZoom() {
    return this.getZoomForResolution(this.minResolution_)
  }
  setMaxZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ maxZoom: t }))
  }
  getMinZoom() {
    return this.getZoomForResolution(this.maxResolution_)
  }
  setMinZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ minZoom: t }))
  }
  setConstrainResolution(t) {
    this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: t }))
  }
  getProjection() {
    return this.projection_
  }
  getResolution() {
    return this.get(kt.RESOLUTION)
  }
  getResolutions() {
    return this.resolutions_
  }
  getResolutionForExtent(t, e) {
    return this.getResolutionForExtentInternal(we(t, this.getProjection()), e)
  }
  getResolutionForExtentInternal(t, e) {
    e = e || this.getViewportSizeMinusPadding_()
    const i = $(t) / e[0],
      n = Zt(t) / e[1]
    return Math.max(i, n)
  }
  getResolutionForValueFunction(t) {
    t = t || 2
    const e = this.getConstrainedResolution(this.maxResolution_),
      i = this.minResolution_,
      n = Math.log(e / i) / Math.log(t)
    return function (r) {
      return e / Math.pow(t, r * n)
    }
  }
  getRotation() {
    return this.get(kt.ROTATION)
  }
  getValueForResolutionFunction(t) {
    const e = Math.log(t || 2),
      i = this.getConstrainedResolution(this.maxResolution_),
      n = this.minResolution_,
      r = Math.log(i / n) / e
    return function (o) {
      return Math.log(i / o) / e / r
    }
  }
  getViewportSizeMinusPadding_(t) {
    let e = this.getViewportSize_(t)
    const i = this.padding_
    return (i && (e = [e[0] - i[1] - i[3], e[1] - i[0] - i[2]]), e)
  }
  getState() {
    const t = this.getProjection(),
      e = this.getResolution(),
      i = this.getRotation()
    let n = this.getCenterInternal()
    const r = this.padding_
    if (r) {
      const o = this.getViewportSizeMinusPadding_()
      n = Es(n, this.getViewportSize_(), [o[0] / 2 + r[3], o[1] / 2 + r[0]], e, i)
    }
    return {
      center: n.slice(0),
      projection: t !== void 0 ? t : null,
      resolution: e,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: i,
      zoom: this.getZoom(),
    }
  }
  getViewStateAndExtent() {
    return { viewState: this.getState(), extent: this.calculateExtent() }
  }
  getZoom() {
    let t
    const e = this.getResolution()
    return (e !== void 0 && (t = this.getZoomForResolution(e)), t)
  }
  getZoomForResolution(t) {
    let e = this.minZoom_ || 0,
      i,
      n
    if (this.resolutions_) {
      const r = sr(this.resolutions_, t, 1)
      ;((e = r),
        (i = this.resolutions_[r]),
        r == this.resolutions_.length - 1 ? (n = 2) : (n = i / this.resolutions_[r + 1]))
    } else ((i = this.maxResolution_), (n = this.zoomFactor_))
    return e + Math.log(i / t) / Math.log(n)
  }
  getResolutionForZoom(t) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1) return 0
      const e = tt(Math.floor(t), 0, this.resolutions_.length - 2),
        i = this.resolutions_[e] / this.resolutions_[e + 1]
      return this.resolutions_[e] / Math.pow(i, tt(t - e, 0, 1))
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_)
  }
  fit(t, e) {
    let i
    if ((G(Array.isArray(t) || typeof t.getSimplifiedGeometry == 'function', 24), Array.isArray(t))) {
      G(!ns(t), 25)
      const n = we(t, this.getProjection())
      i = ro(n)
    } else if (t.getType() === 'Circle') {
      const n = we(t.getExtent(), this.getProjection())
      ;((i = ro(n)), i.rotate(this.getRotation(), Xe(n)))
    } else i = t
    this.fitInternal(i, e)
  }
  rotatedExtentForGeometry(t) {
    const e = this.getRotation(),
      i = Math.cos(e),
      n = Math.sin(-e),
      r = t.getFlatCoordinates(),
      o = t.getStride()
    let a = 1 / 0,
      l = 1 / 0,
      h = -1 / 0,
      c = -1 / 0
    for (let u = 0, d = r.length; u < d; u += o) {
      const f = r[u] * i - r[u + 1] * n,
        g = r[u] * n + r[u + 1] * i
      ;((a = Math.min(a, f)), (l = Math.min(l, g)), (h = Math.max(h, f)), (c = Math.max(c, g)))
    }
    return [a, l, h, c]
  }
  fitInternal(t, e) {
    e = e || {}
    let i = e.size
    i || (i = this.getViewportSizeMinusPadding_())
    const n = e.padding !== void 0 ? e.padding : [0, 0, 0, 0],
      r = e.nearest !== void 0 ? e.nearest : !1
    let o
    e.minResolution !== void 0
      ? (o = e.minResolution)
      : e.maxZoom !== void 0
        ? (o = this.getResolutionForZoom(e.maxZoom))
        : (o = 0)
    const a = this.rotatedExtentForGeometry(t)
    let l = this.getResolutionForExtentInternal(a, [i[0] - n[1] - n[3], i[1] - n[0] - n[2]])
    ;((l = isNaN(l) ? o : Math.max(l, o)), (l = this.getConstrainedResolution(l, r ? 0 : 1)))
    const h = this.getRotation(),
      c = Math.sin(h),
      u = Math.cos(h),
      d = Xe(a)
    ;((d[0] += ((n[1] - n[3]) / 2) * l), (d[1] += ((n[0] - n[2]) / 2) * l))
    const f = d[0] * u - d[1] * c,
      g = d[1] * u + d[0] * c,
      _ = this.getConstrainedCenter([f, g], l),
      m = e.callback ? e.callback : xi
    e.duration !== void 0
      ? this.animateInternal({ resolution: l, center: _, duration: e.duration, easing: e.easing }, m)
      : ((this.targetResolution_ = l), (this.targetCenter_ = _), this.applyTargetState_(!1, !0), pn(m, !0))
  }
  centerOn(t, e, i) {
    this.centerOnInternal(J(t, this.getProjection()), e, i)
  }
  centerOnInternal(t, e, i) {
    this.setCenterInternal(Es(t, e, i, this.getResolution(), this.getRotation()))
  }
  calculateCenterShift(t, e, i, n) {
    let r
    const o = this.padding_
    if (o && t) {
      const a = this.getViewportSizeMinusPadding_(-i),
        l = Es(t, n, [a[0] / 2 + o[3], a[1] / 2 + o[0]], e, i)
      r = [t[0] - l[0], t[1] - l[1]]
    }
    return r
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0
  }
  adjustCenter(t) {
    const e = We(this.targetCenter_, this.getProjection())
    this.setCenter([e[0] + t[0], e[1] + t[1]])
  }
  adjustCenterInternal(t) {
    const e = this.targetCenter_
    this.setCenterInternal([e[0] + t[0], e[1] + t[1]])
  }
  adjustResolution(t, e) {
    ;((e = e && J(e, this.getProjection())), this.adjustResolutionInternal(t, e))
  }
  adjustResolutionInternal(t, e) {
    const i = this.getAnimating() || this.getInteracting(),
      n = this.getViewportSize_(this.getRotation()),
      r = this.constraints_.resolution(this.targetResolution_ * t, 0, n, i)
    ;(e && (this.targetCenter_ = this.calculateCenterZoom(r, e)),
      (this.targetResolution_ *= t),
      this.applyTargetState_())
  }
  adjustZoom(t, e) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -t), e)
  }
  adjustRotation(t, e) {
    ;(e && (e = J(e, this.getProjection())), this.adjustRotationInternal(t, e))
  }
  adjustRotationInternal(t, e) {
    const i = this.getAnimating() || this.getInteracting(),
      n = this.constraints_.rotation(this.targetRotation_ + t, i)
    ;(e && (this.targetCenter_ = this.calculateCenterRotate(n, e)),
      (this.targetRotation_ += t),
      this.applyTargetState_())
  }
  setCenter(t) {
    this.setCenterInternal(t && J(t, this.getProjection()))
  }
  setCenterInternal(t) {
    ;((this.targetCenter_ = t), this.applyTargetState_())
  }
  setHint(t, e) {
    return ((this.hints_[t] += e), this.changed(), this.hints_[t])
  }
  setResolution(t) {
    ;((this.targetResolution_ = t), this.applyTargetState_())
  }
  setRotation(t) {
    ;((this.targetRotation_ = t), this.applyTargetState_())
  }
  setZoom(t) {
    this.setResolution(this.getResolutionForZoom(t))
  }
  applyTargetState_(t, e) {
    const i = this.getAnimating() || this.getInteracting() || e,
      n = this.constraints_.rotation(this.targetRotation_, i),
      r = this.getViewportSize_(n),
      o = this.constraints_.resolution(this.targetResolution_, 0, r, i),
      a = this.constraints_.center(
        this.targetCenter_,
        o,
        r,
        i,
        this.calculateCenterShift(this.targetCenter_, o, n, r),
      )
    ;(this.get(kt.ROTATION) !== n && this.set(kt.ROTATION, n),
      this.get(kt.RESOLUTION) !== o && (this.set(kt.RESOLUTION, o), this.set('zoom', this.getZoom(), !0)),
      (!a || !this.get(kt.CENTER) || !jt(this.get(kt.CENTER), a)) && this.set(kt.CENTER, a),
      this.getAnimating() && !t && this.cancelAnimations(),
      (this.cancelAnchor_ = void 0))
  }
  resolveConstraints(t, e, i) {
    t = t !== void 0 ? t : 200
    const n = e || 0,
      r = this.constraints_.rotation(this.targetRotation_),
      o = this.getViewportSize_(r),
      a = this.constraints_.resolution(this.targetResolution_, n, o),
      l = this.constraints_.center(
        this.targetCenter_,
        a,
        o,
        !1,
        this.calculateCenterShift(this.targetCenter_, a, r, o),
      )
    if (t === 0 && !this.cancelAnchor_) {
      ;((this.targetResolution_ = a),
        (this.targetRotation_ = r),
        (this.targetCenter_ = l),
        this.applyTargetState_())
      return
    }
    ;((i = i || (t === 0 ? this.cancelAnchor_ : void 0)),
      (this.cancelAnchor_ = void 0),
      (this.getResolution() !== a ||
        this.getRotation() !== r ||
        !this.getCenterInternal() ||
        !jt(this.getCenterInternal(), l)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({ rotation: r, center: l, resolution: a, duration: t, easing: wi, anchor: i })))
  }
  beginInteraction() {
    ;(this.resolveConstraints(0), this.setHint(ct.INTERACTING, 1))
  }
  endInteraction(t, e, i) {
    ;((i = i && J(i, this.getProjection())), this.endInteractionInternal(t, e, i))
  }
  endInteractionInternal(t, e, i) {
    this.getInteracting() && (this.setHint(ct.INTERACTING, -1), this.resolveConstraints(t, e, i))
  }
  getConstrainedCenter(t, e) {
    const i = this.getViewportSize_(this.getRotation())
    return this.constraints_.center(t, e || this.getResolution(), i)
  }
  getConstrainedZoom(t, e) {
    const i = this.getResolutionForZoom(t)
    return this.getZoomForResolution(this.getConstrainedResolution(i, e))
  }
  getConstrainedResolution(t, e) {
    e = e || 0
    const i = this.getViewportSize_(this.getRotation())
    return this.constraints_.resolution(t, e, i)
  }
}
function pn(s, t) {
  setTimeout(function () {
    s(t)
  }, 0)
}
function Zh(s) {
  if (s.extent !== void 0) {
    const e = s.smoothExtentConstraint !== void 0 ? s.smoothExtentConstraint : !0
    return go(s.extent, s.constrainOnlyCenter, e)
  }
  const t = gr(s.projection, 'EPSG:3857')
  if (s.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice()
    return ((e[0] = -1 / 0), (e[2] = 1 / 0), go(e, !1, !1))
  }
  return Wh
}
function qh(s) {
  let t,
    e,
    i,
    o = s.minZoom !== void 0 ? s.minZoom : xs,
    a = s.maxZoom !== void 0 ? s.maxZoom : 28
  const l = s.zoomFactor !== void 0 ? s.zoomFactor : 2,
    h = s.multiWorld !== void 0 ? s.multiWorld : !1,
    c = s.smoothResolutionConstraint !== void 0 ? s.smoothResolutionConstraint : !0,
    u = s.showFullExtent !== void 0 ? s.showFullExtent : !1,
    d = gr(s.projection, 'EPSG:3857'),
    f = d.getExtent()
  let g = s.constrainOnlyCenter,
    _ = s.extent
  if ((!h && !_ && d.isGlobal() && ((g = !1), (_ = f)), s.resolutions !== void 0)) {
    const m = s.resolutions
    ;((e = m[o]),
      (i = m[a] !== void 0 ? m[a] : m[m.length - 1]),
      s.constrainResolution ? (t = Yh(m, c, !g && _, u)) : (t = _o(e, i, c, !g && _, u)))
  } else {
    const p = (f ? Math.max($(f), Zt(f)) : (360 * cr.degrees) / d.getMetersPerUnit()) / Rr / Math.pow(2, xs),
      y = p / Math.pow(2, 28 - xs)
    ;((e = s.maxResolution),
      e !== void 0 ? (o = 0) : (e = p / Math.pow(l, o)),
      (i = s.minResolution),
      i === void 0 &&
        (s.maxZoom !== void 0
          ? s.maxResolution !== void 0
            ? (i = e / Math.pow(l, a))
            : (i = p / Math.pow(l, a))
          : (i = y)),
      (a = o + Math.floor(Math.log(e / i) / Math.log(l))),
      (i = e / Math.pow(l, a - o)),
      s.constrainResolution ? (t = zh(l, e, i, c, !g && _, u)) : (t = _o(e, i, c, !g && _, u)))
  }
  return { constraint: t, maxResolution: e, minResolution: i, minZoom: o, zoomFactor: l }
}
function Hh(s) {
  if (s.enableRotation !== void 0 ? s.enableRotation : !0) {
    const e = s.constrainRotation
    return e === void 0 || e === !0 ? Vh() : e === !1 ? mo : typeof e == 'number' ? Bh(e) : mo
  }
  return Fr
}
function Jh(s) {
  return !(
    (s.sourceCenter && s.targetCenter && !jt(s.sourceCenter, s.targetCenter)) ||
    s.sourceResolution !== s.targetResolution ||
    s.sourceRotation !== s.targetRotation
  )
}
function Es(s, t, e, i, n) {
  const r = Math.cos(-n)
  let o = Math.sin(-n),
    a = s[0] * r - s[1] * o,
    l = s[1] * r + s[0] * o
  ;((a += (t[0] / 2 - e[0]) * i), (l += (e[1] - t[1] / 2) * i), (o = -o))
  const h = a * r - l * o,
    c = l * r + a * o
  return [h, c]
}
class ds extends Fa {
  constructor(t) {
    const e = Object.assign({}, t)
    ;(delete e.source,
      super(e),
      this.on,
      this.once,
      this.un,
      (this.mapPrecomposeKey_ = null),
      (this.mapRenderKey_ = null),
      (this.sourceChangeKey_ = null),
      (this.renderer_ = null),
      (this.sourceReady_ = !1),
      (this.rendered = !1),
      t.render && (this.render = t.render),
      t.map && this.setMap(t.map),
      this.addChangeListener(U.SOURCE, this.handleSourcePropertyChange_))
    const i = t.source ? t.source : null
    this.setSource(i)
  }
  getLayersArray(t) {
    return ((t = t || []), t.push(this), t)
  }
  getLayerStatesArray(t) {
    return ((t = t || []), t.push(this.getLayerState()), t)
  }
  getSource() {
    return this.get(U.SOURCE) || null
  }
  getRenderSource() {
    return this.getSource()
  }
  getSourceState() {
    const t = this.getSource()
    return t ? t.getState() : 'undefined'
  }
  handleSourceChange_() {
    ;(this.changed(),
      !(this.sourceReady_ || this.getSource().getState() !== 'ready') &&
        ((this.sourceReady_ = !0), this.dispatchEvent('sourceready')))
  }
  handleSourcePropertyChange_() {
    ;(this.sourceChangeKey_ && (q(this.sourceChangeKey_), (this.sourceChangeKey_ = null)),
      (this.sourceReady_ = !1))
    const t = this.getSource()
    ;(t &&
      ((this.sourceChangeKey_ = j(t, O.CHANGE, this.handleSourceChange_, this)),
      t.getState() === 'ready' &&
        ((this.sourceReady_ = !0),
        setTimeout(() => {
          this.dispatchEvent('sourceready')
        }, 0))),
      this.changed())
  }
  getFeatures(t) {
    return this.renderer_ ? this.renderer_.getFeatures(t) : Promise.resolve([])
  }
  getData(t) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(t)
  }
  isVisible(t) {
    let e
    const i = this.getMapInternal()
    ;(!t && i && (t = i.getView()),
      t instanceof Yt ? (e = { viewState: t.getState(), extent: t.calculateExtent() }) : (e = t),
      !e.layerStatesArray && i && (e.layerStatesArray = i.getLayerGroup().getLayerStatesArray()))
    let n
    e.layerStatesArray ? (n = e.layerStatesArray.find(o => o.layer === this)) : (n = this.getLayerState())
    const r = this.getExtent()
    return Lr(n, e.viewState) && (!r || mt(r, e.extent))
  }
  getAttributions(t) {
    if (!this.isVisible(t)) return []
    let e
    const i = this.getSource()
    if ((i && (e = i.getAttributions()), !e)) return []
    const n = t instanceof Yt ? t.getViewStateAndExtent() : t
    let r = e(n)
    return (Array.isArray(r) || (r = [r]), r)
  }
  render(t, e) {
    const i = this.getRenderer()
    return i.prepareFrame(t) ? ((this.rendered = !0), i.renderFrame(t, e)) : null
  }
  unrender() {
    this.rendered = !1
  }
  setMapInternal(t) {
    ;(t || this.unrender(), this.set(U.MAP, t))
  }
  getMapInternal() {
    return this.get(U.MAP)
  }
  setMap(t) {
    ;(this.mapPrecomposeKey_ && (q(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)),
      t || this.changed(),
      this.mapRenderKey_ && (q(this.mapRenderKey_), (this.mapRenderKey_ = null)),
      t &&
        ((this.mapPrecomposeKey_ = j(
          t,
          Ut.PRECOMPOSE,
          function (e) {
            const n = e.frameState.layerStatesArray,
              r = this.getLayerState(!1)
            ;(G(
              !n.some(function (o) {
                return o.layer === r.layer
              }),
              67,
            ),
              n.push(r))
          },
          this,
        )),
        (this.mapRenderKey_ = j(this, O.CHANGE, t.render, t)),
        this.changed()))
  }
  setSource(t) {
    this.set(U.SOURCE, t)
  }
  getRenderer() {
    return (this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_)
  }
  hasRenderer() {
    return !!this.renderer_
  }
  createRenderer() {
    return null
  }
  disposeInternal() {
    ;(this.renderer_ && (this.renderer_.dispose(), delete this.renderer_),
      this.setSource(null),
      super.disposeInternal())
  }
}
function Lr(s, t) {
  if (!s.visible) return !1
  const e = t.resolution
  if (e < s.minResolution || e >= s.maxResolution) return !1
  const i = t.zoom
  return i > s.minZoom && i <= s.maxZoom
}
function $h(s, t, e, i, n) {
  Pa(s, t, e || 0, i || s.length - 1, n || Qh)
}
function Pa(s, t, e, i, n) {
  for (; i > e; ) {
    if (i - e > 600) {
      var r = i - e + 1,
        o = t - e + 1,
        a = Math.log(r),
        l = 0.5 * Math.exp((2 * a) / 3),
        h = 0.5 * Math.sqrt((a * l * (r - l)) / r) * (o - r / 2 < 0 ? -1 : 1),
        c = Math.max(e, Math.floor(t - (o * l) / r + h)),
        u = Math.min(i, Math.floor(t + ((r - o) * l) / r + h))
      Pa(s, t, c, u, n)
    }
    var d = s[t],
      f = e,
      g = i
    for (Fi(s, e, t), n(s[i], d) > 0 && Fi(s, e, i); f < g; ) {
      for (Fi(s, f, g), f++, g--; n(s[f], d) < 0; ) f++
      for (; n(s[g], d) > 0; ) g--
    }
    ;(n(s[e], d) === 0 ? Fi(s, e, g) : (g++, Fi(s, g, i)), g <= t && (e = g + 1), t <= g && (i = g - 1))
  }
}
function Fi(s, t, e) {
  var i = s[t]
  ;((s[t] = s[e]), (s[e] = i))
}
function Qh(s, t) {
  return s < t ? -1 : s > t ? 1 : 0
}
let Ma = class {
  constructor(t = 9) {
    ;((this._maxEntries = Math.max(4, t)),
      (this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4))),
      this.clear())
  }
  all() {
    return this._all(this.data, [])
  }
  search(t) {
    let e = this.data
    const i = []
    if (!xn(t, e)) return i
    const n = this.toBBox,
      r = []
    for (; e; ) {
      for (let o = 0; o < e.children.length; o++) {
        const a = e.children[o],
          l = e.leaf ? n(a) : a
        xn(t, l) && (e.leaf ? i.push(a) : ws(t, l) ? this._all(a, i) : r.push(a))
      }
      e = r.pop()
    }
    return i
  }
  collides(t) {
    let e = this.data
    if (!xn(t, e)) return !1
    const i = []
    for (; e; ) {
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n],
          o = e.leaf ? this.toBBox(r) : r
        if (xn(t, o)) {
          if (e.leaf || ws(t, o)) return !0
          i.push(r)
        }
      }
      e = i.pop()
    }
    return !1
  }
  load(t) {
    if (!(t && t.length)) return this
    if (t.length < this._minEntries) {
      for (let i = 0; i < t.length; i++) this.insert(t[i])
      return this
    }
    let e = this._build(t.slice(), 0, t.length - 1, 0)
    if (!this.data.children.length) this.data = e
    else if (this.data.height === e.height) this._splitRoot(this.data, e)
    else {
      if (this.data.height < e.height) {
        const i = this.data
        ;((this.data = e), (e = i))
      }
      this._insert(e, this.data.height - e.height - 1, !0)
    }
    return this
  }
  insert(t) {
    return (t && this._insert(t, this.data.height - 1), this)
  }
  clear() {
    return ((this.data = ai([])), this)
  }
  remove(t, e) {
    if (!t) return this
    let i = this.data
    const n = this.toBBox(t),
      r = [],
      o = []
    let a, l, h
    for (; i || r.length; ) {
      if ((i || ((i = r.pop()), (l = r[r.length - 1]), (a = o.pop()), (h = !0)), i.leaf)) {
        const c = tc(t, i.children, e)
        if (c !== -1) return (i.children.splice(c, 1), r.push(i), this._condense(r), this)
      }
      !h && !i.leaf && ws(i, n)
        ? (r.push(i), o.push(a), (a = 0), (l = i), (i = i.children[0]))
        : l
          ? (a++, (i = l.children[a]), (h = !1))
          : (i = null)
    }
    return this
  }
  toBBox(t) {
    return t
  }
  compareMinX(t, e) {
    return t.minX - e.minX
  }
  compareMinY(t, e) {
    return t.minY - e.minY
  }
  toJSON() {
    return this.data
  }
  fromJSON(t) {
    return ((this.data = t), this)
  }
  _all(t, e) {
    const i = []
    for (; t; ) (t.leaf ? e.push(...t.children) : i.push(...t.children), (t = i.pop()))
    return e
  }
  _build(t, e, i, n) {
    const r = i - e + 1
    let o = this._maxEntries,
      a
    if (r <= o) return ((a = ai(t.slice(e, i + 1))), ei(a, this.toBBox), a)
    ;(n || ((n = Math.ceil(Math.log(r) / Math.log(o))), (o = Math.ceil(r / Math.pow(o, n - 1)))),
      (a = ai([])),
      (a.leaf = !1),
      (a.height = n))
    const l = Math.ceil(r / o),
      h = l * Math.ceil(Math.sqrt(o))
    po(t, e, i, h, this.compareMinX)
    for (let c = e; c <= i; c += h) {
      const u = Math.min(c + h - 1, i)
      po(t, c, u, l, this.compareMinY)
      for (let d = c; d <= u; d += l) {
        const f = Math.min(d + l - 1, u)
        a.children.push(this._build(t, d, f, n - 1))
      }
    }
    return (ei(a, this.toBBox), a)
  }
  _chooseSubtree(t, e, i, n) {
    for (; n.push(e), !(e.leaf || n.length - 1 === i); ) {
      let r = 1 / 0,
        o = 1 / 0,
        a
      for (let l = 0; l < e.children.length; l++) {
        const h = e.children[l],
          c = Cs(h),
          u = nc(t, h) - c
        u < o ? ((o = u), (r = c < r ? c : r), (a = h)) : u === o && c < r && ((r = c), (a = h))
      }
      e = a || e.children[0]
    }
    return e
  }
  _insert(t, e, i) {
    const n = i ? t : this.toBBox(t),
      r = [],
      o = this._chooseSubtree(n, this.data, e, r)
    for (o.children.push(t), Oi(o, n); e >= 0 && r[e].children.length > this._maxEntries; )
      (this._split(r, e), e--)
    this._adjustParentBBoxes(n, r, e)
  }
  _split(t, e) {
    const i = t[e],
      n = i.children.length,
      r = this._minEntries
    this._chooseSplitAxis(i, r, n)
    const o = this._chooseSplitIndex(i, r, n),
      a = ai(i.children.splice(o, i.children.length - o))
    ;((a.height = i.height),
      (a.leaf = i.leaf),
      ei(i, this.toBBox),
      ei(a, this.toBBox),
      e ? t[e - 1].children.push(a) : this._splitRoot(i, a))
  }
  _splitRoot(t, e) {
    ;((this.data = ai([t, e])),
      (this.data.height = t.height + 1),
      (this.data.leaf = !1),
      ei(this.data, this.toBBox))
  }
  _chooseSplitIndex(t, e, i) {
    let n,
      r = 1 / 0,
      o = 1 / 0
    for (let a = e; a <= i - e; a++) {
      const l = Ai(t, 0, a, this.toBBox),
        h = Ai(t, a, i, this.toBBox),
        c = sc(l, h),
        u = Cs(l) + Cs(h)
      c < r ? ((r = c), (n = a), (o = u < o ? u : o)) : c === r && u < o && ((o = u), (n = a))
    }
    return n || i - e
  }
  _chooseSplitAxis(t, e, i) {
    const n = t.leaf ? this.compareMinX : ec,
      r = t.leaf ? this.compareMinY : ic,
      o = this._allDistMargin(t, e, i, n),
      a = this._allDistMargin(t, e, i, r)
    o < a && t.children.sort(n)
  }
  _allDistMargin(t, e, i, n) {
    t.children.sort(n)
    const r = this.toBBox,
      o = Ai(t, 0, e, r),
      a = Ai(t, i - e, i, r)
    let l = yn(o) + yn(a)
    for (let h = e; h < i - e; h++) {
      const c = t.children[h]
      ;(Oi(o, t.leaf ? r(c) : c), (l += yn(o)))
    }
    for (let h = i - e - 1; h >= e; h--) {
      const c = t.children[h]
      ;(Oi(a, t.leaf ? r(c) : c), (l += yn(a)))
    }
    return l
  }
  _adjustParentBBoxes(t, e, i) {
    for (let n = i; n >= 0; n--) Oi(e[n], t)
  }
  _condense(t) {
    for (let e = t.length - 1, i; e >= 0; e--)
      t[e].children.length === 0
        ? e > 0
          ? ((i = t[e - 1].children), i.splice(i.indexOf(t[e]), 1))
          : this.clear()
        : ei(t[e], this.toBBox)
  }
}
function tc(s, t, e) {
  if (!e) return t.indexOf(s)
  for (let i = 0; i < t.length; i++) if (e(s, t[i])) return i
  return -1
}
function ei(s, t) {
  Ai(s, 0, s.children.length, t, s)
}
function Ai(s, t, e, i, n) {
  ;(n || (n = ai(null)), (n.minX = 1 / 0), (n.minY = 1 / 0), (n.maxX = -1 / 0), (n.maxY = -1 / 0))
  for (let r = t; r < e; r++) {
    const o = s.children[r]
    Oi(n, s.leaf ? i(o) : o)
  }
  return n
}
function Oi(s, t) {
  return (
    (s.minX = Math.min(s.minX, t.minX)),
    (s.minY = Math.min(s.minY, t.minY)),
    (s.maxX = Math.max(s.maxX, t.maxX)),
    (s.maxY = Math.max(s.maxY, t.maxY)),
    s
  )
}
function ec(s, t) {
  return s.minX - t.minX
}
function ic(s, t) {
  return s.minY - t.minY
}
function Cs(s) {
  return (s.maxX - s.minX) * (s.maxY - s.minY)
}
function yn(s) {
  return s.maxX - s.minX + (s.maxY - s.minY)
}
function nc(s, t) {
  return (
    (Math.max(t.maxX, s.maxX) - Math.min(t.minX, s.minX)) *
    (Math.max(t.maxY, s.maxY) - Math.min(t.minY, s.minY))
  )
}
function sc(s, t) {
  const e = Math.max(s.minX, t.minX),
    i = Math.max(s.minY, t.minY),
    n = Math.min(s.maxX, t.maxX),
    r = Math.min(s.maxY, t.maxY)
  return Math.max(0, n - e) * Math.max(0, r - i)
}
function ws(s, t) {
  return s.minX <= t.minX && s.minY <= t.minY && t.maxX <= s.maxX && t.maxY <= s.maxY
}
function xn(s, t) {
  return t.minX <= s.maxX && t.minY <= s.maxY && t.maxX >= s.minX && t.maxY >= s.minY
}
function ai(s) {
  return { children: s, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 }
}
function po(s, t, e, i, n) {
  const r = [t, e]
  for (; r.length; ) {
    if (((e = r.pop()), (t = r.pop()), e - t <= i)) continue
    const o = t + Math.ceil((e - t) / i / 2) * i
    ;($h(s, o, t, e, n), r.push(t, o, o, e))
  }
}
class rc {
  constructor() {
    ;((this.cache_ = {}), (this.cacheSize_ = 0), (this.maxCacheSize_ = 32))
  }
  clear() {
    ;((this.cache_ = {}), (this.cacheSize_ = 0))
  }
  canExpireCache() {
    return this.cacheSize_ > this.maxCacheSize_
  }
  expire() {
    if (this.canExpireCache()) {
      let t = 0
      for (const e in this.cache_) {
        const i = this.cache_[e]
        ;(t++ & 3) === 0 && !i.hasListener() && (delete this.cache_[e], --this.cacheSize_)
      }
    }
  }
  get(t, e, i) {
    const n = yo(t, e, i)
    return n in this.cache_ ? this.cache_[n] : null
  }
  set(t, e, i, n) {
    const r = yo(t, e, i)
    ;((this.cache_[r] = n), ++this.cacheSize_)
  }
  setSize(t) {
    ;((this.maxCacheSize_ = t), this.expire())
  }
}
function yo(s, t, e) {
  const i = e ? Ta(e) : 'null'
  return t + ':' + s + ':' + i
}
const Kn = new rc()
function Aa(s, t, e) {
  const i = s
  let n = !0,
    r = !1,
    o = !1
  const a = [
    Dn(i, O.LOAD, function () {
      ;((o = !0), r || t())
    }),
  ]
  return (
    i.src && Sl
      ? ((r = !0),
        i
          .decode()
          .then(function () {
            n && t()
          })
          .catch(function (l) {
            n && (o ? t() : e())
          }))
      : a.push(Dn(i, O.ERROR, e)),
    function () {
      ;((n = !1), a.forEach(q))
    }
  )
}
let Li = null
class oc extends $n {
  constructor(t, e, i, n, r, o) {
    ;(super(),
      (this.hitDetectionImage_ = null),
      (this.image_ = t),
      (this.crossOrigin_ = n),
      (this.canvas_ = {}),
      (this.color_ = o),
      (this.unlisten_ = null),
      (this.imageState_ = r),
      (this.size_ = i),
      (this.src_ = e),
      this.tainted_)
  }
  initializeImage_() {
    ;((this.image_ = new Image()),
      this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_))
  }
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === Q.LOADED) {
      ;(Li || (Li = pt(1, 1, void 0, { willReadFrequently: !0 })), Li.drawImage(this.image_, 0, 0))
      try {
        ;(Li.getImageData(0, 0, 1, 1), (this.tainted_ = !1))
      } catch {
        ;((Li = null), (this.tainted_ = !0))
      }
    }
    return this.tainted_ === !0
  }
  dispatchChangeEvent_() {
    this.dispatchEvent(O.CHANGE)
  }
  handleImageError_() {
    ;((this.imageState_ = Q.ERROR), this.unlistenImage_(), this.dispatchChangeEvent_())
  }
  handleImageLoad_() {
    ;((this.imageState_ = Q.LOADED),
      this.size_
        ? ((this.image_.width = this.size_[0]), (this.image_.height = this.size_[1]))
        : (this.size_ = [this.image_.width, this.image_.height]),
      this.unlistenImage_(),
      this.dispatchChangeEvent_())
  }
  getImage(t) {
    return (
      this.image_ || this.initializeImage_(),
      this.replaceColor_(t),
      this.canvas_[t] ? this.canvas_[t] : this.image_
    )
  }
  getPixelRatio(t) {
    return (this.replaceColor_(t), this.canvas_[t] ? t : 1)
  }
  getImageState() {
    return this.imageState_
  }
  getHitDetectionImage() {
    if ((this.image_ || this.initializeImage_(), !this.hitDetectionImage_))
      if (this.isTainted_()) {
        const t = this.size_[0],
          e = this.size_[1],
          i = pt(t, e)
        ;(i.fillRect(0, 0, t, e), (this.hitDetectionImage_ = i.canvas))
      } else this.hitDetectionImage_ = this.image_
    return this.hitDetectionImage_
  }
  getSize() {
    return this.size_
  }
  getSrc() {
    return this.src_
  }
  load() {
    if (this.imageState_ === Q.IDLE) {
      ;(this.image_ || this.initializeImage_(), (this.imageState_ = Q.LOADING))
      try {
        this.image_.src = this.src_
      } catch {
        this.handleImageError_()
      }
      this.unlisten_ = Aa(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this))
    }
  }
  replaceColor_(t) {
    if (!this.color_ || this.canvas_[t] || this.imageState_ !== Q.LOADED) return
    const e = this.image_,
      i = document.createElement('canvas')
    ;((i.width = Math.ceil(e.width * t)), (i.height = Math.ceil(e.height * t)))
    const n = i.getContext('2d')
    ;(n.scale(t, t),
      n.drawImage(e, 0, 0),
      (n.globalCompositeOperation = 'multiply'),
      (n.fillStyle = Ta(this.color_)),
      n.fillRect(0, 0, i.width / t, i.height / t),
      (n.globalCompositeOperation = 'destination-in'),
      n.drawImage(e, 0, 0),
      (this.canvas_[t] = i))
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null))
  }
}
function ac(s, t, e, i, n, r) {
  let o = Kn.get(t, i, r)
  return (o || ((o = new oc(s, t, e, i, n, r)), Kn.set(t, i, r, o)), o)
}
function xo(s, t, e, i) {
  return e !== void 0 && i !== void 0 ? [e / s, i / t] : e !== void 0 ? e / s : i !== void 0 ? i / t : 1
}
class Qi extends ls {
  constructor(t) {
    t = t || {}
    const e = t.opacity !== void 0 ? t.opacity : 1,
      i = t.rotation !== void 0 ? t.rotation : 0,
      n = t.scale !== void 0 ? t.scale : 1,
      r = t.rotateWithView !== void 0 ? t.rotateWithView : !1
    ;(super({
      opacity: e,
      rotation: i,
      scale: n,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      rotateWithView: r,
      declutterMode: t.declutterMode,
    }),
      (this.anchor_ = t.anchor !== void 0 ? t.anchor : [0.5, 0.5]),
      (this.normalizedAnchor_ = null),
      (this.anchorOrigin_ = t.anchorOrigin !== void 0 ? t.anchorOrigin : 'top-left'),
      (this.anchorXUnits_ = t.anchorXUnits !== void 0 ? t.anchorXUnits : 'fraction'),
      (this.anchorYUnits_ = t.anchorYUnits !== void 0 ? t.anchorYUnits : 'fraction'),
      (this.crossOrigin_ = t.crossOrigin !== void 0 ? t.crossOrigin : null))
    const o = t.img !== void 0 ? t.img : null
    this.imgSize_ = t.imgSize
    let a = t.src
    ;(G(!(a !== void 0 && o), 4),
      G(!o || (o && this.imgSize_), 5),
      (a === void 0 || a.length === 0) && o && (a = o.src || D(o)),
      G(a !== void 0 && a.length > 0, 6),
      G(!((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0), 69))
    const l = t.src !== void 0 ? Q.IDLE : Q.LOADED
    if (
      ((this.color_ = t.color !== void 0 ? Yn(t.color) : null),
      (this.iconImage_ = ac(
        o,
        a,
        this.imgSize_ !== void 0 ? this.imgSize_ : null,
        this.crossOrigin_,
        l,
        this.color_,
      )),
      (this.offset_ = t.offset !== void 0 ? t.offset : [0, 0]),
      (this.offsetOrigin_ = t.offsetOrigin !== void 0 ? t.offsetOrigin : 'top-left'),
      (this.origin_ = null),
      (this.size_ = t.size !== void 0 ? t.size : null),
      t.width !== void 0 || t.height !== void 0)
    ) {
      let h, c
      if (t.size) [h, c] = t.size
      else {
        const u = this.getImage(1)
        if (u instanceof HTMLCanvasElement || (u.src && u.complete)) ((h = u.width), (c = u.height))
        else {
          this.initialOptions_ = t
          const d = () => {
            if ((this.unlistenImageChange(d), !this.initialOptions_)) return
            const f = this.iconImage_.getSize()
            this.setScale(xo(f[0], f[1], t.width, t.height))
          }
          this.listenImageChange(d)
          return
        }
      }
      h !== void 0 && this.setScale(xo(h, c, t.width, t.height))
    }
  }
  clone() {
    let t, e, i
    return (
      this.initialOptions_
        ? ((e = this.initialOptions_.width), (i = this.initialOptions_.height))
        : ((t = this.getScale()), (t = Array.isArray(t) ? t.slice() : t)),
      new Qi({
        anchor: this.anchor_.slice(),
        anchorOrigin: this.anchorOrigin_,
        anchorXUnits: this.anchorXUnits_,
        anchorYUnits: this.anchorYUnits_,
        color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0,
        crossOrigin: this.crossOrigin_,
        imgSize: this.imgSize_,
        offset: this.offset_.slice(),
        offsetOrigin: this.offsetOrigin_,
        opacity: this.getOpacity(),
        rotateWithView: this.getRotateWithView(),
        rotation: this.getRotation(),
        scale: t,
        width: e,
        height: i,
        size: this.size_ !== null ? this.size_.slice() : void 0,
        src: this.getSrc(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      })
    )
  }
  getAnchor() {
    let t = this.normalizedAnchor_
    if (!t) {
      t = this.anchor_
      const n = this.getSize()
      if (this.anchorXUnits_ == 'fraction' || this.anchorYUnits_ == 'fraction') {
        if (!n) return null
        ;((t = this.anchor_.slice()),
          this.anchorXUnits_ == 'fraction' && (t[0] *= n[0]),
          this.anchorYUnits_ == 'fraction' && (t[1] *= n[1]))
      }
      if (this.anchorOrigin_ != 'top-left') {
        if (!n) return null
        ;(t === this.anchor_ && (t = this.anchor_.slice()),
          (this.anchorOrigin_ == 'top-right' || this.anchorOrigin_ == 'bottom-right') &&
            (t[0] = -t[0] + n[0]),
          (this.anchorOrigin_ == 'bottom-left' || this.anchorOrigin_ == 'bottom-right') &&
            (t[1] = -t[1] + n[1]))
      }
      this.normalizedAnchor_ = t
    }
    const e = this.getDisplacement(),
      i = this.getScaleArray()
    return [t[0] - e[0] / i[0], t[1] + e[1] / i[1]]
  }
  setAnchor(t) {
    ;((this.anchor_ = t), (this.normalizedAnchor_ = null))
  }
  getColor() {
    return this.color_
  }
  getImage(t) {
    return this.iconImage_.getImage(t)
  }
  getPixelRatio(t) {
    return this.iconImage_.getPixelRatio(t)
  }
  getImageSize() {
    return this.iconImage_.getSize()
  }
  getImageState() {
    return this.iconImage_.getImageState()
  }
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage()
  }
  getOrigin() {
    if (this.origin_) return this.origin_
    let t = this.offset_
    if (this.offsetOrigin_ != 'top-left') {
      const e = this.getSize(),
        i = this.iconImage_.getSize()
      if (!e || !i) return null
      ;((t = t.slice()),
        (this.offsetOrigin_ == 'top-right' || this.offsetOrigin_ == 'bottom-right') &&
          (t[0] = i[0] - e[0] - t[0]),
        (this.offsetOrigin_ == 'bottom-left' || this.offsetOrigin_ == 'bottom-right') &&
          (t[1] = i[1] - e[1] - t[1]))
    }
    return ((this.origin_ = t), this.origin_)
  }
  getSrc() {
    return this.iconImage_.getSrc()
  }
  getSize() {
    return this.size_ ? this.size_ : this.iconImage_.getSize()
  }
  getWidth() {
    const t = this.getScaleArray()
    if (this.size_) return this.size_[0] * t[0]
    if (this.iconImage_.getImageState() == Q.LOADED) return this.iconImage_.getSize()[0] * t[0]
  }
  getHeight() {
    const t = this.getScaleArray()
    if (this.size_) return this.size_[1] * t[1]
    if (this.iconImage_.getImageState() == Q.LOADED) return this.iconImage_.getSize()[1] * t[1]
  }
  setScale(t) {
    ;(delete this.initialOptions_, super.setScale(t))
  }
  listenImageChange(t) {
    this.iconImage_.addEventListener(O.CHANGE, t)
  }
  load() {
    this.iconImage_.load()
  }
  unlistenImageChange(t) {
    this.iconImage_.removeEventListener(O.CHANGE, t)
  }
}
function Eo(s) {
  return new Rt({ fill: Vi(s, ''), stroke: Ki(s, ''), text: lc(s), image: hc(s) })
}
function Vi(s, t) {
  const e = s[t + 'fill-color']
  if (e) return e === 'none' ? null : new qt({ color: e })
}
function Ki(s, t) {
  const e = s[t + 'stroke-width'],
    i = s[t + 'stroke-color']
  if (!(!e && !i))
    return new Nt({
      width: e,
      color: i,
      lineCap: s[t + 'stroke-line-cap'],
      lineJoin: s[t + 'stroke-line-join'],
      lineDash: s[t + 'stroke-line-dash'],
      lineDashOffset: s[t + 'stroke-line-dash-offset'],
      miterLimit: s[t + 'stroke-miter-limit'],
    })
}
function lc(s) {
  const t = s['text-value']
  return t
    ? new vr({
        text: t,
        font: s['text-font'],
        maxAngle: s['text-max-angle'],
        offsetX: s['text-offset-x'],
        offsetY: s['text-offset-y'],
        overflow: s['text-overflow'],
        placement: s['text-placement'],
        repeat: s['text-repeat'],
        scale: s['text-scale'],
        rotateWithView: s['text-rotate-with-view'],
        rotation: s['text-rotation'],
        textAlign: s['text-align'],
        justify: s['text-justify'],
        textBaseline: s['text-baseline'],
        padding: s['text-padding'],
        fill: Vi(s, 'text-'),
        backgroundFill: Vi(s, 'text-background-'),
        stroke: Ki(s, 'text-'),
        backgroundStroke: Ki(s, 'text-background-'),
      })
    : void 0
}
function hc(s) {
  const t = s['icon-src'],
    e = s['icon-img']
  if (t || e)
    return new Qi({
      src: t,
      img: e,
      imgSize: s['icon-img-size'],
      anchor: s['icon-anchor'],
      anchorOrigin: s['icon-anchor-origin'],
      anchorXUnits: s['icon-anchor-x-units'],
      anchorYUnits: s['icon-anchor-y-units'],
      color: s['icon-color'],
      crossOrigin: s['icon-cross-origin'],
      offset: s['icon-offset'],
      displacement: s['icon-displacement'],
      opacity: s['icon-opacity'],
      scale: s['icon-scale'],
      width: s['icon-width'],
      height: s['icon-height'],
      rotation: s['icon-rotation'],
      rotateWithView: s['icon-rotate-with-view'],
      size: s['icon-size'],
      declutterMode: s['icon-declutter-mode'],
    })
  const i = s['shape-points']
  if (i) {
    const r = 'shape-'
    return new us({
      points: i,
      fill: Vi(s, r),
      stroke: Ki(s, r),
      radius: s['shape-radius'],
      radius1: s['shape-radius1'],
      radius2: s['shape-radius2'],
      angle: s['shape-angle'],
      displacement: s['shape-displacement'],
      rotation: s['shape-rotation'],
      rotateWithView: s['shape-rotate-with-view'],
      scale: s['shape-scale'],
      declutterMode: s['shape-declutter-mode'],
    })
  }
  const n = s['circle-radius']
  if (n) {
    const r = 'circle-'
    return new Ue({
      radius: n,
      fill: Vi(s, r),
      stroke: Ki(s, r),
      displacement: s['circle-displacement'],
      scale: s['circle-scale'],
      rotation: s['circle-rotation'],
      rotateWithView: s['circle-rotate-with-view'],
      declutterMode: s['circle-declutter-mode'],
    })
  }
}
const Co = { RENDER_ORDER: 'renderOrder' }
class cc extends ds {
  constructor(t) {
    t = t || {}
    const e = Object.assign({}, t)
    ;(delete e.style,
      delete e.renderBuffer,
      delete e.updateWhileAnimating,
      delete e.updateWhileInteracting,
      super(e),
      (this.declutter_ = t.declutter !== void 0 ? t.declutter : !1),
      (this.renderBuffer_ = t.renderBuffer !== void 0 ? t.renderBuffer : 100),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      this.setStyle(t.style),
      (this.updateWhileAnimating_ = t.updateWhileAnimating !== void 0 ? t.updateWhileAnimating : !1),
      (this.updateWhileInteracting_ = t.updateWhileInteracting !== void 0 ? t.updateWhileInteracting : !1))
  }
  getDeclutter() {
    return this.declutter_
  }
  getFeatures(t) {
    return super.getFeatures(t)
  }
  getRenderBuffer() {
    return this.renderBuffer_
  }
  getRenderOrder() {
    return this.get(Co.RENDER_ORDER)
  }
  getStyle() {
    return this.style_
  }
  getStyleFunction() {
    return this.styleFunction_
  }
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_
  }
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_
  }
  renderDeclutter(t) {
    ;(t.declutterTree || (t.declutterTree = new Ma(9)), this.getRenderer().renderDeclutter(t))
  }
  setRenderOrder(t) {
    this.set(Co.RENDER_ORDER, t)
  }
  setStyle(t) {
    let e
    if (t === void 0) e = Gh
    else if (t === null) e = null
    else if (typeof t == 'function') e = t
    else if (t instanceof Rt) e = t
    else if (Array.isArray(t)) {
      const i = t.length,
        n = new Array(i)
      for (let r = 0; r < i; ++r) {
        const o = t[r]
        o instanceof Rt ? (n[r] = o) : (n[r] = Eo(o))
      }
      e = n
    } else e = Eo(t)
    ;((this.style_ = e), (this.styleFunction_ = t === null ? void 0 : jh(this.style_)), this.changed())
  }
}
const b = {
    BEGIN_GEOMETRY: 0,
    BEGIN_PATH: 1,
    CIRCLE: 2,
    CLOSE_PATH: 3,
    CUSTOM: 4,
    DRAW_CHARS: 5,
    DRAW_IMAGE: 6,
    END_GEOMETRY: 7,
    FILL: 8,
    MOVE_TO_LINE_TO: 9,
    SET_FILL_STYLE: 10,
    SET_STROKE_STYLE: 11,
    STROKE: 12,
  },
  En = [b.FILL],
  Se = [b.STROKE],
  De = [b.BEGIN_PATH],
  wo = [b.CLOSE_PATH]
class Oa {
  drawCustom(t, e, i, n) {}
  drawGeometry(t) {}
  setStyle(t) {}
  drawCircle(t, e) {}
  drawFeature(t, e) {}
  drawGeometryCollection(t, e) {}
  drawLineString(t, e) {}
  drawMultiLineString(t, e) {}
  drawMultiPoint(t, e) {}
  drawMultiPolygon(t, e) {}
  drawPoint(t, e) {}
  drawPolygon(t, e) {}
  drawText(t, e) {}
  setFillStrokeStyle(t, e) {}
  setImageStyle(t, e) {}
  setTextStyle(t, e) {}
}
class tn extends Oa {
  constructor(t, e, i, n) {
    ;(super(),
      (this.tolerance = t),
      (this.maxExtent = e),
      (this.pixelRatio = n),
      (this.maxLineWidth = 0),
      (this.resolution = i),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_ = null),
      (this.bufferedMaxExtent_ = null),
      (this.instructions = []),
      (this.coordinates = []),
      (this.tmpCoordinate_ = []),
      (this.hitDetectionInstructions = []),
      (this.state = {}))
  }
  applyPixelRatio(t) {
    const e = this.pixelRatio
    return e == 1
      ? t
      : t.map(function (i) {
          return i * e
        })
  }
  appendFlatPointCoordinates(t, e) {
    const i = this.getBufferedMaxExtent(),
      n = this.tmpCoordinate_,
      r = this.coordinates
    let o = r.length
    for (let a = 0, l = t.length; a < l; a += e)
      ((n[0] = t[a]), (n[1] = t[a + 1]), Qn(i, n) && ((r[o++] = n[0]), (r[o++] = n[1])))
    return o
  }
  appendFlatLineCoordinates(t, e, i, n, r, o) {
    const a = this.coordinates
    let l = a.length
    const h = this.getBufferedMaxExtent()
    o && (e += n)
    let c = t[e],
      u = t[e + 1]
    const d = this.tmpCoordinate_
    let f = !0,
      g,
      _,
      m
    for (g = e + n; g < i; g += n)
      ((d[0] = t[g]),
        (d[1] = t[g + 1]),
        (m = Ns(h, d)),
        m !== _
          ? (f && ((a[l++] = c), (a[l++] = u), (f = !1)), (a[l++] = d[0]), (a[l++] = d[1]))
          : m === st.INTERSECTING
            ? ((a[l++] = d[0]), (a[l++] = d[1]), (f = !1))
            : (f = !0),
        (c = d[0]),
        (u = d[1]),
        (_ = m))
    return (((r && f) || g === e + n) && ((a[l++] = c), (a[l++] = u)), l)
  }
  drawCustomCoordinates_(t, e, i, n, r) {
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o],
        h = this.appendFlatLineCoordinates(t, e, l, n, !1, !1)
      ;(r.push(h), (e = l))
    }
    return e
  }
  drawCustom(t, e, i, n) {
    this.beginGeometry(t, e)
    const r = t.getType(),
      o = t.getStride(),
      a = this.coordinates.length
    let l, h, c, u, d
    switch (r) {
      case 'MultiPolygon':
        ;((l = t.getOrientedFlatCoordinates()), (u = []))
        const f = t.getEndss()
        d = 0
        for (let g = 0, _ = f.length; g < _; ++g) {
          const m = []
          ;((d = this.drawCustomCoordinates_(l, d, f[g], o, m)), u.push(m))
        }
        ;(this.instructions.push([b.CUSTOM, a, u, t, i, Vs]),
          this.hitDetectionInstructions.push([b.CUSTOM, a, u, t, n || i, Vs]))
        break
      case 'Polygon':
      case 'MultiLineString':
        ;((c = []),
          (l = r == 'Polygon' ? t.getOrientedFlatCoordinates() : t.getFlatCoordinates()),
          (d = this.drawCustomCoordinates_(l, 0, t.getEnds(), o, c)),
          this.instructions.push([b.CUSTOM, a, c, t, i, Ni]),
          this.hitDetectionInstructions.push([b.CUSTOM, a, c, t, n || i, Ni]))
        break
      case 'LineString':
      case 'Circle':
        ;((l = t.getFlatCoordinates()),
          (h = this.appendFlatLineCoordinates(l, 0, l.length, o, !1, !1)),
          this.instructions.push([b.CUSTOM, a, h, t, i, Te]),
          this.hitDetectionInstructions.push([b.CUSTOM, a, h, t, n || i, Te]))
        break
      case 'MultiPoint':
        ;((l = t.getFlatCoordinates()),
          (h = this.appendFlatPointCoordinates(l, o)),
          h > a &&
            (this.instructions.push([b.CUSTOM, a, h, t, i, Te]),
            this.hitDetectionInstructions.push([b.CUSTOM, a, h, t, n || i, Te])))
        break
      case 'Point':
        ;((l = t.getFlatCoordinates()),
          this.coordinates.push(l[0], l[1]),
          (h = this.coordinates.length),
          this.instructions.push([b.CUSTOM, a, h, t, i]),
          this.hitDetectionInstructions.push([b.CUSTOM, a, h, t, n || i]))
        break
    }
    this.endGeometry(e)
  }
  beginGeometry(t, e) {
    ;((this.beginGeometryInstruction1_ = [b.BEGIN_GEOMETRY, e, 0, t]),
      this.instructions.push(this.beginGeometryInstruction1_),
      (this.beginGeometryInstruction2_ = [b.BEGIN_GEOMETRY, e, 0, t]),
      this.hitDetectionInstructions.push(this.beginGeometryInstruction2_))
  }
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates,
    }
  }
  reverseHitDetectionInstructions() {
    const t = this.hitDetectionInstructions
    t.reverse()
    let e
    const i = t.length
    let n,
      r,
      o = -1
    for (e = 0; e < i; ++e)
      ((n = t[e]),
        (r = n[0]),
        r == b.END_GEOMETRY
          ? (o = e)
          : r == b.BEGIN_GEOMETRY && ((n[2] = e), ml(this.hitDetectionInstructions, o, e), (o = -1)))
  }
  setFillStrokeStyle(t, e) {
    const i = this.state
    if (t) {
      const n = t.getColor()
      i.fillStyle = Bt(n || Et)
    } else i.fillStyle = void 0
    if (e) {
      const n = e.getColor()
      i.strokeStyle = Bt(n || Yi)
      const r = e.getLineCap()
      i.lineCap = r !== void 0 ? r : zn
      const o = e.getLineDash()
      i.lineDash = o ? o.slice() : oe
      const a = e.getLineDashOffset()
      i.lineDashOffset = a || ae
      const l = e.getLineJoin()
      i.lineJoin = l !== void 0 ? l : Ci
      const h = e.getWidth()
      i.lineWidth = h !== void 0 ? h : Bi
      const c = e.getMiterLimit()
      ;((i.miterLimit = c !== void 0 ? c : Wi),
        i.lineWidth > this.maxLineWidth &&
          ((this.maxLineWidth = i.lineWidth), (this.bufferedMaxExtent_ = null)))
    } else
      ((i.strokeStyle = void 0),
        (i.lineCap = void 0),
        (i.lineDash = null),
        (i.lineDashOffset = void 0),
        (i.lineJoin = void 0),
        (i.lineWidth = void 0),
        (i.miterLimit = void 0))
  }
  createFill(t) {
    const e = t.fillStyle,
      i = [b.SET_FILL_STYLE, e]
    return (typeof e != 'string' && i.push(!0), i)
  }
  applyStroke(t) {
    this.instructions.push(this.createStroke(t))
  }
  createStroke(t) {
    return [
      b.SET_STROKE_STYLE,
      t.strokeStyle,
      t.lineWidth * this.pixelRatio,
      t.lineCap,
      t.lineJoin,
      t.miterLimit,
      this.applyPixelRatio(t.lineDash),
      t.lineDashOffset * this.pixelRatio,
    ]
  }
  updateFillStyle(t, e) {
    const i = t.fillStyle
    ;(typeof i != 'string' || t.currentFillStyle != i) &&
      (i !== void 0 && this.instructions.push(e.call(this, t)), (t.currentFillStyle = i))
  }
  updateStrokeStyle(t, e) {
    const i = t.strokeStyle,
      n = t.lineCap,
      r = t.lineDash,
      o = t.lineDashOffset,
      a = t.lineJoin,
      l = t.lineWidth,
      h = t.miterLimit
    ;(t.currentStrokeStyle != i ||
      t.currentLineCap != n ||
      (r != t.currentLineDash && !ce(t.currentLineDash, r)) ||
      t.currentLineDashOffset != o ||
      t.currentLineJoin != a ||
      t.currentLineWidth != l ||
      t.currentMiterLimit != h) &&
      (i !== void 0 && e.call(this, t),
      (t.currentStrokeStyle = i),
      (t.currentLineCap = n),
      (t.currentLineDash = r),
      (t.currentLineDashOffset = o),
      (t.currentLineJoin = a),
      (t.currentLineWidth = l),
      (t.currentMiterLimit = h))
  }
  endGeometry(t) {
    ;((this.beginGeometryInstruction1_[2] = this.instructions.length),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length),
      (this.beginGeometryInstruction2_ = null))
    const e = [b.END_GEOMETRY, t]
    ;(this.instructions.push(e), this.hitDetectionInstructions.push(e))
  }
  getBufferedMaxExtent() {
    if (!this.bufferedMaxExtent_ && ((this.bufferedMaxExtent_ = ta(this.maxExtent)), this.maxLineWidth > 0)) {
      const t = (this.resolution * (this.maxLineWidth + 1)) / 2
      Hi(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_)
    }
    return this.bufferedMaxExtent_
  }
}
class uc extends tn {
  constructor(t, e, i, n) {
    ;(super(t, e, i, n),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.height_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.scale_ = void 0),
      (this.width_ = void 0),
      (this.declutterMode_ = void 0),
      (this.declutterImageWithText_ = void 0))
  }
  drawPoint(t, e) {
    if (!this.image_) return
    this.beginGeometry(t, e)
    const i = t.getFlatCoordinates(),
      n = t.getStride(),
      r = this.coordinates.length,
      o = this.appendFlatPointCoordinates(i, n)
    ;(this.instructions.push([
      b.DRAW_IMAGE,
      r,
      o,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        b.DRAW_IMAGE,
        r,
        o,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(e))
  }
  drawMultiPoint(t, e) {
    if (!this.image_) return
    this.beginGeometry(t, e)
    const i = t.getFlatCoordinates(),
      n = t.getStride(),
      r = this.coordinates.length,
      o = this.appendFlatPointCoordinates(i, n)
    ;(this.instructions.push([
      b.DRAW_IMAGE,
      r,
      o,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        b.DRAW_IMAGE,
        r,
        o,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(e))
  }
  finish() {
    return (
      this.reverseHitDetectionInstructions(),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.height_ = void 0),
      (this.scale_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.width_ = void 0),
      super.finish()
    )
  }
  setImageStyle(t, e) {
    const i = t.getAnchor(),
      n = t.getSize(),
      r = t.getOrigin()
    ;((this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio)),
      (this.anchorX_ = i[0]),
      (this.anchorY_ = i[1]),
      (this.hitDetectionImage_ = t.getHitDetectionImage()),
      (this.image_ = t.getImage(this.pixelRatio)),
      (this.height_ = n[1]),
      (this.opacity_ = t.getOpacity()),
      (this.originX_ = r[0]),
      (this.originY_ = r[1]),
      (this.rotateWithView_ = t.getRotateWithView()),
      (this.rotation_ = t.getRotation()),
      (this.scale_ = t.getScaleArray()),
      (this.width_ = n[0]),
      (this.declutterMode_ = t.getDeclutterMode()),
      (this.declutterImageWithText_ = e))
  }
}
class dc extends tn {
  constructor(t, e, i, n) {
    super(t, e, i, n)
  }
  drawFlatCoordinates_(t, e, i, n) {
    const r = this.coordinates.length,
      o = this.appendFlatLineCoordinates(t, e, i, n, !1, !1),
      a = [b.MOVE_TO_LINE_TO, r, o]
    return (this.instructions.push(a), this.hitDetectionInstructions.push(a), i)
  }
  drawLineString(t, e) {
    const i = this.state,
      n = i.strokeStyle,
      r = i.lineWidth
    if (n === void 0 || r === void 0) return
    ;(this.updateStrokeStyle(i, this.applyStroke),
      this.beginGeometry(t, e),
      this.hitDetectionInstructions.push(
        [b.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, oe, ae],
        De,
      ))
    const o = t.getFlatCoordinates(),
      a = t.getStride()
    ;(this.drawFlatCoordinates_(o, 0, o.length, a),
      this.hitDetectionInstructions.push(Se),
      this.endGeometry(e))
  }
  drawMultiLineString(t, e) {
    const i = this.state,
      n = i.strokeStyle,
      r = i.lineWidth
    if (n === void 0 || r === void 0) return
    ;(this.updateStrokeStyle(i, this.applyStroke),
      this.beginGeometry(t, e),
      this.hitDetectionInstructions.push(
        [b.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, oe, ae],
        De,
      ))
    const o = t.getEnds(),
      a = t.getFlatCoordinates(),
      l = t.getStride()
    let h = 0
    for (let c = 0, u = o.length; c < u; ++c) h = this.drawFlatCoordinates_(a, h, o[c], l)
    ;(this.hitDetectionInstructions.push(Se), this.endGeometry(e))
  }
  finish() {
    const t = this.state
    return (
      t.lastStroke != null && t.lastStroke != this.coordinates.length && this.instructions.push(Se),
      this.reverseHitDetectionInstructions(),
      (this.state = null),
      super.finish()
    )
  }
  applyStroke(t) {
    ;(t.lastStroke != null &&
      t.lastStroke != this.coordinates.length &&
      (this.instructions.push(Se), (t.lastStroke = this.coordinates.length)),
      (t.lastStroke = 0),
      super.applyStroke(t),
      this.instructions.push(De))
  }
}
class To extends tn {
  constructor(t, e, i, n) {
    super(t, e, i, n)
  }
  drawFlatCoordinatess_(t, e, i, n) {
    const r = this.state,
      o = r.fillStyle !== void 0,
      a = r.strokeStyle !== void 0,
      l = i.length
    ;(this.instructions.push(De), this.hitDetectionInstructions.push(De))
    for (let h = 0; h < l; ++h) {
      const c = i[h],
        u = this.coordinates.length,
        d = this.appendFlatLineCoordinates(t, e, c, n, !0, !a),
        f = [b.MOVE_TO_LINE_TO, u, d]
      ;(this.instructions.push(f),
        this.hitDetectionInstructions.push(f),
        a && (this.instructions.push(wo), this.hitDetectionInstructions.push(wo)),
        (e = c))
    }
    return (
      o && (this.instructions.push(En), this.hitDetectionInstructions.push(En)),
      a && (this.instructions.push(Se), this.hitDetectionInstructions.push(Se)),
      e
    )
  }
  drawCircle(t, e) {
    const i = this.state,
      n = i.fillStyle,
      r = i.strokeStyle
    if (n === void 0 && r === void 0) return
    ;(this.setFillStrokeStyles_(),
      this.beginGeometry(t, e),
      i.fillStyle !== void 0 && this.hitDetectionInstructions.push([b.SET_FILL_STYLE, Et]),
      i.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          b.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          oe,
          ae,
        ]))
    const o = t.getFlatCoordinates(),
      a = t.getStride(),
      l = this.coordinates.length
    this.appendFlatLineCoordinates(o, 0, o.length, a, !1, !1)
    const h = [b.CIRCLE, l]
    ;(this.instructions.push(De, h),
      this.hitDetectionInstructions.push(De, h),
      i.fillStyle !== void 0 && (this.instructions.push(En), this.hitDetectionInstructions.push(En)),
      i.strokeStyle !== void 0 && (this.instructions.push(Se), this.hitDetectionInstructions.push(Se)),
      this.endGeometry(e))
  }
  drawPolygon(t, e) {
    const i = this.state,
      n = i.fillStyle,
      r = i.strokeStyle
    if (n === void 0 && r === void 0) return
    ;(this.setFillStrokeStyles_(),
      this.beginGeometry(t, e),
      i.fillStyle !== void 0 && this.hitDetectionInstructions.push([b.SET_FILL_STYLE, Et]),
      i.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          b.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          oe,
          ae,
        ]))
    const o = t.getEnds(),
      a = t.getOrientedFlatCoordinates(),
      l = t.getStride()
    ;(this.drawFlatCoordinatess_(a, 0, o, l), this.endGeometry(e))
  }
  drawMultiPolygon(t, e) {
    const i = this.state,
      n = i.fillStyle,
      r = i.strokeStyle
    if (n === void 0 && r === void 0) return
    ;(this.setFillStrokeStyles_(),
      this.beginGeometry(t, e),
      i.fillStyle !== void 0 && this.hitDetectionInstructions.push([b.SET_FILL_STYLE, Et]),
      i.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          b.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          oe,
          ae,
        ]))
    const o = t.getEndss(),
      a = t.getOrientedFlatCoordinates(),
      l = t.getStride()
    let h = 0
    for (let c = 0, u = o.length; c < u; ++c) h = this.drawFlatCoordinatess_(a, h, o[c], l)
    this.endGeometry(e)
  }
  finish() {
    ;(this.reverseHitDetectionInstructions(), (this.state = null))
    const t = this.tolerance
    if (t !== 0) {
      const e = this.coordinates
      for (let i = 0, n = e.length; i < n; ++i) e[i] = Me(e[i], t)
    }
    return super.finish()
  }
  setFillStrokeStyles_() {
    const t = this.state
    ;(t.fillStyle !== void 0 && this.updateFillStyle(t, this.createFill),
      t.strokeStyle !== void 0 && this.updateStrokeStyle(t, this.applyStroke))
  }
}
function fc(s, t, e, i, n) {
  const r = []
  let o = e,
    a = 0,
    l = t.slice(e, 2)
  for (; a < s && o + n < i; ) {
    const [h, c] = l.slice(-2),
      u = t[o + n],
      d = t[o + n + 1],
      f = Math.sqrt((u - h) * (u - h) + (d - c) * (d - c))
    if (((a += f), a >= s)) {
      const g = (s - a + f) / f,
        _ = vt(h, u, g),
        m = vt(c, d, g)
      ;(l.push(_, m), r.push(l), (l = [_, m]), a == s && (o += n), (a = 0))
    } else if (a < s) (l.push(t[o + n], t[o + n + 1]), (o += n))
    else {
      const g = f - a,
        _ = vt(h, u, g / f),
        m = vt(c, d, g / f)
      ;(l.push(_, m), r.push(l), (l = [_, m]), (a = 0), (o += n))
    }
  }
  return (a > 0 && r.push(l), r)
}
function gc(s, t, e, i, n) {
  let r = e,
    o = e,
    a = 0,
    l = 0,
    h = e,
    c,
    u,
    d,
    f,
    g,
    _,
    m,
    p,
    y,
    x
  for (u = e; u < i; u += n) {
    const E = t[u],
      C = t[u + 1]
    ;(g !== void 0 &&
      ((y = E - g),
      (x = C - _),
      (f = Math.sqrt(y * y + x * x)),
      m !== void 0 &&
        ((l += d),
        (c = Math.acos((m * y + p * x) / (d * f))),
        c > s && (l > a && ((a = l), (r = h), (o = u)), (l = 0), (h = u - n))),
      (d = f),
      (m = y),
      (p = x)),
      (g = E),
      (_ = C))
  }
  return ((l += f), l > a ? [h, u] : [r, o])
}
const Un = {
  left: 0,
  center: 0.5,
  right: 1,
  top: 0,
  middle: 0.5,
  hanging: 0.2,
  alphabetic: 0.8,
  ideographic: 0.8,
  bottom: 1,
}
class _c extends tn {
  constructor(t, e, i, n) {
    ;(super(t, e, i, n),
      (this.labels_ = null),
      (this.text_ = ''),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = void 0),
      (this.textRotation_ = 0),
      (this.textFillState_ = null),
      (this.fillStates = {}),
      (this.fillStates[Et] = { fillStyle: Et }),
      (this.textStrokeState_ = null),
      (this.strokeStates = {}),
      (this.textState_ = {}),
      (this.textStates = {}),
      (this.textKey_ = ''),
      (this.fillKey_ = ''),
      (this.strokeKey_ = ''),
      (this.declutterImageWithText_ = void 0))
  }
  finish() {
    const t = super.finish()
    return (
      (t.textStates = this.textStates),
      (t.fillStates = this.fillStates),
      (t.strokeStates = this.strokeStates),
      t
    )
  }
  drawText(t, e) {
    const i = this.textFillState_,
      n = this.textStrokeState_,
      r = this.textState_
    if (this.text_ === '' || !r || (!i && !n)) return
    const o = this.coordinates
    let a = o.length
    const l = t.getType()
    let h = null,
      c = t.getStride()
    if (
      r.placement === 'line' &&
      (l == 'LineString' || l == 'MultiLineString' || l == 'Polygon' || l == 'MultiPolygon')
    ) {
      if (!mt(this.getBufferedMaxExtent(), t.getExtent())) return
      let u
      if (((h = t.getFlatCoordinates()), l == 'LineString')) u = [h.length]
      else if (l == 'MultiLineString') u = t.getEnds()
      else if (l == 'Polygon') u = t.getEnds().slice(0, 1)
      else if (l == 'MultiPolygon') {
        const _ = t.getEndss()
        u = []
        for (let m = 0, p = _.length; m < p; ++m) u.push(_[m][0])
      }
      this.beginGeometry(t, e)
      const d = r.repeat,
        f = d ? void 0 : r.textAlign
      let g = 0
      for (let _ = 0, m = u.length; _ < m; ++_) {
        let p
        d ? (p = fc(d * this.resolution, h, g, u[_], c)) : (p = [h.slice(g, u[_])])
        for (let y = 0, x = p.length; y < x; ++y) {
          const E = p[y]
          let C = 0,
            T = E.length
          if (f == null) {
            const v = gc(r.maxAngle, E, 0, E.length, 2)
            ;((C = v[0]), (T = v[1]))
          }
          for (let v = C; v < T; v += c) o.push(E[v], E[v + 1])
          const R = o.length
          ;((g = u[_]), this.drawChars_(a, R), (a = R))
        }
      }
      this.endGeometry(e)
    } else {
      let u = r.overflow ? null : []
      switch (l) {
        case 'Point':
        case 'MultiPoint':
          h = t.getFlatCoordinates()
          break
        case 'LineString':
          h = t.getFlatMidpoint()
          break
        case 'Circle':
          h = t.getCenter()
          break
        case 'MultiLineString':
          ;((h = t.getFlatMidpoints()), (c = 2))
          break
        case 'Polygon':
          ;((h = t.getFlatInteriorPoint()), r.overflow || u.push(h[2] / this.resolution), (c = 3))
          break
        case 'MultiPolygon':
          const p = t.getFlatInteriorPoints()
          h = []
          for (let y = 0, x = p.length; y < x; y += 3)
            (r.overflow || u.push(p[y + 2] / this.resolution), h.push(p[y], p[y + 1]))
          if (h.length === 0) return
          c = 2
          break
      }
      const d = this.appendFlatPointCoordinates(h, c)
      if (d === a) return
      if (u && (d - a) / 2 !== h.length / c) {
        let p = a / 2
        u = u.filter((y, x) => {
          const E = o[(p + x) * 2] === h[x * c] && o[(p + x) * 2 + 1] === h[x * c + 1]
          return (E || --p, E)
        })
      }
      ;(this.saveTextStates_(),
        (r.backgroundFill || r.backgroundStroke) &&
          (this.setFillStrokeStyle(r.backgroundFill, r.backgroundStroke),
          r.backgroundFill && this.updateFillStyle(this.state, this.createFill),
          r.backgroundStroke &&
            (this.updateStrokeStyle(this.state, this.applyStroke),
            this.hitDetectionInstructions.push(this.createStroke(this.state)))),
        this.beginGeometry(t, e))
      let f = r.padding
      if (f != ke && (r.scale[0] < 0 || r.scale[1] < 0)) {
        let p = r.padding[0],
          y = r.padding[1],
          x = r.padding[2],
          E = r.padding[3]
        ;(r.scale[0] < 0 && ((y = -y), (E = -E)), r.scale[1] < 0 && ((p = -p), (x = -x)), (f = [p, y, x, E]))
      }
      const g = this.pixelRatio
      this.instructions.push([
        b.DRAW_IMAGE,
        a,
        d,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [1, 1],
        NaN,
        void 0,
        this.declutterImageWithText_,
        f == ke
          ? ke
          : f.map(function (p) {
              return p * g
            }),
        !!r.backgroundFill,
        !!r.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        u,
      ])
      const _ = 1 / g,
        m = this.state.fillStyle
      ;(r.backgroundFill &&
        ((this.state.fillStyle = Et), this.hitDetectionInstructions.push(this.createFill(this.state))),
        this.hitDetectionInstructions.push([
          b.DRAW_IMAGE,
          a,
          d,
          null,
          NaN,
          NaN,
          NaN,
          1,
          0,
          0,
          this.textRotateWithView_,
          this.textRotation_,
          [_, _],
          NaN,
          void 0,
          this.declutterImageWithText_,
          f,
          !!r.backgroundFill,
          !!r.backgroundStroke,
          this.text_,
          this.textKey_,
          this.strokeKey_,
          this.fillKey_ ? Et : this.fillKey_,
          this.textOffsetX_,
          this.textOffsetY_,
          u,
        ]),
        r.backgroundFill &&
          ((this.state.fillStyle = m), this.hitDetectionInstructions.push(this.createFill(this.state))),
        this.endGeometry(e))
    }
  }
  saveTextStates_() {
    const t = this.textStrokeState_,
      e = this.textState_,
      i = this.textFillState_,
      n = this.strokeKey_
    t &&
      (n in this.strokeStates ||
        (this.strokeStates[n] = {
          strokeStyle: t.strokeStyle,
          lineCap: t.lineCap,
          lineDashOffset: t.lineDashOffset,
          lineWidth: t.lineWidth,
          lineJoin: t.lineJoin,
          miterLimit: t.miterLimit,
          lineDash: t.lineDash,
        }))
    const r = this.textKey_
    r in this.textStates ||
      (this.textStates[r] = {
        font: e.font,
        textAlign: e.textAlign || zi,
        justify: e.justify,
        textBaseline: e.textBaseline || Bn,
        scale: e.scale,
      })
    const o = this.fillKey_
    i && (o in this.fillStates || (this.fillStates[o] = { fillStyle: i.fillStyle }))
  }
  drawChars_(t, e) {
    const i = this.textStrokeState_,
      n = this.textState_,
      r = this.strokeKey_,
      o = this.textKey_,
      a = this.fillKey_
    this.saveTextStates_()
    const l = this.pixelRatio,
      h = Un[n.textBaseline],
      c = this.textOffsetY_ * l,
      u = this.text_,
      d = i ? (i.lineWidth * Math.abs(n.scale[0])) / 2 : 0
    ;(this.instructions.push([b.DRAW_CHARS, t, e, h, n.overflow, a, n.maxAngle, l, c, r, d * l, u, o, 1]),
      this.hitDetectionInstructions.push([
        b.DRAW_CHARS,
        t,
        e,
        h,
        n.overflow,
        a && Et,
        n.maxAngle,
        1,
        c,
        r,
        d,
        u,
        o,
        1 / l,
      ]))
  }
  setTextStyle(t, e) {
    let i, n, r
    if (!t) this.text_ = ''
    else {
      const o = t.getFill()
      o
        ? ((n = this.textFillState_),
          n || ((n = {}), (this.textFillState_ = n)),
          (n.fillStyle = Bt(o.getColor() || Et)))
        : ((n = null), (this.textFillState_ = n))
      const a = t.getStroke()
      if (!a) ((r = null), (this.textStrokeState_ = r))
      else {
        ;((r = this.textStrokeState_), r || ((r = {}), (this.textStrokeState_ = r)))
        const g = a.getLineDash(),
          _ = a.getLineDashOffset(),
          m = a.getWidth(),
          p = a.getMiterLimit()
        ;((r.lineCap = a.getLineCap() || zn),
          (r.lineDash = g ? g.slice() : oe),
          (r.lineDashOffset = _ === void 0 ? ae : _),
          (r.lineJoin = a.getLineJoin() || Ci),
          (r.lineWidth = m === void 0 ? Bi : m),
          (r.miterLimit = p === void 0 ? Wi : p),
          (r.strokeStyle = Bt(a.getColor() || Yi)))
      }
      i = this.textState_
      const l = t.getFont() || Ra
      Mh(l)
      const h = t.getScaleArray()
      ;((i.overflow = t.getOverflow()),
        (i.font = l),
        (i.maxAngle = t.getMaxAngle()),
        (i.placement = t.getPlacement()),
        (i.textAlign = t.getTextAlign()),
        (i.repeat = t.getRepeat()),
        (i.justify = t.getJustify()),
        (i.textBaseline = t.getTextBaseline() || Bn),
        (i.backgroundFill = t.getBackgroundFill()),
        (i.backgroundStroke = t.getBackgroundStroke()),
        (i.padding = t.getPadding() || ke),
        (i.scale = h === void 0 ? [1, 1] : h))
      const c = t.getOffsetX(),
        u = t.getOffsetY(),
        d = t.getRotateWithView(),
        f = t.getRotation()
      ;((this.text_ = t.getText() || ''),
        (this.textOffsetX_ = c === void 0 ? 0 : c),
        (this.textOffsetY_ = u === void 0 ? 0 : u),
        (this.textRotateWithView_ = d === void 0 ? !1 : d),
        (this.textRotation_ = f === void 0 ? 0 : f),
        (this.strokeKey_ = r
          ? (typeof r.strokeStyle == 'string' ? r.strokeStyle : D(r.strokeStyle)) +
            r.lineCap +
            r.lineDashOffset +
            '|' +
            r.lineWidth +
            r.lineJoin +
            r.miterLimit +
            '[' +
            r.lineDash.join() +
            ']'
          : ''),
        (this.textKey_ =
          i.font +
          i.scale +
          (i.textAlign || '?') +
          (i.repeat || '?') +
          (i.justify || '?') +
          (i.textBaseline || '?')),
        (this.fillKey_ = n ? (typeof n.fillStyle == 'string' ? n.fillStyle : '|' + D(n.fillStyle)) : ''))
    }
    this.declutterImageWithText_ = e
  }
}
const mc = { Circle: To, Default: tn, Image: uc, LineString: dc, Polygon: To, Text: _c }
class So {
  constructor(t, e, i, n) {
    ;((this.tolerance_ = t),
      (this.maxExtent_ = e),
      (this.pixelRatio_ = n),
      (this.resolution_ = i),
      (this.buildersByZIndex_ = {}))
  }
  finish() {
    const t = {}
    for (const e in this.buildersByZIndex_) {
      t[e] = t[e] || {}
      const i = this.buildersByZIndex_[e]
      for (const n in i) {
        const r = i[n].finish()
        t[e][n] = r
      }
    }
    return t
  }
  getBuilder(t, e) {
    const i = t !== void 0 ? t.toString() : '0'
    let n = this.buildersByZIndex_[i]
    n === void 0 && ((n = {}), (this.buildersByZIndex_[i] = n))
    let r = n[e]
    if (r === void 0) {
      const o = mc[e]
      ;((r = new o(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_)), (n[e] = r))
    }
    return r
  }
}
class pc extends qi {
  constructor(t) {
    ;(super(),
      (this.ready = !0),
      (this.boundHandleImageChange_ = this.handleImageChange_.bind(this)),
      (this.layer_ = t),
      (this.declutterExecutorGroup = null))
  }
  getFeatures(t) {
    return F()
  }
  getData(t) {
    return null
  }
  prepareFrame(t) {
    return F()
  }
  renderFrame(t, e) {
    return F()
  }
  loadedTileCallback(t, e, i) {
    ;(t[e] || (t[e] = {}), (t[e][i.tileCoord.toString()] = i))
  }
  createLoadedTileFinder(t, e, i) {
    return (n, r) => {
      const o = this.loadedTileCallback.bind(this, i, n)
      return t.forEachLoadedTile(e, n, r, o)
    }
  }
  forEachFeatureAtCoordinate(t, e, i, n, r) {}
  getLayer() {
    return this.layer_
  }
  handleFontsChanged() {}
  handleImageChange_(t) {
    const e = t.target
    ;(e.getState() === Q.LOADED || e.getState() === Q.ERROR) && this.renderIfReadyAndVisible()
  }
  loadImage(t) {
    let e = t.getState()
    return (
      e != Q.LOADED && e != Q.ERROR && t.addEventListener(O.CHANGE, this.boundHandleImageChange_),
      e == Q.IDLE && (t.load(), (e = t.getState())),
      e == Q.LOADED
    )
  }
  renderIfReadyAndVisible() {
    const t = this.getLayer()
    t && t.getVisible() && t.getSourceState() === 'ready' && t.changed()
  }
  disposeInternal() {
    ;(delete this.layer_, super.disposeInternal())
  }
}
class ka extends at {
  constructor(t, e, i, n) {
    ;(super(t), (this.inversePixelTransform = e), (this.frameState = i), (this.context = n))
  }
}
const vo = []
let li = null
function yc() {
  li = pt(1, 1, void 0, { willReadFrequently: !0 })
}
class Da extends pc {
  constructor(t) {
    ;(super(t),
      (this.container = null),
      this.renderedResolution,
      (this.tempTransform = Kt()),
      (this.pixelTransform = Kt()),
      (this.inversePixelTransform = Kt()),
      (this.context = null),
      (this.containerReused = !1),
      (this.pixelContext_ = null),
      (this.frameState = null))
  }
  getImageData(t, e, i) {
    ;(li || yc(), li.clearRect(0, 0, 1, 1))
    let n
    try {
      ;(li.drawImage(t, e, i, 1, 1, 0, 0, 1, 1), (n = li.getImageData(0, 0, 1, 1).data))
    } catch {
      return ((li = null), null)
    }
    return n
  }
  getBackground(t) {
    let i = this.getLayer().getBackground()
    return (typeof i == 'function' && (i = i(t.viewState.resolution)), i || void 0)
  }
  useContainer(t, e, i) {
    const n = this.getLayer().getClassName()
    let r, o
    if (
      t &&
      t.className === n &&
      (!i || (t && t.style.backgroundColor && ce(Yn(t.style.backgroundColor), Yn(i))))
    ) {
      const a = t.firstElementChild
      a instanceof HTMLCanvasElement && (o = a.getContext('2d'))
    }
    if (
      (o && o.canvas.style.transform === e
        ? ((this.container = t), (this.context = o), (this.containerReused = !0))
        : this.containerReused
          ? ((this.container = null), (this.context = null), (this.containerReused = !1))
          : this.container && (this.container.style.backgroundColor = null),
      !this.container)
    ) {
      ;((r = document.createElement('div')), (r.className = n))
      let a = r.style
      ;((a.position = 'absolute'), (a.width = '100%'), (a.height = '100%'), (o = pt()))
      const l = o.canvas
      ;(r.appendChild(l),
        (a = l.style),
        (a.position = 'absolute'),
        (a.left = '0'),
        (a.transformOrigin = 'top left'),
        (this.container = r),
        (this.context = o))
    }
    !this.containerReused &&
      i &&
      !this.container.style.backgroundColor &&
      (this.container.style.backgroundColor = i)
  }
  clipUnrotated(t, e, i) {
    const n = Ke(i),
      r = is(i),
      o = es(i),
      a = ts(i)
    ;(rt(e.coordinateToPixelTransform, n),
      rt(e.coordinateToPixelTransform, r),
      rt(e.coordinateToPixelTransform, o),
      rt(e.coordinateToPixelTransform, a))
    const l = this.inversePixelTransform
    ;(rt(l, n),
      rt(l, r),
      rt(l, o),
      rt(l, a),
      t.save(),
      t.beginPath(),
      t.moveTo(Math.round(n[0]), Math.round(n[1])),
      t.lineTo(Math.round(r[0]), Math.round(r[1])),
      t.lineTo(Math.round(o[0]), Math.round(o[1])),
      t.lineTo(Math.round(a[0]), Math.round(a[1])),
      t.clip())
  }
  dispatchRenderEvent_(t, e, i) {
    const n = this.getLayer()
    if (n.hasListener(t)) {
      const r = new ka(t, this.inversePixelTransform, i, e)
      n.dispatchEvent(r)
    }
  }
  preRender(t, e) {
    ;((this.frameState = e), this.dispatchRenderEvent_(Ut.PRERENDER, t, e))
  }
  postRender(t, e) {
    this.dispatchRenderEvent_(Ut.POSTRENDER, t, e)
  }
  getRenderTransform(t, e, i, n, r, o, a) {
    const l = r / 2,
      h = o / 2,
      c = n / e,
      u = -c,
      d = -t[0] + a,
      f = -t[1]
    return Re(this.tempTransform, l, h, c, u, -i, d, f)
  }
  disposeInternal() {
    ;(delete this.frameState, super.disposeInternal())
  }
}
function xc(s, t, e, i, n, r, o, a, l, h, c, u) {
  let d = s[t],
    f = s[t + 1],
    g = 0,
    _ = 0,
    m = 0,
    p = 0
  function y() {
    ;((g = d),
      (_ = f),
      (t += i),
      (d = s[t]),
      (f = s[t + 1]),
      (p += m),
      (m = Math.sqrt((d - g) * (d - g) + (f - _) * (f - _))))
  }
  do y()
  while (t < e - i && p + m < r)
  let x = m === 0 ? 0 : (r - p) / m
  const E = vt(g, d, x),
    C = vt(_, f, x),
    T = t - i,
    R = p,
    v = r + a * l(h, n, c)
  for (; t < e - i && p + m < v; ) y()
  x = m === 0 ? 0 : (v - p) / m
  const L = vt(g, d, x),
    A = vt(_, f, x)
  let z
  if (u) {
    const M = [E, C, L, A]
    ;(mr(M, 0, 4, 2, u, M, M), (z = M[0] > M[2]))
  } else z = E > L
  const W = Math.PI,
    N = [],
    et = T + i === t
  ;((t = T), (m = 0), (p = R), (d = s[t]), (f = s[t + 1]))
  let I
  if (et) {
    ;(y(), (I = Math.atan2(f - _, d - g)), z && (I += I > 0 ? -W : W))
    const M = (L + E) / 2,
      S = (A + C) / 2
    return ((N[0] = [M, S, (v - r) / 2, I, n]), N)
  }
  n = n.replace(/\n/g, ' ')
  for (let M = 0, S = n.length; M < S; ) {
    y()
    let k = Math.atan2(f - _, d - g)
    if ((z && (k += k > 0 ? -W : W), I !== void 0)) {
      let V = k - I
      if (((V += V > W ? -2 * W : V < -W ? 2 * W : 0), Math.abs(V) > o)) return null
    }
    I = k
    const Z = M
    let K = 0
    for (; M < S; ++M) {
      const V = z ? S - M - 1 : M,
        H = a * l(h, n[V], c)
      if (t + i < e && p + m < r + K + H / 2) break
      K += H
    }
    if (M === Z) continue
    const nt = z ? n.substring(S - Z, S - M) : n.substring(Z, M)
    x = m === 0 ? 0 : (r + K / 2 - p) / m
    const w = vt(g, d, x),
      wt = vt(_, f, x)
    ;(N.push([w, wt, K / 2, k, nt]), (r += K))
  }
  return N
}
const ii = Ct(),
  me = [],
  te = [],
  ee = [],
  pe = []
function Ro(s) {
  return s[3].declutterBox
}
const Io = new RegExp('[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]')
function Ts(s, t) {
  return (
    t === 'start' ? (t = Io.test(s) ? 'right' : 'left') : t === 'end' && (t = Io.test(s) ? 'left' : 'right'),
    Un[t]
  )
}
function Ec(s, t, e) {
  return (
    e > 0 &&
      s.push(
        `
`,
        '',
      ),
    s.push(t, ''),
    s
  )
}
class Cc {
  constructor(t, e, i, n) {
    ;((this.overlaps = i),
      (this.pixelRatio = e),
      (this.resolution = t),
      this.alignFill_,
      (this.instructions = n.instructions),
      (this.coordinates = n.coordinates),
      (this.coordinateCache_ = {}),
      (this.renderedTransform_ = Kt()),
      (this.hitDetectionInstructions = n.hitDetectionInstructions),
      (this.pixelCoordinates_ = null),
      (this.viewRotation_ = 0),
      (this.fillStates = n.fillStates || {}),
      (this.strokeStates = n.strokeStates || {}),
      (this.textStates = n.textStates || {}),
      (this.widths_ = {}),
      (this.labels_ = {}))
  }
  createLabel(t, e, i, n) {
    const r = t + e + i + n
    if (this.labels_[r]) return this.labels_[r]
    const o = n ? this.strokeStates[n] : null,
      a = i ? this.fillStates[i] : null,
      l = this.textStates[e],
      h = this.pixelRatio,
      c = [l.scale[0] * h, l.scale[1] * h],
      u = Array.isArray(t),
      d = l.justify ? Un[l.justify] : Ts(Array.isArray(t) ? t[0] : t, l.textAlign || zi),
      f = n && o.lineWidth ? o.lineWidth : 0,
      g = u
        ? t
        : t
            .split(
              `
`,
            )
            .reduce(Ec, []),
      { width: _, height: m, widths: p, heights: y, lineWidths: x } = Oh(l, g),
      E = _ + f,
      C = [],
      T = (E + 2) * c[0],
      R = (m + f) * c[1],
      v = {
        width: T < 0 ? Math.floor(T) : Math.ceil(T),
        height: R < 0 ? Math.floor(R) : Math.ceil(R),
        contextInstructions: C,
      }
    ;((c[0] != 1 || c[1] != 1) && C.push('scale', c),
      n &&
        (C.push('strokeStyle', o.strokeStyle),
        C.push('lineWidth', f),
        C.push('lineCap', o.lineCap),
        C.push('lineJoin', o.lineJoin),
        C.push('miterLimit', o.miterLimit),
        C.push('setLineDash', [o.lineDash]),
        C.push('lineDashOffset', o.lineDashOffset)),
      i && C.push('fillStyle', a.fillStyle),
      C.push('textBaseline', 'middle'),
      C.push('textAlign', 'center'))
    const L = 0.5 - d
    let A = d * E + L * f
    const z = [],
      W = []
    let N = 0,
      et = 0,
      I = 0,
      M = 0,
      S
    for (let k = 0, Z = g.length; k < Z; k += 2) {
      const K = g[k]
      if (
        K ===
        `
`
      ) {
        ;((et += N), (N = 0), (A = d * E + L * f), ++M)
        continue
      }
      const nt = g[k + 1] || l.font
      ;(nt !== S && (n && z.push('font', nt), i && W.push('font', nt), (S = nt)), (N = Math.max(N, y[I])))
      const w = [K, A + L * p[I] + d * (p[I] - x[M]), 0.5 * (f + N) + et]
      ;((A += p[I]), n && z.push('strokeText', w), i && W.push('fillText', w), ++I)
    }
    return (Array.prototype.push.apply(C, z), Array.prototype.push.apply(C, W), (this.labels_[r] = v), v)
  }
  replayTextBackground_(t, e, i, n, r, o, a) {
    ;(t.beginPath(),
      t.moveTo.apply(t, e),
      t.lineTo.apply(t, i),
      t.lineTo.apply(t, n),
      t.lineTo.apply(t, r),
      t.lineTo.apply(t, e),
      o && ((this.alignFill_ = o[2]), this.fill_(t)),
      a && (this.setStrokeStyle_(t, a), t.stroke()))
  }
  calculateImageOrLabelDimensions_(t, e, i, n, r, o, a, l, h, c, u, d, f, g, _, m) {
    ;((a *= d[0]), (l *= d[1]))
    let p = i - a,
      y = n - l
    const x = r + h > t ? t - h : r,
      E = o + c > e ? e - c : o,
      C = g[3] + x * d[0] + g[1],
      T = g[0] + E * d[1] + g[2],
      R = p - g[3],
      v = y - g[0]
    ;(_ || u !== 0) &&
      ((me[0] = R),
      (pe[0] = R),
      (me[1] = v),
      (te[1] = v),
      (te[0] = R + C),
      (ee[0] = te[0]),
      (ee[1] = v + T),
      (pe[1] = ee[1]))
    let L
    return (
      u !== 0
        ? ((L = Re(Kt(), i, n, 1, 1, u, -i, -n)),
          rt(L, me),
          rt(L, te),
          rt(L, ee),
          rt(L, pe),
          he(
            Math.min(me[0], te[0], ee[0], pe[0]),
            Math.min(me[1], te[1], ee[1], pe[1]),
            Math.max(me[0], te[0], ee[0], pe[0]),
            Math.max(me[1], te[1], ee[1], pe[1]),
            ii,
          ))
        : he(Math.min(R, R + C), Math.min(v, v + T), Math.max(R, R + C), Math.max(v, v + T), ii),
      f && ((p = Math.round(p)), (y = Math.round(y))),
      {
        drawImageX: p,
        drawImageY: y,
        drawImageW: x,
        drawImageH: E,
        originX: h,
        originY: c,
        declutterBox: { minX: ii[0], minY: ii[1], maxX: ii[2], maxY: ii[3], value: m },
        canvasTransform: L,
        scale: d,
      }
    )
  }
  replayImageOrLabel_(t, e, i, n, r, o, a) {
    const l = !!(o || a),
      h = n.declutterBox,
      c = t.canvas,
      u = a ? (a[2] * n.scale[0]) / 2 : 0
    return (
      h.minX - u <= c.width / e &&
        h.maxX + u >= 0 &&
        h.minY - u <= c.height / e &&
        h.maxY + u >= 0 &&
        (l && this.replayTextBackground_(t, me, te, ee, pe, o, a),
        kh(
          t,
          n.canvasTransform,
          r,
          i,
          n.originX,
          n.originY,
          n.drawImageW,
          n.drawImageH,
          n.drawImageX,
          n.drawImageY,
          n.scale,
        )),
      !0
    )
  }
  fill_(t) {
    if (this.alignFill_) {
      const e = rt(this.renderedTransform_, [0, 0]),
        i = 512 * this.pixelRatio
      ;(t.save(), t.translate(e[0] % i, e[1] % i), t.rotate(this.viewRotation_))
    }
    ;(t.fill(), this.alignFill_ && t.restore())
  }
  setStrokeStyle_(t, e) {
    ;((t.strokeStyle = e[1]),
      (t.lineWidth = e[2]),
      (t.lineCap = e[3]),
      (t.lineJoin = e[4]),
      (t.miterLimit = e[5]),
      (t.lineDashOffset = e[7]),
      t.setLineDash(e[6]))
  }
  drawLabelWithPointPlacement_(t, e, i, n) {
    const r = this.textStates[e],
      o = this.createLabel(t, e, n, i),
      a = this.strokeStates[i],
      l = this.pixelRatio,
      h = Ts(Array.isArray(t) ? t[0] : t, r.textAlign || zi),
      c = Un[r.textBaseline || Bn],
      u = a && a.lineWidth ? a.lineWidth : 0,
      d = o.width / l - 2 * r.scale[0],
      f = h * d + 2 * (0.5 - h) * u,
      g = (c * o.height) / l + 2 * (0.5 - c) * u
    return { label: o, anchorX: f, anchorY: g }
  }
  execute_(t, e, i, n, r, o, a, l) {
    let h
    this.pixelCoordinates_ && ce(i, this.renderedTransform_)
      ? (h = this.pixelCoordinates_)
      : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []),
        (h = Ge(this.coordinates, 0, this.coordinates.length, 2, i, this.pixelCoordinates_)),
        Rl(this.renderedTransform_, i))
    let c = 0
    const u = n.length
    let d = 0,
      f,
      g,
      _,
      m,
      p,
      y,
      x,
      E,
      C,
      T,
      R,
      v,
      L = 0,
      A = 0,
      z = null,
      W = null
    const N = this.coordinateCache_,
      et = this.viewRotation_,
      I = Math.round(Math.atan2(-i[1], i[0]) * 1e12) / 1e12,
      M = { context: t, pixelRatio: this.pixelRatio, resolution: this.resolution, rotation: et },
      S = this.instructions != n || this.overlaps ? 0 : 200
    let k, Z, K, nt
    for (; c < u; ) {
      const w = n[c]
      switch (w[0]) {
        case b.BEGIN_GEOMETRY:
          ;((k = w[1]),
            (nt = w[3]),
            k.getGeometry() ? (a !== void 0 && !mt(a, nt.getExtent()) ? (c = w[2] + 1) : ++c) : (c = w[2]))
          break
        case b.BEGIN_PATH:
          ;(L > S && (this.fill_(t), (L = 0)),
            A > S && (t.stroke(), (A = 0)),
            !L && !A && (t.beginPath(), (m = NaN), (p = NaN)),
            ++c)
          break
        case b.CIRCLE:
          d = w[1]
          const V = h[d],
            H = h[d + 1],
            de = h[d + 2],
            Wt = h[d + 3],
            lt = de - V,
            Ht = Wt - H,
            Ze = Math.sqrt(lt * lt + Ht * Ht)
          ;(t.moveTo(V + Ze, H), t.arc(V, H, Ze, 0, 2 * Math.PI, !0), ++c)
          break
        case b.CLOSE_PATH:
          ;(t.closePath(), ++c)
          break
        case b.CUSTOM:
          ;((d = w[1]), (f = w[2]))
          const sn = w[3],
            qe = w[4],
            rn = w.length == 6 ? w[5] : void 0
          ;((M.geometry = sn), (M.feature = k), c in N || (N[c] = []))
          const fe = N[c]
          ;(rn ? rn(h, d, f, 2, fe) : ((fe[0] = h[d]), (fe[1] = h[d + 1]), (fe.length = 2)), qe(fe, M), ++c)
          break
        case b.DRAW_IMAGE:
          ;((d = w[1]), (f = w[2]), (E = w[3]), (g = w[4]), (_ = w[5]))
          let vi = w[6]
          const ge = w[7],
            on = w[8],
            an = w[9],
            ln = w[10]
          let He = w[11]
          const gs = w[12]
          let yt = w[13]
          const bt = w[14],
            Ot = w[15]
          if (!E && w.length >= 20) {
            ;((C = w[19]), (T = w[20]), (R = w[21]), (v = w[22]))
            const Tt = this.drawLabelWithPointPlacement_(C, T, R, v)
            ;((E = Tt.label), (w[3] = E))
            const Qe = w[23]
            ;((g = (Tt.anchorX - Qe) * this.pixelRatio), (w[4] = g))
            const Ft = w[24]
            ;((_ = (Tt.anchorY - Ft) * this.pixelRatio),
              (w[5] = _),
              (vi = E.height),
              (w[6] = vi),
              (yt = E.width),
              (w[13] = yt))
          }
          let Jt
          w.length > 25 && (Jt = w[25])
          let Je, Fe, _e
          ;(w.length > 17 ? ((Je = w[16]), (Fe = w[17]), (_e = w[18])) : ((Je = ke), (Fe = !1), (_e = !1)),
            ln && I ? (He += et) : !ln && !I && (He -= et))
          let $e = 0
          for (; d < f; d += 2) {
            if (Jt && Jt[$e++] < yt / this.pixelRatio) continue
            const Tt = this.calculateImageOrLabelDimensions_(
                E.width,
                E.height,
                h[d],
                h[d + 1],
                yt,
                vi,
                g,
                _,
                on,
                an,
                He,
                gs,
                r,
                Je,
                Fe || _e,
                k,
              ),
              Qe = [t, e, E, Tt, ge, Fe ? z : null, _e ? W : null]
            if (l) {
              if (bt === 'none') continue
              if (bt === 'obstacle') {
                l.insert(Tt.declutterBox)
                continue
              } else {
                let Ft, $t
                if (Ot) {
                  const St = f - d
                  if (!Ot[St]) {
                    Ot[St] = Qe
                    continue
                  }
                  if (((Ft = Ot[St]), delete Ot[St], ($t = Ro(Ft)), l.collides($t))) continue
                }
                if (l.collides(Tt.declutterBox)) continue
                ;(Ft && (l.insert($t), this.replayImageOrLabel_.apply(this, Ft)), l.insert(Tt.declutterBox))
              }
            }
            this.replayImageOrLabel_.apply(this, Qe)
          }
          ++c
          break
        case b.DRAW_CHARS:
          const hn = w[1],
            dt = w[2],
            _s = w[3],
            ul = w[4]
          v = w[5]
          const dl = w[6],
            Yr = w[7],
            zr = w[8]
          R = w[9]
          const ms = w[10]
          ;((C = w[11]), (T = w[12]))
          const Br = [w[13], w[13]],
            ps = this.textStates[T],
            Ri = ps.font,
            Ii = [ps.scale[0] * Yr, ps.scale[1] * Yr]
          let bi
          Ri in this.widths_ ? (bi = this.widths_[Ri]) : ((bi = {}), (this.widths_[Ri] = bi))
          const Vr = wa(h, hn, dt, 2),
            Kr = Math.abs(Ii[0]) * uo(Ri, C, bi)
          if (ul || Kr <= Vr) {
            const Tt = this.textStates[T].textAlign,
              Qe = (Vr - Kr) * Ts(C, Tt),
              Ft = xc(h, hn, dt, 2, C, Qe, dl, Math.abs(Ii[0]), uo, Ri, bi, I ? 0 : this.viewRotation_)
            t: if (Ft) {
              const $t = []
              let St, cn, un, xt, Lt
              if (R)
                for (St = 0, cn = Ft.length; St < cn; ++St) {
                  ;((Lt = Ft[St]),
                    (un = Lt[4]),
                    (xt = this.createLabel(un, T, '', R)),
                    (g = Lt[2] + (Ii[0] < 0 ? -ms : ms)),
                    (_ = _s * xt.height + ((0.5 - _s) * 2 * ms * Ii[1]) / Ii[0] - zr))
                  const Qt = this.calculateImageOrLabelDimensions_(
                    xt.width,
                    xt.height,
                    Lt[0],
                    Lt[1],
                    xt.width,
                    xt.height,
                    g,
                    _,
                    0,
                    0,
                    Lt[3],
                    Br,
                    !1,
                    ke,
                    !1,
                    k,
                  )
                  if (l && l.collides(Qt.declutterBox)) break t
                  $t.push([t, e, xt, Qt, 1, null, null])
                }
              if (v)
                for (St = 0, cn = Ft.length; St < cn; ++St) {
                  ;((Lt = Ft[St]),
                    (un = Lt[4]),
                    (xt = this.createLabel(un, T, v, '')),
                    (g = Lt[2]),
                    (_ = _s * xt.height - zr))
                  const Qt = this.calculateImageOrLabelDimensions_(
                    xt.width,
                    xt.height,
                    Lt[0],
                    Lt[1],
                    xt.width,
                    xt.height,
                    g,
                    _,
                    0,
                    0,
                    Lt[3],
                    Br,
                    !1,
                    ke,
                    !1,
                    k,
                  )
                  if (l && l.collides(Qt.declutterBox)) break t
                  $t.push([t, e, xt, Qt, 1, null, null])
                }
              l && l.load($t.map(Ro))
              for (let Qt = 0, fl = $t.length; Qt < fl; ++Qt) this.replayImageOrLabel_.apply(this, $t[Qt])
            }
          }
          ++c
          break
        case b.END_GEOMETRY:
          if (o !== void 0) {
            k = w[1]
            const Tt = o(k, nt)
            if (Tt) return Tt
          }
          ++c
          break
        case b.FILL:
          ;(S ? L++ : this.fill_(t), ++c)
          break
        case b.MOVE_TO_LINE_TO:
          for (
            d = w[1],
              f = w[2],
              Z = h[d],
              K = h[d + 1],
              y = (Z + 0.5) | 0,
              x = (K + 0.5) | 0,
              (y !== m || x !== p) && (t.moveTo(Z, K), (m = y), (p = x)),
              d += 2;
            d < f;
            d += 2
          )
            ((Z = h[d]),
              (K = h[d + 1]),
              (y = (Z + 0.5) | 0),
              (x = (K + 0.5) | 0),
              (d == f - 2 || y !== m || x !== p) && (t.lineTo(Z, K), (m = y), (p = x)))
          ++c
          break
        case b.SET_FILL_STYLE:
          ;((z = w),
            (this.alignFill_ = w[2]),
            L && (this.fill_(t), (L = 0), A && (t.stroke(), (A = 0))),
            (t.fillStyle = w[1]),
            ++c)
          break
        case b.SET_STROKE_STYLE:
          ;((W = w), A && (t.stroke(), (A = 0)), this.setStrokeStyle_(t, w), ++c)
          break
        case b.STROKE:
          ;(S ? A++ : t.stroke(), ++c)
          break
        default:
          ++c
          break
      }
    }
    ;(L && this.fill_(t), A && t.stroke())
  }
  execute(t, e, i, n, r, o) {
    ;((this.viewRotation_ = n), this.execute_(t, e, i, this.instructions, r, void 0, void 0, o))
  }
  executeHitDetection(t, e, i, n, r) {
    return ((this.viewRotation_ = i), this.execute_(t, 1, e, this.hitDetectionInstructions, !0, n, r))
  }
}
const Ss = ['Polygon', 'Circle', 'LineString', 'Image', 'Text', 'Default']
class bo {
  constructor(t, e, i, n, r, o) {
    ;((this.maxExtent_ = t),
      (this.overlaps_ = n),
      (this.pixelRatio_ = i),
      (this.resolution_ = e),
      (this.renderBuffer_ = o),
      (this.executorsByZIndex_ = {}),
      (this.hitDetectionContext_ = null),
      (this.hitDetectionTransform_ = Kt()),
      this.createExecutors_(r))
  }
  clip(t, e) {
    const i = this.getClipCoords(e)
    ;(t.beginPath(),
      t.moveTo(i[0], i[1]),
      t.lineTo(i[2], i[3]),
      t.lineTo(i[4], i[5]),
      t.lineTo(i[6], i[7]),
      t.clip())
  }
  createExecutors_(t) {
    for (const e in t) {
      let i = this.executorsByZIndex_[e]
      i === void 0 && ((i = {}), (this.executorsByZIndex_[e] = i))
      const n = t[e]
      for (const r in n) {
        const o = n[r]
        i[r] = new Cc(this.resolution_, this.pixelRatio_, this.overlaps_, o)
      }
    }
  }
  hasExecutors(t) {
    for (const e in this.executorsByZIndex_) {
      const i = this.executorsByZIndex_[e]
      for (let n = 0, r = t.length; n < r; ++n) if (t[n] in i) return !0
    }
    return !1
  }
  forEachFeatureAtCoordinate(t, e, i, n, r, o) {
    n = Math.round(n)
    const a = n * 2 + 1,
      l = Re(this.hitDetectionTransform_, n + 0.5, n + 0.5, 1 / e, -1 / e, -i, -t[0], -t[1]),
      h = !this.hitDetectionContext_
    h && (this.hitDetectionContext_ = pt(a, a, void 0, { willReadFrequently: !0 }))
    const c = this.hitDetectionContext_
    c.canvas.width !== a || c.canvas.height !== a
      ? ((c.canvas.width = a), (c.canvas.height = a))
      : h || c.clearRect(0, 0, a, a)
    let u
    this.renderBuffer_ !== void 0 && ((u = Ct()), ki(u, t), Hi(u, e * (this.renderBuffer_ + n), u))
    const d = wc(n)
    let f
    function g(C, T) {
      const R = c.getImageData(0, 0, a, a).data
      for (let v = 0, L = d.length; v < L; v++)
        if (R[d[v]] > 0) {
          if (!o || (f !== 'Image' && f !== 'Text') || o.includes(C)) {
            const A = (d[v] - 3) / 4,
              z = n - (A % a),
              W = n - ((A / a) | 0),
              N = r(C, T, z * z + W * W)
            if (N) return N
          }
          c.clearRect(0, 0, a, a)
          break
        }
    }
    const _ = Object.keys(this.executorsByZIndex_).map(Number)
    _.sort(Ne)
    let m, p, y, x, E
    for (m = _.length - 1; m >= 0; --m) {
      const C = _[m].toString()
      for (y = this.executorsByZIndex_[C], p = Ss.length - 1; p >= 0; --p)
        if (((f = Ss[p]), (x = y[f]), x !== void 0 && ((E = x.executeHitDetection(c, l, i, g, u)), E)))
          return E
    }
  }
  getClipCoords(t) {
    const e = this.maxExtent_
    if (!e) return null
    const i = e[0],
      n = e[1],
      r = e[2],
      o = e[3],
      a = [i, n, i, o, r, o, r, n]
    return (Ge(a, 0, 8, 2, t, a), a)
  }
  isEmpty() {
    return Ei(this.executorsByZIndex_)
  }
  execute(t, e, i, n, r, o, a) {
    const l = Object.keys(this.executorsByZIndex_).map(Number)
    ;(l.sort(Ne), this.maxExtent_ && (t.save(), this.clip(t, i)), (o = o || Ss))
    let h, c, u, d, f, g
    for (a && l.reverse(), h = 0, c = l.length; h < c; ++h) {
      const _ = l[h].toString()
      for (f = this.executorsByZIndex_[_], u = 0, d = o.length; u < d; ++u) {
        const m = o[u]
        ;((g = f[m]), g !== void 0 && g.execute(t, e, i, n, r, a))
      }
    }
    this.maxExtent_ && t.restore()
  }
}
const vs = {}
function wc(s) {
  if (vs[s] !== void 0) return vs[s]
  const t = s * 2 + 1,
    e = s * s,
    i = new Array(e + 1)
  for (let r = 0; r <= s; ++r)
    for (let o = 0; o <= s; ++o) {
      const a = r * r + o * o
      if (a > e) break
      let l = i[a]
      ;(l || ((l = []), (i[a] = l)),
        l.push(((s + r) * t + (s + o)) * 4 + 3),
        r > 0 && l.push(((s - r) * t + (s + o)) * 4 + 3),
        o > 0 && (l.push(((s + r) * t + (s - o)) * 4 + 3), r > 0 && l.push(((s - r) * t + (s - o)) * 4 + 3)))
    }
  const n = []
  for (let r = 0, o = i.length; r < o; ++r) i[r] && n.push(...i[r])
  return ((vs[s] = n), n)
}
class Tc extends Oa {
  constructor(t, e, i, n, r, o, a) {
    ;(super(),
      (this.context_ = t),
      (this.pixelRatio_ = e),
      (this.extent_ = i),
      (this.transform_ = n),
      (this.transformRotation_ = n ? ss(Math.atan2(n[1], n[0]), 10) : 0),
      (this.viewRotation_ = r),
      (this.squaredTolerance_ = o),
      (this.userTransform_ = a),
      (this.contextFillState_ = null),
      (this.contextStrokeState_ = null),
      (this.contextTextState_ = null),
      (this.fillState_ = null),
      (this.strokeState_ = null),
      (this.image_ = null),
      (this.imageAnchorX_ = 0),
      (this.imageAnchorY_ = 0),
      (this.imageHeight_ = 0),
      (this.imageOpacity_ = 0),
      (this.imageOriginX_ = 0),
      (this.imageOriginY_ = 0),
      (this.imageRotateWithView_ = !1),
      (this.imageRotation_ = 0),
      (this.imageScale_ = [0, 0]),
      (this.imageWidth_ = 0),
      (this.text_ = ''),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = !1),
      (this.textRotation_ = 0),
      (this.textScale_ = [0, 0]),
      (this.textFillState_ = null),
      (this.textStrokeState_ = null),
      (this.textState_ = null),
      (this.pixelCoordinates_ = []),
      (this.tmpLocalTransform_ = Kt()))
  }
  drawImages_(t, e, i, n) {
    if (!this.image_) return
    const r = Ge(t, e, i, n, this.transform_, this.pixelCoordinates_),
      o = this.context_,
      a = this.tmpLocalTransform_,
      l = o.globalAlpha
    this.imageOpacity_ != 1 && (o.globalAlpha = l * this.imageOpacity_)
    let h = this.imageRotation_
    ;(this.transformRotation_ === 0 && (h -= this.viewRotation_),
      this.imageRotateWithView_ && (h += this.viewRotation_))
    for (let c = 0, u = r.length; c < u; c += 2) {
      const d = r[c] - this.imageAnchorX_,
        f = r[c + 1] - this.imageAnchorY_
      if (h !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const g = d + this.imageAnchorX_,
          _ = f + this.imageAnchorY_
        ;(Re(a, g, _, 1, 1, h, -g, -_),
          o.setTransform.apply(o, a),
          o.translate(g, _),
          o.scale(this.imageScale_[0], this.imageScale_[1]),
          o.drawImage(
            this.image_,
            this.imageOriginX_,
            this.imageOriginY_,
            this.imageWidth_,
            this.imageHeight_,
            -this.imageAnchorX_,
            -this.imageAnchorY_,
            this.imageWidth_,
            this.imageHeight_,
          ),
          o.setTransform(1, 0, 0, 1, 0, 0))
      } else
        o.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          d,
          f,
          this.imageWidth_,
          this.imageHeight_,
        )
    }
    this.imageOpacity_ != 1 && (o.globalAlpha = l)
  }
  drawText_(t, e, i, n) {
    if (!this.textState_ || this.text_ === '') return
    ;(this.textFillState_ && this.setContextFillState_(this.textFillState_),
      this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_),
      this.setContextTextState_(this.textState_))
    const r = Ge(t, e, i, n, this.transform_, this.pixelCoordinates_),
      o = this.context_
    let a = this.textRotation_
    for (
      this.transformRotation_ === 0 && (a -= this.viewRotation_),
        this.textRotateWithView_ && (a += this.viewRotation_);
      e < i;
      e += n
    ) {
      const l = r[e] + this.textOffsetX_,
        h = r[e + 1] + this.textOffsetY_
      a !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1
        ? (o.translate(l - this.textOffsetX_, h - this.textOffsetY_),
          o.rotate(a),
          o.translate(this.textOffsetX_, this.textOffsetY_),
          o.scale(this.textScale_[0], this.textScale_[1]),
          this.textStrokeState_ && o.strokeText(this.text_, 0, 0),
          this.textFillState_ && o.fillText(this.text_, 0, 0),
          o.setTransform(1, 0, 0, 1, 0, 0))
        : (this.textStrokeState_ && o.strokeText(this.text_, l, h),
          this.textFillState_ && o.fillText(this.text_, l, h))
    }
  }
  moveToLineTo_(t, e, i, n, r) {
    const o = this.context_,
      a = Ge(t, e, i, n, this.transform_, this.pixelCoordinates_)
    o.moveTo(a[0], a[1])
    let l = a.length
    r && (l -= 2)
    for (let h = 2; h < l; h += 2) o.lineTo(a[h], a[h + 1])
    return (r && o.closePath(), i)
  }
  drawRings_(t, e, i, n) {
    for (let r = 0, o = i.length; r < o; ++r) e = this.moveToLineTo_(t, e, i[r], n, !0)
    return e
  }
  drawCircle(t) {
    if (
      (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)),
      !!mt(this.extent_, t.getExtent()))
    ) {
      if (this.fillState_ || this.strokeState_) {
        ;(this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_))
        const e = sh(t, this.transform_, this.pixelCoordinates_),
          i = e[2] - e[0],
          n = e[3] - e[1],
          r = Math.sqrt(i * i + n * n),
          o = this.context_
        ;(o.beginPath(),
          o.arc(e[0], e[1], r, 0, 2 * Math.PI),
          this.fillState_ && o.fill(),
          this.strokeState_ && o.stroke())
      }
      this.text_ !== '' && this.drawText_(t.getCenter(), 0, 2, 2)
    }
  }
  setStyle(t) {
    ;(this.setFillStrokeStyle(t.getFill(), t.getStroke()),
      this.setImageStyle(t.getImage()),
      this.setTextStyle(t.getText()))
  }
  setTransform(t) {
    this.transform_ = t
  }
  drawGeometry(t) {
    switch (t.getType()) {
      case 'Point':
        this.drawPoint(t)
        break
      case 'LineString':
        this.drawLineString(t)
        break
      case 'Polygon':
        this.drawPolygon(t)
        break
      case 'MultiPoint':
        this.drawMultiPoint(t)
        break
      case 'MultiLineString':
        this.drawMultiLineString(t)
        break
      case 'MultiPolygon':
        this.drawMultiPolygon(t)
        break
      case 'GeometryCollection':
        this.drawGeometryCollection(t)
        break
      case 'Circle':
        this.drawCircle(t)
        break
    }
  }
  drawFeature(t, e) {
    const i = e.getGeometryFunction()(t)
    i && (this.setStyle(e), this.drawGeometry(i))
  }
  drawGeometryCollection(t) {
    const e = t.getGeometriesArray()
    for (let i = 0, n = e.length; i < n; ++i) this.drawGeometry(e[i])
  }
  drawPoint(t) {
    this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_))
    const e = t.getFlatCoordinates(),
      i = t.getStride()
    ;(this.image_ && this.drawImages_(e, 0, e.length, i),
      this.text_ !== '' && this.drawText_(e, 0, e.length, i))
  }
  drawMultiPoint(t) {
    this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_))
    const e = t.getFlatCoordinates(),
      i = t.getStride()
    ;(this.image_ && this.drawImages_(e, 0, e.length, i),
      this.text_ !== '' && this.drawText_(e, 0, e.length, i))
  }
  drawLineString(t) {
    if (
      (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)),
      !!mt(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_)
        const e = this.context_,
          i = t.getFlatCoordinates()
        ;(e.beginPath(), this.moveToLineTo_(i, 0, i.length, t.getStride(), !1), e.stroke())
      }
      if (this.text_ !== '') {
        const e = t.getFlatMidpoint()
        this.drawText_(e, 0, 2, 2)
      }
    }
  }
  drawMultiLineString(t) {
    this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_))
    const e = t.getExtent()
    if (mt(this.extent_, e)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_)
        const i = this.context_,
          n = t.getFlatCoordinates()
        let r = 0
        const o = t.getEnds(),
          a = t.getStride()
        i.beginPath()
        for (let l = 0, h = o.length; l < h; ++l) r = this.moveToLineTo_(n, r, o[l], a, !1)
        i.stroke()
      }
      if (this.text_ !== '') {
        const i = t.getFlatMidpoints()
        this.drawText_(i, 0, i.length, 2)
      }
    }
  }
  drawPolygon(t) {
    if (
      (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)),
      !!mt(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        ;(this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_))
        const e = this.context_
        ;(e.beginPath(),
          this.drawRings_(t.getOrientedFlatCoordinates(), 0, t.getEnds(), t.getStride()),
          this.fillState_ && e.fill(),
          this.strokeState_ && e.stroke())
      }
      if (this.text_ !== '') {
        const e = t.getFlatInteriorPoint()
        this.drawText_(e, 0, 2, 2)
      }
    }
  }
  drawMultiPolygon(t) {
    if (
      (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)),
      !!mt(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        ;(this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_))
        const e = this.context_,
          i = t.getOrientedFlatCoordinates()
        let n = 0
        const r = t.getEndss(),
          o = t.getStride()
        e.beginPath()
        for (let a = 0, l = r.length; a < l; ++a) {
          const h = r[a]
          n = this.drawRings_(i, n, h, o)
        }
        ;(this.fillState_ && e.fill(), this.strokeState_ && e.stroke())
      }
      if (this.text_ !== '') {
        const e = t.getFlatInteriorPoints()
        this.drawText_(e, 0, e.length, 2)
      }
    }
  }
  setContextFillState_(t) {
    const e = this.context_,
      i = this.contextFillState_
    i
      ? i.fillStyle != t.fillStyle && ((i.fillStyle = t.fillStyle), (e.fillStyle = t.fillStyle))
      : ((e.fillStyle = t.fillStyle), (this.contextFillState_ = { fillStyle: t.fillStyle }))
  }
  setContextStrokeState_(t) {
    const e = this.context_,
      i = this.contextStrokeState_
    i
      ? (i.lineCap != t.lineCap && ((i.lineCap = t.lineCap), (e.lineCap = t.lineCap)),
        ce(i.lineDash, t.lineDash) || e.setLineDash((i.lineDash = t.lineDash)),
        i.lineDashOffset != t.lineDashOffset &&
          ((i.lineDashOffset = t.lineDashOffset), (e.lineDashOffset = t.lineDashOffset)),
        i.lineJoin != t.lineJoin && ((i.lineJoin = t.lineJoin), (e.lineJoin = t.lineJoin)),
        i.lineWidth != t.lineWidth && ((i.lineWidth = t.lineWidth), (e.lineWidth = t.lineWidth)),
        i.miterLimit != t.miterLimit && ((i.miterLimit = t.miterLimit), (e.miterLimit = t.miterLimit)),
        i.strokeStyle != t.strokeStyle && ((i.strokeStyle = t.strokeStyle), (e.strokeStyle = t.strokeStyle)))
      : ((e.lineCap = t.lineCap),
        e.setLineDash(t.lineDash),
        (e.lineDashOffset = t.lineDashOffset),
        (e.lineJoin = t.lineJoin),
        (e.lineWidth = t.lineWidth),
        (e.miterLimit = t.miterLimit),
        (e.strokeStyle = t.strokeStyle),
        (this.contextStrokeState_ = {
          lineCap: t.lineCap,
          lineDash: t.lineDash,
          lineDashOffset: t.lineDashOffset,
          lineJoin: t.lineJoin,
          lineWidth: t.lineWidth,
          miterLimit: t.miterLimit,
          strokeStyle: t.strokeStyle,
        }))
  }
  setContextTextState_(t) {
    const e = this.context_,
      i = this.contextTextState_,
      n = t.textAlign ? t.textAlign : zi
    i
      ? (i.font != t.font && ((i.font = t.font), (e.font = t.font)),
        i.textAlign != n && ((i.textAlign = n), (e.textAlign = n)),
        i.textBaseline != t.textBaseline &&
          ((i.textBaseline = t.textBaseline), (e.textBaseline = t.textBaseline)))
      : ((e.font = t.font),
        (e.textAlign = n),
        (e.textBaseline = t.textBaseline),
        (this.contextTextState_ = { font: t.font, textAlign: n, textBaseline: t.textBaseline }))
  }
  setFillStrokeStyle(t, e) {
    if (!t) this.fillState_ = null
    else {
      const i = t.getColor()
      this.fillState_ = { fillStyle: Bt(i || Et) }
    }
    if (!e) this.strokeState_ = null
    else {
      const i = e.getColor(),
        n = e.getLineCap(),
        r = e.getLineDash(),
        o = e.getLineDashOffset(),
        a = e.getLineJoin(),
        l = e.getWidth(),
        h = e.getMiterLimit(),
        c = r || oe
      this.strokeState_ = {
        lineCap: n !== void 0 ? n : zn,
        lineDash: this.pixelRatio_ === 1 ? c : c.map(u => u * this.pixelRatio_),
        lineDashOffset: (o || ae) * this.pixelRatio_,
        lineJoin: a !== void 0 ? a : Ci,
        lineWidth: (l !== void 0 ? l : Bi) * this.pixelRatio_,
        miterLimit: h !== void 0 ? h : Wi,
        strokeStyle: Bt(i || Yi),
      }
    }
  }
  setImageStyle(t) {
    let e
    if (!t || !(e = t.getSize())) {
      this.image_ = null
      return
    }
    const i = t.getPixelRatio(this.pixelRatio_),
      n = t.getAnchor(),
      r = t.getOrigin()
    ;((this.image_ = t.getImage(this.pixelRatio_)),
      (this.imageAnchorX_ = n[0] * i),
      (this.imageAnchorY_ = n[1] * i),
      (this.imageHeight_ = e[1] * i),
      (this.imageOpacity_ = t.getOpacity()),
      (this.imageOriginX_ = r[0]),
      (this.imageOriginY_ = r[1]),
      (this.imageRotateWithView_ = t.getRotateWithView()),
      (this.imageRotation_ = t.getRotation()))
    const o = t.getScaleArray()
    ;((this.imageScale_ = [(o[0] * this.pixelRatio_) / i, (o[1] * this.pixelRatio_) / i]),
      (this.imageWidth_ = e[0] * i))
  }
  setTextStyle(t) {
    if (!t) this.text_ = ''
    else {
      const e = t.getFill()
      if (!e) this.textFillState_ = null
      else {
        const f = e.getColor()
        this.textFillState_ = { fillStyle: Bt(f || Et) }
      }
      const i = t.getStroke()
      if (!i) this.textStrokeState_ = null
      else {
        const f = i.getColor(),
          g = i.getLineCap(),
          _ = i.getLineDash(),
          m = i.getLineDashOffset(),
          p = i.getLineJoin(),
          y = i.getWidth(),
          x = i.getMiterLimit()
        this.textStrokeState_ = {
          lineCap: g !== void 0 ? g : zn,
          lineDash: _ || oe,
          lineDashOffset: m || ae,
          lineJoin: p !== void 0 ? p : Ci,
          lineWidth: y !== void 0 ? y : Bi,
          miterLimit: x !== void 0 ? x : Wi,
          strokeStyle: Bt(f || Yi),
        }
      }
      const n = t.getFont(),
        r = t.getOffsetX(),
        o = t.getOffsetY(),
        a = t.getRotateWithView(),
        l = t.getRotation(),
        h = t.getScaleArray(),
        c = t.getText(),
        u = t.getTextAlign(),
        d = t.getTextBaseline()
      ;((this.textState_ = {
        font: n !== void 0 ? n : Ra,
        textAlign: u !== void 0 ? u : zi,
        textBaseline: d !== void 0 ? d : Bn,
      }),
        (this.text_ =
          c !== void 0 ? (Array.isArray(c) ? c.reduce((f, g, _) => (f += _ % 2 ? ' ' : g), '') : c) : ''),
        (this.textOffsetX_ = r !== void 0 ? this.pixelRatio_ * r : 0),
        (this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0),
        (this.textRotateWithView_ = a !== void 0 ? a : !1),
        (this.textRotation_ = l !== void 0 ? l : 0),
        (this.textScale_ = [this.pixelRatio_ * h[0], this.pixelRatio_ * h[1]]))
    }
  }
}
const zt = 0.5
function Sc(s, t, e, i, n, r, o) {
  const a = s[0] * zt,
    l = s[1] * zt,
    h = pt(a, l)
  h.imageSmoothingEnabled = !1
  const c = h.canvas,
    u = new Tc(h, zt, n, null, o),
    d = e.length,
    f = Math.floor((256 * 256 * 256 - 1) / d),
    g = {}
  for (let m = 1; m <= d; ++m) {
    const p = e[m - 1],
      y = p.getStyleFunction() || i
    if (!y) continue
    let x = y(p, r)
    if (!x) continue
    Array.isArray(x) || (x = [x])
    const C = (m * f).toString(16).padStart(7, '#00000')
    for (let T = 0, R = x.length; T < R; ++T) {
      const v = x[T],
        L = v.getGeometryFunction()(p)
      if (!L || !mt(n, L.getExtent())) continue
      const A = v.clone(),
        z = A.getFill()
      z && z.setColor(C)
      const W = A.getStroke()
      ;(W && (W.setColor(C), W.setLineDash(null)), A.setText(void 0))
      const N = v.getImage()
      if (N) {
        const S = N.getImageSize()
        if (!S) continue
        const k = pt(S[0], S[1], void 0, { alpha: !1 }),
          Z = k.canvas
        ;((k.fillStyle = C),
          k.fillRect(0, 0, Z.width, Z.height),
          A.setImage(
            new Qi({
              img: Z,
              imgSize: S,
              anchor: N.getAnchor(),
              anchorXUnits: 'pixels',
              anchorYUnits: 'pixels',
              offset: N.getOrigin(),
              opacity: 1,
              size: N.getSize(),
              scale: N.getScale(),
              rotation: N.getRotation(),
              rotateWithView: N.getRotateWithView(),
            }),
          ))
      }
      const et = A.getZIndex() || 0
      let I = g[et]
      I || ((I = {}), (g[et] = I), (I.Polygon = []), (I.Circle = []), (I.LineString = []), (I.Point = []))
      const M = L.getType()
      if (M === 'GeometryCollection') {
        const S = L.getGeometriesArrayRecursive()
        for (let k = 0, Z = S.length; k < Z; ++k) {
          const K = S[k]
          I[K.getType().replace('Multi', '')].push(K, A)
        }
      } else I[M.replace('Multi', '')].push(L, A)
    }
  }
  const _ = Object.keys(g).map(Number).sort(Ne)
  for (let m = 0, p = _.length; m < p; ++m) {
    const y = g[_[m]]
    for (const x in y) {
      const E = y[x]
      for (let C = 0, T = E.length; C < T; C += 2) {
        u.setStyle(E[C + 1])
        for (let R = 0, v = t.length; R < v; ++R) (u.setTransform(t[R]), u.drawGeometry(E[C]))
      }
    }
  }
  return h.getImageData(0, 0, c.width, c.height)
}
function vc(s, t, e) {
  const i = []
  if (e) {
    const n = Math.floor(Math.round(s[0]) * zt),
      r = Math.floor(Math.round(s[1]) * zt),
      o = (tt(n, 0, e.width - 1) + tt(r, 0, e.height - 1) * e.width) * 4,
      a = e.data[o],
      l = e.data[o + 1],
      c = e.data[o + 2] + 256 * (l + 256 * a),
      u = Math.floor((256 * 256 * 256 - 1) / t.length)
    c && c % u === 0 && i.push(t[c / u - 1])
  }
  return i
}
const Rc = 0.5,
  ja = {
    Point: kc,
    LineString: Mc,
    Polygon: jc,
    MultiPoint: Dc,
    MultiLineString: Ac,
    MultiPolygon: Oc,
    GeometryCollection: Pc,
    Circle: Fc,
  }
function Ic(s, t) {
  return parseInt(D(s), 10) - parseInt(D(t), 10)
}
function bc(s, t) {
  const e = Js(s, t)
  return e * e
}
function Js(s, t) {
  return (Rc * s) / t
}
function Fc(s, t, e, i, n) {
  const r = e.getFill(),
    o = e.getStroke()
  if (r || o) {
    const l = s.getBuilder(e.getZIndex(), 'Circle')
    ;(l.setFillStrokeStyle(r, o), l.drawCircle(t, i))
  }
  const a = e.getText()
  if (a && a.getText()) {
    const l = (n || s).getBuilder(e.getZIndex(), 'Text')
    ;(l.setTextStyle(a), l.drawText(t, i))
  }
}
function Fo(s, t, e, i, n, r, o) {
  let a = !1
  const l = e.getImage()
  if (l) {
    const h = l.getImageState()
    h == Q.LOADED || h == Q.ERROR
      ? l.unlistenImageChange(n)
      : (h == Q.IDLE && l.load(), l.listenImageChange(n), (a = !0))
  }
  return (Lc(s, t, e, i, r, o), a)
}
function Lc(s, t, e, i, n, r) {
  const o = e.getGeometryFunction()(t)
  if (!o) return
  const a = o.simplifyTransformed(i, n)
  if (e.getRenderer()) Ga(s, a, e, t)
  else {
    const h = ja[a.getType()]
    h(s, a, e, t, r)
  }
}
function Ga(s, t, e, i) {
  if (t.getType() == 'GeometryCollection') {
    const r = t.getGeometries()
    for (let o = 0, a = r.length; o < a; ++o) Ga(s, r[o], e, i)
    return
  }
  s.getBuilder(e.getZIndex(), 'Default').drawCustom(t, i, e.getRenderer(), e.getHitDetectionRenderer())
}
function Pc(s, t, e, i, n) {
  const r = t.getGeometriesArray()
  let o, a
  for (o = 0, a = r.length; o < a; ++o) {
    const l = ja[r[o].getType()]
    l(s, r[o], e, i, n)
  }
}
function Mc(s, t, e, i, n) {
  const r = e.getStroke()
  if (r) {
    const a = s.getBuilder(e.getZIndex(), 'LineString')
    ;(a.setFillStrokeStyle(null, r), a.drawLineString(t, i))
  }
  const o = e.getText()
  if (o && o.getText()) {
    const a = (n || s).getBuilder(e.getZIndex(), 'Text')
    ;(a.setTextStyle(o), a.drawText(t, i))
  }
}
function Ac(s, t, e, i, n) {
  const r = e.getStroke()
  if (r) {
    const a = s.getBuilder(e.getZIndex(), 'LineString')
    ;(a.setFillStrokeStyle(null, r), a.drawMultiLineString(t, i))
  }
  const o = e.getText()
  if (o && o.getText()) {
    const a = (n || s).getBuilder(e.getZIndex(), 'Text')
    ;(a.setTextStyle(o), a.drawText(t, i))
  }
}
function Oc(s, t, e, i, n) {
  const r = e.getFill(),
    o = e.getStroke()
  if (o || r) {
    const l = s.getBuilder(e.getZIndex(), 'Polygon')
    ;(l.setFillStrokeStyle(r, o), l.drawMultiPolygon(t, i))
  }
  const a = e.getText()
  if (a && a.getText()) {
    const l = (n || s).getBuilder(e.getZIndex(), 'Text')
    ;(l.setTextStyle(a), l.drawText(t, i))
  }
}
function kc(s, t, e, i, n) {
  const r = e.getImage(),
    o = e.getText()
  let a
  if (r) {
    if (r.getImageState() != Q.LOADED) return
    let l = s
    if (n) {
      const c = r.getDeclutterMode()
      if (c !== 'none')
        if (((l = n), c === 'obstacle')) {
          const u = s.getBuilder(e.getZIndex(), 'Image')
          ;(u.setImageStyle(r, a), u.drawPoint(t, i))
        } else o && o.getText() && (a = {})
    }
    const h = l.getBuilder(e.getZIndex(), 'Image')
    ;(h.setImageStyle(r, a), h.drawPoint(t, i))
  }
  if (o && o.getText()) {
    let l = s
    n && (l = n)
    const h = l.getBuilder(e.getZIndex(), 'Text')
    ;(h.setTextStyle(o, a), h.drawText(t, i))
  }
}
function Dc(s, t, e, i, n) {
  const r = e.getImage(),
    o = e.getText()
  let a
  if (r) {
    if (r.getImageState() != Q.LOADED) return
    let l = s
    if (n) {
      const c = r.getDeclutterMode()
      if (c !== 'none')
        if (((l = n), c === 'obstacle')) {
          const u = s.getBuilder(e.getZIndex(), 'Image')
          ;(u.setImageStyle(r, a), u.drawMultiPoint(t, i))
        } else o && o.getText() && (a = {})
    }
    const h = l.getBuilder(e.getZIndex(), 'Image')
    ;(h.setImageStyle(r, a), h.drawMultiPoint(t, i))
  }
  if (o && o.getText()) {
    let l = s
    n && (l = n)
    const h = l.getBuilder(e.getZIndex(), 'Text')
    ;(h.setTextStyle(o, a), h.drawText(t, i))
  }
}
function jc(s, t, e, i, n) {
  const r = e.getFill(),
    o = e.getStroke()
  if (r || o) {
    const l = s.getBuilder(e.getZIndex(), 'Polygon')
    ;(l.setFillStrokeStyle(r, o), l.drawPolygon(t, i))
  }
  const a = e.getText()
  if (a && a.getText()) {
    const l = (n || s).getBuilder(e.getZIndex(), 'Text')
    ;(l.setTextStyle(a), l.drawText(t, i))
  }
}
class Gc extends Da {
  constructor(t) {
    ;(super(t),
      (this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this)),
      this.animatingOrInteracting_,
      (this.hitDetectionImageData_ = null),
      (this.renderedFeatures_ = null),
      (this.renderedRevision_ = -1),
      (this.renderedResolution_ = NaN),
      (this.renderedExtent_ = Ct()),
      (this.wrappedRenderedExtent_ = Ct()),
      this.renderedRotation_,
      (this.renderedCenter_ = null),
      (this.renderedProjection_ = null),
      (this.renderedRenderOrder_ = null),
      (this.replayGroup_ = null),
      (this.replayGroupChanged = !0),
      (this.declutterExecutorGroup = null),
      (this.clipping = !0),
      (this.compositionContext_ = null),
      (this.opacity_ = 1))
  }
  renderWorlds(t, e, i) {
    const n = e.extent,
      r = e.viewState,
      o = r.center,
      a = r.resolution,
      l = r.projection,
      h = r.rotation,
      c = l.getExtent(),
      u = this.getLayer().getSource(),
      d = e.pixelRatio,
      f = e.viewHints,
      g = !(f[ct.ANIMATING] || f[ct.INTERACTING]),
      _ = this.compositionContext_,
      m = Math.round(e.size[0] * d),
      p = Math.round(e.size[1] * d),
      y = u.getWrapX() && l.canWrapX(),
      x = y ? $(c) : null,
      E = y ? Math.ceil((n[2] - c[2]) / x) + 1 : 1
    let C = y ? Math.floor((n[0] - c[0]) / x) : 0
    do {
      const T = this.getRenderTransform(o, a, h, d, m, p, C * x)
      t.execute(_, 1, T, h, g, void 0, i)
    } while (++C < E)
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = pt(this.context.canvas.width, this.context.canvas.height, vo)
      this.compositionContext_ = t
    } else this.compositionContext_ = this.context
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = this.context.globalAlpha
      ;((this.context.globalAlpha = this.opacity_),
        this.context.drawImage(this.compositionContext_.canvas, 0, 0),
        (this.context.globalAlpha = t),
        hs(this.compositionContext_),
        vo.push(this.compositionContext_.canvas),
        (this.compositionContext_ = null))
    }
  }
  renderDeclutter(t) {
    this.declutterExecutorGroup &&
      (this.setupCompositionContext_(),
      this.renderWorlds(this.declutterExecutorGroup, t, t.declutterTree),
      this.releaseCompositionContext_())
  }
  renderFrame(t, e) {
    const i = t.pixelRatio,
      n = t.layerStatesArray[t.layerIndex]
    ;(Il(this.pixelTransform, 1 / i, 1 / i), or(this.inversePixelTransform, this.pixelTransform))
    const r = Qo(this.pixelTransform)
    this.useContainer(e, r, this.getBackground(t))
    const o = this.context,
      a = o.canvas,
      l = this.replayGroup_,
      h = this.declutterExecutorGroup
    let c = (l && !l.isEmpty()) || (h && !h.isEmpty())
    if (!c && !(this.getLayer().hasListener(Ut.PRERENDER) || this.getLayer().hasListener(Ut.POSTRENDER)))
      return null
    const u = Math.round(t.size[0] * i),
      d = Math.round(t.size[1] * i)
    ;(a.width != u || a.height != d
      ? ((a.width = u), (a.height = d), a.style.transform !== r && (a.style.transform = r))
      : this.containerReused || o.clearRect(0, 0, u, d),
      this.preRender(o, t))
    const f = t.viewState
    ;(f.projection, (this.opacity_ = n.opacity), this.setupCompositionContext_())
    let g = !1
    if (c && n.extent && this.clipping) {
      const _ = we(n.extent)
      ;((c = mt(_, t.extent)),
        (g = c && !ci(_, t.extent)),
        g && this.clipUnrotated(this.compositionContext_, t, _))
    }
    return (
      c && this.renderWorlds(l, t),
      g && this.compositionContext_.restore(),
      this.releaseCompositionContext_(),
      this.postRender(o, t),
      this.renderedRotation_ !== f.rotation &&
        ((this.renderedRotation_ = f.rotation), (this.hitDetectionImageData_ = null)),
      this.container
    )
  }
  getFeatures(t) {
    return new Promise(e => {
      if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        const i = [this.context.canvas.width, this.context.canvas.height]
        rt(this.pixelTransform, i)
        const n = this.renderedCenter_,
          r = this.renderedResolution_,
          o = this.renderedRotation_,
          a = this.renderedProjection_,
          l = this.wrappedRenderedExtent_,
          h = this.getLayer(),
          c = [],
          u = i[0] * zt,
          d = i[1] * zt
        c.push(this.getRenderTransform(n, r, o, zt, u, d, 0).slice())
        const f = h.getSource(),
          g = a.getExtent()
        if (f.getWrapX() && a.canWrapX() && !ci(g, l)) {
          let _ = l[0]
          const m = $(g)
          let p = 0,
            y
          for (; _ < g[0]; )
            (--p, (y = m * p), c.push(this.getRenderTransform(n, r, o, zt, u, d, y).slice()), (_ += m))
          for (p = 0, _ = l[2]; _ > g[2]; )
            (++p, (y = m * p), c.push(this.getRenderTransform(n, r, o, zt, u, d, y).slice()), (_ -= m))
        }
        this.hitDetectionImageData_ = Sc(i, c, this.renderedFeatures_, h.getStyleFunction(), l, r, o)
      }
      e(vc(t, this.renderedFeatures_, this.hitDetectionImageData_))
    })
  }
  forEachFeatureAtCoordinate(t, e, i, n, r) {
    if (!this.replayGroup_) return
    const o = e.viewState.resolution,
      a = e.viewState.rotation,
      l = this.getLayer(),
      h = {},
      c = function (f, g, _) {
        const m = D(f),
          p = h[m]
        if (p) {
          if (p !== !0 && _ < p.distanceSq) {
            if (_ === 0) return ((h[m] = !0), r.splice(r.lastIndexOf(p), 1), n(f, l, g))
            ;((p.geometry = g), (p.distanceSq = _))
          }
        } else {
          if (_ === 0) return ((h[m] = !0), n(f, l, g))
          r.push((h[m] = { feature: f, layer: l, geometry: g, distanceSq: _, callback: n }))
        }
      }
    let u
    const d = [this.replayGroup_]
    return (
      this.declutterExecutorGroup && d.push(this.declutterExecutorGroup),
      d.some(
        f =>
          (u = f.forEachFeatureAtCoordinate(
            t,
            o,
            a,
            i,
            c,
            f === this.declutterExecutorGroup && e.declutterTree
              ? e.declutterTree.all().map(g => g.value)
              : null,
          )),
      ),
      u
    )
  }
  handleFontsChanged() {
    const t = this.getLayer()
    t.getVisible() && this.replayGroup_ && t.changed()
  }
  handleStyleImageChange_(t) {
    this.renderIfReadyAndVisible()
  }
  prepareFrame(t) {
    const e = this.getLayer(),
      i = e.getSource()
    if (!i) return !1
    const n = t.viewHints[ct.ANIMATING],
      r = t.viewHints[ct.INTERACTING],
      o = e.getUpdateWhileAnimating(),
      a = e.getUpdateWhileInteracting()
    if ((this.ready && !o && n) || (!a && r)) return ((this.animatingOrInteracting_ = !0), !0)
    this.animatingOrInteracting_ = !1
    const l = t.extent,
      h = t.viewState,
      c = h.projection,
      u = h.resolution,
      d = t.pixelRatio,
      f = e.getRevision(),
      g = e.getRenderBuffer()
    let _ = e.getRenderOrder()
    _ === void 0 && (_ = Ic)
    const m = h.center.slice(),
      p = Hi(l, g * u),
      y = p.slice(),
      x = [p.slice()],
      E = c.getExtent()
    if (i.getWrapX() && c.canWrapX() && !ci(E, t.extent)) {
      const I = $(E),
        M = Math.max($(p) / 2, I)
      ;((p[0] = E[0] - M), (p[2] = E[2] + M), ra(m, c))
      const S = na(x[0], c)
      S[0] < E[0] && S[2] < E[2]
        ? x.push([S[0] + I, S[1], S[2] + I, S[3]])
        : S[0] > E[0] && S[2] > E[2] && x.push([S[0] - I, S[1], S[2] - I, S[3]])
    }
    if (
      this.ready &&
      this.renderedResolution_ == u &&
      this.renderedRevision_ == f &&
      this.renderedRenderOrder_ == _ &&
      ci(this.wrappedRenderedExtent_, p)
    )
      return (
        ce(this.renderedExtent_, y) || ((this.hitDetectionImageData_ = null), (this.renderedExtent_ = y)),
        (this.renderedCenter_ = m),
        (this.replayGroupChanged = !1),
        !0
      )
    this.replayGroup_ = null
    const C = new So(Js(u, d), p, u, d)
    let T
    this.getLayer().getDeclutter() && (T = new So(Js(u, d), p, u, d))
    let R
    for (let I = 0, M = x.length; I < M; ++I) i.loadFeatures(x[I], u, c)
    const v = bc(u, d)
    let L = !0
    const A = I => {
        let M
        const S = I.getStyleFunction() || e.getStyleFunction()
        if ((S && (M = S(I, u)), M)) {
          const k = this.renderFeature(I, v, M, C, R, T)
          L = L && !k
        }
      },
      z = rs(p),
      W = i.getFeaturesInExtent(z)
    _ && W.sort(_)
    for (let I = 0, M = W.length; I < M; ++I) A(W[I])
    ;((this.renderedFeatures_ = W), (this.ready = L))
    const N = C.finish(),
      et = new bo(p, u, d, i.getOverlaps(), N, e.getRenderBuffer())
    return (
      T && (this.declutterExecutorGroup = new bo(p, u, d, i.getOverlaps(), T.finish(), e.getRenderBuffer())),
      (this.renderedResolution_ = u),
      (this.renderedRevision_ = f),
      (this.renderedRenderOrder_ = _),
      (this.renderedExtent_ = y),
      (this.wrappedRenderedExtent_ = p),
      (this.renderedCenter_ = m),
      (this.renderedProjection_ = c),
      (this.replayGroup_ = et),
      (this.hitDetectionImageData_ = null),
      (this.replayGroupChanged = !0),
      !0
    )
  }
  renderFeature(t, e, i, n, r, o) {
    if (!i) return !1
    let a = !1
    if (Array.isArray(i))
      for (let l = 0, h = i.length; l < h; ++l)
        a = Fo(n, t, i[l], e, this.boundHandleStyleImageChange_, r, o) || a
    else a = Fo(n, t, i, e, this.boundHandleStyleImageChange_, r, o)
    return a
  }
}
class Pr extends cc {
  constructor(t) {
    super(t)
  }
  createRenderer() {
    return new Gc(this)
  }
}
class Zn {
  constructor(t) {
    ;((this.rbush_ = new Ma(t)), (this.items_ = {}))
  }
  insert(t, e) {
    const i = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3], value: e }
    ;(this.rbush_.insert(i), (this.items_[D(e)] = i))
  }
  load(t, e) {
    const i = new Array(e.length)
    for (let n = 0, r = e.length; n < r; n++) {
      const o = t[n],
        a = e[n],
        l = { minX: o[0], minY: o[1], maxX: o[2], maxY: o[3], value: a }
      ;((i[n] = l), (this.items_[D(a)] = l))
    }
    this.rbush_.load(i)
  }
  remove(t) {
    const e = D(t),
      i = this.items_[e]
    return (delete this.items_[e], this.rbush_.remove(i) !== null)
  }
  update(t, e) {
    const i = this.items_[D(e)],
      n = [i.minX, i.minY, i.maxX, i.maxY]
    Gi(n, t) || (this.remove(e), this.insert(t, e))
  }
  getAll() {
    return this.rbush_.all().map(function (e) {
      return e.value
    })
  }
  getInExtent(t) {
    const e = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3] }
    return this.rbush_.search(e).map(function (n) {
      return n.value
    })
  }
  forEach(t) {
    return this.forEach_(this.getAll(), t)
  }
  forEachInExtent(t, e) {
    return this.forEach_(this.getInExtent(t), e)
  }
  forEach_(t, e) {
    let i
    for (let n = 0, r = t.length; n < r; n++) if (((i = e(t[n])), i)) return i
    return i
  }
  isEmpty() {
    return Ei(this.items_)
  }
  clear() {
    ;(this.rbush_.clear(), (this.items_ = {}))
  }
  getExtent(t) {
    const e = this.rbush_.toJSON()
    return he(e.minX, e.minY, e.maxX, e.maxY, t)
  }
  concat(t) {
    this.rbush_.load(t.rbush_.all())
    for (const e in t.items_) this.items_[e] = t.items_[e]
  }
}
class Na extends Xt {
  constructor(t) {
    ;(super(),
      (this.projection = it(t.projection)),
      (this.attributions_ = Lo(t.attributions)),
      (this.attributionsCollapsible_ = t.attributionsCollapsible !== void 0 ? t.attributionsCollapsible : !0),
      (this.loading = !1),
      (this.state_ = t.state !== void 0 ? t.state : 'ready'),
      (this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1),
      (this.interpolate_ = !!t.interpolate),
      (this.viewResolver = null),
      (this.viewRejector = null))
    const e = this
    this.viewPromise_ = new Promise(function (i, n) {
      ;((e.viewResolver = i), (e.viewRejector = n))
    })
  }
  getAttributions() {
    return this.attributions_
  }
  getAttributionsCollapsible() {
    return this.attributionsCollapsible_
  }
  getProjection() {
    return this.projection
  }
  getResolutions(t) {
    return null
  }
  getView() {
    return this.viewPromise_
  }
  getState() {
    return this.state_
  }
  getWrapX() {
    return this.wrapX_
  }
  getInterpolate() {
    return this.interpolate_
  }
  refresh() {
    this.changed()
  }
  setAttributions(t) {
    ;((this.attributions_ = Lo(t)), this.changed())
  }
  setState(t) {
    ;((this.state_ = t), this.changed())
  }
}
function Lo(s) {
  return s
    ? Array.isArray(s)
      ? function (t) {
          return s
        }
      : typeof s == 'function'
        ? s
        : function (t) {
            return [s]
          }
    : null
}
const ft = {
  ADDFEATURE: 'addfeature',
  CHANGEFEATURE: 'changefeature',
  CLEAR: 'clear',
  REMOVEFEATURE: 'removefeature',
  FEATURESLOADSTART: 'featuresloadstart',
  FEATURESLOADEND: 'featuresloadend',
  FEATURESLOADERROR: 'featuresloaderror',
}
function Nc(s, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]]
}
let Xc = !1
function Wc(s, t, e, i, n, r, o) {
  const a = new XMLHttpRequest()
  ;(a.open('GET', typeof s == 'function' ? s(e, i, n) : s, !0),
    t.getType() == 'arraybuffer' && (a.responseType = 'arraybuffer'),
    (a.withCredentials = Xc),
    (a.onload = function (l) {
      if (!a.status || (a.status >= 200 && a.status < 300)) {
        const h = t.getType()
        let c
        ;(h == 'json' || h == 'text'
          ? (c = a.responseText)
          : h == 'xml'
            ? ((c = a.responseXML),
              c || (c = new DOMParser().parseFromString(a.responseText, 'application/xml')))
            : h == 'arraybuffer' && (c = a.response),
          c ? r(t.readFeatures(c, { extent: e, featureProjection: n }), t.readProjection(c)) : o())
      } else o()
    }),
    (a.onerror = o),
    a.send())
}
function Po(s, t) {
  return function (e, i, n, r, o) {
    const a = this
    Wc(
      s,
      t,
      e,
      i,
      n,
      function (l, h) {
        ;(a.addFeatures(l), r !== void 0 && r(l))
      },
      o || xi,
    )
  }
}
class ye extends at {
  constructor(t, e, i) {
    ;(super(t), (this.feature = e), (this.features = i))
  }
}
class Mr extends Na {
  constructor(t) {
    ;((t = t || {}),
      super({
        attributions: t.attributions,
        interpolate: !0,
        projection: void 0,
        state: 'ready',
        wrapX: t.wrapX !== void 0 ? t.wrapX : !0,
      }),
      this.on,
      this.once,
      this.un,
      (this.loader_ = xi),
      (this.format_ = t.format),
      (this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps),
      (this.url_ = t.url),
      t.loader !== void 0
        ? (this.loader_ = t.loader)
        : this.url_ !== void 0 && (G(this.format_, 7), (this.loader_ = Po(this.url_, this.format_))),
      (this.strategy_ = t.strategy !== void 0 ? t.strategy : Nc))
    const e = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0
    ;((this.featuresRtree_ = e ? new Zn() : null),
      (this.loadedExtentsRtree_ = new Zn()),
      (this.loadingExtentsCount_ = 0),
      (this.nullGeometryFeatures_ = {}),
      (this.idIndex_ = {}),
      (this.uidIndex_ = {}),
      (this.featureChangeKeys_ = {}),
      (this.featuresCollection_ = null))
    let i, n
    ;(Array.isArray(t.features) ? (n = t.features) : t.features && ((i = t.features), (n = i.getArray())),
      !e && i === void 0 && (i = new ut(n)),
      n !== void 0 && this.addFeaturesInternal(n),
      i !== void 0 && this.bindFeaturesCollection_(i))
  }
  addFeature(t) {
    ;(this.addFeatureInternal(t), this.changed())
  }
  addFeatureInternal(t) {
    const e = D(t)
    if (!this.addToIndex_(e, t)) {
      this.featuresCollection_ && this.featuresCollection_.remove(t)
      return
    }
    this.setupChangeEvents_(e, t)
    const i = t.getGeometry()
    if (i) {
      const n = i.getExtent()
      this.featuresRtree_ && this.featuresRtree_.insert(n, t)
    } else this.nullGeometryFeatures_[e] = t
    this.dispatchEvent(new ye(ft.ADDFEATURE, t))
  }
  setupChangeEvents_(t, e) {
    this.featureChangeKeys_[t] = [
      j(e, O.CHANGE, this.handleFeatureChange_, this),
      j(e, yi.PROPERTYCHANGE, this.handleFeatureChange_, this),
    ]
  }
  addToIndex_(t, e) {
    let i = !0
    const n = e.getId()
    return (
      n !== void 0 && (n.toString() in this.idIndex_ ? (i = !1) : (this.idIndex_[n.toString()] = e)),
      i && (G(!(t in this.uidIndex_), 30), (this.uidIndex_[t] = e)),
      i
    )
  }
  addFeatures(t) {
    ;(this.addFeaturesInternal(t), this.changed())
  }
  addFeaturesInternal(t) {
    const e = [],
      i = [],
      n = []
    for (let r = 0, o = t.length; r < o; r++) {
      const a = t[r],
        l = D(a)
      this.addToIndex_(l, a) && i.push(a)
    }
    for (let r = 0, o = i.length; r < o; r++) {
      const a = i[r],
        l = D(a)
      this.setupChangeEvents_(l, a)
      const h = a.getGeometry()
      if (h) {
        const c = h.getExtent()
        ;(e.push(c), n.push(a))
      } else this.nullGeometryFeatures_[l] = a
    }
    if ((this.featuresRtree_ && this.featuresRtree_.load(e, n), this.hasListener(ft.ADDFEATURE)))
      for (let r = 0, o = i.length; r < o; r++) this.dispatchEvent(new ye(ft.ADDFEATURE, i[r]))
  }
  bindFeaturesCollection_(t) {
    let e = !1
    ;(this.addEventListener(ft.ADDFEATURE, function (i) {
      e || ((e = !0), t.push(i.feature), (e = !1))
    }),
      this.addEventListener(ft.REMOVEFEATURE, function (i) {
        e || ((e = !0), t.remove(i.feature), (e = !1))
      }),
      t.addEventListener(ot.ADD, i => {
        e || ((e = !0), this.addFeature(i.element), (e = !1))
      }),
      t.addEventListener(ot.REMOVE, i => {
        e || ((e = !0), this.removeFeature(i.element), (e = !1))
      }),
      (this.featuresCollection_ = t))
  }
  clear(t) {
    if (t) {
      for (const i in this.featureChangeKeys_) this.featureChangeKeys_[i].forEach(q)
      this.featuresCollection_ ||
        ((this.featureChangeKeys_ = {}), (this.idIndex_ = {}), (this.uidIndex_ = {}))
    } else if (this.featuresRtree_) {
      const i = n => {
        this.removeFeatureInternal(n)
      }
      this.featuresRtree_.forEach(i)
      for (const n in this.nullGeometryFeatures_) this.removeFeatureInternal(this.nullGeometryFeatures_[n])
    }
    ;(this.featuresCollection_ && this.featuresCollection_.clear(),
      this.featuresRtree_ && this.featuresRtree_.clear(),
      (this.nullGeometryFeatures_ = {}))
    const e = new ye(ft.CLEAR)
    ;(this.dispatchEvent(e), this.changed())
  }
  forEachFeature(t) {
    if (this.featuresRtree_) return this.featuresRtree_.forEach(t)
    this.featuresCollection_ && this.featuresCollection_.forEach(t)
  }
  forEachFeatureAtCoordinateDirect(t, e) {
    const i = [t[0], t[1], t[0], t[1]]
    return this.forEachFeatureInExtent(i, function (n) {
      if (n.getGeometry().intersectsCoordinate(t)) return e(n)
    })
  }
  forEachFeatureInExtent(t, e) {
    if (this.featuresRtree_) return this.featuresRtree_.forEachInExtent(t, e)
    this.featuresCollection_ && this.featuresCollection_.forEach(e)
  }
  forEachFeatureIntersectingExtent(t, e) {
    return this.forEachFeatureInExtent(t, function (i) {
      if (i.getGeometry().intersectsExtent(t)) {
        const r = e(i)
        if (r) return r
      }
    })
  }
  getFeaturesCollection() {
    return this.featuresCollection_
  }
  getFeatures() {
    let t
    return (
      this.featuresCollection_
        ? (t = this.featuresCollection_.getArray().slice(0))
        : this.featuresRtree_ &&
          ((t = this.featuresRtree_.getAll()),
          Ei(this.nullGeometryFeatures_) || Vt(t, Object.values(this.nullGeometryFeatures_))),
      t
    )
  }
  getFeaturesAtCoordinate(t) {
    const e = []
    return (
      this.forEachFeatureAtCoordinateDirect(t, function (i) {
        e.push(i)
      }),
      e
    )
  }
  getFeaturesInExtent(t, e) {
    if (this.featuresRtree_) {
      if (!(e && e.canWrapX() && this.getWrapX())) return this.featuresRtree_.getInExtent(t)
      const n = Al(t, e)
      return [].concat(...n.map(r => this.featuresRtree_.getInExtent(r)))
    }
    return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : []
  }
  getClosestFeatureToCoordinate(t, e) {
    const i = t[0],
      n = t[1]
    let r = null
    const o = [NaN, NaN]
    let a = 1 / 0
    const l = [-1 / 0, -1 / 0, 1 / 0, 1 / 0]
    return (
      (e = e || le),
      this.featuresRtree_.forEachInExtent(l, function (h) {
        if (e(h)) {
          const c = h.getGeometry(),
            u = a
          if (((a = c.closestPointXY(i, n, o, a)), a < u)) {
            r = h
            const d = Math.sqrt(a)
            ;((l[0] = i - d), (l[1] = n - d), (l[2] = i + d), (l[3] = n + d))
          }
        }
      }),
      r
    )
  }
  getExtent(t) {
    return this.featuresRtree_.getExtent(t)
  }
  getFeatureById(t) {
    const e = this.idIndex_[t.toString()]
    return e !== void 0 ? e : null
  }
  getFeatureByUid(t) {
    const e = this.uidIndex_[t]
    return e !== void 0 ? e : null
  }
  getFormat() {
    return this.format_
  }
  getOverlaps() {
    return this.overlaps_
  }
  getUrl() {
    return this.url_
  }
  handleFeatureChange_(t) {
    const e = t.target,
      i = D(e),
      n = e.getGeometry()
    if (!n)
      i in this.nullGeometryFeatures_ ||
        (this.featuresRtree_ && this.featuresRtree_.remove(e), (this.nullGeometryFeatures_[i] = e))
    else {
      const o = n.getExtent()
      i in this.nullGeometryFeatures_
        ? (delete this.nullGeometryFeatures_[i], this.featuresRtree_ && this.featuresRtree_.insert(o, e))
        : this.featuresRtree_ && this.featuresRtree_.update(o, e)
    }
    const r = e.getId()
    if (r !== void 0) {
      const o = r.toString()
      this.idIndex_[o] !== e && (this.removeFromIdIndex_(e), (this.idIndex_[o] = e))
    } else (this.removeFromIdIndex_(e), (this.uidIndex_[i] = e))
    ;(this.changed(), this.dispatchEvent(new ye(ft.CHANGEFEATURE, e)))
  }
  hasFeature(t) {
    const e = t.getId()
    return e !== void 0 ? e in this.idIndex_ : D(t) in this.uidIndex_
  }
  isEmpty() {
    return this.featuresRtree_
      ? this.featuresRtree_.isEmpty() && Ei(this.nullGeometryFeatures_)
      : this.featuresCollection_
        ? this.featuresCollection_.getLength() === 0
        : !0
  }
  loadFeatures(t, e, i) {
    const n = this.loadedExtentsRtree_,
      r = this.strategy_(t, e, i)
    for (let o = 0, a = r.length; o < a; ++o) {
      const l = r[o]
      n.forEachInExtent(l, function (c) {
        return ci(c.extent, l)
      }) ||
        (++this.loadingExtentsCount_,
        this.dispatchEvent(new ye(ft.FEATURESLOADSTART)),
        this.loader_.call(
          this,
          l,
          e,
          i,
          c => {
            ;(--this.loadingExtentsCount_, this.dispatchEvent(new ye(ft.FEATURESLOADEND, void 0, c)))
          },
          () => {
            ;(--this.loadingExtentsCount_, this.dispatchEvent(new ye(ft.FEATURESLOADERROR)))
          },
        ),
        n.insert(l, { extent: l.slice() }))
    }
    this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0
  }
  refresh() {
    ;(this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh())
  }
  removeLoadedExtent(t) {
    const e = this.loadedExtentsRtree_
    let i
    ;(e.forEachInExtent(t, function (n) {
      if (Gi(n.extent, t)) return ((i = n), !0)
    }),
      i && e.remove(i))
  }
  removeFeature(t) {
    if (!t) return
    const e = D(t)
    ;(e in this.nullGeometryFeatures_
      ? delete this.nullGeometryFeatures_[e]
      : this.featuresRtree_ && this.featuresRtree_.remove(t),
      this.removeFeatureInternal(t) && this.changed())
  }
  removeFeatureInternal(t) {
    const e = D(t),
      i = this.featureChangeKeys_[e]
    if (!i) return
    ;(i.forEach(q), delete this.featureChangeKeys_[e])
    const n = t.getId()
    return (
      n !== void 0 && delete this.idIndex_[n.toString()],
      delete this.uidIndex_[e],
      this.dispatchEvent(new ye(ft.REMOVEFEATURE, t)),
      t
    )
  }
  removeFromIdIndex_(t) {
    let e = !1
    for (const i in this.idIndex_)
      if (this.idIndex_[i] === t) {
        ;(delete this.idIndex_[i], (e = !0))
        break
      }
    return e
  }
  setLoader(t) {
    this.loader_ = t
  }
  setUrl(t) {
    ;(G(this.format_, 7), (this.url_ = t), this.setLoader(Po(t, this.format_)))
  }
}
const P = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 }
class Xa extends $n {
  constructor(t, e, i) {
    ;(super(),
      (i = i || {}),
      (this.tileCoord = t),
      (this.state = e),
      (this.interimTile = null),
      (this.key = ''),
      (this.transition_ = i.transition === void 0 ? 250 : i.transition),
      (this.transitionStarts_ = {}),
      (this.interpolate = !!i.interpolate))
  }
  changed() {
    this.dispatchEvent(O.CHANGE)
  }
  release() {
    this.state === P.ERROR && this.setState(P.EMPTY)
  }
  getKey() {
    return this.key + '/' + this.tileCoord
  }
  getInterimTile() {
    if (!this.interimTile) return this
    let t = this.interimTile
    do {
      if (t.getState() == P.LOADED) return ((this.transition_ = 0), t)
      t = t.interimTile
    } while (t)
    return this
  }
  refreshInterimChain() {
    if (!this.interimTile) return
    let t = this.interimTile,
      e = this
    do {
      if (t.getState() == P.LOADED) {
        t.interimTile = null
        break
      } else
        t.getState() == P.LOADING
          ? (e = t)
          : t.getState() == P.IDLE
            ? (e.interimTile = t.interimTile)
            : (e = t)
      t = e.interimTile
    } while (t)
  }
  getTileCoord() {
    return this.tileCoord
  }
  getState() {
    return this.state
  }
  setState(t) {
    if (this.state !== P.ERROR && this.state > t) throw new Error('Tile load sequence violation')
    ;((this.state = t), this.changed())
  }
  load() {
    F()
  }
  getAlpha(t, e) {
    if (!this.transition_) return 1
    let i = this.transitionStarts_[t]
    if (!i) ((i = e), (this.transitionStarts_[t] = i))
    else if (i === -1) return 1
    const n = e - i + 1e3 / 60
    return n >= this.transition_ ? 1 : La(n / this.transition_)
  }
  inTransition(t) {
    return this.transition_ ? this.transitionStarts_[t] !== -1 : !1
  }
  endTransition(t) {
    this.transition_ && (this.transitionStarts_[t] = -1)
  }
}
class Wa extends Xa {
  constructor(t, e, i, n, r, o) {
    ;(super(t, e, o),
      (this.crossOrigin_ = n),
      (this.src_ = i),
      (this.key = i),
      (this.image_ = new Image()),
      n !== null && (this.image_.crossOrigin = n),
      (this.unlisten_ = null),
      (this.tileLoadFunction_ = r))
  }
  getImage() {
    return this.image_
  }
  setImage(t) {
    ;((this.image_ = t), (this.state = P.LOADED), this.unlistenImage_(), this.changed())
  }
  handleImageError_() {
    ;((this.state = P.ERROR), this.unlistenImage_(), (this.image_ = Yc()), this.changed())
  }
  handleImageLoad_() {
    const t = this.image_
    ;(t.naturalWidth && t.naturalHeight ? (this.state = P.LOADED) : (this.state = P.EMPTY),
      this.unlistenImage_(),
      this.changed())
  }
  load() {
    ;(this.state == P.ERROR &&
      ((this.state = P.IDLE),
      (this.image_ = new Image()),
      this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_)),
      this.state == P.IDLE &&
        ((this.state = P.LOADING),
        this.changed(),
        this.tileLoadFunction_(this, this.src_),
        (this.unlisten_ = Aa(
          this.image_,
          this.handleImageLoad_.bind(this),
          this.handleImageError_.bind(this),
        ))))
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null))
  }
}
function Yc() {
  const s = pt(1, 1)
  return ((s.fillStyle = 'rgba(0,0,0,0)'), s.fillRect(0, 0, 1, 1), s.canvas)
}
class zc {
  constructor(t, e, i) {
    ;((this.decay_ = t),
      (this.minVelocity_ = e),
      (this.delay_ = i),
      (this.points_ = []),
      (this.angle_ = 0),
      (this.initialVelocity_ = 0))
  }
  begin() {
    ;((this.points_.length = 0), (this.angle_ = 0), (this.initialVelocity_ = 0))
  }
  update(t, e) {
    this.points_.push(t, e, Date.now())
  }
  end() {
    if (this.points_.length < 6) return !1
    const t = Date.now() - this.delay_,
      e = this.points_.length - 3
    if (this.points_[e + 2] < t) return !1
    let i = e - 3
    for (; i > 0 && this.points_[i + 2] > t; ) i -= 3
    const n = this.points_[e + 2] - this.points_[i + 2]
    if (n < 1e3 / 60) return !1
    const r = this.points_[e] - this.points_[i],
      o = this.points_[e + 1] - this.points_[i + 1]
    return (
      (this.angle_ = Math.atan2(o, r)),
      (this.initialVelocity_ = Math.sqrt(r * r + o * o) / n),
      this.initialVelocity_ > this.minVelocity_
    )
  }
  getDistance() {
    return (this.minVelocity_ - this.initialVelocity_) / this.decay_
  }
  getAngle() {
    return this.angle_
  }
}
class Bc extends nr {
  constructor(t) {
    ;(super(), (this.map_ = t))
  }
  dispatchRenderEvent(t, e) {
    F()
  }
  calculateMatrices2D(t) {
    const e = t.viewState,
      i = t.coordinateToPixelTransform,
      n = t.pixelToCoordinateTransform
    ;(Re(
      i,
      t.size[0] / 2,
      t.size[1] / 2,
      1 / e.resolution,
      -1 / e.resolution,
      -e.rotation,
      -e.center[0],
      -e.center[1],
    ),
      or(n, i))
  }
  forEachFeatureAtCoordinate(t, e, i, n, r, o, a, l) {
    let h
    const c = e.viewState
    function u(E, C, T, R) {
      return r.call(o, C, E ? T : null, R)
    }
    const d = c.projection,
      f = ra(t.slice(), d),
      g = [[0, 0]]
    if (d.canWrapX() && n) {
      const E = d.getExtent(),
        C = $(E)
      g.push([-C, 0], [C, 0])
    }
    const _ = e.layerStatesArray,
      m = _.length,
      p = [],
      y = []
    for (let E = 0; E < g.length; E++)
      for (let C = m - 1; C >= 0; --C) {
        const T = _[C],
          R = T.layer
        if (R.hasRenderer() && Lr(T, c) && a.call(l, R)) {
          const v = R.getRenderer(),
            L = R.getSource()
          if (v && L) {
            const A = L.getWrapX() ? f : t,
              z = u.bind(null, T.managed)
            ;((y[0] = A[0] + g[E][0]),
              (y[1] = A[1] + g[E][1]),
              (h = v.forEachFeatureAtCoordinate(y, e, i, z, p)))
          }
          if (h) return h
        }
      }
    if (p.length === 0) return
    const x = 1 / p.length
    return (
      p.forEach((E, C) => (E.distanceSq += C * x)),
      p.sort((E, C) => E.distanceSq - C.distanceSq),
      p.some(E => (h = E.callback(E.feature, E.layer, E.geometry))),
      h
    )
  }
  hasFeatureAtCoordinate(t, e, i, n, r, o) {
    return this.forEachFeatureAtCoordinate(t, e, i, n, le, this, r, o) !== void 0
  }
  getMap() {
    return this.map_
  }
  renderFrame(t) {
    F()
  }
  flushDeclutterItems(t) {}
  scheduleExpireIconCache(t) {
    Kn.canExpireCache() && t.postRenderFunctions.push(Vc)
  }
}
function Vc(s, t) {
  Kn.expire()
}
class Kc extends Bc {
  constructor(t) {
    ;(super(t),
      (this.fontChangeListenerKey_ = j(ie, yi.PROPERTYCHANGE, t.redrawText.bind(t))),
      (this.element_ = document.createElement('div')))
    const e = this.element_.style
    ;((e.position = 'absolute'),
      (e.width = '100%'),
      (e.height = '100%'),
      (e.zIndex = '0'),
      (this.element_.className = cs + ' ol-layers'))
    const i = t.getViewport()
    ;(i.insertBefore(this.element_, i.firstChild || null),
      (this.children_ = []),
      (this.renderedVisible_ = !0),
      (this.declutterLayers_ = []))
  }
  dispatchRenderEvent(t, e) {
    const i = this.getMap()
    if (i.hasListener(t)) {
      const n = new ka(t, void 0, e)
      i.dispatchEvent(n)
    }
  }
  disposeInternal() {
    ;(q(this.fontChangeListenerKey_),
      this.element_.parentNode.removeChild(this.element_),
      super.disposeInternal())
  }
  renderFrame(t) {
    if (!t) {
      this.renderedVisible_ && ((this.element_.style.display = 'none'), (this.renderedVisible_ = !1))
      return
    }
    ;(this.calculateMatrices2D(t), this.dispatchRenderEvent(Ut.PRECOMPOSE, t))
    const e = t.layerStatesArray.sort(function (o, a) {
        return o.zIndex - a.zIndex
      }),
      i = t.viewState
    this.children_.length = 0
    const n = this.declutterLayers_
    n.length = 0
    let r = null
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o]
      t.layerIndex = o
      const h = l.layer,
        c = h.getSourceState()
      if (!Lr(l, i) || (c != 'ready' && c != 'undefined')) {
        h.unrender()
        continue
      }
      const u = h.render(t, r)
      u && (u !== r && (this.children_.push(u), (r = u)), 'getDeclutter' in h && n.push(h))
    }
    ;(this.flushDeclutterItems(t),
      Lh(this.element_, this.children_),
      this.dispatchRenderEvent(Ut.POSTCOMPOSE, t),
      this.renderedVisible_ || ((this.element_.style.display = ''), (this.renderedVisible_ = !0)),
      this.scheduleExpireIconCache(t))
  }
  flushDeclutterItems(t) {
    const e = this.declutterLayers_
    for (let i = e.length - 1; i >= 0; --i) e[i].renderDeclutter(t)
    e.length = 0
  }
}
class Ce extends at {
  constructor(t, e) {
    ;(super(t), (this.layer = e))
  }
}
const Rs = { LAYERS: 'layers' }
class Ti extends Fa {
  constructor(t) {
    t = t || {}
    const e = Object.assign({}, t)
    delete e.layers
    let i = t.layers
    ;(super(e),
      this.on,
      this.once,
      this.un,
      (this.layersListenerKeys_ = []),
      (this.listenerKeys_ = {}),
      this.addChangeListener(Rs.LAYERS, this.handleLayersChanged_),
      i
        ? Array.isArray(i)
          ? (i = new ut(i.slice(), { unique: !0 }))
          : G(typeof i.getArray == 'function', 43)
        : (i = new ut(void 0, { unique: !0 })),
      this.setLayers(i))
  }
  handleLayerChange_() {
    this.changed()
  }
  handleLayersChanged_() {
    ;(this.layersListenerKeys_.forEach(q), (this.layersListenerKeys_.length = 0))
    const t = this.getLayers()
    this.layersListenerKeys_.push(
      j(t, ot.ADD, this.handleLayersAdd_, this),
      j(t, ot.REMOVE, this.handleLayersRemove_, this),
    )
    for (const i in this.listenerKeys_) this.listenerKeys_[i].forEach(q)
    Zi(this.listenerKeys_)
    const e = t.getArray()
    for (let i = 0, n = e.length; i < n; i++) {
      const r = e[i]
      ;(this.registerLayerListeners_(r), this.dispatchEvent(new Ce('addlayer', r)))
    }
    this.changed()
  }
  registerLayerListeners_(t) {
    const e = [
      j(t, yi.PROPERTYCHANGE, this.handleLayerChange_, this),
      j(t, O.CHANGE, this.handleLayerChange_, this),
    ]
    ;(t instanceof Ti &&
      e.push(
        j(t, 'addlayer', this.handleLayerGroupAdd_, this),
        j(t, 'removelayer', this.handleLayerGroupRemove_, this),
      ),
      (this.listenerKeys_[D(t)] = e))
  }
  handleLayerGroupAdd_(t) {
    this.dispatchEvent(new Ce('addlayer', t.layer))
  }
  handleLayerGroupRemove_(t) {
    this.dispatchEvent(new Ce('removelayer', t.layer))
  }
  handleLayersAdd_(t) {
    const e = t.element
    ;(this.registerLayerListeners_(e), this.dispatchEvent(new Ce('addlayer', e)), this.changed())
  }
  handleLayersRemove_(t) {
    const e = t.element,
      i = D(e)
    ;(this.listenerKeys_[i].forEach(q),
      delete this.listenerKeys_[i],
      this.dispatchEvent(new Ce('removelayer', e)),
      this.changed())
  }
  getLayers() {
    return this.get(Rs.LAYERS)
  }
  setLayers(t) {
    const e = this.getLayers()
    if (e) {
      const i = e.getArray()
      for (let n = 0, r = i.length; n < r; ++n) this.dispatchEvent(new Ce('removelayer', i[n]))
    }
    this.set(Rs.LAYERS, t)
  }
  getLayersArray(t) {
    return (
      (t = t !== void 0 ? t : []),
      this.getLayers().forEach(function (e) {
        e.getLayersArray(t)
      }),
      t
    )
  }
  getLayerStatesArray(t) {
    const e = t !== void 0 ? t : [],
      i = e.length
    this.getLayers().forEach(function (o) {
      o.getLayerStatesArray(e)
    })
    const n = this.getLayerState()
    let r = n.zIndex
    !t && n.zIndex === void 0 && (r = 0)
    for (let o = i, a = e.length; o < a; o++) {
      const l = e[o]
      ;((l.opacity *= n.opacity),
        (l.visible = l.visible && n.visible),
        (l.maxResolution = Math.min(l.maxResolution, n.maxResolution)),
        (l.minResolution = Math.max(l.minResolution, n.minResolution)),
        (l.minZoom = Math.max(l.minZoom, n.minZoom)),
        (l.maxZoom = Math.min(l.maxZoom, n.maxZoom)),
        n.extent !== void 0 &&
          (l.extent !== void 0 ? (l.extent = Di(l.extent, n.extent)) : (l.extent = n.extent)),
        l.zIndex === void 0 && (l.zIndex = r))
    }
    return e
  }
  getSourceState() {
    return 'ready'
  }
}
class hi extends at {
  constructor(t, e, i) {
    ;(super(t), (this.map = e), (this.frameState = i !== void 0 ? i : null))
  }
}
class ne extends hi {
  constructor(t, e, i, n, r, o) {
    ;(super(t, e, r),
      (this.originalEvent = i),
      (this.pixel_ = null),
      (this.coordinate_ = null),
      (this.dragging = n !== void 0 ? n : !1),
      (this.activePointers = o))
  }
  get pixel() {
    return (this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)), this.pixel_)
  }
  set pixel(t) {
    this.pixel_ = t
  }
  get coordinate() {
    return (
      this.coordinate_ || (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)),
      this.coordinate_
    )
  }
  set coordinate(t) {
    this.coordinate_ = t
  }
  preventDefault() {
    ;(super.preventDefault(), 'preventDefault' in this.originalEvent && this.originalEvent.preventDefault())
  }
  stopPropagation() {
    ;(super.stopPropagation(),
      'stopPropagation' in this.originalEvent && this.originalEvent.stopPropagation())
  }
}
const Y = {
    SINGLECLICK: 'singleclick',
    CLICK: O.CLICK,
    DBLCLICK: O.DBLCLICK,
    POINTERDRAG: 'pointerdrag',
    POINTERMOVE: 'pointermove',
    POINTERDOWN: 'pointerdown',
    POINTERUP: 'pointerup',
    POINTEROVER: 'pointerover',
    POINTEROUT: 'pointerout',
    POINTERENTER: 'pointerenter',
    POINTERLEAVE: 'pointerleave',
    POINTERCANCEL: 'pointercancel',
  },
  $s = { POINTERMOVE: 'pointermove', POINTERDOWN: 'pointerdown' }
class Uc extends $n {
  constructor(t, e) {
    ;(super(t),
      (this.map_ = t),
      this.clickTimeoutId_,
      (this.emulateClicks_ = !1),
      (this.dragging_ = !1),
      (this.dragListenerKeys_ = []),
      (this.moveTolerance_ = e === void 0 ? 1 : e),
      (this.down_ = null))
    const i = this.map_.getViewport()
    ;((this.activePointers_ = []),
      (this.trackedTouches_ = {}),
      (this.element_ = i),
      (this.pointerdownListenerKey_ = j(i, $s.POINTERDOWN, this.handlePointerDown_, this)),
      this.originalPointerMoveEvent_,
      (this.relayedListenerKey_ = j(i, $s.POINTERMOVE, this.relayMoveEvent_, this)),
      (this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this)),
      this.element_.addEventListener(O.TOUCHMOVE, this.boundHandleTouchMove_, $o ? { passive: !1 } : !1))
  }
  emulateClick_(t) {
    let e = new ne(Y.CLICK, this.map_, t)
    ;(this.dispatchEvent(e),
      this.clickTimeoutId_ !== void 0
        ? (clearTimeout(this.clickTimeoutId_),
          (this.clickTimeoutId_ = void 0),
          (e = new ne(Y.DBLCLICK, this.map_, t)),
          this.dispatchEvent(e))
        : (this.clickTimeoutId_ = setTimeout(() => {
            this.clickTimeoutId_ = void 0
            const i = new ne(Y.SINGLECLICK, this.map_, t)
            this.dispatchEvent(i)
          }, 250)))
  }
  updateActivePointers_(t) {
    const e = t,
      i = e.pointerId
    if (e.type == Y.POINTERUP || e.type == Y.POINTERCANCEL) {
      delete this.trackedTouches_[i]
      for (const n in this.trackedTouches_)
        if (this.trackedTouches_[n].target !== e.target) {
          delete this.trackedTouches_[n]
          break
        }
    } else (e.type == Y.POINTERDOWN || e.type == Y.POINTERMOVE) && (this.trackedTouches_[i] = e)
    this.activePointers_ = Object.values(this.trackedTouches_)
  }
  handlePointerUp_(t) {
    this.updateActivePointers_(t)
    const e = new ne(Y.POINTERUP, this.map_, t, void 0, void 0, this.activePointers_)
    ;(this.dispatchEvent(e),
      this.emulateClicks_ &&
        !e.defaultPrevented &&
        !this.dragging_ &&
        this.isMouseActionButton_(t) &&
        this.emulateClick_(this.down_),
      this.activePointers_.length === 0 &&
        (this.dragListenerKeys_.forEach(q),
        (this.dragListenerKeys_.length = 0),
        (this.dragging_ = !1),
        (this.down_ = null)))
  }
  isMouseActionButton_(t) {
    return t.button === 0
  }
  handlePointerDown_(t) {
    ;((this.emulateClicks_ = this.activePointers_.length === 0), this.updateActivePointers_(t))
    const e = new ne(Y.POINTERDOWN, this.map_, t, void 0, void 0, this.activePointers_)
    if (
      (this.dispatchEvent(e),
      (this.down_ = new PointerEvent(t.type, t)),
      Object.defineProperty(this.down_, 'target', { writable: !1, value: t.target }),
      this.dragListenerKeys_.length === 0)
    ) {
      const i = this.map_.getOwnerDocument()
      ;(this.dragListenerKeys_.push(
        j(i, Y.POINTERMOVE, this.handlePointerMove_, this),
        j(i, Y.POINTERUP, this.handlePointerUp_, this),
        j(this.element_, Y.POINTERCANCEL, this.handlePointerUp_, this),
      ),
        this.element_.getRootNode &&
          this.element_.getRootNode() !== i &&
          this.dragListenerKeys_.push(
            j(this.element_.getRootNode(), Y.POINTERUP, this.handlePointerUp_, this),
          ))
    }
  }
  handlePointerMove_(t) {
    if (this.isMoving_(t)) {
      ;(this.updateActivePointers_(t), (this.dragging_ = !0))
      const e = new ne(Y.POINTERDRAG, this.map_, t, this.dragging_, void 0, this.activePointers_)
      this.dispatchEvent(e)
    }
  }
  relayMoveEvent_(t) {
    this.originalPointerMoveEvent_ = t
    const e = !!(this.down_ && this.isMoving_(t))
    this.dispatchEvent(new ne(Y.POINTERMOVE, this.map_, t, e))
  }
  handleTouchMove_(t) {
    const e = this.originalPointerMoveEvent_
    ;(!e || e.defaultPrevented) &&
      (typeof t.cancelable != 'boolean' || t.cancelable === !0) &&
      t.preventDefault()
  }
  isMoving_(t) {
    return (
      this.dragging_ ||
      Math.abs(t.clientX - this.down_.clientX) > this.moveTolerance_ ||
      Math.abs(t.clientY - this.down_.clientY) > this.moveTolerance_
    )
  }
  disposeInternal() {
    ;(this.relayedListenerKey_ && (q(this.relayedListenerKey_), (this.relayedListenerKey_ = null)),
      this.element_.removeEventListener(O.TOUCHMOVE, this.boundHandleTouchMove_),
      this.pointerdownListenerKey_ &&
        (q(this.pointerdownListenerKey_), (this.pointerdownListenerKey_ = null)),
      this.dragListenerKeys_.forEach(q),
      (this.dragListenerKeys_.length = 0),
      (this.element_ = null),
      super.disposeInternal())
  }
}
const Ee = {
    POSTRENDER: 'postrender',
    MOVESTART: 'movestart',
    MOVEEND: 'moveend',
    LOADSTART: 'loadstart',
    LOADEND: 'loadend',
  },
  ht = { LAYERGROUP: 'layergroup', SIZE: 'size', TARGET: 'target', VIEW: 'view' },
  qn = 1 / 0
class Zc {
  constructor(t, e) {
    ;((this.priorityFunction_ = t),
      (this.keyFunction_ = e),
      (this.elements_ = []),
      (this.priorities_ = []),
      (this.queuedElements_ = {}))
  }
  clear() {
    ;((this.elements_.length = 0), (this.priorities_.length = 0), Zi(this.queuedElements_))
  }
  dequeue() {
    const t = this.elements_,
      e = this.priorities_,
      i = t[0]
    t.length == 1 ? ((t.length = 0), (e.length = 0)) : ((t[0] = t.pop()), (e[0] = e.pop()), this.siftUp_(0))
    const n = this.keyFunction_(i)
    return (delete this.queuedElements_[n], i)
  }
  enqueue(t) {
    G(!(this.keyFunction_(t) in this.queuedElements_), 31)
    const e = this.priorityFunction_(t)
    return e != qn
      ? (this.elements_.push(t),
        this.priorities_.push(e),
        (this.queuedElements_[this.keyFunction_(t)] = !0),
        this.siftDown_(0, this.elements_.length - 1),
        !0)
      : !1
  }
  getCount() {
    return this.elements_.length
  }
  getLeftChildIndex_(t) {
    return t * 2 + 1
  }
  getRightChildIndex_(t) {
    return t * 2 + 2
  }
  getParentIndex_(t) {
    return (t - 1) >> 1
  }
  heapify_() {
    let t
    for (t = (this.elements_.length >> 1) - 1; t >= 0; t--) this.siftUp_(t)
  }
  isEmpty() {
    return this.elements_.length === 0
  }
  isKeyQueued(t) {
    return t in this.queuedElements_
  }
  isQueued(t) {
    return this.isKeyQueued(this.keyFunction_(t))
  }
  siftUp_(t) {
    const e = this.elements_,
      i = this.priorities_,
      n = e.length,
      r = e[t],
      o = i[t],
      a = t
    for (; t < n >> 1; ) {
      const l = this.getLeftChildIndex_(t),
        h = this.getRightChildIndex_(t),
        c = h < n && i[h] < i[l] ? h : l
      ;((e[t] = e[c]), (i[t] = i[c]), (t = c))
    }
    ;((e[t] = r), (i[t] = o), this.siftDown_(a, t))
  }
  siftDown_(t, e) {
    const i = this.elements_,
      n = this.priorities_,
      r = i[e],
      o = n[e]
    for (; e > t; ) {
      const a = this.getParentIndex_(e)
      if (n[a] > o) ((i[e] = i[a]), (n[e] = n[a]), (e = a))
      else break
    }
    ;((i[e] = r), (n[e] = o))
  }
  reprioritize() {
    const t = this.priorityFunction_,
      e = this.elements_,
      i = this.priorities_
    let n = 0
    const r = e.length
    let o, a, l
    for (a = 0; a < r; ++a)
      ((o = e[a]),
        (l = t(o)),
        l == qn ? delete this.queuedElements_[this.keyFunction_(o)] : ((i[n] = l), (e[n++] = o)))
    ;((e.length = n), (i.length = n), this.heapify_())
  }
}
class qc extends Zc {
  constructor(t, e) {
    ;(super(
      function (i) {
        return t.apply(null, i)
      },
      function (i) {
        return i[0].getKey()
      },
    ),
      (this.boundHandleTileChange_ = this.handleTileChange.bind(this)),
      (this.tileChangeCallback_ = e),
      (this.tilesLoading_ = 0),
      (this.tilesLoadingKeys_ = {}))
  }
  enqueue(t) {
    const e = super.enqueue(t)
    return (e && t[0].addEventListener(O.CHANGE, this.boundHandleTileChange_), e)
  }
  getTilesLoading() {
    return this.tilesLoading_
  }
  handleTileChange(t) {
    const e = t.target,
      i = e.getState()
    if (i === P.LOADED || i === P.ERROR || i === P.EMPTY) {
      i !== P.ERROR && e.removeEventListener(O.CHANGE, this.boundHandleTileChange_)
      const n = e.getKey()
      ;(n in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[n], --this.tilesLoading_),
        this.tileChangeCallback_())
    }
  }
  loadMoreTiles(t, e) {
    let i = 0,
      n,
      r,
      o
    for (; this.tilesLoading_ < t && i < e && this.getCount() > 0; )
      ((r = this.dequeue()[0]),
        (o = r.getKey()),
        (n = r.getState()),
        n === P.IDLE &&
          !(o in this.tilesLoadingKeys_) &&
          ((this.tilesLoadingKeys_[o] = !0), ++this.tilesLoading_, ++i, r.load()))
  }
}
function Hc(s, t, e, i, n) {
  if (!s || !(e in s.wantedTiles) || !s.wantedTiles[e][t.getKey()]) return qn
  const r = s.viewState.center,
    o = i[0] - r[0],
    a = i[1] - r[1]
  return 65536 * Math.log(n) + Math.sqrt(o * o + a * a) / n
}
class Ar extends Xt {
  constructor(t) {
    super()
    const e = t.element
    ;(e && !t.target && !e.style.pointerEvents && (e.style.pointerEvents = 'auto'),
      (this.element = e || null),
      (this.target_ = null),
      (this.map_ = null),
      (this.listenerKeys = []),
      t.render && (this.render = t.render),
      t.target && this.setTarget(t.target))
  }
  disposeInternal() {
    ;(Zs(this.element), super.disposeInternal())
  }
  getMap() {
    return this.map_
  }
  setMap(t) {
    this.map_ && Zs(this.element)
    for (let e = 0, i = this.listenerKeys.length; e < i; ++e) q(this.listenerKeys[e])
    ;((this.listenerKeys.length = 0),
      (this.map_ = t),
      t &&
        ((this.target_ ? this.target_ : t.getOverlayContainerStopEvent()).appendChild(this.element),
        this.render !== xi && this.listenerKeys.push(j(t, Ee.POSTRENDER, this.render, this)),
        t.render()))
  }
  render(t) {}
  setTarget(t) {
    this.target_ = typeof t == 'string' ? document.getElementById(t) : t
  }
}
class Jc extends Ar {
  constructor(t) {
    ;((t = t || {}),
      super({ element: document.createElement('div'), render: t.render, target: t.target }),
      (this.ulElement_ = document.createElement('ul')),
      (this.collapsed_ = t.collapsed !== void 0 ? t.collapsed : !0),
      (this.userCollapsed_ = this.collapsed_),
      (this.overrideCollapsible_ = t.collapsible !== void 0),
      (this.collapsible_ = t.collapsible !== void 0 ? t.collapsible : !0),
      this.collapsible_ || (this.collapsed_ = !1))
    const e = t.className !== void 0 ? t.className : 'ol-attribution',
      i = t.tipLabel !== void 0 ? t.tipLabel : 'Attributions',
      n = t.expandClassName !== void 0 ? t.expandClassName : e + '-expand',
      r = t.collapseLabel !== void 0 ? t.collapseLabel : '›',
      o = t.collapseClassName !== void 0 ? t.collapseClassName : e + '-collapse'
    typeof r == 'string'
      ? ((this.collapseLabel_ = document.createElement('span')),
        (this.collapseLabel_.textContent = r),
        (this.collapseLabel_.className = o))
      : (this.collapseLabel_ = r)
    const a = t.label !== void 0 ? t.label : 'i'
    typeof a == 'string'
      ? ((this.label_ = document.createElement('span')),
        (this.label_.textContent = a),
        (this.label_.className = n))
      : (this.label_ = a)
    const l = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_
    ;((this.toggleButton_ = document.createElement('button')),
      this.toggleButton_.setAttribute('type', 'button'),
      this.toggleButton_.setAttribute('aria-expanded', String(!this.collapsed_)),
      (this.toggleButton_.title = i),
      this.toggleButton_.appendChild(l),
      this.toggleButton_.addEventListener(O.CLICK, this.handleClick_.bind(this), !1))
    const h =
        e +
        ' ' +
        cs +
        ' ' +
        Sr +
        (this.collapsed_ && this.collapsible_ ? ' ' + ho : '') +
        (this.collapsible_ ? '' : ' ol-uncollapsible'),
      c = this.element
    ;((c.className = h),
      c.appendChild(this.toggleButton_),
      c.appendChild(this.ulElement_),
      (this.renderedAttributions_ = []),
      (this.renderedVisible_ = !0))
  }
  collectSourceAttributions_(t) {
    const e = Array.from(
        new Set(
          this.getMap()
            .getAllLayers()
            .flatMap(n => n.getAttributions(t)),
        ),
      ),
      i = !this.getMap()
        .getAllLayers()
        .some(n => n.getSource() && n.getSource().getAttributionsCollapsible() === !1)
    return (this.overrideCollapsible_ || this.setCollapsible(i), e)
  }
  updateElement_(t) {
    if (!t) {
      this.renderedVisible_ && ((this.element.style.display = 'none'), (this.renderedVisible_ = !1))
      return
    }
    const e = this.collectSourceAttributions_(t),
      i = e.length > 0
    if (
      (this.renderedVisible_ != i &&
        ((this.element.style.display = i ? '' : 'none'), (this.renderedVisible_ = i)),
      !ce(e, this.renderedAttributions_))
    ) {
      Fh(this.ulElement_)
      for (let n = 0, r = e.length; n < r; ++n) {
        const o = document.createElement('li')
        ;((o.innerHTML = e[n]), this.ulElement_.appendChild(o))
      }
      this.renderedAttributions_ = e
    }
  }
  handleClick_(t) {
    ;(t.preventDefault(), this.handleToggle_(), (this.userCollapsed_ = this.collapsed_))
  }
  handleToggle_() {
    ;(this.element.classList.toggle(ho),
      this.collapsed_ ? lo(this.collapseLabel_, this.label_) : lo(this.label_, this.collapseLabel_),
      (this.collapsed_ = !this.collapsed_),
      this.toggleButton_.setAttribute('aria-expanded', String(!this.collapsed_)))
  }
  getCollapsible() {
    return this.collapsible_
  }
  setCollapsible(t) {
    this.collapsible_ !== t &&
      ((this.collapsible_ = t),
      this.element.classList.toggle('ol-uncollapsible'),
      this.userCollapsed_ && this.handleToggle_())
  }
  setCollapsed(t) {
    ;((this.userCollapsed_ = t), !(!this.collapsible_ || this.collapsed_ === t) && this.handleToggle_())
  }
  getCollapsed() {
    return this.collapsed_
  }
  render(t) {
    this.updateElement_(t.frameState)
  }
}
class $c extends Ar {
  constructor(t) {
    ;((t = t || {}), super({ element: document.createElement('div'), render: t.render, target: t.target }))
    const e = t.className !== void 0 ? t.className : 'ol-rotate',
      i = t.label !== void 0 ? t.label : '⇧',
      n = t.compassClassName !== void 0 ? t.compassClassName : 'ol-compass'
    ;((this.label_ = null),
      typeof i == 'string'
        ? ((this.label_ = document.createElement('span')),
          (this.label_.className = n),
          (this.label_.textContent = i))
        : ((this.label_ = i), this.label_.classList.add(n)))
    const r = t.tipLabel ? t.tipLabel : 'Reset rotation',
      o = document.createElement('button')
    ;((o.className = e + '-reset'),
      o.setAttribute('type', 'button'),
      (o.title = r),
      o.appendChild(this.label_),
      o.addEventListener(O.CLICK, this.handleClick_.bind(this), !1))
    const a = e + ' ' + cs + ' ' + Sr,
      l = this.element
    ;((l.className = a),
      l.appendChild(o),
      (this.callResetNorth_ = t.resetNorth ? t.resetNorth : void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250),
      (this.autoHide_ = t.autoHide !== void 0 ? t.autoHide : !0),
      (this.rotation_ = void 0),
      this.autoHide_ && this.element.classList.add(mn))
  }
  handleClick_(t) {
    ;(t.preventDefault(), this.callResetNorth_ !== void 0 ? this.callResetNorth_() : this.resetNorth_())
  }
  resetNorth_() {
    const e = this.getMap().getView()
    if (!e) return
    const i = e.getRotation()
    i !== void 0 &&
      (this.duration_ > 0 && i % (2 * Math.PI) !== 0
        ? e.animate({ rotation: 0, duration: this.duration_, easing: wi })
        : e.setRotation(0))
  }
  render(t) {
    const e = t.frameState
    if (!e) return
    const i = e.viewState.rotation
    if (i != this.rotation_) {
      const n = 'rotate(' + i + 'rad)'
      if (this.autoHide_) {
        const r = this.element.classList.contains(mn)
        !r && i === 0 ? this.element.classList.add(mn) : r && i !== 0 && this.element.classList.remove(mn)
      }
      this.label_.style.transform = n
    }
    this.rotation_ = i
  }
}
class Qc extends Ar {
  constructor(t) {
    ;((t = t || {}), super({ element: document.createElement('div'), target: t.target }))
    const e = t.className !== void 0 ? t.className : 'ol-zoom',
      i = t.delta !== void 0 ? t.delta : 1,
      n = t.zoomInClassName !== void 0 ? t.zoomInClassName : e + '-in',
      r = t.zoomOutClassName !== void 0 ? t.zoomOutClassName : e + '-out',
      o = t.zoomInLabel !== void 0 ? t.zoomInLabel : '+',
      a = t.zoomOutLabel !== void 0 ? t.zoomOutLabel : '–',
      l = t.zoomInTipLabel !== void 0 ? t.zoomInTipLabel : 'Zoom in',
      h = t.zoomOutTipLabel !== void 0 ? t.zoomOutTipLabel : 'Zoom out',
      c = document.createElement('button')
    ;((c.className = n),
      c.setAttribute('type', 'button'),
      (c.title = l),
      c.appendChild(typeof o == 'string' ? document.createTextNode(o) : o),
      c.addEventListener(O.CLICK, this.handleClick_.bind(this, i), !1))
    const u = document.createElement('button')
    ;((u.className = r),
      u.setAttribute('type', 'button'),
      (u.title = h),
      u.appendChild(typeof a == 'string' ? document.createTextNode(a) : a),
      u.addEventListener(O.CLICK, this.handleClick_.bind(this, -i), !1))
    const d = e + ' ' + cs + ' ' + Sr,
      f = this.element
    ;((f.className = d),
      f.appendChild(c),
      f.appendChild(u),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250))
  }
  handleClick_(t, e) {
    ;(e.preventDefault(), this.zoomByDelta_(t))
  }
  zoomByDelta_(t) {
    const i = this.getMap().getView()
    if (!i) return
    const n = i.getZoom()
    if (n !== void 0) {
      const r = i.getConstrainedZoom(n + t)
      this.duration_ > 0
        ? (i.getAnimating() && i.cancelAnimations(),
          i.animate({ zoom: r, duration: this.duration_, easing: wi }))
        : i.setZoom(r)
    }
  }
}
function tu(s) {
  s = s || {}
  const t = new ut()
  return (
    (s.zoom !== void 0 ? s.zoom : !0) && t.push(new Qc(s.zoomOptions)),
    (s.rotate !== void 0 ? s.rotate : !0) && t.push(new $c(s.rotateOptions)),
    (s.attribution !== void 0 ? s.attribution : !0) && t.push(new Jc(s.attributionOptions)),
    t
  )
}
const Hn = { ACTIVE: 'active' }
class en extends Xt {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      t && t.handleEvent && (this.handleEvent = t.handleEvent),
      (this.map_ = null),
      this.setActive(!0))
  }
  getActive() {
    return this.get(Hn.ACTIVE)
  }
  getMap() {
    return this.map_
  }
  handleEvent(t) {
    return !0
  }
  setActive(t) {
    this.set(Hn.ACTIVE, t)
  }
  setMap(t) {
    this.map_ = t
  }
}
function eu(s, t, e) {
  const i = s.getCenterInternal()
  if (i) {
    const n = [i[0] + t[0], i[1] + t[1]]
    s.animateInternal({ duration: e !== void 0 ? e : 250, easing: Uh, center: s.getConstrainedCenter(n) })
  }
}
function Or(s, t, e, i) {
  const n = s.getZoom()
  if (n === void 0) return
  const r = s.getConstrainedZoom(n + t),
    o = s.getResolutionForZoom(r)
  ;(s.getAnimating() && s.cancelAnimations(),
    s.animate({ resolution: o, anchor: e, duration: i !== void 0 ? i : 250, easing: wi }))
}
class iu extends en {
  constructor(t) {
    ;(super(),
      (t = t || {}),
      (this.delta_ = t.delta ? t.delta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250))
  }
  handleEvent(t) {
    let e = !1
    if (t.type == Y.DBLCLICK) {
      const i = t.originalEvent,
        n = t.map,
        r = t.coordinate,
        o = i.shiftKey ? -this.delta_ : this.delta_,
        a = n.getView()
      ;(Or(a, o, r, this.duration_), i.preventDefault(), (e = !0))
    }
    return !e
  }
}
class ue extends en {
  constructor(t) {
    ;((t = t || {}),
      super(t),
      t.handleDownEvent && (this.handleDownEvent = t.handleDownEvent),
      t.handleDragEvent && (this.handleDragEvent = t.handleDragEvent),
      t.handleMoveEvent && (this.handleMoveEvent = t.handleMoveEvent),
      t.handleUpEvent && (this.handleUpEvent = t.handleUpEvent),
      t.stopDown && (this.stopDown = t.stopDown),
      (this.handlingDownUpSequence = !1),
      (this.targetPointers = []))
  }
  getPointerCount() {
    return this.targetPointers.length
  }
  handleDownEvent(t) {
    return !1
  }
  handleDragEvent(t) {}
  handleEvent(t) {
    if (!t.originalEvent) return !0
    let e = !1
    if ((this.updateTrackedPointers_(t), this.handlingDownUpSequence)) {
      if (t.type == Y.POINTERDRAG) (this.handleDragEvent(t), t.originalEvent.preventDefault())
      else if (t.type == Y.POINTERUP) {
        const i = this.handleUpEvent(t)
        this.handlingDownUpSequence = i && this.targetPointers.length > 0
      }
    } else if (t.type == Y.POINTERDOWN) {
      const i = this.handleDownEvent(t)
      ;((this.handlingDownUpSequence = i), (e = this.stopDown(i)))
    } else t.type == Y.POINTERMOVE && this.handleMoveEvent(t)
    return !e
  }
  handleMoveEvent(t) {}
  handleUpEvent(t) {
    return !1
  }
  stopDown(t) {
    return t
  }
  updateTrackedPointers_(t) {
    t.activePointers && (this.targetPointers = t.activePointers)
  }
}
function kr(s) {
  const t = s.length
  let e = 0,
    i = 0
  for (let n = 0; n < t; n++) ((e += s[n].clientX), (i += s[n].clientY))
  return { clientX: e / t, clientY: i / t }
}
function Qs(s) {
  const t = arguments
  return function (e) {
    let i = !0
    for (let n = 0, r = t.length; n < r && ((i = i && t[n](e)), !!i); ++n);
    return i
  }
}
const nu = function (s) {
    const t = s.originalEvent
    return t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  su = function (s) {
    const t = s.originalEvent
    return t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  ru = function (s) {
    const t = s.map.getTargetElement(),
      e = s.map.getOwnerDocument().activeElement
    return t.contains(e)
  },
  Ya = function (s) {
    return s.map.getTargetElement().hasAttribute('tabindex') ? ru(s) : !0
  },
  Ui = le,
  za = function (s) {
    const t = s.originalEvent
    return t.button == 0 && !(Tl && Ho && t.ctrlKey)
  },
  ou = Be,
  au = function (s) {
    return s.type == Y.SINGLECLICK
  },
  Dr = function (s) {
    const t = s.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  lu = function (s) {
    const t = s.originalEvent
    return Ho ? t.metaKey : t.ctrlKey
  },
  Ba = function (s) {
    const t = s.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  Va = function (s) {
    const t = s.originalEvent,
      e = t.target.tagName
    return e !== 'INPUT' && e !== 'SELECT' && e !== 'TEXTAREA' && !t.target.isContentEditable
  },
  Is = function (s) {
    const t = s.originalEvent
    return (G(t !== void 0, 56), t.pointerType == 'mouse')
  },
  Ka = function (s) {
    const t = s.originalEvent
    return (G(t !== void 0, 56), t.isPrimary && t.button === 0)
  }
class hu extends ue {
  constructor(t) {
    ;(super({ stopDown: Be }),
      (t = t || {}),
      (this.kinetic_ = t.kinetic),
      (this.lastCentroid = null),
      this.lastPointersCount_,
      (this.panning_ = !1))
    const e = t.condition ? t.condition : Qs(Dr, Ka)
    ;((this.condition_ = t.onFocusOnly ? Qs(Ya, e) : e), (this.noKinetic_ = !1))
  }
  handleDragEvent(t) {
    const e = t.map
    this.panning_ || ((this.panning_ = !0), e.getView().beginInteraction())
    const i = this.targetPointers,
      n = e.getEventPixel(kr(i))
    if (i.length == this.lastPointersCount_) {
      if ((this.kinetic_ && this.kinetic_.update(n[0], n[1]), this.lastCentroid)) {
        const r = [this.lastCentroid[0] - n[0], n[1] - this.lastCentroid[1]],
          a = t.map.getView()
        ;(Ul(r, a.getResolution()), dr(r, a.getRotation()), a.adjustCenterInternal(r))
      }
    } else this.kinetic_ && this.kinetic_.begin()
    ;((this.lastCentroid = n), (this.lastPointersCount_ = i.length), t.originalEvent.preventDefault())
  }
  handleUpEvent(t) {
    const e = t.map,
      i = e.getView()
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const n = this.kinetic_.getDistance(),
          r = this.kinetic_.getAngle(),
          o = i.getCenterInternal(),
          a = e.getPixelFromCoordinateInternal(o),
          l = e.getCoordinateFromPixelInternal([a[0] - n * Math.cos(r), a[1] - n * Math.sin(r)])
        i.animateInternal({ center: i.getConstrainedCenter(l), duration: 500, easing: wi })
      }
      return (this.panning_ && ((this.panning_ = !1), i.endInteraction()), !1)
    }
    return (this.kinetic_ && this.kinetic_.begin(), (this.lastCentroid = null), !0)
  }
  handleDownEvent(t) {
    if (this.targetPointers.length > 0 && this.condition_(t)) {
      const i = t.map.getView()
      return (
        (this.lastCentroid = null),
        i.getAnimating() && i.cancelAnimations(),
        this.kinetic_ && this.kinetic_.begin(),
        (this.noKinetic_ = this.targetPointers.length > 1),
        !0
      )
    }
    return !1
  }
}
class cu extends ue {
  constructor(t) {
    ;((t = t || {}),
      super({ stopDown: Be }),
      (this.condition_ = t.condition ? t.condition : su),
      (this.lastAngle_ = void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250))
  }
  handleDragEvent(t) {
    if (!Is(t)) return
    const e = t.map,
      i = e.getView()
    if (i.getConstraints().rotation === Fr) return
    const n = e.getSize(),
      r = t.pixel,
      o = Math.atan2(n[1] / 2 - r[1], r[0] - n[0] / 2)
    if (this.lastAngle_ !== void 0) {
      const a = o - this.lastAngle_
      i.adjustRotationInternal(-a)
    }
    this.lastAngle_ = o
  }
  handleUpEvent(t) {
    return Is(t) ? (t.map.getView().endInteraction(this.duration_), !1) : !0
  }
  handleDownEvent(t) {
    return Is(t) && za(t) && this.condition_(t)
      ? (t.map.getView().beginInteraction(), (this.lastAngle_ = void 0), !0)
      : !1
  }
}
class uu extends nr {
  constructor(t) {
    ;(super(),
      (this.geometry_ = null),
      (this.element_ = document.createElement('div')),
      (this.element_.style.position = 'absolute'),
      (this.element_.style.pointerEvents = 'auto'),
      (this.element_.className = 'ol-box ' + t),
      (this.map_ = null),
      (this.startPixel_ = null),
      (this.endPixel_ = null))
  }
  disposeInternal() {
    this.setMap(null)
  }
  render_() {
    const t = this.startPixel_,
      e = this.endPixel_,
      i = 'px',
      n = this.element_.style
    ;((n.left = Math.min(t[0], e[0]) + i),
      (n.top = Math.min(t[1], e[1]) + i),
      (n.width = Math.abs(e[0] - t[0]) + i),
      (n.height = Math.abs(e[1] - t[1]) + i))
  }
  setMap(t) {
    if (this.map_) {
      this.map_.getOverlayContainer().removeChild(this.element_)
      const e = this.element_.style
      ;((e.left = 'inherit'), (e.top = 'inherit'), (e.width = 'inherit'), (e.height = 'inherit'))
    }
    ;((this.map_ = t), this.map_ && this.map_.getOverlayContainer().appendChild(this.element_))
  }
  setPixels(t, e) {
    ;((this.startPixel_ = t), (this.endPixel_ = e), this.createOrUpdateGeometry(), this.render_())
  }
  createOrUpdateGeometry() {
    const t = this.startPixel_,
      e = this.endPixel_,
      n = [t, [t[0], e[1]], e, [e[0], t[1]]].map(this.map_.getCoordinateFromPixelInternal, this.map_)
    ;((n[4] = n[0].slice()),
      this.geometry_ ? this.geometry_.setCoordinates([n]) : (this.geometry_ = new It([n])))
  }
  getGeometry() {
    return this.geometry_
  }
}
const Cn = { BOXSTART: 'boxstart', BOXDRAG: 'boxdrag', BOXEND: 'boxend', BOXCANCEL: 'boxcancel' }
class bs extends at {
  constructor(t, e, i) {
    ;(super(t), (this.coordinate = e), (this.mapBrowserEvent = i))
  }
}
class du extends ue {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      (t = t || {}),
      (this.box_ = new uu(t.className || 'ol-dragbox')),
      (this.minArea_ = t.minArea !== void 0 ? t.minArea : 64),
      t.onBoxEnd && (this.onBoxEnd = t.onBoxEnd),
      (this.startPixel_ = null),
      (this.condition_ = t.condition ? t.condition : za),
      (this.boxEndCondition_ = t.boxEndCondition ? t.boxEndCondition : this.defaultBoxEndCondition))
  }
  defaultBoxEndCondition(t, e, i) {
    const n = i[0] - e[0],
      r = i[1] - e[1]
    return n * n + r * r >= this.minArea_
  }
  getGeometry() {
    return this.box_.getGeometry()
  }
  handleDragEvent(t) {
    ;(this.box_.setPixels(this.startPixel_, t.pixel), this.dispatchEvent(new bs(Cn.BOXDRAG, t.coordinate, t)))
  }
  handleUpEvent(t) {
    this.box_.setMap(null)
    const e = this.boxEndCondition_(t, this.startPixel_, t.pixel)
    return (
      e && this.onBoxEnd(t),
      this.dispatchEvent(new bs(e ? Cn.BOXEND : Cn.BOXCANCEL, t.coordinate, t)),
      !1
    )
  }
  handleDownEvent(t) {
    return this.condition_(t)
      ? ((this.startPixel_ = t.pixel),
        this.box_.setMap(t.map),
        this.box_.setPixels(this.startPixel_, this.startPixel_),
        this.dispatchEvent(new bs(Cn.BOXSTART, t.coordinate, t)),
        !0)
      : !1
  }
  onBoxEnd(t) {}
}
class fu extends du {
  constructor(t) {
    t = t || {}
    const e = t.condition ? t.condition : Ba
    ;(super({ condition: e, className: t.className || 'ol-dragzoom', minArea: t.minArea }),
      (this.duration_ = t.duration !== void 0 ? t.duration : 200),
      (this.out_ = t.out !== void 0 ? t.out : !1))
  }
  onBoxEnd(t) {
    const i = this.getMap().getView()
    let n = this.getGeometry()
    if (this.out_) {
      const r = i.rotatedExtentForGeometry(n),
        o = i.getResolutionForExtentInternal(r),
        a = i.getResolution() / o
      ;((n = n.clone()), n.scale(a * a))
    }
    i.fitInternal(n, { duration: this.duration_, easing: wi })
  }
}
const Pe = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', DOWN: 'ArrowDown' }
class gu extends en {
  constructor(t) {
    ;(super(),
      (t = t || {}),
      (this.defaultCondition_ = function (e) {
        return Dr(e) && Va(e)
      }),
      (this.condition_ = t.condition !== void 0 ? t.condition : this.defaultCondition_),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100),
      (this.pixelDelta_ = t.pixelDelta !== void 0 ? t.pixelDelta : 128))
  }
  handleEvent(t) {
    let e = !1
    if (t.type == O.KEYDOWN) {
      const i = t.originalEvent,
        n = i.key
      if (this.condition_(t) && (n == Pe.DOWN || n == Pe.LEFT || n == Pe.RIGHT || n == Pe.UP)) {
        const o = t.map.getView(),
          a = o.getResolution() * this.pixelDelta_
        let l = 0,
          h = 0
        n == Pe.DOWN ? (h = -a) : n == Pe.LEFT ? (l = -a) : n == Pe.RIGHT ? (l = a) : (h = a)
        const c = [l, h]
        ;(dr(c, o.getRotation()), eu(o, c, this.duration_), i.preventDefault(), (e = !0))
      }
    }
    return !e
  }
}
class _u extends en {
  constructor(t) {
    ;(super(),
      (t = t || {}),
      (this.condition_ = t.condition
        ? t.condition
        : function (e) {
            return !lu(e) && Va(e)
          }),
      (this.delta_ = t.delta ? t.delta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100))
  }
  handleEvent(t) {
    let e = !1
    if (t.type == O.KEYDOWN || t.type == O.KEYPRESS) {
      const i = t.originalEvent,
        n = i.key
      if (this.condition_(t) && (n === '+' || n === '-')) {
        const r = t.map,
          o = n === '+' ? this.delta_ : -this.delta_,
          a = r.getView()
        ;(Or(a, o, void 0, this.duration_), i.preventDefault(), (e = !0))
      }
    }
    return !e
  }
}
class mu extends en {
  constructor(t) {
    ;((t = t || {}),
      super(t),
      (this.totalDelta_ = 0),
      (this.lastDelta_ = 0),
      (this.maxDelta_ = t.maxDelta !== void 0 ? t.maxDelta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250),
      (this.timeout_ = t.timeout !== void 0 ? t.timeout : 80),
      (this.useAnchor_ = t.useAnchor !== void 0 ? t.useAnchor : !0),
      (this.constrainResolution_ = t.constrainResolution !== void 0 ? t.constrainResolution : !1))
    const e = t.condition ? t.condition : Ui
    ;((this.condition_ = t.onFocusOnly ? Qs(Ya, e) : e),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      this.timeoutId_,
      (this.mode_ = void 0),
      (this.trackpadEventGap_ = 400),
      this.trackpadTimeoutId_,
      (this.deltaPerZoom_ = 300))
  }
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0
    const t = this.getMap()
    if (!t) return
    t.getView().endInteraction(void 0, this.lastDelta_ ? (this.lastDelta_ > 0 ? 1 : -1) : 0, this.lastAnchor_)
  }
  handleEvent(t) {
    if (!this.condition_(t) || t.type !== O.WHEEL) return !0
    const i = t.map,
      n = t.originalEvent
    ;(n.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.coordinate))
    let r
    if (
      (t.type == O.WHEEL &&
        ((r = n.deltaY),
        Cl && n.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (r /= Jo),
        n.deltaMode === WheelEvent.DOM_DELTA_LINE && (r *= 40)),
      r === 0)
    )
      return !1
    this.lastDelta_ = r
    const o = Date.now()
    ;(this.startTime_ === void 0 && (this.startTime_ = o),
      (!this.mode_ || o - this.startTime_ > this.trackpadEventGap_) &&
        (this.mode_ = Math.abs(r) < 4 ? 'trackpad' : 'wheel'))
    const a = i.getView()
    if (this.mode_ === 'trackpad' && !(a.getConstrainResolution() || this.constrainResolution_))
      return (
        this.trackpadTimeoutId_
          ? clearTimeout(this.trackpadTimeoutId_)
          : (a.getAnimating() && a.cancelAnimations(), a.beginInteraction()),
        (this.trackpadTimeoutId_ = setTimeout(this.endInteraction_.bind(this), this.timeout_)),
        a.adjustZoom(-r / this.deltaPerZoom_, this.lastAnchor_),
        (this.startTime_ = o),
        !1
      )
    this.totalDelta_ += r
    const l = Math.max(this.timeout_ - (o - this.startTime_), 0)
    return (
      clearTimeout(this.timeoutId_),
      (this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, i), l)),
      !1
    )
  }
  handleWheelZoom_(t) {
    const e = t.getView()
    e.getAnimating() && e.cancelAnimations()
    let i =
      -tt(this.totalDelta_, -this.maxDelta_ * this.deltaPerZoom_, this.maxDelta_ * this.deltaPerZoom_) /
      this.deltaPerZoom_
    ;((e.getConstrainResolution() || this.constrainResolution_) && (i = i ? (i > 0 ? 1 : -1) : 0),
      Or(e, i, this.lastAnchor_, this.duration_),
      (this.mode_ = void 0),
      (this.totalDelta_ = 0),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      (this.timeoutId_ = void 0))
  }
  setMouseAnchor(t) {
    ;((this.useAnchor_ = t), t || (this.lastAnchor_ = null))
  }
}
class pu extends ue {
  constructor(t) {
    t = t || {}
    const e = t
    ;(e.stopDown || (e.stopDown = Be),
      super(e),
      (this.anchor_ = null),
      (this.lastAngle_ = void 0),
      (this.rotating_ = !1),
      (this.rotationDelta_ = 0),
      (this.threshold_ = t.threshold !== void 0 ? t.threshold : 0.3),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250))
  }
  handleDragEvent(t) {
    let e = 0
    const i = this.targetPointers[0],
      n = this.targetPointers[1],
      r = Math.atan2(n.clientY - i.clientY, n.clientX - i.clientX)
    if (this.lastAngle_ !== void 0) {
      const l = r - this.lastAngle_
      ;((this.rotationDelta_ += l),
        !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = !0),
        (e = l))
    }
    this.lastAngle_ = r
    const o = t.map,
      a = o.getView()
    a.getConstraints().rotation !== Fr &&
      ((this.anchor_ = o.getCoordinateFromPixelInternal(o.getEventPixel(kr(this.targetPointers)))),
      this.rotating_ && (o.render(), a.adjustRotationInternal(e, this.anchor_)))
  }
  handleUpEvent(t) {
    return this.targetPointers.length < 2 ? (t.map.getView().endInteraction(this.duration_), !1) : !0
  }
  handleDownEvent(t) {
    if (this.targetPointers.length >= 2) {
      const e = t.map
      return (
        (this.anchor_ = null),
        (this.lastAngle_ = void 0),
        (this.rotating_ = !1),
        (this.rotationDelta_ = 0),
        this.handlingDownUpSequence || e.getView().beginInteraction(),
        !0
      )
    }
    return !1
  }
}
class yu extends ue {
  constructor(t) {
    t = t || {}
    const e = t
    ;(e.stopDown || (e.stopDown = Be),
      super(e),
      (this.anchor_ = null),
      (this.duration_ = t.duration !== void 0 ? t.duration : 400),
      (this.lastDistance_ = void 0),
      (this.lastScaleDelta_ = 1))
  }
  handleDragEvent(t) {
    let e = 1
    const i = this.targetPointers[0],
      n = this.targetPointers[1],
      r = i.clientX - n.clientX,
      o = i.clientY - n.clientY,
      a = Math.sqrt(r * r + o * o)
    ;(this.lastDistance_ !== void 0 && (e = this.lastDistance_ / a), (this.lastDistance_ = a))
    const l = t.map,
      h = l.getView()
    ;(e != 1 && (this.lastScaleDelta_ = e),
      (this.anchor_ = l.getCoordinateFromPixelInternal(l.getEventPixel(kr(this.targetPointers)))),
      l.render(),
      h.adjustResolutionInternal(e, this.anchor_))
  }
  handleUpEvent(t) {
    if (this.targetPointers.length < 2) {
      const i = t.map.getView(),
        n = this.lastScaleDelta_ > 1 ? 1 : -1
      return (i.endInteraction(this.duration_, n), !1)
    }
    return !0
  }
  handleDownEvent(t) {
    if (this.targetPointers.length >= 2) {
      const e = t.map
      return (
        (this.anchor_ = null),
        (this.lastDistance_ = void 0),
        (this.lastScaleDelta_ = 1),
        this.handlingDownUpSequence || e.getView().beginInteraction(),
        !0
      )
    }
    return !1
  }
}
function xu(s) {
  s = s || {}
  const t = new ut(),
    e = new zc(-0.005, 0.05, 100)
  return (
    (s.altShiftDragRotate !== void 0 ? s.altShiftDragRotate : !0) && t.push(new cu()),
    (s.doubleClickZoom !== void 0 ? s.doubleClickZoom : !0) &&
      t.push(new iu({ delta: s.zoomDelta, duration: s.zoomDuration })),
    (s.dragPan !== void 0 ? s.dragPan : !0) && t.push(new hu({ onFocusOnly: s.onFocusOnly, kinetic: e })),
    (s.pinchRotate !== void 0 ? s.pinchRotate : !0) && t.push(new pu()),
    (s.pinchZoom !== void 0 ? s.pinchZoom : !0) && t.push(new yu({ duration: s.zoomDuration })),
    (s.keyboard !== void 0 ? s.keyboard : !0) &&
      (t.push(new gu()), t.push(new _u({ delta: s.zoomDelta, duration: s.zoomDuration }))),
    (s.mouseWheelZoom !== void 0 ? s.mouseWheelZoom : !0) &&
      t.push(new mu({ onFocusOnly: s.onFocusOnly, duration: s.zoomDuration })),
    (s.shiftDragZoom !== void 0 ? s.shiftDragZoom : !0) && t.push(new fu({ duration: s.zoomDuration })),
    t
  )
}
function Ua(s) {
  if (s instanceof ds) {
    s.setMapInternal(null)
    return
  }
  s instanceof Ti && s.getLayers().forEach(Ua)
}
function Za(s, t) {
  if (s instanceof ds) {
    s.setMapInternal(t)
    return
  }
  if (s instanceof Ti) {
    const e = s.getLayers().getArray()
    for (let i = 0, n = e.length; i < n; ++i) Za(e[i], t)
  }
}
class Eu extends Xt {
  constructor(t) {
    ;(super(), (t = t || {}), this.on, this.once, this.un)
    const e = Cu(t)
    ;(this.renderComplete_,
      (this.loaded_ = !0),
      (this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this)),
      (this.maxTilesLoading_ = t.maxTilesLoading !== void 0 ? t.maxTilesLoading : 16),
      (this.pixelRatio_ = t.pixelRatio !== void 0 ? t.pixelRatio : Jo),
      this.postRenderTimeoutHandle_,
      this.animationDelayKey_,
      (this.animationDelay_ = this.animationDelay_.bind(this)),
      (this.coordinateToPixelTransform_ = Kt()),
      (this.pixelToCoordinateTransform_ = Kt()),
      (this.frameIndex_ = 0),
      (this.frameState_ = null),
      (this.previousExtent_ = null),
      (this.viewPropertyListenerKey_ = null),
      (this.viewChangeListenerKey_ = null),
      (this.layerGroupPropertyListenerKeys_ = null),
      (this.viewport_ = document.createElement('div')),
      (this.viewport_.className = 'ol-viewport' + ('ontouchstart' in window ? ' ol-touch' : '')),
      (this.viewport_.style.position = 'relative'),
      (this.viewport_.style.overflow = 'hidden'),
      (this.viewport_.style.width = '100%'),
      (this.viewport_.style.height = '100%'),
      (this.overlayContainer_ = document.createElement('div')),
      (this.overlayContainer_.style.position = 'absolute'),
      (this.overlayContainer_.style.zIndex = '0'),
      (this.overlayContainer_.style.width = '100%'),
      (this.overlayContainer_.style.height = '100%'),
      (this.overlayContainer_.style.pointerEvents = 'none'),
      (this.overlayContainer_.className = 'ol-overlaycontainer'),
      this.viewport_.appendChild(this.overlayContainer_),
      (this.overlayContainerStopEvent_ = document.createElement('div')),
      (this.overlayContainerStopEvent_.style.position = 'absolute'),
      (this.overlayContainerStopEvent_.style.zIndex = '0'),
      (this.overlayContainerStopEvent_.style.width = '100%'),
      (this.overlayContainerStopEvent_.style.height = '100%'),
      (this.overlayContainerStopEvent_.style.pointerEvents = 'none'),
      (this.overlayContainerStopEvent_.className = 'ol-overlaycontainer-stopevent'),
      this.viewport_.appendChild(this.overlayContainerStopEvent_),
      (this.mapBrowserEventHandler_ = null),
      (this.moveTolerance_ = t.moveTolerance),
      (this.keyboardEventTarget_ = e.keyboardEventTarget),
      (this.targetChangeHandlerKeys_ = null),
      (this.targetElement_ = null),
      (this.resizeObserver_ = new ResizeObserver(() => this.updateSize())),
      (this.controls = e.controls || tu()),
      (this.interactions = e.interactions || xu({ onFocusOnly: !0 })),
      (this.overlays_ = e.overlays),
      (this.overlayIdIndex_ = {}),
      (this.renderer_ = null),
      (this.postRenderFunctions_ = []),
      (this.tileQueue_ = new qc(this.getTilePriority.bind(this), this.handleTileChange_.bind(this))),
      this.addChangeListener(ht.LAYERGROUP, this.handleLayerGroupChanged_),
      this.addChangeListener(ht.VIEW, this.handleViewChanged_),
      this.addChangeListener(ht.SIZE, this.handleSizeChanged_),
      this.addChangeListener(ht.TARGET, this.handleTargetChanged_),
      this.setProperties(e.values))
    const i = this
    ;(t.view &&
      !(t.view instanceof Yt) &&
      t.view.then(function (n) {
        i.setView(new Yt(n))
      }),
      this.controls.addEventListener(ot.ADD, n => {
        n.element.setMap(this)
      }),
      this.controls.addEventListener(ot.REMOVE, n => {
        n.element.setMap(null)
      }),
      this.interactions.addEventListener(ot.ADD, n => {
        n.element.setMap(this)
      }),
      this.interactions.addEventListener(ot.REMOVE, n => {
        n.element.setMap(null)
      }),
      this.overlays_.addEventListener(ot.ADD, n => {
        this.addOverlayInternal_(n.element)
      }),
      this.overlays_.addEventListener(ot.REMOVE, n => {
        const r = n.element.getId()
        ;(r !== void 0 && delete this.overlayIdIndex_[r.toString()], n.element.setMap(null))
      }),
      this.controls.forEach(n => {
        n.setMap(this)
      }),
      this.interactions.forEach(n => {
        n.setMap(this)
      }),
      this.overlays_.forEach(this.addOverlayInternal_.bind(this)))
  }
  addControl(t) {
    this.getControls().push(t)
  }
  addInteraction(t) {
    this.getInteractions().push(t)
  }
  addLayer(t) {
    this.getLayerGroup().getLayers().push(t)
  }
  handleLayerAdd_(t) {
    Za(t.layer, this)
  }
  addOverlay(t) {
    this.getOverlays().push(t)
  }
  addOverlayInternal_(t) {
    const e = t.getId()
    ;(e !== void 0 && (this.overlayIdIndex_[e.toString()] = t), t.setMap(this))
  }
  disposeInternal() {
    ;(this.controls.clear(),
      this.interactions.clear(),
      this.overlays_.clear(),
      this.resizeObserver_.disconnect(),
      this.setTarget(null),
      super.disposeInternal())
  }
  forEachFeatureAtPixel(t, e, i) {
    if (!this.frameState_ || !this.renderer_) return
    const n = this.getCoordinateFromPixelInternal(t)
    i = i !== void 0 ? i : {}
    const r = i.hitTolerance !== void 0 ? i.hitTolerance : 0,
      o = i.layerFilter !== void 0 ? i.layerFilter : le,
      a = i.checkWrapped !== !1
    return this.renderer_.forEachFeatureAtCoordinate(n, this.frameState_, r, a, e, null, o, null)
  }
  getFeaturesAtPixel(t, e) {
    const i = []
    return (
      this.forEachFeatureAtPixel(
        t,
        function (n) {
          i.push(n)
        },
        e,
      ),
      i
    )
  }
  getAllLayers() {
    const t = []
    function e(i) {
      i.forEach(function (n) {
        n instanceof Ti ? e(n.getLayers()) : t.push(n)
      })
    }
    return (e(this.getLayers()), t)
  }
  hasFeatureAtPixel(t, e) {
    if (!this.frameState_ || !this.renderer_) return !1
    const i = this.getCoordinateFromPixelInternal(t)
    e = e !== void 0 ? e : {}
    const n = e.layerFilter !== void 0 ? e.layerFilter : le,
      r = e.hitTolerance !== void 0 ? e.hitTolerance : 0,
      o = e.checkWrapped !== !1
    return this.renderer_.hasFeatureAtCoordinate(i, this.frameState_, r, o, n, null)
  }
  getEventCoordinate(t) {
    return this.getCoordinateFromPixel(this.getEventPixel(t))
  }
  getEventCoordinateInternal(t) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(t))
  }
  getEventPixel(t) {
    const i = this.viewport_.getBoundingClientRect(),
      n = this.getSize(),
      r = i.width / n[0],
      o = i.height / n[1],
      a = 'changedTouches' in t ? t.changedTouches[0] : t
    return [(a.clientX - i.left) / r, (a.clientY - i.top) / o]
  }
  getTarget() {
    return this.get(ht.TARGET)
  }
  getTargetElement() {
    return this.targetElement_
  }
  getCoordinateFromPixel(t) {
    return We(this.getCoordinateFromPixelInternal(t), this.getView().getProjection())
  }
  getCoordinateFromPixelInternal(t) {
    const e = this.frameState_
    return e ? rt(e.pixelToCoordinateTransform, t.slice()) : null
  }
  getControls() {
    return this.controls
  }
  getOverlays() {
    return this.overlays_
  }
  getOverlayById(t) {
    const e = this.overlayIdIndex_[t.toString()]
    return e !== void 0 ? e : null
  }
  getInteractions() {
    return this.interactions
  }
  getLayerGroup() {
    return this.get(ht.LAYERGROUP)
  }
  setLayers(t) {
    const e = this.getLayerGroup()
    if (t instanceof ut) {
      e.setLayers(t)
      return
    }
    const i = e.getLayers()
    ;(i.clear(), i.extend(t))
  }
  getLayers() {
    return this.getLayerGroup().getLayers()
  }
  getLoadingOrNotReady() {
    const t = this.getLayerGroup().getLayerStatesArray()
    for (let e = 0, i = t.length; e < i; ++e) {
      const n = t[e]
      if (!n.visible) continue
      const r = n.layer.getRenderer()
      if (r && !r.ready) return !0
      const o = n.layer.getSource()
      if (o && o.loading) return !0
    }
    return !1
  }
  getPixelFromCoordinate(t) {
    const e = J(t, this.getView().getProjection())
    return this.getPixelFromCoordinateInternal(e)
  }
  getPixelFromCoordinateInternal(t) {
    const e = this.frameState_
    return e ? rt(e.coordinateToPixelTransform, t.slice(0, 2)) : null
  }
  getRenderer() {
    return this.renderer_
  }
  getSize() {
    return this.get(ht.SIZE)
  }
  getView() {
    return this.get(ht.VIEW)
  }
  getViewport() {
    return this.viewport_
  }
  getOverlayContainer() {
    return this.overlayContainer_
  }
  getOverlayContainerStopEvent() {
    return this.overlayContainerStopEvent_
  }
  getOwnerDocument() {
    const t = this.getTargetElement()
    return t ? t.ownerDocument : document
  }
  getTilePriority(t, e, i, n) {
    return Hc(this.frameState_, t, e, i, n)
  }
  handleBrowserEvent(t, e) {
    e = e || t.type
    const i = new ne(e, this, t)
    this.handleMapBrowserEvent(i)
  }
  handleMapBrowserEvent(t) {
    if (!this.frameState_) return
    const e = t.originalEvent,
      i = e.type
    if (i === $s.POINTERDOWN || i === O.WHEEL || i === O.KEYDOWN) {
      const n = this.getOwnerDocument(),
        r = this.viewport_.getRootNode ? this.viewport_.getRootNode() : n,
        o = e.target
      if (this.overlayContainerStopEvent_.contains(o) || !(r === n ? n.documentElement : r).contains(o))
        return
    }
    if (((t.frameState = this.frameState_), this.dispatchEvent(t) !== !1)) {
      const n = this.getInteractions().getArray().slice()
      for (let r = n.length - 1; r >= 0; r--) {
        const o = n[r]
        if (o.getMap() !== this || !o.getActive() || !this.getTargetElement()) continue
        if (!o.handleEvent(t) || t.propagationStopped) break
      }
    }
  }
  handlePostRender() {
    const t = this.frameState_,
      e = this.tileQueue_
    if (!e.isEmpty()) {
      let n = this.maxTilesLoading_,
        r = n
      if (t) {
        const o = t.viewHints
        if (o[ct.ANIMATING] || o[ct.INTERACTING]) {
          const a = Date.now() - t.time > 8
          ;((n = a ? 0 : 8), (r = a ? 0 : 2))
        }
      }
      e.getTilesLoading() < n && (e.reprioritize(), e.loadMoreTiles(n, r))
    }
    t &&
      this.renderer_ &&
      !t.animate &&
      (this.renderComplete_ === !0
        ? (this.hasListener(Ut.RENDERCOMPLETE) && this.renderer_.dispatchRenderEvent(Ut.RENDERCOMPLETE, t),
          this.loaded_ === !1 && ((this.loaded_ = !0), this.dispatchEvent(new hi(Ee.LOADEND, this, t))))
        : this.loaded_ === !0 && ((this.loaded_ = !1), this.dispatchEvent(new hi(Ee.LOADSTART, this, t))))
    const i = this.postRenderFunctions_
    for (let n = 0, r = i.length; n < r; ++n) i[n](this, t)
    i.length = 0
  }
  handleSizeChanged_() {
    ;(this.getView() && !this.getView().getAnimating() && this.getView().resolveConstraints(0), this.render())
  }
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let i = 0, n = this.targetChangeHandlerKeys_.length; i < n; ++i)
        q(this.targetChangeHandlerKeys_[i])
      ;((this.targetChangeHandlerKeys_ = null),
        this.viewport_.removeEventListener(O.CONTEXTMENU, this.boundHandleBrowserEvent_),
        this.viewport_.removeEventListener(O.WHEEL, this.boundHandleBrowserEvent_),
        this.mapBrowserEventHandler_.dispose(),
        (this.mapBrowserEventHandler_ = null),
        Zs(this.viewport_))
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_)
      const i = this.targetElement_.getRootNode()
      ;(i instanceof ShadowRoot && this.resizeObserver_.unobserve(i.host), this.setSize(void 0))
    }
    const t = this.getTarget(),
      e = typeof t == 'string' ? document.getElementById(t) : t
    if (((this.targetElement_ = e), !e))
      (this.renderer_ &&
        (clearTimeout(this.postRenderTimeoutHandle_),
        (this.postRenderTimeoutHandle_ = void 0),
        (this.postRenderFunctions_.length = 0),
        this.renderer_.dispose(),
        (this.renderer_ = null)),
        this.animationDelayKey_ &&
          (cancelAnimationFrame(this.animationDelayKey_), (this.animationDelayKey_ = void 0)))
    else {
      ;(e.appendChild(this.viewport_),
        this.renderer_ || (this.renderer_ = new Kc(this)),
        (this.mapBrowserEventHandler_ = new Uc(this, this.moveTolerance_)))
      for (const r in Y)
        this.mapBrowserEventHandler_.addEventListener(Y[r], this.handleMapBrowserEvent.bind(this))
      ;(this.viewport_.addEventListener(O.CONTEXTMENU, this.boundHandleBrowserEvent_, !1),
        this.viewport_.addEventListener(O.WHEEL, this.boundHandleBrowserEvent_, $o ? { passive: !1 } : !1))
      const i = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : e
      this.targetChangeHandlerKeys_ = [
        j(i, O.KEYDOWN, this.handleBrowserEvent, this),
        j(i, O.KEYPRESS, this.handleBrowserEvent, this),
      ]
      const n = e.getRootNode()
      ;(n instanceof ShadowRoot && this.resizeObserver_.observe(n.host), this.resizeObserver_.observe(e))
    }
    this.updateSize()
  }
  handleTileChange_() {
    this.render()
  }
  handleViewPropertyChanged_() {
    this.render()
  }
  handleViewChanged_() {
    ;(this.viewPropertyListenerKey_ &&
      (q(this.viewPropertyListenerKey_), (this.viewPropertyListenerKey_ = null)),
      this.viewChangeListenerKey_ && (q(this.viewChangeListenerKey_), (this.viewChangeListenerKey_ = null)))
    const t = this.getView()
    ;(t &&
      (this.updateViewportSize_(),
      (this.viewPropertyListenerKey_ = j(t, yi.PROPERTYCHANGE, this.handleViewPropertyChanged_, this)),
      (this.viewChangeListenerKey_ = j(t, O.CHANGE, this.handleViewPropertyChanged_, this)),
      t.resolveConstraints(0)),
      this.render())
  }
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ &&
      (this.layerGroupPropertyListenerKeys_.forEach(q), (this.layerGroupPropertyListenerKeys_ = null))
    const t = this.getLayerGroup()
    ;(t &&
      (this.handleLayerAdd_(new Ce('addlayer', t)),
      (this.layerGroupPropertyListenerKeys_ = [
        j(t, yi.PROPERTYCHANGE, this.render, this),
        j(t, O.CHANGE, this.render, this),
        j(t, 'addlayer', this.handleLayerAdd_, this),
        j(t, 'removelayer', this.handleLayerRemove_, this),
      ])),
      this.render())
  }
  isRendered() {
    return !!this.frameState_
  }
  animationDelay_() {
    ;((this.animationDelayKey_ = void 0), this.renderFrame_(Date.now()))
  }
  renderSync() {
    ;(this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_), this.animationDelay_())
  }
  redrawText() {
    const t = this.getLayerGroup().getLayerStatesArray()
    for (let e = 0, i = t.length; e < i; ++e) {
      const n = t[e].layer
      n.hasRenderer() && n.getRenderer().handleFontsChanged()
    }
  }
  render() {
    this.renderer_ &&
      this.animationDelayKey_ === void 0 &&
      (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_))
  }
  flushDeclutterItems() {
    const t = this.frameState_
    t && this.renderer_.flushDeclutterItems(t)
  }
  removeControl(t) {
    return this.getControls().remove(t)
  }
  removeInteraction(t) {
    return this.getInteractions().remove(t)
  }
  removeLayer(t) {
    return this.getLayerGroup().getLayers().remove(t)
  }
  handleLayerRemove_(t) {
    Ua(t.layer)
  }
  removeOverlay(t) {
    return this.getOverlays().remove(t)
  }
  renderFrame_(t) {
    const e = this.getSize(),
      i = this.getView(),
      n = this.frameState_
    let r = null
    if (e !== void 0 && oo(e) && i && i.isDef()) {
      const o = i.getHints(this.frameState_ ? this.frameState_.viewHints : void 0),
        a = i.getState()
      if (
        ((r = {
          animate: !1,
          coordinateToPixelTransform: this.coordinateToPixelTransform_,
          declutterTree: null,
          extent: Ws(a.center, a.resolution, a.rotation, e),
          index: this.frameIndex_++,
          layerIndex: 0,
          layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
          pixelRatio: this.pixelRatio_,
          pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
          postRenderFunctions: [],
          size: e,
          tileQueue: this.tileQueue_,
          time: t,
          usedTiles: {},
          viewState: a,
          viewHints: o,
          wantedTiles: {},
          mapId: D(this),
          renderTargets: {},
        }),
        a.nextCenter && a.nextResolution)
      ) {
        const l = isNaN(a.nextRotation) ? a.rotation : a.nextRotation
        r.nextExtent = Ws(a.nextCenter, a.nextResolution, l, e)
      }
    }
    ;((this.frameState_ = r),
      this.renderer_.renderFrame(r),
      r &&
        (r.animate && this.render(),
        Array.prototype.push.apply(this.postRenderFunctions_, r.postRenderFunctions),
        n &&
          (!this.previousExtent_ || (!ns(this.previousExtent_) && !Gi(r.extent, this.previousExtent_))) &&
          (this.dispatchEvent(new hi(Ee.MOVESTART, this, n)),
          (this.previousExtent_ = Ji(this.previousExtent_))),
        this.previousExtent_ &&
          !r.viewHints[ct.ANIMATING] &&
          !r.viewHints[ct.INTERACTING] &&
          !Gi(r.extent, this.previousExtent_) &&
          (this.dispatchEvent(new hi(Ee.MOVEEND, this, r)), ta(r.extent, this.previousExtent_))),
      this.dispatchEvent(new hi(Ee.POSTRENDER, this, r)),
      (this.renderComplete_ =
        this.hasListener(Ee.LOADSTART) || this.hasListener(Ee.LOADEND) || this.hasListener(Ut.RENDERCOMPLETE)
          ? !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady()
          : void 0),
      this.postRenderTimeoutHandle_ ||
        (this.postRenderTimeoutHandle_ = setTimeout(() => {
          ;((this.postRenderTimeoutHandle_ = void 0), this.handlePostRender())
        }, 0)))
  }
  setLayerGroup(t) {
    const e = this.getLayerGroup()
    ;(e && this.handleLayerRemove_(new Ce('removelayer', e)), this.set(ht.LAYERGROUP, t))
  }
  setSize(t) {
    this.set(ht.SIZE, t)
  }
  setTarget(t) {
    this.set(ht.TARGET, t)
  }
  setView(t) {
    if (!t || t instanceof Yt) {
      this.set(ht.VIEW, t)
      return
    }
    this.set(ht.VIEW, new Yt())
    const e = this
    t.then(function (i) {
      e.setView(new Yt(i))
    })
  }
  updateSize() {
    const t = this.getTargetElement()
    let e
    if (t) {
      const n = getComputedStyle(t),
        r =
          t.offsetWidth -
          parseFloat(n.borderLeftWidth) -
          parseFloat(n.paddingLeft) -
          parseFloat(n.paddingRight) -
          parseFloat(n.borderRightWidth),
        o =
          t.offsetHeight -
          parseFloat(n.borderTopWidth) -
          parseFloat(n.paddingTop) -
          parseFloat(n.paddingBottom) -
          parseFloat(n.borderBottomWidth)
      !isNaN(r) &&
        !isNaN(o) &&
        ((e = [r, o]),
        !oo(e) &&
          (t.offsetWidth || t.offsetHeight || t.getClientRects().length) &&
          aa("No map visible because the map container's width or height are 0."))
    }
    const i = this.getSize()
    e && (!i || !ce(e, i)) && (this.setSize(e), this.updateViewportSize_())
  }
  updateViewportSize_() {
    const t = this.getView()
    if (t) {
      let e
      const i = getComputedStyle(this.viewport_)
      ;(i.width && i.height && (e = [parseInt(i.width, 10), parseInt(i.height, 10)]), t.setViewportSize(e))
    }
  }
}
function Cu(s) {
  let t = null
  s.keyboardEventTarget !== void 0 &&
    (t =
      typeof s.keyboardEventTarget == 'string'
        ? document.getElementById(s.keyboardEventTarget)
        : s.keyboardEventTarget)
  const e = {},
    i = s.layers && typeof s.layers.getLayers == 'function' ? s.layers : new Ti({ layers: s.layers })
  ;((e[ht.LAYERGROUP] = i),
    (e[ht.TARGET] = s.target),
    (e[ht.VIEW] = s.view instanceof Yt ? s.view : new Yt()))
  let n
  s.controls !== void 0 &&
    (Array.isArray(s.controls)
      ? (n = new ut(s.controls.slice()))
      : (G(typeof s.controls.getArray == 'function', 47), (n = s.controls)))
  let r
  s.interactions !== void 0 &&
    (Array.isArray(s.interactions)
      ? (r = new ut(s.interactions.slice()))
      : (G(typeof s.interactions.getArray == 'function', 48), (r = s.interactions)))
  let o
  return (
    s.overlays !== void 0
      ? Array.isArray(s.overlays)
        ? (o = new ut(s.overlays.slice()))
        : (G(typeof s.overlays.getArray == 'function', 49), (o = s.overlays))
      : (o = new ut()),
    { controls: n, interactions: r, keyboardEventTarget: t, overlays: o, values: e }
  )
}
class wu {
  constructor(t) {
    ;((this.highWaterMark = t !== void 0 ? t : 2048),
      (this.count_ = 0),
      (this.entries_ = {}),
      (this.oldest_ = null),
      (this.newest_ = null))
  }
  canExpireCache() {
    return this.highWaterMark > 0 && this.getCount() > this.highWaterMark
  }
  expireCache(t) {
    for (; this.canExpireCache(); ) this.pop()
  }
  clear() {
    ;((this.count_ = 0), (this.entries_ = {}), (this.oldest_ = null), (this.newest_ = null))
  }
  containsKey(t) {
    return this.entries_.hasOwnProperty(t)
  }
  forEach(t) {
    let e = this.oldest_
    for (; e; ) (t(e.value_, e.key_, this), (e = e.newer))
  }
  get(t, e) {
    const i = this.entries_[t]
    return (
      G(i !== void 0, 15),
      i === this.newest_ ||
        (i === this.oldest_
          ? ((this.oldest_ = this.oldest_.newer), (this.oldest_.older = null))
          : ((i.newer.older = i.older), (i.older.newer = i.newer)),
        (i.newer = null),
        (i.older = this.newest_),
        (this.newest_.newer = i),
        (this.newest_ = i)),
      i.value_
    )
  }
  remove(t) {
    const e = this.entries_[t]
    return (
      G(e !== void 0, 15),
      e === this.newest_
        ? ((this.newest_ = e.older), this.newest_ && (this.newest_.newer = null))
        : e === this.oldest_
          ? ((this.oldest_ = e.newer), this.oldest_ && (this.oldest_.older = null))
          : ((e.newer.older = e.older), (e.older.newer = e.newer)),
      delete this.entries_[t],
      --this.count_,
      e.value_
    )
  }
  getCount() {
    return this.count_
  }
  getKeys() {
    const t = new Array(this.count_)
    let e = 0,
      i
    for (i = this.newest_; i; i = i.older) t[e++] = i.key_
    return t
  }
  getValues() {
    const t = new Array(this.count_)
    let e = 0,
      i
    for (i = this.newest_; i; i = i.older) t[e++] = i.value_
    return t
  }
  peekLast() {
    return this.oldest_.value_
  }
  peekLastKey() {
    return this.oldest_.key_
  }
  peekFirstKey() {
    return this.newest_.key_
  }
  peek(t) {
    if (this.containsKey(t)) return this.entries_[t].value_
  }
  pop() {
    const t = this.oldest_
    return (
      delete this.entries_[t.key_],
      t.newer && (t.newer.older = null),
      (this.oldest_ = t.newer),
      this.oldest_ || (this.newest_ = null),
      --this.count_,
      t.value_
    )
  }
  replace(t, e) {
    ;(this.get(t), (this.entries_[t].value_ = e))
  }
  set(t, e) {
    G(!(t in this.entries_), 16)
    const i = { key_: t, newer: null, older: this.newest_, value_: e }
    ;(this.newest_ ? (this.newest_.newer = i) : (this.oldest_ = i),
      (this.newest_ = i),
      (this.entries_[t] = i),
      ++this.count_)
  }
  setSize(t) {
    this.highWaterMark = t
  }
}
function Mo(s, t, e, i) {
  return i !== void 0 ? ((i[0] = s), (i[1] = t), (i[2] = e), i) : [s, t, e]
}
function fs(s, t, e) {
  return s + '/' + t + '/' + e
}
function qa(s) {
  return fs(s[0], s[1], s[2])
}
function Tu(s) {
  return s.split('/').map(Number)
}
function Su(s) {
  return (s[1] << s[0]) + s[2]
}
function vu(s, t) {
  const e = s[0],
    i = s[1],
    n = s[2]
  if (t.getMinZoom() > e || e > t.getMaxZoom()) return !1
  const r = t.getFullTileRange(e)
  return r ? r.containsXY(i, n) : !0
}
class Ha extends wu {
  clear() {
    for (; this.getCount() > 0; ) this.pop().release()
    super.clear()
  }
  expireCache(t) {
    for (; this.canExpireCache() && !(this.peekLast().getKey() in t); ) this.pop().release()
  }
  pruneExceptNewestZ() {
    if (this.getCount() === 0) return
    const t = this.peekFirstKey(),
      i = Tu(t)[0]
    this.forEach(n => {
      n.tileCoord[0] !== i && (this.remove(qa(n.tileCoord)), n.release())
    })
  }
}
class jr {
  constructor(t, e, i, n) {
    ;((this.minX = t), (this.maxX = e), (this.minY = i), (this.maxY = n))
  }
  contains(t) {
    return this.containsXY(t[1], t[2])
  }
  containsTileRange(t) {
    return this.minX <= t.minX && t.maxX <= this.maxX && this.minY <= t.minY && t.maxY <= this.maxY
  }
  containsXY(t, e) {
    return this.minX <= t && t <= this.maxX && this.minY <= e && e <= this.maxY
  }
  equals(t) {
    return this.minX == t.minX && this.minY == t.minY && this.maxX == t.maxX && this.maxY == t.maxY
  }
  extend(t) {
    ;(t.minX < this.minX && (this.minX = t.minX),
      t.maxX > this.maxX && (this.maxX = t.maxX),
      t.minY < this.minY && (this.minY = t.minY),
      t.maxY > this.maxY && (this.maxY = t.maxY))
  }
  getHeight() {
    return this.maxY - this.minY + 1
  }
  getSize() {
    return [this.getWidth(), this.getHeight()]
  }
  getWidth() {
    return this.maxX - this.minX + 1
  }
  intersects(t) {
    return this.minX <= t.maxX && this.maxX >= t.minX && this.minY <= t.maxY && this.maxY >= t.minY
  }
}
function ni(s, t, e, i, n) {
  return n !== void 0 ? ((n.minX = s), (n.maxX = t), (n.minY = e), (n.maxY = i), n) : new jr(s, t, e, i)
}
class Ja {
  constructor() {
    ;((this.dataProjection = void 0),
      (this.defaultFeatureProjection = void 0),
      (this.supportedMediaTypes = null))
  }
  getReadOptions(t, e) {
    if (e) {
      let i = e.dataProjection ? it(e.dataProjection) : this.readProjection(t)
      ;(e.extent && i && i.getUnits() === 'tile-pixels' && ((i = it(i)), i.setWorldExtent(e.extent)),
        (e = { dataProjection: i, featureProjection: e.featureProjection }))
    }
    return this.adaptOptions(e)
  }
  adaptOptions(t) {
    return Object.assign(
      { dataProjection: this.dataProjection, featureProjection: this.defaultFeatureProjection },
      t,
    )
  }
  getType() {
    return F()
  }
  readFeature(t, e) {
    return F()
  }
  readFeatures(t, e) {
    return F()
  }
  readGeometry(t, e) {
    return F()
  }
  readProjection(t) {
    return F()
  }
  writeFeature(t, e) {
    return F()
  }
  writeFeatures(t, e) {
    return F()
  }
  writeGeometry(t, e) {
    return F()
  }
}
function Jn(s, t, e) {
  const i = e ? it(e.featureProjection) : null,
    n = e ? it(e.dataProjection) : null
  let r
  if (
    (i && n && !Ae(i, n) ? (r = (t ? s.clone() : s).transform(t ? i : n, t ? n : i)) : (r = s),
    t && e && e.decimals !== void 0)
  ) {
    const o = Math.pow(10, e.decimals),
      a = function (l) {
        for (let h = 0, c = l.length; h < c; ++h) l[h] = Math.round(l[h] * o) / o
        return l
      }
    ;(r === s && (r = s.clone()), r.applyTransform(a))
  }
  return r
}
class Ye extends be {
  constructor(t, e, i) {
    if (
      (super(), (this.ends_ = []), (this.maxDelta_ = -1), (this.maxDeltaRevision_ = -1), Array.isArray(t[0]))
    )
      this.setCoordinates(t, e)
    else if (e !== void 0 && i) (this.setFlatCoordinates(e, t), (this.ends_ = i))
    else {
      let n = this.getLayout()
      const r = t,
        o = [],
        a = []
      for (let l = 0, h = r.length; l < h; ++l) {
        const c = r[l]
        ;(l === 0 && (n = c.getLayout()), Vt(o, c.getFlatCoordinates()), a.push(o.length))
      }
      ;(this.setFlatCoordinates(n, o), (this.ends_ = a))
    }
  }
  appendLineString(t) {
    ;(this.flatCoordinates
      ? Vt(this.flatCoordinates, t.getFlatCoordinates().slice())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed())
  }
  clone() {
    const t = new Ye(this.flatCoordinates.slice(), this.layout, this.ends_.slice())
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, n) {
    return n < Ve(this.getExtent(), t, e)
      ? n
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(yr(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Er(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !1, t, e, i, n))
  }
  getCoordinateAtM(t, e, i) {
    return (this.layout != 'XYM' && this.layout != 'XYZM') || this.flatCoordinates.length === 0
      ? null
      : ((e = e !== void 0 ? e : !1),
        (i = i !== void 0 ? i : !1),
        wh(this.flatCoordinates, 0, this.ends_, this.stride, t, e, i))
  }
  getCoordinates() {
    return Ni(this.flatCoordinates, 0, this.ends_, this.stride)
  }
  getEnds() {
    return this.ends_
  }
  getLineString(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new Gt(this.flatCoordinates.slice(t === 0 ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout)
  }
  getLineStrings() {
    const t = this.flatCoordinates,
      e = this.ends_,
      i = this.layout,
      n = []
    let r = 0
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o],
        h = new Gt(t.slice(r, l), i)
      ;(n.push(h), (r = l))
    }
    return n
  }
  getFlatMidpoints() {
    const t = [],
      e = this.flatCoordinates
    let i = 0
    const n = this.ends_,
      r = this.stride
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = n[o],
        h = Ca(e, i, l, r, 0.5)
      ;(Vt(t, h), (i = l))
    }
    return t
  }
  getSimplifiedGeometryInternal(t) {
    const e = [],
      i = []
    return ((e.length = lh(this.flatCoordinates, 0, this.ends_, this.stride, t, e, 0, i)), new Ye(e, 'XY', i))
  }
  getType() {
    return 'MultiLineString'
  }
  intersectsExtent(t) {
    return _h(this.flatCoordinates, 0, this.ends_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []))
    const i = Cr(this.flatCoordinates, 0, t, this.stride, this.ends_)
    ;((this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1]), this.changed())
  }
}
class Si extends be {
  constructor(t, e) {
    ;(super(), e && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
  }
  appendPoint(t) {
    ;(this.flatCoordinates
      ? Vt(this.flatCoordinates, t.getFlatCoordinates())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.changed())
  }
  clone() {
    const t = new Si(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, n) {
    if (n < Ve(this.getExtent(), t, e)) return n
    const r = this.flatCoordinates,
      o = this.stride
    for (let a = 0, l = r.length; a < l; a += o) {
      const h = se(t, e, r[a], r[a + 1])
      if (h < n) {
        n = h
        for (let c = 0; c < o; ++c) i[c] = r[a + c]
        i.length = o
      }
    }
    return n
  }
  getCoordinates() {
    return Te(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getPoint(t) {
    const e = this.flatCoordinates ? this.flatCoordinates.length / this.stride : 0
    return t < 0 || e <= t
      ? null
      : new At(this.flatCoordinates.slice(t * this.stride, (t + 1) * this.stride), this.layout)
  }
  getPoints() {
    const t = this.flatCoordinates,
      e = this.layout,
      i = this.stride,
      n = []
    for (let r = 0, o = t.length; r < o; r += i) {
      const a = new At(t.slice(r, r + i), e)
      n.push(a)
    }
    return n
  }
  getType() {
    return 'MultiPoint'
  }
  intersectsExtent(t) {
    const e = this.flatCoordinates,
      i = this.stride
    for (let n = 0, r = e.length; n < r; n += i) {
      const o = e[n],
        a = e[n + 1]
      if (ar(t, o, a)) return !0
    }
    return !1
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = os(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
function Ru(s, t, e, i) {
  const n = []
  let r = Ct()
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((r = ea(s, t, l[0], i)), n.push((r[0] + r[2]) / 2, (r[1] + r[3]) / 2), (t = l[l.length - 1]))
  }
  return n
}
class ze extends be {
  constructor(t, e, i) {
    if (
      (super(),
      (this.endss_ = []),
      (this.flatInteriorPointsRevision_ = -1),
      (this.flatInteriorPoints_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      !i && !Array.isArray(t[0]))
    ) {
      let n = this.getLayout()
      const r = t,
        o = [],
        a = []
      for (let l = 0, h = r.length; l < h; ++l) {
        const c = r[l]
        l === 0 && (n = c.getLayout())
        const u = o.length,
          d = c.getEnds()
        for (let f = 0, g = d.length; f < g; ++f) d[f] += u
        ;(Vt(o, c.getFlatCoordinates()), a.push(d))
      }
      ;((e = n), (t = o), (i = a))
    }
    e !== void 0 && i ? (this.setFlatCoordinates(e, t), (this.endss_ = i)) : this.setCoordinates(t, e)
  }
  appendPolygon(t) {
    let e
    if (!this.flatCoordinates)
      ((this.flatCoordinates = t.getFlatCoordinates().slice()), (e = t.getEnds().slice()), this.endss_.push())
    else {
      const i = this.flatCoordinates.length
      ;(Vt(this.flatCoordinates, t.getFlatCoordinates()), (e = t.getEnds().slice()))
      for (let n = 0, r = e.length; n < r; ++n) e[n] += i
    }
    ;(this.endss_.push(e), this.changed())
  }
  clone() {
    const t = this.endss_.length,
      e = new Array(t)
    for (let n = 0; n < t; ++n) e[n] = this.endss_[n].slice()
    const i = new ze(this.flatCoordinates.slice(), this.layout, e)
    return (i.applyProperties(this), i)
  }
  closestPointXY(t, e, i, n) {
    return n < Ve(this.getExtent(), t, e)
      ? n
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(rh(this.flatCoordinates, 0, this.endss_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        oh(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, this.maxDelta_, !0, t, e, i, n))
  }
  containsXY(t, e) {
    return fh(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t, e)
  }
  getArea() {
    return uh(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride)
  }
  getCoordinates(t) {
    let e
    return (
      t !== void 0
        ? ((e = this.getOrientedFlatCoordinates().slice()), so(e, 0, this.endss_, this.stride, t))
        : (e = this.flatCoordinates),
      Vs(e, 0, this.endss_, this.stride)
    )
  }
  getEndss() {
    return this.endss_
  }
  getFlatInteriorPoints() {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      const t = Ru(this.flatCoordinates, 0, this.endss_, this.stride)
      ;((this.flatInteriorPoints_ = gh(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t)),
        (this.flatInteriorPointsRevision_ = this.getRevision()))
    }
    return this.flatInteriorPoints_
  }
  getInteriorPoints() {
    return new Si(this.getFlatInteriorPoints().slice(), 'XYM')
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates
      ;(yh(t, 0, this.endss_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = so(
            this.orientedFlatCoordinates_,
            0,
            this.endss_,
            this.stride,
          ))),
        (this.orientedRevision_ = this.getRevision()))
    }
    return this.orientedFlatCoordinates_
  }
  getSimplifiedGeometryInternal(t) {
    const e = [],
      i = []
    return (
      (e.length = ch(this.flatCoordinates, 0, this.endss_, this.stride, Math.sqrt(t), e, 0, i)),
      new ze(e, 'XY', i)
    )
  }
  getPolygon(t) {
    if (t < 0 || this.endss_.length <= t) return null
    let e
    if (t === 0) e = 0
    else {
      const r = this.endss_[t - 1]
      e = r[r.length - 1]
    }
    const i = this.endss_[t].slice(),
      n = i[i.length - 1]
    if (e !== 0) for (let r = 0, o = i.length; r < o; ++r) i[r] -= e
    return new It(this.flatCoordinates.slice(e, n), this.layout, i)
  }
  getPolygons() {
    const t = this.layout,
      e = this.flatCoordinates,
      i = this.endss_,
      n = []
    let r = 0
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o].slice(),
        h = l[l.length - 1]
      if (r !== 0) for (let u = 0, d = l.length; u < d; ++u) l[u] -= r
      const c = new It(e.slice(r, h), t, l)
      ;(n.push(c), (r = h))
    }
    return n
  }
  getType() {
    return 'MultiPolygon'
  }
  intersectsExtent(t) {
    return mh(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 3), this.flatCoordinates || (this.flatCoordinates = []))
    const i = ah(this.flatCoordinates, 0, t, this.stride, this.endss_)
    if (i.length === 0) this.flatCoordinates.length = 0
    else {
      const n = i[i.length - 1]
      this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1]
    }
    this.changed()
  }
}
class nn extends be {
  constructor(t, e, i) {
    ;(super(),
      i !== void 0 && e === void 0
        ? this.setFlatCoordinates(i, t)
        : ((e = e || 0), this.setCenterAndRadius(t, e, i)))
  }
  clone() {
    const t = new nn(this.flatCoordinates.slice(), void 0, this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, n) {
    const r = this.flatCoordinates,
      o = t - r[0],
      a = e - r[1],
      l = o * o + a * a
    if (l < n) {
      if (l === 0) for (let h = 0; h < this.stride; ++h) i[h] = r[h]
      else {
        const h = this.getRadius() / Math.sqrt(l)
        ;((i[0] = r[0] + h * o), (i[1] = r[1] + h * a))
        for (let c = 2; c < this.stride; ++c) i[c] = r[c]
      }
      return ((i.length = this.stride), l)
    }
    return n
  }
  containsXY(t, e) {
    const i = this.flatCoordinates,
      n = t - i[0],
      r = e - i[1]
    return n * n + r * r <= this.getRadiusSquared_()
  }
  getCenter() {
    return this.flatCoordinates.slice(0, this.stride)
  }
  computeExtent(t) {
    const e = this.flatCoordinates,
      i = e[this.stride] - e[0]
    return he(e[0] - i, e[1] - i, e[0] + i, e[1] + i, t)
  }
  getRadius() {
    return Math.sqrt(this.getRadiusSquared_())
  }
  getRadiusSquared_() {
    const t = this.flatCoordinates[this.stride] - this.flatCoordinates[0],
      e = this.flatCoordinates[this.stride + 1] - this.flatCoordinates[1]
    return t * t + e * e
  }
  getType() {
    return 'Circle'
  }
  intersectsExtent(t) {
    const e = this.getExtent()
    if (mt(t, e)) {
      const i = this.getCenter()
      return (t[0] <= i[0] && t[2] >= i[0]) || (t[1] <= i[1] && t[3] >= i[1])
        ? !0
        : hr(t, this.intersectsCoordinate.bind(this))
    }
    return !1
  }
  setCenter(t) {
    const e = this.stride,
      i = this.flatCoordinates[e] - this.flatCoordinates[0],
      n = t.slice()
    n[e] = n[0] + i
    for (let r = 1; r < e; ++r) n[e + r] = t[r]
    ;(this.setFlatCoordinates(this.layout, n), this.changed())
  }
  setCenterAndRadius(t, e, i) {
    ;(this.setLayout(i, t, 0), this.flatCoordinates || (this.flatCoordinates = []))
    const n = this.flatCoordinates
    let r = ua(n, 0, t, this.stride)
    n[r++] = n[0] + e
    for (let o = 1, a = this.stride; o < a; ++o) n[r++] = n[o]
    ;((n.length = r), this.changed())
  }
  getCoordinates() {
    return null
  }
  setCoordinates(t, e) {}
  setRadius(t) {
    ;((this.flatCoordinates[this.stride] = this.flatCoordinates[0] + t), this.changed())
  }
  rotate(t, e) {
    const i = this.getCenter(),
      n = this.getStride()
    ;(this.setCenter(mr(i, 0, i.length, n, t, e, i)), this.changed())
  }
}
nn.prototype.transform
class Ie extends ca {
  constructor(t) {
    ;(super(), (this.geometries_ = t || null), (this.changeEventsKeys_ = []), this.listenGeometriesChange_())
  }
  unlistenGeometriesChange_() {
    ;(this.changeEventsKeys_.forEach(q), (this.changeEventsKeys_.length = 0))
  }
  listenGeometriesChange_() {
    if (this.geometries_)
      for (let t = 0, e = this.geometries_.length; t < e; ++t)
        this.changeEventsKeys_.push(j(this.geometries_[t], O.CHANGE, this.changed, this))
  }
  clone() {
    const t = new Ie(null)
    return (t.setGeometries(this.geometries_), t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, n) {
    if (n < Ve(this.getExtent(), t, e)) return n
    const r = this.geometries_
    for (let o = 0, a = r.length; o < a; ++o) n = r[o].closestPointXY(t, e, i, n)
    return n
  }
  containsXY(t, e) {
    const i = this.geometries_
    for (let n = 0, r = i.length; n < r; ++n) if (i[n].containsXY(t, e)) return !0
    return !1
  }
  computeExtent(t) {
    Ji(t)
    const e = this.geometries_
    for (let i = 0, n = e.length; i < n; ++i) lr(t, e[i].getExtent())
    return t
  }
  getGeometries() {
    return Ao(this.geometries_)
  }
  getGeometriesArray() {
    return this.geometries_
  }
  getGeometriesArrayRecursive() {
    let t = []
    const e = this.geometries_
    for (let i = 0, n = e.length; i < n; ++i)
      e[i].getType() === this.getType() ? (t = t.concat(e[i].getGeometriesArrayRecursive())) : t.push(e[i])
    return t
  }
  getSimplifiedGeometry(t) {
    if (
      (this.simplifiedGeometryRevision !== this.getRevision() &&
        ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = this.getRevision())),
      t < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
          t < this.simplifiedGeometryMaxMinSquaredTolerance))
    )
      return this
    const e = [],
      i = this.geometries_
    let n = !1
    for (let r = 0, o = i.length; r < o; ++r) {
      const a = i[r],
        l = a.getSimplifiedGeometry(t)
      ;(e.push(l), l !== a && (n = !0))
    }
    if (n) {
      const r = new Ie(null)
      return (r.setGeometriesArray(e), r)
    }
    return ((this.simplifiedGeometryMaxMinSquaredTolerance = t), this)
  }
  getType() {
    return 'GeometryCollection'
  }
  intersectsExtent(t) {
    const e = this.geometries_
    for (let i = 0, n = e.length; i < n; ++i) if (e[i].intersectsExtent(t)) return !0
    return !1
  }
  isEmpty() {
    return this.geometries_.length === 0
  }
  rotate(t, e) {
    const i = this.geometries_
    for (let n = 0, r = i.length; n < r; ++n) i[n].rotate(t, e)
    this.changed()
  }
  scale(t, e, i) {
    i || (i = Xe(this.getExtent()))
    const n = this.geometries_
    for (let r = 0, o = n.length; r < o; ++r) n[r].scale(t, e, i)
    this.changed()
  }
  setGeometries(t) {
    this.setGeometriesArray(Ao(t))
  }
  setGeometriesArray(t) {
    ;(this.unlistenGeometriesChange_(),
      (this.geometries_ = t),
      this.listenGeometriesChange_(),
      this.changed())
  }
  applyTransform(t) {
    const e = this.geometries_
    for (let i = 0, n = e.length; i < n; ++i) e[i].applyTransform(t)
    this.changed()
  }
  translate(t, e) {
    const i = this.geometries_
    for (let n = 0, r = i.length; n < r; ++n) i[n].translate(t, e)
    this.changed()
  }
  disposeInternal() {
    ;(this.unlistenGeometriesChange_(), super.disposeInternal())
  }
}
function Ao(s) {
  const t = []
  for (let e = 0, i = s.length; e < i; ++e) t.push(s[e].clone())
  return t
}
const Iu = 0.5,
  bu = 10,
  Oo = 0.25
class Fu {
  constructor(t, e, i, n, r, o) {
    ;((this.sourceProj_ = t), (this.targetProj_ = e))
    let a = {}
    const l = Xn(this.targetProj_, this.sourceProj_)
    ;((this.transformInv_ = function (y) {
      const x = y[0] + '/' + y[1]
      return (a[x] || (a[x] = l(y)), a[x])
    }),
      (this.maxSourceExtent_ = n),
      (this.errorThresholdSquared_ = r * r),
      (this.triangles_ = []),
      (this.wrapsXInSource_ = !1),
      (this.canWrapXInSource_ =
        this.sourceProj_.canWrapX() &&
        !!n &&
        !!this.sourceProj_.getExtent() &&
        $(n) >= $(this.sourceProj_.getExtent())),
      (this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? $(this.sourceProj_.getExtent()) : null),
      (this.targetWorldWidth_ = this.targetProj_.getExtent() ? $(this.targetProj_.getExtent()) : null))
    const h = Ke(i),
      c = is(i),
      u = es(i),
      d = ts(i),
      f = this.transformInv_(h),
      g = this.transformInv_(c),
      _ = this.transformInv_(u),
      m = this.transformInv_(d),
      p = bu + (o ? Math.max(0, Math.ceil(Math.log2(Xs(i) / (o * o * 256 * 256)))) : 0)
    if ((this.addQuad_(h, c, u, d, f, g, _, m, p), this.wrapsXInSource_)) {
      let y = 1 / 0
      ;(this.triangles_.forEach(function (x, E, C) {
        y = Math.min(y, x.source[0][0], x.source[1][0], x.source[2][0])
      }),
        this.triangles_.forEach(x => {
          if (Math.max(x.source[0][0], x.source[1][0], x.source[2][0]) - y > this.sourceWorldWidth_ / 2) {
            const E = [
              [x.source[0][0], x.source[0][1]],
              [x.source[1][0], x.source[1][1]],
              [x.source[2][0], x.source[2][1]],
            ]
            ;(E[0][0] - y > this.sourceWorldWidth_ / 2 && (E[0][0] -= this.sourceWorldWidth_),
              E[1][0] - y > this.sourceWorldWidth_ / 2 && (E[1][0] -= this.sourceWorldWidth_),
              E[2][0] - y > this.sourceWorldWidth_ / 2 && (E[2][0] -= this.sourceWorldWidth_))
            const C = Math.min(E[0][0], E[1][0], E[2][0])
            Math.max(E[0][0], E[1][0], E[2][0]) - C < this.sourceWorldWidth_ / 2 && (x.source = E)
          }
        }))
    }
    a = {}
  }
  addTriangle_(t, e, i, n, r, o) {
    this.triangles_.push({ source: [n, r, o], target: [t, e, i] })
  }
  addQuad_(t, e, i, n, r, o, a, l, h) {
    const c = gt([r, o, a, l]),
      u = this.sourceWorldWidth_ ? $(c) / this.sourceWorldWidth_ : null,
      d = this.sourceWorldWidth_,
      f = this.sourceProj_.canWrapX() && u > 0.5 && u < 1
    let g = !1
    if (h > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const m = gt([t, e, i, n])
        g = $(m) / this.targetWorldWidth_ > Oo || g
      }
      !f && this.sourceProj_.isGlobal() && u && (g = u > Oo || g)
    }
    if (
      !g &&
      this.maxSourceExtent_ &&
      isFinite(c[0]) &&
      isFinite(c[1]) &&
      isFinite(c[2]) &&
      isFinite(c[3]) &&
      !mt(c, this.maxSourceExtent_)
    )
      return
    let _ = 0
    if (
      !g &&
      (!isFinite(r[0]) ||
        !isFinite(r[1]) ||
        !isFinite(o[0]) ||
        !isFinite(o[1]) ||
        !isFinite(a[0]) ||
        !isFinite(a[1]) ||
        !isFinite(l[0]) ||
        !isFinite(l[1]))
    ) {
      if (h > 0) g = !0
      else if (
        ((_ =
          (!isFinite(r[0]) || !isFinite(r[1]) ? 8 : 0) +
          (!isFinite(o[0]) || !isFinite(o[1]) ? 4 : 0) +
          (!isFinite(a[0]) || !isFinite(a[1]) ? 2 : 0) +
          (!isFinite(l[0]) || !isFinite(l[1]) ? 1 : 0)),
        _ != 1 && _ != 2 && _ != 4 && _ != 8)
      )
        return
    }
    if (h > 0) {
      if (!g) {
        const m = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2],
          p = this.transformInv_(m)
        let y
        f ? (y = (je(r[0], d) + je(a[0], d)) / 2 - je(p[0], d)) : (y = (r[0] + a[0]) / 2 - p[0])
        const x = (r[1] + a[1]) / 2 - p[1]
        g = y * y + x * x > this.errorThresholdSquared_
      }
      if (g) {
        if (Math.abs(t[0] - i[0]) <= Math.abs(t[1] - i[1])) {
          const m = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2],
            p = this.transformInv_(m),
            y = [(n[0] + t[0]) / 2, (n[1] + t[1]) / 2],
            x = this.transformInv_(y)
          ;(this.addQuad_(t, e, m, y, r, o, p, x, h - 1), this.addQuad_(y, m, i, n, x, p, a, l, h - 1))
        } else {
          const m = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2],
            p = this.transformInv_(m),
            y = [(i[0] + n[0]) / 2, (i[1] + n[1]) / 2],
            x = this.transformInv_(y)
          ;(this.addQuad_(t, m, y, n, r, p, x, l, h - 1), this.addQuad_(m, e, i, y, p, o, a, x, h - 1))
        }
        return
      }
    }
    if (f) {
      if (!this.canWrapXInSource_) return
      this.wrapsXInSource_ = !0
    }
    ;((_ & 11) == 0 && this.addTriangle_(t, i, n, r, a, l),
      (_ & 14) == 0 && this.addTriangle_(t, i, e, r, a, o),
      _ &&
        ((_ & 13) == 0 && this.addTriangle_(e, n, t, o, l, r),
        (_ & 7) == 0 && this.addTriangle_(e, n, i, o, l, a)))
  }
  calculateSourceExtent() {
    const t = Ct()
    return (
      this.triangles_.forEach(function (e, i, n) {
        const r = e.source
        ;(ki(t, r[0]), ki(t, r[1]), ki(t, r[2]))
      }),
      t
    )
  }
  getTriangles() {
    return this.triangles_
  }
}
let Fs
const mi = []
function ko(s, t, e, i, n) {
  ;(s.beginPath(),
    s.moveTo(0, 0),
    s.lineTo(t, e),
    s.lineTo(i, n),
    s.closePath(),
    s.save(),
    s.clip(),
    s.fillRect(0, 0, Math.max(t, i) + 1, Math.max(e, n)),
    s.restore())
}
function Ls(s, t) {
  return Math.abs(s[t * 4] - 210) > 2 || Math.abs(s[t * 4 + 3] - 0.75 * 255) > 2
}
function Lu() {
  if (Fs === void 0) {
    const s = pt(6, 6, mi)
    ;((s.globalCompositeOperation = 'lighter'),
      (s.fillStyle = 'rgba(210, 0, 0, 0.75)'),
      ko(s, 4, 5, 4, 0),
      ko(s, 4, 5, 0, 5))
    const t = s.getImageData(0, 0, 3, 3).data
    ;((Fs = Ls(t, 0) || Ls(t, 4) || Ls(t, 8)), hs(s), mi.push(s.canvas))
  }
  return Fs
}
function Do(s, t, e, i) {
  const n = Dt(e, t, s)
  let r = to(t, i, e)
  const o = t.getMetersPerUnit()
  o !== void 0 && (r *= o)
  const a = s.getMetersPerUnit()
  a !== void 0 && (r /= a)
  const l = s.getExtent()
  if (!l || Qn(l, n)) {
    const h = to(s, r, n) / r
    isFinite(h) && h > 0 && (r /= h)
  }
  return r
}
function Pu(s, t, e, i) {
  const n = Xe(e)
  let r = Do(s, t, n, i)
  return (
    (!isFinite(r) || r <= 0) &&
      hr(e, function (o) {
        return ((r = Do(s, t, o, i)), isFinite(r) && r > 0)
      }),
    r
  )
}
function Mu(s, t, e, i, n, r, o, a, l, h, c, u) {
  const d = pt(Math.round(e * s), Math.round(e * t), mi)
  if ((u || (d.imageSmoothingEnabled = !1), l.length === 0)) return d.canvas
  d.scale(e, e)
  function f(E) {
    return Math.round(E * e) / e
  }
  d.globalCompositeOperation = 'lighter'
  const g = Ct()
  l.forEach(function (E, C, T) {
    lr(g, E.extent)
  })
  const _ = $(g),
    m = Zt(g),
    p = pt(Math.round((e * _) / i), Math.round((e * m) / i), mi)
  u || (p.imageSmoothingEnabled = !1)
  const y = e / i
  l.forEach(function (E, C, T) {
    const R = E.extent[0] - g[0],
      v = -(E.extent[3] - g[3]),
      L = $(E.extent),
      A = Zt(E.extent)
    E.image.width > 0 &&
      E.image.height > 0 &&
      p.drawImage(E.image, h, h, E.image.width - 2 * h, E.image.height - 2 * h, R * y, v * y, L * y, A * y)
  })
  const x = Ke(o)
  return (
    a.getTriangles().forEach(function (E, C, T) {
      const R = E.source,
        v = E.target
      let L = R[0][0],
        A = R[0][1],
        z = R[1][0],
        W = R[1][1],
        N = R[2][0],
        et = R[2][1]
      const I = f((v[0][0] - x[0]) / r),
        M = f(-(v[0][1] - x[1]) / r),
        S = f((v[1][0] - x[0]) / r),
        k = f(-(v[1][1] - x[1]) / r),
        Z = f((v[2][0] - x[0]) / r),
        K = f(-(v[2][1] - x[1]) / r),
        nt = L,
        w = A
      ;((L = 0), (A = 0), (z -= nt), (W -= w), (N -= nt), (et -= w))
      const wt = [
          [z, W, 0, 0, S - I],
          [N, et, 0, 0, Z - I],
          [0, 0, z, W, k - M],
          [0, 0, N, et, K - M],
        ],
        V = Bl(wt)
      if (V) {
        if ((d.save(), d.beginPath(), Lu() || !u)) {
          d.moveTo(S, k)
          const H = 4,
            de = I - S,
            Wt = M - k
          for (let lt = 0; lt < H; lt++)
            (d.lineTo(S + f(((lt + 1) * de) / H), k + f((lt * Wt) / (H - 1))),
              lt != H - 1 && d.lineTo(S + f(((lt + 1) * de) / H), k + f(((lt + 1) * Wt) / (H - 1))))
          d.lineTo(Z, K)
        } else (d.moveTo(S, k), d.lineTo(I, M), d.lineTo(Z, K))
        ;(d.clip(),
          d.transform(V[0], V[2], V[1], V[3], I, M),
          d.translate(g[0] - nt, g[3] - w),
          d.scale(i / e, -i / e),
          d.drawImage(p.canvas, 0, 0),
          d.restore())
      }
    }),
    hs(p),
    mi.push(p.canvas),
    c &&
      (d.save(),
      (d.globalCompositeOperation = 'source-over'),
      (d.strokeStyle = 'black'),
      (d.lineWidth = 1),
      a.getTriangles().forEach(function (E, C, T) {
        const R = E.target,
          v = (R[0][0] - x[0]) / r,
          L = -(R[0][1] - x[1]) / r,
          A = (R[1][0] - x[0]) / r,
          z = -(R[1][1] - x[1]) / r,
          W = (R[2][0] - x[0]) / r,
          N = -(R[2][1] - x[1]) / r
        ;(d.beginPath(), d.moveTo(A, z), d.lineTo(v, L), d.lineTo(W, N), d.closePath(), d.stroke())
      }),
      d.restore()),
    d.canvas
  )
}
class tr extends Xa {
  constructor(t, e, i, n, r, o, a, l, h, c, u, d) {
    ;(super(r, P.IDLE, { interpolate: !!d }),
      (this.renderEdges_ = u !== void 0 ? u : !1),
      (this.pixelRatio_ = a),
      (this.gutter_ = l),
      (this.canvas_ = null),
      (this.sourceTileGrid_ = e),
      (this.targetTileGrid_ = n),
      (this.wrappedTileCoord_ = o || r),
      (this.sourceTiles_ = []),
      (this.sourcesListenerKeys_ = null),
      (this.sourceZ_ = 0))
    const f = n.getTileCoordExtent(this.wrappedTileCoord_),
      g = this.targetTileGrid_.getExtent()
    let _ = this.sourceTileGrid_.getExtent()
    const m = g ? Di(f, g) : f
    if (Xs(m) === 0) {
      this.state = P.EMPTY
      return
    }
    const p = t.getExtent()
    p && (_ ? (_ = Di(_, p)) : (_ = p))
    const y = n.getResolution(this.wrappedTileCoord_[0]),
      x = Pu(t, i, m, y)
    if (!isFinite(x) || x <= 0) {
      this.state = P.EMPTY
      return
    }
    const E = c !== void 0 ? c : Iu
    if (
      ((this.triangulation_ = new Fu(t, i, m, _, x * E, y)), this.triangulation_.getTriangles().length === 0)
    ) {
      this.state = P.EMPTY
      return
    }
    this.sourceZ_ = e.getZForResolution(x)
    let C = this.triangulation_.calculateSourceExtent()
    if (
      (_ && (t.canWrapX() ? ((C[1] = tt(C[1], _[1], _[3])), (C[3] = tt(C[3], _[1], _[3]))) : (C = Di(C, _))),
      !Xs(C))
    )
      this.state = P.EMPTY
    else {
      const T = e.getTileRangeForExtentAndZ(C, this.sourceZ_)
      for (let R = T.minX; R <= T.maxX; R++)
        for (let v = T.minY; v <= T.maxY; v++) {
          const L = h(this.sourceZ_, R, v, a)
          L && this.sourceTiles_.push(L)
        }
      this.sourceTiles_.length === 0 && (this.state = P.EMPTY)
    }
  }
  getImage() {
    return this.canvas_
  }
  reproject_() {
    const t = []
    if (
      (this.sourceTiles_.forEach(e => {
        e &&
          e.getState() == P.LOADED &&
          t.push({ extent: this.sourceTileGrid_.getTileCoordExtent(e.tileCoord), image: e.getImage() })
      }),
      (this.sourceTiles_.length = 0),
      t.length === 0)
    )
      this.state = P.ERROR
    else {
      const e = this.wrappedTileCoord_[0],
        i = this.targetTileGrid_.getTileSize(e),
        n = typeof i == 'number' ? i : i[0],
        r = typeof i == 'number' ? i : i[1],
        o = this.targetTileGrid_.getResolution(e),
        a = this.sourceTileGrid_.getResolution(this.sourceZ_),
        l = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_)
      ;((this.canvas_ = Mu(
        n,
        r,
        this.pixelRatio_,
        a,
        this.sourceTileGrid_.getExtent(),
        o,
        l,
        this.triangulation_,
        t,
        this.gutter_,
        this.renderEdges_,
        this.interpolate,
      )),
        (this.state = P.LOADED))
    }
    this.changed()
  }
  load() {
    if (this.state == P.IDLE) {
      ;((this.state = P.LOADING), this.changed())
      let t = 0
      ;((this.sourcesListenerKeys_ = []),
        this.sourceTiles_.forEach(e => {
          const i = e.getState()
          if (i == P.IDLE || i == P.LOADING) {
            t++
            const n = j(
              e,
              O.CHANGE,
              function (r) {
                const o = e.getState()
                ;(o == P.LOADED || o == P.ERROR || o == P.EMPTY) &&
                  (q(n), t--, t === 0 && (this.unlistenSources_(), this.reproject_()))
              },
              this,
            )
            this.sourcesListenerKeys_.push(n)
          }
        }),
        t === 0
          ? setTimeout(this.reproject_.bind(this), 0)
          : this.sourceTiles_.forEach(function (e, i, n) {
              e.getState() == P.IDLE && e.load()
            }))
    }
  }
  unlistenSources_() {
    ;(this.sourcesListenerKeys_.forEach(q), (this.sourcesListenerKeys_ = null))
  }
  release() {
    ;(this.canvas_ && (hs(this.canvas_.getContext('2d')), mi.push(this.canvas_), (this.canvas_ = null)),
      super.release())
  }
}
class Au extends Da {
  constructor(t) {
    ;(super(t),
      (this.extentChanged = !0),
      (this.renderedExtent_ = null),
      this.renderedPixelRatio,
      (this.renderedProjection = null),
      this.renderedRevision,
      (this.renderedTiles = []),
      (this.newTiles_ = !1),
      (this.tmpExtent = Ct()),
      (this.tmpTileRange_ = new jr(0, 0, 0, 0)))
  }
  isDrawableTile(t) {
    const e = this.getLayer(),
      i = t.getState(),
      n = e.getUseInterimTilesOnError()
    return i == P.LOADED || i == P.EMPTY || (i == P.ERROR && !n)
  }
  getTile(t, e, i, n) {
    const r = n.pixelRatio,
      o = n.viewState.projection,
      a = this.getLayer()
    let h = a.getSource().getTile(t, e, i, r, o)
    return (
      h.getState() == P.ERROR && a.getUseInterimTilesOnError() && a.getPreload() > 0 && (this.newTiles_ = !0),
      this.isDrawableTile(h) || (h = h.getInterimTile()),
      h
    )
  }
  getData(t) {
    const e = this.frameState
    if (!e) return null
    const i = this.getLayer(),
      n = rt(e.pixelToCoordinateTransform, t.slice()),
      r = i.getExtent()
    if (r && !Qn(r, n)) return null
    const o = e.pixelRatio,
      a = e.viewState.projection,
      l = e.viewState,
      h = i.getRenderSource(),
      c = h.getTileGridForProjection(l.projection),
      u = h.getTilePixelRatio(e.pixelRatio)
    for (let d = c.getZForResolution(l.resolution); d >= c.getMinZoom(); --d) {
      const f = c.getTileCoordForCoordAndZ(n, d),
        g = h.getTile(d, f[1], f[2], o, a)
      if (!(g instanceof Wa || g instanceof tr) || (g instanceof tr && g.getState() === P.EMPTY)) return null
      if (g.getState() !== P.LOADED) continue
      const _ = c.getOrigin(d),
        m = Mt(c.getTileSize(d)),
        p = c.getResolution(d),
        y = Math.floor(u * ((n[0] - _[0]) / p - f[1] * m[0])),
        x = Math.floor(u * ((_[1] - n[1]) / p - f[2] * m[1])),
        E = Math.round(u * h.getGutterForProjection(l.projection))
      return this.getImageData(g.getImage(), y + E, x + E)
    }
    return null
  }
  loadedTileCallback(t, e, i) {
    return this.isDrawableTile(i) ? super.loadedTileCallback(t, e, i) : !1
  }
  prepareFrame(t) {
    return !!this.getLayer().getSource()
  }
  renderFrame(t, e) {
    const i = t.layerStatesArray[t.layerIndex],
      n = t.viewState,
      r = n.projection,
      o = n.resolution,
      a = n.center,
      l = n.rotation,
      h = t.pixelRatio,
      c = this.getLayer(),
      u = c.getSource(),
      d = u.getRevision(),
      f = u.getTileGridForProjection(r),
      g = f.getZForResolution(o, u.zDirection),
      _ = f.getResolution(g)
    let m = t.extent
    const p = t.viewState.resolution,
      y = u.getTilePixelRatio(h),
      x = Math.round(($(m) / p) * h),
      E = Math.round((Zt(m) / p) * h),
      C = i.extent && we(i.extent)
    C && (m = Di(m, we(i.extent)))
    const T = (_ * x) / 2 / y,
      R = (_ * E) / 2 / y,
      v = [a[0] - T, a[1] - R, a[0] + T, a[1] + R],
      L = f.getTileRangeForExtentAndZ(m, g),
      A = {}
    A[g] = {}
    const z = this.createLoadedTileFinder(u, r, A),
      W = this.tmpExtent,
      N = this.tmpTileRange_
    this.newTiles_ = !1
    const et = l ? Ys(n.center, p, l, t.size) : void 0
    for (let wt = L.minX; wt <= L.maxX; ++wt)
      for (let V = L.minY; V <= L.maxY; ++V) {
        if (l && !f.tileCoordIntersectsViewport([g, wt, V], et)) continue
        const H = this.getTile(g, wt, V, t)
        if (this.isDrawableTile(H)) {
          const lt = D(this)
          if (H.getState() == P.LOADED) {
            A[g][H.tileCoord.toString()] = H
            let Ht = H.inTransition(lt)
            ;(Ht && i.opacity !== 1 && (H.endTransition(lt), (Ht = !1)),
              !this.newTiles_ && (Ht || !this.renderedTiles.includes(H)) && (this.newTiles_ = !0))
          }
          if (H.getAlpha(lt, t.time) === 1) continue
        }
        const de = f.getTileCoordChildTileRange(H.tileCoord, N, W)
        let Wt = !1
        ;(de && (Wt = z(g + 1, de)), Wt || f.forEachTileCoordParentTileRange(H.tileCoord, z, N, W))
      }
    const I = ((_ / o) * h) / y
    Re(this.pixelTransform, t.size[0] / 2, t.size[1] / 2, 1 / h, 1 / h, l, -x / 2, -E / 2)
    const M = Qo(this.pixelTransform)
    this.useContainer(e, M, this.getBackground(t))
    const S = this.context,
      k = S.canvas
    ;(or(this.inversePixelTransform, this.pixelTransform),
      Re(this.tempTransform, x / 2, E / 2, I, I, 0, -x / 2, -E / 2),
      k.width != x || k.height != E
        ? ((k.width = x), (k.height = E))
        : this.containerReused || S.clearRect(0, 0, x, E),
      C && this.clipUnrotated(S, t, C),
      u.getInterpolate() || (S.imageSmoothingEnabled = !1),
      this.preRender(S, t),
      (this.renderedTiles.length = 0))
    let Z = Object.keys(A).map(Number)
    Z.sort(Ne)
    let K, nt, w
    i.opacity === 1 && (!this.containerReused || u.getOpaque(t.viewState.projection))
      ? (Z = Z.reverse())
      : ((K = []), (nt = []))
    for (let wt = Z.length - 1; wt >= 0; --wt) {
      const V = Z[wt],
        H = u.getTilePixelSize(V, h, r),
        Wt = f.getResolution(V) / _,
        lt = H[0] * Wt * I,
        Ht = H[1] * Wt * I,
        Ze = f.getTileCoordForCoordAndZ(Ke(v), V),
        sn = f.getTileCoordExtent(Ze),
        qe = rt(this.tempTransform, [(y * (sn[0] - v[0])) / _, (y * (v[3] - sn[3])) / _]),
        rn = y * u.getGutterForProjection(r),
        fe = A[V]
      for (const vi in fe) {
        const ge = fe[vi],
          on = ge.tileCoord,
          an = Ze[1] - on[1],
          ln = Math.round(qe[0] - (an - 1) * lt),
          He = Ze[2] - on[2],
          gs = Math.round(qe[1] - (He - 1) * Ht),
          yt = Math.round(qe[0] - an * lt),
          bt = Math.round(qe[1] - He * Ht),
          Ot = ln - yt,
          Jt = gs - bt,
          Je = g === V,
          Fe = Je && ge.getAlpha(D(this), t.time) !== 1
        let _e = !1
        if (!Fe)
          if (K) {
            w = [yt, bt, yt + Ot, bt, yt + Ot, bt + Jt, yt, bt + Jt]
            for (let $e = 0, hn = K.length; $e < hn; ++$e)
              if (g !== V && V < nt[$e]) {
                const dt = K[$e]
                mt([yt, bt, yt + Ot, bt + Jt], [dt[0], dt[3], dt[4], dt[7]]) &&
                  (_e || (S.save(), (_e = !0)),
                  S.beginPath(),
                  S.moveTo(w[0], w[1]),
                  S.lineTo(w[2], w[3]),
                  S.lineTo(w[4], w[5]),
                  S.lineTo(w[6], w[7]),
                  S.moveTo(dt[6], dt[7]),
                  S.lineTo(dt[4], dt[5]),
                  S.lineTo(dt[2], dt[3]),
                  S.lineTo(dt[0], dt[1]),
                  S.clip())
              }
            ;(K.push(w), nt.push(V))
          } else S.clearRect(yt, bt, Ot, Jt)
        ;(this.drawTileImage(ge, t, yt, bt, Ot, Jt, rn, Je),
          K && !Fe ? (_e && S.restore(), this.renderedTiles.unshift(ge)) : this.renderedTiles.push(ge),
          this.updateUsedTiles(t.usedTiles, u, ge))
      }
    }
    return (
      (this.renderedRevision = d),
      (this.renderedResolution = _),
      (this.extentChanged = !this.renderedExtent_ || !Gi(this.renderedExtent_, v)),
      (this.renderedExtent_ = v),
      (this.renderedPixelRatio = h),
      (this.renderedProjection = r),
      this.manageTilePyramid(t, u, f, h, r, m, g, c.getPreload()),
      this.scheduleExpireCache(t, u),
      this.postRender(S, t),
      i.extent && S.restore(),
      (S.imageSmoothingEnabled = !0),
      M !== k.style.transform && (k.style.transform = M),
      this.container
    )
  }
  drawTileImage(t, e, i, n, r, o, a, l) {
    const h = this.getTileImage(t)
    if (!h) return
    const c = D(this),
      u = e.layerStatesArray[e.layerIndex],
      d = u.opacity * (l ? t.getAlpha(c, e.time) : 1),
      f = d !== this.context.globalAlpha
    ;(f && (this.context.save(), (this.context.globalAlpha = d)),
      this.context.drawImage(h, a, a, h.width - 2 * a, h.height - 2 * a, i, n, r, o),
      f && this.context.restore(),
      d !== u.opacity ? (e.animate = !0) : l && t.endTransition(c))
  }
  getImage() {
    const t = this.context
    return t ? t.canvas : null
  }
  getTileImage(t) {
    return t.getImage()
  }
  scheduleExpireCache(t, e) {
    if (e.canExpireCache()) {
      const i = function (n, r, o) {
        const a = D(n)
        a in o.usedTiles && n.expireCache(o.viewState.projection, o.usedTiles[a])
      }.bind(null, e)
      t.postRenderFunctions.push(i)
    }
  }
  updateUsedTiles(t, e, i) {
    const n = D(e)
    ;(n in t || (t[n] = {}), (t[n][i.getKey()] = !0))
  }
  manageTilePyramid(t, e, i, n, r, o, a, l, h) {
    const c = D(e)
    c in t.wantedTiles || (t.wantedTiles[c] = {})
    const u = t.wantedTiles[c],
      d = t.tileQueue,
      f = i.getMinZoom(),
      g = t.viewState.rotation,
      _ = g ? Ys(t.viewState.center, t.viewState.resolution, g, t.size) : void 0
    let m = 0,
      p,
      y,
      x,
      E,
      C,
      T
    for (T = f; T <= a; ++T)
      for (y = i.getTileRangeForExtentAndZ(o, T, y), x = i.getResolution(T), E = y.minX; E <= y.maxX; ++E)
        for (C = y.minY; C <= y.maxY; ++C)
          (g && !i.tileCoordIntersectsViewport([T, E, C], _)) ||
            (a - T <= l
              ? (++m,
                (p = e.getTile(T, E, C, n, r)),
                p.getState() == P.IDLE &&
                  ((u[p.getKey()] = !0),
                  d.isKeyQueued(p.getKey()) || d.enqueue([p, c, i.getTileCoordCenter(p.tileCoord), x])),
                h !== void 0 && h(p))
              : e.useTile(T, E, C, r))
    e.updateCacheSize(m, r)
  }
}
const wn = { PRELOAD: 'preload', USE_INTERIM_TILES_ON_ERROR: 'useInterimTilesOnError' },
  si = [0, 0, 0],
  xe = 5
class $a {
  constructor(t) {
    ;((this.minZoom = t.minZoom !== void 0 ? t.minZoom : 0),
      (this.resolutions_ = t.resolutions),
      G(
        pl(this.resolutions_, function (n, r) {
          return r - n
        }),
        17,
      ))
    let e
    if (!t.origins) {
      for (let n = 0, r = this.resolutions_.length - 1; n < r; ++n)
        if (!e) e = this.resolutions_[n] / this.resolutions_[n + 1]
        else if (this.resolutions_[n] / this.resolutions_[n + 1] !== e) {
          e = void 0
          break
        }
    }
    ;((this.zoomFactor_ = e),
      (this.maxZoom = this.resolutions_.length - 1),
      (this.origin_ = t.origin !== void 0 ? t.origin : null),
      (this.origins_ = null),
      t.origins !== void 0 &&
        ((this.origins_ = t.origins), G(this.origins_.length == this.resolutions_.length, 20)))
    const i = t.extent
    ;(i !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = Ke(i)),
      G((!this.origin_ && this.origins_) || (this.origin_ && !this.origins_), 18),
      (this.tileSizes_ = null),
      t.tileSizes !== void 0 &&
        ((this.tileSizes_ = t.tileSizes), G(this.tileSizes_.length == this.resolutions_.length, 19)),
      (this.tileSize_ = t.tileSize !== void 0 ? t.tileSize : this.tileSizes_ ? null : Rr),
      G((!this.tileSize_ && this.tileSizes_) || (this.tileSize_ && !this.tileSizes_), 22),
      (this.extent_ = i !== void 0 ? i : null),
      (this.fullTileRanges_ = null),
      (this.tmpSize_ = [0, 0]),
      (this.tmpExtent_ = [0, 0, 0, 0]),
      t.sizes !== void 0
        ? (this.fullTileRanges_ = t.sizes.map(function (n, r) {
            const o = new jr(
              Math.min(0, n[0]),
              Math.max(n[0] - 1, -1),
              Math.min(0, n[1]),
              Math.max(n[1] - 1, -1),
            )
            if (i) {
              const a = this.getTileRangeForExtentAndZ(i, r)
              ;((o.minX = Math.max(a.minX, o.minX)),
                (o.maxX = Math.min(a.maxX, o.maxX)),
                (o.minY = Math.max(a.minY, o.minY)),
                (o.maxY = Math.min(a.maxY, o.maxY)))
            }
            return o
          }, this))
        : i && this.calculateTileRanges_(i))
  }
  forEachTileCoord(t, e, i) {
    const n = this.getTileRangeForExtentAndZ(t, e)
    for (let r = n.minX, o = n.maxX; r <= o; ++r) for (let a = n.minY, l = n.maxY; a <= l; ++a) i([e, r, a])
  }
  forEachTileCoordParentTileRange(t, e, i, n) {
    let r,
      o,
      a,
      l = null,
      h = t[0] - 1
    for (
      this.zoomFactor_ === 2 ? ((o = t[1]), (a = t[2])) : (l = this.getTileCoordExtent(t, n));
      h >= this.minZoom;

    ) {
      if (
        (this.zoomFactor_ === 2
          ? ((o = Math.floor(o / 2)), (a = Math.floor(a / 2)), (r = ni(o, o, a, a, i)))
          : (r = this.getTileRangeForExtentAndZ(l, h, i)),
        e(h, r))
      )
        return !0
      --h
    }
    return !1
  }
  getExtent() {
    return this.extent_
  }
  getMaxZoom() {
    return this.maxZoom
  }
  getMinZoom() {
    return this.minZoom
  }
  getOrigin(t) {
    return this.origin_ ? this.origin_ : this.origins_[t]
  }
  getResolution(t) {
    return this.resolutions_[t]
  }
  getResolutions() {
    return this.resolutions_
  }
  getTileCoordChildTileRange(t, e, i) {
    if (t[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        const r = t[1] * 2,
          o = t[2] * 2
        return ni(r, r + 1, o, o + 1, e)
      }
      const n = this.getTileCoordExtent(t, i || this.tmpExtent_)
      return this.getTileRangeForExtentAndZ(n, t[0] + 1, e)
    }
    return null
  }
  getTileRangeForTileCoordAndZ(t, e, i) {
    if (e > this.maxZoom || e < this.minZoom) return null
    const n = t[0],
      r = t[1],
      o = t[2]
    if (e === n) return ni(r, o, r, o, i)
    if (this.zoomFactor_) {
      const l = Math.pow(this.zoomFactor_, e - n),
        h = Math.floor(r * l),
        c = Math.floor(o * l)
      if (e < n) return ni(h, h, c, c, i)
      const u = Math.floor(l * (r + 1)) - 1,
        d = Math.floor(l * (o + 1)) - 1
      return ni(h, u, c, d, i)
    }
    const a = this.getTileCoordExtent(t, this.tmpExtent_)
    return this.getTileRangeForExtentAndZ(a, e, i)
  }
  getTileRangeForExtentAndZ(t, e, i) {
    this.getTileCoordForXYAndZ_(t[0], t[3], e, !1, si)
    const n = si[1],
      r = si[2]
    this.getTileCoordForXYAndZ_(t[2], t[1], e, !0, si)
    const o = si[1],
      a = si[2]
    return ni(n, o, r, a, i)
  }
  getTileCoordCenter(t) {
    const e = this.getOrigin(t[0]),
      i = this.getResolution(t[0]),
      n = Mt(this.getTileSize(t[0]), this.tmpSize_)
    return [e[0] + (t[1] + 0.5) * n[0] * i, e[1] - (t[2] + 0.5) * n[1] * i]
  }
  getTileCoordExtent(t, e) {
    const i = this.getOrigin(t[0]),
      n = this.getResolution(t[0]),
      r = Mt(this.getTileSize(t[0]), this.tmpSize_),
      o = i[0] + t[1] * r[0] * n,
      a = i[1] - (t[2] + 1) * r[1] * n,
      l = o + r[0] * n,
      h = a + r[1] * n
    return he(o, a, l, h, e)
  }
  getTileCoordForCoordAndResolution(t, e, i) {
    return this.getTileCoordForXYAndResolution_(t[0], t[1], e, !1, i)
  }
  getTileCoordForXYAndResolution_(t, e, i, n, r) {
    const o = this.getZForResolution(i),
      a = i / this.getResolution(o),
      l = this.getOrigin(o),
      h = Mt(this.getTileSize(o), this.tmpSize_)
    let c = (a * (t - l[0])) / i / h[0],
      u = (a * (l[1] - e)) / i / h[1]
    return (
      n ? ((c = _n(c, xe) - 1), (u = _n(u, xe) - 1)) : ((c = gn(c, xe)), (u = gn(u, xe))),
      Mo(o, c, u, r)
    )
  }
  getTileCoordForXYAndZ_(t, e, i, n, r) {
    const o = this.getOrigin(i),
      a = this.getResolution(i),
      l = Mt(this.getTileSize(i), this.tmpSize_)
    let h = (t - o[0]) / a / l[0],
      c = (o[1] - e) / a / l[1]
    return (
      n ? ((h = _n(h, xe) - 1), (c = _n(c, xe) - 1)) : ((h = gn(h, xe)), (c = gn(c, xe))),
      Mo(i, h, c, r)
    )
  }
  getTileCoordForCoordAndZ(t, e, i) {
    return this.getTileCoordForXYAndZ_(t[0], t[1], e, !1, i)
  }
  getTileCoordResolution(t) {
    return this.resolutions_[t[0]]
  }
  getTileSize(t) {
    return this.tileSize_ ? this.tileSize_ : this.tileSizes_[t]
  }
  getFullTileRange(t) {
    return this.fullTileRanges_
      ? this.fullTileRanges_[t]
      : this.extent_
        ? this.getTileRangeForExtentAndZ(this.extent_, t)
        : null
  }
  getZForResolution(t, e) {
    const i = sr(this.resolutions_, t, e || 0)
    return tt(i, this.minZoom, this.maxZoom)
  }
  tileCoordIntersectsViewport(t, e) {
    return pa(e, 0, e.length, 2, this.getTileCoordExtent(t))
  }
  calculateTileRanges_(t) {
    const e = this.resolutions_.length,
      i = new Array(e)
    for (let n = this.minZoom; n < e; ++n) i[n] = this.getTileRangeForExtentAndZ(t, n)
    this.fullTileRanges_ = i
  }
}
const Ps = { TILELOADSTART: 'tileloadstart', TILELOADEND: 'tileloadend', TILELOADERROR: 'tileloaderror' }
function Qa(s) {
  let t = s.getDefaultTileGrid()
  return (t || ((t = ju(s)), s.setDefaultTileGrid(t)), t)
}
function Ou(s, t, e) {
  const i = t[0],
    n = s.getTileCoordCenter(t),
    r = Gr(e)
  if (!Qn(r, n)) {
    const o = $(r),
      a = Math.ceil((r[0] - n[0]) / o)
    return ((n[0] += o * a), s.getTileCoordForCoordAndZ(n, i))
  }
  return t
}
function ku(s, t, e, i) {
  i = i !== void 0 ? i : 'top-left'
  const n = tl(s, t, e)
  return new $a({ extent: s, origin: Ll(s, i), resolutions: n, tileSize: e })
}
function Du(s) {
  const t = s || {},
    e = t.extent || it('EPSG:3857').getExtent(),
    i = {
      extent: e,
      minZoom: t.minZoom,
      tileSize: t.tileSize,
      resolutions: tl(e, t.maxZoom, t.tileSize, t.maxResolution),
    }
  return new $a(i)
}
function tl(s, t, e, i) {
  ;((t = t !== void 0 ? t : Xh), (e = Mt(e !== void 0 ? e : Rr)))
  const n = Zt(s),
    r = $(s)
  i = i > 0 ? i : Math.max(r / e[0], n / e[1])
  const o = t + 1,
    a = new Array(o)
  for (let l = 0; l < o; ++l) a[l] = i / Math.pow(2, l)
  return a
}
function ju(s, t, e, i) {
  const n = Gr(s)
  return ku(n, t, e, i)
}
function Gr(s) {
  s = it(s)
  let t = s.getExtent()
  if (!t) {
    const e = (180 * cr.degrees) / s.getMetersPerUnit()
    t = he(-e, -e, e, e)
  }
  return t
}
class Gu extends Na {
  constructor(t) {
    ;(super({
      attributions: t.attributions,
      attributionsCollapsible: t.attributionsCollapsible,
      projection: t.projection,
      state: t.state,
      wrapX: t.wrapX,
      interpolate: t.interpolate,
    }),
      this.on,
      this.once,
      this.un,
      (this.opaque_ = t.opaque !== void 0 ? t.opaque : !1),
      (this.tilePixelRatio_ = t.tilePixelRatio !== void 0 ? t.tilePixelRatio : 1),
      (this.tileGrid = t.tileGrid !== void 0 ? t.tileGrid : null))
    const e = [256, 256]
    ;(this.tileGrid && Mt(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), e),
      (this.tileCache = new Ha(t.cacheSize || 0)),
      (this.tmpSize = [0, 0]),
      (this.key_ = t.key || ''),
      (this.tileOptions = { transition: t.transition, interpolate: t.interpolate }),
      (this.zDirection = t.zDirection ? t.zDirection : 0))
  }
  canExpireCache() {
    return this.tileCache.canExpireCache()
  }
  expireCache(t, e) {
    const i = this.getTileCacheForProjection(t)
    i && i.expireCache(e)
  }
  forEachLoadedTile(t, e, i, n) {
    const r = this.getTileCacheForProjection(t)
    if (!r) return !1
    let o = !0,
      a,
      l,
      h
    for (let c = i.minX; c <= i.maxX; ++c)
      for (let u = i.minY; u <= i.maxY; ++u)
        ((l = fs(e, c, u)),
          (h = !1),
          r.containsKey(l) && ((a = r.get(l)), (h = a.getState() === P.LOADED), h && (h = n(a) !== !1)),
          h || (o = !1))
    return o
  }
  getGutterForProjection(t) {
    return 0
  }
  getKey() {
    return this.key_
  }
  setKey(t) {
    this.key_ !== t && ((this.key_ = t), this.changed())
  }
  getOpaque(t) {
    return this.opaque_
  }
  getResolutions(t) {
    const e = t ? this.getTileGridForProjection(t) : this.tileGrid
    return e ? e.getResolutions() : null
  }
  getTile(t, e, i, n, r) {
    return F()
  }
  getTileGrid() {
    return this.tileGrid
  }
  getTileGridForProjection(t) {
    return this.tileGrid ? this.tileGrid : Qa(t)
  }
  getTileCacheForProjection(t) {
    const e = this.getProjection()
    return (G(e === null || Ae(e, t), 68), this.tileCache)
  }
  getTilePixelRatio(t) {
    return this.tilePixelRatio_
  }
  getTilePixelSize(t, e, i) {
    const n = this.getTileGridForProjection(i),
      r = this.getTilePixelRatio(e),
      o = Mt(n.getTileSize(t), this.tmpSize)
    return r == 1 ? o : Th(o, r, this.tmpSize)
  }
  getTileCoordForTileUrlFunction(t, e) {
    e = e !== void 0 ? e : this.getProjection()
    const i = this.getTileGridForProjection(e)
    return (this.getWrapX() && e.isGlobal() && (t = Ou(i, t, e)), vu(t, i) ? t : null)
  }
  clear() {
    this.tileCache.clear()
  }
  refresh() {
    ;(this.clear(), super.refresh())
  }
  updateCacheSize(t, e) {
    const i = this.getTileCacheForProjection(e)
    t > i.highWaterMark && (i.highWaterMark = t)
  }
  useTile(t, e, i, n) {}
}
class Nu extends at {
  constructor(t, e) {
    ;(super(t), (this.tile = e))
  }
}
function Xu(s, t) {
  const e = /\{z\}/g,
    i = /\{x\}/g,
    n = /\{y\}/g,
    r = /\{-y\}/g
  return function (o, a, l) {
    if (o)
      return s
        .replace(e, o[0].toString())
        .replace(i, o[1].toString())
        .replace(n, o[2].toString())
        .replace(r, function () {
          const h = o[0],
            c = t.getFullTileRange(h)
          return (G(c, 55), (c.getHeight() - o[2] - 1).toString())
        })
  }
}
function Wu(s, t) {
  const e = s.length,
    i = new Array(e)
  for (let n = 0; n < e; ++n) i[n] = Xu(s[n], t)
  return Yu(i)
}
function Yu(s) {
  return s.length === 1
    ? s[0]
    : function (t, e, i) {
        if (!t) return
        const n = Su(t),
          r = je(n, s.length)
        return s[r](t, e, i)
      }
}
function zu(s) {
  const t = []
  let e = /\{([a-z])-([a-z])\}/.exec(s)
  if (e) {
    const i = e[1].charCodeAt(0),
      n = e[2].charCodeAt(0)
    let r
    for (r = i; r <= n; ++r) t.push(s.replace(e[0], String.fromCharCode(r)))
    return t
  }
  if (((e = /\{(\d+)-(\d+)\}/.exec(s)), e)) {
    const i = parseInt(e[2], 10)
    for (let n = parseInt(e[1], 10); n <= i; n++) t.push(s.replace(e[0], n.toString()))
    return t
  }
  return (t.push(s), t)
}
class Nr extends Gu {
  constructor(t) {
    ;(super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      opaque: t.opaque,
      projection: t.projection,
      state: t.state,
      tileGrid: t.tileGrid,
      tilePixelRatio: t.tilePixelRatio,
      wrapX: t.wrapX,
      transition: t.transition,
      interpolate: t.interpolate,
      key: t.key,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection,
    }),
      (this.generateTileUrlFunction_ = this.tileUrlFunction === Nr.prototype.tileUrlFunction),
      (this.tileLoadFunction = t.tileLoadFunction),
      t.tileUrlFunction && (this.tileUrlFunction = t.tileUrlFunction),
      (this.urls = null),
      t.urls ? this.setUrls(t.urls) : t.url && this.setUrl(t.url),
      (this.tileLoadingKeys_ = {}))
  }
  getTileLoadFunction() {
    return this.tileLoadFunction
  }
  getTileUrlFunction() {
    return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction
      ? this.tileUrlFunction.bind(this)
      : this.tileUrlFunction
  }
  getUrls() {
    return this.urls
  }
  handleTileChange(t) {
    const e = t.target,
      i = D(e),
      n = e.getState()
    let r
    ;(n == P.LOADING
      ? ((this.tileLoadingKeys_[i] = !0), (r = Ps.TILELOADSTART))
      : i in this.tileLoadingKeys_ &&
        (delete this.tileLoadingKeys_[i],
        (r = n == P.ERROR ? Ps.TILELOADERROR : n == P.LOADED ? Ps.TILELOADEND : void 0)),
      r != null && this.dispatchEvent(new Nu(r, e)))
  }
  setTileLoadFunction(t) {
    ;(this.tileCache.clear(), (this.tileLoadFunction = t), this.changed())
  }
  setTileUrlFunction(t, e) {
    ;((this.tileUrlFunction = t),
      this.tileCache.pruneExceptNewestZ(),
      typeof e < 'u' ? this.setKey(e) : this.changed())
  }
  setUrl(t) {
    const e = zu(t)
    ;((this.urls = e), this.setUrls(e))
  }
  setUrls(t) {
    this.urls = t
    const e = t.join(`
`)
    this.generateTileUrlFunction_ ? this.setTileUrlFunction(Wu(t, this.tileGrid), e) : this.setKey(e)
  }
  tileUrlFunction(t, e, i) {}
  useTile(t, e, i) {
    const n = fs(t, e, i)
    this.tileCache.containsKey(n) && this.tileCache.get(n)
  }
}
class Bu extends Ja {
  constructor() {
    super()
  }
  getType() {
    return 'json'
  }
  readFeature(t, e) {
    return this.readFeatureFromObject(Tn(t), this.getReadOptions(t, e))
  }
  readFeatures(t, e) {
    return this.readFeaturesFromObject(Tn(t), this.getReadOptions(t, e))
  }
  readFeatureFromObject(t, e) {
    return F()
  }
  readFeaturesFromObject(t, e) {
    return F()
  }
  readGeometry(t, e) {
    return this.readGeometryFromObject(Tn(t), this.getReadOptions(t, e))
  }
  readGeometryFromObject(t, e) {
    return F()
  }
  readProjection(t) {
    return this.readProjectionFromObject(Tn(t))
  }
  readProjectionFromObject(t) {
    return F()
  }
  writeFeature(t, e) {
    return JSON.stringify(this.writeFeatureObject(t, e))
  }
  writeFeatureObject(t, e) {
    return F()
  }
  writeFeatures(t, e) {
    return JSON.stringify(this.writeFeaturesObject(t, e))
  }
  writeFeaturesObject(t, e) {
    return F()
  }
  writeGeometry(t, e) {
    return JSON.stringify(this.writeGeometryObject(t, e))
  }
  writeGeometryObject(t, e) {
    return F()
  }
}
function Tn(s) {
  if (typeof s == 'string') {
    const t = JSON.parse(s)
    return t || null
  }
  return s !== null ? s : null
}
class Pi extends Bu {
  constructor(t) {
    ;((t = t || {}),
      super(),
      (this.dataProjection = it(t.dataProjection ? t.dataProjection : 'EPSG:4326')),
      t.featureProjection && (this.defaultFeatureProjection = it(t.featureProjection)),
      (this.geometryName_ = t.geometryName),
      (this.extractGeometryName_ = t.extractGeometryName),
      (this.supportedMediaTypes = ['application/geo+json', 'application/vnd.geo+json']))
  }
  readFeatureFromObject(t, e) {
    let i = null
    t.type === 'Feature' ? (i = t) : (i = { type: 'Feature', geometry: t, properties: null })
    const n = er(i.geometry, e),
      r = new _t()
    return (
      this.geometryName_
        ? r.setGeometryName(this.geometryName_)
        : this.extractGeometryName_ && 'geometry_name' in i !== void 0 && r.setGeometryName(i.geometry_name),
      r.setGeometry(n),
      'id' in i && r.setId(i.id),
      i.properties && r.setProperties(i.properties, !0),
      r
    )
  }
  readFeaturesFromObject(t, e) {
    const i = t
    let n = null
    if (i.type === 'FeatureCollection') {
      const r = t
      n = []
      const o = r.features
      for (let a = 0, l = o.length; a < l; ++a) n.push(this.readFeatureFromObject(o[a], e))
    } else n = [this.readFeatureFromObject(t, e)]
    return n
  }
  readGeometryFromObject(t, e) {
    return er(t, e)
  }
  readProjectionFromObject(t) {
    const e = t.crs
    let i
    return (
      e
        ? e.type == 'name'
          ? (i = it(e.properties.name))
          : e.type === 'EPSG'
            ? (i = it('EPSG:' + e.properties.code))
            : G(!1, 36)
        : (i = this.dataProjection),
      i
    )
  }
  writeFeatureObject(t, e) {
    e = this.adaptOptions(e)
    const i = { type: 'Feature', geometry: null, properties: null },
      n = t.getId()
    if ((n !== void 0 && (i.id = n), !t.hasProperties())) return i
    const r = t.getProperties(),
      o = t.getGeometry()
    return (o && ((i.geometry = ir(o, e)), delete r[t.getGeometryName()]), Ei(r) || (i.properties = r), i)
  }
  writeFeaturesObject(t, e) {
    e = this.adaptOptions(e)
    const i = []
    for (let n = 0, r = t.length; n < r; ++n) i.push(this.writeFeatureObject(t[n], e))
    return { type: 'FeatureCollection', features: i }
  }
  writeGeometryObject(t, e) {
    return ir(t, this.adaptOptions(e))
  }
}
function er(s, t) {
  if (!s) return null
  let e
  switch (s.type) {
    case 'Point': {
      e = Ku(s)
      break
    }
    case 'LineString': {
      e = Uu(s)
      break
    }
    case 'Polygon': {
      e = Ju(s)
      break
    }
    case 'MultiPoint': {
      e = qu(s)
      break
    }
    case 'MultiLineString': {
      e = Zu(s)
      break
    }
    case 'MultiPolygon': {
      e = Hu(s)
      break
    }
    case 'GeometryCollection': {
      e = Vu(s)
      break
    }
    default:
      throw new Error('Unsupported GeoJSON type: ' + s.type)
  }
  return Jn(e, !1, t)
}
function Vu(s, t) {
  const e = s.geometries.map(function (i) {
    return er(i, t)
  })
  return new Ie(e)
}
function Ku(s) {
  return new At(s.coordinates)
}
function Uu(s) {
  return new Gt(s.coordinates)
}
function Zu(s) {
  return new Ye(s.coordinates)
}
function qu(s) {
  return new Si(s.coordinates)
}
function Hu(s) {
  return new ze(s.coordinates)
}
function Ju(s) {
  return new It(s.coordinates)
}
function ir(s, t) {
  s = Jn(s, !0, t)
  const e = s.getType()
  let i
  switch (e) {
    case 'Point': {
      i = nd(s)
      break
    }
    case 'LineString': {
      i = Qu(s)
      break
    }
    case 'Polygon': {
      i = sd(s, t)
      break
    }
    case 'MultiPoint': {
      i = ed(s)
      break
    }
    case 'MultiLineString': {
      i = td(s)
      break
    }
    case 'MultiPolygon': {
      i = id(s, t)
      break
    }
    case 'GeometryCollection': {
      i = $u(s, t)
      break
    }
    case 'Circle': {
      i = { type: 'GeometryCollection', geometries: [] }
      break
    }
    default:
      throw new Error('Unsupported geometry type: ' + e)
  }
  return i
}
function $u(s, t) {
  return (
    (t = Object.assign({}, t)),
    delete t.featureProjection,
    {
      type: 'GeometryCollection',
      geometries: s.getGeometriesArray().map(function (i) {
        return ir(i, t)
      }),
    }
  )
}
function Qu(s, t) {
  return { type: 'LineString', coordinates: s.getCoordinates() }
}
function td(s, t) {
  return { type: 'MultiLineString', coordinates: s.getCoordinates() }
}
function ed(s, t) {
  return { type: 'MultiPoint', coordinates: s.getCoordinates() }
}
function id(s, t) {
  let e
  return (t && (e = t.rightHanded), { type: 'MultiPolygon', coordinates: s.getCoordinates(e) })
}
function nd(s, t) {
  return { type: 'Point', coordinates: s.getCoordinates() }
}
function sd(s, t) {
  let e
  return (t && (e = t.rightHanded), { type: 'Polygon', coordinates: s.getCoordinates(e) })
}
class rd extends ds {
  constructor(t) {
    t = t || {}
    const e = Object.assign({}, t)
    ;(delete e.preload,
      delete e.useInterimTilesOnError,
      super(e),
      this.on,
      this.once,
      this.un,
      this.setPreload(t.preload !== void 0 ? t.preload : 0),
      this.setUseInterimTilesOnError(t.useInterimTilesOnError !== void 0 ? t.useInterimTilesOnError : !0))
  }
  getPreload() {
    return this.get(wn.PRELOAD)
  }
  setPreload(t) {
    this.set(wn.PRELOAD, t)
  }
  getUseInterimTilesOnError() {
    return this.get(wn.USE_INTERIM_TILES_ON_ERROR)
  }
  setUseInterimTilesOnError(t) {
    this.set(wn.USE_INTERIM_TILES_ON_ERROR, t)
  }
  getData(t) {
    return super.getData(t)
  }
}
class od extends rd {
  constructor(t) {
    super(t)
  }
  createRenderer() {
    return new Au(this)
  }
}
class ad extends Nr {
  constructor(t) {
    ;(super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      opaque: t.opaque,
      projection: t.projection,
      state: t.state,
      tileGrid: t.tileGrid,
      tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : ld,
      tilePixelRatio: t.tilePixelRatio,
      tileUrlFunction: t.tileUrlFunction,
      url: t.url,
      urls: t.urls,
      wrapX: t.wrapX,
      transition: t.transition,
      interpolate: t.interpolate !== void 0 ? t.interpolate : !0,
      key: t.key,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection,
    }),
      (this.crossOrigin = t.crossOrigin !== void 0 ? t.crossOrigin : null),
      (this.tileClass = t.tileClass !== void 0 ? t.tileClass : Wa),
      (this.tileCacheForProjection = {}),
      (this.tileGridForProjection = {}),
      (this.reprojectionErrorThreshold_ = t.reprojectionErrorThreshold),
      (this.renderReprojectionEdges_ = !1))
  }
  canExpireCache() {
    if (this.tileCache.canExpireCache()) return !0
    for (const t in this.tileCacheForProjection)
      if (this.tileCacheForProjection[t].canExpireCache()) return !0
    return !1
  }
  expireCache(t, e) {
    const i = this.getTileCacheForProjection(t)
    this.tileCache.expireCache(this.tileCache == i ? e : {})
    for (const n in this.tileCacheForProjection) {
      const r = this.tileCacheForProjection[n]
      r.expireCache(r == i ? e : {})
    }
  }
  getGutterForProjection(t) {
    return this.getProjection() && t && !Ae(this.getProjection(), t) ? 0 : this.getGutter()
  }
  getGutter() {
    return 0
  }
  getKey() {
    let t = super.getKey()
    return (this.getInterpolate() || (t += ':disable-interpolation'), t)
  }
  getOpaque(t) {
    return this.getProjection() && t && !Ae(this.getProjection(), t) ? !1 : super.getOpaque(t)
  }
  getTileGridForProjection(t) {
    const e = this.getProjection()
    if (this.tileGrid && (!e || Ae(e, t))) return this.tileGrid
    const i = D(t)
    return (
      i in this.tileGridForProjection || (this.tileGridForProjection[i] = Qa(t)),
      this.tileGridForProjection[i]
    )
  }
  getTileCacheForProjection(t) {
    const e = this.getProjection()
    if (!e || Ae(e, t)) return this.tileCache
    const i = D(t)
    return (
      i in this.tileCacheForProjection ||
        (this.tileCacheForProjection[i] = new Ha(this.tileCache.highWaterMark)),
      this.tileCacheForProjection[i]
    )
  }
  createTile_(t, e, i, n, r, o) {
    const a = [t, e, i],
      l = this.getTileCoordForTileUrlFunction(a, r),
      h = l ? this.tileUrlFunction(l, n, r) : void 0,
      c = new this.tileClass(
        a,
        h !== void 0 ? P.IDLE : P.EMPTY,
        h !== void 0 ? h : '',
        this.crossOrigin,
        this.tileLoadFunction,
        this.tileOptions,
      )
    return ((c.key = o), c.addEventListener(O.CHANGE, this.handleTileChange.bind(this)), c)
  }
  getTile(t, e, i, n, r) {
    const o = this.getProjection()
    if (!o || !r || Ae(o, r)) return this.getTileInternal(t, e, i, n, o || r)
    const a = this.getTileCacheForProjection(r),
      l = [t, e, i]
    let h
    const c = qa(l)
    a.containsKey(c) && (h = a.get(c))
    const u = this.getKey()
    if (h && h.key == u) return h
    const d = this.getTileGridForProjection(o),
      f = this.getTileGridForProjection(r),
      g = this.getTileCoordForTileUrlFunction(l, r),
      _ = new tr(
        o,
        d,
        r,
        f,
        l,
        g,
        this.getTilePixelRatio(n),
        this.getGutter(),
        (m, p, y, x) => this.getTileInternal(m, p, y, x, o),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.getInterpolate(),
      )
    return ((_.key = u), h ? ((_.interimTile = h), _.refreshInterimChain(), a.replace(c, _)) : a.set(c, _), _)
  }
  getTileInternal(t, e, i, n, r) {
    let o = null
    const a = fs(t, e, i),
      l = this.getKey()
    if (!this.tileCache.containsKey(a)) ((o = this.createTile_(t, e, i, n, r, l)), this.tileCache.set(a, o))
    else if (((o = this.tileCache.get(a)), o.key != l)) {
      const h = o
      ;((o = this.createTile_(t, e, i, n, r, l)),
        h.getState() == P.IDLE ? (o.interimTile = h.interimTile) : (o.interimTile = h),
        o.refreshInterimChain(),
        this.tileCache.replace(a, o))
    }
    return o
  }
  setRenderReprojectionEdges(t) {
    if (this.renderReprojectionEdges_ != t) {
      this.renderReprojectionEdges_ = t
      for (const e in this.tileCacheForProjection) this.tileCacheForProjection[e].clear()
      this.changed()
    }
  }
  setTileGridForProjection(t, e) {
    const i = it(t)
    if (i) {
      const n = D(i)
      n in this.tileGridForProjection || (this.tileGridForProjection[n] = e)
    }
  }
  clear() {
    super.clear()
    for (const t in this.tileCacheForProjection) this.tileCacheForProjection[t].clear()
  }
}
function ld(s, t) {
  s.getImage().src = t
}
class hd extends ad {
  constructor(t) {
    t = t || {}
    const e = t.projection !== void 0 ? t.projection : 'EPSG:3857',
      i =
        t.tileGrid !== void 0
          ? t.tileGrid
          : Du({
              extent: Gr(e),
              maxResolution: t.maxResolution,
              maxZoom: t.maxZoom,
              minZoom: t.minZoom,
              tileSize: t.tileSize,
            })
    ;(super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      crossOrigin: t.crossOrigin,
      interpolate: t.interpolate,
      opaque: t.opaque,
      projection: e,
      reprojectionErrorThreshold: t.reprojectionErrorThreshold,
      tileGrid: i,
      tileLoadFunction: t.tileLoadFunction,
      tilePixelRatio: t.tilePixelRatio,
      tileUrlFunction: t.tileUrlFunction,
      url: t.url,
      urls: t.urls,
      wrapX: t.wrapX !== void 0 ? t.wrapX : !0,
      transition: t.transition,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection,
    }),
      (this.gutter_ = t.gutter !== void 0 ? t.gutter : 0))
  }
  getGutter() {
    return this.gutter_
  }
}
const cd =
  '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.'
class ud extends hd {
  constructor(t) {
    t = t || {}
    let e
    t.attributions !== void 0 ? (e = t.attributions) : (e = [cd])
    const i = t.crossOrigin !== void 0 ? t.crossOrigin : 'anonymous',
      n = t.url !== void 0 ? t.url : 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    super({
      attributions: e,
      attributionsCollapsible: !1,
      cacheSize: t.cacheSize,
      crossOrigin: i,
      interpolate: t.interpolate,
      maxZoom: t.maxZoom !== void 0 ? t.maxZoom : 19,
      opaque: t.opaque !== void 0 ? t.opaque : !0,
      reprojectionErrorThreshold: t.reprojectionErrorThreshold,
      tileLoadFunction: t.tileLoadFunction,
      transition: t.transition,
      url: n,
      wrapX: t.wrapX,
      zDirection: t.zDirection,
    })
  }
}
const dd = `<h1>ol-geom-editor</h1>
<p>An elegant OpenLayers extension for editing geometric shapes. Really easy to use with elegant and intuitive api.</p>
<p><a href="https://jackchoumine.github.io/ol-geom-editor/">docs and demo</a></p>
<p><a href="https://github.com/jackchoumine/ol-geom-editor.git">code in github. If helpful, give me a star!</a></p>
<h2>Usage</h2>
<h3>installation</h3>
<blockquote>
<p>in node</p>
</blockquote>
<pre><code class="hljs language-bash">npm i ol-geom-editor
</code></pre>
<p>then</p>
<pre><code class="hljs language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">GeomEditor</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ol-geom-editor&#x27;</span>
<span class="hljs-comment">// import style if need show tool bar</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;ol-geom-editor/dist/index.css&#x27;</span>

<span class="hljs-keyword">const</span> geomEditor = <span class="hljs-keyword">new</span> <span class="hljs-title class_">GeomEditor</span>(olMap) <span class="hljs-comment">// pass ol map instance</span>
</code></pre>
<blockquote>
<p>in browser</p>
</blockquote>
<pre><code class="hljs language-html"><span class="hljs-comment">&lt;!-- import style if need show tool bar --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://unpkg.com/ol-geom-editor/dist/index.css&quot;</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/ol-geom-editor&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<p>then</p>
<pre><code class="hljs language-js"><span class="hljs-keyword">const</span> { <span class="hljs-title class_">GeomEditor</span> } = <span class="hljs-variable language_">window</span>.<span class="hljs-property">olGeomEditor</span>

<span class="hljs-keyword">const</span> geomEditor = <span class="hljs-keyword">new</span> <span class="hljs-title class_">GeomEditor</span>(olMap) <span class="hljs-comment">// pass ol map instance</span>
</code></pre>
<p><code>ol-geom-editor</code> depends on ol， you should import ol firstly!</p>
<h2>create a GeomEditor instance</h2>
<p>GeomEditor constructor has two params，the second is optional object.</p>
<pre><code class="hljs language-js"><span class="hljs-keyword">const</span> geomEditor = <span class="hljs-keyword">new</span> <span class="hljs-title class_">GeomEditor</span>(olMapInstance, options)
</code></pre>
<p>options has some props:</p>
<table>
<thead>
<tr>
<th>prop</th>
<th>type</th>
<th>default</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>showToolBar</td>
<td>boolean</td>
<td>true</td>
<td>render tool bar or not</td>
</tr>
<tr>
<td>supportFreehand</td>
<td>boolean</td>
<td>true</td>
<td>support freehand draw or not</td>
</tr>
<tr>
<td>drawTypes</td>
<td>Array</td>
<td>['Point', 'LineString', 'Polygon', 'Circle']</td>
<td>draw feature types</td>
</tr>
<tr>
<td>actions</td>
<td>Array</td>
<td>['remove', 'modify', 'translate', 'complete']</td>
<td>operations on feature</td>
</tr>
<tr>
<td>layerStyle</td>
<td>Style | StyleLike | FlatStyle</td>
<td>openLayers default feature style</td>
<td>default feature style</td>
</tr>
<tr>
<td>selectedStyle</td>
<td>StyleLike</td>
<td>below</td>
<td>feature style is selected</td>
</tr>
</tbody>
</table>
<p>default selected style:</p>
<pre><code class="hljs language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Circle</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">CircleStyle</span>, <span class="hljs-title class_">Fill</span>, <span class="hljs-title class_">Stroke</span>, <span class="hljs-title class_">Style</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ol/style&#x27;</span>

<span class="hljs-keyword">const</span> selectedStyle = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Style</span>({
  <span class="hljs-attr">fill</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Fill</span>({ <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;rgba(255,255,255,0.5)&#x27;</span> }),
  <span class="hljs-attr">stroke</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Stroke</span>({
    <span class="hljs-attr">width</span>: <span class="hljs-number">2.5</span>,
    <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;red&#x27;</span>,
  }),
  <span class="hljs-attr">image</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">CircleStyle</span>({
    <span class="hljs-attr">radius</span>: <span class="hljs-number">5</span>,
    <span class="hljs-attr">stroke</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Stroke</span>({ <span class="hljs-attr">width</span>: <span class="hljs-number">2.5</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;red&#x27;</span> }),
  }),
})
</code></pre>
<h2>GeomEditor has some methods</h2>
<table>
<thead>
<tr>
<th>method</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>addFeatureFromWKT</td>
<td>add feature by wkt</td>
</tr>
<tr>
<td>addFeatureFromJSON</td>
<td>add feature by GeoJSON or GeoJSON Object</td>
</tr>
<tr>
<td>enableDraw</td>
<td>enable draw interaction</td>
</tr>
<tr>
<td>disableDraw</td>
<td>disable draw interaction</td>
</tr>
<tr>
<td>enableFreehand</td>
<td>enable freehand draw</td>
</tr>
<tr>
<td>disableFreehand</td>
<td>disable freehand draw</td>
</tr>
<tr>
<td>select</td>
<td>select features</td>
</tr>
<tr>
<td>deselect</td>
<td>deselect features</td>
</tr>
<tr>
<td>enableSelect</td>
<td>enable select interaction</td>
</tr>
<tr>
<td>disableSelect</td>
<td>disable select interaction</td>
</tr>
<tr>
<td>enableModify</td>
<td>enable modify interaction，modify only one feature once time</td>
</tr>
<tr>
<td>disableModify</td>
<td>disable modify interaction</td>
</tr>
<tr>
<td>enableTranslate</td>
<td>enable translate interaction，can translate multi features</td>
</tr>
<tr>
<td>disableTranslate</td>
<td>disable translate interaction</td>
</tr>
<tr>
<td>removeFeatures</td>
<td>remove features</td>
</tr>
<tr>
<td>removeAllFeatures</td>
<td>remove all features</td>
</tr>
<tr>
<td>completeEdit</td>
<td>complete edit</td>
</tr>
</tbody>
</table>
<h3>add features</h3>
<p>You can add feature by WKT or GeoJSON.</p>
<blockquote>
<p><code>addFeatureFromWKT(wkt:string, id?:string, dataProjection?:string | FeatureOptions): Feature | null</code></p>
</blockquote>
<table>
<thead>
<tr>
<th>param</th>
<th>type</th>
<th>default</th>
<th>optional</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>wkt</td>
<td>string</td>
<td></td>
<td>required</td>
<td>WKT</td>
</tr>
<tr>
<td>id</td>
<td>string | number</td>
<td>random string</td>
<td>✅</td>
<td>id of feature</td>
</tr>
<tr>
<td>dataProjection</td>
<td>string | FeatureOptions</td>
<td>'EPSG:4326'</td>
<td>✅</td>
<td>EPSG projection</td>
</tr>
</tbody>
</table>
<p>FeatureOptions is a Object :</p>
<table>
<thead>
<tr>
<th>prop</th>
<th>type</th>
<th>default</th>
<th>optional</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>dataProjection</td>
<td>string</td>
<td>'EPSG:4326'</td>
<td>✅</td>
<td>EPSG projection</td>
</tr>
<tr>
<td>featureProjection</td>
<td>string</td>
<td>'EPSG:3857'</td>
<td>✅</td>
<td>map projection</td>
</tr>
<tr>
<td>style</td>
<td>StyleLike</td>
<td>default ol feature style</td>
<td>✅</td>
<td>feature style</td>
</tr>
</tbody>
</table>
<blockquote>
<p><code>addFeatureFromJSON(JSON:string | geoJSONObj, dataProjection?:string | FeatureOptions): Feature | null</code></p>
</blockquote>
<h4>examples</h4>
<pre><code class="hljs language-js"><span class="hljs-keyword">const</span> lineWKT = <span class="hljs-string">&#x27;LINESTRING(106.55773424492708 26.68974989181626,106.79592190619702 26.712142565234185)&#x27;</span>
geomEditor.<span class="hljs-title function_">addFeatureFromWKT</span>(lineWKT, <span class="hljs-string">&#x27;test&#x27;</span>, <span class="hljs-string">&#x27;EPSG:3857&#x27;</span>)
<span class="hljs-keyword">const</span> pointJSON = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>({
  <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;Feature&#x27;</span>,
  <span class="hljs-attr">feature</span>: {
    <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;Point&#x27;</span>,
    <span class="hljs-attr">coordinates</span>: [<span class="hljs-number">106.51521987473564</span>, <span class="hljs-number">26.73992541007939</span>],
  },
  <span class="hljs-attr">properties</span>: <span class="hljs-literal">null</span>,
  <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;p2CQqn2lFk&#x27;</span>,
})
geomEditor.<span class="hljs-title function_">addFeatureFromJSON</span>(pointJSON, <span class="hljs-string">&#x27;EPSG:3857&#x27;</span>)

<span class="hljs-keyword">const</span> circle = {
  <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;Feature&#x27;</span>,
  <span class="hljs-attr">feature</span>: {
    <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;Polygon&#x27;</span>,
    <span class="hljs-attr">coordinates</span>: [
      [
        [<span class="hljs-number">106.66476503874576</span>, <span class="hljs-number">26.738016763637745</span>],
        [<span class="hljs-number">106.68640913786953</span>, <span class="hljs-number">26.736111276601743</span>],
        [<span class="hljs-number">106.70721936319747</span>, <span class="hljs-number">26.730468229538047</span>],
        [<span class="hljs-number">106.72639420813869</span>, <span class="hljs-number">26.721305014609847</span>],
        [<span class="hljs-number">106.74319560707363</span>, <span class="hljs-number">26.708974566151827</span>],
        [<span class="hljs-number">106.75697747969463</span>, <span class="hljs-number">26.69395167555302</span>],
        [<span class="hljs-number">106.76721062138205</span>, <span class="hljs-number">26.676814601696407</span>],
        [<span class="hljs-number">106.77350297396065</span>, <span class="hljs-number">26.658222705723794</span>],
        [<span class="hljs-number">106.77561450846642</span>, <span class="hljs-number">26.63889099150018</span>],
        [<span class="hljs-number">106.77346617656862</span>, <span class="hljs-number">26.619562548517454</span>],
        [<span class="hljs-number">106.76714262863425</span>, <span class="hljs-number">26.6009799682551</span>],
        [<span class="hljs-number">106.75688864282368</span>, <span class="hljs-number">26.58385683635614</span>],
        [<span class="hljs-number">106.7430994506547</span>, <span class="hljs-number">26.568850391436218</span>],
        [<span class="hljs-number">106.7263053711149</span>, <span class="hljs-number">26.556536388677117</span>],
        [<span class="hljs-number">106.70715137023352</span>, <span class="hljs-number">26.54738711575494</span>],
        [<span class="hljs-number">106.68637234032467</span>, <span class="hljs-number">26.541753384449873</span>],
        [<span class="hljs-number">106.66476503874576</span>, <span class="hljs-number">26.539851168674797</span>],
        [<span class="hljs-number">106.64315773716687</span>, <span class="hljs-number">26.541753384449873</span>],
        [<span class="hljs-number">106.62237870725802</span>, <span class="hljs-number">26.54738711575494</span>],
        [<span class="hljs-number">106.60322470637662</span>, <span class="hljs-number">26.556536388677117</span>],
        [<span class="hljs-number">106.58643062683683</span>, <span class="hljs-number">26.568850391436218</span>],
        [<span class="hljs-number">106.57264143466786</span>, <span class="hljs-number">26.58385683635614</span>],
        [<span class="hljs-number">106.5623874488573</span>, <span class="hljs-number">26.6009799682551</span>],
        [<span class="hljs-number">106.55606390092291</span>, <span class="hljs-number">26.619562548517454</span>],
        [<span class="hljs-number">106.55391556902511</span>, <span class="hljs-number">26.63889099150018</span>],
        [<span class="hljs-number">106.55602710353088</span>, <span class="hljs-number">26.658222705723794</span>],
        [<span class="hljs-number">106.56231945610948</span>, <span class="hljs-number">26.676814601696407</span>],
        [<span class="hljs-number">106.5725525977969</span>, <span class="hljs-number">26.69395167555302</span>],
        [<span class="hljs-number">106.5863344704179</span>, <span class="hljs-number">26.708974566151827</span>],
        [<span class="hljs-number">106.60313586935284</span>, <span class="hljs-number">26.721305014609847</span>],
        [<span class="hljs-number">106.62231071429407</span>, <span class="hljs-number">26.730468229538047</span>],
        [<span class="hljs-number">106.64312093962201</span>, <span class="hljs-number">26.736111276601743</span>],
        [<span class="hljs-number">106.66476503874576</span>, <span class="hljs-number">26.738016763637745</span>],
      ],
    ],
  },
  <span class="hljs-attr">properties</span>: {
    <span class="hljs-attr">geometryType</span>: <span class="hljs-string">&#x27;circle&#x27;</span>,
    <span class="hljs-attr">center3857</span>: [<span class="hljs-number">11873867.329697348</span>, <span class="hljs-number">3078433.290578392</span>],
    <span class="hljs-attr">center</span>: [<span class="hljs-number">106.66476503874576</span>, <span class="hljs-number">26.638933966156273</span>],
    <span class="hljs-attr">radius</span>: <span class="hljs-number">11017.51961571537</span>,
  },
}
geomEditor.<span class="hljs-title function_">addFeatureFromJSON</span>(circle, { <span class="hljs-attr">featureProjection</span>: <span class="hljs-string">&#x27;EPSG:3857&#x27;</span> })
</code></pre>
<h3>draw feature</h3>
<blockquote>
<p><code>enableDraw(type: GeomType, style?: Style | StyleLike | FlatStyle)</code></p>
</blockquote>
<table>
<thead>
<tr>
<th>param</th>
<th>type</th>
<th>default</th>
<th>optional</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>string</td>
<td></td>
<td>required</td>
<td>draw feature type</td>
</tr>
<tr>
<td>style</td>
<td>Style | StyleLike | FlatStyle</td>
<td>ol default sketch style</td>
<td>✅</td>
<td>sketch style</td>
</tr>
</tbody>
</table>
<p>type pass <code>None</code> to draw nothing.</p>
<blockquote>
<p><code>disableDraw()</code> -- disable draw interaction.</p>
</blockquote>
<blockquote>
<p><code>enableFreehand()</code> -- enable freehand draw interaction.</p>
</blockquote>
<blockquote>
<p><code>disableFreehand()</code> -- disable freehand draw interaction.</p>
</blockquote>
<h3>select feature</h3>
<blockquote>
<p><code>select(id: Id | Id[], options?: SelectOptions): Feature[]</code></p>
</blockquote>
<p>select some features.</p>
<table>
<thead>
<tr>
<th>param</th>
<th>type</th>
<th>default</th>
<th>optional</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>string | string[]</td>
<td></td>
<td>required</td>
<td>feature id</td>
</tr>
<tr>
<td>options</td>
<td>SelectOptions Object</td>
<td>below</td>
<td>✅</td>
<td></td>
</tr>
</tbody>
</table>
<!-- options should support boolean -->
<p>options is a object , props :</p>
<table>
<thead>
<tr>
<th>prop</th>
<th>type</th>
<th>default</th>
<th>optional</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>selectedStyle</td>
<td>Style | StyleLike | FlatStyle</td>
<td>below</td>
<td>✅</td>
<td>selected style</td>
</tr>
<tr>
<td>eachFeature</td>
<td>function</td>
<td></td>
<td>✅</td>
<td>traverse features</td>
</tr>
<tr>
<td>fit</td>
<td>boolean | viewFitOptions Object</td>
<td>true</td>
<td>✅</td>
<td>fit selected feature to view</td>
</tr>
</tbody>
</table>
<p>default selected style:</p>
<pre><code class="hljs language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Circle</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">CircleStyle</span>, <span class="hljs-title class_">Fill</span>, <span class="hljs-title class_">Stroke</span>, <span class="hljs-title class_">Style</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ol/style&#x27;</span>

<span class="hljs-keyword">const</span> highlightStyle = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Style</span>({
  <span class="hljs-attr">fill</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Fill</span>({ <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;rgba(255,255,255,0.5)&#x27;</span> }),
  <span class="hljs-attr">stroke</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Stroke</span>({
    <span class="hljs-attr">width</span>: <span class="hljs-number">2.5</span>,
    <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;red&#x27;</span>,
  }),
  <span class="hljs-attr">image</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">CircleStyle</span>({
    <span class="hljs-attr">radius</span>: <span class="hljs-number">5</span>,
    <span class="hljs-attr">stroke</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Stroke</span>({ <span class="hljs-attr">width</span>: <span class="hljs-number">2.5</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;red&#x27;</span> }),
  }),
})
</code></pre>
<p>eachFeature return truthy value, will stop traverse.</p>
<h4>examples</h4>
<pre><code class="hljs language-ts"><span class="hljs-keyword">const</span> fillColor = <span class="hljs-string">&#x27;rgba(218,228,194,0.5)&#x27;</span>
<span class="hljs-keyword">const</span> strokeColor = <span class="hljs-string">&#x27;rgba(255, 204, 51, 0.9)&#x27;</span>

<span class="hljs-keyword">const</span> features = geomEditor.<span class="hljs-title function_">select</span>([<span class="hljs-string">&#x27;line1&#x27;</span>, <span class="hljs-string">&#x27;p2CQqn2lFk&#x27;</span>], {
  <span class="hljs-attr">selectedStyle</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Style</span>({
    <span class="hljs-attr">fill</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Fill</span>({
      <span class="hljs-attr">color</span>: fillColor,
    }),
    <span class="hljs-attr">stroke</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Stroke</span>({
      <span class="hljs-attr">color</span>: strokeColor,
      <span class="hljs-attr">width</span>: <span class="hljs-number">4</span>,
    }),
    <span class="hljs-attr">image</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">CircleStyle</span>({
      <span class="hljs-attr">radius</span>: <span class="hljs-number">7</span>,
      <span class="hljs-attr">fill</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Fill</span>({ <span class="hljs-attr">color</span>: fillColor }),
      <span class="hljs-attr">stroke</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Stroke</span>({ <span class="hljs-attr">color</span>: strokeColor, <span class="hljs-attr">width</span>: <span class="hljs-number">2</span> }),
    }),
  }),
  <span class="hljs-attr">eachFeature</span>: <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">feat</span>: <span class="hljs-title class_">Feature</span>, <span class="hljs-attr">index</span>: <span class="hljs-built_in">number</span></span>) =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>({ feat })
    <span class="hljs-keyword">if</span> (index === <span class="hljs-number">0</span>) <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>
  },
})
</code></pre>
<h3>deselect feature</h3>
<blockquote>
<p><code>deselect(id: Id | Id[], options?: DeselectOptions)</code></p>
</blockquote>
<p>options is a object, props:</p>
<table>
<thead>
<tr>
<th>prop</th>
<th>type</th>
<th>default</th>
<th>optional</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>deselectedStyle</td>
<td>Style | StyleLike | FlatStyle</td>
<td></td>
<td>✅</td>
<td>deselected style</td>
</tr>
<tr>
<td>eachFeature</td>
<td>function</td>
<td></td>
<td>✅</td>
<td>traverse features</td>
</tr>
</tbody>
</table>
<h4>examples</h4>
<pre><code class="hljs language-ts">geomEditor.<span class="hljs-title function_">deselect</span>([<span class="hljs-string">&#x27;line1&#x27;</span>, <span class="hljs-string">&#x27;p2CQqn2lFk&#x27;</span>])
</code></pre>
<h3>select interaction</h3>
<blockquote>
<p><code>enableSelect(options?: SelectModeOptions)</code> -- enable select interaction</p>
</blockquote>
<p>options is a object, set select mode</p>
<table>
<thead>
<tr>
<th>prop</th>
<th>type</th>
<th>default</th>
<th>optional</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>multi</td>
<td>boolean</td>
<td>true</td>
<td>✅</td>
<td>select multiple features</td>
</tr>
<tr>
<td>single</td>
<td>boolean</td>
<td>false</td>
<td>✅</td>
<td>only can select one feature</td>
</tr>
</tbody>
</table>
<p>translate interaction support multi mode default, modify interaction support single mode only.</p>
<blockquote>
<p><code>disableSelect()</code> -- disable select interaction</p>
</blockquote>
<h3>modify feature</h3>
<blockquote>
<p><code>enableModify(style?: StyleLike | FlatStyle)</code> -- enable modify interaction</p>
</blockquote>
<blockquote>
<p><code>disableModify()</code> -- disable modify interaction</p>
</blockquote>
<h3>translate features</h3>
<blockquote>
<p><code>enableTranslate()</code> -- enable translate interaction</p>
</blockquote>
<blockquote>
<p><code>disableTranslate()</code> -- disable translate interaction</p>
</blockquote>
<p>translate interaction support multi mode default, modify interaction support single mode only.</p>
<h3>remove feature</h3>
<blockquote>
<p><code>removeFeatures(id?: Id | Id[])</code> - remove features</p>
</blockquote>
<table>
<thead>
<tr>
<th>param</th>
<th>type</th>
<th>default</th>
<th>optional</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>string | string[]</td>
<td></td>
<td>✅</td>
<td>feature id</td>
</tr>
</tbody>
</table>
<p>if don't pass id, will remove all selected features.</p>
<blockquote>
<p><code>removeAllFeatures():Promise&lt;boolean&gt;</code> -- remove all features</p>
</blockquote>
<h4>examples</h4>
<pre><code class="hljs language-ts">geomEditor.<span class="hljs-title function_">removeFeatures</span>() <span class="hljs-comment">// remove all selected features</span>
geomEditor.<span class="hljs-title function_">removeFeatures</span>(<span class="hljs-string">&#x27;test&#x27;</span>) <span class="hljs-comment">// remove one feature by id</span>
geomEditor.<span class="hljs-title function_">removeFeatures</span>([<span class="hljs-string">&#x27;test1&#x27;</span>, <span class="hljs-string">&#x27;test2&#x27;</span>]) <span class="hljs-comment">// remove features by id array</span>
geomEditor.<span class="hljs-title function_">removeAllFeatures</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">success</span> =&gt;</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>({ success })
})
</code></pre>
<h3>complete edit</h3>
<blockquote>
<p><code>completeEdit()</code> -- complete edit</p>
</blockquote>
<p>All style of features will reset original status.</p>
<h2>events</h2>
<p>GeomEditor trigger some events when interact with features.</p>
<blockquote>
<p>GeomEditor trigger custom events and trigger ol interaction event.</p>
</blockquote>
<blockquote>
<p>Custom events have a better name over ol, like <code>drawBegin</code> is better than <code>drawbegin</code> in ol event style name in my opinion.</p>
</blockquote>
<blockquote>
<p>All events includes soma data you can use directly and align with the original event.</p>
</blockquote>
<p>event list:</p>
<table>
<thead>
<tr>
<th>event</th>
<th>when emit</th>
</tr>
</thead>
<tbody>
<tr>
<td>select</td>
<td>select feature</td>
</tr>
<tr>
<td>deselect</td>
<td>deselect feature</td>
</tr>
<tr>
<td>drawBegin</td>
<td>begin draw feature</td>
</tr>
<tr>
<td>drawComplete</td>
<td>finish draw feature</td>
</tr>
<tr>
<td>modifyBegin</td>
<td>begin modify feature</td>
</tr>
<tr>
<td>modifyComplete</td>
<td>finish modify feature</td>
</tr>
<tr>
<td>translateBegin</td>
<td>begin translate features</td>
</tr>
<tr>
<td>translateComplete</td>
<td>finish translate features</td>
</tr>
<tr>
<td>remove</td>
<td>remove feature</td>
</tr>
<tr>
<td>complete</td>
<td>complete edit feature</td>
</tr>
</tbody>
</table>
<blockquote>
<p>The original event will also be triggered during interacting.</p>
</blockquote>
<blockquote>
<p>Recommend use GeomEditor events, because it has converted feature to WKT and GeoJSON and include data in original event. More convenient！</p>
</blockquote>
<h4>examples</h4>
<pre><code class="hljs language-js"><span class="hljs-comment">// original event</span>
geomEditor.<span class="hljs-title function_">on</span>(<span class="hljs-string">&#x27;modifystart&#x27;</span>, <span class="hljs-function"><span class="hljs-params">event</span> =&gt;</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>({ event })
})
<span class="hljs-comment">// original event</span>
geomEditor.<span class="hljs-title function_">on</span>(<span class="hljs-string">&#x27;modifyend&#x27;</span>, <span class="hljs-function"><span class="hljs-params">event</span> =&gt;</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>({ event })
})
<span class="hljs-comment">// NOTE GeomEditor event, you can get data including original event</span>
geomEditor.<span class="hljs-title function_">on</span>(<span class="hljs-string">&#x27;modifyBegin&#x27;</span>, <span class="hljs-function"><span class="hljs-params">event</span> =&gt;</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>({ event })
})
geomEditor.<span class="hljs-title function_">on</span>(<span class="hljs-string">&#x27;modifyComplete&#x27;</span>, <span class="hljs-function"><span class="hljs-params">event</span> =&gt;</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>({ event })
})
geomEditor.<span class="hljs-title function_">on</span>(<span class="hljs-string">&#x27;remove&#x27;</span>, <span class="hljs-function"><span class="hljs-params">event</span> =&gt;</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>({ event })
})
geomEditor.<span class="hljs-title function_">on</span>(<span class="hljs-string">&#x27;complete&#x27;</span>, <span class="hljs-function"><span class="hljs-params">event</span> =&gt;</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>({ event })
})
</code></pre>
<p>Open the console panel on this page, operate the demo, and check the events.</p>
<h2>🤝 Contributing</h2>
<p>Contributions are always welcome!
Feel free to open an issue, suggest a feature, or submit a pull request.</p>
<h2>⭐ Support</h2>
<p>If you find this project helpful, please consider giving it a star ⭐ — it helps others discover the project and keeps us motivated! <a href="https://github.com/jackchoumine/ol-geom-editor">give me a star</a></p>
`,
  fd = 'LINESTRING(106.55773424492708 26.68974989181626,106.79592190619702 26.712142565234185)',
  gd =
    'POLYGON((106.54206177148436 26.659310154932655,106.56403442773436 26.438183322888236,107.125710453125 26.488588582801427,107.07901855859373 26.6924423562391,106.54206177148436 26.659310154932655))',
  _d = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [106.00100979603302, 26.690409244736202],
          [106.00100979603302, 26.690409244736202],
          [105.99898192028921, 26.676077172507135],
          [105.9970912143908, 26.65768264919153],
          [105.99610973543892, 26.632040894052494],
          [105.99601066134345, 26.614280519781218],
          [105.99601066134345, 26.601958210551004],
          [105.99634191415677, 26.585356273586413],
          [105.99728986549596, 26.57403087568092],
          [105.99835428337971, 26.568508621262055],
          [105.99884319979172, 26.566345068795343],
          [105.99884319979172, 26.566345068795343],
          [105.99916208929787, 26.564415308508345],
          [105.99916208929787, 26.562021102589966],
          [105.99916208929787, 26.5583340326167],
          [105.99916208929787, 26.553917729569903],
          [105.99916208929787, 26.549504330584853],
          [105.99916208929787, 26.54562895149094],
          [105.99916208929787, 26.541504565103594],
          [105.99916208929787, 26.536748628745528],
          [105.99916208929787, 26.531196868706715],
          [105.99888950980673, 26.52545191326149],
          [105.99861693031559, 26.520422052343804],
          [105.99861693031559, 26.516345848668507],
          [105.99861693031559, 26.513830296273397],
          [105.99861693031559, 26.513830296273397],
          [105.99861693031559, 26.51200709668261],
          [105.99861693031559, 26.51200709668261],
          [105.99861693031559, 26.510704632815276],
          [105.99847971856067, 26.50911292916193],
          [105.99828345629791, 26.507223685337095],
          [105.99804721235704, 26.5058958893091],
          [105.99804721235704, 26.5058958893091],
          [105.99769278358141, 26.50468239243183],
          [105.99769278358141, 26.50468239243183],
          [105.99769278358141, 26.50468239243183],
          [105.99769278358141, 26.50468239243183],
          [105.99769278358141, 26.50468239243183],
          [105.99769278358141, 26.50468239243183],
          [105.99769278358141, 26.50468239243183],
          [106.00082405305874, 26.506106475992752],
          [106.00661766644042, 26.506980247213065],
          [106.0199547831289, 26.50934661193115],
          [106.04271039295416, 26.51464644397734],
          [106.08051562610488, 26.524836645163035],
          [106.1245627787284, 26.536113586634386],
          [106.16183735358935, 26.544050816743038],
          [106.19333939555507, 26.549997324272027],
          [106.2141849372856, 26.553502092134053],
          [106.22766496542316, 26.555199571874496],
          [106.23771067637423, 26.556197916650646],
          [106.24328346851686, 26.55649287111686],
          [106.24674578125993, 26.556702502757062],
          [106.24898944910089, 26.556912171501565],
          [106.25038050975124, 26.556912171501565],
          [106.25038050975124, 26.556912171501565],
          [106.25203333723765, 26.556912171501565],
          [106.25203333723765, 26.556912171501565],
          [106.25429804365557, 26.556912171501565],
          [106.25634121637266, 26.557087726137866],
          [106.25852939601462, 26.557263280505296],
          [106.2605051782302, 26.557263280505296],
          [106.26200738291662, 26.557263280505296],
          [106.26200738291662, 26.557263280505296],
          [106.26461968685906, 26.557263280505296],
          [106.26652095395545, 26.557263280505296],
          [106.2689580761216, 26.55730005579356],
          [106.27195225957254, 26.55754616126714],
          [106.27492381188493, 26.558087141601618],
          [106.27771976332585, 26.558699007488727],
          [106.2815990757517, 26.55943566389226],
          [106.28649209554712, 26.560359748440007],
          [106.29247400838356, 26.56191531704438],
          [106.29979157749038, 26.564317284619918],
          [106.30677621740323, 26.56737986363919],
          [106.31234532150846, 26.570885374439328],
          [106.31726323555628, 26.574615294666913],
          [106.321903289514, 26.578475188739972],
          [106.3257851165108, 26.581720027296242],
          [106.32864451895874, 26.584059514778502],
          [106.33036121654729, 26.58571775185601],
          [106.33149755116027, 26.58673393255404],
          [106.33149755116027, 26.58673393255404],
          [106.33312003615717, 26.587749916844373],
          [106.33312003615717, 26.587749916844373],
          [106.3344090052269, 26.58838384839588],
          [106.3344090052269, 26.58838384839588],
          [106.3344090052269, 26.58838384839588],
          [106.3344090052269, 26.58838384839588],
          [106.33570828403751, 26.589068183215858],
          [106.33570828403751, 26.589068183215858],
          [106.33570828403751, 26.589068183215858],
          [106.3378777720354, 26.591290481734575],
          [106.34129985164324, 26.596658666088217],
          [106.348284240099, 26.612300196706727],
          [106.35863161574522, 26.643015922862432],
          [106.36740646253746, 26.67387723201577],
          [106.37354050691644, 26.69733013017496],
          [106.3788234528474, 26.716171151915844],
          [106.3823104083858, 26.727623538682394],
          [106.38420564051191, 26.733558363801365],
          [106.38514097708683, 26.73594467099666],
          [106.38514097708683, 26.73594467099666],
          [106.38558303866009, 26.737393985234746],
          [106.38558303866009, 26.737393985234746],
          [106.38558303866009, 26.737393985234746],
          [106.38590381409446, 26.73885784049081],
          [106.38590381409446, 26.73885784049081],
          [106.38629374023, 26.74108729128895],
          [106.38629374023, 26.742352886672947],
          [106.38629374023, 26.742352886672947],
          [106.38629374023, 26.74448017050642],
          [106.3860421154968, 26.745792098579102],
          [106.38397522199374, 26.74790475973998],
          [106.37877031158129, 26.7507034232991],
          [106.37132466699403, 26.753495917978128],
          [106.36191162209433, 26.75599287633092],
          [106.34964755664986, 26.758569656027674],
          [106.33489834073404, 26.761302907741822],
          [106.31825506615857, 26.763636731329143],
          [106.30014579671841, 26.765008982846254],
          [106.28556396740893, 26.765496051064446],
          [106.27536964531461, 26.765619459558877],
          [106.26653151515346, 26.765619459558877],
          [106.26028247106294, 26.765619459558877],
          [106.25600853863577, 26.765619459558877],
          [106.2526778217725, 26.765619459558877],
          [106.24995026666144, 26.765619459558877],
          [106.24646339494208, 26.76555667017186],
          [106.24152955527823, 26.764924639549292],
          [106.23481288480978, 26.762939073978487],
          [106.22640198025326, 26.759988969564915],
          [106.21656740944306, 26.75658577565909],
          [106.20525946769338, 26.752882494527356],
          [106.19416258226555, 26.749530696166033],
          [106.18385384719294, 26.746356214762486],
          [106.17401810291629, 26.74329835938495],
          [106.16468342881123, 26.740237427568985],
          [106.15586139190417, 26.737152047382608],
          [106.14613243307392, 26.733677465129375],
          [106.13627657222966, 26.7301904994291],
          [106.12758445482174, 26.72702410619104],
          [106.1188288025878, 26.723436391430482],
          [106.11018618031811, 26.719806861814888],
          [106.10174816030482, 26.716104516802318],
          [106.09413973915795, 26.712630639548962],
          [106.08747461739402, 26.709478807706162],
          [106.08086079287749, 26.70626414137341],
          [106.07472377292287, 26.703424904474815],
          [106.06940838902662, 26.700837346915208],
          [106.06419153440217, 26.698293724141976],
          [106.05890368505787, 26.695918534168456],
          [106.05421388450485, 26.693634879938713],
          [106.05025226178984, 26.69184813037701],
          [106.04663371037165, 26.690504576901205],
          [106.04330500516514, 26.689292062644824],
          [106.03971403020839, 26.688091405451573],
          [106.03582235447537, 26.68680330133877],
          [106.03220355160009, 26.685545101637416],
          [106.02879848725567, 26.684510140435776],
          [106.02543717644583, 26.683673896604645],
          [106.0226848528109, 26.682874531338513],
          [106.02026596128415, 26.682271380753406],
          [106.01789023655871, 26.682052130774323],
          [106.01595544184963, 26.681877891335702],
          [106.01405140872518, 26.681703651630798],
          [106.01218551326018, 26.681703651630798],
          [106.01055644846927, 26.681703651630798],
          [106.00913487769137, 26.681703651630798],
          [106.00913487769137, 26.681703651630798],
          [106.0071784576721, 26.68226744886168],
          [106.0071784576721, 26.68226744886168],
          [106.00570102150957, 26.68350744845057],
          [106.00570102150957, 26.68350744845057],
          [106.00474464635771, 26.68465838846693],
          [106.00474464635771, 26.68465838846693],
          [106.00474464635771, 26.68465838846693],
          [106.0041753474943, 26.68621762104725],
          [106.0041753474943, 26.68621762104725],
          [106.0041753474943, 26.68621762104725],
          [106.0041753474943, 26.68621762104725],
          [106.00382091871867, 26.687413842035966],
          [106.00382091871867, 26.687413842035966],
          [106.00382091871867, 26.687413842035966],
          [106.00382091871867, 26.687413842035966],
          [106.00382091871867, 26.689115063391256],
          [106.00382091871867, 26.689115063391256],
          [106.00382091871867, 26.689115063391256],
          [106.00382091871867, 26.689115063391256],
          [106.00382091871867, 26.69050281703869],
          [106.00100979603302, 26.690409244736202],
        ],
      ],
    },
    properties: null,
  },
  md = JSON.stringify({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [106.51521987473564, 26.73992541007939] },
    properties: null,
    id: 'p2CQqn2lFk',
  }),
  pd = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [106.66476503874576, 26.907894756760445],
          [106.67956449321109, 26.90757001512148],
          [106.69432804058407, 26.906596578132167],
          [106.70901986275929, 26.904976807622074],
          [106.72360431936578, 26.902714633468435],
          [106.73804603603737, 26.899815543856512],
          [106.75230999196896, 26.896286571680765],
          [106.76636160652433, 26.89213627712347],
          [106.78016682466522, 26.887374726457466],
          [106.79369220097405, 26.88201346712999],
          [106.8069049820492, 26.876065499194194],
          [106.81977318705582, 26.869545243164726],
          [106.83226568622189, 26.86246850438314],
          [106.84435227707715, 26.854852433987787],
          [106.85600375823834, 26.846715486591844],
          [106.86719200055374, 26.838077374781307],
          [106.87789001542794, 26.8289590205531],
          [106.88807202015745, 26.81938250382072],
          [106.89771350011698, 26.809371008122348],
          [106.9067912676464, 26.798948763673085],
          [106.91528351749893, 26.788140987909212],
          [106.92316987872167, 26.776973823678293],
          [106.93043146285014, 26.76547427523446],
          [106.93705090831087, 26.75367014220286],
          [106.94301242093533, 26.74158995168196],
          [106.94830181050227, 26.729262888656105],
          [106.95290652323466, 26.716718724894232],
          [106.95681567019084, 26.703987746513594],
          [106.96002005149955, 26.691100680389642],
          [106.96251217640064, 26.67808861959532],
          [106.96428627906377, 26.664982948054217],
          [106.96533833016956, 26.651815264593157],
          [106.96566604424739, 26.63861730658021],
          [106.96526888277542, 26.62542087333399],
          [106.96414805305889, 26.61225774948981],
          [106.96230650291233, 26.599159628507163],
          [106.95974891118207, 26.58615803650184],
          [106.95648167415416, 26.573284256583886],
          [106.95251288790273, 26.560569253880946],
          [106.9478523266424, 26.548043601423192],
          [106.94251141715709, 26.535737407063944],
          [106.93650320938549, 26.5236802416059],
          [106.92984234325199, 26.511901068299895],
          [106.92254501183838, 26.50042817387862],
          [106.9146289209997, 26.489289101283674],
          [106.90611324553385, 26.478510584239466],
          [106.8970185820208, 26.468118483822767],
          [106.88736689845413, 26.458137727171273],
          [106.87718148079199, 26.44859224846931],
          [106.86648687656103, 26.439504932342885],
          [106.85530883565133, 26.430897559790576],
          [106.84367424844487, 26.42279075677041],
          [106.8316110814246, 26.41520394555662],
          [106.81914831041506, 26.40815529897383],
          [106.80631585160914, 26.401661697609036],
          [106.79314449053895, 26.395738690095563],
          [106.77966580915172, 26.39040045655552],
          [106.76591211115473, 26.385659775280704],
          [106.75191634579511, 26.381527992724262],
          [106.73771203024324, 26.378014996868327],
          [106.72333317075025, 26.375129194025224],
          [106.70881418275125, 26.372877489122466],
          [106.6941898100883, 26.37126526951406],
          [106.6794950435275, 26.370296392352973],
          [106.66476503874576, 26.3699731755521],
          [106.65003503396403, 26.370296392352973],
          [106.63534026740322, 26.37126526951406],
          [106.62071589474029, 26.372877489122466],
          [106.6061969067413, 26.375129194025224],
          [106.59181804724828, 26.378014996868327],
          [106.57761373169642, 26.381527992724262],
          [106.56361796633679, 26.385659775280704],
          [106.5498642683398, 26.39040045655552],
          [106.53638558695258, 26.395738690095563],
          [106.52321422588238, 26.401661697609036],
          [106.51038176707647, 26.40815529897383],
          [106.49791899606693, 26.41520394555662],
          [106.48585582904667, 26.42279075677041],
          [106.4742212418402, 26.430897559790576],
          [106.46304320093051, 26.439504932342885],
          [106.45234859669954, 26.44859224846931],
          [106.44216317903738, 26.458137727171273],
          [106.43251149547072, 26.468118483822767],
          [106.42341683195768, 26.478510584239466],
          [106.41490115649182, 26.489289101283674],
          [106.40698506565315, 26.50042817387862],
          [106.39968773423954, 26.511901068299895],
          [106.39302686810603, 26.5236802416059],
          [106.38701866033445, 26.535737407063944],
          [106.38167775084912, 26.548043601423192],
          [106.3770171895888, 26.560569253880946],
          [106.37304840333736, 26.573284256583886],
          [106.36978116630945, 26.58615803650184],
          [106.3672235745792, 26.599159628507163],
          [106.36538202443265, 26.61225774948981],
          [106.36426119471612, 26.62542087333399],
          [106.36386403324416, 26.63861730658021],
          [106.36419174732197, 26.651815264593157],
          [106.36524379842776, 26.664982948054217],
          [106.3670179010909, 26.67808861959532],
          [106.36951002599196, 26.691100680389642],
          [106.3727144073007, 26.703987746513594],
          [106.3766235542569, 26.716718724894232],
          [106.38122826698925, 26.729262888656105],
          [106.3865176565562, 26.74158995168196],
          [106.39247916918066, 26.75367014220286],
          [106.39909861464139, 26.76547427523446],
          [106.40636019876987, 26.776973823678293],
          [106.41424655999259, 26.788140987909212],
          [106.42273880984513, 26.798948763673085],
          [106.43181657737455, 26.809371008122348],
          [106.4414580573341, 26.81938250382072],
          [106.45164006206359, 26.8289590205531],
          [106.46233807693778, 26.838077374781307],
          [106.47352631925318, 26.846715486591844],
          [106.48517780041438, 26.854852433987787],
          [106.49726439126965, 26.86246850438314],
          [106.50975689043572, 26.869545243164726],
          [106.52262509544232, 26.876065499194194],
          [106.53583787651749, 26.88201346712999],
          [106.54936325282632, 26.887374726457466],
          [106.5631684709672, 26.89213627712347],
          [106.57722008552257, 26.896286571680765],
          [106.59148404145415, 26.899815543856512],
          [106.60592575812576, 26.902714633468435],
          [106.62051021473223, 26.904976807622074],
          [106.63520203690746, 26.906596578132167],
          [106.64996558428044, 26.90757001512148],
          [106.66476503874576, 26.907894756760445],
        ],
      ],
    },
    properties: {
      geometryType: 'circle',
      center: [106.66476503874576, 26.638933966156273],
      radius: 29907.116690905154,
      center3857: [11873867329697348e-9, 3078433290578392e-9],
      r: 0.2277753578731161,
    },
    id: 'circle',
  }
class yd extends Ja {
  constructor() {
    super()
  }
  getType() {
    return 'text'
  }
  readFeature(t, e) {
    return this.readFeatureFromText(Sn(t), this.adaptOptions(e))
  }
  readFeatureFromText(t, e) {
    return F()
  }
  readFeatures(t, e) {
    return this.readFeaturesFromText(Sn(t), this.adaptOptions(e))
  }
  readFeaturesFromText(t, e) {
    return F()
  }
  readGeometry(t, e) {
    return this.readGeometryFromText(Sn(t), this.adaptOptions(e))
  }
  readGeometryFromText(t, e) {
    return F()
  }
  readProjection(t) {
    return this.readProjectionFromText(Sn(t))
  }
  readProjectionFromText(t) {
    return this.dataProjection
  }
  writeFeature(t, e) {
    return this.writeFeatureText(t, this.adaptOptions(e))
  }
  writeFeatureText(t, e) {
    return F()
  }
  writeFeatures(t, e) {
    return this.writeFeaturesText(t, this.adaptOptions(e))
  }
  writeFeaturesText(t, e) {
    return F()
  }
  writeGeometry(t, e) {
    return this.writeGeometryText(t, this.adaptOptions(e))
  }
  writeGeometryText(t, e) {
    return F()
  }
}
function Sn(s) {
  return typeof s == 'string' ? s : ''
}
const xd = { POINT: At, LINESTRING: Gt, POLYGON: It, MULTIPOINT: Si, MULTILINESTRING: Ye, MULTIPOLYGON: ze },
  el = 'EMPTY',
  il = 'Z',
  nl = 'M',
  Ed = 'ZM',
  B = { START: 0, TEXT: 1, LEFT_PAREN: 2, RIGHT_PAREN: 3, NUMBER: 4, COMMA: 5, EOF: 6 },
  Cd = {
    Point: 'POINT',
    LineString: 'LINESTRING',
    Polygon: 'POLYGON',
    MultiPoint: 'MULTIPOINT',
    MultiLineString: 'MULTILINESTRING',
    MultiPolygon: 'MULTIPOLYGON',
    GeometryCollection: 'GEOMETRYCOLLECTION',
    Circle: 'CIRCLE',
  }
class wd {
  constructor(t) {
    ;((this.wkt = t), (this.index_ = -1))
  }
  isAlpha_(t) {
    return (t >= 'a' && t <= 'z') || (t >= 'A' && t <= 'Z')
  }
  isNumeric_(t, e) {
    return ((e = e !== void 0 ? e : !1), (t >= '0' && t <= '9') || (t == '.' && !e))
  }
  isWhiteSpace_(t) {
    return (
      t == ' ' ||
      t == '	' ||
      t == '\r' ||
      t ==
        `
`
    )
  }
  nextChar_() {
    return this.wkt.charAt(++this.index_)
  }
  nextToken() {
    const t = this.nextChar_(),
      e = this.index_
    let i = t,
      n
    if (t == '(') n = B.LEFT_PAREN
    else if (t == ',') n = B.COMMA
    else if (t == ')') n = B.RIGHT_PAREN
    else if (this.isNumeric_(t) || t == '-') ((n = B.NUMBER), (i = this.readNumber_()))
    else if (this.isAlpha_(t)) ((n = B.TEXT), (i = this.readText_()))
    else {
      if (this.isWhiteSpace_(t)) return this.nextToken()
      if (t === '') n = B.EOF
      else throw new Error('Unexpected character: ' + t)
    }
    return { position: e, value: i, type: n }
  }
  readNumber_() {
    let t
    const e = this.index_
    let i = !1,
      n = !1
    do (t == '.' ? (i = !0) : (t == 'e' || t == 'E') && (n = !0), (t = this.nextChar_()))
    while (this.isNumeric_(t, i) || (!n && (t == 'e' || t == 'E')) || (n && (t == '-' || t == '+')))
    return parseFloat(this.wkt.substring(e, this.index_--))
  }
  readText_() {
    let t
    const e = this.index_
    do t = this.nextChar_()
    while (this.isAlpha_(t))
    return this.wkt.substring(e, this.index_--).toUpperCase()
  }
}
class Td {
  constructor(t) {
    ;((this.lexer_ = t), (this.token_ = { position: 0, type: B.START }), (this.layout_ = 'XY'))
  }
  consume_() {
    this.token_ = this.lexer_.nextToken()
  }
  isTokenType(t) {
    return this.token_.type == t
  }
  match(t) {
    const e = this.isTokenType(t)
    return (e && this.consume_(), e)
  }
  parse() {
    return (this.consume_(), this.parseGeometry_())
  }
  parseGeometryLayout_() {
    let t = 'XY'
    const e = this.token_
    if (this.isTokenType(B.TEXT)) {
      const i = e.value
      ;(i === il ? (t = 'XYZ') : i === nl ? (t = 'XYM') : i === Ed && (t = 'XYZM'),
        t !== 'XY' && this.consume_())
    }
    return t
  }
  parseGeometryCollectionText_() {
    if (this.match(B.LEFT_PAREN)) {
      const t = []
      do t.push(this.parseGeometry_())
      while (this.match(B.COMMA))
      if (this.match(B.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parsePointText_() {
    if (this.match(B.LEFT_PAREN)) {
      const t = this.parsePoint_()
      if (this.match(B.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseLineStringText_() {
    if (this.match(B.LEFT_PAREN)) {
      const t = this.parsePointList_()
      if (this.match(B.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parsePolygonText_() {
    if (this.match(B.LEFT_PAREN)) {
      const t = this.parseLineStringTextList_()
      if (this.match(B.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseMultiPointText_() {
    if (this.match(B.LEFT_PAREN)) {
      let t
      if (
        (this.token_.type == B.LEFT_PAREN ? (t = this.parsePointTextList_()) : (t = this.parsePointList_()),
        this.match(B.RIGHT_PAREN))
      )
        return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseMultiLineStringText_() {
    if (this.match(B.LEFT_PAREN)) {
      const t = this.parseLineStringTextList_()
      if (this.match(B.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseMultiPolygonText_() {
    if (this.match(B.LEFT_PAREN)) {
      const t = this.parsePolygonTextList_()
      if (this.match(B.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parsePoint_() {
    const t = [],
      e = this.layout_.length
    for (let i = 0; i < e; ++i) {
      const n = this.token_
      if (this.match(B.NUMBER)) t.push(n.value)
      else break
    }
    if (t.length == e) return t
    throw new Error(this.formatErrorMessage_())
  }
  parsePointList_() {
    const t = [this.parsePoint_()]
    for (; this.match(B.COMMA); ) t.push(this.parsePoint_())
    return t
  }
  parsePointTextList_() {
    const t = [this.parsePointText_()]
    for (; this.match(B.COMMA); ) t.push(this.parsePointText_())
    return t
  }
  parseLineStringTextList_() {
    const t = [this.parseLineStringText_()]
    for (; this.match(B.COMMA); ) t.push(this.parseLineStringText_())
    return t
  }
  parsePolygonTextList_() {
    const t = [this.parsePolygonText_()]
    for (; this.match(B.COMMA); ) t.push(this.parsePolygonText_())
    return t
  }
  isEmptyGeometry_() {
    const t = this.isTokenType(B.TEXT) && this.token_.value == el
    return (t && this.consume_(), t)
  }
  formatErrorMessage_() {
    return (
      'Unexpected `' +
      this.token_.value +
      '` at position ' +
      this.token_.position +
      ' in `' +
      this.lexer_.wkt +
      '`'
    )
  }
  parseGeometry_() {
    const t = this.token_
    if (this.match(B.TEXT)) {
      const e = t.value
      this.layout_ = this.parseGeometryLayout_()
      const i = this.isEmptyGeometry_()
      if (e == 'GEOMETRYCOLLECTION') {
        if (i) return new Ie([])
        const o = this.parseGeometryCollectionText_()
        return new Ie(o)
      }
      const n = xd[e]
      if (!n) throw new Error('Invalid geometry type: ' + e)
      let r
      if (i) e == 'POINT' ? (r = [NaN, NaN]) : (r = [])
      else
        switch (e) {
          case 'POINT': {
            r = this.parsePointText_()
            break
          }
          case 'LINESTRING': {
            r = this.parseLineStringText_()
            break
          }
          case 'POLYGON': {
            r = this.parsePolygonText_()
            break
          }
          case 'MULTIPOINT': {
            r = this.parseMultiPointText_()
            break
          }
          case 'MULTILINESTRING': {
            r = this.parseMultiLineStringText_()
            break
          }
          case 'MULTIPOLYGON': {
            r = this.parseMultiPolygonText_()
            break
          }
        }
      return new n(r, this.layout_)
    }
    throw new Error(this.formatErrorMessage_())
  }
}
class vn extends yd {
  constructor(t) {
    ;(super(), (t = t || {}), (this.splitCollection_ = t.splitCollection !== void 0 ? t.splitCollection : !1))
  }
  parse_(t) {
    const e = new wd(t)
    return new Td(e).parse()
  }
  readFeatureFromText(t, e) {
    const i = this.readGeometryFromText(t, e),
      n = new _t()
    return (n.setGeometry(i), n)
  }
  readFeaturesFromText(t, e) {
    let i = []
    const n = this.readGeometryFromText(t, e)
    this.splitCollection_ && n.getType() == 'GeometryCollection' ? (i = n.getGeometriesArray()) : (i = [n])
    const r = []
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = new _t()
      ;(l.setGeometry(i[o]), r.push(l))
    }
    return r
  }
  readGeometryFromText(t, e) {
    const i = this.parse_(t)
    return Jn(i, !1, e)
  }
  writeFeatureText(t, e) {
    const i = t.getGeometry()
    return i ? this.writeGeometryText(i, e) : ''
  }
  writeFeaturesText(t, e) {
    if (t.length == 1) return this.writeFeatureText(t[0], e)
    const i = []
    for (let r = 0, o = t.length; r < o; ++r) i.push(t[r].getGeometry())
    const n = new Ie(i)
    return this.writeGeometryText(n, e)
  }
  writeGeometryText(t, e) {
    return ol(Jn(t, !0, e))
  }
}
function sl(s) {
  const t = s.getCoordinates()
  return t.length === 0 ? '' : t.join(' ')
}
function Sd(s) {
  const t = [],
    e = s.getPoints()
  for (let i = 0, n = e.length; i < n; ++i) t.push('(' + sl(e[i]) + ')')
  return t.join(',')
}
function vd(s) {
  const t = [],
    e = s.getGeometries()
  for (let i = 0, n = e.length; i < n; ++i) t.push(ol(e[i]))
  return t.join(',')
}
function Xr(s) {
  const t = s.getCoordinates(),
    e = []
  for (let i = 0, n = t.length; i < n; ++i) e.push(t[i].join(' '))
  return e.join(',')
}
function Rd(s) {
  const t = [],
    e = s.getLineStrings()
  for (let i = 0, n = e.length; i < n; ++i) t.push('(' + Xr(e[i]) + ')')
  return t.join(',')
}
function rl(s) {
  const t = [],
    e = s.getLinearRings()
  for (let i = 0, n = e.length; i < n; ++i) t.push('(' + Xr(e[i]) + ')')
  return t.join(',')
}
function Id(s) {
  const t = [],
    e = s.getPolygons()
  for (let i = 0, n = e.length; i < n; ++i) t.push('(' + rl(e[i]) + ')')
  return t.join(',')
}
function bd(s) {
  const t = s.getLayout()
  let e = ''
  return ((t === 'XYZ' || t === 'XYZM') && (e += il), (t === 'XYM' || t === 'XYZM') && (e += nl), e)
}
const Fd = {
  Point: sl,
  LineString: Xr,
  Polygon: rl,
  MultiPoint: Sd,
  MultiLineString: Rd,
  MultiPolygon: Id,
  GeometryCollection: vd,
}
function ol(s) {
  const t = s.getType(),
    e = Fd[t],
    i = e(s)
  let n = Cd[t]
  if (typeof s.getFlatCoordinates == 'function') {
    const r = bd(s)
    r.length > 0 && (n += ' ' + r)
  }
  return i.length === 0 ? n + ' ' + el : n + '(' + i + ')'
}
const Rn = { DRAWSTART: 'drawstart', DRAWEND: 'drawend', DRAWABORT: 'drawabort' }
class In extends at {
  constructor(t, e) {
    ;(super(t), (this.feature = e))
  }
}
function Ld(s, t) {
  const e = []
  for (let i = 0; i < t.length; ++i) {
    const r = t[i].getGeometry()
    al(s, r, e)
  }
  return e
}
function bn(s, t) {
  return se(s[0], s[1], t[0], t[1])
}
function di(s, t) {
  const e = s.length
  return t < 0 ? s[t + e] : t >= e ? s[t - e] : s[t]
}
function Fn(s, t, e) {
  let i, n
  t < e ? ((i = t), (n = e)) : ((i = e), (n = t))
  const r = Math.ceil(i),
    o = Math.floor(n)
  if (r > o) {
    const l = fi(s, i),
      h = fi(s, n)
    return bn(l, h)
  }
  let a = 0
  if (i < r) {
    const l = fi(s, i),
      h = di(s, r)
    a += bn(l, h)
  }
  if (o < n) {
    const l = di(s, o),
      h = fi(s, n)
    a += bn(l, h)
  }
  for (let l = r; l < o - 1; ++l) {
    const h = di(s, l),
      c = di(s, l + 1)
    a += bn(h, c)
  }
  return a
}
function al(s, t, e) {
  if (t instanceof Gt) {
    Ln(s, t.getCoordinates(), !1, e)
    return
  }
  if (t instanceof Ye) {
    const i = t.getCoordinates()
    for (let n = 0, r = i.length; n < r; ++n) Ln(s, i[n], !1, e)
    return
  }
  if (t instanceof It) {
    const i = t.getCoordinates()
    for (let n = 0, r = i.length; n < r; ++n) Ln(s, i[n], !0, e)
    return
  }
  if (t instanceof ze) {
    const i = t.getCoordinates()
    for (let n = 0, r = i.length; n < r; ++n) {
      const o = i[n]
      for (let a = 0, l = o.length; a < l; ++a) Ln(s, o[a], !0, e)
    }
    return
  }
  if (t instanceof Ie) {
    const i = t.getGeometries()
    for (let n = 0; n < i.length; ++n) al(s, i[n], e)
    return
  }
}
const Ms = { index: -1, endIndex: NaN }
function Pd(s, t, e, i) {
  const n = s[0],
    r = s[1]
  let o = 1 / 0,
    a = -1,
    l = NaN
  for (let u = 0; u < t.targets.length; ++u) {
    const d = t.targets[u],
      f = d.coordinates
    let g = 1 / 0,
      _
    for (let m = 0; m < f.length - 1; ++m) {
      const p = f[m],
        y = f[m + 1],
        x = ll(n, r, p, y)
      x.squaredDistance < g && ((g = x.squaredDistance), (_ = m + x.along))
    }
    g < o &&
      ((o = g),
      d.ring &&
        t.targetIndex === u &&
        (d.endIndex > d.startIndex
          ? _ < d.startIndex && (_ += f.length)
          : d.endIndex < d.startIndex && _ > d.startIndex && (_ -= f.length)),
      (l = _),
      (a = u))
  }
  const h = t.targets[a]
  let c = h.ring
  if (t.targetIndex === a && c) {
    const u = fi(h.coordinates, l),
      d = e.getPixelFromCoordinate(u)
    Gn(d, t.startPx) > i && (c = !1)
  }
  if (c) {
    const u = h.coordinates,
      d = u.length,
      f = h.startIndex,
      g = l
    if (f < g) {
      const _ = Fn(u, f, g)
      Fn(u, f, g - d) < _ && (l -= d)
    } else {
      const _ = Fn(u, f, g)
      Fn(u, f, g + d) < _ && (l += d)
    }
  }
  return ((Ms.index = a), (Ms.endIndex = l), Ms)
}
function Ln(s, t, e, i) {
  const n = s[0],
    r = s[1]
  for (let o = 0, a = t.length - 1; o < a; ++o) {
    const l = t[o],
      h = t[o + 1],
      c = ll(n, r, l, h)
    if (c.squaredDistance === 0) {
      const u = o + c.along
      i.push({ coordinates: t, ring: e, startIndex: u, endIndex: u })
      return
    }
  }
}
const As = { along: 0, squaredDistance: 0 }
function ll(s, t, e, i) {
  const n = e[0],
    r = e[1],
    o = i[0],
    a = i[1],
    l = o - n,
    h = a - r
  let c = 0,
    u = n,
    d = r
  return (
    (l !== 0 || h !== 0) &&
      ((c = tt(((s - n) * l + (t - r) * h) / (l * l + h * h), 0, 1)), (u += l * c), (d += h * c)),
    (As.along = c),
    (As.squaredDistance = ss(se(s, t, u, d), 10)),
    As
  )
}
function fi(s, t) {
  const e = s.length
  let i = Math.floor(t)
  const n = t - i
  i >= e ? (i -= e) : i < 0 && (i += e)
  let r = i + 1
  r >= e && (r -= e)
  const o = s[i],
    a = o[0],
    l = o[1],
    h = s[r],
    c = h[0] - a,
    u = h[1] - l
  return [a + c * n, l + u * n]
}
class Md extends ue {
  constructor(t) {
    const e = t
    ;(e.stopDown || (e.stopDown = Be),
      super(e),
      this.on,
      this.once,
      this.un,
      (this.shouldHandle_ = !1),
      (this.downPx_ = null),
      this.downTimeout_,
      this.lastDragTime_,
      this.pointerType_,
      (this.freehand_ = !1),
      (this.source_ = t.source ? t.source : null),
      (this.features_ = t.features ? t.features : null),
      (this.snapTolerance_ = t.snapTolerance ? t.snapTolerance : 12),
      (this.type_ = t.type),
      (this.mode_ = Od(this.type_)),
      (this.stopClick_ = !!t.stopClick),
      (this.minPoints_ = t.minPoints ? t.minPoints : this.mode_ === 'Polygon' ? 3 : 2),
      (this.maxPoints_ = this.mode_ === 'Circle' ? 2 : t.maxPoints ? t.maxPoints : 1 / 0),
      (this.finishCondition_ = t.finishCondition ? t.finishCondition : le),
      (this.geometryLayout_ = t.geometryLayout ? t.geometryLayout : 'XY'))
    let i = t.geometryFunction
    if (!i) {
      const n = this.mode_
      if (n === 'Circle')
        i = function (r, o, a) {
          const l = o || new nn([NaN, NaN]),
            h = J(r[0]),
            c = re(h, J(r[r.length - 1]))
          return (l.setCenterAndRadius(h, Math.sqrt(c), this.geometryLayout_), l)
        }
      else {
        let r
        ;(n === 'Point' ? (r = At) : n === 'LineString' ? (r = Gt) : n === 'Polygon' && (r = It),
          (i = function (o, a, l) {
            return (
              a
                ? n === 'Polygon'
                  ? o[0].length
                    ? a.setCoordinates([o[0].concat([o[0][0]])], this.geometryLayout_)
                    : a.setCoordinates([], this.geometryLayout_)
                  : a.setCoordinates(o, this.geometryLayout_)
                : (a = new r(o, this.geometryLayout_)),
              a
            )
          }))
      }
    }
    ;((this.geometryFunction_ = i),
      (this.dragVertexDelay_ = t.dragVertexDelay !== void 0 ? t.dragVertexDelay : 500),
      (this.finishCoordinate_ = null),
      (this.sketchFeature_ = null),
      (this.sketchPoint_ = null),
      (this.sketchCoords_ = null),
      (this.sketchLine_ = null),
      (this.sketchLineCoords_ = null),
      (this.squaredClickTolerance_ = t.clickTolerance ? t.clickTolerance * t.clickTolerance : 36),
      (this.overlay_ = new Pr({
        source: new Mr({ useSpatialIndex: !1, wrapX: t.wrapX ? t.wrapX : !1 }),
        style: t.style ? t.style : Ad(),
        updateWhileInteracting: !0,
      })),
      (this.geometryName_ = t.geometryName),
      (this.condition_ = t.condition ? t.condition : Dr),
      this.freehandCondition_,
      t.freehand
        ? (this.freehandCondition_ = Ui)
        : (this.freehandCondition_ = t.freehandCondition ? t.freehandCondition : Ba),
      this.traceCondition_,
      this.setTrace(t.trace || !1),
      (this.traceState_ = { active: !1 }),
      (this.traceSource_ = t.traceSource || t.source || null),
      this.addChangeListener(Hn.ACTIVE, this.updateState_))
  }
  setTrace(t) {
    let e
    ;(t ? (t === !0 ? (e = Ui) : (e = t)) : (e = ou), (this.traceCondition_ = e))
  }
  setMap(t) {
    ;(super.setMap(t), this.updateState_())
  }
  getOverlay() {
    return this.overlay_
  }
  handleEvent(t) {
    ;(t.originalEvent.type === O.CONTEXTMENU && t.originalEvent.preventDefault(),
      (this.freehand_ = this.mode_ !== 'Point' && this.freehandCondition_(t)))
    let e = t.type === Y.POINTERMOVE,
      i = !0
    return (
      !this.freehand_ &&
        this.lastDragTime_ &&
        t.type === Y.POINTERDRAG &&
        (Date.now() - this.lastDragTime_ >= this.dragVertexDelay_
          ? ((this.downPx_ = t.pixel), (this.shouldHandle_ = !this.freehand_), (e = !0))
          : (this.lastDragTime_ = void 0),
        this.shouldHandle_ &&
          this.downTimeout_ !== void 0 &&
          (clearTimeout(this.downTimeout_), (this.downTimeout_ = void 0))),
      this.freehand_ && t.type === Y.POINTERDRAG && this.sketchFeature_ !== null
        ? (this.addToDrawing_(t.coordinate), (i = !1))
        : this.freehand_ && t.type === Y.POINTERDOWN
          ? (i = !1)
          : e && this.getPointerCount() < 2
            ? ((i = t.type === Y.POINTERMOVE),
              i && this.freehand_
                ? (this.handlePointerMove_(t), this.shouldHandle_ && t.originalEvent.preventDefault())
                : (t.originalEvent.pointerType === 'mouse' ||
                    (t.type === Y.POINTERDRAG && this.downTimeout_ === void 0)) &&
                  this.handlePointerMove_(t))
            : t.type === Y.DBLCLICK && (i = !1),
      super.handleEvent(t) && i
    )
  }
  handleDownEvent(t) {
    return (
      (this.shouldHandle_ = !this.freehand_),
      this.freehand_
        ? ((this.downPx_ = t.pixel), this.finishCoordinate_ || this.startDrawing_(t.coordinate), !0)
        : this.condition_(t)
          ? ((this.lastDragTime_ = Date.now()),
            (this.downTimeout_ = setTimeout(() => {
              this.handlePointerMove_(new ne(Y.POINTERMOVE, t.map, t.originalEvent, !1, t.frameState))
            }, this.dragVertexDelay_)),
            (this.downPx_ = t.pixel),
            !0)
          : ((this.lastDragTime_ = void 0), !1)
    )
  }
  deactivateTrace_() {
    this.traceState_ = { active: !1 }
  }
  toggleTraceState_(t) {
    if (!this.traceSource_ || !this.traceCondition_(t)) return
    if (this.traceState_.active) {
      this.deactivateTrace_()
      return
    }
    const e = this.getMap(),
      i = e.getCoordinateFromPixel([t.pixel[0] - this.snapTolerance_, t.pixel[1] + this.snapTolerance_]),
      n = e.getCoordinateFromPixel([t.pixel[0] + this.snapTolerance_, t.pixel[1] - this.snapTolerance_]),
      r = gt([i, n]),
      o = this.traceSource_.getFeaturesInExtent(r)
    if (o.length === 0) return
    const a = Ld(t.coordinate, o)
    a.length && (this.traceState_ = { active: !0, startPx: t.pixel.slice(), targets: a, targetIndex: -1 })
  }
  addOrRemoveTracedCoordinates_(t, e) {
    const i = t.startIndex <= t.endIndex,
      n = t.startIndex <= e
    i === n
      ? (i && e > t.endIndex) || (!i && e < t.endIndex)
        ? this.addTracedCoordinates_(t, t.endIndex, e)
        : ((i && e < t.endIndex) || (!i && e > t.endIndex)) && this.removeTracedCoordinates_(e, t.endIndex)
      : (this.removeTracedCoordinates_(t.startIndex, t.endIndex),
        this.addTracedCoordinates_(t, t.startIndex, e))
  }
  removeTracedCoordinates_(t, e) {
    if (t === e) return
    let i = 0
    if (t < e) {
      const n = Math.ceil(t)
      let r = Math.floor(e)
      ;(r === e && (r -= 1), (i = r - n + 1))
    } else {
      const n = Math.floor(t)
      let r = Math.ceil(e)
      ;(r === e && (r += 1), (i = n - r + 1))
    }
    i > 0 && this.removeLastPoints_(i)
  }
  addTracedCoordinates_(t, e, i) {
    if (e === i) return
    const n = []
    if (e < i) {
      const r = Math.ceil(e)
      let o = Math.floor(i)
      o === i && (o -= 1)
      for (let a = r; a <= o; ++a) n.push(di(t.coordinates, a))
    } else {
      const r = Math.floor(e)
      let o = Math.ceil(i)
      o === i && (o += 1)
      for (let a = r; a >= o; --a) n.push(di(t.coordinates, a))
    }
    n.length && this.appendCoordinates(n)
  }
  updateTrace_(t) {
    const e = this.traceState_
    if (!e.active || (e.targetIndex === -1 && Gn(e.startPx, t.pixel) < this.snapTolerance_)) return
    const i = Pd(t.coordinate, e, this.getMap(), this.snapTolerance_)
    if (e.targetIndex !== i.index) {
      if (e.targetIndex !== -1) {
        const l = e.targets[e.targetIndex]
        this.removeTracedCoordinates_(l.startIndex, l.endIndex)
      }
      const a = e.targets[i.index]
      this.addTracedCoordinates_(a, a.startIndex, i.endIndex)
    } else {
      const a = e.targets[e.targetIndex]
      this.addOrRemoveTracedCoordinates_(a, i.endIndex)
    }
    e.targetIndex = i.index
    const n = e.targets[e.targetIndex]
    n.endIndex = i.endIndex
    const r = fi(n.coordinates, n.endIndex),
      o = this.getMap().getPixelFromCoordinate(r)
    ;((t.coordinate = r), (t.pixel = [Math.round(o[0]), Math.round(o[1])]))
  }
  handleUpEvent(t) {
    let e = !0
    if (this.getPointerCount() === 0) {
      ;(this.downTimeout_ && (clearTimeout(this.downTimeout_), (this.downTimeout_ = void 0)),
        this.handlePointerMove_(t))
      const i = this.traceState_.active
      if ((this.toggleTraceState_(t), this.shouldHandle_)) {
        const n = !this.finishCoordinate_
        ;(n && this.startDrawing_(t.coordinate),
          !n && this.freehand_
            ? this.finishDrawing()
            : !this.freehand_ &&
              (!n || this.mode_ === 'Point') &&
              (this.atFinish_(t.pixel, i)
                ? this.finishCondition_(t) && this.finishDrawing()
                : this.addToDrawing_(t.coordinate)),
          (e = !1))
      } else this.freehand_ && this.abortDrawing()
    }
    return (!e && this.stopClick_ && t.preventDefault(), e)
  }
  handlePointerMove_(t) {
    if (
      ((this.pointerType_ = t.originalEvent.pointerType),
      this.downPx_ && ((!this.freehand_ && this.shouldHandle_) || (this.freehand_ && !this.shouldHandle_)))
    ) {
      const e = this.downPx_,
        i = t.pixel,
        n = e[0] - i[0],
        r = e[1] - i[1],
        o = n * n + r * r
      if (
        ((this.shouldHandle_ = this.freehand_
          ? o > this.squaredClickTolerance_
          : o <= this.squaredClickTolerance_),
        !this.shouldHandle_)
      )
        return
    }
    if (!this.finishCoordinate_) {
      this.createOrUpdateSketchPoint_(t.coordinate.slice())
      return
    }
    ;(this.updateTrace_(t), this.modifyDrawing_(t.coordinate))
  }
  atFinish_(t, e) {
    let i = !1
    if (this.sketchFeature_) {
      let n = !1,
        r = [this.finishCoordinate_]
      const o = this.mode_
      if (o === 'Point') i = !0
      else if (o === 'Circle') i = this.sketchCoords_.length === 2
      else if (o === 'LineString') n = !e && this.sketchCoords_.length > this.minPoints_
      else if (o === 'Polygon') {
        const a = this.sketchCoords_
        ;((n = a[0].length > this.minPoints_),
          (r = [a[0][0], a[0][a[0].length - 2]]),
          e ? (r = [a[0][0]]) : (r = [a[0][0], a[0][a[0].length - 2]]))
      }
      if (n) {
        const a = this.getMap()
        for (let l = 0, h = r.length; l < h; l++) {
          const c = r[l],
            u = a.getPixelFromCoordinate(c),
            d = t[0] - u[0],
            f = t[1] - u[1],
            g = this.freehand_ ? 1 : this.snapTolerance_
          if (((i = Math.sqrt(d * d + f * f) <= g), i)) {
            this.finishCoordinate_ = c
            break
          }
        }
      }
    }
    return i
  }
  createOrUpdateSketchPoint_(t) {
    this.sketchPoint_
      ? this.sketchPoint_.getGeometry().setCoordinates(t)
      : ((this.sketchPoint_ = new _t(new At(t))), this.updateSketchFeatures_())
  }
  createOrUpdateCustomSketchLine_(t) {
    this.sketchLine_ || (this.sketchLine_ = new _t())
    const e = t.getLinearRing(0)
    let i = this.sketchLine_.getGeometry()
    i
      ? (i.setFlatCoordinates(e.getLayout(), e.getFlatCoordinates()), i.changed())
      : ((i = new Gt(e.getFlatCoordinates(), e.getLayout())), this.sketchLine_.setGeometry(i))
  }
  startDrawing_(t) {
    const e = this.getMap().getView().getProjection(),
      i = Wn(this.geometryLayout_)
    for (; t.length < i; ) t.push(0)
    ;((this.finishCoordinate_ = t),
      this.mode_ === 'Point'
        ? (this.sketchCoords_ = t.slice())
        : this.mode_ === 'Polygon'
          ? ((this.sketchCoords_ = [[t.slice(), t.slice()]]),
            (this.sketchLineCoords_ = this.sketchCoords_[0]))
          : (this.sketchCoords_ = [t.slice(), t.slice()]),
      this.sketchLineCoords_ && (this.sketchLine_ = new _t(new Gt(this.sketchLineCoords_))))
    const n = this.geometryFunction_(this.sketchCoords_, void 0, e)
    ;((this.sketchFeature_ = new _t()),
      this.geometryName_ && this.sketchFeature_.setGeometryName(this.geometryName_),
      this.sketchFeature_.setGeometry(n),
      this.updateSketchFeatures_(),
      this.dispatchEvent(new In(Rn.DRAWSTART, this.sketchFeature_)))
  }
  modifyDrawing_(t) {
    const e = this.getMap(),
      i = this.sketchFeature_.getGeometry(),
      n = e.getView().getProjection(),
      r = Wn(this.geometryLayout_)
    let o, a
    for (; t.length < r; ) t.push(0)
    ;(this.mode_ === 'Point'
      ? (a = this.sketchCoords_)
      : this.mode_ === 'Polygon'
        ? ((o = this.sketchCoords_[0]),
          (a = o[o.length - 1]),
          this.atFinish_(e.getPixelFromCoordinate(t)) && (t = this.finishCoordinate_.slice()))
        : ((o = this.sketchCoords_), (a = o[o.length - 1])),
      (a[0] = t[0]),
      (a[1] = t[1]),
      this.geometryFunction_(this.sketchCoords_, i, n),
      this.sketchPoint_ && this.sketchPoint_.getGeometry().setCoordinates(t),
      i.getType() === 'Polygon' && this.mode_ !== 'Polygon'
        ? this.createOrUpdateCustomSketchLine_(i)
        : this.sketchLineCoords_ && this.sketchLine_.getGeometry().setCoordinates(this.sketchLineCoords_),
      this.updateSketchFeatures_())
  }
  addToDrawing_(t) {
    const e = this.sketchFeature_.getGeometry(),
      i = this.getMap().getView().getProjection()
    let n, r
    const o = this.mode_
    ;(o === 'LineString' || o === 'Circle'
      ? ((this.finishCoordinate_ = t.slice()),
        (r = this.sketchCoords_),
        r.length >= this.maxPoints_ && (this.freehand_ ? r.pop() : (n = !0)),
        r.push(t.slice()),
        this.geometryFunction_(r, e, i))
      : o === 'Polygon' &&
        ((r = this.sketchCoords_[0]),
        r.length >= this.maxPoints_ && (this.freehand_ ? r.pop() : (n = !0)),
        r.push(t.slice()),
        n && (this.finishCoordinate_ = r[0]),
        this.geometryFunction_(this.sketchCoords_, e, i)),
      this.createOrUpdateSketchPoint_(t.slice()),
      this.updateSketchFeatures_(),
      n && this.finishDrawing())
  }
  removeLastPoints_(t) {
    if (!this.sketchFeature_) return
    const e = this.sketchFeature_.getGeometry(),
      i = this.getMap().getView().getProjection(),
      n = this.mode_
    for (let r = 0; r < t; ++r) {
      let o
      if (n === 'LineString' || n === 'Circle') {
        if (((o = this.sketchCoords_), o.splice(-2, 1), o.length >= 2)) {
          this.finishCoordinate_ = o[o.length - 2].slice()
          const a = this.finishCoordinate_.slice()
          ;((o[o.length - 1] = a), this.createOrUpdateSketchPoint_(a))
        }
        ;(this.geometryFunction_(o, e, i),
          e.getType() === 'Polygon' && this.sketchLine_ && this.createOrUpdateCustomSketchLine_(e))
      } else if (n === 'Polygon') {
        ;((o = this.sketchCoords_[0]), o.splice(-2, 1))
        const a = this.sketchLine_.getGeometry()
        if (o.length >= 2) {
          const l = o[o.length - 2].slice()
          ;((o[o.length - 1] = l), this.createOrUpdateSketchPoint_(l))
        }
        ;(a.setCoordinates(o), this.geometryFunction_(this.sketchCoords_, e, i))
      }
      if (o.length === 1) {
        this.abortDrawing()
        break
      }
    }
    this.updateSketchFeatures_()
  }
  removeLastPoint() {
    this.removeLastPoints_(1)
  }
  finishDrawing() {
    const t = this.abortDrawing_()
    if (!t) return
    let e = this.sketchCoords_
    const i = t.getGeometry(),
      n = this.getMap().getView().getProjection()
    ;(this.mode_ === 'LineString'
      ? (e.pop(), this.geometryFunction_(e, i, n))
      : this.mode_ === 'Polygon' && (e[0].pop(), this.geometryFunction_(e, i, n), (e = i.getCoordinates())),
      this.type_ === 'MultiPoint'
        ? t.setGeometry(new Si([e]))
        : this.type_ === 'MultiLineString'
          ? t.setGeometry(new Ye([e]))
          : this.type_ === 'MultiPolygon' && t.setGeometry(new ze([e])),
      this.dispatchEvent(new In(Rn.DRAWEND, t)),
      this.features_ && this.features_.push(t),
      this.source_ && this.source_.addFeature(t))
  }
  abortDrawing_() {
    this.finishCoordinate_ = null
    const t = this.sketchFeature_
    return (
      (this.sketchFeature_ = null),
      (this.sketchPoint_ = null),
      (this.sketchLine_ = null),
      this.overlay_.getSource().clear(!0),
      this.deactivateTrace_(),
      t
    )
  }
  abortDrawing() {
    const t = this.abortDrawing_()
    t && this.dispatchEvent(new In(Rn.DRAWABORT, t))
  }
  appendCoordinates(t) {
    const e = this.mode_,
      i = !this.sketchFeature_
    i && this.startDrawing_(t[0])
    let n
    if (e === 'LineString' || e === 'Circle') n = this.sketchCoords_
    else if (e === 'Polygon') n = this.sketchCoords_ && this.sketchCoords_.length ? this.sketchCoords_[0] : []
    else return
    ;(i && n.shift(), n.pop())
    for (let o = 0; o < t.length; o++) this.addToDrawing_(t[o])
    const r = t[t.length - 1]
    ;(this.addToDrawing_(r), this.modifyDrawing_(r))
  }
  extend(t) {
    const i = t.getGeometry()
    ;((this.sketchFeature_ = t), (this.sketchCoords_ = i.getCoordinates()))
    const n = this.sketchCoords_[this.sketchCoords_.length - 1]
    ;((this.finishCoordinate_ = n.slice()),
      this.sketchCoords_.push(n.slice()),
      (this.sketchPoint_ = new _t(new At(n))),
      this.updateSketchFeatures_(),
      this.dispatchEvent(new In(Rn.DRAWSTART, this.sketchFeature_)))
  }
  updateSketchFeatures_() {
    const t = []
    ;(this.sketchFeature_ && t.push(this.sketchFeature_),
      this.sketchLine_ && t.push(this.sketchLine_),
      this.sketchPoint_ && t.push(this.sketchPoint_))
    const e = this.overlay_.getSource()
    ;(e.clear(!0), e.addFeatures(t))
  }
  updateState_() {
    const t = this.getMap(),
      e = this.getActive()
    ;((!t || !e) && this.abortDrawing(), this.overlay_.setMap(e ? t : null))
  }
}
function Ad() {
  const s = ba()
  return function (t, e) {
    return s[t.getGeometry().getType()]
  }
}
function Od(s) {
  switch (s) {
    case 'Point':
    case 'MultiPoint':
      return 'Point'
    case 'LineString':
    case 'MultiLineString':
      return 'LineString'
    case 'Polygon':
    case 'MultiPolygon':
      return 'Polygon'
    case 'Circle':
      return 'Circle'
    default:
      throw new Error('Invalid type: ' + s)
  }
}
const jo = 0,
  ji = 1,
  Go = [0, 0, 0, 0],
  pi = [],
  Os = { MODIFYSTART: 'modifystart', MODIFYEND: 'modifyend' }
class ks extends at {
  constructor(t, e, i) {
    ;(super(t), (this.features = e), (this.mapBrowserEvent = i))
  }
}
class kd extends ue {
  constructor(t) {
    ;(super(t),
      this.on,
      this.once,
      this.un,
      (this.boundHandleFeatureChange_ = this.handleFeatureChange_.bind(this)),
      (this.condition_ = t.condition ? t.condition : Ka),
      (this.defaultDeleteCondition_ = function (i) {
        return nu(i) && au(i)
      }),
      (this.deleteCondition_ = t.deleteCondition ? t.deleteCondition : this.defaultDeleteCondition_),
      (this.insertVertexCondition_ = t.insertVertexCondition ? t.insertVertexCondition : Ui),
      (this.vertexFeature_ = null),
      (this.vertexSegments_ = null),
      (this.lastPixel_ = [0, 0]),
      (this.ignoreNextSingleClick_ = !1),
      (this.featuresBeingModified_ = null),
      (this.rBush_ = new Zn()),
      (this.pixelTolerance_ = t.pixelTolerance !== void 0 ? t.pixelTolerance : 10),
      (this.snappedToVertex_ = !1),
      (this.changingFeature_ = !1),
      (this.dragSegments_ = []),
      (this.overlay_ = new Pr({
        source: new Mr({ useSpatialIndex: !1, wrapX: !!t.wrapX }),
        style: t.style ? t.style : jd(),
        updateWhileAnimating: !0,
        updateWhileInteracting: !0,
      })),
      (this.SEGMENT_WRITERS_ = {
        Point: this.writePointGeometry_.bind(this),
        LineString: this.writeLineStringGeometry_.bind(this),
        LinearRing: this.writeLineStringGeometry_.bind(this),
        Polygon: this.writePolygonGeometry_.bind(this),
        MultiPoint: this.writeMultiPointGeometry_.bind(this),
        MultiLineString: this.writeMultiLineStringGeometry_.bind(this),
        MultiPolygon: this.writeMultiPolygonGeometry_.bind(this),
        Circle: this.writeCircleGeometry_.bind(this),
        GeometryCollection: this.writeGeometryCollectionGeometry_.bind(this),
      }),
      (this.source_ = null),
      (this.hitDetection_ = null))
    let e
    if (
      (t.features
        ? (e = t.features)
        : t.source &&
          ((this.source_ = t.source),
          (e = new ut(this.source_.getFeatures())),
          this.source_.addEventListener(ft.ADDFEATURE, this.handleSourceAdd_.bind(this)),
          this.source_.addEventListener(ft.REMOVEFEATURE, this.handleSourceRemove_.bind(this))),
      !e)
    )
      throw new Error('The modify interaction requires features, a source or a layer')
    ;(t.hitDetection && (this.hitDetection_ = t.hitDetection),
      (this.features_ = e),
      this.features_.forEach(this.addFeature_.bind(this)),
      this.features_.addEventListener(ot.ADD, this.handleFeatureAdd_.bind(this)),
      this.features_.addEventListener(ot.REMOVE, this.handleFeatureRemove_.bind(this)),
      (this.lastPointerEvent_ = null),
      (this.delta_ = [0, 0]),
      (this.snapToPointer_ = t.snapToPointer === void 0 ? !this.hitDetection_ : t.snapToPointer))
  }
  addFeature_(t) {
    const e = t.getGeometry()
    if (e) {
      const n = this.SEGMENT_WRITERS_[e.getType()]
      n && n(t, e)
    }
    const i = this.getMap()
    ;(i && i.isRendered() && this.getActive() && this.handlePointerAtPixel_(this.lastPixel_, i),
      t.addEventListener(O.CHANGE, this.boundHandleFeatureChange_))
  }
  willModifyFeatures_(t, e) {
    if (!this.featuresBeingModified_) {
      this.featuresBeingModified_ = new ut()
      const i = this.featuresBeingModified_.getArray()
      for (let n = 0, r = e.length; n < r; ++n) {
        const o = e[n]
        for (let a = 0, l = o.length; a < l; ++a) {
          const h = o[a].feature
          h && !i.includes(h) && this.featuresBeingModified_.push(h)
        }
      }
      this.featuresBeingModified_.getLength() === 0
        ? (this.featuresBeingModified_ = null)
        : this.dispatchEvent(new ks(Os.MODIFYSTART, this.featuresBeingModified_, t))
    }
  }
  removeFeature_(t) {
    ;(this.removeFeatureSegmentData_(t),
      this.vertexFeature_ &&
        this.features_.getLength() === 0 &&
        (this.overlay_.getSource().removeFeature(this.vertexFeature_), (this.vertexFeature_ = null)),
      t.removeEventListener(O.CHANGE, this.boundHandleFeatureChange_))
  }
  removeFeatureSegmentData_(t) {
    const e = this.rBush_,
      i = []
    e.forEach(function (n) {
      t === n.feature && i.push(n)
    })
    for (let n = i.length - 1; n >= 0; --n) {
      const r = i[n]
      for (let o = this.dragSegments_.length - 1; o >= 0; --o)
        this.dragSegments_[o][0] === r && this.dragSegments_.splice(o, 1)
      e.remove(r)
    }
  }
  setActive(t) {
    ;(this.vertexFeature_ &&
      !t &&
      (this.overlay_.getSource().removeFeature(this.vertexFeature_), (this.vertexFeature_ = null)),
      super.setActive(t))
  }
  setMap(t) {
    ;(this.overlay_.setMap(t), super.setMap(t))
  }
  getOverlay() {
    return this.overlay_
  }
  handleSourceAdd_(t) {
    t.feature && this.features_.push(t.feature)
  }
  handleSourceRemove_(t) {
    t.feature && this.features_.remove(t.feature)
  }
  handleFeatureAdd_(t) {
    this.addFeature_(t.element)
  }
  handleFeatureChange_(t) {
    if (!this.changingFeature_) {
      const e = t.target
      ;(this.removeFeature_(e), this.addFeature_(e))
    }
  }
  handleFeatureRemove_(t) {
    this.removeFeature_(t.element)
  }
  writePointGeometry_(t, e) {
    const i = e.getCoordinates(),
      n = { feature: t, geometry: e, segment: [i, i] }
    this.rBush_.insert(e.getExtent(), n)
  }
  writeMultiPointGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let n = 0, r = i.length; n < r; ++n) {
      const o = i[n],
        a = { feature: t, geometry: e, depth: [n], index: n, segment: [o, o] }
      this.rBush_.insert(e.getExtent(), a)
    }
  }
  writeLineStringGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let n = 0, r = i.length - 1; n < r; ++n) {
      const o = i.slice(n, n + 2),
        a = { feature: t, geometry: e, index: n, segment: o }
      this.rBush_.insert(gt(o), a)
    }
  }
  writeMultiLineStringGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let n = 0, r = i.length; n < r; ++n) {
      const o = i[n]
      for (let a = 0, l = o.length - 1; a < l; ++a) {
        const h = o.slice(a, a + 2),
          c = { feature: t, geometry: e, depth: [n], index: a, segment: h }
        this.rBush_.insert(gt(h), c)
      }
    }
  }
  writePolygonGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let n = 0, r = i.length; n < r; ++n) {
      const o = i[n]
      for (let a = 0, l = o.length - 1; a < l; ++a) {
        const h = o.slice(a, a + 2),
          c = { feature: t, geometry: e, depth: [n], index: a, segment: h }
        this.rBush_.insert(gt(h), c)
      }
    }
  }
  writeMultiPolygonGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let n = 0, r = i.length; n < r; ++n) {
      const o = i[n]
      for (let a = 0, l = o.length; a < l; ++a) {
        const h = o[a]
        for (let c = 0, u = h.length - 1; c < u; ++c) {
          const d = h.slice(c, c + 2),
            f = { feature: t, geometry: e, depth: [a, n], index: c, segment: d }
          this.rBush_.insert(gt(d), f)
        }
      }
    }
  }
  writeCircleGeometry_(t, e) {
    const i = e.getCenter(),
      n = { feature: t, geometry: e, index: jo, segment: [i, i] },
      r = { feature: t, geometry: e, index: ji, segment: [i, i] },
      o = [n, r]
    ;((n.featureSegments = o), (r.featureSegments = o), this.rBush_.insert(On(i), n))
    let a = e
    this.rBush_.insert(a.getExtent(), r)
  }
  writeGeometryCollectionGeometry_(t, e) {
    const i = e.getGeometriesArray()
    for (let n = 0; n < i.length; ++n) {
      const r = i[n],
        o = this.SEGMENT_WRITERS_[r.getType()]
      o(t, r)
    }
  }
  createOrUpdateVertexFeature_(t, e, i) {
    let n = this.vertexFeature_
    return (
      n
        ? n.getGeometry().setCoordinates(t)
        : ((n = new _t(new At(t))), (this.vertexFeature_ = n), this.overlay_.getSource().addFeature(n)),
      n.set('features', e),
      n.set('geometries', i),
      n
    )
  }
  handleEvent(t) {
    if (!t.originalEvent) return !0
    this.lastPointerEvent_ = t
    let e
    return (
      !t.map.getView().getInteracting() &&
        t.type == Y.POINTERMOVE &&
        !this.handlingDownUpSequence &&
        this.handlePointerMove_(t),
      this.vertexFeature_ &&
        this.deleteCondition_(t) &&
        (t.type != Y.SINGLECLICK || !this.ignoreNextSingleClick_ ? (e = this.removePoint()) : (e = !0)),
      t.type == Y.SINGLECLICK && (this.ignoreNextSingleClick_ = !1),
      super.handleEvent(t) && !e
    )
  }
  handleDragEvent(t) {
    ;((this.ignoreNextSingleClick_ = !1), this.willModifyFeatures_(t, this.dragSegments_))
    const e = [t.coordinate[0] + this.delta_[0], t.coordinate[1] + this.delta_[1]],
      i = [],
      n = []
    for (let r = 0, o = this.dragSegments_.length; r < o; ++r) {
      const a = this.dragSegments_[r],
        l = a[0],
        h = l.feature
      i.includes(h) || i.push(h)
      const c = l.geometry
      n.includes(c) || n.push(c)
      const u = l.depth
      let d
      const f = l.segment,
        g = a[1]
      for (; e.length < c.getStride(); ) e.push(f[g][e.length])
      switch (c.getType()) {
        case 'Point':
          ;((d = e), (f[0] = e), (f[1] = e))
          break
        case 'MultiPoint':
          ;((d = c.getCoordinates()), (d[l.index] = e), (f[0] = e), (f[1] = e))
          break
        case 'LineString':
          ;((d = c.getCoordinates()), (d[l.index + g] = e), (f[g] = e))
          break
        case 'MultiLineString':
          ;((d = c.getCoordinates()), (d[u[0]][l.index + g] = e), (f[g] = e))
          break
        case 'Polygon':
          ;((d = c.getCoordinates()), (d[u[0]][l.index + g] = e), (f[g] = e))
          break
        case 'MultiPolygon':
          ;((d = c.getCoordinates()), (d[u[1]][u[0]][l.index + g] = e), (f[g] = e))
          break
        case 'Circle':
          if (((f[0] = e), (f[1] = e), l.index === jo))
            ((this.changingFeature_ = !0), c.setCenter(e), (this.changingFeature_ = !1))
          else {
            ;((this.changingFeature_ = !0), t.map.getView().getProjection())
            let _ = Gn(J(c.getCenter()), J(e))
            ;(c.setRadius(_), (this.changingFeature_ = !1))
          }
          break
      }
      d && this.setGeometryCoordinates_(c, d)
    }
    this.createOrUpdateVertexFeature_(e, i, n)
  }
  handleDownEvent(t) {
    if (!this.condition_(t)) return !1
    const e = t.coordinate
    ;(this.handlePointerAtPixel_(t.pixel, t.map, e),
      (this.dragSegments_.length = 0),
      (this.featuresBeingModified_ = null))
    const i = this.vertexFeature_
    if (i) {
      t.map.getView().getProjection()
      const n = [],
        r = i.getGeometry().getCoordinates(),
        o = gt([r]),
        a = this.rBush_.getInExtent(o),
        l = {}
      a.sort(Dd)
      for (let h = 0, c = a.length; h < c; ++h) {
        const u = a[h],
          d = u.segment
        let f = D(u.geometry)
        const g = u.depth
        if (
          (g && (f += '-' + g.join('-')),
          l[f] || (l[f] = new Array(2)),
          u.geometry.getType() === 'Circle' && u.index === ji)
        ) {
          const _ = Xo(e, u)
          jt(_, r) && !l[f][0] && (this.dragSegments_.push([u, 0]), (l[f][0] = u))
          continue
        }
        if (jt(d[0], r) && !l[f][0]) {
          ;(this.dragSegments_.push([u, 0]), (l[f][0] = u))
          continue
        }
        if (jt(d[1], r) && !l[f][1]) {
          if (l[f][0] && l[f][0].index === 0) {
            let _ = u.geometry.getCoordinates()
            switch (u.geometry.getType()) {
              case 'LineString':
              case 'MultiLineString':
                continue
              case 'MultiPolygon':
                _ = _[g[1]]
              case 'Polygon':
                if (u.index !== _[g[0]].length - 2) continue
                break
            }
          }
          ;(this.dragSegments_.push([u, 1]), (l[f][1] = u))
          continue
        }
        D(d) in this.vertexSegments_ && !l[f][0] && !l[f][1] && this.insertVertexCondition_(t) && n.push(u)
      }
      n.length && this.willModifyFeatures_(t, [n])
      for (let h = n.length - 1; h >= 0; --h) this.insertVertex_(n[h], r)
    }
    return !!this.vertexFeature_
  }
  handleUpEvent(t) {
    for (let e = this.dragSegments_.length - 1; e >= 0; --e) {
      const i = this.dragSegments_[e][0],
        n = i.geometry
      if (n.getType() === 'Circle') {
        const r = n.getCenter(),
          o = i.featureSegments[0],
          a = i.featureSegments[1]
        ;((o.segment[0] = r),
          (o.segment[1] = r),
          (a.segment[0] = r),
          (a.segment[1] = r),
          this.rBush_.update(On(r), o))
        let l = n
        this.rBush_.update(l.getExtent(), a)
      } else this.rBush_.update(gt(i.segment), i)
    }
    return (
      this.featuresBeingModified_ &&
        (this.dispatchEvent(new ks(Os.MODIFYEND, this.featuresBeingModified_, t)),
        (this.featuresBeingModified_ = null)),
      !1
    )
  }
  handlePointerMove_(t) {
    ;((this.lastPixel_ = t.pixel), this.handlePointerAtPixel_(t.pixel, t.map, t.coordinate))
  }
  handlePointerAtPixel_(t, e, i) {
    const n = i || e.getCoordinateFromPixel(t)
    e.getView().getProjection()
    const r = function (l, h) {
      return No(n, l) - No(n, h)
    }
    let o, a
    if (this.hitDetection_) {
      const l = typeof this.hitDetection_ == 'object' ? h => h === this.hitDetection_ : void 0
      e.forEachFeatureAtPixel(
        t,
        (h, c, u) => {
          u && (u = new At(We(u.getCoordinates())))
          const d = u || h.getGeometry()
          if (d.getType() === 'Point' && h instanceof _t && this.features_.getArray().includes(h)) {
            a = d
            const f = h.getGeometry().getFlatCoordinates().slice(0, 2)
            o = [{ feature: h, geometry: a, segment: [f, f] }]
          }
          return !0
        },
        { layerFilter: l },
      )
    }
    if (!o) {
      const l = we(On(n, Go)),
        h = e.getView().getResolution() * this.pixelTolerance_,
        c = rs(Hi(l, h, Go))
      o = this.rBush_.getInExtent(c)
    }
    if (o && o.length > 0) {
      const l = o.sort(r)[0],
        h = l.segment
      let c = Xo(n, l)
      const u = e.getPixelFromCoordinate(c)
      let d = Gn(t, u)
      if (a || d <= this.pixelTolerance_) {
        const f = {}
        if (
          ((f[D(h)] = !0),
          this.snapToPointer_ || ((this.delta_[0] = c[0] - n[0]), (this.delta_[1] = c[1] - n[1])),
          l.geometry.getType() === 'Circle' && l.index === ji)
        )
          ((this.snappedToVertex_ = !0), this.createOrUpdateVertexFeature_(c, [l.feature], [l.geometry]))
        else {
          const g = e.getPixelFromCoordinate(h[0]),
            _ = e.getPixelFromCoordinate(h[1]),
            m = re(u, g),
            p = re(u, _)
          ;((d = Math.sqrt(Math.min(m, p))),
            (this.snappedToVertex_ = d <= this.pixelTolerance_),
            this.snappedToVertex_ && (c = m > p ? h[1] : h[0]),
            this.createOrUpdateVertexFeature_(c, [l.feature], [l.geometry]))
          const y = {}
          y[D(l.geometry)] = !0
          for (let x = 1, E = o.length; x < E; ++x) {
            const C = o[x].segment
            if ((jt(h[0], C[0]) && jt(h[1], C[1])) || (jt(h[0], C[1]) && jt(h[1], C[0]))) {
              const T = D(o[x].geometry)
              T in y || ((y[T] = !0), (f[D(C)] = !0))
            } else break
          }
        }
        this.vertexSegments_ = f
        return
      }
    }
    this.vertexFeature_ &&
      (this.overlay_.getSource().removeFeature(this.vertexFeature_), (this.vertexFeature_ = null))
  }
  insertVertex_(t, e) {
    const i = t.segment,
      n = t.feature,
      r = t.geometry,
      o = t.depth,
      a = t.index
    let l
    for (; e.length < r.getStride(); ) e.push(0)
    switch (r.getType()) {
      case 'MultiLineString':
        ;((l = r.getCoordinates()), l[o[0]].splice(a + 1, 0, e))
        break
      case 'Polygon':
        ;((l = r.getCoordinates()), l[o[0]].splice(a + 1, 0, e))
        break
      case 'MultiPolygon':
        ;((l = r.getCoordinates()), l[o[1]][o[0]].splice(a + 1, 0, e))
        break
      case 'LineString':
        ;((l = r.getCoordinates()), l.splice(a + 1, 0, e))
        break
      default:
        return
    }
    this.setGeometryCoordinates_(r, l)
    const h = this.rBush_
    ;(h.remove(t), this.updateSegmentIndices_(r, a, o, 1))
    const c = { segment: [i[0], e], feature: n, geometry: r, depth: o, index: a }
    ;(h.insert(gt(c.segment), c), this.dragSegments_.push([c, 1]))
    const u = { segment: [e, i[1]], feature: n, geometry: r, depth: o, index: a + 1 }
    ;(h.insert(gt(u.segment), u), this.dragSegments_.push([u, 0]), (this.ignoreNextSingleClick_ = !0))
  }
  removePoint() {
    if (this.lastPointerEvent_ && this.lastPointerEvent_.type != Y.POINTERDRAG) {
      const t = this.lastPointerEvent_
      this.willModifyFeatures_(t, this.dragSegments_)
      const e = this.removeVertex_()
      return (
        this.featuresBeingModified_ &&
          this.dispatchEvent(new ks(Os.MODIFYEND, this.featuresBeingModified_, t)),
        (this.featuresBeingModified_ = null),
        e
      )
    }
    return !1
  }
  removeVertex_() {
    const t = this.dragSegments_,
      e = {}
    let i = !1,
      n,
      r,
      o,
      a,
      l,
      h,
      c,
      u,
      d,
      f,
      g
    for (l = t.length - 1; l >= 0; --l)
      ((o = t[l]),
        (f = o[0]),
        (g = D(f.feature)),
        f.depth && (g += '-' + f.depth.join('-')),
        g in e || (e[g] = {}),
        o[1] === 0
          ? ((e[g].right = f), (e[g].index = f.index))
          : o[1] == 1 && ((e[g].left = f), (e[g].index = f.index + 1)))
    for (g in e) {
      switch (
        ((d = e[g].right),
        (c = e[g].left),
        (h = e[g].index),
        (u = h - 1),
        c !== void 0 ? (f = c) : (f = d),
        u < 0 && (u = 0),
        (a = f.geometry),
        (r = a.getCoordinates()),
        (n = r),
        (i = !1),
        a.getType())
      ) {
        case 'MultiLineString':
          r[f.depth[0]].length > 2 && (r[f.depth[0]].splice(h, 1), (i = !0))
          break
        case 'LineString':
          r.length > 2 && (r.splice(h, 1), (i = !0))
          break
        case 'MultiPolygon':
          n = n[f.depth[1]]
        case 'Polygon':
          ;((n = n[f.depth[0]]),
            n.length > 4 &&
              (h == n.length - 1 && (h = 0),
              n.splice(h, 1),
              (i = !0),
              h === 0 && (n.pop(), n.push(n[0]), (u = n.length - 1))))
          break
      }
      if (i) {
        this.setGeometryCoordinates_(a, r)
        const _ = []
        if (
          (c !== void 0 && (this.rBush_.remove(c), _.push(c.segment[0])),
          d !== void 0 && (this.rBush_.remove(d), _.push(d.segment[1])),
          c !== void 0 && d !== void 0)
        ) {
          const m = { depth: f.depth, feature: f.feature, geometry: f.geometry, index: u, segment: _ }
          this.rBush_.insert(gt(m.segment), m)
        }
        ;(this.updateSegmentIndices_(a, h, f.depth, -1),
          this.vertexFeature_ &&
            (this.overlay_.getSource().removeFeature(this.vertexFeature_), (this.vertexFeature_ = null)),
          (t.length = 0))
      }
    }
    return i
  }
  setGeometryCoordinates_(t, e) {
    ;((this.changingFeature_ = !0), t.setCoordinates(e), (this.changingFeature_ = !1))
  }
  updateSegmentIndices_(t, e, i, n) {
    this.rBush_.forEachInExtent(t.getExtent(), function (r) {
      r.geometry === t &&
        (i === void 0 || r.depth === void 0 || ce(r.depth, i)) &&
        r.index > e &&
        (r.index += n)
    })
  }
}
function Dd(s, t) {
  return s.index - t.index
}
function No(s, t, e) {
  const i = t.geometry
  if (i.getType() === 'Circle') {
    let r = i
    if (t.index === ji) {
      const o = re(r.getCenter(), J(s)),
        a = Math.sqrt(o) - r.getRadius()
      return a * a
    }
  }
  const n = J(s)
  return ((pi[0] = J(t.segment[0])), (pi[1] = J(t.segment[1])), Zl(n, pi))
}
function Xo(s, t, e) {
  const i = t.geometry
  if (i.getType() === 'Circle' && t.index === ji) return We(i.getClosestPoint(J(s)))
  const n = J(s)
  return ((pi[0] = J(t.segment[0])), (pi[1] = J(t.segment[1])), We(ur(n, pi)))
}
function jd() {
  const s = ba()
  return function (t, e) {
    return s.Point
  }
}
class hl extends at {
  constructor(t, e, i, n) {
    ;(super(t), (this.selected = e), (this.deselected = i), (this.mapBrowserEvent = n))
  }
}
const Gd = { SNAP: 'snap' }
class Nd extends at {
  constructor(t, e) {
    ;(super(t), (this.vertex = e.vertex), (this.vertexPixel = e.vertexPixel), (this.feature = e.feature))
  }
}
function Wo(s) {
  return s.feature ? s.feature : s.element ? s.element : null
}
const Ds = []
class Xd extends ue {
  constructor(t) {
    t = t || {}
    const e = t
    ;(e.handleDownEvent || (e.handleDownEvent = le),
      e.stopDown || (e.stopDown = Be),
      super(e),
      this.on,
      this.once,
      this.un,
      (this.source_ = t.source ? t.source : null),
      (this.vertex_ = t.vertex !== void 0 ? t.vertex : !0),
      (this.edge_ = t.edge !== void 0 ? t.edge : !0),
      (this.features_ = t.features ? t.features : null),
      (this.featuresListenerKeys_ = []),
      (this.featureChangeListenerKeys_ = {}),
      (this.indexedFeaturesExtents_ = {}),
      (this.pendingFeatures_ = {}),
      (this.pixelTolerance_ = t.pixelTolerance !== void 0 ? t.pixelTolerance : 10),
      (this.rBush_ = new Zn()),
      (this.GEOMETRY_SEGMENTERS_ = {
        Point: this.segmentPointGeometry_.bind(this),
        LineString: this.segmentLineStringGeometry_.bind(this),
        LinearRing: this.segmentLineStringGeometry_.bind(this),
        Polygon: this.segmentPolygonGeometry_.bind(this),
        MultiPoint: this.segmentMultiPointGeometry_.bind(this),
        MultiLineString: this.segmentMultiLineStringGeometry_.bind(this),
        MultiPolygon: this.segmentMultiPolygonGeometry_.bind(this),
        GeometryCollection: this.segmentGeometryCollectionGeometry_.bind(this),
        Circle: this.segmentCircleGeometry_.bind(this),
      }))
  }
  addFeature(t, e) {
    e = e !== void 0 ? e : !0
    const i = D(t),
      n = t.getGeometry()
    if (n) {
      const r = this.GEOMETRY_SEGMENTERS_[n.getType()]
      if (r) {
        this.indexedFeaturesExtents_[i] = n.getExtent(Ct())
        const o = []
        if ((r(o, n), o.length === 1)) this.rBush_.insert(gt(o[0]), { feature: t, segment: o[0] })
        else if (o.length > 1) {
          const a = o.map(h => gt(h)),
            l = o.map(h => ({ feature: t, segment: h }))
          this.rBush_.load(a, l)
        }
      }
    }
    e && (this.featureChangeListenerKeys_[i] = j(t, O.CHANGE, this.handleFeatureChange_, this))
  }
  getFeatures_() {
    let t
    return (this.features_ ? (t = this.features_) : this.source_ && (t = this.source_.getFeatures()), t)
  }
  handleEvent(t) {
    const e = this.snapTo(t.pixel, t.coordinate, t.map)
    return (
      e &&
        ((t.coordinate = e.vertex.slice(0, 2)),
        (t.pixel = e.vertexPixel),
        this.dispatchEvent(
          new Nd(Gd.SNAP, { vertex: t.coordinate, vertexPixel: t.pixel, feature: e.feature }),
        )),
      super.handleEvent(t)
    )
  }
  handleFeatureAdd_(t) {
    const e = Wo(t)
    e && this.addFeature(e)
  }
  handleFeatureRemove_(t) {
    const e = Wo(t)
    e && this.removeFeature(e)
  }
  handleFeatureChange_(t) {
    const e = t.target
    if (this.handlingDownUpSequence) {
      const i = D(e)
      i in this.pendingFeatures_ || (this.pendingFeatures_[i] = e)
    } else this.updateFeature_(e)
  }
  handleUpEvent(t) {
    const e = Object.values(this.pendingFeatures_)
    return (e.length && (e.forEach(this.updateFeature_.bind(this)), (this.pendingFeatures_ = {})), !1)
  }
  removeFeature(t, e) {
    const i = e !== void 0 ? e : !0,
      n = D(t),
      r = this.indexedFeaturesExtents_[n]
    if (r) {
      const o = this.rBush_,
        a = []
      o.forEachInExtent(r, function (l) {
        t === l.feature && a.push(l)
      })
      for (let l = a.length - 1; l >= 0; --l) o.remove(a[l])
    }
    i && (q(this.featureChangeListenerKeys_[n]), delete this.featureChangeListenerKeys_[n])
  }
  setMap(t) {
    const e = this.getMap(),
      i = this.featuresListenerKeys_,
      n = this.getFeatures_()
    ;(e &&
      (i.forEach(q),
      (i.length = 0),
      this.rBush_.clear(),
      Object.values(this.featureChangeListenerKeys_).forEach(q),
      (this.featureChangeListenerKeys_ = {})),
      super.setMap(t),
      t &&
        (this.features_
          ? i.push(
              j(this.features_, ot.ADD, this.handleFeatureAdd_, this),
              j(this.features_, ot.REMOVE, this.handleFeatureRemove_, this),
            )
          : this.source_ &&
            i.push(
              j(this.source_, ft.ADDFEATURE, this.handleFeatureAdd_, this),
              j(this.source_, ft.REMOVEFEATURE, this.handleFeatureRemove_, this),
            ),
        n.forEach(r => this.addFeature(r))))
  }
  snapTo(t, e, i) {
    i.getView().getProjection()
    const n = J(e),
      r = rs(Hi(gt([n]), i.getView().getResolution() * this.pixelTolerance_)),
      o = this.rBush_.getInExtent(r),
      a = o.length
    if (a === 0) return null
    let l,
      h = 1 / 0,
      c
    const u = this.pixelTolerance_ * this.pixelTolerance_,
      d = () => {
        if (l) {
          const f = i.getPixelFromCoordinate(l)
          if (re(t, f) <= u)
            return { vertex: l, vertexPixel: [Math.round(f[0]), Math.round(f[1])], feature: c }
        }
        return null
      }
    if (this.vertex_) {
      for (let g = 0; g < a; ++g) {
        const _ = o[g]
        _.feature.getGeometry().getType() !== 'Circle' &&
          _.segment.forEach(m => {
            const p = J(m),
              y = re(n, p)
            y < h && ((l = m), (h = y), (c = _.feature))
          })
      }
      const f = d()
      if (f) return f
    }
    if (this.edge_) {
      for (let g = 0; g < a; ++g) {
        let _ = null
        const m = o[g]
        if (m.feature.getGeometry().getType() === 'Circle') {
          let p = m.feature.getGeometry()
          _ = Kl(n, p)
        } else {
          const [p, y] = m.segment
          y && ((Ds[0] = J(p)), (Ds[1] = J(y)), (_ = ur(n, Ds)))
        }
        if (_) {
          const p = re(n, _)
          p < h && ((l = We(_)), (h = p))
        }
      }
      const f = d()
      if (f) return f
    }
    return null
  }
  updateFeature_(t) {
    ;(this.removeFeature(t, !1), this.addFeature(t, !1))
  }
  segmentCircleGeometry_(t, e) {
    this.getMap().getView().getProjection()
    const r = Eh(e).getCoordinates()[0]
    for (let o = 0, a = r.length - 1; o < a; ++o) t.push(r.slice(o, o + 2))
  }
  segmentGeometryCollectionGeometry_(t, e) {
    const i = e.getGeometriesArray()
    for (let n = 0; n < i.length; ++n) {
      const r = this.GEOMETRY_SEGMENTERS_[i[n].getType()]
      r && r(t, i[n])
    }
  }
  segmentLineStringGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let n = 0, r = i.length - 1; n < r; ++n) t.push(i.slice(n, n + 2))
  }
  segmentMultiLineStringGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let n = 0, r = i.length; n < r; ++n) {
      const o = i[n]
      for (let a = 0, l = o.length - 1; a < l; ++a) t.push(o.slice(a, a + 2))
    }
  }
  segmentMultiPointGeometry_(t, e) {
    e.getCoordinates().forEach(i => {
      t.push([i])
    })
  }
  segmentMultiPolygonGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let n = 0, r = i.length; n < r; ++n) {
      const o = i[n]
      for (let a = 0, l = o.length; a < l; ++a) {
        const h = o[a]
        for (let c = 0, u = h.length - 1; c < u; ++c) t.push(h.slice(c, c + 2))
      }
    }
  }
  segmentPointGeometry_(t, e) {
    t.push([e.getCoordinates()])
  }
  segmentPolygonGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let n = 0, r = i.length; n < r; ++n) {
      const o = i[n]
      for (let a = 0, l = o.length - 1; a < l; ++a) t.push(o.slice(a, a + 2))
    }
  }
}
const js = { TRANSLATESTART: 'translatestart', TRANSLATING: 'translating', TRANSLATEEND: 'translateend' }
class kn extends at {
  constructor(t, e, i, n, r) {
    ;(super(t),
      (this.features = e),
      (this.coordinate = i),
      (this.startCoordinate = n),
      (this.mapBrowserEvent = r))
  }
}
class Wd extends ue {
  constructor(t) {
    ;((t = t || {}),
      super(t),
      this.on,
      this.once,
      this.un,
      (this.lastCoordinate_ = null),
      (this.startCoordinate_ = null),
      (this.features_ = t.features !== void 0 ? t.features : null))
    let e
    if (t.layers && !this.features_)
      if (typeof t.layers == 'function') e = t.layers
      else {
        const i = t.layers
        e = function (n) {
          return i.includes(n)
        }
      }
    else e = le
    ;((this.layerFilter_ = e),
      (this.filter_ = t.filter && !this.features_ ? t.filter : le),
      (this.hitTolerance_ = t.hitTolerance ? t.hitTolerance : 0),
      (this.condition_ = t.condition ? t.condition : Ui),
      (this.lastFeature_ = null),
      this.addChangeListener(Hn.ACTIVE, this.handleActiveChanged_))
  }
  handleDownEvent(t) {
    if (!t.originalEvent || !this.condition_(t)) return !1
    if (
      ((this.lastFeature_ = this.featuresAtPixel_(t.pixel, t.map)),
      !this.lastCoordinate_ && this.lastFeature_)
    ) {
      ;((this.startCoordinate_ = t.coordinate),
        (this.lastCoordinate_ = t.coordinate),
        this.handleMoveEvent(t))
      const e = this.features_ || new ut([this.lastFeature_])
      return (this.dispatchEvent(new kn(js.TRANSLATESTART, e, t.coordinate, this.startCoordinate_, t)), !0)
    }
    return !1
  }
  handleUpEvent(t) {
    if (this.lastCoordinate_) {
      ;((this.lastCoordinate_ = null), this.handleMoveEvent(t))
      const e = this.features_ || new ut([this.lastFeature_])
      return (
        this.dispatchEvent(new kn(js.TRANSLATEEND, e, t.coordinate, this.startCoordinate_, t)),
        (this.startCoordinate_ = null),
        !0
      )
    }
    return !1
  }
  handleDragEvent(t) {
    if (this.lastCoordinate_) {
      const e = t.coordinate
      t.map.getView().getProjection()
      const i = J(e),
        n = J(this.lastCoordinate_),
        r = i[0] - n[0],
        o = i[1] - n[1],
        a = this.features_ || new ut([this.lastFeature_])
      ;(a.forEach(function (l) {
        const h = l.getGeometry()
        ;(h.translate(r, o), l.setGeometry(h))
      }),
        (this.lastCoordinate_ = e),
        this.dispatchEvent(new kn(js.TRANSLATING, a, e, this.startCoordinate_, t)))
    }
  }
  handleMoveEvent(t) {
    const e = t.map.getViewport()
    this.featuresAtPixel_(t.pixel, t.map)
      ? (e.classList.remove(this.lastCoordinate_ ? 'ol-grab' : 'ol-grabbing'),
        e.classList.add(this.lastCoordinate_ ? 'ol-grabbing' : 'ol-grab'))
      : e.classList.remove('ol-grab', 'ol-grabbing')
  }
  featuresAtPixel_(t, e) {
    return e.forEachFeatureAtPixel(
      t,
      (i, n) => {
        if (
          !(!(i instanceof _t) || !this.filter_(i, n)) &&
          !(this.features_ && !this.features_.getArray().includes(i))
        )
          return i
      },
      { layerFilter: this.layerFilter_, hitTolerance: this.hitTolerance_ },
    )
  }
  getHitTolerance() {
    return this.hitTolerance_
  }
  setHitTolerance(t) {
    this.hitTolerance_ = t
  }
  setMap(t) {
    const e = this.getMap()
    ;(super.setMap(t), this.updateState_(e))
  }
  handleActiveChanged_() {
    this.updateState_(null)
  }
  updateState_(t) {
    let e = this.getMap()
    const i = this.getActive()
    ;(!e || !i) && ((e = e || t), e && e.getViewport().classList.remove('ol-grab', 'ol-grabbing'))
  }
}
var Yd = '1.1.2',
  Pt = (function (s) {
    return (
      (s.SELECT = 'select'),
      (s.DESELECT = 'deselect'),
      (s.DRAW_BEGIN = 'drawBegin'),
      (s.DRAW_COMPLETE = 'drawComplete'),
      (s.TRANSLATE_START = 'translateBegin'),
      (s.TRANSLATE_END = 'translateComplete'),
      (s.MODIFY_BEGIN = 'modifyBegin'),
      (s.MODIFY_COMPLETE = 'modifyComplete'),
      (s.REMOVE = 'remove'),
      (s.COMPLETE = 'complete'),
      s
    )
  })(Pt || {}),
  Yo = class extends at {
    removeFeatures
    removeArray
    remainArray
    remainFeatures
    constructor(s, t, e, i) {
      ;(super(Pt.REMOVE),
        (this.removeArray = s),
        (this.removeFeatures = t),
        (this.remainArray = e),
        (this.remainFeatures = i))
    }
  },
  zd = class extends hl {
    selectArray
    selectData
    selectFeature
    constructor(s, t, e, i, n) {
      ;(super(s, i, n), (this.selectArray = t), (this.selectFeature = i[0]), (this.selectData = e))
    }
  },
  Bd = class extends hl {
    deselectArray
    deselectData
    deselectFeature
    constructor(s, t, e, i, n) {
      ;(super(s, i, n), (this.deselectArray = t), (this.deselectFeature = n[0]), (this.deselectData = e))
    }
  },
  Gs = class extends at {
    data
    feature
    startAt
    endAt
    allFeatures
    allData
    constructor(s, t, e, i, n, r, o) {
      ;(super(s),
        (this.data = t),
        (this.allData = n),
        (this.allFeatures = r),
        (this.feature = e),
        (this.startAt = i),
        (this.endAt = o))
    }
  },
  zo = class extends kn {
    dataArray
    startAt
    endAt
    constructor(s, t, e, i, n) {
      ;(super(s, e, n?.coord3857 ?? [], i.coord3857),
        (this.dataArray = t),
        (this.features = e),
        (this.startAt = i),
        (this.endAt = n))
    }
    get distance() {
      return this.endAt ? Nn(this.startAt.coord, this.endAt.coord) : 0
    }
  },
  Bo = class extends at {
    dataArray
    features
    constructor(s, t, e) {
      ;(super(s), (this.dataArray = t), (this.features = e))
    }
  },
  Vd = class extends at {
    array
    features
    constructor(s, t) {
      ;(super(Pt.COMPLETE), (this.array = s), (this.features = t))
    }
  }
const Pn = [
  {
    name: 'point',
    type: 'Point',
    title: '绘制点',
    icon: s => `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1.5rem"
  height="1.5rem"
  viewBox="0 0 24 24" title="绘制点">
  <path
    fill="${s}"
    stroke="${s}"
    d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5" />
</svg>`,
  },
  {
    name: 'line',
    type: 'LineString',
    title: '绘制线',
    icon: s => `<svg
xmlns="http://www.w3.org/2000/svg"
width="1.5rem"
height="1.5rem"
viewBox="0 0 24 24">
<path
  fill="${s}"
  stroke="${s}"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="1"
  d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M16 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 16.5l9-9" />
</svg>`,
  },
  {
    name: 'polygon',
    type: 'Polygon',
    title: '绘制多边形',
    icon: s => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24">
      <path
        fill="${s}"
        stroke-width="1"
        d="m21.934 11.751l-4.75-8.255a.5.5 0 0 0-.434-.25h-9.5a.5.5 0 0 0-.434.25l-4.75 8.255a.5.5 0 0 0 0 .498l4.75 8.255c.09.155.255.25.434.25h9.5a.5.5 0 0 0 .434-.25l4.75-8.255a.5.5 0 0 0 0-.498m-5.473 8.004H7.539L3.077 12L7.54 4.245h8.922L20.923 12z" />
    </svg>`,
  },
  {
    name: 'circle',
    type: 'Circle',
    title: '绘制圆',
    icon: s => `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="${s}"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
      d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z" />
  </svg>`,
  },
  {
    name: 'rectangle',
    type: 'Rectangle',
    title: '绘制矩形',
    icon: s => `<svg
       xmlns="http://www.w3.org/2000/svg"
       width="1.5rem"
       height="1.5rem"
       viewBox="0 0 24 24">
       <path
         fill="none"
         stroke="${s}"
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="1"
         d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
     </svg>`,
  },
  {
    name: 'freehand',
    type: 'freehand',
    title: '自由绘制，只有线、多边形和圆支持',
    icon: s => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 32 32">
      <path
        fill="${s}"
        d="M14 2.5a.5.5 0 0 1 .5-.5h1c4.01 0 6.81.25 8.621.702c.903.226 1.602.512 2.085.875c.497.372.794.852.794 1.423c0 .47-.122.948-.52 1.368c-.379.399-.963.696-1.783.926C23.062 7.752 20.25 8 15.5 8s-7.438.252-8.928.669c-.742.208-1.127.441-1.326.652C5.066 9.51 5 9.72 5 10c0 .179.078.387.394.623c.33.247.88.493 1.727.704c1.232.308 3.002.525 5.417.62q-.038.27-.038.553v.446c-2.456-.096-4.301-.318-5.621-.648c-.903-.226-1.602-.512-2.085-.875C4.297 11.05 4 10.571 4 10c0-.47.122-.948.52-1.368c.379-.399.963-.696 1.783-.926C7.939 7.248 10.75 7 15.5 7c4.751 0 7.439-.252 8.928-.669c.742-.208 1.127-.441 1.326-.652c.18-.19.246-.399.246-.679c0-.179-.078-.387-.394-.623c-.33-.247-.88-.493-1.727-.704C22.189 3.25 19.489 3 15.5 3h-1a.5.5 0 0 1-.5-.5m2.476 7.5a2.5 2.5 0 0 0-2.5 2.5v6.731l-1.285-.57a4.49 4.49 0 0 0-5.513 1.55a1.006 1.006 0 0 0 .427 1.491c5.713 2.518 7.633 4.811 8.437 6.54c.502 1.079 1.616 1.93 2.917 1.73l3.634-.56a2.5 2.5 0 0 0 2.046-1.867l1.224-4.92a4.5 4.5 0 0 0-3.651-5.53l-3.237-.521v-4.075A2.5 2.5 0 0 0 16.476 10m-1.5 2.5a1.5 1.5 0 0 1 3 0V17a.5.5 0 0 0 .42.494l3.657.588a3.5 3.5 0 0 1 2.84 4.301l-1.224 4.92a1.5 1.5 0 0 1-1.228 1.121l-3.634.56c-.742.114-1.488-.368-1.858-1.163c-.944-2.03-3.104-4.462-8.941-7.034l-.004-.002l-.002-.005a3.49 3.49 0 0 1 4.284-1.204l1.988.881a.5.5 0 0 0 .703-.457z" />
    </svg>`,
  },
  {
    name: 'modify',
    type: 'modify',
    title: '修改要素，按住 alt 可删除顶点',
    icon: s => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="${s}"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.1">
        <path
          d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
        <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
      </g>
    </svg>`,
  },
  {
    name: 'translate',
    type: 'translate',
    title: '移动要素',
    icon: s => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24">
      <path
        fill="${s}"
        d="m12 3l.365-.342l-.365-.39l-.365.39zm-.5 6a.5.5 0 0 0 1 0zm3.865-3.142l-3-3.2l-.73.684l3 3.2zm-3.73-3.2l-3 3.2l.73.684l3-3.2zM11.5 3v6h1V3zm9.5 9l.342.365l.39-.365l-.39-.365zm-6-.5a.5.5 0 0 0 0 1zm3.142 3.865l3.2-3l-.684-.73l-3.2 3zm3.2-3.73l-3.2-3l-.684.73l3.2 3zM21 11.5h-6v1h6zM12 21l.365.342l-.365.39l-.365-.39zm-.5-6a.5.5 0 0 1 1 0zm3.865 3.142l-3 3.2l-.73-.684l3-3.2zm-3.73 3.2l-3-3.2l.73-.684l3 3.2zM11.5 21v-6h1v6zM3 12l-.342.365l-.39-.365l.39-.365zm6-.5a.5.5 0 0 1 0 1zm-3.142 3.865l-3.2-3l.684-.73l3.2 3zm-3.2-3.73l3.2-3l.684.73l-3.2 3zM3 11.5h6v1H3z" />
    </svg>`,
  },
  {
    name: 'remove',
    type: 'remove',
    title: '删除要素',
    icon: s => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 20 20">
      <path
        fill="${s}"
        d="M8.5 4h3a1.5 1.5 0 0 0-3 0m-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM5.741 15.23A2 2 0 0 0 7.728 17h4.544a2 2 0 0 0 1.987-1.77L15.439 5H4.561zM8.5 7.5A.5.5 0 0 1 9 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5M12 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
    </svg>`,
  },
  {
    name: 'complete',
    type: 'complete',
    title: '完成',
    icon: s => `<svg
       xmlns="http://www.w3.org/2000/svg"
       width="1.5rem"
       height="1.5rem"
       viewBox="0 0 24 24">
       <g fill="none" fill-rule="evenodd">
         <path
           d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
         <path
           fill="${s}"
           d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.414A2 2 0 0 0 19.414 5L17 2.586A2 2 0 0 0 15.586 2zm0 2h9.586L18 6.414V20H6zm10.238 6.793a1 1 0 1 0-1.414-1.414l-4.242 4.243l-1.415-1.415a1 1 0 0 0-1.414 1.414l2.05 2.051a1.1 1.1 0 0 0 1.556 0l4.88-4.879Z" />
       </g>
     </svg>`,
  },
  {
    name: 'removeAll',
    type: 'removeAll',
    title: '删除所有',
    icon: s => `<svg  xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 1024 1024"><path fill="${s}" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"></path></svg>`,
  },
]
function Kd(s) {
  if (typeof s != 'string' || s.trim() === '') return !1
  let t = s.trim()
  if (t.startsWith('SRID=')) {
    const l = t.split(';')
    if (l.length < 2) return !1
    t = l[1].trim()
  }
  const e = [
      'POINT',
      'LINESTRING',
      'POLYGON',
      'MULTIPOINT',
      'MULTILINESTRING',
      'MULTIPOLYGON',
      'GEOMETRYCOLLECTION',
    ],
    i = /^([A-Z]+)(.*)$/s.exec(t)
  if (!i) return !1
  const n = i[1],
    r = i[2].trim()
  if (!e.includes(n)) return !1
  if (r === 'EMPTY') return !0
  const o = (r.match(/\(/g) || []).length,
    a = (r.match(/\)/g) || []).length
  if (o !== a) return !1
  if (n === 'POINT') {
    const l = /\(([^()]+)\)/.exec(r)
    if (!l) return !1
    const h = l[1].trim().split(/\s+/)
    if (h.length < 2 || !h.every(c => !isNaN(Number(c)))) return !1
  }
  return !0
}
function Ud(s) {
  if (typeof s != 'string') return null
  const t = s.trim()
  if (!t) return null
  const e = t
    .replace(/^SRID=\d+;/i, '')
    .trim()
    .match(/^(POINT|LINESTRING|POLYGON|MULTIPOINT|MULTILINESTRING|MULTIPOLYGON|GEOMETRYCOLLECTION)\b/)
  return e ? e[1] : null
}
function Wr(s) {
  if (s == null || typeof s != 'object') return !1
  const t = s
  if (typeof t.type != 'string') return !1
  const e = t.type
  return [
    'Point',
    'LineString',
    'Polygon',
    'MultiPoint',
    'MultiLineString',
    'MultiPolygon',
    'GeometryCollection',
  ].includes(e)
    ? e === 'GeometryCollection'
      ? Array.isArray(t.geometries)
      : Array.isArray(t.coordinates)
    : e === 'Feature'
      ? t.hasOwnProperty('geometry') && t.hasOwnProperty('properties')
      : e === 'FeatureCollection' && Array.isArray(t.features)
        ? t.features.every(i => Wr(i) && i.type === 'Feature')
        : !1
}
function Zd(s) {
  if (typeof s != 'string' || s.trim() === '') return !1
  const t = s.trim()
  if (t.startsWith('{'))
    try {
      const e = JSON.parse(t)
      return !!Wr(e)
    } catch {
      return !1
    }
  return !1
}
function qd(s) {
  if (s == null) return [0, 0, 0, 0]
  if (typeof s == 'number') return [s, s, s, s]
  switch (s.length) {
    case 1:
      return [s[0], s[0], s[0], s[0]]
    case 2:
      return [s[0], s[1], s[0], s[1]]
    case 3:
      return [s[0], s[1], s[2], s[1]]
    case 4:
      return [s[0], s[1], s[2], s[3]]
    default:
      throw new Error('Invalid padding format')
  }
}
function Mi(s = '') {
  return s.toLowerCase() + '_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36)
}
function Vo(s, t = 200, e = !1) {
  let i
  return (...n) => {
    ;(e && !i && s(...n),
      i && clearTimeout(i),
      (i = setTimeout(() => {
        s(...n)
      }, t)))
  }
}
function Hd(s, t) {
  const e = d => (d * Math.PI) / 180,
    i = d => (d * 180) / Math.PI,
    [n, r] = s,
    [o, a] = t,
    l = e(r),
    h = e(a),
    c = e(n - o),
    u = Math.sin(l) * Math.sin(h) + Math.cos(l) * Math.cos(h) * Math.cos(c)
  return i(Math.acos(Math.min(1, Math.max(-1, u)))) ** 1.11696
}
const Jd = ['Point', 'LineString', 'Polygon', 'Circle'],
  $d = getComputedStyle(document.documentElement).getPropertyValue('--ol-foreground-color'),
  Qd = new Rt({
    fill: new qt({ color: 'rgba(255,255,255,0.5)' }),
    stroke: new Nt({ width: 2.5, color: 'red' }),
    image: new Ue({ radius: 5, stroke: new Nt({ width: 2.5, color: 'red' }) }),
  }),
  tf = { duration: 500, maxZoom: 14, padding: 100 },
  Mn = ['LineString', 'Polygon'],
  Ko = +Math.floor(Number.MAX_SAFE_INTEGER / 1e7),
  ef = {
    remove: 'remove geometry',
    translate: 'translate geometry',
    modify: 'modify geometry',
    complete: 'complete edit geometry',
  }
var nf = class extends Xt {
  #t = new Mr()
  #f = null
  #e = new ut([])
  #s = null
  #_ = null
  #m = 'EPSG:4326'
  #i = 'EPSG:3857'
  #h = null
  #a = null
  #d = null
  #l = null
  #r = 'None'
  #E = null
  #C = null
  #c = null
  #p = !1
  #y = !0
  #x = !1
  #g = !1
  supportFreehand = !0
  showToolBar = !0
  actions = ['modify', 'translate', 'remove', 'complete']
  drawTypes = Jd
  allButtons = Pn
  sketchStyle = null
  selectedStyle = Qd
  modifyingStyle = null
  toolBarContainer = null
  enableModifier = !1
  enableMover = !1
  constructor(s, t = {}) {
    ;(super(),
      (this.#s = s),
      (this.#_ = s.getView()),
      (this.#i = this.#_.getProjection().getCode()),
      this.#F(t),
      this.#A(),
      this.#P(),
      this.#M(),
      this.showToolBar && this.render(),
      (this.#c = s.on('singleclick', this.#w.bind(this))))
    const e = Vo(this.#L.bind(this), 50)
    s.on('pointermove', e)
  }
  get source() {
    return this.#t
  }
  get layer() {
    return this.#f
  }
  addFeatureFromWKT(s, t, e = 'EPSG:4326') {
    if (!s || !Kd(s)) return null
    if (t) {
      const r = this.#t.getFeatureById(t)
      if (r) return r
    }
    let i
    if (typeof e == 'string') i = new vn().readFeature(s, { dataProjection: e, featureProjection: this.#i })
    else {
      const { style: r, ...o } = e
      ;((i = new vn().readFeature(s, o)), r && i.setStyle(r))
    }
    const n = Ud(s)
    return (i.setId(t ?? Mi(n ?? '')), this.#t.addFeature(i), i)
  }
  addFeatureFromJSON(s, t = 'EPSG:4326') {
    if (!s) return null
    let e = ''
    if (typeof s == 'object') {
      if (!Wr(s)) return null
      try {
        e = window.JSON.stringify(s)
      } catch {
        return null
      }
    } else e = s
    if (Zd(e)) {
      let i
      if (typeof t == 'string') i = new Pi().readFeature(e, { dataProjection: t, featureProjection: this.#i })
      else {
        const { style: a, ...l } = t
        ;((i = new Pi().readFeature(e, l)), a && i.setStyle(a))
      }
      const n = i.getGeometry()?.getType(),
        r = i.getProperties(),
        o = i.getId()
      if (!o) i.setId(Mi(n))
      else {
        const a = this.#t.getFeatureById(o)
        if (a) return a
      }
      if (r.geometryType === 'circle' && n === 'Polygon') {
        const a = r.center,
          l = r.radius,
          h = r.r
        if (Array.isArray(a) && l != null && h != null) {
          const c = ri(a),
            u = this.#i.endsWith('3857'),
            d = new _t(new nn(u ? c : a, u ? l : h))
          ;(d.setId(o ?? Mi('circle')), this.#t.addFeature(d))
        }
      } else this.#t.addFeature(i)
      return i
    }
    return null
  }
  enableDraw(s, t) {
    if (this.#s) {
      if ((this.disableDraw(), this.disableSnap(), (this.#r = s), s === 'None')) {
        this.showToolBar &&
          (this.drawTypes.forEach(e => {
            this.#o(e, !1)
          }),
          this.#u('freehand', !0, 'enable freehand draw.'))
        return
      }
      ;(this.disableSelect(),
        this.disableModify(),
        this.disableTranslate(),
        t && (this.sketchStyle = t),
        (this.#h = new Md({
          source: this.#t,
          type: s,
          freehand: this.#g && Mn.includes(s),
          style: this.sketchStyle !== null ? this.sketchStyle : void 0,
        })),
        this.#s.addInteraction(this.#h),
        (this.#C = this.#h.on('drawstart', e => {
          this.dispatchEvent(e)
          const i = e.feature,
            [n, r] = i.getGeometry().getFlatCoordinates(),
            o = Dt([n, r], this.#i, 'EPSG:4326'),
            a = ri(o),
            l = this.#t.getFeatures(),
            h = this.#n(l),
            c = { coord: o, coord3857: a }
          this.dispatchEvent(new Gs(Pt.DRAW_BEGIN, null, i, c, h, l))
        })),
        (this.#E = this.#h.on('drawend', e => {
          this.dispatchEvent(e)
          const i = e.feature,
            n = i.getGeometry().getFlatCoordinates(),
            [r, o] = n,
            a = Dt([r, o], this.#i, 'EPSG:4326'),
            l = ri(a),
            h = { coord: a, coord3857: l },
            c = Dt([n.at(-2), n.at(-1)], this.#i, 'EPSG:4326'),
            u = ri(c),
            d = { coord: c, coord3857: u }
          i.setId(Mi(this.#r))
          const f = this.#t.getFeatures()
          f.push(i)
          const g = this.#n(f)
          if (this.#r === 'Circle') {
            const _ = this.#S(i),
              m = new Gs(Pt.DRAW_COMPLETE, _, i, h, g, f, d)
            this.dispatchEvent(m)
          } else {
            const [_] = this.#n([i]),
              m = new Gs(Pt.DRAW_COMPLETE, _, i, h, g, f, d)
            this.dispatchEvent(m)
          }
        })),
        this.enableSnap(),
        this.showToolBar &&
          (this.#o(s, !0),
          this.drawTypes.forEach(e => {
            if (e === s) return 'next loop'
            this.#o(e, !1)
          }),
          Mn.includes(this.#r)
            ? this.#u('freehand', !0, 'enable freehand draw.')
            : ((this.#g = !1), this.#o('freehand', !1), this.#u('freehand', !1, 'cannot freehand draw.'))))
    }
  }
  disableDraw() {
    !this.#s ||
      !this.#h ||
      ((this.#r = 'None'),
      this.disableSnap(),
      this.showToolBar &&
        (this.drawTypes.forEach(s => {
          this.#o(s, !1)
        }),
        this.#u('freehand', !0, 'enable freehand draw.')),
      this.#s.removeInteraction(this.#h),
      (this.#h = null),
      An(this.#E),
      An(this.#C))
  }
  enableFreehand() {
    ;((this.#g = !0),
      this.showToolBar && this.#o('freehand', !0),
      Mn.includes(this.#r) && this.enableDraw(this.#r))
  }
  disableFreehand() {
    ;((this.#g = !1),
      this.showToolBar &&
        (this.#o('freehand', !1),
        !Mn.includes(this.#r) &&
          this.#r !== 'None' &&
          this.#u('freehand', !1, "current geometry type don't support freehand draw.")),
      this.sketchStyle ? this.enableDraw(this.#r, this.sketchStyle) : this.enableDraw(this.#r))
  }
  select(s, t) {
    if (!this.#c) return []
    const e = t?.selectedStyle,
      i = t?.eachFeature
    let n = !0
    t?.fit === !1 && (n = !1)
    const r = []
    Array.isArray(s) ? r.push(...s) : r.push(s)
    const o = Ct(),
      a = []
    let l = !1
    if (
      (r.forEach((h, c) => {
        const u = this.#t.getFeatureById(h)
        if (u) {
          if ((a.push(u), this.#e.push(u), n)) {
            const d = u.getGeometry()?.getExtent()
            lr(o, d)
          }
          e && u.setStyle(e)
        }
        !l && i && u && (l = !!i(u, c))
      }),
      n && a.length)
    ) {
      const h = tf
      ;(t?.fit !== !1 && (Object.assign(h, t?.fit === !0 ? {} : t?.fit), (h.padding = qd(h.padding))),
        this.#_.fit(o, h))
    }
    return a
  }
  deselect(s, t) {
    const e = t?.deselectStyle,
      i = t?.eachFeature,
      n = []
    Array.isArray(s) ? n.push(...s) : n.push(s)
    let r = !1
    n.forEach((o, a) => {
      const l = this.#t.getFeatureById(o)
      ;(l && (this.#e.remove(l), l.setStyle(e)), !r && i && l && (r = !!i(l, a)))
    })
  }
  enableSelect(s = { multi: !0, box: !1, single: !1 }) {
    return (
      this.disableDraw(),
      (this.#x = s?.single === !0),
      (this.#p = s?.box === !0),
      (this.#y = s?.multi !== !1),
      this.#x && ((this.#y = !1), (this.#p = !1)),
      (this.#y || this.#p) && this.disableModify(),
      this.#c || (this.#c = this.#s.on('singleclick', this.#w.bind(this))),
      !0
    )
  }
  disableSelect() {
    return (An(this.#c), (this.#c = null), !0)
  }
  enableTranslate(s) {
    return (
      this.enableSelect({ multi: !0 }),
      (this.enableMover = !0),
      this.disableModify(),
      this.disableDraw(),
      this.disableFreehand(),
      this.showToolBar && this.#o('translate', !0),
      this.#l
        ? (this.#l.setActive(!0), !0)
        : ((this.#l = new Wd({ features: this.#e })),
          this.#s?.addInteraction(this.#l),
          this.#l.on('translatestart', t => {
            ;(this.dispatchEvent(t), this.#D(t))
          }),
          this.#l.on('translateend', t => {
            ;(this.dispatchEvent(t), this.#j(t))
          }),
          !0)
    )
  }
  disableTranslate(s) {
    return ((this.enableMover = !1), this.#o('translate', !1), this.#l && this.#l.setActive(!1), !0)
  }
  enableModify(s) {
    if (
      (this.enableSelect({ single: !0 }),
      this.disableTranslate(),
      this.disableDraw(),
      this.disableFreehand(),
      (this.enableModifier = !0),
      this.showToolBar && this.#o('modify', !0),
      this.#a)
    ) {
      ;(this.#a.setActive(!0), this.enableSnap())
      return
    }
    ;(s !== null && (this.modifyingStyle = s),
      (this.#a = new kd({
        features: this.#e,
        style: this.modifyingStyle !== null ? this.modifyingStyle : void 0,
      })),
      this.#s?.addInteraction(this.#a),
      this.#a.on('modifystart', t => {
        this.dispatchEvent(t)
        const e = this.#n(t.features),
          i = new Bo(Pt.MODIFY_BEGIN, e, t.features)
        this.dispatchEvent(i)
      }),
      this.#a.on('modifyend', t => {
        this.dispatchEvent(t)
        const e = this.#n(t.features),
          i = new Bo(Pt.MODIFY_COMPLETE, e, t.features)
        this.dispatchEvent(i)
      }),
      this.enableSnap())
  }
  disableModify(s, t) {
    return (
      this.disableSnap(),
      (this.enableModifier = !1),
      this.showToolBar && this.#o('modify', !1),
      this.#a && this.#a.setActive(!1),
      !0
    )
  }
  disableSnap() {
    this.#d && this.#d.setActive(!1)
  }
  enableSnap() {
    if (this.#d) {
      this.#d.setActive(!0)
      return
    }
    ;((this.#d = new Xd({ source: this.#t, intersection: !0 })), this.#s?.addInteraction(this.#d))
  }
  removeFeatures(s) {
    if (s == null) {
      const o = this.#e.getArray().slice(),
        a = this.#n(o)
      ;(this.#e.forEach(u => {
        this.#t.removeFeature(u)
      }),
        this.#e.clear())
      const l = this.#t.getFeatures().slice(),
        h = this.#n(l),
        c = new Yo(a, o, h, l)
      this.dispatchEvent(c)
      return
    }
    const t = Array.isArray(s) ? s : [s],
      e = []
    t.forEach(o => {
      const a = this.#t.getFeatureById(o)
      a && (e.push(a), this.#t.removeFeature(a), this.#e.remove(a))
    })
    const i = this.#e.getArray(),
      n = this.#n(i),
      r = new Yo(this.#n(e), e, n, i)
    this.dispatchEvent(r)
  }
  removeAllFeatures() {
    return (this.#t.clear(), this.#e.clear(), Promise.resolve(!0))
  }
  completeEdit() {
    ;(this.#e.forEach(i => {
      i.setStyle(void 0)
    }),
      this.#e.clear(),
      this.disableDraw(),
      this.disableFreehand(),
      this.disableModify(),
      this.disableTranslate())
    const s = this.#t.getFeatures(),
      t = this.#n(s),
      e = new Vd(t, s)
    this.dispatchEvent(e)
  }
  render() {
    ;(this.#I(), this.#b())
  }
  #I() {
    if (!this.#s?.getTargetElement()) return
    const s = this.#s.getTargetElement().querySelector('.ol-overlaycontainer-stopevent'),
      t = document.createElement('div')
    ;(t.classList.add('geom-editor-tool-bar'),
      t.classList.add('ol-control'),
      (t.style = 'pointer-events: auto;'),
      this.allButtons.forEach(e => {
        const i = document.createElement('button')
        i.classList.add('geom-editor-btn')
        const n = e.name
        ;(this.actions.includes(n) &&
          (n === 'complete'
            ? (i.disabled = !0)
            : this.#t.getFeatures().length
              ? (i.disabled = !1)
              : ((i.disabled = !0), (i.title = ''))),
          (i.innerHTML = e.icon($d)),
          (i.title = e.title),
          (i.dataset.type = e.type),
          t.appendChild(i))
      }),
      s.appendChild(t),
      (this.toolBarContainer = t))
  }
  #b() {
    this.toolBarContainer &&
      this.toolBarContainer.addEventListener('click', s => {
        const t = s.target.closest('button')
        if (!t) return
        const e = t.dataset.type
        this.drawTypes.includes(e)
          ? this.#r === e
            ? this.enableSelect()
            : this.enableDraw(e)
          : e === 'freehand'
            ? this.#g
              ? this.disableFreehand()
              : this.enableFreehand()
            : e === 'modify'
              ? this.enableModifier
                ? this.disableModify()
                : this.enableModify()
              : e === 'translate'
                ? this.enableMover
                  ? this.disableTranslate()
                  : this.enableTranslate()
                : e === 'remove'
                  ? this.removeFeatures()
                  : this.completeEdit()
      })
  }
  #F(s) {
    const { layerStyle: t, selectedStyle: e } = s
    e && (this.selectedStyle = e)
    const i = Ko + 1
    ;((this.#f = new Pr({ zIndex: i, source: this.#t, className: this.#G(s), style: t })),
      (this.supportFreehand = s?.supportFreehand !== !1),
      (this.showToolBar = s?.showToolBar !== !1),
      Array.isArray(s.actions) && (this.actions = s.actions),
      Array.isArray(s.drawTypes) && (this.drawTypes = s.drawTypes))
    const n = Pn.filter(o => this.drawTypes.includes(o.type))
    this.supportFreehand && n.push(Pn.find(o => o.name === 'freehand'))
    const r = Pn.filter(o => this.actions.includes(o.name))
    this.allButtons = [...n, ...r]
  }
  #w(s) {
    if (this.#t.getFeatures().length === 0) return
    if (!this.#s.hasFeatureAtPixel(s.pixel)) {
      ;(this.#e.forEach(e => {
        e.setStyle(void 0)
      }),
        this.#e.clear())
      return
    }
    const t = e => {
      if (!e) return
      const i = this.#e.getArray().find(n => n.getId() === e.getId())
      this.#x
        ? (this.#e.forEach(n => {
            n.setStyle(void 0)
          }),
          this.#e.clear(),
          i || (this.#e.push(e), e.setStyle(this.selectedStyle)))
        : i
          ? (this.#e.remove(i), e.setStyle(void 0))
          : (this.#e.push(e), e.setStyle(this.selectedStyle))
    }
    this.#s.forEachFeatureAtPixel(
      s.pixel,
      e => {
        t(e)
      },
      { layerFilter: e => e === this.#f },
    )
  }
  #L(s) {
    if (s.dragging || !this.#c) return
    const t = s.map,
      e = t.getEventPixel(s.originalEvent),
      i = t.hasFeatureAtPixel(e)
    t.getTargetElement().style.cursor = i ? 'pointer' : ''
  }
  #P() {
    this.#t.on('changefeature', () => {})
    let s = !1
    const t = () => {
      this.showToolBar &&
        !s &&
        (this.actions.forEach(i => {
          this.#u(i, !0, ef[i])
        }),
        (s = !0))
    }
    this.#t.on('addfeature', t)
    const e = () => {
      ;((s = this.#t.getFeatures().length > 0),
        !s &&
          this.showToolBar &&
          this.actions.forEach(i => {
            if (i === 'complete') return 'next loop'
            this.#u(i, !1, '')
          }))
    }
    this.#t.on('removefeature', Vo(e))
  }
  #M() {
    const s = e => {
      const i = e.element,
        n = this.#e.getArray(),
        [r] = this.#n([i]),
        o = this.#n(n)
      this.dispatchEvent(new zd(Pt.SELECT, o, r, n, []))
    }
    this.#e.on('add', s)
    const t = e => {
      const i = e.element,
        [n] = this.#n([i]),
        r = this.#e.getArray(),
        o = this.#n([i]),
        a = [i]
      this.dispatchEvent(new Bd(Pt.DESELECT, o, n, r, a))
    }
    this.#e.on('remove', t)
  }
  #A() {
    this.#f && this.#s?.addLayer(this.#f)
  }
  #O(s) {
    const { feature: t, id: e } = this.#T(s)
    return { wkt: new vn().writeFeature(t, { dataProjection: this.#m, featureProjection: this.#i }), id: e }
  }
  #T(s) {
    let t
    return (s.getId() ? (t = s.getId()) : ((t = Mi()), s.setId(t)), { id: t, feature: s })
  }
  #k(s) {
    const { feature: t, id: e } = this.#T(s),
      i = new Pi().writeFeatureObject(t, { dataProjection: this.#m, featureProjection: this.#i }),
      n = new Pi().writeFeature(t, { dataProjection: this.#m, featureProjection: this.#i })
    return { id: e, geojsonObj: i, geojson: n }
  }
  #n(s) {
    let t = []
    return (
      Array.isArray(s) ? (t = s) : (t = s.getArray()),
      t.map(e => {
        if (e.getGeometry()?.getType() === 'Circle') return this.#S(e)
        const { wkt: i, id: n } = this.#O(e),
          { geojson: r, geojsonObj: o } = this.#k(e)
        return { wkt: i, id: n, geojson: r, geojsonObj: o }
      })
    )
  }
  #S(s) {
    const t = s.getGeometry(),
      e = t.getFlatCoordinates(),
      i = Dt(t.getCenter(), this.#i, 'EPSG:4326'),
      n = Dt([e[2], e[3]], this.#i, 'EPSG:4326'),
      r = Nn(i, n),
      o = Hd(i, n),
      a = ri(i),
      l = { geometryType: 'circle', center: i, radius: r, center3857: a, r: o },
      h = xh(i, r, 128),
      c = s.getId(),
      u = new _t(h)
    ;(u.setId(c), u.setProperties(l))
    const d = new vn().writeFeature(u, { dataProjection: 'EPSG:4326', featureProjection: this.#i }),
      f = new Pi().writeFeatureObject(u, { dataProjection: 'EPSG:4326', featureProjection: this.#i }),
      g = JSON.stringify(f)
    return { id: c, wkt: d, geojson: g, geojsonObj: f }
  }
  #D(s) {
    const { features: t, startCoordinate: e } = s
    this.dispatchEvent(this.#v(t, e))
  }
  #j(s) {
    const { features: t, startCoordinate: e, coordinate: i } = s
    this.dispatchEvent(this.#v(t, e, i))
  }
  #v(s, t, e) {
    const i = this.#n(s),
      n = Dt(t, this.#i, 'EPSG:4326'),
      r = Dt(t, this.#i, 'EPSG:3857'),
      o = { coord: n, coord3857: r }
    if (e) {
      const a = Dt(e, this.#i, 'EPSG:4326'),
        l = Dt(e, this.#i, 'EPSG:3857'),
        h = { coord: a, coord3857: l }
      return new zo(Pt.TRANSLATE_END, i, s, o, h)
    }
    return new zo(Pt.TRANSLATE_START, i, s, o)
  }
  #G(s) {
    const { className: t = 'ol-layer' } = s
    return [t, `geom-editor-layer z-index:${Ko + 1}`].join(' ')
  }
  #o(s, t) {
    const e = this.#R(s)
    e && (t ? (e.classList.remove('hidden'), e?.classList.add('selected')) : e?.classList.remove('selected'))
  }
  #u(s, t, e) {
    const i = this.#R(s)
    i && ((i.disabled = t === !1), (i.title = e))
  }
  #R(s) {
    return this.toolBarContainer?.querySelector(`[data-type="${s}"]`)
  }
}
const sf = Yd
console.log({ version: sf }, 'zqj')
document.querySelector('.docs').innerHTML = dd
const cl = [106.675271, 26.579508]
ri(cl)
const rf = new Eu({
    target: 'ol-geom-editor-map',
    layers: [new od({ source: new ud() })],
    view: new Yt({ center: cl, zoom: 10, projection: 'EPSG:4326' }),
  }),
  of = {
    'fill-color': 'rgba(255,255,255,0.4)',
    'stroke-color': '#3399CC',
    'stroke-width': 1.25,
    'circle-radius': 50,
    'circle-fill-color': 'rgba(255,255,255,0.4)',
    'circle-stroke-width': 1.25,
    'circle-stroke-color': '#3399CC',
  },
  X = new nf(rf, { layerStyle: of })
X.on('select', s => {
  console.log({ event: s })
})
X.on('deselect', s => {
  console.log({ event: s })
  const { deselected: t } = s
  let e = new Rt({ image: new Qi({ src: '/typescript.svg', anchor: [0.5, 0.5], scale: 0.7 }) })
  t.forEach(i => {
    const n = i.getGeometry().getType()
    ;(console.log({ type: n }), n === 'Point' && i.setStyle(e))
  })
})
X.on('drawstart', s => {
  console.log({ event: s })
})
X.on('drawend', s => {
  console.log({ event: s })
})
X.on('drawBegin', s => {
  console.log({ event: s })
})
X.on('drawComplete', s => {
  console.log({ event: s })
})
X.on('translatestart', s => {
  console.log({ event: s })
})
X.on('translateend', s => {
  console.log({ event: s })
})
X.on('translateBegin', s => {
  console.log({ event: s })
})
X.on('translateComplete', s => {
  console.log({ event: s })
})
X.on('modifystart', s => {
  console.log({ event: s })
})
X.on('modifyend', s => {
  console.log({ event: s })
})
X.on('modifyBegin', s => {
  console.log({ event: s })
})
X.on('modifyComplete', s => {
  console.log({ event: s })
})
X.on('remove', s => {
  console.log({ event: s })
})
X.on('complete', s => {
  console.log({ event: s })
})
document.querySelector('#add-wkt').addEventListener('click', af)
document.querySelector('#add-JSON').addEventListener('click', lf)
document.querySelector('#add-JSONObj').addEventListener('click', hf)
document.querySelector('#remove-feature').addEventListener('click', uf)
document.querySelector('#remove-selected-features').addEventListener('click', cf)
document.querySelector('#remove-all-features').addEventListener('click', df)
document.querySelector('#select-features').addEventListener('click', ff)
document.querySelector('#deselect-features').addEventListener('click', gf)
document.querySelector('#enable-select').addEventListener('click', _f)
document.querySelector('#enable-select-single').addEventListener('click', mf)
document.querySelector('#disable-select').addEventListener('click', pf)
document.querySelector('#translate-features').addEventListener('click', yf)
document.querySelector('#disable-translate').addEventListener('click', xf)
document.querySelector('#enable-modify').addEventListener('click', Ef)
document.querySelector('#disable-modify').addEventListener('click', Cf)
document.querySelector('#select-type').addEventListener('change', Sf)
document.querySelector('#freehand').addEventListener('change', vf)
function af() {
  console.log('addWKT')
  const s = X.addFeatureFromWKT(fd, 'line1'),
    t = X.addFeatureFromWKT(gd)
  console.log({ feat1: s, feat2: t })
}
function lf() {
  console.log('addJSON')
  const s = X.addFeatureFromJSON(md)
  console.log({ f: s })
}
function hf() {
  console.log('addJSONObj')
  const s = X.addFeatureFromJSON(_d),
    t = X.addFeatureFromJSON(pd)
  console.log({ feat2: t, feat1: s })
}
function cf() {
  X.removeFeatures()
}
function uf() {
  X.removeFeatures(['line1', 'p2CQqn2lFk'])
}
function df() {
  X.removeAllFeatures().then(s => {
    console.log({ success: s })
  })
}
const Uo = 'rgba(218,228,194,0.5)',
  Zo = 'rgba(255, 204, 51, 0.9)'
function ff() {
  const s = X.select(['circle'], {
    selectedStyle: new Rt({
      fill: new qt({ color: Uo }),
      stroke: new Nt({ color: Zo, width: 4 }),
      image: new Ue({ radius: 7, fill: new qt({ color: Uo }), stroke: new Nt({ color: Zo, width: 2 }) }),
    }),
    eachFeature: (t, e) => {
      if ((console.log({ feat: t }), e === 0)) return !0
    },
  })
  console.log('selected features:', s)
}
function gf() {
  X.deselect(['line1', 'p2CQqn2lFk'])
}
function _f() {
  X.enableSelect()
}
function mf() {
  X.enableSelect({ single: !0 })
}
function pf() {
  X.disableSelect()
}
function yf() {
  X.enableTranslate()
}
function xf() {
  X.disableTranslate()
}
function Ef() {
  X.enableModify()
}
function Cf() {
  X.disableModify()
}
const wf = ['LineString', 'Polygon'],
  Tf = {
    'fill-color': 'rgba(255, 200, 200, 0.4)',
    'stroke-color': '#ff0000',
    'stroke-line-dash': [5, 10],
    'circle-radius': 6,
    'circle-fill-color': '#ff0000',
    'circle-stroke-color': 'yellow',
    'circle-stroke-width': 2,
  }
function Sf(s) {
  const t = s.target.value
  console.log('change type to:', t)
  const e = document.querySelector('#freehand'),
    i = document.querySelector('#freehand-box')
  ;(wf.includes(t)
    ? ((i.title = 'Freehand drawing for ' + t), (e.disabled = !1))
    : ((i.title = '仅线和面支持自由绘制'), (e.checked = !1), (e.disabled = !0), X.disableFreehand()),
    X.enableDraw(t, Tf))
}
function vf(s) {
  const t = s.target.checked
  ;(console.log('change freehand to:', t), t ? X.enableFreehand() : X.disableFreehand())
}
