;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i)
  new MutationObserver(i => {
    for (const r of i)
      if (r.type === 'childList')
        for (const o of r.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && n(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function e(i) {
    const r = {}
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    )
  }
  function n(i) {
    if (i.ep) return
    i.ep = !0
    const r = e(i)
    fetch(i.href, r)
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
function ao(s, t) {
  return s > t ? 1 : s < t ? -1 : 0
}
function lo(s, t, e) {
  if (s[0] <= t) return 0
  const n = s.length
  if (t <= s[n - 1]) return n - 1
  if (typeof e == 'function') {
    for (let i = 1; i < n; ++i) {
      const r = s[i]
      if (r === t) return i
      if (r < t) return e(t, s[i - 1], r) > 0 ? i - 1 : i
    }
    return n - 1
  }
  if (e > 0) {
    for (let i = 1; i < n; ++i) if (s[i] < t) return i - 1
    return n - 1
  }
  if (e < 0) {
    for (let i = 1; i < n; ++i) if (s[i] <= t) return i
    return n - 1
  }
  for (let i = 1; i < n; ++i) {
    if (s[i] == t) return i
    if (s[i] < t) return s[i - 1] - t < t - s[i] ? i - 1 : i
  }
  return n - 1
}
function Wc(s, t) {
  const e = Array.isArray(t) ? t : [t],
    n = e.length
  for (let i = 0; i < n; i++) s[s.length] = e[i]
}
function Ys(s, t) {
  const e = s.length
  if (e !== t.length) return !1
  for (let n = 0; n < e; n++) if (s[n] !== t[n]) return !1
  return !0
}
function Yc(s, t, e) {
  const n = t || ao
  return s.every(function (i, r) {
    if (r === 0) return !0
    const o = n(s[r - 1], i)
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
function Bc(s) {
  let t = !1,
    e,
    n,
    i
  return function () {
    const r = Array.prototype.slice.call(arguments)
    return (
      (!t || this !== i || !Ys(r, n)) && ((t = !0), (i = this), (n = r), (e = s.apply(this, arguments))),
      e
    )
  }
}
function Vs(s) {
  for (const t in s) delete s[t]
}
function Vc(s) {
  let t
  for (t in s) return !1
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
      i = n[t] || (n[t] = [])
    i.includes(e) || i.push(e)
  }
  dispatchEvent(t) {
    const e = typeof t == 'string',
      n = e ? t : t.type,
      i = this.listeners_ && this.listeners_[n]
    if (!i) return
    const r = e ? new We(t) : t
    r.target || (r.target = this.eventTarget_ || this)
    const o = this.dispatching_ || (this.dispatching_ = {}),
      a = this.pendingRemovals_ || (this.pendingRemovals_ = {})
    ;(n in o || ((o[n] = 0), (a[n] = 0)), ++o[n])
    let l
    for (let h = 0, c = i.length; h < c; ++h)
      if (
        ('handleEvent' in i[h] ? (l = i[h].handleEvent(r)) : (l = i[h].call(this, r)),
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
      const i = n.indexOf(e)
      i !== -1 &&
        (this.pendingRemovals_ && t in this.pendingRemovals_
          ? ((n[i] = Rs), ++this.pendingRemovals_[t])
          : (n.splice(i, 1), n.length === 0 && delete this.listeners_[t]))
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
function U(s, t, e, n, i) {
  if ((n && n !== s && (e = e.bind(n)), i)) {
    const o = e
    e = function () {
      ;(s.removeEventListener(t, e), o.apply(this, arguments))
    }
  }
  const r = { target: s, type: t, listener: e }
  return (s.addEventListener(t, e), r)
}
function Ts(s, t, e, n) {
  return U(s, t, e, n, !0)
}
function et(s) {
  s && s.target && (s.target.removeEventListener(s.type, s.listener), Vs(s))
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
        i = new Array(n)
      for (let r = 0; r < n; ++r) i[r] = U(this, t[r], e)
      return i
    }
    return U(this, t, e)
  }
  onceInternal(t, e) {
    let n
    if (Array.isArray(t)) {
      const i = t.length
      n = new Array(i)
      for (let r = 0; r < i; ++r) n[r] = Ts(this, t[r], e)
    } else n = Ts(this, t, e)
    return ((e.ol_key = n), n)
  }
  unInternal(t, e) {
    const n = e.ol_key
    if (n) Uc(n)
    else if (Array.isArray(t)) for (let i = 0, r = t.length; i < r; ++i) this.removeEventListener(t[i], e)
    else this.removeEventListener(t, e)
  }
}
Ii.prototype.on
Ii.prototype.once
Ii.prototype.un
function Uc(s) {
  if (Array.isArray(s)) for (let t = 0, e = s.length; t < e; ++t) et(s[t])
  else et(s)
}
function X() {
  throw new Error('Unimplemented abstract method.')
}
let Zc = 0
function Ct(s) {
  return s.ol_uid || (s.ol_uid = String(++Zc))
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
      const i = this.values_ || (this.values_ = {})
      if (n) i[t] = e
      else {
        const r = i[t]
        ;((i[t] = e), r !== e && this.notify(t, r))
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
const kt = { ADD: 'add', REMOVE: 'remove' },
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
        for (let n = 0, i = this.array_.length; n < i; ++n) this.assertUnique_(this.array_[n], n)
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
      for (let n = 0, i = e.length; n < i; ++n) t(e[n], n, e)
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
        this.dispatchEvent(new Zi(kt.ADD, e, t)))
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
      for (let n = 0, i = e.length; n < i; ++n) if (e[n] === t) return this.removeAt(n)
    }
    removeAt(t) {
      if (t < 0 || t >= this.getLength()) return
      const e = this.array_[t]
      return (this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(new Zi(kt.REMOVE, e, t)), e)
    }
    setAt(t, e) {
      const n = this.getLength()
      if (t >= n) {
        this.insertAt(t, e)
        return
      }
      if (t < 0) throw new Error('Index out of bounds: ' + t)
      this.unique_ && this.assertUnique_(e, t)
      const i = this.array_[t]
      ;((this.array_[t] = e),
        this.dispatchEvent(new Zi(kt.REMOVE, i, t)),
        this.dispatchEvent(new Zi(kt.ADD, e, t)))
    }
    updateLength_() {
      this.set(aa.LENGTH, this.array_.length)
    }
    assertUnique_(t, e) {
      for (let n = 0, i = this.array_.length; n < i; ++n)
        if (this.array_[n] === t && n !== e) throw new jl(58)
    }
  }
function $(s, t) {
  if (!s) throw new jl(t)
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
function kn() {
  return [1, 0, 0, 1, 0, 0]
}
function At(s, t) {
  const e = t[0],
    n = t[1]
  return ((t[0] = s[0] * e + s[2] * n + s[4]), (t[1] = s[1] * e + s[3] * n + s[5]), t)
}
function fi(s, t, e, n, i, r, o, a) {
  const l = Math.sin(r),
    h = Math.cos(r)
  return (
    (s[0] = n * h),
    (s[1] = i * l),
    (s[2] = -n * l),
    (s[3] = i * h),
    (s[4] = o * n * h - a * n * l + t),
    (s[5] = o * i * l + a * i * h + e),
    s
  )
}
function Yl(s, t) {
  const e = Jc(t)
  $(e !== 0, 32)
  const n = t[0],
    i = t[1],
    r = t[2],
    o = t[3],
    a = t[4],
    l = t[5]
  return (
    (s[0] = o / e),
    (s[1] = -i / e),
    (s[2] = -r / e),
    (s[3] = n / e),
    (s[4] = (r * l - o * a) / e),
    (s[5] = -(n * l - i * a) / e),
    s
  )
}
function Jc(s) {
  return s[0] * s[3] - s[1] * s[2]
}
let la
function Qc(s) {
  const t = 'matrix(' + s.join(', ') + ')'
  if (zl) return t
  const e = la || (la = document.createElement('div'))
  return ((e.style.transform = t), e.style.transform)
}
const lt = { UNKNOWN: 0, INTERSECTING: 1, ABOVE: 2, RIGHT: 4, BELOW: 8, LEFT: 16 }
function ha(s) {
  const t = on()
  for (let e = 0, n = s.length; e < n; ++e) ps(t, s[e])
  return t
}
function tu(s, t) {
  return t ? ((t[0] = s[0]), (t[1] = s[1]), (t[2] = s[2]), (t[3] = s[3]), t) : s.slice()
}
function Bl(s, t, e) {
  let n, i
  return (
    t < s[0] ? (n = s[0] - t) : s[2] < t ? (n = t - s[2]) : (n = 0),
    e < s[1] ? (i = s[1] - e) : s[3] < e ? (i = e - s[3]) : (i = 0),
    n * n + i * i
  )
}
function co(s, t) {
  return Vl(s, t[0], t[1])
}
function eu(s, t) {
  return s[0] <= t[0] && t[2] <= s[2] && s[1] <= t[1] && t[3] <= s[3]
}
function Vl(s, t, e) {
  return s[0] <= t && t <= s[2] && s[1] <= e && e <= s[3]
}
function ca(s, t) {
  const e = s[0],
    n = s[1],
    i = s[2],
    r = s[3],
    o = t[0],
    a = t[1]
  let l = lt.UNKNOWN
  return (
    o < e ? (l = l | lt.LEFT) : o > i && (l = l | lt.RIGHT),
    a < n ? (l = l | lt.BELOW) : a > r && (l = l | lt.ABOVE),
    l === lt.UNKNOWN && (l = lt.INTERSECTING),
    l
  )
}
function on() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0]
}
function Mi(s, t, e, n, i) {
  return i ? ((i[0] = s), (i[1] = t), (i[2] = e), (i[3] = n), i) : [s, t, e, n]
}
function Us(s) {
  return Mi(1 / 0, 1 / 0, -1 / 0, -1 / 0, s)
}
function nu(s, t) {
  const e = s[0],
    n = s[1]
  return Mi(e, n, e, n, t)
}
function iu(s, t, e, n, i) {
  const r = Us(i)
  return Ul(r, s, t, e, n)
}
function Ar(s, t) {
  return s[0] == t[0] && s[2] == t[2] && s[1] == t[1] && s[3] == t[3]
}
function su(s, t) {
  return (
    t[0] < s[0] && (s[0] = t[0]),
    t[2] > s[2] && (s[2] = t[2]),
    t[1] < s[1] && (s[1] = t[1]),
    t[3] > s[3] && (s[3] = t[3]),
    s
  )
}
function ps(s, t) {
  ;(t[0] < s[0] && (s[0] = t[0]),
    t[0] > s[2] && (s[2] = t[0]),
    t[1] < s[1] && (s[1] = t[1]),
    t[1] > s[3] && (s[3] = t[1]))
}
function Ul(s, t, e, n, i) {
  for (; e < n; e += i) ru(s, t[e], t[e + 1])
  return s
}
function ru(s, t, e) {
  ;((s[0] = Math.min(s[0], t)),
    (s[1] = Math.min(s[1], e)),
    (s[2] = Math.max(s[2], t)),
    (s[3] = Math.max(s[3], e)))
}
function Zl(s, t) {
  let e
  return ((e = t(Zs(s))), e || ((e = t(Ks(s))), e) || ((e = t($s(s))), e) || ((e = t(an(s))), e) ? e : !1)
}
function Or(s) {
  let t = 0
  return (qs(s) || (t = rt(s) * se(s)), t)
}
function Zs(s) {
  return [s[0], s[1]]
}
function Ks(s) {
  return [s[2], s[1]]
}
function gi(s) {
  return [(s[0] + s[2]) / 2, (s[1] + s[3]) / 2]
}
function ou(s, t) {
  let e
  return (
    t === 'bottom-left'
      ? (e = Zs(s))
      : t === 'bottom-right'
        ? (e = Ks(s))
        : t === 'top-left'
          ? (e = an(s))
          : t === 'top-right'
            ? (e = $s(s))
            : $(!1, 13),
    e
  )
}
function Dr(s, t, e, n, i) {
  const [r, o, a, l, h, c, u, d] = kr(s, t, e, n)
  return Mi(Math.min(r, a, h, u), Math.min(o, l, c, d), Math.max(r, a, h, u), Math.max(o, l, c, d), i)
}
function kr(s, t, e, n) {
  const i = (t * n[0]) / 2,
    r = (t * n[1]) / 2,
    o = Math.cos(e),
    a = Math.sin(e),
    l = i * o,
    h = i * a,
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
function se(s) {
  return s[3] - s[1]
}
function ci(s, t, e) {
  const n = e || on()
  return (
    bi(s, t)
      ? (s[0] > t[0] ? (n[0] = s[0]) : (n[0] = t[0]),
        s[1] > t[1] ? (n[1] = s[1]) : (n[1] = t[1]),
        s[2] < t[2] ? (n[2] = s[2]) : (n[2] = t[2]),
        s[3] < t[3] ? (n[3] = s[3]) : (n[3] = t[3]))
      : Us(n),
    n
  )
}
function an(s) {
  return [s[0], s[3]]
}
function $s(s) {
  return [s[2], s[3]]
}
function rt(s) {
  return s[2] - s[0]
}
function bi(s, t) {
  return s[0] <= t[2] && s[2] >= t[0] && s[1] <= t[3] && s[3] >= t[1]
}
function qs(s) {
  return s[2] < s[0] || s[3] < s[1]
}
function au(s, t) {
  return t ? ((t[0] = s[0]), (t[1] = s[1]), (t[2] = s[2]), (t[3] = s[3]), t) : s
}
function lu(s, t, e) {
  let n = !1
  const i = ca(s, t),
    r = ca(s, e)
  if (i === lt.INTERSECTING || r === lt.INTERSECTING) n = !0
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
    ;(r & lt.ABOVE && !(i & lt.ABOVE) && ((_ = d - (f - h) / g), (n = _ >= o && _ <= l)),
      !n && r & lt.RIGHT && !(i & lt.RIGHT) && ((m = f - (d - l) * g), (n = m >= a && m <= h)),
      !n && r & lt.BELOW && !(i & lt.BELOW) && ((_ = d - (f - a) / g), (n = _ >= o && _ <= l)),
      !n && r & lt.LEFT && !(i & lt.LEFT) && ((m = f - (d - o) * g), (n = m >= a && m <= h)))
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
function uu(s, t, e) {
  const n = s.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = s.slice()) : (t = new Array(n))))
  for (let i = 0; i < n; i += e) {
    t[i] = (bn * s[i]) / 180
    let r = Pi * Math.log(Math.tan((Math.PI * (+s[i + 1] + 90)) / 360))
    ;(r > Ki ? (r = Ki) : r < -Ki && (r = -Ki), (t[i + 1] = r))
  }
  return t
}
function du(s, t, e) {
  const n = s.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = s.slice()) : (t = new Array(n))))
  for (let i = 0; i < n; i += e)
    ((t[i] = (180 * s[i]) / bn), (t[i + 1] = (360 * Math.atan(Math.exp(s[i + 1] / Pi))) / Math.PI - 90))
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
function _u(s) {
  return Nr[s] || Nr[s.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] || null
}
function mu(s, t) {
  Nr[s] = t
}
let Nn = {}
function Ss(s, t, e) {
  const n = s.getCode(),
    i = t.getCode()
  ;(n in Nn || (Nn[n] = {}), (Nn[n][i] = e))
}
function pu(s, t) {
  let e
  return (s in Nn && t in Nn[s] && (e = Nn[s][t]), e)
}
function ot(s, t, e) {
  return Math.min(Math.max(s, t), e)
}
function yu(s, t, e, n, i, r) {
  const o = i - e,
    a = r - n
  if (o !== 0 || a !== 0) {
    const l = ((s - e) * o + (t - n) * a) / (o * o + a * a)
    l > 1 ? ((e = i), (n = r)) : l > 0 && ((e += o * l), (n += a * l))
  }
  return jn(s, t, e, n)
}
function jn(s, t, e, n) {
  const i = e - s,
    r = n - t
  return i * i + r * r
}
function xu(s) {
  const t = s.length
  for (let n = 0; n < t; n++) {
    let i = n,
      r = Math.abs(s[n][n])
    for (let a = n + 1; a < t; a++) {
      const l = Math.abs(s[a][n])
      l > r && ((r = l), (i = a))
    }
    if (r === 0) return null
    const o = s[i]
    ;((s[i] = s[n]), (s[n] = o))
    for (let a = n + 1; a < t; a++) {
      const l = -s[a][n] / s[n][n]
      for (let h = n; h < t + 1; h++) n == h ? (s[a][h] = 0) : (s[a][h] += l * s[n][h])
    }
  }
  const e = new Array(t)
  for (let n = t - 1; n >= 0; n--) {
    e[n] = s[n][t] / s[n][n]
    for (let i = n - 1; i >= 0; i--) s[i][t] -= s[i][n] * e[n]
  }
  return e
}
function ys(s) {
  return (s * Math.PI) / 180
}
function Gn(s, t) {
  const e = s % t
  return e * t < 0 ? e + t : e
}
function Eu(s, t, e) {
  return s + e * (t - s)
}
function $l(s, t) {
  const e = Math.pow(10, t)
  return Math.round(s * e) / e
}
function $i(s, t) {
  return Math.floor($l(s, t))
}
function qi(s, t) {
  return Math.ceil($l(s, t))
}
function Cu(s, t) {
  return ((s[0] += +t[0]), (s[1] += +t[1]), s)
}
function vs(s, t) {
  let e = !0
  for (let n = s.length - 1; n >= 0; --n)
    if (s[n] != t[n]) {
      e = !1
      break
    }
  return e
}
function fo(s, t) {
  const e = Math.cos(t),
    n = Math.sin(t),
    i = s[0] * e - s[1] * n,
    r = s[1] * e + s[0] * n
  return ((s[0] = i), (s[1] = r), s)
}
function wu(s, t) {
  return ((s[0] *= t), (s[1] *= t), s)
}
function Ru(s, t) {
  if (t.canWrapX()) {
    const e = rt(t.getExtent()),
      n = Tu(s, t, e)
    n && (s[0] -= n * e)
  }
  return s
}
function Tu(s, t, e) {
  const n = t.getExtent()
  let i = 0
  return (
    t.canWrapX() && (s[0] < n[0] || s[0] > n[2]) && ((e = e || rt(n)), (i = Math.floor((s[0] - n[0]) / e))),
    i
  )
}
const Su = 63710088e-1
function ga(s, t, e) {
  e = e || Su
  const n = ys(s[1]),
    i = ys(t[1]),
    r = (i - n) / 2,
    o = ys(t[0] - s[0]) / 2,
    a = Math.sin(r) * Math.sin(r) + Math.sin(o) * Math.sin(o) * Math.cos(n) * Math.cos(i)
  return 2 * e * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
function ql(...s) {
  console.warn(...s)
}
let jr = !0
function Hl(s) {
  jr = !1
}
function go(s, t) {
  if (t !== void 0) {
    for (let e = 0, n = s.length; e < n; ++e) t[e] = s[e]
    t = t
  } else t = s.slice()
  return t
}
function Jl(s, t) {
  if (t !== void 0 && s !== t) {
    for (let e = 0, n = s.length; e < n; ++e) t[e] = s[e]
    s = t
  }
  return s
}
function vu(s) {
  ;(mu(s.getCode(), s), Ss(s, s, go))
}
function Iu(s) {
  s.forEach(vu)
}
function Zt(s) {
  return typeof s == 'string' ? _u(s) : s || null
}
function _a(s, t, e, n) {
  s = Zt(s)
  let i
  const r = s.getPointResolutionFunc()
  if (r) i = r(t, e)
  else {
    const o = s.getUnits()
    if ((o == 'degrees' && !n) || n == 'degrees') i = t
    else {
      const a = mo(s, Zt('EPSG:4326'))
      if (a === Jl && o !== 'degrees') i = t * s.getMetersPerUnit()
      else {
        let h = [e[0] - t / 2, e[1], e[0] + t / 2, e[1], e[0], e[1] - t / 2, e[0], e[1] + t / 2]
        h = a(h, h, 2)
        const c = ga(h.slice(0, 2), h.slice(2, 4)),
          u = ga(h.slice(4, 6), h.slice(6, 8))
        i = (c + u) / 2
      }
      const l = s.getMetersPerUnit()
      l !== void 0 && (i /= l)
    }
  }
  return i
}
function ma(s) {
  ;(Iu(s),
    s.forEach(function (t) {
      s.forEach(function (e) {
        t !== e && Ss(t, e, go)
      })
    }))
}
function Mu(s, t, e, n) {
  s.forEach(function (i) {
    t.forEach(function (r) {
      ;(Ss(i, r, e), Ss(r, i, n))
    })
  })
}
function _o(s, t) {
  return s ? (typeof s == 'string' ? Zt(s) : s) : Zt(t)
}
function bu(s, t) {
  return (Hl(), Ql(s, 'EPSG:4326', 'EPSG:3857'))
}
function Rn(s, t) {
  if (s === t) return !0
  const e = s.getUnits() === t.getUnits()
  return (s.getCode() === t.getCode() || mo(s, t) === go) && e
}
function mo(s, t) {
  const e = s.getCode(),
    n = t.getCode()
  let i = pu(e, n)
  return (i || (i = Jl), i)
}
function Is(s, t) {
  const e = Zt(s),
    n = Zt(t)
  return mo(e, n)
}
function Ql(s, t, e) {
  return Is(t, e)(s, void 0, s.length)
}
function Gr(s, t) {
  return s
}
function de(s, t) {
  return (
    jr &&
      !vs(s, [0, 0]) &&
      s[0] >= -180 &&
      s[0] <= 180 &&
      s[1] >= -90 &&
      s[1] <= 90 &&
      ((jr = !1),
      ql('Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.')),
    s
  )
}
function Pu(s, t) {
  return s
}
function Pn(s, t) {
  return s
}
function Lu() {
  ;(ma(ua), ma(fa), Mu(fa, ua, uu, du))
}
Lu()
function Fu(s, t, e, n, i, r) {
  r = r || []
  let o = 0
  for (let a = t; a < e; a += n) {
    const l = s[a],
      h = s[a + 1]
    ;((r[o++] = i[0] * l + i[2] * h + i[4]), (r[o++] = i[1] * l + i[3] * h + i[5]))
  }
  return (r && r.length != o && (r.length = o), r)
}
function Au(s, t, e, n, i, r, o) {
  o = o || []
  const a = Math.cos(i),
    l = Math.sin(i),
    h = r[0],
    c = r[1]
  let u = 0
  for (let d = t; d < e; d += n) {
    const f = s[d] - h,
      g = s[d + 1] - c
    ;((o[u++] = h + f * a - g * l), (o[u++] = c + f * l + g * a))
    for (let _ = d + 2; _ < d + n; ++_) o[u++] = s[_]
  }
  return (o && o.length != u && (o.length = u), o)
}
function Ou(s, t, e, n, i, r, o, a) {
  a = a || []
  const l = o[0],
    h = o[1]
  let c = 0
  for (let u = t; u < e; u += n) {
    const d = s[u] - l,
      f = s[u + 1] - h
    ;((a[c++] = l + i * d), (a[c++] = h + r * f))
    for (let g = u + 2; g < u + n; ++g) a[c++] = s[g]
  }
  return (a && a.length != c && (a.length = c), a)
}
function Du(s, t, e, n, i, r, o) {
  o = o || []
  let a = 0
  for (let l = t; l < e; l += n) {
    ;((o[a++] = s[l] + i), (o[a++] = s[l + 1] + r))
    for (let h = l + 2; h < l + n; ++h) o[a++] = s[h]
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
          const i = this.clone()
          return (i.applyTransform(n), i.getSimplifiedGeometry(e))
        })))
    }
    simplifyTransformed(t, e) {
      return this.simplifyTransformedInternal(this.getRevision(), t, e)
    }
    clone() {
      return X()
    }
    closestPointXY(t, e, n, i) {
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
      const n = Zt(t),
        i =
          n.getUnits() == 'tile-pixels'
            ? function (r, o, a) {
                const l = n.getExtent(),
                  h = n.getWorldExtent(),
                  c = se(h) / se(l)
                return (fi(pa, h[0], h[3], c, -c, 0, 0, 0), Fu(r, 0, r.length, a, pa, o), Is(n, e)(r, o, a))
              }
            : Is(n, e)
      return (this.applyTransform(i), this)
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
      let i
      if (t) i = ya(t)
      else {
        for (let r = 0; r < n; ++r) {
          if (e.length === 0) {
            ;((this.layout = 'XY'), (this.stride = 2))
            return
          }
          e = e[0]
        }
        ;((i = e.length), (t = Nu(i)))
      }
      ;((this.layout = t), (this.stride = i))
    }
    applyTransform(t) {
      this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed())
    }
    rotate(t, e) {
      const n = this.getFlatCoordinates()
      if (n) {
        const i = this.getStride()
        ;(Au(n, 0, n.length, i, t, e, n), this.changed())
      }
    }
    scale(t, e, n) {
      ;(e === void 0 && (e = t), n || (n = gi(this.getExtent())))
      const i = this.getFlatCoordinates()
      if (i) {
        const r = this.getStride()
        ;(Ou(i, 0, i.length, r, t, e, n, i), this.changed())
      }
    }
    translate(t, e) {
      const n = this.getFlatCoordinates()
      if (n) {
        const i = this.getStride()
        ;(Du(n, 0, n.length, i, t, e, n), this.changed())
      }
    }
  }
function Nu(s) {
  let t
  return (s == 2 ? (t = 'XY') : s == 3 ? (t = 'XYZ') : s == 4 && (t = 'XYZM'), t)
}
function ya(s) {
  let t
  return (s == 'XY' ? (t = 2) : s == 'XYZ' || s == 'XYM' ? (t = 3) : s == 'XYZM' && (t = 4), t)
}
function xa(s, t, e, n, i, r, o) {
  const a = s[t],
    l = s[t + 1],
    h = s[e] - a,
    c = s[e + 1] - l
  let u
  if (h === 0 && c === 0) u = t
  else {
    const d = ((i - a) * h + (r - l) * c) / (h * h + c * c)
    if (d > 1) u = e
    else if (d > 0) {
      for (let f = 0; f < n; ++f) o[f] = Eu(s[t + f], s[e + f], d)
      o.length = n
      return
    } else u = t
  }
  for (let d = 0; d < n; ++d) o[d] = s[u + d]
  o.length = n
}
function th(s, t, e, n, i) {
  let r = s[t],
    o = s[t + 1]
  for (t += n; t < e; t += n) {
    const a = s[t],
      l = s[t + 1],
      h = jn(r, o, a, l)
    ;(h > i && (i = h), (r = a), (o = l))
  }
  return i
}
function ju(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((i = th(s, t, a, n, i)), (t = a))
  }
  return i
}
function eh(s, t, e, n, i, r, o, a, l, h, c) {
  if (t == e) return h
  let u, d
  if (i === 0) {
    if (((d = jn(o, a, s[t], s[t + 1])), d < h)) {
      for (u = 0; u < n; ++u) l[u] = s[t + u]
      return ((l.length = n), d)
    }
    return h
  }
  c = c || [NaN, NaN]
  let f = t + n
  for (; f < e; )
    if ((xa(s, f - n, f, n, o, a, c), (d = jn(o, a, c[0], c[1])), d < h)) {
      for (h = d, u = 0; u < n; ++u) l[u] = c[u]
      ;((l.length = n), (f += n))
    } else f += n * Math.max(((Math.sqrt(d) - Math.sqrt(h)) / i) | 0, 1)
  if ((xa(s, e - n, t, n, o, a, c), (d = jn(o, a, c[0], c[1])), d < h)) {
    for (h = d, u = 0; u < n; ++u) l[u] = c[u]
    l.length = n
  }
  return h
}
function Gu(s, t, e, n, i, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = eh(s, t, f, n, i, r, o, a, l, h, c)), (t = f))
  }
  return h
}
function Xu(s, t, e, n) {
  for (let i = 0, r = e.length; i < r; ++i) s[t++] = e[i]
  return t
}
function nh(s, t, e, n) {
  for (let i = 0, r = e.length; i < r; ++i) {
    const o = e[i]
    for (let a = 0; a < n; ++a) s[t++] = o[a]
  }
  return t
}
function zu(s, t, e, n, i) {
  i = i || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = nh(s, t, e[o], n)
    ;((i[r++] = l), (t = l))
  }
  return ((i.length = r), i)
}
function Wu(s, t, e, n, i, r, o) {
  const a = (e - t) / n
  if (a < 3) {
    for (; t < e; t += n) ((r[o++] = s[t]), (r[o++] = s[t + 1]))
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
    const g = s[d],
      _ = s[d + 1],
      m = s[u],
      p = s[u + 1]
    for (let y = d + n; y < u; y += n) {
      const x = s[y],
        E = s[y + 1],
        C = yu(x, E, g, _, m, p)
      C > f && ((c = y), (f = C))
    }
    f > i && ((l[(c - t) / n] = 1), d + n < c && h.push(d, c), c + n < u && h.push(c, u))
  }
  for (let u = 0; u < a; ++u) l[u] && ((r[o++] = s[t + u * n]), (r[o++] = s[t + u * n + 1]))
  return o
}
function pn(s, t) {
  return t * Math.round(s / t)
}
function Yu(s, t, e, n, i, r, o) {
  if (t == e) return o
  let a = pn(s[t], i),
    l = pn(s[t + 1], i)
  ;((t += n), (r[o++] = a), (r[o++] = l))
  let h, c
  do if (((h = pn(s[t], i)), (c = pn(s[t + 1], i)), (t += n), t == e)) return ((r[o++] = h), (r[o++] = c), o)
  while (h == a && c == l)
  for (; t < e; ) {
    const u = pn(s[t], i),
      d = pn(s[t + 1], i)
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
function Bu(s, t, e, n, i, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = Yu(s, t, c, n, i, r, o)), a.push(o), (t = c))
  }
  return o
}
function ih(s, t, e, n, i) {
  i = i !== void 0 ? i : []
  let r = 0
  for (let o = t; o < e; o += n) i[r++] = s.slice(o, o + n)
  return ((i.length = r), i)
}
function Vu(s, t, e, n, i) {
  i = i !== void 0 ? i : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((i[r++] = ih(s, t, l, n, i[r])), (t = l))
  }
  return ((i.length = r), i)
}
function sh(s, t, e, n) {
  let i = 0,
    r = s[e - n],
    o = s[e - n + 1]
  for (; t < e; t += n) {
    const a = s[t],
      l = s[t + 1]
    ;((i += o * a - r * l), (r = a), (o = l))
  }
  return i / 2
}
function Uu(s, t, e, n) {
  let i = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((i += sh(s, t, a, n)), (t = a))
  }
  return i
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
    closestPointXY(t, e, n, i) {
      return i < Bl(this.getExtent(), t, e)
        ? i
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
            i,
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
    closestPointXY(t, e, n, i) {
      const r = this.flatCoordinates,
        o = jn(t, e, r[0], r[1])
      if (o < i) {
        const a = this.stride
        for (let l = 0; l < a; ++l) n[l] = r[l]
        return ((n.length = a), o)
      }
      return i
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
function Ku(s, t, e, n, i) {
  return !Zl(i, function (o) {
    return !qe(s, t, e, n, o[0], o[1])
  })
}
function qe(s, t, e, n, i, r) {
  let o = 0,
    a = s[e - n],
    l = s[e - n + 1]
  for (; t < e; t += n) {
    const h = s[t],
      c = s[t + 1]
    ;(l <= r
      ? c > r && (h - a) * (r - l) - (i - a) * (c - l) > 0 && o++
      : c <= r && (h - a) * (r - l) - (i - a) * (c - l) < 0 && o--,
      (a = h),
      (l = c))
  }
  return o !== 0
}
function oh(s, t, e, n, i, r) {
  if (e.length === 0 || !qe(s, t, e[0], n, i, r)) return !1
  for (let o = 1, a = e.length; o < a; ++o) if (qe(s, e[o - 1], e[o], n, i, r)) return !1
  return !0
}
function $u(s, t, e, n, i, r, o) {
  let a, l, h, c, u, d, f
  const g = i[r + 1],
    _ = []
  for (let y = 0, x = e.length; y < x; ++y) {
    const E = e[y]
    for (c = s[E - n], d = s[E - n + 1], a = t; a < E; a += n)
      ((u = s[a]),
        (f = s[a + 1]),
        ((g <= d && f <= g) || (d <= g && g <= f)) && ((h = ((g - d) / (f - d)) * (u - c) + c), _.push(h)),
        (c = u),
        (d = f))
  }
  let m = NaN,
    p = -1 / 0
  for (_.sort(ao), c = _[0], a = 1, l = _.length; a < l; ++a) {
    u = _[a]
    const y = Math.abs(u - c)
    ;(y > p && ((h = (c + u) / 2), oh(s, t, e, n, h, g) && ((m = h), (p = y))), (c = u))
  }
  return (isNaN(m) && (m = i[r]), [m, g, p])
}
function qu(s, t, e, n, i) {
  let r
  for (t += n; t < e; t += n) if (((r = i(s.slice(t - n, t), s.slice(t, t + n))), r)) return r
  return !1
}
function ah(s, t, e, n, i) {
  const r = Ul(on(), s, t, e, n)
  return bi(i, r)
    ? eu(i, r) || (r[0] >= i[0] && r[2] <= i[2]) || (r[1] >= i[1] && r[3] <= i[3])
      ? !0
      : qu(s, t, e, n, function (o, a) {
          return lu(i, o, a)
        })
    : !1
}
function lh(s, t, e, n, i) {
  return !!(
    ah(s, t, e, n, i) ||
    qe(s, t, e, n, i[0], i[1]) ||
    qe(s, t, e, n, i[0], i[3]) ||
    qe(s, t, e, n, i[2], i[1]) ||
    qe(s, t, e, n, i[2], i[3])
  )
}
function Hu(s, t, e, n, i) {
  if (!lh(s, t, e[0], n, i)) return !1
  if (e.length === 1) return !0
  for (let r = 1, o = e.length; r < o; ++r)
    if (Ku(s, e[r - 1], e[r], n, i) && !ah(s, e[r - 1], e[r], n, i)) return !1
  return !0
}
function Ju(s, t, e, n) {
  for (; t < e - n; ) {
    for (let i = 0; i < n; ++i) {
      const r = s[t + i]
      ;((s[t + i] = s[e - n + i]), (s[e - n + i] = r))
    }
    ;((t += n), (e -= n))
  }
}
function hh(s, t, e, n) {
  let i = 0,
    r = s[e - n],
    o = s[e - n + 1]
  for (; t < e; t += n) {
    const a = s[t],
      l = s[t + 1]
    ;((i += (a - r) * (l + o)), (r = a), (o = l))
  }
  return i === 0 ? void 0 : i > 0
}
function Qu(s, t, e, n, i) {
  i = i !== void 0 ? i : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = hh(s, t, a, n)
    if (r === 0) {
      if ((i && l) || (!i && !l)) return !1
    } else if ((i && !l) || (!i && l)) return !1
    t = a
  }
  return !0
}
function Ca(s, t, e, n, i) {
  i = i !== void 0 ? i : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = hh(s, t, a, n)
    ;((r === 0 ? (i && l) || (!i && !l) : (i && !l) || (!i && l)) && Ju(s, t, a, n), (t = a))
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
  closestPointXY(t, e, n, i) {
    return i < Bl(this.getExtent(), t, e)
      ? i
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(ju(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Gu(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, n, i))
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
      i = []
    let r = 0
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = n[o],
        h = new Ea(e.slice(r, l), t)
      ;(i.push(h), (r = l))
    }
    return i
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
function wa(s) {
  if (qs(s)) throw new Error('Cannot create polygon from empty extent')
  const t = s[0],
    e = s[1],
    n = s[2],
    i = s[3],
    r = [t, e, t, i, n, i, n, e, t, e]
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
function Sa(s) {
  return s[0] > 0 && s[1] > 0
}
function td(s, t, e) {
  return (e === void 0 && (e = [0, 0]), (e[0] = (s[0] * t + 0.5) | 0), (e[1] = (s[1] * t + 0.5) | 0), e)
}
function te(s, t) {
  return Array.isArray(s) ? s : (t === void 0 ? (t = [s, s]) : ((t[0] = s), (t[1] = s)), t)
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
function sd(s) {
  return typeof s == 'string' ? s : gh(s)
}
function rd(s) {
  const t = document.createElement('div')
  if (((t.style.color = s), t.style.color !== '')) {
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
    let i
    if (t.hasOwnProperty(n)) i = t[n]
    else {
      if (e >= 1024) {
        let r = 0
        for (const o in t) (r++ & 3) === 0 && (delete t[o], --e)
      }
      ;((i = ad(n)), (t[n] = i), ++e)
    }
    return i
  }
})()
function Wr(s) {
  return Array.isArray(s) ? s : od(s)
}
function ad(s) {
  let t, e, n, i, r
  if ((id.exec(s) && (s = rd(s)), nd.exec(s))) {
    const o = s.length - 1
    let a
    o <= 4 ? (a = 1) : (a = 2)
    const l = o === 4 || o === 8
    ;((t = parseInt(s.substr(1 + 0 * a, a), 16)),
      (e = parseInt(s.substr(1 + 1 * a, a), 16)),
      (n = parseInt(s.substr(1 + 2 * a, a), 16)),
      l ? (i = parseInt(s.substr(1 + 3 * a, a), 16)) : (i = 255),
      a == 1 && ((t = (t << 4) + t), (e = (e << 4) + e), (n = (n << 4) + n), l && (i = (i << 4) + i)),
      (r = [t, e, n, i / 255]))
  } else
    s.startsWith('rgba(')
      ? ((r = s.slice(5, -1).split(',').map(Number)), va(r))
      : s.startsWith('rgb(')
        ? ((r = s.slice(4, -1).split(',').map(Number)), r.push(1), va(r))
        : $(!1, 14)
  return r
}
function va(s) {
  return (
    (s[0] = ot((s[0] + 0.5) | 0, 0, 255)),
    (s[1] = ot((s[1] + 0.5) | 0, 0, 255)),
    (s[2] = ot((s[2] + 0.5) | 0, 0, 255)),
    (s[3] = ot(s[3], 0, 1)),
    s
  )
}
function gh(s) {
  let t = s[0]
  t != (t | 0) && (t = (t + 0.5) | 0)
  let e = s[1]
  e != (e | 0) && (e = (e + 0.5) | 0)
  let n = s[2]
  n != (n | 0) && (n = (n + 0.5) | 0)
  const i = s[3] === void 0 ? 1 : Math.round(s[3] * 100) / 100
  return 'rgba(' + t + ',' + e + ',' + n + ',' + i + ')'
}
function Ia(s) {
  return Array.isArray(s) ? gh(s) : s
}
function je(s, t, e, n) {
  let i
  return (
    e && e.length
      ? (i = e.shift())
      : zl
        ? (i = new OffscreenCanvas(s || 300, t || 300))
        : (i = document.createElement('canvas')),
    s && (i.width = s),
    t && (i.height = t),
    i.getContext('2d', n)
  )
}
function yo(s) {
  const t = s.canvas
  ;((t.width = 1), (t.height = 1), s.clearRect(0, 0, 1, 1))
}
function Ma(s, t) {
  const e = t.parentNode
  e && e.replaceChild(s, t)
}
function Yr(s) {
  return s && s.parentNode ? s.parentNode.removeChild(s) : null
}
function ld(s) {
  for (; s.lastChild; ) s.removeChild(s.lastChild)
}
function hd(s, t) {
  const e = s.childNodes
  for (let n = 0; ; ++n) {
    const i = e[n],
      r = t[n]
    if (!i && !r) break
    if (i !== r) {
      if (!i) {
        s.appendChild(r)
        continue
      }
      if (!r) {
        ;(s.removeChild(i), --n)
        continue
      }
      s.insertBefore(r, i)
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
          i = je(n.size * t, n.size * t)
        ;(this.draw_(n, i, t), (e = i.canvas), (this.canvas_[t] = e))
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
      let i = this.radius_,
        r = this.radius2_ === void 0 ? i : this.radius2_
      if (i < r) {
        const R = i
        ;((i = r), (r = R))
      }
      const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2,
        a = (2 * Math.PI) / o,
        l = r * Math.sin(a),
        h = Math.sqrt(r * r - l * l),
        c = i - h,
        u = Math.sqrt(l * l + c * c),
        d = u / l
      if (t === 'miter' && d <= n) return d * e
      const f = e / 2 / d,
        g = (e / 2) * (c / u),
        m = Math.sqrt((i + f) * (i + f) + g * g) - i
      if (this.radius2_ === void 0 || t === 'bevel') return m * 2
      const p = i * Math.sin(a),
        y = Math.sqrt(i * i - p * p),
        x = r - y,
        C = Math.sqrt(p * p + x * x) / p
      if (C <= n) {
        const R = (C * e) / 2 - r - i
        return 2 * Math.max(m, R)
      }
      return m * 2
    }
    createRenderOptions() {
      let t = La,
        e = 0,
        n = null,
        i = 0,
        r,
        o = 0
      this.stroke_ &&
        ((r = this.stroke_.getColor()),
        r === null && (r = ud),
        (r = Ia(r)),
        (o = this.stroke_.getWidth()),
        o === void 0 && (o = dd),
        (n = this.stroke_.getLineDash()),
        (i = this.stroke_.getLineDashOffset()),
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
        lineDashOffset: i,
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
        let i = this.fill_.getColor()
        ;(i === null && (i = Pa), (e.fillStyle = Ia(i)), e.fill())
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
          const i = je(t.size, t.size)
          ;((this.hitDetectionCanvas_ = i.canvas), this.drawHitDetectionCanvas_(t, i))
        }
      }
      this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.getImage(1))
    }
    createPath_(t) {
      let e = this.points_
      const n = this.radius_
      if (e === 1 / 0) t.arc(0, 0, n, 0, 2 * Math.PI)
      else {
        const i = this.radius2_ === void 0 ? n : this.radius2_
        this.radius2_ !== void 0 && (e *= 2)
        const r = this.angle_ - Math.PI / 2,
          o = (2 * Math.PI) / e
        for (let a = 0; a < e; a++) {
          const l = r + a * o,
            h = a % 2 === 0 ? n : i
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
function Fa(s) {
  return s.getGeometry()
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
const Ot = { ANIMATING: 0, INTERACTING: 1 },
  Wt = { CENTER: 'center', RESOLUTION: 'resolution', ROTATION: 'rotation' },
  pd = 42,
  Eo = 256
function Aa(s, t, e) {
  return function (n, i, r, o, a) {
    if (!n) return
    if (!i && !t) return n
    const l = t ? 0 : r[0] * i,
      h = t ? 0 : r[1] * i,
      c = a ? a[0] : 0,
      u = a ? a[1] : 0
    let d = s[0] + l / 2 + c,
      f = s[2] - l / 2 + c,
      g = s[1] + h / 2 + u,
      _ = s[3] - h / 2 + u
    ;(d > f && ((d = (f + d) / 2), (f = d)), g > _ && ((g = (_ + g) / 2), (_ = g)))
    let m = ot(n[0], d, f),
      p = ot(n[1], g, _)
    if (o && e && i) {
      const y = 30 * i
      ;((m += -y * Math.log(1 + Math.max(0, d - n[0]) / y) + y * Math.log(1 + Math.max(0, n[0] - f) / y)),
        (p += -y * Math.log(1 + Math.max(0, g - n[1]) / y) + y * Math.log(1 + Math.max(0, n[1] - _) / y)))
    }
    return [m, p]
  }
}
function yd(s) {
  return s
}
function Co(s, t, e, n) {
  const i = rt(t) / e[0],
    r = se(t) / e[1]
  return n ? Math.min(s, Math.max(i, r)) : Math.min(s, Math.min(i, r))
}
function wo(s, t, e) {
  let n = Math.min(s, t)
  const i = 50
  return (
    (n *= Math.log(1 + i * Math.max(0, s / t - 1)) / i + 1),
    e && ((n = Math.max(n, e)), (n /= Math.log(1 + i * Math.max(0, e / s - 1)) / i + 1)),
    ot(n, e / 2, t * 2)
  )
}
function xd(s, t, e, n) {
  return (
    (t = t !== void 0 ? t : !0),
    function (i, r, o, a) {
      if (i !== void 0) {
        const l = s[0],
          h = s[s.length - 1],
          c = e ? Co(l, e, o, n) : l
        if (a) return t ? wo(i, c, h) : ot(i, h, c)
        const u = Math.min(c, i),
          d = Math.floor(lo(s, u, r))
        return s[d] > c && d < s.length - 1 ? s[d + 1] : s[d]
      }
    }
  )
}
function Ed(s, t, e, n, i, r) {
  return (
    (n = n !== void 0 ? n : !0),
    (e = e !== void 0 ? e : 0),
    function (o, a, l, h) {
      if (o !== void 0) {
        const c = i ? Co(t, i, l, r) : t
        if (h) return n ? wo(o, c, e) : ot(o, e, c)
        const u = 1e-9,
          d = Math.ceil(Math.log(t / c) / Math.log(s) - u),
          f = -a * (0.5 - u) + 0.5,
          g = Math.min(c, o),
          _ = Math.floor(Math.log(t / g) / Math.log(s) + f),
          m = Math.max(d, _),
          p = t / Math.pow(s, m)
        return ot(p, e, c)
      }
    }
  )
}
function Oa(s, t, e, n, i) {
  return (
    (e = e !== void 0 ? e : !0),
    function (r, o, a, l) {
      if (r !== void 0) {
        const h = n ? Co(s, n, a, i) : s
        return !e || !l ? ot(r, t, h) : wo(r, h, t)
      }
    }
  )
}
function Ro(s) {
  if (s !== void 0) return 0
}
function Da(s) {
  if (s !== void 0) return s
}
function Cd(s) {
  const t = (2 * Math.PI) / s
  return function (e, n) {
    if (n) return e
    if (e !== void 0) return ((e = Math.floor(e / t + 0.5) * t), e)
  }
}
function wd(s) {
  return (
    (s = s || ys(5)),
    function (t, e) {
      if (e) return t
      if (t !== void 0) return Math.abs(t) <= s ? 0 : t
    }
  )
}
function xh(s) {
  return Math.pow(s, 3)
}
function $n(s) {
  return 1 - xh(1 - s)
}
function Rd(s) {
  return 3 * s * s - 2 * s * s * s
}
function Td(s) {
  return s
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
    for (const a in Wt) delete e[a]
    this.setProperties(e, !0)
    const n = vd(t)
    ;((this.maxResolution_ = n.maxResolution),
      (this.minResolution_ = n.minResolution),
      (this.zoomFactor_ = n.zoomFactor),
      (this.resolutions_ = t.resolutions),
      (this.padding_ = t.padding),
      (this.minZoom_ = n.minZoom))
    const i = Sd(t),
      r = n.constraint,
      o = Id(t)
    ;((this.constraints_ = { center: i, resolution: r, rotation: o }),
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
      const i = t || [0, 0, 0, 0]
      e = e || [0, 0, 0, 0]
      const r = this.getResolution(),
        o = (r / 2) * (i[3] - e[3] + e[1] - i[1]),
        a = (r / 2) * (i[0] - e[0] + e[2] - i[2])
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
      let i = arguments[n]
      ;(i.center && ((i = Object.assign({}, i)), (i.center = de(i.center, this.getProjection()))),
        i.anchor && ((i = Object.assign({}, i)), (i.anchor = de(i.anchor, this.getProjection()))),
        (e[n] = i))
    }
    this.animateInternal.apply(this, e)
  }
  animateInternal(t) {
    let e = arguments.length,
      n
    e > 1 && typeof arguments[e - 1] == 'function' && ((n = arguments[e - 1]), --e)
    let i = 0
    for (; i < e && !this.isDef(); ++i) {
      const c = arguments[i]
      ;(c.center && this.setCenterInternal(c.center),
        c.zoom !== void 0 ? this.setZoom(c.zoom) : c.resolution && this.setResolution(c.resolution),
        c.rotation !== void 0 && this.setRotation(c.rotation))
    }
    if (i === e) {
      n && Ji(n, !0)
      return
    }
    let r = Date.now(),
      o = this.targetCenter_.slice(),
      a = this.targetResolution_,
      l = this.targetRotation_
    const h = []
    for (; i < e; ++i) {
      const c = arguments[i],
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
    ;(this.animations_.push(h), this.setHint(Ot.ANIMATING, 1), this.updateAnimations_())
  }
  getAnimating() {
    return this.hints_[Ot.ANIMATING] > 0
  }
  getInteracting() {
    return this.hints_[Ot.INTERACTING] > 0
  }
  cancelAnimations() {
    this.setHint(Ot.ANIMATING, -this.hints_[Ot.ANIMATING])
    let t
    for (let e = 0, n = this.animations_.length; e < n; ++e) {
      const i = this.animations_[e]
      if ((i[0].callback && Ji(i[0].callback, !1), !t))
        for (let r = 0, o = i.length; r < o; ++r) {
          const a = i[r]
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
      const i = this.animations_[n]
      let r = !0
      for (let o = 0, a = i.length; o < a; ++o) {
        const l = i[o]
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
          this.setHint(Ot.ANIMATING, -1),
          (this.nextCenter_ = null),
          (this.nextResolution_ = NaN),
          (this.nextRotation_ = NaN))
        const o = i[0].callback
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
    const i = this.getCenterInternal()
    return (i !== void 0 && ((n = [i[0] - e[0], i[1] - e[1]]), fo(n, t - this.getRotation()), Cu(n, e)), n)
  }
  calculateCenterZoom(t, e) {
    let n
    const i = this.getCenterInternal(),
      r = this.getResolution()
    if (i !== void 0 && r !== void 0) {
      const o = e[0] - (t * (e[0] - i[0])) / r,
        a = e[1] - (t * (e[1] - i[1])) / r
      n = [o, a]
    }
    return n
  }
  getViewportSize_(t) {
    const e = this.viewportSize_
    if (t) {
      const n = e[0],
        i = e[1]
      return [
        Math.abs(n * Math.cos(t)) + Math.abs(i * Math.sin(t)),
        Math.abs(n * Math.sin(t)) + Math.abs(i * Math.cos(t)),
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
    return this.get(Wt.CENTER)
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
    const i = this.getRotation()
    return ($(i !== void 0, 3), Dr(e, n, i, t))
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
    return this.get(Wt.RESOLUTION)
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
      i = se(t) / e[1]
    return Math.max(n, i)
  }
  getResolutionForValueFunction(t) {
    t = t || 2
    const e = this.getConstrainedResolution(this.maxResolution_),
      n = this.minResolution_,
      i = Math.log(e / n) / Math.log(t)
    return function (r) {
      return e / Math.pow(t, r * i)
    }
  }
  getRotation() {
    return this.get(Wt.ROTATION)
  }
  getValueForResolutionFunction(t) {
    const e = Math.log(t || 2),
      n = this.getConstrainedResolution(this.maxResolution_),
      i = this.minResolution_,
      r = Math.log(n / i) / e
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
    let i = this.getCenterInternal()
    const r = this.padding_
    if (r) {
      const o = this.getViewportSizeMinusPadding_()
      i = ur(i, this.getViewportSize_(), [o[0] / 2 + r[3], o[1] / 2 + r[0]], e, n)
    }
    return {
      center: i.slice(0),
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
      i
    if (this.resolutions_) {
      const r = lo(this.resolutions_, t, 1)
      ;((e = r),
        (n = this.resolutions_[r]),
        r == this.resolutions_.length - 1 ? (i = 2) : (i = n / this.resolutions_[r + 1]))
    } else ((n = this.maxResolution_), (i = this.zoomFactor_))
    return e + Math.log(n / t) / Math.log(i)
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
      const i = Pn(t, this.getProjection())
      n = wa(i)
    } else if (t.getType() === 'Circle') {
      const i = Pn(t.getExtent(), this.getProjection())
      ;((n = wa(i)), n.rotate(this.getRotation(), gi(i)))
    } else n = t
    this.fitInternal(n, e)
  }
  rotatedExtentForGeometry(t) {
    const e = this.getRotation(),
      n = Math.cos(e),
      i = Math.sin(-e),
      r = t.getFlatCoordinates(),
      o = t.getStride()
    let a = 1 / 0,
      l = 1 / 0,
      h = -1 / 0,
      c = -1 / 0
    for (let u = 0, d = r.length; u < d; u += o) {
      const f = r[u] * n - r[u + 1] * i,
        g = r[u] * i + r[u + 1] * n
      ;((a = Math.min(a, f)), (l = Math.min(l, g)), (h = Math.max(h, f)), (c = Math.max(c, g)))
    }
    return [a, l, h, c]
  }
  fitInternal(t, e) {
    e = e || {}
    let n = e.size
    n || (n = this.getViewportSizeMinusPadding_())
    const i = e.padding !== void 0 ? e.padding : [0, 0, 0, 0],
      r = e.nearest !== void 0 ? e.nearest : !1
    let o
    e.minResolution !== void 0
      ? (o = e.minResolution)
      : e.maxZoom !== void 0
        ? (o = this.getResolutionForZoom(e.maxZoom))
        : (o = 0)
    const a = this.rotatedExtentForGeometry(t)
    let l = this.getResolutionForExtentInternal(a, [n[0] - i[1] - i[3], n[1] - i[0] - i[2]])
    ;((l = isNaN(l) ? o : Math.max(l, o)), (l = this.getConstrainedResolution(l, r ? 0 : 1)))
    const h = this.getRotation(),
      c = Math.sin(h),
      u = Math.cos(h),
      d = gi(a)
    ;((d[0] += ((i[1] - i[3]) / 2) * l), (d[1] += ((i[0] - i[2]) / 2) * l))
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
  calculateCenterShift(t, e, n, i) {
    let r
    const o = this.padding_
    if (o && t) {
      const a = this.getViewportSizeMinusPadding_(-n),
        l = ur(t, i, [a[0] / 2 + o[3], a[1] / 2 + o[0]], e, n)
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
      i = this.getViewportSize_(this.getRotation()),
      r = this.constraints_.resolution(this.targetResolution_ * t, 0, i, n)
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
      i = this.constraints_.rotation(this.targetRotation_ + t, n)
    ;(e && (this.targetCenter_ = this.calculateCenterRotate(i, e)),
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
      i = this.constraints_.rotation(this.targetRotation_, n),
      r = this.getViewportSize_(i),
      o = this.constraints_.resolution(this.targetResolution_, 0, r, n),
      a = this.constraints_.center(
        this.targetCenter_,
        o,
        r,
        n,
        this.calculateCenterShift(this.targetCenter_, o, i, r),
      )
    ;(this.get(Wt.ROTATION) !== i && this.set(Wt.ROTATION, i),
      this.get(Wt.RESOLUTION) !== o && (this.set(Wt.RESOLUTION, o), this.set('zoom', this.getZoom(), !0)),
      (!a || !this.get(Wt.CENTER) || !vs(this.get(Wt.CENTER), a)) && this.set(Wt.CENTER, a),
      this.getAnimating() && !t && this.cancelAnimations(),
      (this.cancelAnchor_ = void 0))
  }
  resolveConstraints(t, e, n) {
    t = t !== void 0 ? t : 200
    const i = e || 0,
      r = this.constraints_.rotation(this.targetRotation_),
      o = this.getViewportSize_(r),
      a = this.constraints_.resolution(this.targetResolution_, i, o),
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
    ;(this.resolveConstraints(0), this.setHint(Ot.INTERACTING, 1))
  }
  endInteraction(t, e, n) {
    ;((n = n && de(n, this.getProjection())), this.endInteractionInternal(t, e, n))
  }
  endInteractionInternal(t, e, n) {
    this.getInteracting() && (this.setHint(Ot.INTERACTING, -1), this.resolveConstraints(t, e, n))
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
function Ji(s, t) {
  setTimeout(function () {
    s(t)
  }, 0)
}
function Sd(s) {
  if (s.extent !== void 0) {
    const e = s.smoothExtentConstraint !== void 0 ? s.smoothExtentConstraint : !0
    return Aa(s.extent, s.constrainOnlyCenter, e)
  }
  const t = _o(s.projection, 'EPSG:3857')
  if (s.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice()
    return ((e[0] = -1 / 0), (e[2] = 1 / 0), Aa(e, !1, !1))
  }
  return yd
}
function vd(s) {
  let t,
    e,
    n,
    o = s.minZoom !== void 0 ? s.minZoom : cr,
    a = s.maxZoom !== void 0 ? s.maxZoom : 28
  const l = s.zoomFactor !== void 0 ? s.zoomFactor : 2,
    h = s.multiWorld !== void 0 ? s.multiWorld : !1,
    c = s.smoothResolutionConstraint !== void 0 ? s.smoothResolutionConstraint : !0,
    u = s.showFullExtent !== void 0 ? s.showFullExtent : !1,
    d = _o(s.projection, 'EPSG:3857'),
    f = d.getExtent()
  let g = s.constrainOnlyCenter,
    _ = s.extent
  if ((!h && !_ && d.isGlobal() && ((g = !1), (_ = f)), s.resolutions !== void 0)) {
    const m = s.resolutions
    ;((e = m[o]),
      (n = m[a] !== void 0 ? m[a] : m[m.length - 1]),
      s.constrainResolution ? (t = xd(m, c, !g && _, u)) : (t = Oa(e, n, c, !g && _, u)))
  } else {
    const p = (f ? Math.max(rt(f), se(f)) : (360 * uo.degrees) / d.getMetersPerUnit()) / Eo / Math.pow(2, cr),
      y = p / Math.pow(2, 28 - cr)
    ;((e = s.maxResolution),
      e !== void 0 ? (o = 0) : (e = p / Math.pow(l, o)),
      (n = s.minResolution),
      n === void 0 &&
        (s.maxZoom !== void 0
          ? s.maxResolution !== void 0
            ? (n = e / Math.pow(l, a))
            : (n = p / Math.pow(l, a))
          : (n = y)),
      (a = o + Math.floor(Math.log(e / n) / Math.log(l))),
      (n = e / Math.pow(l, a - o)),
      s.constrainResolution ? (t = Ed(l, e, n, c, !g && _, u)) : (t = Oa(e, n, c, !g && _, u)))
  }
  return { constraint: t, maxResolution: e, minResolution: n, minZoom: o, zoomFactor: l }
}
function Id(s) {
  if (s.enableRotation !== void 0 ? s.enableRotation : !0) {
    const e = s.constrainRotation
    return e === void 0 || e === !0 ? wd() : e === !1 ? Da : typeof e == 'number' ? Cd(e) : Da
  }
  return Ro
}
function Md(s) {
  return !(
    (s.sourceCenter && s.targetCenter && !vs(s.sourceCenter, s.targetCenter)) ||
    s.sourceResolution !== s.targetResolution ||
    s.sourceRotation !== s.targetRotation
  )
}
function ur(s, t, e, n, i) {
  const r = Math.cos(-i)
  let o = Math.sin(-i),
    a = s[0] * r - s[1] * o,
    l = s[1] * r + s[0] * o
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
    let i
    e.layerStatesArray ? (i = e.layerStatesArray.find(o => o.layer === this)) : (i = this.getLayerState())
    const r = this.getExtent()
    return So(i, e.viewState) && (!r || bi(r, e.extent))
  }
  getAttributions(t) {
    if (!this.isVisible(t)) return []
    let e
    const n = this.getSource()
    if ((n && (e = n.getAttributions()), !e)) return []
    const i = t instanceof Jt ? t.getViewStateAndExtent() : t
    let r = e(i)
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
            const i = e.frameState.layerStatesArray,
              r = this.getLayerState(!1)
            ;($(
              !i.some(function (o) {
                return o.layer === r.layer
              }),
              67,
            ),
              i.push(r))
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
function So(s, t) {
  if (!s.visible) return !1
  const e = t.resolution
  if (e < s.minResolution || e >= s.maxResolution) return !1
  const n = t.zoom
  return n > s.minZoom && n <= s.maxZoom
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
    const i = ka(t, e, n)
    return i in this.cache_ ? this.cache_[i] : null
  }
  set(t, e, n, i) {
    const r = ka(t, e, n)
    ;((this.cache_[r] = i), ++this.cacheSize_)
  }
  setSize(t) {
    ;((this.maxCacheSize_ = t), this.expire())
  }
}
function ka(s, t, e) {
  const n = e ? sd(e) : 'null'
  return t + ':' + s + ':' + n
}
const Eh = new bd()
function Pd(s, t, e) {
  const n = s
  let i = !0,
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
            i && t()
          })
          .catch(function (l) {
            i && (o ? t() : e())
          }))
      : a.push(Ts(n, j.ERROR, e)),
    function () {
      ;((i = !1), a.forEach(et))
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
      return (i, r) => {
        const o = this.loadedTileCallback.bind(this, n, i)
        return t.forEachLoadedTile(e, i, r, o)
      }
    }
    forEachFeatureAtCoordinate(t, e, n, i, r) {}
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
    constructor(t, e, n, i) {
      ;(super(t), (this.inversePixelTransform = e), (this.frameState = n), (this.context = i))
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
      let i
      try {
        ;(Tn.drawImage(t, e, n, 1, 1, 0, 0, 1, 1), (i = Tn.getImageData(0, 0, 1, 1).data))
      } catch {
        return ((Tn = null), null)
      }
      return i
    }
    getBackground(t) {
      let n = this.getLayer().getBackground()
      return (typeof n == 'function' && (n = n(t.viewState.resolution)), n || void 0)
    }
    useContainer(t, e, n) {
      const i = this.getLayer().getClassName()
      let r, o
      if (
        t &&
        t.className === i &&
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
        ;((r = document.createElement('div')), (r.className = i))
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
      const i = an(n),
        r = $s(n),
        o = Ks(n),
        a = Zs(n)
      ;(At(e.coordinateToPixelTransform, i),
        At(e.coordinateToPixelTransform, r),
        At(e.coordinateToPixelTransform, o),
        At(e.coordinateToPixelTransform, a))
      const l = this.inversePixelTransform
      ;(At(l, i),
        At(l, r),
        At(l, o),
        At(l, a),
        t.save(),
        t.beginPath(),
        t.moveTo(Math.round(i[0]), Math.round(i[1])),
        t.lineTo(Math.round(r[0]), Math.round(r[1])),
        t.lineTo(Math.round(o[0]), Math.round(o[1])),
        t.lineTo(Math.round(a[0]), Math.round(a[1])),
        t.clip())
    }
    dispatchRenderEvent_(t, e, n) {
      const i = this.getLayer()
      if (i.hasListener(t)) {
        const r = new Ch(t, this.inversePixelTransform, n, e)
        i.dispatchEvent(r)
      }
    }
    preRender(t, e) {
      ;((this.frameState = e), this.dispatchRenderEvent_(De.PRERENDER, t, e))
    }
    postRender(t, e) {
      this.dispatchRenderEvent_(De.POSTRENDER, t, e)
    }
    getRenderTransform(t, e, n, i, r, o, a) {
      const l = r / 2,
        h = o / 2,
        c = i / e,
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
        (this.projection = Zt(t.projection)),
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
      this.viewPromise_ = new Promise(function (n, i) {
        ;((e.viewResolver = n), (e.viewRejector = i))
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
function Na(s) {
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
    const i = e - n + 1e3 / 60
    return i >= this.transition_ ? 1 : xh(i / this.transition_)
  }
  inTransition(t) {
    return this.transition_ ? this.transitionStarts_[t] !== -1 : !1
  }
  endTransition(t) {
    this.transition_ && (this.transitionStarts_[t] = -1)
  }
}
class Rh extends wh {
  constructor(t, e, n, i, r, o) {
    ;(super(t, e, o),
      (this.crossOrigin_ = i),
      (this.src_ = n),
      (this.key = n),
      (this.image_ = new Image()),
      i !== null && (this.image_.crossOrigin = i),
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
  const s = je(1, 1)
  return ((s.fillStyle = 'rgba(0,0,0,0)'), s.fillRect(0, 0, 1, 1), s.canvas)
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
    const i = this.points_[e + 2] - this.points_[n + 2]
    if (i < 1e3 / 60) return !1
    const r = this.points_[e] - this.points_[n],
      o = this.points_[e + 1] - this.points_[n + 1]
    return (
      (this.angle_ = Math.atan2(o, r)),
      (this.initialVelocity_ = Math.sqrt(r * r + o * o) / i),
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
      i = t.pixelToCoordinateTransform
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
      Yl(i, n))
  }
  forEachFeatureAtCoordinate(t, e, n, i, r, o, a, l) {
    let h
    const c = e.viewState
    function u(E, C, R, v) {
      return r.call(o, C, E ? R : null, v)
    }
    const d = c.projection,
      f = Ru(t.slice(), d),
      g = [[0, 0]]
    if (d.canWrapX() && i) {
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
  hasFeatureAtCoordinate(t, e, n, i, r, o) {
    return this.forEachFeatureAtCoordinate(t, e, n, i, ws, this, r, o) !== void 0
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
function jd(s, t) {
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
      const i = new Ch(t, void 0, e)
      n.dispatchEvent(i)
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
    const i = this.declutterLayers_
    i.length = 0
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
      u && (u !== r && (this.children_.push(u), (r = u)), 'getDeclutter' in h && i.push(h))
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
      U(t, kt.ADD, this.handleLayersAdd_, this),
      U(t, kt.REMOVE, this.handleLayersRemove_, this),
    )
    for (const n in this.listenerKeys_) this.listenerKeys_[n].forEach(et)
    Vs(this.listenerKeys_)
    const e = t.getArray()
    for (let n = 0, i = e.length; n < i; n++) {
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
      for (let i = 0, r = n.length; i < r; ++i) this.dispatchEvent(new Fe('removelayer', n[i]))
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
    const i = this.getLayerState()
    let r = i.zIndex
    !t && i.zIndex === void 0 && (r = 0)
    for (let o = n, a = e.length; o < a; o++) {
      const l = e[o]
      ;((l.opacity *= i.opacity),
        (l.visible = l.visible && i.visible),
        (l.maxResolution = Math.min(l.maxResolution, i.maxResolution)),
        (l.minResolution = Math.max(l.minResolution, i.minResolution)),
        (l.minZoom = Math.max(l.minZoom, i.minZoom)),
        (l.maxZoom = Math.min(l.maxZoom, i.maxZoom)),
        i.extent !== void 0 &&
          (l.extent !== void 0 ? (l.extent = ci(l.extent, i.extent)) : (l.extent = i.extent)),
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
    constructor(t, e, n, i, r, o) {
      ;(super(t, e, r),
        (this.originalEvent = n),
        (this.pixel_ = null),
        (this.coordinate_ = null),
        (this.dragging = i !== void 0 ? i : !1),
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
      for (const i in this.trackedTouches_)
        if (this.trackedTouches_[i].target !== e.target) {
          delete this.trackedTouches_[i]
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
    const i = this.keyFunction_(n)
    return (delete this.queuedElements_[i], n)
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
      i = e.length,
      r = e[t],
      o = n[t],
      a = t
    for (; t < i >> 1; ) {
      const l = this.getLeftChildIndex_(t),
        h = this.getRightChildIndex_(t),
        c = h < i && n[h] < n[l] ? h : l
      ;((e[t] = e[c]), (n[t] = n[c]), (t = c))
    }
    ;((e[t] = r), (n[t] = o), this.siftDown_(a, t))
  }
  siftDown_(t, e) {
    const n = this.elements_,
      i = this.priorities_,
      r = n[e],
      o = i[e]
    for (; e > t; ) {
      const a = this.getParentIndex_(e)
      if (i[a] > o) ((n[e] = n[a]), (i[e] = i[a]), (e = a))
      else break
    }
    ;((n[e] = r), (i[e] = o))
  }
  reprioritize() {
    const t = this.priorityFunction_,
      e = this.elements_,
      n = this.priorities_
    let i = 0
    const r = e.length
    let o, a, l
    for (a = 0; a < r; ++a)
      ((o = e[a]),
        (l = t(o)),
        l == Ms ? delete this.queuedElements_[this.keyFunction_(o)] : ((n[i] = l), (e[i++] = o)))
    ;((e.length = i), (n.length = i), this.heapify_())
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
      const i = e.getKey()
      ;(i in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[i], --this.tilesLoading_),
        this.tileChangeCallback_())
    }
  }
  loadMoreTiles(t, e) {
    let n = 0,
      i,
      r,
      o
    for (; this.tilesLoading_ < t && n < e && this.getCount() > 0; )
      ((r = this.dequeue()[0]),
        (o = r.getKey()),
        (i = r.getState()),
        i === P.IDLE &&
          !(o in this.tilesLoadingKeys_) &&
          ((this.tilesLoadingKeys_[o] = !0), ++this.tilesLoading_, ++n, r.load()))
  }
}
function Yd(s, t, e, n, i) {
  if (!s || !(e in s.wantedTiles) || !s.wantedTiles[e][t.getKey()]) return Ms
  const r = s.viewState.center,
    o = n[0] - r[0],
    a = n[1] - r[1]
  return 65536 * Math.log(i) + Math.sqrt(o * o + a * a) / i
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
      i = t.expandClassName !== void 0 ? t.expandClassName : e + '-expand',
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
        (this.label_.className = i))
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
            .flatMap(i => i.getAttributions(t)),
        ),
      ),
      n = !this.getMap()
        .getAllLayers()
        .some(i => i.getSource() && i.getSource().getAttributionsCollapsible() === !1)
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
      for (let i = 0, r = e.length; i < r; ++i) {
        const o = document.createElement('li')
        ;((o.innerHTML = e[i]), this.ulElement_.appendChild(o))
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
      i = t.compassClassName !== void 0 ? t.compassClassName : 'ol-compass'
    ;((this.label_ = null),
      typeof n == 'string'
        ? ((this.label_ = document.createElement('span')),
          (this.label_.className = i),
          (this.label_.textContent = n))
        : ((this.label_ = n), this.label_.classList.add(i)))
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
      const i = 'rotate(' + n + 'rad)'
      if (this.autoHide_) {
        const r = this.element.classList.contains(Hi)
        !r && n === 0 ? this.element.classList.add(Hi) : r && n !== 0 && this.element.classList.remove(Hi)
      }
      this.label_.style.transform = i
    }
    this.rotation_ = n
  }
}
class Ud extends vo {
  constructor(t) {
    ;((t = t || {}), super({ element: document.createElement('div'), target: t.target }))
    const e = t.className !== void 0 ? t.className : 'ol-zoom',
      n = t.delta !== void 0 ? t.delta : 1,
      i = t.zoomInClassName !== void 0 ? t.zoomInClassName : e + '-in',
      r = t.zoomOutClassName !== void 0 ? t.zoomOutClassName : e + '-out',
      o = t.zoomInLabel !== void 0 ? t.zoomInLabel : '+',
      a = t.zoomOutLabel !== void 0 ? t.zoomOutLabel : '–',
      l = t.zoomInTipLabel !== void 0 ? t.zoomInTipLabel : 'Zoom in',
      h = t.zoomOutTipLabel !== void 0 ? t.zoomOutTipLabel : 'Zoom out',
      c = document.createElement('button')
    ;((c.className = i),
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
    const i = n.getZoom()
    if (i !== void 0) {
      const r = n.getConstrainedZoom(i + t)
      this.duration_ > 0
        ? (n.getAnimating() && n.cancelAnimations(),
          n.animate({ zoom: r, duration: this.duration_, easing: $n }))
        : n.setZoom(r)
    }
  }
}
function Zd(s) {
  s = s || {}
  const t = new fe()
  return (
    (s.zoom !== void 0 ? s.zoom : !0) && t.push(new Ud(s.zoomOptions)),
    (s.rotate !== void 0 ? s.rotate : !0) && t.push(new Vd(s.rotateOptions)),
    (s.attribution !== void 0 ? s.attribution : !0) && t.push(new Bd(s.attributionOptions)),
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
function Kd(s, t, e) {
  const n = s.getCenterInternal()
  if (n) {
    const i = [n[0] + t[0], n[1] + t[1]]
    s.animateInternal({ duration: e !== void 0 ? e : 250, easing: Td, center: s.getConstrainedCenter(i) })
  }
}
function Io(s, t, e, n) {
  const i = s.getZoom()
  if (i === void 0) return
  const r = s.getConstrainedZoom(i + t),
    o = s.getResolutionForZoom(r)
  ;(s.getAnimating() && s.cancelAnimations(),
    s.animate({ resolution: o, anchor: e, duration: n !== void 0 ? n : 250, easing: $n }))
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
        i = t.map,
        r = t.coordinate,
        o = n.shiftKey ? -this.delta_ : this.delta_,
        a = i.getView()
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
function Mo(s) {
  const t = s.length
  let e = 0,
    n = 0
  for (let i = 0; i < t; i++) ((e += s[i].clientX), (n += s[i].clientY))
  return { clientX: e / t, clientY: n / t }
}
function Vr(s) {
  const t = arguments
  return function (e) {
    let n = !0
    for (let i = 0, r = t.length; i < r && ((n = n && t[i](e)), !!n); ++i);
    return n
  }
}
const qd = function (s) {
    const t = s.originalEvent
    return t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  Hd = function (s) {
    const t = s.map.getTargetElement(),
      e = s.map.getOwnerDocument().activeElement
    return t.contains(e)
  },
  Th = function (s) {
    return s.map.getTargetElement().hasAttribute('tabindex') ? Hd(s) : !0
  },
  Jd = ws,
  Sh = function (s) {
    const t = s.originalEvent
    return t.button == 0 && !(qc && Gl && t.ctrlKey)
  },
  vh = function (s) {
    const t = s.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  Qd = function (s) {
    const t = s.originalEvent
    return Gl ? t.metaKey : t.ctrlKey
  },
  tf = function (s) {
    const t = s.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  Ih = function (s) {
    const t = s.originalEvent,
      e = t.target.tagName
    return e !== 'INPUT' && e !== 'SELECT' && e !== 'TEXTAREA' && !t.target.isContentEditable
  },
  fr = function (s) {
    const t = s.originalEvent
    return ($(t !== void 0, 56), t.pointerType == 'mouse')
  },
  ef = function (s) {
    const t = s.originalEvent
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
      i = e.getEventPixel(Mo(n))
    if (n.length == this.lastPointersCount_) {
      if ((this.kinetic_ && this.kinetic_.update(i[0], i[1]), this.lastCentroid)) {
        const r = [this.lastCentroid[0] - i[0], i[1] - this.lastCentroid[1]],
          a = t.map.getView()
        ;(wu(r, a.getResolution()), fo(r, a.getRotation()), a.adjustCenterInternal(r))
      }
    } else this.kinetic_ && this.kinetic_.begin()
    ;((this.lastCentroid = i), (this.lastPointersCount_ = n.length), t.originalEvent.preventDefault())
  }
  handleUpEvent(t) {
    const e = t.map,
      n = e.getView()
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const i = this.kinetic_.getDistance(),
          r = this.kinetic_.getAngle(),
          o = n.getCenterInternal(),
          a = e.getPixelFromCoordinateInternal(o),
          l = e.getCoordinateFromPixelInternal([a[0] - i * Math.cos(r), a[1] - i * Math.sin(r)])
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
    const i = e.getSize(),
      r = t.pixel,
      o = Math.atan2(i[1] / 2 - r[1], r[0] - i[0] / 2)
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
      i = this.element_.style
    ;((i.left = Math.min(t[0], e[0]) + n),
      (i.top = Math.min(t[1], e[1]) + n),
      (i.width = Math.abs(e[0] - t[0]) + n),
      (i.height = Math.abs(e[1] - t[1]) + n))
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
      i = [t, [t[0], e[1]], e, [e[0], t[1]]].map(this.map_.getCoordinateFromPixelInternal, this.map_)
    ;((i[4] = i[0].slice()),
      this.geometry_ ? this.geometry_.setCoordinates([i]) : (this.geometry_ = new ch([i])))
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
    const i = n[0] - e[0],
      r = n[1] - e[1]
    return i * i + r * r >= this.minArea_
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
    let i = this.getGeometry()
    if (this.out_) {
      const r = n.rotatedExtentForGeometry(i),
        o = n.getResolutionForExtentInternal(r),
        a = n.getResolution() / o
      ;((i = i.clone()), i.scale(a * a))
    }
    n.fitInternal(i, { duration: this.duration_, easing: $n })
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
        i = n.key
      if (this.condition_(t) && (i == Ue.DOWN || i == Ue.LEFT || i == Ue.RIGHT || i == Ue.UP)) {
        const o = t.map.getView(),
          a = o.getResolution() * this.pixelDelta_
        let l = 0,
          h = 0
        i == Ue.DOWN ? (h = -a) : i == Ue.LEFT ? (l = -a) : i == Ue.RIGHT ? (l = a) : (h = a)
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
        i = n.key
      if (this.condition_(t) && (i === '+' || i === '-')) {
        const r = t.map,
          o = i === '+' ? this.delta_ : -this.delta_,
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
      i = t.originalEvent
    ;(i.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.coordinate))
    let r
    if (
      (t.type == j.WHEEL &&
        ((r = i.deltaY),
        Kc && i.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (r /= Xl),
        i.deltaMode === WheelEvent.DOM_DELTA_LINE && (r *= 40)),
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
      i = this.targetPointers[1],
      r = Math.atan2(i.clientY - n.clientY, i.clientX - n.clientX)
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
      i = this.targetPointers[1],
      r = n.clientX - i.clientX,
      o = n.clientY - i.clientY,
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
        i = this.lastScaleDelta_ > 1 ? 1 : -1
      return (n.endInteraction(this.duration_, i), !1)
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
function ff(s) {
  s = s || {}
  const t = new fe(),
    e = new kd(-0.005, 0.05, 100)
  return (
    (s.altShiftDragRotate !== void 0 ? s.altShiftDragRotate : !0) && t.push(new sf()),
    (s.doubleClickZoom !== void 0 ? s.doubleClickZoom : !0) &&
      t.push(new $d({ delta: s.zoomDelta, duration: s.zoomDuration })),
    (s.dragPan !== void 0 ? s.dragPan : !0) && t.push(new nf({ onFocusOnly: s.onFocusOnly, kinetic: e })),
    (s.pinchRotate !== void 0 ? s.pinchRotate : !0) && t.push(new uf()),
    (s.pinchZoom !== void 0 ? s.pinchZoom : !0) && t.push(new df({ duration: s.zoomDuration })),
    (s.keyboard !== void 0 ? s.keyboard : !0) &&
      (t.push(new lf()), t.push(new hf({ delta: s.zoomDelta, duration: s.zoomDuration }))),
    (s.mouseWheelZoom !== void 0 ? s.mouseWheelZoom : !0) &&
      t.push(new cf({ onFocusOnly: s.onFocusOnly, duration: s.zoomDuration })),
    (s.shiftDragZoom !== void 0 ? s.shiftDragZoom : !0) && t.push(new af({ duration: s.zoomDuration })),
    t
  )
}
function Mh(s) {
  if (s instanceof To) {
    s.setMapInternal(null)
    return
  }
  s instanceof qn && s.getLayers().forEach(Mh)
}
function bh(s, t) {
  if (s instanceof To) {
    s.setMapInternal(t)
    return
  }
  if (s instanceof qn) {
    const e = s.getLayers().getArray()
    for (let n = 0, i = e.length; n < i; ++n) bh(e[n], t)
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
      t.view.then(function (i) {
        n.setView(new Jt(i))
      }),
      this.controls.addEventListener(kt.ADD, i => {
        i.element.setMap(this)
      }),
      this.controls.addEventListener(kt.REMOVE, i => {
        i.element.setMap(null)
      }),
      this.interactions.addEventListener(kt.ADD, i => {
        i.element.setMap(this)
      }),
      this.interactions.addEventListener(kt.REMOVE, i => {
        i.element.setMap(null)
      }),
      this.overlays_.addEventListener(kt.ADD, i => {
        this.addOverlayInternal_(i.element)
      }),
      this.overlays_.addEventListener(kt.REMOVE, i => {
        const r = i.element.getId()
        ;(r !== void 0 && delete this.overlayIdIndex_[r.toString()], i.element.setMap(null))
      }),
      this.controls.forEach(i => {
        i.setMap(this)
      }),
      this.interactions.forEach(i => {
        i.setMap(this)
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
    const i = this.getCoordinateFromPixelInternal(t)
    n = n !== void 0 ? n : {}
    const r = n.hitTolerance !== void 0 ? n.hitTolerance : 0,
      o = n.layerFilter !== void 0 ? n.layerFilter : ws,
      a = n.checkWrapped !== !1
    return this.renderer_.forEachFeatureAtCoordinate(i, this.frameState_, r, a, e, null, o, null)
  }
  getFeaturesAtPixel(t, e) {
    const n = []
    return (
      this.forEachFeatureAtPixel(
        t,
        function (i) {
          n.push(i)
        },
        e,
      ),
      n
    )
  }
  getAllLayers() {
    const t = []
    function e(n) {
      n.forEach(function (i) {
        i instanceof qn ? e(i.getLayers()) : t.push(i)
      })
    }
    return (e(this.getLayers()), t)
  }
  hasFeatureAtPixel(t, e) {
    if (!this.frameState_ || !this.renderer_) return !1
    const n = this.getCoordinateFromPixelInternal(t)
    e = e !== void 0 ? e : {}
    const i = e.layerFilter !== void 0 ? e.layerFilter : ws,
      r = e.hitTolerance !== void 0 ? e.hitTolerance : 0,
      o = e.checkWrapped !== !1
    return this.renderer_.hasFeatureAtCoordinate(n, this.frameState_, r, o, i, null)
  }
  getEventCoordinate(t) {
    return this.getCoordinateFromPixel(this.getEventPixel(t))
  }
  getEventCoordinateInternal(t) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(t))
  }
  getEventPixel(t) {
    const n = this.viewport_.getBoundingClientRect(),
      i = this.getSize(),
      r = n.width / i[0],
      o = n.height / i[1],
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
    return e ? At(e.pixelToCoordinateTransform, t.slice()) : null
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
      const i = t[e]
      if (!i.visible) continue
      const r = i.layer.getRenderer()
      if (r && !r.ready) return !0
      const o = i.layer.getSource()
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
    return e ? At(e.coordinateToPixelTransform, t.slice(0, 2)) : null
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
  getTilePriority(t, e, n, i) {
    return Yd(this.frameState_, t, e, n, i)
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
      const i = this.getOwnerDocument(),
        r = this.viewport_.getRootNode ? this.viewport_.getRootNode() : i,
        o = e.target
      if (this.overlayContainerStopEvent_.contains(o) || !(r === i ? i.documentElement : r).contains(o))
        return
    }
    if (((t.frameState = this.frameState_), this.dispatchEvent(t) !== !1)) {
      const i = this.getInteractions().getArray().slice()
      for (let r = i.length - 1; r >= 0; r--) {
        const o = i[r]
        if (o.getMap() !== this || !o.getActive() || !this.getTargetElement()) continue
        if (!o.handleEvent(t) || t.propagationStopped) break
      }
    }
  }
  handlePostRender() {
    const t = this.frameState_,
      e = this.tileQueue_
    if (!e.isEmpty()) {
      let i = this.maxTilesLoading_,
        r = i
      if (t) {
        const o = t.viewHints
        if (o[Ot.ANIMATING] || o[Ot.INTERACTING]) {
          const a = Date.now() - t.time > 8
          ;((i = a ? 0 : 8), (r = a ? 0 : 2))
        }
      }
      e.getTilesLoading() < i && (e.reprioritize(), e.loadMoreTiles(i, r))
    }
    t &&
      this.renderer_ &&
      !t.animate &&
      (this.renderComplete_ === !0
        ? (this.hasListener(De.RENDERCOMPLETE) && this.renderer_.dispatchRenderEvent(De.RENDERCOMPLETE, t),
          this.loaded_ === !1 && ((this.loaded_ = !0), this.dispatchEvent(new Sn(Le.LOADEND, this, t))))
        : this.loaded_ === !0 && ((this.loaded_ = !1), this.dispatchEvent(new Sn(Le.LOADSTART, this, t))))
    const n = this.postRenderFunctions_
    for (let i = 0, r = n.length; i < r; ++i) n[i](this, t)
    n.length = 0
  }
  handleSizeChanged_() {
    ;(this.getView() && !this.getView().getAnimating() && this.getView().resolveConstraints(0), this.render())
  }
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let n = 0, i = this.targetChangeHandlerKeys_.length; n < i; ++n)
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
      const i = e.getRootNode()
      ;(i instanceof ShadowRoot && this.resizeObserver_.observe(i.host), this.resizeObserver_.observe(e))
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
      const i = t[e].layer
      i.hasRenderer() && i.getRenderer().handleFontsChanged()
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
      i = this.frameState_
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
        i &&
          (!this.previousExtent_ || (!qs(this.previousExtent_) && !Ar(r.extent, this.previousExtent_))) &&
          (this.dispatchEvent(new Sn(Le.MOVESTART, this, i)),
          (this.previousExtent_ = Us(this.previousExtent_))),
        this.previousExtent_ &&
          !r.viewHints[Ot.ANIMATING] &&
          !r.viewHints[Ot.INTERACTING] &&
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
      const i = getComputedStyle(t),
        r =
          t.offsetWidth -
          parseFloat(i.borderLeftWidth) -
          parseFloat(i.paddingLeft) -
          parseFloat(i.paddingRight) -
          parseFloat(i.borderRightWidth),
        o =
          t.offsetHeight -
          parseFloat(i.borderTopWidth) -
          parseFloat(i.paddingTop) -
          parseFloat(i.paddingBottom) -
          parseFloat(i.borderBottomWidth)
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
function _f(s) {
  let t = null
  s.keyboardEventTarget !== void 0 &&
    (t =
      typeof s.keyboardEventTarget == 'string'
        ? document.getElementById(s.keyboardEventTarget)
        : s.keyboardEventTarget)
  const e = {},
    n = s.layers && typeof s.layers.getLayers == 'function' ? s.layers : new qn({ layers: s.layers })
  ;((e[dt.LAYERGROUP] = n),
    (e[dt.TARGET] = s.target),
    (e[dt.VIEW] = s.view instanceof Jt ? s.view : new Jt()))
  let i
  s.controls !== void 0 &&
    (Array.isArray(s.controls)
      ? (i = new fe(s.controls.slice()))
      : ($(typeof s.controls.getArray == 'function', 47), (i = s.controls)))
  let r
  s.interactions !== void 0 &&
    (Array.isArray(s.interactions)
      ? (r = new fe(s.interactions.slice()))
      : ($(typeof s.interactions.getArray == 'function', 48), (r = s.interactions)))
  let o
  return (
    s.overlays !== void 0
      ? Array.isArray(s.overlays)
        ? (o = new fe(s.overlays.slice()))
        : ($(typeof s.overlays.getArray == 'function', 49), (o = s.overlays))
      : (o = new fe()),
    { controls: i, interactions: r, keyboardEventTarget: t, overlays: o, values: e }
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
function Ga(s, t, e, n) {
  return n !== void 0 ? ((n[0] = s), (n[1] = t), (n[2] = e), n) : [s, t, e]
}
function Js(s, t, e) {
  return s + '/' + t + '/' + e
}
function Ph(s) {
  return Js(s[0], s[1], s[2])
}
function pf(s) {
  return s.split('/').map(Number)
}
function yf(s) {
  return (s[1] << s[0]) + s[2]
}
function xf(s, t) {
  const e = s[0],
    n = s[1],
    i = s[2]
  if (t.getMinZoom() > e || e > t.getMaxZoom()) return !1
  const r = t.getFullTileRange(e)
  return r ? r.containsXY(n, i) : !0
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
    this.forEach(i => {
      i.tileCoord[0] !== n && (this.remove(Ph(i.tileCoord)), i.release())
    })
  }
}
class bo {
  constructor(t, e, n, i) {
    ;((this.minX = t), (this.maxX = e), (this.minY = n), (this.maxY = i))
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
function yn(s, t, e, n, i) {
  return i !== void 0 ? ((i.minX = s), (i.maxX = t), (i.minY = e), (i.maxY = n), i) : new bo(s, t, e, n)
}
const Ef = 0.5,
  Cf = 10,
  Xa = 0.25
class wf {
  constructor(t, e, n, i, r, o) {
    ;((this.sourceProj_ = t), (this.targetProj_ = e))
    let a = {}
    const l = Is(this.targetProj_, this.sourceProj_)
    ;((this.transformInv_ = function (y) {
      const x = y[0] + '/' + y[1]
      return (a[x] || (a[x] = l(y)), a[x])
    }),
      (this.maxSourceExtent_ = i),
      (this.errorThresholdSquared_ = r * r),
      (this.triangles_ = []),
      (this.wrapsXInSource_ = !1),
      (this.canWrapXInSource_ =
        this.sourceProj_.canWrapX() &&
        !!i &&
        !!this.sourceProj_.getExtent() &&
        rt(i) >= rt(this.sourceProj_.getExtent())),
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
  addTriangle_(t, e, n, i, r, o) {
    this.triangles_.push({ source: [i, r, o], target: [t, e, n] })
  }
  addQuad_(t, e, n, i, r, o, a, l, h) {
    const c = ha([r, o, a, l]),
      u = this.sourceWorldWidth_ ? rt(c) / this.sourceWorldWidth_ : null,
      d = this.sourceWorldWidth_,
      f = this.sourceProj_.canWrapX() && u > 0.5 && u < 1
    let g = !1
    if (h > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const m = ha([t, e, n, i])
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
            y = [(i[0] + t[0]) / 2, (i[1] + t[1]) / 2],
            x = this.transformInv_(y)
          ;(this.addQuad_(t, e, m, y, r, o, p, x, h - 1), this.addQuad_(y, m, n, i, x, p, a, l, h - 1))
        } else {
          const m = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2],
            p = this.transformInv_(m),
            y = [(n[0] + i[0]) / 2, (n[1] + i[1]) / 2],
            x = this.transformInv_(y)
          ;(this.addQuad_(t, m, y, i, r, p, x, l, h - 1), this.addQuad_(m, e, n, y, p, o, a, x, h - 1))
        }
        return
      }
    }
    if (f) {
      if (!this.canWrapXInSource_) return
      this.wrapsXInSource_ = !0
    }
    ;((_ & 11) == 0 && this.addTriangle_(t, n, i, r, a, l),
      (_ & 14) == 0 && this.addTriangle_(t, n, e, r, a, o),
      _ &&
        ((_ & 13) == 0 && this.addTriangle_(e, i, t, o, l, r),
        (_ & 7) == 0 && this.addTriangle_(e, i, n, o, l, a)))
  }
  calculateSourceExtent() {
    const t = on()
    return (
      this.triangles_.forEach(function (e, n, i) {
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
function za(s, t, e, n, i) {
  ;(s.beginPath(),
    s.moveTo(0, 0),
    s.lineTo(t, e),
    s.lineTo(n, i),
    s.closePath(),
    s.save(),
    s.clip(),
    s.fillRect(0, 0, Math.max(t, n) + 1, Math.max(e, i)),
    s.restore())
}
function mr(s, t) {
  return Math.abs(s[t * 4] - 210) > 2 || Math.abs(s[t * 4 + 3] - 0.75 * 255) > 2
}
function Rf() {
  if (_r === void 0) {
    const s = je(6, 6, Xn)
    ;((s.globalCompositeOperation = 'lighter'),
      (s.fillStyle = 'rgba(210, 0, 0, 0.75)'),
      za(s, 4, 5, 4, 0),
      za(s, 4, 5, 0, 5))
    const t = s.getImageData(0, 0, 3, 3).data
    ;((_r = mr(t, 0) || mr(t, 4) || mr(t, 8)), yo(s), Xn.push(s.canvas))
  }
  return _r
}
function Wa(s, t, e, n) {
  const i = Ql(e, t, s)
  let r = _a(t, n, e)
  const o = t.getMetersPerUnit()
  o !== void 0 && (r *= o)
  const a = s.getMetersPerUnit()
  a !== void 0 && (r /= a)
  const l = s.getExtent()
  if (!l || co(l, i)) {
    const h = _a(s, r, i) / r
    isFinite(h) && h > 0 && (r /= h)
  }
  return r
}
function Tf(s, t, e, n) {
  const i = gi(e)
  let r = Wa(s, t, i, n)
  return (
    (!isFinite(r) || r <= 0) &&
      Zl(e, function (o) {
        return ((r = Wa(s, t, o, n)), isFinite(r) && r > 0)
      }),
    r
  )
}
function Sf(s, t, e, n, i, r, o, a, l, h, c, u) {
  const d = je(Math.round(e * s), Math.round(e * t), Xn)
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
            $t = F - O
          for (let at = 0; at < q; at++)
            (d.lineTo(T + f(((at + 1) * Ce) / q), O + f((at * $t) / (q - 1))),
              at != q - 1 && d.lineTo(T + f(((at + 1) * Ce) / q), O + f(((at + 1) * $t) / (q - 1))))
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
  constructor(t, e, n, i, r, o, a, l, h, c, u, d) {
    ;(super(r, P.IDLE, { interpolate: !!d }),
      (this.renderEdges_ = u !== void 0 ? u : !1),
      (this.pixelRatio_ = a),
      (this.gutter_ = l),
      (this.canvas_ = null),
      (this.sourceTileGrid_ = e),
      (this.targetTileGrid_ = i),
      (this.wrappedTileCoord_ = o || r),
      (this.sourceTiles_ = []),
      (this.sourcesListenerKeys_ = null),
      (this.sourceZ_ = 0))
    const f = i.getTileCoordExtent(this.wrappedTileCoord_),
      g = this.targetTileGrid_.getExtent()
    let _ = this.sourceTileGrid_.getExtent()
    const m = g ? ci(f, g) : f
    if (Or(m) === 0) {
      this.state = P.EMPTY
      return
    }
    const p = t.getExtent()
    p && (_ ? (_ = ci(_, p)) : (_ = p))
    const y = i.getResolution(this.wrappedTileCoord_[0]),
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
        i = typeof n == 'number' ? n : n[0],
        r = typeof n == 'number' ? n : n[1],
        o = this.targetTileGrid_.getResolution(e),
        a = this.sourceTileGrid_.getResolution(this.sourceZ_),
        l = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_)
      ;((this.canvas_ = Sf(
        i,
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
            const i = U(
              e,
              j.CHANGE,
              function (r) {
                const o = e.getState()
                ;(o == P.LOADED || o == P.ERROR || o == P.EMPTY) &&
                  (et(i), t--, t === 0 && (this.unlistenSources_(), this.reproject_()))
              },
              this,
            )
            this.sourcesListenerKeys_.push(i)
          }
        }),
        t === 0
          ? setTimeout(this.reproject_.bind(this), 0)
          : this.sourceTiles_.forEach(function (e, n, i) {
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
      i = e.getUseInterimTilesOnError()
    return n == P.LOADED || n == P.EMPTY || (n == P.ERROR && !i)
  }
  getTile(t, e, n, i) {
    const r = i.pixelRatio,
      o = i.viewState.projection,
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
      i = At(e.pixelToCoordinateTransform, t.slice()),
      r = n.getExtent()
    if (r && !co(r, i)) return null
    const o = e.pixelRatio,
      a = e.viewState.projection,
      l = e.viewState,
      h = n.getRenderSource(),
      c = h.getTileGridForProjection(l.projection),
      u = h.getTilePixelRatio(e.pixelRatio)
    for (let d = c.getZForResolution(l.resolution); d >= c.getMinZoom(); --d) {
      const f = c.getTileCoordForCoordAndZ(i, d),
        g = h.getTile(d, f[1], f[2], o, a)
      if (!(g instanceof Rh || g instanceof Ur) || (g instanceof Ur && g.getState() === P.EMPTY)) return null
      if (g.getState() !== P.LOADED) continue
      const _ = c.getOrigin(d),
        m = te(c.getTileSize(d)),
        p = c.getResolution(d),
        y = Math.floor(u * ((i[0] - _[0]) / p - f[1] * m[0])),
        x = Math.floor(u * ((_[1] - i[1]) / p - f[2] * m[1])),
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
      i = t.viewState,
      r = i.projection,
      o = i.resolution,
      a = i.center,
      l = i.rotation,
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
    const nt = l ? kr(i.center, p, l, t.size) : void 0
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
        let $t = !1
        ;(Ce && ($t = G(g + 1, Ce)), $t || f.forEachTileCoordParentTileRange(q.tileCoord, G, D, N))
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
        $t = f.getResolution(W) / _,
        at = q[0] * $t * I,
        oe = q[1] * $t * I,
        cn = f.getTileCoordForCoordAndZ(an(S), W),
        Gi = f.getTileCoordExtent(cn),
        un = At(this.tempTransform, [(y * (Gi[0] - S[0])) / _, (y * (S[3] - Gi[3])) / _]),
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
          zt = Yi - yt,
          ae = or - Pt,
          fn = g === W,
          Be = fn && Re.getAlpha(Ct(this), t.time) !== 1
        let Te = !1
        if (!Be)
          if (Y) {
            w = [yt, Pt, yt + zt, Pt, yt + zt, Pt + ae, yt, Pt + ae]
            for (let gn = 0, Bi = Y.length; gn < Bi; ++gn)
              if (g !== W && W < it[gn]) {
                const ft = Y[gn]
                bi([yt, Pt, yt + zt, Pt + ae], [ft[0], ft[3], ft[4], ft[7]]) &&
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
          } else T.clearRect(yt, Pt, zt, ae)
        ;(this.drawTileImage(Re, t, yt, Pt, zt, ae, Xi, fn),
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
  drawTileImage(t, e, n, i, r, o, a, l) {
    const h = this.getTileImage(t)
    if (!h) return
    const c = Ct(this),
      u = e.layerStatesArray[e.layerIndex],
      d = u.opacity * (l ? t.getAlpha(c, e.time) : 1),
      f = d !== this.context.globalAlpha
    ;(f && (this.context.save(), (this.context.globalAlpha = d)),
      this.context.drawImage(h, a, a, h.width - 2 * a, h.height - 2 * a, n, i, r, o),
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
      const n = function (i, r, o) {
        const a = Ct(i)
        a in o.usedTiles && i.expireCache(o.viewState.projection, o.usedTiles[a])
      }.bind(null, e)
      t.postRenderFunctions.push(n)
    }
  }
  updateUsedTiles(t, e, n) {
    const i = Ct(e)
    ;(i in t || (t[i] = {}), (t[i][n.getKey()] = !0))
  }
  manageTilePyramid(t, e, n, i, r, o, a, l, h) {
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
                (p = e.getTile(R, E, C, i, r)),
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
        Yc(this.resolutions_, function (i, r) {
          return r - i
        }),
        17,
      ))
    let e
    if (!t.origins) {
      for (let i = 0, r = this.resolutions_.length - 1; i < r; ++i)
        if (!e) e = this.resolutions_[i] / this.resolutions_[i + 1]
        else if (this.resolutions_[i] / this.resolutions_[i + 1] !== e) {
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
        ? (this.fullTileRanges_ = t.sizes.map(function (i, r) {
            const o = new bo(
              Math.min(0, i[0]),
              Math.max(i[0] - 1, -1),
              Math.min(0, i[1]),
              Math.max(i[1] - 1, -1),
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
    const i = this.getTileRangeForExtentAndZ(t, e)
    for (let r = i.minX, o = i.maxX; r <= o; ++r) for (let a = i.minY, l = i.maxY; a <= l; ++a) n([e, r, a])
  }
  forEachTileCoordParentTileRange(t, e, n, i) {
    let r,
      o,
      a,
      l = null,
      h = t[0] - 1
    for (
      this.zoomFactor_ === 2 ? ((o = t[1]), (a = t[2])) : (l = this.getTileCoordExtent(t, i));
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
      const i = this.getTileCoordExtent(t, n || this.tmpExtent_)
      return this.getTileRangeForExtentAndZ(i, t[0] + 1, e)
    }
    return null
  }
  getTileRangeForTileCoordAndZ(t, e, n) {
    if (e > this.maxZoom || e < this.minZoom) return null
    const i = t[0],
      r = t[1],
      o = t[2]
    if (e === i) return yn(r, o, r, o, n)
    if (this.zoomFactor_) {
      const l = Math.pow(this.zoomFactor_, e - i),
        h = Math.floor(r * l),
        c = Math.floor(o * l)
      if (e < i) return yn(h, h, c, c, n)
      const u = Math.floor(l * (r + 1)) - 1,
        d = Math.floor(l * (o + 1)) - 1
      return yn(h, u, c, d, n)
    }
    const a = this.getTileCoordExtent(t, this.tmpExtent_)
    return this.getTileRangeForExtentAndZ(a, e, n)
  }
  getTileRangeForExtentAndZ(t, e, n) {
    this.getTileCoordForXYAndZ_(t[0], t[3], e, !1, xn)
    const i = xn[1],
      r = xn[2]
    this.getTileCoordForXYAndZ_(t[2], t[1], e, !0, xn)
    const o = xn[1],
      a = xn[2]
    return yn(i, o, r, a, n)
  }
  getTileCoordCenter(t) {
    const e = this.getOrigin(t[0]),
      n = this.getResolution(t[0]),
      i = te(this.getTileSize(t[0]), this.tmpSize_)
    return [e[0] + (t[1] + 0.5) * i[0] * n, e[1] - (t[2] + 0.5) * i[1] * n]
  }
  getTileCoordExtent(t, e) {
    const n = this.getOrigin(t[0]),
      i = this.getResolution(t[0]),
      r = te(this.getTileSize(t[0]), this.tmpSize_),
      o = n[0] + t[1] * r[0] * i,
      a = n[1] - (t[2] + 1) * r[1] * i,
      l = o + r[0] * i,
      h = a + r[1] * i
    return Mi(o, a, l, h, e)
  }
  getTileCoordForCoordAndResolution(t, e, n) {
    return this.getTileCoordForXYAndResolution_(t[0], t[1], e, !1, n)
  }
  getTileCoordForXYAndResolution_(t, e, n, i, r) {
    const o = this.getZForResolution(n),
      a = n / this.getResolution(o),
      l = this.getOrigin(o),
      h = te(this.getTileSize(o), this.tmpSize_)
    let c = (a * (t - l[0])) / n / h[0],
      u = (a * (l[1] - e)) / n / h[1]
    return (
      i ? ((c = qi(c, Se) - 1), (u = qi(u, Se) - 1)) : ((c = $i(c, Se)), (u = $i(u, Se))),
      Ga(o, c, u, r)
    )
  }
  getTileCoordForXYAndZ_(t, e, n, i, r) {
    const o = this.getOrigin(n),
      a = this.getResolution(n),
      l = te(this.getTileSize(n), this.tmpSize_)
    let h = (t - o[0]) / a / l[0],
      c = (o[1] - e) / a / l[1]
    return (
      i ? ((h = qi(h, Se) - 1), (c = qi(c, Se) - 1)) : ((h = $i(h, Se)), (c = $i(c, Se))),
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
    for (let i = this.minZoom; i < e; ++i) n[i] = this.getTileRangeForExtentAndZ(t, i)
    this.fullTileRanges_ = n
  }
}
const pr = { TILELOADSTART: 'tileloadstart', TILELOADEND: 'tileloadend', TILELOADERROR: 'tileloaderror' }
function Ah(s) {
  let t = s.getDefaultTileGrid()
  return (t || ((t = Pf(s)), s.setDefaultTileGrid(t)), t)
}
function If(s, t, e) {
  const n = t[0],
    i = s.getTileCoordCenter(t),
    r = Po(e)
  if (!co(r, i)) {
    const o = rt(r),
      a = Math.ceil((r[0] - i[0]) / o)
    return ((i[0] += o * a), s.getTileCoordForCoordAndZ(i, n))
  }
  return t
}
function Mf(s, t, e, n) {
  n = n !== void 0 ? n : 'top-left'
  const i = Oh(s, t, e)
  return new Fh({ extent: s, origin: ou(s, n), resolutions: i, tileSize: e })
}
function bf(s) {
  const t = s || {},
    e = t.extent || Zt('EPSG:3857').getExtent(),
    n = {
      extent: e,
      minZoom: t.minZoom,
      tileSize: t.tileSize,
      resolutions: Oh(e, t.maxZoom, t.tileSize, t.maxResolution),
    }
  return new Fh(n)
}
function Oh(s, t, e, n) {
  ;((t = t !== void 0 ? t : pd), (e = te(e !== void 0 ? e : Eo)))
  const i = se(s),
    r = rt(s)
  n = n > 0 ? n : Math.max(r / e[0], i / e[1])
  const o = t + 1,
    a = new Array(o)
  for (let l = 0; l < o; ++l) a[l] = n / Math.pow(2, l)
  return a
}
function Pf(s, t, e, n) {
  const i = Po(s)
  return Mf(i, t, e, n)
}
function Po(s) {
  s = Zt(s)
  let t = s.getExtent()
  if (!t) {
    const e = (180 * uo.degrees) / s.getMetersPerUnit()
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
  forEachLoadedTile(t, e, n, i) {
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
          r.containsKey(l) && ((a = r.get(l)), (h = a.getState() === P.LOADED), h && (h = i(a) !== !1)),
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
  getTile(t, e, n, i, r) {
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
    const i = this.getTileGridForProjection(n),
      r = this.getTilePixelRatio(e),
      o = te(i.getTileSize(t), this.tmpSize)
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
  useTile(t, e, n, i) {}
}
class Ff extends We {
  constructor(t, e) {
    ;(super(t), (this.tile = e))
  }
}
function Af(s, t) {
  const e = /\{z\}/g,
    n = /\{x\}/g,
    i = /\{y\}/g,
    r = /\{-y\}/g
  return function (o, a, l) {
    if (o)
      return s
        .replace(e, o[0].toString())
        .replace(n, o[1].toString())
        .replace(i, o[2].toString())
        .replace(r, function () {
          const h = o[0],
            c = t.getFullTileRange(h)
          return ($(c, 55), (c.getHeight() - o[2] - 1).toString())
        })
  }
}
function Of(s, t) {
  const e = s.length,
    n = new Array(e)
  for (let i = 0; i < e; ++i) n[i] = Af(s[i], t)
  return Df(n)
}
function Df(s) {
  return s.length === 1
    ? s[0]
    : function (t, e, n) {
        if (!t) return
        const i = yf(t),
          r = Gn(i, s.length)
        return s[r](t, e, n)
      }
}
function kf(s) {
  const t = []
  let e = /\{([a-z])-([a-z])\}/.exec(s)
  if (e) {
    const n = e[1].charCodeAt(0),
      i = e[2].charCodeAt(0)
    let r
    for (r = n; r <= i; ++r) t.push(s.replace(e[0], String.fromCharCode(r)))
    return t
  }
  if (((e = /\{(\d+)-(\d+)\}/.exec(s)), e)) {
    const n = parseInt(e[2], 10)
    for (let i = parseInt(e[1], 10); i <= n; i++) t.push(s.replace(e[0], i.toString()))
    return t
  }
  return (t.push(s), t)
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
      i = e.getState()
    let r
    ;(i == P.LOADING
      ? ((this.tileLoadingKeys_[n] = !0), (r = pr.TILELOADSTART))
      : n in this.tileLoadingKeys_ &&
        (delete this.tileLoadingKeys_[n],
        (r = i == P.ERROR ? pr.TILELOADERROR : i == P.LOADED ? pr.TILELOADEND : void 0)),
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
    const i = Js(t, e, n)
    this.tileCache.containsKey(i) && this.tileCache.get(i)
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
    for (const i in this.tileCacheForProjection) {
      const r = this.tileCacheForProjection[i]
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
  createTile_(t, e, n, i, r, o) {
    const a = [t, e, n],
      l = this.getTileCoordForTileUrlFunction(a, r),
      h = l ? this.tileUrlFunction(l, i, r) : void 0,
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
  getTile(t, e, n, i, r) {
    const o = this.getProjection()
    if (!o || !r || Rn(o, r)) return this.getTileInternal(t, e, n, i, o || r)
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
        this.getTilePixelRatio(i),
        this.getGutter(),
        (m, p, y, x) => this.getTileInternal(m, p, y, x, o),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.getInterpolate(),
      )
    return ((_.key = u), h ? ((_.interimTile = h), _.refreshInterimChain(), a.replace(c, _)) : a.set(c, _), _)
  }
  getTileInternal(t, e, n, i, r) {
    let o = null
    const a = Js(t, e, n),
      l = this.getKey()
    if (!this.tileCache.containsKey(a)) ((o = this.createTile_(t, e, n, i, r, l)), this.tileCache.set(a, o))
    else if (((o = this.tileCache.get(a)), o.key != l)) {
      const h = o
      ;((o = this.createTile_(t, e, n, i, r, l)),
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
    const n = Zt(t)
    if (n) {
      const i = Ct(n)
      i in this.tileGridForProjection || (this.tileGridForProjection[i] = e)
    }
  }
  clear() {
    super.clear()
    for (const t in this.tileCacheForProjection) this.tileCacheForProjection[t].clear()
  }
}
function Xf(s, t) {
  s.getImage().src = t
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
      i = t.url !== void 0 ? t.url : 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
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
      url: i,
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
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;ol-geom-editor/index.css&#x27;</span>

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
<p><code>addFeatureFromWKT(wkt:string, id?:string, dataProjection?:string | FeatureOptions)</code></p>
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
<p><code>addFeatureFromJSON(JSON:string | geoJSONObj, dataProjection?:string | FeatureOptions)</code></p>
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
<p>All features will reset original status.</p>
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
  Vf = '1.0.3',
  Uf = {
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
    const e = Uf[t]
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
class Zf {
  constructor() {
    this.disposed = !1
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal())
  }
  disposeInternal() {}
}
function Kf(s, t, e) {
  let n, i
  e = e || _i
  let r = 0,
    o = s.length,
    a = !1
  for (; r < o; ) ((n = r + ((o - r) >> 1)), (i = +e(s[n], t)), i < 0 ? (r = n + 1) : ((o = n), (a = !i)))
  return a ? r : ~r
}
function _i(s, t) {
  return s > t ? 1 : s < t ? -1 : 0
}
function Nh(s, t, e) {
  if (s[0] <= t) return 0
  const n = s.length
  if (t <= s[n - 1]) return n - 1
  if (typeof e == 'function') {
    for (let i = 1; i < n; ++i) {
      const r = s[i]
      if (r === t) return i
      if (r < t) return e(t, s[i - 1], r) > 0 ? i - 1 : i
    }
    return n - 1
  }
  if (e > 0) {
    for (let i = 1; i < n; ++i) if (s[i] < t) return i - 1
    return n - 1
  }
  if (e < 0) {
    for (let i = 1; i < n; ++i) if (s[i] <= t) return i
    return n - 1
  }
  for (let i = 1; i < n; ++i) {
    if (s[i] == t) return i
    if (s[i] < t) return s[i - 1] - t < t - s[i] ? i - 1 : i
  }
  return n - 1
}
function $f(s, t, e) {
  for (; t < e; ) {
    const n = s[t]
    ;((s[t] = s[e]), (s[e] = n), ++t, --e)
  }
}
function ie(s, t) {
  const e = Array.isArray(t) ? t : [t],
    n = e.length
  for (let i = 0; i < n; i++) s[s.length] = e[i]
}
function ln(s, t) {
  const e = s.length
  if (e !== t.length) return !1
  for (let n = 0; n < e; n++) if (s[n] !== t[n]) return !1
  return !0
}
function Bn() {
  return !0
}
function Fo() {
  return !1
}
function mi() {}
function qf(s) {
  let t = !1,
    e,
    n,
    i
  return function () {
    const r = Array.prototype.slice.call(arguments)
    return (
      (!t || this !== i || !ln(r, n)) && ((t = !0), (i = this), (n = r), (e = s.apply(this, arguments))),
      e
    )
  }
}
function Ao(s) {
  for (const t in s) delete s[t]
}
function Vn(s) {
  let t
  for (t in s) return !1
  return !t
}
class jh extends Zf {
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
      i = n[t] || (n[t] = [])
    i.includes(e) || i.push(e)
  }
  dispatchEvent(t) {
    const e = typeof t == 'string',
      n = e ? t : t.type,
      i = this.listeners_ && this.listeners_[n]
    if (!i) return
    const r = e ? new pt(t) : t
    r.target || (r.target = this.eventTarget_ || this)
    const o = this.dispatching_ || (this.dispatching_ = {}),
      a = this.pendingRemovals_ || (this.pendingRemovals_ = {})
    ;(n in o || ((o[n] = 0), (a[n] = 0)), ++o[n])
    let l
    for (let h = 0, c = i.length; h < c; ++h)
      if (
        ('handleEvent' in i[h] ? (l = i[h].handleEvent(r)) : (l = i[h].call(this, r)),
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
      const i = n.indexOf(e)
      i !== -1 &&
        (this.pendingRemovals_ && t in this.pendingRemovals_
          ? ((n[i] = mi), ++this.pendingRemovals_[t])
          : (n.splice(i, 1), n.length === 0 && delete this.listeners_[t]))
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
function _t(s, t, e, n, i) {
  if ((n && n !== s && (e = e.bind(n)), i)) {
    const o = e
    e = function () {
      ;(s.removeEventListener(t, e), o.apply(this, arguments))
    }
  }
  const r = { target: s, type: t, listener: e }
  return (s.addEventListener(t, e), r)
}
function bs(s, t, e, n) {
  return _t(s, t, e, n, !0)
}
function bt(s) {
  s && s.target && (s.target.removeEventListener(s.type, s.listener), Ao(s))
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
        i = new Array(n)
      for (let r = 0; r < n; ++r) i[r] = _t(this, t[r], e)
      return i
    }
    return _t(this, t, e)
  }
  onceInternal(t, e) {
    let n
    if (Array.isArray(t)) {
      const i = t.length
      n = new Array(i)
      for (let r = 0; r < i; ++r) n[r] = bs(this, t[r], e)
    } else n = bs(this, t, e)
    return ((e.ol_key = n), n)
  }
  unInternal(t, e) {
    const n = e.ol_key
    if (n) xs(n)
    else if (Array.isArray(t)) for (let i = 0, r = t.length; i < r; ++i) this.removeEventListener(t[i], e)
    else this.removeEventListener(t, e)
  }
}
Ai.prototype.on
Ai.prototype.once
Ai.prototype.un
function xs(s) {
  if (Array.isArray(s)) for (let t = 0, e = s.length; t < e; ++t) bt(s[t])
  else bt(s)
}
function L() {
  throw new Error('Unimplemented abstract method.')
}
let Hf = 0
function K(s) {
  return s.ol_uid || (s.ol_uid = String(++Hf))
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
    const i = this.values_ || (this.values_ = {})
    if (n) i[t] = e
    else {
      const r = i[t]
      ;((i[t] = e), r !== e && this.notify(t, r))
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
      for (let n = 0, i = this.array_.length; n < i; ++n) this.assertUnique_(this.array_[n], n)
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
    for (let n = 0, i = e.length; n < i; ++n) t(e[n], n, e)
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
    for (let n = 0, i = e.length; n < i; ++n) if (e[n] === t) return this.removeAt(n)
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
    const i = this.array_[t]
    ;((this.array_[t] = e),
      this.dispatchEvent(new es(ee.REMOVE, i, t)),
      this.dispatchEvent(new es(ee.ADD, e, t)))
  }
  updateLength_() {
    this.set(Ba.LENGTH, this.array_.length)
  }
  assertUnique_(t, e) {
    for (let n = 0, i = this.array_.length; n < i; ++n) if (this.array_[n] === t && n !== e) throw new Dh(58)
  }
}
function tt(s, t) {
  if (!s) throw new Dh(t)
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
    ;((this.style_ = t), (this.styleFunction_ = t ? Jf(t) : void 0), this.changed())
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
function Jf(s) {
  if (typeof s == 'function') return s
  let t
  return (
    Array.isArray(s) ? (t = s) : (tt(typeof s.getZIndex == 'function', 41), (t = [s])),
    function () {
      return t
    }
  )
}
const Ge = typeof navigator < 'u' && typeof navigator.userAgent < 'u' ? navigator.userAgent.toLowerCase() : ''
Ge.includes('firefox')
const Qf = Ge.includes('safari') && !Ge.includes('chrom')
Qf && (Ge.includes('version/15.4') || /cpu (os|iphone os) 15_4 like mac os x/.test(Ge))
Ge.includes('webkit') && Ge.includes('edge')
Ge.includes('macintosh')
const Oo =
    typeof WorkerGlobalScope < 'u' && typeof OffscreenCanvas < 'u' && self instanceof WorkerGlobalScope,
  tg = typeof Image < 'u' && Image.prototype.decode
;(function () {
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
function ke() {
  return [1, 0, 0, 1, 0, 0]
}
function eg(s, t, e, n, i, r, o) {
  return ((s[0] = t), (s[1] = e), (s[2] = n), (s[3] = i), (s[4] = r), (s[5] = o), s)
}
function ng(s, t) {
  return ((s[0] = t[0]), (s[1] = t[1]), (s[2] = t[2]), (s[3] = t[3]), (s[4] = t[4]), (s[5] = t[5]), s)
}
function Et(s, t) {
  const e = t[0],
    n = t[1]
  return ((t[0] = s[0] * e + s[2] * n + s[4]), (t[1] = s[1] * e + s[3] * n + s[5]), t)
}
function ig(s, t, e) {
  return eg(s, t, 0, 0, e, 0, 0)
}
function Oi(s, t, e, n, i, r, o, a) {
  const l = Math.sin(r),
    h = Math.cos(r)
  return (
    (s[0] = n * h),
    (s[1] = i * l),
    (s[2] = -n * l),
    (s[3] = i * h),
    (s[4] = o * n * h - a * n * l + t),
    (s[5] = o * i * l + a * i * h + e),
    s
  )
}
function sg(s, t) {
  const e = rg(t)
  tt(e !== 0, 32)
  const n = t[0],
    i = t[1],
    r = t[2],
    o = t[3],
    a = t[4],
    l = t[5]
  return (
    (s[0] = o / e),
    (s[1] = -i / e),
    (s[2] = -r / e),
    (s[3] = n / e),
    (s[4] = (r * l - o * a) / e),
    (s[5] = -(n * l - i * a) / e),
    s
  )
}
function rg(s) {
  return s[0] * s[3] - s[1] * s[2]
}
let Va
function og(s) {
  const t = 'matrix(' + s.join(', ') + ')'
  if (Oo) return t
  const e = Va || (Va = document.createElement('div'))
  return ((e.style.transform = t), e.style.transform)
}
const st = { UNKNOWN: 0, INTERSECTING: 1, ABOVE: 2, RIGHT: 4, BELOW: 8, LEFT: 16 }
function It(s) {
  const t = re()
  for (let e = 0, n = s.length; e < n; ++e) Wh(t, s[e])
  return t
}
function Di(s, t, e) {
  return e
    ? ((e[0] = s[0] - t), (e[1] = s[1] - t), (e[2] = s[2] + t), (e[3] = s[3] + t), e)
    : [s[0] - t, s[1] - t, s[2] + t, s[3] + t]
}
function ag(s, t) {
  return s.slice()
}
function hn(s, t, e) {
  let n, i
  return (
    t < s[0] ? (n = s[0] - t) : s[2] < t ? (n = t - s[2]) : (n = 0),
    e < s[1] ? (i = s[1] - e) : s[3] < e ? (i = e - s[3]) : (i = 0),
    n * n + i * i
  )
}
function lg(s, t) {
  return Do(s, t[0], t[1])
}
function Ln(s, t) {
  return s[0] <= t[0] && t[2] <= s[2] && s[1] <= t[1] && t[3] <= s[3]
}
function Do(s, t, e) {
  return s[0] <= t && t <= s[2] && s[1] <= e && e <= s[3]
}
function Zr(s, t) {
  const e = s[0],
    n = s[1],
    i = s[2],
    r = s[3],
    o = t[0],
    a = t[1]
  let l = st.UNKNOWN
  return (
    o < e ? (l = l | st.LEFT) : o > i && (l = l | st.RIGHT),
    a < n ? (l = l | st.BELOW) : a > r && (l = l | st.ABOVE),
    l === st.UNKNOWN && (l = st.INTERSECTING),
    l
  )
}
function re() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0]
}
function nn(s, t, e, n, i) {
  return i ? ((i[0] = s), (i[1] = t), (i[2] = e), (i[3] = n), i) : [s, t, e, n]
}
function ko(s) {
  return nn(1 / 0, 1 / 0, -1 / 0, -1 / 0, s)
}
function Es(s, t) {
  const e = s[0],
    n = s[1]
  return nn(e, n, e, n, t)
}
function Gh(s, t, e, n, i) {
  const r = ko(i)
  return Yh(r, s, t, e, n)
}
function Xh(s, t) {
  return s[0] == t[0] && s[2] == t[2] && s[1] == t[1] && s[3] == t[3]
}
function zh(s, t) {
  return (
    t[0] < s[0] && (s[0] = t[0]),
    t[2] > s[2] && (s[2] = t[2]),
    t[1] < s[1] && (s[1] = t[1]),
    t[3] > s[3] && (s[3] = t[3]),
    s
  )
}
function Wh(s, t) {
  ;(t[0] < s[0] && (s[0] = t[0]),
    t[0] > s[2] && (s[2] = t[0]),
    t[1] < s[1] && (s[1] = t[1]),
    t[1] > s[3] && (s[3] = t[1]))
}
function Yh(s, t, e, n, i) {
  for (; e < n; e += i) hg(s, t[e], t[e + 1])
  return s
}
function hg(s, t, e) {
  ;((s[0] = Math.min(s[0], t)),
    (s[1] = Math.min(s[1], e)),
    (s[2] = Math.max(s[2], t)),
    (s[3] = Math.max(s[3], e)))
}
function Bh(s, t) {
  let e
  return ((e = t(Vh(s))), e || ((e = t(Uh(s))), e) || ((e = t(Kh(s))), e) || ((e = t(Zh(s))), e) ? e : !1)
}
function Vh(s) {
  return [s[0], s[1]]
}
function Uh(s) {
  return [s[2], s[1]]
}
function Un(s) {
  return [(s[0] + s[2]) / 2, (s[1] + s[3]) / 2]
}
function cg(s, t, e, n, i) {
  const [r, o, a, l, h, c, u, d] = ug(s, t, e, n)
  return nn(Math.min(r, a, h, u), Math.min(o, l, c, d), Math.max(r, a, h, u), Math.max(o, l, c, d), i)
}
function ug(s, t, e, n) {
  const i = (t * n[0]) / 2,
    r = (t * n[1]) / 2,
    o = Math.cos(e),
    a = Math.sin(e),
    l = i * o,
    h = i * a,
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
function pi(s) {
  return s[3] - s[1]
}
function Zh(s) {
  return [s[0], s[3]]
}
function Kh(s) {
  return [s[2], s[3]]
}
function jt(s) {
  return s[2] - s[0]
}
function Nt(s, t) {
  return s[0] <= t[2] && s[2] >= t[0] && s[1] <= t[3] && s[3] >= t[1]
}
function $h(s) {
  return s[2] < s[0] || s[3] < s[1]
}
function dg(s, t) {
  return t ? ((t[0] = s[0]), (t[1] = s[1]), (t[2] = s[2]), (t[3] = s[3]), t) : s
}
function fg(s, t, e) {
  let n = !1
  const i = Zr(s, t),
    r = Zr(s, e)
  if (i === st.INTERSECTING || r === st.INTERSECTING) n = !0
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
    ;(r & st.ABOVE && !(i & st.ABOVE) && ((_ = d - (f - h) / g), (n = _ >= o && _ <= l)),
      !n && r & st.RIGHT && !(i & st.RIGHT) && ((m = f - (d - l) * g), (n = m >= a && m <= h)),
      !n && r & st.BELOW && !(i & st.BELOW) && ((_ = d - (f - a) / g), (n = _ >= o && _ <= l)),
      !n && r & st.LEFT && !(i & st.LEFT) && ((m = f - (d - o) * g), (n = m >= a && m <= h)))
  }
  return n
}
function qh(s, t) {
  const e = t.getExtent(),
    n = Un(s)
  if (t.canWrapX() && (n[0] < e[0] || n[0] >= e[2])) {
    const i = jt(e),
      o = Math.floor((n[0] - e[0]) / i) * i
    ;((s[0] -= o), (s[2] -= o))
  }
  return s
}
function gg(s, t) {
  if (t.canWrapX()) {
    const e = t.getExtent()
    if (!isFinite(s[0]) || !isFinite(s[2])) return [[e[0], s[1], e[2], s[3]]]
    qh(s, t)
    const n = jt(e)
    if (jt(s) > n) return [[e[0], s[1], e[2], s[3]]]
    if (s[0] < e[0])
      return [
        [s[0] + n, s[1], e[2], s[3]],
        [e[0], s[1], s[2], s[3]],
      ]
    if (s[2] > e[2])
      return [
        [s[0], s[1], e[2], s[3]],
        [e[0], s[1], s[2] - n, s[3]],
      ]
  }
  return [s]
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
  _g = [-Fn, -Fn, Fn, Fn],
  mg = [-180, -85, 180, 85],
  ns = ki * Math.log(Math.tan(Math.PI / 2))
class En extends Jh {
  constructor(t) {
    super({
      code: t,
      units: 'm',
      extent: _g,
      global: !0,
      worldExtent: mg,
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
function pg(s, t, e) {
  const n = s.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = s.slice()) : (t = new Array(n))))
  for (let i = 0; i < n; i += e) {
    t[i] = (Fn * s[i]) / 180
    let r = ki * Math.log(Math.tan((Math.PI * (+s[i + 1] + 90)) / 360))
    ;(r > ns ? (r = ns) : r < -ns && (r = -ns), (t[i + 1] = r))
  }
  return t
}
function yg(s, t, e) {
  const n = s.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = s.slice()) : (t = new Array(n))))
  for (let i = 0; i < n; i += e)
    ((t[i] = (180 * s[i]) / Fn), (t[i + 1] = (360 * Math.atan(Math.exp(s[i + 1] / ki))) / Math.PI - 90))
  return t
}
const xg = 6378137,
  Za = [-180, -90, 180, 90],
  Eg = (Math.PI * xg) / 180
class Ze extends Jh {
  constructor(t, e) {
    super({
      code: t,
      units: 'degrees',
      extent: Za,
      axisOrientation: e,
      global: !0,
      metersPerUnit: Eg,
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
function Cg(s) {
  return Kr[s] || Kr[s.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] || null
}
function wg(s, t) {
  Kr[s] = t
}
let zn = {}
function Ps(s, t, e) {
  const n = s.getCode(),
    i = t.getCode()
  ;(n in zn || (zn[n] = {}), (zn[n][i] = e))
}
function Rg(s, t) {
  let e
  return (s in zn && t in zn[s] && (e = zn[s][t]), e)
}
function ct(s, t, e) {
  return Math.min(Math.max(s, t), e)
}
function Tg(s, t, e, n, i, r) {
  const o = i - e,
    a = r - n
  if (o !== 0 || a !== 0) {
    const l = ((s - e) * o + (t - n) * a) / (o * o + a * a)
    l > 1 ? ((e = i), (n = r)) : l > 0 && ((e += o * l), (n += a * l))
  }
  return ge(s, t, e, n)
}
function ge(s, t, e, n) {
  const i = e - s,
    r = n - t
  return i * i + r * r
}
function $a(s) {
  return (s * 180) / Math.PI
}
function Wn(s) {
  return (s * Math.PI) / 180
}
function $r(s, t) {
  const e = s % t
  return e * t < 0 ? e + t : e
}
function Mt(s, t, e) {
  return s + e * (t - s)
}
function Qh(s, t) {
  const e = Math.pow(10, t)
  return Math.round(s * e) / e
}
function Sg(s, t) {
  return ((s[0] += +t[0]), (s[1] += +t[1]), s)
}
function vg(s, t) {
  const e = t.getRadius(),
    n = t.getCenter(),
    i = n[0],
    r = n[1],
    o = s[0],
    a = s[1]
  let l = o - i
  const h = a - r
  l === 0 && h === 0 && (l = 1)
  const c = Math.sqrt(l * l + h * h),
    u = i + (e * l) / c,
    d = r + (e * h) / c
  return [u, d]
}
function No(s, t) {
  const e = s[0],
    n = s[1],
    i = t[0],
    r = t[1],
    o = i[0],
    a = i[1],
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
function Bt(s, t) {
  let e = !0
  for (let n = s.length - 1; n >= 0; --n)
    if (s[n] != t[n]) {
      e = !1
      break
    }
  return e
}
function Ig(s, t) {
  const e = Math.cos(t),
    n = Math.sin(t),
    i = s[0] * e - s[1] * n,
    r = s[1] * e + s[0] * n
  return ((s[0] = i), (s[1] = r), s)
}
function _e(s, t) {
  const e = s[0] - t[0],
    n = s[1] - t[1]
  return e * e + n * n
}
function Ls(s, t) {
  return Math.sqrt(_e(s, t))
}
function Mg(s, t) {
  return _e(s, No(s, t))
}
function bg(s, t) {
  if (t.canWrapX()) {
    const e = jt(t.getExtent()),
      n = Pg(s, t, e)
    n && (s[0] -= n * e)
  }
  return s
}
function Pg(s, t, e) {
  const n = t.getExtent()
  let i = 0
  return (
    t.canWrapX() && (s[0] < n[0] || s[0] > n[2]) && ((e = e || jt(n)), (i = Math.floor((s[0] - n[0]) / e))),
    i
  )
}
const tc = 63710088e-1
function ec(s, t, e) {
  e = e || tc
  const n = Wn(s[1]),
    i = Wn(t[1]),
    r = (i - n) / 2,
    o = Wn(t[0] - s[0]) / 2,
    a = Math.sin(r) * Math.sin(r) + Math.sin(o) * Math.sin(o) * Math.cos(n) * Math.cos(i)
  return 2 * e * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
function Lg(s, t, e, n) {
  n = n || tc
  const i = Wn(s[1]),
    r = Wn(s[0]),
    o = t / n,
    a = Math.asin(Math.sin(i) * Math.cos(o) + Math.cos(i) * Math.sin(o) * Math.cos(e)),
    l = r + Math.atan2(Math.sin(e) * Math.sin(o) * Math.cos(i), Math.cos(o) - Math.sin(i) * Math.sin(a))
  return [$a(l), $a(a)]
}
function Fg(...s) {
  console.warn(...s)
}
let qr = !0
function nc(s) {
  qr = !1
}
function jo(s, t) {
  if (t !== void 0) {
    for (let e = 0, n = s.length; e < n; ++e) t[e] = s[e]
    t = t
  } else t = s.slice()
  return t
}
function Ag(s, t) {
  if (t !== void 0 && s !== t) {
    for (let e = 0, n = s.length; e < n; ++e) t[e] = s[e]
    s = t
  }
  return s
}
function Og(s) {
  ;(wg(s.getCode(), s), Ps(s, s, jo))
}
function Dg(s) {
  s.forEach(Og)
}
function Rt(s) {
  return typeof s == 'string' ? Cg(s) : s || null
}
function qa(s) {
  ;(Dg(s),
    s.forEach(function (t) {
      s.forEach(function (e) {
        t !== e && Ps(t, e, jo)
      })
    }))
}
function kg(s, t, e, n) {
  s.forEach(function (i) {
    t.forEach(function (r) {
      ;(Ps(i, r, e), Ps(r, i, n))
    })
  })
}
function Go(s, t) {
  return s ? (typeof s == 'string' ? Rt(s) : s) : Rt(t)
}
function ii(s, t) {
  return (nc(), qt(s, 'EPSG:4326', 'EPSG:3857'))
}
function Ng(s, t) {
  if (s === t) return !0
  const e = s.getUnits() === t.getUnits()
  return (s.getCode() === t.getCode() || ic(s, t) === jo) && e
}
function ic(s, t) {
  const e = s.getCode(),
    n = t.getCode()
  let i = Rg(e, n)
  return (i || (i = Ag), i)
}
function Hr(s, t) {
  const e = Rt(s),
    n = Rt(t)
  return ic(e, n)
}
function qt(s, t, e) {
  return Hr(t, e)(s, void 0, s.length)
}
function Zn(s, t) {
  return s
}
function H(s, t) {
  return (
    qr &&
      !Bt(s, [0, 0]) &&
      s[0] >= -180 &&
      s[0] <= 180 &&
      s[1] >= -90 &&
      s[1] <= 90 &&
      ((qr = !1),
      Fg('Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.')),
    s
  )
}
function Qs(s, t) {
  return s
}
function An(s, t) {
  return s
}
function jg() {
  ;(qa(Ua), qa(Ka), kg(Ka, Ua, pg, yg))
}
jg()
function en(s, t, e, n, i, r) {
  r = r || []
  let o = 0
  for (let a = t; a < e; a += n) {
    const l = s[a],
      h = s[a + 1]
    ;((r[o++] = i[0] * l + i[2] * h + i[4]), (r[o++] = i[1] * l + i[3] * h + i[5]))
  }
  return (r && r.length != o && (r.length = o), r)
}
function Xo(s, t, e, n, i, r, o) {
  o = o || []
  const a = Math.cos(i),
    l = Math.sin(i),
    h = r[0],
    c = r[1]
  let u = 0
  for (let d = t; d < e; d += n) {
    const f = s[d] - h,
      g = s[d + 1] - c
    ;((o[u++] = h + f * a - g * l), (o[u++] = c + f * l + g * a))
    for (let _ = d + 2; _ < d + n; ++_) o[u++] = s[_]
  }
  return (o && o.length != u && (o.length = u), o)
}
function Gg(s, t, e, n, i, r, o, a) {
  a = a || []
  const l = o[0],
    h = o[1]
  let c = 0
  for (let u = t; u < e; u += n) {
    const d = s[u] - l,
      f = s[u + 1] - h
    ;((a[c++] = l + i * d), (a[c++] = h + r * f))
    for (let g = u + 2; g < u + n; ++g) a[c++] = s[g]
  }
  return (a && a.length != c && (a.length = c), a)
}
function Xg(s, t, e, n, i, r, o) {
  o = o || []
  let a = 0
  for (let l = t; l < e; l += n) {
    ;((o[a++] = s[l] + i), (o[a++] = s[l + 1] + r))
    for (let h = l + 2; h < l + n; ++h) o[a++] = s[h]
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
      (this.simplifyTransformedInternal = qf(function (t, e, n) {
        if (!n) return this.getSimplifiedGeometry(e)
        const i = this.clone()
        return (i.applyTransform(n), i.getSimplifiedGeometry(e))
      })))
  }
  simplifyTransformed(t, e) {
    return this.simplifyTransformedInternal(this.getRevision(), t, e)
  }
  clone() {
    return L()
  }
  closestPointXY(t, e, n, i) {
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
    return dg(this.extent_, t)
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
      i =
        n.getUnits() == 'tile-pixels'
          ? function (r, o, a) {
              const l = n.getExtent(),
                h = n.getWorldExtent(),
                c = pi(h) / pi(l)
              return (Oi(Ha, h[0], h[3], c, -c, 0, 0, 0), en(r, 0, r.length, a, Ha, o), Hr(n, e)(r, o, a))
            }
          : Hr(n, e)
    return (this.applyTransform(i), this)
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
    let i
    if (t) i = Fs(t)
    else {
      for (let r = 0; r < n; ++r) {
        if (e.length === 0) {
          ;((this.layout = 'XY'), (this.stride = 2))
          return
        }
        e = e[0]
      }
      ;((i = e.length), (t = zg(i)))
    }
    ;((this.layout = t), (this.stride = i))
  }
  applyTransform(t) {
    this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed())
  }
  rotate(t, e) {
    const n = this.getFlatCoordinates()
    if (n) {
      const i = this.getStride()
      ;(Xo(n, 0, n.length, i, t, e, n), this.changed())
    }
  }
  scale(t, e, n) {
    ;(e === void 0 && (e = t), n || (n = Un(this.getExtent())))
    const i = this.getFlatCoordinates()
    if (i) {
      const r = this.getStride()
      ;(Gg(i, 0, i.length, r, t, e, n, i), this.changed())
    }
  }
  translate(t, e) {
    const n = this.getFlatCoordinates()
    if (n) {
      const i = this.getStride()
      ;(Xg(n, 0, n.length, i, t, e, n), this.changed())
    }
  }
}
function zg(s) {
  let t
  return (s == 2 ? (t = 'XY') : s == 3 ? (t = 'XYZ') : s == 4 && (t = 'XYZM'), t)
}
function Fs(s) {
  let t
  return (s == 'XY' ? (t = 2) : s == 'XYZ' || s == 'XYM' ? (t = 3) : s == 'XYZM' && (t = 4), t)
}
function Wg(s, t, e) {
  const n = s.getFlatCoordinates()
  if (!n) return null
  const i = s.getStride()
  return en(n, 0, n.length, i, t, e)
}
function Ja(s, t, e, n, i, r, o) {
  const a = s[t],
    l = s[t + 1],
    h = s[e] - a,
    c = s[e + 1] - l
  let u
  if (h === 0 && c === 0) u = t
  else {
    const d = ((i - a) * h + (r - l) * c) / (h * h + c * c)
    if (d > 1) u = e
    else if (d > 0) {
      for (let f = 0; f < n; ++f) o[f] = Mt(s[t + f], s[e + f], d)
      o.length = n
      return
    } else u = t
  }
  for (let d = 0; d < n; ++d) o[d] = s[u + d]
  o.length = n
}
function zo(s, t, e, n, i) {
  let r = s[t],
    o = s[t + 1]
  for (t += n; t < e; t += n) {
    const a = s[t],
      l = s[t + 1],
      h = ge(r, o, a, l)
    ;(h > i && (i = h), (r = a), (o = l))
  }
  return i
}
function Wo(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((i = zo(s, t, a, n, i)), (t = a))
  }
  return i
}
function Yg(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((i = Wo(s, t, a, n, i)), (t = a[a.length - 1]))
  }
  return i
}
function Yo(s, t, e, n, i, r, o, a, l, h, c) {
  if (t == e) return h
  let u, d
  if (i === 0) {
    if (((d = ge(o, a, s[t], s[t + 1])), d < h)) {
      for (u = 0; u < n; ++u) l[u] = s[t + u]
      return ((l.length = n), d)
    }
    return h
  }
  c = c || [NaN, NaN]
  let f = t + n
  for (; f < e; )
    if ((Ja(s, f - n, f, n, o, a, c), (d = ge(o, a, c[0], c[1])), d < h)) {
      for (h = d, u = 0; u < n; ++u) l[u] = c[u]
      ;((l.length = n), (f += n))
    } else f += n * Math.max(((Math.sqrt(d) - Math.sqrt(h)) / i) | 0, 1)
  if (r && (Ja(s, e - n, t, n, o, a, c), (d = ge(o, a, c[0], c[1])), d < h)) {
    for (h = d, u = 0; u < n; ++u) l[u] = c[u]
    l.length = n
  }
  return h
}
function Bo(s, t, e, n, i, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = Yo(s, t, f, n, i, r, o, a, l, h, c)), (t = f))
  }
  return h
}
function Bg(s, t, e, n, i, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = Bo(s, t, f, n, i, r, o, a, l, h, c)), (t = f[f.length - 1]))
  }
  return h
}
function rc(s, t, e, n) {
  for (let i = 0, r = e.length; i < r; ++i) s[t++] = e[i]
  return t
}
function tr(s, t, e, n) {
  for (let i = 0, r = e.length; i < r; ++i) {
    const o = e[i]
    for (let a = 0; a < n; ++a) s[t++] = o[a]
  }
  return t
}
function Vo(s, t, e, n, i) {
  i = i || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = tr(s, t, e[o], n)
    ;((i[r++] = l), (t = l))
  }
  return ((i.length = r), i)
}
function Vg(s, t, e, n, i) {
  i = i || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = Vo(s, t, e[o], n, i[r])
    ;(l.length === 0 && (l[0] = t), (i[r++] = l), (t = l[l.length - 1]))
  }
  return ((i.length = r), i)
}
function Uo(s, t, e, n, i, r, o) {
  const a = (e - t) / n
  if (a < 3) {
    for (; t < e; t += n) ((r[o++] = s[t]), (r[o++] = s[t + 1]))
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
    const g = s[d],
      _ = s[d + 1],
      m = s[u],
      p = s[u + 1]
    for (let y = d + n; y < u; y += n) {
      const x = s[y],
        E = s[y + 1],
        C = Tg(x, E, g, _, m, p)
      C > f && ((c = y), (f = C))
    }
    f > i && ((l[(c - t) / n] = 1), d + n < c && h.push(d, c), c + n < u && h.push(c, u))
  }
  for (let u = 0; u < a; ++u) l[u] && ((r[o++] = s[t + u * n]), (r[o++] = s[t + u * n + 1]))
  return o
}
function Ug(s, t, e, n, i, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = Uo(s, t, c, n, i, r, o)), a.push(o), (t = c))
  }
  return o
}
function $e(s, t) {
  return t * Math.round(s / t)
}
function Zg(s, t, e, n, i, r, o) {
  if (t == e) return o
  let a = $e(s[t], i),
    l = $e(s[t + 1], i)
  ;((t += n), (r[o++] = a), (r[o++] = l))
  let h, c
  do if (((h = $e(s[t], i)), (c = $e(s[t + 1], i)), (t += n), t == e)) return ((r[o++] = h), (r[o++] = c), o)
  while (h == a && c == l)
  for (; t < e; ) {
    const u = $e(s[t], i),
      d = $e(s[t + 1], i)
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
function oc(s, t, e, n, i, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = Zg(s, t, c, n, i, r, o)), a.push(o), (t = c))
  }
  return o
}
function Kg(s, t, e, n, i, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l],
      u = []
    ;((o = oc(s, t, c, n, i, r, o, u)), a.push(u), (t = c[c.length - 1]))
  }
  return o
}
function Ae(s, t, e, n, i) {
  i = i !== void 0 ? i : []
  let r = 0
  for (let o = t; o < e; o += n) i[r++] = s.slice(o, o + n)
  return ((i.length = r), i)
}
function yi(s, t, e, n, i) {
  i = i !== void 0 ? i : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((i[r++] = Ae(s, t, l, n, i[r])), (t = l))
  }
  return ((i.length = r), i)
}
function Jr(s, t, e, n, i) {
  i = i !== void 0 ? i : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((i[r++] = l.length === 1 && l[0] === t ? [] : yi(s, t, l, n, i[r])), (t = l[l.length - 1]))
  }
  return ((i.length = r), i)
}
function ac(s, t, e, n) {
  let i = 0,
    r = s[e - n],
    o = s[e - n + 1]
  for (; t < e; t += n) {
    const a = s[t],
      l = s[t + 1]
    ;((i += o * a - r * l), (r = a), (o = l))
  }
  return i / 2
}
function lc(s, t, e, n) {
  let i = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((i += ac(s, t, a, n)), (t = a))
  }
  return i
}
function $g(s, t, e, n) {
  let i = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((i += lc(s, t, a, n)), (t = a[a.length - 1]))
  }
  return i
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
  closestPointXY(t, e, n, i) {
    return i < hn(this.getExtent(), t, e)
      ? i
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            zo(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Yo(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !0, t, e, n, i))
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
class Gt extends Ye {
  constructor(t, e) {
    ;(super(), this.setCoordinates(t, e))
  }
  clone() {
    const t = new Gt(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, i) {
    const r = this.flatCoordinates,
      o = ge(t, e, r[0], r[1])
    if (o < i) {
      const a = this.stride
      for (let l = 0; l < a; ++l) n[l] = r[l]
      return ((n.length = a), o)
    }
    return i
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
function qg(s, t, e, n, i) {
  return !Bh(i, function (o) {
    return !He(s, t, e, n, o[0], o[1])
  })
}
function He(s, t, e, n, i, r) {
  let o = 0,
    a = s[e - n],
    l = s[e - n + 1]
  for (; t < e; t += n) {
    const h = s[t],
      c = s[t + 1]
    ;(l <= r
      ? c > r && (h - a) * (r - l) - (i - a) * (c - l) > 0 && o++
      : c <= r && (h - a) * (r - l) - (i - a) * (c - l) < 0 && o--,
      (a = h),
      (l = c))
  }
  return o !== 0
}
function Zo(s, t, e, n, i, r) {
  if (e.length === 0 || !He(s, t, e[0], n, i, r)) return !1
  for (let o = 1, a = e.length; o < a; ++o) if (He(s, e[o - 1], e[o], n, i, r)) return !1
  return !0
}
function Hg(s, t, e, n, i, r) {
  if (e.length === 0) return !1
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    if (Zo(s, t, l, n, i, r)) return !0
    t = l[l.length - 1]
  }
  return !1
}
function hc(s, t, e, n, i, r, o) {
  let a, l, h, c, u, d, f
  const g = i[r + 1],
    _ = []
  for (let y = 0, x = e.length; y < x; ++y) {
    const E = e[y]
    for (c = s[E - n], d = s[E - n + 1], a = t; a < E; a += n)
      ((u = s[a]),
        (f = s[a + 1]),
        ((g <= d && f <= g) || (d <= g && g <= f)) && ((h = ((g - d) / (f - d)) * (u - c) + c), _.push(h)),
        (c = u),
        (d = f))
  }
  let m = NaN,
    p = -1 / 0
  for (_.sort(_i), c = _[0], a = 1, l = _.length; a < l; ++a) {
    u = _[a]
    const y = Math.abs(u - c)
    ;(y > p && ((h = (c + u) / 2), Zo(s, t, e, n, h, g) && ((m = h), (p = y))), (c = u))
  }
  return (isNaN(m) && (m = i[r]), o ? (o.push(m, g, p), o) : [m, g, p])
}
function Jg(s, t, e, n, i) {
  let r = []
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((r = hc(s, t, l, n, i, 2 * o, r)), (t = l[l.length - 1]))
  }
  return r
}
function cc(s, t, e, n, i) {
  let r
  for (t += n; t < e; t += n) if (((r = i(s.slice(t - n, t), s.slice(t, t + n))), r)) return r
  return !1
}
function er(s, t, e, n, i) {
  const r = Yh(re(), s, t, e, n)
  return Nt(i, r)
    ? Ln(i, r) || (r[0] >= i[0] && r[2] <= i[2]) || (r[1] >= i[1] && r[3] <= i[3])
      ? !0
      : cc(s, t, e, n, function (o, a) {
          return fg(i, o, a)
        })
    : !1
}
function Qg(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) {
    if (er(s, t, e[r], n, i)) return !0
    t = e[r]
  }
  return !1
}
function t_(s, t, e, n, i) {
  return !!(
    er(s, t, e, n, i) ||
    He(s, t, e, n, i[0], i[1]) ||
    He(s, t, e, n, i[0], i[3]) ||
    He(s, t, e, n, i[2], i[1]) ||
    He(s, t, e, n, i[2], i[3])
  )
}
function uc(s, t, e, n, i) {
  if (!t_(s, t, e[0], n, i)) return !1
  if (e.length === 1) return !0
  for (let r = 1, o = e.length; r < o; ++r)
    if (qg(s, e[r - 1], e[r], n, i) && !er(s, e[r - 1], e[r], n, i)) return !1
  return !0
}
function e_(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    if (uc(s, t, a, n, i)) return !0
    t = a[a.length - 1]
  }
  return !1
}
function n_(s, t, e, n) {
  for (; t < e - n; ) {
    for (let i = 0; i < n; ++i) {
      const r = s[t + i]
      ;((s[t + i] = s[e - n + i]), (s[e - n + i] = r))
    }
    ;((t += n), (e -= n))
  }
}
function dc(s, t, e, n) {
  let i = 0,
    r = s[e - n],
    o = s[e - n + 1]
  for (; t < e; t += n) {
    const a = s[t],
      l = s[t + 1]
    ;((i += (a - r) * (l + o)), (r = a), (o = l))
  }
  return i === 0 ? void 0 : i > 0
}
function fc(s, t, e, n, i) {
  i = i !== void 0 ? i : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = dc(s, t, a, n)
    if (r === 0) {
      if ((i && l) || (!i && !l)) return !1
    } else if ((i && !l) || (!i && l)) return !1
    t = a
  }
  return !0
}
function i_(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    if (!fc(s, t, a, n, i)) return !1
    a.length && (t = a[a.length - 1])
  }
  return !0
}
function Qr(s, t, e, n, i) {
  i = i !== void 0 ? i : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = dc(s, t, a, n)
    ;((r === 0 ? (i && l) || (!i && !l) : (i && !l) || (!i && l)) && n_(s, t, a, n), (t = a))
  }
  return t
}
function Qa(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) t = Qr(s, t, e[r], n, i)
  return t
}
class Xt extends Ye {
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
    const t = new Xt(this.flatCoordinates.slice(), this.layout, this.ends_.slice())
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, i) {
    return i < hn(this.getExtent(), t, e)
      ? i
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(Wo(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Bo(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, n, i))
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
    return new Gt(this.getFlatInteriorPoint(), 'XYM')
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
      i = []
    let r = 0
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = n[o],
        h = new xi(e.slice(r, l), t)
      ;(i.push(h), (r = l))
    }
    return i
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
      new Xt(e, 'XY', n)
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
function s_(s, t, e, n) {
  e = e || 32
  const i = []
  for (let r = 0; r < e; ++r) ie(i, Lg(s, t, (2 * Math.PI * r) / e, n))
  return (i.push(i[0], i[1]), new Xt(i, 'XY', [i.length]))
}
function tl(s) {
  if ($h(s)) throw new Error('Cannot create polygon from empty extent')
  const t = s[0],
    e = s[1],
    n = s[2],
    i = s[3],
    r = [t, e, t, i, n, i, n, e, t, e]
  return new Xt(r, 'XY', [r.length])
}
function r_(s, t, e) {
  t = t || 32
  const n = s.getStride(),
    i = s.getLayout(),
    r = s.getCenter(),
    o = n * (t + 1),
    a = new Array(o)
  for (let c = 0; c < o; c += n) {
    ;((a[c] = 0), (a[c + 1] = 0))
    for (let u = 2; u < n; u++) a[c + u] = r[u]
  }
  const l = [a.length],
    h = new Xt(a, i, l)
  return (o_(h, r, s.getRadius()), h)
}
function o_(s, t, e, n) {
  const i = s.getFlatCoordinates(),
    r = s.getStride(),
    o = i.length / r - 1,
    a = 0
  for (let l = 0; l <= o; ++l) {
    const h = l * r,
      c = a + ($r(l, o) * 2 * Math.PI) / o
    ;((i[h] = t[0] + e * Math.cos(c)), (i[h + 1] = t[1] + e * Math.sin(c)))
  }
  s.changed()
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
function gc(s, t, e, n, i, r, o) {
  let a, l
  const h = (e - t) / n
  if (h === 1) a = t
  else if (h === 2) ((a = t), (l = i))
  else if (h !== 0) {
    let c = s[t],
      u = s[t + 1],
      d = 0
    const f = [0]
    for (let m = t + n; m < e; m += n) {
      const p = s[m],
        y = s[m + 1]
      ;((d += Math.sqrt((p - c) * (p - c) + (y - u) * (y - u))), f.push(d), (c = p), (u = y))
    }
    const g = i * d,
      _ = Kf(f, g)
    _ < 0 ? ((l = (g - f[-_ - 2]) / (f[-_ - 1] - f[-_ - 2])), (a = t + (-_ - 2) * n)) : (a = t + _ * n)
  }
  ;((o = o > 1 ? o : 2), (r = r || new Array(o)))
  for (let c = 0; c < o; ++c)
    r[c] = a === void 0 ? NaN : l === void 0 ? s[a + c] : Mt(s[a + c], s[a + n + c], l)
  return r
}
function to(s, t, e, n, i, r) {
  if (e == t) return null
  let o
  if (i < s[t + n - 1]) return r ? ((o = s.slice(t, t + n)), (o[n - 1] = i), o) : null
  if (s[e - 1] < i) return r ? ((o = s.slice(e - n, e)), (o[n - 1] = i), o) : null
  if (i == s[t + n - 1]) return s.slice(t, t + n)
  let a = t / n,
    l = e / n
  for (; a < l; ) {
    const d = (a + l) >> 1
    i < s[(d + 1) * n - 1] ? (l = d) : (a = d + 1)
  }
  const h = s[a * n - 1]
  if (i == h) return s.slice((a - 1) * n, (a - 1) * n + n)
  const c = s[(a + 1) * n - 1],
    u = (i - h) / (c - h)
  o = []
  for (let d = 0; d < n - 1; ++d) o.push(Mt(s[(a - 1) * n + d], s[a * n + d], u))
  return (o.push(i), o)
}
function a_(s, t, e, n, i, r, o) {
  if (o) return to(s, t, e[e.length - 1], n, i, r)
  let a
  if (i < s[n - 1]) return r ? ((a = s.slice(0, n)), (a[n - 1] = i), a) : null
  if (s[s.length - 1] < i) return r ? ((a = s.slice(s.length - n)), (a[n - 1] = i), a) : null
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    if (t != c) {
      if (i < s[t + n - 1]) return null
      if (i <= s[c - 1]) return to(s, t, c, n, i, !1)
      t = c
    }
  }
  return null
}
function _c(s, t, e, n) {
  let i = s[t],
    r = s[t + 1],
    o = 0
  for (let a = t + n; a < e; a += n) {
    const l = s[a],
      h = s[a + 1]
    ;((o += Math.sqrt((l - i) * (l - i) + (h - r) * (h - r))), (i = l), (r = h))
  }
  return o
}
class Ut extends Ye {
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
    const t = new Ut(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, i) {
    return i < hn(this.getExtent(), t, e)
      ? i
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            zo(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Yo(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !1, t, e, n, i))
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
      new Ut(e, 'XY')
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
function As(s, t) {
  return Array.isArray(s) ? s : (t === void 0 ? (t = [s, s]) : ((t[0] = s), (t[1] = s)), t)
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
const l_ = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,
  h_ = /^([a-z]*)$|^hsla?\(.*\)$/i
function mc(s) {
  return typeof s == 'string' ? s : pc(s)
}
function c_(s) {
  const t = document.createElement('div')
  if (((t.style.color = s), t.style.color !== '')) {
    document.body.appendChild(t)
    const e = getComputedStyle(t).color
    return (document.body.removeChild(t), e)
  }
  return ''
}
const u_ = (function () {
  const t = {}
  let e = 0
  return function (n) {
    let i
    if (t.hasOwnProperty(n)) i = t[n]
    else {
      if (e >= 1024) {
        let r = 0
        for (const o in t) (r++ & 3) === 0 && (delete t[o], --e)
      }
      ;((i = d_(n)), (t[n] = i), ++e)
    }
    return i
  }
})()
function Os(s) {
  return Array.isArray(s) ? s : u_(s)
}
function d_(s) {
  let t, e, n, i, r
  if ((h_.exec(s) && (s = c_(s)), l_.exec(s))) {
    const o = s.length - 1
    let a
    o <= 4 ? (a = 1) : (a = 2)
    const l = o === 4 || o === 8
    ;((t = parseInt(s.substr(1 + 0 * a, a), 16)),
      (e = parseInt(s.substr(1 + 1 * a, a), 16)),
      (n = parseInt(s.substr(1 + 2 * a, a), 16)),
      l ? (i = parseInt(s.substr(1 + 3 * a, a), 16)) : (i = 255),
      a == 1 && ((t = (t << 4) + t), (e = (e << 4) + e), (n = (n << 4) + n), l && (i = (i << 4) + i)),
      (r = [t, e, n, i / 255]))
  } else
    s.startsWith('rgba(')
      ? ((r = s.slice(5, -1).split(',').map(Number)), el(r))
      : s.startsWith('rgb(')
        ? ((r = s.slice(4, -1).split(',').map(Number)), r.push(1), el(r))
        : tt(!1, 14)
  return r
}
function el(s) {
  return (
    (s[0] = ct((s[0] + 0.5) | 0, 0, 255)),
    (s[1] = ct((s[1] + 0.5) | 0, 0, 255)),
    (s[2] = ct((s[2] + 0.5) | 0, 0, 255)),
    (s[3] = ct(s[3], 0, 1)),
    s
  )
}
function pc(s) {
  let t = s[0]
  t != (t | 0) && (t = (t + 0.5) | 0)
  let e = s[1]
  e != (e | 0) && (e = (e + 0.5) | 0)
  let n = s[2]
  n != (n | 0) && (n = (n + 0.5) | 0)
  const i = s[3] === void 0 ? 1 : Math.round(s[3] * 100) / 100
  return 'rgba(' + t + ',' + e + ',' + n + ',' + i + ')'
}
function ne(s) {
  return Array.isArray(s) ? pc(s) : s
}
function Kt(s, t, e, n) {
  let i
  return (
    e && e.length
      ? (i = e.shift())
      : Oo
        ? (i = new OffscreenCanvas(s || 300, t || 300))
        : (i = document.createElement('canvas')),
    s && (i.width = s),
    t && (i.height = t),
    i.getContext('2d', n)
  )
}
function f_(s) {
  const t = s.canvas
  ;((t.width = 1), (t.height = 1), s.clearRect(0, 0, 1, 1))
}
const g_ = new RegExp(
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
  yc = function (s) {
    const t = s.match(g_)
    if (!t) return null
    const e = { lineHeight: 'normal', size: '1.2em', style: 'normal', weight: 'normal', variant: 'normal' }
    for (let n = 0, i = nl.length; n < i; ++n) {
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
  __ = (function () {
    const t = '32px ',
      e = ['monospace', 'serif'],
      n = e.length,
      i = 'wmytzilWMYTZIL@#/&?$%10'
    let r, o
    function a(h, c, u) {
      let d = !0
      for (let f = 0; f < n; ++f) {
        const g = e[f]
        if (((o = Ns(h + ' ' + c + ' ' + t + g, i)), u != g)) {
          const _ = Ns(h + ' ' + c + ' ' + t + u + ',' + g, i)
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
  m_ = (function () {
    let s
    return function (t) {
      let e = no[t]
      if (e == null) {
        if (Oo) {
          const n = yc(t),
            i = Ec(t, 'Žg')
          e =
            (isNaN(Number(n.lineHeight)) ? 1.2 : Number(n.lineHeight)) *
            (i.actualBoundingBoxAscent + i.actualBoundingBoxDescent)
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
        no[t] = e
      }
      return e
    }
  })()
function Ec(s, t) {
  return (vn || (vn = Kt(1, 1)), s != eo && ((vn.font = s), (eo = vn.font)), vn.measureText(t))
}
function Ns(s, t) {
  return Ec(s, t).width
}
function il(s, t, e) {
  if (t in e) return e[t]
  const n = t
    .split(
      `
`,
    )
    .reduce((i, r) => Math.max(i, Ns(s, r)), 0)
  return ((e[t] = n), n)
}
function p_(s, t) {
  const e = [],
    n = [],
    i = []
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
      ;((r = Math.max(r, o)), i.push(o), (o = 0), (a += l))
      continue
    }
    const d = t[h + 1] || s.font,
      f = Ns(d, u)
    ;(e.push(f), (o += f))
    const g = m_(d)
    ;(n.push(g), (l = Math.max(l, g)))
  }
  return { width: r, height: a, widths: e, heights: n, lineWidths: i }
}
function y_(s, t, e, n, i, r, o, a, l, h, c) {
  ;(s.save(),
    e !== 1 && (s.globalAlpha *= e),
    t && s.setTransform.apply(s, t),
    n.contextInstructions
      ? (s.translate(l, h), s.scale(c[0], c[1]), x_(n, s))
      : c[0] < 0 || c[1] < 0
        ? (s.translate(l, h), s.scale(c[0], c[1]), s.drawImage(n, i, r, o, a, 0, 0, o, a))
        : s.drawImage(n, i, r, o, a, l, h, o * c[0], a * c[1]),
    s.restore())
}
function x_(s, t) {
  const e = s.contextInstructions
  for (let n = 0, i = e.length; n < i; n += 2)
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
        i = Kt(n.size * t, n.size * t)
      ;(this.draw_(n, i, t), (e = i.canvas), (this.canvas_[t] = e))
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
    let i = this.radius_,
      r = this.radius2_ === void 0 ? i : this.radius2_
    if (i < r) {
      const R = i
      ;((i = r), (r = R))
    }
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2,
      a = (2 * Math.PI) / o,
      l = r * Math.sin(a),
      h = Math.sqrt(r * r - l * l),
      c = i - h,
      u = Math.sqrt(l * l + c * c),
      d = u / l
    if (t === 'miter' && d <= n) return d * e
    const f = e / 2 / d,
      g = (e / 2) * (c / u),
      m = Math.sqrt((i + f) * (i + f) + g * g) - i
    if (this.radius2_ === void 0 || t === 'bevel') return m * 2
    const p = i * Math.sin(a),
      y = Math.sqrt(i * i - p * p),
      x = r - y,
      C = Math.sqrt(p * p + x * x) / p
    if (C <= n) {
      const R = (C * e) / 2 - r - i
      return 2 * Math.max(m, R)
    }
    return m * 2
  }
  createRenderOptions() {
    let t = Kn,
      e = 0,
      n = null,
      i = 0,
      r,
      o = 0
    this.stroke_ &&
      ((r = this.stroke_.getColor()),
      r === null && (r = wi),
      (r = ne(r)),
      (o = this.stroke_.getWidth()),
      o === void 0 && (o = Ti),
      (n = this.stroke_.getLineDash()),
      (i = this.stroke_.getLineDashOffset()),
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
      lineDashOffset: i,
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
      let i = this.fill_.getColor()
      ;(i === null && (i = wt), (e.fillStyle = ne(i)), e.fill())
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
        const i = Kt(t.size, t.size)
        ;((this.hitDetectionCanvas_ = i.canvas), this.drawHitDetectionCanvas_(t, i))
      }
    }
    this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.getImage(1))
  }
  createPath_(t) {
    let e = this.points_
    const n = this.radius_
    if (e === 1 / 0) t.arc(0, 0, n, 0, 2 * Math.PI)
    else {
      const i = this.radius2_ === void 0 ? n : this.radius2_
      this.radius2_ !== void 0 && (e *= 2)
      const r = this.angle_ - Math.PI / 2,
        o = (2 * Math.PI) / e
      for (let a = 0; a < e; a++) {
        const l = r + a * o,
          h = a % 2 === 0 ? n : i
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
class Vt {
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
      new Vt({
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
function E_(s) {
  let t
  if (typeof s == 'function') t = s
  else {
    let e
    ;(Array.isArray(s) ? (e = s) : (tt(typeof s.getZIndex == 'function', 41), (e = [s])),
      (t = function () {
        return e
      }))
  }
  return t
}
let yr = null
function C_(s, t) {
  if (!yr) {
    const e = new Xe({ color: 'rgba(255,255,255,0.4)' }),
      n = new me({ color: '#3399CC', width: 1.25 })
    yr = [new Vt({ image: new Hn({ fill: e, stroke: n, radius: 5 }), fill: e, stroke: n })]
  }
  return yr
}
function Cc() {
  const s = {},
    t = [255, 255, 255, 1],
    e = [0, 153, 255, 1],
    n = 3
  return (
    (s.Polygon = [new Vt({ fill: new Xe({ color: [255, 255, 255, 0.5] }) })]),
    (s.MultiPolygon = s.Polygon),
    (s.LineString = [
      new Vt({ stroke: new me({ color: t, width: n + 2 }) }),
      new Vt({ stroke: new me({ color: e, width: n }) }),
    ]),
    (s.MultiLineString = s.LineString),
    (s.Circle = s.Polygon.concat(s.LineString)),
    (s.Point = [
      new Vt({
        image: new Hn({
          radius: n * 2,
          fill: new Xe({ color: e }),
          stroke: new me({ color: t, width: n / 2 }),
        }),
        zIndex: 1 / 0,
      }),
    ]),
    (s.MultiPoint = s.Point),
    (s.GeometryCollection = s.Polygon.concat(s.LineString, s.Point)),
    s
  )
}
function sl(s) {
  return s.getGeometry()
}
const w_ = '#333'
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
      (this.fill_ = t.fill !== void 0 ? t.fill : new Xe({ color: w_ })),
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
class R_ extends Ee {
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
const Dt = { ANIMATING: 0, INTERACTING: 1 },
  Yt = { CENTER: 'center', RESOLUTION: 'resolution', ROTATION: 'rotation' },
  T_ = 256
function rl(s, t, e) {
  return function (n, i, r, o, a) {
    if (!n) return
    if (!i && !t) return n
    const l = t ? 0 : r[0] * i,
      h = t ? 0 : r[1] * i,
      c = a ? a[0] : 0,
      u = a ? a[1] : 0
    let d = s[0] + l / 2 + c,
      f = s[2] - l / 2 + c,
      g = s[1] + h / 2 + u,
      _ = s[3] - h / 2 + u
    ;(d > f && ((d = (f + d) / 2), (f = d)), g > _ && ((g = (_ + g) / 2), (_ = g)))
    let m = ct(n[0], d, f),
      p = ct(n[1], g, _)
    if (o && e && i) {
      const y = 30 * i
      ;((m += -y * Math.log(1 + Math.max(0, d - n[0]) / y) + y * Math.log(1 + Math.max(0, n[0] - f) / y)),
        (p += -y * Math.log(1 + Math.max(0, g - n[1]) / y) + y * Math.log(1 + Math.max(0, n[1] - _) / y)))
    }
    return [m, p]
  }
}
function S_(s) {
  return s
}
function $o(s, t, e, n) {
  const i = jt(t) / e[0],
    r = pi(t) / e[1]
  return n ? Math.min(s, Math.max(i, r)) : Math.min(s, Math.min(i, r))
}
function qo(s, t, e) {
  let n = Math.min(s, t)
  const i = 50
  return (
    (n *= Math.log(1 + i * Math.max(0, s / t - 1)) / i + 1),
    e && ((n = Math.max(n, e)), (n /= Math.log(1 + i * Math.max(0, e / s - 1)) / i + 1)),
    ct(n, e / 2, t * 2)
  )
}
function v_(s, t, e, n) {
  return (
    (t = t !== void 0 ? t : !0),
    function (i, r, o, a) {
      if (i !== void 0) {
        const l = s[0],
          h = s[s.length - 1],
          c = e ? $o(l, e, o, n) : l
        if (a) return t ? qo(i, c, h) : ct(i, h, c)
        const u = Math.min(c, i),
          d = Math.floor(Nh(s, u, r))
        return s[d] > c && d < s.length - 1 ? s[d + 1] : s[d]
      }
    }
  )
}
function I_(s, t, e, n, i, r) {
  return (
    (n = n !== void 0 ? n : !0),
    (e = e !== void 0 ? e : 0),
    function (o, a, l, h) {
      if (o !== void 0) {
        const c = i ? $o(t, i, l, r) : t
        if (h) return n ? qo(o, c, e) : ct(o, e, c)
        const u = 1e-9,
          d = Math.ceil(Math.log(t / c) / Math.log(s) - u),
          f = -a * (0.5 - u) + 0.5,
          g = Math.min(c, o),
          _ = Math.floor(Math.log(t / g) / Math.log(s) + f),
          m = Math.max(d, _),
          p = t / Math.pow(s, m)
        return ct(p, e, c)
      }
    }
  )
}
function ol(s, t, e, n, i) {
  return (
    (e = e !== void 0 ? e : !0),
    function (r, o, a, l) {
      if (r !== void 0) {
        const h = n ? $o(s, n, a, i) : s
        return !e || !l ? ct(r, t, h) : qo(r, h, t)
      }
    }
  )
}
function M_(s) {
  if (s !== void 0) return 0
}
function al(s) {
  if (s !== void 0) return s
}
function b_(s) {
  const t = (2 * Math.PI) / s
  return function (e, n) {
    if (n) return e
    if (e !== void 0) return ((e = Math.floor(e / t + 0.5) * t), e)
  }
}
function P_(s) {
  return (
    (s = s || Wn(5)),
    function (t, e) {
      if (e) return t
      if (t !== void 0) return Math.abs(t) <= s ? 0 : t
    }
  )
}
function L_(s) {
  return Math.pow(s, 3)
}
function F_(s) {
  return 1 - L_(1 - s)
}
function A_(s) {
  return 3 * s * s - 2 * s * s * s
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
    for (const a in Yt) delete e[a]
    this.setProperties(e, !0)
    const n = D_(t)
    ;((this.maxResolution_ = n.maxResolution),
      (this.minResolution_ = n.minResolution),
      (this.zoomFactor_ = n.zoomFactor),
      (this.resolutions_ = t.resolutions),
      (this.padding_ = t.padding),
      (this.minZoom_ = n.minZoom))
    const i = O_(t),
      r = n.constraint,
      o = k_(t)
    ;((this.constraints_ = { center: i, resolution: r, rotation: o }),
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
      const i = t || [0, 0, 0, 0]
      e = e || [0, 0, 0, 0]
      const r = this.getResolution(),
        o = (r / 2) * (i[3] - e[3] + e[1] - i[1]),
        a = (r / 2) * (i[0] - e[0] + e[2] - i[2])
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
      let i = arguments[n]
      ;(i.center && ((i = Object.assign({}, i)), (i.center = H(i.center, this.getProjection()))),
        i.anchor && ((i = Object.assign({}, i)), (i.anchor = H(i.anchor, this.getProjection()))),
        (e[n] = i))
    }
    this.animateInternal.apply(this, e)
  }
  animateInternal(t) {
    let e = arguments.length,
      n
    e > 1 && typeof arguments[e - 1] == 'function' && ((n = arguments[e - 1]), --e)
    let i = 0
    for (; i < e && !this.isDef(); ++i) {
      const c = arguments[i]
      ;(c.center && this.setCenterInternal(c.center),
        c.zoom !== void 0 ? this.setZoom(c.zoom) : c.resolution && this.setResolution(c.resolution),
        c.rotation !== void 0 && this.setRotation(c.rotation))
    }
    if (i === e) {
      n && is(n, !0)
      return
    }
    let r = Date.now(),
      o = this.targetCenter_.slice(),
      a = this.targetResolution_,
      l = this.targetRotation_
    const h = []
    for (; i < e; ++i) {
      const c = arguments[i],
        u = {
          start: r,
          complete: !1,
          anchor: c.anchor,
          duration: c.duration !== void 0 ? c.duration : 1e3,
          easing: c.easing || A_,
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
      ;(N_(u) ? (u.complete = !0) : (r += u.duration), h.push(u))
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
      const i = this.animations_[e]
      if ((i[0].callback && is(i[0].callback, !1), !t))
        for (let r = 0, o = i.length; r < o; ++r) {
          const a = i[r]
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
      const i = this.animations_[n]
      let r = !0
      for (let o = 0, a = i.length; o < a; ++o) {
        const l = i[o]
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
          this.setHint(Dt.ANIMATING, -1),
          (this.nextCenter_ = null),
          (this.nextResolution_ = NaN),
          (this.nextRotation_ = NaN))
        const o = i[0].callback
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
    const i = this.getCenterInternal()
    return (i !== void 0 && ((n = [i[0] - e[0], i[1] - e[1]]), Ig(n, t - this.getRotation()), Sg(n, e)), n)
  }
  calculateCenterZoom(t, e) {
    let n
    const i = this.getCenterInternal(),
      r = this.getResolution()
    if (i !== void 0 && r !== void 0) {
      const o = e[0] - (t * (e[0] - i[0])) / r,
        a = e[1] - (t * (e[1] - i[1])) / r
      n = [o, a]
    }
    return n
  }
  getViewportSize_(t) {
    const e = this.viewportSize_
    if (t) {
      const n = e[0],
        i = e[1]
      return [
        Math.abs(n * Math.cos(t)) + Math.abs(i * Math.sin(t)),
        Math.abs(n * Math.sin(t)) + Math.abs(i * Math.cos(t)),
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
    return Qs(e, this.getProjection())
  }
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_()
    const e = this.getCenterInternal()
    tt(e, 1)
    const n = this.getResolution()
    tt(n !== void 0, 2)
    const i = this.getRotation()
    return (tt(i !== void 0, 3), cg(e, n, i, t))
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
    return this.getResolutionForExtentInternal(An(t, this.getProjection()), e)
  }
  getResolutionForExtentInternal(t, e) {
    e = e || this.getViewportSizeMinusPadding_()
    const n = jt(t) / e[0],
      i = pi(t) / e[1]
    return Math.max(n, i)
  }
  getResolutionForValueFunction(t) {
    t = t || 2
    const e = this.getConstrainedResolution(this.maxResolution_),
      n = this.minResolution_,
      i = Math.log(e / n) / Math.log(t)
    return function (r) {
      return e / Math.pow(t, r * i)
    }
  }
  getRotation() {
    return this.get(Yt.ROTATION)
  }
  getValueForResolutionFunction(t) {
    const e = Math.log(t || 2),
      n = this.getConstrainedResolution(this.maxResolution_),
      i = this.minResolution_,
      r = Math.log(n / i) / e
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
    let i = this.getCenterInternal()
    const r = this.padding_
    if (r) {
      const o = this.getViewportSizeMinusPadding_()
      i = Er(i, this.getViewportSize_(), [o[0] / 2 + r[3], o[1] / 2 + r[0]], e, n)
    }
    return {
      center: i.slice(0),
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
      i
    if (this.resolutions_) {
      const r = Nh(this.resolutions_, t, 1)
      ;((e = r),
        (n = this.resolutions_[r]),
        r == this.resolutions_.length - 1 ? (i = 2) : (i = n / this.resolutions_[r + 1]))
    } else ((n = this.maxResolution_), (i = this.zoomFactor_))
    return e + Math.log(n / t) / Math.log(i)
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
      const i = An(t, this.getProjection())
      n = tl(i)
    } else if (t.getType() === 'Circle') {
      const i = An(t.getExtent(), this.getProjection())
      ;((n = tl(i)), n.rotate(this.getRotation(), Un(i)))
    } else n = t
    this.fitInternal(n, e)
  }
  rotatedExtentForGeometry(t) {
    const e = this.getRotation(),
      n = Math.cos(e),
      i = Math.sin(-e),
      r = t.getFlatCoordinates(),
      o = t.getStride()
    let a = 1 / 0,
      l = 1 / 0,
      h = -1 / 0,
      c = -1 / 0
    for (let u = 0, d = r.length; u < d; u += o) {
      const f = r[u] * n - r[u + 1] * i,
        g = r[u] * i + r[u + 1] * n
      ;((a = Math.min(a, f)), (l = Math.min(l, g)), (h = Math.max(h, f)), (c = Math.max(c, g)))
    }
    return [a, l, h, c]
  }
  fitInternal(t, e) {
    e = e || {}
    let n = e.size
    n || (n = this.getViewportSizeMinusPadding_())
    const i = e.padding !== void 0 ? e.padding : [0, 0, 0, 0],
      r = e.nearest !== void 0 ? e.nearest : !1
    let o
    e.minResolution !== void 0
      ? (o = e.minResolution)
      : e.maxZoom !== void 0
        ? (o = this.getResolutionForZoom(e.maxZoom))
        : (o = 0)
    const a = this.rotatedExtentForGeometry(t)
    let l = this.getResolutionForExtentInternal(a, [n[0] - i[1] - i[3], n[1] - i[0] - i[2]])
    ;((l = isNaN(l) ? o : Math.max(l, o)), (l = this.getConstrainedResolution(l, r ? 0 : 1)))
    const h = this.getRotation(),
      c = Math.sin(h),
      u = Math.cos(h),
      d = Un(a)
    ;((d[0] += ((i[1] - i[3]) / 2) * l), (d[1] += ((i[0] - i[2]) / 2) * l))
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
  calculateCenterShift(t, e, n, i) {
    let r
    const o = this.padding_
    if (o && t) {
      const a = this.getViewportSizeMinusPadding_(-n),
        l = Er(t, i, [a[0] / 2 + o[3], a[1] / 2 + o[0]], e, n)
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
      i = this.getViewportSize_(this.getRotation()),
      r = this.constraints_.resolution(this.targetResolution_ * t, 0, i, n)
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
      i = this.constraints_.rotation(this.targetRotation_ + t, n)
    ;(e && (this.targetCenter_ = this.calculateCenterRotate(i, e)),
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
      i = this.constraints_.rotation(this.targetRotation_, n),
      r = this.getViewportSize_(i),
      o = this.constraints_.resolution(this.targetResolution_, 0, r, n),
      a = this.constraints_.center(
        this.targetCenter_,
        o,
        r,
        n,
        this.calculateCenterShift(this.targetCenter_, o, i, r),
      )
    ;(this.get(Yt.ROTATION) !== i && this.set(Yt.ROTATION, i),
      this.get(Yt.RESOLUTION) !== o && (this.set(Yt.RESOLUTION, o), this.set('zoom', this.getZoom(), !0)),
      (!a || !this.get(Yt.CENTER) || !Bt(this.get(Yt.CENTER), a)) && this.set(Yt.CENTER, a),
      this.getAnimating() && !t && this.cancelAnimations(),
      (this.cancelAnchor_ = void 0))
  }
  resolveConstraints(t, e, n) {
    t = t !== void 0 ? t : 200
    const i = e || 0,
      r = this.constraints_.rotation(this.targetRotation_),
      o = this.getViewportSize_(r),
      a = this.constraints_.resolution(this.targetResolution_, i, o),
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
        !Bt(this.getCenterInternal(), l)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({ rotation: r, center: l, resolution: a, duration: t, easing: F_, anchor: n })))
  }
  beginInteraction() {
    ;(this.resolveConstraints(0), this.setHint(Dt.INTERACTING, 1))
  }
  endInteraction(t, e, n) {
    ;((n = n && H(n, this.getProjection())), this.endInteractionInternal(t, e, n))
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
function is(s, t) {
  setTimeout(function () {
    s(t)
  }, 0)
}
function O_(s) {
  if (s.extent !== void 0) {
    const e = s.smoothExtentConstraint !== void 0 ? s.smoothExtentConstraint : !0
    return rl(s.extent, s.constrainOnlyCenter, e)
  }
  const t = Go(s.projection, 'EPSG:3857')
  if (s.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice()
    return ((e[0] = -1 / 0), (e[2] = 1 / 0), rl(e, !1, !1))
  }
  return S_
}
function D_(s) {
  let t,
    e,
    n,
    o = s.minZoom !== void 0 ? s.minZoom : xr,
    a = s.maxZoom !== void 0 ? s.maxZoom : 28
  const l = s.zoomFactor !== void 0 ? s.zoomFactor : 2,
    h = s.multiWorld !== void 0 ? s.multiWorld : !1,
    c = s.smoothResolutionConstraint !== void 0 ? s.smoothResolutionConstraint : !0,
    u = s.showFullExtent !== void 0 ? s.showFullExtent : !1,
    d = Go(s.projection, 'EPSG:3857'),
    f = d.getExtent()
  let g = s.constrainOnlyCenter,
    _ = s.extent
  if ((!h && !_ && d.isGlobal() && ((g = !1), (_ = f)), s.resolutions !== void 0)) {
    const m = s.resolutions
    ;((e = m[o]),
      (n = m[a] !== void 0 ? m[a] : m[m.length - 1]),
      s.constrainResolution ? (t = v_(m, c, !g && _, u)) : (t = ol(e, n, c, !g && _, u)))
  } else {
    const p = (f ? Math.max(jt(f), pi(f)) : (360 * Hh.degrees) / d.getMetersPerUnit()) / T_ / Math.pow(2, xr),
      y = p / Math.pow(2, 28 - xr)
    ;((e = s.maxResolution),
      e !== void 0 ? (o = 0) : (e = p / Math.pow(l, o)),
      (n = s.minResolution),
      n === void 0 &&
        (s.maxZoom !== void 0
          ? s.maxResolution !== void 0
            ? (n = e / Math.pow(l, a))
            : (n = p / Math.pow(l, a))
          : (n = y)),
      (a = o + Math.floor(Math.log(e / n) / Math.log(l))),
      (n = e / Math.pow(l, a - o)),
      s.constrainResolution ? (t = I_(l, e, n, c, !g && _, u)) : (t = ol(e, n, c, !g && _, u)))
  }
  return { constraint: t, maxResolution: e, minResolution: n, minZoom: o, zoomFactor: l }
}
function k_(s) {
  if (s.enableRotation !== void 0 ? s.enableRotation : !0) {
    const e = s.constrainRotation
    return e === void 0 || e === !0 ? P_() : e === !1 ? al : typeof e == 'number' ? b_(e) : al
  }
  return M_
}
function N_(s) {
  return !(
    (s.sourceCenter && s.targetCenter && !Bt(s.sourceCenter, s.targetCenter)) ||
    s.sourceResolution !== s.targetResolution ||
    s.sourceRotation !== s.targetRotation
  )
}
function Er(s, t, e, n, i) {
  const r = Math.cos(-i)
  let o = Math.sin(-i),
    a = s[0] * r - s[1] * o,
    l = s[1] * r + s[0] * o
  ;((a += (t[0] / 2 - e[0]) * n), (l += (e[1] - t[1] / 2) * n), (o = -o))
  const h = a * r - l * o,
    c = l * r + a * o
  return [h, c]
}
class j_ extends R_ {
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
    let i
    e.layerStatesArray ? (i = e.layerStatesArray.find(o => o.layer === this)) : (i = this.getLayerState())
    const r = this.getExtent()
    return G_(i, e.viewState) && (!r || Nt(r, e.extent))
  }
  getAttributions(t) {
    if (!this.isVisible(t)) return []
    let e
    const n = this.getSource()
    if ((n && (e = n.getAttributions()), !e)) return []
    const i = t instanceof ll ? t.getViewStateAndExtent() : t
    let r = e(i)
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
            const i = e.frameState.layerStatesArray,
              r = this.getLayerState(!1)
            ;(tt(
              !i.some(function (o) {
                return o.layer === r.layer
              }),
              67,
            ),
              i.push(r))
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
function G_(s, t) {
  if (!s.visible) return !1
  const e = t.resolution
  if (e < s.minResolution || e >= s.maxResolution) return !1
  const n = t.zoom
  return n > s.minZoom && n <= s.maxZoom
}
function X_(s, t, e, n, i) {
  wc(s, t, e || 0, n || s.length - 1, i || z_)
}
function wc(s, t, e, n, i) {
  for (; n > e; ) {
    if (n - e > 600) {
      var r = n - e + 1,
        o = t - e + 1,
        a = Math.log(r),
        l = 0.5 * Math.exp((2 * a) / 3),
        h = 0.5 * Math.sqrt((a * l * (r - l)) / r) * (o - r / 2 < 0 ? -1 : 1),
        c = Math.max(e, Math.floor(t - (o * l) / r + h)),
        u = Math.min(n, Math.floor(t + ((r - o) * l) / r + h))
      wc(s, t, c, u, i)
    }
    var d = s[t],
      f = e,
      g = n
    for (si(s, e, t), i(s[n], d) > 0 && si(s, e, n); f < g; ) {
      for (si(s, f, g), f++, g--; i(s[f], d) < 0; ) f++
      for (; i(s[g], d) > 0; ) g--
    }
    ;(i(s[e], d) === 0 ? si(s, e, g) : (g++, si(s, g, n)), g <= t && (e = g + 1), t <= g && (n = g - 1))
  }
}
function si(s, t, e) {
  var n = s[t]
  ;((s[t] = s[e]), (s[e] = n))
}
function z_(s, t) {
  return s < t ? -1 : s > t ? 1 : 0
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
    const i = this.toBBox,
      r = []
    for (; e; ) {
      for (let o = 0; o < e.children.length; o++) {
        const a = e.children[o],
          l = e.leaf ? i(a) : a
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
      for (let i = 0; i < e.children.length; i++) {
        const r = e.children[i],
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
    const i = this.toBBox(t),
      r = [],
      o = []
    let a, l, h
    for (; n || r.length; ) {
      if ((n || ((n = r.pop()), (l = r[r.length - 1]), (a = o.pop()), (h = !0)), n.leaf)) {
        const c = W_(t, n.children, e)
        if (c !== -1) return (n.children.splice(c, 1), r.push(n), this._condense(r), this)
      }
      !h && !n.leaf && wr(n, i)
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
  _build(t, e, n, i) {
    const r = n - e + 1
    let o = this._maxEntries,
      a
    if (r <= o) return ((a = In(t.slice(e, n + 1))), Cn(a, this.toBBox), a)
    ;(i || ((i = Math.ceil(Math.log(r) / Math.log(o))), (o = Math.ceil(r / Math.pow(o, i - 1)))),
      (a = In([])),
      (a.leaf = !1),
      (a.height = i))
    const l = Math.ceil(r / o),
      h = l * Math.ceil(Math.sqrt(o))
    hl(t, e, n, h, this.compareMinX)
    for (let c = e; c <= n; c += h) {
      const u = Math.min(c + h - 1, n)
      hl(t, c, u, l, this.compareMinY)
      for (let d = c; d <= u; d += l) {
        const f = Math.min(d + l - 1, u)
        a.children.push(this._build(t, d, f, i - 1))
      }
    }
    return (Cn(a, this.toBBox), a)
  }
  _chooseSubtree(t, e, n, i) {
    for (; i.push(e), !(e.leaf || i.length - 1 === n); ) {
      let r = 1 / 0,
        o = 1 / 0,
        a
      for (let l = 0; l < e.children.length; l++) {
        const h = e.children[l],
          c = Cr(h),
          u = V_(t, h) - c
        u < o ? ((o = u), (r = c < r ? c : r), (a = h)) : u === o && c < r && ((r = c), (a = h))
      }
      e = a || e.children[0]
    }
    return e
  }
  _insert(t, e, n) {
    const i = n ? t : this.toBBox(t),
      r = [],
      o = this._chooseSubtree(i, this.data, e, r)
    for (o.children.push(t), hi(o, i); e >= 0 && r[e].children.length > this._maxEntries; )
      (this._split(r, e), e--)
    this._adjustParentBBoxes(i, r, e)
  }
  _split(t, e) {
    const n = t[e],
      i = n.children.length,
      r = this._minEntries
    this._chooseSplitAxis(n, r, i)
    const o = this._chooseSplitIndex(n, r, i),
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
    let i,
      r = 1 / 0,
      o = 1 / 0
    for (let a = e; a <= n - e; a++) {
      const l = li(t, 0, a, this.toBBox),
        h = li(t, a, n, this.toBBox),
        c = U_(l, h),
        u = Cr(l) + Cr(h)
      c < r ? ((r = c), (i = a), (o = u < o ? u : o)) : c === r && u < o && ((o = u), (i = a))
    }
    return i || n - e
  }
  _chooseSplitAxis(t, e, n) {
    const i = t.leaf ? this.compareMinX : Y_,
      r = t.leaf ? this.compareMinY : B_,
      o = this._allDistMargin(t, e, n, i),
      a = this._allDistMargin(t, e, n, r)
    o < a && t.children.sort(i)
  }
  _allDistMargin(t, e, n, i) {
    t.children.sort(i)
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
    for (let i = n; i >= 0; i--) hi(e[i], t)
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
function W_(s, t, e) {
  if (!e) return t.indexOf(s)
  for (let n = 0; n < t.length; n++) if (e(s, t[n])) return n
  return -1
}
function Cn(s, t) {
  li(s, 0, s.children.length, t, s)
}
function li(s, t, e, n, i) {
  ;(i || (i = In(null)), (i.minX = 1 / 0), (i.minY = 1 / 0), (i.maxX = -1 / 0), (i.maxY = -1 / 0))
  for (let r = t; r < e; r++) {
    const o = s.children[r]
    hi(i, s.leaf ? n(o) : o)
  }
  return i
}
function hi(s, t) {
  return (
    (s.minX = Math.min(s.minX, t.minX)),
    (s.minY = Math.min(s.minY, t.minY)),
    (s.maxX = Math.max(s.maxX, t.maxX)),
    (s.maxY = Math.max(s.maxY, t.maxY)),
    s
  )
}
function Y_(s, t) {
  return s.minX - t.minX
}
function B_(s, t) {
  return s.minY - t.minY
}
function Cr(s) {
  return (s.maxX - s.minX) * (s.maxY - s.minY)
}
function ss(s) {
  return s.maxX - s.minX + (s.maxY - s.minY)
}
function V_(s, t) {
  return (
    (Math.max(t.maxX, s.maxX) - Math.min(t.minX, s.minX)) *
    (Math.max(t.maxY, s.maxY) - Math.min(t.minY, s.minY))
  )
}
function U_(s, t) {
  const e = Math.max(s.minX, t.minX),
    n = Math.max(s.minY, t.minY),
    i = Math.min(s.maxX, t.maxX),
    r = Math.min(s.maxY, t.maxY)
  return Math.max(0, i - e) * Math.max(0, r - n)
}
function wr(s, t) {
  return s.minX <= t.minX && s.minY <= t.minY && t.maxX <= s.maxX && t.maxY <= s.maxY
}
function rs(s, t) {
  return t.minX <= s.maxX && t.minY <= s.maxY && t.maxX >= s.minX && t.maxY >= s.minY
}
function In(s) {
  return { children: s, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 }
}
function hl(s, t, e, n, i) {
  const r = [t, e]
  for (; r.length; ) {
    if (((e = r.pop()), (t = r.pop()), e - t <= n)) continue
    const o = t + Math.ceil((e - t) / n / 2) * n
    ;(X_(s, o, t, e, i), r.push(t, o, o, e))
  }
}
class Z_ {
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
    const i = cl(t, e, n)
    return i in this.cache_ ? this.cache_[i] : null
  }
  set(t, e, n, i) {
    const r = cl(t, e, n)
    ;((this.cache_[r] = i), ++this.cacheSize_)
  }
  setSize(t) {
    ;((this.maxCacheSize_ = t), this.expire())
  }
}
function cl(s, t, e) {
  const n = e ? mc(e) : 'null'
  return t + ':' + s + ':' + n
}
const ul = new Z_()
function K_(s, t, e) {
  const n = s
  let i = !0,
    r = !1,
    o = !1
  const a = [
    bs(n, ut.LOAD, function () {
      ;((o = !0), r || t())
    }),
  ]
  return (
    n.src && tg
      ? ((r = !0),
        n
          .decode()
          .then(function () {
            i && t()
          })
          .catch(function (l) {
            i && (o ? t() : e())
          }))
      : a.push(bs(n, ut.ERROR, e)),
    function () {
      ;((i = !1), a.forEach(bt))
    }
  )
}
let ri = null
class $_ extends jh {
  constructor(t, e, n, i, r, o) {
    ;(super(),
      (this.hitDetectionImage_ = null),
      (this.image_ = t),
      (this.crossOrigin_ = i),
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
      ;(ri || (ri = Kt(1, 1, void 0, { willReadFrequently: !0 })), ri.drawImage(this.image_, 0, 0))
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
          n = Kt(t, e)
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
      this.unlisten_ = K_(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this))
    }
  }
  replaceColor_(t) {
    if (!this.color_ || this.canvas_[t] || this.imageState_ !== Q.LOADED) return
    const e = this.image_,
      n = document.createElement('canvas')
    ;((n.width = Math.ceil(e.width * t)), (n.height = Math.ceil(e.height * t)))
    const i = n.getContext('2d')
    ;(i.scale(t, t),
      i.drawImage(e, 0, 0),
      (i.globalCompositeOperation = 'multiply'),
      (i.fillStyle = mc(this.color_)),
      i.fillRect(0, 0, n.width / t, n.height / t),
      (i.globalCompositeOperation = 'destination-in'),
      i.drawImage(e, 0, 0),
      (this.canvas_[t] = n))
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null))
  }
}
function q_(s, t, e, n, i, r) {
  let o = ul.get(t, n, r)
  return (o || ((o = new $_(s, t, e, n, i, r)), ul.set(t, n, r, o)), o)
}
function dl(s, t, e, n) {
  return e !== void 0 && n !== void 0 ? [e / s, n / t] : e !== void 0 ? e / s : n !== void 0 ? n / t : 1
}
class sr extends nr {
  constructor(t) {
    t = t || {}
    const e = t.opacity !== void 0 ? t.opacity : 1,
      n = t.rotation !== void 0 ? t.rotation : 0,
      i = t.scale !== void 0 ? t.scale : 1,
      r = t.rotateWithView !== void 0 ? t.rotateWithView : !1
    ;(super({
      opacity: e,
      rotation: n,
      scale: i,
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
      (this.iconImage_ = q_(
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
      const i = this.getSize()
      if (this.anchorXUnits_ == 'fraction' || this.anchorYUnits_ == 'fraction') {
        if (!i) return null
        ;((t = this.anchor_.slice()),
          this.anchorXUnits_ == 'fraction' && (t[0] *= i[0]),
          this.anchorYUnits_ == 'fraction' && (t[1] *= i[1]))
      }
      if (this.anchorOrigin_ != 'top-left') {
        if (!i) return null
        ;(t === this.anchor_ && (t = this.anchor_.slice()),
          (this.anchorOrigin_ == 'top-right' || this.anchorOrigin_ == 'bottom-right') &&
            (t[0] = -t[0] + i[0]),
          (this.anchorOrigin_ == 'bottom-left' || this.anchorOrigin_ == 'bottom-right') &&
            (t[1] = -t[1] + i[1]))
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
function fl(s) {
  return new Vt({ fill: Si(s, ''), stroke: vi(s, ''), text: H_(s), image: J_(s) })
}
function Si(s, t) {
  const e = s[t + 'fill-color']
  if (e) return e === 'none' ? null : new Xe({ color: e })
}
function vi(s, t) {
  const e = s[t + 'stroke-width'],
    n = s[t + 'stroke-color']
  if (!(!e && !n))
    return new me({
      width: e,
      color: n,
      lineCap: s[t + 'stroke-line-cap'],
      lineJoin: s[t + 'stroke-line-join'],
      lineDash: s[t + 'stroke-line-dash'],
      lineDashOffset: s[t + 'stroke-line-dash-offset'],
      miterLimit: s[t + 'stroke-miter-limit'],
    })
}
function H_(s) {
  const t = s['text-value']
  return t
    ? new Ko({
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
        fill: Si(s, 'text-'),
        backgroundFill: Si(s, 'text-background-'),
        stroke: vi(s, 'text-'),
        backgroundStroke: vi(s, 'text-background-'),
      })
    : void 0
}
function J_(s) {
  const t = s['icon-src'],
    e = s['icon-img']
  if (t || e)
    return new sr({
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
  const n = s['shape-points']
  if (n) {
    const r = 'shape-'
    return new ir({
      points: n,
      fill: Si(s, r),
      stroke: vi(s, r),
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
  const i = s['circle-radius']
  if (i) {
    const r = 'circle-'
    return new Hn({
      radius: i,
      fill: Si(s, r),
      stroke: vi(s, r),
      displacement: s['circle-displacement'],
      scale: s['circle-scale'],
      rotation: s['circle-rotation'],
      rotateWithView: s['circle-rotate-with-view'],
      declutterMode: s['circle-declutter-mode'],
    })
  }
}
const gl = { RENDER_ORDER: 'renderOrder' }
class Q_ extends j_ {
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
    if (t === void 0) e = C_
    else if (t === null) e = null
    else if (typeof t == 'function') e = t
    else if (t instanceof Vt) e = t
    else if (Array.isArray(t)) {
      const n = t.length,
        i = new Array(n)
      for (let r = 0; r < n; ++r) {
        const o = t[r]
        o instanceof Vt ? (i[r] = o) : (i[r] = fl(o))
      }
      e = i
    } else e = fl(t)
    ;((this.style_ = e), (this.styleFunction_ = t === null ? void 0 : E_(this.style_)), this.changed())
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
  drawCustom(t, e, n, i) {}
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
  constructor(t, e, n, i) {
    ;(super(),
      (this.tolerance = t),
      (this.maxExtent = e),
      (this.pixelRatio = i),
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
      i = this.tmpCoordinate_,
      r = this.coordinates
    let o = r.length
    for (let a = 0, l = t.length; a < l; a += e)
      ((i[0] = t[a]), (i[1] = t[a + 1]), lg(n, i) && ((r[o++] = i[0]), (r[o++] = i[1])))
    return o
  }
  appendFlatLineCoordinates(t, e, n, i, r, o) {
    const a = this.coordinates
    let l = a.length
    const h = this.getBufferedMaxExtent()
    o && (e += i)
    let c = t[e],
      u = t[e + 1]
    const d = this.tmpCoordinate_
    let f = !0,
      g,
      _,
      m
    for (g = e + i; g < n; g += i)
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
    return (((r && f) || g === e + i) && ((a[l++] = c), (a[l++] = u)), l)
  }
  drawCustomCoordinates_(t, e, n, i, r) {
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = n[o],
        h = this.appendFlatLineCoordinates(t, e, l, i, !1, !1)
      ;(r.push(h), (e = l))
    }
    return e
  }
  drawCustom(t, e, n, i) {
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
          this.hitDetectionInstructions.push([M.CUSTOM, a, u, t, i || n, Jr]))
        break
      case 'Polygon':
      case 'MultiLineString':
        ;((c = []),
          (l = r == 'Polygon' ? t.getOrientedFlatCoordinates() : t.getFlatCoordinates()),
          (d = this.drawCustomCoordinates_(l, 0, t.getEnds(), o, c)),
          this.instructions.push([M.CUSTOM, a, c, t, n, yi]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, c, t, i || n, yi]))
        break
      case 'LineString':
      case 'Circle':
        ;((l = t.getFlatCoordinates()),
          (h = this.appendFlatLineCoordinates(l, 0, l.length, o, !1, !1)),
          this.instructions.push([M.CUSTOM, a, h, t, n, Ae]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, h, t, i || n, Ae]))
        break
      case 'MultiPoint':
        ;((l = t.getFlatCoordinates()),
          (h = this.appendFlatPointCoordinates(l, o)),
          h > a &&
            (this.instructions.push([M.CUSTOM, a, h, t, n, Ae]),
            this.hitDetectionInstructions.push([M.CUSTOM, a, h, t, i || n, Ae])))
        break
      case 'Point':
        ;((l = t.getFlatCoordinates()),
          this.coordinates.push(l[0], l[1]),
          (h = this.coordinates.length),
          this.instructions.push([M.CUSTOM, a, h, t, n]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, h, t, i || n]))
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
    let i,
      r,
      o = -1
    for (e = 0; e < n; ++e)
      ((i = t[e]),
        (r = i[0]),
        r == M.END_GEOMETRY
          ? (o = e)
          : r == M.BEGIN_GEOMETRY && ((i[2] = e), $f(this.hitDetectionInstructions, o, e), (o = -1)))
  }
  setFillStrokeStyle(t, e) {
    const n = this.state
    if (t) {
      const i = t.getColor()
      n.fillStyle = ne(i || wt)
    } else n.fillStyle = void 0
    if (e) {
      const i = e.getColor()
      n.strokeStyle = ne(i || wi)
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
      i = t.lineCap,
      r = t.lineDash,
      o = t.lineDashOffset,
      a = t.lineJoin,
      l = t.lineWidth,
      h = t.miterLimit
    ;(t.currentStrokeStyle != n ||
      t.currentLineCap != i ||
      (r != t.currentLineDash && !ln(t.currentLineDash, r)) ||
      t.currentLineDashOffset != o ||
      t.currentLineJoin != a ||
      t.currentLineWidth != l ||
      t.currentMiterLimit != h) &&
      (n !== void 0 && e.call(this, t),
      (t.currentStrokeStyle = n),
      (t.currentLineCap = i),
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
    if (!this.bufferedMaxExtent_ && ((this.bufferedMaxExtent_ = ag(this.maxExtent)), this.maxLineWidth > 0)) {
      const t = (this.resolution * (this.maxLineWidth + 1)) / 2
      Di(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_)
    }
    return this.bufferedMaxExtent_
  }
}
class t0 extends Ni {
  constructor(t, e, n, i) {
    ;(super(t, e, n, i),
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
      i = t.getStride(),
      r = this.coordinates.length,
      o = this.appendFlatPointCoordinates(n, i)
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
      i = t.getStride(),
      r = this.coordinates.length,
      o = this.appendFlatPointCoordinates(n, i)
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
      i = t.getSize(),
      r = t.getOrigin()
    ;((this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio)),
      (this.anchorX_ = n[0]),
      (this.anchorY_ = n[1]),
      (this.hitDetectionImage_ = t.getHitDetectionImage()),
      (this.image_ = t.getImage(this.pixelRatio)),
      (this.height_ = i[1]),
      (this.opacity_ = t.getOpacity()),
      (this.originX_ = r[0]),
      (this.originY_ = r[1]),
      (this.rotateWithView_ = t.getRotateWithView()),
      (this.rotation_ = t.getRotation()),
      (this.scale_ = t.getScaleArray()),
      (this.width_ = i[0]),
      (this.declutterMode_ = t.getDeclutterMode()),
      (this.declutterImageWithText_ = e))
  }
}
class e0 extends Ni {
  constructor(t, e, n, i) {
    super(t, e, n, i)
  }
  drawFlatCoordinates_(t, e, n, i) {
    const r = this.coordinates.length,
      o = this.appendFlatLineCoordinates(t, e, n, i, !1, !1),
      a = [M.MOVE_TO_LINE_TO, r, o]
    return (this.instructions.push(a), this.hitDetectionInstructions.push(a), n)
  }
  drawLineString(t, e) {
    const n = this.state,
      i = n.strokeStyle,
      r = n.lineWidth
    if (i === void 0 || r === void 0) return
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
      i = n.strokeStyle,
      r = n.lineWidth
    if (i === void 0 || r === void 0) return
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
  constructor(t, e, n, i) {
    super(t, e, n, i)
  }
  drawFlatCoordinatess_(t, e, n, i) {
    const r = this.state,
      o = r.fillStyle !== void 0,
      a = r.strokeStyle !== void 0,
      l = n.length
    ;(this.instructions.push(Qe), this.hitDetectionInstructions.push(Qe))
    for (let h = 0; h < l; ++h) {
      const c = n[h],
        u = this.coordinates.length,
        d = this.appendFlatLineCoordinates(t, e, c, i, !0, !a),
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
      i = n.fillStyle,
      r = n.strokeStyle
    if (i === void 0 && r === void 0) return
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
      i = n.fillStyle,
      r = n.strokeStyle
    if (i === void 0 && r === void 0) return
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
      i = n.fillStyle,
      r = n.strokeStyle
    if (i === void 0 && r === void 0) return
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
      for (let n = 0, i = e.length; n < i; ++n) e[n] = $e(e[n], t)
    }
    return super.finish()
  }
  setFillStrokeStyles_() {
    const t = this.state
    ;(t.fillStyle !== void 0 && this.updateFillStyle(t, this.createFill),
      t.strokeStyle !== void 0 && this.updateStrokeStyle(t, this.applyStroke))
  }
}
function n0(s, t, e, n, i) {
  const r = []
  let o = e,
    a = 0,
    l = t.slice(e, 2)
  for (; a < s && o + i < n; ) {
    const [h, c] = l.slice(-2),
      u = t[o + i],
      d = t[o + i + 1],
      f = Math.sqrt((u - h) * (u - h) + (d - c) * (d - c))
    if (((a += f), a >= s)) {
      const g = (s - a + f) / f,
        _ = Mt(h, u, g),
        m = Mt(c, d, g)
      ;(l.push(_, m), r.push(l), (l = [_, m]), a == s && (o += i), (a = 0))
    } else if (a < s) (l.push(t[o + i], t[o + i + 1]), (o += i))
    else {
      const g = f - a,
        _ = Mt(h, u, g / f),
        m = Mt(c, d, g / f)
      ;(l.push(_, m), r.push(l), (l = [_, m]), (a = 0), (o += i))
    }
  }
  return (a > 0 && r.push(l), r)
}
function i0(s, t, e, n, i) {
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
  for (u = e; u < n; u += i) {
    const E = t[u],
      C = t[u + 1]
    ;(g !== void 0 &&
      ((y = E - g),
      (x = C - _),
      (f = Math.sqrt(y * y + x * x)),
      m !== void 0 &&
        ((l += d),
        (c = Math.acos((m * y + p * x) / (d * f))),
        c > s && (l > a && ((a = l), (r = h), (o = u)), (l = 0), (h = u - i))),
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
class s0 extends Ni {
  constructor(t, e, n, i) {
    ;(super(t, e, n, i),
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
      i = this.textStrokeState_,
      r = this.textState_
    if (this.text_ === '' || !r || (!n && !i)) return
    const o = this.coordinates
    let a = o.length
    const l = t.getType()
    let h = null,
      c = t.getStride()
    if (
      r.placement === 'line' &&
      (l == 'LineString' || l == 'MultiLineString' || l == 'Polygon' || l == 'MultiPolygon')
    ) {
      if (!Nt(this.getBufferedMaxExtent(), t.getExtent())) return
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
        d ? (p = n0(d * this.resolution, h, g, u[_], c)) : (p = [h.slice(g, u[_])])
        for (let y = 0, x = p.length; y < x; ++y) {
          const E = p[y]
          let C = 0,
            R = E.length
          if (f == null) {
            const S = i0(r.maxAngle, E, 0, E.length, 2)
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
      i = this.strokeKey_
    t &&
      (i in this.strokeStates ||
        (this.strokeStates[i] = {
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
      i = this.textState_,
      r = this.strokeKey_,
      o = this.textKey_,
      a = this.fillKey_
    this.saveTextStates_()
    const l = this.pixelRatio,
      h = js[i.textBaseline],
      c = this.textOffsetY_ * l,
      u = this.text_,
      d = n ? (n.lineWidth * Math.abs(i.scale[0])) / 2 : 0
    ;(this.instructions.push([M.DRAW_CHARS, t, e, h, i.overflow, a, i.maxAngle, l, c, r, d * l, u, o, 1]),
      this.hitDetectionInstructions.push([
        M.DRAW_CHARS,
        t,
        e,
        h,
        i.overflow,
        a && wt,
        i.maxAngle,
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
    let n, i, r
    if (!t) this.text_ = ''
    else {
      const o = t.getFill()
      o
        ? ((i = this.textFillState_),
          i || ((i = {}), (this.textFillState_ = i)),
          (i.fillStyle = ne(o.getColor() || wt)))
        : ((i = null), (this.textFillState_ = i))
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
      __(l)
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
        (this.fillKey_ = i ? (typeof i.fillStyle == 'string' ? i.fillStyle : '|' + K(i.fillStyle)) : ''))
    }
    this.declutterImageWithText_ = e
  }
}
const r0 = { Circle: ml, Default: Ni, Image: t0, LineString: e0, Polygon: ml, Text: s0 }
class pl {
  constructor(t, e, n, i) {
    ;((this.tolerance_ = t),
      (this.maxExtent_ = e),
      (this.pixelRatio_ = i),
      (this.resolution_ = n),
      (this.buildersByZIndex_ = {}))
  }
  finish() {
    const t = {}
    for (const e in this.buildersByZIndex_) {
      t[e] = t[e] || {}
      const n = this.buildersByZIndex_[e]
      for (const i in n) {
        const r = n[i].finish()
        t[e][i] = r
      }
    }
    return t
  }
  getBuilder(t, e) {
    const n = t !== void 0 ? t.toString() : '0'
    let i = this.buildersByZIndex_[n]
    i === void 0 && ((i = {}), (this.buildersByZIndex_[n] = i))
    let r = i[e]
    if (r === void 0) {
      const o = r0[e]
      ;((r = new o(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_)), (i[e] = r))
    }
    return r
  }
}
class o0 extends Ai {
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
    return (i, r) => {
      const o = this.loadedTileCallback.bind(this, n, i)
      return t.forEachLoadedTile(e, i, r, o)
    }
  }
  forEachFeatureAtCoordinate(t, e, n, i, r) {}
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
class a0 extends pt {
  constructor(t, e, n, i) {
    ;(super(t), (this.inversePixelTransform = e), (this.frameState = n), (this.context = i))
  }
}
const yl = []
let Mn = null
function l0() {
  Mn = Kt(1, 1, void 0, { willReadFrequently: !0 })
}
class h0 extends o0 {
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
    ;(Mn || l0(), Mn.clearRect(0, 0, 1, 1))
    let i
    try {
      ;(Mn.drawImage(t, e, n, 1, 1, 0, 0, 1, 1), (i = Mn.getImageData(0, 0, 1, 1).data))
    } catch {
      return ((Mn = null), null)
    }
    return i
  }
  getBackground(t) {
    let n = this.getLayer().getBackground()
    return (typeof n == 'function' && (n = n(t.viewState.resolution)), n || void 0)
  }
  useContainer(t, e, n) {
    const i = this.getLayer().getClassName()
    let r, o
    if (
      t &&
      t.className === i &&
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
      ;((r = document.createElement('div')), (r.className = i))
      let a = r.style
      ;((a.position = 'absolute'), (a.width = '100%'), (a.height = '100%'), (o = Kt()))
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
    const i = Zh(n),
      r = Kh(n),
      o = Uh(n),
      a = Vh(n)
    ;(Et(e.coordinateToPixelTransform, i),
      Et(e.coordinateToPixelTransform, r),
      Et(e.coordinateToPixelTransform, o),
      Et(e.coordinateToPixelTransform, a))
    const l = this.inversePixelTransform
    ;(Et(l, i),
      Et(l, r),
      Et(l, o),
      Et(l, a),
      t.save(),
      t.beginPath(),
      t.moveTo(Math.round(i[0]), Math.round(i[1])),
      t.lineTo(Math.round(r[0]), Math.round(r[1])),
      t.lineTo(Math.round(o[0]), Math.round(o[1])),
      t.lineTo(Math.round(a[0]), Math.round(a[1])),
      t.clip())
  }
  dispatchRenderEvent_(t, e, n) {
    const i = this.getLayer()
    if (i.hasListener(t)) {
      const r = new a0(t, this.inversePixelTransform, n, e)
      i.dispatchEvent(r)
    }
  }
  preRender(t, e) {
    ;((this.frameState = e), this.dispatchRenderEvent_(Ei.PRERENDER, t, e))
  }
  postRender(t, e) {
    this.dispatchRenderEvent_(Ei.POSTRENDER, t, e)
  }
  getRenderTransform(t, e, n, i, r, o, a) {
    const l = r / 2,
      h = o / 2,
      c = i / e,
      u = -c,
      d = -t[0] + a,
      f = -t[1]
    return Oi(this.tempTransform, l, h, c, u, -n, d, f)
  }
  disposeInternal() {
    ;(delete this.frameState, super.disposeInternal())
  }
}
function c0(s, t, e, n, i, r, o, a, l, h, c, u) {
  let d = s[t],
    f = s[t + 1],
    g = 0,
    _ = 0,
    m = 0,
    p = 0
  function y() {
    ;((g = d),
      (_ = f),
      (t += n),
      (d = s[t]),
      (f = s[t + 1]),
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
    S = r + a * l(h, i, c)
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
  ;((t = R), (m = 0), (p = v), (d = s[t]), (f = s[t + 1]))
  let I
  if (nt) {
    ;(y(), (I = Math.atan2(f - _, d - g)), G && (I += I > 0 ? -N : N))
    const F = (b + E) / 2,
      T = (A + C) / 2
    return ((D[0] = [F, T, (S - r) / 2, I, i]), D)
  }
  i = i.replace(/\n/g, ' ')
  for (let F = 0, T = i.length; F < T; ) {
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
        q = a * l(h, i[W], c)
      if (t + n < e && p + m < r + Y + q / 2) break
      Y += q
    }
    if (F === Z) continue
    const it = G ? i.substring(T - Z, T - F) : i.substring(Z, F)
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
function xl(s) {
  return s[3].declutterBox
}
const El = new RegExp('[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]')
function Rr(s, t) {
  return (
    t === 'start' ? (t = El.test(s) ? 'right' : 'left') : t === 'end' && (t = El.test(s) ? 'left' : 'right'),
    js[t]
  )
}
function u0(s, t, e) {
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
class d0 {
  constructor(t, e, n, i) {
    ;((this.overlaps = n),
      (this.pixelRatio = e),
      (this.resolution = t),
      this.alignFill_,
      (this.instructions = i.instructions),
      (this.coordinates = i.coordinates),
      (this.coordinateCache_ = {}),
      (this.renderedTransform_ = ke()),
      (this.hitDetectionInstructions = i.hitDetectionInstructions),
      (this.pixelCoordinates_ = null),
      (this.viewRotation_ = 0),
      (this.fillStates = i.fillStates || {}),
      (this.strokeStates = i.strokeStates || {}),
      (this.textStates = i.textStates || {}),
      (this.widths_ = {}),
      (this.labels_ = {}))
  }
  createLabel(t, e, n, i) {
    const r = t + e + n + i
    if (this.labels_[r]) return this.labels_[r]
    const o = i ? this.strokeStates[i] : null,
      a = n ? this.fillStates[n] : null,
      l = this.textStates[e],
      h = this.pixelRatio,
      c = [l.scale[0] * h, l.scale[1] * h],
      u = Array.isArray(t),
      d = l.justify ? js[l.justify] : Rr(Array.isArray(t) ? t[0] : t, l.textAlign || Ri),
      f = i && o.lineWidth ? o.lineWidth : 0,
      g = u
        ? t
        : t
            .split(
              `
`,
            )
            .reduce(u0, []),
      { width: _, height: m, widths: p, heights: y, lineWidths: x } = p_(l, g),
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
      i &&
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
      ;(it !== T && (i && G.push('font', it), n && N.push('font', it), (T = it)), (D = Math.max(D, y[I])))
      const w = [Y, A + b * p[I] + d * (p[I] - x[F]), 0.5 * (f + D) + nt]
      ;((A += p[I]), i && G.push('strokeText', w), n && N.push('fillText', w), ++I)
    }
    return (Array.prototype.push.apply(C, G), Array.prototype.push.apply(C, N), (this.labels_[r] = S), S)
  }
  replayTextBackground_(t, e, n, i, r, o, a) {
    ;(t.beginPath(),
      t.moveTo.apply(t, e),
      t.lineTo.apply(t, n),
      t.lineTo.apply(t, i),
      t.lineTo.apply(t, r),
      t.lineTo.apply(t, e),
      o && ((this.alignFill_ = o[2]), this.fill_(t)),
      a && (this.setStrokeStyle_(t, a), t.stroke()))
  }
  calculateImageOrLabelDimensions_(t, e, n, i, r, o, a, l, h, c, u, d, f, g, _, m) {
    ;((a *= d[0]), (l *= d[1]))
    let p = n - a,
      y = i - l
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
        ? ((b = Oi(ke(), n, i, 1, 1, u, -n, -i)),
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
  replayImageOrLabel_(t, e, n, i, r, o, a) {
    const l = !!(o || a),
      h = i.declutterBox,
      c = t.canvas,
      u = a ? (a[2] * i.scale[0]) / 2 : 0
    return (
      h.minX - u <= c.width / e &&
        h.maxX + u >= 0 &&
        h.minY - u <= c.height / e &&
        h.maxY + u >= 0 &&
        (l && this.replayTextBackground_(t, Ie, ce, ue, Me, o, a),
        y_(
          t,
          i.canvasTransform,
          r,
          n,
          i.originX,
          i.originY,
          i.drawImageW,
          i.drawImageH,
          i.drawImageX,
          i.drawImageY,
          i.scale,
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
  drawLabelWithPointPlacement_(t, e, n, i) {
    const r = this.textStates[e],
      o = this.createLabel(t, e, i, n),
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
  execute_(t, e, n, i, r, o, a, l) {
    let h
    this.pixelCoordinates_ && ln(n, this.renderedTransform_)
      ? (h = this.pixelCoordinates_)
      : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []),
        (h = en(this.coordinates, 0, this.coordinates.length, 2, n, this.pixelCoordinates_)),
        ng(this.renderedTransform_, n))
    let c = 0
    const u = i.length
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
      T = this.instructions != i || this.overlaps ? 0 : 200
    let O, Z, Y, it
    for (; c < u; ) {
      const w = i[c]
      switch (w[0]) {
        case M.BEGIN_GEOMETRY:
          ;((O = w[1]),
            (it = w[3]),
            O.getGeometry() ? (a !== void 0 && !Nt(a, it.getExtent()) ? (c = w[2] + 1) : ++c) : (c = w[2]))
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
            $t = h[d + 3],
            at = Ce - W,
            oe = $t - q,
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
            zt = w[15]
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
                if (zt) {
                  const vt = f - d
                  if (!zt[vt]) {
                    zt[vt] = _n
                    continue
                  }
                  if (((Lt = zt[vt]), delete zt[vt], (le = xl(Lt)), l.collides(le))) continue
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
              Lt = c0(h, Bi, ft, 2, C, _n, Gc, Math.abs(ei[0]), il, ti, ni, I ? 0 : this.viewRotation_)
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
  execute(t, e, n, i, r, o) {
    ;((this.viewRotation_ = i), this.execute_(t, e, n, this.instructions, r, void 0, void 0, o))
  }
  executeHitDetection(t, e, n, i, r) {
    return ((this.viewRotation_ = n), this.execute_(t, 1, e, this.hitDetectionInstructions, !0, i, r))
  }
}
const Tr = ['Polygon', 'Circle', 'LineString', 'Image', 'Text', 'Default']
class Cl {
  constructor(t, e, n, i, r, o) {
    ;((this.maxExtent_ = t),
      (this.overlaps_ = i),
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
      const i = t[e]
      for (const r in i) {
        const o = i[r]
        n[r] = new d0(this.resolution_, this.pixelRatio_, this.overlaps_, o)
      }
    }
  }
  hasExecutors(t) {
    for (const e in this.executorsByZIndex_) {
      const n = this.executorsByZIndex_[e]
      for (let i = 0, r = t.length; i < r; ++i) if (t[i] in n) return !0
    }
    return !1
  }
  forEachFeatureAtCoordinate(t, e, n, i, r, o) {
    i = Math.round(i)
    const a = i * 2 + 1,
      l = Oi(this.hitDetectionTransform_, i + 0.5, i + 0.5, 1 / e, -1 / e, -n, -t[0], -t[1]),
      h = !this.hitDetectionContext_
    h && (this.hitDetectionContext_ = Kt(a, a, void 0, { willReadFrequently: !0 }))
    const c = this.hitDetectionContext_
    c.canvas.width !== a || c.canvas.height !== a
      ? ((c.canvas.width = a), (c.canvas.height = a))
      : h || c.clearRect(0, 0, a, a)
    let u
    this.renderBuffer_ !== void 0 && ((u = re()), Wh(u, t), Di(u, e * (this.renderBuffer_ + i), u))
    const d = f0(i)
    let f
    function g(C, R) {
      const v = c.getImageData(0, 0, a, a).data
      for (let S = 0, b = d.length; S < b; S++)
        if (v[d[S]] > 0) {
          if (!o || (f !== 'Image' && f !== 'Text') || o.includes(C)) {
            const A = (d[S] - 3) / 4,
              G = i - (A % a),
              N = i - ((A / a) | 0),
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
      i = e[1],
      r = e[2],
      o = e[3],
      a = [n, i, n, o, r, o, r, i]
    return (en(a, 0, 8, 2, t, a), a)
  }
  isEmpty() {
    return Vn(this.executorsByZIndex_)
  }
  execute(t, e, n, i, r, o, a) {
    const l = Object.keys(this.executorsByZIndex_).map(Number)
    ;(l.sort(_i), this.maxExtent_ && (t.save(), this.clip(t, n)), (o = o || Tr))
    let h, c, u, d, f, g
    for (a && l.reverse(), h = 0, c = l.length; h < c; ++h) {
      const _ = l[h].toString()
      for (f = this.executorsByZIndex_[_], u = 0, d = o.length; u < d; ++u) {
        const m = o[u]
        ;((g = f[m]), g !== void 0 && g.execute(t, e, n, i, r, a))
      }
    }
    this.maxExtent_ && t.restore()
  }
}
const Sr = {}
function f0(s) {
  if (Sr[s] !== void 0) return Sr[s]
  const t = s * 2 + 1,
    e = s * s,
    n = new Array(e + 1)
  for (let r = 0; r <= s; ++r)
    for (let o = 0; o <= s; ++o) {
      const a = r * r + o * o
      if (a > e) break
      let l = n[a]
      ;(l || ((l = []), (n[a] = l)),
        l.push(((s + r) * t + (s + o)) * 4 + 3),
        r > 0 && l.push(((s - r) * t + (s + o)) * 4 + 3),
        o > 0 && (l.push(((s + r) * t + (s - o)) * 4 + 3), r > 0 && l.push(((s - r) * t + (s - o)) * 4 + 3)))
    }
  const i = []
  for (let r = 0, o = n.length; r < o; ++r) n[r] && i.push(...n[r])
  return ((Sr[s] = i), i)
}
class g0 extends Tc {
  constructor(t, e, n, i, r, o, a) {
    ;(super(),
      (this.context_ = t),
      (this.pixelRatio_ = e),
      (this.extent_ = n),
      (this.transform_ = i),
      (this.transformRotation_ = i ? Qh(Math.atan2(i[1], i[0]), 10) : 0),
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
  drawImages_(t, e, n, i) {
    if (!this.image_) return
    const r = en(t, e, n, i, this.transform_, this.pixelCoordinates_),
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
  drawText_(t, e, n, i) {
    if (!this.textState_ || this.text_ === '') return
    ;(this.textFillState_ && this.setContextFillState_(this.textFillState_),
      this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_),
      this.setContextTextState_(this.textState_))
    const r = en(t, e, n, i, this.transform_, this.pixelCoordinates_),
      o = this.context_
    let a = this.textRotation_
    for (
      this.transformRotation_ === 0 && (a -= this.viewRotation_),
        this.textRotateWithView_ && (a += this.viewRotation_);
      e < n;
      e += i
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
  moveToLineTo_(t, e, n, i, r) {
    const o = this.context_,
      a = en(t, e, n, i, this.transform_, this.pixelCoordinates_)
    o.moveTo(a[0], a[1])
    let l = a.length
    r && (l -= 2)
    for (let h = 2; h < l; h += 2) o.lineTo(a[h], a[h + 1])
    return (r && o.closePath(), n)
  }
  drawRings_(t, e, n, i) {
    for (let r = 0, o = n.length; r < o; ++r) e = this.moveToLineTo_(t, e, n[r], i, !0)
    return e
  }
  drawCircle(t) {
    if (
      (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)),
      !!Nt(this.extent_, t.getExtent()))
    ) {
      if (this.fillState_ || this.strokeState_) {
        ;(this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_))
        const e = Wg(t, this.transform_, this.pixelCoordinates_),
          n = e[2] - e[0],
          i = e[3] - e[1],
          r = Math.sqrt(n * n + i * i),
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
    for (let n = 0, i = e.length; n < i; ++n) this.drawGeometry(e[n])
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
      !!Nt(this.extent_, t.getExtent()))
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
    if (Nt(this.extent_, e)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_)
        const n = this.context_,
          i = t.getFlatCoordinates()
        let r = 0
        const o = t.getEnds(),
          a = t.getStride()
        n.beginPath()
        for (let l = 0, h = o.length; l < h; ++l) r = this.moveToLineTo_(i, r, o[l], a, !1)
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
      !!Nt(this.extent_, t.getExtent()))
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
      !!Nt(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        ;(this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_))
        const e = this.context_,
          n = t.getOrientedFlatCoordinates()
        let i = 0
        const r = t.getEndss(),
          o = t.getStride()
        e.beginPath()
        for (let a = 0, l = r.length; a < l; ++a) {
          const h = r[a]
          i = this.drawRings_(n, i, h, o)
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
      i = t.textAlign ? t.textAlign : Ri
    n
      ? (n.font != t.font && ((n.font = t.font), (e.font = t.font)),
        n.textAlign != i && ((n.textAlign = i), (e.textAlign = i)),
        n.textBaseline != t.textBaseline &&
          ((n.textBaseline = t.textBaseline), (e.textBaseline = t.textBaseline)))
      : ((e.font = t.font),
        (e.textAlign = i),
        (e.textBaseline = t.textBaseline),
        (this.contextTextState_ = { font: t.font, textAlign: i, textBaseline: t.textBaseline }))
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
        i = e.getLineCap(),
        r = e.getLineDash(),
        o = e.getLineDashOffset(),
        a = e.getLineJoin(),
        l = e.getWidth(),
        h = e.getMiterLimit(),
        c = r || pe
      this.strokeState_ = {
        lineCap: i !== void 0 ? i : Ds,
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
      i = t.getAnchor(),
      r = t.getOrigin()
    ;((this.image_ = t.getImage(this.pixelRatio_)),
      (this.imageAnchorX_ = i[0] * n),
      (this.imageAnchorY_ = i[1] * n),
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
      const i = t.getFont(),
        r = t.getOffsetX(),
        o = t.getOffsetY(),
        a = t.getRotateWithView(),
        l = t.getRotation(),
        h = t.getScaleArray(),
        c = t.getText(),
        u = t.getTextAlign(),
        d = t.getTextBaseline()
      ;((this.textState_ = {
        font: i !== void 0 ? i : xc,
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
function _0(s, t, e, n, i, r, o) {
  const a = s[0] * Qt,
    l = s[1] * Qt,
    h = Kt(a, l)
  h.imageSmoothingEnabled = !1
  const c = h.canvas,
    u = new g0(h, Qt, i, null, o),
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
      if (!b || !Nt(i, b.getExtent())) continue
      const A = S.clone(),
        G = A.getFill()
      G && G.setColor(C)
      const N = A.getStroke()
      ;(N && (N.setColor(C), N.setLineDash(null)), A.setText(void 0))
      const D = S.getImage()
      if (D) {
        const T = D.getImageSize()
        if (!T) continue
        const O = Kt(T[0], T[1], void 0, { alpha: !1 }),
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
function m0(s, t, e) {
  const n = []
  if (e) {
    const i = Math.floor(Math.round(s[0]) * Qt),
      r = Math.floor(Math.round(s[1]) * Qt),
      o = (ct(i, 0, e.width - 1) + ct(r, 0, e.height - 1) * e.width) * 4,
      a = e.data[o],
      l = e.data[o + 1],
      c = e.data[o + 2] + 256 * (l + 256 * a),
      u = Math.floor((256 * 256 * 256 - 1) / t.length)
    c && c % u === 0 && n.push(t[c / u - 1])
  }
  return n
}
const p0 = 0.5,
  Sc = {
    Point: v0,
    LineString: R0,
    Polygon: M0,
    MultiPoint: I0,
    MultiLineString: T0,
    MultiPolygon: S0,
    GeometryCollection: w0,
    Circle: E0,
  }
function y0(s, t) {
  return parseInt(K(s), 10) - parseInt(K(t), 10)
}
function x0(s, t) {
  const e = io(s, t)
  return e * e
}
function io(s, t) {
  return (p0 * s) / t
}
function E0(s, t, e, n, i) {
  const r = e.getFill(),
    o = e.getStroke()
  if (r || o) {
    const l = s.getBuilder(e.getZIndex(), 'Circle')
    ;(l.setFillStrokeStyle(r, o), l.drawCircle(t, n))
  }
  const a = e.getText()
  if (a && a.getText()) {
    const l = (i || s).getBuilder(e.getZIndex(), 'Text')
    ;(l.setTextStyle(a), l.drawText(t, n))
  }
}
function wl(s, t, e, n, i, r, o) {
  let a = !1
  const l = e.getImage()
  if (l) {
    const h = l.getImageState()
    h == Q.LOADED || h == Q.ERROR
      ? l.unlistenImageChange(i)
      : (h == Q.IDLE && l.load(), l.listenImageChange(i), (a = !0))
  }
  return (C0(s, t, e, n, r, o), a)
}
function C0(s, t, e, n, i, r) {
  const o = e.getGeometryFunction()(t)
  if (!o) return
  const a = o.simplifyTransformed(n, i)
  if (e.getRenderer()) vc(s, a, e, t)
  else {
    const h = Sc[a.getType()]
    h(s, a, e, t, r)
  }
}
function vc(s, t, e, n) {
  if (t.getType() == 'GeometryCollection') {
    const r = t.getGeometries()
    for (let o = 0, a = r.length; o < a; ++o) vc(s, r[o], e, n)
    return
  }
  s.getBuilder(e.getZIndex(), 'Default').drawCustom(t, n, e.getRenderer(), e.getHitDetectionRenderer())
}
function w0(s, t, e, n, i) {
  const r = t.getGeometriesArray()
  let o, a
  for (o = 0, a = r.length; o < a; ++o) {
    const l = Sc[r[o].getType()]
    l(s, r[o], e, n, i)
  }
}
function R0(s, t, e, n, i) {
  const r = e.getStroke()
  if (r) {
    const a = s.getBuilder(e.getZIndex(), 'LineString')
    ;(a.setFillStrokeStyle(null, r), a.drawLineString(t, n))
  }
  const o = e.getText()
  if (o && o.getText()) {
    const a = (i || s).getBuilder(e.getZIndex(), 'Text')
    ;(a.setTextStyle(o), a.drawText(t, n))
  }
}
function T0(s, t, e, n, i) {
  const r = e.getStroke()
  if (r) {
    const a = s.getBuilder(e.getZIndex(), 'LineString')
    ;(a.setFillStrokeStyle(null, r), a.drawMultiLineString(t, n))
  }
  const o = e.getText()
  if (o && o.getText()) {
    const a = (i || s).getBuilder(e.getZIndex(), 'Text')
    ;(a.setTextStyle(o), a.drawText(t, n))
  }
}
function S0(s, t, e, n, i) {
  const r = e.getFill(),
    o = e.getStroke()
  if (o || r) {
    const l = s.getBuilder(e.getZIndex(), 'Polygon')
    ;(l.setFillStrokeStyle(r, o), l.drawMultiPolygon(t, n))
  }
  const a = e.getText()
  if (a && a.getText()) {
    const l = (i || s).getBuilder(e.getZIndex(), 'Text')
    ;(l.setTextStyle(a), l.drawText(t, n))
  }
}
function v0(s, t, e, n, i) {
  const r = e.getImage(),
    o = e.getText()
  let a
  if (r) {
    if (r.getImageState() != Q.LOADED) return
    let l = s
    if (i) {
      const c = r.getDeclutterMode()
      if (c !== 'none')
        if (((l = i), c === 'obstacle')) {
          const u = s.getBuilder(e.getZIndex(), 'Image')
          ;(u.setImageStyle(r, a), u.drawPoint(t, n))
        } else o && o.getText() && (a = {})
    }
    const h = l.getBuilder(e.getZIndex(), 'Image')
    ;(h.setImageStyle(r, a), h.drawPoint(t, n))
  }
  if (o && o.getText()) {
    let l = s
    i && (l = i)
    const h = l.getBuilder(e.getZIndex(), 'Text')
    ;(h.setTextStyle(o, a), h.drawText(t, n))
  }
}
function I0(s, t, e, n, i) {
  const r = e.getImage(),
    o = e.getText()
  let a
  if (r) {
    if (r.getImageState() != Q.LOADED) return
    let l = s
    if (i) {
      const c = r.getDeclutterMode()
      if (c !== 'none')
        if (((l = i), c === 'obstacle')) {
          const u = s.getBuilder(e.getZIndex(), 'Image')
          ;(u.setImageStyle(r, a), u.drawMultiPoint(t, n))
        } else o && o.getText() && (a = {})
    }
    const h = l.getBuilder(e.getZIndex(), 'Image')
    ;(h.setImageStyle(r, a), h.drawMultiPoint(t, n))
  }
  if (o && o.getText()) {
    let l = s
    i && (l = i)
    const h = l.getBuilder(e.getZIndex(), 'Text')
    ;(h.setTextStyle(o, a), h.drawText(t, n))
  }
}
function M0(s, t, e, n, i) {
  const r = e.getFill(),
    o = e.getStroke()
  if (r || o) {
    const l = s.getBuilder(e.getZIndex(), 'Polygon')
    ;(l.setFillStrokeStyle(r, o), l.drawPolygon(t, n))
  }
  const a = e.getText()
  if (a && a.getText()) {
    const l = (i || s).getBuilder(e.getZIndex(), 'Text')
    ;(l.setTextStyle(a), l.drawText(t, n))
  }
}
class b0 extends h0 {
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
    const i = e.extent,
      r = e.viewState,
      o = r.center,
      a = r.resolution,
      l = r.projection,
      h = r.rotation,
      c = l.getExtent(),
      u = this.getLayer().getSource(),
      d = e.pixelRatio,
      f = e.viewHints,
      g = !(f[Dt.ANIMATING] || f[Dt.INTERACTING]),
      _ = this.compositionContext_,
      m = Math.round(e.size[0] * d),
      p = Math.round(e.size[1] * d),
      y = u.getWrapX() && l.canWrapX(),
      x = y ? jt(c) : null,
      E = y ? Math.ceil((i[2] - c[2]) / x) + 1 : 1
    let C = y ? Math.floor((i[0] - c[0]) / x) : 0
    do {
      const R = this.getRenderTransform(o, a, h, d, m, p, C * x)
      t.execute(_, 1, R, h, g, void 0, n)
    } while (++C < E)
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = Kt(this.context.canvas.width, this.context.canvas.height, yl)
      this.compositionContext_ = t
    } else this.compositionContext_ = this.context
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = this.context.globalAlpha
      ;((this.context.globalAlpha = this.opacity_),
        this.context.drawImage(this.compositionContext_.canvas, 0, 0),
        (this.context.globalAlpha = t),
        f_(this.compositionContext_),
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
      i = t.layerStatesArray[t.layerIndex]
    ;(ig(this.pixelTransform, 1 / n, 1 / n), sg(this.inversePixelTransform, this.pixelTransform))
    const r = og(this.pixelTransform)
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
    ;(f.projection, (this.opacity_ = i.opacity), this.setupCompositionContext_())
    let g = !1
    if (c && i.extent && this.clipping) {
      const _ = An(i.extent)
      ;((c = Nt(_, t.extent)),
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
        const i = this.renderedCenter_,
          r = this.renderedResolution_,
          o = this.renderedRotation_,
          a = this.renderedProjection_,
          l = this.wrappedRenderedExtent_,
          h = this.getLayer(),
          c = [],
          u = n[0] * Qt,
          d = n[1] * Qt
        c.push(this.getRenderTransform(i, r, o, Qt, u, d, 0).slice())
        const f = h.getSource(),
          g = a.getExtent()
        if (f.getWrapX() && a.canWrapX() && !Ln(g, l)) {
          let _ = l[0]
          const m = jt(g)
          let p = 0,
            y
          for (; _ < g[0]; )
            (--p, (y = m * p), c.push(this.getRenderTransform(i, r, o, Qt, u, d, y).slice()), (_ += m))
          for (p = 0, _ = l[2]; _ > g[2]; )
            (++p, (y = m * p), c.push(this.getRenderTransform(i, r, o, Qt, u, d, y).slice()), (_ -= m))
        }
        this.hitDetectionImageData_ = _0(n, c, this.renderedFeatures_, h.getStyleFunction(), l, r, o)
      }
      e(m0(t, this.renderedFeatures_, this.hitDetectionImageData_))
    })
  }
  forEachFeatureAtCoordinate(t, e, n, i, r) {
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
            if (_ === 0) return ((h[m] = !0), r.splice(r.lastIndexOf(p), 1), i(f, l, g))
            ;((p.geometry = g), (p.distanceSq = _))
          }
        } else {
          if (_ === 0) return ((h[m] = !0), i(f, l, g))
          r.push((h[m] = { feature: f, layer: l, geometry: g, distanceSq: _, callback: i }))
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
    const i = t.viewHints[Dt.ANIMATING],
      r = t.viewHints[Dt.INTERACTING],
      o = e.getUpdateWhileAnimating(),
      a = e.getUpdateWhileInteracting()
    if ((this.ready && !o && i) || (!a && r)) return ((this.animatingOrInteracting_ = !0), !0)
    this.animatingOrInteracting_ = !1
    const l = t.extent,
      h = t.viewState,
      c = h.projection,
      u = h.resolution,
      d = t.pixelRatio,
      f = e.getRevision(),
      g = e.getRenderBuffer()
    let _ = e.getRenderOrder()
    _ === void 0 && (_ = y0)
    const m = h.center.slice(),
      p = Di(l, g * u),
      y = p.slice(),
      x = [p.slice()],
      E = c.getExtent()
    if (n.getWrapX() && c.canWrapX() && !Ln(E, t.extent)) {
      const I = jt(E),
        F = Math.max(jt(p) / 2, I)
      ;((p[0] = E[0] - F), (p[2] = E[2] + F), bg(m, c))
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
    const S = x0(u, d)
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
  renderFeature(t, e, n, i, r, o) {
    if (!n) return !1
    let a = !1
    if (Array.isArray(n))
      for (let l = 0, h = n.length; l < h; ++l)
        a = wl(i, t, n[l], e, this.boundHandleStyleImageChange_, r, o) || a
    else a = wl(i, t, n, e, this.boundHandleStyleImageChange_, r, o)
    return a
  }
}
class Ho extends Q_ {
  constructor(t) {
    super(t)
  }
  createRenderer() {
    return new b0(this)
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
    for (let i = 0, r = e.length; i < r; i++) {
      const o = t[i],
        a = e[i],
        l = { minX: o[0], minY: o[1], maxX: o[2], maxY: o[3], value: a }
      ;((n[i] = l), (this.items_[K(a)] = l))
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
      i = [n.minX, n.minY, n.maxX, n.maxY]
    Xh(i, t) || (this.remove(e), this.insert(t, e))
  }
  getAll() {
    return this.rbush_.all().map(function (e) {
      return e.value
    })
  }
  getInExtent(t) {
    const e = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3] }
    return this.rbush_.search(e).map(function (i) {
      return i.value
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
    for (let i = 0, r = t.length; i < r; i++) if (((n = e(t[i])), n)) return n
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
class P0 extends Ee {
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
    this.viewPromise_ = new Promise(function (n, i) {
      ;((e.viewResolver = n), (e.viewRejector = i))
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
function Rl(s) {
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
const gt = {
  ADDFEATURE: 'addfeature',
  CHANGEFEATURE: 'changefeature',
  CLEAR: 'clear',
  REMOVEFEATURE: 'removefeature',
  FEATURESLOADSTART: 'featuresloadstart',
  FEATURESLOADEND: 'featuresloadend',
  FEATURESLOADERROR: 'featuresloaderror',
}
function L0(s, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]]
}
let F0 = !1
function A0(s, t, e, n, i, r, o) {
  const a = new XMLHttpRequest()
  ;(a.open('GET', typeof s == 'function' ? s(e, n, i) : s, !0),
    t.getType() == 'arraybuffer' && (a.responseType = 'arraybuffer'),
    (a.withCredentials = F0),
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
          c ? r(t.readFeatures(c, { extent: e, featureProjection: i }), t.readProjection(c)) : o())
      } else o()
    }),
    (a.onerror = o),
    a.send())
}
function Tl(s, t) {
  return function (e, n, i, r, o) {
    const a = this
    A0(
      s,
      t,
      e,
      n,
      i,
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
class Jo extends P0 {
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
      (this.strategy_ = t.strategy !== void 0 ? t.strategy : L0))
    const e = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0
    ;((this.featuresRtree_ = e ? new Gs() : null),
      (this.loadedExtentsRtree_ = new Gs()),
      (this.loadingExtentsCount_ = 0),
      (this.nullGeometryFeatures_ = {}),
      (this.idIndex_ = {}),
      (this.uidIndex_ = {}),
      (this.featureChangeKeys_ = {}),
      (this.featuresCollection_ = null))
    let n, i
    ;(Array.isArray(t.features) ? (i = t.features) : t.features && ((n = t.features), (i = n.getArray())),
      !e && n === void 0 && (n = new tn(i)),
      i !== void 0 && this.addFeaturesInternal(i),
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
      const i = n.getExtent()
      this.featuresRtree_ && this.featuresRtree_.insert(i, t)
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
    const i = e.getId()
    return (
      i !== void 0 && (i.toString() in this.idIndex_ ? (n = !1) : (this.idIndex_[i.toString()] = e)),
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
      i = []
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
        ;(e.push(c), i.push(a))
      } else this.nullGeometryFeatures_[l] = a
    }
    if ((this.featuresRtree_ && this.featuresRtree_.load(e, i), this.hasListener(gt.ADDFEATURE)))
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
      const n = i => {
        this.removeFeatureInternal(i)
      }
      this.featuresRtree_.forEach(n)
      for (const i in this.nullGeometryFeatures_) this.removeFeatureInternal(this.nullGeometryFeatures_[i])
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
    return this.forEachFeatureInExtent(n, function (i) {
      if (i.getGeometry().intersectsCoordinate(t)) return e(i)
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
      const i = gg(t, e)
      return [].concat(...i.map(r => this.featuresRtree_.getInExtent(r)))
    }
    return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : []
  }
  getClosestFeatureToCoordinate(t, e) {
    const n = t[0],
      i = t[1]
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
          if (((a = c.closestPointXY(n, i, o, a)), a < u)) {
            r = h
            const d = Math.sqrt(a)
            ;((l[0] = n - d), (l[1] = i - d), (l[2] = n + d), (l[3] = i + d))
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
      i = e.getGeometry()
    if (!i)
      n in this.nullGeometryFeatures_ ||
        (this.featuresRtree_ && this.featuresRtree_.remove(e), (this.nullGeometryFeatures_[n] = e))
    else {
      const o = i.getExtent()
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
    const i = this.loadedExtentsRtree_,
      r = this.strategy_(t, e, n)
    for (let o = 0, a = r.length; o < a; ++o) {
      const l = r[o]
      i.forEachInExtent(l, function (c) {
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
        i.insert(l, { extent: l.slice() }))
    }
    this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0
  }
  refresh() {
    ;(this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh())
  }
  removeLoadedExtent(t) {
    const e = this.loadedExtentsRtree_
    let n
    ;(e.forEachInExtent(t, function (i) {
      if (Xh(i.extent, t)) return ((n = i), !0)
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
    const i = t.getId()
    return (
      i !== void 0 && delete this.idIndex_[i.toString()],
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
class O0 extends pt {
  constructor(t, e, n) {
    ;(super(t), (this.map = e), (this.frameState = n !== void 0 ? n : null))
  }
}
class D0 extends O0 {
  constructor(t, e, n, i, r, o) {
    ;(super(t, e, r),
      (this.originalEvent = n),
      (this.pixel_ = null),
      (this.coordinate_ = null),
      (this.dragging = i !== void 0 ? i : !1),
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
class k0 extends Ee {
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
class rr extends k0 {
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
const N0 = function (s) {
    const t = s.originalEvent
    return t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  zs = Bn,
  j0 = Fo,
  G0 = function (s) {
    return s.type == ht.SINGLECLICK
  },
  X0 = function (s) {
    const t = s.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  z0 = function (s) {
    const t = s.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  W0 = function (s) {
    const t = s.originalEvent
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
function Ws(s, t, e) {
  const n = e ? Rt(e.featureProjection) : null,
    i = e ? Rt(e.dataProjection) : null
  let r
  if (
    (n && i && !Ng(n, i) ? (r = (t ? s.clone() : s).transform(t ? n : i, t ? i : n)) : (r = s),
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
class Y0 extends Ic {
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
function as(s) {
  if (typeof s == 'string') {
    const t = JSON.parse(s)
    return t || null
  }
  return s !== null ? s : null
}
class sn extends Ye {
  constructor(t, e, n) {
    if (
      (super(), (this.ends_ = []), (this.maxDelta_ = -1), (this.maxDeltaRevision_ = -1), Array.isArray(t[0]))
    )
      this.setCoordinates(t, e)
    else if (e !== void 0 && n) (this.setFlatCoordinates(e, t), (this.ends_ = n))
    else {
      let i = this.getLayout()
      const r = t,
        o = [],
        a = []
      for (let l = 0, h = r.length; l < h; ++l) {
        const c = r[l]
        ;(l === 0 && (i = c.getLayout()), ie(o, c.getFlatCoordinates()), a.push(o.length))
      }
      ;(this.setFlatCoordinates(i, o), (this.ends_ = a))
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
  closestPointXY(t, e, n, i) {
    return i < hn(this.getExtent(), t, e)
      ? i
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(Wo(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Bo(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !1, t, e, n, i))
  }
  getCoordinateAtM(t, e, n) {
    return (this.layout != 'XYM' && this.layout != 'XYZM') || this.flatCoordinates.length === 0
      ? null
      : ((e = e !== void 0 ? e : !1),
        (n = n !== void 0 ? n : !1),
        a_(this.flatCoordinates, 0, this.ends_, this.stride, t, e, n))
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
      : new Ut(this.flatCoordinates.slice(t === 0 ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout)
  }
  getLineStrings() {
    const t = this.flatCoordinates,
      e = this.ends_,
      n = this.layout,
      i = []
    let r = 0
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o],
        h = new Ut(t.slice(r, l), n)
      ;(i.push(h), (r = l))
    }
    return i
  }
  getFlatMidpoints() {
    const t = [],
      e = this.flatCoordinates
    let n = 0
    const i = this.ends_,
      r = this.stride
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o],
        h = gc(e, n, l, r, 0.5)
      ;(ie(t, h), (n = l))
    }
    return t
  }
  getSimplifiedGeometryInternal(t) {
    const e = [],
      n = []
    return ((e.length = Ug(this.flatCoordinates, 0, this.ends_, this.stride, t, e, 0, n)), new sn(e, 'XY', n))
  }
  getType() {
    return 'MultiLineString'
  }
  intersectsExtent(t) {
    return Qg(this.flatCoordinates, 0, this.ends_, this.stride, t)
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
  closestPointXY(t, e, n, i) {
    if (i < hn(this.getExtent(), t, e)) return i
    const r = this.flatCoordinates,
      o = this.stride
    for (let a = 0, l = r.length; a < l; a += o) {
      const h = ge(t, e, r[a], r[a + 1])
      if (h < i) {
        i = h
        for (let c = 0; c < o; ++c) n[c] = r[a + c]
        n.length = o
      }
    }
    return i
  }
  getCoordinates() {
    return Ae(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getPoint(t) {
    const e = this.flatCoordinates ? this.flatCoordinates.length / this.stride : 0
    return t < 0 || e <= t
      ? null
      : new Gt(this.flatCoordinates.slice(t * this.stride, (t + 1) * this.stride), this.layout)
  }
  getPoints() {
    const t = this.flatCoordinates,
      e = this.layout,
      n = this.stride,
      i = []
    for (let r = 0, o = t.length; r < o; r += n) {
      const a = new Gt(t.slice(r, r + n), e)
      i.push(a)
    }
    return i
  }
  getType() {
    return 'MultiPoint'
  }
  intersectsExtent(t) {
    const e = this.flatCoordinates,
      n = this.stride
    for (let i = 0, r = e.length; i < r; i += n) {
      const o = e[i],
        a = e[i + 1]
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
function B0(s, t, e, n) {
  const i = []
  let r = re()
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((r = Gh(s, t, l[0], n)), i.push((r[0] + r[2]) / 2, (r[1] + r[3]) / 2), (t = l[l.length - 1]))
  }
  return i
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
      let i = this.getLayout()
      const r = t,
        o = [],
        a = []
      for (let l = 0, h = r.length; l < h; ++l) {
        const c = r[l]
        l === 0 && (i = c.getLayout())
        const u = o.length,
          d = c.getEnds()
        for (let f = 0, g = d.length; f < g; ++f) d[f] += u
        ;(ie(o, c.getFlatCoordinates()), a.push(d))
      }
      ;((e = i), (t = o), (n = a))
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
      for (let i = 0, r = e.length; i < r; ++i) e[i] += n
    }
    ;(this.endss_.push(e), this.changed())
  }
  clone() {
    const t = this.endss_.length,
      e = new Array(t)
    for (let i = 0; i < t; ++i) e[i] = this.endss_[i].slice()
    const n = new rn(this.flatCoordinates.slice(), this.layout, e)
    return (n.applyProperties(this), n)
  }
  closestPointXY(t, e, n, i) {
    return i < hn(this.getExtent(), t, e)
      ? i
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(Yg(this.flatCoordinates, 0, this.endss_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Bg(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, this.maxDelta_, !0, t, e, n, i))
  }
  containsXY(t, e) {
    return Hg(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t, e)
  }
  getArea() {
    return $g(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride)
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
      const t = B0(this.flatCoordinates, 0, this.endss_, this.stride)
      ;((this.flatInteriorPoints_ = Jg(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t)),
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
      ;(i_(t, 0, this.endss_, this.stride)
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
      (e.length = Kg(this.flatCoordinates, 0, this.endss_, this.stride, Math.sqrt(t), e, 0, n)),
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
      i = n[n.length - 1]
    if (e !== 0) for (let r = 0, o = n.length; r < o; ++r) n[r] -= e
    return new Xt(this.flatCoordinates.slice(e, i), this.layout, n)
  }
  getPolygons() {
    const t = this.layout,
      e = this.flatCoordinates,
      n = this.endss_,
      i = []
    let r = 0
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = n[o].slice(),
        h = l[l.length - 1]
      if (r !== 0) for (let u = 0, d = l.length; u < d; ++u) l[u] -= r
      const c = new Xt(e.slice(r, h), t, l)
      ;(i.push(c), (r = h))
    }
    return i
  }
  getType() {
    return 'MultiPolygon'
  }
  intersectsExtent(t) {
    return e_(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 3), this.flatCoordinates || (this.flatCoordinates = []))
    const n = Vg(this.flatCoordinates, 0, t, this.stride, this.endss_)
    if (n.length === 0) this.flatCoordinates.length = 0
    else {
      const i = n[n.length - 1]
      this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1]
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
  closestPointXY(t, e, n, i) {
    if (i < hn(this.getExtent(), t, e)) return i
    const r = this.geometries_
    for (let o = 0, a = r.length; o < a; ++o) i = r[o].closestPointXY(t, e, n, i)
    return i
  }
  containsXY(t, e) {
    const n = this.geometries_
    for (let i = 0, r = n.length; i < r; ++i) if (n[i].containsXY(t, e)) return !0
    return !1
  }
  computeExtent(t) {
    ko(t)
    const e = this.geometries_
    for (let n = 0, i = e.length; n < i; ++n) zh(t, e[n].getExtent())
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
    for (let n = 0, i = e.length; n < i; ++n)
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
    let i = !1
    for (let r = 0, o = n.length; r < o; ++r) {
      const a = n[r],
        l = a.getSimplifiedGeometry(t)
      ;(e.push(l), l !== a && (i = !0))
    }
    if (i) {
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
    for (let n = 0, i = e.length; n < i; ++n) if (e[n].intersectsExtent(t)) return !0
    return !1
  }
  isEmpty() {
    return this.geometries_.length === 0
  }
  rotate(t, e) {
    const n = this.geometries_
    for (let i = 0, r = n.length; i < r; ++i) n[i].rotate(t, e)
    this.changed()
  }
  scale(t, e, n) {
    n || (n = Un(this.getExtent()))
    const i = this.geometries_
    for (let r = 0, o = i.length; r < o; ++r) i[r].scale(t, e, n)
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
    for (let n = 0, i = e.length; n < i; ++n) e[n].applyTransform(t)
    this.changed()
  }
  translate(t, e) {
    const n = this.geometries_
    for (let i = 0, r = n.length; i < r; ++i) n[i].translate(t, e)
    this.changed()
  }
  disposeInternal() {
    ;(this.unlistenGeometriesChange_(), super.disposeInternal())
  }
}
function Sl(s) {
  const t = []
  for (let e = 0, n = s.length; e < n; ++e) t.push(s[e].clone())
  return t
}
class oi extends Y0 {
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
    const i = so(n.geometry, e),
      r = new mt()
    return (
      this.geometryName_
        ? r.setGeometryName(this.geometryName_)
        : this.extractGeometryName_ && 'geometry_name' in n !== void 0 && r.setGeometryName(n.geometry_name),
      r.setGeometry(i),
      'id' in n && r.setId(n.id),
      n.properties && r.setProperties(n.properties, !0),
      r
    )
  }
  readFeaturesFromObject(t, e) {
    const n = t
    let i = null
    if (n.type === 'FeatureCollection') {
      const r = t
      i = []
      const o = r.features
      for (let a = 0, l = o.length; a < l; ++a) i.push(this.readFeatureFromObject(o[a], e))
    } else i = [this.readFeatureFromObject(t, e)]
    return i
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
      i = t.getId()
    if ((i !== void 0 && (n.id = i), !t.hasProperties())) return n
    const r = t.getProperties(),
      o = t.getGeometry()
    return (o && ((n.geometry = ro(o, e)), delete r[t.getGeometryName()]), Vn(r) || (n.properties = r), n)
  }
  writeFeaturesObject(t, e) {
    e = this.adaptOptions(e)
    const n = []
    for (let i = 0, r = t.length; i < r; ++i) n.push(this.writeFeatureObject(t[i], e))
    return { type: 'FeatureCollection', features: n }
  }
  writeGeometryObject(t, e) {
    return ro(t, this.adaptOptions(e))
  }
}
function so(s, t) {
  if (!s) return null
  let e
  switch (s.type) {
    case 'Point': {
      e = U0(s)
      break
    }
    case 'LineString': {
      e = Z0(s)
      break
    }
    case 'Polygon': {
      e = H0(s)
      break
    }
    case 'MultiPoint': {
      e = $0(s)
      break
    }
    case 'MultiLineString': {
      e = K0(s)
      break
    }
    case 'MultiPolygon': {
      e = q0(s)
      break
    }
    case 'GeometryCollection': {
      e = V0(s)
      break
    }
    default:
      throw new Error('Unsupported GeoJSON type: ' + s.type)
  }
  return Ws(e, !1, t)
}
function V0(s, t) {
  const e = s.geometries.map(function (n) {
    return so(n, t)
  })
  return new ze(e)
}
function U0(s) {
  return new Gt(s.coordinates)
}
function Z0(s) {
  return new Ut(s.coordinates)
}
function K0(s) {
  return new sn(s.coordinates)
}
function $0(s) {
  return new Jn(s.coordinates)
}
function q0(s) {
  return new rn(s.coordinates)
}
function H0(s) {
  return new Xt(s.coordinates)
}
function ro(s, t) {
  s = Ws(s, !0, t)
  const e = s.getType()
  let n
  switch (e) {
    case 'Point': {
      n = im(s)
      break
    }
    case 'LineString': {
      n = Q0(s)
      break
    }
    case 'Polygon': {
      n = sm(s, t)
      break
    }
    case 'MultiPoint': {
      n = em(s)
      break
    }
    case 'MultiLineString': {
      n = tm(s)
      break
    }
    case 'MultiPolygon': {
      n = nm(s, t)
      break
    }
    case 'GeometryCollection': {
      n = J0(s, t)
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
function J0(s, t) {
  return (
    (t = Object.assign({}, t)),
    delete t.featureProjection,
    {
      type: 'GeometryCollection',
      geometries: s.getGeometriesArray().map(function (n) {
        return ro(n, t)
      }),
    }
  )
}
function Q0(s, t) {
  return { type: 'LineString', coordinates: s.getCoordinates() }
}
function tm(s, t) {
  return { type: 'MultiLineString', coordinates: s.getCoordinates() }
}
function em(s, t) {
  return { type: 'MultiPoint', coordinates: s.getCoordinates() }
}
function nm(s, t) {
  let e
  return (t && (e = t.rightHanded), { type: 'MultiPolygon', coordinates: s.getCoordinates(e) })
}
function im(s, t) {
  return { type: 'Point', coordinates: s.getCoordinates() }
}
function sm(s, t) {
  let e
  return (t && (e = t.rightHanded), { type: 'Polygon', coordinates: s.getCoordinates(e) })
}
class rm extends Ic {
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
function ls(s) {
  return typeof s == 'string' ? s : ''
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
  closestPointXY(t, e, n, i) {
    const r = this.flatCoordinates,
      o = t - r[0],
      a = e - r[1],
      l = o * o + a * a
    if (l < i) {
      if (l === 0) for (let h = 0; h < this.stride; ++h) n[h] = r[h]
      else {
        const h = this.getRadius() / Math.sqrt(l)
        ;((n[0] = r[0] + h * o), (n[1] = r[1] + h * a))
        for (let c = 2; c < this.stride; ++c) n[c] = r[c]
      }
      return ((n.length = this.stride), l)
    }
    return i
  }
  containsXY(t, e) {
    const n = this.flatCoordinates,
      i = t - n[0],
      r = e - n[1]
    return i * i + r * r <= this.getRadiusSquared_()
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
    if (Nt(t, e)) {
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
      i = t.slice()
    i[e] = i[0] + n
    for (let r = 1; r < e; ++r) i[e + r] = t[r]
    ;(this.setFlatCoordinates(this.layout, i), this.changed())
  }
  setCenterAndRadius(t, e, n) {
    ;(this.setLayout(n, t, 0), this.flatCoordinates || (this.flatCoordinates = []))
    const i = this.flatCoordinates
    let r = rc(i, 0, t, this.stride)
    i[r++] = i[0] + e
    for (let o = 1, a = this.stride; o < a; ++o) i[r++] = i[o]
    ;((i.length = r), this.changed())
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
      i = this.getStride()
    ;(this.setCenter(Xo(n, 0, n.length, i, t, e, n)), this.changed())
  }
}
ji.prototype.transform
const om = { POINT: Gt, LINESTRING: Ut, POLYGON: Xt, MULTIPOINT: Jn, MULTILINESTRING: sn, MULTIPOLYGON: rn },
  Mc = 'EMPTY',
  bc = 'Z',
  Pc = 'M',
  am = 'ZM',
  z = { START: 0, TEXT: 1, LEFT_PAREN: 2, RIGHT_PAREN: 3, NUMBER: 4, COMMA: 5, EOF: 6 },
  lm = {
    Point: 'POINT',
    LineString: 'LINESTRING',
    Polygon: 'POLYGON',
    MultiPoint: 'MULTIPOINT',
    MultiLineString: 'MULTILINESTRING',
    MultiPolygon: 'MULTIPOLYGON',
    GeometryCollection: 'GEOMETRYCOLLECTION',
    Circle: 'CIRCLE',
  }
class hm {
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
      i
    if (t == '(') i = z.LEFT_PAREN
    else if (t == ',') i = z.COMMA
    else if (t == ')') i = z.RIGHT_PAREN
    else if (this.isNumeric_(t) || t == '-') ((i = z.NUMBER), (n = this.readNumber_()))
    else if (this.isAlpha_(t)) ((i = z.TEXT), (n = this.readText_()))
    else {
      if (this.isWhiteSpace_(t)) return this.nextToken()
      if (t === '') i = z.EOF
      else throw new Error('Unexpected character: ' + t)
    }
    return { position: e, value: n, type: i }
  }
  readNumber_() {
    let t
    const e = this.index_
    let n = !1,
      i = !1
    do (t == '.' ? (n = !0) : (t == 'e' || t == 'E') && (i = !0), (t = this.nextChar_()))
    while (this.isNumeric_(t, n) || (!i && (t == 'e' || t == 'E')) || (i && (t == '-' || t == '+')))
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
class cm {
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
      ;(n === bc ? (t = 'XYZ') : n === Pc ? (t = 'XYM') : n === am && (t = 'XYZM'),
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
      const i = this.token_
      if (this.match(z.NUMBER)) t.push(i.value)
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
      const i = om[e]
      if (!i) throw new Error('Invalid geometry type: ' + e)
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
      return new i(r, this.layout_)
    }
    throw new Error(this.formatErrorMessage_())
  }
}
class hs extends rm {
  constructor(t) {
    ;(super(), (t = t || {}), (this.splitCollection_ = t.splitCollection !== void 0 ? t.splitCollection : !1))
  }
  parse_(t) {
    const e = new hm(t)
    return new cm(e).parse()
  }
  readFeatureFromText(t, e) {
    const n = this.readGeometryFromText(t, e),
      i = new mt()
    return (i.setGeometry(n), i)
  }
  readFeaturesFromText(t, e) {
    let n = []
    const i = this.readGeometryFromText(t, e)
    this.splitCollection_ && i.getType() == 'GeometryCollection' ? (n = i.getGeometriesArray()) : (n = [i])
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
    const i = new ze(n)
    return this.writeGeometryText(i, e)
  }
  writeGeometryText(t, e) {
    return Ac(Ws(t, !0, e))
  }
}
function Lc(s) {
  const t = s.getCoordinates()
  return t.length === 0 ? '' : t.join(' ')
}
function um(s) {
  const t = [],
    e = s.getPoints()
  for (let n = 0, i = e.length; n < i; ++n) t.push('(' + Lc(e[n]) + ')')
  return t.join(',')
}
function dm(s) {
  const t = [],
    e = s.getGeometries()
  for (let n = 0, i = e.length; n < i; ++n) t.push(Ac(e[n]))
  return t.join(',')
}
function Qo(s) {
  const t = s.getCoordinates(),
    e = []
  for (let n = 0, i = t.length; n < i; ++n) e.push(t[n].join(' '))
  return e.join(',')
}
function fm(s) {
  const t = [],
    e = s.getLineStrings()
  for (let n = 0, i = e.length; n < i; ++n) t.push('(' + Qo(e[n]) + ')')
  return t.join(',')
}
function Fc(s) {
  const t = [],
    e = s.getLinearRings()
  for (let n = 0, i = e.length; n < i; ++n) t.push('(' + Qo(e[n]) + ')')
  return t.join(',')
}
function gm(s) {
  const t = [],
    e = s.getPolygons()
  for (let n = 0, i = e.length; n < i; ++n) t.push('(' + Fc(e[n]) + ')')
  return t.join(',')
}
function _m(s) {
  const t = s.getLayout()
  let e = ''
  return ((t === 'XYZ' || t === 'XYZM') && (e += bc), (t === 'XYM' || t === 'XYZM') && (e += Pc), e)
}
const mm = {
  Point: Lc,
  LineString: Qo,
  Polygon: Fc,
  MultiPoint: um,
  MultiLineString: fm,
  MultiPolygon: gm,
  GeometryCollection: dm,
}
function Ac(s) {
  const t = s.getType(),
    e = mm[t],
    n = e(s)
  let i = lm[t]
  if (typeof s.getFlatCoordinates == 'function') {
    const r = _m(s)
    r.length > 0 && (i += ' ' + r)
  }
  return n.length === 0 ? i + ' ' + Mc : i + '(' + n + ')'
}
const cs = { DRAWSTART: 'drawstart', DRAWEND: 'drawend', DRAWABORT: 'drawabort' }
class us extends pt {
  constructor(t, e) {
    ;(super(t), (this.feature = e))
  }
}
function pm(s, t) {
  const e = []
  for (let n = 0; n < t.length; ++n) {
    const r = t[n].getGeometry()
    Oc(s, r, e)
  }
  return e
}
function ds(s, t) {
  return ge(s[0], s[1], t[0], t[1])
}
function On(s, t) {
  const e = s.length
  return t < 0 ? s[t + e] : t >= e ? s[t - e] : s[t]
}
function fs(s, t, e) {
  let n, i
  t < e ? ((n = t), (i = e)) : ((n = e), (i = t))
  const r = Math.ceil(n),
    o = Math.floor(i)
  if (r > o) {
    const l = Dn(s, n),
      h = Dn(s, i)
    return ds(l, h)
  }
  let a = 0
  if (n < r) {
    const l = Dn(s, n),
      h = On(s, r)
    a += ds(l, h)
  }
  if (o < i) {
    const l = On(s, o),
      h = Dn(s, i)
    a += ds(l, h)
  }
  for (let l = r; l < o - 1; ++l) {
    const h = On(s, l),
      c = On(s, l + 1)
    a += ds(h, c)
  }
  return a
}
function Oc(s, t, e) {
  if (t instanceof Ut) {
    gs(s, t.getCoordinates(), !1, e)
    return
  }
  if (t instanceof sn) {
    const n = t.getCoordinates()
    for (let i = 0, r = n.length; i < r; ++i) gs(s, n[i], !1, e)
    return
  }
  if (t instanceof Xt) {
    const n = t.getCoordinates()
    for (let i = 0, r = n.length; i < r; ++i) gs(s, n[i], !0, e)
    return
  }
  if (t instanceof rn) {
    const n = t.getCoordinates()
    for (let i = 0, r = n.length; i < r; ++i) {
      const o = n[i]
      for (let a = 0, l = o.length; a < l; ++a) gs(s, o[a], !0, e)
    }
    return
  }
  if (t instanceof ze) {
    const n = t.getGeometries()
    for (let i = 0; i < n.length; ++i) Oc(s, n[i], e)
    return
  }
}
const vr = { index: -1, endIndex: NaN }
function ym(s, t, e, n) {
  const i = s[0],
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
        x = Dc(i, r, p, y)
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
function gs(s, t, e, n) {
  const i = s[0],
    r = s[1]
  for (let o = 0, a = t.length - 1; o < a; ++o) {
    const l = t[o],
      h = t[o + 1],
      c = Dc(i, r, l, h)
    if (c.squaredDistance === 0) {
      const u = o + c.along
      n.push({ coordinates: t, ring: e, startIndex: u, endIndex: u })
      return
    }
  }
}
const Ir = { along: 0, squaredDistance: 0 }
function Dc(s, t, e, n) {
  const i = e[0],
    r = e[1],
    o = n[0],
    a = n[1],
    l = o - i,
    h = a - r
  let c = 0,
    u = i,
    d = r
  return (
    (l !== 0 || h !== 0) &&
      ((c = ct(((s - i) * l + (t - r) * h) / (l * l + h * h), 0, 1)), (u += l * c), (d += h * c)),
    (Ir.along = c),
    (Ir.squaredDistance = Qh(ge(s, t, u, d), 10)),
    Ir
  )
}
function Dn(s, t) {
  const e = s.length
  let n = Math.floor(t)
  const i = t - n
  n >= e ? (n -= e) : n < 0 && (n += e)
  let r = n + 1
  r >= e && (r -= e)
  const o = s[n],
    a = o[0],
    l = o[1],
    h = s[r],
    c = h[0] - a,
    u = h[1] - l
  return [a + c * i, l + u * i]
}
class xm extends rr {
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
      (this.mode_ = Cm(this.type_)),
      (this.stopClick_ = !!t.stopClick),
      (this.minPoints_ = t.minPoints ? t.minPoints : this.mode_ === 'Polygon' ? 3 : 2),
      (this.maxPoints_ = this.mode_ === 'Circle' ? 2 : t.maxPoints ? t.maxPoints : 1 / 0),
      (this.finishCondition_ = t.finishCondition ? t.finishCondition : Bn),
      (this.geometryLayout_ = t.geometryLayout ? t.geometryLayout : 'XY'))
    let n = t.geometryFunction
    if (!n) {
      const i = this.mode_
      if (i === 'Circle')
        n = function (r, o, a) {
          const l = o || new ji([NaN, NaN]),
            h = H(r[0]),
            c = _e(h, H(r[r.length - 1]))
          return (l.setCenterAndRadius(h, Math.sqrt(c), this.geometryLayout_), l)
        }
      else {
        let r
        ;(i === 'Point' ? (r = Gt) : i === 'LineString' ? (r = Ut) : i === 'Polygon' && (r = Xt),
          (n = function (o, a, l) {
            return (
              a
                ? i === 'Polygon'
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
        style: t.style ? t.style : Em(),
        updateWhileInteracting: !0,
      })),
      (this.geometryName_ = t.geometryName),
      (this.condition_ = t.condition ? t.condition : X0),
      this.freehandCondition_,
      t.freehand
        ? (this.freehandCondition_ = zs)
        : (this.freehandCondition_ = t.freehandCondition ? t.freehandCondition : z0),
      this.traceCondition_,
      this.setTrace(t.trace || !1),
      (this.traceState_ = { active: !1 }),
      (this.traceSource_ = t.traceSource || t.source || null),
      this.addChangeListener(Xs.ACTIVE, this.updateState_))
  }
  setTrace(t) {
    let e
    ;(t ? (t === !0 ? (e = zs) : (e = t)) : (e = j0), (this.traceCondition_ = e))
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
              this.handlePointerMove_(new D0(ht.POINTERMOVE, t.map, t.originalEvent, !1, t.frameState))
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
      i = e.getCoordinateFromPixel([t.pixel[0] + this.snapTolerance_, t.pixel[1] - this.snapTolerance_]),
      r = It([n, i]),
      o = this.traceSource_.getFeaturesInExtent(r)
    if (o.length === 0) return
    const a = pm(t.coordinate, o)
    a.length && (this.traceState_ = { active: !0, startPx: t.pixel.slice(), targets: a, targetIndex: -1 })
  }
  addOrRemoveTracedCoordinates_(t, e) {
    const n = t.startIndex <= t.endIndex,
      i = t.startIndex <= e
    n === i
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
      const i = Math.ceil(t)
      let r = Math.floor(e)
      ;(r === e && (r -= 1), (n = r - i + 1))
    } else {
      const i = Math.floor(t)
      let r = Math.ceil(e)
      ;(r === e && (r += 1), (n = i - r + 1))
    }
    n > 0 && this.removeLastPoints_(n)
  }
  addTracedCoordinates_(t, e, n) {
    if (e === n) return
    const i = []
    if (e < n) {
      const r = Math.ceil(e)
      let o = Math.floor(n)
      o === n && (o -= 1)
      for (let a = r; a <= o; ++a) i.push(On(t.coordinates, a))
    } else {
      const r = Math.floor(e)
      let o = Math.ceil(n)
      o === n && (o += 1)
      for (let a = r; a >= o; --a) i.push(On(t.coordinates, a))
    }
    i.length && this.appendCoordinates(i)
  }
  updateTrace_(t) {
    const e = this.traceState_
    if (!e.active || (e.targetIndex === -1 && Ls(e.startPx, t.pixel) < this.snapTolerance_)) return
    const n = ym(t.coordinate, e, this.getMap(), this.snapTolerance_)
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
    const i = e.targets[e.targetIndex]
    i.endIndex = n.endIndex
    const r = Dn(i.coordinates, i.endIndex),
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
        const i = !this.finishCoordinate_
        ;(i && this.startDrawing_(t.coordinate),
          !i && this.freehand_
            ? this.finishDrawing()
            : !this.freehand_ &&
              (!i || this.mode_ === 'Point') &&
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
        i = e[0] - n[0],
        r = e[1] - n[1],
        o = i * i + r * r
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
      let i = !1,
        r = [this.finishCoordinate_]
      const o = this.mode_
      if (o === 'Point') n = !0
      else if (o === 'Circle') n = this.sketchCoords_.length === 2
      else if (o === 'LineString') i = !e && this.sketchCoords_.length > this.minPoints_
      else if (o === 'Polygon') {
        const a = this.sketchCoords_
        ;((i = a[0].length > this.minPoints_),
          (r = [a[0][0], a[0][a[0].length - 2]]),
          e ? (r = [a[0][0]]) : (r = [a[0][0], a[0][a[0].length - 2]]))
      }
      if (i) {
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
      : ((this.sketchPoint_ = new mt(new Gt(t))), this.updateSketchFeatures_())
  }
  createOrUpdateCustomSketchLine_(t) {
    this.sketchLine_ || (this.sketchLine_ = new mt())
    const e = t.getLinearRing(0)
    let n = this.sketchLine_.getGeometry()
    n
      ? (n.setFlatCoordinates(e.getLayout(), e.getFlatCoordinates()), n.changed())
      : ((n = new Ut(e.getFlatCoordinates(), e.getLayout())), this.sketchLine_.setGeometry(n))
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
      this.sketchLineCoords_ && (this.sketchLine_ = new mt(new Ut(this.sketchLineCoords_))))
    const i = this.geometryFunction_(this.sketchCoords_, void 0, e)
    ;((this.sketchFeature_ = new mt()),
      this.geometryName_ && this.sketchFeature_.setGeometryName(this.geometryName_),
      this.sketchFeature_.setGeometry(i),
      this.updateSketchFeatures_(),
      this.dispatchEvent(new us(cs.DRAWSTART, this.sketchFeature_)))
  }
  modifyDrawing_(t) {
    const e = this.getMap(),
      n = this.sketchFeature_.getGeometry(),
      i = e.getView().getProjection(),
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
      this.geometryFunction_(this.sketchCoords_, n, i),
      this.sketchPoint_ && this.sketchPoint_.getGeometry().setCoordinates(t),
      n.getType() === 'Polygon' && this.mode_ !== 'Polygon'
        ? this.createOrUpdateCustomSketchLine_(n)
        : this.sketchLineCoords_ && this.sketchLine_.getGeometry().setCoordinates(this.sketchLineCoords_),
      this.updateSketchFeatures_())
  }
  addToDrawing_(t) {
    const e = this.sketchFeature_.getGeometry(),
      n = this.getMap().getView().getProjection()
    let i, r
    const o = this.mode_
    ;(o === 'LineString' || o === 'Circle'
      ? ((this.finishCoordinate_ = t.slice()),
        (r = this.sketchCoords_),
        r.length >= this.maxPoints_ && (this.freehand_ ? r.pop() : (i = !0)),
        r.push(t.slice()),
        this.geometryFunction_(r, e, n))
      : o === 'Polygon' &&
        ((r = this.sketchCoords_[0]),
        r.length >= this.maxPoints_ && (this.freehand_ ? r.pop() : (i = !0)),
        r.push(t.slice()),
        i && (this.finishCoordinate_ = r[0]),
        this.geometryFunction_(this.sketchCoords_, e, n)),
      this.createOrUpdateSketchPoint_(t.slice()),
      this.updateSketchFeatures_(),
      i && this.finishDrawing())
  }
  removeLastPoints_(t) {
    if (!this.sketchFeature_) return
    const e = this.sketchFeature_.getGeometry(),
      n = this.getMap().getView().getProjection(),
      i = this.mode_
    for (let r = 0; r < t; ++r) {
      let o
      if (i === 'LineString' || i === 'Circle') {
        if (((o = this.sketchCoords_), o.splice(-2, 1), o.length >= 2)) {
          this.finishCoordinate_ = o[o.length - 2].slice()
          const a = this.finishCoordinate_.slice()
          ;((o[o.length - 1] = a), this.createOrUpdateSketchPoint_(a))
        }
        ;(this.geometryFunction_(o, e, n),
          e.getType() === 'Polygon' && this.sketchLine_ && this.createOrUpdateCustomSketchLine_(e))
      } else if (i === 'Polygon') {
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
      i = this.getMap().getView().getProjection()
    ;(this.mode_ === 'LineString'
      ? (e.pop(), this.geometryFunction_(e, n, i))
      : this.mode_ === 'Polygon' && (e[0].pop(), this.geometryFunction_(e, n, i), (e = n.getCoordinates())),
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
    let i
    if (e === 'LineString' || e === 'Circle') i = this.sketchCoords_
    else if (e === 'Polygon') i = this.sketchCoords_ && this.sketchCoords_.length ? this.sketchCoords_[0] : []
    else return
    ;(n && i.shift(), i.pop())
    for (let o = 0; o < t.length; o++) this.addToDrawing_(t[o])
    const r = t[t.length - 1]
    ;(this.addToDrawing_(r), this.modifyDrawing_(r))
  }
  extend(t) {
    const n = t.getGeometry()
    ;((this.sketchFeature_ = t), (this.sketchCoords_ = n.getCoordinates()))
    const i = this.sketchCoords_[this.sketchCoords_.length - 1]
    ;((this.finishCoordinate_ = i.slice()),
      this.sketchCoords_.push(i.slice()),
      (this.sketchPoint_ = new mt(new Gt(i))),
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
function Em() {
  const s = Cc()
  return function (t, e) {
    return s[t.getGeometry().getType()]
  }
}
function Cm(s) {
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
class wm extends rr {
  constructor(t) {
    ;(super(t),
      this.on,
      this.once,
      this.un,
      (this.boundHandleFeatureChange_ = this.handleFeatureChange_.bind(this)),
      (this.condition_ = t.condition ? t.condition : W0),
      (this.defaultDeleteCondition_ = function (n) {
        return N0(n) && G0(n)
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
        style: t.style ? t.style : Tm(),
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
      const i = this.SEGMENT_WRITERS_[e.getType()]
      i && i(t, e)
    }
    const n = this.getMap()
    ;(n && n.isRendered() && this.getActive() && this.handlePointerAtPixel_(this.lastPixel_, n),
      t.addEventListener(ut.CHANGE, this.boundHandleFeatureChange_))
  }
  willModifyFeatures_(t, e) {
    if (!this.featuresBeingModified_) {
      this.featuresBeingModified_ = new tn()
      const n = this.featuresBeingModified_.getArray()
      for (let i = 0, r = e.length; i < r; ++i) {
        const o = e[i]
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
    e.forEach(function (i) {
      t === i.feature && n.push(i)
    })
    for (let i = n.length - 1; i >= 0; --i) {
      const r = n[i]
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
      i = { feature: t, geometry: e, segment: [n, n] }
    this.rBush_.insert(e.getExtent(), i)
  }
  writeMultiPointGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let i = 0, r = n.length; i < r; ++i) {
      const o = n[i],
        a = { feature: t, geometry: e, depth: [i], index: i, segment: [o, o] }
      this.rBush_.insert(e.getExtent(), a)
    }
  }
  writeLineStringGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let i = 0, r = n.length - 1; i < r; ++i) {
      const o = n.slice(i, i + 2),
        a = { feature: t, geometry: e, index: i, segment: o }
      this.rBush_.insert(It(o), a)
    }
  }
  writeMultiLineStringGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let i = 0, r = n.length; i < r; ++i) {
      const o = n[i]
      for (let a = 0, l = o.length - 1; a < l; ++a) {
        const h = o.slice(a, a + 2),
          c = { feature: t, geometry: e, depth: [i], index: a, segment: h }
        this.rBush_.insert(It(h), c)
      }
    }
  }
  writePolygonGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let i = 0, r = n.length; i < r; ++i) {
      const o = n[i]
      for (let a = 0, l = o.length - 1; a < l; ++a) {
        const h = o.slice(a, a + 2),
          c = { feature: t, geometry: e, depth: [i], index: a, segment: h }
        this.rBush_.insert(It(h), c)
      }
    }
  }
  writeMultiPolygonGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let i = 0, r = n.length; i < r; ++i) {
      const o = n[i]
      for (let a = 0, l = o.length; a < l; ++a) {
        const h = o[a]
        for (let c = 0, u = h.length - 1; c < u; ++c) {
          const d = h.slice(c, c + 2),
            f = { feature: t, geometry: e, depth: [a, i], index: c, segment: d }
          this.rBush_.insert(It(d), f)
        }
      }
    }
  }
  writeCircleGeometry_(t, e) {
    const n = e.getCenter(),
      i = { feature: t, geometry: e, index: vl, segment: [n, n] },
      r = { feature: t, geometry: e, index: ui, segment: [n, n] },
      o = [i, r]
    ;((i.featureSegments = o), (r.featureSegments = o), this.rBush_.insert(Es(n), i))
    let a = e
    this.rBush_.insert(a.getExtent(), r)
  }
  writeGeometryCollectionGeometry_(t, e) {
    const n = e.getGeometriesArray()
    for (let i = 0; i < n.length; ++i) {
      const r = n[i],
        o = this.SEGMENT_WRITERS_[r.getType()]
      o(t, r)
    }
  }
  createOrUpdateVertexFeature_(t, e, n) {
    let i = this.vertexFeature_
    return (
      i
        ? i.getGeometry().setCoordinates(t)
        : ((i = new mt(new Gt(t))), (this.vertexFeature_ = i), this.overlay_.getSource().addFeature(i)),
      i.set('features', e),
      i.set('geometries', n),
      i
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
      i = []
    for (let r = 0, o = this.dragSegments_.length; r < o; ++r) {
      const a = this.dragSegments_[r],
        l = a[0],
        h = l.feature
      n.includes(h) || n.push(h)
      const c = l.geometry
      i.includes(c) || i.push(c)
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
    this.createOrUpdateVertexFeature_(e, n, i)
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
      const i = [],
        r = n.getGeometry().getCoordinates(),
        o = It([r]),
        a = this.rBush_.getInExtent(o),
        l = {}
      a.sort(Rm)
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
          Bt(_, r) && !l[f][0] && (this.dragSegments_.push([u, 0]), (l[f][0] = u))
          continue
        }
        if (Bt(d[0], r) && !l[f][0]) {
          ;(this.dragSegments_.push([u, 0]), (l[f][0] = u))
          continue
        }
        if (Bt(d[1], r) && !l[f][1]) {
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
        K(d) in this.vertexSegments_ && !l[f][0] && !l[f][1] && this.insertVertexCondition_(t) && i.push(u)
      }
      i.length && this.willModifyFeatures_(t, [i])
      for (let h = i.length - 1; h >= 0; --h) this.insertVertex_(i[h], r)
    }
    return !!this.vertexFeature_
  }
  handleUpEvent(t) {
    for (let e = this.dragSegments_.length - 1; e >= 0; --e) {
      const n = this.dragSegments_[e][0],
        i = n.geometry
      if (i.getType() === 'Circle') {
        const r = i.getCenter(),
          o = n.featureSegments[0],
          a = n.featureSegments[1]
        ;((o.segment[0] = r),
          (o.segment[1] = r),
          (a.segment[0] = r),
          (a.segment[1] = r),
          this.rBush_.update(Es(r), o))
        let l = i
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
    const i = n || e.getCoordinateFromPixel(t)
    e.getView().getProjection()
    const r = function (l, h) {
      return Ml(i, l) - Ml(i, h)
    }
    let o, a
    if (this.hitDetection_) {
      const l = typeof this.hitDetection_ == 'object' ? h => h === this.hitDetection_ : void 0
      e.forEachFeatureAtPixel(
        t,
        (h, c, u) => {
          u && (u = new Gt(Zn(u.getCoordinates())))
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
      const l = An(Es(i, Il)),
        h = e.getView().getResolution() * this.pixelTolerance_,
        c = Qs(Di(l, h, Il))
      o = this.rBush_.getInExtent(c)
    }
    if (o && o.length > 0) {
      const l = o.sort(r)[0],
        h = l.segment
      let c = bl(i, l)
      const u = e.getPixelFromCoordinate(c)
      let d = Ls(t, u)
      if (a || d <= this.pixelTolerance_) {
        const f = {}
        if (
          ((f[K(h)] = !0),
          this.snapToPointer_ || ((this.delta_[0] = c[0] - i[0]), (this.delta_[1] = c[1] - i[1])),
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
            if ((Bt(h[0], C[0]) && Bt(h[1], C[1])) || (Bt(h[0], C[1]) && Bt(h[1], C[0]))) {
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
      i = t.feature,
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
    const c = { segment: [n[0], e], feature: i, geometry: r, depth: o, index: a }
    ;(h.insert(It(c.segment), c), this.dragSegments_.push([c, 1]))
    const u = { segment: [e, n[1]], feature: i, geometry: r, depth: o, index: a + 1 }
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
      i,
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
        (i = r),
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
          i = i[f.depth[1]]
        case 'Polygon':
          ;((i = i[f.depth[0]]),
            i.length > 4 &&
              (h == i.length - 1 && (h = 0),
              i.splice(h, 1),
              (n = !0),
              h === 0 && (i.pop(), i.push(i[0]), (u = i.length - 1))))
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
  updateSegmentIndices_(t, e, n, i) {
    this.rBush_.forEachInExtent(t.getExtent(), function (r) {
      r.geometry === t &&
        (n === void 0 || r.depth === void 0 || ln(r.depth, n)) &&
        r.index > e &&
        (r.index += i)
    })
  }
}
function Rm(s, t) {
  return s.index - t.index
}
function Ml(s, t, e) {
  const n = t.geometry
  if (n.getType() === 'Circle') {
    let r = n
    if (t.index === ui) {
      const o = _e(r.getCenter(), H(s)),
        a = Math.sqrt(o) - r.getRadius()
      return a * a
    }
  }
  const i = H(s)
  return ((Yn[0] = H(t.segment[0])), (Yn[1] = H(t.segment[1])), Mg(i, Yn))
}
function bl(s, t, e) {
  const n = t.geometry
  if (n.getType() === 'Circle' && t.index === ui) return Zn(n.getClosestPoint(H(s)))
  const i = H(s)
  return ((Yn[0] = H(t.segment[0])), (Yn[1] = H(t.segment[1])), Zn(No(i, Yn)))
}
function Tm() {
  const s = Cc()
  return function (t, e) {
    return s.Point
  }
}
class kc extends pt {
  constructor(t, e, n, i) {
    ;(super(t), (this.selected = e), (this.deselected = n), (this.mapBrowserEvent = i))
  }
}
const Sm = { SNAP: 'snap' }
class vm extends pt {
  constructor(t, e) {
    ;(super(t), (this.vertex = e.vertex), (this.vertexPixel = e.vertexPixel), (this.feature = e.feature))
  }
}
function Pl(s) {
  return s.feature ? s.feature : s.element ? s.element : null
}
const Pr = []
class Im extends rr {
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
      i = t.getGeometry()
    if (i) {
      const r = this.GEOMETRY_SEGMENTERS_[i.getType()]
      if (r) {
        this.indexedFeaturesExtents_[n] = i.getExtent(re())
        const o = []
        if ((r(o, i), o.length === 1)) this.rBush_.insert(It(o[0]), { feature: t, segment: o[0] })
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
          new vm(Sm.SNAP, { vertex: t.coordinate, vertexPixel: t.pixel, feature: e.feature }),
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
      i = K(t),
      r = this.indexedFeaturesExtents_[i]
    if (r) {
      const o = this.rBush_,
        a = []
      o.forEachInExtent(r, function (l) {
        t === l.feature && a.push(l)
      })
      for (let l = a.length - 1; l >= 0; --l) o.remove(a[l])
    }
    n && (bt(this.featureChangeListenerKeys_[i]), delete this.featureChangeListenerKeys_[i])
  }
  setMap(t) {
    const e = this.getMap(),
      n = this.featuresListenerKeys_,
      i = this.getFeatures_()
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
        i.forEach(r => this.addFeature(r))))
  }
  snapTo(t, e, n) {
    n.getView().getProjection()
    const i = H(e),
      r = Qs(Di(It([i]), n.getView().getResolution() * this.pixelTolerance_)),
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
              y = _e(i, p)
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
          _ = vg(i, p)
        } else {
          const [p, y] = m.segment
          y && ((Pr[0] = H(p)), (Pr[1] = H(y)), (_ = No(i, Pr)))
        }
        if (_) {
          const p = _e(i, _)
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
    const r = r_(e).getCoordinates()[0]
    for (let o = 0, a = r.length - 1; o < a; ++o) t.push(r.slice(o, o + 2))
  }
  segmentGeometryCollectionGeometry_(t, e) {
    const n = e.getGeometriesArray()
    for (let i = 0; i < n.length; ++i) {
      const r = this.GEOMETRY_SEGMENTERS_[n[i].getType()]
      r && r(t, n[i])
    }
  }
  segmentLineStringGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let i = 0, r = n.length - 1; i < r; ++i) t.push(n.slice(i, i + 2))
  }
  segmentMultiLineStringGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let i = 0, r = n.length; i < r; ++i) {
      const o = n[i]
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
    for (let i = 0, r = n.length; i < r; ++i) {
      const o = n[i]
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
    for (let i = 0, r = n.length; i < r; ++i) {
      const o = n[i]
      for (let a = 0, l = o.length - 1; a < l; ++a) t.push(o.slice(a, a + 2))
    }
  }
}
const Lr = { TRANSLATESTART: 'translatestart', TRANSLATING: 'translating', TRANSLATEEND: 'translateend' }
class Cs extends pt {
  constructor(t, e, n, i, r) {
    ;(super(t),
      (this.features = e),
      (this.coordinate = n),
      (this.startCoordinate = i),
      (this.mapBrowserEvent = r))
  }
}
class Mm extends rr {
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
        e = function (i) {
          return n.includes(i)
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
        i = H(this.lastCoordinate_),
        r = n[0] - i[0],
        o = n[1] - i[1],
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
      (n, i) => {
        if (
          !(!(n instanceof mt) || !this.filter_(n, i)) &&
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
var Ht = (s => (
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
))(Ht || {})
class Ll extends pt {
  removeFeatures
  removeArray
  remainArray
  remainFeatures
  constructor(t, e, n, i) {
    ;(super('remove'),
      (this.removeArray = t),
      (this.removeFeatures = e),
      (this.remainArray = n),
      (this.remainFeatures = i))
  }
}
class bm extends kc {
  selectArray
  selectData
  selectFeature
  constructor(t, e, n, i, r) {
    ;(super(t, i, r), (this.selectArray = e), (this.selectFeature = i[0]), (this.selectData = n))
  }
}
class Pm extends kc {
  deselectArray
  deselectData
  deselectFeature
  constructor(t, e, n, i, r) {
    ;(super(t, i, r), (this.deselectArray = e), (this.deselectFeature = r[0]), (this.deselectData = n))
  }
}
class Fr extends pt {
  data
  feature
  startAt
  endAt
  allFeatures
  allData
  constructor(t, e, n, i, r, o, a) {
    ;(super(t),
      (this.data = e),
      (this.allData = r),
      (this.allFeatures = o),
      (this.feature = n),
      (this.startAt = i),
      (this.endAt = a))
  }
}
class Fl extends Cs {
  dataArray
  startAt
  endAt
  constructor(t, e, n, i, r) {
    ;(super(t, n, r?.coord3857 ?? [], i.coord3857),
      (this.dataArray = e),
      (this.features = n),
      (this.startAt = i),
      (this.endAt = r))
  }
  get distance() {
    return this.endAt ? ec(this.startAt.coord, this.endAt.coord) : 0
  }
}
class Al extends pt {
  dataArray
  features
  constructor(t, e, n) {
    ;(super(t), (this.dataArray = e), (this.features = n))
  }
}
class Lm extends pt {
  array
  features
  constructor(t, e) {
    ;(super('complete'), (this.array = t), (this.features = e))
  }
}
const _s = [
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
function Fm(s) {
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
    n = /^([A-Z]+)(.*)$/s.exec(t)
  if (!n) return !1
  const i = n[1],
    r = n[2].trim()
  if (!e.includes(i)) return !1
  if (r === 'EMPTY') return !0
  const o = (r.match(/\(/g) || []).length,
    a = (r.match(/\)/g) || []).length
  if (o !== a) return !1
  if (i === 'POINT') {
    const l = /\(([^()]+)\)/.exec(r)
    if (!l) return !1
    const h = l[1].trim().split(/\s+/)
    if (h.length < 2 || !h.every(c => !isNaN(Number(c)))) return !1
  }
  return !0
}
function Am(s) {
  if (typeof s != 'string') return null
  const t = s.trim()
  if (!t) return null
  const e = /^SRID=\d+;/i,
    i = t
      .replace(e, '')
      .trim()
      .match(/^(POINT|LINESTRING|POLYGON|MULTIPOINT|MULTILINESTRING|MULTIPOLYGON|GEOMETRYCOLLECTION)\b/)
  return i ? i[1] : null
}
function ta(s) {
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
        ? t.features.every(i => ta(i) && i.type === 'Feature')
        : !1
}
function Om(s) {
  if (typeof s != 'string' || s.trim() === '') return !1
  const t = s.trim()
  if (t.startsWith('{'))
    try {
      const e = JSON.parse(t)
      return !!ta(e)
    } catch {
      return !1
    }
  return !1
}
function Dm(s) {
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
function ai(s = '') {
  return s.toLowerCase() + '_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36)
}
function Ol(s, t = 200, e = !1) {
  let n
  return (...i) => {
    ;(e && !n && s(...i),
      n && clearTimeout(n),
      (n = setTimeout(() => {
        s(...i)
      }, t)))
  }
}
function km(s, t) {
  const e = f => (f * Math.PI) / 180,
    n = f => (f * 180) / Math.PI,
    [i, r] = s,
    [o, a] = t,
    l = e(r),
    h = e(a),
    c = e(i - o),
    u = Math.sin(l) * Math.sin(h) + Math.cos(l) * Math.cos(h) * Math.cos(c),
    d = Math.acos(Math.min(1, Math.max(-1, u)))
  return n(d) ** 1.11696
}
const Nm = ['Point', 'LineString', 'Polygon', 'Circle'],
  jm = getComputedStyle(document.documentElement).getPropertyValue('--ol-foreground-color'),
  Gm = new Vt({
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
class Wm extends Ee {
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
  constructor(t, e = {}) {
    ;(super(),
      (this.#s = t),
      (this.#_ = t.getView()),
      (this.#n = this.#_.getProjection().getCode()),
      this.#b(e),
      this.#A(),
      this.#L(),
      this.#F(),
      this.showToolBar && this.render(),
      (this.#c = t.on('singleclick', this.#w.bind(this))))
    const n = Ol(this.#P.bind(this), 50)
    t.on('pointermove', n)
  }
  get source() {
    return this.#t
  }
  get layer() {
    return this.#f
  }
  addFeatureFromWKT(t, e, n = 'EPSG:4326') {
    if (!t || !Fm(t) || (e && this.#t.getFeatureById(e))) return !1
    let i
    if (typeof n == 'string') i = new hs().readFeature(t, { dataProjection: n, featureProjection: this.#n })
    else {
      const { style: o, ...a } = n
      ;((i = new hs().readFeature(t, a)), o && i.setStyle(o))
    }
    const r = Am(t)
    return (i.setId(e ?? ai(r ?? '')), this.#t.addFeature(i), !0)
  }
  addFeatureFromJSON(t, e = 'EPSG:4326') {
    if (!t) return !1
    let n = ''
    if (typeof t == 'object') {
      if (!ta(t)) return !1
      try {
        n = window.JSON.stringify(t)
      } catch {
        return !1
      }
    } else n = t
    if (Om(n)) {
      let i
      if (typeof e == 'string') i = new oi().readFeature(n, { dataProjection: e, featureProjection: this.#n })
      else {
        const { style: h, ...c } = e
        ;((i = new oi().readFeature(n, c)), h && i.setStyle(h))
      }
      const r = i.getGeometry()?.getType(),
        o = i.getProperties(),
        a = i.getId()
      if (!a) i.setId(ai(r))
      else if (this.#t.getFeatureById(a)) return !1
      if (o.geometryType === 'circle' && r === 'Polygon') {
        const h = o.center,
          c = o.radius,
          u = o.r
        if (Array.isArray(h) && c != null && u != null) {
          const d = ii(h),
            f = this.#n.endsWith('3857'),
            g = f ? d : h,
            _ = f ? c : u,
            m = new mt(new ji(g, _))
          ;(m.setId(a ?? ai('circle')), this.#t.addFeature(m))
        }
      } else this.#t.addFeature(i)
      return !0
    }
    return !1
  }
  enableDraw(t, e) {
    if (this.#s) {
      if ((this.disableDraw(), this.disableSnap(), (this.#r = t), t === 'None')) {
        this.showToolBar &&
          (this.drawTypes.forEach(n => {
            this.#o(n, !1)
          }),
          this.#u('freehand', !0, 'enable freehand draw.'))
        return
      }
      ;(this.disableSelect(),
        this.disableModify(),
        this.disableTranslate(),
        e && (this.sketchStyle = e),
        (this.#h = new xm({
          source: this.#t,
          type: t,
          freehand: this.#g && ms.includes(t),
          style: this.sketchStyle !== null ? this.sketchStyle : void 0,
        })),
        this.#s.addInteraction(this.#h),
        (this.#C = this.#h.on('drawstart', n => {
          this.dispatchEvent(n)
          const i = n.feature,
            o = i.getGeometry().getFlatCoordinates(),
            [a, l] = o,
            h = qt([a, l], this.#n, 'EPSG:4326'),
            c = ii(h),
            u = this.#t.getFeatures(),
            d = this.#i(u),
            f = { coord: h, coord3857: c }
          this.dispatchEvent(new Fr(Ht.DRAW_BEGIN, null, i, f, d, u))
        })),
        (this.#E = this.#h.on('drawend', n => {
          this.dispatchEvent(n)
          const i = n.feature,
            o = i.getGeometry().getFlatCoordinates(),
            [a, l] = o,
            h = qt([a, l], this.#n, 'EPSG:4326'),
            c = ii(h),
            u = { coord: h, coord3857: c },
            d = qt([o.at(-2), o.at(-1)], this.#n, 'EPSG:4326'),
            f = ii(d),
            g = { coord: d, coord3857: f }
          i.setId(ai(this.#r))
          const _ = this.#t.getFeatures()
          _.push(i)
          const m = this.#i(_)
          if (this.#r === 'Circle') {
            const p = this.#T(i),
              y = new Fr(Ht.DRAW_COMPLETE, p, i, u, m, _, g)
            this.dispatchEvent(y)
          } else {
            const [p] = this.#i([i]),
              y = new Fr(Ht.DRAW_COMPLETE, p, i, u, m, _, g)
            this.dispatchEvent(y)
          }
        })),
        this.enableSnap(),
        this.showToolBar &&
          (this.#o(t, !0),
          this.drawTypes.forEach(n => {
            if (n === t) return 'next loop'
            this.#o(n, !1)
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
        (this.drawTypes.forEach(t => {
          this.#o(t, !1)
        }),
        this.#u('freehand', !0, 'enable freehand draw.')),
      this.#s.removeInteraction(this.#h),
      (this.#h = void 0),
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
  select(t, e) {
    if (!this.#c) return []
    const n = e?.selectedStyle,
      i = e?.eachFeature
    let r = !0
    e?.fit === !1 && (r = !1)
    const o = []
    Array.isArray(t) ? o.push(...t) : o.push(t)
    const a = re(),
      l = []
    let h = !1
    if (
      (o.forEach((c, u) => {
        const d = this.#t.getFeatureById(c)
        if (d) {
          if ((l.push(d), this.#e.push(d), r)) {
            const f = d.getGeometry()?.getExtent()
            zh(a, f)
          }
          n && d.setStyle(n)
        }
        !h && i && d && (h = !!i(d, u))
      }),
      r && l.length)
    ) {
      const c = Xm
      ;(e?.fit !== !1 && (Object.assign(c, e?.fit === !0 ? {} : e?.fit), (c.padding = Dm(c.padding))),
        this.#_.fit(a, c))
    }
    return l
  }
  deselect(t, e) {
    const n = e?.deselectStyle,
      i = e?.eachFeature,
      r = []
    Array.isArray(t) ? r.push(...t) : r.push(t)
    let o = !1
    r.forEach((a, l) => {
      const h = this.#t.getFeatureById(a)
      ;(h && (this.#e.remove(h), h.setStyle(n)), !o && i && h && (o = !!i(h, l)))
    })
  }
  enableSelect(t = { multi: !0, box: !1, single: !1 }) {
    return (
      this.disableDraw(),
      (this.#x = t?.single === !0),
      (this.#p = t?.box === !0),
      (this.#y = t?.multi !== !1),
      this.#x && ((this.#y = !1), (this.#p = !1)),
      (this.#y || this.#p) && this.disableModify(),
      this.#c || (this.#c = this.#s.on('singleclick', this.#w.bind(this))),
      !0
    )
  }
  disableSelect() {
    return (xs(this.#c), (this.#c = null), !0)
  }
  enableTranslate(t) {
    return (
      this.enableSelect({ multi: !0 }),
      (this.enableMover = !0),
      this.disableModify(),
      this.disableDraw(),
      this.disableFreehand(),
      this.showToolBar && this.#o('translate', !0),
      this.#l
        ? (this.#l.setActive(!0), !0)
        : ((this.#l = new Mm({ features: this.#e })),
          this.#s?.addInteraction(this.#l),
          this.#l.on('translatestart', e => {
            ;(this.dispatchEvent(e), this.#k(e))
          }),
          this.#l.on('translateend', e => {
            ;(this.dispatchEvent(e), this.#N(e))
          }),
          !0)
    )
  }
  disableTranslate(t) {
    return ((this.enableMover = !1), this.#o('translate', !1), this.#l && this.#l.setActive(!1), !0)
  }
  enableModify(t) {
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
    ;(t !== null && (this.modifyingStyle = t),
      (this.#a = new wm({
        features: this.#e,
        style: this.modifyingStyle !== null ? this.modifyingStyle : void 0,
      })),
      this.#s?.addInteraction(this.#a),
      this.#a.on('modifystart', e => {
        this.dispatchEvent(e)
        const n = this.#i(e.features),
          i = new Al(Ht.MODIFY_BEGIN, n, e.features)
        this.dispatchEvent(i)
      }),
      this.#a.on('modifyend', e => {
        this.dispatchEvent(e)
        const n = this.#i(e.features),
          i = new Al(Ht.MODIFY_COMPLETE, n, e.features)
        this.dispatchEvent(i)
      }),
      this.enableSnap())
  }
  disableModify(t, e) {
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
    ;((this.#d = new Im({ source: this.#t, intersection: !0 })), this.#s?.addInteraction(this.#d))
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
        u = new Ll(l, a, c, h)
      this.dispatchEvent(u)
      return
    }
    const e = Array.isArray(t) ? t : [t],
      n = []
    e.forEach(a => {
      const l = this.#t.getFeatureById(a)
      l && (n.push(l), this.#t.removeFeature(l), this.#e.remove(l))
    })
    const i = this.#e.getArray(),
      r = this.#i(i),
      o = new Ll(this.#i(n), n, r, i)
    this.dispatchEvent(o)
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
    const t = this.#t.getFeatures(),
      e = this.#i(t),
      n = new Lm(e, t)
    this.dispatchEvent(n)
  }
  render() {
    ;(this.#I(), this.#M())
  }
  #I() {
    if (!this.#s?.getTargetElement()) return
    const e = this.#s.getTargetElement().querySelector('.ol-overlaycontainer-stopevent'),
      n = document.createElement('div')
    ;(n.classList.add('geom-editor-tool-bar'),
      n.classList.add('ol-control'),
      (n.style = 'pointer-events: auto;'),
      this.allButtons.forEach(i => {
        const r = document.createElement('button')
        r.classList.add('geom-editor-btn')
        const o = i.name
        ;(this.actions.includes(o) &&
          (o === 'complete'
            ? (r.disabled = !0)
            : this.#t.getFeatures().length
              ? (r.disabled = !1)
              : ((r.disabled = !0), (r.title = ''))),
          (r.innerHTML = i.icon(jm)),
          (r.title = i.title),
          (r.dataset.type = i.type),
          n.appendChild(r))
      }),
      e.appendChild(n),
      (this.toolBarContainer = n))
  }
  #M() {
    this.toolBarContainer &&
      this.toolBarContainer.addEventListener('click', t => {
        const n = t.target.closest('button')
        if (!n) return
        const i = n.dataset.type
        this.drawTypes.includes(i)
          ? this.#r === i
            ? this.enableSelect()
            : this.enableDraw(i)
          : i === 'freehand'
            ? this.#g
              ? this.disableFreehand()
              : this.enableFreehand()
            : i === 'modify'
              ? this.enableModifier
                ? this.disableModify()
                : this.enableModify()
              : i === 'translate'
                ? this.enableMover
                  ? this.disableTranslate()
                  : this.enableTranslate()
                : i === 'remove'
                  ? this.removeFeatures()
                  : this.completeEdit()
      })
  }
  #b(t) {
    const { layerStyle: e, selectedStyle: n } = t
    n && (this.selectedStyle = n)
    const i = Dl + 1
    ;((this.#f = new Ho({ zIndex: i, source: this.#t, className: this.#j(t), style: e })),
      (this.supportFreehand = t?.supportFreehand !== !1),
      (this.showToolBar = t?.showToolBar !== !1),
      Array.isArray(t.actions) && (this.actions = t.actions),
      Array.isArray(t.drawTypes) && (this.drawTypes = t.drawTypes))
    const r = _s.filter(a => this.drawTypes.includes(a.type))
    this.supportFreehand && r.push(_s.find(a => a.name === 'freehand'))
    const o = _s.filter(a => this.actions.includes(a.name))
    this.allButtons = [...r, ...o]
  }
  #w(t) {
    if (this.#t.getFeatures().length === 0) return
    if (!this.#s.hasFeatureAtPixel(t.pixel)) {
      ;(this.#e.forEach(r => {
        r.setStyle(void 0)
      }),
        this.#e.clear())
      return
    }
    const i = r => {
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
    this.#s.forEachFeatureAtPixel(
      t.pixel,
      r => {
        i(r)
      },
      { layerFilter: r => r === this.#f },
    )
  }
  #P(t) {
    if (t.dragging || !this.#c) return
    const e = t.map,
      n = e.getEventPixel(t.originalEvent),
      i = e.hasFeatureAtPixel(n)
    e.getTargetElement().style.cursor = i ? 'pointer' : ''
  }
  #L() {
    this.#t.on('changefeature', () => {})
    let t = !1
    const e = () => {
      this.showToolBar &&
        !t &&
        (this.actions.forEach(i => {
          this.#u(i, !0, zm[i])
        }),
        (t = !0))
    }
    this.#t.on('addfeature', e)
    const n = () => {
      ;((t = this.#t.getFeatures().length > 0),
        !t &&
          this.showToolBar &&
          this.actions.forEach(i => {
            if (i === 'complete') return 'next loop'
            this.#u(i, !1, '')
          }))
    }
    this.#t.on('removefeature', Ol(n))
  }
  #F() {
    const t = n => {
      const i = n.element,
        r = this.#e.getArray(),
        [o] = this.#i([i]),
        a = this.#i(r)
      this.dispatchEvent(new bm(Ht.SELECT, a, o, r, []))
    }
    this.#e.on('add', t)
    const e = n => {
      const i = n.element,
        [r] = this.#i([i]),
        o = this.#e.getArray(),
        a = this.#i([i]),
        l = [i]
      this.dispatchEvent(new Pm(Ht.DESELECT, a, r, o, l))
    }
    this.#e.on('remove', e)
  }
  #A() {
    this.#f && this.#s?.addLayer(this.#f)
  }
  #O(t) {
    const { feature: e, id: n } = this.#R(t)
    return { wkt: new hs().writeFeature(e, { dataProjection: this.#m, featureProjection: this.#n }), id: n }
  }
  #R(t) {
    let e
    return (t.getId() ? (e = t.getId()) : ((e = ai()), t.setId(e)), { id: e, feature: t })
  }
  #D(t) {
    const { feature: e, id: n } = this.#R(t),
      i = new oi().writeFeatureObject(e, { dataProjection: this.#m, featureProjection: this.#n }),
      r = new oi().writeFeature(e, { dataProjection: this.#m, featureProjection: this.#n })
    return { id: n, geojsonObj: i, geojson: r }
  }
  #i(t) {
    let e = []
    return (
      Array.isArray(t) ? (e = t) : (e = t.getArray()),
      e.map(n => {
        if (n.getGeometry()?.getType() === 'Circle') return this.#T(n)
        const { wkt: r, id: o } = this.#O(n),
          { geojson: a, geojsonObj: l } = this.#D(n)
        return { wkt: r, id: o, geojson: a, geojsonObj: l }
      })
    )
  }
  #T(t) {
    const e = t.getGeometry(),
      n = e.getFlatCoordinates(),
      i = qt(e.getCenter(), this.#n, 'EPSG:4326'),
      r = qt([n[2], n[3]], this.#n, 'EPSG:4326'),
      o = ec(i, r),
      a = km(i, r),
      l = ii(i),
      h = { geometryType: 'circle', center: i, radius: o, center3857: l, r: a },
      c = s_(i, o, 128),
      u = t.getId(),
      d = new mt(c)
    ;(d.setId(u), d.setProperties(h))
    const f = new hs().writeFeature(d, { dataProjection: 'EPSG:4326', featureProjection: this.#n }),
      g = new oi().writeFeatureObject(d, { dataProjection: 'EPSG:4326', featureProjection: this.#n }),
      _ = JSON.stringify(g)
    return { id: u, wkt: f, geojson: _, geojsonObj: g }
  }
  #k(t) {
    const { features: e, startCoordinate: n } = t
    this.dispatchEvent(this.#S(e, n))
  }
  #N(t) {
    const { features: e, startCoordinate: n, coordinate: i } = t
    this.dispatchEvent(this.#S(e, n, i))
  }
  #S(t, e, n) {
    const i = this.#i(t),
      r = qt(e, this.#n, 'EPSG:4326'),
      o = qt(e, this.#n, 'EPSG:3857'),
      a = { coord: r, coord3857: o }
    if (n) {
      const l = qt(n, this.#n, 'EPSG:4326'),
        h = qt(n, this.#n, 'EPSG:3857'),
        c = { coord: l, coord3857: h }
      return new Fl(Ht.TRANSLATE_END, i, t, a, c)
    }
    return new Fl(Ht.TRANSLATE_START, i, t, a)
  }
  #j(t) {
    const { className: e = 'ol-layer' } = t
    return [e, `geom-editor-layer z-index:${Dl + 1}`].join(' ')
  }
  #o(t, e) {
    const n = this.#v(t)
    n && (e ? (n.classList.remove('hidden'), n?.classList.add('selected')) : n?.classList.remove('selected'))
  }
  #u(t, e, n) {
    const i = this.#v(t)
    i && ((i.disabled = e === !1), (i.title = n))
  }
  #v(t) {
    return this.toolBarContainer?.querySelector(`[data-type="${t}"]`)
  }
}
const Ym = Vf,
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
k.on('select', s => {
  console.log({ event: s })
})
k.on('deselect', s => {
  console.log({ event: s })
})
k.on('drawstart', s => {
  console.log({ event: s })
})
k.on('drawend', s => {
  console.log({ event: s })
})
k.on('drawBegin', s => {
  console.log({ event: s })
})
k.on('drawComplete', s => {
  console.log({ event: s })
})
k.on('translatestart', s => {
  console.log({ event: s })
})
k.on('translateend', s => {
  console.log({ event: s })
})
k.on('translateBegin', s => {
  console.log({ event: s })
})
k.on('translateComplete', s => {
  console.log({ event: s })
})
k.on('modifystart', s => {
  console.log({ event: s })
})
k.on('modifyend', s => {
  console.log({ event: s })
})
k.on('modifyBegin', s => {
  console.log({ event: s })
})
k.on('modifyComplete', s => {
  console.log({ event: s })
})
k.on('remove', s => {
  console.log({ event: s })
})
k.on('complete', s => {
  console.log({ event: s })
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
  ;(console.log('addWKT'), k.addFeatureFromWKT(Bm, 'line1'), k.addFeatureFromWKT(Vm))
}
function Jm() {
  ;(console.log('addJSON'), k.addFeatureFromJSON(Zm))
}
function Qm() {
  ;(console.log('addJSONObj'), k.addFeatureFromJSON(Um), k.addFeatureFromJSON(Km))
}
function tp() {
  k.removeFeatures()
}
function ep() {
  k.removeFeatures(['line1', 'p2CQqn2lFk'])
}
function np() {
  k.removeAllFeatures().then(s => {
    console.log({ success: s })
  })
}
const kl = 'rgba(218,228,194,0.5)',
  Nl = 'rgba(255, 204, 51, 0.9)'
function ip() {
  const s = k.select(['circle'], {
    selectedStyle: new md({
      fill: new Ra({ color: kl }),
      stroke: new Ta({ color: Nl, width: 4 }),
      image: new _d({ radius: 7, fill: new Ra({ color: kl }), stroke: new Ta({ color: Nl, width: 2 }) }),
    }),
    eachFeature: (t, e) => {
      if ((console.log({ feat: t }), e === 0)) return !0
    },
  })
  console.log('selected features:', s)
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
function gp(s) {
  const t = s.target.value
  console.log('change type to:', t)
  const e = document.querySelector('#freehand'),
    n = document.querySelector('#freehand-box')
  ;(dp.includes(t)
    ? ((n.title = 'Freehand drawing for ' + t), (e.disabled = !1))
    : ((n.title = '仅线和面支持自由绘制'), (e.checked = !1), (e.disabled = !0), k.disableFreehand()),
    k.enableDraw(t, fp))
}
function _p(s) {
  const t = s.target.checked
  ;(console.log('change freehand to:', t), t ? k.enableFreehand() : k.disableFreehand())
}
