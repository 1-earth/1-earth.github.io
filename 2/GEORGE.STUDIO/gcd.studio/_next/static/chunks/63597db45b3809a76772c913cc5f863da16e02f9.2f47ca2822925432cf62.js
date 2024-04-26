(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [11],
  {
    "/6c9": function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        o = n("tbWI"),
        a = n("mzdp");
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if (
              "undefined" === typeof Symbol ||
              !(Symbol.iterator in Object(e))
            )
              return;
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (l) {
              (i = !0), (o = l);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return p(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return p(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var i = b(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return m(this, n);
        };
      }
      function m(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? g(e) : t;
      }
      function g(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function v(e, t, n) {
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
      var w = "YT",
        _ = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,
        P = /user\/([a-zA-Z0-9_-]+)\/?/,
        k = /youtube-nocookie\.com/,
        O = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && h(e, t);
          })(l, e);
          var t,
            n,
            r,
            s = y(l);
          function l() {
            var e;
            f(this, l);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              v(
                g((e = s.call.apply(s, [this].concat(n)))),
                "callPlayer",
                o.callPlayer
              ),
              v(g(e), "parsePlaylist", function (t) {
                return t instanceof Array
                  ? { listType: "playlist", playlist: t.map(e.getID).join(",") }
                  : _.test(t)
                  ? {
                      listType: "playlist",
                      list: u(t.match(_), 2)[1].replace(/^UC/, "UU"),
                    }
                  : P.test(t)
                  ? { listType: "user_uploads", list: u(t.match(P), 2)[1] }
                  : {};
              }),
              v(g(e), "onStateChange", function (t) {
                var n = t.data,
                  r = e.props,
                  i = r.onPlay,
                  o = r.onPause,
                  a = r.onBuffer,
                  s = r.onBufferEnd,
                  l = r.onEnded,
                  c = r.onReady,
                  u = r.loop,
                  p = r.config,
                  f = p.playerVars,
                  d = p.onUnstarted,
                  h = window.YT.PlayerState,
                  y = h.UNSTARTED,
                  m = h.PLAYING,
                  g = h.PAUSED,
                  b = h.BUFFERING,
                  v = h.ENDED,
                  w = h.CUED;
                if (
                  (n === y && d(),
                  n === m && (i(), s()),
                  n === g && o(),
                  n === b && a(),
                  n === v)
                ) {
                  var _ = !!e.callPlayer("getPlaylist");
                  u && !_ && (f.start ? e.seekTo(f.start) : e.play()), l();
                }
                n === w && c();
              }),
              v(g(e), "mute", function () {
                e.callPlayer("mute");
              }),
              v(g(e), "unmute", function () {
                e.callPlayer("unMute");
              }),
              v(g(e), "ref", function (t) {
                e.container = t;
              }),
              e
            );
          }
          return (
            (t = l),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onMount && this.props.onMount(this);
                },
              },
              {
                key: "getID",
                value: function (e) {
                  return !e || e instanceof Array || _.test(e)
                    ? null
                    : e.match(a.MATCH_URL_YOUTUBE)[1];
                },
              },
              {
                key: "load",
                value: function (e, t) {
                  var n = this,
                    r = this.props,
                    i = r.playing,
                    a = r.muted,
                    s = r.playsinline,
                    l = r.controls,
                    u = r.loop,
                    p = r.config,
                    f = r.onError,
                    d = p.playerVars,
                    h = p.embedOptions,
                    y = this.getID(e);
                  if (t)
                    return _.test(e) || P.test(e) || e instanceof Array
                      ? void this.player.loadPlaylist(this.parsePlaylist(e))
                      : void this.player.cueVideoById({
                          videoId: y,
                          startSeconds: (0, o.parseStartTime)(e) || d.start,
                          endSeconds: (0, o.parseEndTime)(e) || d.end,
                        });
                  (0, o.getSDK)(
                    "https://www.youtube.com/iframe_api",
                    w,
                    "onYouTubeIframeAPIReady",
                    function (e) {
                      return e.loaded;
                    }
                  ).then(function (t) {
                    n.container &&
                      (n.player = new t.Player(
                        n.container,
                        c(
                          {
                            width: "100%",
                            height: "100%",
                            videoId: y,
                            playerVars: c(
                              c(
                                {
                                  autoplay: i ? 1 : 0,
                                  mute: a ? 1 : 0,
                                  controls: l ? 1 : 0,
                                  start: (0, o.parseStartTime)(e),
                                  end: (0, o.parseEndTime)(e),
                                  origin: window.location.origin,
                                  playsinline: s ? 1 : 0,
                                },
                                n.parsePlaylist(e)
                              ),
                              d
                            ),
                            events: {
                              onReady: function () {
                                u && n.player.setLoop(!0), n.props.onReady();
                              },
                              onStateChange: n.onStateChange,
                              onError: function (e) {
                                return f(e.data);
                              },
                            },
                            host: k.test(e)
                              ? "https://www.youtube-nocookie.com"
                              : void 0,
                          },
                          h
                        )
                      ));
                  }, f),
                    h.events &&
                      console.warn(
                        "Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause"
                      );
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("playVideo");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pauseVideo");
                },
              },
              {
                key: "stop",
                value: function () {
                  document.body.contains(this.callPlayer("getIframe")) &&
                    this.callPlayer("stopVideo");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seekTo", e),
                    this.props.playing || this.pause();
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", 100 * e);
                },
              },
              {
                key: "setPlaybackRate",
                value: function (e) {
                  this.callPlayer("setPlaybackRate", e);
                },
              },
              {
                key: "setLoop",
                value: function (e) {
                  this.callPlayer("setLoop", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("getDuration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("getCurrentTime");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return (
                    this.callPlayer("getVideoLoadedFraction") *
                    this.getDuration()
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = {
                    width: "100%",
                    height: "100%",
                    display: this.props.display,
                  };
                  return i.default.createElement(
                    "div",
                    { style: e },
                    i.default.createElement("div", { ref: this.ref })
                  );
                },
              },
            ]) && d(t.prototype, n),
            r && d(t, r),
            l
          );
        })(i.Component);
      (t.default = O),
        v(O, "displayName", "YouTube"),
        v(O, "canPlay", a.canPlay.youtube);
    },
    "/Drs": function (e, t, n) {},
    "0vCa": function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        o = n("i8i4"),
        a = l(n("vX6Q")),
        s = l(n("17x9"));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var i = h(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var y = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        m = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(c, e);
          var t,
            r,
            s,
            l = f(c);
          function c(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              ((t = l.call(this, e)).state = {
                flickityReady: !1,
                flickityCreated: !1,
                cellCount: 0,
              }),
              (t.carousel = null),
              (t.flkty = null),
              t
            );
          }
          return (
            (t = c),
            (s = [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  var n = i.default.Children.count(e.children);
                  return n !== t.cellCount
                    ? { flickityReady: !1, cellCount: n }
                    : null;
                },
              },
            ]),
            (r = [
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var n = this,
                    r = this.props,
                    i = r.children,
                    o = r.options,
                    s = o.draggable,
                    l = o.initialIndex,
                    c = r.reloadOnUpdate,
                    u = r.disableImagesLoaded,
                    p = this.state.flickityReady;
                  if (c || (!t.flickityReady && p)) {
                    var f = this.flkty.isActive;
                    this.flkty.deactivate(),
                      (this.flkty.selectedIndex = l || 0),
                      (this.flkty.options.draggable =
                        void 0 === s ? !!i && i.length > 1 : s),
                      f && this.flkty.activate(),
                      !u &&
                        this.carousel &&
                        (0, a.default)(this.carousel, function () {
                          n.flkty.reloadCells();
                        });
                  } else this.flkty.reloadCells();
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  if (!y) return null;
                  var e = n("IXsZ"),
                    t = this.props,
                    r = t.flickityRef,
                    i = t.options;
                  (this.flkty = new e(this.carousel, i)),
                    r && r(this.flkty),
                    this.props.static
                      ? this.setReady()
                      : this.setState({ flickityCreated: !0 });
                },
              },
              {
                key: "setReady",
                value: function () {
                  var e = this;
                  if (!this.state.flickityReady) {
                    var t = function () {
                      return e.setState({ flickityReady: !0 });
                    };
                    this.props.disableImagesLoaded
                      ? t()
                      : (0, a.default)(this.carousel, t);
                  }
                },
              },
              {
                key: "renderPortal",
                value: function () {
                  var e = this;
                  if (!this.carousel) return null;
                  var t = this.carousel.querySelector(".flickity-slider");
                  if (t) {
                    var n = (0, o.createPortal)(this.props.children, t);
                    return (
                      setTimeout(function () {
                        return e.setReady();
                      }, 0),
                      n
                    );
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return i.default.createElement(
                    this.props.elementType,
                    {
                      className: this.props.className,
                      ref: function (t) {
                        e.carousel = t;
                      },
                    },
                    this.props.static
                      ? this.props.children
                      : this.renderPortal()
                  );
                },
              },
            ]) && u(t.prototype, r),
            s && u(t, s),
            c
          );
        })(i.Component);
      (m.propTypes = {
        children: s.default.array,
        className: s.default.string,
        disableImagesLoaded: s.default.bool,
        elementType: s.default.string,
        flickityRef: s.default.func,
        options: s.default.object,
        reloadOnUpdate: s.default.bool,
        static: s.default.bool,
      }),
        (m.defaultProps = {
          className: "",
          disableImagesLoaded: !1,
          elementType: "div",
          options: {},
          reloadOnUpdate: !1,
          static: !1,
        });
      var g = m;
      (t.default = g), (e.exports = t.default);
    },
    "4PUS": function (e, t, n) {
      var r, i;
      !(function (o, a) {
        (r = [n("CUlp")]),
          void 0 ===
            (i = function (e) {
              return (function (e, t) {
                "use strict";
                function n() {}
                function r() {}
                var i = (r.prototype = Object.create(t.prototype));
                (i.bindStartEvent = function (e) {
                  this._bindStartEvent(e, !0);
                }),
                  (i.unbindStartEvent = function (e) {
                    this._bindStartEvent(e, !1);
                  }),
                  (i._bindStartEvent = function (t, n) {
                    var r = (n = void 0 === n || n)
                        ? "addEventListener"
                        : "removeEventListener",
                      i = "mousedown";
                    e.PointerEvent
                      ? (i = "pointerdown")
                      : "ontouchstart" in e && (i = "touchstart"),
                      t[r](i, this);
                  }),
                  (i.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                  }),
                  (i.getTouch = function (e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      if (n.identifier == this.pointerIdentifier) return n;
                    }
                  }),
                  (i.onmousedown = function (e) {
                    var t = e.button;
                    (t && 0 !== t && 1 !== t) || this._pointerDown(e, e);
                  }),
                  (i.ontouchstart = function (e) {
                    this._pointerDown(e, e.changedTouches[0]);
                  }),
                  (i.onpointerdown = function (e) {
                    this._pointerDown(e, e);
                  }),
                  (i._pointerDown = function (e, t) {
                    e.button ||
                      this.isPointerDown ||
                      ((this.isPointerDown = !0),
                      (this.pointerIdentifier =
                        void 0 !== t.pointerId ? t.pointerId : t.identifier),
                      this.pointerDown(e, t));
                  }),
                  (i.pointerDown = function (e, t) {
                    this._bindPostStartEvents(e),
                      this.emitEvent("pointerDown", [e, t]);
                  });
                var o = {
                  mousedown: ["mousemove", "mouseup"],
                  touchstart: ["touchmove", "touchend", "touchcancel"],
                  pointerdown: ["pointermove", "pointerup", "pointercancel"],
                };
                return (
                  (i._bindPostStartEvents = function (t) {
                    if (t) {
                      var n = o[t.type];
                      n.forEach(function (t) {
                        e.addEventListener(t, this);
                      }, this),
                        (this._boundPointerEvents = n);
                    }
                  }),
                  (i._unbindPostStartEvents = function () {
                    this._boundPointerEvents &&
                      (this._boundPointerEvents.forEach(function (t) {
                        e.removeEventListener(t, this);
                      }, this),
                      delete this._boundPointerEvents);
                  }),
                  (i.onmousemove = function (e) {
                    this._pointerMove(e, e);
                  }),
                  (i.onpointermove = function (e) {
                    e.pointerId == this.pointerIdentifier &&
                      this._pointerMove(e, e);
                  }),
                  (i.ontouchmove = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerMove(e, t);
                  }),
                  (i._pointerMove = function (e, t) {
                    this.pointerMove(e, t);
                  }),
                  (i.pointerMove = function (e, t) {
                    this.emitEvent("pointerMove", [e, t]);
                  }),
                  (i.onmouseup = function (e) {
                    this._pointerUp(e, e);
                  }),
                  (i.onpointerup = function (e) {
                    e.pointerId == this.pointerIdentifier &&
                      this._pointerUp(e, e);
                  }),
                  (i.ontouchend = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerUp(e, t);
                  }),
                  (i._pointerUp = function (e, t) {
                    this._pointerDone(), this.pointerUp(e, t);
                  }),
                  (i.pointerUp = function (e, t) {
                    this.emitEvent("pointerUp", [e, t]);
                  }),
                  (i._pointerDone = function () {
                    this._pointerReset(),
                      this._unbindPostStartEvents(),
                      this.pointerDone();
                  }),
                  (i._pointerReset = function () {
                    (this.isPointerDown = !1), delete this.pointerIdentifier;
                  }),
                  (i.pointerDone = n),
                  (i.onpointercancel = function (e) {
                    e.pointerId == this.pointerIdentifier &&
                      this._pointerCancel(e, e);
                  }),
                  (i.ontouchcancel = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerCancel(e, t);
                  }),
                  (i._pointerCancel = function (e, t) {
                    this._pointerDone(), this.pointerCancel(e, t);
                  }),
                  (i.pointerCancel = function (e, t) {
                    this.emitEvent("pointerCancel", [e, t]);
                  }),
                  (r.getPointerPoint = function (e) {
                    return { x: e.pageX, y: e.pageY };
                  }),
                  r
                );
              })(o, e);
            }.apply(t, r)) || (e.exports = i);
      })(window);
    },
    "5Cgt": function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        o = n("tbWI"),
        a = n("mzdp");
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = m(e);
          if (t) {
            var i = m(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return h(this, n);
        };
      }
      function h(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? y(e) : t;
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t, n) {
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
      var b = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && f(e, t);
        })(l, e);
        var t,
          n,
          r,
          s = d(l);
        function l() {
          var e;
          u(this, l);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            g(
              y((e = s.call.apply(s, [this].concat(n)))),
              "callPlayer",
              o.callPlayer
            ),
            g(y(e), "duration", null),
            g(y(e), "currentTime", null),
            g(y(e), "secondsLoaded", null),
            g(y(e), "mute", function () {}),
            g(y(e), "unmute", function () {}),
            g(y(e), "ref", function (t) {
              e.iframe = t;
            }),
            e
          );
        }
        return (
          (t = l),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this;
                (0, o.getSDK)(
                  "https://widget.mixcloud.com/media/js/widgetApi.js",
                  "Mixcloud"
                ).then(function (e) {
                  (t.player = e.PlayerWidget(t.iframe)),
                    t.player.ready.then(function () {
                      t.player.events.play.on(t.props.onPlay),
                        t.player.events.pause.on(t.props.onPause),
                        t.player.events.ended.on(t.props.onEnded),
                        t.player.events.error.on(t.props.error),
                        t.player.events.progress.on(function (e, n) {
                          (t.currentTime = e), (t.duration = n);
                        }),
                        t.props.onReady();
                    });
                }, this.props.onError);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seek", e);
              },
            },
            { key: "setVolume", value: function (e) {} },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.url,
                  n = e.config,
                  r = t.match(a.MATCH_URL_MIXCLOUD)[1],
                  s = (0, o.queryString)(
                    c(c({}, n.options), {}, { feed: "/".concat(r, "/") })
                  );
                return i.default.createElement("iframe", {
                  key: r,
                  ref: this.ref,
                  style: { width: "100%", height: "100%" },
                  src: "https://www.mixcloud.com/widget/iframe/?".concat(s),
                  frameBorder: "0",
                });
              },
            },
          ]) && p(t.prototype, n),
          r && p(t, r),
          l
        );
      })(i.Component);
      (t.default = b),
        g(b, "displayName", "Mixcloud"),
        g(b, "canPlay", a.canPlay.mixcloud),
        g(b, "loopOnEnded", !0);
    },
    "6tYh": function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createReactPlayer = void 0);
        var r = x(n("q1tI")),
          i = u(n("BwF7")),
          o = u(n("Wwog")),
          a = u(n("OL05")),
          s = n("QXAm"),
          l = n("tbWI"),
          c = u(n("q+qS"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function p(e) {
          return (p =
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
        function f(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function d(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? f(Object(n), !0).forEach(function (t) {
                  O(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function h() {
          return (h =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        function y(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return m(e);
            })(e) ||
            (function (e) {
              if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return m(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return m(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function m(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function g(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function b(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function v(e, t) {
          return (v =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function w(e) {
          var t = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = k(e);
            if (t) {
              var i = k(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return _(this, n);
          };
        }
        function _(e, t) {
          return !t || ("object" !== p(t) && "function" !== typeof t)
            ? P(e)
            : t;
        }
        function P(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function k(e) {
          return (k = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function O(e, t, n) {
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
        function j() {
          if ("function" !== typeof WeakMap) return null;
          var e = new WeakMap();
          return (
            (j = function () {
              return e;
            }),
            e
          );
        }
        function x(e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== p(e) && "function" !== typeof e))
            return { default: e };
          var t = j();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, i, o)
                : (n[i] = e[i]);
            }
          return (n.default = e), t && t.set(e, n), n;
        }
        var S = (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return x(n("fflM"));
            });
          }),
          E = "undefined" !== typeof window && window.document,
          C = "undefined" !== typeof e && e.window && e.window.document,
          D = Object.keys(s.propTypes),
          M =
            E || C
              ? r.Suspense
              : function () {
                  return null;
                },
          A = [];
        t.createReactPlayer = function (e, t) {
          var n, u;
          return (
            (u = n =
              (function (n) {
                !(function (e, t) {
                  if ("function" !== typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && v(e, t);
                })(_, n);
                var u,
                  p,
                  f,
                  m = w(_);
                function _() {
                  var n;
                  g(this, _);
                  for (
                    var a = arguments.length, u = new Array(a), p = 0;
                    p < a;
                    p++
                  )
                    u[p] = arguments[p];
                  return (
                    O(P((n = m.call.apply(m, [this].concat(u)))), "state", {
                      showPreview: !!n.props.light,
                    }),
                    O(P(n), "references", {
                      wrapper: function (e) {
                        n.wrapper = e;
                      },
                      player: function (e) {
                        n.player = e;
                      },
                    }),
                    O(P(n), "handleClickPreview", function (e) {
                      n.setState({ showPreview: !1 }),
                        n.props.onClickPreview(e);
                    }),
                    O(P(n), "showPreview", function () {
                      n.setState({ showPreview: !0 });
                    }),
                    O(P(n), "getDuration", function () {
                      return n.player ? n.player.getDuration() : null;
                    }),
                    O(P(n), "getCurrentTime", function () {
                      return n.player ? n.player.getCurrentTime() : null;
                    }),
                    O(P(n), "getSecondsLoaded", function () {
                      return n.player ? n.player.getSecondsLoaded() : null;
                    }),
                    O(P(n), "getInternalPlayer", function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "player";
                      return n.player ? n.player.getInternalPlayer(e) : null;
                    }),
                    O(P(n), "seekTo", function (e, t) {
                      if (!n.player) return null;
                      n.player.seekTo(e, t);
                    }),
                    O(P(n), "handleReady", function () {
                      n.props.onReady(P(n));
                    }),
                    O(
                      P(n),
                      "getActivePlayer",
                      (0, o.default)(function (n) {
                        for (
                          var r = 0, i = [].concat(A, y(e));
                          r < i.length;
                          r++
                        ) {
                          var o = i[r];
                          if (o.canPlay(n)) return o;
                        }
                        return t || null;
                      })
                    ),
                    O(
                      P(n),
                      "getConfig",
                      (0, o.default)(function (e, t) {
                        var r = n.props.config;
                        return i.default.all([
                          s.defaultProps.config,
                          s.defaultProps.config[t] || {},
                          r,
                          r[t] || {},
                        ]);
                      })
                    ),
                    O(
                      P(n),
                      "getAttributes",
                      (0, o.default)(function (e) {
                        return (0, l.omit)(n.props, D);
                      })
                    ),
                    O(P(n), "renderActivePlayer", function (e) {
                      if (!e) return null;
                      var t = n.getActivePlayer(e);
                      if (!t) return null;
                      var i = n.getConfig(e, t.key);
                      return r.default.createElement(
                        c.default,
                        h({}, n.props, {
                          key: t.key,
                          ref: n.references.player,
                          config: i,
                          activePlayer: t.lazyPlayer || t,
                          onReady: n.handleReady,
                        })
                      );
                    }),
                    n
                  );
                }
                return (
                  (u = _),
                  (p = [
                    {
                      key: "shouldComponentUpdate",
                      value: function (e, t) {
                        return (
                          !(0, a.default)(this.props, e) ||
                          !(0, a.default)(this.state, t)
                        );
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function (e) {
                        var t = this.props.light;
                        !e.light && t && this.setState({ showPreview: !0 }),
                          e.light && !t && this.setState({ showPreview: !1 });
                      },
                    },
                    {
                      key: "renderPreview",
                      value: function (e) {
                        if (!e) return null;
                        var t = this.props,
                          n = t.light,
                          i = t.playIcon,
                          o = t.previewTabIndex;
                        return r.default.createElement(S, {
                          url: e,
                          light: n,
                          playIcon: i,
                          previewTabIndex: o,
                          onClick: this.handleClickPreview,
                        });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this.props,
                          t = e.url,
                          n = e.style,
                          i = e.width,
                          o = e.height,
                          a = e.fallback,
                          s = e.wrapper,
                          l = this.state.showPreview,
                          c = this.getAttributes(t);
                        return r.default.createElement(
                          s,
                          h(
                            {
                              ref: this.references.wrapper,
                              style: d(d({}, n), {}, { width: i, height: o }),
                            },
                            c
                          ),
                          r.default.createElement(
                            M,
                            { fallback: a },
                            l
                              ? this.renderPreview(t)
                              : this.renderActivePlayer(t)
                          )
                        );
                      },
                    },
                  ]) && b(u.prototype, p),
                  f && b(u, f),
                  _
                );
              })(r.Component)),
            O(n, "displayName", "ReactPlayer"),
            O(n, "propTypes", s.propTypes),
            O(n, "defaultProps", s.defaultProps),
            O(n, "addCustomPlayer", function (e) {
              A.push(e);
            }),
            O(n, "removeCustomPlayers", function () {
              A.length = 0;
            }),
            O(n, "canPlay", function (t) {
              for (var n = 0, r = [].concat(A, y(e)); n < r.length; n++) {
                if (r[n].canPlay(t)) return !0;
              }
              return !1;
            }),
            O(n, "canEnablePIP", function (t) {
              for (var n = 0, r = [].concat(A, y(e)); n < r.length; n++) {
                var i = r[n];
                if (i.canEnablePIP && i.canEnablePIP(t)) return !0;
              }
              return !1;
            }),
            u
          );
        };
      }).call(this, n("ntbh"));
    },
    "72Lm": function (e, t, n) {
      var r, i;
      !(function (o, a) {
        (r = [n("4PUS")]),
          void 0 ===
            (i = function (e) {
              return (function (e, t) {
                "use strict";
                function n() {}
                var r = (n.prototype = Object.create(t.prototype));
                (r.bindHandles = function () {
                  this._bindHandles(!0);
                }),
                  (r.unbindHandles = function () {
                    this._bindHandles(!1);
                  }),
                  (r._bindHandles = function (t) {
                    for (
                      var n = (t = void 0 === t || t)
                          ? "addEventListener"
                          : "removeEventListener",
                        r = t ? this._touchActionValue : "",
                        i = 0;
                      i < this.handles.length;
                      i++
                    ) {
                      var o = this.handles[i];
                      this._bindStartEvent(o, t),
                        o[n]("click", this),
                        e.PointerEvent && (o.style.touchAction = r);
                    }
                  }),
                  (r._touchActionValue = "none"),
                  (r.pointerDown = function (e, t) {
                    this.okayPointerDown(e) &&
                      ((this.pointerDownPointer = {
                        pageX: t.pageX,
                        pageY: t.pageY,
                      }),
                      e.preventDefault(),
                      this.pointerDownBlur(),
                      this._bindPostStartEvents(e),
                      this.emitEvent("pointerDown", [e, t]));
                  });
                var i = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
                  o = {
                    radio: !0,
                    checkbox: !0,
                    button: !0,
                    submit: !0,
                    image: !0,
                    file: !0,
                  };
                return (
                  (r.okayPointerDown = function (e) {
                    var t = i[e.target.nodeName],
                      n = o[e.target.type],
                      r = !t || n;
                    return r || this._pointerReset(), r;
                  }),
                  (r.pointerDownBlur = function () {
                    var e = document.activeElement;
                    e && e.blur && e != document.body && e.blur();
                  }),
                  (r.pointerMove = function (e, t) {
                    var n = this._dragPointerMove(e, t);
                    this.emitEvent("pointerMove", [e, t, n]),
                      this._dragMove(e, t, n);
                  }),
                  (r._dragPointerMove = function (e, t) {
                    var n = {
                      x: t.pageX - this.pointerDownPointer.pageX,
                      y: t.pageY - this.pointerDownPointer.pageY,
                    };
                    return (
                      !this.isDragging &&
                        this.hasDragStarted(n) &&
                        this._dragStart(e, t),
                      n
                    );
                  }),
                  (r.hasDragStarted = function (e) {
                    return Math.abs(e.x) > 3 || Math.abs(e.y) > 3;
                  }),
                  (r.pointerUp = function (e, t) {
                    this.emitEvent("pointerUp", [e, t]),
                      this._dragPointerUp(e, t);
                  }),
                  (r._dragPointerUp = function (e, t) {
                    this.isDragging
                      ? this._dragEnd(e, t)
                      : this._staticClick(e, t);
                  }),
                  (r._dragStart = function (e, t) {
                    (this.isDragging = !0),
                      (this.isPreventingClicks = !0),
                      this.dragStart(e, t);
                  }),
                  (r.dragStart = function (e, t) {
                    this.emitEvent("dragStart", [e, t]);
                  }),
                  (r._dragMove = function (e, t, n) {
                    this.isDragging && this.dragMove(e, t, n);
                  }),
                  (r.dragMove = function (e, t, n) {
                    e.preventDefault(), this.emitEvent("dragMove", [e, t, n]);
                  }),
                  (r._dragEnd = function (e, t) {
                    (this.isDragging = !1),
                      setTimeout(
                        function () {
                          delete this.isPreventingClicks;
                        }.bind(this)
                      ),
                      this.dragEnd(e, t);
                  }),
                  (r.dragEnd = function (e, t) {
                    this.emitEvent("dragEnd", [e, t]);
                  }),
                  (r.onclick = function (e) {
                    this.isPreventingClicks && e.preventDefault();
                  }),
                  (r._staticClick = function (e, t) {
                    (this.isIgnoringMouseUp && "mouseup" == e.type) ||
                      (this.staticClick(e, t),
                      "mouseup" != e.type &&
                        ((this.isIgnoringMouseUp = !0),
                        setTimeout(
                          function () {
                            delete this.isIgnoringMouseUp;
                          }.bind(this),
                          400
                        )));
                  }),
                  (r.staticClick = function (e, t) {
                    this.emitEvent("staticClick", [e, t]);
                  }),
                  (n.getPointerPoint = t.getPointerPoint),
                  n
                );
              })(o, e);
            }.apply(t, r)) || (e.exports = i);
      })(window);
    },
    "7l9Y": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        i = (r = n("zuFh")) && r.__esModule ? r : { default: r },
        o = n("6tYh");
      var a = i.default[i.default.length - 1],
        s = (0, o.createReactPlayer)(i.default, a);
      t.default = s;
    },
    AVCV: function (e, t, n) {
      var r, i;
      window,
        (r = [n("YVj6")]),
        void 0 ===
          (i = function (e) {
            return (function (e, t) {
              "use strict";
              var n = {
                startAnimation: function () {
                  this.isAnimating ||
                    ((this.isAnimating = !0),
                    (this.restingFrames = 0),
                    this.animate());
                },
                animate: function () {
                  this.applyDragForce(), this.applySelectedAttraction();
                  var e = this.x;
                  if (
                    (this.integratePhysics(),
                    this.positionSlider(),
                    this.settle(e),
                    this.isAnimating)
                  ) {
                    var t = this;
                    requestAnimationFrame(function () {
                      t.animate();
                    });
                  }
                },
                positionSlider: function () {
                  var e = this.x;
                  this.options.wrapAround &&
                    this.cells.length > 1 &&
                    ((e = t.modulo(e, this.slideableWidth)),
                    (e -= this.slideableWidth),
                    this.shiftWrapCells(e)),
                    this.setTranslateX(e, this.isAnimating),
                    this.dispatchScrollEvent();
                },
                setTranslateX: function (e, t) {
                  (e += this.cursorPosition),
                    (e = this.options.rightToLeft ? -e : e);
                  var n = this.getPositionValue(e);
                  this.slider.style.transform = t
                    ? "translate3d(" + n + ",0,0)"
                    : "translateX(" + n + ")";
                },
                dispatchScrollEvent: function () {
                  var e = this.slides[0];
                  if (e) {
                    var t = -this.x - e.target,
                      n = t / this.slidesWidth;
                    this.dispatchEvent("scroll", null, [n, t]);
                  }
                },
                positionSliderAtSelected: function () {
                  this.cells.length &&
                    ((this.x = -this.selectedSlide.target),
                    (this.velocity = 0),
                    this.positionSlider());
                },
                getPositionValue: function (e) {
                  return this.options.percentPosition
                    ? 0.01 * Math.round((e / this.size.innerWidth) * 1e4) + "%"
                    : Math.round(e) + "px";
                },
                settle: function (e) {
                  !this.isPointerDown &&
                    Math.round(100 * this.x) == Math.round(100 * e) &&
                    this.restingFrames++,
                    this.restingFrames > 2 &&
                      ((this.isAnimating = !1),
                      delete this.isFreeScrolling,
                      this.positionSlider(),
                      this.dispatchEvent("settle", null, [this.selectedIndex]));
                },
                shiftWrapCells: function (e) {
                  var t = this.cursorPosition + e;
                  this._shiftCells(this.beforeShiftCells, t, -1);
                  var n =
                    this.size.innerWidth -
                    (e + this.slideableWidth + this.cursorPosition);
                  this._shiftCells(this.afterShiftCells, n, 1);
                },
                _shiftCells: function (e, t, n) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r],
                      o = t > 0 ? n : 0;
                    i.wrapShift(o), (t -= i.size.outerWidth);
                  }
                },
                _unshiftCells: function (e) {
                  if (e && e.length)
                    for (var t = 0; t < e.length; t++) e[t].wrapShift(0);
                },
                integratePhysics: function () {
                  (this.x += this.velocity),
                    (this.velocity *= this.getFrictionFactor());
                },
                applyForce: function (e) {
                  this.velocity += e;
                },
                getFrictionFactor: function () {
                  return (
                    1 -
                    this.options[
                      this.isFreeScrolling ? "freeScrollFriction" : "friction"
                    ]
                  );
                },
                getRestingPosition: function () {
                  return (
                    this.x + this.velocity / (1 - this.getFrictionFactor())
                  );
                },
                applyDragForce: function () {
                  if (this.isDraggable && this.isPointerDown) {
                    var e = this.dragX - this.x - this.velocity;
                    this.applyForce(e);
                  }
                },
                applySelectedAttraction: function () {
                  if (
                    (!this.isDraggable || !this.isPointerDown) &&
                    !this.isFreeScrolling &&
                    this.slides.length
                  ) {
                    var e =
                      (-1 * this.selectedSlide.target - this.x) *
                      this.options.selectedAttraction;
                    this.applyForce(e);
                  }
                },
              };
              return n;
            })(0, e);
          }.apply(t, r)) || (e.exports = i);
    },
    BgVF: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        o = n("tbWI"),
        a = n("mzdp");
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function p(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var i = h(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return f(this, n);
        };
      }
      function f(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? d(e) : t;
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t, n) {
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
      var m = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && u(e, t);
        })(s, e);
        var t,
          n,
          r,
          a = p(s);
        function s() {
          var e;
          l(this, s);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            y(
              d((e = a.call.apply(a, [this].concat(n)))),
              "callPlayer",
              o.callPlayer
            ),
            y(d(e), "duration", null),
            y(d(e), "currentTime", null),
            y(d(e), "secondsLoaded", null),
            y(d(e), "mute", function () {
              e.callPlayer("mute");
            }),
            y(d(e), "unmute", function () {
              e.callPlayer("unmute");
            }),
            y(d(e), "ref", function (t) {
              e.iframe = t;
            }),
            e
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this;
                (0, o.getSDK)(
                  "https://cdn.embed.ly/player-0.1.0.min.js",
                  "playerjs"
                ).then(function (e) {
                  t.iframe &&
                    ((t.player = new e.Player(t.iframe)),
                    t.player.on("ready", function () {
                      (t.player.isReady = !0),
                        t.player.on("play", t.props.onPlay),
                        t.player.on("pause", t.props.onPause),
                        t.player.on("seeked", t.props.onSeek),
                        t.player.on("ended", t.props.onEnded),
                        t.player.on("error", t.props.onError),
                        t.player.on("timeupdate", function (e) {
                          var n = e.duration,
                            r = e.seconds;
                          (t.duration = n), (t.currentTime = r);
                        }),
                        t.player.on("buffered", function (e) {
                          var n = e.percent;
                          t.duration && (t.secondsLoaded = t.duration * n);
                        }),
                        t.player.setLoop(t.props.loop),
                        t.props.muted && t.player.mute(),
                        setTimeout(function () {
                          t.props.onReady();
                        });
                    }));
                }, this.props.onError);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("setCurrentTime", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "setLoop",
              value: function (e) {
                this.callPlayer("setLoop", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.secondsLoaded;
              },
            },
            {
              key: "render",
              value: function () {
                return i.default.createElement("iframe", {
                  ref: this.ref,
                  src: this.props.url,
                  frameBorder: "0",
                  scrolling: "no",
                  style: { width: "100%", height: "100%" },
                  allowFullScreen: !0,
                  allow: "encrypted-media",
                  referrerPolicy: "no-referrer-when-downgrade",
                });
              },
            },
          ]) && c(t.prototype, n),
          r && c(t, r),
          s
        );
      })(i.Component);
      (t.default = m),
        y(m, "displayName", "Kaltura"),
        y(m, "canPlay", a.canPlay.kaltura);
    },
    Bij1: function (e, t, n) {
      var r, i;
      window,
        (r = [n("E4Uq"), n("4PUS"), n("YVj6")]),
        void 0 ===
          (i = function (e, t, n) {
            return (function (e, t, n, r) {
              "use strict";
              function i(e) {
                (this.parent = e), this._create();
              }
              (i.prototype = Object.create(n.prototype)),
                (i.prototype._create = function () {
                  (this.holder = document.createElement("ol")),
                    (this.holder.className = "flickity-page-dots"),
                    (this.dots = []),
                    (this.handleClick = this.onClick.bind(this)),
                    this.on(
                      "pointerDown",
                      this.parent.childUIPointerDown.bind(this.parent)
                    );
                }),
                (i.prototype.activate = function () {
                  this.setDots(),
                    this.holder.addEventListener("click", this.handleClick),
                    this.bindStartEvent(this.holder),
                    this.parent.element.appendChild(this.holder);
                }),
                (i.prototype.deactivate = function () {
                  this.holder.removeEventListener("click", this.handleClick),
                    this.unbindStartEvent(this.holder),
                    this.parent.element.removeChild(this.holder);
                }),
                (i.prototype.setDots = function () {
                  var e = this.parent.slides.length - this.dots.length;
                  e > 0 ? this.addDots(e) : e < 0 && this.removeDots(-e);
                }),
                (i.prototype.addDots = function (e) {
                  for (
                    var t = document.createDocumentFragment(),
                      n = [],
                      r = this.dots.length,
                      i = r + e,
                      o = r;
                    o < i;
                    o++
                  ) {
                    var a = document.createElement("li");
                    (a.className = "dot"),
                      a.setAttribute("aria-label", "Page dot " + (o + 1)),
                      t.appendChild(a),
                      n.push(a);
                  }
                  this.holder.appendChild(t), (this.dots = this.dots.concat(n));
                }),
                (i.prototype.removeDots = function (e) {
                  this.dots
                    .splice(this.dots.length - e, e)
                    .forEach(function (e) {
                      this.holder.removeChild(e);
                    }, this);
                }),
                (i.prototype.updateSelected = function () {
                  this.selectedDot &&
                    ((this.selectedDot.className = "dot"),
                    this.selectedDot.removeAttribute("aria-current")),
                    this.dots.length &&
                      ((this.selectedDot =
                        this.dots[this.parent.selectedIndex]),
                      (this.selectedDot.className = "dot is-selected"),
                      this.selectedDot.setAttribute("aria-current", "step"));
                }),
                (i.prototype.onTap = i.prototype.onClick =
                  function (e) {
                    var t = e.target;
                    if ("LI" == t.nodeName) {
                      this.parent.uiChange();
                      var n = this.dots.indexOf(t);
                      this.parent.select(n);
                    }
                  }),
                (i.prototype.destroy = function () {
                  this.deactivate(), this.allOff();
                }),
                (t.PageDots = i),
                r.extend(t.defaults, { pageDots: !0 }),
                t.createMethods.push("_createPageDots");
              var o = t.prototype;
              return (
                (o._createPageDots = function () {
                  this.options.pageDots &&
                    ((this.pageDots = new i(this)),
                    this.on("activate", this.activatePageDots),
                    this.on("select", this.updateSelectedPageDots),
                    this.on("cellChange", this.updatePageDots),
                    this.on("resize", this.updatePageDots),
                    this.on("deactivate", this.deactivatePageDots));
                }),
                (o.activatePageDots = function () {
                  this.pageDots.activate();
                }),
                (o.updateSelectedPageDots = function () {
                  this.pageDots.updateSelected();
                }),
                (o.updatePageDots = function () {
                  this.pageDots.setDots();
                }),
                (o.deactivatePageDots = function () {
                  this.pageDots.deactivate();
                }),
                (t.PageDots = i),
                t
              );
            })(0, e, t, n);
          }.apply(t, r)) || (e.exports = i);
    },
    BwF7: function (e, t, n) {
      "use strict";
      var r = function (e) {
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
                return e.$$typeof === i;
              })(e)
            );
          })(e)
        );
      };
      var i =
        "function" === typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
      function o(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? u(((n = e), Array.isArray(n) ? [] : {}), e, t)
          : e;
        var n;
      }
      function a(e, t, n) {
        return e.concat(t).map(function (e) {
          return o(e, n);
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
      function l(e, t) {
        try {
          return t in e;
        } catch (n) {
          return !1;
        }
      }
      function c(e, t, n) {
        var r = {};
        return (
          n.isMergeableObject(e) &&
            s(e).forEach(function (t) {
              r[t] = o(e[t], n);
            }),
          s(t).forEach(function (i) {
            (function (e, t) {
              return (
                l(e, t) &&
                !(
                  Object.hasOwnProperty.call(e, t) &&
                  Object.propertyIsEnumerable.call(e, t)
                )
              );
            })(e, i) ||
              (l(e, i) && n.isMergeableObject(t[i])
                ? (r[i] = (function (e, t) {
                    if (!t.customMerge) return u;
                    var n = t.customMerge(e);
                    return "function" === typeof n ? n : u;
                  })(i, n)(e[i], t[i], n))
                : (r[i] = o(t[i], n)));
          }),
          r
        );
      }
      function u(e, t, n) {
        ((n = n || {}).arrayMerge = n.arrayMerge || a),
          (n.isMergeableObject = n.isMergeableObject || r),
          (n.cloneUnlessOtherwiseSpecified = o);
        var i = Array.isArray(t);
        return i === Array.isArray(e)
          ? i
            ? n.arrayMerge(e, t, n)
            : c(e, t, n)
          : o(t, n);
      }
      u.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, n) {
          return u(e, n, t);
        }, {});
      };
      var p = u;
      e.exports = p;
    },
    CUlp: function (e, t, n) {
      var r, i;
      "undefined" != typeof window && window,
        void 0 ===
          (i =
            "function" ===
            typeof (r = function () {
              "use strict";
              function e() {}
              var t = e.prototype;
              return (
                (t.on = function (e, t) {
                  if (e && t) {
                    var n = (this._events = this._events || {}),
                      r = (n[e] = n[e] || []);
                    return -1 == r.indexOf(t) && r.push(t), this;
                  }
                }),
                (t.once = function (e, t) {
                  if (e && t) {
                    this.on(e, t);
                    var n = (this._onceEvents = this._onceEvents || {});
                    return ((n[e] = n[e] || {})[t] = !0), this;
                  }
                }),
                (t.off = function (e, t) {
                  var n = this._events && this._events[e];
                  if (n && n.length) {
                    var r = n.indexOf(t);
                    return -1 != r && n.splice(r, 1), this;
                  }
                }),
                (t.emitEvent = function (e, t) {
                  var n = this._events && this._events[e];
                  if (n && n.length) {
                    (n = n.slice(0)), (t = t || []);
                    for (
                      var r = this._onceEvents && this._onceEvents[e], i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i];
                      r && r[o] && (this.off(e, o), delete r[o]),
                        o.apply(this, t);
                    }
                    return this;
                  }
                }),
                (t.allOff = function () {
                  delete this._events, delete this._onceEvents;
                }),
                e
              );
            })
              ? r.call(t, n, t, e)
              : r) || (e.exports = i);
    },
    E4Uq: function (e, t, n) {
      var r, i;
      !(function (o, a) {
        (r = [
          n("CUlp"),
          n("QK1G"),
          n("YVj6"),
          n("yNx1"),
          n("dlLY"),
          n("AVCV"),
        ]),
          void 0 ===
            (i = function (e, t, n, r, i, a) {
              return (function (e, t, n, r, i, o, a) {
                "use strict";
                var s = e.jQuery,
                  l = e.getComputedStyle,
                  c = e.console;
                function u(e, t) {
                  for (e = r.makeArray(e); e.length; ) t.appendChild(e.shift());
                }
                var p = 0,
                  f = {};
                function d(e, t) {
                  var n = r.getQueryElement(e);
                  if (n) {
                    if (((this.element = n), this.element.flickityGUID)) {
                      var i = f[this.element.flickityGUID];
                      return i && i.option(t), i;
                    }
                    s && (this.$element = s(this.element)),
                      (this.options = r.extend({}, this.constructor.defaults)),
                      this.option(t),
                      this._create();
                  } else c && c.error("Bad element for Flickity: " + (n || e));
                }
                (d.defaults = {
                  accessibility: !0,
                  cellAlign: "center",
                  freeScrollFriction: 0.075,
                  friction: 0.28,
                  namespaceJQueryEvents: !0,
                  percentPosition: !0,
                  resize: !0,
                  selectedAttraction: 0.025,
                  setGallerySize: !0,
                }),
                  (d.createMethods = []);
                var h = d.prototype;
                r.extend(h, t.prototype),
                  (h._create = function () {
                    var t = (this.guid = ++p);
                    for (var n in ((this.element.flickityGUID = t),
                    (f[t] = this),
                    (this.selectedIndex = 0),
                    (this.restingFrames = 0),
                    (this.x = 0),
                    (this.velocity = 0),
                    (this.originSide = this.options.rightToLeft
                      ? "right"
                      : "left"),
                    (this.viewport = document.createElement("div")),
                    (this.viewport.className = "flickity-viewport"),
                    this._createSlider(),
                    (this.options.resize || this.options.watchCSS) &&
                      e.addEventListener("resize", this),
                    this.options.on)) {
                      var r = this.options.on[n];
                      this.on(n, r);
                    }
                    d.createMethods.forEach(function (e) {
                      this[e]();
                    }, this),
                      this.options.watchCSS ? this.watchCSS() : this.activate();
                  }),
                  (h.option = function (e) {
                    r.extend(this.options, e);
                  }),
                  (h.activate = function () {
                    this.isActive ||
                      ((this.isActive = !0),
                      this.element.classList.add("flickity-enabled"),
                      this.options.rightToLeft &&
                        this.element.classList.add("flickity-rtl"),
                      this.getSize(),
                      u(
                        this._filterFindCellElements(this.element.children),
                        this.slider
                      ),
                      this.viewport.appendChild(this.slider),
                      this.element.appendChild(this.viewport),
                      this.reloadCells(),
                      this.options.accessibility &&
                        ((this.element.tabIndex = 0),
                        this.element.addEventListener("keydown", this)),
                      this.emitEvent("activate"),
                      this.selectInitialIndex(),
                      (this.isInitActivated = !0),
                      this.dispatchEvent("ready"));
                  }),
                  (h._createSlider = function () {
                    var e = document.createElement("div");
                    (e.className = "flickity-slider"),
                      (e.style[this.originSide] = 0),
                      (this.slider = e);
                  }),
                  (h._filterFindCellElements = function (e) {
                    return r.filterFindElements(e, this.options.cellSelector);
                  }),
                  (h.reloadCells = function () {
                    (this.cells = this._makeCells(this.slider.children)),
                      this.positionCells(),
                      this._getWrapShiftCells(),
                      this.setGallerySize();
                  }),
                  (h._makeCells = function (e) {
                    return this._filterFindCellElements(e).map(function (e) {
                      return new i(e, this);
                    }, this);
                  }),
                  (h.getLastCell = function () {
                    return this.cells[this.cells.length - 1];
                  }),
                  (h.getLastSlide = function () {
                    return this.slides[this.slides.length - 1];
                  }),
                  (h.positionCells = function () {
                    this._sizeCells(this.cells), this._positionCells(0);
                  }),
                  (h._positionCells = function (e) {
                    (e = e || 0),
                      (this.maxCellHeight = (e && this.maxCellHeight) || 0);
                    var t = 0;
                    if (e > 0) {
                      var n = this.cells[e - 1];
                      t = n.x + n.size.outerWidth;
                    }
                    for (var r = this.cells.length, i = e; i < r; i++) {
                      var o = this.cells[i];
                      o.setPosition(t),
                        (t += o.size.outerWidth),
                        (this.maxCellHeight = Math.max(
                          o.size.outerHeight,
                          this.maxCellHeight
                        ));
                    }
                    (this.slideableWidth = t),
                      this.updateSlides(),
                      this._containSlides(),
                      (this.slidesWidth = r
                        ? this.getLastSlide().target - this.slides[0].target
                        : 0);
                  }),
                  (h._sizeCells = function (e) {
                    e.forEach(function (e) {
                      e.getSize();
                    });
                  }),
                  (h.updateSlides = function () {
                    if (((this.slides = []), this.cells.length)) {
                      var e = new o(this);
                      this.slides.push(e);
                      var t =
                          "left" == this.originSide
                            ? "marginRight"
                            : "marginLeft",
                        n = this._getCanCellFit();
                      this.cells.forEach(function (r, i) {
                        if (e.cells.length) {
                          var a =
                            e.outerWidth -
                            e.firstMargin +
                            (r.size.outerWidth - r.size[t]);
                          n.call(this, i, a) ||
                            (e.updateTarget(),
                            (e = new o(this)),
                            this.slides.push(e)),
                            e.addCell(r);
                        } else e.addCell(r);
                      }, this),
                        e.updateTarget(),
                        this.updateSelectedSlide();
                    }
                  }),
                  (h._getCanCellFit = function () {
                    var e = this.options.groupCells;
                    if (!e)
                      return function () {
                        return !1;
                      };
                    if ("number" == typeof e) {
                      var t = parseInt(e, 10);
                      return function (e) {
                        return e % t !== 0;
                      };
                    }
                    var n = "string" == typeof e && e.match(/^(\d+)%$/),
                      r = n ? parseInt(n[1], 10) / 100 : 1;
                    return function (e, t) {
                      return t <= (this.size.innerWidth + 1) * r;
                    };
                  }),
                  (h._init = h.reposition =
                    function () {
                      this.positionCells(), this.positionSliderAtSelected();
                    }),
                  (h.getSize = function () {
                    (this.size = n(this.element)),
                      this.setCellAlign(),
                      (this.cursorPosition =
                        this.size.innerWidth * this.cellAlign);
                  });
                var y = {
                  center: { left: 0.5, right: 0.5 },
                  left: { left: 0, right: 1 },
                  right: { right: 0, left: 1 },
                };
                (h.setCellAlign = function () {
                  var e = y[this.options.cellAlign];
                  this.cellAlign = e
                    ? e[this.originSide]
                    : this.options.cellAlign;
                }),
                  (h.setGallerySize = function () {
                    if (this.options.setGallerySize) {
                      var e =
                        this.options.adaptiveHeight && this.selectedSlide
                          ? this.selectedSlide.height
                          : this.maxCellHeight;
                      this.viewport.style.height = e + "px";
                    }
                  }),
                  (h._getWrapShiftCells = function () {
                    if (this.options.wrapAround) {
                      this._unshiftCells(this.beforeShiftCells),
                        this._unshiftCells(this.afterShiftCells);
                      var e = this.cursorPosition,
                        t = this.cells.length - 1;
                      (this.beforeShiftCells = this._getGapCells(e, t, -1)),
                        (e = this.size.innerWidth - this.cursorPosition),
                        (this.afterShiftCells = this._getGapCells(e, 0, 1));
                    }
                  }),
                  (h._getGapCells = function (e, t, n) {
                    for (var r = []; e > 0; ) {
                      var i = this.cells[t];
                      if (!i) break;
                      r.push(i), (t += n), (e -= i.size.outerWidth);
                    }
                    return r;
                  }),
                  (h._containSlides = function () {
                    if (
                      this.options.contain &&
                      !this.options.wrapAround &&
                      this.cells.length
                    ) {
                      var e = this.options.rightToLeft,
                        t = e ? "marginRight" : "marginLeft",
                        n = e ? "marginLeft" : "marginRight",
                        r = this.slideableWidth - this.getLastCell().size[n],
                        i = r < this.size.innerWidth,
                        o = this.cursorPosition + this.cells[0].size[t],
                        a = r - this.size.innerWidth * (1 - this.cellAlign);
                      this.slides.forEach(function (e) {
                        i
                          ? (e.target = r * this.cellAlign)
                          : ((e.target = Math.max(e.target, o)),
                            (e.target = Math.min(e.target, a)));
                      }, this);
                    }
                  }),
                  (h.dispatchEvent = function (e, t, n) {
                    var r = t ? [t].concat(n) : n;
                    if ((this.emitEvent(e, r), s && this.$element)) {
                      var i = (e += this.options.namespaceJQueryEvents
                        ? ".flickity"
                        : "");
                      if (t) {
                        var o = new s.Event(t);
                        (o.type = e), (i = o);
                      }
                      this.$element.trigger(i, n);
                    }
                  }),
                  (h.select = function (e, t, n) {
                    if (
                      this.isActive &&
                      ((e = parseInt(e, 10)),
                      this._wrapSelect(e),
                      (this.options.wrapAround || t) &&
                        (e = r.modulo(e, this.slides.length)),
                      this.slides[e])
                    ) {
                      var i = this.selectedIndex;
                      (this.selectedIndex = e),
                        this.updateSelectedSlide(),
                        n
                          ? this.positionSliderAtSelected()
                          : this.startAnimation(),
                        this.options.adaptiveHeight && this.setGallerySize(),
                        this.dispatchEvent("select", null, [e]),
                        e != i && this.dispatchEvent("change", null, [e]),
                        this.dispatchEvent("cellSelect");
                    }
                  }),
                  (h._wrapSelect = function (e) {
                    var t = this.slides.length;
                    if (!(this.options.wrapAround && t > 1)) return e;
                    var n = r.modulo(e, t),
                      i = Math.abs(n - this.selectedIndex),
                      o = Math.abs(n + t - this.selectedIndex),
                      a = Math.abs(n - t - this.selectedIndex);
                    !this.isDragSelect && o < i
                      ? (e += t)
                      : !this.isDragSelect && a < i && (e -= t),
                      e < 0
                        ? (this.x -= this.slideableWidth)
                        : e >= t && (this.x += this.slideableWidth);
                  }),
                  (h.previous = function (e, t) {
                    this.select(this.selectedIndex - 1, e, t);
                  }),
                  (h.next = function (e, t) {
                    this.select(this.selectedIndex + 1, e, t);
                  }),
                  (h.updateSelectedSlide = function () {
                    var e = this.slides[this.selectedIndex];
                    e &&
                      (this.unselectSelectedSlide(),
                      (this.selectedSlide = e),
                      e.select(),
                      (this.selectedCells = e.cells),
                      (this.selectedElements = e.getCellElements()),
                      (this.selectedCell = e.cells[0]),
                      (this.selectedElement = this.selectedElements[0]));
                  }),
                  (h.unselectSelectedSlide = function () {
                    this.selectedSlide && this.selectedSlide.unselect();
                  }),
                  (h.selectInitialIndex = function () {
                    var e = this.options.initialIndex;
                    if (this.isInitActivated)
                      this.select(this.selectedIndex, !1, !0);
                    else {
                      if (e && "string" == typeof e)
                        if (this.queryCell(e))
                          return void this.selectCell(e, !1, !0);
                      var t = 0;
                      e && this.slides[e] && (t = e), this.select(t, !1, !0);
                    }
                  }),
                  (h.selectCell = function (e, t, n) {
                    var r = this.queryCell(e);
                    if (r) {
                      var i = this.getCellSlideIndex(r);
                      this.select(i, t, n);
                    }
                  }),
                  (h.getCellSlideIndex = function (e) {
                    for (var t = 0; t < this.slides.length; t++) {
                      if (-1 != this.slides[t].cells.indexOf(e)) return t;
                    }
                  }),
                  (h.getCell = function (e) {
                    for (var t = 0; t < this.cells.length; t++) {
                      var n = this.cells[t];
                      if (n.element == e) return n;
                    }
                  }),
                  (h.getCells = function (e) {
                    e = r.makeArray(e);
                    var t = [];
                    return (
                      e.forEach(function (e) {
                        var n = this.getCell(e);
                        n && t.push(n);
                      }, this),
                      t
                    );
                  }),
                  (h.getCellElements = function () {
                    return this.cells.map(function (e) {
                      return e.element;
                    });
                  }),
                  (h.getParentCell = function (e) {
                    var t = this.getCell(e);
                    return (
                      t ||
                      ((e = r.getParent(e, ".flickity-slider > *")),
                      this.getCell(e))
                    );
                  }),
                  (h.getAdjacentCellElements = function (e, t) {
                    if (!e) return this.selectedSlide.getCellElements();
                    t = void 0 === t ? this.selectedIndex : t;
                    var n = this.slides.length;
                    if (1 + 2 * e >= n) return this.getCellElements();
                    for (var i = [], o = t - e; o <= t + e; o++) {
                      var a = this.options.wrapAround ? r.modulo(o, n) : o,
                        s = this.slides[a];
                      s && (i = i.concat(s.getCellElements()));
                    }
                    return i;
                  }),
                  (h.queryCell = function (e) {
                    if ("number" == typeof e) return this.cells[e];
                    if ("string" == typeof e) {
                      if (e.match(/^[#.]?[\d/]/)) return;
                      e = this.element.querySelector(e);
                    }
                    return this.getCell(e);
                  }),
                  (h.uiChange = function () {
                    this.emitEvent("uiChange");
                  }),
                  (h.childUIPointerDown = function (e) {
                    "touchstart" != e.type && e.preventDefault(), this.focus();
                  }),
                  (h.onresize = function () {
                    this.watchCSS(), this.resize();
                  }),
                  r.debounceMethod(d, "onresize", 150),
                  (h.resize = function () {
                    if (this.isActive) {
                      this.getSize(),
                        this.options.wrapAround &&
                          (this.x = r.modulo(this.x, this.slideableWidth)),
                        this.positionCells(),
                        this._getWrapShiftCells(),
                        this.setGallerySize(),
                        this.emitEvent("resize");
                      var e = this.selectedElements && this.selectedElements[0];
                      this.selectCell(e, !1, !0);
                    }
                  }),
                  (h.watchCSS = function () {
                    this.options.watchCSS &&
                      (-1 !=
                      l(this.element, ":after").content.indexOf("flickity")
                        ? this.activate()
                        : this.deactivate());
                  }),
                  (h.onkeydown = function (e) {
                    var t =
                      document.activeElement &&
                      document.activeElement != this.element;
                    if (this.options.accessibility && !t) {
                      var n = d.keyboardHandlers[e.keyCode];
                      n && n.call(this);
                    }
                  }),
                  (d.keyboardHandlers = {
                    37: function () {
                      var e = this.options.rightToLeft ? "next" : "previous";
                      this.uiChange(), this[e]();
                    },
                    39: function () {
                      var e = this.options.rightToLeft ? "previous" : "next";
                      this.uiChange(), this[e]();
                    },
                  }),
                  (h.focus = function () {
                    var t = e.pageYOffset;
                    this.element.focus({ preventScroll: !0 }),
                      e.pageYOffset != t && e.scrollTo(e.pageXOffset, t);
                  }),
                  (h.deactivate = function () {
                    this.isActive &&
                      (this.element.classList.remove("flickity-enabled"),
                      this.element.classList.remove("flickity-rtl"),
                      this.unselectSelectedSlide(),
                      this.cells.forEach(function (e) {
                        e.destroy();
                      }),
                      this.element.removeChild(this.viewport),
                      u(this.slider.children, this.element),
                      this.options.accessibility &&
                        (this.element.removeAttribute("tabIndex"),
                        this.element.removeEventListener("keydown", this)),
                      (this.isActive = !1),
                      this.emitEvent("deactivate"));
                  }),
                  (h.destroy = function () {
                    this.deactivate(),
                      e.removeEventListener("resize", this),
                      this.allOff(),
                      this.emitEvent("destroy"),
                      s &&
                        this.$element &&
                        s.removeData(this.element, "flickity"),
                      delete this.element.flickityGUID,
                      delete f[this.guid];
                  }),
                  r.extend(h, a),
                  (d.data = function (e) {
                    var t = (e = r.getQueryElement(e)) && e.flickityGUID;
                    return t && f[t];
                  }),
                  r.htmlInit(d, "flickity"),
                  s && s.bridget && s.bridget("flickity", d);
                return (
                  (d.setJQuery = function (e) {
                    s = e;
                  }),
                  (d.Cell = i),
                  (d.Slide = o),
                  d
                );
              })(o, e, t, n, r, i, a);
            }.apply(t, r)) || (e.exports = i);
      })(window);
    },
    FCt6: function (e, t, n) {
      "use strict";
      var r = n("q1tI"),
        i = n.n(r),
        o = n("jT3O"),
        a = n("VdAu"),
        s = n("E+oP"),
        l = n.n(s),
        c = n("PGlZ"),
        u = n("vOnD"),
        p = n("5gwC"),
        f = n("HJKE"),
        d = n("TfoY"),
        h = i.a.createElement;
      function y() {
        var e = Object(o.a)(["\n      ", " .5s ", " forwards\n    "]);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = Object(o.a)([
          "\n  opacity: 0;\n  transform: scale(0.97);\n  animation: ",
          ";\n",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = Object(o.a)([
          "\n    from {opacity: 0; transform: scale(.97);}\n    to {opacity: 1; transform: scale(1);}\n",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      var b = Object(u.d)(g()),
        v = Object(u.c)(a.a)(m(), function (e) {
          return e.active && Object(u.b)(y(), b, f.c.bezier);
        }),
        w = function (e) {
          var t = e.data,
            n = e.child,
            r = e.preview,
            i = void 0 !== r && r,
            o = Object(d.c)(),
            s = t.file,
            u = (t.images, t.caption),
            y = t.altText,
            m = t.shortId,
            g = Object(c.b)({ triggerOnce: !0 }),
            b = g.ref,
            w = g.inView;
          return h(
            v,
            { active: w },
            h(
              a.b,
              {
                ref: b,
                flexDirection: "column",
                mb: n ? 0 : [f.h.three, f.h.six],
                px: !n && [f.h.sidePaddingMobile, f.h.sidePadding],
                maxWidth: f.e.maxWidth,
                mx: "auto",
                className: "block image-block",
                id: m,
              },
              s &&
                h(a.c, {
                  sx: { objectFit: "contain" },
                  alt: i ? y || "Image ".concat(s) : "Image",
                  src: i
                    ? s
                    : (function (e, t, n) {
                        var r = e.lastIndexOf(t);
                        return r < 0
                          ? e
                          : e.substring(0, r) + n + e.substring(r);
                      })(
                        s.replace(
                          s.includes("dev")
                            ? "gcd-studio-dev"
                            : "gcd-studio-prod",
                          s.includes("dev")
                            ? "gcd-studio-resized-dev"
                            : "gcd-studio-resized-prod"
                        ),
                        ".",
                        o ? "-medium" : "-large"
                      ),
                }),
              !l()(u) &&
                h(
                  a.b,
                  {
                    mt: f.h.two,
                    justifyContent: "center",
                    textAlign: "center",
                    px: [f.h.two, f.h.four],
                    mb: f.h.one,
                  },
                  h(p.a, { color: f.b.steel, font: o ? "xs" : "sm" }, u)
                )
            )
          );
        },
        _ = n("cpVT"),
        P = n("M55E"),
        k = i.a.createElement,
        O = new P.Converter({
          tables: !0,
          simplifiedAutoLink: !0,
          strikethrough: !0,
          tasklists: !0,
          extensions: [n("s0IC")],
        }),
        j = function (e) {
          return k("div", {
            dangerouslySetInnerHTML: { __html: O.makeHtml(e) },
          });
        },
        x = i.a.createElement;
      function S() {
        var e = Object(o.a)([
          "\n  & p,\n  h2,\n  h3,\n  ul,\n  ol {\n    ",
          "\n  }\n",
        ]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = Object(o.a)(["\n      ", " .5s ", " forwards\n    "]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = Object(o.a)(["\n  opacity: 0;\n  animation: ", ";\n"]);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = Object(o.a)([
          "\n    from {opacity: 0;}\n    to {opacity: 1; }\n",
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      var M = Object(u.d)(D()),
        A = Object(u.c)(a.a)(C(), function (e) {
          return e.active && Object(u.b)(E(), M, f.c.bezier);
        }),
        L = Object(u.c)(a.b)(S(), function (e) {
          return "max-width: ".concat(
            1 === e.columns ? f.e.shorterWidth : f.e.maxWidth,
            ";\n      margin-left: auto;\n      margin-right: auto;"
          );
        }),
        I = function (e) {
          var t,
            n = e.data,
            r = e.child,
            i = n.text,
            o = n.columns,
            a = n.align,
            s = n.shortId,
            l = Object(c.b)({ triggerOnce: !0 }),
            u = l.ref,
            d = l.inView;
          return x(
            A,
            { active: d },
            x(
              L,
              ((t = {
                ref: u,
                width: "100%",
                maxWidth: f.e.maxWidth,
                mx: 1 === o && "auto",
                mb: r ? 0 : [f.h.three, f.h.six],
                px: !r && [f.h.sidePaddingMobile, f.h.sidePadding],
                id: s,
                className: "block text-block",
              }),
              Object(_.a)(t, "id", s),
              Object(_.a)(t, "mx", "auto"),
              Object(_.a)(t, "columns", o),
              t),
              x(p.a, { width: "100%", columnCount: o, align: a }, j(i))
            )
          );
        },
        T = n("LvDl"),
        z = n("7l9Y"),
        R = n.n(z),
        N = i.a.createElement;
      function U() {
        var e = Object(o.a)([
          "\n  position: relative;\n  padding-bottom: ",
          ";\n  div {\n    height: 100% !important;\n  }\n  iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n",
        ]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      function H() {
        var e = Object(o.a)(["\n      ", " .5s ", " forwards\n    "]);
        return (
          (H = function () {
            return e;
          }),
          e
        );
      }
      function W() {
        var e = Object(o.a)([
          "\n  opacity: 0;\n  transform: scale(0.97);\n  animation: ",
          ";\n",
        ]);
        return (
          (W = function () {
            return e;
          }),
          e
        );
      }
      function B() {
        var e = Object(o.a)([
          "\n    from {opacity: 0; transform: scale(.97);}\n    to {opacity: 1; transform: scale(1);}\n",
        ]);
        return (
          (B = function () {
            return e;
          }),
          e
        );
      }
      var V = Object(u.d)(B()),
        q = Object(u.c)(a.a)(W(), function (e) {
          return e.active && Object(u.b)(H(), V, f.c.bezier);
        }),
        F = Object(u.c)(a.b)(U(), function (e) {
          return e.padding ? "56.25%" : 0;
        }),
        $ = function (e) {
          var t = e.data,
            n = e.child,
            r = t.file,
            i = t.caption,
            o = t.shortId,
            a = t.altText,
            s = Object(c.b)({ triggerOnce: !0 }),
            l = s.ref,
            u = s.inView;
          return N(
            q,
            { active: u, px: !n && [f.h.sidePaddingMobile, f.h.sidePadding] },
            N(
              F,
              {
                ref: l,
                mb: n ? 0 : [f.h.three, f.h.six],
                width: "100%",
                className: "block video-block",
                id: o,
                padding:
                  !Object(T.isEmpty)(r) &&
                  (r.includes("youtube") ||
                    r.includes("youtu.be") ||
                    r.includes("vimeo")),
                maxWidth: f.e.maxWidth,
                mx: "auto",
              },
              N(R.a, { url: r, width: "100%", controls: !0, alt: a })
            ),
            !Object(T.isEmpty)(i) &&
              N(
                p.a,
                {
                  color: f.b.steel,
                  sx: {
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  },
                },
                i
              )
          );
        },
        G = i.a.createElement;
      function K() {
        var e = Object(o.a)([
          "\n  position: relative;\n  height: ",
          ";\n  div {\n    height: 100% !important;\n  }\n  iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n",
        ]);
        return (
          (K = function () {
            return e;
          }),
          e
        );
      }
      function X() {
        var e = Object(o.a)(["\n      ", " .5s ", " forwards\n    "]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      function Y() {
        var e = Object(o.a)([
          "\n  opacity: 0;\n  transform: scale(0.97);\n  animation: ",
          ";\n",
        ]);
        return (
          (Y = function () {
            return e;
          }),
          e
        );
      }
      function Z() {
        var e = Object(o.a)([
          "\n    from {opacity: 0; transform: scale(.97);}\n    to {opacity: 1; transform: scale(1);}\n",
        ]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      var Q = Object(u.d)(Z()),
        J = Object(u.c)(a.a)(Y(), function (e) {
          return e.active && Object(u.b)(X(), Q, f.c.bezier);
        }),
        ee = Object(u.c)(a.b)(K(), function (e) {
          return e.height && e.height;
        }),
        te = function (e) {
          var t = e.data,
            n = e.child,
            r = t.file,
            i = t.caption,
            o = t.shortId,
            a = t.url,
            s = t.external,
            l = t.altText,
            u = Object(c.b)({ triggerOnce: !0 }),
            d = u.ref,
            h = u.inView;
          return G(
            J,
            { active: h, px: !n && [f.h.sidePaddingMobile, f.h.sidePadding] },
            G(
              ee,
              {
                ref: d,
                mb: n ? 0 : [f.h.three, f.h.six],
                width: "100%",
                className: "block audio-block",
                id: o,
                height: Object(T.includes)(r, "gcd-studio") ? "55px" : "170px",
                maxWidth: f.e.maxWidth,
                mx: "auto",
              },
              G(R.a, { url: s ? a : r, width: "100%", controls: !0, alt: l })
            ),
            !Object(T.isEmpty)(i) &&
              G(
                p.a,
                {
                  sx: {
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  },
                },
                i
              )
          );
        },
        ne = i.a.createElement;
      function re(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? re(Object(n), !0).forEach(function (t) {
                Object(_.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : re(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var oe = function (e) {
          var t = e.data,
            n = t.items,
            r = t.columns,
            i = t.align,
            o = t.shortId;
          return (
            !l()(n) &&
            ne(
              a.b,
              {
                width: "100%",
                flexDirection: ["column", "row"],
                alignItems: (function (e) {
                  return "center" === e
                    ? "center"
                    : "top" === e
                    ? "flex-start"
                    : "bottom" === e
                    ? "flex-end"
                    : "flex-start";
                })(i),
                id: o,
                className: "block multi-block",
                px: [f.h.sidePaddingMobile, f.h.sidePadding],
                mb: [f.h.three, f.h.six],
                sx: ie(
                  ie({}, Object(d.d)("".concat(f.h.three, "px"))),
                  {},
                  {
                    display: "grid !important",
                    gridTemplateColumns:
                      1 === r
                        ? "1fr"
                        : 2 === r
                        ? ["1fr", "repeat(2,1fr)"]
                        : ["1fr", "repeat(3,1fr)"],
                  }
                ),
                maxWidth: f.e.maxWidth,
                mx: "auto",
              },
              n.map(function (e, t) {
                return ne(a.a, { key: t }, ne(Ye, { data: e, child: !0 }));
              })
            )
          );
        },
        ae = n("20a2"),
        se = n("Qrgx"),
        le = n("euSZ"),
        ce = i.a.createElement,
        ue = function (e) {
          var t = e.data,
            n = e.mr,
            r = e.ml,
            i = e.mx,
            o = e.mb,
            s = e.id,
            c = e.className,
            u = e.withoutText,
            p = Object(ae.useRouter)(),
            d = t.text,
            h = t.url,
            y = t.previewPage,
            m = t.previewUser,
            g = t.external,
            b = t.preview;
          console.log("text", t);
          return ce(
            a.b,
            {
              onClick: function () {
                g
                  ? h.includes("/index")
                    ? p.push("/index")
                    : window.open(h, "_blank", "noopener,noreferrer")
                  : l()(y)
                  ? l()(m)
                    ? p.push(h)
                    : p.push("/profile/".concat(m.slug))
                  : p.push("/pages/".concat(y.slug));
              },
              tabIndex: 0,
              onKeyUp: function (e) {
                ("Enter" !== e.key && " " !== e.key) ||
                  p.push(
                    l()(y)
                      ? l()(m)
                        ? h
                        : "/profile/".concat(m.slug)
                      : "/pages/".concat(y.slug)
                  );
              },
              mr: n,
              ml: r,
              mx: i,
              mb: o,
              width: (g || b) && l()(d) ? "106px" : "100%",
              id: s,
              className: c,
            },
            ce(
              a.b,
              {
                alignItems: "center",
                justifyContent: u ? "center" : "space-between",
                minHeight: ["58px", "64px", "106px"],
                width:
                  l()(d) && l()(y) && l()(m)
                    ? ["58px", "64px", "106px"]
                    : "100%",
                minWidth:
                  l()(d) && l()(y) && l()(m)
                    ? ["58px", "64px", "106px"]
                    : "100%",
                px: ["20px", u ? "0" : "42px"],
                py: ["8px", "10px", "14px"],
                bg: f.b.purple,
                sx: {
                  cursor: "pointer",
                  borderRadius: [
                    "48px",
                    u ? "100%" : "64px",
                    u ? "100%" : "104px",
                  ],
                  boxShadow: f.i.boxShadow,
                  "&:hover": { backgroundColor: f.b.purple },
                },
              },
              ce(
                a.d,
                {
                  fontSize: [
                    f.g.mdx,
                    f.g.xl,
                    !l()(y) &&
                    (null === y || void 0 === y ? void 0 : y.title.length) > 20
                      ? f.g.xl
                      : f.g.xxl,
                  ],
                  fontWeight: f.d.weight.medium,
                  lineHeight: "1",
                  color: f.b.black,
                  maxWidth: "calc(100% - 30px)",
                  sx: { letterSpacing: "-2%", wordBreak: "break-word" },
                },
                g
                  ? d
                  : l()(y)
                  ? l()(m)
                    ? d
                    : "".concat(m.firstName, " ").concat(m.lastName)
                  : y.title
              ),
              ce(a.c, { alt: "arrow", src: "https://gcd.studio/arrow.svg", width: "25px" })
            )
          );
        },
        pe = i.a.createElement;
      function fe() {
        var e = Object(o.a)(["\n      ", " 0s ", " .2s forwards\n    "]);
        return (
          (fe = function () {
            return e;
          }),
          e
        );
      }
      function de() {
        var e = Object(o.a)([
          "\n  opacity: 0;\n  transform: scale(0.97);\n  animation: ",
          ";\n",
        ]);
        return (
          (de = function () {
            return e;
          }),
          e
        );
      }
      function he() {
        var e = Object(o.a)([
          "\n    from {opacity: 0; transform: scale(.97);}\n    to {opacity: 1; transform: scale(1);}\n",
        ]);
        return (
          (he = function () {
            return e;
          }),
          e
        );
      }
      var ye = Object(u.d)(he()),
        me = Object(u.c)(a.a)(de(), function (e) {
          return e.active && Object(u.b)(fe(), ye, f.c.bezier);
        }),
        ge = function (e) {
          var t,
            n,
            i,
            o = e.data,
            s = e.fullPage,
            u = e.child,
            p = (Object(ae.useRouter)(), Object(r.useState)({})),
            d = p[0],
            h = p[1],
            y = Object(r.useState)(!1),
            m = y[0],
            g = y[1],
            b = Object(r.useState)(!1),
            v = b[0],
            w = b[1],
            _ = Object(c.b)({ triggerOnce: !0 }),
            P = _.ref,
            k = _.inView;
          return (
            Object(r.useEffect)(
              function () {
                if (s) {
                  var e = {
                    preview: !0,
                    previewPage: {
                      title: o.title,
                      image: o.image,
                      editors: o.editors,
                      _id: o._id,
                    },
                    previewUser: {
                      firstName: o.firstName,
                      lastName: o.lastName,
                      image: o.image,
                      _id: o._id,
                    },
                  };
                  h(e);
                } else h(o);
                g(!0);
              },
              [o]
            ),
            m && d.external
              ? pe(
                  me,
                  {
                    width: "100%",
                    px: !u && [f.h.sidePaddingMobile, f.h.sidePadding],
                    active: k,
                    ref: P,
                    maxWidth: f.e.maxWidth,
                    mx: "auto",
                    onMouseEnter: function () {
                      return w(!0);
                    },
                    onMouseLeave: function () {
                      return w(!1);
                    },
                  },
                  pe(ue, {
                    data: d,
                    mb: u ? 0 : [f.h.three, f.h.six],
                    id: d.shortId,
                    className: "block link-block",
                  })
                )
              : !d.preview || (l()(d.previewPage) && l()(d.previewUser))
              ? pe(
                  me,
                  {
                    ref: P,
                    width: "100%",
                    px: !u && [f.h.sidePaddingMobile, f.h.sidePadding],
                    active: k,
                    maxWidth: f.e.maxWidth,
                    mx: "auto",
                  },
                  pe(ue, { data: d, mb: u ? 0 : [f.h.three, f.h.six] })
                )
              : pe(
                  me,
                  {
                    onMouseEnter: function () {
                      return w(!0);
                    },
                    onMouseLeave: function () {
                      return w(!1);
                    },
                    width: "100%",
                    active: k,
                    px: [f.h.sidePaddingMobile, f.h.sidePadding],
                  },
                  pe(
                    a.a,
                    {
                      ref: P,
                      height: ["650px", "40vw"],
                      maxHeight: ["calc(100vh - 140px)", "788px"],
                      width: "100%",
                      bg: f.b.black,
                      mb: [f.h.three, f.h.six],
                      sx: {
                        position: "relative",
                        borderRadius: f.i.borderRadius,
                        backgroundImage: l()(d.previewPage)
                          ? "url(".concat(
                              null === (n = d.previewUser) || void 0 === n
                                ? void 0
                                : n.image,
                              ")"
                            )
                          : "url(".concat(
                              null === (t = d.previewPage) || void 0 === t
                                ? void 0
                                : t.image,
                              ")"
                            ),
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      },
                      id: d.shortId,
                      className: "link-block",
                      maxWidth: f.e.maxWidth,
                      mx: "auto",
                    },
                    pe(
                      a.b,
                      {
                        width: ["calc(100% - 22px)", "100%"],
                        alignItems: "flex-end",
                        sx: {
                          position: "absolute",
                          left: ["15px", "22px"],
                          bottom: ["15px", "26px"],
                        },
                      },
                      pe(
                        a.a,
                        {
                          width: ["calc(100% - 78px)", "380px", "420px"],
                          py: ["12px", "18px"],
                          px: ["12px", "20px"],
                          bg: f.b.white,
                          sx: { borderRadius: f.i.borderRadius },
                        },
                        pe(
                          a.b,
                          { textAlign: "center", mb: "40px" },
                          pe(
                            a.d,
                            {
                              fontSize: ["14px", f.g.lg],
                              lineHeight: "1",
                              sx: { letterSpacing: "-2%" },
                            },
                            d.previewPage
                              ? d.previewPage.title
                              : ""
                                  .concat(d.previewUser.firstName, " ")
                                  .concat(d.previewUser.lastName)
                          )
                        ),
                        !l()(d.previewPage) &&
                          !l()(
                            null === (i = d.previewPage) || void 0 === i
                              ? void 0
                              : i.editors
                          ) &&
                          pe(
                            a.b,
                            { p: "5px", ml: "-5px", sx: { overflow: "auto" } },
                            pe(le.a, {
                              hover: v,
                              data: d.previewPage.editors,
                              type: "primary",
                              onlyOwner: !0,
                              mr: f.h.one,
                            })
                          )
                      ),
                      pe(
                        a.a,
                        { ml: ["14px", "8px", "22px"] },
                        pe(ue, {
                          data: {
                            url: d.previewPage
                              ? "/pages/".concat(d.previewPage.slug)
                              : "/profile/".concat(d.previewUser.slug),
                            external: d.external,
                          },
                          withoutText: !0,
                        })
                      )
                    )
                  )
                )
          );
        },
        be = n("fWv3"),
        ve = n("SOks"),
        we = i.a.createElement;
      function _e() {
        var e = Object(o.a)([
          "\n  ",
          ";\n  iframe {\n    max-width: 100%;\n    display: block;\n    margin: 10px auto;\n    -webkit-backface-visibility: hidden;\n    -webkit-transform: translateZ(0);\n  }\n",
        ]);
        return (
          (_e = function () {
            return e;
          }),
          e
        );
      }
      var Pe = Object(u.c)(a.b)(_e(), function (e) {
          return e.styles && e.styles;
        }),
        ke = function (e) {
          var t,
            n = e.data,
            r = n.text,
            i = n.style,
            o = n.shortId,
            a = n.external,
            s = n.embed;
          return we(
            Pe,
            ((t = {
              width: "100%",
              flexDirection: "column",
              mb: [f.h.three, f.h.six],
              px: [f.h.sidePaddingMobile, f.h.sidePadding],
              id: o,
              className: "block code-block",
            }),
            Object(_.a)(t, "id", o),
            Object(_.a)(t, "styles", !a && i),
            Object(_.a)(t, "maxWidth", f.e.maxWidth),
            Object(_.a)(t, "mx", "auto"),
            t),
            we(p.a, { width: "100%" }, j(a ? s : r))
          );
        },
        Oe = n("vJKn"),
        je = n.n(Oe),
        xe = n("rg98"),
        Se = n("YFqc"),
        Ee = n.n(Se),
        Ce = n("wd/R"),
        De = n.n(Ce),
        Me = (n("grF8"), n("yszJ")),
        Ae = n("ToiD"),
        Le = i.a.createElement,
        Ie = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 7,
            n = De()(e),
            r = De()(),
            i = r.diff(n),
            o = De.a.duration(i),
            a = o.days();
          return t - a;
        },
        Te = function (e) {
          var t = e.item,
            n = e.mobile,
            r = e.daysRemaining,
            i = Object(ae.useRouter)();
          return Le(
            Ee.a,
            { href: "/pages/".concat(t.page) },
            Le(
              a.a,
              {
                onKeyUp: function (e) {
                  ("Enter" !== e.key && " " !== e.key) ||
                    i.push("/pages/".concat(t.page));
                },
                tabIndex: 0,
                key: t._id,
                className: "comment-block",
                minWidth: ["240px", "387px"],
                maxWidth: ["240px", "387px"],
                mr: f.h.two,
                mb: f.h.two,
                sx: { position: "relative", cursor: "pointer" },
              },
              Le(
                a.a,
                {
                  width: "100%",
                  minHeight: ["66px", "130px"],
                  bg: f.b.vapor,
                  p: f.h.two,
                  mb: f.h.one,
                  sx: {
                    borderRadius: f.i.borderRadius,
                    boxShadow: f.i.boxShadowLow,
                  },
                },
                Le(
                  p.a,
                  { font: n ? "xsx" : "lg", wordBreak: "break-word" },
                  t.text
                )
              ),
              Le(
                a.b,
                { alignItems: "center", mt: f.h.two },
                Le(
                  a.a,
                  { sx: { display: "inline-block" } },
                  Le(le.a, { data: { user: t.owner }, type: "primary" })
                ),
                Le(Me.a, { daysRemaining: r })
              )
            )
          );
        },
        ze = function (e) {
          e.data;
          var t = Object(d.c)(),
            n = Object(r.useState)([]),
            i = n[0],
            o = n[1],
            s = Object(r.useState)(!1),
            l = s[0],
            c = s[1];
          Object(r.useEffect)(function () {
            u();
          }, []);
          var u = (function () {
            var e = Object(xe.a)(
              je.a.mark(function e() {
                var t, n;
                return je.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2), Object(Ae.c)({ status: "0", limit: 10 })
                        );
                      case 2:
                        200 === (t = e.sent).status &&
                          ((n = (n = t.data.items).filter(function (e) {
                            var t = Ie(e.updatedAt, e.duration);
                            return (
                              (e.daysRemaining = t),
                              !(t <= 0 || Object(T.isEmpty)(e.text))
                            );
                          })),
                          o(n),
                          c(!0));
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return (
            l &&
            !Object(T.isEmpty)(i) &&
            Le(
              a.b,
              {
                width: "100%",
                flexWrap: "wrap",
                mt: f.h.three,
                mb: f.h.four,
                pt: ["20px", f.h.six],
                sx: {
                  borderTop: [
                    "1px solid ".concat(f.b.black),
                    "2px solid ".concat(f.b.black),
                  ],
                },
              },
              Le(
                a.b,
                { width: "100%", justifyContent: "center" },
                Le(
                  p.a,
                  { font: t ? "xsx" : "lg", mb: ["20px", f.h.four] },
                  "Questions"
                )
              ),
              Le(
                a.b,
                {
                  width: "100%",
                  sx: { overflowX: "auto", overscrollBehaviorY: "auto" },
                  flexDirection: "row",
                  alignItems: "flex-start",
                  pb: "20px",
                  px: [f.h.two, f.h.sidePadding],
                },
                i.map(function (e) {
                  return Le(Te, {
                    key: e._id,
                    item: e,
                    mobile: t,
                    daysRemaining: e.daysRemaining,
                  });
                })
              )
            )
          );
        },
        Re = n("JNx7"),
        Ne = n("a0Ta"),
        Ue = n("cIx8"),
        He = i.a.createElement;
      function We() {
        var e = Object(o.a)([
          "\n  display: grid !important;\n  grid-template-columns: 1fr;\n  gap: ",
          ";\n  padding-left: ",
          "px;\n  padding-right: ",
          "px;\n  padding-top: ",
          "px;\n  padding-bottom: ",
          "px;\n  @media screen and (min-width: 700px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media screen and (min-width: 1150px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n",
        ]);
        return (
          (We = function () {
            return e;
          }),
          e
        );
      }
      var Be = Object(u.c)(a.b)(
          We(),
          f.i.gapSmall,
          f.h.two,
          f.h.two,
          f.h.three,
          f.h.four
        ),
        Ve = function () {
          var e = Object(r.useContext)(Re.a).loggedIn,
            t = Object(r.useState)(!1),
            n = t[0],
            i = t[1],
            o = Object(r.useState)({}),
            a = o[0],
            s = o[1];
          Object(r.useEffect)(function () {
            c();
          }, []);
          var c = (function () {
            var t = Object(xe.a)(
              je.a.mark(function t() {
                var n, r;
                return je.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          Object(Ue.d)({
                            limit: 6,
                            type: "0,1",
                            status: e ? "0,1" : "0",
                            order: "updatedAt",
                          })
                        );
                      case 2:
                        200 === (n = t.sent).status &&
                          ((r = n.data.items), s(r)),
                          i(!0);
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
          return (
            n &&
            !l()(a) &&
            He(
              Be,
              null,
              a.map(function (e, t) {
                return He(Ne.a, {
                  showMobileStyles: !1,
                  key: t,
                  index: t + 1,
                  data: e,
                });
              })
            )
          );
        },
        qe = i.a.createElement;
      function Fe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function $e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Fe(Object(n), !0).forEach(function (t) {
                Object(_.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Fe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ge() {
        var e = Object(o.a)([
          "\n  display: grid !important;\n  grid-template-columns: 1fr;\n  ",
          "\n  padding-top: ",
          "px;\n  padding-bottom: ",
          "px;\n  @media screen and (min-width: 700px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media screen and (min-width: 1150px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n",
        ]);
        return (
          (Ge = function () {
            return e;
          }),
          e
        );
      }
      Object(u.c)(a.b)(
        Ge(),
        function () {
          return Object(d.d)(f.i.gapSmall);
        },
        f.h.three,
        f.h.four
      );
      var Ke = function () {
          var e = Object(r.useContext)(Re.a).loggedIn,
            t = Object(r.useState)(!1),
            n = t[0],
            o = t[1],
            s = Object(r.useState)({}),
            l = s[0],
            c = s[1],
            u = Object(r.useState)(1),
            p = u[0],
            h = u[1],
            y = Object(r.useState)(1),
            m = y[0],
            g = y[1],
            b = Object(r.useState)(1),
            v = b[0],
            w = b[1];
          Object(r.useEffect)(
            function () {
              _();
            },
            [p]
          );
          var _ = (function () {
            var t = Object(xe.a)(
              je.a.mark(function t() {
                var n, r, i, a, s, u;
                return je.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          Object(Ue.d)({
                            limit: 14,
                            type: "0,1",
                            status: e ? "0,1" : "0",
                            page: p,
                          })
                        );
                      case 2:
                        200 === (n = t.sent).status &&
                          ((r = n.data),
                          (i = r.items),
                          (a = r.total),
                          (s = 1 === p ? Object(T.drop)(i, 6) : i),
                          (u = Object(T.concat)(l, s)),
                          c(u),
                          g(a),
                          w(v)),
                          o(!0);
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
          return (
            n &&
            !Object(T.isEmpty)(l) &&
            qe(
              a.a,
              { width: "100%", px: [f.h.two, f.h.sidePadding] },
              qe(
                a.b,
                {
                  width: "100%",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  pb: f.h.six,
                  sx: $e(
                    $e({}, Object(d.d)(f.i.gapSmall)),
                    {},
                    {
                      display: "grid !important",
                      gridTemplateColumns: [
                        "1fr",
                        "repeat(2,1fr)",
                        "repeat(4,1fr)",
                      ],
                    }
                  ),
                },
                l.map(function (e, t) {
                  return (
                    !Object(T.isEmpty)(e._id) &&
                    qe(Ne.a, { key: t, index: t + 1, data: e, small: !0 })
                  );
                })
              ),
              qe(
                a.b,
                { width: "100%", mb: f.h.four, justifyContent: "center" },
                p < 4
                  ? qe(
                      i.a.Fragment,
                      null,
                      (l.length - 6 < m || v > 1) &&
                        qe(se.a, {
                          variant: "primary",
                          text: "Load more",
                          handleClick: function () {
                            return h(p + 1);
                          },
                        })
                    )
                  : qe(ue, { data: { text: "Explore", url: "/index" } })
              )
            )
          );
        },
        Xe = i.a.createElement,
        Ye = (t.a = function (e) {
          var t = e.data,
            n = e.child;
          e.preview;
          switch (t.type) {
            case "image":
              return Xe(w, { data: t, child: n, preview: !0 });
            case "text":
              return Xe(I, { data: t, child: n });
            case "video":
              return Xe($, { data: t, child: n });
            case "audio":
              return Xe(te, { data: t, child: n });
            case "column":
              return Xe(oe, { data: t, child: n });
            case "link":
              return Xe(ge, { data: t, child: n });
            case "carousel":
            case "pages":
              return Xe(be.a, { data: t, child: n });
            case "code":
              return Xe(ke, { data: t, child: n });
            case "lineBreak":
              return Xe(ve.a, null);
            case "questionViewer":
              return Xe(ze, null);
            case "recentPages":
              return Xe(Ve, null);
            case "allPages":
              return Xe(Ke, null);
            default:
              return null;
          }
        });
    },
    GdC5: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        o = n("tbWI"),
        a = n("mzdp");
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function p(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var i = h(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return f(this, n);
        };
      }
      function f(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? d(e) : t;
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t, n) {
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
      var m = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && u(e, t);
        })(f, e);
        var t,
          n,
          r,
          s = p(f);
        function f() {
          var e;
          l(this, f);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            y(
              d((e = s.call.apply(s, [this].concat(n)))),
              "callPlayer",
              o.callPlayer
            ),
            y(d(e), "duration", null),
            y(d(e), "currentTime", null),
            y(d(e), "secondsLoaded", null),
            y(d(e), "mute", function () {
              e.callPlayer("mute");
            }),
            y(d(e), "unmute", function () {
              e.callPlayer("unmute");
            }),
            y(d(e), "ref", function (t) {
              e.iframe = t;
            }),
            e
          );
        }
        return (
          (t = f),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this;
                (0, o.getSDK)(
                  "https://cdn.embed.ly/player-0.1.0.min.js",
                  "playerjs"
                ).then(function (e) {
                  t.iframe &&
                    ((t.player = new e.Player(t.iframe)),
                    t.player.setLoop(t.props.loop),
                    t.player.on("ready", t.props.onReady),
                    t.player.on("play", t.props.onPlay),
                    t.player.on("pause", t.props.onPause),
                    t.player.on("seeked", t.props.onSeek),
                    t.player.on("ended", t.props.onEnded),
                    t.player.on("error", t.props.onError),
                    t.player.on("timeupdate", function (e) {
                      var n = e.duration,
                        r = e.seconds;
                      (t.duration = n), (t.currentTime = r);
                    }),
                    t.player.on("buffered", function (e) {
                      var n = e.percent;
                      t.duration && (t.secondsLoaded = t.duration * n);
                    }),
                    t.props.muted && t.player.mute());
                }, this.props.onError);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("setCurrentTime", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", 100 * e);
              },
            },
            {
              key: "setLoop",
              value: function (e) {
                this.callPlayer("setLoop", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.secondsLoaded;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.url.match(a.MATCH_URL_STREAMABLE)[1];
                return i.default.createElement("iframe", {
                  ref: this.ref,
                  src: "https://streamable.com/o/".concat(e),
                  frameBorder: "0",
                  scrolling: "no",
                  style: { width: "100%", height: "100%" },
                  allowFullScreen: !0,
                });
              },
            },
          ]) && c(t.prototype, n),
          r && c(t, r),
          f
        );
      })(i.Component);
      (t.default = m),
        y(m, "displayName", "Streamable"),
        y(m, "canPlay", a.canPlay.streamable);
    },
    IXsZ: function (e, t, n) {
      var r, i, o;
      window,
        (i = [
          n("E4Uq"),
          n("SWQu"),
          n("z7b9"),
          n("Bij1"),
          n("sYrE"),
          n("vXzw"),
          n("ihW+"),
        ]),
        void 0 ===
          (o =
            "function" ===
            typeof (r = function (e) {
              return e;
            })
              ? r.apply(t, i)
              : r) || (e.exports = o);
    },
    LLoX: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        o = n("tbWI"),
        a = n("mzdp");
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = y(e);
          if (t) {
            var i = y(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? h(e) : t;
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t, n) {
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
      var g = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        })(s, e);
        var t,
          n,
          r,
          a = f(s);
        function s() {
          var e;
          c(this, s);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            m(
              h((e = a.call.apply(a, [this].concat(n)))),
              "callPlayer",
              o.callPlayer
            ),
            m(h(e), "duration", null),
            m(h(e), "currentTime", null),
            m(h(e), "secondsLoaded", null),
            m(h(e), "mute", function () {
              e.setVolume(0);
            }),
            m(h(e), "unmute", function () {
              null !== e.props.volume && e.setVolume(e.props.volume);
            }),
            m(h(e), "ref", function (t) {
              e.container = t;
            }),
            e
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this;
                (this.duration = null),
                  (0, o.getSDK)(
                    "https://player.vimeo.com/api/player.js",
                    "Vimeo"
                  ).then(function (n) {
                    t.container &&
                      ((t.player = new n.Player(
                        t.container,
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? l(Object(n), !0).forEach(function (t) {
                                  m(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n)
                                )
                              : l(Object(n)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t)
                                  );
                                });
                          }
                          return e;
                        })(
                          {
                            url: e,
                            autoplay: t.props.playing,
                            muted: t.props.muted,
                            loop: t.props.loop,
                            playsinline: t.props.playsinline,
                            controls: t.props.controls,
                          },
                          t.props.config.playerOptions
                        )
                      )),
                      t.player
                        .ready()
                        .then(function () {
                          var e = t.container.querySelector("iframe");
                          (e.style.width = "100%"), (e.style.height = "100%");
                        })
                        .catch(t.props.onError),
                      t.player.on("loaded", function () {
                        t.props.onReady(), t.refreshDuration();
                      }),
                      t.player.on("play", function () {
                        t.props.onPlay(), t.refreshDuration();
                      }),
                      t.player.on("pause", t.props.onPause),
                      t.player.on("seeked", function (e) {
                        return t.props.onSeek(e.seconds);
                      }),
                      t.player.on("ended", t.props.onEnded),
                      t.player.on("error", t.props.onError),
                      t.player.on("timeupdate", function (e) {
                        var n = e.seconds;
                        t.currentTime = n;
                      }),
                      t.player.on("progress", function (e) {
                        var n = e.seconds;
                        t.secondsLoaded = n;
                      }),
                      t.player.on("bufferstart", t.props.onBuffer),
                      t.player.on("bufferend", t.props.onBufferEnd));
                  }, this.props.onError);
              },
            },
            {
              key: "refreshDuration",
              value: function () {
                var e = this;
                this.player.getDuration().then(function (t) {
                  e.duration = t;
                });
              },
            },
            {
              key: "play",
              value: function () {
                var e = this.callPlayer("play");
                e && e.catch(this.props.onError);
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            {
              key: "stop",
              value: function () {
                this.callPlayer("unload");
              },
            },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("setCurrentTime", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "setLoop",
              value: function (e) {
                this.callPlayer("setLoop", e);
              },
            },
            {
              key: "setPlaybackRate",
              value: function (e) {
                this.callPlayer("setPlaybackRate", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.secondsLoaded;
              },
            },
            {
              key: "render",
              value: function () {
                var e = {
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  display: this.props.display,
                };
                return i.default.createElement("div", {
                  key: this.props.url,
                  ref: this.ref,
                  style: e,
                });
              },
            },
          ]) && u(t.prototype, n),
          r && u(t, r),
          s
        );
      })(i.Component);
      (t.default = g),
        m(g, "displayName", "Vimeo"),
        m(g, "canPlay", a.canPlay.vimeo),
        m(g, "forceLoad", !0);
    },
    M55E: function (e, t, n) {
      var r;
      (function () {
        function i(e) {
          "use strict";
          var t = {
            omitExtraWLInCodeBlocks: {
              defaultValue: !1,
              describe: "Omit the default extra whiteline added to code blocks",
              type: "boolean",
            },
            noHeaderId: {
              defaultValue: !1,
              describe: "Turn on/off generated header id",
              type: "boolean",
            },
            prefixHeaderId: {
              defaultValue: !1,
              describe:
                "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
              type: "string",
            },
            rawPrefixHeaderId: {
              defaultValue: !1,
              describe:
                'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
              type: "boolean",
            },
            ghCompatibleHeaderId: {
              defaultValue: !1,
              describe:
                "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
              type: "boolean",
            },
            rawHeaderId: {
              defaultValue: !1,
              describe:
                "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
              type: "boolean",
            },
            headerLevelStart: {
              defaultValue: !1,
              describe: "The header blocks level start",
              type: "integer",
            },
            parseImgDimensions: {
              defaultValue: !1,
              describe: "Turn on/off image dimension parsing",
              type: "boolean",
            },
            simplifiedAutoLink: {
              defaultValue: !1,
              describe: "Turn on/off GFM autolink style",
              type: "boolean",
            },
            excludeTrailingPunctuationFromURLs: {
              defaultValue: !1,
              describe:
                "Excludes trailing punctuation from links generated with autoLinking",
              type: "boolean",
            },
            literalMidWordUnderscores: {
              defaultValue: !1,
              describe: "Parse midword underscores as literal underscores",
              type: "boolean",
            },
            literalMidWordAsterisks: {
              defaultValue: !1,
              describe: "Parse midword asterisks as literal asterisks",
              type: "boolean",
            },
            strikethrough: {
              defaultValue: !1,
              describe: "Turn on/off strikethrough support",
              type: "boolean",
            },
            tables: {
              defaultValue: !1,
              describe: "Turn on/off tables support",
              type: "boolean",
            },
            tablesHeaderId: {
              defaultValue: !1,
              describe: "Add an id to table headers",
              type: "boolean",
            },
            ghCodeBlocks: {
              defaultValue: !0,
              describe: "Turn on/off GFM fenced code blocks support",
              type: "boolean",
            },
            tasklists: {
              defaultValue: !1,
              describe: "Turn on/off GFM tasklist support",
              type: "boolean",
            },
            smoothLivePreview: {
              defaultValue: !1,
              describe:
                "Prevents weird effects in live previews due to incomplete input",
              type: "boolean",
            },
            smartIndentationFix: {
              defaultValue: !1,
              description: "Tries to smartly fix indentation in es6 strings",
              type: "boolean",
            },
            disableForced4SpacesIndentedSublists: {
              defaultValue: !1,
              description:
                "Disables the requirement of indenting nested sublists by 4 spaces",
              type: "boolean",
            },
            simpleLineBreaks: {
              defaultValue: !1,
              description: "Parses simple line breaks as <br> (GFM Style)",
              type: "boolean",
            },
            requireSpaceBeforeHeadingText: {
              defaultValue: !1,
              description:
                "Makes adding a space between `#` and the header text mandatory (GFM Style)",
              type: "boolean",
            },
            ghMentions: {
              defaultValue: !1,
              description: "Enables github @mentions",
              type: "boolean",
            },
            ghMentionsLink: {
              defaultValue: "https://github.com/{u}",
              description:
                "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
              type: "string",
            },
            encodeEmails: {
              defaultValue: !0,
              description:
                "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
              type: "boolean",
            },
            openLinksInNewWindow: {
              defaultValue: !1,
              description: "Open all links in new windows",
              type: "boolean",
            },
            backslashEscapesHTMLTags: {
              defaultValue: !1,
              description: "Support for HTML Tag escaping. ex: <div>foo</div>",
              type: "boolean",
            },
            emoji: {
              defaultValue: !1,
              description:
                "Enable emoji support. Ex: `this is a :smile: emoji`",
              type: "boolean",
            },
            underline: {
              defaultValue: !1,
              description:
                "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
              type: "boolean",
            },
            completeHTMLDocument: {
              defaultValue: !1,
              description:
                "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
              type: "boolean",
            },
            metadata: {
              defaultValue: !1,
              description:
                "Enable support for document metadata (defined at the top of the document between `\xab\xab\xab` and `\xbb\xbb\xbb` or between `---` and `---`).",
              type: "boolean",
            },
            splitAdjacentBlockquotes: {
              defaultValue: !1,
              description: "Split adjacent blockquote blocks",
              type: "boolean",
            },
          };
          if (!1 === e) return JSON.parse(JSON.stringify(t));
          var n = {};
          for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r].defaultValue);
          return n;
        }
        var o = {},
          a = {},
          s = {},
          l = i(!0),
          c = "vanilla",
          u = {
            github: {
              omitExtraWLInCodeBlocks: !0,
              simplifiedAutoLink: !0,
              excludeTrailingPunctuationFromURLs: !0,
              literalMidWordUnderscores: !0,
              strikethrough: !0,
              tables: !0,
              tablesHeaderId: !0,
              ghCodeBlocks: !0,
              tasklists: !0,
              disableForced4SpacesIndentedSublists: !0,
              simpleLineBreaks: !0,
              requireSpaceBeforeHeadingText: !0,
              ghCompatibleHeaderId: !0,
              ghMentions: !0,
              backslashEscapesHTMLTags: !0,
              emoji: !0,
              splitAdjacentBlockquotes: !0,
            },
            original: { noHeaderId: !0, ghCodeBlocks: !1 },
            ghost: {
              omitExtraWLInCodeBlocks: !0,
              parseImgDimensions: !0,
              simplifiedAutoLink: !0,
              excludeTrailingPunctuationFromURLs: !0,
              literalMidWordUnderscores: !0,
              strikethrough: !0,
              tables: !0,
              tablesHeaderId: !0,
              ghCodeBlocks: !0,
              tasklists: !0,
              smoothLivePreview: !0,
              simpleLineBreaks: !0,
              requireSpaceBeforeHeadingText: !0,
              ghMentions: !1,
              encodeEmails: !0,
            },
            vanilla: i(!0),
            allOn: (function () {
              "use strict";
              var e = i(!0),
                t = {};
              for (var n in e) e.hasOwnProperty(n) && (t[n] = !0);
              return t;
            })(),
          };
        function p(e, t) {
          "use strict";
          var n = t
              ? "Error in " + t + " extension->"
              : "Error in unnamed extension",
            r = { valid: !0, error: "" };
          o.helper.isArray(e) || (e = [e]);
          for (var i = 0; i < e.length; ++i) {
            var a = n + " sub-extension " + i + ": ",
              s = e[i];
            if ("object" !== typeof s)
              return (
                (r.valid = !1),
                (r.error = a + "must be an object, but " + typeof s + " given"),
                r
              );
            if (!o.helper.isString(s.type))
              return (
                (r.valid = !1),
                (r.error =
                  a +
                  'property "type" must be a string, but ' +
                  typeof s.type +
                  " given"),
                r
              );
            var l = (s.type = s.type.toLowerCase());
            if (
              ("language" === l && (l = s.type = "lang"),
              "html" === l && (l = s.type = "output"),
              "lang" !== l && "output" !== l && "listener" !== l)
            )
              return (
                (r.valid = !1),
                (r.error =
                  a +
                  "type " +
                  l +
                  ' is not recognized. Valid values: "lang/language", "output/html" or "listener"'),
                r
              );
            if ("listener" === l) {
              if (o.helper.isUndefined(s.listeners))
                return (
                  (r.valid = !1),
                  (r.error =
                    a +
                    '. Extensions of type "listener" must have a property called "listeners"'),
                  r
                );
            } else if (
              o.helper.isUndefined(s.filter) &&
              o.helper.isUndefined(s.regex)
            )
              return (
                (r.valid = !1),
                (r.error =
                  a +
                  l +
                  ' extensions must define either a "regex" property or a "filter" method'),
                r
              );
            if (s.listeners) {
              if ("object" !== typeof s.listeners)
                return (
                  (r.valid = !1),
                  (r.error =
                    a +
                    '"listeners" property must be an object but ' +
                    typeof s.listeners +
                    " given"),
                  r
                );
              for (var c in s.listeners)
                if (
                  s.listeners.hasOwnProperty(c) &&
                  "function" !== typeof s.listeners[c]
                )
                  return (
                    (r.valid = !1),
                    (r.error =
                      a +
                      '"listeners" property must be an hash of [event name]: [callback]. listeners.' +
                      c +
                      " must be a function but " +
                      typeof s.listeners[c] +
                      " given"),
                    r
                  );
            }
            if (s.filter) {
              if ("function" !== typeof s.filter)
                return (
                  (r.valid = !1),
                  (r.error =
                    a +
                    '"filter" must be a function, but ' +
                    typeof s.filter +
                    " given"),
                  r
                );
            } else if (s.regex) {
              if (
                (o.helper.isString(s.regex) &&
                  (s.regex = new RegExp(s.regex, "g")),
                !(s.regex instanceof RegExp))
              )
                return (
                  (r.valid = !1),
                  (r.error =
                    a +
                    '"regex" property must either be a string or a RegExp object, but ' +
                    typeof s.regex +
                    " given"),
                  r
                );
              if (o.helper.isUndefined(s.replace))
                return (
                  (r.valid = !1),
                  (r.error =
                    a +
                    '"regex" extensions must implement a replace string or function'),
                  r
                );
            }
          }
          return r;
        }
        function f(e, t) {
          "use strict";
          return "\xa8E" + t.charCodeAt(0) + "E";
        }
        (o.helper = {}),
          (o.extensions = {}),
          (o.setOption = function (e, t) {
            "use strict";
            return (l[e] = t), this;
          }),
          (o.getOption = function (e) {
            "use strict";
            return l[e];
          }),
          (o.getOptions = function () {
            "use strict";
            return l;
          }),
          (o.resetOptions = function () {
            "use strict";
            l = i(!0);
          }),
          (o.setFlavor = function (e) {
            "use strict";
            if (!u.hasOwnProperty(e)) throw Error(e + " flavor was not found");
            o.resetOptions();
            var t = u[e];
            for (var n in ((c = e), t)) t.hasOwnProperty(n) && (l[n] = t[n]);
          }),
          (o.getFlavor = function () {
            "use strict";
            return c;
          }),
          (o.getFlavorOptions = function (e) {
            "use strict";
            if (u.hasOwnProperty(e)) return u[e];
          }),
          (o.getDefaultOptions = function (e) {
            "use strict";
            return i(e);
          }),
          (o.subParser = function (e, t) {
            "use strict";
            if (o.helper.isString(e)) {
              if ("undefined" === typeof t) {
                if (a.hasOwnProperty(e)) return a[e];
                throw Error("SubParser named " + e + " not registered!");
              }
              a[e] = t;
            }
          }),
          (o.extension = function (e, t) {
            "use strict";
            if (!o.helper.isString(e))
              throw Error("Extension 'name' must be a string");
            if (((e = o.helper.stdExtName(e)), o.helper.isUndefined(t))) {
              if (!s.hasOwnProperty(e))
                throw Error("Extension named " + e + " is not registered!");
              return s[e];
            }
            "function" === typeof t && (t = t()),
              o.helper.isArray(t) || (t = [t]);
            var n = p(t, e);
            if (!n.valid) throw Error(n.error);
            s[e] = t;
          }),
          (o.getAllExtensions = function () {
            "use strict";
            return s;
          }),
          (o.removeExtension = function (e) {
            "use strict";
            delete s[e];
          }),
          (o.resetExtensions = function () {
            "use strict";
            s = {};
          }),
          (o.validateExtension = function (e) {
            "use strict";
            var t = p(e, null);
            return !!t.valid || (console.warn(t.error), !1);
          }),
          o.hasOwnProperty("helper") || (o.helper = {}),
          (o.helper.isString = function (e) {
            "use strict";
            return "string" === typeof e || e instanceof String;
          }),
          (o.helper.isFunction = function (e) {
            "use strict";
            return e && "[object Function]" === {}.toString.call(e);
          }),
          (o.helper.isArray = function (e) {
            "use strict";
            return Array.isArray(e);
          }),
          (o.helper.isUndefined = function (e) {
            "use strict";
            return "undefined" === typeof e;
          }),
          (o.helper.forEach = function (e, t) {
            "use strict";
            if (o.helper.isUndefined(e))
              throw new Error("obj param is required");
            if (o.helper.isUndefined(t))
              throw new Error("callback param is required");
            if (!o.helper.isFunction(t))
              throw new Error("callback param must be a function/closure");
            if ("function" === typeof e.forEach) e.forEach(t);
            else if (o.helper.isArray(e))
              for (var n = 0; n < e.length; n++) t(e[n], n, e);
            else {
              if ("object" !== typeof e)
                throw new Error(
                  "obj does not seem to be an array or an iterable object"
                );
              for (var r in e) e.hasOwnProperty(r) && t(e[r], r, e);
            }
          }),
          (o.helper.stdExtName = function (e) {
            "use strict";
            return e
              .replace(/[_?*+\/\\.^-]/g, "")
              .replace(/\s/g, "")
              .toLowerCase();
          }),
          (o.helper.escapeCharactersCallback = f),
          (o.helper.escapeCharacters = function (e, t, n) {
            "use strict";
            var r = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
            n && (r = "\\\\" + r);
            var i = new RegExp(r, "g");
            return (e = e.replace(i, f));
          }),
          (o.helper.unescapeHTMLEntities = function (e) {
            "use strict";
            return e
              .replace(/&quot;/g, '"')
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&amp;/g, "&");
          });
        var d = function (e, t, n, r) {
          "use strict";
          var i,
            o,
            a,
            s,
            l,
            c = r || "",
            u = c.indexOf("g") > -1,
            p = new RegExp(t + "|" + n, "g" + c.replace(/g/g, "")),
            f = new RegExp(t, c.replace(/g/g, "")),
            d = [];
          do {
            for (i = 0; (a = p.exec(e)); )
              if (f.test(a[0])) i++ || (s = (o = p.lastIndex) - a[0].length);
              else if (i && !--i) {
                l = a.index + a[0].length;
                var h = {
                  left: { start: s, end: o },
                  match: { start: o, end: a.index },
                  right: { start: a.index, end: l },
                  wholeMatch: { start: s, end: l },
                };
                if ((d.push(h), !u)) return d;
              }
          } while (i && (p.lastIndex = o));
          return d;
        };
        (o.helper.matchRecursiveRegExp = function (e, t, n, r) {
          "use strict";
          for (var i = d(e, t, n, r), o = [], a = 0; a < i.length; ++a)
            o.push([
              e.slice(i[a].wholeMatch.start, i[a].wholeMatch.end),
              e.slice(i[a].match.start, i[a].match.end),
              e.slice(i[a].left.start, i[a].left.end),
              e.slice(i[a].right.start, i[a].right.end),
            ]);
          return o;
        }),
          (o.helper.replaceRecursiveRegExp = function (e, t, n, r, i) {
            "use strict";
            if (!o.helper.isFunction(t)) {
              var a = t;
              t = function () {
                return a;
              };
            }
            var s = d(e, n, r, i),
              l = e,
              c = s.length;
            if (c > 0) {
              var u = [];
              0 !== s[0].wholeMatch.start &&
                u.push(e.slice(0, s[0].wholeMatch.start));
              for (var p = 0; p < c; ++p)
                u.push(
                  t(
                    e.slice(s[p].wholeMatch.start, s[p].wholeMatch.end),
                    e.slice(s[p].match.start, s[p].match.end),
                    e.slice(s[p].left.start, s[p].left.end),
                    e.slice(s[p].right.start, s[p].right.end)
                  )
                ),
                  p < c - 1 &&
                    u.push(
                      e.slice(s[p].wholeMatch.end, s[p + 1].wholeMatch.start)
                    );
              s[c - 1].wholeMatch.end < e.length &&
                u.push(e.slice(s[c - 1].wholeMatch.end)),
                (l = u.join(""));
            }
            return l;
          }),
          (o.helper.regexIndexOf = function (e, t, n) {
            "use strict";
            if (!o.helper.isString(e))
              throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
            if (t instanceof RegExp === !1)
              throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
            var r = e.substring(n || 0).search(t);
            return r >= 0 ? r + (n || 0) : r;
          }),
          (o.helper.splitAtIndex = function (e, t) {
            "use strict";
            if (!o.helper.isString(e))
              throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
            return [e.substring(0, t), e.substring(t)];
          }),
          (o.helper.encodeEmailAddress = function (e) {
            "use strict";
            var t = [
              function (e) {
                return "&#" + e.charCodeAt(0) + ";";
              },
              function (e) {
                return "&#x" + e.charCodeAt(0).toString(16) + ";";
              },
              function (e) {
                return e;
              },
            ];
            return (e = e.replace(/./g, function (e) {
              if ("@" === e) e = t[Math.floor(2 * Math.random())](e);
              else {
                var n = Math.random();
                e = n > 0.9 ? t[2](e) : n > 0.45 ? t[1](e) : t[0](e);
              }
              return e;
            }));
          }),
          (o.helper.padEnd = function (e, t, n) {
            "use strict";
            return (
              (t >>= 0),
              (n = String(n || " ")),
              e.length > t
                ? String(e)
                : ((t -= e.length) > n.length && (n += n.repeat(t / n.length)),
                  String(e) + n.slice(0, t))
            );
          }),
          "undefined" === typeof console &&
            (console = {
              warn: function (e) {
                "use strict";
                alert(e);
              },
              log: function (e) {
                "use strict";
                alert(e);
              },
              error: function (e) {
                "use strict";
                throw e;
              },
            }),
          (o.helper.regexes = { asteriskDashAndColon: /([*_:~])/g }),
          (o.helper.emojis = {
            "+1": "\ud83d\udc4d",
            "-1": "\ud83d\udc4e",
            100: "\ud83d\udcaf",
            1234: "\ud83d\udd22",
            "1st_place_medal": "\ud83e\udd47",
            "2nd_place_medal": "\ud83e\udd48",
            "3rd_place_medal": "\ud83e\udd49",
            "8ball": "\ud83c\udfb1",
            a: "\ud83c\udd70\ufe0f",
            ab: "\ud83c\udd8e",
            abc: "\ud83d\udd24",
            abcd: "\ud83d\udd21",
            accept: "\ud83c\ude51",
            aerial_tramway: "\ud83d\udea1",
            airplane: "\u2708\ufe0f",
            alarm_clock: "\u23f0",
            alembic: "\u2697\ufe0f",
            alien: "\ud83d\udc7d",
            ambulance: "\ud83d\ude91",
            amphora: "\ud83c\udffa",
            anchor: "\u2693\ufe0f",
            angel: "\ud83d\udc7c",
            anger: "\ud83d\udca2",
            angry: "\ud83d\ude20",
            anguished: "\ud83d\ude27",
            ant: "\ud83d\udc1c",
            apple: "\ud83c\udf4e",
            aquarius: "\u2652\ufe0f",
            aries: "\u2648\ufe0f",
            arrow_backward: "\u25c0\ufe0f",
            arrow_double_down: "\u23ec",
            arrow_double_up: "\u23eb",
            arrow_down: "\u2b07\ufe0f",
            arrow_down_small: "\ud83d\udd3d",
            arrow_forward: "\u25b6\ufe0f",
            arrow_heading_down: "\u2935\ufe0f",
            arrow_heading_up: "\u2934\ufe0f",
            arrow_left: "\u2b05\ufe0f",
            arrow_lower_left: "\u2199\ufe0f",
            arrow_lower_right: "\u2198\ufe0f",
            arrow_right: "\u27a1\ufe0f",
            arrow_right_hook: "\u21aa\ufe0f",
            arrow_up: "\u2b06\ufe0f",
            arrow_up_down: "\u2195\ufe0f",
            arrow_up_small: "\ud83d\udd3c",
            arrow_upper_left: "\u2196\ufe0f",
            arrow_upper_right: "\u2197\ufe0f",
            arrows_clockwise: "\ud83d\udd03",
            arrows_counterclockwise: "\ud83d\udd04",
            art: "\ud83c\udfa8",
            articulated_lorry: "\ud83d\ude9b",
            artificial_satellite: "\ud83d\udef0",
            astonished: "\ud83d\ude32",
            athletic_shoe: "\ud83d\udc5f",
            atm: "\ud83c\udfe7",
            atom_symbol: "\u269b\ufe0f",
            avocado: "\ud83e\udd51",
            b: "\ud83c\udd71\ufe0f",
            baby: "\ud83d\udc76",
            baby_bottle: "\ud83c\udf7c",
            baby_chick: "\ud83d\udc24",
            baby_symbol: "\ud83d\udebc",
            back: "\ud83d\udd19",
            bacon: "\ud83e\udd53",
            badminton: "\ud83c\udff8",
            baggage_claim: "\ud83d\udec4",
            baguette_bread: "\ud83e\udd56",
            balance_scale: "\u2696\ufe0f",
            balloon: "\ud83c\udf88",
            ballot_box: "\ud83d\uddf3",
            ballot_box_with_check: "\u2611\ufe0f",
            bamboo: "\ud83c\udf8d",
            banana: "\ud83c\udf4c",
            bangbang: "\u203c\ufe0f",
            bank: "\ud83c\udfe6",
            bar_chart: "\ud83d\udcca",
            barber: "\ud83d\udc88",
            baseball: "\u26be\ufe0f",
            basketball: "\ud83c\udfc0",
            basketball_man: "\u26f9\ufe0f",
            basketball_woman: "\u26f9\ufe0f&zwj;\u2640\ufe0f",
            bat: "\ud83e\udd87",
            bath: "\ud83d\udec0",
            bathtub: "\ud83d\udec1",
            battery: "\ud83d\udd0b",
            beach_umbrella: "\ud83c\udfd6",
            bear: "\ud83d\udc3b",
            bed: "\ud83d\udecf",
            bee: "\ud83d\udc1d",
            beer: "\ud83c\udf7a",
            beers: "\ud83c\udf7b",
            beetle: "\ud83d\udc1e",
            beginner: "\ud83d\udd30",
            bell: "\ud83d\udd14",
            bellhop_bell: "\ud83d\udece",
            bento: "\ud83c\udf71",
            biking_man: "\ud83d\udeb4",
            bike: "\ud83d\udeb2",
            biking_woman: "\ud83d\udeb4&zwj;\u2640\ufe0f",
            bikini: "\ud83d\udc59",
            biohazard: "\u2623\ufe0f",
            bird: "\ud83d\udc26",
            birthday: "\ud83c\udf82",
            black_circle: "\u26ab\ufe0f",
            black_flag: "\ud83c\udff4",
            black_heart: "\ud83d\udda4",
            black_joker: "\ud83c\udccf",
            black_large_square: "\u2b1b\ufe0f",
            black_medium_small_square: "\u25fe\ufe0f",
            black_medium_square: "\u25fc\ufe0f",
            black_nib: "\u2712\ufe0f",
            black_small_square: "\u25aa\ufe0f",
            black_square_button: "\ud83d\udd32",
            blonde_man: "\ud83d\udc71",
            blonde_woman: "\ud83d\udc71&zwj;\u2640\ufe0f",
            blossom: "\ud83c\udf3c",
            blowfish: "\ud83d\udc21",
            blue_book: "\ud83d\udcd8",
            blue_car: "\ud83d\ude99",
            blue_heart: "\ud83d\udc99",
            blush: "\ud83d\ude0a",
            boar: "\ud83d\udc17",
            boat: "\u26f5\ufe0f",
            bomb: "\ud83d\udca3",
            book: "\ud83d\udcd6",
            bookmark: "\ud83d\udd16",
            bookmark_tabs: "\ud83d\udcd1",
            books: "\ud83d\udcda",
            boom: "\ud83d\udca5",
            boot: "\ud83d\udc62",
            bouquet: "\ud83d\udc90",
            bowing_man: "\ud83d\ude47",
            bow_and_arrow: "\ud83c\udff9",
            bowing_woman: "\ud83d\ude47&zwj;\u2640\ufe0f",
            bowling: "\ud83c\udfb3",
            boxing_glove: "\ud83e\udd4a",
            boy: "\ud83d\udc66",
            bread: "\ud83c\udf5e",
            bride_with_veil: "\ud83d\udc70",
            bridge_at_night: "\ud83c\udf09",
            briefcase: "\ud83d\udcbc",
            broken_heart: "\ud83d\udc94",
            bug: "\ud83d\udc1b",
            building_construction: "\ud83c\udfd7",
            bulb: "\ud83d\udca1",
            bullettrain_front: "\ud83d\ude85",
            bullettrain_side: "\ud83d\ude84",
            burrito: "\ud83c\udf2f",
            bus: "\ud83d\ude8c",
            business_suit_levitating: "\ud83d\udd74",
            busstop: "\ud83d\ude8f",
            bust_in_silhouette: "\ud83d\udc64",
            busts_in_silhouette: "\ud83d\udc65",
            butterfly: "\ud83e\udd8b",
            cactus: "\ud83c\udf35",
            cake: "\ud83c\udf70",
            calendar: "\ud83d\udcc6",
            call_me_hand: "\ud83e\udd19",
            calling: "\ud83d\udcf2",
            camel: "\ud83d\udc2b",
            camera: "\ud83d\udcf7",
            camera_flash: "\ud83d\udcf8",
            camping: "\ud83c\udfd5",
            cancer: "\u264b\ufe0f",
            candle: "\ud83d\udd6f",
            candy: "\ud83c\udf6c",
            canoe: "\ud83d\udef6",
            capital_abcd: "\ud83d\udd20",
            capricorn: "\u2651\ufe0f",
            car: "\ud83d\ude97",
            card_file_box: "\ud83d\uddc3",
            card_index: "\ud83d\udcc7",
            card_index_dividers: "\ud83d\uddc2",
            carousel_horse: "\ud83c\udfa0",
            carrot: "\ud83e\udd55",
            cat: "\ud83d\udc31",
            cat2: "\ud83d\udc08",
            cd: "\ud83d\udcbf",
            chains: "\u26d3",
            champagne: "\ud83c\udf7e",
            chart: "\ud83d\udcb9",
            chart_with_downwards_trend: "\ud83d\udcc9",
            chart_with_upwards_trend: "\ud83d\udcc8",
            checkered_flag: "\ud83c\udfc1",
            cheese: "\ud83e\uddc0",
            cherries: "\ud83c\udf52",
            cherry_blossom: "\ud83c\udf38",
            chestnut: "\ud83c\udf30",
            chicken: "\ud83d\udc14",
            children_crossing: "\ud83d\udeb8",
            chipmunk: "\ud83d\udc3f",
            chocolate_bar: "\ud83c\udf6b",
            christmas_tree: "\ud83c\udf84",
            church: "\u26ea\ufe0f",
            cinema: "\ud83c\udfa6",
            circus_tent: "\ud83c\udfaa",
            city_sunrise: "\ud83c\udf07",
            city_sunset: "\ud83c\udf06",
            cityscape: "\ud83c\udfd9",
            cl: "\ud83c\udd91",
            clamp: "\ud83d\udddc",
            clap: "\ud83d\udc4f",
            clapper: "\ud83c\udfac",
            classical_building: "\ud83c\udfdb",
            clinking_glasses: "\ud83e\udd42",
            clipboard: "\ud83d\udccb",
            clock1: "\ud83d\udd50",
            clock10: "\ud83d\udd59",
            clock1030: "\ud83d\udd65",
            clock11: "\ud83d\udd5a",
            clock1130: "\ud83d\udd66",
            clock12: "\ud83d\udd5b",
            clock1230: "\ud83d\udd67",
            clock130: "\ud83d\udd5c",
            clock2: "\ud83d\udd51",
            clock230: "\ud83d\udd5d",
            clock3: "\ud83d\udd52",
            clock330: "\ud83d\udd5e",
            clock4: "\ud83d\udd53",
            clock430: "\ud83d\udd5f",
            clock5: "\ud83d\udd54",
            clock530: "\ud83d\udd60",
            clock6: "\ud83d\udd55",
            clock630: "\ud83d\udd61",
            clock7: "\ud83d\udd56",
            clock730: "\ud83d\udd62",
            clock8: "\ud83d\udd57",
            clock830: "\ud83d\udd63",
            clock9: "\ud83d\udd58",
            clock930: "\ud83d\udd64",
            closed_book: "\ud83d\udcd5",
            closed_lock_with_key: "\ud83d\udd10",
            closed_umbrella: "\ud83c\udf02",
            cloud: "\u2601\ufe0f",
            cloud_with_lightning: "\ud83c\udf29",
            cloud_with_lightning_and_rain: "\u26c8",
            cloud_with_rain: "\ud83c\udf27",
            cloud_with_snow: "\ud83c\udf28",
            clown_face: "\ud83e\udd21",
            clubs: "\u2663\ufe0f",
            cocktail: "\ud83c\udf78",
            coffee: "\u2615\ufe0f",
            coffin: "\u26b0\ufe0f",
            cold_sweat: "\ud83d\ude30",
            comet: "\u2604\ufe0f",
            computer: "\ud83d\udcbb",
            computer_mouse: "\ud83d\uddb1",
            confetti_ball: "\ud83c\udf8a",
            confounded: "\ud83d\ude16",
            confused: "\ud83d\ude15",
            congratulations: "\u3297\ufe0f",
            construction: "\ud83d\udea7",
            construction_worker_man: "\ud83d\udc77",
            construction_worker_woman: "\ud83d\udc77&zwj;\u2640\ufe0f",
            control_knobs: "\ud83c\udf9b",
            convenience_store: "\ud83c\udfea",
            cookie: "\ud83c\udf6a",
            cool: "\ud83c\udd92",
            policeman: "\ud83d\udc6e",
            copyright: "\xa9\ufe0f",
            corn: "\ud83c\udf3d",
            couch_and_lamp: "\ud83d\udecb",
            couple: "\ud83d\udc6b",
            couple_with_heart_woman_man: "\ud83d\udc91",
            couple_with_heart_man_man:
              "\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc68",
            couple_with_heart_woman_woman:
              "\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc69",
            couplekiss_man_man:
              "\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc68",
            couplekiss_man_woman: "\ud83d\udc8f",
            couplekiss_woman_woman:
              "\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc69",
            cow: "\ud83d\udc2e",
            cow2: "\ud83d\udc04",
            cowboy_hat_face: "\ud83e\udd20",
            crab: "\ud83e\udd80",
            crayon: "\ud83d\udd8d",
            credit_card: "\ud83d\udcb3",
            crescent_moon: "\ud83c\udf19",
            cricket: "\ud83c\udfcf",
            crocodile: "\ud83d\udc0a",
            croissant: "\ud83e\udd50",
            crossed_fingers: "\ud83e\udd1e",
            crossed_flags: "\ud83c\udf8c",
            crossed_swords: "\u2694\ufe0f",
            crown: "\ud83d\udc51",
            cry: "\ud83d\ude22",
            crying_cat_face: "\ud83d\ude3f",
            crystal_ball: "\ud83d\udd2e",
            cucumber: "\ud83e\udd52",
            cupid: "\ud83d\udc98",
            curly_loop: "\u27b0",
            currency_exchange: "\ud83d\udcb1",
            curry: "\ud83c\udf5b",
            custard: "\ud83c\udf6e",
            customs: "\ud83d\udec3",
            cyclone: "\ud83c\udf00",
            dagger: "\ud83d\udde1",
            dancer: "\ud83d\udc83",
            dancing_women: "\ud83d\udc6f",
            dancing_men: "\ud83d\udc6f&zwj;\u2642\ufe0f",
            dango: "\ud83c\udf61",
            dark_sunglasses: "\ud83d\udd76",
            dart: "\ud83c\udfaf",
            dash: "\ud83d\udca8",
            date: "\ud83d\udcc5",
            deciduous_tree: "\ud83c\udf33",
            deer: "\ud83e\udd8c",
            department_store: "\ud83c\udfec",
            derelict_house: "\ud83c\udfda",
            desert: "\ud83c\udfdc",
            desert_island: "\ud83c\udfdd",
            desktop_computer: "\ud83d\udda5",
            male_detective: "\ud83d\udd75\ufe0f",
            diamond_shape_with_a_dot_inside: "\ud83d\udca0",
            diamonds: "\u2666\ufe0f",
            disappointed: "\ud83d\ude1e",
            disappointed_relieved: "\ud83d\ude25",
            dizzy: "\ud83d\udcab",
            dizzy_face: "\ud83d\ude35",
            do_not_litter: "\ud83d\udeaf",
            dog: "\ud83d\udc36",
            dog2: "\ud83d\udc15",
            dollar: "\ud83d\udcb5",
            dolls: "\ud83c\udf8e",
            dolphin: "\ud83d\udc2c",
            door: "\ud83d\udeaa",
            doughnut: "\ud83c\udf69",
            dove: "\ud83d\udd4a",
            dragon: "\ud83d\udc09",
            dragon_face: "\ud83d\udc32",
            dress: "\ud83d\udc57",
            dromedary_camel: "\ud83d\udc2a",
            drooling_face: "\ud83e\udd24",
            droplet: "\ud83d\udca7",
            drum: "\ud83e\udd41",
            duck: "\ud83e\udd86",
            dvd: "\ud83d\udcc0",
            "e-mail": "\ud83d\udce7",
            eagle: "\ud83e\udd85",
            ear: "\ud83d\udc42",
            ear_of_rice: "\ud83c\udf3e",
            earth_africa: "\ud83c\udf0d",
            earth_americas: "\ud83c\udf0e",
            earth_asia: "\ud83c\udf0f",
            egg: "\ud83e\udd5a",
            eggplant: "\ud83c\udf46",
            eight_pointed_black_star: "\u2734\ufe0f",
            eight_spoked_asterisk: "\u2733\ufe0f",
            electric_plug: "\ud83d\udd0c",
            elephant: "\ud83d\udc18",
            email: "\u2709\ufe0f",
            end: "\ud83d\udd1a",
            envelope_with_arrow: "\ud83d\udce9",
            euro: "\ud83d\udcb6",
            european_castle: "\ud83c\udff0",
            european_post_office: "\ud83c\udfe4",
            evergreen_tree: "\ud83c\udf32",
            exclamation: "\u2757\ufe0f",
            expressionless: "\ud83d\ude11",
            eye: "\ud83d\udc41",
            eye_speech_bubble: "\ud83d\udc41&zwj;\ud83d\udde8",
            eyeglasses: "\ud83d\udc53",
            eyes: "\ud83d\udc40",
            face_with_head_bandage: "\ud83e\udd15",
            face_with_thermometer: "\ud83e\udd12",
            fist_oncoming: "\ud83d\udc4a",
            factory: "\ud83c\udfed",
            fallen_leaf: "\ud83c\udf42",
            family_man_woman_boy: "\ud83d\udc6a",
            family_man_boy: "\ud83d\udc68&zwj;\ud83d\udc66",
            family_man_boy_boy:
              "\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
            family_man_girl: "\ud83d\udc68&zwj;\ud83d\udc67",
            family_man_girl_boy:
              "\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
            family_man_girl_girl:
              "\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
            family_man_man_boy:
              "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66",
            family_man_man_boy_boy:
              "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
            family_man_man_girl:
              "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67",
            family_man_man_girl_boy:
              "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
            family_man_man_girl_girl:
              "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
            family_man_woman_boy_boy:
              "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
            family_man_woman_girl:
              "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67",
            family_man_woman_girl_boy:
              "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
            family_man_woman_girl_girl:
              "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
            family_woman_boy: "\ud83d\udc69&zwj;\ud83d\udc66",
            family_woman_boy_boy:
              "\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
            family_woman_girl: "\ud83d\udc69&zwj;\ud83d\udc67",
            family_woman_girl_boy:
              "\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
            family_woman_girl_girl:
              "\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
            family_woman_woman_boy:
              "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66",
            family_woman_woman_boy_boy:
              "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
            family_woman_woman_girl:
              "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67",
            family_woman_woman_girl_boy:
              "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
            family_woman_woman_girl_girl:
              "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
            fast_forward: "\u23e9",
            fax: "\ud83d\udce0",
            fearful: "\ud83d\ude28",
            feet: "\ud83d\udc3e",
            female_detective: "\ud83d\udd75\ufe0f&zwj;\u2640\ufe0f",
            ferris_wheel: "\ud83c\udfa1",
            ferry: "\u26f4",
            field_hockey: "\ud83c\udfd1",
            file_cabinet: "\ud83d\uddc4",
            file_folder: "\ud83d\udcc1",
            film_projector: "\ud83d\udcfd",
            film_strip: "\ud83c\udf9e",
            fire: "\ud83d\udd25",
            fire_engine: "\ud83d\ude92",
            fireworks: "\ud83c\udf86",
            first_quarter_moon: "\ud83c\udf13",
            first_quarter_moon_with_face: "\ud83c\udf1b",
            fish: "\ud83d\udc1f",
            fish_cake: "\ud83c\udf65",
            fishing_pole_and_fish: "\ud83c\udfa3",
            fist_raised: "\u270a",
            fist_left: "\ud83e\udd1b",
            fist_right: "\ud83e\udd1c",
            flags: "\ud83c\udf8f",
            flashlight: "\ud83d\udd26",
            fleur_de_lis: "\u269c\ufe0f",
            flight_arrival: "\ud83d\udeec",
            flight_departure: "\ud83d\udeeb",
            floppy_disk: "\ud83d\udcbe",
            flower_playing_cards: "\ud83c\udfb4",
            flushed: "\ud83d\ude33",
            fog: "\ud83c\udf2b",
            foggy: "\ud83c\udf01",
            football: "\ud83c\udfc8",
            footprints: "\ud83d\udc63",
            fork_and_knife: "\ud83c\udf74",
            fountain: "\u26f2\ufe0f",
            fountain_pen: "\ud83d\udd8b",
            four_leaf_clover: "\ud83c\udf40",
            fox_face: "\ud83e\udd8a",
            framed_picture: "\ud83d\uddbc",
            free: "\ud83c\udd93",
            fried_egg: "\ud83c\udf73",
            fried_shrimp: "\ud83c\udf64",
            fries: "\ud83c\udf5f",
            frog: "\ud83d\udc38",
            frowning: "\ud83d\ude26",
            frowning_face: "\u2639\ufe0f",
            frowning_man: "\ud83d\ude4d&zwj;\u2642\ufe0f",
            frowning_woman: "\ud83d\ude4d",
            middle_finger: "\ud83d\udd95",
            fuelpump: "\u26fd\ufe0f",
            full_moon: "\ud83c\udf15",
            full_moon_with_face: "\ud83c\udf1d",
            funeral_urn: "\u26b1\ufe0f",
            game_die: "\ud83c\udfb2",
            gear: "\u2699\ufe0f",
            gem: "\ud83d\udc8e",
            gemini: "\u264a\ufe0f",
            ghost: "\ud83d\udc7b",
            gift: "\ud83c\udf81",
            gift_heart: "\ud83d\udc9d",
            girl: "\ud83d\udc67",
            globe_with_meridians: "\ud83c\udf10",
            goal_net: "\ud83e\udd45",
            goat: "\ud83d\udc10",
            golf: "\u26f3\ufe0f",
            golfing_man: "\ud83c\udfcc\ufe0f",
            golfing_woman: "\ud83c\udfcc\ufe0f&zwj;\u2640\ufe0f",
            gorilla: "\ud83e\udd8d",
            grapes: "\ud83c\udf47",
            green_apple: "\ud83c\udf4f",
            green_book: "\ud83d\udcd7",
            green_heart: "\ud83d\udc9a",
            green_salad: "\ud83e\udd57",
            grey_exclamation: "\u2755",
            grey_question: "\u2754",
            grimacing: "\ud83d\ude2c",
            grin: "\ud83d\ude01",
            grinning: "\ud83d\ude00",
            guardsman: "\ud83d\udc82",
            guardswoman: "\ud83d\udc82&zwj;\u2640\ufe0f",
            guitar: "\ud83c\udfb8",
            gun: "\ud83d\udd2b",
            haircut_woman: "\ud83d\udc87",
            haircut_man: "\ud83d\udc87&zwj;\u2642\ufe0f",
            hamburger: "\ud83c\udf54",
            hammer: "\ud83d\udd28",
            hammer_and_pick: "\u2692",
            hammer_and_wrench: "\ud83d\udee0",
            hamster: "\ud83d\udc39",
            hand: "\u270b",
            handbag: "\ud83d\udc5c",
            handshake: "\ud83e\udd1d",
            hankey: "\ud83d\udca9",
            hatched_chick: "\ud83d\udc25",
            hatching_chick: "\ud83d\udc23",
            headphones: "\ud83c\udfa7",
            hear_no_evil: "\ud83d\ude49",
            heart: "\u2764\ufe0f",
            heart_decoration: "\ud83d\udc9f",
            heart_eyes: "\ud83d\ude0d",
            heart_eyes_cat: "\ud83d\ude3b",
            heartbeat: "\ud83d\udc93",
            heartpulse: "\ud83d\udc97",
            hearts: "\u2665\ufe0f",
            heavy_check_mark: "\u2714\ufe0f",
            heavy_division_sign: "\u2797",
            heavy_dollar_sign: "\ud83d\udcb2",
            heavy_heart_exclamation: "\u2763\ufe0f",
            heavy_minus_sign: "\u2796",
            heavy_multiplication_x: "\u2716\ufe0f",
            heavy_plus_sign: "\u2795",
            helicopter: "\ud83d\ude81",
            herb: "\ud83c\udf3f",
            hibiscus: "\ud83c\udf3a",
            high_brightness: "\ud83d\udd06",
            high_heel: "\ud83d\udc60",
            hocho: "\ud83d\udd2a",
            hole: "\ud83d\udd73",
            honey_pot: "\ud83c\udf6f",
            horse: "\ud83d\udc34",
            horse_racing: "\ud83c\udfc7",
            hospital: "\ud83c\udfe5",
            hot_pepper: "\ud83c\udf36",
            hotdog: "\ud83c\udf2d",
            hotel: "\ud83c\udfe8",
            hotsprings: "\u2668\ufe0f",
            hourglass: "\u231b\ufe0f",
            hourglass_flowing_sand: "\u23f3",
            house: "\ud83c\udfe0",
            house_with_garden: "\ud83c\udfe1",
            houses: "\ud83c\udfd8",
            hugs: "\ud83e\udd17",
            hushed: "\ud83d\ude2f",
            ice_cream: "\ud83c\udf68",
            ice_hockey: "\ud83c\udfd2",
            ice_skate: "\u26f8",
            icecream: "\ud83c\udf66",
            id: "\ud83c\udd94",
            ideograph_advantage: "\ud83c\ude50",
            imp: "\ud83d\udc7f",
            inbox_tray: "\ud83d\udce5",
            incoming_envelope: "\ud83d\udce8",
            tipping_hand_woman: "\ud83d\udc81",
            information_source: "\u2139\ufe0f",
            innocent: "\ud83d\ude07",
            interrobang: "\u2049\ufe0f",
            iphone: "\ud83d\udcf1",
            izakaya_lantern: "\ud83c\udfee",
            jack_o_lantern: "\ud83c\udf83",
            japan: "\ud83d\uddfe",
            japanese_castle: "\ud83c\udfef",
            japanese_goblin: "\ud83d\udc7a",
            japanese_ogre: "\ud83d\udc79",
            jeans: "\ud83d\udc56",
            joy: "\ud83d\ude02",
            joy_cat: "\ud83d\ude39",
            joystick: "\ud83d\udd79",
            kaaba: "\ud83d\udd4b",
            key: "\ud83d\udd11",
            keyboard: "\u2328\ufe0f",
            keycap_ten: "\ud83d\udd1f",
            kick_scooter: "\ud83d\udef4",
            kimono: "\ud83d\udc58",
            kiss: "\ud83d\udc8b",
            kissing: "\ud83d\ude17",
            kissing_cat: "\ud83d\ude3d",
            kissing_closed_eyes: "\ud83d\ude1a",
            kissing_heart: "\ud83d\ude18",
            kissing_smiling_eyes: "\ud83d\ude19",
            kiwi_fruit: "\ud83e\udd5d",
            koala: "\ud83d\udc28",
            koko: "\ud83c\ude01",
            label: "\ud83c\udff7",
            large_blue_circle: "\ud83d\udd35",
            large_blue_diamond: "\ud83d\udd37",
            large_orange_diamond: "\ud83d\udd36",
            last_quarter_moon: "\ud83c\udf17",
            last_quarter_moon_with_face: "\ud83c\udf1c",
            latin_cross: "\u271d\ufe0f",
            laughing: "\ud83d\ude06",
            leaves: "\ud83c\udf43",
            ledger: "\ud83d\udcd2",
            left_luggage: "\ud83d\udec5",
            left_right_arrow: "\u2194\ufe0f",
            leftwards_arrow_with_hook: "\u21a9\ufe0f",
            lemon: "\ud83c\udf4b",
            leo: "\u264c\ufe0f",
            leopard: "\ud83d\udc06",
            level_slider: "\ud83c\udf9a",
            libra: "\u264e\ufe0f",
            light_rail: "\ud83d\ude88",
            link: "\ud83d\udd17",
            lion: "\ud83e\udd81",
            lips: "\ud83d\udc44",
            lipstick: "\ud83d\udc84",
            lizard: "\ud83e\udd8e",
            lock: "\ud83d\udd12",
            lock_with_ink_pen: "\ud83d\udd0f",
            lollipop: "\ud83c\udf6d",
            loop: "\u27bf",
            loud_sound: "\ud83d\udd0a",
            loudspeaker: "\ud83d\udce2",
            love_hotel: "\ud83c\udfe9",
            love_letter: "\ud83d\udc8c",
            low_brightness: "\ud83d\udd05",
            lying_face: "\ud83e\udd25",
            m: "\u24c2\ufe0f",
            mag: "\ud83d\udd0d",
            mag_right: "\ud83d\udd0e",
            mahjong: "\ud83c\udc04\ufe0f",
            mailbox: "\ud83d\udceb",
            mailbox_closed: "\ud83d\udcea",
            mailbox_with_mail: "\ud83d\udcec",
            mailbox_with_no_mail: "\ud83d\udced",
            man: "\ud83d\udc68",
            man_artist: "\ud83d\udc68&zwj;\ud83c\udfa8",
            man_astronaut: "\ud83d\udc68&zwj;\ud83d\ude80",
            man_cartwheeling: "\ud83e\udd38&zwj;\u2642\ufe0f",
            man_cook: "\ud83d\udc68&zwj;\ud83c\udf73",
            man_dancing: "\ud83d\udd7a",
            man_facepalming: "\ud83e\udd26&zwj;\u2642\ufe0f",
            man_factory_worker: "\ud83d\udc68&zwj;\ud83c\udfed",
            man_farmer: "\ud83d\udc68&zwj;\ud83c\udf3e",
            man_firefighter: "\ud83d\udc68&zwj;\ud83d\ude92",
            man_health_worker: "\ud83d\udc68&zwj;\u2695\ufe0f",
            man_in_tuxedo: "\ud83e\udd35",
            man_judge: "\ud83d\udc68&zwj;\u2696\ufe0f",
            man_juggling: "\ud83e\udd39&zwj;\u2642\ufe0f",
            man_mechanic: "\ud83d\udc68&zwj;\ud83d\udd27",
            man_office_worker: "\ud83d\udc68&zwj;\ud83d\udcbc",
            man_pilot: "\ud83d\udc68&zwj;\u2708\ufe0f",
            man_playing_handball: "\ud83e\udd3e&zwj;\u2642\ufe0f",
            man_playing_water_polo: "\ud83e\udd3d&zwj;\u2642\ufe0f",
            man_scientist: "\ud83d\udc68&zwj;\ud83d\udd2c",
            man_shrugging: "\ud83e\udd37&zwj;\u2642\ufe0f",
            man_singer: "\ud83d\udc68&zwj;\ud83c\udfa4",
            man_student: "\ud83d\udc68&zwj;\ud83c\udf93",
            man_teacher: "\ud83d\udc68&zwj;\ud83c\udfeb",
            man_technologist: "\ud83d\udc68&zwj;\ud83d\udcbb",
            man_with_gua_pi_mao: "\ud83d\udc72",
            man_with_turban: "\ud83d\udc73",
            tangerine: "\ud83c\udf4a",
            mans_shoe: "\ud83d\udc5e",
            mantelpiece_clock: "\ud83d\udd70",
            maple_leaf: "\ud83c\udf41",
            martial_arts_uniform: "\ud83e\udd4b",
            mask: "\ud83d\ude37",
            massage_woman: "\ud83d\udc86",
            massage_man: "\ud83d\udc86&zwj;\u2642\ufe0f",
            meat_on_bone: "\ud83c\udf56",
            medal_military: "\ud83c\udf96",
            medal_sports: "\ud83c\udfc5",
            mega: "\ud83d\udce3",
            melon: "\ud83c\udf48",
            memo: "\ud83d\udcdd",
            men_wrestling: "\ud83e\udd3c&zwj;\u2642\ufe0f",
            menorah: "\ud83d\udd4e",
            mens: "\ud83d\udeb9",
            metal: "\ud83e\udd18",
            metro: "\ud83d\ude87",
            microphone: "\ud83c\udfa4",
            microscope: "\ud83d\udd2c",
            milk_glass: "\ud83e\udd5b",
            milky_way: "\ud83c\udf0c",
            minibus: "\ud83d\ude90",
            minidisc: "\ud83d\udcbd",
            mobile_phone_off: "\ud83d\udcf4",
            money_mouth_face: "\ud83e\udd11",
            money_with_wings: "\ud83d\udcb8",
            moneybag: "\ud83d\udcb0",
            monkey: "\ud83d\udc12",
            monkey_face: "\ud83d\udc35",
            monorail: "\ud83d\ude9d",
            moon: "\ud83c\udf14",
            mortar_board: "\ud83c\udf93",
            mosque: "\ud83d\udd4c",
            motor_boat: "\ud83d\udee5",
            motor_scooter: "\ud83d\udef5",
            motorcycle: "\ud83c\udfcd",
            motorway: "\ud83d\udee3",
            mount_fuji: "\ud83d\uddfb",
            mountain: "\u26f0",
            mountain_biking_man: "\ud83d\udeb5",
            mountain_biking_woman: "\ud83d\udeb5&zwj;\u2640\ufe0f",
            mountain_cableway: "\ud83d\udea0",
            mountain_railway: "\ud83d\ude9e",
            mountain_snow: "\ud83c\udfd4",
            mouse: "\ud83d\udc2d",
            mouse2: "\ud83d\udc01",
            movie_camera: "\ud83c\udfa5",
            moyai: "\ud83d\uddff",
            mrs_claus: "\ud83e\udd36",
            muscle: "\ud83d\udcaa",
            mushroom: "\ud83c\udf44",
            musical_keyboard: "\ud83c\udfb9",
            musical_note: "\ud83c\udfb5",
            musical_score: "\ud83c\udfbc",
            mute: "\ud83d\udd07",
            nail_care: "\ud83d\udc85",
            name_badge: "\ud83d\udcdb",
            national_park: "\ud83c\udfde",
            nauseated_face: "\ud83e\udd22",
            necktie: "\ud83d\udc54",
            negative_squared_cross_mark: "\u274e",
            nerd_face: "\ud83e\udd13",
            neutral_face: "\ud83d\ude10",
            new: "\ud83c\udd95",
            new_moon: "\ud83c\udf11",
            new_moon_with_face: "\ud83c\udf1a",
            newspaper: "\ud83d\udcf0",
            newspaper_roll: "\ud83d\uddde",
            next_track_button: "\u23ed",
            ng: "\ud83c\udd96",
            no_good_man: "\ud83d\ude45&zwj;\u2642\ufe0f",
            no_good_woman: "\ud83d\ude45",
            night_with_stars: "\ud83c\udf03",
            no_bell: "\ud83d\udd15",
            no_bicycles: "\ud83d\udeb3",
            no_entry: "\u26d4\ufe0f",
            no_entry_sign: "\ud83d\udeab",
            no_mobile_phones: "\ud83d\udcf5",
            no_mouth: "\ud83d\ude36",
            no_pedestrians: "\ud83d\udeb7",
            no_smoking: "\ud83d\udead",
            "non-potable_water": "\ud83d\udeb1",
            nose: "\ud83d\udc43",
            notebook: "\ud83d\udcd3",
            notebook_with_decorative_cover: "\ud83d\udcd4",
            notes: "\ud83c\udfb6",
            nut_and_bolt: "\ud83d\udd29",
            o: "\u2b55\ufe0f",
            o2: "\ud83c\udd7e\ufe0f",
            ocean: "\ud83c\udf0a",
            octopus: "\ud83d\udc19",
            oden: "\ud83c\udf62",
            office: "\ud83c\udfe2",
            oil_drum: "\ud83d\udee2",
            ok: "\ud83c\udd97",
            ok_hand: "\ud83d\udc4c",
            ok_man: "\ud83d\ude46&zwj;\u2642\ufe0f",
            ok_woman: "\ud83d\ude46",
            old_key: "\ud83d\udddd",
            older_man: "\ud83d\udc74",
            older_woman: "\ud83d\udc75",
            om: "\ud83d\udd49",
            on: "\ud83d\udd1b",
            oncoming_automobile: "\ud83d\ude98",
            oncoming_bus: "\ud83d\ude8d",
            oncoming_police_car: "\ud83d\ude94",
            oncoming_taxi: "\ud83d\ude96",
            open_file_folder: "\ud83d\udcc2",
            open_hands: "\ud83d\udc50",
            open_mouth: "\ud83d\ude2e",
            open_umbrella: "\u2602\ufe0f",
            ophiuchus: "\u26ce",
            orange_book: "\ud83d\udcd9",
            orthodox_cross: "\u2626\ufe0f",
            outbox_tray: "\ud83d\udce4",
            owl: "\ud83e\udd89",
            ox: "\ud83d\udc02",
            package: "\ud83d\udce6",
            page_facing_up: "\ud83d\udcc4",
            page_with_curl: "\ud83d\udcc3",
            pager: "\ud83d\udcdf",
            paintbrush: "\ud83d\udd8c",
            palm_tree: "\ud83c\udf34",
            pancakes: "\ud83e\udd5e",
            panda_face: "\ud83d\udc3c",
            paperclip: "\ud83d\udcce",
            paperclips: "\ud83d\udd87",
            parasol_on_ground: "\u26f1",
            parking: "\ud83c\udd7f\ufe0f",
            part_alternation_mark: "\u303d\ufe0f",
            partly_sunny: "\u26c5\ufe0f",
            passenger_ship: "\ud83d\udef3",
            passport_control: "\ud83d\udec2",
            pause_button: "\u23f8",
            peace_symbol: "\u262e\ufe0f",
            peach: "\ud83c\udf51",
            peanuts: "\ud83e\udd5c",
            pear: "\ud83c\udf50",
            pen: "\ud83d\udd8a",
            pencil2: "\u270f\ufe0f",
            penguin: "\ud83d\udc27",
            pensive: "\ud83d\ude14",
            performing_arts: "\ud83c\udfad",
            persevere: "\ud83d\ude23",
            person_fencing: "\ud83e\udd3a",
            pouting_woman: "\ud83d\ude4e",
            phone: "\u260e\ufe0f",
            pick: "\u26cf",
            pig: "\ud83d\udc37",
            pig2: "\ud83d\udc16",
            pig_nose: "\ud83d\udc3d",
            pill: "\ud83d\udc8a",
            pineapple: "\ud83c\udf4d",
            ping_pong: "\ud83c\udfd3",
            pisces: "\u2653\ufe0f",
            pizza: "\ud83c\udf55",
            place_of_worship: "\ud83d\uded0",
            plate_with_cutlery: "\ud83c\udf7d",
            play_or_pause_button: "\u23ef",
            point_down: "\ud83d\udc47",
            point_left: "\ud83d\udc48",
            point_right: "\ud83d\udc49",
            point_up: "\u261d\ufe0f",
            point_up_2: "\ud83d\udc46",
            police_car: "\ud83d\ude93",
            policewoman: "\ud83d\udc6e&zwj;\u2640\ufe0f",
            poodle: "\ud83d\udc29",
            popcorn: "\ud83c\udf7f",
            post_office: "\ud83c\udfe3",
            postal_horn: "\ud83d\udcef",
            postbox: "\ud83d\udcee",
            potable_water: "\ud83d\udeb0",
            potato: "\ud83e\udd54",
            pouch: "\ud83d\udc5d",
            poultry_leg: "\ud83c\udf57",
            pound: "\ud83d\udcb7",
            rage: "\ud83d\ude21",
            pouting_cat: "\ud83d\ude3e",
            pouting_man: "\ud83d\ude4e&zwj;\u2642\ufe0f",
            pray: "\ud83d\ude4f",
            prayer_beads: "\ud83d\udcff",
            pregnant_woman: "\ud83e\udd30",
            previous_track_button: "\u23ee",
            prince: "\ud83e\udd34",
            princess: "\ud83d\udc78",
            printer: "\ud83d\udda8",
            purple_heart: "\ud83d\udc9c",
            purse: "\ud83d\udc5b",
            pushpin: "\ud83d\udccc",
            put_litter_in_its_place: "\ud83d\udeae",
            question: "\u2753",
            rabbit: "\ud83d\udc30",
            rabbit2: "\ud83d\udc07",
            racehorse: "\ud83d\udc0e",
            racing_car: "\ud83c\udfce",
            radio: "\ud83d\udcfb",
            radio_button: "\ud83d\udd18",
            radioactive: "\u2622\ufe0f",
            railway_car: "\ud83d\ude83",
            railway_track: "\ud83d\udee4",
            rainbow: "\ud83c\udf08",
            rainbow_flag: "\ud83c\udff3\ufe0f&zwj;\ud83c\udf08",
            raised_back_of_hand: "\ud83e\udd1a",
            raised_hand_with_fingers_splayed: "\ud83d\udd90",
            raised_hands: "\ud83d\ude4c",
            raising_hand_woman: "\ud83d\ude4b",
            raising_hand_man: "\ud83d\ude4b&zwj;\u2642\ufe0f",
            ram: "\ud83d\udc0f",
            ramen: "\ud83c\udf5c",
            rat: "\ud83d\udc00",
            record_button: "\u23fa",
            recycle: "\u267b\ufe0f",
            red_circle: "\ud83d\udd34",
            registered: "\xae\ufe0f",
            relaxed: "\u263a\ufe0f",
            relieved: "\ud83d\ude0c",
            reminder_ribbon: "\ud83c\udf97",
            repeat: "\ud83d\udd01",
            repeat_one: "\ud83d\udd02",
            rescue_worker_helmet: "\u26d1",
            restroom: "\ud83d\udebb",
            revolving_hearts: "\ud83d\udc9e",
            rewind: "\u23ea",
            rhinoceros: "\ud83e\udd8f",
            ribbon: "\ud83c\udf80",
            rice: "\ud83c\udf5a",
            rice_ball: "\ud83c\udf59",
            rice_cracker: "\ud83c\udf58",
            rice_scene: "\ud83c\udf91",
            right_anger_bubble: "\ud83d\uddef",
            ring: "\ud83d\udc8d",
            robot: "\ud83e\udd16",
            rocket: "\ud83d\ude80",
            rofl: "\ud83e\udd23",
            roll_eyes: "\ud83d\ude44",
            roller_coaster: "\ud83c\udfa2",
            rooster: "\ud83d\udc13",
            rose: "\ud83c\udf39",
            rosette: "\ud83c\udff5",
            rotating_light: "\ud83d\udea8",
            round_pushpin: "\ud83d\udccd",
            rowing_man: "\ud83d\udea3",
            rowing_woman: "\ud83d\udea3&zwj;\u2640\ufe0f",
            rugby_football: "\ud83c\udfc9",
            running_man: "\ud83c\udfc3",
            running_shirt_with_sash: "\ud83c\udfbd",
            running_woman: "\ud83c\udfc3&zwj;\u2640\ufe0f",
            sa: "\ud83c\ude02\ufe0f",
            sagittarius: "\u2650\ufe0f",
            sake: "\ud83c\udf76",
            sandal: "\ud83d\udc61",
            santa: "\ud83c\udf85",
            satellite: "\ud83d\udce1",
            saxophone: "\ud83c\udfb7",
            school: "\ud83c\udfeb",
            school_satchel: "\ud83c\udf92",
            scissors: "\u2702\ufe0f",
            scorpion: "\ud83e\udd82",
            scorpius: "\u264f\ufe0f",
            scream: "\ud83d\ude31",
            scream_cat: "\ud83d\ude40",
            scroll: "\ud83d\udcdc",
            seat: "\ud83d\udcba",
            secret: "\u3299\ufe0f",
            see_no_evil: "\ud83d\ude48",
            seedling: "\ud83c\udf31",
            selfie: "\ud83e\udd33",
            shallow_pan_of_food: "\ud83e\udd58",
            shamrock: "\u2618\ufe0f",
            shark: "\ud83e\udd88",
            shaved_ice: "\ud83c\udf67",
            sheep: "\ud83d\udc11",
            shell: "\ud83d\udc1a",
            shield: "\ud83d\udee1",
            shinto_shrine: "\u26e9",
            ship: "\ud83d\udea2",
            shirt: "\ud83d\udc55",
            shopping: "\ud83d\udecd",
            shopping_cart: "\ud83d\uded2",
            shower: "\ud83d\udebf",
            shrimp: "\ud83e\udd90",
            signal_strength: "\ud83d\udcf6",
            six_pointed_star: "\ud83d\udd2f",
            ski: "\ud83c\udfbf",
            skier: "\u26f7",
            skull: "\ud83d\udc80",
            skull_and_crossbones: "\u2620\ufe0f",
            sleeping: "\ud83d\ude34",
            sleeping_bed: "\ud83d\udecc",
            sleepy: "\ud83d\ude2a",
            slightly_frowning_face: "\ud83d\ude41",
            slightly_smiling_face: "\ud83d\ude42",
            slot_machine: "\ud83c\udfb0",
            small_airplane: "\ud83d\udee9",
            small_blue_diamond: "\ud83d\udd39",
            small_orange_diamond: "\ud83d\udd38",
            small_red_triangle: "\ud83d\udd3a",
            small_red_triangle_down: "\ud83d\udd3b",
            smile: "\ud83d\ude04",
            smile_cat: "\ud83d\ude38",
            smiley: "\ud83d\ude03",
            smiley_cat: "\ud83d\ude3a",
            smiling_imp: "\ud83d\ude08",
            smirk: "\ud83d\ude0f",
            smirk_cat: "\ud83d\ude3c",
            smoking: "\ud83d\udeac",
            snail: "\ud83d\udc0c",
            snake: "\ud83d\udc0d",
            sneezing_face: "\ud83e\udd27",
            snowboarder: "\ud83c\udfc2",
            snowflake: "\u2744\ufe0f",
            snowman: "\u26c4\ufe0f",
            snowman_with_snow: "\u2603\ufe0f",
            sob: "\ud83d\ude2d",
            soccer: "\u26bd\ufe0f",
            soon: "\ud83d\udd1c",
            sos: "\ud83c\udd98",
            sound: "\ud83d\udd09",
            space_invader: "\ud83d\udc7e",
            spades: "\u2660\ufe0f",
            spaghetti: "\ud83c\udf5d",
            sparkle: "\u2747\ufe0f",
            sparkler: "\ud83c\udf87",
            sparkles: "\u2728",
            sparkling_heart: "\ud83d\udc96",
            speak_no_evil: "\ud83d\ude4a",
            speaker: "\ud83d\udd08",
            speaking_head: "\ud83d\udde3",
            speech_balloon: "\ud83d\udcac",
            speedboat: "\ud83d\udea4",
            spider: "\ud83d\udd77",
            spider_web: "\ud83d\udd78",
            spiral_calendar: "\ud83d\uddd3",
            spiral_notepad: "\ud83d\uddd2",
            spoon: "\ud83e\udd44",
            squid: "\ud83e\udd91",
            stadium: "\ud83c\udfdf",
            star: "\u2b50\ufe0f",
            star2: "\ud83c\udf1f",
            star_and_crescent: "\u262a\ufe0f",
            star_of_david: "\u2721\ufe0f",
            stars: "\ud83c\udf20",
            station: "\ud83d\ude89",
            statue_of_liberty: "\ud83d\uddfd",
            steam_locomotive: "\ud83d\ude82",
            stew: "\ud83c\udf72",
            stop_button: "\u23f9",
            stop_sign: "\ud83d\uded1",
            stopwatch: "\u23f1",
            straight_ruler: "\ud83d\udccf",
            strawberry: "\ud83c\udf53",
            stuck_out_tongue: "\ud83d\ude1b",
            stuck_out_tongue_closed_eyes: "\ud83d\ude1d",
            stuck_out_tongue_winking_eye: "\ud83d\ude1c",
            studio_microphone: "\ud83c\udf99",
            stuffed_flatbread: "\ud83e\udd59",
            sun_behind_large_cloud: "\ud83c\udf25",
            sun_behind_rain_cloud: "\ud83c\udf26",
            sun_behind_small_cloud: "\ud83c\udf24",
            sun_with_face: "\ud83c\udf1e",
            sunflower: "\ud83c\udf3b",
            sunglasses: "\ud83d\ude0e",
            sunny: "\u2600\ufe0f",
            sunrise: "\ud83c\udf05",
            sunrise_over_mountains: "\ud83c\udf04",
            surfing_man: "\ud83c\udfc4",
            surfing_woman: "\ud83c\udfc4&zwj;\u2640\ufe0f",
            sushi: "\ud83c\udf63",
            suspension_railway: "\ud83d\ude9f",
            sweat: "\ud83d\ude13",
            sweat_drops: "\ud83d\udca6",
            sweat_smile: "\ud83d\ude05",
            sweet_potato: "\ud83c\udf60",
            swimming_man: "\ud83c\udfca",
            swimming_woman: "\ud83c\udfca&zwj;\u2640\ufe0f",
            symbols: "\ud83d\udd23",
            synagogue: "\ud83d\udd4d",
            syringe: "\ud83d\udc89",
            taco: "\ud83c\udf2e",
            tada: "\ud83c\udf89",
            tanabata_tree: "\ud83c\udf8b",
            taurus: "\u2649\ufe0f",
            taxi: "\ud83d\ude95",
            tea: "\ud83c\udf75",
            telephone_receiver: "\ud83d\udcde",
            telescope: "\ud83d\udd2d",
            tennis: "\ud83c\udfbe",
            tent: "\u26fa\ufe0f",
            thermometer: "\ud83c\udf21",
            thinking: "\ud83e\udd14",
            thought_balloon: "\ud83d\udcad",
            ticket: "\ud83c\udfab",
            tickets: "\ud83c\udf9f",
            tiger: "\ud83d\udc2f",
            tiger2: "\ud83d\udc05",
            timer_clock: "\u23f2",
            tipping_hand_man: "\ud83d\udc81&zwj;\u2642\ufe0f",
            tired_face: "\ud83d\ude2b",
            tm: "\u2122\ufe0f",
            toilet: "\ud83d\udebd",
            tokyo_tower: "\ud83d\uddfc",
            tomato: "\ud83c\udf45",
            tongue: "\ud83d\udc45",
            top: "\ud83d\udd1d",
            tophat: "\ud83c\udfa9",
            tornado: "\ud83c\udf2a",
            trackball: "\ud83d\uddb2",
            tractor: "\ud83d\ude9c",
            traffic_light: "\ud83d\udea5",
            train: "\ud83d\ude8b",
            train2: "\ud83d\ude86",
            tram: "\ud83d\ude8a",
            triangular_flag_on_post: "\ud83d\udea9",
            triangular_ruler: "\ud83d\udcd0",
            trident: "\ud83d\udd31",
            triumph: "\ud83d\ude24",
            trolleybus: "\ud83d\ude8e",
            trophy: "\ud83c\udfc6",
            tropical_drink: "\ud83c\udf79",
            tropical_fish: "\ud83d\udc20",
            truck: "\ud83d\ude9a",
            trumpet: "\ud83c\udfba",
            tulip: "\ud83c\udf37",
            tumbler_glass: "\ud83e\udd43",
            turkey: "\ud83e\udd83",
            turtle: "\ud83d\udc22",
            tv: "\ud83d\udcfa",
            twisted_rightwards_arrows: "\ud83d\udd00",
            two_hearts: "\ud83d\udc95",
            two_men_holding_hands: "\ud83d\udc6c",
            two_women_holding_hands: "\ud83d\udc6d",
            u5272: "\ud83c\ude39",
            u5408: "\ud83c\ude34",
            u55b6: "\ud83c\ude3a",
            u6307: "\ud83c\ude2f\ufe0f",
            u6708: "\ud83c\ude37\ufe0f",
            u6709: "\ud83c\ude36",
            u6e80: "\ud83c\ude35",
            u7121: "\ud83c\ude1a\ufe0f",
            u7533: "\ud83c\ude38",
            u7981: "\ud83c\ude32",
            u7a7a: "\ud83c\ude33",
            umbrella: "\u2614\ufe0f",
            unamused: "\ud83d\ude12",
            underage: "\ud83d\udd1e",
            unicorn: "\ud83e\udd84",
            unlock: "\ud83d\udd13",
            up: "\ud83c\udd99",
            upside_down_face: "\ud83d\ude43",
            v: "\u270c\ufe0f",
            vertical_traffic_light: "\ud83d\udea6",
            vhs: "\ud83d\udcfc",
            vibration_mode: "\ud83d\udcf3",
            video_camera: "\ud83d\udcf9",
            video_game: "\ud83c\udfae",
            violin: "\ud83c\udfbb",
            virgo: "\u264d\ufe0f",
            volcano: "\ud83c\udf0b",
            volleyball: "\ud83c\udfd0",
            vs: "\ud83c\udd9a",
            vulcan_salute: "\ud83d\udd96",
            walking_man: "\ud83d\udeb6",
            walking_woman: "\ud83d\udeb6&zwj;\u2640\ufe0f",
            waning_crescent_moon: "\ud83c\udf18",
            waning_gibbous_moon: "\ud83c\udf16",
            warning: "\u26a0\ufe0f",
            wastebasket: "\ud83d\uddd1",
            watch: "\u231a\ufe0f",
            water_buffalo: "\ud83d\udc03",
            watermelon: "\ud83c\udf49",
            wave: "\ud83d\udc4b",
            wavy_dash: "\u3030\ufe0f",
            waxing_crescent_moon: "\ud83c\udf12",
            wc: "\ud83d\udebe",
            weary: "\ud83d\ude29",
            wedding: "\ud83d\udc92",
            weight_lifting_man: "\ud83c\udfcb\ufe0f",
            weight_lifting_woman: "\ud83c\udfcb\ufe0f&zwj;\u2640\ufe0f",
            whale: "\ud83d\udc33",
            whale2: "\ud83d\udc0b",
            wheel_of_dharma: "\u2638\ufe0f",
            wheelchair: "\u267f\ufe0f",
            white_check_mark: "\u2705",
            white_circle: "\u26aa\ufe0f",
            white_flag: "\ud83c\udff3\ufe0f",
            white_flower: "\ud83d\udcae",
            white_large_square: "\u2b1c\ufe0f",
            white_medium_small_square: "\u25fd\ufe0f",
            white_medium_square: "\u25fb\ufe0f",
            white_small_square: "\u25ab\ufe0f",
            white_square_button: "\ud83d\udd33",
            wilted_flower: "\ud83e\udd40",
            wind_chime: "\ud83c\udf90",
            wind_face: "\ud83c\udf2c",
            wine_glass: "\ud83c\udf77",
            wink: "\ud83d\ude09",
            wolf: "\ud83d\udc3a",
            woman: "\ud83d\udc69",
            woman_artist: "\ud83d\udc69&zwj;\ud83c\udfa8",
            woman_astronaut: "\ud83d\udc69&zwj;\ud83d\ude80",
            woman_cartwheeling: "\ud83e\udd38&zwj;\u2640\ufe0f",
            woman_cook: "\ud83d\udc69&zwj;\ud83c\udf73",
            woman_facepalming: "\ud83e\udd26&zwj;\u2640\ufe0f",
            woman_factory_worker: "\ud83d\udc69&zwj;\ud83c\udfed",
            woman_farmer: "\ud83d\udc69&zwj;\ud83c\udf3e",
            woman_firefighter: "\ud83d\udc69&zwj;\ud83d\ude92",
            woman_health_worker: "\ud83d\udc69&zwj;\u2695\ufe0f",
            woman_judge: "\ud83d\udc69&zwj;\u2696\ufe0f",
            woman_juggling: "\ud83e\udd39&zwj;\u2640\ufe0f",
            woman_mechanic: "\ud83d\udc69&zwj;\ud83d\udd27",
            woman_office_worker: "\ud83d\udc69&zwj;\ud83d\udcbc",
            woman_pilot: "\ud83d\udc69&zwj;\u2708\ufe0f",
            woman_playing_handball: "\ud83e\udd3e&zwj;\u2640\ufe0f",
            woman_playing_water_polo: "\ud83e\udd3d&zwj;\u2640\ufe0f",
            woman_scientist: "\ud83d\udc69&zwj;\ud83d\udd2c",
            woman_shrugging: "\ud83e\udd37&zwj;\u2640\ufe0f",
            woman_singer: "\ud83d\udc69&zwj;\ud83c\udfa4",
            woman_student: "\ud83d\udc69&zwj;\ud83c\udf93",
            woman_teacher: "\ud83d\udc69&zwj;\ud83c\udfeb",
            woman_technologist: "\ud83d\udc69&zwj;\ud83d\udcbb",
            woman_with_turban: "\ud83d\udc73&zwj;\u2640\ufe0f",
            womans_clothes: "\ud83d\udc5a",
            womans_hat: "\ud83d\udc52",
            women_wrestling: "\ud83e\udd3c&zwj;\u2640\ufe0f",
            womens: "\ud83d\udeba",
            world_map: "\ud83d\uddfa",
            worried: "\ud83d\ude1f",
            wrench: "\ud83d\udd27",
            writing_hand: "\u270d\ufe0f",
            x: "\u274c",
            yellow_heart: "\ud83d\udc9b",
            yen: "\ud83d\udcb4",
            yin_yang: "\u262f\ufe0f",
            yum: "\ud83d\ude0b",
            zap: "\u26a1\ufe0f",
            zipper_mouth_face: "\ud83e\udd10",
            zzz: "\ud83d\udca4",
            octocat:
              '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
            showdown:
              "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>",
          }),
          (o.Converter = function (e) {
            "use strict";
            var t = {},
              n = [],
              r = [],
              i = {},
              a = c,
              f = { parsed: {}, raw: "", format: "" };
            function d(e, t) {
              if (((t = t || null), o.helper.isString(e))) {
                if (((t = e = o.helper.stdExtName(e)), o.extensions[e]))
                  return (
                    console.warn(
                      "DEPRECATION WARNING: " +
                        e +
                        " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"
                    ),
                    void (function (e, t) {
                      "function" === typeof e && (e = e(new o.Converter()));
                      o.helper.isArray(e) || (e = [e]);
                      var i = p(e, t);
                      if (!i.valid) throw Error(i.error);
                      for (var a = 0; a < e.length; ++a)
                        switch (e[a].type) {
                          case "lang":
                            n.push(e[a]);
                            break;
                          case "output":
                            r.push(e[a]);
                            break;
                          default:
                            throw Error(
                              "Extension loader error: Type unrecognized!!!"
                            );
                        }
                    })(o.extensions[e], e)
                  );
                if (o.helper.isUndefined(s[e]))
                  throw Error(
                    'Extension "' +
                      e +
                      '" could not be loaded. It was either not found or is not a valid extension.'
                  );
                e = s[e];
              }
              "function" === typeof e && (e = e()),
                o.helper.isArray(e) || (e = [e]);
              var i = p(e, t);
              if (!i.valid) throw Error(i.error);
              for (var a = 0; a < e.length; ++a) {
                switch (e[a].type) {
                  case "lang":
                    n.push(e[a]);
                    break;
                  case "output":
                    r.push(e[a]);
                }
                if (e[a].hasOwnProperty("listeners"))
                  for (var l in e[a].listeners)
                    e[a].listeners.hasOwnProperty(l) && h(l, e[a].listeners[l]);
              }
            }
            function h(e, t) {
              if (!o.helper.isString(e))
                throw Error(
                  "Invalid argument in converter.listen() method: name must be a string, but " +
                    typeof e +
                    " given"
                );
              if ("function" !== typeof t)
                throw Error(
                  "Invalid argument in converter.listen() method: callback must be a function, but " +
                    typeof t +
                    " given"
                );
              i.hasOwnProperty(e) || (i[e] = []), i[e].push(t);
            }
            !(function () {
              for (var n in ((e = e || {}), l))
                l.hasOwnProperty(n) && (t[n] = l[n]);
              if ("object" !== typeof e)
                throw Error(
                  "Converter expects the passed parameter to be an object, but " +
                    typeof e +
                    " was passed instead."
                );
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              t.extensions && o.helper.forEach(t.extensions, d);
            })(),
              (this._dispatch = function (e, t, n, r) {
                if (i.hasOwnProperty(e))
                  for (var o = 0; o < i[e].length; ++o) {
                    var a = i[e][o](e, t, this, n, r);
                    a && "undefined" !== typeof a && (t = a);
                  }
                return t;
              }),
              (this.listen = function (e, t) {
                return h(e, t), this;
              }),
              (this.makeHtml = function (e) {
                if (!e) return e;
                var i = {
                  gHtmlBlocks: [],
                  gHtmlMdBlocks: [],
                  gHtmlSpans: [],
                  gUrls: {},
                  gTitles: {},
                  gDimensions: {},
                  gListLevel: 0,
                  hashLinkCounts: {},
                  langExtensions: n,
                  outputModifiers: r,
                  converter: this,
                  ghCodeBlocks: [],
                  metadata: { parsed: {}, raw: "", format: "" },
                };
                return (
                  (e = (e = (e = (e = (e = e.replace(/\xa8/g, "\xa8T")).replace(
                    /\$/g,
                    "\xa8D"
                  )).replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(
                    /\u00A0/g,
                    "&nbsp;"
                  )),
                  t.smartIndentationFix &&
                    (e = (function (e) {
                      var t = e.match(/^\s*/)[0].length,
                        n = new RegExp("^\\s{0," + t + "}", "gm");
                      return e.replace(n, "");
                    })(e)),
                  (e = "\n\n" + e + "\n\n"),
                  (e = (e = o.subParser("detab")(e, t, i)).replace(
                    /^[ \t]+$/gm,
                    ""
                  )),
                  o.helper.forEach(n, function (n) {
                    e = o.subParser("runExtension")(n, e, t, i);
                  }),
                  (e = o.subParser("metadata")(e, t, i)),
                  (e = o.subParser("hashPreCodeTags")(e, t, i)),
                  (e = o.subParser("githubCodeBlocks")(e, t, i)),
                  (e = o.subParser("hashHTMLBlocks")(e, t, i)),
                  (e = o.subParser("hashCodeTags")(e, t, i)),
                  (e = o.subParser("stripLinkDefinitions")(e, t, i)),
                  (e = o.subParser("blockGamut")(e, t, i)),
                  (e = o.subParser("unhashHTMLSpans")(e, t, i)),
                  (e = (e = (e = o.subParser("unescapeSpecialChars")(
                    e,
                    t,
                    i
                  )).replace(/\xa8D/g, "$$")).replace(/\xa8T/g, "\xa8")),
                  (e = o.subParser("completeHTMLDocument")(e, t, i)),
                  o.helper.forEach(r, function (n) {
                    e = o.subParser("runExtension")(n, e, t, i);
                  }),
                  (f = i.metadata),
                  e
                );
              }),
              (this.makeMarkdown = this.makeMd =
                function (e, t) {
                  if (
                    ((e = (e = (e = e.replace(/\r\n/g, "\n")).replace(
                      /\r/g,
                      "\n"
                    )).replace(/>[ \t]+</, ">\xa8NBSP;<")),
                    !t)
                  ) {
                    if (!window || !window.document)
                      throw new Error(
                        "HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM"
                      );
                    t = window.document;
                  }
                  var n = t.createElement("div");
                  n.innerHTML = e;
                  var r = {
                    preList: (function (e) {
                      for (
                        var t = e.querySelectorAll("pre"), n = [], r = 0;
                        r < t.length;
                        ++r
                      )
                        if (
                          1 === t[r].childElementCount &&
                          "code" === t[r].firstChild.tagName.toLowerCase()
                        ) {
                          var i = t[r].firstChild.innerHTML.trim(),
                            a =
                              t[r].firstChild.getAttribute("data-language") ||
                              "";
                          if ("" === a)
                            for (
                              var s = t[r].firstChild.className.split(" "),
                                l = 0;
                              l < s.length;
                              ++l
                            ) {
                              var c = s[l].match(/^language-(.+)$/);
                              if (null !== c) {
                                a = c[1];
                                break;
                              }
                            }
                          (i = o.helper.unescapeHTMLEntities(i)),
                            n.push(i),
                            (t[r].outerHTML =
                              '<precode language="' +
                              a +
                              '" precodenum="' +
                              r.toString() +
                              '"></precode>');
                        } else
                          n.push(t[r].innerHTML),
                            (t[r].innerHTML = ""),
                            t[r].setAttribute("prenum", r.toString());
                      return n;
                    })(n),
                  };
                  !(function e(t) {
                    for (var n = 0; n < t.childNodes.length; ++n) {
                      var r = t.childNodes[n];
                      3 === r.nodeType
                        ? /\S/.test(r.nodeValue)
                          ? ((r.nodeValue = r.nodeValue.split("\n").join(" ")),
                            (r.nodeValue = r.nodeValue.replace(/(\s)+/g, "$1")))
                          : (t.removeChild(r), --n)
                        : 1 === r.nodeType && e(r);
                    }
                  })(n);
                  for (var i = n.childNodes, a = "", s = 0; s < i.length; s++)
                    a += o.subParser("makeMarkdown.node")(i[s], r);
                  return a;
                }),
              (this.setOption = function (e, n) {
                t[e] = n;
              }),
              (this.getOption = function (e) {
                return t[e];
              }),
              (this.getOptions = function () {
                return t;
              }),
              (this.addExtension = function (e, t) {
                d(e, (t = t || null));
              }),
              (this.useExtension = function (e) {
                d(e);
              }),
              (this.setFlavor = function (e) {
                if (!u.hasOwnProperty(e))
                  throw Error(e + " flavor was not found");
                var n = u[e];
                for (var r in ((a = e), n))
                  n.hasOwnProperty(r) && (t[r] = n[r]);
              }),
              (this.getFlavor = function () {
                return a;
              }),
              (this.removeExtension = function (e) {
                o.helper.isArray(e) || (e = [e]);
                for (var t = 0; t < e.length; ++t) {
                  for (var i = e[t], a = 0; a < n.length; ++a)
                    n[a] === i && n[a].splice(a, 1);
                  for (; 0 < r.length; ++a) r[0] === i && r[0].splice(a, 1);
                }
              }),
              (this.getAllExtensions = function () {
                return { language: n, output: r };
              }),
              (this.getMetadata = function (e) {
                return e ? f.raw : f.parsed;
              }),
              (this.getMetadataFormat = function () {
                return f.format;
              }),
              (this._setMetadataPair = function (e, t) {
                f.parsed[e] = t;
              }),
              (this._setMetadataFormat = function (e) {
                f.format = e;
              }),
              (this._setMetadataRaw = function (e) {
                f.raw = e;
              });
          }),
          o.subParser("anchors", function (e, t, n) {
            "use strict";
            var r = function (e, r, i, a, s, l, c) {
              if (
                (o.helper.isUndefined(c) && (c = ""),
                (i = i.toLowerCase()),
                e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
              )
                a = "";
              else if (!a) {
                if (
                  (i || (i = r.toLowerCase().replace(/ ?\n/g, " ")),
                  (a = "#" + i),
                  o.helper.isUndefined(n.gUrls[i]))
                )
                  return e;
                (a = n.gUrls[i]),
                  o.helper.isUndefined(n.gTitles[i]) || (c = n.gTitles[i]);
              }
              var u =
                '<a href="' +
                (a = a.replace(
                  o.helper.regexes.asteriskDashAndColon,
                  o.helper.escapeCharactersCallback
                )) +
                '"';
              return (
                "" !== c &&
                  null !== c &&
                  (u +=
                    ' title="' +
                    (c = (c = c.replace(/"/g, "&quot;")).replace(
                      o.helper.regexes.asteriskDashAndColon,
                      o.helper.escapeCharactersCallback
                    )) +
                    '"'),
                t.openLinksInNewWindow &&
                  !/^#/.test(a) &&
                  (u += ' rel="noopener noreferrer" target="\xa8E95Eblank"'),
                (u += ">" + r + "</a>")
              );
            };
            return (
              (e = (e = (e = (e = (e = n.converter._dispatch(
                "anchors.before",
                e,
                t,
                n
              )).replace(
                /\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,
                r
              )).replace(
                /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
                r
              )).replace(
                /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
                r
              )).replace(/\[([^\[\]]+)]()()()()()/g, r)),
              t.ghMentions &&
                (e = e.replace(
                  /(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim,
                  function (e, n, r, i, a) {
                    if ("\\" === r) return n + i;
                    if (!o.helper.isString(t.ghMentionsLink))
                      throw new Error("ghMentionsLink option must be a string");
                    var s = t.ghMentionsLink.replace(/\{u}/g, a),
                      l = "";
                    return (
                      t.openLinksInNewWindow &&
                        (l =
                          ' rel="noopener noreferrer" target="\xa8E95Eblank"'),
                      n + '<a href="' + s + '"' + l + ">" + i + "</a>"
                    );
                  }
                )),
              (e = n.converter._dispatch("anchors.after", e, t, n))
            );
          });
        var h =
            /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
          y =
            /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
          m = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
          g =
            /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
          b = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
          v = function (e) {
            "use strict";
            return function (t, n, r, i, a, s, l) {
              var c = (r = r.replace(
                  o.helper.regexes.asteriskDashAndColon,
                  o.helper.escapeCharactersCallback
                )),
                u = "",
                p = "",
                f = n || "",
                d = l || "";
              return (
                /^www\./i.test(r) && (r = r.replace(/^www\./i, "http://www.")),
                e.excludeTrailingPunctuationFromURLs && s && (u = s),
                e.openLinksInNewWindow &&
                  (p = ' rel="noopener noreferrer" target="\xa8E95Eblank"'),
                f + '<a href="' + r + '"' + p + ">" + c + "</a>" + u + d
              );
            };
          },
          w = function (e, t) {
            "use strict";
            return function (n, r, i) {
              var a = "mailto:";
              return (
                (r = r || ""),
                (i = o.subParser("unescapeSpecialChars")(i, e, t)),
                e.encodeEmails
                  ? ((a = o.helper.encodeEmailAddress(a + i)),
                    (i = o.helper.encodeEmailAddress(i)))
                  : (a += i),
                r + '<a href="' + a + '">' + i + "</a>"
              );
            };
          };
        o.subParser("autoLinks", function (e, t, n) {
          "use strict";
          return (
            (e = (e = (e = n.converter._dispatch(
              "autoLinks.before",
              e,
              t,
              n
            )).replace(m, v(t))).replace(b, w(t, n))),
            (e = n.converter._dispatch("autoLinks.after", e, t, n))
          );
        }),
          o.subParser("simplifiedAutoLinks", function (e, t, n) {
            "use strict";
            return t.simplifiedAutoLink
              ? ((e = n.converter._dispatch(
                  "simplifiedAutoLinks.before",
                  e,
                  t,
                  n
                )),
                (e = (e = t.excludeTrailingPunctuationFromURLs
                  ? e.replace(y, v(t))
                  : e.replace(h, v(t))).replace(g, w(t, n))),
                (e = n.converter._dispatch(
                  "simplifiedAutoLinks.after",
                  e,
                  t,
                  n
                )))
              : e;
          }),
          o.subParser("blockGamut", function (e, t, n) {
            "use strict";
            return (
              (e = n.converter._dispatch("blockGamut.before", e, t, n)),
              (e = o.subParser("blockQuotes")(e, t, n)),
              (e = o.subParser("headers")(e, t, n)),
              (e = o.subParser("horizontalRule")(e, t, n)),
              (e = o.subParser("lists")(e, t, n)),
              (e = o.subParser("codeBlocks")(e, t, n)),
              (e = o.subParser("tables")(e, t, n)),
              (e = o.subParser("hashHTMLBlocks")(e, t, n)),
              (e = o.subParser("paragraphs")(e, t, n)),
              (e = n.converter._dispatch("blockGamut.after", e, t, n))
            );
          }),
          o.subParser("blockQuotes", function (e, t, n) {
            "use strict";
            (e = n.converter._dispatch("blockQuotes.before", e, t, n)),
              (e += "\n\n");
            var r = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
            return (
              t.splitAdjacentBlockquotes && (r = /^ {0,3}>[\s\S]*?(?:\n\n)/gm),
              (e = e.replace(r, function (e) {
                return (
                  (e = (e = (e = e.replace(/^[ \t]*>[ \t]?/gm, "")).replace(
                    /\xa80/g,
                    ""
                  )).replace(/^[ \t]+$/gm, "")),
                  (e = o.subParser("githubCodeBlocks")(e, t, n)),
                  (e = (e = (e = o.subParser("blockGamut")(e, t, n)).replace(
                    /(^|\n)/g,
                    "$1  "
                  )).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (e, t) {
                    var n = t;
                    return (n = (n = n.replace(/^  /gm, "\xa80")).replace(
                      /\xa80/g,
                      ""
                    ));
                  })),
                  o.subParser("hashBlock")(
                    "<blockquote>\n" + e + "\n</blockquote>",
                    t,
                    n
                  )
                );
              })),
              (e = n.converter._dispatch("blockQuotes.after", e, t, n))
            );
          }),
          o.subParser("codeBlocks", function (e, t, n) {
            "use strict";
            e = n.converter._dispatch("codeBlocks.before", e, t, n);
            return (
              (e = (e = (e += "\xa80").replace(
                /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=\xa80))/g,
                function (e, r, i) {
                  var a = r,
                    s = i,
                    l = "\n";
                  return (
                    (a = o.subParser("outdent")(a, t, n)),
                    (a = o.subParser("encodeCode")(a, t, n)),
                    (a = (a = (a = o.subParser("detab")(a, t, n)).replace(
                      /^\n+/g,
                      ""
                    )).replace(/\n+$/g, "")),
                    t.omitExtraWLInCodeBlocks && (l = ""),
                    (a = "<pre><code>" + a + l + "</code></pre>"),
                    o.subParser("hashBlock")(a, t, n) + s
                  );
                }
              )).replace(/\xa80/, "")),
              (e = n.converter._dispatch("codeBlocks.after", e, t, n))
            );
          }),
          o.subParser("codeSpans", function (e, t, n) {
            "use strict";
            return (
              "undefined" ===
                typeof (e = n.converter._dispatch(
                  "codeSpans.before",
                  e,
                  t,
                  n
                )) && (e = ""),
              (e = e.replace(
                /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
                function (e, r, i, a) {
                  var s = a;
                  return (
                    (s = (s = s.replace(/^([ \t]*)/g, "")).replace(
                      /[ \t]*$/g,
                      ""
                    )),
                    (s =
                      r +
                      "<code>" +
                      (s = o.subParser("encodeCode")(s, t, n)) +
                      "</code>"),
                    (s = o.subParser("hashHTMLSpans")(s, t, n))
                  );
                }
              )),
              (e = n.converter._dispatch("codeSpans.after", e, t, n))
            );
          }),
          o.subParser("completeHTMLDocument", function (e, t, n) {
            "use strict";
            if (!t.completeHTMLDocument) return e;
            e = n.converter._dispatch("completeHTMLDocument.before", e, t, n);
            var r = "html",
              i = "<!DOCTYPE HTML>\n",
              o = "",
              a = '<meta charset="utf-8">\n',
              s = "",
              l = "";
            for (var c in ("undefined" !== typeof n.metadata.parsed.doctype &&
              ((i = "<!DOCTYPE " + n.metadata.parsed.doctype + ">\n"),
              ("html" !==
                (r = n.metadata.parsed.doctype.toString().toLowerCase()) &&
                "html5" !== r) ||
                (a = '<meta charset="utf-8">')),
            n.metadata.parsed))
              if (n.metadata.parsed.hasOwnProperty(c))
                switch (c.toLowerCase()) {
                  case "doctype":
                    break;
                  case "title":
                    o = "<title>" + n.metadata.parsed.title + "</title>\n";
                    break;
                  case "charset":
                    a =
                      "html" === r || "html5" === r
                        ? '<meta charset="' + n.metadata.parsed.charset + '">\n'
                        : '<meta name="charset" content="' +
                          n.metadata.parsed.charset +
                          '">\n';
                    break;
                  case "language":
                  case "lang":
                    (s = ' lang="' + n.metadata.parsed[c] + '"'),
                      (l +=
                        '<meta name="' +
                        c +
                        '" content="' +
                        n.metadata.parsed[c] +
                        '">\n');
                    break;
                  default:
                    l +=
                      '<meta name="' +
                      c +
                      '" content="' +
                      n.metadata.parsed[c] +
                      '">\n';
                }
            return (
              (e =
                i +
                "<html" +
                s +
                ">\n<head>\n" +
                o +
                a +
                l +
                "</head>\n<body>\n" +
                e.trim() +
                "\n</body>\n</html>"),
              (e = n.converter._dispatch("completeHTMLDocument.after", e, t, n))
            );
          }),
          o.subParser("detab", function (e, t, n) {
            "use strict";
            return (
              (e = (e = (e = (e = (e = (e = n.converter._dispatch(
                "detab.before",
                e,
                t,
                n
              )).replace(/\t(?=\t)/g, "    ")).replace(
                /\t/g,
                "\xa8A\xa8B"
              )).replace(/\xa8B(.+?)\xa8A/g, function (e, t) {
                for (var n = t, r = 4 - (n.length % 4), i = 0; i < r; i++)
                  n += " ";
                return n;
              })).replace(/\xa8A/g, "    ")).replace(/\xa8B/g, "")),
              (e = n.converter._dispatch("detab.after", e, t, n))
            );
          }),
          o.subParser("ellipsis", function (e, t, n) {
            "use strict";
            return (
              (e = (e = n.converter._dispatch(
                "ellipsis.before",
                e,
                t,
                n
              )).replace(/\.\.\./g, "\u2026")),
              (e = n.converter._dispatch("ellipsis.after", e, t, n))
            );
          }),
          o.subParser("emoji", function (e, t, n) {
            "use strict";
            if (!t.emoji) return e;
            return (
              (e = (e = n.converter._dispatch("emoji.before", e, t, n)).replace(
                /:([\S]+?):/g,
                function (e, t) {
                  return o.helper.emojis.hasOwnProperty(t)
                    ? o.helper.emojis[t]
                    : e;
                }
              )),
              (e = n.converter._dispatch("emoji.after", e, t, n))
            );
          }),
          o.subParser("encodeAmpsAndAngles", function (e, t, n) {
            "use strict";
            return (
              (e = (e = (e = (e = (e = n.converter._dispatch(
                "encodeAmpsAndAngles.before",
                e,
                t,
                n
              )).replace(
                /&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,
                "&amp;"
              )).replace(/<(?![a-z\/?$!])/gi, "&lt;")).replace(
                /</g,
                "&lt;"
              )).replace(/>/g, "&gt;")),
              (e = n.converter._dispatch("encodeAmpsAndAngles.after", e, t, n))
            );
          }),
          o.subParser("encodeBackslashEscapes", function (e, t, n) {
            "use strict";
            return (
              (e = (e = (e = n.converter._dispatch(
                "encodeBackslashEscapes.before",
                e,
                t,
                n
              )).replace(/\\(\\)/g, o.helper.escapeCharactersCallback)).replace(
                /\\([`*_{}\[\]()>#+.!~=|-])/g,
                o.helper.escapeCharactersCallback
              )),
              (e = n.converter._dispatch(
                "encodeBackslashEscapes.after",
                e,
                t,
                n
              ))
            );
          }),
          o.subParser("encodeCode", function (e, t, n) {
            "use strict";
            return (
              (e = (e = n.converter._dispatch("encodeCode.before", e, t, n))
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(
                  /([*_{}\[\]\\=~-])/g,
                  o.helper.escapeCharactersCallback
                )),
              (e = n.converter._dispatch("encodeCode.after", e, t, n))
            );
          }),
          o.subParser(
            "escapeSpecialCharsWithinTagAttributes",
            function (e, t, n) {
              "use strict";
              return (
                (e = (e = (e = n.converter._dispatch(
                  "escapeSpecialCharsWithinTagAttributes.before",
                  e,
                  t,
                  n
                )).replace(
                  /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
                  function (e) {
                    return e
                      .replace(/(.)<\/?code>(?=.)/g, "$1`")
                      .replace(
                        /([\\`*_~=|])/g,
                        o.helper.escapeCharactersCallback
                      );
                  }
                )).replace(
                  /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi,
                  function (e) {
                    return e.replace(
                      /([\\`*_~=|])/g,
                      o.helper.escapeCharactersCallback
                    );
                  }
                )),
                (e = n.converter._dispatch(
                  "escapeSpecialCharsWithinTagAttributes.after",
                  e,
                  t,
                  n
                ))
              );
            }
          ),
          o.subParser("githubCodeBlocks", function (e, t, n) {
            "use strict";
            return t.ghCodeBlocks
              ? ((e = n.converter._dispatch(
                  "githubCodeBlocks.before",
                  e,
                  t,
                  n
                )),
                (e = (e = (e += "\xa80").replace(
                  /(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,
                  function (e, r, i, a) {
                    var s = t.omitExtraWLInCodeBlocks ? "" : "\n";
                    return (
                      (a = o.subParser("encodeCode")(a, t, n)),
                      (a =
                        "<pre><code" +
                        (i ? ' class="' + i + " language-" + i + '"' : "") +
                        ">" +
                        (a = (a = (a = o.subParser("detab")(a, t, n)).replace(
                          /^\n+/g,
                          ""
                        )).replace(/\n+$/g, "")) +
                        s +
                        "</code></pre>"),
                      (a = o.subParser("hashBlock")(a, t, n)),
                      "\n\n\xa8G" +
                        (n.ghCodeBlocks.push({ text: e, codeblock: a }) - 1) +
                        "G\n\n"
                    );
                  }
                )).replace(/\xa80/, "")),
                n.converter._dispatch("githubCodeBlocks.after", e, t, n))
              : e;
          }),
          o.subParser("hashBlock", function (e, t, n) {
            "use strict";
            return (
              (e = (e = n.converter._dispatch(
                "hashBlock.before",
                e,
                t,
                n
              )).replace(/(^\n+|\n+$)/g, "")),
              (e = "\n\n\xa8K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n"),
              (e = n.converter._dispatch("hashBlock.after", e, t, n))
            );
          }),
          o.subParser("hashCodeTags", function (e, t, n) {
            "use strict";
            e = n.converter._dispatch("hashCodeTags.before", e, t, n);
            return (
              (e = o.helper.replaceRecursiveRegExp(
                e,
                function (e, r, i, a) {
                  var s = i + o.subParser("encodeCode")(r, t, n) + a;
                  return "\xa8C" + (n.gHtmlSpans.push(s) - 1) + "C";
                },
                "<code\\b[^>]*>",
                "</code>",
                "gim"
              )),
              (e = n.converter._dispatch("hashCodeTags.after", e, t, n))
            );
          }),
          o.subParser("hashElement", function (e, t, n) {
            "use strict";
            return function (e, t) {
              var r = t;
              return (
                (r = (r = (r = r.replace(/\n\n/g, "\n")).replace(
                  /^\n/,
                  ""
                )).replace(/\n+$/g, "")),
                (r = "\n\n\xa8K" + (n.gHtmlBlocks.push(r) - 1) + "K\n\n")
              );
            };
          }),
          o.subParser("hashHTMLBlocks", function (e, t, n) {
            "use strict";
            e = n.converter._dispatch("hashHTMLBlocks.before", e, t, n);
            var r = [
                "pre",
                "div",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "blockquote",
                "table",
                "dl",
                "ol",
                "ul",
                "script",
                "noscript",
                "form",
                "fieldset",
                "iframe",
                "math",
                "style",
                "section",
                "header",
                "footer",
                "nav",
                "article",
                "aside",
                "address",
                "audio",
                "canvas",
                "figure",
                "hgroup",
                "output",
                "video",
                "p",
              ],
              i = function (e, t, r, i) {
                var o = e;
                return (
                  -1 !== r.search(/\bmarkdown\b/) &&
                    (o = r + n.converter.makeHtml(t) + i),
                  "\n\n\xa8K" + (n.gHtmlBlocks.push(o) - 1) + "K\n\n"
                );
              };
            t.backslashEscapesHTMLTags &&
              (e = e.replace(/\\<(\/?[^>]+?)>/g, function (e, t) {
                return "&lt;" + t + "&gt;";
              }));
            for (var a = 0; a < r.length; ++a)
              for (
                var s,
                  l = new RegExp("^ {0,3}(<" + r[a] + "\\b[^>]*>)", "im"),
                  c = "<" + r[a] + "\\b[^>]*>",
                  u = "</" + r[a] + ">";
                -1 !== (s = o.helper.regexIndexOf(e, l));

              ) {
                var p = o.helper.splitAtIndex(e, s),
                  f = o.helper.replaceRecursiveRegExp(p[1], i, c, u, "im");
                if (f === p[1]) break;
                e = p[0].concat(f);
              }
            return (
              (e = e.replace(
                /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
                o.subParser("hashElement")(e, t, n)
              )),
              (e = (e = o.helper.replaceRecursiveRegExp(
                e,
                function (e) {
                  return "\n\n\xa8K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n";
                },
                "^ {0,3}\x3c!--",
                "--\x3e",
                "gm"
              )).replace(
                /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
                o.subParser("hashElement")(e, t, n)
              )),
              (e = n.converter._dispatch("hashHTMLBlocks.after", e, t, n))
            );
          }),
          o.subParser("hashHTMLSpans", function (e, t, n) {
            "use strict";
            function r(e) {
              return "\xa8C" + (n.gHtmlSpans.push(e) - 1) + "C";
            }
            return (
              (e = (e = (e = (e = (e = n.converter._dispatch(
                "hashHTMLSpans.before",
                e,
                t,
                n
              )).replace(/<[^>]+?\/>/gi, function (e) {
                return r(e);
              })).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (e) {
                return r(e);
              })).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (e) {
                return r(e);
              })).replace(/<[^>]+?>/gi, function (e) {
                return r(e);
              })),
              (e = n.converter._dispatch("hashHTMLSpans.after", e, t, n))
            );
          }),
          o.subParser("unhashHTMLSpans", function (e, t, n) {
            "use strict";
            e = n.converter._dispatch("unhashHTMLSpans.before", e, t, n);
            for (var r = 0; r < n.gHtmlSpans.length; ++r) {
              for (var i = n.gHtmlSpans[r], o = 0; /\xa8C(\d+)C/.test(i); ) {
                var a = RegExp.$1;
                if (
                  ((i = i.replace("\xa8C" + a + "C", n.gHtmlSpans[a])),
                  10 === o)
                ) {
                  console.error("maximum nesting of 10 spans reached!!!");
                  break;
                }
                ++o;
              }
              e = e.replace("\xa8C" + r + "C", i);
            }
            return (e = n.converter._dispatch(
              "unhashHTMLSpans.after",
              e,
              t,
              n
            ));
          }),
          o.subParser("hashPreCodeTags", function (e, t, n) {
            "use strict";
            e = n.converter._dispatch("hashPreCodeTags.before", e, t, n);
            return (
              (e = o.helper.replaceRecursiveRegExp(
                e,
                function (e, r, i, a) {
                  var s = i + o.subParser("encodeCode")(r, t, n) + a;
                  return (
                    "\n\n\xa8G" +
                    (n.ghCodeBlocks.push({ text: e, codeblock: s }) - 1) +
                    "G\n\n"
                  );
                },
                "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>",
                "^ {0,3}</code>\\s*</pre>",
                "gim"
              )),
              (e = n.converter._dispatch("hashPreCodeTags.after", e, t, n))
            );
          }),
          o.subParser("headers", function (e, t, n) {
            "use strict";
            e = n.converter._dispatch("headers.before", e, t, n);
            var r = isNaN(parseInt(t.headerLevelStart))
                ? 1
                : parseInt(t.headerLevelStart),
              i = t.smoothLivePreview
                ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm
                : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
              a = t.smoothLivePreview
                ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm
                : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
            e = (e = e.replace(i, function (e, i) {
              var a = o.subParser("spanGamut")(i, t, n),
                s = t.noHeaderId ? "" : ' id="' + l(i) + '"',
                c = "<h" + r + s + ">" + a + "</h" + r + ">";
              return o.subParser("hashBlock")(c, t, n);
            })).replace(a, function (e, i) {
              var a = o.subParser("spanGamut")(i, t, n),
                s = t.noHeaderId ? "" : ' id="' + l(i) + '"',
                c = r + 1,
                u = "<h" + c + s + ">" + a + "</h" + c + ">";
              return o.subParser("hashBlock")(u, t, n);
            });
            var s = t.requireSpaceBeforeHeadingText
              ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm
              : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
            function l(e) {
              var r, i;
              if (t.customizedHeaderId) {
                var a = e.match(/\{([^{]+?)}\s*$/);
                a && a[1] && (e = a[1]);
              }
              return (
                (r = e),
                (i = o.helper.isString(t.prefixHeaderId)
                  ? t.prefixHeaderId
                  : !0 === t.prefixHeaderId
                  ? "section-"
                  : ""),
                t.rawPrefixHeaderId || (r = i + r),
                (r = t.ghCompatibleHeaderId
                  ? r
                      .replace(/ /g, "-")
                      .replace(/&amp;/g, "")
                      .replace(/\xa8T/g, "")
                      .replace(/\xa8D/g, "")
                      .replace(/[&+$,\/:;=?@"#{}|^\xa8~\[\]`\\*)(%.!'<>]/g, "")
                      .toLowerCase()
                  : t.rawHeaderId
                  ? r
                      .replace(/ /g, "-")
                      .replace(/&amp;/g, "&")
                      .replace(/\xa8T/g, "\xa8")
                      .replace(/\xa8D/g, "$")
                      .replace(/["']/g, "-")
                      .toLowerCase()
                  : r.replace(/[^\w]/g, "").toLowerCase()),
                t.rawPrefixHeaderId && (r = i + r),
                n.hashLinkCounts[r]
                  ? (r = r + "-" + n.hashLinkCounts[r]++)
                  : (n.hashLinkCounts[r] = 1),
                r
              );
            }
            return (
              (e = e.replace(s, function (e, i, a) {
                var s = a;
                t.customizedHeaderId &&
                  (s = a.replace(/\s?\{([^{]+?)}\s*$/, ""));
                var c = o.subParser("spanGamut")(s, t, n),
                  u = t.noHeaderId ? "" : ' id="' + l(a) + '"',
                  p = r - 1 + i.length,
                  f = "<h" + p + u + ">" + c + "</h" + p + ">";
                return o.subParser("hashBlock")(f, t, n);
              })),
              (e = n.converter._dispatch("headers.after", e, t, n))
            );
          }),
          o.subParser("horizontalRule", function (e, t, n) {
            "use strict";
            e = n.converter._dispatch("horizontalRule.before", e, t, n);
            var r = o.subParser("hashBlock")("<hr />", t, n);
            return (
              (e = (e = (e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, r)).replace(
                /^ {0,2}( ?\*){3,}[ \t]*$/gm,
                r
              )).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, r)),
              (e = n.converter._dispatch("horizontalRule.after", e, t, n))
            );
          }),
          o.subParser("images", function (e, t, n) {
            "use strict";
            function r(e, t, r, i, a, s, l, c) {
              var u = n.gUrls,
                p = n.gTitles,
                f = n.gDimensions;
              if (
                ((r = r.toLowerCase()),
                c || (c = ""),
                e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
              )
                i = "";
              else if ("" === i || null === i) {
                if (
                  (("" !== r && null !== r) ||
                    (r = t.toLowerCase().replace(/ ?\n/g, " ")),
                  (i = "#" + r),
                  o.helper.isUndefined(u[r]))
                )
                  return e;
                (i = u[r]),
                  o.helper.isUndefined(p[r]) || (c = p[r]),
                  o.helper.isUndefined(f[r]) ||
                    ((a = f[r].width), (s = f[r].height));
              }
              t = t
                .replace(/"/g, "&quot;")
                .replace(
                  o.helper.regexes.asteriskDashAndColon,
                  o.helper.escapeCharactersCallback
                );
              var d =
                '<img src="' +
                (i = i.replace(
                  o.helper.regexes.asteriskDashAndColon,
                  o.helper.escapeCharactersCallback
                )) +
                '" alt="' +
                t +
                '"';
              return (
                c &&
                  o.helper.isString(c) &&
                  (d +=
                    ' title="' +
                    (c = c
                      .replace(/"/g, "&quot;")
                      .replace(
                        o.helper.regexes.asteriskDashAndColon,
                        o.helper.escapeCharactersCallback
                      )) +
                    '"'),
                a &&
                  s &&
                  ((d += ' width="' + (a = "*" === a ? "auto" : a) + '"'),
                  (d += ' height="' + (s = "*" === s ? "auto" : s) + '"')),
                (d += " />")
              );
            }
            return (
              (e = (e = (e = (e = (e = (e = n.converter._dispatch(
                "images.before",
                e,
                t,
                n
              )).replace(
                /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
                r
              )).replace(
                /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
                function (e, t, n, i, o, a, s, l) {
                  return r(e, t, n, (i = i.replace(/\s/g, "")), o, a, s, l);
                }
              )).replace(
                /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
                r
              )).replace(
                /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
                r
              )).replace(/!\[([^\[\]]+)]()()()()()/g, r)),
              (e = n.converter._dispatch("images.after", e, t, n))
            );
          }),
          o.subParser("italicsAndBold", function (e, t, n) {
            "use strict";
            function r(e, t, n) {
              return t + e + n;
            }
            return (
              (e = n.converter._dispatch("italicsAndBold.before", e, t, n)),
              (e = t.literalMidWordUnderscores
                ? (e = (e = e.replace(
                    /\b___(\S[\s\S]*?)___\b/g,
                    function (e, t) {
                      return r(t, "<strong><em>", "</em></strong>");
                    }
                  )).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, t) {
                    return r(t, "<strong>", "</strong>");
                  })).replace(/\b_(\S[\s\S]*?)_\b/g, function (e, t) {
                    return r(t, "<em>", "</em>");
                  })
                : (e = (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, t) {
                    return /\S$/.test(t)
                      ? r(t, "<strong><em>", "</em></strong>")
                      : e;
                  })).replace(/__(\S[\s\S]*?)__/g, function (e, t) {
                    return /\S$/.test(t) ? r(t, "<strong>", "</strong>") : e;
                  })).replace(/_([^\s_][\s\S]*?)_/g, function (e, t) {
                    return /\S$/.test(t) ? r(t, "<em>", "</em>") : e;
                  })),
              (e = t.literalMidWordAsterisks
                ? (e = (e = e.replace(
                    /([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,
                    function (e, t, n) {
                      return r(n, t + "<strong><em>", "</em></strong>");
                    }
                  )).replace(
                    /([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,
                    function (e, t, n) {
                      return r(n, t + "<strong>", "</strong>");
                    }
                  )).replace(
                    /([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,
                    function (e, t, n) {
                      return r(n, t + "<em>", "</em>");
                    }
                  )
                : (e = (e = e.replace(
                    /\*\*\*(\S[\s\S]*?)\*\*\*/g,
                    function (e, t) {
                      return /\S$/.test(t)
                        ? r(t, "<strong><em>", "</em></strong>")
                        : e;
                    }
                  )).replace(/\*\*(\S[\s\S]*?)\*\*/g, function (e, t) {
                    return /\S$/.test(t) ? r(t, "<strong>", "</strong>") : e;
                  })).replace(/\*([^\s*][\s\S]*?)\*/g, function (e, t) {
                    return /\S$/.test(t) ? r(t, "<em>", "</em>") : e;
                  })),
              (e = n.converter._dispatch("italicsAndBold.after", e, t, n))
            );
          }),
          o.subParser("lists", function (e, t, n) {
            "use strict";
            function r(e, r) {
              n.gListLevel++, (e = e.replace(/\n{2,}$/, "\n"));
              var i =
                  /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(\xa80| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
                a = /\n[ \t]*\n(?!\xa80)/.test((e += "\xa80"));
              return (
                t.disableForced4SpacesIndentedSublists &&
                  (i =
                    /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(\xa80|\2([*+-]|\d+[.])[ \t]+))/gm),
                (e = (e = e.replace(i, function (e, r, i, s, l, c, u) {
                  u = u && "" !== u.trim();
                  var p = o.subParser("outdent")(l, t, n),
                    f = "";
                  return (
                    c &&
                      t.tasklists &&
                      ((f =
                        ' class="task-list-item" style="list-style-type: none;"'),
                      (p = p.replace(/^[ \t]*\[(x|X| )?]/m, function () {
                        var e =
                          '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                        return u && (e += " checked"), (e += ">");
                      }))),
                    (p = p.replace(
                      /^([-*+]|\d\.)[ \t]+[\S\n ]*/g,
                      function (e) {
                        return "\xa8A" + e;
                      }
                    )),
                    r || p.search(/\n{2,}/) > -1
                      ? ((p = o.subParser("githubCodeBlocks")(p, t, n)),
                        (p = o.subParser("blockGamut")(p, t, n)))
                      : ((p = (p = o.subParser("lists")(p, t, n)).replace(
                          /\n$/,
                          ""
                        )),
                        (p = (p = o.subParser("hashHTMLBlocks")(
                          p,
                          t,
                          n
                        )).replace(/\n\n+/g, "\n\n")),
                        (p = a
                          ? o.subParser("paragraphs")(p, t, n)
                          : o.subParser("spanGamut")(p, t, n))),
                    (p =
                      "<li" +
                      f +
                      ">" +
                      (p = p.replace("\xa8A", "")) +
                      "</li>\n")
                  );
                })).replace(/\xa80/g, "")),
                n.gListLevel--,
                r && (e = e.replace(/\s+$/, "")),
                e
              );
            }
            function i(e, t) {
              if ("ol" === t) {
                var n = e.match(/^ *(\d+)\./);
                if (n && "1" !== n[1]) return ' start="' + n[1] + '"';
              }
              return "";
            }
            function a(e, n, o) {
              var a = t.disableForced4SpacesIndentedSublists
                  ? /^ ?\d+\.[ \t]/gm
                  : /^ {0,3}\d+\.[ \t]/gm,
                s = t.disableForced4SpacesIndentedSublists
                  ? /^ ?[*+-][ \t]/gm
                  : /^ {0,3}[*+-][ \t]/gm,
                l = "ul" === n ? a : s,
                c = "";
              if (-1 !== e.search(l))
                !(function t(u) {
                  var p = u.search(l),
                    f = i(e, n);
                  -1 !== p
                    ? ((c +=
                        "\n\n<" +
                        n +
                        f +
                        ">\n" +
                        r(u.slice(0, p), !!o) +
                        "</" +
                        n +
                        ">\n"),
                      (l = "ul" === (n = "ul" === n ? "ol" : "ul") ? a : s),
                      t(u.slice(p)))
                    : (c +=
                        "\n\n<" + n + f + ">\n" + r(u, !!o) + "</" + n + ">\n");
                })(e);
              else {
                var u = i(e, n);
                c = "\n\n<" + n + u + ">\n" + r(e, !!o) + "</" + n + ">\n";
              }
              return c;
            }
            return (
              (e = n.converter._dispatch("lists.before", e, t, n)),
              (e += "\xa80"),
              (e = (e = n.gListLevel
                ? e.replace(
                    /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(\xa80|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                    function (e, t, n) {
                      return a(t, n.search(/[*+-]/g) > -1 ? "ul" : "ol", !0);
                    }
                  )
                : e.replace(
                    /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(\xa80|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                    function (e, t, n, r) {
                      return a(n, r.search(/[*+-]/g) > -1 ? "ul" : "ol", !1);
                    }
                  )).replace(/\xa80/, "")),
              (e = n.converter._dispatch("lists.after", e, t, n))
            );
          }),
          o.subParser("metadata", function (e, t, n) {
            "use strict";
            if (!t.metadata) return e;
            function r(e) {
              (n.metadata.raw = e),
                (e = (e = e
                  .replace(/&/g, "&amp;")
                  .replace(/"/g, "&quot;")).replace(/\n {4}/g, " ")).replace(
                  /^([\S ]+): +([\s\S]+?)$/gm,
                  function (e, t, r) {
                    return (n.metadata.parsed[t] = r), "";
                  }
                );
            }
            return (
              (e = (e = (e = (e = n.converter._dispatch(
                "metadata.before",
                e,
                t,
                n
              )).replace(
                /^\s*\xab\xab\xab+(\S*?)\n([\s\S]+?)\n\xbb\xbb\xbb+\n/,
                function (e, t, n) {
                  return r(n), "\xa8M";
                }
              )).replace(
                /^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,
                function (e, t, i) {
                  return t && (n.metadata.format = t), r(i), "\xa8M";
                }
              )).replace(/\xa8M/g, "")),
              (e = n.converter._dispatch("metadata.after", e, t, n))
            );
          }),
          o.subParser("outdent", function (e, t, n) {
            "use strict";
            return (
              (e = (e = (e = n.converter._dispatch(
                "outdent.before",
                e,
                t,
                n
              )).replace(/^(\t|[ ]{1,4})/gm, "\xa80")).replace(/\xa80/g, "")),
              (e = n.converter._dispatch("outdent.after", e, t, n))
            );
          }),
          o.subParser("paragraphs", function (e, t, n) {
            "use strict";
            for (
              var r = (e = (e = (e = n.converter._dispatch(
                  "paragraphs.before",
                  e,
                  t,
                  n
                )).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g),
                i = [],
                a = r.length,
                s = 0;
              s < a;
              s++
            ) {
              var l = r[s];
              l.search(/\xa8(K|G)(\d+)\1/g) >= 0
                ? i.push(l)
                : l.search(/\S/) >= 0 &&
                  ((l = (l = o.subParser("spanGamut")(l, t, n)).replace(
                    /^([ \t]*)/g,
                    "<p>"
                  )),
                  (l += "</p>"),
                  i.push(l));
            }
            for (a = i.length, s = 0; s < a; s++) {
              for (var c = "", u = i[s], p = !1; /\xa8(K|G)(\d+)\1/.test(u); ) {
                var f = RegExp.$1,
                  d = RegExp.$2;
                (c = (c =
                  "K" === f
                    ? n.gHtmlBlocks[d]
                    : p
                    ? o.subParser("encodeCode")(n.ghCodeBlocks[d].text, t, n)
                    : n.ghCodeBlocks[d].codeblock).replace(/\$/g, "$$$$")),
                  (u = u.replace(/(\n\n)?\xa8(K|G)\d+\2(\n\n)?/, c)),
                  /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u) && (p = !0);
              }
              i[s] = u;
            }
            return (
              (e = (e = (e = i.join("\n")).replace(/^\n+/g, "")).replace(
                /\n+$/g,
                ""
              )),
              n.converter._dispatch("paragraphs.after", e, t, n)
            );
          }),
          o.subParser("runExtension", function (e, t, n, r) {
            "use strict";
            if (e.filter) t = e.filter(t, r.converter, n);
            else if (e.regex) {
              var i = e.regex;
              i instanceof RegExp || (i = new RegExp(i, "g")),
                (t = t.replace(i, e.replace));
            }
            return t;
          }),
          o.subParser("spanGamut", function (e, t, n) {
            "use strict";
            return (
              (e = n.converter._dispatch("spanGamut.before", e, t, n)),
              (e = o.subParser("codeSpans")(e, t, n)),
              (e = o.subParser("escapeSpecialCharsWithinTagAttributes")(
                e,
                t,
                n
              )),
              (e = o.subParser("encodeBackslashEscapes")(e, t, n)),
              (e = o.subParser("images")(e, t, n)),
              (e = o.subParser("anchors")(e, t, n)),
              (e = o.subParser("autoLinks")(e, t, n)),
              (e = o.subParser("simplifiedAutoLinks")(e, t, n)),
              (e = o.subParser("emoji")(e, t, n)),
              (e = o.subParser("underline")(e, t, n)),
              (e = o.subParser("italicsAndBold")(e, t, n)),
              (e = o.subParser("strikethrough")(e, t, n)),
              (e = o.subParser("ellipsis")(e, t, n)),
              (e = o.subParser("hashHTMLSpans")(e, t, n)),
              (e = o.subParser("encodeAmpsAndAngles")(e, t, n)),
              t.simpleLineBreaks
                ? /\n\n\xa8K/.test(e) || (e = e.replace(/\n+/g, "<br />\n"))
                : (e = e.replace(/  +\n/g, "<br />\n")),
              (e = n.converter._dispatch("spanGamut.after", e, t, n))
            );
          }),
          o.subParser("strikethrough", function (e, t, n) {
            "use strict";
            return (
              t.strikethrough &&
                ((e = (e = n.converter._dispatch(
                  "strikethrough.before",
                  e,
                  t,
                  n
                )).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (e, r) {
                  return (function (e) {
                    return (
                      t.simplifiedAutoLink &&
                        (e = o.subParser("simplifiedAutoLinks")(e, t, n)),
                      "<del>" + e + "</del>"
                    );
                  })(r);
                })),
                (e = n.converter._dispatch("strikethrough.after", e, t, n))),
              e
            );
          }),
          o.subParser("stripLinkDefinitions", function (e, t, n) {
            "use strict";
            var r = function (e, r, i, a, s, l, c) {
              return (
                (r = r.toLowerCase()),
                i.match(/^data:.+?\/.+?;base64,/)
                  ? (n.gUrls[r] = i.replace(/\s/g, ""))
                  : (n.gUrls[r] = o.subParser("encodeAmpsAndAngles")(i, t, n)),
                l
                  ? l + c
                  : (c && (n.gTitles[r] = c.replace(/"|'/g, "&quot;")),
                    t.parseImgDimensions &&
                      a &&
                      s &&
                      (n.gDimensions[r] = { width: a, height: s }),
                    "")
              );
            };
            return (e = (e = (e = (e += "\xa80").replace(
              /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=\xa80)|(?=\n\[))/gm,
              r
            )).replace(
              /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=\xa80))/gm,
              r
            )).replace(/\xa80/, ""));
          }),
          o.subParser("tables", function (e, t, n) {
            "use strict";
            if (!t.tables) return e;
            function r(e, r) {
              var i = "";
              return (
                (e = e.trim()),
                (t.tablesHeaderId || t.tableHeaderId) &&
                  (i = ' id="' + e.replace(/ /g, "_").toLowerCase() + '"'),
                "<th" +
                  i +
                  r +
                  ">" +
                  (e = o.subParser("spanGamut")(e, t, n)) +
                  "</th>\n"
              );
            }
            function i(e) {
              var i,
                a = e.split("\n");
              for (i = 0; i < a.length; ++i)
                /^ {0,3}\|/.test(a[i]) &&
                  (a[i] = a[i].replace(/^ {0,3}\|/, "")),
                  /\|[ \t]*$/.test(a[i]) &&
                    (a[i] = a[i].replace(/\|[ \t]*$/, "")),
                  (a[i] = o.subParser("codeSpans")(a[i], t, n));
              var s,
                l,
                c = a[0].split("|").map(function (e) {
                  return e.trim();
                }),
                u = a[1].split("|").map(function (e) {
                  return e.trim();
                }),
                p = [],
                f = [],
                d = [],
                h = [];
              for (a.shift(), a.shift(), i = 0; i < a.length; ++i)
                "" !== a[i].trim() &&
                  p.push(
                    a[i].split("|").map(function (e) {
                      return e.trim();
                    })
                  );
              if (c.length < u.length) return e;
              for (i = 0; i < u.length; ++i)
                d.push(
                  ((s = u[i]),
                  /^:[ \t]*--*$/.test(s)
                    ? ' style="text-align:left;"'
                    : /^--*[ \t]*:[ \t]*$/.test(s)
                    ? ' style="text-align:right;"'
                    : /^:[ \t]*--*[ \t]*:$/.test(s)
                    ? ' style="text-align:center;"'
                    : "")
                );
              for (i = 0; i < c.length; ++i)
                o.helper.isUndefined(d[i]) && (d[i] = ""),
                  f.push(r(c[i], d[i]));
              for (i = 0; i < p.length; ++i) {
                for (var y = [], m = 0; m < f.length; ++m)
                  o.helper.isUndefined(p[i][m]),
                    y.push(
                      ((l = p[i][m]),
                      "<td" +
                        d[m] +
                        ">" +
                        o.subParser("spanGamut")(l, t, n) +
                        "</td>\n")
                    );
                h.push(y);
              }
              return (function (e, t) {
                for (
                  var n = "<table>\n<thead>\n<tr>\n", r = e.length, i = 0;
                  i < r;
                  ++i
                )
                  n += e[i];
                for (
                  n += "</tr>\n</thead>\n<tbody>\n", i = 0;
                  i < t.length;
                  ++i
                ) {
                  n += "<tr>\n";
                  for (var o = 0; o < r; ++o) n += t[i][o];
                  n += "</tr>\n";
                }
                return n + "</tbody>\n</table>\n";
              })(f, h);
            }
            return (
              (e = (e = (e = (e = n.converter._dispatch(
                "tables.before",
                e,
                t,
                n
              )).replace(/\\(\|)/g, o.helper.escapeCharactersCallback)).replace(
                /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|\xa80)/gm,
                i
              )).replace(
                /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|\xa80)/gm,
                i
              )),
              (e = n.converter._dispatch("tables.after", e, t, n))
            );
          }),
          o.subParser("underline", function (e, t, n) {
            "use strict";
            return t.underline
              ? ((e = n.converter._dispatch("underline.before", e, t, n)),
                (e = (e = t.literalMidWordUnderscores
                  ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function (e, t) {
                      return "<u>" + t + "</u>";
                    })).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, t) {
                      return "<u>" + t + "</u>";
                    })
                  : (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, t) {
                      return /\S$/.test(t) ? "<u>" + t + "</u>" : e;
                    })).replace(/__(\S[\s\S]*?)__/g, function (e, t) {
                      return /\S$/.test(t) ? "<u>" + t + "</u>" : e;
                    })).replace(/(_)/g, o.helper.escapeCharactersCallback)),
                (e = n.converter._dispatch("underline.after", e, t, n)))
              : e;
          }),
          o.subParser("unescapeSpecialChars", function (e, t, n) {
            "use strict";
            return (
              (e = (e = n.converter._dispatch(
                "unescapeSpecialChars.before",
                e,
                t,
                n
              )).replace(/\xa8E(\d+)E/g, function (e, t) {
                var n = parseInt(t);
                return String.fromCharCode(n);
              })),
              (e = n.converter._dispatch("unescapeSpecialChars.after", e, t, n))
            );
          }),
          o.subParser("makeMarkdown.blockquote", function (e, t) {
            "use strict";
            var n = "";
            if (e.hasChildNodes())
              for (var r = e.childNodes, i = r.length, a = 0; a < i; ++a) {
                var s = o.subParser("makeMarkdown.node")(r[a], t);
                "" !== s && (n += s);
              }
            return (n = "> " + (n = n.trim()).split("\n").join("\n> "));
          }),
          o.subParser("makeMarkdown.codeBlock", function (e, t) {
            "use strict";
            var n = e.getAttribute("language"),
              r = e.getAttribute("precodenum");
            return "```" + n + "\n" + t.preList[r] + "\n```";
          }),
          o.subParser("makeMarkdown.codeSpan", function (e) {
            "use strict";
            return "`" + e.innerHTML + "`";
          }),
          o.subParser("makeMarkdown.emphasis", function (e, t) {
            "use strict";
            var n = "";
            if (e.hasChildNodes()) {
              n += "*";
              for (var r = e.childNodes, i = r.length, a = 0; a < i; ++a)
                n += o.subParser("makeMarkdown.node")(r[a], t);
              n += "*";
            }
            return n;
          }),
          o.subParser("makeMarkdown.header", function (e, t, n) {
            "use strict";
            var r = new Array(n + 1).join("#"),
              i = "";
            if (e.hasChildNodes()) {
              i = r + " ";
              for (var a = e.childNodes, s = a.length, l = 0; l < s; ++l)
                i += o.subParser("makeMarkdown.node")(a[l], t);
            }
            return i;
          }),
          o.subParser("makeMarkdown.hr", function () {
            "use strict";
            return "---";
          }),
          o.subParser("makeMarkdown.image", function (e) {
            "use strict";
            var t = "";
            return (
              e.hasAttribute("src") &&
                ((t += "![" + e.getAttribute("alt") + "]("),
                (t += "<" + e.getAttribute("src") + ">"),
                e.hasAttribute("width") &&
                  e.hasAttribute("height") &&
                  (t +=
                    " =" +
                    e.getAttribute("width") +
                    "x" +
                    e.getAttribute("height")),
                e.hasAttribute("title") &&
                  (t += ' "' + e.getAttribute("title") + '"'),
                (t += ")")),
              t
            );
          }),
          o.subParser("makeMarkdown.links", function (e, t) {
            "use strict";
            var n = "";
            if (e.hasChildNodes() && e.hasAttribute("href")) {
              var r = e.childNodes,
                i = r.length;
              n = "[";
              for (var a = 0; a < i; ++a)
                n += o.subParser("makeMarkdown.node")(r[a], t);
              (n += "]("),
                (n += "<" + e.getAttribute("href") + ">"),
                e.hasAttribute("title") &&
                  (n += ' "' + e.getAttribute("title") + '"'),
                (n += ")");
            }
            return n;
          }),
          o.subParser("makeMarkdown.list", function (e, t, n) {
            "use strict";
            var r = "";
            if (!e.hasChildNodes()) return "";
            for (
              var i = e.childNodes,
                a = i.length,
                s = e.getAttribute("start") || 1,
                l = 0;
              l < a;
              ++l
            )
              if (
                "undefined" !== typeof i[l].tagName &&
                "li" === i[l].tagName.toLowerCase()
              ) {
                (r +=
                  ("ol" === n ? s.toString() + ". " : "- ") +
                  o.subParser("makeMarkdown.listItem")(i[l], t)),
                  ++s;
              }
            return (r += "\n\x3c!-- --\x3e\n").trim();
          }),
          o.subParser("makeMarkdown.listItem", function (e, t) {
            "use strict";
            for (var n = "", r = e.childNodes, i = r.length, a = 0; a < i; ++a)
              n += o.subParser("makeMarkdown.node")(r[a], t);
            return (
              /\n$/.test(n)
                ? (n = n
                    .split("\n")
                    .join("\n    ")
                    .replace(/^ {4}$/gm, "")
                    .replace(/\n\n+/g, "\n\n"))
                : (n += "\n"),
              n
            );
          }),
          o.subParser("makeMarkdown.node", function (e, t, n) {
            "use strict";
            n = n || !1;
            var r = "";
            if (3 === e.nodeType) return o.subParser("makeMarkdown.txt")(e, t);
            if (8 === e.nodeType) return "\x3c!--" + e.data + "--\x3e\n\n";
            if (1 !== e.nodeType) return "";
            switch (e.tagName.toLowerCase()) {
              case "h1":
                n || (r = o.subParser("makeMarkdown.header")(e, t, 1) + "\n\n");
                break;
              case "h2":
                n || (r = o.subParser("makeMarkdown.header")(e, t, 2) + "\n\n");
                break;
              case "h3":
                n || (r = o.subParser("makeMarkdown.header")(e, t, 3) + "\n\n");
                break;
              case "h4":
                n || (r = o.subParser("makeMarkdown.header")(e, t, 4) + "\n\n");
                break;
              case "h5":
                n || (r = o.subParser("makeMarkdown.header")(e, t, 5) + "\n\n");
                break;
              case "h6":
                n || (r = o.subParser("makeMarkdown.header")(e, t, 6) + "\n\n");
                break;
              case "p":
                n || (r = o.subParser("makeMarkdown.paragraph")(e, t) + "\n\n");
                break;
              case "blockquote":
                n ||
                  (r = o.subParser("makeMarkdown.blockquote")(e, t) + "\n\n");
                break;
              case "hr":
                n || (r = o.subParser("makeMarkdown.hr")(e, t) + "\n\n");
                break;
              case "ol":
                n ||
                  (r = o.subParser("makeMarkdown.list")(e, t, "ol") + "\n\n");
                break;
              case "ul":
                n ||
                  (r = o.subParser("makeMarkdown.list")(e, t, "ul") + "\n\n");
                break;
              case "precode":
                n || (r = o.subParser("makeMarkdown.codeBlock")(e, t) + "\n\n");
                break;
              case "pre":
                n || (r = o.subParser("makeMarkdown.pre")(e, t) + "\n\n");
                break;
              case "table":
                n || (r = o.subParser("makeMarkdown.table")(e, t) + "\n\n");
                break;
              case "code":
                r = o.subParser("makeMarkdown.codeSpan")(e, t);
                break;
              case "em":
              case "i":
                r = o.subParser("makeMarkdown.emphasis")(e, t);
                break;
              case "strong":
              case "b":
                r = o.subParser("makeMarkdown.strong")(e, t);
                break;
              case "del":
                r = o.subParser("makeMarkdown.strikethrough")(e, t);
                break;
              case "a":
                r = o.subParser("makeMarkdown.links")(e, t);
                break;
              case "img":
                r = o.subParser("makeMarkdown.image")(e, t);
                break;
              default:
                r = e.outerHTML + "\n\n";
            }
            return r;
          }),
          o.subParser("makeMarkdown.paragraph", function (e, t) {
            "use strict";
            var n = "";
            if (e.hasChildNodes())
              for (var r = e.childNodes, i = r.length, a = 0; a < i; ++a)
                n += o.subParser("makeMarkdown.node")(r[a], t);
            return (n = n.trim());
          }),
          o.subParser("makeMarkdown.pre", function (e, t) {
            "use strict";
            var n = e.getAttribute("prenum");
            return "<pre>" + t.preList[n] + "</pre>";
          }),
          o.subParser("makeMarkdown.strikethrough", function (e, t) {
            "use strict";
            var n = "";
            if (e.hasChildNodes()) {
              n += "~~";
              for (var r = e.childNodes, i = r.length, a = 0; a < i; ++a)
                n += o.subParser("makeMarkdown.node")(r[a], t);
              n += "~~";
            }
            return n;
          }),
          o.subParser("makeMarkdown.strong", function (e, t) {
            "use strict";
            var n = "";
            if (e.hasChildNodes()) {
              n += "**";
              for (var r = e.childNodes, i = r.length, a = 0; a < i; ++a)
                n += o.subParser("makeMarkdown.node")(r[a], t);
              n += "**";
            }
            return n;
          }),
          o.subParser("makeMarkdown.table", function (e, t) {
            "use strict";
            var n,
              r,
              i = "",
              a = [[], []],
              s = e.querySelectorAll("thead>tr>th"),
              l = e.querySelectorAll("tbody>tr");
            for (n = 0; n < s.length; ++n) {
              var c = o.subParser("makeMarkdown.tableCell")(s[n], t),
                u = "---";
              if (s[n].hasAttribute("style"))
                switch (
                  s[n].getAttribute("style").toLowerCase().replace(/\s/g, "")
                ) {
                  case "text-align:left;":
                    u = ":---";
                    break;
                  case "text-align:right;":
                    u = "---:";
                    break;
                  case "text-align:center;":
                    u = ":---:";
                }
              (a[0][n] = c.trim()), (a[1][n] = u);
            }
            for (n = 0; n < l.length; ++n) {
              var p = a.push([]) - 1,
                f = l[n].getElementsByTagName("td");
              for (r = 0; r < s.length; ++r) {
                var d = " ";
                "undefined" !== typeof f[r] &&
                  (d = o.subParser("makeMarkdown.tableCell")(f[r], t)),
                  a[p].push(d);
              }
            }
            var h = 3;
            for (n = 0; n < a.length; ++n)
              for (r = 0; r < a[n].length; ++r) {
                var y = a[n][r].length;
                y > h && (h = y);
              }
            for (n = 0; n < a.length; ++n) {
              for (r = 0; r < a[n].length; ++r)
                1 === n
                  ? ":" === a[n][r].slice(-1)
                    ? (a[n][r] =
                        o.helper.padEnd(a[n][r].slice(-1), h - 1, "-") + ":")
                    : (a[n][r] = o.helper.padEnd(a[n][r], h, "-"))
                  : (a[n][r] = o.helper.padEnd(a[n][r], h));
              i += "| " + a[n].join(" | ") + " |\n";
            }
            return i.trim();
          }),
          o.subParser("makeMarkdown.tableCell", function (e, t) {
            "use strict";
            var n = "";
            if (!e.hasChildNodes()) return "";
            for (var r = e.childNodes, i = r.length, a = 0; a < i; ++a)
              n += o.subParser("makeMarkdown.node")(r[a], t, !0);
            return n.trim();
          }),
          o.subParser("makeMarkdown.txt", function (e) {
            "use strict";
            var t = e.nodeValue;
            return (
              (t = (t = t.replace(/ +/g, " ")).replace(/\xa8NBSP;/g, " ")),
              (t = (t = (t = (t = (t = (t = (t = (t = (t =
                o.helper.unescapeHTMLEntities(t)).replace(
                /([*_~|`])/g,
                "\\$1"
              )).replace(/^(\s*)>/g, "\\$1>")).replace(/^#/gm, "\\#")).replace(
                /^(\s*)([-=]{3,})(\s*)$/,
                "$1\\$2$3"
              )).replace(/^( {0,3}\d+)\./gm, "$1\\.")).replace(
                /^( {0,3})([+-])/gm,
                "$1\\$2"
              )).replace(/]([\s]*)\(/g, "\\]$1\\(")).replace(
                /^ {0,3}\[([\S \t]*?)]:/gm,
                "\\[$1]:"
              ))
            );
          });
        void 0 ===
          (r = function () {
            "use strict";
            return o;
          }.call(t, n, t, e)) || (e.exports = r);
      }).call(this);
    },
    MuZe: function (e, t) {
      function n(e, t) {
        (e.onload = function () {
          (this.onerror = this.onload = null), t(null, e);
        }),
          (e.onerror = function () {
            (this.onerror = this.onload = null),
              t(new Error("Failed to load " + this.src), e);
          });
      }
      function r(e, t) {
        e.onreadystatechange = function () {
          ("complete" != this.readyState && "loaded" != this.readyState) ||
            ((this.onreadystatechange = null), t(null, e));
        };
      }
      e.exports = function (e, t, i) {
        var o = document.head || document.getElementsByTagName("head")[0],
          a = document.createElement("script");
        "function" === typeof t && ((i = t), (t = {})),
          (t = t || {}),
          (i = i || function () {}),
          (a.type = t.type || "text/javascript"),
          (a.charset = t.charset || "utf8"),
          (a.async = !("async" in t) || !!t.async),
          (a.src = e),
          t.attrs &&
            (function (e, t) {
              for (var n in t) e.setAttribute(n, t[n]);
            })(a, t.attrs),
          t.text && (a.text = "" + t.text),
          ("onload" in a ? n : r)(a, i),
          a.onload || n(a, i),
          o.appendChild(a);
      };
    },
    OL05: function (e, t) {
      var n = "undefined" !== typeof Element,
        r = "function" === typeof Map,
        i = "function" === typeof Set,
        o = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
      function a(e, t) {
        if (e === t) return !0;
        if (e && t && "object" == typeof e && "object" == typeof t) {
          if (e.constructor !== t.constructor) return !1;
          var s, l, c, u;
          if (Array.isArray(e)) {
            if ((s = e.length) != t.length) return !1;
            for (l = s; 0 !== l--; ) if (!a(e[l], t[l])) return !1;
            return !0;
          }
          if (r && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1;
            for (u = e.entries(); !(l = u.next()).done; )
              if (!t.has(l.value[0])) return !1;
            for (u = e.entries(); !(l = u.next()).done; )
              if (!a(l.value[1], t.get(l.value[0]))) return !1;
            return !0;
          }
          if (i && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1;
            for (u = e.entries(); !(l = u.next()).done; )
              if (!t.has(l.value[0])) return !1;
            return !0;
          }
          if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if ((s = e.length) != t.length) return !1;
            for (l = s; 0 !== l--; ) if (e[l] !== t[l]) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === t.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === t.toString();
          if ((s = (c = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (l = s; 0 !== l--; )
            if (!Object.prototype.hasOwnProperty.call(t, c[l])) return !1;
          if (n && e instanceof Element) return !1;
          for (l = s; 0 !== l--; )
            if (
              (("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l]) ||
                !e.$$typeof) &&
              !a(e[c[l]], t[c[l]])
            )
              return !1;
          return !0;
        }
        return e !== e && t !== t;
      }
      e.exports = function (e, t) {
        try {
          return a(e, t);
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw n;
        }
      };
    },
    QK1G: function (e, t, n) {
      var r, i;
      window,
        void 0 ===
          (i =
            "function" ===
            typeof (r = function () {
              "use strict";
              function e(e) {
                var t = parseFloat(e);
                return -1 == e.indexOf("%") && !isNaN(t) && t;
              }
              function t() {}
              var n =
                  "undefined" == typeof console
                    ? t
                    : function (e) {
                        console.error(e);
                      },
                r = [
                  "paddingLeft",
                  "paddingRight",
                  "paddingTop",
                  "paddingBottom",
                  "marginLeft",
                  "marginRight",
                  "marginTop",
                  "marginBottom",
                  "borderLeftWidth",
                  "borderRightWidth",
                  "borderTopWidth",
                  "borderBottomWidth",
                ],
                i = r.length;
              function o() {
                for (
                  var e = {
                      width: 0,
                      height: 0,
                      innerWidth: 0,
                      innerHeight: 0,
                      outerWidth: 0,
                      outerHeight: 0,
                    },
                    t = 0;
                  t < i;
                  t++
                )
                  e[r[t]] = 0;
                return e;
              }
              function a(e) {
                var t = getComputedStyle(e);
                return (
                  t ||
                    n(
                      "Style returned " +
                        t +
                        ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                    ),
                  t
                );
              }
              var s,
                l = !1;
              function c() {
                if (!l) {
                  l = !0;
                  var t = document.createElement("div");
                  (t.style.width = "200px"),
                    (t.style.padding = "1px 2px 3px 4px"),
                    (t.style.borderStyle = "solid"),
                    (t.style.borderWidth = "1px 2px 3px 4px"),
                    (t.style.boxSizing = "border-box");
                  var n = document.body || document.documentElement;
                  n.appendChild(t);
                  var r = a(t);
                  (s = 200 == Math.round(e(r.width))),
                    (u.isBoxSizeOuter = s),
                    n.removeChild(t);
                }
              }
              function u(t) {
                if (
                  (c(),
                  "string" == typeof t && (t = document.querySelector(t)),
                  t && "object" == typeof t && t.nodeType)
                ) {
                  var n = a(t);
                  if ("none" == n.display) return o();
                  var l = {};
                  (l.width = t.offsetWidth), (l.height = t.offsetHeight);
                  for (
                    var u = (l.isBorderBox = "border-box" == n.boxSizing),
                      p = 0;
                    p < i;
                    p++
                  ) {
                    var f = r[p],
                      d = n[f],
                      h = parseFloat(d);
                    l[f] = isNaN(h) ? 0 : h;
                  }
                  var y = l.paddingLeft + l.paddingRight,
                    m = l.paddingTop + l.paddingBottom,
                    g = l.marginLeft + l.marginRight,
                    b = l.marginTop + l.marginBottom,
                    v = l.borderLeftWidth + l.borderRightWidth,
                    w = l.borderTopWidth + l.borderBottomWidth,
                    _ = u && s,
                    P = e(n.width);
                  !1 !== P && (l.width = P + (_ ? 0 : y + v));
                  var k = e(n.height);
                  return (
                    !1 !== k && (l.height = k + (_ ? 0 : m + w)),
                    (l.innerWidth = l.width - (y + v)),
                    (l.innerHeight = l.height - (m + w)),
                    (l.outerWidth = l.width + g),
                    (l.outerHeight = l.height + b),
                    l
                  );
                }
              }
              return u;
            })
              ? r.call(t, n, t, e)
              : r) || (e.exports = i);
    },
    QXAm: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultProps = t.propTypes = void 0);
      var r,
        i = (r = n("17x9")) && r.__esModule ? r : { default: r };
      var o = i.default.string,
        a = i.default.bool,
        s = i.default.number,
        l = i.default.array,
        c = i.default.oneOfType,
        u = i.default.shape,
        p = i.default.object,
        f = i.default.func,
        d = i.default.node,
        h = {
          url: c([o, l, p]),
          playing: a,
          loop: a,
          controls: a,
          volume: s,
          muted: a,
          playbackRate: s,
          width: c([o, s]),
          height: c([o, s]),
          style: p,
          progressInterval: s,
          playsinline: a,
          pip: a,
          stopOnUnmount: a,
          light: c([a, o]),
          playIcon: d,
          previewTabIndex: s,
          fallback: d,
          wrapper: c([o, f, u({ render: f.isRequired })]),
          config: u({
            soundcloud: u({ options: p }),
            youtube: u({ playerVars: p, embedOptions: p, onUnstarted: f }),
            facebook: u({ appId: o, version: o, playerId: o, attributes: p }),
            dailymotion: u({ params: p }),
            vimeo: u({ playerOptions: p }),
            file: u({
              attributes: p,
              tracks: l,
              forceVideo: a,
              forceAudio: a,
              forceHLS: a,
              forceDASH: a,
              forceFLV: a,
              hlsOptions: p,
              hlsVersion: o,
              dashVersion: o,
              flvVersion: o,
            }),
            wistia: u({ options: p, playerId: o, customControls: l }),
            mixcloud: u({ options: p }),
            twitch: u({ options: p, playerId: o }),
            vidyard: u({ options: p }),
          }),
          onReady: f,
          onStart: f,
          onPlay: f,
          onPause: f,
          onBuffer: f,
          onBufferEnd: f,
          onEnded: f,
          onError: f,
          onDuration: f,
          onSeek: f,
          onProgress: f,
          onClickPreview: f,
          onEnablePIP: f,
          onDisablePIP: f,
        };
      t.propTypes = h;
      var y = function () {},
        m = {
          playing: !1,
          loop: !1,
          controls: !1,
          volume: null,
          muted: !1,
          playbackRate: 1,
          width: "640px",
          height: "360px",
          style: {},
          progressInterval: 1e3,
          playsinline: !1,
          pip: !1,
          stopOnUnmount: !0,
          light: !1,
          fallback: null,
          wrapper: "div",
          previewTabIndex: 0,
          config: {
            soundcloud: {
              options: {
                visual: !0,
                buying: !1,
                liking: !1,
                download: !1,
                sharing: !1,
                show_comments: !1,
                show_playcount: !1,
              },
            },
            youtube: {
              playerVars: {
                playsinline: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                modestbranding: 1,
              },
              embedOptions: {},
              onUnstarted: y,
            },
            facebook: {
              appId: "1309697205772819",
              version: "v3.3",
              playerId: null,
              attributes: {},
            },
            dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
            vimeo: {
              playerOptions: {
                autopause: !1,
                byline: !1,
                portrait: !1,
                title: !1,
              },
            },
            file: {
              attributes: {},
              tracks: [],
              forceVideo: !1,
              forceAudio: !1,
              forceHLS: !1,
              forceDASH: !1,
              forceFLV: !1,
              hlsOptions: {},
              hlsVersion: "0.14.16",
              dashVersion: "3.1.3",
              flvVersion: "1.5.0",
            },
            wistia: { options: {}, playerId: null, customControls: null },
            mixcloud: { options: { hide_cover: 1 } },
            twitch: { options: {}, playerId: null },
            vidyard: { options: {} },
          },
          onReady: y,
          onStart: y,
          onPlay: y,
          onPause: y,
          onBuffer: y,
          onBufferEnd: y,
          onEnded: y,
          onError: y,
          onDuration: y,
          onSeek: y,
          onProgress: y,
          onClickPreview: y,
          onEnablePIP: y,
          onDisablePIP: y,
        };
      t.defaultProps = m;
    },
    Rom6: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        o = n("tbWI"),
        a = n("mzdp");
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if (
              "undefined" === typeof Symbol ||
              !(Symbol.iterator in Object(e))
            )
              return;
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (l) {
              (i = !0), (o = l);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return p(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return p(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var i = b(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return m(this, n);
        };
      }
      function m(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? g(e) : t;
      }
      function g(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function v(e, t, n) {
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
      var w = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && h(e, t);
        })(l, e);
        var t,
          n,
          r,
          s = y(l);
        function l() {
          var e;
          f(this, l);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            v(
              g((e = s.call.apply(s, [this].concat(n)))),
              "callPlayer",
              o.callPlayer
            ),
            v(g(e), "onDurationChange", function () {
              var t = e.getDuration();
              e.props.onDuration(t);
            }),
            v(g(e), "mute", function () {
              e.callPlayer("setMuted", !0);
            }),
            v(g(e), "unmute", function () {
              e.callPlayer("setMuted", !1);
            }),
            v(g(e), "ref", function (t) {
              e.container = t;
            }),
            e
          );
        }
        return (
          (t = l),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this,
                  n = this.props,
                  r = n.controls,
                  i = n.config,
                  s = n.onError,
                  l = n.playing,
                  p = u(e.match(a.MATCH_URL_DAILYMOTION), 2)[1];
                this.player
                  ? this.player.load(p, {
                      start: (0, o.parseStartTime)(e),
                      autoplay: l,
                    })
                  : (0, o.getSDK)(
                      "https://api.dmcdn.net/all.js",
                      "DM",
                      "dmAsyncInit",
                      function (e) {
                        return e.player;
                      }
                    ).then(function (n) {
                      if (t.container) {
                        var a = n.player;
                        t.player = new a(t.container, {
                          width: "100%",
                          height: "100%",
                          video: p,
                          params: c(
                            {
                              controls: r,
                              autoplay: t.props.playing,
                              mute: t.props.muted,
                              start: (0, o.parseStartTime)(e),
                              origin: window.location.origin,
                            },
                            i.params
                          ),
                          events: {
                            apiready: t.props.onReady,
                            seeked: function () {
                              return t.props.onSeek(t.player.currentTime);
                            },
                            video_end: t.props.onEnded,
                            durationchange: t.onDurationChange,
                            pause: t.props.onPause,
                            playing: t.props.onPlay,
                            waiting: t.props.onBuffer,
                            error: function (e) {
                              return s(e);
                            },
                          },
                        });
                      }
                    }, s);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seek", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.player.duration || null;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.player.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.player.bufferedTime;
              },
            },
            {
              key: "render",
              value: function () {
                var e = {
                  width: "100%",
                  height: "100%",
                  display: this.props.display,
                };
                return i.default.createElement(
                  "div",
                  { style: e },
                  i.default.createElement("div", { ref: this.ref })
                );
              },
            },
          ]) && d(t.prototype, n),
          r && d(t, r),
          l
        );
      })(i.Component);
      (t.default = w),
        v(w, "displayName", "DailyMotion"),
        v(w, "canPlay", a.canPlay.dailymotion),
        v(w, "loopOnEnded", !0);
    },
    SOks: function (e, t, n) {
      "use strict";
      var r = n("q1tI"),
        i = n.n(r),
        o = n("VdAu"),
        a = n("HJKE"),
        s = i.a.createElement;
      t.a = function () {
        return s(o.b, {
          width: [
            "calc(100% - ".concat(a.h.two, "px - ").concat(a.h.two, "px)"),
            "calc(100% - "
              .concat(a.h.sidePadding, "px - ")
              .concat(a.h.sidePadding, "px)"),
          ],
          height: ["1px", "2px"],
          mb: [a.h.three, a.h.six],
          mx: "auto",
          px: [a.h.sidePaddingMobile, a.h.sidePadding],
          bg: a.b.black,
          className: "line-break",
        });
      };
    },
    SWQu: function (e, t, n) {
      var r, i;
      !(function (o, a) {
        (r = [n("E4Uq"), n("72Lm"), n("YVj6")]),
          void 0 ===
            (i = function (e, t, n) {
              return (function (e, t, n, r) {
                "use strict";
                r.extend(t.defaults, { draggable: ">1", dragThreshold: 3 }),
                  t.createMethods.push("_createDrag");
                var i = t.prototype;
                r.extend(i, n.prototype), (i._touchActionValue = "pan-y");
                var o = "createTouch" in document,
                  a = !1;
                (i._createDrag = function () {
                  this.on("activate", this.onActivateDrag),
                    this.on("uiChange", this._uiChangeDrag),
                    this.on("deactivate", this.onDeactivateDrag),
                    this.on("cellChange", this.updateDraggable),
                    o &&
                      !a &&
                      (e.addEventListener("touchmove", function () {}),
                      (a = !0));
                }),
                  (i.onActivateDrag = function () {
                    (this.handles = [this.viewport]),
                      this.bindHandles(),
                      this.updateDraggable();
                  }),
                  (i.onDeactivateDrag = function () {
                    this.unbindHandles(),
                      this.element.classList.remove("is-draggable");
                  }),
                  (i.updateDraggable = function () {
                    ">1" == this.options.draggable
                      ? (this.isDraggable = this.slides.length > 1)
                      : (this.isDraggable = this.options.draggable),
                      this.isDraggable
                        ? this.element.classList.add("is-draggable")
                        : this.element.classList.remove("is-draggable");
                  }),
                  (i.bindDrag = function () {
                    (this.options.draggable = !0), this.updateDraggable();
                  }),
                  (i.unbindDrag = function () {
                    (this.options.draggable = !1), this.updateDraggable();
                  }),
                  (i._uiChangeDrag = function () {
                    delete this.isFreeScrolling;
                  }),
                  (i.pointerDown = function (t, n) {
                    this.isDraggable
                      ? this.okayPointerDown(t) &&
                        (this._pointerDownPreventDefault(t),
                        this.pointerDownFocus(t),
                        document.activeElement != this.element &&
                          this.pointerDownBlur(),
                        (this.dragX = this.x),
                        this.viewport.classList.add("is-pointer-down"),
                        (this.pointerDownScroll = l()),
                        e.addEventListener("scroll", this),
                        this._pointerDownDefault(t, n))
                      : this._pointerDownDefault(t, n);
                  }),
                  (i._pointerDownDefault = function (e, t) {
                    (this.pointerDownPointer = {
                      pageX: t.pageX,
                      pageY: t.pageY,
                    }),
                      this._bindPostStartEvents(e),
                      this.dispatchEvent("pointerDown", e, [t]);
                  });
                var s = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
                function l() {
                  return { x: e.pageXOffset, y: e.pageYOffset };
                }
                return (
                  (i.pointerDownFocus = function (e) {
                    s[e.target.nodeName] || this.focus();
                  }),
                  (i._pointerDownPreventDefault = function (e) {
                    var t = "touchstart" == e.type,
                      n = "touch" == e.pointerType,
                      r = s[e.target.nodeName];
                    t || n || r || e.preventDefault();
                  }),
                  (i.hasDragStarted = function (e) {
                    return Math.abs(e.x) > this.options.dragThreshold;
                  }),
                  (i.pointerUp = function (e, t) {
                    delete this.isTouchScrolling,
                      this.viewport.classList.remove("is-pointer-down"),
                      this.dispatchEvent("pointerUp", e, [t]),
                      this._dragPointerUp(e, t);
                  }),
                  (i.pointerDone = function () {
                    e.removeEventListener("scroll", this),
                      delete this.pointerDownScroll;
                  }),
                  (i.dragStart = function (t, n) {
                    this.isDraggable &&
                      ((this.dragStartPosition = this.x),
                      this.startAnimation(),
                      e.removeEventListener("scroll", this),
                      this.dispatchEvent("dragStart", t, [n]));
                  }),
                  (i.pointerMove = function (e, t) {
                    var n = this._dragPointerMove(e, t);
                    this.dispatchEvent("pointerMove", e, [t, n]),
                      this._dragMove(e, t, n);
                  }),
                  (i.dragMove = function (e, t, n) {
                    if (this.isDraggable) {
                      e.preventDefault(), (this.previousDragX = this.dragX);
                      var r = this.options.rightToLeft ? -1 : 1;
                      this.options.wrapAround && (n.x %= this.slideableWidth);
                      var i = this.dragStartPosition + n.x * r;
                      if (!this.options.wrapAround && this.slides.length) {
                        var o = Math.max(
                          -this.slides[0].target,
                          this.dragStartPosition
                        );
                        i = i > o ? 0.5 * (i + o) : i;
                        var a = Math.min(
                          -this.getLastSlide().target,
                          this.dragStartPosition
                        );
                        i = i < a ? 0.5 * (i + a) : i;
                      }
                      (this.dragX = i),
                        (this.dragMoveTime = new Date()),
                        this.dispatchEvent("dragMove", e, [t, n]);
                    }
                  }),
                  (i.dragEnd = function (e, t) {
                    if (this.isDraggable) {
                      this.options.freeScroll && (this.isFreeScrolling = !0);
                      var n = this.dragEndRestingSelect();
                      if (this.options.freeScroll && !this.options.wrapAround) {
                        var r = this.getRestingPosition();
                        this.isFreeScrolling =
                          -r > this.slides[0].target &&
                          -r < this.getLastSlide().target;
                      } else
                        this.options.freeScroll ||
                          n != this.selectedIndex ||
                          (n += this.dragEndBoostSelect());
                      delete this.previousDragX,
                        (this.isDragSelect = this.options.wrapAround),
                        this.select(n),
                        delete this.isDragSelect,
                        this.dispatchEvent("dragEnd", e, [t]);
                    }
                  }),
                  (i.dragEndRestingSelect = function () {
                    var e = this.getRestingPosition(),
                      t = Math.abs(
                        this.getSlideDistance(-e, this.selectedIndex)
                      ),
                      n = this._getClosestResting(e, t, 1),
                      r = this._getClosestResting(e, t, -1);
                    return n.distance < r.distance ? n.index : r.index;
                  }),
                  (i._getClosestResting = function (e, t, n) {
                    for (
                      var r = this.selectedIndex,
                        i = 1 / 0,
                        o =
                          this.options.contain && !this.options.wrapAround
                            ? function (e, t) {
                                return e <= t;
                              }
                            : function (e, t) {
                                return e < t;
                              };
                      o(t, i) &&
                      ((r += n),
                      (i = t),
                      null !== (t = this.getSlideDistance(-e, r)));

                    )
                      t = Math.abs(t);
                    return { distance: i, index: r - n };
                  }),
                  (i.getSlideDistance = function (e, t) {
                    var n = this.slides.length,
                      i = this.options.wrapAround && n > 1,
                      o = i ? r.modulo(t, n) : t,
                      a = this.slides[o];
                    if (!a) return null;
                    var s = i ? this.slideableWidth * Math.floor(t / n) : 0;
                    return e - (a.target + s);
                  }),
                  (i.dragEndBoostSelect = function () {
                    if (
                      void 0 === this.previousDragX ||
                      !this.dragMoveTime ||
                      new Date() - this.dragMoveTime > 100
                    )
                      return 0;
                    var e = this.getSlideDistance(
                        -this.dragX,
                        this.selectedIndex
                      ),
                      t = this.previousDragX - this.dragX;
                    return e > 0 && t > 0 ? 1 : e < 0 && t < 0 ? -1 : 0;
                  }),
                  (i.staticClick = function (e, t) {
                    var n = this.getParentCell(e.target),
                      r = n && n.element,
                      i = n && this.cells.indexOf(n);
                    this.dispatchEvent("staticClick", e, [t, r, i]);
                  }),
                  (i.onscroll = function () {
                    var e = l(),
                      t = this.pointerDownScroll.x - e.x,
                      n = this.pointerDownScroll.y - e.y;
                    (Math.abs(t) > 3 || Math.abs(n) > 3) && this._pointerDone();
                  }),
                  t
                );
              })(o, e, t, n);
            }.apply(t, r)) || (e.exports = i);
      })(window);
    },
    ToiD: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return p;
        }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "b", function () {
          return d;
        });
      var r = n("vJKn"),
        i = n.n(r),
        o = n("cpVT"),
        a = n("rg98"),
        s = n("6xqn");
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var u = (function () {
          var e = Object(a.a)(
            i.a.mark(function e(t) {
              var n;
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          s.b.get("/questions", {
                            params: c(
                              c({}, t),
                              {},
                              {
                                limit: t.limit || 26,
                                order: "createdAt",
                                dir: "-1",
                              }
                            ),
                          })
                        );
                      case 3:
                        return (
                          (n = e.sent),
                          e.abrupt("return", { status: 200, data: n.data })
                        );
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          e.abrupt("return", {
                            status: 404,
                            message: e.t0.message,
                          })
                        );
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        p = (function () {
          var e = Object(a.a)(
            i.a.mark(function e(t) {
              var n;
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0), (e.next = 3), s.a.post("/questions", t)
                        );
                      case 3:
                        return (
                          (n = e.sent),
                          e.abrupt("return", { status: 200, data: n.data })
                        );
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          e.abrupt("return", {
                            status: 404,
                            message: e.t0.message,
                          })
                        );
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        f = (function () {
          var e = Object(a.a)(
            i.a.mark(function e(t, n) {
              var r;
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          s.a.put("/questions/".concat(t), n)
                        );
                      case 3:
                        return (
                          (r = e.sent),
                          e.abrupt("return", { status: 200, data: r.data })
                        );
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          e.abrupt("return", {
                            status: 404,
                            message: e.t0.message,
                          })
                        );
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        d = (function () {
          var e = Object(a.a)(
            i.a.mark(function e(t) {
              var n;
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          s.a.delete("/questions/".concat(t))
                        );
                      case 3:
                        return (
                          (n = e.sent),
                          e.abrupt("return", { status: 200, data: n.data })
                        );
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          e.abrupt("return", {
                            status: 404,
                            message: e.t0.message,
                          })
                        );
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    "W4/P": function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        o = n("tbWI"),
        a = n("mzdp");
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = m(e);
          if (t) {
            var i = m(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return h(this, n);
        };
      }
      function h(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? y(e) : t;
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t, n) {
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
      var b = "wistia-player-",
        v = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && f(e, t);
          })(l, e);
          var t,
            n,
            r,
            s = d(l);
          function l() {
            var e;
            u(this, l);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              g(
                y((e = s.call.apply(s, [this].concat(n)))),
                "callPlayer",
                o.callPlayer
              ),
              g(
                y(e),
                "playerID",
                e.props.config.playerId ||
                  "".concat(b).concat((0, o.randomString)())
              ),
              g(y(e), "onPlay", function () {
                var t;
                return (t = e.props).onPlay.apply(t, arguments);
              }),
              g(y(e), "onPause", function () {
                var t;
                return (t = e.props).onPause.apply(t, arguments);
              }),
              g(y(e), "onSeek", function () {
                var t;
                return (t = e.props).onSeek.apply(t, arguments);
              }),
              g(y(e), "onEnded", function () {
                var t;
                return (t = e.props).onEnded.apply(t, arguments);
              }),
              g(y(e), "mute", function () {
                e.callPlayer("mute");
              }),
              g(y(e), "unmute", function () {
                e.callPlayer("unmute");
              }),
              e
            );
          }
          return (
            (t = l),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onMount && this.props.onMount(this);
                },
              },
              {
                key: "load",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.playing,
                    i = n.muted,
                    a = n.controls,
                    s = n.onReady,
                    l = n.config,
                    u = n.onError;
                  (0, o.getSDK)(
                    "https://fast.wistia.com/assets/external/E-v1.js",
                    "Wistia"
                  ).then(function (e) {
                    l.customControls &&
                      l.customControls.forEach(function (t) {
                        return e.defineControl(t);
                      }),
                      (window._wq = window._wq || []),
                      window._wq.push({
                        id: t.playerID,
                        options: c(
                          {
                            autoPlay: r,
                            silentAutoPlay: "allow",
                            muted: i,
                            controlsVisibleOnLoad: a,
                            fullscreenButton: a,
                            playbar: a,
                            playbackRateControl: a,
                            qualityControl: a,
                            volumeControl: a,
                            settingsControl: a,
                            smallPlayButton: a,
                          },
                          l.options
                        ),
                        onReady: function (e) {
                          (t.player = e),
                            t.unbind(),
                            t.player.bind("play", t.onPlay),
                            t.player.bind("pause", t.onPause),
                            t.player.bind("seek", t.onSeek),
                            t.player.bind("end", t.onEnded),
                            s();
                        },
                      });
                  }, u);
                },
              },
              {
                key: "unbind",
                value: function () {
                  this.player.unbind("play", this.onPlay),
                    this.player.unbind("pause", this.onPause),
                    this.player.unbind("seek", this.onSeek),
                    this.player.unbind("end", this.onEnded);
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "stop",
                value: function () {
                  this.unbind(), this.callPlayer("remove");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("time", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("volume", e);
                },
              },
              {
                key: "setPlaybackRate",
                value: function (e) {
                  this.callPlayer("playbackRate", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("duration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("time");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.url,
                    t = e && e.match(a.MATCH_URL_WISTIA)[1],
                    n = "wistia_embed wistia_async_".concat(t);
                  return i.default.createElement("div", {
                    id: this.playerID,
                    key: t,
                    className: n,
                    style: { width: "100%", height: "100%" },
                  });
                },
              },
            ]) && p(t.prototype, n),
            r && p(t, r),
            l
          );
        })(i.Component);
      (t.default = v),
        g(v, "displayName", "Wistia"),
        g(v, "canPlay", a.canPlay.wistia),
        g(v, "loopOnEnded", !0);
    },
    Wwog: function (e, t, n) {
      "use strict";
      n.r(t);
      var r =
        Number.isNaN ||
        function (e) {
          return "number" === typeof e && e !== e;
        };
      function i(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
          if (((i = e[n]), (o = t[n]), !(i === o || (r(i) && r(o))))) return !1;
        var i, o;
        return !0;
      }
      t.default = function (e, t) {
        var n;
        void 0 === t && (t = i);
        var r,
          o = [],
          a = !1;
        return function () {
          for (var i = [], s = 0; s < arguments.length; s++)
            i[s] = arguments[s];
          return (
            (a && n === this && t(i, o)) ||
              ((r = e.apply(this, i)), (a = !0), (n = this), (o = i)),
            r
          );
        };
      };
    },
    YVj6: function (e, t, n) {
      var r, i;
      !(function (o, a) {
        (r = [n("x0Ue")]),
          void 0 ===
            (i = function (e) {
              return (function (e, t) {
                "use strict";
                var n = {
                    extend: function (e, t) {
                      for (var n in t) e[n] = t[n];
                      return e;
                    },
                    modulo: function (e, t) {
                      return ((e % t) + t) % t;
                    },
                  },
                  r = Array.prototype.slice;
                (n.makeArray = function (e) {
                  return Array.isArray(e)
                    ? e
                    : null === e || void 0 === e
                    ? []
                    : "object" == typeof e && "number" == typeof e.length
                    ? r.call(e)
                    : [e];
                }),
                  (n.removeFrom = function (e, t) {
                    var n = e.indexOf(t);
                    -1 != n && e.splice(n, 1);
                  }),
                  (n.getParent = function (e, n) {
                    for (; e.parentNode && e != document.body; )
                      if (((e = e.parentNode), t(e, n))) return e;
                  }),
                  (n.getQueryElement = function (e) {
                    return "string" == typeof e ? document.querySelector(e) : e;
                  }),
                  (n.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                  }),
                  (n.filterFindElements = function (e, r) {
                    e = n.makeArray(e);
                    var i = [];
                    return (
                      e.forEach(function (e) {
                        if (e instanceof HTMLElement)
                          if (r) {
                            t(e, r) && i.push(e);
                            for (
                              var n = e.querySelectorAll(r), o = 0;
                              o < n.length;
                              o++
                            )
                              i.push(n[o]);
                          } else i.push(e);
                      }),
                      i
                    );
                  }),
                  (n.debounceMethod = function (e, t, n) {
                    n = n || 100;
                    var r = e.prototype[t],
                      i = t + "Timeout";
                    e.prototype[t] = function () {
                      var e = this[i];
                      clearTimeout(e);
                      var t = arguments,
                        o = this;
                      this[i] = setTimeout(function () {
                        r.apply(o, t), delete o[i];
                      }, n);
                    };
                  }),
                  (n.docReady = function (e) {
                    var t = document.readyState;
                    "complete" == t || "interactive" == t
                      ? setTimeout(e)
                      : document.addEventListener("DOMContentLoaded", e);
                  }),
                  (n.toDashed = function (e) {
                    return e
                      .replace(/(.)([A-Z])/g, function (e, t, n) {
                        return t + "-" + n;
                      })
                      .toLowerCase();
                  });
                var i = e.console;
                return (
                  (n.htmlInit = function (t, r) {
                    n.docReady(function () {
                      var o = n.toDashed(r),
                        a = "data-" + o,
                        s = document.querySelectorAll("[" + a + "]"),
                        l = document.querySelectorAll(".js-" + o),
                        c = n.makeArray(s).concat(n.makeArray(l)),
                        u = a + "-options",
                        p = e.jQuery;
                      c.forEach(function (e) {
                        var n,
                          o = e.getAttribute(a) || e.getAttribute(u);
                        try {
                          n = o && JSON.parse(o);
                        } catch (l) {
                          return void (
                            i &&
                            i.error(
                              "Error parsing " +
                                a +
                                " on " +
                                e.className +
                                ": " +
                                l
                            )
                          );
                        }
                        var s = new t(e, n);
                        p && p.data(e, r, s);
                      });
                    });
                  }),
                  n
                );
              })(o, e);
            }.apply(t, r)) || (e.exports = i);
      })(window);
    },
    a0Ta: function (e, t, n) {
      "use strict";
      var r = n("jT3O"),
        i = n("q1tI"),
        o = n.n(i),
        a = n("20a2"),
        s = n("LvDl"),
        l = n("VdAu"),
        c = n("PGlZ"),
        u = n("vOnD"),
        p = n("5gwC"),
        f = n("Qrgx"),
        d = n("euSZ"),
        h = n("p1tT"),
        y = n("grF8"),
        m = n("HJKE"),
        g = n("TfoY"),
        b = o.a.createElement;
      function v() {
        var e = Object(r.a)([
          "\n  z-index: 1;\n  max-height: 66px;\n  align-items: center;\n  overflow: scroll;\n  ",
          "\n  @media screen and (min-width: ",
          "px) {\n    flex-wrap: nowrap !important;\n    ",
          "\n  }\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  ",
          "\n",
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = Object(r.a)([
          "\n  display: flex !important;\n  width: 100%;\n  min-height: 120px;\n  max-height: 200px;\n  border-radius: ",
          ";\n  overflow: hidden;\n  box-shadow: ",
          ";\n  background-color: ",
          ";\n  @media screen and (min-width: ",
          "px) {\n    display: none !important;\n  }\n",
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = Object(r.a)(["\n      ", " 1s ", " forwards .5s\n    "]);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = Object(r.a)([
          "\n  display: flex !important;\n  opacity: 0;\n  transform: scale(0.97);\n  animation: ",
          ";\n",
        ]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = Object(r.a)([
          "\n    from {opacity: 0; transform: scale(.97);}\n    to {opacity: 1; transform: scale(1);}\n",
        ]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      var O = Object(u.d)(k()),
        j = Object(u.c)(l.b)(P(), function (e) {
          return e.active && Object(u.b)(_(), O, m.c.bezier);
        }),
        x = Object(u.c)(l.b)(
          w(),
          m.i.borderRadius,
          m.i.boxShadow,
          m.b.white,
          m.a.desktop
        ),
        S = Object(u.c)(l.b)(
          v(),
          function (e) {
            return e.showMobileStyles ? "" : "padding: 12px;";
          },
          m.a.tablet,
          function (e) {
            return e.showMobileStyles ? "" : "padding: 16px;";
          },
          function (e) {
            return e.isMobile
              ? "margin: -7px !important;\n    padding: 5px;"
              : "";
          }
        );
      t.a = function (e) {
        var t = e.data,
          n = e.small,
          r = (e.width, e.short),
          u = e.editor,
          v = e.handleStatusModal,
          w = e.showMobileStyles,
          _ = void 0 === w || w,
          P = Object(i.useState)(!1),
          k = P[0],
          O = P[1],
          E = Object(a.useRouter)(),
          C = Object(c.b)({ triggerOnce: !0 }),
          D = C.ref,
          M = C.inView,
          A = E.query.profileSlug,
          L = Object(g.c)(700),
          I = Object(g.c)() ? (r ? "310px" : "448px") : n ? "27vw" : "35vw",
          T = Object(i.useState)(0),
          z = T[0],
          R = T[1],
          N = Object(i.useState)(0),
          U = N[0],
          H = N[1],
          W = Object(i.useState)(0),
          B = W[0],
          V = W[1],
          q = Object(i.useState)(!1),
          F = (q[0], q[1]),
          $ = Object(i.useRef)(),
          G = Object(i.useRef)(),
          K = Object(i.useRef)();
        Object(i.useEffect)(
          function () {
            setTimeout(function () {
              X();
            }, 200);
          },
          [t]
        ),
          Object(i.useEffect)(function () {
            var e = function () {
              return X();
            };
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []);
        var X = function () {
          var e, t, n, r, i;
          H(
            null === G ||
              void 0 === G ||
              null === (e = G.current) ||
              void 0 === e
              ? void 0
              : e.offsetHeight
          ),
            V(
              null === K ||
                void 0 === K ||
                null === (t = K.current) ||
                void 0 === t
                ? void 0
                : t.offsetHeight
            ),
            R(
              (null === K ||
              void 0 === K ||
              null === (n = K.current) ||
              void 0 === n
                ? void 0
                : n.offsetHeight) -
                ((null === $ ||
                void 0 === $ ||
                null === (r = $.current) ||
                void 0 === r
                  ? void 0
                  : r.offsetHeight) +
                  (null === G ||
                  void 0 === G ||
                  null === (i = G.current) ||
                  void 0 === i
                    ? void 0
                    : i.offsetHeight))
            ),
            F(!0);
        };
        function Y(e, t, n) {
          var r = e.lastIndexOf(t);
          return r < 0 ? e : e.substring(0, r) + n + e.substring(r);
        }
        return L && _
          ? b(
              x,
              {
                onMouseEnter: function () {
                  return O(!0);
                },
                onMouseLeave: function () {
                  return O(!1);
                },
                tabIndex: 0,
                onClick: function () {
                  E.push(
                    u
                      ? "/editor/".concat(A, "/").concat(t.slug)
                      : "/pages/".concat(t.slug)
                  );
                },
                onKeyUp: function (e) {
                  ("Enter" !== e.key && " " !== e.key) ||
                    E.push(
                      u
                        ? "/editor/".concat(A, "/").concat(t.slug)
                        : "/pages/".concat(t.slug)
                    );
                },
              },
              t.image
                ? b(
                    l.b,
                    { flex: "1", sx: { position: "relative" } },
                    b(
                      l.a,
                      { sx: { position: "absolute", top: "6px", left: "6px" } },
                      b(y.a, { hover: k, date: t.updatedAt, clickEffect: !0 })
                    ),
                    b(l.c, {
                      alt: "Image ".concat(
                        Y(
                          t.image.replace(
                            t.image.includes("dev")
                              ? "gcd-studio-dev"
                              : "gcd-studio-prod",
                            t.image.includes("dev")
                              ? "gcd-studio-resized-dev"
                              : "gcd-studio-resized-prod"
                          ),
                          ".",
                          "-medium"
                        )
                      ),
                      src: Y(
                        t.image.replace(
                          t.image.includes("dev")
                            ? "gcd-studio-dev"
                            : "gcd-studio-prod",
                          t.image.includes("dev")
                            ? "gcd-studio-resized-dev"
                            : "gcd-studio-resized-prod"
                        ),
                        ".",
                        "-medium"
                      ),
                      sx: {
                        aspectRatio: "1/1",
                        objectFit: "cover",
                        filter: 2 === t.status && "opacity(50%)",
                      },
                      onClick: function () {
                        return E.push(
                          u
                            ? "/editor/".concat(A, "/").concat(t.slug)
                            : "/pages/".concat(t.slug)
                        );
                      },
                    })
                  )
                : null,
              b(
                l.b,
                {
                  flex: "2",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: ["12px", "16px"],
                },
                b(
                  p.a,
                  {
                    font: "sm",
                    wordBreak: "break-word",
                    color: 2 === t.status ? m.b.lightText : m.b.black,
                  },
                  Object(s.truncate)(t.title, { length: 60 })
                ),
                b(
                  l.b,
                  { alignItems: "center" },
                  b(
                    S,
                    { showMobileStyles: _, ref: G, isMobile: !0 },
                    t.image
                      ? null
                      : b(y.a, {
                          hover: k,
                          date: t.updatedAt,
                          clickEffect: !0,
                        }),
                    b(d.a, { hover: k, data: t.editors, type: "primary" }),
                    b(h.a, { hover: k, data: t.tags })
                  )
                )
              )
            )
          : b(
              o.a.Fragment,
              null,
              b(
                j,
                {
                  tabIndex: 0,
                  onKeyUp: function (e) {
                    ("Enter" !== e.key && " " !== e.key) ||
                      E.push(
                        u
                          ? "/editor/".concat(A, "/").concat(t.slug)
                          : "/pages/".concat(t.slug)
                      );
                  },
                  onMouseEnter: function () {
                    return O(!0);
                  },
                  onMouseLeave: function () {
                    return O(!1);
                  },
                  ref: D,
                  active: M,
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: I,
                  mb: [0, "auto"],
                  minHeight: n ? 300 : 420,
                  sx: { position: "relative", cursor: "pointer" },
                },
                b(l.a, {
                  ref: K,
                  sx: { position: "absolute" },
                  height: "100%",
                }),
                Object(s.isEmpty)(t.image) &&
                  b(
                    l.b,
                    {
                      sx: {
                        position: "absolute",
                        top: ["12px", "18px"],
                        left: ["12px", "18px"],
                      },
                    },
                    b(y.a, { hover: k, date: t.updatedAt, hoverEffect: !0 })
                  ),
                b(l.b, {
                  width: "calc(100% - 16px)",
                  height: "100%",
                  bg:
                    1 === t.status
                      ? m.b.whiteSmoke
                      : 1 === t.type
                      ? m.b.yellow
                      : m.b.white,
                  sx: {
                    position: "absolute",
                    top: 0,
                    left: "8px",
                    borderRadius: m.i.borderRadius,
                    boxShadow: k ? m.i.boxShadowHover : m.i.boxShadow,
                    transition: "all 0.5s",
                  },
                }),
                b(
                  l.b,
                  {
                    py: "18px",
                    mx: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    ref: $,
                    height: Object(s.isEmpty)(t.image) ? B - U : "auto",
                    sx: { position: "relative" },
                    onClick: function () {
                      return E.push(
                        u
                          ? "/editor/".concat(A, "/").concat(t.slug)
                          : "/pages/".concat(t.slug)
                      );
                    },
                  },
                  b(
                    p.a,
                    {
                      font: L ? "mdx" : n ? "md" : "lg",
                      wordBreak: "break-word",
                      pt: Object(s.isEmpty)(t.image) && m.h.two,
                      color: 2 === t.status ? m.b.lightText : m.b.black,
                    },
                    t.title
                  )
                ),
                !Object(s.isEmpty)(t.image) &&
                  b(
                    l.a,
                    { sx: { zIndex: 2, position: "relative" } },
                    b(
                      l.b,
                      {
                        sx: {
                          position: "absolute",
                          top: ["12px", "18px"],
                          left: ["12px", "18px"],
                        },
                      },
                      b(y.a, { hover: k, hoverEffect: !0, date: t.updatedAt })
                    ),
                    2 === t.status
                      ? b(l.a, {
                          width: "100%",
                          height: "100%",
                          sx: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            backgroundColor: m.b.white,
                            borderRadius: m.i.borderRadius,
                            zIndex: -1,
                          },
                        })
                      : null,
                    b(l.c, {
                      alt: "Image ".concat(
                        Y(
                          t.image.replace(
                            t.image.includes("dev")
                              ? "gcd-studio-dev"
                              : "gcd-studio-prod",
                            t.image.includes("dev")
                              ? "gcd-studio-resized-dev"
                              : "gcd-studio-resized-prod"
                          ),
                          ".",
                          "-medium"
                        )
                      ),
                      src: Y(
                        t.image.replace(
                          t.image.includes("dev")
                            ? "gcd-studio-dev"
                            : "gcd-studio-prod",
                          t.image.includes("dev")
                            ? "gcd-studio-resized-dev"
                            : "gcd-studio-resized-prod"
                        ),
                        ".",
                        "-medium"
                      ),
                      height: z,
                      width: "100%",
                      bg: m.b.white,
                      sx: {
                        display: "block",
                        objectFit: "cover",
                        objectPosition: "center center",
                        borderRadius: m.i.borderRadius,
                        boxShadow: m.i.boxShadow,
                        filter: 2 === t.status && "opacity(50%)",
                      },
                      onClick: function () {
                        return E.push(
                          u
                            ? "/editor/".concat(A, "/").concat(t.slug)
                            : "/pages/".concat(t.slug)
                        );
                      },
                    })
                  ),
                u
                  ? b(
                      l.b,
                      { py: "16px", mx: "16px", ref: G, sx: { zIndex: 1 } },
                      b(f.a, {
                        size: n ? "small" : "medium",
                        variant: "primary",
                        text: Object(g.e)(t.status),
                        handleClick: function () {
                          return v(t);
                        },
                      })
                    )
                  : b(
                      l.a,
                      { sx: { zIndex: 1 }, px: "8px" },
                      b(
                        S,
                        { ref: G },
                        b(d.a, { hover: k, data: t.editors, type: "primary" }),
                        b(h.a, { hover: k, data: t.tags })
                      )
                    )
              )
            );
      };
    },
    bA2t: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        o = n("tbWI"),
        a = n("mzdp");
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = y(e);
          if (t) {
            var i = y(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? h(e) : t;
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t, n) {
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
      var g = "twitch-player-",
        b = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(d, e);
          var t,
            n,
            r,
            s = f(d);
          function d() {
            var e;
            c(this, d);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              m(
                h((e = s.call.apply(s, [this].concat(n)))),
                "callPlayer",
                o.callPlayer
              ),
              m(
                h(e),
                "playerID",
                e.props.config.playerId ||
                  "".concat(g).concat((0, o.randomString)())
              ),
              m(h(e), "mute", function () {
                e.callPlayer("setMuted", !0);
              }),
              m(h(e), "unmute", function () {
                e.callPlayer("setMuted", !1);
              }),
              e
            );
          }
          return (
            (t = d),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onMount && this.props.onMount(this);
                },
              },
              {
                key: "load",
                value: function (e, t) {
                  var n = this,
                    r = this.props,
                    i = r.playsinline,
                    s = r.onError,
                    c = r.config,
                    u = r.controls,
                    p = a.MATCH_URL_TWITCH_CHANNEL.test(e),
                    f = p
                      ? e.match(a.MATCH_URL_TWITCH_CHANNEL)[1]
                      : e.match(a.MATCH_URL_TWITCH_VIDEO)[1];
                  t
                    ? p
                      ? this.player.setChannel(f)
                      : this.player.setVideo("v" + f)
                    : (0, o.getSDK)(
                        "https://player.twitch.tv/js/embed/v1.js",
                        "Twitch"
                      ).then(function (t) {
                        n.player = new t.Player(
                          n.playerID,
                          (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? l(Object(n), !0).forEach(function (t) {
                                    m(e, t, n[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(n)
                                  )
                                : l(Object(n)).forEach(function (t) {
                                    Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(n, t)
                                    );
                                  });
                            }
                            return e;
                          })(
                            {
                              video: p ? "" : f,
                              channel: p ? f : "",
                              height: "100%",
                              width: "100%",
                              playsinline: i,
                              autoplay: n.props.playing,
                              muted: n.props.muted,
                              controls: !!p || u,
                              time: (0, o.parseStartTime)(e),
                            },
                            c.options
                          )
                        );
                        var r = t.Player,
                          a = r.READY,
                          s = r.PLAYING,
                          d = r.PAUSE,
                          h = r.ENDED,
                          y = r.ONLINE,
                          g = r.OFFLINE;
                        n.player.addEventListener(a, n.props.onReady),
                          n.player.addEventListener(s, n.props.onPlay),
                          n.player.addEventListener(d, n.props.onPause),
                          n.player.addEventListener(h, n.props.onEnded),
                          n.player.addEventListener(y, n.props.onLoaded),
                          n.player.addEventListener(g, n.props.onLoaded);
                      }, s);
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "stop",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seek", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("getDuration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("getCurrentTime");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  return i.default.createElement("div", {
                    style: { width: "100%", height: "100%" },
                    id: this.playerID,
                  });
                },
              },
            ]) && u(t.prototype, n),
            r && u(t, r),
            d
          );
        })(i.Component);
      (t.default = b),
        m(b, "displayName", "Twitch"),
        m(b, "canPlay", a.canPlay.twitch),
        m(b, "loopOnEnded", !0);
    },
    "bq/u": function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        o = n("tbWI"),
        a = n("mzdp");
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = y(e);
          if (t) {
            var i = y(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? h(e) : t;
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t, n) {
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
      var g = "undefined" !== typeof navigator,
        b =
          g &&
          "MacIntel" === navigator.platform &&
          navigator.maxTouchPoints > 1,
        v =
          g &&
          (/iPad|iPhone|iPod/.test(navigator.userAgent) || b) &&
          !window.MSStream,
        w = /www\.dropbox\.com\/.+/,
        _ = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,
        P = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(d, e);
          var t,
            n,
            r,
            s = f(d);
          function d() {
            var e;
            c(this, d);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              m(
                h((e = s.call.apply(s, [this].concat(n)))),
                "onReady",
                function () {
                  var t;
                  return (t = e.props).onReady.apply(t, arguments);
                }
              ),
              m(h(e), "onPlay", function () {
                var t;
                return (t = e.props).onPlay.apply(t, arguments);
              }),
              m(h(e), "onBuffer", function () {
                var t;
                return (t = e.props).onBuffer.apply(t, arguments);
              }),
              m(h(e), "onBufferEnd", function () {
                var t;
                return (t = e.props).onBufferEnd.apply(t, arguments);
              }),
              m(h(e), "onPause", function () {
                var t;
                return (t = e.props).onPause.apply(t, arguments);
              }),
              m(h(e), "onEnded", function () {
                var t;
                return (t = e.props).onEnded.apply(t, arguments);
              }),
              m(h(e), "onError", function () {
                var t;
                return (t = e.props).onError.apply(t, arguments);
              }),
              m(h(e), "onEnablePIP", function () {
                var t;
                return (t = e.props).onEnablePIP.apply(t, arguments);
              }),
              m(h(e), "onDisablePIP", function (t) {
                var n = e.props,
                  r = n.onDisablePIP,
                  i = n.playing;
                r(t), i && e.play();
              }),
              m(h(e), "onPresentationModeChange", function (t) {
                if (
                  e.player &&
                  (0, o.supportsWebKitPresentationMode)(e.player)
                ) {
                  var n = e.player.webkitPresentationMode;
                  "picture-in-picture" === n
                    ? e.onEnablePIP(t)
                    : "inline" === n && e.onDisablePIP(t);
                }
              }),
              m(h(e), "onSeek", function (t) {
                e.props.onSeek(t.target.currentTime);
              }),
              m(h(e), "mute", function () {
                e.player.muted = !0;
              }),
              m(h(e), "unmute", function () {
                e.player.muted = !1;
              }),
              m(h(e), "renderSourceElement", function (e, t) {
                return "string" === typeof e
                  ? i.default.createElement("source", { key: t, src: e })
                  : i.default.createElement("source", l({ key: t }, e));
              }),
              m(h(e), "renderTrack", function (e, t) {
                return i.default.createElement("track", l({ key: t }, e));
              }),
              m(h(e), "ref", function (t) {
                e.player && (e.prevPlayer = e.player), (e.player = t);
              }),
              e
            );
          }
          return (
            (t = d),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onMount && this.props.onMount(this),
                    this.addListeners(this.player),
                    v && this.player.load();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) &&
                    (this.removeListeners(this.prevPlayer, e.url),
                    this.addListeners(this.player)),
                    this.props.url === e.url ||
                      (0, o.isMediaStream)(this.props.url) ||
                      (this.player.srcObject = null);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.removeListeners(this.player),
                    this.hls && this.hls.destroy();
                },
              },
              {
                key: "addListeners",
                value: function (e) {
                  var t = this.props,
                    n = t.url,
                    r = t.playsinline;
                  e.addEventListener("play", this.onPlay),
                    e.addEventListener("waiting", this.onBuffer),
                    e.addEventListener("playing", this.onBufferEnd),
                    e.addEventListener("pause", this.onPause),
                    e.addEventListener("seeked", this.onSeek),
                    e.addEventListener("ended", this.onEnded),
                    e.addEventListener("error", this.onError),
                    e.addEventListener(
                      "enterpictureinpicture",
                      this.onEnablePIP
                    ),
                    e.addEventListener(
                      "leavepictureinpicture",
                      this.onDisablePIP
                    ),
                    e.addEventListener(
                      "webkitpresentationmodechanged",
                      this.onPresentationModeChange
                    ),
                    this.shouldUseHLS(n) ||
                      e.addEventListener("canplay", this.onReady),
                    r &&
                      (e.setAttribute("playsinline", ""),
                      e.setAttribute("webkit-playsinline", ""),
                      e.setAttribute("x5-playsinline", ""));
                },
              },
              {
                key: "removeListeners",
                value: function (e, t) {
                  e.removeEventListener("canplay", this.onReady),
                    e.removeEventListener("play", this.onPlay),
                    e.removeEventListener("waiting", this.onBuffer),
                    e.removeEventListener("playing", this.onBufferEnd),
                    e.removeEventListener("pause", this.onPause),
                    e.removeEventListener("seeked", this.onSeek),
                    e.removeEventListener("ended", this.onEnded),
                    e.removeEventListener("error", this.onError),
                    e.removeEventListener(
                      "enterpictureinpicture",
                      this.onEnablePIP
                    ),
                    e.removeEventListener(
                      "leavepictureinpicture",
                      this.onDisablePIP
                    ),
                    e.removeEventListener(
                      "webkitpresentationmodechanged",
                      this.onPresentationModeChange
                    ),
                    this.shouldUseHLS(t) ||
                      e.removeEventListener("canplay", this.onReady);
                },
              },
              {
                key: "shouldUseAudio",
                value: function (e) {
                  return (
                    !e.config.forceVideo &&
                    !e.config.attributes.poster &&
                    (a.AUDIO_EXTENSIONS.test(e.url) || e.config.forceAudio)
                  );
                },
              },
              {
                key: "shouldUseHLS",
                value: function (e) {
                  return (
                    !!this.props.config.forceHLS ||
                    (!v && (a.HLS_EXTENSIONS.test(e) || _.test(e)))
                  );
                },
              },
              {
                key: "shouldUseDASH",
                value: function (e) {
                  return (
                    a.DASH_EXTENSIONS.test(e) || this.props.config.forceDASH
                  );
                },
              },
              {
                key: "shouldUseFLV",
                value: function (e) {
                  return a.FLV_EXTENSIONS.test(e) || this.props.config.forceFLV;
                },
              },
              {
                key: "load",
                value: function (e) {
                  var t = this,
                    n = this.props.config,
                    r = n.hlsVersion,
                    i = n.hlsOptions,
                    a = n.dashVersion,
                    s = n.flvVersion;
                  if (
                    (this.hls && this.hls.destroy(),
                    this.dash && this.dash.reset(),
                    this.shouldUseHLS(e) &&
                      (0, o.getSDK)(
                        "https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace(
                          "VERSION",
                          r
                        ),
                        "Hls"
                      ).then(function (n) {
                        if (
                          ((t.hls = new n(i)),
                          t.hls.on(n.Events.MANIFEST_PARSED, function () {
                            t.props.onReady();
                          }),
                          t.hls.on(n.Events.ERROR, function (e, r) {
                            t.props.onError(e, r, t.hls, n);
                          }),
                          _.test(e))
                        ) {
                          var r = e.match(_)[1];
                          t.hls.loadSource(
                            "https://videodelivery.net/{id}/manifest/video.m3u8".replace(
                              "{id}",
                              r
                            )
                          );
                        } else t.hls.loadSource(e);
                        t.hls.attachMedia(t.player), t.props.onLoaded();
                      }),
                    this.shouldUseDASH(e) &&
                      (0, o.getSDK)(
                        "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace(
                          "VERSION",
                          a
                        ),
                        "dashjs"
                      ).then(function (n) {
                        (t.dash = n.MediaPlayer().create()),
                          t.dash.initialize(t.player, e, t.props.playing),
                          t.dash.on("error", t.props.onError),
                          parseInt(a) < 3
                            ? t.dash.getDebug().setLogToBrowserConsole(!1)
                            : t.dash.updateSettings({
                                debug: { logLevel: n.Debug.LOG_LEVEL_NONE },
                              }),
                          t.props.onLoaded();
                      }),
                    this.shouldUseFLV(e) &&
                      (0, o.getSDK)(
                        "https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace(
                          "VERSION",
                          s
                        ),
                        "flvjs"
                      ).then(function (n) {
                        (t.flv = n.createPlayer({ type: "flv", url: e })),
                          t.flv.attachMediaElement(t.player),
                          t.flv.load(),
                          t.props.onLoaded();
                      }),
                    e instanceof Array)
                  )
                    this.player.load();
                  else if ((0, o.isMediaStream)(e))
                    try {
                      this.player.srcObject = e;
                    } catch (l) {
                      this.player.src = window.URL.createObjectURL(e);
                    }
                },
              },
              {
                key: "play",
                value: function () {
                  var e = this.player.play();
                  e && e.catch(this.props.onError);
                },
              },
              {
                key: "pause",
                value: function () {
                  this.player.pause();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.player.removeAttribute("src"),
                    this.dash && this.dash.reset();
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.player.currentTime = e;
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.player.volume = e;
                },
              },
              {
                key: "enablePIP",
                value: function () {
                  this.player.requestPictureInPicture &&
                  document.pictureInPictureElement !== this.player
                    ? this.player.requestPictureInPicture()
                    : (0, o.supportsWebKitPresentationMode)(this.player) &&
                      "picture-in-picture" !==
                        this.player.webkitPresentationMode &&
                      this.player.webkitSetPresentationMode(
                        "picture-in-picture"
                      );
                },
              },
              {
                key: "disablePIP",
                value: function () {
                  document.exitPictureInPicture &&
                  document.pictureInPictureElement === this.player
                    ? document.exitPictureInPicture()
                    : (0, o.supportsWebKitPresentationMode)(this.player) &&
                      "inline" !== this.player.webkitPresentationMode &&
                      this.player.webkitSetPresentationMode("inline");
                },
              },
              {
                key: "setPlaybackRate",
                value: function (e) {
                  this.player.playbackRate = e;
                },
              },
              {
                key: "getDuration",
                value: function () {
                  if (!this.player) return null;
                  var e = this.player,
                    t = e.duration,
                    n = e.seekable;
                  return t === 1 / 0 && n.length > 0 ? n.end(n.length - 1) : t;
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.player ? this.player.currentTime : null;
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  if (!this.player) return null;
                  var e = this.player.buffered;
                  if (0 === e.length) return 0;
                  var t = e.end(e.length - 1),
                    n = this.getDuration();
                  return t > n ? n : t;
                },
              },
              {
                key: "getSource",
                value: function (e) {
                  var t = this.shouldUseHLS(e),
                    n = this.shouldUseDASH(e),
                    r = this.shouldUseFLV(e);
                  if (
                    !(
                      e instanceof Array ||
                      (0, o.isMediaStream)(e) ||
                      t ||
                      n ||
                      r
                    )
                  )
                    return w.test(e)
                      ? e.replace(
                          "www.dropbox.com",
                          "dl.dropboxusercontent.com"
                        )
                      : e;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.url,
                    n = e.playing,
                    r = e.loop,
                    o = e.controls,
                    a = e.muted,
                    s = e.config,
                    c = e.width,
                    u = e.height,
                    p = this.shouldUseAudio(this.props) ? "audio" : "video",
                    f = {
                      width: "auto" === c ? c : "100%",
                      height: "auto" === u ? u : "100%",
                    };
                  return i.default.createElement(
                    p,
                    l(
                      {
                        ref: this.ref,
                        src: this.getSource(t),
                        style: f,
                        preload: "auto",
                        autoPlay: n || void 0,
                        controls: o,
                        muted: a,
                        loop: r,
                      },
                      s.attributes
                    ),
                    t instanceof Array && t.map(this.renderSourceElement),
                    s.tracks.map(this.renderTrack)
                  );
                },
              },
            ]) && u(t.prototype, n),
            r && u(t, r),
            d
          );
        })(i.Component);
      (t.default = P),
        m(P, "displayName", "FilePlayer"),
        m(P, "canPlay", a.canPlay.file);
    },
    dlLY: function (e, t, n) {
      var r, i;
      window,
        void 0 ===
          (i =
            "function" ===
            typeof (r = function () {
              "use strict";
              function e(e) {
                (this.parent = e),
                  (this.isOriginLeft = "left" == e.originSide),
                  (this.cells = []),
                  (this.outerWidth = 0),
                  (this.height = 0);
              }
              var t = e.prototype;
              return (
                (t.addCell = function (e) {
                  if (
                    (this.cells.push(e),
                    (this.outerWidth += e.size.outerWidth),
                    (this.height = Math.max(e.size.outerHeight, this.height)),
                    1 == this.cells.length)
                  ) {
                    this.x = e.x;
                    var t = this.isOriginLeft ? "marginLeft" : "marginRight";
                    this.firstMargin = e.size[t];
                  }
                }),
                (t.updateTarget = function () {
                  var e = this.isOriginLeft ? "marginRight" : "marginLeft",
                    t = this.getLastCell(),
                    n = t ? t.size[e] : 0,
                    r = this.outerWidth - (this.firstMargin + n);
                  this.target =
                    this.x + this.firstMargin + r * this.parent.cellAlign;
                }),
                (t.getLastCell = function () {
                  return this.cells[this.cells.length - 1];
                }),
                (t.select = function () {
                  this.cells.forEach(function (e) {
                    e.select();
                  });
                }),
                (t.unselect = function () {
                  this.cells.forEach(function (e) {
                    e.unselect();
                  });
                }),
                (t.getCellElements = function () {
                  return this.cells.map(function (e) {
                    return e.element;
                  });
                }),
                e
              );
            })
              ? r.call(t, n, t, e)
              : r) || (e.exports = i);
    },
    f77o: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        o = n("tbWI"),
        a = n("mzdp");
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = y(e);
          if (t) {
            var i = y(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? h(e) : t;
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t, n) {
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
      var g = "https://connect.facebook.net/en_US/sdk.js",
        b = "fbAsyncInit",
        v = "facebook-player-",
        w = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(s, e);
          var t,
            n,
            r,
            a = f(s);
          function s() {
            var e;
            c(this, s);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              m(
                h((e = a.call.apply(a, [this].concat(n)))),
                "callPlayer",
                o.callPlayer
              ),
              m(
                h(e),
                "playerID",
                e.props.config.playerId ||
                  "".concat(v).concat((0, o.randomString)())
              ),
              m(h(e), "mute", function () {
                e.callPlayer("mute");
              }),
              m(h(e), "unmute", function () {
                e.callPlayer("unmute");
              }),
              e
            );
          }
          return (
            (t = s),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onMount && this.props.onMount(this);
                },
              },
              {
                key: "load",
                value: function (e, t) {
                  var n = this;
                  t
                    ? (0, o.getSDK)(g, "FB", b).then(function (e) {
                        return e.XFBML.parse();
                      })
                    : (0, o.getSDK)(g, "FB", b).then(function (e) {
                        e.init({
                          appId: n.props.config.appId,
                          xfbml: !0,
                          version: n.props.config.version,
                        }),
                          e.Event.subscribe("xfbml.render", function (e) {
                            n.props.onLoaded();
                          }),
                          e.Event.subscribe("xfbml.ready", function (e) {
                            "video" === e.type &&
                              e.id === n.playerID &&
                              ((n.player = e.instance),
                              n.player.subscribe(
                                "startedPlaying",
                                n.props.onPlay
                              ),
                              n.player.subscribe("paused", n.props.onPause),
                              n.player.subscribe(
                                "finishedPlaying",
                                n.props.onEnded
                              ),
                              n.player.subscribe(
                                "startedBuffering",
                                n.props.onBuffer
                              ),
                              n.player.subscribe(
                                "finishedBuffering",
                                n.props.onBufferEnd
                              ),
                              n.player.subscribe("error", n.props.onError),
                              n.props.muted
                                ? n.callPlayer("mute")
                                : n.callPlayer("unmute"),
                              n.props.onReady(),
                              (document
                                .getElementById(n.playerID)
                                .querySelector("iframe").style.visibility =
                                "visible"));
                          });
                      });
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              { key: "stop", value: function () {} },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seek", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("getDuration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("getCurrentPosition");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.config.attributes;
                  return i.default.createElement(
                    "div",
                    l(
                      {
                        style: { width: "100%", height: "100%" },
                        id: this.playerID,
                        className: "fb-video",
                        "data-href": this.props.url,
                        "data-autoplay": this.props.playing ? "true" : "false",
                        "data-allowfullscreen": "true",
                        "data-controls": this.props.controls ? "true" : "false",
                      },
                      e
                    )
                  );
                },
              },
            ]) && u(t.prototype, n),
            r && u(t, r),
            s
          );
        })(i.Component);
      (t.default = w),
        m(w, "displayName", "Facebook"),
        m(w, "canPlay", a.canPlay.facebook),
        m(w, "loopOnEnded", !0);
    },
    fPw2: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        o = n("tbWI"),
        a = n("mzdp");
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = y(e);
          if (t) {
            var i = y(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? h(e) : t;
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t, n) {
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
      var g = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        })(d, e);
        var t,
          n,
          r,
          s = f(d);
        function d() {
          var e;
          c(this, d);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            m(
              h((e = s.call.apply(s, [this].concat(n)))),
              "callPlayer",
              o.callPlayer
            ),
            m(h(e), "mute", function () {
              e.setVolume(0);
            }),
            m(h(e), "unmute", function () {
              null !== e.props.volume && e.setVolume(e.props.volume);
            }),
            m(h(e), "ref", function (t) {
              e.container = t;
            }),
            e
          );
        }
        return (
          (t = d),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this,
                  n = this.props,
                  r = n.playing,
                  i = n.config,
                  s = n.onError,
                  c = n.onDuration,
                  u = e && e.match(a.MATCH_URL_VIDYARD)[1];
                this.player && this.stop(),
                  (0, o.getSDK)(
                    "https://play.vidyard.com/embed/v4.js",
                    "VidyardV4",
                    "onVidyardAPI"
                  ).then(function (e) {
                    t.container &&
                      (e.api.addReadyListener(function (e, n) {
                        (t.player = n),
                          t.player.on("ready", t.props.onReady),
                          t.player.on("play", t.props.onPlay),
                          t.player.on("pause", t.props.onPause),
                          t.player.on("seek", t.props.onSeek),
                          t.player.on("playerComplete", t.props.onEnded);
                      }, u),
                      e.api.renderPlayer(
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? l(Object(n), !0).forEach(function (t) {
                                  m(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n)
                                )
                              : l(Object(n)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t)
                                  );
                                });
                          }
                          return e;
                        })(
                          {
                            uuid: u,
                            container: t.container,
                            autoplay: r ? 1 : 0,
                          },
                          i.options
                        )
                      ),
                      e.api.getPlayerMetadata(u).then(function (e) {
                        (t.duration = e.length_in_seconds),
                          c(e.length_in_seconds);
                      }));
                  }, s);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            {
              key: "stop",
              value: function () {
                window.VidyardV4.api.destroyPlayer(this.player);
              },
            },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seek", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "setPlaybackRate",
              value: function (e) {
                this.callPlayer("setPlaybackSpeed", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.callPlayer("currentTime");
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var e = {
                  width: "100%",
                  height: "100%",
                  display: this.props.display,
                };
                return i.default.createElement(
                  "div",
                  { style: e },
                  i.default.createElement("div", { ref: this.ref })
                );
              },
            },
          ]) && u(t.prototype, n),
          r && u(t, r),
          d
        );
      })(i.Component);
      (t.default = g),
        m(g, "displayName", "Vidyard"),
        m(g, "canPlay", a.canPlay.vidyard);
    },
    fWv3: function (e, t, n) {
      "use strict";
      var r = n("cpVT"),
        i = n("jT3O"),
        o = n("q1tI"),
        a = n.n(o),
        s = n("VdAu"),
        l = n("E+oP"),
        c = n.n(l),
        u = n("vOnD"),
        p = n("5gwC"),
        f = n("euSZ"),
        d = n("qBmG"),
        h = n("a0Ta"),
        y = n("HJKE"),
        m = n("TfoY"),
        g = n("0vCa"),
        b = n.n(g),
        v = (n("/Drs"), a.a.createElement);
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function P() {
        var e = Object(i.a)([
          "\n  opacity: 0;\n  animation: ",
          " 0.3s ease-in-out forwards 1s;\n",
        ]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = Object(i.a)([
          "\n\tfrom { opacity: 0; }\n\tto { opacity: 1;}\n",
        ]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      var O = Object(u.d)(k()),
        j = Object(u.c)(s.a)(P(), O),
        x = {
          dragThreshold: 50,
          selectedAttraction: 0.2,
          friction: 0.8,
          adaptiveHeight: !0,
          lazyLoad: !0,
          prevNextButtons: !1,
          pageDots: !1,
        },
        S = function (e) {
          var t = e.item,
            n = e.mobile,
            r = Object(o.useState)(!1),
            i = r[0],
            a = r[1];
          return v(
            s.a,
            {
              onClick: function () {
                return a(!0);
              },
              mx: y.h.two,
              width: n ? "300px" : "320px",
              sx: { position: "relative" },
              py: y.h.one,
            },
            !i &&
              v(s.a, {
                width: "100%",
                height: "100%",
                sx: { position: "absolute", top: 0, left: 0, zIndex: 3 },
              }),
            v(h.a, {
              showMobileStyles: !1,
              index: 1,
              data: t,
              small: !0,
              width: "100%",
              short: !0,
            })
          );
        };
      t.a = function (e) {
        var t,
          n,
          r = e.data,
          i = e.mt,
          a = void 0 === i ? 0 : i,
          l = Object(m.c)(),
          u = Object(o.useState)([]),
          h = u[0],
          g = u[1],
          w = Object(o.useState)(!1),
          P = w[0],
          k = w[1],
          O = Object(o.useState)(!1),
          E = O[0],
          C = O[1];
        Object(o.useEffect)(
          function () {
            g(r.items),
              setTimeout(function () {
                C(!0);
              }, 500);
          },
          [r]
        );
        return (
          E &&
          v(
            s.a,
            {
              width: "100%",
              mt: a,
              mb: y.h.three,
              pb: y.h.three,
              id: c()(r.shortId) ? "" : r.shortId,
              className: "block pages-block",
            },
            v(
              s.b,
              {
                textAlign: "center",
                flexDirection: "column",
                justifyContent: "center",
                mb: [y.h.two, y.h.four],
              },
              !c()(r.text) && v(p.a, { font: l ? "xsx" : "lg" }, r.text),
              !c()(r.editors) &&
                v(
                  s.b,
                  {
                    alignItems: "center",
                    justifyContent: "center",
                    mt: y.h.two,
                  },
                  v(p.a, { mr: y.h.one, font: l ? "xsx" : "sm" }, "Picks"),
                  v(f.a, {
                    type: "secondary",
                    data: [
                      {
                        user:
                          (null === (t = r.editors) ||
                          void 0 === t ||
                          null === (n = t[0]) ||
                          void 0 === n
                            ? void 0
                            : n.user) || r.owner,
                        role: 0,
                      },
                    ],
                  })
                )
            ),
            v(
              j,
              { sx: { position: "relative" } },
              v(
                b.a,
                {
                  flickityRef: function (e) {
                    return k(e);
                  },
                  options: _(
                    _({}, x),
                    {},
                    {
                      wrapAround: h.length > 3,
                      initialIndex: h.length > 3 ? 2 : 1,
                      draggable: h.length > 3,
                    }
                  ),
                },
                h.map(function (e, t) {
                  return v(S, { key: t, item: e, mobile: l });
                })
              ),
              v(
                s.b,
                {
                  width: "100%",
                  mt: y.h.one,
                  sx: { position: "absolute", top: "calc(50% - 40px)" },
                },
                v(
                  s.a,
                  {
                    onClick: function () {
                      P.previous();
                    },
                    sx: {
                      transform: "rotate(-180deg)",
                      marginLeft: 20,
                      cursor: "pointer",
                      transition: "opacity .5s ease-in-out",
                      ":hover": { opacity: 0.95 },
                    },
                  },
                  v(d.a, { icon: "/carousel-arrow-new.svg", size: "80px" })
                ),
                v(
                  s.a,
                  {
                    onClick: function () {
                      P.next();
                    },
                    ml: "auto",
                    sx: {
                      marginRight: 20,
                      cursor: "pointer",
                      transition: "opacity .5s ease-in-out",
                      ":hover": { opacity: 0.95 },
                    },
                  },
                  v(d.a, { icon: "/carousel-arrow-new.svg", size: "80px" })
                )
              )
            )
          )
        );
      };
    },
    fflM: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== r(e) && "function" !== typeof e))
          return { default: e };
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(n, a, s)
              : (n[a] = e[a]);
          }
        (n.default = e), t && t.set(e, n);
        return n;
      })(n("q1tI"));
      function o() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                y(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function p(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var i = h(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return f(this, n);
        };
      }
      function f(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? d(e) : t;
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t, n) {
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
      var m = "64px",
        g = {},
        b = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && u(e, t);
          })(a, e);
          var t,
            n,
            r,
            o = p(a);
          function a() {
            var e;
            l(this, a);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              y(d((e = o.call.apply(o, [this].concat(n)))), "mounted", !1),
              y(d(e), "state", { image: null }),
              y(d(e), "handleKeyPress", function (t) {
                ("Enter" !== t.key && " " !== t.key) || e.props.onClick();
              }),
              e
            );
          }
          return (
            (t = a),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  (this.mounted = !0), this.fetchImage(this.props);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this.props,
                    n = t.url,
                    r = t.light;
                  (e.url === n && e.light === r) || this.fetchImage(this.props);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                },
              },
              {
                key: "fetchImage",
                value: function (e) {
                  var t = this,
                    n = e.url,
                    r = e.light;
                  if ("string" !== typeof r) {
                    if (!g[n])
                      return (
                        this.setState({ image: null }),
                        window
                          .fetch("https://noembed.com/embed?url=".concat(n))
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            if (e.thumbnail_url && t.mounted) {
                              var r = e.thumbnail_url.replace(
                                "height=100",
                                "height=480"
                              );
                              t.setState({ image: r }), (g[n] = r);
                            }
                          })
                      );
                    this.setState({ image: g[n] });
                  } else this.setState({ image: r });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    n = e.playIcon,
                    r = e.previewTabIndex,
                    o = this.state.image,
                    a = {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    l = {
                      preview: s(
                        {
                          width: "100%",
                          height: "100%",
                          backgroundImage: o ? "url(".concat(o, ")") : void 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          cursor: "pointer",
                        },
                        a
                      ),
                      shadow: s(
                        {
                          background:
                            "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                          borderRadius: m,
                          width: m,
                          height: m,
                        },
                        a
                      ),
                      playIcon: {
                        borderStyle: "solid",
                        borderWidth: "16px 0 16px 26px",
                        borderColor:
                          "transparent transparent transparent white",
                        marginLeft: "7px",
                      },
                    },
                    c = i.default.createElement(
                      "div",
                      { style: l.shadow, className: "react-player__shadow" },
                      i.default.createElement("div", {
                        style: l.playIcon,
                        className: "react-player__play-icon",
                      })
                    );
                  return i.default.createElement(
                    "div",
                    {
                      style: l.preview,
                      className: "react-player__preview",
                      onClick: t,
                      tabIndex: r,
                      onKeyPress: this.handleKeyPress,
                    },
                    n || c
                  );
                },
              },
            ]) && c(t.prototype, n),
            r && c(t, r),
            a
          );
        })(i.Component);
      t.default = b;
    },
    "ihW+": function (e, t, n) {
      var r, i;
      window,
        (r = [n("E4Uq"), n("YVj6")]),
        void 0 ===
          (i = function (e, t) {
            return (function (e, t, n) {
              "use strict";
              t.createMethods.push("_createLazyload");
              var r = t.prototype;
              function i(e) {
                if ("IMG" == e.nodeName) {
                  var t = e.getAttribute("data-flickity-lazyload"),
                    r = e.getAttribute("data-flickity-lazyload-src"),
                    i = e.getAttribute("data-flickity-lazyload-srcset");
                  if (t || r || i) return [e];
                }
                var o =
                    "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",
                  a = e.querySelectorAll(o);
                return n.makeArray(a);
              }
              function o(e, t) {
                (this.img = e), (this.flickity = t), this.load();
              }
              return (
                (r._createLazyload = function () {
                  this.on("select", this.lazyLoad);
                }),
                (r.lazyLoad = function () {
                  var e = this.options.lazyLoad;
                  if (e) {
                    var t = "number" == typeof e ? e : 0,
                      n = this.getAdjacentCellElements(t),
                      r = [];
                    n.forEach(function (e) {
                      var t = i(e);
                      r = r.concat(t);
                    }),
                      r.forEach(function (e) {
                        new o(e, this);
                      }, this);
                  }
                }),
                (o.prototype.handleEvent = n.handleEvent),
                (o.prototype.load = function () {
                  this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this);
                  var e =
                      this.img.getAttribute("data-flickity-lazyload") ||
                      this.img.getAttribute("data-flickity-lazyload-src"),
                    t = this.img.getAttribute("data-flickity-lazyload-srcset");
                  (this.img.src = e),
                    t && this.img.setAttribute("srcset", t),
                    this.img.removeAttribute("data-flickity-lazyload"),
                    this.img.removeAttribute("data-flickity-lazyload-src"),
                    this.img.removeAttribute("data-flickity-lazyload-srcset");
                }),
                (o.prototype.onload = function (e) {
                  this.complete(e, "flickity-lazyloaded");
                }),
                (o.prototype.onerror = function (e) {
                  this.complete(e, "flickity-lazyerror");
                }),
                (o.prototype.complete = function (e, t) {
                  this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
                  var n = this.flickity.getParentCell(this.img),
                    r = n && n.element;
                  this.flickity.cellSizeChange(r),
                    this.img.classList.add(t),
                    this.flickity.dispatchEvent("lazyLoad", e, r);
                }),
                (t.LazyLoader = o),
                t
              );
            })(0, e, t);
          }.apply(t, r)) || (e.exports = i);
    },
    mzdp: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.canPlay =
          t.FLV_EXTENSIONS =
          t.DASH_EXTENSIONS =
          t.HLS_EXTENSIONS =
          t.VIDEO_EXTENSIONS =
          t.AUDIO_EXTENSIONS =
          t.MATCH_URL_KALTURA =
          t.MATCH_URL_VIDYARD =
          t.MATCH_URL_MIXCLOUD =
          t.MATCH_URL_DAILYMOTION =
          t.MATCH_URL_TWITCH_CHANNEL =
          t.MATCH_URL_TWITCH_VIDEO =
          t.MATCH_URL_WISTIA =
          t.MATCH_URL_STREAMABLE =
          t.MATCH_URL_FACEBOOK_WATCH =
          t.MATCH_URL_FACEBOOK =
          t.MATCH_URL_VIMEO =
          t.MATCH_URL_SOUNDCLOUD =
          t.MATCH_URL_YOUTUBE =
            void 0);
      var r = n("tbWI");
      function i(e, t) {
        var n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return o(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return o(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          s = !0,
          l = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (l = !0), (a = e);
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (l) throw a;
            }
          },
        };
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var a =
        /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
      t.MATCH_URL_YOUTUBE = a;
      var s = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
      t.MATCH_URL_SOUNDCLOUD = s;
      var l = /vimeo\.com\/.+/;
      t.MATCH_URL_VIMEO = l;
      var c =
        /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
      t.MATCH_URL_FACEBOOK = c;
      var u = /^https?:\/\/fb\.watch\/.+$/;
      t.MATCH_URL_FACEBOOK_WATCH = u;
      var p = /streamable\.com\/([a-z0-9]+)$/;
      t.MATCH_URL_STREAMABLE = p;
      var f =
        /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
      t.MATCH_URL_WISTIA = f;
      var d = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
      t.MATCH_URL_TWITCH_VIDEO = d;
      var h = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
      t.MATCH_URL_TWITCH_CHANNEL = h;
      var y =
        /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
      t.MATCH_URL_DAILYMOTION = y;
      var m = /mixcloud\.com\/([^/]+\/[^/]+)/;
      t.MATCH_URL_MIXCLOUD = m;
      var g = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-]+)/;
      t.MATCH_URL_VIDYARD = g;
      var b =
        /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_]+)$/;
      t.MATCH_URL_KALTURA = b;
      var v =
        /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
      t.AUDIO_EXTENSIONS = v;
      var w = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
      t.VIDEO_EXTENSIONS = w;
      var _ = /\.(m3u8)($|\?)/i;
      t.HLS_EXTENSIONS = _;
      var P = /\.(mpd)($|\?)/i;
      t.DASH_EXTENSIONS = P;
      var k = /\.(flv)($|\?)/i;
      t.FLV_EXTENSIONS = k;
      var O = {
        youtube: function (e) {
          return e instanceof Array
            ? e.every(function (e) {
                return a.test(e);
              })
            : a.test(e);
        },
        soundcloud: function (e) {
          return s.test(e) && !v.test(e);
        },
        vimeo: function (e) {
          return l.test(e) && !w.test(e) && !_.test(e);
        },
        facebook: function (e) {
          return c.test(e) || u.test(e);
        },
        streamable: function (e) {
          return p.test(e);
        },
        wistia: function (e) {
          return f.test(e);
        },
        twitch: function (e) {
          return d.test(e) || h.test(e);
        },
        dailymotion: function (e) {
          return y.test(e);
        },
        mixcloud: function (e) {
          return m.test(e);
        },
        vidyard: function (e) {
          return g.test(e);
        },
        kaltura: function (e) {
          return b.test(e);
        },
        file: function e(t) {
          if (t instanceof Array) {
            var n,
              o = i(t);
            try {
              for (o.s(); !(n = o.n()).done; ) {
                var a = n.value;
                if ("string" === typeof a && e(a)) return !0;
                if (e(a.src)) return !0;
              }
            } catch (s) {
              o.e(s);
            } finally {
              o.f();
            }
            return !1;
          }
          return (
            !(!(0, r.isMediaStream)(t) && !(0, r.isBlobUrl)(t)) ||
            v.test(t) ||
            w.test(t) ||
            _.test(t) ||
            P.test(t) ||
            k.test(t)
          );
        },
      };
      t.canPlay = O;
    },
    "q+qS": function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        a = (i = n("OL05")) && i.__esModule ? i : { default: i },
        s = n("QXAm");
      function l() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        return (c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = m(e);
          if (t) {
            var i = m(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return h(this, n);
        };
      }
      function h(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? y(e) : t;
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t, n) {
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
      var b = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && f(e, t);
        })(s, e);
        var t,
          n,
          r,
          i = d(s);
        function s() {
          var e;
          u(this, s);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            g(y((e = i.call.apply(i, [this].concat(n)))), "mounted", !1),
            g(y(e), "isReady", !1),
            g(y(e), "isPlaying", !1),
            g(y(e), "isLoading", !0),
            g(y(e), "loadOnReady", null),
            g(y(e), "startOnPlay", !0),
            g(y(e), "seekOnPlay", null),
            g(y(e), "onDurationCalled", !1),
            g(y(e), "handlePlayerMount", function (t) {
              (e.player = t), e.player.load(e.props.url), e.progress();
            }),
            g(y(e), "getInternalPlayer", function (t) {
              return e.player ? e.player[t] : null;
            }),
            g(y(e), "progress", function () {
              if (e.props.url && e.player && e.isReady) {
                var t = e.getCurrentTime() || 0,
                  n = e.getSecondsLoaded(),
                  r = e.getDuration();
                if (r) {
                  var i = { playedSeconds: t, played: t / r };
                  null !== n && ((i.loadedSeconds = n), (i.loaded = n / r)),
                    (i.playedSeconds === e.prevPlayed &&
                      i.loadedSeconds === e.prevLoaded) ||
                      e.props.onProgress(i),
                    (e.prevPlayed = i.playedSeconds),
                    (e.prevLoaded = i.loadedSeconds);
                }
              }
              e.progressTimeout = setTimeout(
                e.progress,
                e.props.progressFrequency || e.props.progressInterval
              );
            }),
            g(y(e), "handleReady", function () {
              if (e.mounted) {
                (e.isReady = !0), (e.isLoading = !1);
                var t = e.props,
                  n = t.onReady,
                  r = t.playing,
                  i = t.volume,
                  o = t.muted;
                n(),
                  o || null === i || e.player.setVolume(i),
                  e.loadOnReady
                    ? (e.player.load(e.loadOnReady, !0), (e.loadOnReady = null))
                    : r && e.player.play(),
                  e.handleDurationCheck();
              }
            }),
            g(y(e), "handlePlay", function () {
              (e.isPlaying = !0), (e.isLoading = !1);
              var t = e.props,
                n = t.onStart,
                r = t.onPlay,
                i = t.playbackRate;
              e.startOnPlay &&
                (e.player.setPlaybackRate &&
                  1 !== i &&
                  e.player.setPlaybackRate(i),
                n(),
                (e.startOnPlay = !1)),
                r(),
                e.seekOnPlay && (e.seekTo(e.seekOnPlay), (e.seekOnPlay = null)),
                e.handleDurationCheck();
            }),
            g(y(e), "handlePause", function (t) {
              (e.isPlaying = !1), e.isLoading || e.props.onPause(t);
            }),
            g(y(e), "handleEnded", function () {
              var t = e.props,
                n = t.activePlayer,
                r = t.loop,
                i = t.onEnded;
              n.loopOnEnded && r && e.seekTo(0), r || ((e.isPlaying = !1), i());
            }),
            g(y(e), "handleError", function () {
              var t;
              (e.isLoading = !1), (t = e.props).onError.apply(t, arguments);
            }),
            g(y(e), "handleDurationCheck", function () {
              clearTimeout(e.durationCheckTimeout);
              var t = e.getDuration();
              t
                ? e.onDurationCalled ||
                  (e.props.onDuration(t), (e.onDurationCalled = !0))
                : (e.durationCheckTimeout = setTimeout(
                    e.handleDurationCheck,
                    100
                  ));
            }),
            g(y(e), "handleLoaded", function () {
              e.isLoading = !1;
            }),
            e
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.mounted = !0;
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this.progressTimeout),
                  clearTimeout(this.durationCheckTimeout),
                  this.isReady &&
                    this.props.stopOnUnmount &&
                    (this.player.stop(),
                    this.player.disablePIP && this.player.disablePIP()),
                  (this.mounted = !1);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                var t = this;
                if (this.player) {
                  var n = this.props,
                    r = n.url,
                    i = n.playing,
                    o = n.volume,
                    s = n.muted,
                    l = n.playbackRate,
                    c = n.pip,
                    u = n.loop,
                    p = n.activePlayer;
                  if (!(0, a.default)(e.url, r)) {
                    if (this.isLoading && !p.forceLoad)
                      return (
                        console.warn(
                          "ReactPlayer: the attempt to load ".concat(
                            r,
                            " is being deferred until the player has loaded"
                          )
                        ),
                        void (this.loadOnReady = r)
                      );
                    (this.isLoading = !0),
                      (this.startOnPlay = !0),
                      (this.onDurationCalled = !1),
                      this.player.load(r, this.isReady);
                  }
                  e.playing || !i || this.isPlaying || this.player.play(),
                    e.playing && !i && this.isPlaying && this.player.pause(),
                    !e.pip &&
                      c &&
                      this.player.enablePIP &&
                      this.player.enablePIP(),
                    e.pip &&
                      !c &&
                      this.player.disablePIP &&
                      this.player.disablePIP(),
                    e.volume !== o && null !== o && this.player.setVolume(o),
                    e.muted !== s &&
                      (s
                        ? this.player.mute()
                        : (this.player.unmute(),
                          null !== o &&
                            setTimeout(function () {
                              return t.player.setVolume(o);
                            }))),
                    e.playbackRate !== l &&
                      this.player.setPlaybackRate &&
                      this.player.setPlaybackRate(l),
                    e.loop !== u &&
                      this.player.setLoop &&
                      this.player.setLoop(u);
                }
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.isReady ? this.player.getDuration() : null;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.isReady ? this.player.getCurrentTime() : null;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.isReady ? this.player.getSecondsLoaded() : null;
              },
            },
            {
              key: "seekTo",
              value: function (e, t) {
                var n = this;
                if (!this.isReady && 0 !== e)
                  return (
                    (this.seekOnPlay = e),
                    void setTimeout(function () {
                      n.seekOnPlay = null;
                    }, 5e3)
                  );
                if (t ? "fraction" === t : e > 0 && e < 1) {
                  var r = this.player.getDuration();
                  return r
                    ? void this.player.seekTo(r * e)
                    : void console.warn(
                        "ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available"
                      );
                }
                this.player.seekTo(e);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.activePlayer;
                return e
                  ? o.default.createElement(
                      e,
                      c({}, this.props, {
                        onMount: this.handlePlayerMount,
                        onReady: this.handleReady,
                        onPlay: this.handlePlay,
                        onPause: this.handlePause,
                        onEnded: this.handleEnded,
                        onLoaded: this.handleLoaded,
                        onError: this.handleError,
                      })
                    )
                  : null;
              },
            },
          ]) && p(t.prototype, n),
          r && p(t, r),
          s
        );
      })(o.Component);
      (t.default = b),
        g(b, "displayName", "Player"),
        g(b, "propTypes", s.propTypes),
        g(b, "defaultProps", s.defaultProps);
    },
    s0IC: function (e, t, n) {
      !(function () {
        "use strict";
        var t = function () {
          return [
            {
              type: "output",
              regex: "<a(.*?)>",
              replace: function (e, t) {
                return '<a target="_blank"' + t + ">";
              },
            },
          ];
        };
        "undefined" !== typeof window &&
          window.showdown &&
          window.showdown.extensions &&
          window.showdown.extension("targetblank", t),
          (e.exports = t);
      })();
    },
    sYrE: function (e, t, n) {
      var r, i;
      window,
        (r = [n("CUlp"), n("YVj6"), n("E4Uq")]),
        void 0 ===
          (i = function (e, t, n) {
            return (function (e, t, n) {
              "use strict";
              function r(e) {
                (this.parent = e),
                  (this.state = "stopped"),
                  (this.onVisibilityChange = this.visibilityChange.bind(this)),
                  (this.onVisibilityPlay = this.visibilityPlay.bind(this));
              }
              (r.prototype = Object.create(e.prototype)),
                (r.prototype.play = function () {
                  "playing" != this.state &&
                    (document.hidden
                      ? document.addEventListener(
                          "visibilitychange",
                          this.onVisibilityPlay
                        )
                      : ((this.state = "playing"),
                        document.addEventListener(
                          "visibilitychange",
                          this.onVisibilityChange
                        ),
                        this.tick()));
                }),
                (r.prototype.tick = function () {
                  if ("playing" == this.state) {
                    var e = this.parent.options.autoPlay;
                    e = "number" == typeof e ? e : 3e3;
                    var t = this;
                    this.clear(),
                      (this.timeout = setTimeout(function () {
                        t.parent.next(!0), t.tick();
                      }, e));
                  }
                }),
                (r.prototype.stop = function () {
                  (this.state = "stopped"),
                    this.clear(),
                    document.removeEventListener(
                      "visibilitychange",
                      this.onVisibilityChange
                    );
                }),
                (r.prototype.clear = function () {
                  clearTimeout(this.timeout);
                }),
                (r.prototype.pause = function () {
                  "playing" == this.state &&
                    ((this.state = "paused"), this.clear());
                }),
                (r.prototype.unpause = function () {
                  "paused" == this.state && this.play();
                }),
                (r.prototype.visibilityChange = function () {
                  this[document.hidden ? "pause" : "unpause"]();
                }),
                (r.prototype.visibilityPlay = function () {
                  this.play(),
                    document.removeEventListener(
                      "visibilitychange",
                      this.onVisibilityPlay
                    );
                }),
                t.extend(n.defaults, { pauseAutoPlayOnHover: !0 }),
                n.createMethods.push("_createPlayer");
              var i = n.prototype;
              return (
                (i._createPlayer = function () {
                  (this.player = new r(this)),
                    this.on("activate", this.activatePlayer),
                    this.on("uiChange", this.stopPlayer),
                    this.on("pointerDown", this.stopPlayer),
                    this.on("deactivate", this.deactivatePlayer);
                }),
                (i.activatePlayer = function () {
                  this.options.autoPlay &&
                    (this.player.play(),
                    this.element.addEventListener("mouseenter", this));
                }),
                (i.playPlayer = function () {
                  this.player.play();
                }),
                (i.stopPlayer = function () {
                  this.player.stop();
                }),
                (i.pausePlayer = function () {
                  this.player.pause();
                }),
                (i.unpausePlayer = function () {
                  this.player.unpause();
                }),
                (i.deactivatePlayer = function () {
                  this.player.stop(),
                    this.element.removeEventListener("mouseenter", this);
                }),
                (i.onmouseenter = function () {
                  this.options.pauseAutoPlayOnHover &&
                    (this.player.pause(),
                    this.element.addEventListener("mouseleave", this));
                }),
                (i.onmouseleave = function () {
                  this.player.unpause(),
                    this.element.removeEventListener("mouseleave", this);
                }),
                (n.Player = r),
                n
              );
            })(e, t, n);
          }.apply(t, r)) || (e.exports = i);
    },
    tbWI: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseStartTime = function (e) {
          return f(e, l);
        }),
        (t.parseEndTime = function (e) {
          return f(e, c);
        }),
        (t.randomString = function () {
          return Math.random().toString(36).substr(2, 5);
        }),
        (t.queryString = function (e) {
          return Object.keys(e)
            .map(function (t) {
              return "".concat(t, "=").concat(e[t]);
            })
            .join("&");
        }),
        (t.getSDK = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {
                    return !0;
                  },
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : r.default,
            a = d(t);
          if (a && i(a)) return Promise.resolve(a);
          return new Promise(function (r, i) {
            if (h[e]) h[e].push({ resolve: r, reject: i });
            else {
              h[e] = [{ resolve: r, reject: i }];
              var a = function (t) {
                h[e].forEach(function (e) {
                  return e.resolve(t);
                });
              };
              if (n) {
                var s = window[n];
                window[n] = function () {
                  s && s(), a(d(t));
                };
              }
              o(e, function (r) {
                r
                  ? (h[e].forEach(function (e) {
                      return e.reject(r);
                    }),
                    (h[e] = null))
                  : n || a(d(t));
              });
            }
          });
        }),
        (t.getConfig = function (e, t) {
          return (0, i.default)(t.config, e.config);
        }),
        (t.omit = function (e) {
          for (
            var t,
              n = arguments.length,
              r = new Array(n > 1 ? n - 1 : 0),
              i = 1;
            i < n;
            i++
          )
            r[i - 1] = arguments[i];
          for (
            var o = (t = []).concat.apply(t, r),
              a = {},
              s = Object.keys(e),
              l = 0,
              c = s;
            l < c.length;
            l++
          ) {
            var u = c[l];
            -1 === o.indexOf(u) && (a[u] = e[u]);
          }
          return a;
        }),
        (t.callPlayer = function (e) {
          var t;
          if (!this.player || !this.player[e]) {
            var n = "ReactPlayer: "
              .concat(this.constructor.displayName, " player could not call %c")
              .concat(e, "%c \u2013 ");
            return (
              this.player
                ? this.player[e] || (n += "The method was not available")
                : (n += "The player was not available"),
              console.warn(n, "font-weight: bold", ""),
              null
            );
          }
          for (
            var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1;
            o < r;
            o++
          )
            i[o - 1] = arguments[o];
          return (t = this.player)[e].apply(t, i);
        }),
        (t.isMediaStream = function (e) {
          return (
            "undefined" !== typeof window &&
            "undefined" !== typeof window.MediaStream &&
            e instanceof window.MediaStream
          );
        }),
        (t.isBlobUrl = function (e) {
          return /^blob:/.test(e);
        }),
        (t.supportsWebKitPresentationMode = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document.createElement("video"),
            t = !1 === /iPhone|iPod/.test(navigator.userAgent);
          return (
            e.webkitSupportsPresentationMode &&
            "function" === typeof e.webkitSetPresentationMode &&
            t
          );
        });
      var r = o(n("MuZe")),
        i = o(n("BwF7"));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if (
              "undefined" === typeof Symbol ||
              !(Symbol.iterator in Object(e))
            )
              return;
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (l) {
              (i = !0), (o = l);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return s(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var l = /[?&#](?:start|t)=([0-9hms]+)/,
        c = /[?&#]end=([0-9hms]+)/,
        u = /(\d+)(h|m|s)/g,
        p = /^\d+$/;
      function f(e, t) {
        if (!(e instanceof Array)) {
          var n = e.match(t);
          if (n) {
            var r = n[1];
            if (r.match(u))
              return (function (e) {
                var t = 0,
                  n = u.exec(e);
                for (; null !== n; ) {
                  var r = a(n, 3),
                    i = r[1],
                    o = r[2];
                  "h" === o && (t += 60 * parseInt(i, 10) * 60),
                    "m" === o && (t += 60 * parseInt(i, 10)),
                    "s" === o && (t += parseInt(i, 10)),
                    (n = u.exec(e));
                }
                return t;
              })(r);
            if (p.test(r)) return parseInt(r);
          }
        }
      }
      function d(e) {
        return window[e]
          ? window[e]
          : window.exports && window.exports[e]
          ? window.exports[e]
          : window.module && window.module.exports && window.module.exports[e]
          ? window.module.exports[e]
          : null;
      }
      var h = {};
    },
    vX6Q: function (e, t, n) {
      var r, i;
      !(function (o, a) {
        "use strict";
        (r = [n("CUlp")]),
          void 0 ===
            (i = function (e) {
              return (function (e, t) {
                var n = e.jQuery,
                  r = e.console;
                function i(e, t) {
                  for (var n in t) e[n] = t[n];
                  return e;
                }
                var o = Array.prototype.slice;
                function a(e) {
                  return Array.isArray(e)
                    ? e
                    : "object" == typeof e && "number" == typeof e.length
                    ? o.call(e)
                    : [e];
                }
                function s(e, t, o) {
                  if (!(this instanceof s)) return new s(e, t, o);
                  var l = e;
                  "string" == typeof e && (l = document.querySelectorAll(e)),
                    l
                      ? ((this.elements = a(l)),
                        (this.options = i({}, this.options)),
                        "function" == typeof t ? (o = t) : i(this.options, t),
                        o && this.on("always", o),
                        this.getImages(),
                        n && (this.jqDeferred = new n.Deferred()),
                        setTimeout(this.check.bind(this)))
                      : r.error("Bad element for imagesLoaded " + (l || e));
                }
                (s.prototype = Object.create(t.prototype)),
                  (s.prototype.options = {}),
                  (s.prototype.getImages = function () {
                    (this.images = []),
                      this.elements.forEach(this.addElementImages, this);
                  }),
                  (s.prototype.addElementImages = function (e) {
                    "IMG" == e.nodeName && this.addImage(e),
                      !0 === this.options.background &&
                        this.addElementBackgroundImages(e);
                    var t = e.nodeType;
                    if (t && l[t]) {
                      for (
                        var n = e.querySelectorAll("img"), r = 0;
                        r < n.length;
                        r++
                      ) {
                        var i = n[r];
                        this.addImage(i);
                      }
                      if ("string" == typeof this.options.background) {
                        var o = e.querySelectorAll(this.options.background);
                        for (r = 0; r < o.length; r++) {
                          var a = o[r];
                          this.addElementBackgroundImages(a);
                        }
                      }
                    }
                  });
                var l = { 1: !0, 9: !0, 11: !0 };
                function c(e) {
                  this.img = e;
                }
                function u(e, t) {
                  (this.url = e), (this.element = t), (this.img = new Image());
                }
                return (
                  (s.prototype.addElementBackgroundImages = function (e) {
                    var t = getComputedStyle(e);
                    if (t)
                      for (
                        var n = /url\((['"])?(.*?)\1\)/gi,
                          r = n.exec(t.backgroundImage);
                        null !== r;

                      ) {
                        var i = r && r[2];
                        i && this.addBackground(i, e),
                          (r = n.exec(t.backgroundImage));
                      }
                  }),
                  (s.prototype.addImage = function (e) {
                    var t = new c(e);
                    this.images.push(t);
                  }),
                  (s.prototype.addBackground = function (e, t) {
                    var n = new u(e, t);
                    this.images.push(n);
                  }),
                  (s.prototype.check = function () {
                    var e = this;
                    function t(t, n, r) {
                      setTimeout(function () {
                        e.progress(t, n, r);
                      });
                    }
                    (this.progressedCount = 0),
                      (this.hasAnyBroken = !1),
                      this.images.length
                        ? this.images.forEach(function (e) {
                            e.once("progress", t), e.check();
                          })
                        : this.complete();
                  }),
                  (s.prototype.progress = function (e, t, n) {
                    this.progressedCount++,
                      (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
                      this.emitEvent("progress", [this, e, t]),
                      this.jqDeferred &&
                        this.jqDeferred.notify &&
                        this.jqDeferred.notify(this, e),
                      this.progressedCount == this.images.length &&
                        this.complete(),
                      this.options.debug && r && r.log("progress: " + n, e, t);
                  }),
                  (s.prototype.complete = function () {
                    var e = this.hasAnyBroken ? "fail" : "done";
                    if (
                      ((this.isComplete = !0),
                      this.emitEvent(e, [this]),
                      this.emitEvent("always", [this]),
                      this.jqDeferred)
                    ) {
                      var t = this.hasAnyBroken ? "reject" : "resolve";
                      this.jqDeferred[t](this);
                    }
                  }),
                  (c.prototype = Object.create(t.prototype)),
                  (c.prototype.check = function () {
                    this.getIsImageComplete()
                      ? this.confirm(
                          0 !== this.img.naturalWidth,
                          "naturalWidth"
                        )
                      : ((this.proxyImage = new Image()),
                        this.proxyImage.addEventListener("load", this),
                        this.proxyImage.addEventListener("error", this),
                        this.img.addEventListener("load", this),
                        this.img.addEventListener("error", this),
                        (this.proxyImage.src = this.img.src));
                  }),
                  (c.prototype.getIsImageComplete = function () {
                    return this.img.complete && this.img.naturalWidth;
                  }),
                  (c.prototype.confirm = function (e, t) {
                    (this.isLoaded = e),
                      this.emitEvent("progress", [this, this.img, t]);
                  }),
                  (c.prototype.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                  }),
                  (c.prototype.onload = function () {
                    this.confirm(!0, "onload"), this.unbindEvents();
                  }),
                  (c.prototype.onerror = function () {
                    this.confirm(!1, "onerror"), this.unbindEvents();
                  }),
                  (c.prototype.unbindEvents = function () {
                    this.proxyImage.removeEventListener("load", this),
                      this.proxyImage.removeEventListener("error", this),
                      this.img.removeEventListener("load", this),
                      this.img.removeEventListener("error", this);
                  }),
                  (u.prototype = Object.create(c.prototype)),
                  (u.prototype.check = function () {
                    this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      (this.img.src = this.url),
                      this.getIsImageComplete() &&
                        (this.confirm(
                          0 !== this.img.naturalWidth,
                          "naturalWidth"
                        ),
                        this.unbindEvents());
                  }),
                  (u.prototype.unbindEvents = function () {
                    this.img.removeEventListener("load", this),
                      this.img.removeEventListener("error", this);
                  }),
                  (u.prototype.confirm = function (e, t) {
                    (this.isLoaded = e),
                      this.emitEvent("progress", [this, this.element, t]);
                  }),
                  (s.makeJQueryPlugin = function (t) {
                    (t = t || e.jQuery) &&
                      ((n = t).fn.imagesLoaded = function (e, t) {
                        return new s(this, e, t).jqDeferred.promise(n(this));
                      });
                  }),
                  s.makeJQueryPlugin(),
                  s
                );
              })(o, e);
            }.apply(t, r)) || (e.exports = i);
      })("undefined" !== typeof window ? window : this);
    },
    vXzw: function (e, t, n) {
      var r, i;
      window,
        (r = [n("E4Uq"), n("YVj6")]),
        void 0 ===
          (i = function (e, t) {
            return (function (e, t, n) {
              "use strict";
              function r(e) {
                var t = document.createDocumentFragment();
                return (
                  e.forEach(function (e) {
                    t.appendChild(e.element);
                  }),
                  t
                );
              }
              var i = t.prototype;
              return (
                (i.insert = function (e, t) {
                  var n = this._makeCells(e);
                  if (n && n.length) {
                    var i = this.cells.length;
                    t = void 0 === t ? i : t;
                    var o = r(n),
                      a = t == i;
                    if (a) this.slider.appendChild(o);
                    else {
                      var s = this.cells[t].element;
                      this.slider.insertBefore(o, s);
                    }
                    if (0 === t) this.cells = n.concat(this.cells);
                    else if (a) this.cells = this.cells.concat(n);
                    else {
                      var l = this.cells.splice(t, i - t);
                      this.cells = this.cells.concat(n).concat(l);
                    }
                    this._sizeCells(n), this.cellChange(t, !0);
                  }
                }),
                (i.append = function (e) {
                  this.insert(e, this.cells.length);
                }),
                (i.prepend = function (e) {
                  this.insert(e, 0);
                }),
                (i.remove = function (e) {
                  var t = this.getCells(e);
                  if (t && t.length) {
                    var r = this.cells.length - 1;
                    t.forEach(function (e) {
                      e.remove();
                      var t = this.cells.indexOf(e);
                      (r = Math.min(t, r)), n.removeFrom(this.cells, e);
                    }, this),
                      this.cellChange(r, !0);
                  }
                }),
                (i.cellSizeChange = function (e) {
                  var t = this.getCell(e);
                  if (t) {
                    t.getSize();
                    var n = this.cells.indexOf(t);
                    this.cellChange(n);
                  }
                }),
                (i.cellChange = function (e, t) {
                  var n = this.selectedElement;
                  this._positionCells(e),
                    this._getWrapShiftCells(),
                    this.setGallerySize();
                  var r = this.getCell(n);
                  r && (this.selectedIndex = this.getCellSlideIndex(r)),
                    (this.selectedIndex = Math.min(
                      this.slides.length - 1,
                      this.selectedIndex
                    )),
                    this.emitEvent("cellChange", [e]),
                    this.select(this.selectedIndex),
                    t && this.positionSliderAtSelected();
                }),
                t
              );
            })(0, e, t);
          }.apply(t, r)) || (e.exports = i);
    },
    x0Ue: function (e, t, n) {
      var r, i;
      !(function (o, a) {
        "use strict";
        void 0 ===
          (i = "function" === typeof (r = a) ? r.call(t, n, t, e) : r) ||
          (e.exports = i);
      })(window, function () {
        "use strict";
        var e = (function () {
          var e = window.Element.prototype;
          if (e.matches) return "matches";
          if (e.matchesSelector) return "matchesSelector";
          for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
            var r = t[n] + "MatchesSelector";
            if (e[r]) return r;
          }
        })();
        return function (t, n) {
          return t[e](n);
        };
      });
    },
    xkkJ: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        o = n("tbWI"),
        a = n("mzdp");
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = m(e);
          if (t) {
            var i = m(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return h(this, n);
        };
      }
      function h(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? y(e) : t;
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t, n) {
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
      var b = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && f(e, t);
        })(s, e);
        var t,
          n,
          r,
          a = d(s);
        function s() {
          var e;
          u(this, s);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            g(
              y((e = a.call.apply(a, [this].concat(n)))),
              "callPlayer",
              o.callPlayer
            ),
            g(y(e), "duration", null),
            g(y(e), "currentTime", null),
            g(y(e), "fractionLoaded", null),
            g(y(e), "mute", function () {
              e.setVolume(0);
            }),
            g(y(e), "unmute", function () {
              null !== e.props.volume && e.setVolume(e.props.volume);
            }),
            g(y(e), "ref", function (t) {
              e.iframe = t;
            }),
            e
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e, t) {
                var n = this;
                (0, o.getSDK)(
                  "https://w.soundcloud.com/player/api.js",
                  "SC"
                ).then(function (r) {
                  if (n.iframe) {
                    var i = r.Widget.Events,
                      o = i.PLAY,
                      a = i.PLAY_PROGRESS,
                      s = i.PAUSE,
                      l = i.FINISH,
                      u = i.ERROR;
                    t ||
                      ((n.player = r.Widget(n.iframe)),
                      n.player.bind(o, n.props.onPlay),
                      n.player.bind(s, function () {
                        n.duration - n.currentTime < 0.05 || n.props.onPause();
                      }),
                      n.player.bind(a, function (e) {
                        (n.currentTime = e.currentPosition / 1e3),
                          (n.fractionLoaded = e.loadedProgress);
                      }),
                      n.player.bind(l, function () {
                        return n.props.onEnded();
                      }),
                      n.player.bind(u, function (e) {
                        return n.props.onError(e);
                      })),
                      n.player.load(
                        e,
                        c(
                          c({}, n.props.config.options),
                          {},
                          {
                            callback: function () {
                              n.player.getDuration(function (e) {
                                (n.duration = e / 1e3), n.props.onReady();
                              });
                            },
                          }
                        )
                      );
                  }
                });
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seekTo", 1e3 * e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", 100 * e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.fractionLoaded * this.duration;
              },
            },
            {
              key: "render",
              value: function () {
                var e = {
                  width: "100%",
                  height: "100%",
                  display: this.props.display,
                };
                return i.default.createElement("iframe", {
                  ref: this.ref,
                  src: "https://w.soundcloud.com/player/?url=".concat(
                    encodeURIComponent(this.props.url)
                  ),
                  style: e,
                  frameBorder: 0,
                  allow: "autoplay",
                });
              },
            },
          ]) && p(t.prototype, n),
          r && p(t, r),
          s
        );
      })(i.Component);
      (t.default = b),
        g(b, "displayName", "SoundCloud"),
        g(b, "canPlay", a.canPlay.soundcloud),
        g(b, "loopOnEnded", !0);
    },
    yNx1: function (e, t, n) {
      var r, i;
      window,
        (r = [n("QK1G")]),
        void 0 ===
          (i = function (e) {
            return (function (e, t) {
              "use strict";
              function n(e, t) {
                (this.element = e), (this.parent = t), this.create();
              }
              var r = n.prototype;
              return (
                (r.create = function () {
                  (this.element.style.position = "absolute"),
                    this.element.setAttribute("aria-hidden", "true"),
                    (this.x = 0),
                    (this.shift = 0);
                }),
                (r.destroy = function () {
                  this.unselect(), (this.element.style.position = "");
                  var e = this.parent.originSide;
                  (this.element.style[e] = ""),
                    this.element.removeAttribute("aria-hidden");
                }),
                (r.getSize = function () {
                  this.size = t(this.element);
                }),
                (r.setPosition = function (e) {
                  (this.x = e), this.updateTarget(), this.renderPosition(e);
                }),
                (r.updateTarget = r.setDefaultTarget =
                  function () {
                    var e =
                      "left" == this.parent.originSide
                        ? "marginLeft"
                        : "marginRight";
                    this.target =
                      this.x +
                      this.size[e] +
                      this.size.width * this.parent.cellAlign;
                  }),
                (r.renderPosition = function (e) {
                  var t = this.parent.originSide;
                  this.element.style[t] = this.parent.getPositionValue(e);
                }),
                (r.select = function () {
                  this.element.classList.add("is-selected"),
                    this.element.removeAttribute("aria-hidden");
                }),
                (r.unselect = function () {
                  this.element.classList.remove("is-selected"),
                    this.element.setAttribute("aria-hidden", "true");
                }),
                (r.wrapShift = function (e) {
                  (this.shift = e),
                    this.renderPosition(
                      this.x + this.parent.slideableWidth * e
                    );
                }),
                (r.remove = function () {
                  this.element.parentNode.removeChild(this.element);
                }),
                n
              );
            })(0, e);
          }.apply(t, r)) || (e.exports = i);
    },
    yszJ: function (e, t, n) {
      "use strict";
      var r = n("q1tI"),
        i = n.n(r),
        o = n("VdAu"),
        a = (n("E+oP"), n("5gwC")),
        s = n("HJKE"),
        l = n("TfoY"),
        c = i.a.createElement;
      t.a = function (e) {
        var t = e.daysRemaining,
          n = Object(l.c)(),
          i = Object(r.useState)(""),
          u = i[0],
          p = i[1];
        Object(r.useEffect)(
          function () {
            p(
              t >= 0
                ? "Open: "
                    .concat(t, " ")
                    .concat(1 === t ? "day" : "days", " left")
                : "Closed"
            );
          },
          [t]
        );
        return c(
          o.a,
          {
            sx: { position: "relative", zIndex: 1 },
            onMouseEnter: function () {
              p(
                t >= 0
                  ? "".concat(t, "d remaining")
                  : "Closed ".concat(t.toString().replace("-", ""), "d ago")
              );
            },
            onMouseLeave: function () {
              return p(t >= 0 ? "Open" : "Closed");
            },
            mr: s.h.one,
          },
          c(
            o.b,
            {
              justifyContent: "center",
              alignItems: "center",
              width: "auto",
              height: ["27px", "30px"],
              bg: t >= 0 ? s.b.green : s.b.white,
              px: "10px",
              sx: {
                borderRadius: "56px",
                boxShadow: s.i.boxShadow,
                transition: "width .5s ease-in-out",
              },
            },
            c(a.a, { font: n ? "xsx" : "sm" }, u)
          )
        );
      };
    },
    z7b9: function (e, t, n) {
      var r, i;
      window,
        (r = [n("E4Uq"), n("4PUS"), n("YVj6")]),
        void 0 ===
          (i = function (e, t, n) {
            return (function (e, t, n, r) {
              "use strict";
              var i = "http://www.w3.org/2000/svg";
              function o(e, t) {
                (this.direction = e), (this.parent = t), this._create();
              }
              function a(e) {
                return "string" == typeof e
                  ? e
                  : "M " +
                      e.x0 +
                      ",50 L " +
                      e.x1 +
                      "," +
                      (e.y1 + 50) +
                      " L " +
                      e.x2 +
                      "," +
                      (e.y2 + 50) +
                      " L " +
                      e.x3 +
                      ",50  L " +
                      e.x2 +
                      "," +
                      (50 - e.y2) +
                      " L " +
                      e.x1 +
                      "," +
                      (50 - e.y1) +
                      " Z";
              }
              (o.prototype = Object.create(n.prototype)),
                (o.prototype._create = function () {
                  (this.isEnabled = !0),
                    (this.isPrevious = -1 == this.direction);
                  var e = this.parent.options.rightToLeft ? 1 : -1;
                  this.isLeft = this.direction == e;
                  var t = (this.element = document.createElement("button"));
                  (t.className = "flickity-button flickity-prev-next-button"),
                    (t.className += this.isPrevious ? " previous" : " next"),
                    t.setAttribute("type", "button"),
                    this.disable(),
                    t.setAttribute(
                      "aria-label",
                      this.isPrevious ? "Previous" : "Next"
                    );
                  var n = this.createSVG();
                  t.appendChild(n),
                    this.parent.on("select", this.update.bind(this)),
                    this.on(
                      "pointerDown",
                      this.parent.childUIPointerDown.bind(this.parent)
                    );
                }),
                (o.prototype.activate = function () {
                  this.bindStartEvent(this.element),
                    this.element.addEventListener("click", this),
                    this.parent.element.appendChild(this.element);
                }),
                (o.prototype.deactivate = function () {
                  this.parent.element.removeChild(this.element),
                    this.unbindStartEvent(this.element),
                    this.element.removeEventListener("click", this);
                }),
                (o.prototype.createSVG = function () {
                  var e = document.createElementNS(i, "svg");
                  e.setAttribute("class", "flickity-button-icon"),
                    e.setAttribute("viewBox", "0 0 100 100");
                  var t = document.createElementNS(i, "path"),
                    n = a(this.parent.options.arrowShape);
                  return (
                    t.setAttribute("d", n),
                    t.setAttribute("class", "arrow"),
                    this.isLeft ||
                      t.setAttribute(
                        "transform",
                        "translate(100, 100) rotate(180) "
                      ),
                    e.appendChild(t),
                    e
                  );
                }),
                (o.prototype.handleEvent = r.handleEvent),
                (o.prototype.onclick = function () {
                  if (this.isEnabled) {
                    this.parent.uiChange();
                    var e = this.isPrevious ? "previous" : "next";
                    this.parent[e]();
                  }
                }),
                (o.prototype.enable = function () {
                  this.isEnabled ||
                    ((this.element.disabled = !1), (this.isEnabled = !0));
                }),
                (o.prototype.disable = function () {
                  this.isEnabled &&
                    ((this.element.disabled = !0), (this.isEnabled = !1));
                }),
                (o.prototype.update = function () {
                  var e = this.parent.slides;
                  if (this.parent.options.wrapAround && e.length > 1)
                    this.enable();
                  else {
                    var t = e.length ? e.length - 1 : 0,
                      n = this.isPrevious ? 0 : t;
                    this[
                      this.parent.selectedIndex == n ? "disable" : "enable"
                    ]();
                  }
                }),
                (o.prototype.destroy = function () {
                  this.deactivate(), this.allOff();
                }),
                r.extend(t.defaults, {
                  prevNextButtons: !0,
                  arrowShape: {
                    x0: 10,
                    x1: 60,
                    y1: 50,
                    x2: 70,
                    y2: 40,
                    x3: 30,
                  },
                }),
                t.createMethods.push("_createPrevNextButtons");
              var s = t.prototype;
              return (
                (s._createPrevNextButtons = function () {
                  this.options.prevNextButtons &&
                    ((this.prevButton = new o(-1, this)),
                    (this.nextButton = new o(1, this)),
                    this.on("activate", this.activatePrevNextButtons));
                }),
                (s.activatePrevNextButtons = function () {
                  this.prevButton.activate(),
                    this.nextButton.activate(),
                    this.on("deactivate", this.deactivatePrevNextButtons);
                }),
                (s.deactivatePrevNextButtons = function () {
                  this.prevButton.deactivate(),
                    this.nextButton.deactivate(),
                    this.off("deactivate", this.deactivatePrevNextButtons);
                }),
                (t.PrevNextButton = o),
                t
              );
            })(0, e, t, n);
          }.apply(t, r)) || (e.exports = i);
    },
    zuFh: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n("q1tI"),
        i = n("tbWI"),
        o = n("mzdp");
      function a(e) {
        return (a =
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
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== a(e) && "function" !== typeof e))
          return { default: e };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(n, i, o)
              : (n[i] = e[i]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
      var c = [
        {
          key: "youtube",
          name: "YouTube",
          canPlay: o.canPlay.youtube,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return l(n("/6c9"));
            });
          }),
        },
        {
          key: "soundcloud",
          name: "SoundCloud",
          canPlay: o.canPlay.soundcloud,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return l(n("xkkJ"));
            });
          }),
        },
        {
          key: "vimeo",
          name: "Vimeo",
          canPlay: o.canPlay.vimeo,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return l(n("LLoX"));
            });
          }),
        },
        {
          key: "facebook",
          name: "Facebook",
          canPlay: o.canPlay.facebook,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return l(n("f77o"));
            });
          }),
        },
        {
          key: "streamable",
          name: "Streamable",
          canPlay: o.canPlay.streamable,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return l(n("GdC5"));
            });
          }),
        },
        {
          key: "wistia",
          name: "Wistia",
          canPlay: o.canPlay.wistia,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return l(n("W4/P"));
            });
          }),
        },
        {
          key: "twitch",
          name: "Twitch",
          canPlay: o.canPlay.twitch,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return l(n("bA2t"));
            });
          }),
        },
        {
          key: "dailymotion",
          name: "DailyMotion",
          canPlay: o.canPlay.dailymotion,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return l(n("Rom6"));
            });
          }),
        },
        {
          key: "mixcloud",
          name: "Mixcloud",
          canPlay: o.canPlay.mixcloud,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return l(n("5Cgt"));
            });
          }),
        },
        {
          key: "vidyard",
          name: "Vidyard",
          canPlay: o.canPlay.vidyard,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return l(n("fPw2"));
            });
          }),
        },
        {
          key: "kaltura",
          name: "Kaltura",
          canPlay: o.canPlay.kaltura,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return l(n("BgVF"));
            });
          }),
        },
        {
          key: "file",
          name: "FilePlayer",
          canPlay: o.canPlay.file,
          canEnablePIP: function (e) {
            return (
              o.canPlay.file(e) &&
              (document.pictureInPictureEnabled ||
                (0, i.supportsWebKitPresentationMode)()) &&
              !o.AUDIO_EXTENSIONS.test(e)
            );
          },
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return l(n("bq/u"));
            });
          }),
        },
      ];
      t.default = c;
    },
  },
]);
