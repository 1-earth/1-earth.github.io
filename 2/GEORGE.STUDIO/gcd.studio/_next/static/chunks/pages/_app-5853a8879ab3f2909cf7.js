_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [15],
  {
    0: function (e, t, n) {
      n("J5xr"), (e.exports = n("nOHt"));
    },
    D1Df: function (e, t, n) {
      "use strict";
      function o(e) {
        return (o =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function i(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = {},
          i = Object.keys(e);
        for (o = 0; o < i.length; o++)
          (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (n = a[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function c(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e;
      }
      function u(e, t) {
        if (t && ("object" === o(t) || "function" === typeof t)) return t;
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function l(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var d = n("q1tI"),
        h = n("17x9"),
        f = n("H38U"),
        m = n("aRTE");
      function g(e) {
        for (var t = "", n = 0; n < e.length; n++) {
          var o = e.charCodeAt(n);
          o < 128
            ? (t += String.fromCharCode(o))
            : o < 2048
            ? ((t += String.fromCharCode(192 | (o >> 6))),
              (t += String.fromCharCode(128 | (63 & o))))
            : o < 55296 || o >= 57344
            ? ((t += String.fromCharCode(224 | (o >> 12))),
              (t += String.fromCharCode(128 | ((o >> 6) & 63))),
              (t += String.fromCharCode(128 | (63 & o))))
            : (n++,
              (o = 65536 + (((1023 & o) << 10) | (1023 & e.charCodeAt(n)))),
              (t += String.fromCharCode(240 | (o >> 18))),
              (t += String.fromCharCode(128 | ((o >> 12) & 63))),
              (t += String.fromCharCode(128 | ((o >> 6) & 63))),
              (t += String.fromCharCode(128 | (63 & o))));
        }
        return t;
      }
      var y = { size: 128, level: "L", bgColor: "#FFFFFF", fgColor: "#000000" },
        b = {
          value: h.string.isRequired,
          size: h.number,
          level: h.oneOf(["L", "M", "Q", "H"]),
          bgColor: h.string,
          fgColor: h.string,
        },
        v = (function (e) {
          function t() {
            var e, n, o;
            a(this, t);
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
              i[s] = arguments[s];
            return u(
              o,
              ((n = o =
                u(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(i)
                  )
                )),
              Object.defineProperty(p(o), "_canvas", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: void 0,
              }),
              n)
            );
          }
          return (
            l(t, e),
            c(t, [
              {
                key: "shouldComponentUpdate",
                value: function (e) {
                  var n = this;
                  return Object.keys(t.propTypes).some(function (t) {
                    return n.props[t] !== e[t];
                  });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.update();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.update();
                },
              },
              {
                key: "update",
                value: function () {
                  var e = this.props,
                    t = e.value,
                    n = e.size,
                    o = e.level,
                    r = e.bgColor,
                    i = e.fgColor,
                    a = new f(-1, m[o]);
                  if ((a.addData(g(t)), a.make(), null != this._canvas)) {
                    var s = this._canvas,
                      c = s.getContext("2d");
                    if (!c) return;
                    var u = a.modules;
                    if (null === u) return;
                    var l = n / u.length,
                      p = n / u.length,
                      d =
                        (window.devicePixelRatio || 1) /
                        (function (e) {
                          return (
                            e.webkitBackingStorePixelRatio ||
                            e.mozBackingStorePixelRatio ||
                            e.msBackingStorePixelRatio ||
                            e.oBackingStorePixelRatio ||
                            e.backingStorePixelRatio ||
                            1
                          );
                        })(c);
                    (s.height = s.width = n * d),
                      c.scale(d, d),
                      u.forEach(function (e, t) {
                        e.forEach(function (e, n) {
                          c && (c.fillStyle = e ? i : r);
                          var o = Math.ceil((n + 1) * l) - Math.floor(n * l),
                            a = Math.ceil((t + 1) * p) - Math.floor(t * p);
                          c &&
                            c.fillRect(
                              Math.round(n * l),
                              Math.round(t * p),
                              o,
                              a
                            );
                        });
                      });
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = (t.value, t.size),
                    o = (t.level, t.bgColor, t.fgColor, t.style),
                    a = i(t, [
                      "value",
                      "size",
                      "level",
                      "bgColor",
                      "fgColor",
                      "style",
                    ]),
                    s = r({ height: n, width: n }, o);
                  return d.createElement(
                    "canvas",
                    r(
                      {
                        style: s,
                        height: n,
                        width: n,
                        ref: function (t) {
                          return (e._canvas = t);
                        },
                      },
                      a
                    )
                  );
                },
              },
            ]),
            t
          );
        })(d.Component);
      Object.defineProperty(v, "defaultProps", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: y,
      }),
        Object.defineProperty(v, "propTypes", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: b,
        });
      var w = (function (e) {
        function t() {
          return (
            a(this, t),
            u(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          l(t, e),
          c(t, [
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                var t = this;
                return Object.keys(v.propTypes).some(function (n) {
                  return t.props[n] !== e[n];
                });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.value,
                  n = e.size,
                  o = e.level,
                  a = e.bgColor,
                  s = e.fgColor,
                  c = i(e, ["value", "size", "level", "bgColor", "fgColor"]),
                  u = new f(-1, m[o]);
                u.addData(g(t)), u.make();
                var l = u.modules;
                if (null !== l) {
                  var p = [];
                  return (
                    l.forEach(function (e, t) {
                      var n = null;
                      e.forEach(function (o, r) {
                        if (!o && null !== n)
                          return (
                            p.push(
                              "M"
                                .concat(n, " ")
                                .concat(t, "h")
                                .concat(r - n, "v1H")
                                .concat(n, "z")
                            ),
                            void (n = null)
                          );
                        if (r !== e.length - 1) o && null === n && (n = r);
                        else {
                          if (!o) return;
                          null === n
                            ? p.push(
                                "M"
                                  .concat(r, ",")
                                  .concat(t, " h1v1H")
                                  .concat(r, "z")
                              )
                            : p.push(
                                "M"
                                  .concat(n, ",")
                                  .concat(t, " h")
                                  .concat(r + 1 - n, "v1H")
                                  .concat(n, "z")
                              );
                        }
                      });
                    }),
                    d.createElement(
                      "svg",
                      r(
                        {
                          shapeRendering: "crispEdges",
                          height: n,
                          width: n,
                          viewBox: "0 0 "
                            .concat(l.length, " ")
                            .concat(l.length),
                        },
                        c
                      ),
                      d.createElement("path", {
                        fill: a,
                        d: "M0,0 h"
                          .concat(l.length, "v")
                          .concat(l.length, "H0z"),
                      }),
                      d.createElement("path", { fill: s, d: p.join("") })
                    )
                  );
                }
              },
            },
          ]),
          t
        );
      })(d.Component);
      Object.defineProperty(w, "defaultProps", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: y,
      }),
        Object.defineProperty(w, "propTypes", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: b,
        });
      var _ = function (e) {
        var t = e.renderAs,
          n = i(e, ["renderAs"]),
          o = "svg" === t ? w : v;
        return d.createElement(o, n);
      };
      (_.defaultProps = r({ renderAs: "canvas" }, y)), (e.exports = _);
    },
    H38U: function (e, t, n) {
      var o = n("f4xo"),
        r = n("rcnY"),
        i = n("wU8J"),
        a = n("Iq15"),
        s = n("dWSS");
      function c(e, t) {
        (this.typeNumber = e),
          (this.errorCorrectLevel = t),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      var u = c.prototype;
      (u.addData = function (e) {
        var t = new o(e);
        this.dataList.push(t), (this.dataCache = null);
      }),
        (u.isDark = function (e, t) {
          if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
            throw new Error(e + "," + t);
          return this.modules[e][t];
        }),
        (u.getModuleCount = function () {
          return this.moduleCount;
        }),
        (u.make = function () {
          if (this.typeNumber < 1) {
            var e = 1;
            for (e = 1; e < 40; e++) {
              for (
                var t = r.getRSBlocks(e, this.errorCorrectLevel),
                  n = new i(),
                  o = 0,
                  s = 0;
                s < t.length;
                s++
              )
                o += t[s].dataCount;
              for (s = 0; s < this.dataList.length; s++) {
                var c = this.dataList[s];
                n.put(c.mode, 4),
                  n.put(c.getLength(), a.getLengthInBits(c.mode, e)),
                  c.write(n);
              }
              if (n.getLengthInBits() <= 8 * o) break;
            }
            this.typeNumber = e;
          }
          this.makeImpl(!1, this.getBestMaskPattern());
        }),
        (u.makeImpl = function (e, t) {
          (this.moduleCount = 4 * this.typeNumber + 17),
            (this.modules = new Array(this.moduleCount));
          for (var n = 0; n < this.moduleCount; n++) {
            this.modules[n] = new Array(this.moduleCount);
            for (var o = 0; o < this.moduleCount; o++)
              this.modules[n][o] = null;
          }
          this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(e, t),
            this.typeNumber >= 7 && this.setupTypeNumber(e),
            null == this.dataCache &&
              (this.dataCache = c.createData(
                this.typeNumber,
                this.errorCorrectLevel,
                this.dataList
              )),
            this.mapData(this.dataCache, t);
        }),
        (u.setupPositionProbePattern = function (e, t) {
          for (var n = -1; n <= 7; n++)
            if (!(e + n <= -1 || this.moduleCount <= e + n))
              for (var o = -1; o <= 7; o++)
                t + o <= -1 ||
                  this.moduleCount <= t + o ||
                  (this.modules[e + n][t + o] =
                    (0 <= n && n <= 6 && (0 == o || 6 == o)) ||
                    (0 <= o && o <= 6 && (0 == n || 6 == n)) ||
                    (2 <= n && n <= 4 && 2 <= o && o <= 4));
        }),
        (u.getBestMaskPattern = function () {
          for (var e = 0, t = 0, n = 0; n < 8; n++) {
            this.makeImpl(!0, n);
            var o = a.getLostPoint(this);
            (0 == n || e > o) && ((e = o), (t = n));
          }
          return t;
        }),
        (u.createMovieClip = function (e, t, n) {
          var o = e.createEmptyMovieClip(t, n);
          this.make();
          for (var r = 0; r < this.modules.length; r++)
            for (var i = 1 * r, a = 0; a < this.modules[r].length; a++) {
              var s = 1 * a;
              this.modules[r][a] &&
                (o.beginFill(0, 100),
                o.moveTo(s, i),
                o.lineTo(s + 1, i),
                o.lineTo(s + 1, i + 1),
                o.lineTo(s, i + 1),
                o.endFill());
            }
          return o;
        }),
        (u.setupTimingPattern = function () {
          for (var e = 8; e < this.moduleCount - 8; e++)
            null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
          for (var t = 8; t < this.moduleCount - 8; t++)
            null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0);
        }),
        (u.setupPositionAdjustPattern = function () {
          for (
            var e = a.getPatternPosition(this.typeNumber), t = 0;
            t < e.length;
            t++
          )
            for (var n = 0; n < e.length; n++) {
              var o = e[t],
                r = e[n];
              if (null == this.modules[o][r])
                for (var i = -2; i <= 2; i++)
                  for (var s = -2; s <= 2; s++)
                    this.modules[o + i][r + s] =
                      -2 == i ||
                      2 == i ||
                      -2 == s ||
                      2 == s ||
                      (0 == i && 0 == s);
            }
        }),
        (u.setupTypeNumber = function (e) {
          for (
            var t = a.getBCHTypeNumber(this.typeNumber), n = 0;
            n < 18;
            n++
          ) {
            var o = !e && 1 == ((t >> n) & 1);
            this.modules[Math.floor(n / 3)][
              (n % 3) + this.moduleCount - 8 - 3
            ] = o;
          }
          for (n = 0; n < 18; n++) {
            o = !e && 1 == ((t >> n) & 1);
            this.modules[(n % 3) + this.moduleCount - 8 - 3][
              Math.floor(n / 3)
            ] = o;
          }
        }),
        (u.setupTypeInfo = function (e, t) {
          for (
            var n = (this.errorCorrectLevel << 3) | t,
              o = a.getBCHTypeInfo(n),
              r = 0;
            r < 15;
            r++
          ) {
            var i = !e && 1 == ((o >> r) & 1);
            r < 6
              ? (this.modules[r][8] = i)
              : r < 8
              ? (this.modules[r + 1][8] = i)
              : (this.modules[this.moduleCount - 15 + r][8] = i);
          }
          for (r = 0; r < 15; r++) {
            i = !e && 1 == ((o >> r) & 1);
            r < 8
              ? (this.modules[8][this.moduleCount - r - 1] = i)
              : r < 9
              ? (this.modules[8][15 - r - 1 + 1] = i)
              : (this.modules[8][15 - r - 1] = i);
          }
          this.modules[this.moduleCount - 8][8] = !e;
        }),
        (u.mapData = function (e, t) {
          for (
            var n = -1,
              o = this.moduleCount - 1,
              r = 7,
              i = 0,
              s = this.moduleCount - 1;
            s > 0;
            s -= 2
          )
            for (6 == s && s--; ; ) {
              for (var c = 0; c < 2; c++)
                if (null == this.modules[o][s - c]) {
                  var u = !1;
                  i < e.length && (u = 1 == ((e[i] >>> r) & 1)),
                    a.getMask(t, o, s - c) && (u = !u),
                    (this.modules[o][s - c] = u),
                    -1 == --r && (i++, (r = 7));
                }
              if ((o += n) < 0 || this.moduleCount <= o) {
                (o -= n), (n = -n);
                break;
              }
            }
        }),
        (c.PAD0 = 236),
        (c.PAD1 = 17),
        (c.createData = function (e, t, n) {
          for (
            var o = r.getRSBlocks(e, t), s = new i(), u = 0;
            u < n.length;
            u++
          ) {
            var l = n[u];
            s.put(l.mode, 4),
              s.put(l.getLength(), a.getLengthInBits(l.mode, e)),
              l.write(s);
          }
          var p = 0;
          for (u = 0; u < o.length; u++) p += o[u].dataCount;
          if (s.getLengthInBits() > 8 * p)
            throw new Error(
              "code length overflow. (" +
                s.getLengthInBits() +
                ">" +
                8 * p +
                ")"
            );
          for (
            s.getLengthInBits() + 4 <= 8 * p && s.put(0, 4);
            s.getLengthInBits() % 8 != 0;

          )
            s.putBit(!1);
          for (
            ;
            !(s.getLengthInBits() >= 8 * p) &&
            (s.put(c.PAD0, 8), !(s.getLengthInBits() >= 8 * p));

          )
            s.put(c.PAD1, 8);
          return c.createBytes(s, o);
        }),
        (c.createBytes = function (e, t) {
          for (
            var n = 0,
              o = 0,
              r = 0,
              i = new Array(t.length),
              c = new Array(t.length),
              u = 0;
            u < t.length;
            u++
          ) {
            var l = t[u].dataCount,
              p = t[u].totalCount - l;
            (o = Math.max(o, l)), (r = Math.max(r, p)), (i[u] = new Array(l));
            for (var d = 0; d < i[u].length; d++)
              i[u][d] = 255 & e.buffer[d + n];
            n += l;
            var h = a.getErrorCorrectPolynomial(p),
              f = new s(i[u], h.getLength() - 1).mod(h);
            c[u] = new Array(h.getLength() - 1);
            for (d = 0; d < c[u].length; d++) {
              var m = d + f.getLength() - c[u].length;
              c[u][d] = m >= 0 ? f.get(m) : 0;
            }
          }
          var g = 0;
          for (d = 0; d < t.length; d++) g += t[d].totalCount;
          var y = new Array(g),
            b = 0;
          for (d = 0; d < o; d++)
            for (u = 0; u < t.length; u++)
              d < i[u].length && (y[b++] = i[u][d]);
          for (d = 0; d < r; d++)
            for (u = 0; u < t.length; u++)
              d < c[u].length && (y[b++] = c[u][d]);
          return y;
        }),
        (e.exports = c);
    },
    ITVs: function (e) {
      e.exports = JSON.parse(
        '{"name":"@emotion/core","version":"10.1.1","main":"dist/core.cjs.js","module":"dist/core.esm.js","browser":{"./dist/core.cjs.js":"./dist/core.browser.cjs.js","./dist/core.esm.js":"./dist/core.browser.esm.js"},"types":"types/index.d.ts","files":["src","dist","jsx-runtime","jsx-dev-runtime","types"],"author":"mitchellhamilton <mitchell@mitchellhamilton.me>","license":"MIT","scripts":{"test:typescript":"dtslint types"},"dependencies":{"@babel/runtime":"^7.5.5","@emotion/cache":"^10.0.27","@emotion/css":"^10.0.27","@emotion/serialize":"^0.11.15","@emotion/sheet":"0.9.4","@emotion/utils":"0.11.3"},"peerDependencies":{"react":">=16.3.0"},"devDependencies":{"@emotion/styled":"^10.0.27","@types/react":"^16.8.20","dtslint":"^0.3.0","emotion":"^10.0.27","emotion-server":"^10.0.27","emotion-theming":"^10.0.27","html-tag-names":"^1.1.2","react":"16.14.0","svg-tag-names":"^1.1.1"},"repository":"https://github.com/emotion-js/emotion/tree/master/packages/core","publishConfig":{"access":"public"},"umd:main":"dist/core.umd.min.js","preconstruct":{"source":"src/index.js","entrypoints":[".","jsx-runtime","jsx-dev-runtime"],"umdName":"emotionCore"}}'
      );
    },
    Iq15: function (e, t, n) {
      var o = n("nVVt"),
        r = n("dWSS"),
        i = n("dQei"),
        a = 0,
        s = 1,
        c = 2,
        u = 3,
        l = 4,
        p = 5,
        d = 6,
        h = 7,
        f = {
          PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170],
          ],
          G15: 1335,
          G18: 7973,
          G15_MASK: 21522,
          getBCHTypeInfo: function (e) {
            for (
              var t = e << 10;
              f.getBCHDigit(t) - f.getBCHDigit(f.G15) >= 0;

            )
              t ^= f.G15 << (f.getBCHDigit(t) - f.getBCHDigit(f.G15));
            return ((e << 10) | t) ^ f.G15_MASK;
          },
          getBCHTypeNumber: function (e) {
            for (
              var t = e << 12;
              f.getBCHDigit(t) - f.getBCHDigit(f.G18) >= 0;

            )
              t ^= f.G18 << (f.getBCHDigit(t) - f.getBCHDigit(f.G18));
            return (e << 12) | t;
          },
          getBCHDigit: function (e) {
            for (var t = 0; 0 != e; ) t++, (e >>>= 1);
            return t;
          },
          getPatternPosition: function (e) {
            return f.PATTERN_POSITION_TABLE[e - 1];
          },
          getMask: function (e, t, n) {
            switch (e) {
              case a:
                return (t + n) % 2 == 0;
              case s:
                return t % 2 == 0;
              case c:
                return n % 3 == 0;
              case u:
                return (t + n) % 3 == 0;
              case l:
                return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
              case p:
                return ((t * n) % 2) + ((t * n) % 3) == 0;
              case d:
                return (((t * n) % 2) + ((t * n) % 3)) % 2 == 0;
              case h:
                return (((t * n) % 3) + ((t + n) % 2)) % 2 == 0;
              default:
                throw new Error("bad maskPattern:" + e);
            }
          },
          getErrorCorrectPolynomial: function (e) {
            for (var t = new r([1], 0), n = 0; n < e; n++)
              t = t.multiply(new r([1, i.gexp(n)], 0));
            return t;
          },
          getLengthInBits: function (e, t) {
            if (1 <= t && t < 10)
              switch (e) {
                case o.MODE_NUMBER:
                  return 10;
                case o.MODE_ALPHA_NUM:
                  return 9;
                case o.MODE_8BIT_BYTE:
                case o.MODE_KANJI:
                  return 8;
                default:
                  throw new Error("mode:" + e);
              }
            else if (t < 27)
              switch (e) {
                case o.MODE_NUMBER:
                  return 12;
                case o.MODE_ALPHA_NUM:
                  return 11;
                case o.MODE_8BIT_BYTE:
                  return 16;
                case o.MODE_KANJI:
                  return 10;
                default:
                  throw new Error("mode:" + e);
              }
            else {
              if (!(t < 41)) throw new Error("type:" + t);
              switch (e) {
                case o.MODE_NUMBER:
                  return 14;
                case o.MODE_ALPHA_NUM:
                  return 13;
                case o.MODE_8BIT_BYTE:
                  return 16;
                case o.MODE_KANJI:
                  return 12;
                default:
                  throw new Error("mode:" + e);
              }
            }
          },
          getLostPoint: function (e) {
            for (var t = e.getModuleCount(), n = 0, o = 0; o < t; o++)
              for (var r = 0; r < t; r++) {
                for (var i = 0, a = e.isDark(o, r), s = -1; s <= 1; s++)
                  if (!(o + s < 0 || t <= o + s))
                    for (var c = -1; c <= 1; c++)
                      r + c < 0 ||
                        t <= r + c ||
                        (0 == s && 0 == c) ||
                        (a == e.isDark(o + s, r + c) && i++);
                i > 5 && (n += 3 + i - 5);
              }
            for (o = 0; o < t - 1; o++)
              for (r = 0; r < t - 1; r++) {
                var u = 0;
                e.isDark(o, r) && u++,
                  e.isDark(o + 1, r) && u++,
                  e.isDark(o, r + 1) && u++,
                  e.isDark(o + 1, r + 1) && u++,
                  (0 != u && 4 != u) || (n += 3);
              }
            for (o = 0; o < t; o++)
              for (r = 0; r < t - 6; r++)
                e.isDark(o, r) &&
                  !e.isDark(o, r + 1) &&
                  e.isDark(o, r + 2) &&
                  e.isDark(o, r + 3) &&
                  e.isDark(o, r + 4) &&
                  !e.isDark(o, r + 5) &&
                  e.isDark(o, r + 6) &&
                  (n += 40);
            for (r = 0; r < t; r++)
              for (o = 0; o < t - 6; o++)
                e.isDark(o, r) &&
                  !e.isDark(o + 1, r) &&
                  e.isDark(o + 2, r) &&
                  e.isDark(o + 3, r) &&
                  e.isDark(o + 4, r) &&
                  !e.isDark(o + 5, r) &&
                  e.isDark(o + 6, r) &&
                  (n += 40);
            var l = 0;
            for (r = 0; r < t; r++)
              for (o = 0; o < t; o++) e.isDark(o, r) && l++;
            return (n += 10 * (Math.abs((100 * l) / t / t - 50) / 5));
          },
        };
      e.exports = f;
    },
    J5xr: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n("YNMu");
        },
      ]);
    },
    JIIv: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var o = n("Nt7R"),
        r = new o.a("I18n"),
        i = (function () {
          function e(e) {
            (this._options = null),
              (this._lang = null),
              (this._dict = {}),
              (this._options = Object.assign({}, e)),
              (this._lang = this._options.language),
              !this._lang &&
                "undefined" !== typeof window &&
                window &&
                window.navigator &&
                (this._lang = window.navigator.language),
              r.debug(this._lang);
          }
          return (
            (e.prototype.setLanguage = function (e) {
              this._lang = e;
            }),
            (e.prototype.get = function (e, t) {
              if ((void 0 === t && (t = void 0), !this._lang))
                return "undefined" !== typeof t ? t : e;
              var n = this._lang,
                o = this.getByLanguage(e, n);
              return (
                o ||
                (n.indexOf("-") > 0 &&
                  (o = this.getByLanguage(e, n.split("-")[0])),
                o || ("undefined" !== typeof t ? t : e))
              );
            }),
            (e.prototype.getByLanguage = function (e, t, n) {
              if ((void 0 === n && (n = null), !t)) return n;
              var o = this._dict[t];
              return o ? o[e] : n;
            }),
            (e.prototype.putVocabulariesForLanguage = function (e, t) {
              var n = this._dict[e];
              n || (n = this._dict[e] = {}), Object.assign(n, t);
            }),
            (e.prototype.putVocabularies = function (e) {
              var t = this;
              Object.keys(e).map(function (n) {
                t.putVocabulariesForLanguage(n, e[n]);
              });
            }),
            e
          );
        })(),
        a = n("fQM2"),
        s = new o.a("I18n"),
        c = null,
        u = null,
        l = (function () {
          function e() {}
          return (
            (e.configure = function (t) {
              return (
                s.debug("configure I18n"),
                t
                  ? ((c = Object.assign({}, c, t.I18n || t)),
                    e.createInstance(),
                    c)
                  : c
              );
            }),
            (e.getModuleName = function () {
              return "I18n";
            }),
            (e.createInstance = function () {
              s.debug("create I18n instance"), u || (u = new i(c));
            }),
            (e.setLanguage = function (t) {
              return e.checkConfig(), u.setLanguage(t);
            }),
            (e.get = function (t, n) {
              return e.checkConfig()
                ? u.get(t, n)
                : "undefined" === typeof n
                ? t
                : n;
            }),
            (e.putVocabulariesForLanguage = function (t, n) {
              return e.checkConfig(), u.putVocabulariesForLanguage(t, n);
            }),
            (e.putVocabularies = function (t) {
              return e.checkConfig(), u.putVocabularies(t);
            }),
            (e.checkConfig = function () {
              return u || (u = new i(c)), !0;
            }),
            e
          );
        })();
      a.a.register(l);
    },
    YNMu: function (e, t, n) {
      "use strict";
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      n.r(t);
      var r = n("cpVT");
      function i(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var a = n("jT3O"),
        s = n("q1tI"),
        c = n.n(s),
        u = n("qKvR"),
        l = function (e, t, n, o, r) {
          for (t = t && t.split ? t.split(".") : [t], o = 0; o < t.length; o++)
            e = e ? e[t[o]] : r;
          return e === r ? n : e;
        },
        p = [40, 52, 64].map(function (e) {
          return e + "em";
        }),
        d = {
          space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
          fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
        },
        h = {
          bg: "backgroundColor",
          m: "margin",
          mt: "marginTop",
          mr: "marginRight",
          mb: "marginBottom",
          ml: "marginLeft",
          mx: "marginX",
          my: "marginY",
          p: "padding",
          pt: "paddingTop",
          pr: "paddingRight",
          pb: "paddingBottom",
          pl: "paddingLeft",
          px: "paddingX",
          py: "paddingY",
        },
        f = {
          marginX: ["marginLeft", "marginRight"],
          marginY: ["marginTop", "marginBottom"],
          paddingX: ["paddingLeft", "paddingRight"],
          paddingY: ["paddingTop", "paddingBottom"],
          size: ["width", "height"],
        },
        m = {
          color: "colors",
          backgroundColor: "colors",
          borderColor: "colors",
          caretColor: "colors",
          columnRuleColor: "colors",
          margin: "space",
          marginTop: "space",
          marginRight: "space",
          marginBottom: "space",
          marginLeft: "space",
          marginX: "space",
          marginY: "space",
          padding: "space",
          paddingTop: "space",
          paddingRight: "space",
          paddingBottom: "space",
          paddingLeft: "space",
          paddingX: "space",
          paddingY: "space",
          top: "space",
          right: "space",
          bottom: "space",
          left: "space",
          gridGap: "space",
          gridColumnGap: "space",
          gridRowGap: "space",
          gap: "space",
          columnGap: "space",
          rowGap: "space",
          fontFamily: "fonts",
          fontSize: "fontSizes",
          fontWeight: "fontWeights",
          lineHeight: "lineHeights",
          letterSpacing: "letterSpacings",
          border: "borders",
          borderTop: "borders",
          borderRight: "borders",
          borderBottom: "borders",
          borderLeft: "borders",
          borderWidth: "borderWidths",
          borderStyle: "borderStyles",
          borderRadius: "radii",
          borderTopRightRadius: "radii",
          borderTopLeftRadius: "radii",
          borderBottomRightRadius: "radii",
          borderBottomLeftRadius: "radii",
          borderTopWidth: "borderWidths",
          borderTopColor: "colors",
          borderTopStyle: "borderStyles",
          borderBottomWidth: "borderWidths",
          borderBottomColor: "colors",
          borderBottomStyle: "borderStyles",
          borderLeftWidth: "borderWidths",
          borderLeftColor: "colors",
          borderLeftStyle: "borderStyles",
          borderRightWidth: "borderWidths",
          borderRightColor: "colors",
          borderRightStyle: "borderStyles",
          outlineColor: "colors",
          boxShadow: "shadows",
          textShadow: "shadows",
          zIndex: "zIndices",
          width: "sizes",
          minWidth: "sizes",
          maxWidth: "sizes",
          height: "sizes",
          minHeight: "sizes",
          maxHeight: "sizes",
          flexBasis: "sizes",
          size: "sizes",
          fill: "colors",
          stroke: "colors",
        },
        g = function (e, t) {
          if ("number" !== typeof t || t >= 0) return l(e, t, t);
          var n = Math.abs(t),
            o = l(e, n, n);
          return "string" === typeof o ? "-" + o : -1 * o;
        },
        y = [
          "margin",
          "marginTop",
          "marginRight",
          "marginBottom",
          "marginLeft",
          "marginX",
          "marginY",
          "top",
          "bottom",
          "left",
          "right",
        ].reduce(function (e, t) {
          var n;
          return Object.assign({}, e, (((n = {})[t] = g), n));
        }, {}),
        b = function (e) {
          return function (t) {
            void 0 === t && (t = {});
            var n = Object.assign({}, d, t.theme || t),
              o = {},
              r = (function (e) {
                return function (t) {
                  var n = {},
                    o = l(t, "breakpoints", p),
                    r = [null].concat(
                      o.map(function (e) {
                        return "@media screen and (min-width: " + e + ")";
                      })
                    );
                  for (var i in e) {
                    var a = "function" === typeof e[i] ? e[i](t) : e[i];
                    if (null != a)
                      if (Array.isArray(a))
                        for (var s = 0; s < a.slice(0, r.length).length; s++) {
                          var c = r[s];
                          c
                            ? ((n[c] = n[c] || {}),
                              null != a[s] && (n[c][i] = a[s]))
                            : (n[i] = a[s]);
                        }
                      else n[i] = a;
                  }
                  return n;
                };
              })("function" === typeof e ? e(n) : e)(n);
            for (var i in r) {
              var a = r[i],
                s = "function" === typeof a ? a(n) : a;
              if ("variant" !== i)
                if (s && "object" === typeof s) o[i] = b(s)(n);
                else {
                  var c = l(h, i, i),
                    u = l(m, c),
                    g = l(n, u, l(n, c, {})),
                    v = l(y, c, l)(g, s, s);
                  if (f[c])
                    for (var w = f[c], _ = 0; _ < w.length; _++) o[w[_]] = v;
                  else o[c] = v;
                }
              else {
                var C = b(l(n, s))(n);
                o = Object.assign({}, o, C);
              }
            }
            return o;
          };
        },
        v = n("tZ2j"),
        w = n.n(v),
        _ = n("ITVs").version,
        C = function (e) {
          if (!e) return null;
          var t = {};
          for (var n in e) "sx" !== n && (t[n] = e[n]);
          var o = (function (e) {
            if (e.sx || e.css)
              return function (t) {
                return [
                  b(e.sx)(t),
                  "function" === typeof e.css ? e.css(t) : e.css,
                ];
              };
          })(e);
          return o && (t.css = o), t;
        },
        S = function (e, t) {
          for (var n = [], o = arguments.length - 2; o-- > 0; )
            n[o] = arguments[o + 2];
          return u.c.apply(void 0, [e, C(t)].concat(n));
        },
        E = c.a.createContext({ __EMOTION_VERSION__: _, theme: null }),
        k = function () {
          return c.a.useContext(E);
        },
        O = "function" === typeof Symbol && Symbol.for,
        I = O ? Symbol.for("react.element") : 60103,
        P = O ? Symbol.for("react.forward_ref") : 60103,
        x = function (e) {
          return (
            !!e && "object" === typeof e && e.$$typeof !== I && e.$$typeof !== P
          );
        },
        A = function (e, t, n) {
          return t;
        },
        j = function (e, t) {
          return w()(e, t, { isMergeableObject: x, arrayMerge: A });
        };
      j.all = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        return w.a.all(e, { isMergeableObject: x, arrayMerge: A });
      };
      var T = function (e) {
          var t = e.context,
            n = e.children;
          return S(
            u.b.Provider,
            { value: t.theme },
            S(E.Provider, { value: t, children: n })
          );
        },
        B = function (e) {
          var t = e.theme,
            n = e.children,
            o = k();
          var r =
            "function" === typeof t
              ? Object.assign({}, o, { theme: t(o.theme) })
              : j.all({}, o, { theme: t });
          return S(T, { context: r, children: n });
        },
        N = function (e) {
          return "--theme-ui-" + e;
        },
        L = function (e, t) {
          return "var(" + N(e) + ", " + t + ")";
        },
        M = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return e.filter(Boolean).join("-");
        },
        U = { fontWeights: !0, lineHeights: !0 },
        F = {
          useCustomProperties: !0,
          initialColorModeName: !0,
          initialColorMode: !0,
        },
        R = function (e, t) {
          return "number" !== typeof t || U[e] ? t : t + "px";
        },
        D = function (e, t, n) {
          var o = Array.isArray(e) ? [] : {};
          for (var r in e) {
            var i = e[r],
              a = M(t, r);
            if (i && "object" === typeof i) o[r] = D(i, a, r);
            else if (F[r]) o[r] = i;
            else {
              var s = R(n || r, i);
              o[r] = L(a, s);
            }
          }
          return o;
        },
        z = function (e, t) {
          var n = {};
          for (var o in t)
            if ("modes" !== o) {
              var r = M(e, o),
                i = t[o];
              i && "object" === typeof i
                ? (n = Object.assign({}, n, z(r, i)))
                : (n[N(r)] = i);
            }
          return n;
        },
        H = "theme-ui-color-mode",
        V = function (e) {
          try {
            return window.localStorage.getItem(H) || e;
          } catch (t) {
            console.warn(
              "localStorage is disabled and color mode might not work as expected.",
              "Please check your Site Settings.",
              t
            );
          }
        },
        q = function (e) {
          try {
            window.localStorage.setItem(H, e);
          } catch (t) {
            console.warn(
              "localStorage is disabled and color mode might not work as expected.",
              "Please check your Site Settings.",
              t
            );
          }
        },
        G = function (e) {
          void 0 === e && (e = {});
          var t = c.a.useState(e.initialColorModeName || "default"),
            n = t[0],
            o = t[1];
          return (
            c.a.useEffect(function () {
              var t = V();
              if (
                (document.body.classList.remove("theme-ui-" + t),
                t || !e.useColorSchemeMediaQuery)
              )
                t && t !== n && o(t);
              else {
                var r = (function () {
                  var e = "(prefers-color-scheme: dark)",
                    t = "(prefers-color-scheme: light)",
                    n = window.matchMedia ? window.matchMedia(e) : {},
                    o = window.matchMedia ? window.matchMedia(t) : {};
                  return n.media === e && n.matches
                    ? "dark"
                    : o.media === t && o.matches
                    ? "light"
                    : "default";
                })();
                o(r);
              }
            }, []),
            c.a.useEffect(
              function () {
                n && q(n);
              },
              [n]
            ),
            [n, o]
          );
        },
        W = function () {
          return S(u.a, {
            styles: function (e) {
              return (function (e) {
                if (
                  (void 0 === e && (e = {}),
                  !e.colors || !1 === e.useBodyStyles)
                )
                  return {};
                if (!1 === e.useCustomProperties || !e.colors.modes)
                  return b({ body: { color: "text", bg: "background" } })(e);
                var t = e.rawColors || e.colors,
                  n = t.modes,
                  o = z("colors", t);
                return (
                  Object.keys(n).forEach(function (e) {
                    o["&.theme-ui-" + e] = z("colors", n[e]);
                  }),
                  b({
                    body: Object.assign({}, o, {
                      color: "text",
                      bg: "background",
                    }),
                  })(e)
                );
              })(e);
            },
          });
        },
        X = function (e) {
          var t = e.children,
            n = k(),
            o = G(n.theme),
            r = o[0],
            i = o[1],
            a = (function (e, t) {
              if (!t) return e;
              var n = l(e, "colors.modes", {});
              return j.all({}, e, { colors: l(n, t, {}) });
            })(n.theme || {}, r),
            s = Object.assign({}, a);
          !1 !== a.useCustomProperties && (s.colors = D(s.colors, "colors"));
          var c = Object.assign({}, n, {
            theme: a,
            colorMode: r,
            setColorMode: i,
          });
          return S(
            u.b.Provider,
            { value: s },
            S(E.Provider, { value: c }, S(W, { key: "color-mode" }), t)
          );
        },
        K = n("5D9J");
      function J(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Y(Object(n), !0).forEach(function (t) {
                J(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Y(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Z(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var $ = c.a.createContext({}),
        ee = function (e) {
          var t = c.a.useContext($),
            n = t;
          return e && (n = "function" === typeof e ? e(t) : Q(Q({}, t), e)), n;
        },
        te = function (e) {
          var t = ee(e.components);
          return c.a.createElement($.Provider, { value: t }, e.children);
        },
        ne = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return c.a.createElement(c.a.Fragment, {}, t);
          },
        },
        oe = c.a.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            r = e.originalType,
            i = e.parentName,
            a = Z(e, ["components", "mdxType", "originalType", "parentName"]),
            s = ee(n),
            u = o,
            l = s["".concat(i, ".").concat(u)] || s[u] || ne[u] || r;
          return n
            ? c.a.createElement(l, Q(Q({ ref: t }, a), {}, { components: n }))
            : c.a.createElement(l, Q({ ref: t }, a));
        });
      oe.displayName = "MDXCreateElement";
      var re = { inlineCode: "code", thematicBreak: "hr", root: "div" },
        ie = function (e) {
          return function (t) {
            return b(l(t.theme, "styles." + e))(t.theme);
          };
        },
        ae = Object(K.default)("div")(ie("div")),
        se = {};
      [
        "p",
        "b",
        "i",
        "a",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "img",
        "pre",
        "code",
        "ol",
        "ul",
        "li",
        "blockquote",
        "hr",
        "em",
        "table",
        "tr",
        "th",
        "td",
        "em",
        "strong",
        "del",
        "inlineCode",
        "thematicBreak",
        "div",
        "root",
      ].forEach(function (e) {
        var t;
        (se[e] = Object(K.default)(re[(t = e)] || t)(ie(e))), (ae[e] = se[e]);
      });
      var ce = function (e) {
          var t = Object.assign({}, se);
          return (
            Object.keys(e).forEach(function (n) {
              t[n] = Object(K.default)(e[n])(ie(n));
            }),
            t
          );
        },
        ue = function (e) {
          var t = e.components,
            n = e.children,
            o = ee();
          return S(te, {
            components: ce(Object.assign({}, o, t)),
            children: n,
          });
        },
        le = function () {
          return S(u.a, {
            styles: function (e) {
              if (!1 === e.useBodyStyles || (e.styles && !e.styles.root))
                return !1;
              var t = !1 === e.useBorderBox ? null : "border-box";
              return b({
                "*": { boxSizing: t },
                body: { margin: 0, variant: "styles.root" },
              })(e);
            },
          });
        },
        pe = function (e) {
          var t = e.theme,
            n = e.components,
            o = e.children;
          return "function" === typeof k().setColorMode
            ? S(B, { theme: t }, S(ue, { components: n, children: o }))
            : S(
                B,
                { theme: t },
                S(X, null, S(le), S(ue, { components: n, children: o }))
              );
        },
        de = n("vOnD"),
        he = n("fQM2"),
        fe = n("v4IS"),
        me = n("JIIv"),
        ge = n("Nt7R"),
        ye = n("Qycn"),
        be = n("HzrR"),
        ve = n("vYnt"),
        we = {
          container: {},
          formContainer: {},
          formSection: {},
          formField: {},
          sectionHeader: {},
          sectionBody: {},
          sectionFooter: {},
          sectionFooterPrimaryContent: {},
          sectionFooterSecondaryContent: {},
          input: {},
          button: {},
          photoPickerButton: {},
          photoPlaceholder: {},
          signInButton: {},
          signInButtonIcon: {},
          signInButtonContent: {},
          amazonSignInButton: {},
          facebookSignInButton: {},
          googleSignInButton: {},
          oAuthSignInButton: {},
          formRow: {},
          strike: {},
          strikeContent: {},
          actionRow: {},
          a: {},
          hint: {},
          radio: {},
          label: {},
          inputLabel: {},
          toast: {},
          navBar: {},
          nav: {},
          navRight: {},
          navItem: {},
          navButton: {},
        },
        _e = function () {
          return (_e =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Ce = function (e) {
          var t = e.theme || we,
            n = ot(e, t.container),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "div",
              _e({}, o, { className: ve.container, style: n }),
              e.children
            )
          );
        },
        Se = function (e) {
          var t = e.theme || we;
          return nt(
            s.createElement(
              "div",
              { className: ve.formContainer, style: t.formContainer },
              e.children
            )
          );
        },
        Ee = function (e) {
          var t = e.theme || we,
            n = ot(e, t.formSection);
          return s.createElement(
            Se,
            { theme: t },
            nt(
              s.createElement(
                "div",
                { className: ve.formSection, style: n },
                e.children
              )
            )
          );
        },
        ke = function (e) {
          var t = e.theme || we,
            n = ot(e, t.sectionHeader),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "div",
              _e({}, o, { className: ve.sectionHeader, style: n }),
              s.createElement(
                Oe,
                { theme: t },
                e.children,
                e.hint &&
                  s.createElement(
                    "div",
                    { className: ve.sectionHeaderHint },
                    e.hint
                  )
              )
            )
          );
        },
        Oe = function (e) {
          var t = e.theme || we,
            n = ot(e, t.sectionHeaderContent);
          return nt(
            s.createElement(
              "span",
              { className: ve.sectionHeaderContent, style: n },
              e.children
            )
          );
        },
        Ie = function (e) {
          var t = e.theme || we,
            n = ot(e, t.sectionFooter),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "div",
              _e({}, o, { className: ve.sectionFooter, style: n }),
              e.children
            )
          );
        },
        Pe = function (e) {
          var t = e.theme || we,
            n = ot(e, t.sectionFooterPrimaryContent);
          return nt(
            s.createElement(
              "span",
              { className: ve.sectionFooterPrimaryContent, style: n },
              e.children
            )
          );
        },
        xe = function (e) {
          var t = e.theme || we,
            n = ot(e, t.sectionFooterSecondaryContent);
          return nt(
            s.createElement(
              "span",
              { className: ve.sectionFooterSecondaryContent, style: n },
              e.children
            )
          );
        },
        Ae = function (e) {
          var t = e.theme || we,
            n = ot(e, t.sectionBody),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "div",
              _e({}, o, { className: ve.sectionBody, style: n }),
              e.children
            )
          );
        },
        je = function (e) {
          var t = e.theme || we,
            n = ot(e, t.strike);
          return nt(
            s.createElement(
              "div",
              { className: ve.strike, style: n },
              s.createElement(Te, { theme: t }, e.children)
            )
          );
        },
        Te = function (e) {
          var t = e.theme || we;
          return nt(
            s.createElement(
              "span",
              { className: ve.strikeContent, style: t.strikeContent },
              e.children
            )
          );
        },
        Be = function (e) {
          var t = e.theme || we,
            n = ot(e, t.formRow),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "div",
              _e({}, o, { className: ve.formRow, style: n }),
              e.children
            )
          );
        },
        Ne = function (e) {
          var t = e.id || "_" + e.value,
            n = e.theme || we;
          return s.createElement(
            Be,
            { theme: n },
            s.createElement(Le, _e({}, e, { id: t })),
            s.createElement(Ge, { htmlFor: t, theme: n }, e.placeholder)
          );
        },
        Le = function (e) {
          var t = e.theme || we,
            n = ot(e, t.radio),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "input",
              _e({}, o, { type: "radio", className: ve.radio, style: n })
            )
          );
        },
        Me = function (e) {
          var t = e.theme || we,
            n = ot(e, t.input),
            o = Object(be.g)(e, "theme");
          return s.createElement(
            "input",
            _e({}, o, { className: ve.input, style: n })
          );
        },
        Ue = function (e) {
          var t = e.theme || we,
            n = ot(e, t.selectInput);
          return s.createElement(
            "div",
            { className: ve.selectInput, style: n },
            e.children
          );
        },
        Fe = function (e) {
          var t = e.theme || we,
            n = ot(e, t.formField),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "div",
              _e({}, o, { className: ve.formField, style: n }),
              e.children
            )
          );
        },
        Re = function (e) {
          var t = e.theme || we,
            n = ot(e, t.button),
            o = e.disabled || !1,
            r = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "button",
              _e({}, r, { className: ve.button, style: n, disabled: o }),
              e.children
            )
          );
        },
        De = function (e) {
          var t = e.theme || we,
            n = ot(e, t.photoPickerButton),
            o = Object(be.g)(e, "theme");
          return s.createElement(
            "button",
            _e({}, o, {
              className: [ve.photoPickerButton, ve.button].join(" "),
              style: n,
            }),
            e.children
          );
        },
        ze = function (e) {
          var t = e.theme || we,
            n = Object.assign({}, t.signInButton, t[e.variant]),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "button",
              _e({}, o, { className: ve.signInButton, style: n }),
              e.children
            )
          );
        },
        He = function (e) {
          var t = e.theme || we,
            n = ot(e, t.signInButtonIcon),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "span",
              _e({}, o, { className: ve.signInButtonIcon, style: n }),
              e.children
            )
          );
        },
        Ve = function (e) {
          var t = e.theme || we,
            n = ot(e, t.signInButtonContent);
          return nt(
            s.createElement(
              "span",
              { className: ve.signInButtonContent, style: n },
              e.children
            )
          );
        },
        qe = function (e) {
          var t = e.theme || we,
            n = ot(e, t.a),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "a",
              _e({}, o, { className: ve.a, style: n }),
              e.children
            )
          );
        },
        Ge = function (e) {
          var t = e.theme || we,
            n = ot(e, t.label),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "label",
              _e({}, o, { className: ve.label, style: n }),
              e.children
            )
          );
        },
        We = function (e) {
          var t = e.theme || we,
            n = ot(e, t.hint);
          return nt(
            s.createElement("div", { className: ve.hint, style: n }, e.children)
          );
        },
        Xe = function (e) {
          var t = e.theme || we,
            n = ot(e, t.inputLabel);
          return nt(
            s.createElement(
              "div",
              { className: ve.inputLabel, style: n },
              e.children
            )
          );
        },
        Ke = function (e) {
          var t = e.theme || we,
            n = ot(e, t.navBar),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "div",
              _e({}, o, { className: ve.navBar, style: n }),
              e.children
            )
          );
        },
        Je = function (e) {
          var t = e.theme || we,
            n = ot(e, t.nav),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "div",
              _e({}, o, { className: ve.nav, style: n }),
              e.children
            )
          );
        },
        Ye = function (e) {
          var t = e.theme || we,
            n = ot(e, t.navRight),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "div",
              _e({}, o, { className: ve.navRight, style: n }),
              e.children
            )
          );
        },
        Qe = function (e) {
          var t = e.theme || we,
            n = ot(e, t.navItem),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "div",
              _e({}, o, { className: ve.navItem, style: n }),
              e.children
            )
          );
        },
        Ze = function (e) {
          var t = e.theme || we,
            n = ot(e, t.navButton),
            o = Object(be.g)(e, "theme");
          return nt(
            s.createElement(
              "button",
              _e({}, o, { className: ve.button, style: n }),
              nt(s.createElement("span", null, e.children))
            )
          );
        },
        $e = function (e) {
          var t = e.onClose,
            n = e.theme || we;
          return s.createElement(
            "div",
            _e({}, e, { theme: n, className: ve.toast, style: n.toast }),
            s.createElement("span", null, e.children),
            s.createElement("a", { className: ve.toastClose, onClick: t })
          );
        };
      $e.defaultProps = { onClose: function () {} };
      var et,
        tt = function (e) {
          var t = e.theme || we,
            n = ot(e, t.photoPlaceholder);
          return s.createElement(
            "div",
            { className: ve.photoPlaceholder, style: n },
            s.createElement(
              "div",
              { className: ve.photoPlaceholderIcon },
              s.createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "64",
                  height: "64",
                  viewBox: "0 0 24 24",
                },
                s.createElement("circle", { cx: "12", cy: "12", r: "3.2" }),
                s.createElement("path", {
                  d: "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",
                }),
                s.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
              )
            )
          );
        },
        nt = function (e) {
          var t = e.props.style || {},
            n = t.before,
            o = t.after;
          return n || o
            ? s.createElement(
                "span",
                { style: { position: "relative" } },
                n ? s.createElement("span", { style: n }, n.content) : null,
                e,
                o ? s.createElement("span", { style: o }, o.content) : null
              )
            : e;
        },
        ot = function (e, t) {
          var n = e.id,
            o = e.style,
            r = Object.assign({}, o, t);
          if (!n) return r;
          var i = "#" + n;
          return Object.assign(r, r[i]), r;
        };
      !(function (e) {
        (e.EMAIL = "email"),
          (e.PHONE_NUMBER = "phone_number"),
          (e.USERNAME = "username");
      })(et || (et = {}));
      var rt,
        it = [
          "+1",
          "+7",
          "+20",
          "+27",
          "+30",
          "+31",
          "+32",
          "+33",
          "+34",
          "+36",
          "+39",
          "+40",
          "+41",
          "+43",
          "+44",
          "+45",
          "+46",
          "+47",
          "+48",
          "+49",
          "+51",
          "+52",
          "+53",
          "+54",
          "+55",
          "+56",
          "+57",
          "+58",
          "+60",
          "+61",
          "+62",
          "+63",
          "+64",
          "+65",
          "+66",
          "+81",
          "+82",
          "+84",
          "+86",
          "+90",
          "+91",
          "+92",
          "+93",
          "+94",
          "+95",
          "+98",
          "+212",
          "+213",
          "+216",
          "+218",
          "+220",
          "+221",
          "+222",
          "+223",
          "+224",
          "+225",
          "+226",
          "+227",
          "+228",
          "+229",
          "+230",
          "+231",
          "+232",
          "+233",
          "+234",
          "+235",
          "+236",
          "+237",
          "+238",
          "+239",
          "+240",
          "+241",
          "+242",
          "+243",
          "+244",
          "+245",
          "+246",
          "+248",
          "+249",
          "+250",
          "+251",
          "+252",
          "+253",
          "+254",
          "+255",
          "+256",
          "+257",
          "+258",
          "+260",
          "+261",
          "+262",
          "+263",
          "+264",
          "+265",
          "+266",
          "+267",
          "+268",
          "+269",
          "+290",
          "+291",
          "+297",
          "+298",
          "+299",
          "+345",
          "+350",
          "+351",
          "+352",
          "+353",
          "+354",
          "+355",
          "+356",
          "+357",
          "+358",
          "+359",
          "+370",
          "+371",
          "+372",
          "+373",
          "+374",
          "+375",
          "+376",
          "+377",
          "+378",
          "+379",
          "+380",
          "+381",
          "+382",
          "+385",
          "+386",
          "+387",
          "+389",
          "+420",
          "+421",
          "+423",
          "+500",
          "+501",
          "+502",
          "+503",
          "+504",
          "+505",
          "+506",
          "+507",
          "+508",
          "+509",
          "+537",
          "+590",
          "+591",
          "+593",
          "+594",
          "+595",
          "+596",
          "+597",
          "+598",
          "+599",
          "+670",
          "+672",
          "+673",
          "+674",
          "+675",
          "+676",
          "+677",
          "+678",
          "+679",
          "+680",
          "+681",
          "+682",
          "+683",
          "+685",
          "+686",
          "+687",
          "+688",
          "+689",
          "+690",
          "+691",
          "+692",
          "+850",
          "+852",
          "+853",
          "+855",
          "+856",
          "+872",
          "+880",
          "+886",
          "+960",
          "+961",
          "+962",
          "+963",
          "+964",
          "+965",
          "+966",
          "+967",
          "+968",
          "+970",
          "+971",
          "+972",
          "+973",
          "+974",
          "+975",
          "+976",
          "+977",
          "+992",
          "+993",
          "+994",
          "+995",
          "+996",
          "+998",
        ],
        at = {
          section: "sign-in-section",
          headerSection: "sign-in-header-section",
          bodySection: "sign-in-body-section",
          footerSection: "sign-in-footer-section",
          usernameInput: "username-input",
          passwordInput: "sign-in-password-input",
          forgotPasswordLink: "sign-in-forgot-password-link",
          signInButton: "sign-in-sign-in-button",
          createAccountLink: "sign-in-create-account-link",
          signInError: "authenticator-error",
        },
        st = { button: "sign-out-button", section: "sign-out-section" },
        ct = {
          section: "sign-up-section",
          headerSection: "sign-up-header-section",
          bodySection: "sign-up-body-section",
          nonPhoneNumberInput: "sign-up-non-phone-number-input",
          phoneNumberInput: "sign-up-phone-number-input",
          dialCodeSelect: "sign-up-dial-code-select",
          footerSection: "sign-up-footer-section",
          createAccountButton: "sign-up-create-account-button",
          signInLink: "sign-up-sign-in-link",
          signUpButton: "sign-up-sign-up-button",
          signInButton: "sign-up-sign-in-button",
          confirmButton: "sign-up-confirm-button",
        },
        ut = {
          section: "verify-contact-section",
          headerSection: "verify-contact-header-section",
          bodySection: "verify-contact-body-section",
          submitButton: "verify-contact-submit-button",
          verifyButton: "verify-contact-verify-button",
          skipLink: "verify-contact-skip-link",
        },
        lt = { component: "totp-setup-component" },
        pt = {
          section: "require-new-password-section",
          headerSection: "require-new-password-header-section",
          footerSection: "require-new-password-footer-section",
          bodySection: "require-new-password-body-section",
          newPasswordInput: "require-new-password-new-password-input",
          backToSignInLink: "require-new-password-back-to-sign-in-link",
          submitButton: "require-new-password-submit-button",
        },
        dt = { section: "loading-secton" },
        ht = {
          usernameInput: "username-input",
          emailInput: "email-input",
          phoneNumberInput: "phone-number-input",
          dialCodeSelect: "dial-code-select",
        },
        ft = {
          navBar: "greetings-nav-bar",
          nav: "greetings-nav",
          navRight: "greetings-nav-right",
        },
        mt = {
          section: "federated-sign-in-section",
          bodySection: "federated-sign-in-body-section",
          signInButtons: "federated-sign-in-buttons",
        },
        gt = {
          section: "confirm-sign-up-section",
          headerSection: "confirm-sign-up-header-section",
          bodySection: "confirm-sign-up-body-section",
          usernameInput: "confirm-sign-up-username-input",
          confirmationCodeInput: "confirm-sign-up-confirmation-code-input",
          resendCodeLink: "confirm-sign-up-resend-code-link",
          confirmButton: "confirm-sign-up-confirm-button",
          backToSignInLink: "confirm-sign-up-back-to-sign-in-link",
        },
        yt = {
          section: "confirm-sign-in-section",
          headerSection: "confirm-sign-in-header-section",
          bodySection: "confirm-sign-in-body-section",
          codeInput: "confirm-sign-in-code-input",
          confirmButton: "confirm-sign-in-confirm-button",
          backToSignInLink: "confirm-sign-in-back-to-sign-in-link",
        },
        bt = {
          section: "forgot-password-section",
          headerSection: "forgot-password-header-section",
          bodySection: "forgot-password-body-section",
          submitButton: "forgot-password-submit-button",
          sendCodeButton: "forgot-password-send-code-button",
          resendCodeLink: "forgot-password-resend-code-link",
          backToSignInLink: "forgot-password-back-to-sign-in-link",
          usernameInput: "username-input",
          codeInput: "forgot-password-code-input",
          newPasswordInput: "forgot-password-new-password-input",
        },
        vt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        wt = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.handleInputChange = n.handleInputChange.bind(n)),
              (n.composePhoneNumber = n.composePhoneNumber.bind(n)),
              (n.inputs = {
                dial_code: n.props.defaultDialCode || "+1",
                phone_line_number: "",
              }),
              n
            );
          }
          return (
            vt(t, e),
            (t.prototype.composePhoneNumber = function (e, t) {
              return "" + (e || "+1") + t.replace(/[-()]/g, "");
            }),
            (t.prototype.handleInputChange = function (e) {
              var t = e.target,
                n = t.name,
                o = t.value;
              (this.inputs[n] = o),
                this.props.onChangeText &&
                  this.props.onChangeText(
                    this.composePhoneNumber(
                      this.inputs.dial_code,
                      this.inputs.phone_line_number
                    )
                  );
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.theme,
                n = void 0 === t ? we : t,
                o = e.required,
                r = void 0 === o || o,
                i = e.defaultDialCode,
                a = void 0 === i ? "+1" : i,
                c = e.label,
                u = void 0 === c ? "Phone Number" : c,
                l = e.placeholder,
                p = void 0 === l ? "Enter your phone number" : l;
              return s.createElement(
                Fe,
                { theme: n, key: "phone_number" },
                r
                  ? s.createElement(Xe, { theme: n }, me.a.get(u), " *")
                  : s.createElement(Xe, { theme: n }, me.a.get(u)),
                s.createElement(
                  Ue,
                  { theme: n },
                  s.createElement(
                    "select",
                    {
                      name: "dial_code",
                      defaultValue: a,
                      onChange: this.handleInputChange,
                      "data-test": ht.dialCodeSelect,
                    },
                    it.map(function (e) {
                      return s.createElement("option", { key: e, value: e }, e);
                    })
                  ),
                  s.createElement(Me, {
                    placeholder: me.a.get(p),
                    theme: n,
                    type: "tel",
                    id: "phone_line_number",
                    key: "phone_line_number",
                    name: "phone_line_number",
                    onChange: this.handleInputChange,
                    "data-test": ht.phoneNumberInput,
                  })
                )
              );
            }),
            t
          );
        })(s.Component),
        _t = {
          container: {
            fontFamily:
              '-apple-system,\n                BlinkMacSystemFont,\n                "Segoe UI",\n                Roboto,\n                "Helvetica Neue",\n                Arial,\n                sans-serif,\n                "Apple Color Emoji",\n                "Segoe UI Emoji",\n                "Segoe UI Symbol"',
            fontWeight: "400",
            lineHeight: "1.5",
            color: "#212529",
            textAlign: "left",
            paddingLeft: "15px",
            paddingRight: "15px",
          },
          navBar: {
            position: "relative",
            border: "1px solid transparent",
            borderColor: "#e7e7e7",
          },
          nav: { margin: "7.5px" },
          navRight: { textAlign: "right" },
          navItem: {
            display: "inline-block",
            padding: "10px 5px",
            lineHeight: "20px",
          },
          navButton: {
            display: "inline-block",
            padding: "6px 12px",
            marginTop: "8px",
            marginBottom: "8px",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "1.42857143",
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            touchAction: "manipulation",
            cursor: "pointer",
            userSelect: "none",
            backgroundImage: "none",
            border: "1px solid transparent",
            borderRadius: "4px",
            color: "#333",
            backgroundColor: "#fff",
            borderColor: "#ccc",
          },
          formContainer: { textAlign: "center" },
          formSection: {
            marginBottom: "20px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "4px",
            textAlign: "left",
            width: "400px",
            display: "inline-block",
          },
          errorSection: {
            marginBottom: "20px",
            color: "#fff",
            backgroundColor: "#f0ad4e",
            border: "1px solid #eea236",
            borderRadius: "4px",
            textAlign: "left",
          },
          sectionHeader: {
            color: "#fff",
            backgroundColor: "#337ab7",
            borderColor: "#337ab7",
            padding: "10px 15px",
            borderBottom: "1px solid transparent",
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px",
            textAlign: "center",
          },
          sectionBody: { padding: "15px" },
          sectionFooter: {
            color: "#333",
            backgroundColor: "#f5f5f5",
            padding: "10px 15px",
            borderTop: "1px solid #ddd",
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px",
          },
          formRow: { marginBottom: "15px" },
          actionRow: { marginBottom: "15px" },
          space: { display: "inline-block", width: "20px" },
          signInButton: {
            position: "relative",
            padding: "6px 12px 6px 44px",
            fontSize: "14px",
            textAlign: "left",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            width: "100%",
            marginTop: "2px",
            "#google_signin_btn": {
              color: "#fff",
              backgroundColor: "#dd4b39",
              borderColor: "rgba(0,0,0,0.2)",
            },
            "#facebook_signin_btn": {
              color: "#fff",
              backgroundColor: "#3b5998",
              borderColor: "rgba(0,0,0,0.2)",
            },
          },
          input: {
            display: "block",
            width: "100%",
            height: "34px",
            padding: "6px 12px",
            fontSize: "14px",
            lineHeight: "1.42857143",
            color: "#555",
            backgroundColor: "#fff",
            backgroundImage: "none",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "inset 0 1px 1px rgba(0,0,0,.075)",
            boxSizing: "border-box",
            transition:
              "border-color ease-in-out .15s,box-shadow ease-in-out .15s",
          },
          button: {
            display: "inline-block",
            padding: "6px 12px",
            marginBottom: "0",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "1.42857143",
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            touchAction: "manipulation",
            cursor: "pointer",
            userSelect: "none",
            backgroundImage: "none",
            border: "1px solid transparent",
            borderRadius: "4px",
            color: "#333",
            backgroundColor: "#fff",
            borderColor: "#ccc",
          },
          a: { color: "#007bff", cursor: "pointer" },
          pre: {
            overflow: "auto",
            fontFamily:
              'Menlo,\n                Monaco,\n                Consolas,\n                "Courier New",\n                monospace',
            display: "block",
            padding: "9.5px",
            margin: "0 0 10px",
            fontSize: "13px",
            lineHeight: "1.42857143",
            color: "#333",
            wordBreak: "break-all",
            wordWrap: "break-word",
            backgroundColor: "#f5f5f5",
            border: "1px solid #ccc",
            borderRadius: "4px",
          },
          col1: { display: "inline-block", width: "8.33333333%" },
          col2: { display: "inline-block", width: "16.66666667%" },
          col3: { display: "inline-block", width: "25%" },
          col4: { display: "inline-block", width: "33.33333333%" },
          col5: { display: "inline-block", width: "41.66666667%" },
          col6: { display: "inline-block", width: "50%" },
          col7: { display: "inline-block", width: "58.33333333%" },
          col8: { display: "inline-block", width: "66.66666667%" },
          col9: { display: "inline-block", width: "75%" },
          col10: { display: "inline-block", width: "83.33333333%" },
          col11: { display: "inline-block", width: "91.66666667%" },
          col12: { display: "inline-block", width: "100%" },
          hidden: { display: "none" },
        },
        Ct = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        St =
          (((rt = {})[et.EMAIL] = "Email"),
          (rt[et.PHONE_NUMBER] = "Phone Number"),
          (rt[et.USERNAME] = "Username"),
          rt),
        Et = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.inputs = {}),
              (n._isHidden = !0),
              (n._validAuthStates = []),
              (n.phone_number = ""),
              (n.changeState = n.changeState.bind(n)),
              (n.error = n.error.bind(n)),
              (n.handleInputChange = n.handleInputChange.bind(n)),
              (n.renderUsernameField = n.renderUsernameField.bind(n)),
              (n.getUsernameFromInput = n.getUsernameFromInput.bind(n)),
              (n.onPhoneNumberChanged = n.onPhoneNumberChanged.bind(n)),
              n
            );
          }
          return (
            Ct(t, e),
            (t.prototype.componentDidMount = function () {
              if (
                window &&
                window.location &&
                window.location.search &&
                (!this.props.authData || !this.props.authData.username)
              ) {
                var e = new URLSearchParams(window.location.search),
                  t = e ? e.get("username") : void 0;
                this.setState({ username: t });
              }
            }),
            (t.prototype.getUsernameFromInput = function () {
              var e = this.props.usernameAttributes;
              switch (void 0 === e ? "username" : e) {
                case et.EMAIL:
                  return this.inputs.email;
                case et.PHONE_NUMBER:
                  return this.phone_number;
                default:
                  return this.inputs.username || this.state.username;
              }
            }),
            (t.prototype.onPhoneNumberChanged = function (e) {
              this.phone_number = e;
            }),
            (t.prototype.renderUsernameField = function (e) {
              var t = this.props.usernameAttributes,
                n = void 0 === t ? [] : t;
              return n === et.EMAIL
                ? s.createElement(
                    Fe,
                    { theme: e },
                    s.createElement(Xe, { theme: e }, me.a.get("Email"), " *"),
                    s.createElement(Me, {
                      autoFocus: !0,
                      placeholder: me.a.get("Enter your email"),
                      theme: e,
                      key: "email",
                      name: "email",
                      type: "email",
                      onChange: this.handleInputChange,
                      "data-test": ht.emailInput,
                    })
                  )
                : n === et.PHONE_NUMBER
                ? s.createElement(wt, {
                    theme: e,
                    onChangeText: this.onPhoneNumberChanged,
                  })
                : s.createElement(
                    Fe,
                    { theme: e },
                    s.createElement(
                      Xe,
                      { theme: e },
                      me.a.get(this.getUsernameLabel()),
                      " *"
                    ),
                    s.createElement(Me, {
                      defaultValue: this.state.username,
                      autoFocus: !0,
                      placeholder: me.a.get("Enter your username"),
                      theme: e,
                      key: "username",
                      name: "username",
                      onChange: this.handleInputChange,
                      "data-test": ht.usernameInput,
                    })
                  );
            }),
            (t.prototype.getUsernameLabel = function () {
              var e = this.props.usernameAttributes,
                t = void 0 === e ? et.USERNAME : e;
              return St[t] || t;
            }),
            (t.prototype.usernameFromAuthData = function () {
              var e = this.props.authData;
              if (!e) return "";
              return "object" === typeof e
                ? e.user
                  ? e.user.username
                  : e.username
                : e;
            }),
            (t.prototype.errorMessage = function (e) {
              return "string" === typeof e
                ? e
                : e.message
                ? e.message
                : JSON.stringify(e);
            }),
            (t.prototype.triggerAuthEvent = function (e) {
              var t = this.props.authState;
              this.props.onAuthEvent && this.props.onAuthEvent(t, e);
            }),
            (t.prototype.changeState = function (e, t) {
              this.props.onStateChange && this.props.onStateChange(e, t),
                this.triggerAuthEvent({ type: "stateChange", data: e });
            }),
            (t.prototype.error = function (e) {
              this.triggerAuthEvent({
                type: "error",
                data: this.errorMessage(e),
              });
            }),
            (t.prototype.handleInputChange = function (e) {
              this.inputs = this.inputs || {};
              var t = e.target,
                n = t.name,
                o = t.value,
                r = t.type,
                i = t.checked,
                a = ["radio", "checkbox"].includes(r);
              (this.inputs[n] = a ? i : o),
                (this.inputs.checkedValue = a ? o : null);
            }),
            (t.prototype.render = function () {
              if (!this._validAuthStates.includes(this.props.authState))
                return (this._isHidden = !0), (this.inputs = {}), null;
              if (this._isHidden) {
                this.inputs = {};
                var e = this.props.track;
                e && e();
              }
              return (
                (this._isHidden = !1),
                this.showComponent(this.props.theme || _t)
              );
            }),
            (t.prototype.showComponent = function (e) {
              throw "You must implement showComponent(theme) and don't forget to set this._validAuthStates.";
            }),
            t
          );
        })(s.Component),
        kt = "amplify-react-auth-source",
        Ot = "auth0",
        It = "google",
        Pt = "facebook",
        xt = "amazon",
        At = "amplify-redirected-from-hosted-ui",
        jt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Tt = new ge.a("SignOut"),
        Bt = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.signOut = n.signOut.bind(n)),
              (n.onHubCapsule = n.onHubCapsule.bind(n)),
              ye.a.listen("auth", n.onHubCapsule),
              (n.state = {}),
              n
            );
          }
          return (
            jt(t, e),
            (t.prototype.componentDidMount = function () {
              (this._isMounted = !0), this.findState();
            }),
            (t.prototype.componentWillUnmount = function () {
              this._isMounted = !1;
            }),
            (t.prototype.findState = function () {
              var e = this;
              this.props.authState || this.props.authData
                ? this.props.stateFromStorage &&
                  this.setState({ stateFromStorage: !0 })
                : fe.a
                    .currentAuthenticatedUser()
                    .then(function (t) {
                      e.setState({
                        authState: "signedIn",
                        authData: t,
                        stateFromStorage: !0,
                      });
                    })
                    .catch(function (e) {
                      return Tt.error(e);
                    });
            }),
            (t.prototype.onHubCapsule = function (e) {
              if (this._isMounted) {
                var t = e.channel,
                  n = e.payload;
                e.source;
                "auth" === t && "signIn" === n.event
                  ? this.setState({ authState: "signedIn", authData: n.data })
                  : "auth" !== t ||
                    "signOut" !== n.event ||
                    this.props.authState ||
                    this.setState({ authState: "signIn" }),
                  "auth" !== t ||
                    "signIn" !== n.event ||
                    this.props.authState ||
                    this.setState({ stateFromStorage: !0 });
              }
            }),
            (t.prototype.signOut = function () {
              var e = this,
                t = {};
              try {
                (t = JSON.parse(localStorage.getItem(kt)) || {}),
                  localStorage.removeItem(kt);
              } catch (s) {
                Tt.debug(
                  "Failed to parse the info from " +
                    kt +
                    " from localStorage with " +
                    s
                );
              }
              Tt.debug("sign out from the source", t);
              var n = this.props,
                o = n.googleSignOut,
                r = n.facebookSignOut,
                i = n.amazonSignOut,
                a = n.auth0SignOut;
              switch (t.provider) {
                case It:
                  o ? o() : Tt.debug("No Google signout method provided");
                  break;
                case Pt:
                  r ? r() : Tt.debug("No Facebook signout method provided");
                  break;
                case xt:
                  i ? i() : Tt.debug("No Amazon signout method provided");
                  break;
                case Ot:
                  a ? a(t.opts) : Tt.debug("No Auth0 signout method provided");
              }
              if (!fe.a || "function" !== typeof fe.a.signOut)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a
                .signOut()
                .then(function () {
                  e.state.stateFromStorage || e.changeState("signedOut");
                })
                .catch(function (t) {
                  Tt.debug(t), e.error(t);
                });
            }),
            (t.prototype.render = function () {
              var e = this.props.hide;
              if (e && e.includes(t)) return null;
              var n =
                  "signedIn" === (this.props.authState || this.state.authState),
                o = this.props.theme || we;
              return n
                ? s.createElement(
                    Ze,
                    { theme: o, onClick: this.signOut, "data-test": st.button },
                    me.a.get("Sign Out")
                  )
                : null;
            }),
            t
          );
        })(Et),
        Nt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Lt = function () {
          return (Lt =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Mt = function (e, t, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function a(e) {
              try {
                c(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              try {
                c(o.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((o = o.apply(e, t || [])).next());
          });
        },
        Ut = function (e, t) {
          var n,
            o,
            r,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      o &&
                        (r =
                          2 & i[0]
                            ? o.return
                            : i[0]
                            ? o.throw || ((r = o.return) && r.call(o), 0)
                            : o.next) &&
                        !(r = r.call(o, i[1])).done)
                    )
                      return r;
                    switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                      case 0:
                      case 1:
                        r = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (o = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!r || (i[1] > r[0] && i[1] < r[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < r[1]) {
                          (a.label = r[1]), (r = i);
                          break;
                        }
                        if (r && a.label < r[2]) {
                          (a.label = r[2]), a.ops.push(i);
                          break;
                        }
                        r[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (s) {
                    (i = [6, s]), (o = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        },
        Ft = new ge.a("withGoogle");
      function Rt(e) {
        return (function (t) {
          function n(e) {
            var n = t.call(this, e) || this;
            return (
              (n.initGapi = n.initGapi.bind(n)),
              (n.signIn = n.signIn.bind(n)),
              (n.signOut = n.signOut.bind(n)),
              (n.federatedSignIn = n.federatedSignIn.bind(n)),
              (n.state = {}),
              n
            );
          }
          return (
            Nt(n, t),
            (n.prototype.signIn = function () {
              var e = this,
                t = window.gapi.auth2.getAuthInstance(),
                n = this.props.onError;
              t.signIn().then(
                function (t) {
                  e.federatedSignIn(t);
                  var n = { provider: It };
                  try {
                    localStorage.setItem(kt, JSON.stringify(n));
                  } catch (o) {
                    Ft.debug(
                      "Failed to cache auth source into localStorage",
                      o
                    );
                  }
                },
                function (e) {
                  if (!n) throw e;
                  n(e);
                }
              );
            }),
            (n.prototype.federatedSignIn = function (e) {
              return Mt(this, void 0, void 0, function () {
                var t, n, o, r, i, a;
                return Ut(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (
                        ((t = e.getAuthResponse()),
                        (n = t.id_token),
                        (o = t.expires_at),
                        (r = e.getBasicProfile()),
                        (i = {
                          email: r.getEmail(),
                          name: r.getName(),
                          picture: r.getImageUrl(),
                        }),
                        (a = this.props.onStateChange),
                        !fe.a ||
                          "function" !== typeof fe.a.federatedSignIn ||
                          "function" !== typeof fe.a.currentAuthenticatedUser)
                      )
                        throw new Error(
                          "No Auth module found, please ensure @aws-amplify/auth is imported"
                        );
                      return [
                        4,
                        fe.a.federatedSignIn(
                          "google",
                          { token: n, expires_at: o },
                          i
                        ),
                      ];
                    case 1:
                      return s.sent(), [4, fe.a.currentAuthenticatedUser()];
                    case 2:
                      return (i = s.sent()), a && a("signedIn", i), [2];
                  }
                });
              });
            }),
            (n.prototype.signOut = function () {
              var e =
                window.gapi && window.gapi.auth2
                  ? window.gapi.auth2.getAuthInstance()
                  : null;
              if (!e) return Promise.resolve();
              e.then(function (e) {
                return e
                  ? (Ft.debug("google signing out"), e.signOut())
                  : (Ft.debug("google Auth undefined"), Promise.resolve());
              });
            }),
            (n.prototype.componentDidMount = function () {
              var e = this.props.google_client_id,
                t =
                  window.gapi && window.gapi.auth2
                    ? window.gapi.auth2.getAuthInstance()
                    : null;
              e && !t && this.createScript();
            }),
            (n.prototype.createScript = function () {
              var e = document.createElement("script");
              (e.src = "https://apis.google.com/js/platform.js"),
                (e.async = !0),
                (e.onload = this.initGapi),
                document.body.appendChild(e);
            }),
            (n.prototype.initGapi = function () {
              Ft.debug("init gapi");
              var e = this.props.google_client_id,
                t = window.gapi;
              t.load("auth2", function () {
                t.auth2.init({ client_id: e, scope: "profile email openid" });
              });
            }),
            (n.prototype.render = function () {
              var t =
                window.gapi && window.gapi.auth2
                  ? window.gapi.auth2.getAuthInstance()
                  : null;
              return s.createElement(
                e,
                Lt({}, this.props, {
                  ga: t,
                  googleSignIn: this.signIn,
                  googleSignOut: this.signOut,
                })
              );
            }),
            n
          );
        })(s.Component);
      }
      var Dt = Rt(function (e) {
          return s.createElement(
            ze,
            {
              id: ve.googleSignInButton,
              onClick: e.googleSignIn,
              theme: e.theme || we,
              variant: "googleSignInButton",
            },
            s.createElement(
              He,
              { theme: e.theme || we },
              s.createElement(
                "svg",
                {
                  viewBox: "0 0 256 262",
                  xmlns: "http://ww0w.w3.org/2000/svg",
                  preserveAspectRatio: "xMidYMid",
                },
                s.createElement("path", {
                  d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",
                  fill: "#4285F4",
                }),
                s.createElement("path", {
                  d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
                  fill: "#34A853",
                }),
                s.createElement("path", {
                  d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",
                  fill: "#FBBC05",
                }),
                s.createElement("path", {
                  d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
                  fill: "#EB4335",
                })
              )
            ),
            s.createElement(
              Ve,
              { theme: e.theme || we },
              me.a.get("Sign In with Google")
            )
          );
        }),
        zt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Ht = function () {
          return (Ht =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Vt = new ge.a("withFacebook");
      function qt(e) {
        return (function (t) {
          function n(e) {
            var n = t.call(this, e) || this;
            return (
              (n.fbAsyncInit = n.fbAsyncInit.bind(n)),
              (n.initFB = n.initFB.bind(n)),
              (n.signIn = n.signIn.bind(n)),
              (n.signOut = n.signOut.bind(n)),
              (n.federatedSignIn = n.federatedSignIn.bind(n)),
              (n.state = {}),
              n
            );
          }
          return (
            zt(n, t),
            (n.prototype.signIn = function () {
              var e = this,
                t = window.FB;
              t.getLoginStatus(function (n) {
                var o = { provider: Pt };
                try {
                  localStorage.setItem(kt, JSON.stringify(o));
                } catch (r) {
                  Vt.debug("Failed to cache auth source into localStorage", r);
                }
                "connected" === n.status
                  ? e.federatedSignIn(n.authResponse)
                  : t.login(
                      function (t) {
                        t &&
                          t.authResponse &&
                          e.federatedSignIn(t.authResponse);
                      },
                      { scope: "public_profile,email" }
                    );
              });
            }),
            (n.prototype.federatedSignIn = function (e) {
              Vt.debug(e);
              var t = this.props.onStateChange,
                n = e.accessToken,
                o = 1e3 * e.expiresIn + new Date().getTime();
              n &&
                window.FB.api(
                  "/me",
                  { fields: "name,email,picture" },
                  function (e) {
                    var r = {
                      name: e.name,
                      email: e.email,
                      picture: e.picture.data.url,
                    };
                    if (
                      !fe.a ||
                      "function" !== typeof fe.a.federatedSignIn ||
                      "function" !== typeof fe.a.currentAuthenticatedUser
                    )
                      throw new Error(
                        "No Auth module found, please ensure @aws-amplify/auth is imported"
                      );
                    fe.a
                      .federatedSignIn(
                        "facebook",
                        { token: n, expires_at: o },
                        r
                      )
                      .then(function (e) {
                        return fe.a.currentAuthenticatedUser();
                      })
                      .then(function (e) {
                        t && t("signedIn", e);
                      });
                  }
                );
            }),
            (n.prototype.signOut = function () {
              var e = window.FB;
              if (!e) return Vt.debug("FB sdk undefined"), Promise.resolve();
              e.getLoginStatus(function (t) {
                return "connected" === t.status
                  ? new Promise(function (t, n) {
                      Vt.debug("facebook signing out"),
                        e.logout(function (e) {
                          t(e);
                        });
                    })
                  : Promise.resolve();
              });
            }),
            (n.prototype.componentDidMount = function () {
              this.props.facebook_app_id && !window.FB && this.createScript();
            }),
            (n.prototype.fbAsyncInit = function () {
              Vt.debug("init FB");
              var e = this.props.facebook_app_id,
                t = window.FB;
              t.init({ appId: e, cookie: !0, xfbml: !0, version: "v2.11" }),
                t.getLoginStatus(function (e) {
                  return Vt.debug(e);
                });
            }),
            (n.prototype.initFB = function () {
              window.FB;
              Vt.debug("FB inited");
            }),
            (n.prototype.createScript = function () {
              window.fbAsyncInit = this.fbAsyncInit;
              var e = document.createElement("script");
              (e.src = "https://connect.facebook.net/en_US/sdk.js"),
                (e.async = !0),
                (e.onload = this.initFB),
                document.body.appendChild(e);
            }),
            (n.prototype.render = function () {
              var t = window.FB;
              return s.createElement(
                e,
                Ht({}, this.props, {
                  fb: t,
                  facebookSignIn: this.signIn,
                  facebookSignOut: this.signOut,
                })
              );
            }),
            n
          );
        })(s.Component);
      }
      var Gt = qt(function (e) {
          return s.createElement(
            ze,
            {
              id: ve.facebookSignInButton,
              onClick: e.facebookSignIn,
              theme: e.theme || we,
              variant: "facebookSignInButton",
            },
            s.createElement(
              He,
              { theme: e.theme || we },
              s.createElement(
                "svg",
                { viewBox: "0 0 279 538", xmlns: "http://www.w3.org/2000/svg" },
                s.createElement(
                  "g",
                  { id: "Page-1", fill: "none", fillRule: "evenodd" },
                  s.createElement(
                    "g",
                    { id: "Artboard", fill: "#FFF" },
                    s.createElement("path", {
                      d: "M82.3409742,538 L82.3409742,292.936652 L0,292.936652 L0,196.990154 L82.2410458,196.990154 L82.2410458,126.4295 C82.2410458,44.575144 132.205229,0 205.252865,0 C240.227794,0 270.306232,2.59855099 279,3.79788222 L279,89.2502322 L228.536175,89.2502322 C188.964542,89.2502322 181.270057,108.139699 181.270057,135.824262 L181.270057,196.89021 L276.202006,196.89021 L263.810888,292.836708 L181.16913,292.836708 L181.16913,538 L82.3409742,538 Z",
                      id: "Fill-1",
                    })
                  )
                )
              )
            ),
            s.createElement(
              Ve,
              { theme: e.theme || we },
              me.a.get("Sign In with Facebook")
            )
          );
        }),
        Wt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Xt = function () {
          return (Xt =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Kt = new ge.a("withAmazon");
      function Jt(e) {
        return (function (t) {
          function n(e) {
            var n = t.call(this, e) || this;
            return (
              (n.initAmazon = n.initAmazon.bind(n)),
              (n.signIn = n.signIn.bind(n)),
              (n.signOut = n.signOut.bind(n)),
              (n.federatedSignIn = n.federatedSignIn.bind(n)),
              (n.state = {}),
              n
            );
          }
          return (
            Wt(n, t),
            (n.prototype.signIn = function () {
              var e = this;
              window.amazon.Login.authorize({ scope: "profile" }, function (t) {
                if (t.error)
                  Kt.debug("Failed to login with amazon: " + t.error);
                else {
                  var n = { provider: xt };
                  try {
                    localStorage.setItem(kt, JSON.stringify(n));
                  } catch (o) {
                    Kt.debug(
                      "Failed to cache auth source into localStorage",
                      o
                    );
                  }
                  e.federatedSignIn(t);
                }
              });
            }),
            (n.prototype.federatedSignIn = function (e) {
              var t = e.access_token,
                n = e.expires_in,
                o = this.props.onStateChange,
                r = 1e3 * n + new Date().getTime();
              t &&
                window.amazon.Login.retrieveProfile(function (e) {
                  if (e.success) {
                    var n = {
                      name: e.profile.Name,
                      email: e.profile.PrimaryEmail,
                    };
                    if (
                      !fe.a ||
                      "function" !== typeof fe.a.federatedSignIn ||
                      "function" !== typeof fe.a.currentAuthenticatedUser
                    )
                      throw new Error(
                        "No Auth module found, please ensure @aws-amplify/auth is imported"
                      );
                    fe.a
                      .federatedSignIn("amazon", { token: t, expires_at: r }, n)
                      .then(function (e) {
                        return fe.a.currentAuthenticatedUser();
                      })
                      .then(function (e) {
                        o && o("signedIn", e);
                      });
                  } else Kt.debug("Get user Info failed");
                });
            }),
            (n.prototype.signOut = function () {
              var e = window.amazon;
              if (!e)
                return (
                  Kt.debug("Amazon Login sdk undefined"), Promise.resolve()
                );
              Kt.debug("Amazon signing out"), e.Login.logout();
            }),
            (n.prototype.componentDidMount = function () {
              this.props.amazon_client_id &&
                !window.amazon &&
                this.createScript();
            }),
            (n.prototype.createScript = function () {
              var e = document.createElement("script");
              (e.src = "https://api-cdn.amazon.com/sdk/login1.js"),
                (e.async = !0),
                (e.onload = this.initAmazon),
                document.body.appendChild(e);
            }),
            (n.prototype.initAmazon = function () {
              Kt.debug("init amazon");
              var e = this.props.amazon_client_id;
              window.amazon.Login.setClientId(e);
            }),
            (n.prototype.render = function () {
              var t = window.amazon;
              return s.createElement(
                e,
                Xt({}, this.props, {
                  amz: t,
                  amazonSignIn: this.signIn,
                  amazonSignOut: this.signOut,
                })
              );
            }),
            n
          );
        })(s.Component);
      }
      var Yt = Jt(function (e) {
          return s.createElement(
            ze,
            {
              id: ve.amazonSignInButton,
              onClick: e.amazonSignIn,
              theme: e.theme || we,
              variant: "amazonSignInButton",
            },
            s.createElement(
              He,
              { theme: e.theme || we },
              s.createElement(
                "svg",
                { viewBox: "0 0 248 268", xmlns: "http://www.w3.org/2000/svg" },
                s.createElement(
                  "g",
                  { id: "Artboard-Copy-2", fill: "none", fillRule: "evenodd" },
                  s.createElement("path", {
                    d: "M139.056521,147.024612 C133.548808,156.744524 124.782731,162.726926 115.087401,162.726926 C101.790721,162.726926 93.9937779,152.612964 93.9937779,137.68681 C93.9937779,108.224571 120.447551,102.879017 145.533369,102.879017 L145.533369,110.365976 C145.533369,123.831358 145.876354,135.063787 139.056521,147.024612 M207.206992,162.579655 C209.400505,165.692256 209.887066,169.437725 207.063416,171.770186 C199.996315,177.653081 187.429476,188.590967 180.513926,194.716661 L180.46208,194.621133 C178.176838,196.663031 174.862638,196.810303 172.27828,195.445057 C160.780281,185.9162 158.686473,181.494078 152.405048,172.403055 C133.405233,191.751331 119.909143,197.534719 95.309886,197.534719 C66.1281801,197.534719 43.4791563,179.599451 43.4791563,143.669212 C43.4791563,115.616003 58.6782107,96.5105248 80.4019706,87.1727225 C99.2063636,78.9096034 125.464714,77.4528107 145.533369,75.1641337 L145.533369,70.694248 C145.533369,62.4749122 146.167493,52.7510201 141.297893,45.6541312 C137.110277,39.2856386 129.018206,36.6586354 121.859376,36.6586354 C108.658413,36.6586354 96.9171331,43.4171982 94.0416364,57.4199213 C93.4593582,60.532522 91.1701278,63.5933787 88.003492,63.7406501 L54.4387473,60.1424518 C51.6150972,59.5095829 48.4484614,57.2248862 49.2740201,52.8982915 C56.9712583,12.2553679 93.7983558,0 126.732964,0 C143.587124,0 165.606011,4.47386604 178.902691,17.2148315 C195.760839,32.917146 194.149604,53.8694866 194.149604,76.6726704 L194.149604,130.542157 C194.149604,146.734049 200.87372,153.830938 207.206992,162.579655 Z M233.826346,208.038962 C230.467669,203.683255 211.550709,205.9821 203.056405,206.998432 C200.470662,207.321077 200.076227,205.042397 202.406981,203.404973 C217.475208,192.664928 242.201125,195.766353 245.081698,199.363845 C247.966255,202.981502 244.336653,228.071183 230.172839,240.049379 C228.001452,241.888455 225.929671,240.904388 226.89783,238.468418 C230.077218,230.430525 237.204944,212.418868 233.826346,208.038962 Z M126.768855,264 C74.0234043,264 42.0764048,241.955028 17.7852554,217.541992 C12.9733903,212.705982 6.71799208,206.295994 3.31151296,200.690918 C1.90227474,198.372135 5.59096074,195.021875 8.0442063,196.84375 C38.2390146,219.267578 82.1011654,239.538304 125.529506,239.538304 C154.819967,239.538304 191.046475,227.469543 220.66851,214.867659 C225.146771,212.966167 225.146771,219.180222 224.511585,221.060516 C224.183264,222.03242 209.514625,236.221149 189.247207,247.047411 C170.304273,257.166172 146.397132,264 126.768855,264 Z",
                    id: "Fill-6",
                    fill: "#FFF",
                  })
                )
              )
            ),
            s.createElement(
              Ve,
              { theme: e.theme || we },
              me.a.get("Sign In with Amazon")
            )
          );
        }),
        Qt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Zt = function () {
          return (Zt =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        $t = function (e, t, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function a(e) {
              try {
                c(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              try {
                c(o.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((o = o.apply(e, t || [])).next());
          });
        },
        en = function (e, t) {
          var n,
            o,
            r,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      o &&
                        (r =
                          2 & i[0]
                            ? o.return
                            : i[0]
                            ? o.throw || ((r = o.return) && r.call(o), 0)
                            : o.next) &&
                        !(r = r.call(o, i[1])).done)
                    )
                      return r;
                    switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                      case 0:
                      case 1:
                        r = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (o = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!r || (i[1] > r[0] && i[1] < r[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < r[1]) {
                          (a.label = r[1]), (r = i);
                          break;
                        }
                        if (r && a.label < r[2]) {
                          (a.label = r[2]), a.ops.push(i);
                          break;
                        }
                        r[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (s) {
                    (i = [6, s]), (o = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        },
        tn = new ge.a("withAuth0");
      function nn(e, t) {
        return (function (n) {
          function o(e) {
            var t = n.call(this, e) || this;
            return (
              (t._auth0 = null),
              (t.initialize = t.initialize.bind(t)),
              (t.signIn = t.signIn.bind(t)),
              (t.signOut = t.signOut.bind(t)),
              t
            );
          }
          return (
            Qt(o, n),
            (o.prototype.componentDidMount = function () {
              window.auth0 ? this.initialize() : this.createScript();
            }),
            (o.prototype.createScript = function () {
              var e = document.createElement("script");
              (e.src = "https://cdn.auth0.com/js/auth0/9.8.1/auth0.min.js"),
                (e.async = !0),
                (e.onload = this.initialize),
                document.body.appendChild(e);
            }),
            (o.prototype.initialize = function () {
              var e = this,
                n = fe.a.configure().oauth,
                o = void 0 === n ? {} : n,
                r = this.props.auth0 || t || o.auth0,
                i = this.props,
                a = i.onError,
                s = i.onStateChange,
                c = i.authState;
              r
                ? (tn.debug("withAuth0 configuration", r),
                  this._auth0 ||
                    ((this._auth0 = new window.auth0.WebAuth(r)),
                    (window.auth0_client = this._auth0)),
                  "signedIn" !== c &&
                    this._auth0.parseHash(function (t, n) {
                      if (!t && n) {
                        var o = {
                          provider: Ot,
                          opts: {
                            returnTo: r.returnTo,
                            clientID: r.clientID,
                            federated: r.federated,
                          },
                        };
                        try {
                          localStorage.setItem(kt, JSON.stringify(o));
                        } catch (i) {
                          tn.debug(
                            "Failed to cache auth source into localStorage",
                            i
                          );
                        }
                        e._auth0.client.userInfo(
                          n.accessToken,
                          function (e, t) {
                            var o = void 0,
                              i = void 0,
                              c = void 0;
                            e
                              ? tn.debug("Failed to get the user info", e)
                              : ((o = t.name), (i = t.email), (c = t.picture)),
                              fe.a
                                .federatedSignIn(
                                  r.domain,
                                  {
                                    token: n.idToken,
                                    expires_at:
                                      1e3 * n.expiresIn + new Date().getTime(),
                                  },
                                  { name: o, email: i, picture: c }
                                )
                                .then(function () {
                                  s &&
                                    fe.a
                                      .currentAuthenticatedUser()
                                      .then(function (e) {
                                        s("signedIn", e);
                                      });
                                })
                                .catch(function (e) {
                                  tn.debug(
                                    "Failed to get the aws credentials",
                                    e
                                  ),
                                    a && a(e);
                                });
                          }
                        );
                      } else tn.debug("Failed to parse the url for Auth0", t);
                    }))
                : tn.debug("Auth0 is not configured");
            }),
            (o.prototype.signIn = function () {
              return $t(this, void 0, void 0, function () {
                return en(this, function (e) {
                  if (!this._auth0)
                    throw new Error("the auth0 client is not configured");
                  return this._auth0.authorize(), [2];
                });
              });
            }),
            (o.prototype.signOut = function (e) {
              void 0 === e && (e = {});
              var t = window.auth0_client,
                n = e.returnTo,
                o = e.clientID,
                r = e.federated;
              if (!t) return tn.debug("auth0 sdk undefined"), Promise.resolve();
              t.logout({ returnTo: n, clientID: o, federated: r });
            }),
            (o.prototype.render = function () {
              return s.createElement(
                e,
                Zt({}, this.props, {
                  auth0: this._auth0,
                  auth0SignIn: this.signIn,
                  auth0SignOut: this.signOut,
                })
              );
            }),
            o
          );
        })(s.Component);
      }
      var on = nn(function (e) {
          return s.createElement(
            ze,
            {
              id: ve.auth0SignInButton,
              onClick: e.auth0SignIn,
              theme: e.theme || we,
              variant: "auth0SignInButton",
            },
            s.createElement(
              He,
              { theme: e.theme || we },
              s.createElement(
                "svg",
                {
                  id: "artwork",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 193.7 216.6",
                },
                s.createElement("path", {
                  id: "NEW",
                  className: "st0",
                  d: "M189,66.9L167.2,0H96.8l21.8,66.9H189z M96.8,0H26.5L4.8,66.9h70.4L96.8,0z M4.8,66.9L4.8,66.9\tc-13,39.9,1.2,83.6,35.2,108.3l21.7-66.9L4.8,66.9z M189,66.9L189,66.9l-57,41.4l21.7,66.9l0,0C187.7,150.6,201.9,106.8,189,66.9\tL189,66.9z M39.9,175.2L39.9,175.2l56.9,41.4l56.9-41.4l-56.9-41.4L39.9,175.2z",
                })
              )
            ),
            s.createElement(
              Ve,
              { theme: e.theme || we },
              e.label || "Sign In with Auth0"
            )
          );
        }),
        rn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        an = function () {
          return (an =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        sn = new ge.a("Greetings"),
        cn = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.state = {}),
              (n.onHubCapsule = n.onHubCapsule.bind(n)),
              (n.inGreeting = n.inGreeting.bind(n)),
              ye.a.listen("auth", n.onHubCapsule),
              (n._validAuthStates = ["signedIn"]),
              n
            );
          }
          return (
            rn(t, e),
            (t.prototype.componentDidMount = function () {
              (this._isMounted = !0), this.findState();
            }),
            (t.prototype.componentWillUnmount = function () {
              this._isMounted = !1;
            }),
            (t.prototype.findState = function () {
              var e = this;
              this.props.authState ||
                this.props.authData ||
                fe.a
                  .currentAuthenticatedUser()
                  .then(function (t) {
                    e.setState({
                      authState: "signedIn",
                      authData: t,
                      stateFromStorage: !0,
                    });
                  })
                  .catch(function (e) {
                    return sn.debug(e);
                  });
            }),
            (t.prototype.onHubCapsule = function (e) {
              if (this._isMounted) {
                var t = e.channel,
                  n = e.payload;
                "auth" === t && "signIn" === n.event
                  ? (this.setState({ authState: "signedIn", authData: n.data }),
                    this.props.authState ||
                      this.setState({ stateFromStorage: !0 }))
                  : "auth" !== t ||
                    "signOut" !== n.event ||
                    this.props.authState ||
                    this.setState({ authState: "signIn" });
              }
            }),
            (t.prototype.inGreeting = function (e) {
              var t = this.props.usernameAttributes;
              return (
                "" +
                ((void 0 === t ? et.USERNAME : t) === et.USERNAME
                  ? me.a.get("Hello") + " "
                  : "") +
                e
              );
            }),
            (t.prototype.outGreeting = function () {
              return "";
            }),
            (t.prototype.userGreetings = function (e) {
              var t = this.props.authData || this.state.authData,
                n = this.props.inGreeting || this.inGreeting,
                o = this.props.usernameAttributes,
                r = "";
              switch (void 0 === o ? "username" : o) {
                case et.EMAIL:
                  r = t.attributes ? t.attributes.email : t.username;
                  break;
                case et.PHONE_NUMBER:
                  r = t.attributes ? t.attributes.phone_number : t.username;
                  break;
                default:
                  r =
                    (t.attributes
                      ? t.attributes.name ||
                        (t.attributes.given_name
                          ? t.attributes.given_name +
                            " " +
                            t.attributes.family_name
                          : void 0)
                      : void 0) ||
                    t.name ||
                    t.username;
              }
              var i = "function" === typeof n ? n(r) : n;
              return s.createElement(
                "span",
                null,
                s.createElement(Qe, { theme: e }, i),
                this.renderSignOutButton()
              );
            }),
            (t.prototype.renderSignOutButton = function () {
              var e = this.props.federated,
                t = void 0 === e ? {} : e,
                n = t.google_client_id,
                o = t.facebook_app_id,
                r = t.amazon_client_id,
                i = t.auth0,
                a = fe.a.configure(),
                c = a.oauth,
                u = void 0 === c ? {} : c,
                l = n || a.googleClientId,
                p = o || a.facebookClientId,
                d = r || a.amazonClientId,
                h = i || u.auth0,
                f = Bt;
              l && (f = Rt(Bt)),
                p && (f = qt(Bt)),
                d && (f = Jt(Bt)),
                h && (f = nn(Bt));
              var m = Object.assign({}, this.props, this.state);
              return s.createElement(f, an({}, m));
            }),
            (t.prototype.noUserGreetings = function (e) {
              var t = this.props.outGreeting || this.outGreeting,
                n = "function" === typeof t ? t() : t;
              return n ? s.createElement(Qe, { theme: e }, n) : null;
            }),
            (t.prototype.render = function () {
              var e = this.props.hide;
              if (e && e.includes(t)) return null;
              var n =
                  "signedIn" === (this.props.authState || this.state.authState),
                o = this.props.theme || we,
                r = n ? this.userGreetings(o) : this.noUserGreetings(o);
              return r
                ? s.createElement(
                    Ke,
                    { theme: o, "data-test": ft.navBar },
                    s.createElement(
                      Je,
                      { theme: o, "data-test": ft.nav },
                      s.createElement(
                        Ye,
                        { theme: o, "data-test": ft.navRight },
                        r
                      )
                    )
                  )
                : null;
            }),
            t
          );
        })(Et),
        un = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        ln = function () {
          return (ln =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        };
      function pn(e) {
        return (function (t) {
          function n(e) {
            var n = t.call(this, e) || this;
            return (n.signIn = n.signIn.bind(n)), n;
          }
          return (
            un(n, t),
            (n.prototype.signIn = function (e, t) {
              fe.a.federatedSignIn({ provider: t });
            }),
            (n.prototype.render = function () {
              return s.createElement(
                e,
                ln({}, this.props, { OAuthSignIn: this.signIn })
              );
            }),
            n
          );
        })(s.Component);
      }
      var dn = pn(function (e) {
          return s.createElement(
            ze,
            {
              id: ve.oAuthSignInButton,
              onClick: function () {
                return e.OAuthSignIn();
              },
              theme: e.theme || we,
              variant: "oAuthSignInButton",
            },
            s.createElement(
              Ve,
              { theme: e.theme || we },
              me.a.get(e.label || "Sign in with AWS")
            )
          );
        }),
        hn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        fn = new ge.a("FederatedSignIn"),
        mn = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            hn(t, e),
            (t.prototype.google = function (e) {
              if (!e) return null;
              var t = this.props,
                n = t.theme,
                o = t.onStateChange;
              return s.createElement(Dt, {
                google_client_id: e,
                theme: n,
                onStateChange: o,
              });
            }),
            (t.prototype.facebook = function (e) {
              if (!e) return null;
              var t = this.props,
                n = t.theme,
                o = t.onStateChange;
              return s.createElement(Gt, {
                facebook_app_id: e,
                theme: n,
                onStateChange: o,
              });
            }),
            (t.prototype.amazon = function (e) {
              if (!e) return null;
              var t = this.props,
                n = t.theme,
                o = t.onStateChange;
              return s.createElement(Yt, {
                amazon_client_id: e,
                theme: n,
                onStateChange: o,
              });
            }),
            (t.prototype.OAuth = function (e) {
              if (!e) return null;
              var t = this.props,
                n = t.theme,
                o = t.onStateChange;
              return s.createElement(dn, {
                label: e ? e.label : void 0,
                theme: n,
                onStateChange: o,
              });
            }),
            (t.prototype.auth0 = function (e) {
              if (!e) return null;
              var t = this.props,
                n = t.theme,
                o = t.onStateChange;
              return s.createElement(on, {
                label: e ? e.label : void 0,
                theme: n,
                onStateChange: o,
                auth0: e,
              });
            }),
            (t.prototype.render = function () {
              var e = this.props.authState;
              if (!["signIn", "signedOut", "signedUp"].includes(e)) return null;
              var t = this.props.federated || {};
              if (!fe.a || "function" !== typeof fe.a.configure)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              var n = fe.a.configure().oauth,
                o = void 0 === n ? {} : n;
              if (
                (o.domain
                  ? (t.oauth_config = Object.assign({}, t.oauth_config, o))
                  : o.awsCognito &&
                    (t.oauth_config = Object.assign(
                      {},
                      t.oauth_config,
                      o.awsCognito
                    )),
                o.auth0 && (t.auth0 = Object.assign({}, t.auth0, o.auth0)),
                Object(be.d)(t))
              )
                return null;
              var r = t.google_client_id,
                i = t.facebook_app_id,
                a = t.amazon_client_id,
                c = t.oauth_config,
                u = t.auth0,
                l = this.props.theme || we;
              return s.createElement(
                "div",
                null,
                s.createElement("div", null, this.google(r)),
                s.createElement("div", null, this.facebook(i)),
                s.createElement("div", null, this.amazon(a)),
                s.createElement("div", null, this.OAuth(c)),
                s.createElement("div", null, this.auth0(u)),
                s.createElement(je, { theme: l }, me.a.get("or"))
              );
            }),
            t
          );
        })(s.Component),
        gn =
          ((function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            hn(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.authState,
                  n = e.onStateChange,
                  o = this.props.federated || {};
                if (!fe.a || "function" !== typeof fe.a.configure)
                  throw new Error(
                    "No Auth module found, please ensure @aws-amplify/auth is imported"
                  );
                var r = fe.a.configure().oauth,
                  i = void 0 === r ? {} : r;
                if (
                  (i.domain
                    ? (o.oauth_config = Object.assign({}, o.oauth_config, i))
                    : i.awsCognito &&
                      (o.oauth_config = Object.assign(
                        {},
                        o.oauth_config,
                        i.awsCognito
                      )),
                  i.auth0 && (o.auth0 = Object.assign({}, o.auth0, i.auth0)),
                  !o)
                )
                  return (
                    fn.debug("federated prop is empty. show nothing"),
                    fn.debug(
                      "federated={google_client_id: , facebook_app_id: , amazon_client_id}"
                    ),
                    null
                  );
                if (!["signIn", "signedOut", "signedUp"].includes(t))
                  return null;
                fn.debug("federated Config is", o);
                var a = this.props.theme || we;
                return s.createElement(
                  Ee,
                  { theme: a, "data-test": mt.section },
                  s.createElement(
                    Ae,
                    { theme: a, "data-test": mt.bodySection },
                    s.createElement(mn, {
                      federated: o,
                      theme: a,
                      authState: t,
                      onStateChange: n,
                      "data-test": mt.signInButtons,
                    })
                  )
                );
              });
          })(s.Component),
          [
            {
              label: "Username",
              key: "username",
              required: !0,
              placeholder: "Username",
              displayOrder: 1,
            },
            {
              label: "Password",
              key: "password",
              required: !0,
              placeholder: "Password",
              type: "password",
              displayOrder: 2,
            },
            {
              label: "Email",
              key: "email",
              required: !0,
              placeholder: "Email",
              type: "email",
              displayOrder: 3,
            },
            {
              label: "Phone Number",
              key: "phone_number",
              placeholder: "Phone Number",
              required: !0,
              displayOrder: 4,
            },
          ]),
        yn = [
          {
            label: "Email",
            key: "email",
            required: !0,
            placeholder: "Email",
            type: "email",
            displayOrder: 1,
          },
          {
            label: "Password",
            key: "password",
            required: !0,
            placeholder: "Password",
            type: "password",
            displayOrder: 2,
          },
          {
            label: "Phone Number",
            key: "phone_number",
            placeholder: "Phone Number",
            required: !0,
            displayOrder: 3,
          },
        ],
        bn = [
          {
            label: "Phone Number",
            key: "phone_number",
            placeholder: "Phone Number",
            required: !0,
            displayOrder: 1,
          },
          {
            label: "Password",
            key: "password",
            required: !0,
            placeholder: "Password",
            type: "password",
            displayOrder: 2,
          },
          {
            label: "Email",
            key: "email",
            required: !0,
            placeholder: "Email",
            type: "email",
            displayOrder: 3,
          },
        ],
        vn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        wn = function (e, t, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function a(e) {
              try {
                c(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              try {
                c(o.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((o = o.apply(e, t || [])).next());
          });
        },
        _n = function (e, t) {
          var n,
            o,
            r,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      o &&
                        (r =
                          2 & i[0]
                            ? o.return
                            : i[0]
                            ? o.throw || ((r = o.return) && r.call(o), 0)
                            : o.next) &&
                        !(r = r.call(o, i[1])).done)
                    )
                      return r;
                    switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                      case 0:
                      case 1:
                        r = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (o = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!r || (i[1] > r[0] && i[1] < r[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < r[1]) {
                          (a.label = r[1]), (r = i);
                          break;
                        }
                        if (r && a.label < r[2]) {
                          (a.label = r[2]), a.ops.push(i);
                          break;
                        }
                        r[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (s) {
                    (i = [6, s]), (o = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        },
        Cn = new ge.a("SignUp"),
        Sn = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n.state = { requestPending: !1 }),
              (n._validAuthStates = ["signUp"]),
              (n.signUp = n.signUp.bind(n)),
              (n.sortFields = n.sortFields.bind(n)),
              (n.getDefaultDialCode = n.getDefaultDialCode.bind(n)),
              (n.checkCustomSignUpFields = n.checkCustomSignUpFields.bind(n)),
              (n.needPrefix = n.needPrefix.bind(n)),
              (n.header =
                n.props && n.props.signUpConfig && n.props.signUpConfig.header
                  ? n.props.signUpConfig.header
                  : "Create a new account");
            var o = (n.props || {}).usernameAttributes,
              r = void 0 === o ? et.USERNAME : o;
            return (
              r === et.EMAIL
                ? (n.defaultSignUpFields = yn)
                : r === et.PHONE_NUMBER
                ? (n.defaultSignUpFields = bn)
                : (n.defaultSignUpFields = gn),
              n
            );
          }
          return (
            vn(t, e),
            (t.prototype.validate = function () {
              var e = this,
                t = [];
              return (
                this.signUpFields.map(function (n) {
                  "phone_number" !== n.key
                    ? n.required && !e.inputs[n.key]
                      ? ((n.invalid = !0), t.push(n.label))
                      : (n.invalid = !1)
                    : n.required && !e.phone_number
                    ? ((n.invalid = !0), t.push(n.label))
                    : (n.invalid = !1);
                }),
                t
              );
            }),
            (t.prototype.sortFields = function () {
              var e = this;
              this.props.signUpConfig &&
                this.props.signUpConfig.hiddenDefaults &&
                this.props.signUpConfig.hiddenDefaults.length > 0 &&
                (this.defaultSignUpFields = this.defaultSignUpFields.filter(
                  function (t) {
                    return !e.props.signUpConfig.hiddenDefaults.includes(t.key);
                  }
                )),
                this.checkCustomSignUpFields()
                  ? ((this.props.signUpConfig &&
                      this.props.signUpConfig.hideAllDefaults) ||
                      this.defaultSignUpFields.forEach(function (t) {
                        -1 ===
                          e.signUpFields.findIndex(function (e) {
                            return e.key === t.key;
                          }) && e.signUpFields.push(t);
                      }),
                    this.signUpFields.sort(function (e, t) {
                      return e.displayOrder && t.displayOrder
                        ? e.displayOrder < t.displayOrder
                          ? -1
                          : e.displayOrder > t.displayOrder
                          ? 1
                          : e.key < t.key
                          ? -1
                          : 1
                        : !e.displayOrder && t.displayOrder
                        ? 1
                        : e.displayOrder && !t.displayOrder
                        ? -1
                        : e.displayOrder || t.displayOrder
                        ? void 0
                        : e.key < t.key
                        ? -1
                        : 1;
                    }))
                  : (this.signUpFields = this.defaultSignUpFields);
            }),
            (t.prototype.needPrefix = function (e) {
              var t = this.signUpFields.find(function (t) {
                return t.key === e;
              });
              return 0 !== e.indexOf("custom:")
                ? t.custom
                : (0 === e.indexOf("custom:") &&
                    !1 === t.custom &&
                    Cn.warn(
                      "Custom prefix prepended to key but custom field flag is set to false; retaining manually entered prefix"
                    ),
                  null);
            }),
            (t.prototype.getDefaultDialCode = function () {
              return this.props.signUpConfig &&
                this.props.signUpConfig.defaultCountryCode &&
                -1 !==
                  it.indexOf("+" + this.props.signUpConfig.defaultCountryCode)
                ? "+" + this.props.signUpConfig.defaultCountryCode
                : "+1";
            }),
            (t.prototype.checkCustomSignUpFields = function () {
              return (
                this.props.signUpConfig &&
                this.props.signUpConfig.signUpFields &&
                this.props.signUpConfig.signUpFields.length > 0
              );
            }),
            (t.prototype.signUp = function () {
              return wn(this, void 0, void 0, function () {
                var e,
                  t,
                  n,
                  o,
                  r,
                  i,
                  a,
                  s = this;
                return _n(this, function (c) {
                  switch (c.label) {
                    case 0:
                      if (
                        (this.setState({ requestPending: !0 }),
                        this.inputs.dial_code ||
                          (this.inputs.dial_code = this.getDefaultDialCode()),
                        (e = this.validate()) && e.length > 0)
                      )
                        return (
                          this.setState({ requestPending: !1 }),
                          [
                            2,
                            this.error(
                              "The following fields need to be filled out: " +
                                e.join(", ")
                            ),
                          ]
                        );
                      if (!fe.a || "function" !== typeof fe.a.signUp)
                        throw new Error(
                          "No Auth module found, please ensure @aws-amplify/auth is imported"
                        );
                      if (
                        ((t = {
                          username: this.inputs.username,
                          password: this.inputs.password,
                          attributes: {},
                        }),
                        (n = Object.keys(this.inputs)),
                        (o = Object.values(this.inputs)),
                        n.forEach(function (e, n) {
                          if (
                            ![
                              "username",
                              "password",
                              "checkedValue",
                              "dial_code",
                            ].includes(e) &&
                            "phone_line_number" !== e &&
                            "dial_code" !== e &&
                            "error" !== e
                          ) {
                            var r = (s.needPrefix(e) ? "custom:" : "") + e;
                            t.attributes[r] = o[n];
                          }
                        }),
                        this.phone_number &&
                          (t.attributes.phone_number = this.phone_number),
                        (r = !1),
                        this.signUpFields.forEach(function (e) {
                          e.label === s.getUsernameLabel() &&
                            (Cn.debug(
                              "Changing the username to the value of " + e.label
                            ),
                            (t.username = t.attributes[e.key] || t.username),
                            (r = !0));
                        }),
                        !r && !t.username)
                      )
                        throw new Error(
                          "Couldn't find the label: " +
                            this.getUsernameLabel() +
                            ", in sign up fields according to usernameAttributes!"
                        );
                      c.label = 1;
                    case 1:
                      return c.trys.push([1, 3, 4, 5]), [4, fe.a.signUp(t)];
                    case 2:
                      return (
                        (i = c.sent()),
                        this.changeState("confirmSignUp", i.user.username),
                        [3, 5]
                      );
                    case 3:
                      return (a = c.sent()), this.error(a), [3, 5];
                    case 4:
                      return this.setState({ requestPending: !1 }), [7];
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.showComponent = function (e) {
              var n = this,
                o = this.props.hide;
              return o && o.includes(t)
                ? null
                : (this.checkCustomSignUpFields() &&
                    (this.signUpFields = this.props.signUpConfig.signUpFields),
                  this.sortFields(),
                  s.createElement(
                    Ee,
                    { theme: e, "data-test": ct.section },
                    s.createElement(
                      ke,
                      { theme: e, "data-test": ct.headerSection },
                      me.a.get(this.header)
                    ),
                    s.createElement(
                      Ae,
                      { theme: e, "data-test": ct.bodySection },
                      this.signUpFields.map(function (t) {
                        return "phone_number" !== t.key
                          ? s.createElement(
                              Fe,
                              { theme: e, key: t.key },
                              t.required
                                ? s.createElement(
                                    Xe,
                                    { theme: e },
                                    me.a.get(t.label),
                                    " *"
                                  )
                                : s.createElement(
                                    Xe,
                                    { theme: e },
                                    me.a.get(t.label)
                                  ),
                              s.createElement(Me, {
                                autoFocus:
                                  0 ===
                                  n.signUpFields.findIndex(function (e) {
                                    return e.key === t.key;
                                  }),
                                placeholder: me.a.get(t.placeholder),
                                theme: e,
                                type: t.type,
                                name: t.key,
                                key: t.key,
                                onChange: n.handleInputChange,
                                "data-test": ct.nonPhoneNumberInput,
                              })
                            )
                          : s.createElement(wt, {
                              theme: e,
                              required: t.required,
                              defaultDialCode: n.getDefaultDialCode(),
                              label: t.label,
                              placeholder: t.placeholder,
                              onChangeText: n.onPhoneNumberChanged,
                              key: "phone_number",
                            });
                      })
                    ),
                    s.createElement(
                      Ie,
                      { theme: e, "data-test": ct.footerSection },
                      s.createElement(
                        Pe,
                        { theme: e },
                        s.createElement(
                          Re,
                          {
                            disabled: this.state.requestPending,
                            onClick: this.signUp,
                            theme: e,
                            "data-test": ct.createAccountButton,
                          },
                          me.a.get("Create Account")
                        )
                      ),
                      s.createElement(
                        xe,
                        { theme: e },
                        me.a.get("Have an account? "),
                        s.createElement(
                          qe,
                          {
                            theme: e,
                            onClick: function () {
                              return n.changeState("signIn");
                            },
                            "data-test": ct.signInLink,
                          },
                          me.a.get("Sign in")
                        )
                      )
                    )
                  ));
            }),
            t
          );
        })(Et),
        En = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        kn = new ge.a("ForgotPassword"),
        On = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.send = n.send.bind(n)),
              (n.submit = n.submit.bind(n)),
              (n._validAuthStates = ["forgotPassword"]),
              (n.state = { delivery: null }),
              n
            );
          }
          return (
            En(t, e),
            (t.prototype.send = function () {
              var e = this,
                t = this.props.authData,
                n = void 0 === t ? {} : t,
                o = this.getUsernameFromInput() || n.username;
              if (!fe.a || "function" !== typeof fe.a.forgotPassword)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a
                .forgotPassword(o)
                .then(function (t) {
                  kn.debug(t), e.setState({ delivery: t.CodeDeliveryDetails });
                })
                .catch(function (t) {
                  return e.error(t);
                });
            }),
            (t.prototype.submit = function () {
              var e = this,
                t = this.props.authData,
                n = void 0 === t ? {} : t,
                o = this.inputs,
                r = o.code,
                i = o.password,
                a = this.getUsernameFromInput() || n.username;
              if (!fe.a || "function" !== typeof fe.a.forgotPasswordSubmit)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a
                .forgotPasswordSubmit(a, r, i)
                .then(function (t) {
                  kn.debug(t),
                    e.changeState("signIn"),
                    e.setState({ delivery: null });
                })
                .catch(function (t) {
                  return e.error(t);
                });
            }),
            (t.prototype.sendView = function () {
              var e = this.props.theme || we;
              return s.createElement("div", null, this.renderUsernameField(e));
            }),
            (t.prototype.submitView = function () {
              var e = this.props.theme || we;
              return s.createElement(
                "div",
                null,
                s.createElement(
                  Fe,
                  { theme: e },
                  s.createElement(Xe, { theme: e }, me.a.get("Code"), " *"),
                  s.createElement(Me, {
                    placeholder: me.a.get("Code"),
                    theme: e,
                    key: "code",
                    name: "code",
                    autoComplete: "off",
                    onChange: this.handleInputChange,
                  })
                ),
                s.createElement(
                  Fe,
                  { theme: e },
                  s.createElement(
                    Xe,
                    { theme: e },
                    me.a.get("New Password"),
                    " *"
                  ),
                  s.createElement(Me, {
                    placeholder: me.a.get("New Password"),
                    theme: e,
                    type: "password",
                    key: "password",
                    name: "password",
                    autoComplete: "off",
                    onChange: this.handleInputChange,
                  })
                )
              );
            }),
            (t.prototype.showComponent = function (e) {
              var n = this,
                o = this.props,
                r = (o.authState, o.hide),
                i = o.authData,
                a = void 0 === i ? {} : i;
              return r && r.includes(t)
                ? null
                : s.createElement(
                    Ee,
                    { theme: e, "data-test": bt.section },
                    s.createElement(
                      ke,
                      { theme: e, "data-test": bt.headerSection },
                      me.a.get("Reset your password")
                    ),
                    s.createElement(
                      Ae,
                      { theme: e, "data-test": bt.bodySection },
                      this.state.delivery || a.username
                        ? this.submitView()
                        : this.sendView()
                    ),
                    s.createElement(
                      Ie,
                      { theme: e },
                      s.createElement(
                        Pe,
                        { theme: e },
                        this.state.delivery || a.username
                          ? s.createElement(
                              Re,
                              {
                                theme: e,
                                onClick: this.submit,
                                "data-test": bt.submitButton,
                              },
                              me.a.get("Submit")
                            )
                          : s.createElement(
                              Re,
                              {
                                theme: e,
                                onClick: this.send,
                                "data-test": bt.sendCodeButton,
                              },
                              me.a.get("Send Code")
                            )
                      ),
                      s.createElement(
                        xe,
                        { theme: e },
                        this.state.delivery || a.username
                          ? s.createElement(
                              qe,
                              {
                                theme: e,
                                onClick: this.send,
                                "data-test": bt.resendCodeLink,
                              },
                              me.a.get("Resend Code")
                            )
                          : s.createElement(
                              qe,
                              {
                                theme: e,
                                onClick: function () {
                                  return n.changeState("signIn");
                                },
                                "data-test": bt.backToSignInLink,
                              },
                              me.a.get("Back to Sign In")
                            )
                      )
                    )
                  );
            }),
            t
          );
        })(Et),
        In = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Pn = function (e, t, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function a(e) {
              try {
                c(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              try {
                c(o.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((o = o.apply(e, t || [])).next());
          });
        },
        xn = function (e, t) {
          var n,
            o,
            r,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      o &&
                        (r =
                          2 & i[0]
                            ? o.return
                            : i[0]
                            ? o.throw || ((r = o.return) && r.call(o), 0)
                            : o.next) &&
                        !(r = r.call(o, i[1])).done)
                    )
                      return r;
                    switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                      case 0:
                      case 1:
                        r = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (o = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!r || (i[1] > r[0] && i[1] < r[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < r[1]) {
                          (a.label = r[1]), (r = i);
                          break;
                        }
                        if (r && a.label < r[2]) {
                          (a.label = r[2]), a.ops.push(i);
                          break;
                        }
                        r[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (s) {
                    (i = [6, s]), (o = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        },
        An = new ge.a("SignIn"),
        jn = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.checkContact = n.checkContact.bind(n)),
              (n.signIn = n.signIn.bind(n)),
              (n._validAuthStates = ["signIn", "signedOut", "signedUp"]),
              (n.state = {}),
              n
            );
          }
          return (
            In(t, e),
            (t.prototype.checkContact = function (e) {
              var t = this;
              if (!fe.a || "function" !== typeof fe.a.verifiedContact)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a.verifiedContact(e).then(function (n) {
                Object(be.d)(n.verified)
                  ? ((e = Object.assign(e, n)),
                    t.changeState("verifyContact", e))
                  : t.changeState("signedIn", e);
              });
            }),
            (t.prototype.signIn = function (e) {
              return Pn(this, void 0, void 0, function () {
                var t, n, o, r;
                return xn(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (
                        (e && e.preventDefault(),
                        (t = this.getUsernameFromInput() || ""),
                        (n = this.inputs.password),
                        !fe.a || "function" !== typeof fe.a.signIn)
                      )
                        throw new Error(
                          "No Auth module found, please ensure @aws-amplify/auth is imported"
                        );
                      this.setState({ loading: !0 }), (i.label = 1);
                    case 1:
                      return i.trys.push([1, 3, 4, 5]), [4, fe.a.signIn(t, n)];
                    case 2:
                      return (
                        (o = i.sent()),
                        An.debug(o),
                        "SMS_MFA" === o.challengeName ||
                        "SOFTWARE_TOKEN_MFA" === o.challengeName
                          ? (An.debug("confirm user with " + o.challengeName),
                            this.changeState("confirmSignIn", o))
                          : "NEW_PASSWORD_REQUIRED" === o.challengeName
                          ? (An.debug("require new password", o.challengeParam),
                            this.changeState("requireNewPassword", o))
                          : "MFA_SETUP" === o.challengeName
                          ? (An.debug("TOTP setup", o.challengeParam),
                            this.changeState("TOTPSetup", o))
                          : "CUSTOM_CHALLENGE" === o.challengeName &&
                            o.challengeParam &&
                            "true" === o.challengeParam.trigger
                          ? (An.debug("custom challenge", o.challengeParam),
                            this.changeState("customConfirmSignIn", o))
                          : this.checkContact(o),
                        [3, 5]
                      );
                    case 3:
                      return (
                        "UserNotConfirmedException" === (r = i.sent()).code
                          ? (An.debug("the user is not confirmed"),
                            this.changeState("confirmSignUp", { username: t }))
                          : "PasswordResetRequiredException" === r.code
                          ? (An.debug("the user requires a new password"),
                            this.changeState("forgotPassword", { username: t }))
                          : this.error(r),
                        [3, 5]
                      );
                    case 4:
                      return this.setState({ loading: !1 }), [7];
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.showComponent = function (e) {
              var n = this,
                o = this.props,
                r = o.authState,
                i = o.hide,
                a = void 0 === i ? [] : i,
                c = o.federated,
                u = o.onStateChange,
                l = o.onAuthEvent,
                p = o.override,
                d = void 0 === p ? [] : p;
              if (a && a.includes(t)) return null;
              var h =
                  !d.includes("SignUp") &&
                  a.some(function (e) {
                    return e === Sn;
                  }),
                f =
                  !d.includes("ForgotPassword") &&
                  a.some(function (e) {
                    return e === On;
                  });
              return s.createElement(
                Ee,
                { theme: e, "data-test": at.section },
                s.createElement(
                  ke,
                  { theme: e, "data-test": at.headerSection },
                  me.a.get("Sign in to your account")
                ),
                s.createElement(mn, {
                  federated: c,
                  theme: e,
                  authState: r,
                  onStateChange: u,
                  onAuthEvent: l,
                }),
                s.createElement(
                  "form",
                  { onSubmit: this.signIn },
                  s.createElement(
                    Ae,
                    { theme: e },
                    this.renderUsernameField(e),
                    s.createElement(
                      Fe,
                      { theme: e },
                      s.createElement(
                        Xe,
                        { theme: e },
                        me.a.get("Password"),
                        " *"
                      ),
                      s.createElement(Me, {
                        placeholder: me.a.get("Enter your password"),
                        theme: e,
                        key: "password",
                        type: "password",
                        name: "password",
                        onChange: this.handleInputChange,
                        "data-test": at.passwordInput,
                      }),
                      !f &&
                        s.createElement(
                          We,
                          { theme: e },
                          me.a.get("Forgot your password? "),
                          s.createElement(
                            qe,
                            {
                              theme: e,
                              onClick: function () {
                                return n.changeState("forgotPassword");
                              },
                              "data-test": at.forgotPasswordLink,
                            },
                            me.a.get("Reset password")
                          )
                        )
                    )
                  ),
                  s.createElement(
                    Ie,
                    { theme: e, "data-test": at.footerSection },
                    s.createElement(
                      Pe,
                      { theme: e },
                      s.createElement(
                        Re,
                        {
                          theme: e,
                          type: "submit",
                          disabled: this.state.loading,
                          "data-test": at.signInButton,
                        },
                        me.a.get("Sign In")
                      )
                    ),
                    !h &&
                      s.createElement(
                        xe,
                        { theme: e },
                        me.a.get("No account? "),
                        s.createElement(
                          qe,
                          {
                            theme: e,
                            onClick: function () {
                              return n.changeState("signUp");
                            },
                            "data-test": at.createAccountLink,
                          },
                          me.a.get("Create account")
                        )
                      )
                  )
                )
              );
            }),
            t
          );
        })(Et),
        Tn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Bn = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._validAuthStates = ["confirmSignIn"]),
              (n.confirm = n.confirm.bind(n)),
              (n.checkContact = n.checkContact.bind(n)),
              (n.state = { mfaType: "SMS" }),
              n
            );
          }
          return (
            Tn(t, e),
            (t.prototype.checkContact = function (e) {
              var t = this;
              if (!fe.a || "function" !== typeof fe.a.verifiedContact)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a.verifiedContact(e).then(function (n) {
                if (Object(be.d)(n.verified)) {
                  var o = Object.assign(e, n);
                  t.changeState("verifyContact", o);
                } else t.changeState("signedIn", e);
              });
            }),
            (t.prototype.confirm = function (e) {
              var t = this;
              e && e.preventDefault();
              var n = this.props.authData,
                o = this.inputs.code,
                r =
                  "SOFTWARE_TOKEN_MFA" === n.challengeName
                    ? "SOFTWARE_TOKEN_MFA"
                    : null;
              if (!fe.a || "function" !== typeof fe.a.confirmSignIn)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a
                .confirmSignIn(n, o, r)
                .then(function () {
                  t.checkContact(n);
                })
                .catch(function (e) {
                  return t.error(e);
                });
            }),
            (t.prototype.componentDidUpdate = function () {
              var e = this.props.authData,
                t =
                  e && "SOFTWARE_TOKEN_MFA" === e.challengeName
                    ? "TOTP"
                    : "SMS";
              this.state.mfaType !== t && this.setState({ mfaType: t });
            }),
            (t.prototype.showComponent = function (e) {
              var n = this,
                o = this.props.hide;
              return o && o.includes(t)
                ? null
                : s.createElement(
                    Ee,
                    { theme: e, "data-test": yt.section },
                    s.createElement(
                      ke,
                      { theme: e, "data-test": yt.headerSection },
                      me.a.get("Confirm " + this.state.mfaType + " Code")
                    ),
                    s.createElement(
                      "form",
                      { onSubmit: this.confirm, "data-test": yt.bodySection },
                      s.createElement(
                        Ae,
                        { theme: e },
                        s.createElement(
                          Fe,
                          { theme: e },
                          s.createElement(
                            Xe,
                            { theme: e },
                            me.a.get("Code"),
                            " *"
                          ),
                          s.createElement(Me, {
                            autoFocus: !0,
                            placeholder: me.a.get("Code"),
                            theme: e,
                            key: "code",
                            name: "code",
                            autoComplete: "off",
                            onChange: this.handleInputChange,
                            "data-test": yt.codeInput,
                          })
                        )
                      ),
                      s.createElement(
                        Ie,
                        { theme: e },
                        s.createElement(
                          Pe,
                          { theme: e, "data-test": yt.confirmButton },
                          s.createElement(
                            Re,
                            { theme: e, type: "submit" },
                            me.a.get("Confirm")
                          )
                        ),
                        s.createElement(
                          xe,
                          { theme: e },
                          s.createElement(
                            qe,
                            {
                              theme: e,
                              onClick: function () {
                                return n.changeState("signIn");
                              },
                              "data-test": yt.backToSignInLink,
                            },
                            me.a.get("Back to Sign In")
                          )
                        )
                      )
                    )
                  );
            }),
            t
          );
        })(Et),
        Nn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Ln = new ge.a("RequireNewPassword"),
        Mn = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._validAuthStates = ["requireNewPassword"]),
              (n.change = n.change.bind(n)),
              (n.checkContact = n.checkContact.bind(n)),
              n
            );
          }
          return (
            Nn(t, e),
            (t.prototype.checkContact = function (e) {
              var t = this;
              if (!fe.a || "function" !== typeof fe.a.verifiedContact)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a.verifiedContact(e).then(function (n) {
                Object(be.d)(n.verified)
                  ? ((e = Object.assign(e, n)),
                    t.changeState("verifyContact", e))
                  : t.changeState("signedIn", e);
              });
            }),
            (t.prototype.change = function () {
              var e = this,
                t = this.props.authData,
                n = this.inputs.password,
                o = t.challengeParam.requiredAttributes,
                r = (function (e, t) {
                  var n = {};
                  for (var o in e)
                    -1 !== t.indexOf(o) &&
                      Object.prototype.hasOwnProperty.call(e, o) &&
                      (n[o] = e[o]);
                  return n;
                })(this.inputs, o);
              if (!fe.a || "function" !== typeof fe.a.completeNewPassword)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a
                .completeNewPassword(t, n, r)
                .then(function (t) {
                  Ln.debug("complete new password", t),
                    "SMS_MFA" === t.challengeName
                      ? e.changeState("confirmSignIn", t)
                      : "MFA_SETUP" === t.challengeName
                      ? (Ln.debug("TOTP setup", t.challengeParam),
                        e.changeState("TOTPSetup", t))
                      : e.checkContact(t);
                })
                .catch(function (t) {
                  return e.error(t);
                });
            }),
            (t.prototype.showComponent = function (e) {
              var n = this,
                o = this.props.hide;
              if (o && o.includes(t)) return null;
              var r = this.props.authData.challengeParam.requiredAttributes;
              return s.createElement(
                Ee,
                { theme: e, "data-test": pt.section },
                s.createElement(
                  ke,
                  { theme: e, "data-test": pt.headerSection },
                  me.a.get("Change Password")
                ),
                s.createElement(
                  Ae,
                  { theme: e, "data-test": pt.bodySection },
                  s.createElement(Me, {
                    autoFocus: !0,
                    placeholder: me.a.get("New Password"),
                    theme: e,
                    key: "password",
                    name: "password",
                    type: "password",
                    onChange: this.handleInputChange,
                    "data-test": pt.newPasswordInput,
                  }),
                  r.map(function (t) {
                    return s.createElement(Me, {
                      placeholder: me.a.get(
                        ((o = t),
                        o
                          .split("_")
                          .map(function (e) {
                            return (
                              e.charAt(0).toUpperCase() +
                              e.substr(1).toLowerCase()
                            );
                          })
                          .join(" "))
                      ),
                      theme: e,
                      key: t,
                      name: t,
                      type: "text",
                      onChange: n.handleInputChange,
                    });
                    var o;
                  })
                ),
                s.createElement(
                  Ie,
                  { theme: e },
                  s.createElement(
                    Pe,
                    { theme: e },
                    s.createElement(
                      Re,
                      { theme: e, onClick: this.change },
                      me.a.get("Change")
                    )
                  ),
                  s.createElement(
                    xe,
                    { theme: e },
                    s.createElement(
                      qe,
                      {
                        theme: e,
                        onClick: function () {
                          return n.changeState("signIn");
                        },
                        "data-test": pt.backToSignInLink,
                      },
                      me.a.get("Back to Sign In")
                    )
                  )
                )
              );
            }),
            t
          );
        })(Et);
      var Un = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Fn = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n._validAuthStates = ["loading"]), n;
          }
          return (
            Un(t, e),
            (t.prototype.showComponent = function (e) {
              var n = this.props.hide;
              return n && n.includes(t)
                ? null
                : s.createElement(
                    Ee,
                    { theme: e, "data-test": dt.section },
                    s.createElement(Ae, { theme: e }, me.a.get("Loading..."))
                  );
            }),
            t
          );
        })(Et),
        Rn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Dn = new ge.a("ConfirmSignUp"),
        zn = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._validAuthStates = ["confirmSignUp"]),
              (n.confirm = n.confirm.bind(n)),
              (n.resend = n.resend.bind(n)),
              n
            );
          }
          return (
            Rn(t, e),
            (t.prototype.confirm = function () {
              var e = this,
                t = this.usernameFromAuthData() || this.inputs.username,
                n = this.inputs.code;
              if (!fe.a || "function" !== typeof fe.a.confirmSignUp)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a
                .confirmSignUp(t, n)
                .then(function () {
                  return e.changeState("signedUp");
                })
                .catch(function (t) {
                  return e.error(t);
                });
            }),
            (t.prototype.resend = function () {
              var e = this,
                t = this.usernameFromAuthData() || this.inputs.username;
              if (!fe.a || "function" !== typeof fe.a.resendSignUp)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a
                .resendSignUp(t)
                .then(function () {
                  return Dn.debug("code resent");
                })
                .catch(function (t) {
                  return e.error(t);
                });
            }),
            (t.prototype.showComponent = function (e) {
              var n = this,
                o = this.props.hide,
                r = this.usernameFromAuthData();
              return o && o.includes(t)
                ? null
                : s.createElement(
                    Ee,
                    { theme: e, "data-test": gt.section },
                    s.createElement(
                      ke,
                      { theme: e, "data-test": gt.headerSection },
                      me.a.get("Confirm Sign Up")
                    ),
                    s.createElement(
                      Ae,
                      { theme: e, "data-test": gt.bodySection },
                      s.createElement(
                        Fe,
                        { theme: e },
                        s.createElement(
                          Xe,
                          { theme: e },
                          me.a.get(this.getUsernameLabel()),
                          " *"
                        ),
                        s.createElement(Me, {
                          placeholder: me.a.get("Username"),
                          theme: e,
                          key: "username",
                          name: "username",
                          onChange: this.handleInputChange,
                          disabled: r,
                          value: r || "",
                          "data-test": gt.usernameInput,
                        })
                      ),
                      s.createElement(
                        Fe,
                        { theme: e },
                        s.createElement(
                          Xe,
                          { theme: e },
                          me.a.get("Confirmation Code"),
                          " *"
                        ),
                        s.createElement(Me, {
                          autoFocus: !0,
                          placeholder: me.a.get("Enter your code"),
                          theme: e,
                          key: "code",
                          name: "code",
                          autoComplete: "off",
                          onChange: this.handleInputChange,
                          "data-test": gt.confirmationCodeInput,
                        }),
                        s.createElement(
                          We,
                          { theme: e },
                          me.a.get("Lost your code? "),
                          s.createElement(
                            qe,
                            {
                              theme: e,
                              onClick: this.resend,
                              "data-test": gt.resendCodeLink,
                            },
                            me.a.get("Resend Code")
                          )
                        )
                      )
                    ),
                    s.createElement(
                      Ie,
                      { theme: e },
                      s.createElement(
                        Pe,
                        { theme: e },
                        s.createElement(
                          Re,
                          {
                            theme: e,
                            onClick: this.confirm,
                            "data-test": gt.confirmButton,
                          },
                          me.a.get("Confirm")
                        )
                      ),
                      s.createElement(
                        xe,
                        { theme: e },
                        s.createElement(
                          qe,
                          {
                            theme: e,
                            onClick: function () {
                              return n.changeState("signIn");
                            },
                            "data-test": gt.backToSignInLink,
                          },
                          me.a.get("Back to Sign In")
                        )
                      )
                    )
                  );
            }),
            t
          );
        })(Et),
        Hn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Vn = new ge.a("VerifyContact"),
        qn = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._validAuthStates = ["verifyContact"]),
              (n.verify = n.verify.bind(n)),
              (n.submit = n.submit.bind(n)),
              (n.state = { verifyAttr: null }),
              n
            );
          }
          return (
            Hn(t, e),
            (t.prototype.verify = function () {
              var e = this,
                t = this.inputs,
                n = t.contact,
                o = t.checkedValue;
              if (n) {
                if (
                  !fe.a ||
                  "function" !== typeof fe.a.verifyCurrentUserAttribute
                )
                  throw new Error(
                    "No Auth module found, please ensure @aws-amplify/auth is imported"
                  );
                fe.a
                  .verifyCurrentUserAttribute(o)
                  .then(function (t) {
                    Vn.debug(t), e.setState({ verifyAttr: o });
                  })
                  .catch(function (t) {
                    return e.error(t);
                  });
              } else this.error("Neither Email nor Phone Number selected");
            }),
            (t.prototype.submit = function () {
              var e = this,
                t = this.state.verifyAttr,
                n = this.inputs.code;
              if (
                !fe.a ||
                "function" !== typeof fe.a.verifyCurrentUserAttributeSubmit
              )
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a
                .verifyCurrentUserAttributeSubmit(t, n)
                .then(function (t) {
                  Vn.debug(t),
                    e.changeState("signedIn", e.props.authData),
                    e.setState({ verifyAttr: null });
                })
                .catch(function (t) {
                  return e.error(t);
                });
            }),
            (t.prototype.verifyView = function () {
              var e = this.props.authData;
              if (!e) return Vn.debug("no user for verify"), null;
              var t = e.unverified;
              if (!t) return Vn.debug("no unverified on user"), null;
              var n = t.email,
                o = t.phone_number,
                r = this.props.theme || _t;
              return s.createElement(
                "div",
                null,
                n
                  ? s.createElement(Ne, {
                      placeholder: me.a.get("Email"),
                      theme: r,
                      key: "email",
                      name: "contact",
                      value: "email",
                      onChange: this.handleInputChange,
                    })
                  : null,
                o
                  ? s.createElement(Ne, {
                      placeholder: me.a.get("Phone Number"),
                      theme: r,
                      key: "phone_number",
                      name: "contact",
                      value: "phone_number",
                      onChange: this.handleInputChange,
                    })
                  : null
              );
            }),
            (t.prototype.submitView = function () {
              var e = this.props.theme || _t;
              return s.createElement(
                "div",
                null,
                s.createElement(Me, {
                  placeholder: me.a.get("Code"),
                  theme: e,
                  key: "code",
                  name: "code",
                  autoComplete: "off",
                  onChange: this.handleInputChange,
                })
              );
            }),
            (t.prototype.showComponent = function (e) {
              var n = this,
                o = this.props,
                r = o.authData,
                i = o.hide;
              return i && i.includes(t)
                ? null
                : s.createElement(
                    Ee,
                    { theme: e, "data-test": ut.section },
                    s.createElement(
                      ke,
                      { theme: e, "data-test": ut.headerSection },
                      me.a.get(
                        "Account recovery requires verified contact information"
                      )
                    ),
                    s.createElement(
                      Ae,
                      { theme: e, "data-test": ut.bodySection },
                      this.state.verifyAttr
                        ? this.submitView()
                        : this.verifyView()
                    ),
                    s.createElement(
                      Ie,
                      { theme: e },
                      s.createElement(
                        Pe,
                        { theme: e },
                        this.state.verifyAttr
                          ? s.createElement(
                              Re,
                              {
                                theme: e,
                                onClick: this.submit,
                                "data-test": ut.submitButton,
                              },
                              me.a.get("Submit")
                            )
                          : s.createElement(
                              Re,
                              {
                                theme: e,
                                onClick: this.verify,
                                "data-test": ut.verifyButton,
                              },
                              me.a.get("Verify")
                            )
                      ),
                      s.createElement(
                        xe,
                        { theme: e },
                        s.createElement(
                          qe,
                          {
                            theme: e,
                            onClick: function () {
                              return n.changeState("signedIn", r);
                            },
                            "data-test": ut.skipLink,
                          },
                          me.a.get("Skip")
                        )
                      )
                    )
                  );
            }),
            t
          );
        })(Et),
        Gn = n("D1Df"),
        Wn = n.n(Gn),
        Xn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Kn = new ge.a("TOTPSetupComp"),
        Jn = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.setup = n.setup.bind(n)),
              (n.showSecretCode = n.showSecretCode.bind(n)),
              (n.verifyTotpToken = n.verifyTotpToken.bind(n)),
              (n.handleInputChange = n.handleInputChange.bind(n)),
              (n.triggerTOTPEvent = n.triggerTOTPEvent.bind(n)),
              (n.state = { code: null, setupMessage: null }),
              n
            );
          }
          return (
            Xn(t, e),
            (t.prototype.componentDidMount = function () {
              this.setup();
            }),
            (t.prototype.triggerTOTPEvent = function (e, t, n) {
              this.props.onTOTPEvent && this.props.onTOTPEvent(e, t, n);
            }),
            (t.prototype.handleInputChange = function (e) {
              this.setState({ setupMessage: null }), (this.inputs = {});
              var t = e.target,
                n = t.name,
                o = t.value,
                r = t.type,
                i = t.checked,
                a = ["radio", "checkbox"].includes(r);
              this.inputs[n] = a ? i : o;
            }),
            (t.prototype.setup = function () {
              var e = this;
              this.setState({ setupMessage: null });
              var t = this.props.authData,
                n = encodeURI(me.a.get("AWSCognito"));
              if (!fe.a || "function" !== typeof fe.a.setupTOTP)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a
                .setupTOTP(t)
                .then(function (o) {
                  Kn.debug("secret key", o);
                  var r =
                    "otpauth://totp/" +
                    n +
                    ":" +
                    t.username +
                    "?secret=" +
                    o +
                    "&issuer=" +
                    n;
                  e.setState({ code: r });
                })
                .catch(function (e) {
                  return Kn.debug("totp setup failed", e);
                });
            }),
            (t.prototype.verifyTotpToken = function () {
              var e = this;
              if (this.inputs) {
                var t = this.props.authData,
                  n = this.inputs.totpCode;
                if (
                  !fe.a ||
                  "function" !== typeof fe.a.verifyTotpToken ||
                  "function" !== typeof fe.a.setPreferredMFA
                )
                  throw new Error(
                    "No Auth module found, please ensure @aws-amplify/auth is imported"
                  );
                return fe.a
                  .verifyTotpToken(t, n)
                  .then(function () {
                    return fe.a
                      .setPreferredMFA(t, "TOTP")
                      .then(function () {
                        e.setState({
                          setupMessage: "Setup TOTP successfully!",
                        }),
                          Kn.debug("set up totp success!"),
                          e.triggerTOTPEvent("Setup TOTP", "SUCCESS", t);
                      })
                      .catch(function (t) {
                        e.setState({ setupMessage: "Setup TOTP failed!" }),
                          Kn.error(t);
                      });
                  })
                  .catch(function (t) {
                    e.setState({ setupMessage: "Setup TOTP failed!" }),
                      Kn.error(t);
                  });
              }
              Kn.debug("no input");
            }),
            (t.prototype.showSecretCode = function (e, t) {
              return e
                ? s.createElement(
                    "div",
                    null,
                    s.createElement(
                      "div",
                      { className: ve.totpQrcode },
                      s.createElement(Wn.a, { value: e })
                    ),
                    s.createElement(
                      Xe,
                      { theme: t },
                      me.a.get("Enter Security Code:")
                    ),
                    s.createElement(Me, {
                      autoFocus: !0,
                      theme: t,
                      key: "totpCode",
                      name: "totpCode",
                      onChange: this.handleInputChange,
                    })
                  )
                : null;
            }),
            (t.prototype.render = function () {
              var e = this.props.theme ? this.props.theme : we,
                t = this.state.code;
              return s.createElement(
                Ee,
                { theme: e },
                this.state.setupMessage &&
                  s.createElement($e, null, me.a.get(this.state.setupMessage)),
                s.createElement(
                  ke,
                  { theme: e },
                  me.a.get("Scan then enter verification code")
                ),
                s.createElement(
                  Ae,
                  { theme: e },
                  this.showSecretCode(t, e),
                  this.state.setupMessage && me.a.get(this.state.setupMessage)
                ),
                s.createElement(
                  Ie,
                  { theme: e },
                  s.createElement(
                    Re,
                    {
                      theme: e,
                      onClick: this.verifyTotpToken,
                      style: { width: "100%" },
                    },
                    me.a.get("Verify Security Token")
                  )
                )
              );
            }),
            t
          );
        })(s.Component),
        Yn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Qn = function () {
          return (Qn =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Zn = new ge.a("TOTPSetup"),
        $n = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._validAuthStates = ["TOTPSetup"]),
              (n.onTOTPEvent = n.onTOTPEvent.bind(n)),
              (n.checkContact = n.checkContact.bind(n)),
              n
            );
          }
          return (
            Yn(t, e),
            (t.prototype.checkContact = function (e) {
              var t = this;
              if (!fe.a || "function" !== typeof fe.a.verifiedContact)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a.verifiedContact(e).then(function (n) {
                if (Object(be.d)(n.verified)) {
                  var o = Object.assign(e, n);
                  t.changeState("verifyContact", o);
                } else t.changeState("signedIn", e);
              });
            }),
            (t.prototype.onTOTPEvent = function (e, t, n) {
              Zn.debug("on totp event", e, t),
                "Setup TOTP" === e && "SUCCESS" === t && this.checkContact(n);
            }),
            (t.prototype.showComponent = function (e) {
              var n = this.props.hide;
              return n && n.includes(t)
                ? null
                : s.createElement(
                    Jn,
                    Qn({}, this.props, {
                      onTOTPEvent: this.onTOTPEvent,
                      "data-test": lt.component,
                    })
                  );
            }),
            t
          );
        })(Et),
        eo = [
          ["User does not exist", /user.*not.*exist/i],
          ["User already exists", /user.*already.*exist/i],
          ["Incorrect username or password", /incorrect.*username.*password/i],
          ["Invalid password format", /validation.*password/i],
          [
            "Invalid phone number format",
            /invalid.*phone/i,
            "Invalid phone number format. Please use a phone number format of +12345678900",
          ],
        ];
      function to(e) {
        var t = eo.filter(function (t) {
          return t[1].test(e);
        });
        if (0 === t.length) return e;
        var n = t[0],
          o = n.length > 2 ? n[2] : n[0];
        return me.a.get(n[0], o);
      }
      var no = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        oo = new ge.a("Authenticator"),
        ro = "amplify-authenticator-authState",
        io = function (e) {
          var t = e.children;
          return s.createElement(s.Fragment, null, t);
        },
        ao = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.handleStateChange = n.handleStateChange.bind(n)),
              (n.handleAuthEvent = n.handleAuthEvent.bind(n)),
              (n.onHubCapsule = n.onHubCapsule.bind(n)),
              (n._initialAuthState = n.props.authState || "signIn"),
              (n.state = { authState: "loading" }),
              ye.a.listen("auth", n.onHubCapsule),
              n
            );
          }
          return (
            no(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props.amplifyConfig;
              e && he.a.configure(e), (this._isMounted = !0);
              var t = localStorage.getItem(At);
              localStorage.removeItem(At), "true" !== t && this.checkUser();
            }),
            (t.prototype.componentWillUnmount = function () {
              this._isMounted = !1;
            }),
            (t.prototype.checkUser = function () {
              var e = this;
              if (!fe.a || "function" !== typeof fe.a.currentAuthenticatedUser)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              return fe.a
                .currentAuthenticatedUser()
                .then(function (t) {
                  e._isMounted && e.handleStateChange("signedIn", t);
                })
                .catch(function (t) {
                  if (e._isMounted) {
                    var n = null;
                    try {
                      n = localStorage.getItem(ro);
                    } catch (o) {
                      oo.debug(
                        "Failed to get the auth state from local storage",
                        o
                      );
                    }
                    ("signedIn" === n ? fe.a.signOut() : Promise.resolve())
                      .then(function () {
                        return e.handleStateChange(e._initialAuthState);
                      })
                      .catch(function (e) {
                        oo.debug("Failed to sign out", e);
                      });
                  }
                });
            }),
            (t.prototype.checkContact = function (e, t) {
              if (!fe.a || "function" !== typeof fe.a.verifiedContact)
                throw new Error(
                  "No Auth module found, please ensure @aws-amplify/auth is imported"
                );
              fe.a.verifiedContact(e).then(function (n) {
                Object(be.d)(n.verified)
                  ? ((e = Object.assign(e, n)), t("verifyContact", e))
                  : t("signedIn", e);
              });
            }),
            (t.prototype.onHubCapsule = function (e) {
              var t = e.channel,
                n = e.payload;
              e.source;
              if ("auth" === t)
                switch (n.event) {
                  case "cognitoHostedUI":
                  case "signIn":
                    this.checkContact(n.data, this.handleStateChange);
                    break;
                  case "cognitoHostedUI_failure":
                  case "parsingUrl_failure":
                  case "signOut":
                  case "customGreetingSignOut":
                    this.handleStateChange("signIn", null);
                }
            }),
            (t.prototype.handleStateChange = function (e, t) {
              if (
                (oo.debug("authenticator state change " + e, t),
                e !== this.state.authState)
              ) {
                "signedOut" === e && (e = "signIn");
                try {
                  localStorage.setItem(ro, e);
                } catch (n) {
                  oo.debug(
                    "Failed to set the auth state into local storage",
                    n
                  );
                }
                this._isMounted &&
                  this.setState({
                    authState: e,
                    authData: t,
                    error: null,
                    showToast: !1,
                  }),
                  this.props.onStateChange && this.props.onStateChange(e, t);
              }
            }),
            (t.prototype.handleAuthEvent = function (e, t, n) {
              if ((void 0 === n && (n = !0), "error" === t.type)) {
                var o = this.props.errorMessage || to,
                  r = "string" === typeof o ? o : o(t.data);
                this.setState({ error: r, showToast: n });
              }
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.state,
                n = t.authState,
                o = t.authData,
                r = this.props.theme || we,
                i = this.props.errorMessage || to,
                a =
                  void 0 === this.props.container
                    ? Ce
                    : this.props.container || io,
                c = this.props,
                u = c.hideDefault,
                l = c.hide,
                p = void 0 === l ? [] : l,
                d = c.federated,
                h = c.signUpConfig,
                f = c.usernameAttributes;
              u && (p = p.concat([cn, jn, Bn, Mn, Sn, zn, qn, On, $n, Fn]));
              var m = [];
              "object" === typeof this.props.children &&
                (Array.isArray(this.props.children)
                  ? (m = this.props.children)
                  : m.push(this.props.children));
              var g = [
                  s.createElement(cn, { federated: d }),
                  s.createElement(jn, { federated: d }),
                  s.createElement(Bn, null),
                  s.createElement(Mn, null),
                  s.createElement(Sn, { signUpConfig: h }),
                  s.createElement(zn, null),
                  s.createElement(qn, null),
                  s.createElement(On, null),
                  s.createElement($n, null),
                  s.createElement(Fn, null),
                ],
                y = s.Children.map(m, function (e) {
                  return e.props.override;
                });
              p = p.filter(function (e) {
                return !m.find(function (t) {
                  return t.type === e;
                });
              });
              var b = s.Children.map(m, function (t, a) {
                  return s.cloneElement(t, {
                    key: "aws-amplify-authenticator-props-children-" + a,
                    theme: r,
                    messageMap: i,
                    authState: n,
                    authData: o,
                    onStateChange: e.handleStateChange,
                    onAuthEvent: e.handleAuthEvent,
                    hide: p,
                    override: y,
                    usernameAttributes: f,
                  });
                }),
                v = (
                  u
                    ? []
                    : s.Children.map(g, function (t, a) {
                        return s.cloneElement(t, {
                          key:
                            "aws-amplify-authenticator-default-children-" + a,
                          theme: r,
                          messageMap: i,
                          authState: n,
                          authData: o,
                          onStateChange: e.handleStateChange,
                          onAuthEvent: e.handleAuthEvent,
                          hide: p,
                          override: y,
                          usernameAttributes: f,
                        });
                      })
                ).concat(b),
                w = this.state.error;
              return s.createElement(
                a,
                { theme: r },
                this.state.showToast &&
                  s.createElement(
                    $e,
                    {
                      theme: r,
                      onClose: function () {
                        return e.setState({ showToast: !1 });
                      },
                      "data-test": at.signInError,
                    },
                    me.a.get(w)
                  ),
                v
              );
            }),
            t
          );
        })(s.Component),
        so = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        co = function () {
          return (co =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        };
      !(function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (
            (n.state = { auth: "init" }),
            (n.handleAuthState = n.handleAuthState.bind(n)),
            (n.renderChildren = n.renderChildren.bind(n)),
            n
          );
        }
        so(t, e),
          (t.prototype.handleAuthState = function (e, t) {
            this.setState({ auth: e, authData: t });
          }),
          (t.prototype.renderChildren = function () {
            return this.props.children(this.state.auth);
          }),
          (t.prototype.render = function () {
            return s.createElement(
              "div",
              null,
              s.createElement(
                ao,
                co({}, this.props, { onStateChange: this.handleAuthState })
              ),
              this.renderChildren()
            );
          });
      })(s.Component);
      var uo = n("l1VB"),
        lo = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        po = {
          width: "100%",
          height: "100%",
          display: "inline-block",
          position: "absolute",
          left: 0,
          top: 0,
          opacity: 0,
          cursor: "pointer",
        },
        ho = new ge.a("Picker"),
        fo = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            lo(t, e),
            (t.prototype.handleInput = function (e) {
              var t = e.target.files[0];
              if (t) {
                var n = t.name,
                  o = t.size,
                  r = t.type;
                ho.debug(t);
                var i = this.props.onPick;
                i && i({ file: t, name: n, size: o, type: r });
              }
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.title || "Pick a File",
                n = this.props.accept || "*/*",
                o = this.props.theme || we,
                r = Object.assign({}, { position: "relative" }, o.pickerPicker),
                i = Object.assign({}, po, o.pickerInput);
              return s.createElement(
                "div",
                { style: r },
                s.createElement(De, { theme: o }, me.a.get(t)),
                s.createElement("input", {
                  title: me.a.get(t),
                  type: "file",
                  accept: n,
                  style: i,
                  onChange: function (t) {
                    return e.handleInput(t);
                  },
                })
              );
            }),
            t
          );
        })(s.Component),
        mo = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        go = { maxWidth: "100%" },
        yo =
          (new ge.a("PhotoPicker"),
          (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n.handlePick = n.handlePick.bind(n)),
                (n.state = { previewSrc: t.previewSrc }),
                n
              );
            }
            return (
              mo(t, e),
              (t.prototype.handlePick = function (e) {
                var t = this,
                  n = e.file,
                  o = (e.name, e.size, e.type, this.props),
                  r = o.preview,
                  i = o.onPick,
                  a = o.onLoad;
                if ((i && i(e), r)) {
                  var s = new FileReader();
                  (s.onload = function (e) {
                    var n = e.target.result;
                    t.setState({ previewSrc: n }), a && a(n);
                  }),
                    s.readAsDataURL(n);
                }
              }),
              (t.prototype.render = function () {
                var e = this.props.preview,
                  t = this.state.previewSrc,
                  n = this.props.headerText || "Photos",
                  o =
                    this.props.headerHint ||
                    "Add your photos by clicking below",
                  r = this.props.title || "Select a Photo",
                  i = this.props.theme || we,
                  a = Object.assign({}, go, i.pickerPreview),
                  c = !(e && "hidden" !== e);
                return s.createElement(
                  Ee,
                  { theme: i },
                  s.createElement(ke, { theme: i, hint: o }, me.a.get(n)),
                  s.createElement(
                    Ae,
                    { theme: i },
                    t
                      ? c
                        ? "The image has been selected"
                        : s.createElement("img", { src: t, style: a })
                      : s.createElement(tt, { theme: i })
                  ),
                  s.createElement(fo, {
                    title: r,
                    accept: "image/*",
                    theme: i,
                    onPick: this.handlePick,
                  })
                );
              }),
              t
            );
          })(s.Component));
      function bo(e, t) {
        var n = e.name,
          o = e.size,
          r = e.type,
          i = encodeURI(n);
        if (t) {
          var a = typeof t;
          (i =
            "string" === a
              ? t
              : "function" === a
              ? t({ name: n, size: o, type: r })
              : encodeURI(JSON.stringify(t))) || (i = "empty_key");
        }
        return i.replace(/\s/g, "_");
      }
      var vo = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        wo = new ge.a("Storage.S3Image"),
        _o = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n._isMounted = !1),
              (n.handleOnLoad = n.handleOnLoad.bind(n)),
              (n.handleOnError = n.handleOnError.bind(n)),
              (n.handlePick = n.handlePick.bind(n)),
              (n.handleClick = n.handleClick.bind(n));
            var o =
              n.props.src ||
              "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
            return (n.state = { src: o }), n;
          }
          return (
            vo(t, e),
            (t.prototype.getImageSource = function (e, t, n, o) {
              var r = this;
              if (!uo.a || "function" !== typeof uo.a.get)
                throw new Error(
                  "No Storage module found, please ensure @aws-amplify/storage is imported"
                );
              uo.a
                .get(e, { level: t || "public", track: n, identityId: o })
                .then(function (e) {
                  r._isMounted && r.setState({ src: e });
                })
                .catch(function (e) {
                  return wo.debug(e);
                });
            }),
            (t.prototype.load = function () {
              var e = this.props,
                t = e.imgKey,
                n = e.path,
                o = e.body,
                r = e.contentType,
                i = e.level,
                a = e.track,
                s = e.identityId;
              if (t || n) {
                var c = this,
                  u = t || n;
                if ((wo.debug("loading " + u + "..."), o)) {
                  var l = r || "binary/octet-stream";
                  if (!uo.a || "function" !== typeof uo.a.put)
                    throw new Error(
                      "No Storage module found, please ensure @aws-amplify/storage is imported"
                    );
                  uo.a
                    .put(u, o, {
                      contentType: l,
                      level: i || "public",
                      track: a,
                    })
                    .then(function (e) {
                      wo.debug(e), c.getImageSource(u, i, a, s);
                    })
                    .catch(function (e) {
                      return wo.debug(e);
                    });
                } else c.getImageSource(u, i, a, s);
              } else wo.debug("empty imgKey and path");
            }),
            (t.prototype.handleOnLoad = function (e) {
              var t = this.props.onLoad;
              t && t(this.state.src);
            }),
            (t.prototype.handleOnError = function (e) {
              var t = this.props.onError;
              t && t(this.state.src);
            }),
            (t.prototype.handlePick = function (e) {
              var t = this,
                n = this.props,
                o = n.imgKey,
                r = n.level,
                i = n.fileToKey,
                a = n.track,
                s = n.identityId,
                c = n.path,
                u = void 0 === c ? "" : c,
                l = n.onUploadSuccess,
                p = e.file,
                d = e.type,
                h = o || u + bo(e, i);
              if (!uo.a || "function" !== typeof uo.a.put)
                throw new Error(
                  "No Storage module found, please ensure @aws-amplify/storage is imported"
                );
              uo.a
                .put(h, p, { level: r || "public", contentType: d, track: a })
                .then(function (e) {
                  wo.debug("handle pick data", e),
                    t.getImageSource(h, r, a, s),
                    l && l();
                })
                .catch(function (e) {
                  return wo.debug("handle pick error", e);
                });
            }),
            (t.prototype.handleClick = function (e) {
              var t = this.props.onClick;
              t && t(e);
            }),
            (t.prototype.componentDidMount = function () {
              (this._isMounted = !0), this.load();
            }),
            (t.prototype.componentWillUnmount = function () {
              this._isMounted = !1;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              (e.path !== this.props.path ||
                e.imgKey !== this.props.imgKey ||
                e.body !== this.props.body ||
                e.level !== this.props.level) &&
                this.load();
            }),
            (t.prototype.imageEl = function (e, t) {
              if (!e) return null;
              var n = this.props,
                o = n.className,
                r = n.selected;
              return s.createElement(
                "div",
                { style: { position: "relative" }, onClick: this.handleClick },
                s.createElement("img", {
                  className: o,
                  style: t.photoImg,
                  src: e,
                  onLoad: this.handleOnLoad,
                  onError: this.handleOnError,
                }),
                s.createElement("div", {
                  style: r ? t.overlaySelected : t.overlay,
                })
              );
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.hidden,
                n = e.style,
                o = e.picker,
                r = e.translate,
                i = e.imgKey,
                a = this.state.src;
              if (
                (r &&
                  (a =
                    "string" === typeof r
                      ? r
                      : r({ type: "image", key: i, content: a })),
                !a && !o)
              )
                return null;
              var c = this.props.theme || _t,
                u = t ? _t.hidden : Object.assign({}, c.photo, n);
              return s.createElement(
                "div",
                { style: u },
                u ? this.imageEl(a, c) : null,
                o
                  ? s.createElement(
                      "div",
                      null,
                      s.createElement(yo, {
                        key: "picker",
                        onPick: this.handlePick,
                        theme: c,
                      })
                    )
                  : null
              );
            }),
            t
          );
        })(s.Component),
        Co = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        So = {},
        Eo = { maxWidth: "100%" },
        ko =
          (new ge.a("TextPicker"),
          (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n.handlePick = n.handlePick.bind(n)),
                (n.state = { previewText: t.previewText }),
                n
              );
            }
            return (
              Co(t, e),
              (t.prototype.handlePick = function (e) {
                var t = this,
                  n = e.file,
                  o = (e.name, e.size, e.type, this.props),
                  r = o.preview,
                  i = o.onPick,
                  a = o.onLoad;
                if ((i && i(e), r)) {
                  var s = new FileReader();
                  (s.onload = function (e) {
                    var n = e.target.result;
                    t.setState({ previewText: n }), a && a(n);
                  }),
                    s.readAsText(n);
                }
              }),
              (t.prototype.render = function () {
                var e = this.props.preview,
                  t = this.state.previewText,
                  n = this.props.title || "Pick a File",
                  o = this.props.theme || _t,
                  r = Object.assign({}, So, o.picker),
                  i = Object.assign(
                    {},
                    Eo,
                    o.pickerPreview,
                    o.halfHeight,
                    e && "hidden" !== e ? {} : _t.hidden
                  );
                return s.createElement(
                  "div",
                  { style: r },
                  t
                    ? s.createElement(
                        "div",
                        { style: i },
                        s.createElement("pre", { style: o.pre }, t)
                      )
                    : null,
                  s.createElement(fo, {
                    title: n,
                    accept: "text/*",
                    theme: o,
                    onPick: this.handlePick,
                  })
                );
              }),
              t
            );
          })(s.Component)),
        Oo = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Io = new ge.a("Storage.S3Text"),
        Po = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n._isMounted = !1),
              (n.handleOnLoad = n.handleOnLoad.bind(n)),
              (n.handleOnError = n.handleOnError.bind(n)),
              (n.handlePick = n.handlePick.bind(n)),
              (n.handleClick = n.handleClick.bind(n));
            var o = t.text,
              r = t.textKey;
            return (n.state = { text: o || "", textKey: r || "" }), n;
          }
          return (
            Oo(t, e),
            (t.prototype.getText = function (e, t, n, o) {
              var r = this;
              if (!uo.a || "function" !== typeof uo.a.get)
                throw new Error(
                  "No Storage module found, please ensure @aws-amplify/storage is imported"
                );
              uo.a
                .get(e, {
                  download: !0,
                  level: t || "public",
                  track: n,
                  identityId: o,
                })
                .then(function (e) {
                  Io.debug(e);
                  var t = e.Body.toString("utf8");
                  r._isMounted && r.setState({ text: t }), r.handleOnLoad(t);
                })
                .catch(function (e) {
                  Io.debug(e), r.handleOnError(e);
                });
            }),
            (t.prototype.load = function () {
              var e = this.props,
                t = e.path,
                n = e.textKey,
                o = e.body,
                r = e.contentType,
                i = e.level,
                a = e.track,
                s = e.identityId;
              if (n || t) {
                var c = this,
                  u = n || t;
                if ((Io.debug("loading " + u + "..."), o)) {
                  var l = r || "text/*";
                  if (!uo.a || "function" !== typeof uo.a.put)
                    throw new Error(
                      "No Storage module found, please ensure @aws-amplify/storage is imported"
                    );
                  uo.a
                    .put(u, o, {
                      contentType: l,
                      level: i || "public",
                      track: a,
                    })
                    .then(function (e) {
                      Io.debug(e), c.getText(u, i, a, s);
                    })
                    .catch(function (e) {
                      return Io.debug(e);
                    });
                } else c.getText(u, i, a, s);
              } else Io.debug("empty textKey and path");
            }),
            (t.prototype.handleOnLoad = function (e) {
              var t = this.props.onLoad;
              t && t(e);
            }),
            (t.prototype.handleOnError = function (e) {
              var t = this.props.onError;
              t && t(e);
            }),
            (t.prototype.handlePick = function (e) {
              var t = this,
                n = this.props.path || "",
                o = this.props,
                r = o.textKey,
                i = o.level,
                a = o.fileToKey,
                s = o.track,
                c = o.identityId,
                u = e.file,
                l = (e.name, e.size, e.type),
                p = r || n + bo(e, a);
              if (!uo.a || "function" !== typeof uo.a.put)
                throw new Error(
                  "No Storage module found, please ensure @aws-amplify/storage is imported"
                );
              uo.a
                .put(p, u, { level: i || "public", contentType: l, track: s })
                .then(function (e) {
                  Io.debug("handle pick data", e), t.getText(p, i, s, c);
                })
                .catch(function (e) {
                  return Io.debug("handle pick error", e);
                });
            }),
            (t.prototype.handleClick = function (e) {
              var t = this.props.onClick;
              t && t(e);
            }),
            (t.prototype.componentDidMount = function () {
              (this._isMounted = !0), this.load();
            }),
            (t.prototype.componentWillUnmount = function () {
              this._isMounted = !1;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              (e.path !== this.props.path ||
                e.textKey !== this.props.textKey ||
                e.body !== this.props.body) &&
                this.load();
            }),
            (t.prototype.textEl = function (e, t) {
              if (!e) return null;
              var n = this.props.selected;
              return s.createElement(
                "div",
                { style: { position: "relative" }, onClick: this.handleClick },
                s.createElement("pre", { style: t.pre }, e),
                s.createElement("div", {
                  style: n ? t.overlaySelected : t.overlay,
                })
              );
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.hidden,
                n = e.style,
                o = e.picker,
                r = e.translate,
                i = e.textKey,
                a = this.state.text;
              if (
                (r &&
                  (a =
                    "string" === typeof r
                      ? r
                      : r({ type: "text", key: i, content: a })),
                !a && !o)
              )
                return null;
              var c = this.props.theme || _t,
                u = t ? _t.hidden : Object.assign({}, c.text, n);
              return s.createElement(
                "div",
                { style: u },
                u ? this.textEl(a, c) : null,
                o
                  ? s.createElement(
                      "div",
                      null,
                      s.createElement(ko, {
                        key: "picker",
                        onPick: this.handlePick,
                        theme: c,
                      })
                    )
                  : null
              );
            }),
            t
          );
        })(s.Component),
        xo = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Ao = new ge.a("Storage.S3Album");
      !(function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (
            (n._isMounted = !1),
            (n.handlePick = n.handlePick.bind(n)),
            (n.handleClick = n.handleClick.bind(n)),
            (n.list = n.list.bind(n)),
            (n.marshal = n.marshal.bind(n)),
            (n.state = { items: [], ts: new Date().getTime() }),
            n
          );
        }
        xo(t, e),
          (t.prototype.getKey = function (e) {
            var t = this.props.fileToKey,
              n = e.name,
              o = e.size,
              r = e.type,
              i = encodeURI(n);
            if (t) {
              var a = typeof t;
              (i =
                "string" === a
                  ? t
                  : "function" === a
                  ? t({ name: n, size: o, type: r })
                  : encodeURI(JSON.stringify(t))) ||
                (Ao.debug("key is empty"), (i = "empty_key"));
            }
            return i.replace(/\s/g, "_");
          }),
          (t.prototype.handlePick = function (e) {
            var t = this,
              n = this.props,
              o = n.onPick,
              r = n.onLoad,
              i = n.onError,
              a = n.track,
              s = n.level;
            o && o(e);
            var c = this.props.path || "",
              u = e.file,
              l = (e.name, e.size, e.type),
              p = c + this.getKey(e);
            if (!uo.a || "function" !== typeof uo.a.put)
              throw new Error(
                "No Storage module found, please ensure @aws-amplify/storage is imported"
              );
            uo.a
              .put(p, u, { level: s || "public", contentType: l, track: a })
              .then(function (e) {
                Ao.debug("handle pick data", e);
                var n = t.state.items;
                if (
                  0 ===
                  n.filter(function (e) {
                    return e.key === p;
                  }).length
                ) {
                  var o = n.concat(e);
                  t.marshal(o);
                } else Ao.debug("update an item");
                r && r(e);
              })
              .catch(function (e) {
                Ao.debug("handle pick error", e), i && i(e);
              }),
              this._isMounted && this.setState({ ts: new Date().getTime() });
          }),
          (t.prototype.handleClick = function (e) {
            var t = this.props,
              n = t.onClickItem,
              o = t.select,
              r = t.onSelect;
            (n && n(e), o) &&
              ((e.selected = !e.selected),
              this._isMounted &&
                this.setState({ items: this.state.items.slice() }),
              r &&
                r(
                  e,
                  this.state.items.filter(function (e) {
                    return e.selected;
                  })
                ));
          }),
          (t.prototype.componentDidMount = function () {
            (this._isMounted = !0), this.list();
          }),
          (t.prototype.componentWillUnmount = function () {
            this._isMounted = !1;
          }),
          (t.prototype.componentDidUpdate = function (e, t) {
            (this.props.path === e.path &&
              this.props.ts === e.ts &&
              this.props.select === e.select) ||
              (this.props.select ||
                this.state.items.forEach(function (e) {
                  return (e.selected = !1);
                }),
              this.props.onSelect && this.props.onSelect(null, []),
              this.list());
          }),
          (t.prototype.list = function () {
            var e = this,
              t = this.props,
              n = t.path,
              o = t.level,
              r = t.track,
              i = t.identityId;
            if (
              (Ao.debug("Album path: " + n),
              !uo.a || "function" !== typeof uo.a.list)
            )
              throw new Error(
                "No Storage module found, please ensure @aws-amplify/storage is imported"
              );
            return uo.a
              .list(n, { level: o || "public", track: r, identityId: i })
              .then(function (t) {
                Ao.debug("album list", t), e.marshal(t);
              })
              .catch(function (e) {
                return Ao.warn(e), [];
              });
          }),
          (t.prototype.contentType = function (e) {
            return Object(be.c)(e.key, "image/*");
          }),
          (t.prototype.marshal = function (e) {
            var t = this,
              n = this.props.contentType || "";
            e.forEach(function (e) {
              if (!e.contentType) {
                var o = "string" === typeof n;
                (e.contentType = o ? n : n(e)),
                  e.contentType || (e.contentType = t.contentType(e));
              }
            });
            var o = this.filter(e);
            (o = this.sort(o)), this._isMounted && this.setState({ items: o });
          }),
          (t.prototype.filter = function (e) {
            var t = this.props.filter;
            return t ? t(e) : e;
          }),
          (t.prototype.sort = function (e) {
            var t = this.props.sort,
              n = typeof t;
            if ("function" === n) return t(e);
            if (["string", "undefined"].includes(n)) {
              var o = (t || "lastModified").split(/\s+/),
                r = o[0],
                i = o.length > 1 ? o[1] : "";
              return (
                (i =
                  "lastModified" === r
                    ? "asc" === i
                      ? "asc"
                      : "desc"
                    : "desc" === i
                    ? "desc"
                    : "asc"),
                Object(be.h)(e, r, i),
                e
              );
            }
            return (
              Ao.warn(
                "invalid sort. done nothing. should be a string or function"
              ),
              e
            );
          }),
          (t.prototype.render = function () {
            var e = this,
              t = this.props,
              n = t.picker,
              o = t.translateItem,
              r = t.level,
              i = t.identityId,
              a = this.state,
              c = a.items,
              u = a.ts,
              l = this.props.pickerTitle || "Pick",
              p = this.props.theme || _t,
              d = c.map(function (t) {
                return t.contentType && Object(be.e)(t.contentType)
                  ? s.createElement(Po, {
                      key: t.key,
                      textKey: t.key,
                      theme: p,
                      style: p.albumText,
                      selected: t.selected,
                      translate: o,
                      level: r,
                      identityId: i,
                      onClick: function () {
                        return e.handleClick(t);
                      },
                    })
                  : s.createElement(_o, {
                      key: t.key,
                      imgKey: t.key,
                      theme: p,
                      style: p.albumPhoto,
                      selected: t.selected,
                      translate: o,
                      level: r,
                      identityId: i,
                      onClick: function () {
                        return e.handleClick(t);
                      },
                    });
              });
            return s.createElement(
              "div",
              null,
              s.createElement("div", { style: p.album }, d),
              n
                ? s.createElement(fo, {
                    key: u,
                    title: l,
                    accept: "image/*, text/*",
                    onPick: this.handlePick,
                    theme: p,
                  })
                : null
            );
          });
      })(s.Component);
      me.a.putVocabularies({
        de: {
          "Sign In": "Anmelden",
          "Sign Up": "Registrieren",
          "Sign Out": "Abmelden",
          "Sign in to your account": "Melden Sie sich mit Ihrem Account an",
          Username: "Benutzername",
          Password: "Passwort",
          "Enter your username": "Geben Sie Ihren Benutzernamen ein",
          "Enter your password": "Geben Sie Ihr Passwort ein",
          "No account? ": "Kein Account? ",
          "Forgot your password? ": "Passwort vergessen? ",
          "Reset password": "Passwort zur\xfccksetzen",
          "User does not exist": "Dieser Benutzer existiert nicht",
          "User already exists": "Dieser Benutzer existiert bereits",
          "Incorrect username or password":
            "Falscher Benutzername oder falsches Passwort",
          "Invalid password format": "Ung\xfcltiges Passwort-Format",
          "Create account": "Hier registrieren",
          "Forgot Password": "Passwort vergessen",
          "Change Password": "Passwort \xe4ndern",
          "New Password": "Neues Passwort",
          Email: "Email",
          "Phone Number": "Telefonnummer",
          "Confirm a Code": "Code best\xe4tigen",
          "Confirm Sign In": "Anmeldung best\xe4tigen",
          "Confirm Sign Up": "Registrierung best\xe4tigen",
          "Back to Sign In": "Zur\xfcck zur Anmeldung",
          "Send Code": "Code senden",
          Confirm: "Best\xe4tigen",
          "Resend Code": "Code erneut senden",
          Submit: "Abschicken",
          Skip: "\xdcberspringen",
          Verify: "Verifizieren",
          "Verify Contact": "Kontakt verifizieren",
          Code: "Code",
          "Confirmation Code": "Best\xe4tigungs-Code",
          "Lost your code? ": "Code verloren? ",
          "Account recovery requires verified contact information":
            "Zur\xfccksetzen des Account ben\xf6tigt einen verifizierten Account",
          "Invalid phone number format":
            "Ung\xfcltiges Telefonummern-Format.\n            Benutze eine Nummer im Format: +12345678900",
          "Create Account": "Account erstellen",
          "Have an account? ": "Schon registriert? ",
          "Sign in": "Anmelden",
          "Create a new account": "Erstelle einen neuen Account",
          "Reset your password": "Zur\xfccksetzen des Passworts",
          "An account with the given email already exists.":
            "Ein Account mit dieser Email existiert bereits.",
          "Username cannot be empty": "Benutzername darf nicht leer sein",
          "Password attempts exceeded":
            "Die maximale Anzahl der fehlerhaften Anmeldeversuche wurde erreicht",
        },
        fr: {
          Hello: "Bonjour",
          "Loading...": "Chargement...",
          "Sign In": "Se connecter",
          "Sign In with Amazon": "Se connecter avec Amazon",
          "Sign In with Facebook": "Se connecter avec Facebook",
          "Sign In with Google": "Se connecter avec Google",
          "Sign in with AWS": "Se connecter avec AWS",
          "Sign Up": "S'inscrire",
          "Sign Out": "D\xe9connexion",
          "Forgot Password": "Mot de passe oubli\xe9",
          Username: "Nom d'utilisateur",
          Password: "Mot de passe",
          "Change Password": "Modifier le mot de passe",
          Change: "Modifier",
          "New Password": "Nouveau mot de passe",
          Email: "Email",
          "Phone Number": "Num\xe9ro de t\xe9l\xe9phone",
          "Confirm a Code": "Confirmer un code",
          "Confirm Sign In": "Confirmer la connexion",
          "Confirm Sign Up": "Confirmer l'inscription",
          "Back to Sign In": "Retour \xe0 la connexion",
          Send: "Envoyer",
          "Send Code": "M'envoyer un code",
          Confirm: "Confirmer",
          SMS: "SMS",
          "Confirm SMS Code": "Confirmer le code SMS",
          "Confirm TOTP Code": "Confirmer le code TOTP",
          "Resend a Code": "Renvoyer un code",
          Submit: "Soumettre",
          Skip: "Passer",
          Verify: "V\xe9rifier",
          "Verify Contact": "V\xe9rifier le contact",
          Code: "Code",
          "Confirmation Code": "Code de confirmation",
          "Account recovery requires verified contact information":
            "La r\xe9cup\xe9ration du compte n\xe9cessite des informations de contact v\xe9rifi\xe9es",
          "User does not exist": "L'utilisateur n'existe pas",
          "User already exists": "L'utilisateur existe d\xe9j\xe0",
          "Incorrect username or password":
            "Identifiant ou mot de passe incorrect",
          "Invalid password format": "Format de mot de passe invalide",
          "Invalid phone number format":
            "Format de num\xe9ro de t\xe9l\xe9phone invalide. Veuillez utiliser un format +12345678900",
          "Username/client id combination not found.":
            "L'utilisateur n'existe pas",
          "Network error": "Erreur r\xe9seau",
          "Sign in to your account": "Connexion \xe0 votre compte",
          "Forgot your password? ": "Mot de passe oubli\xe9 ? ",
          "Reset password": "R\xe9initialisez votre mot de passe",
          "No account? ": "Pas de compte ? ",
          "Create account": "Cr\xe9er un compte",
          "Create Account": "Cr\xe9er un compte",
          "Have an account? ": "D\xe9j\xe0 un compte ? ",
          "Sign in": "Se connecter",
          "Create a new account": "Cr\xe9er un nouveau compte",
          "Reset your password": "R\xe9initialisez votre mot de passe",
          "Enter your username": "Saisissez votre nom d'utilisateur",
          "Enter your password": "Saisissez votre mot de passe",
          "Enter your phone number":
            "Saisissez votre num\xe9ro de t\xe9l\xe9phone",
          "Enter your email": "Saisissez votre adresse email",
          "Enter your code": "Saisissez cotre code de confirmation",
          "Lost your code? ": "Vous avez perdu votre code ? ",
          "Resend Code": "Renvoyer le code",
          or: "ou",
          "An account with the given email already exists.":
            "Un utilisateur avec cette adresse email existe d\xe9j\xe0.",
          "Username cannot be empty":
            "Le nom d'utilisateur doit \xeatre renseign\xe9",
        },
        es: {
          "Sign in to your account": "Iniciar ses\xedon",
          "Loading...": "Cargando...",
          "Confirmation Code": "Codigo de confirmaci\xf3n",
          "Sign In": "Iniciar ses\xedon",
          "Sign Up": "Reg\xedstrase",
          "Sign Out": "Desconectar",
          "Forgot Password": "Se te olvid\xf3 la contrase\xf1a?",
          Username: "Nombre de usuario",
          Password: "Contrase\xf1a",
          "Change Password": "Cambia la contrase\xf1a",
          "New Password": "Nueva contrase\xf1a",
          Email: "Email",
          "Phone Number": "N\xfamero de tel\xe9fono",
          "Resend Code": "Mandar codigo otra vez",
          "Create a new account": "Crear una cuenta nueva",
          "Confirm a Code": "Confirmar un c\xf3digo",
          "Confirm Sign In": "Confirmar inicio de sesi\xf3n",
          "Confirm Sign Up": "Confirmar Registraci\xf3n",
          "Back to Sign In": "Iniciar sesi\xf3n",
          "Send Code": "Enviar c\xf3digo",
          Confirm: "Confirmar",
          "Resend a Code": "Reenviar un c\xf3digo",
          Submit: "Enviar",
          Skip: "Omitir",
          Verify: "Verificar",
          "Verify Contact": "Verificar contacto",
          Code: "C\xf3digo",
          "Account recovery requires verified contact information":
            "La recuperaci\xf3n de la cuenta requiere informaci\xf3n de contacto verificada",
          "Username cannot be empty":
            "El campo de usuario no puede estar vacido",
          "User does not exist": "El usuario no existe",
          "User already exists": "El usuario ya existe",
          "Incorrect username or password":
            "Nombre de usuario o contrase\xf1a incorrecta",
          "Invalid password format": "Formato de contrase\xf1a inv\xe1lido",
          "Invalid phone number format":
            "Formato de n\xfamero de tel\xe9fono inv\xe1lido.\nUtilice el formato de n\xfamero de tel\xe9fono +12345678900",
        },
        it: {
          "Account recovery requires verified contact information":
            "Ripristino del conto richiede un account verificati",
          "An account with the given email already exists.":
            "Un account con questa email esiste gi\xe0.",
          "Back to Sign In": "Torna alla Accesso",
          "Change Password": "Cambia la password",
          Code: "Codice",
          Confirm: "Conferma",
          "Confirm Sign In": "Conferma di applicazione",
          "Confirm Sign Up": "Registrazione Conferma",
          "Confirm a Code": "Codice Conferma",
          "Confirmation Code": "Codice di verifica",
          "Create Account": "Crea account",
          "Create a new account": "Creare un nuovo account",
          "Create account": "Registrati",
          Email: "E-mail",
          "Enter your password": "Inserire la password",
          "Enter your username": "Inserisci il tuo nome utente",
          "Forgot your password?": "Password dimenticata?",
          "Forgot Password": "Password dimenticata",
          "Have an account? ": "Gi\xe0 registrato?",
          "Incorrect username or password": "Nome utente o password errati",
          "Invalid password format": "Formato della password non valido",
          "Invalid phone number format":
            "Utilizzo non valido Telefonummern formattare un numero nel formato :. 12.345.678,9 mille",
          "Lost your code?": "Perso codice?",
          "New Password": "Nuova password",
          "No account? ": "Nessun account?",
          Password: "Password",
          "Password attempts exceeded":
            "Il numero massimo di tentativi di accesso falliti \xe8 stato raggiunto",
          "Phone Number": "Numero di telefono",
          "Resend Code": "Codice Rispedisci",
          "Reset password": "Ripristina password",
          "Reset your password": "Resetta password",
          "Send Code": "Invia codice",
          "Sign In": "Accesso",
          "Sign Out": "Esci",
          "Sign Up": "Iscriviti",
          "Sign in": "Accesso",
          "Sign in to your account": "Accedi con il tuo account a",
          Skip: "Salta",
          Submit: "Sottoscrivi",
          "User already exists": "Questo utente esiste gi\xe0",
          "User does not exist": "Questo utente non esiste",
          Username: "Nome utente",
          "Username cannot be empty": "Nome utente non pu\xf2 essere vuoto",
          Verify: "Verifica",
          "Verify Contact": "Contatto verifica",
        },
        zh: {
          "Sign In": "\u767b\u5f55",
          "Sign Up": "\u6ce8\u518c",
          "Sign Out": "\u9000\u51fa",
          "Forgot Password": "\u5fd8\u8bb0\u5bc6\u7801",
          Username: "\u7528\u6237\u540d",
          Password: "\u5bc6\u7801",
          "Change Password": "\u6539\u53d8\u5bc6\u7801",
          "New Password": "\u65b0\u5bc6\u7801",
          Email: "\u90ae\u7bb1",
          "Phone Number": "\u7535\u8bdd",
          "Confirm a Code": "\u786e\u8ba4\u7801",
          "Confirm Sign In": "\u786e\u8ba4\u767b\u5f55",
          "Confirm Sign Up": "\u786e\u8ba4\u6ce8\u518c",
          "Back to Sign In": "\u56de\u5230\u767b\u5f55",
          "Send Code": "\u53d1\u9001\u786e\u8ba4\u7801",
          Confirm: "\u786e\u8ba4",
          "Resend a Code": "\u91cd\u53d1\u786e\u8ba4\u7801",
          Submit: "\u63d0\u4ea4",
          Skip: "\u8df3\u8fc7",
          Verify: "\u9a8c\u8bc1",
          "Verify Contact": "\u9a8c\u8bc1\u8054\u7cfb\u65b9\u5f0f",
          Code: "\u786e\u8ba4\u7801",
          "Account recovery requires verified contact information":
            "\u8d26\u6237\u6062\u590d\u9700\u8981\u9a8c\u8bc1\u8fc7\u7684\u8054\u7cfb\u65b9\u5f0f",
          "User does not exist": "\u7528\u6237\u4e0d\u5b58\u5728",
          "User already exists": "\u7528\u6237\u5df2\u7ecf\u5b58\u5728",
          "Incorrect username or password":
            "\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef",
          "Invalid password format": "\u5bc6\u7801\u683c\u5f0f\u9519\u8bef",
          "Invalid phone number format":
            "\u7535\u8bdd\u683c\u5f0f\u9519\u8bef\uff0c\u8bf7\u4f7f\u7528\u683c\u5f0f +12345678900",
        },
        ja: {
          "Sign In": "\u30b5\u30a4\u30f3\u30a4\u30f3 ",
          "Sign Up": "\u767b\u9332 ",
          "Sign Out": "\u30b5\u30a4\u30f3\u30a2\u30a6\u30c8 ",
          "Sign in to your account":
            "\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30b5\u30a4\u30f3\u30a4\u30f3 ",
          Username: "\u30e6\u30fc\u30b6\u30fc\u540d ",
          Password: "\u30d1\u30b9\u30ef\u30fc\u30c9 ",
          "Enter your username":
            "\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u5165\u529b ",
          "Enter your password":
            "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b ",
          "No account? ":
            "\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u7121\u3044\u3068\u304d ",
          "Forgot your password? ":
            "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5fd8\u308c\u307e\u3057\u305f\u304b\uff1f ",
          "Reset password":
            "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30ea\u30bb\u30c3\u30c8 ",
          "User does not exist":
            "\u30e6\u30fc\u30b6\u30fc\u304c\u5b58\u5728\u3057\u307e\u305b\u3093 ",
          "User already exists":
            "\u65e2\u306b\u30e6\u30fc\u30b6\u30fc\u304c\u5b58\u5728\u3057\u3066\u3044\u307e\u3059 ",
          "Incorrect username or password":
            "\u30e6\u30fc\u30b6\u30fc\u540d\u304b\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u7570\u306a\u308a\u307e\u3059 ",
          "Invalid password format":
            "\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u5f62\u5f0f\u304c\u7121\u52b9\u3067\u3059 ",
          "Create account": "\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u308b ",
          "Forgot Password":
            "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5fd8\u308c\u305f ",
          "Change Password":
            "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u3048\u308b ",
          "New Password": "\u65b0\u3057\u3044\u30d1\u30b9\u30ef\u30fc\u30c9",
          Email: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",
          "Phone Number": "\u96fb\u8a71\u756a\u53f7",
          "Confirm a Code": "\u30b3\u30fc\u30c9\u3092\u78ba\u8a8d",
          "Confirm Sign In": "\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b",
          "Confirm Sign Up": "\u767b\u9332\u3059\u308b",
          "Back to Sign In": "\u30b5\u30a4\u30f3\u30a4\u30f3\u306b\u623b\u308b",
          "Send Code": "\u30b3\u30fc\u30c9\u3092\u9001\u4fe1",
          Confirm: "\u78ba\u5b9a",
          "Resend Code": "\u30b3\u30fc\u30c9\u3092\u518d\u9001\u4fe1",
          Submit: "\u9001\u4fe1",
          Skip: "\u30b9\u30ad\u30c3\u30d7",
          Verify: "\u78ba\u8a8d",
          "Verify Contact": "\u9023\u7d61\u5148\u3092\u78ba\u8a8d",
          Code: "\u30b3\u30fc\u30c9",
          "Confirmation Code": "\u78ba\u8a8d\u30b3\u30fc\u30c9",
          "Lost your code? ":
            "\u30b3\u30fc\u30c9\u3092\u5931\u304f\u3057\u307e\u3057\u305f\u304b\uff1f",
          "Account recovery requires verified contact information":
            "\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u5fa9\u65e7\u306b\u306f\u78ba\u8a8d\u6e08\u307f\u306e\u9023\u7d61\u5148\u304c\u5fc5\u8981\u3067\u3059",
          "Invalid phone number format":
            "\u4e0d\u6b63\u306a\u96fb\u8a71\u756a\u53f7\u306e\u5f62\u5f0f\u3067\u3059\u3002\n+12345678900 \u306e\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
          "Create Account": "\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u308b",
          "Have an account? ":
            "\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u304b\uff1f",
          "Sign in": "\u30b5\u30a4\u30f3\u30a4\u30f3",
          "Create a new account":
            "\u65b0\u3057\u3044\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u308b",
          "Reset your password":
            "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30ea\u30bb\u30c3\u30c8\u3059\u308b",
          "An account with the given email already exists.":
            "\u5165\u529b\u3055\u308c\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u65e2\u306b\u5b58\u5728\u3057\u307e\u3059",
          "Username cannot be empty":
            "\u30e6\u30fc\u30b6\u30fc\u540d\u306f\u5165\u529b\u5fc5\u9808\u3067\u3059",
          "Password attempts exceeded":
            "\u30b5\u30a4\u30f3\u30a4\u30f3\u306e\u8a66\u884c\u56de\u6570\u304c\u4e0a\u9650\u306b\u9054\u3057\u307e\u3057\u305f",
          "Sign In with Google": "Google\u3067\u30b5\u30a4\u30f3\u30a4\u30f3",
          "Sign In with Facebook":
            "Facebook\u3067\u30b5\u30a4\u30f3\u30a4\u30f3",
        },
      });
      var jo = n("ZA9o"),
        To = n("HJKE"),
        Bo =
          "\n@font-face {\n  font-family: 'Helvetica Neue';\n  src: url('/fonts/HelveticaNeueLTPro-Roman.woff2') format('woff2'),\n      url('/fonts/HelveticaNeueLTPro-Roman.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: fallback;\n}\n\n@font-face {\n  font-family: 'Helvetica Neue';\n  src: url('/fonts/HelveticaNeueLTPro-It.woff2') format('woff2'),\n      url('/fonts/HelveticaNeueLTPro-It.woff') format('woff');\n  font-weight: normal;\n  font-style: italic;\n  font-display: fallback;\n}\n\n@font-face {\n  font-family: 'Helvetica Neue';\n  src: url('/fonts/HelveticaNeueLTPro-MdIt.otf') format('otf');\n  font-weight: bold;\n  font-style: italic;\n  font-display: fallback;\n}\n\n@font-face {\n  font-family: 'Helvetica Neue';\n  src: url('/fonts/HelveticaNeueLTPro-Md.otf') format('otf');\n  font-weight: bold;\n  font-style: normal;\n  font-display: fallback;\n}\n\n\n  * {\n    box-sizing: border-box;\n    overscroll-behavior: none;\n  }\n\n  ::selection {\n    background-color: "
            .concat(To.b.grey, ";\n  }\n\n  ::placeholder {\n\t  color: ")
            .concat(
              To.b.base,
              ";\n  }\n\n  body, html {\n    margin: 0;\n\tfont-display: block;\n    font-family: "
            )
            .concat(To.d.family.body, ";\n    font-size: ")
            .concat(To.g.sm, "px;\n    line-height: ")
            .concat(To.d.lineheights.body, ";\n    font-weight: ")
            .concat(To.d.weight.regular, ";\n    background: ")
            .concat(To.b.white, ";\n\tcolor: ")
            .concat(
              To.b.black,
              ";\n    scroll-behavior: smooth;\n    -webkit-overflow-scrolling: touch;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-app-region: drag;\n    letter-spacing: -0.02em;\n  }\n\n  a {\n    text-decoration: none;\n    outline: none;\n    color: inherit;\n\tcursor: pointer;\n  }\n\n  h1 {\n    margin-top: 0;\n    margin-bottom: .5em;\n    font-size: "
            )
            .concat(To.g.xxl, "px;\n    line-height: ")
            .concat(To.f.xxl, "px;\n    font-weight: ")
            .concat(
              To.d.weight.medium,
              ";\n  }\n\n  @media only screen and (max-width: 600px) {\n      h1 {\n        font-size: "
            )
            .concat(To.g.mdx, "px;\n        line-height: ")
            .concat(To.f.mdx, "px;\n      }\n\n      p {\n        font-size: ")
            .concat(
              To.g.xsx,
              "px;\n      }\n  }\n\n  h2 {\n      margin-top: 0;\n      font-size: "
            )
            .concat(
              To.g.lg,
              "px;\n      font-weight: normal;\n  }\n\n  h3 {\n      margin-top: 0;\n\t  font-size: "
            )
            .concat(
              To.g.md,
              "px;\n      font-weight: normal;\n  }\n\n  h4 {\n    margin-top: 0;\n      font-weight: "
            )
            .concat(To.d.weight.regular, ";\n\t  font-size: ")
            .concat(To.g.sm, "px;\n  }\n\n  b, strong{\n    font-weight: ")
            .concat(To.d.weight.medium, ";\n  }\n\n  p {\n    margin: 0 0 ")
            .concat(
              To.g.sm,
              "px;\n  }\n\n  :root {\n    --amplify-primary-color: "
            )
            .concat(To.b.purple, ";\n    --amplify-font-family: ")
            .concat(
              To.d.family.body,
              ";\n  }\n\n  amplify-sign-in {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    height: 100vh;\n    width: 100vw;\n    background: "
            )
            .concat(
              To.b.white,
              ";\n  }\n\n  button {\n    cursor: pointer;\n    &:focus {\n      outline: 0;\n    }\n    &:disabled {\n        opacity: .5;\n        cursor: default;\n        pointer-events: none;\n    }\n  }\n\n  *:focus {\n    outline: none;\n    box-shadow: 0 0 2px 2px "
            )
            .concat(
              To.b.green,
              ";\n    border-radius: 32px;\n  }\n\n  .sign-in-form-footer .button {\n      background: "
            )
            .concat(To.b.purple, "!important;\n      border: 1px solid ")
            .concat(To.b.red, "!important;\n      color: ")
            .concat(
              To.b.red,
              "!important;\n      height: 32px!important;\n      padding: 0 "
            )
            .concat(
              To.h.two,
              "px!important;\n  }\n\n  .ReactTags__selected {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .tag-wrapper {\n    display: flex;\n    border: 1px solid "
            )
            .concat(To.b.primary50, ";\n    border-radius: ")
            .concat(To.i.borderRadius, ";\n    background: ")
            .concat(
              To.b.white,
              ";\n    margin: 10px 10px 5px 0;\n    padding: 6px 6px 6px 12px;\n    color: "
            )
            .concat(To.b.primary50, ";\n    font-size: ")
            .concat(
              To.g.sm,
              "px;\n  }\n\n  .ReactTags__remove {\n    border: none;\n    background: "
            )
            .concat(
              To.b.white,
              ";\n    margin-left: 10px;\n  }\n\n\n  input:disabled {\n    cursor: not-allowed;\n  }\n\n"
            ),
        No = {
          breakpoints: [
            "".concat(To.a.tablet, "px"),
            "".concat(To.a.desktop, "px"),
            "".concat(To.a.largeDesktop, "px"),
          ],
          colors: { text: To.b.black, background: To.b.white },
          fonts: {
            body: To.d.family.body,
            heading: To.d.family.body,
            mono: To.d.family.mono,
          },
          fontWeights: {
            body: To.d.weight.regular,
            heading: To.d.weight.regular,
          },
          lineHeights: {
            body: To.d.lineheights.body,
            heading: To.d.lineheights.heading,
          },
          fontSizes: [
            To.g.sm,
            To.g.base,
            To.g.md,
            To.g.lg,
            To.g.xl,
            To.g.xxl,
            To.g.xxxl,
            To.g.xxxxl,
          ],
          buttons: {
            primary: {
              height: "44px",
              width: "214px",
              fontSize: "30px",
              lineHeight: "33px",
              padding: "0",
              borderRadius: "0",
            },
          },
          forms: {
            label: { fontFamily: To.d.family.body, fontSize: To.g.xs },
            input: {
              fontFamily: To.d.family.body,
              padding: "0px 16px;",
              background: To.b.white,
            },
          },
        },
        Lo = n("JNx7"),
        Mo = n("nWs/"),
        Uo = n("zu7K"),
        Fo = {
          aws_project_region: "eu-west-1",
          aws_cognito_identity_pool_id:
            "eu-west-1:03f47bf0-cb74-4958-a55d-011de882f5ec",
          aws_cognito_region: "eu-west-1",
          aws_user_pools_id: "eu-west-1_gUfpMT67o",
          aws_user_pools_web_client_id: "3q2u269tin2i1oup12diodhr9n",
          oauth: {},
        },
        Ro = n("p46w");
      const Do = "USE_COOKIE_CONSENT_STATE",
        zo = {},
        Ho = (e) => ({
          session: e,
          persistent: e,
          necessary: !0,
          preferences: e,
          statistics: e,
          marketing: e,
          firstParty: e,
          thirdParty: e,
        });
      var Vo = n("YFqc"),
        qo = n.n(Vo),
        Go = n("VdAu"),
        Wo = n("Qrgx"),
        Xo = n("B17t"),
        Ko = c.a.createElement;
      function Jo() {
        var e = Object(a.a)([
          "\n  flex-direction: column;\n  & > div:first-of-type {\n    margin-bottom: 32px;\n  }\n\n  @media screen and (min-width: ",
          "px) {\n    flex-direction: row;\n  }\n  position: fixed;\n  bottom: 24px;\n  left: 50%;\n  width: 80%;\n  max-width: 800px;\n  z-index: 50;\n  transform: translateX(-50%);\n  background-color: ",
          ";\n  padding: 16px;\n  border-radius: ",
          ";\n  box-shadow: ",
          ";\n",
        ]);
        return (
          (Jo = function () {
            return e;
          }),
          e
        );
      }
      var Yo = Object(de.c)(Go.b)(
          Jo(),
          To.a.phablet,
          To.b.white,
          To.i.borderRadius,
          To.i.boxShadow
        ),
        Qo = function (e) {
          var t = e.children,
            n = ((e) => {
              const t =
                  Ro.getJSON(Do) ||
                  (null === e || void 0 === e ? void 0 : e.defaultConsent) ||
                  zo,
                [n, o] = Object(s.useState)(t);
              Object(s.useEffect)(() => {
                (null === n || void 0 === n ? void 0 : n.necessary) &&
                  Ro.set(
                    Do,
                    n,
                    null === e || void 0 === e
                      ? void 0
                      : e.consentCookieAttributes
                  );
              }, [n]);
              const r = {
                set: (e, t, o, r) => {
                  if (
                    ((e, t) =>
                      !!t &&
                      !!t[e.duration] &&
                      !!t[e.provenance] &&
                      !!t[e.purpose])(o, n)
                  )
                    return Ro.set(e, t, r);
                },
                get: Ro.get,
                getAll: Ro.get,
                getJSON: Ro.getJSON,
                getAllJSON: Ro.getJSON,
                remove: Ro.remove,
              };
              return {
                consent: n,
                acceptCookies: (e) => {
                  o(e);
                },
                declineAllCookies: () => {
                  o(Ho(!1));
                },
                acceptAllCookies: () => {
                  o(Ho(!0));
                },
                didAcceptAll: () =>
                  Object.keys(n || {}).reduce(
                    (e, t) => (e && n && n[t]) || !1,
                    !0
                  ),
                didDeclineAll: (e) =>
                  Object.keys(n || {}).reduce(
                    (t, o) =>
                      (null === e || void 0 === e
                        ? void 0
                        : e.includingNecessary) || "necessary" !== o
                        ? (t && n && !n[o]) || !1
                        : t,
                    !0
                  ),
                cookies: r,
              };
            })(),
            o = n.consent,
            r = n.acceptAllCookies,
            i = (n.declineAllCookies, n.acceptCookies);
          return (
            Object(s.useEffect)(
              function () {
                !window.GA_INITIALIZED &&
                  o.statistics &&
                  (Object(Xo.a)(), (window.GA_INITIALIZED = !0));
              },
              [o]
            ),
            o && 0 !== Object.keys(o).length
              ? t
              : Ko(
                  c.a.Fragment,
                  null,
                  t,
                  Ko(
                    Yo,
                    null,
                    Ko(
                      "div",
                      null,
                      "This site uses cookies to store information on your computer. Some of these cookies are essential, while others help us to improve your experience by providing insights into how the website is being used. View our",
                      " ",
                      Ko(
                        qo.a,
                        { href: "/pages/[slug]", as: "/pages/cookie-policy" },
                        Ko(
                          "a",
                          { style: { textDecoration: "underline" } },
                          "cookie policy"
                        )
                      ),
                      "."
                    ),
                    Ko(
                      Go.b,
                      {
                        flexDirection: "column",
                        minWidth: "150px",
                        ml: ["0px", "32px"],
                      },
                      Ko(Wo.a, {
                        handleClick: r,
                        variant: "primary",
                        mb: "8px",
                        text: "I agree",
                      }),
                      Ko(Wo.a, {
                        handleClick: function () {
                          return i({ firstParty: !0, necessary: !0 });
                        },
                        variant: "secondary",
                        text: "Close",
                      })
                    )
                  )
                )
          );
        },
        Zo = n("itWG"),
        $o = n("20a2"),
        er = c.a.createElement;
      function tr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function nr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tr(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : tr(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function or() {
        var e = Object(a.a)(["\n  ", "\n"]);
        return (
          (or = function () {
            return e;
          }),
          e
        );
      }
      he.a.configure(Fo);
      var rr = Object(de.a)(or(), Bo);
      t.default = function (e) {
        var t = e.Component,
          n = e.pageProps,
          r = (n.seoData, i(n, ["seoData"])),
          a = Object(s.useState)({ user: void 0, isLoaded: !1, hasError: !1 }),
          u = a[0],
          l = a[1];
        Object(s.useEffect)(function () {
          setTimeout(function () {
            !u.user && fe.a.user
              ? (l(nr(nr({}, u), {}, { user: fe.a.user })),
                setTimeout(function () {
                  l(nr(nr({}, u), {}, { isLoaded: !0 }));
                }, 300))
              : l(nr(nr({}, u), {}, { isLoaded: !0 }));
          }, 200);
        }, []);
        var p = Object($o.useRouter)();
        return (
          Object(s.useMemo)(
            function () {
              window.scrollTo(0, 0);
            },
            [p.asPath]
          ),
          er(
            c.a.Fragment,
            null,
            er(Zo.a, r.dataSeo),
            er(rr, null),
            er(
              pe,
              { theme: No },
              er(
                Mo.b,
                null,
                er(
                  Uo.b,
                  null,
                  u.hasError
                    ? er(jo.default, null)
                    : er(
                        ao,
                        { hideDefault: !0, amplifyConfig: Fo },
                        u.isLoaded &&
                          er(
                            Lo.b,
                            { cognitoUser: u.user },
                            er(
                              Qo,
                              null,
                              er(
                                t,
                                o({}, r, {
                                  handleAuthStateChange: function (e, t) {
                                    return l(nr(nr({}, u), {}, { user: t }));
                                  },
                                })
                              )
                            )
                          )
                      )
                )
              )
            )
          )
        );
      };
    },
    ZA9o: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("q1tI"),
        r = n.n(o).a.createElement;
      function i(e) {
        var t = e.statusCode;
        return r(
          "p",
          null,
          t
            ? "An error ".concat(t, " occurred on server")
            : "An error occurred on client"
        );
      }
      (i.getInitialProps = function (e) {
        var t = e.res,
          n = e.err;
        return { statusCode: t ? t.statusCode : n ? n.statusCode : 404 };
      }),
        (t.default = i);
    },
    aRTE: function (e, t) {
      e.exports = { L: 1, M: 0, Q: 3, H: 2 };
    },
    dQei: function (e, t) {
      for (
        var n = {
            glog: function (e) {
              if (e < 1) throw new Error("glog(" + e + ")");
              return n.LOG_TABLE[e];
            },
            gexp: function (e) {
              for (; e < 0; ) e += 255;
              for (; e >= 256; ) e -= 255;
              return n.EXP_TABLE[e];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256),
          },
          o = 0;
        o < 8;
        o++
      )
        n.EXP_TABLE[o] = 1 << o;
      for (o = 8; o < 256; o++)
        n.EXP_TABLE[o] =
          n.EXP_TABLE[o - 4] ^
          n.EXP_TABLE[o - 5] ^
          n.EXP_TABLE[o - 6] ^
          n.EXP_TABLE[o - 8];
      for (o = 0; o < 255; o++) n.LOG_TABLE[n.EXP_TABLE[o]] = o;
      e.exports = n;
    },
    dWSS: function (e, t, n) {
      var o = n("dQei");
      function r(e, t) {
        if (void 0 == e.length) throw new Error(e.length + "/" + t);
        for (var n = 0; n < e.length && 0 == e[n]; ) n++;
        this.num = new Array(e.length - n + t);
        for (var o = 0; o < e.length - n; o++) this.num[o] = e[o + n];
      }
      (r.prototype = {
        get: function (e) {
          return this.num[e];
        },
        getLength: function () {
          return this.num.length;
        },
        multiply: function (e) {
          for (
            var t = new Array(this.getLength() + e.getLength() - 1), n = 0;
            n < this.getLength();
            n++
          )
            for (var i = 0; i < e.getLength(); i++)
              t[n + i] ^= o.gexp(o.glog(this.get(n)) + o.glog(e.get(i)));
          return new r(t, 0);
        },
        mod: function (e) {
          if (this.getLength() - e.getLength() < 0) return this;
          for (
            var t = o.glog(this.get(0)) - o.glog(e.get(0)),
              n = new Array(this.getLength()),
              i = 0;
            i < this.getLength();
            i++
          )
            n[i] = this.get(i);
          for (i = 0; i < e.getLength(); i++)
            n[i] ^= o.gexp(o.glog(e.get(i)) + t);
          return new r(n, 0).mod(e);
        },
      }),
        (e.exports = r);
    },
    f4xo: function (e, t, n) {
      var o = n("nVVt");
      function r(e) {
        (this.mode = o.MODE_8BIT_BYTE), (this.data = e);
      }
      (r.prototype = {
        getLength: function (e) {
          return this.data.length;
        },
        write: function (e) {
          for (var t = 0; t < this.data.length; t++)
            e.put(this.data.charCodeAt(t), 8);
        },
      }),
        (e.exports = r);
    },
    nVVt: function (e, t) {
      e.exports = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8,
      };
    },
    rcnY: function (e, t, n) {
      var o = n("aRTE");
      function r(e, t) {
        (this.totalCount = e), (this.dataCount = t);
      }
      (r.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16],
      ]),
        (r.getRSBlocks = function (e, t) {
          var n = r.getRsBlockTable(e, t);
          if (void 0 == n)
            throw new Error(
              "bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t
            );
          for (var o = n.length / 3, i = new Array(), a = 0; a < o; a++)
            for (
              var s = n[3 * a + 0], c = n[3 * a + 1], u = n[3 * a + 2], l = 0;
              l < s;
              l++
            )
              i.push(new r(c, u));
          return i;
        }),
        (r.getRsBlockTable = function (e, t) {
          switch (t) {
            case o.L:
              return r.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case o.M:
              return r.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case o.Q:
              return r.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case o.H:
              return r.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
              return;
          }
        }),
        (e.exports = r);
    },
    tZ2j: function (e, t, n) {
      "use strict";
      var o = function (e) {
        return (
          (function (e) {
            return !!e && "object" === typeof e;
          })(e) &&
          !(function (e) {
            var t = Object.prototype.toString.call(e);
            return (
              "[object RegExp]" === t ||
              "[object Date]" === t ||
              (function (e) {
                return e.$$typeof === r;
              })(e)
            );
          })(e)
        );
      };
      var r =
        "function" === typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
      function i(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? l(((n = e), Array.isArray(n) ? [] : {}), e, t)
          : e;
        var n;
      }
      function a(e, t, n) {
        return e.concat(t).map(function (e) {
          return i(e, n);
        });
      }
      function s(e) {
        return Object.keys(e).concat(
          (function (e) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(e).filter(function (t) {
                  return e.propertyIsEnumerable(t);
                })
              : [];
          })(e)
        );
      }
      function c(e, t) {
        try {
          return t in e;
        } catch (n) {
          return !1;
        }
      }
      function u(e, t, n) {
        var o = {};
        return (
          n.isMergeableObject(e) &&
            s(e).forEach(function (t) {
              o[t] = i(e[t], n);
            }),
          s(t).forEach(function (r) {
            (function (e, t) {
              return (
                c(e, t) &&
                !(
                  Object.hasOwnProperty.call(e, t) &&
                  Object.propertyIsEnumerable.call(e, t)
                )
              );
            })(e, r) ||
              (c(e, r) && n.isMergeableObject(t[r])
                ? (o[r] = (function (e, t) {
                    if (!t.customMerge) return l;
                    var n = t.customMerge(e);
                    return "function" === typeof n ? n : l;
                  })(r, n)(e[r], t[r], n))
                : (o[r] = i(t[r], n)));
          }),
          o
        );
      }
      function l(e, t, n) {
        ((n = n || {}).arrayMerge = n.arrayMerge || a),
          (n.isMergeableObject = n.isMergeableObject || o),
          (n.cloneUnlessOtherwiseSpecified = i);
        var r = Array.isArray(t);
        return r === Array.isArray(e)
          ? r
            ? n.arrayMerge(e, t, n)
            : u(e, t, n)
          : i(t, n);
      }
      l.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, n) {
          return l(e, n, t);
        }, {});
      };
      var p = l;
      e.exports = p;
    },
    vYnt: function (e, t, n) {
      e.exports = (function (e) {
        var t = {};
        function n(o) {
          if (t[o]) return t[o].exports;
          var r = (t[o] = { i: o, l: !1, exports: {} });
          return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, o) {
            n.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: o });
          }),
          (n.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (
              (n.r(o),
              Object.defineProperty(o, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var r in e)
                n.d(
                  o,
                  r,
                  function (t) {
                    return e[t];
                  }.bind(null, r)
                );
            return o;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 0))
        );
      })([
        function (e, t, n) {
          "use strict";
          function o(e) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            o(n(1)),
            o(n(2)),
            o(n(3)),
            o(n(4)),
            o(n(5)),
            o(n(6)),
            o(n(7)),
            o(n(8)),
            o(n(9)),
            o(n(10)),
            o(n(11)),
            o(n(12)),
            o(n(13));
        },
        function (e, t, n) {
          e.exports = { a: "Anchor__a___1_Iz8" };
        },
        function (e, t, n) {
          e.exports = {
            button: "Button__button___vS7Mv",
            signInButton: "Button__signInButton___3bUH-",
            googleSignInButton: "Button__googleSignInButton___1YiCu",
            signInButtonIcon: "Button__signInButtonIcon___ihN75",
            auth0SignInButton: "Button__auth0SignInButton___znnCj",
            facebookSignInButton: "Button__facebookSignInButton___34Txh",
            amazonSignInButton: "Button__amazonSignInButton___2EMtl",
            oAuthSignInButton: "Button__oAuthSignInButton___3UGOl",
            signInButtonContent: "Button__signInButtonContent___xqTXJ",
          };
        },
        function (e, t, n) {
          e.exports = {
            formContainer: "Form__formContainer___1GA3x",
            formSection: "Form__formSection___1PPvW",
            formField: "Form__formField___38Ikl",
            formRow: "Form__formRow___2mwRs",
          };
        },
        function (e, t, n) {
          e.exports = { hint: "Hint__hint___2XngB" };
        },
        function (e, t, n) {
          e.exports = {
            input: "Input__input___3e_bf",
            inputLabel: "Input__inputLabel___3VF0S",
            label: "Input__label___23sO8",
            radio: "Input__radio___2hllK",
          };
        },
        function (e, t, n) {
          e.exports = {
            navBar: "Nav__navBar___xtCFA",
            navRight: "Nav__navRight___1QG2J",
            nav: "Nav__nav___2Dx2Y",
            navItem: "Nav__navItem___1LtFQ",
          };
        },
        function (e, t, n) {
          e.exports = {
            photoPickerButton: "PhotoPicker__photoPickerButton___2XdVn",
            photoPlaceholder: "PhotoPicker__photoPlaceholder___2JXO4",
            photoPlaceholderIcon: "PhotoPicker__photoPlaceholderIcon___3Et71",
          };
        },
        function (e, t, n) {
          e.exports = {
            container: "Section__container___3YYTG",
            actionRow: "Section__actionRow___2LWSU",
            sectionHeader: "Section__sectionHeader___2djyg",
            sectionHeaderHint: "Section__sectionHeaderHint___3Wxdc",
            sectionBody: "Section__sectionBody___ihqqd",
            sectionHeaderContent: "Section__sectionHeaderContent___1UCqa",
            sectionFooter: "Section__sectionFooter___1T54C",
            sectionFooterPrimaryContent:
              "Section__sectionFooterPrimaryContent___2r9ZX",
            sectionFooterSecondaryContent:
              "Section__sectionFooterSecondaryContent___Nj41Q",
          };
        },
        function (e, t, n) {
          e.exports = { selectInput: "SelectInput__selectInput___3efO4" };
        },
        function (e, t, n) {
          e.exports = {
            strike: "Strike__strike___1XV1b",
            strikeContent: "Strike__strikeContent___10gLb",
          };
        },
        function (e, t, n) {
          e.exports = {
            toast: "Toast__toast___XXr3v",
            toastClose: "Toast__toastClose___18lU4",
          };
        },
        function (e, t, n) {
          e.exports = { totpQrcode: "Totp__totpQrcode___1crLx" };
        },
        function (e, t, n) {
          e.exports = {
            sumerianSceneContainer: "XR__sumerianSceneContainer___3nVMt",
            sumerianScene: "XR__sumerianScene___2Tt7-",
            loadingOverlay: "XR__loadingOverlay___IbqcI",
            loadingContainer: "XR__loadingContainer___2Itxb",
            loadingLogo: "XR__loadingLogo___Ub7xQ",
            loadingSceneName: "XR__loadingSceneName___3__ne",
            loadingBar: "XR__loadingBar___2vcke",
            loadingBarFill: "XR__loadingBarFill___3M-D9",
            sceneErrorText: "XR__sceneErrorText___2y0tp",
            sceneBar: "XR__sceneBar___2ShrP",
            sceneName: "XR__sceneName___1ApHr",
            sceneActions: "XR__sceneActions___7plGs",
            actionButton: "XR__actionButton___2poIM",
            tooltip: "XR__tooltip___UYyhn",
            actionIcon: "XR__actionIcon___2qnd2",
            autoShowTooltip: "XR__autoShowTooltip___V1QH7",
          };
        },
      ]);
    },
    wU8J: function (e, t) {
      function n() {
        (this.buffer = new Array()), (this.length = 0);
      }
      (n.prototype = {
        get: function (e) {
          var t = Math.floor(e / 8);
          return 1 == ((this.buffer[t] >>> (7 - (e % 8))) & 1);
        },
        put: function (e, t) {
          for (var n = 0; n < t; n++)
            this.putBit(1 == ((e >>> (t - n - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          var t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = n);
    },
  },
  [[0, 1, 2, 5, 3, 10, 0, 4, 6, 9]],
]);
