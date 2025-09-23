;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s)
  new MutationObserver(s => {
    for (const r of s)
      if (r.type === 'childList')
        for (const o of r.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && i(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function e(s) {
    const r = {}
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    )
  }
  function i(s) {
    if (s.ep) return
    s.ep = !0
    const r = e(s)
    fetch(s.href, r)
  }
})()
const bu = {
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
let xh = class extends Error {
    constructor(t) {
      const e = bu[t]
      ;(super(e), (this.code = t), (this.name = 'AssertionError'), (this.message = e))
    }
  },
  Ze = class {
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
const Sn = { PROPERTYCHANGE: 'propertychange' }
let No = class {
  constructor() {
    this.disposed = !1
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal())
  }
  disposeInternal() {}
}
function Go(n, t) {
  return n > t ? 1 : n < t ? -1 : 0
}
function Xo(n, t, e) {
  if (n[0] <= t) return 0
  const i = n.length
  if (t <= n[i - 1]) return i - 1
  if (typeof e == 'function') {
    for (let s = 1; s < i; ++s) {
      const r = n[s]
      if (r === t) return s
      if (r < t) return e(t, n[s - 1], r) > 0 ? s - 1 : s
    }
    return i - 1
  }
  if (e > 0) {
    for (let s = 1; s < i; ++s) if (n[s] < t) return s - 1
    return i - 1
  }
  if (e < 0) {
    for (let s = 1; s < i; ++s) if (n[s] <= t) return s
    return i - 1
  }
  for (let s = 1; s < i; ++s) {
    if (n[s] == t) return s
    if (n[s] < t) return n[s - 1] - t < t - n[s] ? s - 1 : s
  }
  return i - 1
}
function Ou(n, t) {
  const e = Array.isArray(t) ? t : [t],
    i = e.length
  for (let s = 0; s < i; s++) n[n.length] = e[s]
}
function cr(n, t) {
  const e = n.length
  if (e !== t.length) return !1
  for (let i = 0; i < e; i++) if (n[i] !== t[i]) return !1
  return !0
}
function Du(n, t, e) {
  const i = t || Go
  return n.every(function (s, r) {
    if (r === 0) return !0
    const o = i(n[r - 1], s)
    return !(o > 0 || o === 0)
  })
}
function js() {
  return !0
}
function ur() {
  return !1
}
function Ws() {}
function ku(n) {
  let t = !1,
    e,
    i,
    s
  return function () {
    const r = Array.prototype.slice.call(arguments)
    return (
      (!t || this !== s || !cr(r, i)) && ((t = !0), (s = this), (i = r), (e = n.apply(this, arguments))),
      e
    )
  }
}
function dr(n) {
  for (const t in n) delete n[t]
}
function Nu(n) {
  let t
  for (t in n) return !1
  return !t
}
let zo = class extends No {
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
      s = i[t] || (i[t] = [])
    s.includes(e) || s.push(e)
  }
  dispatchEvent(t) {
    const e = typeof t == 'string',
      i = e ? t : t.type,
      s = this.listeners_ && this.listeners_[i]
    if (!s) return
    const r = e ? new Ze(t) : t
    r.target || (r.target = this.eventTarget_ || this)
    const o = this.dispatching_ || (this.dispatching_ = {}),
      a = this.pendingRemovals_ || (this.pendingRemovals_ = {})
    ;(i in o || ((o[i] = 0), (a[i] = 0)), ++o[i])
    let l
    for (let h = 0, c = s.length; h < c; ++h)
      if (
        ('handleEvent' in s[h] ? (l = s[h].handleEvent(r)) : (l = s[h].call(this, r)),
        l === !1 || r.propagationStopped)
      ) {
        l = !1
        break
      }
    if (--o[i] === 0) {
      let h = a[i]
      for (delete a[i]; h--; ) this.removeEventListener(i, Ws)
      delete o[i]
    }
    return l
  }
  disposeInternal() {
    this.listeners_ && dr(this.listeners_)
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
      const s = i.indexOf(e)
      s !== -1 &&
        (this.pendingRemovals_ && t in this.pendingRemovals_
          ? ((i[s] = Ws), ++this.pendingRemovals_[t])
          : (i.splice(s, 1), i.length === 0 && delete this.listeners_[t]))
    }
  }
}
const G = {
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
function U(n, t, e, i, s) {
  if ((i && i !== n && (e = e.bind(i)), s)) {
    const o = e
    e = function () {
      ;(n.removeEventListener(t, e), o.apply(this, arguments))
    }
  }
  const r = { target: n, type: t, listener: e }
  return (n.addEventListener(t, e), r)
}
function Ys(n, t, e, i) {
  return U(n, t, e, i, !0)
}
function it(n) {
  n && n.target && (n.target.removeEventListener(n.type, n.listener), dr(n))
}
let jn = class extends zo {
  constructor() {
    ;(super(),
      (this.on = this.onInternal),
      (this.once = this.onceInternal),
      (this.un = this.unInternal),
      (this.revision_ = 0))
  }
  changed() {
    ;(++this.revision_, this.dispatchEvent(G.CHANGE))
  }
  getRevision() {
    return this.revision_
  }
  onInternal(t, e) {
    if (Array.isArray(t)) {
      const i = t.length,
        s = new Array(i)
      for (let r = 0; r < i; ++r) s[r] = U(this, t[r], e)
      return s
    }
    return U(this, t, e)
  }
  onceInternal(t, e) {
    let i
    if (Array.isArray(t)) {
      const s = t.length
      i = new Array(s)
      for (let r = 0; r < s; ++r) i[r] = Ys(this, t[r], e)
    } else i = Ys(this, t, e)
    return ((e.ol_key = i), i)
  }
  unInternal(t, e) {
    const i = e.ol_key
    if (i) Gu(i)
    else if (Array.isArray(t)) for (let s = 0, r = t.length; s < r; ++s) this.removeEventListener(t[s], e)
    else this.removeEventListener(t, e)
  }
}
jn.prototype.on
jn.prototype.once
jn.prototype.un
function Gu(n) {
  if (Array.isArray(n)) for (let t = 0, e = n.length; t < e; ++t) it(n[t])
  else it(n)
}
function z() {
  throw new Error('Unimplemented abstract method.')
}
let Xu = 0
function Tt(n) {
  return n.ol_uid || (n.ol_uid = String(++Xu))
}
let za = class extends Ze {
    constructor(t, e, i) {
      ;(super(t), (this.key = e), (this.oldValue = i))
    }
  },
  Re = class extends jn {
    constructor(t) {
      ;(super(),
        this.on,
        this.once,
        this.un,
        Tt(this),
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
        this.hasListener(i) && this.dispatchEvent(new za(i, t, e)),
        (i = Sn.PROPERTYCHANGE),
        this.hasListener(i) && this.dispatchEvent(new za(i, t, e)))
    }
    addChangeListener(t, e) {
      this.addEventListener(`change:${t}`, e)
    }
    removeChangeListener(t, e) {
      this.removeEventListener(`change:${t}`, e)
    }
    set(t, e, i) {
      const s = this.values_ || (this.values_ = {})
      if (i) s[t] = e
      else {
        const r = s[t]
        ;((s[t] = e), r !== e && this.notify(t, r))
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
        ;(delete this.values_[t], Nu(this.values_) && (this.values_ = null), e || this.notify(t, i))
      }
    }
  }
const Xt = { ADD: 'add', REMOVE: 'remove' },
  ja = { LENGTH: 'length' }
let ls = class extends Ze {
    constructor(t, e, i) {
      ;(super(t), (this.element = e), (this.index = i))
    }
  },
  me = class extends Re {
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
        for (let i = 0, s = this.array_.length; i < s; ++i) this.assertUnique_(this.array_[i], i)
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
      for (let i = 0, s = e.length; i < s; ++i) t(e[i], i, e)
    }
    getArray() {
      return this.array_
    }
    item(t) {
      return this.array_[t]
    }
    getLength() {
      return this.get(ja.LENGTH)
    }
    insertAt(t, e) {
      if (t < 0 || t > this.getLength()) throw new Error('Index out of bounds: ' + t)
      ;(this.unique_ && this.assertUnique_(e),
        this.array_.splice(t, 0, e),
        this.updateLength_(),
        this.dispatchEvent(new ls(Xt.ADD, e, t)))
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
      for (let i = 0, s = e.length; i < s; ++i) if (e[i] === t) return this.removeAt(i)
    }
    removeAt(t) {
      if (t < 0 || t >= this.getLength()) return
      const e = this.array_[t]
      return (this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(new ls(Xt.REMOVE, e, t)), e)
    }
    setAt(t, e) {
      const i = this.getLength()
      if (t >= i) {
        this.insertAt(t, e)
        return
      }
      if (t < 0) throw new Error('Index out of bounds: ' + t)
      this.unique_ && this.assertUnique_(e, t)
      const s = this.array_[t]
      ;((this.array_[t] = e),
        this.dispatchEvent(new ls(Xt.REMOVE, s, t)),
        this.dispatchEvent(new ls(Xt.ADD, e, t)))
    }
    updateLength_() {
      this.set(ja.LENGTH, this.array_.length)
    }
    assertUnique_(t, e) {
      for (let i = 0, s = this.array_.length; i < s; ++i)
        if (this.array_[i] === t && i !== e) throw new xh(58)
    }
  }
function $(n, t) {
  if (!n) throw new xh(t)
}
const je =
    typeof navigator < 'u' && typeof navigator.userAgent < 'u' ? navigator.userAgent.toLowerCase() : '',
  zu = je.includes('firefox'),
  ju = je.includes('safari') && !je.includes('chrom')
ju && (je.includes('version/15.4') || /cpu (os|iphone os) 15_4 like mac os x/.test(je))
const Wu = je.includes('webkit') && !je.includes('edge'),
  Eh = je.includes('macintosh'),
  Ch = typeof devicePixelRatio < 'u' ? devicePixelRatio : 1,
  Rh = typeof WorkerGlobalScope < 'u' && typeof OffscreenCanvas < 'u' && self instanceof WorkerGlobalScope,
  Yu = typeof Image < 'u' && Image.prototype.decode,
  Th = (function () {
    let n = !1
    try {
      const t = Object.defineProperty({}, 'passive', {
        get: function () {
          n = !0
        },
      })
      ;(window.addEventListener('_', null, t), window.removeEventListener('_', null, t))
    } catch {}
    return n
  })()
new Array(6)
function Yi() {
  return [1, 0, 0, 1, 0, 0]
}
function kt(n, t) {
  const e = t[0],
    i = t[1]
  return ((t[0] = n[0] * e + n[2] * i + n[4]), (t[1] = n[1] * e + n[3] * i + n[5]), t)
}
function vn(n, t, e, i, s, r, o, a) {
  const l = Math.sin(r),
    h = Math.cos(r)
  return (
    (n[0] = i * h),
    (n[1] = s * l),
    (n[2] = -i * l),
    (n[3] = s * h),
    (n[4] = o * i * h - a * i * l + t),
    (n[5] = o * s * l + a * s * h + e),
    n
  )
}
function wh(n, t) {
  const e = Bu(t)
  $(e !== 0, 32)
  const i = t[0],
    s = t[1],
    r = t[2],
    o = t[3],
    a = t[4],
    l = t[5]
  return (
    (n[0] = o / e),
    (n[1] = -s / e),
    (n[2] = -r / e),
    (n[3] = i / e),
    (n[4] = (r * l - o * a) / e),
    (n[5] = -(i * l - s * a) / e),
    n
  )
}
function Bu(n) {
  return n[0] * n[3] - n[1] * n[2]
}
let Wa
function Vu(n) {
  const t = 'matrix(' + n.join(', ') + ')'
  if (Rh) return t
  const e = Wa || (Wa = document.createElement('div'))
  return ((e.style.transform = t), e.style.transform)
}
const ht = { UNKNOWN: 0, INTERSECTING: 1, ABOVE: 2, RIGHT: 4, BELOW: 8, LEFT: 16 }
function Ya(n) {
  const t = di()
  for (let e = 0, i = n.length; e < i; ++e) Ds(t, n[e])
  return t
}
function Uu(n, t) {
  return t ? ((t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t) : n.slice()
}
function Sh(n, t, e) {
  let i, s
  return (
    t < n[0] ? (i = n[0] - t) : n[2] < t ? (i = t - n[2]) : (i = 0),
    e < n[1] ? (s = n[1] - e) : n[3] < e ? (s = e - n[3]) : (s = 0),
    i * i + s * s
  )
}
function jo(n, t) {
  return vh(n, t[0], t[1])
}
function Zu(n, t) {
  return n[0] <= t[0] && t[2] <= n[2] && n[1] <= t[1] && t[3] <= n[3]
}
function vh(n, t, e) {
  return n[0] <= t && t <= n[2] && n[1] <= e && e <= n[3]
}
function Ba(n, t) {
  const e = n[0],
    i = n[1],
    s = n[2],
    r = n[3],
    o = t[0],
    a = t[1]
  let l = ht.UNKNOWN
  return (
    o < e ? (l = l | ht.LEFT) : o > s && (l = l | ht.RIGHT),
    a < i ? (l = l | ht.BELOW) : a > r && (l = l | ht.ABOVE),
    l === ht.UNKNOWN && (l = ht.INTERSECTING),
    l
  )
}
function di() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0]
}
function Wn(n, t, e, i, s) {
  return s ? ((s[0] = n), (s[1] = t), (s[2] = e), (s[3] = i), s) : [n, t, e, i]
}
function fr(n) {
  return Wn(1 / 0, 1 / 0, -1 / 0, -1 / 0, n)
}
function Ku(n, t) {
  const e = n[0],
    i = n[1]
  return Wn(e, i, e, i, t)
}
function $u(n, t, e, i, s) {
  const r = fr(s)
  return Ih(r, n, t, e, i)
}
function ro(n, t) {
  return n[0] == t[0] && n[2] == t[2] && n[1] == t[1] && n[3] == t[3]
}
function Hu(n, t) {
  return (
    t[0] < n[0] && (n[0] = t[0]),
    t[2] > n[2] && (n[2] = t[2]),
    t[1] < n[1] && (n[1] = t[1]),
    t[3] > n[3] && (n[3] = t[3]),
    n
  )
}
function Ds(n, t) {
  ;(t[0] < n[0] && (n[0] = t[0]),
    t[0] > n[2] && (n[2] = t[0]),
    t[1] < n[1] && (n[1] = t[1]),
    t[1] > n[3] && (n[3] = t[1]))
}
function Ih(n, t, e, i, s) {
  for (; e < i; e += s) qu(n, t[e], t[e + 1])
  return n
}
function qu(n, t, e) {
  ;((n[0] = Math.min(n[0], t)),
    (n[1] = Math.min(n[1], e)),
    (n[2] = Math.max(n[2], t)),
    (n[3] = Math.max(n[3], e)))
}
function Mh(n, t) {
  let e
  return ((e = t(gr(n))), e || ((e = t(_r(n))), e) || ((e = t(mr(n))), e) || ((e = t(fi(n))), e) ? e : !1)
}
function oo(n) {
  let t = 0
  return (yr(n) || (t = ot(n) * oe(n)), t)
}
function gr(n) {
  return [n[0], n[1]]
}
function _r(n) {
  return [n[2], n[1]]
}
function In(n) {
  return [(n[0] + n[2]) / 2, (n[1] + n[3]) / 2]
}
function Ju(n, t) {
  let e
  return (
    t === 'bottom-left'
      ? (e = gr(n))
      : t === 'bottom-right'
        ? (e = _r(n))
        : t === 'top-left'
          ? (e = fi(n))
          : t === 'top-right'
            ? (e = mr(n))
            : $(!1, 13),
    e
  )
}
function ao(n, t, e, i, s) {
  const [r, o, a, l, h, c, u, d] = lo(n, t, e, i)
  return Wn(Math.min(r, a, h, u), Math.min(o, l, c, d), Math.max(r, a, h, u), Math.max(o, l, c, d), s)
}
function lo(n, t, e, i) {
  const s = (t * i[0]) / 2,
    r = (t * i[1]) / 2,
    o = Math.cos(e),
    a = Math.sin(e),
    l = s * o,
    h = s * a,
    c = r * o,
    u = r * a,
    d = n[0],
    f = n[1]
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
function oe(n) {
  return n[3] - n[1]
}
function Rn(n, t, e) {
  const i = e || di()
  return (
    Yn(n, t)
      ? (n[0] > t[0] ? (i[0] = n[0]) : (i[0] = t[0]),
        n[1] > t[1] ? (i[1] = n[1]) : (i[1] = t[1]),
        n[2] < t[2] ? (i[2] = n[2]) : (i[2] = t[2]),
        n[3] < t[3] ? (i[3] = n[3]) : (i[3] = t[3]))
      : fr(i),
    i
  )
}
function fi(n) {
  return [n[0], n[3]]
}
function mr(n) {
  return [n[2], n[3]]
}
function ot(n) {
  return n[2] - n[0]
}
function Yn(n, t) {
  return n[0] <= t[2] && n[2] >= t[0] && n[1] <= t[3] && n[3] >= t[1]
}
function yr(n) {
  return n[2] < n[0] || n[3] < n[1]
}
function Qu(n, t) {
  return t ? ((t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t) : n
}
function td(n, t, e) {
  let i = !1
  const s = Ba(n, t),
    r = Ba(n, e)
  if (s === ht.INTERSECTING || r === ht.INTERSECTING) i = !0
  else {
    const o = n[0],
      a = n[1],
      l = n[2],
      h = n[3],
      c = t[0],
      u = t[1],
      d = e[0],
      f = e[1],
      g = (f - u) / (d - c)
    let _, m
    ;(r & ht.ABOVE && !(s & ht.ABOVE) && ((_ = d - (f - h) / g), (i = _ >= o && _ <= l)),
      !i && r & ht.RIGHT && !(s & ht.RIGHT) && ((m = f - (d - l) * g), (i = m >= a && m <= h)),
      !i && r & ht.BELOW && !(s & ht.BELOW) && ((_ = d - (f - a) / g), (i = _ >= o && _ <= l)),
      !i && r & ht.LEFT && !(s & ht.LEFT) && ((m = f - (d - o) * g), (i = m >= a && m <= h)))
  }
  return i
}
const Wo = {
  radians: 6370997 / (2 * Math.PI),
  degrees: (2 * Math.PI * 6370997) / 360,
  ft: 0.3048,
  m: 1,
  'us-ft': 1200 / 3937,
}
let Ph = class {
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
    return this.metersPerUnit_ || Wo[this.units_]
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
const Bn = 6378137,
  ki = Math.PI * Bn,
  ed = [-ki, -ki, ki, ki],
  id = [-180, -85, 180, 85],
  hs = Bn * Math.log(Math.tan(Math.PI / 2))
let Ri = class extends Ph {
  constructor(t) {
    super({
      code: t,
      units: 'm',
      extent: ed,
      global: !0,
      worldExtent: id,
      getPointResolution: function (e, i) {
        return e / Math.cosh(i[1] / Bn)
      },
    })
  }
}
const Va = [
  new Ri('EPSG:3857'),
  new Ri('EPSG:102100'),
  new Ri('EPSG:102113'),
  new Ri('EPSG:900913'),
  new Ri('http://www.opengis.net/def/crs/EPSG/0/3857'),
  new Ri('http://www.opengis.net/gml/srs/epsg.xml#3857'),
]
function nd(n, t, e) {
  const i = n.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = n.slice()) : (t = new Array(i))))
  for (let s = 0; s < i; s += e) {
    t[s] = (ki * n[s]) / 180
    let r = Bn * Math.log(Math.tan((Math.PI * (+n[s + 1] + 90)) / 360))
    ;(r > hs ? (r = hs) : r < -hs && (r = -hs), (t[s + 1] = r))
  }
  return t
}
function sd(n, t, e) {
  const i = n.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = n.slice()) : (t = new Array(i))))
  for (let s = 0; s < i; s += e)
    ((t[s] = (180 * n[s]) / ki), (t[s + 1] = (360 * Math.atan(Math.exp(n[s + 1] / Bn))) / Math.PI - 90))
  return t
}
const rd = 6378137,
  Ua = [-180, -90, 180, 90],
  od = (Math.PI * rd) / 180
let He = class extends Ph {
  constructor(t, e) {
    super({
      code: t,
      units: 'degrees',
      extent: Ua,
      axisOrientation: e,
      global: !0,
      metersPerUnit: od,
      worldExtent: Ua,
    })
  }
}
const Za = [
  new He('CRS:84'),
  new He('EPSG:4326', 'neu'),
  new He('urn:ogc:def:crs:OGC:1.3:CRS84'),
  new He('urn:ogc:def:crs:OGC:2:84'),
  new He('http://www.opengis.net/def/crs/OGC/1.3/CRS84'),
  new He('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
  new He('http://www.opengis.net/def/crs/EPSG/0/4326', 'neu'),
]
let ho = {}
function ad(n) {
  return ho[n] || ho[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] || null
}
function ld(n, t) {
  ho[n] = t
}
let Bi = {}
function Bs(n, t, e) {
  const i = n.getCode(),
    s = t.getCode()
  ;(i in Bi || (Bi[i] = {}), (Bi[i][s] = e))
}
function hd(n, t) {
  let e
  return (n in Bi && t in Bi[n] && (e = Bi[n][t]), e)
}
function at(n, t, e) {
  return Math.min(Math.max(n, t), e)
}
function cd(n, t, e, i, s, r) {
  const o = s - e,
    a = r - i
  if (o !== 0 || a !== 0) {
    const l = ((n - e) * o + (t - i) * a) / (o * o + a * a)
    l > 1 ? ((e = s), (i = r)) : l > 0 && ((e += o * l), (i += a * l))
  }
  return Vi(n, t, e, i)
}
function Vi(n, t, e, i) {
  const s = e - n,
    r = i - t
  return s * s + r * r
}
function ud(n) {
  const t = n.length
  for (let i = 0; i < t; i++) {
    let s = i,
      r = Math.abs(n[i][i])
    for (let a = i + 1; a < t; a++) {
      const l = Math.abs(n[a][i])
      l > r && ((r = l), (s = a))
    }
    if (r === 0) return null
    const o = n[s]
    ;((n[s] = n[i]), (n[i] = o))
    for (let a = i + 1; a < t; a++) {
      const l = -n[a][i] / n[i][i]
      for (let h = i; h < t + 1; h++) i == h ? (n[a][h] = 0) : (n[a][h] += l * n[i][h])
    }
  }
  const e = new Array(t)
  for (let i = t - 1; i >= 0; i--) {
    e[i] = n[i][t] / n[i][i]
    for (let s = i - 1; s >= 0; s--) n[s][t] -= n[s][i] * e[i]
  }
  return e
}
function ks(n) {
  return (n * Math.PI) / 180
}
function Ui(n, t) {
  const e = n % t
  return e * t < 0 ? e + t : e
}
function dd(n, t, e) {
  return n + e * (t - n)
}
function Lh(n, t) {
  const e = Math.pow(10, t)
  return Math.round(n * e) / e
}
function cs(n, t) {
  return Math.floor(Lh(n, t))
}
function us(n, t) {
  return Math.ceil(Lh(n, t))
}
function fd(n, t) {
  return ((n[0] += +t[0]), (n[1] += +t[1]), n)
}
function Vs(n, t) {
  let e = !0
  for (let i = n.length - 1; i >= 0; --i)
    if (n[i] != t[i]) {
      e = !1
      break
    }
  return e
}
function Yo(n, t) {
  const e = Math.cos(t),
    i = Math.sin(t),
    s = n[0] * e - n[1] * i,
    r = n[1] * e + n[0] * i
  return ((n[0] = s), (n[1] = r), n)
}
function gd(n, t) {
  return ((n[0] *= t), (n[1] *= t), n)
}
function _d(n, t) {
  if (t.canWrapX()) {
    const e = ot(t.getExtent()),
      i = md(n, t, e)
    i && (n[0] -= i * e)
  }
  return n
}
function md(n, t, e) {
  const i = t.getExtent()
  let s = 0
  return (
    t.canWrapX() && (n[0] < i[0] || n[0] > i[2]) && ((e = e || ot(i)), (s = Math.floor((n[0] - i[0]) / e))),
    s
  )
}
const yd = 63710088e-1
function Ka(n, t, e) {
  e = e || yd
  const i = ks(n[1]),
    s = ks(t[1]),
    r = (s - i) / 2,
    o = ks(t[0] - n[0]) / 2,
    a = Math.sin(r) * Math.sin(r) + Math.sin(o) * Math.sin(o) * Math.cos(i) * Math.cos(s)
  return 2 * e * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
function Ah(...n) {
  console.warn(...n)
}
let co = !0
function Fh(n) {
  co = !1
}
function Bo(n, t) {
  if (t !== void 0) {
    for (let e = 0, i = n.length; e < i; ++e) t[e] = n[e]
    t = t
  } else t = n.slice()
  return t
}
function bh(n, t) {
  if (t !== void 0 && n !== t) {
    for (let e = 0, i = n.length; e < i; ++e) t[e] = n[e]
    n = t
  }
  return n
}
function pd(n) {
  ;(ld(n.getCode(), n), Bs(n, n, Bo))
}
function xd(n) {
  n.forEach(pd)
}
function Ht(n) {
  return typeof n == 'string' ? ad(n) : n || null
}
function $a(n, t, e, i) {
  n = Ht(n)
  let s
  const r = n.getPointResolutionFunc()
  if (r) s = r(t, e)
  else {
    const o = n.getUnits()
    if ((o == 'degrees' && !i) || i == 'degrees') s = t
    else {
      const a = Uo(n, Ht('EPSG:4326'))
      if (a === bh && o !== 'degrees') s = t * n.getMetersPerUnit()
      else {
        let h = [e[0] - t / 2, e[1], e[0] + t / 2, e[1], e[0], e[1] - t / 2, e[0], e[1] + t / 2]
        h = a(h, h, 2)
        const c = Ka(h.slice(0, 2), h.slice(2, 4)),
          u = Ka(h.slice(4, 6), h.slice(6, 8))
        s = (c + u) / 2
      }
      const l = n.getMetersPerUnit()
      l !== void 0 && (s /= l)
    }
  }
  return s
}
function Ha(n) {
  ;(xd(n),
    n.forEach(function (t) {
      n.forEach(function (e) {
        t !== e && Bs(t, e, Bo)
      })
    }))
}
function Ed(n, t, e, i) {
  n.forEach(function (s) {
    t.forEach(function (r) {
      ;(Bs(s, r, e), Bs(r, s, i))
    })
  })
}
function Vo(n, t) {
  return n ? (typeof n == 'string' ? Ht(n) : n) : Ht(t)
}
function Cd(n, t) {
  return (Fh(), Oh(n, 'EPSG:4326', 'EPSG:3857'))
}
function Li(n, t) {
  if (n === t) return !0
  const e = n.getUnits() === t.getUnits()
  return (n.getCode() === t.getCode() || Uo(n, t) === Bo) && e
}
function Uo(n, t) {
  const e = n.getCode(),
    i = t.getCode()
  let s = hd(e, i)
  return (s || (s = bh), s)
}
function Us(n, t) {
  const e = Ht(n),
    i = Ht(t)
  return Uo(e, i)
}
function Oh(n, t, e) {
  return Us(t, e)(n, void 0, n.length)
}
function uo(n, t) {
  return n
}
function _e(n, t) {
  return (
    co &&
      !Vs(n, [0, 0]) &&
      n[0] >= -180 &&
      n[0] <= 180 &&
      n[1] >= -90 &&
      n[1] <= 90 &&
      ((co = !1),
      Ah('Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.')),
    n
  )
}
function Rd(n, t) {
  return n
}
function Ni(n, t) {
  return n
}
function Td() {
  ;(Ha(Va), Ha(Za), Ed(Za, Va, nd, sd))
}
Td()
function wd(n, t, e, i, s, r) {
  r = r || []
  let o = 0
  for (let a = t; a < e; a += i) {
    const l = n[a],
      h = n[a + 1]
    ;((r[o++] = s[0] * l + s[2] * h + s[4]), (r[o++] = s[1] * l + s[3] * h + s[5]))
  }
  return (r && r.length != o && (r.length = o), r)
}
function Sd(n, t, e, i, s, r, o) {
  o = o || []
  const a = Math.cos(s),
    l = Math.sin(s),
    h = r[0],
    c = r[1]
  let u = 0
  for (let d = t; d < e; d += i) {
    const f = n[d] - h,
      g = n[d + 1] - c
    ;((o[u++] = h + f * a - g * l), (o[u++] = c + f * l + g * a))
    for (let _ = d + 2; _ < d + i; ++_) o[u++] = n[_]
  }
  return (o && o.length != u && (o.length = u), o)
}
function vd(n, t, e, i, s, r, o, a) {
  a = a || []
  const l = o[0],
    h = o[1]
  let c = 0
  for (let u = t; u < e; u += i) {
    const d = n[u] - l,
      f = n[u + 1] - h
    ;((a[c++] = l + s * d), (a[c++] = h + r * f))
    for (let g = u + 2; g < u + i; ++g) a[c++] = n[g]
  }
  return (a && a.length != c && (a.length = c), a)
}
function Id(n, t, e, i, s, r, o) {
  o = o || []
  let a = 0
  for (let l = t; l < e; l += i) {
    ;((o[a++] = n[l] + s), (o[a++] = n[l + 1] + r))
    for (let h = l + 2; h < l + i; ++h) o[a++] = n[h]
  }
  return (o && o.length != a && (o.length = a), o)
}
const qa = Yi()
let Md = class extends Re {
    constructor() {
      ;(super(),
        (this.extent_ = di()),
        (this.extentRevision_ = -1),
        (this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = 0),
        (this.simplifyTransformedInternal = ku(function (t, e, i) {
          if (!i) return this.getSimplifiedGeometry(e)
          const s = this.clone()
          return (s.applyTransform(i), s.getSimplifiedGeometry(e))
        })))
    }
    simplifyTransformed(t, e) {
      return this.simplifyTransformedInternal(this.getRevision(), t, e)
    }
    clone() {
      return z()
    }
    closestPointXY(t, e, i, s) {
      return z()
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
      return z()
    }
    getExtent(t) {
      if (this.extentRevision_ != this.getRevision()) {
        const e = this.computeExtent(this.extent_)
        ;((isNaN(e[0]) || isNaN(e[1])) && fr(e), (this.extentRevision_ = this.getRevision()))
      }
      return Qu(this.extent_, t)
    }
    rotate(t, e) {
      z()
    }
    scale(t, e, i) {
      z()
    }
    simplify(t) {
      return this.getSimplifiedGeometry(t * t)
    }
    getSimplifiedGeometry(t) {
      return z()
    }
    getType() {
      return z()
    }
    applyTransform(t) {
      z()
    }
    intersectsExtent(t) {
      return z()
    }
    translate(t, e) {
      z()
    }
    transform(t, e) {
      const i = Ht(t),
        s =
          i.getUnits() == 'tile-pixels'
            ? function (r, o, a) {
                const l = i.getExtent(),
                  h = i.getWorldExtent(),
                  c = oe(h) / oe(l)
                return (vn(qa, h[0], h[3], c, -c, 0, 0, 0), wd(r, 0, r.length, a, qa, o), Us(i, e)(r, o, a))
              }
            : Us(i, e)
      return (this.applyTransform(s), this)
    }
  },
  Zo = class extends Md {
    constructor() {
      ;(super(), (this.layout = 'XY'), (this.stride = 2), (this.flatCoordinates = null))
    }
    computeExtent(t) {
      return $u(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
    }
    getCoordinates() {
      return z()
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
      ;((this.stride = Ja(t)), (this.layout = t), (this.flatCoordinates = e))
    }
    setCoordinates(t, e) {
      z()
    }
    setLayout(t, e, i) {
      let s
      if (t) s = Ja(t)
      else {
        for (let r = 0; r < i; ++r) {
          if (e.length === 0) {
            ;((this.layout = 'XY'), (this.stride = 2))
            return
          }
          e = e[0]
        }
        ;((s = e.length), (t = Pd(s)))
      }
      ;((this.layout = t), (this.stride = s))
    }
    applyTransform(t) {
      this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed())
    }
    rotate(t, e) {
      const i = this.getFlatCoordinates()
      if (i) {
        const s = this.getStride()
        ;(Sd(i, 0, i.length, s, t, e, i), this.changed())
      }
    }
    scale(t, e, i) {
      ;(e === void 0 && (e = t), i || (i = In(this.getExtent())))
      const s = this.getFlatCoordinates()
      if (s) {
        const r = this.getStride()
        ;(vd(s, 0, s.length, r, t, e, i, s), this.changed())
      }
    }
    translate(t, e) {
      const i = this.getFlatCoordinates()
      if (i) {
        const s = this.getStride()
        ;(Id(i, 0, i.length, s, t, e, i), this.changed())
      }
    }
  }
function Pd(n) {
  let t
  return (n == 2 ? (t = 'XY') : n == 3 ? (t = 'XYZ') : n == 4 && (t = 'XYZM'), t)
}
function Ja(n) {
  let t
  return (n == 'XY' ? (t = 2) : n == 'XYZ' || n == 'XYM' ? (t = 3) : n == 'XYZM' && (t = 4), t)
}
function Qa(n, t, e, i, s, r, o) {
  const a = n[t],
    l = n[t + 1],
    h = n[e] - a,
    c = n[e + 1] - l
  let u
  if (h === 0 && c === 0) u = t
  else {
    const d = ((s - a) * h + (r - l) * c) / (h * h + c * c)
    if (d > 1) u = e
    else if (d > 0) {
      for (let f = 0; f < i; ++f) o[f] = dd(n[t + f], n[e + f], d)
      o.length = i
      return
    } else u = t
  }
  for (let d = 0; d < i; ++d) o[d] = n[u + d]
  o.length = i
}
function Dh(n, t, e, i, s) {
  let r = n[t],
    o = n[t + 1]
  for (t += i; t < e; t += i) {
    const a = n[t],
      l = n[t + 1],
      h = Vi(r, o, a, l)
    ;(h > s && (s = h), (r = a), (o = l))
  }
  return s
}
function Ld(n, t, e, i, s) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((s = Dh(n, t, a, i, s)), (t = a))
  }
  return s
}
function kh(n, t, e, i, s, r, o, a, l, h, c) {
  if (t == e) return h
  let u, d
  if (s === 0) {
    if (((d = Vi(o, a, n[t], n[t + 1])), d < h)) {
      for (u = 0; u < i; ++u) l[u] = n[t + u]
      return ((l.length = i), d)
    }
    return h
  }
  c = c || [NaN, NaN]
  let f = t + i
  for (; f < e; )
    if ((Qa(n, f - i, f, i, o, a, c), (d = Vi(o, a, c[0], c[1])), d < h)) {
      for (h = d, u = 0; u < i; ++u) l[u] = c[u]
      ;((l.length = i), (f += i))
    } else f += i * Math.max(((Math.sqrt(d) - Math.sqrt(h)) / s) | 0, 1)
  if ((Qa(n, e - i, t, i, o, a, c), (d = Vi(o, a, c[0], c[1])), d < h)) {
    for (h = d, u = 0; u < i; ++u) l[u] = c[u]
    l.length = i
  }
  return h
}
function Ad(n, t, e, i, s, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = kh(n, t, f, i, s, r, o, a, l, h, c)), (t = f))
  }
  return h
}
function Fd(n, t, e, i) {
  for (let s = 0, r = e.length; s < r; ++s) n[t++] = e[s]
  return t
}
function Nh(n, t, e, i) {
  for (let s = 0, r = e.length; s < r; ++s) {
    const o = e[s]
    for (let a = 0; a < i; ++a) n[t++] = o[a]
  }
  return t
}
function bd(n, t, e, i, s) {
  s = s || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = Nh(n, t, e[o], i)
    ;((s[r++] = l), (t = l))
  }
  return ((s.length = r), s)
}
function Od(n, t, e, i, s, r, o) {
  const a = (e - t) / i
  if (a < 3) {
    for (; t < e; t += i) ((r[o++] = n[t]), (r[o++] = n[t + 1]))
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
    const g = n[d],
      _ = n[d + 1],
      m = n[u],
      y = n[u + 1]
    for (let p = d + i; p < u; p += i) {
      const x = n[p],
        E = n[p + 1],
        C = cd(x, E, g, _, m, y)
      C > f && ((c = p), (f = C))
    }
    f > s && ((l[(c - t) / i] = 1), d + i < c && h.push(d, c), c + i < u && h.push(c, u))
  }
  for (let u = 0; u < a; ++u) l[u] && ((r[o++] = n[t + u * i]), (r[o++] = n[t + u * i + 1]))
  return o
}
function Ti(n, t) {
  return t * Math.round(n / t)
}
function Dd(n, t, e, i, s, r, o) {
  if (t == e) return o
  let a = Ti(n[t], s),
    l = Ti(n[t + 1], s)
  ;((t += i), (r[o++] = a), (r[o++] = l))
  let h, c
  do if (((h = Ti(n[t], s)), (c = Ti(n[t + 1], s)), (t += i), t == e)) return ((r[o++] = h), (r[o++] = c), o)
  while (h == a && c == l)
  for (; t < e; ) {
    const u = Ti(n[t], s),
      d = Ti(n[t + 1], s)
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
function kd(n, t, e, i, s, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = Dd(n, t, c, i, s, r, o)), a.push(o), (t = c))
  }
  return o
}
function Gh(n, t, e, i, s) {
  s = s !== void 0 ? s : []
  let r = 0
  for (let o = t; o < e; o += i) s[r++] = n.slice(o, o + i)
  return ((s.length = r), s)
}
function Nd(n, t, e, i, s) {
  s = s !== void 0 ? s : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((s[r++] = Gh(n, t, l, i, s[r])), (t = l))
  }
  return ((s.length = r), s)
}
function Xh(n, t, e, i) {
  let s = 0,
    r = n[e - i],
    o = n[e - i + 1]
  for (; t < e; t += i) {
    const a = n[t],
      l = n[t + 1]
    ;((s += o * a - r * l), (r = a), (o = l))
  }
  return s / 2
}
function Gd(n, t, e, i) {
  let s = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((s += Xh(n, t, a, i)), (t = a))
  }
  return s
}
let tl = class fo extends Zo {
    constructor(t, e) {
      ;(super(),
        (this.maxDelta_ = -1),
        (this.maxDeltaRevision_ = -1),
        e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
    }
    clone() {
      return new fo(this.flatCoordinates.slice(), this.layout)
    }
    closestPointXY(t, e, i, s) {
      return s < Sh(this.getExtent(), t, e)
        ? s
        : (this.maxDeltaRevision_ != this.getRevision() &&
            ((this.maxDelta_ = Math.sqrt(
              Dh(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0),
            )),
            (this.maxDeltaRevision_ = this.getRevision())),
          kh(
            this.flatCoordinates,
            0,
            this.flatCoordinates.length,
            this.stride,
            this.maxDelta_,
            !0,
            t,
            e,
            i,
            s,
          ))
    }
    getArea() {
      return Xh(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
    }
    getCoordinates() {
      return Gh(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
    }
    getSimplifiedGeometryInternal(t) {
      const e = []
      return (
        (e.length = Od(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0)),
        new fo(e, 'XY')
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
        (this.flatCoordinates.length = Nh(this.flatCoordinates, 0, t, this.stride)),
        this.changed())
    }
  },
  Xd = class zh extends Zo {
    constructor(t, e) {
      ;(super(), this.setCoordinates(t, e))
    }
    clone() {
      const t = new zh(this.flatCoordinates.slice(), this.layout)
      return (t.applyProperties(this), t)
    }
    closestPointXY(t, e, i, s) {
      const r = this.flatCoordinates,
        o = Vi(t, e, r[0], r[1])
      if (o < s) {
        const a = this.stride
        for (let l = 0; l < a; ++l) i[l] = r[l]
        return ((i.length = a), o)
      }
      return s
    }
    getCoordinates() {
      return this.flatCoordinates ? this.flatCoordinates.slice() : []
    }
    computeExtent(t) {
      return Ku(this.flatCoordinates, t)
    }
    getType() {
      return 'Point'
    }
    intersectsExtent(t) {
      return vh(t, this.flatCoordinates[0], this.flatCoordinates[1])
    }
    setCoordinates(t, e) {
      ;(this.setLayout(e, t, 0),
        this.flatCoordinates || (this.flatCoordinates = []),
        (this.flatCoordinates.length = Fd(this.flatCoordinates, 0, t, this.stride)),
        this.changed())
    }
  }
function zd(n, t, e, i, s) {
  return !Mh(s, function (o) {
    return !ii(n, t, e, i, o[0], o[1])
  })
}
function ii(n, t, e, i, s, r) {
  let o = 0,
    a = n[e - i],
    l = n[e - i + 1]
  for (; t < e; t += i) {
    const h = n[t],
      c = n[t + 1]
    ;(l <= r
      ? c > r && (h - a) * (r - l) - (s - a) * (c - l) > 0 && o++
      : c <= r && (h - a) * (r - l) - (s - a) * (c - l) < 0 && o--,
      (a = h),
      (l = c))
  }
  return o !== 0
}
function jh(n, t, e, i, s, r) {
  if (e.length === 0 || !ii(n, t, e[0], i, s, r)) return !1
  for (let o = 1, a = e.length; o < a; ++o) if (ii(n, e[o - 1], e[o], i, s, r)) return !1
  return !0
}
function jd(n, t, e, i, s, r, o) {
  let a, l, h, c, u, d, f
  const g = s[r + 1],
    _ = []
  for (let p = 0, x = e.length; p < x; ++p) {
    const E = e[p]
    for (c = n[E - i], d = n[E - i + 1], a = t; a < E; a += i)
      ((u = n[a]),
        (f = n[a + 1]),
        ((g <= d && f <= g) || (d <= g && g <= f)) && ((h = ((g - d) / (f - d)) * (u - c) + c), _.push(h)),
        (c = u),
        (d = f))
  }
  let m = NaN,
    y = -1 / 0
  for (_.sort(Go), c = _[0], a = 1, l = _.length; a < l; ++a) {
    u = _[a]
    const p = Math.abs(u - c)
    ;(p > y && ((h = (c + u) / 2), jh(n, t, e, i, h, g) && ((m = h), (y = p))), (c = u))
  }
  return (isNaN(m) && (m = s[r]), [m, g, y])
}
function Wd(n, t, e, i, s) {
  let r
  for (t += i; t < e; t += i) if (((r = s(n.slice(t - i, t), n.slice(t, t + i))), r)) return r
  return !1
}
function Wh(n, t, e, i, s) {
  const r = Ih(di(), n, t, e, i)
  return Yn(s, r)
    ? Zu(s, r) || (r[0] >= s[0] && r[2] <= s[2]) || (r[1] >= s[1] && r[3] <= s[3])
      ? !0
      : Wd(n, t, e, i, function (o, a) {
          return td(s, o, a)
        })
    : !1
}
function Yh(n, t, e, i, s) {
  return !!(
    Wh(n, t, e, i, s) ||
    ii(n, t, e, i, s[0], s[1]) ||
    ii(n, t, e, i, s[0], s[3]) ||
    ii(n, t, e, i, s[2], s[1]) ||
    ii(n, t, e, i, s[2], s[3])
  )
}
function Yd(n, t, e, i, s) {
  if (!Yh(n, t, e[0], i, s)) return !1
  if (e.length === 1) return !0
  for (let r = 1, o = e.length; r < o; ++r)
    if (zd(n, e[r - 1], e[r], i, s) && !Wh(n, e[r - 1], e[r], i, s)) return !1
  return !0
}
function Bd(n, t, e, i) {
  for (; t < e - i; ) {
    for (let s = 0; s < i; ++s) {
      const r = n[t + s]
      ;((n[t + s] = n[e - i + s]), (n[e - i + s] = r))
    }
    ;((t += i), (e -= i))
  }
}
function Bh(n, t, e, i) {
  let s = 0,
    r = n[e - i],
    o = n[e - i + 1]
  for (; t < e; t += i) {
    const a = n[t],
      l = n[t + 1]
    ;((s += (a - r) * (l + o)), (r = a), (o = l))
  }
  return s === 0 ? void 0 : s > 0
}
function Vd(n, t, e, i, s) {
  s = s !== void 0 ? s : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = Bh(n, t, a, i)
    if (r === 0) {
      if ((s && l) || (!s && !l)) return !1
    } else if ((s && !l) || (!s && l)) return !1
    t = a
  }
  return !0
}
function el(n, t, e, i, s) {
  s = s !== void 0 ? s : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = Bh(n, t, a, i)
    ;((r === 0 ? (s && l) || (!s && !l) : (s && !l) || (!s && l)) && Bd(n, t, a, i), (t = a))
  }
  return t
}
let Vh = class go extends Zo {
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
      ? Ou(this.flatCoordinates, t.getFlatCoordinates())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed())
  }
  clone() {
    const t = new go(this.flatCoordinates.slice(), this.layout, this.ends_.slice())
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, s) {
    return s < Sh(this.getExtent(), t, e)
      ? s
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(Ld(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Ad(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, i, s))
  }
  containsXY(t, e) {
    return jh(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, e)
  }
  getArea() {
    return Gd(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride)
  }
  getCoordinates(t) {
    let e
    return (
      t !== void 0
        ? ((e = this.getOrientedFlatCoordinates().slice()), el(e, 0, this.ends_, this.stride, t))
        : (e = this.flatCoordinates),
      Nd(e, 0, this.ends_, this.stride)
    )
  }
  getEnds() {
    return this.ends_
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const t = In(this.getExtent())
      ;((this.flatInteriorPoint_ = jd(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, 0)),
        (this.flatInteriorPointRevision_ = this.getRevision()))
    }
    return this.flatInteriorPoint_
  }
  getInteriorPoint() {
    return new Xd(this.getFlatInteriorPoint(), 'XYM')
  }
  getLinearRingCount() {
    return this.ends_.length
  }
  getLinearRing(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new tl(this.flatCoordinates.slice(t === 0 ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout)
  }
  getLinearRings() {
    const t = this.layout,
      e = this.flatCoordinates,
      i = this.ends_,
      s = []
    let r = 0
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o],
        h = new tl(e.slice(r, l), t)
      ;(s.push(h), (r = l))
    }
    return s
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates
      ;(Vd(t, 0, this.ends_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = el(
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
      (e.length = kd(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t), e, 0, i)),
      new go(e, 'XY', i)
    )
  }
  getType() {
    return 'Polygon'
  }
  intersectsExtent(t) {
    return Yd(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []))
    const i = bd(this.flatCoordinates, 0, t, this.stride, this.ends_)
    ;((this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1]), this.changed())
  }
}
function il(n) {
  if (yr(n)) throw new Error('Cannot create polygon from empty extent')
  const t = n[0],
    e = n[1],
    i = n[2],
    s = n[3],
    r = [t, e, t, s, i, s, i, e, t, e]
  return new Vh(r, 'XY', [r.length])
}
const Xe = {
  PRERENDER: 'prerender',
  POSTRENDER: 'postrender',
  PRECOMPOSE: 'precompose',
  POSTCOMPOSE: 'postcompose',
  RENDERCOMPLETE: 'rendercomplete',
}
let nl = class Uh {
    constructor(t) {
      ;((t = t || {}), (this.color_ = t.color !== void 0 ? t.color : null))
    }
    clone() {
      const t = this.getColor()
      return new Uh({ color: Array.isArray(t) ? t.slice() : t || void 0 })
    }
    getColor() {
      return this.color_
    }
    setColor(t) {
      this.color_ = t
    }
  },
  sl = class Zh {
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
      return new Zh({
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
const Qe = { IDLE: 0, LOADED: 2, ERROR: 3 }
function rl(n) {
  return n[0] > 0 && n[1] > 0
}
function Ud(n, t, e) {
  return (e === void 0 && (e = [0, 0]), (e[0] = (n[0] * t + 0.5) | 0), (e[1] = (n[1] * t + 0.5) | 0), e)
}
function ie(n, t) {
  return Array.isArray(n) ? n : (t === void 0 ? (t = [n, n]) : ((t[0] = n), (t[1] = n)), t)
}
let Zd = class Kh {
  constructor(t) {
    ;((this.opacity_ = t.opacity),
      (this.rotateWithView_ = t.rotateWithView),
      (this.rotation_ = t.rotation),
      (this.scale_ = t.scale),
      (this.scaleArray_ = ie(t.scale)),
      (this.displacement_ = t.displacement),
      (this.declutterMode_ = t.declutterMode))
  }
  clone() {
    const t = this.getScale()
    return new Kh({
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
    return z()
  }
  getImage(t) {
    return z()
  }
  getHitDetectionImage() {
    return z()
  }
  getPixelRatio(t) {
    return 1
  }
  getImageState() {
    return z()
  }
  getImageSize() {
    return z()
  }
  getOrigin() {
    return z()
  }
  getSize() {
    return z()
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
    ;((this.scale_ = t), (this.scaleArray_ = ie(t)))
  }
  listenImageChange(t) {
    z()
  }
  load() {
    z()
  }
  unlistenImageChange(t) {
    z()
  }
}
const Kd = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,
  $d = /^([a-z]*)$|^hsla?\(.*\)$/i
function Hd(n) {
  return typeof n == 'string' ? n : $h(n)
}
function qd(n) {
  const t = document.createElement('div')
  if (((t.style.color = n), t.style.color !== '')) {
    document.body.appendChild(t)
    const e = getComputedStyle(t).color
    return (document.body.removeChild(t), e)
  }
  return ''
}
const Jd = (function () {
  const t = {}
  let e = 0
  return function (i) {
    let s
    if (t.hasOwnProperty(i)) s = t[i]
    else {
      if (e >= 1024) {
        let r = 0
        for (const o in t) (r++ & 3) === 0 && (delete t[o], --e)
      }
      ;((s = Qd(i)), (t[i] = s), ++e)
    }
    return s
  }
})()
function _o(n) {
  return Array.isArray(n) ? n : Jd(n)
}
function Qd(n) {
  let t, e, i, s, r
  if (($d.exec(n) && (n = qd(n)), Kd.exec(n))) {
    const o = n.length - 1
    let a
    o <= 4 ? (a = 1) : (a = 2)
    const l = o === 4 || o === 8
    ;((t = parseInt(n.substr(1 + 0 * a, a), 16)),
      (e = parseInt(n.substr(1 + 1 * a, a), 16)),
      (i = parseInt(n.substr(1 + 2 * a, a), 16)),
      l ? (s = parseInt(n.substr(1 + 3 * a, a), 16)) : (s = 255),
      a == 1 && ((t = (t << 4) + t), (e = (e << 4) + e), (i = (i << 4) + i), l && (s = (s << 4) + s)),
      (r = [t, e, i, s / 255]))
  } else
    n.startsWith('rgba(')
      ? ((r = n.slice(5, -1).split(',').map(Number)), ol(r))
      : n.startsWith('rgb(')
        ? ((r = n.slice(4, -1).split(',').map(Number)), r.push(1), ol(r))
        : $(!1, 14)
  return r
}
function ol(n) {
  return (
    (n[0] = at((n[0] + 0.5) | 0, 0, 255)),
    (n[1] = at((n[1] + 0.5) | 0, 0, 255)),
    (n[2] = at((n[2] + 0.5) | 0, 0, 255)),
    (n[3] = at(n[3], 0, 1)),
    n
  )
}
function $h(n) {
  let t = n[0]
  t != (t | 0) && (t = (t + 0.5) | 0)
  let e = n[1]
  e != (e | 0) && (e = (e + 0.5) | 0)
  let i = n[2]
  i != (i | 0) && (i = (i + 0.5) | 0)
  const s = n[3] === void 0 ? 1 : Math.round(n[3] * 100) / 100
  return 'rgba(' + t + ',' + e + ',' + i + ',' + s + ')'
}
function al(n) {
  return Array.isArray(n) ? $h(n) : n
}
function We(n, t, e, i) {
  let s
  return (
    e && e.length
      ? (s = e.shift())
      : Rh
        ? (s = new OffscreenCanvas(n || 300, t || 300))
        : (s = document.createElement('canvas')),
    n && (s.width = n),
    t && (s.height = t),
    s.getContext('2d', i)
  )
}
function Ko(n) {
  const t = n.canvas
  ;((t.width = 1), (t.height = 1), n.clearRect(0, 0, 1, 1))
}
function ll(n, t) {
  const e = t.parentNode
  e && e.replaceChild(n, t)
}
function mo(n) {
  return n && n.parentNode ? n.parentNode.removeChild(n) : null
}
function tf(n) {
  for (; n.lastChild; ) n.removeChild(n.lastChild)
}
function ef(n, t) {
  const e = n.childNodes
  for (let i = 0; ; ++i) {
    const s = e[i],
      r = t[i]
    if (!s && !r) break
    if (s !== r) {
      if (!s) {
        n.appendChild(r)
        continue
      }
      if (!r) {
        ;(n.removeChild(s), --i)
        continue
      }
      n.insertBefore(r, s)
    }
  }
}
const ds = 'ol-hidden',
  pr = 'ol-unselectable',
  $o = 'ol-control',
  hl = 'ol-collapsed',
  cl = '#000',
  ul = 'round',
  nf = 10,
  sf = '#000',
  rf = 1,
  of = new Re()
let af = class Hh extends Zd {
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
        e = new Hh({
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
          s = We(i.size * t, i.size * t)
        ;(this.draw_(i, s, t), (e = s.canvas), (this.canvas_[t] = e))
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
      return Qe.LOADED
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
      let s = this.radius_,
        r = this.radius2_ === void 0 ? s : this.radius2_
      if (s < r) {
        const T = s
        ;((s = r), (r = T))
      }
      const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2,
        a = (2 * Math.PI) / o,
        l = r * Math.sin(a),
        h = Math.sqrt(r * r - l * l),
        c = s - h,
        u = Math.sqrt(l * l + c * c),
        d = u / l
      if (t === 'miter' && d <= i) return d * e
      const f = e / 2 / d,
        g = (e / 2) * (c / u),
        m = Math.sqrt((s + f) * (s + f) + g * g) - s
      if (this.radius2_ === void 0 || t === 'bevel') return m * 2
      const y = s * Math.sin(a),
        p = Math.sqrt(s * s - y * y),
        x = r - p,
        C = Math.sqrt(y * y + x * x) / y
      if (C <= i) {
        const T = (C * e) / 2 - r - s
        return 2 * Math.max(m, T)
      }
      return m * 2
    }
    createRenderOptions() {
      let t = ul,
        e = 0,
        i = null,
        s = 0,
        r,
        o = 0
      this.stroke_ &&
        ((r = this.stroke_.getColor()),
        r === null && (r = sf),
        (r = al(r)),
        (o = this.stroke_.getWidth()),
        o === void 0 && (o = rf),
        (i = this.stroke_.getLineDash()),
        (s = this.stroke_.getLineDashOffset()),
        (t = this.stroke_.getLineJoin()),
        t === void 0 && (t = ul),
        (e = this.stroke_.getMiterLimit()),
        e === void 0 && (e = nf))
      const a = this.calculateLineJoinSize_(t, o, e),
        l = Math.max(this.radius_, this.radius2_ || 0),
        h = Math.ceil(2 * l + a)
      return {
        strokeStyle: r,
        strokeWidth: o,
        size: h,
        lineDash: i,
        lineDashOffset: s,
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
        let s = this.fill_.getColor()
        ;(s === null && (s = cl), (e.fillStyle = al(s)), e.fill())
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
          (typeof e == 'string' && (e = _o(e)),
          e === null ? (i = 1) : Array.isArray(e) && (i = e.length === 4 ? e[3] : 1),
          i === 0)
        ) {
          const s = We(t.size, t.size)
          ;((this.hitDetectionCanvas_ = s.canvas), this.drawHitDetectionCanvas_(t, s))
        }
      }
      this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.getImage(1))
    }
    createPath_(t) {
      let e = this.points_
      const i = this.radius_
      if (e === 1 / 0) t.arc(0, 0, i, 0, 2 * Math.PI)
      else {
        const s = this.radius2_ === void 0 ? i : this.radius2_
        this.radius2_ !== void 0 && (e *= 2)
        const r = this.angle_ - Math.PI / 2,
          o = (2 * Math.PI) / e
        for (let a = 0; a < e; a++) {
          const l = r + a * o,
            h = a % 2 === 0 ? i : s
          t.lineTo(h * Math.cos(l), h * Math.sin(l))
        }
        t.closePath()
      }
    }
    drawHitDetectionCanvas_(t, e) {
      ;(e.translate(t.size / 2, t.size / 2),
        this.createPath_(e),
        (e.fillStyle = cl),
        e.fill(),
        this.stroke_ &&
          ((e.strokeStyle = t.strokeStyle),
          (e.lineWidth = t.strokeWidth),
          t.lineDash && (e.setLineDash(t.lineDash), (e.lineDashOffset = t.lineDashOffset)),
          (e.lineJoin = t.lineJoin),
          (e.miterLimit = t.miterLimit),
          e.stroke()))
    }
  },
  lf = class qh extends af {
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
        e = new qh({
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
  },
  hf = class Jh {
    constructor(t) {
      ;((t = t || {}),
        (this.geometry_ = null),
        (this.geometryFunction_ = dl),
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
        new Jh({
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
            : (this.geometryFunction_ = dl),
        (this.geometry_ = t))
    }
    setZIndex(t) {
      this.zIndex_ = t
    }
  }
function dl(n) {
  return n.getGeometry()
}
const B = {
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
let Qh = class extends Re {
  constructor(t) {
    ;(super(), this.on, this.once, this.un, (this.background_ = t.background))
    const e = Object.assign({}, t)
    ;(typeof t.properties == 'object' && (delete e.properties, Object.assign(e, t.properties)),
      (e[B.OPACITY] = t.opacity !== void 0 ? t.opacity : 1),
      $(typeof e[B.OPACITY] == 'number', 64),
      (e[B.VISIBLE] = t.visible !== void 0 ? t.visible : !0),
      (e[B.Z_INDEX] = t.zIndex),
      (e[B.MAX_RESOLUTION] = t.maxResolution !== void 0 ? t.maxResolution : 1 / 0),
      (e[B.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0),
      (e[B.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0),
      (e[B.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0),
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
      (e.opacity = at(Math.round(this.getOpacity() * 100) / 100, 0, 1)),
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
    return z()
  }
  getLayerStatesArray(t) {
    return z()
  }
  getExtent() {
    return this.get(B.EXTENT)
  }
  getMaxResolution() {
    return this.get(B.MAX_RESOLUTION)
  }
  getMinResolution() {
    return this.get(B.MIN_RESOLUTION)
  }
  getMinZoom() {
    return this.get(B.MIN_ZOOM)
  }
  getMaxZoom() {
    return this.get(B.MAX_ZOOM)
  }
  getOpacity() {
    return this.get(B.OPACITY)
  }
  getSourceState() {
    return z()
  }
  getVisible() {
    return this.get(B.VISIBLE)
  }
  getZIndex() {
    return this.get(B.Z_INDEX)
  }
  setBackground(t) {
    ;((this.background_ = t), this.changed())
  }
  setExtent(t) {
    this.set(B.EXTENT, t)
  }
  setMaxResolution(t) {
    this.set(B.MAX_RESOLUTION, t)
  }
  setMinResolution(t) {
    this.set(B.MIN_RESOLUTION, t)
  }
  setMaxZoom(t) {
    this.set(B.MAX_ZOOM, t)
  }
  setMinZoom(t) {
    this.set(B.MIN_ZOOM, t)
  }
  setOpacity(t) {
    ;($(typeof t == 'number', 64), this.set(B.OPACITY, t))
  }
  setVisible(t) {
    this.set(B.VISIBLE, t)
  }
  setZIndex(t) {
    this.set(B.Z_INDEX, t)
  }
  disposeInternal() {
    ;(this.state_ && ((this.state_.layer = null), (this.state_ = null)), super.disposeInternal())
  }
}
const Nt = { ANIMATING: 0, INTERACTING: 1 },
  Vt = { CENTER: 'center', RESOLUTION: 'resolution', ROTATION: 'rotation' },
  cf = 42,
  Ho = 256
function fl(n, t, e) {
  return function (i, s, r, o, a) {
    if (!i) return
    if (!s && !t) return i
    const l = t ? 0 : r[0] * s,
      h = t ? 0 : r[1] * s,
      c = a ? a[0] : 0,
      u = a ? a[1] : 0
    let d = n[0] + l / 2 + c,
      f = n[2] - l / 2 + c,
      g = n[1] + h / 2 + u,
      _ = n[3] - h / 2 + u
    ;(d > f && ((d = (f + d) / 2), (f = d)), g > _ && ((g = (_ + g) / 2), (_ = g)))
    let m = at(i[0], d, f),
      y = at(i[1], g, _)
    if (o && e && s) {
      const p = 30 * s
      ;((m += -p * Math.log(1 + Math.max(0, d - i[0]) / p) + p * Math.log(1 + Math.max(0, i[0] - f) / p)),
        (y += -p * Math.log(1 + Math.max(0, g - i[1]) / p) + p * Math.log(1 + Math.max(0, i[1] - _) / p)))
    }
    return [m, y]
  }
}
function uf(n) {
  return n
}
function qo(n, t, e, i) {
  const s = ot(t) / e[0],
    r = oe(t) / e[1]
  return i ? Math.min(n, Math.max(s, r)) : Math.min(n, Math.min(s, r))
}
function Jo(n, t, e) {
  let i = Math.min(n, t)
  const s = 50
  return (
    (i *= Math.log(1 + s * Math.max(0, n / t - 1)) / s + 1),
    e && ((i = Math.max(i, e)), (i /= Math.log(1 + s * Math.max(0, e / n - 1)) / s + 1)),
    at(i, e / 2, t * 2)
  )
}
function df(n, t, e, i) {
  return (
    (t = t !== void 0 ? t : !0),
    function (s, r, o, a) {
      if (s !== void 0) {
        const l = n[0],
          h = n[n.length - 1],
          c = e ? qo(l, e, o, i) : l
        if (a) return t ? Jo(s, c, h) : at(s, h, c)
        const u = Math.min(c, s),
          d = Math.floor(Xo(n, u, r))
        return n[d] > c && d < n.length - 1 ? n[d + 1] : n[d]
      }
    }
  )
}
function ff(n, t, e, i, s, r) {
  return (
    (i = i !== void 0 ? i : !0),
    (e = e !== void 0 ? e : 0),
    function (o, a, l, h) {
      if (o !== void 0) {
        const c = s ? qo(t, s, l, r) : t
        if (h) return i ? Jo(o, c, e) : at(o, e, c)
        const u = 1e-9,
          d = Math.ceil(Math.log(t / c) / Math.log(n) - u),
          f = -a * (0.5 - u) + 0.5,
          g = Math.min(c, o),
          _ = Math.floor(Math.log(t / g) / Math.log(n) + f),
          m = Math.max(d, _),
          y = t / Math.pow(n, m)
        return at(y, e, c)
      }
    }
  )
}
function gl(n, t, e, i, s) {
  return (
    (e = e !== void 0 ? e : !0),
    function (r, o, a, l) {
      if (r !== void 0) {
        const h = i ? qo(n, i, a, s) : n
        return !e || !l ? at(r, t, h) : Jo(r, h, t)
      }
    }
  )
}
function Qo(n) {
  if (n !== void 0) return 0
}
function _l(n) {
  if (n !== void 0) return n
}
function gf(n) {
  const t = (2 * Math.PI) / n
  return function (e, i) {
    if (i) return e
    if (e !== void 0) return ((e = Math.floor(e / t + 0.5) * t), e)
  }
}
function _f(n) {
  return (
    (n = n || ks(5)),
    function (t, e) {
      if (e) return t
      if (t !== void 0) return Math.abs(t) <= n ? 0 : t
    }
  )
}
function tc(n) {
  return Math.pow(n, 3)
}
function on(n) {
  return 1 - tc(1 - n)
}
function mf(n) {
  return 3 * n * n - 2 * n * n * n
}
function yf(n) {
  return n
}
const Fr = 0
let te = class extends Re {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      (t = Object.assign({}, t)),
      (this.hints_ = [0, 0]),
      (this.animations_ = []),
      this.updateAnimationKey_,
      (this.projection_ = Vo(t.projection, 'EPSG:3857')),
      (this.viewportSize_ = [100, 100]),
      (this.targetCenter_ = null),
      this.targetResolution_,
      this.targetRotation_,
      (this.nextCenter_ = null),
      this.nextResolution_,
      this.nextRotation_,
      (this.cancelAnchor_ = void 0),
      t.projection && Fh(),
      t.center && (t.center = _e(t.center, this.projection_)),
      t.extent && (t.extent = Ni(t.extent, this.projection_)),
      this.applyOptions_(t))
  }
  applyOptions_(t) {
    const e = Object.assign({}, t)
    for (const a in Vt) delete e[a]
    this.setProperties(e, !0)
    const i = xf(t)
    ;((this.maxResolution_ = i.maxResolution),
      (this.minResolution_ = i.minResolution),
      (this.zoomFactor_ = i.zoomFactor),
      (this.resolutions_ = t.resolutions),
      (this.padding_ = t.padding),
      (this.minZoom_ = i.minZoom))
    const s = pf(t),
      r = i.constraint,
      o = Ef(t)
    ;((this.constraints_ = { center: s, resolution: r, rotation: o }),
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
      const s = t || [0, 0, 0, 0]
      e = e || [0, 0, 0, 0]
      const r = this.getResolution(),
        o = (r / 2) * (s[3] - e[3] + e[1] - s[1]),
        a = (r / 2) * (s[0] - e[0] + e[2] - s[2])
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
      let s = arguments[i]
      ;(s.center && ((s = Object.assign({}, s)), (s.center = _e(s.center, this.getProjection()))),
        s.anchor && ((s = Object.assign({}, s)), (s.anchor = _e(s.anchor, this.getProjection()))),
        (e[i] = s))
    }
    this.animateInternal.apply(this, e)
  }
  animateInternal(t) {
    let e = arguments.length,
      i
    e > 1 && typeof arguments[e - 1] == 'function' && ((i = arguments[e - 1]), --e)
    let s = 0
    for (; s < e && !this.isDef(); ++s) {
      const c = arguments[s]
      ;(c.center && this.setCenterInternal(c.center),
        c.zoom !== void 0 ? this.setZoom(c.zoom) : c.resolution && this.setResolution(c.resolution),
        c.rotation !== void 0 && this.setRotation(c.rotation))
    }
    if (s === e) {
      i && fs(i, !0)
      return
    }
    let r = Date.now(),
      o = this.targetCenter_.slice(),
      a = this.targetResolution_,
      l = this.targetRotation_
    const h = []
    for (; s < e; ++s) {
      const c = arguments[s],
        u = {
          start: r,
          complete: !1,
          anchor: c.anchor,
          duration: c.duration !== void 0 ? c.duration : 1e3,
          easing: c.easing || mf,
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
        const d = Ui(c.rotation - l + Math.PI, 2 * Math.PI) - Math.PI
        ;((u.targetRotation = l + d), (l = u.targetRotation))
      }
      ;(Cf(u) ? (u.complete = !0) : (r += u.duration), h.push(u))
    }
    ;(this.animations_.push(h), this.setHint(Nt.ANIMATING, 1), this.updateAnimations_())
  }
  getAnimating() {
    return this.hints_[Nt.ANIMATING] > 0
  }
  getInteracting() {
    return this.hints_[Nt.INTERACTING] > 0
  }
  cancelAnimations() {
    this.setHint(Nt.ANIMATING, -this.hints_[Nt.ANIMATING])
    let t
    for (let e = 0, i = this.animations_.length; e < i; ++e) {
      const s = this.animations_[e]
      if ((s[0].callback && fs(s[0].callback, !1), !t))
        for (let r = 0, o = s.length; r < o; ++r) {
          const a = s[r]
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
      const s = this.animations_[i]
      let r = !0
      for (let o = 0, a = s.length; o < a; ++o) {
        const l = s[o]
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
            y = f + u * (_ - f)
          this.targetCenter_ = [m, y]
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
              ? Ui(l.targetRotation + Math.PI, 2 * Math.PI) - Math.PI
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
          this.setHint(Nt.ANIMATING, -1),
          (this.nextCenter_ = null),
          (this.nextResolution_ = NaN),
          (this.nextRotation_ = NaN))
        const o = s[0].callback
        o && fs(o, !0)
      }
    }
    ;((this.animations_ = this.animations_.filter(Boolean)),
      e &&
        this.updateAnimationKey_ === void 0 &&
        (this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this))))
  }
  calculateCenterRotate(t, e) {
    let i
    const s = this.getCenterInternal()
    return (s !== void 0 && ((i = [s[0] - e[0], s[1] - e[1]]), Yo(i, t - this.getRotation()), fd(i, e)), i)
  }
  calculateCenterZoom(t, e) {
    let i
    const s = this.getCenterInternal(),
      r = this.getResolution()
    if (s !== void 0 && r !== void 0) {
      const o = e[0] - (t * (e[0] - s[0])) / r,
        a = e[1] - (t * (e[1] - s[1])) / r
      i = [o, a]
    }
    return i
  }
  getViewportSize_(t) {
    const e = this.viewportSize_
    if (t) {
      const i = e[0],
        s = e[1]
      return [
        Math.abs(i * Math.cos(t)) + Math.abs(s * Math.sin(t)),
        Math.abs(i * Math.sin(t)) + Math.abs(s * Math.cos(t)),
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
    return t && uo(t, this.getProjection())
  }
  getCenterInternal() {
    return this.get(Vt.CENTER)
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
    return Rd(e, this.getProjection())
  }
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_()
    const e = this.getCenterInternal()
    $(e, 1)
    const i = this.getResolution()
    $(i !== void 0, 2)
    const s = this.getRotation()
    return ($(s !== void 0, 3), ao(e, i, s, t))
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
    return this.get(Vt.RESOLUTION)
  }
  getResolutions() {
    return this.resolutions_
  }
  getResolutionForExtent(t, e) {
    return this.getResolutionForExtentInternal(Ni(t, this.getProjection()), e)
  }
  getResolutionForExtentInternal(t, e) {
    e = e || this.getViewportSizeMinusPadding_()
    const i = ot(t) / e[0],
      s = oe(t) / e[1]
    return Math.max(i, s)
  }
  getResolutionForValueFunction(t) {
    t = t || 2
    const e = this.getConstrainedResolution(this.maxResolution_),
      i = this.minResolution_,
      s = Math.log(e / i) / Math.log(t)
    return function (r) {
      return e / Math.pow(t, r * s)
    }
  }
  getRotation() {
    return this.get(Vt.ROTATION)
  }
  getValueForResolutionFunction(t) {
    const e = Math.log(t || 2),
      i = this.getConstrainedResolution(this.maxResolution_),
      s = this.minResolution_,
      r = Math.log(i / s) / e
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
    let s = this.getCenterInternal()
    const r = this.padding_
    if (r) {
      const o = this.getViewportSizeMinusPadding_()
      s = br(s, this.getViewportSize_(), [o[0] / 2 + r[3], o[1] / 2 + r[0]], e, i)
    }
    return {
      center: s.slice(0),
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
      s
    if (this.resolutions_) {
      const r = Xo(this.resolutions_, t, 1)
      ;((e = r),
        (i = this.resolutions_[r]),
        r == this.resolutions_.length - 1 ? (s = 2) : (s = i / this.resolutions_[r + 1]))
    } else ((i = this.maxResolution_), (s = this.zoomFactor_))
    return e + Math.log(i / t) / Math.log(s)
  }
  getResolutionForZoom(t) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1) return 0
      const e = at(Math.floor(t), 0, this.resolutions_.length - 2),
        i = this.resolutions_[e] / this.resolutions_[e + 1]
      return this.resolutions_[e] / Math.pow(i, at(t - e, 0, 1))
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_)
  }
  fit(t, e) {
    let i
    if (($(Array.isArray(t) || typeof t.getSimplifiedGeometry == 'function', 24), Array.isArray(t))) {
      $(!yr(t), 25)
      const s = Ni(t, this.getProjection())
      i = il(s)
    } else if (t.getType() === 'Circle') {
      const s = Ni(t.getExtent(), this.getProjection())
      ;((i = il(s)), i.rotate(this.getRotation(), In(s)))
    } else i = t
    this.fitInternal(i, e)
  }
  rotatedExtentForGeometry(t) {
    const e = this.getRotation(),
      i = Math.cos(e),
      s = Math.sin(-e),
      r = t.getFlatCoordinates(),
      o = t.getStride()
    let a = 1 / 0,
      l = 1 / 0,
      h = -1 / 0,
      c = -1 / 0
    for (let u = 0, d = r.length; u < d; u += o) {
      const f = r[u] * i - r[u + 1] * s,
        g = r[u] * s + r[u + 1] * i
      ;((a = Math.min(a, f)), (l = Math.min(l, g)), (h = Math.max(h, f)), (c = Math.max(c, g)))
    }
    return [a, l, h, c]
  }
  fitInternal(t, e) {
    e = e || {}
    let i = e.size
    i || (i = this.getViewportSizeMinusPadding_())
    const s = e.padding !== void 0 ? e.padding : [0, 0, 0, 0],
      r = e.nearest !== void 0 ? e.nearest : !1
    let o
    e.minResolution !== void 0
      ? (o = e.minResolution)
      : e.maxZoom !== void 0
        ? (o = this.getResolutionForZoom(e.maxZoom))
        : (o = 0)
    const a = this.rotatedExtentForGeometry(t)
    let l = this.getResolutionForExtentInternal(a, [i[0] - s[1] - s[3], i[1] - s[0] - s[2]])
    ;((l = isNaN(l) ? o : Math.max(l, o)), (l = this.getConstrainedResolution(l, r ? 0 : 1)))
    const h = this.getRotation(),
      c = Math.sin(h),
      u = Math.cos(h),
      d = In(a)
    ;((d[0] += ((s[1] - s[3]) / 2) * l), (d[1] += ((s[0] - s[2]) / 2) * l))
    const f = d[0] * u - d[1] * c,
      g = d[1] * u + d[0] * c,
      _ = this.getConstrainedCenter([f, g], l),
      m = e.callback ? e.callback : Ws
    e.duration !== void 0
      ? this.animateInternal({ resolution: l, center: _, duration: e.duration, easing: e.easing }, m)
      : ((this.targetResolution_ = l), (this.targetCenter_ = _), this.applyTargetState_(!1, !0), fs(m, !0))
  }
  centerOn(t, e, i) {
    this.centerOnInternal(_e(t, this.getProjection()), e, i)
  }
  centerOnInternal(t, e, i) {
    this.setCenterInternal(br(t, e, i, this.getResolution(), this.getRotation()))
  }
  calculateCenterShift(t, e, i, s) {
    let r
    const o = this.padding_
    if (o && t) {
      const a = this.getViewportSizeMinusPadding_(-i),
        l = br(t, s, [a[0] / 2 + o[3], a[1] / 2 + o[0]], e, i)
      r = [t[0] - l[0], t[1] - l[1]]
    }
    return r
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0
  }
  adjustCenter(t) {
    const e = uo(this.targetCenter_, this.getProjection())
    this.setCenter([e[0] + t[0], e[1] + t[1]])
  }
  adjustCenterInternal(t) {
    const e = this.targetCenter_
    this.setCenterInternal([e[0] + t[0], e[1] + t[1]])
  }
  adjustResolution(t, e) {
    ;((e = e && _e(e, this.getProjection())), this.adjustResolutionInternal(t, e))
  }
  adjustResolutionInternal(t, e) {
    const i = this.getAnimating() || this.getInteracting(),
      s = this.getViewportSize_(this.getRotation()),
      r = this.constraints_.resolution(this.targetResolution_ * t, 0, s, i)
    ;(e && (this.targetCenter_ = this.calculateCenterZoom(r, e)),
      (this.targetResolution_ *= t),
      this.applyTargetState_())
  }
  adjustZoom(t, e) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -t), e)
  }
  adjustRotation(t, e) {
    ;(e && (e = _e(e, this.getProjection())), this.adjustRotationInternal(t, e))
  }
  adjustRotationInternal(t, e) {
    const i = this.getAnimating() || this.getInteracting(),
      s = this.constraints_.rotation(this.targetRotation_ + t, i)
    ;(e && (this.targetCenter_ = this.calculateCenterRotate(s, e)),
      (this.targetRotation_ += t),
      this.applyTargetState_())
  }
  setCenter(t) {
    this.setCenterInternal(t && _e(t, this.getProjection()))
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
      s = this.constraints_.rotation(this.targetRotation_, i),
      r = this.getViewportSize_(s),
      o = this.constraints_.resolution(this.targetResolution_, 0, r, i),
      a = this.constraints_.center(
        this.targetCenter_,
        o,
        r,
        i,
        this.calculateCenterShift(this.targetCenter_, o, s, r),
      )
    ;(this.get(Vt.ROTATION) !== s && this.set(Vt.ROTATION, s),
      this.get(Vt.RESOLUTION) !== o && (this.set(Vt.RESOLUTION, o), this.set('zoom', this.getZoom(), !0)),
      (!a || !this.get(Vt.CENTER) || !Vs(this.get(Vt.CENTER), a)) && this.set(Vt.CENTER, a),
      this.getAnimating() && !t && this.cancelAnimations(),
      (this.cancelAnchor_ = void 0))
  }
  resolveConstraints(t, e, i) {
    t = t !== void 0 ? t : 200
    const s = e || 0,
      r = this.constraints_.rotation(this.targetRotation_),
      o = this.getViewportSize_(r),
      a = this.constraints_.resolution(this.targetResolution_, s, o),
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
        !Vs(this.getCenterInternal(), l)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({ rotation: r, center: l, resolution: a, duration: t, easing: on, anchor: i })))
  }
  beginInteraction() {
    ;(this.resolveConstraints(0), this.setHint(Nt.INTERACTING, 1))
  }
  endInteraction(t, e, i) {
    ;((i = i && _e(i, this.getProjection())), this.endInteractionInternal(t, e, i))
  }
  endInteractionInternal(t, e, i) {
    this.getInteracting() && (this.setHint(Nt.INTERACTING, -1), this.resolveConstraints(t, e, i))
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
function fs(n, t) {
  setTimeout(function () {
    n(t)
  }, 0)
}
function pf(n) {
  if (n.extent !== void 0) {
    const e = n.smoothExtentConstraint !== void 0 ? n.smoothExtentConstraint : !0
    return fl(n.extent, n.constrainOnlyCenter, e)
  }
  const t = Vo(n.projection, 'EPSG:3857')
  if (n.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice()
    return ((e[0] = -1 / 0), (e[2] = 1 / 0), fl(e, !1, !1))
  }
  return uf
}
function xf(n) {
  let t,
    e,
    i,
    o = n.minZoom !== void 0 ? n.minZoom : Fr,
    a = n.maxZoom !== void 0 ? n.maxZoom : 28
  const l = n.zoomFactor !== void 0 ? n.zoomFactor : 2,
    h = n.multiWorld !== void 0 ? n.multiWorld : !1,
    c = n.smoothResolutionConstraint !== void 0 ? n.smoothResolutionConstraint : !0,
    u = n.showFullExtent !== void 0 ? n.showFullExtent : !1,
    d = Vo(n.projection, 'EPSG:3857'),
    f = d.getExtent()
  let g = n.constrainOnlyCenter,
    _ = n.extent
  if ((!h && !_ && d.isGlobal() && ((g = !1), (_ = f)), n.resolutions !== void 0)) {
    const m = n.resolutions
    ;((e = m[o]),
      (i = m[a] !== void 0 ? m[a] : m[m.length - 1]),
      n.constrainResolution ? (t = df(m, c, !g && _, u)) : (t = gl(e, i, c, !g && _, u)))
  } else {
    const y = (f ? Math.max(ot(f), oe(f)) : (360 * Wo.degrees) / d.getMetersPerUnit()) / Ho / Math.pow(2, Fr),
      p = y / Math.pow(2, 28 - Fr)
    ;((e = n.maxResolution),
      e !== void 0 ? (o = 0) : (e = y / Math.pow(l, o)),
      (i = n.minResolution),
      i === void 0 &&
        (n.maxZoom !== void 0
          ? n.maxResolution !== void 0
            ? (i = e / Math.pow(l, a))
            : (i = y / Math.pow(l, a))
          : (i = p)),
      (a = o + Math.floor(Math.log(e / i) / Math.log(l))),
      (i = e / Math.pow(l, a - o)),
      n.constrainResolution ? (t = ff(l, e, i, c, !g && _, u)) : (t = gl(e, i, c, !g && _, u)))
  }
  return { constraint: t, maxResolution: e, minResolution: i, minZoom: o, zoomFactor: l }
}
function Ef(n) {
  if (n.enableRotation !== void 0 ? n.enableRotation : !0) {
    const e = n.constrainRotation
    return e === void 0 || e === !0 ? _f() : e === !1 ? _l : typeof e == 'number' ? gf(e) : _l
  }
  return Qo
}
function Cf(n) {
  return !(
    (n.sourceCenter && n.targetCenter && !Vs(n.sourceCenter, n.targetCenter)) ||
    n.sourceResolution !== n.targetResolution ||
    n.sourceRotation !== n.targetRotation
  )
}
function br(n, t, e, i, s) {
  const r = Math.cos(-s)
  let o = Math.sin(-s),
    a = n[0] * r - n[1] * o,
    l = n[1] * r + n[0] * o
  ;((a += (t[0] / 2 - e[0]) * i), (l += (e[1] - t[1] / 2) * i), (o = -o))
  const h = a * r - l * o,
    c = l * r + a * o
  return [h, c]
}
let ta = class extends Qh {
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
      this.addChangeListener(B.SOURCE, this.handleSourcePropertyChange_))
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
    return this.get(B.SOURCE) || null
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
    ;(this.sourceChangeKey_ && (it(this.sourceChangeKey_), (this.sourceChangeKey_ = null)),
      (this.sourceReady_ = !1))
    const t = this.getSource()
    ;(t &&
      ((this.sourceChangeKey_ = U(t, G.CHANGE, this.handleSourceChange_, this)),
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
      t instanceof te ? (e = { viewState: t.getState(), extent: t.calculateExtent() }) : (e = t),
      !e.layerStatesArray && i && (e.layerStatesArray = i.getLayerGroup().getLayerStatesArray()))
    let s
    e.layerStatesArray ? (s = e.layerStatesArray.find(o => o.layer === this)) : (s = this.getLayerState())
    const r = this.getExtent()
    return ea(s, e.viewState) && (!r || Yn(r, e.extent))
  }
  getAttributions(t) {
    if (!this.isVisible(t)) return []
    let e
    const i = this.getSource()
    if ((i && (e = i.getAttributions()), !e)) return []
    const s = t instanceof te ? t.getViewStateAndExtent() : t
    let r = e(s)
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
    ;(t || this.unrender(), this.set(B.MAP, t))
  }
  getMapInternal() {
    return this.get(B.MAP)
  }
  setMap(t) {
    ;(this.mapPrecomposeKey_ && (it(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)),
      t || this.changed(),
      this.mapRenderKey_ && (it(this.mapRenderKey_), (this.mapRenderKey_ = null)),
      t &&
        ((this.mapPrecomposeKey_ = U(
          t,
          Xe.PRECOMPOSE,
          function (e) {
            const s = e.frameState.layerStatesArray,
              r = this.getLayerState(!1)
            ;($(
              !s.some(function (o) {
                return o.layer === r.layer
              }),
              67,
            ),
              s.push(r))
          },
          this,
        )),
        (this.mapRenderKey_ = U(this, G.CHANGE, t.render, t)),
        this.changed()))
  }
  setSource(t) {
    this.set(B.SOURCE, t)
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
function ea(n, t) {
  if (!n.visible) return !1
  const e = t.resolution
  if (e < n.minResolution || e >= n.maxResolution) return !1
  const i = t.zoom
  return i > n.minZoom && i <= n.maxZoom
}
let Rf = class {
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
    const s = ml(t, e, i)
    return s in this.cache_ ? this.cache_[s] : null
  }
  set(t, e, i, s) {
    const r = ml(t, e, i)
    ;((this.cache_[r] = s), ++this.cacheSize_)
  }
  setSize(t) {
    ;((this.maxCacheSize_ = t), this.expire())
  }
}
function ml(n, t, e) {
  const i = e ? Hd(e) : 'null'
  return t + ':' + n + ':' + i
}
const ec = new Rf()
function Tf(n, t, e) {
  const i = n
  let s = !0,
    r = !1,
    o = !1
  const a = [
    Ys(i, G.LOAD, function () {
      ;((o = !0), r || t())
    }),
  ]
  return (
    i.src && Yu
      ? ((r = !0),
        i
          .decode()
          .then(function () {
            s && t()
          })
          .catch(function (l) {
            s && (o ? t() : e())
          }))
      : a.push(Ys(i, G.ERROR, e)),
    function () {
      ;((s = !1), a.forEach(it))
    }
  )
}
let wf = class extends jn {
    constructor(t) {
      ;(super(),
        (this.ready = !0),
        (this.boundHandleImageChange_ = this.handleImageChange_.bind(this)),
        (this.layer_ = t),
        (this.declutterExecutorGroup = null))
    }
    getFeatures(t) {
      return z()
    }
    getData(t) {
      return null
    }
    prepareFrame(t) {
      return z()
    }
    renderFrame(t, e) {
      return z()
    }
    loadedTileCallback(t, e, i) {
      ;(t[e] || (t[e] = {}), (t[e][i.tileCoord.toString()] = i))
    }
    createLoadedTileFinder(t, e, i) {
      return (s, r) => {
        const o = this.loadedTileCallback.bind(this, i, s)
        return t.forEachLoadedTile(e, s, r, o)
      }
    }
    forEachFeatureAtCoordinate(t, e, i, s, r) {}
    getLayer() {
      return this.layer_
    }
    handleFontsChanged() {}
    handleImageChange_(t) {
      const e = t.target
      ;(e.getState() === Qe.LOADED || e.getState() === Qe.ERROR) && this.renderIfReadyAndVisible()
    }
    loadImage(t) {
      let e = t.getState()
      return (
        e != Qe.LOADED && e != Qe.ERROR && t.addEventListener(G.CHANGE, this.boundHandleImageChange_),
        e == Qe.IDLE && (t.load(), (e = t.getState())),
        e == Qe.LOADED
      )
    }
    renderIfReadyAndVisible() {
      const t = this.getLayer()
      t && t.getVisible() && t.getSourceState() === 'ready' && t.changed()
    }
    disposeInternal() {
      ;(delete this.layer_, super.disposeInternal())
    }
  },
  ic = class extends Ze {
    constructor(t, e, i, s) {
      ;(super(t), (this.inversePixelTransform = e), (this.frameState = i), (this.context = s))
    }
  },
  Ai = null
function Sf() {
  Ai = We(1, 1, void 0, { willReadFrequently: !0 })
}
let vf = class extends wf {
    constructor(t) {
      ;(super(t),
        (this.container = null),
        this.renderedResolution,
        (this.tempTransform = Yi()),
        (this.pixelTransform = Yi()),
        (this.inversePixelTransform = Yi()),
        (this.context = null),
        (this.containerReused = !1),
        (this.pixelContext_ = null),
        (this.frameState = null))
    }
    getImageData(t, e, i) {
      ;(Ai || Sf(), Ai.clearRect(0, 0, 1, 1))
      let s
      try {
        ;(Ai.drawImage(t, e, i, 1, 1, 0, 0, 1, 1), (s = Ai.getImageData(0, 0, 1, 1).data))
      } catch {
        return ((Ai = null), null)
      }
      return s
    }
    getBackground(t) {
      let i = this.getLayer().getBackground()
      return (typeof i == 'function' && (i = i(t.viewState.resolution)), i || void 0)
    }
    useContainer(t, e, i) {
      const s = this.getLayer().getClassName()
      let r, o
      if (
        t &&
        t.className === s &&
        (!i || (t && t.style.backgroundColor && cr(_o(t.style.backgroundColor), _o(i))))
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
        ;((r = document.createElement('div')), (r.className = s))
        let a = r.style
        ;((a.position = 'absolute'), (a.width = '100%'), (a.height = '100%'), (o = We()))
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
      const s = fi(i),
        r = mr(i),
        o = _r(i),
        a = gr(i)
      ;(kt(e.coordinateToPixelTransform, s),
        kt(e.coordinateToPixelTransform, r),
        kt(e.coordinateToPixelTransform, o),
        kt(e.coordinateToPixelTransform, a))
      const l = this.inversePixelTransform
      ;(kt(l, s),
        kt(l, r),
        kt(l, o),
        kt(l, a),
        t.save(),
        t.beginPath(),
        t.moveTo(Math.round(s[0]), Math.round(s[1])),
        t.lineTo(Math.round(r[0]), Math.round(r[1])),
        t.lineTo(Math.round(o[0]), Math.round(o[1])),
        t.lineTo(Math.round(a[0]), Math.round(a[1])),
        t.clip())
    }
    dispatchRenderEvent_(t, e, i) {
      const s = this.getLayer()
      if (s.hasListener(t)) {
        const r = new ic(t, this.inversePixelTransform, i, e)
        s.dispatchEvent(r)
      }
    }
    preRender(t, e) {
      ;((this.frameState = e), this.dispatchRenderEvent_(Xe.PRERENDER, t, e))
    }
    postRender(t, e) {
      this.dispatchRenderEvent_(Xe.POSTRENDER, t, e)
    }
    getRenderTransform(t, e, i, s, r, o, a) {
      const l = r / 2,
        h = o / 2,
        c = s / e,
        u = -c,
        d = -t[0] + a,
        f = -t[1]
      return vn(this.tempTransform, l, h, c, u, -i, d, f)
    }
    disposeInternal() {
      ;(delete this.frameState, super.disposeInternal())
    }
  },
  If = class extends Re {
    constructor(t) {
      ;(super(),
        (this.projection = Ht(t.projection)),
        (this.attributions_ = yl(t.attributions)),
        (this.attributionsCollapsible_ =
          t.attributionsCollapsible !== void 0 ? t.attributionsCollapsible : !0),
        (this.loading = !1),
        (this.state_ = t.state !== void 0 ? t.state : 'ready'),
        (this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1),
        (this.interpolate_ = !!t.interpolate),
        (this.viewResolver = null),
        (this.viewRejector = null))
      const e = this
      this.viewPromise_ = new Promise(function (i, s) {
        ;((e.viewResolver = i), (e.viewRejector = s))
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
      ;((this.attributions_ = yl(t)), this.changed())
    }
    setState(t) {
      ;((this.state_ = t), this.changed())
    }
  }
function yl(n) {
  return n
    ? Array.isArray(n)
      ? function (t) {
          return n
        }
      : typeof n == 'function'
        ? n
        : function (t) {
            return [n]
          }
    : null
}
const L = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 }
class nc extends zo {
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
    this.dispatchEvent(G.CHANGE)
  }
  release() {
    this.state === L.ERROR && this.setState(L.EMPTY)
  }
  getKey() {
    return this.key + '/' + this.tileCoord
  }
  getInterimTile() {
    if (!this.interimTile) return this
    let t = this.interimTile
    do {
      if (t.getState() == L.LOADED) return ((this.transition_ = 0), t)
      t = t.interimTile
    } while (t)
    return this
  }
  refreshInterimChain() {
    if (!this.interimTile) return
    let t = this.interimTile,
      e = this
    do {
      if (t.getState() == L.LOADED) {
        t.interimTile = null
        break
      } else
        t.getState() == L.LOADING
          ? (e = t)
          : t.getState() == L.IDLE
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
    if (this.state !== L.ERROR && this.state > t) throw new Error('Tile load sequence violation')
    ;((this.state = t), this.changed())
  }
  load() {
    z()
  }
  getAlpha(t, e) {
    if (!this.transition_) return 1
    let i = this.transitionStarts_[t]
    if (!i) ((i = e), (this.transitionStarts_[t] = i))
    else if (i === -1) return 1
    const s = e - i + 1e3 / 60
    return s >= this.transition_ ? 1 : tc(s / this.transition_)
  }
  inTransition(t) {
    return this.transition_ ? this.transitionStarts_[t] !== -1 : !1
  }
  endTransition(t) {
    this.transition_ && (this.transitionStarts_[t] = -1)
  }
}
class sc extends nc {
  constructor(t, e, i, s, r, o) {
    ;(super(t, e, o),
      (this.crossOrigin_ = s),
      (this.src_ = i),
      (this.key = i),
      (this.image_ = new Image()),
      s !== null && (this.image_.crossOrigin = s),
      (this.unlisten_ = null),
      (this.tileLoadFunction_ = r))
  }
  getImage() {
    return this.image_
  }
  setImage(t) {
    ;((this.image_ = t), (this.state = L.LOADED), this.unlistenImage_(), this.changed())
  }
  handleImageError_() {
    ;((this.state = L.ERROR), this.unlistenImage_(), (this.image_ = Mf()), this.changed())
  }
  handleImageLoad_() {
    const t = this.image_
    ;(t.naturalWidth && t.naturalHeight ? (this.state = L.LOADED) : (this.state = L.EMPTY),
      this.unlistenImage_(),
      this.changed())
  }
  load() {
    ;(this.state == L.ERROR &&
      ((this.state = L.IDLE),
      (this.image_ = new Image()),
      this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_)),
      this.state == L.IDLE &&
        ((this.state = L.LOADING),
        this.changed(),
        this.tileLoadFunction_(this, this.src_),
        (this.unlisten_ = Tf(
          this.image_,
          this.handleImageLoad_.bind(this),
          this.handleImageError_.bind(this),
        ))))
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null))
  }
}
function Mf() {
  const n = We(1, 1)
  return ((n.fillStyle = 'rgba(0,0,0,0)'), n.fillRect(0, 0, 1, 1), n.canvas)
}
class Pf {
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
    const s = this.points_[e + 2] - this.points_[i + 2]
    if (s < 1e3 / 60) return !1
    const r = this.points_[e] - this.points_[i],
      o = this.points_[e + 1] - this.points_[i + 1]
    return (
      (this.angle_ = Math.atan2(o, r)),
      (this.initialVelocity_ = Math.sqrt(r * r + o * o) / s),
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
class Lf extends No {
  constructor(t) {
    ;(super(), (this.map_ = t))
  }
  dispatchRenderEvent(t, e) {
    z()
  }
  calculateMatrices2D(t) {
    const e = t.viewState,
      i = t.coordinateToPixelTransform,
      s = t.pixelToCoordinateTransform
    ;(vn(
      i,
      t.size[0] / 2,
      t.size[1] / 2,
      1 / e.resolution,
      -1 / e.resolution,
      -e.rotation,
      -e.center[0],
      -e.center[1],
    ),
      wh(s, i))
  }
  forEachFeatureAtCoordinate(t, e, i, s, r, o, a, l) {
    let h
    const c = e.viewState
    function u(E, C, T, v) {
      return r.call(o, C, E ? T : null, v)
    }
    const d = c.projection,
      f = _d(t.slice(), d),
      g = [[0, 0]]
    if (d.canWrapX() && s) {
      const E = d.getExtent(),
        C = ot(E)
      g.push([-C, 0], [C, 0])
    }
    const _ = e.layerStatesArray,
      m = _.length,
      y = [],
      p = []
    for (let E = 0; E < g.length; E++)
      for (let C = m - 1; C >= 0; --C) {
        const T = _[C],
          v = T.layer
        if (v.hasRenderer() && ea(T, c) && a.call(l, v)) {
          const S = v.getRenderer(),
            P = v.getSource()
          if (S && P) {
            const b = P.getWrapX() ? f : t,
              X = u.bind(null, T.managed)
            ;((p[0] = b[0] + g[E][0]),
              (p[1] = b[1] + g[E][1]),
              (h = S.forEachFeatureAtCoordinate(p, e, i, X, y)))
          }
          if (h) return h
        }
      }
    if (y.length === 0) return
    const x = 1 / y.length
    return (
      y.forEach((E, C) => (E.distanceSq += C * x)),
      y.sort((E, C) => E.distanceSq - C.distanceSq),
      y.some(E => (h = E.callback(E.feature, E.layer, E.geometry))),
      h
    )
  }
  hasFeatureAtCoordinate(t, e, i, s, r, o) {
    return this.forEachFeatureAtCoordinate(t, e, i, s, js, this, r, o) !== void 0
  }
  getMap() {
    return this.map_
  }
  renderFrame(t) {
    z()
  }
  flushDeclutterItems(t) {}
  scheduleExpireIconCache(t) {
    ec.canExpireCache() && t.postRenderFunctions.push(Af)
  }
}
function Af(n, t) {
  ec.expire()
}
class Ff extends Lf {
  constructor(t) {
    ;(super(t),
      (this.fontChangeListenerKey_ = U(of, Sn.PROPERTYCHANGE, t.redrawText.bind(t))),
      (this.element_ = document.createElement('div')))
    const e = this.element_.style
    ;((e.position = 'absolute'),
      (e.width = '100%'),
      (e.height = '100%'),
      (e.zIndex = '0'),
      (this.element_.className = pr + ' ol-layers'))
    const i = t.getViewport()
    ;(i.insertBefore(this.element_, i.firstChild || null),
      (this.children_ = []),
      (this.renderedVisible_ = !0),
      (this.declutterLayers_ = []))
  }
  dispatchRenderEvent(t, e) {
    const i = this.getMap()
    if (i.hasListener(t)) {
      const s = new ic(t, void 0, e)
      i.dispatchEvent(s)
    }
  }
  disposeInternal() {
    ;(it(this.fontChangeListenerKey_),
      this.element_.parentNode.removeChild(this.element_),
      super.disposeInternal())
  }
  renderFrame(t) {
    if (!t) {
      this.renderedVisible_ && ((this.element_.style.display = 'none'), (this.renderedVisible_ = !1))
      return
    }
    ;(this.calculateMatrices2D(t), this.dispatchRenderEvent(Xe.PRECOMPOSE, t))
    const e = t.layerStatesArray.sort(function (o, a) {
        return o.zIndex - a.zIndex
      }),
      i = t.viewState
    this.children_.length = 0
    const s = this.declutterLayers_
    s.length = 0
    let r = null
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o]
      t.layerIndex = o
      const h = l.layer,
        c = h.getSourceState()
      if (!ea(l, i) || (c != 'ready' && c != 'undefined')) {
        h.unrender()
        continue
      }
      const u = h.render(t, r)
      u && (u !== r && (this.children_.push(u), (r = u)), 'getDeclutter' in h && s.push(h))
    }
    ;(this.flushDeclutterItems(t),
      ef(this.element_, this.children_),
      this.dispatchRenderEvent(Xe.POSTCOMPOSE, t),
      this.renderedVisible_ || ((this.element_.style.display = ''), (this.renderedVisible_ = !0)),
      this.scheduleExpireIconCache(t))
  }
  flushDeclutterItems(t) {
    const e = this.declutterLayers_
    for (let i = e.length - 1; i >= 0; --i) e[i].renderDeclutter(t)
    e.length = 0
  }
}
class De extends Ze {
  constructor(t, e) {
    ;(super(t), (this.layer = e))
  }
}
const Or = { LAYERS: 'layers' }
class an extends Qh {
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
      this.addChangeListener(Or.LAYERS, this.handleLayersChanged_),
      i
        ? Array.isArray(i)
          ? (i = new me(i.slice(), { unique: !0 }))
          : $(typeof i.getArray == 'function', 43)
        : (i = new me(void 0, { unique: !0 })),
      this.setLayers(i))
  }
  handleLayerChange_() {
    this.changed()
  }
  handleLayersChanged_() {
    ;(this.layersListenerKeys_.forEach(it), (this.layersListenerKeys_.length = 0))
    const t = this.getLayers()
    this.layersListenerKeys_.push(
      U(t, Xt.ADD, this.handleLayersAdd_, this),
      U(t, Xt.REMOVE, this.handleLayersRemove_, this),
    )
    for (const i in this.listenerKeys_) this.listenerKeys_[i].forEach(it)
    dr(this.listenerKeys_)
    const e = t.getArray()
    for (let i = 0, s = e.length; i < s; i++) {
      const r = e[i]
      ;(this.registerLayerListeners_(r), this.dispatchEvent(new De('addlayer', r)))
    }
    this.changed()
  }
  registerLayerListeners_(t) {
    const e = [
      U(t, Sn.PROPERTYCHANGE, this.handleLayerChange_, this),
      U(t, G.CHANGE, this.handleLayerChange_, this),
    ]
    ;(t instanceof an &&
      e.push(
        U(t, 'addlayer', this.handleLayerGroupAdd_, this),
        U(t, 'removelayer', this.handleLayerGroupRemove_, this),
      ),
      (this.listenerKeys_[Tt(t)] = e))
  }
  handleLayerGroupAdd_(t) {
    this.dispatchEvent(new De('addlayer', t.layer))
  }
  handleLayerGroupRemove_(t) {
    this.dispatchEvent(new De('removelayer', t.layer))
  }
  handleLayersAdd_(t) {
    const e = t.element
    ;(this.registerLayerListeners_(e), this.dispatchEvent(new De('addlayer', e)), this.changed())
  }
  handleLayersRemove_(t) {
    const e = t.element,
      i = Tt(e)
    ;(this.listenerKeys_[i].forEach(it),
      delete this.listenerKeys_[i],
      this.dispatchEvent(new De('removelayer', e)),
      this.changed())
  }
  getLayers() {
    return this.get(Or.LAYERS)
  }
  setLayers(t) {
    const e = this.getLayers()
    if (e) {
      const i = e.getArray()
      for (let s = 0, r = i.length; s < r; ++s) this.dispatchEvent(new De('removelayer', i[s]))
    }
    this.set(Or.LAYERS, t)
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
    const s = this.getLayerState()
    let r = s.zIndex
    !t && s.zIndex === void 0 && (r = 0)
    for (let o = i, a = e.length; o < a; o++) {
      const l = e[o]
      ;((l.opacity *= s.opacity),
        (l.visible = l.visible && s.visible),
        (l.maxResolution = Math.min(l.maxResolution, s.maxResolution)),
        (l.minResolution = Math.max(l.minResolution, s.minResolution)),
        (l.minZoom = Math.max(l.minZoom, s.minZoom)),
        (l.maxZoom = Math.min(l.maxZoom, s.maxZoom)),
        s.extent !== void 0 &&
          (l.extent !== void 0 ? (l.extent = Rn(l.extent, s.extent)) : (l.extent = s.extent)),
        l.zIndex === void 0 && (l.zIndex = r))
    }
    return e
  }
  getSourceState() {
    return 'ready'
  }
}
let Fi = class extends Ze {
    constructor(t, e, i) {
      ;(super(t), (this.map = e), (this.frameState = i !== void 0 ? i : null))
    }
  },
  be = class extends Fi {
    constructor(t, e, i, s, r, o) {
      ;(super(t, e, r),
        (this.originalEvent = i),
        (this.pixel_ = null),
        (this.coordinate_ = null),
        (this.dragging = s !== void 0 ? s : !1),
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
const Q = {
    SINGLECLICK: 'singleclick',
    CLICK: G.CLICK,
    DBLCLICK: G.DBLCLICK,
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
  yo = { POINTERMOVE: 'pointermove', POINTERDOWN: 'pointerdown' }
class bf extends zo {
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
      (this.pointerdownListenerKey_ = U(i, yo.POINTERDOWN, this.handlePointerDown_, this)),
      this.originalPointerMoveEvent_,
      (this.relayedListenerKey_ = U(i, yo.POINTERMOVE, this.relayMoveEvent_, this)),
      (this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this)),
      this.element_.addEventListener(G.TOUCHMOVE, this.boundHandleTouchMove_, Th ? { passive: !1 } : !1))
  }
  emulateClick_(t) {
    let e = new be(Q.CLICK, this.map_, t)
    ;(this.dispatchEvent(e),
      this.clickTimeoutId_ !== void 0
        ? (clearTimeout(this.clickTimeoutId_),
          (this.clickTimeoutId_ = void 0),
          (e = new be(Q.DBLCLICK, this.map_, t)),
          this.dispatchEvent(e))
        : (this.clickTimeoutId_ = setTimeout(() => {
            this.clickTimeoutId_ = void 0
            const i = new be(Q.SINGLECLICK, this.map_, t)
            this.dispatchEvent(i)
          }, 250)))
  }
  updateActivePointers_(t) {
    const e = t,
      i = e.pointerId
    if (e.type == Q.POINTERUP || e.type == Q.POINTERCANCEL) {
      delete this.trackedTouches_[i]
      for (const s in this.trackedTouches_)
        if (this.trackedTouches_[s].target !== e.target) {
          delete this.trackedTouches_[s]
          break
        }
    } else (e.type == Q.POINTERDOWN || e.type == Q.POINTERMOVE) && (this.trackedTouches_[i] = e)
    this.activePointers_ = Object.values(this.trackedTouches_)
  }
  handlePointerUp_(t) {
    this.updateActivePointers_(t)
    const e = new be(Q.POINTERUP, this.map_, t, void 0, void 0, this.activePointers_)
    ;(this.dispatchEvent(e),
      this.emulateClicks_ &&
        !e.defaultPrevented &&
        !this.dragging_ &&
        this.isMouseActionButton_(t) &&
        this.emulateClick_(this.down_),
      this.activePointers_.length === 0 &&
        (this.dragListenerKeys_.forEach(it),
        (this.dragListenerKeys_.length = 0),
        (this.dragging_ = !1),
        (this.down_ = null)))
  }
  isMouseActionButton_(t) {
    return t.button === 0
  }
  handlePointerDown_(t) {
    ;((this.emulateClicks_ = this.activePointers_.length === 0), this.updateActivePointers_(t))
    const e = new be(Q.POINTERDOWN, this.map_, t, void 0, void 0, this.activePointers_)
    if (
      (this.dispatchEvent(e),
      (this.down_ = new PointerEvent(t.type, t)),
      Object.defineProperty(this.down_, 'target', { writable: !1, value: t.target }),
      this.dragListenerKeys_.length === 0)
    ) {
      const i = this.map_.getOwnerDocument()
      ;(this.dragListenerKeys_.push(
        U(i, Q.POINTERMOVE, this.handlePointerMove_, this),
        U(i, Q.POINTERUP, this.handlePointerUp_, this),
        U(this.element_, Q.POINTERCANCEL, this.handlePointerUp_, this),
      ),
        this.element_.getRootNode &&
          this.element_.getRootNode() !== i &&
          this.dragListenerKeys_.push(
            U(this.element_.getRootNode(), Q.POINTERUP, this.handlePointerUp_, this),
          ))
    }
  }
  handlePointerMove_(t) {
    if (this.isMoving_(t)) {
      ;(this.updateActivePointers_(t), (this.dragging_ = !0))
      const e = new be(Q.POINTERDRAG, this.map_, t, this.dragging_, void 0, this.activePointers_)
      this.dispatchEvent(e)
    }
  }
  relayMoveEvent_(t) {
    this.originalPointerMoveEvent_ = t
    const e = !!(this.down_ && this.isMoving_(t))
    this.dispatchEvent(new be(Q.POINTERMOVE, this.map_, t, e))
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
    ;(this.relayedListenerKey_ && (it(this.relayedListenerKey_), (this.relayedListenerKey_ = null)),
      this.element_.removeEventListener(G.TOUCHMOVE, this.boundHandleTouchMove_),
      this.pointerdownListenerKey_ &&
        (it(this.pointerdownListenerKey_), (this.pointerdownListenerKey_ = null)),
      this.dragListenerKeys_.forEach(it),
      (this.dragListenerKeys_.length = 0),
      (this.element_ = null),
      super.disposeInternal())
  }
}
const Oe = {
    POSTRENDER: 'postrender',
    MOVESTART: 'movestart',
    MOVEEND: 'moveend',
    LOADSTART: 'loadstart',
    LOADEND: 'loadend',
  },
  ft = { LAYERGROUP: 'layergroup', SIZE: 'size', TARGET: 'target', VIEW: 'view' },
  Zs = 1 / 0
class Of {
  constructor(t, e) {
    ;((this.priorityFunction_ = t),
      (this.keyFunction_ = e),
      (this.elements_ = []),
      (this.priorities_ = []),
      (this.queuedElements_ = {}))
  }
  clear() {
    ;((this.elements_.length = 0), (this.priorities_.length = 0), dr(this.queuedElements_))
  }
  dequeue() {
    const t = this.elements_,
      e = this.priorities_,
      i = t[0]
    t.length == 1 ? ((t.length = 0), (e.length = 0)) : ((t[0] = t.pop()), (e[0] = e.pop()), this.siftUp_(0))
    const s = this.keyFunction_(i)
    return (delete this.queuedElements_[s], i)
  }
  enqueue(t) {
    $(!(this.keyFunction_(t) in this.queuedElements_), 31)
    const e = this.priorityFunction_(t)
    return e != Zs
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
      s = e.length,
      r = e[t],
      o = i[t],
      a = t
    for (; t < s >> 1; ) {
      const l = this.getLeftChildIndex_(t),
        h = this.getRightChildIndex_(t),
        c = h < s && i[h] < i[l] ? h : l
      ;((e[t] = e[c]), (i[t] = i[c]), (t = c))
    }
    ;((e[t] = r), (i[t] = o), this.siftDown_(a, t))
  }
  siftDown_(t, e) {
    const i = this.elements_,
      s = this.priorities_,
      r = i[e],
      o = s[e]
    for (; e > t; ) {
      const a = this.getParentIndex_(e)
      if (s[a] > o) ((i[e] = i[a]), (s[e] = s[a]), (e = a))
      else break
    }
    ;((i[e] = r), (s[e] = o))
  }
  reprioritize() {
    const t = this.priorityFunction_,
      e = this.elements_,
      i = this.priorities_
    let s = 0
    const r = e.length
    let o, a, l
    for (a = 0; a < r; ++a)
      ((o = e[a]),
        (l = t(o)),
        l == Zs ? delete this.queuedElements_[this.keyFunction_(o)] : ((i[s] = l), (e[s++] = o)))
    ;((e.length = s), (i.length = s), this.heapify_())
  }
}
class Df extends Of {
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
    return (e && t[0].addEventListener(G.CHANGE, this.boundHandleTileChange_), e)
  }
  getTilesLoading() {
    return this.tilesLoading_
  }
  handleTileChange(t) {
    const e = t.target,
      i = e.getState()
    if (i === L.LOADED || i === L.ERROR || i === L.EMPTY) {
      i !== L.ERROR && e.removeEventListener(G.CHANGE, this.boundHandleTileChange_)
      const s = e.getKey()
      ;(s in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[s], --this.tilesLoading_),
        this.tileChangeCallback_())
    }
  }
  loadMoreTiles(t, e) {
    let i = 0,
      s,
      r,
      o
    for (; this.tilesLoading_ < t && i < e && this.getCount() > 0; )
      ((r = this.dequeue()[0]),
        (o = r.getKey()),
        (s = r.getState()),
        s === L.IDLE &&
          !(o in this.tilesLoadingKeys_) &&
          ((this.tilesLoadingKeys_[o] = !0), ++this.tilesLoading_, ++i, r.load()))
  }
}
function kf(n, t, e, i, s) {
  if (!n || !(e in n.wantedTiles) || !n.wantedTiles[e][t.getKey()]) return Zs
  const r = n.viewState.center,
    o = i[0] - r[0],
    a = i[1] - r[1]
  return 65536 * Math.log(s) + Math.sqrt(o * o + a * a) / s
}
class ia extends Re {
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
    ;(mo(this.element), super.disposeInternal())
  }
  getMap() {
    return this.map_
  }
  setMap(t) {
    this.map_ && mo(this.element)
    for (let e = 0, i = this.listenerKeys.length; e < i; ++e) it(this.listenerKeys[e])
    ;((this.listenerKeys.length = 0),
      (this.map_ = t),
      t &&
        ((this.target_ ? this.target_ : t.getOverlayContainerStopEvent()).appendChild(this.element),
        this.render !== Ws && this.listenerKeys.push(U(t, Oe.POSTRENDER, this.render, this)),
        t.render()))
  }
  render(t) {}
  setTarget(t) {
    this.target_ = typeof t == 'string' ? document.getElementById(t) : t
  }
}
class Nf extends ia {
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
      s = t.expandClassName !== void 0 ? t.expandClassName : e + '-expand',
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
        (this.label_.className = s))
      : (this.label_ = a)
    const l = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_
    ;((this.toggleButton_ = document.createElement('button')),
      this.toggleButton_.setAttribute('type', 'button'),
      this.toggleButton_.setAttribute('aria-expanded', String(!this.collapsed_)),
      (this.toggleButton_.title = i),
      this.toggleButton_.appendChild(l),
      this.toggleButton_.addEventListener(G.CLICK, this.handleClick_.bind(this), !1))
    const h =
        e +
        ' ' +
        pr +
        ' ' +
        $o +
        (this.collapsed_ && this.collapsible_ ? ' ' + hl : '') +
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
            .flatMap(s => s.getAttributions(t)),
        ),
      ),
      i = !this.getMap()
        .getAllLayers()
        .some(s => s.getSource() && s.getSource().getAttributionsCollapsible() === !1)
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
      !cr(e, this.renderedAttributions_))
    ) {
      tf(this.ulElement_)
      for (let s = 0, r = e.length; s < r; ++s) {
        const o = document.createElement('li')
        ;((o.innerHTML = e[s]), this.ulElement_.appendChild(o))
      }
      this.renderedAttributions_ = e
    }
  }
  handleClick_(t) {
    ;(t.preventDefault(), this.handleToggle_(), (this.userCollapsed_ = this.collapsed_))
  }
  handleToggle_() {
    ;(this.element.classList.toggle(hl),
      this.collapsed_ ? ll(this.collapseLabel_, this.label_) : ll(this.label_, this.collapseLabel_),
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
class Gf extends ia {
  constructor(t) {
    ;((t = t || {}), super({ element: document.createElement('div'), render: t.render, target: t.target }))
    const e = t.className !== void 0 ? t.className : 'ol-rotate',
      i = t.label !== void 0 ? t.label : '⇧',
      s = t.compassClassName !== void 0 ? t.compassClassName : 'ol-compass'
    ;((this.label_ = null),
      typeof i == 'string'
        ? ((this.label_ = document.createElement('span')),
          (this.label_.className = s),
          (this.label_.textContent = i))
        : ((this.label_ = i), this.label_.classList.add(s)))
    const r = t.tipLabel ? t.tipLabel : 'Reset rotation',
      o = document.createElement('button')
    ;((o.className = e + '-reset'),
      o.setAttribute('type', 'button'),
      (o.title = r),
      o.appendChild(this.label_),
      o.addEventListener(G.CLICK, this.handleClick_.bind(this), !1))
    const a = e + ' ' + pr + ' ' + $o,
      l = this.element
    ;((l.className = a),
      l.appendChild(o),
      (this.callResetNorth_ = t.resetNorth ? t.resetNorth : void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250),
      (this.autoHide_ = t.autoHide !== void 0 ? t.autoHide : !0),
      (this.rotation_ = void 0),
      this.autoHide_ && this.element.classList.add(ds))
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
        ? e.animate({ rotation: 0, duration: this.duration_, easing: on })
        : e.setRotation(0))
  }
  render(t) {
    const e = t.frameState
    if (!e) return
    const i = e.viewState.rotation
    if (i != this.rotation_) {
      const s = 'rotate(' + i + 'rad)'
      if (this.autoHide_) {
        const r = this.element.classList.contains(ds)
        !r && i === 0 ? this.element.classList.add(ds) : r && i !== 0 && this.element.classList.remove(ds)
      }
      this.label_.style.transform = s
    }
    this.rotation_ = i
  }
}
class Xf extends ia {
  constructor(t) {
    ;((t = t || {}), super({ element: document.createElement('div'), target: t.target }))
    const e = t.className !== void 0 ? t.className : 'ol-zoom',
      i = t.delta !== void 0 ? t.delta : 1,
      s = t.zoomInClassName !== void 0 ? t.zoomInClassName : e + '-in',
      r = t.zoomOutClassName !== void 0 ? t.zoomOutClassName : e + '-out',
      o = t.zoomInLabel !== void 0 ? t.zoomInLabel : '+',
      a = t.zoomOutLabel !== void 0 ? t.zoomOutLabel : '–',
      l = t.zoomInTipLabel !== void 0 ? t.zoomInTipLabel : 'Zoom in',
      h = t.zoomOutTipLabel !== void 0 ? t.zoomOutTipLabel : 'Zoom out',
      c = document.createElement('button')
    ;((c.className = s),
      c.setAttribute('type', 'button'),
      (c.title = l),
      c.appendChild(typeof o == 'string' ? document.createTextNode(o) : o),
      c.addEventListener(G.CLICK, this.handleClick_.bind(this, i), !1))
    const u = document.createElement('button')
    ;((u.className = r),
      u.setAttribute('type', 'button'),
      (u.title = h),
      u.appendChild(typeof a == 'string' ? document.createTextNode(a) : a),
      u.addEventListener(G.CLICK, this.handleClick_.bind(this, -i), !1))
    const d = e + ' ' + pr + ' ' + $o,
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
    const s = i.getZoom()
    if (s !== void 0) {
      const r = i.getConstrainedZoom(s + t)
      this.duration_ > 0
        ? (i.getAnimating() && i.cancelAnimations(),
          i.animate({ zoom: r, duration: this.duration_, easing: on }))
        : i.setZoom(r)
    }
  }
}
function zf(n) {
  n = n || {}
  const t = new me()
  return (
    (n.zoom !== void 0 ? n.zoom : !0) && t.push(new Xf(n.zoomOptions)),
    (n.rotate !== void 0 ? n.rotate : !0) && t.push(new Gf(n.rotateOptions)),
    (n.attribution !== void 0 ? n.attribution : !0) && t.push(new Nf(n.attributionOptions)),
    t
  )
}
const pl = { ACTIVE: 'active' }
let Vn = class extends Re {
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
    return this.get(pl.ACTIVE)
  }
  getMap() {
    return this.map_
  }
  handleEvent(t) {
    return !0
  }
  setActive(t) {
    this.set(pl.ACTIVE, t)
  }
  setMap(t) {
    this.map_ = t
  }
}
function jf(n, t, e) {
  const i = n.getCenterInternal()
  if (i) {
    const s = [i[0] + t[0], i[1] + t[1]]
    n.animateInternal({ duration: e !== void 0 ? e : 250, easing: yf, center: n.getConstrainedCenter(s) })
  }
}
function na(n, t, e, i) {
  const s = n.getZoom()
  if (s === void 0) return
  const r = n.getConstrainedZoom(s + t),
    o = n.getResolutionForZoom(r)
  ;(n.getAnimating() && n.cancelAnimations(),
    n.animate({ resolution: o, anchor: e, duration: i !== void 0 ? i : 250, easing: on }))
}
class Wf extends Vn {
  constructor(t) {
    ;(super(),
      (t = t || {}),
      (this.delta_ = t.delta ? t.delta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250))
  }
  handleEvent(t) {
    let e = !1
    if (t.type == Q.DBLCLICK) {
      const i = t.originalEvent,
        s = t.map,
        r = t.coordinate,
        o = i.shiftKey ? -this.delta_ : this.delta_,
        a = s.getView()
      ;(na(a, o, r, this.duration_), i.preventDefault(), (e = !0))
    }
    return !e
  }
}
let Un = class extends Vn {
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
      if (t.type == Q.POINTERDRAG) (this.handleDragEvent(t), t.originalEvent.preventDefault())
      else if (t.type == Q.POINTERUP) {
        const i = this.handleUpEvent(t)
        this.handlingDownUpSequence = i && this.targetPointers.length > 0
      }
    } else if (t.type == Q.POINTERDOWN) {
      const i = this.handleDownEvent(t)
      ;((this.handlingDownUpSequence = i), (e = this.stopDown(i)))
    } else t.type == Q.POINTERMOVE && this.handleMoveEvent(t)
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
function sa(n) {
  const t = n.length
  let e = 0,
    i = 0
  for (let s = 0; s < t; s++) ((e += n[s].clientX), (i += n[s].clientY))
  return { clientX: e / t, clientY: i / t }
}
function po(n) {
  const t = arguments
  return function (e) {
    let i = !0
    for (let s = 0, r = t.length; s < r && ((i = i && t[s](e)), !!i); ++s);
    return i
  }
}
const Yf = function (n) {
    const t = n.originalEvent
    return t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  Bf = function (n) {
    const t = n.map.getTargetElement(),
      e = n.map.getOwnerDocument().activeElement
    return t.contains(e)
  },
  rc = function (n) {
    return n.map.getTargetElement().hasAttribute('tabindex') ? Bf(n) : !0
  },
  Vf = js,
  oc = function (n) {
    const t = n.originalEvent
    return t.button == 0 && !(Wu && Eh && t.ctrlKey)
  },
  ac = function (n) {
    const t = n.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  Uf = function (n) {
    const t = n.originalEvent
    return Eh ? t.metaKey : t.ctrlKey
  },
  Zf = function (n) {
    const t = n.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  lc = function (n) {
    const t = n.originalEvent,
      e = t.target.tagName
    return e !== 'INPUT' && e !== 'SELECT' && e !== 'TEXTAREA' && !t.target.isContentEditable
  },
  Dr = function (n) {
    const t = n.originalEvent
    return ($(t !== void 0, 56), t.pointerType == 'mouse')
  },
  Kf = function (n) {
    const t = n.originalEvent
    return ($(t !== void 0, 56), t.isPrimary && t.button === 0)
  }
class $f extends Un {
  constructor(t) {
    ;(super({ stopDown: ur }),
      (t = t || {}),
      (this.kinetic_ = t.kinetic),
      (this.lastCentroid = null),
      this.lastPointersCount_,
      (this.panning_ = !1))
    const e = t.condition ? t.condition : po(ac, Kf)
    ;((this.condition_ = t.onFocusOnly ? po(rc, e) : e), (this.noKinetic_ = !1))
  }
  handleDragEvent(t) {
    const e = t.map
    this.panning_ || ((this.panning_ = !0), e.getView().beginInteraction())
    const i = this.targetPointers,
      s = e.getEventPixel(sa(i))
    if (i.length == this.lastPointersCount_) {
      if ((this.kinetic_ && this.kinetic_.update(s[0], s[1]), this.lastCentroid)) {
        const r = [this.lastCentroid[0] - s[0], s[1] - this.lastCentroid[1]],
          a = t.map.getView()
        ;(gd(r, a.getResolution()), Yo(r, a.getRotation()), a.adjustCenterInternal(r))
      }
    } else this.kinetic_ && this.kinetic_.begin()
    ;((this.lastCentroid = s), (this.lastPointersCount_ = i.length), t.originalEvent.preventDefault())
  }
  handleUpEvent(t) {
    const e = t.map,
      i = e.getView()
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const s = this.kinetic_.getDistance(),
          r = this.kinetic_.getAngle(),
          o = i.getCenterInternal(),
          a = e.getPixelFromCoordinateInternal(o),
          l = e.getCoordinateFromPixelInternal([a[0] - s * Math.cos(r), a[1] - s * Math.sin(r)])
        i.animateInternal({ center: i.getConstrainedCenter(l), duration: 500, easing: on })
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
class Hf extends Un {
  constructor(t) {
    ;((t = t || {}),
      super({ stopDown: ur }),
      (this.condition_ = t.condition ? t.condition : Yf),
      (this.lastAngle_ = void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250))
  }
  handleDragEvent(t) {
    if (!Dr(t)) return
    const e = t.map,
      i = e.getView()
    if (i.getConstraints().rotation === Qo) return
    const s = e.getSize(),
      r = t.pixel,
      o = Math.atan2(s[1] / 2 - r[1], r[0] - s[0] / 2)
    if (this.lastAngle_ !== void 0) {
      const a = o - this.lastAngle_
      i.adjustRotationInternal(-a)
    }
    this.lastAngle_ = o
  }
  handleUpEvent(t) {
    return Dr(t) ? (t.map.getView().endInteraction(this.duration_), !1) : !0
  }
  handleDownEvent(t) {
    return Dr(t) && oc(t) && this.condition_(t)
      ? (t.map.getView().beginInteraction(), (this.lastAngle_ = void 0), !0)
      : !1
  }
}
class qf extends No {
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
      s = this.element_.style
    ;((s.left = Math.min(t[0], e[0]) + i),
      (s.top = Math.min(t[1], e[1]) + i),
      (s.width = Math.abs(e[0] - t[0]) + i),
      (s.height = Math.abs(e[1] - t[1]) + i))
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
      s = [t, [t[0], e[1]], e, [e[0], t[1]]].map(this.map_.getCoordinateFromPixelInternal, this.map_)
    ;((s[4] = s[0].slice()),
      this.geometry_ ? this.geometry_.setCoordinates([s]) : (this.geometry_ = new Vh([s])))
  }
  getGeometry() {
    return this.geometry_
  }
}
const gs = { BOXSTART: 'boxstart', BOXDRAG: 'boxdrag', BOXEND: 'boxend', BOXCANCEL: 'boxcancel' }
class kr extends Ze {
  constructor(t, e, i) {
    ;(super(t), (this.coordinate = e), (this.mapBrowserEvent = i))
  }
}
class Jf extends Un {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      (t = t || {}),
      (this.box_ = new qf(t.className || 'ol-dragbox')),
      (this.minArea_ = t.minArea !== void 0 ? t.minArea : 64),
      t.onBoxEnd && (this.onBoxEnd = t.onBoxEnd),
      (this.startPixel_ = null),
      (this.condition_ = t.condition ? t.condition : oc),
      (this.boxEndCondition_ = t.boxEndCondition ? t.boxEndCondition : this.defaultBoxEndCondition))
  }
  defaultBoxEndCondition(t, e, i) {
    const s = i[0] - e[0],
      r = i[1] - e[1]
    return s * s + r * r >= this.minArea_
  }
  getGeometry() {
    return this.box_.getGeometry()
  }
  handleDragEvent(t) {
    ;(this.box_.setPixels(this.startPixel_, t.pixel), this.dispatchEvent(new kr(gs.BOXDRAG, t.coordinate, t)))
  }
  handleUpEvent(t) {
    this.box_.setMap(null)
    const e = this.boxEndCondition_(t, this.startPixel_, t.pixel)
    return (
      e && this.onBoxEnd(t),
      this.dispatchEvent(new kr(e ? gs.BOXEND : gs.BOXCANCEL, t.coordinate, t)),
      !1
    )
  }
  handleDownEvent(t) {
    return this.condition_(t)
      ? ((this.startPixel_ = t.pixel),
        this.box_.setMap(t.map),
        this.box_.setPixels(this.startPixel_, this.startPixel_),
        this.dispatchEvent(new kr(gs.BOXSTART, t.coordinate, t)),
        !0)
      : !1
  }
  onBoxEnd(t) {}
}
class Qf extends Jf {
  constructor(t) {
    t = t || {}
    const e = t.condition ? t.condition : Zf
    ;(super({ condition: e, className: t.className || 'ol-dragzoom', minArea: t.minArea }),
      (this.duration_ = t.duration !== void 0 ? t.duration : 200),
      (this.out_ = t.out !== void 0 ? t.out : !1))
  }
  onBoxEnd(t) {
    const i = this.getMap().getView()
    let s = this.getGeometry()
    if (this.out_) {
      const r = i.rotatedExtentForGeometry(s),
        o = i.getResolutionForExtentInternal(r),
        a = i.getResolution() / o
      ;((s = s.clone()), s.scale(a * a))
    }
    i.fitInternal(s, { duration: this.duration_, easing: on })
  }
}
const qe = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', DOWN: 'ArrowDown' }
class tg extends Vn {
  constructor(t) {
    ;(super(),
      (t = t || {}),
      (this.defaultCondition_ = function (e) {
        return ac(e) && lc(e)
      }),
      (this.condition_ = t.condition !== void 0 ? t.condition : this.defaultCondition_),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100),
      (this.pixelDelta_ = t.pixelDelta !== void 0 ? t.pixelDelta : 128))
  }
  handleEvent(t) {
    let e = !1
    if (t.type == G.KEYDOWN) {
      const i = t.originalEvent,
        s = i.key
      if (this.condition_(t) && (s == qe.DOWN || s == qe.LEFT || s == qe.RIGHT || s == qe.UP)) {
        const o = t.map.getView(),
          a = o.getResolution() * this.pixelDelta_
        let l = 0,
          h = 0
        s == qe.DOWN ? (h = -a) : s == qe.LEFT ? (l = -a) : s == qe.RIGHT ? (l = a) : (h = a)
        const c = [l, h]
        ;(Yo(c, o.getRotation()), jf(o, c, this.duration_), i.preventDefault(), (e = !0))
      }
    }
    return !e
  }
}
class eg extends Vn {
  constructor(t) {
    ;(super(),
      (t = t || {}),
      (this.condition_ = t.condition
        ? t.condition
        : function (e) {
            return !Uf(e) && lc(e)
          }),
      (this.delta_ = t.delta ? t.delta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100))
  }
  handleEvent(t) {
    let e = !1
    if (t.type == G.KEYDOWN || t.type == G.KEYPRESS) {
      const i = t.originalEvent,
        s = i.key
      if (this.condition_(t) && (s === '+' || s === '-')) {
        const r = t.map,
          o = s === '+' ? this.delta_ : -this.delta_,
          a = r.getView()
        ;(na(a, o, void 0, this.duration_), i.preventDefault(), (e = !0))
      }
    }
    return !e
  }
}
class ig extends Vn {
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
    const e = t.condition ? t.condition : Vf
    ;((this.condition_ = t.onFocusOnly ? po(rc, e) : e),
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
    if (!this.condition_(t) || t.type !== G.WHEEL) return !0
    const i = t.map,
      s = t.originalEvent
    ;(s.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.coordinate))
    let r
    if (
      (t.type == G.WHEEL &&
        ((r = s.deltaY),
        zu && s.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (r /= Ch),
        s.deltaMode === WheelEvent.DOM_DELTA_LINE && (r *= 40)),
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
      -at(this.totalDelta_, -this.maxDelta_ * this.deltaPerZoom_, this.maxDelta_ * this.deltaPerZoom_) /
      this.deltaPerZoom_
    ;((e.getConstrainResolution() || this.constrainResolution_) && (i = i ? (i > 0 ? 1 : -1) : 0),
      na(e, i, this.lastAnchor_, this.duration_),
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
class ng extends Un {
  constructor(t) {
    t = t || {}
    const e = t
    ;(e.stopDown || (e.stopDown = ur),
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
      s = this.targetPointers[1],
      r = Math.atan2(s.clientY - i.clientY, s.clientX - i.clientX)
    if (this.lastAngle_ !== void 0) {
      const l = r - this.lastAngle_
      ;((this.rotationDelta_ += l),
        !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = !0),
        (e = l))
    }
    this.lastAngle_ = r
    const o = t.map,
      a = o.getView()
    a.getConstraints().rotation !== Qo &&
      ((this.anchor_ = o.getCoordinateFromPixelInternal(o.getEventPixel(sa(this.targetPointers)))),
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
class sg extends Un {
  constructor(t) {
    t = t || {}
    const e = t
    ;(e.stopDown || (e.stopDown = ur),
      super(e),
      (this.anchor_ = null),
      (this.duration_ = t.duration !== void 0 ? t.duration : 400),
      (this.lastDistance_ = void 0),
      (this.lastScaleDelta_ = 1))
  }
  handleDragEvent(t) {
    let e = 1
    const i = this.targetPointers[0],
      s = this.targetPointers[1],
      r = i.clientX - s.clientX,
      o = i.clientY - s.clientY,
      a = Math.sqrt(r * r + o * o)
    ;(this.lastDistance_ !== void 0 && (e = this.lastDistance_ / a), (this.lastDistance_ = a))
    const l = t.map,
      h = l.getView()
    ;(e != 1 && (this.lastScaleDelta_ = e),
      (this.anchor_ = l.getCoordinateFromPixelInternal(l.getEventPixel(sa(this.targetPointers)))),
      l.render(),
      h.adjustResolutionInternal(e, this.anchor_))
  }
  handleUpEvent(t) {
    if (this.targetPointers.length < 2) {
      const i = t.map.getView(),
        s = this.lastScaleDelta_ > 1 ? 1 : -1
      return (i.endInteraction(this.duration_, s), !1)
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
function rg(n) {
  n = n || {}
  const t = new me(),
    e = new Pf(-0.005, 0.05, 100)
  return (
    (n.altShiftDragRotate !== void 0 ? n.altShiftDragRotate : !0) && t.push(new Hf()),
    (n.doubleClickZoom !== void 0 ? n.doubleClickZoom : !0) &&
      t.push(new Wf({ delta: n.zoomDelta, duration: n.zoomDuration })),
    (n.dragPan !== void 0 ? n.dragPan : !0) && t.push(new $f({ onFocusOnly: n.onFocusOnly, kinetic: e })),
    (n.pinchRotate !== void 0 ? n.pinchRotate : !0) && t.push(new ng()),
    (n.pinchZoom !== void 0 ? n.pinchZoom : !0) && t.push(new sg({ duration: n.zoomDuration })),
    (n.keyboard !== void 0 ? n.keyboard : !0) &&
      (t.push(new tg()), t.push(new eg({ delta: n.zoomDelta, duration: n.zoomDuration }))),
    (n.mouseWheelZoom !== void 0 ? n.mouseWheelZoom : !0) &&
      t.push(new ig({ onFocusOnly: n.onFocusOnly, duration: n.zoomDuration })),
    (n.shiftDragZoom !== void 0 ? n.shiftDragZoom : !0) && t.push(new Qf({ duration: n.zoomDuration })),
    t
  )
}
function hc(n) {
  if (n instanceof ta) {
    n.setMapInternal(null)
    return
  }
  n instanceof an && n.getLayers().forEach(hc)
}
function cc(n, t) {
  if (n instanceof ta) {
    n.setMapInternal(t)
    return
  }
  if (n instanceof an) {
    const e = n.getLayers().getArray()
    for (let i = 0, s = e.length; i < s; ++i) cc(e[i], t)
  }
}
let og = class extends Re {
  constructor(t) {
    ;(super(), (t = t || {}), this.on, this.once, this.un)
    const e = ag(t)
    ;(this.renderComplete_,
      (this.loaded_ = !0),
      (this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this)),
      (this.maxTilesLoading_ = t.maxTilesLoading !== void 0 ? t.maxTilesLoading : 16),
      (this.pixelRatio_ = t.pixelRatio !== void 0 ? t.pixelRatio : Ch),
      this.postRenderTimeoutHandle_,
      this.animationDelayKey_,
      (this.animationDelay_ = this.animationDelay_.bind(this)),
      (this.coordinateToPixelTransform_ = Yi()),
      (this.pixelToCoordinateTransform_ = Yi()),
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
      (this.controls = e.controls || zf()),
      (this.interactions = e.interactions || rg({ onFocusOnly: !0 })),
      (this.overlays_ = e.overlays),
      (this.overlayIdIndex_ = {}),
      (this.renderer_ = null),
      (this.postRenderFunctions_ = []),
      (this.tileQueue_ = new Df(this.getTilePriority.bind(this), this.handleTileChange_.bind(this))),
      this.addChangeListener(ft.LAYERGROUP, this.handleLayerGroupChanged_),
      this.addChangeListener(ft.VIEW, this.handleViewChanged_),
      this.addChangeListener(ft.SIZE, this.handleSizeChanged_),
      this.addChangeListener(ft.TARGET, this.handleTargetChanged_),
      this.setProperties(e.values))
    const i = this
    ;(t.view &&
      !(t.view instanceof te) &&
      t.view.then(function (s) {
        i.setView(new te(s))
      }),
      this.controls.addEventListener(Xt.ADD, s => {
        s.element.setMap(this)
      }),
      this.controls.addEventListener(Xt.REMOVE, s => {
        s.element.setMap(null)
      }),
      this.interactions.addEventListener(Xt.ADD, s => {
        s.element.setMap(this)
      }),
      this.interactions.addEventListener(Xt.REMOVE, s => {
        s.element.setMap(null)
      }),
      this.overlays_.addEventListener(Xt.ADD, s => {
        this.addOverlayInternal_(s.element)
      }),
      this.overlays_.addEventListener(Xt.REMOVE, s => {
        const r = s.element.getId()
        ;(r !== void 0 && delete this.overlayIdIndex_[r.toString()], s.element.setMap(null))
      }),
      this.controls.forEach(s => {
        s.setMap(this)
      }),
      this.interactions.forEach(s => {
        s.setMap(this)
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
    cc(t.layer, this)
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
    const s = this.getCoordinateFromPixelInternal(t)
    i = i !== void 0 ? i : {}
    const r = i.hitTolerance !== void 0 ? i.hitTolerance : 0,
      o = i.layerFilter !== void 0 ? i.layerFilter : js,
      a = i.checkWrapped !== !1
    return this.renderer_.forEachFeatureAtCoordinate(s, this.frameState_, r, a, e, null, o, null)
  }
  getFeaturesAtPixel(t, e) {
    const i = []
    return (
      this.forEachFeatureAtPixel(
        t,
        function (s) {
          i.push(s)
        },
        e,
      ),
      i
    )
  }
  getAllLayers() {
    const t = []
    function e(i) {
      i.forEach(function (s) {
        s instanceof an ? e(s.getLayers()) : t.push(s)
      })
    }
    return (e(this.getLayers()), t)
  }
  hasFeatureAtPixel(t, e) {
    if (!this.frameState_ || !this.renderer_) return !1
    const i = this.getCoordinateFromPixelInternal(t)
    e = e !== void 0 ? e : {}
    const s = e.layerFilter !== void 0 ? e.layerFilter : js,
      r = e.hitTolerance !== void 0 ? e.hitTolerance : 0,
      o = e.checkWrapped !== !1
    return this.renderer_.hasFeatureAtCoordinate(i, this.frameState_, r, o, s, null)
  }
  getEventCoordinate(t) {
    return this.getCoordinateFromPixel(this.getEventPixel(t))
  }
  getEventCoordinateInternal(t) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(t))
  }
  getEventPixel(t) {
    const i = this.viewport_.getBoundingClientRect(),
      s = this.getSize(),
      r = i.width / s[0],
      o = i.height / s[1],
      a = 'changedTouches' in t ? t.changedTouches[0] : t
    return [(a.clientX - i.left) / r, (a.clientY - i.top) / o]
  }
  getTarget() {
    return this.get(ft.TARGET)
  }
  getTargetElement() {
    return this.targetElement_
  }
  getCoordinateFromPixel(t) {
    return uo(this.getCoordinateFromPixelInternal(t), this.getView().getProjection())
  }
  getCoordinateFromPixelInternal(t) {
    const e = this.frameState_
    return e ? kt(e.pixelToCoordinateTransform, t.slice()) : null
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
    return this.get(ft.LAYERGROUP)
  }
  setLayers(t) {
    const e = this.getLayerGroup()
    if (t instanceof me) {
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
      const s = t[e]
      if (!s.visible) continue
      const r = s.layer.getRenderer()
      if (r && !r.ready) return !0
      const o = s.layer.getSource()
      if (o && o.loading) return !0
    }
    return !1
  }
  getPixelFromCoordinate(t) {
    const e = _e(t, this.getView().getProjection())
    return this.getPixelFromCoordinateInternal(e)
  }
  getPixelFromCoordinateInternal(t) {
    const e = this.frameState_
    return e ? kt(e.coordinateToPixelTransform, t.slice(0, 2)) : null
  }
  getRenderer() {
    return this.renderer_
  }
  getSize() {
    return this.get(ft.SIZE)
  }
  getView() {
    return this.get(ft.VIEW)
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
  getTilePriority(t, e, i, s) {
    return kf(this.frameState_, t, e, i, s)
  }
  handleBrowserEvent(t, e) {
    e = e || t.type
    const i = new be(e, this, t)
    this.handleMapBrowserEvent(i)
  }
  handleMapBrowserEvent(t) {
    if (!this.frameState_) return
    const e = t.originalEvent,
      i = e.type
    if (i === yo.POINTERDOWN || i === G.WHEEL || i === G.KEYDOWN) {
      const s = this.getOwnerDocument(),
        r = this.viewport_.getRootNode ? this.viewport_.getRootNode() : s,
        o = e.target
      if (this.overlayContainerStopEvent_.contains(o) || !(r === s ? s.documentElement : r).contains(o))
        return
    }
    if (((t.frameState = this.frameState_), this.dispatchEvent(t) !== !1)) {
      const s = this.getInteractions().getArray().slice()
      for (let r = s.length - 1; r >= 0; r--) {
        const o = s[r]
        if (o.getMap() !== this || !o.getActive() || !this.getTargetElement()) continue
        if (!o.handleEvent(t) || t.propagationStopped) break
      }
    }
  }
  handlePostRender() {
    const t = this.frameState_,
      e = this.tileQueue_
    if (!e.isEmpty()) {
      let s = this.maxTilesLoading_,
        r = s
      if (t) {
        const o = t.viewHints
        if (o[Nt.ANIMATING] || o[Nt.INTERACTING]) {
          const a = Date.now() - t.time > 8
          ;((s = a ? 0 : 8), (r = a ? 0 : 2))
        }
      }
      e.getTilesLoading() < s && (e.reprioritize(), e.loadMoreTiles(s, r))
    }
    t &&
      this.renderer_ &&
      !t.animate &&
      (this.renderComplete_ === !0
        ? (this.hasListener(Xe.RENDERCOMPLETE) && this.renderer_.dispatchRenderEvent(Xe.RENDERCOMPLETE, t),
          this.loaded_ === !1 && ((this.loaded_ = !0), this.dispatchEvent(new Fi(Oe.LOADEND, this, t))))
        : this.loaded_ === !0 && ((this.loaded_ = !1), this.dispatchEvent(new Fi(Oe.LOADSTART, this, t))))
    const i = this.postRenderFunctions_
    for (let s = 0, r = i.length; s < r; ++s) i[s](this, t)
    i.length = 0
  }
  handleSizeChanged_() {
    ;(this.getView() && !this.getView().getAnimating() && this.getView().resolveConstraints(0), this.render())
  }
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let i = 0, s = this.targetChangeHandlerKeys_.length; i < s; ++i)
        it(this.targetChangeHandlerKeys_[i])
      ;((this.targetChangeHandlerKeys_ = null),
        this.viewport_.removeEventListener(G.CONTEXTMENU, this.boundHandleBrowserEvent_),
        this.viewport_.removeEventListener(G.WHEEL, this.boundHandleBrowserEvent_),
        this.mapBrowserEventHandler_.dispose(),
        (this.mapBrowserEventHandler_ = null),
        mo(this.viewport_))
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
        this.renderer_ || (this.renderer_ = new Ff(this)),
        (this.mapBrowserEventHandler_ = new bf(this, this.moveTolerance_)))
      for (const r in Q)
        this.mapBrowserEventHandler_.addEventListener(Q[r], this.handleMapBrowserEvent.bind(this))
      ;(this.viewport_.addEventListener(G.CONTEXTMENU, this.boundHandleBrowserEvent_, !1),
        this.viewport_.addEventListener(G.WHEEL, this.boundHandleBrowserEvent_, Th ? { passive: !1 } : !1))
      const i = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : e
      this.targetChangeHandlerKeys_ = [
        U(i, G.KEYDOWN, this.handleBrowserEvent, this),
        U(i, G.KEYPRESS, this.handleBrowserEvent, this),
      ]
      const s = e.getRootNode()
      ;(s instanceof ShadowRoot && this.resizeObserver_.observe(s.host), this.resizeObserver_.observe(e))
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
      (it(this.viewPropertyListenerKey_), (this.viewPropertyListenerKey_ = null)),
      this.viewChangeListenerKey_ && (it(this.viewChangeListenerKey_), (this.viewChangeListenerKey_ = null)))
    const t = this.getView()
    ;(t &&
      (this.updateViewportSize_(),
      (this.viewPropertyListenerKey_ = U(t, Sn.PROPERTYCHANGE, this.handleViewPropertyChanged_, this)),
      (this.viewChangeListenerKey_ = U(t, G.CHANGE, this.handleViewPropertyChanged_, this)),
      t.resolveConstraints(0)),
      this.render())
  }
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ &&
      (this.layerGroupPropertyListenerKeys_.forEach(it), (this.layerGroupPropertyListenerKeys_ = null))
    const t = this.getLayerGroup()
    ;(t &&
      (this.handleLayerAdd_(new De('addlayer', t)),
      (this.layerGroupPropertyListenerKeys_ = [
        U(t, Sn.PROPERTYCHANGE, this.render, this),
        U(t, G.CHANGE, this.render, this),
        U(t, 'addlayer', this.handleLayerAdd_, this),
        U(t, 'removelayer', this.handleLayerRemove_, this),
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
      const s = t[e].layer
      s.hasRenderer() && s.getRenderer().handleFontsChanged()
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
    hc(t.layer)
  }
  removeOverlay(t) {
    return this.getOverlays().remove(t)
  }
  renderFrame_(t) {
    const e = this.getSize(),
      i = this.getView(),
      s = this.frameState_
    let r = null
    if (e !== void 0 && rl(e) && i && i.isDef()) {
      const o = i.getHints(this.frameState_ ? this.frameState_.viewHints : void 0),
        a = i.getState()
      if (
        ((r = {
          animate: !1,
          coordinateToPixelTransform: this.coordinateToPixelTransform_,
          declutterTree: null,
          extent: ao(a.center, a.resolution, a.rotation, e),
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
          mapId: Tt(this),
          renderTargets: {},
        }),
        a.nextCenter && a.nextResolution)
      ) {
        const l = isNaN(a.nextRotation) ? a.rotation : a.nextRotation
        r.nextExtent = ao(a.nextCenter, a.nextResolution, l, e)
      }
    }
    ;((this.frameState_ = r),
      this.renderer_.renderFrame(r),
      r &&
        (r.animate && this.render(),
        Array.prototype.push.apply(this.postRenderFunctions_, r.postRenderFunctions),
        s &&
          (!this.previousExtent_ || (!yr(this.previousExtent_) && !ro(r.extent, this.previousExtent_))) &&
          (this.dispatchEvent(new Fi(Oe.MOVESTART, this, s)),
          (this.previousExtent_ = fr(this.previousExtent_))),
        this.previousExtent_ &&
          !r.viewHints[Nt.ANIMATING] &&
          !r.viewHints[Nt.INTERACTING] &&
          !ro(r.extent, this.previousExtent_) &&
          (this.dispatchEvent(new Fi(Oe.MOVEEND, this, r)), Uu(r.extent, this.previousExtent_))),
      this.dispatchEvent(new Fi(Oe.POSTRENDER, this, r)),
      (this.renderComplete_ =
        this.hasListener(Oe.LOADSTART) || this.hasListener(Oe.LOADEND) || this.hasListener(Xe.RENDERCOMPLETE)
          ? !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady()
          : void 0),
      this.postRenderTimeoutHandle_ ||
        (this.postRenderTimeoutHandle_ = setTimeout(() => {
          ;((this.postRenderTimeoutHandle_ = void 0), this.handlePostRender())
        }, 0)))
  }
  setLayerGroup(t) {
    const e = this.getLayerGroup()
    ;(e && this.handleLayerRemove_(new De('removelayer', e)), this.set(ft.LAYERGROUP, t))
  }
  setSize(t) {
    this.set(ft.SIZE, t)
  }
  setTarget(t) {
    this.set(ft.TARGET, t)
  }
  setView(t) {
    if (!t || t instanceof te) {
      this.set(ft.VIEW, t)
      return
    }
    this.set(ft.VIEW, new te())
    const e = this
    t.then(function (i) {
      e.setView(new te(i))
    })
  }
  updateSize() {
    const t = this.getTargetElement()
    let e
    if (t) {
      const s = getComputedStyle(t),
        r =
          t.offsetWidth -
          parseFloat(s.borderLeftWidth) -
          parseFloat(s.paddingLeft) -
          parseFloat(s.paddingRight) -
          parseFloat(s.borderRightWidth),
        o =
          t.offsetHeight -
          parseFloat(s.borderTopWidth) -
          parseFloat(s.paddingTop) -
          parseFloat(s.paddingBottom) -
          parseFloat(s.borderBottomWidth)
      !isNaN(r) &&
        !isNaN(o) &&
        ((e = [r, o]),
        !rl(e) &&
          (t.offsetWidth || t.offsetHeight || t.getClientRects().length) &&
          Ah("No map visible because the map container's width or height are 0."))
    }
    const i = this.getSize()
    e && (!i || !cr(e, i)) && (this.setSize(e), this.updateViewportSize_())
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
function ag(n) {
  let t = null
  n.keyboardEventTarget !== void 0 &&
    (t =
      typeof n.keyboardEventTarget == 'string'
        ? document.getElementById(n.keyboardEventTarget)
        : n.keyboardEventTarget)
  const e = {},
    i = n.layers && typeof n.layers.getLayers == 'function' ? n.layers : new an({ layers: n.layers })
  ;((e[ft.LAYERGROUP] = i),
    (e[ft.TARGET] = n.target),
    (e[ft.VIEW] = n.view instanceof te ? n.view : new te()))
  let s
  n.controls !== void 0 &&
    (Array.isArray(n.controls)
      ? (s = new me(n.controls.slice()))
      : ($(typeof n.controls.getArray == 'function', 47), (s = n.controls)))
  let r
  n.interactions !== void 0 &&
    (Array.isArray(n.interactions)
      ? (r = new me(n.interactions.slice()))
      : ($(typeof n.interactions.getArray == 'function', 48), (r = n.interactions)))
  let o
  return (
    n.overlays !== void 0
      ? Array.isArray(n.overlays)
        ? (o = new me(n.overlays.slice()))
        : ($(typeof n.overlays.getArray == 'function', 49), (o = n.overlays))
      : (o = new me()),
    { controls: s, interactions: r, keyboardEventTarget: t, overlays: o, values: e }
  )
}
class lg {
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
      $(i !== void 0, 15),
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
      $(e !== void 0, 15),
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
    $(!(t in this.entries_), 16)
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
function xl(n, t, e, i) {
  return i !== void 0 ? ((i[0] = n), (i[1] = t), (i[2] = e), i) : [n, t, e]
}
function xr(n, t, e) {
  return n + '/' + t + '/' + e
}
function uc(n) {
  return xr(n[0], n[1], n[2])
}
function hg(n) {
  return n.split('/').map(Number)
}
function cg(n) {
  return (n[1] << n[0]) + n[2]
}
function ug(n, t) {
  const e = n[0],
    i = n[1],
    s = n[2]
  if (t.getMinZoom() > e || e > t.getMaxZoom()) return !1
  const r = t.getFullTileRange(e)
  return r ? r.containsXY(i, s) : !0
}
class dc extends lg {
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
      i = hg(t)[0]
    this.forEach(s => {
      s.tileCoord[0] !== i && (this.remove(uc(s.tileCoord)), s.release())
    })
  }
}
class ra {
  constructor(t, e, i, s) {
    ;((this.minX = t), (this.maxX = e), (this.minY = i), (this.maxY = s))
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
function wi(n, t, e, i, s) {
  return s !== void 0 ? ((s.minX = n), (s.maxX = t), (s.minY = e), (s.maxY = i), s) : new ra(n, t, e, i)
}
const dg = 0.5,
  fg = 10,
  El = 0.25
class gg {
  constructor(t, e, i, s, r, o) {
    ;((this.sourceProj_ = t), (this.targetProj_ = e))
    let a = {}
    const l = Us(this.targetProj_, this.sourceProj_)
    ;((this.transformInv_ = function (p) {
      const x = p[0] + '/' + p[1]
      return (a[x] || (a[x] = l(p)), a[x])
    }),
      (this.maxSourceExtent_ = s),
      (this.errorThresholdSquared_ = r * r),
      (this.triangles_ = []),
      (this.wrapsXInSource_ = !1),
      (this.canWrapXInSource_ =
        this.sourceProj_.canWrapX() &&
        !!s &&
        !!this.sourceProj_.getExtent() &&
        ot(s) >= ot(this.sourceProj_.getExtent())),
      (this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? ot(this.sourceProj_.getExtent()) : null),
      (this.targetWorldWidth_ = this.targetProj_.getExtent() ? ot(this.targetProj_.getExtent()) : null))
    const h = fi(i),
      c = mr(i),
      u = _r(i),
      d = gr(i),
      f = this.transformInv_(h),
      g = this.transformInv_(c),
      _ = this.transformInv_(u),
      m = this.transformInv_(d),
      y = fg + (o ? Math.max(0, Math.ceil(Math.log2(oo(i) / (o * o * 256 * 256)))) : 0)
    if ((this.addQuad_(h, c, u, d, f, g, _, m, y), this.wrapsXInSource_)) {
      let p = 1 / 0
      ;(this.triangles_.forEach(function (x, E, C) {
        p = Math.min(p, x.source[0][0], x.source[1][0], x.source[2][0])
      }),
        this.triangles_.forEach(x => {
          if (Math.max(x.source[0][0], x.source[1][0], x.source[2][0]) - p > this.sourceWorldWidth_ / 2) {
            const E = [
              [x.source[0][0], x.source[0][1]],
              [x.source[1][0], x.source[1][1]],
              [x.source[2][0], x.source[2][1]],
            ]
            ;(E[0][0] - p > this.sourceWorldWidth_ / 2 && (E[0][0] -= this.sourceWorldWidth_),
              E[1][0] - p > this.sourceWorldWidth_ / 2 && (E[1][0] -= this.sourceWorldWidth_),
              E[2][0] - p > this.sourceWorldWidth_ / 2 && (E[2][0] -= this.sourceWorldWidth_))
            const C = Math.min(E[0][0], E[1][0], E[2][0])
            Math.max(E[0][0], E[1][0], E[2][0]) - C < this.sourceWorldWidth_ / 2 && (x.source = E)
          }
        }))
    }
    a = {}
  }
  addTriangle_(t, e, i, s, r, o) {
    this.triangles_.push({ source: [s, r, o], target: [t, e, i] })
  }
  addQuad_(t, e, i, s, r, o, a, l, h) {
    const c = Ya([r, o, a, l]),
      u = this.sourceWorldWidth_ ? ot(c) / this.sourceWorldWidth_ : null,
      d = this.sourceWorldWidth_,
      f = this.sourceProj_.canWrapX() && u > 0.5 && u < 1
    let g = !1
    if (h > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const m = Ya([t, e, i, s])
        g = ot(m) / this.targetWorldWidth_ > El || g
      }
      !f && this.sourceProj_.isGlobal() && u && (g = u > El || g)
    }
    if (
      !g &&
      this.maxSourceExtent_ &&
      isFinite(c[0]) &&
      isFinite(c[1]) &&
      isFinite(c[2]) &&
      isFinite(c[3]) &&
      !Yn(c, this.maxSourceExtent_)
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
          y = this.transformInv_(m)
        let p
        f ? (p = (Ui(r[0], d) + Ui(a[0], d)) / 2 - Ui(y[0], d)) : (p = (r[0] + a[0]) / 2 - y[0])
        const x = (r[1] + a[1]) / 2 - y[1]
        g = p * p + x * x > this.errorThresholdSquared_
      }
      if (g) {
        if (Math.abs(t[0] - i[0]) <= Math.abs(t[1] - i[1])) {
          const m = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2],
            y = this.transformInv_(m),
            p = [(s[0] + t[0]) / 2, (s[1] + t[1]) / 2],
            x = this.transformInv_(p)
          ;(this.addQuad_(t, e, m, p, r, o, y, x, h - 1), this.addQuad_(p, m, i, s, x, y, a, l, h - 1))
        } else {
          const m = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2],
            y = this.transformInv_(m),
            p = [(i[0] + s[0]) / 2, (i[1] + s[1]) / 2],
            x = this.transformInv_(p)
          ;(this.addQuad_(t, m, p, s, r, y, x, l, h - 1), this.addQuad_(m, e, i, p, y, o, a, x, h - 1))
        }
        return
      }
    }
    if (f) {
      if (!this.canWrapXInSource_) return
      this.wrapsXInSource_ = !0
    }
    ;((_ & 11) == 0 && this.addTriangle_(t, i, s, r, a, l),
      (_ & 14) == 0 && this.addTriangle_(t, i, e, r, a, o),
      _ &&
        ((_ & 13) == 0 && this.addTriangle_(e, s, t, o, l, r),
        (_ & 7) == 0 && this.addTriangle_(e, s, i, o, l, a)))
  }
  calculateSourceExtent() {
    const t = di()
    return (
      this.triangles_.forEach(function (e, i, s) {
        const r = e.source
        ;(Ds(t, r[0]), Ds(t, r[1]), Ds(t, r[2]))
      }),
      t
    )
  }
  getTriangles() {
    return this.triangles_
  }
}
let Nr
const Zi = []
function Cl(n, t, e, i, s) {
  ;(n.beginPath(),
    n.moveTo(0, 0),
    n.lineTo(t, e),
    n.lineTo(i, s),
    n.closePath(),
    n.save(),
    n.clip(),
    n.fillRect(0, 0, Math.max(t, i) + 1, Math.max(e, s)),
    n.restore())
}
function Gr(n, t) {
  return Math.abs(n[t * 4] - 210) > 2 || Math.abs(n[t * 4 + 3] - 0.75 * 255) > 2
}
function _g() {
  if (Nr === void 0) {
    const n = We(6, 6, Zi)
    ;((n.globalCompositeOperation = 'lighter'),
      (n.fillStyle = 'rgba(210, 0, 0, 0.75)'),
      Cl(n, 4, 5, 4, 0),
      Cl(n, 4, 5, 0, 5))
    const t = n.getImageData(0, 0, 3, 3).data
    ;((Nr = Gr(t, 0) || Gr(t, 4) || Gr(t, 8)), Ko(n), Zi.push(n.canvas))
  }
  return Nr
}
function Rl(n, t, e, i) {
  const s = Oh(e, t, n)
  let r = $a(t, i, e)
  const o = t.getMetersPerUnit()
  o !== void 0 && (r *= o)
  const a = n.getMetersPerUnit()
  a !== void 0 && (r /= a)
  const l = n.getExtent()
  if (!l || jo(l, s)) {
    const h = $a(n, r, s) / r
    isFinite(h) && h > 0 && (r /= h)
  }
  return r
}
function mg(n, t, e, i) {
  const s = In(e)
  let r = Rl(n, t, s, i)
  return (
    (!isFinite(r) || r <= 0) &&
      Mh(e, function (o) {
        return ((r = Rl(n, t, o, i)), isFinite(r) && r > 0)
      }),
    r
  )
}
function yg(n, t, e, i, s, r, o, a, l, h, c, u) {
  const d = We(Math.round(e * n), Math.round(e * t), Zi)
  if ((u || (d.imageSmoothingEnabled = !1), l.length === 0)) return d.canvas
  d.scale(e, e)
  function f(E) {
    return Math.round(E * e) / e
  }
  d.globalCompositeOperation = 'lighter'
  const g = di()
  l.forEach(function (E, C, T) {
    Hu(g, E.extent)
  })
  const _ = ot(g),
    m = oe(g),
    y = We(Math.round((e * _) / i), Math.round((e * m) / i), Zi)
  u || (y.imageSmoothingEnabled = !1)
  const p = e / i
  l.forEach(function (E, C, T) {
    const v = E.extent[0] - g[0],
      S = -(E.extent[3] - g[3]),
      P = ot(E.extent),
      b = oe(E.extent)
    E.image.width > 0 &&
      E.image.height > 0 &&
      y.drawImage(E.image, h, h, E.image.width - 2 * h, E.image.height - 2 * h, v * p, S * p, P * p, b * p)
  })
  const x = fi(o)
  return (
    a.getTriangles().forEach(function (E, C, T) {
      const v = E.source,
        S = E.target
      let P = v[0][0],
        b = v[0][1],
        X = v[1][0],
        N = v[1][1],
        D = v[2][0],
        nt = v[2][1]
      const I = f((S[0][0] - x[0]) / r),
        F = f(-(S[0][1] - x[1]) / r),
        w = f((S[1][0] - x[0]) / r),
        O = f(-(S[1][1] - x[1]) / r),
        Z = f((S[2][0] - x[0]) / r),
        Y = f(-(S[2][1] - x[1]) / r),
        st = P,
        R = b
      ;((P = 0), (b = 0), (X -= st), (N -= R), (D -= st), (nt -= R))
      const It = [
          [X, N, 0, 0, w - I],
          [D, nt, 0, 0, Z - I],
          [0, 0, X, N, O - F],
          [0, 0, D, nt, Y - F],
        ],
        W = ud(It)
      if (W) {
        if ((d.save(), d.beginPath(), _g() || !u)) {
          d.moveTo(w, O)
          const H = 4,
            we = I - w,
            Jt = F - O
          for (let lt = 0; lt < H; lt++)
            (d.lineTo(w + f(((lt + 1) * we) / H), O + f((lt * Jt) / (H - 1))),
              lt != H - 1 && d.lineTo(w + f(((lt + 1) * we) / H), O + f(((lt + 1) * Jt) / (H - 1))))
          d.lineTo(Z, Y)
        } else (d.moveTo(w, O), d.lineTo(I, F), d.lineTo(Z, Y))
        ;(d.clip(),
          d.transform(W[0], W[2], W[1], W[3], I, F),
          d.translate(g[0] - st, g[3] - R),
          d.scale(i / e, -i / e),
          d.drawImage(y.canvas, 0, 0),
          d.restore())
      }
    }),
    Ko(y),
    Zi.push(y.canvas),
    c &&
      (d.save(),
      (d.globalCompositeOperation = 'source-over'),
      (d.strokeStyle = 'black'),
      (d.lineWidth = 1),
      a.getTriangles().forEach(function (E, C, T) {
        const v = E.target,
          S = (v[0][0] - x[0]) / r,
          P = -(v[0][1] - x[1]) / r,
          b = (v[1][0] - x[0]) / r,
          X = -(v[1][1] - x[1]) / r,
          N = (v[2][0] - x[0]) / r,
          D = -(v[2][1] - x[1]) / r
        ;(d.beginPath(), d.moveTo(b, X), d.lineTo(S, P), d.lineTo(N, D), d.closePath(), d.stroke())
      }),
      d.restore()),
    d.canvas
  )
}
class xo extends nc {
  constructor(t, e, i, s, r, o, a, l, h, c, u, d) {
    ;(super(r, L.IDLE, { interpolate: !!d }),
      (this.renderEdges_ = u !== void 0 ? u : !1),
      (this.pixelRatio_ = a),
      (this.gutter_ = l),
      (this.canvas_ = null),
      (this.sourceTileGrid_ = e),
      (this.targetTileGrid_ = s),
      (this.wrappedTileCoord_ = o || r),
      (this.sourceTiles_ = []),
      (this.sourcesListenerKeys_ = null),
      (this.sourceZ_ = 0))
    const f = s.getTileCoordExtent(this.wrappedTileCoord_),
      g = this.targetTileGrid_.getExtent()
    let _ = this.sourceTileGrid_.getExtent()
    const m = g ? Rn(f, g) : f
    if (oo(m) === 0) {
      this.state = L.EMPTY
      return
    }
    const y = t.getExtent()
    y && (_ ? (_ = Rn(_, y)) : (_ = y))
    const p = s.getResolution(this.wrappedTileCoord_[0]),
      x = mg(t, i, m, p)
    if (!isFinite(x) || x <= 0) {
      this.state = L.EMPTY
      return
    }
    const E = c !== void 0 ? c : dg
    if (
      ((this.triangulation_ = new gg(t, i, m, _, x * E, p)), this.triangulation_.getTriangles().length === 0)
    ) {
      this.state = L.EMPTY
      return
    }
    this.sourceZ_ = e.getZForResolution(x)
    let C = this.triangulation_.calculateSourceExtent()
    if (
      (_ && (t.canWrapX() ? ((C[1] = at(C[1], _[1], _[3])), (C[3] = at(C[3], _[1], _[3]))) : (C = Rn(C, _))),
      !oo(C))
    )
      this.state = L.EMPTY
    else {
      const T = e.getTileRangeForExtentAndZ(C, this.sourceZ_)
      for (let v = T.minX; v <= T.maxX; v++)
        for (let S = T.minY; S <= T.maxY; S++) {
          const P = h(this.sourceZ_, v, S, a)
          P && this.sourceTiles_.push(P)
        }
      this.sourceTiles_.length === 0 && (this.state = L.EMPTY)
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
          e.getState() == L.LOADED &&
          t.push({ extent: this.sourceTileGrid_.getTileCoordExtent(e.tileCoord), image: e.getImage() })
      }),
      (this.sourceTiles_.length = 0),
      t.length === 0)
    )
      this.state = L.ERROR
    else {
      const e = this.wrappedTileCoord_[0],
        i = this.targetTileGrid_.getTileSize(e),
        s = typeof i == 'number' ? i : i[0],
        r = typeof i == 'number' ? i : i[1],
        o = this.targetTileGrid_.getResolution(e),
        a = this.sourceTileGrid_.getResolution(this.sourceZ_),
        l = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_)
      ;((this.canvas_ = yg(
        s,
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
        (this.state = L.LOADED))
    }
    this.changed()
  }
  load() {
    if (this.state == L.IDLE) {
      ;((this.state = L.LOADING), this.changed())
      let t = 0
      ;((this.sourcesListenerKeys_ = []),
        this.sourceTiles_.forEach(e => {
          const i = e.getState()
          if (i == L.IDLE || i == L.LOADING) {
            t++
            const s = U(
              e,
              G.CHANGE,
              function (r) {
                const o = e.getState()
                ;(o == L.LOADED || o == L.ERROR || o == L.EMPTY) &&
                  (it(s), t--, t === 0 && (this.unlistenSources_(), this.reproject_()))
              },
              this,
            )
            this.sourcesListenerKeys_.push(s)
          }
        }),
        t === 0
          ? setTimeout(this.reproject_.bind(this), 0)
          : this.sourceTiles_.forEach(function (e, i, s) {
              e.getState() == L.IDLE && e.load()
            }))
    }
  }
  unlistenSources_() {
    ;(this.sourcesListenerKeys_.forEach(it), (this.sourcesListenerKeys_ = null))
  }
  release() {
    ;(this.canvas_ && (Ko(this.canvas_.getContext('2d')), Zi.push(this.canvas_), (this.canvas_ = null)),
      super.release())
  }
}
class pg extends vf {
  constructor(t) {
    ;(super(t),
      (this.extentChanged = !0),
      (this.renderedExtent_ = null),
      this.renderedPixelRatio,
      (this.renderedProjection = null),
      this.renderedRevision,
      (this.renderedTiles = []),
      (this.newTiles_ = !1),
      (this.tmpExtent = di()),
      (this.tmpTileRange_ = new ra(0, 0, 0, 0)))
  }
  isDrawableTile(t) {
    const e = this.getLayer(),
      i = t.getState(),
      s = e.getUseInterimTilesOnError()
    return i == L.LOADED || i == L.EMPTY || (i == L.ERROR && !s)
  }
  getTile(t, e, i, s) {
    const r = s.pixelRatio,
      o = s.viewState.projection,
      a = this.getLayer()
    let h = a.getSource().getTile(t, e, i, r, o)
    return (
      h.getState() == L.ERROR && a.getUseInterimTilesOnError() && a.getPreload() > 0 && (this.newTiles_ = !0),
      this.isDrawableTile(h) || (h = h.getInterimTile()),
      h
    )
  }
  getData(t) {
    const e = this.frameState
    if (!e) return null
    const i = this.getLayer(),
      s = kt(e.pixelToCoordinateTransform, t.slice()),
      r = i.getExtent()
    if (r && !jo(r, s)) return null
    const o = e.pixelRatio,
      a = e.viewState.projection,
      l = e.viewState,
      h = i.getRenderSource(),
      c = h.getTileGridForProjection(l.projection),
      u = h.getTilePixelRatio(e.pixelRatio)
    for (let d = c.getZForResolution(l.resolution); d >= c.getMinZoom(); --d) {
      const f = c.getTileCoordForCoordAndZ(s, d),
        g = h.getTile(d, f[1], f[2], o, a)
      if (!(g instanceof sc || g instanceof xo) || (g instanceof xo && g.getState() === L.EMPTY)) return null
      if (g.getState() !== L.LOADED) continue
      const _ = c.getOrigin(d),
        m = ie(c.getTileSize(d)),
        y = c.getResolution(d),
        p = Math.floor(u * ((s[0] - _[0]) / y - f[1] * m[0])),
        x = Math.floor(u * ((_[1] - s[1]) / y - f[2] * m[1])),
        E = Math.round(u * h.getGutterForProjection(l.projection))
      return this.getImageData(g.getImage(), p + E, x + E)
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
      s = t.viewState,
      r = s.projection,
      o = s.resolution,
      a = s.center,
      l = s.rotation,
      h = t.pixelRatio,
      c = this.getLayer(),
      u = c.getSource(),
      d = u.getRevision(),
      f = u.getTileGridForProjection(r),
      g = f.getZForResolution(o, u.zDirection),
      _ = f.getResolution(g)
    let m = t.extent
    const y = t.viewState.resolution,
      p = u.getTilePixelRatio(h),
      x = Math.round((ot(m) / y) * h),
      E = Math.round((oe(m) / y) * h),
      C = i.extent && Ni(i.extent)
    C && (m = Rn(m, Ni(i.extent)))
    const T = (_ * x) / 2 / p,
      v = (_ * E) / 2 / p,
      S = [a[0] - T, a[1] - v, a[0] + T, a[1] + v],
      P = f.getTileRangeForExtentAndZ(m, g),
      b = {}
    b[g] = {}
    const X = this.createLoadedTileFinder(u, r, b),
      N = this.tmpExtent,
      D = this.tmpTileRange_
    this.newTiles_ = !1
    const nt = l ? lo(s.center, y, l, t.size) : void 0
    for (let It = P.minX; It <= P.maxX; ++It)
      for (let W = P.minY; W <= P.maxY; ++W) {
        if (l && !f.tileCoordIntersectsViewport([g, It, W], nt)) continue
        const H = this.getTile(g, It, W, t)
        if (this.isDrawableTile(H)) {
          const lt = Tt(this)
          if (H.getState() == L.LOADED) {
            b[g][H.tileCoord.toString()] = H
            let le = H.inTransition(lt)
            ;(le && i.opacity !== 1 && (H.endTransition(lt), (le = !1)),
              !this.newTiles_ && (le || !this.renderedTiles.includes(H)) && (this.newTiles_ = !0))
          }
          if (H.getAlpha(lt, t.time) === 1) continue
        }
        const we = f.getTileCoordChildTileRange(H.tileCoord, D, N)
        let Jt = !1
        ;(we && (Jt = X(g + 1, we)), Jt || f.forEachTileCoordParentTileRange(H.tileCoord, X, D, N))
      }
    const I = ((_ / o) * h) / p
    vn(this.pixelTransform, t.size[0] / 2, t.size[1] / 2, 1 / h, 1 / h, l, -x / 2, -E / 2)
    const F = Vu(this.pixelTransform)
    this.useContainer(e, F, this.getBackground(t))
    const w = this.context,
      O = w.canvas
    ;(wh(this.inversePixelTransform, this.pixelTransform),
      vn(this.tempTransform, x / 2, E / 2, I, I, 0, -x / 2, -E / 2),
      O.width != x || O.height != E
        ? ((O.width = x), (O.height = E))
        : this.containerReused || w.clearRect(0, 0, x, E),
      C && this.clipUnrotated(w, t, C),
      u.getInterpolate() || (w.imageSmoothingEnabled = !1),
      this.preRender(w, t),
      (this.renderedTiles.length = 0))
    let Z = Object.keys(b).map(Number)
    Z.sort(Go)
    let Y, st, R
    i.opacity === 1 && (!this.containerReused || u.getOpaque(t.viewState.projection))
      ? (Z = Z.reverse())
      : ((Y = []), (st = []))
    for (let It = Z.length - 1; It >= 0; --It) {
      const W = Z[It],
        H = u.getTilePixelSize(W, h, r),
        Jt = f.getResolution(W) / _,
        lt = H[0] * Jt * I,
        le = H[1] * Jt * I,
        mi = f.getTileCoordForCoordAndZ(fi(S), W),
        ts = f.getTileCoordExtent(mi),
        yi = kt(this.tempTransform, [(p * (ts[0] - S[0])) / _, (p * (S[3] - ts[3])) / _]),
        es = p * u.getGutterForProjection(r),
        Se = b[W]
      for (const cn in Se) {
        const ve = Se[cn],
          is = ve.tileCoord,
          ns = mi[1] - is[1],
          ss = Math.round(yi[0] - (ns - 1) * lt),
          pi = mi[2] - is[2],
          Mr = Math.round(yi[1] - (pi - 1) * le),
          Et = Math.round(yi[0] - ns * lt),
          bt = Math.round(yi[1] - pi * le),
          Bt = ss - Et,
          he = Mr - bt,
          xi = g === W,
          $e = xi && ve.getAlpha(Tt(this), t.time) !== 1
        let Ie = !1
        if (!$e)
          if (Y) {
            R = [Et, bt, Et + Bt, bt, Et + Bt, bt + he, Et, bt + he]
            for (let Ei = 0, rs = Y.length; Ei < rs; ++Ei)
              if (g !== W && W < st[Ei]) {
                const gt = Y[Ei]
                Yn([Et, bt, Et + Bt, bt + he], [gt[0], gt[3], gt[4], gt[7]]) &&
                  (Ie || (w.save(), (Ie = !0)),
                  w.beginPath(),
                  w.moveTo(R[0], R[1]),
                  w.lineTo(R[2], R[3]),
                  w.lineTo(R[4], R[5]),
                  w.lineTo(R[6], R[7]),
                  w.moveTo(gt[6], gt[7]),
                  w.lineTo(gt[4], gt[5]),
                  w.lineTo(gt[2], gt[3]),
                  w.lineTo(gt[0], gt[1]),
                  w.clip())
              }
            ;(Y.push(R), st.push(W))
          } else w.clearRect(Et, bt, Bt, he)
        ;(this.drawTileImage(ve, t, Et, bt, Bt, he, es, xi),
          Y && !$e ? (Ie && w.restore(), this.renderedTiles.unshift(ve)) : this.renderedTiles.push(ve),
          this.updateUsedTiles(t.usedTiles, u, ve))
      }
    }
    return (
      (this.renderedRevision = d),
      (this.renderedResolution = _),
      (this.extentChanged = !this.renderedExtent_ || !ro(this.renderedExtent_, S)),
      (this.renderedExtent_ = S),
      (this.renderedPixelRatio = h),
      (this.renderedProjection = r),
      this.manageTilePyramid(t, u, f, h, r, m, g, c.getPreload()),
      this.scheduleExpireCache(t, u),
      this.postRender(w, t),
      i.extent && w.restore(),
      (w.imageSmoothingEnabled = !0),
      F !== O.style.transform && (O.style.transform = F),
      this.container
    )
  }
  drawTileImage(t, e, i, s, r, o, a, l) {
    const h = this.getTileImage(t)
    if (!h) return
    const c = Tt(this),
      u = e.layerStatesArray[e.layerIndex],
      d = u.opacity * (l ? t.getAlpha(c, e.time) : 1),
      f = d !== this.context.globalAlpha
    ;(f && (this.context.save(), (this.context.globalAlpha = d)),
      this.context.drawImage(h, a, a, h.width - 2 * a, h.height - 2 * a, i, s, r, o),
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
      const i = function (s, r, o) {
        const a = Tt(s)
        a in o.usedTiles && s.expireCache(o.viewState.projection, o.usedTiles[a])
      }.bind(null, e)
      t.postRenderFunctions.push(i)
    }
  }
  updateUsedTiles(t, e, i) {
    const s = Tt(e)
    ;(s in t || (t[s] = {}), (t[s][i.getKey()] = !0))
  }
  manageTilePyramid(t, e, i, s, r, o, a, l, h) {
    const c = Tt(e)
    c in t.wantedTiles || (t.wantedTiles[c] = {})
    const u = t.wantedTiles[c],
      d = t.tileQueue,
      f = i.getMinZoom(),
      g = t.viewState.rotation,
      _ = g ? lo(t.viewState.center, t.viewState.resolution, g, t.size) : void 0
    let m = 0,
      y,
      p,
      x,
      E,
      C,
      T
    for (T = f; T <= a; ++T)
      for (p = i.getTileRangeForExtentAndZ(o, T, p), x = i.getResolution(T), E = p.minX; E <= p.maxX; ++E)
        for (C = p.minY; C <= p.maxY; ++C)
          (g && !i.tileCoordIntersectsViewport([T, E, C], _)) ||
            (a - T <= l
              ? (++m,
                (y = e.getTile(T, E, C, s, r)),
                y.getState() == L.IDLE &&
                  ((u[y.getKey()] = !0),
                  d.isKeyQueued(y.getKey()) || d.enqueue([y, c, i.getTileCoordCenter(y.tileCoord), x])),
                h !== void 0 && h(y))
              : e.useTile(T, E, C, r))
    e.updateCacheSize(m, r)
  }
}
const _s = { PRELOAD: 'preload', USE_INTERIM_TILES_ON_ERROR: 'useInterimTilesOnError' },
  Si = [0, 0, 0],
  Me = 5
class fc {
  constructor(t) {
    ;((this.minZoom = t.minZoom !== void 0 ? t.minZoom : 0),
      (this.resolutions_ = t.resolutions),
      $(
        Du(this.resolutions_, function (s, r) {
          return r - s
        }),
        17,
      ))
    let e
    if (!t.origins) {
      for (let s = 0, r = this.resolutions_.length - 1; s < r; ++s)
        if (!e) e = this.resolutions_[s] / this.resolutions_[s + 1]
        else if (this.resolutions_[s] / this.resolutions_[s + 1] !== e) {
          e = void 0
          break
        }
    }
    ;((this.zoomFactor_ = e),
      (this.maxZoom = this.resolutions_.length - 1),
      (this.origin_ = t.origin !== void 0 ? t.origin : null),
      (this.origins_ = null),
      t.origins !== void 0 &&
        ((this.origins_ = t.origins), $(this.origins_.length == this.resolutions_.length, 20)))
    const i = t.extent
    ;(i !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = fi(i)),
      $((!this.origin_ && this.origins_) || (this.origin_ && !this.origins_), 18),
      (this.tileSizes_ = null),
      t.tileSizes !== void 0 &&
        ((this.tileSizes_ = t.tileSizes), $(this.tileSizes_.length == this.resolutions_.length, 19)),
      (this.tileSize_ = t.tileSize !== void 0 ? t.tileSize : this.tileSizes_ ? null : Ho),
      $((!this.tileSize_ && this.tileSizes_) || (this.tileSize_ && !this.tileSizes_), 22),
      (this.extent_ = i !== void 0 ? i : null),
      (this.fullTileRanges_ = null),
      (this.tmpSize_ = [0, 0]),
      (this.tmpExtent_ = [0, 0, 0, 0]),
      t.sizes !== void 0
        ? (this.fullTileRanges_ = t.sizes.map(function (s, r) {
            const o = new ra(
              Math.min(0, s[0]),
              Math.max(s[0] - 1, -1),
              Math.min(0, s[1]),
              Math.max(s[1] - 1, -1),
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
    const s = this.getTileRangeForExtentAndZ(t, e)
    for (let r = s.minX, o = s.maxX; r <= o; ++r) for (let a = s.minY, l = s.maxY; a <= l; ++a) i([e, r, a])
  }
  forEachTileCoordParentTileRange(t, e, i, s) {
    let r,
      o,
      a,
      l = null,
      h = t[0] - 1
    for (
      this.zoomFactor_ === 2 ? ((o = t[1]), (a = t[2])) : (l = this.getTileCoordExtent(t, s));
      h >= this.minZoom;

    ) {
      if (
        (this.zoomFactor_ === 2
          ? ((o = Math.floor(o / 2)), (a = Math.floor(a / 2)), (r = wi(o, o, a, a, i)))
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
        return wi(r, r + 1, o, o + 1, e)
      }
      const s = this.getTileCoordExtent(t, i || this.tmpExtent_)
      return this.getTileRangeForExtentAndZ(s, t[0] + 1, e)
    }
    return null
  }
  getTileRangeForTileCoordAndZ(t, e, i) {
    if (e > this.maxZoom || e < this.minZoom) return null
    const s = t[0],
      r = t[1],
      o = t[2]
    if (e === s) return wi(r, o, r, o, i)
    if (this.zoomFactor_) {
      const l = Math.pow(this.zoomFactor_, e - s),
        h = Math.floor(r * l),
        c = Math.floor(o * l)
      if (e < s) return wi(h, h, c, c, i)
      const u = Math.floor(l * (r + 1)) - 1,
        d = Math.floor(l * (o + 1)) - 1
      return wi(h, u, c, d, i)
    }
    const a = this.getTileCoordExtent(t, this.tmpExtent_)
    return this.getTileRangeForExtentAndZ(a, e, i)
  }
  getTileRangeForExtentAndZ(t, e, i) {
    this.getTileCoordForXYAndZ_(t[0], t[3], e, !1, Si)
    const s = Si[1],
      r = Si[2]
    this.getTileCoordForXYAndZ_(t[2], t[1], e, !0, Si)
    const o = Si[1],
      a = Si[2]
    return wi(s, o, r, a, i)
  }
  getTileCoordCenter(t) {
    const e = this.getOrigin(t[0]),
      i = this.getResolution(t[0]),
      s = ie(this.getTileSize(t[0]), this.tmpSize_)
    return [e[0] + (t[1] + 0.5) * s[0] * i, e[1] - (t[2] + 0.5) * s[1] * i]
  }
  getTileCoordExtent(t, e) {
    const i = this.getOrigin(t[0]),
      s = this.getResolution(t[0]),
      r = ie(this.getTileSize(t[0]), this.tmpSize_),
      o = i[0] + t[1] * r[0] * s,
      a = i[1] - (t[2] + 1) * r[1] * s,
      l = o + r[0] * s,
      h = a + r[1] * s
    return Wn(o, a, l, h, e)
  }
  getTileCoordForCoordAndResolution(t, e, i) {
    return this.getTileCoordForXYAndResolution_(t[0], t[1], e, !1, i)
  }
  getTileCoordForXYAndResolution_(t, e, i, s, r) {
    const o = this.getZForResolution(i),
      a = i / this.getResolution(o),
      l = this.getOrigin(o),
      h = ie(this.getTileSize(o), this.tmpSize_)
    let c = (a * (t - l[0])) / i / h[0],
      u = (a * (l[1] - e)) / i / h[1]
    return (
      s ? ((c = us(c, Me) - 1), (u = us(u, Me) - 1)) : ((c = cs(c, Me)), (u = cs(u, Me))),
      xl(o, c, u, r)
    )
  }
  getTileCoordForXYAndZ_(t, e, i, s, r) {
    const o = this.getOrigin(i),
      a = this.getResolution(i),
      l = ie(this.getTileSize(i), this.tmpSize_)
    let h = (t - o[0]) / a / l[0],
      c = (o[1] - e) / a / l[1]
    return (
      s ? ((h = us(h, Me) - 1), (c = us(c, Me) - 1)) : ((h = cs(h, Me)), (c = cs(c, Me))),
      xl(i, h, c, r)
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
    const i = Xo(this.resolutions_, t, e || 0)
    return at(i, this.minZoom, this.maxZoom)
  }
  tileCoordIntersectsViewport(t, e) {
    return Yh(e, 0, e.length, 2, this.getTileCoordExtent(t))
  }
  calculateTileRanges_(t) {
    const e = this.resolutions_.length,
      i = new Array(e)
    for (let s = this.minZoom; s < e; ++s) i[s] = this.getTileRangeForExtentAndZ(t, s)
    this.fullTileRanges_ = i
  }
}
const Xr = { TILELOADSTART: 'tileloadstart', TILELOADEND: 'tileloadend', TILELOADERROR: 'tileloaderror' }
function gc(n) {
  let t = n.getDefaultTileGrid()
  return (t || ((t = Rg(n)), n.setDefaultTileGrid(t)), t)
}
function xg(n, t, e) {
  const i = t[0],
    s = n.getTileCoordCenter(t),
    r = oa(e)
  if (!jo(r, s)) {
    const o = ot(r),
      a = Math.ceil((r[0] - s[0]) / o)
    return ((s[0] += o * a), n.getTileCoordForCoordAndZ(s, i))
  }
  return t
}
function Eg(n, t, e, i) {
  i = i !== void 0 ? i : 'top-left'
  const s = _c(n, t, e)
  return new fc({ extent: n, origin: Ju(n, i), resolutions: s, tileSize: e })
}
function Cg(n) {
  const t = n || {},
    e = t.extent || Ht('EPSG:3857').getExtent(),
    i = {
      extent: e,
      minZoom: t.minZoom,
      tileSize: t.tileSize,
      resolutions: _c(e, t.maxZoom, t.tileSize, t.maxResolution),
    }
  return new fc(i)
}
function _c(n, t, e, i) {
  ;((t = t !== void 0 ? t : cf), (e = ie(e !== void 0 ? e : Ho)))
  const s = oe(n),
    r = ot(n)
  i = i > 0 ? i : Math.max(r / e[0], s / e[1])
  const o = t + 1,
    a = new Array(o)
  for (let l = 0; l < o; ++l) a[l] = i / Math.pow(2, l)
  return a
}
function Rg(n, t, e, i) {
  const s = oa(n)
  return Eg(s, t, e, i)
}
function oa(n) {
  n = Ht(n)
  let t = n.getExtent()
  if (!t) {
    const e = (180 * Wo.degrees) / n.getMetersPerUnit()
    t = Wn(-e, -e, e, e)
  }
  return t
}
class Tg extends If {
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
    ;(this.tileGrid && ie(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), e),
      (this.tileCache = new dc(t.cacheSize || 0)),
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
  forEachLoadedTile(t, e, i, s) {
    const r = this.getTileCacheForProjection(t)
    if (!r) return !1
    let o = !0,
      a,
      l,
      h
    for (let c = i.minX; c <= i.maxX; ++c)
      for (let u = i.minY; u <= i.maxY; ++u)
        ((l = xr(e, c, u)),
          (h = !1),
          r.containsKey(l) && ((a = r.get(l)), (h = a.getState() === L.LOADED), h && (h = s(a) !== !1)),
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
  getTile(t, e, i, s, r) {
    return z()
  }
  getTileGrid() {
    return this.tileGrid
  }
  getTileGridForProjection(t) {
    return this.tileGrid ? this.tileGrid : gc(t)
  }
  getTileCacheForProjection(t) {
    const e = this.getProjection()
    return ($(e === null || Li(e, t), 68), this.tileCache)
  }
  getTilePixelRatio(t) {
    return this.tilePixelRatio_
  }
  getTilePixelSize(t, e, i) {
    const s = this.getTileGridForProjection(i),
      r = this.getTilePixelRatio(e),
      o = ie(s.getTileSize(t), this.tmpSize)
    return r == 1 ? o : Ud(o, r, this.tmpSize)
  }
  getTileCoordForTileUrlFunction(t, e) {
    e = e !== void 0 ? e : this.getProjection()
    const i = this.getTileGridForProjection(e)
    return (this.getWrapX() && e.isGlobal() && (t = xg(i, t, e)), ug(t, i) ? t : null)
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
  useTile(t, e, i, s) {}
}
class wg extends Ze {
  constructor(t, e) {
    ;(super(t), (this.tile = e))
  }
}
function Sg(n, t) {
  const e = /\{z\}/g,
    i = /\{x\}/g,
    s = /\{y\}/g,
    r = /\{-y\}/g
  return function (o, a, l) {
    if (o)
      return n
        .replace(e, o[0].toString())
        .replace(i, o[1].toString())
        .replace(s, o[2].toString())
        .replace(r, function () {
          const h = o[0],
            c = t.getFullTileRange(h)
          return ($(c, 55), (c.getHeight() - o[2] - 1).toString())
        })
  }
}
function vg(n, t) {
  const e = n.length,
    i = new Array(e)
  for (let s = 0; s < e; ++s) i[s] = Sg(n[s], t)
  return Ig(i)
}
function Ig(n) {
  return n.length === 1
    ? n[0]
    : function (t, e, i) {
        if (!t) return
        const s = cg(t),
          r = Ui(s, n.length)
        return n[r](t, e, i)
      }
}
function Mg(n) {
  const t = []
  let e = /\{([a-z])-([a-z])\}/.exec(n)
  if (e) {
    const i = e[1].charCodeAt(0),
      s = e[2].charCodeAt(0)
    let r
    for (r = i; r <= s; ++r) t.push(n.replace(e[0], String.fromCharCode(r)))
    return t
  }
  if (((e = /\{(\d+)-(\d+)\}/.exec(n)), e)) {
    const i = parseInt(e[2], 10)
    for (let s = parseInt(e[1], 10); s <= i; s++) t.push(n.replace(e[0], s.toString()))
    return t
  }
  return (t.push(n), t)
}
class aa extends Tg {
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
      (this.generateTileUrlFunction_ = this.tileUrlFunction === aa.prototype.tileUrlFunction),
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
      i = Tt(e),
      s = e.getState()
    let r
    ;(s == L.LOADING
      ? ((this.tileLoadingKeys_[i] = !0), (r = Xr.TILELOADSTART))
      : i in this.tileLoadingKeys_ &&
        (delete this.tileLoadingKeys_[i],
        (r = s == L.ERROR ? Xr.TILELOADERROR : s == L.LOADED ? Xr.TILELOADEND : void 0)),
      r != null && this.dispatchEvent(new wg(r, e)))
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
    const e = Mg(t)
    ;((this.urls = e), this.setUrls(e))
  }
  setUrls(t) {
    this.urls = t
    const e = t.join(`
`)
    this.generateTileUrlFunction_ ? this.setTileUrlFunction(vg(t, this.tileGrid), e) : this.setKey(e)
  }
  tileUrlFunction(t, e, i) {}
  useTile(t, e, i) {
    const s = xr(t, e, i)
    this.tileCache.containsKey(s) && this.tileCache.get(s)
  }
}
class Pg extends ta {
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
    return this.get(_s.PRELOAD)
  }
  setPreload(t) {
    this.set(_s.PRELOAD, t)
  }
  getUseInterimTilesOnError() {
    return this.get(_s.USE_INTERIM_TILES_ON_ERROR)
  }
  setUseInterimTilesOnError(t) {
    this.set(_s.USE_INTERIM_TILES_ON_ERROR, t)
  }
  getData(t) {
    return super.getData(t)
  }
}
class Lg extends Pg {
  constructor(t) {
    super(t)
  }
  createRenderer() {
    return new pg(this)
  }
}
class Ag extends aa {
  constructor(t) {
    ;(super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      opaque: t.opaque,
      projection: t.projection,
      state: t.state,
      tileGrid: t.tileGrid,
      tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : Fg,
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
      (this.tileClass = t.tileClass !== void 0 ? t.tileClass : sc),
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
    for (const s in this.tileCacheForProjection) {
      const r = this.tileCacheForProjection[s]
      r.expireCache(r == i ? e : {})
    }
  }
  getGutterForProjection(t) {
    return this.getProjection() && t && !Li(this.getProjection(), t) ? 0 : this.getGutter()
  }
  getGutter() {
    return 0
  }
  getKey() {
    let t = super.getKey()
    return (this.getInterpolate() || (t += ':disable-interpolation'), t)
  }
  getOpaque(t) {
    return this.getProjection() && t && !Li(this.getProjection(), t) ? !1 : super.getOpaque(t)
  }
  getTileGridForProjection(t) {
    const e = this.getProjection()
    if (this.tileGrid && (!e || Li(e, t))) return this.tileGrid
    const i = Tt(t)
    return (
      i in this.tileGridForProjection || (this.tileGridForProjection[i] = gc(t)),
      this.tileGridForProjection[i]
    )
  }
  getTileCacheForProjection(t) {
    const e = this.getProjection()
    if (!e || Li(e, t)) return this.tileCache
    const i = Tt(t)
    return (
      i in this.tileCacheForProjection ||
        (this.tileCacheForProjection[i] = new dc(this.tileCache.highWaterMark)),
      this.tileCacheForProjection[i]
    )
  }
  createTile_(t, e, i, s, r, o) {
    const a = [t, e, i],
      l = this.getTileCoordForTileUrlFunction(a, r),
      h = l ? this.tileUrlFunction(l, s, r) : void 0,
      c = new this.tileClass(
        a,
        h !== void 0 ? L.IDLE : L.EMPTY,
        h !== void 0 ? h : '',
        this.crossOrigin,
        this.tileLoadFunction,
        this.tileOptions,
      )
    return ((c.key = o), c.addEventListener(G.CHANGE, this.handleTileChange.bind(this)), c)
  }
  getTile(t, e, i, s, r) {
    const o = this.getProjection()
    if (!o || !r || Li(o, r)) return this.getTileInternal(t, e, i, s, o || r)
    const a = this.getTileCacheForProjection(r),
      l = [t, e, i]
    let h
    const c = uc(l)
    a.containsKey(c) && (h = a.get(c))
    const u = this.getKey()
    if (h && h.key == u) return h
    const d = this.getTileGridForProjection(o),
      f = this.getTileGridForProjection(r),
      g = this.getTileCoordForTileUrlFunction(l, r),
      _ = new xo(
        o,
        d,
        r,
        f,
        l,
        g,
        this.getTilePixelRatio(s),
        this.getGutter(),
        (m, y, p, x) => this.getTileInternal(m, y, p, x, o),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.getInterpolate(),
      )
    return ((_.key = u), h ? ((_.interimTile = h), _.refreshInterimChain(), a.replace(c, _)) : a.set(c, _), _)
  }
  getTileInternal(t, e, i, s, r) {
    let o = null
    const a = xr(t, e, i),
      l = this.getKey()
    if (!this.tileCache.containsKey(a)) ((o = this.createTile_(t, e, i, s, r, l)), this.tileCache.set(a, o))
    else if (((o = this.tileCache.get(a)), o.key != l)) {
      const h = o
      ;((o = this.createTile_(t, e, i, s, r, l)),
        h.getState() == L.IDLE ? (o.interimTile = h.interimTile) : (o.interimTile = h),
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
    const i = Ht(t)
    if (i) {
      const s = Tt(i)
      s in this.tileGridForProjection || (this.tileGridForProjection[s] = e)
    }
  }
  clear() {
    super.clear()
    for (const t in this.tileCacheForProjection) this.tileCacheForProjection[t].clear()
  }
}
function Fg(n, t) {
  n.getImage().src = t
}
class bg extends Ag {
  constructor(t) {
    t = t || {}
    const e = t.projection !== void 0 ? t.projection : 'EPSG:3857',
      i =
        t.tileGrid !== void 0
          ? t.tileGrid
          : Cg({
              extent: oa(e),
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
const Og =
  '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.'
class Dg extends bg {
  constructor(t) {
    t = t || {}
    let e
    t.attributions !== void 0 ? (e = t.attributions) : (e = [Og])
    const i = t.crossOrigin !== void 0 ? t.crossOrigin : 'anonymous',
      s = t.url !== void 0 ? t.url : 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
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
      url: s,
      wrapX: t.wrapX,
      zDirection: t.zDirection,
    })
  }
}
const kg = {
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
class mc extends Error {
  constructor(t) {
    const e = kg[t]
    ;(super(e), (this.code = t), (this.name = 'AssertionError'), (this.message = e))
  }
}
class xt {
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
const yc = { PROPERTYCHANGE: 'propertychange' }
class Ng {
  constructor() {
    this.disposed = !1
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal())
  }
  disposeInternal() {}
}
function Gg(n, t, e) {
  let i, s
  e = e || Mn
  let r = 0,
    o = n.length,
    a = !1
  for (; r < o; ) ((i = r + ((o - r) >> 1)), (s = +e(n[i], t)), s < 0 ? (r = i + 1) : ((o = i), (a = !s)))
  return a ? r : ~r
}
function Mn(n, t) {
  return n > t ? 1 : n < t ? -1 : 0
}
function pc(n, t, e) {
  if (n[0] <= t) return 0
  const i = n.length
  if (t <= n[i - 1]) return i - 1
  if (typeof e == 'function') {
    for (let s = 1; s < i; ++s) {
      const r = n[s]
      if (r === t) return s
      if (r < t) return e(t, n[s - 1], r) > 0 ? s - 1 : s
    }
    return i - 1
  }
  if (e > 0) {
    for (let s = 1; s < i; ++s) if (n[s] < t) return s - 1
    return i - 1
  }
  if (e < 0) {
    for (let s = 1; s < i; ++s) if (n[s] <= t) return s
    return i - 1
  }
  for (let s = 1; s < i; ++s) {
    if (n[s] == t) return s
    if (n[s] < t) return n[s - 1] - t < t - n[s] ? s - 1 : s
  }
  return i - 1
}
function Xg(n, t, e) {
  for (; t < e; ) {
    const i = n[t]
    ;((n[t] = n[e]), (n[e] = i), ++t, --e)
  }
}
function re(n, t) {
  const e = Array.isArray(t) ? t : [t],
    i = e.length
  for (let s = 0; s < i; s++) n[n.length] = e[s]
}
function gi(n, t) {
  const e = n.length
  if (e !== t.length) return !1
  for (let i = 0; i < e; i++) if (n[i] !== t[i]) return !1
  return !0
}
function Qi() {
  return !0
}
function la() {
  return !1
}
function Pn() {}
function zg(n) {
  let t = !1,
    e,
    i,
    s
  return function () {
    const r = Array.prototype.slice.call(arguments)
    return (
      (!t || this !== s || !gi(r, i)) && ((t = !0), (s = this), (i = r), (e = n.apply(this, arguments))),
      e
    )
  }
}
function ha(n) {
  for (const t in n) delete n[t]
}
function tn(n) {
  let t
  for (t in n) return !1
  return !t
}
class xc extends Ng {
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
      s = i[t] || (i[t] = [])
    s.includes(e) || s.push(e)
  }
  dispatchEvent(t) {
    const e = typeof t == 'string',
      i = e ? t : t.type,
      s = this.listeners_ && this.listeners_[i]
    if (!s) return
    const r = e ? new xt(t) : t
    r.target || (r.target = this.eventTarget_ || this)
    const o = this.dispatching_ || (this.dispatching_ = {}),
      a = this.pendingRemovals_ || (this.pendingRemovals_ = {})
    ;(i in o || ((o[i] = 0), (a[i] = 0)), ++o[i])
    let l
    for (let h = 0, c = s.length; h < c; ++h)
      if (
        ('handleEvent' in s[h] ? (l = s[h].handleEvent(r)) : (l = s[h].call(this, r)),
        l === !1 || r.propagationStopped)
      ) {
        l = !1
        break
      }
    if (--o[i] === 0) {
      let h = a[i]
      for (delete a[i]; h--; ) this.removeEventListener(i, Pn)
      delete o[i]
    }
    return l
  }
  disposeInternal() {
    this.listeners_ && ha(this.listeners_)
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
      const s = i.indexOf(e)
      s !== -1 &&
        (this.pendingRemovals_ && t in this.pendingRemovals_
          ? ((i[s] = Pn), ++this.pendingRemovals_[t])
          : (i.splice(s, 1), i.length === 0 && delete this.listeners_[t]))
    }
  }
}
const dt = {
  CHANGE: 'change',
  ERROR: 'error',
  CONTEXTMENU: 'contextmenu',
  DBLCLICK: 'dblclick',
  LOAD: 'load',
}
function yt(n, t, e, i, s) {
  if ((i && i !== n && (e = e.bind(i)), s)) {
    const o = e
    e = function () {
      ;(n.removeEventListener(t, e), o.apply(this, arguments))
    }
  }
  const r = { target: n, type: t, listener: e }
  return (n.addEventListener(t, e), r)
}
function Ks(n, t, e, i) {
  return yt(n, t, e, i, !0)
}
function Ft(n) {
  n && n.target && (n.target.removeEventListener(n.type, n.listener), ha(n))
}
class Zn extends xc {
  constructor() {
    ;(super(),
      (this.on = this.onInternal),
      (this.once = this.onceInternal),
      (this.un = this.unInternal),
      (this.revision_ = 0))
  }
  changed() {
    ;(++this.revision_, this.dispatchEvent(dt.CHANGE))
  }
  getRevision() {
    return this.revision_
  }
  onInternal(t, e) {
    if (Array.isArray(t)) {
      const i = t.length,
        s = new Array(i)
      for (let r = 0; r < i; ++r) s[r] = yt(this, t[r], e)
      return s
    }
    return yt(this, t, e)
  }
  onceInternal(t, e) {
    let i
    if (Array.isArray(t)) {
      const s = t.length
      i = new Array(s)
      for (let r = 0; r < s; ++r) i[r] = Ks(this, t[r], e)
    } else i = Ks(this, t, e)
    return ((e.ol_key = i), i)
  }
  unInternal(t, e) {
    const i = e.ol_key
    if (i) Ns(i)
    else if (Array.isArray(t)) for (let s = 0, r = t.length; s < r; ++s) this.removeEventListener(t[s], e)
    else this.removeEventListener(t, e)
  }
}
Zn.prototype.on
Zn.prototype.once
Zn.prototype.un
function Ns(n) {
  if (Array.isArray(n)) for (let t = 0, e = n.length; t < e; ++t) Ft(n[t])
  else Ft(n)
}
function A() {
  throw new Error('Unimplemented abstract method.')
}
let jg = 0
function K(n) {
  return n.ol_uid || (n.ol_uid = String(++jg))
}
class Tl extends xt {
  constructor(t, e, i) {
    ;(super(t), (this.key = e), (this.oldValue = i))
  }
}
class Te extends Zn {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      K(this),
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
      this.hasListener(i) && this.dispatchEvent(new Tl(i, t, e)),
      (i = yc.PROPERTYCHANGE),
      this.hasListener(i) && this.dispatchEvent(new Tl(i, t, e)))
  }
  addChangeListener(t, e) {
    this.addEventListener(`change:${t}`, e)
  }
  removeChangeListener(t, e) {
    this.removeEventListener(`change:${t}`, e)
  }
  set(t, e, i) {
    const s = this.values_ || (this.values_ = {})
    if (i) s[t] = e
    else {
      const r = s[t]
      ;((s[t] = e), r !== e && this.notify(t, r))
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
      ;(delete this.values_[t], tn(this.values_) && (this.values_ = null), e || this.notify(t, i))
    }
  }
}
const ne = { ADD: 'add', REMOVE: 'remove' },
  wl = { LENGTH: 'length' }
class ms extends xt {
  constructor(t, e, i) {
    ;(super(t), (this.element = e), (this.index = i))
  }
}
class oi extends Te {
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
      for (let i = 0, s = this.array_.length; i < s; ++i) this.assertUnique_(this.array_[i], i)
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
    for (let i = 0, s = e.length; i < s; ++i) t(e[i], i, e)
  }
  getArray() {
    return this.array_
  }
  item(t) {
    return this.array_[t]
  }
  getLength() {
    return this.get(wl.LENGTH)
  }
  insertAt(t, e) {
    if (t < 0 || t > this.getLength()) throw new Error('Index out of bounds: ' + t)
    ;(this.unique_ && this.assertUnique_(e),
      this.array_.splice(t, 0, e),
      this.updateLength_(),
      this.dispatchEvent(new ms(ne.ADD, e, t)))
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
    for (let i = 0, s = e.length; i < s; ++i) if (e[i] === t) return this.removeAt(i)
  }
  removeAt(t) {
    if (t < 0 || t >= this.getLength()) return
    const e = this.array_[t]
    return (this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(new ms(ne.REMOVE, e, t)), e)
  }
  setAt(t, e) {
    const i = this.getLength()
    if (t >= i) {
      this.insertAt(t, e)
      return
    }
    if (t < 0) throw new Error('Index out of bounds: ' + t)
    this.unique_ && this.assertUnique_(e, t)
    const s = this.array_[t]
    ;((this.array_[t] = e),
      this.dispatchEvent(new ms(ne.REMOVE, s, t)),
      this.dispatchEvent(new ms(ne.ADD, e, t)))
  }
  updateLength_() {
    this.set(wl.LENGTH, this.array_.length)
  }
  assertUnique_(t, e) {
    for (let i = 0, s = this.array_.length; i < s; ++i) if (this.array_[i] === t && i !== e) throw new mc(58)
  }
}
function et(n, t) {
  if (!n) throw new mc(t)
}
class pt extends Te {
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
    const t = new pt(this.hasProperties() ? this.getProperties() : null)
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
    this.geometryChangeKey_ && (Ft(this.geometryChangeKey_), (this.geometryChangeKey_ = null))
    const t = this.getGeometry()
    ;(t && (this.geometryChangeKey_ = yt(t, dt.CHANGE, this.handleGeometryChange_, this)), this.changed())
  }
  setGeometry(t) {
    this.set(this.geometryName_, t)
  }
  setStyle(t) {
    ;((this.style_ = t), (this.styleFunction_ = t ? Wg(t) : void 0), this.changed())
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
function Wg(n) {
  if (typeof n == 'function') return n
  let t
  return (
    Array.isArray(n) ? (t = n) : (et(typeof n.getZIndex == 'function', 41), (t = [n])),
    function () {
      return t
    }
  )
}
const rt = { UNKNOWN: 0, INTERSECTING: 1, ABOVE: 2, RIGHT: 4, BELOW: 8, LEFT: 16 }
function Lt(n) {
  const t = ae()
  for (let e = 0, i = n.length; e < i; ++e) Tc(t, n[e])
  return t
}
function Kn(n, t, e) {
  return e
    ? ((e[0] = n[0] - t), (e[1] = n[1] - t), (e[2] = n[2] + t), (e[3] = n[3] + t), e)
    : [n[0] - t, n[1] - t, n[2] + t, n[3] + t]
}
function Yg(n, t) {
  return n.slice()
}
function _i(n, t, e) {
  let i, s
  return (
    t < n[0] ? (i = n[0] - t) : n[2] < t ? (i = t - n[2]) : (i = 0),
    e < n[1] ? (s = n[1] - e) : n[3] < e ? (s = e - n[3]) : (s = 0),
    i * i + s * s
  )
}
function Bg(n, t) {
  return ca(n, t[0], t[1])
}
function Gi(n, t) {
  return n[0] <= t[0] && t[2] <= n[2] && n[1] <= t[1] && t[3] <= n[3]
}
function ca(n, t, e) {
  return n[0] <= t && t <= n[2] && n[1] <= e && e <= n[3]
}
function Eo(n, t) {
  const e = n[0],
    i = n[1],
    s = n[2],
    r = n[3],
    o = t[0],
    a = t[1]
  let l = rt.UNKNOWN
  return (
    o < e ? (l = l | rt.LEFT) : o > s && (l = l | rt.RIGHT),
    a < i ? (l = l | rt.BELOW) : a > r && (l = l | rt.ABOVE),
    l === rt.UNKNOWN && (l = rt.INTERSECTING),
    l
  )
}
function ae() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0]
}
function hi(n, t, e, i, s) {
  return s ? ((s[0] = n), (s[1] = t), (s[2] = e), (s[3] = i), s) : [n, t, e, i]
}
function ua(n) {
  return hi(1 / 0, 1 / 0, -1 / 0, -1 / 0, n)
}
function Gs(n, t) {
  const e = n[0],
    i = n[1]
  return hi(e, i, e, i, t)
}
function Ec(n, t, e, i, s) {
  const r = ua(s)
  return wc(r, n, t, e, i)
}
function Cc(n, t) {
  return n[0] == t[0] && n[2] == t[2] && n[1] == t[1] && n[3] == t[3]
}
function Rc(n, t) {
  return (
    t[0] < n[0] && (n[0] = t[0]),
    t[2] > n[2] && (n[2] = t[2]),
    t[1] < n[1] && (n[1] = t[1]),
    t[3] > n[3] && (n[3] = t[3]),
    n
  )
}
function Tc(n, t) {
  ;(t[0] < n[0] && (n[0] = t[0]),
    t[0] > n[2] && (n[2] = t[0]),
    t[1] < n[1] && (n[1] = t[1]),
    t[1] > n[3] && (n[3] = t[1]))
}
function wc(n, t, e, i, s) {
  for (; e < i; e += s) Vg(n, t[e], t[e + 1])
  return n
}
function Vg(n, t, e) {
  ;((n[0] = Math.min(n[0], t)),
    (n[1] = Math.min(n[1], e)),
    (n[2] = Math.max(n[2], t)),
    (n[3] = Math.max(n[3], e)))
}
function Sc(n, t) {
  let e
  return ((e = t(vc(n))), e || ((e = t(Ic(n))), e) || ((e = t(Pc(n))), e) || ((e = t(Mc(n))), e) ? e : !1)
}
function vc(n) {
  return [n[0], n[1]]
}
function Ic(n) {
  return [n[2], n[1]]
}
function en(n) {
  return [(n[0] + n[2]) / 2, (n[1] + n[3]) / 2]
}
function Ug(n, t, e, i, s) {
  const [r, o, a, l, h, c, u, d] = Zg(n, t, e, i)
  return hi(Math.min(r, a, h, u), Math.min(o, l, c, d), Math.max(r, a, h, u), Math.max(o, l, c, d), s)
}
function Zg(n, t, e, i) {
  const s = (t * i[0]) / 2,
    r = (t * i[1]) / 2,
    o = Math.cos(e),
    a = Math.sin(e),
    l = s * o,
    h = s * a,
    c = r * o,
    u = r * a,
    d = n[0],
    f = n[1]
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
function Ln(n) {
  return n[3] - n[1]
}
function Mc(n) {
  return [n[0], n[3]]
}
function Pc(n) {
  return [n[2], n[3]]
}
function jt(n) {
  return n[2] - n[0]
}
function zt(n, t) {
  return n[0] <= t[2] && n[2] >= t[0] && n[1] <= t[3] && n[3] >= t[1]
}
function Lc(n) {
  return n[2] < n[0] || n[3] < n[1]
}
function Kg(n, t) {
  return t ? ((t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t) : n
}
function $g(n, t, e) {
  let i = !1
  const s = Eo(n, t),
    r = Eo(n, e)
  if (s === rt.INTERSECTING || r === rt.INTERSECTING) i = !0
  else {
    const o = n[0],
      a = n[1],
      l = n[2],
      h = n[3],
      c = t[0],
      u = t[1],
      d = e[0],
      f = e[1],
      g = (f - u) / (d - c)
    let _, m
    ;(r & rt.ABOVE && !(s & rt.ABOVE) && ((_ = d - (f - h) / g), (i = _ >= o && _ <= l)),
      !i && r & rt.RIGHT && !(s & rt.RIGHT) && ((m = f - (d - l) * g), (i = m >= a && m <= h)),
      !i && r & rt.BELOW && !(s & rt.BELOW) && ((_ = d - (f - a) / g), (i = _ >= o && _ <= l)),
      !i && r & rt.LEFT && !(s & rt.LEFT) && ((m = f - (d - o) * g), (i = m >= a && m <= h)))
  }
  return i
}
function Ac(n, t) {
  const e = t.getExtent(),
    i = en(n)
  if (t.canWrapX() && (i[0] < e[0] || i[0] >= e[2])) {
    const s = jt(e),
      o = Math.floor((i[0] - e[0]) / s) * s
    ;((n[0] -= o), (n[2] -= o))
  }
  return n
}
function Hg(n, t) {
  if (t.canWrapX()) {
    const e = t.getExtent()
    if (!isFinite(n[0]) || !isFinite(n[2])) return [[e[0], n[1], e[2], n[3]]]
    Ac(n, t)
    const i = jt(e)
    if (jt(n) > i) return [[e[0], n[1], e[2], n[3]]]
    if (n[0] < e[0])
      return [
        [n[0] + i, n[1], e[2], n[3]],
        [e[0], n[1], n[2], n[3]],
      ]
    if (n[2] > e[2])
      return [
        [n[0], n[1], e[2], n[3]],
        [e[0], n[1], n[2] - i, n[3]],
      ]
  }
  return [n]
}
const Fc = {
  radians: 6370997 / (2 * Math.PI),
  degrees: (2 * Math.PI * 6370997) / 360,
  ft: 0.3048,
  m: 1,
  'us-ft': 1200 / 3937,
}
class bc {
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
    return this.metersPerUnit_ || Fc[this.units_]
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
const $n = 6378137,
  Xi = Math.PI * $n,
  qg = [-Xi, -Xi, Xi, Xi],
  Jg = [-180, -85, 180, 85],
  ys = $n * Math.log(Math.tan(Math.PI / 2))
class vi extends bc {
  constructor(t) {
    super({
      code: t,
      units: 'm',
      extent: qg,
      global: !0,
      worldExtent: Jg,
      getPointResolution: function (e, i) {
        return e / Math.cosh(i[1] / $n)
      },
    })
  }
}
const Sl = [
  new vi('EPSG:3857'),
  new vi('EPSG:102100'),
  new vi('EPSG:102113'),
  new vi('EPSG:900913'),
  new vi('http://www.opengis.net/def/crs/EPSG/0/3857'),
  new vi('http://www.opengis.net/gml/srs/epsg.xml#3857'),
]
function Qg(n, t, e) {
  const i = n.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = n.slice()) : (t = new Array(i))))
  for (let s = 0; s < i; s += e) {
    t[s] = (Xi * n[s]) / 180
    let r = $n * Math.log(Math.tan((Math.PI * (+n[s + 1] + 90)) / 360))
    ;(r > ys ? (r = ys) : r < -ys && (r = -ys), (t[s + 1] = r))
  }
  return t
}
function t_(n, t, e) {
  const i = n.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = n.slice()) : (t = new Array(i))))
  for (let s = 0; s < i; s += e)
    ((t[s] = (180 * n[s]) / Xi), (t[s + 1] = (360 * Math.atan(Math.exp(n[s + 1] / $n))) / Math.PI - 90))
  return t
}
const e_ = 6378137,
  vl = [-180, -90, 180, 90],
  i_ = (Math.PI * e_) / 180
class Je extends bc {
  constructor(t, e) {
    super({
      code: t,
      units: 'degrees',
      extent: vl,
      axisOrientation: e,
      global: !0,
      metersPerUnit: i_,
      worldExtent: vl,
    })
  }
}
const Il = [
  new Je('CRS:84'),
  new Je('EPSG:4326', 'neu'),
  new Je('urn:ogc:def:crs:OGC:1.3:CRS84'),
  new Je('urn:ogc:def:crs:OGC:2:84'),
  new Je('http://www.opengis.net/def/crs/OGC/1.3/CRS84'),
  new Je('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
  new Je('http://www.opengis.net/def/crs/EPSG/0/4326', 'neu'),
]
let Co = {}
function n_(n) {
  return Co[n] || Co[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] || null
}
function s_(n, t) {
  Co[n] = t
}
let Ki = {}
function $s(n, t, e) {
  const i = n.getCode(),
    s = t.getCode()
  ;(i in Ki || (Ki[i] = {}), (Ki[i][s] = e))
}
function r_(n, t) {
  let e
  return (n in Ki && t in Ki[n] && (e = Ki[n][t]), e)
}
function ut(n, t, e) {
  return Math.min(Math.max(n, t), e)
}
function o_(n, t, e, i, s, r) {
  const o = s - e,
    a = r - i
  if (o !== 0 || a !== 0) {
    const l = ((n - e) * o + (t - i) * a) / (o * o + a * a)
    l > 1 ? ((e = s), (i = r)) : l > 0 && ((e += o * l), (i += a * l))
  }
  return ye(n, t, e, i)
}
function ye(n, t, e, i) {
  const s = e - n,
    r = i - t
  return s * s + r * r
}
function Ml(n) {
  return (n * 180) / Math.PI
}
function $i(n) {
  return (n * Math.PI) / 180
}
function Hs(n, t) {
  const e = n % t
  return e * t < 0 ? e + t : e
}
function At(n, t, e) {
  return n + e * (t - n)
}
function Oc(n, t) {
  const e = Math.pow(10, t)
  return Math.round(n * e) / e
}
function a_(n, t) {
  return ((n[0] += +t[0]), (n[1] += +t[1]), n)
}
function l_(n, t) {
  const e = t.getRadius(),
    i = t.getCenter(),
    s = i[0],
    r = i[1],
    o = n[0],
    a = n[1]
  let l = o - s
  const h = a - r
  l === 0 && h === 0 && (l = 1)
  const c = Math.sqrt(l * l + h * h),
    u = s + (e * l) / c,
    d = r + (e * h) / c
  return [u, d]
}
function da(n, t) {
  const e = n[0],
    i = n[1],
    s = t[0],
    r = t[1],
    o = s[0],
    a = s[1],
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
function Zt(n, t) {
  let e = !0
  for (let i = n.length - 1; i >= 0; --i)
    if (n[i] != t[i]) {
      e = !1
      break
    }
  return e
}
function h_(n, t) {
  const e = Math.cos(t),
    i = Math.sin(t),
    s = n[0] * e - n[1] * i,
    r = n[1] * e + n[0] * i
  return ((n[0] = s), (n[1] = r), n)
}
function pe(n, t) {
  const e = n[0] - t[0],
    i = n[1] - t[1]
  return e * e + i * i
}
function qs(n, t) {
  return Math.sqrt(pe(n, t))
}
function c_(n, t) {
  return pe(n, da(n, t))
}
function u_(n, t) {
  if (t.canWrapX()) {
    const e = jt(t.getExtent()),
      i = d_(n, t, e)
    i && (n[0] -= i * e)
  }
  return n
}
function d_(n, t, e) {
  const i = t.getExtent()
  let s = 0
  return (
    t.canWrapX() && (n[0] < i[0] || n[0] > i[2]) && ((e = e || jt(i)), (s = Math.floor((n[0] - i[0]) / e))),
    s
  )
}
const Dc = 63710088e-1
function kc(n, t, e) {
  e = e || Dc
  const i = $i(n[1]),
    s = $i(t[1]),
    r = (s - i) / 2,
    o = $i(t[0] - n[0]) / 2,
    a = Math.sin(r) * Math.sin(r) + Math.sin(o) * Math.sin(o) * Math.cos(i) * Math.cos(s)
  return 2 * e * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
function f_(n, t, e, i) {
  i = i || Dc
  const s = $i(n[1]),
    r = $i(n[0]),
    o = t / i,
    a = Math.asin(Math.sin(s) * Math.cos(o) + Math.cos(s) * Math.sin(o) * Math.cos(e)),
    l = r + Math.atan2(Math.sin(e) * Math.sin(o) * Math.cos(s), Math.cos(o) - Math.sin(s) * Math.sin(a))
  return [Ml(l), Ml(a)]
}
function g_(...n) {
  console.warn(...n)
}
let Ro = !0
function Nc(n) {
  Ro = !1
}
function fa(n, t) {
  if (t !== void 0) {
    for (let e = 0, i = n.length; e < i; ++e) t[e] = n[e]
    t = t
  } else t = n.slice()
  return t
}
function __(n, t) {
  if (t !== void 0 && n !== t) {
    for (let e = 0, i = n.length; e < i; ++e) t[e] = n[e]
    n = t
  }
  return n
}
function m_(n) {
  ;(s_(n.getCode(), n), $s(n, n, fa))
}
function y_(n) {
  n.forEach(m_)
}
function vt(n) {
  return typeof n == 'string' ? n_(n) : n || null
}
function Pl(n) {
  ;(y_(n),
    n.forEach(function (t) {
      n.forEach(function (e) {
        t !== e && $s(t, e, fa)
      })
    }))
}
function p_(n, t, e, i) {
  n.forEach(function (s) {
    t.forEach(function (r) {
      ;($s(s, r, e), $s(r, s, i))
    })
  })
}
function ga(n, t) {
  return n ? (typeof n == 'string' ? vt(n) : n) : vt(t)
}
function gn(n, t) {
  return (Nc(), ei(n, 'EPSG:4326', 'EPSG:3857'))
}
function ps(n, t) {
  const e = ei(n, 'EPSG:3857', 'EPSG:4326'),
    i = e[0]
  return ((i < -180 || i > 180) && (e[0] = Hs(i + 180, 360) - 180), e)
}
function x_(n, t) {
  if (n === t) return !0
  const e = n.getUnits() === t.getUnits()
  return (n.getCode() === t.getCode() || Gc(n, t) === fa) && e
}
function Gc(n, t) {
  const e = n.getCode(),
    i = t.getCode()
  let s = r_(e, i)
  return (s || (s = __), s)
}
function To(n, t) {
  const e = vt(n),
    i = vt(t)
  return Gc(e, i)
}
function ei(n, t, e) {
  return To(t, e)(n, void 0, n.length)
}
function nn(n, t) {
  return n
}
function J(n, t) {
  return (
    Ro &&
      !Zt(n, [0, 0]) &&
      n[0] >= -180 &&
      n[0] <= 180 &&
      n[1] >= -90 &&
      n[1] <= 90 &&
      ((Ro = !1),
      g_('Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.')),
    n
  )
}
function Er(n, t) {
  return n
}
function zi(n, t) {
  return n
}
function E_() {
  ;(Pl(Sl), Pl(Il), p_(Il, Sl, Qg, t_))
}
E_()
class Xc {
  constructor() {
    ;((this.dataProjection = void 0),
      (this.defaultFeatureProjection = void 0),
      (this.supportedMediaTypes = null))
  }
  getReadOptions(t, e) {
    if (e) {
      let i = e.dataProjection ? vt(e.dataProjection) : this.readProjection(t)
      ;(e.extent && i && i.getUnits() === 'tile-pixels' && ((i = vt(i)), i.setWorldExtent(e.extent)),
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
    return A()
  }
  readFeature(t, e) {
    return A()
  }
  readFeatures(t, e) {
    return A()
  }
  readGeometry(t, e) {
    return A()
  }
  readProjection(t) {
    return A()
  }
  writeFeature(t, e) {
    return A()
  }
  writeFeatures(t, e) {
    return A()
  }
  writeGeometry(t, e) {
    return A()
  }
}
function Js(n, t, e) {
  const i = e ? vt(e.featureProjection) : null,
    s = e ? vt(e.dataProjection) : null
  let r
  if (
    (i && s && !x_(i, s) ? (r = (t ? n.clone() : n).transform(t ? i : s, t ? s : i)) : (r = n),
    t && e && e.decimals !== void 0)
  ) {
    const o = Math.pow(10, e.decimals),
      a = function (l) {
        for (let h = 0, c = l.length; h < c; ++h) l[h] = Math.round(l[h] * o) / o
        return l
      }
    ;(r === n && (r = n.clone()), r.applyTransform(a))
  }
  return r
}
class C_ extends Xc {
  constructor() {
    super()
  }
  getType() {
    return 'json'
  }
  readFeature(t, e) {
    return this.readFeatureFromObject(xs(t), this.getReadOptions(t, e))
  }
  readFeatures(t, e) {
    return this.readFeaturesFromObject(xs(t), this.getReadOptions(t, e))
  }
  readFeatureFromObject(t, e) {
    return A()
  }
  readFeaturesFromObject(t, e) {
    return A()
  }
  readGeometry(t, e) {
    return this.readGeometryFromObject(xs(t), this.getReadOptions(t, e))
  }
  readGeometryFromObject(t, e) {
    return A()
  }
  readProjection(t) {
    return this.readProjectionFromObject(xs(t))
  }
  readProjectionFromObject(t) {
    return A()
  }
  writeFeature(t, e) {
    return JSON.stringify(this.writeFeatureObject(t, e))
  }
  writeFeatureObject(t, e) {
    return A()
  }
  writeFeatures(t, e) {
    return JSON.stringify(this.writeFeaturesObject(t, e))
  }
  writeFeaturesObject(t, e) {
    return A()
  }
  writeGeometry(t, e) {
    return JSON.stringify(this.writeGeometryObject(t, e))
  }
  writeGeometryObject(t, e) {
    return A()
  }
}
function xs(n) {
  if (typeof n == 'string') {
    const t = JSON.parse(n)
    return t || null
  }
  return n !== null ? n : null
}
const Ye = typeof navigator < 'u' && typeof navigator.userAgent < 'u' ? navigator.userAgent.toLowerCase() : ''
Ye.includes('firefox')
const R_ = Ye.includes('safari') && !Ye.includes('chrom')
R_ && (Ye.includes('version/15.4') || /cpu (os|iphone os) 15_4 like mac os x/.test(Ye))
Ye.includes('webkit') && Ye.includes('edge')
Ye.includes('macintosh')
const _a =
    typeof WorkerGlobalScope < 'u' && typeof OffscreenCanvas < 'u' && self instanceof WorkerGlobalScope,
  T_ = typeof Image < 'u' && Image.prototype.decode
;(function () {
  let n = !1
  try {
    const t = Object.defineProperty({}, 'passive', {
      get: function () {
        n = !0
      },
    })
    ;(window.addEventListener('_', null, t), window.removeEventListener('_', null, t))
  } catch {}
  return n
})()
new Array(6)
function ze() {
  return [1, 0, 0, 1, 0, 0]
}
function w_(n, t, e, i, s, r, o) {
  return ((n[0] = t), (n[1] = e), (n[2] = i), (n[3] = s), (n[4] = r), (n[5] = o), n)
}
function S_(n, t) {
  return ((n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), (n[4] = t[4]), (n[5] = t[5]), n)
}
function Rt(n, t) {
  const e = t[0],
    i = t[1]
  return ((t[0] = n[0] * e + n[2] * i + n[4]), (t[1] = n[1] * e + n[3] * i + n[5]), t)
}
function v_(n, t, e) {
  return w_(n, t, 0, 0, e, 0, 0)
}
function Hn(n, t, e, i, s, r, o, a) {
  const l = Math.sin(r),
    h = Math.cos(r)
  return (
    (n[0] = i * h),
    (n[1] = s * l),
    (n[2] = -i * l),
    (n[3] = s * h),
    (n[4] = o * i * h - a * i * l + t),
    (n[5] = o * s * l + a * s * h + e),
    n
  )
}
function I_(n, t) {
  const e = M_(t)
  et(e !== 0, 32)
  const i = t[0],
    s = t[1],
    r = t[2],
    o = t[3],
    a = t[4],
    l = t[5]
  return (
    (n[0] = o / e),
    (n[1] = -s / e),
    (n[2] = -r / e),
    (n[3] = i / e),
    (n[4] = (r * l - o * a) / e),
    (n[5] = -(i * l - s * a) / e),
    n
  )
}
function M_(n) {
  return n[0] * n[3] - n[1] * n[2]
}
let Ll
function P_(n) {
  const t = 'matrix(' + n.join(', ') + ')'
  if (_a) return t
  const e = Ll || (Ll = document.createElement('div'))
  return ((e.style.transform = t), e.style.transform)
}
function ai(n, t, e, i, s, r) {
  r = r || []
  let o = 0
  for (let a = t; a < e; a += i) {
    const l = n[a],
      h = n[a + 1]
    ;((r[o++] = s[0] * l + s[2] * h + s[4]), (r[o++] = s[1] * l + s[3] * h + s[5]))
  }
  return (r && r.length != o && (r.length = o), r)
}
function ma(n, t, e, i, s, r, o) {
  o = o || []
  const a = Math.cos(s),
    l = Math.sin(s),
    h = r[0],
    c = r[1]
  let u = 0
  for (let d = t; d < e; d += i) {
    const f = n[d] - h,
      g = n[d + 1] - c
    ;((o[u++] = h + f * a - g * l), (o[u++] = c + f * l + g * a))
    for (let _ = d + 2; _ < d + i; ++_) o[u++] = n[_]
  }
  return (o && o.length != u && (o.length = u), o)
}
function L_(n, t, e, i, s, r, o, a) {
  a = a || []
  const l = o[0],
    h = o[1]
  let c = 0
  for (let u = t; u < e; u += i) {
    const d = n[u] - l,
      f = n[u + 1] - h
    ;((a[c++] = l + s * d), (a[c++] = h + r * f))
    for (let g = u + 2; g < u + i; ++g) a[c++] = n[g]
  }
  return (a && a.length != c && (a.length = c), a)
}
function A_(n, t, e, i, s, r, o) {
  o = o || []
  let a = 0
  for (let l = t; l < e; l += i) {
    ;((o[a++] = n[l] + s), (o[a++] = n[l + 1] + r))
    for (let h = l + 2; h < l + i; ++h) o[a++] = n[h]
  }
  return (o && o.length != a && (o.length = a), o)
}
const Al = ze()
class zc extends Te {
  constructor() {
    ;(super(),
      (this.extent_ = ae()),
      (this.extentRevision_ = -1),
      (this.simplifiedGeometryMaxMinSquaredTolerance = 0),
      (this.simplifiedGeometryRevision = 0),
      (this.simplifyTransformedInternal = zg(function (t, e, i) {
        if (!i) return this.getSimplifiedGeometry(e)
        const s = this.clone()
        return (s.applyTransform(i), s.getSimplifiedGeometry(e))
      })))
  }
  simplifyTransformed(t, e) {
    return this.simplifyTransformedInternal(this.getRevision(), t, e)
  }
  clone() {
    return A()
  }
  closestPointXY(t, e, i, s) {
    return A()
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
    return A()
  }
  getExtent(t) {
    if (this.extentRevision_ != this.getRevision()) {
      const e = this.computeExtent(this.extent_)
      ;((isNaN(e[0]) || isNaN(e[1])) && ua(e), (this.extentRevision_ = this.getRevision()))
    }
    return Kg(this.extent_, t)
  }
  rotate(t, e) {
    A()
  }
  scale(t, e, i) {
    A()
  }
  simplify(t) {
    return this.getSimplifiedGeometry(t * t)
  }
  getSimplifiedGeometry(t) {
    return A()
  }
  getType() {
    return A()
  }
  applyTransform(t) {
    A()
  }
  intersectsExtent(t) {
    return A()
  }
  translate(t, e) {
    A()
  }
  transform(t, e) {
    const i = vt(t),
      s =
        i.getUnits() == 'tile-pixels'
          ? function (r, o, a) {
              const l = i.getExtent(),
                h = i.getWorldExtent(),
                c = Ln(h) / Ln(l)
              return (Hn(Al, h[0], h[3], c, -c, 0, 0, 0), ai(r, 0, r.length, a, Al, o), To(i, e)(r, o, a))
            }
          : To(i, e)
    return (this.applyTransform(s), this)
  }
}
class Ke extends zc {
  constructor() {
    ;(super(), (this.layout = 'XY'), (this.stride = 2), (this.flatCoordinates = null))
  }
  computeExtent(t) {
    return Ec(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
  }
  getCoordinates() {
    return A()
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
    ;((this.stride = Qs(t)), (this.layout = t), (this.flatCoordinates = e))
  }
  setCoordinates(t, e) {
    A()
  }
  setLayout(t, e, i) {
    let s
    if (t) s = Qs(t)
    else {
      for (let r = 0; r < i; ++r) {
        if (e.length === 0) {
          ;((this.layout = 'XY'), (this.stride = 2))
          return
        }
        e = e[0]
      }
      ;((s = e.length), (t = F_(s)))
    }
    ;((this.layout = t), (this.stride = s))
  }
  applyTransform(t) {
    this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed())
  }
  rotate(t, e) {
    const i = this.getFlatCoordinates()
    if (i) {
      const s = this.getStride()
      ;(ma(i, 0, i.length, s, t, e, i), this.changed())
    }
  }
  scale(t, e, i) {
    ;(e === void 0 && (e = t), i || (i = en(this.getExtent())))
    const s = this.getFlatCoordinates()
    if (s) {
      const r = this.getStride()
      ;(L_(s, 0, s.length, r, t, e, i, s), this.changed())
    }
  }
  translate(t, e) {
    const i = this.getFlatCoordinates()
    if (i) {
      const s = this.getStride()
      ;(A_(i, 0, i.length, s, t, e, i), this.changed())
    }
  }
}
function F_(n) {
  let t
  return (n == 2 ? (t = 'XY') : n == 3 ? (t = 'XYZ') : n == 4 && (t = 'XYZM'), t)
}
function Qs(n) {
  let t
  return (n == 'XY' ? (t = 2) : n == 'XYZ' || n == 'XYM' ? (t = 3) : n == 'XYZM' && (t = 4), t)
}
function b_(n, t, e) {
  const i = n.getFlatCoordinates()
  if (!i) return null
  const s = n.getStride()
  return ai(i, 0, i.length, s, t, e)
}
function Fl(n, t, e, i, s, r, o) {
  const a = n[t],
    l = n[t + 1],
    h = n[e] - a,
    c = n[e + 1] - l
  let u
  if (h === 0 && c === 0) u = t
  else {
    const d = ((s - a) * h + (r - l) * c) / (h * h + c * c)
    if (d > 1) u = e
    else if (d > 0) {
      for (let f = 0; f < i; ++f) o[f] = At(n[t + f], n[e + f], d)
      o.length = i
      return
    } else u = t
  }
  for (let d = 0; d < i; ++d) o[d] = n[u + d]
  o.length = i
}
function ya(n, t, e, i, s) {
  let r = n[t],
    o = n[t + 1]
  for (t += i; t < e; t += i) {
    const a = n[t],
      l = n[t + 1],
      h = ye(r, o, a, l)
    ;(h > s && (s = h), (r = a), (o = l))
  }
  return s
}
function pa(n, t, e, i, s) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((s = ya(n, t, a, i, s)), (t = a))
  }
  return s
}
function O_(n, t, e, i, s) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((s = pa(n, t, a, i, s)), (t = a[a.length - 1]))
  }
  return s
}
function xa(n, t, e, i, s, r, o, a, l, h, c) {
  if (t == e) return h
  let u, d
  if (s === 0) {
    if (((d = ye(o, a, n[t], n[t + 1])), d < h)) {
      for (u = 0; u < i; ++u) l[u] = n[t + u]
      return ((l.length = i), d)
    }
    return h
  }
  c = c || [NaN, NaN]
  let f = t + i
  for (; f < e; )
    if ((Fl(n, f - i, f, i, o, a, c), (d = ye(o, a, c[0], c[1])), d < h)) {
      for (h = d, u = 0; u < i; ++u) l[u] = c[u]
      ;((l.length = i), (f += i))
    } else f += i * Math.max(((Math.sqrt(d) - Math.sqrt(h)) / s) | 0, 1)
  if (r && (Fl(n, e - i, t, i, o, a, c), (d = ye(o, a, c[0], c[1])), d < h)) {
    for (h = d, u = 0; u < i; ++u) l[u] = c[u]
    l.length = i
  }
  return h
}
function Ea(n, t, e, i, s, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = xa(n, t, f, i, s, r, o, a, l, h, c)), (t = f))
  }
  return h
}
function D_(n, t, e, i, s, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = Ea(n, t, f, i, s, r, o, a, l, h, c)), (t = f[f.length - 1]))
  }
  return h
}
function jc(n, t, e, i) {
  for (let s = 0, r = e.length; s < r; ++s) n[t++] = e[s]
  return t
}
function Cr(n, t, e, i) {
  for (let s = 0, r = e.length; s < r; ++s) {
    const o = e[s]
    for (let a = 0; a < i; ++a) n[t++] = o[a]
  }
  return t
}
function Ca(n, t, e, i, s) {
  s = s || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = Cr(n, t, e[o], i)
    ;((s[r++] = l), (t = l))
  }
  return ((s.length = r), s)
}
function k_(n, t, e, i, s) {
  s = s || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = Ca(n, t, e[o], i, s[r])
    ;(l.length === 0 && (l[0] = t), (s[r++] = l), (t = l[l.length - 1]))
  }
  return ((s.length = r), s)
}
function Ra(n, t, e, i, s, r, o) {
  const a = (e - t) / i
  if (a < 3) {
    for (; t < e; t += i) ((r[o++] = n[t]), (r[o++] = n[t + 1]))
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
    const g = n[d],
      _ = n[d + 1],
      m = n[u],
      y = n[u + 1]
    for (let p = d + i; p < u; p += i) {
      const x = n[p],
        E = n[p + 1],
        C = o_(x, E, g, _, m, y)
      C > f && ((c = p), (f = C))
    }
    f > s && ((l[(c - t) / i] = 1), d + i < c && h.push(d, c), c + i < u && h.push(c, u))
  }
  for (let u = 0; u < a; ++u) l[u] && ((r[o++] = n[t + u * i]), (r[o++] = n[t + u * i + 1]))
  return o
}
function N_(n, t, e, i, s, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = Ra(n, t, c, i, s, r, o)), a.push(o), (t = c))
  }
  return o
}
function ti(n, t) {
  return t * Math.round(n / t)
}
function G_(n, t, e, i, s, r, o) {
  if (t == e) return o
  let a = ti(n[t], s),
    l = ti(n[t + 1], s)
  ;((t += i), (r[o++] = a), (r[o++] = l))
  let h, c
  do if (((h = ti(n[t], s)), (c = ti(n[t + 1], s)), (t += i), t == e)) return ((r[o++] = h), (r[o++] = c), o)
  while (h == a && c == l)
  for (; t < e; ) {
    const u = ti(n[t], s),
      d = ti(n[t + 1], s)
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
function Wc(n, t, e, i, s, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = G_(n, t, c, i, s, r, o)), a.push(o), (t = c))
  }
  return o
}
function X_(n, t, e, i, s, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l],
      u = []
    ;((o = Wc(n, t, c, i, s, r, o, u)), a.push(u), (t = c[c.length - 1]))
  }
  return o
}
function Yc(n, t, e, i, s) {
  let r
  for (t += i; t < e; t += i) if (((r = s(n.slice(t - i, t), n.slice(t, t + i))), r)) return r
  return !1
}
function Ne(n, t, e, i, s) {
  s = s !== void 0 ? s : []
  let r = 0
  for (let o = t; o < e; o += i) s[r++] = n.slice(o, o + i)
  return ((s.length = r), s)
}
function An(n, t, e, i, s) {
  s = s !== void 0 ? s : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((s[r++] = Ne(n, t, l, i, s[r])), (t = l))
  }
  return ((s.length = r), s)
}
function wo(n, t, e, i, s) {
  s = s !== void 0 ? s : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((s[r++] = l.length === 1 && l[0] === t ? [] : An(n, t, l, i, s[r])), (t = l[l.length - 1]))
  }
  return ((s.length = r), s)
}
function Bc(n, t, e, i, s, r, o) {
  let a, l
  const h = (e - t) / i
  if (h === 1) a = t
  else if (h === 2) ((a = t), (l = s))
  else if (h !== 0) {
    let c = n[t],
      u = n[t + 1],
      d = 0
    const f = [0]
    for (let m = t + i; m < e; m += i) {
      const y = n[m],
        p = n[m + 1]
      ;((d += Math.sqrt((y - c) * (y - c) + (p - u) * (p - u))), f.push(d), (c = y), (u = p))
    }
    const g = s * d,
      _ = Gg(f, g)
    _ < 0 ? ((l = (g - f[-_ - 2]) / (f[-_ - 1] - f[-_ - 2])), (a = t + (-_ - 2) * i)) : (a = t + _ * i)
  }
  ;((o = o > 1 ? o : 2), (r = r || new Array(o)))
  for (let c = 0; c < o; ++c)
    r[c] = a === void 0 ? NaN : l === void 0 ? n[a + c] : At(n[a + c], n[a + i + c], l)
  return r
}
function So(n, t, e, i, s, r) {
  if (e == t) return null
  let o
  if (s < n[t + i - 1]) return r ? ((o = n.slice(t, t + i)), (o[i - 1] = s), o) : null
  if (n[e - 1] < s) return r ? ((o = n.slice(e - i, e)), (o[i - 1] = s), o) : null
  if (s == n[t + i - 1]) return n.slice(t, t + i)
  let a = t / i,
    l = e / i
  for (; a < l; ) {
    const d = (a + l) >> 1
    s < n[(d + 1) * i - 1] ? (l = d) : (a = d + 1)
  }
  const h = n[a * i - 1]
  if (s == h) return n.slice((a - 1) * i, (a - 1) * i + i)
  const c = n[(a + 1) * i - 1],
    u = (s - h) / (c - h)
  o = []
  for (let d = 0; d < i - 1; ++d) o.push(At(n[(a - 1) * i + d], n[a * i + d], u))
  return (o.push(s), o)
}
function z_(n, t, e, i, s, r, o) {
  if (o) return So(n, t, e[e.length - 1], i, s, r)
  let a
  if (s < n[i - 1]) return r ? ((a = n.slice(0, i)), (a[i - 1] = s), a) : null
  if (n[n.length - 1] < s) return r ? ((a = n.slice(n.length - i)), (a[i - 1] = s), a) : null
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    if (t != c) {
      if (s < n[t + i - 1]) return null
      if (s <= n[c - 1]) return So(n, t, c, i, s, !1)
      t = c
    }
  }
  return null
}
function j_(n, t, e, i, s) {
  return !Sc(s, function (o) {
    return !ni(n, t, e, i, o[0], o[1])
  })
}
function ni(n, t, e, i, s, r) {
  let o = 0,
    a = n[e - i],
    l = n[e - i + 1]
  for (; t < e; t += i) {
    const h = n[t],
      c = n[t + 1]
    ;(l <= r
      ? c > r && (h - a) * (r - l) - (s - a) * (c - l) > 0 && o++
      : c <= r && (h - a) * (r - l) - (s - a) * (c - l) < 0 && o--,
      (a = h),
      (l = c))
  }
  return o !== 0
}
function Ta(n, t, e, i, s, r) {
  if (e.length === 0 || !ni(n, t, e[0], i, s, r)) return !1
  for (let o = 1, a = e.length; o < a; ++o) if (ni(n, e[o - 1], e[o], i, s, r)) return !1
  return !0
}
function W_(n, t, e, i, s, r) {
  if (e.length === 0) return !1
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    if (Ta(n, t, l, i, s, r)) return !0
    t = l[l.length - 1]
  }
  return !1
}
function Rr(n, t, e, i, s) {
  const r = wc(ae(), n, t, e, i)
  return zt(s, r)
    ? Gi(s, r) || (r[0] >= s[0] && r[2] <= s[2]) || (r[1] >= s[1] && r[3] <= s[3])
      ? !0
      : Yc(n, t, e, i, function (o, a) {
          return $g(s, o, a)
        })
    : !1
}
function Y_(n, t, e, i, s) {
  for (let r = 0, o = e.length; r < o; ++r) {
    if (Rr(n, t, e[r], i, s)) return !0
    t = e[r]
  }
  return !1
}
function B_(n, t, e, i, s) {
  return !!(
    Rr(n, t, e, i, s) ||
    ni(n, t, e, i, s[0], s[1]) ||
    ni(n, t, e, i, s[0], s[3]) ||
    ni(n, t, e, i, s[2], s[1]) ||
    ni(n, t, e, i, s[2], s[3])
  )
}
function Vc(n, t, e, i, s) {
  if (!B_(n, t, e[0], i, s)) return !1
  if (e.length === 1) return !0
  for (let r = 1, o = e.length; r < o; ++r)
    if (j_(n, e[r - 1], e[r], i, s) && !Rr(n, e[r - 1], e[r], i, s)) return !1
  return !0
}
function V_(n, t, e, i, s) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    if (Vc(n, t, a, i, s)) return !0
    t = a[a.length - 1]
  }
  return !1
}
function Uc(n, t, e, i) {
  let s = n[t],
    r = n[t + 1],
    o = 0
  for (let a = t + i; a < e; a += i) {
    const l = n[a],
      h = n[a + 1]
    ;((o += Math.sqrt((l - s) * (l - s) + (h - r) * (h - r))), (s = l), (r = h))
  }
  return o
}
class $t extends Ke {
  constructor(t, e) {
    ;(super(),
      (this.flatMidpoint_ = null),
      (this.flatMidpointRevision_ = -1),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
  }
  appendCoordinate(t) {
    ;(this.flatCoordinates ? re(this.flatCoordinates, t) : (this.flatCoordinates = t.slice()), this.changed())
  }
  clone() {
    const t = new $t(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, s) {
    return s < _i(this.getExtent(), t, e)
      ? s
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            ya(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        xa(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !1, t, e, i, s))
  }
  forEachSegment(t) {
    return Yc(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
  }
  getCoordinateAtM(t, e) {
    return this.layout != 'XYM' && this.layout != 'XYZM'
      ? null
      : ((e = e !== void 0 ? e : !1),
        So(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e))
  }
  getCoordinates() {
    return Ne(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getCoordinateAt(t, e) {
    return Bc(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, this.stride)
  }
  getLength() {
    return Uc(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
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
      (e.length = Ra(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0)),
      new $t(e, 'XY')
    )
  }
  getType() {
    return 'LineString'
  }
  intersectsExtent(t) {
    return Rr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = Cr(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
function Zc(n, t, e, i) {
  let s = 0,
    r = n[e - i],
    o = n[e - i + 1]
  for (; t < e; t += i) {
    const a = n[t],
      l = n[t + 1]
    ;((s += o * a - r * l), (r = a), (o = l))
  }
  return s / 2
}
function Kc(n, t, e, i) {
  let s = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((s += Zc(n, t, a, i)), (t = a))
  }
  return s
}
function U_(n, t, e, i) {
  let s = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((s += Kc(n, t, a, i)), (t = a[a.length - 1]))
  }
  return s
}
class Fn extends Ke {
  constructor(t, e) {
    ;(super(),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
  }
  clone() {
    return new Fn(this.flatCoordinates.slice(), this.layout)
  }
  closestPointXY(t, e, i, s) {
    return s < _i(this.getExtent(), t, e)
      ? s
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            ya(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        xa(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !0, t, e, i, s))
  }
  getArea() {
    return Zc(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getCoordinates() {
    return Ne(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getSimplifiedGeometryInternal(t) {
    const e = []
    return (
      (e.length = Ra(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0)),
      new Fn(e, 'XY')
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
      (this.flatCoordinates.length = Cr(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
class ci extends Ke {
  constructor(t, e, i) {
    if (
      (super(), (this.ends_ = []), (this.maxDelta_ = -1), (this.maxDeltaRevision_ = -1), Array.isArray(t[0]))
    )
      this.setCoordinates(t, e)
    else if (e !== void 0 && i) (this.setFlatCoordinates(e, t), (this.ends_ = i))
    else {
      let s = this.getLayout()
      const r = t,
        o = [],
        a = []
      for (let l = 0, h = r.length; l < h; ++l) {
        const c = r[l]
        ;(l === 0 && (s = c.getLayout()), re(o, c.getFlatCoordinates()), a.push(o.length))
      }
      ;(this.setFlatCoordinates(s, o), (this.ends_ = a))
    }
  }
  appendLineString(t) {
    ;(this.flatCoordinates
      ? re(this.flatCoordinates, t.getFlatCoordinates().slice())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed())
  }
  clone() {
    const t = new ci(this.flatCoordinates.slice(), this.layout, this.ends_.slice())
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, s) {
    return s < _i(this.getExtent(), t, e)
      ? s
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(pa(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Ea(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !1, t, e, i, s))
  }
  getCoordinateAtM(t, e, i) {
    return (this.layout != 'XYM' && this.layout != 'XYZM') || this.flatCoordinates.length === 0
      ? null
      : ((e = e !== void 0 ? e : !1),
        (i = i !== void 0 ? i : !1),
        z_(this.flatCoordinates, 0, this.ends_, this.stride, t, e, i))
  }
  getCoordinates() {
    return An(this.flatCoordinates, 0, this.ends_, this.stride)
  }
  getEnds() {
    return this.ends_
  }
  getLineString(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new $t(this.flatCoordinates.slice(t === 0 ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout)
  }
  getLineStrings() {
    const t = this.flatCoordinates,
      e = this.ends_,
      i = this.layout,
      s = []
    let r = 0
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o],
        h = new $t(t.slice(r, l), i)
      ;(s.push(h), (r = l))
    }
    return s
  }
  getFlatMidpoints() {
    const t = [],
      e = this.flatCoordinates
    let i = 0
    const s = this.ends_,
      r = this.stride
    for (let o = 0, a = s.length; o < a; ++o) {
      const l = s[o],
        h = Bc(e, i, l, r, 0.5)
      ;(re(t, h), (i = l))
    }
    return t
  }
  getSimplifiedGeometryInternal(t) {
    const e = [],
      i = []
    return ((e.length = N_(this.flatCoordinates, 0, this.ends_, this.stride, t, e, 0, i)), new ci(e, 'XY', i))
  }
  getType() {
    return 'MultiLineString'
  }
  intersectsExtent(t) {
    return Y_(this.flatCoordinates, 0, this.ends_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []))
    const i = Ca(this.flatCoordinates, 0, t, this.stride, this.ends_)
    ;((this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1]), this.changed())
  }
}
class Wt extends Ke {
  constructor(t, e) {
    ;(super(), this.setCoordinates(t, e))
  }
  clone() {
    const t = new Wt(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, s) {
    const r = this.flatCoordinates,
      o = ye(t, e, r[0], r[1])
    if (o < s) {
      const a = this.stride
      for (let l = 0; l < a; ++l) i[l] = r[l]
      return ((i.length = a), o)
    }
    return s
  }
  getCoordinates() {
    return this.flatCoordinates ? this.flatCoordinates.slice() : []
  }
  computeExtent(t) {
    return Gs(this.flatCoordinates, t)
  }
  getType() {
    return 'Point'
  }
  intersectsExtent(t) {
    return ca(t, this.flatCoordinates[0], this.flatCoordinates[1])
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 0),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = jc(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
class ln extends Ke {
  constructor(t, e) {
    ;(super(), e && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
  }
  appendPoint(t) {
    ;(this.flatCoordinates
      ? re(this.flatCoordinates, t.getFlatCoordinates())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.changed())
  }
  clone() {
    const t = new ln(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, s) {
    if (s < _i(this.getExtent(), t, e)) return s
    const r = this.flatCoordinates,
      o = this.stride
    for (let a = 0, l = r.length; a < l; a += o) {
      const h = ye(t, e, r[a], r[a + 1])
      if (h < s) {
        s = h
        for (let c = 0; c < o; ++c) i[c] = r[a + c]
        i.length = o
      }
    }
    return s
  }
  getCoordinates() {
    return Ne(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getPoint(t) {
    const e = this.flatCoordinates ? this.flatCoordinates.length / this.stride : 0
    return t < 0 || e <= t
      ? null
      : new Wt(this.flatCoordinates.slice(t * this.stride, (t + 1) * this.stride), this.layout)
  }
  getPoints() {
    const t = this.flatCoordinates,
      e = this.layout,
      i = this.stride,
      s = []
    for (let r = 0, o = t.length; r < o; r += i) {
      const a = new Wt(t.slice(r, r + i), e)
      s.push(a)
    }
    return s
  }
  getType() {
    return 'MultiPoint'
  }
  intersectsExtent(t) {
    const e = this.flatCoordinates,
      i = this.stride
    for (let s = 0, r = e.length; s < r; s += i) {
      const o = e[s],
        a = e[s + 1]
      if (ca(t, o, a)) return !0
    }
    return !1
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = Cr(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
function $c(n, t, e, i, s, r, o) {
  let a, l, h, c, u, d, f
  const g = s[r + 1],
    _ = []
  for (let p = 0, x = e.length; p < x; ++p) {
    const E = e[p]
    for (c = n[E - i], d = n[E - i + 1], a = t; a < E; a += i)
      ((u = n[a]),
        (f = n[a + 1]),
        ((g <= d && f <= g) || (d <= g && g <= f)) && ((h = ((g - d) / (f - d)) * (u - c) + c), _.push(h)),
        (c = u),
        (d = f))
  }
  let m = NaN,
    y = -1 / 0
  for (_.sort(Mn), c = _[0], a = 1, l = _.length; a < l; ++a) {
    u = _[a]
    const p = Math.abs(u - c)
    ;(p > y && ((h = (c + u) / 2), Ta(n, t, e, i, h, g) && ((m = h), (y = p))), (c = u))
  }
  return (isNaN(m) && (m = s[r]), o ? (o.push(m, g, y), o) : [m, g, y])
}
function Z_(n, t, e, i, s) {
  let r = []
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((r = $c(n, t, l, i, s, 2 * o, r)), (t = l[l.length - 1]))
  }
  return r
}
function K_(n, t, e, i) {
  for (; t < e - i; ) {
    for (let s = 0; s < i; ++s) {
      const r = n[t + s]
      ;((n[t + s] = n[e - i + s]), (n[e - i + s] = r))
    }
    ;((t += i), (e -= i))
  }
}
function Hc(n, t, e, i) {
  let s = 0,
    r = n[e - i],
    o = n[e - i + 1]
  for (; t < e; t += i) {
    const a = n[t],
      l = n[t + 1]
    ;((s += (a - r) * (l + o)), (r = a), (o = l))
  }
  return s === 0 ? void 0 : s > 0
}
function qc(n, t, e, i, s) {
  s = s !== void 0 ? s : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = Hc(n, t, a, i)
    if (r === 0) {
      if ((s && l) || (!s && !l)) return !1
    } else if ((s && !l) || (!s && l)) return !1
    t = a
  }
  return !0
}
function $_(n, t, e, i, s) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    if (!qc(n, t, a, i, s)) return !1
    a.length && (t = a[a.length - 1])
  }
  return !0
}
function vo(n, t, e, i, s) {
  s = s !== void 0 ? s : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = Hc(n, t, a, i)
    ;((r === 0 ? (s && l) || (!s && !l) : (s && !l) || (!s && l)) && K_(n, t, a, i), (t = a))
  }
  return t
}
function bl(n, t, e, i, s) {
  for (let r = 0, o = e.length; r < o; ++r) t = vo(n, t, e[r], i, s)
  return t
}
class Yt extends Ke {
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
      ? re(this.flatCoordinates, t.getFlatCoordinates())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed())
  }
  clone() {
    const t = new Yt(this.flatCoordinates.slice(), this.layout, this.ends_.slice())
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, s) {
    return s < _i(this.getExtent(), t, e)
      ? s
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(pa(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Ea(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, i, s))
  }
  containsXY(t, e) {
    return Ta(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, e)
  }
  getArea() {
    return Kc(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride)
  }
  getCoordinates(t) {
    let e
    return (
      t !== void 0
        ? ((e = this.getOrientedFlatCoordinates().slice()), vo(e, 0, this.ends_, this.stride, t))
        : (e = this.flatCoordinates),
      An(e, 0, this.ends_, this.stride)
    )
  }
  getEnds() {
    return this.ends_
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const t = en(this.getExtent())
      ;((this.flatInteriorPoint_ = $c(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, 0)),
        (this.flatInteriorPointRevision_ = this.getRevision()))
    }
    return this.flatInteriorPoint_
  }
  getInteriorPoint() {
    return new Wt(this.getFlatInteriorPoint(), 'XYM')
  }
  getLinearRingCount() {
    return this.ends_.length
  }
  getLinearRing(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new Fn(this.flatCoordinates.slice(t === 0 ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout)
  }
  getLinearRings() {
    const t = this.layout,
      e = this.flatCoordinates,
      i = this.ends_,
      s = []
    let r = 0
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o],
        h = new Fn(e.slice(r, l), t)
      ;(s.push(h), (r = l))
    }
    return s
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates
      ;(qc(t, 0, this.ends_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = vo(
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
      (e.length = Wc(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t), e, 0, i)),
      new Yt(e, 'XY', i)
    )
  }
  getType() {
    return 'Polygon'
  }
  intersectsExtent(t) {
    return Vc(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []))
    const i = Ca(this.flatCoordinates, 0, t, this.stride, this.ends_)
    ;((this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1]), this.changed())
  }
}
function H_(n, t, e, i) {
  e = e || 32
  const s = []
  for (let r = 0; r < e; ++r) re(s, f_(n, t, (2 * Math.PI * r) / e, i))
  return (s.push(s[0], s[1]), new Yt(s, 'XY', [s.length]))
}
function Ol(n) {
  if (Lc(n)) throw new Error('Cannot create polygon from empty extent')
  const t = n[0],
    e = n[1],
    i = n[2],
    s = n[3],
    r = [t, e, t, s, i, s, i, e, t, e]
  return new Yt(r, 'XY', [r.length])
}
function q_(n, t, e) {
  t = t || 32
  const i = n.getStride(),
    s = n.getLayout(),
    r = n.getCenter(),
    o = i * (t + 1),
    a = new Array(o)
  for (let c = 0; c < o; c += i) {
    ;((a[c] = 0), (a[c + 1] = 0))
    for (let u = 2; u < i; u++) a[c + u] = r[u]
  }
  const l = [a.length],
    h = new Yt(a, s, l)
  return (J_(h, r, n.getRadius()), h)
}
function J_(n, t, e, i) {
  const s = n.getFlatCoordinates(),
    r = n.getStride(),
    o = s.length / r - 1,
    a = 0
  for (let l = 0; l <= o; ++l) {
    const h = l * r,
      c = a + (Hs(l, o) * 2 * Math.PI) / o
    ;((s[h] = t[0] + e * Math.cos(c)), (s[h + 1] = t[1] + e * Math.sin(c)))
  }
  n.changed()
}
function Q_(n, t, e, i) {
  const s = []
  let r = ae()
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((r = Ec(n, t, l[0], i)), s.push((r[0] + r[2]) / 2, (r[1] + r[3]) / 2), (t = l[l.length - 1]))
  }
  return s
}
class ui extends Ke {
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
      let s = this.getLayout()
      const r = t,
        o = [],
        a = []
      for (let l = 0, h = r.length; l < h; ++l) {
        const c = r[l]
        l === 0 && (s = c.getLayout())
        const u = o.length,
          d = c.getEnds()
        for (let f = 0, g = d.length; f < g; ++f) d[f] += u
        ;(re(o, c.getFlatCoordinates()), a.push(d))
      }
      ;((e = s), (t = o), (i = a))
    }
    e !== void 0 && i ? (this.setFlatCoordinates(e, t), (this.endss_ = i)) : this.setCoordinates(t, e)
  }
  appendPolygon(t) {
    let e
    if (!this.flatCoordinates)
      ((this.flatCoordinates = t.getFlatCoordinates().slice()), (e = t.getEnds().slice()), this.endss_.push())
    else {
      const i = this.flatCoordinates.length
      ;(re(this.flatCoordinates, t.getFlatCoordinates()), (e = t.getEnds().slice()))
      for (let s = 0, r = e.length; s < r; ++s) e[s] += i
    }
    ;(this.endss_.push(e), this.changed())
  }
  clone() {
    const t = this.endss_.length,
      e = new Array(t)
    for (let s = 0; s < t; ++s) e[s] = this.endss_[s].slice()
    const i = new ui(this.flatCoordinates.slice(), this.layout, e)
    return (i.applyProperties(this), i)
  }
  closestPointXY(t, e, i, s) {
    return s < _i(this.getExtent(), t, e)
      ? s
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(O_(this.flatCoordinates, 0, this.endss_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        D_(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, this.maxDelta_, !0, t, e, i, s))
  }
  containsXY(t, e) {
    return W_(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t, e)
  }
  getArea() {
    return U_(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride)
  }
  getCoordinates(t) {
    let e
    return (
      t !== void 0
        ? ((e = this.getOrientedFlatCoordinates().slice()), bl(e, 0, this.endss_, this.stride, t))
        : (e = this.flatCoordinates),
      wo(e, 0, this.endss_, this.stride)
    )
  }
  getEndss() {
    return this.endss_
  }
  getFlatInteriorPoints() {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      const t = Q_(this.flatCoordinates, 0, this.endss_, this.stride)
      ;((this.flatInteriorPoints_ = Z_(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t)),
        (this.flatInteriorPointsRevision_ = this.getRevision()))
    }
    return this.flatInteriorPoints_
  }
  getInteriorPoints() {
    return new ln(this.getFlatInteriorPoints().slice(), 'XYM')
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates
      ;($_(t, 0, this.endss_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = bl(
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
      (e.length = X_(this.flatCoordinates, 0, this.endss_, this.stride, Math.sqrt(t), e, 0, i)),
      new ui(e, 'XY', i)
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
      s = i[i.length - 1]
    if (e !== 0) for (let r = 0, o = i.length; r < o; ++r) i[r] -= e
    return new Yt(this.flatCoordinates.slice(e, s), this.layout, i)
  }
  getPolygons() {
    const t = this.layout,
      e = this.flatCoordinates,
      i = this.endss_,
      s = []
    let r = 0
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o].slice(),
        h = l[l.length - 1]
      if (r !== 0) for (let u = 0, d = l.length; u < d; ++u) l[u] -= r
      const c = new Yt(e.slice(r, h), t, l)
      ;(s.push(c), (r = h))
    }
    return s
  }
  getType() {
    return 'MultiPolygon'
  }
  intersectsExtent(t) {
    return V_(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 3), this.flatCoordinates || (this.flatCoordinates = []))
    const i = k_(this.flatCoordinates, 0, t, this.stride, this.endss_)
    if (i.length === 0) this.flatCoordinates.length = 0
    else {
      const s = i[i.length - 1]
      this.flatCoordinates.length = s.length === 0 ? 0 : s[s.length - 1]
    }
    this.changed()
  }
}
class Be extends zc {
  constructor(t) {
    ;(super(), (this.geometries_ = t || null), (this.changeEventsKeys_ = []), this.listenGeometriesChange_())
  }
  unlistenGeometriesChange_() {
    ;(this.changeEventsKeys_.forEach(Ft), (this.changeEventsKeys_.length = 0))
  }
  listenGeometriesChange_() {
    if (this.geometries_)
      for (let t = 0, e = this.geometries_.length; t < e; ++t)
        this.changeEventsKeys_.push(yt(this.geometries_[t], dt.CHANGE, this.changed, this))
  }
  clone() {
    const t = new Be(null)
    return (t.setGeometries(this.geometries_), t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, s) {
    if (s < _i(this.getExtent(), t, e)) return s
    const r = this.geometries_
    for (let o = 0, a = r.length; o < a; ++o) s = r[o].closestPointXY(t, e, i, s)
    return s
  }
  containsXY(t, e) {
    const i = this.geometries_
    for (let s = 0, r = i.length; s < r; ++s) if (i[s].containsXY(t, e)) return !0
    return !1
  }
  computeExtent(t) {
    ua(t)
    const e = this.geometries_
    for (let i = 0, s = e.length; i < s; ++i) Rc(t, e[i].getExtent())
    return t
  }
  getGeometries() {
    return Dl(this.geometries_)
  }
  getGeometriesArray() {
    return this.geometries_
  }
  getGeometriesArrayRecursive() {
    let t = []
    const e = this.geometries_
    for (let i = 0, s = e.length; i < s; ++i)
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
    let s = !1
    for (let r = 0, o = i.length; r < o; ++r) {
      const a = i[r],
        l = a.getSimplifiedGeometry(t)
      ;(e.push(l), l !== a && (s = !0))
    }
    if (s) {
      const r = new Be(null)
      return (r.setGeometriesArray(e), r)
    }
    return ((this.simplifiedGeometryMaxMinSquaredTolerance = t), this)
  }
  getType() {
    return 'GeometryCollection'
  }
  intersectsExtent(t) {
    const e = this.geometries_
    for (let i = 0, s = e.length; i < s; ++i) if (e[i].intersectsExtent(t)) return !0
    return !1
  }
  isEmpty() {
    return this.geometries_.length === 0
  }
  rotate(t, e) {
    const i = this.geometries_
    for (let s = 0, r = i.length; s < r; ++s) i[s].rotate(t, e)
    this.changed()
  }
  scale(t, e, i) {
    i || (i = en(this.getExtent()))
    const s = this.geometries_
    for (let r = 0, o = s.length; r < o; ++r) s[r].scale(t, e, i)
    this.changed()
  }
  setGeometries(t) {
    this.setGeometriesArray(Dl(t))
  }
  setGeometriesArray(t) {
    ;(this.unlistenGeometriesChange_(),
      (this.geometries_ = t),
      this.listenGeometriesChange_(),
      this.changed())
  }
  applyTransform(t) {
    const e = this.geometries_
    for (let i = 0, s = e.length; i < s; ++i) e[i].applyTransform(t)
    this.changed()
  }
  translate(t, e) {
    const i = this.geometries_
    for (let s = 0, r = i.length; s < r; ++s) i[s].translate(t, e)
    this.changed()
  }
  disposeInternal() {
    ;(this.unlistenGeometriesChange_(), super.disposeInternal())
  }
}
function Dl(n) {
  const t = []
  for (let e = 0, i = n.length; e < i; ++e) t.push(n[e].clone())
  return t
}
class _n extends C_ {
  constructor(t) {
    ;((t = t || {}),
      super(),
      (this.dataProjection = vt(t.dataProjection ? t.dataProjection : 'EPSG:4326')),
      t.featureProjection && (this.defaultFeatureProjection = vt(t.featureProjection)),
      (this.geometryName_ = t.geometryName),
      (this.extractGeometryName_ = t.extractGeometryName),
      (this.supportedMediaTypes = ['application/geo+json', 'application/vnd.geo+json']))
  }
  readFeatureFromObject(t, e) {
    let i = null
    t.type === 'Feature' ? (i = t) : (i = { type: 'Feature', geometry: t, properties: null })
    const s = Io(i.geometry, e),
      r = new pt()
    return (
      this.geometryName_
        ? r.setGeometryName(this.geometryName_)
        : this.extractGeometryName_ && 'geometry_name' in i !== void 0 && r.setGeometryName(i.geometry_name),
      r.setGeometry(s),
      'id' in i && r.setId(i.id),
      i.properties && r.setProperties(i.properties, !0),
      r
    )
  }
  readFeaturesFromObject(t, e) {
    const i = t
    let s = null
    if (i.type === 'FeatureCollection') {
      const r = t
      s = []
      const o = r.features
      for (let a = 0, l = o.length; a < l; ++a) s.push(this.readFeatureFromObject(o[a], e))
    } else s = [this.readFeatureFromObject(t, e)]
    return s
  }
  readGeometryFromObject(t, e) {
    return Io(t, e)
  }
  readProjectionFromObject(t) {
    const e = t.crs
    let i
    return (
      e
        ? e.type == 'name'
          ? (i = vt(e.properties.name))
          : e.type === 'EPSG'
            ? (i = vt('EPSG:' + e.properties.code))
            : et(!1, 36)
        : (i = this.dataProjection),
      i
    )
  }
  writeFeatureObject(t, e) {
    e = this.adaptOptions(e)
    const i = { type: 'Feature', geometry: null, properties: null },
      s = t.getId()
    if ((s !== void 0 && (i.id = s), !t.hasProperties())) return i
    const r = t.getProperties(),
      o = t.getGeometry()
    return (o && ((i.geometry = Mo(o, e)), delete r[t.getGeometryName()]), tn(r) || (i.properties = r), i)
  }
  writeFeaturesObject(t, e) {
    e = this.adaptOptions(e)
    const i = []
    for (let s = 0, r = t.length; s < r; ++s) i.push(this.writeFeatureObject(t[s], e))
    return { type: 'FeatureCollection', features: i }
  }
  writeGeometryObject(t, e) {
    return Mo(t, this.adaptOptions(e))
  }
}
function Io(n, t) {
  if (!n) return null
  let e
  switch (n.type) {
    case 'Point': {
      e = em(n)
      break
    }
    case 'LineString': {
      e = im(n)
      break
    }
    case 'Polygon': {
      e = om(n)
      break
    }
    case 'MultiPoint': {
      e = sm(n)
      break
    }
    case 'MultiLineString': {
      e = nm(n)
      break
    }
    case 'MultiPolygon': {
      e = rm(n)
      break
    }
    case 'GeometryCollection': {
      e = tm(n)
      break
    }
    default:
      throw new Error('Unsupported GeoJSON type: ' + n.type)
  }
  return Js(e, !1, t)
}
function tm(n, t) {
  const e = n.geometries.map(function (i) {
    return Io(i, t)
  })
  return new Be(e)
}
function em(n) {
  return new Wt(n.coordinates)
}
function im(n) {
  return new $t(n.coordinates)
}
function nm(n) {
  return new ci(n.coordinates)
}
function sm(n) {
  return new ln(n.coordinates)
}
function rm(n) {
  return new ui(n.coordinates)
}
function om(n) {
  return new Yt(n.coordinates)
}
function Mo(n, t) {
  n = Js(n, !0, t)
  const e = n.getType()
  let i
  switch (e) {
    case 'Point': {
      i = dm(n)
      break
    }
    case 'LineString': {
      i = lm(n)
      break
    }
    case 'Polygon': {
      i = fm(n, t)
      break
    }
    case 'MultiPoint': {
      i = cm(n)
      break
    }
    case 'MultiLineString': {
      i = hm(n)
      break
    }
    case 'MultiPolygon': {
      i = um(n, t)
      break
    }
    case 'GeometryCollection': {
      i = am(n, t)
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
function am(n, t) {
  return (
    (t = Object.assign({}, t)),
    delete t.featureProjection,
    {
      type: 'GeometryCollection',
      geometries: n.getGeometriesArray().map(function (i) {
        return Mo(i, t)
      }),
    }
  )
}
function lm(n, t) {
  return { type: 'LineString', coordinates: n.getCoordinates() }
}
function hm(n, t) {
  return { type: 'MultiLineString', coordinates: n.getCoordinates() }
}
function cm(n, t) {
  return { type: 'MultiPoint', coordinates: n.getCoordinates() }
}
function um(n, t) {
  let e
  return (t && (e = t.rightHanded), { type: 'MultiPolygon', coordinates: n.getCoordinates(e) })
}
function dm(n, t) {
  return { type: 'Point', coordinates: n.getCoordinates() }
}
function fm(n, t) {
  let e
  return (t && (e = t.rightHanded), { type: 'Polygon', coordinates: n.getCoordinates(e) })
}
class gm extends Xc {
  constructor() {
    super()
  }
  getType() {
    return 'text'
  }
  readFeature(t, e) {
    return this.readFeatureFromText(Es(t), this.adaptOptions(e))
  }
  readFeatureFromText(t, e) {
    return A()
  }
  readFeatures(t, e) {
    return this.readFeaturesFromText(Es(t), this.adaptOptions(e))
  }
  readFeaturesFromText(t, e) {
    return A()
  }
  readGeometry(t, e) {
    return this.readGeometryFromText(Es(t), this.adaptOptions(e))
  }
  readGeometryFromText(t, e) {
    return A()
  }
  readProjection(t) {
    return this.readProjectionFromText(Es(t))
  }
  readProjectionFromText(t) {
    return this.dataProjection
  }
  writeFeature(t, e) {
    return this.writeFeatureText(t, this.adaptOptions(e))
  }
  writeFeatureText(t, e) {
    return A()
  }
  writeFeatures(t, e) {
    return this.writeFeaturesText(t, this.adaptOptions(e))
  }
  writeFeaturesText(t, e) {
    return A()
  }
  writeGeometry(t, e) {
    return this.writeGeometryText(t, this.adaptOptions(e))
  }
  writeGeometryText(t, e) {
    return A()
  }
}
function Es(n) {
  return typeof n == 'string' ? n : ''
}
class Ve {
  constructor(t) {
    ;((t = t || {}), (this.color_ = t.color !== void 0 ? t.color : null))
  }
  clone() {
    const t = this.getColor()
    return new Ve({ color: Array.isArray(t) ? t.slice() : t || void 0 })
  }
  getColor() {
    return this.color_
  }
  setColor(t) {
    this.color_ = t
  }
}
const tt = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3 }
function tr(n, t) {
  return Array.isArray(n) ? n : (t === void 0 ? (t = [n, n]) : ((t[0] = n), (t[1] = n)), t)
}
class Tr {
  constructor(t) {
    ;((this.opacity_ = t.opacity),
      (this.rotateWithView_ = t.rotateWithView),
      (this.rotation_ = t.rotation),
      (this.scale_ = t.scale),
      (this.scaleArray_ = tr(t.scale)),
      (this.displacement_ = t.displacement),
      (this.declutterMode_ = t.declutterMode))
  }
  clone() {
    const t = this.getScale()
    return new Tr({
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
    return A()
  }
  getImage(t) {
    return A()
  }
  getHitDetectionImage() {
    return A()
  }
  getPixelRatio(t) {
    return 1
  }
  getImageState() {
    return A()
  }
  getImageSize() {
    return A()
  }
  getOrigin() {
    return A()
  }
  getSize() {
    return A()
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
    ;((this.scale_ = t), (this.scaleArray_ = tr(t)))
  }
  listenImageChange(t) {
    A()
  }
  load() {
    A()
  }
  unlistenImageChange(t) {
    A()
  }
}
const _m = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,
  mm = /^([a-z]*)$|^hsla?\(.*\)$/i
function Jc(n) {
  return typeof n == 'string' ? n : Qc(n)
}
function ym(n) {
  const t = document.createElement('div')
  if (((t.style.color = n), t.style.color !== '')) {
    document.body.appendChild(t)
    const e = getComputedStyle(t).color
    return (document.body.removeChild(t), e)
  }
  return ''
}
const pm = (function () {
  const t = {}
  let e = 0
  return function (i) {
    let s
    if (t.hasOwnProperty(i)) s = t[i]
    else {
      if (e >= 1024) {
        let r = 0
        for (const o in t) (r++ & 3) === 0 && (delete t[o], --e)
      }
      ;((s = xm(i)), (t[i] = s), ++e)
    }
    return s
  }
})()
function er(n) {
  return Array.isArray(n) ? n : pm(n)
}
function xm(n) {
  let t, e, i, s, r
  if ((mm.exec(n) && (n = ym(n)), _m.exec(n))) {
    const o = n.length - 1
    let a
    o <= 4 ? (a = 1) : (a = 2)
    const l = o === 4 || o === 8
    ;((t = parseInt(n.substr(1 + 0 * a, a), 16)),
      (e = parseInt(n.substr(1 + 1 * a, a), 16)),
      (i = parseInt(n.substr(1 + 2 * a, a), 16)),
      l ? (s = parseInt(n.substr(1 + 3 * a, a), 16)) : (s = 255),
      a == 1 && ((t = (t << 4) + t), (e = (e << 4) + e), (i = (i << 4) + i), l && (s = (s << 4) + s)),
      (r = [t, e, i, s / 255]))
  } else
    n.startsWith('rgba(')
      ? ((r = n.slice(5, -1).split(',').map(Number)), kl(r))
      : n.startsWith('rgb(')
        ? ((r = n.slice(4, -1).split(',').map(Number)), r.push(1), kl(r))
        : et(!1, 14)
  return r
}
function kl(n) {
  return (
    (n[0] = ut((n[0] + 0.5) | 0, 0, 255)),
    (n[1] = ut((n[1] + 0.5) | 0, 0, 255)),
    (n[2] = ut((n[2] + 0.5) | 0, 0, 255)),
    (n[3] = ut(n[3], 0, 1)),
    n
  )
}
function Qc(n) {
  let t = n[0]
  t != (t | 0) && (t = (t + 0.5) | 0)
  let e = n[1]
  e != (e | 0) && (e = (e + 0.5) | 0)
  let i = n[2]
  i != (i | 0) && (i = (i + 0.5) | 0)
  const s = n[3] === void 0 ? 1 : Math.round(n[3] * 100) / 100
  return 'rgba(' + t + ',' + e + ',' + i + ',' + s + ')'
}
function qt(n, t, e, i) {
  let s
  return (
    e && e.length
      ? (s = e.shift())
      : _a
        ? (s = new OffscreenCanvas(n || 300, t || 300))
        : (s = document.createElement('canvas')),
    n && (s.width = n),
    t && (s.height = t),
    s.getContext('2d', i)
  )
}
function Em(n) {
  const t = n.canvas
  ;((t.width = 1), (t.height = 1), n.clearRect(0, 0, 1, 1))
}
class Cm {
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
    const s = Nl(t, e, i)
    return s in this.cache_ ? this.cache_[s] : null
  }
  set(t, e, i, s) {
    const r = Nl(t, e, i)
    ;((this.cache_[r] = s), ++this.cacheSize_)
  }
  setSize(t) {
    ;((this.maxCacheSize_ = t), this.expire())
  }
}
function Nl(n, t, e) {
  const i = e ? Jc(e) : 'null'
  return t + ':' + n + ':' + i
}
const Gl = new Cm()
function Rm(n, t, e) {
  const i = n
  let s = !0,
    r = !1,
    o = !1
  const a = [
    Ks(i, dt.LOAD, function () {
      ;((o = !0), r || t())
    }),
  ]
  return (
    i.src && T_
      ? ((r = !0),
        i
          .decode()
          .then(function () {
            s && t()
          })
          .catch(function (l) {
            s && (o ? t() : e())
          }))
      : a.push(Ks(i, dt.ERROR, e)),
    function () {
      ;((s = !1), a.forEach(Ft))
    }
  )
}
let mn = null
class Tm extends xc {
  constructor(t, e, i, s, r, o) {
    ;(super(),
      (this.hitDetectionImage_ = null),
      (this.image_ = t),
      (this.crossOrigin_ = s),
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
    if (this.tainted_ === void 0 && this.imageState_ === tt.LOADED) {
      ;(mn || (mn = qt(1, 1, void 0, { willReadFrequently: !0 })), mn.drawImage(this.image_, 0, 0))
      try {
        ;(mn.getImageData(0, 0, 1, 1), (this.tainted_ = !1))
      } catch {
        ;((mn = null), (this.tainted_ = !0))
      }
    }
    return this.tainted_ === !0
  }
  dispatchChangeEvent_() {
    this.dispatchEvent(dt.CHANGE)
  }
  handleImageError_() {
    ;((this.imageState_ = tt.ERROR), this.unlistenImage_(), this.dispatchChangeEvent_())
  }
  handleImageLoad_() {
    ;((this.imageState_ = tt.LOADED),
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
          i = qt(t, e)
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
    if (this.imageState_ === tt.IDLE) {
      ;(this.image_ || this.initializeImage_(), (this.imageState_ = tt.LOADING))
      try {
        this.image_.src = this.src_
      } catch {
        this.handleImageError_()
      }
      this.unlisten_ = Rm(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this))
    }
  }
  replaceColor_(t) {
    if (!this.color_ || this.canvas_[t] || this.imageState_ !== tt.LOADED) return
    const e = this.image_,
      i = document.createElement('canvas')
    ;((i.width = Math.ceil(e.width * t)), (i.height = Math.ceil(e.height * t)))
    const s = i.getContext('2d')
    ;(s.scale(t, t),
      s.drawImage(e, 0, 0),
      (s.globalCompositeOperation = 'multiply'),
      (s.fillStyle = Jc(this.color_)),
      s.fillRect(0, 0, i.width / t, i.height / t),
      (s.globalCompositeOperation = 'destination-in'),
      s.drawImage(e, 0, 0),
      (this.canvas_[t] = i))
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null))
  }
}
function wm(n, t, e, i, s, r) {
  let o = Gl.get(t, i, r)
  return (o || ((o = new Tm(n, t, e, i, s, r)), Gl.set(t, i, r, o)), o)
}
function Xl(n, t, e, i) {
  return e !== void 0 && i !== void 0 ? [e / n, i / t] : e !== void 0 ? e / n : i !== void 0 ? i / t : 1
}
class wr extends Tr {
  constructor(t) {
    t = t || {}
    const e = t.opacity !== void 0 ? t.opacity : 1,
      i = t.rotation !== void 0 ? t.rotation : 0,
      s = t.scale !== void 0 ? t.scale : 1,
      r = t.rotateWithView !== void 0 ? t.rotateWithView : !1
    ;(super({
      opacity: e,
      rotation: i,
      scale: s,
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
    ;(et(!(a !== void 0 && o), 4),
      et(!o || (o && this.imgSize_), 5),
      (a === void 0 || a.length === 0) && o && (a = o.src || K(o)),
      et(a !== void 0 && a.length > 0, 6),
      et(!((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0), 69))
    const l = t.src !== void 0 ? tt.IDLE : tt.LOADED
    if (
      ((this.color_ = t.color !== void 0 ? er(t.color) : null),
      (this.iconImage_ = wm(
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
            this.setScale(Xl(f[0], f[1], t.width, t.height))
          }
          this.listenImageChange(d)
          return
        }
      }
      h !== void 0 && this.setScale(Xl(h, c, t.width, t.height))
    }
  }
  clone() {
    let t, e, i
    return (
      this.initialOptions_
        ? ((e = this.initialOptions_.width), (i = this.initialOptions_.height))
        : ((t = this.getScale()), (t = Array.isArray(t) ? t.slice() : t)),
      new wr({
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
      const s = this.getSize()
      if (this.anchorXUnits_ == 'fraction' || this.anchorYUnits_ == 'fraction') {
        if (!s) return null
        ;((t = this.anchor_.slice()),
          this.anchorXUnits_ == 'fraction' && (t[0] *= s[0]),
          this.anchorYUnits_ == 'fraction' && (t[1] *= s[1]))
      }
      if (this.anchorOrigin_ != 'top-left') {
        if (!s) return null
        ;(t === this.anchor_ && (t = this.anchor_.slice()),
          (this.anchorOrigin_ == 'top-right' || this.anchorOrigin_ == 'bottom-right') &&
            (t[0] = -t[0] + s[0]),
          (this.anchorOrigin_ == 'bottom-left' || this.anchorOrigin_ == 'bottom-right') &&
            (t[1] = -t[1] + s[1]))
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
    if (this.iconImage_.getImageState() == tt.LOADED) return this.iconImage_.getSize()[0] * t[0]
  }
  getHeight() {
    const t = this.getScaleArray()
    if (this.size_) return this.size_[1] * t[1]
    if (this.iconImage_.getImageState() == tt.LOADED) return this.iconImage_.getSize()[1] * t[1]
  }
  setScale(t) {
    ;(delete this.initialOptions_, super.setScale(t))
  }
  listenImageChange(t) {
    this.iconImage_.addEventListener(dt.CHANGE, t)
  }
  load() {
    this.iconImage_.load()
  }
  unlistenImageChange(t) {
    this.iconImage_.removeEventListener(dt.CHANGE, t)
  }
}
class xe {
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
    return new xe({
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
function se(n) {
  return Array.isArray(n) ? Qc(n) : n
}
const Sm = new RegExp(
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
  zl = ['style', 'variant', 'weight', 'size', 'lineHeight', 'family'],
  tu = function (n) {
    const t = n.match(Sm)
    if (!t) return null
    const e = { lineHeight: 'normal', size: '1.2em', style: 'normal', weight: 'normal', variant: 'normal' }
    for (let i = 0, s = zl.length; i < s; ++i) {
      const r = t[i + 1]
      r !== void 0 && (e[zl[i]] = r)
    }
    return ((e.families = e.family.split(/,\s?/)), e)
  },
  eu = '10px sans-serif',
  wt = '#000',
  ir = 'round',
  Ee = [],
  Ce = 0,
  sn = 'round',
  bn = 10,
  On = '#000',
  Dn = 'center',
  nr = 'middle',
  si = [0, 0, 0, 0],
  kn = 1,
  Pe = new Te()
let bi = null,
  Po
const Lo = {},
  vm = (function () {
    const t = '32px ',
      e = ['monospace', 'serif'],
      i = e.length,
      s = 'wmytzilWMYTZIL@#/&?$%10'
    let r, o
    function a(h, c, u) {
      let d = !0
      for (let f = 0; f < i; ++f) {
        const g = e[f]
        if (((o = sr(h + ' ' + c + ' ' + t + g, s)), u != g)) {
          const _ = sr(h + ' ' + c + ' ' + t + u + ',' + g, s)
          d = d && _ != o
        }
      }
      return !!d
    }
    function l() {
      let h = !0
      const c = Pe.getKeys()
      for (let u = 0, d = c.length; u < d; ++u) {
        const f = c[u]
        Pe.get(f) < 100 &&
          (a.apply(
            this,
            f.split(`
`),
          )
            ? (ha(Lo), (bi = null), (Po = void 0), Pe.set(f, 100))
            : (Pe.set(f, Pe.get(f) + 1, !0), (h = !1)))
      }
      h && (clearInterval(r), (r = void 0))
    }
    return function (h) {
      const c = tu(h)
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
        Pe.get(_) === void 0 &&
          (Pe.set(_, 100, !0),
          a(c.style, c.weight, g) || (Pe.set(_, 0, !0), r === void 0 && (r = setInterval(l, 32))))
      }
    }
  })(),
  Im = (function () {
    let n
    return function (t) {
      let e = Lo[t]
      if (e == null) {
        if (_a) {
          const i = tu(t),
            s = iu(t, 'Žg')
          e =
            (isNaN(Number(i.lineHeight)) ? 1.2 : Number(i.lineHeight)) *
            (s.actualBoundingBoxAscent + s.actualBoundingBoxDescent)
        } else
          (n ||
            ((n = document.createElement('div')),
            (n.innerHTML = 'M'),
            (n.style.minHeight = '0'),
            (n.style.maxHeight = 'none'),
            (n.style.height = 'auto'),
            (n.style.padding = '0'),
            (n.style.border = 'none'),
            (n.style.position = 'absolute'),
            (n.style.display = 'block'),
            (n.style.left = '-99999px')),
            (n.style.font = t),
            document.body.appendChild(n),
            (e = n.offsetHeight),
            document.body.removeChild(n))
        Lo[t] = e
      }
      return e
    }
  })()
function iu(n, t) {
  return (bi || (bi = qt(1, 1)), n != Po && ((bi.font = n), (Po = bi.font)), bi.measureText(t))
}
function sr(n, t) {
  return iu(n, t).width
}
function jl(n, t, e) {
  if (t in e) return e[t]
  const i = t
    .split(
      `
`,
    )
    .reduce((s, r) => Math.max(s, sr(n, r)), 0)
  return ((e[t] = i), i)
}
function Mm(n, t) {
  const e = [],
    i = [],
    s = []
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
      ;((r = Math.max(r, o)), s.push(o), (o = 0), (a += l))
      continue
    }
    const d = t[h + 1] || n.font,
      f = sr(d, u)
    ;(e.push(f), (o += f))
    const g = Im(d)
    ;(i.push(g), (l = Math.max(l, g)))
  }
  return { width: r, height: a, widths: e, heights: i, lineWidths: s }
}
function Pm(n, t, e, i, s, r, o, a, l, h, c) {
  ;(n.save(),
    e !== 1 && (n.globalAlpha *= e),
    t && n.setTransform.apply(n, t),
    i.contextInstructions
      ? (n.translate(l, h), n.scale(c[0], c[1]), Lm(i, n))
      : c[0] < 0 || c[1] < 0
        ? (n.translate(l, h), n.scale(c[0], c[1]), n.drawImage(i, s, r, o, a, 0, 0, o, a))
        : n.drawImage(i, s, r, o, a, l, h, o * c[0], a * c[1]),
    n.restore())
}
function Lm(n, t) {
  const e = n.contextInstructions
  for (let i = 0, s = e.length; i < s; i += 2)
    Array.isArray(e[i + 1]) ? t[e[i]].apply(t, e[i + 1]) : (t[e[i]] = e[i + 1])
}
class Sr extends Tr {
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
      e = new Sr({
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
        s = qt(i.size * t, i.size * t)
      ;(this.draw_(i, s, t), (e = s.canvas), (this.canvas_[t] = e))
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
    return tt.LOADED
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
    let s = this.radius_,
      r = this.radius2_ === void 0 ? s : this.radius2_
    if (s < r) {
      const T = s
      ;((s = r), (r = T))
    }
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2,
      a = (2 * Math.PI) / o,
      l = r * Math.sin(a),
      h = Math.sqrt(r * r - l * l),
      c = s - h,
      u = Math.sqrt(l * l + c * c),
      d = u / l
    if (t === 'miter' && d <= i) return d * e
    const f = e / 2 / d,
      g = (e / 2) * (c / u),
      m = Math.sqrt((s + f) * (s + f) + g * g) - s
    if (this.radius2_ === void 0 || t === 'bevel') return m * 2
    const y = s * Math.sin(a),
      p = Math.sqrt(s * s - y * y),
      x = r - p,
      C = Math.sqrt(y * y + x * x) / y
    if (C <= i) {
      const T = (C * e) / 2 - r - s
      return 2 * Math.max(m, T)
    }
    return m * 2
  }
  createRenderOptions() {
    let t = sn,
      e = 0,
      i = null,
      s = 0,
      r,
      o = 0
    this.stroke_ &&
      ((r = this.stroke_.getColor()),
      r === null && (r = On),
      (r = se(r)),
      (o = this.stroke_.getWidth()),
      o === void 0 && (o = kn),
      (i = this.stroke_.getLineDash()),
      (s = this.stroke_.getLineDashOffset()),
      (t = this.stroke_.getLineJoin()),
      t === void 0 && (t = sn),
      (e = this.stroke_.getMiterLimit()),
      e === void 0 && (e = bn))
    const a = this.calculateLineJoinSize_(t, o, e),
      l = Math.max(this.radius_, this.radius2_ || 0),
      h = Math.ceil(2 * l + a)
    return {
      strokeStyle: r,
      strokeWidth: o,
      size: h,
      lineDash: i,
      lineDashOffset: s,
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
      let s = this.fill_.getColor()
      ;(s === null && (s = wt), (e.fillStyle = se(s)), e.fill())
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
        (typeof e == 'string' && (e = er(e)),
        e === null ? (i = 1) : Array.isArray(e) && (i = e.length === 4 ? e[3] : 1),
        i === 0)
      ) {
        const s = qt(t.size, t.size)
        ;((this.hitDetectionCanvas_ = s.canvas), this.drawHitDetectionCanvas_(t, s))
      }
    }
    this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.getImage(1))
  }
  createPath_(t) {
    let e = this.points_
    const i = this.radius_
    if (e === 1 / 0) t.arc(0, 0, i, 0, 2 * Math.PI)
    else {
      const s = this.radius2_ === void 0 ? i : this.radius2_
      this.radius2_ !== void 0 && (e *= 2)
      const r = this.angle_ - Math.PI / 2,
        o = (2 * Math.PI) / e
      for (let a = 0; a < e; a++) {
        const l = r + a * o,
          h = a % 2 === 0 ? i : s
        t.lineTo(h * Math.cos(l), h * Math.sin(l))
      }
      t.closePath()
    }
  }
  drawHitDetectionCanvas_(t, e) {
    ;(e.translate(t.size / 2, t.size / 2),
      this.createPath_(e),
      (e.fillStyle = wt),
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
class hn extends Sr {
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
      e = new hn({
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
class Kt {
  constructor(t) {
    ;((t = t || {}),
      (this.geometry_ = null),
      (this.geometryFunction_ = Wl),
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
      new Kt({
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
          : (this.geometryFunction_ = Wl),
      (this.geometry_ = t))
  }
  setZIndex(t) {
    this.zIndex_ = t
  }
}
function Am(n) {
  let t
  if (typeof n == 'function') t = n
  else {
    let e
    ;(Array.isArray(n) ? (e = n) : (et(typeof n.getZIndex == 'function', 41), (e = [n])),
      (t = function () {
        return e
      }))
  }
  return t
}
let zr = null
function Fm(n, t) {
  if (!zr) {
    const e = new Ve({ color: 'rgba(255,255,255,0.4)' }),
      i = new xe({ color: '#3399CC', width: 1.25 })
    zr = [new Kt({ image: new hn({ fill: e, stroke: i, radius: 5 }), fill: e, stroke: i })]
  }
  return zr
}
function nu() {
  const n = {},
    t = [255, 255, 255, 1],
    e = [0, 153, 255, 1],
    i = 3
  return (
    (n.Polygon = [new Kt({ fill: new Ve({ color: [255, 255, 255, 0.5] }) })]),
    (n.MultiPolygon = n.Polygon),
    (n.LineString = [
      new Kt({ stroke: new xe({ color: t, width: i + 2 }) }),
      new Kt({ stroke: new xe({ color: e, width: i }) }),
    ]),
    (n.MultiLineString = n.LineString),
    (n.Circle = n.Polygon.concat(n.LineString)),
    (n.Point = [
      new Kt({
        image: new hn({
          radius: i * 2,
          fill: new Ve({ color: e }),
          stroke: new xe({ color: t, width: i / 2 }),
        }),
        zIndex: 1 / 0,
      }),
    ]),
    (n.MultiPoint = n.Point),
    (n.GeometryCollection = n.Polygon.concat(n.LineString, n.Point)),
    n
  )
}
function Wl(n) {
  return n.getGeometry()
}
const bm = '#333'
class wa {
  constructor(t) {
    ;((t = t || {}),
      (this.font_ = t.font),
      (this.rotation_ = t.rotation),
      (this.rotateWithView_ = t.rotateWithView),
      (this.scale_ = t.scale),
      (this.scaleArray_ = tr(t.scale !== void 0 ? t.scale : 1)),
      (this.text_ = t.text),
      (this.textAlign_ = t.textAlign),
      (this.justify_ = t.justify),
      (this.repeat_ = t.repeat),
      (this.textBaseline_ = t.textBaseline),
      (this.fill_ = t.fill !== void 0 ? t.fill : new Ve({ color: bm })),
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
    return new wa({
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
    ;((this.scale_ = t), (this.scaleArray_ = tr(t !== void 0 ? t : 1)))
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
class qn extends Ke {
  constructor(t, e, i) {
    ;(super(),
      i !== void 0 && e === void 0
        ? this.setFlatCoordinates(i, t)
        : ((e = e || 0), this.setCenterAndRadius(t, e, i)))
  }
  clone() {
    const t = new qn(this.flatCoordinates.slice(), void 0, this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, i, s) {
    const r = this.flatCoordinates,
      o = t - r[0],
      a = e - r[1],
      l = o * o + a * a
    if (l < s) {
      if (l === 0) for (let h = 0; h < this.stride; ++h) i[h] = r[h]
      else {
        const h = this.getRadius() / Math.sqrt(l)
        ;((i[0] = r[0] + h * o), (i[1] = r[1] + h * a))
        for (let c = 2; c < this.stride; ++c) i[c] = r[c]
      }
      return ((i.length = this.stride), l)
    }
    return s
  }
  containsXY(t, e) {
    const i = this.flatCoordinates,
      s = t - i[0],
      r = e - i[1]
    return s * s + r * r <= this.getRadiusSquared_()
  }
  getCenter() {
    return this.flatCoordinates.slice(0, this.stride)
  }
  computeExtent(t) {
    const e = this.flatCoordinates,
      i = e[this.stride] - e[0]
    return hi(e[0] - i, e[1] - i, e[0] + i, e[1] + i, t)
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
    if (zt(t, e)) {
      const i = this.getCenter()
      return (t[0] <= i[0] && t[2] >= i[0]) || (t[1] <= i[1] && t[3] >= i[1])
        ? !0
        : Sc(t, this.intersectsCoordinate.bind(this))
    }
    return !1
  }
  setCenter(t) {
    const e = this.stride,
      i = this.flatCoordinates[e] - this.flatCoordinates[0],
      s = t.slice()
    s[e] = s[0] + i
    for (let r = 1; r < e; ++r) s[e + r] = t[r]
    ;(this.setFlatCoordinates(this.layout, s), this.changed())
  }
  setCenterAndRadius(t, e, i) {
    ;(this.setLayout(i, t, 0), this.flatCoordinates || (this.flatCoordinates = []))
    const s = this.flatCoordinates
    let r = jc(s, 0, t, this.stride)
    s[r++] = s[0] + e
    for (let o = 1, a = this.stride; o < a; ++o) s[r++] = s[o]
    ;((s.length = r), this.changed())
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
      s = this.getStride()
    ;(this.setCenter(ma(i, 0, i.length, s, t, e, i)), this.changed())
  }
}
qn.prototype.transform
const Om = { POINT: Wt, LINESTRING: $t, POLYGON: Yt, MULTIPOINT: ln, MULTILINESTRING: ci, MULTIPOLYGON: ui },
  su = 'EMPTY',
  ru = 'Z',
  ou = 'M',
  Dm = 'ZM',
  j = { START: 0, TEXT: 1, LEFT_PAREN: 2, RIGHT_PAREN: 3, NUMBER: 4, COMMA: 5, EOF: 6 },
  km = {
    Point: 'POINT',
    LineString: 'LINESTRING',
    Polygon: 'POLYGON',
    MultiPoint: 'MULTIPOINT',
    MultiLineString: 'MULTILINESTRING',
    MultiPolygon: 'MULTIPOLYGON',
    GeometryCollection: 'GEOMETRYCOLLECTION',
    Circle: 'CIRCLE',
  }
class Nm {
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
      s
    if (t == '(') s = j.LEFT_PAREN
    else if (t == ',') s = j.COMMA
    else if (t == ')') s = j.RIGHT_PAREN
    else if (this.isNumeric_(t) || t == '-') ((s = j.NUMBER), (i = this.readNumber_()))
    else if (this.isAlpha_(t)) ((s = j.TEXT), (i = this.readText_()))
    else {
      if (this.isWhiteSpace_(t)) return this.nextToken()
      if (t === '') s = j.EOF
      else throw new Error('Unexpected character: ' + t)
    }
    return { position: e, value: i, type: s }
  }
  readNumber_() {
    let t
    const e = this.index_
    let i = !1,
      s = !1
    do (t == '.' ? (i = !0) : (t == 'e' || t == 'E') && (s = !0), (t = this.nextChar_()))
    while (this.isNumeric_(t, i) || (!s && (t == 'e' || t == 'E')) || (s && (t == '-' || t == '+')))
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
class Gm {
  constructor(t) {
    ;((this.lexer_ = t), (this.token_ = { position: 0, type: j.START }), (this.layout_ = 'XY'))
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
    if (this.isTokenType(j.TEXT)) {
      const i = e.value
      ;(i === ru ? (t = 'XYZ') : i === ou ? (t = 'XYM') : i === Dm && (t = 'XYZM'),
        t !== 'XY' && this.consume_())
    }
    return t
  }
  parseGeometryCollectionText_() {
    if (this.match(j.LEFT_PAREN)) {
      const t = []
      do t.push(this.parseGeometry_())
      while (this.match(j.COMMA))
      if (this.match(j.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parsePointText_() {
    if (this.match(j.LEFT_PAREN)) {
      const t = this.parsePoint_()
      if (this.match(j.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseLineStringText_() {
    if (this.match(j.LEFT_PAREN)) {
      const t = this.parsePointList_()
      if (this.match(j.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parsePolygonText_() {
    if (this.match(j.LEFT_PAREN)) {
      const t = this.parseLineStringTextList_()
      if (this.match(j.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseMultiPointText_() {
    if (this.match(j.LEFT_PAREN)) {
      let t
      if (
        (this.token_.type == j.LEFT_PAREN ? (t = this.parsePointTextList_()) : (t = this.parsePointList_()),
        this.match(j.RIGHT_PAREN))
      )
        return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseMultiLineStringText_() {
    if (this.match(j.LEFT_PAREN)) {
      const t = this.parseLineStringTextList_()
      if (this.match(j.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseMultiPolygonText_() {
    if (this.match(j.LEFT_PAREN)) {
      const t = this.parsePolygonTextList_()
      if (this.match(j.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parsePoint_() {
    const t = [],
      e = this.layout_.length
    for (let i = 0; i < e; ++i) {
      const s = this.token_
      if (this.match(j.NUMBER)) t.push(s.value)
      else break
    }
    if (t.length == e) return t
    throw new Error(this.formatErrorMessage_())
  }
  parsePointList_() {
    const t = [this.parsePoint_()]
    for (; this.match(j.COMMA); ) t.push(this.parsePoint_())
    return t
  }
  parsePointTextList_() {
    const t = [this.parsePointText_()]
    for (; this.match(j.COMMA); ) t.push(this.parsePointText_())
    return t
  }
  parseLineStringTextList_() {
    const t = [this.parseLineStringText_()]
    for (; this.match(j.COMMA); ) t.push(this.parseLineStringText_())
    return t
  }
  parsePolygonTextList_() {
    const t = [this.parsePolygonText_()]
    for (; this.match(j.COMMA); ) t.push(this.parsePolygonText_())
    return t
  }
  isEmptyGeometry_() {
    const t = this.isTokenType(j.TEXT) && this.token_.value == su
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
    if (this.match(j.TEXT)) {
      const e = t.value
      this.layout_ = this.parseGeometryLayout_()
      const i = this.isEmptyGeometry_()
      if (e == 'GEOMETRYCOLLECTION') {
        if (i) return new Be([])
        const o = this.parseGeometryCollectionText_()
        return new Be(o)
      }
      const s = Om[e]
      if (!s) throw new Error('Invalid geometry type: ' + e)
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
      return new s(r, this.layout_)
    }
    throw new Error(this.formatErrorMessage_())
  }
}
class Cs extends gm {
  constructor(t) {
    ;(super(), (t = t || {}), (this.splitCollection_ = t.splitCollection !== void 0 ? t.splitCollection : !1))
  }
  parse_(t) {
    const e = new Nm(t)
    return new Gm(e).parse()
  }
  readFeatureFromText(t, e) {
    const i = this.readGeometryFromText(t, e),
      s = new pt()
    return (s.setGeometry(i), s)
  }
  readFeaturesFromText(t, e) {
    let i = []
    const s = this.readGeometryFromText(t, e)
    this.splitCollection_ && s.getType() == 'GeometryCollection' ? (i = s.getGeometriesArray()) : (i = [s])
    const r = []
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = new pt()
      ;(l.setGeometry(i[o]), r.push(l))
    }
    return r
  }
  readGeometryFromText(t, e) {
    const i = this.parse_(t)
    return Js(i, !1, e)
  }
  writeFeatureText(t, e) {
    const i = t.getGeometry()
    return i ? this.writeGeometryText(i, e) : ''
  }
  writeFeaturesText(t, e) {
    if (t.length == 1) return this.writeFeatureText(t[0], e)
    const i = []
    for (let r = 0, o = t.length; r < o; ++r) i.push(t[r].getGeometry())
    const s = new Be(i)
    return this.writeGeometryText(s, e)
  }
  writeGeometryText(t, e) {
    return hu(Js(t, !0, e))
  }
}
function au(n) {
  const t = n.getCoordinates()
  return t.length === 0 ? '' : t.join(' ')
}
function Xm(n) {
  const t = [],
    e = n.getPoints()
  for (let i = 0, s = e.length; i < s; ++i) t.push('(' + au(e[i]) + ')')
  return t.join(',')
}
function zm(n) {
  const t = [],
    e = n.getGeometries()
  for (let i = 0, s = e.length; i < s; ++i) t.push(hu(e[i]))
  return t.join(',')
}
function Sa(n) {
  const t = n.getCoordinates(),
    e = []
  for (let i = 0, s = t.length; i < s; ++i) e.push(t[i].join(' '))
  return e.join(',')
}
function jm(n) {
  const t = [],
    e = n.getLineStrings()
  for (let i = 0, s = e.length; i < s; ++i) t.push('(' + Sa(e[i]) + ')')
  return t.join(',')
}
function lu(n) {
  const t = [],
    e = n.getLinearRings()
  for (let i = 0, s = e.length; i < s; ++i) t.push('(' + Sa(e[i]) + ')')
  return t.join(',')
}
function Wm(n) {
  const t = [],
    e = n.getPolygons()
  for (let i = 0, s = e.length; i < s; ++i) t.push('(' + lu(e[i]) + ')')
  return t.join(',')
}
function Ym(n) {
  const t = n.getLayout()
  let e = ''
  return ((t === 'XYZ' || t === 'XYZM') && (e += ru), (t === 'XYM' || t === 'XYZM') && (e += ou), e)
}
const Bm = {
  Point: au,
  LineString: Sa,
  Polygon: lu,
  MultiPoint: Xm,
  MultiLineString: jm,
  MultiPolygon: Wm,
  GeometryCollection: zm,
}
function hu(n) {
  const t = n.getType(),
    e = Bm[t],
    i = e(n)
  let s = km[t]
  if (typeof n.getFlatCoordinates == 'function') {
    const r = Ym(n)
    r.length > 0 && (s += ' ' + r)
  }
  return i.length === 0 ? s + ' ' + su : s + '(' + i + ')'
}
const rr = { ACTIVE: 'active' }
function Vm(n) {
  return Math.pow(n, 3)
}
function Um(n) {
  return 1 - Vm(1 - n)
}
function Zm(n) {
  return 3 * n * n - 2 * n * n * n
}
class Km extends Te {
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
    return this.get(rr.ACTIVE)
  }
  getMap() {
    return this.map_
  }
  handleEvent(t) {
    return !0
  }
  setActive(t) {
    this.set(rr.ACTIVE, t)
  }
  setMap(t) {
    this.map_ = t
  }
}
const ct = {
  SINGLECLICK: 'singleclick',
  DBLCLICK: dt.DBLCLICK,
  POINTERDRAG: 'pointerdrag',
  POINTERMOVE: 'pointermove',
  POINTERDOWN: 'pointerdown',
  POINTERUP: 'pointerup',
}
class vr extends Km {
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
      if (t.type == ct.POINTERDRAG) (this.handleDragEvent(t), t.originalEvent.preventDefault())
      else if (t.type == ct.POINTERUP) {
        const i = this.handleUpEvent(t)
        this.handlingDownUpSequence = i && this.targetPointers.length > 0
      }
    } else if (t.type == ct.POINTERDOWN) {
      const i = this.handleDownEvent(t)
      ;((this.handlingDownUpSequence = i), (e = this.stopDown(i)))
    } else t.type == ct.POINTERMOVE && this.handleMoveEvent(t)
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
const $m = function (n) {
    const t = n.originalEvent
    return t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  or = Qi,
  Hm = la,
  qm = function (n) {
    return n.type == ct.SINGLECLICK
  },
  Jm = function (n) {
    const t = n.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  Qm = function (n) {
    const t = n.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  t0 = function (n) {
    const t = n.originalEvent
    return (et(t !== void 0, 56), t.isPrimary && t.button === 0)
  }
function e0(n) {
  if (n !== void 0) return 0
}
function Yl(n) {
  if (n !== void 0) return n
}
function i0(n) {
  const t = (2 * Math.PI) / n
  return function (e, i) {
    if (i) return e
    if (e !== void 0) return ((e = Math.floor(e / t + 0.5) * t), e)
  }
}
function n0(n) {
  return (
    (n = n || $i(5)),
    function (t, e) {
      if (e) return t
      if (t !== void 0) return Math.abs(t) <= n ? 0 : t
    }
  )
}
class s0 extends xt {
  constructor(t, e, i) {
    ;(super(t), (this.map = e), (this.frameState = i !== void 0 ? i : null))
  }
}
class r0 extends s0 {
  constructor(t, e, i, s, r, o) {
    ;(super(t, e, r),
      (this.originalEvent = i),
      (this.pixel_ = null),
      (this.coordinate_ = null),
      (this.dragging = s !== void 0 ? s : !1),
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
const V = {
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
class o0 extends Te {
  constructor(t) {
    ;(super(), this.on, this.once, this.un, (this.background_ = t.background))
    const e = Object.assign({}, t)
    ;(typeof t.properties == 'object' && (delete e.properties, Object.assign(e, t.properties)),
      (e[V.OPACITY] = t.opacity !== void 0 ? t.opacity : 1),
      et(typeof e[V.OPACITY] == 'number', 64),
      (e[V.VISIBLE] = t.visible !== void 0 ? t.visible : !0),
      (e[V.Z_INDEX] = t.zIndex),
      (e[V.MAX_RESOLUTION] = t.maxResolution !== void 0 ? t.maxResolution : 1 / 0),
      (e[V.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0),
      (e[V.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0),
      (e[V.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0),
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
      (e.opacity = ut(Math.round(this.getOpacity() * 100) / 100, 0, 1)),
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
    return A()
  }
  getLayerStatesArray(t) {
    return A()
  }
  getExtent() {
    return this.get(V.EXTENT)
  }
  getMaxResolution() {
    return this.get(V.MAX_RESOLUTION)
  }
  getMinResolution() {
    return this.get(V.MIN_RESOLUTION)
  }
  getMinZoom() {
    return this.get(V.MIN_ZOOM)
  }
  getMaxZoom() {
    return this.get(V.MAX_ZOOM)
  }
  getOpacity() {
    return this.get(V.OPACITY)
  }
  getSourceState() {
    return A()
  }
  getVisible() {
    return this.get(V.VISIBLE)
  }
  getZIndex() {
    return this.get(V.Z_INDEX)
  }
  setBackground(t) {
    ;((this.background_ = t), this.changed())
  }
  setExtent(t) {
    this.set(V.EXTENT, t)
  }
  setMaxResolution(t) {
    this.set(V.MAX_RESOLUTION, t)
  }
  setMinResolution(t) {
    this.set(V.MIN_RESOLUTION, t)
  }
  setMaxZoom(t) {
    this.set(V.MAX_ZOOM, t)
  }
  setMinZoom(t) {
    this.set(V.MIN_ZOOM, t)
  }
  setOpacity(t) {
    ;(et(typeof t == 'number', 64), this.set(V.OPACITY, t))
  }
  setVisible(t) {
    this.set(V.VISIBLE, t)
  }
  setZIndex(t) {
    this.set(V.Z_INDEX, t)
  }
  disposeInternal() {
    ;(this.state_ && ((this.state_.layer = null), (this.state_ = null)), super.disposeInternal())
  }
}
const Nn = { PRERENDER: 'prerender', POSTRENDER: 'postrender', PRECOMPOSE: 'precompose' },
  Gt = { ANIMATING: 0, INTERACTING: 1 },
  Ut = { CENTER: 'center', RESOLUTION: 'resolution', ROTATION: 'rotation' },
  a0 = 256
function Bl(n, t, e) {
  return function (i, s, r, o, a) {
    if (!i) return
    if (!s && !t) return i
    const l = t ? 0 : r[0] * s,
      h = t ? 0 : r[1] * s,
      c = a ? a[0] : 0,
      u = a ? a[1] : 0
    let d = n[0] + l / 2 + c,
      f = n[2] - l / 2 + c,
      g = n[1] + h / 2 + u,
      _ = n[3] - h / 2 + u
    ;(d > f && ((d = (f + d) / 2), (f = d)), g > _ && ((g = (_ + g) / 2), (_ = g)))
    let m = ut(i[0], d, f),
      y = ut(i[1], g, _)
    if (o && e && s) {
      const p = 30 * s
      ;((m += -p * Math.log(1 + Math.max(0, d - i[0]) / p) + p * Math.log(1 + Math.max(0, i[0] - f) / p)),
        (y += -p * Math.log(1 + Math.max(0, g - i[1]) / p) + p * Math.log(1 + Math.max(0, i[1] - _) / p)))
    }
    return [m, y]
  }
}
function l0(n) {
  return n
}
function va(n, t, e, i) {
  const s = jt(t) / e[0],
    r = Ln(t) / e[1]
  return i ? Math.min(n, Math.max(s, r)) : Math.min(n, Math.min(s, r))
}
function Ia(n, t, e) {
  let i = Math.min(n, t)
  const s = 50
  return (
    (i *= Math.log(1 + s * Math.max(0, n / t - 1)) / s + 1),
    e && ((i = Math.max(i, e)), (i /= Math.log(1 + s * Math.max(0, e / n - 1)) / s + 1)),
    ut(i, e / 2, t * 2)
  )
}
function h0(n, t, e, i) {
  return (
    (t = t !== void 0 ? t : !0),
    function (s, r, o, a) {
      if (s !== void 0) {
        const l = n[0],
          h = n[n.length - 1],
          c = e ? va(l, e, o, i) : l
        if (a) return t ? Ia(s, c, h) : ut(s, h, c)
        const u = Math.min(c, s),
          d = Math.floor(pc(n, u, r))
        return n[d] > c && d < n.length - 1 ? n[d + 1] : n[d]
      }
    }
  )
}
function c0(n, t, e, i, s, r) {
  return (
    (i = i !== void 0 ? i : !0),
    (e = e !== void 0 ? e : 0),
    function (o, a, l, h) {
      if (o !== void 0) {
        const c = s ? va(t, s, l, r) : t
        if (h) return i ? Ia(o, c, e) : ut(o, e, c)
        const u = 1e-9,
          d = Math.ceil(Math.log(t / c) / Math.log(n) - u),
          f = -a * (0.5 - u) + 0.5,
          g = Math.min(c, o),
          _ = Math.floor(Math.log(t / g) / Math.log(n) + f),
          m = Math.max(d, _),
          y = t / Math.pow(n, m)
        return ut(y, e, c)
      }
    }
  )
}
function Vl(n, t, e, i, s) {
  return (
    (e = e !== void 0 ? e : !0),
    function (r, o, a, l) {
      if (r !== void 0) {
        const h = i ? va(n, i, a, s) : n
        return !e || !l ? ut(r, t, h) : Ia(r, h, t)
      }
    }
  )
}
const jr = 0
class Ul extends Te {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      (t = Object.assign({}, t)),
      (this.hints_ = [0, 0]),
      (this.animations_ = []),
      this.updateAnimationKey_,
      (this.projection_ = ga(t.projection, 'EPSG:3857')),
      (this.viewportSize_ = [100, 100]),
      (this.targetCenter_ = null),
      this.targetResolution_,
      this.targetRotation_,
      (this.nextCenter_ = null),
      this.nextResolution_,
      this.nextRotation_,
      (this.cancelAnchor_ = void 0),
      t.projection && Nc(),
      t.center && (t.center = J(t.center, this.projection_)),
      t.extent && (t.extent = zi(t.extent, this.projection_)),
      this.applyOptions_(t))
  }
  applyOptions_(t) {
    const e = Object.assign({}, t)
    for (const a in Ut) delete e[a]
    this.setProperties(e, !0)
    const i = d0(t)
    ;((this.maxResolution_ = i.maxResolution),
      (this.minResolution_ = i.minResolution),
      (this.zoomFactor_ = i.zoomFactor),
      (this.resolutions_ = t.resolutions),
      (this.padding_ = t.padding),
      (this.minZoom_ = i.minZoom))
    const s = u0(t),
      r = i.constraint,
      o = f0(t)
    ;((this.constraints_ = { center: s, resolution: r, rotation: o }),
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
      const s = t || [0, 0, 0, 0]
      e = e || [0, 0, 0, 0]
      const r = this.getResolution(),
        o = (r / 2) * (s[3] - e[3] + e[1] - s[1]),
        a = (r / 2) * (s[0] - e[0] + e[2] - s[2])
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
      let s = arguments[i]
      ;(s.center && ((s = Object.assign({}, s)), (s.center = J(s.center, this.getProjection()))),
        s.anchor && ((s = Object.assign({}, s)), (s.anchor = J(s.anchor, this.getProjection()))),
        (e[i] = s))
    }
    this.animateInternal.apply(this, e)
  }
  animateInternal(t) {
    let e = arguments.length,
      i
    e > 1 && typeof arguments[e - 1] == 'function' && ((i = arguments[e - 1]), --e)
    let s = 0
    for (; s < e && !this.isDef(); ++s) {
      const c = arguments[s]
      ;(c.center && this.setCenterInternal(c.center),
        c.zoom !== void 0 ? this.setZoom(c.zoom) : c.resolution && this.setResolution(c.resolution),
        c.rotation !== void 0 && this.setRotation(c.rotation))
    }
    if (s === e) {
      i && Rs(i, !0)
      return
    }
    let r = Date.now(),
      o = this.targetCenter_.slice(),
      a = this.targetResolution_,
      l = this.targetRotation_
    const h = []
    for (; s < e; ++s) {
      const c = arguments[s],
        u = {
          start: r,
          complete: !1,
          anchor: c.anchor,
          duration: c.duration !== void 0 ? c.duration : 1e3,
          easing: c.easing || Zm,
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
        const d = Hs(c.rotation - l + Math.PI, 2 * Math.PI) - Math.PI
        ;((u.targetRotation = l + d), (l = u.targetRotation))
      }
      ;(g0(u) ? (u.complete = !0) : (r += u.duration), h.push(u))
    }
    ;(this.animations_.push(h), this.setHint(Gt.ANIMATING, 1), this.updateAnimations_())
  }
  getAnimating() {
    return this.hints_[Gt.ANIMATING] > 0
  }
  getInteracting() {
    return this.hints_[Gt.INTERACTING] > 0
  }
  cancelAnimations() {
    this.setHint(Gt.ANIMATING, -this.hints_[Gt.ANIMATING])
    let t
    for (let e = 0, i = this.animations_.length; e < i; ++e) {
      const s = this.animations_[e]
      if ((s[0].callback && Rs(s[0].callback, !1), !t))
        for (let r = 0, o = s.length; r < o; ++r) {
          const a = s[r]
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
      const s = this.animations_[i]
      let r = !0
      for (let o = 0, a = s.length; o < a; ++o) {
        const l = s[o]
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
            y = f + u * (_ - f)
          this.targetCenter_ = [m, y]
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
              ? Hs(l.targetRotation + Math.PI, 2 * Math.PI) - Math.PI
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
          this.setHint(Gt.ANIMATING, -1),
          (this.nextCenter_ = null),
          (this.nextResolution_ = NaN),
          (this.nextRotation_ = NaN))
        const o = s[0].callback
        o && Rs(o, !0)
      }
    }
    ;((this.animations_ = this.animations_.filter(Boolean)),
      e &&
        this.updateAnimationKey_ === void 0 &&
        (this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this))))
  }
  calculateCenterRotate(t, e) {
    let i
    const s = this.getCenterInternal()
    return (s !== void 0 && ((i = [s[0] - e[0], s[1] - e[1]]), h_(i, t - this.getRotation()), a_(i, e)), i)
  }
  calculateCenterZoom(t, e) {
    let i
    const s = this.getCenterInternal(),
      r = this.getResolution()
    if (s !== void 0 && r !== void 0) {
      const o = e[0] - (t * (e[0] - s[0])) / r,
        a = e[1] - (t * (e[1] - s[1])) / r
      i = [o, a]
    }
    return i
  }
  getViewportSize_(t) {
    const e = this.viewportSize_
    if (t) {
      const i = e[0],
        s = e[1]
      return [
        Math.abs(i * Math.cos(t)) + Math.abs(s * Math.sin(t)),
        Math.abs(i * Math.sin(t)) + Math.abs(s * Math.cos(t)),
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
    return t && nn(t, this.getProjection())
  }
  getCenterInternal() {
    return this.get(Ut.CENTER)
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
    return Er(e, this.getProjection())
  }
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_()
    const e = this.getCenterInternal()
    et(e, 1)
    const i = this.getResolution()
    et(i !== void 0, 2)
    const s = this.getRotation()
    return (et(s !== void 0, 3), Ug(e, i, s, t))
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
    return this.get(Ut.RESOLUTION)
  }
  getResolutions() {
    return this.resolutions_
  }
  getResolutionForExtent(t, e) {
    return this.getResolutionForExtentInternal(zi(t, this.getProjection()), e)
  }
  getResolutionForExtentInternal(t, e) {
    e = e || this.getViewportSizeMinusPadding_()
    const i = jt(t) / e[0],
      s = Ln(t) / e[1]
    return Math.max(i, s)
  }
  getResolutionForValueFunction(t) {
    t = t || 2
    const e = this.getConstrainedResolution(this.maxResolution_),
      i = this.minResolution_,
      s = Math.log(e / i) / Math.log(t)
    return function (r) {
      return e / Math.pow(t, r * s)
    }
  }
  getRotation() {
    return this.get(Ut.ROTATION)
  }
  getValueForResolutionFunction(t) {
    const e = Math.log(t || 2),
      i = this.getConstrainedResolution(this.maxResolution_),
      s = this.minResolution_,
      r = Math.log(i / s) / e
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
    let s = this.getCenterInternal()
    const r = this.padding_
    if (r) {
      const o = this.getViewportSizeMinusPadding_()
      s = Wr(s, this.getViewportSize_(), [o[0] / 2 + r[3], o[1] / 2 + r[0]], e, i)
    }
    return {
      center: s.slice(0),
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
      s
    if (this.resolutions_) {
      const r = pc(this.resolutions_, t, 1)
      ;((e = r),
        (i = this.resolutions_[r]),
        r == this.resolutions_.length - 1 ? (s = 2) : (s = i / this.resolutions_[r + 1]))
    } else ((i = this.maxResolution_), (s = this.zoomFactor_))
    return e + Math.log(i / t) / Math.log(s)
  }
  getResolutionForZoom(t) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1) return 0
      const e = ut(Math.floor(t), 0, this.resolutions_.length - 2),
        i = this.resolutions_[e] / this.resolutions_[e + 1]
      return this.resolutions_[e] / Math.pow(i, ut(t - e, 0, 1))
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_)
  }
  fit(t, e) {
    let i
    if ((et(Array.isArray(t) || typeof t.getSimplifiedGeometry == 'function', 24), Array.isArray(t))) {
      et(!Lc(t), 25)
      const s = zi(t, this.getProjection())
      i = Ol(s)
    } else if (t.getType() === 'Circle') {
      const s = zi(t.getExtent(), this.getProjection())
      ;((i = Ol(s)), i.rotate(this.getRotation(), en(s)))
    } else i = t
    this.fitInternal(i, e)
  }
  rotatedExtentForGeometry(t) {
    const e = this.getRotation(),
      i = Math.cos(e),
      s = Math.sin(-e),
      r = t.getFlatCoordinates(),
      o = t.getStride()
    let a = 1 / 0,
      l = 1 / 0,
      h = -1 / 0,
      c = -1 / 0
    for (let u = 0, d = r.length; u < d; u += o) {
      const f = r[u] * i - r[u + 1] * s,
        g = r[u] * s + r[u + 1] * i
      ;((a = Math.min(a, f)), (l = Math.min(l, g)), (h = Math.max(h, f)), (c = Math.max(c, g)))
    }
    return [a, l, h, c]
  }
  fitInternal(t, e) {
    e = e || {}
    let i = e.size
    i || (i = this.getViewportSizeMinusPadding_())
    const s = e.padding !== void 0 ? e.padding : [0, 0, 0, 0],
      r = e.nearest !== void 0 ? e.nearest : !1
    let o
    e.minResolution !== void 0
      ? (o = e.minResolution)
      : e.maxZoom !== void 0
        ? (o = this.getResolutionForZoom(e.maxZoom))
        : (o = 0)
    const a = this.rotatedExtentForGeometry(t)
    let l = this.getResolutionForExtentInternal(a, [i[0] - s[1] - s[3], i[1] - s[0] - s[2]])
    ;((l = isNaN(l) ? o : Math.max(l, o)), (l = this.getConstrainedResolution(l, r ? 0 : 1)))
    const h = this.getRotation(),
      c = Math.sin(h),
      u = Math.cos(h),
      d = en(a)
    ;((d[0] += ((s[1] - s[3]) / 2) * l), (d[1] += ((s[0] - s[2]) / 2) * l))
    const f = d[0] * u - d[1] * c,
      g = d[1] * u + d[0] * c,
      _ = this.getConstrainedCenter([f, g], l),
      m = e.callback ? e.callback : Pn
    e.duration !== void 0
      ? this.animateInternal({ resolution: l, center: _, duration: e.duration, easing: e.easing }, m)
      : ((this.targetResolution_ = l), (this.targetCenter_ = _), this.applyTargetState_(!1, !0), Rs(m, !0))
  }
  centerOn(t, e, i) {
    this.centerOnInternal(J(t, this.getProjection()), e, i)
  }
  centerOnInternal(t, e, i) {
    this.setCenterInternal(Wr(t, e, i, this.getResolution(), this.getRotation()))
  }
  calculateCenterShift(t, e, i, s) {
    let r
    const o = this.padding_
    if (o && t) {
      const a = this.getViewportSizeMinusPadding_(-i),
        l = Wr(t, s, [a[0] / 2 + o[3], a[1] / 2 + o[0]], e, i)
      r = [t[0] - l[0], t[1] - l[1]]
    }
    return r
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0
  }
  adjustCenter(t) {
    const e = nn(this.targetCenter_, this.getProjection())
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
      s = this.getViewportSize_(this.getRotation()),
      r = this.constraints_.resolution(this.targetResolution_ * t, 0, s, i)
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
      s = this.constraints_.rotation(this.targetRotation_ + t, i)
    ;(e && (this.targetCenter_ = this.calculateCenterRotate(s, e)),
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
      s = this.constraints_.rotation(this.targetRotation_, i),
      r = this.getViewportSize_(s),
      o = this.constraints_.resolution(this.targetResolution_, 0, r, i),
      a = this.constraints_.center(
        this.targetCenter_,
        o,
        r,
        i,
        this.calculateCenterShift(this.targetCenter_, o, s, r),
      )
    ;(this.get(Ut.ROTATION) !== s && this.set(Ut.ROTATION, s),
      this.get(Ut.RESOLUTION) !== o && (this.set(Ut.RESOLUTION, o), this.set('zoom', this.getZoom(), !0)),
      (!a || !this.get(Ut.CENTER) || !Zt(this.get(Ut.CENTER), a)) && this.set(Ut.CENTER, a),
      this.getAnimating() && !t && this.cancelAnimations(),
      (this.cancelAnchor_ = void 0))
  }
  resolveConstraints(t, e, i) {
    t = t !== void 0 ? t : 200
    const s = e || 0,
      r = this.constraints_.rotation(this.targetRotation_),
      o = this.getViewportSize_(r),
      a = this.constraints_.resolution(this.targetResolution_, s, o),
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
        !Zt(this.getCenterInternal(), l)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({ rotation: r, center: l, resolution: a, duration: t, easing: Um, anchor: i })))
  }
  beginInteraction() {
    ;(this.resolveConstraints(0), this.setHint(Gt.INTERACTING, 1))
  }
  endInteraction(t, e, i) {
    ;((i = i && J(i, this.getProjection())), this.endInteractionInternal(t, e, i))
  }
  endInteractionInternal(t, e, i) {
    this.getInteracting() && (this.setHint(Gt.INTERACTING, -1), this.resolveConstraints(t, e, i))
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
function Rs(n, t) {
  setTimeout(function () {
    n(t)
  }, 0)
}
function u0(n) {
  if (n.extent !== void 0) {
    const e = n.smoothExtentConstraint !== void 0 ? n.smoothExtentConstraint : !0
    return Bl(n.extent, n.constrainOnlyCenter, e)
  }
  const t = ga(n.projection, 'EPSG:3857')
  if (n.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice()
    return ((e[0] = -1 / 0), (e[2] = 1 / 0), Bl(e, !1, !1))
  }
  return l0
}
function d0(n) {
  let t,
    e,
    i,
    o = n.minZoom !== void 0 ? n.minZoom : jr,
    a = n.maxZoom !== void 0 ? n.maxZoom : 28
  const l = n.zoomFactor !== void 0 ? n.zoomFactor : 2,
    h = n.multiWorld !== void 0 ? n.multiWorld : !1,
    c = n.smoothResolutionConstraint !== void 0 ? n.smoothResolutionConstraint : !0,
    u = n.showFullExtent !== void 0 ? n.showFullExtent : !1,
    d = ga(n.projection, 'EPSG:3857'),
    f = d.getExtent()
  let g = n.constrainOnlyCenter,
    _ = n.extent
  if ((!h && !_ && d.isGlobal() && ((g = !1), (_ = f)), n.resolutions !== void 0)) {
    const m = n.resolutions
    ;((e = m[o]),
      (i = m[a] !== void 0 ? m[a] : m[m.length - 1]),
      n.constrainResolution ? (t = h0(m, c, !g && _, u)) : (t = Vl(e, i, c, !g && _, u)))
  } else {
    const y = (f ? Math.max(jt(f), Ln(f)) : (360 * Fc.degrees) / d.getMetersPerUnit()) / a0 / Math.pow(2, jr),
      p = y / Math.pow(2, 28 - jr)
    ;((e = n.maxResolution),
      e !== void 0 ? (o = 0) : (e = y / Math.pow(l, o)),
      (i = n.minResolution),
      i === void 0 &&
        (n.maxZoom !== void 0
          ? n.maxResolution !== void 0
            ? (i = e / Math.pow(l, a))
            : (i = y / Math.pow(l, a))
          : (i = p)),
      (a = o + Math.floor(Math.log(e / i) / Math.log(l))),
      (i = e / Math.pow(l, a - o)),
      n.constrainResolution ? (t = c0(l, e, i, c, !g && _, u)) : (t = Vl(e, i, c, !g && _, u)))
  }
  return { constraint: t, maxResolution: e, minResolution: i, minZoom: o, zoomFactor: l }
}
function f0(n) {
  if (n.enableRotation !== void 0 ? n.enableRotation : !0) {
    const e = n.constrainRotation
    return e === void 0 || e === !0 ? n0() : e === !1 ? Yl : typeof e == 'number' ? i0(e) : Yl
  }
  return e0
}
function g0(n) {
  return !(
    (n.sourceCenter && n.targetCenter && !Zt(n.sourceCenter, n.targetCenter)) ||
    n.sourceResolution !== n.targetResolution ||
    n.sourceRotation !== n.targetRotation
  )
}
function Wr(n, t, e, i, s) {
  const r = Math.cos(-s)
  let o = Math.sin(-s),
    a = n[0] * r - n[1] * o,
    l = n[1] * r + n[0] * o
  ;((a += (t[0] / 2 - e[0]) * i), (l += (e[1] - t[1] / 2) * i), (o = -o))
  const h = a * r - l * o,
    c = l * r + a * o
  return [h, c]
}
class _0 extends o0 {
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
      this.addChangeListener(V.SOURCE, this.handleSourcePropertyChange_))
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
    return this.get(V.SOURCE) || null
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
    ;(this.sourceChangeKey_ && (Ft(this.sourceChangeKey_), (this.sourceChangeKey_ = null)),
      (this.sourceReady_ = !1))
    const t = this.getSource()
    ;(t &&
      ((this.sourceChangeKey_ = yt(t, dt.CHANGE, this.handleSourceChange_, this)),
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
      t instanceof Ul ? (e = { viewState: t.getState(), extent: t.calculateExtent() }) : (e = t),
      !e.layerStatesArray && i && (e.layerStatesArray = i.getLayerGroup().getLayerStatesArray()))
    let s
    e.layerStatesArray ? (s = e.layerStatesArray.find(o => o.layer === this)) : (s = this.getLayerState())
    const r = this.getExtent()
    return m0(s, e.viewState) && (!r || zt(r, e.extent))
  }
  getAttributions(t) {
    if (!this.isVisible(t)) return []
    let e
    const i = this.getSource()
    if ((i && (e = i.getAttributions()), !e)) return []
    const s = t instanceof Ul ? t.getViewStateAndExtent() : t
    let r = e(s)
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
    ;(t || this.unrender(), this.set(V.MAP, t))
  }
  getMapInternal() {
    return this.get(V.MAP)
  }
  setMap(t) {
    ;(this.mapPrecomposeKey_ && (Ft(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)),
      t || this.changed(),
      this.mapRenderKey_ && (Ft(this.mapRenderKey_), (this.mapRenderKey_ = null)),
      t &&
        ((this.mapPrecomposeKey_ = yt(
          t,
          Nn.PRECOMPOSE,
          function (e) {
            const s = e.frameState.layerStatesArray,
              r = this.getLayerState(!1)
            ;(et(
              !s.some(function (o) {
                return o.layer === r.layer
              }),
              67,
            ),
              s.push(r))
          },
          this,
        )),
        (this.mapRenderKey_ = yt(this, dt.CHANGE, t.render, t)),
        this.changed()))
  }
  setSource(t) {
    this.set(V.SOURCE, t)
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
function m0(n, t) {
  if (!n.visible) return !1
  const e = t.resolution
  if (e < n.minResolution || e >= n.maxResolution) return !1
  const i = t.zoom
  return i > n.minZoom && i <= n.maxZoom
}
function y0(n, t, e, i, s) {
  cu(n, t, e || 0, i || n.length - 1, s || p0)
}
function cu(n, t, e, i, s) {
  for (; i > e; ) {
    if (i - e > 600) {
      var r = i - e + 1,
        o = t - e + 1,
        a = Math.log(r),
        l = 0.5 * Math.exp((2 * a) / 3),
        h = 0.5 * Math.sqrt((a * l * (r - l)) / r) * (o - r / 2 < 0 ? -1 : 1),
        c = Math.max(e, Math.floor(t - (o * l) / r + h)),
        u = Math.min(i, Math.floor(t + ((r - o) * l) / r + h))
      cu(n, t, c, u, s)
    }
    var d = n[t],
      f = e,
      g = i
    for (yn(n, e, t), s(n[i], d) > 0 && yn(n, e, i); f < g; ) {
      for (yn(n, f, g), f++, g--; s(n[f], d) < 0; ) f++
      for (; s(n[g], d) > 0; ) g--
    }
    ;(s(n[e], d) === 0 ? yn(n, e, g) : (g++, yn(n, g, i)), g <= t && (e = g + 1), t <= g && (i = g - 1))
  }
}
function yn(n, t, e) {
  var i = n[t]
  ;((n[t] = n[e]), (n[e] = i))
}
function p0(n, t) {
  return n < t ? -1 : n > t ? 1 : 0
}
let uu = class {
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
    if (!ws(t, e)) return i
    const s = this.toBBox,
      r = []
    for (; e; ) {
      for (let o = 0; o < e.children.length; o++) {
        const a = e.children[o],
          l = e.leaf ? s(a) : a
        ws(t, l) && (e.leaf ? i.push(a) : Br(t, l) ? this._all(a, i) : r.push(a))
      }
      e = r.pop()
    }
    return i
  }
  collides(t) {
    let e = this.data
    if (!ws(t, e)) return !1
    const i = []
    for (; e; ) {
      for (let s = 0; s < e.children.length; s++) {
        const r = e.children[s],
          o = e.leaf ? this.toBBox(r) : r
        if (ws(t, o)) {
          if (e.leaf || Br(t, o)) return !0
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
    return ((this.data = Oi([])), this)
  }
  remove(t, e) {
    if (!t) return this
    let i = this.data
    const s = this.toBBox(t),
      r = [],
      o = []
    let a, l, h
    for (; i || r.length; ) {
      if ((i || ((i = r.pop()), (l = r[r.length - 1]), (a = o.pop()), (h = !0)), i.leaf)) {
        const c = x0(t, i.children, e)
        if (c !== -1) return (i.children.splice(c, 1), r.push(i), this._condense(r), this)
      }
      !h && !i.leaf && Br(i, s)
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
  _build(t, e, i, s) {
    const r = i - e + 1
    let o = this._maxEntries,
      a
    if (r <= o) return ((a = Oi(t.slice(e, i + 1))), Ii(a, this.toBBox), a)
    ;(s || ((s = Math.ceil(Math.log(r) / Math.log(o))), (o = Math.ceil(r / Math.pow(o, s - 1)))),
      (a = Oi([])),
      (a.leaf = !1),
      (a.height = s))
    const l = Math.ceil(r / o),
      h = l * Math.ceil(Math.sqrt(o))
    Zl(t, e, i, h, this.compareMinX)
    for (let c = e; c <= i; c += h) {
      const u = Math.min(c + h - 1, i)
      Zl(t, c, u, l, this.compareMinY)
      for (let d = c; d <= u; d += l) {
        const f = Math.min(d + l - 1, u)
        a.children.push(this._build(t, d, f, s - 1))
      }
    }
    return (Ii(a, this.toBBox), a)
  }
  _chooseSubtree(t, e, i, s) {
    for (; s.push(e), !(e.leaf || s.length - 1 === i); ) {
      let r = 1 / 0,
        o = 1 / 0,
        a
      for (let l = 0; l < e.children.length; l++) {
        const h = e.children[l],
          c = Yr(h),
          u = R0(t, h) - c
        u < o ? ((o = u), (r = c < r ? c : r), (a = h)) : u === o && c < r && ((r = c), (a = h))
      }
      e = a || e.children[0]
    }
    return e
  }
  _insert(t, e, i) {
    const s = i ? t : this.toBBox(t),
      r = [],
      o = this._chooseSubtree(s, this.data, e, r)
    for (o.children.push(t), Cn(o, s); e >= 0 && r[e].children.length > this._maxEntries; )
      (this._split(r, e), e--)
    this._adjustParentBBoxes(s, r, e)
  }
  _split(t, e) {
    const i = t[e],
      s = i.children.length,
      r = this._minEntries
    this._chooseSplitAxis(i, r, s)
    const o = this._chooseSplitIndex(i, r, s),
      a = Oi(i.children.splice(o, i.children.length - o))
    ;((a.height = i.height),
      (a.leaf = i.leaf),
      Ii(i, this.toBBox),
      Ii(a, this.toBBox),
      e ? t[e - 1].children.push(a) : this._splitRoot(i, a))
  }
  _splitRoot(t, e) {
    ;((this.data = Oi([t, e])),
      (this.data.height = t.height + 1),
      (this.data.leaf = !1),
      Ii(this.data, this.toBBox))
  }
  _chooseSplitIndex(t, e, i) {
    let s,
      r = 1 / 0,
      o = 1 / 0
    for (let a = e; a <= i - e; a++) {
      const l = En(t, 0, a, this.toBBox),
        h = En(t, a, i, this.toBBox),
        c = T0(l, h),
        u = Yr(l) + Yr(h)
      c < r ? ((r = c), (s = a), (o = u < o ? u : o)) : c === r && u < o && ((o = u), (s = a))
    }
    return s || i - e
  }
  _chooseSplitAxis(t, e, i) {
    const s = t.leaf ? this.compareMinX : E0,
      r = t.leaf ? this.compareMinY : C0,
      o = this._allDistMargin(t, e, i, s),
      a = this._allDistMargin(t, e, i, r)
    o < a && t.children.sort(s)
  }
  _allDistMargin(t, e, i, s) {
    t.children.sort(s)
    const r = this.toBBox,
      o = En(t, 0, e, r),
      a = En(t, i - e, i, r)
    let l = Ts(o) + Ts(a)
    for (let h = e; h < i - e; h++) {
      const c = t.children[h]
      ;(Cn(o, t.leaf ? r(c) : c), (l += Ts(o)))
    }
    for (let h = i - e - 1; h >= e; h--) {
      const c = t.children[h]
      ;(Cn(a, t.leaf ? r(c) : c), (l += Ts(a)))
    }
    return l
  }
  _adjustParentBBoxes(t, e, i) {
    for (let s = i; s >= 0; s--) Cn(e[s], t)
  }
  _condense(t) {
    for (let e = t.length - 1, i; e >= 0; e--)
      t[e].children.length === 0
        ? e > 0
          ? ((i = t[e - 1].children), i.splice(i.indexOf(t[e]), 1))
          : this.clear()
        : Ii(t[e], this.toBBox)
  }
}
function x0(n, t, e) {
  if (!e) return t.indexOf(n)
  for (let i = 0; i < t.length; i++) if (e(n, t[i])) return i
  return -1
}
function Ii(n, t) {
  En(n, 0, n.children.length, t, n)
}
function En(n, t, e, i, s) {
  ;(s || (s = Oi(null)), (s.minX = 1 / 0), (s.minY = 1 / 0), (s.maxX = -1 / 0), (s.maxY = -1 / 0))
  for (let r = t; r < e; r++) {
    const o = n.children[r]
    Cn(s, n.leaf ? i(o) : o)
  }
  return s
}
function Cn(n, t) {
  return (
    (n.minX = Math.min(n.minX, t.minX)),
    (n.minY = Math.min(n.minY, t.minY)),
    (n.maxX = Math.max(n.maxX, t.maxX)),
    (n.maxY = Math.max(n.maxY, t.maxY)),
    n
  )
}
function E0(n, t) {
  return n.minX - t.minX
}
function C0(n, t) {
  return n.minY - t.minY
}
function Yr(n) {
  return (n.maxX - n.minX) * (n.maxY - n.minY)
}
function Ts(n) {
  return n.maxX - n.minX + (n.maxY - n.minY)
}
function R0(n, t) {
  return (
    (Math.max(t.maxX, n.maxX) - Math.min(t.minX, n.minX)) *
    (Math.max(t.maxY, n.maxY) - Math.min(t.minY, n.minY))
  )
}
function T0(n, t) {
  const e = Math.max(n.minX, t.minX),
    i = Math.max(n.minY, t.minY),
    s = Math.min(n.maxX, t.maxX),
    r = Math.min(n.maxY, t.maxY)
  return Math.max(0, s - e) * Math.max(0, r - i)
}
function Br(n, t) {
  return n.minX <= t.minX && n.minY <= t.minY && t.maxX <= n.maxX && t.maxY <= n.maxY
}
function ws(n, t) {
  return t.minX <= n.maxX && t.minY <= n.maxY && t.maxX >= n.minX && t.maxY >= n.minY
}
function Oi(n) {
  return { children: n, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 }
}
function Zl(n, t, e, i, s) {
  const r = [t, e]
  for (; r.length; ) {
    if (((e = r.pop()), (t = r.pop()), e - t <= i)) continue
    const o = t + Math.ceil((e - t) / i / 2) * i
    ;(y0(n, o, t, e, s), r.push(t, o, o, e))
  }
}
function Kl(n) {
  return new Kt({ fill: Gn(n, ''), stroke: Xn(n, ''), text: w0(n), image: S0(n) })
}
function Gn(n, t) {
  const e = n[t + 'fill-color']
  if (e) return e === 'none' ? null : new Ve({ color: e })
}
function Xn(n, t) {
  const e = n[t + 'stroke-width'],
    i = n[t + 'stroke-color']
  if (!(!e && !i))
    return new xe({
      width: e,
      color: i,
      lineCap: n[t + 'stroke-line-cap'],
      lineJoin: n[t + 'stroke-line-join'],
      lineDash: n[t + 'stroke-line-dash'],
      lineDashOffset: n[t + 'stroke-line-dash-offset'],
      miterLimit: n[t + 'stroke-miter-limit'],
    })
}
function w0(n) {
  const t = n['text-value']
  return t
    ? new wa({
        text: t,
        font: n['text-font'],
        maxAngle: n['text-max-angle'],
        offsetX: n['text-offset-x'],
        offsetY: n['text-offset-y'],
        overflow: n['text-overflow'],
        placement: n['text-placement'],
        repeat: n['text-repeat'],
        scale: n['text-scale'],
        rotateWithView: n['text-rotate-with-view'],
        rotation: n['text-rotation'],
        textAlign: n['text-align'],
        justify: n['text-justify'],
        textBaseline: n['text-baseline'],
        padding: n['text-padding'],
        fill: Gn(n, 'text-'),
        backgroundFill: Gn(n, 'text-background-'),
        stroke: Xn(n, 'text-'),
        backgroundStroke: Xn(n, 'text-background-'),
      })
    : void 0
}
function S0(n) {
  const t = n['icon-src'],
    e = n['icon-img']
  if (t || e)
    return new wr({
      src: t,
      img: e,
      imgSize: n['icon-img-size'],
      anchor: n['icon-anchor'],
      anchorOrigin: n['icon-anchor-origin'],
      anchorXUnits: n['icon-anchor-x-units'],
      anchorYUnits: n['icon-anchor-y-units'],
      color: n['icon-color'],
      crossOrigin: n['icon-cross-origin'],
      offset: n['icon-offset'],
      displacement: n['icon-displacement'],
      opacity: n['icon-opacity'],
      scale: n['icon-scale'],
      width: n['icon-width'],
      height: n['icon-height'],
      rotation: n['icon-rotation'],
      rotateWithView: n['icon-rotate-with-view'],
      size: n['icon-size'],
      declutterMode: n['icon-declutter-mode'],
    })
  const i = n['shape-points']
  if (i) {
    const r = 'shape-'
    return new Sr({
      points: i,
      fill: Gn(n, r),
      stroke: Xn(n, r),
      radius: n['shape-radius'],
      radius1: n['shape-radius1'],
      radius2: n['shape-radius2'],
      angle: n['shape-angle'],
      displacement: n['shape-displacement'],
      rotation: n['shape-rotation'],
      rotateWithView: n['shape-rotate-with-view'],
      scale: n['shape-scale'],
      declutterMode: n['shape-declutter-mode'],
    })
  }
  const s = n['circle-radius']
  if (s) {
    const r = 'circle-'
    return new hn({
      radius: s,
      fill: Gn(n, r),
      stroke: Xn(n, r),
      displacement: n['circle-displacement'],
      scale: n['circle-scale'],
      rotation: n['circle-rotation'],
      rotateWithView: n['circle-rotate-with-view'],
      declutterMode: n['circle-declutter-mode'],
    })
  }
}
const $l = { RENDER_ORDER: 'renderOrder' }
class v0 extends _0 {
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
    return this.get($l.RENDER_ORDER)
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
    ;(t.declutterTree || (t.declutterTree = new uu(9)), this.getRenderer().renderDeclutter(t))
  }
  setRenderOrder(t) {
    this.set($l.RENDER_ORDER, t)
  }
  setStyle(t) {
    let e
    if (t === void 0) e = Fm
    else if (t === null) e = null
    else if (typeof t == 'function') e = t
    else if (t instanceof Kt) e = t
    else if (Array.isArray(t)) {
      const i = t.length,
        s = new Array(i)
      for (let r = 0; r < i; ++r) {
        const o = t[r]
        o instanceof Kt ? (s[r] = o) : (s[r] = Kl(o))
      }
      e = s
    } else e = Kl(t)
    ;((this.style_ = e), (this.styleFunction_ = t === null ? void 0 : Am(this.style_)), this.changed())
  }
}
const M = {
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
  Ss = [M.FILL],
  Ge = [M.STROKE],
  ri = [M.BEGIN_PATH],
  Hl = [M.CLOSE_PATH]
class du {
  drawCustom(t, e, i, s) {}
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
class Jn extends du {
  constructor(t, e, i, s) {
    ;(super(),
      (this.tolerance = t),
      (this.maxExtent = e),
      (this.pixelRatio = s),
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
      s = this.tmpCoordinate_,
      r = this.coordinates
    let o = r.length
    for (let a = 0, l = t.length; a < l; a += e)
      ((s[0] = t[a]), (s[1] = t[a + 1]), Bg(i, s) && ((r[o++] = s[0]), (r[o++] = s[1])))
    return o
  }
  appendFlatLineCoordinates(t, e, i, s, r, o) {
    const a = this.coordinates
    let l = a.length
    const h = this.getBufferedMaxExtent()
    o && (e += s)
    let c = t[e],
      u = t[e + 1]
    const d = this.tmpCoordinate_
    let f = !0,
      g,
      _,
      m
    for (g = e + s; g < i; g += s)
      ((d[0] = t[g]),
        (d[1] = t[g + 1]),
        (m = Eo(h, d)),
        m !== _
          ? (f && ((a[l++] = c), (a[l++] = u), (f = !1)), (a[l++] = d[0]), (a[l++] = d[1]))
          : m === rt.INTERSECTING
            ? ((a[l++] = d[0]), (a[l++] = d[1]), (f = !1))
            : (f = !0),
        (c = d[0]),
        (u = d[1]),
        (_ = m))
    return (((r && f) || g === e + s) && ((a[l++] = c), (a[l++] = u)), l)
  }
  drawCustomCoordinates_(t, e, i, s, r) {
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o],
        h = this.appendFlatLineCoordinates(t, e, l, s, !1, !1)
      ;(r.push(h), (e = l))
    }
    return e
  }
  drawCustom(t, e, i, s) {
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
        ;(this.instructions.push([M.CUSTOM, a, u, t, i, wo]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, u, t, s || i, wo]))
        break
      case 'Polygon':
      case 'MultiLineString':
        ;((c = []),
          (l = r == 'Polygon' ? t.getOrientedFlatCoordinates() : t.getFlatCoordinates()),
          (d = this.drawCustomCoordinates_(l, 0, t.getEnds(), o, c)),
          this.instructions.push([M.CUSTOM, a, c, t, i, An]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, c, t, s || i, An]))
        break
      case 'LineString':
      case 'Circle':
        ;((l = t.getFlatCoordinates()),
          (h = this.appendFlatLineCoordinates(l, 0, l.length, o, !1, !1)),
          this.instructions.push([M.CUSTOM, a, h, t, i, Ne]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, h, t, s || i, Ne]))
        break
      case 'MultiPoint':
        ;((l = t.getFlatCoordinates()),
          (h = this.appendFlatPointCoordinates(l, o)),
          h > a &&
            (this.instructions.push([M.CUSTOM, a, h, t, i, Ne]),
            this.hitDetectionInstructions.push([M.CUSTOM, a, h, t, s || i, Ne])))
        break
      case 'Point':
        ;((l = t.getFlatCoordinates()),
          this.coordinates.push(l[0], l[1]),
          (h = this.coordinates.length),
          this.instructions.push([M.CUSTOM, a, h, t, i]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, h, t, s || i]))
        break
    }
    this.endGeometry(e)
  }
  beginGeometry(t, e) {
    ;((this.beginGeometryInstruction1_ = [M.BEGIN_GEOMETRY, e, 0, t]),
      this.instructions.push(this.beginGeometryInstruction1_),
      (this.beginGeometryInstruction2_ = [M.BEGIN_GEOMETRY, e, 0, t]),
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
    let s,
      r,
      o = -1
    for (e = 0; e < i; ++e)
      ((s = t[e]),
        (r = s[0]),
        r == M.END_GEOMETRY
          ? (o = e)
          : r == M.BEGIN_GEOMETRY && ((s[2] = e), Xg(this.hitDetectionInstructions, o, e), (o = -1)))
  }
  setFillStrokeStyle(t, e) {
    const i = this.state
    if (t) {
      const s = t.getColor()
      i.fillStyle = se(s || wt)
    } else i.fillStyle = void 0
    if (e) {
      const s = e.getColor()
      i.strokeStyle = se(s || On)
      const r = e.getLineCap()
      i.lineCap = r !== void 0 ? r : ir
      const o = e.getLineDash()
      i.lineDash = o ? o.slice() : Ee
      const a = e.getLineDashOffset()
      i.lineDashOffset = a || Ce
      const l = e.getLineJoin()
      i.lineJoin = l !== void 0 ? l : sn
      const h = e.getWidth()
      i.lineWidth = h !== void 0 ? h : kn
      const c = e.getMiterLimit()
      ;((i.miterLimit = c !== void 0 ? c : bn),
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
      i = [M.SET_FILL_STYLE, e]
    return (typeof e != 'string' && i.push(!0), i)
  }
  applyStroke(t) {
    this.instructions.push(this.createStroke(t))
  }
  createStroke(t) {
    return [
      M.SET_STROKE_STYLE,
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
      s = t.lineCap,
      r = t.lineDash,
      o = t.lineDashOffset,
      a = t.lineJoin,
      l = t.lineWidth,
      h = t.miterLimit
    ;(t.currentStrokeStyle != i ||
      t.currentLineCap != s ||
      (r != t.currentLineDash && !gi(t.currentLineDash, r)) ||
      t.currentLineDashOffset != o ||
      t.currentLineJoin != a ||
      t.currentLineWidth != l ||
      t.currentMiterLimit != h) &&
      (i !== void 0 && e.call(this, t),
      (t.currentStrokeStyle = i),
      (t.currentLineCap = s),
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
    const e = [M.END_GEOMETRY, t]
    ;(this.instructions.push(e), this.hitDetectionInstructions.push(e))
  }
  getBufferedMaxExtent() {
    if (!this.bufferedMaxExtent_ && ((this.bufferedMaxExtent_ = Yg(this.maxExtent)), this.maxLineWidth > 0)) {
      const t = (this.resolution * (this.maxLineWidth + 1)) / 2
      Kn(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_)
    }
    return this.bufferedMaxExtent_
  }
}
class I0 extends Jn {
  constructor(t, e, i, s) {
    ;(super(t, e, i, s),
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
      s = t.getStride(),
      r = this.coordinates.length,
      o = this.appendFlatPointCoordinates(i, s)
    ;(this.instructions.push([
      M.DRAW_IMAGE,
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
        M.DRAW_IMAGE,
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
      s = t.getStride(),
      r = this.coordinates.length,
      o = this.appendFlatPointCoordinates(i, s)
    ;(this.instructions.push([
      M.DRAW_IMAGE,
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
        M.DRAW_IMAGE,
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
      s = t.getSize(),
      r = t.getOrigin()
    ;((this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio)),
      (this.anchorX_ = i[0]),
      (this.anchorY_ = i[1]),
      (this.hitDetectionImage_ = t.getHitDetectionImage()),
      (this.image_ = t.getImage(this.pixelRatio)),
      (this.height_ = s[1]),
      (this.opacity_ = t.getOpacity()),
      (this.originX_ = r[0]),
      (this.originY_ = r[1]),
      (this.rotateWithView_ = t.getRotateWithView()),
      (this.rotation_ = t.getRotation()),
      (this.scale_ = t.getScaleArray()),
      (this.width_ = s[0]),
      (this.declutterMode_ = t.getDeclutterMode()),
      (this.declutterImageWithText_ = e))
  }
}
class M0 extends Jn {
  constructor(t, e, i, s) {
    super(t, e, i, s)
  }
  drawFlatCoordinates_(t, e, i, s) {
    const r = this.coordinates.length,
      o = this.appendFlatLineCoordinates(t, e, i, s, !1, !1),
      a = [M.MOVE_TO_LINE_TO, r, o]
    return (this.instructions.push(a), this.hitDetectionInstructions.push(a), i)
  }
  drawLineString(t, e) {
    const i = this.state,
      s = i.strokeStyle,
      r = i.lineWidth
    if (s === void 0 || r === void 0) return
    ;(this.updateStrokeStyle(i, this.applyStroke),
      this.beginGeometry(t, e),
      this.hitDetectionInstructions.push(
        [M.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, Ee, Ce],
        ri,
      ))
    const o = t.getFlatCoordinates(),
      a = t.getStride()
    ;(this.drawFlatCoordinates_(o, 0, o.length, a),
      this.hitDetectionInstructions.push(Ge),
      this.endGeometry(e))
  }
  drawMultiLineString(t, e) {
    const i = this.state,
      s = i.strokeStyle,
      r = i.lineWidth
    if (s === void 0 || r === void 0) return
    ;(this.updateStrokeStyle(i, this.applyStroke),
      this.beginGeometry(t, e),
      this.hitDetectionInstructions.push(
        [M.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, Ee, Ce],
        ri,
      ))
    const o = t.getEnds(),
      a = t.getFlatCoordinates(),
      l = t.getStride()
    let h = 0
    for (let c = 0, u = o.length; c < u; ++c) h = this.drawFlatCoordinates_(a, h, o[c], l)
    ;(this.hitDetectionInstructions.push(Ge), this.endGeometry(e))
  }
  finish() {
    const t = this.state
    return (
      t.lastStroke != null && t.lastStroke != this.coordinates.length && this.instructions.push(Ge),
      this.reverseHitDetectionInstructions(),
      (this.state = null),
      super.finish()
    )
  }
  applyStroke(t) {
    ;(t.lastStroke != null &&
      t.lastStroke != this.coordinates.length &&
      (this.instructions.push(Ge), (t.lastStroke = this.coordinates.length)),
      (t.lastStroke = 0),
      super.applyStroke(t),
      this.instructions.push(ri))
  }
}
class ql extends Jn {
  constructor(t, e, i, s) {
    super(t, e, i, s)
  }
  drawFlatCoordinatess_(t, e, i, s) {
    const r = this.state,
      o = r.fillStyle !== void 0,
      a = r.strokeStyle !== void 0,
      l = i.length
    ;(this.instructions.push(ri), this.hitDetectionInstructions.push(ri))
    for (let h = 0; h < l; ++h) {
      const c = i[h],
        u = this.coordinates.length,
        d = this.appendFlatLineCoordinates(t, e, c, s, !0, !a),
        f = [M.MOVE_TO_LINE_TO, u, d]
      ;(this.instructions.push(f),
        this.hitDetectionInstructions.push(f),
        a && (this.instructions.push(Hl), this.hitDetectionInstructions.push(Hl)),
        (e = c))
    }
    return (
      o && (this.instructions.push(Ss), this.hitDetectionInstructions.push(Ss)),
      a && (this.instructions.push(Ge), this.hitDetectionInstructions.push(Ge)),
      e
    )
  }
  drawCircle(t, e) {
    const i = this.state,
      s = i.fillStyle,
      r = i.strokeStyle
    if (s === void 0 && r === void 0) return
    ;(this.setFillStrokeStyles_(),
      this.beginGeometry(t, e),
      i.fillStyle !== void 0 && this.hitDetectionInstructions.push([M.SET_FILL_STYLE, wt]),
      i.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          M.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          Ee,
          Ce,
        ]))
    const o = t.getFlatCoordinates(),
      a = t.getStride(),
      l = this.coordinates.length
    this.appendFlatLineCoordinates(o, 0, o.length, a, !1, !1)
    const h = [M.CIRCLE, l]
    ;(this.instructions.push(ri, h),
      this.hitDetectionInstructions.push(ri, h),
      i.fillStyle !== void 0 && (this.instructions.push(Ss), this.hitDetectionInstructions.push(Ss)),
      i.strokeStyle !== void 0 && (this.instructions.push(Ge), this.hitDetectionInstructions.push(Ge)),
      this.endGeometry(e))
  }
  drawPolygon(t, e) {
    const i = this.state,
      s = i.fillStyle,
      r = i.strokeStyle
    if (s === void 0 && r === void 0) return
    ;(this.setFillStrokeStyles_(),
      this.beginGeometry(t, e),
      i.fillStyle !== void 0 && this.hitDetectionInstructions.push([M.SET_FILL_STYLE, wt]),
      i.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          M.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          Ee,
          Ce,
        ]))
    const o = t.getEnds(),
      a = t.getOrientedFlatCoordinates(),
      l = t.getStride()
    ;(this.drawFlatCoordinatess_(a, 0, o, l), this.endGeometry(e))
  }
  drawMultiPolygon(t, e) {
    const i = this.state,
      s = i.fillStyle,
      r = i.strokeStyle
    if (s === void 0 && r === void 0) return
    ;(this.setFillStrokeStyles_(),
      this.beginGeometry(t, e),
      i.fillStyle !== void 0 && this.hitDetectionInstructions.push([M.SET_FILL_STYLE, wt]),
      i.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          M.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          Ee,
          Ce,
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
      for (let i = 0, s = e.length; i < s; ++i) e[i] = ti(e[i], t)
    }
    return super.finish()
  }
  setFillStrokeStyles_() {
    const t = this.state
    ;(t.fillStyle !== void 0 && this.updateFillStyle(t, this.createFill),
      t.strokeStyle !== void 0 && this.updateStrokeStyle(t, this.applyStroke))
  }
}
function P0(n, t, e, i, s) {
  const r = []
  let o = e,
    a = 0,
    l = t.slice(e, 2)
  for (; a < n && o + s < i; ) {
    const [h, c] = l.slice(-2),
      u = t[o + s],
      d = t[o + s + 1],
      f = Math.sqrt((u - h) * (u - h) + (d - c) * (d - c))
    if (((a += f), a >= n)) {
      const g = (n - a + f) / f,
        _ = At(h, u, g),
        m = At(c, d, g)
      ;(l.push(_, m), r.push(l), (l = [_, m]), a == n && (o += s), (a = 0))
    } else if (a < n) (l.push(t[o + s], t[o + s + 1]), (o += s))
    else {
      const g = f - a,
        _ = At(h, u, g / f),
        m = At(c, d, g / f)
      ;(l.push(_, m), r.push(l), (l = [_, m]), (a = 0), (o += s))
    }
  }
  return (a > 0 && r.push(l), r)
}
function L0(n, t, e, i, s) {
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
    y,
    p,
    x
  for (u = e; u < i; u += s) {
    const E = t[u],
      C = t[u + 1]
    ;(g !== void 0 &&
      ((p = E - g),
      (x = C - _),
      (f = Math.sqrt(p * p + x * x)),
      m !== void 0 &&
        ((l += d),
        (c = Math.acos((m * p + y * x) / (d * f))),
        c > n && (l > a && ((a = l), (r = h), (o = u)), (l = 0), (h = u - s))),
      (d = f),
      (m = p),
      (y = x)),
      (g = E),
      (_ = C))
  }
  return ((l += f), l > a ? [h, u] : [r, o])
}
const ar = {
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
class A0 extends Jn {
  constructor(t, e, i, s) {
    ;(super(t, e, i, s),
      (this.labels_ = null),
      (this.text_ = ''),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = void 0),
      (this.textRotation_ = 0),
      (this.textFillState_ = null),
      (this.fillStates = {}),
      (this.fillStates[wt] = { fillStyle: wt }),
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
      s = this.textStrokeState_,
      r = this.textState_
    if (this.text_ === '' || !r || (!i && !s)) return
    const o = this.coordinates
    let a = o.length
    const l = t.getType()
    let h = null,
      c = t.getStride()
    if (
      r.placement === 'line' &&
      (l == 'LineString' || l == 'MultiLineString' || l == 'Polygon' || l == 'MultiPolygon')
    ) {
      if (!zt(this.getBufferedMaxExtent(), t.getExtent())) return
      let u
      if (((h = t.getFlatCoordinates()), l == 'LineString')) u = [h.length]
      else if (l == 'MultiLineString') u = t.getEnds()
      else if (l == 'Polygon') u = t.getEnds().slice(0, 1)
      else if (l == 'MultiPolygon') {
        const _ = t.getEndss()
        u = []
        for (let m = 0, y = _.length; m < y; ++m) u.push(_[m][0])
      }
      this.beginGeometry(t, e)
      const d = r.repeat,
        f = d ? void 0 : r.textAlign
      let g = 0
      for (let _ = 0, m = u.length; _ < m; ++_) {
        let y
        d ? (y = P0(d * this.resolution, h, g, u[_], c)) : (y = [h.slice(g, u[_])])
        for (let p = 0, x = y.length; p < x; ++p) {
          const E = y[p]
          let C = 0,
            T = E.length
          if (f == null) {
            const S = L0(r.maxAngle, E, 0, E.length, 2)
            ;((C = S[0]), (T = S[1]))
          }
          for (let S = C; S < T; S += c) o.push(E[S], E[S + 1])
          const v = o.length
          ;((g = u[_]), this.drawChars_(a, v), (a = v))
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
          const y = t.getFlatInteriorPoints()
          h = []
          for (let p = 0, x = y.length; p < x; p += 3)
            (r.overflow || u.push(y[p + 2] / this.resolution), h.push(y[p], y[p + 1]))
          if (h.length === 0) return
          c = 2
          break
      }
      const d = this.appendFlatPointCoordinates(h, c)
      if (d === a) return
      if (u && (d - a) / 2 !== h.length / c) {
        let y = a / 2
        u = u.filter((p, x) => {
          const E = o[(y + x) * 2] === h[x * c] && o[(y + x) * 2 + 1] === h[x * c + 1]
          return (E || --y, E)
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
      if (f != si && (r.scale[0] < 0 || r.scale[1] < 0)) {
        let y = r.padding[0],
          p = r.padding[1],
          x = r.padding[2],
          E = r.padding[3]
        ;(r.scale[0] < 0 && ((p = -p), (E = -E)), r.scale[1] < 0 && ((y = -y), (x = -x)), (f = [y, p, x, E]))
      }
      const g = this.pixelRatio
      this.instructions.push([
        M.DRAW_IMAGE,
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
        f == si
          ? si
          : f.map(function (y) {
              return y * g
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
        ((this.state.fillStyle = wt), this.hitDetectionInstructions.push(this.createFill(this.state))),
        this.hitDetectionInstructions.push([
          M.DRAW_IMAGE,
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
          this.fillKey_ ? wt : this.fillKey_,
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
      s = this.strokeKey_
    t &&
      (s in this.strokeStates ||
        (this.strokeStates[s] = {
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
        textAlign: e.textAlign || Dn,
        justify: e.justify,
        textBaseline: e.textBaseline || nr,
        scale: e.scale,
      })
    const o = this.fillKey_
    i && (o in this.fillStates || (this.fillStates[o] = { fillStyle: i.fillStyle }))
  }
  drawChars_(t, e) {
    const i = this.textStrokeState_,
      s = this.textState_,
      r = this.strokeKey_,
      o = this.textKey_,
      a = this.fillKey_
    this.saveTextStates_()
    const l = this.pixelRatio,
      h = ar[s.textBaseline],
      c = this.textOffsetY_ * l,
      u = this.text_,
      d = i ? (i.lineWidth * Math.abs(s.scale[0])) / 2 : 0
    ;(this.instructions.push([M.DRAW_CHARS, t, e, h, s.overflow, a, s.maxAngle, l, c, r, d * l, u, o, 1]),
      this.hitDetectionInstructions.push([
        M.DRAW_CHARS,
        t,
        e,
        h,
        s.overflow,
        a && wt,
        s.maxAngle,
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
    let i, s, r
    if (!t) this.text_ = ''
    else {
      const o = t.getFill()
      o
        ? ((s = this.textFillState_),
          s || ((s = {}), (this.textFillState_ = s)),
          (s.fillStyle = se(o.getColor() || wt)))
        : ((s = null), (this.textFillState_ = s))
      const a = t.getStroke()
      if (!a) ((r = null), (this.textStrokeState_ = r))
      else {
        ;((r = this.textStrokeState_), r || ((r = {}), (this.textStrokeState_ = r)))
        const g = a.getLineDash(),
          _ = a.getLineDashOffset(),
          m = a.getWidth(),
          y = a.getMiterLimit()
        ;((r.lineCap = a.getLineCap() || ir),
          (r.lineDash = g ? g.slice() : Ee),
          (r.lineDashOffset = _ === void 0 ? Ce : _),
          (r.lineJoin = a.getLineJoin() || sn),
          (r.lineWidth = m === void 0 ? kn : m),
          (r.miterLimit = y === void 0 ? bn : y),
          (r.strokeStyle = se(a.getColor() || On)))
      }
      i = this.textState_
      const l = t.getFont() || eu
      vm(l)
      const h = t.getScaleArray()
      ;((i.overflow = t.getOverflow()),
        (i.font = l),
        (i.maxAngle = t.getMaxAngle()),
        (i.placement = t.getPlacement()),
        (i.textAlign = t.getTextAlign()),
        (i.repeat = t.getRepeat()),
        (i.justify = t.getJustify()),
        (i.textBaseline = t.getTextBaseline() || nr),
        (i.backgroundFill = t.getBackgroundFill()),
        (i.backgroundStroke = t.getBackgroundStroke()),
        (i.padding = t.getPadding() || si),
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
          ? (typeof r.strokeStyle == 'string' ? r.strokeStyle : K(r.strokeStyle)) +
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
        (this.fillKey_ = s ? (typeof s.fillStyle == 'string' ? s.fillStyle : '|' + K(s.fillStyle)) : ''))
    }
    this.declutterImageWithText_ = e
  }
}
const F0 = { Circle: ql, Default: Jn, Image: I0, LineString: M0, Polygon: ql, Text: A0 }
class Jl {
  constructor(t, e, i, s) {
    ;((this.tolerance_ = t),
      (this.maxExtent_ = e),
      (this.pixelRatio_ = s),
      (this.resolution_ = i),
      (this.buildersByZIndex_ = {}))
  }
  finish() {
    const t = {}
    for (const e in this.buildersByZIndex_) {
      t[e] = t[e] || {}
      const i = this.buildersByZIndex_[e]
      for (const s in i) {
        const r = i[s].finish()
        t[e][s] = r
      }
    }
    return t
  }
  getBuilder(t, e) {
    const i = t !== void 0 ? t.toString() : '0'
    let s = this.buildersByZIndex_[i]
    s === void 0 && ((s = {}), (this.buildersByZIndex_[i] = s))
    let r = s[e]
    if (r === void 0) {
      const o = F0[e]
      ;((r = new o(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_)), (s[e] = r))
    }
    return r
  }
}
class b0 extends Zn {
  constructor(t) {
    ;(super(),
      (this.ready = !0),
      (this.boundHandleImageChange_ = this.handleImageChange_.bind(this)),
      (this.layer_ = t),
      (this.declutterExecutorGroup = null))
  }
  getFeatures(t) {
    return A()
  }
  getData(t) {
    return null
  }
  prepareFrame(t) {
    return A()
  }
  renderFrame(t, e) {
    return A()
  }
  loadedTileCallback(t, e, i) {
    ;(t[e] || (t[e] = {}), (t[e][i.tileCoord.toString()] = i))
  }
  createLoadedTileFinder(t, e, i) {
    return (s, r) => {
      const o = this.loadedTileCallback.bind(this, i, s)
      return t.forEachLoadedTile(e, s, r, o)
    }
  }
  forEachFeatureAtCoordinate(t, e, i, s, r) {}
  getLayer() {
    return this.layer_
  }
  handleFontsChanged() {}
  handleImageChange_(t) {
    const e = t.target
    ;(e.getState() === tt.LOADED || e.getState() === tt.ERROR) && this.renderIfReadyAndVisible()
  }
  loadImage(t) {
    let e = t.getState()
    return (
      e != tt.LOADED && e != tt.ERROR && t.addEventListener(dt.CHANGE, this.boundHandleImageChange_),
      e == tt.IDLE && (t.load(), (e = t.getState())),
      e == tt.LOADED
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
class O0 extends xt {
  constructor(t, e, i, s) {
    ;(super(t), (this.inversePixelTransform = e), (this.frameState = i), (this.context = s))
  }
}
const Ql = []
let Di = null
function D0() {
  Di = qt(1, 1, void 0, { willReadFrequently: !0 })
}
class k0 extends b0 {
  constructor(t) {
    ;(super(t),
      (this.container = null),
      this.renderedResolution,
      (this.tempTransform = ze()),
      (this.pixelTransform = ze()),
      (this.inversePixelTransform = ze()),
      (this.context = null),
      (this.containerReused = !1),
      (this.pixelContext_ = null),
      (this.frameState = null))
  }
  getImageData(t, e, i) {
    ;(Di || D0(), Di.clearRect(0, 0, 1, 1))
    let s
    try {
      ;(Di.drawImage(t, e, i, 1, 1, 0, 0, 1, 1), (s = Di.getImageData(0, 0, 1, 1).data))
    } catch {
      return ((Di = null), null)
    }
    return s
  }
  getBackground(t) {
    let i = this.getLayer().getBackground()
    return (typeof i == 'function' && (i = i(t.viewState.resolution)), i || void 0)
  }
  useContainer(t, e, i) {
    const s = this.getLayer().getClassName()
    let r, o
    if (
      t &&
      t.className === s &&
      (!i || (t && t.style.backgroundColor && gi(er(t.style.backgroundColor), er(i))))
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
      ;((r = document.createElement('div')), (r.className = s))
      let a = r.style
      ;((a.position = 'absolute'), (a.width = '100%'), (a.height = '100%'), (o = qt()))
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
    const s = Mc(i),
      r = Pc(i),
      o = Ic(i),
      a = vc(i)
    ;(Rt(e.coordinateToPixelTransform, s),
      Rt(e.coordinateToPixelTransform, r),
      Rt(e.coordinateToPixelTransform, o),
      Rt(e.coordinateToPixelTransform, a))
    const l = this.inversePixelTransform
    ;(Rt(l, s),
      Rt(l, r),
      Rt(l, o),
      Rt(l, a),
      t.save(),
      t.beginPath(),
      t.moveTo(Math.round(s[0]), Math.round(s[1])),
      t.lineTo(Math.round(r[0]), Math.round(r[1])),
      t.lineTo(Math.round(o[0]), Math.round(o[1])),
      t.lineTo(Math.round(a[0]), Math.round(a[1])),
      t.clip())
  }
  dispatchRenderEvent_(t, e, i) {
    const s = this.getLayer()
    if (s.hasListener(t)) {
      const r = new O0(t, this.inversePixelTransform, i, e)
      s.dispatchEvent(r)
    }
  }
  preRender(t, e) {
    ;((this.frameState = e), this.dispatchRenderEvent_(Nn.PRERENDER, t, e))
  }
  postRender(t, e) {
    this.dispatchRenderEvent_(Nn.POSTRENDER, t, e)
  }
  getRenderTransform(t, e, i, s, r, o, a) {
    const l = r / 2,
      h = o / 2,
      c = s / e,
      u = -c,
      d = -t[0] + a,
      f = -t[1]
    return Hn(this.tempTransform, l, h, c, u, -i, d, f)
  }
  disposeInternal() {
    ;(delete this.frameState, super.disposeInternal())
  }
}
function N0(n, t, e, i, s, r, o, a, l, h, c, u) {
  let d = n[t],
    f = n[t + 1],
    g = 0,
    _ = 0,
    m = 0,
    y = 0
  function p() {
    ;((g = d),
      (_ = f),
      (t += i),
      (d = n[t]),
      (f = n[t + 1]),
      (y += m),
      (m = Math.sqrt((d - g) * (d - g) + (f - _) * (f - _))))
  }
  do p()
  while (t < e - i && y + m < r)
  let x = m === 0 ? 0 : (r - y) / m
  const E = At(g, d, x),
    C = At(_, f, x),
    T = t - i,
    v = y,
    S = r + a * l(h, s, c)
  for (; t < e - i && y + m < S; ) p()
  x = m === 0 ? 0 : (S - y) / m
  const P = At(g, d, x),
    b = At(_, f, x)
  let X
  if (u) {
    const F = [E, C, P, b]
    ;(ma(F, 0, 4, 2, u, F, F), (X = F[0] > F[2]))
  } else X = E > P
  const N = Math.PI,
    D = [],
    nt = T + i === t
  ;((t = T), (m = 0), (y = v), (d = n[t]), (f = n[t + 1]))
  let I
  if (nt) {
    ;(p(), (I = Math.atan2(f - _, d - g)), X && (I += I > 0 ? -N : N))
    const F = (P + E) / 2,
      w = (b + C) / 2
    return ((D[0] = [F, w, (S - r) / 2, I, s]), D)
  }
  s = s.replace(/\n/g, ' ')
  for (let F = 0, w = s.length; F < w; ) {
    p()
    let O = Math.atan2(f - _, d - g)
    if ((X && (O += O > 0 ? -N : N), I !== void 0)) {
      let W = O - I
      if (((W += W > N ? -2 * N : W < -N ? 2 * N : 0), Math.abs(W) > o)) return null
    }
    I = O
    const Z = F
    let Y = 0
    for (; F < w; ++F) {
      const W = X ? w - F - 1 : F,
        H = a * l(h, s[W], c)
      if (t + i < e && y + m < r + Y + H / 2) break
      Y += H
    }
    if (F === Z) continue
    const st = X ? s.substring(w - Z, w - F) : s.substring(Z, F)
    x = m === 0 ? 0 : (r + Y / 2 - y) / m
    const R = At(g, d, x),
      It = At(_, f, x)
    ;(D.push([R, It, Y / 2, O, st]), (r += Y))
  }
  return D
}
const Mi = ae(),
  Le = [],
  de = [],
  fe = [],
  Ae = []
function th(n) {
  return n[3].declutterBox
}
const eh = new RegExp('[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]')
function Vr(n, t) {
  return (
    t === 'start' ? (t = eh.test(n) ? 'right' : 'left') : t === 'end' && (t = eh.test(n) ? 'left' : 'right'),
    ar[t]
  )
}
function G0(n, t, e) {
  return (
    e > 0 &&
      n.push(
        `
`,
        '',
      ),
    n.push(t, ''),
    n
  )
}
class X0 {
  constructor(t, e, i, s) {
    ;((this.overlaps = i),
      (this.pixelRatio = e),
      (this.resolution = t),
      this.alignFill_,
      (this.instructions = s.instructions),
      (this.coordinates = s.coordinates),
      (this.coordinateCache_ = {}),
      (this.renderedTransform_ = ze()),
      (this.hitDetectionInstructions = s.hitDetectionInstructions),
      (this.pixelCoordinates_ = null),
      (this.viewRotation_ = 0),
      (this.fillStates = s.fillStates || {}),
      (this.strokeStates = s.strokeStates || {}),
      (this.textStates = s.textStates || {}),
      (this.widths_ = {}),
      (this.labels_ = {}))
  }
  createLabel(t, e, i, s) {
    const r = t + e + i + s
    if (this.labels_[r]) return this.labels_[r]
    const o = s ? this.strokeStates[s] : null,
      a = i ? this.fillStates[i] : null,
      l = this.textStates[e],
      h = this.pixelRatio,
      c = [l.scale[0] * h, l.scale[1] * h],
      u = Array.isArray(t),
      d = l.justify ? ar[l.justify] : Vr(Array.isArray(t) ? t[0] : t, l.textAlign || Dn),
      f = s && o.lineWidth ? o.lineWidth : 0,
      g = u
        ? t
        : t
            .split(
              `
`,
            )
            .reduce(G0, []),
      { width: _, height: m, widths: y, heights: p, lineWidths: x } = Mm(l, g),
      E = _ + f,
      C = [],
      T = (E + 2) * c[0],
      v = (m + f) * c[1],
      S = {
        width: T < 0 ? Math.floor(T) : Math.ceil(T),
        height: v < 0 ? Math.floor(v) : Math.ceil(v),
        contextInstructions: C,
      }
    ;((c[0] != 1 || c[1] != 1) && C.push('scale', c),
      s &&
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
    const P = 0.5 - d
    let b = d * E + P * f
    const X = [],
      N = []
    let D = 0,
      nt = 0,
      I = 0,
      F = 0,
      w
    for (let O = 0, Z = g.length; O < Z; O += 2) {
      const Y = g[O]
      if (
        Y ===
        `
`
      ) {
        ;((nt += D), (D = 0), (b = d * E + P * f), ++F)
        continue
      }
      const st = g[O + 1] || l.font
      ;(st !== w && (s && X.push('font', st), i && N.push('font', st), (w = st)), (D = Math.max(D, p[I])))
      const R = [Y, b + P * y[I] + d * (y[I] - x[F]), 0.5 * (f + D) + nt]
      ;((b += y[I]), s && X.push('strokeText', R), i && N.push('fillText', R), ++I)
    }
    return (Array.prototype.push.apply(C, X), Array.prototype.push.apply(C, N), (this.labels_[r] = S), S)
  }
  replayTextBackground_(t, e, i, s, r, o, a) {
    ;(t.beginPath(),
      t.moveTo.apply(t, e),
      t.lineTo.apply(t, i),
      t.lineTo.apply(t, s),
      t.lineTo.apply(t, r),
      t.lineTo.apply(t, e),
      o && ((this.alignFill_ = o[2]), this.fill_(t)),
      a && (this.setStrokeStyle_(t, a), t.stroke()))
  }
  calculateImageOrLabelDimensions_(t, e, i, s, r, o, a, l, h, c, u, d, f, g, _, m) {
    ;((a *= d[0]), (l *= d[1]))
    let y = i - a,
      p = s - l
    const x = r + h > t ? t - h : r,
      E = o + c > e ? e - c : o,
      C = g[3] + x * d[0] + g[1],
      T = g[0] + E * d[1] + g[2],
      v = y - g[3],
      S = p - g[0]
    ;(_ || u !== 0) &&
      ((Le[0] = v),
      (Ae[0] = v),
      (Le[1] = S),
      (de[1] = S),
      (de[0] = v + C),
      (fe[0] = de[0]),
      (fe[1] = S + T),
      (Ae[1] = fe[1]))
    let P
    return (
      u !== 0
        ? ((P = Hn(ze(), i, s, 1, 1, u, -i, -s)),
          Rt(P, Le),
          Rt(P, de),
          Rt(P, fe),
          Rt(P, Ae),
          hi(
            Math.min(Le[0], de[0], fe[0], Ae[0]),
            Math.min(Le[1], de[1], fe[1], Ae[1]),
            Math.max(Le[0], de[0], fe[0], Ae[0]),
            Math.max(Le[1], de[1], fe[1], Ae[1]),
            Mi,
          ))
        : hi(Math.min(v, v + C), Math.min(S, S + T), Math.max(v, v + C), Math.max(S, S + T), Mi),
      f && ((y = Math.round(y)), (p = Math.round(p))),
      {
        drawImageX: y,
        drawImageY: p,
        drawImageW: x,
        drawImageH: E,
        originX: h,
        originY: c,
        declutterBox: { minX: Mi[0], minY: Mi[1], maxX: Mi[2], maxY: Mi[3], value: m },
        canvasTransform: P,
        scale: d,
      }
    )
  }
  replayImageOrLabel_(t, e, i, s, r, o, a) {
    const l = !!(o || a),
      h = s.declutterBox,
      c = t.canvas,
      u = a ? (a[2] * s.scale[0]) / 2 : 0
    return (
      h.minX - u <= c.width / e &&
        h.maxX + u >= 0 &&
        h.minY - u <= c.height / e &&
        h.maxY + u >= 0 &&
        (l && this.replayTextBackground_(t, Le, de, fe, Ae, o, a),
        Pm(
          t,
          s.canvasTransform,
          r,
          i,
          s.originX,
          s.originY,
          s.drawImageW,
          s.drawImageH,
          s.drawImageX,
          s.drawImageY,
          s.scale,
        )),
      !0
    )
  }
  fill_(t) {
    if (this.alignFill_) {
      const e = Rt(this.renderedTransform_, [0, 0]),
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
  drawLabelWithPointPlacement_(t, e, i, s) {
    const r = this.textStates[e],
      o = this.createLabel(t, e, s, i),
      a = this.strokeStates[i],
      l = this.pixelRatio,
      h = Vr(Array.isArray(t) ? t[0] : t, r.textAlign || Dn),
      c = ar[r.textBaseline || nr],
      u = a && a.lineWidth ? a.lineWidth : 0,
      d = o.width / l - 2 * r.scale[0],
      f = h * d + 2 * (0.5 - h) * u,
      g = (c * o.height) / l + 2 * (0.5 - c) * u
    return { label: o, anchorX: f, anchorY: g }
  }
  execute_(t, e, i, s, r, o, a, l) {
    let h
    this.pixelCoordinates_ && gi(i, this.renderedTransform_)
      ? (h = this.pixelCoordinates_)
      : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []),
        (h = ai(this.coordinates, 0, this.coordinates.length, 2, i, this.pixelCoordinates_)),
        S_(this.renderedTransform_, i))
    let c = 0
    const u = s.length
    let d = 0,
      f,
      g,
      _,
      m,
      y,
      p,
      x,
      E,
      C,
      T,
      v,
      S,
      P = 0,
      b = 0,
      X = null,
      N = null
    const D = this.coordinateCache_,
      nt = this.viewRotation_,
      I = Math.round(Math.atan2(-i[1], i[0]) * 1e12) / 1e12,
      F = { context: t, pixelRatio: this.pixelRatio, resolution: this.resolution, rotation: nt },
      w = this.instructions != s || this.overlaps ? 0 : 200
    let O, Z, Y, st
    for (; c < u; ) {
      const R = s[c]
      switch (R[0]) {
        case M.BEGIN_GEOMETRY:
          ;((O = R[1]),
            (st = R[3]),
            O.getGeometry() ? (a !== void 0 && !zt(a, st.getExtent()) ? (c = R[2] + 1) : ++c) : (c = R[2]))
          break
        case M.BEGIN_PATH:
          ;(P > w && (this.fill_(t), (P = 0)),
            b > w && (t.stroke(), (b = 0)),
            !P && !b && (t.beginPath(), (m = NaN), (y = NaN)),
            ++c)
          break
        case M.CIRCLE:
          d = R[1]
          const W = h[d],
            H = h[d + 1],
            we = h[d + 2],
            Jt = h[d + 3],
            lt = we - W,
            le = Jt - H,
            mi = Math.sqrt(lt * lt + le * le)
          ;(t.moveTo(W + mi, H), t.arc(W, H, mi, 0, 2 * Math.PI, !0), ++c)
          break
        case M.CLOSE_PATH:
          ;(t.closePath(), ++c)
          break
        case M.CUSTOM:
          ;((d = R[1]), (f = R[2]))
          const ts = R[3],
            yi = R[4],
            es = R.length == 6 ? R[5] : void 0
          ;((F.geometry = ts), (F.feature = O), c in D || (D[c] = []))
          const Se = D[c]
          ;(es ? es(h, d, f, 2, Se) : ((Se[0] = h[d]), (Se[1] = h[d + 1]), (Se.length = 2)), yi(Se, F), ++c)
          break
        case M.DRAW_IMAGE:
          ;((d = R[1]), (f = R[2]), (E = R[3]), (g = R[4]), (_ = R[5]))
          let cn = R[6]
          const ve = R[7],
            is = R[8],
            ns = R[9],
            ss = R[10]
          let pi = R[11]
          const Mr = R[12]
          let Et = R[13]
          const bt = R[14],
            Bt = R[15]
          if (!E && R.length >= 20) {
            ;((C = R[19]), (T = R[20]), (v = R[21]), (S = R[22]))
            const Mt = this.drawLabelWithPointPlacement_(C, T, v, S)
            ;((E = Mt.label), (R[3] = E))
            const Ci = R[23]
            ;((g = (Mt.anchorX - Ci) * this.pixelRatio), (R[4] = g))
            const Ot = R[24]
            ;((_ = (Mt.anchorY - Ot) * this.pixelRatio),
              (R[5] = _),
              (cn = E.height),
              (R[6] = cn),
              (Et = E.width),
              (R[13] = Et))
          }
          let he
          R.length > 25 && (he = R[25])
          let xi, $e, Ie
          ;(R.length > 17 ? ((xi = R[16]), ($e = R[17]), (Ie = R[18])) : ((xi = si), ($e = !1), (Ie = !1)),
            ss && I ? (pi += nt) : !ss && !I && (pi -= nt))
          let Ei = 0
          for (; d < f; d += 2) {
            if (he && he[Ei++] < Et / this.pixelRatio) continue
            const Mt = this.calculateImageOrLabelDimensions_(
                E.width,
                E.height,
                h[d],
                h[d + 1],
                Et,
                cn,
                g,
                _,
                is,
                ns,
                pi,
                Mr,
                r,
                xi,
                $e || Ie,
                O,
              ),
              Ci = [t, e, E, Mt, ve, $e ? X : null, Ie ? N : null]
            if (l) {
              if (bt === 'none') continue
              if (bt === 'obstacle') {
                l.insert(Mt.declutterBox)
                continue
              } else {
                let Ot, ce
                if (Bt) {
                  const Pt = f - d
                  if (!Bt[Pt]) {
                    Bt[Pt] = Ci
                    continue
                  }
                  if (((Ot = Bt[Pt]), delete Bt[Pt], (ce = th(Ot)), l.collides(ce))) continue
                }
                if (l.collides(Mt.declutterBox)) continue
                ;(Ot && (l.insert(ce), this.replayImageOrLabel_.apply(this, Ot)), l.insert(Mt.declutterBox))
              }
            }
            this.replayImageOrLabel_.apply(this, Ci)
          }
          ++c
          break
        case M.DRAW_CHARS:
          const rs = R[1],
            gt = R[2],
            Pr = R[3],
            Lu = R[4]
          S = R[5]
          const Au = R[6],
            Da = R[7],
            ka = R[8]
          v = R[9]
          const Lr = R[10]
          ;((C = R[11]), (T = R[12]))
          const Na = [R[13], R[13]],
            Ar = this.textStates[T],
            un = Ar.font,
            dn = [Ar.scale[0] * Da, Ar.scale[1] * Da]
          let fn
          un in this.widths_ ? (fn = this.widths_[un]) : ((fn = {}), (this.widths_[un] = fn))
          const Ga = Uc(h, rs, gt, 2),
            Xa = Math.abs(dn[0]) * jl(un, C, fn)
          if (Lu || Xa <= Ga) {
            const Mt = this.textStates[T].textAlign,
              Ci = (Ga - Xa) * Vr(C, Mt),
              Ot = N0(h, rs, gt, 2, C, Ci, Au, Math.abs(dn[0]), jl, un, fn, I ? 0 : this.viewRotation_)
            t: if (Ot) {
              const ce = []
              let Pt, os, as, Ct, Dt
              if (v)
                for (Pt = 0, os = Ot.length; Pt < os; ++Pt) {
                  ;((Dt = Ot[Pt]),
                    (as = Dt[4]),
                    (Ct = this.createLabel(as, T, '', v)),
                    (g = Dt[2] + (dn[0] < 0 ? -Lr : Lr)),
                    (_ = Pr * Ct.height + ((0.5 - Pr) * 2 * Lr * dn[1]) / dn[0] - ka))
                  const ue = this.calculateImageOrLabelDimensions_(
                    Ct.width,
                    Ct.height,
                    Dt[0],
                    Dt[1],
                    Ct.width,
                    Ct.height,
                    g,
                    _,
                    0,
                    0,
                    Dt[3],
                    Na,
                    !1,
                    si,
                    !1,
                    O,
                  )
                  if (l && l.collides(ue.declutterBox)) break t
                  ce.push([t, e, Ct, ue, 1, null, null])
                }
              if (S)
                for (Pt = 0, os = Ot.length; Pt < os; ++Pt) {
                  ;((Dt = Ot[Pt]),
                    (as = Dt[4]),
                    (Ct = this.createLabel(as, T, S, '')),
                    (g = Dt[2]),
                    (_ = Pr * Ct.height - ka))
                  const ue = this.calculateImageOrLabelDimensions_(
                    Ct.width,
                    Ct.height,
                    Dt[0],
                    Dt[1],
                    Ct.width,
                    Ct.height,
                    g,
                    _,
                    0,
                    0,
                    Dt[3],
                    Na,
                    !1,
                    si,
                    !1,
                    O,
                  )
                  if (l && l.collides(ue.declutterBox)) break t
                  ce.push([t, e, Ct, ue, 1, null, null])
                }
              l && l.load(ce.map(th))
              for (let ue = 0, Fu = ce.length; ue < Fu; ++ue) this.replayImageOrLabel_.apply(this, ce[ue])
            }
          }
          ++c
          break
        case M.END_GEOMETRY:
          if (o !== void 0) {
            O = R[1]
            const Mt = o(O, st)
            if (Mt) return Mt
          }
          ++c
          break
        case M.FILL:
          ;(w ? P++ : this.fill_(t), ++c)
          break
        case M.MOVE_TO_LINE_TO:
          for (
            d = R[1],
              f = R[2],
              Z = h[d],
              Y = h[d + 1],
              p = (Z + 0.5) | 0,
              x = (Y + 0.5) | 0,
              (p !== m || x !== y) && (t.moveTo(Z, Y), (m = p), (y = x)),
              d += 2;
            d < f;
            d += 2
          )
            ((Z = h[d]),
              (Y = h[d + 1]),
              (p = (Z + 0.5) | 0),
              (x = (Y + 0.5) | 0),
              (d == f - 2 || p !== m || x !== y) && (t.lineTo(Z, Y), (m = p), (y = x)))
          ++c
          break
        case M.SET_FILL_STYLE:
          ;((X = R),
            (this.alignFill_ = R[2]),
            P && (this.fill_(t), (P = 0), b && (t.stroke(), (b = 0))),
            (t.fillStyle = R[1]),
            ++c)
          break
        case M.SET_STROKE_STYLE:
          ;((N = R), b && (t.stroke(), (b = 0)), this.setStrokeStyle_(t, R), ++c)
          break
        case M.STROKE:
          ;(w ? b++ : t.stroke(), ++c)
          break
        default:
          ++c
          break
      }
    }
    ;(P && this.fill_(t), b && t.stroke())
  }
  execute(t, e, i, s, r, o) {
    ;((this.viewRotation_ = s), this.execute_(t, e, i, this.instructions, r, void 0, void 0, o))
  }
  executeHitDetection(t, e, i, s, r) {
    return ((this.viewRotation_ = i), this.execute_(t, 1, e, this.hitDetectionInstructions, !0, s, r))
  }
}
const Ur = ['Polygon', 'Circle', 'LineString', 'Image', 'Text', 'Default']
class ih {
  constructor(t, e, i, s, r, o) {
    ;((this.maxExtent_ = t),
      (this.overlaps_ = s),
      (this.pixelRatio_ = i),
      (this.resolution_ = e),
      (this.renderBuffer_ = o),
      (this.executorsByZIndex_ = {}),
      (this.hitDetectionContext_ = null),
      (this.hitDetectionTransform_ = ze()),
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
      const s = t[e]
      for (const r in s) {
        const o = s[r]
        i[r] = new X0(this.resolution_, this.pixelRatio_, this.overlaps_, o)
      }
    }
  }
  hasExecutors(t) {
    for (const e in this.executorsByZIndex_) {
      const i = this.executorsByZIndex_[e]
      for (let s = 0, r = t.length; s < r; ++s) if (t[s] in i) return !0
    }
    return !1
  }
  forEachFeatureAtCoordinate(t, e, i, s, r, o) {
    s = Math.round(s)
    const a = s * 2 + 1,
      l = Hn(this.hitDetectionTransform_, s + 0.5, s + 0.5, 1 / e, -1 / e, -i, -t[0], -t[1]),
      h = !this.hitDetectionContext_
    h && (this.hitDetectionContext_ = qt(a, a, void 0, { willReadFrequently: !0 }))
    const c = this.hitDetectionContext_
    c.canvas.width !== a || c.canvas.height !== a
      ? ((c.canvas.width = a), (c.canvas.height = a))
      : h || c.clearRect(0, 0, a, a)
    let u
    this.renderBuffer_ !== void 0 && ((u = ae()), Tc(u, t), Kn(u, e * (this.renderBuffer_ + s), u))
    const d = z0(s)
    let f
    function g(C, T) {
      const v = c.getImageData(0, 0, a, a).data
      for (let S = 0, P = d.length; S < P; S++)
        if (v[d[S]] > 0) {
          if (!o || (f !== 'Image' && f !== 'Text') || o.includes(C)) {
            const b = (d[S] - 3) / 4,
              X = s - (b % a),
              N = s - ((b / a) | 0),
              D = r(C, T, X * X + N * N)
            if (D) return D
          }
          c.clearRect(0, 0, a, a)
          break
        }
    }
    const _ = Object.keys(this.executorsByZIndex_).map(Number)
    _.sort(Mn)
    let m, y, p, x, E
    for (m = _.length - 1; m >= 0; --m) {
      const C = _[m].toString()
      for (p = this.executorsByZIndex_[C], y = Ur.length - 1; y >= 0; --y)
        if (((f = Ur[y]), (x = p[f]), x !== void 0 && ((E = x.executeHitDetection(c, l, i, g, u)), E)))
          return E
    }
  }
  getClipCoords(t) {
    const e = this.maxExtent_
    if (!e) return null
    const i = e[0],
      s = e[1],
      r = e[2],
      o = e[3],
      a = [i, s, i, o, r, o, r, s]
    return (ai(a, 0, 8, 2, t, a), a)
  }
  isEmpty() {
    return tn(this.executorsByZIndex_)
  }
  execute(t, e, i, s, r, o, a) {
    const l = Object.keys(this.executorsByZIndex_).map(Number)
    ;(l.sort(Mn), this.maxExtent_ && (t.save(), this.clip(t, i)), (o = o || Ur))
    let h, c, u, d, f, g
    for (a && l.reverse(), h = 0, c = l.length; h < c; ++h) {
      const _ = l[h].toString()
      for (f = this.executorsByZIndex_[_], u = 0, d = o.length; u < d; ++u) {
        const m = o[u]
        ;((g = f[m]), g !== void 0 && g.execute(t, e, i, s, r, a))
      }
    }
    this.maxExtent_ && t.restore()
  }
}
const Zr = {}
function z0(n) {
  if (Zr[n] !== void 0) return Zr[n]
  const t = n * 2 + 1,
    e = n * n,
    i = new Array(e + 1)
  for (let r = 0; r <= n; ++r)
    for (let o = 0; o <= n; ++o) {
      const a = r * r + o * o
      if (a > e) break
      let l = i[a]
      ;(l || ((l = []), (i[a] = l)),
        l.push(((n + r) * t + (n + o)) * 4 + 3),
        r > 0 && l.push(((n - r) * t + (n + o)) * 4 + 3),
        o > 0 && (l.push(((n + r) * t + (n - o)) * 4 + 3), r > 0 && l.push(((n - r) * t + (n - o)) * 4 + 3)))
    }
  const s = []
  for (let r = 0, o = i.length; r < o; ++r) i[r] && s.push(...i[r])
  return ((Zr[n] = s), s)
}
class j0 extends du {
  constructor(t, e, i, s, r, o, a) {
    ;(super(),
      (this.context_ = t),
      (this.pixelRatio_ = e),
      (this.extent_ = i),
      (this.transform_ = s),
      (this.transformRotation_ = s ? Oc(Math.atan2(s[1], s[0]), 10) : 0),
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
      (this.tmpLocalTransform_ = ze()))
  }
  drawImages_(t, e, i, s) {
    if (!this.image_) return
    const r = ai(t, e, i, s, this.transform_, this.pixelCoordinates_),
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
        ;(Hn(a, g, _, 1, 1, h, -g, -_),
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
  drawText_(t, e, i, s) {
    if (!this.textState_ || this.text_ === '') return
    ;(this.textFillState_ && this.setContextFillState_(this.textFillState_),
      this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_),
      this.setContextTextState_(this.textState_))
    const r = ai(t, e, i, s, this.transform_, this.pixelCoordinates_),
      o = this.context_
    let a = this.textRotation_
    for (
      this.transformRotation_ === 0 && (a -= this.viewRotation_),
        this.textRotateWithView_ && (a += this.viewRotation_);
      e < i;
      e += s
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
  moveToLineTo_(t, e, i, s, r) {
    const o = this.context_,
      a = ai(t, e, i, s, this.transform_, this.pixelCoordinates_)
    o.moveTo(a[0], a[1])
    let l = a.length
    r && (l -= 2)
    for (let h = 2; h < l; h += 2) o.lineTo(a[h], a[h + 1])
    return (r && o.closePath(), i)
  }
  drawRings_(t, e, i, s) {
    for (let r = 0, o = i.length; r < o; ++r) e = this.moveToLineTo_(t, e, i[r], s, !0)
    return e
  }
  drawCircle(t) {
    if (
      (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)),
      !!zt(this.extent_, t.getExtent()))
    ) {
      if (this.fillState_ || this.strokeState_) {
        ;(this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_))
        const e = b_(t, this.transform_, this.pixelCoordinates_),
          i = e[2] - e[0],
          s = e[3] - e[1],
          r = Math.sqrt(i * i + s * s),
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
    for (let i = 0, s = e.length; i < s; ++i) this.drawGeometry(e[i])
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
      !!zt(this.extent_, t.getExtent()))
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
    if (zt(this.extent_, e)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_)
        const i = this.context_,
          s = t.getFlatCoordinates()
        let r = 0
        const o = t.getEnds(),
          a = t.getStride()
        i.beginPath()
        for (let l = 0, h = o.length; l < h; ++l) r = this.moveToLineTo_(s, r, o[l], a, !1)
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
      !!zt(this.extent_, t.getExtent()))
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
      !!zt(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        ;(this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_))
        const e = this.context_,
          i = t.getOrientedFlatCoordinates()
        let s = 0
        const r = t.getEndss(),
          o = t.getStride()
        e.beginPath()
        for (let a = 0, l = r.length; a < l; ++a) {
          const h = r[a]
          s = this.drawRings_(i, s, h, o)
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
        gi(i.lineDash, t.lineDash) || e.setLineDash((i.lineDash = t.lineDash)),
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
      s = t.textAlign ? t.textAlign : Dn
    i
      ? (i.font != t.font && ((i.font = t.font), (e.font = t.font)),
        i.textAlign != s && ((i.textAlign = s), (e.textAlign = s)),
        i.textBaseline != t.textBaseline &&
          ((i.textBaseline = t.textBaseline), (e.textBaseline = t.textBaseline)))
      : ((e.font = t.font),
        (e.textAlign = s),
        (e.textBaseline = t.textBaseline),
        (this.contextTextState_ = { font: t.font, textAlign: s, textBaseline: t.textBaseline }))
  }
  setFillStrokeStyle(t, e) {
    if (!t) this.fillState_ = null
    else {
      const i = t.getColor()
      this.fillState_ = { fillStyle: se(i || wt) }
    }
    if (!e) this.strokeState_ = null
    else {
      const i = e.getColor(),
        s = e.getLineCap(),
        r = e.getLineDash(),
        o = e.getLineDashOffset(),
        a = e.getLineJoin(),
        l = e.getWidth(),
        h = e.getMiterLimit(),
        c = r || Ee
      this.strokeState_ = {
        lineCap: s !== void 0 ? s : ir,
        lineDash: this.pixelRatio_ === 1 ? c : c.map(u => u * this.pixelRatio_),
        lineDashOffset: (o || Ce) * this.pixelRatio_,
        lineJoin: a !== void 0 ? a : sn,
        lineWidth: (l !== void 0 ? l : kn) * this.pixelRatio_,
        miterLimit: h !== void 0 ? h : bn,
        strokeStyle: se(i || On),
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
      s = t.getAnchor(),
      r = t.getOrigin()
    ;((this.image_ = t.getImage(this.pixelRatio_)),
      (this.imageAnchorX_ = s[0] * i),
      (this.imageAnchorY_ = s[1] * i),
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
        this.textFillState_ = { fillStyle: se(f || wt) }
      }
      const i = t.getStroke()
      if (!i) this.textStrokeState_ = null
      else {
        const f = i.getColor(),
          g = i.getLineCap(),
          _ = i.getLineDash(),
          m = i.getLineDashOffset(),
          y = i.getLineJoin(),
          p = i.getWidth(),
          x = i.getMiterLimit()
        this.textStrokeState_ = {
          lineCap: g !== void 0 ? g : ir,
          lineDash: _ || Ee,
          lineDashOffset: m || Ce,
          lineJoin: y !== void 0 ? y : sn,
          lineWidth: p !== void 0 ? p : kn,
          miterLimit: x !== void 0 ? x : bn,
          strokeStyle: se(f || On),
        }
      }
      const s = t.getFont(),
        r = t.getOffsetX(),
        o = t.getOffsetY(),
        a = t.getRotateWithView(),
        l = t.getRotation(),
        h = t.getScaleArray(),
        c = t.getText(),
        u = t.getTextAlign(),
        d = t.getTextBaseline()
      ;((this.textState_ = {
        font: s !== void 0 ? s : eu,
        textAlign: u !== void 0 ? u : Dn,
        textBaseline: d !== void 0 ? d : nr,
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
const ee = 0.5
function W0(n, t, e, i, s, r, o) {
  const a = n[0] * ee,
    l = n[1] * ee,
    h = qt(a, l)
  h.imageSmoothingEnabled = !1
  const c = h.canvas,
    u = new j0(h, ee, s, null, o),
    d = e.length,
    f = Math.floor((256 * 256 * 256 - 1) / d),
    g = {}
  for (let m = 1; m <= d; ++m) {
    const y = e[m - 1],
      p = y.getStyleFunction() || i
    if (!p) continue
    let x = p(y, r)
    if (!x) continue
    Array.isArray(x) || (x = [x])
    const C = (m * f).toString(16).padStart(7, '#00000')
    for (let T = 0, v = x.length; T < v; ++T) {
      const S = x[T],
        P = S.getGeometryFunction()(y)
      if (!P || !zt(s, P.getExtent())) continue
      const b = S.clone(),
        X = b.getFill()
      X && X.setColor(C)
      const N = b.getStroke()
      ;(N && (N.setColor(C), N.setLineDash(null)), b.setText(void 0))
      const D = S.getImage()
      if (D) {
        const w = D.getImageSize()
        if (!w) continue
        const O = qt(w[0], w[1], void 0, { alpha: !1 }),
          Z = O.canvas
        ;((O.fillStyle = C),
          O.fillRect(0, 0, Z.width, Z.height),
          b.setImage(
            new wr({
              img: Z,
              imgSize: w,
              anchor: D.getAnchor(),
              anchorXUnits: 'pixels',
              anchorYUnits: 'pixels',
              offset: D.getOrigin(),
              opacity: 1,
              size: D.getSize(),
              scale: D.getScale(),
              rotation: D.getRotation(),
              rotateWithView: D.getRotateWithView(),
            }),
          ))
      }
      const nt = b.getZIndex() || 0
      let I = g[nt]
      I || ((I = {}), (g[nt] = I), (I.Polygon = []), (I.Circle = []), (I.LineString = []), (I.Point = []))
      const F = P.getType()
      if (F === 'GeometryCollection') {
        const w = P.getGeometriesArrayRecursive()
        for (let O = 0, Z = w.length; O < Z; ++O) {
          const Y = w[O]
          I[Y.getType().replace('Multi', '')].push(Y, b)
        }
      } else I[F.replace('Multi', '')].push(P, b)
    }
  }
  const _ = Object.keys(g).map(Number).sort(Mn)
  for (let m = 0, y = _.length; m < y; ++m) {
    const p = g[_[m]]
    for (const x in p) {
      const E = p[x]
      for (let C = 0, T = E.length; C < T; C += 2) {
        u.setStyle(E[C + 1])
        for (let v = 0, S = t.length; v < S; ++v) (u.setTransform(t[v]), u.drawGeometry(E[C]))
      }
    }
  }
  return h.getImageData(0, 0, c.width, c.height)
}
function Y0(n, t, e) {
  const i = []
  if (e) {
    const s = Math.floor(Math.round(n[0]) * ee),
      r = Math.floor(Math.round(n[1]) * ee),
      o = (ut(s, 0, e.width - 1) + ut(r, 0, e.height - 1) * e.width) * 4,
      a = e.data[o],
      l = e.data[o + 1],
      c = e.data[o + 2] + 256 * (l + 256 * a),
      u = Math.floor((256 * 256 * 256 - 1) / t.length)
    c && c % u === 0 && i.push(t[c / u - 1])
  }
  return i
}
const B0 = 0.5,
  fu = {
    Point: Q0,
    LineString: H0,
    Polygon: ey,
    MultiPoint: ty,
    MultiLineString: q0,
    MultiPolygon: J0,
    GeometryCollection: $0,
    Circle: Z0,
  }
function V0(n, t) {
  return parseInt(K(n), 10) - parseInt(K(t), 10)
}
function U0(n, t) {
  const e = Ao(n, t)
  return e * e
}
function Ao(n, t) {
  return (B0 * n) / t
}
function Z0(n, t, e, i, s) {
  const r = e.getFill(),
    o = e.getStroke()
  if (r || o) {
    const l = n.getBuilder(e.getZIndex(), 'Circle')
    ;(l.setFillStrokeStyle(r, o), l.drawCircle(t, i))
  }
  const a = e.getText()
  if (a && a.getText()) {
    const l = (s || n).getBuilder(e.getZIndex(), 'Text')
    ;(l.setTextStyle(a), l.drawText(t, i))
  }
}
function nh(n, t, e, i, s, r, o) {
  let a = !1
  const l = e.getImage()
  if (l) {
    const h = l.getImageState()
    h == tt.LOADED || h == tt.ERROR
      ? l.unlistenImageChange(s)
      : (h == tt.IDLE && l.load(), l.listenImageChange(s), (a = !0))
  }
  return (K0(n, t, e, i, r, o), a)
}
function K0(n, t, e, i, s, r) {
  const o = e.getGeometryFunction()(t)
  if (!o) return
  const a = o.simplifyTransformed(i, s)
  if (e.getRenderer()) gu(n, a, e, t)
  else {
    const h = fu[a.getType()]
    h(n, a, e, t, r)
  }
}
function gu(n, t, e, i) {
  if (t.getType() == 'GeometryCollection') {
    const r = t.getGeometries()
    for (let o = 0, a = r.length; o < a; ++o) gu(n, r[o], e, i)
    return
  }
  n.getBuilder(e.getZIndex(), 'Default').drawCustom(t, i, e.getRenderer(), e.getHitDetectionRenderer())
}
function $0(n, t, e, i, s) {
  const r = t.getGeometriesArray()
  let o, a
  for (o = 0, a = r.length; o < a; ++o) {
    const l = fu[r[o].getType()]
    l(n, r[o], e, i, s)
  }
}
function H0(n, t, e, i, s) {
  const r = e.getStroke()
  if (r) {
    const a = n.getBuilder(e.getZIndex(), 'LineString')
    ;(a.setFillStrokeStyle(null, r), a.drawLineString(t, i))
  }
  const o = e.getText()
  if (o && o.getText()) {
    const a = (s || n).getBuilder(e.getZIndex(), 'Text')
    ;(a.setTextStyle(o), a.drawText(t, i))
  }
}
function q0(n, t, e, i, s) {
  const r = e.getStroke()
  if (r) {
    const a = n.getBuilder(e.getZIndex(), 'LineString')
    ;(a.setFillStrokeStyle(null, r), a.drawMultiLineString(t, i))
  }
  const o = e.getText()
  if (o && o.getText()) {
    const a = (s || n).getBuilder(e.getZIndex(), 'Text')
    ;(a.setTextStyle(o), a.drawText(t, i))
  }
}
function J0(n, t, e, i, s) {
  const r = e.getFill(),
    o = e.getStroke()
  if (o || r) {
    const l = n.getBuilder(e.getZIndex(), 'Polygon')
    ;(l.setFillStrokeStyle(r, o), l.drawMultiPolygon(t, i))
  }
  const a = e.getText()
  if (a && a.getText()) {
    const l = (s || n).getBuilder(e.getZIndex(), 'Text')
    ;(l.setTextStyle(a), l.drawText(t, i))
  }
}
function Q0(n, t, e, i, s) {
  const r = e.getImage(),
    o = e.getText()
  let a
  if (r) {
    if (r.getImageState() != tt.LOADED) return
    let l = n
    if (s) {
      const c = r.getDeclutterMode()
      if (c !== 'none')
        if (((l = s), c === 'obstacle')) {
          const u = n.getBuilder(e.getZIndex(), 'Image')
          ;(u.setImageStyle(r, a), u.drawPoint(t, i))
        } else o && o.getText() && (a = {})
    }
    const h = l.getBuilder(e.getZIndex(), 'Image')
    ;(h.setImageStyle(r, a), h.drawPoint(t, i))
  }
  if (o && o.getText()) {
    let l = n
    s && (l = s)
    const h = l.getBuilder(e.getZIndex(), 'Text')
    ;(h.setTextStyle(o, a), h.drawText(t, i))
  }
}
function ty(n, t, e, i, s) {
  const r = e.getImage(),
    o = e.getText()
  let a
  if (r) {
    if (r.getImageState() != tt.LOADED) return
    let l = n
    if (s) {
      const c = r.getDeclutterMode()
      if (c !== 'none')
        if (((l = s), c === 'obstacle')) {
          const u = n.getBuilder(e.getZIndex(), 'Image')
          ;(u.setImageStyle(r, a), u.drawMultiPoint(t, i))
        } else o && o.getText() && (a = {})
    }
    const h = l.getBuilder(e.getZIndex(), 'Image')
    ;(h.setImageStyle(r, a), h.drawMultiPoint(t, i))
  }
  if (o && o.getText()) {
    let l = n
    s && (l = s)
    const h = l.getBuilder(e.getZIndex(), 'Text')
    ;(h.setTextStyle(o, a), h.drawText(t, i))
  }
}
function ey(n, t, e, i, s) {
  const r = e.getFill(),
    o = e.getStroke()
  if (r || o) {
    const l = n.getBuilder(e.getZIndex(), 'Polygon')
    ;(l.setFillStrokeStyle(r, o), l.drawPolygon(t, i))
  }
  const a = e.getText()
  if (a && a.getText()) {
    const l = (s || n).getBuilder(e.getZIndex(), 'Text')
    ;(l.setTextStyle(a), l.drawText(t, i))
  }
}
class iy extends k0 {
  constructor(t) {
    ;(super(t),
      (this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this)),
      this.animatingOrInteracting_,
      (this.hitDetectionImageData_ = null),
      (this.renderedFeatures_ = null),
      (this.renderedRevision_ = -1),
      (this.renderedResolution_ = NaN),
      (this.renderedExtent_ = ae()),
      (this.wrappedRenderedExtent_ = ae()),
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
    const s = e.extent,
      r = e.viewState,
      o = r.center,
      a = r.resolution,
      l = r.projection,
      h = r.rotation,
      c = l.getExtent(),
      u = this.getLayer().getSource(),
      d = e.pixelRatio,
      f = e.viewHints,
      g = !(f[Gt.ANIMATING] || f[Gt.INTERACTING]),
      _ = this.compositionContext_,
      m = Math.round(e.size[0] * d),
      y = Math.round(e.size[1] * d),
      p = u.getWrapX() && l.canWrapX(),
      x = p ? jt(c) : null,
      E = p ? Math.ceil((s[2] - c[2]) / x) + 1 : 1
    let C = p ? Math.floor((s[0] - c[0]) / x) : 0
    do {
      const T = this.getRenderTransform(o, a, h, d, m, y, C * x)
      t.execute(_, 1, T, h, g, void 0, i)
    } while (++C < E)
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = qt(this.context.canvas.width, this.context.canvas.height, Ql)
      this.compositionContext_ = t
    } else this.compositionContext_ = this.context
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = this.context.globalAlpha
      ;((this.context.globalAlpha = this.opacity_),
        this.context.drawImage(this.compositionContext_.canvas, 0, 0),
        (this.context.globalAlpha = t),
        Em(this.compositionContext_),
        Ql.push(this.compositionContext_.canvas),
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
      s = t.layerStatesArray[t.layerIndex]
    ;(v_(this.pixelTransform, 1 / i, 1 / i), I_(this.inversePixelTransform, this.pixelTransform))
    const r = P_(this.pixelTransform)
    this.useContainer(e, r, this.getBackground(t))
    const o = this.context,
      a = o.canvas,
      l = this.replayGroup_,
      h = this.declutterExecutorGroup
    let c = (l && !l.isEmpty()) || (h && !h.isEmpty())
    if (!c && !(this.getLayer().hasListener(Nn.PRERENDER) || this.getLayer().hasListener(Nn.POSTRENDER)))
      return null
    const u = Math.round(t.size[0] * i),
      d = Math.round(t.size[1] * i)
    ;(a.width != u || a.height != d
      ? ((a.width = u), (a.height = d), a.style.transform !== r && (a.style.transform = r))
      : this.containerReused || o.clearRect(0, 0, u, d),
      this.preRender(o, t))
    const f = t.viewState
    ;(f.projection, (this.opacity_ = s.opacity), this.setupCompositionContext_())
    let g = !1
    if (c && s.extent && this.clipping) {
      const _ = zi(s.extent)
      ;((c = zt(_, t.extent)),
        (g = c && !Gi(_, t.extent)),
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
        Rt(this.pixelTransform, i)
        const s = this.renderedCenter_,
          r = this.renderedResolution_,
          o = this.renderedRotation_,
          a = this.renderedProjection_,
          l = this.wrappedRenderedExtent_,
          h = this.getLayer(),
          c = [],
          u = i[0] * ee,
          d = i[1] * ee
        c.push(this.getRenderTransform(s, r, o, ee, u, d, 0).slice())
        const f = h.getSource(),
          g = a.getExtent()
        if (f.getWrapX() && a.canWrapX() && !Gi(g, l)) {
          let _ = l[0]
          const m = jt(g)
          let y = 0,
            p
          for (; _ < g[0]; )
            (--y, (p = m * y), c.push(this.getRenderTransform(s, r, o, ee, u, d, p).slice()), (_ += m))
          for (y = 0, _ = l[2]; _ > g[2]; )
            (++y, (p = m * y), c.push(this.getRenderTransform(s, r, o, ee, u, d, p).slice()), (_ -= m))
        }
        this.hitDetectionImageData_ = W0(i, c, this.renderedFeatures_, h.getStyleFunction(), l, r, o)
      }
      e(Y0(t, this.renderedFeatures_, this.hitDetectionImageData_))
    })
  }
  forEachFeatureAtCoordinate(t, e, i, s, r) {
    if (!this.replayGroup_) return
    const o = e.viewState.resolution,
      a = e.viewState.rotation,
      l = this.getLayer(),
      h = {},
      c = function (f, g, _) {
        const m = K(f),
          y = h[m]
        if (y) {
          if (y !== !0 && _ < y.distanceSq) {
            if (_ === 0) return ((h[m] = !0), r.splice(r.lastIndexOf(y), 1), s(f, l, g))
            ;((y.geometry = g), (y.distanceSq = _))
          }
        } else {
          if (_ === 0) return ((h[m] = !0), s(f, l, g))
          r.push((h[m] = { feature: f, layer: l, geometry: g, distanceSq: _, callback: s }))
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
    const s = t.viewHints[Gt.ANIMATING],
      r = t.viewHints[Gt.INTERACTING],
      o = e.getUpdateWhileAnimating(),
      a = e.getUpdateWhileInteracting()
    if ((this.ready && !o && s) || (!a && r)) return ((this.animatingOrInteracting_ = !0), !0)
    this.animatingOrInteracting_ = !1
    const l = t.extent,
      h = t.viewState,
      c = h.projection,
      u = h.resolution,
      d = t.pixelRatio,
      f = e.getRevision(),
      g = e.getRenderBuffer()
    let _ = e.getRenderOrder()
    _ === void 0 && (_ = V0)
    const m = h.center.slice(),
      y = Kn(l, g * u),
      p = y.slice(),
      x = [y.slice()],
      E = c.getExtent()
    if (i.getWrapX() && c.canWrapX() && !Gi(E, t.extent)) {
      const I = jt(E),
        F = Math.max(jt(y) / 2, I)
      ;((y[0] = E[0] - F), (y[2] = E[2] + F), u_(m, c))
      const w = Ac(x[0], c)
      w[0] < E[0] && w[2] < E[2]
        ? x.push([w[0] + I, w[1], w[2] + I, w[3]])
        : w[0] > E[0] && w[2] > E[2] && x.push([w[0] - I, w[1], w[2] - I, w[3]])
    }
    if (
      this.ready &&
      this.renderedResolution_ == u &&
      this.renderedRevision_ == f &&
      this.renderedRenderOrder_ == _ &&
      Gi(this.wrappedRenderedExtent_, y)
    )
      return (
        gi(this.renderedExtent_, p) || ((this.hitDetectionImageData_ = null), (this.renderedExtent_ = p)),
        (this.renderedCenter_ = m),
        (this.replayGroupChanged = !1),
        !0
      )
    this.replayGroup_ = null
    const C = new Jl(Ao(u, d), y, u, d)
    let T
    this.getLayer().getDeclutter() && (T = new Jl(Ao(u, d), y, u, d))
    let v
    for (let I = 0, F = x.length; I < F; ++I) i.loadFeatures(x[I], u, c)
    const S = U0(u, d)
    let P = !0
    const b = I => {
        let F
        const w = I.getStyleFunction() || e.getStyleFunction()
        if ((w && (F = w(I, u)), F)) {
          const O = this.renderFeature(I, S, F, C, v, T)
          P = P && !O
        }
      },
      X = Er(y),
      N = i.getFeaturesInExtent(X)
    _ && N.sort(_)
    for (let I = 0, F = N.length; I < F; ++I) b(N[I])
    ;((this.renderedFeatures_ = N), (this.ready = P))
    const D = C.finish(),
      nt = new ih(y, u, d, i.getOverlaps(), D, e.getRenderBuffer())
    return (
      T && (this.declutterExecutorGroup = new ih(y, u, d, i.getOverlaps(), T.finish(), e.getRenderBuffer())),
      (this.renderedResolution_ = u),
      (this.renderedRevision_ = f),
      (this.renderedRenderOrder_ = _),
      (this.renderedExtent_ = p),
      (this.wrappedRenderedExtent_ = y),
      (this.renderedCenter_ = m),
      (this.renderedProjection_ = c),
      (this.replayGroup_ = nt),
      (this.hitDetectionImageData_ = null),
      (this.replayGroupChanged = !0),
      !0
    )
  }
  renderFeature(t, e, i, s, r, o) {
    if (!i) return !1
    let a = !1
    if (Array.isArray(i))
      for (let l = 0, h = i.length; l < h; ++l)
        a = nh(s, t, i[l], e, this.boundHandleStyleImageChange_, r, o) || a
    else a = nh(s, t, i, e, this.boundHandleStyleImageChange_, r, o)
    return a
  }
}
class Ma extends v0 {
  constructor(t) {
    super(t)
  }
  createRenderer() {
    return new iy(this)
  }
}
class lr {
  constructor(t) {
    ;((this.rbush_ = new uu(t)), (this.items_ = {}))
  }
  insert(t, e) {
    const i = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3], value: e }
    ;(this.rbush_.insert(i), (this.items_[K(e)] = i))
  }
  load(t, e) {
    const i = new Array(e.length)
    for (let s = 0, r = e.length; s < r; s++) {
      const o = t[s],
        a = e[s],
        l = { minX: o[0], minY: o[1], maxX: o[2], maxY: o[3], value: a }
      ;((i[s] = l), (this.items_[K(a)] = l))
    }
    this.rbush_.load(i)
  }
  remove(t) {
    const e = K(t),
      i = this.items_[e]
    return (delete this.items_[e], this.rbush_.remove(i) !== null)
  }
  update(t, e) {
    const i = this.items_[K(e)],
      s = [i.minX, i.minY, i.maxX, i.maxY]
    Cc(s, t) || (this.remove(e), this.insert(t, e))
  }
  getAll() {
    return this.rbush_.all().map(function (e) {
      return e.value
    })
  }
  getInExtent(t) {
    const e = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3] }
    return this.rbush_.search(e).map(function (s) {
      return s.value
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
    for (let s = 0, r = t.length; s < r; s++) if (((i = e(t[s])), i)) return i
    return i
  }
  isEmpty() {
    return tn(this.items_)
  }
  clear() {
    ;(this.rbush_.clear(), (this.items_ = {}))
  }
  getExtent(t) {
    const e = this.rbush_.toJSON()
    return hi(e.minX, e.minY, e.maxX, e.maxY, t)
  }
  concat(t) {
    this.rbush_.load(t.rbush_.all())
    for (const e in t.items_) this.items_[e] = t.items_[e]
  }
}
class ny extends Te {
  constructor(t) {
    ;(super(),
      (this.projection = vt(t.projection)),
      (this.attributions_ = sh(t.attributions)),
      (this.attributionsCollapsible_ = t.attributionsCollapsible !== void 0 ? t.attributionsCollapsible : !0),
      (this.loading = !1),
      (this.state_ = t.state !== void 0 ? t.state : 'ready'),
      (this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1),
      (this.interpolate_ = !!t.interpolate),
      (this.viewResolver = null),
      (this.viewRejector = null))
    const e = this
    this.viewPromise_ = new Promise(function (i, s) {
      ;((e.viewResolver = i), (e.viewRejector = s))
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
    ;((this.attributions_ = sh(t)), this.changed())
  }
  setState(t) {
    ;((this.state_ = t), this.changed())
  }
}
function sh(n) {
  return n
    ? Array.isArray(n)
      ? function (t) {
          return n
        }
      : typeof n == 'function'
        ? n
        : function (t) {
            return [n]
          }
    : null
}
const _t = {
  ADDFEATURE: 'addfeature',
  CHANGEFEATURE: 'changefeature',
  CLEAR: 'clear',
  REMOVEFEATURE: 'removefeature',
  FEATURESLOADSTART: 'featuresloadstart',
  FEATURESLOADEND: 'featuresloadend',
  FEATURESLOADERROR: 'featuresloaderror',
}
function sy(n, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]]
}
let ry = !1
function oy(n, t, e, i, s, r, o) {
  const a = new XMLHttpRequest()
  ;(a.open('GET', typeof n == 'function' ? n(e, i, s) : n, !0),
    t.getType() == 'arraybuffer' && (a.responseType = 'arraybuffer'),
    (a.withCredentials = ry),
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
          c ? r(t.readFeatures(c, { extent: e, featureProjection: s }), t.readProjection(c)) : o())
      } else o()
    }),
    (a.onerror = o),
    a.send())
}
function rh(n, t) {
  return function (e, i, s, r, o) {
    const a = this
    oy(
      n,
      t,
      e,
      i,
      s,
      function (l, h) {
        ;(a.addFeatures(l), r !== void 0 && r(l))
      },
      o || Pn,
    )
  }
}
class Fe extends xt {
  constructor(t, e, i) {
    ;(super(t), (this.feature = e), (this.features = i))
  }
}
class Pa extends ny {
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
      (this.loader_ = Pn),
      (this.format_ = t.format),
      (this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps),
      (this.url_ = t.url),
      t.loader !== void 0
        ? (this.loader_ = t.loader)
        : this.url_ !== void 0 && (et(this.format_, 7), (this.loader_ = rh(this.url_, this.format_))),
      (this.strategy_ = t.strategy !== void 0 ? t.strategy : sy))
    const e = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0
    ;((this.featuresRtree_ = e ? new lr() : null),
      (this.loadedExtentsRtree_ = new lr()),
      (this.loadingExtentsCount_ = 0),
      (this.nullGeometryFeatures_ = {}),
      (this.idIndex_ = {}),
      (this.uidIndex_ = {}),
      (this.featureChangeKeys_ = {}),
      (this.featuresCollection_ = null))
    let i, s
    ;(Array.isArray(t.features) ? (s = t.features) : t.features && ((i = t.features), (s = i.getArray())),
      !e && i === void 0 && (i = new oi(s)),
      s !== void 0 && this.addFeaturesInternal(s),
      i !== void 0 && this.bindFeaturesCollection_(i))
  }
  addFeature(t) {
    ;(this.addFeatureInternal(t), this.changed())
  }
  addFeatureInternal(t) {
    const e = K(t)
    if (!this.addToIndex_(e, t)) {
      this.featuresCollection_ && this.featuresCollection_.remove(t)
      return
    }
    this.setupChangeEvents_(e, t)
    const i = t.getGeometry()
    if (i) {
      const s = i.getExtent()
      this.featuresRtree_ && this.featuresRtree_.insert(s, t)
    } else this.nullGeometryFeatures_[e] = t
    this.dispatchEvent(new Fe(_t.ADDFEATURE, t))
  }
  setupChangeEvents_(t, e) {
    this.featureChangeKeys_[t] = [
      yt(e, dt.CHANGE, this.handleFeatureChange_, this),
      yt(e, yc.PROPERTYCHANGE, this.handleFeatureChange_, this),
    ]
  }
  addToIndex_(t, e) {
    let i = !0
    const s = e.getId()
    return (
      s !== void 0 && (s.toString() in this.idIndex_ ? (i = !1) : (this.idIndex_[s.toString()] = e)),
      i && (et(!(t in this.uidIndex_), 30), (this.uidIndex_[t] = e)),
      i
    )
  }
  addFeatures(t) {
    ;(this.addFeaturesInternal(t), this.changed())
  }
  addFeaturesInternal(t) {
    const e = [],
      i = [],
      s = []
    for (let r = 0, o = t.length; r < o; r++) {
      const a = t[r],
        l = K(a)
      this.addToIndex_(l, a) && i.push(a)
    }
    for (let r = 0, o = i.length; r < o; r++) {
      const a = i[r],
        l = K(a)
      this.setupChangeEvents_(l, a)
      const h = a.getGeometry()
      if (h) {
        const c = h.getExtent()
        ;(e.push(c), s.push(a))
      } else this.nullGeometryFeatures_[l] = a
    }
    if ((this.featuresRtree_ && this.featuresRtree_.load(e, s), this.hasListener(_t.ADDFEATURE)))
      for (let r = 0, o = i.length; r < o; r++) this.dispatchEvent(new Fe(_t.ADDFEATURE, i[r]))
  }
  bindFeaturesCollection_(t) {
    let e = !1
    ;(this.addEventListener(_t.ADDFEATURE, function (i) {
      e || ((e = !0), t.push(i.feature), (e = !1))
    }),
      this.addEventListener(_t.REMOVEFEATURE, function (i) {
        e || ((e = !0), t.remove(i.feature), (e = !1))
      }),
      t.addEventListener(ne.ADD, i => {
        e || ((e = !0), this.addFeature(i.element), (e = !1))
      }),
      t.addEventListener(ne.REMOVE, i => {
        e || ((e = !0), this.removeFeature(i.element), (e = !1))
      }),
      (this.featuresCollection_ = t))
  }
  clear(t) {
    if (t) {
      for (const i in this.featureChangeKeys_) this.featureChangeKeys_[i].forEach(Ft)
      this.featuresCollection_ ||
        ((this.featureChangeKeys_ = {}), (this.idIndex_ = {}), (this.uidIndex_ = {}))
    } else if (this.featuresRtree_) {
      const i = s => {
        this.removeFeatureInternal(s)
      }
      this.featuresRtree_.forEach(i)
      for (const s in this.nullGeometryFeatures_) this.removeFeatureInternal(this.nullGeometryFeatures_[s])
    }
    ;(this.featuresCollection_ && this.featuresCollection_.clear(),
      this.featuresRtree_ && this.featuresRtree_.clear(),
      (this.nullGeometryFeatures_ = {}))
    const e = new Fe(_t.CLEAR)
    ;(this.dispatchEvent(e), this.changed())
  }
  forEachFeature(t) {
    if (this.featuresRtree_) return this.featuresRtree_.forEach(t)
    this.featuresCollection_ && this.featuresCollection_.forEach(t)
  }
  forEachFeatureAtCoordinateDirect(t, e) {
    const i = [t[0], t[1], t[0], t[1]]
    return this.forEachFeatureInExtent(i, function (s) {
      if (s.getGeometry().intersectsCoordinate(t)) return e(s)
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
          tn(this.nullGeometryFeatures_) || re(t, Object.values(this.nullGeometryFeatures_))),
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
      const s = Hg(t, e)
      return [].concat(...s.map(r => this.featuresRtree_.getInExtent(r)))
    }
    return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : []
  }
  getClosestFeatureToCoordinate(t, e) {
    const i = t[0],
      s = t[1]
    let r = null
    const o = [NaN, NaN]
    let a = 1 / 0
    const l = [-1 / 0, -1 / 0, 1 / 0, 1 / 0]
    return (
      (e = e || Qi),
      this.featuresRtree_.forEachInExtent(l, function (h) {
        if (e(h)) {
          const c = h.getGeometry(),
            u = a
          if (((a = c.closestPointXY(i, s, o, a)), a < u)) {
            r = h
            const d = Math.sqrt(a)
            ;((l[0] = i - d), (l[1] = s - d), (l[2] = i + d), (l[3] = s + d))
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
      i = K(e),
      s = e.getGeometry()
    if (!s)
      i in this.nullGeometryFeatures_ ||
        (this.featuresRtree_ && this.featuresRtree_.remove(e), (this.nullGeometryFeatures_[i] = e))
    else {
      const o = s.getExtent()
      i in this.nullGeometryFeatures_
        ? (delete this.nullGeometryFeatures_[i], this.featuresRtree_ && this.featuresRtree_.insert(o, e))
        : this.featuresRtree_ && this.featuresRtree_.update(o, e)
    }
    const r = e.getId()
    if (r !== void 0) {
      const o = r.toString()
      this.idIndex_[o] !== e && (this.removeFromIdIndex_(e), (this.idIndex_[o] = e))
    } else (this.removeFromIdIndex_(e), (this.uidIndex_[i] = e))
    ;(this.changed(), this.dispatchEvent(new Fe(_t.CHANGEFEATURE, e)))
  }
  hasFeature(t) {
    const e = t.getId()
    return e !== void 0 ? e in this.idIndex_ : K(t) in this.uidIndex_
  }
  isEmpty() {
    return this.featuresRtree_
      ? this.featuresRtree_.isEmpty() && tn(this.nullGeometryFeatures_)
      : this.featuresCollection_
        ? this.featuresCollection_.getLength() === 0
        : !0
  }
  loadFeatures(t, e, i) {
    const s = this.loadedExtentsRtree_,
      r = this.strategy_(t, e, i)
    for (let o = 0, a = r.length; o < a; ++o) {
      const l = r[o]
      s.forEachInExtent(l, function (c) {
        return Gi(c.extent, l)
      }) ||
        (++this.loadingExtentsCount_,
        this.dispatchEvent(new Fe(_t.FEATURESLOADSTART)),
        this.loader_.call(
          this,
          l,
          e,
          i,
          c => {
            ;(--this.loadingExtentsCount_, this.dispatchEvent(new Fe(_t.FEATURESLOADEND, void 0, c)))
          },
          () => {
            ;(--this.loadingExtentsCount_, this.dispatchEvent(new Fe(_t.FEATURESLOADERROR)))
          },
        ),
        s.insert(l, { extent: l.slice() }))
    }
    this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0
  }
  refresh() {
    ;(this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh())
  }
  removeLoadedExtent(t) {
    const e = this.loadedExtentsRtree_
    let i
    ;(e.forEachInExtent(t, function (s) {
      if (Cc(s.extent, t)) return ((i = s), !0)
    }),
      i && e.remove(i))
  }
  removeFeature(t) {
    if (!t) return
    const e = K(t)
    ;(e in this.nullGeometryFeatures_
      ? delete this.nullGeometryFeatures_[e]
      : this.featuresRtree_ && this.featuresRtree_.remove(t),
      this.removeFeatureInternal(t) && this.changed())
  }
  removeFeatureInternal(t) {
    const e = K(t),
      i = this.featureChangeKeys_[e]
    if (!i) return
    ;(i.forEach(Ft), delete this.featureChangeKeys_[e])
    const s = t.getId()
    return (
      s !== void 0 && delete this.idIndex_[s.toString()],
      delete this.uidIndex_[e],
      this.dispatchEvent(new Fe(_t.REMOVEFEATURE, t)),
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
    ;(et(this.format_, 7), (this.url_ = t), this.setLoader(rh(t, this.format_)))
  }
}
const vs = { DRAWSTART: 'drawstart', DRAWEND: 'drawend', DRAWABORT: 'drawabort' }
class Is extends xt {
  constructor(t, e) {
    ;(super(t), (this.feature = e))
  }
}
function ay(n, t) {
  const e = []
  for (let i = 0; i < t.length; ++i) {
    const r = t[i].getGeometry()
    _u(n, r, e)
  }
  return e
}
function Ms(n, t) {
  return ye(n[0], n[1], t[0], t[1])
}
function ji(n, t) {
  const e = n.length
  return t < 0 ? n[t + e] : t >= e ? n[t - e] : n[t]
}
function Ps(n, t, e) {
  let i, s
  t < e ? ((i = t), (s = e)) : ((i = e), (s = t))
  const r = Math.ceil(i),
    o = Math.floor(s)
  if (r > o) {
    const l = Wi(n, i),
      h = Wi(n, s)
    return Ms(l, h)
  }
  let a = 0
  if (i < r) {
    const l = Wi(n, i),
      h = ji(n, r)
    a += Ms(l, h)
  }
  if (o < s) {
    const l = ji(n, o),
      h = Wi(n, s)
    a += Ms(l, h)
  }
  for (let l = r; l < o - 1; ++l) {
    const h = ji(n, l),
      c = ji(n, l + 1)
    a += Ms(h, c)
  }
  return a
}
function _u(n, t, e) {
  if (t instanceof $t) {
    Ls(n, t.getCoordinates(), !1, e)
    return
  }
  if (t instanceof ci) {
    const i = t.getCoordinates()
    for (let s = 0, r = i.length; s < r; ++s) Ls(n, i[s], !1, e)
    return
  }
  if (t instanceof Yt) {
    const i = t.getCoordinates()
    for (let s = 0, r = i.length; s < r; ++s) Ls(n, i[s], !0, e)
    return
  }
  if (t instanceof ui) {
    const i = t.getCoordinates()
    for (let s = 0, r = i.length; s < r; ++s) {
      const o = i[s]
      for (let a = 0, l = o.length; a < l; ++a) Ls(n, o[a], !0, e)
    }
    return
  }
  if (t instanceof Be) {
    const i = t.getGeometries()
    for (let s = 0; s < i.length; ++s) _u(n, i[s], e)
    return
  }
}
const Kr = { index: -1, endIndex: NaN }
function ly(n, t, e, i) {
  const s = n[0],
    r = n[1]
  let o = 1 / 0,
    a = -1,
    l = NaN
  for (let u = 0; u < t.targets.length; ++u) {
    const d = t.targets[u],
      f = d.coordinates
    let g = 1 / 0,
      _
    for (let m = 0; m < f.length - 1; ++m) {
      const y = f[m],
        p = f[m + 1],
        x = mu(s, r, y, p)
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
    const u = Wi(h.coordinates, l),
      d = e.getPixelFromCoordinate(u)
    qs(d, t.startPx) > i && (c = !1)
  }
  if (c) {
    const u = h.coordinates,
      d = u.length,
      f = h.startIndex,
      g = l
    if (f < g) {
      const _ = Ps(u, f, g)
      Ps(u, f, g - d) < _ && (l -= d)
    } else {
      const _ = Ps(u, f, g)
      Ps(u, f, g + d) < _ && (l += d)
    }
  }
  return ((Kr.index = a), (Kr.endIndex = l), Kr)
}
function Ls(n, t, e, i) {
  const s = n[0],
    r = n[1]
  for (let o = 0, a = t.length - 1; o < a; ++o) {
    const l = t[o],
      h = t[o + 1],
      c = mu(s, r, l, h)
    if (c.squaredDistance === 0) {
      const u = o + c.along
      i.push({ coordinates: t, ring: e, startIndex: u, endIndex: u })
      return
    }
  }
}
const $r = { along: 0, squaredDistance: 0 }
function mu(n, t, e, i) {
  const s = e[0],
    r = e[1],
    o = i[0],
    a = i[1],
    l = o - s,
    h = a - r
  let c = 0,
    u = s,
    d = r
  return (
    (l !== 0 || h !== 0) &&
      ((c = ut(((n - s) * l + (t - r) * h) / (l * l + h * h), 0, 1)), (u += l * c), (d += h * c)),
    ($r.along = c),
    ($r.squaredDistance = Oc(ye(n, t, u, d), 10)),
    $r
  )
}
function Wi(n, t) {
  const e = n.length
  let i = Math.floor(t)
  const s = t - i
  i >= e ? (i -= e) : i < 0 && (i += e)
  let r = i + 1
  r >= e && (r -= e)
  const o = n[i],
    a = o[0],
    l = o[1],
    h = n[r],
    c = h[0] - a,
    u = h[1] - l
  return [a + c * s, l + u * s]
}
class hy extends vr {
  constructor(t) {
    const e = t
    ;(e.stopDown || (e.stopDown = la),
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
      (this.mode_ = uy(this.type_)),
      (this.stopClick_ = !!t.stopClick),
      (this.minPoints_ = t.minPoints ? t.minPoints : this.mode_ === 'Polygon' ? 3 : 2),
      (this.maxPoints_ = this.mode_ === 'Circle' ? 2 : t.maxPoints ? t.maxPoints : 1 / 0),
      (this.finishCondition_ = t.finishCondition ? t.finishCondition : Qi),
      (this.geometryLayout_ = t.geometryLayout ? t.geometryLayout : 'XY'))
    let i = t.geometryFunction
    if (!i) {
      const s = this.mode_
      if (s === 'Circle')
        i = function (r, o, a) {
          const l = o || new qn([NaN, NaN]),
            h = J(r[0]),
            c = pe(h, J(r[r.length - 1]))
          return (l.setCenterAndRadius(h, Math.sqrt(c), this.geometryLayout_), l)
        }
      else {
        let r
        ;(s === 'Point' ? (r = Wt) : s === 'LineString' ? (r = $t) : s === 'Polygon' && (r = Yt),
          (i = function (o, a, l) {
            return (
              a
                ? s === 'Polygon'
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
      (this.overlay_ = new Ma({
        source: new Pa({ useSpatialIndex: !1, wrapX: t.wrapX ? t.wrapX : !1 }),
        style: t.style ? t.style : cy(),
        updateWhileInteracting: !0,
      })),
      (this.geometryName_ = t.geometryName),
      (this.condition_ = t.condition ? t.condition : Jm),
      this.freehandCondition_,
      t.freehand
        ? (this.freehandCondition_ = or)
        : (this.freehandCondition_ = t.freehandCondition ? t.freehandCondition : Qm),
      this.traceCondition_,
      this.setTrace(t.trace || !1),
      (this.traceState_ = { active: !1 }),
      (this.traceSource_ = t.traceSource || t.source || null),
      this.addChangeListener(rr.ACTIVE, this.updateState_))
  }
  setTrace(t) {
    let e
    ;(t ? (t === !0 ? (e = or) : (e = t)) : (e = Hm), (this.traceCondition_ = e))
  }
  setMap(t) {
    ;(super.setMap(t), this.updateState_())
  }
  getOverlay() {
    return this.overlay_
  }
  handleEvent(t) {
    ;(t.originalEvent.type === dt.CONTEXTMENU && t.originalEvent.preventDefault(),
      (this.freehand_ = this.mode_ !== 'Point' && this.freehandCondition_(t)))
    let e = t.type === ct.POINTERMOVE,
      i = !0
    return (
      !this.freehand_ &&
        this.lastDragTime_ &&
        t.type === ct.POINTERDRAG &&
        (Date.now() - this.lastDragTime_ >= this.dragVertexDelay_
          ? ((this.downPx_ = t.pixel), (this.shouldHandle_ = !this.freehand_), (e = !0))
          : (this.lastDragTime_ = void 0),
        this.shouldHandle_ &&
          this.downTimeout_ !== void 0 &&
          (clearTimeout(this.downTimeout_), (this.downTimeout_ = void 0))),
      this.freehand_ && t.type === ct.POINTERDRAG && this.sketchFeature_ !== null
        ? (this.addToDrawing_(t.coordinate), (i = !1))
        : this.freehand_ && t.type === ct.POINTERDOWN
          ? (i = !1)
          : e && this.getPointerCount() < 2
            ? ((i = t.type === ct.POINTERMOVE),
              i && this.freehand_
                ? (this.handlePointerMove_(t), this.shouldHandle_ && t.originalEvent.preventDefault())
                : (t.originalEvent.pointerType === 'mouse' ||
                    (t.type === ct.POINTERDRAG && this.downTimeout_ === void 0)) &&
                  this.handlePointerMove_(t))
            : t.type === ct.DBLCLICK && (i = !1),
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
              this.handlePointerMove_(new r0(ct.POINTERMOVE, t.map, t.originalEvent, !1, t.frameState))
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
      s = e.getCoordinateFromPixel([t.pixel[0] + this.snapTolerance_, t.pixel[1] - this.snapTolerance_]),
      r = Lt([i, s]),
      o = this.traceSource_.getFeaturesInExtent(r)
    if (o.length === 0) return
    const a = ay(t.coordinate, o)
    a.length && (this.traceState_ = { active: !0, startPx: t.pixel.slice(), targets: a, targetIndex: -1 })
  }
  addOrRemoveTracedCoordinates_(t, e) {
    const i = t.startIndex <= t.endIndex,
      s = t.startIndex <= e
    i === s
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
      const s = Math.ceil(t)
      let r = Math.floor(e)
      ;(r === e && (r -= 1), (i = r - s + 1))
    } else {
      const s = Math.floor(t)
      let r = Math.ceil(e)
      ;(r === e && (r += 1), (i = s - r + 1))
    }
    i > 0 && this.removeLastPoints_(i)
  }
  addTracedCoordinates_(t, e, i) {
    if (e === i) return
    const s = []
    if (e < i) {
      const r = Math.ceil(e)
      let o = Math.floor(i)
      o === i && (o -= 1)
      for (let a = r; a <= o; ++a) s.push(ji(t.coordinates, a))
    } else {
      const r = Math.floor(e)
      let o = Math.ceil(i)
      o === i && (o += 1)
      for (let a = r; a >= o; --a) s.push(ji(t.coordinates, a))
    }
    s.length && this.appendCoordinates(s)
  }
  updateTrace_(t) {
    const e = this.traceState_
    if (!e.active || (e.targetIndex === -1 && qs(e.startPx, t.pixel) < this.snapTolerance_)) return
    const i = ly(t.coordinate, e, this.getMap(), this.snapTolerance_)
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
    const s = e.targets[e.targetIndex]
    s.endIndex = i.endIndex
    const r = Wi(s.coordinates, s.endIndex),
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
        const s = !this.finishCoordinate_
        ;(s && this.startDrawing_(t.coordinate),
          !s && this.freehand_
            ? this.finishDrawing()
            : !this.freehand_ &&
              (!s || this.mode_ === 'Point') &&
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
        s = e[0] - i[0],
        r = e[1] - i[1],
        o = s * s + r * r
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
      let s = !1,
        r = [this.finishCoordinate_]
      const o = this.mode_
      if (o === 'Point') i = !0
      else if (o === 'Circle') i = this.sketchCoords_.length === 2
      else if (o === 'LineString') s = !e && this.sketchCoords_.length > this.minPoints_
      else if (o === 'Polygon') {
        const a = this.sketchCoords_
        ;((s = a[0].length > this.minPoints_),
          (r = [a[0][0], a[0][a[0].length - 2]]),
          e ? (r = [a[0][0]]) : (r = [a[0][0], a[0][a[0].length - 2]]))
      }
      if (s) {
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
      : ((this.sketchPoint_ = new pt(new Wt(t))), this.updateSketchFeatures_())
  }
  createOrUpdateCustomSketchLine_(t) {
    this.sketchLine_ || (this.sketchLine_ = new pt())
    const e = t.getLinearRing(0)
    let i = this.sketchLine_.getGeometry()
    i
      ? (i.setFlatCoordinates(e.getLayout(), e.getFlatCoordinates()), i.changed())
      : ((i = new $t(e.getFlatCoordinates(), e.getLayout())), this.sketchLine_.setGeometry(i))
  }
  startDrawing_(t) {
    const e = this.getMap().getView().getProjection(),
      i = Qs(this.geometryLayout_)
    for (; t.length < i; ) t.push(0)
    ;((this.finishCoordinate_ = t),
      this.mode_ === 'Point'
        ? (this.sketchCoords_ = t.slice())
        : this.mode_ === 'Polygon'
          ? ((this.sketchCoords_ = [[t.slice(), t.slice()]]),
            (this.sketchLineCoords_ = this.sketchCoords_[0]))
          : (this.sketchCoords_ = [t.slice(), t.slice()]),
      this.sketchLineCoords_ && (this.sketchLine_ = new pt(new $t(this.sketchLineCoords_))))
    const s = this.geometryFunction_(this.sketchCoords_, void 0, e)
    ;((this.sketchFeature_ = new pt()),
      this.geometryName_ && this.sketchFeature_.setGeometryName(this.geometryName_),
      this.sketchFeature_.setGeometry(s),
      this.updateSketchFeatures_(),
      this.dispatchEvent(new Is(vs.DRAWSTART, this.sketchFeature_)))
  }
  modifyDrawing_(t) {
    const e = this.getMap(),
      i = this.sketchFeature_.getGeometry(),
      s = e.getView().getProjection(),
      r = Qs(this.geometryLayout_)
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
      this.geometryFunction_(this.sketchCoords_, i, s),
      this.sketchPoint_ && this.sketchPoint_.getGeometry().setCoordinates(t),
      i.getType() === 'Polygon' && this.mode_ !== 'Polygon'
        ? this.createOrUpdateCustomSketchLine_(i)
        : this.sketchLineCoords_ && this.sketchLine_.getGeometry().setCoordinates(this.sketchLineCoords_),
      this.updateSketchFeatures_())
  }
  addToDrawing_(t) {
    const e = this.sketchFeature_.getGeometry(),
      i = this.getMap().getView().getProjection()
    let s, r
    const o = this.mode_
    ;(o === 'LineString' || o === 'Circle'
      ? ((this.finishCoordinate_ = t.slice()),
        (r = this.sketchCoords_),
        r.length >= this.maxPoints_ && (this.freehand_ ? r.pop() : (s = !0)),
        r.push(t.slice()),
        this.geometryFunction_(r, e, i))
      : o === 'Polygon' &&
        ((r = this.sketchCoords_[0]),
        r.length >= this.maxPoints_ && (this.freehand_ ? r.pop() : (s = !0)),
        r.push(t.slice()),
        s && (this.finishCoordinate_ = r[0]),
        this.geometryFunction_(this.sketchCoords_, e, i)),
      this.createOrUpdateSketchPoint_(t.slice()),
      this.updateSketchFeatures_(),
      s && this.finishDrawing())
  }
  removeLastPoints_(t) {
    if (!this.sketchFeature_) return
    const e = this.sketchFeature_.getGeometry(),
      i = this.getMap().getView().getProjection(),
      s = this.mode_
    for (let r = 0; r < t; ++r) {
      let o
      if (s === 'LineString' || s === 'Circle') {
        if (((o = this.sketchCoords_), o.splice(-2, 1), o.length >= 2)) {
          this.finishCoordinate_ = o[o.length - 2].slice()
          const a = this.finishCoordinate_.slice()
          ;((o[o.length - 1] = a), this.createOrUpdateSketchPoint_(a))
        }
        ;(this.geometryFunction_(o, e, i),
          e.getType() === 'Polygon' && this.sketchLine_ && this.createOrUpdateCustomSketchLine_(e))
      } else if (s === 'Polygon') {
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
      s = this.getMap().getView().getProjection()
    ;(this.mode_ === 'LineString'
      ? (e.pop(), this.geometryFunction_(e, i, s))
      : this.mode_ === 'Polygon' && (e[0].pop(), this.geometryFunction_(e, i, s), (e = i.getCoordinates())),
      this.type_ === 'MultiPoint'
        ? t.setGeometry(new ln([e]))
        : this.type_ === 'MultiLineString'
          ? t.setGeometry(new ci([e]))
          : this.type_ === 'MultiPolygon' && t.setGeometry(new ui([e])),
      this.dispatchEvent(new Is(vs.DRAWEND, t)),
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
    t && this.dispatchEvent(new Is(vs.DRAWABORT, t))
  }
  appendCoordinates(t) {
    const e = this.mode_,
      i = !this.sketchFeature_
    i && this.startDrawing_(t[0])
    let s
    if (e === 'LineString' || e === 'Circle') s = this.sketchCoords_
    else if (e === 'Polygon') s = this.sketchCoords_ && this.sketchCoords_.length ? this.sketchCoords_[0] : []
    else return
    ;(i && s.shift(), s.pop())
    for (let o = 0; o < t.length; o++) this.addToDrawing_(t[o])
    const r = t[t.length - 1]
    ;(this.addToDrawing_(r), this.modifyDrawing_(r))
  }
  extend(t) {
    const i = t.getGeometry()
    ;((this.sketchFeature_ = t), (this.sketchCoords_ = i.getCoordinates()))
    const s = this.sketchCoords_[this.sketchCoords_.length - 1]
    ;((this.finishCoordinate_ = s.slice()),
      this.sketchCoords_.push(s.slice()),
      (this.sketchPoint_ = new pt(new Wt(s))),
      this.updateSketchFeatures_(),
      this.dispatchEvent(new Is(vs.DRAWSTART, this.sketchFeature_)))
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
function cy() {
  const n = nu()
  return function (t, e) {
    return n[t.getGeometry().getType()]
  }
}
function uy(n) {
  switch (n) {
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
      throw new Error('Invalid type: ' + n)
  }
}
const oh = 0,
  Tn = 1,
  ah = [0, 0, 0, 0],
  Hi = [],
  Hr = { MODIFYSTART: 'modifystart', MODIFYEND: 'modifyend' }
class qr extends xt {
  constructor(t, e, i) {
    ;(super(t), (this.features = e), (this.mapBrowserEvent = i))
  }
}
class dy extends vr {
  constructor(t) {
    ;(super(t),
      this.on,
      this.once,
      this.un,
      (this.boundHandleFeatureChange_ = this.handleFeatureChange_.bind(this)),
      (this.condition_ = t.condition ? t.condition : t0),
      (this.defaultDeleteCondition_ = function (i) {
        return $m(i) && qm(i)
      }),
      (this.deleteCondition_ = t.deleteCondition ? t.deleteCondition : this.defaultDeleteCondition_),
      (this.insertVertexCondition_ = t.insertVertexCondition ? t.insertVertexCondition : or),
      (this.vertexFeature_ = null),
      (this.vertexSegments_ = null),
      (this.lastPixel_ = [0, 0]),
      (this.ignoreNextSingleClick_ = !1),
      (this.featuresBeingModified_ = null),
      (this.rBush_ = new lr()),
      (this.pixelTolerance_ = t.pixelTolerance !== void 0 ? t.pixelTolerance : 10),
      (this.snappedToVertex_ = !1),
      (this.changingFeature_ = !1),
      (this.dragSegments_ = []),
      (this.overlay_ = new Ma({
        source: new Pa({ useSpatialIndex: !1, wrapX: !!t.wrapX }),
        style: t.style ? t.style : gy(),
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
          (e = new oi(this.source_.getFeatures())),
          this.source_.addEventListener(_t.ADDFEATURE, this.handleSourceAdd_.bind(this)),
          this.source_.addEventListener(_t.REMOVEFEATURE, this.handleSourceRemove_.bind(this))),
      !e)
    )
      throw new Error('The modify interaction requires features, a source or a layer')
    ;(t.hitDetection && (this.hitDetection_ = t.hitDetection),
      (this.features_ = e),
      this.features_.forEach(this.addFeature_.bind(this)),
      this.features_.addEventListener(ne.ADD, this.handleFeatureAdd_.bind(this)),
      this.features_.addEventListener(ne.REMOVE, this.handleFeatureRemove_.bind(this)),
      (this.lastPointerEvent_ = null),
      (this.delta_ = [0, 0]),
      (this.snapToPointer_ = t.snapToPointer === void 0 ? !this.hitDetection_ : t.snapToPointer))
  }
  addFeature_(t) {
    const e = t.getGeometry()
    if (e) {
      const s = this.SEGMENT_WRITERS_[e.getType()]
      s && s(t, e)
    }
    const i = this.getMap()
    ;(i && i.isRendered() && this.getActive() && this.handlePointerAtPixel_(this.lastPixel_, i),
      t.addEventListener(dt.CHANGE, this.boundHandleFeatureChange_))
  }
  willModifyFeatures_(t, e) {
    if (!this.featuresBeingModified_) {
      this.featuresBeingModified_ = new oi()
      const i = this.featuresBeingModified_.getArray()
      for (let s = 0, r = e.length; s < r; ++s) {
        const o = e[s]
        for (let a = 0, l = o.length; a < l; ++a) {
          const h = o[a].feature
          h && !i.includes(h) && this.featuresBeingModified_.push(h)
        }
      }
      this.featuresBeingModified_.getLength() === 0
        ? (this.featuresBeingModified_ = null)
        : this.dispatchEvent(new qr(Hr.MODIFYSTART, this.featuresBeingModified_, t))
    }
  }
  removeFeature_(t) {
    ;(this.removeFeatureSegmentData_(t),
      this.vertexFeature_ &&
        this.features_.getLength() === 0 &&
        (this.overlay_.getSource().removeFeature(this.vertexFeature_), (this.vertexFeature_ = null)),
      t.removeEventListener(dt.CHANGE, this.boundHandleFeatureChange_))
  }
  removeFeatureSegmentData_(t) {
    const e = this.rBush_,
      i = []
    e.forEach(function (s) {
      t === s.feature && i.push(s)
    })
    for (let s = i.length - 1; s >= 0; --s) {
      const r = i[s]
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
      s = { feature: t, geometry: e, segment: [i, i] }
    this.rBush_.insert(e.getExtent(), s)
  }
  writeMultiPointGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let s = 0, r = i.length; s < r; ++s) {
      const o = i[s],
        a = { feature: t, geometry: e, depth: [s], index: s, segment: [o, o] }
      this.rBush_.insert(e.getExtent(), a)
    }
  }
  writeLineStringGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let s = 0, r = i.length - 1; s < r; ++s) {
      const o = i.slice(s, s + 2),
        a = { feature: t, geometry: e, index: s, segment: o }
      this.rBush_.insert(Lt(o), a)
    }
  }
  writeMultiLineStringGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let s = 0, r = i.length; s < r; ++s) {
      const o = i[s]
      for (let a = 0, l = o.length - 1; a < l; ++a) {
        const h = o.slice(a, a + 2),
          c = { feature: t, geometry: e, depth: [s], index: a, segment: h }
        this.rBush_.insert(Lt(h), c)
      }
    }
  }
  writePolygonGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let s = 0, r = i.length; s < r; ++s) {
      const o = i[s]
      for (let a = 0, l = o.length - 1; a < l; ++a) {
        const h = o.slice(a, a + 2),
          c = { feature: t, geometry: e, depth: [s], index: a, segment: h }
        this.rBush_.insert(Lt(h), c)
      }
    }
  }
  writeMultiPolygonGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let s = 0, r = i.length; s < r; ++s) {
      const o = i[s]
      for (let a = 0, l = o.length; a < l; ++a) {
        const h = o[a]
        for (let c = 0, u = h.length - 1; c < u; ++c) {
          const d = h.slice(c, c + 2),
            f = { feature: t, geometry: e, depth: [a, s], index: c, segment: d }
          this.rBush_.insert(Lt(d), f)
        }
      }
    }
  }
  writeCircleGeometry_(t, e) {
    const i = e.getCenter(),
      s = { feature: t, geometry: e, index: oh, segment: [i, i] },
      r = { feature: t, geometry: e, index: Tn, segment: [i, i] },
      o = [s, r]
    ;((s.featureSegments = o), (r.featureSegments = o), this.rBush_.insert(Gs(i), s))
    let a = e
    this.rBush_.insert(a.getExtent(), r)
  }
  writeGeometryCollectionGeometry_(t, e) {
    const i = e.getGeometriesArray()
    for (let s = 0; s < i.length; ++s) {
      const r = i[s],
        o = this.SEGMENT_WRITERS_[r.getType()]
      o(t, r)
    }
  }
  createOrUpdateVertexFeature_(t, e, i) {
    let s = this.vertexFeature_
    return (
      s
        ? s.getGeometry().setCoordinates(t)
        : ((s = new pt(new Wt(t))), (this.vertexFeature_ = s), this.overlay_.getSource().addFeature(s)),
      s.set('features', e),
      s.set('geometries', i),
      s
    )
  }
  handleEvent(t) {
    if (!t.originalEvent) return !0
    this.lastPointerEvent_ = t
    let e
    return (
      !t.map.getView().getInteracting() &&
        t.type == ct.POINTERMOVE &&
        !this.handlingDownUpSequence &&
        this.handlePointerMove_(t),
      this.vertexFeature_ &&
        this.deleteCondition_(t) &&
        (t.type != ct.SINGLECLICK || !this.ignoreNextSingleClick_ ? (e = this.removePoint()) : (e = !0)),
      t.type == ct.SINGLECLICK && (this.ignoreNextSingleClick_ = !1),
      super.handleEvent(t) && !e
    )
  }
  handleDragEvent(t) {
    ;((this.ignoreNextSingleClick_ = !1), this.willModifyFeatures_(t, this.dragSegments_))
    const e = [t.coordinate[0] + this.delta_[0], t.coordinate[1] + this.delta_[1]],
      i = [],
      s = []
    for (let r = 0, o = this.dragSegments_.length; r < o; ++r) {
      const a = this.dragSegments_[r],
        l = a[0],
        h = l.feature
      i.includes(h) || i.push(h)
      const c = l.geometry
      s.includes(c) || s.push(c)
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
          if (((f[0] = e), (f[1] = e), l.index === oh))
            ((this.changingFeature_ = !0), c.setCenter(e), (this.changingFeature_ = !1))
          else {
            ;((this.changingFeature_ = !0), t.map.getView().getProjection())
            let _ = qs(J(c.getCenter()), J(e))
            ;(c.setRadius(_), (this.changingFeature_ = !1))
          }
          break
      }
      d && this.setGeometryCoordinates_(c, d)
    }
    this.createOrUpdateVertexFeature_(e, i, s)
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
      const s = [],
        r = i.getGeometry().getCoordinates(),
        o = Lt([r]),
        a = this.rBush_.getInExtent(o),
        l = {}
      a.sort(fy)
      for (let h = 0, c = a.length; h < c; ++h) {
        const u = a[h],
          d = u.segment
        let f = K(u.geometry)
        const g = u.depth
        if (
          (g && (f += '-' + g.join('-')),
          l[f] || (l[f] = new Array(2)),
          u.geometry.getType() === 'Circle' && u.index === Tn)
        ) {
          const _ = hh(e, u)
          Zt(_, r) && !l[f][0] && (this.dragSegments_.push([u, 0]), (l[f][0] = u))
          continue
        }
        if (Zt(d[0], r) && !l[f][0]) {
          ;(this.dragSegments_.push([u, 0]), (l[f][0] = u))
          continue
        }
        if (Zt(d[1], r) && !l[f][1]) {
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
        K(d) in this.vertexSegments_ && !l[f][0] && !l[f][1] && this.insertVertexCondition_(t) && s.push(u)
      }
      s.length && this.willModifyFeatures_(t, [s])
      for (let h = s.length - 1; h >= 0; --h) this.insertVertex_(s[h], r)
    }
    return !!this.vertexFeature_
  }
  handleUpEvent(t) {
    for (let e = this.dragSegments_.length - 1; e >= 0; --e) {
      const i = this.dragSegments_[e][0],
        s = i.geometry
      if (s.getType() === 'Circle') {
        const r = s.getCenter(),
          o = i.featureSegments[0],
          a = i.featureSegments[1]
        ;((o.segment[0] = r),
          (o.segment[1] = r),
          (a.segment[0] = r),
          (a.segment[1] = r),
          this.rBush_.update(Gs(r), o))
        let l = s
        this.rBush_.update(l.getExtent(), a)
      } else this.rBush_.update(Lt(i.segment), i)
    }
    return (
      this.featuresBeingModified_ &&
        (this.dispatchEvent(new qr(Hr.MODIFYEND, this.featuresBeingModified_, t)),
        (this.featuresBeingModified_ = null)),
      !1
    )
  }
  handlePointerMove_(t) {
    ;((this.lastPixel_ = t.pixel), this.handlePointerAtPixel_(t.pixel, t.map, t.coordinate))
  }
  handlePointerAtPixel_(t, e, i) {
    const s = i || e.getCoordinateFromPixel(t)
    e.getView().getProjection()
    const r = function (l, h) {
      return lh(s, l) - lh(s, h)
    }
    let o, a
    if (this.hitDetection_) {
      const l = typeof this.hitDetection_ == 'object' ? h => h === this.hitDetection_ : void 0
      e.forEachFeatureAtPixel(
        t,
        (h, c, u) => {
          u && (u = new Wt(nn(u.getCoordinates())))
          const d = u || h.getGeometry()
          if (d.getType() === 'Point' && h instanceof pt && this.features_.getArray().includes(h)) {
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
      const l = zi(Gs(s, ah)),
        h = e.getView().getResolution() * this.pixelTolerance_,
        c = Er(Kn(l, h, ah))
      o = this.rBush_.getInExtent(c)
    }
    if (o && o.length > 0) {
      const l = o.sort(r)[0],
        h = l.segment
      let c = hh(s, l)
      const u = e.getPixelFromCoordinate(c)
      let d = qs(t, u)
      if (a || d <= this.pixelTolerance_) {
        const f = {}
        if (
          ((f[K(h)] = !0),
          this.snapToPointer_ || ((this.delta_[0] = c[0] - s[0]), (this.delta_[1] = c[1] - s[1])),
          l.geometry.getType() === 'Circle' && l.index === Tn)
        )
          ((this.snappedToVertex_ = !0), this.createOrUpdateVertexFeature_(c, [l.feature], [l.geometry]))
        else {
          const g = e.getPixelFromCoordinate(h[0]),
            _ = e.getPixelFromCoordinate(h[1]),
            m = pe(u, g),
            y = pe(u, _)
          ;((d = Math.sqrt(Math.min(m, y))),
            (this.snappedToVertex_ = d <= this.pixelTolerance_),
            this.snappedToVertex_ && (c = m > y ? h[1] : h[0]),
            this.createOrUpdateVertexFeature_(c, [l.feature], [l.geometry]))
          const p = {}
          p[K(l.geometry)] = !0
          for (let x = 1, E = o.length; x < E; ++x) {
            const C = o[x].segment
            if ((Zt(h[0], C[0]) && Zt(h[1], C[1])) || (Zt(h[0], C[1]) && Zt(h[1], C[0]))) {
              const T = K(o[x].geometry)
              T in p || ((p[T] = !0), (f[K(C)] = !0))
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
      s = t.feature,
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
    const c = { segment: [i[0], e], feature: s, geometry: r, depth: o, index: a }
    ;(h.insert(Lt(c.segment), c), this.dragSegments_.push([c, 1]))
    const u = { segment: [e, i[1]], feature: s, geometry: r, depth: o, index: a + 1 }
    ;(h.insert(Lt(u.segment), u), this.dragSegments_.push([u, 0]), (this.ignoreNextSingleClick_ = !0))
  }
  removePoint() {
    if (this.lastPointerEvent_ && this.lastPointerEvent_.type != ct.POINTERDRAG) {
      const t = this.lastPointerEvent_
      this.willModifyFeatures_(t, this.dragSegments_)
      const e = this.removeVertex_()
      return (
        this.featuresBeingModified_ &&
          this.dispatchEvent(new qr(Hr.MODIFYEND, this.featuresBeingModified_, t)),
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
      s,
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
        (g = K(f.feature)),
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
        (s = r),
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
          s = s[f.depth[1]]
        case 'Polygon':
          ;((s = s[f.depth[0]]),
            s.length > 4 &&
              (h == s.length - 1 && (h = 0),
              s.splice(h, 1),
              (i = !0),
              h === 0 && (s.pop(), s.push(s[0]), (u = s.length - 1))))
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
          this.rBush_.insert(Lt(m.segment), m)
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
  updateSegmentIndices_(t, e, i, s) {
    this.rBush_.forEachInExtent(t.getExtent(), function (r) {
      r.geometry === t &&
        (i === void 0 || r.depth === void 0 || gi(r.depth, i)) &&
        r.index > e &&
        (r.index += s)
    })
  }
}
function fy(n, t) {
  return n.index - t.index
}
function lh(n, t, e) {
  const i = t.geometry
  if (i.getType() === 'Circle') {
    let r = i
    if (t.index === Tn) {
      const o = pe(r.getCenter(), J(n)),
        a = Math.sqrt(o) - r.getRadius()
      return a * a
    }
  }
  const s = J(n)
  return ((Hi[0] = J(t.segment[0])), (Hi[1] = J(t.segment[1])), c_(s, Hi))
}
function hh(n, t, e) {
  const i = t.geometry
  if (i.getType() === 'Circle' && t.index === Tn) return nn(i.getClosestPoint(J(n)))
  const s = J(n)
  return ((Hi[0] = J(t.segment[0])), (Hi[1] = J(t.segment[1])), nn(da(s, Hi)))
}
function gy() {
  const n = nu()
  return function (t, e) {
    return n.Point
  }
}
class yu extends xt {
  constructor(t, e, i, s) {
    ;(super(t), (this.selected = e), (this.deselected = i), (this.mapBrowserEvent = s))
  }
}
const _y = { SNAP: 'snap' }
class my extends xt {
  constructor(t, e) {
    ;(super(t), (this.vertex = e.vertex), (this.vertexPixel = e.vertexPixel), (this.feature = e.feature))
  }
}
function ch(n) {
  return n.feature ? n.feature : n.element ? n.element : null
}
const Jr = []
class yy extends vr {
  constructor(t) {
    t = t || {}
    const e = t
    ;(e.handleDownEvent || (e.handleDownEvent = Qi),
      e.stopDown || (e.stopDown = la),
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
      (this.rBush_ = new lr()),
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
    const i = K(t),
      s = t.getGeometry()
    if (s) {
      const r = this.GEOMETRY_SEGMENTERS_[s.getType()]
      if (r) {
        this.indexedFeaturesExtents_[i] = s.getExtent(ae())
        const o = []
        if ((r(o, s), o.length === 1)) this.rBush_.insert(Lt(o[0]), { feature: t, segment: o[0] })
        else if (o.length > 1) {
          const a = o.map(h => Lt(h)),
            l = o.map(h => ({ feature: t, segment: h }))
          this.rBush_.load(a, l)
        }
      }
    }
    e && (this.featureChangeListenerKeys_[i] = yt(t, dt.CHANGE, this.handleFeatureChange_, this))
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
          new my(_y.SNAP, { vertex: t.coordinate, vertexPixel: t.pixel, feature: e.feature }),
        )),
      super.handleEvent(t)
    )
  }
  handleFeatureAdd_(t) {
    const e = ch(t)
    e && this.addFeature(e)
  }
  handleFeatureRemove_(t) {
    const e = ch(t)
    e && this.removeFeature(e)
  }
  handleFeatureChange_(t) {
    const e = t.target
    if (this.handlingDownUpSequence) {
      const i = K(e)
      i in this.pendingFeatures_ || (this.pendingFeatures_[i] = e)
    } else this.updateFeature_(e)
  }
  handleUpEvent(t) {
    const e = Object.values(this.pendingFeatures_)
    return (e.length && (e.forEach(this.updateFeature_.bind(this)), (this.pendingFeatures_ = {})), !1)
  }
  removeFeature(t, e) {
    const i = e !== void 0 ? e : !0,
      s = K(t),
      r = this.indexedFeaturesExtents_[s]
    if (r) {
      const o = this.rBush_,
        a = []
      o.forEachInExtent(r, function (l) {
        t === l.feature && a.push(l)
      })
      for (let l = a.length - 1; l >= 0; --l) o.remove(a[l])
    }
    i && (Ft(this.featureChangeListenerKeys_[s]), delete this.featureChangeListenerKeys_[s])
  }
  setMap(t) {
    const e = this.getMap(),
      i = this.featuresListenerKeys_,
      s = this.getFeatures_()
    ;(e &&
      (i.forEach(Ft),
      (i.length = 0),
      this.rBush_.clear(),
      Object.values(this.featureChangeListenerKeys_).forEach(Ft),
      (this.featureChangeListenerKeys_ = {})),
      super.setMap(t),
      t &&
        (this.features_
          ? i.push(
              yt(this.features_, ne.ADD, this.handleFeatureAdd_, this),
              yt(this.features_, ne.REMOVE, this.handleFeatureRemove_, this),
            )
          : this.source_ &&
            i.push(
              yt(this.source_, _t.ADDFEATURE, this.handleFeatureAdd_, this),
              yt(this.source_, _t.REMOVEFEATURE, this.handleFeatureRemove_, this),
            ),
        s.forEach(r => this.addFeature(r))))
  }
  snapTo(t, e, i) {
    i.getView().getProjection()
    const s = J(e),
      r = Er(Kn(Lt([s]), i.getView().getResolution() * this.pixelTolerance_)),
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
          if (pe(t, f) <= u)
            return { vertex: l, vertexPixel: [Math.round(f[0]), Math.round(f[1])], feature: c }
        }
        return null
      }
    if (this.vertex_) {
      for (let g = 0; g < a; ++g) {
        const _ = o[g]
        _.feature.getGeometry().getType() !== 'Circle' &&
          _.segment.forEach(m => {
            const y = J(m),
              p = pe(s, y)
            p < h && ((l = m), (h = p), (c = _.feature))
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
          let y = m.feature.getGeometry()
          _ = l_(s, y)
        } else {
          const [y, p] = m.segment
          p && ((Jr[0] = J(y)), (Jr[1] = J(p)), (_ = da(s, Jr)))
        }
        if (_) {
          const y = pe(s, _)
          y < h && ((l = nn(_)), (h = y))
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
    const r = q_(e).getCoordinates()[0]
    for (let o = 0, a = r.length - 1; o < a; ++o) t.push(r.slice(o, o + 2))
  }
  segmentGeometryCollectionGeometry_(t, e) {
    const i = e.getGeometriesArray()
    for (let s = 0; s < i.length; ++s) {
      const r = this.GEOMETRY_SEGMENTERS_[i[s].getType()]
      r && r(t, i[s])
    }
  }
  segmentLineStringGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let s = 0, r = i.length - 1; s < r; ++s) t.push(i.slice(s, s + 2))
  }
  segmentMultiLineStringGeometry_(t, e) {
    const i = e.getCoordinates()
    for (let s = 0, r = i.length; s < r; ++s) {
      const o = i[s]
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
    for (let s = 0, r = i.length; s < r; ++s) {
      const o = i[s]
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
    for (let s = 0, r = i.length; s < r; ++s) {
      const o = i[s]
      for (let a = 0, l = o.length - 1; a < l; ++a) t.push(o.slice(a, a + 2))
    }
  }
}
const Qr = { TRANSLATESTART: 'translatestart', TRANSLATING: 'translating', TRANSLATEEND: 'translateend' }
class Xs extends xt {
  constructor(t, e, i, s, r) {
    ;(super(t),
      (this.features = e),
      (this.coordinate = i),
      (this.startCoordinate = s),
      (this.mapBrowserEvent = r))
  }
}
class py extends vr {
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
        e = function (s) {
          return i.includes(s)
        }
      }
    else e = Qi
    ;((this.layerFilter_ = e),
      (this.filter_ = t.filter && !this.features_ ? t.filter : Qi),
      (this.hitTolerance_ = t.hitTolerance ? t.hitTolerance : 0),
      (this.condition_ = t.condition ? t.condition : or),
      (this.lastFeature_ = null),
      this.addChangeListener(rr.ACTIVE, this.handleActiveChanged_))
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
      const e = this.features_ || new oi([this.lastFeature_])
      return (this.dispatchEvent(new Xs(Qr.TRANSLATESTART, e, t.coordinate, this.startCoordinate_, t)), !0)
    }
    return !1
  }
  handleUpEvent(t) {
    if (this.lastCoordinate_) {
      ;((this.lastCoordinate_ = null), this.handleMoveEvent(t))
      const e = this.features_ || new oi([this.lastFeature_])
      return (
        this.dispatchEvent(new Xs(Qr.TRANSLATEEND, e, t.coordinate, this.startCoordinate_, t)),
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
        s = J(this.lastCoordinate_),
        r = i[0] - s[0],
        o = i[1] - s[1],
        a = this.features_ || new oi([this.lastFeature_])
      ;(a.forEach(function (l) {
        const h = l.getGeometry()
        ;(h.translate(r, o), l.setGeometry(h))
      }),
        (this.lastCoordinate_ = e),
        this.dispatchEvent(new Xs(Qr.TRANSLATING, a, e, this.startCoordinate_, t)))
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
      (i, s) => {
        if (
          !(!(i instanceof pt) || !this.filter_(i, s)) &&
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
function uh(n, t, e) {
  var i
  return (
    t === void 0 && (t = 200),
    e === void 0 && (e = !1),
    function () {
      var s = [].slice.call(arguments)
      ;(e && !i && n.apply(void 0, s),
        i && clearTimeout(i),
        (i = setTimeout(function () {
          n.apply(void 0, s)
        }, t)))
    }
  )
}
/**
 * @vue/shared v3.5.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function xy(n) {
  const t = Object.create(null)
  for (const e of n.split(',')) t[e] = 1
  return e => e in t
}
const Ey = Object.assign,
  Cy = Object.prototype.hasOwnProperty,
  Fo = (n, t) => Cy.call(n, t),
  qi = Array.isArray,
  zs = n => pu(n) === '[object Map]',
  Ry = n => typeof n == 'string',
  Qn = n => typeof n == 'symbol',
  Ir = n => n !== null && typeof n == 'object',
  Ty = Object.prototype.toString,
  pu = n => Ty.call(n),
  wy = n => pu(n).slice(8, -1),
  La = n => Ry(n) && n !== 'NaN' && n[0] !== '-' && '' + parseInt(n, 10) === n,
  wn = (n, t) => !Object.is(n, t)
/**
 * @vue/reactivity v3.5.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Sy,
  xu = 0,
  to
function Aa() {
  xu++
}
function Fa() {
  if (--xu > 0) return
  let n
  for (; to; ) {
    let t = to
    for (to = void 0; t; ) {
      const e = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (i) {
          n || (n = i)
        }
      t = e
    }
  }
  if (n) throw n
}
let hr = !0
const Eu = []
function vy() {
  ;(Eu.push(hr), (hr = !1))
}
function Iy() {
  const n = Eu.pop()
  hr = n === void 0 ? !0 : n
}
class Cu {
  constructor(t) {
    ;((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0))
  }
  track(t) {}
  trigger(t) {
    ;(this.version++, this.notify(t))
  }
  notify(t) {
    Aa()
    try {
      for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify()
    } finally {
      Fa()
    }
  }
}
const bo = new WeakMap(),
  li = Symbol(''),
  Oo = Symbol(''),
  zn = Symbol('')
function St(n, t, e) {
  if (hr && Sy) {
    let i = bo.get(n)
    i || bo.set(n, (i = new Map()))
    let s = i.get(e)
    ;(s || (i.set(e, (s = new Cu())), (s.map = i), (s.key = e)), s.track())
  }
}
function ke(n, t, e, i, s, r) {
  const o = bo.get(n)
  if (!o) return
  const a = l => {
    l && l.trigger()
  }
  if ((Aa(), t === 'clear')) o.forEach(a)
  else {
    const l = qi(n),
      h = l && La(e)
    if (l && e === 'length') {
      const c = Number(i)
      o.forEach((u, d) => {
        ;(d === 'length' || d === zn || (!Qn(d) && d >= c)) && a(u)
      })
    } else
      switch (((e !== void 0 || o.has(void 0)) && a(o.get(e)), h && a(o.get(zn)), t)) {
        case 'add':
          l ? h && a(o.get('length')) : (a(o.get(li)), zs(n) && a(o.get(Oo)))
          break
        case 'delete':
          l || (a(o.get(li)), zs(n) && a(o.get(Oo)))
          break
        case 'set':
          zs(n) && a(o.get(li))
          break
      }
  }
  Fa()
}
function Pi(n) {
  const t = q(n)
  return t === n ? t : (St(t, 'iterate', zn), Ue(n) ? t : t.map(mt))
}
function ba(n) {
  return (St((n = q(n)), 'iterate', zn), n)
}
const My = {
  __proto__: null,
  [Symbol.iterator]() {
    return eo(this, Symbol.iterator, mt)
  },
  concat(...n) {
    return Pi(this).concat(...n.map(t => (qi(t) ? Pi(t) : t)))
  },
  entries() {
    return eo(this, 'entries', n => ((n[1] = mt(n[1])), n))
  },
  every(n, t) {
    return ge(this, 'every', n, t, void 0, arguments)
  },
  filter(n, t) {
    return ge(this, 'filter', n, t, e => e.map(mt), arguments)
  },
  find(n, t) {
    return ge(this, 'find', n, t, mt, arguments)
  },
  findIndex(n, t) {
    return ge(this, 'findIndex', n, t, void 0, arguments)
  },
  findLast(n, t) {
    return ge(this, 'findLast', n, t, mt, arguments)
  },
  findLastIndex(n, t) {
    return ge(this, 'findLastIndex', n, t, void 0, arguments)
  },
  forEach(n, t) {
    return ge(this, 'forEach', n, t, void 0, arguments)
  },
  includes(...n) {
    return io(this, 'includes', n)
  },
  indexOf(...n) {
    return io(this, 'indexOf', n)
  },
  join(n) {
    return Pi(this).join(n)
  },
  lastIndexOf(...n) {
    return io(this, 'lastIndexOf', n)
  },
  map(n, t) {
    return ge(this, 'map', n, t, void 0, arguments)
  },
  pop() {
    return pn(this, 'pop')
  },
  push(...n) {
    return pn(this, 'push', n)
  },
  reduce(n, ...t) {
    return dh(this, 'reduce', n, t)
  },
  reduceRight(n, ...t) {
    return dh(this, 'reduceRight', n, t)
  },
  shift() {
    return pn(this, 'shift')
  },
  some(n, t) {
    return ge(this, 'some', n, t, void 0, arguments)
  },
  splice(...n) {
    return pn(this, 'splice', n)
  },
  toReversed() {
    return Pi(this).toReversed()
  },
  toSorted(n) {
    return Pi(this).toSorted(n)
  },
  toSpliced(...n) {
    return Pi(this).toSpliced(...n)
  },
  unshift(...n) {
    return pn(this, 'unshift', n)
  },
  values() {
    return eo(this, 'values', mt)
  },
}
function eo(n, t, e) {
  const i = ba(n),
    s = i[t]()
  return (
    i !== n &&
      !Ue(n) &&
      ((s._next = s.next),
      (s.next = () => {
        const r = s._next()
        return (r.value && (r.value = e(r.value)), r)
      })),
    s
  )
}
const Py = Array.prototype
function ge(n, t, e, i, s, r) {
  const o = ba(n),
    a = o !== n && !Ue(n),
    l = o[t]
  if (l !== Py[t]) {
    const u = l.apply(n, r)
    return a ? mt(u) : u
  }
  let h = e
  o !== n &&
    (a
      ? (h = function (u, d) {
          return e.call(this, mt(u), d, n)
        })
      : e.length > 2 &&
        (h = function (u, d) {
          return e.call(this, u, d, n)
        }))
  const c = l.call(o, h, i)
  return a && s ? s(c) : c
}
function dh(n, t, e, i) {
  const s = ba(n)
  let r = e
  return (
    s !== n &&
      (Ue(n)
        ? e.length > 3 &&
          (r = function (o, a, l) {
            return e.call(this, o, a, l, n)
          })
        : (r = function (o, a, l) {
            return e.call(this, o, mt(a), l, n)
          })),
    s[t](r, ...i)
  )
}
function io(n, t, e) {
  const i = q(n)
  St(i, 'iterate', zn)
  const s = i[t](...e)
  return (s === -1 || s === !1) && By(e[0]) ? ((e[0] = q(e[0])), i[t](...e)) : s
}
function pn(n, t, e = []) {
  ;(vy(), Aa())
  const i = q(n)[t].apply(n, e)
  return (Fa(), Iy(), i)
}
const Ly = xy('__proto__,__v_isRef,__isVue'),
  Ru = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(n => n !== 'arguments' && n !== 'caller')
      .map(n => Symbol[n])
      .filter(Qn),
  )
function Ay(n) {
  Qn(n) || (n = String(n))
  const t = q(this)
  return (St(t, 'has', n), t.hasOwnProperty(n))
}
class Tu {
  constructor(t = !1, e = !1) {
    ;((this._isReadonly = t), (this._isShallow = e))
  }
  get(t, e, i) {
    if (e === '__v_skip') return t.__v_skip
    const s = this._isReadonly,
      r = this._isShallow
    if (e === '__v_isReactive') return !s
    if (e === '__v_isReadonly') return s
    if (e === '__v_isShallow') return r
    if (e === '__v_raw')
      return i === (s ? (r ? jy : vu) : r ? zy : Su).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(i)
        ? t
        : void 0
    const o = qi(t)
    if (!s) {
      let l
      if (o && (l = My[e])) return l
      if (e === 'hasOwnProperty') return Ay
    }
    const a = Reflect.get(t, e, Ji(t) ? t : i)
    return (Qn(e) ? Ru.has(e) : Ly(e)) || (s || St(t, 'get', e), r)
      ? a
      : Ji(a)
        ? o && La(e)
          ? a
          : a.value
        : Ir(a)
          ? s
            ? Mu(a)
            : Iu(a)
          : a
  }
}
class Fy extends Tu {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, e, i, s) {
    let r = t[e]
    if (!this._isShallow) {
      const l = rn(r)
      if ((!Ue(i) && !rn(i) && ((r = q(r)), (i = q(i))), !qi(t) && Ji(r) && !Ji(i)))
        return (l || (r.value = i), !0)
    }
    const o = qi(t) && La(e) ? Number(e) < t.length : Fo(t, e),
      a = Reflect.set(t, e, i, Ji(t) ? t : s)
    return (t === q(s) && (o ? wn(i, r) && ke(t, 'set', e, i) : ke(t, 'add', e, i)), a)
  }
  deleteProperty(t, e) {
    const i = Fo(t, e)
    t[e]
    const s = Reflect.deleteProperty(t, e)
    return (s && i && ke(t, 'delete', e, void 0), s)
  }
  has(t, e) {
    const i = Reflect.has(t, e)
    return ((!Qn(e) || !Ru.has(e)) && St(t, 'has', e), i)
  }
  ownKeys(t) {
    return (St(t, 'iterate', qi(t) ? 'length' : li), Reflect.ownKeys(t))
  }
}
class by extends Tu {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, e) {
    return !0
  }
  deleteProperty(t, e) {
    return !0
  }
}
const Oy = new Fy(),
  Dy = new by(),
  Do = n => n,
  As = n => Reflect.getPrototypeOf(n)
function ky(n, t, e) {
  return function (...i) {
    const s = this.__v_raw,
      r = q(s),
      o = zs(r),
      a = n === 'entries' || (n === Symbol.iterator && o),
      l = n === 'keys' && o,
      h = s[n](...i),
      c = e ? Do : t ? ko : mt
    return (
      !t && St(r, 'iterate', l ? Oo : li),
      {
        next() {
          const { value: u, done: d } = h.next()
          return d ? { value: u, done: d } : { value: a ? [c(u[0]), c(u[1])] : c(u), done: d }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Fs(n) {
  return function (...t) {
    return n === 'delete' ? !1 : n === 'clear' ? void 0 : this
  }
}
function Ny(n, t) {
  const e = {
    get(s) {
      const r = this.__v_raw,
        o = q(r),
        a = q(s)
      n || (wn(s, a) && St(o, 'get', s), St(o, 'get', a))
      const { has: l } = As(o),
        h = t ? Do : n ? ko : mt
      if (l.call(o, s)) return h(r.get(s))
      if (l.call(o, a)) return h(r.get(a))
      r !== o && r.get(s)
    },
    get size() {
      const s = this.__v_raw
      return (!n && St(q(s), 'iterate', li), s.size)
    },
    has(s) {
      const r = this.__v_raw,
        o = q(r),
        a = q(s)
      return (n || (wn(s, a) && St(o, 'has', s), St(o, 'has', a)), s === a ? r.has(s) : r.has(s) || r.has(a))
    },
    forEach(s, r) {
      const o = this,
        a = o.__v_raw,
        l = q(a),
        h = t ? Do : n ? ko : mt
      return (!n && St(l, 'iterate', li), a.forEach((c, u) => s.call(r, h(c), h(u), o)))
    },
  }
  return (
    Ey(
      e,
      n
        ? { add: Fs('add'), set: Fs('set'), delete: Fs('delete'), clear: Fs('clear') }
        : {
            add(s) {
              !t && !Ue(s) && !rn(s) && (s = q(s))
              const r = q(this)
              return (As(r).has.call(r, s) || (r.add(s), ke(r, 'add', s, s)), this)
            },
            set(s, r) {
              !t && !Ue(r) && !rn(r) && (r = q(r))
              const o = q(this),
                { has: a, get: l } = As(o)
              let h = a.call(o, s)
              h || ((s = q(s)), (h = a.call(o, s)))
              const c = l.call(o, s)
              return (o.set(s, r), h ? wn(r, c) && ke(o, 'set', s, r) : ke(o, 'add', s, r), this)
            },
            delete(s) {
              const r = q(this),
                { has: o, get: a } = As(r)
              let l = o.call(r, s)
              ;(l || ((s = q(s)), (l = o.call(r, s))), a && a.call(r, s))
              const h = r.delete(s)
              return (l && ke(r, 'delete', s, void 0), h)
            },
            clear() {
              const s = q(this),
                r = s.size !== 0,
                o = s.clear()
              return (r && ke(s, 'clear', void 0, void 0), o)
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach(s => {
      e[s] = ky(s, n, t)
    }),
    e
  )
}
function wu(n, t) {
  const e = Ny(n, t)
  return (i, s, r) =>
    s === '__v_isReactive'
      ? !n
      : s === '__v_isReadonly'
        ? n
        : s === '__v_raw'
          ? i
          : Reflect.get(Fo(e, s) && s in i ? e : i, s, r)
}
const Gy = { get: wu(!1, !1) },
  Xy = { get: wu(!0, !1) },
  Su = new WeakMap(),
  zy = new WeakMap(),
  vu = new WeakMap(),
  jy = new WeakMap()
function Wy(n) {
  switch (n) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Yy(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : Wy(wy(n))
}
function Iu(n) {
  return rn(n) ? n : Pu(n, !1, Oy, Gy, Su)
}
function Mu(n) {
  return Pu(n, !0, Dy, Xy, vu)
}
function Pu(n, t, e, i, s) {
  if (!Ir(n) || (n.__v_raw && !(t && n.__v_isReactive))) return n
  const r = Yy(n)
  if (r === 0) return n
  const o = s.get(n)
  if (o) return o
  const a = new Proxy(n, r === 2 ? i : e)
  return (s.set(n, a), a)
}
function rn(n) {
  return !!(n && n.__v_isReadonly)
}
function Ue(n) {
  return !!(n && n.__v_isShallow)
}
function By(n) {
  return n ? !!n.__v_raw : !1
}
function q(n) {
  const t = n && n.__v_raw
  return t ? q(t) : n
}
const mt = n => (Ir(n) ? Iu(n) : n),
  ko = n => (Ir(n) ? Mu(n) : n)
function Ji(n) {
  return n ? n.__v_isRef === !0 : !1
}
function no(n) {
  return Vy(n, !0)
}
function Vy(n, t) {
  return Ji(n) ? n : new Uy(n, t)
}
class Uy {
  constructor(t, e) {
    ;((this.dep = new Cu()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = e ? t : q(t)),
      (this._value = e ? t : mt(t)),
      (this.__v_isShallow = e))
  }
  get value() {
    return (this.dep.track(), this._value)
  }
  set value(t) {
    const e = this._rawValue,
      i = this.__v_isShallow || Ue(t) || rn(t)
    ;((t = i ? t : q(t)),
      wn(t, e) && ((this._rawValue = t), (this._value = i ? t : mt(t)), this.dep.trigger()))
  }
}
var Qt = (n => (
  (n.SELECT = 'select'),
  (n.DESELECT = 'deselect'),
  (n.DRAW_BEGIN = 'drawBegin'),
  (n.DRAW_COMPLETE = 'drawComplete'),
  (n.TRANSLATE_START = 'translateBegin'),
  (n.TRANSLATE_END = 'translateComplete'),
  (n.MODIFY_BEGIN = 'modifyBegin'),
  (n.MODIFY_COMPLETE = 'modifyComplete'),
  (n.REMOVE = 'remove'),
  (n.COMPLETE = 'complete'),
  n
))(Qt || {})
class fh extends xt {
  removeFeatures
  removeArray
  remainArray
  remainFeatures
  constructor(t, e, i, s) {
    ;(super('remove'),
      (this.removeArray = t),
      (this.removeFeatures = e),
      (this.remainArray = i),
      (this.remainFeatures = s))
  }
}
class Zy extends yu {
  selectArray
  selectData
  selectFeature
  constructor(t, e, i, s, r) {
    ;(super(t, s, r), (this.selectArray = e), (this.selectFeature = s[0]), (this.selectData = i))
  }
}
class Ky extends yu {
  deselectArray
  deselectData
  deselectFeature
  constructor(t, e, i, s, r) {
    ;(super(t, s, r), (this.deselectArray = e), (this.deselectFeature = r[0]), (this.deselectData = i))
  }
}
class so extends xt {
  data
  feature
  startAt
  endAt
  allFeatures
  allData
  constructor(t, e, i, s, r, o, a) {
    ;(super(t),
      (this.data = e),
      (this.allData = r),
      (this.allFeatures = o),
      (this.feature = i),
      (this.startAt = s),
      (this.endAt = a))
  }
}
class gh extends Xs {
  dataArray
  startAt
  endAt
  constructor(t, e, i, s, r) {
    ;(super(t, i, r?.coord3857 ?? [], s.coord3857),
      (this.dataArray = e),
      (this.features = i),
      (this.startAt = s),
      (this.endAt = r))
  }
  get distance() {
    return this.endAt ? kc(this.startAt.coord, this.endAt.coord) : 0
  }
}
class _h extends xt {
  dataArray
  features
  constructor(t, e, i) {
    ;(super(t), (this.dataArray = e), (this.features = i))
  }
}
class $y extends xt {
  array
  features
  constructor(t, e) {
    ;(super('complete'), (this.array = t), (this.features = e))
  }
}
const bs = [
  {
    name: 'point',
    type: 'Point',
    title: '绘制点',
    icon: n => `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1.5rem"
  height="1.5rem"
  viewBox="0 0 24 24" title="绘制点">
  <path
    fill="${n}"
    stroke="${n}"
    d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5" />
</svg>`,
  },
  {
    name: 'line',
    type: 'LineString',
    title: '绘制线',
    icon: n => `<svg
xmlns="http://www.w3.org/2000/svg"
width="1.5rem"
height="1.5rem"
viewBox="0 0 24 24">
<path
  fill="${n}"
  stroke="${n}"
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
    icon: n => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24">
      <path
        fill="${n}"
        stroke-width="1"
        d="m21.934 11.751l-4.75-8.255a.5.5 0 0 0-.434-.25h-9.5a.5.5 0 0 0-.434.25l-4.75 8.255a.5.5 0 0 0 0 .498l4.75 8.255c.09.155.255.25.434.25h9.5a.5.5 0 0 0 .434-.25l4.75-8.255a.5.5 0 0 0 0-.498m-5.473 8.004H7.539L3.077 12L7.54 4.245h8.922L20.923 12z" />
    </svg>`,
  },
  {
    name: 'circle',
    type: 'Circle',
    title: '绘制圆',
    icon: n => `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="${n}"
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
    icon: n => `<svg
       xmlns="http://www.w3.org/2000/svg"
       width="1.5rem"
       height="1.5rem"
       viewBox="0 0 24 24">
       <path
         fill="none"
         stroke="${n}"
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
    icon: n => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 32 32">
      <path
        fill="${n}"
        d="M14 2.5a.5.5 0 0 1 .5-.5h1c4.01 0 6.81.25 8.621.702c.903.226 1.602.512 2.085.875c.497.372.794.852.794 1.423c0 .47-.122.948-.52 1.368c-.379.399-.963.696-1.783.926C23.062 7.752 20.25 8 15.5 8s-7.438.252-8.928.669c-.742.208-1.127.441-1.326.652C5.066 9.51 5 9.72 5 10c0 .179.078.387.394.623c.33.247.88.493 1.727.704c1.232.308 3.002.525 5.417.62q-.038.27-.038.553v.446c-2.456-.096-4.301-.318-5.621-.648c-.903-.226-1.602-.512-2.085-.875C4.297 11.05 4 10.571 4 10c0-.47.122-.948.52-1.368c.379-.399.963-.696 1.783-.926C7.939 7.248 10.75 7 15.5 7c4.751 0 7.439-.252 8.928-.669c.742-.208 1.127-.441 1.326-.652c.18-.19.246-.399.246-.679c0-.179-.078-.387-.394-.623c-.33-.247-.88-.493-1.727-.704C22.189 3.25 19.489 3 15.5 3h-1a.5.5 0 0 1-.5-.5m2.476 7.5a2.5 2.5 0 0 0-2.5 2.5v6.731l-1.285-.57a4.49 4.49 0 0 0-5.513 1.55a1.006 1.006 0 0 0 .427 1.491c5.713 2.518 7.633 4.811 8.437 6.54c.502 1.079 1.616 1.93 2.917 1.73l3.634-.56a2.5 2.5 0 0 0 2.046-1.867l1.224-4.92a4.5 4.5 0 0 0-3.651-5.53l-3.237-.521v-4.075A2.5 2.5 0 0 0 16.476 10m-1.5 2.5a1.5 1.5 0 0 1 3 0V17a.5.5 0 0 0 .42.494l3.657.588a3.5 3.5 0 0 1 2.84 4.301l-1.224 4.92a1.5 1.5 0 0 1-1.228 1.121l-3.634.56c-.742.114-1.488-.368-1.858-1.163c-.944-2.03-3.104-4.462-8.941-7.034l-.004-.002l-.002-.005a3.49 3.49 0 0 1 4.284-1.204l1.988.881a.5.5 0 0 0 .703-.457z" />
    </svg>`,
  },
  {
    name: 'modify',
    type: 'modify',
    title: '修改要素，按住 alt 可删除顶点',
    icon: n => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="${n}"
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
    icon: n => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24">
      <path
        fill="${n}"
        d="m12 3l.365-.342l-.365-.39l-.365.39zm-.5 6a.5.5 0 0 0 1 0zm3.865-3.142l-3-3.2l-.73.684l3 3.2zm-3.73-3.2l-3 3.2l.73.684l3-3.2zM11.5 3v6h1V3zm9.5 9l.342.365l.39-.365l-.39-.365zm-6-.5a.5.5 0 0 0 0 1zm3.142 3.865l3.2-3l-.684-.73l-3.2 3zm3.2-3.73l-3.2-3l-.684.73l3.2 3zM21 11.5h-6v1h6zM12 21l.365.342l-.365.39l-.365-.39zm-.5-6a.5.5 0 0 1 1 0zm3.865 3.142l-3 3.2l-.73-.684l3-3.2zm-3.73 3.2l-3-3.2l.73-.684l3 3.2zM11.5 21v-6h1v6zM3 12l-.342.365l-.39-.365l.39-.365zm6-.5a.5.5 0 0 1 0 1zm-3.142 3.865l-3.2-3l.684-.73l3.2 3zm-3.2-3.73l3.2-3l.684.73l-3.2 3zM3 11.5h6v1H3z" />
    </svg>`,
  },
  {
    name: 'remove',
    type: 'remove',
    title: '删除要素',
    icon: n => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 20 20">
      <path
        fill="${n}"
        d="M8.5 4h3a1.5 1.5 0 0 0-3 0m-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM5.741 15.23A2 2 0 0 0 7.728 17h4.544a2 2 0 0 0 1.987-1.77L15.439 5H4.561zM8.5 7.5A.5.5 0 0 1 9 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5M12 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
    </svg>`,
  },
  {
    name: 'complete',
    type: 'complete',
    title: '完成',
    icon: n => `<svg
       xmlns="http://www.w3.org/2000/svg"
       width="1.5rem"
       height="1.5rem"
       viewBox="0 0 24 24">
       <g fill="none" fill-rule="evenodd">
         <path
           d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
         <path
           fill="${n}"
           d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.414A2 2 0 0 0 19.414 5L17 2.586A2 2 0 0 0 15.586 2zm0 2h9.586L18 6.414V20H6zm10.238 6.793a1 1 0 1 0-1.414-1.414l-4.242 4.243l-1.415-1.415a1 1 0 0 0-1.414 1.414l2.05 2.051a1.1 1.1 0 0 0 1.556 0l4.88-4.879Z" />
       </g>
     </svg>`,
  },
  {
    name: 'removeAll',
    type: 'removeAll',
    title: '删除所有',
    icon: n => `<svg  xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 1024 1024"><path fill="${n}" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"></path></svg>`,
  },
]
function Hy(n) {
  if (typeof n != 'string' || n.trim() === '') return !1
  let t = n.trim()
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
  const s = i[1],
    r = i[2].trim()
  if (!e.includes(s)) return !1
  if (r === 'EMPTY') return !0
  const o = (r.match(/\(/g) || []).length,
    a = (r.match(/\)/g) || []).length
  if (o !== a) return !1
  if (s === 'POINT') {
    const l = /\(([^()]+)\)/.exec(r)
    if (!l) return !1
    const h = l[1].trim().split(/\s+/)
    if (h.length < 2 || !h.every(c => !isNaN(Number(c)))) return !1
  }
  return !0
}
function qy(n) {
  if (typeof n != 'string') return null
  const t = n.trim()
  if (!t) return null
  const e = /^SRID=\d+;/i,
    s = t
      .replace(e, '')
      .trim()
      .match(/^(POINT|LINESTRING|POLYGON|MULTIPOINT|MULTILINESTRING|MULTIPOLYGON|GEOMETRYCOLLECTION)\b/)
  return s ? s[1] : null
}
function Oa(n) {
  if (n == null || typeof n != 'object') return !1
  const t = n
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
        ? t.features.every(s => Oa(s) && s.type === 'Feature')
        : !1
}
function Jy(n) {
  if (typeof n != 'string' || n.trim() === '') return !1
  const t = n.trim()
  if (t.startsWith('{'))
    try {
      const e = JSON.parse(t)
      return !!Oa(e)
    } catch {
      return !1
    }
  return !1
}
function Qy(n) {
  if (n == null) return [0, 0, 0, 0]
  if (typeof n == 'number') return [n, n, n, n]
  switch (n.length) {
    case 1:
      return [n[0], n[0], n[0], n[0]]
    case 2:
      return [n[0], n[1], n[0], n[1]]
    case 3:
      return [n[0], n[1], n[2], n[1]]
    case 4:
      return [n[0], n[1], n[2], n[3]]
    default:
      throw new Error('Invalid padding format')
  }
}
function xn(n = '') {
  return n.toLowerCase() + '_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36)
}
const t1 = ['Point', 'LineString', 'Polygon', 'Circle'],
  e1 = getComputedStyle(document.documentElement).getPropertyValue('--ol-foreground-color'),
  i1 = new Kt({
    fill: new Ve({ color: 'rgba(255,255,255,0.5)' }),
    stroke: new xe({ width: 2.5, color: 'red' }),
    image: new hn({ radius: 5, stroke: new xe({ width: 2.5, color: 'red' }) }),
  }),
  n1 = { duration: 500, maxZoom: 14, padding: 100 },
  Os = ['LineString', 'Polygon'],
  mh = +Math.floor(Number.MAX_SAFE_INTEGER / 1e7),
  s1 = {
    remove: 'remove geometry',
    translate: 'translate geometry',
    modify: 'modify geometry',
    complete: 'complete edit geometry',
  }
class r1 extends Te {
  #t = new Pa()
  #g = null
  #e = new oi([])
  #n = null
  #m = null
  #h = 'EPSG:4326'
  #s = 'EPSG:3857'
  #a = no()
  #l = no()
  #c = no()
  #r = 'None'
  #E = null
  #C = null
  #u = null
  #f = null
  #y = !1
  #p = !0
  #x = !1
  #_ = !1
  supportFreehand = !0
  showToolBar = !0
  actions = ['modify', 'translate', 'remove', 'complete']
  drawTypes = t1
  allButtons = bs
  sketchStyle = null
  selectedStyle = i1
  modifyingStyle = null
  toolBarContainer = null
  enableModifier = !1
  enableMover = !1
  constructor(t, e = {}) {
    ;(super(),
      (this.#n = t),
      (this.#m = t.getView()),
      (this.#s = this.#m.getProjection().getCode()),
      this.#P(e),
      this.#b(),
      this.#A(),
      this.#F(),
      this.showToolBar && this.render(),
      (this.#u = t.on('singleclick', this.#R.bind(this))))
    const i = uh(this.#L.bind(this), 50)
    t.on('pointermove', i)
  }
  get source() {
    return this.#t
  }
  get layer() {
    return this.#g
  }
  addFeatureFromWKT(t, e, i = 'EPSG:4326') {
    if (!t || !Hy(t) || (e && this.#t.getFeatureById(e))) return !1
    let s
    if (typeof i == 'string') s = new Cs().readFeature(t, { dataProjection: i, featureProjection: this.#s })
    else {
      const { style: o, ...a } = i
      ;((s = new Cs().readFeature(t, a)), o && s.setStyle(o))
    }
    const r = qy(t)
    return (s.setId(e ?? xn(r ?? '')), this.#t.addFeature(s), !0)
  }
  addFeatureFromJSON(t, e = 'EPSG:4326') {
    if (!t) return !1
    let i = ''
    if (typeof t == 'object') {
      if (!Oa(t)) return !1
      try {
        i = window.JSON.stringify(t)
      } catch {
        return !1
      }
    } else i = t
    if (Jy(i)) {
      let s
      if (typeof e == 'string') s = new _n().readFeature(i, { dataProjection: e, featureProjection: this.#s })
      else {
        const { style: h, ...c } = e
        ;((s = new _n().readFeature(i, c)), h && s.setStyle(h))
      }
      const r = s.getGeometry()?.getType(),
        o = s.getProperties(),
        a = s.getId()
      if (!a) s.setId(xn(r))
      else if (this.#t.getFeatureById(a)) return !1
      if (o.geometryType === 'circle' && r === 'Polygon') {
        const h = o.center,
          c = o.radius
        if (Array.isArray(h) && c != null) {
          const u = gn(h),
            d = this.#s.endsWith('3857'),
            f = new pt(new qn(d ? u : h, c))
          ;(f.setId(a ?? xn('circle')), this.#t.addFeature(f))
        }
      } else this.#t.addFeature(s)
      return !0
    }
    return !1
  }
  enableDraw(t, e) {
    if (this.#n) {
      if ((this.disableDraw(), this.disableSnap(), (this.#r = t), t === 'None')) {
        this.showToolBar &&
          (this.drawTypes.forEach(i => {
            this.#o(i, !1)
          }),
          this.#d('freehand', !0, 'enable freehand draw.'))
        return
      }
      ;(this.disableSelect(),
        this.disableModify(),
        this.disableTranslate(),
        e && (this.sketchStyle = e),
        (this.#c.value = new hy({
          source: this.#t,
          type: t,
          freehand: this.#_ && Os.includes(t),
          style: this.sketchStyle !== null ? this.sketchStyle : void 0,
        })),
        this.#n.addInteraction(this.#c.value),
        (this.#C = this.#c.value.on('drawstart', i => {
          this.dispatchEvent(i)
          const s = i.feature,
            o = s.getGeometry().getFlatCoordinates(),
            [a, l] = o,
            h = ps([a, l]),
            c = gn(h),
            u = this.#t.getFeatures(),
            d = this.#i(u),
            f = { coord: h, coord3857: c }
          this.dispatchEvent(new so(Qt.DRAW_BEGIN, null, s, f, d, u))
        })),
        (this.#E = this.#c.value.on('drawend', i => {
          this.dispatchEvent(i)
          const s = i.feature,
            o = s.getGeometry().getFlatCoordinates(),
            [a, l] = o,
            h = ps([a, l]),
            c = gn(h),
            u = { coord: h, coord3857: c },
            d = ps([o.at(-2), o.at(-1)]),
            f = gn(d),
            g = { coord: d, coord3857: f }
          s.setId(xn(this.#r))
          const _ = this.#t.getFeatures()
          _.push(s)
          const m = this.#i(_)
          if (this.#r === 'Circle') {
            const y = this.#w(s),
              p = new so(Qt.DRAW_COMPLETE, y, s, u, m, _, g)
            this.dispatchEvent(p)
          } else {
            const [y] = this.#i([s]),
              p = new so(Qt.DRAW_COMPLETE, y, s, u, m, _, g)
            this.dispatchEvent(p)
          }
        })),
        this.enableSnap(),
        this.showToolBar &&
          (this.#o(t, !0),
          this.drawTypes.forEach(i => {
            if (i === t) return 'next loop'
            this.#o(i, !1)
          }),
          Os.includes(this.#r)
            ? this.#d('freehand', !0, 'enable freehand draw.')
            : ((this.#_ = !1), this.#o('freehand', !1), this.#d('freehand', !1, 'cannot freehand draw.'))))
    }
  }
  disableDraw() {
    !this.#n ||
      !this.#c.value ||
      ((this.#r = 'None'),
      this.disableSnap(),
      this.showToolBar &&
        (this.drawTypes.forEach(t => {
          this.#o(t, !1)
        }),
        this.#d('freehand', !0, 'enable freehand draw.')),
      this.#n.removeInteraction(this.#c.value),
      (this.#c.value = void 0),
      Ns(this.#E),
      Ns(this.#C))
  }
  enableFreehand() {
    ;((this.#_ = !0),
      this.showToolBar && this.#o('freehand', !0),
      Os.includes(this.#r) && this.enableDraw(this.#r))
  }
  disableFreehand() {
    ;((this.#_ = !1),
      this.showToolBar &&
        (this.#o('freehand', !1),
        !Os.includes(this.#r) &&
          this.#r !== 'None' &&
          this.#d('freehand', !1, "current geometry type don't support freehand draw.")),
      this.sketchStyle ? this.enableDraw(this.#r, this.sketchStyle) : this.enableDraw(this.#r))
  }
  select(t, e) {
    if (!this.#u) return []
    const i = e?.selectedStyle,
      s = e?.eachFeature
    let r = !0
    e?.fit === !1 && (r = !1)
    const o = []
    Array.isArray(t) ? o.push(...t) : o.push(t)
    const a = ae(),
      l = []
    let h = !1
    if (
      (o.forEach((c, u) => {
        const d = this.#t.getFeatureById(c)
        if (d) {
          if ((l.push(d), this.#e.push(d), r)) {
            const f = d.getGeometry()?.getExtent()
            Rc(a, f)
          }
          i && d.setStyle(i)
        }
        !h && s && d && (h = !!s(d, u))
      }),
      r && l.length)
    ) {
      const c = n1
      ;(e?.fit !== !1 && (Object.assign(c, e?.fit === !0 ? {} : e?.fit), (c.padding = Qy(c.padding))),
        this.#m.fit(a, c))
    }
    return l
  }
  deselect(t, e) {
    const i = e?.deselectStyle,
      s = e?.eachFeature,
      r = []
    Array.isArray(t) ? r.push(...t) : r.push(t)
    let o = !1
    r.forEach((a, l) => {
      const h = this.#t.getFeatureById(a)
      ;(h && (this.#e.remove(h), h.setStyle(i)), !o && s && h && (o = !!s(h, l)))
    })
  }
  enableSelect(t = { multi: !0, box: !1, single: !1 }) {
    return (
      this.disableDraw(),
      (this.#x = t?.single === !0),
      (this.#y = t?.box === !0),
      (this.#p = t?.multi !== !1),
      this.#x && ((this.#p = !1), (this.#y = !1)),
      (this.#p || this.#y) && this.disableModify(),
      this.#u || (this.#u = this.#n.on('singleclick', this.#R.bind(this))),
      !0
    )
  }
  disableSelect() {
    return (Ns(this.#u), (this.#u = null), !0)
  }
  enableTranslate(t) {
    return (
      this.enableSelect({ multi: !0 }),
      (this.enableMover = !0),
      this.disableModify(),
      this.disableDraw(),
      this.disableFreehand(),
      this.showToolBar && this.#o('translate', !0),
      this.#l.value
        ? (this.#l.value.setActive(!0), !0)
        : ((this.#l.value = new py({ features: this.#e })),
          this.#n?.addInteraction(this.#l.value),
          this.#l.value.on('translatestart', e => {
            ;(this.dispatchEvent(e), this.#k(e))
          }),
          this.#l.value.on('translateend', e => {
            ;(this.dispatchEvent(e), this.#N(e))
          }),
          !0)
    )
  }
  disableTranslate(t) {
    return (
      (this.enableMover = !1),
      this.#o('translate', !1),
      this.#l.value && this.#l.value.setActive(!1),
      !0
    )
  }
  enableModify(t) {
    if (
      (this.enableSelect({ single: !0 }),
      this.disableTranslate(),
      this.disableDraw(),
      this.disableFreehand(),
      (this.enableModifier = !0),
      this.showToolBar && this.#o('modify', !0),
      this.#a.value)
    ) {
      ;(this.#a.value.setActive(!0), this.enableSnap())
      return
    }
    ;(t !== null && (this.modifyingStyle = t),
      (this.#a.value = new dy({
        features: this.#e,
        style: this.modifyingStyle !== null ? this.modifyingStyle : void 0,
      })),
      this.#n?.addInteraction(this.#a.value),
      this.#a.value.on('modifystart', e => {
        this.dispatchEvent(e)
        const i = this.#i(e.features),
          s = new _h(Qt.MODIFY_BEGIN, i, e.features)
        this.dispatchEvent(s)
      }),
      this.#a.value.on('modifyend', e => {
        this.dispatchEvent(e)
        const i = this.#i(e.features),
          s = new _h(Qt.MODIFY_COMPLETE, i, e.features)
        this.dispatchEvent(s)
      }),
      this.enableSnap())
  }
  disableModify(t, e) {
    return (
      this.disableSnap(),
      (this.enableModifier = !1),
      this.showToolBar && this.#o('modify', !1),
      this.#a.value && this.#a.value.setActive(!1),
      !0
    )
  }
  disableSnap() {
    this.#f && this.#f.setActive(!1)
  }
  enableSnap() {
    if (this.#f) {
      this.#f.setActive(!0)
      return
    }
    ;((this.#f = new yy({ source: this.#t, intersection: !0 })), this.#n?.addInteraction(this.#f))
  }
  removeFeatures(t) {
    if (t == null) {
      const a = this.#e.getArray().slice(),
        l = this.#i(a)
      ;(this.#e.forEach(d => {
        this.#t.removeFeature(d)
      }),
        this.#e.clear())
      const h = this.#t.getFeatures().slice(),
        c = this.#i(h),
        u = new fh(l, a, c, h)
      this.dispatchEvent(u)
      return
    }
    const e = Array.isArray(t) ? t : [t],
      i = []
    e.forEach(a => {
      const l = this.#t.getFeatureById(a)
      l && (i.push(l), this.#t.removeFeature(l), this.#e.remove(l))
    })
    const s = this.#e.getArray(),
      r = this.#i(s),
      o = new fh(this.#i(i), i, r, s)
    this.dispatchEvent(o)
  }
  removeAllFeatures() {
    return (this.#t.clear(), this.#e.clear(), Promise.resolve(!0))
  }
  completeEdit() {
    ;(this.#e.forEach(s => {
      s.setStyle(void 0)
    }),
      this.#e.clear(),
      this.disableDraw(),
      this.disableFreehand(),
      this.disableModify(),
      this.disableTranslate())
    const t = this.#t.getFeatures(),
      e = this.#i(t),
      i = new $y(e, t)
    this.dispatchEvent(i)
  }
  render() {
    ;(this.#I(), this.#M())
  }
  #I() {
    if (!this.#n?.getTargetElement()) return
    const e = this.#n.getTargetElement().querySelector('.ol-overlaycontainer-stopevent'),
      i = document.createElement('div')
    ;(i.classList.add('geom-editor-tool-bar'),
      i.classList.add('ol-control'),
      (i.style = 'pointer-events: auto;'),
      this.allButtons.forEach(s => {
        const r = document.createElement('button')
        r.classList.add('geom-editor-btn')
        const o = s.name
        ;(this.actions.includes(o) &&
          (o === 'complete'
            ? (r.disabled = !0)
            : this.#t.getFeatures().length
              ? (r.disabled = !1)
              : ((r.disabled = !0), (r.title = ''))),
          (r.innerHTML = s.icon(e1)),
          (r.title = s.title),
          (r.dataset.type = s.type),
          i.appendChild(r))
      }),
      e.appendChild(i),
      (this.toolBarContainer = i))
  }
  #M() {
    this.toolBarContainer &&
      this.toolBarContainer.addEventListener('click', t => {
        const i = t.target.closest('button')
        if (!i) return
        const s = i.dataset.type
        this.drawTypes.includes(s)
          ? this.#r === s
            ? this.enableSelect()
            : this.enableDraw(s)
          : s === 'freehand'
            ? this.#_
              ? this.disableFreehand()
              : this.enableFreehand()
            : s === 'modify'
              ? this.enableModifier
                ? this.disableModify()
                : this.enableModify()
              : s === 'translate'
                ? this.enableMover
                  ? this.disableTranslate()
                  : this.enableTranslate()
                : s === 'remove'
                  ? this.removeFeatures()
                  : this.completeEdit()
      })
  }
  #P(t) {
    const { layerStyle: e, selectedStyle: i } = t
    i && (this.selectedStyle = i)
    const s = mh + 1
    ;((this.#g = new Ma({ zIndex: s, source: this.#t, className: this.#G(t), style: e })),
      (this.supportFreehand = t?.supportFreehand !== !1),
      (this.showToolBar = t?.showToolBar !== !1),
      Array.isArray(t.actions) && (this.actions = t.actions),
      Array.isArray(t.drawTypes) && (this.drawTypes = t.drawTypes))
    const r = bs.filter(a => this.drawTypes.includes(a.type))
    this.supportFreehand && r.push(bs.find(a => a.name === 'freehand'))
    const o = bs.filter(a => this.actions.includes(a.name))
    this.allButtons = [...r, ...o]
  }
  #R(t) {
    if (this.#t.getFeatures().length === 0) return
    if (!this.#n.hasFeatureAtPixel(t.pixel)) {
      ;(this.#e.forEach(r => {
        r.setStyle(void 0)
      }),
        this.#e.clear())
      return
    }
    const s = r => {
      if (!r) return
      const o = this.#e.getArray().find(a => a.getId() === r.getId())
      this.#x
        ? (this.#e.forEach(a => {
            a.setStyle(void 0)
          }),
          this.#e.clear(),
          o || (this.#e.push(r), r.setStyle(this.selectedStyle)))
        : o
          ? (this.#e.remove(o), r.setStyle(void 0))
          : (this.#e.push(r), r.setStyle(this.selectedStyle))
    }
    this.#n.forEachFeatureAtPixel(
      t.pixel,
      r => {
        s(r)
      },
      { layerFilter: r => r === this.#g },
    )
  }
  #L(t) {
    if (t.dragging || !this.#u) return
    const e = t.map,
      i = e.getEventPixel(t.originalEvent),
      s = e.hasFeatureAtPixel(i)
    e.getTargetElement().style.cursor = s ? 'pointer' : ''
  }
  #A() {
    this.#t.on('changefeature', () => {})
    let t = !1
    const e = () => {
      this.showToolBar &&
        !t &&
        (this.actions.forEach(s => {
          this.#d(s, !0, s1[s])
        }),
        (t = !0))
    }
    this.#t.on('addfeature', e)
    const i = () => {
      ;((t = this.#t.getFeatures().length > 0),
        !t &&
          this.showToolBar &&
          this.actions.forEach(s => {
            if (s === 'complete') return 'next loop'
            this.#d(s, !1, '')
          }))
    }
    this.#t.on('removefeature', uh(i))
  }
  #F() {
    const t = i => {
      const s = i.element,
        r = this.#e.getArray(),
        [o] = this.#i([s]),
        a = this.#i(r)
      this.dispatchEvent(new Zy(Qt.SELECT, a, o, r, []))
    }
    this.#e.on('add', t)
    const e = i => {
      const s = i.element,
        [r] = this.#i([s]),
        o = this.#e.getArray(),
        a = this.#i([s]),
        l = [s]
      this.dispatchEvent(new Ky(Qt.DESELECT, a, r, o, l))
    }
    this.#e.on('remove', e)
  }
  #b() {
    this.#g && this.#n?.addLayer(this.#g)
  }
  #O(t) {
    const { feature: e, id: i } = this.#T(t)
    return { wkt: new Cs().writeFeature(e, { dataProjection: this.#h, featureProjection: this.#s }), id: i }
  }
  #T(t) {
    let e
    return (t.getId() ? (e = t.getId()) : ((e = xn()), t.setId(e)), { id: e, feature: t })
  }
  #D(t) {
    const { feature: e, id: i } = this.#T(t),
      s = new _n().writeFeatureObject(e, { dataProjection: this.#h, featureProjection: this.#s }),
      r = new _n().writeFeature(e, { dataProjection: this.#h, featureProjection: this.#s })
    return { id: i, geojsonObj: s, geojson: r }
  }
  #i(t) {
    let e = []
    return (
      Array.isArray(t) ? (e = t) : (e = t.getArray()),
      e.map(i => {
        if (i.getGeometry()?.getType() === 'Circle') return this.#w(i)
        const { wkt: r, id: o } = this.#O(i),
          { geojson: a, geojsonObj: l } = this.#D(i)
        return { wkt: r, id: o, geojson: a, geojsonObj: l }
      })
    )
  }
  #w(t) {
    const e = t.getGeometry(),
      i = e.getFlatCoordinates(),
      s = e.getRadius(),
      r = ps(e.getCenter()),
      o = ei([i[2], i[3]], this.#s, 'EPSG:4326'),
      a = kc(r, o),
      l = gn(r),
      h = this.#s.replace('EPSG:', ''),
      c = { geometry: 'circle', center: r, radius: a, center3857: l, ['radius' + h]: s },
      u = H_(r, s, 128),
      d = t.getId(),
      f = new pt(u)
    f.setId(d)
    const g = new Cs().writeFeature(f, { dataProjection: this.#h, featureProjection: this.#h }),
      _ = new _n().writeFeatureObject(f, { dataProjection: this.#h, featureProjection: this.#h })
    _.properties = c
    const m = JSON.stringify(_)
    return { id: d, wkt: g, geojson: m, geojsonObj: _ }
  }
  #k(t) {
    const { features: e, startCoordinate: i } = t
    this.dispatchEvent(this.#S(e, i))
  }
  #N(t) {
    const { features: e, startCoordinate: i, coordinate: s } = t
    this.dispatchEvent(this.#S(e, i, s))
  }
  #S(t, e, i) {
    const s = this.#i(t),
      r = ei(e, this.#s, 'EPSG:4326'),
      o = ei(e, this.#s, 'EPSG:3857'),
      a = { coord: r, coord3857: o }
    if (i) {
      const l = ei(i, this.#s, 'EPSG:4326'),
        h = ei(i, this.#s, 'EPSG:3857'),
        c = { coord: l, coord3857: h }
      return new gh(Qt.TRANSLATE_END, s, t, a, c)
    }
    return new gh(Qt.TRANSLATE_START, s, t, a)
  }
  #G(t) {
    const { className: e = 'ol-layer' } = t
    return [e, `geom-editor-layer z-index:${mh + 1}`].join(' ')
  }
  #o(t, e) {
    const i = this.#v(t)
    i && (e ? (i.classList.remove('hidden'), i?.classList.add('selected')) : i?.classList.remove('selected'))
  }
  #d(t, e, i) {
    const s = this.#v(t)
    s && ((s.disabled = e === !1), (s.title = i))
  }
  #v(t) {
    return this.toolBarContainer?.querySelector(`[data-type="${t}"]`)
  }
}
const o1 = 'LINESTRING(106.55773424492708 26.68974989181626,106.79592190619702 26.712142565234185)',
  a1 =
    'POLYGON((106.54206177148436 26.659310154932655,106.56403442773436 26.438183322888236,107.125710453125 26.488588582801427,107.07901855859373 26.6924423562391,106.54206177148436 26.659310154932655))',
  l1 = {
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
  h1 = JSON.stringify({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [106.51521987473564, 26.73992541007939] },
    properties: null,
    id: 'p2CQqn2lFk',
  }),
  c1 = {
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
      center3857: [11873867329697348e-9, 3078433290578392e-9],
      center: [106.66476503874576, 26.638933966156273],
      radius: 11017.51961571537,
    },
  },
  u1 = [106.675271, 26.579508],
  d1 = Cd(u1),
  f1 = new og({
    target: 'ol-geom-editor-map',
    layers: [new Lg({ source: new Dg() })],
    view: new te({ center: d1, zoom: 10 }),
  }),
  g1 = {
    'fill-color': 'rgba(255,255,255,0.4)',
    'stroke-color': '#3399CC',
    'stroke-width': 1.25,
    'circle-radius': 5,
    'circle-fill-color': 'rgba(255,255,255,0.4)',
    'circle-stroke-width': 1.25,
    'circle-stroke-color': '#3399CC',
  },
  k = new r1(f1, { layerStyle: g1 })
k.on('select', n => {
  console.log({ event: n })
})
k.on('deselect', n => {
  console.log({ event: n })
})
k.on('drawstart', n => {
  console.log({ event: n })
})
k.on('drawend', n => {
  console.log({ event: n })
})
k.on('drawBegin', n => {
  console.log({ event: n })
})
k.on('drawComplete', n => {
  console.log({ event: n })
})
k.on('translatestart', n => {
  console.log({ event: n })
})
k.on('translateend', n => {
  console.log({ event: n })
})
k.on('translateBegin', n => {
  console.log({ event: n })
})
k.on('translateComplete', n => {
  console.log({ event: n })
})
k.on('modifystart', n => {
  console.log({ event: n })
})
k.on('modifyend', n => {
  console.log({ event: n })
})
k.on('modifyBegin', n => {
  console.log({ event: n })
})
k.on('modifyComplete', n => {
  console.log({ event: n })
})
k.on('remove', n => {
  console.log({ event: n })
})
k.on('complete', n => {
  console.log({ event: n })
})
document.querySelector('#add-wkt').addEventListener('click', _1)
document.querySelector('#add-JSON').addEventListener('click', m1)
document.querySelector('#add-JSONObj').addEventListener('click', y1)
document.querySelector('#remove-feature').addEventListener('click', x1)
document.querySelector('#remove-selected-features').addEventListener('click', p1)
document.querySelector('#remove-all-features').addEventListener('click', E1)
document.querySelector('#select-features').addEventListener('click', C1)
document.querySelector('#deselect-features').addEventListener('click', R1)
document.querySelector('#enable-select').addEventListener('click', T1)
document.querySelector('#enable-select-single').addEventListener('click', w1)
document.querySelector('#disable-select').addEventListener('click', S1)
document.querySelector('#translate-features').addEventListener('click', v1)
document.querySelector('#disable-translate').addEventListener('click', I1)
document.querySelector('#enable-modify').addEventListener('click', M1)
document.querySelector('#disable-modify').addEventListener('click', P1)
document.querySelector('#select-type').addEventListener('change', F1)
document.querySelector('#freehand').addEventListener('change', b1)
function _1() {
  ;(console.log('addWKT'), k.addFeatureFromWKT(o1, 'line1'), k.addFeatureFromWKT(a1))
}
function m1() {
  ;(console.log('addJSON'), k.addFeatureFromJSON(h1))
}
function y1() {
  ;(console.log('addJSONObj'), k.addFeatureFromJSON(l1), k.addFeatureFromJSON(c1))
}
function p1() {
  k.removeFeatures()
}
function x1() {
  k.removeFeatures(['line1', 'p2CQqn2lFk'])
}
function E1() {
  k.removeAllFeatures().then(n => {
    console.log({ success: n })
  })
}
const yh = 'rgba(218,228,194,0.5)',
  ph = 'rgba(255, 204, 51, 0.9)'
function C1() {
  const n = k.select(['line1', 'p2CQqn2lFk'], {
    selectedStyle: new hf({
      fill: new nl({ color: yh }),
      stroke: new sl({ color: ph, width: 4 }),
      image: new lf({ radius: 7, fill: new nl({ color: yh }), stroke: new sl({ color: ph, width: 2 }) }),
    }),
    eachFeature: (t, e) => {
      if ((console.log({ feat: t }), e === 0)) return !0
    },
  })
  console.log('selected features:', n)
}
function R1() {
  k.deselect(['line1', 'p2CQqn2lFk'])
}
function T1() {
  k.enableSelect()
}
function w1() {
  k.enableSelect({ single: !0 })
}
function S1() {
  k.disableSelect()
}
function v1() {
  k.enableTranslate()
}
function I1() {
  k.disableTranslate()
}
function M1() {
  k.enableModify()
}
function P1() {
  k.disableModify()
}
const L1 = ['LineString', 'Polygon'],
  A1 = {
    'fill-color': 'rgba(255, 200, 200, 0.4)',
    'stroke-color': '#ff0000',
    'stroke-line-dash': [5, 10],
    'circle-radius': 6,
    'circle-fill-color': '#ff0000',
    'circle-stroke-color': 'yellow',
    'circle-stroke-width': 2,
  }
function F1(n) {
  const t = n.target.value
  console.log('change type to:', t)
  const e = document.querySelector('#freehand'),
    i = document.querySelector('#freehand-box')
  ;(L1.includes(t)
    ? ((i.title = 'Freehand drawing for ' + t), (e.disabled = !1))
    : ((i.title = '仅线和面支持自由绘制'), (e.checked = !1), (e.disabled = !0), k.disableFreehand()),
    k.enableDraw(t, A1))
}
function b1(n) {
  const t = n.target.checked
  ;(console.log('change freehand to:', t), t ? k.enableFreehand() : k.disableFreehand())
}
