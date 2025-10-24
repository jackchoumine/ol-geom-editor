;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s)
  new MutationObserver(s => {
    for (const r of s)
      if (r.type === 'childList')
        for (const o of r.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && n(o)
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
  function n(s) {
    if (s.ep) return
    s.ep = !0
    const r = e(s)
    fetch(s.href, r)
  }
})()
const zc = {
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
let jl = class extends Error {
    constructor(t) {
      const e = zc[t]
      ;(super(e), (this.code = t), (this.name = 'AssertionError'), (this.message = e))
    }
  },
  We = class {
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
const di = { PROPERTYCHANGE: 'propertychange' }
let oo = class {
  constructor() {
    this.disposed = !1
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal())
  }
  disposeInternal() {}
}
function ao(i, t) {
  return i > t ? 1 : i < t ? -1 : 0
}
function lo(i, t, e) {
  if (i[0] <= t) return 0
  const n = i.length
  if (t <= i[n - 1]) return n - 1
  if (typeof e == 'function') {
    for (let s = 1; s < n; ++s) {
      const r = i[s]
      if (r === t) return s
      if (r < t) return e(t, i[s - 1], r) > 0 ? s - 1 : s
    }
    return n - 1
  }
  if (e > 0) {
    for (let s = 1; s < n; ++s) if (i[s] < t) return s - 1
    return n - 1
  }
  if (e < 0) {
    for (let s = 1; s < n; ++s) if (i[s] <= t) return s
    return n - 1
  }
  for (let s = 1; s < n; ++s) {
    if (i[s] == t) return s
    if (i[s] < t) return i[s - 1] - t < t - i[s] ? s - 1 : s
  }
  return n - 1
}
function Wc(i, t) {
  const e = Array.isArray(t) ? t : [t],
    n = e.length
  for (let s = 0; s < n; s++) i[i.length] = e[s]
}
function Ys(i, t) {
  const e = i.length
  if (e !== t.length) return !1
  for (let n = 0; n < e; n++) if (i[n] !== t[n]) return !1
  return !0
}
function Yc(i, t, e) {
  const n = t || ao
  return i.every(function (s, r) {
    if (r === 0) return !0
    const o = n(i[r - 1], s)
    return !(o > 0 || o === 0)
  })
}
function ws() {
  return !0
}
function Bs() {
  return !1
}
function Rs() {}
function Bc(i) {
  let t = !1,
    e,
    n,
    s
  return function () {
    const r = Array.prototype.slice.call(arguments)
    return (
      (!t || this !== s || !Ys(r, n)) && ((t = !0), (s = this), (n = r), (e = i.apply(this, arguments))),
      e
    )
  }
}
function Vs(i) {
  for (const t in i) delete i[t]
}
function Vc(i) {
  let t
  for (t in i) return !1
  return !t
}
let ho = class extends oo {
  constructor(t) {
    ;(super(),
      (this.eventTarget_ = t),
      (this.pendingRemovals_ = null),
      (this.dispatching_ = null),
      (this.listeners_ = null))
  }
  addEventListener(t, e) {
    if (!t || !e) return
    const n = this.listeners_ || (this.listeners_ = {}),
      s = n[t] || (n[t] = [])
    s.includes(e) || s.push(e)
  }
  dispatchEvent(t) {
    const e = typeof t == 'string',
      n = e ? t : t.type,
      s = this.listeners_ && this.listeners_[n]
    if (!s) return
    const r = e ? new We(t) : t
    r.target || (r.target = this.eventTarget_ || this)
    const o = this.dispatching_ || (this.dispatching_ = {}),
      a = this.pendingRemovals_ || (this.pendingRemovals_ = {})
    ;(n in o || ((o[n] = 0), (a[n] = 0)), ++o[n])
    let l
    for (let h = 0, c = s.length; h < c; ++h)
      if (
        ('handleEvent' in s[h] ? (l = s[h].handleEvent(r)) : (l = s[h].call(this, r)),
        l === !1 || r.propagationStopped)
      ) {
        l = !1
        break
      }
    if (--o[n] === 0) {
      let h = a[n]
      for (delete a[n]; h--; ) this.removeEventListener(n, Rs)
      delete o[n]
    }
    return l
  }
  disposeInternal() {
    this.listeners_ && Vs(this.listeners_)
  }
  getListeners(t) {
    return (this.listeners_ && this.listeners_[t]) || void 0
  }
  hasListener(t) {
    return this.listeners_ ? (t ? t in this.listeners_ : Object.keys(this.listeners_).length > 0) : !1
  }
  removeEventListener(t, e) {
    const n = this.listeners_ && this.listeners_[t]
    if (n) {
      const s = n.indexOf(e)
      s !== -1 &&
        (this.pendingRemovals_ && t in this.pendingRemovals_
          ? ((n[s] = Rs), ++this.pendingRemovals_[t])
          : (n.splice(s, 1), n.length === 0 && delete this.listeners_[t]))
    }
  }
}
const j = {
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
function U(i, t, e, n, s) {
  if ((n && n !== i && (e = e.bind(n)), s)) {
    const o = e
    e = function () {
      ;(i.removeEventListener(t, e), o.apply(this, arguments))
    }
  }
  const r = { target: i, type: t, listener: e }
  return (i.addEventListener(t, e), r)
}
function Ts(i, t, e, n) {
  return U(i, t, e, n, !0)
}
function et(i) {
  i && i.target && (i.target.removeEventListener(i.type, i.listener), Vs(i))
}
let Ii = class extends ho {
  constructor() {
    ;(super(),
      (this.on = this.onInternal),
      (this.once = this.onceInternal),
      (this.un = this.unInternal),
      (this.revision_ = 0))
  }
  changed() {
    ;(++this.revision_, this.dispatchEvent(j.CHANGE))
  }
  getRevision() {
    return this.revision_
  }
  onInternal(t, e) {
    if (Array.isArray(t)) {
      const n = t.length,
        s = new Array(n)
      for (let r = 0; r < n; ++r) s[r] = U(this, t[r], e)
      return s
    }
    return U(this, t, e)
  }
  onceInternal(t, e) {
    let n
    if (Array.isArray(t)) {
      const s = t.length
      n = new Array(s)
      for (let r = 0; r < s; ++r) n[r] = Ts(this, t[r], e)
    } else n = Ts(this, t, e)
    return ((e.ol_key = n), n)
  }
  unInternal(t, e) {
    const n = e.ol_key
    if (n) Uc(n)
    else if (Array.isArray(t)) for (let s = 0, r = t.length; s < r; ++s) this.removeEventListener(t[s], e)
    else this.removeEventListener(t, e)
  }
}
Ii.prototype.on
Ii.prototype.once
Ii.prototype.un
function Uc(i) {
  if (Array.isArray(i)) for (let t = 0, e = i.length; t < e; ++t) et(i[t])
  else et(i)
}
function X() {
  throw new Error('Unimplemented abstract method.')
}
let Zc = 0
function Ct(i) {
  return i.ol_uid || (i.ol_uid = String(++Zc))
}
let oa = class extends We {
    constructor(t, e, n) {
      ;(super(t), (this.key = e), (this.oldValue = n))
    }
  },
  xe = class extends Ii {
    constructor(t) {
      ;(super(),
        this.on,
        this.once,
        this.un,
        Ct(this),
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
      let n
      ;((n = `change:${t}`),
        this.hasListener(n) && this.dispatchEvent(new oa(n, t, e)),
        (n = di.PROPERTYCHANGE),
        this.hasListener(n) && this.dispatchEvent(new oa(n, t, e)))
    }
    addChangeListener(t, e) {
      this.addEventListener(`change:${t}`, e)
    }
    removeChangeListener(t, e) {
      this.removeEventListener(`change:${t}`, e)
    }
    set(t, e, n) {
      const s = this.values_ || (this.values_ = {})
      if (n) s[t] = e
      else {
        const r = s[t]
        ;((s[t] = e), r !== e && this.notify(t, r))
      }
    }
    setProperties(t, e) {
      for (const n in t) this.set(n, t[n], e)
    }
    applyProperties(t) {
      t.values_ && Object.assign(this.values_ || (this.values_ = {}), t.values_)
    }
    unset(t, e) {
      if (this.values_ && t in this.values_) {
        const n = this.values_[t]
        ;(delete this.values_[t], Vc(this.values_) && (this.values_ = null), e || this.notify(t, n))
      }
    }
  }
const Nt = { ADD: 'add', REMOVE: 'remove' },
  aa = { LENGTH: 'length' }
let Zi = class extends We {
    constructor(t, e, n) {
      ;(super(t), (this.element = e), (this.index = n))
    }
  },
  fe = class extends xe {
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
        for (let n = 0, s = this.array_.length; n < s; ++n) this.assertUnique_(this.array_[n], n)
      this.updateLength_()
    }
    clear() {
      for (; this.getLength() > 0; ) this.pop()
    }
    extend(t) {
      for (let e = 0, n = t.length; e < n; ++e) this.push(t[e])
      return this
    }
    forEach(t) {
      const e = this.array_
      for (let n = 0, s = e.length; n < s; ++n) t(e[n], n, e)
    }
    getArray() {
      return this.array_
    }
    item(t) {
      return this.array_[t]
    }
    getLength() {
      return this.get(aa.LENGTH)
    }
    insertAt(t, e) {
      if (t < 0 || t > this.getLength()) throw new Error('Index out of bounds: ' + t)
      ;(this.unique_ && this.assertUnique_(e),
        this.array_.splice(t, 0, e),
        this.updateLength_(),
        this.dispatchEvent(new Zi(Nt.ADD, e, t)))
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
      for (let n = 0, s = e.length; n < s; ++n) if (e[n] === t) return this.removeAt(n)
    }
    removeAt(t) {
      if (t < 0 || t >= this.getLength()) return
      const e = this.array_[t]
      return (this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(new Zi(Nt.REMOVE, e, t)), e)
    }
    setAt(t, e) {
      const n = this.getLength()
      if (t >= n) {
        this.insertAt(t, e)
        return
      }
      if (t < 0) throw new Error('Index out of bounds: ' + t)
      this.unique_ && this.assertUnique_(e, t)
      const s = this.array_[t]
      ;((this.array_[t] = e),
        this.dispatchEvent(new Zi(Nt.REMOVE, s, t)),
        this.dispatchEvent(new Zi(Nt.ADD, e, t)))
    }
    updateLength_() {
      this.set(aa.LENGTH, this.array_.length)
    }
    assertUnique_(t, e) {
      for (let n = 0, s = this.array_.length; n < s; ++n)
        if (this.array_[n] === t && n !== e) throw new jl(58)
    }
  }
function $(i, t) {
  if (!i) throw new jl(t)
}
const Ne =
    typeof navigator < 'u' && typeof navigator.userAgent < 'u' ? navigator.userAgent.toLowerCase() : '',
  Kc = Ne.includes('firefox'),
  $c = Ne.includes('safari') && !Ne.includes('chrom')
$c && (Ne.includes('version/15.4') || /cpu (os|iphone os) 15_4 like mac os x/.test(Ne))
const qc = Ne.includes('webkit') && !Ne.includes('edge'),
  Gl = Ne.includes('macintosh'),
  Xl = typeof devicePixelRatio < 'u' ? devicePixelRatio : 1,
  zl = typeof WorkerGlobalScope < 'u' && typeof OffscreenCanvas < 'u' && self instanceof WorkerGlobalScope,
  Hc = typeof Image < 'u' && Image.prototype.decode,
  Wl = (function () {
    let i = !1
    try {
      const t = Object.defineProperty({}, 'passive', {
        get: function () {
          i = !0
        },
      })
      ;(window.addEventListener('_', null, t), window.removeEventListener('_', null, t))
    } catch {}
    return i
  })()
new Array(6)
function kn() {
  return [1, 0, 0, 1, 0, 0]
}
function Ot(i, t) {
  const e = t[0],
    n = t[1]
  return ((t[0] = i[0] * e + i[2] * n + i[4]), (t[1] = i[1] * e + i[3] * n + i[5]), t)
}
function fi(i, t, e, n, s, r, o, a) {
  const l = Math.sin(r),
    h = Math.cos(r)
  return (
    (i[0] = n * h),
    (i[1] = s * l),
    (i[2] = -n * l),
    (i[3] = s * h),
    (i[4] = o * n * h - a * n * l + t),
    (i[5] = o * s * l + a * s * h + e),
    i
  )
}
function Yl(i, t) {
  const e = Jc(t)
  $(e !== 0, 32)
  const n = t[0],
    s = t[1],
    r = t[2],
    o = t[3],
    a = t[4],
    l = t[5]
  return (
    (i[0] = o / e),
    (i[1] = -s / e),
    (i[2] = -r / e),
    (i[3] = n / e),
    (i[4] = (r * l - o * a) / e),
    (i[5] = -(n * l - s * a) / e),
    i
  )
}
function Jc(i) {
  return i[0] * i[3] - i[1] * i[2]
}
let la
function Qc(i) {
  const t = 'matrix(' + i.join(', ') + ')'
  if (zl) return t
  const e = la || (la = document.createElement('div'))
  return ((e.style.transform = t), e.style.transform)
}
const lt = { UNKNOWN: 0, INTERSECTING: 1, ABOVE: 2, RIGHT: 4, BELOW: 8, LEFT: 16 }
function ha(i) {
  const t = on()
  for (let e = 0, n = i.length; e < n; ++e) ps(t, i[e])
  return t
}
function tu(i, t) {
  return t ? ((t[0] = i[0]), (t[1] = i[1]), (t[2] = i[2]), (t[3] = i[3]), t) : i.slice()
}
function Bl(i, t, e) {
  let n, s
  return (
    t < i[0] ? (n = i[0] - t) : i[2] < t ? (n = t - i[2]) : (n = 0),
    e < i[1] ? (s = i[1] - e) : i[3] < e ? (s = e - i[3]) : (s = 0),
    n * n + s * s
  )
}
function co(i, t) {
  return Vl(i, t[0], t[1])
}
function eu(i, t) {
  return i[0] <= t[0] && t[2] <= i[2] && i[1] <= t[1] && t[3] <= i[3]
}
function Vl(i, t, e) {
  return i[0] <= t && t <= i[2] && i[1] <= e && e <= i[3]
}
function ca(i, t) {
  const e = i[0],
    n = i[1],
    s = i[2],
    r = i[3],
    o = t[0],
    a = t[1]
  let l = lt.UNKNOWN
  return (
    o < e ? (l = l | lt.LEFT) : o > s && (l = l | lt.RIGHT),
    a < n ? (l = l | lt.BELOW) : a > r && (l = l | lt.ABOVE),
    l === lt.UNKNOWN && (l = lt.INTERSECTING),
    l
  )
}
function on() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0]
}
function Mi(i, t, e, n, s) {
  return s ? ((s[0] = i), (s[1] = t), (s[2] = e), (s[3] = n), s) : [i, t, e, n]
}
function Us(i) {
  return Mi(1 / 0, 1 / 0, -1 / 0, -1 / 0, i)
}
function nu(i, t) {
  const e = i[0],
    n = i[1]
  return Mi(e, n, e, n, t)
}
function iu(i, t, e, n, s) {
  const r = Us(s)
  return Ul(r, i, t, e, n)
}
function Ar(i, t) {
  return i[0] == t[0] && i[2] == t[2] && i[1] == t[1] && i[3] == t[3]
}
function su(i, t) {
  return (
    t[0] < i[0] && (i[0] = t[0]),
    t[2] > i[2] && (i[2] = t[2]),
    t[1] < i[1] && (i[1] = t[1]),
    t[3] > i[3] && (i[3] = t[3]),
    i
  )
}
function ps(i, t) {
  ;(t[0] < i[0] && (i[0] = t[0]),
    t[0] > i[2] && (i[2] = t[0]),
    t[1] < i[1] && (i[1] = t[1]),
    t[1] > i[3] && (i[3] = t[1]))
}
function Ul(i, t, e, n, s) {
  for (; e < n; e += s) ru(i, t[e], t[e + 1])
  return i
}
function ru(i, t, e) {
  ;((i[0] = Math.min(i[0], t)),
    (i[1] = Math.min(i[1], e)),
    (i[2] = Math.max(i[2], t)),
    (i[3] = Math.max(i[3], e)))
}
function Zl(i, t) {
  let e
  return ((e = t(Zs(i))), e || ((e = t(Ks(i))), e) || ((e = t($s(i))), e) || ((e = t(an(i))), e) ? e : !1)
}
function Or(i) {
  let t = 0
  return (qs(i) || (t = rt(i) * se(i)), t)
}
function Zs(i) {
  return [i[0], i[1]]
}
function Ks(i) {
  return [i[2], i[1]]
}
function gi(i) {
  return [(i[0] + i[2]) / 2, (i[1] + i[3]) / 2]
}
function ou(i, t) {
  let e
  return (
    t === 'bottom-left'
      ? (e = Zs(i))
      : t === 'bottom-right'
        ? (e = Ks(i))
        : t === 'top-left'
          ? (e = an(i))
          : t === 'top-right'
            ? (e = $s(i))
            : $(!1, 13),
    e
  )
}
function Dr(i, t, e, n, s) {
  const [r, o, a, l, h, c, u, d] = kr(i, t, e, n)
  return Mi(Math.min(r, a, h, u), Math.min(o, l, c, d), Math.max(r, a, h, u), Math.max(o, l, c, d), s)
}
function kr(i, t, e, n) {
  const s = (t * n[0]) / 2,
    r = (t * n[1]) / 2,
    o = Math.cos(e),
    a = Math.sin(e),
    l = s * o,
    h = s * a,
    c = r * o,
    u = r * a,
    d = i[0],
    f = i[1]
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
function se(i) {
  return i[3] - i[1]
}
function ci(i, t, e) {
  const n = e || on()
  return (
    bi(i, t)
      ? (i[0] > t[0] ? (n[0] = i[0]) : (n[0] = t[0]),
        i[1] > t[1] ? (n[1] = i[1]) : (n[1] = t[1]),
        i[2] < t[2] ? (n[2] = i[2]) : (n[2] = t[2]),
        i[3] < t[3] ? (n[3] = i[3]) : (n[3] = t[3]))
      : Us(n),
    n
  )
}
function an(i) {
  return [i[0], i[3]]
}
function $s(i) {
  return [i[2], i[3]]
}
function rt(i) {
  return i[2] - i[0]
}
function bi(i, t) {
  return i[0] <= t[2] && i[2] >= t[0] && i[1] <= t[3] && i[3] >= t[1]
}
function qs(i) {
  return i[2] < i[0] || i[3] < i[1]
}
function au(i, t) {
  return t ? ((t[0] = i[0]), (t[1] = i[1]), (t[2] = i[2]), (t[3] = i[3]), t) : i
}
function lu(i, t, e) {
  let n = !1
  const s = ca(i, t),
    r = ca(i, e)
  if (s === lt.INTERSECTING || r === lt.INTERSECTING) n = !0
  else {
    const o = i[0],
      a = i[1],
      l = i[2],
      h = i[3],
      c = t[0],
      u = t[1],
      d = e[0],
      f = e[1],
      g = (f - u) / (d - c)
    let _, m
    ;(r & lt.ABOVE && !(s & lt.ABOVE) && ((_ = d - (f - h) / g), (n = _ >= o && _ <= l)),
      !n && r & lt.RIGHT && !(s & lt.RIGHT) && ((m = f - (d - l) * g), (n = m >= a && m <= h)),
      !n && r & lt.BELOW && !(s & lt.BELOW) && ((_ = d - (f - a) / g), (n = _ >= o && _ <= l)),
      !n && r & lt.LEFT && !(s & lt.LEFT) && ((m = f - (d - o) * g), (n = m >= a && m <= h)))
  }
  return n
}
const uo = {
  radians: 6370997 / (2 * Math.PI),
  degrees: (2 * Math.PI * 6370997) / 360,
  ft: 0.3048,
  m: 1,
  'us-ft': 1200 / 3937,
}
let Kl = class {
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
    return this.metersPerUnit_ || uo[this.units_]
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
const Pi = 6378137,
  bn = Math.PI * Pi,
  hu = [-bn, -bn, bn, bn],
  cu = [-180, -85, 180, 85],
  Ki = Pi * Math.log(Math.tan(Math.PI / 2))
let mn = class extends Kl {
  constructor(t) {
    super({
      code: t,
      units: 'm',
      extent: hu,
      global: !0,
      worldExtent: cu,
      getPointResolution: function (e, n) {
        return e / Math.cosh(n[1] / Pi)
      },
    })
  }
}
const ua = [
  new mn('EPSG:3857'),
  new mn('EPSG:102100'),
  new mn('EPSG:102113'),
  new mn('EPSG:900913'),
  new mn('http://www.opengis.net/def/crs/EPSG/0/3857'),
  new mn('http://www.opengis.net/gml/srs/epsg.xml#3857'),
]
function uu(i, t, e) {
  const n = i.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = i.slice()) : (t = new Array(n))))
  for (let s = 0; s < n; s += e) {
    t[s] = (bn * i[s]) / 180
    let r = Pi * Math.log(Math.tan((Math.PI * (+i[s + 1] + 90)) / 360))
    ;(r > Ki ? (r = Ki) : r < -Ki && (r = -Ki), (t[s + 1] = r))
  }
  return t
}
function du(i, t, e) {
  const n = i.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = i.slice()) : (t = new Array(n))))
  for (let s = 0; s < n; s += e)
    ((t[s] = (180 * i[s]) / bn), (t[s + 1] = (360 * Math.atan(Math.exp(i[s + 1] / Pi))) / Math.PI - 90))
  return t
}
const fu = 6378137,
  da = [-180, -90, 180, 90],
  gu = (Math.PI * fu) / 180
let Ve = class extends Kl {
  constructor(t, e) {
    super({
      code: t,
      units: 'degrees',
      extent: da,
      axisOrientation: e,
      global: !0,
      metersPerUnit: gu,
      worldExtent: da,
    })
  }
}
const fa = [
  new Ve('CRS:84'),
  new Ve('EPSG:4326', 'neu'),
  new Ve('urn:ogc:def:crs:OGC:1.3:CRS84'),
  new Ve('urn:ogc:def:crs:OGC:2:84'),
  new Ve('http://www.opengis.net/def/crs/OGC/1.3/CRS84'),
  new Ve('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
  new Ve('http://www.opengis.net/def/crs/EPSG/0/4326', 'neu'),
]
let Nr = {}
function _u(i) {
  return Nr[i] || Nr[i.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] || null
}
function mu(i, t) {
  Nr[i] = t
}
let Nn = {}
function Ss(i, t, e) {
  const n = i.getCode(),
    s = t.getCode()
  ;(n in Nn || (Nn[n] = {}), (Nn[n][s] = e))
}
function pu(i, t) {
  let e
  return (i in Nn && t in Nn[i] && (e = Nn[i][t]), e)
}
function ot(i, t, e) {
  return Math.min(Math.max(i, t), e)
}
function yu(i, t, e, n, s, r) {
  const o = s - e,
    a = r - n
  if (o !== 0 || a !== 0) {
    const l = ((i - e) * o + (t - n) * a) / (o * o + a * a)
    l > 1 ? ((e = s), (n = r)) : l > 0 && ((e += o * l), (n += a * l))
  }
  return jn(i, t, e, n)
}
function jn(i, t, e, n) {
  const s = e - i,
    r = n - t
  return s * s + r * r
}
function xu(i) {
  const t = i.length
  for (let n = 0; n < t; n++) {
    let s = n,
      r = Math.abs(i[n][n])
    for (let a = n + 1; a < t; a++) {
      const l = Math.abs(i[a][n])
      l > r && ((r = l), (s = a))
    }
    if (r === 0) return null
    const o = i[s]
    ;((i[s] = i[n]), (i[n] = o))
    for (let a = n + 1; a < t; a++) {
      const l = -i[a][n] / i[n][n]
      for (let h = n; h < t + 1; h++) n == h ? (i[a][h] = 0) : (i[a][h] += l * i[n][h])
    }
  }
  const e = new Array(t)
  for (let n = t - 1; n >= 0; n--) {
    e[n] = i[n][t] / i[n][n]
    for (let s = n - 1; s >= 0; s--) i[s][t] -= i[s][n] * e[n]
  }
  return e
}
function ys(i) {
  return (i * Math.PI) / 180
}
function Gn(i, t) {
  const e = i % t
  return e * t < 0 ? e + t : e
}
function Eu(i, t, e) {
  return i + e * (t - i)
}
function $l(i, t) {
  const e = Math.pow(10, t)
  return Math.round(i * e) / e
}
function $i(i, t) {
  return Math.floor($l(i, t))
}
function qi(i, t) {
  return Math.ceil($l(i, t))
}
function Cu(i, t) {
  return ((i[0] += +t[0]), (i[1] += +t[1]), i)
}
function vs(i, t) {
  let e = !0
  for (let n = i.length - 1; n >= 0; --n)
    if (i[n] != t[n]) {
      e = !1
      break
    }
  return e
}
function fo(i, t) {
  const e = Math.cos(t),
    n = Math.sin(t),
    s = i[0] * e - i[1] * n,
    r = i[1] * e + i[0] * n
  return ((i[0] = s), (i[1] = r), i)
}
function wu(i, t) {
  return ((i[0] *= t), (i[1] *= t), i)
}
function Ru(i, t) {
  if (t.canWrapX()) {
    const e = rt(t.getExtent()),
      n = Tu(i, t, e)
    n && (i[0] -= n * e)
  }
  return i
}
function Tu(i, t, e) {
  const n = t.getExtent()
  let s = 0
  return (
    t.canWrapX() && (i[0] < n[0] || i[0] > n[2]) && ((e = e || rt(n)), (s = Math.floor((i[0] - n[0]) / e))),
    s
  )
}
const Su = 63710088e-1
function ga(i, t, e) {
  e = e || Su
  const n = ys(i[1]),
    s = ys(t[1]),
    r = (s - n) / 2,
    o = ys(t[0] - i[0]) / 2,
    a = Math.sin(r) * Math.sin(r) + Math.sin(o) * Math.sin(o) * Math.cos(n) * Math.cos(s)
  return 2 * e * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
function ql(...i) {
  console.warn(...i)
}
let jr = !0
function Hl(i) {
  jr = !1
}
function go(i, t) {
  if (t !== void 0) {
    for (let e = 0, n = i.length; e < n; ++e) t[e] = i[e]
    t = t
  } else t = i.slice()
  return t
}
function Jl(i, t) {
  if (t !== void 0 && i !== t) {
    for (let e = 0, n = i.length; e < n; ++e) t[e] = i[e]
    i = t
  }
  return i
}
function vu(i) {
  ;(mu(i.getCode(), i), Ss(i, i, go))
}
function Iu(i) {
  i.forEach(vu)
}
function Kt(i) {
  return typeof i == 'string' ? _u(i) : i || null
}
function _a(i, t, e, n) {
  i = Kt(i)
  let s
  const r = i.getPointResolutionFunc()
  if (r) s = r(t, e)
  else {
    const o = i.getUnits()
    if ((o == 'degrees' && !n) || n == 'degrees') s = t
    else {
      const a = mo(i, Kt('EPSG:4326'))
      if (a === Jl && o !== 'degrees') s = t * i.getMetersPerUnit()
      else {
        let h = [e[0] - t / 2, e[1], e[0] + t / 2, e[1], e[0], e[1] - t / 2, e[0], e[1] + t / 2]
        h = a(h, h, 2)
        const c = ga(h.slice(0, 2), h.slice(2, 4)),
          u = ga(h.slice(4, 6), h.slice(6, 8))
        s = (c + u) / 2
      }
      const l = i.getMetersPerUnit()
      l !== void 0 && (s /= l)
    }
  }
  return s
}
function ma(i) {
  ;(Iu(i),
    i.forEach(function (t) {
      i.forEach(function (e) {
        t !== e && Ss(t, e, go)
      })
    }))
}
function Mu(i, t, e, n) {
  i.forEach(function (s) {
    t.forEach(function (r) {
      ;(Ss(s, r, e), Ss(r, s, n))
    })
  })
}
function _o(i, t) {
  return i ? (typeof i == 'string' ? Kt(i) : i) : Kt(t)
}
function bu(i, t) {
  return (Hl(), Ql(i, 'EPSG:4326', 'EPSG:3857'))
}
function Rn(i, t) {
  if (i === t) return !0
  const e = i.getUnits() === t.getUnits()
  return (i.getCode() === t.getCode() || mo(i, t) === go) && e
}
function mo(i, t) {
  const e = i.getCode(),
    n = t.getCode()
  let s = pu(e, n)
  return (s || (s = Jl), s)
}
function Is(i, t) {
  const e = Kt(i),
    n = Kt(t)
  return mo(e, n)
}
function Ql(i, t, e) {
  return Is(t, e)(i, void 0, i.length)
}
function Gr(i, t) {
  return i
}
function de(i, t) {
  return (
    jr &&
      !vs(i, [0, 0]) &&
      i[0] >= -180 &&
      i[0] <= 180 &&
      i[1] >= -90 &&
      i[1] <= 90 &&
      ((jr = !1),
      ql('Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.')),
    i
  )
}
function Pu(i, t) {
  return i
}
function Pn(i, t) {
  return i
}
function Lu() {
  ;(ma(ua), ma(fa), Mu(fa, ua, uu, du))
}
Lu()
function Fu(i, t, e, n, s, r) {
  r = r || []
  let o = 0
  for (let a = t; a < e; a += n) {
    const l = i[a],
      h = i[a + 1]
    ;((r[o++] = s[0] * l + s[2] * h + s[4]), (r[o++] = s[1] * l + s[3] * h + s[5]))
  }
  return (r && r.length != o && (r.length = o), r)
}
function Au(i, t, e, n, s, r, o) {
  o = o || []
  const a = Math.cos(s),
    l = Math.sin(s),
    h = r[0],
    c = r[1]
  let u = 0
  for (let d = t; d < e; d += n) {
    const f = i[d] - h,
      g = i[d + 1] - c
    ;((o[u++] = h + f * a - g * l), (o[u++] = c + f * l + g * a))
    for (let _ = d + 2; _ < d + n; ++_) o[u++] = i[_]
  }
  return (o && o.length != u && (o.length = u), o)
}
function Ou(i, t, e, n, s, r, o, a) {
  a = a || []
  const l = o[0],
    h = o[1]
  let c = 0
  for (let u = t; u < e; u += n) {
    const d = i[u] - l,
      f = i[u + 1] - h
    ;((a[c++] = l + s * d), (a[c++] = h + r * f))
    for (let g = u + 2; g < u + n; ++g) a[c++] = i[g]
  }
  return (a && a.length != c && (a.length = c), a)
}
function Du(i, t, e, n, s, r, o) {
  o = o || []
  let a = 0
  for (let l = t; l < e; l += n) {
    ;((o[a++] = i[l] + s), (o[a++] = i[l + 1] + r))
    for (let h = l + 2; h < l + n; ++h) o[a++] = i[h]
  }
  return (o && o.length != a && (o.length = a), o)
}
const pa = kn()
let ku = class extends xe {
    constructor() {
      ;(super(),
        (this.extent_ = on()),
        (this.extentRevision_ = -1),
        (this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = 0),
        (this.simplifyTransformedInternal = Bc(function (t, e, n) {
          if (!n) return this.getSimplifiedGeometry(e)
          const s = this.clone()
          return (s.applyTransform(n), s.getSimplifiedGeometry(e))
        })))
    }
    simplifyTransformed(t, e) {
      return this.simplifyTransformedInternal(this.getRevision(), t, e)
    }
    clone() {
      return X()
    }
    closestPointXY(t, e, n, s) {
      return X()
    }
    containsXY(t, e) {
      const n = this.getClosestPoint([t, e])
      return n[0] === t && n[1] === e
    }
    getClosestPoint(t, e) {
      return ((e = e || [NaN, NaN]), this.closestPointXY(t[0], t[1], e, 1 / 0), e)
    }
    intersectsCoordinate(t) {
      return this.containsXY(t[0], t[1])
    }
    computeExtent(t) {
      return X()
    }
    getExtent(t) {
      if (this.extentRevision_ != this.getRevision()) {
        const e = this.computeExtent(this.extent_)
        ;((isNaN(e[0]) || isNaN(e[1])) && Us(e), (this.extentRevision_ = this.getRevision()))
      }
      return au(this.extent_, t)
    }
    rotate(t, e) {
      X()
    }
    scale(t, e, n) {
      X()
    }
    simplify(t) {
      return this.getSimplifiedGeometry(t * t)
    }
    getSimplifiedGeometry(t) {
      return X()
    }
    getType() {
      return X()
    }
    applyTransform(t) {
      X()
    }
    intersectsExtent(t) {
      return X()
    }
    translate(t, e) {
      X()
    }
    transform(t, e) {
      const n = Kt(t),
        s =
          n.getUnits() == 'tile-pixels'
            ? function (r, o, a) {
                const l = n.getExtent(),
                  h = n.getWorldExtent(),
                  c = se(h) / se(l)
                return (fi(pa, h[0], h[3], c, -c, 0, 0, 0), Fu(r, 0, r.length, a, pa, o), Is(n, e)(r, o, a))
              }
            : Is(n, e)
      return (this.applyTransform(s), this)
    }
  },
  po = class extends ku {
    constructor() {
      ;(super(), (this.layout = 'XY'), (this.stride = 2), (this.flatCoordinates = null))
    }
    computeExtent(t) {
      return iu(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
    }
    getCoordinates() {
      return X()
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
      ;((this.stride = ya(t)), (this.layout = t), (this.flatCoordinates = e))
    }
    setCoordinates(t, e) {
      X()
    }
    setLayout(t, e, n) {
      let s
      if (t) s = ya(t)
      else {
        for (let r = 0; r < n; ++r) {
          if (e.length === 0) {
            ;((this.layout = 'XY'), (this.stride = 2))
            return
          }
          e = e[0]
        }
        ;((s = e.length), (t = Nu(s)))
      }
      ;((this.layout = t), (this.stride = s))
    }
    applyTransform(t) {
      this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed())
    }
    rotate(t, e) {
      const n = this.getFlatCoordinates()
      if (n) {
        const s = this.getStride()
        ;(Au(n, 0, n.length, s, t, e, n), this.changed())
      }
    }
    scale(t, e, n) {
      ;(e === void 0 && (e = t), n || (n = gi(this.getExtent())))
      const s = this.getFlatCoordinates()
      if (s) {
        const r = this.getStride()
        ;(Ou(s, 0, s.length, r, t, e, n, s), this.changed())
      }
    }
    translate(t, e) {
      const n = this.getFlatCoordinates()
      if (n) {
        const s = this.getStride()
        ;(Du(n, 0, n.length, s, t, e, n), this.changed())
      }
    }
  }
function Nu(i) {
  let t
  return (i == 2 ? (t = 'XY') : i == 3 ? (t = 'XYZ') : i == 4 && (t = 'XYZM'), t)
}
function ya(i) {
  let t
  return (i == 'XY' ? (t = 2) : i == 'XYZ' || i == 'XYM' ? (t = 3) : i == 'XYZM' && (t = 4), t)
}
function xa(i, t, e, n, s, r, o) {
  const a = i[t],
    l = i[t + 1],
    h = i[e] - a,
    c = i[e + 1] - l
  let u
  if (h === 0 && c === 0) u = t
  else {
    const d = ((s - a) * h + (r - l) * c) / (h * h + c * c)
    if (d > 1) u = e
    else if (d > 0) {
      for (let f = 0; f < n; ++f) o[f] = Eu(i[t + f], i[e + f], d)
      o.length = n
      return
    } else u = t
  }
  for (let d = 0; d < n; ++d) o[d] = i[u + d]
  o.length = n
}
function th(i, t, e, n, s) {
  let r = i[t],
    o = i[t + 1]
  for (t += n; t < e; t += n) {
    const a = i[t],
      l = i[t + 1],
      h = jn(r, o, a, l)
    ;(h > s && (s = h), (r = a), (o = l))
  }
  return s
}
function ju(i, t, e, n, s) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((s = th(i, t, a, n, s)), (t = a))
  }
  return s
}
function eh(i, t, e, n, s, r, o, a, l, h, c) {
  if (t == e) return h
  let u, d
  if (s === 0) {
    if (((d = jn(o, a, i[t], i[t + 1])), d < h)) {
      for (u = 0; u < n; ++u) l[u] = i[t + u]
      return ((l.length = n), d)
    }
    return h
  }
  c = c || [NaN, NaN]
  let f = t + n
  for (; f < e; )
    if ((xa(i, f - n, f, n, o, a, c), (d = jn(o, a, c[0], c[1])), d < h)) {
      for (h = d, u = 0; u < n; ++u) l[u] = c[u]
      ;((l.length = n), (f += n))
    } else f += n * Math.max(((Math.sqrt(d) - Math.sqrt(h)) / s) | 0, 1)
  if ((xa(i, e - n, t, n, o, a, c), (d = jn(o, a, c[0], c[1])), d < h)) {
    for (h = d, u = 0; u < n; ++u) l[u] = c[u]
    l.length = n
  }
  return h
}
function Gu(i, t, e, n, s, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = eh(i, t, f, n, s, r, o, a, l, h, c)), (t = f))
  }
  return h
}
function Xu(i, t, e, n) {
  for (let s = 0, r = e.length; s < r; ++s) i[t++] = e[s]
  return t
}
function nh(i, t, e, n) {
  for (let s = 0, r = e.length; s < r; ++s) {
    const o = e[s]
    for (let a = 0; a < n; ++a) i[t++] = o[a]
  }
  return t
}
function zu(i, t, e, n, s) {
  s = s || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = nh(i, t, e[o], n)
    ;((s[r++] = l), (t = l))
  }
  return ((s.length = r), s)
}
function Wu(i, t, e, n, s, r, o) {
  const a = (e - t) / n
  if (a < 3) {
    for (; t < e; t += n) ((r[o++] = i[t]), (r[o++] = i[t + 1]))
    return o
  }
  const l = new Array(a)
  ;((l[0] = 1), (l[a - 1] = 1))
  const h = [t, e - n]
  let c = 0
  for (; h.length > 0; ) {
    const u = h.pop(),
      d = h.pop()
    let f = 0
    const g = i[d],
      _ = i[d + 1],
      m = i[u],
      p = i[u + 1]
    for (let y = d + n; y < u; y += n) {
      const x = i[y],
        E = i[y + 1],
        C = yu(x, E, g, _, m, p)
      C > f && ((c = y), (f = C))
    }
    f > s && ((l[(c - t) / n] = 1), d + n < c && h.push(d, c), c + n < u && h.push(c, u))
  }
  for (let u = 0; u < a; ++u) l[u] && ((r[o++] = i[t + u * n]), (r[o++] = i[t + u * n + 1]))
  return o
}
function pn(i, t) {
  return t * Math.round(i / t)
}
function Yu(i, t, e, n, s, r, o) {
  if (t == e) return o
  let a = pn(i[t], s),
    l = pn(i[t + 1], s)
  ;((t += n), (r[o++] = a), (r[o++] = l))
  let h, c
  do if (((h = pn(i[t], s)), (c = pn(i[t + 1], s)), (t += n), t == e)) return ((r[o++] = h), (r[o++] = c), o)
  while (h == a && c == l)
  for (; t < e; ) {
    const u = pn(i[t], s),
      d = pn(i[t + 1], s)
    if (((t += n), u == h && d == c)) continue
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
function Bu(i, t, e, n, s, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = Yu(i, t, c, n, s, r, o)), a.push(o), (t = c))
  }
  return o
}
function ih(i, t, e, n, s) {
  s = s !== void 0 ? s : []
  let r = 0
  for (let o = t; o < e; o += n) s[r++] = i.slice(o, o + n)
  return ((s.length = r), s)
}
function Vu(i, t, e, n, s) {
  s = s !== void 0 ? s : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((s[r++] = ih(i, t, l, n, s[r])), (t = l))
  }
  return ((s.length = r), s)
}
function sh(i, t, e, n) {
  let s = 0,
    r = i[e - n],
    o = i[e - n + 1]
  for (; t < e; t += n) {
    const a = i[t],
      l = i[t + 1]
    ;((s += o * a - r * l), (r = a), (o = l))
  }
  return s / 2
}
function Uu(i, t, e, n) {
  let s = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((s += sh(i, t, a, n)), (t = a))
  }
  return s
}
let Ea = class Xr extends po {
    constructor(t, e) {
      ;(super(),
        (this.maxDelta_ = -1),
        (this.maxDeltaRevision_ = -1),
        e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
    }
    clone() {
      return new Xr(this.flatCoordinates.slice(), this.layout)
    }
    closestPointXY(t, e, n, s) {
      return s < Bl(this.getExtent(), t, e)
        ? s
        : (this.maxDeltaRevision_ != this.getRevision() &&
            ((this.maxDelta_ = Math.sqrt(
              th(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0),
            )),
            (this.maxDeltaRevision_ = this.getRevision())),
          eh(
            this.flatCoordinates,
            0,
            this.flatCoordinates.length,
            this.stride,
            this.maxDelta_,
            !0,
            t,
            e,
            n,
            s,
          ))
    }
    getArea() {
      return sh(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
    }
    getCoordinates() {
      return ih(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
    }
    getSimplifiedGeometryInternal(t) {
      const e = []
      return (
        (e.length = Wu(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0)),
        new Xr(e, 'XY')
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
        (this.flatCoordinates.length = nh(this.flatCoordinates, 0, t, this.stride)),
        this.changed())
    }
  },
  Zu = class rh extends po {
    constructor(t, e) {
      ;(super(), this.setCoordinates(t, e))
    }
    clone() {
      const t = new rh(this.flatCoordinates.slice(), this.layout)
      return (t.applyProperties(this), t)
    }
    closestPointXY(t, e, n, s) {
      const r = this.flatCoordinates,
        o = jn(t, e, r[0], r[1])
      if (o < s) {
        const a = this.stride
        for (let l = 0; l < a; ++l) n[l] = r[l]
        return ((n.length = a), o)
      }
      return s
    }
    getCoordinates() {
      return this.flatCoordinates ? this.flatCoordinates.slice() : []
    }
    computeExtent(t) {
      return nu(this.flatCoordinates, t)
    }
    getType() {
      return 'Point'
    }
    intersectsExtent(t) {
      return Vl(t, this.flatCoordinates[0], this.flatCoordinates[1])
    }
    setCoordinates(t, e) {
      ;(this.setLayout(e, t, 0),
        this.flatCoordinates || (this.flatCoordinates = []),
        (this.flatCoordinates.length = Xu(this.flatCoordinates, 0, t, this.stride)),
        this.changed())
    }
  }
function Ku(i, t, e, n, s) {
  return !Zl(s, function (o) {
    return !qe(i, t, e, n, o[0], o[1])
  })
}
function qe(i, t, e, n, s, r) {
  let o = 0,
    a = i[e - n],
    l = i[e - n + 1]
  for (; t < e; t += n) {
    const h = i[t],
      c = i[t + 1]
    ;(l <= r
      ? c > r && (h - a) * (r - l) - (s - a) * (c - l) > 0 && o++
      : c <= r && (h - a) * (r - l) - (s - a) * (c - l) < 0 && o--,
      (a = h),
      (l = c))
  }
  return o !== 0
}
function oh(i, t, e, n, s, r) {
  if (e.length === 0 || !qe(i, t, e[0], n, s, r)) return !1
  for (let o = 1, a = e.length; o < a; ++o) if (qe(i, e[o - 1], e[o], n, s, r)) return !1
  return !0
}
function $u(i, t, e, n, s, r, o) {
  let a, l, h, c, u, d, f
  const g = s[r + 1],
    _ = []
  for (let y = 0, x = e.length; y < x; ++y) {
    const E = e[y]
    for (c = i[E - n], d = i[E - n + 1], a = t; a < E; a += n)
      ((u = i[a]),
        (f = i[a + 1]),
        ((g <= d && f <= g) || (d <= g && g <= f)) && ((h = ((g - d) / (f - d)) * (u - c) + c), _.push(h)),
        (c = u),
        (d = f))
  }
  let m = NaN,
    p = -1 / 0
  for (_.sort(ao), c = _[0], a = 1, l = _.length; a < l; ++a) {
    u = _[a]
    const y = Math.abs(u - c)
    ;(y > p && ((h = (c + u) / 2), oh(i, t, e, n, h, g) && ((m = h), (p = y))), (c = u))
  }
  return (isNaN(m) && (m = s[r]), [m, g, p])
}
function qu(i, t, e, n, s) {
  let r
  for (t += n; t < e; t += n) if (((r = s(i.slice(t - n, t), i.slice(t, t + n))), r)) return r
  return !1
}
function ah(i, t, e, n, s) {
  const r = Ul(on(), i, t, e, n)
  return bi(s, r)
    ? eu(s, r) || (r[0] >= s[0] && r[2] <= s[2]) || (r[1] >= s[1] && r[3] <= s[3])
      ? !0
      : qu(i, t, e, n, function (o, a) {
          return lu(s, o, a)
        })
    : !1
}
function lh(i, t, e, n, s) {
  return !!(
    ah(i, t, e, n, s) ||
    qe(i, t, e, n, s[0], s[1]) ||
    qe(i, t, e, n, s[0], s[3]) ||
    qe(i, t, e, n, s[2], s[1]) ||
    qe(i, t, e, n, s[2], s[3])
  )
}
function Hu(i, t, e, n, s) {
  if (!lh(i, t, e[0], n, s)) return !1
  if (e.length === 1) return !0
  for (let r = 1, o = e.length; r < o; ++r)
    if (Ku(i, e[r - 1], e[r], n, s) && !ah(i, e[r - 1], e[r], n, s)) return !1
  return !0
}
function Ju(i, t, e, n) {
  for (; t < e - n; ) {
    for (let s = 0; s < n; ++s) {
      const r = i[t + s]
      ;((i[t + s] = i[e - n + s]), (i[e - n + s] = r))
    }
    ;((t += n), (e -= n))
  }
}
function hh(i, t, e, n) {
  let s = 0,
    r = i[e - n],
    o = i[e - n + 1]
  for (; t < e; t += n) {
    const a = i[t],
      l = i[t + 1]
    ;((s += (a - r) * (l + o)), (r = a), (o = l))
  }
  return s === 0 ? void 0 : s > 0
}
function Qu(i, t, e, n, s) {
  s = s !== void 0 ? s : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = hh(i, t, a, n)
    if (r === 0) {
      if ((s && l) || (!s && !l)) return !1
    } else if ((s && !l) || (!s && l)) return !1
    t = a
  }
  return !0
}
function Ca(i, t, e, n, s) {
  s = s !== void 0 ? s : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = hh(i, t, a, n)
    ;((r === 0 ? (s && l) || (!s && !l) : (s && !l) || (!s && l)) && Ju(i, t, a, n), (t = a))
  }
  return t
}
let ch = class zr extends po {
  constructor(t, e, n) {
    ;(super(),
      (this.ends_ = []),
      (this.flatInteriorPointRevision_ = -1),
      (this.flatInteriorPoint_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      e !== void 0 && n ? (this.setFlatCoordinates(e, t), (this.ends_ = n)) : this.setCoordinates(t, e))
  }
  appendLinearRing(t) {
    ;(this.flatCoordinates
      ? Wc(this.flatCoordinates, t.getFlatCoordinates())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed())
  }
  clone() {
    const t = new zr(this.flatCoordinates.slice(), this.layout, this.ends_.slice())
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, s) {
    return s < Bl(this.getExtent(), t, e)
      ? s
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(ju(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Gu(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, n, s))
  }
  containsXY(t, e) {
    return oh(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, e)
  }
  getArea() {
    return Uu(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride)
  }
  getCoordinates(t) {
    let e
    return (
      t !== void 0
        ? ((e = this.getOrientedFlatCoordinates().slice()), Ca(e, 0, this.ends_, this.stride, t))
        : (e = this.flatCoordinates),
      Vu(e, 0, this.ends_, this.stride)
    )
  }
  getEnds() {
    return this.ends_
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const t = gi(this.getExtent())
      ;((this.flatInteriorPoint_ = $u(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, 0)),
        (this.flatInteriorPointRevision_ = this.getRevision()))
    }
    return this.flatInteriorPoint_
  }
  getInteriorPoint() {
    return new Zu(this.getFlatInteriorPoint(), 'XYM')
  }
  getLinearRingCount() {
    return this.ends_.length
  }
  getLinearRing(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new Ea(this.flatCoordinates.slice(t === 0 ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout)
  }
  getLinearRings() {
    const t = this.layout,
      e = this.flatCoordinates,
      n = this.ends_,
      s = []
    let r = 0
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = n[o],
        h = new Ea(e.slice(r, l), t)
      ;(s.push(h), (r = l))
    }
    return s
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates
      ;(Qu(t, 0, this.ends_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = Ca(
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
      n = []
    return (
      (e.length = Bu(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t), e, 0, n)),
      new zr(e, 'XY', n)
    )
  }
  getType() {
    return 'Polygon'
  }
  intersectsExtent(t) {
    return Hu(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []))
    const n = zu(this.flatCoordinates, 0, t, this.stride, this.ends_)
    ;((this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1]), this.changed())
  }
}
function wa(i) {
  if (qs(i)) throw new Error('Cannot create polygon from empty extent')
  const t = i[0],
    e = i[1],
    n = i[2],
    s = i[3],
    r = [t, e, t, s, n, s, n, e, t, e]
  return new ch(r, 'XY', [r.length])
}
const De = {
  PRERENDER: 'prerender',
  POSTRENDER: 'postrender',
  PRECOMPOSE: 'precompose',
  POSTCOMPOSE: 'postcompose',
  RENDERCOMPLETE: 'rendercomplete',
}
let Ra = class uh {
    constructor(t) {
      ;((t = t || {}), (this.color_ = t.color !== void 0 ? t.color : null))
    }
    clone() {
      const t = this.getColor()
      return new uh({ color: Array.isArray(t) ? t.slice() : t || void 0 })
    }
    getColor() {
      return this.color_
    }
    setColor(t) {
      this.color_ = t
    }
  },
  Ta = class dh {
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
      return new dh({
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
const Ke = { IDLE: 0, LOADED: 2, ERROR: 3 }
function Sa(i) {
  return i[0] > 0 && i[1] > 0
}
function td(i, t, e) {
  return (e === void 0 && (e = [0, 0]), (e[0] = (i[0] * t + 0.5) | 0), (e[1] = (i[1] * t + 0.5) | 0), e)
}
function te(i, t) {
  return Array.isArray(i) ? i : (t === void 0 ? (t = [i, i]) : ((t[0] = i), (t[1] = i)), t)
}
let ed = class fh {
  constructor(t) {
    ;((this.opacity_ = t.opacity),
      (this.rotateWithView_ = t.rotateWithView),
      (this.rotation_ = t.rotation),
      (this.scale_ = t.scale),
      (this.scaleArray_ = te(t.scale)),
      (this.displacement_ = t.displacement),
      (this.declutterMode_ = t.declutterMode))
  }
  clone() {
    const t = this.getScale()
    return new fh({
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
    return X()
  }
  getImage(t) {
    return X()
  }
  getHitDetectionImage() {
    return X()
  }
  getPixelRatio(t) {
    return 1
  }
  getImageState() {
    return X()
  }
  getImageSize() {
    return X()
  }
  getOrigin() {
    return X()
  }
  getSize() {
    return X()
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
    ;((this.scale_ = t), (this.scaleArray_ = te(t)))
  }
  listenImageChange(t) {
    X()
  }
  load() {
    X()
  }
  unlistenImageChange(t) {
    X()
  }
}
const nd = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,
  id = /^([a-z]*)$|^hsla?\(.*\)$/i
function sd(i) {
  return typeof i == 'string' ? i : gh(i)
}
function rd(i) {
  const t = document.createElement('div')
  if (((t.style.color = i), t.style.color !== '')) {
    document.body.appendChild(t)
    const e = getComputedStyle(t).color
    return (document.body.removeChild(t), e)
  }
  return ''
}
const od = (function () {
  const t = {}
  let e = 0
  return function (n) {
    let s
    if (t.hasOwnProperty(n)) s = t[n]
    else {
      if (e >= 1024) {
        let r = 0
        for (const o in t) (r++ & 3) === 0 && (delete t[o], --e)
      }
      ;((s = ad(n)), (t[n] = s), ++e)
    }
    return s
  }
})()
function Wr(i) {
  return Array.isArray(i) ? i : od(i)
}
function ad(i) {
  let t, e, n, s, r
  if ((id.exec(i) && (i = rd(i)), nd.exec(i))) {
    const o = i.length - 1
    let a
    o <= 4 ? (a = 1) : (a = 2)
    const l = o === 4 || o === 8
    ;((t = parseInt(i.substr(1 + 0 * a, a), 16)),
      (e = parseInt(i.substr(1 + 1 * a, a), 16)),
      (n = parseInt(i.substr(1 + 2 * a, a), 16)),
      l ? (s = parseInt(i.substr(1 + 3 * a, a), 16)) : (s = 255),
      a == 1 && ((t = (t << 4) + t), (e = (e << 4) + e), (n = (n << 4) + n), l && (s = (s << 4) + s)),
      (r = [t, e, n, s / 255]))
  } else
    i.startsWith('rgba(')
      ? ((r = i.slice(5, -1).split(',').map(Number)), va(r))
      : i.startsWith('rgb(')
        ? ((r = i.slice(4, -1).split(',').map(Number)), r.push(1), va(r))
        : $(!1, 14)
  return r
}
function va(i) {
  return (
    (i[0] = ot((i[0] + 0.5) | 0, 0, 255)),
    (i[1] = ot((i[1] + 0.5) | 0, 0, 255)),
    (i[2] = ot((i[2] + 0.5) | 0, 0, 255)),
    (i[3] = ot(i[3], 0, 1)),
    i
  )
}
function gh(i) {
  let t = i[0]
  t != (t | 0) && (t = (t + 0.5) | 0)
  let e = i[1]
  e != (e | 0) && (e = (e + 0.5) | 0)
  let n = i[2]
  n != (n | 0) && (n = (n + 0.5) | 0)
  const s = i[3] === void 0 ? 1 : Math.round(i[3] * 100) / 100
  return 'rgba(' + t + ',' + e + ',' + n + ',' + s + ')'
}
function Ia(i) {
  return Array.isArray(i) ? gh(i) : i
}
function je(i, t, e, n) {
  let s
  return (
    e && e.length
      ? (s = e.shift())
      : zl
        ? (s = new OffscreenCanvas(i || 300, t || 300))
        : (s = document.createElement('canvas')),
    i && (s.width = i),
    t && (s.height = t),
    s.getContext('2d', n)
  )
}
function yo(i) {
  const t = i.canvas
  ;((t.width = 1), (t.height = 1), i.clearRect(0, 0, 1, 1))
}
function Ma(i, t) {
  const e = t.parentNode
  e && e.replaceChild(i, t)
}
function Yr(i) {
  return i && i.parentNode ? i.parentNode.removeChild(i) : null
}
function ld(i) {
  for (; i.lastChild; ) i.removeChild(i.lastChild)
}
function hd(i, t) {
  const e = i.childNodes
  for (let n = 0; ; ++n) {
    const s = e[n],
      r = t[n]
    if (!s && !r) break
    if (s !== r) {
      if (!s) {
        i.appendChild(r)
        continue
      }
      if (!r) {
        ;(i.removeChild(s), --n)
        continue
      }
      i.insertBefore(r, s)
    }
  }
}
const Hi = 'ol-hidden',
  Hs = 'ol-unselectable',
  xo = 'ol-control',
  ba = 'ol-collapsed',
  Pa = '#000',
  La = 'round',
  cd = 10,
  ud = '#000',
  dd = 1,
  fd = new xe()
let gd = class _h extends ed {
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
        e = new _h({
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
        n = this.getScaleArray()
      return [t[0] / 2 - e[0] / n[0], t[1] / 2 + e[1] / n[1]]
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
        const n = this.renderOptions_,
          s = je(n.size * t, n.size * t)
        ;(this.draw_(n, s, t), (e = s.canvas), (this.canvas_[t] = e))
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
      return Ke.LOADED
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
    calculateLineJoinSize_(t, e, n) {
      if (e === 0 || this.points_ === 1 / 0 || (t !== 'bevel' && t !== 'miter')) return e
      let s = this.radius_,
        r = this.radius2_ === void 0 ? s : this.radius2_
      if (s < r) {
        const R = s
        ;((s = r), (r = R))
      }
      const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2,
        a = (2 * Math.PI) / o,
        l = r * Math.sin(a),
        h = Math.sqrt(r * r - l * l),
        c = s - h,
        u = Math.sqrt(l * l + c * c),
        d = u / l
      if (t === 'miter' && d <= n) return d * e
      const f = e / 2 / d,
        g = (e / 2) * (c / u),
        m = Math.sqrt((s + f) * (s + f) + g * g) - s
      if (this.radius2_ === void 0 || t === 'bevel') return m * 2
      const p = s * Math.sin(a),
        y = Math.sqrt(s * s - p * p),
        x = r - y,
        C = Math.sqrt(p * p + x * x) / p
      if (C <= n) {
        const R = (C * e) / 2 - r - s
        return 2 * Math.max(m, R)
      }
      return m * 2
    }
    createRenderOptions() {
      let t = La,
        e = 0,
        n = null,
        s = 0,
        r,
        o = 0
      this.stroke_ &&
        ((r = this.stroke_.getColor()),
        r === null && (r = ud),
        (r = Ia(r)),
        (o = this.stroke_.getWidth()),
        o === void 0 && (o = dd),
        (n = this.stroke_.getLineDash()),
        (s = this.stroke_.getLineDashOffset()),
        (t = this.stroke_.getLineJoin()),
        t === void 0 && (t = La),
        (e = this.stroke_.getMiterLimit()),
        e === void 0 && (e = cd))
      const a = this.calculateLineJoinSize_(t, o, e),
        l = Math.max(this.radius_, this.radius2_ || 0),
        h = Math.ceil(2 * l + a)
      return {
        strokeStyle: r,
        strokeWidth: o,
        size: h,
        lineDash: n,
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
    draw_(t, e, n) {
      if ((e.scale(n, n), e.translate(t.size / 2, t.size / 2), this.createPath_(e), this.fill_)) {
        let s = this.fill_.getColor()
        ;(s === null && (s = Pa), (e.fillStyle = Ia(s)), e.fill())
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
          n = 0
        if (
          (typeof e == 'string' && (e = Wr(e)),
          e === null ? (n = 1) : Array.isArray(e) && (n = e.length === 4 ? e[3] : 1),
          n === 0)
        ) {
          const s = je(t.size, t.size)
          ;((this.hitDetectionCanvas_ = s.canvas), this.drawHitDetectionCanvas_(t, s))
        }
      }
      this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.getImage(1))
    }
    createPath_(t) {
      let e = this.points_
      const n = this.radius_
      if (e === 1 / 0) t.arc(0, 0, n, 0, 2 * Math.PI)
      else {
        const s = this.radius2_ === void 0 ? n : this.radius2_
        this.radius2_ !== void 0 && (e *= 2)
        const r = this.angle_ - Math.PI / 2,
          o = (2 * Math.PI) / e
        for (let a = 0; a < e; a++) {
          const l = r + a * o,
            h = a % 2 === 0 ? n : s
          t.lineTo(h * Math.cos(l), h * Math.sin(l))
        }
        t.closePath()
      }
    }
    drawHitDetectionCanvas_(t, e) {
      ;(e.translate(t.size / 2, t.size / 2),
        this.createPath_(e),
        (e.fillStyle = Pa),
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
  _d = class mh extends gd {
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
        e = new mh({
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
  md = class ph {
    constructor(t) {
      ;((t = t || {}),
        (this.geometry_ = null),
        (this.geometryFunction_ = Fa),
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
        new ph({
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
            : (this.geometryFunction_ = Fa),
        (this.geometry_ = t))
    }
    setZIndex(t) {
      this.zIndex_ = t
    }
  }
function Fa(i) {
  return i.getGeometry()
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
let yh = class extends xe {
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
      n = this.getZIndex()
    return (
      (e.opacity = ot(Math.round(this.getOpacity() * 100) / 100, 0, 1)),
      (e.visible = this.getVisible()),
      (e.extent = this.getExtent()),
      (e.zIndex = n === void 0 && !e.managed ? 1 / 0 : n),
      (e.maxResolution = this.getMaxResolution()),
      (e.minResolution = Math.max(this.getMinResolution(), 0)),
      (e.minZoom = this.getMinZoom()),
      (e.maxZoom = this.getMaxZoom()),
      (this.state_ = e),
      e
    )
  }
  getLayersArray(t) {
    return X()
  }
  getLayerStatesArray(t) {
    return X()
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
    return X()
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
const Dt = { ANIMATING: 0, INTERACTING: 1 },
  Yt = { CENTER: 'center', RESOLUTION: 'resolution', ROTATION: 'rotation' },
  pd = 42,
  Eo = 256
function Aa(i, t, e) {
  return function (n, s, r, o, a) {
    if (!n) return
    if (!s && !t) return n
    const l = t ? 0 : r[0] * s,
      h = t ? 0 : r[1] * s,
      c = a ? a[0] : 0,
      u = a ? a[1] : 0
    let d = i[0] + l / 2 + c,
      f = i[2] - l / 2 + c,
      g = i[1] + h / 2 + u,
      _ = i[3] - h / 2 + u
    ;(d > f && ((d = (f + d) / 2), (f = d)), g > _ && ((g = (_ + g) / 2), (_ = g)))
    let m = ot(n[0], d, f),
      p = ot(n[1], g, _)
    if (o && e && s) {
      const y = 30 * s
      ;((m += -y * Math.log(1 + Math.max(0, d - n[0]) / y) + y * Math.log(1 + Math.max(0, n[0] - f) / y)),
        (p += -y * Math.log(1 + Math.max(0, g - n[1]) / y) + y * Math.log(1 + Math.max(0, n[1] - _) / y)))
    }
    return [m, p]
  }
}
function yd(i) {
  return i
}
function Co(i, t, e, n) {
  const s = rt(t) / e[0],
    r = se(t) / e[1]
  return n ? Math.min(i, Math.max(s, r)) : Math.min(i, Math.min(s, r))
}
function wo(i, t, e) {
  let n = Math.min(i, t)
  const s = 50
  return (
    (n *= Math.log(1 + s * Math.max(0, i / t - 1)) / s + 1),
    e && ((n = Math.max(n, e)), (n /= Math.log(1 + s * Math.max(0, e / i - 1)) / s + 1)),
    ot(n, e / 2, t * 2)
  )
}
function xd(i, t, e, n) {
  return (
    (t = t !== void 0 ? t : !0),
    function (s, r, o, a) {
      if (s !== void 0) {
        const l = i[0],
          h = i[i.length - 1],
          c = e ? Co(l, e, o, n) : l
        if (a) return t ? wo(s, c, h) : ot(s, h, c)
        const u = Math.min(c, s),
          d = Math.floor(lo(i, u, r))
        return i[d] > c && d < i.length - 1 ? i[d + 1] : i[d]
      }
    }
  )
}
function Ed(i, t, e, n, s, r) {
  return (
    (n = n !== void 0 ? n : !0),
    (e = e !== void 0 ? e : 0),
    function (o, a, l, h) {
      if (o !== void 0) {
        const c = s ? Co(t, s, l, r) : t
        if (h) return n ? wo(o, c, e) : ot(o, e, c)
        const u = 1e-9,
          d = Math.ceil(Math.log(t / c) / Math.log(i) - u),
          f = -a * (0.5 - u) + 0.5,
          g = Math.min(c, o),
          _ = Math.floor(Math.log(t / g) / Math.log(i) + f),
          m = Math.max(d, _),
          p = t / Math.pow(i, m)
        return ot(p, e, c)
      }
    }
  )
}
function Oa(i, t, e, n, s) {
  return (
    (e = e !== void 0 ? e : !0),
    function (r, o, a, l) {
      if (r !== void 0) {
        const h = n ? Co(i, n, a, s) : i
        return !e || !l ? ot(r, t, h) : wo(r, h, t)
      }
    }
  )
}
function Ro(i) {
  if (i !== void 0) return 0
}
function Da(i) {
  if (i !== void 0) return i
}
function Cd(i) {
  const t = (2 * Math.PI) / i
  return function (e, n) {
    if (n) return e
    if (e !== void 0) return ((e = Math.floor(e / t + 0.5) * t), e)
  }
}
function wd(i) {
  return (
    (i = i || ys(5)),
    function (t, e) {
      if (e) return t
      if (t !== void 0) return Math.abs(t) <= i ? 0 : t
    }
  )
}
function xh(i) {
  return Math.pow(i, 3)
}
function $n(i) {
  return 1 - xh(1 - i)
}
function Rd(i) {
  return 3 * i * i - 2 * i * i * i
}
function Td(i) {
  return i
}
const cr = 0
let Jt = class extends xe {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      (t = Object.assign({}, t)),
      (this.hints_ = [0, 0]),
      (this.animations_ = []),
      this.updateAnimationKey_,
      (this.projection_ = _o(t.projection, 'EPSG:3857')),
      (this.viewportSize_ = [100, 100]),
      (this.targetCenter_ = null),
      this.targetResolution_,
      this.targetRotation_,
      (this.nextCenter_ = null),
      this.nextResolution_,
      this.nextRotation_,
      (this.cancelAnchor_ = void 0),
      t.projection && Hl(),
      t.center && (t.center = de(t.center, this.projection_)),
      t.extent && (t.extent = Pn(t.extent, this.projection_)),
      this.applyOptions_(t))
  }
  applyOptions_(t) {
    const e = Object.assign({}, t)
    for (const a in Yt) delete e[a]
    this.setProperties(e, !0)
    const n = vd(t)
    ;((this.maxResolution_ = n.maxResolution),
      (this.minResolution_ = n.minResolution),
      (this.zoomFactor_ = n.zoomFactor),
      (this.resolutions_ = t.resolutions),
      (this.padding_ = t.padding),
      (this.minZoom_ = n.minZoom))
    const s = Sd(t),
      r = n.constraint,
      o = Id(t)
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
    const n = this.getCenterInternal()
    if (n) {
      const s = t || [0, 0, 0, 0]
      e = e || [0, 0, 0, 0]
      const r = this.getResolution(),
        o = (r / 2) * (s[3] - e[3] + e[1] - s[1]),
        a = (r / 2) * (s[0] - e[0] + e[2] - s[2])
      this.setCenterInternal([n[0] + o, n[1] - a])
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
    for (let n = 0; n < e.length; ++n) {
      let s = arguments[n]
      ;(s.center && ((s = Object.assign({}, s)), (s.center = de(s.center, this.getProjection()))),
        s.anchor && ((s = Object.assign({}, s)), (s.anchor = de(s.anchor, this.getProjection()))),
        (e[n] = s))
    }
    this.animateInternal.apply(this, e)
  }
  animateInternal(t) {
    let e = arguments.length,
      n
    e > 1 && typeof arguments[e - 1] == 'function' && ((n = arguments[e - 1]), --e)
    let s = 0
    for (; s < e && !this.isDef(); ++s) {
      const c = arguments[s]
      ;(c.center && this.setCenterInternal(c.center),
        c.zoom !== void 0 ? this.setZoom(c.zoom) : c.resolution && this.setResolution(c.resolution),
        c.rotation !== void 0 && this.setRotation(c.rotation))
    }
    if (s === e) {
      n && Ji(n, !0)
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
          easing: c.easing || Rd,
          callback: n,
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
        const d = Gn(c.rotation - l + Math.PI, 2 * Math.PI) - Math.PI
        ;((u.targetRotation = l + d), (l = u.targetRotation))
      }
      ;(Md(u) ? (u.complete = !0) : (r += u.duration), h.push(u))
    }
    ;(this.animations_.push(h), this.setHint(Dt.ANIMATING, 1), this.updateAnimations_())
  }
  getAnimating() {
    return this.hints_[Dt.ANIMATING] > 0
  }
  getInteracting() {
    return this.hints_[Dt.INTERACTING] > 0
  }
  cancelAnimations() {
    this.setHint(Dt.ANIMATING, -this.hints_[Dt.ANIMATING])
    let t
    for (let e = 0, n = this.animations_.length; e < n; ++e) {
      const s = this.animations_[e]
      if ((s[0].callback && Ji(s[0].callback, !1), !t))
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
    for (let n = this.animations_.length - 1; n >= 0; --n) {
      const s = this.animations_[n]
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
              ? Gn(l.targetRotation + Math.PI, 2 * Math.PI) - Math.PI
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
        ;((this.animations_[n] = null),
          this.setHint(Dt.ANIMATING, -1),
          (this.nextCenter_ = null),
          (this.nextResolution_ = NaN),
          (this.nextRotation_ = NaN))
        const o = s[0].callback
        o && Ji(o, !0)
      }
    }
    ;((this.animations_ = this.animations_.filter(Boolean)),
      e &&
        this.updateAnimationKey_ === void 0 &&
        (this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this))))
  }
  calculateCenterRotate(t, e) {
    let n
    const s = this.getCenterInternal()
    return (s !== void 0 && ((n = [s[0] - e[0], s[1] - e[1]]), fo(n, t - this.getRotation()), Cu(n, e)), n)
  }
  calculateCenterZoom(t, e) {
    let n
    const s = this.getCenterInternal(),
      r = this.getResolution()
    if (s !== void 0 && r !== void 0) {
      const o = e[0] - (t * (e[0] - s[0])) / r,
        a = e[1] - (t * (e[1] - s[1])) / r
      n = [o, a]
    }
    return n
  }
  getViewportSize_(t) {
    const e = this.viewportSize_
    if (t) {
      const n = e[0],
        s = e[1]
      return [
        Math.abs(n * Math.cos(t)) + Math.abs(s * Math.sin(t)),
        Math.abs(n * Math.sin(t)) + Math.abs(s * Math.cos(t)),
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
    return t && Gr(t, this.getProjection())
  }
  getCenterInternal() {
    return this.get(Yt.CENTER)
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
    return Pu(e, this.getProjection())
  }
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_()
    const e = this.getCenterInternal()
    $(e, 1)
    const n = this.getResolution()
    $(n !== void 0, 2)
    const s = this.getRotation()
    return ($(s !== void 0, 3), Dr(e, n, s, t))
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
    return this.get(Yt.RESOLUTION)
  }
  getResolutions() {
    return this.resolutions_
  }
  getResolutionForExtent(t, e) {
    return this.getResolutionForExtentInternal(Pn(t, this.getProjection()), e)
  }
  getResolutionForExtentInternal(t, e) {
    e = e || this.getViewportSizeMinusPadding_()
    const n = rt(t) / e[0],
      s = se(t) / e[1]
    return Math.max(n, s)
  }
  getResolutionForValueFunction(t) {
    t = t || 2
    const e = this.getConstrainedResolution(this.maxResolution_),
      n = this.minResolution_,
      s = Math.log(e / n) / Math.log(t)
    return function (r) {
      return e / Math.pow(t, r * s)
    }
  }
  getRotation() {
    return this.get(Yt.ROTATION)
  }
  getValueForResolutionFunction(t) {
    const e = Math.log(t || 2),
      n = this.getConstrainedResolution(this.maxResolution_),
      s = this.minResolution_,
      r = Math.log(n / s) / e
    return function (o) {
      return Math.log(n / o) / e / r
    }
  }
  getViewportSizeMinusPadding_(t) {
    let e = this.getViewportSize_(t)
    const n = this.padding_
    return (n && (e = [e[0] - n[1] - n[3], e[1] - n[0] - n[2]]), e)
  }
  getState() {
    const t = this.getProjection(),
      e = this.getResolution(),
      n = this.getRotation()
    let s = this.getCenterInternal()
    const r = this.padding_
    if (r) {
      const o = this.getViewportSizeMinusPadding_()
      s = ur(s, this.getViewportSize_(), [o[0] / 2 + r[3], o[1] / 2 + r[0]], e, n)
    }
    return {
      center: s.slice(0),
      projection: t !== void 0 ? t : null,
      resolution: e,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: n,
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
      n,
      s
    if (this.resolutions_) {
      const r = lo(this.resolutions_, t, 1)
      ;((e = r),
        (n = this.resolutions_[r]),
        r == this.resolutions_.length - 1 ? (s = 2) : (s = n / this.resolutions_[r + 1]))
    } else ((n = this.maxResolution_), (s = this.zoomFactor_))
    return e + Math.log(n / t) / Math.log(s)
  }
  getResolutionForZoom(t) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1) return 0
      const e = ot(Math.floor(t), 0, this.resolutions_.length - 2),
        n = this.resolutions_[e] / this.resolutions_[e + 1]
      return this.resolutions_[e] / Math.pow(n, ot(t - e, 0, 1))
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_)
  }
  fit(t, e) {
    let n
    if (($(Array.isArray(t) || typeof t.getSimplifiedGeometry == 'function', 24), Array.isArray(t))) {
      $(!qs(t), 25)
      const s = Pn(t, this.getProjection())
      n = wa(s)
    } else if (t.getType() === 'Circle') {
      const s = Pn(t.getExtent(), this.getProjection())
      ;((n = wa(s)), n.rotate(this.getRotation(), gi(s)))
    } else n = t
    this.fitInternal(n, e)
  }
  rotatedExtentForGeometry(t) {
    const e = this.getRotation(),
      n = Math.cos(e),
      s = Math.sin(-e),
      r = t.getFlatCoordinates(),
      o = t.getStride()
    let a = 1 / 0,
      l = 1 / 0,
      h = -1 / 0,
      c = -1 / 0
    for (let u = 0, d = r.length; u < d; u += o) {
      const f = r[u] * n - r[u + 1] * s,
        g = r[u] * s + r[u + 1] * n
      ;((a = Math.min(a, f)), (l = Math.min(l, g)), (h = Math.max(h, f)), (c = Math.max(c, g)))
    }
    return [a, l, h, c]
  }
  fitInternal(t, e) {
    e = e || {}
    let n = e.size
    n || (n = this.getViewportSizeMinusPadding_())
    const s = e.padding !== void 0 ? e.padding : [0, 0, 0, 0],
      r = e.nearest !== void 0 ? e.nearest : !1
    let o
    e.minResolution !== void 0
      ? (o = e.minResolution)
      : e.maxZoom !== void 0
        ? (o = this.getResolutionForZoom(e.maxZoom))
        : (o = 0)
    const a = this.rotatedExtentForGeometry(t)
    let l = this.getResolutionForExtentInternal(a, [n[0] - s[1] - s[3], n[1] - s[0] - s[2]])
    ;((l = isNaN(l) ? o : Math.max(l, o)), (l = this.getConstrainedResolution(l, r ? 0 : 1)))
    const h = this.getRotation(),
      c = Math.sin(h),
      u = Math.cos(h),
      d = gi(a)
    ;((d[0] += ((s[1] - s[3]) / 2) * l), (d[1] += ((s[0] - s[2]) / 2) * l))
    const f = d[0] * u - d[1] * c,
      g = d[1] * u + d[0] * c,
      _ = this.getConstrainedCenter([f, g], l),
      m = e.callback ? e.callback : Rs
    e.duration !== void 0
      ? this.animateInternal({ resolution: l, center: _, duration: e.duration, easing: e.easing }, m)
      : ((this.targetResolution_ = l), (this.targetCenter_ = _), this.applyTargetState_(!1, !0), Ji(m, !0))
  }
  centerOn(t, e, n) {
    this.centerOnInternal(de(t, this.getProjection()), e, n)
  }
  centerOnInternal(t, e, n) {
    this.setCenterInternal(ur(t, e, n, this.getResolution(), this.getRotation()))
  }
  calculateCenterShift(t, e, n, s) {
    let r
    const o = this.padding_
    if (o && t) {
      const a = this.getViewportSizeMinusPadding_(-n),
        l = ur(t, s, [a[0] / 2 + o[3], a[1] / 2 + o[0]], e, n)
      r = [t[0] - l[0], t[1] - l[1]]
    }
    return r
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0
  }
  adjustCenter(t) {
    const e = Gr(this.targetCenter_, this.getProjection())
    this.setCenter([e[0] + t[0], e[1] + t[1]])
  }
  adjustCenterInternal(t) {
    const e = this.targetCenter_
    this.setCenterInternal([e[0] + t[0], e[1] + t[1]])
  }
  adjustResolution(t, e) {
    ;((e = e && de(e, this.getProjection())), this.adjustResolutionInternal(t, e))
  }
  adjustResolutionInternal(t, e) {
    const n = this.getAnimating() || this.getInteracting(),
      s = this.getViewportSize_(this.getRotation()),
      r = this.constraints_.resolution(this.targetResolution_ * t, 0, s, n)
    ;(e && (this.targetCenter_ = this.calculateCenterZoom(r, e)),
      (this.targetResolution_ *= t),
      this.applyTargetState_())
  }
  adjustZoom(t, e) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -t), e)
  }
  adjustRotation(t, e) {
    ;(e && (e = de(e, this.getProjection())), this.adjustRotationInternal(t, e))
  }
  adjustRotationInternal(t, e) {
    const n = this.getAnimating() || this.getInteracting(),
      s = this.constraints_.rotation(this.targetRotation_ + t, n)
    ;(e && (this.targetCenter_ = this.calculateCenterRotate(s, e)),
      (this.targetRotation_ += t),
      this.applyTargetState_())
  }
  setCenter(t) {
    this.setCenterInternal(t && de(t, this.getProjection()))
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
    const n = this.getAnimating() || this.getInteracting() || e,
      s = this.constraints_.rotation(this.targetRotation_, n),
      r = this.getViewportSize_(s),
      o = this.constraints_.resolution(this.targetResolution_, 0, r, n),
      a = this.constraints_.center(
        this.targetCenter_,
        o,
        r,
        n,
        this.calculateCenterShift(this.targetCenter_, o, s, r),
      )
    ;(this.get(Yt.ROTATION) !== s && this.set(Yt.ROTATION, s),
      this.get(Yt.RESOLUTION) !== o && (this.set(Yt.RESOLUTION, o), this.set('zoom', this.getZoom(), !0)),
      (!a || !this.get(Yt.CENTER) || !vs(this.get(Yt.CENTER), a)) && this.set(Yt.CENTER, a),
      this.getAnimating() && !t && this.cancelAnimations(),
      (this.cancelAnchor_ = void 0))
  }
  resolveConstraints(t, e, n) {
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
    ;((n = n || (t === 0 ? this.cancelAnchor_ : void 0)),
      (this.cancelAnchor_ = void 0),
      (this.getResolution() !== a ||
        this.getRotation() !== r ||
        !this.getCenterInternal() ||
        !vs(this.getCenterInternal(), l)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({ rotation: r, center: l, resolution: a, duration: t, easing: $n, anchor: n })))
  }
  beginInteraction() {
    ;(this.resolveConstraints(0), this.setHint(Dt.INTERACTING, 1))
  }
  endInteraction(t, e, n) {
    ;((n = n && de(n, this.getProjection())), this.endInteractionInternal(t, e, n))
  }
  endInteractionInternal(t, e, n) {
    this.getInteracting() && (this.setHint(Dt.INTERACTING, -1), this.resolveConstraints(t, e, n))
  }
  getConstrainedCenter(t, e) {
    const n = this.getViewportSize_(this.getRotation())
    return this.constraints_.center(t, e || this.getResolution(), n)
  }
  getConstrainedZoom(t, e) {
    const n = this.getResolutionForZoom(t)
    return this.getZoomForResolution(this.getConstrainedResolution(n, e))
  }
  getConstrainedResolution(t, e) {
    e = e || 0
    const n = this.getViewportSize_(this.getRotation())
    return this.constraints_.resolution(t, e, n)
  }
}
function Ji(i, t) {
  setTimeout(function () {
    i(t)
  }, 0)
}
function Sd(i) {
  if (i.extent !== void 0) {
    const e = i.smoothExtentConstraint !== void 0 ? i.smoothExtentConstraint : !0
    return Aa(i.extent, i.constrainOnlyCenter, e)
  }
  const t = _o(i.projection, 'EPSG:3857')
  if (i.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice()
    return ((e[0] = -1 / 0), (e[2] = 1 / 0), Aa(e, !1, !1))
  }
  return yd
}
function vd(i) {
  let t,
    e,
    n,
    o = i.minZoom !== void 0 ? i.minZoom : cr,
    a = i.maxZoom !== void 0 ? i.maxZoom : 28
  const l = i.zoomFactor !== void 0 ? i.zoomFactor : 2,
    h = i.multiWorld !== void 0 ? i.multiWorld : !1,
    c = i.smoothResolutionConstraint !== void 0 ? i.smoothResolutionConstraint : !0,
    u = i.showFullExtent !== void 0 ? i.showFullExtent : !1,
    d = _o(i.projection, 'EPSG:3857'),
    f = d.getExtent()
  let g = i.constrainOnlyCenter,
    _ = i.extent
  if ((!h && !_ && d.isGlobal() && ((g = !1), (_ = f)), i.resolutions !== void 0)) {
    const m = i.resolutions
    ;((e = m[o]),
      (n = m[a] !== void 0 ? m[a] : m[m.length - 1]),
      i.constrainResolution ? (t = xd(m, c, !g && _, u)) : (t = Oa(e, n, c, !g && _, u)))
  } else {
    const p = (f ? Math.max(rt(f), se(f)) : (360 * uo.degrees) / d.getMetersPerUnit()) / Eo / Math.pow(2, cr),
      y = p / Math.pow(2, 28 - cr)
    ;((e = i.maxResolution),
      e !== void 0 ? (o = 0) : (e = p / Math.pow(l, o)),
      (n = i.minResolution),
      n === void 0 &&
        (i.maxZoom !== void 0
          ? i.maxResolution !== void 0
            ? (n = e / Math.pow(l, a))
            : (n = p / Math.pow(l, a))
          : (n = y)),
      (a = o + Math.floor(Math.log(e / n) / Math.log(l))),
      (n = e / Math.pow(l, a - o)),
      i.constrainResolution ? (t = Ed(l, e, n, c, !g && _, u)) : (t = Oa(e, n, c, !g && _, u)))
  }
  return { constraint: t, maxResolution: e, minResolution: n, minZoom: o, zoomFactor: l }
}
function Id(i) {
  if (i.enableRotation !== void 0 ? i.enableRotation : !0) {
    const e = i.constrainRotation
    return e === void 0 || e === !0 ? wd() : e === !1 ? Da : typeof e == 'number' ? Cd(e) : Da
  }
  return Ro
}
function Md(i) {
  return !(
    (i.sourceCenter && i.targetCenter && !vs(i.sourceCenter, i.targetCenter)) ||
    i.sourceResolution !== i.targetResolution ||
    i.sourceRotation !== i.targetRotation
  )
}
function ur(i, t, e, n, s) {
  const r = Math.cos(-s)
  let o = Math.sin(-s),
    a = i[0] * r - i[1] * o,
    l = i[1] * r + i[0] * o
  ;((a += (t[0] / 2 - e[0]) * n), (l += (e[1] - t[1] / 2) * n), (o = -o))
  const h = a * r - l * o,
    c = l * r + a * o
  return [h, c]
}
let To = class extends yh {
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
    const n = t.source ? t.source : null
    this.setSource(n)
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
    ;(this.sourceChangeKey_ && (et(this.sourceChangeKey_), (this.sourceChangeKey_ = null)),
      (this.sourceReady_ = !1))
    const t = this.getSource()
    ;(t &&
      ((this.sourceChangeKey_ = U(t, j.CHANGE, this.handleSourceChange_, this)),
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
    const n = this.getMapInternal()
    ;(!t && n && (t = n.getView()),
      t instanceof Jt ? (e = { viewState: t.getState(), extent: t.calculateExtent() }) : (e = t),
      !e.layerStatesArray && n && (e.layerStatesArray = n.getLayerGroup().getLayerStatesArray()))
    let s
    e.layerStatesArray ? (s = e.layerStatesArray.find(o => o.layer === this)) : (s = this.getLayerState())
    const r = this.getExtent()
    return So(s, e.viewState) && (!r || bi(r, e.extent))
  }
  getAttributions(t) {
    if (!this.isVisible(t)) return []
    let e
    const n = this.getSource()
    if ((n && (e = n.getAttributions()), !e)) return []
    const s = t instanceof Jt ? t.getViewStateAndExtent() : t
    let r = e(s)
    return (Array.isArray(r) || (r = [r]), r)
  }
  render(t, e) {
    const n = this.getRenderer()
    return n.prepareFrame(t) ? ((this.rendered = !0), n.renderFrame(t, e)) : null
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
    ;(this.mapPrecomposeKey_ && (et(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)),
      t || this.changed(),
      this.mapRenderKey_ && (et(this.mapRenderKey_), (this.mapRenderKey_ = null)),
      t &&
        ((this.mapPrecomposeKey_ = U(
          t,
          De.PRECOMPOSE,
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
        (this.mapRenderKey_ = U(this, j.CHANGE, t.render, t)),
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
function So(i, t) {
  if (!i.visible) return !1
  const e = t.resolution
  if (e < i.minResolution || e >= i.maxResolution) return !1
  const n = t.zoom
  return n > i.minZoom && n <= i.maxZoom
}
let bd = class {
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
        const n = this.cache_[e]
        ;(t++ & 3) === 0 && !n.hasListener() && (delete this.cache_[e], --this.cacheSize_)
      }
    }
  }
  get(t, e, n) {
    const s = ka(t, e, n)
    return s in this.cache_ ? this.cache_[s] : null
  }
  set(t, e, n, s) {
    const r = ka(t, e, n)
    ;((this.cache_[r] = s), ++this.cacheSize_)
  }
  setSize(t) {
    ;((this.maxCacheSize_ = t), this.expire())
  }
}
function ka(i, t, e) {
  const n = e ? sd(e) : 'null'
  return t + ':' + i + ':' + n
}
const Eh = new bd()
function Pd(i, t, e) {
  const n = i
  let s = !0,
    r = !1,
    o = !1
  const a = [
    Ts(n, j.LOAD, function () {
      ;((o = !0), r || t())
    }),
  ]
  return (
    n.src && Hc
      ? ((r = !0),
        n
          .decode()
          .then(function () {
            s && t()
          })
          .catch(function (l) {
            s && (o ? t() : e())
          }))
      : a.push(Ts(n, j.ERROR, e)),
    function () {
      ;((s = !1), a.forEach(et))
    }
  )
}
let Ld = class extends Ii {
    constructor(t) {
      ;(super(),
        (this.ready = !0),
        (this.boundHandleImageChange_ = this.handleImageChange_.bind(this)),
        (this.layer_ = t),
        (this.declutterExecutorGroup = null))
    }
    getFeatures(t) {
      return X()
    }
    getData(t) {
      return null
    }
    prepareFrame(t) {
      return X()
    }
    renderFrame(t, e) {
      return X()
    }
    loadedTileCallback(t, e, n) {
      ;(t[e] || (t[e] = {}), (t[e][n.tileCoord.toString()] = n))
    }
    createLoadedTileFinder(t, e, n) {
      return (s, r) => {
        const o = this.loadedTileCallback.bind(this, n, s)
        return t.forEachLoadedTile(e, s, r, o)
      }
    }
    forEachFeatureAtCoordinate(t, e, n, s, r) {}
    getLayer() {
      return this.layer_
    }
    handleFontsChanged() {}
    handleImageChange_(t) {
      const e = t.target
      ;(e.getState() === Ke.LOADED || e.getState() === Ke.ERROR) && this.renderIfReadyAndVisible()
    }
    loadImage(t) {
      let e = t.getState()
      return (
        e != Ke.LOADED && e != Ke.ERROR && t.addEventListener(j.CHANGE, this.boundHandleImageChange_),
        e == Ke.IDLE && (t.load(), (e = t.getState())),
        e == Ke.LOADED
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
  Ch = class extends We {
    constructor(t, e, n, s) {
      ;(super(t), (this.inversePixelTransform = e), (this.frameState = n), (this.context = s))
    }
  },
  Tn = null
function Fd() {
  Tn = je(1, 1, void 0, { willReadFrequently: !0 })
}
let Ad = class extends Ld {
    constructor(t) {
      ;(super(t),
        (this.container = null),
        this.renderedResolution,
        (this.tempTransform = kn()),
        (this.pixelTransform = kn()),
        (this.inversePixelTransform = kn()),
        (this.context = null),
        (this.containerReused = !1),
        (this.pixelContext_ = null),
        (this.frameState = null))
    }
    getImageData(t, e, n) {
      ;(Tn || Fd(), Tn.clearRect(0, 0, 1, 1))
      let s
      try {
        ;(Tn.drawImage(t, e, n, 1, 1, 0, 0, 1, 1), (s = Tn.getImageData(0, 0, 1, 1).data))
      } catch {
        return ((Tn = null), null)
      }
      return s
    }
    getBackground(t) {
      let n = this.getLayer().getBackground()
      return (typeof n == 'function' && (n = n(t.viewState.resolution)), n || void 0)
    }
    useContainer(t, e, n) {
      const s = this.getLayer().getClassName()
      let r, o
      if (
        t &&
        t.className === s &&
        (!n || (t && t.style.backgroundColor && Ys(Wr(t.style.backgroundColor), Wr(n))))
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
        ;((a.position = 'absolute'), (a.width = '100%'), (a.height = '100%'), (o = je()))
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
        n &&
        !this.container.style.backgroundColor &&
        (this.container.style.backgroundColor = n)
    }
    clipUnrotated(t, e, n) {
      const s = an(n),
        r = $s(n),
        o = Ks(n),
        a = Zs(n)
      ;(Ot(e.coordinateToPixelTransform, s),
        Ot(e.coordinateToPixelTransform, r),
        Ot(e.coordinateToPixelTransform, o),
        Ot(e.coordinateToPixelTransform, a))
      const l = this.inversePixelTransform
      ;(Ot(l, s),
        Ot(l, r),
        Ot(l, o),
        Ot(l, a),
        t.save(),
        t.beginPath(),
        t.moveTo(Math.round(s[0]), Math.round(s[1])),
        t.lineTo(Math.round(r[0]), Math.round(r[1])),
        t.lineTo(Math.round(o[0]), Math.round(o[1])),
        t.lineTo(Math.round(a[0]), Math.round(a[1])),
        t.clip())
    }
    dispatchRenderEvent_(t, e, n) {
      const s = this.getLayer()
      if (s.hasListener(t)) {
        const r = new Ch(t, this.inversePixelTransform, n, e)
        s.dispatchEvent(r)
      }
    }
    preRender(t, e) {
      ;((this.frameState = e), this.dispatchRenderEvent_(De.PRERENDER, t, e))
    }
    postRender(t, e) {
      this.dispatchRenderEvent_(De.POSTRENDER, t, e)
    }
    getRenderTransform(t, e, n, s, r, o, a) {
      const l = r / 2,
        h = o / 2,
        c = s / e,
        u = -c,
        d = -t[0] + a,
        f = -t[1]
      return fi(this.tempTransform, l, h, c, u, -n, d, f)
    }
    disposeInternal() {
      ;(delete this.frameState, super.disposeInternal())
    }
  },
  Od = class extends xe {
    constructor(t) {
      ;(super(),
        (this.projection = Kt(t.projection)),
        (this.attributions_ = Na(t.attributions)),
        (this.attributionsCollapsible_ =
          t.attributionsCollapsible !== void 0 ? t.attributionsCollapsible : !0),
        (this.loading = !1),
        (this.state_ = t.state !== void 0 ? t.state : 'ready'),
        (this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1),
        (this.interpolate_ = !!t.interpolate),
        (this.viewResolver = null),
        (this.viewRejector = null))
      const e = this
      this.viewPromise_ = new Promise(function (n, s) {
        ;((e.viewResolver = n), (e.viewRejector = s))
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
      ;((this.attributions_ = Na(t)), this.changed())
    }
    setState(t) {
      ;((this.state_ = t), this.changed())
    }
  }
function Na(i) {
  return i
    ? Array.isArray(i)
      ? function (t) {
          return i
        }
      : typeof i == 'function'
        ? i
        : function (t) {
            return [i]
          }
    : null
}
const P = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 }
class wh extends ho {
  constructor(t, e, n) {
    ;(super(),
      (n = n || {}),
      (this.tileCoord = t),
      (this.state = e),
      (this.interimTile = null),
      (this.key = ''),
      (this.transition_ = n.transition === void 0 ? 250 : n.transition),
      (this.transitionStarts_ = {}),
      (this.interpolate = !!n.interpolate))
  }
  changed() {
    this.dispatchEvent(j.CHANGE)
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
    X()
  }
  getAlpha(t, e) {
    if (!this.transition_) return 1
    let n = this.transitionStarts_[t]
    if (!n) ((n = e), (this.transitionStarts_[t] = n))
    else if (n === -1) return 1
    const s = e - n + 1e3 / 60
    return s >= this.transition_ ? 1 : xh(s / this.transition_)
  }
  inTransition(t) {
    return this.transition_ ? this.transitionStarts_[t] !== -1 : !1
  }
  endTransition(t) {
    this.transition_ && (this.transitionStarts_[t] = -1)
  }
}
class Rh extends wh {
  constructor(t, e, n, s, r, o) {
    ;(super(t, e, o),
      (this.crossOrigin_ = s),
      (this.src_ = n),
      (this.key = n),
      (this.image_ = new Image()),
      s !== null && (this.image_.crossOrigin = s),
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
    ;((this.state = P.ERROR), this.unlistenImage_(), (this.image_ = Dd()), this.changed())
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
        (this.unlisten_ = Pd(
          this.image_,
          this.handleImageLoad_.bind(this),
          this.handleImageError_.bind(this),
        ))))
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null))
  }
}
function Dd() {
  const i = je(1, 1)
  return ((i.fillStyle = 'rgba(0,0,0,0)'), i.fillRect(0, 0, 1, 1), i.canvas)
}
class kd {
  constructor(t, e, n) {
    ;((this.decay_ = t),
      (this.minVelocity_ = e),
      (this.delay_ = n),
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
    let n = e - 3
    for (; n > 0 && this.points_[n + 2] > t; ) n -= 3
    const s = this.points_[e + 2] - this.points_[n + 2]
    if (s < 1e3 / 60) return !1
    const r = this.points_[e] - this.points_[n],
      o = this.points_[e + 1] - this.points_[n + 1]
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
class Nd extends oo {
  constructor(t) {
    ;(super(), (this.map_ = t))
  }
  dispatchRenderEvent(t, e) {
    X()
  }
  calculateMatrices2D(t) {
    const e = t.viewState,
      n = t.coordinateToPixelTransform,
      s = t.pixelToCoordinateTransform
    ;(fi(
      n,
      t.size[0] / 2,
      t.size[1] / 2,
      1 / e.resolution,
      -1 / e.resolution,
      -e.rotation,
      -e.center[0],
      -e.center[1],
    ),
      Yl(s, n))
  }
  forEachFeatureAtCoordinate(t, e, n, s, r, o, a, l) {
    let h
    const c = e.viewState
    function u(E, C, R, v) {
      return r.call(o, C, E ? R : null, v)
    }
    const d = c.projection,
      f = Ru(t.slice(), d),
      g = [[0, 0]]
    if (d.canWrapX() && s) {
      const E = d.getExtent(),
        C = rt(E)
      g.push([-C, 0], [C, 0])
    }
    const _ = e.layerStatesArray,
      m = _.length,
      p = [],
      y = []
    for (let E = 0; E < g.length; E++)
      for (let C = m - 1; C >= 0; --C) {
        const R = _[C],
          v = R.layer
        if (v.hasRenderer() && So(R, c) && a.call(l, v)) {
          const S = v.getRenderer(),
            b = v.getSource()
          if (S && b) {
            const A = b.getWrapX() ? f : t,
              G = u.bind(null, R.managed)
            ;((y[0] = A[0] + g[E][0]),
              (y[1] = A[1] + g[E][1]),
              (h = S.forEachFeatureAtCoordinate(y, e, n, G, p)))
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
  hasFeatureAtCoordinate(t, e, n, s, r, o) {
    return this.forEachFeatureAtCoordinate(t, e, n, s, ws, this, r, o) !== void 0
  }
  getMap() {
    return this.map_
  }
  renderFrame(t) {
    X()
  }
  flushDeclutterItems(t) {}
  scheduleExpireIconCache(t) {
    Eh.canExpireCache() && t.postRenderFunctions.push(jd)
  }
}
function jd(i, t) {
  Eh.expire()
}
class Gd extends Nd {
  constructor(t) {
    ;(super(t),
      (this.fontChangeListenerKey_ = U(fd, di.PROPERTYCHANGE, t.redrawText.bind(t))),
      (this.element_ = document.createElement('div')))
    const e = this.element_.style
    ;((e.position = 'absolute'),
      (e.width = '100%'),
      (e.height = '100%'),
      (e.zIndex = '0'),
      (this.element_.className = Hs + ' ol-layers'))
    const n = t.getViewport()
    ;(n.insertBefore(this.element_, n.firstChild || null),
      (this.children_ = []),
      (this.renderedVisible_ = !0),
      (this.declutterLayers_ = []))
  }
  dispatchRenderEvent(t, e) {
    const n = this.getMap()
    if (n.hasListener(t)) {
      const s = new Ch(t, void 0, e)
      n.dispatchEvent(s)
    }
  }
  disposeInternal() {
    ;(et(this.fontChangeListenerKey_),
      this.element_.parentNode.removeChild(this.element_),
      super.disposeInternal())
  }
  renderFrame(t) {
    if (!t) {
      this.renderedVisible_ && ((this.element_.style.display = 'none'), (this.renderedVisible_ = !1))
      return
    }
    ;(this.calculateMatrices2D(t), this.dispatchRenderEvent(De.PRECOMPOSE, t))
    const e = t.layerStatesArray.sort(function (o, a) {
        return o.zIndex - a.zIndex
      }),
      n = t.viewState
    this.children_.length = 0
    const s = this.declutterLayers_
    s.length = 0
    let r = null
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o]
      t.layerIndex = o
      const h = l.layer,
        c = h.getSourceState()
      if (!So(l, n) || (c != 'ready' && c != 'undefined')) {
        h.unrender()
        continue
      }
      const u = h.render(t, r)
      u && (u !== r && (this.children_.push(u), (r = u)), 'getDeclutter' in h && s.push(h))
    }
    ;(this.flushDeclutterItems(t),
      hd(this.element_, this.children_),
      this.dispatchRenderEvent(De.POSTCOMPOSE, t),
      this.renderedVisible_ || ((this.element_.style.display = ''), (this.renderedVisible_ = !0)),
      this.scheduleExpireIconCache(t))
  }
  flushDeclutterItems(t) {
    const e = this.declutterLayers_
    for (let n = e.length - 1; n >= 0; --n) e[n].renderDeclutter(t)
    e.length = 0
  }
}
class Fe extends We {
  constructor(t, e) {
    ;(super(t), (this.layer = e))
  }
}
const dr = { LAYERS: 'layers' }
class qn extends yh {
  constructor(t) {
    t = t || {}
    const e = Object.assign({}, t)
    delete e.layers
    let n = t.layers
    ;(super(e),
      this.on,
      this.once,
      this.un,
      (this.layersListenerKeys_ = []),
      (this.listenerKeys_ = {}),
      this.addChangeListener(dr.LAYERS, this.handleLayersChanged_),
      n
        ? Array.isArray(n)
          ? (n = new fe(n.slice(), { unique: !0 }))
          : $(typeof n.getArray == 'function', 43)
        : (n = new fe(void 0, { unique: !0 })),
      this.setLayers(n))
  }
  handleLayerChange_() {
    this.changed()
  }
  handleLayersChanged_() {
    ;(this.layersListenerKeys_.forEach(et), (this.layersListenerKeys_.length = 0))
    const t = this.getLayers()
    this.layersListenerKeys_.push(
      U(t, Nt.ADD, this.handleLayersAdd_, this),
      U(t, Nt.REMOVE, this.handleLayersRemove_, this),
    )
    for (const n in this.listenerKeys_) this.listenerKeys_[n].forEach(et)
    Vs(this.listenerKeys_)
    const e = t.getArray()
    for (let n = 0, s = e.length; n < s; n++) {
      const r = e[n]
      ;(this.registerLayerListeners_(r), this.dispatchEvent(new Fe('addlayer', r)))
    }
    this.changed()
  }
  registerLayerListeners_(t) {
    const e = [
      U(t, di.PROPERTYCHANGE, this.handleLayerChange_, this),
      U(t, j.CHANGE, this.handleLayerChange_, this),
    ]
    ;(t instanceof qn &&
      e.push(
        U(t, 'addlayer', this.handleLayerGroupAdd_, this),
        U(t, 'removelayer', this.handleLayerGroupRemove_, this),
      ),
      (this.listenerKeys_[Ct(t)] = e))
  }
  handleLayerGroupAdd_(t) {
    this.dispatchEvent(new Fe('addlayer', t.layer))
  }
  handleLayerGroupRemove_(t) {
    this.dispatchEvent(new Fe('removelayer', t.layer))
  }
  handleLayersAdd_(t) {
    const e = t.element
    ;(this.registerLayerListeners_(e), this.dispatchEvent(new Fe('addlayer', e)), this.changed())
  }
  handleLayersRemove_(t) {
    const e = t.element,
      n = Ct(e)
    ;(this.listenerKeys_[n].forEach(et),
      delete this.listenerKeys_[n],
      this.dispatchEvent(new Fe('removelayer', e)),
      this.changed())
  }
  getLayers() {
    return this.get(dr.LAYERS)
  }
  setLayers(t) {
    const e = this.getLayers()
    if (e) {
      const n = e.getArray()
      for (let s = 0, r = n.length; s < r; ++s) this.dispatchEvent(new Fe('removelayer', n[s]))
    }
    this.set(dr.LAYERS, t)
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
      n = e.length
    this.getLayers().forEach(function (o) {
      o.getLayerStatesArray(e)
    })
    const s = this.getLayerState()
    let r = s.zIndex
    !t && s.zIndex === void 0 && (r = 0)
    for (let o = n, a = e.length; o < a; o++) {
      const l = e[o]
      ;((l.opacity *= s.opacity),
        (l.visible = l.visible && s.visible),
        (l.maxResolution = Math.min(l.maxResolution, s.maxResolution)),
        (l.minResolution = Math.max(l.minResolution, s.minResolution)),
        (l.minZoom = Math.max(l.minZoom, s.minZoom)),
        (l.maxZoom = Math.min(l.maxZoom, s.maxZoom)),
        s.extent !== void 0 &&
          (l.extent !== void 0 ? (l.extent = ci(l.extent, s.extent)) : (l.extent = s.extent)),
        l.zIndex === void 0 && (l.zIndex = r))
    }
    return e
  }
  getSourceState() {
    return 'ready'
  }
}
let Sn = class extends We {
    constructor(t, e, n) {
      ;(super(t), (this.map = e), (this.frameState = n !== void 0 ? n : null))
    }
  },
  Pe = class extends Sn {
    constructor(t, e, n, s, r, o) {
      ;(super(t, e, r),
        (this.originalEvent = n),
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
const J = {
    SINGLECLICK: 'singleclick',
    CLICK: j.CLICK,
    DBLCLICK: j.DBLCLICK,
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
  Br = { POINTERMOVE: 'pointermove', POINTERDOWN: 'pointerdown' }
class Xd extends ho {
  constructor(t, e) {
    ;(super(t),
      (this.map_ = t),
      this.clickTimeoutId_,
      (this.emulateClicks_ = !1),
      (this.dragging_ = !1),
      (this.dragListenerKeys_ = []),
      (this.moveTolerance_ = e === void 0 ? 1 : e),
      (this.down_ = null))
    const n = this.map_.getViewport()
    ;((this.activePointers_ = []),
      (this.trackedTouches_ = {}),
      (this.element_ = n),
      (this.pointerdownListenerKey_ = U(n, Br.POINTERDOWN, this.handlePointerDown_, this)),
      this.originalPointerMoveEvent_,
      (this.relayedListenerKey_ = U(n, Br.POINTERMOVE, this.relayMoveEvent_, this)),
      (this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this)),
      this.element_.addEventListener(j.TOUCHMOVE, this.boundHandleTouchMove_, Wl ? { passive: !1 } : !1))
  }
  emulateClick_(t) {
    let e = new Pe(J.CLICK, this.map_, t)
    ;(this.dispatchEvent(e),
      this.clickTimeoutId_ !== void 0
        ? (clearTimeout(this.clickTimeoutId_),
          (this.clickTimeoutId_ = void 0),
          (e = new Pe(J.DBLCLICK, this.map_, t)),
          this.dispatchEvent(e))
        : (this.clickTimeoutId_ = setTimeout(() => {
            this.clickTimeoutId_ = void 0
            const n = new Pe(J.SINGLECLICK, this.map_, t)
            this.dispatchEvent(n)
          }, 250)))
  }
  updateActivePointers_(t) {
    const e = t,
      n = e.pointerId
    if (e.type == J.POINTERUP || e.type == J.POINTERCANCEL) {
      delete this.trackedTouches_[n]
      for (const s in this.trackedTouches_)
        if (this.trackedTouches_[s].target !== e.target) {
          delete this.trackedTouches_[s]
          break
        }
    } else (e.type == J.POINTERDOWN || e.type == J.POINTERMOVE) && (this.trackedTouches_[n] = e)
    this.activePointers_ = Object.values(this.trackedTouches_)
  }
  handlePointerUp_(t) {
    this.updateActivePointers_(t)
    const e = new Pe(J.POINTERUP, this.map_, t, void 0, void 0, this.activePointers_)
    ;(this.dispatchEvent(e),
      this.emulateClicks_ &&
        !e.defaultPrevented &&
        !this.dragging_ &&
        this.isMouseActionButton_(t) &&
        this.emulateClick_(this.down_),
      this.activePointers_.length === 0 &&
        (this.dragListenerKeys_.forEach(et),
        (this.dragListenerKeys_.length = 0),
        (this.dragging_ = !1),
        (this.down_ = null)))
  }
  isMouseActionButton_(t) {
    return t.button === 0
  }
  handlePointerDown_(t) {
    ;((this.emulateClicks_ = this.activePointers_.length === 0), this.updateActivePointers_(t))
    const e = new Pe(J.POINTERDOWN, this.map_, t, void 0, void 0, this.activePointers_)
    if (
      (this.dispatchEvent(e),
      (this.down_ = new PointerEvent(t.type, t)),
      Object.defineProperty(this.down_, 'target', { writable: !1, value: t.target }),
      this.dragListenerKeys_.length === 0)
    ) {
      const n = this.map_.getOwnerDocument()
      ;(this.dragListenerKeys_.push(
        U(n, J.POINTERMOVE, this.handlePointerMove_, this),
        U(n, J.POINTERUP, this.handlePointerUp_, this),
        U(this.element_, J.POINTERCANCEL, this.handlePointerUp_, this),
      ),
        this.element_.getRootNode &&
          this.element_.getRootNode() !== n &&
          this.dragListenerKeys_.push(
            U(this.element_.getRootNode(), J.POINTERUP, this.handlePointerUp_, this),
          ))
    }
  }
  handlePointerMove_(t) {
    if (this.isMoving_(t)) {
      ;(this.updateActivePointers_(t), (this.dragging_ = !0))
      const e = new Pe(J.POINTERDRAG, this.map_, t, this.dragging_, void 0, this.activePointers_)
      this.dispatchEvent(e)
    }
  }
  relayMoveEvent_(t) {
    this.originalPointerMoveEvent_ = t
    const e = !!(this.down_ && this.isMoving_(t))
    this.dispatchEvent(new Pe(J.POINTERMOVE, this.map_, t, e))
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
    ;(this.relayedListenerKey_ && (et(this.relayedListenerKey_), (this.relayedListenerKey_ = null)),
      this.element_.removeEventListener(j.TOUCHMOVE, this.boundHandleTouchMove_),
      this.pointerdownListenerKey_ &&
        (et(this.pointerdownListenerKey_), (this.pointerdownListenerKey_ = null)),
      this.dragListenerKeys_.forEach(et),
      (this.dragListenerKeys_.length = 0),
      (this.element_ = null),
      super.disposeInternal())
  }
}
const Le = {
    POSTRENDER: 'postrender',
    MOVESTART: 'movestart',
    MOVEEND: 'moveend',
    LOADSTART: 'loadstart',
    LOADEND: 'loadend',
  },
  dt = { LAYERGROUP: 'layergroup', SIZE: 'size', TARGET: 'target', VIEW: 'view' },
  Ms = 1 / 0
class zd {
  constructor(t, e) {
    ;((this.priorityFunction_ = t),
      (this.keyFunction_ = e),
      (this.elements_ = []),
      (this.priorities_ = []),
      (this.queuedElements_ = {}))
  }
  clear() {
    ;((this.elements_.length = 0), (this.priorities_.length = 0), Vs(this.queuedElements_))
  }
  dequeue() {
    const t = this.elements_,
      e = this.priorities_,
      n = t[0]
    t.length == 1 ? ((t.length = 0), (e.length = 0)) : ((t[0] = t.pop()), (e[0] = e.pop()), this.siftUp_(0))
    const s = this.keyFunction_(n)
    return (delete this.queuedElements_[s], n)
  }
  enqueue(t) {
    $(!(this.keyFunction_(t) in this.queuedElements_), 31)
    const e = this.priorityFunction_(t)
    return e != Ms
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
      n = this.priorities_,
      s = e.length,
      r = e[t],
      o = n[t],
      a = t
    for (; t < s >> 1; ) {
      const l = this.getLeftChildIndex_(t),
        h = this.getRightChildIndex_(t),
        c = h < s && n[h] < n[l] ? h : l
      ;((e[t] = e[c]), (n[t] = n[c]), (t = c))
    }
    ;((e[t] = r), (n[t] = o), this.siftDown_(a, t))
  }
  siftDown_(t, e) {
    const n = this.elements_,
      s = this.priorities_,
      r = n[e],
      o = s[e]
    for (; e > t; ) {
      const a = this.getParentIndex_(e)
      if (s[a] > o) ((n[e] = n[a]), (s[e] = s[a]), (e = a))
      else break
    }
    ;((n[e] = r), (s[e] = o))
  }
  reprioritize() {
    const t = this.priorityFunction_,
      e = this.elements_,
      n = this.priorities_
    let s = 0
    const r = e.length
    let o, a, l
    for (a = 0; a < r; ++a)
      ((o = e[a]),
        (l = t(o)),
        l == Ms ? delete this.queuedElements_[this.keyFunction_(o)] : ((n[s] = l), (e[s++] = o)))
    ;((e.length = s), (n.length = s), this.heapify_())
  }
}
class Wd extends zd {
  constructor(t, e) {
    ;(super(
      function (n) {
        return t.apply(null, n)
      },
      function (n) {
        return n[0].getKey()
      },
    ),
      (this.boundHandleTileChange_ = this.handleTileChange.bind(this)),
      (this.tileChangeCallback_ = e),
      (this.tilesLoading_ = 0),
      (this.tilesLoadingKeys_ = {}))
  }
  enqueue(t) {
    const e = super.enqueue(t)
    return (e && t[0].addEventListener(j.CHANGE, this.boundHandleTileChange_), e)
  }
  getTilesLoading() {
    return this.tilesLoading_
  }
  handleTileChange(t) {
    const e = t.target,
      n = e.getState()
    if (n === P.LOADED || n === P.ERROR || n === P.EMPTY) {
      n !== P.ERROR && e.removeEventListener(j.CHANGE, this.boundHandleTileChange_)
      const s = e.getKey()
      ;(s in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[s], --this.tilesLoading_),
        this.tileChangeCallback_())
    }
  }
  loadMoreTiles(t, e) {
    let n = 0,
      s,
      r,
      o
    for (; this.tilesLoading_ < t && n < e && this.getCount() > 0; )
      ((r = this.dequeue()[0]),
        (o = r.getKey()),
        (s = r.getState()),
        s === P.IDLE &&
          !(o in this.tilesLoadingKeys_) &&
          ((this.tilesLoadingKeys_[o] = !0), ++this.tilesLoading_, ++n, r.load()))
  }
}
function Yd(i, t, e, n, s) {
  if (!i || !(e in i.wantedTiles) || !i.wantedTiles[e][t.getKey()]) return Ms
  const r = i.viewState.center,
    o = n[0] - r[0],
    a = n[1] - r[1]
  return 65536 * Math.log(s) + Math.sqrt(o * o + a * a) / s
}
class vo extends xe {
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
    ;(Yr(this.element), super.disposeInternal())
  }
  getMap() {
    return this.map_
  }
  setMap(t) {
    this.map_ && Yr(this.element)
    for (let e = 0, n = this.listenerKeys.length; e < n; ++e) et(this.listenerKeys[e])
    ;((this.listenerKeys.length = 0),
      (this.map_ = t),
      t &&
        ((this.target_ ? this.target_ : t.getOverlayContainerStopEvent()).appendChild(this.element),
        this.render !== Rs && this.listenerKeys.push(U(t, Le.POSTRENDER, this.render, this)),
        t.render()))
  }
  render(t) {}
  setTarget(t) {
    this.target_ = typeof t == 'string' ? document.getElementById(t) : t
  }
}
class Bd extends vo {
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
      n = t.tipLabel !== void 0 ? t.tipLabel : 'Attributions',
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
      (this.toggleButton_.title = n),
      this.toggleButton_.appendChild(l),
      this.toggleButton_.addEventListener(j.CLICK, this.handleClick_.bind(this), !1))
    const h =
        e +
        ' ' +
        Hs +
        ' ' +
        xo +
        (this.collapsed_ && this.collapsible_ ? ' ' + ba : '') +
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
      n = !this.getMap()
        .getAllLayers()
        .some(s => s.getSource() && s.getSource().getAttributionsCollapsible() === !1)
    return (this.overrideCollapsible_ || this.setCollapsible(n), e)
  }
  updateElement_(t) {
    if (!t) {
      this.renderedVisible_ && ((this.element.style.display = 'none'), (this.renderedVisible_ = !1))
      return
    }
    const e = this.collectSourceAttributions_(t),
      n = e.length > 0
    if (
      (this.renderedVisible_ != n &&
        ((this.element.style.display = n ? '' : 'none'), (this.renderedVisible_ = n)),
      !Ys(e, this.renderedAttributions_))
    ) {
      ld(this.ulElement_)
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
    ;(this.element.classList.toggle(ba),
      this.collapsed_ ? Ma(this.collapseLabel_, this.label_) : Ma(this.label_, this.collapseLabel_),
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
class Vd extends vo {
  constructor(t) {
    ;((t = t || {}), super({ element: document.createElement('div'), render: t.render, target: t.target }))
    const e = t.className !== void 0 ? t.className : 'ol-rotate',
      n = t.label !== void 0 ? t.label : '⇧',
      s = t.compassClassName !== void 0 ? t.compassClassName : 'ol-compass'
    ;((this.label_ = null),
      typeof n == 'string'
        ? ((this.label_ = document.createElement('span')),
          (this.label_.className = s),
          (this.label_.textContent = n))
        : ((this.label_ = n), this.label_.classList.add(s)))
    const r = t.tipLabel ? t.tipLabel : 'Reset rotation',
      o = document.createElement('button')
    ;((o.className = e + '-reset'),
      o.setAttribute('type', 'button'),
      (o.title = r),
      o.appendChild(this.label_),
      o.addEventListener(j.CLICK, this.handleClick_.bind(this), !1))
    const a = e + ' ' + Hs + ' ' + xo,
      l = this.element
    ;((l.className = a),
      l.appendChild(o),
      (this.callResetNorth_ = t.resetNorth ? t.resetNorth : void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250),
      (this.autoHide_ = t.autoHide !== void 0 ? t.autoHide : !0),
      (this.rotation_ = void 0),
      this.autoHide_ && this.element.classList.add(Hi))
  }
  handleClick_(t) {
    ;(t.preventDefault(), this.callResetNorth_ !== void 0 ? this.callResetNorth_() : this.resetNorth_())
  }
  resetNorth_() {
    const e = this.getMap().getView()
    if (!e) return
    const n = e.getRotation()
    n !== void 0 &&
      (this.duration_ > 0 && n % (2 * Math.PI) !== 0
        ? e.animate({ rotation: 0, duration: this.duration_, easing: $n })
        : e.setRotation(0))
  }
  render(t) {
    const e = t.frameState
    if (!e) return
    const n = e.viewState.rotation
    if (n != this.rotation_) {
      const s = 'rotate(' + n + 'rad)'
      if (this.autoHide_) {
        const r = this.element.classList.contains(Hi)
        !r && n === 0 ? this.element.classList.add(Hi) : r && n !== 0 && this.element.classList.remove(Hi)
      }
      this.label_.style.transform = s
    }
    this.rotation_ = n
  }
}
class Ud extends vo {
  constructor(t) {
    ;((t = t || {}), super({ element: document.createElement('div'), target: t.target }))
    const e = t.className !== void 0 ? t.className : 'ol-zoom',
      n = t.delta !== void 0 ? t.delta : 1,
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
      c.addEventListener(j.CLICK, this.handleClick_.bind(this, n), !1))
    const u = document.createElement('button')
    ;((u.className = r),
      u.setAttribute('type', 'button'),
      (u.title = h),
      u.appendChild(typeof a == 'string' ? document.createTextNode(a) : a),
      u.addEventListener(j.CLICK, this.handleClick_.bind(this, -n), !1))
    const d = e + ' ' + Hs + ' ' + xo,
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
    const n = this.getMap().getView()
    if (!n) return
    const s = n.getZoom()
    if (s !== void 0) {
      const r = n.getConstrainedZoom(s + t)
      this.duration_ > 0
        ? (n.getAnimating() && n.cancelAnimations(),
          n.animate({ zoom: r, duration: this.duration_, easing: $n }))
        : n.setZoom(r)
    }
  }
}
function Zd(i) {
  i = i || {}
  const t = new fe()
  return (
    (i.zoom !== void 0 ? i.zoom : !0) && t.push(new Ud(i.zoomOptions)),
    (i.rotate !== void 0 ? i.rotate : !0) && t.push(new Vd(i.rotateOptions)),
    (i.attribution !== void 0 ? i.attribution : !0) && t.push(new Bd(i.attributionOptions)),
    t
  )
}
const ja = { ACTIVE: 'active' }
let Li = class extends xe {
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
    return this.get(ja.ACTIVE)
  }
  getMap() {
    return this.map_
  }
  handleEvent(t) {
    return !0
  }
  setActive(t) {
    this.set(ja.ACTIVE, t)
  }
  setMap(t) {
    this.map_ = t
  }
}
function Kd(i, t, e) {
  const n = i.getCenterInternal()
  if (n) {
    const s = [n[0] + t[0], n[1] + t[1]]
    i.animateInternal({ duration: e !== void 0 ? e : 250, easing: Td, center: i.getConstrainedCenter(s) })
  }
}
function Io(i, t, e, n) {
  const s = i.getZoom()
  if (s === void 0) return
  const r = i.getConstrainedZoom(s + t),
    o = i.getResolutionForZoom(r)
  ;(i.getAnimating() && i.cancelAnimations(),
    i.animate({ resolution: o, anchor: e, duration: n !== void 0 ? n : 250, easing: $n }))
}
class $d extends Li {
  constructor(t) {
    ;(super(),
      (t = t || {}),
      (this.delta_ = t.delta ? t.delta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250))
  }
  handleEvent(t) {
    let e = !1
    if (t.type == J.DBLCLICK) {
      const n = t.originalEvent,
        s = t.map,
        r = t.coordinate,
        o = n.shiftKey ? -this.delta_ : this.delta_,
        a = s.getView()
      ;(Io(a, o, r, this.duration_), n.preventDefault(), (e = !0))
    }
    return !e
  }
}
let Fi = class extends Li {
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
      if (t.type == J.POINTERDRAG) (this.handleDragEvent(t), t.originalEvent.preventDefault())
      else if (t.type == J.POINTERUP) {
        const n = this.handleUpEvent(t)
        this.handlingDownUpSequence = n && this.targetPointers.length > 0
      }
    } else if (t.type == J.POINTERDOWN) {
      const n = this.handleDownEvent(t)
      ;((this.handlingDownUpSequence = n), (e = this.stopDown(n)))
    } else t.type == J.POINTERMOVE && this.handleMoveEvent(t)
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
function Mo(i) {
  const t = i.length
  let e = 0,
    n = 0
  for (let s = 0; s < t; s++) ((e += i[s].clientX), (n += i[s].clientY))
  return { clientX: e / t, clientY: n / t }
}
function Vr(i) {
  const t = arguments
  return function (e) {
    let n = !0
    for (let s = 0, r = t.length; s < r && ((n = n && t[s](e)), !!n); ++s);
    return n
  }
}
const qd = function (i) {
    const t = i.originalEvent
    return t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  Hd = function (i) {
    const t = i.map.getTargetElement(),
      e = i.map.getOwnerDocument().activeElement
    return t.contains(e)
  },
  Th = function (i) {
    return i.map.getTargetElement().hasAttribute('tabindex') ? Hd(i) : !0
  },
  Jd = ws,
  Sh = function (i) {
    const t = i.originalEvent
    return t.button == 0 && !(qc && Gl && t.ctrlKey)
  },
  vh = function (i) {
    const t = i.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  Qd = function (i) {
    const t = i.originalEvent
    return Gl ? t.metaKey : t.ctrlKey
  },
  tf = function (i) {
    const t = i.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  Ih = function (i) {
    const t = i.originalEvent,
      e = t.target.tagName
    return e !== 'INPUT' && e !== 'SELECT' && e !== 'TEXTAREA' && !t.target.isContentEditable
  },
  fr = function (i) {
    const t = i.originalEvent
    return ($(t !== void 0, 56), t.pointerType == 'mouse')
  },
  ef = function (i) {
    const t = i.originalEvent
    return ($(t !== void 0, 56), t.isPrimary && t.button === 0)
  }
class nf extends Fi {
  constructor(t) {
    ;(super({ stopDown: Bs }),
      (t = t || {}),
      (this.kinetic_ = t.kinetic),
      (this.lastCentroid = null),
      this.lastPointersCount_,
      (this.panning_ = !1))
    const e = t.condition ? t.condition : Vr(vh, ef)
    ;((this.condition_ = t.onFocusOnly ? Vr(Th, e) : e), (this.noKinetic_ = !1))
  }
  handleDragEvent(t) {
    const e = t.map
    this.panning_ || ((this.panning_ = !0), e.getView().beginInteraction())
    const n = this.targetPointers,
      s = e.getEventPixel(Mo(n))
    if (n.length == this.lastPointersCount_) {
      if ((this.kinetic_ && this.kinetic_.update(s[0], s[1]), this.lastCentroid)) {
        const r = [this.lastCentroid[0] - s[0], s[1] - this.lastCentroid[1]],
          a = t.map.getView()
        ;(wu(r, a.getResolution()), fo(r, a.getRotation()), a.adjustCenterInternal(r))
      }
    } else this.kinetic_ && this.kinetic_.begin()
    ;((this.lastCentroid = s), (this.lastPointersCount_ = n.length), t.originalEvent.preventDefault())
  }
  handleUpEvent(t) {
    const e = t.map,
      n = e.getView()
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const s = this.kinetic_.getDistance(),
          r = this.kinetic_.getAngle(),
          o = n.getCenterInternal(),
          a = e.getPixelFromCoordinateInternal(o),
          l = e.getCoordinateFromPixelInternal([a[0] - s * Math.cos(r), a[1] - s * Math.sin(r)])
        n.animateInternal({ center: n.getConstrainedCenter(l), duration: 500, easing: $n })
      }
      return (this.panning_ && ((this.panning_ = !1), n.endInteraction()), !1)
    }
    return (this.kinetic_ && this.kinetic_.begin(), (this.lastCentroid = null), !0)
  }
  handleDownEvent(t) {
    if (this.targetPointers.length > 0 && this.condition_(t)) {
      const n = t.map.getView()
      return (
        (this.lastCentroid = null),
        n.getAnimating() && n.cancelAnimations(),
        this.kinetic_ && this.kinetic_.begin(),
        (this.noKinetic_ = this.targetPointers.length > 1),
        !0
      )
    }
    return !1
  }
}
class sf extends Fi {
  constructor(t) {
    ;((t = t || {}),
      super({ stopDown: Bs }),
      (this.condition_ = t.condition ? t.condition : qd),
      (this.lastAngle_ = void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250))
  }
  handleDragEvent(t) {
    if (!fr(t)) return
    const e = t.map,
      n = e.getView()
    if (n.getConstraints().rotation === Ro) return
    const s = e.getSize(),
      r = t.pixel,
      o = Math.atan2(s[1] / 2 - r[1], r[0] - s[0] / 2)
    if (this.lastAngle_ !== void 0) {
      const a = o - this.lastAngle_
      n.adjustRotationInternal(-a)
    }
    this.lastAngle_ = o
  }
  handleUpEvent(t) {
    return fr(t) ? (t.map.getView().endInteraction(this.duration_), !1) : !0
  }
  handleDownEvent(t) {
    return fr(t) && Sh(t) && this.condition_(t)
      ? (t.map.getView().beginInteraction(), (this.lastAngle_ = void 0), !0)
      : !1
  }
}
class rf extends oo {
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
      n = 'px',
      s = this.element_.style
    ;((s.left = Math.min(t[0], e[0]) + n),
      (s.top = Math.min(t[1], e[1]) + n),
      (s.width = Math.abs(e[0] - t[0]) + n),
      (s.height = Math.abs(e[1] - t[1]) + n))
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
      this.geometry_ ? this.geometry_.setCoordinates([s]) : (this.geometry_ = new ch([s])))
  }
  getGeometry() {
    return this.geometry_
  }
}
const Qi = { BOXSTART: 'boxstart', BOXDRAG: 'boxdrag', BOXEND: 'boxend', BOXCANCEL: 'boxcancel' }
class gr extends We {
  constructor(t, e, n) {
    ;(super(t), (this.coordinate = e), (this.mapBrowserEvent = n))
  }
}
class of extends Fi {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      (t = t || {}),
      (this.box_ = new rf(t.className || 'ol-dragbox')),
      (this.minArea_ = t.minArea !== void 0 ? t.minArea : 64),
      t.onBoxEnd && (this.onBoxEnd = t.onBoxEnd),
      (this.startPixel_ = null),
      (this.condition_ = t.condition ? t.condition : Sh),
      (this.boxEndCondition_ = t.boxEndCondition ? t.boxEndCondition : this.defaultBoxEndCondition))
  }
  defaultBoxEndCondition(t, e, n) {
    const s = n[0] - e[0],
      r = n[1] - e[1]
    return s * s + r * r >= this.minArea_
  }
  getGeometry() {
    return this.box_.getGeometry()
  }
  handleDragEvent(t) {
    ;(this.box_.setPixels(this.startPixel_, t.pixel), this.dispatchEvent(new gr(Qi.BOXDRAG, t.coordinate, t)))
  }
  handleUpEvent(t) {
    this.box_.setMap(null)
    const e = this.boxEndCondition_(t, this.startPixel_, t.pixel)
    return (
      e && this.onBoxEnd(t),
      this.dispatchEvent(new gr(e ? Qi.BOXEND : Qi.BOXCANCEL, t.coordinate, t)),
      !1
    )
  }
  handleDownEvent(t) {
    return this.condition_(t)
      ? ((this.startPixel_ = t.pixel),
        this.box_.setMap(t.map),
        this.box_.setPixels(this.startPixel_, this.startPixel_),
        this.dispatchEvent(new gr(Qi.BOXSTART, t.coordinate, t)),
        !0)
      : !1
  }
  onBoxEnd(t) {}
}
class af extends of {
  constructor(t) {
    t = t || {}
    const e = t.condition ? t.condition : tf
    ;(super({ condition: e, className: t.className || 'ol-dragzoom', minArea: t.minArea }),
      (this.duration_ = t.duration !== void 0 ? t.duration : 200),
      (this.out_ = t.out !== void 0 ? t.out : !1))
  }
  onBoxEnd(t) {
    const n = this.getMap().getView()
    let s = this.getGeometry()
    if (this.out_) {
      const r = n.rotatedExtentForGeometry(s),
        o = n.getResolutionForExtentInternal(r),
        a = n.getResolution() / o
      ;((s = s.clone()), s.scale(a * a))
    }
    n.fitInternal(s, { duration: this.duration_, easing: $n })
  }
}
const Ue = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', DOWN: 'ArrowDown' }
class lf extends Li {
  constructor(t) {
    ;(super(),
      (t = t || {}),
      (this.defaultCondition_ = function (e) {
        return vh(e) && Ih(e)
      }),
      (this.condition_ = t.condition !== void 0 ? t.condition : this.defaultCondition_),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100),
      (this.pixelDelta_ = t.pixelDelta !== void 0 ? t.pixelDelta : 128))
  }
  handleEvent(t) {
    let e = !1
    if (t.type == j.KEYDOWN) {
      const n = t.originalEvent,
        s = n.key
      if (this.condition_(t) && (s == Ue.DOWN || s == Ue.LEFT || s == Ue.RIGHT || s == Ue.UP)) {
        const o = t.map.getView(),
          a = o.getResolution() * this.pixelDelta_
        let l = 0,
          h = 0
        s == Ue.DOWN ? (h = -a) : s == Ue.LEFT ? (l = -a) : s == Ue.RIGHT ? (l = a) : (h = a)
        const c = [l, h]
        ;(fo(c, o.getRotation()), Kd(o, c, this.duration_), n.preventDefault(), (e = !0))
      }
    }
    return !e
  }
}
class hf extends Li {
  constructor(t) {
    ;(super(),
      (t = t || {}),
      (this.condition_ = t.condition
        ? t.condition
        : function (e) {
            return !Qd(e) && Ih(e)
          }),
      (this.delta_ = t.delta ? t.delta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100))
  }
  handleEvent(t) {
    let e = !1
    if (t.type == j.KEYDOWN || t.type == j.KEYPRESS) {
      const n = t.originalEvent,
        s = n.key
      if (this.condition_(t) && (s === '+' || s === '-')) {
        const r = t.map,
          o = s === '+' ? this.delta_ : -this.delta_,
          a = r.getView()
        ;(Io(a, o, void 0, this.duration_), n.preventDefault(), (e = !0))
      }
    }
    return !e
  }
}
class cf extends Li {
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
    const e = t.condition ? t.condition : Jd
    ;((this.condition_ = t.onFocusOnly ? Vr(Th, e) : e),
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
    if (!this.condition_(t) || t.type !== j.WHEEL) return !0
    const n = t.map,
      s = t.originalEvent
    ;(s.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.coordinate))
    let r
    if (
      (t.type == j.WHEEL &&
        ((r = s.deltaY),
        Kc && s.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (r /= Xl),
        s.deltaMode === WheelEvent.DOM_DELTA_LINE && (r *= 40)),
      r === 0)
    )
      return !1
    this.lastDelta_ = r
    const o = Date.now()
    ;(this.startTime_ === void 0 && (this.startTime_ = o),
      (!this.mode_ || o - this.startTime_ > this.trackpadEventGap_) &&
        (this.mode_ = Math.abs(r) < 4 ? 'trackpad' : 'wheel'))
    const a = n.getView()
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
      (this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, n), l)),
      !1
    )
  }
  handleWheelZoom_(t) {
    const e = t.getView()
    e.getAnimating() && e.cancelAnimations()
    let n =
      -ot(this.totalDelta_, -this.maxDelta_ * this.deltaPerZoom_, this.maxDelta_ * this.deltaPerZoom_) /
      this.deltaPerZoom_
    ;((e.getConstrainResolution() || this.constrainResolution_) && (n = n ? (n > 0 ? 1 : -1) : 0),
      Io(e, n, this.lastAnchor_, this.duration_),
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
class uf extends Fi {
  constructor(t) {
    t = t || {}
    const e = t
    ;(e.stopDown || (e.stopDown = Bs),
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
    const n = this.targetPointers[0],
      s = this.targetPointers[1],
      r = Math.atan2(s.clientY - n.clientY, s.clientX - n.clientX)
    if (this.lastAngle_ !== void 0) {
      const l = r - this.lastAngle_
      ;((this.rotationDelta_ += l),
        !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = !0),
        (e = l))
    }
    this.lastAngle_ = r
    const o = t.map,
      a = o.getView()
    a.getConstraints().rotation !== Ro &&
      ((this.anchor_ = o.getCoordinateFromPixelInternal(o.getEventPixel(Mo(this.targetPointers)))),
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
class df extends Fi {
  constructor(t) {
    t = t || {}
    const e = t
    ;(e.stopDown || (e.stopDown = Bs),
      super(e),
      (this.anchor_ = null),
      (this.duration_ = t.duration !== void 0 ? t.duration : 400),
      (this.lastDistance_ = void 0),
      (this.lastScaleDelta_ = 1))
  }
  handleDragEvent(t) {
    let e = 1
    const n = this.targetPointers[0],
      s = this.targetPointers[1],
      r = n.clientX - s.clientX,
      o = n.clientY - s.clientY,
      a = Math.sqrt(r * r + o * o)
    ;(this.lastDistance_ !== void 0 && (e = this.lastDistance_ / a), (this.lastDistance_ = a))
    const l = t.map,
      h = l.getView()
    ;(e != 1 && (this.lastScaleDelta_ = e),
      (this.anchor_ = l.getCoordinateFromPixelInternal(l.getEventPixel(Mo(this.targetPointers)))),
      l.render(),
      h.adjustResolutionInternal(e, this.anchor_))
  }
  handleUpEvent(t) {
    if (this.targetPointers.length < 2) {
      const n = t.map.getView(),
        s = this.lastScaleDelta_ > 1 ? 1 : -1
      return (n.endInteraction(this.duration_, s), !1)
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
function ff(i) {
  i = i || {}
  const t = new fe(),
    e = new kd(-0.005, 0.05, 100)
  return (
    (i.altShiftDragRotate !== void 0 ? i.altShiftDragRotate : !0) && t.push(new sf()),
    (i.doubleClickZoom !== void 0 ? i.doubleClickZoom : !0) &&
      t.push(new $d({ delta: i.zoomDelta, duration: i.zoomDuration })),
    (i.dragPan !== void 0 ? i.dragPan : !0) && t.push(new nf({ onFocusOnly: i.onFocusOnly, kinetic: e })),
    (i.pinchRotate !== void 0 ? i.pinchRotate : !0) && t.push(new uf()),
    (i.pinchZoom !== void 0 ? i.pinchZoom : !0) && t.push(new df({ duration: i.zoomDuration })),
    (i.keyboard !== void 0 ? i.keyboard : !0) &&
      (t.push(new lf()), t.push(new hf({ delta: i.zoomDelta, duration: i.zoomDuration }))),
    (i.mouseWheelZoom !== void 0 ? i.mouseWheelZoom : !0) &&
      t.push(new cf({ onFocusOnly: i.onFocusOnly, duration: i.zoomDuration })),
    (i.shiftDragZoom !== void 0 ? i.shiftDragZoom : !0) && t.push(new af({ duration: i.zoomDuration })),
    t
  )
}
function Mh(i) {
  if (i instanceof To) {
    i.setMapInternal(null)
    return
  }
  i instanceof qn && i.getLayers().forEach(Mh)
}
function bh(i, t) {
  if (i instanceof To) {
    i.setMapInternal(t)
    return
  }
  if (i instanceof qn) {
    const e = i.getLayers().getArray()
    for (let n = 0, s = e.length; n < s; ++n) bh(e[n], t)
  }
}
class gf extends xe {
  constructor(t) {
    ;(super(), (t = t || {}), this.on, this.once, this.un)
    const e = _f(t)
    ;(this.renderComplete_,
      (this.loaded_ = !0),
      (this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this)),
      (this.maxTilesLoading_ = t.maxTilesLoading !== void 0 ? t.maxTilesLoading : 16),
      (this.pixelRatio_ = t.pixelRatio !== void 0 ? t.pixelRatio : Xl),
      this.postRenderTimeoutHandle_,
      this.animationDelayKey_,
      (this.animationDelay_ = this.animationDelay_.bind(this)),
      (this.coordinateToPixelTransform_ = kn()),
      (this.pixelToCoordinateTransform_ = kn()),
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
      (this.controls = e.controls || Zd()),
      (this.interactions = e.interactions || ff({ onFocusOnly: !0 })),
      (this.overlays_ = e.overlays),
      (this.overlayIdIndex_ = {}),
      (this.renderer_ = null),
      (this.postRenderFunctions_ = []),
      (this.tileQueue_ = new Wd(this.getTilePriority.bind(this), this.handleTileChange_.bind(this))),
      this.addChangeListener(dt.LAYERGROUP, this.handleLayerGroupChanged_),
      this.addChangeListener(dt.VIEW, this.handleViewChanged_),
      this.addChangeListener(dt.SIZE, this.handleSizeChanged_),
      this.addChangeListener(dt.TARGET, this.handleTargetChanged_),
      this.setProperties(e.values))
    const n = this
    ;(t.view &&
      !(t.view instanceof Jt) &&
      t.view.then(function (s) {
        n.setView(new Jt(s))
      }),
      this.controls.addEventListener(Nt.ADD, s => {
        s.element.setMap(this)
      }),
      this.controls.addEventListener(Nt.REMOVE, s => {
        s.element.setMap(null)
      }),
      this.interactions.addEventListener(Nt.ADD, s => {
        s.element.setMap(this)
      }),
      this.interactions.addEventListener(Nt.REMOVE, s => {
        s.element.setMap(null)
      }),
      this.overlays_.addEventListener(Nt.ADD, s => {
        this.addOverlayInternal_(s.element)
      }),
      this.overlays_.addEventListener(Nt.REMOVE, s => {
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
    bh(t.layer, this)
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
  forEachFeatureAtPixel(t, e, n) {
    if (!this.frameState_ || !this.renderer_) return
    const s = this.getCoordinateFromPixelInternal(t)
    n = n !== void 0 ? n : {}
    const r = n.hitTolerance !== void 0 ? n.hitTolerance : 0,
      o = n.layerFilter !== void 0 ? n.layerFilter : ws,
      a = n.checkWrapped !== !1
    return this.renderer_.forEachFeatureAtCoordinate(s, this.frameState_, r, a, e, null, o, null)
  }
  getFeaturesAtPixel(t, e) {
    const n = []
    return (
      this.forEachFeatureAtPixel(
        t,
        function (s) {
          n.push(s)
        },
        e,
      ),
      n
    )
  }
  getAllLayers() {
    const t = []
    function e(n) {
      n.forEach(function (s) {
        s instanceof qn ? e(s.getLayers()) : t.push(s)
      })
    }
    return (e(this.getLayers()), t)
  }
  hasFeatureAtPixel(t, e) {
    if (!this.frameState_ || !this.renderer_) return !1
    const n = this.getCoordinateFromPixelInternal(t)
    e = e !== void 0 ? e : {}
    const s = e.layerFilter !== void 0 ? e.layerFilter : ws,
      r = e.hitTolerance !== void 0 ? e.hitTolerance : 0,
      o = e.checkWrapped !== !1
    return this.renderer_.hasFeatureAtCoordinate(n, this.frameState_, r, o, s, null)
  }
  getEventCoordinate(t) {
    return this.getCoordinateFromPixel(this.getEventPixel(t))
  }
  getEventCoordinateInternal(t) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(t))
  }
  getEventPixel(t) {
    const n = this.viewport_.getBoundingClientRect(),
      s = this.getSize(),
      r = n.width / s[0],
      o = n.height / s[1],
      a = 'changedTouches' in t ? t.changedTouches[0] : t
    return [(a.clientX - n.left) / r, (a.clientY - n.top) / o]
  }
  getTarget() {
    return this.get(dt.TARGET)
  }
  getTargetElement() {
    return this.targetElement_
  }
  getCoordinateFromPixel(t) {
    return Gr(this.getCoordinateFromPixelInternal(t), this.getView().getProjection())
  }
  getCoordinateFromPixelInternal(t) {
    const e = this.frameState_
    return e ? Ot(e.pixelToCoordinateTransform, t.slice()) : null
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
    return this.get(dt.LAYERGROUP)
  }
  setLayers(t) {
    const e = this.getLayerGroup()
    if (t instanceof fe) {
      e.setLayers(t)
      return
    }
    const n = e.getLayers()
    ;(n.clear(), n.extend(t))
  }
  getLayers() {
    return this.getLayerGroup().getLayers()
  }
  getLoadingOrNotReady() {
    const t = this.getLayerGroup().getLayerStatesArray()
    for (let e = 0, n = t.length; e < n; ++e) {
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
    const e = de(t, this.getView().getProjection())
    return this.getPixelFromCoordinateInternal(e)
  }
  getPixelFromCoordinateInternal(t) {
    const e = this.frameState_
    return e ? Ot(e.coordinateToPixelTransform, t.slice(0, 2)) : null
  }
  getRenderer() {
    return this.renderer_
  }
  getSize() {
    return this.get(dt.SIZE)
  }
  getView() {
    return this.get(dt.VIEW)
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
  getTilePriority(t, e, n, s) {
    return Yd(this.frameState_, t, e, n, s)
  }
  handleBrowserEvent(t, e) {
    e = e || t.type
    const n = new Pe(e, this, t)
    this.handleMapBrowserEvent(n)
  }
  handleMapBrowserEvent(t) {
    if (!this.frameState_) return
    const e = t.originalEvent,
      n = e.type
    if (n === Br.POINTERDOWN || n === j.WHEEL || n === j.KEYDOWN) {
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
        if (o[Dt.ANIMATING] || o[Dt.INTERACTING]) {
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
        ? (this.hasListener(De.RENDERCOMPLETE) && this.renderer_.dispatchRenderEvent(De.RENDERCOMPLETE, t),
          this.loaded_ === !1 && ((this.loaded_ = !0), this.dispatchEvent(new Sn(Le.LOADEND, this, t))))
        : this.loaded_ === !0 && ((this.loaded_ = !1), this.dispatchEvent(new Sn(Le.LOADSTART, this, t))))
    const n = this.postRenderFunctions_
    for (let s = 0, r = n.length; s < r; ++s) n[s](this, t)
    n.length = 0
  }
  handleSizeChanged_() {
    ;(this.getView() && !this.getView().getAnimating() && this.getView().resolveConstraints(0), this.render())
  }
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let n = 0, s = this.targetChangeHandlerKeys_.length; n < s; ++n)
        et(this.targetChangeHandlerKeys_[n])
      ;((this.targetChangeHandlerKeys_ = null),
        this.viewport_.removeEventListener(j.CONTEXTMENU, this.boundHandleBrowserEvent_),
        this.viewport_.removeEventListener(j.WHEEL, this.boundHandleBrowserEvent_),
        this.mapBrowserEventHandler_.dispose(),
        (this.mapBrowserEventHandler_ = null),
        Yr(this.viewport_))
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_)
      const n = this.targetElement_.getRootNode()
      ;(n instanceof ShadowRoot && this.resizeObserver_.unobserve(n.host), this.setSize(void 0))
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
        this.renderer_ || (this.renderer_ = new Gd(this)),
        (this.mapBrowserEventHandler_ = new Xd(this, this.moveTolerance_)))
      for (const r in J)
        this.mapBrowserEventHandler_.addEventListener(J[r], this.handleMapBrowserEvent.bind(this))
      ;(this.viewport_.addEventListener(j.CONTEXTMENU, this.boundHandleBrowserEvent_, !1),
        this.viewport_.addEventListener(j.WHEEL, this.boundHandleBrowserEvent_, Wl ? { passive: !1 } : !1))
      const n = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : e
      this.targetChangeHandlerKeys_ = [
        U(n, j.KEYDOWN, this.handleBrowserEvent, this),
        U(n, j.KEYPRESS, this.handleBrowserEvent, this),
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
      (et(this.viewPropertyListenerKey_), (this.viewPropertyListenerKey_ = null)),
      this.viewChangeListenerKey_ && (et(this.viewChangeListenerKey_), (this.viewChangeListenerKey_ = null)))
    const t = this.getView()
    ;(t &&
      (this.updateViewportSize_(),
      (this.viewPropertyListenerKey_ = U(t, di.PROPERTYCHANGE, this.handleViewPropertyChanged_, this)),
      (this.viewChangeListenerKey_ = U(t, j.CHANGE, this.handleViewPropertyChanged_, this)),
      t.resolveConstraints(0)),
      this.render())
  }
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ &&
      (this.layerGroupPropertyListenerKeys_.forEach(et), (this.layerGroupPropertyListenerKeys_ = null))
    const t = this.getLayerGroup()
    ;(t &&
      (this.handleLayerAdd_(new Fe('addlayer', t)),
      (this.layerGroupPropertyListenerKeys_ = [
        U(t, di.PROPERTYCHANGE, this.render, this),
        U(t, j.CHANGE, this.render, this),
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
    for (let e = 0, n = t.length; e < n; ++e) {
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
    Mh(t.layer)
  }
  removeOverlay(t) {
    return this.getOverlays().remove(t)
  }
  renderFrame_(t) {
    const e = this.getSize(),
      n = this.getView(),
      s = this.frameState_
    let r = null
    if (e !== void 0 && Sa(e) && n && n.isDef()) {
      const o = n.getHints(this.frameState_ ? this.frameState_.viewHints : void 0),
        a = n.getState()
      if (
        ((r = {
          animate: !1,
          coordinateToPixelTransform: this.coordinateToPixelTransform_,
          declutterTree: null,
          extent: Dr(a.center, a.resolution, a.rotation, e),
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
          mapId: Ct(this),
          renderTargets: {},
        }),
        a.nextCenter && a.nextResolution)
      ) {
        const l = isNaN(a.nextRotation) ? a.rotation : a.nextRotation
        r.nextExtent = Dr(a.nextCenter, a.nextResolution, l, e)
      }
    }
    ;((this.frameState_ = r),
      this.renderer_.renderFrame(r),
      r &&
        (r.animate && this.render(),
        Array.prototype.push.apply(this.postRenderFunctions_, r.postRenderFunctions),
        s &&
          (!this.previousExtent_ || (!qs(this.previousExtent_) && !Ar(r.extent, this.previousExtent_))) &&
          (this.dispatchEvent(new Sn(Le.MOVESTART, this, s)),
          (this.previousExtent_ = Us(this.previousExtent_))),
        this.previousExtent_ &&
          !r.viewHints[Dt.ANIMATING] &&
          !r.viewHints[Dt.INTERACTING] &&
          !Ar(r.extent, this.previousExtent_) &&
          (this.dispatchEvent(new Sn(Le.MOVEEND, this, r)), tu(r.extent, this.previousExtent_))),
      this.dispatchEvent(new Sn(Le.POSTRENDER, this, r)),
      (this.renderComplete_ =
        this.hasListener(Le.LOADSTART) || this.hasListener(Le.LOADEND) || this.hasListener(De.RENDERCOMPLETE)
          ? !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady()
          : void 0),
      this.postRenderTimeoutHandle_ ||
        (this.postRenderTimeoutHandle_ = setTimeout(() => {
          ;((this.postRenderTimeoutHandle_ = void 0), this.handlePostRender())
        }, 0)))
  }
  setLayerGroup(t) {
    const e = this.getLayerGroup()
    ;(e && this.handleLayerRemove_(new Fe('removelayer', e)), this.set(dt.LAYERGROUP, t))
  }
  setSize(t) {
    this.set(dt.SIZE, t)
  }
  setTarget(t) {
    this.set(dt.TARGET, t)
  }
  setView(t) {
    if (!t || t instanceof Jt) {
      this.set(dt.VIEW, t)
      return
    }
    this.set(dt.VIEW, new Jt())
    const e = this
    t.then(function (n) {
      e.setView(new Jt(n))
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
        !Sa(e) &&
          (t.offsetWidth || t.offsetHeight || t.getClientRects().length) &&
          ql("No map visible because the map container's width or height are 0."))
    }
    const n = this.getSize()
    e && (!n || !Ys(e, n)) && (this.setSize(e), this.updateViewportSize_())
  }
  updateViewportSize_() {
    const t = this.getView()
    if (t) {
      let e
      const n = getComputedStyle(this.viewport_)
      ;(n.width && n.height && (e = [parseInt(n.width, 10), parseInt(n.height, 10)]), t.setViewportSize(e))
    }
  }
}
function _f(i) {
  let t = null
  i.keyboardEventTarget !== void 0 &&
    (t =
      typeof i.keyboardEventTarget == 'string'
        ? document.getElementById(i.keyboardEventTarget)
        : i.keyboardEventTarget)
  const e = {},
    n = i.layers && typeof i.layers.getLayers == 'function' ? i.layers : new qn({ layers: i.layers })
  ;((e[dt.LAYERGROUP] = n),
    (e[dt.TARGET] = i.target),
    (e[dt.VIEW] = i.view instanceof Jt ? i.view : new Jt()))
  let s
  i.controls !== void 0 &&
    (Array.isArray(i.controls)
      ? (s = new fe(i.controls.slice()))
      : ($(typeof i.controls.getArray == 'function', 47), (s = i.controls)))
  let r
  i.interactions !== void 0 &&
    (Array.isArray(i.interactions)
      ? (r = new fe(i.interactions.slice()))
      : ($(typeof i.interactions.getArray == 'function', 48), (r = i.interactions)))
  let o
  return (
    i.overlays !== void 0
      ? Array.isArray(i.overlays)
        ? (o = new fe(i.overlays.slice()))
        : ($(typeof i.overlays.getArray == 'function', 49), (o = i.overlays))
      : (o = new fe()),
    { controls: s, interactions: r, keyboardEventTarget: t, overlays: o, values: e }
  )
}
class mf {
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
    const n = this.entries_[t]
    return (
      $(n !== void 0, 15),
      n === this.newest_ ||
        (n === this.oldest_
          ? ((this.oldest_ = this.oldest_.newer), (this.oldest_.older = null))
          : ((n.newer.older = n.older), (n.older.newer = n.newer)),
        (n.newer = null),
        (n.older = this.newest_),
        (this.newest_.newer = n),
        (this.newest_ = n)),
      n.value_
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
      n
    for (n = this.newest_; n; n = n.older) t[e++] = n.key_
    return t
  }
  getValues() {
    const t = new Array(this.count_)
    let e = 0,
      n
    for (n = this.newest_; n; n = n.older) t[e++] = n.value_
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
    const n = { key_: t, newer: null, older: this.newest_, value_: e }
    ;(this.newest_ ? (this.newest_.newer = n) : (this.oldest_ = n),
      (this.newest_ = n),
      (this.entries_[t] = n),
      ++this.count_)
  }
  setSize(t) {
    this.highWaterMark = t
  }
}
function Ga(i, t, e, n) {
  return n !== void 0 ? ((n[0] = i), (n[1] = t), (n[2] = e), n) : [i, t, e]
}
function Js(i, t, e) {
  return i + '/' + t + '/' + e
}
function Ph(i) {
  return Js(i[0], i[1], i[2])
}
function pf(i) {
  return i.split('/').map(Number)
}
function yf(i) {
  return (i[1] << i[0]) + i[2]
}
function xf(i, t) {
  const e = i[0],
    n = i[1],
    s = i[2]
  if (t.getMinZoom() > e || e > t.getMaxZoom()) return !1
  const r = t.getFullTileRange(e)
  return r ? r.containsXY(n, s) : !0
}
class Lh extends mf {
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
      n = pf(t)[0]
    this.forEach(s => {
      s.tileCoord[0] !== n && (this.remove(Ph(s.tileCoord)), s.release())
    })
  }
}
class bo {
  constructor(t, e, n, s) {
    ;((this.minX = t), (this.maxX = e), (this.minY = n), (this.maxY = s))
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
function yn(i, t, e, n, s) {
  return s !== void 0 ? ((s.minX = i), (s.maxX = t), (s.minY = e), (s.maxY = n), s) : new bo(i, t, e, n)
}
const Ef = 0.5,
  Cf = 10,
  Xa = 0.25
class wf {
  constructor(t, e, n, s, r, o) {
    ;((this.sourceProj_ = t), (this.targetProj_ = e))
    let a = {}
    const l = Is(this.targetProj_, this.sourceProj_)
    ;((this.transformInv_ = function (y) {
      const x = y[0] + '/' + y[1]
      return (a[x] || (a[x] = l(y)), a[x])
    }),
      (this.maxSourceExtent_ = s),
      (this.errorThresholdSquared_ = r * r),
      (this.triangles_ = []),
      (this.wrapsXInSource_ = !1),
      (this.canWrapXInSource_ =
        this.sourceProj_.canWrapX() &&
        !!s &&
        !!this.sourceProj_.getExtent() &&
        rt(s) >= rt(this.sourceProj_.getExtent())),
      (this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? rt(this.sourceProj_.getExtent()) : null),
      (this.targetWorldWidth_ = this.targetProj_.getExtent() ? rt(this.targetProj_.getExtent()) : null))
    const h = an(n),
      c = $s(n),
      u = Ks(n),
      d = Zs(n),
      f = this.transformInv_(h),
      g = this.transformInv_(c),
      _ = this.transformInv_(u),
      m = this.transformInv_(d),
      p = Cf + (o ? Math.max(0, Math.ceil(Math.log2(Or(n) / (o * o * 256 * 256)))) : 0)
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
  addTriangle_(t, e, n, s, r, o) {
    this.triangles_.push({ source: [s, r, o], target: [t, e, n] })
  }
  addQuad_(t, e, n, s, r, o, a, l, h) {
    const c = ha([r, o, a, l]),
      u = this.sourceWorldWidth_ ? rt(c) / this.sourceWorldWidth_ : null,
      d = this.sourceWorldWidth_,
      f = this.sourceProj_.canWrapX() && u > 0.5 && u < 1
    let g = !1
    if (h > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const m = ha([t, e, n, s])
        g = rt(m) / this.targetWorldWidth_ > Xa || g
      }
      !f && this.sourceProj_.isGlobal() && u && (g = u > Xa || g)
    }
    if (
      !g &&
      this.maxSourceExtent_ &&
      isFinite(c[0]) &&
      isFinite(c[1]) &&
      isFinite(c[2]) &&
      isFinite(c[3]) &&
      !bi(c, this.maxSourceExtent_)
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
        const m = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2],
          p = this.transformInv_(m)
        let y
        f ? (y = (Gn(r[0], d) + Gn(a[0], d)) / 2 - Gn(p[0], d)) : (y = (r[0] + a[0]) / 2 - p[0])
        const x = (r[1] + a[1]) / 2 - p[1]
        g = y * y + x * x > this.errorThresholdSquared_
      }
      if (g) {
        if (Math.abs(t[0] - n[0]) <= Math.abs(t[1] - n[1])) {
          const m = [(e[0] + n[0]) / 2, (e[1] + n[1]) / 2],
            p = this.transformInv_(m),
            y = [(s[0] + t[0]) / 2, (s[1] + t[1]) / 2],
            x = this.transformInv_(y)
          ;(this.addQuad_(t, e, m, y, r, o, p, x, h - 1), this.addQuad_(y, m, n, s, x, p, a, l, h - 1))
        } else {
          const m = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2],
            p = this.transformInv_(m),
            y = [(n[0] + s[0]) / 2, (n[1] + s[1]) / 2],
            x = this.transformInv_(y)
          ;(this.addQuad_(t, m, y, s, r, p, x, l, h - 1), this.addQuad_(m, e, n, y, p, o, a, x, h - 1))
        }
        return
      }
    }
    if (f) {
      if (!this.canWrapXInSource_) return
      this.wrapsXInSource_ = !0
    }
    ;((_ & 11) == 0 && this.addTriangle_(t, n, s, r, a, l),
      (_ & 14) == 0 && this.addTriangle_(t, n, e, r, a, o),
      _ &&
        ((_ & 13) == 0 && this.addTriangle_(e, s, t, o, l, r),
        (_ & 7) == 0 && this.addTriangle_(e, s, n, o, l, a)))
  }
  calculateSourceExtent() {
    const t = on()
    return (
      this.triangles_.forEach(function (e, n, s) {
        const r = e.source
        ;(ps(t, r[0]), ps(t, r[1]), ps(t, r[2]))
      }),
      t
    )
  }
  getTriangles() {
    return this.triangles_
  }
}
let _r
const Xn = []
function za(i, t, e, n, s) {
  ;(i.beginPath(),
    i.moveTo(0, 0),
    i.lineTo(t, e),
    i.lineTo(n, s),
    i.closePath(),
    i.save(),
    i.clip(),
    i.fillRect(0, 0, Math.max(t, n) + 1, Math.max(e, s)),
    i.restore())
}
function mr(i, t) {
  return Math.abs(i[t * 4] - 210) > 2 || Math.abs(i[t * 4 + 3] - 0.75 * 255) > 2
}
function Rf() {
  if (_r === void 0) {
    const i = je(6, 6, Xn)
    ;((i.globalCompositeOperation = 'lighter'),
      (i.fillStyle = 'rgba(210, 0, 0, 0.75)'),
      za(i, 4, 5, 4, 0),
      za(i, 4, 5, 0, 5))
    const t = i.getImageData(0, 0, 3, 3).data
    ;((_r = mr(t, 0) || mr(t, 4) || mr(t, 8)), yo(i), Xn.push(i.canvas))
  }
  return _r
}
function Wa(i, t, e, n) {
  const s = Ql(e, t, i)
  let r = _a(t, n, e)
  const o = t.getMetersPerUnit()
  o !== void 0 && (r *= o)
  const a = i.getMetersPerUnit()
  a !== void 0 && (r /= a)
  const l = i.getExtent()
  if (!l || co(l, s)) {
    const h = _a(i, r, s) / r
    isFinite(h) && h > 0 && (r /= h)
  }
  return r
}
function Tf(i, t, e, n) {
  const s = gi(e)
  let r = Wa(i, t, s, n)
  return (
    (!isFinite(r) || r <= 0) &&
      Zl(e, function (o) {
        return ((r = Wa(i, t, o, n)), isFinite(r) && r > 0)
      }),
    r
  )
}
function Sf(i, t, e, n, s, r, o, a, l, h, c, u) {
  const d = je(Math.round(e * i), Math.round(e * t), Xn)
  if ((u || (d.imageSmoothingEnabled = !1), l.length === 0)) return d.canvas
  d.scale(e, e)
  function f(E) {
    return Math.round(E * e) / e
  }
  d.globalCompositeOperation = 'lighter'
  const g = on()
  l.forEach(function (E, C, R) {
    su(g, E.extent)
  })
  const _ = rt(g),
    m = se(g),
    p = je(Math.round((e * _) / n), Math.round((e * m) / n), Xn)
  u || (p.imageSmoothingEnabled = !1)
  const y = e / n
  l.forEach(function (E, C, R) {
    const v = E.extent[0] - g[0],
      S = -(E.extent[3] - g[3]),
      b = rt(E.extent),
      A = se(E.extent)
    E.image.width > 0 &&
      E.image.height > 0 &&
      p.drawImage(E.image, h, h, E.image.width - 2 * h, E.image.height - 2 * h, v * y, S * y, b * y, A * y)
  })
  const x = an(o)
  return (
    a.getTriangles().forEach(function (E, C, R) {
      const v = E.source,
        S = E.target
      let b = v[0][0],
        A = v[0][1],
        G = v[1][0],
        N = v[1][1],
        D = v[2][0],
        nt = v[2][1]
      const I = f((S[0][0] - x[0]) / r),
        F = f(-(S[0][1] - x[1]) / r),
        T = f((S[1][0] - x[0]) / r),
        O = f(-(S[1][1] - x[1]) / r),
        Z = f((S[2][0] - x[0]) / r),
        Y = f(-(S[2][1] - x[1]) / r),
        it = b,
        w = A
      ;((b = 0), (A = 0), (G -= it), (N -= w), (D -= it), (nt -= w))
      const Tt = [
          [G, N, 0, 0, T - I],
          [D, nt, 0, 0, Z - I],
          [0, 0, G, N, O - F],
          [0, 0, D, nt, Y - F],
        ],
        W = xu(Tt)
      if (W) {
        if ((d.save(), d.beginPath(), Rf() || !u)) {
          d.moveTo(T, O)
          const q = 4,
            Ce = I - T,
            qt = F - O
          for (let at = 0; at < q; at++)
            (d.lineTo(T + f(((at + 1) * Ce) / q), O + f((at * qt) / (q - 1))),
              at != q - 1 && d.lineTo(T + f(((at + 1) * Ce) / q), O + f(((at + 1) * qt) / (q - 1))))
          d.lineTo(Z, Y)
        } else (d.moveTo(T, O), d.lineTo(I, F), d.lineTo(Z, Y))
        ;(d.clip(),
          d.transform(W[0], W[2], W[1], W[3], I, F),
          d.translate(g[0] - it, g[3] - w),
          d.scale(n / e, -n / e),
          d.drawImage(p.canvas, 0, 0),
          d.restore())
      }
    }),
    yo(p),
    Xn.push(p.canvas),
    c &&
      (d.save(),
      (d.globalCompositeOperation = 'source-over'),
      (d.strokeStyle = 'black'),
      (d.lineWidth = 1),
      a.getTriangles().forEach(function (E, C, R) {
        const v = E.target,
          S = (v[0][0] - x[0]) / r,
          b = -(v[0][1] - x[1]) / r,
          A = (v[1][0] - x[0]) / r,
          G = -(v[1][1] - x[1]) / r,
          N = (v[2][0] - x[0]) / r,
          D = -(v[2][1] - x[1]) / r
        ;(d.beginPath(), d.moveTo(A, G), d.lineTo(S, b), d.lineTo(N, D), d.closePath(), d.stroke())
      }),
      d.restore()),
    d.canvas
  )
}
class Ur extends wh {
  constructor(t, e, n, s, r, o, a, l, h, c, u, d) {
    ;(super(r, P.IDLE, { interpolate: !!d }),
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
    const m = g ? ci(f, g) : f
    if (Or(m) === 0) {
      this.state = P.EMPTY
      return
    }
    const p = t.getExtent()
    p && (_ ? (_ = ci(_, p)) : (_ = p))
    const y = s.getResolution(this.wrappedTileCoord_[0]),
      x = Tf(t, n, m, y)
    if (!isFinite(x) || x <= 0) {
      this.state = P.EMPTY
      return
    }
    const E = c !== void 0 ? c : Ef
    if (
      ((this.triangulation_ = new wf(t, n, m, _, x * E, y)), this.triangulation_.getTriangles().length === 0)
    ) {
      this.state = P.EMPTY
      return
    }
    this.sourceZ_ = e.getZForResolution(x)
    let C = this.triangulation_.calculateSourceExtent()
    if (
      (_ && (t.canWrapX() ? ((C[1] = ot(C[1], _[1], _[3])), (C[3] = ot(C[3], _[1], _[3]))) : (C = ci(C, _))),
      !Or(C))
    )
      this.state = P.EMPTY
    else {
      const R = e.getTileRangeForExtentAndZ(C, this.sourceZ_)
      for (let v = R.minX; v <= R.maxX; v++)
        for (let S = R.minY; S <= R.maxY; S++) {
          const b = h(this.sourceZ_, v, S, a)
          b && this.sourceTiles_.push(b)
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
        n = this.targetTileGrid_.getTileSize(e),
        s = typeof n == 'number' ? n : n[0],
        r = typeof n == 'number' ? n : n[1],
        o = this.targetTileGrid_.getResolution(e),
        a = this.sourceTileGrid_.getResolution(this.sourceZ_),
        l = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_)
      ;((this.canvas_ = Sf(
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
          const n = e.getState()
          if (n == P.IDLE || n == P.LOADING) {
            t++
            const s = U(
              e,
              j.CHANGE,
              function (r) {
                const o = e.getState()
                ;(o == P.LOADED || o == P.ERROR || o == P.EMPTY) &&
                  (et(s), t--, t === 0 && (this.unlistenSources_(), this.reproject_()))
              },
              this,
            )
            this.sourcesListenerKeys_.push(s)
          }
        }),
        t === 0
          ? setTimeout(this.reproject_.bind(this), 0)
          : this.sourceTiles_.forEach(function (e, n, s) {
              e.getState() == P.IDLE && e.load()
            }))
    }
  }
  unlistenSources_() {
    ;(this.sourcesListenerKeys_.forEach(et), (this.sourcesListenerKeys_ = null))
  }
  release() {
    ;(this.canvas_ && (yo(this.canvas_.getContext('2d')), Xn.push(this.canvas_), (this.canvas_ = null)),
      super.release())
  }
}
class vf extends Ad {
  constructor(t) {
    ;(super(t),
      (this.extentChanged = !0),
      (this.renderedExtent_ = null),
      this.renderedPixelRatio,
      (this.renderedProjection = null),
      this.renderedRevision,
      (this.renderedTiles = []),
      (this.newTiles_ = !1),
      (this.tmpExtent = on()),
      (this.tmpTileRange_ = new bo(0, 0, 0, 0)))
  }
  isDrawableTile(t) {
    const e = this.getLayer(),
      n = t.getState(),
      s = e.getUseInterimTilesOnError()
    return n == P.LOADED || n == P.EMPTY || (n == P.ERROR && !s)
  }
  getTile(t, e, n, s) {
    const r = s.pixelRatio,
      o = s.viewState.projection,
      a = this.getLayer()
    let h = a.getSource().getTile(t, e, n, r, o)
    return (
      h.getState() == P.ERROR && a.getUseInterimTilesOnError() && a.getPreload() > 0 && (this.newTiles_ = !0),
      this.isDrawableTile(h) || (h = h.getInterimTile()),
      h
    )
  }
  getData(t) {
    const e = this.frameState
    if (!e) return null
    const n = this.getLayer(),
      s = Ot(e.pixelToCoordinateTransform, t.slice()),
      r = n.getExtent()
    if (r && !co(r, s)) return null
    const o = e.pixelRatio,
      a = e.viewState.projection,
      l = e.viewState,
      h = n.getRenderSource(),
      c = h.getTileGridForProjection(l.projection),
      u = h.getTilePixelRatio(e.pixelRatio)
    for (let d = c.getZForResolution(l.resolution); d >= c.getMinZoom(); --d) {
      const f = c.getTileCoordForCoordAndZ(s, d),
        g = h.getTile(d, f[1], f[2], o, a)
      if (!(g instanceof Rh || g instanceof Ur) || (g instanceof Ur && g.getState() === P.EMPTY)) return null
      if (g.getState() !== P.LOADED) continue
      const _ = c.getOrigin(d),
        m = te(c.getTileSize(d)),
        p = c.getResolution(d),
        y = Math.floor(u * ((s[0] - _[0]) / p - f[1] * m[0])),
        x = Math.floor(u * ((_[1] - s[1]) / p - f[2] * m[1])),
        E = Math.round(u * h.getGutterForProjection(l.projection))
      return this.getImageData(g.getImage(), y + E, x + E)
    }
    return null
  }
  loadedTileCallback(t, e, n) {
    return this.isDrawableTile(n) ? super.loadedTileCallback(t, e, n) : !1
  }
  prepareFrame(t) {
    return !!this.getLayer().getSource()
  }
  renderFrame(t, e) {
    const n = t.layerStatesArray[t.layerIndex],
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
    const p = t.viewState.resolution,
      y = u.getTilePixelRatio(h),
      x = Math.round((rt(m) / p) * h),
      E = Math.round((se(m) / p) * h),
      C = n.extent && Pn(n.extent)
    C && (m = ci(m, Pn(n.extent)))
    const R = (_ * x) / 2 / y,
      v = (_ * E) / 2 / y,
      S = [a[0] - R, a[1] - v, a[0] + R, a[1] + v],
      b = f.getTileRangeForExtentAndZ(m, g),
      A = {}
    A[g] = {}
    const G = this.createLoadedTileFinder(u, r, A),
      N = this.tmpExtent,
      D = this.tmpTileRange_
    this.newTiles_ = !1
    const nt = l ? kr(s.center, p, l, t.size) : void 0
    for (let Tt = b.minX; Tt <= b.maxX; ++Tt)
      for (let W = b.minY; W <= b.maxY; ++W) {
        if (l && !f.tileCoordIntersectsViewport([g, Tt, W], nt)) continue
        const q = this.getTile(g, Tt, W, t)
        if (this.isDrawableTile(q)) {
          const at = Ct(this)
          if (q.getState() == P.LOADED) {
            A[g][q.tileCoord.toString()] = q
            let oe = q.inTransition(at)
            ;(oe && n.opacity !== 1 && (q.endTransition(at), (oe = !1)),
              !this.newTiles_ && (oe || !this.renderedTiles.includes(q)) && (this.newTiles_ = !0))
          }
          if (q.getAlpha(at, t.time) === 1) continue
        }
        const Ce = f.getTileCoordChildTileRange(q.tileCoord, D, N)
        let qt = !1
        ;(Ce && (qt = G(g + 1, Ce)), qt || f.forEachTileCoordParentTileRange(q.tileCoord, G, D, N))
      }
    const I = ((_ / o) * h) / y
    fi(this.pixelTransform, t.size[0] / 2, t.size[1] / 2, 1 / h, 1 / h, l, -x / 2, -E / 2)
    const F = Qc(this.pixelTransform)
    this.useContainer(e, F, this.getBackground(t))
    const T = this.context,
      O = T.canvas
    ;(Yl(this.inversePixelTransform, this.pixelTransform),
      fi(this.tempTransform, x / 2, E / 2, I, I, 0, -x / 2, -E / 2),
      O.width != x || O.height != E
        ? ((O.width = x), (O.height = E))
        : this.containerReused || T.clearRect(0, 0, x, E),
      C && this.clipUnrotated(T, t, C),
      u.getInterpolate() || (T.imageSmoothingEnabled = !1),
      this.preRender(T, t),
      (this.renderedTiles.length = 0))
    let Z = Object.keys(A).map(Number)
    Z.sort(ao)
    let Y, it, w
    n.opacity === 1 && (!this.containerReused || u.getOpaque(t.viewState.projection))
      ? (Z = Z.reverse())
      : ((Y = []), (it = []))
    for (let Tt = Z.length - 1; Tt >= 0; --Tt) {
      const W = Z[Tt],
        q = u.getTilePixelSize(W, h, r),
        qt = f.getResolution(W) / _,
        at = q[0] * qt * I,
        oe = q[1] * qt * I,
        cn = f.getTileCoordForCoordAndZ(an(S), W),
        Gi = f.getTileCoordExtent(cn),
        un = Ot(this.tempTransform, [(y * (Gi[0] - S[0])) / _, (y * (S[3] - Gi[3])) / _]),
        Xi = y * u.getGutterForProjection(r),
        we = A[W]
      for (const Qn in we) {
        const Re = we[Qn],
          zi = Re.tileCoord,
          Wi = cn[1] - zi[1],
          Yi = Math.round(un[0] - (Wi - 1) * at),
          dn = cn[2] - zi[2],
          or = Math.round(un[1] - (dn - 1) * oe),
          yt = Math.round(un[0] - Wi * at),
          Pt = Math.round(un[1] - dn * oe),
          Wt = Yi - yt,
          ae = or - Pt,
          fn = g === W,
          Be = fn && Re.getAlpha(Ct(this), t.time) !== 1
        let Te = !1
        if (!Be)
          if (Y) {
            w = [yt, Pt, yt + Wt, Pt, yt + Wt, Pt + ae, yt, Pt + ae]
            for (let gn = 0, Bi = Y.length; gn < Bi; ++gn)
              if (g !== W && W < it[gn]) {
                const ft = Y[gn]
                bi([yt, Pt, yt + Wt, Pt + ae], [ft[0], ft[3], ft[4], ft[7]]) &&
                  (Te || (T.save(), (Te = !0)),
                  T.beginPath(),
                  T.moveTo(w[0], w[1]),
                  T.lineTo(w[2], w[3]),
                  T.lineTo(w[4], w[5]),
                  T.lineTo(w[6], w[7]),
                  T.moveTo(ft[6], ft[7]),
                  T.lineTo(ft[4], ft[5]),
                  T.lineTo(ft[2], ft[3]),
                  T.lineTo(ft[0], ft[1]),
                  T.clip())
              }
            ;(Y.push(w), it.push(W))
          } else T.clearRect(yt, Pt, Wt, ae)
        ;(this.drawTileImage(Re, t, yt, Pt, Wt, ae, Xi, fn),
          Y && !Be ? (Te && T.restore(), this.renderedTiles.unshift(Re)) : this.renderedTiles.push(Re),
          this.updateUsedTiles(t.usedTiles, u, Re))
      }
    }
    return (
      (this.renderedRevision = d),
      (this.renderedResolution = _),
      (this.extentChanged = !this.renderedExtent_ || !Ar(this.renderedExtent_, S)),
      (this.renderedExtent_ = S),
      (this.renderedPixelRatio = h),
      (this.renderedProjection = r),
      this.manageTilePyramid(t, u, f, h, r, m, g, c.getPreload()),
      this.scheduleExpireCache(t, u),
      this.postRender(T, t),
      n.extent && T.restore(),
      (T.imageSmoothingEnabled = !0),
      F !== O.style.transform && (O.style.transform = F),
      this.container
    )
  }
  drawTileImage(t, e, n, s, r, o, a, l) {
    const h = this.getTileImage(t)
    if (!h) return
    const c = Ct(this),
      u = e.layerStatesArray[e.layerIndex],
      d = u.opacity * (l ? t.getAlpha(c, e.time) : 1),
      f = d !== this.context.globalAlpha
    ;(f && (this.context.save(), (this.context.globalAlpha = d)),
      this.context.drawImage(h, a, a, h.width - 2 * a, h.height - 2 * a, n, s, r, o),
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
      const n = function (s, r, o) {
        const a = Ct(s)
        a in o.usedTiles && s.expireCache(o.viewState.projection, o.usedTiles[a])
      }.bind(null, e)
      t.postRenderFunctions.push(n)
    }
  }
  updateUsedTiles(t, e, n) {
    const s = Ct(e)
    ;(s in t || (t[s] = {}), (t[s][n.getKey()] = !0))
  }
  manageTilePyramid(t, e, n, s, r, o, a, l, h) {
    const c = Ct(e)
    c in t.wantedTiles || (t.wantedTiles[c] = {})
    const u = t.wantedTiles[c],
      d = t.tileQueue,
      f = n.getMinZoom(),
      g = t.viewState.rotation,
      _ = g ? kr(t.viewState.center, t.viewState.resolution, g, t.size) : void 0
    let m = 0,
      p,
      y,
      x,
      E,
      C,
      R
    for (R = f; R <= a; ++R)
      for (y = n.getTileRangeForExtentAndZ(o, R, y), x = n.getResolution(R), E = y.minX; E <= y.maxX; ++E)
        for (C = y.minY; C <= y.maxY; ++C)
          (g && !n.tileCoordIntersectsViewport([R, E, C], _)) ||
            (a - R <= l
              ? (++m,
                (p = e.getTile(R, E, C, s, r)),
                p.getState() == P.IDLE &&
                  ((u[p.getKey()] = !0),
                  d.isKeyQueued(p.getKey()) || d.enqueue([p, c, n.getTileCoordCenter(p.tileCoord), x])),
                h !== void 0 && h(p))
              : e.useTile(R, E, C, r))
    e.updateCacheSize(m, r)
  }
}
const ts = { PRELOAD: 'preload', USE_INTERIM_TILES_ON_ERROR: 'useInterimTilesOnError' },
  xn = [0, 0, 0],
  Se = 5
class Fh {
  constructor(t) {
    ;((this.minZoom = t.minZoom !== void 0 ? t.minZoom : 0),
      (this.resolutions_ = t.resolutions),
      $(
        Yc(this.resolutions_, function (s, r) {
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
    const n = t.extent
    ;(n !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = an(n)),
      $((!this.origin_ && this.origins_) || (this.origin_ && !this.origins_), 18),
      (this.tileSizes_ = null),
      t.tileSizes !== void 0 &&
        ((this.tileSizes_ = t.tileSizes), $(this.tileSizes_.length == this.resolutions_.length, 19)),
      (this.tileSize_ = t.tileSize !== void 0 ? t.tileSize : this.tileSizes_ ? null : Eo),
      $((!this.tileSize_ && this.tileSizes_) || (this.tileSize_ && !this.tileSizes_), 22),
      (this.extent_ = n !== void 0 ? n : null),
      (this.fullTileRanges_ = null),
      (this.tmpSize_ = [0, 0]),
      (this.tmpExtent_ = [0, 0, 0, 0]),
      t.sizes !== void 0
        ? (this.fullTileRanges_ = t.sizes.map(function (s, r) {
            const o = new bo(
              Math.min(0, s[0]),
              Math.max(s[0] - 1, -1),
              Math.min(0, s[1]),
              Math.max(s[1] - 1, -1),
            )
            if (n) {
              const a = this.getTileRangeForExtentAndZ(n, r)
              ;((o.minX = Math.max(a.minX, o.minX)),
                (o.maxX = Math.min(a.maxX, o.maxX)),
                (o.minY = Math.max(a.minY, o.minY)),
                (o.maxY = Math.min(a.maxY, o.maxY)))
            }
            return o
          }, this))
        : n && this.calculateTileRanges_(n))
  }
  forEachTileCoord(t, e, n) {
    const s = this.getTileRangeForExtentAndZ(t, e)
    for (let r = s.minX, o = s.maxX; r <= o; ++r) for (let a = s.minY, l = s.maxY; a <= l; ++a) n([e, r, a])
  }
  forEachTileCoordParentTileRange(t, e, n, s) {
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
          ? ((o = Math.floor(o / 2)), (a = Math.floor(a / 2)), (r = yn(o, o, a, a, n)))
          : (r = this.getTileRangeForExtentAndZ(l, h, n)),
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
  getTileCoordChildTileRange(t, e, n) {
    if (t[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        const r = t[1] * 2,
          o = t[2] * 2
        return yn(r, r + 1, o, o + 1, e)
      }
      const s = this.getTileCoordExtent(t, n || this.tmpExtent_)
      return this.getTileRangeForExtentAndZ(s, t[0] + 1, e)
    }
    return null
  }
  getTileRangeForTileCoordAndZ(t, e, n) {
    if (e > this.maxZoom || e < this.minZoom) return null
    const s = t[0],
      r = t[1],
      o = t[2]
    if (e === s) return yn(r, o, r, o, n)
    if (this.zoomFactor_) {
      const l = Math.pow(this.zoomFactor_, e - s),
        h = Math.floor(r * l),
        c = Math.floor(o * l)
      if (e < s) return yn(h, h, c, c, n)
      const u = Math.floor(l * (r + 1)) - 1,
        d = Math.floor(l * (o + 1)) - 1
      return yn(h, u, c, d, n)
    }
    const a = this.getTileCoordExtent(t, this.tmpExtent_)
    return this.getTileRangeForExtentAndZ(a, e, n)
  }
  getTileRangeForExtentAndZ(t, e, n) {
    this.getTileCoordForXYAndZ_(t[0], t[3], e, !1, xn)
    const s = xn[1],
      r = xn[2]
    this.getTileCoordForXYAndZ_(t[2], t[1], e, !0, xn)
    const o = xn[1],
      a = xn[2]
    return yn(s, o, r, a, n)
  }
  getTileCoordCenter(t) {
    const e = this.getOrigin(t[0]),
      n = this.getResolution(t[0]),
      s = te(this.getTileSize(t[0]), this.tmpSize_)
    return [e[0] + (t[1] + 0.5) * s[0] * n, e[1] - (t[2] + 0.5) * s[1] * n]
  }
  getTileCoordExtent(t, e) {
    const n = this.getOrigin(t[0]),
      s = this.getResolution(t[0]),
      r = te(this.getTileSize(t[0]), this.tmpSize_),
      o = n[0] + t[1] * r[0] * s,
      a = n[1] - (t[2] + 1) * r[1] * s,
      l = o + r[0] * s,
      h = a + r[1] * s
    return Mi(o, a, l, h, e)
  }
  getTileCoordForCoordAndResolution(t, e, n) {
    return this.getTileCoordForXYAndResolution_(t[0], t[1], e, !1, n)
  }
  getTileCoordForXYAndResolution_(t, e, n, s, r) {
    const o = this.getZForResolution(n),
      a = n / this.getResolution(o),
      l = this.getOrigin(o),
      h = te(this.getTileSize(o), this.tmpSize_)
    let c = (a * (t - l[0])) / n / h[0],
      u = (a * (l[1] - e)) / n / h[1]
    return (
      s ? ((c = qi(c, Se) - 1), (u = qi(u, Se) - 1)) : ((c = $i(c, Se)), (u = $i(u, Se))),
      Ga(o, c, u, r)
    )
  }
  getTileCoordForXYAndZ_(t, e, n, s, r) {
    const o = this.getOrigin(n),
      a = this.getResolution(n),
      l = te(this.getTileSize(n), this.tmpSize_)
    let h = (t - o[0]) / a / l[0],
      c = (o[1] - e) / a / l[1]
    return (
      s ? ((h = qi(h, Se) - 1), (c = qi(c, Se) - 1)) : ((h = $i(h, Se)), (c = $i(c, Se))),
      Ga(n, h, c, r)
    )
  }
  getTileCoordForCoordAndZ(t, e, n) {
    return this.getTileCoordForXYAndZ_(t[0], t[1], e, !1, n)
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
    const n = lo(this.resolutions_, t, e || 0)
    return ot(n, this.minZoom, this.maxZoom)
  }
  tileCoordIntersectsViewport(t, e) {
    return lh(e, 0, e.length, 2, this.getTileCoordExtent(t))
  }
  calculateTileRanges_(t) {
    const e = this.resolutions_.length,
      n = new Array(e)
    for (let s = this.minZoom; s < e; ++s) n[s] = this.getTileRangeForExtentAndZ(t, s)
    this.fullTileRanges_ = n
  }
}
const pr = { TILELOADSTART: 'tileloadstart', TILELOADEND: 'tileloadend', TILELOADERROR: 'tileloaderror' }
function Ah(i) {
  let t = i.getDefaultTileGrid()
  return (t || ((t = Pf(i)), i.setDefaultTileGrid(t)), t)
}
function If(i, t, e) {
  const n = t[0],
    s = i.getTileCoordCenter(t),
    r = Po(e)
  if (!co(r, s)) {
    const o = rt(r),
      a = Math.ceil((r[0] - s[0]) / o)
    return ((s[0] += o * a), i.getTileCoordForCoordAndZ(s, n))
  }
  return t
}
function Mf(i, t, e, n) {
  n = n !== void 0 ? n : 'top-left'
  const s = Oh(i, t, e)
  return new Fh({ extent: i, origin: ou(i, n), resolutions: s, tileSize: e })
}
function bf(i) {
  const t = i || {},
    e = t.extent || Kt('EPSG:3857').getExtent(),
    n = {
      extent: e,
      minZoom: t.minZoom,
      tileSize: t.tileSize,
      resolutions: Oh(e, t.maxZoom, t.tileSize, t.maxResolution),
    }
  return new Fh(n)
}
function Oh(i, t, e, n) {
  ;((t = t !== void 0 ? t : pd), (e = te(e !== void 0 ? e : Eo)))
  const s = se(i),
    r = rt(i)
  n = n > 0 ? n : Math.max(r / e[0], s / e[1])
  const o = t + 1,
    a = new Array(o)
  for (let l = 0; l < o; ++l) a[l] = n / Math.pow(2, l)
  return a
}
function Pf(i, t, e, n) {
  const s = Po(i)
  return Mf(s, t, e, n)
}
function Po(i) {
  i = Kt(i)
  let t = i.getExtent()
  if (!t) {
    const e = (180 * uo.degrees) / i.getMetersPerUnit()
    t = Mi(-e, -e, e, e)
  }
  return t
}
class Lf extends Od {
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
    ;(this.tileGrid && te(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), e),
      (this.tileCache = new Lh(t.cacheSize || 0)),
      (this.tmpSize = [0, 0]),
      (this.key_ = t.key || ''),
      (this.tileOptions = { transition: t.transition, interpolate: t.interpolate }),
      (this.zDirection = t.zDirection ? t.zDirection : 0))
  }
  canExpireCache() {
    return this.tileCache.canExpireCache()
  }
  expireCache(t, e) {
    const n = this.getTileCacheForProjection(t)
    n && n.expireCache(e)
  }
  forEachLoadedTile(t, e, n, s) {
    const r = this.getTileCacheForProjection(t)
    if (!r) return !1
    let o = !0,
      a,
      l,
      h
    for (let c = n.minX; c <= n.maxX; ++c)
      for (let u = n.minY; u <= n.maxY; ++u)
        ((l = Js(e, c, u)),
          (h = !1),
          r.containsKey(l) && ((a = r.get(l)), (h = a.getState() === P.LOADED), h && (h = s(a) !== !1)),
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
  getTile(t, e, n, s, r) {
    return X()
  }
  getTileGrid() {
    return this.tileGrid
  }
  getTileGridForProjection(t) {
    return this.tileGrid ? this.tileGrid : Ah(t)
  }
  getTileCacheForProjection(t) {
    const e = this.getProjection()
    return ($(e === null || Rn(e, t), 68), this.tileCache)
  }
  getTilePixelRatio(t) {
    return this.tilePixelRatio_
  }
  getTilePixelSize(t, e, n) {
    const s = this.getTileGridForProjection(n),
      r = this.getTilePixelRatio(e),
      o = te(s.getTileSize(t), this.tmpSize)
    return r == 1 ? o : td(o, r, this.tmpSize)
  }
  getTileCoordForTileUrlFunction(t, e) {
    e = e !== void 0 ? e : this.getProjection()
    const n = this.getTileGridForProjection(e)
    return (this.getWrapX() && e.isGlobal() && (t = If(n, t, e)), xf(t, n) ? t : null)
  }
  clear() {
    this.tileCache.clear()
  }
  refresh() {
    ;(this.clear(), super.refresh())
  }
  updateCacheSize(t, e) {
    const n = this.getTileCacheForProjection(e)
    t > n.highWaterMark && (n.highWaterMark = t)
  }
  useTile(t, e, n, s) {}
}
class Ff extends We {
  constructor(t, e) {
    ;(super(t), (this.tile = e))
  }
}
function Af(i, t) {
  const e = /\{z\}/g,
    n = /\{x\}/g,
    s = /\{y\}/g,
    r = /\{-y\}/g
  return function (o, a, l) {
    if (o)
      return i
        .replace(e, o[0].toString())
        .replace(n, o[1].toString())
        .replace(s, o[2].toString())
        .replace(r, function () {
          const h = o[0],
            c = t.getFullTileRange(h)
          return ($(c, 55), (c.getHeight() - o[2] - 1).toString())
        })
  }
}
function Of(i, t) {
  const e = i.length,
    n = new Array(e)
  for (let s = 0; s < e; ++s) n[s] = Af(i[s], t)
  return Df(n)
}
function Df(i) {
  return i.length === 1
    ? i[0]
    : function (t, e, n) {
        if (!t) return
        const s = yf(t),
          r = Gn(s, i.length)
        return i[r](t, e, n)
      }
}
function kf(i) {
  const t = []
  let e = /\{([a-z])-([a-z])\}/.exec(i)
  if (e) {
    const n = e[1].charCodeAt(0),
      s = e[2].charCodeAt(0)
    let r
    for (r = n; r <= s; ++r) t.push(i.replace(e[0], String.fromCharCode(r)))
    return t
  }
  if (((e = /\{(\d+)-(\d+)\}/.exec(i)), e)) {
    const n = parseInt(e[2], 10)
    for (let s = parseInt(e[1], 10); s <= n; s++) t.push(i.replace(e[0], s.toString()))
    return t
  }
  return (t.push(i), t)
}
class Lo extends Lf {
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
      (this.generateTileUrlFunction_ = this.tileUrlFunction === Lo.prototype.tileUrlFunction),
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
      n = Ct(e),
      s = e.getState()
    let r
    ;(s == P.LOADING
      ? ((this.tileLoadingKeys_[n] = !0), (r = pr.TILELOADSTART))
      : n in this.tileLoadingKeys_ &&
        (delete this.tileLoadingKeys_[n],
        (r = s == P.ERROR ? pr.TILELOADERROR : s == P.LOADED ? pr.TILELOADEND : void 0)),
      r != null && this.dispatchEvent(new Ff(r, e)))
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
    const e = kf(t)
    ;((this.urls = e), this.setUrls(e))
  }
  setUrls(t) {
    this.urls = t
    const e = t.join(`
`)
    this.generateTileUrlFunction_ ? this.setTileUrlFunction(Of(t, this.tileGrid), e) : this.setKey(e)
  }
  tileUrlFunction(t, e, n) {}
  useTile(t, e, n) {
    const s = Js(t, e, n)
    this.tileCache.containsKey(s) && this.tileCache.get(s)
  }
}
class Nf extends To {
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
    return this.get(ts.PRELOAD)
  }
  setPreload(t) {
    this.set(ts.PRELOAD, t)
  }
  getUseInterimTilesOnError() {
    return this.get(ts.USE_INTERIM_TILES_ON_ERROR)
  }
  setUseInterimTilesOnError(t) {
    this.set(ts.USE_INTERIM_TILES_ON_ERROR, t)
  }
  getData(t) {
    return super.getData(t)
  }
}
class jf extends Nf {
  constructor(t) {
    super(t)
  }
  createRenderer() {
    return new vf(this)
  }
}
class Gf extends Lo {
  constructor(t) {
    ;(super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      opaque: t.opaque,
      projection: t.projection,
      state: t.state,
      tileGrid: t.tileGrid,
      tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : Xf,
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
      (this.tileClass = t.tileClass !== void 0 ? t.tileClass : Rh),
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
    const n = this.getTileCacheForProjection(t)
    this.tileCache.expireCache(this.tileCache == n ? e : {})
    for (const s in this.tileCacheForProjection) {
      const r = this.tileCacheForProjection[s]
      r.expireCache(r == n ? e : {})
    }
  }
  getGutterForProjection(t) {
    return this.getProjection() && t && !Rn(this.getProjection(), t) ? 0 : this.getGutter()
  }
  getGutter() {
    return 0
  }
  getKey() {
    let t = super.getKey()
    return (this.getInterpolate() || (t += ':disable-interpolation'), t)
  }
  getOpaque(t) {
    return this.getProjection() && t && !Rn(this.getProjection(), t) ? !1 : super.getOpaque(t)
  }
  getTileGridForProjection(t) {
    const e = this.getProjection()
    if (this.tileGrid && (!e || Rn(e, t))) return this.tileGrid
    const n = Ct(t)
    return (
      n in this.tileGridForProjection || (this.tileGridForProjection[n] = Ah(t)),
      this.tileGridForProjection[n]
    )
  }
  getTileCacheForProjection(t) {
    const e = this.getProjection()
    if (!e || Rn(e, t)) return this.tileCache
    const n = Ct(t)
    return (
      n in this.tileCacheForProjection ||
        (this.tileCacheForProjection[n] = new Lh(this.tileCache.highWaterMark)),
      this.tileCacheForProjection[n]
    )
  }
  createTile_(t, e, n, s, r, o) {
    const a = [t, e, n],
      l = this.getTileCoordForTileUrlFunction(a, r),
      h = l ? this.tileUrlFunction(l, s, r) : void 0,
      c = new this.tileClass(
        a,
        h !== void 0 ? P.IDLE : P.EMPTY,
        h !== void 0 ? h : '',
        this.crossOrigin,
        this.tileLoadFunction,
        this.tileOptions,
      )
    return ((c.key = o), c.addEventListener(j.CHANGE, this.handleTileChange.bind(this)), c)
  }
  getTile(t, e, n, s, r) {
    const o = this.getProjection()
    if (!o || !r || Rn(o, r)) return this.getTileInternal(t, e, n, s, o || r)
    const a = this.getTileCacheForProjection(r),
      l = [t, e, n]
    let h
    const c = Ph(l)
    a.containsKey(c) && (h = a.get(c))
    const u = this.getKey()
    if (h && h.key == u) return h
    const d = this.getTileGridForProjection(o),
      f = this.getTileGridForProjection(r),
      g = this.getTileCoordForTileUrlFunction(l, r),
      _ = new Ur(
        o,
        d,
        r,
        f,
        l,
        g,
        this.getTilePixelRatio(s),
        this.getGutter(),
        (m, p, y, x) => this.getTileInternal(m, p, y, x, o),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.getInterpolate(),
      )
    return ((_.key = u), h ? ((_.interimTile = h), _.refreshInterimChain(), a.replace(c, _)) : a.set(c, _), _)
  }
  getTileInternal(t, e, n, s, r) {
    let o = null
    const a = Js(t, e, n),
      l = this.getKey()
    if (!this.tileCache.containsKey(a)) ((o = this.createTile_(t, e, n, s, r, l)), this.tileCache.set(a, o))
    else if (((o = this.tileCache.get(a)), o.key != l)) {
      const h = o
      ;((o = this.createTile_(t, e, n, s, r, l)),
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
    const n = Kt(t)
    if (n) {
      const s = Ct(n)
      s in this.tileGridForProjection || (this.tileGridForProjection[s] = e)
    }
  }
  clear() {
    super.clear()
    for (const t in this.tileCacheForProjection) this.tileCacheForProjection[t].clear()
  }
}
function Xf(i, t) {
  i.getImage().src = t
}
class zf extends Gf {
  constructor(t) {
    t = t || {}
    const e = t.projection !== void 0 ? t.projection : 'EPSG:3857',
      n =
        t.tileGrid !== void 0
          ? t.tileGrid
          : bf({
              extent: Po(e),
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
      tileGrid: n,
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
const Wf =
  '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.'
class Yf extends zf {
  constructor(t) {
    t = t || {}
    let e
    t.attributions !== void 0 ? (e = t.attributions) : (e = [Wf])
    const n = t.crossOrigin !== void 0 ? t.crossOrigin : 'anonymous',
      s = t.url !== void 0 ? t.url : 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    super({
      attributions: e,
      attributionsCollapsible: !1,
      cacheSize: t.cacheSize,
      crossOrigin: n,
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
const Bf = `<h1>ol-geom-editor</h1>
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
<td>enable modify interaction</td>
</tr>
<tr>
<td>disableModify</td>
<td>disable modify interaction</td>
</tr>
<tr>
<td>enableTranslate</td>
<td>enable translate interaction</td>
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
  Vf = {
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
class Dh extends Error {
  constructor(t) {
    const e = Vf[t]
    ;(super(e), (this.code = t), (this.name = 'AssertionError'), (this.message = e))
  }
}
class pt {
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
const kh = { PROPERTYCHANGE: 'propertychange' }
class Uf {
  constructor() {
    this.disposed = !1
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal())
  }
  disposeInternal() {}
}
function Zf(i, t, e) {
  let n, s
  e = e || _i
  let r = 0,
    o = i.length,
    a = !1
  for (; r < o; ) ((n = r + ((o - r) >> 1)), (s = +e(i[n], t)), s < 0 ? (r = n + 1) : ((o = n), (a = !s)))
  return a ? r : ~r
}
function _i(i, t) {
  return i > t ? 1 : i < t ? -1 : 0
}
function Nh(i, t, e) {
  if (i[0] <= t) return 0
  const n = i.length
  if (t <= i[n - 1]) return n - 1
  if (typeof e == 'function') {
    for (let s = 1; s < n; ++s) {
      const r = i[s]
      if (r === t) return s
      if (r < t) return e(t, i[s - 1], r) > 0 ? s - 1 : s
    }
    return n - 1
  }
  if (e > 0) {
    for (let s = 1; s < n; ++s) if (i[s] < t) return s - 1
    return n - 1
  }
  if (e < 0) {
    for (let s = 1; s < n; ++s) if (i[s] <= t) return s
    return n - 1
  }
  for (let s = 1; s < n; ++s) {
    if (i[s] == t) return s
    if (i[s] < t) return i[s - 1] - t < t - i[s] ? s - 1 : s
  }
  return n - 1
}
function Kf(i, t, e) {
  for (; t < e; ) {
    const n = i[t]
    ;((i[t] = i[e]), (i[e] = n), ++t, --e)
  }
}
function ie(i, t) {
  const e = Array.isArray(t) ? t : [t],
    n = e.length
  for (let s = 0; s < n; s++) i[i.length] = e[s]
}
function ln(i, t) {
  const e = i.length
  if (e !== t.length) return !1
  for (let n = 0; n < e; n++) if (i[n] !== t[n]) return !1
  return !0
}
function Bn() {
  return !0
}
function Fo() {
  return !1
}
function mi() {}
function $f(i) {
  let t = !1,
    e,
    n,
    s
  return function () {
    const r = Array.prototype.slice.call(arguments)
    return (
      (!t || this !== s || !ln(r, n)) && ((t = !0), (s = this), (n = r), (e = i.apply(this, arguments))),
      e
    )
  }
}
function Ao(i) {
  for (const t in i) delete i[t]
}
function Vn(i) {
  let t
  for (t in i) return !1
  return !t
}
class jh extends Uf {
  constructor(t) {
    ;(super(),
      (this.eventTarget_ = t),
      (this.pendingRemovals_ = null),
      (this.dispatching_ = null),
      (this.listeners_ = null))
  }
  addEventListener(t, e) {
    if (!t || !e) return
    const n = this.listeners_ || (this.listeners_ = {}),
      s = n[t] || (n[t] = [])
    s.includes(e) || s.push(e)
  }
  dispatchEvent(t) {
    const e = typeof t == 'string',
      n = e ? t : t.type,
      s = this.listeners_ && this.listeners_[n]
    if (!s) return
    const r = e ? new pt(t) : t
    r.target || (r.target = this.eventTarget_ || this)
    const o = this.dispatching_ || (this.dispatching_ = {}),
      a = this.pendingRemovals_ || (this.pendingRemovals_ = {})
    ;(n in o || ((o[n] = 0), (a[n] = 0)), ++o[n])
    let l
    for (let h = 0, c = s.length; h < c; ++h)
      if (
        ('handleEvent' in s[h] ? (l = s[h].handleEvent(r)) : (l = s[h].call(this, r)),
        l === !1 || r.propagationStopped)
      ) {
        l = !1
        break
      }
    if (--o[n] === 0) {
      let h = a[n]
      for (delete a[n]; h--; ) this.removeEventListener(n, mi)
      delete o[n]
    }
    return l
  }
  disposeInternal() {
    this.listeners_ && Ao(this.listeners_)
  }
  getListeners(t) {
    return (this.listeners_ && this.listeners_[t]) || void 0
  }
  hasListener(t) {
    return this.listeners_ ? (t ? t in this.listeners_ : Object.keys(this.listeners_).length > 0) : !1
  }
  removeEventListener(t, e) {
    const n = this.listeners_ && this.listeners_[t]
    if (n) {
      const s = n.indexOf(e)
      s !== -1 &&
        (this.pendingRemovals_ && t in this.pendingRemovals_
          ? ((n[s] = mi), ++this.pendingRemovals_[t])
          : (n.splice(s, 1), n.length === 0 && delete this.listeners_[t]))
    }
  }
}
const ut = {
  CHANGE: 'change',
  ERROR: 'error',
  CONTEXTMENU: 'contextmenu',
  DBLCLICK: 'dblclick',
  LOAD: 'load',
}
function _t(i, t, e, n, s) {
  if ((n && n !== i && (e = e.bind(n)), s)) {
    const o = e
    e = function () {
      ;(i.removeEventListener(t, e), o.apply(this, arguments))
    }
  }
  const r = { target: i, type: t, listener: e }
  return (i.addEventListener(t, e), r)
}
function bs(i, t, e, n) {
  return _t(i, t, e, n, !0)
}
function bt(i) {
  i && i.target && (i.target.removeEventListener(i.type, i.listener), Ao(i))
}
class Ai extends jh {
  constructor() {
    ;(super(),
      (this.on = this.onInternal),
      (this.once = this.onceInternal),
      (this.un = this.unInternal),
      (this.revision_ = 0))
  }
  changed() {
    ;(++this.revision_, this.dispatchEvent(ut.CHANGE))
  }
  getRevision() {
    return this.revision_
  }
  onInternal(t, e) {
    if (Array.isArray(t)) {
      const n = t.length,
        s = new Array(n)
      for (let r = 0; r < n; ++r) s[r] = _t(this, t[r], e)
      return s
    }
    return _t(this, t, e)
  }
  onceInternal(t, e) {
    let n
    if (Array.isArray(t)) {
      const s = t.length
      n = new Array(s)
      for (let r = 0; r < s; ++r) n[r] = bs(this, t[r], e)
    } else n = bs(this, t, e)
    return ((e.ol_key = n), n)
  }
  unInternal(t, e) {
    const n = e.ol_key
    if (n) xs(n)
    else if (Array.isArray(t)) for (let s = 0, r = t.length; s < r; ++s) this.removeEventListener(t[s], e)
    else this.removeEventListener(t, e)
  }
}
Ai.prototype.on
Ai.prototype.once
Ai.prototype.un
function xs(i) {
  if (Array.isArray(i)) for (let t = 0, e = i.length; t < e; ++t) bt(i[t])
  else bt(i)
}
function L() {
  throw new Error('Unimplemented abstract method.')
}
let qf = 0
function K(i) {
  return i.ol_uid || (i.ol_uid = String(++qf))
}
class Ya extends pt {
  constructor(t, e, n) {
    ;(super(t), (this.key = e), (this.oldValue = n))
  }
}
class Ee extends Ai {
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
    let n
    ;((n = `change:${t}`),
      this.hasListener(n) && this.dispatchEvent(new Ya(n, t, e)),
      (n = kh.PROPERTYCHANGE),
      this.hasListener(n) && this.dispatchEvent(new Ya(n, t, e)))
  }
  addChangeListener(t, e) {
    this.addEventListener(`change:${t}`, e)
  }
  removeChangeListener(t, e) {
    this.removeEventListener(`change:${t}`, e)
  }
  set(t, e, n) {
    const s = this.values_ || (this.values_ = {})
    if (n) s[t] = e
    else {
      const r = s[t]
      ;((s[t] = e), r !== e && this.notify(t, r))
    }
  }
  setProperties(t, e) {
    for (const n in t) this.set(n, t[n], e)
  }
  applyProperties(t) {
    t.values_ && Object.assign(this.values_ || (this.values_ = {}), t.values_)
  }
  unset(t, e) {
    if (this.values_ && t in this.values_) {
      const n = this.values_[t]
      ;(delete this.values_[t], Vn(this.values_) && (this.values_ = null), e || this.notify(t, n))
    }
  }
}
const ee = { ADD: 'add', REMOVE: 'remove' },
  Ba = { LENGTH: 'length' }
class es extends pt {
  constructor(t, e, n) {
    ;(super(t), (this.element = e), (this.index = n))
  }
}
class tn extends Ee {
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
      for (let n = 0, s = this.array_.length; n < s; ++n) this.assertUnique_(this.array_[n], n)
    this.updateLength_()
  }
  clear() {
    for (; this.getLength() > 0; ) this.pop()
  }
  extend(t) {
    for (let e = 0, n = t.length; e < n; ++e) this.push(t[e])
    return this
  }
  forEach(t) {
    const e = this.array_
    for (let n = 0, s = e.length; n < s; ++n) t(e[n], n, e)
  }
  getArray() {
    return this.array_
  }
  item(t) {
    return this.array_[t]
  }
  getLength() {
    return this.get(Ba.LENGTH)
  }
  insertAt(t, e) {
    if (t < 0 || t > this.getLength()) throw new Error('Index out of bounds: ' + t)
    ;(this.unique_ && this.assertUnique_(e),
      this.array_.splice(t, 0, e),
      this.updateLength_(),
      this.dispatchEvent(new es(ee.ADD, e, t)))
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
    for (let n = 0, s = e.length; n < s; ++n) if (e[n] === t) return this.removeAt(n)
  }
  removeAt(t) {
    if (t < 0 || t >= this.getLength()) return
    const e = this.array_[t]
    return (this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(new es(ee.REMOVE, e, t)), e)
  }
  setAt(t, e) {
    const n = this.getLength()
    if (t >= n) {
      this.insertAt(t, e)
      return
    }
    if (t < 0) throw new Error('Index out of bounds: ' + t)
    this.unique_ && this.assertUnique_(e, t)
    const s = this.array_[t]
    ;((this.array_[t] = e),
      this.dispatchEvent(new es(ee.REMOVE, s, t)),
      this.dispatchEvent(new es(ee.ADD, e, t)))
  }
  updateLength_() {
    this.set(Ba.LENGTH, this.array_.length)
  }
  assertUnique_(t, e) {
    for (let n = 0, s = this.array_.length; n < s; ++n) if (this.array_[n] === t && n !== e) throw new Dh(58)
  }
}
function tt(i, t) {
  if (!i) throw new Dh(t)
}
class mt extends Ee {
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
    const t = new mt(this.hasProperties() ? this.getProperties() : null)
    t.setGeometryName(this.getGeometryName())
    const e = this.getGeometry()
    e && t.setGeometry(e.clone())
    const n = this.getStyle()
    return (n && t.setStyle(n), t)
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
    this.geometryChangeKey_ && (bt(this.geometryChangeKey_), (this.geometryChangeKey_ = null))
    const t = this.getGeometry()
    ;(t && (this.geometryChangeKey_ = _t(t, ut.CHANGE, this.handleGeometryChange_, this)), this.changed())
  }
  setGeometry(t) {
    this.set(this.geometryName_, t)
  }
  setStyle(t) {
    ;((this.style_ = t), (this.styleFunction_ = t ? Hf(t) : void 0), this.changed())
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
function Hf(i) {
  if (typeof i == 'function') return i
  let t
  return (
    Array.isArray(i) ? (t = i) : (tt(typeof i.getZIndex == 'function', 41), (t = [i])),
    function () {
      return t
    }
  )
}
const Ge = typeof navigator < 'u' && typeof navigator.userAgent < 'u' ? navigator.userAgent.toLowerCase() : ''
Ge.includes('firefox')
const Jf = Ge.includes('safari') && !Ge.includes('chrom')
Jf && (Ge.includes('version/15.4') || /cpu (os|iphone os) 15_4 like mac os x/.test(Ge))
Ge.includes('webkit') && Ge.includes('edge')
Ge.includes('macintosh')
const Oo =
    typeof WorkerGlobalScope < 'u' && typeof OffscreenCanvas < 'u' && self instanceof WorkerGlobalScope,
  Qf = typeof Image < 'u' && Image.prototype.decode
;(function () {
  let i = !1
  try {
    const t = Object.defineProperty({}, 'passive', {
      get: function () {
        i = !0
      },
    })
    ;(window.addEventListener('_', null, t), window.removeEventListener('_', null, t))
  } catch {}
  return i
})()
new Array(6)
function ke() {
  return [1, 0, 0, 1, 0, 0]
}
function tg(i, t, e, n, s, r, o) {
  return ((i[0] = t), (i[1] = e), (i[2] = n), (i[3] = s), (i[4] = r), (i[5] = o), i)
}
function eg(i, t) {
  return ((i[0] = t[0]), (i[1] = t[1]), (i[2] = t[2]), (i[3] = t[3]), (i[4] = t[4]), (i[5] = t[5]), i)
}
function Et(i, t) {
  const e = t[0],
    n = t[1]
  return ((t[0] = i[0] * e + i[2] * n + i[4]), (t[1] = i[1] * e + i[3] * n + i[5]), t)
}
function ng(i, t, e) {
  return tg(i, t, 0, 0, e, 0, 0)
}
function Oi(i, t, e, n, s, r, o, a) {
  const l = Math.sin(r),
    h = Math.cos(r)
  return (
    (i[0] = n * h),
    (i[1] = s * l),
    (i[2] = -n * l),
    (i[3] = s * h),
    (i[4] = o * n * h - a * n * l + t),
    (i[5] = o * s * l + a * s * h + e),
    i
  )
}
function ig(i, t) {
  const e = sg(t)
  tt(e !== 0, 32)
  const n = t[0],
    s = t[1],
    r = t[2],
    o = t[3],
    a = t[4],
    l = t[5]
  return (
    (i[0] = o / e),
    (i[1] = -s / e),
    (i[2] = -r / e),
    (i[3] = n / e),
    (i[4] = (r * l - o * a) / e),
    (i[5] = -(n * l - s * a) / e),
    i
  )
}
function sg(i) {
  return i[0] * i[3] - i[1] * i[2]
}
let Va
function rg(i) {
  const t = 'matrix(' + i.join(', ') + ')'
  if (Oo) return t
  const e = Va || (Va = document.createElement('div'))
  return ((e.style.transform = t), e.style.transform)
}
const st = { UNKNOWN: 0, INTERSECTING: 1, ABOVE: 2, RIGHT: 4, BELOW: 8, LEFT: 16 }
function It(i) {
  const t = re()
  for (let e = 0, n = i.length; e < n; ++e) Wh(t, i[e])
  return t
}
function Di(i, t, e) {
  return e
    ? ((e[0] = i[0] - t), (e[1] = i[1] - t), (e[2] = i[2] + t), (e[3] = i[3] + t), e)
    : [i[0] - t, i[1] - t, i[2] + t, i[3] + t]
}
function og(i, t) {
  return i.slice()
}
function hn(i, t, e) {
  let n, s
  return (
    t < i[0] ? (n = i[0] - t) : i[2] < t ? (n = t - i[2]) : (n = 0),
    e < i[1] ? (s = i[1] - e) : i[3] < e ? (s = e - i[3]) : (s = 0),
    n * n + s * s
  )
}
function ag(i, t) {
  return Do(i, t[0], t[1])
}
function Ln(i, t) {
  return i[0] <= t[0] && t[2] <= i[2] && i[1] <= t[1] && t[3] <= i[3]
}
function Do(i, t, e) {
  return i[0] <= t && t <= i[2] && i[1] <= e && e <= i[3]
}
function Zr(i, t) {
  const e = i[0],
    n = i[1],
    s = i[2],
    r = i[3],
    o = t[0],
    a = t[1]
  let l = st.UNKNOWN
  return (
    o < e ? (l = l | st.LEFT) : o > s && (l = l | st.RIGHT),
    a < n ? (l = l | st.BELOW) : a > r && (l = l | st.ABOVE),
    l === st.UNKNOWN && (l = st.INTERSECTING),
    l
  )
}
function re() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0]
}
function nn(i, t, e, n, s) {
  return s ? ((s[0] = i), (s[1] = t), (s[2] = e), (s[3] = n), s) : [i, t, e, n]
}
function ko(i) {
  return nn(1 / 0, 1 / 0, -1 / 0, -1 / 0, i)
}
function Es(i, t) {
  const e = i[0],
    n = i[1]
  return nn(e, n, e, n, t)
}
function Gh(i, t, e, n, s) {
  const r = ko(s)
  return Yh(r, i, t, e, n)
}
function Xh(i, t) {
  return i[0] == t[0] && i[2] == t[2] && i[1] == t[1] && i[3] == t[3]
}
function zh(i, t) {
  return (
    t[0] < i[0] && (i[0] = t[0]),
    t[2] > i[2] && (i[2] = t[2]),
    t[1] < i[1] && (i[1] = t[1]),
    t[3] > i[3] && (i[3] = t[3]),
    i
  )
}
function Wh(i, t) {
  ;(t[0] < i[0] && (i[0] = t[0]),
    t[0] > i[2] && (i[2] = t[0]),
    t[1] < i[1] && (i[1] = t[1]),
    t[1] > i[3] && (i[3] = t[1]))
}
function Yh(i, t, e, n, s) {
  for (; e < n; e += s) lg(i, t[e], t[e + 1])
  return i
}
function lg(i, t, e) {
  ;((i[0] = Math.min(i[0], t)),
    (i[1] = Math.min(i[1], e)),
    (i[2] = Math.max(i[2], t)),
    (i[3] = Math.max(i[3], e)))
}
function Bh(i, t) {
  let e
  return ((e = t(Vh(i))), e || ((e = t(Uh(i))), e) || ((e = t(Kh(i))), e) || ((e = t(Zh(i))), e) ? e : !1)
}
function Vh(i) {
  return [i[0], i[1]]
}
function Uh(i) {
  return [i[2], i[1]]
}
function Un(i) {
  return [(i[0] + i[2]) / 2, (i[1] + i[3]) / 2]
}
function hg(i, t, e, n, s) {
  const [r, o, a, l, h, c, u, d] = cg(i, t, e, n)
  return nn(Math.min(r, a, h, u), Math.min(o, l, c, d), Math.max(r, a, h, u), Math.max(o, l, c, d), s)
}
function cg(i, t, e, n) {
  const s = (t * n[0]) / 2,
    r = (t * n[1]) / 2,
    o = Math.cos(e),
    a = Math.sin(e),
    l = s * o,
    h = s * a,
    c = r * o,
    u = r * a,
    d = i[0],
    f = i[1]
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
function pi(i) {
  return i[3] - i[1]
}
function Zh(i) {
  return [i[0], i[3]]
}
function Kh(i) {
  return [i[2], i[3]]
}
function Gt(i) {
  return i[2] - i[0]
}
function jt(i, t) {
  return i[0] <= t[2] && i[2] >= t[0] && i[1] <= t[3] && i[3] >= t[1]
}
function $h(i) {
  return i[2] < i[0] || i[3] < i[1]
}
function ug(i, t) {
  return t ? ((t[0] = i[0]), (t[1] = i[1]), (t[2] = i[2]), (t[3] = i[3]), t) : i
}
function dg(i, t, e) {
  let n = !1
  const s = Zr(i, t),
    r = Zr(i, e)
  if (s === st.INTERSECTING || r === st.INTERSECTING) n = !0
  else {
    const o = i[0],
      a = i[1],
      l = i[2],
      h = i[3],
      c = t[0],
      u = t[1],
      d = e[0],
      f = e[1],
      g = (f - u) / (d - c)
    let _, m
    ;(r & st.ABOVE && !(s & st.ABOVE) && ((_ = d - (f - h) / g), (n = _ >= o && _ <= l)),
      !n && r & st.RIGHT && !(s & st.RIGHT) && ((m = f - (d - l) * g), (n = m >= a && m <= h)),
      !n && r & st.BELOW && !(s & st.BELOW) && ((_ = d - (f - a) / g), (n = _ >= o && _ <= l)),
      !n && r & st.LEFT && !(s & st.LEFT) && ((m = f - (d - o) * g), (n = m >= a && m <= h)))
  }
  return n
}
function qh(i, t) {
  const e = t.getExtent(),
    n = Un(i)
  if (t.canWrapX() && (n[0] < e[0] || n[0] >= e[2])) {
    const s = Gt(e),
      o = Math.floor((n[0] - e[0]) / s) * s
    ;((i[0] -= o), (i[2] -= o))
  }
  return i
}
function fg(i, t) {
  if (t.canWrapX()) {
    const e = t.getExtent()
    if (!isFinite(i[0]) || !isFinite(i[2])) return [[e[0], i[1], e[2], i[3]]]
    qh(i, t)
    const n = Gt(e)
    if (Gt(i) > n) return [[e[0], i[1], e[2], i[3]]]
    if (i[0] < e[0])
      return [
        [i[0] + n, i[1], e[2], i[3]],
        [e[0], i[1], i[2], i[3]],
      ]
    if (i[2] > e[2])
      return [
        [i[0], i[1], e[2], i[3]],
        [e[0], i[1], i[2] - n, i[3]],
      ]
  }
  return [i]
}
const Hh = {
  radians: 6370997 / (2 * Math.PI),
  degrees: (2 * Math.PI * 6370997) / 360,
  ft: 0.3048,
  m: 1,
  'us-ft': 1200 / 3937,
}
class Jh {
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
    return this.metersPerUnit_ || Hh[this.units_]
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
const ki = 6378137,
  Fn = Math.PI * ki,
  gg = [-Fn, -Fn, Fn, Fn],
  _g = [-180, -85, 180, 85],
  ns = ki * Math.log(Math.tan(Math.PI / 2))
class En extends Jh {
  constructor(t) {
    super({
      code: t,
      units: 'm',
      extent: gg,
      global: !0,
      worldExtent: _g,
      getPointResolution: function (e, n) {
        return e / Math.cosh(n[1] / ki)
      },
    })
  }
}
const Ua = [
  new En('EPSG:3857'),
  new En('EPSG:102100'),
  new En('EPSG:102113'),
  new En('EPSG:900913'),
  new En('http://www.opengis.net/def/crs/EPSG/0/3857'),
  new En('http://www.opengis.net/gml/srs/epsg.xml#3857'),
]
function mg(i, t, e) {
  const n = i.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = i.slice()) : (t = new Array(n))))
  for (let s = 0; s < n; s += e) {
    t[s] = (Fn * i[s]) / 180
    let r = ki * Math.log(Math.tan((Math.PI * (+i[s + 1] + 90)) / 360))
    ;(r > ns ? (r = ns) : r < -ns && (r = -ns), (t[s + 1] = r))
  }
  return t
}
function pg(i, t, e) {
  const n = i.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = i.slice()) : (t = new Array(n))))
  for (let s = 0; s < n; s += e)
    ((t[s] = (180 * i[s]) / Fn), (t[s + 1] = (360 * Math.atan(Math.exp(i[s + 1] / ki))) / Math.PI - 90))
  return t
}
const yg = 6378137,
  Za = [-180, -90, 180, 90],
  xg = (Math.PI * yg) / 180
class Ze extends Jh {
  constructor(t, e) {
    super({
      code: t,
      units: 'degrees',
      extent: Za,
      axisOrientation: e,
      global: !0,
      metersPerUnit: xg,
      worldExtent: Za,
    })
  }
}
const Ka = [
  new Ze('CRS:84'),
  new Ze('EPSG:4326', 'neu'),
  new Ze('urn:ogc:def:crs:OGC:1.3:CRS84'),
  new Ze('urn:ogc:def:crs:OGC:2:84'),
  new Ze('http://www.opengis.net/def/crs/OGC/1.3/CRS84'),
  new Ze('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
  new Ze('http://www.opengis.net/def/crs/EPSG/0/4326', 'neu'),
]
let Kr = {}
function Eg(i) {
  return Kr[i] || Kr[i.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] || null
}
function Cg(i, t) {
  Kr[i] = t
}
let zn = {}
function Ps(i, t, e) {
  const n = i.getCode(),
    s = t.getCode()
  ;(n in zn || (zn[n] = {}), (zn[n][s] = e))
}
function wg(i, t) {
  let e
  return (i in zn && t in zn[i] && (e = zn[i][t]), e)
}
function ct(i, t, e) {
  return Math.min(Math.max(i, t), e)
}
function Rg(i, t, e, n, s, r) {
  const o = s - e,
    a = r - n
  if (o !== 0 || a !== 0) {
    const l = ((i - e) * o + (t - n) * a) / (o * o + a * a)
    l > 1 ? ((e = s), (n = r)) : l > 0 && ((e += o * l), (n += a * l))
  }
  return ge(i, t, e, n)
}
function ge(i, t, e, n) {
  const s = e - i,
    r = n - t
  return s * s + r * r
}
function $a(i) {
  return (i * 180) / Math.PI
}
function Wn(i) {
  return (i * Math.PI) / 180
}
function $r(i, t) {
  const e = i % t
  return e * t < 0 ? e + t : e
}
function Mt(i, t, e) {
  return i + e * (t - i)
}
function Qh(i, t) {
  const e = Math.pow(10, t)
  return Math.round(i * e) / e
}
function Tg(i, t) {
  return ((i[0] += +t[0]), (i[1] += +t[1]), i)
}
function Sg(i, t) {
  const e = t.getRadius(),
    n = t.getCenter(),
    s = n[0],
    r = n[1],
    o = i[0],
    a = i[1]
  let l = o - s
  const h = a - r
  l === 0 && h === 0 && (l = 1)
  const c = Math.sqrt(l * l + h * h),
    u = s + (e * l) / c,
    d = r + (e * h) / c
  return [u, d]
}
function No(i, t) {
  const e = i[0],
    n = i[1],
    s = t[0],
    r = t[1],
    o = s[0],
    a = s[1],
    l = r[0],
    h = r[1],
    c = l - o,
    u = h - a,
    d = c === 0 && u === 0 ? 0 : (c * (e - o) + u * (n - a)) / (c * c + u * u || 0)
  let f, g
  return (
    d <= 0 ? ((f = o), (g = a)) : d >= 1 ? ((f = l), (g = h)) : ((f = o + d * c), (g = a + d * u)),
    [f, g]
  )
}
function Vt(i, t) {
  let e = !0
  for (let n = i.length - 1; n >= 0; --n)
    if (i[n] != t[n]) {
      e = !1
      break
    }
  return e
}
function vg(i, t) {
  const e = Math.cos(t),
    n = Math.sin(t),
    s = i[0] * e - i[1] * n,
    r = i[1] * e + i[0] * n
  return ((i[0] = s), (i[1] = r), i)
}
function _e(i, t) {
  const e = i[0] - t[0],
    n = i[1] - t[1]
  return e * e + n * n
}
function Ls(i, t) {
  return Math.sqrt(_e(i, t))
}
function Ig(i, t) {
  return _e(i, No(i, t))
}
function Mg(i, t) {
  if (t.canWrapX()) {
    const e = Gt(t.getExtent()),
      n = bg(i, t, e)
    n && (i[0] -= n * e)
  }
  return i
}
function bg(i, t, e) {
  const n = t.getExtent()
  let s = 0
  return (
    t.canWrapX() && (i[0] < n[0] || i[0] > n[2]) && ((e = e || Gt(n)), (s = Math.floor((i[0] - n[0]) / e))),
    s
  )
}
const tc = 63710088e-1
function ec(i, t, e) {
  e = e || tc
  const n = Wn(i[1]),
    s = Wn(t[1]),
    r = (s - n) / 2,
    o = Wn(t[0] - i[0]) / 2,
    a = Math.sin(r) * Math.sin(r) + Math.sin(o) * Math.sin(o) * Math.cos(n) * Math.cos(s)
  return 2 * e * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
function Pg(i, t, e, n) {
  n = n || tc
  const s = Wn(i[1]),
    r = Wn(i[0]),
    o = t / n,
    a = Math.asin(Math.sin(s) * Math.cos(o) + Math.cos(s) * Math.sin(o) * Math.cos(e)),
    l = r + Math.atan2(Math.sin(e) * Math.sin(o) * Math.cos(s), Math.cos(o) - Math.sin(s) * Math.sin(a))
  return [$a(l), $a(a)]
}
function Lg(...i) {
  console.warn(...i)
}
let qr = !0
function nc(i) {
  qr = !1
}
function jo(i, t) {
  if (t !== void 0) {
    for (let e = 0, n = i.length; e < n; ++e) t[e] = i[e]
    t = t
  } else t = i.slice()
  return t
}
function Fg(i, t) {
  if (t !== void 0 && i !== t) {
    for (let e = 0, n = i.length; e < n; ++e) t[e] = i[e]
    i = t
  }
  return i
}
function Ag(i) {
  ;(Cg(i.getCode(), i), Ps(i, i, jo))
}
function Og(i) {
  i.forEach(Ag)
}
function Rt(i) {
  return typeof i == 'string' ? Eg(i) : i || null
}
function qa(i) {
  ;(Og(i),
    i.forEach(function (t) {
      i.forEach(function (e) {
        t !== e && Ps(t, e, jo)
      })
    }))
}
function Dg(i, t, e, n) {
  i.forEach(function (s) {
    t.forEach(function (r) {
      ;(Ps(s, r, e), Ps(r, s, n))
    })
  })
}
function Go(i, t) {
  return i ? (typeof i == 'string' ? Rt(i) : i) : Rt(t)
}
function ii(i, t) {
  return (nc(), Ht(i, 'EPSG:4326', 'EPSG:3857'))
}
function kg(i, t) {
  if (i === t) return !0
  const e = i.getUnits() === t.getUnits()
  return (i.getCode() === t.getCode() || ic(i, t) === jo) && e
}
function ic(i, t) {
  const e = i.getCode(),
    n = t.getCode()
  let s = wg(e, n)
  return (s || (s = Fg), s)
}
function Hr(i, t) {
  const e = Rt(i),
    n = Rt(t)
  return ic(e, n)
}
function Ht(i, t, e) {
  return Hr(t, e)(i, void 0, i.length)
}
function Zn(i, t) {
  return i
}
function H(i, t) {
  return (
    qr &&
      !Vt(i, [0, 0]) &&
      i[0] >= -180 &&
      i[0] <= 180 &&
      i[1] >= -90 &&
      i[1] <= 90 &&
      ((qr = !1),
      Lg('Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.')),
    i
  )
}
function Qs(i, t) {
  return i
}
function An(i, t) {
  return i
}
function Ng() {
  ;(qa(Ua), qa(Ka), Dg(Ka, Ua, mg, pg))
}
Ng()
function en(i, t, e, n, s, r) {
  r = r || []
  let o = 0
  for (let a = t; a < e; a += n) {
    const l = i[a],
      h = i[a + 1]
    ;((r[o++] = s[0] * l + s[2] * h + s[4]), (r[o++] = s[1] * l + s[3] * h + s[5]))
  }
  return (r && r.length != o && (r.length = o), r)
}
function Xo(i, t, e, n, s, r, o) {
  o = o || []
  const a = Math.cos(s),
    l = Math.sin(s),
    h = r[0],
    c = r[1]
  let u = 0
  for (let d = t; d < e; d += n) {
    const f = i[d] - h,
      g = i[d + 1] - c
    ;((o[u++] = h + f * a - g * l), (o[u++] = c + f * l + g * a))
    for (let _ = d + 2; _ < d + n; ++_) o[u++] = i[_]
  }
  return (o && o.length != u && (o.length = u), o)
}
function jg(i, t, e, n, s, r, o, a) {
  a = a || []
  const l = o[0],
    h = o[1]
  let c = 0
  for (let u = t; u < e; u += n) {
    const d = i[u] - l,
      f = i[u + 1] - h
    ;((a[c++] = l + s * d), (a[c++] = h + r * f))
    for (let g = u + 2; g < u + n; ++g) a[c++] = i[g]
  }
  return (a && a.length != c && (a.length = c), a)
}
function Gg(i, t, e, n, s, r, o) {
  o = o || []
  let a = 0
  for (let l = t; l < e; l += n) {
    ;((o[a++] = i[l] + s), (o[a++] = i[l + 1] + r))
    for (let h = l + 2; h < l + n; ++h) o[a++] = i[h]
  }
  return (o && o.length != a && (o.length = a), o)
}
const Ha = ke()
class sc extends Ee {
  constructor() {
    ;(super(),
      (this.extent_ = re()),
      (this.extentRevision_ = -1),
      (this.simplifiedGeometryMaxMinSquaredTolerance = 0),
      (this.simplifiedGeometryRevision = 0),
      (this.simplifyTransformedInternal = $f(function (t, e, n) {
        if (!n) return this.getSimplifiedGeometry(e)
        const s = this.clone()
        return (s.applyTransform(n), s.getSimplifiedGeometry(e))
      })))
  }
  simplifyTransformed(t, e) {
    return this.simplifyTransformedInternal(this.getRevision(), t, e)
  }
  clone() {
    return L()
  }
  closestPointXY(t, e, n, s) {
    return L()
  }
  containsXY(t, e) {
    const n = this.getClosestPoint([t, e])
    return n[0] === t && n[1] === e
  }
  getClosestPoint(t, e) {
    return ((e = e || [NaN, NaN]), this.closestPointXY(t[0], t[1], e, 1 / 0), e)
  }
  intersectsCoordinate(t) {
    return this.containsXY(t[0], t[1])
  }
  computeExtent(t) {
    return L()
  }
  getExtent(t) {
    if (this.extentRevision_ != this.getRevision()) {
      const e = this.computeExtent(this.extent_)
      ;((isNaN(e[0]) || isNaN(e[1])) && ko(e), (this.extentRevision_ = this.getRevision()))
    }
    return ug(this.extent_, t)
  }
  rotate(t, e) {
    L()
  }
  scale(t, e, n) {
    L()
  }
  simplify(t) {
    return this.getSimplifiedGeometry(t * t)
  }
  getSimplifiedGeometry(t) {
    return L()
  }
  getType() {
    return L()
  }
  applyTransform(t) {
    L()
  }
  intersectsExtent(t) {
    return L()
  }
  translate(t, e) {
    L()
  }
  transform(t, e) {
    const n = Rt(t),
      s =
        n.getUnits() == 'tile-pixels'
          ? function (r, o, a) {
              const l = n.getExtent(),
                h = n.getWorldExtent(),
                c = pi(h) / pi(l)
              return (Oi(Ha, h[0], h[3], c, -c, 0, 0, 0), en(r, 0, r.length, a, Ha, o), Hr(n, e)(r, o, a))
            }
          : Hr(n, e)
    return (this.applyTransform(s), this)
  }
}
class Ye extends sc {
  constructor() {
    ;(super(), (this.layout = 'XY'), (this.stride = 2), (this.flatCoordinates = null))
  }
  computeExtent(t) {
    return Gh(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
  }
  getCoordinates() {
    return L()
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
    ;((this.stride = Fs(t)), (this.layout = t), (this.flatCoordinates = e))
  }
  setCoordinates(t, e) {
    L()
  }
  setLayout(t, e, n) {
    let s
    if (t) s = Fs(t)
    else {
      for (let r = 0; r < n; ++r) {
        if (e.length === 0) {
          ;((this.layout = 'XY'), (this.stride = 2))
          return
        }
        e = e[0]
      }
      ;((s = e.length), (t = Xg(s)))
    }
    ;((this.layout = t), (this.stride = s))
  }
  applyTransform(t) {
    this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed())
  }
  rotate(t, e) {
    const n = this.getFlatCoordinates()
    if (n) {
      const s = this.getStride()
      ;(Xo(n, 0, n.length, s, t, e, n), this.changed())
    }
  }
  scale(t, e, n) {
    ;(e === void 0 && (e = t), n || (n = Un(this.getExtent())))
    const s = this.getFlatCoordinates()
    if (s) {
      const r = this.getStride()
      ;(jg(s, 0, s.length, r, t, e, n, s), this.changed())
    }
  }
  translate(t, e) {
    const n = this.getFlatCoordinates()
    if (n) {
      const s = this.getStride()
      ;(Gg(n, 0, n.length, s, t, e, n), this.changed())
    }
  }
}
function Xg(i) {
  let t
  return (i == 2 ? (t = 'XY') : i == 3 ? (t = 'XYZ') : i == 4 && (t = 'XYZM'), t)
}
function Fs(i) {
  let t
  return (i == 'XY' ? (t = 2) : i == 'XYZ' || i == 'XYM' ? (t = 3) : i == 'XYZM' && (t = 4), t)
}
function zg(i, t, e) {
  const n = i.getFlatCoordinates()
  if (!n) return null
  const s = i.getStride()
  return en(n, 0, n.length, s, t, e)
}
function Ja(i, t, e, n, s, r, o) {
  const a = i[t],
    l = i[t + 1],
    h = i[e] - a,
    c = i[e + 1] - l
  let u
  if (h === 0 && c === 0) u = t
  else {
    const d = ((s - a) * h + (r - l) * c) / (h * h + c * c)
    if (d > 1) u = e
    else if (d > 0) {
      for (let f = 0; f < n; ++f) o[f] = Mt(i[t + f], i[e + f], d)
      o.length = n
      return
    } else u = t
  }
  for (let d = 0; d < n; ++d) o[d] = i[u + d]
  o.length = n
}
function zo(i, t, e, n, s) {
  let r = i[t],
    o = i[t + 1]
  for (t += n; t < e; t += n) {
    const a = i[t],
      l = i[t + 1],
      h = ge(r, o, a, l)
    ;(h > s && (s = h), (r = a), (o = l))
  }
  return s
}
function Wo(i, t, e, n, s) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((s = zo(i, t, a, n, s)), (t = a))
  }
  return s
}
function Wg(i, t, e, n, s) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((s = Wo(i, t, a, n, s)), (t = a[a.length - 1]))
  }
  return s
}
function Yo(i, t, e, n, s, r, o, a, l, h, c) {
  if (t == e) return h
  let u, d
  if (s === 0) {
    if (((d = ge(o, a, i[t], i[t + 1])), d < h)) {
      for (u = 0; u < n; ++u) l[u] = i[t + u]
      return ((l.length = n), d)
    }
    return h
  }
  c = c || [NaN, NaN]
  let f = t + n
  for (; f < e; )
    if ((Ja(i, f - n, f, n, o, a, c), (d = ge(o, a, c[0], c[1])), d < h)) {
      for (h = d, u = 0; u < n; ++u) l[u] = c[u]
      ;((l.length = n), (f += n))
    } else f += n * Math.max(((Math.sqrt(d) - Math.sqrt(h)) / s) | 0, 1)
  if (r && (Ja(i, e - n, t, n, o, a, c), (d = ge(o, a, c[0], c[1])), d < h)) {
    for (h = d, u = 0; u < n; ++u) l[u] = c[u]
    l.length = n
  }
  return h
}
function Bo(i, t, e, n, s, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = Yo(i, t, f, n, s, r, o, a, l, h, c)), (t = f))
  }
  return h
}
function Yg(i, t, e, n, s, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = Bo(i, t, f, n, s, r, o, a, l, h, c)), (t = f[f.length - 1]))
  }
  return h
}
function rc(i, t, e, n) {
  for (let s = 0, r = e.length; s < r; ++s) i[t++] = e[s]
  return t
}
function tr(i, t, e, n) {
  for (let s = 0, r = e.length; s < r; ++s) {
    const o = e[s]
    for (let a = 0; a < n; ++a) i[t++] = o[a]
  }
  return t
}
function Vo(i, t, e, n, s) {
  s = s || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = tr(i, t, e[o], n)
    ;((s[r++] = l), (t = l))
  }
  return ((s.length = r), s)
}
function Bg(i, t, e, n, s) {
  s = s || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = Vo(i, t, e[o], n, s[r])
    ;(l.length === 0 && (l[0] = t), (s[r++] = l), (t = l[l.length - 1]))
  }
  return ((s.length = r), s)
}
function Uo(i, t, e, n, s, r, o) {
  const a = (e - t) / n
  if (a < 3) {
    for (; t < e; t += n) ((r[o++] = i[t]), (r[o++] = i[t + 1]))
    return o
  }
  const l = new Array(a)
  ;((l[0] = 1), (l[a - 1] = 1))
  const h = [t, e - n]
  let c = 0
  for (; h.length > 0; ) {
    const u = h.pop(),
      d = h.pop()
    let f = 0
    const g = i[d],
      _ = i[d + 1],
      m = i[u],
      p = i[u + 1]
    for (let y = d + n; y < u; y += n) {
      const x = i[y],
        E = i[y + 1],
        C = Rg(x, E, g, _, m, p)
      C > f && ((c = y), (f = C))
    }
    f > s && ((l[(c - t) / n] = 1), d + n < c && h.push(d, c), c + n < u && h.push(c, u))
  }
  for (let u = 0; u < a; ++u) l[u] && ((r[o++] = i[t + u * n]), (r[o++] = i[t + u * n + 1]))
  return o
}
function Vg(i, t, e, n, s, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = Uo(i, t, c, n, s, r, o)), a.push(o), (t = c))
  }
  return o
}
function $e(i, t) {
  return t * Math.round(i / t)
}
function Ug(i, t, e, n, s, r, o) {
  if (t == e) return o
  let a = $e(i[t], s),
    l = $e(i[t + 1], s)
  ;((t += n), (r[o++] = a), (r[o++] = l))
  let h, c
  do if (((h = $e(i[t], s)), (c = $e(i[t + 1], s)), (t += n), t == e)) return ((r[o++] = h), (r[o++] = c), o)
  while (h == a && c == l)
  for (; t < e; ) {
    const u = $e(i[t], s),
      d = $e(i[t + 1], s)
    if (((t += n), u == h && d == c)) continue
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
function oc(i, t, e, n, s, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = Ug(i, t, c, n, s, r, o)), a.push(o), (t = c))
  }
  return o
}
function Zg(i, t, e, n, s, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l],
      u = []
    ;((o = oc(i, t, c, n, s, r, o, u)), a.push(u), (t = c[c.length - 1]))
  }
  return o
}
function Ae(i, t, e, n, s) {
  s = s !== void 0 ? s : []
  let r = 0
  for (let o = t; o < e; o += n) s[r++] = i.slice(o, o + n)
  return ((s.length = r), s)
}
function yi(i, t, e, n, s) {
  s = s !== void 0 ? s : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((s[r++] = Ae(i, t, l, n, s[r])), (t = l))
  }
  return ((s.length = r), s)
}
function Jr(i, t, e, n, s) {
  s = s !== void 0 ? s : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((s[r++] = l.length === 1 && l[0] === t ? [] : yi(i, t, l, n, s[r])), (t = l[l.length - 1]))
  }
  return ((s.length = r), s)
}
function ac(i, t, e, n) {
  let s = 0,
    r = i[e - n],
    o = i[e - n + 1]
  for (; t < e; t += n) {
    const a = i[t],
      l = i[t + 1]
    ;((s += o * a - r * l), (r = a), (o = l))
  }
  return s / 2
}
function lc(i, t, e, n) {
  let s = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((s += ac(i, t, a, n)), (t = a))
  }
  return s
}
function Kg(i, t, e, n) {
  let s = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((s += lc(i, t, a, n)), (t = a[a.length - 1]))
  }
  return s
}
class xi extends Ye {
  constructor(t, e) {
    ;(super(),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
  }
  clone() {
    return new xi(this.flatCoordinates.slice(), this.layout)
  }
  closestPointXY(t, e, n, s) {
    return s < hn(this.getExtent(), t, e)
      ? s
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            zo(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Yo(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !0, t, e, n, s))
  }
  getArea() {
    return ac(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getCoordinates() {
    return Ae(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getSimplifiedGeometryInternal(t) {
    const e = []
    return (
      (e.length = Uo(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0)),
      new xi(e, 'XY')
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
      (this.flatCoordinates.length = tr(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
class Xt extends Ye {
  constructor(t, e) {
    ;(super(), this.setCoordinates(t, e))
  }
  clone() {
    const t = new Xt(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, s) {
    const r = this.flatCoordinates,
      o = ge(t, e, r[0], r[1])
    if (o < s) {
      const a = this.stride
      for (let l = 0; l < a; ++l) n[l] = r[l]
      return ((n.length = a), o)
    }
    return s
  }
  getCoordinates() {
    return this.flatCoordinates ? this.flatCoordinates.slice() : []
  }
  computeExtent(t) {
    return Es(this.flatCoordinates, t)
  }
  getType() {
    return 'Point'
  }
  intersectsExtent(t) {
    return Do(t, this.flatCoordinates[0], this.flatCoordinates[1])
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 0),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = rc(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
function $g(i, t, e, n, s) {
  return !Bh(s, function (o) {
    return !He(i, t, e, n, o[0], o[1])
  })
}
function He(i, t, e, n, s, r) {
  let o = 0,
    a = i[e - n],
    l = i[e - n + 1]
  for (; t < e; t += n) {
    const h = i[t],
      c = i[t + 1]
    ;(l <= r
      ? c > r && (h - a) * (r - l) - (s - a) * (c - l) > 0 && o++
      : c <= r && (h - a) * (r - l) - (s - a) * (c - l) < 0 && o--,
      (a = h),
      (l = c))
  }
  return o !== 0
}
function Zo(i, t, e, n, s, r) {
  if (e.length === 0 || !He(i, t, e[0], n, s, r)) return !1
  for (let o = 1, a = e.length; o < a; ++o) if (He(i, e[o - 1], e[o], n, s, r)) return !1
  return !0
}
function qg(i, t, e, n, s, r) {
  if (e.length === 0) return !1
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    if (Zo(i, t, l, n, s, r)) return !0
    t = l[l.length - 1]
  }
  return !1
}
function hc(i, t, e, n, s, r, o) {
  let a, l, h, c, u, d, f
  const g = s[r + 1],
    _ = []
  for (let y = 0, x = e.length; y < x; ++y) {
    const E = e[y]
    for (c = i[E - n], d = i[E - n + 1], a = t; a < E; a += n)
      ((u = i[a]),
        (f = i[a + 1]),
        ((g <= d && f <= g) || (d <= g && g <= f)) && ((h = ((g - d) / (f - d)) * (u - c) + c), _.push(h)),
        (c = u),
        (d = f))
  }
  let m = NaN,
    p = -1 / 0
  for (_.sort(_i), c = _[0], a = 1, l = _.length; a < l; ++a) {
    u = _[a]
    const y = Math.abs(u - c)
    ;(y > p && ((h = (c + u) / 2), Zo(i, t, e, n, h, g) && ((m = h), (p = y))), (c = u))
  }
  return (isNaN(m) && (m = s[r]), o ? (o.push(m, g, p), o) : [m, g, p])
}
function Hg(i, t, e, n, s) {
  let r = []
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((r = hc(i, t, l, n, s, 2 * o, r)), (t = l[l.length - 1]))
  }
  return r
}
function cc(i, t, e, n, s) {
  let r
  for (t += n; t < e; t += n) if (((r = s(i.slice(t - n, t), i.slice(t, t + n))), r)) return r
  return !1
}
function er(i, t, e, n, s) {
  const r = Yh(re(), i, t, e, n)
  return jt(s, r)
    ? Ln(s, r) || (r[0] >= s[0] && r[2] <= s[2]) || (r[1] >= s[1] && r[3] <= s[3])
      ? !0
      : cc(i, t, e, n, function (o, a) {
          return dg(s, o, a)
        })
    : !1
}
function Jg(i, t, e, n, s) {
  for (let r = 0, o = e.length; r < o; ++r) {
    if (er(i, t, e[r], n, s)) return !0
    t = e[r]
  }
  return !1
}
function Qg(i, t, e, n, s) {
  return !!(
    er(i, t, e, n, s) ||
    He(i, t, e, n, s[0], s[1]) ||
    He(i, t, e, n, s[0], s[3]) ||
    He(i, t, e, n, s[2], s[1]) ||
    He(i, t, e, n, s[2], s[3])
  )
}
function uc(i, t, e, n, s) {
  if (!Qg(i, t, e[0], n, s)) return !1
  if (e.length === 1) return !0
  for (let r = 1, o = e.length; r < o; ++r)
    if ($g(i, e[r - 1], e[r], n, s) && !er(i, e[r - 1], e[r], n, s)) return !1
  return !0
}
function t_(i, t, e, n, s) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    if (uc(i, t, a, n, s)) return !0
    t = a[a.length - 1]
  }
  return !1
}
function e_(i, t, e, n) {
  for (; t < e - n; ) {
    for (let s = 0; s < n; ++s) {
      const r = i[t + s]
      ;((i[t + s] = i[e - n + s]), (i[e - n + s] = r))
    }
    ;((t += n), (e -= n))
  }
}
function dc(i, t, e, n) {
  let s = 0,
    r = i[e - n],
    o = i[e - n + 1]
  for (; t < e; t += n) {
    const a = i[t],
      l = i[t + 1]
    ;((s += (a - r) * (l + o)), (r = a), (o = l))
  }
  return s === 0 ? void 0 : s > 0
}
function fc(i, t, e, n, s) {
  s = s !== void 0 ? s : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = dc(i, t, a, n)
    if (r === 0) {
      if ((s && l) || (!s && !l)) return !1
    } else if ((s && !l) || (!s && l)) return !1
    t = a
  }
  return !0
}
function n_(i, t, e, n, s) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    if (!fc(i, t, a, n, s)) return !1
    a.length && (t = a[a.length - 1])
  }
  return !0
}
function Qr(i, t, e, n, s) {
  s = s !== void 0 ? s : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = dc(i, t, a, n)
    ;((r === 0 ? (s && l) || (!s && !l) : (s && !l) || (!s && l)) && e_(i, t, a, n), (t = a))
  }
  return t
}
function Qa(i, t, e, n, s) {
  for (let r = 0, o = e.length; r < o; ++r) t = Qr(i, t, e[r], n, s)
  return t
}
class zt extends Ye {
  constructor(t, e, n) {
    ;(super(),
      (this.ends_ = []),
      (this.flatInteriorPointRevision_ = -1),
      (this.flatInteriorPoint_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      e !== void 0 && n ? (this.setFlatCoordinates(e, t), (this.ends_ = n)) : this.setCoordinates(t, e))
  }
  appendLinearRing(t) {
    ;(this.flatCoordinates
      ? ie(this.flatCoordinates, t.getFlatCoordinates())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed())
  }
  clone() {
    const t = new zt(this.flatCoordinates.slice(), this.layout, this.ends_.slice())
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, s) {
    return s < hn(this.getExtent(), t, e)
      ? s
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(Wo(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Bo(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, n, s))
  }
  containsXY(t, e) {
    return Zo(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, e)
  }
  getArea() {
    return lc(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride)
  }
  getCoordinates(t) {
    let e
    return (
      t !== void 0
        ? ((e = this.getOrientedFlatCoordinates().slice()), Qr(e, 0, this.ends_, this.stride, t))
        : (e = this.flatCoordinates),
      yi(e, 0, this.ends_, this.stride)
    )
  }
  getEnds() {
    return this.ends_
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const t = Un(this.getExtent())
      ;((this.flatInteriorPoint_ = hc(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, 0)),
        (this.flatInteriorPointRevision_ = this.getRevision()))
    }
    return this.flatInteriorPoint_
  }
  getInteriorPoint() {
    return new Xt(this.getFlatInteriorPoint(), 'XYM')
  }
  getLinearRingCount() {
    return this.ends_.length
  }
  getLinearRing(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new xi(this.flatCoordinates.slice(t === 0 ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout)
  }
  getLinearRings() {
    const t = this.layout,
      e = this.flatCoordinates,
      n = this.ends_,
      s = []
    let r = 0
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = n[o],
        h = new xi(e.slice(r, l), t)
      ;(s.push(h), (r = l))
    }
    return s
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates
      ;(fc(t, 0, this.ends_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = Qr(
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
      n = []
    return (
      (e.length = oc(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t), e, 0, n)),
      new zt(e, 'XY', n)
    )
  }
  getType() {
    return 'Polygon'
  }
  intersectsExtent(t) {
    return uc(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []))
    const n = Vo(this.flatCoordinates, 0, t, this.stride, this.ends_)
    ;((this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1]), this.changed())
  }
}
function i_(i, t, e, n) {
  e = e || 32
  const s = []
  for (let r = 0; r < e; ++r) ie(s, Pg(i, t, (2 * Math.PI * r) / e, n))
  return (s.push(s[0], s[1]), new zt(s, 'XY', [s.length]))
}
function tl(i) {
  if ($h(i)) throw new Error('Cannot create polygon from empty extent')
  const t = i[0],
    e = i[1],
    n = i[2],
    s = i[3],
    r = [t, e, t, s, n, s, n, e, t, e]
  return new zt(r, 'XY', [r.length])
}
function s_(i, t, e) {
  t = t || 32
  const n = i.getStride(),
    s = i.getLayout(),
    r = i.getCenter(),
    o = n * (t + 1),
    a = new Array(o)
  for (let c = 0; c < o; c += n) {
    ;((a[c] = 0), (a[c + 1] = 0))
    for (let u = 2; u < n; u++) a[c + u] = r[u]
  }
  const l = [a.length],
    h = new zt(a, s, l)
  return (r_(h, r, i.getRadius()), h)
}
function r_(i, t, e, n) {
  const s = i.getFlatCoordinates(),
    r = i.getStride(),
    o = s.length / r - 1,
    a = 0
  for (let l = 0; l <= o; ++l) {
    const h = l * r,
      c = a + ($r(l, o) * 2 * Math.PI) / o
    ;((s[h] = t[0] + e * Math.cos(c)), (s[h + 1] = t[1] + e * Math.sin(c)))
  }
  i.changed()
}
const Ei = { PRERENDER: 'prerender', POSTRENDER: 'postrender', PRECOMPOSE: 'precompose' }
class Xe {
  constructor(t) {
    ;((t = t || {}), (this.color_ = t.color !== void 0 ? t.color : null))
  }
  clone() {
    const t = this.getColor()
    return new Xe({ color: Array.isArray(t) ? t.slice() : t || void 0 })
  }
  getColor() {
    return this.color_
  }
  setColor(t) {
    this.color_ = t
  }
}
function gc(i, t, e, n, s, r, o) {
  let a, l
  const h = (e - t) / n
  if (h === 1) a = t
  else if (h === 2) ((a = t), (l = s))
  else if (h !== 0) {
    let c = i[t],
      u = i[t + 1],
      d = 0
    const f = [0]
    for (let m = t + n; m < e; m += n) {
      const p = i[m],
        y = i[m + 1]
      ;((d += Math.sqrt((p - c) * (p - c) + (y - u) * (y - u))), f.push(d), (c = p), (u = y))
    }
    const g = s * d,
      _ = Zf(f, g)
    _ < 0 ? ((l = (g - f[-_ - 2]) / (f[-_ - 1] - f[-_ - 2])), (a = t + (-_ - 2) * n)) : (a = t + _ * n)
  }
  ;((o = o > 1 ? o : 2), (r = r || new Array(o)))
  for (let c = 0; c < o; ++c)
    r[c] = a === void 0 ? NaN : l === void 0 ? i[a + c] : Mt(i[a + c], i[a + n + c], l)
  return r
}
function to(i, t, e, n, s, r) {
  if (e == t) return null
  let o
  if (s < i[t + n - 1]) return r ? ((o = i.slice(t, t + n)), (o[n - 1] = s), o) : null
  if (i[e - 1] < s) return r ? ((o = i.slice(e - n, e)), (o[n - 1] = s), o) : null
  if (s == i[t + n - 1]) return i.slice(t, t + n)
  let a = t / n,
    l = e / n
  for (; a < l; ) {
    const d = (a + l) >> 1
    s < i[(d + 1) * n - 1] ? (l = d) : (a = d + 1)
  }
  const h = i[a * n - 1]
  if (s == h) return i.slice((a - 1) * n, (a - 1) * n + n)
  const c = i[(a + 1) * n - 1],
    u = (s - h) / (c - h)
  o = []
  for (let d = 0; d < n - 1; ++d) o.push(Mt(i[(a - 1) * n + d], i[a * n + d], u))
  return (o.push(s), o)
}
function o_(i, t, e, n, s, r, o) {
  if (o) return to(i, t, e[e.length - 1], n, s, r)
  let a
  if (s < i[n - 1]) return r ? ((a = i.slice(0, n)), (a[n - 1] = s), a) : null
  if (i[i.length - 1] < s) return r ? ((a = i.slice(i.length - n)), (a[n - 1] = s), a) : null
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    if (t != c) {
      if (s < i[t + n - 1]) return null
      if (s <= i[c - 1]) return to(i, t, c, n, s, !1)
      t = c
    }
  }
  return null
}
function _c(i, t, e, n) {
  let s = i[t],
    r = i[t + 1],
    o = 0
  for (let a = t + n; a < e; a += n) {
    const l = i[a],
      h = i[a + 1]
    ;((o += Math.sqrt((l - s) * (l - s) + (h - r) * (h - r))), (s = l), (r = h))
  }
  return o
}
class Zt extends Ye {
  constructor(t, e) {
    ;(super(),
      (this.flatMidpoint_ = null),
      (this.flatMidpointRevision_ = -1),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
  }
  appendCoordinate(t) {
    ;(this.flatCoordinates ? ie(this.flatCoordinates, t) : (this.flatCoordinates = t.slice()), this.changed())
  }
  clone() {
    const t = new Zt(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, s) {
    return s < hn(this.getExtent(), t, e)
      ? s
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            zo(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Yo(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !1, t, e, n, s))
  }
  forEachSegment(t) {
    return cc(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
  }
  getCoordinateAtM(t, e) {
    return this.layout != 'XYM' && this.layout != 'XYZM'
      ? null
      : ((e = e !== void 0 ? e : !1),
        to(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e))
  }
  getCoordinates() {
    return Ae(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getCoordinateAt(t, e) {
    return gc(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, this.stride)
  }
  getLength() {
    return _c(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
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
      (e.length = Uo(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0)),
      new Zt(e, 'XY')
    )
  }
  getType() {
    return 'LineString'
  }
  intersectsExtent(t) {
    return er(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = tr(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
class me {
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
    return new me({
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
function As(i, t) {
  return Array.isArray(i) ? i : (t === void 0 ? (t = [i, i]) : ((t[0] = i), (t[1] = i)), t)
}
class nr {
  constructor(t) {
    ;((this.opacity_ = t.opacity),
      (this.rotateWithView_ = t.rotateWithView),
      (this.rotation_ = t.rotation),
      (this.scale_ = t.scale),
      (this.scaleArray_ = As(t.scale)),
      (this.displacement_ = t.displacement),
      (this.declutterMode_ = t.declutterMode))
  }
  clone() {
    const t = this.getScale()
    return new nr({
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
    return L()
  }
  getImage(t) {
    return L()
  }
  getHitDetectionImage() {
    return L()
  }
  getPixelRatio(t) {
    return 1
  }
  getImageState() {
    return L()
  }
  getImageSize() {
    return L()
  }
  getOrigin() {
    return L()
  }
  getSize() {
    return L()
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
    ;((this.scale_ = t), (this.scaleArray_ = As(t)))
  }
  listenImageChange(t) {
    L()
  }
  load() {
    L()
  }
  unlistenImageChange(t) {
    L()
  }
}
const a_ = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,
  l_ = /^([a-z]*)$|^hsla?\(.*\)$/i
function mc(i) {
  return typeof i == 'string' ? i : pc(i)
}
function h_(i) {
  const t = document.createElement('div')
  if (((t.style.color = i), t.style.color !== '')) {
    document.body.appendChild(t)
    const e = getComputedStyle(t).color
    return (document.body.removeChild(t), e)
  }
  return ''
}
const c_ = (function () {
  const t = {}
  let e = 0
  return function (n) {
    let s
    if (t.hasOwnProperty(n)) s = t[n]
    else {
      if (e >= 1024) {
        let r = 0
        for (const o in t) (r++ & 3) === 0 && (delete t[o], --e)
      }
      ;((s = u_(n)), (t[n] = s), ++e)
    }
    return s
  }
})()
function Os(i) {
  return Array.isArray(i) ? i : c_(i)
}
function u_(i) {
  let t, e, n, s, r
  if ((l_.exec(i) && (i = h_(i)), a_.exec(i))) {
    const o = i.length - 1
    let a
    o <= 4 ? (a = 1) : (a = 2)
    const l = o === 4 || o === 8
    ;((t = parseInt(i.substr(1 + 0 * a, a), 16)),
      (e = parseInt(i.substr(1 + 1 * a, a), 16)),
      (n = parseInt(i.substr(1 + 2 * a, a), 16)),
      l ? (s = parseInt(i.substr(1 + 3 * a, a), 16)) : (s = 255),
      a == 1 && ((t = (t << 4) + t), (e = (e << 4) + e), (n = (n << 4) + n), l && (s = (s << 4) + s)),
      (r = [t, e, n, s / 255]))
  } else
    i.startsWith('rgba(')
      ? ((r = i.slice(5, -1).split(',').map(Number)), el(r))
      : i.startsWith('rgb(')
        ? ((r = i.slice(4, -1).split(',').map(Number)), r.push(1), el(r))
        : tt(!1, 14)
  return r
}
function el(i) {
  return (
    (i[0] = ct((i[0] + 0.5) | 0, 0, 255)),
    (i[1] = ct((i[1] + 0.5) | 0, 0, 255)),
    (i[2] = ct((i[2] + 0.5) | 0, 0, 255)),
    (i[3] = ct(i[3], 0, 1)),
    i
  )
}
function pc(i) {
  let t = i[0]
  t != (t | 0) && (t = (t + 0.5) | 0)
  let e = i[1]
  e != (e | 0) && (e = (e + 0.5) | 0)
  let n = i[2]
  n != (n | 0) && (n = (n + 0.5) | 0)
  const s = i[3] === void 0 ? 1 : Math.round(i[3] * 100) / 100
  return 'rgba(' + t + ',' + e + ',' + n + ',' + s + ')'
}
function ne(i) {
  return Array.isArray(i) ? pc(i) : i
}
function $t(i, t, e, n) {
  let s
  return (
    e && e.length
      ? (s = e.shift())
      : Oo
        ? (s = new OffscreenCanvas(i || 300, t || 300))
        : (s = document.createElement('canvas')),
    i && (s.width = i),
    t && (s.height = t),
    s.getContext('2d', n)
  )
}
function d_(i) {
  const t = i.canvas
  ;((t.width = 1), (t.height = 1), i.clearRect(0, 0, 1, 1))
}
const f_ = new RegExp(
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
  nl = ['style', 'variant', 'weight', 'size', 'lineHeight', 'family'],
  yc = function (i) {
    const t = i.match(f_)
    if (!t) return null
    const e = { lineHeight: 'normal', size: '1.2em', style: 'normal', weight: 'normal', variant: 'normal' }
    for (let n = 0, s = nl.length; n < s; ++n) {
      const r = t[n + 1]
      r !== void 0 && (e[nl[n]] = r)
    }
    return ((e.families = e.family.split(/,\s?/)), e)
  },
  xc = '10px sans-serif',
  wt = '#000',
  Ds = 'round',
  pe = [],
  ye = 0,
  Kn = 'round',
  Ci = 10,
  wi = '#000',
  Ri = 'center',
  ks = 'middle',
  Je = [0, 0, 0, 0],
  Ti = 1,
  ve = new Ee()
let vn = null,
  eo
const no = {},
  g_ = (function () {
    const t = '32px ',
      e = ['monospace', 'serif'],
      n = e.length,
      s = 'wmytzilWMYTZIL@#/&?$%10'
    let r, o
    function a(h, c, u) {
      let d = !0
      for (let f = 0; f < n; ++f) {
        const g = e[f]
        if (((o = Ns(h + ' ' + c + ' ' + t + g, s)), u != g)) {
          const _ = Ns(h + ' ' + c + ' ' + t + u + ',' + g, s)
          d = d && _ != o
        }
      }
      return !!d
    }
    function l() {
      let h = !0
      const c = ve.getKeys()
      for (let u = 0, d = c.length; u < d; ++u) {
        const f = c[u]
        ve.get(f) < 100 &&
          (a.apply(
            this,
            f.split(`
`),
          )
            ? (Ao(no), (vn = null), (eo = void 0), ve.set(f, 100))
            : (ve.set(f, ve.get(f) + 1, !0), (h = !1)))
      }
      h && (clearInterval(r), (r = void 0))
    }
    return function (h) {
      const c = yc(h)
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
        ve.get(_) === void 0 &&
          (ve.set(_, 100, !0),
          a(c.style, c.weight, g) || (ve.set(_, 0, !0), r === void 0 && (r = setInterval(l, 32))))
      }
    }
  })(),
  __ = (function () {
    let i
    return function (t) {
      let e = no[t]
      if (e == null) {
        if (Oo) {
          const n = yc(t),
            s = Ec(t, 'Žg')
          e =
            (isNaN(Number(n.lineHeight)) ? 1.2 : Number(n.lineHeight)) *
            (s.actualBoundingBoxAscent + s.actualBoundingBoxDescent)
        } else
          (i ||
            ((i = document.createElement('div')),
            (i.innerHTML = 'M'),
            (i.style.minHeight = '0'),
            (i.style.maxHeight = 'none'),
            (i.style.height = 'auto'),
            (i.style.padding = '0'),
            (i.style.border = 'none'),
            (i.style.position = 'absolute'),
            (i.style.display = 'block'),
            (i.style.left = '-99999px')),
            (i.style.font = t),
            document.body.appendChild(i),
            (e = i.offsetHeight),
            document.body.removeChild(i))
        no[t] = e
      }
      return e
    }
  })()
function Ec(i, t) {
  return (vn || (vn = $t(1, 1)), i != eo && ((vn.font = i), (eo = vn.font)), vn.measureText(t))
}
function Ns(i, t) {
  return Ec(i, t).width
}
function il(i, t, e) {
  if (t in e) return e[t]
  const n = t
    .split(
      `
`,
    )
    .reduce((s, r) => Math.max(s, Ns(i, r)), 0)
  return ((e[t] = n), n)
}
function m_(i, t) {
  const e = [],
    n = [],
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
    const d = t[h + 1] || i.font,
      f = Ns(d, u)
    ;(e.push(f), (o += f))
    const g = __(d)
    ;(n.push(g), (l = Math.max(l, g)))
  }
  return { width: r, height: a, widths: e, heights: n, lineWidths: s }
}
function p_(i, t, e, n, s, r, o, a, l, h, c) {
  ;(i.save(),
    e !== 1 && (i.globalAlpha *= e),
    t && i.setTransform.apply(i, t),
    n.contextInstructions
      ? (i.translate(l, h), i.scale(c[0], c[1]), y_(n, i))
      : c[0] < 0 || c[1] < 0
        ? (i.translate(l, h), i.scale(c[0], c[1]), i.drawImage(n, s, r, o, a, 0, 0, o, a))
        : i.drawImage(n, s, r, o, a, l, h, o * c[0], a * c[1]),
    i.restore())
}
function y_(i, t) {
  const e = i.contextInstructions
  for (let n = 0, s = e.length; n < s; n += 2)
    Array.isArray(e[n + 1]) ? t[e[n]].apply(t, e[n + 1]) : (t[e[n]] = e[n + 1])
}
class ir extends nr {
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
      e = new ir({
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
      n = this.getScaleArray()
    return [t[0] / 2 - e[0] / n[0], t[1] / 2 + e[1] / n[1]]
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
      const n = this.renderOptions_,
        s = $t(n.size * t, n.size * t)
      ;(this.draw_(n, s, t), (e = s.canvas), (this.canvas_[t] = e))
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
  calculateLineJoinSize_(t, e, n) {
    if (e === 0 || this.points_ === 1 / 0 || (t !== 'bevel' && t !== 'miter')) return e
    let s = this.radius_,
      r = this.radius2_ === void 0 ? s : this.radius2_
    if (s < r) {
      const R = s
      ;((s = r), (r = R))
    }
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2,
      a = (2 * Math.PI) / o,
      l = r * Math.sin(a),
      h = Math.sqrt(r * r - l * l),
      c = s - h,
      u = Math.sqrt(l * l + c * c),
      d = u / l
    if (t === 'miter' && d <= n) return d * e
    const f = e / 2 / d,
      g = (e / 2) * (c / u),
      m = Math.sqrt((s + f) * (s + f) + g * g) - s
    if (this.radius2_ === void 0 || t === 'bevel') return m * 2
    const p = s * Math.sin(a),
      y = Math.sqrt(s * s - p * p),
      x = r - y,
      C = Math.sqrt(p * p + x * x) / p
    if (C <= n) {
      const R = (C * e) / 2 - r - s
      return 2 * Math.max(m, R)
    }
    return m * 2
  }
  createRenderOptions() {
    let t = Kn,
      e = 0,
      n = null,
      s = 0,
      r,
      o = 0
    this.stroke_ &&
      ((r = this.stroke_.getColor()),
      r === null && (r = wi),
      (r = ne(r)),
      (o = this.stroke_.getWidth()),
      o === void 0 && (o = Ti),
      (n = this.stroke_.getLineDash()),
      (s = this.stroke_.getLineDashOffset()),
      (t = this.stroke_.getLineJoin()),
      t === void 0 && (t = Kn),
      (e = this.stroke_.getMiterLimit()),
      e === void 0 && (e = Ci))
    const a = this.calculateLineJoinSize_(t, o, e),
      l = Math.max(this.radius_, this.radius2_ || 0),
      h = Math.ceil(2 * l + a)
    return {
      strokeStyle: r,
      strokeWidth: o,
      size: h,
      lineDash: n,
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
  draw_(t, e, n) {
    if ((e.scale(n, n), e.translate(t.size / 2, t.size / 2), this.createPath_(e), this.fill_)) {
      let s = this.fill_.getColor()
      ;(s === null && (s = wt), (e.fillStyle = ne(s)), e.fill())
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
        n = 0
      if (
        (typeof e == 'string' && (e = Os(e)),
        e === null ? (n = 1) : Array.isArray(e) && (n = e.length === 4 ? e[3] : 1),
        n === 0)
      ) {
        const s = $t(t.size, t.size)
        ;((this.hitDetectionCanvas_ = s.canvas), this.drawHitDetectionCanvas_(t, s))
      }
    }
    this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.getImage(1))
  }
  createPath_(t) {
    let e = this.points_
    const n = this.radius_
    if (e === 1 / 0) t.arc(0, 0, n, 0, 2 * Math.PI)
    else {
      const s = this.radius2_ === void 0 ? n : this.radius2_
      this.radius2_ !== void 0 && (e *= 2)
      const r = this.angle_ - Math.PI / 2,
        o = (2 * Math.PI) / e
      for (let a = 0; a < e; a++) {
        const l = r + a * o,
          h = a % 2 === 0 ? n : s
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
class Hn extends ir {
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
      e = new Hn({
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
class Ut {
  constructor(t) {
    ;((t = t || {}),
      (this.geometry_ = null),
      (this.geometryFunction_ = sl),
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
      new Ut({
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
          : (this.geometryFunction_ = sl),
      (this.geometry_ = t))
  }
  setZIndex(t) {
    this.zIndex_ = t
  }
}
function x_(i) {
  let t
  if (typeof i == 'function') t = i
  else {
    let e
    ;(Array.isArray(i) ? (e = i) : (tt(typeof i.getZIndex == 'function', 41), (e = [i])),
      (t = function () {
        return e
      }))
  }
  return t
}
let yr = null
function E_(i, t) {
  if (!yr) {
    const e = new Xe({ color: 'rgba(255,255,255,0.4)' }),
      n = new me({ color: '#3399CC', width: 1.25 })
    yr = [new Ut({ image: new Hn({ fill: e, stroke: n, radius: 5 }), fill: e, stroke: n })]
  }
  return yr
}
function Cc() {
  const i = {},
    t = [255, 255, 255, 1],
    e = [0, 153, 255, 1],
    n = 3
  return (
    (i.Polygon = [new Ut({ fill: new Xe({ color: [255, 255, 255, 0.5] }) })]),
    (i.MultiPolygon = i.Polygon),
    (i.LineString = [
      new Ut({ stroke: new me({ color: t, width: n + 2 }) }),
      new Ut({ stroke: new me({ color: e, width: n }) }),
    ]),
    (i.MultiLineString = i.LineString),
    (i.Circle = i.Polygon.concat(i.LineString)),
    (i.Point = [
      new Ut({
        image: new Hn({
          radius: n * 2,
          fill: new Xe({ color: e }),
          stroke: new me({ color: t, width: n / 2 }),
        }),
        zIndex: 1 / 0,
      }),
    ]),
    (i.MultiPoint = i.Point),
    (i.GeometryCollection = i.Polygon.concat(i.LineString, i.Point)),
    i
  )
}
function sl(i) {
  return i.getGeometry()
}
const C_ = '#333'
class Ko {
  constructor(t) {
    ;((t = t || {}),
      (this.font_ = t.font),
      (this.rotation_ = t.rotation),
      (this.rotateWithView_ = t.rotateWithView),
      (this.scale_ = t.scale),
      (this.scaleArray_ = As(t.scale !== void 0 ? t.scale : 1)),
      (this.text_ = t.text),
      (this.textAlign_ = t.textAlign),
      (this.justify_ = t.justify),
      (this.repeat_ = t.repeat),
      (this.textBaseline_ = t.textBaseline),
      (this.fill_ = t.fill !== void 0 ? t.fill : new Xe({ color: C_ })),
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
    return new Ko({
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
    ;((this.scale_ = t), (this.scaleArray_ = As(t !== void 0 ? t : 1)))
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
class w_ extends Ee {
  constructor(t) {
    ;(super(), this.on, this.once, this.un, (this.background_ = t.background))
    const e = Object.assign({}, t)
    ;(typeof t.properties == 'object' && (delete e.properties, Object.assign(e, t.properties)),
      (e[V.OPACITY] = t.opacity !== void 0 ? t.opacity : 1),
      tt(typeof e[V.OPACITY] == 'number', 64),
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
      n = this.getZIndex()
    return (
      (e.opacity = ct(Math.round(this.getOpacity() * 100) / 100, 0, 1)),
      (e.visible = this.getVisible()),
      (e.extent = this.getExtent()),
      (e.zIndex = n === void 0 && !e.managed ? 1 / 0 : n),
      (e.maxResolution = this.getMaxResolution()),
      (e.minResolution = Math.max(this.getMinResolution(), 0)),
      (e.minZoom = this.getMinZoom()),
      (e.maxZoom = this.getMaxZoom()),
      (this.state_ = e),
      e
    )
  }
  getLayersArray(t) {
    return L()
  }
  getLayerStatesArray(t) {
    return L()
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
    return L()
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
    ;(tt(typeof t == 'number', 64), this.set(V.OPACITY, t))
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
const kt = { ANIMATING: 0, INTERACTING: 1 },
  Bt = { CENTER: 'center', RESOLUTION: 'resolution', ROTATION: 'rotation' },
  R_ = 256
function rl(i, t, e) {
  return function (n, s, r, o, a) {
    if (!n) return
    if (!s && !t) return n
    const l = t ? 0 : r[0] * s,
      h = t ? 0 : r[1] * s,
      c = a ? a[0] : 0,
      u = a ? a[1] : 0
    let d = i[0] + l / 2 + c,
      f = i[2] - l / 2 + c,
      g = i[1] + h / 2 + u,
      _ = i[3] - h / 2 + u
    ;(d > f && ((d = (f + d) / 2), (f = d)), g > _ && ((g = (_ + g) / 2), (_ = g)))
    let m = ct(n[0], d, f),
      p = ct(n[1], g, _)
    if (o && e && s) {
      const y = 30 * s
      ;((m += -y * Math.log(1 + Math.max(0, d - n[0]) / y) + y * Math.log(1 + Math.max(0, n[0] - f) / y)),
        (p += -y * Math.log(1 + Math.max(0, g - n[1]) / y) + y * Math.log(1 + Math.max(0, n[1] - _) / y)))
    }
    return [m, p]
  }
}
function T_(i) {
  return i
}
function $o(i, t, e, n) {
  const s = Gt(t) / e[0],
    r = pi(t) / e[1]
  return n ? Math.min(i, Math.max(s, r)) : Math.min(i, Math.min(s, r))
}
function qo(i, t, e) {
  let n = Math.min(i, t)
  const s = 50
  return (
    (n *= Math.log(1 + s * Math.max(0, i / t - 1)) / s + 1),
    e && ((n = Math.max(n, e)), (n /= Math.log(1 + s * Math.max(0, e / i - 1)) / s + 1)),
    ct(n, e / 2, t * 2)
  )
}
function S_(i, t, e, n) {
  return (
    (t = t !== void 0 ? t : !0),
    function (s, r, o, a) {
      if (s !== void 0) {
        const l = i[0],
          h = i[i.length - 1],
          c = e ? $o(l, e, o, n) : l
        if (a) return t ? qo(s, c, h) : ct(s, h, c)
        const u = Math.min(c, s),
          d = Math.floor(Nh(i, u, r))
        return i[d] > c && d < i.length - 1 ? i[d + 1] : i[d]
      }
    }
  )
}
function v_(i, t, e, n, s, r) {
  return (
    (n = n !== void 0 ? n : !0),
    (e = e !== void 0 ? e : 0),
    function (o, a, l, h) {
      if (o !== void 0) {
        const c = s ? $o(t, s, l, r) : t
        if (h) return n ? qo(o, c, e) : ct(o, e, c)
        const u = 1e-9,
          d = Math.ceil(Math.log(t / c) / Math.log(i) - u),
          f = -a * (0.5 - u) + 0.5,
          g = Math.min(c, o),
          _ = Math.floor(Math.log(t / g) / Math.log(i) + f),
          m = Math.max(d, _),
          p = t / Math.pow(i, m)
        return ct(p, e, c)
      }
    }
  )
}
function ol(i, t, e, n, s) {
  return (
    (e = e !== void 0 ? e : !0),
    function (r, o, a, l) {
      if (r !== void 0) {
        const h = n ? $o(i, n, a, s) : i
        return !e || !l ? ct(r, t, h) : qo(r, h, t)
      }
    }
  )
}
function I_(i) {
  if (i !== void 0) return 0
}
function al(i) {
  if (i !== void 0) return i
}
function M_(i) {
  const t = (2 * Math.PI) / i
  return function (e, n) {
    if (n) return e
    if (e !== void 0) return ((e = Math.floor(e / t + 0.5) * t), e)
  }
}
function b_(i) {
  return (
    (i = i || Wn(5)),
    function (t, e) {
      if (e) return t
      if (t !== void 0) return Math.abs(t) <= i ? 0 : t
    }
  )
}
function P_(i) {
  return Math.pow(i, 3)
}
function L_(i) {
  return 1 - P_(1 - i)
}
function F_(i) {
  return 3 * i * i - 2 * i * i * i
}
const xr = 0
class ll extends Ee {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      (t = Object.assign({}, t)),
      (this.hints_ = [0, 0]),
      (this.animations_ = []),
      this.updateAnimationKey_,
      (this.projection_ = Go(t.projection, 'EPSG:3857')),
      (this.viewportSize_ = [100, 100]),
      (this.targetCenter_ = null),
      this.targetResolution_,
      this.targetRotation_,
      (this.nextCenter_ = null),
      this.nextResolution_,
      this.nextRotation_,
      (this.cancelAnchor_ = void 0),
      t.projection && nc(),
      t.center && (t.center = H(t.center, this.projection_)),
      t.extent && (t.extent = An(t.extent, this.projection_)),
      this.applyOptions_(t))
  }
  applyOptions_(t) {
    const e = Object.assign({}, t)
    for (const a in Bt) delete e[a]
    this.setProperties(e, !0)
    const n = O_(t)
    ;((this.maxResolution_ = n.maxResolution),
      (this.minResolution_ = n.minResolution),
      (this.zoomFactor_ = n.zoomFactor),
      (this.resolutions_ = t.resolutions),
      (this.padding_ = t.padding),
      (this.minZoom_ = n.minZoom))
    const s = A_(t),
      r = n.constraint,
      o = D_(t)
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
    const n = this.getCenterInternal()
    if (n) {
      const s = t || [0, 0, 0, 0]
      e = e || [0, 0, 0, 0]
      const r = this.getResolution(),
        o = (r / 2) * (s[3] - e[3] + e[1] - s[1]),
        a = (r / 2) * (s[0] - e[0] + e[2] - s[2])
      this.setCenterInternal([n[0] + o, n[1] - a])
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
    for (let n = 0; n < e.length; ++n) {
      let s = arguments[n]
      ;(s.center && ((s = Object.assign({}, s)), (s.center = H(s.center, this.getProjection()))),
        s.anchor && ((s = Object.assign({}, s)), (s.anchor = H(s.anchor, this.getProjection()))),
        (e[n] = s))
    }
    this.animateInternal.apply(this, e)
  }
  animateInternal(t) {
    let e = arguments.length,
      n
    e > 1 && typeof arguments[e - 1] == 'function' && ((n = arguments[e - 1]), --e)
    let s = 0
    for (; s < e && !this.isDef(); ++s) {
      const c = arguments[s]
      ;(c.center && this.setCenterInternal(c.center),
        c.zoom !== void 0 ? this.setZoom(c.zoom) : c.resolution && this.setResolution(c.resolution),
        c.rotation !== void 0 && this.setRotation(c.rotation))
    }
    if (s === e) {
      n && is(n, !0)
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
          easing: c.easing || F_,
          callback: n,
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
        const d = $r(c.rotation - l + Math.PI, 2 * Math.PI) - Math.PI
        ;((u.targetRotation = l + d), (l = u.targetRotation))
      }
      ;(k_(u) ? (u.complete = !0) : (r += u.duration), h.push(u))
    }
    ;(this.animations_.push(h), this.setHint(kt.ANIMATING, 1), this.updateAnimations_())
  }
  getAnimating() {
    return this.hints_[kt.ANIMATING] > 0
  }
  getInteracting() {
    return this.hints_[kt.INTERACTING] > 0
  }
  cancelAnimations() {
    this.setHint(kt.ANIMATING, -this.hints_[kt.ANIMATING])
    let t
    for (let e = 0, n = this.animations_.length; e < n; ++e) {
      const s = this.animations_[e]
      if ((s[0].callback && is(s[0].callback, !1), !t))
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
    for (let n = this.animations_.length - 1; n >= 0; --n) {
      const s = this.animations_[n]
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
              ? $r(l.targetRotation + Math.PI, 2 * Math.PI) - Math.PI
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
        ;((this.animations_[n] = null),
          this.setHint(kt.ANIMATING, -1),
          (this.nextCenter_ = null),
          (this.nextResolution_ = NaN),
          (this.nextRotation_ = NaN))
        const o = s[0].callback
        o && is(o, !0)
      }
    }
    ;((this.animations_ = this.animations_.filter(Boolean)),
      e &&
        this.updateAnimationKey_ === void 0 &&
        (this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this))))
  }
  calculateCenterRotate(t, e) {
    let n
    const s = this.getCenterInternal()
    return (s !== void 0 && ((n = [s[0] - e[0], s[1] - e[1]]), vg(n, t - this.getRotation()), Tg(n, e)), n)
  }
  calculateCenterZoom(t, e) {
    let n
    const s = this.getCenterInternal(),
      r = this.getResolution()
    if (s !== void 0 && r !== void 0) {
      const o = e[0] - (t * (e[0] - s[0])) / r,
        a = e[1] - (t * (e[1] - s[1])) / r
      n = [o, a]
    }
    return n
  }
  getViewportSize_(t) {
    const e = this.viewportSize_
    if (t) {
      const n = e[0],
        s = e[1]
      return [
        Math.abs(n * Math.cos(t)) + Math.abs(s * Math.sin(t)),
        Math.abs(n * Math.sin(t)) + Math.abs(s * Math.cos(t)),
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
    return t && Zn(t, this.getProjection())
  }
  getCenterInternal() {
    return this.get(Bt.CENTER)
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
    return Qs(e, this.getProjection())
  }
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_()
    const e = this.getCenterInternal()
    tt(e, 1)
    const n = this.getResolution()
    tt(n !== void 0, 2)
    const s = this.getRotation()
    return (tt(s !== void 0, 3), hg(e, n, s, t))
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
    return this.get(Bt.RESOLUTION)
  }
  getResolutions() {
    return this.resolutions_
  }
  getResolutionForExtent(t, e) {
    return this.getResolutionForExtentInternal(An(t, this.getProjection()), e)
  }
  getResolutionForExtentInternal(t, e) {
    e = e || this.getViewportSizeMinusPadding_()
    const n = Gt(t) / e[0],
      s = pi(t) / e[1]
    return Math.max(n, s)
  }
  getResolutionForValueFunction(t) {
    t = t || 2
    const e = this.getConstrainedResolution(this.maxResolution_),
      n = this.minResolution_,
      s = Math.log(e / n) / Math.log(t)
    return function (r) {
      return e / Math.pow(t, r * s)
    }
  }
  getRotation() {
    return this.get(Bt.ROTATION)
  }
  getValueForResolutionFunction(t) {
    const e = Math.log(t || 2),
      n = this.getConstrainedResolution(this.maxResolution_),
      s = this.minResolution_,
      r = Math.log(n / s) / e
    return function (o) {
      return Math.log(n / o) / e / r
    }
  }
  getViewportSizeMinusPadding_(t) {
    let e = this.getViewportSize_(t)
    const n = this.padding_
    return (n && (e = [e[0] - n[1] - n[3], e[1] - n[0] - n[2]]), e)
  }
  getState() {
    const t = this.getProjection(),
      e = this.getResolution(),
      n = this.getRotation()
    let s = this.getCenterInternal()
    const r = this.padding_
    if (r) {
      const o = this.getViewportSizeMinusPadding_()
      s = Er(s, this.getViewportSize_(), [o[0] / 2 + r[3], o[1] / 2 + r[0]], e, n)
    }
    return {
      center: s.slice(0),
      projection: t !== void 0 ? t : null,
      resolution: e,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: n,
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
      n,
      s
    if (this.resolutions_) {
      const r = Nh(this.resolutions_, t, 1)
      ;((e = r),
        (n = this.resolutions_[r]),
        r == this.resolutions_.length - 1 ? (s = 2) : (s = n / this.resolutions_[r + 1]))
    } else ((n = this.maxResolution_), (s = this.zoomFactor_))
    return e + Math.log(n / t) / Math.log(s)
  }
  getResolutionForZoom(t) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1) return 0
      const e = ct(Math.floor(t), 0, this.resolutions_.length - 2),
        n = this.resolutions_[e] / this.resolutions_[e + 1]
      return this.resolutions_[e] / Math.pow(n, ct(t - e, 0, 1))
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_)
  }
  fit(t, e) {
    let n
    if ((tt(Array.isArray(t) || typeof t.getSimplifiedGeometry == 'function', 24), Array.isArray(t))) {
      tt(!$h(t), 25)
      const s = An(t, this.getProjection())
      n = tl(s)
    } else if (t.getType() === 'Circle') {
      const s = An(t.getExtent(), this.getProjection())
      ;((n = tl(s)), n.rotate(this.getRotation(), Un(s)))
    } else n = t
    this.fitInternal(n, e)
  }
  rotatedExtentForGeometry(t) {
    const e = this.getRotation(),
      n = Math.cos(e),
      s = Math.sin(-e),
      r = t.getFlatCoordinates(),
      o = t.getStride()
    let a = 1 / 0,
      l = 1 / 0,
      h = -1 / 0,
      c = -1 / 0
    for (let u = 0, d = r.length; u < d; u += o) {
      const f = r[u] * n - r[u + 1] * s,
        g = r[u] * s + r[u + 1] * n
      ;((a = Math.min(a, f)), (l = Math.min(l, g)), (h = Math.max(h, f)), (c = Math.max(c, g)))
    }
    return [a, l, h, c]
  }
  fitInternal(t, e) {
    e = e || {}
    let n = e.size
    n || (n = this.getViewportSizeMinusPadding_())
    const s = e.padding !== void 0 ? e.padding : [0, 0, 0, 0],
      r = e.nearest !== void 0 ? e.nearest : !1
    let o
    e.minResolution !== void 0
      ? (o = e.minResolution)
      : e.maxZoom !== void 0
        ? (o = this.getResolutionForZoom(e.maxZoom))
        : (o = 0)
    const a = this.rotatedExtentForGeometry(t)
    let l = this.getResolutionForExtentInternal(a, [n[0] - s[1] - s[3], n[1] - s[0] - s[2]])
    ;((l = isNaN(l) ? o : Math.max(l, o)), (l = this.getConstrainedResolution(l, r ? 0 : 1)))
    const h = this.getRotation(),
      c = Math.sin(h),
      u = Math.cos(h),
      d = Un(a)
    ;((d[0] += ((s[1] - s[3]) / 2) * l), (d[1] += ((s[0] - s[2]) / 2) * l))
    const f = d[0] * u - d[1] * c,
      g = d[1] * u + d[0] * c,
      _ = this.getConstrainedCenter([f, g], l),
      m = e.callback ? e.callback : mi
    e.duration !== void 0
      ? this.animateInternal({ resolution: l, center: _, duration: e.duration, easing: e.easing }, m)
      : ((this.targetResolution_ = l), (this.targetCenter_ = _), this.applyTargetState_(!1, !0), is(m, !0))
  }
  centerOn(t, e, n) {
    this.centerOnInternal(H(t, this.getProjection()), e, n)
  }
  centerOnInternal(t, e, n) {
    this.setCenterInternal(Er(t, e, n, this.getResolution(), this.getRotation()))
  }
  calculateCenterShift(t, e, n, s) {
    let r
    const o = this.padding_
    if (o && t) {
      const a = this.getViewportSizeMinusPadding_(-n),
        l = Er(t, s, [a[0] / 2 + o[3], a[1] / 2 + o[0]], e, n)
      r = [t[0] - l[0], t[1] - l[1]]
    }
    return r
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0
  }
  adjustCenter(t) {
    const e = Zn(this.targetCenter_, this.getProjection())
    this.setCenter([e[0] + t[0], e[1] + t[1]])
  }
  adjustCenterInternal(t) {
    const e = this.targetCenter_
    this.setCenterInternal([e[0] + t[0], e[1] + t[1]])
  }
  adjustResolution(t, e) {
    ;((e = e && H(e, this.getProjection())), this.adjustResolutionInternal(t, e))
  }
  adjustResolutionInternal(t, e) {
    const n = this.getAnimating() || this.getInteracting(),
      s = this.getViewportSize_(this.getRotation()),
      r = this.constraints_.resolution(this.targetResolution_ * t, 0, s, n)
    ;(e && (this.targetCenter_ = this.calculateCenterZoom(r, e)),
      (this.targetResolution_ *= t),
      this.applyTargetState_())
  }
  adjustZoom(t, e) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -t), e)
  }
  adjustRotation(t, e) {
    ;(e && (e = H(e, this.getProjection())), this.adjustRotationInternal(t, e))
  }
  adjustRotationInternal(t, e) {
    const n = this.getAnimating() || this.getInteracting(),
      s = this.constraints_.rotation(this.targetRotation_ + t, n)
    ;(e && (this.targetCenter_ = this.calculateCenterRotate(s, e)),
      (this.targetRotation_ += t),
      this.applyTargetState_())
  }
  setCenter(t) {
    this.setCenterInternal(t && H(t, this.getProjection()))
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
    const n = this.getAnimating() || this.getInteracting() || e,
      s = this.constraints_.rotation(this.targetRotation_, n),
      r = this.getViewportSize_(s),
      o = this.constraints_.resolution(this.targetResolution_, 0, r, n),
      a = this.constraints_.center(
        this.targetCenter_,
        o,
        r,
        n,
        this.calculateCenterShift(this.targetCenter_, o, s, r),
      )
    ;(this.get(Bt.ROTATION) !== s && this.set(Bt.ROTATION, s),
      this.get(Bt.RESOLUTION) !== o && (this.set(Bt.RESOLUTION, o), this.set('zoom', this.getZoom(), !0)),
      (!a || !this.get(Bt.CENTER) || !Vt(this.get(Bt.CENTER), a)) && this.set(Bt.CENTER, a),
      this.getAnimating() && !t && this.cancelAnimations(),
      (this.cancelAnchor_ = void 0))
  }
  resolveConstraints(t, e, n) {
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
    ;((n = n || (t === 0 ? this.cancelAnchor_ : void 0)),
      (this.cancelAnchor_ = void 0),
      (this.getResolution() !== a ||
        this.getRotation() !== r ||
        !this.getCenterInternal() ||
        !Vt(this.getCenterInternal(), l)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({ rotation: r, center: l, resolution: a, duration: t, easing: L_, anchor: n })))
  }
  beginInteraction() {
    ;(this.resolveConstraints(0), this.setHint(kt.INTERACTING, 1))
  }
  endInteraction(t, e, n) {
    ;((n = n && H(n, this.getProjection())), this.endInteractionInternal(t, e, n))
  }
  endInteractionInternal(t, e, n) {
    this.getInteracting() && (this.setHint(kt.INTERACTING, -1), this.resolveConstraints(t, e, n))
  }
  getConstrainedCenter(t, e) {
    const n = this.getViewportSize_(this.getRotation())
    return this.constraints_.center(t, e || this.getResolution(), n)
  }
  getConstrainedZoom(t, e) {
    const n = this.getResolutionForZoom(t)
    return this.getZoomForResolution(this.getConstrainedResolution(n, e))
  }
  getConstrainedResolution(t, e) {
    e = e || 0
    const n = this.getViewportSize_(this.getRotation())
    return this.constraints_.resolution(t, e, n)
  }
}
function is(i, t) {
  setTimeout(function () {
    i(t)
  }, 0)
}
function A_(i) {
  if (i.extent !== void 0) {
    const e = i.smoothExtentConstraint !== void 0 ? i.smoothExtentConstraint : !0
    return rl(i.extent, i.constrainOnlyCenter, e)
  }
  const t = Go(i.projection, 'EPSG:3857')
  if (i.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice()
    return ((e[0] = -1 / 0), (e[2] = 1 / 0), rl(e, !1, !1))
  }
  return T_
}
function O_(i) {
  let t,
    e,
    n,
    o = i.minZoom !== void 0 ? i.minZoom : xr,
    a = i.maxZoom !== void 0 ? i.maxZoom : 28
  const l = i.zoomFactor !== void 0 ? i.zoomFactor : 2,
    h = i.multiWorld !== void 0 ? i.multiWorld : !1,
    c = i.smoothResolutionConstraint !== void 0 ? i.smoothResolutionConstraint : !0,
    u = i.showFullExtent !== void 0 ? i.showFullExtent : !1,
    d = Go(i.projection, 'EPSG:3857'),
    f = d.getExtent()
  let g = i.constrainOnlyCenter,
    _ = i.extent
  if ((!h && !_ && d.isGlobal() && ((g = !1), (_ = f)), i.resolutions !== void 0)) {
    const m = i.resolutions
    ;((e = m[o]),
      (n = m[a] !== void 0 ? m[a] : m[m.length - 1]),
      i.constrainResolution ? (t = S_(m, c, !g && _, u)) : (t = ol(e, n, c, !g && _, u)))
  } else {
    const p = (f ? Math.max(Gt(f), pi(f)) : (360 * Hh.degrees) / d.getMetersPerUnit()) / R_ / Math.pow(2, xr),
      y = p / Math.pow(2, 28 - xr)
    ;((e = i.maxResolution),
      e !== void 0 ? (o = 0) : (e = p / Math.pow(l, o)),
      (n = i.minResolution),
      n === void 0 &&
        (i.maxZoom !== void 0
          ? i.maxResolution !== void 0
            ? (n = e / Math.pow(l, a))
            : (n = p / Math.pow(l, a))
          : (n = y)),
      (a = o + Math.floor(Math.log(e / n) / Math.log(l))),
      (n = e / Math.pow(l, a - o)),
      i.constrainResolution ? (t = v_(l, e, n, c, !g && _, u)) : (t = ol(e, n, c, !g && _, u)))
  }
  return { constraint: t, maxResolution: e, minResolution: n, minZoom: o, zoomFactor: l }
}
function D_(i) {
  if (i.enableRotation !== void 0 ? i.enableRotation : !0) {
    const e = i.constrainRotation
    return e === void 0 || e === !0 ? b_() : e === !1 ? al : typeof e == 'number' ? M_(e) : al
  }
  return I_
}
function k_(i) {
  return !(
    (i.sourceCenter && i.targetCenter && !Vt(i.sourceCenter, i.targetCenter)) ||
    i.sourceResolution !== i.targetResolution ||
    i.sourceRotation !== i.targetRotation
  )
}
function Er(i, t, e, n, s) {
  const r = Math.cos(-s)
  let o = Math.sin(-s),
    a = i[0] * r - i[1] * o,
    l = i[1] * r + i[0] * o
  ;((a += (t[0] / 2 - e[0]) * n), (l += (e[1] - t[1] / 2) * n), (o = -o))
  const h = a * r - l * o,
    c = l * r + a * o
  return [h, c]
}
class N_ extends w_ {
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
    const n = t.source ? t.source : null
    this.setSource(n)
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
    ;(this.sourceChangeKey_ && (bt(this.sourceChangeKey_), (this.sourceChangeKey_ = null)),
      (this.sourceReady_ = !1))
    const t = this.getSource()
    ;(t &&
      ((this.sourceChangeKey_ = _t(t, ut.CHANGE, this.handleSourceChange_, this)),
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
    const n = this.getMapInternal()
    ;(!t && n && (t = n.getView()),
      t instanceof ll ? (e = { viewState: t.getState(), extent: t.calculateExtent() }) : (e = t),
      !e.layerStatesArray && n && (e.layerStatesArray = n.getLayerGroup().getLayerStatesArray()))
    let s
    e.layerStatesArray ? (s = e.layerStatesArray.find(o => o.layer === this)) : (s = this.getLayerState())
    const r = this.getExtent()
    return j_(s, e.viewState) && (!r || jt(r, e.extent))
  }
  getAttributions(t) {
    if (!this.isVisible(t)) return []
    let e
    const n = this.getSource()
    if ((n && (e = n.getAttributions()), !e)) return []
    const s = t instanceof ll ? t.getViewStateAndExtent() : t
    let r = e(s)
    return (Array.isArray(r) || (r = [r]), r)
  }
  render(t, e) {
    const n = this.getRenderer()
    return n.prepareFrame(t) ? ((this.rendered = !0), n.renderFrame(t, e)) : null
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
    ;(this.mapPrecomposeKey_ && (bt(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)),
      t || this.changed(),
      this.mapRenderKey_ && (bt(this.mapRenderKey_), (this.mapRenderKey_ = null)),
      t &&
        ((this.mapPrecomposeKey_ = _t(
          t,
          Ei.PRECOMPOSE,
          function (e) {
            const s = e.frameState.layerStatesArray,
              r = this.getLayerState(!1)
            ;(tt(
              !s.some(function (o) {
                return o.layer === r.layer
              }),
              67,
            ),
              s.push(r))
          },
          this,
        )),
        (this.mapRenderKey_ = _t(this, ut.CHANGE, t.render, t)),
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
function j_(i, t) {
  if (!i.visible) return !1
  const e = t.resolution
  if (e < i.minResolution || e >= i.maxResolution) return !1
  const n = t.zoom
  return n > i.minZoom && n <= i.maxZoom
}
function G_(i, t, e, n, s) {
  wc(i, t, e || 0, n || i.length - 1, s || X_)
}
function wc(i, t, e, n, s) {
  for (; n > e; ) {
    if (n - e > 600) {
      var r = n - e + 1,
        o = t - e + 1,
        a = Math.log(r),
        l = 0.5 * Math.exp((2 * a) / 3),
        h = 0.5 * Math.sqrt((a * l * (r - l)) / r) * (o - r / 2 < 0 ? -1 : 1),
        c = Math.max(e, Math.floor(t - (o * l) / r + h)),
        u = Math.min(n, Math.floor(t + ((r - o) * l) / r + h))
      wc(i, t, c, u, s)
    }
    var d = i[t],
      f = e,
      g = n
    for (si(i, e, t), s(i[n], d) > 0 && si(i, e, n); f < g; ) {
      for (si(i, f, g), f++, g--; s(i[f], d) < 0; ) f++
      for (; s(i[g], d) > 0; ) g--
    }
    ;(s(i[e], d) === 0 ? si(i, e, g) : (g++, si(i, g, n)), g <= t && (e = g + 1), t <= g && (n = g - 1))
  }
}
function si(i, t, e) {
  var n = i[t]
  ;((i[t] = i[e]), (i[e] = n))
}
function X_(i, t) {
  return i < t ? -1 : i > t ? 1 : 0
}
let Rc = class {
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
    const n = []
    if (!rs(t, e)) return n
    const s = this.toBBox,
      r = []
    for (; e; ) {
      for (let o = 0; o < e.children.length; o++) {
        const a = e.children[o],
          l = e.leaf ? s(a) : a
        rs(t, l) && (e.leaf ? n.push(a) : wr(t, l) ? this._all(a, n) : r.push(a))
      }
      e = r.pop()
    }
    return n
  }
  collides(t) {
    let e = this.data
    if (!rs(t, e)) return !1
    const n = []
    for (; e; ) {
      for (let s = 0; s < e.children.length; s++) {
        const r = e.children[s],
          o = e.leaf ? this.toBBox(r) : r
        if (rs(t, o)) {
          if (e.leaf || wr(t, o)) return !0
          n.push(r)
        }
      }
      e = n.pop()
    }
    return !1
  }
  load(t) {
    if (!(t && t.length)) return this
    if (t.length < this._minEntries) {
      for (let n = 0; n < t.length; n++) this.insert(t[n])
      return this
    }
    let e = this._build(t.slice(), 0, t.length - 1, 0)
    if (!this.data.children.length) this.data = e
    else if (this.data.height === e.height) this._splitRoot(this.data, e)
    else {
      if (this.data.height < e.height) {
        const n = this.data
        ;((this.data = e), (e = n))
      }
      this._insert(e, this.data.height - e.height - 1, !0)
    }
    return this
  }
  insert(t) {
    return (t && this._insert(t, this.data.height - 1), this)
  }
  clear() {
    return ((this.data = In([])), this)
  }
  remove(t, e) {
    if (!t) return this
    let n = this.data
    const s = this.toBBox(t),
      r = [],
      o = []
    let a, l, h
    for (; n || r.length; ) {
      if ((n || ((n = r.pop()), (l = r[r.length - 1]), (a = o.pop()), (h = !0)), n.leaf)) {
        const c = z_(t, n.children, e)
        if (c !== -1) return (n.children.splice(c, 1), r.push(n), this._condense(r), this)
      }
      !h && !n.leaf && wr(n, s)
        ? (r.push(n), o.push(a), (a = 0), (l = n), (n = n.children[0]))
        : l
          ? (a++, (n = l.children[a]), (h = !1))
          : (n = null)
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
    const n = []
    for (; t; ) (t.leaf ? e.push(...t.children) : n.push(...t.children), (t = n.pop()))
    return e
  }
  _build(t, e, n, s) {
    const r = n - e + 1
    let o = this._maxEntries,
      a
    if (r <= o) return ((a = In(t.slice(e, n + 1))), Cn(a, this.toBBox), a)
    ;(s || ((s = Math.ceil(Math.log(r) / Math.log(o))), (o = Math.ceil(r / Math.pow(o, s - 1)))),
      (a = In([])),
      (a.leaf = !1),
      (a.height = s))
    const l = Math.ceil(r / o),
      h = l * Math.ceil(Math.sqrt(o))
    hl(t, e, n, h, this.compareMinX)
    for (let c = e; c <= n; c += h) {
      const u = Math.min(c + h - 1, n)
      hl(t, c, u, l, this.compareMinY)
      for (let d = c; d <= u; d += l) {
        const f = Math.min(d + l - 1, u)
        a.children.push(this._build(t, d, f, s - 1))
      }
    }
    return (Cn(a, this.toBBox), a)
  }
  _chooseSubtree(t, e, n, s) {
    for (; s.push(e), !(e.leaf || s.length - 1 === n); ) {
      let r = 1 / 0,
        o = 1 / 0,
        a
      for (let l = 0; l < e.children.length; l++) {
        const h = e.children[l],
          c = Cr(h),
          u = B_(t, h) - c
        u < o ? ((o = u), (r = c < r ? c : r), (a = h)) : u === o && c < r && ((r = c), (a = h))
      }
      e = a || e.children[0]
    }
    return e
  }
  _insert(t, e, n) {
    const s = n ? t : this.toBBox(t),
      r = [],
      o = this._chooseSubtree(s, this.data, e, r)
    for (o.children.push(t), hi(o, s); e >= 0 && r[e].children.length > this._maxEntries; )
      (this._split(r, e), e--)
    this._adjustParentBBoxes(s, r, e)
  }
  _split(t, e) {
    const n = t[e],
      s = n.children.length,
      r = this._minEntries
    this._chooseSplitAxis(n, r, s)
    const o = this._chooseSplitIndex(n, r, s),
      a = In(n.children.splice(o, n.children.length - o))
    ;((a.height = n.height),
      (a.leaf = n.leaf),
      Cn(n, this.toBBox),
      Cn(a, this.toBBox),
      e ? t[e - 1].children.push(a) : this._splitRoot(n, a))
  }
  _splitRoot(t, e) {
    ;((this.data = In([t, e])),
      (this.data.height = t.height + 1),
      (this.data.leaf = !1),
      Cn(this.data, this.toBBox))
  }
  _chooseSplitIndex(t, e, n) {
    let s,
      r = 1 / 0,
      o = 1 / 0
    for (let a = e; a <= n - e; a++) {
      const l = li(t, 0, a, this.toBBox),
        h = li(t, a, n, this.toBBox),
        c = V_(l, h),
        u = Cr(l) + Cr(h)
      c < r ? ((r = c), (s = a), (o = u < o ? u : o)) : c === r && u < o && ((o = u), (s = a))
    }
    return s || n - e
  }
  _chooseSplitAxis(t, e, n) {
    const s = t.leaf ? this.compareMinX : W_,
      r = t.leaf ? this.compareMinY : Y_,
      o = this._allDistMargin(t, e, n, s),
      a = this._allDistMargin(t, e, n, r)
    o < a && t.children.sort(s)
  }
  _allDistMargin(t, e, n, s) {
    t.children.sort(s)
    const r = this.toBBox,
      o = li(t, 0, e, r),
      a = li(t, n - e, n, r)
    let l = ss(o) + ss(a)
    for (let h = e; h < n - e; h++) {
      const c = t.children[h]
      ;(hi(o, t.leaf ? r(c) : c), (l += ss(o)))
    }
    for (let h = n - e - 1; h >= e; h--) {
      const c = t.children[h]
      ;(hi(a, t.leaf ? r(c) : c), (l += ss(a)))
    }
    return l
  }
  _adjustParentBBoxes(t, e, n) {
    for (let s = n; s >= 0; s--) hi(e[s], t)
  }
  _condense(t) {
    for (let e = t.length - 1, n; e >= 0; e--)
      t[e].children.length === 0
        ? e > 0
          ? ((n = t[e - 1].children), n.splice(n.indexOf(t[e]), 1))
          : this.clear()
        : Cn(t[e], this.toBBox)
  }
}
function z_(i, t, e) {
  if (!e) return t.indexOf(i)
  for (let n = 0; n < t.length; n++) if (e(i, t[n])) return n
  return -1
}
function Cn(i, t) {
  li(i, 0, i.children.length, t, i)
}
function li(i, t, e, n, s) {
  ;(s || (s = In(null)), (s.minX = 1 / 0), (s.minY = 1 / 0), (s.maxX = -1 / 0), (s.maxY = -1 / 0))
  for (let r = t; r < e; r++) {
    const o = i.children[r]
    hi(s, i.leaf ? n(o) : o)
  }
  return s
}
function hi(i, t) {
  return (
    (i.minX = Math.min(i.minX, t.minX)),
    (i.minY = Math.min(i.minY, t.minY)),
    (i.maxX = Math.max(i.maxX, t.maxX)),
    (i.maxY = Math.max(i.maxY, t.maxY)),
    i
  )
}
function W_(i, t) {
  return i.minX - t.minX
}
function Y_(i, t) {
  return i.minY - t.minY
}
function Cr(i) {
  return (i.maxX - i.minX) * (i.maxY - i.minY)
}
function ss(i) {
  return i.maxX - i.minX + (i.maxY - i.minY)
}
function B_(i, t) {
  return (
    (Math.max(t.maxX, i.maxX) - Math.min(t.minX, i.minX)) *
    (Math.max(t.maxY, i.maxY) - Math.min(t.minY, i.minY))
  )
}
function V_(i, t) {
  const e = Math.max(i.minX, t.minX),
    n = Math.max(i.minY, t.minY),
    s = Math.min(i.maxX, t.maxX),
    r = Math.min(i.maxY, t.maxY)
  return Math.max(0, s - e) * Math.max(0, r - n)
}
function wr(i, t) {
  return i.minX <= t.minX && i.minY <= t.minY && t.maxX <= i.maxX && t.maxY <= i.maxY
}
function rs(i, t) {
  return t.minX <= i.maxX && t.minY <= i.maxY && t.maxX >= i.minX && t.maxY >= i.minY
}
function In(i) {
  return { children: i, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 }
}
function hl(i, t, e, n, s) {
  const r = [t, e]
  for (; r.length; ) {
    if (((e = r.pop()), (t = r.pop()), e - t <= n)) continue
    const o = t + Math.ceil((e - t) / n / 2) * n
    ;(G_(i, o, t, e, s), r.push(t, o, o, e))
  }
}
class U_ {
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
        const n = this.cache_[e]
        ;(t++ & 3) === 0 && !n.hasListener() && (delete this.cache_[e], --this.cacheSize_)
      }
    }
  }
  get(t, e, n) {
    const s = cl(t, e, n)
    return s in this.cache_ ? this.cache_[s] : null
  }
  set(t, e, n, s) {
    const r = cl(t, e, n)
    ;((this.cache_[r] = s), ++this.cacheSize_)
  }
  setSize(t) {
    ;((this.maxCacheSize_ = t), this.expire())
  }
}
function cl(i, t, e) {
  const n = e ? mc(e) : 'null'
  return t + ':' + i + ':' + n
}
const ul = new U_()
function Z_(i, t, e) {
  const n = i
  let s = !0,
    r = !1,
    o = !1
  const a = [
    bs(n, ut.LOAD, function () {
      ;((o = !0), r || t())
    }),
  ]
  return (
    n.src && Qf
      ? ((r = !0),
        n
          .decode()
          .then(function () {
            s && t()
          })
          .catch(function (l) {
            s && (o ? t() : e())
          }))
      : a.push(bs(n, ut.ERROR, e)),
    function () {
      ;((s = !1), a.forEach(bt))
    }
  )
}
let ri = null
class K_ extends jh {
  constructor(t, e, n, s, r, o) {
    ;(super(),
      (this.hitDetectionImage_ = null),
      (this.image_ = t),
      (this.crossOrigin_ = s),
      (this.canvas_ = {}),
      (this.color_ = o),
      (this.unlisten_ = null),
      (this.imageState_ = r),
      (this.size_ = n),
      (this.src_ = e),
      this.tainted_)
  }
  initializeImage_() {
    ;((this.image_ = new Image()),
      this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_))
  }
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === Q.LOADED) {
      ;(ri || (ri = $t(1, 1, void 0, { willReadFrequently: !0 })), ri.drawImage(this.image_, 0, 0))
      try {
        ;(ri.getImageData(0, 0, 1, 1), (this.tainted_ = !1))
      } catch {
        ;((ri = null), (this.tainted_ = !0))
      }
    }
    return this.tainted_ === !0
  }
  dispatchChangeEvent_() {
    this.dispatchEvent(ut.CHANGE)
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
          n = $t(t, e)
        ;(n.fillRect(0, 0, t, e), (this.hitDetectionImage_ = n.canvas))
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
      this.unlisten_ = Z_(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this))
    }
  }
  replaceColor_(t) {
    if (!this.color_ || this.canvas_[t] || this.imageState_ !== Q.LOADED) return
    const e = this.image_,
      n = document.createElement('canvas')
    ;((n.width = Math.ceil(e.width * t)), (n.height = Math.ceil(e.height * t)))
    const s = n.getContext('2d')
    ;(s.scale(t, t),
      s.drawImage(e, 0, 0),
      (s.globalCompositeOperation = 'multiply'),
      (s.fillStyle = mc(this.color_)),
      s.fillRect(0, 0, n.width / t, n.height / t),
      (s.globalCompositeOperation = 'destination-in'),
      s.drawImage(e, 0, 0),
      (this.canvas_[t] = n))
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null))
  }
}
function $_(i, t, e, n, s, r) {
  let o = ul.get(t, n, r)
  return (o || ((o = new K_(i, t, e, n, s, r)), ul.set(t, n, r, o)), o)
}
function dl(i, t, e, n) {
  return e !== void 0 && n !== void 0 ? [e / i, n / t] : e !== void 0 ? e / i : n !== void 0 ? n / t : 1
}
class sr extends nr {
  constructor(t) {
    t = t || {}
    const e = t.opacity !== void 0 ? t.opacity : 1,
      n = t.rotation !== void 0 ? t.rotation : 0,
      s = t.scale !== void 0 ? t.scale : 1,
      r = t.rotateWithView !== void 0 ? t.rotateWithView : !1
    ;(super({
      opacity: e,
      rotation: n,
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
    ;(tt(!(a !== void 0 && o), 4),
      tt(!o || (o && this.imgSize_), 5),
      (a === void 0 || a.length === 0) && o && (a = o.src || K(o)),
      tt(a !== void 0 && a.length > 0, 6),
      tt(!((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0), 69))
    const l = t.src !== void 0 ? Q.IDLE : Q.LOADED
    if (
      ((this.color_ = t.color !== void 0 ? Os(t.color) : null),
      (this.iconImage_ = $_(
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
            this.setScale(dl(f[0], f[1], t.width, t.height))
          }
          this.listenImageChange(d)
          return
        }
      }
      h !== void 0 && this.setScale(dl(h, c, t.width, t.height))
    }
  }
  clone() {
    let t, e, n
    return (
      this.initialOptions_
        ? ((e = this.initialOptions_.width), (n = this.initialOptions_.height))
        : ((t = this.getScale()), (t = Array.isArray(t) ? t.slice() : t)),
      new sr({
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
        height: n,
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
      n = this.getScaleArray()
    return [t[0] - e[0] / n[0], t[1] + e[1] / n[1]]
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
        n = this.iconImage_.getSize()
      if (!e || !n) return null
      ;((t = t.slice()),
        (this.offsetOrigin_ == 'top-right' || this.offsetOrigin_ == 'bottom-right') &&
          (t[0] = n[0] - e[0] - t[0]),
        (this.offsetOrigin_ == 'bottom-left' || this.offsetOrigin_ == 'bottom-right') &&
          (t[1] = n[1] - e[1] - t[1]))
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
    this.iconImage_.addEventListener(ut.CHANGE, t)
  }
  load() {
    this.iconImage_.load()
  }
  unlistenImageChange(t) {
    this.iconImage_.removeEventListener(ut.CHANGE, t)
  }
}
function fl(i) {
  return new Ut({ fill: Si(i, ''), stroke: vi(i, ''), text: q_(i), image: H_(i) })
}
function Si(i, t) {
  const e = i[t + 'fill-color']
  if (e) return e === 'none' ? null : new Xe({ color: e })
}
function vi(i, t) {
  const e = i[t + 'stroke-width'],
    n = i[t + 'stroke-color']
  if (!(!e && !n))
    return new me({
      width: e,
      color: n,
      lineCap: i[t + 'stroke-line-cap'],
      lineJoin: i[t + 'stroke-line-join'],
      lineDash: i[t + 'stroke-line-dash'],
      lineDashOffset: i[t + 'stroke-line-dash-offset'],
      miterLimit: i[t + 'stroke-miter-limit'],
    })
}
function q_(i) {
  const t = i['text-value']
  return t
    ? new Ko({
        text: t,
        font: i['text-font'],
        maxAngle: i['text-max-angle'],
        offsetX: i['text-offset-x'],
        offsetY: i['text-offset-y'],
        overflow: i['text-overflow'],
        placement: i['text-placement'],
        repeat: i['text-repeat'],
        scale: i['text-scale'],
        rotateWithView: i['text-rotate-with-view'],
        rotation: i['text-rotation'],
        textAlign: i['text-align'],
        justify: i['text-justify'],
        textBaseline: i['text-baseline'],
        padding: i['text-padding'],
        fill: Si(i, 'text-'),
        backgroundFill: Si(i, 'text-background-'),
        stroke: vi(i, 'text-'),
        backgroundStroke: vi(i, 'text-background-'),
      })
    : void 0
}
function H_(i) {
  const t = i['icon-src'],
    e = i['icon-img']
  if (t || e)
    return new sr({
      src: t,
      img: e,
      imgSize: i['icon-img-size'],
      anchor: i['icon-anchor'],
      anchorOrigin: i['icon-anchor-origin'],
      anchorXUnits: i['icon-anchor-x-units'],
      anchorYUnits: i['icon-anchor-y-units'],
      color: i['icon-color'],
      crossOrigin: i['icon-cross-origin'],
      offset: i['icon-offset'],
      displacement: i['icon-displacement'],
      opacity: i['icon-opacity'],
      scale: i['icon-scale'],
      width: i['icon-width'],
      height: i['icon-height'],
      rotation: i['icon-rotation'],
      rotateWithView: i['icon-rotate-with-view'],
      size: i['icon-size'],
      declutterMode: i['icon-declutter-mode'],
    })
  const n = i['shape-points']
  if (n) {
    const r = 'shape-'
    return new ir({
      points: n,
      fill: Si(i, r),
      stroke: vi(i, r),
      radius: i['shape-radius'],
      radius1: i['shape-radius1'],
      radius2: i['shape-radius2'],
      angle: i['shape-angle'],
      displacement: i['shape-displacement'],
      rotation: i['shape-rotation'],
      rotateWithView: i['shape-rotate-with-view'],
      scale: i['shape-scale'],
      declutterMode: i['shape-declutter-mode'],
    })
  }
  const s = i['circle-radius']
  if (s) {
    const r = 'circle-'
    return new Hn({
      radius: s,
      fill: Si(i, r),
      stroke: vi(i, r),
      displacement: i['circle-displacement'],
      scale: i['circle-scale'],
      rotation: i['circle-rotation'],
      rotateWithView: i['circle-rotate-with-view'],
      declutterMode: i['circle-declutter-mode'],
    })
  }
}
const gl = { RENDER_ORDER: 'renderOrder' }
class J_ extends N_ {
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
    return this.get(gl.RENDER_ORDER)
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
    ;(t.declutterTree || (t.declutterTree = new Rc(9)), this.getRenderer().renderDeclutter(t))
  }
  setRenderOrder(t) {
    this.set(gl.RENDER_ORDER, t)
  }
  setStyle(t) {
    let e
    if (t === void 0) e = E_
    else if (t === null) e = null
    else if (typeof t == 'function') e = t
    else if (t instanceof Ut) e = t
    else if (Array.isArray(t)) {
      const n = t.length,
        s = new Array(n)
      for (let r = 0; r < n; ++r) {
        const o = t[r]
        o instanceof Ut ? (s[r] = o) : (s[r] = fl(o))
      }
      e = s
    } else e = fl(t)
    ;((this.style_ = e), (this.styleFunction_ = t === null ? void 0 : x_(this.style_)), this.changed())
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
  os = [M.FILL],
  Oe = [M.STROKE],
  Qe = [M.BEGIN_PATH],
  _l = [M.CLOSE_PATH]
class Tc {
  drawCustom(t, e, n, s) {}
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
class Ni extends Tc {
  constructor(t, e, n, s) {
    ;(super(),
      (this.tolerance = t),
      (this.maxExtent = e),
      (this.pixelRatio = s),
      (this.maxLineWidth = 0),
      (this.resolution = n),
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
      : t.map(function (n) {
          return n * e
        })
  }
  appendFlatPointCoordinates(t, e) {
    const n = this.getBufferedMaxExtent(),
      s = this.tmpCoordinate_,
      r = this.coordinates
    let o = r.length
    for (let a = 0, l = t.length; a < l; a += e)
      ((s[0] = t[a]), (s[1] = t[a + 1]), ag(n, s) && ((r[o++] = s[0]), (r[o++] = s[1])))
    return o
  }
  appendFlatLineCoordinates(t, e, n, s, r, o) {
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
    for (g = e + s; g < n; g += s)
      ((d[0] = t[g]),
        (d[1] = t[g + 1]),
        (m = Zr(h, d)),
        m !== _
          ? (f && ((a[l++] = c), (a[l++] = u), (f = !1)), (a[l++] = d[0]), (a[l++] = d[1]))
          : m === st.INTERSECTING
            ? ((a[l++] = d[0]), (a[l++] = d[1]), (f = !1))
            : (f = !0),
        (c = d[0]),
        (u = d[1]),
        (_ = m))
    return (((r && f) || g === e + s) && ((a[l++] = c), (a[l++] = u)), l)
  }
  drawCustomCoordinates_(t, e, n, s, r) {
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = n[o],
        h = this.appendFlatLineCoordinates(t, e, l, s, !1, !1)
      ;(r.push(h), (e = l))
    }
    return e
  }
  drawCustom(t, e, n, s) {
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
        ;(this.instructions.push([M.CUSTOM, a, u, t, n, Jr]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, u, t, s || n, Jr]))
        break
      case 'Polygon':
      case 'MultiLineString':
        ;((c = []),
          (l = r == 'Polygon' ? t.getOrientedFlatCoordinates() : t.getFlatCoordinates()),
          (d = this.drawCustomCoordinates_(l, 0, t.getEnds(), o, c)),
          this.instructions.push([M.CUSTOM, a, c, t, n, yi]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, c, t, s || n, yi]))
        break
      case 'LineString':
      case 'Circle':
        ;((l = t.getFlatCoordinates()),
          (h = this.appendFlatLineCoordinates(l, 0, l.length, o, !1, !1)),
          this.instructions.push([M.CUSTOM, a, h, t, n, Ae]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, h, t, s || n, Ae]))
        break
      case 'MultiPoint':
        ;((l = t.getFlatCoordinates()),
          (h = this.appendFlatPointCoordinates(l, o)),
          h > a &&
            (this.instructions.push([M.CUSTOM, a, h, t, n, Ae]),
            this.hitDetectionInstructions.push([M.CUSTOM, a, h, t, s || n, Ae])))
        break
      case 'Point':
        ;((l = t.getFlatCoordinates()),
          this.coordinates.push(l[0], l[1]),
          (h = this.coordinates.length),
          this.instructions.push([M.CUSTOM, a, h, t, n]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, h, t, s || n]))
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
    const n = t.length
    let s,
      r,
      o = -1
    for (e = 0; e < n; ++e)
      ((s = t[e]),
        (r = s[0]),
        r == M.END_GEOMETRY
          ? (o = e)
          : r == M.BEGIN_GEOMETRY && ((s[2] = e), Kf(this.hitDetectionInstructions, o, e), (o = -1)))
  }
  setFillStrokeStyle(t, e) {
    const n = this.state
    if (t) {
      const s = t.getColor()
      n.fillStyle = ne(s || wt)
    } else n.fillStyle = void 0
    if (e) {
      const s = e.getColor()
      n.strokeStyle = ne(s || wi)
      const r = e.getLineCap()
      n.lineCap = r !== void 0 ? r : Ds
      const o = e.getLineDash()
      n.lineDash = o ? o.slice() : pe
      const a = e.getLineDashOffset()
      n.lineDashOffset = a || ye
      const l = e.getLineJoin()
      n.lineJoin = l !== void 0 ? l : Kn
      const h = e.getWidth()
      n.lineWidth = h !== void 0 ? h : Ti
      const c = e.getMiterLimit()
      ;((n.miterLimit = c !== void 0 ? c : Ci),
        n.lineWidth > this.maxLineWidth &&
          ((this.maxLineWidth = n.lineWidth), (this.bufferedMaxExtent_ = null)))
    } else
      ((n.strokeStyle = void 0),
        (n.lineCap = void 0),
        (n.lineDash = null),
        (n.lineDashOffset = void 0),
        (n.lineJoin = void 0),
        (n.lineWidth = void 0),
        (n.miterLimit = void 0))
  }
  createFill(t) {
    const e = t.fillStyle,
      n = [M.SET_FILL_STYLE, e]
    return (typeof e != 'string' && n.push(!0), n)
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
    const n = t.fillStyle
    ;(typeof n != 'string' || t.currentFillStyle != n) &&
      (n !== void 0 && this.instructions.push(e.call(this, t)), (t.currentFillStyle = n))
  }
  updateStrokeStyle(t, e) {
    const n = t.strokeStyle,
      s = t.lineCap,
      r = t.lineDash,
      o = t.lineDashOffset,
      a = t.lineJoin,
      l = t.lineWidth,
      h = t.miterLimit
    ;(t.currentStrokeStyle != n ||
      t.currentLineCap != s ||
      (r != t.currentLineDash && !ln(t.currentLineDash, r)) ||
      t.currentLineDashOffset != o ||
      t.currentLineJoin != a ||
      t.currentLineWidth != l ||
      t.currentMiterLimit != h) &&
      (n !== void 0 && e.call(this, t),
      (t.currentStrokeStyle = n),
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
    if (!this.bufferedMaxExtent_ && ((this.bufferedMaxExtent_ = og(this.maxExtent)), this.maxLineWidth > 0)) {
      const t = (this.resolution * (this.maxLineWidth + 1)) / 2
      Di(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_)
    }
    return this.bufferedMaxExtent_
  }
}
class Q_ extends Ni {
  constructor(t, e, n, s) {
    ;(super(t, e, n, s),
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
    const n = t.getFlatCoordinates(),
      s = t.getStride(),
      r = this.coordinates.length,
      o = this.appendFlatPointCoordinates(n, s)
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
    const n = t.getFlatCoordinates(),
      s = t.getStride(),
      r = this.coordinates.length,
      o = this.appendFlatPointCoordinates(n, s)
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
    const n = t.getAnchor(),
      s = t.getSize(),
      r = t.getOrigin()
    ;((this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio)),
      (this.anchorX_ = n[0]),
      (this.anchorY_ = n[1]),
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
class t0 extends Ni {
  constructor(t, e, n, s) {
    super(t, e, n, s)
  }
  drawFlatCoordinates_(t, e, n, s) {
    const r = this.coordinates.length,
      o = this.appendFlatLineCoordinates(t, e, n, s, !1, !1),
      a = [M.MOVE_TO_LINE_TO, r, o]
    return (this.instructions.push(a), this.hitDetectionInstructions.push(a), n)
  }
  drawLineString(t, e) {
    const n = this.state,
      s = n.strokeStyle,
      r = n.lineWidth
    if (s === void 0 || r === void 0) return
    ;(this.updateStrokeStyle(n, this.applyStroke),
      this.beginGeometry(t, e),
      this.hitDetectionInstructions.push(
        [M.SET_STROKE_STYLE, n.strokeStyle, n.lineWidth, n.lineCap, n.lineJoin, n.miterLimit, pe, ye],
        Qe,
      ))
    const o = t.getFlatCoordinates(),
      a = t.getStride()
    ;(this.drawFlatCoordinates_(o, 0, o.length, a),
      this.hitDetectionInstructions.push(Oe),
      this.endGeometry(e))
  }
  drawMultiLineString(t, e) {
    const n = this.state,
      s = n.strokeStyle,
      r = n.lineWidth
    if (s === void 0 || r === void 0) return
    ;(this.updateStrokeStyle(n, this.applyStroke),
      this.beginGeometry(t, e),
      this.hitDetectionInstructions.push(
        [M.SET_STROKE_STYLE, n.strokeStyle, n.lineWidth, n.lineCap, n.lineJoin, n.miterLimit, pe, ye],
        Qe,
      ))
    const o = t.getEnds(),
      a = t.getFlatCoordinates(),
      l = t.getStride()
    let h = 0
    for (let c = 0, u = o.length; c < u; ++c) h = this.drawFlatCoordinates_(a, h, o[c], l)
    ;(this.hitDetectionInstructions.push(Oe), this.endGeometry(e))
  }
  finish() {
    const t = this.state
    return (
      t.lastStroke != null && t.lastStroke != this.coordinates.length && this.instructions.push(Oe),
      this.reverseHitDetectionInstructions(),
      (this.state = null),
      super.finish()
    )
  }
  applyStroke(t) {
    ;(t.lastStroke != null &&
      t.lastStroke != this.coordinates.length &&
      (this.instructions.push(Oe), (t.lastStroke = this.coordinates.length)),
      (t.lastStroke = 0),
      super.applyStroke(t),
      this.instructions.push(Qe))
  }
}
class ml extends Ni {
  constructor(t, e, n, s) {
    super(t, e, n, s)
  }
  drawFlatCoordinatess_(t, e, n, s) {
    const r = this.state,
      o = r.fillStyle !== void 0,
      a = r.strokeStyle !== void 0,
      l = n.length
    ;(this.instructions.push(Qe), this.hitDetectionInstructions.push(Qe))
    for (let h = 0; h < l; ++h) {
      const c = n[h],
        u = this.coordinates.length,
        d = this.appendFlatLineCoordinates(t, e, c, s, !0, !a),
        f = [M.MOVE_TO_LINE_TO, u, d]
      ;(this.instructions.push(f),
        this.hitDetectionInstructions.push(f),
        a && (this.instructions.push(_l), this.hitDetectionInstructions.push(_l)),
        (e = c))
    }
    return (
      o && (this.instructions.push(os), this.hitDetectionInstructions.push(os)),
      a && (this.instructions.push(Oe), this.hitDetectionInstructions.push(Oe)),
      e
    )
  }
  drawCircle(t, e) {
    const n = this.state,
      s = n.fillStyle,
      r = n.strokeStyle
    if (s === void 0 && r === void 0) return
    ;(this.setFillStrokeStyles_(),
      this.beginGeometry(t, e),
      n.fillStyle !== void 0 && this.hitDetectionInstructions.push([M.SET_FILL_STYLE, wt]),
      n.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          M.SET_STROKE_STYLE,
          n.strokeStyle,
          n.lineWidth,
          n.lineCap,
          n.lineJoin,
          n.miterLimit,
          pe,
          ye,
        ]))
    const o = t.getFlatCoordinates(),
      a = t.getStride(),
      l = this.coordinates.length
    this.appendFlatLineCoordinates(o, 0, o.length, a, !1, !1)
    const h = [M.CIRCLE, l]
    ;(this.instructions.push(Qe, h),
      this.hitDetectionInstructions.push(Qe, h),
      n.fillStyle !== void 0 && (this.instructions.push(os), this.hitDetectionInstructions.push(os)),
      n.strokeStyle !== void 0 && (this.instructions.push(Oe), this.hitDetectionInstructions.push(Oe)),
      this.endGeometry(e))
  }
  drawPolygon(t, e) {
    const n = this.state,
      s = n.fillStyle,
      r = n.strokeStyle
    if (s === void 0 && r === void 0) return
    ;(this.setFillStrokeStyles_(),
      this.beginGeometry(t, e),
      n.fillStyle !== void 0 && this.hitDetectionInstructions.push([M.SET_FILL_STYLE, wt]),
      n.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          M.SET_STROKE_STYLE,
          n.strokeStyle,
          n.lineWidth,
          n.lineCap,
          n.lineJoin,
          n.miterLimit,
          pe,
          ye,
        ]))
    const o = t.getEnds(),
      a = t.getOrientedFlatCoordinates(),
      l = t.getStride()
    ;(this.drawFlatCoordinatess_(a, 0, o, l), this.endGeometry(e))
  }
  drawMultiPolygon(t, e) {
    const n = this.state,
      s = n.fillStyle,
      r = n.strokeStyle
    if (s === void 0 && r === void 0) return
    ;(this.setFillStrokeStyles_(),
      this.beginGeometry(t, e),
      n.fillStyle !== void 0 && this.hitDetectionInstructions.push([M.SET_FILL_STYLE, wt]),
      n.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          M.SET_STROKE_STYLE,
          n.strokeStyle,
          n.lineWidth,
          n.lineCap,
          n.lineJoin,
          n.miterLimit,
          pe,
          ye,
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
      for (let n = 0, s = e.length; n < s; ++n) e[n] = $e(e[n], t)
    }
    return super.finish()
  }
  setFillStrokeStyles_() {
    const t = this.state
    ;(t.fillStyle !== void 0 && this.updateFillStyle(t, this.createFill),
      t.strokeStyle !== void 0 && this.updateStrokeStyle(t, this.applyStroke))
  }
}
function e0(i, t, e, n, s) {
  const r = []
  let o = e,
    a = 0,
    l = t.slice(e, 2)
  for (; a < i && o + s < n; ) {
    const [h, c] = l.slice(-2),
      u = t[o + s],
      d = t[o + s + 1],
      f = Math.sqrt((u - h) * (u - h) + (d - c) * (d - c))
    if (((a += f), a >= i)) {
      const g = (i - a + f) / f,
        _ = Mt(h, u, g),
        m = Mt(c, d, g)
      ;(l.push(_, m), r.push(l), (l = [_, m]), a == i && (o += s), (a = 0))
    } else if (a < i) (l.push(t[o + s], t[o + s + 1]), (o += s))
    else {
      const g = f - a,
        _ = Mt(h, u, g / f),
        m = Mt(c, d, g / f)
      ;(l.push(_, m), r.push(l), (l = [_, m]), (a = 0), (o += s))
    }
  }
  return (a > 0 && r.push(l), r)
}
function n0(i, t, e, n, s) {
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
  for (u = e; u < n; u += s) {
    const E = t[u],
      C = t[u + 1]
    ;(g !== void 0 &&
      ((y = E - g),
      (x = C - _),
      (f = Math.sqrt(y * y + x * x)),
      m !== void 0 &&
        ((l += d),
        (c = Math.acos((m * y + p * x) / (d * f))),
        c > i && (l > a && ((a = l), (r = h), (o = u)), (l = 0), (h = u - s))),
      (d = f),
      (m = y),
      (p = x)),
      (g = E),
      (_ = C))
  }
  return ((l += f), l > a ? [h, u] : [r, o])
}
const js = {
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
class i0 extends Ni {
  constructor(t, e, n, s) {
    ;(super(t, e, n, s),
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
    const n = this.textFillState_,
      s = this.textStrokeState_,
      r = this.textState_
    if (this.text_ === '' || !r || (!n && !s)) return
    const o = this.coordinates
    let a = o.length
    const l = t.getType()
    let h = null,
      c = t.getStride()
    if (
      r.placement === 'line' &&
      (l == 'LineString' || l == 'MultiLineString' || l == 'Polygon' || l == 'MultiPolygon')
    ) {
      if (!jt(this.getBufferedMaxExtent(), t.getExtent())) return
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
        d ? (p = e0(d * this.resolution, h, g, u[_], c)) : (p = [h.slice(g, u[_])])
        for (let y = 0, x = p.length; y < x; ++y) {
          const E = p[y]
          let C = 0,
            R = E.length
          if (f == null) {
            const S = n0(r.maxAngle, E, 0, E.length, 2)
            ;((C = S[0]), (R = S[1]))
          }
          for (let S = C; S < R; S += c) o.push(E[S], E[S + 1])
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
      if (f != Je && (r.scale[0] < 0 || r.scale[1] < 0)) {
        let p = r.padding[0],
          y = r.padding[1],
          x = r.padding[2],
          E = r.padding[3]
        ;(r.scale[0] < 0 && ((y = -y), (E = -E)), r.scale[1] < 0 && ((p = -p), (x = -x)), (f = [p, y, x, E]))
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
        f == Je
          ? Je
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
      n = this.textFillState_,
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
        textAlign: e.textAlign || Ri,
        justify: e.justify,
        textBaseline: e.textBaseline || ks,
        scale: e.scale,
      })
    const o = this.fillKey_
    n && (o in this.fillStates || (this.fillStates[o] = { fillStyle: n.fillStyle }))
  }
  drawChars_(t, e) {
    const n = this.textStrokeState_,
      s = this.textState_,
      r = this.strokeKey_,
      o = this.textKey_,
      a = this.fillKey_
    this.saveTextStates_()
    const l = this.pixelRatio,
      h = js[s.textBaseline],
      c = this.textOffsetY_ * l,
      u = this.text_,
      d = n ? (n.lineWidth * Math.abs(s.scale[0])) / 2 : 0
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
    let n, s, r
    if (!t) this.text_ = ''
    else {
      const o = t.getFill()
      o
        ? ((s = this.textFillState_),
          s || ((s = {}), (this.textFillState_ = s)),
          (s.fillStyle = ne(o.getColor() || wt)))
        : ((s = null), (this.textFillState_ = s))
      const a = t.getStroke()
      if (!a) ((r = null), (this.textStrokeState_ = r))
      else {
        ;((r = this.textStrokeState_), r || ((r = {}), (this.textStrokeState_ = r)))
        const g = a.getLineDash(),
          _ = a.getLineDashOffset(),
          m = a.getWidth(),
          p = a.getMiterLimit()
        ;((r.lineCap = a.getLineCap() || Ds),
          (r.lineDash = g ? g.slice() : pe),
          (r.lineDashOffset = _ === void 0 ? ye : _),
          (r.lineJoin = a.getLineJoin() || Kn),
          (r.lineWidth = m === void 0 ? Ti : m),
          (r.miterLimit = p === void 0 ? Ci : p),
          (r.strokeStyle = ne(a.getColor() || wi)))
      }
      n = this.textState_
      const l = t.getFont() || xc
      g_(l)
      const h = t.getScaleArray()
      ;((n.overflow = t.getOverflow()),
        (n.font = l),
        (n.maxAngle = t.getMaxAngle()),
        (n.placement = t.getPlacement()),
        (n.textAlign = t.getTextAlign()),
        (n.repeat = t.getRepeat()),
        (n.justify = t.getJustify()),
        (n.textBaseline = t.getTextBaseline() || ks),
        (n.backgroundFill = t.getBackgroundFill()),
        (n.backgroundStroke = t.getBackgroundStroke()),
        (n.padding = t.getPadding() || Je),
        (n.scale = h === void 0 ? [1, 1] : h))
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
          n.font +
          n.scale +
          (n.textAlign || '?') +
          (n.repeat || '?') +
          (n.justify || '?') +
          (n.textBaseline || '?')),
        (this.fillKey_ = s ? (typeof s.fillStyle == 'string' ? s.fillStyle : '|' + K(s.fillStyle)) : ''))
    }
    this.declutterImageWithText_ = e
  }
}
const s0 = { Circle: ml, Default: Ni, Image: Q_, LineString: t0, Polygon: ml, Text: i0 }
class pl {
  constructor(t, e, n, s) {
    ;((this.tolerance_ = t),
      (this.maxExtent_ = e),
      (this.pixelRatio_ = s),
      (this.resolution_ = n),
      (this.buildersByZIndex_ = {}))
  }
  finish() {
    const t = {}
    for (const e in this.buildersByZIndex_) {
      t[e] = t[e] || {}
      const n = this.buildersByZIndex_[e]
      for (const s in n) {
        const r = n[s].finish()
        t[e][s] = r
      }
    }
    return t
  }
  getBuilder(t, e) {
    const n = t !== void 0 ? t.toString() : '0'
    let s = this.buildersByZIndex_[n]
    s === void 0 && ((s = {}), (this.buildersByZIndex_[n] = s))
    let r = s[e]
    if (r === void 0) {
      const o = s0[e]
      ;((r = new o(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_)), (s[e] = r))
    }
    return r
  }
}
class r0 extends Ai {
  constructor(t) {
    ;(super(),
      (this.ready = !0),
      (this.boundHandleImageChange_ = this.handleImageChange_.bind(this)),
      (this.layer_ = t),
      (this.declutterExecutorGroup = null))
  }
  getFeatures(t) {
    return L()
  }
  getData(t) {
    return null
  }
  prepareFrame(t) {
    return L()
  }
  renderFrame(t, e) {
    return L()
  }
  loadedTileCallback(t, e, n) {
    ;(t[e] || (t[e] = {}), (t[e][n.tileCoord.toString()] = n))
  }
  createLoadedTileFinder(t, e, n) {
    return (s, r) => {
      const o = this.loadedTileCallback.bind(this, n, s)
      return t.forEachLoadedTile(e, s, r, o)
    }
  }
  forEachFeatureAtCoordinate(t, e, n, s, r) {}
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
      e != Q.LOADED && e != Q.ERROR && t.addEventListener(ut.CHANGE, this.boundHandleImageChange_),
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
class o0 extends pt {
  constructor(t, e, n, s) {
    ;(super(t), (this.inversePixelTransform = e), (this.frameState = n), (this.context = s))
  }
}
const yl = []
let Mn = null
function a0() {
  Mn = $t(1, 1, void 0, { willReadFrequently: !0 })
}
class l0 extends r0 {
  constructor(t) {
    ;(super(t),
      (this.container = null),
      this.renderedResolution,
      (this.tempTransform = ke()),
      (this.pixelTransform = ke()),
      (this.inversePixelTransform = ke()),
      (this.context = null),
      (this.containerReused = !1),
      (this.pixelContext_ = null),
      (this.frameState = null))
  }
  getImageData(t, e, n) {
    ;(Mn || a0(), Mn.clearRect(0, 0, 1, 1))
    let s
    try {
      ;(Mn.drawImage(t, e, n, 1, 1, 0, 0, 1, 1), (s = Mn.getImageData(0, 0, 1, 1).data))
    } catch {
      return ((Mn = null), null)
    }
    return s
  }
  getBackground(t) {
    let n = this.getLayer().getBackground()
    return (typeof n == 'function' && (n = n(t.viewState.resolution)), n || void 0)
  }
  useContainer(t, e, n) {
    const s = this.getLayer().getClassName()
    let r, o
    if (
      t &&
      t.className === s &&
      (!n || (t && t.style.backgroundColor && ln(Os(t.style.backgroundColor), Os(n))))
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
      ;((a.position = 'absolute'), (a.width = '100%'), (a.height = '100%'), (o = $t()))
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
      n &&
      !this.container.style.backgroundColor &&
      (this.container.style.backgroundColor = n)
  }
  clipUnrotated(t, e, n) {
    const s = Zh(n),
      r = Kh(n),
      o = Uh(n),
      a = Vh(n)
    ;(Et(e.coordinateToPixelTransform, s),
      Et(e.coordinateToPixelTransform, r),
      Et(e.coordinateToPixelTransform, o),
      Et(e.coordinateToPixelTransform, a))
    const l = this.inversePixelTransform
    ;(Et(l, s),
      Et(l, r),
      Et(l, o),
      Et(l, a),
      t.save(),
      t.beginPath(),
      t.moveTo(Math.round(s[0]), Math.round(s[1])),
      t.lineTo(Math.round(r[0]), Math.round(r[1])),
      t.lineTo(Math.round(o[0]), Math.round(o[1])),
      t.lineTo(Math.round(a[0]), Math.round(a[1])),
      t.clip())
  }
  dispatchRenderEvent_(t, e, n) {
    const s = this.getLayer()
    if (s.hasListener(t)) {
      const r = new o0(t, this.inversePixelTransform, n, e)
      s.dispatchEvent(r)
    }
  }
  preRender(t, e) {
    ;((this.frameState = e), this.dispatchRenderEvent_(Ei.PRERENDER, t, e))
  }
  postRender(t, e) {
    this.dispatchRenderEvent_(Ei.POSTRENDER, t, e)
  }
  getRenderTransform(t, e, n, s, r, o, a) {
    const l = r / 2,
      h = o / 2,
      c = s / e,
      u = -c,
      d = -t[0] + a,
      f = -t[1]
    return Oi(this.tempTransform, l, h, c, u, -n, d, f)
  }
  disposeInternal() {
    ;(delete this.frameState, super.disposeInternal())
  }
}
function h0(i, t, e, n, s, r, o, a, l, h, c, u) {
  let d = i[t],
    f = i[t + 1],
    g = 0,
    _ = 0,
    m = 0,
    p = 0
  function y() {
    ;((g = d),
      (_ = f),
      (t += n),
      (d = i[t]),
      (f = i[t + 1]),
      (p += m),
      (m = Math.sqrt((d - g) * (d - g) + (f - _) * (f - _))))
  }
  do y()
  while (t < e - n && p + m < r)
  let x = m === 0 ? 0 : (r - p) / m
  const E = Mt(g, d, x),
    C = Mt(_, f, x),
    R = t - n,
    v = p,
    S = r + a * l(h, s, c)
  for (; t < e - n && p + m < S; ) y()
  x = m === 0 ? 0 : (S - p) / m
  const b = Mt(g, d, x),
    A = Mt(_, f, x)
  let G
  if (u) {
    const F = [E, C, b, A]
    ;(Xo(F, 0, 4, 2, u, F, F), (G = F[0] > F[2]))
  } else G = E > b
  const N = Math.PI,
    D = [],
    nt = R + n === t
  ;((t = R), (m = 0), (p = v), (d = i[t]), (f = i[t + 1]))
  let I
  if (nt) {
    ;(y(), (I = Math.atan2(f - _, d - g)), G && (I += I > 0 ? -N : N))
    const F = (b + E) / 2,
      T = (A + C) / 2
    return ((D[0] = [F, T, (S - r) / 2, I, s]), D)
  }
  s = s.replace(/\n/g, ' ')
  for (let F = 0, T = s.length; F < T; ) {
    y()
    let O = Math.atan2(f - _, d - g)
    if ((G && (O += O > 0 ? -N : N), I !== void 0)) {
      let W = O - I
      if (((W += W > N ? -2 * N : W < -N ? 2 * N : 0), Math.abs(W) > o)) return null
    }
    I = O
    const Z = F
    let Y = 0
    for (; F < T; ++F) {
      const W = G ? T - F - 1 : F,
        q = a * l(h, s[W], c)
      if (t + n < e && p + m < r + Y + q / 2) break
      Y += q
    }
    if (F === Z) continue
    const it = G ? s.substring(T - Z, T - F) : s.substring(Z, F)
    x = m === 0 ? 0 : (r + Y / 2 - p) / m
    const w = Mt(g, d, x),
      Tt = Mt(_, f, x)
    ;(D.push([w, Tt, Y / 2, O, it]), (r += Y))
  }
  return D
}
const wn = re(),
  Ie = [],
  ce = [],
  ue = [],
  Me = []
function xl(i) {
  return i[3].declutterBox
}
const El = new RegExp('[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]')
function Rr(i, t) {
  return (
    t === 'start' ? (t = El.test(i) ? 'right' : 'left') : t === 'end' && (t = El.test(i) ? 'left' : 'right'),
    js[t]
  )
}
function c0(i, t, e) {
  return (
    e > 0 &&
      i.push(
        `
`,
        '',
      ),
    i.push(t, ''),
    i
  )
}
class u0 {
  constructor(t, e, n, s) {
    ;((this.overlaps = n),
      (this.pixelRatio = e),
      (this.resolution = t),
      this.alignFill_,
      (this.instructions = s.instructions),
      (this.coordinates = s.coordinates),
      (this.coordinateCache_ = {}),
      (this.renderedTransform_ = ke()),
      (this.hitDetectionInstructions = s.hitDetectionInstructions),
      (this.pixelCoordinates_ = null),
      (this.viewRotation_ = 0),
      (this.fillStates = s.fillStates || {}),
      (this.strokeStates = s.strokeStates || {}),
      (this.textStates = s.textStates || {}),
      (this.widths_ = {}),
      (this.labels_ = {}))
  }
  createLabel(t, e, n, s) {
    const r = t + e + n + s
    if (this.labels_[r]) return this.labels_[r]
    const o = s ? this.strokeStates[s] : null,
      a = n ? this.fillStates[n] : null,
      l = this.textStates[e],
      h = this.pixelRatio,
      c = [l.scale[0] * h, l.scale[1] * h],
      u = Array.isArray(t),
      d = l.justify ? js[l.justify] : Rr(Array.isArray(t) ? t[0] : t, l.textAlign || Ri),
      f = s && o.lineWidth ? o.lineWidth : 0,
      g = u
        ? t
        : t
            .split(
              `
`,
            )
            .reduce(c0, []),
      { width: _, height: m, widths: p, heights: y, lineWidths: x } = m_(l, g),
      E = _ + f,
      C = [],
      R = (E + 2) * c[0],
      v = (m + f) * c[1],
      S = {
        width: R < 0 ? Math.floor(R) : Math.ceil(R),
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
      n && C.push('fillStyle', a.fillStyle),
      C.push('textBaseline', 'middle'),
      C.push('textAlign', 'center'))
    const b = 0.5 - d
    let A = d * E + b * f
    const G = [],
      N = []
    let D = 0,
      nt = 0,
      I = 0,
      F = 0,
      T
    for (let O = 0, Z = g.length; O < Z; O += 2) {
      const Y = g[O]
      if (
        Y ===
        `
`
      ) {
        ;((nt += D), (D = 0), (A = d * E + b * f), ++F)
        continue
      }
      const it = g[O + 1] || l.font
      ;(it !== T && (s && G.push('font', it), n && N.push('font', it), (T = it)), (D = Math.max(D, y[I])))
      const w = [Y, A + b * p[I] + d * (p[I] - x[F]), 0.5 * (f + D) + nt]
      ;((A += p[I]), s && G.push('strokeText', w), n && N.push('fillText', w), ++I)
    }
    return (Array.prototype.push.apply(C, G), Array.prototype.push.apply(C, N), (this.labels_[r] = S), S)
  }
  replayTextBackground_(t, e, n, s, r, o, a) {
    ;(t.beginPath(),
      t.moveTo.apply(t, e),
      t.lineTo.apply(t, n),
      t.lineTo.apply(t, s),
      t.lineTo.apply(t, r),
      t.lineTo.apply(t, e),
      o && ((this.alignFill_ = o[2]), this.fill_(t)),
      a && (this.setStrokeStyle_(t, a), t.stroke()))
  }
  calculateImageOrLabelDimensions_(t, e, n, s, r, o, a, l, h, c, u, d, f, g, _, m) {
    ;((a *= d[0]), (l *= d[1]))
    let p = n - a,
      y = s - l
    const x = r + h > t ? t - h : r,
      E = o + c > e ? e - c : o,
      C = g[3] + x * d[0] + g[1],
      R = g[0] + E * d[1] + g[2],
      v = p - g[3],
      S = y - g[0]
    ;(_ || u !== 0) &&
      ((Ie[0] = v),
      (Me[0] = v),
      (Ie[1] = S),
      (ce[1] = S),
      (ce[0] = v + C),
      (ue[0] = ce[0]),
      (ue[1] = S + R),
      (Me[1] = ue[1]))
    let b
    return (
      u !== 0
        ? ((b = Oi(ke(), n, s, 1, 1, u, -n, -s)),
          Et(b, Ie),
          Et(b, ce),
          Et(b, ue),
          Et(b, Me),
          nn(
            Math.min(Ie[0], ce[0], ue[0], Me[0]),
            Math.min(Ie[1], ce[1], ue[1], Me[1]),
            Math.max(Ie[0], ce[0], ue[0], Me[0]),
            Math.max(Ie[1], ce[1], ue[1], Me[1]),
            wn,
          ))
        : nn(Math.min(v, v + C), Math.min(S, S + R), Math.max(v, v + C), Math.max(S, S + R), wn),
      f && ((p = Math.round(p)), (y = Math.round(y))),
      {
        drawImageX: p,
        drawImageY: y,
        drawImageW: x,
        drawImageH: E,
        originX: h,
        originY: c,
        declutterBox: { minX: wn[0], minY: wn[1], maxX: wn[2], maxY: wn[3], value: m },
        canvasTransform: b,
        scale: d,
      }
    )
  }
  replayImageOrLabel_(t, e, n, s, r, o, a) {
    const l = !!(o || a),
      h = s.declutterBox,
      c = t.canvas,
      u = a ? (a[2] * s.scale[0]) / 2 : 0
    return (
      h.minX - u <= c.width / e &&
        h.maxX + u >= 0 &&
        h.minY - u <= c.height / e &&
        h.maxY + u >= 0 &&
        (l && this.replayTextBackground_(t, Ie, ce, ue, Me, o, a),
        p_(
          t,
          s.canvasTransform,
          r,
          n,
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
      const e = Et(this.renderedTransform_, [0, 0]),
        n = 512 * this.pixelRatio
      ;(t.save(), t.translate(e[0] % n, e[1] % n), t.rotate(this.viewRotation_))
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
  drawLabelWithPointPlacement_(t, e, n, s) {
    const r = this.textStates[e],
      o = this.createLabel(t, e, s, n),
      a = this.strokeStates[n],
      l = this.pixelRatio,
      h = Rr(Array.isArray(t) ? t[0] : t, r.textAlign || Ri),
      c = js[r.textBaseline || ks],
      u = a && a.lineWidth ? a.lineWidth : 0,
      d = o.width / l - 2 * r.scale[0],
      f = h * d + 2 * (0.5 - h) * u,
      g = (c * o.height) / l + 2 * (0.5 - c) * u
    return { label: o, anchorX: f, anchorY: g }
  }
  execute_(t, e, n, s, r, o, a, l) {
    let h
    this.pixelCoordinates_ && ln(n, this.renderedTransform_)
      ? (h = this.pixelCoordinates_)
      : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []),
        (h = en(this.coordinates, 0, this.coordinates.length, 2, n, this.pixelCoordinates_)),
        eg(this.renderedTransform_, n))
    let c = 0
    const u = s.length
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
      R,
      v,
      S,
      b = 0,
      A = 0,
      G = null,
      N = null
    const D = this.coordinateCache_,
      nt = this.viewRotation_,
      I = Math.round(Math.atan2(-n[1], n[0]) * 1e12) / 1e12,
      F = { context: t, pixelRatio: this.pixelRatio, resolution: this.resolution, rotation: nt },
      T = this.instructions != s || this.overlaps ? 0 : 200
    let O, Z, Y, it
    for (; c < u; ) {
      const w = s[c]
      switch (w[0]) {
        case M.BEGIN_GEOMETRY:
          ;((O = w[1]),
            (it = w[3]),
            O.getGeometry() ? (a !== void 0 && !jt(a, it.getExtent()) ? (c = w[2] + 1) : ++c) : (c = w[2]))
          break
        case M.BEGIN_PATH:
          ;(b > T && (this.fill_(t), (b = 0)),
            A > T && (t.stroke(), (A = 0)),
            !b && !A && (t.beginPath(), (m = NaN), (p = NaN)),
            ++c)
          break
        case M.CIRCLE:
          d = w[1]
          const W = h[d],
            q = h[d + 1],
            Ce = h[d + 2],
            qt = h[d + 3],
            at = Ce - W,
            oe = qt - q,
            cn = Math.sqrt(at * at + oe * oe)
          ;(t.moveTo(W + cn, q), t.arc(W, q, cn, 0, 2 * Math.PI, !0), ++c)
          break
        case M.CLOSE_PATH:
          ;(t.closePath(), ++c)
          break
        case M.CUSTOM:
          ;((d = w[1]), (f = w[2]))
          const Gi = w[3],
            un = w[4],
            Xi = w.length == 6 ? w[5] : void 0
          ;((F.geometry = Gi), (F.feature = O), c in D || (D[c] = []))
          const we = D[c]
          ;(Xi ? Xi(h, d, f, 2, we) : ((we[0] = h[d]), (we[1] = h[d + 1]), (we.length = 2)), un(we, F), ++c)
          break
        case M.DRAW_IMAGE:
          ;((d = w[1]), (f = w[2]), (E = w[3]), (g = w[4]), (_ = w[5]))
          let Qn = w[6]
          const Re = w[7],
            zi = w[8],
            Wi = w[9],
            Yi = w[10]
          let dn = w[11]
          const or = w[12]
          let yt = w[13]
          const Pt = w[14],
            Wt = w[15]
          if (!E && w.length >= 20) {
            ;((C = w[19]), (R = w[20]), (v = w[21]), (S = w[22]))
            const St = this.drawLabelWithPointPlacement_(C, R, v, S)
            ;((E = St.label), (w[3] = E))
            const _n = w[23]
            ;((g = (St.anchorX - _n) * this.pixelRatio), (w[4] = g))
            const Lt = w[24]
            ;((_ = (St.anchorY - Lt) * this.pixelRatio),
              (w[5] = _),
              (Qn = E.height),
              (w[6] = Qn),
              (yt = E.width),
              (w[13] = yt))
          }
          let ae
          w.length > 25 && (ae = w[25])
          let fn, Be, Te
          ;(w.length > 17 ? ((fn = w[16]), (Be = w[17]), (Te = w[18])) : ((fn = Je), (Be = !1), (Te = !1)),
            Yi && I ? (dn += nt) : !Yi && !I && (dn -= nt))
          let gn = 0
          for (; d < f; d += 2) {
            if (ae && ae[gn++] < yt / this.pixelRatio) continue
            const St = this.calculateImageOrLabelDimensions_(
                E.width,
                E.height,
                h[d],
                h[d + 1],
                yt,
                Qn,
                g,
                _,
                zi,
                Wi,
                dn,
                or,
                r,
                fn,
                Be || Te,
                O,
              ),
              _n = [t, e, E, St, Re, Be ? G : null, Te ? N : null]
            if (l) {
              if (Pt === 'none') continue
              if (Pt === 'obstacle') {
                l.insert(St.declutterBox)
                continue
              } else {
                let Lt, le
                if (Wt) {
                  const vt = f - d
                  if (!Wt[vt]) {
                    Wt[vt] = _n
                    continue
                  }
                  if (((Lt = Wt[vt]), delete Wt[vt], (le = xl(Lt)), l.collides(le))) continue
                }
                if (l.collides(St.declutterBox)) continue
                ;(Lt && (l.insert(le), this.replayImageOrLabel_.apply(this, Lt)), l.insert(St.declutterBox))
              }
            }
            this.replayImageOrLabel_.apply(this, _n)
          }
          ++c
          break
        case M.DRAW_CHARS:
          const Bi = w[1],
            ft = w[2],
            ar = w[3],
            jc = w[4]
          S = w[5]
          const Gc = w[6],
            ea = w[7],
            na = w[8]
          v = w[9]
          const lr = w[10]
          ;((C = w[11]), (R = w[12]))
          const ia = [w[13], w[13]],
            hr = this.textStates[R],
            ti = hr.font,
            ei = [hr.scale[0] * ea, hr.scale[1] * ea]
          let ni
          ti in this.widths_ ? (ni = this.widths_[ti]) : ((ni = {}), (this.widths_[ti] = ni))
          const sa = _c(h, Bi, ft, 2),
            ra = Math.abs(ei[0]) * il(ti, C, ni)
          if (jc || ra <= sa) {
            const St = this.textStates[R].textAlign,
              _n = (sa - ra) * Rr(C, St),
              Lt = h0(h, Bi, ft, 2, C, _n, Gc, Math.abs(ei[0]), il, ti, ni, I ? 0 : this.viewRotation_)
            t: if (Lt) {
              const le = []
              let vt, Vi, Ui, xt, Ft
              if (v)
                for (vt = 0, Vi = Lt.length; vt < Vi; ++vt) {
                  ;((Ft = Lt[vt]),
                    (Ui = Ft[4]),
                    (xt = this.createLabel(Ui, R, '', v)),
                    (g = Ft[2] + (ei[0] < 0 ? -lr : lr)),
                    (_ = ar * xt.height + ((0.5 - ar) * 2 * lr * ei[1]) / ei[0] - na))
                  const he = this.calculateImageOrLabelDimensions_(
                    xt.width,
                    xt.height,
                    Ft[0],
                    Ft[1],
                    xt.width,
                    xt.height,
                    g,
                    _,
                    0,
                    0,
                    Ft[3],
                    ia,
                    !1,
                    Je,
                    !1,
                    O,
                  )
                  if (l && l.collides(he.declutterBox)) break t
                  le.push([t, e, xt, he, 1, null, null])
                }
              if (S)
                for (vt = 0, Vi = Lt.length; vt < Vi; ++vt) {
                  ;((Ft = Lt[vt]),
                    (Ui = Ft[4]),
                    (xt = this.createLabel(Ui, R, S, '')),
                    (g = Ft[2]),
                    (_ = ar * xt.height - na))
                  const he = this.calculateImageOrLabelDimensions_(
                    xt.width,
                    xt.height,
                    Ft[0],
                    Ft[1],
                    xt.width,
                    xt.height,
                    g,
                    _,
                    0,
                    0,
                    Ft[3],
                    ia,
                    !1,
                    Je,
                    !1,
                    O,
                  )
                  if (l && l.collides(he.declutterBox)) break t
                  le.push([t, e, xt, he, 1, null, null])
                }
              l && l.load(le.map(xl))
              for (let he = 0, Xc = le.length; he < Xc; ++he) this.replayImageOrLabel_.apply(this, le[he])
            }
          }
          ++c
          break
        case M.END_GEOMETRY:
          if (o !== void 0) {
            O = w[1]
            const St = o(O, it)
            if (St) return St
          }
          ++c
          break
        case M.FILL:
          ;(T ? b++ : this.fill_(t), ++c)
          break
        case M.MOVE_TO_LINE_TO:
          for (
            d = w[1],
              f = w[2],
              Z = h[d],
              Y = h[d + 1],
              y = (Z + 0.5) | 0,
              x = (Y + 0.5) | 0,
              (y !== m || x !== p) && (t.moveTo(Z, Y), (m = y), (p = x)),
              d += 2;
            d < f;
            d += 2
          )
            ((Z = h[d]),
              (Y = h[d + 1]),
              (y = (Z + 0.5) | 0),
              (x = (Y + 0.5) | 0),
              (d == f - 2 || y !== m || x !== p) && (t.lineTo(Z, Y), (m = y), (p = x)))
          ++c
          break
        case M.SET_FILL_STYLE:
          ;((G = w),
            (this.alignFill_ = w[2]),
            b && (this.fill_(t), (b = 0), A && (t.stroke(), (A = 0))),
            (t.fillStyle = w[1]),
            ++c)
          break
        case M.SET_STROKE_STYLE:
          ;((N = w), A && (t.stroke(), (A = 0)), this.setStrokeStyle_(t, w), ++c)
          break
        case M.STROKE:
          ;(T ? A++ : t.stroke(), ++c)
          break
        default:
          ++c
          break
      }
    }
    ;(b && this.fill_(t), A && t.stroke())
  }
  execute(t, e, n, s, r, o) {
    ;((this.viewRotation_ = s), this.execute_(t, e, n, this.instructions, r, void 0, void 0, o))
  }
  executeHitDetection(t, e, n, s, r) {
    return ((this.viewRotation_ = n), this.execute_(t, 1, e, this.hitDetectionInstructions, !0, s, r))
  }
}
const Tr = ['Polygon', 'Circle', 'LineString', 'Image', 'Text', 'Default']
class Cl {
  constructor(t, e, n, s, r, o) {
    ;((this.maxExtent_ = t),
      (this.overlaps_ = s),
      (this.pixelRatio_ = n),
      (this.resolution_ = e),
      (this.renderBuffer_ = o),
      (this.executorsByZIndex_ = {}),
      (this.hitDetectionContext_ = null),
      (this.hitDetectionTransform_ = ke()),
      this.createExecutors_(r))
  }
  clip(t, e) {
    const n = this.getClipCoords(e)
    ;(t.beginPath(),
      t.moveTo(n[0], n[1]),
      t.lineTo(n[2], n[3]),
      t.lineTo(n[4], n[5]),
      t.lineTo(n[6], n[7]),
      t.clip())
  }
  createExecutors_(t) {
    for (const e in t) {
      let n = this.executorsByZIndex_[e]
      n === void 0 && ((n = {}), (this.executorsByZIndex_[e] = n))
      const s = t[e]
      for (const r in s) {
        const o = s[r]
        n[r] = new u0(this.resolution_, this.pixelRatio_, this.overlaps_, o)
      }
    }
  }
  hasExecutors(t) {
    for (const e in this.executorsByZIndex_) {
      const n = this.executorsByZIndex_[e]
      for (let s = 0, r = t.length; s < r; ++s) if (t[s] in n) return !0
    }
    return !1
  }
  forEachFeatureAtCoordinate(t, e, n, s, r, o) {
    s = Math.round(s)
    const a = s * 2 + 1,
      l = Oi(this.hitDetectionTransform_, s + 0.5, s + 0.5, 1 / e, -1 / e, -n, -t[0], -t[1]),
      h = !this.hitDetectionContext_
    h && (this.hitDetectionContext_ = $t(a, a, void 0, { willReadFrequently: !0 }))
    const c = this.hitDetectionContext_
    c.canvas.width !== a || c.canvas.height !== a
      ? ((c.canvas.width = a), (c.canvas.height = a))
      : h || c.clearRect(0, 0, a, a)
    let u
    this.renderBuffer_ !== void 0 && ((u = re()), Wh(u, t), Di(u, e * (this.renderBuffer_ + s), u))
    const d = d0(s)
    let f
    function g(C, R) {
      const v = c.getImageData(0, 0, a, a).data
      for (let S = 0, b = d.length; S < b; S++)
        if (v[d[S]] > 0) {
          if (!o || (f !== 'Image' && f !== 'Text') || o.includes(C)) {
            const A = (d[S] - 3) / 4,
              G = s - (A % a),
              N = s - ((A / a) | 0),
              D = r(C, R, G * G + N * N)
            if (D) return D
          }
          c.clearRect(0, 0, a, a)
          break
        }
    }
    const _ = Object.keys(this.executorsByZIndex_).map(Number)
    _.sort(_i)
    let m, p, y, x, E
    for (m = _.length - 1; m >= 0; --m) {
      const C = _[m].toString()
      for (y = this.executorsByZIndex_[C], p = Tr.length - 1; p >= 0; --p)
        if (((f = Tr[p]), (x = y[f]), x !== void 0 && ((E = x.executeHitDetection(c, l, n, g, u)), E)))
          return E
    }
  }
  getClipCoords(t) {
    const e = this.maxExtent_
    if (!e) return null
    const n = e[0],
      s = e[1],
      r = e[2],
      o = e[3],
      a = [n, s, n, o, r, o, r, s]
    return (en(a, 0, 8, 2, t, a), a)
  }
  isEmpty() {
    return Vn(this.executorsByZIndex_)
  }
  execute(t, e, n, s, r, o, a) {
    const l = Object.keys(this.executorsByZIndex_).map(Number)
    ;(l.sort(_i), this.maxExtent_ && (t.save(), this.clip(t, n)), (o = o || Tr))
    let h, c, u, d, f, g
    for (a && l.reverse(), h = 0, c = l.length; h < c; ++h) {
      const _ = l[h].toString()
      for (f = this.executorsByZIndex_[_], u = 0, d = o.length; u < d; ++u) {
        const m = o[u]
        ;((g = f[m]), g !== void 0 && g.execute(t, e, n, s, r, a))
      }
    }
    this.maxExtent_ && t.restore()
  }
}
const Sr = {}
function d0(i) {
  if (Sr[i] !== void 0) return Sr[i]
  const t = i * 2 + 1,
    e = i * i,
    n = new Array(e + 1)
  for (let r = 0; r <= i; ++r)
    for (let o = 0; o <= i; ++o) {
      const a = r * r + o * o
      if (a > e) break
      let l = n[a]
      ;(l || ((l = []), (n[a] = l)),
        l.push(((i + r) * t + (i + o)) * 4 + 3),
        r > 0 && l.push(((i - r) * t + (i + o)) * 4 + 3),
        o > 0 && (l.push(((i + r) * t + (i - o)) * 4 + 3), r > 0 && l.push(((i - r) * t + (i - o)) * 4 + 3)))
    }
  const s = []
  for (let r = 0, o = n.length; r < o; ++r) n[r] && s.push(...n[r])
  return ((Sr[i] = s), s)
}
class f0 extends Tc {
  constructor(t, e, n, s, r, o, a) {
    ;(super(),
      (this.context_ = t),
      (this.pixelRatio_ = e),
      (this.extent_ = n),
      (this.transform_ = s),
      (this.transformRotation_ = s ? Qh(Math.atan2(s[1], s[0]), 10) : 0),
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
      (this.tmpLocalTransform_ = ke()))
  }
  drawImages_(t, e, n, s) {
    if (!this.image_) return
    const r = en(t, e, n, s, this.transform_, this.pixelCoordinates_),
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
        ;(Oi(a, g, _, 1, 1, h, -g, -_),
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
  drawText_(t, e, n, s) {
    if (!this.textState_ || this.text_ === '') return
    ;(this.textFillState_ && this.setContextFillState_(this.textFillState_),
      this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_),
      this.setContextTextState_(this.textState_))
    const r = en(t, e, n, s, this.transform_, this.pixelCoordinates_),
      o = this.context_
    let a = this.textRotation_
    for (
      this.transformRotation_ === 0 && (a -= this.viewRotation_),
        this.textRotateWithView_ && (a += this.viewRotation_);
      e < n;
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
  moveToLineTo_(t, e, n, s, r) {
    const o = this.context_,
      a = en(t, e, n, s, this.transform_, this.pixelCoordinates_)
    o.moveTo(a[0], a[1])
    let l = a.length
    r && (l -= 2)
    for (let h = 2; h < l; h += 2) o.lineTo(a[h], a[h + 1])
    return (r && o.closePath(), n)
  }
  drawRings_(t, e, n, s) {
    for (let r = 0, o = n.length; r < o; ++r) e = this.moveToLineTo_(t, e, n[r], s, !0)
    return e
  }
  drawCircle(t) {
    if (
      (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)),
      !!jt(this.extent_, t.getExtent()))
    ) {
      if (this.fillState_ || this.strokeState_) {
        ;(this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_))
        const e = zg(t, this.transform_, this.pixelCoordinates_),
          n = e[2] - e[0],
          s = e[3] - e[1],
          r = Math.sqrt(n * n + s * s),
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
    const n = e.getGeometryFunction()(t)
    n && (this.setStyle(e), this.drawGeometry(n))
  }
  drawGeometryCollection(t) {
    const e = t.getGeometriesArray()
    for (let n = 0, s = e.length; n < s; ++n) this.drawGeometry(e[n])
  }
  drawPoint(t) {
    this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_))
    const e = t.getFlatCoordinates(),
      n = t.getStride()
    ;(this.image_ && this.drawImages_(e, 0, e.length, n),
      this.text_ !== '' && this.drawText_(e, 0, e.length, n))
  }
  drawMultiPoint(t) {
    this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_))
    const e = t.getFlatCoordinates(),
      n = t.getStride()
    ;(this.image_ && this.drawImages_(e, 0, e.length, n),
      this.text_ !== '' && this.drawText_(e, 0, e.length, n))
  }
  drawLineString(t) {
    if (
      (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)),
      !!jt(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_)
        const e = this.context_,
          n = t.getFlatCoordinates()
        ;(e.beginPath(), this.moveToLineTo_(n, 0, n.length, t.getStride(), !1), e.stroke())
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
    if (jt(this.extent_, e)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_)
        const n = this.context_,
          s = t.getFlatCoordinates()
        let r = 0
        const o = t.getEnds(),
          a = t.getStride()
        n.beginPath()
        for (let l = 0, h = o.length; l < h; ++l) r = this.moveToLineTo_(s, r, o[l], a, !1)
        n.stroke()
      }
      if (this.text_ !== '') {
        const n = t.getFlatMidpoints()
        this.drawText_(n, 0, n.length, 2)
      }
    }
  }
  drawPolygon(t) {
    if (
      (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)),
      !!jt(this.extent_, t.getExtent()))
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
      !!jt(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        ;(this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_))
        const e = this.context_,
          n = t.getOrientedFlatCoordinates()
        let s = 0
        const r = t.getEndss(),
          o = t.getStride()
        e.beginPath()
        for (let a = 0, l = r.length; a < l; ++a) {
          const h = r[a]
          s = this.drawRings_(n, s, h, o)
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
      n = this.contextFillState_
    n
      ? n.fillStyle != t.fillStyle && ((n.fillStyle = t.fillStyle), (e.fillStyle = t.fillStyle))
      : ((e.fillStyle = t.fillStyle), (this.contextFillState_ = { fillStyle: t.fillStyle }))
  }
  setContextStrokeState_(t) {
    const e = this.context_,
      n = this.contextStrokeState_
    n
      ? (n.lineCap != t.lineCap && ((n.lineCap = t.lineCap), (e.lineCap = t.lineCap)),
        ln(n.lineDash, t.lineDash) || e.setLineDash((n.lineDash = t.lineDash)),
        n.lineDashOffset != t.lineDashOffset &&
          ((n.lineDashOffset = t.lineDashOffset), (e.lineDashOffset = t.lineDashOffset)),
        n.lineJoin != t.lineJoin && ((n.lineJoin = t.lineJoin), (e.lineJoin = t.lineJoin)),
        n.lineWidth != t.lineWidth && ((n.lineWidth = t.lineWidth), (e.lineWidth = t.lineWidth)),
        n.miterLimit != t.miterLimit && ((n.miterLimit = t.miterLimit), (e.miterLimit = t.miterLimit)),
        n.strokeStyle != t.strokeStyle && ((n.strokeStyle = t.strokeStyle), (e.strokeStyle = t.strokeStyle)))
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
      n = this.contextTextState_,
      s = t.textAlign ? t.textAlign : Ri
    n
      ? (n.font != t.font && ((n.font = t.font), (e.font = t.font)),
        n.textAlign != s && ((n.textAlign = s), (e.textAlign = s)),
        n.textBaseline != t.textBaseline &&
          ((n.textBaseline = t.textBaseline), (e.textBaseline = t.textBaseline)))
      : ((e.font = t.font),
        (e.textAlign = s),
        (e.textBaseline = t.textBaseline),
        (this.contextTextState_ = { font: t.font, textAlign: s, textBaseline: t.textBaseline }))
  }
  setFillStrokeStyle(t, e) {
    if (!t) this.fillState_ = null
    else {
      const n = t.getColor()
      this.fillState_ = { fillStyle: ne(n || wt) }
    }
    if (!e) this.strokeState_ = null
    else {
      const n = e.getColor(),
        s = e.getLineCap(),
        r = e.getLineDash(),
        o = e.getLineDashOffset(),
        a = e.getLineJoin(),
        l = e.getWidth(),
        h = e.getMiterLimit(),
        c = r || pe
      this.strokeState_ = {
        lineCap: s !== void 0 ? s : Ds,
        lineDash: this.pixelRatio_ === 1 ? c : c.map(u => u * this.pixelRatio_),
        lineDashOffset: (o || ye) * this.pixelRatio_,
        lineJoin: a !== void 0 ? a : Kn,
        lineWidth: (l !== void 0 ? l : Ti) * this.pixelRatio_,
        miterLimit: h !== void 0 ? h : Ci,
        strokeStyle: ne(n || wi),
      }
    }
  }
  setImageStyle(t) {
    let e
    if (!t || !(e = t.getSize())) {
      this.image_ = null
      return
    }
    const n = t.getPixelRatio(this.pixelRatio_),
      s = t.getAnchor(),
      r = t.getOrigin()
    ;((this.image_ = t.getImage(this.pixelRatio_)),
      (this.imageAnchorX_ = s[0] * n),
      (this.imageAnchorY_ = s[1] * n),
      (this.imageHeight_ = e[1] * n),
      (this.imageOpacity_ = t.getOpacity()),
      (this.imageOriginX_ = r[0]),
      (this.imageOriginY_ = r[1]),
      (this.imageRotateWithView_ = t.getRotateWithView()),
      (this.imageRotation_ = t.getRotation()))
    const o = t.getScaleArray()
    ;((this.imageScale_ = [(o[0] * this.pixelRatio_) / n, (o[1] * this.pixelRatio_) / n]),
      (this.imageWidth_ = e[0] * n))
  }
  setTextStyle(t) {
    if (!t) this.text_ = ''
    else {
      const e = t.getFill()
      if (!e) this.textFillState_ = null
      else {
        const f = e.getColor()
        this.textFillState_ = { fillStyle: ne(f || wt) }
      }
      const n = t.getStroke()
      if (!n) this.textStrokeState_ = null
      else {
        const f = n.getColor(),
          g = n.getLineCap(),
          _ = n.getLineDash(),
          m = n.getLineDashOffset(),
          p = n.getLineJoin(),
          y = n.getWidth(),
          x = n.getMiterLimit()
        this.textStrokeState_ = {
          lineCap: g !== void 0 ? g : Ds,
          lineDash: _ || pe,
          lineDashOffset: m || ye,
          lineJoin: p !== void 0 ? p : Kn,
          lineWidth: y !== void 0 ? y : Ti,
          miterLimit: x !== void 0 ? x : Ci,
          strokeStyle: ne(f || wi),
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
        font: s !== void 0 ? s : xc,
        textAlign: u !== void 0 ? u : Ri,
        textBaseline: d !== void 0 ? d : ks,
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
const Qt = 0.5
function g0(i, t, e, n, s, r, o) {
  const a = i[0] * Qt,
    l = i[1] * Qt,
    h = $t(a, l)
  h.imageSmoothingEnabled = !1
  const c = h.canvas,
    u = new f0(h, Qt, s, null, o),
    d = e.length,
    f = Math.floor((256 * 256 * 256 - 1) / d),
    g = {}
  for (let m = 1; m <= d; ++m) {
    const p = e[m - 1],
      y = p.getStyleFunction() || n
    if (!y) continue
    let x = y(p, r)
    if (!x) continue
    Array.isArray(x) || (x = [x])
    const C = (m * f).toString(16).padStart(7, '#00000')
    for (let R = 0, v = x.length; R < v; ++R) {
      const S = x[R],
        b = S.getGeometryFunction()(p)
      if (!b || !jt(s, b.getExtent())) continue
      const A = S.clone(),
        G = A.getFill()
      G && G.setColor(C)
      const N = A.getStroke()
      ;(N && (N.setColor(C), N.setLineDash(null)), A.setText(void 0))
      const D = S.getImage()
      if (D) {
        const T = D.getImageSize()
        if (!T) continue
        const O = $t(T[0], T[1], void 0, { alpha: !1 }),
          Z = O.canvas
        ;((O.fillStyle = C),
          O.fillRect(0, 0, Z.width, Z.height),
          A.setImage(
            new sr({
              img: Z,
              imgSize: T,
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
      const nt = A.getZIndex() || 0
      let I = g[nt]
      I || ((I = {}), (g[nt] = I), (I.Polygon = []), (I.Circle = []), (I.LineString = []), (I.Point = []))
      const F = b.getType()
      if (F === 'GeometryCollection') {
        const T = b.getGeometriesArrayRecursive()
        for (let O = 0, Z = T.length; O < Z; ++O) {
          const Y = T[O]
          I[Y.getType().replace('Multi', '')].push(Y, A)
        }
      } else I[F.replace('Multi', '')].push(b, A)
    }
  }
  const _ = Object.keys(g).map(Number).sort(_i)
  for (let m = 0, p = _.length; m < p; ++m) {
    const y = g[_[m]]
    for (const x in y) {
      const E = y[x]
      for (let C = 0, R = E.length; C < R; C += 2) {
        u.setStyle(E[C + 1])
        for (let v = 0, S = t.length; v < S; ++v) (u.setTransform(t[v]), u.drawGeometry(E[C]))
      }
    }
  }
  return h.getImageData(0, 0, c.width, c.height)
}
function _0(i, t, e) {
  const n = []
  if (e) {
    const s = Math.floor(Math.round(i[0]) * Qt),
      r = Math.floor(Math.round(i[1]) * Qt),
      o = (ct(s, 0, e.width - 1) + ct(r, 0, e.height - 1) * e.width) * 4,
      a = e.data[o],
      l = e.data[o + 1],
      c = e.data[o + 2] + 256 * (l + 256 * a),
      u = Math.floor((256 * 256 * 256 - 1) / t.length)
    c && c % u === 0 && n.push(t[c / u - 1])
  }
  return n
}
const m0 = 0.5,
  Sc = {
    Point: S0,
    LineString: w0,
    Polygon: I0,
    MultiPoint: v0,
    MultiLineString: R0,
    MultiPolygon: T0,
    GeometryCollection: C0,
    Circle: x0,
  }
function p0(i, t) {
  return parseInt(K(i), 10) - parseInt(K(t), 10)
}
function y0(i, t) {
  const e = io(i, t)
  return e * e
}
function io(i, t) {
  return (m0 * i) / t
}
function x0(i, t, e, n, s) {
  const r = e.getFill(),
    o = e.getStroke()
  if (r || o) {
    const l = i.getBuilder(e.getZIndex(), 'Circle')
    ;(l.setFillStrokeStyle(r, o), l.drawCircle(t, n))
  }
  const a = e.getText()
  if (a && a.getText()) {
    const l = (s || i).getBuilder(e.getZIndex(), 'Text')
    ;(l.setTextStyle(a), l.drawText(t, n))
  }
}
function wl(i, t, e, n, s, r, o) {
  let a = !1
  const l = e.getImage()
  if (l) {
    const h = l.getImageState()
    h == Q.LOADED || h == Q.ERROR
      ? l.unlistenImageChange(s)
      : (h == Q.IDLE && l.load(), l.listenImageChange(s), (a = !0))
  }
  return (E0(i, t, e, n, r, o), a)
}
function E0(i, t, e, n, s, r) {
  const o = e.getGeometryFunction()(t)
  if (!o) return
  const a = o.simplifyTransformed(n, s)
  if (e.getRenderer()) vc(i, a, e, t)
  else {
    const h = Sc[a.getType()]
    h(i, a, e, t, r)
  }
}
function vc(i, t, e, n) {
  if (t.getType() == 'GeometryCollection') {
    const r = t.getGeometries()
    for (let o = 0, a = r.length; o < a; ++o) vc(i, r[o], e, n)
    return
  }
  i.getBuilder(e.getZIndex(), 'Default').drawCustom(t, n, e.getRenderer(), e.getHitDetectionRenderer())
}
function C0(i, t, e, n, s) {
  const r = t.getGeometriesArray()
  let o, a
  for (o = 0, a = r.length; o < a; ++o) {
    const l = Sc[r[o].getType()]
    l(i, r[o], e, n, s)
  }
}
function w0(i, t, e, n, s) {
  const r = e.getStroke()
  if (r) {
    const a = i.getBuilder(e.getZIndex(), 'LineString')
    ;(a.setFillStrokeStyle(null, r), a.drawLineString(t, n))
  }
  const o = e.getText()
  if (o && o.getText()) {
    const a = (s || i).getBuilder(e.getZIndex(), 'Text')
    ;(a.setTextStyle(o), a.drawText(t, n))
  }
}
function R0(i, t, e, n, s) {
  const r = e.getStroke()
  if (r) {
    const a = i.getBuilder(e.getZIndex(), 'LineString')
    ;(a.setFillStrokeStyle(null, r), a.drawMultiLineString(t, n))
  }
  const o = e.getText()
  if (o && o.getText()) {
    const a = (s || i).getBuilder(e.getZIndex(), 'Text')
    ;(a.setTextStyle(o), a.drawText(t, n))
  }
}
function T0(i, t, e, n, s) {
  const r = e.getFill(),
    o = e.getStroke()
  if (o || r) {
    const l = i.getBuilder(e.getZIndex(), 'Polygon')
    ;(l.setFillStrokeStyle(r, o), l.drawMultiPolygon(t, n))
  }
  const a = e.getText()
  if (a && a.getText()) {
    const l = (s || i).getBuilder(e.getZIndex(), 'Text')
    ;(l.setTextStyle(a), l.drawText(t, n))
  }
}
function S0(i, t, e, n, s) {
  const r = e.getImage(),
    o = e.getText()
  let a
  if (r) {
    if (r.getImageState() != Q.LOADED) return
    let l = i
    if (s) {
      const c = r.getDeclutterMode()
      if (c !== 'none')
        if (((l = s), c === 'obstacle')) {
          const u = i.getBuilder(e.getZIndex(), 'Image')
          ;(u.setImageStyle(r, a), u.drawPoint(t, n))
        } else o && o.getText() && (a = {})
    }
    const h = l.getBuilder(e.getZIndex(), 'Image')
    ;(h.setImageStyle(r, a), h.drawPoint(t, n))
  }
  if (o && o.getText()) {
    let l = i
    s && (l = s)
    const h = l.getBuilder(e.getZIndex(), 'Text')
    ;(h.setTextStyle(o, a), h.drawText(t, n))
  }
}
function v0(i, t, e, n, s) {
  const r = e.getImage(),
    o = e.getText()
  let a
  if (r) {
    if (r.getImageState() != Q.LOADED) return
    let l = i
    if (s) {
      const c = r.getDeclutterMode()
      if (c !== 'none')
        if (((l = s), c === 'obstacle')) {
          const u = i.getBuilder(e.getZIndex(), 'Image')
          ;(u.setImageStyle(r, a), u.drawMultiPoint(t, n))
        } else o && o.getText() && (a = {})
    }
    const h = l.getBuilder(e.getZIndex(), 'Image')
    ;(h.setImageStyle(r, a), h.drawMultiPoint(t, n))
  }
  if (o && o.getText()) {
    let l = i
    s && (l = s)
    const h = l.getBuilder(e.getZIndex(), 'Text')
    ;(h.setTextStyle(o, a), h.drawText(t, n))
  }
}
function I0(i, t, e, n, s) {
  const r = e.getFill(),
    o = e.getStroke()
  if (r || o) {
    const l = i.getBuilder(e.getZIndex(), 'Polygon')
    ;(l.setFillStrokeStyle(r, o), l.drawPolygon(t, n))
  }
  const a = e.getText()
  if (a && a.getText()) {
    const l = (s || i).getBuilder(e.getZIndex(), 'Text')
    ;(l.setTextStyle(a), l.drawText(t, n))
  }
}
class M0 extends l0 {
  constructor(t) {
    ;(super(t),
      (this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this)),
      this.animatingOrInteracting_,
      (this.hitDetectionImageData_ = null),
      (this.renderedFeatures_ = null),
      (this.renderedRevision_ = -1),
      (this.renderedResolution_ = NaN),
      (this.renderedExtent_ = re()),
      (this.wrappedRenderedExtent_ = re()),
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
  renderWorlds(t, e, n) {
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
      g = !(f[kt.ANIMATING] || f[kt.INTERACTING]),
      _ = this.compositionContext_,
      m = Math.round(e.size[0] * d),
      p = Math.round(e.size[1] * d),
      y = u.getWrapX() && l.canWrapX(),
      x = y ? Gt(c) : null,
      E = y ? Math.ceil((s[2] - c[2]) / x) + 1 : 1
    let C = y ? Math.floor((s[0] - c[0]) / x) : 0
    do {
      const R = this.getRenderTransform(o, a, h, d, m, p, C * x)
      t.execute(_, 1, R, h, g, void 0, n)
    } while (++C < E)
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = $t(this.context.canvas.width, this.context.canvas.height, yl)
      this.compositionContext_ = t
    } else this.compositionContext_ = this.context
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = this.context.globalAlpha
      ;((this.context.globalAlpha = this.opacity_),
        this.context.drawImage(this.compositionContext_.canvas, 0, 0),
        (this.context.globalAlpha = t),
        d_(this.compositionContext_),
        yl.push(this.compositionContext_.canvas),
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
    const n = t.pixelRatio,
      s = t.layerStatesArray[t.layerIndex]
    ;(ng(this.pixelTransform, 1 / n, 1 / n), ig(this.inversePixelTransform, this.pixelTransform))
    const r = rg(this.pixelTransform)
    this.useContainer(e, r, this.getBackground(t))
    const o = this.context,
      a = o.canvas,
      l = this.replayGroup_,
      h = this.declutterExecutorGroup
    let c = (l && !l.isEmpty()) || (h && !h.isEmpty())
    if (!c && !(this.getLayer().hasListener(Ei.PRERENDER) || this.getLayer().hasListener(Ei.POSTRENDER)))
      return null
    const u = Math.round(t.size[0] * n),
      d = Math.round(t.size[1] * n)
    ;(a.width != u || a.height != d
      ? ((a.width = u), (a.height = d), a.style.transform !== r && (a.style.transform = r))
      : this.containerReused || o.clearRect(0, 0, u, d),
      this.preRender(o, t))
    const f = t.viewState
    ;(f.projection, (this.opacity_ = s.opacity), this.setupCompositionContext_())
    let g = !1
    if (c && s.extent && this.clipping) {
      const _ = An(s.extent)
      ;((c = jt(_, t.extent)),
        (g = c && !Ln(_, t.extent)),
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
        const n = [this.context.canvas.width, this.context.canvas.height]
        Et(this.pixelTransform, n)
        const s = this.renderedCenter_,
          r = this.renderedResolution_,
          o = this.renderedRotation_,
          a = this.renderedProjection_,
          l = this.wrappedRenderedExtent_,
          h = this.getLayer(),
          c = [],
          u = n[0] * Qt,
          d = n[1] * Qt
        c.push(this.getRenderTransform(s, r, o, Qt, u, d, 0).slice())
        const f = h.getSource(),
          g = a.getExtent()
        if (f.getWrapX() && a.canWrapX() && !Ln(g, l)) {
          let _ = l[0]
          const m = Gt(g)
          let p = 0,
            y
          for (; _ < g[0]; )
            (--p, (y = m * p), c.push(this.getRenderTransform(s, r, o, Qt, u, d, y).slice()), (_ += m))
          for (p = 0, _ = l[2]; _ > g[2]; )
            (++p, (y = m * p), c.push(this.getRenderTransform(s, r, o, Qt, u, d, y).slice()), (_ -= m))
        }
        this.hitDetectionImageData_ = g0(n, c, this.renderedFeatures_, h.getStyleFunction(), l, r, o)
      }
      e(_0(t, this.renderedFeatures_, this.hitDetectionImageData_))
    })
  }
  forEachFeatureAtCoordinate(t, e, n, s, r) {
    if (!this.replayGroup_) return
    const o = e.viewState.resolution,
      a = e.viewState.rotation,
      l = this.getLayer(),
      h = {},
      c = function (f, g, _) {
        const m = K(f),
          p = h[m]
        if (p) {
          if (p !== !0 && _ < p.distanceSq) {
            if (_ === 0) return ((h[m] = !0), r.splice(r.lastIndexOf(p), 1), s(f, l, g))
            ;((p.geometry = g), (p.distanceSq = _))
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
            n,
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
      n = e.getSource()
    if (!n) return !1
    const s = t.viewHints[kt.ANIMATING],
      r = t.viewHints[kt.INTERACTING],
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
    _ === void 0 && (_ = p0)
    const m = h.center.slice(),
      p = Di(l, g * u),
      y = p.slice(),
      x = [p.slice()],
      E = c.getExtent()
    if (n.getWrapX() && c.canWrapX() && !Ln(E, t.extent)) {
      const I = Gt(E),
        F = Math.max(Gt(p) / 2, I)
      ;((p[0] = E[0] - F), (p[2] = E[2] + F), Mg(m, c))
      const T = qh(x[0], c)
      T[0] < E[0] && T[2] < E[2]
        ? x.push([T[0] + I, T[1], T[2] + I, T[3]])
        : T[0] > E[0] && T[2] > E[2] && x.push([T[0] - I, T[1], T[2] - I, T[3]])
    }
    if (
      this.ready &&
      this.renderedResolution_ == u &&
      this.renderedRevision_ == f &&
      this.renderedRenderOrder_ == _ &&
      Ln(this.wrappedRenderedExtent_, p)
    )
      return (
        ln(this.renderedExtent_, y) || ((this.hitDetectionImageData_ = null), (this.renderedExtent_ = y)),
        (this.renderedCenter_ = m),
        (this.replayGroupChanged = !1),
        !0
      )
    this.replayGroup_ = null
    const C = new pl(io(u, d), p, u, d)
    let R
    this.getLayer().getDeclutter() && (R = new pl(io(u, d), p, u, d))
    let v
    for (let I = 0, F = x.length; I < F; ++I) n.loadFeatures(x[I], u, c)
    const S = y0(u, d)
    let b = !0
    const A = I => {
        let F
        const T = I.getStyleFunction() || e.getStyleFunction()
        if ((T && (F = T(I, u)), F)) {
          const O = this.renderFeature(I, S, F, C, v, R)
          b = b && !O
        }
      },
      G = Qs(p),
      N = n.getFeaturesInExtent(G)
    _ && N.sort(_)
    for (let I = 0, F = N.length; I < F; ++I) A(N[I])
    ;((this.renderedFeatures_ = N), (this.ready = b))
    const D = C.finish(),
      nt = new Cl(p, u, d, n.getOverlaps(), D, e.getRenderBuffer())
    return (
      R && (this.declutterExecutorGroup = new Cl(p, u, d, n.getOverlaps(), R.finish(), e.getRenderBuffer())),
      (this.renderedResolution_ = u),
      (this.renderedRevision_ = f),
      (this.renderedRenderOrder_ = _),
      (this.renderedExtent_ = y),
      (this.wrappedRenderedExtent_ = p),
      (this.renderedCenter_ = m),
      (this.renderedProjection_ = c),
      (this.replayGroup_ = nt),
      (this.hitDetectionImageData_ = null),
      (this.replayGroupChanged = !0),
      !0
    )
  }
  renderFeature(t, e, n, s, r, o) {
    if (!n) return !1
    let a = !1
    if (Array.isArray(n))
      for (let l = 0, h = n.length; l < h; ++l)
        a = wl(s, t, n[l], e, this.boundHandleStyleImageChange_, r, o) || a
    else a = wl(s, t, n, e, this.boundHandleStyleImageChange_, r, o)
    return a
  }
}
class Ho extends J_ {
  constructor(t) {
    super(t)
  }
  createRenderer() {
    return new M0(this)
  }
}
class Gs {
  constructor(t) {
    ;((this.rbush_ = new Rc(t)), (this.items_ = {}))
  }
  insert(t, e) {
    const n = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3], value: e }
    ;(this.rbush_.insert(n), (this.items_[K(e)] = n))
  }
  load(t, e) {
    const n = new Array(e.length)
    for (let s = 0, r = e.length; s < r; s++) {
      const o = t[s],
        a = e[s],
        l = { minX: o[0], minY: o[1], maxX: o[2], maxY: o[3], value: a }
      ;((n[s] = l), (this.items_[K(a)] = l))
    }
    this.rbush_.load(n)
  }
  remove(t) {
    const e = K(t),
      n = this.items_[e]
    return (delete this.items_[e], this.rbush_.remove(n) !== null)
  }
  update(t, e) {
    const n = this.items_[K(e)],
      s = [n.minX, n.minY, n.maxX, n.maxY]
    Xh(s, t) || (this.remove(e), this.insert(t, e))
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
    let n
    for (let s = 0, r = t.length; s < r; s++) if (((n = e(t[s])), n)) return n
    return n
  }
  isEmpty() {
    return Vn(this.items_)
  }
  clear() {
    ;(this.rbush_.clear(), (this.items_ = {}))
  }
  getExtent(t) {
    const e = this.rbush_.toJSON()
    return nn(e.minX, e.minY, e.maxX, e.maxY, t)
  }
  concat(t) {
    this.rbush_.load(t.rbush_.all())
    for (const e in t.items_) this.items_[e] = t.items_[e]
  }
}
class b0 extends Ee {
  constructor(t) {
    ;(super(),
      (this.projection = Rt(t.projection)),
      (this.attributions_ = Rl(t.attributions)),
      (this.attributionsCollapsible_ = t.attributionsCollapsible !== void 0 ? t.attributionsCollapsible : !0),
      (this.loading = !1),
      (this.state_ = t.state !== void 0 ? t.state : 'ready'),
      (this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1),
      (this.interpolate_ = !!t.interpolate),
      (this.viewResolver = null),
      (this.viewRejector = null))
    const e = this
    this.viewPromise_ = new Promise(function (n, s) {
      ;((e.viewResolver = n), (e.viewRejector = s))
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
    ;((this.attributions_ = Rl(t)), this.changed())
  }
  setState(t) {
    ;((this.state_ = t), this.changed())
  }
}
function Rl(i) {
  return i
    ? Array.isArray(i)
      ? function (t) {
          return i
        }
      : typeof i == 'function'
        ? i
        : function (t) {
            return [i]
          }
    : null
}
const gt = {
  ADDFEATURE: 'addfeature',
  CHANGEFEATURE: 'changefeature',
  CLEAR: 'clear',
  REMOVEFEATURE: 'removefeature',
  FEATURESLOADSTART: 'featuresloadstart',
  FEATURESLOADEND: 'featuresloadend',
  FEATURESLOADERROR: 'featuresloaderror',
}
function P0(i, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]]
}
let L0 = !1
function F0(i, t, e, n, s, r, o) {
  const a = new XMLHttpRequest()
  ;(a.open('GET', typeof i == 'function' ? i(e, n, s) : i, !0),
    t.getType() == 'arraybuffer' && (a.responseType = 'arraybuffer'),
    (a.withCredentials = L0),
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
function Tl(i, t) {
  return function (e, n, s, r, o) {
    const a = this
    F0(
      i,
      t,
      e,
      n,
      s,
      function (l, h) {
        ;(a.addFeatures(l), r !== void 0 && r(l))
      },
      o || mi,
    )
  }
}
class be extends pt {
  constructor(t, e, n) {
    ;(super(t), (this.feature = e), (this.features = n))
  }
}
class Jo extends b0 {
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
      (this.loader_ = mi),
      (this.format_ = t.format),
      (this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps),
      (this.url_ = t.url),
      t.loader !== void 0
        ? (this.loader_ = t.loader)
        : this.url_ !== void 0 && (tt(this.format_, 7), (this.loader_ = Tl(this.url_, this.format_))),
      (this.strategy_ = t.strategy !== void 0 ? t.strategy : P0))
    const e = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0
    ;((this.featuresRtree_ = e ? new Gs() : null),
      (this.loadedExtentsRtree_ = new Gs()),
      (this.loadingExtentsCount_ = 0),
      (this.nullGeometryFeatures_ = {}),
      (this.idIndex_ = {}),
      (this.uidIndex_ = {}),
      (this.featureChangeKeys_ = {}),
      (this.featuresCollection_ = null))
    let n, s
    ;(Array.isArray(t.features) ? (s = t.features) : t.features && ((n = t.features), (s = n.getArray())),
      !e && n === void 0 && (n = new tn(s)),
      s !== void 0 && this.addFeaturesInternal(s),
      n !== void 0 && this.bindFeaturesCollection_(n))
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
    const n = t.getGeometry()
    if (n) {
      const s = n.getExtent()
      this.featuresRtree_ && this.featuresRtree_.insert(s, t)
    } else this.nullGeometryFeatures_[e] = t
    this.dispatchEvent(new be(gt.ADDFEATURE, t))
  }
  setupChangeEvents_(t, e) {
    this.featureChangeKeys_[t] = [
      _t(e, ut.CHANGE, this.handleFeatureChange_, this),
      _t(e, kh.PROPERTYCHANGE, this.handleFeatureChange_, this),
    ]
  }
  addToIndex_(t, e) {
    let n = !0
    const s = e.getId()
    return (
      s !== void 0 && (s.toString() in this.idIndex_ ? (n = !1) : (this.idIndex_[s.toString()] = e)),
      n && (tt(!(t in this.uidIndex_), 30), (this.uidIndex_[t] = e)),
      n
    )
  }
  addFeatures(t) {
    ;(this.addFeaturesInternal(t), this.changed())
  }
  addFeaturesInternal(t) {
    const e = [],
      n = [],
      s = []
    for (let r = 0, o = t.length; r < o; r++) {
      const a = t[r],
        l = K(a)
      this.addToIndex_(l, a) && n.push(a)
    }
    for (let r = 0, o = n.length; r < o; r++) {
      const a = n[r],
        l = K(a)
      this.setupChangeEvents_(l, a)
      const h = a.getGeometry()
      if (h) {
        const c = h.getExtent()
        ;(e.push(c), s.push(a))
      } else this.nullGeometryFeatures_[l] = a
    }
    if ((this.featuresRtree_ && this.featuresRtree_.load(e, s), this.hasListener(gt.ADDFEATURE)))
      for (let r = 0, o = n.length; r < o; r++) this.dispatchEvent(new be(gt.ADDFEATURE, n[r]))
  }
  bindFeaturesCollection_(t) {
    let e = !1
    ;(this.addEventListener(gt.ADDFEATURE, function (n) {
      e || ((e = !0), t.push(n.feature), (e = !1))
    }),
      this.addEventListener(gt.REMOVEFEATURE, function (n) {
        e || ((e = !0), t.remove(n.feature), (e = !1))
      }),
      t.addEventListener(ee.ADD, n => {
        e || ((e = !0), this.addFeature(n.element), (e = !1))
      }),
      t.addEventListener(ee.REMOVE, n => {
        e || ((e = !0), this.removeFeature(n.element), (e = !1))
      }),
      (this.featuresCollection_ = t))
  }
  clear(t) {
    if (t) {
      for (const n in this.featureChangeKeys_) this.featureChangeKeys_[n].forEach(bt)
      this.featuresCollection_ ||
        ((this.featureChangeKeys_ = {}), (this.idIndex_ = {}), (this.uidIndex_ = {}))
    } else if (this.featuresRtree_) {
      const n = s => {
        this.removeFeatureInternal(s)
      }
      this.featuresRtree_.forEach(n)
      for (const s in this.nullGeometryFeatures_) this.removeFeatureInternal(this.nullGeometryFeatures_[s])
    }
    ;(this.featuresCollection_ && this.featuresCollection_.clear(),
      this.featuresRtree_ && this.featuresRtree_.clear(),
      (this.nullGeometryFeatures_ = {}))
    const e = new be(gt.CLEAR)
    ;(this.dispatchEvent(e), this.changed())
  }
  forEachFeature(t) {
    if (this.featuresRtree_) return this.featuresRtree_.forEach(t)
    this.featuresCollection_ && this.featuresCollection_.forEach(t)
  }
  forEachFeatureAtCoordinateDirect(t, e) {
    const n = [t[0], t[1], t[0], t[1]]
    return this.forEachFeatureInExtent(n, function (s) {
      if (s.getGeometry().intersectsCoordinate(t)) return e(s)
    })
  }
  forEachFeatureInExtent(t, e) {
    if (this.featuresRtree_) return this.featuresRtree_.forEachInExtent(t, e)
    this.featuresCollection_ && this.featuresCollection_.forEach(e)
  }
  forEachFeatureIntersectingExtent(t, e) {
    return this.forEachFeatureInExtent(t, function (n) {
      if (n.getGeometry().intersectsExtent(t)) {
        const r = e(n)
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
          Vn(this.nullGeometryFeatures_) || ie(t, Object.values(this.nullGeometryFeatures_))),
      t
    )
  }
  getFeaturesAtCoordinate(t) {
    const e = []
    return (
      this.forEachFeatureAtCoordinateDirect(t, function (n) {
        e.push(n)
      }),
      e
    )
  }
  getFeaturesInExtent(t, e) {
    if (this.featuresRtree_) {
      if (!(e && e.canWrapX() && this.getWrapX())) return this.featuresRtree_.getInExtent(t)
      const s = fg(t, e)
      return [].concat(...s.map(r => this.featuresRtree_.getInExtent(r)))
    }
    return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : []
  }
  getClosestFeatureToCoordinate(t, e) {
    const n = t[0],
      s = t[1]
    let r = null
    const o = [NaN, NaN]
    let a = 1 / 0
    const l = [-1 / 0, -1 / 0, 1 / 0, 1 / 0]
    return (
      (e = e || Bn),
      this.featuresRtree_.forEachInExtent(l, function (h) {
        if (e(h)) {
          const c = h.getGeometry(),
            u = a
          if (((a = c.closestPointXY(n, s, o, a)), a < u)) {
            r = h
            const d = Math.sqrt(a)
            ;((l[0] = n - d), (l[1] = s - d), (l[2] = n + d), (l[3] = s + d))
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
      n = K(e),
      s = e.getGeometry()
    if (!s)
      n in this.nullGeometryFeatures_ ||
        (this.featuresRtree_ && this.featuresRtree_.remove(e), (this.nullGeometryFeatures_[n] = e))
    else {
      const o = s.getExtent()
      n in this.nullGeometryFeatures_
        ? (delete this.nullGeometryFeatures_[n], this.featuresRtree_ && this.featuresRtree_.insert(o, e))
        : this.featuresRtree_ && this.featuresRtree_.update(o, e)
    }
    const r = e.getId()
    if (r !== void 0) {
      const o = r.toString()
      this.idIndex_[o] !== e && (this.removeFromIdIndex_(e), (this.idIndex_[o] = e))
    } else (this.removeFromIdIndex_(e), (this.uidIndex_[n] = e))
    ;(this.changed(), this.dispatchEvent(new be(gt.CHANGEFEATURE, e)))
  }
  hasFeature(t) {
    const e = t.getId()
    return e !== void 0 ? e in this.idIndex_ : K(t) in this.uidIndex_
  }
  isEmpty() {
    return this.featuresRtree_
      ? this.featuresRtree_.isEmpty() && Vn(this.nullGeometryFeatures_)
      : this.featuresCollection_
        ? this.featuresCollection_.getLength() === 0
        : !0
  }
  loadFeatures(t, e, n) {
    const s = this.loadedExtentsRtree_,
      r = this.strategy_(t, e, n)
    for (let o = 0, a = r.length; o < a; ++o) {
      const l = r[o]
      s.forEachInExtent(l, function (c) {
        return Ln(c.extent, l)
      }) ||
        (++this.loadingExtentsCount_,
        this.dispatchEvent(new be(gt.FEATURESLOADSTART)),
        this.loader_.call(
          this,
          l,
          e,
          n,
          c => {
            ;(--this.loadingExtentsCount_, this.dispatchEvent(new be(gt.FEATURESLOADEND, void 0, c)))
          },
          () => {
            ;(--this.loadingExtentsCount_, this.dispatchEvent(new be(gt.FEATURESLOADERROR)))
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
    let n
    ;(e.forEachInExtent(t, function (s) {
      if (Xh(s.extent, t)) return ((n = s), !0)
    }),
      n && e.remove(n))
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
      n = this.featureChangeKeys_[e]
    if (!n) return
    ;(n.forEach(bt), delete this.featureChangeKeys_[e])
    const s = t.getId()
    return (
      s !== void 0 && delete this.idIndex_[s.toString()],
      delete this.uidIndex_[e],
      this.dispatchEvent(new be(gt.REMOVEFEATURE, t)),
      t
    )
  }
  removeFromIdIndex_(t) {
    let e = !1
    for (const n in this.idIndex_)
      if (this.idIndex_[n] === t) {
        ;(delete this.idIndex_[n], (e = !0))
        break
      }
    return e
  }
  setLoader(t) {
    this.loader_ = t
  }
  setUrl(t) {
    ;(tt(this.format_, 7), (this.url_ = t), this.setLoader(Tl(t, this.format_)))
  }
}
class A0 extends pt {
  constructor(t, e, n) {
    ;(super(t), (this.map = e), (this.frameState = n !== void 0 ? n : null))
  }
}
class O0 extends A0 {
  constructor(t, e, n, s, r, o) {
    ;(super(t, e, r),
      (this.originalEvent = n),
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
const ht = {
    SINGLECLICK: 'singleclick',
    DBLCLICK: ut.DBLCLICK,
    POINTERDRAG: 'pointerdrag',
    POINTERMOVE: 'pointermove',
    POINTERDOWN: 'pointerdown',
    POINTERUP: 'pointerup',
  },
  Xs = { ACTIVE: 'active' }
class D0 extends Ee {
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
    return this.get(Xs.ACTIVE)
  }
  getMap() {
    return this.map_
  }
  handleEvent(t) {
    return !0
  }
  setActive(t) {
    this.set(Xs.ACTIVE, t)
  }
  setMap(t) {
    this.map_ = t
  }
}
class rr extends D0 {
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
      if (t.type == ht.POINTERDRAG) (this.handleDragEvent(t), t.originalEvent.preventDefault())
      else if (t.type == ht.POINTERUP) {
        const n = this.handleUpEvent(t)
        this.handlingDownUpSequence = n && this.targetPointers.length > 0
      }
    } else if (t.type == ht.POINTERDOWN) {
      const n = this.handleDownEvent(t)
      ;((this.handlingDownUpSequence = n), (e = this.stopDown(n)))
    } else t.type == ht.POINTERMOVE && this.handleMoveEvent(t)
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
const k0 = function (i) {
    const t = i.originalEvent
    return t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  zs = Bn,
  N0 = Fo,
  j0 = function (i) {
    return i.type == ht.SINGLECLICK
  },
  G0 = function (i) {
    const t = i.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  X0 = function (i) {
    const t = i.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  z0 = function (i) {
    const t = i.originalEvent
    return (tt(t !== void 0, 56), t.isPrimary && t.button === 0)
  }
class Ic {
  constructor() {
    ;((this.dataProjection = void 0),
      (this.defaultFeatureProjection = void 0),
      (this.supportedMediaTypes = null))
  }
  getReadOptions(t, e) {
    if (e) {
      let n = e.dataProjection ? Rt(e.dataProjection) : this.readProjection(t)
      ;(e.extent && n && n.getUnits() === 'tile-pixels' && ((n = Rt(n)), n.setWorldExtent(e.extent)),
        (e = { dataProjection: n, featureProjection: e.featureProjection }))
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
    return L()
  }
  readFeature(t, e) {
    return L()
  }
  readFeatures(t, e) {
    return L()
  }
  readGeometry(t, e) {
    return L()
  }
  readProjection(t) {
    return L()
  }
  writeFeature(t, e) {
    return L()
  }
  writeFeatures(t, e) {
    return L()
  }
  writeGeometry(t, e) {
    return L()
  }
}
function Ws(i, t, e) {
  const n = e ? Rt(e.featureProjection) : null,
    s = e ? Rt(e.dataProjection) : null
  let r
  if (
    (n && s && !kg(n, s) ? (r = (t ? i.clone() : i).transform(t ? n : s, t ? s : n)) : (r = i),
    t && e && e.decimals !== void 0)
  ) {
    const o = Math.pow(10, e.decimals),
      a = function (l) {
        for (let h = 0, c = l.length; h < c; ++h) l[h] = Math.round(l[h] * o) / o
        return l
      }
    ;(r === i && (r = i.clone()), r.applyTransform(a))
  }
  return r
}
class W0 extends Ic {
  constructor() {
    super()
  }
  getType() {
    return 'json'
  }
  readFeature(t, e) {
    return this.readFeatureFromObject(as(t), this.getReadOptions(t, e))
  }
  readFeatures(t, e) {
    return this.readFeaturesFromObject(as(t), this.getReadOptions(t, e))
  }
  readFeatureFromObject(t, e) {
    return L()
  }
  readFeaturesFromObject(t, e) {
    return L()
  }
  readGeometry(t, e) {
    return this.readGeometryFromObject(as(t), this.getReadOptions(t, e))
  }
  readGeometryFromObject(t, e) {
    return L()
  }
  readProjection(t) {
    return this.readProjectionFromObject(as(t))
  }
  readProjectionFromObject(t) {
    return L()
  }
  writeFeature(t, e) {
    return JSON.stringify(this.writeFeatureObject(t, e))
  }
  writeFeatureObject(t, e) {
    return L()
  }
  writeFeatures(t, e) {
    return JSON.stringify(this.writeFeaturesObject(t, e))
  }
  writeFeaturesObject(t, e) {
    return L()
  }
  writeGeometry(t, e) {
    return JSON.stringify(this.writeGeometryObject(t, e))
  }
  writeGeometryObject(t, e) {
    return L()
  }
}
function as(i) {
  if (typeof i == 'string') {
    const t = JSON.parse(i)
    return t || null
  }
  return i !== null ? i : null
}
class sn extends Ye {
  constructor(t, e, n) {
    if (
      (super(), (this.ends_ = []), (this.maxDelta_ = -1), (this.maxDeltaRevision_ = -1), Array.isArray(t[0]))
    )
      this.setCoordinates(t, e)
    else if (e !== void 0 && n) (this.setFlatCoordinates(e, t), (this.ends_ = n))
    else {
      let s = this.getLayout()
      const r = t,
        o = [],
        a = []
      for (let l = 0, h = r.length; l < h; ++l) {
        const c = r[l]
        ;(l === 0 && (s = c.getLayout()), ie(o, c.getFlatCoordinates()), a.push(o.length))
      }
      ;(this.setFlatCoordinates(s, o), (this.ends_ = a))
    }
  }
  appendLineString(t) {
    ;(this.flatCoordinates
      ? ie(this.flatCoordinates, t.getFlatCoordinates().slice())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed())
  }
  clone() {
    const t = new sn(this.flatCoordinates.slice(), this.layout, this.ends_.slice())
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, s) {
    return s < hn(this.getExtent(), t, e)
      ? s
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(Wo(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Bo(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !1, t, e, n, s))
  }
  getCoordinateAtM(t, e, n) {
    return (this.layout != 'XYM' && this.layout != 'XYZM') || this.flatCoordinates.length === 0
      ? null
      : ((e = e !== void 0 ? e : !1),
        (n = n !== void 0 ? n : !1),
        o_(this.flatCoordinates, 0, this.ends_, this.stride, t, e, n))
  }
  getCoordinates() {
    return yi(this.flatCoordinates, 0, this.ends_, this.stride)
  }
  getEnds() {
    return this.ends_
  }
  getLineString(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new Zt(this.flatCoordinates.slice(t === 0 ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout)
  }
  getLineStrings() {
    const t = this.flatCoordinates,
      e = this.ends_,
      n = this.layout,
      s = []
    let r = 0
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o],
        h = new Zt(t.slice(r, l), n)
      ;(s.push(h), (r = l))
    }
    return s
  }
  getFlatMidpoints() {
    const t = [],
      e = this.flatCoordinates
    let n = 0
    const s = this.ends_,
      r = this.stride
    for (let o = 0, a = s.length; o < a; ++o) {
      const l = s[o],
        h = gc(e, n, l, r, 0.5)
      ;(ie(t, h), (n = l))
    }
    return t
  }
  getSimplifiedGeometryInternal(t) {
    const e = [],
      n = []
    return ((e.length = Vg(this.flatCoordinates, 0, this.ends_, this.stride, t, e, 0, n)), new sn(e, 'XY', n))
  }
  getType() {
    return 'MultiLineString'
  }
  intersectsExtent(t) {
    return Jg(this.flatCoordinates, 0, this.ends_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []))
    const n = Vo(this.flatCoordinates, 0, t, this.stride, this.ends_)
    ;((this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1]), this.changed())
  }
}
class Jn extends Ye {
  constructor(t, e) {
    ;(super(), e && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
  }
  appendPoint(t) {
    ;(this.flatCoordinates
      ? ie(this.flatCoordinates, t.getFlatCoordinates())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.changed())
  }
  clone() {
    const t = new Jn(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, s) {
    if (s < hn(this.getExtent(), t, e)) return s
    const r = this.flatCoordinates,
      o = this.stride
    for (let a = 0, l = r.length; a < l; a += o) {
      const h = ge(t, e, r[a], r[a + 1])
      if (h < s) {
        s = h
        for (let c = 0; c < o; ++c) n[c] = r[a + c]
        n.length = o
      }
    }
    return s
  }
  getCoordinates() {
    return Ae(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getPoint(t) {
    const e = this.flatCoordinates ? this.flatCoordinates.length / this.stride : 0
    return t < 0 || e <= t
      ? null
      : new Xt(this.flatCoordinates.slice(t * this.stride, (t + 1) * this.stride), this.layout)
  }
  getPoints() {
    const t = this.flatCoordinates,
      e = this.layout,
      n = this.stride,
      s = []
    for (let r = 0, o = t.length; r < o; r += n) {
      const a = new Xt(t.slice(r, r + n), e)
      s.push(a)
    }
    return s
  }
  getType() {
    return 'MultiPoint'
  }
  intersectsExtent(t) {
    const e = this.flatCoordinates,
      n = this.stride
    for (let s = 0, r = e.length; s < r; s += n) {
      const o = e[s],
        a = e[s + 1]
      if (Do(t, o, a)) return !0
    }
    return !1
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = tr(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
function Y0(i, t, e, n) {
  const s = []
  let r = re()
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((r = Gh(i, t, l[0], n)), s.push((r[0] + r[2]) / 2, (r[1] + r[3]) / 2), (t = l[l.length - 1]))
  }
  return s
}
class rn extends Ye {
  constructor(t, e, n) {
    if (
      (super(),
      (this.endss_ = []),
      (this.flatInteriorPointsRevision_ = -1),
      (this.flatInteriorPoints_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      !n && !Array.isArray(t[0]))
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
        ;(ie(o, c.getFlatCoordinates()), a.push(d))
      }
      ;((e = s), (t = o), (n = a))
    }
    e !== void 0 && n ? (this.setFlatCoordinates(e, t), (this.endss_ = n)) : this.setCoordinates(t, e)
  }
  appendPolygon(t) {
    let e
    if (!this.flatCoordinates)
      ((this.flatCoordinates = t.getFlatCoordinates().slice()), (e = t.getEnds().slice()), this.endss_.push())
    else {
      const n = this.flatCoordinates.length
      ;(ie(this.flatCoordinates, t.getFlatCoordinates()), (e = t.getEnds().slice()))
      for (let s = 0, r = e.length; s < r; ++s) e[s] += n
    }
    ;(this.endss_.push(e), this.changed())
  }
  clone() {
    const t = this.endss_.length,
      e = new Array(t)
    for (let s = 0; s < t; ++s) e[s] = this.endss_[s].slice()
    const n = new rn(this.flatCoordinates.slice(), this.layout, e)
    return (n.applyProperties(this), n)
  }
  closestPointXY(t, e, n, s) {
    return s < hn(this.getExtent(), t, e)
      ? s
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(Wg(this.flatCoordinates, 0, this.endss_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Yg(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, this.maxDelta_, !0, t, e, n, s))
  }
  containsXY(t, e) {
    return qg(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t, e)
  }
  getArea() {
    return Kg(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride)
  }
  getCoordinates(t) {
    let e
    return (
      t !== void 0
        ? ((e = this.getOrientedFlatCoordinates().slice()), Qa(e, 0, this.endss_, this.stride, t))
        : (e = this.flatCoordinates),
      Jr(e, 0, this.endss_, this.stride)
    )
  }
  getEndss() {
    return this.endss_
  }
  getFlatInteriorPoints() {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      const t = Y0(this.flatCoordinates, 0, this.endss_, this.stride)
      ;((this.flatInteriorPoints_ = Hg(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t)),
        (this.flatInteriorPointsRevision_ = this.getRevision()))
    }
    return this.flatInteriorPoints_
  }
  getInteriorPoints() {
    return new Jn(this.getFlatInteriorPoints().slice(), 'XYM')
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates
      ;(n_(t, 0, this.endss_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = Qa(
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
      n = []
    return (
      (e.length = Zg(this.flatCoordinates, 0, this.endss_, this.stride, Math.sqrt(t), e, 0, n)),
      new rn(e, 'XY', n)
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
    const n = this.endss_[t].slice(),
      s = n[n.length - 1]
    if (e !== 0) for (let r = 0, o = n.length; r < o; ++r) n[r] -= e
    return new zt(this.flatCoordinates.slice(e, s), this.layout, n)
  }
  getPolygons() {
    const t = this.layout,
      e = this.flatCoordinates,
      n = this.endss_,
      s = []
    let r = 0
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = n[o].slice(),
        h = l[l.length - 1]
      if (r !== 0) for (let u = 0, d = l.length; u < d; ++u) l[u] -= r
      const c = new zt(e.slice(r, h), t, l)
      ;(s.push(c), (r = h))
    }
    return s
  }
  getType() {
    return 'MultiPolygon'
  }
  intersectsExtent(t) {
    return t_(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 3), this.flatCoordinates || (this.flatCoordinates = []))
    const n = Bg(this.flatCoordinates, 0, t, this.stride, this.endss_)
    if (n.length === 0) this.flatCoordinates.length = 0
    else {
      const s = n[n.length - 1]
      this.flatCoordinates.length = s.length === 0 ? 0 : s[s.length - 1]
    }
    this.changed()
  }
}
class ze extends sc {
  constructor(t) {
    ;(super(), (this.geometries_ = t || null), (this.changeEventsKeys_ = []), this.listenGeometriesChange_())
  }
  unlistenGeometriesChange_() {
    ;(this.changeEventsKeys_.forEach(bt), (this.changeEventsKeys_.length = 0))
  }
  listenGeometriesChange_() {
    if (this.geometries_)
      for (let t = 0, e = this.geometries_.length; t < e; ++t)
        this.changeEventsKeys_.push(_t(this.geometries_[t], ut.CHANGE, this.changed, this))
  }
  clone() {
    const t = new ze(null)
    return (t.setGeometries(this.geometries_), t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, s) {
    if (s < hn(this.getExtent(), t, e)) return s
    const r = this.geometries_
    for (let o = 0, a = r.length; o < a; ++o) s = r[o].closestPointXY(t, e, n, s)
    return s
  }
  containsXY(t, e) {
    const n = this.geometries_
    for (let s = 0, r = n.length; s < r; ++s) if (n[s].containsXY(t, e)) return !0
    return !1
  }
  computeExtent(t) {
    ko(t)
    const e = this.geometries_
    for (let n = 0, s = e.length; n < s; ++n) zh(t, e[n].getExtent())
    return t
  }
  getGeometries() {
    return Sl(this.geometries_)
  }
  getGeometriesArray() {
    return this.geometries_
  }
  getGeometriesArrayRecursive() {
    let t = []
    const e = this.geometries_
    for (let n = 0, s = e.length; n < s; ++n)
      e[n].getType() === this.getType() ? (t = t.concat(e[n].getGeometriesArrayRecursive())) : t.push(e[n])
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
      n = this.geometries_
    let s = !1
    for (let r = 0, o = n.length; r < o; ++r) {
      const a = n[r],
        l = a.getSimplifiedGeometry(t)
      ;(e.push(l), l !== a && (s = !0))
    }
    if (s) {
      const r = new ze(null)
      return (r.setGeometriesArray(e), r)
    }
    return ((this.simplifiedGeometryMaxMinSquaredTolerance = t), this)
  }
  getType() {
    return 'GeometryCollection'
  }
  intersectsExtent(t) {
    const e = this.geometries_
    for (let n = 0, s = e.length; n < s; ++n) if (e[n].intersectsExtent(t)) return !0
    return !1
  }
  isEmpty() {
    return this.geometries_.length === 0
  }
  rotate(t, e) {
    const n = this.geometries_
    for (let s = 0, r = n.length; s < r; ++s) n[s].rotate(t, e)
    this.changed()
  }
  scale(t, e, n) {
    n || (n = Un(this.getExtent()))
    const s = this.geometries_
    for (let r = 0, o = s.length; r < o; ++r) s[r].scale(t, e, n)
    this.changed()
  }
  setGeometries(t) {
    this.setGeometriesArray(Sl(t))
  }
  setGeometriesArray(t) {
    ;(this.unlistenGeometriesChange_(),
      (this.geometries_ = t),
      this.listenGeometriesChange_(),
      this.changed())
  }
  applyTransform(t) {
    const e = this.geometries_
    for (let n = 0, s = e.length; n < s; ++n) e[n].applyTransform(t)
    this.changed()
  }
  translate(t, e) {
    const n = this.geometries_
    for (let s = 0, r = n.length; s < r; ++s) n[s].translate(t, e)
    this.changed()
  }
  disposeInternal() {
    ;(this.unlistenGeometriesChange_(), super.disposeInternal())
  }
}
function Sl(i) {
  const t = []
  for (let e = 0, n = i.length; e < n; ++e) t.push(i[e].clone())
  return t
}
class oi extends W0 {
  constructor(t) {
    ;((t = t || {}),
      super(),
      (this.dataProjection = Rt(t.dataProjection ? t.dataProjection : 'EPSG:4326')),
      t.featureProjection && (this.defaultFeatureProjection = Rt(t.featureProjection)),
      (this.geometryName_ = t.geometryName),
      (this.extractGeometryName_ = t.extractGeometryName),
      (this.supportedMediaTypes = ['application/geo+json', 'application/vnd.geo+json']))
  }
  readFeatureFromObject(t, e) {
    let n = null
    t.type === 'Feature' ? (n = t) : (n = { type: 'Feature', geometry: t, properties: null })
    const s = so(n.geometry, e),
      r = new mt()
    return (
      this.geometryName_
        ? r.setGeometryName(this.geometryName_)
        : this.extractGeometryName_ && 'geometry_name' in n !== void 0 && r.setGeometryName(n.geometry_name),
      r.setGeometry(s),
      'id' in n && r.setId(n.id),
      n.properties && r.setProperties(n.properties, !0),
      r
    )
  }
  readFeaturesFromObject(t, e) {
    const n = t
    let s = null
    if (n.type === 'FeatureCollection') {
      const r = t
      s = []
      const o = r.features
      for (let a = 0, l = o.length; a < l; ++a) s.push(this.readFeatureFromObject(o[a], e))
    } else s = [this.readFeatureFromObject(t, e)]
    return s
  }
  readGeometryFromObject(t, e) {
    return so(t, e)
  }
  readProjectionFromObject(t) {
    const e = t.crs
    let n
    return (
      e
        ? e.type == 'name'
          ? (n = Rt(e.properties.name))
          : e.type === 'EPSG'
            ? (n = Rt('EPSG:' + e.properties.code))
            : tt(!1, 36)
        : (n = this.dataProjection),
      n
    )
  }
  writeFeatureObject(t, e) {
    e = this.adaptOptions(e)
    const n = { type: 'Feature', geometry: null, properties: null },
      s = t.getId()
    if ((s !== void 0 && (n.id = s), !t.hasProperties())) return n
    const r = t.getProperties(),
      o = t.getGeometry()
    return (o && ((n.geometry = ro(o, e)), delete r[t.getGeometryName()]), Vn(r) || (n.properties = r), n)
  }
  writeFeaturesObject(t, e) {
    e = this.adaptOptions(e)
    const n = []
    for (let s = 0, r = t.length; s < r; ++s) n.push(this.writeFeatureObject(t[s], e))
    return { type: 'FeatureCollection', features: n }
  }
  writeGeometryObject(t, e) {
    return ro(t, this.adaptOptions(e))
  }
}
function so(i, t) {
  if (!i) return null
  let e
  switch (i.type) {
    case 'Point': {
      e = V0(i)
      break
    }
    case 'LineString': {
      e = U0(i)
      break
    }
    case 'Polygon': {
      e = q0(i)
      break
    }
    case 'MultiPoint': {
      e = K0(i)
      break
    }
    case 'MultiLineString': {
      e = Z0(i)
      break
    }
    case 'MultiPolygon': {
      e = $0(i)
      break
    }
    case 'GeometryCollection': {
      e = B0(i)
      break
    }
    default:
      throw new Error('Unsupported GeoJSON type: ' + i.type)
  }
  return Ws(e, !1, t)
}
function B0(i, t) {
  const e = i.geometries.map(function (n) {
    return so(n, t)
  })
  return new ze(e)
}
function V0(i) {
  return new Xt(i.coordinates)
}
function U0(i) {
  return new Zt(i.coordinates)
}
function Z0(i) {
  return new sn(i.coordinates)
}
function K0(i) {
  return new Jn(i.coordinates)
}
function $0(i) {
  return new rn(i.coordinates)
}
function q0(i) {
  return new zt(i.coordinates)
}
function ro(i, t) {
  i = Ws(i, !0, t)
  const e = i.getType()
  let n
  switch (e) {
    case 'Point': {
      n = nm(i)
      break
    }
    case 'LineString': {
      n = J0(i)
      break
    }
    case 'Polygon': {
      n = im(i, t)
      break
    }
    case 'MultiPoint': {
      n = tm(i)
      break
    }
    case 'MultiLineString': {
      n = Q0(i)
      break
    }
    case 'MultiPolygon': {
      n = em(i, t)
      break
    }
    case 'GeometryCollection': {
      n = H0(i, t)
      break
    }
    case 'Circle': {
      n = { type: 'GeometryCollection', geometries: [] }
      break
    }
    default:
      throw new Error('Unsupported geometry type: ' + e)
  }
  return n
}
function H0(i, t) {
  return (
    (t = Object.assign({}, t)),
    delete t.featureProjection,
    {
      type: 'GeometryCollection',
      geometries: i.getGeometriesArray().map(function (n) {
        return ro(n, t)
      }),
    }
  )
}
function J0(i, t) {
  return { type: 'LineString', coordinates: i.getCoordinates() }
}
function Q0(i, t) {
  return { type: 'MultiLineString', coordinates: i.getCoordinates() }
}
function tm(i, t) {
  return { type: 'MultiPoint', coordinates: i.getCoordinates() }
}
function em(i, t) {
  let e
  return (t && (e = t.rightHanded), { type: 'MultiPolygon', coordinates: i.getCoordinates(e) })
}
function nm(i, t) {
  return { type: 'Point', coordinates: i.getCoordinates() }
}
function im(i, t) {
  let e
  return (t && (e = t.rightHanded), { type: 'Polygon', coordinates: i.getCoordinates(e) })
}
class sm extends Ic {
  constructor() {
    super()
  }
  getType() {
    return 'text'
  }
  readFeature(t, e) {
    return this.readFeatureFromText(ls(t), this.adaptOptions(e))
  }
  readFeatureFromText(t, e) {
    return L()
  }
  readFeatures(t, e) {
    return this.readFeaturesFromText(ls(t), this.adaptOptions(e))
  }
  readFeaturesFromText(t, e) {
    return L()
  }
  readGeometry(t, e) {
    return this.readGeometryFromText(ls(t), this.adaptOptions(e))
  }
  readGeometryFromText(t, e) {
    return L()
  }
  readProjection(t) {
    return this.readProjectionFromText(ls(t))
  }
  readProjectionFromText(t) {
    return this.dataProjection
  }
  writeFeature(t, e) {
    return this.writeFeatureText(t, this.adaptOptions(e))
  }
  writeFeatureText(t, e) {
    return L()
  }
  writeFeatures(t, e) {
    return this.writeFeaturesText(t, this.adaptOptions(e))
  }
  writeFeaturesText(t, e) {
    return L()
  }
  writeGeometry(t, e) {
    return this.writeGeometryText(t, this.adaptOptions(e))
  }
  writeGeometryText(t, e) {
    return L()
  }
}
function ls(i) {
  return typeof i == 'string' ? i : ''
}
class ji extends Ye {
  constructor(t, e, n) {
    ;(super(),
      n !== void 0 && e === void 0
        ? this.setFlatCoordinates(n, t)
        : ((e = e || 0), this.setCenterAndRadius(t, e, n)))
  }
  clone() {
    const t = new ji(this.flatCoordinates.slice(), void 0, this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, s) {
    const r = this.flatCoordinates,
      o = t - r[0],
      a = e - r[1],
      l = o * o + a * a
    if (l < s) {
      if (l === 0) for (let h = 0; h < this.stride; ++h) n[h] = r[h]
      else {
        const h = this.getRadius() / Math.sqrt(l)
        ;((n[0] = r[0] + h * o), (n[1] = r[1] + h * a))
        for (let c = 2; c < this.stride; ++c) n[c] = r[c]
      }
      return ((n.length = this.stride), l)
    }
    return s
  }
  containsXY(t, e) {
    const n = this.flatCoordinates,
      s = t - n[0],
      r = e - n[1]
    return s * s + r * r <= this.getRadiusSquared_()
  }
  getCenter() {
    return this.flatCoordinates.slice(0, this.stride)
  }
  computeExtent(t) {
    const e = this.flatCoordinates,
      n = e[this.stride] - e[0]
    return nn(e[0] - n, e[1] - n, e[0] + n, e[1] + n, t)
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
    if (jt(t, e)) {
      const n = this.getCenter()
      return (t[0] <= n[0] && t[2] >= n[0]) || (t[1] <= n[1] && t[3] >= n[1])
        ? !0
        : Bh(t, this.intersectsCoordinate.bind(this))
    }
    return !1
  }
  setCenter(t) {
    const e = this.stride,
      n = this.flatCoordinates[e] - this.flatCoordinates[0],
      s = t.slice()
    s[e] = s[0] + n
    for (let r = 1; r < e; ++r) s[e + r] = t[r]
    ;(this.setFlatCoordinates(this.layout, s), this.changed())
  }
  setCenterAndRadius(t, e, n) {
    ;(this.setLayout(n, t, 0), this.flatCoordinates || (this.flatCoordinates = []))
    const s = this.flatCoordinates
    let r = rc(s, 0, t, this.stride)
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
    const n = this.getCenter(),
      s = this.getStride()
    ;(this.setCenter(Xo(n, 0, n.length, s, t, e, n)), this.changed())
  }
}
ji.prototype.transform
const rm = { POINT: Xt, LINESTRING: Zt, POLYGON: zt, MULTIPOINT: Jn, MULTILINESTRING: sn, MULTIPOLYGON: rn },
  Mc = 'EMPTY',
  bc = 'Z',
  Pc = 'M',
  om = 'ZM',
  z = { START: 0, TEXT: 1, LEFT_PAREN: 2, RIGHT_PAREN: 3, NUMBER: 4, COMMA: 5, EOF: 6 },
  am = {
    Point: 'POINT',
    LineString: 'LINESTRING',
    Polygon: 'POLYGON',
    MultiPoint: 'MULTIPOINT',
    MultiLineString: 'MULTILINESTRING',
    MultiPolygon: 'MULTIPOLYGON',
    GeometryCollection: 'GEOMETRYCOLLECTION',
    Circle: 'CIRCLE',
  }
class lm {
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
    let n = t,
      s
    if (t == '(') s = z.LEFT_PAREN
    else if (t == ',') s = z.COMMA
    else if (t == ')') s = z.RIGHT_PAREN
    else if (this.isNumeric_(t) || t == '-') ((s = z.NUMBER), (n = this.readNumber_()))
    else if (this.isAlpha_(t)) ((s = z.TEXT), (n = this.readText_()))
    else {
      if (this.isWhiteSpace_(t)) return this.nextToken()
      if (t === '') s = z.EOF
      else throw new Error('Unexpected character: ' + t)
    }
    return { position: e, value: n, type: s }
  }
  readNumber_() {
    let t
    const e = this.index_
    let n = !1,
      s = !1
    do (t == '.' ? (n = !0) : (t == 'e' || t == 'E') && (s = !0), (t = this.nextChar_()))
    while (this.isNumeric_(t, n) || (!s && (t == 'e' || t == 'E')) || (s && (t == '-' || t == '+')))
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
class hm {
  constructor(t) {
    ;((this.lexer_ = t), (this.token_ = { position: 0, type: z.START }), (this.layout_ = 'XY'))
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
    if (this.isTokenType(z.TEXT)) {
      const n = e.value
      ;(n === bc ? (t = 'XYZ') : n === Pc ? (t = 'XYM') : n === om && (t = 'XYZM'),
        t !== 'XY' && this.consume_())
    }
    return t
  }
  parseGeometryCollectionText_() {
    if (this.match(z.LEFT_PAREN)) {
      const t = []
      do t.push(this.parseGeometry_())
      while (this.match(z.COMMA))
      if (this.match(z.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parsePointText_() {
    if (this.match(z.LEFT_PAREN)) {
      const t = this.parsePoint_()
      if (this.match(z.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseLineStringText_() {
    if (this.match(z.LEFT_PAREN)) {
      const t = this.parsePointList_()
      if (this.match(z.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parsePolygonText_() {
    if (this.match(z.LEFT_PAREN)) {
      const t = this.parseLineStringTextList_()
      if (this.match(z.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseMultiPointText_() {
    if (this.match(z.LEFT_PAREN)) {
      let t
      if (
        (this.token_.type == z.LEFT_PAREN ? (t = this.parsePointTextList_()) : (t = this.parsePointList_()),
        this.match(z.RIGHT_PAREN))
      )
        return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseMultiLineStringText_() {
    if (this.match(z.LEFT_PAREN)) {
      const t = this.parseLineStringTextList_()
      if (this.match(z.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseMultiPolygonText_() {
    if (this.match(z.LEFT_PAREN)) {
      const t = this.parsePolygonTextList_()
      if (this.match(z.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parsePoint_() {
    const t = [],
      e = this.layout_.length
    for (let n = 0; n < e; ++n) {
      const s = this.token_
      if (this.match(z.NUMBER)) t.push(s.value)
      else break
    }
    if (t.length == e) return t
    throw new Error(this.formatErrorMessage_())
  }
  parsePointList_() {
    const t = [this.parsePoint_()]
    for (; this.match(z.COMMA); ) t.push(this.parsePoint_())
    return t
  }
  parsePointTextList_() {
    const t = [this.parsePointText_()]
    for (; this.match(z.COMMA); ) t.push(this.parsePointText_())
    return t
  }
  parseLineStringTextList_() {
    const t = [this.parseLineStringText_()]
    for (; this.match(z.COMMA); ) t.push(this.parseLineStringText_())
    return t
  }
  parsePolygonTextList_() {
    const t = [this.parsePolygonText_()]
    for (; this.match(z.COMMA); ) t.push(this.parsePolygonText_())
    return t
  }
  isEmptyGeometry_() {
    const t = this.isTokenType(z.TEXT) && this.token_.value == Mc
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
    if (this.match(z.TEXT)) {
      const e = t.value
      this.layout_ = this.parseGeometryLayout_()
      const n = this.isEmptyGeometry_()
      if (e == 'GEOMETRYCOLLECTION') {
        if (n) return new ze([])
        const o = this.parseGeometryCollectionText_()
        return new ze(o)
      }
      const s = rm[e]
      if (!s) throw new Error('Invalid geometry type: ' + e)
      let r
      if (n) e == 'POINT' ? (r = [NaN, NaN]) : (r = [])
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
class hs extends sm {
  constructor(t) {
    ;(super(), (t = t || {}), (this.splitCollection_ = t.splitCollection !== void 0 ? t.splitCollection : !1))
  }
  parse_(t) {
    const e = new lm(t)
    return new hm(e).parse()
  }
  readFeatureFromText(t, e) {
    const n = this.readGeometryFromText(t, e),
      s = new mt()
    return (s.setGeometry(n), s)
  }
  readFeaturesFromText(t, e) {
    let n = []
    const s = this.readGeometryFromText(t, e)
    this.splitCollection_ && s.getType() == 'GeometryCollection' ? (n = s.getGeometriesArray()) : (n = [s])
    const r = []
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = new mt()
      ;(l.setGeometry(n[o]), r.push(l))
    }
    return r
  }
  readGeometryFromText(t, e) {
    const n = this.parse_(t)
    return Ws(n, !1, e)
  }
  writeFeatureText(t, e) {
    const n = t.getGeometry()
    return n ? this.writeGeometryText(n, e) : ''
  }
  writeFeaturesText(t, e) {
    if (t.length == 1) return this.writeFeatureText(t[0], e)
    const n = []
    for (let r = 0, o = t.length; r < o; ++r) n.push(t[r].getGeometry())
    const s = new ze(n)
    return this.writeGeometryText(s, e)
  }
  writeGeometryText(t, e) {
    return Ac(Ws(t, !0, e))
  }
}
function Lc(i) {
  const t = i.getCoordinates()
  return t.length === 0 ? '' : t.join(' ')
}
function cm(i) {
  const t = [],
    e = i.getPoints()
  for (let n = 0, s = e.length; n < s; ++n) t.push('(' + Lc(e[n]) + ')')
  return t.join(',')
}
function um(i) {
  const t = [],
    e = i.getGeometries()
  for (let n = 0, s = e.length; n < s; ++n) t.push(Ac(e[n]))
  return t.join(',')
}
function Qo(i) {
  const t = i.getCoordinates(),
    e = []
  for (let n = 0, s = t.length; n < s; ++n) e.push(t[n].join(' '))
  return e.join(',')
}
function dm(i) {
  const t = [],
    e = i.getLineStrings()
  for (let n = 0, s = e.length; n < s; ++n) t.push('(' + Qo(e[n]) + ')')
  return t.join(',')
}
function Fc(i) {
  const t = [],
    e = i.getLinearRings()
  for (let n = 0, s = e.length; n < s; ++n) t.push('(' + Qo(e[n]) + ')')
  return t.join(',')
}
function fm(i) {
  const t = [],
    e = i.getPolygons()
  for (let n = 0, s = e.length; n < s; ++n) t.push('(' + Fc(e[n]) + ')')
  return t.join(',')
}
function gm(i) {
  const t = i.getLayout()
  let e = ''
  return ((t === 'XYZ' || t === 'XYZM') && (e += bc), (t === 'XYM' || t === 'XYZM') && (e += Pc), e)
}
const _m = {
  Point: Lc,
  LineString: Qo,
  Polygon: Fc,
  MultiPoint: cm,
  MultiLineString: dm,
  MultiPolygon: fm,
  GeometryCollection: um,
}
function Ac(i) {
  const t = i.getType(),
    e = _m[t],
    n = e(i)
  let s = am[t]
  if (typeof i.getFlatCoordinates == 'function') {
    const r = gm(i)
    r.length > 0 && (s += ' ' + r)
  }
  return n.length === 0 ? s + ' ' + Mc : s + '(' + n + ')'
}
const cs = { DRAWSTART: 'drawstart', DRAWEND: 'drawend', DRAWABORT: 'drawabort' }
class us extends pt {
  constructor(t, e) {
    ;(super(t), (this.feature = e))
  }
}
function mm(i, t) {
  const e = []
  for (let n = 0; n < t.length; ++n) {
    const r = t[n].getGeometry()
    Oc(i, r, e)
  }
  return e
}
function ds(i, t) {
  return ge(i[0], i[1], t[0], t[1])
}
function On(i, t) {
  const e = i.length
  return t < 0 ? i[t + e] : t >= e ? i[t - e] : i[t]
}
function fs(i, t, e) {
  let n, s
  t < e ? ((n = t), (s = e)) : ((n = e), (s = t))
  const r = Math.ceil(n),
    o = Math.floor(s)
  if (r > o) {
    const l = Dn(i, n),
      h = Dn(i, s)
    return ds(l, h)
  }
  let a = 0
  if (n < r) {
    const l = Dn(i, n),
      h = On(i, r)
    a += ds(l, h)
  }
  if (o < s) {
    const l = On(i, o),
      h = Dn(i, s)
    a += ds(l, h)
  }
  for (let l = r; l < o - 1; ++l) {
    const h = On(i, l),
      c = On(i, l + 1)
    a += ds(h, c)
  }
  return a
}
function Oc(i, t, e) {
  if (t instanceof Zt) {
    gs(i, t.getCoordinates(), !1, e)
    return
  }
  if (t instanceof sn) {
    const n = t.getCoordinates()
    for (let s = 0, r = n.length; s < r; ++s) gs(i, n[s], !1, e)
    return
  }
  if (t instanceof zt) {
    const n = t.getCoordinates()
    for (let s = 0, r = n.length; s < r; ++s) gs(i, n[s], !0, e)
    return
  }
  if (t instanceof rn) {
    const n = t.getCoordinates()
    for (let s = 0, r = n.length; s < r; ++s) {
      const o = n[s]
      for (let a = 0, l = o.length; a < l; ++a) gs(i, o[a], !0, e)
    }
    return
  }
  if (t instanceof ze) {
    const n = t.getGeometries()
    for (let s = 0; s < n.length; ++s) Oc(i, n[s], e)
    return
  }
}
const vr = { index: -1, endIndex: NaN }
function pm(i, t, e, n) {
  const s = i[0],
    r = i[1]
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
        x = Dc(s, r, p, y)
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
    const u = Dn(h.coordinates, l),
      d = e.getPixelFromCoordinate(u)
    Ls(d, t.startPx) > n && (c = !1)
  }
  if (c) {
    const u = h.coordinates,
      d = u.length,
      f = h.startIndex,
      g = l
    if (f < g) {
      const _ = fs(u, f, g)
      fs(u, f, g - d) < _ && (l -= d)
    } else {
      const _ = fs(u, f, g)
      fs(u, f, g + d) < _ && (l += d)
    }
  }
  return ((vr.index = a), (vr.endIndex = l), vr)
}
function gs(i, t, e, n) {
  const s = i[0],
    r = i[1]
  for (let o = 0, a = t.length - 1; o < a; ++o) {
    const l = t[o],
      h = t[o + 1],
      c = Dc(s, r, l, h)
    if (c.squaredDistance === 0) {
      const u = o + c.along
      n.push({ coordinates: t, ring: e, startIndex: u, endIndex: u })
      return
    }
  }
}
const Ir = { along: 0, squaredDistance: 0 }
function Dc(i, t, e, n) {
  const s = e[0],
    r = e[1],
    o = n[0],
    a = n[1],
    l = o - s,
    h = a - r
  let c = 0,
    u = s,
    d = r
  return (
    (l !== 0 || h !== 0) &&
      ((c = ct(((i - s) * l + (t - r) * h) / (l * l + h * h), 0, 1)), (u += l * c), (d += h * c)),
    (Ir.along = c),
    (Ir.squaredDistance = Qh(ge(i, t, u, d), 10)),
    Ir
  )
}
function Dn(i, t) {
  const e = i.length
  let n = Math.floor(t)
  const s = t - n
  n >= e ? (n -= e) : n < 0 && (n += e)
  let r = n + 1
  r >= e && (r -= e)
  const o = i[n],
    a = o[0],
    l = o[1],
    h = i[r],
    c = h[0] - a,
    u = h[1] - l
  return [a + c * s, l + u * s]
}
class ym extends rr {
  constructor(t) {
    const e = t
    ;(e.stopDown || (e.stopDown = Fo),
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
      (this.mode_ = Em(this.type_)),
      (this.stopClick_ = !!t.stopClick),
      (this.minPoints_ = t.minPoints ? t.minPoints : this.mode_ === 'Polygon' ? 3 : 2),
      (this.maxPoints_ = this.mode_ === 'Circle' ? 2 : t.maxPoints ? t.maxPoints : 1 / 0),
      (this.finishCondition_ = t.finishCondition ? t.finishCondition : Bn),
      (this.geometryLayout_ = t.geometryLayout ? t.geometryLayout : 'XY'))
    let n = t.geometryFunction
    if (!n) {
      const s = this.mode_
      if (s === 'Circle')
        n = function (r, o, a) {
          const l = o || new ji([NaN, NaN]),
            h = H(r[0]),
            c = _e(h, H(r[r.length - 1]))
          return (l.setCenterAndRadius(h, Math.sqrt(c), this.geometryLayout_), l)
        }
      else {
        let r
        ;(s === 'Point' ? (r = Xt) : s === 'LineString' ? (r = Zt) : s === 'Polygon' && (r = zt),
          (n = function (o, a, l) {
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
    ;((this.geometryFunction_ = n),
      (this.dragVertexDelay_ = t.dragVertexDelay !== void 0 ? t.dragVertexDelay : 500),
      (this.finishCoordinate_ = null),
      (this.sketchFeature_ = null),
      (this.sketchPoint_ = null),
      (this.sketchCoords_ = null),
      (this.sketchLine_ = null),
      (this.sketchLineCoords_ = null),
      (this.squaredClickTolerance_ = t.clickTolerance ? t.clickTolerance * t.clickTolerance : 36),
      (this.overlay_ = new Ho({
        source: new Jo({ useSpatialIndex: !1, wrapX: t.wrapX ? t.wrapX : !1 }),
        style: t.style ? t.style : xm(),
        updateWhileInteracting: !0,
      })),
      (this.geometryName_ = t.geometryName),
      (this.condition_ = t.condition ? t.condition : G0),
      this.freehandCondition_,
      t.freehand
        ? (this.freehandCondition_ = zs)
        : (this.freehandCondition_ = t.freehandCondition ? t.freehandCondition : X0),
      this.traceCondition_,
      this.setTrace(t.trace || !1),
      (this.traceState_ = { active: !1 }),
      (this.traceSource_ = t.traceSource || t.source || null),
      this.addChangeListener(Xs.ACTIVE, this.updateState_))
  }
  setTrace(t) {
    let e
    ;(t ? (t === !0 ? (e = zs) : (e = t)) : (e = N0), (this.traceCondition_ = e))
  }
  setMap(t) {
    ;(super.setMap(t), this.updateState_())
  }
  getOverlay() {
    return this.overlay_
  }
  handleEvent(t) {
    ;(t.originalEvent.type === ut.CONTEXTMENU && t.originalEvent.preventDefault(),
      (this.freehand_ = this.mode_ !== 'Point' && this.freehandCondition_(t)))
    let e = t.type === ht.POINTERMOVE,
      n = !0
    return (
      !this.freehand_ &&
        this.lastDragTime_ &&
        t.type === ht.POINTERDRAG &&
        (Date.now() - this.lastDragTime_ >= this.dragVertexDelay_
          ? ((this.downPx_ = t.pixel), (this.shouldHandle_ = !this.freehand_), (e = !0))
          : (this.lastDragTime_ = void 0),
        this.shouldHandle_ &&
          this.downTimeout_ !== void 0 &&
          (clearTimeout(this.downTimeout_), (this.downTimeout_ = void 0))),
      this.freehand_ && t.type === ht.POINTERDRAG && this.sketchFeature_ !== null
        ? (this.addToDrawing_(t.coordinate), (n = !1))
        : this.freehand_ && t.type === ht.POINTERDOWN
          ? (n = !1)
          : e && this.getPointerCount() < 2
            ? ((n = t.type === ht.POINTERMOVE),
              n && this.freehand_
                ? (this.handlePointerMove_(t), this.shouldHandle_ && t.originalEvent.preventDefault())
                : (t.originalEvent.pointerType === 'mouse' ||
                    (t.type === ht.POINTERDRAG && this.downTimeout_ === void 0)) &&
                  this.handlePointerMove_(t))
            : t.type === ht.DBLCLICK && (n = !1),
      super.handleEvent(t) && n
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
              this.handlePointerMove_(new O0(ht.POINTERMOVE, t.map, t.originalEvent, !1, t.frameState))
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
      n = e.getCoordinateFromPixel([t.pixel[0] - this.snapTolerance_, t.pixel[1] + this.snapTolerance_]),
      s = e.getCoordinateFromPixel([t.pixel[0] + this.snapTolerance_, t.pixel[1] - this.snapTolerance_]),
      r = It([n, s]),
      o = this.traceSource_.getFeaturesInExtent(r)
    if (o.length === 0) return
    const a = mm(t.coordinate, o)
    a.length && (this.traceState_ = { active: !0, startPx: t.pixel.slice(), targets: a, targetIndex: -1 })
  }
  addOrRemoveTracedCoordinates_(t, e) {
    const n = t.startIndex <= t.endIndex,
      s = t.startIndex <= e
    n === s
      ? (n && e > t.endIndex) || (!n && e < t.endIndex)
        ? this.addTracedCoordinates_(t, t.endIndex, e)
        : ((n && e < t.endIndex) || (!n && e > t.endIndex)) && this.removeTracedCoordinates_(e, t.endIndex)
      : (this.removeTracedCoordinates_(t.startIndex, t.endIndex),
        this.addTracedCoordinates_(t, t.startIndex, e))
  }
  removeTracedCoordinates_(t, e) {
    if (t === e) return
    let n = 0
    if (t < e) {
      const s = Math.ceil(t)
      let r = Math.floor(e)
      ;(r === e && (r -= 1), (n = r - s + 1))
    } else {
      const s = Math.floor(t)
      let r = Math.ceil(e)
      ;(r === e && (r += 1), (n = s - r + 1))
    }
    n > 0 && this.removeLastPoints_(n)
  }
  addTracedCoordinates_(t, e, n) {
    if (e === n) return
    const s = []
    if (e < n) {
      const r = Math.ceil(e)
      let o = Math.floor(n)
      o === n && (o -= 1)
      for (let a = r; a <= o; ++a) s.push(On(t.coordinates, a))
    } else {
      const r = Math.floor(e)
      let o = Math.ceil(n)
      o === n && (o += 1)
      for (let a = r; a >= o; --a) s.push(On(t.coordinates, a))
    }
    s.length && this.appendCoordinates(s)
  }
  updateTrace_(t) {
    const e = this.traceState_
    if (!e.active || (e.targetIndex === -1 && Ls(e.startPx, t.pixel) < this.snapTolerance_)) return
    const n = pm(t.coordinate, e, this.getMap(), this.snapTolerance_)
    if (e.targetIndex !== n.index) {
      if (e.targetIndex !== -1) {
        const l = e.targets[e.targetIndex]
        this.removeTracedCoordinates_(l.startIndex, l.endIndex)
      }
      const a = e.targets[n.index]
      this.addTracedCoordinates_(a, a.startIndex, n.endIndex)
    } else {
      const a = e.targets[e.targetIndex]
      this.addOrRemoveTracedCoordinates_(a, n.endIndex)
    }
    e.targetIndex = n.index
    const s = e.targets[e.targetIndex]
    s.endIndex = n.endIndex
    const r = Dn(s.coordinates, s.endIndex),
      o = this.getMap().getPixelFromCoordinate(r)
    ;((t.coordinate = r), (t.pixel = [Math.round(o[0]), Math.round(o[1])]))
  }
  handleUpEvent(t) {
    let e = !0
    if (this.getPointerCount() === 0) {
      ;(this.downTimeout_ && (clearTimeout(this.downTimeout_), (this.downTimeout_ = void 0)),
        this.handlePointerMove_(t))
      const n = this.traceState_.active
      if ((this.toggleTraceState_(t), this.shouldHandle_)) {
        const s = !this.finishCoordinate_
        ;(s && this.startDrawing_(t.coordinate),
          !s && this.freehand_
            ? this.finishDrawing()
            : !this.freehand_ &&
              (!s || this.mode_ === 'Point') &&
              (this.atFinish_(t.pixel, n)
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
        n = t.pixel,
        s = e[0] - n[0],
        r = e[1] - n[1],
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
    let n = !1
    if (this.sketchFeature_) {
      let s = !1,
        r = [this.finishCoordinate_]
      const o = this.mode_
      if (o === 'Point') n = !0
      else if (o === 'Circle') n = this.sketchCoords_.length === 2
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
          if (((n = Math.sqrt(d * d + f * f) <= g), n)) {
            this.finishCoordinate_ = c
            break
          }
        }
      }
    }
    return n
  }
  createOrUpdateSketchPoint_(t) {
    this.sketchPoint_
      ? this.sketchPoint_.getGeometry().setCoordinates(t)
      : ((this.sketchPoint_ = new mt(new Xt(t))), this.updateSketchFeatures_())
  }
  createOrUpdateCustomSketchLine_(t) {
    this.sketchLine_ || (this.sketchLine_ = new mt())
    const e = t.getLinearRing(0)
    let n = this.sketchLine_.getGeometry()
    n
      ? (n.setFlatCoordinates(e.getLayout(), e.getFlatCoordinates()), n.changed())
      : ((n = new Zt(e.getFlatCoordinates(), e.getLayout())), this.sketchLine_.setGeometry(n))
  }
  startDrawing_(t) {
    const e = this.getMap().getView().getProjection(),
      n = Fs(this.geometryLayout_)
    for (; t.length < n; ) t.push(0)
    ;((this.finishCoordinate_ = t),
      this.mode_ === 'Point'
        ? (this.sketchCoords_ = t.slice())
        : this.mode_ === 'Polygon'
          ? ((this.sketchCoords_ = [[t.slice(), t.slice()]]),
            (this.sketchLineCoords_ = this.sketchCoords_[0]))
          : (this.sketchCoords_ = [t.slice(), t.slice()]),
      this.sketchLineCoords_ && (this.sketchLine_ = new mt(new Zt(this.sketchLineCoords_))))
    const s = this.geometryFunction_(this.sketchCoords_, void 0, e)
    ;((this.sketchFeature_ = new mt()),
      this.geometryName_ && this.sketchFeature_.setGeometryName(this.geometryName_),
      this.sketchFeature_.setGeometry(s),
      this.updateSketchFeatures_(),
      this.dispatchEvent(new us(cs.DRAWSTART, this.sketchFeature_)))
  }
  modifyDrawing_(t) {
    const e = this.getMap(),
      n = this.sketchFeature_.getGeometry(),
      s = e.getView().getProjection(),
      r = Fs(this.geometryLayout_)
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
      this.geometryFunction_(this.sketchCoords_, n, s),
      this.sketchPoint_ && this.sketchPoint_.getGeometry().setCoordinates(t),
      n.getType() === 'Polygon' && this.mode_ !== 'Polygon'
        ? this.createOrUpdateCustomSketchLine_(n)
        : this.sketchLineCoords_ && this.sketchLine_.getGeometry().setCoordinates(this.sketchLineCoords_),
      this.updateSketchFeatures_())
  }
  addToDrawing_(t) {
    const e = this.sketchFeature_.getGeometry(),
      n = this.getMap().getView().getProjection()
    let s, r
    const o = this.mode_
    ;(o === 'LineString' || o === 'Circle'
      ? ((this.finishCoordinate_ = t.slice()),
        (r = this.sketchCoords_),
        r.length >= this.maxPoints_ && (this.freehand_ ? r.pop() : (s = !0)),
        r.push(t.slice()),
        this.geometryFunction_(r, e, n))
      : o === 'Polygon' &&
        ((r = this.sketchCoords_[0]),
        r.length >= this.maxPoints_ && (this.freehand_ ? r.pop() : (s = !0)),
        r.push(t.slice()),
        s && (this.finishCoordinate_ = r[0]),
        this.geometryFunction_(this.sketchCoords_, e, n)),
      this.createOrUpdateSketchPoint_(t.slice()),
      this.updateSketchFeatures_(),
      s && this.finishDrawing())
  }
  removeLastPoints_(t) {
    if (!this.sketchFeature_) return
    const e = this.sketchFeature_.getGeometry(),
      n = this.getMap().getView().getProjection(),
      s = this.mode_
    for (let r = 0; r < t; ++r) {
      let o
      if (s === 'LineString' || s === 'Circle') {
        if (((o = this.sketchCoords_), o.splice(-2, 1), o.length >= 2)) {
          this.finishCoordinate_ = o[o.length - 2].slice()
          const a = this.finishCoordinate_.slice()
          ;((o[o.length - 1] = a), this.createOrUpdateSketchPoint_(a))
        }
        ;(this.geometryFunction_(o, e, n),
          e.getType() === 'Polygon' && this.sketchLine_ && this.createOrUpdateCustomSketchLine_(e))
      } else if (s === 'Polygon') {
        ;((o = this.sketchCoords_[0]), o.splice(-2, 1))
        const a = this.sketchLine_.getGeometry()
        if (o.length >= 2) {
          const l = o[o.length - 2].slice()
          ;((o[o.length - 1] = l), this.createOrUpdateSketchPoint_(l))
        }
        ;(a.setCoordinates(o), this.geometryFunction_(this.sketchCoords_, e, n))
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
    const n = t.getGeometry(),
      s = this.getMap().getView().getProjection()
    ;(this.mode_ === 'LineString'
      ? (e.pop(), this.geometryFunction_(e, n, s))
      : this.mode_ === 'Polygon' && (e[0].pop(), this.geometryFunction_(e, n, s), (e = n.getCoordinates())),
      this.type_ === 'MultiPoint'
        ? t.setGeometry(new Jn([e]))
        : this.type_ === 'MultiLineString'
          ? t.setGeometry(new sn([e]))
          : this.type_ === 'MultiPolygon' && t.setGeometry(new rn([e])),
      this.dispatchEvent(new us(cs.DRAWEND, t)),
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
    t && this.dispatchEvent(new us(cs.DRAWABORT, t))
  }
  appendCoordinates(t) {
    const e = this.mode_,
      n = !this.sketchFeature_
    n && this.startDrawing_(t[0])
    let s
    if (e === 'LineString' || e === 'Circle') s = this.sketchCoords_
    else if (e === 'Polygon') s = this.sketchCoords_ && this.sketchCoords_.length ? this.sketchCoords_[0] : []
    else return
    ;(n && s.shift(), s.pop())
    for (let o = 0; o < t.length; o++) this.addToDrawing_(t[o])
    const r = t[t.length - 1]
    ;(this.addToDrawing_(r), this.modifyDrawing_(r))
  }
  extend(t) {
    const n = t.getGeometry()
    ;((this.sketchFeature_ = t), (this.sketchCoords_ = n.getCoordinates()))
    const s = this.sketchCoords_[this.sketchCoords_.length - 1]
    ;((this.finishCoordinate_ = s.slice()),
      this.sketchCoords_.push(s.slice()),
      (this.sketchPoint_ = new mt(new Xt(s))),
      this.updateSketchFeatures_(),
      this.dispatchEvent(new us(cs.DRAWSTART, this.sketchFeature_)))
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
function xm() {
  const i = Cc()
  return function (t, e) {
    return i[t.getGeometry().getType()]
  }
}
function Em(i) {
  switch (i) {
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
      throw new Error('Invalid type: ' + i)
  }
}
const vl = 0,
  ui = 1,
  Il = [0, 0, 0, 0],
  Yn = [],
  Mr = { MODIFYSTART: 'modifystart', MODIFYEND: 'modifyend' }
class br extends pt {
  constructor(t, e, n) {
    ;(super(t), (this.features = e), (this.mapBrowserEvent = n))
  }
}
class Cm extends rr {
  constructor(t) {
    ;(super(t),
      this.on,
      this.once,
      this.un,
      (this.boundHandleFeatureChange_ = this.handleFeatureChange_.bind(this)),
      (this.condition_ = t.condition ? t.condition : z0),
      (this.defaultDeleteCondition_ = function (n) {
        return k0(n) && j0(n)
      }),
      (this.deleteCondition_ = t.deleteCondition ? t.deleteCondition : this.defaultDeleteCondition_),
      (this.insertVertexCondition_ = t.insertVertexCondition ? t.insertVertexCondition : zs),
      (this.vertexFeature_ = null),
      (this.vertexSegments_ = null),
      (this.lastPixel_ = [0, 0]),
      (this.ignoreNextSingleClick_ = !1),
      (this.featuresBeingModified_ = null),
      (this.rBush_ = new Gs()),
      (this.pixelTolerance_ = t.pixelTolerance !== void 0 ? t.pixelTolerance : 10),
      (this.snappedToVertex_ = !1),
      (this.changingFeature_ = !1),
      (this.dragSegments_ = []),
      (this.overlay_ = new Ho({
        source: new Jo({ useSpatialIndex: !1, wrapX: !!t.wrapX }),
        style: t.style ? t.style : Rm(),
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
          (e = new tn(this.source_.getFeatures())),
          this.source_.addEventListener(gt.ADDFEATURE, this.handleSourceAdd_.bind(this)),
          this.source_.addEventListener(gt.REMOVEFEATURE, this.handleSourceRemove_.bind(this))),
      !e)
    )
      throw new Error('The modify interaction requires features, a source or a layer')
    ;(t.hitDetection && (this.hitDetection_ = t.hitDetection),
      (this.features_ = e),
      this.features_.forEach(this.addFeature_.bind(this)),
      this.features_.addEventListener(ee.ADD, this.handleFeatureAdd_.bind(this)),
      this.features_.addEventListener(ee.REMOVE, this.handleFeatureRemove_.bind(this)),
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
    const n = this.getMap()
    ;(n && n.isRendered() && this.getActive() && this.handlePointerAtPixel_(this.lastPixel_, n),
      t.addEventListener(ut.CHANGE, this.boundHandleFeatureChange_))
  }
  willModifyFeatures_(t, e) {
    if (!this.featuresBeingModified_) {
      this.featuresBeingModified_ = new tn()
      const n = this.featuresBeingModified_.getArray()
      for (let s = 0, r = e.length; s < r; ++s) {
        const o = e[s]
        for (let a = 0, l = o.length; a < l; ++a) {
          const h = o[a].feature
          h && !n.includes(h) && this.featuresBeingModified_.push(h)
        }
      }
      this.featuresBeingModified_.getLength() === 0
        ? (this.featuresBeingModified_ = null)
        : this.dispatchEvent(new br(Mr.MODIFYSTART, this.featuresBeingModified_, t))
    }
  }
  removeFeature_(t) {
    ;(this.removeFeatureSegmentData_(t),
      this.vertexFeature_ &&
        this.features_.getLength() === 0 &&
        (this.overlay_.getSource().removeFeature(this.vertexFeature_), (this.vertexFeature_ = null)),
      t.removeEventListener(ut.CHANGE, this.boundHandleFeatureChange_))
  }
  removeFeatureSegmentData_(t) {
    const e = this.rBush_,
      n = []
    e.forEach(function (s) {
      t === s.feature && n.push(s)
    })
    for (let s = n.length - 1; s >= 0; --s) {
      const r = n[s]
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
    const n = e.getCoordinates(),
      s = { feature: t, geometry: e, segment: [n, n] }
    this.rBush_.insert(e.getExtent(), s)
  }
  writeMultiPointGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let s = 0, r = n.length; s < r; ++s) {
      const o = n[s],
        a = { feature: t, geometry: e, depth: [s], index: s, segment: [o, o] }
      this.rBush_.insert(e.getExtent(), a)
    }
  }
  writeLineStringGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let s = 0, r = n.length - 1; s < r; ++s) {
      const o = n.slice(s, s + 2),
        a = { feature: t, geometry: e, index: s, segment: o }
      this.rBush_.insert(It(o), a)
    }
  }
  writeMultiLineStringGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let s = 0, r = n.length; s < r; ++s) {
      const o = n[s]
      for (let a = 0, l = o.length - 1; a < l; ++a) {
        const h = o.slice(a, a + 2),
          c = { feature: t, geometry: e, depth: [s], index: a, segment: h }
        this.rBush_.insert(It(h), c)
      }
    }
  }
  writePolygonGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let s = 0, r = n.length; s < r; ++s) {
      const o = n[s]
      for (let a = 0, l = o.length - 1; a < l; ++a) {
        const h = o.slice(a, a + 2),
          c = { feature: t, geometry: e, depth: [s], index: a, segment: h }
        this.rBush_.insert(It(h), c)
      }
    }
  }
  writeMultiPolygonGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let s = 0, r = n.length; s < r; ++s) {
      const o = n[s]
      for (let a = 0, l = o.length; a < l; ++a) {
        const h = o[a]
        for (let c = 0, u = h.length - 1; c < u; ++c) {
          const d = h.slice(c, c + 2),
            f = { feature: t, geometry: e, depth: [a, s], index: c, segment: d }
          this.rBush_.insert(It(d), f)
        }
      }
    }
  }
  writeCircleGeometry_(t, e) {
    const n = e.getCenter(),
      s = { feature: t, geometry: e, index: vl, segment: [n, n] },
      r = { feature: t, geometry: e, index: ui, segment: [n, n] },
      o = [s, r]
    ;((s.featureSegments = o), (r.featureSegments = o), this.rBush_.insert(Es(n), s))
    let a = e
    this.rBush_.insert(a.getExtent(), r)
  }
  writeGeometryCollectionGeometry_(t, e) {
    const n = e.getGeometriesArray()
    for (let s = 0; s < n.length; ++s) {
      const r = n[s],
        o = this.SEGMENT_WRITERS_[r.getType()]
      o(t, r)
    }
  }
  createOrUpdateVertexFeature_(t, e, n) {
    let s = this.vertexFeature_
    return (
      s
        ? s.getGeometry().setCoordinates(t)
        : ((s = new mt(new Xt(t))), (this.vertexFeature_ = s), this.overlay_.getSource().addFeature(s)),
      s.set('features', e),
      s.set('geometries', n),
      s
    )
  }
  handleEvent(t) {
    if (!t.originalEvent) return !0
    this.lastPointerEvent_ = t
    let e
    return (
      !t.map.getView().getInteracting() &&
        t.type == ht.POINTERMOVE &&
        !this.handlingDownUpSequence &&
        this.handlePointerMove_(t),
      this.vertexFeature_ &&
        this.deleteCondition_(t) &&
        (t.type != ht.SINGLECLICK || !this.ignoreNextSingleClick_ ? (e = this.removePoint()) : (e = !0)),
      t.type == ht.SINGLECLICK && (this.ignoreNextSingleClick_ = !1),
      super.handleEvent(t) && !e
    )
  }
  handleDragEvent(t) {
    ;((this.ignoreNextSingleClick_ = !1), this.willModifyFeatures_(t, this.dragSegments_))
    const e = [t.coordinate[0] + this.delta_[0], t.coordinate[1] + this.delta_[1]],
      n = [],
      s = []
    for (let r = 0, o = this.dragSegments_.length; r < o; ++r) {
      const a = this.dragSegments_[r],
        l = a[0],
        h = l.feature
      n.includes(h) || n.push(h)
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
          if (((f[0] = e), (f[1] = e), l.index === vl))
            ((this.changingFeature_ = !0), c.setCenter(e), (this.changingFeature_ = !1))
          else {
            ;((this.changingFeature_ = !0), t.map.getView().getProjection())
            let _ = Ls(H(c.getCenter()), H(e))
            ;(c.setRadius(_), (this.changingFeature_ = !1))
          }
          break
      }
      d && this.setGeometryCoordinates_(c, d)
    }
    this.createOrUpdateVertexFeature_(e, n, s)
  }
  handleDownEvent(t) {
    if (!this.condition_(t)) return !1
    const e = t.coordinate
    ;(this.handlePointerAtPixel_(t.pixel, t.map, e),
      (this.dragSegments_.length = 0),
      (this.featuresBeingModified_ = null))
    const n = this.vertexFeature_
    if (n) {
      t.map.getView().getProjection()
      const s = [],
        r = n.getGeometry().getCoordinates(),
        o = It([r]),
        a = this.rBush_.getInExtent(o),
        l = {}
      a.sort(wm)
      for (let h = 0, c = a.length; h < c; ++h) {
        const u = a[h],
          d = u.segment
        let f = K(u.geometry)
        const g = u.depth
        if (
          (g && (f += '-' + g.join('-')),
          l[f] || (l[f] = new Array(2)),
          u.geometry.getType() === 'Circle' && u.index === ui)
        ) {
          const _ = bl(e, u)
          Vt(_, r) && !l[f][0] && (this.dragSegments_.push([u, 0]), (l[f][0] = u))
          continue
        }
        if (Vt(d[0], r) && !l[f][0]) {
          ;(this.dragSegments_.push([u, 0]), (l[f][0] = u))
          continue
        }
        if (Vt(d[1], r) && !l[f][1]) {
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
      const n = this.dragSegments_[e][0],
        s = n.geometry
      if (s.getType() === 'Circle') {
        const r = s.getCenter(),
          o = n.featureSegments[0],
          a = n.featureSegments[1]
        ;((o.segment[0] = r),
          (o.segment[1] = r),
          (a.segment[0] = r),
          (a.segment[1] = r),
          this.rBush_.update(Es(r), o))
        let l = s
        this.rBush_.update(l.getExtent(), a)
      } else this.rBush_.update(It(n.segment), n)
    }
    return (
      this.featuresBeingModified_ &&
        (this.dispatchEvent(new br(Mr.MODIFYEND, this.featuresBeingModified_, t)),
        (this.featuresBeingModified_ = null)),
      !1
    )
  }
  handlePointerMove_(t) {
    ;((this.lastPixel_ = t.pixel), this.handlePointerAtPixel_(t.pixel, t.map, t.coordinate))
  }
  handlePointerAtPixel_(t, e, n) {
    const s = n || e.getCoordinateFromPixel(t)
    e.getView().getProjection()
    const r = function (l, h) {
      return Ml(s, l) - Ml(s, h)
    }
    let o, a
    if (this.hitDetection_) {
      const l = typeof this.hitDetection_ == 'object' ? h => h === this.hitDetection_ : void 0
      e.forEachFeatureAtPixel(
        t,
        (h, c, u) => {
          u && (u = new Xt(Zn(u.getCoordinates())))
          const d = u || h.getGeometry()
          if (d.getType() === 'Point' && h instanceof mt && this.features_.getArray().includes(h)) {
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
      const l = An(Es(s, Il)),
        h = e.getView().getResolution() * this.pixelTolerance_,
        c = Qs(Di(l, h, Il))
      o = this.rBush_.getInExtent(c)
    }
    if (o && o.length > 0) {
      const l = o.sort(r)[0],
        h = l.segment
      let c = bl(s, l)
      const u = e.getPixelFromCoordinate(c)
      let d = Ls(t, u)
      if (a || d <= this.pixelTolerance_) {
        const f = {}
        if (
          ((f[K(h)] = !0),
          this.snapToPointer_ || ((this.delta_[0] = c[0] - s[0]), (this.delta_[1] = c[1] - s[1])),
          l.geometry.getType() === 'Circle' && l.index === ui)
        )
          ((this.snappedToVertex_ = !0), this.createOrUpdateVertexFeature_(c, [l.feature], [l.geometry]))
        else {
          const g = e.getPixelFromCoordinate(h[0]),
            _ = e.getPixelFromCoordinate(h[1]),
            m = _e(u, g),
            p = _e(u, _)
          ;((d = Math.sqrt(Math.min(m, p))),
            (this.snappedToVertex_ = d <= this.pixelTolerance_),
            this.snappedToVertex_ && (c = m > p ? h[1] : h[0]),
            this.createOrUpdateVertexFeature_(c, [l.feature], [l.geometry]))
          const y = {}
          y[K(l.geometry)] = !0
          for (let x = 1, E = o.length; x < E; ++x) {
            const C = o[x].segment
            if ((Vt(h[0], C[0]) && Vt(h[1], C[1])) || (Vt(h[0], C[1]) && Vt(h[1], C[0]))) {
              const R = K(o[x].geometry)
              R in y || ((y[R] = !0), (f[K(C)] = !0))
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
    const n = t.segment,
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
    const c = { segment: [n[0], e], feature: s, geometry: r, depth: o, index: a }
    ;(h.insert(It(c.segment), c), this.dragSegments_.push([c, 1]))
    const u = { segment: [e, n[1]], feature: s, geometry: r, depth: o, index: a + 1 }
    ;(h.insert(It(u.segment), u), this.dragSegments_.push([u, 0]), (this.ignoreNextSingleClick_ = !0))
  }
  removePoint() {
    if (this.lastPointerEvent_ && this.lastPointerEvent_.type != ht.POINTERDRAG) {
      const t = this.lastPointerEvent_
      this.willModifyFeatures_(t, this.dragSegments_)
      const e = this.removeVertex_()
      return (
        this.featuresBeingModified_ &&
          this.dispatchEvent(new br(Mr.MODIFYEND, this.featuresBeingModified_, t)),
        (this.featuresBeingModified_ = null),
        e
      )
    }
    return !1
  }
  removeVertex_() {
    const t = this.dragSegments_,
      e = {}
    let n = !1,
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
        (n = !1),
        a.getType())
      ) {
        case 'MultiLineString':
          r[f.depth[0]].length > 2 && (r[f.depth[0]].splice(h, 1), (n = !0))
          break
        case 'LineString':
          r.length > 2 && (r.splice(h, 1), (n = !0))
          break
        case 'MultiPolygon':
          s = s[f.depth[1]]
        case 'Polygon':
          ;((s = s[f.depth[0]]),
            s.length > 4 &&
              (h == s.length - 1 && (h = 0),
              s.splice(h, 1),
              (n = !0),
              h === 0 && (s.pop(), s.push(s[0]), (u = s.length - 1))))
          break
      }
      if (n) {
        this.setGeometryCoordinates_(a, r)
        const _ = []
        if (
          (c !== void 0 && (this.rBush_.remove(c), _.push(c.segment[0])),
          d !== void 0 && (this.rBush_.remove(d), _.push(d.segment[1])),
          c !== void 0 && d !== void 0)
        ) {
          const m = { depth: f.depth, feature: f.feature, geometry: f.geometry, index: u, segment: _ }
          this.rBush_.insert(It(m.segment), m)
        }
        ;(this.updateSegmentIndices_(a, h, f.depth, -1),
          this.vertexFeature_ &&
            (this.overlay_.getSource().removeFeature(this.vertexFeature_), (this.vertexFeature_ = null)),
          (t.length = 0))
      }
    }
    return n
  }
  setGeometryCoordinates_(t, e) {
    ;((this.changingFeature_ = !0), t.setCoordinates(e), (this.changingFeature_ = !1))
  }
  updateSegmentIndices_(t, e, n, s) {
    this.rBush_.forEachInExtent(t.getExtent(), function (r) {
      r.geometry === t &&
        (n === void 0 || r.depth === void 0 || ln(r.depth, n)) &&
        r.index > e &&
        (r.index += s)
    })
  }
}
function wm(i, t) {
  return i.index - t.index
}
function Ml(i, t, e) {
  const n = t.geometry
  if (n.getType() === 'Circle') {
    let r = n
    if (t.index === ui) {
      const o = _e(r.getCenter(), H(i)),
        a = Math.sqrt(o) - r.getRadius()
      return a * a
    }
  }
  const s = H(i)
  return ((Yn[0] = H(t.segment[0])), (Yn[1] = H(t.segment[1])), Ig(s, Yn))
}
function bl(i, t, e) {
  const n = t.geometry
  if (n.getType() === 'Circle' && t.index === ui) return Zn(n.getClosestPoint(H(i)))
  const s = H(i)
  return ((Yn[0] = H(t.segment[0])), (Yn[1] = H(t.segment[1])), Zn(No(s, Yn)))
}
function Rm() {
  const i = Cc()
  return function (t, e) {
    return i.Point
  }
}
class kc extends pt {
  constructor(t, e, n, s) {
    ;(super(t), (this.selected = e), (this.deselected = n), (this.mapBrowserEvent = s))
  }
}
const Tm = { SNAP: 'snap' }
class Sm extends pt {
  constructor(t, e) {
    ;(super(t), (this.vertex = e.vertex), (this.vertexPixel = e.vertexPixel), (this.feature = e.feature))
  }
}
function Pl(i) {
  return i.feature ? i.feature : i.element ? i.element : null
}
const Pr = []
class vm extends rr {
  constructor(t) {
    t = t || {}
    const e = t
    ;(e.handleDownEvent || (e.handleDownEvent = Bn),
      e.stopDown || (e.stopDown = Fo),
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
      (this.rBush_ = new Gs()),
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
    const n = K(t),
      s = t.getGeometry()
    if (s) {
      const r = this.GEOMETRY_SEGMENTERS_[s.getType()]
      if (r) {
        this.indexedFeaturesExtents_[n] = s.getExtent(re())
        const o = []
        if ((r(o, s), o.length === 1)) this.rBush_.insert(It(o[0]), { feature: t, segment: o[0] })
        else if (o.length > 1) {
          const a = o.map(h => It(h)),
            l = o.map(h => ({ feature: t, segment: h }))
          this.rBush_.load(a, l)
        }
      }
    }
    e && (this.featureChangeListenerKeys_[n] = _t(t, ut.CHANGE, this.handleFeatureChange_, this))
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
          new Sm(Tm.SNAP, { vertex: t.coordinate, vertexPixel: t.pixel, feature: e.feature }),
        )),
      super.handleEvent(t)
    )
  }
  handleFeatureAdd_(t) {
    const e = Pl(t)
    e && this.addFeature(e)
  }
  handleFeatureRemove_(t) {
    const e = Pl(t)
    e && this.removeFeature(e)
  }
  handleFeatureChange_(t) {
    const e = t.target
    if (this.handlingDownUpSequence) {
      const n = K(e)
      n in this.pendingFeatures_ || (this.pendingFeatures_[n] = e)
    } else this.updateFeature_(e)
  }
  handleUpEvent(t) {
    const e = Object.values(this.pendingFeatures_)
    return (e.length && (e.forEach(this.updateFeature_.bind(this)), (this.pendingFeatures_ = {})), !1)
  }
  removeFeature(t, e) {
    const n = e !== void 0 ? e : !0,
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
    n && (bt(this.featureChangeListenerKeys_[s]), delete this.featureChangeListenerKeys_[s])
  }
  setMap(t) {
    const e = this.getMap(),
      n = this.featuresListenerKeys_,
      s = this.getFeatures_()
    ;(e &&
      (n.forEach(bt),
      (n.length = 0),
      this.rBush_.clear(),
      Object.values(this.featureChangeListenerKeys_).forEach(bt),
      (this.featureChangeListenerKeys_ = {})),
      super.setMap(t),
      t &&
        (this.features_
          ? n.push(
              _t(this.features_, ee.ADD, this.handleFeatureAdd_, this),
              _t(this.features_, ee.REMOVE, this.handleFeatureRemove_, this),
            )
          : this.source_ &&
            n.push(
              _t(this.source_, gt.ADDFEATURE, this.handleFeatureAdd_, this),
              _t(this.source_, gt.REMOVEFEATURE, this.handleFeatureRemove_, this),
            ),
        s.forEach(r => this.addFeature(r))))
  }
  snapTo(t, e, n) {
    n.getView().getProjection()
    const s = H(e),
      r = Qs(Di(It([s]), n.getView().getResolution() * this.pixelTolerance_)),
      o = this.rBush_.getInExtent(r),
      a = o.length
    if (a === 0) return null
    let l,
      h = 1 / 0,
      c
    const u = this.pixelTolerance_ * this.pixelTolerance_,
      d = () => {
        if (l) {
          const f = n.getPixelFromCoordinate(l)
          if (_e(t, f) <= u)
            return { vertex: l, vertexPixel: [Math.round(f[0]), Math.round(f[1])], feature: c }
        }
        return null
      }
    if (this.vertex_) {
      for (let g = 0; g < a; ++g) {
        const _ = o[g]
        _.feature.getGeometry().getType() !== 'Circle' &&
          _.segment.forEach(m => {
            const p = H(m),
              y = _e(s, p)
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
          _ = Sg(s, p)
        } else {
          const [p, y] = m.segment
          y && ((Pr[0] = H(p)), (Pr[1] = H(y)), (_ = No(s, Pr)))
        }
        if (_) {
          const p = _e(s, _)
          p < h && ((l = Zn(_)), (h = p))
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
    const r = s_(e).getCoordinates()[0]
    for (let o = 0, a = r.length - 1; o < a; ++o) t.push(r.slice(o, o + 2))
  }
  segmentGeometryCollectionGeometry_(t, e) {
    const n = e.getGeometriesArray()
    for (let s = 0; s < n.length; ++s) {
      const r = this.GEOMETRY_SEGMENTERS_[n[s].getType()]
      r && r(t, n[s])
    }
  }
  segmentLineStringGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let s = 0, r = n.length - 1; s < r; ++s) t.push(n.slice(s, s + 2))
  }
  segmentMultiLineStringGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let s = 0, r = n.length; s < r; ++s) {
      const o = n[s]
      for (let a = 0, l = o.length - 1; a < l; ++a) t.push(o.slice(a, a + 2))
    }
  }
  segmentMultiPointGeometry_(t, e) {
    e.getCoordinates().forEach(n => {
      t.push([n])
    })
  }
  segmentMultiPolygonGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let s = 0, r = n.length; s < r; ++s) {
      const o = n[s]
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
    const n = e.getCoordinates()
    for (let s = 0, r = n.length; s < r; ++s) {
      const o = n[s]
      for (let a = 0, l = o.length - 1; a < l; ++a) t.push(o.slice(a, a + 2))
    }
  }
}
const Lr = { TRANSLATESTART: 'translatestart', TRANSLATING: 'translating', TRANSLATEEND: 'translateend' }
class Cs extends pt {
  constructor(t, e, n, s, r) {
    ;(super(t),
      (this.features = e),
      (this.coordinate = n),
      (this.startCoordinate = s),
      (this.mapBrowserEvent = r))
  }
}
class Im extends rr {
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
        const n = t.layers
        e = function (s) {
          return n.includes(s)
        }
      }
    else e = Bn
    ;((this.layerFilter_ = e),
      (this.filter_ = t.filter && !this.features_ ? t.filter : Bn),
      (this.hitTolerance_ = t.hitTolerance ? t.hitTolerance : 0),
      (this.condition_ = t.condition ? t.condition : zs),
      (this.lastFeature_ = null),
      this.addChangeListener(Xs.ACTIVE, this.handleActiveChanged_))
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
      const e = this.features_ || new tn([this.lastFeature_])
      return (this.dispatchEvent(new Cs(Lr.TRANSLATESTART, e, t.coordinate, this.startCoordinate_, t)), !0)
    }
    return !1
  }
  handleUpEvent(t) {
    if (this.lastCoordinate_) {
      ;((this.lastCoordinate_ = null), this.handleMoveEvent(t))
      const e = this.features_ || new tn([this.lastFeature_])
      return (
        this.dispatchEvent(new Cs(Lr.TRANSLATEEND, e, t.coordinate, this.startCoordinate_, t)),
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
      const n = H(e),
        s = H(this.lastCoordinate_),
        r = n[0] - s[0],
        o = n[1] - s[1],
        a = this.features_ || new tn([this.lastFeature_])
      ;(a.forEach(function (l) {
        const h = l.getGeometry()
        ;(h.translate(r, o), l.setGeometry(h))
      }),
        (this.lastCoordinate_ = e),
        this.dispatchEvent(new Cs(Lr.TRANSLATING, a, e, this.startCoordinate_, t)))
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
      (n, s) => {
        if (
          !(!(n instanceof mt) || !this.filter_(n, s)) &&
          !(this.features_ && !this.features_.getArray().includes(n))
        )
          return n
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
    const n = this.getActive()
    ;(!e || !n) && ((e = e || t), e && e.getViewport().classList.remove('ol-grab', 'ol-grabbing'))
  }
}
var Mm = '1.1.4',
  At = (function (i) {
    return (
      (i.SELECT = 'select'),
      (i.DESELECT = 'deselect'),
      (i.DRAW_BEGIN = 'drawBegin'),
      (i.DRAW_COMPLETE = 'drawComplete'),
      (i.TRANSLATE_START = 'translateBegin'),
      (i.TRANSLATE_END = 'translateComplete'),
      (i.MODIFY_BEGIN = 'modifyBegin'),
      (i.MODIFY_COMPLETE = 'modifyComplete'),
      (i.REMOVE = 'remove'),
      (i.COMPLETE = 'complete'),
      i
    )
  })(At || {}),
  Ll = class extends pt {
    removeFeatures
    removeArray
    remainArray
    remainFeatures
    constructor(i, t, e, n) {
      ;(super(At.REMOVE),
        (this.removeArray = i),
        (this.removeFeatures = t),
        (this.remainArray = e),
        (this.remainFeatures = n))
    }
  },
  bm = class extends kc {
    selectArray
    selectData
    selectFeature
    constructor(i, t, e, n, s) {
      ;(super(i, n, s), (this.selectArray = t), (this.selectFeature = n[0]), (this.selectData = e))
    }
  },
  Pm = class extends kc {
    deselectArray
    deselectData
    deselectFeature
    constructor(i, t, e, n, s) {
      ;(super(i, n, s), (this.deselectArray = t), (this.deselectFeature = s[0]), (this.deselectData = e))
    }
  },
  Fr = class extends pt {
    data
    feature
    startAt
    endAt
    allFeatures
    allData
    constructor(i, t, e, n, s, r, o) {
      ;(super(i),
        (this.data = t),
        (this.allData = s),
        (this.allFeatures = r),
        (this.feature = e),
        (this.startAt = n),
        (this.endAt = o))
    }
  },
  Fl = class extends Cs {
    dataArray
    startAt
    endAt
    constructor(i, t, e, n, s) {
      ;(super(i, e, s?.coord3857 ?? [], n.coord3857),
        (this.dataArray = t),
        (this.features = e),
        (this.startAt = n),
        (this.endAt = s))
    }
    get distance() {
      return this.endAt ? ec(this.startAt.coord, this.endAt.coord) : 0
    }
  },
  Al = class extends pt {
    dataArray
    features
    constructor(i, t, e) {
      ;(super(i), (this.dataArray = t), (this.features = e))
    }
  },
  Lm = class extends pt {
    array
    features
    constructor(i, t) {
      ;(super(At.COMPLETE), (this.array = i), (this.features = t))
    }
  }
const _s = [
  {
    name: 'point',
    type: 'Point',
    title: '绘制点',
    icon: i => `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1.5rem"
  height="1.5rem"
  viewBox="0 0 24 24" title="绘制点">
  <path
    fill="${i}"
    stroke="${i}"
    d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5" />
</svg>`,
  },
  {
    name: 'line',
    type: 'LineString',
    title: '绘制线',
    icon: i => `<svg
xmlns="http://www.w3.org/2000/svg"
width="1.5rem"
height="1.5rem"
viewBox="0 0 24 24">
<path
  fill="${i}"
  stroke="${i}"
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
    icon: i => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24">
      <path
        fill="${i}"
        stroke-width="1"
        d="m21.934 11.751l-4.75-8.255a.5.5 0 0 0-.434-.25h-9.5a.5.5 0 0 0-.434.25l-4.75 8.255a.5.5 0 0 0 0 .498l4.75 8.255c.09.155.255.25.434.25h9.5a.5.5 0 0 0 .434-.25l4.75-8.255a.5.5 0 0 0 0-.498m-5.473 8.004H7.539L3.077 12L7.54 4.245h8.922L20.923 12z" />
    </svg>`,
  },
  {
    name: 'circle',
    type: 'Circle',
    title: '绘制圆',
    icon: i => `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="${i}"
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
    icon: i => `<svg
       xmlns="http://www.w3.org/2000/svg"
       width="1.5rem"
       height="1.5rem"
       viewBox="0 0 24 24">
       <path
         fill="none"
         stroke="${i}"
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
    icon: i => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 32 32">
      <path
        fill="${i}"
        d="M14 2.5a.5.5 0 0 1 .5-.5h1c4.01 0 6.81.25 8.621.702c.903.226 1.602.512 2.085.875c.497.372.794.852.794 1.423c0 .47-.122.948-.52 1.368c-.379.399-.963.696-1.783.926C23.062 7.752 20.25 8 15.5 8s-7.438.252-8.928.669c-.742.208-1.127.441-1.326.652C5.066 9.51 5 9.72 5 10c0 .179.078.387.394.623c.33.247.88.493 1.727.704c1.232.308 3.002.525 5.417.62q-.038.27-.038.553v.446c-2.456-.096-4.301-.318-5.621-.648c-.903-.226-1.602-.512-2.085-.875C4.297 11.05 4 10.571 4 10c0-.47.122-.948.52-1.368c.379-.399.963-.696 1.783-.926C7.939 7.248 10.75 7 15.5 7c4.751 0 7.439-.252 8.928-.669c.742-.208 1.127-.441 1.326-.652c.18-.19.246-.399.246-.679c0-.179-.078-.387-.394-.623c-.33-.247-.88-.493-1.727-.704C22.189 3.25 19.489 3 15.5 3h-1a.5.5 0 0 1-.5-.5m2.476 7.5a2.5 2.5 0 0 0-2.5 2.5v6.731l-1.285-.57a4.49 4.49 0 0 0-5.513 1.55a1.006 1.006 0 0 0 .427 1.491c5.713 2.518 7.633 4.811 8.437 6.54c.502 1.079 1.616 1.93 2.917 1.73l3.634-.56a2.5 2.5 0 0 0 2.046-1.867l1.224-4.92a4.5 4.5 0 0 0-3.651-5.53l-3.237-.521v-4.075A2.5 2.5 0 0 0 16.476 10m-1.5 2.5a1.5 1.5 0 0 1 3 0V17a.5.5 0 0 0 .42.494l3.657.588a3.5 3.5 0 0 1 2.84 4.301l-1.224 4.92a1.5 1.5 0 0 1-1.228 1.121l-3.634.56c-.742.114-1.488-.368-1.858-1.163c-.944-2.03-3.104-4.462-8.941-7.034l-.004-.002l-.002-.005a3.49 3.49 0 0 1 4.284-1.204l1.988.881a.5.5 0 0 0 .703-.457z" />
    </svg>`,
  },
  {
    name: 'modify',
    type: 'modify',
    title: '修改要素，按住 alt 可删除顶点',
    icon: i => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="${i}"
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
    icon: i => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24">
      <path
        fill="${i}"
        d="m12 3l.365-.342l-.365-.39l-.365.39zm-.5 6a.5.5 0 0 0 1 0zm3.865-3.142l-3-3.2l-.73.684l3 3.2zm-3.73-3.2l-3 3.2l.73.684l3-3.2zM11.5 3v6h1V3zm9.5 9l.342.365l.39-.365l-.39-.365zm-6-.5a.5.5 0 0 0 0 1zm3.142 3.865l3.2-3l-.684-.73l-3.2 3zm3.2-3.73l-3.2-3l-.684.73l3.2 3zM21 11.5h-6v1h6zM12 21l.365.342l-.365.39l-.365-.39zm-.5-6a.5.5 0 0 1 1 0zm3.865 3.142l-3 3.2l-.73-.684l3-3.2zm-3.73 3.2l-3-3.2l.73-.684l3 3.2zM11.5 21v-6h1v6zM3 12l-.342.365l-.39-.365l.39-.365zm6-.5a.5.5 0 0 1 0 1zm-3.142 3.865l-3.2-3l.684-.73l3.2 3zm-3.2-3.73l3.2-3l.684.73l-3.2 3zM3 11.5h6v1H3z" />
    </svg>`,
  },
  {
    name: 'remove',
    type: 'remove',
    title: '删除要素',
    icon: i => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 20 20">
      <path
        fill="${i}"
        d="M8.5 4h3a1.5 1.5 0 0 0-3 0m-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM5.741 15.23A2 2 0 0 0 7.728 17h4.544a2 2 0 0 0 1.987-1.77L15.439 5H4.561zM8.5 7.5A.5.5 0 0 1 9 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5M12 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
    </svg>`,
  },
  {
    name: 'complete',
    type: 'complete',
    title: '完成',
    icon: i => `<svg
       xmlns="http://www.w3.org/2000/svg"
       width="1.5rem"
       height="1.5rem"
       viewBox="0 0 24 24">
       <g fill="none" fill-rule="evenodd">
         <path
           d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
         <path
           fill="${i}"
           d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.414A2 2 0 0 0 19.414 5L17 2.586A2 2 0 0 0 15.586 2zm0 2h9.586L18 6.414V20H6zm10.238 6.793a1 1 0 1 0-1.414-1.414l-4.242 4.243l-1.415-1.415a1 1 0 0 0-1.414 1.414l2.05 2.051a1.1 1.1 0 0 0 1.556 0l4.88-4.879Z" />
       </g>
     </svg>`,
  },
  {
    name: 'removeAll',
    type: 'removeAll',
    title: '删除所有',
    icon: i => `<svg  xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 1024 1024"><path fill="${i}" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"></path></svg>`,
  },
]
function Fm(i) {
  if (typeof i != 'string' || i.trim() === '') return !1
  let t = i.trim()
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
    n = /^([A-Z]+)(.*)$/s.exec(t)
  if (!n) return !1
  const s = n[1],
    r = n[2].trim()
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
function Am(i) {
  if (typeof i != 'string') return null
  const t = i.trim()
  if (!t) return null
  const e = t
    .replace(/^SRID=\d+;/i, '')
    .trim()
    .match(/^(POINT|LINESTRING|POLYGON|MULTIPOINT|MULTILINESTRING|MULTIPOLYGON|GEOMETRYCOLLECTION)\b/)
  return e ? e[1] : null
}
function ta(i) {
  if (i == null || typeof i != 'object') return !1
  const t = i
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
        ? t.features.every(n => ta(n) && n.type === 'Feature')
        : !1
}
function Om(i) {
  if (typeof i != 'string' || i.trim() === '') return !1
  const t = i.trim()
  if (t.startsWith('{'))
    try {
      const e = JSON.parse(t)
      return !!ta(e)
    } catch {
      return !1
    }
  return !1
}
function Dm(i) {
  if (i == null) return [0, 0, 0, 0]
  if (typeof i == 'number') return [i, i, i, i]
  switch (i.length) {
    case 1:
      return [i[0], i[0], i[0], i[0]]
    case 2:
      return [i[0], i[1], i[0], i[1]]
    case 3:
      return [i[0], i[1], i[2], i[1]]
    case 4:
      return [i[0], i[1], i[2], i[3]]
    default:
      throw new Error('Invalid padding format')
  }
}
function ai(i = '') {
  return i.toLowerCase() + '_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36)
}
function Ol(i, t = 200, e = !1) {
  let n
  return (...s) => {
    ;(e && !n && i(...s),
      n && clearTimeout(n),
      (n = setTimeout(() => {
        i(...s)
      }, t)))
  }
}
function km(i, t) {
  const e = d => (d * Math.PI) / 180,
    n = d => (d * 180) / Math.PI,
    [s, r] = i,
    [o, a] = t,
    l = e(r),
    h = e(a),
    c = e(s - o),
    u = Math.sin(l) * Math.sin(h) + Math.cos(l) * Math.cos(h) * Math.cos(c)
  return n(Math.acos(Math.min(1, Math.max(-1, u)))) ** 1.11696
}
const Nm = ['Point', 'LineString', 'Polygon', 'Circle'],
  jm = getComputedStyle(document.documentElement).getPropertyValue('--ol-foreground-color'),
  Gm = new Ut({
    fill: new Xe({ color: 'rgba(255,255,255,0.5)' }),
    stroke: new me({ width: 2.5, color: 'red' }),
    image: new Hn({ radius: 5, stroke: new me({ width: 2.5, color: 'red' }) }),
  }),
  Xm = { duration: 500, maxZoom: 14, padding: 100 },
  ms = ['LineString', 'Polygon'],
  Dl = +Math.floor(Number.MAX_SAFE_INTEGER / 1e7),
  zm = {
    remove: 'remove geometry',
    translate: 'translate geometry',
    modify: 'modify geometry',
    complete: 'complete edit geometry',
  }
var Wm = class extends Ee {
  #t = new Jo()
  #f = null
  #e = new tn([])
  #s = null
  #_ = null
  #m = 'EPSG:4326'
  #n = 'EPSG:3857'
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
  drawTypes = Nm
  allButtons = _s
  sketchStyle = null
  selectedStyle = Gm
  modifyingStyle = null
  toolBarContainer = null
  enableModifier = !1
  enableMover = !1
  constructor(i, t = {}) {
    ;(super(),
      (this.#s = i),
      (this.#_ = i.getView()),
      (this.#n = this.#_.getProjection().getCode()),
      this.#b(t),
      this.#A(),
      this.#L(),
      this.#F(),
      this.showToolBar && this.render(),
      (this.#c = i.on('singleclick', this.#w.bind(this))))
    const e = Ol(this.#P.bind(this), 50)
    i.on('pointermove', e)
  }
  get source() {
    return this.#t
  }
  get layer() {
    return this.#f
  }
  addFeatureFromWKT(i, t, e = 'EPSG:4326') {
    if (!i || !Fm(i)) return null
    if (t) {
      const r = this.#t.getFeatureById(t)
      if (r) return r
    }
    let n
    if (typeof e == 'string') n = new hs().readFeature(i, { dataProjection: e, featureProjection: this.#n })
    else {
      const { style: r, ...o } = e
      ;((n = new hs().readFeature(i, o)), r && n.setStyle(r))
    }
    const s = Am(i)
    return (n.setId(t ?? ai(s ?? '')), this.#t.addFeature(n), n)
  }
  addFeatureFromJSON(i, t = 'EPSG:4326') {
    if (!i) return null
    let e = ''
    if (typeof i == 'object') {
      if (!ta(i)) return null
      try {
        e = window.JSON.stringify(i)
      } catch {
        return null
      }
    } else e = i
    if (Om(e)) {
      let n
      if (typeof t == 'string') n = new oi().readFeature(e, { dataProjection: t, featureProjection: this.#n })
      else {
        const { style: a, ...l } = t
        ;((n = new oi().readFeature(e, l)), a && n.setStyle(a))
      }
      const s = n.getGeometry()?.getType(),
        r = n.getProperties(),
        o = n.getId()
      if (!o) n.setId(ai(s))
      else {
        const a = this.#t.getFeatureById(o)
        if (a) return a
      }
      if (r.geometryType === 'circle' && s === 'Polygon') {
        const a = r.center,
          l = r.radius,
          h = r.r
        if (Array.isArray(a) && l != null && h != null) {
          const c = ii(a),
            u = this.#n.endsWith('3857'),
            d = new mt(new ji(u ? c : a, u ? l : h))
          ;(d.setId(o ?? ai('circle')), this.#t.addFeature(d))
        }
      } else this.#t.addFeature(n)
      return n
    }
    return null
  }
  enableDraw(i, t) {
    if (this.#s) {
      if ((this.disableDraw(), this.disableSnap(), (this.#r = i), i === 'None')) {
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
        (this.#h = new ym({
          source: this.#t,
          type: i,
          freehand: this.#g && ms.includes(i),
          style: this.sketchStyle !== null ? this.sketchStyle : void 0,
        })),
        this.#s.addInteraction(this.#h),
        (this.#C = this.#h.on('drawstart', e => {
          this.dispatchEvent(e)
          const n = e.feature,
            [s, r] = n.getGeometry().getFlatCoordinates(),
            o = Ht([s, r], this.#n, 'EPSG:4326'),
            a = ii(o),
            l = this.#t.getFeatures(),
            h = this.#i(l),
            c = { coord: o, coord3857: a }
          this.dispatchEvent(new Fr(At.DRAW_BEGIN, null, n, c, h, l))
        })),
        (this.#E = this.#h.on('drawend', e => {
          this.dispatchEvent(e)
          const n = e.feature,
            s = n.getGeometry().getFlatCoordinates(),
            [r, o] = s,
            a = Ht([r, o], this.#n, 'EPSG:4326'),
            l = ii(a),
            h = { coord: a, coord3857: l },
            c = Ht([s.at(-2), s.at(-1)], this.#n, 'EPSG:4326'),
            u = ii(c),
            d = { coord: c, coord3857: u }
          n.setId(ai(this.#r))
          const f = this.#t.getFeatures()
          f.push(n)
          const g = this.#i(f)
          if (this.#r === 'Circle') {
            const _ = this.#T(n),
              m = new Fr(At.DRAW_COMPLETE, _, n, h, g, f, d)
            this.dispatchEvent(m)
          } else {
            const [_] = this.#i([n]),
              m = new Fr(At.DRAW_COMPLETE, _, n, h, g, f, d)
            this.dispatchEvent(m)
          }
        })),
        this.enableSnap(),
        this.showToolBar &&
          (this.#o(i, !0),
          this.drawTypes.forEach(e => {
            if (e === i) return 'next loop'
            this.#o(e, !1)
          }),
          ms.includes(this.#r)
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
        (this.drawTypes.forEach(i => {
          this.#o(i, !1)
        }),
        this.#u('freehand', !0, 'enable freehand draw.')),
      this.#s.removeInteraction(this.#h),
      (this.#h = null),
      xs(this.#E),
      xs(this.#C))
  }
  enableFreehand() {
    ;((this.#g = !0),
      this.showToolBar && this.#o('freehand', !0),
      ms.includes(this.#r) && this.enableDraw(this.#r))
  }
  disableFreehand() {
    ;((this.#g = !1),
      this.showToolBar &&
        (this.#o('freehand', !1),
        !ms.includes(this.#r) &&
          this.#r !== 'None' &&
          this.#u('freehand', !1, "current geometry type don't support freehand draw.")),
      this.sketchStyle ? this.enableDraw(this.#r, this.sketchStyle) : this.enableDraw(this.#r))
  }
  select(i, t) {
    if (!this.#c) return []
    const e = t?.selectedStyle,
      n = t?.eachFeature
    let s = !0
    t?.fit === !1 && (s = !1)
    const r = []
    Array.isArray(i) ? r.push(...i) : r.push(i)
    const o = re(),
      a = []
    let l = !1
    if (
      (r.forEach((h, c) => {
        const u = this.#t.getFeatureById(h)
        if (u) {
          if ((a.push(u), this.#e.push(u), s)) {
            const d = u.getGeometry()?.getExtent()
            zh(o, d)
          }
          e && u.setStyle(e)
        }
        !l && n && u && (l = !!n(u, c))
      }),
      s && a.length)
    ) {
      const h = Xm
      ;(t?.fit !== !1 && (Object.assign(h, t?.fit === !0 ? {} : t?.fit), (h.padding = Dm(h.padding))),
        this.#_.fit(o, h))
    }
    return a
  }
  deselect(i, t) {
    const e = t?.deselectStyle,
      n = t?.eachFeature,
      s = []
    Array.isArray(i) ? s.push(...i) : s.push(i)
    let r = !1
    s.forEach((o, a) => {
      const l = this.#t.getFeatureById(o)
      ;(l && (this.#e.remove(l), l.setStyle(e)), !r && n && l && (r = !!n(l, a)))
    })
  }
  enableSelect(i = { multi: !0, box: !1, single: !1 }) {
    return (
      this.disableDraw(),
      (this.#x = i?.single === !0),
      (this.#p = i?.box === !0),
      (this.#y = i?.multi !== !1),
      this.#x && ((this.#y = !1), (this.#p = !1)),
      (this.#y || this.#p) && this.disableModify(),
      this.#c || (this.#c = this.#s.on('singleclick', this.#w.bind(this))),
      !0
    )
  }
  disableSelect() {
    return (xs(this.#c), (this.#c = null), !0)
  }
  enableTranslate(i) {
    return (
      this.enableSelect({ multi: !0 }),
      (this.enableMover = !0),
      this.disableModify(),
      this.disableDraw(),
      this.disableFreehand(),
      this.showToolBar && this.#o('translate', !0),
      this.#l
        ? (this.#l.setActive(!0), !0)
        : ((this.#l = new Im({ features: this.#e })),
          this.#s?.addInteraction(this.#l),
          this.#l.on('translatestart', t => {
            ;(this.dispatchEvent(t), this.#k(t))
          }),
          this.#l.on('translateend', t => {
            ;(this.dispatchEvent(t), this.#N(t))
          }),
          !0)
    )
  }
  disableTranslate(i) {
    return ((this.enableMover = !1), this.#o('translate', !1), this.#l && this.#l.setActive(!1), !0)
  }
  enableModify(i) {
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
    ;(i !== null && (this.modifyingStyle = i),
      (this.#a = new Cm({
        features: this.#e,
        style: this.modifyingStyle !== null ? this.modifyingStyle : void 0,
      })),
      this.#s?.addInteraction(this.#a),
      this.#a.on('modifystart', t => {
        this.dispatchEvent(t)
        const e = this.#i(t.features),
          n = new Al(At.MODIFY_BEGIN, e, t.features)
        this.dispatchEvent(n)
      }),
      this.#a.on('modifyend', t => {
        this.dispatchEvent(t)
        const e = this.#i(t.features),
          n = new Al(At.MODIFY_COMPLETE, e, t.features)
        this.dispatchEvent(n)
      }),
      this.enableSnap())
  }
  disableModify(i, t) {
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
    ;((this.#d = new vm({ source: this.#t, intersection: !0 })), this.#s?.addInteraction(this.#d))
  }
  removeFeatures(i) {
    if (i == null) {
      const o = this.#e.getArray().slice(),
        a = this.#i(o)
      ;(this.#e.forEach(u => {
        this.#t.removeFeature(u)
      }),
        this.#e.clear())
      const l = this.#t.getFeatures().slice(),
        h = this.#i(l),
        c = new Ll(a, o, h, l)
      this.dispatchEvent(c)
      return
    }
    const t = Array.isArray(i) ? i : [i],
      e = []
    t.forEach(o => {
      const a = this.#t.getFeatureById(o)
      a && (e.push(a), this.#t.removeFeature(a), this.#e.remove(a))
    })
    const n = this.#e.getArray(),
      s = this.#i(n),
      r = new Ll(this.#i(e), e, s, n)
    this.dispatchEvent(r)
  }
  removeAllFeatures() {
    return (this.#t.clear(), this.#e.clear(), Promise.resolve(!0))
  }
  completeEdit() {
    ;(this.#e.forEach(n => {
      n.setStyle(void 0)
    }),
      this.#e.clear(),
      this.disableDraw(),
      this.disableFreehand(),
      this.disableModify(),
      this.disableTranslate())
    const i = this.#t.getFeatures(),
      t = this.#i(i),
      e = new Lm(t, i)
    this.dispatchEvent(e)
  }
  render() {
    ;(this.#I(), this.#M())
  }
  #I() {
    if (!this.#s?.getTargetElement()) return
    const i = this.#s.getTargetElement().querySelector('.ol-overlaycontainer-stopevent'),
      t = document.createElement('div')
    ;(t.classList.add('geom-editor-tool-bar'),
      t.classList.add('ol-control'),
      (t.style = 'pointer-events: auto;'),
      this.allButtons.forEach(e => {
        const n = document.createElement('button')
        n.classList.add('geom-editor-btn')
        const s = e.name
        ;(this.actions.includes(s) &&
          (s === 'complete'
            ? (n.disabled = !0)
            : this.#t.getFeatures().length
              ? (n.disabled = !1)
              : ((n.disabled = !0), (n.title = ''))),
          (n.innerHTML = e.icon(jm)),
          (n.title = e.title),
          (n.dataset.type = e.type),
          t.appendChild(n))
      }),
      i.appendChild(t),
      (this.toolBarContainer = t))
  }
  #M() {
    this.toolBarContainer &&
      this.toolBarContainer.addEventListener('click', i => {
        const t = i.target.closest('button')
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
  #b(i) {
    const { layerStyle: t, selectedStyle: e } = i
    e && (this.selectedStyle = e)
    const n = Dl + 1
    ;((this.#f = new Ho({ zIndex: n, source: this.#t, className: this.#j(i), style: t })),
      (this.supportFreehand = i?.supportFreehand !== !1),
      (this.showToolBar = i?.showToolBar !== !1),
      Array.isArray(i.actions) && (this.actions = i.actions),
      Array.isArray(i.drawTypes) && (this.drawTypes = i.drawTypes))
    const s = _s.filter(o => this.drawTypes.includes(o.type))
    this.supportFreehand && s.push(_s.find(o => o.name === 'freehand'))
    const r = _s.filter(o => this.actions.includes(o.name))
    this.allButtons = [...s, ...r]
  }
  #w(i) {
    if (this.#t.getFeatures().length === 0) return
    if (!this.#s.hasFeatureAtPixel(i.pixel)) {
      ;(this.#e.forEach(e => {
        e.setStyle(void 0)
      }),
        this.#e.clear())
      return
    }
    const t = e => {
      if (!e) return
      const n = this.#e.getArray().find(s => s.getId() === e.getId())
      this.#x
        ? (this.#e.forEach(s => {
            s.setStyle(void 0)
          }),
          this.#e.clear(),
          n || (this.#e.push(e), e.setStyle(this.selectedStyle)))
        : n
          ? (this.#e.remove(n), e.setStyle(void 0))
          : (this.#e.push(e), e.setStyle(this.selectedStyle))
    }
    this.#s.forEachFeatureAtPixel(
      i.pixel,
      e => {
        t(e)
      },
      { layerFilter: e => e === this.#f },
    )
  }
  #P(i) {
    if (i.dragging || !this.#c) return
    const t = i.map,
      e = t.getEventPixel(i.originalEvent),
      n = t.hasFeatureAtPixel(e)
    t.getTargetElement().style.cursor = n ? 'pointer' : ''
  }
  #L() {
    this.#t.on('changefeature', () => {})
    let i = !1
    const t = () => {
      this.showToolBar &&
        !i &&
        (this.actions.forEach(n => {
          this.#u(n, !0, zm[n])
        }),
        (i = !0))
    }
    this.#t.on('addfeature', t)
    const e = () => {
      ;((i = this.#t.getFeatures().length > 0),
        !i &&
          this.showToolBar &&
          this.actions.forEach(n => {
            if (n === 'complete') return 'next loop'
            this.#u(n, !1, '')
          }))
    }
    this.#t.on('removefeature', Ol(e))
  }
  #F() {
    const i = e => {
      const n = e.element,
        s = this.#e.getArray(),
        [r] = this.#i([n]),
        o = this.#i(s)
      this.dispatchEvent(new bm(At.SELECT, o, r, s, []))
    }
    this.#e.on('add', i)
    const t = e => {
      const n = e.element,
        [s] = this.#i([n]),
        r = this.#e.getArray(),
        o = this.#i([n]),
        a = [n]
      this.dispatchEvent(new Pm(At.DESELECT, o, s, r, a))
    }
    this.#e.on('remove', t)
  }
  #A() {
    this.#f && this.#s?.addLayer(this.#f)
  }
  #O(i) {
    const { feature: t, id: e } = this.#R(i)
    return { wkt: new hs().writeFeature(t, { dataProjection: this.#m, featureProjection: this.#n }), id: e }
  }
  #R(i) {
    let t
    return (i.getId() ? (t = i.getId()) : ((t = ai()), i.setId(t)), { id: t, feature: i })
  }
  #D(i) {
    const { feature: t, id: e } = this.#R(i),
      n = new oi().writeFeatureObject(t, { dataProjection: this.#m, featureProjection: this.#n }),
      s = new oi().writeFeature(t, { dataProjection: this.#m, featureProjection: this.#n })
    return { id: e, geojsonObj: n, geojson: s }
  }
  #i(i) {
    let t = []
    return (
      Array.isArray(i) ? (t = i) : (t = i.getArray()),
      t.map(e => {
        if (e.getGeometry()?.getType() === 'Circle') return this.#T(e)
        const { wkt: n, id: s } = this.#O(e),
          { geojson: r, geojsonObj: o } = this.#D(e)
        return { wkt: n, id: s, geojson: r, geojsonObj: o }
      })
    )
  }
  #T(i) {
    const t = i.getGeometry(),
      e = t.getFlatCoordinates(),
      n = Ht(t.getCenter(), this.#n, 'EPSG:4326'),
      s = Ht([e[2], e[3]], this.#n, 'EPSG:4326'),
      r = ec(n, s),
      o = km(n, s),
      a = ii(n),
      l = { geometryType: 'circle', center: n, radius: r, center3857: a, r: o },
      h = i_(n, r, 128),
      c = i.getId(),
      u = new mt(h)
    ;(u.setId(c), u.setProperties(l))
    const d = new hs().writeFeature(u, { dataProjection: 'EPSG:4326', featureProjection: this.#n }),
      f = new oi().writeFeatureObject(u, { dataProjection: 'EPSG:4326', featureProjection: this.#n }),
      g = JSON.stringify(f)
    return { id: c, wkt: d, geojson: g, geojsonObj: f }
  }
  #k(i) {
    const { features: t, startCoordinate: e } = i
    this.dispatchEvent(this.#S(t, e))
  }
  #N(i) {
    const { features: t, startCoordinate: e, coordinate: n } = i
    this.dispatchEvent(this.#S(t, e, n))
  }
  #S(i, t, e) {
    const n = this.#i(i),
      s = Ht(t, this.#n, 'EPSG:4326'),
      r = Ht(t, this.#n, 'EPSG:3857'),
      o = { coord: s, coord3857: r }
    if (e) {
      const a = Ht(e, this.#n, 'EPSG:4326'),
        l = Ht(e, this.#n, 'EPSG:3857'),
        h = { coord: a, coord3857: l }
      return new Fl(At.TRANSLATE_END, n, i, o, h)
    }
    return new Fl(At.TRANSLATE_START, n, i, o)
  }
  #j(i) {
    const { className: t = 'ol-layer' } = i
    return [t, `geom-editor-layer z-index:${Dl + 1}`].join(' ')
  }
  #o(i, t) {
    const e = this.#v(i)
    e && (t ? (e.classList.remove('hidden'), e?.classList.add('selected')) : e?.classList.remove('selected'))
  }
  #u(i, t, e) {
    const n = this.#v(i)
    n && ((n.disabled = t === !1), (n.title = e))
  }
  #v(i) {
    return this.toolBarContainer?.querySelector(`[data-type="${i}"]`)
  }
}
const Ym = Mm,
  Bm = 'LINESTRING(106.55773424492708 26.68974989181626,106.79592190619702 26.712142565234185)',
  Vm =
    'POLYGON((106.54206177148436 26.659310154932655,106.56403442773436 26.438183322888236,107.125710453125 26.488588582801427,107.07901855859373 26.6924423562391,106.54206177148436 26.659310154932655))',
  Um = {
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
  Zm = JSON.stringify({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [106.51521987473564, 26.73992541007939] },
    properties: null,
    id: 'p2CQqn2lFk',
  }),
  Km = {
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
console.log({ version: Ym }, 'zqj')
document.querySelector('.docs').innerHTML = Bf
const Nc = [106.675271, 26.579508]
bu(Nc)
const $m = new gf({
    target: 'ol-geom-editor-map',
    layers: [new jf({ source: new Yf() })],
    view: new Jt({ center: Nc, zoom: 10, projection: 'EPSG:4326' }),
  }),
  qm = {
    'fill-color': 'rgba(255,255,255,0.4)',
    'stroke-color': '#3399CC',
    'stroke-width': 1.25,
    'circle-radius': 5,
    'circle-fill-color': 'rgba(255,255,255,0.4)',
    'circle-stroke-width': 1.25,
    'circle-stroke-color': '#3399CC',
  },
  k = new Wm($m, { layerStyle: qm })
k.on('select', i => {
  console.log({ event: i })
})
k.on('deselect', i => {
  console.log({ event: i })
})
k.on('drawstart', i => {
  console.log({ event: i })
})
k.on('drawend', i => {
  console.log({ event: i })
})
k.on('drawBegin', i => {
  console.log({ event: i })
})
k.on('drawComplete', i => {
  console.log({ event: i })
})
k.on('translatestart', i => {
  console.log({ event: i })
})
k.on('translateend', i => {
  console.log({ event: i })
})
k.on('translateBegin', i => {
  console.log({ event: i })
})
k.on('translateComplete', i => {
  console.log({ event: i })
})
k.on('modifystart', i => {
  console.log({ event: i })
})
k.on('modifyend', i => {
  console.log({ event: i })
})
k.on('modifyBegin', i => {
  console.log({ event: i })
})
k.on('modifyComplete', i => {
  console.log({ event: i })
})
k.on('remove', i => {
  console.log({ event: i })
})
k.on('complete', i => {
  console.log({ event: i })
})
document.querySelector('#add-wkt').addEventListener('click', Hm)
document.querySelector('#add-JSON').addEventListener('click', Jm)
document.querySelector('#add-JSONObj').addEventListener('click', Qm)
document.querySelector('#remove-feature').addEventListener('click', ep)
document.querySelector('#remove-selected-features').addEventListener('click', tp)
document.querySelector('#remove-all-features').addEventListener('click', np)
document.querySelector('#select-features').addEventListener('click', ip)
document.querySelector('#deselect-features').addEventListener('click', sp)
document.querySelector('#enable-select').addEventListener('click', rp)
document.querySelector('#enable-select-single').addEventListener('click', op)
document.querySelector('#disable-select').addEventListener('click', ap)
document.querySelector('#translate-features').addEventListener('click', lp)
document.querySelector('#disable-translate').addEventListener('click', hp)
document.querySelector('#enable-modify').addEventListener('click', cp)
document.querySelector('#disable-modify').addEventListener('click', up)
document.querySelector('#select-type').addEventListener('change', gp)
document.querySelector('#freehand').addEventListener('change', _p)
function Hm() {
  console.log('addWKT')
  const i = k.addFeatureFromWKT(Bm, 'line1'),
    t = k.addFeatureFromWKT(Vm)
  console.log({ feat1: i, feat2: t })
}
function Jm() {
  console.log('addJSON')
  const i = k.addFeatureFromJSON(Zm)
  console.log({ f: i })
}
function Qm() {
  console.log('addJSONObj')
  const i = k.addFeatureFromJSON(Um),
    t = k.addFeatureFromJSON(Km)
  console.log({ feat2: t, feat1: i })
}
function tp() {
  k.removeFeatures()
}
function ep() {
  k.removeFeatures(['line1', 'p2CQqn2lFk'])
}
function np() {
  k.removeAllFeatures().then(i => {
    console.log({ success: i })
  })
}
const kl = 'rgba(218,228,194,0.5)',
  Nl = 'rgba(255, 204, 51, 0.9)'
function ip() {
  const i = k.select(['circle'], {
    selectedStyle: new md({
      fill: new Ra({ color: kl }),
      stroke: new Ta({ color: Nl, width: 4 }),
      image: new _d({ radius: 7, fill: new Ra({ color: kl }), stroke: new Ta({ color: Nl, width: 2 }) }),
    }),
    eachFeature: (t, e) => {
      if ((console.log({ feat: t }), e === 0)) return !0
    },
  })
  console.log('selected features:', i)
}
function sp() {
  k.deselect(['line1', 'p2CQqn2lFk'])
}
function rp() {
  k.enableSelect()
}
function op() {
  k.enableSelect({ single: !0 })
}
function ap() {
  k.disableSelect()
}
function lp() {
  k.enableTranslate()
}
function hp() {
  k.disableTranslate()
}
function cp() {
  k.enableModify()
}
function up() {
  k.disableModify()
}
const dp = ['LineString', 'Polygon'],
  fp = {
    'fill-color': 'rgba(255, 200, 200, 0.4)',
    'stroke-color': '#ff0000',
    'stroke-line-dash': [5, 10],
    'circle-radius': 6,
    'circle-fill-color': '#ff0000',
    'circle-stroke-color': 'yellow',
    'circle-stroke-width': 2,
  }
function gp(i) {
  const t = i.target.value
  console.log('change type to:', t)
  const e = document.querySelector('#freehand'),
    n = document.querySelector('#freehand-box')
  ;(dp.includes(t)
    ? ((n.title = 'Freehand drawing for ' + t), (e.disabled = !1))
    : ((n.title = '仅线和面支持自由绘制'), (e.checked = !1), (e.disabled = !0), k.disableFreehand()),
    k.enableDraw(t, fp))
}
function _p(i) {
  const t = i.target.checked
  ;(console.log('change freehand to:', t), t ? k.enableFreehand() : k.disableFreehand())
}
