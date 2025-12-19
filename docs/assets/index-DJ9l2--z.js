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
const Jc = {
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
let Ul = class extends Error {
    constructor(t) {
      const e = Jc[t]
      ;(super(e), (this.code = t), (this.name = 'AssertionError'), (this.message = e))
    }
  },
  Ye = class {
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
const _i = { PROPERTYCHANGE: 'propertychange' }
let mo = class {
  constructor() {
    this.disposed = !1
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal())
  }
  disposeInternal() {}
}
function po(s, t) {
  return s > t ? 1 : s < t ? -1 : 0
}
function yo(s, t, e) {
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
function Qc(s, t) {
  const e = Array.isArray(t) ? t : [t],
    n = e.length
  for (let i = 0; i < n; i++) s[s.length] = e[i]
}
function $s(s, t) {
  const e = s.length
  if (e !== t.length) return !1
  for (let n = 0; n < e; n++) if (s[n] !== t[n]) return !1
  return !0
}
function tu(s, t, e) {
  const n = t || po
  return s.every(function (i, r) {
    if (r === 0) return !0
    const o = n(s[r - 1], i)
    return !(o > 0 || o === 0)
  })
}
function vs() {
  return !0
}
function qs() {
  return !1
}
function Is() {}
function eu(s) {
  let t = !1,
    e,
    n,
    i
  return function () {
    const r = Array.prototype.slice.call(arguments)
    return (
      (!t || this !== i || !$s(r, n)) && ((t = !0), (i = this), (n = r), (e = s.apply(this, arguments))),
      e
    )
  }
}
function Hs(s) {
  for (const t in s) delete s[t]
}
function nu(s) {
  let t
  for (t in s) return !1
  return !t
}
let Js = class extends mo {
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
    const r = e ? new Ye(t) : t
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
      for (delete a[n]; h--; ) this.removeEventListener(n, Is)
      delete o[n]
    }
    return l
  }
  disposeInternal() {
    this.listeners_ && Hs(this.listeners_)
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
          ? ((n[i] = Is), ++this.pendingRemovals_[t])
          : (n.splice(i, 1), n.length === 0 && delete this.listeners_[t]))
    }
  }
}
const k = {
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
function Z(s, t, e, n, i) {
  if ((n && n !== s && (e = e.bind(n)), i)) {
    const o = e
    e = function () {
      ;(s.removeEventListener(t, e), o.apply(this, arguments))
    }
  }
  const r = { target: s, type: t, listener: e }
  return (s.addEventListener(t, e), r)
}
function Ms(s, t, e, n) {
  return Z(s, t, e, n, !0)
}
function et(s) {
  s && s.target && (s.target.removeEventListener(s.type, s.listener), Hs(s))
}
let Ai = class extends Js {
  constructor() {
    ;(super(),
      (this.on = this.onInternal),
      (this.once = this.onceInternal),
      (this.un = this.unInternal),
      (this.revision_ = 0))
  }
  changed() {
    ;(++this.revision_, this.dispatchEvent(k.CHANGE))
  }
  getRevision() {
    return this.revision_
  }
  onInternal(t, e) {
    if (Array.isArray(t)) {
      const n = t.length,
        i = new Array(n)
      for (let r = 0; r < n; ++r) i[r] = Z(this, t[r], e)
      return i
    }
    return Z(this, t, e)
  }
  onceInternal(t, e) {
    let n
    if (Array.isArray(t)) {
      const i = t.length
      n = new Array(i)
      for (let r = 0; r < i; ++r) n[r] = Ms(this, t[r], e)
    } else n = Ms(this, t, e)
    return ((e.ol_key = n), n)
  }
  unInternal(t, e) {
    const n = e.ol_key
    if (n) iu(n)
    else if (Array.isArray(t)) for (let i = 0, r = t.length; i < r; ++i) this.removeEventListener(t[i], e)
    else this.removeEventListener(t, e)
  }
}
Ai.prototype.on
Ai.prototype.once
Ai.prototype.un
function iu(s) {
  if (Array.isArray(s)) for (let t = 0, e = s.length; t < e; ++t) et(s[t])
  else et(s)
}
function z() {
  throw new Error('Unimplemented abstract method.')
}
let su = 0
function mt(s) {
  return s.ol_uid || (s.ol_uid = String(++su))
}
let ga = class extends Ye {
    constructor(t, e, n) {
      ;(super(t), (this.key = e), (this.oldValue = n))
    }
  },
  Ce = class extends Ai {
    constructor(t) {
      ;(super(),
        this.on,
        this.once,
        this.un,
        mt(this),
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
        this.hasListener(n) && this.dispatchEvent(new ga(n, t, e)),
        (n = _i.PROPERTYCHANGE),
        this.hasListener(n) && this.dispatchEvent(new ga(n, t, e)))
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
        ;(delete this.values_[t], nu(this.values_) && (this.values_ = null), e || this.notify(t, n))
      }
    }
  }
const Nt = { ADD: 'add', REMOVE: 'remove' },
  _a = { LENGTH: 'length' }
let Ji = class extends Ye {
    constructor(t, e, n) {
      ;(super(t), (this.element = e), (this.index = n))
    }
  },
  _e = class extends Ce {
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
      return this.get(_a.LENGTH)
    }
    insertAt(t, e) {
      if (t < 0 || t > this.getLength()) throw new Error('Index out of bounds: ' + t)
      ;(this.unique_ && this.assertUnique_(e),
        this.array_.splice(t, 0, e),
        this.updateLength_(),
        this.dispatchEvent(new Ji(Nt.ADD, e, t)))
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
      return (this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(new Ji(Nt.REMOVE, e, t)), e)
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
        this.dispatchEvent(new Ji(Nt.REMOVE, i, t)),
        this.dispatchEvent(new Ji(Nt.ADD, e, t)))
    }
    updateLength_() {
      this.set(_a.LENGTH, this.array_.length)
    }
    assertUnique_(t, e) {
      for (let n = 0, i = this.array_.length; n < i; ++n)
        if (this.array_[n] === t && n !== e) throw new Ul(58)
    }
  }
function X(s, t) {
  if (!s) throw new Ul(t)
}
const Ge =
    typeof navigator < 'u' && typeof navigator.userAgent < 'u' ? navigator.userAgent.toLowerCase() : '',
  ru = Ge.includes('firefox'),
  ou = Ge.includes('safari') && !Ge.includes('chrom')
ou && (Ge.includes('version/15.4') || /cpu (os|iphone os) 15_4 like mac os x/.test(Ge))
const au = Ge.includes('webkit') && !Ge.includes('edge'),
  Vl = Ge.includes('macintosh'),
  Zl = typeof devicePixelRatio < 'u' ? devicePixelRatio : 1,
  Kl = typeof WorkerGlobalScope < 'u' && typeof OffscreenCanvas < 'u' && self instanceof WorkerGlobalScope,
  lu = typeof Image < 'u' && Image.prototype.decode,
  $l = (function () {
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
function Ot(s, t) {
  const e = t[0],
    n = t[1]
  return ((t[0] = s[0] * e + s[2] * n + s[4]), (t[1] = s[1] * e + s[3] * n + s[5]), t)
}
function mi(s, t, e, n, i, r, o, a) {
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
function ql(s, t) {
  const e = hu(t)
  X(e !== 0, 32)
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
function hu(s) {
  return s[0] * s[3] - s[1] * s[2]
}
let ma
function cu(s) {
  const t = 'matrix(' + s.join(', ') + ')'
  if (Kl) return t
  const e = ma || (ma = document.createElement('div'))
  return ((e.style.transform = t), e.style.transform)
}
const lt = { UNKNOWN: 0, INTERSECTING: 1, ABOVE: 2, RIGHT: 4, BELOW: 8, LEFT: 16 }
function pa(s) {
  const t = on()
  for (let e = 0, n = s.length; e < n; ++e) ws(t, s[e])
  return t
}
function uu(s, t) {
  return t ? ((t[0] = s[0]), (t[1] = s[1]), (t[2] = s[2]), (t[3] = s[3]), t) : s.slice()
}
function Hl(s, t, e) {
  let n, i
  return (
    t < s[0] ? (n = s[0] - t) : s[2] < t ? (n = t - s[2]) : (n = 0),
    e < s[1] ? (i = s[1] - e) : s[3] < e ? (i = e - s[3]) : (i = 0),
    n * n + i * i
  )
}
function Eo(s, t) {
  return Jl(s, t[0], t[1])
}
function du(s, t) {
  return s[0] <= t[0] && t[2] <= s[2] && s[1] <= t[1] && t[3] <= s[3]
}
function Jl(s, t, e) {
  return s[0] <= t && t <= s[2] && s[1] <= e && e <= s[3]
}
function ya(s, t) {
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
function Fi(s, t, e, n, i) {
  return i ? ((i[0] = s), (i[1] = t), (i[2] = e), (i[3] = n), i) : [s, t, e, n]
}
function Qs(s) {
  return Fi(1 / 0, 1 / 0, -1 / 0, -1 / 0, s)
}
function fu(s, t) {
  const e = s[0],
    n = s[1]
  return Fi(e, n, e, n, t)
}
function gu(s, t, e, n, i) {
  const r = Qs(i)
  return Ql(r, s, t, e, n)
}
function zr(s, t) {
  return s[0] == t[0] && s[2] == t[2] && s[1] == t[1] && s[3] == t[3]
}
function _u(s, t) {
  return (
    t[0] < s[0] && (s[0] = t[0]),
    t[2] > s[2] && (s[2] = t[2]),
    t[1] < s[1] && (s[1] = t[1]),
    t[3] > s[3] && (s[3] = t[3]),
    s
  )
}
function ws(s, t) {
  ;(t[0] < s[0] && (s[0] = t[0]),
    t[0] > s[2] && (s[2] = t[0]),
    t[1] < s[1] && (s[1] = t[1]),
    t[1] > s[3] && (s[3] = t[1]))
}
function Ql(s, t, e, n, i) {
  for (; e < n; e += i) mu(s, t[e], t[e + 1])
  return s
}
function mu(s, t, e) {
  ;((s[0] = Math.min(s[0], t)),
    (s[1] = Math.min(s[1], e)),
    (s[2] = Math.max(s[2], t)),
    (s[3] = Math.max(s[3], e)))
}
function th(s, t) {
  let e
  return ((e = t(tr(s))), e || ((e = t(er(s))), e) || ((e = t(nr(s))), e) || ((e = t(an(s))), e) ? e : !1)
}
function Xr(s) {
  let t = 0
  return (ir(s) || (t = rt(s) * re(s)), t)
}
function tr(s) {
  return [s[0], s[1]]
}
function er(s) {
  return [s[2], s[1]]
}
function pi(s) {
  return [(s[0] + s[2]) / 2, (s[1] + s[3]) / 2]
}
function pu(s, t) {
  let e
  return (
    t === 'bottom-left'
      ? (e = tr(s))
      : t === 'bottom-right'
        ? (e = er(s))
        : t === 'top-left'
          ? (e = an(s))
          : t === 'top-right'
            ? (e = nr(s))
            : X(!1, 13),
    e
  )
}
function Wr(s, t, e, n, i) {
  const [r, o, a, l, h, c, u, d] = Yr(s, t, e, n)
  return Fi(Math.min(r, a, h, u), Math.min(o, l, c, d), Math.max(r, a, h, u), Math.max(o, l, c, d), i)
}
function Yr(s, t, e, n) {
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
function re(s) {
  return s[3] - s[1]
}
function fi(s, t, e) {
  const n = e || on()
  return (
    Oi(s, t)
      ? (s[0] > t[0] ? (n[0] = s[0]) : (n[0] = t[0]),
        s[1] > t[1] ? (n[1] = s[1]) : (n[1] = t[1]),
        s[2] < t[2] ? (n[2] = s[2]) : (n[2] = t[2]),
        s[3] < t[3] ? (n[3] = s[3]) : (n[3] = t[3]))
      : Qs(n),
    n
  )
}
function an(s) {
  return [s[0], s[3]]
}
function nr(s) {
  return [s[2], s[3]]
}
function rt(s) {
  return s[2] - s[0]
}
function Oi(s, t) {
  return s[0] <= t[2] && s[2] >= t[0] && s[1] <= t[3] && s[3] >= t[1]
}
function ir(s) {
  return s[2] < s[0] || s[3] < s[1]
}
function yu(s, t) {
  return t ? ((t[0] = s[0]), (t[1] = s[1]), (t[2] = s[2]), (t[3] = s[3]), t) : s
}
function Eu(s, t, e) {
  let n = !1
  const i = ya(s, t),
    r = ya(s, e)
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
const xo = {
  radians: 6370997 / (2 * Math.PI),
  degrees: (2 * Math.PI * 6370997) / 360,
  ft: 0.3048,
  m: 1,
  'us-ft': 1200 / 3937,
}
let eh = class {
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
    return this.metersPerUnit_ || xo[this.units_]
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
const Di = 6378137,
  bn = Math.PI * Di,
  xu = [-bn, -bn, bn, bn],
  Cu = [-180, -85, 180, 85],
  Qi = Di * Math.log(Math.tan(Math.PI / 2))
let mn = class extends eh {
  constructor(t) {
    super({
      code: t,
      units: 'm',
      extent: xu,
      global: !0,
      worldExtent: Cu,
      getPointResolution: function (e, n) {
        return e / Math.cosh(n[1] / Di)
      },
    })
  }
}
const Ea = [
  new mn('EPSG:3857'),
  new mn('EPSG:102100'),
  new mn('EPSG:102113'),
  new mn('EPSG:900913'),
  new mn('http://www.opengis.net/def/crs/EPSG/0/3857'),
  new mn('http://www.opengis.net/gml/srs/epsg.xml#3857'),
]
function wu(s, t, e) {
  const n = s.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = s.slice()) : (t = new Array(n))))
  for (let i = 0; i < n; i += e) {
    t[i] = (bn * s[i]) / 180
    let r = Di * Math.log(Math.tan((Math.PI * (+s[i + 1] + 90)) / 360))
    ;(r > Qi ? (r = Qi) : r < -Qi && (r = -Qi), (t[i + 1] = r))
  }
  return t
}
function Su(s, t, e) {
  const n = s.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = s.slice()) : (t = new Array(n))))
  for (let i = 0; i < n; i += e)
    ((t[i] = (180 * s[i]) / bn), (t[i + 1] = (360 * Math.atan(Math.exp(s[i + 1] / Di))) / Math.PI - 90))
  return t
}
const Ru = 6378137,
  xa = [-180, -90, 180, 90],
  Tu = (Math.PI * Ru) / 180
let Ve = class extends eh {
  constructor(t, e) {
    super({
      code: t,
      units: 'degrees',
      extent: xa,
      axisOrientation: e,
      global: !0,
      metersPerUnit: Tu,
      worldExtent: xa,
    })
  }
}
const Ca = [
  new Ve('CRS:84'),
  new Ve('EPSG:4326', 'neu'),
  new Ve('urn:ogc:def:crs:OGC:1.3:CRS84'),
  new Ve('urn:ogc:def:crs:OGC:2:84'),
  new Ve('http://www.opengis.net/def/crs/OGC/1.3/CRS84'),
  new Ve('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
  new Ve('http://www.opengis.net/def/crs/EPSG/0/4326', 'neu'),
]
let Br = {}
function vu(s) {
  return Br[s] || Br[s.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] || null
}
function Iu(s, t) {
  Br[s] = t
}
let Nn = {}
function bs(s, t, e) {
  const n = s.getCode(),
    i = t.getCode()
  ;(n in Nn || (Nn[n] = {}), (Nn[n][i] = e))
}
function Mu(s, t) {
  let e
  return (s in Nn && t in Nn[s] && (e = Nn[s][t]), e)
}
function ot(s, t, e) {
  return Math.min(Math.max(s, t), e)
}
function bu(s, t, e, n, i, r) {
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
function Lu(s) {
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
function Ss(s) {
  return (s * Math.PI) / 180
}
function Gn(s, t) {
  const e = s % t
  return e * t < 0 ? e + t : e
}
function Pu(s, t, e) {
  return s + e * (t - s)
}
function nh(s, t) {
  const e = Math.pow(10, t)
  return Math.round(s * e) / e
}
function ts(s, t) {
  return Math.floor(nh(s, t))
}
function es(s, t) {
  return Math.ceil(nh(s, t))
}
function Au(s, t) {
  return ((s[0] += +t[0]), (s[1] += +t[1]), s)
}
function Ls(s, t) {
  let e = !0
  for (let n = s.length - 1; n >= 0; --n)
    if (s[n] != t[n]) {
      e = !1
      break
    }
  return e
}
function Co(s, t) {
  const e = Math.cos(t),
    n = Math.sin(t),
    i = s[0] * e - s[1] * n,
    r = s[1] * e + s[0] * n
  return ((s[0] = i), (s[1] = r), s)
}
function Fu(s, t) {
  return ((s[0] *= t), (s[1] *= t), s)
}
function Ou(s, t) {
  if (t.canWrapX()) {
    const e = rt(t.getExtent()),
      n = Du(s, t, e)
    n && (s[0] -= n * e)
  }
  return s
}
function Du(s, t, e) {
  const n = t.getExtent()
  let i = 0
  return (
    t.canWrapX() && (s[0] < n[0] || s[0] > n[2]) && ((e = e || rt(n)), (i = Math.floor((s[0] - n[0]) / e))),
    i
  )
}
const ku = 63710088e-1
function wa(s, t, e) {
  e = e || ku
  const n = Ss(s[1]),
    i = Ss(t[1]),
    r = (i - n) / 2,
    o = Ss(t[0] - s[0]) / 2,
    a = Math.sin(r) * Math.sin(r) + Math.sin(o) * Math.sin(o) * Math.cos(n) * Math.cos(i)
  return 2 * e * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
function ih(...s) {
  console.warn(...s)
}
let Ur = !0
function sh(s) {
  Ur = !1
}
function wo(s, t) {
  if (t !== void 0) {
    for (let e = 0, n = s.length; e < n; ++e) t[e] = s[e]
    t = t
  } else t = s.slice()
  return t
}
function rh(s, t) {
  if (t !== void 0 && s !== t) {
    for (let e = 0, n = s.length; e < n; ++e) t[e] = s[e]
    s = t
  }
  return s
}
function Nu(s) {
  ;(Iu(s.getCode(), s), bs(s, s, wo))
}
function ju(s) {
  s.forEach(Nu)
}
function Kt(s) {
  return typeof s == 'string' ? vu(s) : s || null
}
function Sa(s, t, e, n) {
  s = Kt(s)
  let i
  const r = s.getPointResolutionFunc()
  if (r) i = r(t, e)
  else {
    const o = s.getUnits()
    if ((o == 'degrees' && !n) || n == 'degrees') i = t
    else {
      const a = Ro(s, Kt('EPSG:4326'))
      if (a === rh && o !== 'degrees') i = t * s.getMetersPerUnit()
      else {
        let h = [e[0] - t / 2, e[1], e[0] + t / 2, e[1], e[0], e[1] - t / 2, e[0], e[1] + t / 2]
        h = a(h, h, 2)
        const c = wa(h.slice(0, 2), h.slice(2, 4)),
          u = wa(h.slice(4, 6), h.slice(6, 8))
        i = (c + u) / 2
      }
      const l = s.getMetersPerUnit()
      l !== void 0 && (i /= l)
    }
  }
  return i
}
function Ra(s) {
  ;(ju(s),
    s.forEach(function (t) {
      s.forEach(function (e) {
        t !== e && bs(t, e, wo)
      })
    }))
}
function Gu(s, t, e, n) {
  s.forEach(function (i) {
    t.forEach(function (r) {
      ;(bs(i, r, e), bs(r, i, n))
    })
  })
}
function So(s, t) {
  return s ? (typeof s == 'string' ? Kt(s) : s) : Kt(t)
}
function zu(s, t) {
  return (sh(), oh(s, 'EPSG:4326', 'EPSG:3857'))
}
function Sn(s, t) {
  if (s === t) return !0
  const e = s.getUnits() === t.getUnits()
  return (s.getCode() === t.getCode() || Ro(s, t) === wo) && e
}
function Ro(s, t) {
  const e = s.getCode(),
    n = t.getCode()
  let i = Mu(e, n)
  return (i || (i = rh), i)
}
function Ps(s, t) {
  const e = Kt(s),
    n = Kt(t)
  return Ro(e, n)
}
function oh(s, t, e) {
  return Ps(t, e)(s, void 0, s.length)
}
function Vr(s, t) {
  return s
}
function ge(s, t) {
  return (
    Ur &&
      !Ls(s, [0, 0]) &&
      s[0] >= -180 &&
      s[0] <= 180 &&
      s[1] >= -90 &&
      s[1] <= 90 &&
      ((Ur = !1),
      ih('Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.')),
    s
  )
}
function Xu(s, t) {
  return s
}
function Ln(s, t) {
  return s
}
function Wu() {
  ;(Ra(Ea), Ra(Ca), Gu(Ca, Ea, wu, Su))
}
Wu()
function Yu(s, t, e, n, i, r) {
  r = r || []
  let o = 0
  for (let a = t; a < e; a += n) {
    const l = s[a],
      h = s[a + 1]
    ;((r[o++] = i[0] * l + i[2] * h + i[4]), (r[o++] = i[1] * l + i[3] * h + i[5]))
  }
  return (r && r.length != o && (r.length = o), r)
}
function Bu(s, t, e, n, i, r, o) {
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
function Uu(s, t, e, n, i, r, o, a) {
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
function Vu(s, t, e, n, i, r, o) {
  o = o || []
  let a = 0
  for (let l = t; l < e; l += n) {
    ;((o[a++] = s[l] + i), (o[a++] = s[l + 1] + r))
    for (let h = l + 2; h < l + n; ++h) o[a++] = s[h]
  }
  return (o && o.length != a && (o.length = a), o)
}
const Ta = kn()
let Zu = class extends Ce {
    constructor() {
      ;(super(),
        (this.extent_ = on()),
        (this.extentRevision_ = -1),
        (this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = 0),
        (this.simplifyTransformedInternal = eu(function (t, e, n) {
          if (!n) return this.getSimplifiedGeometry(e)
          const i = this.clone()
          return (i.applyTransform(n), i.getSimplifiedGeometry(e))
        })))
    }
    simplifyTransformed(t, e) {
      return this.simplifyTransformedInternal(this.getRevision(), t, e)
    }
    clone() {
      return z()
    }
    closestPointXY(t, e, n, i) {
      return z()
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
      return z()
    }
    getExtent(t) {
      if (this.extentRevision_ != this.getRevision()) {
        const e = this.computeExtent(this.extent_)
        ;((isNaN(e[0]) || isNaN(e[1])) && Qs(e), (this.extentRevision_ = this.getRevision()))
      }
      return yu(this.extent_, t)
    }
    rotate(t, e) {
      z()
    }
    scale(t, e, n) {
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
      const n = Kt(t),
        i =
          n.getUnits() == 'tile-pixels'
            ? function (r, o, a) {
                const l = n.getExtent(),
                  h = n.getWorldExtent(),
                  c = re(h) / re(l)
                return (mi(Ta, h[0], h[3], c, -c, 0, 0, 0), Yu(r, 0, r.length, a, Ta, o), Ps(n, e)(r, o, a))
              }
            : Ps(n, e)
      return (this.applyTransform(i), this)
    }
  },
  To = class extends Zu {
    constructor() {
      ;(super(), (this.layout = 'XY'), (this.stride = 2), (this.flatCoordinates = null))
    }
    computeExtent(t) {
      return gu(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
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
      ;((this.stride = va(t)), (this.layout = t), (this.flatCoordinates = e))
    }
    setCoordinates(t, e) {
      z()
    }
    setLayout(t, e, n) {
      let i
      if (t) i = va(t)
      else {
        for (let r = 0; r < n; ++r) {
          if (e.length === 0) {
            ;((this.layout = 'XY'), (this.stride = 2))
            return
          }
          e = e[0]
        }
        ;((i = e.length), (t = Ku(i)))
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
        ;(Bu(n, 0, n.length, i, t, e, n), this.changed())
      }
    }
    scale(t, e, n) {
      ;(e === void 0 && (e = t), n || (n = pi(this.getExtent())))
      const i = this.getFlatCoordinates()
      if (i) {
        const r = this.getStride()
        ;(Uu(i, 0, i.length, r, t, e, n, i), this.changed())
      }
    }
    translate(t, e) {
      const n = this.getFlatCoordinates()
      if (n) {
        const i = this.getStride()
        ;(Vu(n, 0, n.length, i, t, e, n), this.changed())
      }
    }
  }
function Ku(s) {
  let t
  return (s == 2 ? (t = 'XY') : s == 3 ? (t = 'XYZ') : s == 4 && (t = 'XYZM'), t)
}
function va(s) {
  let t
  return (s == 'XY' ? (t = 2) : s == 'XYZ' || s == 'XYM' ? (t = 3) : s == 'XYZM' && (t = 4), t)
}
function Ia(s, t, e, n, i, r, o) {
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
      for (let f = 0; f < n; ++f) o[f] = Pu(s[t + f], s[e + f], d)
      o.length = n
      return
    } else u = t
  }
  for (let d = 0; d < n; ++d) o[d] = s[u + d]
  o.length = n
}
function ah(s, t, e, n, i) {
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
function $u(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((i = ah(s, t, a, n, i)), (t = a))
  }
  return i
}
function lh(s, t, e, n, i, r, o, a, l, h, c) {
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
    if ((Ia(s, f - n, f, n, o, a, c), (d = jn(o, a, c[0], c[1])), d < h)) {
      for (h = d, u = 0; u < n; ++u) l[u] = c[u]
      ;((l.length = n), (f += n))
    } else f += n * Math.max(((Math.sqrt(d) - Math.sqrt(h)) / i) | 0, 1)
  if ((Ia(s, e - n, t, n, o, a, c), (d = jn(o, a, c[0], c[1])), d < h)) {
    for (h = d, u = 0; u < n; ++u) l[u] = c[u]
    l.length = n
  }
  return h
}
function qu(s, t, e, n, i, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = lh(s, t, f, n, i, r, o, a, l, h, c)), (t = f))
  }
  return h
}
function Hu(s, t, e, n) {
  for (let i = 0, r = e.length; i < r; ++i) s[t++] = e[i]
  return t
}
function hh(s, t, e, n) {
  for (let i = 0, r = e.length; i < r; ++i) {
    const o = e[i]
    for (let a = 0; a < n; ++a) s[t++] = o[a]
  }
  return t
}
function Ju(s, t, e, n, i) {
  i = i || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = hh(s, t, e[o], n)
    ;((i[r++] = l), (t = l))
  }
  return ((i.length = r), i)
}
function Qu(s, t, e, n, i, r, o) {
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
      const E = s[y],
        x = s[y + 1],
        C = bu(E, x, g, _, m, p)
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
function td(s, t, e, n, i, r, o) {
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
function ed(s, t, e, n, i, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = td(s, t, c, n, i, r, o)), a.push(o), (t = c))
  }
  return o
}
function ch(s, t, e, n, i) {
  i = i !== void 0 ? i : []
  let r = 0
  for (let o = t; o < e; o += n) i[r++] = s.slice(o, o + n)
  return ((i.length = r), i)
}
function nd(s, t, e, n, i) {
  i = i !== void 0 ? i : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((i[r++] = ch(s, t, l, n, i[r])), (t = l))
  }
  return ((i.length = r), i)
}
function uh(s, t, e, n) {
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
function id(s, t, e, n) {
  let i = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((i += uh(s, t, a, n)), (t = a))
  }
  return i
}
let Ma = class Zr extends To {
    constructor(t, e) {
      ;(super(),
        (this.maxDelta_ = -1),
        (this.maxDeltaRevision_ = -1),
        e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
    }
    clone() {
      return new Zr(this.flatCoordinates.slice(), this.layout)
    }
    closestPointXY(t, e, n, i) {
      return i < Hl(this.getExtent(), t, e)
        ? i
        : (this.maxDeltaRevision_ != this.getRevision() &&
            ((this.maxDelta_ = Math.sqrt(
              ah(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0),
            )),
            (this.maxDeltaRevision_ = this.getRevision())),
          lh(
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
      return uh(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
    }
    getCoordinates() {
      return ch(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
    }
    getSimplifiedGeometryInternal(t) {
      const e = []
      return (
        (e.length = Qu(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0)),
        new Zr(e, 'XY')
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
        (this.flatCoordinates.length = hh(this.flatCoordinates, 0, t, this.stride)),
        this.changed())
    }
  },
  sd = class dh extends To {
    constructor(t, e) {
      ;(super(), this.setCoordinates(t, e))
    }
    clone() {
      const t = new dh(this.flatCoordinates.slice(), this.layout)
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
      return fu(this.flatCoordinates, t)
    }
    getType() {
      return 'Point'
    }
    intersectsExtent(t) {
      return Jl(t, this.flatCoordinates[0], this.flatCoordinates[1])
    }
    setCoordinates(t, e) {
      ;(this.setLayout(e, t, 0),
        this.flatCoordinates || (this.flatCoordinates = []),
        (this.flatCoordinates.length = Hu(this.flatCoordinates, 0, t, this.stride)),
        this.changed())
    }
  }
function rd(s, t, e, n, i) {
  return !th(i, function (o) {
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
function fh(s, t, e, n, i, r) {
  if (e.length === 0 || !qe(s, t, e[0], n, i, r)) return !1
  for (let o = 1, a = e.length; o < a; ++o) if (qe(s, e[o - 1], e[o], n, i, r)) return !1
  return !0
}
function od(s, t, e, n, i, r, o) {
  let a, l, h, c, u, d, f
  const g = i[r + 1],
    _ = []
  for (let y = 0, E = e.length; y < E; ++y) {
    const x = e[y]
    for (c = s[x - n], d = s[x - n + 1], a = t; a < x; a += n)
      ((u = s[a]),
        (f = s[a + 1]),
        ((g <= d && f <= g) || (d <= g && g <= f)) && ((h = ((g - d) / (f - d)) * (u - c) + c), _.push(h)),
        (c = u),
        (d = f))
  }
  let m = NaN,
    p = -1 / 0
  for (_.sort(po), c = _[0], a = 1, l = _.length; a < l; ++a) {
    u = _[a]
    const y = Math.abs(u - c)
    ;(y > p && ((h = (c + u) / 2), fh(s, t, e, n, h, g) && ((m = h), (p = y))), (c = u))
  }
  return (isNaN(m) && (m = i[r]), [m, g, p])
}
function ad(s, t, e, n, i) {
  let r
  for (t += n; t < e; t += n) if (((r = i(s.slice(t - n, t), s.slice(t, t + n))), r)) return r
  return !1
}
function gh(s, t, e, n, i) {
  const r = Ql(on(), s, t, e, n)
  return Oi(i, r)
    ? du(i, r) || (r[0] >= i[0] && r[2] <= i[2]) || (r[1] >= i[1] && r[3] <= i[3])
      ? !0
      : ad(s, t, e, n, function (o, a) {
          return Eu(i, o, a)
        })
    : !1
}
function _h(s, t, e, n, i) {
  return !!(
    gh(s, t, e, n, i) ||
    qe(s, t, e, n, i[0], i[1]) ||
    qe(s, t, e, n, i[0], i[3]) ||
    qe(s, t, e, n, i[2], i[1]) ||
    qe(s, t, e, n, i[2], i[3])
  )
}
function ld(s, t, e, n, i) {
  if (!_h(s, t, e[0], n, i)) return !1
  if (e.length === 1) return !0
  for (let r = 1, o = e.length; r < o; ++r)
    if (rd(s, e[r - 1], e[r], n, i) && !gh(s, e[r - 1], e[r], n, i)) return !1
  return !0
}
function hd(s, t, e, n) {
  for (; t < e - n; ) {
    for (let i = 0; i < n; ++i) {
      const r = s[t + i]
      ;((s[t + i] = s[e - n + i]), (s[e - n + i] = r))
    }
    ;((t += n), (e -= n))
  }
}
function mh(s, t, e, n) {
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
function cd(s, t, e, n, i) {
  i = i !== void 0 ? i : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = mh(s, t, a, n)
    if (r === 0) {
      if ((i && l) || (!i && !l)) return !1
    } else if ((i && !l) || (!i && l)) return !1
    t = a
  }
  return !0
}
function ba(s, t, e, n, i) {
  i = i !== void 0 ? i : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = mh(s, t, a, n)
    ;((r === 0 ? (i && l) || (!i && !l) : (i && !l) || (!i && l)) && hd(s, t, a, n), (t = a))
  }
  return t
}
let ph = class Kr extends To {
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
      ? Qc(this.flatCoordinates, t.getFlatCoordinates())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed())
  }
  clone() {
    const t = new Kr(this.flatCoordinates.slice(), this.layout, this.ends_.slice())
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, i) {
    return i < Hl(this.getExtent(), t, e)
      ? i
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt($u(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        qu(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, n, i))
  }
  containsXY(t, e) {
    return fh(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, e)
  }
  getArea() {
    return id(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride)
  }
  getCoordinates(t) {
    let e
    return (
      t !== void 0
        ? ((e = this.getOrientedFlatCoordinates().slice()), ba(e, 0, this.ends_, this.stride, t))
        : (e = this.flatCoordinates),
      nd(e, 0, this.ends_, this.stride)
    )
  }
  getEnds() {
    return this.ends_
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const t = pi(this.getExtent())
      ;((this.flatInteriorPoint_ = od(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, 0)),
        (this.flatInteriorPointRevision_ = this.getRevision()))
    }
    return this.flatInteriorPoint_
  }
  getInteriorPoint() {
    return new sd(this.getFlatInteriorPoint(), 'XYM')
  }
  getLinearRingCount() {
    return this.ends_.length
  }
  getLinearRing(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new Ma(this.flatCoordinates.slice(t === 0 ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout)
  }
  getLinearRings() {
    const t = this.layout,
      e = this.flatCoordinates,
      n = this.ends_,
      i = []
    let r = 0
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = n[o],
        h = new Ma(e.slice(r, l), t)
      ;(i.push(h), (r = l))
    }
    return i
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates
      ;(cd(t, 0, this.ends_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = ba(
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
      (e.length = ed(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t), e, 0, n)),
      new Kr(e, 'XY', n)
    )
  }
  getType() {
    return 'Polygon'
  }
  intersectsExtent(t) {
    return ld(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []))
    const n = Ju(this.flatCoordinates, 0, t, this.stride, this.ends_)
    ;((this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1]), this.changed())
  }
}
function La(s) {
  if (ir(s)) throw new Error('Cannot create polygon from empty extent')
  const t = s[0],
    e = s[1],
    n = s[2],
    i = s[3],
    r = [t, e, t, i, n, i, n, e, t, e]
  return new ph(r, 'XY', [r.length])
}
const Ne = {
  PRERENDER: 'prerender',
  POSTRENDER: 'postrender',
  PRECOMPOSE: 'precompose',
  POSTCOMPOSE: 'postcompose',
  RENDERCOMPLETE: 'rendercomplete',
}
let yi = class yh {
    constructor(t) {
      ;((t = t || {}), (this.color_ = t.color !== void 0 ? t.color : null))
    }
    clone() {
      const t = this.getColor()
      return new yh({ color: Array.isArray(t) ? t.slice() : t || void 0 })
    }
    getColor() {
      return this.color_
    }
    setColor(t) {
      this.color_ = t
    }
  },
  Ei = class Eh {
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
      return new Eh({
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
const ct = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3 }
function Pa(s) {
  return s[0] > 0 && s[1] > 0
}
function ud(s, t, e) {
  return (e === void 0 && (e = [0, 0]), (e[0] = (s[0] * t + 0.5) | 0), (e[1] = (s[1] * t + 0.5) | 0), e)
}
function ee(s, t) {
  return Array.isArray(s) ? s : (t === void 0 ? (t = [s, s]) : ((t[0] = s), (t[1] = s)), t)
}
let xh = class Ch {
  constructor(t) {
    ;((this.opacity_ = t.opacity),
      (this.rotateWithView_ = t.rotateWithView),
      (this.rotation_ = t.rotation),
      (this.scale_ = t.scale),
      (this.scaleArray_ = ee(t.scale)),
      (this.displacement_ = t.displacement),
      (this.declutterMode_ = t.declutterMode))
  }
  clone() {
    const t = this.getScale()
    return new Ch({
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
    ;((this.scale_ = t), (this.scaleArray_ = ee(t)))
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
const dd = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,
  fd = /^([a-z]*)$|^hsla?\(.*\)$/i
function wh(s) {
  return typeof s == 'string' ? s : Sh(s)
}
function gd(s) {
  const t = document.createElement('div')
  if (((t.style.color = s), t.style.color !== '')) {
    document.body.appendChild(t)
    const e = getComputedStyle(t).color
    return (document.body.removeChild(t), e)
  }
  return ''
}
const _d = (function () {
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
      ;((i = md(n)), (t[n] = i), ++e)
    }
    return i
  }
})()
function As(s) {
  return Array.isArray(s) ? s : _d(s)
}
function md(s) {
  let t, e, n, i, r
  if ((fd.exec(s) && (s = gd(s)), dd.exec(s))) {
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
      ? ((r = s.slice(5, -1).split(',').map(Number)), Aa(r))
      : s.startsWith('rgb(')
        ? ((r = s.slice(4, -1).split(',').map(Number)), r.push(1), Aa(r))
        : X(!1, 14)
  return r
}
function Aa(s) {
  return (
    (s[0] = ot((s[0] + 0.5) | 0, 0, 255)),
    (s[1] = ot((s[1] + 0.5) | 0, 0, 255)),
    (s[2] = ot((s[2] + 0.5) | 0, 0, 255)),
    (s[3] = ot(s[3], 0, 1)),
    s
  )
}
function Sh(s) {
  let t = s[0]
  t != (t | 0) && (t = (t + 0.5) | 0)
  let e = s[1]
  e != (e | 0) && (e = (e + 0.5) | 0)
  let n = s[2]
  n != (n | 0) && (n = (n + 0.5) | 0)
  const i = s[3] === void 0 ? 1 : Math.round(s[3] * 100) / 100
  return 'rgba(' + t + ',' + e + ',' + n + ',' + i + ')'
}
function Fa(s) {
  return Array.isArray(s) ? Sh(s) : s
}
function oe(s, t, e, n) {
  let i
  return (
    e && e.length
      ? (i = e.shift())
      : Kl
        ? (i = new OffscreenCanvas(s || 300, t || 300))
        : (i = document.createElement('canvas')),
    s && (i.width = s),
    t && (i.height = t),
    i.getContext('2d', n)
  )
}
function vo(s) {
  const t = s.canvas
  ;((t.width = 1), (t.height = 1), s.clearRect(0, 0, 1, 1))
}
function Oa(s, t) {
  const e = t.parentNode
  e && e.replaceChild(s, t)
}
function $r(s) {
  return s && s.parentNode ? s.parentNode.removeChild(s) : null
}
function pd(s) {
  for (; s.lastChild; ) s.removeChild(s.lastChild)
}
function yd(s, t) {
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
const ns = 'ol-hidden',
  sr = 'ol-unselectable',
  Io = 'ol-control',
  Da = 'ol-collapsed',
  ka = '#000',
  Na = 'round',
  Ed = 10,
  xd = '#000',
  Cd = 1,
  wd = new Ce()
let Sd = class Rh extends xh {
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
        e = new Rh({
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
          i = oe(n.size * t, n.size * t)
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
      return ct.LOADED
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
        const S = i
        ;((i = r), (r = S))
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
        E = r - y,
        C = Math.sqrt(p * p + E * E) / p
      if (C <= n) {
        const S = (C * e) / 2 - r - i
        return 2 * Math.max(m, S)
      }
      return m * 2
    }
    createRenderOptions() {
      let t = Na,
        e = 0,
        n = null,
        i = 0,
        r,
        o = 0
      this.stroke_ &&
        ((r = this.stroke_.getColor()),
        r === null && (r = xd),
        (r = Fa(r)),
        (o = this.stroke_.getWidth()),
        o === void 0 && (o = Cd),
        (n = this.stroke_.getLineDash()),
        (i = this.stroke_.getLineDashOffset()),
        (t = this.stroke_.getLineJoin()),
        t === void 0 && (t = Na),
        (e = this.stroke_.getMiterLimit()),
        e === void 0 && (e = Ed))
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
        ;(i === null && (i = ka), (e.fillStyle = Fa(i)), e.fill())
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
          (typeof e == 'string' && (e = As(e)),
          e === null ? (n = 1) : Array.isArray(e) && (n = e.length === 4 ? e[3] : 1),
          n === 0)
        ) {
          const i = oe(t.size, t.size)
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
        (e.fillStyle = ka),
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
  Rd = class Th extends Sd {
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
        e = new Th({
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
  Bn = class vh {
    constructor(t) {
      ;((t = t || {}),
        (this.geometry_ = null),
        (this.geometryFunction_ = ja),
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
        new vh({
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
            : (this.geometryFunction_ = ja),
        (this.geometry_ = t))
    }
    setZIndex(t) {
      this.zIndex_ = t
    }
  }
function ja(s) {
  return s.getGeometry()
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
let Ih = class extends Ce {
  constructor(t) {
    ;(super(), this.on, this.once, this.un, (this.background_ = t.background))
    const e = Object.assign({}, t)
    ;(typeof t.properties == 'object' && (delete e.properties, Object.assign(e, t.properties)),
      (e[U.OPACITY] = t.opacity !== void 0 ? t.opacity : 1),
      X(typeof e[U.OPACITY] == 'number', 64),
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
    return z()
  }
  getLayerStatesArray(t) {
    return z()
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
    return z()
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
    ;(X(typeof t == 'number', 64), this.set(U.OPACITY, t))
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
const Dt = { ANIMATING: 0, INTERACTING: 1 },
  Yt = { CENTER: 'center', RESOLUTION: 'resolution', ROTATION: 'rotation' },
  Td = 42,
  Mo = 256
function Ga(s, t, e) {
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
function vd(s) {
  return s
}
function bo(s, t, e, n) {
  const i = rt(t) / e[0],
    r = re(t) / e[1]
  return n ? Math.min(s, Math.max(i, r)) : Math.min(s, Math.min(i, r))
}
function Lo(s, t, e) {
  let n = Math.min(s, t)
  const i = 50
  return (
    (n *= Math.log(1 + i * Math.max(0, s / t - 1)) / i + 1),
    e && ((n = Math.max(n, e)), (n /= Math.log(1 + i * Math.max(0, e / s - 1)) / i + 1)),
    ot(n, e / 2, t * 2)
  )
}
function Id(s, t, e, n) {
  return (
    (t = t !== void 0 ? t : !0),
    function (i, r, o, a) {
      if (i !== void 0) {
        const l = s[0],
          h = s[s.length - 1],
          c = e ? bo(l, e, o, n) : l
        if (a) return t ? Lo(i, c, h) : ot(i, h, c)
        const u = Math.min(c, i),
          d = Math.floor(yo(s, u, r))
        return s[d] > c && d < s.length - 1 ? s[d + 1] : s[d]
      }
    }
  )
}
function Md(s, t, e, n, i, r) {
  return (
    (n = n !== void 0 ? n : !0),
    (e = e !== void 0 ? e : 0),
    function (o, a, l, h) {
      if (o !== void 0) {
        const c = i ? bo(t, i, l, r) : t
        if (h) return n ? Lo(o, c, e) : ot(o, e, c)
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
function za(s, t, e, n, i) {
  return (
    (e = e !== void 0 ? e : !0),
    function (r, o, a, l) {
      if (r !== void 0) {
        const h = n ? bo(s, n, a, i) : s
        return !e || !l ? ot(r, t, h) : Lo(r, h, t)
      }
    }
  )
}
function Po(s) {
  if (s !== void 0) return 0
}
function Xa(s) {
  if (s !== void 0) return s
}
function bd(s) {
  const t = (2 * Math.PI) / s
  return function (e, n) {
    if (n) return e
    if (e !== void 0) return ((e = Math.floor(e / t + 0.5) * t), e)
  }
}
function Ld(s) {
  return (
    (s = s || Ss(5)),
    function (t, e) {
      if (e) return t
      if (t !== void 0) return Math.abs(t) <= s ? 0 : t
    }
  )
}
function Mh(s) {
  return Math.pow(s, 3)
}
function qn(s) {
  return 1 - Mh(1 - s)
}
function Pd(s) {
  return 3 * s * s - 2 * s * s * s
}
function Ad(s) {
  return s
}
const pr = 0
let Qt = class extends Ce {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      (t = Object.assign({}, t)),
      (this.hints_ = [0, 0]),
      (this.animations_ = []),
      this.updateAnimationKey_,
      (this.projection_ = So(t.projection, 'EPSG:3857')),
      (this.viewportSize_ = [100, 100]),
      (this.targetCenter_ = null),
      this.targetResolution_,
      this.targetRotation_,
      (this.nextCenter_ = null),
      this.nextResolution_,
      this.nextRotation_,
      (this.cancelAnchor_ = void 0),
      t.projection && sh(),
      t.center && (t.center = ge(t.center, this.projection_)),
      t.extent && (t.extent = Ln(t.extent, this.projection_)),
      this.applyOptions_(t))
  }
  applyOptions_(t) {
    const e = Object.assign({}, t)
    for (const a in Yt) delete e[a]
    this.setProperties(e, !0)
    const n = Od(t)
    ;((this.maxResolution_ = n.maxResolution),
      (this.minResolution_ = n.minResolution),
      (this.zoomFactor_ = n.zoomFactor),
      (this.resolutions_ = t.resolutions),
      (this.padding_ = t.padding),
      (this.minZoom_ = n.minZoom))
    const i = Fd(t),
      r = n.constraint,
      o = Dd(t)
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
      ;(i.center && ((i = Object.assign({}, i)), (i.center = ge(i.center, this.getProjection()))),
        i.anchor && ((i = Object.assign({}, i)), (i.anchor = ge(i.anchor, this.getProjection()))),
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
          easing: c.easing || Pd,
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
      ;(kd(u) ? (u.complete = !0) : (r += u.duration), h.push(u))
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
    return (i !== void 0 && ((n = [i[0] - e[0], i[1] - e[1]]), Co(n, t - this.getRotation()), Au(n, e)), n)
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
    return t && Vr(t, this.getProjection())
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
    return Xu(e, this.getProjection())
  }
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_()
    const e = this.getCenterInternal()
    X(e, 1)
    const n = this.getResolution()
    X(n !== void 0, 2)
    const i = this.getRotation()
    return (X(i !== void 0, 3), Wr(e, n, i, t))
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
    return this.getResolutionForExtentInternal(Ln(t, this.getProjection()), e)
  }
  getResolutionForExtentInternal(t, e) {
    e = e || this.getViewportSizeMinusPadding_()
    const n = rt(t) / e[0],
      i = re(t) / e[1]
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
      i = yr(i, this.getViewportSize_(), [o[0] / 2 + r[3], o[1] / 2 + r[0]], e, n)
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
      const r = yo(this.resolutions_, t, 1)
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
    if ((X(Array.isArray(t) || typeof t.getSimplifiedGeometry == 'function', 24), Array.isArray(t))) {
      X(!ir(t), 25)
      const i = Ln(t, this.getProjection())
      n = La(i)
    } else if (t.getType() === 'Circle') {
      const i = Ln(t.getExtent(), this.getProjection())
      ;((n = La(i)), n.rotate(this.getRotation(), pi(i)))
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
      d = pi(a)
    ;((d[0] += ((i[1] - i[3]) / 2) * l), (d[1] += ((i[0] - i[2]) / 2) * l))
    const f = d[0] * u - d[1] * c,
      g = d[1] * u + d[0] * c,
      _ = this.getConstrainedCenter([f, g], l),
      m = e.callback ? e.callback : Is
    e.duration !== void 0
      ? this.animateInternal({ resolution: l, center: _, duration: e.duration, easing: e.easing }, m)
      : ((this.targetResolution_ = l), (this.targetCenter_ = _), this.applyTargetState_(!1, !0), is(m, !0))
  }
  centerOn(t, e, n) {
    this.centerOnInternal(ge(t, this.getProjection()), e, n)
  }
  centerOnInternal(t, e, n) {
    this.setCenterInternal(yr(t, e, n, this.getResolution(), this.getRotation()))
  }
  calculateCenterShift(t, e, n, i) {
    let r
    const o = this.padding_
    if (o && t) {
      const a = this.getViewportSizeMinusPadding_(-n),
        l = yr(t, i, [a[0] / 2 + o[3], a[1] / 2 + o[0]], e, n)
      r = [t[0] - l[0], t[1] - l[1]]
    }
    return r
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0
  }
  adjustCenter(t) {
    const e = Vr(this.targetCenter_, this.getProjection())
    this.setCenter([e[0] + t[0], e[1] + t[1]])
  }
  adjustCenterInternal(t) {
    const e = this.targetCenter_
    this.setCenterInternal([e[0] + t[0], e[1] + t[1]])
  }
  adjustResolution(t, e) {
    ;((e = e && ge(e, this.getProjection())), this.adjustResolutionInternal(t, e))
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
    ;(e && (e = ge(e, this.getProjection())), this.adjustRotationInternal(t, e))
  }
  adjustRotationInternal(t, e) {
    const n = this.getAnimating() || this.getInteracting(),
      i = this.constraints_.rotation(this.targetRotation_ + t, n)
    ;(e && (this.targetCenter_ = this.calculateCenterRotate(i, e)),
      (this.targetRotation_ += t),
      this.applyTargetState_())
  }
  setCenter(t) {
    this.setCenterInternal(t && ge(t, this.getProjection()))
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
      (!a || !this.get(Yt.CENTER) || !Ls(this.get(Yt.CENTER), a)) && this.set(Yt.CENTER, a),
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
        !Ls(this.getCenterInternal(), l)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({ rotation: r, center: l, resolution: a, duration: t, easing: qn, anchor: n })))
  }
  beginInteraction() {
    ;(this.resolveConstraints(0), this.setHint(Dt.INTERACTING, 1))
  }
  endInteraction(t, e, n) {
    ;((n = n && ge(n, this.getProjection())), this.endInteractionInternal(t, e, n))
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
function Fd(s) {
  if (s.extent !== void 0) {
    const e = s.smoothExtentConstraint !== void 0 ? s.smoothExtentConstraint : !0
    return Ga(s.extent, s.constrainOnlyCenter, e)
  }
  const t = So(s.projection, 'EPSG:3857')
  if (s.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice()
    return ((e[0] = -1 / 0), (e[2] = 1 / 0), Ga(e, !1, !1))
  }
  return vd
}
function Od(s) {
  let t,
    e,
    n,
    o = s.minZoom !== void 0 ? s.minZoom : pr,
    a = s.maxZoom !== void 0 ? s.maxZoom : 28
  const l = s.zoomFactor !== void 0 ? s.zoomFactor : 2,
    h = s.multiWorld !== void 0 ? s.multiWorld : !1,
    c = s.smoothResolutionConstraint !== void 0 ? s.smoothResolutionConstraint : !0,
    u = s.showFullExtent !== void 0 ? s.showFullExtent : !1,
    d = So(s.projection, 'EPSG:3857'),
    f = d.getExtent()
  let g = s.constrainOnlyCenter,
    _ = s.extent
  if ((!h && !_ && d.isGlobal() && ((g = !1), (_ = f)), s.resolutions !== void 0)) {
    const m = s.resolutions
    ;((e = m[o]),
      (n = m[a] !== void 0 ? m[a] : m[m.length - 1]),
      s.constrainResolution ? (t = Id(m, c, !g && _, u)) : (t = za(e, n, c, !g && _, u)))
  } else {
    const p = (f ? Math.max(rt(f), re(f)) : (360 * xo.degrees) / d.getMetersPerUnit()) / Mo / Math.pow(2, pr),
      y = p / Math.pow(2, 28 - pr)
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
      s.constrainResolution ? (t = Md(l, e, n, c, !g && _, u)) : (t = za(e, n, c, !g && _, u)))
  }
  return { constraint: t, maxResolution: e, minResolution: n, minZoom: o, zoomFactor: l }
}
function Dd(s) {
  if (s.enableRotation !== void 0 ? s.enableRotation : !0) {
    const e = s.constrainRotation
    return e === void 0 || e === !0 ? Ld() : e === !1 ? Xa : typeof e == 'number' ? bd(e) : Xa
  }
  return Po
}
function kd(s) {
  return !(
    (s.sourceCenter && s.targetCenter && !Ls(s.sourceCenter, s.targetCenter)) ||
    s.sourceResolution !== s.targetResolution ||
    s.sourceRotation !== s.targetRotation
  )
}
function yr(s, t, e, n, i) {
  const r = Math.cos(-i)
  let o = Math.sin(-i),
    a = s[0] * r - s[1] * o,
    l = s[1] * r + s[0] * o
  ;((a += (t[0] / 2 - e[0]) * n), (l += (e[1] - t[1] / 2) * n), (o = -o))
  const h = a * r - l * o,
    c = l * r + a * o
  return [h, c]
}
let Ao = class extends Ih {
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
    ;(this.sourceChangeKey_ && (et(this.sourceChangeKey_), (this.sourceChangeKey_ = null)),
      (this.sourceReady_ = !1))
    const t = this.getSource()
    ;(t &&
      ((this.sourceChangeKey_ = Z(t, k.CHANGE, this.handleSourceChange_, this)),
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
      t instanceof Qt ? (e = { viewState: t.getState(), extent: t.calculateExtent() }) : (e = t),
      !e.layerStatesArray && n && (e.layerStatesArray = n.getLayerGroup().getLayerStatesArray()))
    let i
    e.layerStatesArray ? (i = e.layerStatesArray.find(o => o.layer === this)) : (i = this.getLayerState())
    const r = this.getExtent()
    return Fo(i, e.viewState) && (!r || Oi(r, e.extent))
  }
  getAttributions(t) {
    if (!this.isVisible(t)) return []
    let e
    const n = this.getSource()
    if ((n && (e = n.getAttributions()), !e)) return []
    const i = t instanceof Qt ? t.getViewStateAndExtent() : t
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
    ;(t || this.unrender(), this.set(U.MAP, t))
  }
  getMapInternal() {
    return this.get(U.MAP)
  }
  setMap(t) {
    ;(this.mapPrecomposeKey_ && (et(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)),
      t || this.changed(),
      this.mapRenderKey_ && (et(this.mapRenderKey_), (this.mapRenderKey_ = null)),
      t &&
        ((this.mapPrecomposeKey_ = Z(
          t,
          Ne.PRECOMPOSE,
          function (e) {
            const i = e.frameState.layerStatesArray,
              r = this.getLayerState(!1)
            ;(X(
              !i.some(function (o) {
                return o.layer === r.layer
              }),
              67,
            ),
              i.push(r))
          },
          this,
        )),
        (this.mapRenderKey_ = Z(this, k.CHANGE, t.render, t)),
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
function Fo(s, t) {
  if (!s.visible) return !1
  const e = t.resolution
  if (e < s.minResolution || e >= s.maxResolution) return !1
  const n = t.zoom
  return n > s.minZoom && n <= s.maxZoom
}
let Nd = class {
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
    const i = Wa(t, e, n)
    return i in this.cache_ ? this.cache_[i] : null
  }
  set(t, e, n, i) {
    const r = Wa(t, e, n)
    ;((this.cache_[r] = i), ++this.cacheSize_)
  }
  setSize(t) {
    ;((this.maxCacheSize_ = t), this.expire())
  }
}
function Wa(s, t, e) {
  const n = e ? wh(e) : 'null'
  return t + ':' + s + ':' + n
}
const Fs = new Nd()
function bh(s, t, e) {
  const n = s
  let i = !0,
    r = !1,
    o = !1
  const a = [
    Ms(n, k.LOAD, function () {
      ;((o = !0), r || t())
    }),
  ]
  return (
    n.src && lu
      ? ((r = !0),
        n
          .decode()
          .then(function () {
            i && t()
          })
          .catch(function (l) {
            i && (o ? t() : e())
          }))
      : a.push(Ms(n, k.ERROR, e)),
    function () {
      ;((i = !1), a.forEach(et))
    }
  )
}
let si = null,
  jd = class extends Js {
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
      if (this.tainted_ === void 0 && this.imageState_ === ct.LOADED) {
        ;(si || (si = oe(1, 1, void 0, { willReadFrequently: !0 })), si.drawImage(this.image_, 0, 0))
        try {
          ;(si.getImageData(0, 0, 1, 1), (this.tainted_ = !1))
        } catch {
          ;((si = null), (this.tainted_ = !0))
        }
      }
      return this.tainted_ === !0
    }
    dispatchChangeEvent_() {
      this.dispatchEvent(k.CHANGE)
    }
    handleImageError_() {
      ;((this.imageState_ = ct.ERROR), this.unlistenImage_(), this.dispatchChangeEvent_())
    }
    handleImageLoad_() {
      ;((this.imageState_ = ct.LOADED),
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
            n = oe(t, e)
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
      if (this.imageState_ === ct.IDLE) {
        ;(this.image_ || this.initializeImage_(), (this.imageState_ = ct.LOADING))
        try {
          this.image_.src = this.src_
        } catch {
          this.handleImageError_()
        }
        this.unlisten_ = bh(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this))
      }
    }
    replaceColor_(t) {
      if (!this.color_ || this.canvas_[t] || this.imageState_ !== ct.LOADED) return
      const e = this.image_,
        n = document.createElement('canvas')
      ;((n.width = Math.ceil(e.width * t)), (n.height = Math.ceil(e.height * t)))
      const i = n.getContext('2d')
      ;(i.scale(t, t),
        i.drawImage(e, 0, 0),
        (i.globalCompositeOperation = 'multiply'),
        (i.fillStyle = wh(this.color_)),
        i.fillRect(0, 0, n.width / t, n.height / t),
        (i.globalCompositeOperation = 'destination-in'),
        i.drawImage(e, 0, 0),
        (this.canvas_[t] = n))
    }
    unlistenImage_() {
      this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null))
    }
  }
function Gd(s, t, e, n, i, r) {
  let o = Fs.get(t, n, r)
  return (o || ((o = new jd(s, t, e, n, i, r)), Fs.set(t, n, r, o)), o)
}
function Ya(s, t, e, n) {
  return e !== void 0 && n !== void 0 ? [e / s, n / t] : e !== void 0 ? e / s : n !== void 0 ? n / t : 1
}
let Lh = class Ph extends xh {
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
      ;(X(!(a !== void 0 && o), 4),
        X(!o || (o && this.imgSize_), 5),
        (a === void 0 || a.length === 0) && o && (a = o.src || mt(o)),
        X(a !== void 0 && a.length > 0, 6),
        X(!((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0), 69))
      const l = t.src !== void 0 ? ct.IDLE : ct.LOADED
      if (
        ((this.color_ = t.color !== void 0 ? As(t.color) : null),
        (this.iconImage_ = Gd(
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
              this.setScale(Ya(f[0], f[1], t.width, t.height))
            }
            this.listenImageChange(d)
            return
          }
        }
        h !== void 0 && this.setScale(Ya(h, c, t.width, t.height))
      }
    }
    clone() {
      let t, e, n
      return (
        this.initialOptions_
          ? ((e = this.initialOptions_.width), (n = this.initialOptions_.height))
          : ((t = this.getScale()), (t = Array.isArray(t) ? t.slice() : t)),
        new Ph({
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
      if (this.iconImage_.getImageState() == ct.LOADED) return this.iconImage_.getSize()[0] * t[0]
    }
    getHeight() {
      const t = this.getScaleArray()
      if (this.size_) return this.size_[1] * t[1]
      if (this.iconImage_.getImageState() == ct.LOADED) return this.iconImage_.getSize()[1] * t[1]
    }
    setScale(t) {
      ;(delete this.initialOptions_, super.setScale(t))
    }
    listenImageChange(t) {
      this.iconImage_.addEventListener(k.CHANGE, t)
    }
    load() {
      this.iconImage_.load()
    }
    unlistenImageChange(t) {
      this.iconImage_.removeEventListener(k.CHANGE, t)
    }
  },
  zd = class extends Ai {
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
      ;(e.getState() === ct.LOADED || e.getState() === ct.ERROR) && this.renderIfReadyAndVisible()
    }
    loadImage(t) {
      let e = t.getState()
      return (
        e != ct.LOADED && e != ct.ERROR && t.addEventListener(k.CHANGE, this.boundHandleImageChange_),
        e == ct.IDLE && (t.load(), (e = t.getState())),
        e == ct.LOADED
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
  Ah = class extends Ye {
    constructor(t, e, n, i) {
      ;(super(t), (this.inversePixelTransform = e), (this.frameState = n), (this.context = i))
    }
  },
  Rn = null
function Xd() {
  Rn = oe(1, 1, void 0, { willReadFrequently: !0 })
}
let Wd = class extends zd {
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
      ;(Rn || Xd(), Rn.clearRect(0, 0, 1, 1))
      let i
      try {
        ;(Rn.drawImage(t, e, n, 1, 1, 0, 0, 1, 1), (i = Rn.getImageData(0, 0, 1, 1).data))
      } catch {
        return ((Rn = null), null)
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
        (!n || (t && t.style.backgroundColor && $s(As(t.style.backgroundColor), As(n))))
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
        ;((a.position = 'absolute'), (a.width = '100%'), (a.height = '100%'), (o = oe()))
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
        r = nr(n),
        o = er(n),
        a = tr(n)
      ;(Ot(e.coordinateToPixelTransform, i),
        Ot(e.coordinateToPixelTransform, r),
        Ot(e.coordinateToPixelTransform, o),
        Ot(e.coordinateToPixelTransform, a))
      const l = this.inversePixelTransform
      ;(Ot(l, i),
        Ot(l, r),
        Ot(l, o),
        Ot(l, a),
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
        const r = new Ah(t, this.inversePixelTransform, n, e)
        i.dispatchEvent(r)
      }
    }
    preRender(t, e) {
      ;((this.frameState = e), this.dispatchRenderEvent_(Ne.PRERENDER, t, e))
    }
    postRender(t, e) {
      this.dispatchRenderEvent_(Ne.POSTRENDER, t, e)
    }
    getRenderTransform(t, e, n, i, r, o, a) {
      const l = r / 2,
        h = o / 2,
        c = i / e,
        u = -c,
        d = -t[0] + a,
        f = -t[1]
      return mi(this.tempTransform, l, h, c, u, -n, d, f)
    }
    disposeInternal() {
      ;(delete this.frameState, super.disposeInternal())
    }
  },
  Yd = class extends Ce {
    constructor(t) {
      ;(super(),
        (this.projection = Kt(t.projection)),
        (this.attributions_ = Ba(t.attributions)),
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
      ;((this.attributions_ = Ba(t)), this.changed())
    }
    setState(t) {
      ;((this.state_ = t), this.changed())
    }
  }
function Ba(s) {
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
const L = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 }
class Fh extends Js {
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
    this.dispatchEvent(k.CHANGE)
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
    let n = this.transitionStarts_[t]
    if (!n) ((n = e), (this.transitionStarts_[t] = n))
    else if (n === -1) return 1
    const i = e - n + 1e3 / 60
    return i >= this.transition_ ? 1 : Mh(i / this.transition_)
  }
  inTransition(t) {
    return this.transition_ ? this.transitionStarts_[t] !== -1 : !1
  }
  endTransition(t) {
    this.transition_ && (this.transitionStarts_[t] = -1)
  }
}
class Oh extends Fh {
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
    ;((this.image_ = t), (this.state = L.LOADED), this.unlistenImage_(), this.changed())
  }
  handleImageError_() {
    ;((this.state = L.ERROR), this.unlistenImage_(), (this.image_ = Bd()), this.changed())
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
        (this.unlisten_ = bh(
          this.image_,
          this.handleImageLoad_.bind(this),
          this.handleImageError_.bind(this),
        ))))
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null))
  }
}
function Bd() {
  const s = oe(1, 1)
  return ((s.fillStyle = 'rgba(0,0,0,0)'), s.fillRect(0, 0, 1, 1), s.canvas)
}
class Ud {
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
class Vd extends mo {
  constructor(t) {
    ;(super(), (this.map_ = t))
  }
  dispatchRenderEvent(t, e) {
    z()
  }
  calculateMatrices2D(t) {
    const e = t.viewState,
      n = t.coordinateToPixelTransform,
      i = t.pixelToCoordinateTransform
    ;(mi(
      n,
      t.size[0] / 2,
      t.size[1] / 2,
      1 / e.resolution,
      -1 / e.resolution,
      -e.rotation,
      -e.center[0],
      -e.center[1],
    ),
      ql(i, n))
  }
  forEachFeatureAtCoordinate(t, e, n, i, r, o, a, l) {
    let h
    const c = e.viewState
    function u(x, C, S, v) {
      return r.call(o, C, x ? S : null, v)
    }
    const d = c.projection,
      f = Ou(t.slice(), d),
      g = [[0, 0]]
    if (d.canWrapX() && i) {
      const x = d.getExtent(),
        C = rt(x)
      g.push([-C, 0], [C, 0])
    }
    const _ = e.layerStatesArray,
      m = _.length,
      p = [],
      y = []
    for (let x = 0; x < g.length; x++)
      for (let C = m - 1; C >= 0; --C) {
        const S = _[C],
          v = S.layer
        if (v.hasRenderer() && Fo(S, c) && a.call(l, v)) {
          const T = v.getRenderer(),
            b = v.getSource()
          if (T && b) {
            const F = b.getWrapX() ? f : t,
              G = u.bind(null, S.managed)
            ;((y[0] = F[0] + g[x][0]),
              (y[1] = F[1] + g[x][1]),
              (h = T.forEachFeatureAtCoordinate(y, e, n, G, p)))
          }
          if (h) return h
        }
      }
    if (p.length === 0) return
    const E = 1 / p.length
    return (
      p.forEach((x, C) => (x.distanceSq += C * E)),
      p.sort((x, C) => x.distanceSq - C.distanceSq),
      p.some(x => (h = x.callback(x.feature, x.layer, x.geometry))),
      h
    )
  }
  hasFeatureAtCoordinate(t, e, n, i, r, o) {
    return this.forEachFeatureAtCoordinate(t, e, n, i, vs, this, r, o) !== void 0
  }
  getMap() {
    return this.map_
  }
  renderFrame(t) {
    z()
  }
  flushDeclutterItems(t) {}
  scheduleExpireIconCache(t) {
    Fs.canExpireCache() && t.postRenderFunctions.push(Zd)
  }
}
function Zd(s, t) {
  Fs.expire()
}
class Kd extends Vd {
  constructor(t) {
    ;(super(t),
      (this.fontChangeListenerKey_ = Z(wd, _i.PROPERTYCHANGE, t.redrawText.bind(t))),
      (this.element_ = document.createElement('div')))
    const e = this.element_.style
    ;((e.position = 'absolute'),
      (e.width = '100%'),
      (e.height = '100%'),
      (e.zIndex = '0'),
      (this.element_.className = sr + ' ol-layers'))
    const n = t.getViewport()
    ;(n.insertBefore(this.element_, n.firstChild || null),
      (this.children_ = []),
      (this.renderedVisible_ = !0),
      (this.declutterLayers_ = []))
  }
  dispatchRenderEvent(t, e) {
    const n = this.getMap()
    if (n.hasListener(t)) {
      const i = new Ah(t, void 0, e)
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
    ;(this.calculateMatrices2D(t), this.dispatchRenderEvent(Ne.PRECOMPOSE, t))
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
      if (!Fo(l, n) || (c != 'ready' && c != 'undefined')) {
        h.unrender()
        continue
      }
      const u = h.render(t, r)
      u && (u !== r && (this.children_.push(u), (r = u)), 'getDeclutter' in h && i.push(h))
    }
    ;(this.flushDeclutterItems(t),
      yd(this.element_, this.children_),
      this.dispatchRenderEvent(Ne.POSTCOMPOSE, t),
      this.renderedVisible_ || ((this.element_.style.display = ''), (this.renderedVisible_ = !0)),
      this.scheduleExpireIconCache(t))
  }
  flushDeclutterItems(t) {
    const e = this.declutterLayers_
    for (let n = e.length - 1; n >= 0; --n) e[n].renderDeclutter(t)
    e.length = 0
  }
}
class Oe extends Ye {
  constructor(t, e) {
    ;(super(t), (this.layer = e))
  }
}
const Er = { LAYERS: 'layers' }
class Hn extends Ih {
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
      this.addChangeListener(Er.LAYERS, this.handleLayersChanged_),
      n
        ? Array.isArray(n)
          ? (n = new _e(n.slice(), { unique: !0 }))
          : X(typeof n.getArray == 'function', 43)
        : (n = new _e(void 0, { unique: !0 })),
      this.setLayers(n))
  }
  handleLayerChange_() {
    this.changed()
  }
  handleLayersChanged_() {
    ;(this.layersListenerKeys_.forEach(et), (this.layersListenerKeys_.length = 0))
    const t = this.getLayers()
    this.layersListenerKeys_.push(
      Z(t, Nt.ADD, this.handleLayersAdd_, this),
      Z(t, Nt.REMOVE, this.handleLayersRemove_, this),
    )
    for (const n in this.listenerKeys_) this.listenerKeys_[n].forEach(et)
    Hs(this.listenerKeys_)
    const e = t.getArray()
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n]
      ;(this.registerLayerListeners_(r), this.dispatchEvent(new Oe('addlayer', r)))
    }
    this.changed()
  }
  registerLayerListeners_(t) {
    const e = [
      Z(t, _i.PROPERTYCHANGE, this.handleLayerChange_, this),
      Z(t, k.CHANGE, this.handleLayerChange_, this),
    ]
    ;(t instanceof Hn &&
      e.push(
        Z(t, 'addlayer', this.handleLayerGroupAdd_, this),
        Z(t, 'removelayer', this.handleLayerGroupRemove_, this),
      ),
      (this.listenerKeys_[mt(t)] = e))
  }
  handleLayerGroupAdd_(t) {
    this.dispatchEvent(new Oe('addlayer', t.layer))
  }
  handleLayerGroupRemove_(t) {
    this.dispatchEvent(new Oe('removelayer', t.layer))
  }
  handleLayersAdd_(t) {
    const e = t.element
    ;(this.registerLayerListeners_(e), this.dispatchEvent(new Oe('addlayer', e)), this.changed())
  }
  handleLayersRemove_(t) {
    const e = t.element,
      n = mt(e)
    ;(this.listenerKeys_[n].forEach(et),
      delete this.listenerKeys_[n],
      this.dispatchEvent(new Oe('removelayer', e)),
      this.changed())
  }
  getLayers() {
    return this.get(Er.LAYERS)
  }
  setLayers(t) {
    const e = this.getLayers()
    if (e) {
      const n = e.getArray()
      for (let i = 0, r = n.length; i < r; ++i) this.dispatchEvent(new Oe('removelayer', n[i]))
    }
    this.set(Er.LAYERS, t)
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
          (l.extent !== void 0 ? (l.extent = fi(l.extent, i.extent)) : (l.extent = i.extent)),
        l.zIndex === void 0 && (l.zIndex = r))
    }
    return e
  }
  getSourceState() {
    return 'ready'
  }
}
let Tn = class extends Ye {
    constructor(t, e, n) {
      ;(super(t), (this.map = e), (this.frameState = n !== void 0 ? n : null))
    }
  },
  Ae = class extends Tn {
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
    CLICK: k.CLICK,
    DBLCLICK: k.DBLCLICK,
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
  qr = { POINTERMOVE: 'pointermove', POINTERDOWN: 'pointerdown' }
class $d extends Js {
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
      (this.pointerdownListenerKey_ = Z(n, qr.POINTERDOWN, this.handlePointerDown_, this)),
      this.originalPointerMoveEvent_,
      (this.relayedListenerKey_ = Z(n, qr.POINTERMOVE, this.relayMoveEvent_, this)),
      (this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this)),
      this.element_.addEventListener(k.TOUCHMOVE, this.boundHandleTouchMove_, $l ? { passive: !1 } : !1))
  }
  emulateClick_(t) {
    let e = new Ae(J.CLICK, this.map_, t)
    ;(this.dispatchEvent(e),
      this.clickTimeoutId_ !== void 0
        ? (clearTimeout(this.clickTimeoutId_),
          (this.clickTimeoutId_ = void 0),
          (e = new Ae(J.DBLCLICK, this.map_, t)),
          this.dispatchEvent(e))
        : (this.clickTimeoutId_ = setTimeout(() => {
            this.clickTimeoutId_ = void 0
            const n = new Ae(J.SINGLECLICK, this.map_, t)
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
    const e = new Ae(J.POINTERUP, this.map_, t, void 0, void 0, this.activePointers_)
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
    const e = new Ae(J.POINTERDOWN, this.map_, t, void 0, void 0, this.activePointers_)
    if (
      (this.dispatchEvent(e),
      (this.down_ = new PointerEvent(t.type, t)),
      Object.defineProperty(this.down_, 'target', { writable: !1, value: t.target }),
      this.dragListenerKeys_.length === 0)
    ) {
      const n = this.map_.getOwnerDocument()
      ;(this.dragListenerKeys_.push(
        Z(n, J.POINTERMOVE, this.handlePointerMove_, this),
        Z(n, J.POINTERUP, this.handlePointerUp_, this),
        Z(this.element_, J.POINTERCANCEL, this.handlePointerUp_, this),
      ),
        this.element_.getRootNode &&
          this.element_.getRootNode() !== n &&
          this.dragListenerKeys_.push(
            Z(this.element_.getRootNode(), J.POINTERUP, this.handlePointerUp_, this),
          ))
    }
  }
  handlePointerMove_(t) {
    if (this.isMoving_(t)) {
      ;(this.updateActivePointers_(t), (this.dragging_ = !0))
      const e = new Ae(J.POINTERDRAG, this.map_, t, this.dragging_, void 0, this.activePointers_)
      this.dispatchEvent(e)
    }
  }
  relayMoveEvent_(t) {
    this.originalPointerMoveEvent_ = t
    const e = !!(this.down_ && this.isMoving_(t))
    this.dispatchEvent(new Ae(J.POINTERMOVE, this.map_, t, e))
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
      this.element_.removeEventListener(k.TOUCHMOVE, this.boundHandleTouchMove_),
      this.pointerdownListenerKey_ &&
        (et(this.pointerdownListenerKey_), (this.pointerdownListenerKey_ = null)),
      this.dragListenerKeys_.forEach(et),
      (this.dragListenerKeys_.length = 0),
      (this.element_ = null),
      super.disposeInternal())
  }
}
const Fe = {
    POSTRENDER: 'postrender',
    MOVESTART: 'movestart',
    MOVEEND: 'moveend',
    LOADSTART: 'loadstart',
    LOADEND: 'loadend',
  },
  ft = { LAYERGROUP: 'layergroup', SIZE: 'size', TARGET: 'target', VIEW: 'view' },
  Os = 1 / 0
class qd {
  constructor(t, e) {
    ;((this.priorityFunction_ = t),
      (this.keyFunction_ = e),
      (this.elements_ = []),
      (this.priorities_ = []),
      (this.queuedElements_ = {}))
  }
  clear() {
    ;((this.elements_.length = 0), (this.priorities_.length = 0), Hs(this.queuedElements_))
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
    X(!(this.keyFunction_(t) in this.queuedElements_), 31)
    const e = this.priorityFunction_(t)
    return e != Os
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
        l == Os ? delete this.queuedElements_[this.keyFunction_(o)] : ((n[i] = l), (e[i++] = o)))
    ;((e.length = i), (n.length = i), this.heapify_())
  }
}
class Hd extends qd {
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
    return (e && t[0].addEventListener(k.CHANGE, this.boundHandleTileChange_), e)
  }
  getTilesLoading() {
    return this.tilesLoading_
  }
  handleTileChange(t) {
    const e = t.target,
      n = e.getState()
    if (n === L.LOADED || n === L.ERROR || n === L.EMPTY) {
      n !== L.ERROR && e.removeEventListener(k.CHANGE, this.boundHandleTileChange_)
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
        i === L.IDLE &&
          !(o in this.tilesLoadingKeys_) &&
          ((this.tilesLoadingKeys_[o] = !0), ++this.tilesLoading_, ++n, r.load()))
  }
}
function Jd(s, t, e, n, i) {
  if (!s || !(e in s.wantedTiles) || !s.wantedTiles[e][t.getKey()]) return Os
  const r = s.viewState.center,
    o = n[0] - r[0],
    a = n[1] - r[1]
  return 65536 * Math.log(i) + Math.sqrt(o * o + a * a) / i
}
class Oo extends Ce {
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
    ;($r(this.element), super.disposeInternal())
  }
  getMap() {
    return this.map_
  }
  setMap(t) {
    this.map_ && $r(this.element)
    for (let e = 0, n = this.listenerKeys.length; e < n; ++e) et(this.listenerKeys[e])
    ;((this.listenerKeys.length = 0),
      (this.map_ = t),
      t &&
        ((this.target_ ? this.target_ : t.getOverlayContainerStopEvent()).appendChild(this.element),
        this.render !== Is && this.listenerKeys.push(Z(t, Fe.POSTRENDER, this.render, this)),
        t.render()))
  }
  render(t) {}
  setTarget(t) {
    this.target_ = typeof t == 'string' ? document.getElementById(t) : t
  }
}
class Qd extends Oo {
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
      this.toggleButton_.addEventListener(k.CLICK, this.handleClick_.bind(this), !1))
    const h =
        e +
        ' ' +
        sr +
        ' ' +
        Io +
        (this.collapsed_ && this.collapsible_ ? ' ' + Da : '') +
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
      !$s(e, this.renderedAttributions_))
    ) {
      pd(this.ulElement_)
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
    ;(this.element.classList.toggle(Da),
      this.collapsed_ ? Oa(this.collapseLabel_, this.label_) : Oa(this.label_, this.collapseLabel_),
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
class tf extends Oo {
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
      o.addEventListener(k.CLICK, this.handleClick_.bind(this), !1))
    const a = e + ' ' + sr + ' ' + Io,
      l = this.element
    ;((l.className = a),
      l.appendChild(o),
      (this.callResetNorth_ = t.resetNorth ? t.resetNorth : void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250),
      (this.autoHide_ = t.autoHide !== void 0 ? t.autoHide : !0),
      (this.rotation_ = void 0),
      this.autoHide_ && this.element.classList.add(ns))
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
        ? e.animate({ rotation: 0, duration: this.duration_, easing: qn })
        : e.setRotation(0))
  }
  render(t) {
    const e = t.frameState
    if (!e) return
    const n = e.viewState.rotation
    if (n != this.rotation_) {
      const i = 'rotate(' + n + 'rad)'
      if (this.autoHide_) {
        const r = this.element.classList.contains(ns)
        !r && n === 0 ? this.element.classList.add(ns) : r && n !== 0 && this.element.classList.remove(ns)
      }
      this.label_.style.transform = i
    }
    this.rotation_ = n
  }
}
class ef extends Oo {
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
      c.addEventListener(k.CLICK, this.handleClick_.bind(this, n), !1))
    const u = document.createElement('button')
    ;((u.className = r),
      u.setAttribute('type', 'button'),
      (u.title = h),
      u.appendChild(typeof a == 'string' ? document.createTextNode(a) : a),
      u.addEventListener(k.CLICK, this.handleClick_.bind(this, -n), !1))
    const d = e + ' ' + sr + ' ' + Io,
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
          n.animate({ zoom: r, duration: this.duration_, easing: qn }))
        : n.setZoom(r)
    }
  }
}
function nf(s) {
  s = s || {}
  const t = new _e()
  return (
    (s.zoom !== void 0 ? s.zoom : !0) && t.push(new ef(s.zoomOptions)),
    (s.rotate !== void 0 ? s.rotate : !0) && t.push(new tf(s.rotateOptions)),
    (s.attribution !== void 0 ? s.attribution : !0) && t.push(new Qd(s.attributionOptions)),
    t
  )
}
const Ua = { ACTIVE: 'active' }
let ki = class extends Ce {
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
    return this.get(Ua.ACTIVE)
  }
  getMap() {
    return this.map_
  }
  handleEvent(t) {
    return !0
  }
  setActive(t) {
    this.set(Ua.ACTIVE, t)
  }
  setMap(t) {
    this.map_ = t
  }
}
function sf(s, t, e) {
  const n = s.getCenterInternal()
  if (n) {
    const i = [n[0] + t[0], n[1] + t[1]]
    s.animateInternal({ duration: e !== void 0 ? e : 250, easing: Ad, center: s.getConstrainedCenter(i) })
  }
}
function Do(s, t, e, n) {
  const i = s.getZoom()
  if (i === void 0) return
  const r = s.getConstrainedZoom(i + t),
    o = s.getResolutionForZoom(r)
  ;(s.getAnimating() && s.cancelAnimations(),
    s.animate({ resolution: o, anchor: e, duration: n !== void 0 ? n : 250, easing: qn }))
}
class rf extends ki {
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
      ;(Do(a, o, r, this.duration_), n.preventDefault(), (e = !0))
    }
    return !e
  }
}
let Ni = class extends ki {
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
function ko(s) {
  const t = s.length
  let e = 0,
    n = 0
  for (let i = 0; i < t; i++) ((e += s[i].clientX), (n += s[i].clientY))
  return { clientX: e / t, clientY: n / t }
}
function Hr(s) {
  const t = arguments
  return function (e) {
    let n = !0
    for (let i = 0, r = t.length; i < r && ((n = n && t[i](e)), !!n); ++i);
    return n
  }
}
const of = function (s) {
    const t = s.originalEvent
    return t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  af = function (s) {
    const t = s.map.getTargetElement(),
      e = s.map.getOwnerDocument().activeElement
    return t.contains(e)
  },
  Dh = function (s) {
    return s.map.getTargetElement().hasAttribute('tabindex') ? af(s) : !0
  },
  lf = vs,
  kh = function (s) {
    const t = s.originalEvent
    return t.button == 0 && !(au && Vl && t.ctrlKey)
  },
  Nh = function (s) {
    const t = s.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  hf = function (s) {
    const t = s.originalEvent
    return Vl ? t.metaKey : t.ctrlKey
  },
  cf = function (s) {
    const t = s.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  jh = function (s) {
    const t = s.originalEvent,
      e = t.target.tagName
    return e !== 'INPUT' && e !== 'SELECT' && e !== 'TEXTAREA' && !t.target.isContentEditable
  },
  xr = function (s) {
    const t = s.originalEvent
    return (X(t !== void 0, 56), t.pointerType == 'mouse')
  },
  uf = function (s) {
    const t = s.originalEvent
    return (X(t !== void 0, 56), t.isPrimary && t.button === 0)
  }
class df extends Ni {
  constructor(t) {
    ;(super({ stopDown: qs }),
      (t = t || {}),
      (this.kinetic_ = t.kinetic),
      (this.lastCentroid = null),
      this.lastPointersCount_,
      (this.panning_ = !1))
    const e = t.condition ? t.condition : Hr(Nh, uf)
    ;((this.condition_ = t.onFocusOnly ? Hr(Dh, e) : e), (this.noKinetic_ = !1))
  }
  handleDragEvent(t) {
    const e = t.map
    this.panning_ || ((this.panning_ = !0), e.getView().beginInteraction())
    const n = this.targetPointers,
      i = e.getEventPixel(ko(n))
    if (n.length == this.lastPointersCount_) {
      if ((this.kinetic_ && this.kinetic_.update(i[0], i[1]), this.lastCentroid)) {
        const r = [this.lastCentroid[0] - i[0], i[1] - this.lastCentroid[1]],
          a = t.map.getView()
        ;(Fu(r, a.getResolution()), Co(r, a.getRotation()), a.adjustCenterInternal(r))
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
        n.animateInternal({ center: n.getConstrainedCenter(l), duration: 500, easing: qn })
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
class ff extends Ni {
  constructor(t) {
    ;((t = t || {}),
      super({ stopDown: qs }),
      (this.condition_ = t.condition ? t.condition : of),
      (this.lastAngle_ = void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250))
  }
  handleDragEvent(t) {
    if (!xr(t)) return
    const e = t.map,
      n = e.getView()
    if (n.getConstraints().rotation === Po) return
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
    return xr(t) ? (t.map.getView().endInteraction(this.duration_), !1) : !0
  }
  handleDownEvent(t) {
    return xr(t) && kh(t) && this.condition_(t)
      ? (t.map.getView().beginInteraction(), (this.lastAngle_ = void 0), !0)
      : !1
  }
}
class gf extends mo {
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
      this.geometry_ ? this.geometry_.setCoordinates([i]) : (this.geometry_ = new ph([i])))
  }
  getGeometry() {
    return this.geometry_
  }
}
const ss = { BOXSTART: 'boxstart', BOXDRAG: 'boxdrag', BOXEND: 'boxend', BOXCANCEL: 'boxcancel' }
class Cr extends Ye {
  constructor(t, e, n) {
    ;(super(t), (this.coordinate = e), (this.mapBrowserEvent = n))
  }
}
class _f extends Ni {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      (t = t || {}),
      (this.box_ = new gf(t.className || 'ol-dragbox')),
      (this.minArea_ = t.minArea !== void 0 ? t.minArea : 64),
      t.onBoxEnd && (this.onBoxEnd = t.onBoxEnd),
      (this.startPixel_ = null),
      (this.condition_ = t.condition ? t.condition : kh),
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
    ;(this.box_.setPixels(this.startPixel_, t.pixel), this.dispatchEvent(new Cr(ss.BOXDRAG, t.coordinate, t)))
  }
  handleUpEvent(t) {
    this.box_.setMap(null)
    const e = this.boxEndCondition_(t, this.startPixel_, t.pixel)
    return (
      e && this.onBoxEnd(t),
      this.dispatchEvent(new Cr(e ? ss.BOXEND : ss.BOXCANCEL, t.coordinate, t)),
      !1
    )
  }
  handleDownEvent(t) {
    return this.condition_(t)
      ? ((this.startPixel_ = t.pixel),
        this.box_.setMap(t.map),
        this.box_.setPixels(this.startPixel_, this.startPixel_),
        this.dispatchEvent(new Cr(ss.BOXSTART, t.coordinate, t)),
        !0)
      : !1
  }
  onBoxEnd(t) {}
}
class mf extends _f {
  constructor(t) {
    t = t || {}
    const e = t.condition ? t.condition : cf
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
    n.fitInternal(i, { duration: this.duration_, easing: qn })
  }
}
const Ze = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', DOWN: 'ArrowDown' }
class pf extends ki {
  constructor(t) {
    ;(super(),
      (t = t || {}),
      (this.defaultCondition_ = function (e) {
        return Nh(e) && jh(e)
      }),
      (this.condition_ = t.condition !== void 0 ? t.condition : this.defaultCondition_),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100),
      (this.pixelDelta_ = t.pixelDelta !== void 0 ? t.pixelDelta : 128))
  }
  handleEvent(t) {
    let e = !1
    if (t.type == k.KEYDOWN) {
      const n = t.originalEvent,
        i = n.key
      if (this.condition_(t) && (i == Ze.DOWN || i == Ze.LEFT || i == Ze.RIGHT || i == Ze.UP)) {
        const o = t.map.getView(),
          a = o.getResolution() * this.pixelDelta_
        let l = 0,
          h = 0
        i == Ze.DOWN ? (h = -a) : i == Ze.LEFT ? (l = -a) : i == Ze.RIGHT ? (l = a) : (h = a)
        const c = [l, h]
        ;(Co(c, o.getRotation()), sf(o, c, this.duration_), n.preventDefault(), (e = !0))
      }
    }
    return !e
  }
}
class yf extends ki {
  constructor(t) {
    ;(super(),
      (t = t || {}),
      (this.condition_ = t.condition
        ? t.condition
        : function (e) {
            return !hf(e) && jh(e)
          }),
      (this.delta_ = t.delta ? t.delta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100))
  }
  handleEvent(t) {
    let e = !1
    if (t.type == k.KEYDOWN || t.type == k.KEYPRESS) {
      const n = t.originalEvent,
        i = n.key
      if (this.condition_(t) && (i === '+' || i === '-')) {
        const r = t.map,
          o = i === '+' ? this.delta_ : -this.delta_,
          a = r.getView()
        ;(Do(a, o, void 0, this.duration_), n.preventDefault(), (e = !0))
      }
    }
    return !e
  }
}
class Ef extends ki {
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
    const e = t.condition ? t.condition : lf
    ;((this.condition_ = t.onFocusOnly ? Hr(Dh, e) : e),
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
    if (!this.condition_(t) || t.type !== k.WHEEL) return !0
    const n = t.map,
      i = t.originalEvent
    ;(i.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.coordinate))
    let r
    if (
      (t.type == k.WHEEL &&
        ((r = i.deltaY),
        ru && i.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (r /= Zl),
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
      Do(e, n, this.lastAnchor_, this.duration_),
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
class xf extends Ni {
  constructor(t) {
    t = t || {}
    const e = t
    ;(e.stopDown || (e.stopDown = qs),
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
    a.getConstraints().rotation !== Po &&
      ((this.anchor_ = o.getCoordinateFromPixelInternal(o.getEventPixel(ko(this.targetPointers)))),
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
class Cf extends Ni {
  constructor(t) {
    t = t || {}
    const e = t
    ;(e.stopDown || (e.stopDown = qs),
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
      (this.anchor_ = l.getCoordinateFromPixelInternal(l.getEventPixel(ko(this.targetPointers)))),
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
function wf(s) {
  s = s || {}
  const t = new _e(),
    e = new Ud(-0.005, 0.05, 100)
  return (
    (s.altShiftDragRotate !== void 0 ? s.altShiftDragRotate : !0) && t.push(new ff()),
    (s.doubleClickZoom !== void 0 ? s.doubleClickZoom : !0) &&
      t.push(new rf({ delta: s.zoomDelta, duration: s.zoomDuration })),
    (s.dragPan !== void 0 ? s.dragPan : !0) && t.push(new df({ onFocusOnly: s.onFocusOnly, kinetic: e })),
    (s.pinchRotate !== void 0 ? s.pinchRotate : !0) && t.push(new xf()),
    (s.pinchZoom !== void 0 ? s.pinchZoom : !0) && t.push(new Cf({ duration: s.zoomDuration })),
    (s.keyboard !== void 0 ? s.keyboard : !0) &&
      (t.push(new pf()), t.push(new yf({ delta: s.zoomDelta, duration: s.zoomDuration }))),
    (s.mouseWheelZoom !== void 0 ? s.mouseWheelZoom : !0) &&
      t.push(new Ef({ onFocusOnly: s.onFocusOnly, duration: s.zoomDuration })),
    (s.shiftDragZoom !== void 0 ? s.shiftDragZoom : !0) && t.push(new mf({ duration: s.zoomDuration })),
    t
  )
}
function Gh(s) {
  if (s instanceof Ao) {
    s.setMapInternal(null)
    return
  }
  s instanceof Hn && s.getLayers().forEach(Gh)
}
function zh(s, t) {
  if (s instanceof Ao) {
    s.setMapInternal(t)
    return
  }
  if (s instanceof Hn) {
    const e = s.getLayers().getArray()
    for (let n = 0, i = e.length; n < i; ++n) zh(e[n], t)
  }
}
class Sf extends Ce {
  constructor(t) {
    ;(super(), (t = t || {}), this.on, this.once, this.un)
    const e = Rf(t)
    ;(this.renderComplete_,
      (this.loaded_ = !0),
      (this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this)),
      (this.maxTilesLoading_ = t.maxTilesLoading !== void 0 ? t.maxTilesLoading : 16),
      (this.pixelRatio_ = t.pixelRatio !== void 0 ? t.pixelRatio : Zl),
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
      (this.controls = e.controls || nf()),
      (this.interactions = e.interactions || wf({ onFocusOnly: !0 })),
      (this.overlays_ = e.overlays),
      (this.overlayIdIndex_ = {}),
      (this.renderer_ = null),
      (this.postRenderFunctions_ = []),
      (this.tileQueue_ = new Hd(this.getTilePriority.bind(this), this.handleTileChange_.bind(this))),
      this.addChangeListener(ft.LAYERGROUP, this.handleLayerGroupChanged_),
      this.addChangeListener(ft.VIEW, this.handleViewChanged_),
      this.addChangeListener(ft.SIZE, this.handleSizeChanged_),
      this.addChangeListener(ft.TARGET, this.handleTargetChanged_),
      this.setProperties(e.values))
    const n = this
    ;(t.view &&
      !(t.view instanceof Qt) &&
      t.view.then(function (i) {
        n.setView(new Qt(i))
      }),
      this.controls.addEventListener(Nt.ADD, i => {
        i.element.setMap(this)
      }),
      this.controls.addEventListener(Nt.REMOVE, i => {
        i.element.setMap(null)
      }),
      this.interactions.addEventListener(Nt.ADD, i => {
        i.element.setMap(this)
      }),
      this.interactions.addEventListener(Nt.REMOVE, i => {
        i.element.setMap(null)
      }),
      this.overlays_.addEventListener(Nt.ADD, i => {
        this.addOverlayInternal_(i.element)
      }),
      this.overlays_.addEventListener(Nt.REMOVE, i => {
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
    zh(t.layer, this)
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
      o = n.layerFilter !== void 0 ? n.layerFilter : vs,
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
        i instanceof Hn ? e(i.getLayers()) : t.push(i)
      })
    }
    return (e(this.getLayers()), t)
  }
  hasFeatureAtPixel(t, e) {
    if (!this.frameState_ || !this.renderer_) return !1
    const n = this.getCoordinateFromPixelInternal(t)
    e = e !== void 0 ? e : {}
    const i = e.layerFilter !== void 0 ? e.layerFilter : vs,
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
    return this.get(ft.TARGET)
  }
  getTargetElement() {
    return this.targetElement_
  }
  getCoordinateFromPixel(t) {
    return Vr(this.getCoordinateFromPixelInternal(t), this.getView().getProjection())
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
    return this.get(ft.LAYERGROUP)
  }
  setLayers(t) {
    const e = this.getLayerGroup()
    if (t instanceof _e) {
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
    const e = ge(t, this.getView().getProjection())
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
  getTilePriority(t, e, n, i) {
    return Jd(this.frameState_, t, e, n, i)
  }
  handleBrowserEvent(t, e) {
    e = e || t.type
    const n = new Ae(e, this, t)
    this.handleMapBrowserEvent(n)
  }
  handleMapBrowserEvent(t) {
    if (!this.frameState_) return
    const e = t.originalEvent,
      n = e.type
    if (n === qr.POINTERDOWN || n === k.WHEEL || n === k.KEYDOWN) {
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
        if (o[Dt.ANIMATING] || o[Dt.INTERACTING]) {
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
        ? (this.hasListener(Ne.RENDERCOMPLETE) && this.renderer_.dispatchRenderEvent(Ne.RENDERCOMPLETE, t),
          this.loaded_ === !1 && ((this.loaded_ = !0), this.dispatchEvent(new Tn(Fe.LOADEND, this, t))))
        : this.loaded_ === !0 && ((this.loaded_ = !1), this.dispatchEvent(new Tn(Fe.LOADSTART, this, t))))
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
        this.viewport_.removeEventListener(k.CONTEXTMENU, this.boundHandleBrowserEvent_),
        this.viewport_.removeEventListener(k.WHEEL, this.boundHandleBrowserEvent_),
        this.mapBrowserEventHandler_.dispose(),
        (this.mapBrowserEventHandler_ = null),
        $r(this.viewport_))
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
        this.renderer_ || (this.renderer_ = new Kd(this)),
        (this.mapBrowserEventHandler_ = new $d(this, this.moveTolerance_)))
      for (const r in J)
        this.mapBrowserEventHandler_.addEventListener(J[r], this.handleMapBrowserEvent.bind(this))
      ;(this.viewport_.addEventListener(k.CONTEXTMENU, this.boundHandleBrowserEvent_, !1),
        this.viewport_.addEventListener(k.WHEEL, this.boundHandleBrowserEvent_, $l ? { passive: !1 } : !1))
      const n = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : e
      this.targetChangeHandlerKeys_ = [
        Z(n, k.KEYDOWN, this.handleBrowserEvent, this),
        Z(n, k.KEYPRESS, this.handleBrowserEvent, this),
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
      (this.viewPropertyListenerKey_ = Z(t, _i.PROPERTYCHANGE, this.handleViewPropertyChanged_, this)),
      (this.viewChangeListenerKey_ = Z(t, k.CHANGE, this.handleViewPropertyChanged_, this)),
      t.resolveConstraints(0)),
      this.render())
  }
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ &&
      (this.layerGroupPropertyListenerKeys_.forEach(et), (this.layerGroupPropertyListenerKeys_ = null))
    const t = this.getLayerGroup()
    ;(t &&
      (this.handleLayerAdd_(new Oe('addlayer', t)),
      (this.layerGroupPropertyListenerKeys_ = [
        Z(t, _i.PROPERTYCHANGE, this.render, this),
        Z(t, k.CHANGE, this.render, this),
        Z(t, 'addlayer', this.handleLayerAdd_, this),
        Z(t, 'removelayer', this.handleLayerRemove_, this),
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
    Gh(t.layer)
  }
  removeOverlay(t) {
    return this.getOverlays().remove(t)
  }
  renderFrame_(t) {
    const e = this.getSize(),
      n = this.getView(),
      i = this.frameState_
    let r = null
    if (e !== void 0 && Pa(e) && n && n.isDef()) {
      const o = n.getHints(this.frameState_ ? this.frameState_.viewHints : void 0),
        a = n.getState()
      if (
        ((r = {
          animate: !1,
          coordinateToPixelTransform: this.coordinateToPixelTransform_,
          declutterTree: null,
          extent: Wr(a.center, a.resolution, a.rotation, e),
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
          mapId: mt(this),
          renderTargets: {},
        }),
        a.nextCenter && a.nextResolution)
      ) {
        const l = isNaN(a.nextRotation) ? a.rotation : a.nextRotation
        r.nextExtent = Wr(a.nextCenter, a.nextResolution, l, e)
      }
    }
    ;((this.frameState_ = r),
      this.renderer_.renderFrame(r),
      r &&
        (r.animate && this.render(),
        Array.prototype.push.apply(this.postRenderFunctions_, r.postRenderFunctions),
        i &&
          (!this.previousExtent_ || (!ir(this.previousExtent_) && !zr(r.extent, this.previousExtent_))) &&
          (this.dispatchEvent(new Tn(Fe.MOVESTART, this, i)),
          (this.previousExtent_ = Qs(this.previousExtent_))),
        this.previousExtent_ &&
          !r.viewHints[Dt.ANIMATING] &&
          !r.viewHints[Dt.INTERACTING] &&
          !zr(r.extent, this.previousExtent_) &&
          (this.dispatchEvent(new Tn(Fe.MOVEEND, this, r)), uu(r.extent, this.previousExtent_))),
      this.dispatchEvent(new Tn(Fe.POSTRENDER, this, r)),
      (this.renderComplete_ =
        this.hasListener(Fe.LOADSTART) || this.hasListener(Fe.LOADEND) || this.hasListener(Ne.RENDERCOMPLETE)
          ? !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady()
          : void 0),
      this.postRenderTimeoutHandle_ ||
        (this.postRenderTimeoutHandle_ = setTimeout(() => {
          ;((this.postRenderTimeoutHandle_ = void 0), this.handlePostRender())
        }, 0)))
  }
  setLayerGroup(t) {
    const e = this.getLayerGroup()
    ;(e && this.handleLayerRemove_(new Oe('removelayer', e)), this.set(ft.LAYERGROUP, t))
  }
  setSize(t) {
    this.set(ft.SIZE, t)
  }
  setTarget(t) {
    this.set(ft.TARGET, t)
  }
  setView(t) {
    if (!t || t instanceof Qt) {
      this.set(ft.VIEW, t)
      return
    }
    this.set(ft.VIEW, new Qt())
    const e = this
    t.then(function (n) {
      e.setView(new Qt(n))
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
        !Pa(e) &&
          (t.offsetWidth || t.offsetHeight || t.getClientRects().length) &&
          ih("No map visible because the map container's width or height are 0."))
    }
    const n = this.getSize()
    e && (!n || !$s(e, n)) && (this.setSize(e), this.updateViewportSize_())
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
function Rf(s) {
  let t = null
  s.keyboardEventTarget !== void 0 &&
    (t =
      typeof s.keyboardEventTarget == 'string'
        ? document.getElementById(s.keyboardEventTarget)
        : s.keyboardEventTarget)
  const e = {},
    n = s.layers && typeof s.layers.getLayers == 'function' ? s.layers : new Hn({ layers: s.layers })
  ;((e[ft.LAYERGROUP] = n),
    (e[ft.TARGET] = s.target),
    (e[ft.VIEW] = s.view instanceof Qt ? s.view : new Qt()))
  let i
  s.controls !== void 0 &&
    (Array.isArray(s.controls)
      ? (i = new _e(s.controls.slice()))
      : (X(typeof s.controls.getArray == 'function', 47), (i = s.controls)))
  let r
  s.interactions !== void 0 &&
    (Array.isArray(s.interactions)
      ? (r = new _e(s.interactions.slice()))
      : (X(typeof s.interactions.getArray == 'function', 48), (r = s.interactions)))
  let o
  return (
    s.overlays !== void 0
      ? Array.isArray(s.overlays)
        ? (o = new _e(s.overlays.slice()))
        : (X(typeof s.overlays.getArray == 'function', 49), (o = s.overlays))
      : (o = new _e()),
    { controls: i, interactions: r, keyboardEventTarget: t, overlays: o, values: e }
  )
}
class Tf {
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
      X(n !== void 0, 15),
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
      X(e !== void 0, 15),
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
    X(!(t in this.entries_), 16)
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
function Va(s, t, e, n) {
  return n !== void 0 ? ((n[0] = s), (n[1] = t), (n[2] = e), n) : [s, t, e]
}
function rr(s, t, e) {
  return s + '/' + t + '/' + e
}
function Xh(s) {
  return rr(s[0], s[1], s[2])
}
function vf(s) {
  return s.split('/').map(Number)
}
function If(s) {
  return (s[1] << s[0]) + s[2]
}
function Mf(s, t) {
  const e = s[0],
    n = s[1],
    i = s[2]
  if (t.getMinZoom() > e || e > t.getMaxZoom()) return !1
  const r = t.getFullTileRange(e)
  return r ? r.containsXY(n, i) : !0
}
class Wh extends Tf {
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
      n = vf(t)[0]
    this.forEach(i => {
      i.tileCoord[0] !== n && (this.remove(Xh(i.tileCoord)), i.release())
    })
  }
}
class No {
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
  return i !== void 0 ? ((i.minX = s), (i.maxX = t), (i.minY = e), (i.maxY = n), i) : new No(s, t, e, n)
}
const bf = 0.5,
  Lf = 10,
  Za = 0.25
class Pf {
  constructor(t, e, n, i, r, o) {
    ;((this.sourceProj_ = t), (this.targetProj_ = e))
    let a = {}
    const l = Ps(this.targetProj_, this.sourceProj_)
    ;((this.transformInv_ = function (y) {
      const E = y[0] + '/' + y[1]
      return (a[E] || (a[E] = l(y)), a[E])
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
      c = nr(n),
      u = er(n),
      d = tr(n),
      f = this.transformInv_(h),
      g = this.transformInv_(c),
      _ = this.transformInv_(u),
      m = this.transformInv_(d),
      p = Lf + (o ? Math.max(0, Math.ceil(Math.log2(Xr(n) / (o * o * 256 * 256)))) : 0)
    if ((this.addQuad_(h, c, u, d, f, g, _, m, p), this.wrapsXInSource_)) {
      let y = 1 / 0
      ;(this.triangles_.forEach(function (E, x, C) {
        y = Math.min(y, E.source[0][0], E.source[1][0], E.source[2][0])
      }),
        this.triangles_.forEach(E => {
          if (Math.max(E.source[0][0], E.source[1][0], E.source[2][0]) - y > this.sourceWorldWidth_ / 2) {
            const x = [
              [E.source[0][0], E.source[0][1]],
              [E.source[1][0], E.source[1][1]],
              [E.source[2][0], E.source[2][1]],
            ]
            ;(x[0][0] - y > this.sourceWorldWidth_ / 2 && (x[0][0] -= this.sourceWorldWidth_),
              x[1][0] - y > this.sourceWorldWidth_ / 2 && (x[1][0] -= this.sourceWorldWidth_),
              x[2][0] - y > this.sourceWorldWidth_ / 2 && (x[2][0] -= this.sourceWorldWidth_))
            const C = Math.min(x[0][0], x[1][0], x[2][0])
            Math.max(x[0][0], x[1][0], x[2][0]) - C < this.sourceWorldWidth_ / 2 && (E.source = x)
          }
        }))
    }
    a = {}
  }
  addTriangle_(t, e, n, i, r, o) {
    this.triangles_.push({ source: [i, r, o], target: [t, e, n] })
  }
  addQuad_(t, e, n, i, r, o, a, l, h) {
    const c = pa([r, o, a, l]),
      u = this.sourceWorldWidth_ ? rt(c) / this.sourceWorldWidth_ : null,
      d = this.sourceWorldWidth_,
      f = this.sourceProj_.canWrapX() && u > 0.5 && u < 1
    let g = !1
    if (h > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const m = pa([t, e, n, i])
        g = rt(m) / this.targetWorldWidth_ > Za || g
      }
      !f && this.sourceProj_.isGlobal() && u && (g = u > Za || g)
    }
    if (
      !g &&
      this.maxSourceExtent_ &&
      isFinite(c[0]) &&
      isFinite(c[1]) &&
      isFinite(c[2]) &&
      isFinite(c[3]) &&
      !Oi(c, this.maxSourceExtent_)
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
        const E = (r[1] + a[1]) / 2 - p[1]
        g = y * y + E * E > this.errorThresholdSquared_
      }
      if (g) {
        if (Math.abs(t[0] - n[0]) <= Math.abs(t[1] - n[1])) {
          const m = [(e[0] + n[0]) / 2, (e[1] + n[1]) / 2],
            p = this.transformInv_(m),
            y = [(i[0] + t[0]) / 2, (i[1] + t[1]) / 2],
            E = this.transformInv_(y)
          ;(this.addQuad_(t, e, m, y, r, o, p, E, h - 1), this.addQuad_(y, m, n, i, E, p, a, l, h - 1))
        } else {
          const m = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2],
            p = this.transformInv_(m),
            y = [(n[0] + i[0]) / 2, (n[1] + i[1]) / 2],
            E = this.transformInv_(y)
          ;(this.addQuad_(t, m, y, i, r, p, E, l, h - 1), this.addQuad_(m, e, n, y, p, o, a, E, h - 1))
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
        ;(ws(t, r[0]), ws(t, r[1]), ws(t, r[2]))
      }),
      t
    )
  }
  getTriangles() {
    return this.triangles_
  }
}
let wr
const zn = []
function Ka(s, t, e, n, i) {
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
function Sr(s, t) {
  return Math.abs(s[t * 4] - 210) > 2 || Math.abs(s[t * 4 + 3] - 0.75 * 255) > 2
}
function Af() {
  if (wr === void 0) {
    const s = oe(6, 6, zn)
    ;((s.globalCompositeOperation = 'lighter'),
      (s.fillStyle = 'rgba(210, 0, 0, 0.75)'),
      Ka(s, 4, 5, 4, 0),
      Ka(s, 4, 5, 0, 5))
    const t = s.getImageData(0, 0, 3, 3).data
    ;((wr = Sr(t, 0) || Sr(t, 4) || Sr(t, 8)), vo(s), zn.push(s.canvas))
  }
  return wr
}
function $a(s, t, e, n) {
  const i = oh(e, t, s)
  let r = Sa(t, n, e)
  const o = t.getMetersPerUnit()
  o !== void 0 && (r *= o)
  const a = s.getMetersPerUnit()
  a !== void 0 && (r /= a)
  const l = s.getExtent()
  if (!l || Eo(l, i)) {
    const h = Sa(s, r, i) / r
    isFinite(h) && h > 0 && (r /= h)
  }
  return r
}
function Ff(s, t, e, n) {
  const i = pi(e)
  let r = $a(s, t, i, n)
  return (
    (!isFinite(r) || r <= 0) &&
      th(e, function (o) {
        return ((r = $a(s, t, o, n)), isFinite(r) && r > 0)
      }),
    r
  )
}
function Of(s, t, e, n, i, r, o, a, l, h, c, u) {
  const d = oe(Math.round(e * s), Math.round(e * t), zn)
  if ((u || (d.imageSmoothingEnabled = !1), l.length === 0)) return d.canvas
  d.scale(e, e)
  function f(x) {
    return Math.round(x * e) / e
  }
  d.globalCompositeOperation = 'lighter'
  const g = on()
  l.forEach(function (x, C, S) {
    _u(g, x.extent)
  })
  const _ = rt(g),
    m = re(g),
    p = oe(Math.round((e * _) / n), Math.round((e * m) / n), zn)
  u || (p.imageSmoothingEnabled = !1)
  const y = e / n
  l.forEach(function (x, C, S) {
    const v = x.extent[0] - g[0],
      T = -(x.extent[3] - g[3]),
      b = rt(x.extent),
      F = re(x.extent)
    x.image.width > 0 &&
      x.image.height > 0 &&
      p.drawImage(x.image, h, h, x.image.width - 2 * h, x.image.height - 2 * h, v * y, T * y, b * y, F * y)
  })
  const E = an(o)
  return (
    a.getTriangles().forEach(function (x, C, S) {
      const v = x.source,
        T = x.target
      let b = v[0][0],
        F = v[0][1],
        G = v[1][0],
        j = v[1][1],
        N = v[2][0],
        nt = v[2][1]
      const I = f((T[0][0] - E[0]) / r),
        A = f(-(T[0][1] - E[1]) / r),
        R = f((T[1][0] - E[0]) / r),
        O = f(-(T[1][1] - E[1]) / r),
        K = f((T[2][0] - E[0]) / r),
        B = f(-(T[2][1] - E[1]) / r),
        it = b,
        w = F
      ;((b = 0), (F = 0), (G -= it), (j -= w), (N -= it), (nt -= w))
      const Tt = [
          [G, j, 0, 0, R - I],
          [N, nt, 0, 0, K - I],
          [0, 0, G, j, O - A],
          [0, 0, N, nt, B - A],
        ],
        Y = Lu(Tt)
      if (Y) {
        if ((d.save(), d.beginPath(), Af() || !u)) {
          d.moveTo(R, O)
          const q = 4,
            Se = I - R,
            qt = A - O
          for (let at = 0; at < q; at++)
            (d.lineTo(R + f(((at + 1) * Se) / q), O + f((at * qt) / (q - 1))),
              at != q - 1 && d.lineTo(R + f(((at + 1) * Se) / q), O + f(((at + 1) * qt) / (q - 1))))
          d.lineTo(K, B)
        } else (d.moveTo(R, O), d.lineTo(I, A), d.lineTo(K, B))
        ;(d.clip(),
          d.transform(Y[0], Y[2], Y[1], Y[3], I, A),
          d.translate(g[0] - it, g[3] - w),
          d.scale(n / e, -n / e),
          d.drawImage(p.canvas, 0, 0),
          d.restore())
      }
    }),
    vo(p),
    zn.push(p.canvas),
    c &&
      (d.save(),
      (d.globalCompositeOperation = 'source-over'),
      (d.strokeStyle = 'black'),
      (d.lineWidth = 1),
      a.getTriangles().forEach(function (x, C, S) {
        const v = x.target,
          T = (v[0][0] - E[0]) / r,
          b = -(v[0][1] - E[1]) / r,
          F = (v[1][0] - E[0]) / r,
          G = -(v[1][1] - E[1]) / r,
          j = (v[2][0] - E[0]) / r,
          N = -(v[2][1] - E[1]) / r
        ;(d.beginPath(), d.moveTo(F, G), d.lineTo(T, b), d.lineTo(j, N), d.closePath(), d.stroke())
      }),
      d.restore()),
    d.canvas
  )
}
class Jr extends Fh {
  constructor(t, e, n, i, r, o, a, l, h, c, u, d) {
    ;(super(r, L.IDLE, { interpolate: !!d }),
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
    const m = g ? fi(f, g) : f
    if (Xr(m) === 0) {
      this.state = L.EMPTY
      return
    }
    const p = t.getExtent()
    p && (_ ? (_ = fi(_, p)) : (_ = p))
    const y = i.getResolution(this.wrappedTileCoord_[0]),
      E = Ff(t, n, m, y)
    if (!isFinite(E) || E <= 0) {
      this.state = L.EMPTY
      return
    }
    const x = c !== void 0 ? c : bf
    if (
      ((this.triangulation_ = new Pf(t, n, m, _, E * x, y)), this.triangulation_.getTriangles().length === 0)
    ) {
      this.state = L.EMPTY
      return
    }
    this.sourceZ_ = e.getZForResolution(E)
    let C = this.triangulation_.calculateSourceExtent()
    if (
      (_ && (t.canWrapX() ? ((C[1] = ot(C[1], _[1], _[3])), (C[3] = ot(C[3], _[1], _[3]))) : (C = fi(C, _))),
      !Xr(C))
    )
      this.state = L.EMPTY
    else {
      const S = e.getTileRangeForExtentAndZ(C, this.sourceZ_)
      for (let v = S.minX; v <= S.maxX; v++)
        for (let T = S.minY; T <= S.maxY; T++) {
          const b = h(this.sourceZ_, v, T, a)
          b && this.sourceTiles_.push(b)
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
        n = this.targetTileGrid_.getTileSize(e),
        i = typeof n == 'number' ? n : n[0],
        r = typeof n == 'number' ? n : n[1],
        o = this.targetTileGrid_.getResolution(e),
        a = this.sourceTileGrid_.getResolution(this.sourceZ_),
        l = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_)
      ;((this.canvas_ = Of(
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
          const n = e.getState()
          if (n == L.IDLE || n == L.LOADING) {
            t++
            const i = Z(
              e,
              k.CHANGE,
              function (r) {
                const o = e.getState()
                ;(o == L.LOADED || o == L.ERROR || o == L.EMPTY) &&
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
              e.getState() == L.IDLE && e.load()
            }))
    }
  }
  unlistenSources_() {
    ;(this.sourcesListenerKeys_.forEach(et), (this.sourcesListenerKeys_ = null))
  }
  release() {
    ;(this.canvas_ && (vo(this.canvas_.getContext('2d')), zn.push(this.canvas_), (this.canvas_ = null)),
      super.release())
  }
}
class Df extends Wd {
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
      (this.tmpTileRange_ = new No(0, 0, 0, 0)))
  }
  isDrawableTile(t) {
    const e = this.getLayer(),
      n = t.getState(),
      i = e.getUseInterimTilesOnError()
    return n == L.LOADED || n == L.EMPTY || (n == L.ERROR && !i)
  }
  getTile(t, e, n, i) {
    const r = i.pixelRatio,
      o = i.viewState.projection,
      a = this.getLayer()
    let h = a.getSource().getTile(t, e, n, r, o)
    return (
      h.getState() == L.ERROR && a.getUseInterimTilesOnError() && a.getPreload() > 0 && (this.newTiles_ = !0),
      this.isDrawableTile(h) || (h = h.getInterimTile()),
      h
    )
  }
  getData(t) {
    const e = this.frameState
    if (!e) return null
    const n = this.getLayer(),
      i = Ot(e.pixelToCoordinateTransform, t.slice()),
      r = n.getExtent()
    if (r && !Eo(r, i)) return null
    const o = e.pixelRatio,
      a = e.viewState.projection,
      l = e.viewState,
      h = n.getRenderSource(),
      c = h.getTileGridForProjection(l.projection),
      u = h.getTilePixelRatio(e.pixelRatio)
    for (let d = c.getZForResolution(l.resolution); d >= c.getMinZoom(); --d) {
      const f = c.getTileCoordForCoordAndZ(i, d),
        g = h.getTile(d, f[1], f[2], o, a)
      if (!(g instanceof Oh || g instanceof Jr) || (g instanceof Jr && g.getState() === L.EMPTY)) return null
      if (g.getState() !== L.LOADED) continue
      const _ = c.getOrigin(d),
        m = ee(c.getTileSize(d)),
        p = c.getResolution(d),
        y = Math.floor(u * ((i[0] - _[0]) / p - f[1] * m[0])),
        E = Math.floor(u * ((_[1] - i[1]) / p - f[2] * m[1])),
        x = Math.round(u * h.getGutterForProjection(l.projection))
      return this.getImageData(g.getImage(), y + x, E + x)
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
      E = Math.round((rt(m) / p) * h),
      x = Math.round((re(m) / p) * h),
      C = n.extent && Ln(n.extent)
    C && (m = fi(m, Ln(n.extent)))
    const S = (_ * E) / 2 / y,
      v = (_ * x) / 2 / y,
      T = [a[0] - S, a[1] - v, a[0] + S, a[1] + v],
      b = f.getTileRangeForExtentAndZ(m, g),
      F = {}
    F[g] = {}
    const G = this.createLoadedTileFinder(u, r, F),
      j = this.tmpExtent,
      N = this.tmpTileRange_
    this.newTiles_ = !1
    const nt = l ? Yr(i.center, p, l, t.size) : void 0
    for (let Tt = b.minX; Tt <= b.maxX; ++Tt)
      for (let Y = b.minY; Y <= b.maxY; ++Y) {
        if (l && !f.tileCoordIntersectsViewport([g, Tt, Y], nt)) continue
        const q = this.getTile(g, Tt, Y, t)
        if (this.isDrawableTile(q)) {
          const at = mt(this)
          if (q.getState() == L.LOADED) {
            F[g][q.tileCoord.toString()] = q
            let le = q.inTransition(at)
            ;(le && n.opacity !== 1 && (q.endTransition(at), (le = !1)),
              !this.newTiles_ && (le || !this.renderedTiles.includes(q)) && (this.newTiles_ = !0))
          }
          if (q.getAlpha(at, t.time) === 1) continue
        }
        const Se = f.getTileCoordChildTileRange(q.tileCoord, N, j)
        let qt = !1
        ;(Se && (qt = G(g + 1, Se)), qt || f.forEachTileCoordParentTileRange(q.tileCoord, G, N, j))
      }
    const I = ((_ / o) * h) / y
    mi(this.pixelTransform, t.size[0] / 2, t.size[1] / 2, 1 / h, 1 / h, l, -E / 2, -x / 2)
    const A = cu(this.pixelTransform)
    this.useContainer(e, A, this.getBackground(t))
    const R = this.context,
      O = R.canvas
    ;(ql(this.inversePixelTransform, this.pixelTransform),
      mi(this.tempTransform, E / 2, x / 2, I, I, 0, -E / 2, -x / 2),
      O.width != E || O.height != x
        ? ((O.width = E), (O.height = x))
        : this.containerReused || R.clearRect(0, 0, E, x),
      C && this.clipUnrotated(R, t, C),
      u.getInterpolate() || (R.imageSmoothingEnabled = !1),
      this.preRender(R, t),
      (this.renderedTiles.length = 0))
    let K = Object.keys(F).map(Number)
    K.sort(po)
    let B, it, w
    n.opacity === 1 && (!this.containerReused || u.getOpaque(t.viewState.projection))
      ? (K = K.reverse())
      : ((B = []), (it = []))
    for (let Tt = K.length - 1; Tt >= 0; --Tt) {
      const Y = K[Tt],
        q = u.getTilePixelSize(Y, h, r),
        qt = f.getResolution(Y) / _,
        at = q[0] * qt * I,
        le = q[1] * qt * I,
        cn = f.getTileCoordForCoordAndZ(an(T), Y),
        Bi = f.getTileCoordExtent(cn),
        un = Ot(this.tempTransform, [(y * (Bi[0] - T[0])) / _, (y * (T[3] - Bi[3])) / _]),
        Ui = y * u.getGutterForProjection(r),
        Re = F[Y]
      for (const ti in Re) {
        const Te = Re[ti],
          Vi = Te.tileCoord,
          Zi = cn[1] - Vi[1],
          Ki = Math.round(un[0] - (Zi - 1) * at),
          dn = cn[2] - Vi[2],
          fr = Math.round(un[1] - (dn - 1) * le),
          xt = Math.round(un[0] - Zi * at),
          Pt = Math.round(un[1] - dn * le),
          Wt = Ki - xt,
          he = fr - Pt,
          fn = g === Y,
          Ue = fn && Te.getAlpha(mt(this), t.time) !== 1
        let ve = !1
        if (!Ue)
          if (B) {
            w = [xt, Pt, xt + Wt, Pt, xt + Wt, Pt + he, xt, Pt + he]
            for (let gn = 0, $i = B.length; gn < $i; ++gn)
              if (g !== Y && Y < it[gn]) {
                const gt = B[gn]
                Oi([xt, Pt, xt + Wt, Pt + he], [gt[0], gt[3], gt[4], gt[7]]) &&
                  (ve || (R.save(), (ve = !0)),
                  R.beginPath(),
                  R.moveTo(w[0], w[1]),
                  R.lineTo(w[2], w[3]),
                  R.lineTo(w[4], w[5]),
                  R.lineTo(w[6], w[7]),
                  R.moveTo(gt[6], gt[7]),
                  R.lineTo(gt[4], gt[5]),
                  R.lineTo(gt[2], gt[3]),
                  R.lineTo(gt[0], gt[1]),
                  R.clip())
              }
            ;(B.push(w), it.push(Y))
          } else R.clearRect(xt, Pt, Wt, he)
        ;(this.drawTileImage(Te, t, xt, Pt, Wt, he, Ui, fn),
          B && !Ue ? (ve && R.restore(), this.renderedTiles.unshift(Te)) : this.renderedTiles.push(Te),
          this.updateUsedTiles(t.usedTiles, u, Te))
      }
    }
    return (
      (this.renderedRevision = d),
      (this.renderedResolution = _),
      (this.extentChanged = !this.renderedExtent_ || !zr(this.renderedExtent_, T)),
      (this.renderedExtent_ = T),
      (this.renderedPixelRatio = h),
      (this.renderedProjection = r),
      this.manageTilePyramid(t, u, f, h, r, m, g, c.getPreload()),
      this.scheduleExpireCache(t, u),
      this.postRender(R, t),
      n.extent && R.restore(),
      (R.imageSmoothingEnabled = !0),
      A !== O.style.transform && (O.style.transform = A),
      this.container
    )
  }
  drawTileImage(t, e, n, i, r, o, a, l) {
    const h = this.getTileImage(t)
    if (!h) return
    const c = mt(this),
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
        const a = mt(i)
        a in o.usedTiles && i.expireCache(o.viewState.projection, o.usedTiles[a])
      }.bind(null, e)
      t.postRenderFunctions.push(n)
    }
  }
  updateUsedTiles(t, e, n) {
    const i = mt(e)
    ;(i in t || (t[i] = {}), (t[i][n.getKey()] = !0))
  }
  manageTilePyramid(t, e, n, i, r, o, a, l, h) {
    const c = mt(e)
    c in t.wantedTiles || (t.wantedTiles[c] = {})
    const u = t.wantedTiles[c],
      d = t.tileQueue,
      f = n.getMinZoom(),
      g = t.viewState.rotation,
      _ = g ? Yr(t.viewState.center, t.viewState.resolution, g, t.size) : void 0
    let m = 0,
      p,
      y,
      E,
      x,
      C,
      S
    for (S = f; S <= a; ++S)
      for (y = n.getTileRangeForExtentAndZ(o, S, y), E = n.getResolution(S), x = y.minX; x <= y.maxX; ++x)
        for (C = y.minY; C <= y.maxY; ++C)
          (g && !n.tileCoordIntersectsViewport([S, x, C], _)) ||
            (a - S <= l
              ? (++m,
                (p = e.getTile(S, x, C, i, r)),
                p.getState() == L.IDLE &&
                  ((u[p.getKey()] = !0),
                  d.isKeyQueued(p.getKey()) || d.enqueue([p, c, n.getTileCoordCenter(p.tileCoord), E])),
                h !== void 0 && h(p))
              : e.useTile(S, x, C, r))
    e.updateCacheSize(m, r)
  }
}
const rs = { PRELOAD: 'preload', USE_INTERIM_TILES_ON_ERROR: 'useInterimTilesOnError' },
  En = [0, 0, 0],
  Ie = 5
class Yh {
  constructor(t) {
    ;((this.minZoom = t.minZoom !== void 0 ? t.minZoom : 0),
      (this.resolutions_ = t.resolutions),
      X(
        tu(this.resolutions_, function (i, r) {
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
        ((this.origins_ = t.origins), X(this.origins_.length == this.resolutions_.length, 20)))
    const n = t.extent
    ;(n !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = an(n)),
      X((!this.origin_ && this.origins_) || (this.origin_ && !this.origins_), 18),
      (this.tileSizes_ = null),
      t.tileSizes !== void 0 &&
        ((this.tileSizes_ = t.tileSizes), X(this.tileSizes_.length == this.resolutions_.length, 19)),
      (this.tileSize_ = t.tileSize !== void 0 ? t.tileSize : this.tileSizes_ ? null : Mo),
      X((!this.tileSize_ && this.tileSizes_) || (this.tileSize_ && !this.tileSizes_), 22),
      (this.extent_ = n !== void 0 ? n : null),
      (this.fullTileRanges_ = null),
      (this.tmpSize_ = [0, 0]),
      (this.tmpExtent_ = [0, 0, 0, 0]),
      t.sizes !== void 0
        ? (this.fullTileRanges_ = t.sizes.map(function (i, r) {
            const o = new No(
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
    this.getTileCoordForXYAndZ_(t[0], t[3], e, !1, En)
    const i = En[1],
      r = En[2]
    this.getTileCoordForXYAndZ_(t[2], t[1], e, !0, En)
    const o = En[1],
      a = En[2]
    return yn(i, o, r, a, n)
  }
  getTileCoordCenter(t) {
    const e = this.getOrigin(t[0]),
      n = this.getResolution(t[0]),
      i = ee(this.getTileSize(t[0]), this.tmpSize_)
    return [e[0] + (t[1] + 0.5) * i[0] * n, e[1] - (t[2] + 0.5) * i[1] * n]
  }
  getTileCoordExtent(t, e) {
    const n = this.getOrigin(t[0]),
      i = this.getResolution(t[0]),
      r = ee(this.getTileSize(t[0]), this.tmpSize_),
      o = n[0] + t[1] * r[0] * i,
      a = n[1] - (t[2] + 1) * r[1] * i,
      l = o + r[0] * i,
      h = a + r[1] * i
    return Fi(o, a, l, h, e)
  }
  getTileCoordForCoordAndResolution(t, e, n) {
    return this.getTileCoordForXYAndResolution_(t[0], t[1], e, !1, n)
  }
  getTileCoordForXYAndResolution_(t, e, n, i, r) {
    const o = this.getZForResolution(n),
      a = n / this.getResolution(o),
      l = this.getOrigin(o),
      h = ee(this.getTileSize(o), this.tmpSize_)
    let c = (a * (t - l[0])) / n / h[0],
      u = (a * (l[1] - e)) / n / h[1]
    return (
      i ? ((c = es(c, Ie) - 1), (u = es(u, Ie) - 1)) : ((c = ts(c, Ie)), (u = ts(u, Ie))),
      Va(o, c, u, r)
    )
  }
  getTileCoordForXYAndZ_(t, e, n, i, r) {
    const o = this.getOrigin(n),
      a = this.getResolution(n),
      l = ee(this.getTileSize(n), this.tmpSize_)
    let h = (t - o[0]) / a / l[0],
      c = (o[1] - e) / a / l[1]
    return (
      i ? ((h = es(h, Ie) - 1), (c = es(c, Ie) - 1)) : ((h = ts(h, Ie)), (c = ts(c, Ie))),
      Va(n, h, c, r)
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
    const n = yo(this.resolutions_, t, e || 0)
    return ot(n, this.minZoom, this.maxZoom)
  }
  tileCoordIntersectsViewport(t, e) {
    return _h(e, 0, e.length, 2, this.getTileCoordExtent(t))
  }
  calculateTileRanges_(t) {
    const e = this.resolutions_.length,
      n = new Array(e)
    for (let i = this.minZoom; i < e; ++i) n[i] = this.getTileRangeForExtentAndZ(t, i)
    this.fullTileRanges_ = n
  }
}
const Rr = { TILELOADSTART: 'tileloadstart', TILELOADEND: 'tileloadend', TILELOADERROR: 'tileloaderror' }
function Bh(s) {
  let t = s.getDefaultTileGrid()
  return (t || ((t = Gf(s)), s.setDefaultTileGrid(t)), t)
}
function kf(s, t, e) {
  const n = t[0],
    i = s.getTileCoordCenter(t),
    r = jo(e)
  if (!Eo(r, i)) {
    const o = rt(r),
      a = Math.ceil((r[0] - i[0]) / o)
    return ((i[0] += o * a), s.getTileCoordForCoordAndZ(i, n))
  }
  return t
}
function Nf(s, t, e, n) {
  n = n !== void 0 ? n : 'top-left'
  const i = Uh(s, t, e)
  return new Yh({ extent: s, origin: pu(s, n), resolutions: i, tileSize: e })
}
function jf(s) {
  const t = s || {},
    e = t.extent || Kt('EPSG:3857').getExtent(),
    n = {
      extent: e,
      minZoom: t.minZoom,
      tileSize: t.tileSize,
      resolutions: Uh(e, t.maxZoom, t.tileSize, t.maxResolution),
    }
  return new Yh(n)
}
function Uh(s, t, e, n) {
  ;((t = t !== void 0 ? t : Td), (e = ee(e !== void 0 ? e : Mo)))
  const i = re(s),
    r = rt(s)
  n = n > 0 ? n : Math.max(r / e[0], i / e[1])
  const o = t + 1,
    a = new Array(o)
  for (let l = 0; l < o; ++l) a[l] = n / Math.pow(2, l)
  return a
}
function Gf(s, t, e, n) {
  const i = jo(s)
  return Nf(i, t, e, n)
}
function jo(s) {
  s = Kt(s)
  let t = s.getExtent()
  if (!t) {
    const e = (180 * xo.degrees) / s.getMetersPerUnit()
    t = Fi(-e, -e, e, e)
  }
  return t
}
class zf extends Yd {
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
    ;(this.tileGrid && ee(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), e),
      (this.tileCache = new Wh(t.cacheSize || 0)),
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
        ((l = rr(e, c, u)),
          (h = !1),
          r.containsKey(l) && ((a = r.get(l)), (h = a.getState() === L.LOADED), h && (h = i(a) !== !1)),
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
    return z()
  }
  getTileGrid() {
    return this.tileGrid
  }
  getTileGridForProjection(t) {
    return this.tileGrid ? this.tileGrid : Bh(t)
  }
  getTileCacheForProjection(t) {
    const e = this.getProjection()
    return (X(e === null || Sn(e, t), 68), this.tileCache)
  }
  getTilePixelRatio(t) {
    return this.tilePixelRatio_
  }
  getTilePixelSize(t, e, n) {
    const i = this.getTileGridForProjection(n),
      r = this.getTilePixelRatio(e),
      o = ee(i.getTileSize(t), this.tmpSize)
    return r == 1 ? o : ud(o, r, this.tmpSize)
  }
  getTileCoordForTileUrlFunction(t, e) {
    e = e !== void 0 ? e : this.getProjection()
    const n = this.getTileGridForProjection(e)
    return (this.getWrapX() && e.isGlobal() && (t = kf(n, t, e)), Mf(t, n) ? t : null)
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
class Xf extends Ye {
  constructor(t, e) {
    ;(super(t), (this.tile = e))
  }
}
function Wf(s, t) {
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
          return (X(c, 55), (c.getHeight() - o[2] - 1).toString())
        })
  }
}
function Yf(s, t) {
  const e = s.length,
    n = new Array(e)
  for (let i = 0; i < e; ++i) n[i] = Wf(s[i], t)
  return Bf(n)
}
function Bf(s) {
  return s.length === 1
    ? s[0]
    : function (t, e, n) {
        if (!t) return
        const i = If(t),
          r = Gn(i, s.length)
        return s[r](t, e, n)
      }
}
function Uf(s) {
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
class Go extends zf {
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
      (this.generateTileUrlFunction_ = this.tileUrlFunction === Go.prototype.tileUrlFunction),
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
      n = mt(e),
      i = e.getState()
    let r
    ;(i == L.LOADING
      ? ((this.tileLoadingKeys_[n] = !0), (r = Rr.TILELOADSTART))
      : n in this.tileLoadingKeys_ &&
        (delete this.tileLoadingKeys_[n],
        (r = i == L.ERROR ? Rr.TILELOADERROR : i == L.LOADED ? Rr.TILELOADEND : void 0)),
      r != null && this.dispatchEvent(new Xf(r, e)))
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
    const e = Uf(t)
    ;((this.urls = e), this.setUrls(e))
  }
  setUrls(t) {
    this.urls = t
    const e = t.join(`
`)
    this.generateTileUrlFunction_ ? this.setTileUrlFunction(Yf(t, this.tileGrid), e) : this.setKey(e)
  }
  tileUrlFunction(t, e, n) {}
  useTile(t, e, n) {
    const i = rr(t, e, n)
    this.tileCache.containsKey(i) && this.tileCache.get(i)
  }
}
class Vf extends Ao {
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
    return this.get(rs.PRELOAD)
  }
  setPreload(t) {
    this.set(rs.PRELOAD, t)
  }
  getUseInterimTilesOnError() {
    return this.get(rs.USE_INTERIM_TILES_ON_ERROR)
  }
  setUseInterimTilesOnError(t) {
    this.set(rs.USE_INTERIM_TILES_ON_ERROR, t)
  }
  getData(t) {
    return super.getData(t)
  }
}
class Zf extends Vf {
  constructor(t) {
    super(t)
  }
  createRenderer() {
    return new Df(this)
  }
}
class Kf extends Go {
  constructor(t) {
    ;(super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      opaque: t.opaque,
      projection: t.projection,
      state: t.state,
      tileGrid: t.tileGrid,
      tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : $f,
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
      (this.tileClass = t.tileClass !== void 0 ? t.tileClass : Oh),
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
    return this.getProjection() && t && !Sn(this.getProjection(), t) ? 0 : this.getGutter()
  }
  getGutter() {
    return 0
  }
  getKey() {
    let t = super.getKey()
    return (this.getInterpolate() || (t += ':disable-interpolation'), t)
  }
  getOpaque(t) {
    return this.getProjection() && t && !Sn(this.getProjection(), t) ? !1 : super.getOpaque(t)
  }
  getTileGridForProjection(t) {
    const e = this.getProjection()
    if (this.tileGrid && (!e || Sn(e, t))) return this.tileGrid
    const n = mt(t)
    return (
      n in this.tileGridForProjection || (this.tileGridForProjection[n] = Bh(t)),
      this.tileGridForProjection[n]
    )
  }
  getTileCacheForProjection(t) {
    const e = this.getProjection()
    if (!e || Sn(e, t)) return this.tileCache
    const n = mt(t)
    return (
      n in this.tileCacheForProjection ||
        (this.tileCacheForProjection[n] = new Wh(this.tileCache.highWaterMark)),
      this.tileCacheForProjection[n]
    )
  }
  createTile_(t, e, n, i, r, o) {
    const a = [t, e, n],
      l = this.getTileCoordForTileUrlFunction(a, r),
      h = l ? this.tileUrlFunction(l, i, r) : void 0,
      c = new this.tileClass(
        a,
        h !== void 0 ? L.IDLE : L.EMPTY,
        h !== void 0 ? h : '',
        this.crossOrigin,
        this.tileLoadFunction,
        this.tileOptions,
      )
    return ((c.key = o), c.addEventListener(k.CHANGE, this.handleTileChange.bind(this)), c)
  }
  getTile(t, e, n, i, r) {
    const o = this.getProjection()
    if (!o || !r || Sn(o, r)) return this.getTileInternal(t, e, n, i, o || r)
    const a = this.getTileCacheForProjection(r),
      l = [t, e, n]
    let h
    const c = Xh(l)
    a.containsKey(c) && (h = a.get(c))
    const u = this.getKey()
    if (h && h.key == u) return h
    const d = this.getTileGridForProjection(o),
      f = this.getTileGridForProjection(r),
      g = this.getTileCoordForTileUrlFunction(l, r),
      _ = new Jr(
        o,
        d,
        r,
        f,
        l,
        g,
        this.getTilePixelRatio(i),
        this.getGutter(),
        (m, p, y, E) => this.getTileInternal(m, p, y, E, o),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.getInterpolate(),
      )
    return ((_.key = u), h ? ((_.interimTile = h), _.refreshInterimChain(), a.replace(c, _)) : a.set(c, _), _)
  }
  getTileInternal(t, e, n, i, r) {
    let o = null
    const a = rr(t, e, n),
      l = this.getKey()
    if (!this.tileCache.containsKey(a)) ((o = this.createTile_(t, e, n, i, r, l)), this.tileCache.set(a, o))
    else if (((o = this.tileCache.get(a)), o.key != l)) {
      const h = o
      ;((o = this.createTile_(t, e, n, i, r, l)),
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
    const n = Kt(t)
    if (n) {
      const i = mt(n)
      i in this.tileGridForProjection || (this.tileGridForProjection[i] = e)
    }
  }
  clear() {
    super.clear()
    for (const t in this.tileCacheForProjection) this.tileCacheForProjection[t].clear()
  }
}
function $f(s, t) {
  s.getImage().src = t
}
class qf extends Kf {
  constructor(t) {
    t = t || {}
    const e = t.projection !== void 0 ? t.projection : 'EPSG:3857',
      n =
        t.tileGrid !== void 0
          ? t.tileGrid
          : jf({
              extent: jo(e),
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
const Hf =
  '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.'
class Jf extends qf {
  constructor(t) {
    t = t || {}
    let e
    t.attributions !== void 0 ? (e = t.attributions) : (e = [Hf])
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
const Qf = `<h1>ol-geom-editor</h1>
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
<blockquote>
<p>The order in which the events are triggered is as follows:</p>
</blockquote>
<pre><code class="hljs language-bash"><span class="hljs-comment"># draw geometry</span>
drawstart <span class="hljs-comment"># original event</span>
↓
drawBegin <span class="hljs-comment"># recommend, it is more convenient</span>
↓
drawend <span class="hljs-comment"># original event</span>
↓ <span class="hljs-comment"># NOTE</span>
drawComplete <span class="hljs-comment"># recommend！ You can set style when it emit</span>

<span class="hljs-comment"># modify geometry</span>
<span class="hljs-keyword">select</span>
↓
modifystart
↓
modifyBegin
↓
modifyend
↓
modifyComplete
↓ <span class="hljs-comment"># NOTE</span>
deselect <span class="hljs-comment"># click on the non feature area</span>
<span class="hljs-comment"># set style when deselect</span>

<span class="hljs-comment"># translate geometry</span>
<span class="hljs-keyword">select</span>
↓
translatestart
↓
translateBegin
↓
translateend
↓
translateComplete <span class="hljs-comment"># recommend！</span>
↓ <span class="hljs-comment"># NOTE</span>
deselect <span class="hljs-comment"># click on the non feature area</span>
<span class="hljs-comment"># set style when deselect</span>
</code></pre>
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
  tg = 'LINESTRING(106.55773424492708 26.68974989181626,106.79592190619702 26.712142565234185)',
  eg =
    'POLYGON((106.54206177148436 26.659310154932655,106.56403442773436 26.438183322888236,107.125710453125 26.488588582801427,107.07901855859373 26.6924423562391,106.54206177148436 26.659310154932655))',
  ng = {
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
    properties: { OGE_SELECTABLE: !1 },
  },
  ig = JSON.stringify({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [106.51521987473564, 26.73992541007939] },
    properties: { OGE_SELECTABLE: !1 },
    id: 'p2CQqn2lFk',
  }),
  sg = {
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
  },
  rg = {
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
class Vh extends Error {
  constructor(t) {
    const e = rg[t]
    ;(super(e), (this.code = t), (this.name = 'AssertionError'), (this.message = e))
  }
}
class Et {
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
const Zh = { PROPERTYCHANGE: 'propertychange' }
class og {
  constructor() {
    this.disposed = !1
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal())
  }
  disposeInternal() {}
}
function ag(s, t, e) {
  let n, i
  e = e || xi
  let r = 0,
    o = s.length,
    a = !1
  for (; r < o; ) ((n = r + ((o - r) >> 1)), (i = +e(s[n], t)), i < 0 ? (r = n + 1) : ((o = n), (a = !i)))
  return a ? r : ~r
}
function xi(s, t) {
  return s > t ? 1 : s < t ? -1 : 0
}
function Kh(s, t, e) {
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
function lg(s, t, e) {
  for (; t < e; ) {
    const n = s[t]
    ;((s[t] = s[e]), (s[e] = n), ++t, --e)
  }
}
function se(s, t) {
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
function Un() {
  return !0
}
function zo() {
  return !1
}
function Ci() {}
function hg(s) {
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
function Xo(s) {
  for (const t in s) delete s[t]
}
function Vn(s) {
  let t
  for (t in s) return !1
  return !t
}
class $h extends og {
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
    const r = e ? new Et(t) : t
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
      for (delete a[n]; h--; ) this.removeEventListener(n, Ci)
      delete o[n]
    }
    return l
  }
  disposeInternal() {
    this.listeners_ && Xo(this.listeners_)
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
          ? ((n[i] = Ci), ++this.pendingRemovals_[t])
          : (n.splice(i, 1), n.length === 0 && delete this.listeners_[t]))
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
function pt(s, t, e, n, i) {
  if ((n && n !== s && (e = e.bind(n)), i)) {
    const o = e
    e = function () {
      ;(s.removeEventListener(t, e), o.apply(this, arguments))
    }
  }
  const r = { target: s, type: t, listener: e }
  return (s.addEventListener(t, e), r)
}
function Ds(s, t, e, n) {
  return pt(s, t, e, n, !0)
}
function Lt(s) {
  s && s.target && (s.target.removeEventListener(s.type, s.listener), Xo(s))
}
class ji extends $h {
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
      const n = t.length,
        i = new Array(n)
      for (let r = 0; r < n; ++r) i[r] = pt(this, t[r], e)
      return i
    }
    return pt(this, t, e)
  }
  onceInternal(t, e) {
    let n
    if (Array.isArray(t)) {
      const i = t.length
      n = new Array(i)
      for (let r = 0; r < i; ++r) n[r] = Ds(this, t[r], e)
    } else n = Ds(this, t, e)
    return ((e.ol_key = n), n)
  }
  unInternal(t, e) {
    const n = e.ol_key
    if (n) ci(n)
    else if (Array.isArray(t)) for (let i = 0, r = t.length; i < r; ++i) this.removeEventListener(t[i], e)
    else this.removeEventListener(t, e)
  }
}
ji.prototype.on
ji.prototype.once
ji.prototype.un
function ci(s) {
  if (Array.isArray(s)) for (let t = 0, e = s.length; t < e; ++t) Lt(s[t])
  else Lt(s)
}
function P() {
  throw new Error('Unimplemented abstract method.')
}
let cg = 0
function $(s) {
  return s.ol_uid || (s.ol_uid = String(++cg))
}
class qa extends Et {
  constructor(t, e, n) {
    ;(super(t), (this.key = e), (this.oldValue = n))
  }
}
class we extends ji {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      $(this),
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
      this.hasListener(n) && this.dispatchEvent(new qa(n, t, e)),
      (n = Zh.PROPERTYCHANGE),
      this.hasListener(n) && this.dispatchEvent(new qa(n, t, e)))
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
const ne = { ADD: 'add', REMOVE: 'remove' },
  Ha = { LENGTH: 'length' }
class os extends Et {
  constructor(t, e, n) {
    ;(super(t), (this.element = e), (this.index = n))
  }
}
class tn extends we {
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
    return this.get(Ha.LENGTH)
  }
  insertAt(t, e) {
    if (t < 0 || t > this.getLength()) throw new Error('Index out of bounds: ' + t)
    ;(this.unique_ && this.assertUnique_(e),
      this.array_.splice(t, 0, e),
      this.updateLength_(),
      this.dispatchEvent(new os(ne.ADD, e, t)))
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
    return (this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(new os(ne.REMOVE, e, t)), e)
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
      this.dispatchEvent(new os(ne.REMOVE, i, t)),
      this.dispatchEvent(new os(ne.ADD, e, t)))
  }
  updateLength_() {
    this.set(Ha.LENGTH, this.array_.length)
  }
  assertUnique_(t, e) {
    for (let n = 0, i = this.array_.length; n < i; ++n) if (this.array_[n] === t && n !== e) throw new Vh(58)
  }
}
function tt(s, t) {
  if (!s) throw new Vh(t)
}
class yt extends we {
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
    const t = new yt(this.hasProperties() ? this.getProperties() : null)
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
    this.geometryChangeKey_ && (Lt(this.geometryChangeKey_), (this.geometryChangeKey_ = null))
    const t = this.getGeometry()
    ;(t && (this.geometryChangeKey_ = pt(t, dt.CHANGE, this.handleGeometryChange_, this)), this.changed())
  }
  setGeometry(t) {
    this.set(this.geometryName_, t)
  }
  setStyle(t) {
    ;((this.style_ = t), (this.styleFunction_ = t ? ug(t) : void 0), this.changed())
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
function ug(s) {
  if (typeof s == 'function') return s
  let t
  return (
    Array.isArray(s) ? (t = s) : (tt(typeof s.getZIndex == 'function', 41), (t = [s])),
    function () {
      return t
    }
  )
}
const ze = typeof navigator < 'u' && typeof navigator.userAgent < 'u' ? navigator.userAgent.toLowerCase() : ''
ze.includes('firefox')
const dg = ze.includes('safari') && !ze.includes('chrom')
dg && (ze.includes('version/15.4') || /cpu (os|iphone os) 15_4 like mac os x/.test(ze))
ze.includes('webkit') && ze.includes('edge')
ze.includes('macintosh')
const Wo =
    typeof WorkerGlobalScope < 'u' && typeof OffscreenCanvas < 'u' && self instanceof WorkerGlobalScope,
  fg = typeof Image < 'u' && Image.prototype.decode
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
function je() {
  return [1, 0, 0, 1, 0, 0]
}
function gg(s, t, e, n, i, r, o) {
  return ((s[0] = t), (s[1] = e), (s[2] = n), (s[3] = i), (s[4] = r), (s[5] = o), s)
}
function _g(s, t) {
  return ((s[0] = t[0]), (s[1] = t[1]), (s[2] = t[2]), (s[3] = t[3]), (s[4] = t[4]), (s[5] = t[5]), s)
}
function wt(s, t) {
  const e = t[0],
    n = t[1]
  return ((t[0] = s[0] * e + s[2] * n + s[4]), (t[1] = s[1] * e + s[3] * n + s[5]), t)
}
function mg(s, t, e) {
  return gg(s, t, 0, 0, e, 0, 0)
}
function Gi(s, t, e, n, i, r, o, a) {
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
function pg(s, t) {
  const e = yg(t)
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
function yg(s) {
  return s[0] * s[3] - s[1] * s[2]
}
let Ja
function Eg(s) {
  const t = 'matrix(' + s.join(', ') + ')'
  if (Wo) return t
  const e = Ja || (Ja = document.createElement('div'))
  return ((e.style.transform = t), e.style.transform)
}
const st = { UNKNOWN: 0, INTERSECTING: 1, ABOVE: 2, RIGHT: 4, BELOW: 8, LEFT: 16 }
function Mt(s) {
  const t = ae()
  for (let e = 0, n = s.length; e < n; ++e) Qh(t, s[e])
  return t
}
function zi(s, t, e) {
  return e
    ? ((e[0] = s[0] - t), (e[1] = s[1] - t), (e[2] = s[2] + t), (e[3] = s[3] + t), e)
    : [s[0] - t, s[1] - t, s[2] + t, s[3] + t]
}
function xg(s, t) {
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
function Cg(s, t) {
  return Yo(s, t[0], t[1])
}
function Pn(s, t) {
  return s[0] <= t[0] && t[2] <= s[2] && s[1] <= t[1] && t[3] <= s[3]
}
function Yo(s, t, e) {
  return s[0] <= t && t <= s[2] && s[1] <= e && e <= s[3]
}
function Qr(s, t) {
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
function ae() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0]
}
function nn(s, t, e, n, i) {
  return i ? ((i[0] = s), (i[1] = t), (i[2] = e), (i[3] = n), i) : [s, t, e, n]
}
function Bo(s) {
  return nn(1 / 0, 1 / 0, -1 / 0, -1 / 0, s)
}
function Rs(s, t) {
  const e = s[0],
    n = s[1]
  return nn(e, n, e, n, t)
}
function qh(s, t, e, n, i) {
  const r = Bo(i)
  return tc(r, s, t, e, n)
}
function Hh(s, t) {
  return s[0] == t[0] && s[2] == t[2] && s[1] == t[1] && s[3] == t[3]
}
function Jh(s, t) {
  return (
    t[0] < s[0] && (s[0] = t[0]),
    t[2] > s[2] && (s[2] = t[2]),
    t[1] < s[1] && (s[1] = t[1]),
    t[3] > s[3] && (s[3] = t[3]),
    s
  )
}
function Qh(s, t) {
  ;(t[0] < s[0] && (s[0] = t[0]),
    t[0] > s[2] && (s[2] = t[0]),
    t[1] < s[1] && (s[1] = t[1]),
    t[1] > s[3] && (s[3] = t[1]))
}
function tc(s, t, e, n, i) {
  for (; e < n; e += i) wg(s, t[e], t[e + 1])
  return s
}
function wg(s, t, e) {
  ;((s[0] = Math.min(s[0], t)),
    (s[1] = Math.min(s[1], e)),
    (s[2] = Math.max(s[2], t)),
    (s[3] = Math.max(s[3], e)))
}
function ec(s, t) {
  let e
  return ((e = t(nc(s))), e || ((e = t(ic(s))), e) || ((e = t(rc(s))), e) || ((e = t(sc(s))), e) ? e : !1)
}
function nc(s) {
  return [s[0], s[1]]
}
function ic(s) {
  return [s[2], s[1]]
}
function Zn(s) {
  return [(s[0] + s[2]) / 2, (s[1] + s[3]) / 2]
}
function Sg(s, t, e, n, i) {
  const [r, o, a, l, h, c, u, d] = Rg(s, t, e, n)
  return nn(Math.min(r, a, h, u), Math.min(o, l, c, d), Math.max(r, a, h, u), Math.max(o, l, c, d), i)
}
function Rg(s, t, e, n) {
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
function wi(s) {
  return s[3] - s[1]
}
function sc(s) {
  return [s[0], s[3]]
}
function rc(s) {
  return [s[2], s[3]]
}
function Gt(s) {
  return s[2] - s[0]
}
function jt(s, t) {
  return s[0] <= t[2] && s[2] >= t[0] && s[1] <= t[3] && s[3] >= t[1]
}
function oc(s) {
  return s[2] < s[0] || s[3] < s[1]
}
function Tg(s, t) {
  return t ? ((t[0] = s[0]), (t[1] = s[1]), (t[2] = s[2]), (t[3] = s[3]), t) : s
}
function vg(s, t, e) {
  let n = !1
  const i = Qr(s, t),
    r = Qr(s, e)
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
function ac(s, t) {
  const e = t.getExtent(),
    n = Zn(s)
  if (t.canWrapX() && (n[0] < e[0] || n[0] >= e[2])) {
    const i = Gt(e),
      o = Math.floor((n[0] - e[0]) / i) * i
    ;((s[0] -= o), (s[2] -= o))
  }
  return s
}
function Ig(s, t) {
  if (t.canWrapX()) {
    const e = t.getExtent()
    if (!isFinite(s[0]) || !isFinite(s[2])) return [[e[0], s[1], e[2], s[3]]]
    ac(s, t)
    const n = Gt(e)
    if (Gt(s) > n) return [[e[0], s[1], e[2], s[3]]]
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
const lc = {
  radians: 6370997 / (2 * Math.PI),
  degrees: (2 * Math.PI * 6370997) / 360,
  ft: 0.3048,
  m: 1,
  'us-ft': 1200 / 3937,
}
class hc {
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
    return this.metersPerUnit_ || lc[this.units_]
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
const Xi = 6378137,
  An = Math.PI * Xi,
  Mg = [-An, -An, An, An],
  bg = [-180, -85, 180, 85],
  as = Xi * Math.log(Math.tan(Math.PI / 2))
class xn extends hc {
  constructor(t) {
    super({
      code: t,
      units: 'm',
      extent: Mg,
      global: !0,
      worldExtent: bg,
      getPointResolution: function (e, n) {
        return e / Math.cosh(n[1] / Xi)
      },
    })
  }
}
const Qa = [
  new xn('EPSG:3857'),
  new xn('EPSG:102100'),
  new xn('EPSG:102113'),
  new xn('EPSG:900913'),
  new xn('http://www.opengis.net/def/crs/EPSG/0/3857'),
  new xn('http://www.opengis.net/gml/srs/epsg.xml#3857'),
]
function Lg(s, t, e) {
  const n = s.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = s.slice()) : (t = new Array(n))))
  for (let i = 0; i < n; i += e) {
    t[i] = (An * s[i]) / 180
    let r = Xi * Math.log(Math.tan((Math.PI * (+s[i + 1] + 90)) / 360))
    ;(r > as ? (r = as) : r < -as && (r = -as), (t[i + 1] = r))
  }
  return t
}
function Pg(s, t, e) {
  const n = s.length
  ;((e = e > 1 ? e : 2), t === void 0 && (e > 2 ? (t = s.slice()) : (t = new Array(n))))
  for (let i = 0; i < n; i += e)
    ((t[i] = (180 * s[i]) / An), (t[i + 1] = (360 * Math.atan(Math.exp(s[i + 1] / Xi))) / Math.PI - 90))
  return t
}
const Ag = 6378137,
  tl = [-180, -90, 180, 90],
  Fg = (Math.PI * Ag) / 180
class Ke extends hc {
  constructor(t, e) {
    super({
      code: t,
      units: 'degrees',
      extent: tl,
      axisOrientation: e,
      global: !0,
      metersPerUnit: Fg,
      worldExtent: tl,
    })
  }
}
const el = [
  new Ke('CRS:84'),
  new Ke('EPSG:4326', 'neu'),
  new Ke('urn:ogc:def:crs:OGC:1.3:CRS84'),
  new Ke('urn:ogc:def:crs:OGC:2:84'),
  new Ke('http://www.opengis.net/def/crs/OGC/1.3/CRS84'),
  new Ke('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
  new Ke('http://www.opengis.net/def/crs/EPSG/0/4326', 'neu'),
]
let to = {}
function Og(s) {
  return to[s] || to[s.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] || null
}
function Dg(s, t) {
  to[s] = t
}
let Xn = {}
function ks(s, t, e) {
  const n = s.getCode(),
    i = t.getCode()
  ;(n in Xn || (Xn[n] = {}), (Xn[n][i] = e))
}
function kg(s, t) {
  let e
  return (s in Xn && t in Xn[s] && (e = Xn[s][t]), e)
}
function ut(s, t, e) {
  return Math.min(Math.max(s, t), e)
}
function Ng(s, t, e, n, i, r) {
  const o = i - e,
    a = r - n
  if (o !== 0 || a !== 0) {
    const l = ((s - e) * o + (t - n) * a) / (o * o + a * a)
    l > 1 ? ((e = i), (n = r)) : l > 0 && ((e += o * l), (n += a * l))
  }
  return me(s, t, e, n)
}
function me(s, t, e, n) {
  const i = e - s,
    r = n - t
  return i * i + r * r
}
function nl(s) {
  return (s * 180) / Math.PI
}
function Wn(s) {
  return (s * Math.PI) / 180
}
function eo(s, t) {
  const e = s % t
  return e * t < 0 ? e + t : e
}
function bt(s, t, e) {
  return s + e * (t - s)
}
function cc(s, t) {
  const e = Math.pow(10, t)
  return Math.round(s * e) / e
}
function jg(s, t) {
  return ((s[0] += +t[0]), (s[1] += +t[1]), s)
}
function Gg(s, t) {
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
function Uo(s, t) {
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
function Ut(s, t) {
  let e = !0
  for (let n = s.length - 1; n >= 0; --n)
    if (s[n] != t[n]) {
      e = !1
      break
    }
  return e
}
function zg(s, t) {
  const e = Math.cos(t),
    n = Math.sin(t),
    i = s[0] * e - s[1] * n,
    r = s[1] * e + s[0] * n
  return ((s[0] = i), (s[1] = r), s)
}
function pe(s, t) {
  const e = s[0] - t[0],
    n = s[1] - t[1]
  return e * e + n * n
}
function Ns(s, t) {
  return Math.sqrt(pe(s, t))
}
function Xg(s, t) {
  return pe(s, Uo(s, t))
}
function Wg(s, t) {
  if (t.canWrapX()) {
    const e = Gt(t.getExtent()),
      n = Yg(s, t, e)
    n && (s[0] -= n * e)
  }
  return s
}
function Yg(s, t, e) {
  const n = t.getExtent()
  let i = 0
  return (
    t.canWrapX() && (s[0] < n[0] || s[0] > n[2]) && ((e = e || Gt(n)), (i = Math.floor((s[0] - n[0]) / e))),
    i
  )
}
const uc = 63710088e-1
function dc(s, t, e) {
  e = e || uc
  const n = Wn(s[1]),
    i = Wn(t[1]),
    r = (i - n) / 2,
    o = Wn(t[0] - s[0]) / 2,
    a = Math.sin(r) * Math.sin(r) + Math.sin(o) * Math.sin(o) * Math.cos(n) * Math.cos(i)
  return 2 * e * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
function Bg(s, t, e, n) {
  n = n || uc
  const i = Wn(s[1]),
    r = Wn(s[0]),
    o = t / n,
    a = Math.asin(Math.sin(i) * Math.cos(o) + Math.cos(i) * Math.sin(o) * Math.cos(e)),
    l = r + Math.atan2(Math.sin(e) * Math.sin(o) * Math.cos(i), Math.cos(o) - Math.sin(i) * Math.sin(a))
  return [nl(l), nl(a)]
}
function Ug(...s) {
  console.warn(...s)
}
let no = !0
function fc(s) {
  no = !1
}
function Vo(s, t) {
  if (t !== void 0) {
    for (let e = 0, n = s.length; e < n; ++e) t[e] = s[e]
    t = t
  } else t = s.slice()
  return t
}
function Vg(s, t) {
  if (t !== void 0 && s !== t) {
    for (let e = 0, n = s.length; e < n; ++e) t[e] = s[e]
    s = t
  }
  return s
}
function Zg(s) {
  ;(Dg(s.getCode(), s), ks(s, s, Vo))
}
function Kg(s) {
  s.forEach(Zg)
}
function Rt(s) {
  return typeof s == 'string' ? Og(s) : s || null
}
function il(s) {
  ;(Kg(s),
    s.forEach(function (t) {
      s.forEach(function (e) {
        t !== e && ks(t, e, Vo)
      })
    }))
}
function $g(s, t, e, n) {
  s.forEach(function (i) {
    t.forEach(function (r) {
      ;(ks(i, r, e), ks(r, i, n))
    })
  })
}
function Zo(s, t) {
  return s ? (typeof s == 'string' ? Rt(s) : s) : Rt(t)
}
function ri(s, t) {
  return (fc(), Ht(s, 'EPSG:4326', 'EPSG:3857'))
}
function qg(s, t) {
  if (s === t) return !0
  const e = s.getUnits() === t.getUnits()
  return (s.getCode() === t.getCode() || gc(s, t) === Vo) && e
}
function gc(s, t) {
  const e = s.getCode(),
    n = t.getCode()
  let i = kg(e, n)
  return (i || (i = Vg), i)
}
function io(s, t) {
  const e = Rt(s),
    n = Rt(t)
  return gc(e, n)
}
function Ht(s, t, e) {
  return io(t, e)(s, void 0, s.length)
}
function Kn(s, t) {
  return s
}
function H(s, t) {
  return (
    no &&
      !Ut(s, [0, 0]) &&
      s[0] >= -180 &&
      s[0] <= 180 &&
      s[1] >= -90 &&
      s[1] <= 90 &&
      ((no = !1),
      Ug('Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.')),
    s
  )
}
function or(s, t) {
  return s
}
function Fn(s, t) {
  return s
}
function Hg() {
  ;(il(Qa), il(el), $g(el, Qa, Lg, Pg))
}
Hg()
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
function Ko(s, t, e, n, i, r, o) {
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
function Jg(s, t, e, n, i, r, o, a) {
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
function Qg(s, t, e, n, i, r, o) {
  o = o || []
  let a = 0
  for (let l = t; l < e; l += n) {
    ;((o[a++] = s[l] + i), (o[a++] = s[l + 1] + r))
    for (let h = l + 2; h < l + n; ++h) o[a++] = s[h]
  }
  return (o && o.length != a && (o.length = a), o)
}
const sl = je()
class _c extends we {
  constructor() {
    ;(super(),
      (this.extent_ = ae()),
      (this.extentRevision_ = -1),
      (this.simplifiedGeometryMaxMinSquaredTolerance = 0),
      (this.simplifiedGeometryRevision = 0),
      (this.simplifyTransformedInternal = hg(function (t, e, n) {
        if (!n) return this.getSimplifiedGeometry(e)
        const i = this.clone()
        return (i.applyTransform(n), i.getSimplifiedGeometry(e))
      })))
  }
  simplifyTransformed(t, e) {
    return this.simplifyTransformedInternal(this.getRevision(), t, e)
  }
  clone() {
    return P()
  }
  closestPointXY(t, e, n, i) {
    return P()
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
    return P()
  }
  getExtent(t) {
    if (this.extentRevision_ != this.getRevision()) {
      const e = this.computeExtent(this.extent_)
      ;((isNaN(e[0]) || isNaN(e[1])) && Bo(e), (this.extentRevision_ = this.getRevision()))
    }
    return Tg(this.extent_, t)
  }
  rotate(t, e) {
    P()
  }
  scale(t, e, n) {
    P()
  }
  simplify(t) {
    return this.getSimplifiedGeometry(t * t)
  }
  getSimplifiedGeometry(t) {
    return P()
  }
  getType() {
    return P()
  }
  applyTransform(t) {
    P()
  }
  intersectsExtent(t) {
    return P()
  }
  translate(t, e) {
    P()
  }
  transform(t, e) {
    const n = Rt(t),
      i =
        n.getUnits() == 'tile-pixels'
          ? function (r, o, a) {
              const l = n.getExtent(),
                h = n.getWorldExtent(),
                c = wi(h) / wi(l)
              return (Gi(sl, h[0], h[3], c, -c, 0, 0, 0), en(r, 0, r.length, a, sl, o), io(n, e)(r, o, a))
            }
          : io(n, e)
    return (this.applyTransform(i), this)
  }
}
class Be extends _c {
  constructor() {
    ;(super(), (this.layout = 'XY'), (this.stride = 2), (this.flatCoordinates = null))
  }
  computeExtent(t) {
    return qh(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
  }
  getCoordinates() {
    return P()
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
    ;((this.stride = js(t)), (this.layout = t), (this.flatCoordinates = e))
  }
  setCoordinates(t, e) {
    P()
  }
  setLayout(t, e, n) {
    let i
    if (t) i = js(t)
    else {
      for (let r = 0; r < n; ++r) {
        if (e.length === 0) {
          ;((this.layout = 'XY'), (this.stride = 2))
          return
        }
        e = e[0]
      }
      ;((i = e.length), (t = t_(i)))
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
      ;(Ko(n, 0, n.length, i, t, e, n), this.changed())
    }
  }
  scale(t, e, n) {
    ;(e === void 0 && (e = t), n || (n = Zn(this.getExtent())))
    const i = this.getFlatCoordinates()
    if (i) {
      const r = this.getStride()
      ;(Jg(i, 0, i.length, r, t, e, n, i), this.changed())
    }
  }
  translate(t, e) {
    const n = this.getFlatCoordinates()
    if (n) {
      const i = this.getStride()
      ;(Qg(n, 0, n.length, i, t, e, n), this.changed())
    }
  }
}
function t_(s) {
  let t
  return (s == 2 ? (t = 'XY') : s == 3 ? (t = 'XYZ') : s == 4 && (t = 'XYZM'), t)
}
function js(s) {
  let t
  return (s == 'XY' ? (t = 2) : s == 'XYZ' || s == 'XYM' ? (t = 3) : s == 'XYZM' && (t = 4), t)
}
function e_(s, t, e) {
  const n = s.getFlatCoordinates()
  if (!n) return null
  const i = s.getStride()
  return en(n, 0, n.length, i, t, e)
}
function rl(s, t, e, n, i, r, o) {
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
      for (let f = 0; f < n; ++f) o[f] = bt(s[t + f], s[e + f], d)
      o.length = n
      return
    } else u = t
  }
  for (let d = 0; d < n; ++d) o[d] = s[u + d]
  o.length = n
}
function $o(s, t, e, n, i) {
  let r = s[t],
    o = s[t + 1]
  for (t += n; t < e; t += n) {
    const a = s[t],
      l = s[t + 1],
      h = me(r, o, a, l)
    ;(h > i && (i = h), (r = a), (o = l))
  }
  return i
}
function qo(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((i = $o(s, t, a, n, i)), (t = a))
  }
  return i
}
function n_(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((i = qo(s, t, a, n, i)), (t = a[a.length - 1]))
  }
  return i
}
function Ho(s, t, e, n, i, r, o, a, l, h, c) {
  if (t == e) return h
  let u, d
  if (i === 0) {
    if (((d = me(o, a, s[t], s[t + 1])), d < h)) {
      for (u = 0; u < n; ++u) l[u] = s[t + u]
      return ((l.length = n), d)
    }
    return h
  }
  c = c || [NaN, NaN]
  let f = t + n
  for (; f < e; )
    if ((rl(s, f - n, f, n, o, a, c), (d = me(o, a, c[0], c[1])), d < h)) {
      for (h = d, u = 0; u < n; ++u) l[u] = c[u]
      ;((l.length = n), (f += n))
    } else f += n * Math.max(((Math.sqrt(d) - Math.sqrt(h)) / i) | 0, 1)
  if (r && (rl(s, e - n, t, n, o, a, c), (d = me(o, a, c[0], c[1])), d < h)) {
    for (h = d, u = 0; u < n; ++u) l[u] = c[u]
    l.length = n
  }
  return h
}
function Jo(s, t, e, n, i, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = Ho(s, t, f, n, i, r, o, a, l, h, c)), (t = f))
  }
  return h
}
function i_(s, t, e, n, i, r, o, a, l, h, c) {
  c = c || [NaN, NaN]
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u]
    ;((h = Jo(s, t, f, n, i, r, o, a, l, h, c)), (t = f[f.length - 1]))
  }
  return h
}
function mc(s, t, e, n) {
  for (let i = 0, r = e.length; i < r; ++i) s[t++] = e[i]
  return t
}
function ar(s, t, e, n) {
  for (let i = 0, r = e.length; i < r; ++i) {
    const o = e[i]
    for (let a = 0; a < n; ++a) s[t++] = o[a]
  }
  return t
}
function Qo(s, t, e, n, i) {
  i = i || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = ar(s, t, e[o], n)
    ;((i[r++] = l), (t = l))
  }
  return ((i.length = r), i)
}
function s_(s, t, e, n, i) {
  i = i || []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = Qo(s, t, e[o], n, i[r])
    ;(l.length === 0 && (l[0] = t), (i[r++] = l), (t = l[l.length - 1]))
  }
  return ((i.length = r), i)
}
function ta(s, t, e, n, i, r, o) {
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
      const E = s[y],
        x = s[y + 1],
        C = Ng(E, x, g, _, m, p)
      C > f && ((c = y), (f = C))
    }
    f > i && ((l[(c - t) / n] = 1), d + n < c && h.push(d, c), c + n < u && h.push(c, u))
  }
  for (let u = 0; u < a; ++u) l[u] && ((r[o++] = s[t + u * n]), (r[o++] = s[t + u * n + 1]))
  return o
}
function r_(s, t, e, n, i, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = ta(s, t, c, n, i, r, o)), a.push(o), (t = c))
  }
  return o
}
function $e(s, t) {
  return t * Math.round(s / t)
}
function o_(s, t, e, n, i, r, o) {
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
function pc(s, t, e, n, i, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    ;((o = o_(s, t, c, n, i, r, o)), a.push(o), (t = c))
  }
  return o
}
function a_(s, t, e, n, i, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l],
      u = []
    ;((o = pc(s, t, c, n, i, r, o, u)), a.push(u), (t = c[c.length - 1]))
  }
  return o
}
function De(s, t, e, n, i) {
  i = i !== void 0 ? i : []
  let r = 0
  for (let o = t; o < e; o += n) i[r++] = s.slice(o, o + n)
  return ((i.length = r), i)
}
function Si(s, t, e, n, i) {
  i = i !== void 0 ? i : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((i[r++] = De(s, t, l, n, i[r])), (t = l))
  }
  return ((i.length = r), i)
}
function so(s, t, e, n, i) {
  i = i !== void 0 ? i : []
  let r = 0
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((i[r++] = l.length === 1 && l[0] === t ? [] : Si(s, t, l, n, i[r])), (t = l[l.length - 1]))
  }
  return ((i.length = r), i)
}
function yc(s, t, e, n) {
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
function Ec(s, t, e, n) {
  let i = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((i += yc(s, t, a, n)), (t = a))
  }
  return i
}
function l_(s, t, e, n) {
  let i = 0
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    ;((i += Ec(s, t, a, n)), (t = a[a.length - 1]))
  }
  return i
}
class Ri extends Be {
  constructor(t, e) {
    ;(super(),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
  }
  clone() {
    return new Ri(this.flatCoordinates.slice(), this.layout)
  }
  closestPointXY(t, e, n, i) {
    return i < hn(this.getExtent(), t, e)
      ? i
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            $o(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Ho(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !0, t, e, n, i))
  }
  getArea() {
    return yc(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getCoordinates() {
    return De(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getSimplifiedGeometryInternal(t) {
    const e = []
    return (
      (e.length = ta(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0)),
      new Ri(e, 'XY')
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
      (this.flatCoordinates.length = ar(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
class zt extends Be {
  constructor(t, e) {
    ;(super(), this.setCoordinates(t, e))
  }
  clone() {
    const t = new zt(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, i) {
    const r = this.flatCoordinates,
      o = me(t, e, r[0], r[1])
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
    return Rs(this.flatCoordinates, t)
  }
  getType() {
    return 'Point'
  }
  intersectsExtent(t) {
    return Yo(t, this.flatCoordinates[0], this.flatCoordinates[1])
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 0),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = mc(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
function h_(s, t, e, n, i) {
  return !ec(i, function (o) {
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
function ea(s, t, e, n, i, r) {
  if (e.length === 0 || !He(s, t, e[0], n, i, r)) return !1
  for (let o = 1, a = e.length; o < a; ++o) if (He(s, e[o - 1], e[o], n, i, r)) return !1
  return !0
}
function c_(s, t, e, n, i, r) {
  if (e.length === 0) return !1
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    if (ea(s, t, l, n, i, r)) return !0
    t = l[l.length - 1]
  }
  return !1
}
function xc(s, t, e, n, i, r, o) {
  let a, l, h, c, u, d, f
  const g = i[r + 1],
    _ = []
  for (let y = 0, E = e.length; y < E; ++y) {
    const x = e[y]
    for (c = s[x - n], d = s[x - n + 1], a = t; a < x; a += n)
      ((u = s[a]),
        (f = s[a + 1]),
        ((g <= d && f <= g) || (d <= g && g <= f)) && ((h = ((g - d) / (f - d)) * (u - c) + c), _.push(h)),
        (c = u),
        (d = f))
  }
  let m = NaN,
    p = -1 / 0
  for (_.sort(xi), c = _[0], a = 1, l = _.length; a < l; ++a) {
    u = _[a]
    const y = Math.abs(u - c)
    ;(y > p && ((h = (c + u) / 2), ea(s, t, e, n, h, g) && ((m = h), (p = y))), (c = u))
  }
  return (isNaN(m) && (m = i[r]), o ? (o.push(m, g, p), o) : [m, g, p])
}
function u_(s, t, e, n, i) {
  let r = []
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((r = xc(s, t, l, n, i, 2 * o, r)), (t = l[l.length - 1]))
  }
  return r
}
function Cc(s, t, e, n, i) {
  let r
  for (t += n; t < e; t += n) if (((r = i(s.slice(t - n, t), s.slice(t, t + n))), r)) return r
  return !1
}
function lr(s, t, e, n, i) {
  const r = tc(ae(), s, t, e, n)
  return jt(i, r)
    ? Pn(i, r) || (r[0] >= i[0] && r[2] <= i[2]) || (r[1] >= i[1] && r[3] <= i[3])
      ? !0
      : Cc(s, t, e, n, function (o, a) {
          return vg(i, o, a)
        })
    : !1
}
function d_(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) {
    if (lr(s, t, e[r], n, i)) return !0
    t = e[r]
  }
  return !1
}
function f_(s, t, e, n, i) {
  return !!(
    lr(s, t, e, n, i) ||
    He(s, t, e, n, i[0], i[1]) ||
    He(s, t, e, n, i[0], i[3]) ||
    He(s, t, e, n, i[2], i[1]) ||
    He(s, t, e, n, i[2], i[3])
  )
}
function wc(s, t, e, n, i) {
  if (!f_(s, t, e[0], n, i)) return !1
  if (e.length === 1) return !0
  for (let r = 1, o = e.length; r < o; ++r)
    if (h_(s, e[r - 1], e[r], n, i) && !lr(s, e[r - 1], e[r], n, i)) return !1
  return !0
}
function g_(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    if (wc(s, t, a, n, i)) return !0
    t = a[a.length - 1]
  }
  return !1
}
function __(s, t, e, n) {
  for (; t < e - n; ) {
    for (let i = 0; i < n; ++i) {
      const r = s[t + i]
      ;((s[t + i] = s[e - n + i]), (s[e - n + i] = r))
    }
    ;((t += n), (e -= n))
  }
}
function Sc(s, t, e, n) {
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
function Rc(s, t, e, n, i) {
  i = i !== void 0 ? i : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = Sc(s, t, a, n)
    if (r === 0) {
      if ((i && l) || (!i && !l)) return !1
    } else if ((i && !l) || (!i && l)) return !1
    t = a
  }
  return !0
}
function m_(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r]
    if (!Rc(s, t, a, n, i)) return !1
    a.length && (t = a[a.length - 1])
  }
  return !0
}
function ro(s, t, e, n, i) {
  i = i !== void 0 ? i : !1
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r],
      l = Sc(s, t, a, n)
    ;((r === 0 ? (i && l) || (!i && !l) : (i && !l) || (!i && l)) && __(s, t, a, n), (t = a))
  }
  return t
}
function ol(s, t, e, n, i) {
  for (let r = 0, o = e.length; r < o; ++r) t = ro(s, t, e[r], n, i)
  return t
}
class Xt extends Be {
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
      ? se(this.flatCoordinates, t.getFlatCoordinates())
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
          ((this.maxDelta_ = Math.sqrt(qo(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Jo(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, n, i))
  }
  containsXY(t, e) {
    return ea(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, e)
  }
  getArea() {
    return Ec(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride)
  }
  getCoordinates(t) {
    let e
    return (
      t !== void 0
        ? ((e = this.getOrientedFlatCoordinates().slice()), ro(e, 0, this.ends_, this.stride, t))
        : (e = this.flatCoordinates),
      Si(e, 0, this.ends_, this.stride)
    )
  }
  getEnds() {
    return this.ends_
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const t = Zn(this.getExtent())
      ;((this.flatInteriorPoint_ = xc(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, 0)),
        (this.flatInteriorPointRevision_ = this.getRevision()))
    }
    return this.flatInteriorPoint_
  }
  getInteriorPoint() {
    return new zt(this.getFlatInteriorPoint(), 'XYM')
  }
  getLinearRingCount() {
    return this.ends_.length
  }
  getLinearRing(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new Ri(this.flatCoordinates.slice(t === 0 ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout)
  }
  getLinearRings() {
    const t = this.layout,
      e = this.flatCoordinates,
      n = this.ends_,
      i = []
    let r = 0
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = n[o],
        h = new Ri(e.slice(r, l), t)
      ;(i.push(h), (r = l))
    }
    return i
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates
      ;(Rc(t, 0, this.ends_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = ro(
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
      (e.length = pc(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t), e, 0, n)),
      new Xt(e, 'XY', n)
    )
  }
  getType() {
    return 'Polygon'
  }
  intersectsExtent(t) {
    return wc(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []))
    const n = Qo(this.flatCoordinates, 0, t, this.stride, this.ends_)
    ;((this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1]), this.changed())
  }
}
function p_(s, t, e, n) {
  e = e || 32
  const i = []
  for (let r = 0; r < e; ++r) se(i, Bg(s, t, (2 * Math.PI * r) / e, n))
  return (i.push(i[0], i[1]), new Xt(i, 'XY', [i.length]))
}
function al(s) {
  if (oc(s)) throw new Error('Cannot create polygon from empty extent')
  const t = s[0],
    e = s[1],
    n = s[2],
    i = s[3],
    r = [t, e, t, i, n, i, n, e, t, e]
  return new Xt(r, 'XY', [r.length])
}
function y_(s, t, e) {
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
  return (E_(h, r, s.getRadius()), h)
}
function E_(s, t, e, n) {
  const i = s.getFlatCoordinates(),
    r = s.getStride(),
    o = i.length / r - 1,
    a = 0
  for (let l = 0; l <= o; ++l) {
    const h = l * r,
      c = a + (eo(l, o) * 2 * Math.PI) / o
    ;((i[h] = t[0] + e * Math.cos(c)), (i[h + 1] = t[1] + e * Math.sin(c)))
  }
  s.changed()
}
const Ti = { PRERENDER: 'prerender', POSTRENDER: 'postrender', PRECOMPOSE: 'precompose' }
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
function Tc(s, t, e, n, i, r, o) {
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
      _ = ag(f, g)
    _ < 0 ? ((l = (g - f[-_ - 2]) / (f[-_ - 1] - f[-_ - 2])), (a = t + (-_ - 2) * n)) : (a = t + _ * n)
  }
  ;((o = o > 1 ? o : 2), (r = r || new Array(o)))
  for (let c = 0; c < o; ++c)
    r[c] = a === void 0 ? NaN : l === void 0 ? s[a + c] : bt(s[a + c], s[a + n + c], l)
  return r
}
function oo(s, t, e, n, i, r) {
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
  for (let d = 0; d < n - 1; ++d) o.push(bt(s[(a - 1) * n + d], s[a * n + d], u))
  return (o.push(i), o)
}
function x_(s, t, e, n, i, r, o) {
  if (o) return oo(s, t, e[e.length - 1], n, i, r)
  let a
  if (i < s[n - 1]) return r ? ((a = s.slice(0, n)), (a[n - 1] = i), a) : null
  if (s[s.length - 1] < i) return r ? ((a = s.slice(s.length - n)), (a[n - 1] = i), a) : null
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l]
    if (t != c) {
      if (i < s[t + n - 1]) return null
      if (i <= s[c - 1]) return oo(s, t, c, n, i, !1)
      t = c
    }
  }
  return null
}
function vc(s, t, e, n) {
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
class Zt extends Be {
  constructor(t, e) {
    ;(super(),
      (this.flatMidpoint_ = null),
      (this.flatMidpointRevision_ = -1),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
  }
  appendCoordinate(t) {
    ;(this.flatCoordinates ? se(this.flatCoordinates, t) : (this.flatCoordinates = t.slice()), this.changed())
  }
  clone() {
    const t = new Zt(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, i) {
    return i < hn(this.getExtent(), t, e)
      ? i
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            $o(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Ho(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !1, t, e, n, i))
  }
  forEachSegment(t) {
    return Cc(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
  }
  getCoordinateAtM(t, e) {
    return this.layout != 'XYM' && this.layout != 'XYZM'
      ? null
      : ((e = e !== void 0 ? e : !1),
        oo(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e))
  }
  getCoordinates() {
    return De(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getCoordinateAt(t, e) {
    return Tc(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, this.stride)
  }
  getLength() {
    return vc(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
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
      (e.length = ta(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0)),
      new Zt(e, 'XY')
    )
  }
  getType() {
    return 'LineString'
  }
  intersectsExtent(t) {
    return lr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = ar(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
class ye {
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
    return new ye({
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
function Gs(s, t) {
  return Array.isArray(s) ? s : (t === void 0 ? (t = [s, s]) : ((t[0] = s), (t[1] = s)), t)
}
class hr {
  constructor(t) {
    ;((this.opacity_ = t.opacity),
      (this.rotateWithView_ = t.rotateWithView),
      (this.rotation_ = t.rotation),
      (this.scale_ = t.scale),
      (this.scaleArray_ = Gs(t.scale)),
      (this.displacement_ = t.displacement),
      (this.declutterMode_ = t.declutterMode))
  }
  clone() {
    const t = this.getScale()
    return new hr({
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
    return P()
  }
  getImage(t) {
    return P()
  }
  getHitDetectionImage() {
    return P()
  }
  getPixelRatio(t) {
    return 1
  }
  getImageState() {
    return P()
  }
  getImageSize() {
    return P()
  }
  getOrigin() {
    return P()
  }
  getSize() {
    return P()
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
    ;((this.scale_ = t), (this.scaleArray_ = Gs(t)))
  }
  listenImageChange(t) {
    P()
  }
  load() {
    P()
  }
  unlistenImageChange(t) {
    P()
  }
}
const C_ = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,
  w_ = /^([a-z]*)$|^hsla?\(.*\)$/i
function Ic(s) {
  return typeof s == 'string' ? s : Mc(s)
}
function S_(s) {
  const t = document.createElement('div')
  if (((t.style.color = s), t.style.color !== '')) {
    document.body.appendChild(t)
    const e = getComputedStyle(t).color
    return (document.body.removeChild(t), e)
  }
  return ''
}
const R_ = (function () {
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
      ;((i = T_(n)), (t[n] = i), ++e)
    }
    return i
  }
})()
function zs(s) {
  return Array.isArray(s) ? s : R_(s)
}
function T_(s) {
  let t, e, n, i, r
  if ((w_.exec(s) && (s = S_(s)), C_.exec(s))) {
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
      ? ((r = s.slice(5, -1).split(',').map(Number)), ll(r))
      : s.startsWith('rgb(')
        ? ((r = s.slice(4, -1).split(',').map(Number)), r.push(1), ll(r))
        : tt(!1, 14)
  return r
}
function ll(s) {
  return (
    (s[0] = ut((s[0] + 0.5) | 0, 0, 255)),
    (s[1] = ut((s[1] + 0.5) | 0, 0, 255)),
    (s[2] = ut((s[2] + 0.5) | 0, 0, 255)),
    (s[3] = ut(s[3], 0, 1)),
    s
  )
}
function Mc(s) {
  let t = s[0]
  t != (t | 0) && (t = (t + 0.5) | 0)
  let e = s[1]
  e != (e | 0) && (e = (e + 0.5) | 0)
  let n = s[2]
  n != (n | 0) && (n = (n + 0.5) | 0)
  const i = s[3] === void 0 ? 1 : Math.round(s[3] * 100) / 100
  return 'rgba(' + t + ',' + e + ',' + n + ',' + i + ')'
}
function ie(s) {
  return Array.isArray(s) ? Mc(s) : s
}
function $t(s, t, e, n) {
  let i
  return (
    e && e.length
      ? (i = e.shift())
      : Wo
        ? (i = new OffscreenCanvas(s || 300, t || 300))
        : (i = document.createElement('canvas')),
    s && (i.width = s),
    t && (i.height = t),
    i.getContext('2d', n)
  )
}
function v_(s) {
  const t = s.canvas
  ;((t.width = 1), (t.height = 1), s.clearRect(0, 0, 1, 1))
}
const I_ = new RegExp(
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
  hl = ['style', 'variant', 'weight', 'size', 'lineHeight', 'family'],
  bc = function (s) {
    const t = s.match(I_)
    if (!t) return null
    const e = { lineHeight: 'normal', size: '1.2em', style: 'normal', weight: 'normal', variant: 'normal' }
    for (let n = 0, i = hl.length; n < i; ++n) {
      const r = t[n + 1]
      r !== void 0 && (e[hl[n]] = r)
    }
    return ((e.families = e.family.split(/,\s?/)), e)
  },
  Lc = '10px sans-serif',
  St = '#000',
  Xs = 'round',
  Ee = [],
  xe = 0,
  $n = 'round',
  vi = 10,
  Ii = '#000',
  Mi = 'center',
  Ws = 'middle',
  Je = [0, 0, 0, 0],
  bi = 1,
  Me = new we()
let vn = null,
  ao
const lo = {},
  M_ = (function () {
    const t = '32px ',
      e = ['monospace', 'serif'],
      n = e.length,
      i = 'wmytzilWMYTZIL@#/&?$%10'
    let r, o
    function a(h, c, u) {
      let d = !0
      for (let f = 0; f < n; ++f) {
        const g = e[f]
        if (((o = Ys(h + ' ' + c + ' ' + t + g, i)), u != g)) {
          const _ = Ys(h + ' ' + c + ' ' + t + u + ',' + g, i)
          d = d && _ != o
        }
      }
      return !!d
    }
    function l() {
      let h = !0
      const c = Me.getKeys()
      for (let u = 0, d = c.length; u < d; ++u) {
        const f = c[u]
        Me.get(f) < 100 &&
          (a.apply(
            this,
            f.split(`
`),
          )
            ? (Xo(lo), (vn = null), (ao = void 0), Me.set(f, 100))
            : (Me.set(f, Me.get(f) + 1, !0), (h = !1)))
      }
      h && (clearInterval(r), (r = void 0))
    }
    return function (h) {
      const c = bc(h)
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
        Me.get(_) === void 0 &&
          (Me.set(_, 100, !0),
          a(c.style, c.weight, g) || (Me.set(_, 0, !0), r === void 0 && (r = setInterval(l, 32))))
      }
    }
  })(),
  b_ = (function () {
    let s
    return function (t) {
      let e = lo[t]
      if (e == null) {
        if (Wo) {
          const n = bc(t),
            i = Pc(t, 'Žg')
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
        lo[t] = e
      }
      return e
    }
  })()
function Pc(s, t) {
  return (vn || (vn = $t(1, 1)), s != ao && ((vn.font = s), (ao = vn.font)), vn.measureText(t))
}
function Ys(s, t) {
  return Pc(s, t).width
}
function cl(s, t, e) {
  if (t in e) return e[t]
  const n = t
    .split(
      `
`,
    )
    .reduce((i, r) => Math.max(i, Ys(s, r)), 0)
  return ((e[t] = n), n)
}
function L_(s, t) {
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
      f = Ys(d, u)
    ;(e.push(f), (o += f))
    const g = b_(d)
    ;(n.push(g), (l = Math.max(l, g)))
  }
  return { width: r, height: a, widths: e, heights: n, lineWidths: i }
}
function P_(s, t, e, n, i, r, o, a, l, h, c) {
  ;(s.save(),
    e !== 1 && (s.globalAlpha *= e),
    t && s.setTransform.apply(s, t),
    n.contextInstructions
      ? (s.translate(l, h), s.scale(c[0], c[1]), A_(n, s))
      : c[0] < 0 || c[1] < 0
        ? (s.translate(l, h), s.scale(c[0], c[1]), s.drawImage(n, i, r, o, a, 0, 0, o, a))
        : s.drawImage(n, i, r, o, a, l, h, o * c[0], a * c[1]),
    s.restore())
}
function A_(s, t) {
  const e = s.contextInstructions
  for (let n = 0, i = e.length; n < i; n += 2)
    Array.isArray(e[n + 1]) ? t[e[n]].apply(t, e[n + 1]) : (t[e[n]] = e[n + 1])
}
class cr extends hr {
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
      e = new cr({
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
        i = $t(n.size * t, n.size * t)
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
      const S = i
      ;((i = r), (r = S))
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
      E = r - y,
      C = Math.sqrt(p * p + E * E) / p
    if (C <= n) {
      const S = (C * e) / 2 - r - i
      return 2 * Math.max(m, S)
    }
    return m * 2
  }
  createRenderOptions() {
    let t = $n,
      e = 0,
      n = null,
      i = 0,
      r,
      o = 0
    this.stroke_ &&
      ((r = this.stroke_.getColor()),
      r === null && (r = Ii),
      (r = ie(r)),
      (o = this.stroke_.getWidth()),
      o === void 0 && (o = bi),
      (n = this.stroke_.getLineDash()),
      (i = this.stroke_.getLineDashOffset()),
      (t = this.stroke_.getLineJoin()),
      t === void 0 && (t = $n),
      (e = this.stroke_.getMiterLimit()),
      e === void 0 && (e = vi))
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
      ;(i === null && (i = St), (e.fillStyle = ie(i)), e.fill())
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
        (typeof e == 'string' && (e = zs(e)),
        e === null ? (n = 1) : Array.isArray(e) && (n = e.length === 4 ? e[3] : 1),
        n === 0)
      ) {
        const i = $t(t.size, t.size)
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
      (e.fillStyle = St),
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
class Jn extends cr {
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
      e = new Jn({
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
      (this.geometryFunction_ = ul),
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
          : (this.geometryFunction_ = ul),
      (this.geometry_ = t))
  }
  setZIndex(t) {
    this.zIndex_ = t
  }
}
function F_(s) {
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
let Tr = null
function O_(s, t) {
  if (!Tr) {
    const e = new Xe({ color: 'rgba(255,255,255,0.4)' }),
      n = new ye({ color: '#3399CC', width: 1.25 })
    Tr = [new Vt({ image: new Jn({ fill: e, stroke: n, radius: 5 }), fill: e, stroke: n })]
  }
  return Tr
}
function Ac() {
  const s = {},
    t = [255, 255, 255, 1],
    e = [0, 153, 255, 1],
    n = 3
  return (
    (s.Polygon = [new Vt({ fill: new Xe({ color: [255, 255, 255, 0.5] }) })]),
    (s.MultiPolygon = s.Polygon),
    (s.LineString = [
      new Vt({ stroke: new ye({ color: t, width: n + 2 }) }),
      new Vt({ stroke: new ye({ color: e, width: n }) }),
    ]),
    (s.MultiLineString = s.LineString),
    (s.Circle = s.Polygon.concat(s.LineString)),
    (s.Point = [
      new Vt({
        image: new Jn({
          radius: n * 2,
          fill: new Xe({ color: e }),
          stroke: new ye({ color: t, width: n / 2 }),
        }),
        zIndex: 1 / 0,
      }),
    ]),
    (s.MultiPoint = s.Point),
    (s.GeometryCollection = s.Polygon.concat(s.LineString, s.Point)),
    s
  )
}
function ul(s) {
  return s.getGeometry()
}
const D_ = '#333'
class na {
  constructor(t) {
    ;((t = t || {}),
      (this.font_ = t.font),
      (this.rotation_ = t.rotation),
      (this.rotateWithView_ = t.rotateWithView),
      (this.scale_ = t.scale),
      (this.scaleArray_ = Gs(t.scale !== void 0 ? t.scale : 1)),
      (this.text_ = t.text),
      (this.textAlign_ = t.textAlign),
      (this.justify_ = t.justify),
      (this.repeat_ = t.repeat),
      (this.textBaseline_ = t.textBaseline),
      (this.fill_ = t.fill !== void 0 ? t.fill : new Xe({ color: D_ })),
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
    return new na({
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
    ;((this.scale_ = t), (this.scaleArray_ = Gs(t !== void 0 ? t : 1)))
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
class k_ extends we {
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
      (e.opacity = ut(Math.round(this.getOpacity() * 100) / 100, 0, 1)),
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
    return P()
  }
  getLayerStatesArray(t) {
    return P()
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
    return P()
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
  N_ = 256
function dl(s, t, e) {
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
    let m = ut(n[0], d, f),
      p = ut(n[1], g, _)
    if (o && e && i) {
      const y = 30 * i
      ;((m += -y * Math.log(1 + Math.max(0, d - n[0]) / y) + y * Math.log(1 + Math.max(0, n[0] - f) / y)),
        (p += -y * Math.log(1 + Math.max(0, g - n[1]) / y) + y * Math.log(1 + Math.max(0, n[1] - _) / y)))
    }
    return [m, p]
  }
}
function j_(s) {
  return s
}
function ia(s, t, e, n) {
  const i = Gt(t) / e[0],
    r = wi(t) / e[1]
  return n ? Math.min(s, Math.max(i, r)) : Math.min(s, Math.min(i, r))
}
function sa(s, t, e) {
  let n = Math.min(s, t)
  const i = 50
  return (
    (n *= Math.log(1 + i * Math.max(0, s / t - 1)) / i + 1),
    e && ((n = Math.max(n, e)), (n /= Math.log(1 + i * Math.max(0, e / s - 1)) / i + 1)),
    ut(n, e / 2, t * 2)
  )
}
function G_(s, t, e, n) {
  return (
    (t = t !== void 0 ? t : !0),
    function (i, r, o, a) {
      if (i !== void 0) {
        const l = s[0],
          h = s[s.length - 1],
          c = e ? ia(l, e, o, n) : l
        if (a) return t ? sa(i, c, h) : ut(i, h, c)
        const u = Math.min(c, i),
          d = Math.floor(Kh(s, u, r))
        return s[d] > c && d < s.length - 1 ? s[d + 1] : s[d]
      }
    }
  )
}
function z_(s, t, e, n, i, r) {
  return (
    (n = n !== void 0 ? n : !0),
    (e = e !== void 0 ? e : 0),
    function (o, a, l, h) {
      if (o !== void 0) {
        const c = i ? ia(t, i, l, r) : t
        if (h) return n ? sa(o, c, e) : ut(o, e, c)
        const u = 1e-9,
          d = Math.ceil(Math.log(t / c) / Math.log(s) - u),
          f = -a * (0.5 - u) + 0.5,
          g = Math.min(c, o),
          _ = Math.floor(Math.log(t / g) / Math.log(s) + f),
          m = Math.max(d, _),
          p = t / Math.pow(s, m)
        return ut(p, e, c)
      }
    }
  )
}
function fl(s, t, e, n, i) {
  return (
    (e = e !== void 0 ? e : !0),
    function (r, o, a, l) {
      if (r !== void 0) {
        const h = n ? ia(s, n, a, i) : s
        return !e || !l ? ut(r, t, h) : sa(r, h, t)
      }
    }
  )
}
function X_(s) {
  if (s !== void 0) return 0
}
function gl(s) {
  if (s !== void 0) return s
}
function W_(s) {
  const t = (2 * Math.PI) / s
  return function (e, n) {
    if (n) return e
    if (e !== void 0) return ((e = Math.floor(e / t + 0.5) * t), e)
  }
}
function Y_(s) {
  return (
    (s = s || Wn(5)),
    function (t, e) {
      if (e) return t
      if (t !== void 0) return Math.abs(t) <= s ? 0 : t
    }
  )
}
function B_(s) {
  return Math.pow(s, 3)
}
function U_(s) {
  return 1 - B_(1 - s)
}
function V_(s) {
  return 3 * s * s - 2 * s * s * s
}
const vr = 0
class _l extends we {
  constructor(t) {
    ;(super(),
      this.on,
      this.once,
      this.un,
      (t = Object.assign({}, t)),
      (this.hints_ = [0, 0]),
      (this.animations_ = []),
      this.updateAnimationKey_,
      (this.projection_ = Zo(t.projection, 'EPSG:3857')),
      (this.viewportSize_ = [100, 100]),
      (this.targetCenter_ = null),
      this.targetResolution_,
      this.targetRotation_,
      (this.nextCenter_ = null),
      this.nextResolution_,
      this.nextRotation_,
      (this.cancelAnchor_ = void 0),
      t.projection && fc(),
      t.center && (t.center = H(t.center, this.projection_)),
      t.extent && (t.extent = Fn(t.extent, this.projection_)),
      this.applyOptions_(t))
  }
  applyOptions_(t) {
    const e = Object.assign({}, t)
    for (const a in Bt) delete e[a]
    this.setProperties(e, !0)
    const n = K_(t)
    ;((this.maxResolution_ = n.maxResolution),
      (this.minResolution_ = n.minResolution),
      (this.zoomFactor_ = n.zoomFactor),
      (this.resolutions_ = t.resolutions),
      (this.padding_ = t.padding),
      (this.minZoom_ = n.minZoom))
    const i = Z_(t),
      r = n.constraint,
      o = $_(t)
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
      n && ls(n, !0)
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
          easing: c.easing || V_,
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
        const d = eo(c.rotation - l + Math.PI, 2 * Math.PI) - Math.PI
        ;((u.targetRotation = l + d), (l = u.targetRotation))
      }
      ;(q_(u) ? (u.complete = !0) : (r += u.duration), h.push(u))
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
      const i = this.animations_[e]
      if ((i[0].callback && ls(i[0].callback, !1), !t))
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
              ? eo(l.targetRotation + Math.PI, 2 * Math.PI) - Math.PI
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
        const o = i[0].callback
        o && ls(o, !0)
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
    return (i !== void 0 && ((n = [i[0] - e[0], i[1] - e[1]]), zg(n, t - this.getRotation()), jg(n, e)), n)
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
    return t && Kn(t, this.getProjection())
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
    return or(e, this.getProjection())
  }
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_()
    const e = this.getCenterInternal()
    tt(e, 1)
    const n = this.getResolution()
    tt(n !== void 0, 2)
    const i = this.getRotation()
    return (tt(i !== void 0, 3), Sg(e, n, i, t))
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
    return this.getResolutionForExtentInternal(Fn(t, this.getProjection()), e)
  }
  getResolutionForExtentInternal(t, e) {
    e = e || this.getViewportSizeMinusPadding_()
    const n = Gt(t) / e[0],
      i = wi(t) / e[1]
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
    return this.get(Bt.ROTATION)
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
      i = Ir(i, this.getViewportSize_(), [o[0] / 2 + r[3], o[1] / 2 + r[0]], e, n)
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
      const r = Kh(this.resolutions_, t, 1)
      ;((e = r),
        (n = this.resolutions_[r]),
        r == this.resolutions_.length - 1 ? (i = 2) : (i = n / this.resolutions_[r + 1]))
    } else ((n = this.maxResolution_), (i = this.zoomFactor_))
    return e + Math.log(n / t) / Math.log(i)
  }
  getResolutionForZoom(t) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1) return 0
      const e = ut(Math.floor(t), 0, this.resolutions_.length - 2),
        n = this.resolutions_[e] / this.resolutions_[e + 1]
      return this.resolutions_[e] / Math.pow(n, ut(t - e, 0, 1))
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_)
  }
  fit(t, e) {
    let n
    if ((tt(Array.isArray(t) || typeof t.getSimplifiedGeometry == 'function', 24), Array.isArray(t))) {
      tt(!oc(t), 25)
      const i = Fn(t, this.getProjection())
      n = al(i)
    } else if (t.getType() === 'Circle') {
      const i = Fn(t.getExtent(), this.getProjection())
      ;((n = al(i)), n.rotate(this.getRotation(), Zn(i)))
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
      d = Zn(a)
    ;((d[0] += ((i[1] - i[3]) / 2) * l), (d[1] += ((i[0] - i[2]) / 2) * l))
    const f = d[0] * u - d[1] * c,
      g = d[1] * u + d[0] * c,
      _ = this.getConstrainedCenter([f, g], l),
      m = e.callback ? e.callback : Ci
    e.duration !== void 0
      ? this.animateInternal({ resolution: l, center: _, duration: e.duration, easing: e.easing }, m)
      : ((this.targetResolution_ = l), (this.targetCenter_ = _), this.applyTargetState_(!1, !0), ls(m, !0))
  }
  centerOn(t, e, n) {
    this.centerOnInternal(H(t, this.getProjection()), e, n)
  }
  centerOnInternal(t, e, n) {
    this.setCenterInternal(Ir(t, e, n, this.getResolution(), this.getRotation()))
  }
  calculateCenterShift(t, e, n, i) {
    let r
    const o = this.padding_
    if (o && t) {
      const a = this.getViewportSizeMinusPadding_(-n),
        l = Ir(t, i, [a[0] / 2 + o[3], a[1] / 2 + o[0]], e, n)
      r = [t[0] - l[0], t[1] - l[1]]
    }
    return r
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0
  }
  adjustCenter(t) {
    const e = Kn(this.targetCenter_, this.getProjection())
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
    ;(this.get(Bt.ROTATION) !== i && this.set(Bt.ROTATION, i),
      this.get(Bt.RESOLUTION) !== o && (this.set(Bt.RESOLUTION, o), this.set('zoom', this.getZoom(), !0)),
      (!a || !this.get(Bt.CENTER) || !Ut(this.get(Bt.CENTER), a)) && this.set(Bt.CENTER, a),
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
        !Ut(this.getCenterInternal(), l)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({ rotation: r, center: l, resolution: a, duration: t, easing: U_, anchor: n })))
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
function ls(s, t) {
  setTimeout(function () {
    s(t)
  }, 0)
}
function Z_(s) {
  if (s.extent !== void 0) {
    const e = s.smoothExtentConstraint !== void 0 ? s.smoothExtentConstraint : !0
    return dl(s.extent, s.constrainOnlyCenter, e)
  }
  const t = Zo(s.projection, 'EPSG:3857')
  if (s.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice()
    return ((e[0] = -1 / 0), (e[2] = 1 / 0), dl(e, !1, !1))
  }
  return j_
}
function K_(s) {
  let t,
    e,
    n,
    o = s.minZoom !== void 0 ? s.minZoom : vr,
    a = s.maxZoom !== void 0 ? s.maxZoom : 28
  const l = s.zoomFactor !== void 0 ? s.zoomFactor : 2,
    h = s.multiWorld !== void 0 ? s.multiWorld : !1,
    c = s.smoothResolutionConstraint !== void 0 ? s.smoothResolutionConstraint : !0,
    u = s.showFullExtent !== void 0 ? s.showFullExtent : !1,
    d = Zo(s.projection, 'EPSG:3857'),
    f = d.getExtent()
  let g = s.constrainOnlyCenter,
    _ = s.extent
  if ((!h && !_ && d.isGlobal() && ((g = !1), (_ = f)), s.resolutions !== void 0)) {
    const m = s.resolutions
    ;((e = m[o]),
      (n = m[a] !== void 0 ? m[a] : m[m.length - 1]),
      s.constrainResolution ? (t = G_(m, c, !g && _, u)) : (t = fl(e, n, c, !g && _, u)))
  } else {
    const p = (f ? Math.max(Gt(f), wi(f)) : (360 * lc.degrees) / d.getMetersPerUnit()) / N_ / Math.pow(2, vr),
      y = p / Math.pow(2, 28 - vr)
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
      s.constrainResolution ? (t = z_(l, e, n, c, !g && _, u)) : (t = fl(e, n, c, !g && _, u)))
  }
  return { constraint: t, maxResolution: e, minResolution: n, minZoom: o, zoomFactor: l }
}
function $_(s) {
  if (s.enableRotation !== void 0 ? s.enableRotation : !0) {
    const e = s.constrainRotation
    return e === void 0 || e === !0 ? Y_() : e === !1 ? gl : typeof e == 'number' ? W_(e) : gl
  }
  return X_
}
function q_(s) {
  return !(
    (s.sourceCenter && s.targetCenter && !Ut(s.sourceCenter, s.targetCenter)) ||
    s.sourceResolution !== s.targetResolution ||
    s.sourceRotation !== s.targetRotation
  )
}
function Ir(s, t, e, n, i) {
  const r = Math.cos(-i)
  let o = Math.sin(-i),
    a = s[0] * r - s[1] * o,
    l = s[1] * r + s[0] * o
  ;((a += (t[0] / 2 - e[0]) * n), (l += (e[1] - t[1] / 2) * n), (o = -o))
  const h = a * r - l * o,
    c = l * r + a * o
  return [h, c]
}
class H_ extends k_ {
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
    ;(this.sourceChangeKey_ && (Lt(this.sourceChangeKey_), (this.sourceChangeKey_ = null)),
      (this.sourceReady_ = !1))
    const t = this.getSource()
    ;(t &&
      ((this.sourceChangeKey_ = pt(t, dt.CHANGE, this.handleSourceChange_, this)),
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
      t instanceof _l ? (e = { viewState: t.getState(), extent: t.calculateExtent() }) : (e = t),
      !e.layerStatesArray && n && (e.layerStatesArray = n.getLayerGroup().getLayerStatesArray()))
    let i
    e.layerStatesArray ? (i = e.layerStatesArray.find(o => o.layer === this)) : (i = this.getLayerState())
    const r = this.getExtent()
    return J_(i, e.viewState) && (!r || jt(r, e.extent))
  }
  getAttributions(t) {
    if (!this.isVisible(t)) return []
    let e
    const n = this.getSource()
    if ((n && (e = n.getAttributions()), !e)) return []
    const i = t instanceof _l ? t.getViewStateAndExtent() : t
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
    ;(this.mapPrecomposeKey_ && (Lt(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)),
      t || this.changed(),
      this.mapRenderKey_ && (Lt(this.mapRenderKey_), (this.mapRenderKey_ = null)),
      t &&
        ((this.mapPrecomposeKey_ = pt(
          t,
          Ti.PRECOMPOSE,
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
        (this.mapRenderKey_ = pt(this, dt.CHANGE, t.render, t)),
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
function J_(s, t) {
  if (!s.visible) return !1
  const e = t.resolution
  if (e < s.minResolution || e >= s.maxResolution) return !1
  const n = t.zoom
  return n > s.minZoom && n <= s.maxZoom
}
function Q_(s, t, e, n, i) {
  Fc(s, t, e || 0, n || s.length - 1, i || tm)
}
function Fc(s, t, e, n, i) {
  for (; n > e; ) {
    if (n - e > 600) {
      var r = n - e + 1,
        o = t - e + 1,
        a = Math.log(r),
        l = 0.5 * Math.exp((2 * a) / 3),
        h = 0.5 * Math.sqrt((a * l * (r - l)) / r) * (o - r / 2 < 0 ? -1 : 1),
        c = Math.max(e, Math.floor(t - (o * l) / r + h)),
        u = Math.min(n, Math.floor(t + ((r - o) * l) / r + h))
      Fc(s, t, c, u, i)
    }
    var d = s[t],
      f = e,
      g = n
    for (oi(s, e, t), i(s[n], d) > 0 && oi(s, e, n); f < g; ) {
      for (oi(s, f, g), f++, g--; i(s[f], d) < 0; ) f++
      for (; i(s[g], d) > 0; ) g--
    }
    ;(i(s[e], d) === 0 ? oi(s, e, g) : (g++, oi(s, g, n)), g <= t && (e = g + 1), t <= g && (n = g - 1))
  }
}
function oi(s, t, e) {
  var n = s[t]
  ;((s[t] = s[e]), (s[e] = n))
}
function tm(s, t) {
  return s < t ? -1 : s > t ? 1 : 0
}
let Oc = class {
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
    if (!cs(t, e)) return n
    const i = this.toBBox,
      r = []
    for (; e; ) {
      for (let o = 0; o < e.children.length; o++) {
        const a = e.children[o],
          l = e.leaf ? i(a) : a
        cs(t, l) && (e.leaf ? n.push(a) : br(t, l) ? this._all(a, n) : r.push(a))
      }
      e = r.pop()
    }
    return n
  }
  collides(t) {
    let e = this.data
    if (!cs(t, e)) return !1
    const n = []
    for (; e; ) {
      for (let i = 0; i < e.children.length; i++) {
        const r = e.children[i],
          o = e.leaf ? this.toBBox(r) : r
        if (cs(t, o)) {
          if (e.leaf || br(t, o)) return !0
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
        const c = em(t, n.children, e)
        if (c !== -1) return (n.children.splice(c, 1), r.push(n), this._condense(r), this)
      }
      !h && !n.leaf && br(n, i)
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
    ml(t, e, n, h, this.compareMinX)
    for (let c = e; c <= n; c += h) {
      const u = Math.min(c + h - 1, n)
      ml(t, c, u, l, this.compareMinY)
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
          c = Mr(h),
          u = sm(t, h) - c
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
    for (o.children.push(t), di(o, i); e >= 0 && r[e].children.length > this._maxEntries; )
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
      const l = ui(t, 0, a, this.toBBox),
        h = ui(t, a, n, this.toBBox),
        c = rm(l, h),
        u = Mr(l) + Mr(h)
      c < r ? ((r = c), (i = a), (o = u < o ? u : o)) : c === r && u < o && ((o = u), (i = a))
    }
    return i || n - e
  }
  _chooseSplitAxis(t, e, n) {
    const i = t.leaf ? this.compareMinX : nm,
      r = t.leaf ? this.compareMinY : im,
      o = this._allDistMargin(t, e, n, i),
      a = this._allDistMargin(t, e, n, r)
    o < a && t.children.sort(i)
  }
  _allDistMargin(t, e, n, i) {
    t.children.sort(i)
    const r = this.toBBox,
      o = ui(t, 0, e, r),
      a = ui(t, n - e, n, r)
    let l = hs(o) + hs(a)
    for (let h = e; h < n - e; h++) {
      const c = t.children[h]
      ;(di(o, t.leaf ? r(c) : c), (l += hs(o)))
    }
    for (let h = n - e - 1; h >= e; h--) {
      const c = t.children[h]
      ;(di(a, t.leaf ? r(c) : c), (l += hs(a)))
    }
    return l
  }
  _adjustParentBBoxes(t, e, n) {
    for (let i = n; i >= 0; i--) di(e[i], t)
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
function em(s, t, e) {
  if (!e) return t.indexOf(s)
  for (let n = 0; n < t.length; n++) if (e(s, t[n])) return n
  return -1
}
function Cn(s, t) {
  ui(s, 0, s.children.length, t, s)
}
function ui(s, t, e, n, i) {
  ;(i || (i = In(null)), (i.minX = 1 / 0), (i.minY = 1 / 0), (i.maxX = -1 / 0), (i.maxY = -1 / 0))
  for (let r = t; r < e; r++) {
    const o = s.children[r]
    di(i, s.leaf ? n(o) : o)
  }
  return i
}
function di(s, t) {
  return (
    (s.minX = Math.min(s.minX, t.minX)),
    (s.minY = Math.min(s.minY, t.minY)),
    (s.maxX = Math.max(s.maxX, t.maxX)),
    (s.maxY = Math.max(s.maxY, t.maxY)),
    s
  )
}
function nm(s, t) {
  return s.minX - t.minX
}
function im(s, t) {
  return s.minY - t.minY
}
function Mr(s) {
  return (s.maxX - s.minX) * (s.maxY - s.minY)
}
function hs(s) {
  return s.maxX - s.minX + (s.maxY - s.minY)
}
function sm(s, t) {
  return (
    (Math.max(t.maxX, s.maxX) - Math.min(t.minX, s.minX)) *
    (Math.max(t.maxY, s.maxY) - Math.min(t.minY, s.minY))
  )
}
function rm(s, t) {
  const e = Math.max(s.minX, t.minX),
    n = Math.max(s.minY, t.minY),
    i = Math.min(s.maxX, t.maxX),
    r = Math.min(s.maxY, t.maxY)
  return Math.max(0, i - e) * Math.max(0, r - n)
}
function br(s, t) {
  return s.minX <= t.minX && s.minY <= t.minY && t.maxX <= s.maxX && t.maxY <= s.maxY
}
function cs(s, t) {
  return t.minX <= s.maxX && t.minY <= s.maxY && t.maxX >= s.minX && t.maxY >= s.minY
}
function In(s) {
  return { children: s, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 }
}
function ml(s, t, e, n, i) {
  const r = [t, e]
  for (; r.length; ) {
    if (((e = r.pop()), (t = r.pop()), e - t <= n)) continue
    const o = t + Math.ceil((e - t) / n / 2) * n
    ;(Q_(s, o, t, e, i), r.push(t, o, o, e))
  }
}
class om {
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
    const i = pl(t, e, n)
    return i in this.cache_ ? this.cache_[i] : null
  }
  set(t, e, n, i) {
    const r = pl(t, e, n)
    ;((this.cache_[r] = i), ++this.cacheSize_)
  }
  setSize(t) {
    ;((this.maxCacheSize_ = t), this.expire())
  }
}
function pl(s, t, e) {
  const n = e ? Ic(e) : 'null'
  return t + ':' + s + ':' + n
}
const yl = new om()
function am(s, t, e) {
  const n = s
  let i = !0,
    r = !1,
    o = !1
  const a = [
    Ds(n, dt.LOAD, function () {
      ;((o = !0), r || t())
    }),
  ]
  return (
    n.src && fg
      ? ((r = !0),
        n
          .decode()
          .then(function () {
            i && t()
          })
          .catch(function (l) {
            i && (o ? t() : e())
          }))
      : a.push(Ds(n, dt.ERROR, e)),
    function () {
      ;((i = !1), a.forEach(Lt))
    }
  )
}
let ai = null
class lm extends $h {
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
      ;(ai || (ai = $t(1, 1, void 0, { willReadFrequently: !0 })), ai.drawImage(this.image_, 0, 0))
      try {
        ;(ai.getImageData(0, 0, 1, 1), (this.tainted_ = !1))
      } catch {
        ;((ai = null), (this.tainted_ = !0))
      }
    }
    return this.tainted_ === !0
  }
  dispatchChangeEvent_() {
    this.dispatchEvent(dt.CHANGE)
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
      this.unlisten_ = am(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this))
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
      (i.fillStyle = Ic(this.color_)),
      i.fillRect(0, 0, n.width / t, n.height / t),
      (i.globalCompositeOperation = 'destination-in'),
      i.drawImage(e, 0, 0),
      (this.canvas_[t] = n))
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null))
  }
}
function hm(s, t, e, n, i, r) {
  let o = yl.get(t, n, r)
  return (o || ((o = new lm(s, t, e, n, i, r)), yl.set(t, n, r, o)), o)
}
function El(s, t, e, n) {
  return e !== void 0 && n !== void 0 ? [e / s, n / t] : e !== void 0 ? e / s : n !== void 0 ? n / t : 1
}
class ur extends hr {
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
      (a === void 0 || a.length === 0) && o && (a = o.src || $(o)),
      tt(a !== void 0 && a.length > 0, 6),
      tt(!((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0), 69))
    const l = t.src !== void 0 ? Q.IDLE : Q.LOADED
    if (
      ((this.color_ = t.color !== void 0 ? zs(t.color) : null),
      (this.iconImage_ = hm(
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
            this.setScale(El(f[0], f[1], t.width, t.height))
          }
          this.listenImageChange(d)
          return
        }
      }
      h !== void 0 && this.setScale(El(h, c, t.width, t.height))
    }
  }
  clone() {
    let t, e, n
    return (
      this.initialOptions_
        ? ((e = this.initialOptions_.width), (n = this.initialOptions_.height))
        : ((t = this.getScale()), (t = Array.isArray(t) ? t.slice() : t)),
      new ur({
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
    this.iconImage_.addEventListener(dt.CHANGE, t)
  }
  load() {
    this.iconImage_.load()
  }
  unlistenImageChange(t) {
    this.iconImage_.removeEventListener(dt.CHANGE, t)
  }
}
function xl(s) {
  return new Vt({ fill: Li(s, ''), stroke: Pi(s, ''), text: cm(s), image: um(s) })
}
function Li(s, t) {
  const e = s[t + 'fill-color']
  if (e) return e === 'none' ? null : new Xe({ color: e })
}
function Pi(s, t) {
  const e = s[t + 'stroke-width'],
    n = s[t + 'stroke-color']
  if (!(!e && !n))
    return new ye({
      width: e,
      color: n,
      lineCap: s[t + 'stroke-line-cap'],
      lineJoin: s[t + 'stroke-line-join'],
      lineDash: s[t + 'stroke-line-dash'],
      lineDashOffset: s[t + 'stroke-line-dash-offset'],
      miterLimit: s[t + 'stroke-miter-limit'],
    })
}
function cm(s) {
  const t = s['text-value']
  return t
    ? new na({
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
        fill: Li(s, 'text-'),
        backgroundFill: Li(s, 'text-background-'),
        stroke: Pi(s, 'text-'),
        backgroundStroke: Pi(s, 'text-background-'),
      })
    : void 0
}
function um(s) {
  const t = s['icon-src'],
    e = s['icon-img']
  if (t || e)
    return new ur({
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
    return new cr({
      points: n,
      fill: Li(s, r),
      stroke: Pi(s, r),
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
    return new Jn({
      radius: i,
      fill: Li(s, r),
      stroke: Pi(s, r),
      displacement: s['circle-displacement'],
      scale: s['circle-scale'],
      rotation: s['circle-rotation'],
      rotateWithView: s['circle-rotate-with-view'],
      declutterMode: s['circle-declutter-mode'],
    })
  }
}
const Cl = { RENDER_ORDER: 'renderOrder' }
class dm extends H_ {
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
    return this.get(Cl.RENDER_ORDER)
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
    ;(t.declutterTree || (t.declutterTree = new Oc(9)), this.getRenderer().renderDeclutter(t))
  }
  setRenderOrder(t) {
    this.set(Cl.RENDER_ORDER, t)
  }
  setStyle(t) {
    let e
    if (t === void 0) e = O_
    else if (t === null) e = null
    else if (typeof t == 'function') e = t
    else if (t instanceof Vt) e = t
    else if (Array.isArray(t)) {
      const n = t.length,
        i = new Array(n)
      for (let r = 0; r < n; ++r) {
        const o = t[r]
        o instanceof Vt ? (i[r] = o) : (i[r] = xl(o))
      }
      e = i
    } else e = xl(t)
    ;((this.style_ = e), (this.styleFunction_ = t === null ? void 0 : F_(this.style_)), this.changed())
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
  us = [M.FILL],
  ke = [M.STROKE],
  Qe = [M.BEGIN_PATH],
  wl = [M.CLOSE_PATH]
class Dc {
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
class Wi extends Dc {
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
      ((i[0] = t[a]), (i[1] = t[a + 1]), Cg(n, i) && ((r[o++] = i[0]), (r[o++] = i[1])))
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
        (m = Qr(h, d)),
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
        ;(this.instructions.push([M.CUSTOM, a, u, t, n, so]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, u, t, i || n, so]))
        break
      case 'Polygon':
      case 'MultiLineString':
        ;((c = []),
          (l = r == 'Polygon' ? t.getOrientedFlatCoordinates() : t.getFlatCoordinates()),
          (d = this.drawCustomCoordinates_(l, 0, t.getEnds(), o, c)),
          this.instructions.push([M.CUSTOM, a, c, t, n, Si]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, c, t, i || n, Si]))
        break
      case 'LineString':
      case 'Circle':
        ;((l = t.getFlatCoordinates()),
          (h = this.appendFlatLineCoordinates(l, 0, l.length, o, !1, !1)),
          this.instructions.push([M.CUSTOM, a, h, t, n, De]),
          this.hitDetectionInstructions.push([M.CUSTOM, a, h, t, i || n, De]))
        break
      case 'MultiPoint':
        ;((l = t.getFlatCoordinates()),
          (h = this.appendFlatPointCoordinates(l, o)),
          h > a &&
            (this.instructions.push([M.CUSTOM, a, h, t, n, De]),
            this.hitDetectionInstructions.push([M.CUSTOM, a, h, t, i || n, De])))
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
          : r == M.BEGIN_GEOMETRY && ((i[2] = e), lg(this.hitDetectionInstructions, o, e), (o = -1)))
  }
  setFillStrokeStyle(t, e) {
    const n = this.state
    if (t) {
      const i = t.getColor()
      n.fillStyle = ie(i || St)
    } else n.fillStyle = void 0
    if (e) {
      const i = e.getColor()
      n.strokeStyle = ie(i || Ii)
      const r = e.getLineCap()
      n.lineCap = r !== void 0 ? r : Xs
      const o = e.getLineDash()
      n.lineDash = o ? o.slice() : Ee
      const a = e.getLineDashOffset()
      n.lineDashOffset = a || xe
      const l = e.getLineJoin()
      n.lineJoin = l !== void 0 ? l : $n
      const h = e.getWidth()
      n.lineWidth = h !== void 0 ? h : bi
      const c = e.getMiterLimit()
      ;((n.miterLimit = c !== void 0 ? c : vi),
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
    if (!this.bufferedMaxExtent_ && ((this.bufferedMaxExtent_ = xg(this.maxExtent)), this.maxLineWidth > 0)) {
      const t = (this.resolution * (this.maxLineWidth + 1)) / 2
      zi(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_)
    }
    return this.bufferedMaxExtent_
  }
}
class fm extends Wi {
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
class gm extends Wi {
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
        [M.SET_STROKE_STYLE, n.strokeStyle, n.lineWidth, n.lineCap, n.lineJoin, n.miterLimit, Ee, xe],
        Qe,
      ))
    const o = t.getFlatCoordinates(),
      a = t.getStride()
    ;(this.drawFlatCoordinates_(o, 0, o.length, a),
      this.hitDetectionInstructions.push(ke),
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
        [M.SET_STROKE_STYLE, n.strokeStyle, n.lineWidth, n.lineCap, n.lineJoin, n.miterLimit, Ee, xe],
        Qe,
      ))
    const o = t.getEnds(),
      a = t.getFlatCoordinates(),
      l = t.getStride()
    let h = 0
    for (let c = 0, u = o.length; c < u; ++c) h = this.drawFlatCoordinates_(a, h, o[c], l)
    ;(this.hitDetectionInstructions.push(ke), this.endGeometry(e))
  }
  finish() {
    const t = this.state
    return (
      t.lastStroke != null && t.lastStroke != this.coordinates.length && this.instructions.push(ke),
      this.reverseHitDetectionInstructions(),
      (this.state = null),
      super.finish()
    )
  }
  applyStroke(t) {
    ;(t.lastStroke != null &&
      t.lastStroke != this.coordinates.length &&
      (this.instructions.push(ke), (t.lastStroke = this.coordinates.length)),
      (t.lastStroke = 0),
      super.applyStroke(t),
      this.instructions.push(Qe))
  }
}
class Sl extends Wi {
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
        a && (this.instructions.push(wl), this.hitDetectionInstructions.push(wl)),
        (e = c))
    }
    return (
      o && (this.instructions.push(us), this.hitDetectionInstructions.push(us)),
      a && (this.instructions.push(ke), this.hitDetectionInstructions.push(ke)),
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
      n.fillStyle !== void 0 && this.hitDetectionInstructions.push([M.SET_FILL_STYLE, St]),
      n.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          M.SET_STROKE_STYLE,
          n.strokeStyle,
          n.lineWidth,
          n.lineCap,
          n.lineJoin,
          n.miterLimit,
          Ee,
          xe,
        ]))
    const o = t.getFlatCoordinates(),
      a = t.getStride(),
      l = this.coordinates.length
    this.appendFlatLineCoordinates(o, 0, o.length, a, !1, !1)
    const h = [M.CIRCLE, l]
    ;(this.instructions.push(Qe, h),
      this.hitDetectionInstructions.push(Qe, h),
      n.fillStyle !== void 0 && (this.instructions.push(us), this.hitDetectionInstructions.push(us)),
      n.strokeStyle !== void 0 && (this.instructions.push(ke), this.hitDetectionInstructions.push(ke)),
      this.endGeometry(e))
  }
  drawPolygon(t, e) {
    const n = this.state,
      i = n.fillStyle,
      r = n.strokeStyle
    if (i === void 0 && r === void 0) return
    ;(this.setFillStrokeStyles_(),
      this.beginGeometry(t, e),
      n.fillStyle !== void 0 && this.hitDetectionInstructions.push([M.SET_FILL_STYLE, St]),
      n.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          M.SET_STROKE_STYLE,
          n.strokeStyle,
          n.lineWidth,
          n.lineCap,
          n.lineJoin,
          n.miterLimit,
          Ee,
          xe,
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
      n.fillStyle !== void 0 && this.hitDetectionInstructions.push([M.SET_FILL_STYLE, St]),
      n.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          M.SET_STROKE_STYLE,
          n.strokeStyle,
          n.lineWidth,
          n.lineCap,
          n.lineJoin,
          n.miterLimit,
          Ee,
          xe,
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
function _m(s, t, e, n, i) {
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
        _ = bt(h, u, g),
        m = bt(c, d, g)
      ;(l.push(_, m), r.push(l), (l = [_, m]), a == s && (o += i), (a = 0))
    } else if (a < s) (l.push(t[o + i], t[o + i + 1]), (o += i))
    else {
      const g = f - a,
        _ = bt(h, u, g / f),
        m = bt(c, d, g / f)
      ;(l.push(_, m), r.push(l), (l = [_, m]), (a = 0), (o += i))
    }
  }
  return (a > 0 && r.push(l), r)
}
function mm(s, t, e, n, i) {
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
    E
  for (u = e; u < n; u += i) {
    const x = t[u],
      C = t[u + 1]
    ;(g !== void 0 &&
      ((y = x - g),
      (E = C - _),
      (f = Math.sqrt(y * y + E * E)),
      m !== void 0 &&
        ((l += d),
        (c = Math.acos((m * y + p * E) / (d * f))),
        c > s && (l > a && ((a = l), (r = h), (o = u)), (l = 0), (h = u - i))),
      (d = f),
      (m = y),
      (p = E)),
      (g = x),
      (_ = C))
  }
  return ((l += f), l > a ? [h, u] : [r, o])
}
const Bs = {
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
class pm extends Wi {
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
      (this.fillStates[St] = { fillStyle: St }),
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
        d ? (p = _m(d * this.resolution, h, g, u[_], c)) : (p = [h.slice(g, u[_])])
        for (let y = 0, E = p.length; y < E; ++y) {
          const x = p[y]
          let C = 0,
            S = x.length
          if (f == null) {
            const T = mm(r.maxAngle, x, 0, x.length, 2)
            ;((C = T[0]), (S = T[1]))
          }
          for (let T = C; T < S; T += c) o.push(x[T], x[T + 1])
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
          for (let y = 0, E = p.length; y < E; y += 3)
            (r.overflow || u.push(p[y + 2] / this.resolution), h.push(p[y], p[y + 1]))
          if (h.length === 0) return
          c = 2
          break
      }
      const d = this.appendFlatPointCoordinates(h, c)
      if (d === a) return
      if (u && (d - a) / 2 !== h.length / c) {
        let p = a / 2
        u = u.filter((y, E) => {
          const x = o[(p + E) * 2] === h[E * c] && o[(p + E) * 2 + 1] === h[E * c + 1]
          return (x || --p, x)
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
          E = r.padding[2],
          x = r.padding[3]
        ;(r.scale[0] < 0 && ((y = -y), (x = -x)), r.scale[1] < 0 && ((p = -p), (E = -E)), (f = [p, y, E, x]))
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
        ((this.state.fillStyle = St), this.hitDetectionInstructions.push(this.createFill(this.state))),
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
          this.fillKey_ ? St : this.fillKey_,
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
        textAlign: e.textAlign || Mi,
        justify: e.justify,
        textBaseline: e.textBaseline || Ws,
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
      h = Bs[i.textBaseline],
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
        a && St,
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
          (i.fillStyle = ie(o.getColor() || St)))
        : ((i = null), (this.textFillState_ = i))
      const a = t.getStroke()
      if (!a) ((r = null), (this.textStrokeState_ = r))
      else {
        ;((r = this.textStrokeState_), r || ((r = {}), (this.textStrokeState_ = r)))
        const g = a.getLineDash(),
          _ = a.getLineDashOffset(),
          m = a.getWidth(),
          p = a.getMiterLimit()
        ;((r.lineCap = a.getLineCap() || Xs),
          (r.lineDash = g ? g.slice() : Ee),
          (r.lineDashOffset = _ === void 0 ? xe : _),
          (r.lineJoin = a.getLineJoin() || $n),
          (r.lineWidth = m === void 0 ? bi : m),
          (r.miterLimit = p === void 0 ? vi : p),
          (r.strokeStyle = ie(a.getColor() || Ii)))
      }
      n = this.textState_
      const l = t.getFont() || Lc
      M_(l)
      const h = t.getScaleArray()
      ;((n.overflow = t.getOverflow()),
        (n.font = l),
        (n.maxAngle = t.getMaxAngle()),
        (n.placement = t.getPlacement()),
        (n.textAlign = t.getTextAlign()),
        (n.repeat = t.getRepeat()),
        (n.justify = t.getJustify()),
        (n.textBaseline = t.getTextBaseline() || Ws),
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
          ? (typeof r.strokeStyle == 'string' ? r.strokeStyle : $(r.strokeStyle)) +
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
        (this.fillKey_ = i ? (typeof i.fillStyle == 'string' ? i.fillStyle : '|' + $(i.fillStyle)) : ''))
    }
    this.declutterImageWithText_ = e
  }
}
const ym = { Circle: Sl, Default: Wi, Image: fm, LineString: gm, Polygon: Sl, Text: pm }
class Rl {
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
      const o = ym[e]
      ;((r = new o(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_)), (i[e] = r))
    }
    return r
  }
}
class Em extends ji {
  constructor(t) {
    ;(super(),
      (this.ready = !0),
      (this.boundHandleImageChange_ = this.handleImageChange_.bind(this)),
      (this.layer_ = t),
      (this.declutterExecutorGroup = null))
  }
  getFeatures(t) {
    return P()
  }
  getData(t) {
    return null
  }
  prepareFrame(t) {
    return P()
  }
  renderFrame(t, e) {
    return P()
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
      e != Q.LOADED && e != Q.ERROR && t.addEventListener(dt.CHANGE, this.boundHandleImageChange_),
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
class xm extends Et {
  constructor(t, e, n, i) {
    ;(super(t), (this.inversePixelTransform = e), (this.frameState = n), (this.context = i))
  }
}
const Tl = []
let Mn = null
function Cm() {
  Mn = $t(1, 1, void 0, { willReadFrequently: !0 })
}
class wm extends Em {
  constructor(t) {
    ;(super(t),
      (this.container = null),
      this.renderedResolution,
      (this.tempTransform = je()),
      (this.pixelTransform = je()),
      (this.inversePixelTransform = je()),
      (this.context = null),
      (this.containerReused = !1),
      (this.pixelContext_ = null),
      (this.frameState = null))
  }
  getImageData(t, e, n) {
    ;(Mn || Cm(), Mn.clearRect(0, 0, 1, 1))
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
      (!n || (t && t.style.backgroundColor && ln(zs(t.style.backgroundColor), zs(n))))
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
    const i = sc(n),
      r = rc(n),
      o = ic(n),
      a = nc(n)
    ;(wt(e.coordinateToPixelTransform, i),
      wt(e.coordinateToPixelTransform, r),
      wt(e.coordinateToPixelTransform, o),
      wt(e.coordinateToPixelTransform, a))
    const l = this.inversePixelTransform
    ;(wt(l, i),
      wt(l, r),
      wt(l, o),
      wt(l, a),
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
      const r = new xm(t, this.inversePixelTransform, n, e)
      i.dispatchEvent(r)
    }
  }
  preRender(t, e) {
    ;((this.frameState = e), this.dispatchRenderEvent_(Ti.PRERENDER, t, e))
  }
  postRender(t, e) {
    this.dispatchRenderEvent_(Ti.POSTRENDER, t, e)
  }
  getRenderTransform(t, e, n, i, r, o, a) {
    const l = r / 2,
      h = o / 2,
      c = i / e,
      u = -c,
      d = -t[0] + a,
      f = -t[1]
    return Gi(this.tempTransform, l, h, c, u, -n, d, f)
  }
  disposeInternal() {
    ;(delete this.frameState, super.disposeInternal())
  }
}
function Sm(s, t, e, n, i, r, o, a, l, h, c, u) {
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
  let E = m === 0 ? 0 : (r - p) / m
  const x = bt(g, d, E),
    C = bt(_, f, E),
    S = t - n,
    v = p,
    T = r + a * l(h, i, c)
  for (; t < e - n && p + m < T; ) y()
  E = m === 0 ? 0 : (T - p) / m
  const b = bt(g, d, E),
    F = bt(_, f, E)
  let G
  if (u) {
    const A = [x, C, b, F]
    ;(Ko(A, 0, 4, 2, u, A, A), (G = A[0] > A[2]))
  } else G = x > b
  const j = Math.PI,
    N = [],
    nt = S + n === t
  ;((t = S), (m = 0), (p = v), (d = s[t]), (f = s[t + 1]))
  let I
  if (nt) {
    ;(y(), (I = Math.atan2(f - _, d - g)), G && (I += I > 0 ? -j : j))
    const A = (b + x) / 2,
      R = (F + C) / 2
    return ((N[0] = [A, R, (T - r) / 2, I, i]), N)
  }
  i = i.replace(/\n/g, ' ')
  for (let A = 0, R = i.length; A < R; ) {
    y()
    let O = Math.atan2(f - _, d - g)
    if ((G && (O += O > 0 ? -j : j), I !== void 0)) {
      let Y = O - I
      if (((Y += Y > j ? -2 * j : Y < -j ? 2 * j : 0), Math.abs(Y) > o)) return null
    }
    I = O
    const K = A
    let B = 0
    for (; A < R; ++A) {
      const Y = G ? R - A - 1 : A,
        q = a * l(h, i[Y], c)
      if (t + n < e && p + m < r + B + q / 2) break
      B += q
    }
    if (A === K) continue
    const it = G ? i.substring(R - K, R - A) : i.substring(K, A)
    E = m === 0 ? 0 : (r + B / 2 - p) / m
    const w = bt(g, d, E),
      Tt = bt(_, f, E)
    ;(N.push([w, Tt, B / 2, O, it]), (r += B))
  }
  return N
}
const wn = ae(),
  be = [],
  de = [],
  fe = [],
  Le = []
function vl(s) {
  return s[3].declutterBox
}
const Il = new RegExp('[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]')
function Lr(s, t) {
  return (
    t === 'start' ? (t = Il.test(s) ? 'right' : 'left') : t === 'end' && (t = Il.test(s) ? 'left' : 'right'),
    Bs[t]
  )
}
function Rm(s, t, e) {
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
class Tm {
  constructor(t, e, n, i) {
    ;((this.overlaps = n),
      (this.pixelRatio = e),
      (this.resolution = t),
      this.alignFill_,
      (this.instructions = i.instructions),
      (this.coordinates = i.coordinates),
      (this.coordinateCache_ = {}),
      (this.renderedTransform_ = je()),
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
      d = l.justify ? Bs[l.justify] : Lr(Array.isArray(t) ? t[0] : t, l.textAlign || Mi),
      f = i && o.lineWidth ? o.lineWidth : 0,
      g = u
        ? t
        : t
            .split(
              `
`,
            )
            .reduce(Rm, []),
      { width: _, height: m, widths: p, heights: y, lineWidths: E } = L_(l, g),
      x = _ + f,
      C = [],
      S = (x + 2) * c[0],
      v = (m + f) * c[1],
      T = {
        width: S < 0 ? Math.floor(S) : Math.ceil(S),
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
    let F = d * x + b * f
    const G = [],
      j = []
    let N = 0,
      nt = 0,
      I = 0,
      A = 0,
      R
    for (let O = 0, K = g.length; O < K; O += 2) {
      const B = g[O]
      if (
        B ===
        `
`
      ) {
        ;((nt += N), (N = 0), (F = d * x + b * f), ++A)
        continue
      }
      const it = g[O + 1] || l.font
      ;(it !== R && (i && G.push('font', it), n && j.push('font', it), (R = it)), (N = Math.max(N, y[I])))
      const w = [B, F + b * p[I] + d * (p[I] - E[A]), 0.5 * (f + N) + nt]
      ;((F += p[I]), i && G.push('strokeText', w), n && j.push('fillText', w), ++I)
    }
    return (Array.prototype.push.apply(C, G), Array.prototype.push.apply(C, j), (this.labels_[r] = T), T)
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
    const E = r + h > t ? t - h : r,
      x = o + c > e ? e - c : o,
      C = g[3] + E * d[0] + g[1],
      S = g[0] + x * d[1] + g[2],
      v = p - g[3],
      T = y - g[0]
    ;(_ || u !== 0) &&
      ((be[0] = v),
      (Le[0] = v),
      (be[1] = T),
      (de[1] = T),
      (de[0] = v + C),
      (fe[0] = de[0]),
      (fe[1] = T + S),
      (Le[1] = fe[1]))
    let b
    return (
      u !== 0
        ? ((b = Gi(je(), n, i, 1, 1, u, -n, -i)),
          wt(b, be),
          wt(b, de),
          wt(b, fe),
          wt(b, Le),
          nn(
            Math.min(be[0], de[0], fe[0], Le[0]),
            Math.min(be[1], de[1], fe[1], Le[1]),
            Math.max(be[0], de[0], fe[0], Le[0]),
            Math.max(be[1], de[1], fe[1], Le[1]),
            wn,
          ))
        : nn(Math.min(v, v + C), Math.min(T, T + S), Math.max(v, v + C), Math.max(T, T + S), wn),
      f && ((p = Math.round(p)), (y = Math.round(y))),
      {
        drawImageX: p,
        drawImageY: y,
        drawImageW: E,
        drawImageH: x,
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
        (l && this.replayTextBackground_(t, be, de, fe, Le, o, a),
        P_(
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
      const e = wt(this.renderedTransform_, [0, 0]),
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
      h = Lr(Array.isArray(t) ? t[0] : t, r.textAlign || Mi),
      c = Bs[r.textBaseline || Ws],
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
        _g(this.renderedTransform_, n))
    let c = 0
    const u = i.length
    let d = 0,
      f,
      g,
      _,
      m,
      p,
      y,
      E,
      x,
      C,
      S,
      v,
      T,
      b = 0,
      F = 0,
      G = null,
      j = null
    const N = this.coordinateCache_,
      nt = this.viewRotation_,
      I = Math.round(Math.atan2(-n[1], n[0]) * 1e12) / 1e12,
      A = { context: t, pixelRatio: this.pixelRatio, resolution: this.resolution, rotation: nt },
      R = this.instructions != i || this.overlaps ? 0 : 200
    let O, K, B, it
    for (; c < u; ) {
      const w = i[c]
      switch (w[0]) {
        case M.BEGIN_GEOMETRY:
          ;((O = w[1]),
            (it = w[3]),
            O.getGeometry() ? (a !== void 0 && !jt(a, it.getExtent()) ? (c = w[2] + 1) : ++c) : (c = w[2]))
          break
        case M.BEGIN_PATH:
          ;(b > R && (this.fill_(t), (b = 0)),
            F > R && (t.stroke(), (F = 0)),
            !b && !F && (t.beginPath(), (m = NaN), (p = NaN)),
            ++c)
          break
        case M.CIRCLE:
          d = w[1]
          const Y = h[d],
            q = h[d + 1],
            Se = h[d + 2],
            qt = h[d + 3],
            at = Se - Y,
            le = qt - q,
            cn = Math.sqrt(at * at + le * le)
          ;(t.moveTo(Y + cn, q), t.arc(Y, q, cn, 0, 2 * Math.PI, !0), ++c)
          break
        case M.CLOSE_PATH:
          ;(t.closePath(), ++c)
          break
        case M.CUSTOM:
          ;((d = w[1]), (f = w[2]))
          const Bi = w[3],
            un = w[4],
            Ui = w.length == 6 ? w[5] : void 0
          ;((A.geometry = Bi), (A.feature = O), c in N || (N[c] = []))
          const Re = N[c]
          ;(Ui ? Ui(h, d, f, 2, Re) : ((Re[0] = h[d]), (Re[1] = h[d + 1]), (Re.length = 2)), un(Re, A), ++c)
          break
        case M.DRAW_IMAGE:
          ;((d = w[1]), (f = w[2]), (x = w[3]), (g = w[4]), (_ = w[5]))
          let ti = w[6]
          const Te = w[7],
            Vi = w[8],
            Zi = w[9],
            Ki = w[10]
          let dn = w[11]
          const fr = w[12]
          let xt = w[13]
          const Pt = w[14],
            Wt = w[15]
          if (!x && w.length >= 20) {
            ;((C = w[19]), (S = w[20]), (v = w[21]), (T = w[22]))
            const vt = this.drawLabelWithPointPlacement_(C, S, v, T)
            ;((x = vt.label), (w[3] = x))
            const _n = w[23]
            ;((g = (vt.anchorX - _n) * this.pixelRatio), (w[4] = g))
            const At = w[24]
            ;((_ = (vt.anchorY - At) * this.pixelRatio),
              (w[5] = _),
              (ti = x.height),
              (w[6] = ti),
              (xt = x.width),
              (w[13] = xt))
          }
          let he
          w.length > 25 && (he = w[25])
          let fn, Ue, ve
          ;(w.length > 17 ? ((fn = w[16]), (Ue = w[17]), (ve = w[18])) : ((fn = Je), (Ue = !1), (ve = !1)),
            Ki && I ? (dn += nt) : !Ki && !I && (dn -= nt))
          let gn = 0
          for (; d < f; d += 2) {
            if (he && he[gn++] < xt / this.pixelRatio) continue
            const vt = this.calculateImageOrLabelDimensions_(
                x.width,
                x.height,
                h[d],
                h[d + 1],
                xt,
                ti,
                g,
                _,
                Vi,
                Zi,
                dn,
                fr,
                r,
                fn,
                Ue || ve,
                O,
              ),
              _n = [t, e, x, vt, Te, Ue ? G : null, ve ? j : null]
            if (l) {
              if (Pt === 'none') continue
              if (Pt === 'obstacle') {
                l.insert(vt.declutterBox)
                continue
              } else {
                let At, ce
                if (Wt) {
                  const It = f - d
                  if (!Wt[It]) {
                    Wt[It] = _n
                    continue
                  }
                  if (((At = Wt[It]), delete Wt[It], (ce = vl(At)), l.collides(ce))) continue
                }
                if (l.collides(vt.declutterBox)) continue
                ;(At && (l.insert(ce), this.replayImageOrLabel_.apply(this, At)), l.insert(vt.declutterBox))
              }
            }
            this.replayImageOrLabel_.apply(this, _n)
          }
          ++c
          break
        case M.DRAW_CHARS:
          const $i = w[1],
            gt = w[2],
            gr = w[3],
            $c = w[4]
          T = w[5]
          const qc = w[6],
            ha = w[7],
            ca = w[8]
          v = w[9]
          const _r = w[10]
          ;((C = w[11]), (S = w[12]))
          const ua = [w[13], w[13]],
            mr = this.textStates[S],
            ei = mr.font,
            ni = [mr.scale[0] * ha, mr.scale[1] * ha]
          let ii
          ei in this.widths_ ? (ii = this.widths_[ei]) : ((ii = {}), (this.widths_[ei] = ii))
          const da = vc(h, $i, gt, 2),
            fa = Math.abs(ni[0]) * cl(ei, C, ii)
          if ($c || fa <= da) {
            const vt = this.textStates[S].textAlign,
              _n = (da - fa) * Lr(C, vt),
              At = Sm(h, $i, gt, 2, C, _n, qc, Math.abs(ni[0]), cl, ei, ii, I ? 0 : this.viewRotation_)
            t: if (At) {
              const ce = []
              let It, qi, Hi, Ct, Ft
              if (v)
                for (It = 0, qi = At.length; It < qi; ++It) {
                  ;((Ft = At[It]),
                    (Hi = Ft[4]),
                    (Ct = this.createLabel(Hi, S, '', v)),
                    (g = Ft[2] + (ni[0] < 0 ? -_r : _r)),
                    (_ = gr * Ct.height + ((0.5 - gr) * 2 * _r * ni[1]) / ni[0] - ca))
                  const ue = this.calculateImageOrLabelDimensions_(
                    Ct.width,
                    Ct.height,
                    Ft[0],
                    Ft[1],
                    Ct.width,
                    Ct.height,
                    g,
                    _,
                    0,
                    0,
                    Ft[3],
                    ua,
                    !1,
                    Je,
                    !1,
                    O,
                  )
                  if (l && l.collides(ue.declutterBox)) break t
                  ce.push([t, e, Ct, ue, 1, null, null])
                }
              if (T)
                for (It = 0, qi = At.length; It < qi; ++It) {
                  ;((Ft = At[It]),
                    (Hi = Ft[4]),
                    (Ct = this.createLabel(Hi, S, T, '')),
                    (g = Ft[2]),
                    (_ = gr * Ct.height - ca))
                  const ue = this.calculateImageOrLabelDimensions_(
                    Ct.width,
                    Ct.height,
                    Ft[0],
                    Ft[1],
                    Ct.width,
                    Ct.height,
                    g,
                    _,
                    0,
                    0,
                    Ft[3],
                    ua,
                    !1,
                    Je,
                    !1,
                    O,
                  )
                  if (l && l.collides(ue.declutterBox)) break t
                  ce.push([t, e, Ct, ue, 1, null, null])
                }
              l && l.load(ce.map(vl))
              for (let ue = 0, Hc = ce.length; ue < Hc; ++ue) this.replayImageOrLabel_.apply(this, ce[ue])
            }
          }
          ++c
          break
        case M.END_GEOMETRY:
          if (o !== void 0) {
            O = w[1]
            const vt = o(O, it)
            if (vt) return vt
          }
          ++c
          break
        case M.FILL:
          ;(R ? b++ : this.fill_(t), ++c)
          break
        case M.MOVE_TO_LINE_TO:
          for (
            d = w[1],
              f = w[2],
              K = h[d],
              B = h[d + 1],
              y = (K + 0.5) | 0,
              E = (B + 0.5) | 0,
              (y !== m || E !== p) && (t.moveTo(K, B), (m = y), (p = E)),
              d += 2;
            d < f;
            d += 2
          )
            ((K = h[d]),
              (B = h[d + 1]),
              (y = (K + 0.5) | 0),
              (E = (B + 0.5) | 0),
              (d == f - 2 || y !== m || E !== p) && (t.lineTo(K, B), (m = y), (p = E)))
          ++c
          break
        case M.SET_FILL_STYLE:
          ;((G = w),
            (this.alignFill_ = w[2]),
            b && (this.fill_(t), (b = 0), F && (t.stroke(), (F = 0))),
            (t.fillStyle = w[1]),
            ++c)
          break
        case M.SET_STROKE_STYLE:
          ;((j = w), F && (t.stroke(), (F = 0)), this.setStrokeStyle_(t, w), ++c)
          break
        case M.STROKE:
          ;(R ? F++ : t.stroke(), ++c)
          break
        default:
          ++c
          break
      }
    }
    ;(b && this.fill_(t), F && t.stroke())
  }
  execute(t, e, n, i, r, o) {
    ;((this.viewRotation_ = i), this.execute_(t, e, n, this.instructions, r, void 0, void 0, o))
  }
  executeHitDetection(t, e, n, i, r) {
    return ((this.viewRotation_ = n), this.execute_(t, 1, e, this.hitDetectionInstructions, !0, i, r))
  }
}
const Pr = ['Polygon', 'Circle', 'LineString', 'Image', 'Text', 'Default']
class Ml {
  constructor(t, e, n, i, r, o) {
    ;((this.maxExtent_ = t),
      (this.overlaps_ = i),
      (this.pixelRatio_ = n),
      (this.resolution_ = e),
      (this.renderBuffer_ = o),
      (this.executorsByZIndex_ = {}),
      (this.hitDetectionContext_ = null),
      (this.hitDetectionTransform_ = je()),
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
        n[r] = new Tm(this.resolution_, this.pixelRatio_, this.overlaps_, o)
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
      l = Gi(this.hitDetectionTransform_, i + 0.5, i + 0.5, 1 / e, -1 / e, -n, -t[0], -t[1]),
      h = !this.hitDetectionContext_
    h && (this.hitDetectionContext_ = $t(a, a, void 0, { willReadFrequently: !0 }))
    const c = this.hitDetectionContext_
    c.canvas.width !== a || c.canvas.height !== a
      ? ((c.canvas.width = a), (c.canvas.height = a))
      : h || c.clearRect(0, 0, a, a)
    let u
    this.renderBuffer_ !== void 0 && ((u = ae()), Qh(u, t), zi(u, e * (this.renderBuffer_ + i), u))
    const d = vm(i)
    let f
    function g(C, S) {
      const v = c.getImageData(0, 0, a, a).data
      for (let T = 0, b = d.length; T < b; T++)
        if (v[d[T]] > 0) {
          if (!o || (f !== 'Image' && f !== 'Text') || o.includes(C)) {
            const F = (d[T] - 3) / 4,
              G = i - (F % a),
              j = i - ((F / a) | 0),
              N = r(C, S, G * G + j * j)
            if (N) return N
          }
          c.clearRect(0, 0, a, a)
          break
        }
    }
    const _ = Object.keys(this.executorsByZIndex_).map(Number)
    _.sort(xi)
    let m, p, y, E, x
    for (m = _.length - 1; m >= 0; --m) {
      const C = _[m].toString()
      for (y = this.executorsByZIndex_[C], p = Pr.length - 1; p >= 0; --p)
        if (((f = Pr[p]), (E = y[f]), E !== void 0 && ((x = E.executeHitDetection(c, l, n, g, u)), x)))
          return x
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
    ;(l.sort(xi), this.maxExtent_ && (t.save(), this.clip(t, n)), (o = o || Pr))
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
const Ar = {}
function vm(s) {
  if (Ar[s] !== void 0) return Ar[s]
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
  return ((Ar[s] = i), i)
}
class Im extends Dc {
  constructor(t, e, n, i, r, o, a) {
    ;(super(),
      (this.context_ = t),
      (this.pixelRatio_ = e),
      (this.extent_ = n),
      (this.transform_ = i),
      (this.transformRotation_ = i ? cc(Math.atan2(i[1], i[0]), 10) : 0),
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
      (this.tmpLocalTransform_ = je()))
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
        ;(Gi(a, g, _, 1, 1, h, -g, -_),
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
      !!jt(this.extent_, t.getExtent()))
    ) {
      if (this.fillState_ || this.strokeState_) {
        ;(this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_))
        const e = e_(t, this.transform_, this.pixelCoordinates_),
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
      i = t.textAlign ? t.textAlign : Mi
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
      this.fillState_ = { fillStyle: ie(n || St) }
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
        c = r || Ee
      this.strokeState_ = {
        lineCap: i !== void 0 ? i : Xs,
        lineDash: this.pixelRatio_ === 1 ? c : c.map(u => u * this.pixelRatio_),
        lineDashOffset: (o || xe) * this.pixelRatio_,
        lineJoin: a !== void 0 ? a : $n,
        lineWidth: (l !== void 0 ? l : bi) * this.pixelRatio_,
        miterLimit: h !== void 0 ? h : vi,
        strokeStyle: ie(n || Ii),
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
        this.textFillState_ = { fillStyle: ie(f || St) }
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
          E = n.getMiterLimit()
        this.textStrokeState_ = {
          lineCap: g !== void 0 ? g : Xs,
          lineDash: _ || Ee,
          lineDashOffset: m || xe,
          lineJoin: p !== void 0 ? p : $n,
          lineWidth: y !== void 0 ? y : bi,
          miterLimit: E !== void 0 ? E : vi,
          strokeStyle: ie(f || Ii),
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
        font: i !== void 0 ? i : Lc,
        textAlign: u !== void 0 ? u : Mi,
        textBaseline: d !== void 0 ? d : Ws,
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
const te = 0.5
function Mm(s, t, e, n, i, r, o) {
  const a = s[0] * te,
    l = s[1] * te,
    h = $t(a, l)
  h.imageSmoothingEnabled = !1
  const c = h.canvas,
    u = new Im(h, te, i, null, o),
    d = e.length,
    f = Math.floor((256 * 256 * 256 - 1) / d),
    g = {}
  for (let m = 1; m <= d; ++m) {
    const p = e[m - 1],
      y = p.getStyleFunction() || n
    if (!y) continue
    let E = y(p, r)
    if (!E) continue
    Array.isArray(E) || (E = [E])
    const C = (m * f).toString(16).padStart(7, '#00000')
    for (let S = 0, v = E.length; S < v; ++S) {
      const T = E[S],
        b = T.getGeometryFunction()(p)
      if (!b || !jt(i, b.getExtent())) continue
      const F = T.clone(),
        G = F.getFill()
      G && G.setColor(C)
      const j = F.getStroke()
      ;(j && (j.setColor(C), j.setLineDash(null)), F.setText(void 0))
      const N = T.getImage()
      if (N) {
        const R = N.getImageSize()
        if (!R) continue
        const O = $t(R[0], R[1], void 0, { alpha: !1 }),
          K = O.canvas
        ;((O.fillStyle = C),
          O.fillRect(0, 0, K.width, K.height),
          F.setImage(
            new ur({
              img: K,
              imgSize: R,
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
      const nt = F.getZIndex() || 0
      let I = g[nt]
      I || ((I = {}), (g[nt] = I), (I.Polygon = []), (I.Circle = []), (I.LineString = []), (I.Point = []))
      const A = b.getType()
      if (A === 'GeometryCollection') {
        const R = b.getGeometriesArrayRecursive()
        for (let O = 0, K = R.length; O < K; ++O) {
          const B = R[O]
          I[B.getType().replace('Multi', '')].push(B, F)
        }
      } else I[A.replace('Multi', '')].push(b, F)
    }
  }
  const _ = Object.keys(g).map(Number).sort(xi)
  for (let m = 0, p = _.length; m < p; ++m) {
    const y = g[_[m]]
    for (const E in y) {
      const x = y[E]
      for (let C = 0, S = x.length; C < S; C += 2) {
        u.setStyle(x[C + 1])
        for (let v = 0, T = t.length; v < T; ++v) (u.setTransform(t[v]), u.drawGeometry(x[C]))
      }
    }
  }
  return h.getImageData(0, 0, c.width, c.height)
}
function bm(s, t, e) {
  const n = []
  if (e) {
    const i = Math.floor(Math.round(s[0]) * te),
      r = Math.floor(Math.round(s[1]) * te),
      o = (ut(i, 0, e.width - 1) + ut(r, 0, e.height - 1) * e.width) * 4,
      a = e.data[o],
      l = e.data[o + 1],
      c = e.data[o + 2] + 256 * (l + 256 * a),
      u = Math.floor((256 * 256 * 256 - 1) / t.length)
    c && c % u === 0 && n.push(t[c / u - 1])
  }
  return n
}
const Lm = 0.5,
  kc = {
    Point: Gm,
    LineString: km,
    Polygon: Xm,
    MultiPoint: zm,
    MultiLineString: Nm,
    MultiPolygon: jm,
    GeometryCollection: Dm,
    Circle: Fm,
  }
function Pm(s, t) {
  return parseInt($(s), 10) - parseInt($(t), 10)
}
function Am(s, t) {
  const e = ho(s, t)
  return e * e
}
function ho(s, t) {
  return (Lm * s) / t
}
function Fm(s, t, e, n, i) {
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
function bl(s, t, e, n, i, r, o) {
  let a = !1
  const l = e.getImage()
  if (l) {
    const h = l.getImageState()
    h == Q.LOADED || h == Q.ERROR
      ? l.unlistenImageChange(i)
      : (h == Q.IDLE && l.load(), l.listenImageChange(i), (a = !0))
  }
  return (Om(s, t, e, n, r, o), a)
}
function Om(s, t, e, n, i, r) {
  const o = e.getGeometryFunction()(t)
  if (!o) return
  const a = o.simplifyTransformed(n, i)
  if (e.getRenderer()) Nc(s, a, e, t)
  else {
    const h = kc[a.getType()]
    h(s, a, e, t, r)
  }
}
function Nc(s, t, e, n) {
  if (t.getType() == 'GeometryCollection') {
    const r = t.getGeometries()
    for (let o = 0, a = r.length; o < a; ++o) Nc(s, r[o], e, n)
    return
  }
  s.getBuilder(e.getZIndex(), 'Default').drawCustom(t, n, e.getRenderer(), e.getHitDetectionRenderer())
}
function Dm(s, t, e, n, i) {
  const r = t.getGeometriesArray()
  let o, a
  for (o = 0, a = r.length; o < a; ++o) {
    const l = kc[r[o].getType()]
    l(s, r[o], e, n, i)
  }
}
function km(s, t, e, n, i) {
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
function Nm(s, t, e, n, i) {
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
function jm(s, t, e, n, i) {
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
function Gm(s, t, e, n, i) {
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
function zm(s, t, e, n, i) {
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
function Xm(s, t, e, n, i) {
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
class Wm extends wm {
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
      g = !(f[kt.ANIMATING] || f[kt.INTERACTING]),
      _ = this.compositionContext_,
      m = Math.round(e.size[0] * d),
      p = Math.round(e.size[1] * d),
      y = u.getWrapX() && l.canWrapX(),
      E = y ? Gt(c) : null,
      x = y ? Math.ceil((i[2] - c[2]) / E) + 1 : 1
    let C = y ? Math.floor((i[0] - c[0]) / E) : 0
    do {
      const S = this.getRenderTransform(o, a, h, d, m, p, C * E)
      t.execute(_, 1, S, h, g, void 0, n)
    } while (++C < x)
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = $t(this.context.canvas.width, this.context.canvas.height, Tl)
      this.compositionContext_ = t
    } else this.compositionContext_ = this.context
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = this.context.globalAlpha
      ;((this.context.globalAlpha = this.opacity_),
        this.context.drawImage(this.compositionContext_.canvas, 0, 0),
        (this.context.globalAlpha = t),
        v_(this.compositionContext_),
        Tl.push(this.compositionContext_.canvas),
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
    ;(mg(this.pixelTransform, 1 / n, 1 / n), pg(this.inversePixelTransform, this.pixelTransform))
    const r = Eg(this.pixelTransform)
    this.useContainer(e, r, this.getBackground(t))
    const o = this.context,
      a = o.canvas,
      l = this.replayGroup_,
      h = this.declutterExecutorGroup
    let c = (l && !l.isEmpty()) || (h && !h.isEmpty())
    if (!c && !(this.getLayer().hasListener(Ti.PRERENDER) || this.getLayer().hasListener(Ti.POSTRENDER)))
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
      const _ = Fn(i.extent)
      ;((c = jt(_, t.extent)),
        (g = c && !Pn(_, t.extent)),
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
        wt(this.pixelTransform, n)
        const i = this.renderedCenter_,
          r = this.renderedResolution_,
          o = this.renderedRotation_,
          a = this.renderedProjection_,
          l = this.wrappedRenderedExtent_,
          h = this.getLayer(),
          c = [],
          u = n[0] * te,
          d = n[1] * te
        c.push(this.getRenderTransform(i, r, o, te, u, d, 0).slice())
        const f = h.getSource(),
          g = a.getExtent()
        if (f.getWrapX() && a.canWrapX() && !Pn(g, l)) {
          let _ = l[0]
          const m = Gt(g)
          let p = 0,
            y
          for (; _ < g[0]; )
            (--p, (y = m * p), c.push(this.getRenderTransform(i, r, o, te, u, d, y).slice()), (_ += m))
          for (p = 0, _ = l[2]; _ > g[2]; )
            (++p, (y = m * p), c.push(this.getRenderTransform(i, r, o, te, u, d, y).slice()), (_ -= m))
        }
        this.hitDetectionImageData_ = Mm(n, c, this.renderedFeatures_, h.getStyleFunction(), l, r, o)
      }
      e(bm(t, this.renderedFeatures_, this.hitDetectionImageData_))
    })
  }
  forEachFeatureAtCoordinate(t, e, n, i, r) {
    if (!this.replayGroup_) return
    const o = e.viewState.resolution,
      a = e.viewState.rotation,
      l = this.getLayer(),
      h = {},
      c = function (f, g, _) {
        const m = $(f),
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
    const i = t.viewHints[kt.ANIMATING],
      r = t.viewHints[kt.INTERACTING],
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
    _ === void 0 && (_ = Pm)
    const m = h.center.slice(),
      p = zi(l, g * u),
      y = p.slice(),
      E = [p.slice()],
      x = c.getExtent()
    if (n.getWrapX() && c.canWrapX() && !Pn(x, t.extent)) {
      const I = Gt(x),
        A = Math.max(Gt(p) / 2, I)
      ;((p[0] = x[0] - A), (p[2] = x[2] + A), Wg(m, c))
      const R = ac(E[0], c)
      R[0] < x[0] && R[2] < x[2]
        ? E.push([R[0] + I, R[1], R[2] + I, R[3]])
        : R[0] > x[0] && R[2] > x[2] && E.push([R[0] - I, R[1], R[2] - I, R[3]])
    }
    if (
      this.ready &&
      this.renderedResolution_ == u &&
      this.renderedRevision_ == f &&
      this.renderedRenderOrder_ == _ &&
      Pn(this.wrappedRenderedExtent_, p)
    )
      return (
        ln(this.renderedExtent_, y) || ((this.hitDetectionImageData_ = null), (this.renderedExtent_ = y)),
        (this.renderedCenter_ = m),
        (this.replayGroupChanged = !1),
        !0
      )
    this.replayGroup_ = null
    const C = new Rl(ho(u, d), p, u, d)
    let S
    this.getLayer().getDeclutter() && (S = new Rl(ho(u, d), p, u, d))
    let v
    for (let I = 0, A = E.length; I < A; ++I) n.loadFeatures(E[I], u, c)
    const T = Am(u, d)
    let b = !0
    const F = I => {
        let A
        const R = I.getStyleFunction() || e.getStyleFunction()
        if ((R && (A = R(I, u)), A)) {
          const O = this.renderFeature(I, T, A, C, v, S)
          b = b && !O
        }
      },
      G = or(p),
      j = n.getFeaturesInExtent(G)
    _ && j.sort(_)
    for (let I = 0, A = j.length; I < A; ++I) F(j[I])
    ;((this.renderedFeatures_ = j), (this.ready = b))
    const N = C.finish(),
      nt = new Ml(p, u, d, n.getOverlaps(), N, e.getRenderBuffer())
    return (
      S && (this.declutterExecutorGroup = new Ml(p, u, d, n.getOverlaps(), S.finish(), e.getRenderBuffer())),
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
        a = bl(i, t, n[l], e, this.boundHandleStyleImageChange_, r, o) || a
    else a = bl(i, t, n, e, this.boundHandleStyleImageChange_, r, o)
    return a
  }
}
class ra extends dm {
  constructor(t) {
    super(t)
  }
  createRenderer() {
    return new Wm(this)
  }
}
class Us {
  constructor(t) {
    ;((this.rbush_ = new Oc(t)), (this.items_ = {}))
  }
  insert(t, e) {
    const n = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3], value: e }
    ;(this.rbush_.insert(n), (this.items_[$(e)] = n))
  }
  load(t, e) {
    const n = new Array(e.length)
    for (let i = 0, r = e.length; i < r; i++) {
      const o = t[i],
        a = e[i],
        l = { minX: o[0], minY: o[1], maxX: o[2], maxY: o[3], value: a }
      ;((n[i] = l), (this.items_[$(a)] = l))
    }
    this.rbush_.load(n)
  }
  remove(t) {
    const e = $(t),
      n = this.items_[e]
    return (delete this.items_[e], this.rbush_.remove(n) !== null)
  }
  update(t, e) {
    const n = this.items_[$(e)],
      i = [n.minX, n.minY, n.maxX, n.maxY]
    Hh(i, t) || (this.remove(e), this.insert(t, e))
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
class Ym extends we {
  constructor(t) {
    ;(super(),
      (this.projection = Rt(t.projection)),
      (this.attributions_ = Ll(t.attributions)),
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
    ;((this.attributions_ = Ll(t)), this.changed())
  }
  setState(t) {
    ;((this.state_ = t), this.changed())
  }
}
function Ll(s) {
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
const _t = {
  ADDFEATURE: 'addfeature',
  CHANGEFEATURE: 'changefeature',
  CLEAR: 'clear',
  REMOVEFEATURE: 'removefeature',
  FEATURESLOADSTART: 'featuresloadstart',
  FEATURESLOADEND: 'featuresloadend',
  FEATURESLOADERROR: 'featuresloaderror',
}
function Bm(s, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]]
}
let Um = !1
function Vm(s, t, e, n, i, r, o) {
  const a = new XMLHttpRequest()
  ;(a.open('GET', typeof s == 'function' ? s(e, n, i) : s, !0),
    t.getType() == 'arraybuffer' && (a.responseType = 'arraybuffer'),
    (a.withCredentials = Um),
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
function Pl(s, t) {
  return function (e, n, i, r, o) {
    const a = this
    Vm(
      s,
      t,
      e,
      n,
      i,
      function (l, h) {
        ;(a.addFeatures(l), r !== void 0 && r(l))
      },
      o || Ci,
    )
  }
}
class Pe extends Et {
  constructor(t, e, n) {
    ;(super(t), (this.feature = e), (this.features = n))
  }
}
class oa extends Ym {
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
      (this.loader_ = Ci),
      (this.format_ = t.format),
      (this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps),
      (this.url_ = t.url),
      t.loader !== void 0
        ? (this.loader_ = t.loader)
        : this.url_ !== void 0 && (tt(this.format_, 7), (this.loader_ = Pl(this.url_, this.format_))),
      (this.strategy_ = t.strategy !== void 0 ? t.strategy : Bm))
    const e = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0
    ;((this.featuresRtree_ = e ? new Us() : null),
      (this.loadedExtentsRtree_ = new Us()),
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
    const e = $(t)
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
    this.dispatchEvent(new Pe(_t.ADDFEATURE, t))
  }
  setupChangeEvents_(t, e) {
    this.featureChangeKeys_[t] = [
      pt(e, dt.CHANGE, this.handleFeatureChange_, this),
      pt(e, Zh.PROPERTYCHANGE, this.handleFeatureChange_, this),
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
        l = $(a)
      this.addToIndex_(l, a) && n.push(a)
    }
    for (let r = 0, o = n.length; r < o; r++) {
      const a = n[r],
        l = $(a)
      this.setupChangeEvents_(l, a)
      const h = a.getGeometry()
      if (h) {
        const c = h.getExtent()
        ;(e.push(c), i.push(a))
      } else this.nullGeometryFeatures_[l] = a
    }
    if ((this.featuresRtree_ && this.featuresRtree_.load(e, i), this.hasListener(_t.ADDFEATURE)))
      for (let r = 0, o = n.length; r < o; r++) this.dispatchEvent(new Pe(_t.ADDFEATURE, n[r]))
  }
  bindFeaturesCollection_(t) {
    let e = !1
    ;(this.addEventListener(_t.ADDFEATURE, function (n) {
      e || ((e = !0), t.push(n.feature), (e = !1))
    }),
      this.addEventListener(_t.REMOVEFEATURE, function (n) {
        e || ((e = !0), t.remove(n.feature), (e = !1))
      }),
      t.addEventListener(ne.ADD, n => {
        e || ((e = !0), this.addFeature(n.element), (e = !1))
      }),
      t.addEventListener(ne.REMOVE, n => {
        e || ((e = !0), this.removeFeature(n.element), (e = !1))
      }),
      (this.featuresCollection_ = t))
  }
  clear(t) {
    if (t) {
      for (const n in this.featureChangeKeys_) this.featureChangeKeys_[n].forEach(Lt)
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
    const e = new Pe(_t.CLEAR)
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
          Vn(this.nullGeometryFeatures_) || se(t, Object.values(this.nullGeometryFeatures_))),
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
      const i = Ig(t, e)
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
      (e = e || Un),
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
      n = $(e),
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
    ;(this.changed(), this.dispatchEvent(new Pe(_t.CHANGEFEATURE, e)))
  }
  hasFeature(t) {
    const e = t.getId()
    return e !== void 0 ? e in this.idIndex_ : $(t) in this.uidIndex_
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
        return Pn(c.extent, l)
      }) ||
        (++this.loadingExtentsCount_,
        this.dispatchEvent(new Pe(_t.FEATURESLOADSTART)),
        this.loader_.call(
          this,
          l,
          e,
          n,
          c => {
            ;(--this.loadingExtentsCount_, this.dispatchEvent(new Pe(_t.FEATURESLOADEND, void 0, c)))
          },
          () => {
            ;(--this.loadingExtentsCount_, this.dispatchEvent(new Pe(_t.FEATURESLOADERROR)))
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
      if (Hh(i.extent, t)) return ((n = i), !0)
    }),
      n && e.remove(n))
  }
  removeFeature(t) {
    if (!t) return
    const e = $(t)
    ;(e in this.nullGeometryFeatures_
      ? delete this.nullGeometryFeatures_[e]
      : this.featuresRtree_ && this.featuresRtree_.remove(t),
      this.removeFeatureInternal(t) && this.changed())
  }
  removeFeatureInternal(t) {
    const e = $(t),
      n = this.featureChangeKeys_[e]
    if (!n) return
    ;(n.forEach(Lt), delete this.featureChangeKeys_[e])
    const i = t.getId()
    return (
      i !== void 0 && delete this.idIndex_[i.toString()],
      delete this.uidIndex_[e],
      this.dispatchEvent(new Pe(_t.REMOVEFEATURE, t)),
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
    ;(tt(this.format_, 7), (this.url_ = t), this.setLoader(Pl(t, this.format_)))
  }
}
class Zm extends Et {
  constructor(t, e, n) {
    ;(super(t), (this.map = e), (this.frameState = n !== void 0 ? n : null))
  }
}
class Km extends Zm {
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
    DBLCLICK: dt.DBLCLICK,
    POINTERDRAG: 'pointerdrag',
    POINTERMOVE: 'pointermove',
    POINTERDOWN: 'pointerdown',
    POINTERUP: 'pointerup',
  },
  Vs = { ACTIVE: 'active' }
class $m extends we {
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
    return this.get(Vs.ACTIVE)
  }
  getMap() {
    return this.map_
  }
  handleEvent(t) {
    return !0
  }
  setActive(t) {
    this.set(Vs.ACTIVE, t)
  }
  setMap(t) {
    this.map_ = t
  }
}
class dr extends $m {
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
const qm = function (s) {
    const t = s.originalEvent
    return t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  Zs = Un,
  Hm = zo,
  Jm = function (s) {
    return s.type == ht.SINGLECLICK
  },
  Qm = function (s) {
    const t = s.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey
  },
  t0 = function (s) {
    const t = s.originalEvent
    return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey
  },
  e0 = function (s) {
    const t = s.originalEvent
    return (tt(t !== void 0, 56), t.isPrimary && t.button === 0)
  }
class jc {
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
    return P()
  }
  readFeature(t, e) {
    return P()
  }
  readFeatures(t, e) {
    return P()
  }
  readGeometry(t, e) {
    return P()
  }
  readProjection(t) {
    return P()
  }
  writeFeature(t, e) {
    return P()
  }
  writeFeatures(t, e) {
    return P()
  }
  writeGeometry(t, e) {
    return P()
  }
}
function Ks(s, t, e) {
  const n = e ? Rt(e.featureProjection) : null,
    i = e ? Rt(e.dataProjection) : null
  let r
  if (
    (n && i && !qg(n, i) ? (r = (t ? s.clone() : s).transform(t ? n : i, t ? i : n)) : (r = s),
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
class n0 extends jc {
  constructor() {
    super()
  }
  getType() {
    return 'json'
  }
  readFeature(t, e) {
    return this.readFeatureFromObject(ds(t), this.getReadOptions(t, e))
  }
  readFeatures(t, e) {
    return this.readFeaturesFromObject(ds(t), this.getReadOptions(t, e))
  }
  readFeatureFromObject(t, e) {
    return P()
  }
  readFeaturesFromObject(t, e) {
    return P()
  }
  readGeometry(t, e) {
    return this.readGeometryFromObject(ds(t), this.getReadOptions(t, e))
  }
  readGeometryFromObject(t, e) {
    return P()
  }
  readProjection(t) {
    return this.readProjectionFromObject(ds(t))
  }
  readProjectionFromObject(t) {
    return P()
  }
  writeFeature(t, e) {
    return JSON.stringify(this.writeFeatureObject(t, e))
  }
  writeFeatureObject(t, e) {
    return P()
  }
  writeFeatures(t, e) {
    return JSON.stringify(this.writeFeaturesObject(t, e))
  }
  writeFeaturesObject(t, e) {
    return P()
  }
  writeGeometry(t, e) {
    return JSON.stringify(this.writeGeometryObject(t, e))
  }
  writeGeometryObject(t, e) {
    return P()
  }
}
function ds(s) {
  if (typeof s == 'string') {
    const t = JSON.parse(s)
    return t || null
  }
  return s !== null ? s : null
}
class sn extends Be {
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
        ;(l === 0 && (i = c.getLayout()), se(o, c.getFlatCoordinates()), a.push(o.length))
      }
      ;(this.setFlatCoordinates(i, o), (this.ends_ = a))
    }
  }
  appendLineString(t) {
    ;(this.flatCoordinates
      ? se(this.flatCoordinates, t.getFlatCoordinates().slice())
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
          ((this.maxDelta_ = Math.sqrt(qo(this.flatCoordinates, 0, this.ends_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        Jo(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !1, t, e, n, i))
  }
  getCoordinateAtM(t, e, n) {
    return (this.layout != 'XYM' && this.layout != 'XYZM') || this.flatCoordinates.length === 0
      ? null
      : ((e = e !== void 0 ? e : !1),
        (n = n !== void 0 ? n : !1),
        x_(this.flatCoordinates, 0, this.ends_, this.stride, t, e, n))
  }
  getCoordinates() {
    return Si(this.flatCoordinates, 0, this.ends_, this.stride)
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
      i = []
    let r = 0
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o],
        h = new Zt(t.slice(r, l), n)
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
        h = Tc(e, n, l, r, 0.5)
      ;(se(t, h), (n = l))
    }
    return t
  }
  getSimplifiedGeometryInternal(t) {
    const e = [],
      n = []
    return ((e.length = r_(this.flatCoordinates, 0, this.ends_, this.stride, t, e, 0, n)), new sn(e, 'XY', n))
  }
  getType() {
    return 'MultiLineString'
  }
  intersectsExtent(t) {
    return d_(this.flatCoordinates, 0, this.ends_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []))
    const n = Qo(this.flatCoordinates, 0, t, this.stride, this.ends_)
    ;((this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1]), this.changed())
  }
}
class Qn extends Be {
  constructor(t, e) {
    ;(super(), e && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e))
  }
  appendPoint(t) {
    ;(this.flatCoordinates
      ? se(this.flatCoordinates, t.getFlatCoordinates())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.changed())
  }
  clone() {
    const t = new Qn(this.flatCoordinates.slice(), this.layout)
    return (t.applyProperties(this), t)
  }
  closestPointXY(t, e, n, i) {
    if (i < hn(this.getExtent(), t, e)) return i
    const r = this.flatCoordinates,
      o = this.stride
    for (let a = 0, l = r.length; a < l; a += o) {
      const h = me(t, e, r[a], r[a + 1])
      if (h < i) {
        i = h
        for (let c = 0; c < o; ++c) n[c] = r[a + c]
        n.length = o
      }
    }
    return i
  }
  getCoordinates() {
    return De(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
  }
  getPoint(t) {
    const e = this.flatCoordinates ? this.flatCoordinates.length / this.stride : 0
    return t < 0 || e <= t
      ? null
      : new zt(this.flatCoordinates.slice(t * this.stride, (t + 1) * this.stride), this.layout)
  }
  getPoints() {
    const t = this.flatCoordinates,
      e = this.layout,
      n = this.stride,
      i = []
    for (let r = 0, o = t.length; r < o; r += n) {
      const a = new zt(t.slice(r, r + n), e)
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
      if (Yo(t, o, a)) return !0
    }
    return !1
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = ar(this.flatCoordinates, 0, t, this.stride)),
      this.changed())
  }
}
function i0(s, t, e, n) {
  const i = []
  let r = ae()
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o]
    ;((r = qh(s, t, l[0], n)), i.push((r[0] + r[2]) / 2, (r[1] + r[3]) / 2), (t = l[l.length - 1]))
  }
  return i
}
class rn extends Be {
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
        ;(se(o, c.getFlatCoordinates()), a.push(d))
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
      ;(se(this.flatCoordinates, t.getFlatCoordinates()), (e = t.getEnds().slice()))
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
          ((this.maxDelta_ = Math.sqrt(n_(this.flatCoordinates, 0, this.endss_, this.stride, 0))),
          (this.maxDeltaRevision_ = this.getRevision())),
        i_(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, this.maxDelta_, !0, t, e, n, i))
  }
  containsXY(t, e) {
    return c_(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t, e)
  }
  getArea() {
    return l_(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride)
  }
  getCoordinates(t) {
    let e
    return (
      t !== void 0
        ? ((e = this.getOrientedFlatCoordinates().slice()), ol(e, 0, this.endss_, this.stride, t))
        : (e = this.flatCoordinates),
      so(e, 0, this.endss_, this.stride)
    )
  }
  getEndss() {
    return this.endss_
  }
  getFlatInteriorPoints() {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      const t = i0(this.flatCoordinates, 0, this.endss_, this.stride)
      ;((this.flatInteriorPoints_ = u_(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t)),
        (this.flatInteriorPointsRevision_ = this.getRevision()))
    }
    return this.flatInteriorPoints_
  }
  getInteriorPoints() {
    return new Qn(this.getFlatInteriorPoints().slice(), 'XYM')
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates
      ;(m_(t, 0, this.endss_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = ol(
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
      (e.length = a_(this.flatCoordinates, 0, this.endss_, this.stride, Math.sqrt(t), e, 0, n)),
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
    return g_(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t)
  }
  setCoordinates(t, e) {
    ;(this.setLayout(e, t, 3), this.flatCoordinates || (this.flatCoordinates = []))
    const n = s_(this.flatCoordinates, 0, t, this.stride, this.endss_)
    if (n.length === 0) this.flatCoordinates.length = 0
    else {
      const i = n[n.length - 1]
      this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1]
    }
    this.changed()
  }
}
class We extends _c {
  constructor(t) {
    ;(super(), (this.geometries_ = t || null), (this.changeEventsKeys_ = []), this.listenGeometriesChange_())
  }
  unlistenGeometriesChange_() {
    ;(this.changeEventsKeys_.forEach(Lt), (this.changeEventsKeys_.length = 0))
  }
  listenGeometriesChange_() {
    if (this.geometries_)
      for (let t = 0, e = this.geometries_.length; t < e; ++t)
        this.changeEventsKeys_.push(pt(this.geometries_[t], dt.CHANGE, this.changed, this))
  }
  clone() {
    const t = new We(null)
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
    Bo(t)
    const e = this.geometries_
    for (let n = 0, i = e.length; n < i; ++n) Jh(t, e[n].getExtent())
    return t
  }
  getGeometries() {
    return Al(this.geometries_)
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
      const r = new We(null)
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
    n || (n = Zn(this.getExtent()))
    const i = this.geometries_
    for (let r = 0, o = i.length; r < o; ++r) i[r].scale(t, e, n)
    this.changed()
  }
  setGeometries(t) {
    this.setGeometriesArray(Al(t))
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
function Al(s) {
  const t = []
  for (let e = 0, n = s.length; e < n; ++e) t.push(s[e].clone())
  return t
}
class li extends n0 {
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
    const i = co(n.geometry, e),
      r = new yt()
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
    return co(t, e)
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
    return (o && ((n.geometry = uo(o, e)), delete r[t.getGeometryName()]), Vn(r) || (n.properties = r), n)
  }
  writeFeaturesObject(t, e) {
    e = this.adaptOptions(e)
    const n = []
    for (let i = 0, r = t.length; i < r; ++i) n.push(this.writeFeatureObject(t[i], e))
    return { type: 'FeatureCollection', features: n }
  }
  writeGeometryObject(t, e) {
    return uo(t, this.adaptOptions(e))
  }
}
function co(s, t) {
  if (!s) return null
  let e
  switch (s.type) {
    case 'Point': {
      e = r0(s)
      break
    }
    case 'LineString': {
      e = o0(s)
      break
    }
    case 'Polygon': {
      e = c0(s)
      break
    }
    case 'MultiPoint': {
      e = l0(s)
      break
    }
    case 'MultiLineString': {
      e = a0(s)
      break
    }
    case 'MultiPolygon': {
      e = h0(s)
      break
    }
    case 'GeometryCollection': {
      e = s0(s)
      break
    }
    default:
      throw new Error('Unsupported GeoJSON type: ' + s.type)
  }
  return Ks(e, !1, t)
}
function s0(s, t) {
  const e = s.geometries.map(function (n) {
    return co(n, t)
  })
  return new We(e)
}
function r0(s) {
  return new zt(s.coordinates)
}
function o0(s) {
  return new Zt(s.coordinates)
}
function a0(s) {
  return new sn(s.coordinates)
}
function l0(s) {
  return new Qn(s.coordinates)
}
function h0(s) {
  return new rn(s.coordinates)
}
function c0(s) {
  return new Xt(s.coordinates)
}
function uo(s, t) {
  s = Ks(s, !0, t)
  const e = s.getType()
  let n
  switch (e) {
    case 'Point': {
      n = m0(s)
      break
    }
    case 'LineString': {
      n = d0(s)
      break
    }
    case 'Polygon': {
      n = p0(s, t)
      break
    }
    case 'MultiPoint': {
      n = g0(s)
      break
    }
    case 'MultiLineString': {
      n = f0(s)
      break
    }
    case 'MultiPolygon': {
      n = _0(s, t)
      break
    }
    case 'GeometryCollection': {
      n = u0(s, t)
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
function u0(s, t) {
  return (
    (t = Object.assign({}, t)),
    delete t.featureProjection,
    {
      type: 'GeometryCollection',
      geometries: s.getGeometriesArray().map(function (n) {
        return uo(n, t)
      }),
    }
  )
}
function d0(s, t) {
  return { type: 'LineString', coordinates: s.getCoordinates() }
}
function f0(s, t) {
  return { type: 'MultiLineString', coordinates: s.getCoordinates() }
}
function g0(s, t) {
  return { type: 'MultiPoint', coordinates: s.getCoordinates() }
}
function _0(s, t) {
  let e
  return (t && (e = t.rightHanded), { type: 'MultiPolygon', coordinates: s.getCoordinates(e) })
}
function m0(s, t) {
  return { type: 'Point', coordinates: s.getCoordinates() }
}
function p0(s, t) {
  let e
  return (t && (e = t.rightHanded), { type: 'Polygon', coordinates: s.getCoordinates(e) })
}
class y0 extends jc {
  constructor() {
    super()
  }
  getType() {
    return 'text'
  }
  readFeature(t, e) {
    return this.readFeatureFromText(fs(t), this.adaptOptions(e))
  }
  readFeatureFromText(t, e) {
    return P()
  }
  readFeatures(t, e) {
    return this.readFeaturesFromText(fs(t), this.adaptOptions(e))
  }
  readFeaturesFromText(t, e) {
    return P()
  }
  readGeometry(t, e) {
    return this.readGeometryFromText(fs(t), this.adaptOptions(e))
  }
  readGeometryFromText(t, e) {
    return P()
  }
  readProjection(t) {
    return this.readProjectionFromText(fs(t))
  }
  readProjectionFromText(t) {
    return this.dataProjection
  }
  writeFeature(t, e) {
    return this.writeFeatureText(t, this.adaptOptions(e))
  }
  writeFeatureText(t, e) {
    return P()
  }
  writeFeatures(t, e) {
    return this.writeFeaturesText(t, this.adaptOptions(e))
  }
  writeFeaturesText(t, e) {
    return P()
  }
  writeGeometry(t, e) {
    return this.writeGeometryText(t, this.adaptOptions(e))
  }
  writeGeometryText(t, e) {
    return P()
  }
}
function fs(s) {
  return typeof s == 'string' ? s : ''
}
class Yi extends Be {
  constructor(t, e, n) {
    ;(super(),
      n !== void 0 && e === void 0
        ? this.setFlatCoordinates(n, t)
        : ((e = e || 0), this.setCenterAndRadius(t, e, n)))
  }
  clone() {
    const t = new Yi(this.flatCoordinates.slice(), void 0, this.layout)
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
    if (jt(t, e)) {
      const n = this.getCenter()
      return (t[0] <= n[0] && t[2] >= n[0]) || (t[1] <= n[1] && t[3] >= n[1])
        ? !0
        : ec(t, this.intersectsCoordinate.bind(this))
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
    let r = mc(i, 0, t, this.stride)
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
    ;(this.setCenter(Ko(n, 0, n.length, i, t, e, n)), this.changed())
  }
}
Yi.prototype.transform
const E0 = { POINT: zt, LINESTRING: Zt, POLYGON: Xt, MULTIPOINT: Qn, MULTILINESTRING: sn, MULTIPOLYGON: rn },
  Gc = 'EMPTY',
  zc = 'Z',
  Xc = 'M',
  x0 = 'ZM',
  W = { START: 0, TEXT: 1, LEFT_PAREN: 2, RIGHT_PAREN: 3, NUMBER: 4, COMMA: 5, EOF: 6 },
  C0 = {
    Point: 'POINT',
    LineString: 'LINESTRING',
    Polygon: 'POLYGON',
    MultiPoint: 'MULTIPOINT',
    MultiLineString: 'MULTILINESTRING',
    MultiPolygon: 'MULTIPOLYGON',
    GeometryCollection: 'GEOMETRYCOLLECTION',
    Circle: 'CIRCLE',
  }
class w0 {
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
    if (t == '(') i = W.LEFT_PAREN
    else if (t == ',') i = W.COMMA
    else if (t == ')') i = W.RIGHT_PAREN
    else if (this.isNumeric_(t) || t == '-') ((i = W.NUMBER), (n = this.readNumber_()))
    else if (this.isAlpha_(t)) ((i = W.TEXT), (n = this.readText_()))
    else {
      if (this.isWhiteSpace_(t)) return this.nextToken()
      if (t === '') i = W.EOF
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
class S0 {
  constructor(t) {
    ;((this.lexer_ = t), (this.token_ = { position: 0, type: W.START }), (this.layout_ = 'XY'))
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
    if (this.isTokenType(W.TEXT)) {
      const n = e.value
      ;(n === zc ? (t = 'XYZ') : n === Xc ? (t = 'XYM') : n === x0 && (t = 'XYZM'),
        t !== 'XY' && this.consume_())
    }
    return t
  }
  parseGeometryCollectionText_() {
    if (this.match(W.LEFT_PAREN)) {
      const t = []
      do t.push(this.parseGeometry_())
      while (this.match(W.COMMA))
      if (this.match(W.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parsePointText_() {
    if (this.match(W.LEFT_PAREN)) {
      const t = this.parsePoint_()
      if (this.match(W.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseLineStringText_() {
    if (this.match(W.LEFT_PAREN)) {
      const t = this.parsePointList_()
      if (this.match(W.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parsePolygonText_() {
    if (this.match(W.LEFT_PAREN)) {
      const t = this.parseLineStringTextList_()
      if (this.match(W.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseMultiPointText_() {
    if (this.match(W.LEFT_PAREN)) {
      let t
      if (
        (this.token_.type == W.LEFT_PAREN ? (t = this.parsePointTextList_()) : (t = this.parsePointList_()),
        this.match(W.RIGHT_PAREN))
      )
        return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseMultiLineStringText_() {
    if (this.match(W.LEFT_PAREN)) {
      const t = this.parseLineStringTextList_()
      if (this.match(W.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parseMultiPolygonText_() {
    if (this.match(W.LEFT_PAREN)) {
      const t = this.parsePolygonTextList_()
      if (this.match(W.RIGHT_PAREN)) return t
    }
    throw new Error(this.formatErrorMessage_())
  }
  parsePoint_() {
    const t = [],
      e = this.layout_.length
    for (let n = 0; n < e; ++n) {
      const i = this.token_
      if (this.match(W.NUMBER)) t.push(i.value)
      else break
    }
    if (t.length == e) return t
    throw new Error(this.formatErrorMessage_())
  }
  parsePointList_() {
    const t = [this.parsePoint_()]
    for (; this.match(W.COMMA); ) t.push(this.parsePoint_())
    return t
  }
  parsePointTextList_() {
    const t = [this.parsePointText_()]
    for (; this.match(W.COMMA); ) t.push(this.parsePointText_())
    return t
  }
  parseLineStringTextList_() {
    const t = [this.parseLineStringText_()]
    for (; this.match(W.COMMA); ) t.push(this.parseLineStringText_())
    return t
  }
  parsePolygonTextList_() {
    const t = [this.parsePolygonText_()]
    for (; this.match(W.COMMA); ) t.push(this.parsePolygonText_())
    return t
  }
  isEmptyGeometry_() {
    const t = this.isTokenType(W.TEXT) && this.token_.value == Gc
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
    if (this.match(W.TEXT)) {
      const e = t.value
      this.layout_ = this.parseGeometryLayout_()
      const n = this.isEmptyGeometry_()
      if (e == 'GEOMETRYCOLLECTION') {
        if (n) return new We([])
        const o = this.parseGeometryCollectionText_()
        return new We(o)
      }
      const i = E0[e]
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
class gs extends y0 {
  constructor(t) {
    ;(super(), (t = t || {}), (this.splitCollection_ = t.splitCollection !== void 0 ? t.splitCollection : !1))
  }
  parse_(t) {
    const e = new w0(t)
    return new S0(e).parse()
  }
  readFeatureFromText(t, e) {
    const n = this.readGeometryFromText(t, e),
      i = new yt()
    return (i.setGeometry(n), i)
  }
  readFeaturesFromText(t, e) {
    let n = []
    const i = this.readGeometryFromText(t, e)
    this.splitCollection_ && i.getType() == 'GeometryCollection' ? (n = i.getGeometriesArray()) : (n = [i])
    const r = []
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = new yt()
      ;(l.setGeometry(n[o]), r.push(l))
    }
    return r
  }
  readGeometryFromText(t, e) {
    const n = this.parse_(t)
    return Ks(n, !1, e)
  }
  writeFeatureText(t, e) {
    const n = t.getGeometry()
    return n ? this.writeGeometryText(n, e) : ''
  }
  writeFeaturesText(t, e) {
    if (t.length == 1) return this.writeFeatureText(t[0], e)
    const n = []
    for (let r = 0, o = t.length; r < o; ++r) n.push(t[r].getGeometry())
    const i = new We(n)
    return this.writeGeometryText(i, e)
  }
  writeGeometryText(t, e) {
    return Bc(Ks(t, !0, e))
  }
}
function Wc(s) {
  const t = s.getCoordinates()
  return t.length === 0 ? '' : t.join(' ')
}
function R0(s) {
  const t = [],
    e = s.getPoints()
  for (let n = 0, i = e.length; n < i; ++n) t.push('(' + Wc(e[n]) + ')')
  return t.join(',')
}
function T0(s) {
  const t = [],
    e = s.getGeometries()
  for (let n = 0, i = e.length; n < i; ++n) t.push(Bc(e[n]))
  return t.join(',')
}
function aa(s) {
  const t = s.getCoordinates(),
    e = []
  for (let n = 0, i = t.length; n < i; ++n) e.push(t[n].join(' '))
  return e.join(',')
}
function v0(s) {
  const t = [],
    e = s.getLineStrings()
  for (let n = 0, i = e.length; n < i; ++n) t.push('(' + aa(e[n]) + ')')
  return t.join(',')
}
function Yc(s) {
  const t = [],
    e = s.getLinearRings()
  for (let n = 0, i = e.length; n < i; ++n) t.push('(' + aa(e[n]) + ')')
  return t.join(',')
}
function I0(s) {
  const t = [],
    e = s.getPolygons()
  for (let n = 0, i = e.length; n < i; ++n) t.push('(' + Yc(e[n]) + ')')
  return t.join(',')
}
function M0(s) {
  const t = s.getLayout()
  let e = ''
  return ((t === 'XYZ' || t === 'XYZM') && (e += zc), (t === 'XYM' || t === 'XYZM') && (e += Xc), e)
}
const b0 = {
  Point: Wc,
  LineString: aa,
  Polygon: Yc,
  MultiPoint: R0,
  MultiLineString: v0,
  MultiPolygon: I0,
  GeometryCollection: T0,
}
function Bc(s) {
  const t = s.getType(),
    e = b0[t],
    n = e(s)
  let i = C0[t]
  if (typeof s.getFlatCoordinates == 'function') {
    const r = M0(s)
    r.length > 0 && (i += ' ' + r)
  }
  return n.length === 0 ? i + ' ' + Gc : i + '(' + n + ')'
}
const _s = { DRAWSTART: 'drawstart', DRAWEND: 'drawend', DRAWABORT: 'drawabort' }
class ms extends Et {
  constructor(t, e) {
    ;(super(t), (this.feature = e))
  }
}
function L0(s, t) {
  const e = []
  for (let n = 0; n < t.length; ++n) {
    const r = t[n].getGeometry()
    Uc(s, r, e)
  }
  return e
}
function ps(s, t) {
  return me(s[0], s[1], t[0], t[1])
}
function On(s, t) {
  const e = s.length
  return t < 0 ? s[t + e] : t >= e ? s[t - e] : s[t]
}
function ys(s, t, e) {
  let n, i
  t < e ? ((n = t), (i = e)) : ((n = e), (i = t))
  const r = Math.ceil(n),
    o = Math.floor(i)
  if (r > o) {
    const l = Dn(s, n),
      h = Dn(s, i)
    return ps(l, h)
  }
  let a = 0
  if (n < r) {
    const l = Dn(s, n),
      h = On(s, r)
    a += ps(l, h)
  }
  if (o < i) {
    const l = On(s, o),
      h = Dn(s, i)
    a += ps(l, h)
  }
  for (let l = r; l < o - 1; ++l) {
    const h = On(s, l),
      c = On(s, l + 1)
    a += ps(h, c)
  }
  return a
}
function Uc(s, t, e) {
  if (t instanceof Zt) {
    Es(s, t.getCoordinates(), !1, e)
    return
  }
  if (t instanceof sn) {
    const n = t.getCoordinates()
    for (let i = 0, r = n.length; i < r; ++i) Es(s, n[i], !1, e)
    return
  }
  if (t instanceof Xt) {
    const n = t.getCoordinates()
    for (let i = 0, r = n.length; i < r; ++i) Es(s, n[i], !0, e)
    return
  }
  if (t instanceof rn) {
    const n = t.getCoordinates()
    for (let i = 0, r = n.length; i < r; ++i) {
      const o = n[i]
      for (let a = 0, l = o.length; a < l; ++a) Es(s, o[a], !0, e)
    }
    return
  }
  if (t instanceof We) {
    const n = t.getGeometries()
    for (let i = 0; i < n.length; ++i) Uc(s, n[i], e)
    return
  }
}
const Fr = { index: -1, endIndex: NaN }
function P0(s, t, e, n) {
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
        E = Vc(i, r, p, y)
      E.squaredDistance < g && ((g = E.squaredDistance), (_ = m + E.along))
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
    Ns(d, t.startPx) > n && (c = !1)
  }
  if (c) {
    const u = h.coordinates,
      d = u.length,
      f = h.startIndex,
      g = l
    if (f < g) {
      const _ = ys(u, f, g)
      ys(u, f, g - d) < _ && (l -= d)
    } else {
      const _ = ys(u, f, g)
      ys(u, f, g + d) < _ && (l += d)
    }
  }
  return ((Fr.index = a), (Fr.endIndex = l), Fr)
}
function Es(s, t, e, n) {
  const i = s[0],
    r = s[1]
  for (let o = 0, a = t.length - 1; o < a; ++o) {
    const l = t[o],
      h = t[o + 1],
      c = Vc(i, r, l, h)
    if (c.squaredDistance === 0) {
      const u = o + c.along
      n.push({ coordinates: t, ring: e, startIndex: u, endIndex: u })
      return
    }
  }
}
const Or = { along: 0, squaredDistance: 0 }
function Vc(s, t, e, n) {
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
      ((c = ut(((s - i) * l + (t - r) * h) / (l * l + h * h), 0, 1)), (u += l * c), (d += h * c)),
    (Or.along = c),
    (Or.squaredDistance = cc(me(s, t, u, d), 10)),
    Or
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
class A0 extends dr {
  constructor(t) {
    const e = t
    ;(e.stopDown || (e.stopDown = zo),
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
      (this.mode_ = O0(this.type_)),
      (this.stopClick_ = !!t.stopClick),
      (this.minPoints_ = t.minPoints ? t.minPoints : this.mode_ === 'Polygon' ? 3 : 2),
      (this.maxPoints_ = this.mode_ === 'Circle' ? 2 : t.maxPoints ? t.maxPoints : 1 / 0),
      (this.finishCondition_ = t.finishCondition ? t.finishCondition : Un),
      (this.geometryLayout_ = t.geometryLayout ? t.geometryLayout : 'XY'))
    let n = t.geometryFunction
    if (!n) {
      const i = this.mode_
      if (i === 'Circle')
        n = function (r, o, a) {
          const l = o || new Yi([NaN, NaN]),
            h = H(r[0]),
            c = pe(h, H(r[r.length - 1]))
          return (l.setCenterAndRadius(h, Math.sqrt(c), this.geometryLayout_), l)
        }
      else {
        let r
        ;(i === 'Point' ? (r = zt) : i === 'LineString' ? (r = Zt) : i === 'Polygon' && (r = Xt),
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
      (this.overlay_ = new ra({
        source: new oa({ useSpatialIndex: !1, wrapX: t.wrapX ? t.wrapX : !1 }),
        style: t.style ? t.style : F0(),
        updateWhileInteracting: !0,
      })),
      (this.geometryName_ = t.geometryName),
      (this.condition_ = t.condition ? t.condition : Qm),
      this.freehandCondition_,
      t.freehand
        ? (this.freehandCondition_ = Zs)
        : (this.freehandCondition_ = t.freehandCondition ? t.freehandCondition : t0),
      this.traceCondition_,
      this.setTrace(t.trace || !1),
      (this.traceState_ = { active: !1 }),
      (this.traceSource_ = t.traceSource || t.source || null),
      this.addChangeListener(Vs.ACTIVE, this.updateState_))
  }
  setTrace(t) {
    let e
    ;(t ? (t === !0 ? (e = Zs) : (e = t)) : (e = Hm), (this.traceCondition_ = e))
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
              this.handlePointerMove_(new Km(ht.POINTERMOVE, t.map, t.originalEvent, !1, t.frameState))
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
      r = Mt([n, i]),
      o = this.traceSource_.getFeaturesInExtent(r)
    if (o.length === 0) return
    const a = L0(t.coordinate, o)
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
    if (!e.active || (e.targetIndex === -1 && Ns(e.startPx, t.pixel) < this.snapTolerance_)) return
    const n = P0(t.coordinate, e, this.getMap(), this.snapTolerance_)
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
      : ((this.sketchPoint_ = new yt(new zt(t))), this.updateSketchFeatures_())
  }
  createOrUpdateCustomSketchLine_(t) {
    this.sketchLine_ || (this.sketchLine_ = new yt())
    const e = t.getLinearRing(0)
    let n = this.sketchLine_.getGeometry()
    n
      ? (n.setFlatCoordinates(e.getLayout(), e.getFlatCoordinates()), n.changed())
      : ((n = new Zt(e.getFlatCoordinates(), e.getLayout())), this.sketchLine_.setGeometry(n))
  }
  startDrawing_(t) {
    const e = this.getMap().getView().getProjection(),
      n = js(this.geometryLayout_)
    for (; t.length < n; ) t.push(0)
    ;((this.finishCoordinate_ = t),
      this.mode_ === 'Point'
        ? (this.sketchCoords_ = t.slice())
        : this.mode_ === 'Polygon'
          ? ((this.sketchCoords_ = [[t.slice(), t.slice()]]),
            (this.sketchLineCoords_ = this.sketchCoords_[0]))
          : (this.sketchCoords_ = [t.slice(), t.slice()]),
      this.sketchLineCoords_ && (this.sketchLine_ = new yt(new Zt(this.sketchLineCoords_))))
    const i = this.geometryFunction_(this.sketchCoords_, void 0, e)
    ;((this.sketchFeature_ = new yt()),
      this.geometryName_ && this.sketchFeature_.setGeometryName(this.geometryName_),
      this.sketchFeature_.setGeometry(i),
      this.updateSketchFeatures_(),
      this.dispatchEvent(new ms(_s.DRAWSTART, this.sketchFeature_)))
  }
  modifyDrawing_(t) {
    const e = this.getMap(),
      n = this.sketchFeature_.getGeometry(),
      i = e.getView().getProjection(),
      r = js(this.geometryLayout_)
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
        ? t.setGeometry(new Qn([e]))
        : this.type_ === 'MultiLineString'
          ? t.setGeometry(new sn([e]))
          : this.type_ === 'MultiPolygon' && t.setGeometry(new rn([e])),
      this.dispatchEvent(new ms(_s.DRAWEND, t)),
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
    t && this.dispatchEvent(new ms(_s.DRAWABORT, t))
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
      (this.sketchPoint_ = new yt(new zt(i))),
      this.updateSketchFeatures_(),
      this.dispatchEvent(new ms(_s.DRAWSTART, this.sketchFeature_)))
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
function F0() {
  const s = Ac()
  return function (t, e) {
    return s[t.getGeometry().getType()]
  }
}
function O0(s) {
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
const Fl = 0,
  gi = 1,
  Ol = [0, 0, 0, 0],
  Yn = [],
  Dr = { MODIFYSTART: 'modifystart', MODIFYEND: 'modifyend' }
class kr extends Et {
  constructor(t, e, n) {
    ;(super(t), (this.features = e), (this.mapBrowserEvent = n))
  }
}
class D0 extends dr {
  constructor(t) {
    ;(super(t),
      this.on,
      this.once,
      this.un,
      (this.boundHandleFeatureChange_ = this.handleFeatureChange_.bind(this)),
      (this.condition_ = t.condition ? t.condition : e0),
      (this.defaultDeleteCondition_ = function (n) {
        return qm(n) && Jm(n)
      }),
      (this.deleteCondition_ = t.deleteCondition ? t.deleteCondition : this.defaultDeleteCondition_),
      (this.insertVertexCondition_ = t.insertVertexCondition ? t.insertVertexCondition : Zs),
      (this.vertexFeature_ = null),
      (this.vertexSegments_ = null),
      (this.lastPixel_ = [0, 0]),
      (this.ignoreNextSingleClick_ = !1),
      (this.featuresBeingModified_ = null),
      (this.rBush_ = new Us()),
      (this.pixelTolerance_ = t.pixelTolerance !== void 0 ? t.pixelTolerance : 10),
      (this.snappedToVertex_ = !1),
      (this.changingFeature_ = !1),
      (this.dragSegments_ = []),
      (this.overlay_ = new ra({
        source: new oa({ useSpatialIndex: !1, wrapX: !!t.wrapX }),
        style: t.style ? t.style : N0(),
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
      const i = this.SEGMENT_WRITERS_[e.getType()]
      i && i(t, e)
    }
    const n = this.getMap()
    ;(n && n.isRendered() && this.getActive() && this.handlePointerAtPixel_(this.lastPixel_, n),
      t.addEventListener(dt.CHANGE, this.boundHandleFeatureChange_))
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
        : this.dispatchEvent(new kr(Dr.MODIFYSTART, this.featuresBeingModified_, t))
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
      this.rBush_.insert(Mt(o), a)
    }
  }
  writeMultiLineStringGeometry_(t, e) {
    const n = e.getCoordinates()
    for (let i = 0, r = n.length; i < r; ++i) {
      const o = n[i]
      for (let a = 0, l = o.length - 1; a < l; ++a) {
        const h = o.slice(a, a + 2),
          c = { feature: t, geometry: e, depth: [i], index: a, segment: h }
        this.rBush_.insert(Mt(h), c)
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
        this.rBush_.insert(Mt(h), c)
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
          this.rBush_.insert(Mt(d), f)
        }
      }
    }
  }
  writeCircleGeometry_(t, e) {
    const n = e.getCenter(),
      i = { feature: t, geometry: e, index: Fl, segment: [n, n] },
      r = { feature: t, geometry: e, index: gi, segment: [n, n] },
      o = [i, r]
    ;((i.featureSegments = o), (r.featureSegments = o), this.rBush_.insert(Rs(n), i))
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
        : ((i = new yt(new zt(t))), (this.vertexFeature_ = i), this.overlay_.getSource().addFeature(i)),
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
          if (((f[0] = e), (f[1] = e), l.index === Fl))
            ((this.changingFeature_ = !0), c.setCenter(e), (this.changingFeature_ = !1))
          else {
            ;((this.changingFeature_ = !0), t.map.getView().getProjection())
            let _ = Ns(H(c.getCenter()), H(e))
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
        o = Mt([r]),
        a = this.rBush_.getInExtent(o),
        l = {}
      a.sort(k0)
      for (let h = 0, c = a.length; h < c; ++h) {
        const u = a[h],
          d = u.segment
        let f = $(u.geometry)
        const g = u.depth
        if (
          (g && (f += '-' + g.join('-')),
          l[f] || (l[f] = new Array(2)),
          u.geometry.getType() === 'Circle' && u.index === gi)
        ) {
          const _ = kl(e, u)
          Ut(_, r) && !l[f][0] && (this.dragSegments_.push([u, 0]), (l[f][0] = u))
          continue
        }
        if (Ut(d[0], r) && !l[f][0]) {
          ;(this.dragSegments_.push([u, 0]), (l[f][0] = u))
          continue
        }
        if (Ut(d[1], r) && !l[f][1]) {
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
        $(d) in this.vertexSegments_ && !l[f][0] && !l[f][1] && this.insertVertexCondition_(t) && i.push(u)
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
          this.rBush_.update(Rs(r), o))
        let l = i
        this.rBush_.update(l.getExtent(), a)
      } else this.rBush_.update(Mt(n.segment), n)
    }
    return (
      this.featuresBeingModified_ &&
        (this.dispatchEvent(new kr(Dr.MODIFYEND, this.featuresBeingModified_, t)),
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
      return Dl(i, l) - Dl(i, h)
    }
    let o, a
    if (this.hitDetection_) {
      const l = typeof this.hitDetection_ == 'object' ? h => h === this.hitDetection_ : void 0
      e.forEachFeatureAtPixel(
        t,
        (h, c, u) => {
          u && (u = new zt(Kn(u.getCoordinates())))
          const d = u || h.getGeometry()
          if (d.getType() === 'Point' && h instanceof yt && this.features_.getArray().includes(h)) {
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
      const l = Fn(Rs(i, Ol)),
        h = e.getView().getResolution() * this.pixelTolerance_,
        c = or(zi(l, h, Ol))
      o = this.rBush_.getInExtent(c)
    }
    if (o && o.length > 0) {
      const l = o.sort(r)[0],
        h = l.segment
      let c = kl(i, l)
      const u = e.getPixelFromCoordinate(c)
      let d = Ns(t, u)
      if (a || d <= this.pixelTolerance_) {
        const f = {}
        if (
          ((f[$(h)] = !0),
          this.snapToPointer_ || ((this.delta_[0] = c[0] - i[0]), (this.delta_[1] = c[1] - i[1])),
          l.geometry.getType() === 'Circle' && l.index === gi)
        )
          ((this.snappedToVertex_ = !0), this.createOrUpdateVertexFeature_(c, [l.feature], [l.geometry]))
        else {
          const g = e.getPixelFromCoordinate(h[0]),
            _ = e.getPixelFromCoordinate(h[1]),
            m = pe(u, g),
            p = pe(u, _)
          ;((d = Math.sqrt(Math.min(m, p))),
            (this.snappedToVertex_ = d <= this.pixelTolerance_),
            this.snappedToVertex_ && (c = m > p ? h[1] : h[0]),
            this.createOrUpdateVertexFeature_(c, [l.feature], [l.geometry]))
          const y = {}
          y[$(l.geometry)] = !0
          for (let E = 1, x = o.length; E < x; ++E) {
            const C = o[E].segment
            if ((Ut(h[0], C[0]) && Ut(h[1], C[1])) || (Ut(h[0], C[1]) && Ut(h[1], C[0]))) {
              const S = $(o[E].geometry)
              S in y || ((y[S] = !0), (f[$(C)] = !0))
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
    ;(h.insert(Mt(c.segment), c), this.dragSegments_.push([c, 1]))
    const u = { segment: [e, n[1]], feature: i, geometry: r, depth: o, index: a + 1 }
    ;(h.insert(Mt(u.segment), u), this.dragSegments_.push([u, 0]), (this.ignoreNextSingleClick_ = !0))
  }
  removePoint() {
    if (this.lastPointerEvent_ && this.lastPointerEvent_.type != ht.POINTERDRAG) {
      const t = this.lastPointerEvent_
      this.willModifyFeatures_(t, this.dragSegments_)
      const e = this.removeVertex_()
      return (
        this.featuresBeingModified_ &&
          this.dispatchEvent(new kr(Dr.MODIFYEND, this.featuresBeingModified_, t)),
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
        (g = $(f.feature)),
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
          this.rBush_.insert(Mt(m.segment), m)
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
function k0(s, t) {
  return s.index - t.index
}
function Dl(s, t, e) {
  const n = t.geometry
  if (n.getType() === 'Circle') {
    let r = n
    if (t.index === gi) {
      const o = pe(r.getCenter(), H(s)),
        a = Math.sqrt(o) - r.getRadius()
      return a * a
    }
  }
  const i = H(s)
  return ((Yn[0] = H(t.segment[0])), (Yn[1] = H(t.segment[1])), Xg(i, Yn))
}
function kl(s, t, e) {
  const n = t.geometry
  if (n.getType() === 'Circle' && t.index === gi) return Kn(n.getClosestPoint(H(s)))
  const i = H(s)
  return ((Yn[0] = H(t.segment[0])), (Yn[1] = H(t.segment[1])), Kn(Uo(i, Yn)))
}
function N0() {
  const s = Ac()
  return function (t, e) {
    return s.Point
  }
}
class Zc extends Et {
  constructor(t, e, n, i) {
    ;(super(t), (this.selected = e), (this.deselected = n), (this.mapBrowserEvent = i))
  }
}
const j0 = { SNAP: 'snap' }
class G0 extends Et {
  constructor(t, e) {
    ;(super(t), (this.vertex = e.vertex), (this.vertexPixel = e.vertexPixel), (this.feature = e.feature))
  }
}
function Nl(s) {
  return s.feature ? s.feature : s.element ? s.element : null
}
const Nr = []
class z0 extends dr {
  constructor(t) {
    t = t || {}
    const e = t
    ;(e.handleDownEvent || (e.handleDownEvent = Un),
      e.stopDown || (e.stopDown = zo),
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
      (this.rBush_ = new Us()),
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
    const n = $(t),
      i = t.getGeometry()
    if (i) {
      const r = this.GEOMETRY_SEGMENTERS_[i.getType()]
      if (r) {
        this.indexedFeaturesExtents_[n] = i.getExtent(ae())
        const o = []
        if ((r(o, i), o.length === 1)) this.rBush_.insert(Mt(o[0]), { feature: t, segment: o[0] })
        else if (o.length > 1) {
          const a = o.map(h => Mt(h)),
            l = o.map(h => ({ feature: t, segment: h }))
          this.rBush_.load(a, l)
        }
      }
    }
    e && (this.featureChangeListenerKeys_[n] = pt(t, dt.CHANGE, this.handleFeatureChange_, this))
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
          new G0(j0.SNAP, { vertex: t.coordinate, vertexPixel: t.pixel, feature: e.feature }),
        )),
      super.handleEvent(t)
    )
  }
  handleFeatureAdd_(t) {
    const e = Nl(t)
    e && this.addFeature(e)
  }
  handleFeatureRemove_(t) {
    const e = Nl(t)
    e && this.removeFeature(e)
  }
  handleFeatureChange_(t) {
    const e = t.target
    if (this.handlingDownUpSequence) {
      const n = $(e)
      n in this.pendingFeatures_ || (this.pendingFeatures_[n] = e)
    } else this.updateFeature_(e)
  }
  handleUpEvent(t) {
    const e = Object.values(this.pendingFeatures_)
    return (e.length && (e.forEach(this.updateFeature_.bind(this)), (this.pendingFeatures_ = {})), !1)
  }
  removeFeature(t, e) {
    const n = e !== void 0 ? e : !0,
      i = $(t),
      r = this.indexedFeaturesExtents_[i]
    if (r) {
      const o = this.rBush_,
        a = []
      o.forEachInExtent(r, function (l) {
        t === l.feature && a.push(l)
      })
      for (let l = a.length - 1; l >= 0; --l) o.remove(a[l])
    }
    n && (Lt(this.featureChangeListenerKeys_[i]), delete this.featureChangeListenerKeys_[i])
  }
  setMap(t) {
    const e = this.getMap(),
      n = this.featuresListenerKeys_,
      i = this.getFeatures_()
    ;(e &&
      (n.forEach(Lt),
      (n.length = 0),
      this.rBush_.clear(),
      Object.values(this.featureChangeListenerKeys_).forEach(Lt),
      (this.featureChangeListenerKeys_ = {})),
      super.setMap(t),
      t &&
        (this.features_
          ? n.push(
              pt(this.features_, ne.ADD, this.handleFeatureAdd_, this),
              pt(this.features_, ne.REMOVE, this.handleFeatureRemove_, this),
            )
          : this.source_ &&
            n.push(
              pt(this.source_, _t.ADDFEATURE, this.handleFeatureAdd_, this),
              pt(this.source_, _t.REMOVEFEATURE, this.handleFeatureRemove_, this),
            ),
        i.forEach(r => this.addFeature(r))))
  }
  snapTo(t, e, n) {
    n.getView().getProjection()
    const i = H(e),
      r = or(zi(Mt([i]), n.getView().getResolution() * this.pixelTolerance_)),
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
            const p = H(m),
              y = pe(i, p)
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
          _ = Gg(i, p)
        } else {
          const [p, y] = m.segment
          y && ((Nr[0] = H(p)), (Nr[1] = H(y)), (_ = Uo(i, Nr)))
        }
        if (_) {
          const p = pe(i, _)
          p < h && ((l = Kn(_)), (h = p))
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
    const r = y_(e).getCoordinates()[0]
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
const jr = { TRANSLATESTART: 'translatestart', TRANSLATING: 'translating', TRANSLATEEND: 'translateend' }
class Ts extends Et {
  constructor(t, e, n, i, r) {
    ;(super(t),
      (this.features = e),
      (this.coordinate = n),
      (this.startCoordinate = i),
      (this.mapBrowserEvent = r))
  }
}
class X0 extends dr {
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
    else e = Un
    ;((this.layerFilter_ = e),
      (this.filter_ = t.filter && !this.features_ ? t.filter : Un),
      (this.hitTolerance_ = t.hitTolerance ? t.hitTolerance : 0),
      (this.condition_ = t.condition ? t.condition : Zs),
      (this.lastFeature_ = null),
      this.addChangeListener(Vs.ACTIVE, this.handleActiveChanged_))
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
      return (this.dispatchEvent(new Ts(jr.TRANSLATESTART, e, t.coordinate, this.startCoordinate_, t)), !0)
    }
    return !1
  }
  handleUpEvent(t) {
    if (this.lastCoordinate_) {
      ;((this.lastCoordinate_ = null), this.handleMoveEvent(t))
      const e = this.features_ || new tn([this.lastFeature_])
      return (
        this.dispatchEvent(new Ts(jr.TRANSLATEEND, e, t.coordinate, this.startCoordinate_, t)),
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
        this.dispatchEvent(new Ts(jr.TRANSLATING, a, e, this.startCoordinate_, t)))
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
          !(!(n instanceof yt) || !this.filter_(n, i)) &&
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
var Jt = (s => (
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
))(Jt || {})
class jl extends Et {
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
class W0 extends Zc {
  selectArray
  selectData
  selectFeature
  constructor(t, e, n, i, r) {
    ;(super(t, i, r), (this.selectArray = e), (this.selectFeature = i[0]), (this.selectData = n))
  }
}
class Y0 extends Zc {
  deselectArray
  deselectData
  deselectFeature
  constructor(t, e, n, i, r) {
    ;(super(t, i, r), (this.deselectArray = e), (this.deselectFeature = r[0]), (this.deselectData = n))
  }
}
class Gr extends Et {
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
class Gl extends Ts {
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
    return this.endAt ? dc(this.startAt.coord, this.endAt.coord) : 0
  }
}
class zl extends Et {
  dataArray
  features
  constructor(t, e, n) {
    ;(super(t), (this.dataArray = e), (this.features = n))
  }
}
class B0 extends Et {
  array
  features
  constructor(t, e) {
    ;(super('complete'), (this.array = t), (this.features = e))
  }
}
const xs = [
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
function U0(s) {
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
function V0(s) {
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
function la(s) {
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
        ? t.features.every(i => la(i) && i.type === 'Feature')
        : !1
}
function Z0(s) {
  if (typeof s != 'string' || s.trim() === '') return !1
  const t = s.trim()
  if (t.startsWith('{'))
    try {
      const e = JSON.parse(t)
      return !!la(e)
    } catch {
      return !1
    }
  return !1
}
function K0(s) {
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
function hi(s = '') {
  return s.toLowerCase() + '_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36)
}
function Xl(s, t = 200, e = !1) {
  let n
  return (...i) => {
    ;(e && !n && s(...i),
      n && clearTimeout(n),
      (n = setTimeout(() => {
        s(...i)
      }, t)))
  }
}
function $0(s, t) {
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
const q0 = ['Point', 'LineString', 'Polygon', 'Circle'],
  H0 = getComputedStyle(document.documentElement).getPropertyValue('--ol-foreground-color'),
  Wl = new Vt({
    fill: new Xe({ color: 'rgba(255,255,255,0.5)' }),
    stroke: new ye({ width: 2.5, color: 'red' }),
    image: new Jn({ radius: 5, stroke: new ye({ width: 2.5, color: 'red' }) }),
  }),
  J0 = { duration: 500, maxZoom: 14, padding: 100 },
  Cs = ['LineString', 'Polygon'],
  Yl = +Math.floor(Number.MAX_SAFE_INTEGER / 1e7),
  Q0 = {
    remove: 'remove geometry',
    translate: 'translate geometry',
    modify: 'modify geometry',
    complete: 'complete edit geometry',
  },
  Bl = 'ORIGINAL_STYLE_OGE'
class tp extends we {
  #t = new oa()
  #u = null
  #e = new tn([])
  #i = null
  #E = null
  #x = 'EPSG:4326'
  #n = 'EPSG:3857'
  #h = null
  #a = null
  #d = null
  #l = null
  #r = 'None'
  #C = null
  #w = null
  #f = null
  #_ = null
  #y = !1
  #g = !0
  #m = !1
  #p = !1
  supportFreehand = !0
  showToolBar = !0
  actions = ['modify', 'translate', 'remove', 'complete']
  drawTypes = q0
  allButtons = xs
  sketchStyle = null
  selectedStyle = Wl
  modifyingStyle = null
  toolBarContainer = null
  enableModifier = !1
  enableMover = !1
  constructor(t, e = {}) {
    ;(super(),
      (this.#i = t),
      (this.#E = t.getView()),
      (this.#n = this.#E.getProjection().getCode()),
      this.#A(e),
      this.#k(),
      this.#O(),
      this.#D(),
      this.showToolBar && this.render(),
      this.#m === !0 && (this.#f = t.on('singleclick', this.#R.bind(this))),
      this.#g === !0 && (this.#_ = t.on('singleclick', this.#T.bind(this))))
    const n = Xl(this.#F.bind(this), 50)
    t.on('pointermove', n)
  }
  get source() {
    return this.#t
  }
  get layer() {
    return this.#u
  }
  addFeatureFromWKT(t, e, n = 'EPSG:4326') {
    if (!t || !U0(t)) return null
    if (e) {
      const o = this.#t.getFeatureById(e)
      if (o) return o
    }
    let i
    if (typeof n == 'string') i = new gs().readFeature(t, { dataProjection: n, featureProjection: this.#n })
    else {
      const { style: o, ...a } = n
      ;((i = new gs().readFeature(t, a)), o && i.setStyle(o))
    }
    const r = V0(t)
    return (i.setId(e ?? hi(r ?? '')), this.#t.addFeature(i), i)
  }
  addFeatureFromJSON(t, e = 'EPSG:4326') {
    if (!t) return null
    let n = ''
    if (typeof t == 'object') {
      if (!la(t)) return null
      try {
        n = window.JSON.stringify(t)
      } catch {
        return null
      }
    } else n = t
    if (Z0(n)) {
      let i
      if (typeof e == 'string') i = new li().readFeature(n, { dataProjection: e, featureProjection: this.#n })
      else {
        const { style: h, ...c } = e
        ;((i = new li().readFeature(n, c)), h && i.setStyle(h))
      }
      const r = i.getGeometry()?.getType(),
        o = i.getProperties(),
        a = i.getId()
      if (!a) i.setId(hi(r))
      else {
        const h = this.#t.getFeatureById(a)
        if (h) return h
      }
      if (o.geometryType === 'circle' && r === 'Polygon') {
        const h = o.center,
          c = o.radius,
          u = o.r
        if (Array.isArray(h) && c != null && u != null) {
          const d = ri(h),
            f = this.#n.endsWith('3857'),
            g = f ? d : h,
            _ = f ? c : u,
            m = new yt(new Yi(g, _))
          ;(m.setId(a ?? hi('circle')), this.#t.addFeature(m))
        }
      } else this.#t.addFeature(i)
      return i
    }
    return null
  }
  enableDraw(t, e) {
    if (this.#i) {
      if ((this.disableDraw(), this.disableSnap(), (this.#r = t), t === 'None')) {
        this.showToolBar &&
          (this.drawTypes.forEach(n => {
            this.#o(n, !1)
          }),
          this.#c('freehand', !0, 'enable freehand draw.'))
        return
      }
      ;(this.disableSelect(),
        this.disableModify(),
        this.disableTranslate(),
        e && (this.sketchStyle = e),
        (this.#h = new A0({
          source: this.#t,
          type: t,
          freehand: this.#p && Cs.includes(t),
          style: this.sketchStyle !== null ? this.sketchStyle : void 0,
        })),
        this.#i.addInteraction(this.#h),
        (this.#w = this.#h.on('drawstart', n => {
          this.dispatchEvent(n)
          const i = n.feature,
            o = i.getGeometry().getFlatCoordinates(),
            [a, l] = o,
            h = Ht([a, l], this.#n, 'EPSG:4326'),
            c = ri(h),
            u = this.#t.getFeatures(),
            d = this.#s(u),
            f = { coord: h, coord3857: c }
          this.dispatchEvent(new Gr(Jt.DRAW_BEGIN, null, i, f, d, u))
        })),
        (this.#C = this.#h.on('drawend', n => {
          this.dispatchEvent(n)
          const i = n.feature,
            o = i.getGeometry().getFlatCoordinates(),
            [a, l] = o,
            h = Ht([a, l], this.#n, 'EPSG:4326'),
            c = ri(h),
            u = { coord: h, coord3857: c },
            d = Ht([o.at(-2), o.at(-1)], this.#n, 'EPSG:4326'),
            f = ri(d),
            g = { coord: d, coord3857: f }
          i.setId(hi(this.#r))
          const _ = this.#t.getFeatures()
          _.push(i)
          const m = this.#s(_)
          if (this.#r === 'Circle') {
            const p = this.#I(i),
              y = new Gr(Jt.DRAW_COMPLETE, p, i, u, m, _, g)
            this.dispatchEvent(y)
          } else {
            const [p] = this.#s([i]),
              y = new Gr(Jt.DRAW_COMPLETE, p, i, u, m, _, g)
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
          Cs.includes(this.#r)
            ? this.#c('freehand', !0, 'enable freehand draw.')
            : ((this.#p = !1), this.#o('freehand', !1), this.#c('freehand', !1, 'cannot freehand draw.'))))
    }
  }
  disableDraw() {
    !this.#i ||
      !this.#h ||
      ((this.#r = 'None'),
      this.disableSnap(),
      this.showToolBar &&
        (this.drawTypes.forEach(t => {
          this.#o(t, !1)
        }),
        this.#c('freehand', !0, 'enable freehand draw.')),
      this.#i.removeInteraction(this.#h),
      (this.#h = null),
      ci(this.#C),
      ci(this.#w))
  }
  enableFreehand() {
    ;((this.#p = !0),
      this.showToolBar && this.#o('freehand', !0),
      Cs.includes(this.#r) && this.enableDraw(this.#r))
  }
  disableFreehand() {
    ;((this.#p = !1),
      this.showToolBar &&
        (this.#o('freehand', !1),
        !Cs.includes(this.#r) &&
          this.#r !== 'None' &&
          this.#c('freehand', !1, "current geometry type don't support freehand draw.")),
      this.sketchStyle ? this.enableDraw(this.#r, this.sketchStyle) : this.enableDraw(this.#r))
  }
  select(t, e) {
    if (!this.#f) return []
    const n = e?.selectedStyle,
      i = e?.eachFeature
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
            Jh(a, f)
          }
          n && d.setStyle(n)
        }
        !h && i && d && (h = !!i(d, u))
      }),
      r && l.length)
    ) {
      const c = J0
      ;(e?.fit !== !1 && (Object.assign(c, e?.fit === !0 ? {} : e?.fit), (c.padding = K0(c.padding))),
        this.#E.fit(a, c))
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
  enableSelect(t = 'multi', e = Wl) {
    return (
      this.disableDraw(),
      this.#S(t),
      (this.#g || this.#y) && this.disableModify(),
      (this.selectedStyle = e),
      this.disableSelect(),
      this.#m
        ? ((this.#f = this.#i.on('singleclick', this.#R.bind(this))), !0)
        : (this.#g && (this.#_ = this.#i.on('singleclick', this.#T.bind(this))), !0)
    )
  }
  disableSelect() {
    return (ci(this.#f), ci(this.#_), (this.#f = null), (this.#_ = null), !0)
  }
  enableTranslate() {
    return (
      this.enableSelect('multi'),
      (this.enableMover = !0),
      this.disableModify(),
      this.disableDraw(),
      this.disableFreehand(),
      this.showToolBar && this.#o('translate', !0),
      this.#l
        ? (this.#l.setActive(!0), !0)
        : ((this.#l = new X0({ features: this.#e })),
          this.#i?.addInteraction(this.#l),
          this.#l.on('translatestart', t => {
            ;(this.dispatchEvent(t), this.#G(t))
          }),
          this.#l.on('translateend', t => {
            ;(this.dispatchEvent(t), this.#z(t))
          }),
          !0)
    )
  }
  disableTranslate() {
    return ((this.enableMover = !1), this.#o('translate', !1), this.#l && this.#l.setActive(!1), !0)
  }
  enableModify(t) {
    if (
      (this.enableSelect('single'),
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
      (this.#a = new D0({
        features: this.#e,
        style: this.modifyingStyle !== null ? this.modifyingStyle : void 0,
      })),
      this.#i?.addInteraction(this.#a),
      this.#a.on('modifystart', e => {
        this.dispatchEvent(e)
        const n = this.#s(e.features),
          i = new zl(Jt.MODIFY_BEGIN, n, e.features)
        this.dispatchEvent(i)
      }),
      this.#a.on('modifyend', e => {
        this.dispatchEvent(e)
        const n = this.#s(e.features),
          i = new zl(Jt.MODIFY_COMPLETE, n, e.features)
        this.dispatchEvent(i)
      }),
      this.enableSnap())
  }
  disableModify() {
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
    ;((this.#d = new z0({ source: this.#t, intersection: !0 })), this.#i?.addInteraction(this.#d))
  }
  removeFeatures(t) {
    if (t == null) {
      const a = this.#e.getArray().slice(),
        l = this.#s(a)
      ;(this.#e.forEach(d => {
        this.#t.removeFeature(d)
      }),
        this.#e.clear())
      const h = this.#t.getFeatures().slice(),
        c = this.#s(h),
        u = new jl(l, a, c, h)
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
      r = this.#s(i),
      o = new jl(this.#s(n), n, r, i)
    this.dispatchEvent(o)
  }
  removeAllFeatures() {
    return (
      this.#t.clear(),
      this.#e.clear(),
      this.disableModify(),
      this.disableTranslate(),
      this.disableSelect(),
      this.disableSnap(),
      Promise.resolve(!0)
    )
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
      e = this.#s(t),
      n = new B0(e, t)
    this.dispatchEvent(n)
  }
  render() {
    ;(this.#L(), this.#P())
  }
  #L() {
    if (!this.#i?.getTargetElement()) return
    const e = this.#i.getTargetElement().querySelector('.ol-overlaycontainer-stopevent'),
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
          (r.innerHTML = i.icon(H0)),
          (r.title = i.title),
          (r.dataset.type = i.type),
          n.appendChild(r))
      }),
      e.appendChild(n),
      (this.toolBarContainer = n))
  }
  #P() {
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
            ? this.#p
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
  #A(t) {
    const { layerStyle: e, selectedStyle: n, selectMode: i } = t
    ;(n && (this.selectedStyle = n), this.#S(i))
    const r = Yl + 1
    ;((this.#u = new ra({ zIndex: r, source: this.#t, className: this.#X(t), style: e })),
      (this.supportFreehand = t?.supportFreehand !== !1),
      (this.showToolBar = t?.showToolBar !== !1),
      Array.isArray(t.actions) && (this.actions = t.actions),
      Array.isArray(t.drawTypes) && (this.drawTypes = t.drawTypes))
    const o = xs.filter(l => this.drawTypes.includes(l.type))
    this.supportFreehand && o.push(xs.find(l => l.name === 'freehand'))
    const a = xs.filter(l => this.actions.includes(l.name))
    this.allButtons = [...o, ...a]
  }
  #S(t) {
    t === 'none' || t == null
      ? ((this.#m = !1), (this.#g = !1), (this.#y = !1))
      : ['all', 'multi'].includes(t)
        ? ((this.#g = !0), (this.#y = !0), (this.#m = !1))
        : t === 'single' && ((this.#m = !0), (this.#g = !1), (this.#y = !1))
  }
  #R(t) {
    if (this.#t.getFeatures().length === 0) return
    if (!this.#i.hasFeatureAtPixel(t.pixel)) {
      this.#e.clear()
      return
    }
    const i = r => {
      const o = this.#e.getArray().find(a => a.getId() === r.getId())
      ;(this.#e.clear(), o || this.#e.push(r))
    }
    this.#i.forEachFeatureAtPixel(
      t.pixel,
      r => {
        i(r)
      },
      { layerFilter: r => r === this.#u },
    )
  }
  #T(t) {
    if (this.#t.getFeatures().length === 0) return
    if (!this.#i.hasFeatureAtPixel(t.pixel)) {
      this.#e.clear()
      return
    }
    const i = r => {
      const o = this.#e.getArray().find(a => a.getId() === r.getId())
      o ? this.#e.remove(o) : this.#e.push(r)
    }
    this.#i.forEachFeatureAtPixel(
      t.pixel,
      r => {
        i(r)
      },
      { layerFilter: r => r === this.#u },
    )
  }
  #F(t) {
    if (t.dragging || (!this.#f && !this.#_)) return
    const e = t.map,
      n = e.getEventPixel(t.originalEvent),
      i = e.hasFeatureAtPixel(n)
    e.getTargetElement().style.cursor = i ? 'pointer' : ''
  }
  #O() {
    this.#t.on('changefeature', () => {})
    let t = !1
    const e = () => {
      this.showToolBar &&
        !t &&
        (this.actions.forEach(i => {
          this.#c(i, !0, Q0[i])
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
            this.#c(i, !1, '')
          }))
    }
    this.#t.on('removefeature', Xl(n))
  }
  #D() {
    const t = n => {
      const i = n.element,
        r = i.getStyle()
      ;(i.set(Bl, r), i.setStyle(this.selectedStyle))
      const o = this.#e.getArray(),
        [a] = this.#s([i]),
        l = this.#s(o)
      this.dispatchEvent(new W0(Jt.SELECT, l, a, o, []))
    }
    this.#e.on('add', t)
    const e = n => {
      const i = n.element,
        [r] = this.#s([i]),
        o = this.#e.getArray(),
        a = this.#s([i]),
        l = [i],
        h = i.get(Bl)
      ;(i.setStyle(h), this.dispatchEvent(new Y0(Jt.DESELECT, a, r, o, l)))
    }
    this.#e.on('remove', e)
  }
  #k() {
    this.#u && this.#i?.addLayer(this.#u)
  }
  #N(t) {
    const { feature: e, id: n } = this.#v(t)
    return { wkt: new gs().writeFeature(e, { dataProjection: this.#x, featureProjection: this.#n }), id: n }
  }
  #v(t) {
    let e
    return (t.getId() ? (e = t.getId()) : ((e = hi()), t.setId(e)), { id: e, feature: t })
  }
  #j(t) {
    const { feature: e, id: n } = this.#v(t),
      i = new li().writeFeatureObject(e, { dataProjection: this.#x, featureProjection: this.#n }),
      r = new li().writeFeature(e, { dataProjection: this.#x, featureProjection: this.#n })
    return { id: n, geojsonObj: i, geojson: r }
  }
  #s(t) {
    let e = []
    return (
      Array.isArray(t) ? (e = t) : (e = t.getArray()),
      e.map(n => {
        if (n.getGeometry()?.getType() === 'Circle') return this.#I(n)
        const { wkt: r, id: o } = this.#N(n),
          { geojson: a, geojsonObj: l } = this.#j(n)
        return { wkt: r, id: o, geojson: a, geojsonObj: l }
      })
    )
  }
  #I(t) {
    const e = t.getGeometry(),
      n = e.getFlatCoordinates(),
      i = Ht(e.getCenter(), this.#n, 'EPSG:4326'),
      r = Ht([n[2], n[3]], this.#n, 'EPSG:4326'),
      o = dc(i, r),
      a = $0(i, r),
      l = ri(i),
      h = { geometryType: 'circle', center: i, radius: o, center3857: l, r: a },
      c = p_(i, o, 128),
      u = t.getId(),
      d = new yt(c)
    ;(d.setId(u), d.setProperties(h))
    const f = new gs().writeFeature(d, { dataProjection: 'EPSG:4326', featureProjection: this.#n }),
      g = new li().writeFeatureObject(d, { dataProjection: 'EPSG:4326', featureProjection: this.#n }),
      _ = JSON.stringify(g)
    return { id: u, wkt: f, geojson: _, geojsonObj: g }
  }
  #G(t) {
    const { features: e, startCoordinate: n } = t
    this.dispatchEvent(this.#M(e, n))
  }
  #z(t) {
    const { features: e, startCoordinate: n, coordinate: i } = t
    this.dispatchEvent(this.#M(e, n, i))
  }
  #M(t, e, n) {
    const i = this.#s(t),
      r = Ht(e, this.#n, 'EPSG:4326'),
      o = Ht(e, this.#n, 'EPSG:3857'),
      a = { coord: r, coord3857: o }
    if (n) {
      const l = Ht(n, this.#n, 'EPSG:4326'),
        h = Ht(n, this.#n, 'EPSG:3857'),
        c = { coord: l, coord3857: h }
      return new Gl(Jt.TRANSLATE_END, i, t, a, c)
    }
    return new Gl(Jt.TRANSLATE_START, i, t, a)
  }
  #X(t) {
    const { className: e = 'ol-layer' } = t
    return [e, `geom-editor-layer z-index:${Yl + 1}`].join(' ')
  }
  #o(t, e) {
    const n = this.#b(t)
    n && (e ? (n.classList.remove('hidden'), n?.classList.add('selected')) : n?.classList.remove('selected'))
  }
  #c(t, e, n) {
    const i = this.#b(t)
    i && ((i.disabled = e === !1), (i.title = n))
  }
  #b(t) {
    return this.toolBarContainer?.querySelector(`[data-type="${t}"]`)
  }
}
document.querySelector('.docs').innerHTML = Qf
const ep = 'https://jackchoumine.github.io/ol-geom-editor/end.png',
  np = 'https://jackchoumine.github.io/ol-geom-editor/typescript.svg',
  Kc = [106.675271, 26.579508]
zu(Kc)
const ip = new Sf({
    target: 'ol-geom-editor-map',
    layers: [new Zf({ source: new Jf() })],
    view: new Qt({ center: Kc, zoom: 10, projection: 'EPSG:4326' }),
  }),
  sp = {
    'fill-color': 'rgba(255,255,255,0.4)',
    'stroke-color': '#3399CC',
    'stroke-width': 5,
    'circle-radius': 50,
    'circle-fill-color': 'rgba(255,255,255,0.4)',
    'circle-stroke-width': 1.25,
    'circle-stroke-color': '#3399CC',
  },
  D = new tp(ip, { layerStyle: sp })
D.on('select', s => {
  console.log('select', { event: s })
})
const rp = {
  Point: new Bn({ image: new Lh({ src: np, anchor: [0.5, 0.5], scale: 0.7 }) }),
  Polygon: new Bn({
    fill: new yi({ color: 'rgba(255, 0, 0, 0.3)' }),
    stroke: new Ei({ color: '#ff0000', width: 4 }),
  }),
}
D.on('deselect', s => {
  console.log('deselect', { event: s })
  const { deselected: t } = s
  t.forEach(e => {
    e.getGeometry().getType()
  })
})
D.on('drawstart', s => {
  console.log('drawstart', { event: s })
})
D.on('drawend', s => {
  console.log('drawend', { event: s })
})
D.on('drawBegin', s => {
  console.log('drawBegin', { event: s })
})
const op = {
  Point: new Bn({ image: new Lh({ src: ep, anchor: [0.5, 0.5], scale: 0.7 }) }),
  Polygon: new Bn({
    fill: new yi({ color: 'rgba(255, 0, 0, 1)' }),
    stroke: new Ei({ color: '#ff0', width: 10 }),
  }),
}
let fo = ''
D.on('drawComplete', s => {
  console.log('drawComplete', { event: s })
  const { feature: t } = s
  fo = t.getId()
  const e = t.getGeometry().getType()
  ;(console.log({ type: e, lastGeomId: fo }), t.setStyle(op[e]))
})
D.on('translatestart', s => {
  console.log('translatestart', { event: s })
})
D.on('translateend', s => {
  console.log('translateend', { event: s })
})
D.on('translateBegin', s => {
  console.log('translateBegin', { event: s })
})
D.on('translateComplete', s => {
  console.log('translateComplete', { event: s })
})
D.on('modifystart', s => {
  console.log('modifystart', { event: s })
})
D.on('modifyend', s => {
  console.log('modifyend', { event: s })
})
D.on('modifyBegin', s => {
  console.log('modifyBegin', { event: s })
})
D.on('modifyComplete', s => {
  console.log('modifyComplete', { event: s })
})
D.on('remove', s => {
  console.log({ event: s })
})
D.on('complete', s => {
  console.log({ event: s })
})
document.querySelector('#add-wkt').addEventListener('click', ap)
document.querySelector('#add-JSON').addEventListener('click', lp)
document.querySelector('#add-JSONObj').addEventListener('click', hp)
document.querySelector('#remove-feature').addEventListener('click', up)
document.querySelector('#remove-selected-features').addEventListener('click', cp)
document.querySelector('#remove-all-features').addEventListener('click', dp)
document.querySelector('#select-features').addEventListener('click', fp)
document.querySelector('#deselect-features').addEventListener('click', gp)
document.querySelector('#enable-select').addEventListener('click', _p)
document.querySelector('#enable-select-single').addEventListener('click', mp)
document.querySelector('#disable-select').addEventListener('click', pp)
document.querySelector('#translate-features').addEventListener('click', yp)
document.querySelector('#disable-translate').addEventListener('click', Ep)
document.querySelector('#enable-modify').addEventListener('click', xp)
document.querySelector('#disable-modify').addEventListener('click', wp)
document.querySelector('#modify-lead').addEventListener('click', Sp)
document.querySelector('#disable-draw').addEventListener('click', Cp)
document.querySelector('#select-type').addEventListener('change', vp)
document.querySelector('#freehand').addEventListener('change', Ip)
function ap() {
  console.log('addWKT')
  const s = D.addFeatureFromWKT(tg, 'line1'),
    t = D.addFeatureFromWKT(eg)
  console.log({ feat1: s, feat2: t })
}
function lp() {
  console.log('addJSON')
  const s = D.addFeatureFromJSON(ig)
  console.log({ f: s })
}
function hp() {
  console.log('addJSONObj')
  const s = D.addFeatureFromJSON(ng)
  s.setStyle(rp.Polygon)
  const t = D.addFeatureFromJSON(sg)
  console.log({ feat2: t, feat1: s })
}
function cp() {
  D.removeFeatures()
}
function up() {
  D.removeFeatures(['line1', 'p2CQqn2lFk'])
}
function dp() {
  D.removeAllFeatures().then(s => {
    console.log({ success: s })
  })
}
const go = 'rgba(218,228,194,0.5)',
  _o = 'rgba(255, 204, 51, 0.9)'
function fp() {
  const s = D.select(['circle'], {
    selectedStyle: new Bn({
      fill: new yi({ color: go }),
      stroke: new Ei({ color: _o, width: 4 }),
      image: new Rd({ radius: 7, fill: new yi({ color: go }), stroke: new Ei({ color: _o, width: 2 }) }),
    }),
    eachFeature: (t, e) => {
      if ((console.log({ feat: t }), e === 0)) return !0
    },
  })
  console.log('selected features:', s)
}
function gp() {
  D.deselect(['line1', 'p2CQqn2lFk'])
}
function _p() {
  D.enableSelect()
}
function mp() {
  D.enableSelect('single')
}
function pp() {
  D.disableSelect()
}
function yp() {
  D.enableTranslate()
}
function Ep() {
  D.disableTranslate()
}
function xp() {
  D.enableModify()
}
function Cp() {
  D.disableDraw()
}
function wp() {
  D.disableModify()
}
function Sp() {
  ;(D.enableSelect(),
    D.select(fo, {
      selectedStyle: new Bn({ fill: new yi({ color: go }), stroke: new Ei({ color: _o, width: 40 }) }),
    }),
    D.enableModify())
}
const Rp = ['LineString', 'Polygon'],
  Tp = {
    'fill-color': 'rgba(255, 200, 200, 0.4)',
    'stroke-color': '#ff0000',
    'stroke-line-dash': [5, 10],
    'circle-radius': 6,
    'circle-fill-color': '#ff0000',
    'circle-stroke-color': 'yellow',
    'circle-stroke-width': 2,
  }
function vp(s) {
  const t = s.target.value
  console.log('change type to:', t)
  const e = document.querySelector('#freehand'),
    n = document.querySelector('#freehand-box')
  ;(Rp.includes(t)
    ? ((n.title = 'Freehand drawing for ' + t), (e.disabled = !1))
    : ((n.title = '仅线和面支持自由绘制'), (e.checked = !1), (e.disabled = !0), D.disableFreehand()),
    D.enableDraw(t, Tp))
}
function Ip(s) {
  const t = s.target.checked
  ;(console.log('change freehand to:', t), t ? D.enableFreehand() : D.disableFreehand())
}
