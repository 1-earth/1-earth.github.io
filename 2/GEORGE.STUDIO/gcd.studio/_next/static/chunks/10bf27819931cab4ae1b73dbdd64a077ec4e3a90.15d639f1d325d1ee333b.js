(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [4],
  {
    "+KNX": function (e) {
      e.exports = JSON.parse(
        '{"name":"@aws-sdk/client-cognito-identity","description":"AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native","version":"3.6.1","scripts":{"clean":"yarn remove-definitions && yarn remove-dist && yarn remove-documentation","build-documentation":"yarn remove-documentation && typedoc ./","prepublishOnly":"yarn build","pretest":"yarn build:cjs","remove-definitions":"rimraf ./types","remove-dist":"rimraf ./dist","remove-documentation":"rimraf ./docs","test:unit":"mocha **/cjs/**/*.spec.js","test:e2e":"mocha **/cjs/**/*.ispec.js && karma start karma.conf.js","test":"yarn test:unit","build:cjs":"tsc -p tsconfig.json","build:es":"tsc -p tsconfig.es.json","build":"yarn build:cjs && yarn build:es","postbuild":"downlevel-dts types types/ts3.4"},"main":"./dist/cjs/index.js","types":"./types/index.d.ts","module":"./dist/es/index.js","browser":{"./runtimeConfig":"./runtimeConfig.browser"},"react-native":{"./runtimeConfig":"./runtimeConfig.native"},"sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"^1.0.0","@aws-crypto/sha256-js":"^1.0.0","@aws-sdk/config-resolver":"3.6.1","@aws-sdk/credential-provider-node":"3.6.1","@aws-sdk/fetch-http-handler":"3.6.1","@aws-sdk/hash-node":"3.6.1","@aws-sdk/invalid-dependency":"3.6.1","@aws-sdk/middleware-content-length":"3.6.1","@aws-sdk/middleware-host-header":"3.6.1","@aws-sdk/middleware-logger":"3.6.1","@aws-sdk/middleware-retry":"3.6.1","@aws-sdk/middleware-serde":"3.6.1","@aws-sdk/middleware-signing":"3.6.1","@aws-sdk/middleware-stack":"3.6.1","@aws-sdk/middleware-user-agent":"3.6.1","@aws-sdk/node-config-provider":"3.6.1","@aws-sdk/node-http-handler":"3.6.1","@aws-sdk/protocol-http":"3.6.1","@aws-sdk/smithy-client":"3.6.1","@aws-sdk/types":"3.6.1","@aws-sdk/url-parser":"3.6.1","@aws-sdk/url-parser-native":"3.6.1","@aws-sdk/util-base64-browser":"3.6.1","@aws-sdk/util-base64-node":"3.6.1","@aws-sdk/util-body-length-browser":"3.6.1","@aws-sdk/util-body-length-node":"3.6.1","@aws-sdk/util-user-agent-browser":"3.6.1","@aws-sdk/util-user-agent-node":"3.6.1","@aws-sdk/util-utf8-browser":"3.6.1","@aws-sdk/util-utf8-node":"3.6.1","tslib":"^2.0.0"},"devDependencies":{"@aws-sdk/client-documentation-generator":"3.6.1","@aws-sdk/client-iam":"3.6.1","@types/chai":"^4.2.11","@types/mocha":"^8.0.4","@types/node":"^12.7.5","downlevel-dts":"0.7.0","jest":"^26.1.0","rimraf":"^3.0.0","typedoc":"^0.19.2","typescript":"~4.1.2"},"engines":{"node":">=10.0.0"},"typesVersions":{"<4.0":{"types/*":["types/ts3.4/*"]}},"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-cognito-identity"}}'
      );
    },
    "+rSW": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      }),
        r.d(t, "b", function () {
          return o;
        });
      var n = "aws-amplify/3.8.23",
        i = {
          userAgent: n + " js",
          product: "",
          navigator: null,
          isReactNative: !1,
        };
      if ("undefined" !== typeof navigator && navigator.product)
        switch (
          ((i.product = navigator.product || ""),
          (i.navigator = navigator || null),
          navigator.product)
        ) {
          case "ReactNative":
            (i.userAgent = n + " react-native"), (i.isReactNative = !0);
            break;
          default:
            (i.userAgent = n + " js"), (i.isReactNative = !1);
        }
      var o = function () {
        return i.userAgent;
      };
    },
    "+tRG": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var n = r("mrSG"),
        i = {
          name: "loggerMiddleware",
          tags: ["LOGGER"],
          step: "initialize",
          override: !0,
        },
        o = function (e) {
          return {
            applyToStack: function (e) {
              e.add(function (e, t) {
                return function (r) {
                  return Object(n.__awaiter)(
                    void 0,
                    void 0,
                    void 0,
                    function () {
                      var i, o, s, a, u, c, f, l, d;
                      return Object(n.__generator)(this, function (h) {
                        switch (h.label) {
                          case 0:
                            return (
                              (i = t.clientName),
                              (o = t.commandName),
                              (s = t.inputFilterSensitiveLog),
                              (a = t.logger),
                              (u = t.outputFilterSensitiveLog),
                              [4, e(r)]
                            );
                          case 1:
                            return (
                              (c = h.sent()),
                              a
                                ? ("function" === typeof a.info &&
                                    ((f = c.output),
                                    (l = f.$metadata),
                                    (d = Object(n.__rest)(f, ["$metadata"])),
                                    a.info({
                                      clientName: i,
                                      commandName: o,
                                      input: s(r.input),
                                      output: u(d),
                                      metadata: l,
                                    })),
                                  [2, c])
                                : [2, c]
                            );
                        }
                      });
                    }
                  );
                };
              }, i);
            },
          };
        };
    },
    "/0+H": function (e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.isInAmpMode = s),
        (t.useAmp = function () {
          return s(i.default.useContext(o.AmpStateContext));
        });
      var n,
        i = (n = r("q1tI")) && n.__esModule ? n : { default: n },
        o = r("lwAK");
      function s() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          r = void 0 !== t && t,
          n = e.hybrid,
          i = void 0 !== n && n,
          o = e.hasQuery,
          s = void 0 !== o && o;
        return r || (i && s);
      }
    },
    "/wwA": function (e, t) {
      e.exports =
        "/_next/static/images/meta-image-74597592a8dd0f857444e1ef80496722.jpg";
    },
    "03A+": function (e, t, r) {
      var n = r("JTzB"),
        i = r("ExA7"),
        o = Object.prototype,
        s = o.hasOwnProperty,
        a = o.propertyIsEnumerable,
        u = n(
          (function () {
            return arguments;
          })()
        )
          ? n
          : function (e) {
              return i(e) && s.call(e, "callee") && !a.call(e, "callee");
            };
      e.exports = u;
    },
    "0x0X": function (e, t, r) {
      "use strict";
      t.a = function (e) {
        function t(e, n, u, c, d) {
          for (
            var h,
              p,
              g,
              y,
              w,
              _ = 0,
              A = 0,
              C = 0,
              O = 0,
              E = 0,
              T = 0,
              M = (g = h = 0),
              D = 0,
              F = 0,
              N = 0,
              B = 0,
              L = u.length,
              z = L - 1,
              H = "",
              q = "",
              V = "",
              W = "";
            D < L;

          ) {
            if (
              ((p = u.charCodeAt(D)),
              D === z &&
                0 !== A + O + C + _ &&
                (0 !== A && (p = 47 === A ? 10 : 47),
                (O = C = _ = 0),
                L++,
                z++),
              0 === A + O + C + _)
            ) {
              if (
                D === z &&
                (0 < F && (H = H.replace(l, "")), 0 < H.trim().length)
              ) {
                switch (p) {
                  case 32:
                  case 9:
                  case 59:
                  case 13:
                  case 10:
                    break;
                  default:
                    H += u.charAt(D);
                }
                p = 59;
              }
              switch (p) {
                case 123:
                  for (
                    h = (H = H.trim()).charCodeAt(0), g = 1, B = ++D;
                    D < L;

                  ) {
                    switch ((p = u.charCodeAt(D))) {
                      case 123:
                        g++;
                        break;
                      case 125:
                        g--;
                        break;
                      case 47:
                        switch ((p = u.charCodeAt(D + 1))) {
                          case 42:
                          case 47:
                            e: {
                              for (M = D + 1; M < z; ++M)
                                switch (u.charCodeAt(M)) {
                                  case 47:
                                    if (
                                      42 === p &&
                                      42 === u.charCodeAt(M - 1) &&
                                      D + 2 !== M
                                    ) {
                                      D = M + 1;
                                      break e;
                                    }
                                    break;
                                  case 10:
                                    if (47 === p) {
                                      D = M + 1;
                                      break e;
                                    }
                                }
                              D = M;
                            }
                        }
                        break;
                      case 91:
                        p++;
                      case 40:
                        p++;
                      case 34:
                      case 39:
                        for (; D++ < z && u.charCodeAt(D) !== p; );
                    }
                    if (0 === g) break;
                    D++;
                  }
                  switch (
                    ((g = u.substring(B, D)),
                    0 === h &&
                      (h = (H = H.replace(f, "").trim()).charCodeAt(0)),
                    h)
                  ) {
                    case 64:
                      switch (
                        (0 < F && (H = H.replace(l, "")), (p = H.charCodeAt(1)))
                      ) {
                        case 100:
                        case 109:
                        case 115:
                        case 45:
                          F = n;
                          break;
                        default:
                          F = j;
                      }
                      if (
                        ((B = (g = t(n, F, g, p, d + 1)).length),
                        0 < R &&
                          ((w = a(3, g, (F = r(j, H, N)), n, P, k, B, p, d, c)),
                          (H = F.join("")),
                          void 0 !== w &&
                            0 === (B = (g = w.trim()).length) &&
                            ((p = 0), (g = ""))),
                        0 < B)
                      )
                        switch (p) {
                          case 115:
                            H = H.replace(S, s);
                          case 100:
                          case 109:
                          case 45:
                            g = H + "{" + g + "}";
                            break;
                          case 107:
                            (g = (H = H.replace(m, "$1 $2")) + "{" + g + "}"),
                              (g =
                                1 === I || (2 === I && o("@" + g, 3))
                                  ? "@-webkit-" + g + "@" + g
                                  : "@" + g);
                            break;
                          default:
                            (g = H + g), 112 === c && ((q += g), (g = ""));
                        }
                      else g = "";
                      break;
                    default:
                      g = t(n, r(n, H, N), g, c, d + 1);
                  }
                  (V += g),
                    (g = N = F = M = h = 0),
                    (H = ""),
                    (p = u.charCodeAt(++D));
                  break;
                case 125:
                case 59:
                  if (
                    1 < (B = (H = (0 < F ? H.replace(l, "") : H).trim()).length)
                  )
                    switch (
                      (0 === M &&
                        ((h = H.charCodeAt(0)),
                        45 === h || (96 < h && 123 > h)) &&
                        (B = (H = H.replace(" ", ":")).length),
                      0 < R &&
                        void 0 !==
                          (w = a(1, H, n, e, P, k, q.length, c, d, c)) &&
                        0 === (B = (H = w.trim()).length) &&
                        (H = "\0\0"),
                      (h = H.charCodeAt(0)),
                      (p = H.charCodeAt(1)),
                      h)
                    ) {
                      case 0:
                        break;
                      case 64:
                        if (105 === p || 99 === p) {
                          W += H + u.charAt(D);
                          break;
                        }
                      default:
                        58 !== H.charCodeAt(B - 1) &&
                          (q += i(H, h, p, H.charCodeAt(2)));
                    }
                  (N = F = M = h = 0), (H = ""), (p = u.charCodeAt(++D));
              }
            }
            switch (p) {
              case 13:
              case 10:
                47 === A
                  ? (A = 0)
                  : 0 === 1 + h &&
                    107 !== c &&
                    0 < H.length &&
                    ((F = 1), (H += "\0")),
                  0 < R * U && a(0, H, n, e, P, k, q.length, c, d, c),
                  (k = 1),
                  P++;
                break;
              case 59:
              case 125:
                if (0 === A + O + C + _) {
                  k++;
                  break;
                }
              default:
                switch ((k++, (y = u.charAt(D)), p)) {
                  case 9:
                  case 32:
                    if (0 === O + _ + A)
                      switch (E) {
                        case 44:
                        case 58:
                        case 9:
                        case 32:
                          y = "";
                          break;
                        default:
                          32 !== p && (y = " ");
                      }
                    break;
                  case 0:
                    y = "\\0";
                    break;
                  case 12:
                    y = "\\f";
                    break;
                  case 11:
                    y = "\\v";
                    break;
                  case 38:
                    0 === O + A + _ && ((F = N = 1), (y = "\f" + y));
                    break;
                  case 108:
                    if (0 === O + A + _ + x && 0 < M)
                      switch (D - M) {
                        case 2:
                          112 === E && 58 === u.charCodeAt(D - 3) && (x = E);
                        case 8:
                          111 === T && (x = T);
                      }
                    break;
                  case 58:
                    0 === O + A + _ && (M = D);
                    break;
                  case 44:
                    0 === A + C + O + _ && ((F = 1), (y += "\r"));
                    break;
                  case 34:
                  case 39:
                    0 === A && (O = O === p ? 0 : 0 === O ? p : O);
                    break;
                  case 91:
                    0 === O + A + C && _++;
                    break;
                  case 93:
                    0 === O + A + C && _--;
                    break;
                  case 41:
                    0 === O + A + _ && C--;
                    break;
                  case 40:
                    if (0 === O + A + _) {
                      if (0 === h)
                        switch (2 * E + 3 * T) {
                          case 533:
                            break;
                          default:
                            h = 1;
                        }
                      C++;
                    }
                    break;
                  case 64:
                    0 === A + C + O + _ + M + g && (g = 1);
                    break;
                  case 42:
                  case 47:
                    if (!(0 < O + _ + C))
                      switch (A) {
                        case 0:
                          switch (2 * p + 3 * u.charCodeAt(D + 1)) {
                            case 235:
                              A = 47;
                              break;
                            case 220:
                              (B = D), (A = 42);
                          }
                          break;
                        case 42:
                          47 === p &&
                            42 === E &&
                            B + 2 !== D &&
                            (33 === u.charCodeAt(B + 2) &&
                              (q += u.substring(B, D + 1)),
                            (y = ""),
                            (A = 0));
                      }
                }
                0 === A && (H += y);
            }
            (T = E), (E = p), D++;
          }
          if (0 < (B = q.length)) {
            if (
              ((F = n),
              0 < R &&
                void 0 !== (w = a(2, q, F, e, P, k, B, c, d, c)) &&
                0 === (q = w).length)
            )
              return W + q + V;
            if (((q = F.join(",") + "{" + q + "}"), 0 !== I * x)) {
              switch ((2 !== I || o(q, 2) || (x = 0), x)) {
                case 111:
                  q = q.replace(b, ":-moz-$1") + q;
                  break;
                case 112:
                  q =
                    q.replace(v, "::-webkit-input-$1") +
                    q.replace(v, "::-moz-$1") +
                    q.replace(v, ":-ms-input-$1") +
                    q;
              }
              x = 0;
            }
          }
          return W + q + V;
        }
        function r(e, t, r) {
          var i = t.trim().split(g);
          t = i;
          var o = i.length,
            s = e.length;
          switch (s) {
            case 0:
            case 1:
              var a = 0;
              for (e = 0 === s ? "" : e[0] + " "; a < o; ++a)
                t[a] = n(e, t[a], r).trim();
              break;
            default:
              var u = (a = 0);
              for (t = []; a < o; ++a)
                for (var c = 0; c < s; ++c)
                  t[u++] = n(e[c] + " ", i[a], r).trim();
          }
          return t;
        }
        function n(e, t, r) {
          var n = t.charCodeAt(0);
          switch ((33 > n && (n = (t = t.trim()).charCodeAt(0)), n)) {
            case 38:
              return t.replace(y, "$1" + e.trim());
            case 58:
              return e.trim() + t.replace(y, "$1" + e.trim());
            default:
              if (0 < 1 * r && 0 < t.indexOf("\f"))
                return t.replace(
                  y,
                  (58 === e.charCodeAt(0) ? "" : "$1") + e.trim()
                );
          }
          return e + t;
        }
        function i(e, t, r, n) {
          var s = e + ";",
            a = 2 * t + 3 * r + 4 * n;
          if (944 === a) {
            e = s.indexOf(":", 9) + 1;
            var u = s.substring(e, s.length - 1).trim();
            return (
              (u = s.substring(0, e).trim() + u + ";"),
              1 === I || (2 === I && o(u, 1)) ? "-webkit-" + u + u : u
            );
          }
          if (0 === I || (2 === I && !o(s, 1))) return s;
          switch (a) {
            case 1015:
              return 97 === s.charCodeAt(10) ? "-webkit-" + s + s : s;
            case 951:
              return 116 === s.charCodeAt(3) ? "-webkit-" + s + s : s;
            case 963:
              return 110 === s.charCodeAt(5) ? "-webkit-" + s + s : s;
            case 1009:
              if (100 !== s.charCodeAt(4)) break;
            case 969:
            case 942:
              return "-webkit-" + s + s;
            case 978:
              return "-webkit-" + s + "-moz-" + s + s;
            case 1019:
            case 983:
              return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
            case 883:
              if (45 === s.charCodeAt(8)) return "-webkit-" + s + s;
              if (0 < s.indexOf("image-set(", 11))
                return s.replace(E, "$1-webkit-$2") + s;
              break;
            case 932:
              if (45 === s.charCodeAt(4))
                switch (s.charCodeAt(5)) {
                  case 103:
                    return (
                      "-webkit-box-" +
                      s.replace("-grow", "") +
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("grow", "positive") +
                      s
                    );
                  case 115:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("shrink", "negative") +
                      s
                    );
                  case 98:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("basis", "preferred-size") +
                      s
                    );
                }
              return "-webkit-" + s + "-ms-" + s + s;
            case 964:
              return "-webkit-" + s + "-ms-flex-" + s + s;
            case 1023:
              if (99 !== s.charCodeAt(8)) break;
              return (
                "-webkit-box-pack" +
                (u = s
                  .substring(s.indexOf(":", 15))
                  .replace("flex-", "")
                  .replace("space-between", "justify")) +
                "-webkit-" +
                s +
                "-ms-flex-pack" +
                u +
                s
              );
            case 1005:
              return h.test(s)
                ? s.replace(d, ":-webkit-") + s.replace(d, ":-moz-") + s
                : s;
            case 1e3:
              switch (
                ((t = (u = s.substring(13).trim()).indexOf("-") + 1),
                u.charCodeAt(0) + u.charCodeAt(t))
              ) {
                case 226:
                  u = s.replace(w, "tb");
                  break;
                case 232:
                  u = s.replace(w, "tb-rl");
                  break;
                case 220:
                  u = s.replace(w, "lr");
                  break;
                default:
                  return s;
              }
              return "-webkit-" + s + "-ms-" + u + s;
            case 1017:
              if (-1 === s.indexOf("sticky", 9)) break;
            case 975:
              switch (
                ((t = (s = e).length - 10),
                (a =
                  (u = (33 === s.charCodeAt(t) ? s.substring(0, t) : s)
                    .substring(e.indexOf(":", 7) + 1)
                    .trim()).charCodeAt(0) +
                  (0 | u.charCodeAt(7))))
              ) {
                case 203:
                  if (111 > u.charCodeAt(8)) break;
                case 115:
                  s = s.replace(u, "-webkit-" + u) + ";" + s;
                  break;
                case 207:
                case 102:
                  s =
                    s.replace(
                      u,
                      "-webkit-" + (102 < a ? "inline-" : "") + "box"
                    ) +
                    ";" +
                    s.replace(u, "-webkit-" + u) +
                    ";" +
                    s.replace(u, "-ms-" + u + "box") +
                    ";" +
                    s;
              }
              return s + ";";
            case 938:
              if (45 === s.charCodeAt(5))
                switch (s.charCodeAt(6)) {
                  case 105:
                    return (
                      (u = s.replace("-items", "")),
                      "-webkit-" + s + "-webkit-box-" + u + "-ms-flex-" + u + s
                    );
                  case 115:
                    return (
                      "-webkit-" + s + "-ms-flex-item-" + s.replace(A, "") + s
                    );
                  default:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-flex-line-pack" +
                      s.replace("align-content", "").replace(A, "") +
                      s
                    );
                }
              break;
            case 973:
            case 989:
              if (45 !== s.charCodeAt(3) || 122 === s.charCodeAt(4)) break;
            case 931:
            case 953:
              if (!0 === O.test(e))
                return 115 ===
                  (u = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                  ? i(e.replace("stretch", "fill-available"), t, r, n).replace(
                      ":fill-available",
                      ":stretch"
                    )
                  : s.replace(u, "-webkit-" + u) +
                      s.replace(u, "-moz-" + u.replace("fill-", "")) +
                      s;
              break;
            case 962:
              if (
                ((s =
                  "-webkit-" +
                  s +
                  (102 === s.charCodeAt(5) ? "-ms-" + s : "") +
                  s),
                211 === r + n &&
                  105 === s.charCodeAt(13) &&
                  0 < s.indexOf("transform", 10))
              )
                return (
                  s
                    .substring(0, s.indexOf(";", 27) + 1)
                    .replace(p, "$1-webkit-$2") + s
                );
          }
          return s;
        }
        function o(e, t) {
          var r = e.indexOf(1 === t ? ":" : "{"),
            n = e.substring(0, 3 !== t ? r : 10);
          return (
            (r = e.substring(r + 1, e.length - 1)),
            M(2 !== t ? n : n.replace(C, "$1"), r, t)
          );
        }
        function s(e, t) {
          var r = i(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
          return r !== t + ";"
            ? r.replace(_, " or ($1)").substring(4)
            : "(" + t + ")";
        }
        function a(e, t, r, n, i, o, s, a, u, f) {
          for (var l, d = 0, h = t; d < R; ++d)
            switch ((l = T[d].call(c, e, h, r, n, i, o, s, a, u, f))) {
              case void 0:
              case !1:
              case !0:
              case null:
                break;
              default:
                h = l;
            }
          if (h !== t) return h;
        }
        function u(e) {
          return (
            void 0 !== (e = e.prefix) &&
              ((M = null),
              e
                ? "function" !== typeof e
                  ? (I = 1)
                  : ((I = 2), (M = e))
                : (I = 0)),
            u
          );
        }
        function c(e, r) {
          var n = e;
          if ((33 > n.charCodeAt(0) && (n = n.trim()), (n = [n]), 0 < R)) {
            var i = a(-1, r, n, n, P, k, 0, 0, 0, 0);
            void 0 !== i && "string" === typeof i && (r = i);
          }
          var o = t(j, n, r, 0, 0);
          return (
            0 < R &&
              void 0 !== (i = a(-2, o, n, n, P, k, o.length, 0, 0, 0)) &&
              (o = i),
            "",
            (x = 0),
            (k = P = 1),
            o
          );
        }
        var f = /^\0+/g,
          l = /[\0\r\f]/g,
          d = /: */g,
          h = /zoo|gra/,
          p = /([,: ])(transform)/g,
          g = /,\r+?/g,
          y = /([\t\r\n ])*\f?&/g,
          m = /@(k\w+)\s*(\S*)\s*/,
          v = /::(place)/g,
          b = /:(read-only)/g,
          w = /[svh]\w+-[tblr]{2}/,
          S = /\(\s*(.*)\s*\)/g,
          _ = /([\s\S]*?);/g,
          A = /-self|flex-/g,
          C = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          O = /stretch|:\s*\w+\-(?:conte|avail)/,
          E = /([^-])(image-set\()/,
          k = 1,
          P = 1,
          x = 0,
          I = 1,
          j = [],
          T = [],
          R = 0,
          M = null,
          U = 0;
        return (
          (c.use = function e(t) {
            switch (t) {
              case void 0:
              case null:
                R = T.length = 0;
                break;
              default:
                if ("function" === typeof t) T[R++] = t;
                else if ("object" === typeof t)
                  for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
                else U = 0 | !!t;
            }
            return e;
          }),
          (c.set = u),
          void 0 !== e && u(e),
          c
        );
      };
    },
    1: function (e, t) {},
    2: function (e, t) {},
    "20a2": function (e, t, r) {
      e.exports = r("nOHt");
    },
    "2Lx6": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var n = {},
        i = (function () {
          function e() {}
          return (
            (e.setItem = function (e, t) {
              return (n[e] = t), n[e];
            }),
            (e.getItem = function (e) {
              return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : void 0;
            }),
            (e.removeItem = function (e) {
              return delete n[e];
            }),
            (e.clear = function () {
              return (n = {});
            }),
            e
          );
        })(),
        o = (function () {
          function e() {
            try {
              (this.storageWindow = window.localStorage),
                this.storageWindow.setItem("aws.amplify.test-ls", 1),
                this.storageWindow.removeItem("aws.amplify.test-ls");
            } catch (e) {
              this.storageWindow = i;
            }
          }
          return (
            (e.prototype.getStorage = function () {
              return this.storageWindow;
            }),
            e
          );
        })();
    },
    "2gN3": function (e, t, r) {
      var n = r("Kz5y")["__core-js_shared__"];
      e.exports = n;
    },
    "2j7m": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var n = r("mrSG");
      var i = function (e) {
        var t,
          r = new URL(e),
          i = r.hostname,
          o = r.pathname,
          s = r.port,
          a = r.protocol,
          u = r.search;
        return (
          u &&
            (t = (function (e) {
              var t,
                r,
                i = {};
              if ((e = e.replace(/^\?/, "")))
                try {
                  for (
                    var o = Object(n.__values)(e.split("&")), s = o.next();
                    !s.done;
                    s = o.next()
                  ) {
                    var a = s.value,
                      u = Object(n.__read)(a.split("="), 2),
                      c = u[0],
                      f = u[1],
                      l = void 0 === f ? null : f;
                    (c = decodeURIComponent(c)),
                      l && (l = decodeURIComponent(l)),
                      c in i
                        ? Array.isArray(i[c])
                          ? i[c].push(l)
                          : (i[c] = [i[c], l])
                        : (i[c] = l);
                  }
                } catch (d) {
                  t = { error: d };
                } finally {
                  try {
                    s && !s.done && (r = o.return) && r.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              return i;
            })(u)),
          {
            hostname: i,
            port: s ? parseInt(s) : void 0,
            protocol: a,
            path: o,
            query: t,
          }
        );
      };
    },
    "2mql": function (e, t, r) {
      "use strict";
      var n = r("r36Y"),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      function u(e) {
        return n.isMemo(e) ? s : a[e.$$typeof] || i;
      }
      (a[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (a[n.Memo] = s);
      var c = Object.defineProperty,
        f = Object.getOwnPropertyNames,
        l = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" !== typeof r) {
          if (p) {
            var i = h(r);
            i && i !== p && e(t, i, n);
          }
          var s = f(r);
          l && (s = s.concat(l(r)));
          for (var a = u(t), g = u(r), y = 0; y < s.length; ++y) {
            var m = s[y];
            if (!o[m] && (!n || !n[m]) && (!g || !g[m]) && (!a || !a[m])) {
              var v = d(r, m);
              try {
                c(t, m, v);
              } catch (b) {}
            }
          }
        }
        return t;
      };
    },
    "3Fdi": function (e, t) {
      var r = Function.prototype.toString;
      e.exports = function (e) {
        if (null != e) {
          try {
            return r.call(e);
          } catch (t) {}
          try {
            return e + "";
          } catch (t) {}
        }
        return "";
      };
    },
    "3tHY": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var n = r("mrSG"),
        i = r("TARy");
      function o(e) {
        var t,
          r,
          o = [];
        try {
          for (
            var s = Object(n.__values)(Object.keys(e).sort()), a = s.next();
            !a.done;
            a = s.next()
          ) {
            var u = a.value,
              c = e[u];
            if (((u = Object(i.a)(u)), Array.isArray(c)))
              for (var f = 0, l = c.length; f < l; f++)
                o.push(u + "=" + Object(i.a)(c[f]));
            else {
              var d = u;
              (c || "string" === typeof c) && (d += "=" + Object(i.a)(c)),
                o.push(d);
            }
          }
        } catch (h) {
          t = { error: h };
        } finally {
          try {
            a && !a.done && (r = s.return) && r.call(s);
          } finally {
            if (t) throw t.error;
          }
        }
        return o.join("&");
      }
    },
    "49sm": function (e, t) {
      var r = {}.toString;
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == r.call(e);
        };
    },
    "4Hbs": function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RawSha256 = void 0);
      var n = r("W5Sr"),
        i = (function () {
          function e() {
            (this.state = Int32Array.from(n.INIT)),
              (this.temp = new Int32Array(64)),
              (this.buffer = new Uint8Array(64)),
              (this.bufferLength = 0),
              (this.bytesHashed = 0),
              (this.finished = !1);
          }
          return (
            (e.prototype.update = function (e) {
              if (this.finished)
                throw new Error(
                  "Attempted to update an already finished hash."
                );
              var t = 0,
                r = e.byteLength;
              if (
                ((this.bytesHashed += r),
                8 * this.bytesHashed > n.MAX_HASHABLE_LENGTH)
              )
                throw new Error("Cannot hash more than 2^53 - 1 bits");
              for (; r > 0; )
                (this.buffer[this.bufferLength++] = e[t++]),
                  r--,
                  this.bufferLength === n.BLOCK_SIZE &&
                    (this.hashBuffer(), (this.bufferLength = 0));
            }),
            (e.prototype.digest = function () {
              if (!this.finished) {
                var e = 8 * this.bytesHashed,
                  t = new DataView(
                    this.buffer.buffer,
                    this.buffer.byteOffset,
                    this.buffer.byteLength
                  ),
                  r = this.bufferLength;
                if (
                  (t.setUint8(this.bufferLength++, 128),
                  r % n.BLOCK_SIZE >= n.BLOCK_SIZE - 8)
                ) {
                  for (var i = this.bufferLength; i < n.BLOCK_SIZE; i++)
                    t.setUint8(i, 0);
                  this.hashBuffer(), (this.bufferLength = 0);
                }
                for (i = this.bufferLength; i < n.BLOCK_SIZE - 8; i++)
                  t.setUint8(i, 0);
                t.setUint32(n.BLOCK_SIZE - 8, Math.floor(e / 4294967296), !0),
                  t.setUint32(n.BLOCK_SIZE - 4, e),
                  this.hashBuffer(),
                  (this.finished = !0);
              }
              var o = new Uint8Array(n.DIGEST_LENGTH);
              for (i = 0; i < 8; i++)
                (o[4 * i] = (this.state[i] >>> 24) & 255),
                  (o[4 * i + 1] = (this.state[i] >>> 16) & 255),
                  (o[4 * i + 2] = (this.state[i] >>> 8) & 255),
                  (o[4 * i + 3] = (this.state[i] >>> 0) & 255);
              return o;
            }),
            (e.prototype.hashBuffer = function () {
              for (
                var e = this.buffer,
                  t = this.state,
                  r = t[0],
                  i = t[1],
                  o = t[2],
                  s = t[3],
                  a = t[4],
                  u = t[5],
                  c = t[6],
                  f = t[7],
                  l = 0;
                l < n.BLOCK_SIZE;
                l++
              ) {
                if (l < 16)
                  this.temp[l] =
                    ((255 & e[4 * l]) << 24) |
                    ((255 & e[4 * l + 1]) << 16) |
                    ((255 & e[4 * l + 2]) << 8) |
                    (255 & e[4 * l + 3]);
                else {
                  var d = this.temp[l - 2],
                    h =
                      ((d >>> 17) | (d << 15)) ^
                      ((d >>> 19) | (d << 13)) ^
                      (d >>> 10),
                    p =
                      (((d = this.temp[l - 15]) >>> 7) | (d << 25)) ^
                      ((d >>> 18) | (d << 14)) ^
                      (d >>> 3);
                  this.temp[l] =
                    ((h + this.temp[l - 7]) | 0) +
                    ((p + this.temp[l - 16]) | 0);
                }
                var g =
                    ((((((a >>> 6) | (a << 26)) ^
                      ((a >>> 11) | (a << 21)) ^
                      ((a >>> 25) | (a << 7))) +
                      ((a & u) ^ (~a & c))) |
                      0) +
                      ((f + ((n.KEY[l] + this.temp[l]) | 0)) | 0)) |
                    0,
                  y =
                    ((((r >>> 2) | (r << 30)) ^
                      ((r >>> 13) | (r << 19)) ^
                      ((r >>> 22) | (r << 10))) +
                      ((r & i) ^ (r & o) ^ (i & o))) |
                    0;
                (f = c),
                  (c = u),
                  (u = a),
                  (a = (s + g) | 0),
                  (s = o),
                  (o = i),
                  (i = r),
                  (r = (g + y) | 0);
              }
              (t[0] += r),
                (t[1] += i),
                (t[2] += o),
                (t[3] += s),
                (t[4] += a),
                (t[5] += u),
                (t[6] += c),
                (t[7] += f);
            }),
            e
          );
        })();
      t.RawSha256 = i;
    },
    "4JlD": function (e, t, r) {
      "use strict";
      var n = function (e) {
        switch (typeof e) {
          case "string":
            return e;
          case "boolean":
            return e ? "true" : "false";
          case "number":
            return isFinite(e) ? e : "";
          default:
            return "";
        }
      };
      e.exports = function (e, t, r, a) {
        return (
          (t = t || "&"),
          (r = r || "="),
          null === e && (e = void 0),
          "object" === typeof e
            ? o(s(e), function (s) {
                var a = encodeURIComponent(n(s)) + r;
                return i(e[s])
                  ? o(e[s], function (e) {
                      return a + encodeURIComponent(n(e));
                    }).join(t)
                  : a + encodeURIComponent(n(e[s]));
              }).join(t)
            : a
            ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(e))
            : ""
        );
      };
      var i =
        Array.isArray ||
        function (e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        };
      function o(e, t) {
        if (e.map) return e.map(t);
        for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
        return r;
      }
      var s =
        Object.keys ||
        function (e) {
          var t = [];
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
          return t;
        };
    },
    "4fRq": function (e, t) {
      var r =
        ("undefined" != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto &&
          "function" == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (r) {
        var n = new Uint8Array(16);
        e.exports = function () {
          return r(n), n;
        };
      } else {
        var i = new Array(16);
        e.exports = function () {
          for (var e, t = 0; t < 16; t++)
            0 === (3 & t) && (e = 4294967296 * Math.random()),
              (i[t] = (e >>> ((3 & t) << 3)) & 255);
          return i;
        };
      }
    },
    "4qRI": function (e, t, r) {
      "use strict";
      t.a = function (e) {
        var t = {};
        return function (r) {
          return void 0 === t[r] && (t[r] = e(r)), t[r];
        };
      };
    },
    "5D9J": function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("lSNA"),
        i = r.n(n),
        o = r("q1tI"),
        s = r("9uj6"),
        a = r("qKvR"),
        u = r("SIPS"),
        c = r("MiSq"),
        f = s.a,
        l = function (e) {
          return "theme" !== e && "innerRef" !== e;
        },
        d = function (e) {
          return "string" === typeof e && e.charCodeAt(0) > 96 ? f : l;
        };
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(r, !0).forEach(function (t) {
                i()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : h(r).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var g = function e(t, r) {
        var n, i, s;
        void 0 !== r &&
          ((n = r.label),
          (s = r.target),
          (i =
            t.__emotion_forwardProp && r.shouldForwardProp
              ? function (e) {
                  return t.__emotion_forwardProp(e) && r.shouldForwardProp(e);
                }
              : r.shouldForwardProp));
        var f = t.__emotion_real === t,
          l = (f && t.__emotion_base) || t;
        "function" !== typeof i && f && (i = t.__emotion_forwardProp);
        var h = i || d(l),
          g = !h("as");
        return function () {
          var y = arguments,
            m =
              f && void 0 !== t.__emotion_styles
                ? t.__emotion_styles.slice(0)
                : [];
          if (
            (void 0 !== n && m.push("label:" + n + ";"),
            null == y[0] || void 0 === y[0].raw)
          )
            m.push.apply(m, y);
          else {
            0, m.push(y[0][0]);
            for (var v = y.length, b = 1; b < v; b++) m.push(y[b], y[0][b]);
          }
          var w = Object(a.d)(function (e, t, r) {
            return Object(o.createElement)(a.b.Consumer, null, function (n) {
              var a = (g && e.as) || l,
                f = "",
                p = [],
                y = e;
              if (null == e.theme) {
                for (var v in ((y = {}), e)) y[v] = e[v];
                y.theme = n;
              }
              "string" === typeof e.className
                ? (f = Object(u.a)(t.registered, p, e.className))
                : null != e.className && (f = e.className + " ");
              var b = Object(c.a)(m.concat(p), t.registered, y);
              Object(u.b)(t, b, "string" === typeof a);
              (f += t.key + "-" + b.name), void 0 !== s && (f += " " + s);
              var w = g && void 0 === i ? d(a) : h,
                S = {};
              for (var _ in e) (g && "as" === _) || (w(_) && (S[_] = e[_]));
              return (
                (S.className = f),
                (S.ref = r || e.innerRef),
                Object(o.createElement)(a, S)
              );
            });
          });
          return (
            (w.displayName =
              void 0 !== n
                ? n
                : "Styled(" +
                  ("string" === typeof l
                    ? l
                    : l.displayName || l.name || "Component") +
                  ")"),
            (w.defaultProps = t.defaultProps),
            (w.__emotion_real = w),
            (w.__emotion_base = l),
            (w.__emotion_styles = m),
            (w.__emotion_forwardProp = i),
            Object.defineProperty(w, "toString", {
              value: function () {
                return "." + s;
              },
            }),
            (w.withComponent = function (t, n) {
              return e(t, void 0 !== n ? p({}, r || {}, {}, n) : r).apply(
                void 0,
                m
              );
            }),
            w
          );
        };
      }.bind();
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (e) {
        g[e] = g(e);
      });
      t.default = g;
    },
    "5fIB": function (e, t, r) {
      var n = r("7eYB");
      e.exports = function (e) {
        if (Array.isArray(e)) return n(e);
      };
    },
    "5gwC": function (e, t, r) {
      "use strict";
      var n = r("cpVT"),
        i = r("jT3O"),
        o = r("q1tI"),
        s = r.n(o),
        a = r("VdAu"),
        u = r("vOnD"),
        c = r("HJKE"),
        f = r("TfoY"),
        l = s.a.createElement;
      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function p() {
        var e = Object(i.a)([
          "\n  p a {\n    text-decoration: underline !important;\n  }\n  & strong {\n    font-weight: 700;\n  }\n  ",
          "\n",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      var g = Object(u.c)(a.d)(p(), function (e) {
        return (
          e.centerChild &&
          "\n      h1, h2, h3, h4, p {\n          margin-right: auto;\n          margin-left: auto\n      }\n  "
        );
      });
      t.a = function (e) {
        var t = e.font,
          r = e.fontWeight,
          n = e.letterSpacing,
          i = void 0 === n ? "-2%" : n,
          o = e.color,
          s = e.mt,
          a = e.mb,
          u = e.mr,
          d = e.pt,
          p = e.children,
          y = e.width,
          m = e.align,
          v = e.columnCount,
          b = void 0 === v ? 1 : v,
          w = e.className,
          S = e.wordBreak,
          _ = void 0 === S ? "none" : S,
          A = e.border,
          C = void 0 !== A && A,
          O = e.whiteSpace,
          E = void 0 === O ? "normal" : O,
          k = e.sx,
          P = Object(f.c)();
        return l(
          g,
          {
            className: w,
            fontSize: c.g[t],
            fontWeight: r || c.d.weight.regular,
            lineHeight: "".concat(c.f[t], "px"),
            color: o || c.b.black,
            mt: s,
            mb: a,
            mr: u,
            pt: d,
            width: y,
            textAlign: m,
            centerChild: 1 === b && "center" === m,
            sx: h(
              {
                letterSpacing: i,
                columnCount: P ? 1 : b,
                wordBreak: _,
                whiteSpace: E,
                borderBottom: C && [
                  "2px solid ".concat(c.b.black),
                  "2px solid ".concat(c.b.black),
                ],
              },
              k
            ),
          },
          p
        );
      };
    },
    "5wY4": function (e, t, r) {
      "use strict";
      (function (e) {
        var n;
        if (
          (r.d(t, "a", function () {
            return i;
          }),
          "undefined" !== typeof window && window.crypto && (n = window.crypto),
          !n &&
            "undefined" !== typeof window &&
            window.msCrypto &&
            (n = window.msCrypto),
          !n && "undefined" !== typeof e && e.crypto && (n = e.crypto),
          !n)
        )
          try {
            n = r(2);
          } catch (o) {}
        function i() {
          if (n) {
            if ("function" === typeof n.getRandomValues)
              try {
                return n.getRandomValues(new Uint32Array(1))[0];
              } catch (o) {}
            if ("function" === typeof n.randomBytes)
              try {
                return n.randomBytes(4).readInt32LE();
              } catch (o) {}
          }
          throw new Error(
            "Native crypto module could not be used to get secure random number."
          );
        }
      }).call(this, r("ntbh"));
    },
    "6sVZ": function (e, t) {
      var r = Object.prototype;
      e.exports = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || r);
      };
    },
    "7VPu": function (e, t, r) {
      !(function (t, n, i) {
        var o;
        e.exports = ((o = r("Ib8C")), r("lPiR"), r("WYAk"), o.HmacSHA256);
      })();
    },
    "7Z+r": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return u;
        });
      for (var n = {}, i = {}, o = 0; o < 256; o++) {
        var s = o.toString(16).toLowerCase();
        1 === s.length && (s = "0" + s), (n[o] = s), (i[s] = o);
      }
      function a(e) {
        if (e.length % 2 !== 0)
          throw new Error(
            "Hex encoded strings must have an even number length"
          );
        for (
          var t = new Uint8Array(e.length / 2), r = 0;
          r < e.length;
          r += 2
        ) {
          var n = e.substr(r, 2).toLowerCase();
          if (!(n in i))
            throw new Error(
              "Cannot decode unrecognized sequence " + n + " as hexadecimal"
            );
          t[r / 2] = i[n];
        }
        return t;
      }
      function u(e) {
        for (var t = "", r = 0; r < e.byteLength; r++) t += n[e[r]];
        return t;
      }
    },
    "87YT": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return i;
      }),
        r.d(t, "a", function () {
          return f;
        });
      var n = r("mrSG");
      function i(e) {
        return Object(n.__assign)(Object(n.__assign)({}, e), {
          customUserAgent:
            "string" === typeof e.customUserAgent
              ? [[e.customUserAgent]]
              : e.customUserAgent,
        });
      }
      var o = r("Enk7"),
        s = "user-agent",
        a = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
        u = function (e) {
          var t = Object(n.__read)(e, 2),
            r = t[0],
            i = t[1],
            o = r.indexOf("/"),
            s = r.substring(0, o),
            u = r.substring(o + 1);
          return (
            "api" === s && (u = u.toLowerCase()),
            [s, u, i]
              .filter(function (e) {
                return e && e.length > 0;
              })
              .map(function (e) {
                return null === e || void 0 === e ? void 0 : e.replace(a, "_");
              })
              .join("/")
          );
        },
        c = {
          name: "getUserAgentMiddleware",
          step: "build",
          priority: "low",
          tags: ["SET_USER_AGENT", "USER_AGENT"],
          override: !0,
        },
        f = function (e) {
          return {
            applyToStack: function (t) {
              var r;
              t.add(
                ((r = e),
                function (e, t) {
                  return function (i) {
                    return Object(n.__awaiter)(
                      void 0,
                      void 0,
                      void 0,
                      function () {
                        var a, c, f, l, d, h, p, g;
                        return Object(n.__generator)(this, function (y) {
                          switch (y.label) {
                            case 0:
                              return (
                                (a = i.request),
                                o.a.isInstance(a)
                                  ? ((c = a.headers),
                                    (f =
                                      (null ===
                                        (p =
                                          null === t || void 0 === t
                                            ? void 0
                                            : t.userAgent) || void 0 === p
                                        ? void 0
                                        : p.map(u)) || []),
                                    [4, r.defaultUserAgentProvider()])
                                  : [2, e(i)]
                              );
                            case 1:
                              return (
                                (l = y.sent().map(u)),
                                (d =
                                  (null ===
                                    (g =
                                      null === r || void 0 === r
                                        ? void 0
                                        : r.customUserAgent) || void 0 === g
                                    ? void 0
                                    : g.map(u)) || []),
                                (c["x-amz-user-agent"] = Object(n.__spread)(
                                  l,
                                  f,
                                  d
                                ).join(" ")),
                                (h = Object(n.__spread)(
                                  l.filter(function (e) {
                                    return e.startsWith("aws-sdk-");
                                  }),
                                  d
                                ).join(" ")),
                                "browser" !== r.runtime &&
                                  h &&
                                  (c[s] = c[s] ? c[s] + " " + h : h),
                                [
                                  2,
                                  e(
                                    Object(n.__assign)(
                                      Object(n.__assign)({}, i),
                                      { request: a }
                                    )
                                  ),
                                ]
                              );
                          }
                        });
                      }
                    );
                  };
                }),
                c
              );
            },
          };
        };
    },
    "8Kt/": function (e, t, r) {
      "use strict";
      var n = r("oI91");
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      (t.__esModule = !0), (t.defaultHead = d), (t.default = void 0);
      var o,
        s = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(r, i, o)
                : (r[i] = e[i]);
            }
          (r.default = e), t && t.set(e, r);
          return r;
        })(r("q1tI")),
        a = (o = r("Xuae")) && o.__esModule ? o : { default: o },
        u = r("lwAK"),
        c = r("FYa8"),
        f = r("/0+H");
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
      function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [s.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              s.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function h(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === s.default.Fragment
          ? e.concat(
              s.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var p = ["name", "httpEquiv", "charSet", "itemProp"];
      function g(e, t) {
        return e
          .reduce(function (e, t) {
            var r = s.default.Children.toArray(t.props.children);
            return e.concat(r);
          }, [])
          .reduce(h, [])
          .reverse()
          .concat(d(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return function (i) {
                var o = !0,
                  s = !1;
                if (
                  i.key &&
                  "number" !== typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  s = !0;
                  var a = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(a) ? (o = !1) : e.add(a);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (var u = 0, c = p.length; u < c; u++) {
                      var f = p[u];
                      if (i.props.hasOwnProperty(f))
                        if ("charSet" === f) r.has(f) ? (o = !1) : r.add(f);
                        else {
                          var l = i.props[f],
                            d = n[f] || new Set();
                          ("name" === f && s) || !d.has(l)
                            ? (d.add(l), (n[f] = d))
                            : (o = !1);
                        }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map(function (e, r) {
            var o = e.key || r;
            if (
              !t.inAmpMode &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var a = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? i(Object(r), !0).forEach(function (t) {
                        n(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : i(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
                }
                return e;
              })({}, e.props || {});
              return (
                (a["data-href"] = a.href),
                (a.href = void 0),
                (a["data-optimized-fonts"] = !0),
                s.default.cloneElement(e, a)
              );
            }
            return s.default.cloneElement(e, { key: o });
          });
      }
      function y(e) {
        var t = e.children,
          r = (0, s.useContext)(u.AmpStateContext),
          n = (0, s.useContext)(c.HeadManagerContext);
        return s.default.createElement(
          a.default,
          {
            reduceComponentsToState: g,
            headManager: n,
            inAmpMode: (0, f.isInAmpMode)(r),
          },
          t
        );
      }
      y.rewind = function () {};
      var m = y;
      t.default = m;
    },
    "8oxB": function (e, t) {
      var r,
        n,
        i = (e.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(e, 0);
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          r = "function" === typeof setTimeout ? setTimeout : o;
        } catch (e) {
          r = o;
        }
        try {
          n = "function" === typeof clearTimeout ? clearTimeout : s;
        } catch (e) {
          n = s;
        }
      })();
      var u,
        c = [],
        f = !1,
        l = -1;
      function d() {
        f &&
          u &&
          ((f = !1), u.length ? (c = u.concat(c)) : (l = -1), c.length && h());
      }
      function h() {
        if (!f) {
          var e = a(d);
          f = !0;
          for (var t = c.length; t; ) {
            for (u = c, c = []; ++l < t; ) u && u[l].run();
            (l = -1), (t = c.length);
          }
          (u = null),
            (f = !1),
            (function (e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === s || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(e);
              try {
                n(e);
              } catch (t) {
                try {
                  return n.call(null, e);
                } catch (t) {
                  return n.call(this, e);
                }
              }
            })(e);
        }
      }
      function p(e, t) {
        (this.fun = e), (this.array = t);
      }
      function g() {}
      (i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        c.push(new p(e, t)), 1 !== c.length || f || a(h);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = g),
        (i.addListener = g),
        (i.once = g),
        (i.off = g),
        (i.removeListener = g),
        (i.removeAllListeners = g),
        (i.emit = g),
        (i.prependListener = g),
        (i.prependOnceListener = g),
        (i.listeners = function (e) {
          return [];
        }),
        (i.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    "9ONQ": function (e, t, r) {
      "use strict";
      var n = r("iVi/");
      function i(e, t) {
        void 0 === t && (t = {});
        var r = (function (e) {
          if (e && "j" === e[0] && ":" === e[1]) return e.substr(2);
          return e;
        })(e);
        if (
          (function (e, t) {
            return (
              "undefined" === typeof t &&
                (t = !e || ("{" !== e[0] && "[" !== e[0] && '"' !== e[0])),
              !t
            );
          })(r, t.doNotParse)
        )
          try {
            return JSON.parse(r);
          } catch (n) {}
        return e;
      }
      var o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        s = (function () {
          function e(e, t) {
            var r = this;
            (this.changeListeners = []),
              (this.HAS_DOCUMENT_COOKIE = !1),
              (this.cookies = (function (e, t) {
                return "string" === typeof e
                  ? n.parse(e, t)
                  : "object" === typeof e && null !== e
                  ? e
                  : {};
              })(e, t)),
              new Promise(function () {
                r.HAS_DOCUMENT_COOKIE =
                  "object" === typeof document &&
                  "string" === typeof document.cookie;
              }).catch(function () {});
          }
          return (
            (e.prototype._updateBrowserValues = function (e) {
              this.HAS_DOCUMENT_COOKIE &&
                (this.cookies = n.parse(document.cookie, e));
            }),
            (e.prototype._emitChange = function (e) {
              for (var t = 0; t < this.changeListeners.length; ++t)
                this.changeListeners[t](e);
            }),
            (e.prototype.get = function (e, t, r) {
              return (
                void 0 === t && (t = {}),
                this._updateBrowserValues(r),
                i(this.cookies[e], t)
              );
            }),
            (e.prototype.getAll = function (e, t) {
              void 0 === e && (e = {}), this._updateBrowserValues(t);
              var r = {};
              for (var n in this.cookies) r[n] = i(this.cookies[n], e);
              return r;
            }),
            (e.prototype.set = function (e, t, r) {
              var i;
              "object" === typeof t && (t = JSON.stringify(t)),
                (this.cookies = o(o({}, this.cookies), (((i = {})[e] = t), i))),
                this.HAS_DOCUMENT_COOKIE &&
                  (document.cookie = n.serialize(e, t, r)),
                this._emitChange({ name: e, value: t, options: r });
            }),
            (e.prototype.remove = function (e, t) {
              var r = (t = o(o({}, t), {
                expires: new Date(1970, 1, 1, 0, 0, 1),
                maxAge: 0,
              }));
              (this.cookies = o({}, this.cookies)),
                delete this.cookies[e],
                this.HAS_DOCUMENT_COOKIE &&
                  (document.cookie = n.serialize(e, "", r)),
                this._emitChange({ name: e, value: void 0, options: t });
            }),
            (e.prototype.addChangeListener = function (e) {
              this.changeListeners.push(e);
            }),
            (e.prototype.removeChangeListener = function (e) {
              var t = this.changeListeners.indexOf(e);
              t >= 0 && this.changeListeners.splice(t, 1);
            }),
            e
          );
        })();
      t.a = s;
    },
    "9uj6": function (e, t, r) {
      "use strict";
      var n = r("4qRI"),
        i =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        o = Object(n.a)(function (e) {
          return (
            i.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        });
      t.a = o;
    },
    A90E: function (e, t, r) {
      var n = r("6sVZ"),
        i = r("V6Ve"),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!n(e)) return i(e);
        var t = [];
        for (var r in Object(e))
          o.call(e, r) && "constructor" != r && t.push(r);
        return t;
      };
    },
    AP2z: function (e, t, r) {
      var n = r("nmnc"),
        i = Object.prototype,
        o = i.hasOwnProperty,
        s = i.toString,
        a = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        var t = o.call(e, a),
          r = e[a];
        try {
          e[a] = void 0;
          var n = !0;
        } catch (u) {}
        var i = s.call(e);
        return n && (t ? (e[a] = r) : delete e[a]), i;
      };
    },
    AQMs: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Sha256 = void 0);
      var n = r("mrSG"),
        i = r("W5Sr"),
        o = r("4Hbs"),
        s = r("bS4T"),
        a = (function () {
          function e(e) {
            if (((this.hash = new o.RawSha256()), e)) {
              this.outer = new o.RawSha256();
              var t = (function (e) {
                  var t = u(e);
                  if (t.byteLength > i.BLOCK_SIZE) {
                    var r = new o.RawSha256();
                    r.update(t), (t = r.digest());
                  }
                  var n = new Uint8Array(i.BLOCK_SIZE);
                  return n.set(t), n;
                })(e),
                r = new Uint8Array(i.BLOCK_SIZE);
              r.set(t);
              for (var n = 0; n < i.BLOCK_SIZE; n++) (t[n] ^= 54), (r[n] ^= 92);
              this.hash.update(t), this.outer.update(r);
              for (n = 0; n < t.byteLength; n++) t[n] = 0;
            }
          }
          return (
            (e.prototype.update = function (e) {
              if (
                !(function (e) {
                  if ("string" === typeof e) return 0 === e.length;
                  return 0 === e.byteLength;
                })(e) &&
                !this.error
              )
                try {
                  this.hash.update(u(e));
                } catch (t) {
                  this.error = t;
                }
            }),
            (e.prototype.digestSync = function () {
              if (this.error) throw this.error;
              return this.outer
                ? (this.outer.finished || this.outer.update(this.hash.digest()),
                  this.outer.digest())
                : this.hash.digest();
            }),
            (e.prototype.digest = function () {
              return n.__awaiter(this, void 0, void 0, function () {
                return n.__generator(this, function (e) {
                  return [2, this.digestSync()];
                });
              });
            }),
            e
          );
        })();
      function u(e) {
        return "string" === typeof e
          ? s.fromUtf8(e)
          : ArrayBuffer.isView(e)
          ? new Uint8Array(
              e.buffer,
              e.byteOffset,
              e.byteLength / Uint8Array.BYTES_PER_ELEMENT
            )
          : new Uint8Array(e);
      }
      t.Sha256 = a;
    },
    B8du: function (e, t) {
      e.exports = function () {
        return !1;
      };
    },
    Copi: function (e, t, r) {
      "use strict";
      var n = "function" === typeof Symbol && Symbol.for,
        i = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        s = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        u = n ? Symbol.for("react.profiler") : 60114,
        c = n ? Symbol.for("react.provider") : 60109,
        f = n ? Symbol.for("react.context") : 60110,
        l = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        h = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        g = n ? Symbol.for("react.suspense_list") : 60120,
        y = n ? Symbol.for("react.memo") : 60115,
        m = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        b = n ? Symbol.for("react.fundamental") : 60117,
        w = n ? Symbol.for("react.responder") : 60118,
        S = n ? Symbol.for("react.scope") : 60119;
      function _(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case i:
              switch ((e = e.type)) {
                case l:
                case d:
                case s:
                case u:
                case a:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case f:
                    case h:
                    case m:
                    case y:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function A(e) {
        return _(e) === d;
      }
      (t.AsyncMode = l),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = f),
        (t.ContextProvider = c),
        (t.Element = i),
        (t.ForwardRef = h),
        (t.Fragment = s),
        (t.Lazy = m),
        (t.Memo = y),
        (t.Portal = o),
        (t.Profiler = u),
        (t.StrictMode = a),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return A(e) || _(e) === l;
        }),
        (t.isConcurrentMode = A),
        (t.isContextConsumer = function (e) {
          return _(e) === f;
        }),
        (t.isContextProvider = function (e) {
          return _(e) === c;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === i;
        }),
        (t.isForwardRef = function (e) {
          return _(e) === h;
        }),
        (t.isFragment = function (e) {
          return _(e) === s;
        }),
        (t.isLazy = function (e) {
          return _(e) === m;
        }),
        (t.isMemo = function (e) {
          return _(e) === y;
        }),
        (t.isPortal = function (e) {
          return _(e) === o;
        }),
        (t.isProfiler = function (e) {
          return _(e) === u;
        }),
        (t.isStrictMode = function (e) {
          return _(e) === a;
        }),
        (t.isSuspense = function (e) {
          return _(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === s ||
            e === d ||
            e === u ||
            e === a ||
            e === p ||
            e === g ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === y ||
                e.$$typeof === c ||
                e.$$typeof === f ||
                e.$$typeof === h ||
                e.$$typeof === b ||
                e.$$typeof === w ||
                e.$$typeof === S ||
                e.$$typeof === v))
          );
        }),
        (t.typeOf = _);
    },
    Cwc5: function (e, t, r) {
      var n = r("NKxu"),
        i = r("Npjl");
      e.exports = function (e, t) {
        var r = i(e, t);
        return n(r) ? r : void 0;
      };
    },
    DSRE: function (e, t, r) {
      (function (e) {
        var n = r("Kz5y"),
          i = r("B8du"),
          o = t && !t.nodeType && t,
          s = o && "object" == typeof e && e && !e.nodeType && e,
          a = s && s.exports === o ? n.Buffer : void 0,
          u = (a ? a.isBuffer : void 0) || i;
        e.exports = u;
      }).call(this, r("LY0y")(e));
    },
    "E+oP": function (e, t, r) {
      var n = r("A90E"),
        i = r("QqLw"),
        o = r("03A+"),
        s = r("Z0cm"),
        a = r("MMmD"),
        u = r("DSRE"),
        c = r("6sVZ"),
        f = r("c6wG"),
        l = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (null == e) return !0;
        if (
          a(e) &&
          (s(e) ||
            "string" == typeof e ||
            "function" == typeof e.splice ||
            u(e) ||
            f(e) ||
            o(e))
        )
          return !e.length;
        var t = i(e);
        if ("[object Map]" == t || "[object Set]" == t) return !e.size;
        if (c(e)) return !n(e).length;
        for (var r in e) if (l.call(e, r)) return !1;
        return !0;
      };
    },
    E2jh: function (e, t, r) {
      var n = r("2gN3"),
        i = (function () {
          var e = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || "");
          return e ? "Symbol(src)_1." + e : "";
        })();
      e.exports = function (e) {
        return !!i && i in e;
      };
    },
    EI00: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "f", function () {
          return c;
        }),
        r.d(t, "g", function () {
          return f;
        }),
        r.d(t, "h", function () {
          return l;
        }),
        r.d(t, "c", function () {
          return h;
        }),
        r.d(t, "e", function () {
          return y;
        }),
        r.d(t, "d", function () {
          return m;
        });
      var n = r("mrSG"),
        i = function () {
          var e = [],
            t = [],
            r = new Set(),
            a = function (r) {
              return (
                e.forEach(function (e) {
                  r.add(e.middleware, Object(n.__assign)({}, e));
                }),
                t.forEach(function (e) {
                  r.addRelativeTo(e.middleware, Object(n.__assign)({}, e));
                }),
                r
              );
            },
            u = function (e) {
              var t = [];
              return (
                e.before.forEach(function (e) {
                  0 === e.before.length && 0 === e.after.length
                    ? t.push(e)
                    : t.push.apply(t, Object(n.__spread)(u(e)));
                }),
                t.push(e),
                e.after.reverse().forEach(function (e) {
                  0 === e.before.length && 0 === e.after.length
                    ? t.push(e)
                    : t.push.apply(t, Object(n.__spread)(u(e)));
                }),
                t
              );
            },
            c = function () {
              var r,
                i = [],
                a = [],
                c = {};
              return (
                e.forEach(function (e) {
                  var t = Object(n.__assign)(Object(n.__assign)({}, e), {
                    before: [],
                    after: [],
                  });
                  t.name && (c[t.name] = t), i.push(t);
                }),
                t.forEach(function (e) {
                  var t = Object(n.__assign)(Object(n.__assign)({}, e), {
                    before: [],
                    after: [],
                  });
                  t.name && (c[t.name] = t), a.push(t);
                }),
                a.forEach(function (e) {
                  if (e.toMiddleware) {
                    var t = c[e.toMiddleware];
                    if (void 0 === t)
                      throw new Error(
                        e.toMiddleware +
                          " is not found when adding " +
                          (e.name || "anonymous") +
                          " middleware " +
                          e.relation +
                          " " +
                          e.toMiddleware
                      );
                    "after" === e.relation && t.after.push(e),
                      "before" === e.relation && t.before.push(e);
                  }
                }),
                ((r = i),
                r.sort(function (e, t) {
                  return (
                    o[t.step] - o[e.step] ||
                    s[t.priority || "normal"] - s[e.priority || "normal"]
                  );
                }))
                  .map(u)
                  .reduce(function (e, t) {
                    return e.push.apply(e, Object(n.__spread)(t)), e;
                  }, [])
                  .map(function (e) {
                    return e.middleware;
                  })
              );
            },
            f = {
              add: function (t, i) {
                void 0 === i && (i = {});
                var o = i.name,
                  s = i.override,
                  a = Object(n.__assign)(
                    { step: "initialize", priority: "normal", middleware: t },
                    i
                  );
                if (o) {
                  if (r.has(o)) {
                    if (!s)
                      throw new Error("Duplicate middleware name '" + o + "'");
                    var u = e.findIndex(function (e) {
                        return e.name === o;
                      }),
                      c = e[u];
                    if (c.step !== a.step || c.priority !== a.priority)
                      throw new Error(
                        '"' +
                          o +
                          '" middleware with ' +
                          c.priority +
                          " priority in " +
                          c.step +
                          " step cannot be overridden by same-name middleware with " +
                          a.priority +
                          " priority in " +
                          a.step +
                          " step."
                      );
                    e.splice(u, 1);
                  }
                  r.add(o);
                }
                e.push(a);
              },
              addRelativeTo: function (e, i) {
                var o = i.name,
                  s = i.override,
                  a = Object(n.__assign)({ middleware: e }, i);
                if (o) {
                  if (r.has(o)) {
                    if (!s)
                      throw new Error("Duplicate middleware name '" + o + "'");
                    var u = t.findIndex(function (e) {
                        return e.name === o;
                      }),
                      c = t[u];
                    if (
                      c.toMiddleware !== a.toMiddleware ||
                      c.relation !== a.relation
                    )
                      throw new Error(
                        '"' +
                          o +
                          '" middleware ' +
                          c.relation +
                          ' "' +
                          c.toMiddleware +
                          '" middleware cannot be overridden by same-name middleware ' +
                          a.relation +
                          ' "' +
                          a.toMiddleware +
                          '" middleware.'
                      );
                    t.splice(u, 1);
                  }
                  r.add(o);
                }
                t.push(a);
              },
              clone: function () {
                return a(i());
              },
              use: function (e) {
                e.applyToStack(f);
              },
              remove: function (n) {
                return "string" === typeof n
                  ? (function (n) {
                      var i = !1,
                        o = function (e) {
                          return (
                            !e.name ||
                            e.name !== n ||
                            ((i = !0), r.delete(n), !1)
                          );
                        };
                      return (e = e.filter(o)), (t = t.filter(o)), i;
                    })(n)
                  : (function (n) {
                      var i = !1,
                        o = function (e) {
                          return (
                            e.middleware !== n ||
                            ((i = !0), e.name && r.delete(e.name), !1)
                          );
                        };
                      return (e = e.filter(o)), (t = t.filter(o)), i;
                    })(n);
              },
              removeByTag: function (n) {
                var i = !1,
                  o = function (e) {
                    var t = e.tags,
                      o = e.name;
                    return (
                      !t || !t.includes(n) || (o && r.delete(o), (i = !0), !1)
                    );
                  };
                return (e = e.filter(o)), (t = t.filter(o)), i;
              },
              concat: function (e) {
                var t = a(i());
                return t.use(e), t;
              },
              applyToStack: a,
              resolve: function (e, t) {
                var r, i;
                try {
                  for (
                    var o = Object(n.__values)(c().reverse()), s = o.next();
                    !s.done;
                    s = o.next()
                  ) {
                    e = (0, s.value)(e, t);
                  }
                } catch (a) {
                  r = { error: a };
                } finally {
                  try {
                    s && !s.done && (i = o.return) && i.call(o);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                return e;
              },
            };
          return f;
        },
        o = {
          initialize: 5,
          serialize: 4,
          build: 3,
          finalizeRequest: 2,
          deserialize: 1,
        },
        s = { high: 3, normal: 2, low: 1 },
        a = (function () {
          function e(e) {
            (this.middlewareStack = i()), (this.config = e);
          }
          return (
            (e.prototype.send = function (e, t, r) {
              var n = "function" !== typeof t ? t : void 0,
                i = "function" === typeof t ? t : r,
                o = e.resolveMiddleware(this.middlewareStack, this.config, n);
              if (!i)
                return o(e).then(function (e) {
                  return e.output;
                });
              o(e)
                .then(
                  function (e) {
                    return i(null, e.output);
                  },
                  function (e) {
                    return i(e);
                  }
                )
                .catch(function () {});
            }),
            (e.prototype.destroy = function () {
              this.config.requestHandler.destroy &&
                this.config.requestHandler.destroy();
            }),
            e
          );
        })(),
        u = function () {
          this.middlewareStack = i();
        };
      function c(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16);
        });
      }
      var f = function (e) {
          return Array.isArray(e) ? e : [e];
        },
        l = function (e) {
          for (var t in e)
            e.hasOwnProperty(t) && void 0 !== e[t]["#text"]
              ? (e[t] = e[t]["#text"])
              : "object" === typeof e[t] && null !== e[t] && (e[t] = l(e[t]));
          return e;
        },
        d = function () {
          var e = Object.getPrototypeOf(this).constructor,
            t = Function.bind.apply(
              String,
              Object(n.__spread)([null], arguments)
            ),
            r = new t();
          return Object.setPrototypeOf(r, e.prototype), r;
        };
      (d.prototype = Object.create(String.prototype, {
        constructor: {
          value: d,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        Object.setPrototypeOf(d, String);
      var h = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.deserializeJSON = function () {
              return JSON.parse(e.prototype.toString.call(this));
            }),
            (t.prototype.toJSON = function () {
              return e.prototype.toString.call(this);
            }),
            (t.fromObject = function (e) {
              return e instanceof t
                ? e
                : new t(
                    e instanceof String || "string" === typeof e
                      ? e
                      : JSON.stringify(e)
                  );
            }),
            t
          );
        })(d),
        p = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        g = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
      function y(e) {
        var t = e.getUTCFullYear(),
          r = e.getUTCMonth(),
          n = e.getUTCDay(),
          i = e.getUTCDate(),
          o = e.getUTCHours(),
          s = e.getUTCMinutes(),
          a = e.getUTCSeconds();
        return (
          p[n] +
          ", " +
          (i < 10 ? "0" + i : "" + i) +
          " " +
          g[r] +
          " " +
          t +
          " " +
          (o < 10 ? "0" + o : "" + o) +
          ":" +
          (s < 10 ? "0" + s : "" + s) +
          ":" +
          (a < 10 ? "0" + a : "" + a) +
          " GMT"
        );
      }
      var m = "***SensitiveInformation***";
    },
    ETIr: function (e, t, r) {
      !(function (t, n) {
        var i;
        e.exports =
          ((i = r("Ib8C")),
          (function () {
            var e = i,
              t = e.lib.WordArray;
            function r(e, r, n) {
              for (var i = [], o = 0, s = 0; s < r; s++)
                if (s % 4) {
                  var a =
                    (n[e.charCodeAt(s - 1)] << ((s % 4) * 2)) |
                    (n[e.charCodeAt(s)] >>> (6 - (s % 4) * 2));
                  (i[o >>> 2] |= a << (24 - (o % 4) * 8)), o++;
                }
              return t.create(i, o);
            }
            e.enc.Base64 = {
              stringify: function (e) {
                var t = e.words,
                  r = e.sigBytes,
                  n = this._map;
                e.clamp();
                for (var i = [], o = 0; o < r; o += 3)
                  for (
                    var s =
                        (((t[o >>> 2] >>> (24 - (o % 4) * 8)) & 255) << 16) |
                        (((t[(o + 1) >>> 2] >>> (24 - ((o + 1) % 4) * 8)) &
                          255) <<
                          8) |
                        ((t[(o + 2) >>> 2] >>> (24 - ((o + 2) % 4) * 8)) & 255),
                      a = 0;
                    a < 4 && o + 0.75 * a < r;
                    a++
                  )
                    i.push(n.charAt((s >>> (6 * (3 - a))) & 63));
                var u = n.charAt(64);
                if (u) for (; i.length % 4; ) i.push(u);
                return i.join("");
              },
              parse: function (e) {
                var t = e.length,
                  n = this._map,
                  i = this._reverseMap;
                if (!i) {
                  i = this._reverseMap = [];
                  for (var o = 0; o < n.length; o++) i[n.charCodeAt(o)] = o;
                }
                var s = n.charAt(64);
                if (s) {
                  var a = e.indexOf(s);
                  -1 !== a && (t = a);
                }
                return r(e, t, i);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            };
          })(),
          i.enc.Base64);
      })();
    },
    EcEN: function (e, t, r) {
      var n = r("xDdU"),
        i = r("xk4V"),
        o = i;
      (o.v1 = n), (o.v4 = i), (e.exports = o);
    },
    Enk7: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return n;
      }),
        r.d(t, "a", function () {
          return o;
        });
      var n = (function () {
          function e(e) {
            (this.statusCode = e.statusCode),
              (this.headers = e.headers || {}),
              (this.body = e.body);
          }
          return (
            (e.isInstance = function (e) {
              if (!e) return !1;
              var t = e;
              return (
                "number" === typeof t.statusCode &&
                "object" === typeof t.headers
              );
            }),
            e
          );
        })(),
        i = r("mrSG"),
        o = (function () {
          function e(e) {
            (this.method = e.method || "GET"),
              (this.hostname = e.hostname || "localhost"),
              (this.port = e.port),
              (this.query = e.query || {}),
              (this.headers = e.headers || {}),
              (this.body = e.body),
              (this.protocol = e.protocol
                ? ":" !== e.protocol.substr(-1)
                  ? e.protocol + ":"
                  : e.protocol
                : "https:"),
              (this.path = e.path
                ? "/" !== e.path.charAt(0)
                  ? "/" + e.path
                  : e.path
                : "/");
          }
          return (
            (e.isInstance = function (e) {
              if (!e) return !1;
              var t = e;
              return (
                "method" in t &&
                "protocol" in t &&
                "hostname" in t &&
                "path" in t &&
                "object" === typeof t.query &&
                "object" === typeof t.headers
              );
            }),
            (e.prototype.clone = function () {
              var t,
                r = new e(
                  Object(i.__assign)(Object(i.__assign)({}, this), {
                    headers: Object(i.__assign)({}, this.headers),
                  })
                );
              return (
                r.query &&
                  (r.query =
                    ((t = r.query),
                    Object.keys(t).reduce(function (e, r) {
                      var n,
                        o = t[r];
                      return Object(i.__assign)(
                        Object(i.__assign)({}, e),
                        (((n = {})[r] = Array.isArray(o)
                          ? Object(i.__spread)(o)
                          : o),
                        n)
                      );
                    }, {}))),
                r
              );
            }),
            e
          );
        })();
    },
    ExA7: function (e, t) {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    "F+F2": function (e, t, r) {
      !(function (t, n) {
        var i;
        e.exports =
          ((i = r("Ib8C")),
          (function () {
            if ("function" == typeof ArrayBuffer) {
              var e = i.lib.WordArray,
                t = e.init;
              (e.init = function (e) {
                if (
                  (e instanceof ArrayBuffer && (e = new Uint8Array(e)),
                  (e instanceof Int8Array ||
                    ("undefined" !== typeof Uint8ClampedArray &&
                      e instanceof Uint8ClampedArray) ||
                    e instanceof Int16Array ||
                    e instanceof Uint16Array ||
                    e instanceof Int32Array ||
                    e instanceof Uint32Array ||
                    e instanceof Float32Array ||
                    e instanceof Float64Array) &&
                    (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)),
                  e instanceof Uint8Array)
                ) {
                  for (var r = e.byteLength, n = [], i = 0; i < r; i++)
                    n[i >>> 2] |= e[i] << (24 - (i % 4) * 8);
                  t.call(this, n, r);
                } else t.apply(this, arguments);
              }).prototype = e;
            }
          })(),
          i.lib.WordArray);
      })();
    },
    GDOE: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      var n = function (e) {
        return (
          ("function" === typeof ArrayBuffer && e instanceof ArrayBuffer) ||
          "[object ArrayBuffer]" === Object.prototype.toString.call(e)
        );
      };
    },
    GoyQ: function (e, t) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    Gytx: function (e, t) {
      e.exports = function (e, t, r, n) {
        var i = r ? r.call(n, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ("object" !== typeof e || !e || "object" !== typeof t || !t)
          return !1;
        var o = Object.keys(e),
          s = Object.keys(t);
        if (o.length !== s.length) return !1;
        for (
          var a = Object.prototype.hasOwnProperty.bind(t), u = 0;
          u < o.length;
          u++
        ) {
          var c = o[u];
          if (!a(c)) return !1;
          var f = e[c],
            l = t[c];
          if (
            !1 === (i = r ? r.call(n, f, l, c) : void 0) ||
            (void 0 === i && f !== l)
          )
            return !1;
        }
        return !0;
      };
    },
    H7XF: function (e, t, r) {
      "use strict";
      (t.byteLength = function (e) {
        var t = c(e),
          r = t[0],
          n = t[1];
        return (3 * (r + n)) / 4 - n;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            n = c(e),
            s = n[0],
            a = n[1],
            u = new o(
              (function (e, t, r) {
                return (3 * (t + r)) / 4 - r;
              })(0, s, a)
            ),
            f = 0,
            l = a > 0 ? s - 4 : s;
          for (r = 0; r < l; r += 4)
            (t =
              (i[e.charCodeAt(r)] << 18) |
              (i[e.charCodeAt(r + 1)] << 12) |
              (i[e.charCodeAt(r + 2)] << 6) |
              i[e.charCodeAt(r + 3)]),
              (u[f++] = (t >> 16) & 255),
              (u[f++] = (t >> 8) & 255),
              (u[f++] = 255 & t);
          2 === a &&
            ((t = (i[e.charCodeAt(r)] << 2) | (i[e.charCodeAt(r + 1)] >> 4)),
            (u[f++] = 255 & t));
          1 === a &&
            ((t =
              (i[e.charCodeAt(r)] << 10) |
              (i[e.charCodeAt(r + 1)] << 4) |
              (i[e.charCodeAt(r + 2)] >> 2)),
            (u[f++] = (t >> 8) & 255),
            (u[f++] = 255 & t));
          return u;
        }),
        (t.fromByteArray = function (e) {
          for (
            var t, r = e.length, i = r % 3, o = [], s = 16383, a = 0, u = r - i;
            a < u;
            a += s
          )
            o.push(f(e, a, a + s > u ? u : a + s));
          1 === i
            ? ((t = e[r - 1]), o.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
            : 2 === i &&
              ((t = (e[r - 2] << 8) + e[r - 1]),
              o.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="));
          return o.join("");
        });
      for (
        var n = [],
          i = [],
          o = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
          s =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0,
          u = s.length;
        a < u;
        ++a
      )
        (n[a] = s[a]), (i[s.charCodeAt(a)] = a);
      function c(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
      }
      function f(e, t, r) {
        for (var i, o, s = [], a = t; a < r; a += 3)
          (i =
            ((e[a] << 16) & 16711680) +
            ((e[a + 1] << 8) & 65280) +
            (255 & e[a + 2])),
            s.push(
              n[((o = i) >> 18) & 63] +
                n[(o >> 12) & 63] +
                n[(o >> 6) & 63] +
                n[63 & o]
            );
        return s.join("");
      }
      (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
    },
    HJKE: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "h", function () {
          return o;
        }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "e", function () {
          return a;
        }),
        r.d(t, "c", function () {
          return c;
        }),
        r.d(t, "i", function () {
          return f;
        }),
        r.d(t, "d", function () {
          return l;
        }),
        r.d(t, "g", function () {
          return n;
        }),
        r.d(t, "f", function () {
          return i;
        });
      var n = {
          xxl: 76,
          xl: 50,
          lg: 32,
          mdx: 28,
          md: 21,
          sm: 18,
          xsx: 14,
          xs: 13,
        },
        i = {
          xxl: 76,
          xl: 50,
          lg: 32,
          mdx: 28,
          md: 21,
          sm: 18,
          xsx: 14,
          xs: 13,
        },
        o = {
          one: "8px",
          two: 16,
          three: 24,
          four: 32,
          six: 45,
          eight: 64,
          sidePadding: 22,
          sidePaddingMobile: 15,
        },
        s = {
          largeDesktop: 1200,
          desktop: 1025,
          tablet: 767,
          phablet: 480,
          phone: 320,
        },
        a = {
          minHeight: "100%",
          maxWidth: "1440px",
          shorterWidth: "800px",
          modalWidth: "600px",
          footerHeight: "440px",
          footerHeightMobile: "215px",
        },
        u = {
          white: "#FFFFFF",
          black: "#000000",
          grey: "#CCCCCC",
          ghost: "#FAFAFA",
          snow: "#F9F9F9",
          vapor: "#F6F6F6",
          whiteSmoke: "#F5F5F5",
          silver: "#EFEFEF",
          smoke: "#EEEEEE",
          gainsboro: "#DDDDDD",
          iron: "#CCCCCC",
          base: "#AAAAAA",
          aluminum: "#999999",
          jumbo: "#888888",
          monsoon: "#777777",
          steel: "#666666",
          charcoal: "#555555",
          tuatara: "#444444",
          oil: "#333333",
          jet: "#222222",
          transparent: "rgba(255,255,255,0)",
          overlay: "rgba(0,0,0,0.5)",
          lightOverlay: "rgba(0,0,0,0.3)",
          lightText: "#6A6A6A",
          green: "#14FF00",
          purple: "#916AFF",
          yellow: "#FAFF00",
          red: "#FF0000",
          orange: "#FF5C00",
        },
        c = {
          hover: "all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s",
          default: "0.6s ease-in 0s",
          bezier: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        f = {
          borderRadius: "13px",
          buttonBorderRadius: "103px",
          boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, .25)",
          boxShadowHover: "0px 0px 16px 1px rgba(0, 0, 0, .3)",
          boxShadowLow: "0px 0px 4px 1px #00000020",
          gap: "35px",
          gapSmall: "26px",
        },
        l = {
          family: {
            body: "Helvetica Neue, Arial, sans-serif",
            heading: "Helvetica Neue, Arial, sans-serif",
            mono: "Roboto Mono, monospace",
          },
          weight: { regular: 400, medium: 500, bold: 700 },
          lineheights: { body: 1.2, heading: 1.1 },
        };
    },
    HOxn: function (e, t, r) {
      var n = r("Cwc5")(r("Kz5y"), "Promise");
      e.exports = n;
    },
    HzrR: function (e, t, r) {
      "use strict";
      (function (e) {
        r.d(t, "d", function () {
          return i;
        }),
          r.d(t, "h", function () {
            return o;
          }),
          r.d(t, "g", function () {
            return s;
          }),
          r.d(t, "c", function () {
            return a;
          }),
          r.d(t, "e", function () {
            return u;
          }),
          r.d(t, "f", function () {
            return f;
          }),
          r.d(t, "b", function () {
            return d;
          }),
          r.d(t, "a", function () {
            return y;
          });
        var n = [
            { type: "text/plain", ext: "txt" },
            { type: "text/html", ext: "html" },
            { type: "text/javascript", ext: "js" },
            { type: "text/css", ext: "css" },
            { type: "text/csv", ext: "csv" },
            { type: "text/yaml", ext: "yml" },
            { type: "text/yaml", ext: "yaml" },
            { type: "text/calendar", ext: "ics" },
            { type: "text/calendar", ext: "ical" },
            { type: "image/apng", ext: "apng" },
            { type: "image/bmp", ext: "bmp" },
            { type: "image/gif", ext: "gif" },
            { type: "image/x-icon", ext: "ico" },
            { type: "image/x-icon", ext: "cur" },
            { type: "image/jpeg", ext: "jpg" },
            { type: "image/jpeg", ext: "jpeg" },
            { type: "image/jpeg", ext: "jfif" },
            { type: "image/jpeg", ext: "pjp" },
            { type: "image/jpeg", ext: "pjpeg" },
            { type: "image/png", ext: "png" },
            { type: "image/svg+xml", ext: "svg" },
            { type: "image/tiff", ext: "tif" },
            { type: "image/tiff", ext: "tiff" },
            { type: "image/webp", ext: "webp" },
            { type: "application/json", ext: "json" },
            { type: "application/xml", ext: "xml" },
            { type: "application/x-sh", ext: "sh" },
            { type: "application/zip", ext: "zip" },
            { type: "application/x-rar-compressed", ext: "rar" },
            { type: "application/x-tar", ext: "tar" },
            { type: "application/x-bzip", ext: "bz" },
            { type: "application/x-bzip2", ext: "bz2" },
            { type: "application/pdf", ext: "pdf" },
            { type: "application/java-archive", ext: "jar" },
            { type: "application/msword", ext: "doc" },
            { type: "application/vnd.ms-excel", ext: "xls" },
            { type: "application/vnd.ms-excel", ext: "xlsx" },
            { type: "message/rfc822", ext: "eml" },
          ],
          i = function (e) {
            return void 0 === e && (e = {}), 0 === Object.keys(e).length;
          },
          o = function (e, t, r) {
            if (!e || !e.sort) return !1;
            var n = r && "desc" === r ? -1 : 1;
            return (
              e.sort(function (e, r) {
                var i = e[t],
                  o = r[t];
                return "undefined" === typeof o
                  ? "undefined" === typeof i
                    ? 0
                    : 1 * n
                  : "undefined" === typeof i || i < o
                  ? -1 * n
                  : i > o
                  ? 1 * n
                  : 0;
              }),
              !0
            );
          },
          s = function (e, t) {
            var r = Object.assign({}, e);
            return (
              t &&
                ("string" === typeof t
                  ? delete r[t]
                  : t.forEach(function (e) {
                      delete r[e];
                    })),
              r
            );
          },
          a = function (e, t) {
            void 0 === t && (t = "application/octet-stream");
            var r = e.toLowerCase(),
              i = n.filter(function (e) {
                return r.endsWith("." + e.ext);
              });
            return i.length > 0 ? i[0].type : t;
          },
          u = function (e) {
            var t = e.toLowerCase();
            return (
              !!t.startsWith("text/") ||
              "application/json" === t ||
              "application/xml" === t ||
              "application/sh" === t
            );
          },
          c = function () {
            for (
              var e = "",
                t =
                  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                r = 32;
              r > 0;
              r -= 1
            )
              e += t[Math.floor(Math.random() * t.length)];
            return e;
          },
          f = function (e) {
            if (e.isResolved) return e;
            var t = !0,
              r = !1,
              n = !1,
              i = e.then(
                function (e) {
                  return (n = !0), (t = !1), e;
                },
                function (e) {
                  throw ((r = !0), (t = !1), e);
                }
              );
            return (
              (i.isFullfilled = function () {
                return n;
              }),
              (i.isPending = function () {
                return t;
              }),
              (i.isRejected = function () {
                return r;
              }),
              i
            );
          },
          l = function () {
            if ("undefined" === typeof self) return !1;
            var e = self;
            return (
              "undefined" !== typeof e.WorkerGlobalScope &&
              self instanceof e.WorkerGlobalScope
            );
          },
          d = function () {
            return {
              isBrowser:
                "undefined" !== typeof window &&
                "undefined" !== typeof window.document,
              isNode:
                "undefined" !== typeof e &&
                null != e.versions &&
                null != e.versions.node,
            };
          },
          h = function (e, t, r) {
            if ((void 0 === t && (t = []), void 0 === r && (r = []), !g(e)))
              return e;
            var n = {};
            for (var i in e) {
              if (e.hasOwnProperty(i))
                n[t.includes(i) ? i : i[0].toLowerCase() + i.slice(1)] =
                  r.includes(i) ? e[i] : h(e[i], t, r);
            }
            return n;
          },
          p = function (e, t, r) {
            if ((void 0 === t && (t = []), void 0 === r && (r = []), !g(e)))
              return e;
            var n = {};
            for (var i in e) {
              if (e.hasOwnProperty(i))
                n[t.includes(i) ? i : i[0].toUpperCase() + i.slice(1)] =
                  r.includes(i) ? e[i] : p(e[i], t, r);
            }
            return n;
          },
          g = function (e) {
            return (
              e instanceof Object &&
              !(e instanceof Array) &&
              !(e instanceof Function) &&
              !(e instanceof Number) &&
              !(e instanceof String) &&
              !(e instanceof Boolean)
            );
          },
          y = (function () {
            function e() {}
            return (
              (e.isEmpty = i),
              (e.sortByField = o),
              (e.objectLessAttributes = s),
              (e.filenameToContentType = a),
              (e.isTextFile = u),
              (e.generateRandomString = c),
              (e.makeQuerablePromise = f),
              (e.isWebWorker = l),
              (e.browserOrNode = d),
              (e.transferKeyToLowerCase = h),
              (e.transferKeyToUpperCase = p),
              (e.isStrictObject = g),
              e
            );
          })();
      }).call(this, r("8oxB"));
    },
    I2ZF: function (e, t) {
      for (var r = [], n = 0; n < 256; ++n)
        r[n] = (n + 256).toString(16).substr(1);
      e.exports = function (e, t) {
        var n = t || 0,
          i = r;
        return [
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          "-",
          i[e[n++]],
          i[e[n++]],
          "-",
          i[e[n++]],
          i[e[n++]],
          "-",
          i[e[n++]],
          i[e[n++]],
          "-",
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
        ].join("");
      };
    },
    Ib8C: function (e, t, r) {
      (function (t) {
        e.exports = (function () {
          var e =
            e ||
            (function (e, n) {
              var i;
              if (
                ("undefined" !== typeof window &&
                  window.crypto &&
                  (i = window.crypto),
                "undefined" !== typeof self && self.crypto && (i = self.crypto),
                "undefined" !== typeof globalThis &&
                  globalThis.crypto &&
                  (i = globalThis.crypto),
                !i &&
                  "undefined" !== typeof window &&
                  window.msCrypto &&
                  (i = window.msCrypto),
                !i && "undefined" !== typeof t && t.crypto && (i = t.crypto),
                !i)
              )
                try {
                  i = r(1);
                } catch (m) {}
              var o = function () {
                  if (i) {
                    if ("function" === typeof i.getRandomValues)
                      try {
                        return i.getRandomValues(new Uint32Array(1))[0];
                      } catch (m) {}
                    if ("function" === typeof i.randomBytes)
                      try {
                        return i.randomBytes(4).readInt32LE();
                      } catch (m) {}
                  }
                  throw new Error(
                    "Native crypto module could not be used to get secure random number."
                  );
                },
                s =
                  Object.create ||
                  (function () {
                    function e() {}
                    return function (t) {
                      var r;
                      return (
                        (e.prototype = t),
                        (r = new e()),
                        (e.prototype = null),
                        r
                      );
                    };
                  })(),
                a = {},
                u = (a.lib = {}),
                c = (u.Base = {
                  extend: function (e) {
                    var t = s(this);
                    return (
                      e && t.mixIn(e),
                      (t.hasOwnProperty("init") && this.init !== t.init) ||
                        (t.init = function () {
                          t.$super.init.apply(this, arguments);
                        }),
                      (t.init.prototype = t),
                      (t.$super = this),
                      t
                    );
                  },
                  create: function () {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e;
                  },
                  init: function () {},
                  mixIn: function (e) {
                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") &&
                      (this.toString = e.toString);
                  },
                  clone: function () {
                    return this.init.prototype.extend(this);
                  },
                }),
                f = (u.WordArray = c.extend({
                  init: function (e, t) {
                    (e = this.words = e || []),
                      (this.sigBytes = t != n ? t : 4 * e.length);
                  },
                  toString: function (e) {
                    return (e || d).stringify(this);
                  },
                  concat: function (e) {
                    var t = this.words,
                      r = e.words,
                      n = this.sigBytes,
                      i = e.sigBytes;
                    if ((this.clamp(), n % 4))
                      for (var o = 0; o < i; o++) {
                        var s = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                        t[(n + o) >>> 2] |= s << (24 - ((n + o) % 4) * 8);
                      }
                    else
                      for (var a = 0; a < i; a += 4)
                        t[(n + a) >>> 2] = r[a >>> 2];
                    return (this.sigBytes += i), this;
                  },
                  clamp: function () {
                    var t = this.words,
                      r = this.sigBytes;
                    (t[r >>> 2] &= 4294967295 << (32 - (r % 4) * 8)),
                      (t.length = e.ceil(r / 4));
                  },
                  clone: function () {
                    var e = c.clone.call(this);
                    return (e.words = this.words.slice(0)), e;
                  },
                  random: function (e) {
                    for (var t = [], r = 0; r < e; r += 4) t.push(o());
                    return new f.init(t, e);
                  },
                })),
                l = (a.enc = {}),
                d = (l.Hex = {
                  stringify: function (e) {
                    for (
                      var t = e.words, r = e.sigBytes, n = [], i = 0;
                      i < r;
                      i++
                    ) {
                      var o = (t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                      n.push((o >>> 4).toString(16)),
                        n.push((15 & o).toString(16));
                    }
                    return n.join("");
                  },
                  parse: function (e) {
                    for (var t = e.length, r = [], n = 0; n < t; n += 2)
                      r[n >>> 3] |=
                        parseInt(e.substr(n, 2), 16) << (24 - (n % 8) * 4);
                    return new f.init(r, t / 2);
                  },
                }),
                h = (l.Latin1 = {
                  stringify: function (e) {
                    for (
                      var t = e.words, r = e.sigBytes, n = [], i = 0;
                      i < r;
                      i++
                    ) {
                      var o = (t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                      n.push(String.fromCharCode(o));
                    }
                    return n.join("");
                  },
                  parse: function (e) {
                    for (var t = e.length, r = [], n = 0; n < t; n++)
                      r[n >>> 2] |=
                        (255 & e.charCodeAt(n)) << (24 - (n % 4) * 8);
                    return new f.init(r, t);
                  },
                }),
                p = (l.Utf8 = {
                  stringify: function (e) {
                    try {
                      return decodeURIComponent(escape(h.stringify(e)));
                    } catch (t) {
                      throw new Error("Malformed UTF-8 data");
                    }
                  },
                  parse: function (e) {
                    return h.parse(unescape(encodeURIComponent(e)));
                  },
                }),
                g = (u.BufferedBlockAlgorithm = c.extend({
                  reset: function () {
                    (this._data = new f.init()), (this._nDataBytes = 0);
                  },
                  _append: function (e) {
                    "string" == typeof e && (e = p.parse(e)),
                      this._data.concat(e),
                      (this._nDataBytes += e.sigBytes);
                  },
                  _process: function (t) {
                    var r,
                      n = this._data,
                      i = n.words,
                      o = n.sigBytes,
                      s = this.blockSize,
                      a = o / (4 * s),
                      u =
                        (a = t
                          ? e.ceil(a)
                          : e.max((0 | a) - this._minBufferSize, 0)) * s,
                      c = e.min(4 * u, o);
                    if (u) {
                      for (var l = 0; l < u; l += s) this._doProcessBlock(i, l);
                      (r = i.splice(0, u)), (n.sigBytes -= c);
                    }
                    return new f.init(r, c);
                  },
                  clone: function () {
                    var e = c.clone.call(this);
                    return (e._data = this._data.clone()), e;
                  },
                  _minBufferSize: 0,
                })),
                y =
                  ((u.Hasher = g.extend({
                    cfg: c.extend(),
                    init: function (e) {
                      (this.cfg = this.cfg.extend(e)), this.reset();
                    },
                    reset: function () {
                      g.reset.call(this), this._doReset();
                    },
                    update: function (e) {
                      return this._append(e), this._process(), this;
                    },
                    finalize: function (e) {
                      return e && this._append(e), this._doFinalize();
                    },
                    blockSize: 16,
                    _createHelper: function (e) {
                      return function (t, r) {
                        return new e.init(r).finalize(t);
                      };
                    },
                    _createHmacHelper: function (e) {
                      return function (t, r) {
                        return new y.HMAC.init(e, r).finalize(t);
                      };
                    },
                  })),
                  (a.algo = {}));
              return a;
            })(Math);
          return e;
        })();
      }).call(this, r("ntbh"));
    },
    J2eM: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      var n = function (e) {
        return function () {
          return Promise.reject(e);
        };
      };
    },
    JBVX: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    JEbH: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    JTzB: function (e, t, r) {
      var n = r("NykK"),
        i = r("ExA7");
      e.exports = function (e) {
        return i(e) && "[object Arguments]" == n(e);
      };
    },
    KfNM: function (e, t) {
      var r = Object.prototype.toString;
      e.exports = function (e) {
        return r.call(e);
      };
    },
    Kz5y: function (e, t, r) {
      var n = r("WFqU"),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = n || i || Function("return this")();
      e.exports = o;
    },
    LUnR: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return u;
        });
      var n = r("mrSG"),
        i = r("Enk7"),
        o = r("3tHY");
      var s = (function () {
          function e(e) {
            var t = (void 0 === e ? {} : e).requestTimeout;
            this.requestTimeout = t;
          }
          return (
            (e.prototype.destroy = function () {}),
            (e.prototype.handle = function (e, t) {
              var r = (void 0 === t ? {} : t).abortSignal,
                s = this.requestTimeout;
              if (null === r || void 0 === r ? void 0 : r.aborted) {
                var a = new Error("Request aborted");
                return (a.name = "AbortError"), Promise.reject(a);
              }
              var u = e.path;
              if (e.query) {
                var c = Object(o.a)(e.query);
                c && (u += "?" + c);
              }
              var f = e.port,
                l = e.method,
                d = e.protocol + "//" + e.hostname + (f ? ":" + f : "") + u,
                h = {
                  body: "GET" === l || "HEAD" === l ? void 0 : e.body,
                  headers: new Headers(e.headers),
                  method: l,
                };
              "undefined" !== typeof AbortController && (h.signal = r);
              var p,
                g = new Request(d, h),
                y = [
                  fetch(g).then(function (e) {
                    var t,
                      r,
                      o = e.headers,
                      s = {};
                    try {
                      for (
                        var a = Object(n.__values)(o.entries()), u = a.next();
                        !u.done;
                        u = a.next()
                      ) {
                        var c = u.value;
                        s[c[0]] = c[1];
                      }
                    } catch (f) {
                      t = { error: f };
                    } finally {
                      try {
                        u && !u.done && (r = a.return) && r.call(a);
                      } finally {
                        if (t) throw t.error;
                      }
                    }
                    return void 0 !== e.body
                      ? {
                          response: new i.b({
                            headers: s,
                            statusCode: e.status,
                            body: e.body,
                          }),
                        }
                      : e.blob().then(function (t) {
                          return {
                            response: new i.b({
                              headers: s,
                              statusCode: e.status,
                              body: t,
                            }),
                          };
                        });
                  }),
                  ((p = s),
                  void 0 === p && (p = 0),
                  new Promise(function (e, t) {
                    p &&
                      setTimeout(function () {
                        var e = new Error(
                          "Request did not complete within " + p + " ms"
                        );
                        (e.name = "TimeoutError"), t(e);
                      }, p);
                  })),
                ];
              return (
                r &&
                  y.push(
                    new Promise(function (e, t) {
                      r.onabort = function () {
                        var e = new Error("Request aborted");
                        (e.name = "AbortError"), t(e);
                      };
                    })
                  ),
                Promise.race(y)
              );
            }),
            e
          );
        })(),
        a = r("S3Uu"),
        u = function (e) {
          return "function" === typeof Blob && e instanceof Blob
            ? (function (e) {
                return Object(n.__awaiter)(this, void 0, void 0, function () {
                  var t, r;
                  return Object(n.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, c(e)];
                      case 1:
                        return (
                          (t = n.sent()),
                          (r = Object(a.a)(t)),
                          [2, new Uint8Array(r)]
                        );
                    }
                  });
                });
              })(e)
            : (function (e) {
                return Object(n.__awaiter)(this, void 0, void 0, function () {
                  var t, r, i, o, s, a, u;
                  return Object(n.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        (t = new Uint8Array(0)),
                          (r = e.getReader()),
                          (i = !1),
                          (n.label = 1);
                      case 1:
                        return i ? [3, 3] : [4, r.read()];
                      case 2:
                        return (
                          (o = n.sent()),
                          (s = o.done),
                          (a = o.value) &&
                            ((u = t),
                            (t = new Uint8Array(u.length + a.length)).set(u),
                            t.set(a, u.length)),
                          (i = s),
                          [3, 1]
                        );
                      case 3:
                        return [2, t];
                    }
                  });
                });
              })(e);
        };
      function c(e) {
        return new Promise(function (t, r) {
          var n = new FileReader();
          (n.onloadend = function () {
            var e;
            if (2 !== n.readyState)
              return r(new Error("Reader aborted too early"));
            var i = null !== (e = n.result) && void 0 !== e ? e : "",
              o = i.indexOf(","),
              s = o > -1 ? o + 1 : i.length;
            t(i.substring(s));
          }),
            (n.onabort = function () {
              return r(new Error("Read aborted"));
            }),
            (n.onerror = function () {
              return r(n.error);
            }),
            n.readAsDataURL(e);
        });
      }
    },
    LVIV: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    LY0y: function (e, t) {
      (function (t) {
        e.exports = (function () {
          var e = {
              880: function (e) {
                e.exports = function (e) {
                  return (
                    e.webpackPolyfill ||
                      ((e.deprecate = function () {}),
                      (e.paths = []),
                      e.children || (e.children = []),
                      Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                          return e.l;
                        },
                      }),
                      Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                          return e.i;
                        },
                      }),
                      (e.webpackPolyfill = 1)),
                    e
                  );
                };
              },
            },
            r = {};
          function n(t) {
            if (r[t]) return r[t].exports;
            var i = (r[t] = { exports: {} }),
              o = !0;
            try {
              e[t](i, i.exports, n), (o = !1);
            } finally {
              o && delete r[t];
            }
            return i.exports;
          }
          return (n.ab = t + "/"), n(880);
        })();
      }).call(this, "/");
    },
    M39V: function (e, t, r) {
      e.exports = (function (e) {
        var t = {};
        function r(n) {
          if (t[n]) return t[n].exports;
          var i = (t[n] = { i: n, l: !1, exports: {} });
          return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
        }
        return (
          (r.m = e),
          (r.c = t),
          (r.d = function (e, t, n) {
            r.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: n });
          }),
          (r.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
              (r.r(n),
              Object.defineProperty(n, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var i in e)
                r.d(
                  n,
                  i,
                  function (t) {
                    return e[t];
                  }.bind(null, i)
                );
            return n;
          }),
          (r.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return r.d(t, "a", t), t;
          }),
          (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (r.p = ""),
          r((r.s = 90))
        );
      })({
        17: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n = r(18),
            i = (function () {
              function e() {}
              return (
                (e.getFirstMatch = function (e, t) {
                  var r = t.match(e);
                  return (r && r.length > 0 && r[1]) || "";
                }),
                (e.getSecondMatch = function (e, t) {
                  var r = t.match(e);
                  return (r && r.length > 1 && r[2]) || "";
                }),
                (e.matchAndReturnConst = function (e, t, r) {
                  if (e.test(t)) return r;
                }),
                (e.getWindowsVersionName = function (e) {
                  switch (e) {
                    case "NT":
                      return "NT";
                    case "XP":
                      return "XP";
                    case "NT 5.0":
                      return "2000";
                    case "NT 5.1":
                      return "XP";
                    case "NT 5.2":
                      return "2003";
                    case "NT 6.0":
                      return "Vista";
                    case "NT 6.1":
                      return "7";
                    case "NT 6.2":
                      return "8";
                    case "NT 6.3":
                      return "8.1";
                    case "NT 10.0":
                      return "10";
                    default:
                      return;
                  }
                }),
                (e.getMacOSVersionName = function (e) {
                  var t = e
                    .split(".")
                    .splice(0, 2)
                    .map(function (e) {
                      return parseInt(e, 10) || 0;
                    });
                  if ((t.push(0), 10 === t[0]))
                    switch (t[1]) {
                      case 5:
                        return "Leopard";
                      case 6:
                        return "Snow Leopard";
                      case 7:
                        return "Lion";
                      case 8:
                        return "Mountain Lion";
                      case 9:
                        return "Mavericks";
                      case 10:
                        return "Yosemite";
                      case 11:
                        return "El Capitan";
                      case 12:
                        return "Sierra";
                      case 13:
                        return "High Sierra";
                      case 14:
                        return "Mojave";
                      case 15:
                        return "Catalina";
                      default:
                        return;
                    }
                }),
                (e.getAndroidVersionName = function (e) {
                  var t = e
                    .split(".")
                    .splice(0, 2)
                    .map(function (e) {
                      return parseInt(e, 10) || 0;
                    });
                  if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                    return 1 === t[0] && t[1] < 6
                      ? "Cupcake"
                      : 1 === t[0] && t[1] >= 6
                      ? "Donut"
                      : 2 === t[0] && t[1] < 2
                      ? "Eclair"
                      : 2 === t[0] && 2 === t[1]
                      ? "Froyo"
                      : 2 === t[0] && t[1] > 2
                      ? "Gingerbread"
                      : 3 === t[0]
                      ? "Honeycomb"
                      : 4 === t[0] && t[1] < 1
                      ? "Ice Cream Sandwich"
                      : 4 === t[0] && t[1] < 4
                      ? "Jelly Bean"
                      : 4 === t[0] && t[1] >= 4
                      ? "KitKat"
                      : 5 === t[0]
                      ? "Lollipop"
                      : 6 === t[0]
                      ? "Marshmallow"
                      : 7 === t[0]
                      ? "Nougat"
                      : 8 === t[0]
                      ? "Oreo"
                      : 9 === t[0]
                      ? "Pie"
                      : void 0;
                }),
                (e.getVersionPrecision = function (e) {
                  return e.split(".").length;
                }),
                (e.compareVersions = function (t, r, n) {
                  void 0 === n && (n = !1);
                  var i = e.getVersionPrecision(t),
                    o = e.getVersionPrecision(r),
                    s = Math.max(i, o),
                    a = 0,
                    u = e.map([t, r], function (t) {
                      var r = s - e.getVersionPrecision(t),
                        n = t + new Array(r + 1).join(".0");
                      return e
                        .map(n.split("."), function (e) {
                          return new Array(20 - e.length).join("0") + e;
                        })
                        .reverse();
                    });
                  for (n && (a = s - Math.min(i, o)), s -= 1; s >= a; ) {
                    if (u[0][s] > u[1][s]) return 1;
                    if (u[0][s] === u[1][s]) {
                      if (s === a) return 0;
                      s -= 1;
                    } else if (u[0][s] < u[1][s]) return -1;
                  }
                }),
                (e.map = function (e, t) {
                  var r,
                    n = [];
                  if (Array.prototype.map)
                    return Array.prototype.map.call(e, t);
                  for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                  return n;
                }),
                (e.find = function (e, t) {
                  var r, n;
                  if (Array.prototype.find)
                    return Array.prototype.find.call(e, t);
                  for (r = 0, n = e.length; r < n; r += 1) {
                    var i = e[r];
                    if (t(i, r)) return i;
                  }
                }),
                (e.assign = function (e) {
                  for (
                    var t,
                      r,
                      n = e,
                      i = arguments.length,
                      o = new Array(i > 1 ? i - 1 : 0),
                      s = 1;
                    s < i;
                    s++
                  )
                    o[s - 1] = arguments[s];
                  if (Object.assign)
                    return Object.assign.apply(Object, [e].concat(o));
                  var a = function () {
                    var e = o[t];
                    "object" == typeof e &&
                      null !== e &&
                      Object.keys(e).forEach(function (t) {
                        n[t] = e[t];
                      });
                  };
                  for (t = 0, r = o.length; t < r; t += 1) a();
                  return e;
                }),
                (e.getBrowserAlias = function (e) {
                  return n.BROWSER_ALIASES_MAP[e];
                }),
                (e.getBrowserTypeByAlias = function (e) {
                  return n.BROWSER_MAP[e] || "";
                }),
                e
              );
            })();
          (t.default = i), (e.exports = t.default);
        },
        18: function (e, t, r) {
          "use strict";
          (t.__esModule = !0),
            (t.ENGINE_MAP =
              t.OS_MAP =
              t.PLATFORMS_MAP =
              t.BROWSER_MAP =
              t.BROWSER_ALIASES_MAP =
                void 0),
            (t.BROWSER_ALIASES_MAP = {
              "Amazon Silk": "amazon_silk",
              "Android Browser": "android",
              Bada: "bada",
              BlackBerry: "blackberry",
              Chrome: "chrome",
              Chromium: "chromium",
              Electron: "electron",
              Epiphany: "epiphany",
              Firefox: "firefox",
              Focus: "focus",
              Generic: "generic",
              "Google Search": "google_search",
              Googlebot: "googlebot",
              "Internet Explorer": "ie",
              "K-Meleon": "k_meleon",
              Maxthon: "maxthon",
              "Microsoft Edge": "edge",
              "MZ Browser": "mz",
              "NAVER Whale Browser": "naver",
              Opera: "opera",
              "Opera Coast": "opera_coast",
              PhantomJS: "phantomjs",
              Puffin: "puffin",
              QupZilla: "qupzilla",
              QQ: "qq",
              QQLite: "qqlite",
              Safari: "safari",
              Sailfish: "sailfish",
              "Samsung Internet for Android": "samsung_internet",
              SeaMonkey: "seamonkey",
              Sleipnir: "sleipnir",
              Swing: "swing",
              Tizen: "tizen",
              "UC Browser": "uc",
              Vivaldi: "vivaldi",
              "WebOS Browser": "webos",
              WeChat: "wechat",
              "Yandex Browser": "yandex",
              Roku: "roku",
            }),
            (t.BROWSER_MAP = {
              amazon_silk: "Amazon Silk",
              android: "Android Browser",
              bada: "Bada",
              blackberry: "BlackBerry",
              chrome: "Chrome",
              chromium: "Chromium",
              electron: "Electron",
              epiphany: "Epiphany",
              firefox: "Firefox",
              focus: "Focus",
              generic: "Generic",
              googlebot: "Googlebot",
              google_search: "Google Search",
              ie: "Internet Explorer",
              k_meleon: "K-Meleon",
              maxthon: "Maxthon",
              edge: "Microsoft Edge",
              mz: "MZ Browser",
              naver: "NAVER Whale Browser",
              opera: "Opera",
              opera_coast: "Opera Coast",
              phantomjs: "PhantomJS",
              puffin: "Puffin",
              qupzilla: "QupZilla",
              qq: "QQ Browser",
              qqlite: "QQ Browser Lite",
              safari: "Safari",
              sailfish: "Sailfish",
              samsung_internet: "Samsung Internet for Android",
              seamonkey: "SeaMonkey",
              sleipnir: "Sleipnir",
              swing: "Swing",
              tizen: "Tizen",
              uc: "UC Browser",
              vivaldi: "Vivaldi",
              webos: "WebOS Browser",
              wechat: "WeChat",
              yandex: "Yandex Browser",
            }),
            (t.PLATFORMS_MAP = {
              tablet: "tablet",
              mobile: "mobile",
              desktop: "desktop",
              tv: "tv",
            }),
            (t.OS_MAP = {
              WindowsPhone: "Windows Phone",
              Windows: "Windows",
              MacOS: "macOS",
              iOS: "iOS",
              Android: "Android",
              WebOS: "WebOS",
              BlackBerry: "BlackBerry",
              Bada: "Bada",
              Tizen: "Tizen",
              Linux: "Linux",
              ChromeOS: "Chrome OS",
              PlayStation4: "PlayStation 4",
              Roku: "Roku",
            }),
            (t.ENGINE_MAP = {
              EdgeHTML: "EdgeHTML",
              Blink: "Blink",
              Trident: "Trident",
              Presto: "Presto",
              Gecko: "Gecko",
              WebKit: "WebKit",
            });
        },
        90: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n,
            i = (n = r(91)) && n.__esModule ? n : { default: n },
            o = r(18);
          function s(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          var a = (function () {
            function e() {}
            var t, r, n;
            return (
              (e.getParser = function (e, t) {
                if ((void 0 === t && (t = !1), "string" != typeof e))
                  throw new Error("UserAgent should be a string");
                return new i.default(e, t);
              }),
              (e.parse = function (e) {
                return new i.default(e).getResult();
              }),
              (t = e),
              (n = [
                {
                  key: "BROWSER_MAP",
                  get: function () {
                    return o.BROWSER_MAP;
                  },
                },
                {
                  key: "ENGINE_MAP",
                  get: function () {
                    return o.ENGINE_MAP;
                  },
                },
                {
                  key: "OS_MAP",
                  get: function () {
                    return o.OS_MAP;
                  },
                },
                {
                  key: "PLATFORMS_MAP",
                  get: function () {
                    return o.PLATFORMS_MAP;
                  },
                },
              ]),
              (r = null) && s(t.prototype, r),
              n && s(t, n),
              e
            );
          })();
          (t.default = a), (e.exports = t.default);
        },
        91: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n = u(r(92)),
            i = u(r(93)),
            o = u(r(94)),
            s = u(r(95)),
            a = u(r(17));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var c = (function () {
            function e(e, t) {
              if ((void 0 === t && (t = !1), null == e || "" === e))
                throw new Error("UserAgent parameter can't be empty");
              (this._ua = e),
                (this.parsedResult = {}),
                !0 !== t && this.parse();
            }
            var t = e.prototype;
            return (
              (t.getUA = function () {
                return this._ua;
              }),
              (t.test = function (e) {
                return e.test(this._ua);
              }),
              (t.parseBrowser = function () {
                var e = this;
                this.parsedResult.browser = {};
                var t = a.default.find(n.default, function (t) {
                  if ("function" == typeof t.test) return t.test(e);
                  if (t.test instanceof Array)
                    return t.test.some(function (t) {
                      return e.test(t);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return (
                  t && (this.parsedResult.browser = t.describe(this.getUA())),
                  this.parsedResult.browser
                );
              }),
              (t.getBrowser = function () {
                return this.parsedResult.browser
                  ? this.parsedResult.browser
                  : this.parseBrowser();
              }),
              (t.getBrowserName = function (e) {
                return e
                  ? String(this.getBrowser().name).toLowerCase() || ""
                  : this.getBrowser().name || "";
              }),
              (t.getBrowserVersion = function () {
                return this.getBrowser().version;
              }),
              (t.getOS = function () {
                return this.parsedResult.os
                  ? this.parsedResult.os
                  : this.parseOS();
              }),
              (t.parseOS = function () {
                var e = this;
                this.parsedResult.os = {};
                var t = a.default.find(i.default, function (t) {
                  if ("function" == typeof t.test) return t.test(e);
                  if (t.test instanceof Array)
                    return t.test.some(function (t) {
                      return e.test(t);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return (
                  t && (this.parsedResult.os = t.describe(this.getUA())),
                  this.parsedResult.os
                );
              }),
              (t.getOSName = function (e) {
                var t = this.getOS().name;
                return e ? String(t).toLowerCase() || "" : t || "";
              }),
              (t.getOSVersion = function () {
                return this.getOS().version;
              }),
              (t.getPlatform = function () {
                return this.parsedResult.platform
                  ? this.parsedResult.platform
                  : this.parsePlatform();
              }),
              (t.getPlatformType = function (e) {
                void 0 === e && (e = !1);
                var t = this.getPlatform().type;
                return e ? String(t).toLowerCase() || "" : t || "";
              }),
              (t.parsePlatform = function () {
                var e = this;
                this.parsedResult.platform = {};
                var t = a.default.find(o.default, function (t) {
                  if ("function" == typeof t.test) return t.test(e);
                  if (t.test instanceof Array)
                    return t.test.some(function (t) {
                      return e.test(t);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return (
                  t && (this.parsedResult.platform = t.describe(this.getUA())),
                  this.parsedResult.platform
                );
              }),
              (t.getEngine = function () {
                return this.parsedResult.engine
                  ? this.parsedResult.engine
                  : this.parseEngine();
              }),
              (t.getEngineName = function (e) {
                return e
                  ? String(this.getEngine().name).toLowerCase() || ""
                  : this.getEngine().name || "";
              }),
              (t.parseEngine = function () {
                var e = this;
                this.parsedResult.engine = {};
                var t = a.default.find(s.default, function (t) {
                  if ("function" == typeof t.test) return t.test(e);
                  if (t.test instanceof Array)
                    return t.test.some(function (t) {
                      return e.test(t);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return (
                  t && (this.parsedResult.engine = t.describe(this.getUA())),
                  this.parsedResult.engine
                );
              }),
              (t.parse = function () {
                return (
                  this.parseBrowser(),
                  this.parseOS(),
                  this.parsePlatform(),
                  this.parseEngine(),
                  this
                );
              }),
              (t.getResult = function () {
                return a.default.assign({}, this.parsedResult);
              }),
              (t.satisfies = function (e) {
                var t = this,
                  r = {},
                  n = 0,
                  i = {},
                  o = 0;
                if (
                  (Object.keys(e).forEach(function (t) {
                    var s = e[t];
                    "string" == typeof s
                      ? ((i[t] = s), (o += 1))
                      : "object" == typeof s && ((r[t] = s), (n += 1));
                  }),
                  n > 0)
                ) {
                  var s = Object.keys(r),
                    u = a.default.find(s, function (e) {
                      return t.isOS(e);
                    });
                  if (u) {
                    var c = this.satisfies(r[u]);
                    if (void 0 !== c) return c;
                  }
                  var f = a.default.find(s, function (e) {
                    return t.isPlatform(e);
                  });
                  if (f) {
                    var l = this.satisfies(r[f]);
                    if (void 0 !== l) return l;
                  }
                }
                if (o > 0) {
                  var d = Object.keys(i),
                    h = a.default.find(d, function (e) {
                      return t.isBrowser(e, !0);
                    });
                  if (void 0 !== h) return this.compareVersion(i[h]);
                }
              }),
              (t.isBrowser = function (e, t) {
                void 0 === t && (t = !1);
                var r = this.getBrowserName().toLowerCase(),
                  n = e.toLowerCase(),
                  i = a.default.getBrowserTypeByAlias(n);
                return t && i && (n = i.toLowerCase()), n === r;
              }),
              (t.compareVersion = function (e) {
                var t = [0],
                  r = e,
                  n = !1,
                  i = this.getBrowserVersion();
                if ("string" == typeof i)
                  return (
                    ">" === e[0] || "<" === e[0]
                      ? ((r = e.substr(1)),
                        "=" === e[1] ? ((n = !0), (r = e.substr(2))) : (t = []),
                        ">" === e[0] ? t.push(1) : t.push(-1))
                      : "=" === e[0]
                      ? (r = e.substr(1))
                      : "~" === e[0] && ((n = !0), (r = e.substr(1))),
                    t.indexOf(a.default.compareVersions(i, r, n)) > -1
                  );
              }),
              (t.isOS = function (e) {
                return this.getOSName(!0) === String(e).toLowerCase();
              }),
              (t.isPlatform = function (e) {
                return this.getPlatformType(!0) === String(e).toLowerCase();
              }),
              (t.isEngine = function (e) {
                return this.getEngineName(!0) === String(e).toLowerCase();
              }),
              (t.is = function (e, t) {
                return (
                  void 0 === t && (t = !1),
                  this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                );
              }),
              (t.some = function (e) {
                var t = this;
                return (
                  void 0 === e && (e = []),
                  e.some(function (e) {
                    return t.is(e);
                  })
                );
              }),
              e
            );
          })();
          (t.default = c), (e.exports = t.default);
        },
        92: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n,
            i = (n = r(17)) && n.__esModule ? n : { default: n },
            o = /version\/(\d+(\.?_?\d+)+)/i,
            s = [
              {
                test: [/googlebot/i],
                describe: function (e) {
                  var t = { name: "Googlebot" },
                    r =
                      i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) ||
                      i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/opera/i],
                describe: function (e) {
                  var t = { name: "Opera" },
                    r =
                      i.default.getFirstMatch(o, e) ||
                      i.default.getFirstMatch(
                        /(?:opera)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/opr\/|opios/i],
                describe: function (e) {
                  var t = { name: "Opera" },
                    r =
                      i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) ||
                      i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/SamsungBrowser/i],
                describe: function (e) {
                  var t = { name: "Samsung Internet for Android" },
                    r =
                      i.default.getFirstMatch(o, e) ||
                      i.default.getFirstMatch(
                        /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/Whale/i],
                describe: function (e) {
                  var t = { name: "NAVER Whale Browser" },
                    r =
                      i.default.getFirstMatch(o, e) ||
                      i.default.getFirstMatch(
                        /(?:whale)[\s/](\d+(?:\.\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/MZBrowser/i],
                describe: function (e) {
                  var t = { name: "MZ Browser" },
                    r =
                      i.default.getFirstMatch(
                        /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/focus/i],
                describe: function (e) {
                  var t = { name: "Focus" },
                    r =
                      i.default.getFirstMatch(
                        /(?:focus)[\s/](\d+(?:\.\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/swing/i],
                describe: function (e) {
                  var t = { name: "Swing" },
                    r =
                      i.default.getFirstMatch(
                        /(?:swing)[\s/](\d+(?:\.\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/coast/i],
                describe: function (e) {
                  var t = { name: "Opera Coast" },
                    r =
                      i.default.getFirstMatch(o, e) ||
                      i.default.getFirstMatch(
                        /(?:coast)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/opt\/\d+(?:.?_?\d+)+/i],
                describe: function (e) {
                  var t = { name: "Opera Touch" },
                    r =
                      i.default.getFirstMatch(
                        /(?:opt)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/yabrowser/i],
                describe: function (e) {
                  var t = { name: "Yandex Browser" },
                    r =
                      i.default.getFirstMatch(
                        /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/ucbrowser/i],
                describe: function (e) {
                  var t = { name: "UC Browser" },
                    r =
                      i.default.getFirstMatch(o, e) ||
                      i.default.getFirstMatch(
                        /(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/Maxthon|mxios/i],
                describe: function (e) {
                  var t = { name: "Maxthon" },
                    r =
                      i.default.getFirstMatch(o, e) ||
                      i.default.getFirstMatch(
                        /(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/epiphany/i],
                describe: function (e) {
                  var t = { name: "Epiphany" },
                    r =
                      i.default.getFirstMatch(o, e) ||
                      i.default.getFirstMatch(
                        /(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/puffin/i],
                describe: function (e) {
                  var t = { name: "Puffin" },
                    r =
                      i.default.getFirstMatch(o, e) ||
                      i.default.getFirstMatch(
                        /(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/sleipnir/i],
                describe: function (e) {
                  var t = { name: "Sleipnir" },
                    r =
                      i.default.getFirstMatch(o, e) ||
                      i.default.getFirstMatch(
                        /(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/k-meleon/i],
                describe: function (e) {
                  var t = { name: "K-Meleon" },
                    r =
                      i.default.getFirstMatch(o, e) ||
                      i.default.getFirstMatch(
                        /(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/micromessenger/i],
                describe: function (e) {
                  var t = { name: "WeChat" },
                    r =
                      i.default.getFirstMatch(
                        /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/qqbrowser/i],
                describe: function (e) {
                  var t = {
                      name: /qqbrowserlite/i.test(e)
                        ? "QQ Browser Lite"
                        : "QQ Browser",
                    },
                    r =
                      i.default.getFirstMatch(
                        /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/msie|trident/i],
                describe: function (e) {
                  var t = { name: "Internet Explorer" },
                    r = i.default.getFirstMatch(
                      /(?:msie |rv:)(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/\sedg\//i],
                describe: function (e) {
                  var t = { name: "Microsoft Edge" },
                    r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/edg([ea]|ios)/i],
                describe: function (e) {
                  var t = { name: "Microsoft Edge" },
                    r = i.default.getSecondMatch(
                      /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/vivaldi/i],
                describe: function (e) {
                  var t = { name: "Vivaldi" },
                    r = i.default.getFirstMatch(
                      /vivaldi\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/seamonkey/i],
                describe: function (e) {
                  var t = { name: "SeaMonkey" },
                    r = i.default.getFirstMatch(
                      /seamonkey\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/sailfish/i],
                describe: function (e) {
                  var t = { name: "Sailfish" },
                    r = i.default.getFirstMatch(
                      /sailfish\s?browser\/(\d+(\.\d+)?)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/silk/i],
                describe: function (e) {
                  var t = { name: "Amazon Silk" },
                    r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/phantom/i],
                describe: function (e) {
                  var t = { name: "PhantomJS" },
                    r = i.default.getFirstMatch(
                      /phantomjs\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/slimerjs/i],
                describe: function (e) {
                  var t = { name: "SlimerJS" },
                    r = i.default.getFirstMatch(
                      /slimerjs\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe: function (e) {
                  var t = { name: "BlackBerry" },
                    r =
                      i.default.getFirstMatch(o, e) ||
                      i.default.getFirstMatch(
                        /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/(web|hpw)[o0]s/i],
                describe: function (e) {
                  var t = { name: "WebOS Browser" },
                    r =
                      i.default.getFirstMatch(o, e) ||
                      i.default.getFirstMatch(
                        /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/bada/i],
                describe: function (e) {
                  var t = { name: "Bada" },
                    r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/tizen/i],
                describe: function (e) {
                  var t = { name: "Tizen" },
                    r =
                      i.default.getFirstMatch(
                        /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/qupzilla/i],
                describe: function (e) {
                  var t = { name: "QupZilla" },
                    r =
                      i.default.getFirstMatch(
                        /(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/firefox|iceweasel|fxios/i],
                describe: function (e) {
                  var t = { name: "Firefox" },
                    r = i.default.getFirstMatch(
                      /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/electron/i],
                describe: function (e) {
                  var t = { name: "Electron" },
                    r = i.default.getFirstMatch(
                      /(?:electron)\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/MiuiBrowser/i],
                describe: function (e) {
                  var t = { name: "Miui" },
                    r = i.default.getFirstMatch(
                      /(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/chromium/i],
                describe: function (e) {
                  var t = { name: "Chromium" },
                    r =
                      i.default.getFirstMatch(
                        /(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/chrome|crios|crmo/i],
                describe: function (e) {
                  var t = { name: "Chrome" },
                    r = i.default.getFirstMatch(
                      /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/GSA/i],
                describe: function (e) {
                  var t = { name: "Google Search" },
                    r = i.default.getFirstMatch(
                      /(?:GSA)\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: function (e) {
                  var t = !e.test(/like android/i),
                    r = e.test(/android/i);
                  return t && r;
                },
                describe: function (e) {
                  var t = { name: "Android Browser" },
                    r = i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/playstation 4/i],
                describe: function (e) {
                  var t = { name: "PlayStation 4" },
                    r = i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/safari|applewebkit/i],
                describe: function (e) {
                  var t = { name: "Safari" },
                    r = i.default.getFirstMatch(o, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/.*/i],
                describe: function (e) {
                  var t =
                    -1 !== e.search("\\(")
                      ? /^(.*)\/(.*)[ \t]\((.*)/
                      : /^(.*)\/(.*) /;
                  return {
                    name: i.default.getFirstMatch(t, e),
                    version: i.default.getSecondMatch(t, e),
                  };
                },
              },
            ];
          (t.default = s), (e.exports = t.default);
        },
        93: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n,
            i = (n = r(17)) && n.__esModule ? n : { default: n },
            o = r(18),
            s = [
              {
                test: [/Roku\/DVP/],
                describe: function (e) {
                  var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                  return { name: o.OS_MAP.Roku, version: t };
                },
              },
              {
                test: [/windows phone/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                    /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                    e
                  );
                  return { name: o.OS_MAP.WindowsPhone, version: t };
                },
              },
              {
                test: [/windows /i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                      /Windows ((NT|XP)( \d\d?.\d)?)/i,
                      e
                    ),
                    r = i.default.getWindowsVersionName(t);
                  return { name: o.OS_MAP.Windows, version: t, versionName: r };
                },
              },
              {
                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                describe: function (e) {
                  var t = { name: o.OS_MAP.iOS },
                    r = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/macintosh/i],
                describe: function (e) {
                  var t = i.default
                      .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e)
                      .replace(/[_\s]/g, "."),
                    r = i.default.getMacOSVersionName(t),
                    n = { name: o.OS_MAP.MacOS, version: t };
                  return r && (n.versionName = r), n;
                },
              },
              {
                test: [/(ipod|iphone|ipad)/i],
                describe: function (e) {
                  var t = i.default
                    .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e)
                    .replace(/[_\s]/g, ".");
                  return { name: o.OS_MAP.iOS, version: t };
                },
              },
              {
                test: function (e) {
                  var t = !e.test(/like android/i),
                    r = e.test(/android/i);
                  return t && r;
                },
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                      /android[\s/-](\d+(\.\d+)*)/i,
                      e
                    ),
                    r = i.default.getAndroidVersionName(t),
                    n = { name: o.OS_MAP.Android, version: t };
                  return r && (n.versionName = r), n;
                },
              },
              {
                test: [/(web|hpw)[o0]s/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                      /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,
                      e
                    ),
                    r = { name: o.OS_MAP.WebOS };
                  return t && t.length && (r.version = t), r;
                },
              },
              {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe: function (e) {
                  var t =
                    i.default.getFirstMatch(
                      /rim\stablet\sos\s(\d+(\.\d+)*)/i,
                      e
                    ) ||
                    i.default.getFirstMatch(
                      /blackberry\d+\/(\d+([_\s]\d+)*)/i,
                      e
                    ) ||
                    i.default.getFirstMatch(/\bbb(\d+)/i, e);
                  return { name: o.OS_MAP.BlackBerry, version: t };
                },
              },
              {
                test: [/bada/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                  return { name: o.OS_MAP.Bada, version: t };
                },
              },
              {
                test: [/tizen/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                    /tizen[/\s](\d+(\.\d+)*)/i,
                    e
                  );
                  return { name: o.OS_MAP.Tizen, version: t };
                },
              },
              {
                test: [/linux/i],
                describe: function () {
                  return { name: o.OS_MAP.Linux };
                },
              },
              {
                test: [/CrOS/],
                describe: function () {
                  return { name: o.OS_MAP.ChromeOS };
                },
              },
              {
                test: [/PlayStation 4/],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                    /PlayStation 4[/\s](\d+(\.\d+)*)/i,
                    e
                  );
                  return { name: o.OS_MAP.PlayStation4, version: t };
                },
              },
            ];
          (t.default = s), (e.exports = t.default);
        },
        94: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n,
            i = (n = r(17)) && n.__esModule ? n : { default: n },
            o = r(18),
            s = [
              {
                test: [/googlebot/i],
                describe: function () {
                  return { type: "bot", vendor: "Google" };
                },
              },
              {
                test: [/huawei/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                    r = { type: o.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                  return t && (r.model = t), r;
                },
              },
              {
                test: [/nexus\s*(?:7|8|9|10).*/i],
                describe: function () {
                  return { type: o.PLATFORMS_MAP.tablet, vendor: "Nexus" };
                },
              },
              {
                test: [/ipad/i],
                describe: function () {
                  return {
                    type: o.PLATFORMS_MAP.tablet,
                    vendor: "Apple",
                    model: "iPad",
                  };
                },
              },
              {
                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                describe: function () {
                  return {
                    type: o.PLATFORMS_MAP.tablet,
                    vendor: "Apple",
                    model: "iPad",
                  };
                },
              },
              {
                test: [/kftt build/i],
                describe: function () {
                  return {
                    type: o.PLATFORMS_MAP.tablet,
                    vendor: "Amazon",
                    model: "Kindle Fire HD 7",
                  };
                },
              },
              {
                test: [/silk/i],
                describe: function () {
                  return { type: o.PLATFORMS_MAP.tablet, vendor: "Amazon" };
                },
              },
              {
                test: [/tablet(?! pc)/i],
                describe: function () {
                  return { type: o.PLATFORMS_MAP.tablet };
                },
              },
              {
                test: function (e) {
                  var t = e.test(/ipod|iphone/i),
                    r = e.test(/like (ipod|iphone)/i);
                  return t && !r;
                },
                describe: function (e) {
                  var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                  return {
                    type: o.PLATFORMS_MAP.mobile,
                    vendor: "Apple",
                    model: t,
                  };
                },
              },
              {
                test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                describe: function () {
                  return { type: o.PLATFORMS_MAP.mobile, vendor: "Nexus" };
                },
              },
              {
                test: [/[^-]mobi/i],
                describe: function () {
                  return { type: o.PLATFORMS_MAP.mobile };
                },
              },
              {
                test: function (e) {
                  return "blackberry" === e.getBrowserName(!0);
                },
                describe: function () {
                  return { type: o.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
                },
              },
              {
                test: function (e) {
                  return "bada" === e.getBrowserName(!0);
                },
                describe: function () {
                  return { type: o.PLATFORMS_MAP.mobile };
                },
              },
              {
                test: function (e) {
                  return "windows phone" === e.getBrowserName();
                },
                describe: function () {
                  return { type: o.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
                },
              },
              {
                test: function (e) {
                  var t = Number(String(e.getOSVersion()).split(".")[0]);
                  return "android" === e.getOSName(!0) && t >= 3;
                },
                describe: function () {
                  return { type: o.PLATFORMS_MAP.tablet };
                },
              },
              {
                test: function (e) {
                  return "android" === e.getOSName(!0);
                },
                describe: function () {
                  return { type: o.PLATFORMS_MAP.mobile };
                },
              },
              {
                test: function (e) {
                  return "macos" === e.getOSName(!0);
                },
                describe: function () {
                  return { type: o.PLATFORMS_MAP.desktop, vendor: "Apple" };
                },
              },
              {
                test: function (e) {
                  return "windows" === e.getOSName(!0);
                },
                describe: function () {
                  return { type: o.PLATFORMS_MAP.desktop };
                },
              },
              {
                test: function (e) {
                  return "linux" === e.getOSName(!0);
                },
                describe: function () {
                  return { type: o.PLATFORMS_MAP.desktop };
                },
              },
              {
                test: function (e) {
                  return "playstation 4" === e.getOSName(!0);
                },
                describe: function () {
                  return { type: o.PLATFORMS_MAP.tv };
                },
              },
              {
                test: function (e) {
                  return "roku" === e.getOSName(!0);
                },
                describe: function () {
                  return { type: o.PLATFORMS_MAP.tv };
                },
              },
            ];
          (t.default = s), (e.exports = t.default);
        },
        95: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n,
            i = (n = r(17)) && n.__esModule ? n : { default: n },
            o = r(18),
            s = [
              {
                test: function (e) {
                  return "microsoft edge" === e.getBrowserName(!0);
                },
                describe: function (e) {
                  if (/\sedg\//i.test(e)) return { name: o.ENGINE_MAP.Blink };
                  var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                  return { name: o.ENGINE_MAP.EdgeHTML, version: t };
                },
              },
              {
                test: [/trident/i],
                describe: function (e) {
                  var t = { name: o.ENGINE_MAP.Trident },
                    r = i.default.getFirstMatch(
                      /trident\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: function (e) {
                  return e.test(/presto/i);
                },
                describe: function (e) {
                  var t = { name: o.ENGINE_MAP.Presto },
                    r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: function (e) {
                  var t = e.test(/gecko/i),
                    r = e.test(/like gecko/i);
                  return t && !r;
                },
                describe: function (e) {
                  var t = { name: o.ENGINE_MAP.Gecko },
                    r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/(apple)?webkit\/537\.36/i],
                describe: function () {
                  return { name: o.ENGINE_MAP.Blink };
                },
              },
              {
                test: [/(apple)?webkit/i],
                describe: function (e) {
                  var t = { name: o.ENGINE_MAP.WebKit },
                    r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
                },
              },
            ];
          (t.default = s), (e.exports = t.default);
        },
      });
    },
    ME5O: function (e, t, r) {
      "use strict";
      t.a = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
    },
    MMmD: function (e, t, r) {
      var n = r("lSCD"),
        i = r("shjB");
      e.exports = function (e) {
        return null != e && i(e.length) && !n(e);
      };
    },
    MiSq: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return g;
      });
      var n = function (e) {
          for (var t, r = 0, n = 0, i = e.length; i >= 4; ++n, i -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(n)) |
                    ((255 & e.charCodeAt(++n)) << 8) |
                    ((255 & e.charCodeAt(++n)) << 16) |
                    ((255 & e.charCodeAt(++n)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (r =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)));
          switch (i) {
            case 3:
              r ^= (255 & e.charCodeAt(n + 2)) << 16;
            case 2:
              r ^= (255 & e.charCodeAt(n + 1)) << 8;
            case 1:
              r =
                1540483477 * (65535 & (r ^= 255 & e.charCodeAt(n))) +
                ((59797 * (r >>> 16)) << 16);
          }
          return (
            ((r =
              1540483477 * (65535 & (r ^= r >>> 13)) +
              ((59797 * (r >>> 16)) << 16)) ^
              (r >>> 15)) >>>
            0
          ).toString(36);
        },
        i = r("ME5O"),
        o = r("4qRI"),
        s = /[A-Z]|^ms/g,
        a = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        u = function (e) {
          return 45 === e.charCodeAt(1);
        },
        c = function (e) {
          return null != e && "boolean" !== typeof e;
        },
        f = Object(o.a)(function (e) {
          return u(e) ? e : e.replace(s, "-$&").toLowerCase();
        }),
        l = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" === typeof t)
                return t.replace(a, function (e, t, r) {
                  return (h = { name: t, styles: r, next: h }), t;
                });
          }
          return 1 === i.a[e] || u(e) || "number" !== typeof t || 0 === t
            ? t
            : t + "px";
        };
      function d(e, t, r, n) {
        if (null == r) return "";
        if (void 0 !== r.__emotion_styles) return r;
        switch (typeof r) {
          case "boolean":
            return "";
          case "object":
            if (1 === r.anim)
              return (h = { name: r.name, styles: r.styles, next: h }), r.name;
            if (void 0 !== r.styles) {
              var i = r.next;
              if (void 0 !== i)
                for (; void 0 !== i; )
                  (h = { name: i.name, styles: i.styles, next: h }),
                    (i = i.next);
              return r.styles + ";";
            }
            return (function (e, t, r) {
              var n = "";
              if (Array.isArray(r))
                for (var i = 0; i < r.length; i++) n += d(e, t, r[i], !1);
              else
                for (var o in r) {
                  var s = r[o];
                  if ("object" !== typeof s)
                    null != t && void 0 !== t[s]
                      ? (n += o + "{" + t[s] + "}")
                      : c(s) && (n += f(o) + ":" + l(o, s) + ";");
                  else if (
                    !Array.isArray(s) ||
                    "string" !== typeof s[0] ||
                    (null != t && void 0 !== t[s[0]])
                  ) {
                    var a = d(e, t, s, !1);
                    switch (o) {
                      case "animation":
                      case "animationName":
                        n += f(o) + ":" + a + ";";
                        break;
                      default:
                        n += o + "{" + a + "}";
                    }
                  } else
                    for (var u = 0; u < s.length; u++)
                      c(s[u]) && (n += f(o) + ":" + l(o, s[u]) + ";");
                }
              return n;
            })(e, t, r);
          case "function":
            if (void 0 !== e) {
              var o = h,
                s = r(e);
              return (h = o), d(e, t, s, n);
            }
            break;
          case "string":
        }
        if (null == t) return r;
        var a = t[r];
        return void 0 === a || n ? r : a;
      }
      var h,
        p = /label:\s*([^\s;\n{]+)\s*;/g;
      var g = function (e, t, r) {
        if (
          1 === e.length &&
          "object" === typeof e[0] &&
          null !== e[0] &&
          void 0 !== e[0].styles
        )
          return e[0];
        var i = !0,
          o = "";
        h = void 0;
        var s = e[0];
        null == s || void 0 === s.raw
          ? ((i = !1), (o += d(r, t, s, !1)))
          : (o += s[0]);
        for (var a = 1; a < e.length; a++)
          (o += d(r, t, e[a], 46 === o.charCodeAt(o.length - 1))),
            i && (o += s[a]);
        p.lastIndex = 0;
        for (var u, c = ""; null !== (u = p.exec(o)); ) c += "-" + u[1];
        return { name: n(o) + c, styles: o, next: h };
      };
    },
    N9sX: function (e, t, r) {
      "use strict";
      function n(e) {
        if ("string" === typeof e) {
          for (var t = e.length, r = t - 1; r >= 0; r--) {
            var n = e.charCodeAt(r);
            n > 127 && n <= 2047 ? t++ : n > 2047 && n <= 65535 && (t += 2);
          }
          return t;
        }
        return "number" === typeof e.byteLength
          ? e.byteLength
          : "number" === typeof e.size
          ? e.size
          : void 0;
      }
      r.d(t, "a", function () {
        return n;
      });
    },
    NKxu: function (e, t, r) {
      var n = r("lSCD"),
        i = r("E2jh"),
        o = r("GoyQ"),
        s = r("3Fdi"),
        a = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        c = Object.prototype,
        f = u.toString,
        l = c.hasOwnProperty,
        d = RegExp(
          "^" +
            f
              .call(l)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      e.exports = function (e) {
        return !(!o(e) || i(e)) && (n(e) ? d : a).test(s(e));
      };
    },
    Nl9j: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return o;
      }),
        r.d(t, "a", function () {
          return a;
        });
      var n = r("mrSG"),
        i = r("Enk7");
      function o(e) {
        return e;
      }
      var s = {
          name: "hostHeaderMiddleware",
          step: "build",
          priority: "low",
          tags: ["HOST"],
          override: !0,
        },
        a = function (e) {
          return {
            applyToStack: function (t) {
              t.add(
                (function (e) {
                  return function (t) {
                    return function (r) {
                      return Object(n.__awaiter)(
                        void 0,
                        void 0,
                        void 0,
                        function () {
                          var o, s;
                          return Object(n.__generator)(this, function (n) {
                            return i.a.isInstance(r.request)
                              ? ((o = r.request),
                                (void 0 ===
                                (s = (e.requestHandler.metadata || {})
                                  .handlerProtocol)
                                  ? ""
                                  : s
                                ).indexOf("h2") >= 0 && !o.headers[":authority"]
                                  ? (delete o.headers.host,
                                    (o.headers[":authority"] = ""))
                                  : o.headers.host ||
                                    (o.headers.host = o.hostname),
                                [2, t(r)])
                              : [2, t(r)];
                          });
                        }
                      );
                    };
                  };
                })(e),
                s
              );
            },
          };
        };
    },
    Npjl: function (e, t) {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    Nt7R: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var n = function (e, t) {
          var r = "function" === typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              s.push(n.value);
          } catch (a) {
            i = { error: a };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        },
        i = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(n(arguments[t]));
          return e;
        },
        o = { VERBOSE: 1, DEBUG: 2, INFO: 3, WARN: 4, ERROR: 5 },
        s = (function () {
          function e(e, t) {
            void 0 === t && (t = "WARN"), (this.name = e), (this.level = t);
          }
          return (
            (e.prototype._padding = function (e) {
              return e < 10 ? "0" + e : "" + e;
            }),
            (e.prototype._ts = function () {
              var e = new Date();
              return (
                [
                  this._padding(e.getMinutes()),
                  this._padding(e.getSeconds()),
                ].join(":") +
                "." +
                e.getMilliseconds()
              );
            }),
            (e.prototype._log = function (t) {
              for (var r = [], n = 1; n < arguments.length; n++)
                r[n - 1] = arguments[n];
              var i = this.level;
              e.LOG_LEVEL && (i = e.LOG_LEVEL),
                "undefined" !== typeof window &&
                  window.LOG_LEVEL &&
                  (i = window.LOG_LEVEL);
              var s = o[i],
                a = o[t];
              if (a >= s) {
                var u = console.log.bind(console);
                "ERROR" === t &&
                  console.error &&
                  (u = console.error.bind(console)),
                  "WARN" === t &&
                    console.warn &&
                    (u = console.warn.bind(console));
                var c = "[" + t + "] " + this._ts() + " " + this.name;
                if (1 === r.length && "string" === typeof r[0])
                  u(c + " - " + r[0]);
                else if (1 === r.length) u(c, r[0]);
                else if ("string" === typeof r[0]) {
                  var f = r.slice(1);
                  1 === f.length && (f = f[0]), u(c + " - " + r[0], f);
                } else u(c, r);
              }
            }),
            (e.prototype.log = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this._log.apply(this, i(["INFO"], e));
            }),
            (e.prototype.info = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this._log.apply(this, i(["INFO"], e));
            }),
            (e.prototype.warn = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this._log.apply(this, i(["WARN"], e));
            }),
            (e.prototype.error = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this._log.apply(this, i(["ERROR"], e));
            }),
            (e.prototype.debug = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this._log.apply(this, i(["DEBUG"], e));
            }),
            (e.prototype.verbose = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this._log.apply(this, i(["VERBOSE"], e));
            }),
            (e.LOG_LEVEL = null),
            e
          );
        })();
    },
    NtRE: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      }),
        r.d(t, "b", function () {
          return a;
        });
      var n = r("mrSG"),
        i = function (e) {
          var t;
          return Object(n.__assign)(Object(n.__assign)({}, e), {
            tls: null === (t = e.tls) || void 0 === t || t,
            endpoint: e.endpoint
              ? o(e)
              : function () {
                  return s(e);
                },
            isCustomEndpoint: !!e.endpoint,
          });
        },
        o = function (e) {
          var t = e.endpoint,
            r = e.urlParser;
          if ("string" === typeof t) {
            var n = Promise.resolve(r(t));
            return function () {
              return n;
            };
          }
          if ("object" === typeof t) {
            var i = Promise.resolve(t);
            return function () {
              return i;
            };
          }
          return t;
        },
        s = function (e) {
          return Object(n.__awaiter)(void 0, void 0, void 0, function () {
            var t, r, i, o, s;
            return Object(n.__generator)(this, function (n) {
              switch (n.label) {
                case 0:
                  return (t = e.tls), (r = void 0 === t || t), [4, e.region()];
                case 1:
                  if (
                    ((i = n.sent()),
                    !new RegExp(
                      /^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/
                    ).test(i))
                  )
                    throw new Error("Invalid region in client config");
                  return [4, e.regionInfoProvider(i)];
                case 2:
                  if (
                    !(o = (null !== (s = n.sent()) && void 0 !== s ? s : {})
                      .hostname)
                  )
                    throw new Error(
                      "Cannot resolve hostname from client config"
                    );
                  return [2, e.urlParser((r ? "https:" : "http:") + "//" + o)];
              }
            });
          });
        },
        a = function (e) {
          if (!e.region) throw new Error("Region is missing");
          return Object(n.__assign)(Object(n.__assign)({}, e), {
            region: u(e.region),
          });
        },
        u = function (e) {
          if ("string" === typeof e) {
            var t = Promise.resolve(e);
            return function () {
              return t;
            };
          }
          return e;
        };
    },
    NykK: function (e, t, r) {
      var n = r("nmnc"),
        i = r("AP2z"),
        o = r("KfNM"),
        s = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : s && s in Object(e)
          ? i(e)
          : o(e);
      };
    },
    OJSm: function (e, t, r) {
      "use strict";
      function n() {
        return (n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      r.r(t),
        r.d(t, "get", function () {
          return i;
        }),
        r.d(t, "responsive", function () {
          return d;
        }),
        r.d(t, "css", function () {
          return h;
        });
      var i = function (e, t, r, n, i) {
          for (t = t && t.split ? t.split(".") : [t], n = 0; n < t.length; n++)
            e = e ? e[t[n]] : i;
          return e === i ? r : e;
        },
        o = [40, 52, 64].map(function (e) {
          return e + "em";
        }),
        s = {
          space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
          fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
        },
        a = {
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
        u = {
          marginX: ["marginLeft", "marginRight"],
          marginY: ["marginTop", "marginBottom"],
          paddingX: ["paddingLeft", "paddingRight"],
          paddingY: ["paddingTop", "paddingBottom"],
          size: ["width", "height"],
        },
        c = {
          color: "colors",
          backgroundColor: "colors",
          borderColor: "colors",
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
        f = function (e, t) {
          if ("number" !== typeof t || t >= 0) return i(e, t, t);
          var r = Math.abs(t),
            n = i(e, r, r);
          return "string" === typeof n ? "-" + n : -1 * n;
        },
        l = [
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
          var r;
          return n({}, e, (((r = {})[t] = f), r));
        }, {}),
        d = function (e) {
          return function (t) {
            var r = {},
              n = i(t, "breakpoints", o),
              s = [null].concat(
                n.map(function (e) {
                  return "@media screen and (min-width: " + e + ")";
                })
              );
            for (var a in e) {
              var u = "function" === typeof e[a] ? e[a](t) : e[a];
              if (null != u)
                if (Array.isArray(u))
                  for (var c = 0; c < u.slice(0, s.length).length; c++) {
                    var f = s[c];
                    f
                      ? ((r[f] = r[f] || {}), null != u[c] && (r[f][a] = u[c]))
                      : (r[a] = u[c]);
                  }
                else r[a] = u;
            }
            return r;
          };
        },
        h = function e(t) {
          return function (r) {
            void 0 === r && (r = {});
            var o = n({}, s, {}, r.theme || r),
              f = {},
              h = "function" === typeof t ? t(o) : t,
              p = d(h)(o);
            for (var g in p) {
              var y = p[g],
                m = "function" === typeof y ? y(o) : y;
              if ("variant" !== g)
                if (m && "object" === typeof m) f[g] = e(m)(o);
                else {
                  var v = i(a, g, g),
                    b = i(c, v),
                    w = i(o, b, i(o, v, {})),
                    S = i(l, v, i)(w, m, m);
                  if (u[v])
                    for (var _ = u[v], A = 0; A < _.length; A++) f[_[A]] = S;
                  else f[v] = S;
                }
              else f = n({}, f, {}, e(i(o, m))(o));
            }
            return f;
          };
        };
      t.default = h;
    },
    "Of+w": function (e, t, r) {
      var n = r("Cwc5")(r("Kz5y"), "WeakMap");
      e.exports = n;
    },
    QmWs: function (e, t, r) {
      var n,
        i =
          (n = r("s4NR")) && "object" == typeof n && "default" in n
            ? n.default
            : n,
        o = /https?|ftp|gopher|file/;
      function s(e) {
        "string" == typeof e && (e = b(e));
        var t = (function (e, t, r) {
          var n = e.auth,
            i = e.hostname,
            o = e.protocol || "",
            s = e.pathname || "",
            a = e.hash || "",
            u = e.query || "",
            c = !1;
          (n = n ? encodeURIComponent(n).replace(/%3A/i, ":") + "@" : ""),
            e.host
              ? (c = n + e.host)
              : i &&
                ((c = n + (~i.indexOf(":") ? "[" + i + "]" : i)),
                e.port && (c += ":" + e.port)),
            u && "object" == typeof u && (u = t.encode(u));
          var f = e.search || (u && "?" + u) || "";
          return (
            o && ":" !== o.substr(-1) && (o += ":"),
            e.slashes || ((!o || r.test(o)) && !1 !== c)
              ? ((c = "//" + (c || "")), s && "/" !== s[0] && (s = "/" + s))
              : c || (c = ""),
            a && "#" !== a[0] && (a = "#" + a),
            f && "?" !== f[0] && (f = "?" + f),
            {
              protocol: o,
              host: c,
              pathname: (s = s.replace(/[?#]/g, encodeURIComponent)),
              search: (f = f.replace("#", "%23")),
              hash: a,
            }
          );
        })(e, i, o);
        return "" + t.protocol + t.host + t.pathname + t.search + t.hash;
      }
      var a = "http://",
        u = "w.w",
        c = a + u,
        f = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
        l = /https?|ftp|gopher|file/;
      function d(e, t) {
        var r = "string" == typeof e ? b(e) : e;
        e = "object" == typeof e ? s(e) : e;
        var n = b(t),
          i = "";
        r.protocol &&
          !r.slashes &&
          ((i = r.protocol),
          (e = e.replace(r.protocol, "")),
          (i += "/" === t[0] || "/" === e[0] ? "/" : "")),
          i &&
            n.protocol &&
            ((i = ""),
            n.slashes || ((i = n.protocol), (t = t.replace(n.protocol, ""))));
        var o = e.match(f);
        o &&
          !n.protocol &&
          ((e = e.substr((i = o[1] + (o[2] || "")).length)),
          /^\/\/[^/]/.test(t) && (i = i.slice(0, -1)));
        var u = new URL(e, c + "/"),
          d = new URL(t, u).toString().replace(c, ""),
          h = n.protocol || r.protocol;
        return (
          (h += r.slashes || n.slashes ? "//" : ""),
          !i && h ? (d = d.replace(a, h)) : i && (d = d.replace(a, "")),
          l.test(d) ||
            ~t.indexOf(".") ||
            "/" === e.slice(-1) ||
            "/" === t.slice(-1) ||
            "/" !== d.slice(-1) ||
            (d = d.slice(0, -1)),
          i && (d = i + ("/" === d[0] ? d.substr(1) : d)),
          d
        );
      }
      function h() {}
      (h.prototype.parse = b),
        (h.prototype.format = s),
        (h.prototype.resolve = d),
        (h.prototype.resolveObject = d);
      var p = /^https?|ftp|gopher|file/,
        g = /^(.*?)([#?].*)/,
        y = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
        m = /^([a-z0-9.+-]*:)?\/\/\/*/i,
        v = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
      function b(e, t, r) {
        if (
          (void 0 === t && (t = !1),
          void 0 === r && (r = !1),
          e && "object" == typeof e && e instanceof h)
        )
          return e;
        var n = (e = e.trim()).match(g);
        (e = n ? n[1].replace(/\\/g, "/") + n[2] : e.replace(/\\/g, "/")),
          v.test(e) && "/" !== e.slice(-1) && (e += "/");
        var o = !/(^javascript)/.test(e) && e.match(y),
          a = m.test(e),
          f = "";
        o &&
          (p.test(o[1]) || ((f = o[1].toLowerCase()), (e = "" + o[2] + o[3])),
          o[2] ||
            ((a = !1),
            p.test(o[1]) ? ((f = o[1]), (e = "" + o[3])) : (e = "//" + o[3])),
          (3 !== o[2].length && 1 !== o[2].length) ||
            ((f = o[1]), (e = "/" + o[3])));
        var l,
          d = (n ? n[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
          b = d && d[1],
          w = new h(),
          S = "",
          _ = "";
        try {
          l = new URL(e);
        } catch (i) {
          (S = i),
            f ||
              r ||
              !/^\/\//.test(e) ||
              /^\/\/.+[@.]/.test(e) ||
              ((_ = "/"), (e = e.substr(1)));
          try {
            l = new URL(e, c);
          } catch (e) {
            return (w.protocol = f), (w.href = f), w;
          }
        }
        (w.slashes = a && !_),
          (w.host = l.host === u ? "" : l.host),
          (w.hostname =
            l.hostname === u ? "" : l.hostname.replace(/(\[|\])/g, "")),
          (w.protocol = S ? f || null : l.protocol),
          (w.search = l.search.replace(/\\/g, "%5C")),
          (w.hash = l.hash.replace(/\\/g, "%5C"));
        var A = e.split("#");
        !w.search && ~A[0].indexOf("?") && (w.search = "?"),
          w.hash || "" !== A[1] || (w.hash = "#"),
          (w.query = t ? i.decode(l.search.substr(1)) : w.search.substr(1)),
          (w.pathname =
            _ +
            (o
              ? (function (e) {
                  return e
                    .replace(/['^|`]/g, function (e) {
                      return "%" + e.charCodeAt().toString(16).toUpperCase();
                    })
                    .replace(/((?:%[0-9A-F]{2})+)/g, function (e, t) {
                      try {
                        return decodeURIComponent(t)
                          .split("")
                          .map(function (e) {
                            var t = e.charCodeAt();
                            return t > 256 || /^[a-z0-9]$/i.test(e)
                              ? e
                              : "%" + t.toString(16).toUpperCase();
                          })
                          .join("");
                      } catch (e) {
                        return t;
                      }
                    });
                })(l.pathname)
              : l.pathname)),
          "about:" === w.protocol &&
            "blank" === w.pathname &&
            ((w.protocol = ""), (w.pathname = "")),
          S && "/" !== e[0] && (w.pathname = w.pathname.substr(1)),
          f &&
            !p.test(f) &&
            "/" !== e.slice(-1) &&
            "/" === w.pathname &&
            (w.pathname = ""),
          (w.path = w.pathname + w.search),
          (w.auth = [l.username, l.password]
            .map(decodeURIComponent)
            .filter(Boolean)
            .join(":")),
          (w.port = l.port),
          b && !w.host.endsWith(b) && ((w.host += b), (w.port = b.slice(1))),
          (w.href = _ ? "" + w.pathname + w.search + w.hash : s(w));
        var C = /^(file)/.test(w.href) ? ["host", "hostname"] : [];
        return (
          Object.keys(w).forEach(function (e) {
            ~C.indexOf(e) || (w[e] = w[e] || null);
          }),
          w
        );
      }
      (t.parse = b),
        (t.format = s),
        (t.resolve = d),
        (t.resolveObject = function (e, t) {
          return b(d(e, t));
        }),
        (t.Url = h);
    },
    QqLw: function (e, t, r) {
      var n = r("tadb"),
        i = r("ebwN"),
        o = r("HOxn"),
        s = r("yGk4"),
        a = r("Of+w"),
        u = r("NykK"),
        c = r("3Fdi"),
        f = "[object Map]",
        l = "[object Promise]",
        d = "[object Set]",
        h = "[object WeakMap]",
        p = "[object DataView]",
        g = c(n),
        y = c(i),
        m = c(o),
        v = c(s),
        b = c(a),
        w = u;
      ((n && w(new n(new ArrayBuffer(1))) != p) ||
        (i && w(new i()) != f) ||
        (o && w(o.resolve()) != l) ||
        (s && w(new s()) != d) ||
        (a && w(new a()) != h)) &&
        (w = function (e) {
          var t = u(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? c(r) : "";
          if (n)
            switch (n) {
              case g:
                return p;
              case y:
                return f;
              case m:
                return l;
              case v:
                return d;
              case b:
                return h;
            }
          return t;
        }),
        (e.exports = w);
    },
    Qrgx: function (e, t, r) {
      "use strict";
      var n = r("cpVT"),
        i = r("q1tI"),
        o = r.n(i),
        s = r("VdAu"),
        a = r("5gwC"),
        u = r("HJKE"),
        c = r("TfoY"),
        f = o.a.createElement;
      t.a = function (e) {
        var t,
          r = e.variant,
          i = e.size,
          o = e.text,
          l = e.handleClick,
          d = e.mr,
          h = e.ml,
          p = e.mb,
          g = (e.mx, e.width),
          y = e.disabled,
          m = void 0 !== y && y,
          v = e.color,
          b = e.type,
          w = e.image,
          S = Object(c.c)();
        return f(
          s.b,
          {
            onClick: m ? null : l,
            mr: d && d,
            ml: h && h,
            mb: p && p,
            width: g && g,
            alignItems: "center",
          },
          f(
            s.b,
            {
              alignItems: "center",
              justifyContent: "center",
              width: "circle" === b ? "50px" : "100%",
              py: "medium" === i || "small" === i ? "5px" : S ? "10px" : "15px",
              px:
                "circle" === b
                  ? 0
                  : "medium" === i || "small" === i
                  ? "10px"
                  : S
                  ? "18px"
                  : "25px",
              bg: (function (e) {
                return "primary" === e
                  ? u.b.white
                  : "secondary" === e
                  ? u.b.yellow
                  : "tertiary" === e
                  ? u.b.purple
                  : "fourth" === e
                  ? u.b.black
                  : u.b.orange;
              })(r),
              sx: {
                pointerEvents: m && "none",
                cursor: m ? "default" : "pointer",
                borderRadius: u.i.buttonBorderRadius,
                boxShadow: m ? u.i.boxShadowLow : u.i.boxShadow,
                transition: "box-shadow .3s ease-in-out",
                ":hover": { boxShadow: u.i.boxShadowHover },
              },
            },
            w
              ? f(s.c, {
                  src: w,
                  alt: o || "icon",
                  width: "18px",
                  height: "18px",
                })
              : f(
                  a.a,
                  ((t = {
                    sx: { fontSize: S ? "16px !important" : "auto" },
                    font: S ? "xsx" : "small" === i ? "xs" : "sm",
                    fontWeight: "500",
                    color: v || (m ? u.b.monsoon : u.b.black),
                  }),
                  Object(n.a)(
                    t,
                    "fontWeight",
                    "small" !== i && "medium" !== i && u.d.weight.medium
                  ),
                  Object(n.a)(t, "align", "center"),
                  t),
                  o
                )
          )
        );
      };
    },
    QuJe: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var n = new (r("Nt7R").a)("Parser"),
        i = function (e) {
          var t,
            r = {};
          if (e.aws_mobile_analytics_app_id) {
            var i = {
              AWSPinpoint: {
                appId: e.aws_mobile_analytics_app_id,
                region: e.aws_mobile_analytics_app_region,
              },
            };
            r.Analytics = i;
          }
          return (
            (e.aws_cognito_identity_pool_id || e.aws_user_pools_id) &&
              (r.Auth = {
                userPoolId: e.aws_user_pools_id,
                userPoolWebClientId: e.aws_user_pools_web_client_id,
                region: e.aws_cognito_region,
                identityPoolId: e.aws_cognito_identity_pool_id,
                identityPoolRegion: e.aws_cognito_region,
                mandatorySignIn: "enable" === e.aws_mandatory_sign_in,
              }),
            (t = e.aws_user_files_s3_bucket
              ? {
                  AWSS3: {
                    bucket: e.aws_user_files_s3_bucket,
                    region: e.aws_user_files_s3_bucket_region,
                    dangerouslyConnectToHttpEndpointForTesting:
                      e.aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing,
                  },
                }
              : e
              ? e.Storage || e
              : {}),
            (r.Analytics = Object.assign({}, r.Analytics, e.Analytics)),
            (r.Auth = Object.assign({}, r.Auth, e.Auth)),
            (r.Storage = Object.assign({}, t)),
            n.debug("parse config", e, "to amplifyconfig", r),
            r
          );
        },
        o = (function () {
          function e() {}
          return (e.parseMobilehubConfig = i), e;
        })();
    },
    Qycn: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return c;
      });
      var n = r("Nt7R"),
        i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        o = function (e, t) {
          var r = "function" === typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              s.push(n.value);
          } catch (a) {
            i = { error: a };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        },
        s = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(o(arguments[t]));
          return e;
        },
        a = new n.a("Hub"),
        u =
          "undefined" !== typeof Symbol && "function" === typeof Symbol.for
            ? Symbol.for("amplify_default")
            : "@@amplify_default";
      var c = new ((function () {
        function e(e) {
          (this.listeners = []),
            (this.patterns = []),
            (this.protectedChannels = [
              "core",
              "auth",
              "api",
              "analytics",
              "interactions",
              "pubsub",
              "storage",
              "xr",
            ]),
            (this.name = e);
        }
        return (
          (e.prototype.remove = function (e, t) {
            if (e instanceof RegExp) {
              var r = this.patterns.find(function (t) {
                return t.pattern.source === e.source;
              });
              if (!r) return void a.warn("No listeners for " + e);
              this.patterns = s(
                this.patterns.filter(function (e) {
                  return e !== r;
                })
              );
            } else {
              var n = this.listeners[e];
              if (!n) return void a.warn("No listeners for " + e);
              this.listeners[e] = s(
                n.filter(function (e) {
                  return e.callback !== t;
                })
              );
            }
          }),
          (e.prototype.dispatch = function (e, t, r, n) {
            (void 0 === r && (r = ""),
            this.protectedChannels.indexOf(e) > -1) &&
              (n === u ||
                a.warn(
                  "WARNING: " +
                    e +
                    " is protected and dispatching on it can have unintended consequences"
                ));
            var o = {
              channel: e,
              payload: i({}, t),
              source: r,
              patternInfo: [],
            };
            try {
              this._toListeners(o);
            } catch (s) {
              a.error(s);
            }
          }),
          (e.prototype.listen = function (e, t, r) {
            var n,
              i = this;
            if (
              (void 0 === r && (r = "noname"),
              (function (e) {
                return void 0 !== e.onHubCapsule;
              })(t))
            )
              a.warn(
                "WARNING onHubCapsule is Deprecated. Please pass in a callback."
              ),
                (n = t.onHubCapsule.bind(t));
            else {
              if ("function" !== typeof t)
                throw new Error("No callback supplied to Hub");
              n = t;
            }
            if (e instanceof RegExp)
              this.patterns.push({ pattern: e, callback: n });
            else {
              var o = this.listeners[e];
              o || ((o = []), (this.listeners[e] = o)),
                o.push({ name: r, callback: n });
            }
            return function () {
              i.remove(e, n);
            };
          }),
          (e.prototype._toListeners = function (e) {
            var t = e.channel,
              r = e.payload,
              n = this.listeners[t];
            if (
              (n &&
                n.forEach(function (n) {
                  a.debug("Dispatching to " + t + " with ", r);
                  try {
                    n.callback(e);
                  } catch (i) {
                    a.error(i);
                  }
                }),
              this.patterns.length > 0)
            ) {
              if (!r.message)
                return void a.warn(
                  "Cannot perform pattern matching without a message key"
                );
              var s = r.message;
              this.patterns.forEach(function (t) {
                var r = s.match(t.pattern);
                if (r) {
                  var n = o(r).slice(1),
                    u = i(i({}, e), { patternInfo: n });
                  try {
                    t.callback(u);
                  } catch (c) {
                    a.error(c);
                  }
                }
              });
            }
          }),
          e
        );
      })())("__default__");
    },
    R10A: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return bt;
      });
      var n = r("Nt7R"),
        i = r("2Lx6"),
        o = r("HzrR"),
        s = (function () {
          var e = function (t, r) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(t, r);
          };
          return function (t, r) {
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        a = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                u(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function a(e) {
              try {
                u(n.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(s, a);
            }
            u((n = n.apply(e, t || [])).next());
          });
        },
        u = function (e, t) {
          var r,
            n,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (a) {
                    (o = [6, a]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        },
        c = function (e, t) {
          var r = "function" === typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              s.push(n.value);
          } catch (a) {
            i = { error: a };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        },
        f = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(c(arguments[t]));
          return e;
        },
        l = new n.a("Util"),
        d = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (r.nonRetryable = !0), r;
          }
          return s(t, e), t;
        })(Error);
      function h(e, t, r, n) {
        return (
          void 0 === n && (n = 1),
          a(this, void 0, void 0, function () {
            var i, o;
            return u(this, function (s) {
              switch (s.label) {
                case 0:
                  if ("function" !== typeof e)
                    throw Error("functionToRetry must be a function");
                  l.debug(
                    e.name +
                      " attempt #" +
                      n +
                      " with this vars: " +
                      JSON.stringify(t)
                  ),
                    (s.label = 1);
                case 1:
                  return s.trys.push([1, 3, , 8]), [4, e.apply(void 0, f(t))];
                case 2:
                  return [2, s.sent()];
                case 3:
                  if (
                    ((i = s.sent()),
                    l.debug("error on " + e.name, i),
                    (a = i) && a.nonRetryable)
                  )
                    throw (l.debug(e.name + " non retryable error", i), i);
                  return (
                    (o = r(n, t, i)),
                    l.debug(e.name + " retrying in " + o + " ms"),
                    !1 === o
                      ? [3, 6]
                      : [
                          4,
                          new Promise(function (e) {
                            return setTimeout(e, o);
                          }),
                        ]
                  );
                case 4:
                  return s.sent(), [4, h(e, t, r, n + 1)];
                case 5:
                  return [2, s.sent()];
                case 6:
                  throw i;
                case 7:
                  return [3, 8];
                case 8:
                  return [2];
              }
              var a;
            });
          })
        );
      }
      var p,
        g,
        y,
        m,
        v,
        b,
        w,
        S,
        _,
        A,
        C,
        O,
        E,
        k,
        P,
        x,
        I,
        j,
        T,
        R,
        M,
        U,
        D,
        F,
        N,
        B,
        L,
        z,
        H,
        q,
        V,
        W,
        G,
        K,
        Y,
        $,
        J,
        Z,
        X,
        Q,
        ee,
        te,
        re,
        ne,
        ie,
        oe,
        se,
        ae,
        ue,
        ce,
        fe,
        le,
        de,
        he,
        pe,
        ge,
        ye,
        me = function (e, t, r) {
          return (
            void 0 === r && (r = 3e5),
            h(
              e,
              t,
              (function (e) {
                return function (t) {
                  var r = 100 * Math.pow(2, t) + 100 * Math.random();
                  return !(r > e) && r;
                };
              })(r)
            )
          );
        },
        ve = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                u(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function a(e) {
              try {
                u(n.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(s, a);
            }
            u((n = n.apply(e, t || [])).next());
          });
        },
        be = function (e, t) {
          var r,
            n,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (a) {
                    (o = [6, a]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        },
        we = new n.a("CognitoCredentials"),
        Se = new Promise(function (e, t) {
          return Object(o.b)().isBrowser
            ? (window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null)
              ? (we.debug("google api already loaded"), e())
              : void setTimeout(function () {
                  return e();
                }, 2e3)
            : (we.debug("not in the browser, directly resolved"), e());
        }),
        _e = (function () {
          function e() {
            (this.initialized = !1),
              (this.refreshGoogleToken = this.refreshGoogleToken.bind(this)),
              (this._refreshGoogleTokenImpl =
                this._refreshGoogleTokenImpl.bind(this));
          }
          return (
            (e.prototype.refreshGoogleToken = function () {
              return ve(this, void 0, void 0, function () {
                return be(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.initialized
                        ? [3, 2]
                        : (we.debug("need to wait for the Google SDK loaded"),
                          [4, Se]);
                    case 1:
                      e.sent(),
                        (this.initialized = !0),
                        we.debug("finish waiting"),
                        (e.label = 2);
                    case 2:
                      return [2, this._refreshGoogleTokenImpl()];
                  }
                });
              });
            }),
            (e.prototype._refreshGoogleTokenImpl = function () {
              var e = null;
              return (
                Object(o.b)().isBrowser &&
                  (e =
                    window.gapi && window.gapi.auth2
                      ? window.gapi.auth2
                      : null),
                e
                  ? new Promise(function (t, r) {
                      e.getAuthInstance()
                        .then(function (e) {
                          e ||
                            (we.debug("google Auth undefined"),
                            r(new d("google Auth undefined")));
                          var n = e.currentUser.get();
                          n.isSignedIn()
                            ? (we.debug("refreshing the google access token"),
                              n
                                .reloadAuthResponse()
                                .then(function (e) {
                                  var r = e.id_token,
                                    n = e.expires_at;
                                  t({ token: r, expires_at: n });
                                })
                                .catch(function (e) {
                                  e && "network_error" === e.error
                                    ? r(
                                        "Network error reloading google auth response"
                                      )
                                    : r(
                                        new d(
                                          "Failed to reload google auth response"
                                        )
                                      );
                                }))
                            : r(new d("User is not signed in with Google"));
                        })
                        .catch(function (e) {
                          we.debug("Failed to refresh google token", e),
                            r(new d("Failed to refresh google token"));
                        });
                    })
                  : (we.debug("no gapi auth2 available"),
                    Promise.reject("no gapi auth2 available"))
              );
            }),
            e
          );
        })(),
        Ae = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                u(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function a(e) {
              try {
                u(n.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(s, a);
            }
            u((n = n.apply(e, t || [])).next());
          });
        },
        Ce = function (e, t) {
          var r,
            n,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (a) {
                    (o = [6, a]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        },
        Oe = new n.a("CognitoCredentials"),
        Ee = new Promise(function (e, t) {
          return Object(o.b)().isBrowser
            ? window.FB
              ? (Oe.debug("FB SDK already loaded"), e())
              : void setTimeout(function () {
                  return e();
                }, 2e3)
            : (Oe.debug("not in the browser, directly resolved"), e());
        }),
        ke = (function () {
          function e() {
            (this.initialized = !1),
              (this.refreshFacebookToken =
                this.refreshFacebookToken.bind(this)),
              (this._refreshFacebookTokenImpl =
                this._refreshFacebookTokenImpl.bind(this));
          }
          return (
            (e.prototype.refreshFacebookToken = function () {
              return Ae(this, void 0, void 0, function () {
                return Ce(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.initialized
                        ? [3, 2]
                        : (Oe.debug("need to wait for the Facebook SDK loaded"),
                          [4, Ee]);
                    case 1:
                      e.sent(),
                        (this.initialized = !0),
                        Oe.debug("finish waiting"),
                        (e.label = 2);
                    case 2:
                      return [2, this._refreshFacebookTokenImpl()];
                  }
                });
              });
            }),
            (e.prototype._refreshFacebookTokenImpl = function () {
              var e = null;
              if ((Object(o.b)().isBrowser && (e = window.FB), !e)) {
                var t = "no fb sdk available";
                return Oe.debug(t), Promise.reject(new d(t));
              }
              return new Promise(function (t, r) {
                e.getLoginStatus(
                  function (e) {
                    if (e && e.authResponse) {
                      var n = e.authResponse,
                        i = n.accessToken,
                        o = 1e3 * n.expiresIn + new Date().getTime();
                      if (!i) {
                        s = "the jwtToken is undefined";
                        Oe.debug(s), r(new d(s));
                      }
                      t({ token: i, expires_at: o });
                    } else {
                      var s =
                        "no response from facebook when refreshing the jwt token";
                      Oe.debug(s), r(new d(s));
                    }
                  },
                  { scope: "public_profile,email" }
                );
              });
            }),
            e
          );
        })(),
        Pe = new _e(),
        xe = new ke(),
        Ie = r("+rSW"),
        je = r("fQM2"),
        Te = r("mrSG"),
        Re = r("gi+x");
      !(function (e) {
        (e.AUTHENTICATED_ROLE = "AuthenticatedRole"), (e.DENY = "Deny");
      })(p || (p = {})),
        ((g || (g = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((y || (y = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((m || (m = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((v || (v = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((b || (b = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((w || (w = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((S || (S = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((_ || (_ = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((A || (A = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((C || (C = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        (function (e) {
          (e.ACCESS_DENIED = "AccessDenied"),
            (e.INTERNAL_SERVER_ERROR = "InternalServerError");
        })(O || (O = {})),
        ((E || (E = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((k || (k = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((P || (P = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((x || (x = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((I || (I = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((j || (j = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((T || (T = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((R || (R = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((M || (M = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((U || (U = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((D || (D = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((F || (F = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((N || (N = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((B || (B = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((L || (L = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        (function (e) {
          (e.CONTAINS = "Contains"),
            (e.EQUALS = "Equals"),
            (e.NOT_EQUAL = "NotEqual"),
            (e.STARTS_WITH = "StartsWith");
        })(z || (z = {})),
        ((H || (H = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((q || (q = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        (function (e) {
          (e.RULES = "Rules"), (e.TOKEN = "Token");
        })(V || (V = {})),
        ((W || (W = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((G || (G = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((K || (K = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((Y || (Y = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        (($ || ($ = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((J || (J = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((Z || (Z = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((X || (X = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((Q || (Q = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((ee || (ee = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((te || (te = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((re || (re = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((ne || (ne = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((ie || (ie = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((oe || (oe = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((se || (se = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((ae || (ae = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((ue || (ue = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((ce || (ce = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((fe || (fe = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((le || (le = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((de || (de = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((he || (he = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((pe || (pe = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((ge || (ge = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        }),
        ((ye || (ye = {})).filterSensitiveLog = function (e) {
          return Object(Re.a)({}, e);
        });
      var Me = r("7QQ4"),
        Ue = r("mRvm"),
        De = r("EI00"),
        Fe = (function (e) {
          function t(t) {
            var r = e.call(this) || this;
            return (r.input = t), r;
          }
          return (
            Object(Re.c)(t, e),
            (t.prototype.resolveMiddleware = function (e, t, r) {
              this.middlewareStack.use(
                Object(Ue.a)(t, this.serialize, this.deserialize)
              );
              var n = e.concat(this.middlewareStack),
                i = {
                  logger: t.logger,
                  clientName: "CognitoIdentityClient",
                  commandName: "GetCredentialsForIdentityCommand",
                  inputFilterSensitiveLog: M.filterSensitiveLog,
                  outputFilterSensitiveLog: D.filterSensitiveLog,
                },
                o = t.requestHandler;
              return n.resolve(function (e) {
                return o.handle(e.request, r || {});
              }, i);
            }),
            (t.prototype.serialize = function (e, t) {
              return Object(Me.c)(e, t);
            }),
            (t.prototype.deserialize = function (e, t) {
              return Object(Me.a)(e, t);
            }),
            t
          );
        })(De.b),
        Ne = (function (e) {
          function t(t, r) {
            void 0 === r && (r = !0);
            var n = e.call(this, t) || this;
            return (n.tryNextLink = r), n;
          }
          return Object(Te.__extends)(t, e), t;
        })(Error);
      function Be(e) {
        return Promise.all(
          Object.keys(e).reduce(function (t, r) {
            var n = e[r];
            return (
              "string" === typeof n
                ? t.push([r, n])
                : t.push(
                    n().then(function (e) {
                      return [r, e];
                    })
                  ),
              t
            );
          }, [])
        ).then(function (e) {
          return e.reduce(function (e, t) {
            var r = Object(Te.__read)(t, 2),
              n = r[0],
              i = r[1];
            return (e[n] = i), e;
          }, {});
        });
      }
      function Le(e) {
        var t = this;
        return function () {
          return Object(Te.__awaiter)(t, void 0, void 0, function () {
            var t, r, n, i, o, s, a, u, c, f, l, d, h;
            return Object(Te.__generator)(this, function (p) {
              switch (p.label) {
                case 0:
                  return (
                    (f = (c = e.client).send),
                    (l = Fe.bind),
                    (h = {
                      CustomRoleArn: e.customRoleArn,
                      IdentityId: e.identityId,
                    }),
                    e.logins ? [4, Be(e.logins)] : [3, 2]
                  );
                case 1:
                  return (d = p.sent()), [3, 3];
                case 2:
                  (d = void 0), (p.label = 3);
                case 3:
                  return [
                    4,
                    f.apply(c, [
                      new (l.apply(Fe, [void 0, ((h.Logins = d), h)]))(),
                    ]),
                  ];
                case 4:
                  return (
                    (t = p.sent().Credentials),
                    (r =
                      void 0 === t
                        ? (function () {
                            throw new Ne(
                              "Response from Amazon Cognito contained no credentials"
                            );
                          })()
                        : t),
                    (n = r.AccessKeyId),
                    (i =
                      void 0 === n
                        ? (function () {
                            throw new Ne(
                              "Response from Amazon Cognito contained no access key ID"
                            );
                          })()
                        : n),
                    (o = r.Expiration),
                    (s = r.SecretKey),
                    (a =
                      void 0 === s
                        ? (function () {
                            throw new Ne(
                              "Response from Amazon Cognito contained no secret key"
                            );
                          })()
                        : s),
                    (u = r.SessionToken),
                    [
                      2,
                      {
                        identityId: e.identityId,
                        accessKeyId: i,
                        secretAccessKey: a,
                        sessionToken: u,
                        expiration: o,
                      },
                    ]
                  );
              }
            });
          });
        };
      }
      var ze = (function (e) {
          function t(t) {
            var r = e.call(this) || this;
            return (r.input = t), r;
          }
          return (
            Object(Re.c)(t, e),
            (t.prototype.resolveMiddleware = function (e, t, r) {
              this.middlewareStack.use(
                Object(Ue.a)(t, this.serialize, this.deserialize)
              );
              var n = e.concat(this.middlewareStack),
                i = {
                  logger: t.logger,
                  clientName: "CognitoIdentityClient",
                  commandName: "GetIdCommand",
                  inputFilterSensitiveLog: N.filterSensitiveLog,
                  outputFilterSensitiveLog: B.filterSensitiveLog,
                },
                o = t.requestHandler;
              return n.resolve(function (e) {
                return o.handle(e.request, r || {});
              }, i);
            }),
            (t.prototype.serialize = function (e, t) {
              return Object(Me.d)(e, t);
            }),
            (t.prototype.deserialize = function (e, t) {
              return Object(Me.b)(e, t);
            }),
            t
          );
        })(De.b),
        He = "IdentityIds",
        qe = (function () {
          function e(e) {
            void 0 === e && (e = "aws:cognito-identity-ids"), (this.dbName = e);
          }
          return (
            (e.prototype.getItem = function (e) {
              return this.withObjectStore("readonly", function (t) {
                var r = t.get(e);
                return new Promise(function (e) {
                  (r.onerror = function () {
                    return e(null);
                  }),
                    (r.onsuccess = function () {
                      return e(r.result ? r.result.value : null);
                    });
                });
              }).catch(function () {
                return null;
              });
            }),
            (e.prototype.removeItem = function (e) {
              return this.withObjectStore("readwrite", function (t) {
                var r = t.delete(e);
                return new Promise(function (e, t) {
                  (r.onerror = function () {
                    return t(r.error);
                  }),
                    (r.onsuccess = function () {
                      return e();
                    });
                });
              });
            }),
            (e.prototype.setItem = function (e, t) {
              return this.withObjectStore("readwrite", function (r) {
                var n = r.put({ id: e, value: t });
                return new Promise(function (e, t) {
                  (n.onerror = function () {
                    return t(n.error);
                  }),
                    (n.onsuccess = function () {
                      return e();
                    });
                });
              });
            }),
            (e.prototype.getDb = function () {
              var e = self.indexedDB.open(this.dbName, 1);
              return new Promise(function (t, r) {
                (e.onsuccess = function () {
                  t(e.result);
                }),
                  (e.onerror = function () {
                    r(e.error);
                  }),
                  (e.onblocked = function () {
                    r(new Error("Unable to access DB"));
                  }),
                  (e.onupgradeneeded = function () {
                    var t = e.result;
                    (t.onerror = function () {
                      r(new Error("Failed to create object store"));
                    }),
                      t.createObjectStore(He, { keyPath: "id" });
                  });
              });
            }),
            (e.prototype.withObjectStore = function (e, t) {
              return this.getDb().then(function (r) {
                var n = r.transaction(He, e);
                return (
                  (n.oncomplete = function () {
                    return r.close();
                  }),
                  new Promise(function (e, r) {
                    (n.onerror = function () {
                      return r(n.error);
                    }),
                      e(t(n.objectStore(He)));
                  }).catch(function (e) {
                    throw (r.close(), e);
                  })
                );
              });
            }),
            e
          );
        })(),
        Ve = new ((function () {
          function e(e) {
            void 0 === e && (e = {}), (this.store = e);
          }
          return (
            (e.prototype.getItem = function (e) {
              return e in this.store ? this.store[e] : null;
            }),
            (e.prototype.removeItem = function (e) {
              delete this.store[e];
            }),
            (e.prototype.setItem = function (e, t) {
              this.store[e] = t;
            }),
            e
          );
        })())();
      function We(e) {
        var t = this,
          r = e.accountId,
          n = e.cache,
          i =
            void 0 === n
              ? "object" === typeof self && self.indexedDB
                ? new qe()
                : "object" === typeof window && window.localStorage
                ? window.localStorage
                : Ve
              : n,
          o = e.client,
          s = e.customRoleArn,
          a = e.identityPoolId,
          u = e.logins,
          c = e.userIdentifier,
          f =
            void 0 === c
              ? u && 0 !== Object.keys(u).length
                ? void 0
                : "ANONYMOUS"
              : c,
          l = f ? "aws:cognito-identity-credentials:" + a + ":" + f : void 0,
          d = function () {
            return Object(Te.__awaiter)(t, void 0, void 0, function () {
              var e, t, n, c, f, h, p, g, y;
              return Object(Te.__generator)(this, function (m) {
                switch (m.label) {
                  case 0:
                    return (t = l) ? [4, i.getItem(l)] : [3, 2];
                  case 1:
                    (t = m.sent()), (m.label = 2);
                  case 2:
                    return (e = t)
                      ? [3, 7]
                      : ((h = (f = o).send),
                        (p = ze.bind),
                        (y = { AccountId: r, IdentityPoolId: a }),
                        u ? [4, Be(u)] : [3, 4]);
                  case 3:
                    return (g = m.sent()), [3, 5];
                  case 4:
                    (g = void 0), (m.label = 5);
                  case 5:
                    return [
                      4,
                      h.apply(f, [
                        new (p.apply(ze, [void 0, ((y.Logins = g), y)]))(),
                      ]),
                    ];
                  case 6:
                    (n = m.sent().IdentityId),
                      (c =
                        void 0 === n
                          ? (function () {
                              throw new Ne(
                                "Response from Amazon Cognito contained no identity ID"
                              );
                            })()
                          : n),
                      (e = c),
                      l &&
                        Promise.resolve(i.setItem(l, e)).catch(function () {}),
                      (m.label = 7);
                  case 7:
                    return [
                      2,
                      (d = Le({
                        client: o,
                        customRoleArn: s,
                        logins: u,
                        identityId: e,
                      }))(),
                    ];
                }
              });
            });
          };
        return function () {
          return d().catch(function (e) {
            return Object(Te.__awaiter)(t, void 0, void 0, function () {
              return Object(Te.__generator)(this, function (t) {
                throw (
                  (l && Promise.resolve(i.removeItem(l)).catch(function () {}),
                  e)
                );
              });
            });
          });
        };
      }
      var Ge = r("+KNX"),
        Ke = r("viNG"),
        Ye = r("LUnR"),
        $e = r("J2eM"),
        Je = r("UMev"),
        Ze = r("S3Uu"),
        Xe = r("N9sX"),
        Qe = r("wU8f");
      var et = "cognito-identity.{region}.amazonaws.com",
        tt = new Set([
          "af-south-1",
          "ap-east-1",
          "ap-northeast-1",
          "ap-northeast-2",
          "ap-south-1",
          "ap-southeast-1",
          "ap-southeast-2",
          "ca-central-1",
          "eu-central-1",
          "eu-north-1",
          "eu-south-1",
          "eu-west-1",
          "eu-west-2",
          "eu-west-3",
          "me-south-1",
          "sa-east-1",
          "us-east-1",
          "us-east-2",
          "us-west-1",
          "us-west-2",
        ]),
        rt = new Set(["cn-north-1", "cn-northwest-1"]),
        nt = new Set(["us-iso-east-1"]),
        it = new Set(["us-isob-east-1"]),
        ot = new Set(["us-gov-east-1", "us-gov-west-1"]),
        st = {
          apiVersion: "2014-06-30",
          disableHostPrefix: !1,
          logger: {},
          regionInfoProvider: function (e, t) {
            var r = void 0;
            switch (e) {
              case "ap-northeast-1":
                r = {
                  hostname: "cognito-identity.ap-northeast-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "ap-northeast-2":
                r = {
                  hostname: "cognito-identity.ap-northeast-2.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "ap-south-1":
                r = {
                  hostname: "cognito-identity.ap-south-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "ap-southeast-1":
                r = {
                  hostname: "cognito-identity.ap-southeast-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "ap-southeast-2":
                r = {
                  hostname: "cognito-identity.ap-southeast-2.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "ca-central-1":
                r = {
                  hostname: "cognito-identity.ca-central-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "cn-north-1":
                r = {
                  hostname: "cognito-identity.cn-north-1.amazonaws.com.cn",
                  partition: "aws-cn",
                };
                break;
              case "eu-central-1":
                r = {
                  hostname: "cognito-identity.eu-central-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "eu-north-1":
                r = {
                  hostname: "cognito-identity.eu-north-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "eu-west-1":
                r = {
                  hostname: "cognito-identity.eu-west-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "eu-west-2":
                r = {
                  hostname: "cognito-identity.eu-west-2.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "eu-west-3":
                r = {
                  hostname: "cognito-identity.eu-west-3.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "fips-us-east-1":
                r = {
                  hostname: "cognito-identity-fips.us-east-1.amazonaws.com",
                  partition: "aws",
                  signingRegion: "us-east-1",
                };
                break;
              case "fips-us-east-2":
                r = {
                  hostname: "cognito-identity-fips.us-east-2.amazonaws.com",
                  partition: "aws",
                  signingRegion: "us-east-2",
                };
                break;
              case "fips-us-gov-west-1":
                r = {
                  hostname: "cognito-identity-fips.us-gov-west-1.amazonaws.com",
                  partition: "aws-us-gov",
                  signingRegion: "us-gov-west-1",
                };
                break;
              case "fips-us-west-2":
                r = {
                  hostname: "cognito-identity-fips.us-west-2.amazonaws.com",
                  partition: "aws",
                  signingRegion: "us-west-2",
                };
                break;
              case "sa-east-1":
                r = {
                  hostname: "cognito-identity.sa-east-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "us-east-1":
                r = {
                  hostname: "cognito-identity.us-east-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "us-east-2":
                r = {
                  hostname: "cognito-identity.us-east-2.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "us-gov-west-1":
                r = {
                  hostname: "cognito-identity.us-gov-west-1.amazonaws.com",
                  partition: "aws-us-gov",
                };
                break;
              case "us-west-1":
                r = {
                  hostname: "cognito-identity.us-west-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "us-west-2":
                r = {
                  hostname: "cognito-identity.us-west-2.amazonaws.com",
                  partition: "aws",
                };
                break;
              default:
                tt.has(e) &&
                  (r = {
                    hostname: et.replace("{region}", e),
                    partition: "aws",
                  }),
                  rt.has(e) &&
                    (r = {
                      hostname:
                        "cognito-identity.{region}.amazonaws.com.cn".replace(
                          "{region}",
                          e
                        ),
                      partition: "aws-cn",
                    }),
                  nt.has(e) &&
                    (r = {
                      hostname: "cognito-identity.{region}.c2s.ic.gov".replace(
                        "{region}",
                        e
                      ),
                      partition: "aws-iso",
                    }),
                  it.has(e) &&
                    (r = {
                      hostname:
                        "cognito-identity.{region}.sc2s.sgov.gov".replace(
                          "{region}",
                          e
                        ),
                      partition: "aws-iso-b",
                    }),
                  ot.has(e) &&
                    (r = {
                      hostname:
                        "cognito-identity.{region}.amazonaws.com".replace(
                          "{region}",
                          e
                        ),
                      partition: "aws-us-gov",
                    }),
                  void 0 === r &&
                    (r = {
                      hostname: et.replace("{region}", e),
                      partition: "aws",
                    });
            }
            return Promise.resolve(
              Object(Re.a)({ signingService: "cognito-identity" }, r)
            );
          },
          serviceId: "Cognito Identity",
          urlParser: r("2j7m").a,
        },
        at = Object(Re.a)(Object(Re.a)({}, st), {
          runtime: "browser",
          base64Decoder: Ze.a,
          base64Encoder: Ze.b,
          bodyLengthChecker: Xe.a,
          credentialDefaultProvider: function (e) {
            return function () {
              return Promise.reject(new Error("Credential is missing"));
            };
          },
          defaultUserAgentProvider: Object(Qe.a)({
            serviceId: st.serviceId,
            clientVersion: Ge.version,
          }),
          maxAttempts: Je.a,
          region: Object($e.a)("Region is missing"),
          requestHandler: new Ye.a(),
          sha256: Ke.Sha256,
          streamCollector: Ye.b,
          utf8Decoder: function (e) {
            return "function" === typeof TextEncoder
              ? (function (e) {
                  return new TextEncoder().encode(e);
                })(e)
              : (function (e) {
                  for (var t = [], r = 0, n = e.length; r < n; r++) {
                    var i = e.charCodeAt(r);
                    if (i < 128) t.push(i);
                    else if (i < 2048) t.push((i >> 6) | 192, (63 & i) | 128);
                    else if (
                      r + 1 < e.length &&
                      55296 === (64512 & i) &&
                      56320 === (64512 & e.charCodeAt(r + 1))
                    ) {
                      var o =
                        65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r));
                      t.push(
                        (o >> 18) | 240,
                        ((o >> 12) & 63) | 128,
                        ((o >> 6) & 63) | 128,
                        (63 & o) | 128
                      );
                    } else
                      t.push(
                        (i >> 12) | 224,
                        ((i >> 6) & 63) | 128,
                        (63 & i) | 128
                      );
                  }
                  return Uint8Array.from(t);
                })(e);
          },
          utf8Encoder: function (e) {
            return "function" === typeof TextDecoder
              ? (function (e) {
                  return new TextDecoder("utf-8").decode(e);
                })(e)
              : (function (e) {
                  for (var t = "", r = 0, n = e.length; r < n; r++) {
                    var i = e[r];
                    if (i < 128) t += String.fromCharCode(i);
                    else if (192 <= i && i < 224) {
                      var o = e[++r];
                      t += String.fromCharCode(((31 & i) << 6) | (63 & o));
                    } else if (240 <= i && i < 365) {
                      var s =
                        "%" +
                        [i, e[++r], e[++r], e[++r]]
                          .map(function (e) {
                            return e.toString(16);
                          })
                          .join("%");
                      t += decodeURIComponent(s);
                    } else
                      t += String.fromCharCode(
                        ((15 & i) << 12) | ((63 & e[++r]) << 6) | (63 & e[++r])
                      );
                  }
                  return t;
                })(e);
          },
        }),
        ut = r("NtRE"),
        ct = r("naxo"),
        ft = r("Nl9j"),
        lt = r("+tRG"),
        dt = r("qcsT"),
        ht = r("87YT"),
        pt = (function (e) {
          function t(t) {
            var r = this,
              n = Object(Re.a)(Object(Re.a)({}, at), t),
              i = Object(ut.b)(n),
              o = Object(ut.a)(i),
              s = Object(dt.b)(o),
              a = Object(Je.c)(s),
              u = Object(ft.b)(a),
              c = Object(ht.b)(u);
            return (
              ((r = e.call(this, c) || this).config = c),
              r.middlewareStack.use(Object(Je.b)(r.config)),
              r.middlewareStack.use(Object(ct.a)(r.config)),
              r.middlewareStack.use(Object(ft.a)(r.config)),
              r.middlewareStack.use(Object(lt.a)(r.config)),
              r.middlewareStack.use(Object(ht.a)(r.config)),
              r
            );
          }
          return (
            Object(Re.c)(t, e),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this);
            }),
            t
          );
        })(De.a),
        gt = function () {
          return (gt =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        yt = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                u(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function a(e) {
              try {
                u(n.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(s, a);
            }
            u((n = n.apply(e, t || [])).next());
          });
        },
        mt = function (e, t) {
          var r,
            n,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (a) {
                    (o = [6, a]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        },
        vt = new n.a("Credentials"),
        bt = new ((function () {
          function e(e) {
            (this._gettingCredPromise = null),
              (this._refreshHandlers = {}),
              (this.Auth = void 0),
              this.configure(e),
              (this._refreshHandlers.google = Pe.refreshGoogleToken),
              (this._refreshHandlers.facebook = xe.refreshFacebookToken);
          }
          return (
            (e.prototype.getModuleName = function () {
              return "Credentials";
            }),
            (e.prototype.getCredSource = function () {
              return this._credentials_source;
            }),
            (e.prototype.configure = function (e) {
              if (!e) return this._config || {};
              this._config = Object.assign({}, this._config, e);
              var t = this._config.refreshHandlers;
              return (
                t &&
                  (this._refreshHandlers = gt(
                    gt({}, this._refreshHandlers),
                    t
                  )),
                (this._storage = this._config.storage),
                this._storage || (this._storage = new i.a().getStorage()),
                (this._storageSync = Promise.resolve()),
                "function" === typeof this._storage.sync &&
                  (this._storageSync = this._storage.sync()),
                this._config
              );
            }),
            (e.prototype.get = function () {
              return vt.debug("getting credentials"), this._pickupCredentials();
            }),
            (e.prototype._pickupCredentials = function () {
              return (
                vt.debug("picking up credentials"),
                this._gettingCredPromise && this._gettingCredPromise.isPending()
                  ? vt.debug("getting old cred promise")
                  : (vt.debug("getting new cred promise"),
                    (this._gettingCredPromise = Object(o.f)(
                      this._keepAlive()
                    ))),
                this._gettingCredPromise
              );
            }),
            (e.prototype._keepAlive = function () {
              return yt(this, void 0, void 0, function () {
                var e, t, r, n, i, o, s;
                return mt(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (
                        (vt.debug(
                          "checking if credentials exists and not expired"
                        ),
                        (e = this._credentials) &&
                          !this._isExpired(e) &&
                          !this._isPastTTL())
                      )
                        return (
                          vt.debug(
                            "credentials not changed and not expired, directly return"
                          ),
                          [2, Promise.resolve(e)]
                        );
                      if (
                        (vt.debug(
                          "need to get a new credential or refresh the existing one"
                        ),
                        (t = this.Auth),
                        !(r = void 0 === t ? je.a.Auth : t) ||
                          "function" !== typeof r.currentUserCredentials)
                      )
                        return [
                          2,
                          Promise.reject(
                            "No Auth module registered in Amplify"
                          ),
                        ];
                      if (this._isExpired(e) || !this._isPastTTL())
                        return [3, 6];
                      vt.debug("ttl has passed but token is not yet expired"),
                        (a.label = 1);
                    case 1:
                      return (
                        a.trys.push([1, 5, , 6]), [4, r.currentUserPoolUser()]
                      );
                    case 2:
                      return (n = a.sent()), [4, r.currentSession()];
                    case 3:
                      return (
                        (i = a.sent()),
                        (o = i.refreshToken),
                        [
                          4,
                          new Promise(function (e, t) {
                            n.refreshSession(o, function (r, n) {
                              return r ? t(r) : e(n);
                            });
                          }),
                        ]
                      );
                    case 4:
                      return a.sent(), [3, 6];
                    case 5:
                      return (
                        (s = a.sent()),
                        vt.debug(
                          "Error attempting to refreshing the session",
                          s
                        ),
                        [3, 6]
                      );
                    case 6:
                      return [2, r.currentUserCredentials()];
                  }
                });
              });
            }),
            (e.prototype.refreshFederatedToken = function (e) {
              vt.debug("Getting federated credentials");
              var t = e.provider,
                r = e.user,
                n = e.token,
                i = e.identity_id,
                o = e.expires_at;
              o = 1970 === new Date(o).getFullYear() ? 1e3 * o : o;
              var s = this;
              return (
                vt.debug("checking if federated jwt token expired"),
                o > new Date().getTime()
                  ? (vt.debug("token not expired"),
                    this._setCredentialsFromFederation({
                      provider: t,
                      token: n,
                      user: r,
                      identity_id: i,
                      expires_at: o,
                    }))
                  : s._refreshHandlers[t] &&
                    "function" === typeof s._refreshHandlers[t]
                  ? (vt.debug(
                      "getting refreshed jwt token from federation provider"
                    ),
                    this._providerRefreshWithRetry({
                      refreshHandler: s._refreshHandlers[t],
                      provider: t,
                      user: r,
                    }))
                  : (vt.debug("no refresh handler for provider:", t),
                    this.clear(),
                    Promise.reject("no refresh handler for provider"))
              );
            }),
            (e.prototype._providerRefreshWithRetry = function (e) {
              var t = this,
                r = e.refreshHandler,
                n = e.provider,
                i = e.user;
              return me(r, [], 1e4)
                .then(function (e) {
                  return (
                    vt.debug("refresh federated token sucessfully", e),
                    t._setCredentialsFromFederation({
                      provider: n,
                      token: e.token,
                      user: i,
                      identity_id: e.identity_id,
                      expires_at: e.expires_at,
                    })
                  );
                })
                .catch(function (e) {
                  return (
                    ("string" === typeof e &&
                      0 ===
                        e
                          .toLowerCase()
                          .lastIndexOf("network error", e.length)) ||
                      t.clear(),
                    vt.debug("refresh federated token failed", e),
                    Promise.reject("refreshing federation token failed: " + e)
                  );
                });
            }),
            (e.prototype._isExpired = function (e) {
              if (!e)
                return vt.debug("no credentials for expiration check"), !0;
              vt.debug("are these credentials expired?", e);
              var t = Date.now();
              return e.expiration.getTime() <= t;
            }),
            (e.prototype._isPastTTL = function () {
              return this._nextCredentialsRefresh <= Date.now();
            }),
            (e.prototype._setCredentialsForGuest = function () {
              return yt(this, void 0, void 0, function () {
                var e,
                  t,
                  r,
                  n,
                  i,
                  o,
                  s,
                  a = this;
                return mt(this, function (u) {
                  switch (u.label) {
                    case 0:
                      if (
                        (vt.debug("setting credentials for guest"),
                        (e = this._config),
                        (t = e.identityPoolId),
                        (r = e.region),
                        e.mandatorySignIn)
                      )
                        return [
                          2,
                          Promise.reject(
                            "cannot get guest credentials when mandatory signin enabled"
                          ),
                        ];
                      if (!t)
                        return (
                          vt.debug(
                            "No Cognito Identity pool provided for unauthenticated access"
                          ),
                          [
                            2,
                            Promise.reject(
                              "No Cognito Identity pool provided for unauthenticated access"
                            ),
                          ]
                        );
                      if (!r)
                        return (
                          vt.debug(
                            "region is not configured for getting the credentials"
                          ),
                          [
                            2,
                            Promise.reject(
                              "region is not configured for getting the credentials"
                            ),
                          ]
                        );
                      (n = void 0), (u.label = 1);
                    case 1:
                      return u.trys.push([1, 3, , 4]), [4, this._storageSync];
                    case 2:
                      return (
                        u.sent(),
                        (n = this._storage.getItem("CognitoIdentityId-" + t)),
                        (this._identityId = n),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = u.sent()),
                        vt.debug("Failed to get the cached identityId", i),
                        [3, 4]
                      );
                    case 4:
                      return (
                        (o = new pt({
                          region: r,
                          customUserAgent: Object(Ie.b)(),
                        })),
                        (s = void 0),
                        (s = n
                          ? Le({ identityId: n, client: o })()
                          : (function () {
                              return yt(a, void 0, void 0, function () {
                                var e;
                                return mt(this, function (r) {
                                  switch (r.label) {
                                    case 0:
                                      return [
                                        4,
                                        o.send(new ze({ IdentityPoolId: t })),
                                      ];
                                    case 1:
                                      return (
                                        (e = r.sent().IdentityId),
                                        (this._identityId = e),
                                        [2, Le({ client: o, identityId: e })()]
                                      );
                                  }
                                });
                              });
                            })().catch(function (e) {
                              return yt(a, void 0, void 0, function () {
                                return mt(this, function (t) {
                                  throw e;
                                });
                              });
                            })),
                        [
                          2,
                          this._loadCredentials(s, "guest", !1, null)
                            .then(function (e) {
                              return e;
                            })
                            .catch(function (e) {
                              return yt(a, void 0, void 0, function () {
                                var r = this;
                                return mt(this, function (i) {
                                  return "ResourceNotFoundException" ===
                                    e.name &&
                                    e.message ===
                                      "Identity '" + n + "' not found."
                                    ? (vt.debug(
                                        "Failed to load guest credentials"
                                      ),
                                      this._storage.removeItem(
                                        "CognitoIdentityId-" + t
                                      ),
                                      (s = (function () {
                                        return yt(
                                          r,
                                          void 0,
                                          void 0,
                                          function () {
                                            var e;
                                            return mt(this, function (r) {
                                              switch (r.label) {
                                                case 0:
                                                  return [
                                                    4,
                                                    o.send(
                                                      new ze({
                                                        IdentityPoolId: t,
                                                      })
                                                    ),
                                                  ];
                                                case 1:
                                                  return (
                                                    (e = r.sent().IdentityId),
                                                    (this._identityId = e),
                                                    [
                                                      2,
                                                      Le({
                                                        client: o,
                                                        identityId: e,
                                                      })(),
                                                    ]
                                                  );
                                              }
                                            });
                                          }
                                        );
                                      })().catch(function (e) {
                                        return yt(
                                          r,
                                          void 0,
                                          void 0,
                                          function () {
                                            return mt(this, function (t) {
                                              throw e;
                                            });
                                          }
                                        );
                                      })),
                                      [
                                        2,
                                        this._loadCredentials(
                                          s,
                                          "guest",
                                          !1,
                                          null
                                        ),
                                      ])
                                    : [2, e];
                                });
                              });
                            }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype._setCredentialsFromFederation = function (e) {
              var t = e.provider,
                r = e.token,
                n = e.identity_id,
                i =
                  {
                    google: "accounts.google.com",
                    facebook: "graph.facebook.com",
                    amazon: "www.amazon.com",
                    developer: "cognito-identity.amazonaws.com",
                  }[t] || t;
              if (!i)
                return Promise.reject("You must specify a federated provider");
              var o = {};
              o[i] = r;
              var s = this._config,
                a = s.identityPoolId,
                u = s.region;
              if (!a)
                return (
                  vt.debug("No Cognito Federated Identity pool provided"),
                  Promise.reject("No Cognito Federated Identity pool provided")
                );
              if (!u)
                return (
                  vt.debug(
                    "region is not configured for getting the credentials"
                  ),
                  Promise.reject(
                    "region is not configured for getting the credentials"
                  )
                );
              var c = new pt({ region: u, customUserAgent: Object(Ie.b)() }),
                f = void 0;
              n
                ? (f = Le({ identityId: n, logins: o, client: c })())
                : (f = We({ logins: o, identityPoolId: a, client: c })());
              return this._loadCredentials(f, "federated", !0, e);
            }),
            (e.prototype._setCredentialsFromSession = function (e) {
              var t = this;
              vt.debug("set credentials from session");
              var r = e.getIdToken().getJwtToken(),
                n = this._config,
                i = n.region,
                o = n.userPoolId,
                s = n.identityPoolId;
              if (!s)
                return (
                  vt.debug("No Cognito Federated Identity pool provided"),
                  Promise.reject("No Cognito Federated Identity pool provided")
                );
              if (!i)
                return (
                  vt.debug(
                    "region is not configured for getting the credentials"
                  ),
                  Promise.reject(
                    "region is not configured for getting the credentials"
                  )
                );
              var a = {};
              a["cognito-idp." + i + ".amazonaws.com/" + o] = r;
              var u = new pt({ region: i, customUserAgent: Object(Ie.b)() }),
                c = yt(t, void 0, void 0, function () {
                  var e;
                  return mt(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [
                          4,
                          u.send(new ze({ IdentityPoolId: s, Logins: a })),
                        ];
                      case 1:
                        return (
                          (e = t.sent().IdentityId),
                          (this._identityId = e),
                          [2, Le({ client: u, logins: a, identityId: e })()]
                        );
                    }
                  });
                }).catch(function (e) {
                  return yt(t, void 0, void 0, function () {
                    return mt(this, function (t) {
                      throw e;
                    });
                  });
                });
              return this._loadCredentials(c, "userPool", !0, null);
            }),
            (e.prototype._loadCredentials = function (e, t, r, n) {
              var i = this,
                o = this,
                s = this._config.identityPoolId;
              return new Promise(function (a, u) {
                e.then(function (e) {
                  return yt(i, void 0, void 0, function () {
                    var i, u, c, f, l, d;
                    return mt(this, function (h) {
                      switch (h.label) {
                        case 0:
                          if (
                            (vt.debug("Load credentials successfully", e),
                            this._identityId &&
                              !e.identityId &&
                              (e.identityId = this._identityId),
                            (o._credentials = e),
                            (o._credentials.authenticated = r),
                            (o._credentials_source = t),
                            (o._nextCredentialsRefresh =
                              new Date().getTime() + 3e6),
                            "federated" === t)
                          ) {
                            (i = Object.assign(
                              { id: this._credentials.identityId },
                              n.user
                            )),
                              (u = n.provider),
                              (c = n.token),
                              (f = n.expires_at),
                              (l = n.identity_id);
                            try {
                              this._storage.setItem(
                                "aws-amplify-federatedInfo",
                                JSON.stringify({
                                  provider: u,
                                  token: c,
                                  user: i,
                                  expires_at: f,
                                  identity_id: l,
                                })
                              );
                            } catch (p) {
                              vt.debug(
                                "Failed to put federated info into auth storage",
                                p
                              );
                            }
                          }
                          if ("guest" !== t) return [3, 4];
                          h.label = 1;
                        case 1:
                          return (
                            h.trys.push([1, 3, , 4]), [4, this._storageSync]
                          );
                        case 2:
                          return (
                            h.sent(),
                            this._storage.setItem(
                              "CognitoIdentityId-" + s,
                              e.identityId
                            ),
                            [3, 4]
                          );
                        case 3:
                          return (
                            (d = h.sent()),
                            vt.debug("Failed to cache identityId", d),
                            [3, 4]
                          );
                        case 4:
                          return a(o._credentials), [2];
                      }
                    });
                  });
                }).catch(function (t) {
                  if (t)
                    return (
                      vt.debug("Failed to load credentials", e),
                      vt.debug("Error loading credentials", t),
                      void u(t)
                    );
                });
              });
            }),
            (e.prototype.set = function (e, t) {
              return "session" === t
                ? this._setCredentialsFromSession(e)
                : "federation" === t
                ? this._setCredentialsFromFederation(e)
                : "guest" === t
                ? this._setCredentialsForGuest()
                : (vt.debug("no source specified for setting credentials"),
                  Promise.reject("invalid source"));
            }),
            (e.prototype.clear = function () {
              return yt(this, void 0, void 0, function () {
                return mt(this, function (e) {
                  return (
                    (this._credentials = null),
                    (this._credentials_source = null),
                    vt.debug("removing aws-amplify-federatedInfo from storage"),
                    this._storage.removeItem("aws-amplify-federatedInfo"),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.shear = function (e) {
              return {
                accessKeyId: e.accessKeyId,
                sessionToken: e.sessionToken,
                secretAccessKey: e.secretAccessKey,
                identityId: e.identityId,
                authenticated: e.authenticated,
              };
            }),
            e
          );
        })())(null);
      je.a.register(bt);
    },
    S3Uu: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return f;
      }),
        r.d(t, "b", function () {
          return l;
        });
      for (
        var n = {},
          i = new Array(64),
          o = 0,
          s = "A".charCodeAt(0),
          a = "Z".charCodeAt(0);
        o + s <= a;
        o++
      ) {
        var u = String.fromCharCode(o + s);
        (n[u] = o), (i[o] = u);
      }
      for (
        o = 0, s = "a".charCodeAt(0), a = "z".charCodeAt(0);
        o + s <= a;
        o++
      ) {
        u = String.fromCharCode(o + s);
        var c = o + 26;
        (n[u] = c), (i[c] = u);
      }
      for (o = 0; o < 10; o++) {
        n[o.toString(10)] = o + 52;
        (u = o.toString(10)), (c = o + 52);
        (n[u] = c), (i[c] = u);
      }
      (n["+"] = 62), (i[62] = "+"), (n["/"] = 63), (i[63] = "/");
      function f(e) {
        var t = (e.length / 4) * 3;
        "==" === e.substr(-2) ? (t -= 2) : "=" === e.substr(-1) && t--;
        for (
          var r = new ArrayBuffer(t), i = new DataView(r), o = 0;
          o < e.length;
          o += 4
        ) {
          for (var s = 0, a = 0, u = o, c = o + 3; u <= c; u++)
            "=" !== e[u]
              ? ((s |= n[e[u]] << (6 * (c - u))), (a += 6))
              : (s >>= 6);
          var f = (o / 4) * 3;
          s >>= a % 8;
          for (var l = Math.floor(a / 8), d = 0; d < l; d++) {
            var h = 8 * (l - d - 1);
            i.setUint8(f + d, (s & (255 << h)) >> h);
          }
        }
        return new Uint8Array(r);
      }
      function l(e) {
        for (var t = "", r = 0; r < e.length; r += 3) {
          for (
            var n = 0, o = 0, s = r, a = Math.min(r + 3, e.length);
            s < a;
            s++
          )
            (n |= e[s] << (8 * (a - s - 1))), (o += 8);
          var u = Math.ceil(o / 6);
          n <<= 6 * u - o;
          for (var c = 1; c <= u; c++) {
            var f = 6 * (u - c);
            t += i[(n & (63 << f)) >> f];
          }
          t += "==".slice(0, 4 - u);
        }
        return t;
      }
    },
    SIPS: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      }),
        r.d(t, "b", function () {
          return i;
        });
      function n(e, t, r) {
        var n = "";
        return (
          r.split(" ").forEach(function (r) {
            void 0 !== e[r] ? t.push(e[r]) : (n += r + " ");
          }),
          n
        );
      }
      var i = function (e, t, r) {
        var n = e.key + "-" + t.name;
        if (
          (!1 === r &&
            void 0 === e.registered[n] &&
            (e.registered[n] = t.styles),
          void 0 === e.inserted[t.name])
        ) {
          var i = t;
          do {
            e.insert("." + n, i, e.sheet, !0);
            i = i.next;
          } while (void 0 !== i);
        }
      };
    },
    SksO: function (e, t) {
      function r(t, n) {
        return (
          (e.exports = r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          r(t, n)
        );
      }
      (e.exports = r),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    TARy: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      var n = function (e) {
          return encodeURIComponent(e).replace(/[!'()*]/g, i);
        },
        i = function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        };
    },
    TESy: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      }),
        r.d(t, "b", function () {
          return j;
        }),
        r.d(t, "c", function () {
          return R;
        }),
        r.d(t, "d", function () {
          return M;
        }),
        r.d(t, "e", function () {
          return G;
        }),
        r.d(t, "f", function () {
          return z;
        }),
        r.d(t, "g", function () {
          return ne;
        }),
        r.d(t, "h", function () {
          return F;
        }),
        r.d(t, "i", function () {
          return oe;
        }),
        r.d(t, "j", function () {
          return Y;
        });
      var n = (function () {
          function e(e) {
            var t = e || {},
              r = t.ValidationData,
              n = t.Username,
              i = t.Password,
              o = t.AuthParameters,
              s = t.ClientMetadata;
            (this.validationData = r || {}),
              (this.authParameters = o || {}),
              (this.clientMetadata = s || {}),
              (this.username = n),
              (this.password = i);
          }
          var t = e.prototype;
          return (
            (t.getUsername = function () {
              return this.username;
            }),
            (t.getPassword = function () {
              return this.password;
            }),
            (t.getValidationData = function () {
              return this.validationData;
            }),
            (t.getAuthParameters = function () {
              return this.authParameters;
            }),
            (t.getClientMetadata = function () {
              return this.clientMetadata;
            }),
            e
          );
        })(),
        i = r("tjlA"),
        o = r("Ib8C"),
        s = r.n(o),
        a = (r("F+F2"), r("lPiR")),
        u = r.n(a),
        c = r("7VPu"),
        f = r.n(c),
        l = r("5wY4");
      var d,
        h = (function () {
          function e(e, t) {
            (e = this.words = e || []),
              (this.sigBytes = void 0 != t ? t : 4 * e.length);
          }
          var t = e.prototype;
          return (
            (t.random = function (t) {
              for (var r = [], n = 0; n < t; n += 4) r.push(Object(l.a)());
              return new e(r, t);
            }),
            (t.toString = function () {
              return (function (e) {
                for (
                  var t = e.words, r = e.sigBytes, n = [], i = 0;
                  i < r;
                  i++
                ) {
                  var o = (t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                  n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));
                }
                return n.join("");
              })(this);
            }),
            e
          );
        })(),
        p = g;
      function g(e, t) {
        null != e && this.fromString(e, t);
      }
      function y() {
        return new g(null);
      }
      var m = "undefined" !== typeof navigator;
      m && "Microsoft Internet Explorer" == navigator.appName
        ? ((g.prototype.am = function (e, t, r, n, i, o) {
            for (var s = 32767 & t, a = t >> 15; --o >= 0; ) {
              var u = 32767 & this[e],
                c = this[e++] >> 15,
                f = a * u + c * s;
              (i =
                ((u = s * u + ((32767 & f) << 15) + r[n] + (1073741823 & i)) >>>
                  30) +
                (f >>> 15) +
                a * c +
                (i >>> 30)),
                (r[n++] = 1073741823 & u);
            }
            return i;
          }),
          (d = 30))
        : m && "Netscape" != navigator.appName
        ? ((g.prototype.am = function (e, t, r, n, i, o) {
            for (; --o >= 0; ) {
              var s = t * this[e++] + r[n] + i;
              (i = Math.floor(s / 67108864)), (r[n++] = 67108863 & s);
            }
            return i;
          }),
          (d = 26))
        : ((g.prototype.am = function (e, t, r, n, i, o) {
            for (var s = 16383 & t, a = t >> 14; --o >= 0; ) {
              var u = 16383 & this[e],
                c = this[e++] >> 14,
                f = a * u + c * s;
              (i =
                ((u = s * u + ((16383 & f) << 14) + r[n] + i) >> 28) +
                (f >> 14) +
                a * c),
                (r[n++] = 268435455 & u);
            }
            return i;
          }),
          (d = 28)),
        (g.prototype.DB = d),
        (g.prototype.DM = (1 << d) - 1),
        (g.prototype.DV = 1 << d);
      (g.prototype.FV = Math.pow(2, 52)),
        (g.prototype.F1 = 52 - d),
        (g.prototype.F2 = 2 * d - 52);
      var v,
        b,
        w = new Array();
      for (v = "0".charCodeAt(0), b = 0; b <= 9; ++b) w[v++] = b;
      for (v = "a".charCodeAt(0), b = 10; b < 36; ++b) w[v++] = b;
      for (v = "A".charCodeAt(0), b = 10; b < 36; ++b) w[v++] = b;
      function S(e) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e);
      }
      function _(e, t) {
        var r = w[e.charCodeAt(t)];
        return null == r ? -1 : r;
      }
      function A(e) {
        var t = y();
        return t.fromInt(e), t;
      }
      function C(e) {
        var t,
          r = 1;
        return (
          0 != (t = e >>> 16) && ((e = t), (r += 16)),
          0 != (t = e >> 8) && ((e = t), (r += 8)),
          0 != (t = e >> 4) && ((e = t), (r += 4)),
          0 != (t = e >> 2) && ((e = t), (r += 2)),
          0 != (t = e >> 1) && ((e = t), (r += 1)),
          r
        );
      }
      function O(e) {
        (this.m = e),
          (this.mp = e.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (e.DB - 15)) - 1),
          (this.mt2 = 2 * e.t);
      }
      function E(e) {
        return i.Buffer.from(new h().random(e).toString(), "hex");
      }
      (O.prototype.convert = function (e) {
        var t = y();
        return (
          e.abs().dlShiftTo(this.m.t, t),
          t.divRemTo(this.m, null, t),
          e.s < 0 && t.compareTo(g.ZERO) > 0 && this.m.subTo(t, t),
          t
        );
      }),
        (O.prototype.revert = function (e) {
          var t = y();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (O.prototype.reduce = function (e) {
          for (; e.t <= this.mt2; ) e[e.t++] = 0;
          for (var t = 0; t < this.m.t; ++t) {
            var r = 32767 & e[t],
              n =
                (r * this.mpl +
                  (((r * this.mph + (e[t] >> 15) * this.mpl) & this.um) <<
                    15)) &
                e.DM;
            for (
              e[(r = t + this.m.t)] += this.m.am(0, n, e, t, 0, this.m.t);
              e[r] >= e.DV;

            )
              (e[r] -= e.DV), e[++r]++;
          }
          e.clamp(),
            e.drShiftTo(this.m.t, e),
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
        }),
        (O.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r), this.reduce(r);
        }),
        (O.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        (g.prototype.copyTo = function (e) {
          for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
          (e.t = this.t), (e.s = this.s);
        }),
        (g.prototype.fromInt = function (e) {
          (this.t = 1),
            (this.s = e < 0 ? -1 : 0),
            e > 0
              ? (this[0] = e)
              : e < -1
              ? (this[0] = e + this.DV)
              : (this.t = 0);
        }),
        (g.prototype.fromString = function (e, t) {
          var r;
          if (16 == t) r = 4;
          else if (8 == t) r = 3;
          else if (2 == t) r = 1;
          else if (32 == t) r = 5;
          else {
            if (4 != t)
              throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
            r = 2;
          }
          (this.t = 0), (this.s = 0);
          for (var n = e.length, i = !1, o = 0; --n >= 0; ) {
            var s = _(e, n);
            s < 0
              ? "-" == e.charAt(n) && (i = !0)
              : ((i = !1),
                0 == o
                  ? (this[this.t++] = s)
                  : o + r > this.DB
                  ? ((this[this.t - 1] |=
                      (s & ((1 << (this.DB - o)) - 1)) << o),
                    (this[this.t++] = s >> (this.DB - o)))
                  : (this[this.t - 1] |= s << o),
                (o += r) >= this.DB && (o -= this.DB));
          }
          this.clamp(), i && g.ZERO.subTo(this, this);
        }),
        (g.prototype.clamp = function () {
          for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
            --this.t;
        }),
        (g.prototype.dlShiftTo = function (e, t) {
          var r;
          for (r = this.t - 1; r >= 0; --r) t[r + e] = this[r];
          for (r = e - 1; r >= 0; --r) t[r] = 0;
          (t.t = this.t + e), (t.s = this.s);
        }),
        (g.prototype.drShiftTo = function (e, t) {
          for (var r = e; r < this.t; ++r) t[r - e] = this[r];
          (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
        }),
        (g.prototype.lShiftTo = function (e, t) {
          var r,
            n = e % this.DB,
            i = this.DB - n,
            o = (1 << i) - 1,
            s = Math.floor(e / this.DB),
            a = (this.s << n) & this.DM;
          for (r = this.t - 1; r >= 0; --r)
            (t[r + s + 1] = (this[r] >> i) | a), (a = (this[r] & o) << n);
          for (r = s - 1; r >= 0; --r) t[r] = 0;
          (t[s] = a), (t.t = this.t + s + 1), (t.s = this.s), t.clamp();
        }),
        (g.prototype.rShiftTo = function (e, t) {
          t.s = this.s;
          var r = Math.floor(e / this.DB);
          if (r >= this.t) t.t = 0;
          else {
            var n = e % this.DB,
              i = this.DB - n,
              o = (1 << n) - 1;
            t[0] = this[r] >> n;
            for (var s = r + 1; s < this.t; ++s)
              (t[s - r - 1] |= (this[s] & o) << i), (t[s - r] = this[s] >> n);
            n > 0 && (t[this.t - r - 1] |= (this.s & o) << i),
              (t.t = this.t - r),
              t.clamp();
          }
        }),
        (g.prototype.subTo = function (e, t) {
          for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i; )
            (n += this[r] - e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
          if (e.t < this.t) {
            for (n -= e.s; r < this.t; )
              (n += this[r]), (t[r++] = n & this.DM), (n >>= this.DB);
            n += this.s;
          } else {
            for (n += this.s; r < e.t; )
              (n -= e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
            n -= e.s;
          }
          (t.s = n < 0 ? -1 : 0),
            n < -1 ? (t[r++] = this.DV + n) : n > 0 && (t[r++] = n),
            (t.t = r),
            t.clamp();
        }),
        (g.prototype.multiplyTo = function (e, t) {
          var r = this.abs(),
            n = e.abs(),
            i = r.t;
          for (t.t = i + n.t; --i >= 0; ) t[i] = 0;
          for (i = 0; i < n.t; ++i) t[i + r.t] = r.am(0, n[i], t, i, 0, r.t);
          (t.s = 0), t.clamp(), this.s != e.s && g.ZERO.subTo(t, t);
        }),
        (g.prototype.squareTo = function (e) {
          for (var t = this.abs(), r = (e.t = 2 * t.t); --r >= 0; ) e[r] = 0;
          for (r = 0; r < t.t - 1; ++r) {
            var n = t.am(r, t[r], e, 2 * r, 0, 1);
            (e[r + t.t] += t.am(
              r + 1,
              2 * t[r],
              e,
              2 * r + 1,
              n,
              t.t - r - 1
            )) >= t.DV && ((e[r + t.t] -= t.DV), (e[r + t.t + 1] = 1));
          }
          e.t > 0 && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)),
            (e.s = 0),
            e.clamp();
        }),
        (g.prototype.divRemTo = function (e, t, r) {
          var n = e.abs();
          if (!(n.t <= 0)) {
            var i = this.abs();
            if (i.t < n.t)
              return (
                null != t && t.fromInt(0), void (null != r && this.copyTo(r))
              );
            null == r && (r = y());
            var o = y(),
              s = this.s,
              a = e.s,
              u = this.DB - C(n[n.t - 1]);
            u > 0
              ? (n.lShiftTo(u, o), i.lShiftTo(u, r))
              : (n.copyTo(o), i.copyTo(r));
            var c = o.t,
              f = o[c - 1];
            if (0 != f) {
              var l = f * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0),
                d = this.FV / l,
                h = (1 << this.F1) / l,
                p = 1 << this.F2,
                m = r.t,
                v = m - c,
                b = null == t ? y() : t;
              for (
                o.dlShiftTo(v, b),
                  r.compareTo(b) >= 0 && ((r[r.t++] = 1), r.subTo(b, r)),
                  g.ONE.dlShiftTo(c, b),
                  b.subTo(o, o);
                o.t < c;

              )
                o[o.t++] = 0;
              for (; --v >= 0; ) {
                var w =
                  r[--m] == f
                    ? this.DM
                    : Math.floor(r[m] * d + (r[m - 1] + p) * h);
                if ((r[m] += o.am(0, w, r, v, 0, c)) < w)
                  for (o.dlShiftTo(v, b), r.subTo(b, r); r[m] < --w; )
                    r.subTo(b, r);
              }
              null != t && (r.drShiftTo(c, t), s != a && g.ZERO.subTo(t, t)),
                (r.t = c),
                r.clamp(),
                u > 0 && r.rShiftTo(u, r),
                s < 0 && g.ZERO.subTo(r, r);
            }
          }
        }),
        (g.prototype.invDigit = function () {
          if (this.t < 1) return 0;
          var e = this[0];
          if (0 == (1 & e)) return 0;
          var t = 3 & e;
          return (t =
            ((t =
              ((t =
                ((t = (t * (2 - (15 & e) * t)) & 15) * (2 - (255 & e) * t)) &
                255) *
                (2 - (((65535 & e) * t) & 65535))) &
              65535) *
              (2 - ((e * t) % this.DV))) %
            this.DV) > 0
            ? this.DV - t
            : -t;
        }),
        (g.prototype.addTo = function (e, t) {
          for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i; )
            (n += this[r] + e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
          if (e.t < this.t) {
            for (n += e.s; r < this.t; )
              (n += this[r]), (t[r++] = n & this.DM), (n >>= this.DB);
            n += this.s;
          } else {
            for (n += this.s; r < e.t; )
              (n += e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
            n += e.s;
          }
          (t.s = n < 0 ? -1 : 0),
            n > 0 ? (t[r++] = n) : n < -1 && (t[r++] = this.DV + n),
            (t.t = r),
            t.clamp();
        }),
        (g.prototype.toString = function (e) {
          if (this.s < 0) return "-" + this.negate().toString(e);
          var t;
          if (16 == e) t = 4;
          else if (8 == e) t = 3;
          else if (2 == e) t = 1;
          else if (32 == e) t = 5;
          else {
            if (4 != e)
              throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
            t = 2;
          }
          var r,
            n = (1 << t) - 1,
            i = !1,
            o = "",
            s = this.t,
            a = this.DB - ((s * this.DB) % t);
          if (s-- > 0)
            for (
              a < this.DB && (r = this[s] >> a) > 0 && ((i = !0), (o = S(r)));
              s >= 0;

            )
              a < t
                ? ((r = (this[s] & ((1 << a) - 1)) << (t - a)),
                  (r |= this[--s] >> (a += this.DB - t)))
                : ((r = (this[s] >> (a -= t)) & n),
                  a <= 0 && ((a += this.DB), --s)),
                r > 0 && (i = !0),
                i && (o += S(r));
          return i ? o : "0";
        }),
        (g.prototype.negate = function () {
          var e = y();
          return g.ZERO.subTo(this, e), e;
        }),
        (g.prototype.abs = function () {
          return this.s < 0 ? this.negate() : this;
        }),
        (g.prototype.compareTo = function (e) {
          var t = this.s - e.s;
          if (0 != t) return t;
          var r = this.t;
          if (0 != (t = r - e.t)) return this.s < 0 ? -t : t;
          for (; --r >= 0; ) if (0 != (t = this[r] - e[r])) return t;
          return 0;
        }),
        (g.prototype.bitLength = function () {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + C(this[this.t - 1] ^ (this.s & this.DM));
        }),
        (g.prototype.mod = function (e) {
          var t = y();
          return (
            this.abs().divRemTo(e, null, t),
            this.s < 0 && t.compareTo(g.ZERO) > 0 && e.subTo(t, t),
            t
          );
        }),
        (g.prototype.equals = function (e) {
          return 0 == this.compareTo(e);
        }),
        (g.prototype.add = function (e) {
          var t = y();
          return this.addTo(e, t), t;
        }),
        (g.prototype.subtract = function (e) {
          var t = y();
          return this.subTo(e, t), t;
        }),
        (g.prototype.multiply = function (e) {
          var t = y();
          return this.multiplyTo(e, t), t;
        }),
        (g.prototype.divide = function (e) {
          var t = y();
          return this.divRemTo(e, t, null), t;
        }),
        (g.prototype.modPow = function (e, t, r) {
          var n,
            i = e.bitLength(),
            o = A(1),
            s = new O(t);
          if (i <= 0) return o;
          n = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6;
          var a = new Array(),
            u = 3,
            c = n - 1,
            f = (1 << n) - 1;
          if (((a[1] = s.convert(this)), n > 1)) {
            var l = y();
            for (s.sqrTo(a[1], l); u <= f; )
              (a[u] = y()), s.mulTo(l, a[u - 2], a[u]), (u += 2);
          }
          var d,
            h,
            p = e.t - 1,
            g = !0,
            m = y();
          for (i = C(e[p]) - 1; p >= 0; ) {
            for (
              i >= c
                ? (d = (e[p] >> (i - c)) & f)
                : ((d = (e[p] & ((1 << (i + 1)) - 1)) << (c - i)),
                  p > 0 && (d |= e[p - 1] >> (this.DB + i - c))),
                u = n;
              0 == (1 & d);

            )
              (d >>= 1), --u;
            if (((i -= u) < 0 && ((i += this.DB), --p), g))
              a[d].copyTo(o), (g = !1);
            else {
              for (; u > 1; ) s.sqrTo(o, m), s.sqrTo(m, o), (u -= 2);
              u > 0 ? s.sqrTo(o, m) : ((h = o), (o = m), (m = h)),
                s.mulTo(m, a[d], o);
            }
            for (; p >= 0 && 0 == (e[p] & (1 << i)); )
              s.sqrTo(o, m),
                (h = o),
                (o = m),
                (m = h),
                --i < 0 && ((i = this.DB - 1), --p);
          }
          var v = s.revert(o);
          return r(null, v), v;
        }),
        (g.ZERO = A(0)),
        (g.ONE = A(1));
      var k = /^[89a-f]/i,
        P = (function () {
          function e(e) {
            (this.N = new p(
              "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF",
              16
            )),
              (this.g = new p("2", 16)),
              (this.k = new p(
                this.hexHash("" + this.padHex(this.N) + this.padHex(this.g)),
                16
              )),
              (this.smallAValue = this.generateRandomSmallA()),
              this.getLargeAValue(function () {}),
              (this.infoBits = i.Buffer.from("Caldera Derived Key", "utf8")),
              (this.poolName = e);
          }
          var t = e.prototype;
          return (
            (t.getSmallAValue = function () {
              return this.smallAValue;
            }),
            (t.getLargeAValue = function (e) {
              var t = this;
              this.largeAValue
                ? e(null, this.largeAValue)
                : this.calculateA(this.smallAValue, function (r, n) {
                    r && e(r, null),
                      (t.largeAValue = n),
                      e(null, t.largeAValue);
                  });
            }),
            (t.generateRandomSmallA = function () {
              var e = E(128).toString("hex");
              return new p(e, 16);
            }),
            (t.generateRandomString = function () {
              return E(40).toString("base64");
            }),
            (t.getRandomPassword = function () {
              return this.randomPassword;
            }),
            (t.getSaltDevices = function () {
              return this.SaltToHashDevices;
            }),
            (t.getVerifierDevices = function () {
              return this.verifierDevices;
            }),
            (t.generateHashDevice = function (e, t, r) {
              var n = this;
              this.randomPassword = this.generateRandomString();
              var i = "" + e + t + ":" + this.randomPassword,
                o = this.hash(i),
                s = E(16).toString("hex");
              (this.SaltToHashDevices = this.padHex(new p(s, 16))),
                this.g.modPow(
                  new p(this.hexHash(this.SaltToHashDevices + o), 16),
                  this.N,
                  function (e, t) {
                    e && r(e, null),
                      (n.verifierDevices = n.padHex(t)),
                      r(null, null);
                  }
                );
            }),
            (t.calculateA = function (e, t) {
              var r = this;
              this.g.modPow(e, this.N, function (e, n) {
                e && t(e, null),
                  n.mod(r.N).equals(p.ZERO) &&
                    t(
                      new Error("Illegal paramater. A mod N cannot be 0."),
                      null
                    ),
                  t(null, n);
              });
            }),
            (t.calculateU = function (e, t) {
              return (
                (this.UHexHash = this.hexHash(this.padHex(e) + this.padHex(t))),
                new p(this.UHexHash, 16)
              );
            }),
            (t.hash = function (e) {
              var t = e instanceof i.Buffer ? s.a.lib.WordArray.create(e) : e,
                r = u()(t).toString();
              return new Array(64 - r.length).join("0") + r;
            }),
            (t.hexHash = function (e) {
              return this.hash(i.Buffer.from(e, "hex"));
            }),
            (t.computehkdf = function (e, t) {
              var r = s.a.lib.WordArray.create(
                  i.Buffer.concat([
                    this.infoBits,
                    i.Buffer.from(String.fromCharCode(1), "utf8"),
                  ])
                ),
                n = e instanceof i.Buffer ? s.a.lib.WordArray.create(e) : e,
                o = t instanceof i.Buffer ? s.a.lib.WordArray.create(t) : t,
                a = f()(n, o),
                u = f()(r, a);
              return i.Buffer.from(u.toString(), "hex").slice(0, 16);
            }),
            (t.getPasswordAuthenticationKey = function (e, t, r, n, o) {
              var s = this;
              if (r.mod(this.N).equals(p.ZERO))
                throw new Error("B cannot be zero.");
              if (
                ((this.UValue = this.calculateU(this.largeAValue, r)),
                this.UValue.equals(p.ZERO))
              )
                throw new Error("U cannot be zero.");
              var a = "" + this.poolName + e + ":" + t,
                u = this.hash(a),
                c = new p(this.hexHash(this.padHex(n) + u), 16);
              this.calculateS(c, r, function (e, t) {
                e && o(e, null);
                var r = s.computehkdf(
                  i.Buffer.from(s.padHex(t), "hex"),
                  i.Buffer.from(s.padHex(s.UValue), "hex")
                );
                o(null, r);
              });
            }),
            (t.calculateS = function (e, t, r) {
              var n = this;
              this.g.modPow(e, this.N, function (i, o) {
                i && r(i, null),
                  t
                    .subtract(n.k.multiply(o))
                    .modPow(
                      n.smallAValue.add(n.UValue.multiply(e)),
                      n.N,
                      function (e, t) {
                        e && r(e, null), r(null, t.mod(n.N));
                      }
                    );
              });
            }),
            (t.getNewPasswordRequiredChallengeUserAttributePrefix =
              function () {
                return "userAttributes.";
              }),
            (t.padHex = function (e) {
              if (!(e instanceof p)) throw new Error("Not a BigInteger");
              var t = e.compareTo(p.ZERO) < 0,
                r = e.abs().toString(16);
              if (
                ((r = r.length % 2 !== 0 ? "0" + r : r),
                (r = k.test(r) ? "00" + r : r),
                t)
              ) {
                var n = r
                  .split("")
                  .map(function (e) {
                    var t = 15 & ~parseInt(e, 16);
                    return "0123456789ABCDEF".charAt(t);
                  })
                  .join("");
                (r = new p(n, 16).add(p.ONE).toString(16))
                  .toUpperCase()
                  .startsWith("FF8") && (r = r.substring(2));
              }
              return r;
            }),
            e
          );
        })(),
        x = (function () {
          function e(e) {
            (this.jwtToken = e || ""), (this.payload = this.decodePayload());
          }
          var t = e.prototype;
          return (
            (t.getJwtToken = function () {
              return this.jwtToken;
            }),
            (t.getExpiration = function () {
              return this.payload.exp;
            }),
            (t.getIssuedAt = function () {
              return this.payload.iat;
            }),
            (t.decodePayload = function () {
              var e = this.jwtToken.split(".")[1];
              try {
                return JSON.parse(i.Buffer.from(e, "base64").toString("utf8"));
              } catch (t) {
                return {};
              }
            }),
            e
          );
        })();
      function I(e, t) {
        return (I =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var j = (function (e) {
        var t, r;
        function n(t) {
          var r = (void 0 === t ? {} : t).AccessToken;
          return e.call(this, r || "") || this;
        }
        return (
          (r = e),
          ((t = n).prototype = Object.create(r.prototype)),
          (t.prototype.constructor = t),
          I(t, r),
          n
        );
      })(x);
      function T(e, t) {
        return (T =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var R = (function (e) {
          var t, r;
          function n(t) {
            var r = (void 0 === t ? {} : t).IdToken;
            return e.call(this, r || "") || this;
          }
          return (
            (r = e),
            ((t = n).prototype = Object.create(r.prototype)),
            (t.prototype.constructor = t),
            T(t, r),
            n
          );
        })(x),
        M = (function () {
          function e(e) {
            var t = (void 0 === e ? {} : e).RefreshToken;
            this.token = t || "";
          }
          return (
            (e.prototype.getToken = function () {
              return this.token;
            }),
            e
          );
        })(),
        U = r("ETIr"),
        D = r.n(U),
        F = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              r = t.IdToken,
              n = t.RefreshToken,
              i = t.AccessToken,
              o = t.ClockDrift;
            if (null == i || null == r)
              throw new Error("Id token and Access Token must be present.");
            (this.idToken = r),
              (this.refreshToken = n),
              (this.accessToken = i),
              (this.clockDrift = void 0 === o ? this.calculateClockDrift() : o);
          }
          var t = e.prototype;
          return (
            (t.getIdToken = function () {
              return this.idToken;
            }),
            (t.getRefreshToken = function () {
              return this.refreshToken;
            }),
            (t.getAccessToken = function () {
              return this.accessToken;
            }),
            (t.getClockDrift = function () {
              return this.clockDrift;
            }),
            (t.calculateClockDrift = function () {
              return (
                Math.floor(new Date() / 1e3) -
                Math.min(
                  this.accessToken.getIssuedAt(),
                  this.idToken.getIssuedAt()
                )
              );
            }),
            (t.isValid = function () {
              var e = Math.floor(new Date() / 1e3) - this.clockDrift;
              return (
                e < this.accessToken.getExpiration() &&
                e < this.idToken.getExpiration()
              );
            }),
            e
          );
        })(),
        N = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        B = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        L = (function () {
          function e() {}
          return (
            (e.prototype.getNowString = function () {
              var e = new Date(),
                t = B[e.getUTCDay()],
                r = N[e.getUTCMonth()],
                n = e.getUTCDate(),
                i = e.getUTCHours();
              i < 10 && (i = "0" + i);
              var o = e.getUTCMinutes();
              o < 10 && (o = "0" + o);
              var s = e.getUTCSeconds();
              return (
                s < 10 && (s = "0" + s),
                t +
                  " " +
                  r +
                  " " +
                  n +
                  " " +
                  i +
                  ":" +
                  o +
                  ":" +
                  s +
                  " UTC " +
                  e.getUTCFullYear()
              );
            }),
            e
          );
        })(),
        z = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              r = t.Name,
              n = t.Value;
            (this.Name = r || ""), (this.Value = n || "");
          }
          var t = e.prototype;
          return (
            (t.getValue = function () {
              return this.Value;
            }),
            (t.setValue = function (e) {
              return (this.Value = e), this;
            }),
            (t.getName = function () {
              return this.Name;
            }),
            (t.setName = function (e) {
              return (this.Name = e), this;
            }),
            (t.toString = function () {
              return JSON.stringify(this);
            }),
            (t.toJSON = function () {
              return { Name: this.Name, Value: this.Value };
            }),
            e
          );
        })(),
        H = {},
        q = (function () {
          function e() {}
          return (
            (e.setItem = function (e, t) {
              return (H[e] = t), H[e];
            }),
            (e.getItem = function (e) {
              return Object.prototype.hasOwnProperty.call(H, e) ? H[e] : void 0;
            }),
            (e.removeItem = function (e) {
              return delete H[e];
            }),
            (e.clear = function () {
              return (H = {});
            }),
            e
          );
        })(),
        V = (function () {
          function e() {
            try {
              (this.storageWindow = window.localStorage),
                this.storageWindow.setItem("aws.cognito.test-ls", 1),
                this.storageWindow.removeItem("aws.cognito.test-ls");
            } catch (e) {
              this.storageWindow = q;
            }
          }
          return (
            (e.prototype.getStorage = function () {
              return this.storageWindow;
            }),
            e
          );
        })(),
        W = "undefined" !== typeof navigator ? navigator.userAgent : "nodejs",
        G = (function () {
          function e(e) {
            if (null == e || null == e.Username || null == e.Pool)
              throw new Error("Username and Pool information are required.");
            (this.username = e.Username || ""),
              (this.pool = e.Pool),
              (this.Session = null),
              (this.client = e.Pool.client),
              (this.signInUserSession = null),
              (this.authenticationFlowType = "USER_SRP_AUTH"),
              (this.storage = e.Storage || new V().getStorage()),
              (this.keyPrefix =
                "CognitoIdentityServiceProvider." + this.pool.getClientId()),
              (this.userDataKey =
                this.keyPrefix + "." + this.username + ".userData");
          }
          var t = e.prototype;
          return (
            (t.setSignInUserSession = function (e) {
              this.clearCachedUserData(),
                (this.signInUserSession = e),
                this.cacheTokens();
            }),
            (t.getSignInUserSession = function () {
              return this.signInUserSession;
            }),
            (t.getUsername = function () {
              return this.username;
            }),
            (t.getAuthenticationFlowType = function () {
              return this.authenticationFlowType;
            }),
            (t.setAuthenticationFlowType = function (e) {
              this.authenticationFlowType = e;
            }),
            (t.initiateAuth = function (e, t) {
              var r = this,
                n = e.getAuthParameters();
              n.USERNAME = this.username;
              var i =
                  0 !== Object.keys(e.getValidationData()).length
                    ? e.getValidationData()
                    : e.getClientMetadata(),
                o = {
                  AuthFlow: "CUSTOM_AUTH",
                  ClientId: this.pool.getClientId(),
                  AuthParameters: n,
                  ClientMetadata: i,
                };
              this.getUserContextData() &&
                (o.UserContextData = this.getUserContextData()),
                this.client.request("InitiateAuth", o, function (e, n) {
                  if (e) return t.onFailure(e);
                  var i = n.ChallengeName,
                    o = n.ChallengeParameters;
                  return "CUSTOM_CHALLENGE" === i
                    ? ((r.Session = n.Session), t.customChallenge(o))
                    : ((r.signInUserSession = r.getCognitoUserSession(
                        n.AuthenticationResult
                      )),
                      r.cacheTokens(),
                      t.onSuccess(r.signInUserSession));
                });
            }),
            (t.authenticateUser = function (e, t) {
              return "USER_PASSWORD_AUTH" === this.authenticationFlowType
                ? this.authenticateUserPlainUsernamePassword(e, t)
                : "USER_SRP_AUTH" === this.authenticationFlowType ||
                  "CUSTOM_AUTH" === this.authenticationFlowType
                ? this.authenticateUserDefaultAuth(e, t)
                : t.onFailure(
                    new Error("Authentication flow type is invalid.")
                  );
            }),
            (t.authenticateUserDefaultAuth = function (e, t) {
              var r,
                n,
                o = this,
                a = new P(this.pool.getUserPoolId().split("_")[1]),
                u = new L(),
                c = {};
              null != this.deviceKey && (c.DEVICE_KEY = this.deviceKey),
                (c.USERNAME = this.username),
                a.getLargeAValue(function (l, d) {
                  l && t.onFailure(l),
                    (c.SRP_A = d.toString(16)),
                    "CUSTOM_AUTH" === o.authenticationFlowType &&
                      (c.CHALLENGE_NAME = "SRP_A");
                  var h =
                      0 !== Object.keys(e.getValidationData()).length
                        ? e.getValidationData()
                        : e.getClientMetadata(),
                    g = {
                      AuthFlow: o.authenticationFlowType,
                      ClientId: o.pool.getClientId(),
                      AuthParameters: c,
                      ClientMetadata: h,
                    };
                  o.getUserContextData(o.username) &&
                    (g.UserContextData = o.getUserContextData(o.username)),
                    o.client.request("InitiateAuth", g, function (c, l) {
                      if (c) return t.onFailure(c);
                      var d = l.ChallengeParameters;
                      (o.username = d.USER_ID_FOR_SRP),
                        (o.userDataKey =
                          o.keyPrefix + "." + o.username + ".userData"),
                        (r = new p(d.SRP_B, 16)),
                        (n = new p(d.SALT, 16)),
                        o.getCachedDeviceKeyAndPassword(),
                        a.getPasswordAuthenticationKey(
                          o.username,
                          e.getPassword(),
                          r,
                          n,
                          function (e, r) {
                            e && t.onFailure(e);
                            var n = u.getNowString(),
                              c = s.a.lib.WordArray.create(
                                i.Buffer.concat([
                                  i.Buffer.from(
                                    o.pool.getUserPoolId().split("_")[1],
                                    "utf8"
                                  ),
                                  i.Buffer.from(o.username, "utf8"),
                                  i.Buffer.from(d.SECRET_BLOCK, "base64"),
                                  i.Buffer.from(n, "utf8"),
                                ])
                              ),
                              p = s.a.lib.WordArray.create(r),
                              g = D.a.stringify(f()(c, p)),
                              y = {};
                            (y.USERNAME = o.username),
                              (y.PASSWORD_CLAIM_SECRET_BLOCK = d.SECRET_BLOCK),
                              (y.TIMESTAMP = n),
                              (y.PASSWORD_CLAIM_SIGNATURE = g),
                              null != o.deviceKey &&
                                (y.DEVICE_KEY = o.deviceKey);
                            var m = {
                              ChallengeName: "PASSWORD_VERIFIER",
                              ClientId: o.pool.getClientId(),
                              ChallengeResponses: y,
                              Session: l.Session,
                              ClientMetadata: h,
                            };
                            o.getUserContextData() &&
                              (m.UserContextData = o.getUserContextData()),
                              (function e(t, r) {
                                return o.client.request(
                                  "RespondToAuthChallenge",
                                  t,
                                  function (n, i) {
                                    return n &&
                                      "ResourceNotFoundException" === n.code &&
                                      -1 !==
                                        n.message
                                          .toLowerCase()
                                          .indexOf("device")
                                      ? ((y.DEVICE_KEY = null),
                                        (o.deviceKey = null),
                                        (o.randomPassword = null),
                                        (o.deviceGroupKey = null),
                                        o.clearCachedDeviceKeyAndPassword(),
                                        e(t, r))
                                      : r(n, i);
                                  }
                                );
                              })(m, function (e, r) {
                                return e
                                  ? t.onFailure(e)
                                  : o.authenticateUserInternal(r, a, t);
                              });
                          }
                        );
                    });
                });
            }),
            (t.authenticateUserPlainUsernamePassword = function (e, t) {
              var r = this,
                n = {};
              if (
                ((n.USERNAME = this.username),
                (n.PASSWORD = e.getPassword()),
                n.PASSWORD)
              ) {
                var i = new P(this.pool.getUserPoolId().split("_")[1]);
                this.getCachedDeviceKeyAndPassword(),
                  null != this.deviceKey && (n.DEVICE_KEY = this.deviceKey);
                var o =
                    0 !== Object.keys(e.getValidationData()).length
                      ? e.getValidationData()
                      : e.getClientMetadata(),
                  s = {
                    AuthFlow: "USER_PASSWORD_AUTH",
                    ClientId: this.pool.getClientId(),
                    AuthParameters: n,
                    ClientMetadata: o,
                  };
                this.getUserContextData(this.username) &&
                  (s.UserContextData = this.getUserContextData(this.username)),
                  this.client.request("InitiateAuth", s, function (e, n) {
                    return e
                      ? t.onFailure(e)
                      : r.authenticateUserInternal(n, i, t);
                  });
              } else t.onFailure(new Error("PASSWORD parameter is required"));
            }),
            (t.authenticateUserInternal = function (e, t, r) {
              var n = this,
                o = e.ChallengeName,
                s = e.ChallengeParameters;
              if ("SMS_MFA" === o)
                return (this.Session = e.Session), r.mfaRequired(o, s);
              if ("SELECT_MFA_TYPE" === o)
                return (this.Session = e.Session), r.selectMFAType(o, s);
              if ("MFA_SETUP" === o)
                return (this.Session = e.Session), r.mfaSetup(o, s);
              if ("SOFTWARE_TOKEN_MFA" === o)
                return (this.Session = e.Session), r.totpRequired(o, s);
              if ("CUSTOM_CHALLENGE" === o)
                return (this.Session = e.Session), r.customChallenge(s);
              if ("NEW_PASSWORD_REQUIRED" === o) {
                this.Session = e.Session;
                var a = null,
                  u = null,
                  c = [],
                  f = t.getNewPasswordRequiredChallengeUserAttributePrefix();
                if (
                  (s &&
                    ((a = JSON.parse(e.ChallengeParameters.userAttributes)),
                    (u = JSON.parse(e.ChallengeParameters.requiredAttributes))),
                  u)
                )
                  for (var l = 0; l < u.length; l++)
                    c[l] = u[l].substr(f.length);
                return r.newPasswordRequired(a, c);
              }
              if ("DEVICE_SRP_AUTH" !== o) {
                (this.signInUserSession = this.getCognitoUserSession(
                  e.AuthenticationResult
                )),
                  (this.challengeName = o),
                  this.cacheTokens();
                var d = e.AuthenticationResult.NewDeviceMetadata;
                if (null == d) return r.onSuccess(this.signInUserSession);
                t.generateHashDevice(
                  e.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,
                  e.AuthenticationResult.NewDeviceMetadata.DeviceKey,
                  function (o) {
                    if (o) return r.onFailure(o);
                    var s = {
                      Salt: i.Buffer.from(t.getSaltDevices(), "hex").toString(
                        "base64"
                      ),
                      PasswordVerifier: i.Buffer.from(
                        t.getVerifierDevices(),
                        "hex"
                      ).toString("base64"),
                    };
                    (n.verifierDevices = s.PasswordVerifier),
                      (n.deviceGroupKey = d.DeviceGroupKey),
                      (n.randomPassword = t.getRandomPassword()),
                      n.client.request(
                        "ConfirmDevice",
                        {
                          DeviceKey: d.DeviceKey,
                          AccessToken: n.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                          DeviceSecretVerifierConfig: s,
                          DeviceName: W,
                        },
                        function (t, i) {
                          return t
                            ? r.onFailure(t)
                            : ((n.deviceKey =
                                e.AuthenticationResult.NewDeviceMetadata.DeviceKey),
                              n.cacheDeviceKeyAndPassword(),
                              !0 === i.UserConfirmationNecessary
                                ? r.onSuccess(
                                    n.signInUserSession,
                                    i.UserConfirmationNecessary
                                  )
                                : r.onSuccess(n.signInUserSession));
                        }
                      );
                  }
                );
              } else this.getDeviceResponse(r);
            }),
            (t.completeNewPasswordChallenge = function (e, t, r, n) {
              var i = this;
              if (!e)
                return r.onFailure(new Error("New password is required."));
              var o = new P(this.pool.getUserPoolId().split("_")[1]),
                s = o.getNewPasswordRequiredChallengeUserAttributePrefix(),
                a = {};
              t &&
                Object.keys(t).forEach(function (e) {
                  a[s + e] = t[e];
                }),
                (a.NEW_PASSWORD = e),
                (a.USERNAME = this.username);
              var u = {
                ChallengeName: "NEW_PASSWORD_REQUIRED",
                ClientId: this.pool.getClientId(),
                ChallengeResponses: a,
                Session: this.Session,
                ClientMetadata: n,
              };
              this.getUserContextData() &&
                (u.UserContextData = this.getUserContextData()),
                this.client.request(
                  "RespondToAuthChallenge",
                  u,
                  function (e, t) {
                    return e
                      ? r.onFailure(e)
                      : i.authenticateUserInternal(t, o, r);
                  }
                );
            }),
            (t.getDeviceResponse = function (e, t) {
              var r = this,
                n = new P(this.deviceGroupKey),
                o = new L(),
                a = {};
              (a.USERNAME = this.username),
                (a.DEVICE_KEY = this.deviceKey),
                n.getLargeAValue(function (u, c) {
                  u && e.onFailure(u), (a.SRP_A = c.toString(16));
                  var l = {
                    ChallengeName: "DEVICE_SRP_AUTH",
                    ClientId: r.pool.getClientId(),
                    ChallengeResponses: a,
                    ClientMetadata: t,
                  };
                  r.getUserContextData() &&
                    (l.UserContextData = r.getUserContextData()),
                    r.client.request(
                      "RespondToAuthChallenge",
                      l,
                      function (t, a) {
                        if (t) return e.onFailure(t);
                        var u = a.ChallengeParameters,
                          c = new p(u.SRP_B, 16),
                          l = new p(u.SALT, 16);
                        n.getPasswordAuthenticationKey(
                          r.deviceKey,
                          r.randomPassword,
                          c,
                          l,
                          function (t, n) {
                            if (t) return e.onFailure(t);
                            var c = o.getNowString(),
                              l = s.a.lib.WordArray.create(
                                i.Buffer.concat([
                                  i.Buffer.from(r.deviceGroupKey, "utf8"),
                                  i.Buffer.from(r.deviceKey, "utf8"),
                                  i.Buffer.from(u.SECRET_BLOCK, "base64"),
                                  i.Buffer.from(c, "utf8"),
                                ])
                              ),
                              d = s.a.lib.WordArray.create(n),
                              h = D.a.stringify(f()(l, d)),
                              p = {};
                            (p.USERNAME = r.username),
                              (p.PASSWORD_CLAIM_SECRET_BLOCK = u.SECRET_BLOCK),
                              (p.TIMESTAMP = c),
                              (p.PASSWORD_CLAIM_SIGNATURE = h),
                              (p.DEVICE_KEY = r.deviceKey);
                            var g = {
                              ChallengeName: "DEVICE_PASSWORD_VERIFIER",
                              ClientId: r.pool.getClientId(),
                              ChallengeResponses: p,
                              Session: a.Session,
                            };
                            r.getUserContextData() &&
                              (g.UserContextData = r.getUserContextData()),
                              r.client.request(
                                "RespondToAuthChallenge",
                                g,
                                function (t, n) {
                                  return t
                                    ? e.onFailure(t)
                                    : ((r.signInUserSession =
                                        r.getCognitoUserSession(
                                          n.AuthenticationResult
                                        )),
                                      r.cacheTokens(),
                                      e.onSuccess(r.signInUserSession));
                                }
                              );
                          }
                        );
                      }
                    );
                });
            }),
            (t.confirmRegistration = function (e, t, r, n) {
              var i = {
                ClientId: this.pool.getClientId(),
                ConfirmationCode: e,
                Username: this.username,
                ForceAliasCreation: t,
                ClientMetadata: n,
              };
              this.getUserContextData() &&
                (i.UserContextData = this.getUserContextData()),
                this.client.request("ConfirmSignUp", i, function (e) {
                  return e ? r(e, null) : r(null, "SUCCESS");
                });
            }),
            (t.sendCustomChallengeAnswer = function (e, t, r) {
              var n = this,
                i = {};
              (i.USERNAME = this.username), (i.ANSWER = e);
              var o = new P(this.pool.getUserPoolId().split("_")[1]);
              this.getCachedDeviceKeyAndPassword(),
                null != this.deviceKey && (i.DEVICE_KEY = this.deviceKey);
              var s = {
                ChallengeName: "CUSTOM_CHALLENGE",
                ChallengeResponses: i,
                ClientId: this.pool.getClientId(),
                Session: this.Session,
                ClientMetadata: r,
              };
              this.getUserContextData() &&
                (s.UserContextData = this.getUserContextData()),
                this.client.request(
                  "RespondToAuthChallenge",
                  s,
                  function (e, r) {
                    return e
                      ? t.onFailure(e)
                      : n.authenticateUserInternal(r, o, t);
                  }
                );
            }),
            (t.sendMFACode = function (e, t, r, n) {
              var o = this,
                s = {};
              (s.USERNAME = this.username), (s.SMS_MFA_CODE = e);
              var a = r || "SMS_MFA";
              "SOFTWARE_TOKEN_MFA" === a && (s.SOFTWARE_TOKEN_MFA_CODE = e),
                null != this.deviceKey && (s.DEVICE_KEY = this.deviceKey);
              var u = {
                ChallengeName: a,
                ChallengeResponses: s,
                ClientId: this.pool.getClientId(),
                Session: this.Session,
                ClientMetadata: n,
              };
              this.getUserContextData() &&
                (u.UserContextData = this.getUserContextData()),
                this.client.request(
                  "RespondToAuthChallenge",
                  u,
                  function (e, r) {
                    if (e) return t.onFailure(e);
                    if ("DEVICE_SRP_AUTH" !== r.ChallengeName) {
                      if (
                        ((o.signInUserSession = o.getCognitoUserSession(
                          r.AuthenticationResult
                        )),
                        o.cacheTokens(),
                        null == r.AuthenticationResult.NewDeviceMetadata)
                      )
                        return t.onSuccess(o.signInUserSession);
                      var n = new P(o.pool.getUserPoolId().split("_")[1]);
                      n.generateHashDevice(
                        r.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,
                        r.AuthenticationResult.NewDeviceMetadata.DeviceKey,
                        function (e) {
                          if (e) return t.onFailure(e);
                          var s = {
                            Salt: i.Buffer.from(
                              n.getSaltDevices(),
                              "hex"
                            ).toString("base64"),
                            PasswordVerifier: i.Buffer.from(
                              n.getVerifierDevices(),
                              "hex"
                            ).toString("base64"),
                          };
                          (o.verifierDevices = s.PasswordVerifier),
                            (o.deviceGroupKey =
                              r.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey),
                            (o.randomPassword = n.getRandomPassword()),
                            o.client.request(
                              "ConfirmDevice",
                              {
                                DeviceKey:
                                  r.AuthenticationResult.NewDeviceMetadata
                                    .DeviceKey,
                                AccessToken: o.signInUserSession
                                  .getAccessToken()
                                  .getJwtToken(),
                                DeviceSecretVerifierConfig: s,
                                DeviceName: W,
                              },
                              function (e, n) {
                                return e
                                  ? t.onFailure(e)
                                  : ((o.deviceKey =
                                      r.AuthenticationResult.NewDeviceMetadata.DeviceKey),
                                    o.cacheDeviceKeyAndPassword(),
                                    !0 === n.UserConfirmationNecessary
                                      ? t.onSuccess(
                                          o.signInUserSession,
                                          n.UserConfirmationNecessary
                                        )
                                      : t.onSuccess(o.signInUserSession));
                              }
                            );
                        }
                      );
                    } else o.getDeviceResponse(t);
                  }
                );
            }),
            (t.changePassword = function (e, t, r, n) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return r(new Error("User is not authenticated"), null);
              this.client.request(
                "ChangePassword",
                {
                  PreviousPassword: e,
                  ProposedPassword: t,
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  ClientMetadata: n,
                },
                function (e) {
                  return e ? r(e, null) : r(null, "SUCCESS");
                }
              );
            }),
            (t.enableMFA = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e(new Error("User is not authenticated"), null);
              var t = [];
              t.push({ DeliveryMedium: "SMS", AttributeName: "phone_number" }),
                this.client.request(
                  "SetUserSettings",
                  {
                    MFAOptions: t,
                    AccessToken: this.signInUserSession
                      .getAccessToken()
                      .getJwtToken(),
                  },
                  function (t) {
                    return t ? e(t, null) : e(null, "SUCCESS");
                  }
                );
            }),
            (t.setUserMfaPreference = function (e, t, r) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return r(new Error("User is not authenticated"), null);
              this.client.request(
                "SetUserMFAPreference",
                {
                  SMSMfaSettings: e,
                  SoftwareTokenMfaSettings: t,
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (e) {
                  return e ? r(e, null) : r(null, "SUCCESS");
                }
              );
            }),
            (t.disableMFA = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e(new Error("User is not authenticated"), null);
              this.client.request(
                "SetUserSettings",
                {
                  MFAOptions: [],
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (t) {
                  return t ? e(t, null) : e(null, "SUCCESS");
                }
              );
            }),
            (t.deleteUser = function (e, t) {
              var r = this;
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e(new Error("User is not authenticated"), null);
              this.client.request(
                "DeleteUser",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  ClientMetadata: t,
                },
                function (t) {
                  return t
                    ? e(t, null)
                    : (r.clearCachedUser(), e(null, "SUCCESS"));
                }
              );
            }),
            (t.updateAttributes = function (e, t, r) {
              var n = this;
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return t(new Error("User is not authenticated"), null);
              this.client.request(
                "UpdateUserAttributes",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  UserAttributes: e,
                  ClientMetadata: r,
                },
                function (e) {
                  return e
                    ? t(e, null)
                    : n.getUserData(
                        function () {
                          return t(null, "SUCCESS");
                        },
                        { bypassCache: !0 }
                      );
                }
              );
            }),
            (t.getUserAttributes = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e(new Error("User is not authenticated"), null);
              this.client.request(
                "GetUser",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (t, r) {
                  if (t) return e(t, null);
                  for (var n = [], i = 0; i < r.UserAttributes.length; i++) {
                    var o = {
                        Name: r.UserAttributes[i].Name,
                        Value: r.UserAttributes[i].Value,
                      },
                      s = new z(o);
                    n.push(s);
                  }
                  return e(null, n);
                }
              );
            }),
            (t.getMFAOptions = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e(new Error("User is not authenticated"), null);
              this.client.request(
                "GetUser",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (t, r) {
                  return t ? e(t, null) : e(null, r.MFAOptions);
                }
              );
            }),
            (t.createGetUserRequest = function () {
              return this.client.promisifyRequest("GetUser", {
                AccessToken: this.signInUserSession
                  .getAccessToken()
                  .getJwtToken(),
              });
            }),
            (t.refreshSessionIfPossible = function (e) {
              var t = this;
              return (
                void 0 === e && (e = {}),
                new Promise(function (r) {
                  var n = t.signInUserSession.getRefreshToken();
                  n && n.getToken()
                    ? t.refreshSession(n, r, e.clientMetadata)
                    : r();
                })
              );
            }),
            (t.getUserData = function (e, t) {
              var r = this;
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return (
                  this.clearCachedUserData(),
                  e(new Error("User is not authenticated"), null)
                );
              var n = this.getUserDataFromCache();
              if (n)
                if (this.isFetchUserDataAndTokenRequired(t))
                  this.fetchUserData()
                    .then(function (e) {
                      return r.refreshSessionIfPossible(t).then(function () {
                        return e;
                      });
                    })
                    .then(function (t) {
                      return e(null, t);
                    })
                    .catch(e);
                else
                  try {
                    return void e(null, JSON.parse(n));
                  } catch (i) {
                    return this.clearCachedUserData(), void e(i, null);
                  }
              else
                this.fetchUserData()
                  .then(function (t) {
                    e(null, t);
                  })
                  .catch(e);
            }),
            (t.getUserDataFromCache = function () {
              return this.storage.getItem(this.userDataKey);
            }),
            (t.isFetchUserDataAndTokenRequired = function (e) {
              var t = (e || {}).bypassCache;
              return void 0 !== t && t;
            }),
            (t.fetchUserData = function () {
              var e = this;
              return this.createGetUserRequest().then(function (t) {
                return e.cacheUserData(t), t;
              });
            }),
            (t.deleteAttributes = function (e, t) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return t(new Error("User is not authenticated"), null);
              this.client.request(
                "DeleteUserAttributes",
                {
                  UserAttributeNames: e,
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (e) {
                  return e ? t(e, null) : t(null, "SUCCESS");
                }
              );
            }),
            (t.resendConfirmationCode = function (e, t) {
              var r = {
                ClientId: this.pool.getClientId(),
                Username: this.username,
                ClientMetadata: t,
              };
              this.client.request("ResendConfirmationCode", r, function (t, r) {
                return t ? e(t, null) : e(null, r);
              });
            }),
            (t.getSession = function (e, t) {
              if ((void 0 === t && (t = {}), null == this.username))
                return e(
                  new Error("Username is null. Cannot retrieve a new session"),
                  null
                );
              if (
                null != this.signInUserSession &&
                this.signInUserSession.isValid()
              )
                return e(null, this.signInUserSession);
              var r =
                  "CognitoIdentityServiceProvider." +
                  this.pool.getClientId() +
                  "." +
                  this.username,
                n = r + ".idToken",
                i = r + ".accessToken",
                o = r + ".refreshToken",
                s = r + ".clockDrift";
              if (this.storage.getItem(n)) {
                var a = new R({ IdToken: this.storage.getItem(n) }),
                  u = new j({ AccessToken: this.storage.getItem(i) }),
                  c = new M({ RefreshToken: this.storage.getItem(o) }),
                  f = parseInt(this.storage.getItem(s), 0) || 0,
                  l = new F({
                    IdToken: a,
                    AccessToken: u,
                    RefreshToken: c,
                    ClockDrift: f,
                  });
                if (l.isValid())
                  return (
                    (this.signInUserSession = l),
                    e(null, this.signInUserSession)
                  );
                if (!c.getToken())
                  return e(
                    new Error(
                      "Cannot retrieve a new session. Please authenticate."
                    ),
                    null
                  );
                this.refreshSession(c, e, t.clientMetadata);
              } else
                e(
                  new Error(
                    "Local storage is missing an ID Token, Please authenticate"
                  ),
                  null
                );
            }),
            (t.refreshSession = function (e, t, r) {
              var n = this,
                i = this.pool.wrapRefreshSessionCallback
                  ? this.pool.wrapRefreshSessionCallback(t)
                  : t,
                o = {};
              o.REFRESH_TOKEN = e.getToken();
              var s =
                  "CognitoIdentityServiceProvider." + this.pool.getClientId(),
                a = s + ".LastAuthUser";
              if (this.storage.getItem(a)) {
                this.username = this.storage.getItem(a);
                var u = s + "." + this.username + ".deviceKey";
                (this.deviceKey = this.storage.getItem(u)),
                  (o.DEVICE_KEY = this.deviceKey);
              }
              var c = {
                ClientId: this.pool.getClientId(),
                AuthFlow: "REFRESH_TOKEN_AUTH",
                AuthParameters: o,
                ClientMetadata: r,
              };
              this.getUserContextData() &&
                (c.UserContextData = this.getUserContextData()),
                this.client.request("InitiateAuth", c, function (t, r) {
                  if (t)
                    return (
                      "NotAuthorizedException" === t.code &&
                        n.clearCachedUser(),
                      i(t, null)
                    );
                  if (r) {
                    var o = r.AuthenticationResult;
                    return (
                      Object.prototype.hasOwnProperty.call(o, "RefreshToken") ||
                        (o.RefreshToken = e.getToken()),
                      (n.signInUserSession = n.getCognitoUserSession(o)),
                      n.cacheTokens(),
                      i(null, n.signInUserSession)
                    );
                  }
                });
            }),
            (t.cacheTokens = function () {
              var e =
                  "CognitoIdentityServiceProvider." + this.pool.getClientId(),
                t = e + "." + this.username + ".idToken",
                r = e + "." + this.username + ".accessToken",
                n = e + "." + this.username + ".refreshToken",
                i = e + "." + this.username + ".clockDrift",
                o = e + ".LastAuthUser";
              this.storage.setItem(
                t,
                this.signInUserSession.getIdToken().getJwtToken()
              ),
                this.storage.setItem(
                  r,
                  this.signInUserSession.getAccessToken().getJwtToken()
                ),
                this.storage.setItem(
                  n,
                  this.signInUserSession.getRefreshToken().getToken()
                ),
                this.storage.setItem(
                  i,
                  "" + this.signInUserSession.getClockDrift()
                ),
                this.storage.setItem(o, this.username);
            }),
            (t.cacheUserData = function (e) {
              this.storage.setItem(this.userDataKey, JSON.stringify(e));
            }),
            (t.clearCachedUserData = function () {
              this.storage.removeItem(this.userDataKey);
            }),
            (t.clearCachedUser = function () {
              this.clearCachedTokens(), this.clearCachedUserData();
            }),
            (t.cacheDeviceKeyAndPassword = function () {
              var e =
                  "CognitoIdentityServiceProvider." +
                  this.pool.getClientId() +
                  "." +
                  this.username,
                t = e + ".deviceKey",
                r = e + ".randomPasswordKey",
                n = e + ".deviceGroupKey";
              this.storage.setItem(t, this.deviceKey),
                this.storage.setItem(r, this.randomPassword),
                this.storage.setItem(n, this.deviceGroupKey);
            }),
            (t.getCachedDeviceKeyAndPassword = function () {
              var e =
                  "CognitoIdentityServiceProvider." +
                  this.pool.getClientId() +
                  "." +
                  this.username,
                t = e + ".deviceKey",
                r = e + ".randomPasswordKey",
                n = e + ".deviceGroupKey";
              this.storage.getItem(t) &&
                ((this.deviceKey = this.storage.getItem(t)),
                (this.randomPassword = this.storage.getItem(r)),
                (this.deviceGroupKey = this.storage.getItem(n)));
            }),
            (t.clearCachedDeviceKeyAndPassword = function () {
              var e =
                  "CognitoIdentityServiceProvider." +
                  this.pool.getClientId() +
                  "." +
                  this.username,
                t = e + ".deviceKey",
                r = e + ".randomPasswordKey",
                n = e + ".deviceGroupKey";
              this.storage.removeItem(t),
                this.storage.removeItem(r),
                this.storage.removeItem(n);
            }),
            (t.clearCachedTokens = function () {
              var e =
                  "CognitoIdentityServiceProvider." + this.pool.getClientId(),
                t = e + "." + this.username + ".idToken",
                r = e + "." + this.username + ".accessToken",
                n = e + "." + this.username + ".refreshToken",
                i = e + ".LastAuthUser",
                o = e + "." + this.username + ".clockDrift";
              this.storage.removeItem(t),
                this.storage.removeItem(r),
                this.storage.removeItem(n),
                this.storage.removeItem(i),
                this.storage.removeItem(o);
            }),
            (t.getCognitoUserSession = function (e) {
              var t = new R(e),
                r = new j(e),
                n = new M(e);
              return new F({ IdToken: t, AccessToken: r, RefreshToken: n });
            }),
            (t.forgotPassword = function (e, t) {
              var r = {
                ClientId: this.pool.getClientId(),
                Username: this.username,
                ClientMetadata: t,
              };
              this.getUserContextData() &&
                (r.UserContextData = this.getUserContextData()),
                this.client.request("ForgotPassword", r, function (t, r) {
                  return t
                    ? e.onFailure(t)
                    : "function" === typeof e.inputVerificationCode
                    ? e.inputVerificationCode(r)
                    : e.onSuccess(r);
                });
            }),
            (t.confirmPassword = function (e, t, r, n) {
              var i = {
                ClientId: this.pool.getClientId(),
                Username: this.username,
                ConfirmationCode: e,
                Password: t,
                ClientMetadata: n,
              };
              this.getUserContextData() &&
                (i.UserContextData = this.getUserContextData()),
                this.client.request("ConfirmForgotPassword", i, function (e) {
                  return e ? r.onFailure(e) : r.onSuccess();
                });
            }),
            (t.getAttributeVerificationCode = function (e, t, r) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return t.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "GetUserAttributeVerificationCode",
                {
                  AttributeName: e,
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  ClientMetadata: r,
                },
                function (e, r) {
                  return e
                    ? t.onFailure(e)
                    : "function" === typeof t.inputVerificationCode
                    ? t.inputVerificationCode(r)
                    : t.onSuccess();
                }
              );
            }),
            (t.verifyAttribute = function (e, t, r) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return r.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "VerifyUserAttribute",
                {
                  AttributeName: e,
                  Code: t,
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (e) {
                  return e ? r.onFailure(e) : r.onSuccess("SUCCESS");
                }
              );
            }),
            (t.getDevice = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "GetDevice",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  DeviceKey: this.deviceKey,
                },
                function (t, r) {
                  return t ? e.onFailure(t) : e.onSuccess(r);
                }
              );
            }),
            (t.forgetSpecificDevice = function (e, t) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return t.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "ForgetDevice",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  DeviceKey: e,
                },
                function (e) {
                  return e ? t.onFailure(e) : t.onSuccess("SUCCESS");
                }
              );
            }),
            (t.forgetDevice = function (e) {
              var t = this;
              this.forgetSpecificDevice(this.deviceKey, {
                onFailure: e.onFailure,
                onSuccess: function (r) {
                  return (
                    (t.deviceKey = null),
                    (t.deviceGroupKey = null),
                    (t.randomPassword = null),
                    t.clearCachedDeviceKeyAndPassword(),
                    e.onSuccess(r)
                  );
                },
              });
            }),
            (t.setDeviceStatusRemembered = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "UpdateDeviceStatus",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  DeviceKey: this.deviceKey,
                  DeviceRememberedStatus: "remembered",
                },
                function (t) {
                  return t ? e.onFailure(t) : e.onSuccess("SUCCESS");
                }
              );
            }),
            (t.setDeviceStatusNotRemembered = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "UpdateDeviceStatus",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  DeviceKey: this.deviceKey,
                  DeviceRememberedStatus: "not_remembered",
                },
                function (t) {
                  return t ? e.onFailure(t) : e.onSuccess("SUCCESS");
                }
              );
            }),
            (t.listDevices = function (e, t, r) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return r.onFailure(new Error("User is not authenticated"));
              var n = {
                AccessToken: this.signInUserSession
                  .getAccessToken()
                  .getJwtToken(),
                Limit: e,
              };
              t && (n.PaginationToken = t),
                this.client.request("ListDevices", n, function (e, t) {
                  return e ? r.onFailure(e) : r.onSuccess(t);
                });
            }),
            (t.globalSignOut = function (e) {
              var t = this;
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "GlobalSignOut",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (r) {
                  return r
                    ? e.onFailure(r)
                    : (t.clearCachedUser(), e.onSuccess("SUCCESS"));
                }
              );
            }),
            (t.signOut = function () {
              (this.signInUserSession = null), this.clearCachedUser();
            }),
            (t.sendMFASelectionAnswer = function (e, t) {
              var r = this,
                n = {};
              (n.USERNAME = this.username), (n.ANSWER = e);
              var i = {
                ChallengeName: "SELECT_MFA_TYPE",
                ChallengeResponses: n,
                ClientId: this.pool.getClientId(),
                Session: this.Session,
              };
              this.getUserContextData() &&
                (i.UserContextData = this.getUserContextData()),
                this.client.request(
                  "RespondToAuthChallenge",
                  i,
                  function (n, i) {
                    return n
                      ? t.onFailure(n)
                      : ((r.Session = i.Session),
                        "SMS_MFA" === e
                          ? t.mfaRequired(
                              i.ChallengeName,
                              i.ChallengeParameters
                            )
                          : "SOFTWARE_TOKEN_MFA" === e
                          ? t.totpRequired(
                              i.ChallengeName,
                              i.ChallengeParameters
                            )
                          : void 0);
                  }
                );
            }),
            (t.getUserContextData = function () {
              return this.pool.getUserContextData(this.username);
            }),
            (t.associateSoftwareToken = function (e) {
              var t = this;
              null != this.signInUserSession && this.signInUserSession.isValid()
                ? this.client.request(
                    "AssociateSoftwareToken",
                    {
                      AccessToken: this.signInUserSession
                        .getAccessToken()
                        .getJwtToken(),
                    },
                    function (t, r) {
                      return t
                        ? e.onFailure(t)
                        : e.associateSecretCode(r.SecretCode);
                    }
                  )
                : this.client.request(
                    "AssociateSoftwareToken",
                    { Session: this.Session },
                    function (r, n) {
                      return r
                        ? e.onFailure(r)
                        : ((t.Session = n.Session),
                          e.associateSecretCode(n.SecretCode));
                    }
                  );
            }),
            (t.verifySoftwareToken = function (e, t, r) {
              var n = this;
              null != this.signInUserSession && this.signInUserSession.isValid()
                ? this.client.request(
                    "VerifySoftwareToken",
                    {
                      AccessToken: this.signInUserSession
                        .getAccessToken()
                        .getJwtToken(),
                      UserCode: e,
                      FriendlyDeviceName: t,
                    },
                    function (e, t) {
                      return e ? r.onFailure(e) : r.onSuccess(t);
                    }
                  )
                : this.client.request(
                    "VerifySoftwareToken",
                    {
                      Session: this.Session,
                      UserCode: e,
                      FriendlyDeviceName: t,
                    },
                    function (e, t) {
                      if (e) return r.onFailure(e);
                      n.Session = t.Session;
                      var i = {};
                      i.USERNAME = n.username;
                      var o = {
                        ChallengeName: "MFA_SETUP",
                        ClientId: n.pool.getClientId(),
                        ChallengeResponses: i,
                        Session: n.Session,
                      };
                      n.getUserContextData() &&
                        (o.UserContextData = n.getUserContextData()),
                        n.client.request(
                          "RespondToAuthChallenge",
                          o,
                          function (e, t) {
                            return e
                              ? r.onFailure(e)
                              : ((n.signInUserSession = n.getCognitoUserSession(
                                  t.AuthenticationResult
                                )),
                                n.cacheTokens(),
                                r.onSuccess(n.signInUserSession));
                          }
                        );
                    }
                  );
            }),
            e
          );
        })();
      r("vcXL");
      function K() {}
      K.prototype.userAgent = "aws-amplify/0.1.x js";
      var Y = function (e) {
          e &&
            (K.prototype.userAgent &&
              !K.prototype.userAgent.includes(e) &&
              (K.prototype.userAgent = K.prototype.userAgent.concat(" ", e)),
            (K.prototype.userAgent && "" !== K.prototype.userAgent) ||
              (K.prototype.userAgent = e));
        },
        $ = K;
      function J(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (J = function (e) {
          if (
            null === e ||
            ((r = e), -1 === Function.toString.call(r).indexOf("[native code]"))
          )
            return e;
          var r;
          if ("function" !== typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n);
          }
          function n() {
            return Z(e, arguments, ee(this).constructor);
          }
          return (
            (n.prototype = Object.create(e.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            Q(n, e)
          );
        })(e);
      }
      function Z(e, t, r) {
        return (Z = X()
          ? Reflect.construct
          : function (e, t, r) {
              var n = [null];
              n.push.apply(n, t);
              var i = new (Function.bind.apply(e, n))();
              return r && Q(i, r.prototype), i;
            }).apply(null, arguments);
      }
      function X() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function Q(e, t) {
        return (Q =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ee(e) {
        return (ee = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var te = (function (e) {
          var t, r;
          function n(t, r, n, i) {
            var o;
            return (
              ((o = e.call(this, t) || this).code = r),
              (o.name = n),
              (o.statusCode = i),
              o
            );
          }
          return (
            (r = e),
            ((t = n).prototype = Object.create(r.prototype)),
            (t.prototype.constructor = t),
            Q(t, r),
            n
          );
        })(J(Error)),
        re = (function () {
          function e(e, t, r) {
            this.endpoint = t || "https://cognito-idp." + e + ".amazonaws.com/";
            var n = (r || {}).credentials;
            this.fetchOptions = n ? { credentials: n } : {};
          }
          var t = e.prototype;
          return (
            (t.promisifyRequest = function (e, t) {
              var r = this;
              return new Promise(function (n, i) {
                r.request(e, t, function (e, t) {
                  e ? i(new te(e.message, e.code, e.name, e.statusCode)) : n(t);
                });
              });
            }),
            (t.request = function (e, t, r) {
              var n,
                i = {
                  "Content-Type": "application/x-amz-json-1.1",
                  "X-Amz-Target": "AWSCognitoIdentityProviderService." + e,
                  "X-Amz-User-Agent": $.prototype.userAgent,
                },
                o = Object.assign({}, this.fetchOptions, {
                  headers: i,
                  method: "POST",
                  mode: "cors",
                  cache: "no-cache",
                  body: JSON.stringify(t),
                });
              fetch(this.endpoint, o)
                .then(
                  function (e) {
                    return (n = e), e;
                  },
                  function (e) {
                    if (e instanceof TypeError)
                      throw new Error("Network error");
                    throw e;
                  }
                )
                .then(function (e) {
                  return e.json().catch(function () {
                    return {};
                  });
                })
                .then(function (e) {
                  if (n.ok) return r(null, e);
                  e;
                  var t = (e.__type || e.code).split("#").pop(),
                    i = {
                      code: t,
                      name: t,
                      message: e.message || e.Message || null,
                    };
                  return r(i);
                })
                .catch(function (e) {
                  if (!(n && n.headers && n.headers.get("x-amzn-errortype"))) {
                    if (e instanceof Error && "Network error" === e.message) {
                      var t = {
                        code: "NetworkError",
                        name: e.name,
                        message: e.message,
                      };
                      return r(t);
                    }
                    return r(e);
                  }
                  try {
                    var i = n.headers.get("x-amzn-errortype").split(":")[0],
                      o = {
                        code: i,
                        name: i,
                        statusCode: n.status,
                        message: n.status ? n.status.toString() : null,
                      };
                    return r(o);
                  } catch (s) {
                    return r(e);
                  }
                });
            }),
            e
          );
        })(),
        ne = (function () {
          function e(e, t) {
            var r = e || {},
              n = r.UserPoolId,
              i = r.ClientId,
              o = r.endpoint,
              s = r.fetchOptions,
              a = r.AdvancedSecurityDataCollectionFlag;
            if (!n || !i)
              throw new Error("Both UserPoolId and ClientId are required.");
            if (!/^[\w-]+_.+$/.test(n))
              throw new Error("Invalid UserPoolId format.");
            var u = n.split("_")[0];
            (this.userPoolId = n),
              (this.clientId = i),
              (this.client = new re(u, o, s)),
              (this.advancedSecurityDataCollectionFlag = !1 !== a),
              (this.storage = e.Storage || new V().getStorage()),
              t && (this.wrapRefreshSessionCallback = t);
          }
          var t = e.prototype;
          return (
            (t.getUserPoolId = function () {
              return this.userPoolId;
            }),
            (t.getClientId = function () {
              return this.clientId;
            }),
            (t.signUp = function (e, t, r, n, i, o) {
              var s = this,
                a = {
                  ClientId: this.clientId,
                  Username: e,
                  Password: t,
                  UserAttributes: r,
                  ValidationData: n,
                  ClientMetadata: o,
                };
              this.getUserContextData(e) &&
                (a.UserContextData = this.getUserContextData(e)),
                this.client.request("SignUp", a, function (t, r) {
                  if (t) return i(t, null);
                  var n = { Username: e, Pool: s, Storage: s.storage },
                    o = {
                      user: new G(n),
                      userConfirmed: r.UserConfirmed,
                      userSub: r.UserSub,
                      codeDeliveryDetails: r.CodeDeliveryDetails,
                    };
                  return i(null, o);
                });
            }),
            (t.getCurrentUser = function () {
              var e =
                  "CognitoIdentityServiceProvider." +
                  this.clientId +
                  ".LastAuthUser",
                t = this.storage.getItem(e);
              if (t) {
                var r = { Username: t, Pool: this, Storage: this.storage };
                return new G(r);
              }
              return null;
            }),
            (t.getUserContextData = function (e) {
              if ("undefined" !== typeof AmazonCognitoAdvancedSecurityData) {
                var t = AmazonCognitoAdvancedSecurityData;
                if (this.advancedSecurityDataCollectionFlag) {
                  var r = t.getData(e, this.userPoolId, this.clientId);
                  if (r) return { EncodedData: r };
                }
                return {};
              }
            }),
            e
          );
        })(),
        ie = r("p46w"),
        oe = (function () {
          function e(e) {
            if (!e.domain)
              throw new Error(
                "The domain of cookieStorage can not be undefined."
              );
            if (
              ((this.domain = e.domain),
              e.path ? (this.path = e.path) : (this.path = "/"),
              Object.prototype.hasOwnProperty.call(e, "expires")
                ? (this.expires = e.expires)
                : (this.expires = 365),
              Object.prototype.hasOwnProperty.call(e, "secure")
                ? (this.secure = e.secure)
                : (this.secure = !0),
              Object.prototype.hasOwnProperty.call(e, "sameSite"))
            ) {
              if (!["strict", "lax", "none"].includes(e.sameSite))
                throw new Error(
                  'The sameSite value of cookieStorage must be "lax", "strict" or "none".'
                );
              if ("none" === e.sameSite && !this.secure)
                throw new Error(
                  "sameSite = None requires the Secure attribute in latest browser versions."
                );
              this.sameSite = e.sameSite;
            } else this.sameSite = null;
          }
          var t = e.prototype;
          return (
            (t.setItem = function (e, t) {
              var r = {
                path: this.path,
                expires: this.expires,
                domain: this.domain,
                secure: this.secure,
              };
              return (
                this.sameSite && (r.sameSite = this.sameSite),
                ie.set(e, t, r),
                ie.get(e)
              );
            }),
            (t.getItem = function (e) {
              return ie.get(e);
            }),
            (t.removeItem = function (e) {
              var t = {
                path: this.path,
                expires: this.expires,
                domain: this.domain,
                secure: this.secure,
              };
              return (
                this.sameSite && (t.sameSite = this.sameSite), ie.remove(e, t)
              );
            }),
            (t.clear = function () {
              for (
                var e = ie.get(), t = Object.keys(e).length, r = 0;
                r < t;
                ++r
              )
                this.removeItem(Object.keys(e)[r]);
              return {};
            }),
            e
          );
        })();
    },
    TOwV: function (e, t, r) {
      "use strict";
      e.exports = r("qT12");
    },
    TfoY: function (e, t, r) {
      "use strict";
      r.d(t, "d", function () {
        return l;
      }),
        r.d(t, "f", function () {
          return s;
        }),
        r.d(t, "g", function () {
          return a;
        }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "e", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return f;
        }),
        r.d(t, "a", function () {
          return d;
        });
      var n = r("q1tI"),
        i = (r("LvDl"), r("jfjY")),
        o = r.n(i),
        s =
          (r("HJKE"),
          function (e) {
            return e ? e.split("?").shift().split("/").pop() : null;
          }),
        a = function () {
          return "https://gcd-studio-prod.s3.eu-west-1.amazonaws.com/";
        },
        u = [
          {
            type: "image",
            label: "Image",
            icon: "/icons/image.svg",
            showOnChild: !0,
            showOnCommunity: !0,
            showOnEmpty: !0,
          },
          {
            type: "text",
            label: "abc",
            icon: "",
            showOnChild: !0,
            showOnCommunity: !0,
            showOnEmpty: !0,
          },
          {
            type: "video",
            label: "Video",
            icon: "/icons/video.svg",
            showOnChild: !0,
            showOnCommunity: !0,
            showOnEmpty: !0,
          },
          {
            type: "audio",
            label: "Audio",
            icon: "/icons/audio.svg",
            showOnChild: !0,
            showOnCommunity: !0,
            showOnEmpty: !0,
          },
          {
            type: "code",
            label: "Code",
            icon: "/icons/code.svg",
            showOnChild: !1,
            showOnCommunity: !0,
            showOnEmpty: !0,
          },
          {
            type: "link",
            label: "link",
            icon: "/icons/link.svg",
            showOnChild: !0,
            showOnCommunity: !1,
            showOnEmpty: !0,
          },
          {
            type: "lineBreak",
            label: "Line",
            icon: "",
            showOnChild: !1,
            showOnCommunity: !1,
            showOnEmpty: !0,
          },
          {
            type: "column",
            label: "Multi",
            icon: "",
            showOnChild: !1,
            showOnCommunity: !0,
            showOnEmpty: !0,
          },
          {
            type: "pages",
            label: "Pages",
            icon: "",
            showOnChild: !1,
            showOnCommunity: !1,
            showOnEmpty: !0,
          },
          {
            type: "question",
            label: "Question",
            icon: "",
            showOnChild: !1,
            showOnCommunity: !1,
            showOnEmpty: !0,
          },
          {
            type: "questionViewer",
            label: "Question Viewer",
            icon: "",
            showOnChild: !1,
            showOnCommunity: !1,
            showOnEmpty: !1,
          },
          {
            type: "recentPages",
            label: "Recent Pages",
            icon: "",
            showOnChild: !1,
            showOnCommunity: !1,
            showOnEmpty: !1,
          },
          {
            type: "allPages",
            label: "All Pages",
            icon: "",
            showOnChild: !1,
            showOnCommunity: !1,
            showOnEmpty: !1,
          },
        ],
        c = function (e) {
          return 0 === e
            ? "Online"
            : 1 === e
            ? "Local"
            : 2 === e
            ? "Offline"
            : void 0;
        },
        f = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 640,
            t = Object(n.useState)(1e3),
            r = t[0],
            i = t[1],
            s = o()(),
            a = function (e) {
              i(e.target.innerWidth);
            };
          return (
            Object(n.useEffect)(function () {
              return (
                i(window.innerWidth),
                window.addEventListener("resize", a),
                function () {
                  return window.removeEventListener("resize", a);
                }
              );
            }, []),
            r < e || s
          );
        },
        l = function (e) {
          var t,
            r,
            n,
            i,
            o =
              null === (t = document) || void 0 === t
                ? void 0
                : t.createElement("div");
          (o.style.display = "flex"),
            (o.style.flexDirection = "column"),
            (o.style.rowGap = "1px"),
            o.appendChild(
              null === (r = document) || void 0 === r
                ? void 0
                : r.createElement("div")
            ),
            o.appendChild(
              null === (n = document) || void 0 === n
                ? void 0
                : n.createElement("div")
            ),
            null === (i = document) || void 0 === i || i.body.appendChild(o);
          var s = 1 === o.scrollHeight;
          return (
            o.parentNode.removeChild(o),
            s
              ? { gap: e }
              : {
                  "& > *": {
                    margin: "".concat(
                      parseInt(e.replace("px", "")) / 2,
                      "px!important"
                    ),
                  },
                }
          );
        };
      function d(e, t, r) {
        var n = e[t];
        return e.splice(t, 1), e.splice(r, 0, n), e;
      }
    },
    UMev: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return o;
      }),
        r.d(t, "a", function () {
          return m;
        }),
        r.d(t, "c", function () {
          return w;
        });
      var n = r("mrSG"),
        i = {
          name: "retryMiddleware",
          tags: ["RETRY"],
          step: "finalizeRequest",
          priority: "high",
          override: !0,
        },
        o = function (e) {
          return {
            applyToStack: function (t) {
              t.add(
                (function (e) {
                  return function (t, r) {
                    return function (i) {
                      return Object(n.__awaiter)(
                        void 0,
                        void 0,
                        void 0,
                        function () {
                          var o;
                          return Object(n.__generator)(this, function (s) {
                            return (
                              (null ===
                                (o =
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.retryStrategy) || void 0 === o
                                ? void 0
                                : o.mode) &&
                                (r.userAgent = Object(n.__spread)(
                                  r.userAgent || [],
                                  [["cfg/retry-mode", e.retryStrategy.mode]]
                                )),
                              [2, e.retryStrategy.retry(t, i)]
                            );
                          });
                        }
                      );
                    };
                  };
                })(e),
                i
              );
            },
          };
        },
        s = r("Enk7"),
        a = "amz-sdk-invocation-id",
        u = "amz-sdk-request",
        c = [
          "AuthFailure",
          "InvalidSignatureException",
          "RequestExpired",
          "RequestInTheFuture",
          "RequestTimeTooSkewed",
          "SignatureDoesNotMatch",
        ],
        f = [
          "BandwidthLimitExceeded",
          "EC2ThrottledException",
          "LimitExceededException",
          "PriorRequestNotComplete",
          "ProvisionedThroughputExceededException",
          "RequestLimitExceeded",
          "RequestThrottled",
          "RequestThrottledException",
          "SlowDown",
          "ThrottledException",
          "Throttling",
          "ThrottlingException",
          "TooManyRequestsException",
          "TransactionInProgressException",
        ],
        l = [
          "AbortError",
          "TimeoutError",
          "RequestTimeout",
          "RequestTimeoutException",
        ],
        d = [500, 502, 503, 504],
        h = function (e) {
          var t, r;
          return (
            429 ===
              (null === (t = e.$metadata) || void 0 === t
                ? void 0
                : t.httpStatusCode) ||
            f.includes(e.name) ||
            1 ==
              (null === (r = e.$retryable) || void 0 === r
                ? void 0
                : r.throttling)
          );
        },
        p = r("EcEN"),
        g = function (e, t) {
          return Math.floor(Math.min(2e4, Math.random() * Math.pow(2, t) * e));
        },
        y = function (e) {
          return (
            !!e &&
            ((function (e) {
              return void 0 !== e.$retryable;
            })(e) ||
              (function (e) {
                return c.includes(e.name);
              })(e) ||
              h(e) ||
              (function (e) {
                var t;
                return (
                  l.includes(e.name) ||
                  d.includes(
                    (null === (t = e.$metadata) || void 0 === t
                      ? void 0
                      : t.httpStatusCode) || 0
                  )
                );
              })(e))
          );
        },
        m = 3,
        v = "standard",
        b = (function () {
          function e(e, t) {
            var r, n, i;
            (this.maxAttemptsProvider = e),
              (this.mode = v),
              (this.retryDecider =
                null !==
                  (r = null === t || void 0 === t ? void 0 : t.retryDecider) &&
                void 0 !== r
                  ? r
                  : y),
              (this.delayDecider =
                null !==
                  (n = null === t || void 0 === t ? void 0 : t.delayDecider) &&
                void 0 !== n
                  ? n
                  : g),
              (this.retryQuota =
                null !==
                  (i = null === t || void 0 === t ? void 0 : t.retryQuota) &&
                void 0 !== i
                  ? i
                  : (function (e) {
                      var t = e,
                        r = e,
                        n = function (e) {
                          return "TimeoutError" === e.name ? 10 : 5;
                        },
                        i = function (e) {
                          return n(e) <= r;
                        };
                      return Object.freeze({
                        hasRetryTokens: i,
                        retrieveRetryTokens: function (e) {
                          if (!i(e))
                            throw new Error("No retry token available");
                          var t = n(e);
                          return (r -= t), t;
                        },
                        releaseRetryTokens: function (e) {
                          (r += null !== e && void 0 !== e ? e : 1),
                            (r = Math.min(r, t));
                        },
                      });
                    })(500));
          }
          return (
            (e.prototype.shouldRetry = function (e, t, r) {
              return (
                t < r &&
                this.retryDecider(e) &&
                this.retryQuota.hasRetryTokens(e)
              );
            }),
            (e.prototype.getMaxAttempts = function () {
              return Object(n.__awaiter)(this, void 0, void 0, function () {
                var e;
                return Object(n.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 2, , 3]),
                        [4, this.maxAttemptsProvider()]
                      );
                    case 1:
                      return (e = t.sent()), [3, 3];
                    case 2:
                      return t.sent(), (e = m), [3, 3];
                    case 3:
                      return [2, e];
                  }
                });
              });
            }),
            (e.prototype.retry = function (e, t) {
              return Object(n.__awaiter)(this, void 0, void 0, function () {
                var r, i, o, c, f, l, d, g;
                return Object(n.__generator)(this, function (y) {
                  switch (y.label) {
                    case 0:
                      return (i = 0), (o = 0), [4, this.getMaxAttempts()];
                    case 1:
                      (c = y.sent()),
                        (f = t.request),
                        s.a.isInstance(f) && (f.headers[a] = Object(p.v4)()),
                        (l = function () {
                          var a, l, p, g, y;
                          return Object(n.__generator)(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return (
                                  n.trys.push([0, 2, , 5]),
                                  s.a.isInstance(f) &&
                                    (f.headers[u] =
                                      "attempt=" + (i + 1) + "; max=" + c),
                                  [4, e(t)]
                                );
                              case 1:
                                return (
                                  (a = n.sent()),
                                  (l = a.response),
                                  (p = a.output),
                                  d.retryQuota.releaseRetryTokens(r),
                                  (p.$metadata.attempts = i + 1),
                                  (p.$metadata.totalRetryDelay = o),
                                  [2, { value: { response: l, output: p } }]
                                );
                              case 2:
                                return (
                                  (g = n.sent()),
                                  i++,
                                  d.shouldRetry(g, i, c)
                                    ? ((r =
                                        d.retryQuota.retrieveRetryTokens(g)),
                                      (y = d.delayDecider(h(g) ? 500 : 100, i)),
                                      (o += y),
                                      [
                                        4,
                                        new Promise(function (e) {
                                          return setTimeout(e, y);
                                        }),
                                      ])
                                    : [3, 4]
                                );
                              case 3:
                                return n.sent(), [2, "continue"];
                              case 4:
                                throw (
                                  (g.$metadata || (g.$metadata = {}),
                                  (g.$metadata.attempts = i),
                                  (g.$metadata.totalRetryDelay = o),
                                  g)
                                );
                              case 5:
                                return [2];
                            }
                          });
                        }),
                        (d = this),
                        (y.label = 2);
                    case 2:
                      return [5, l()];
                    case 3:
                      return "object" === typeof (g = y.sent())
                        ? [2, g.value]
                        : [3, 2];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            e
          );
        })(),
        w = function (e) {
          var t = S(e.maxAttempts);
          return Object(n.__assign)(Object(n.__assign)({}, e), {
            maxAttempts: t,
            retryStrategy: e.retryStrategy || new b(t),
          });
        },
        S = function (e) {
          if ((void 0 === e && (e = m), "number" === typeof e)) {
            var t = Promise.resolve(e);
            return function () {
              return t;
            };
          }
          return e;
        };
    },
    V6Ve: function (e, t, r) {
      var n = r("kekF")(Object.keys, Object);
      e.exports = n;
    },
    VbXa: function (e, t, r) {
      var n = r("SksO");
      (e.exports = function (e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          n(e, t);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    VdAu: function (e, t, r) {
      "use strict";
      r.d(t, "d", function () {
        return a;
      }),
        r.d(t, "c", function () {
          return u;
        });
      var n = r("q1tI"),
        i = r.n(n),
        o = r("dJMH");
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      r.d(t, "a", function () {
        return o.Box;
      }),
        r.d(t, "b", function () {
          return o.Flex;
        });
      var a = Object(n.forwardRef)(function (e, t) {
          return i.a.createElement(o.Box, s({ ref: t, tx: "text" }, e));
        }),
        u =
          (Object(n.forwardRef)(function (e, t) {
            return i.a.createElement(
              o.Box,
              s({ ref: t, as: "h2", tx: "text", variant: "heading" }, e, {
                __css: {
                  fontSize: 4,
                  fontFamily: "heading",
                  fontWeight: "heading",
                  lineHeight: "heading",
                },
              })
            );
          }),
          Object(n.forwardRef)(function (e, t) {
            return i.a.createElement(
              o.Box,
              s({ ref: t, as: "a", variant: "link" }, e)
            );
          }),
          Object(n.forwardRef)(function (e, t) {
            return i.a.createElement(
              o.Box,
              s(
                { ref: t, as: "button", tx: "buttons", variant: "primary" },
                e,
                {
                  __css: {
                    appearance: "none",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "inherit",
                    textDecoration: "none",
                    fontSize: "inherit",
                    px: 3,
                    py: 2,
                    color: "white",
                    bg: "primary",
                    border: 0,
                    borderRadius: 4,
                  },
                }
              )
            );
          }),
          Object(n.forwardRef)(function (e, t) {
            return i.a.createElement(
              o.Box,
              s({ ref: t, as: "img" }, e, {
                __css: { maxWidth: "100%", height: "auto" },
              })
            );
          }));
      Object(n.forwardRef)(function (e, t) {
        return i.a.createElement(o.Box, s({ ref: t, variant: "card" }, e));
      });
    },
    W5Sr: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MAX_HASHABLE_LENGTH =
          t.INIT =
          t.KEY =
          t.DIGEST_LENGTH =
          t.BLOCK_SIZE =
            void 0),
        (t.BLOCK_SIZE = 64),
        (t.DIGEST_LENGTH = 32),
        (t.KEY = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ])),
        (t.INIT = [
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        (t.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1);
    },
    WFqU: function (e, t, r) {
      (function (t) {
        var r = "object" == typeof t && t && t.Object === Object && t;
        e.exports = r;
      }).call(this, r("ntbh"));
    },
    WYAk: function (e, t, r) {
      !(function (t, n) {
        var i;
        e.exports =
          ((i = r("Ib8C")),
          void (function () {
            var e = i,
              t = e.lib.Base,
              r = e.enc.Utf8;
            e.algo.HMAC = t.extend({
              init: function (e, t) {
                (e = this._hasher = new e.init()),
                  "string" == typeof t && (t = r.parse(t));
                var n = e.blockSize,
                  i = 4 * n;
                t.sigBytes > i && (t = e.finalize(t)), t.clamp();
                for (
                  var o = (this._oKey = t.clone()),
                    s = (this._iKey = t.clone()),
                    a = o.words,
                    u = s.words,
                    c = 0;
                  c < n;
                  c++
                )
                  (a[c] ^= 1549556828), (u[c] ^= 909522486);
                (o.sigBytes = s.sigBytes = i), this.reset();
              },
              reset: function () {
                var e = this._hasher;
                e.reset(), e.update(this._iKey);
              },
              update: function (e) {
                return this._hasher.update(e), this;
              },
              finalize: function (e) {
                var t = this._hasher,
                  r = t.finalize(e);
                return t.reset(), t.finalize(this._oKey.clone().concat(r));
              },
            });
          })());
      })();
    },
    Xuae: function (e, t, r) {
      "use strict";
      var n = r("mPvQ"),
        i = r("/GRZ"),
        o = r("i2R6"),
        s = (r("qXWd"), r("48fX")),
        a = r("tCBg"),
        u = r("T0f4");
      function c(e) {
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
          var r,
            n = u(e);
          if (t) {
            var i = u(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return a(this, r);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var f = r("q1tI"),
        l = (function (e) {
          s(r, e);
          var t = c(r);
          function r(e) {
            var o;
            return (
              i(this, r),
              ((o = t.call(this, e))._hasHeadManager = void 0),
              (o.emitChange = function () {
                o._hasHeadManager &&
                  o.props.headManager.updateHead(
                    o.props.reduceComponentsToState(
                      n(o.props.headManager.mountedInstances),
                      o.props
                    )
                  );
              }),
              (o._hasHeadManager =
                o.props.headManager && o.props.headManager.mountedInstances),
              o
            );
          }
          return (
            o(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(f.Component);
      t.default = l;
    },
    YFqc: function (e, t, r) {
      e.exports = r("cTJO");
    },
    YKz8: function (e, t, r) {
      "use strict";
      var n;
      r.d(t, "a", function () {
        return n;
      }),
        (function (e) {
          (e.DEFAULT_MSG = "Authentication Error"),
            (e.EMPTY_USERNAME = "Username cannot be empty"),
            (e.INVALID_USERNAME =
              "The username should either be a string or one of the sign in types"),
            (e.EMPTY_PASSWORD = "Password cannot be empty"),
            (e.EMPTY_CODE = "Confirmation code cannot be empty"),
            (e.SIGN_UP_ERROR = "Error creating account"),
            (e.NO_MFA = "No valid MFA method provided"),
            (e.INVALID_MFA = "Invalid MFA type"),
            (e.EMPTY_CHALLENGE = "Challenge response cannot be empty"),
            (e.NO_USER_SESSION =
              "Failed to get the session because the user is empty");
        })(n || (n = {}));
    },
    YX4P: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r("mrSG");
      n.__exportStar(r("rU8T"), t),
        n.__exportStar(r("LVIV"), t),
        n.__exportStar(r("JBVX"), t),
        n.__exportStar(r("JEbH"), t),
        n.__exportStar(r("duQQ"), t);
    },
    Z0cm: function (e, t) {
      var r = Array.isArray;
      e.exports = r;
    },
    ZIxo: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Sha256 = void 0);
      var n = r("dFEU"),
        i = r("b4Ml"),
        o = r("nHoN"),
        s = r("bVud"),
        a = r("YX4P"),
        u = r("tlIM"),
        c = (function () {
          function e(e) {
            s.supportsWebCrypto(u.locateWindow())
              ? (this.hash = new i.Sha256(e))
              : a.isMsWindow(u.locateWindow())
              ? (this.hash = new n.Sha256(e))
              : (this.hash = new o.Sha256(e));
          }
          return (
            (e.prototype.update = function (e, t) {
              this.hash.update(e, t);
            }),
            (e.prototype.digest = function () {
              return this.hash.digest();
            }),
            e
          );
        })();
      t.Sha256 = c;
    },
    b4Ml: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Sha256 = void 0);
      var n = r("bS4T"),
        i = r("kQNw"),
        o = r("p72H"),
        s = r("tlIM"),
        a = (function () {
          function e(e) {
            (this.toHash = new Uint8Array(0)),
              void 0 !== e &&
                ((this.key = new Promise(function (t, r) {
                  s.locateWindow()
                    .crypto.subtle.importKey(
                      "raw",
                      u(e),
                      o.SHA_256_HMAC_ALGO,
                      !1,
                      ["sign"]
                    )
                    .then(t, r);
                })),
                this.key.catch(function () {}));
          }
          return (
            (e.prototype.update = function (e) {
              if (!i.isEmptyData(e)) {
                var t = u(e),
                  r = new Uint8Array(this.toHash.byteLength + t.byteLength);
                r.set(this.toHash, 0),
                  r.set(t, this.toHash.byteLength),
                  (this.toHash = r);
              }
            }),
            (e.prototype.digest = function () {
              var e = this;
              return this.key
                ? this.key.then(function (t) {
                    return s
                      .locateWindow()
                      .crypto.subtle.sign(o.SHA_256_HMAC_ALGO, t, e.toHash)
                      .then(function (e) {
                        return new Uint8Array(e);
                      });
                  })
                : i.isEmptyData(this.toHash)
                ? Promise.resolve(o.EMPTY_DATA_SHA_256)
                : Promise.resolve()
                    .then(function () {
                      return s
                        .locateWindow()
                        .crypto.subtle.digest(o.SHA_256_HASH, e.toHash);
                    })
                    .then(function (e) {
                      return Promise.resolve(new Uint8Array(e));
                    });
            }),
            e
          );
        })();
      function u(e) {
        return "string" === typeof e
          ? n.fromUtf8(e)
          : ArrayBuffer.isView(e)
          ? new Uint8Array(
              e.buffer,
              e.byteOffset,
              e.byteLength / Uint8Array.BYTES_PER_ELEMENT
            )
          : new Uint8Array(e);
      }
      t.Sha256 = a;
    },
    bS4T: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "fromUtf8", function () {
          return n;
        }),
        r.d(t, "toUtf8", function () {
          return i;
        });
      var n = function (e) {
          return "function" === typeof TextEncoder
            ? (function (e) {
                return new TextEncoder().encode(e);
              })(e)
            : (function (e) {
                for (var t = [], r = 0, n = e.length; r < n; r++) {
                  var i = e.charCodeAt(r);
                  if (i < 128) t.push(i);
                  else if (i < 2048) t.push((i >> 6) | 192, (63 & i) | 128);
                  else if (
                    r + 1 < e.length &&
                    55296 === (64512 & i) &&
                    56320 === (64512 & e.charCodeAt(r + 1))
                  ) {
                    var o =
                      65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r));
                    t.push(
                      (o >> 18) | 240,
                      ((o >> 12) & 63) | 128,
                      ((o >> 6) & 63) | 128,
                      (63 & o) | 128
                    );
                  } else
                    t.push(
                      (i >> 12) | 224,
                      ((i >> 6) & 63) | 128,
                      (63 & i) | 128
                    );
                }
                return Uint8Array.from(t);
              })(e);
        },
        i = function (e) {
          return "function" === typeof TextDecoder
            ? (function (e) {
                return new TextDecoder("utf-8").decode(e);
              })(e)
            : (function (e) {
                for (var t = "", r = 0, n = e.length; r < n; r++) {
                  var i = e[r];
                  if (i < 128) t += String.fromCharCode(i);
                  else if (192 <= i && i < 224) {
                    var o = e[++r];
                    t += String.fromCharCode(((31 & i) << 6) | (63 & o));
                  } else if (240 <= i && i < 365) {
                    var s =
                      "%" +
                      [i, e[++r], e[++r], e[++r]]
                        .map(function (e) {
                          return e.toString(16);
                        })
                        .join("%");
                    t += decodeURIComponent(s);
                  } else
                    t += String.fromCharCode(
                      ((15 & i) << 12) | ((63 & e[++r]) << 6) | (63 & e[++r])
                    );
                }
                return t;
              })(e);
        };
    },
    bVud: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r("mrSG").__exportStar(r("ntEb"), t);
    },
    c6wG: function (e, t, r) {
      var n = r("dD9F"),
        i = r("sEf8"),
        o = r("mdPL"),
        s = o && o.isTypedArray,
        a = s ? i(s) : n;
      e.exports = a;
    },
    cTJO: function (e, t, r) {
      "use strict";
      var n = r("zoAU"),
        i = r("7KCV");
      (t.__esModule = !0), (t.default = void 0);
      var o = i(r("q1tI")),
        s = r("elyg"),
        a = r("nOHt"),
        u = r("vNVm"),
        c = {};
      function f(e, t, r, n) {
        if (e && (0, s.isLocalURL)(t)) {
          e.prefetch(t, r, n).catch(function (e) {
            0;
          });
          var i =
            n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
          c[t + "%" + r + (i ? "%" + i : "")] = !0;
        }
      }
      var l = function (e) {
        var t = !1 !== e.prefetch,
          r = (0, a.useRouter)(),
          i = (r && r.asPath) || "/",
          l = o.default.useMemo(
            function () {
              var t = (0, s.resolveHref)(i, e.href, !0),
                r = n(t, 2),
                o = r[0],
                a = r[1];
              return {
                href: o,
                as: e.as ? (0, s.resolveHref)(i, e.as) : a || o,
              };
            },
            [i, e.href, e.as]
          ),
          d = l.href,
          h = l.as,
          p = e.children,
          g = e.replace,
          y = e.shallow,
          m = e.scroll,
          v = e.locale;
        "string" === typeof p && (p = o.default.createElement("a", null, p));
        var b = o.Children.only(p),
          w = b && "object" === typeof b && b.ref,
          S = (0, u.useIntersection)({ rootMargin: "200px" }),
          _ = n(S, 2),
          A = _[0],
          C = _[1],
          O = o.default.useCallback(
            function (e) {
              A(e),
                w &&
                  ("function" === typeof w
                    ? w(e)
                    : "object" === typeof w && (w.current = e));
            },
            [w, A]
          );
        (0, o.useEffect)(
          function () {
            var e = C && t && (0, s.isLocalURL)(d),
              n = "undefined" !== typeof v ? v : r && r.locale,
              i = c[d + "%" + h + (n ? "%" + n : "")];
            e && !i && f(r, d, h, { locale: n });
          },
          [h, d, C, v, t, r]
        );
        var E = {
          ref: O,
          onClick: function (e) {
            b.props &&
              "function" === typeof b.props.onClick &&
              b.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, r, n, i, o, a, u) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, s.isLocalURL)(r))) &&
                    (e.preventDefault(),
                    null == a && (a = n.indexOf("#") < 0),
                    t[i ? "replace" : "push"](r, n, {
                      shallow: o,
                      locale: u,
                      scroll: a,
                    }));
                })(e, r, d, h, g, y, m, v);
          },
          onMouseEnter: function (e) {
            (0, s.isLocalURL)(d) &&
              (b.props &&
                "function" === typeof b.props.onMouseEnter &&
                b.props.onMouseEnter(e),
              f(r, d, h, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === b.type && !("href" in b.props))) {
          var k = "undefined" !== typeof v ? v : r && r.locale,
            P =
              r &&
              r.isLocaleDomain &&
              (0, s.getDomainLocale)(
                h,
                k,
                r && r.locales,
                r && r.domainLocales
              );
          E.href =
            P ||
            (0, s.addBasePath)((0, s.addLocale)(h, k, r && r.defaultLocale));
        }
        return o.default.cloneElement(b, E);
      };
      t.default = l;
    },
    cpVT: function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      r.d(t, "a", function () {
        return n;
      });
    },
    dD9F: function (e, t, r) {
      var n = r("NykK"),
        i = r("shjB"),
        o = r("ExA7"),
        s = {};
      (s["[object Float32Array]"] =
        s["[object Float64Array]"] =
        s["[object Int8Array]"] =
        s["[object Int16Array]"] =
        s["[object Int32Array]"] =
        s["[object Uint8Array]"] =
        s["[object Uint8ClampedArray]"] =
        s["[object Uint16Array]"] =
        s["[object Uint32Array]"] =
          !0),
        (s["[object Arguments]"] =
          s["[object Array]"] =
          s["[object ArrayBuffer]"] =
          s["[object Boolean]"] =
          s["[object DataView]"] =
          s["[object Date]"] =
          s["[object Error]"] =
          s["[object Function]"] =
          s["[object Map]"] =
          s["[object Number]"] =
          s["[object Object]"] =
          s["[object RegExp]"] =
          s["[object Set]"] =
          s["[object String]"] =
          s["[object WeakMap]"] =
            !1),
        (e.exports = function (e) {
          return o(e) && i(e.length) && !!s[n(e)];
        });
    },
    dFEU: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Sha256 = void 0);
      var n = r("kQNw"),
        i = r("p72H"),
        o = r("bS4T"),
        s = r("tlIM"),
        a = (function () {
          function e(e) {
            e
              ? ((this.operation = (function (e) {
                  return new Promise(function (t, r) {
                    var n = s
                      .locateWindow()
                      .msCrypto.subtle.importKey(
                        "raw",
                        u(e),
                        i.SHA_256_HMAC_ALGO,
                        !1,
                        ["sign"]
                      );
                    (n.oncomplete = function () {
                      n.result && t(n.result),
                        r(
                          new Error(
                            "ImportKey completed without importing key."
                          )
                        );
                    }),
                      (n.onerror = function () {
                        r(new Error("ImportKey failed to import key."));
                      });
                  });
                })(e).then(function (e) {
                  return s
                    .locateWindow()
                    .msCrypto.subtle.sign(i.SHA_256_HMAC_ALGO, e);
                })),
                this.operation.catch(function () {}))
              : (this.operation = Promise.resolve(
                  s.locateWindow().msCrypto.subtle.digest("SHA-256")
                ));
          }
          return (
            (e.prototype.update = function (e) {
              var t = this;
              n.isEmptyData(e) ||
                ((this.operation = this.operation.then(function (r) {
                  return (
                    (r.onerror = function () {
                      t.operation = Promise.reject(
                        new Error("Error encountered updating hash")
                      );
                    }),
                    r.process(u(e)),
                    r
                  );
                })),
                this.operation.catch(function () {}));
            }),
            (e.prototype.digest = function () {
              return this.operation.then(function (e) {
                return new Promise(function (t, r) {
                  (e.onerror = function () {
                    r(new Error("Error encountered finalizing hash"));
                  }),
                    (e.oncomplete = function () {
                      e.result && t(new Uint8Array(e.result)),
                        r(new Error("Error encountered finalizing hash"));
                    }),
                    e.finish();
                });
              });
            }),
            e
          );
        })();
      function u(e) {
        return "string" === typeof e
          ? o.fromUtf8(e)
          : ArrayBuffer.isView(e)
          ? new Uint8Array(
              e.buffer,
              e.byteOffset,
              e.byteLength / Uint8Array.BYTES_PER_ELEMENT
            )
          : new Uint8Array(e);
      }
      t.Sha256 = a;
    },
    dI71: function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (n =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function i(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          n(e, t);
      }
      r.d(t, "a", function () {
        return i;
      });
    },
    dJMH: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Flex = t.Box = void 0);
      u(r("q1tI"));
      var n = u(r("5D9J")),
        i = r("za5s"),
        o = (function (e) {
          if (e && e.__esModule) return e;
          var t = a();
          if (t && t.has(e)) return t.get(e);
          var r = {};
          if (null != e) {
            var n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                o && (o.get || o.set)
                  ? Object.defineProperty(r, i, o)
                  : (r[i] = e[i]);
              }
          }
          (r.default = e), t && t.set(e, r);
          return r;
        })(r("OJSm")),
        s = u(r("rKjV"));
      function a() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (0, n.default)("div", { shouldForwardProp: s.default })(
        { boxSizing: "border-box", margin: 0, minWidth: 0 },
        function (e) {
          return (0, o.default)(e.__css)(e.theme);
        },
        function (e) {
          var t = e.theme,
            r = e.variant,
            n = e.tx,
            i = void 0 === n ? "variants" : n;
          return (0, o.default)((0, o.get)(t, i + "." + r, (0, o.get)(t, r)))(
            t
          );
        },
        function (e) {
          return (0, o.default)(e.sx)(e.theme);
        },
        function (e) {
          return e.css;
        },
        (0, i.compose)(i.space, i.layout, i.typography, i.color, i.flexbox)
      );
      t.Box = c;
      var f = (0, n.default)(c)({ display: "flex" });
      t.Flex = f;
    },
    duQQ: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isMsWindow = void 0);
      var n = [
        "decrypt",
        "digest",
        "encrypt",
        "exportKey",
        "generateKey",
        "importKey",
        "sign",
        "verify",
      ];
      t.isMsWindow = function (e) {
        if (
          (function (e) {
            return "MSInputMethodContext" in e && "msCrypto" in e;
          })(e) &&
          void 0 !== e.msCrypto.subtle
        ) {
          var t = e.msCrypto,
            r = t.getRandomValues,
            i = t.subtle;
          return n
            .map(function (e) {
              return i[e];
            })
            .concat(r)
            .every(function (e) {
              return "function" === typeof e;
            });
        }
        return !1;
      };
    },
    ebwN: function (e, t, r) {
      var n = r("Cwc5")(r("Kz5y"), "Map");
      e.exports = n;
    },
    fQM2: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var n = r("Nt7R"),
        i = function (e, t) {
          var r = "function" === typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              s.push(n.value);
          } catch (a) {
            i = { error: a };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        },
        o = new n.a("Amplify"),
        s = new ((function () {
          function e() {
            (this._components = []),
              (this._config = {}),
              (this._modules = {}),
              (this.Auth = null),
              (this.Analytics = null),
              (this.API = null),
              (this.Credentials = null),
              (this.Storage = null),
              (this.I18n = null),
              (this.Cache = null),
              (this.PubSub = null),
              (this.Interactions = null),
              (this.Pushnotification = null),
              (this.UI = null),
              (this.XR = null),
              (this.Predictions = null),
              (this.DataStore = null),
              (this.Logger = n.a),
              (this.ServiceWorker = null);
          }
          return (
            (e.prototype.register = function (e) {
              o.debug("component registered in amplify", e),
                this._components.push(e),
                "function" === typeof e.getModuleName
                  ? ((this._modules[e.getModuleName()] = e),
                    (this[e.getModuleName()] = e))
                  : o.debug("no getModuleName method for component", e),
                e.configure(this._config);
            }),
            (e.prototype.configure = function (e) {
              var t = this;
              return e
                ? ((this._config = Object.assign(this._config, e)),
                  o.debug("amplify config", this._config),
                  Object.entries(this._modules).forEach(function (e) {
                    var r = i(e, 2),
                      n = (r[0], r[1]);
                    Object.keys(n).forEach(function (e) {
                      t._modules[e] && (n[e] = t._modules[e]);
                    });
                  }),
                  this._components.map(function (e) {
                    e.configure(t._config);
                  }),
                  this._config)
                : this._config;
            }),
            (e.prototype.addPluggable = function (e) {
              e &&
                e.getCategory &&
                "function" === typeof e.getCategory &&
                this._components.map(function (t) {
                  t.addPluggable &&
                    "function" === typeof t.addPluggable &&
                    t.addPluggable(e);
                });
            }),
            e
          );
        })())();
    },
    g4pe: function (e, t, r) {
      e.exports = r("8Kt/");
    },
    "gi+x": function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return i;
      }),
        r.d(t, "a", function () {
          return o;
        }),
        r.d(t, "b", function () {
          return s;
        }),
        r.d(t, "d", function () {
          return a;
        }),
        r.d(t, "e", function () {
          return u;
        });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      };
      function i(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function s(e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              u(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function a(e) {
            try {
              u(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          u((n = n.apply(e, t || [])).next());
        });
      }
      function a(e, t) {
        var r,
          n,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & o[0]
                          ? n.return
                          : o[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, o[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (n = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (a) {
                  (o = [6, a]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      Object.create;
      function u(e, t) {
        var r = "function" === typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          o = r.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
            s.push(n.value);
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      Object.create;
    },
    "iVi/": function (e, t, r) {
      "use strict";
      (t.parse = function (e, t) {
        if ("string" !== typeof e)
          throw new TypeError("argument str must be a string");
        for (
          var r = {}, i = t || {}, s = e.split(o), u = i.decode || n, c = 0;
          c < s.length;
          c++
        ) {
          var f = s[c],
            l = f.indexOf("=");
          if (!(l < 0)) {
            var d = f.substr(0, l).trim(),
              h = f.substr(++l, f.length).trim();
            '"' == h[0] && (h = h.slice(1, -1)),
              void 0 == r[d] && (r[d] = a(h, u));
          }
        }
        return r;
      }),
        (t.serialize = function (e, t, r) {
          var n = r || {},
            o = n.encode || i;
          if ("function" !== typeof o)
            throw new TypeError("option encode is invalid");
          if (!s.test(e)) throw new TypeError("argument name is invalid");
          var a = o(t);
          if (a && !s.test(a)) throw new TypeError("argument val is invalid");
          var u = e + "=" + a;
          if (null != n.maxAge) {
            var c = n.maxAge - 0;
            if (isNaN(c) || !isFinite(c))
              throw new TypeError("option maxAge is invalid");
            u += "; Max-Age=" + Math.floor(c);
          }
          if (n.domain) {
            if (!s.test(n.domain))
              throw new TypeError("option domain is invalid");
            u += "; Domain=" + n.domain;
          }
          if (n.path) {
            if (!s.test(n.path)) throw new TypeError("option path is invalid");
            u += "; Path=" + n.path;
          }
          if (n.expires) {
            if ("function" !== typeof n.expires.toUTCString)
              throw new TypeError("option expires is invalid");
            u += "; Expires=" + n.expires.toUTCString();
          }
          n.httpOnly && (u += "; HttpOnly");
          n.secure && (u += "; Secure");
          if (n.sameSite) {
            switch (
              "string" === typeof n.sameSite
                ? n.sameSite.toLowerCase()
                : n.sameSite
            ) {
              case !0:
                u += "; SameSite=Strict";
                break;
              case "lax":
                u += "; SameSite=Lax";
                break;
              case "strict":
                u += "; SameSite=Strict";
                break;
              case "none":
                u += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          }
          return u;
        });
      var n = decodeURIComponent,
        i = encodeURIComponent,
        o = /; */,
        s = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function a(e, t) {
        try {
          return t(e);
        } catch (r) {
          return e;
        }
      }
    },
    itWG: function (e, t, r) {
      "use strict";
      var n = r("q1tI"),
        i = r.n(n),
        o = r("g4pe"),
        s = r.n(o),
        a = r("E+oP"),
        u = r.n(a),
        c = r("20a2"),
        f = r("/wwA"),
        l = r.n(f),
        d = i.a.createElement;
      t.a = function (e) {
        var t = e.title,
          r = e.description,
          n = e.image,
          i = u()(t) ? "GCD STUDIO" : t,
          o = u()(r) ? "A playground for CSM GCD students" : r,
          a = u()(n) ? "https://gcd.studio".concat(l.a) : n,
          f = Object(c.useRouter)().asPath,
          h = "https://gcd.studio".concat(f);
        return d(
          s.a,
          null,
          d("title", null, "".concat(i, " | GCD STUDIO")),
          d("meta", { name: "title", content: "".concat(i, " | GCD STUDIO") }),
          d("meta", { name: "image", content: a }),
          d("meta", { name: "author", content: "GCD STUDIO" }),
          d("meta", { name: "description", content: o }),
          d("meta", {
            name: "og:title",
            content: "".concat(i, " | GCD STUDIO"),
          }),
          d("meta", { name: "og:type", content: "website" }),
          d("meta", { name: "og:url", content: h }),
          d("meta", { name: "og:image", content: a }),
          d("meta", { name: "og:image:width", content: "1200" }),
          d("meta", { name: "og:image:height", content: "627" }),
          d("meta", { name: "og:description", content: o }),
          d("meta", { name: "twitter:card", content: "summary_large_image" }),
          d("meta", { name: "twitter:domain", content: "gcd.studio" }),
          d("meta", { name: "twitter:url", content: h }),
          d("meta", {
            name: "twitter:title",
            content: "".concat(i, " | GCD STUDIO"),
          }),
          d("meta", { name: "twitter:image", content: a }),
          d("meta", { name: "twitter:description", content: o }),
          d("meta", { content: "ie=edge", httpEquiv: "x-ua-compatible" }),
          d("meta", {
            name: "viewport",
            content: "initial-scale=1.0, width=device-width, maximum-scale=5",
            key: "viewport",
          }),
          d("link", { rel: "shortcut icon", href: "/favicon.png" })
        );
      };
    },
    jT3O: function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      r.d(t, "a", function () {
        return n;
      });
    },
    jfjY: function (e, t, r) {
      "use strict";
      (e.exports = o), (e.exports.isMobile = o), (e.exports.default = o);
      const n =
          /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        i = /android|ipad|playbook|silk/i;
      function o(e) {
        e || (e = {});
        let t = e.ua;
        if (
          (t || "undefined" === typeof navigator || (t = navigator.userAgent),
          t &&
            t.headers &&
            "string" === typeof t.headers["user-agent"] &&
            (t = t.headers["user-agent"]),
          "string" !== typeof t)
        )
          return !1;
        let r = n.test(t) || (!!e.tablet && i.test(t));
        return (
          !r &&
            e.tablet &&
            e.featureDetect &&
            navigator &&
            navigator.maxTouchPoints > 1 &&
            -1 !== t.indexOf("Macintosh") &&
            -1 !== t.indexOf("Safari") &&
            (r = !0),
          r
        );
      }
    },
    kG2m: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    kQNw: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isEmptyData = void 0),
        (t.isEmptyData = function (e) {
          return "string" === typeof e ? 0 === e.length : 0 === e.byteLength;
        });
    },
    "kVK+": function (e, t) {
      (t.read = function (e, t, r, n, i) {
        var o,
          s,
          a = 8 * i - n - 1,
          u = (1 << a) - 1,
          c = u >> 1,
          f = -7,
          l = r ? i - 1 : 0,
          d = r ? -1 : 1,
          h = e[t + l];
        for (
          l += d, o = h & ((1 << -f) - 1), h >>= -f, f += a;
          f > 0;
          o = 256 * o + e[t + l], l += d, f -= 8
        );
        for (
          s = o & ((1 << -f) - 1), o >>= -f, f += n;
          f > 0;
          s = 256 * s + e[t + l], l += d, f -= 8
        );
        if (0 === o) o = 1 - c;
        else {
          if (o === u) return s ? NaN : (1 / 0) * (h ? -1 : 1);
          (s += Math.pow(2, n)), (o -= c);
        }
        return (h ? -1 : 1) * s * Math.pow(2, o - n);
      }),
        (t.write = function (e, t, r, n, i, o) {
          var s,
            a,
            u,
            c = 8 * o - i - 1,
            f = (1 << c) - 1,
            l = f >> 1,
            d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = n ? 0 : o - 1,
            p = n ? 1 : -1,
            g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((a = isNaN(t) ? 1 : 0), (s = f))
                : ((s = Math.floor(Math.log(t) / Math.LN2)),
                  t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                  (t += s + l >= 1 ? d / u : d * Math.pow(2, 1 - l)) * u >= 2 &&
                    (s++, (u /= 2)),
                  s + l >= f
                    ? ((a = 0), (s = f))
                    : s + l >= 1
                    ? ((a = (t * u - 1) * Math.pow(2, i)), (s += l))
                    : ((a = t * Math.pow(2, l - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            e[r + h] = 255 & a, h += p, a /= 256, i -= 8
          );
          for (
            s = (s << i) | a, c += i;
            c > 0;
            e[r + h] = 255 & s, h += p, s /= 256, c -= 8
          );
          e[r + h - p] |= 128 * g;
        });
    },
    kd2E: function (e, t, r) {
      "use strict";
      function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      e.exports = function (e, t, r, o) {
        (t = t || "&"), (r = r || "=");
        var s = {};
        if ("string" !== typeof e || 0 === e.length) return s;
        var a = /\+/g;
        e = e.split(t);
        var u = 1e3;
        o && "number" === typeof o.maxKeys && (u = o.maxKeys);
        var c = e.length;
        u > 0 && c > u && (c = u);
        for (var f = 0; f < c; ++f) {
          var l,
            d,
            h,
            p,
            g = e[f].replace(a, "%20"),
            y = g.indexOf(r);
          y >= 0
            ? ((l = g.substr(0, y)), (d = g.substr(y + 1)))
            : ((l = g), (d = "")),
            (h = decodeURIComponent(l)),
            (p = decodeURIComponent(d)),
            n(s, h)
              ? i(s[h])
                ? s[h].push(p)
                : (s[h] = [s[h], p])
              : (s[h] = p);
        }
        return s;
      };
      var i =
        Array.isArray ||
        function (e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        };
    },
    kekF: function (e, t) {
      e.exports = function (e, t) {
        return function (r) {
          return e(t(r));
        };
      };
    },
    "ko+D": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return T;
      });
      var n = r("mrSG"),
        i = r("7Z+r"),
        o = "X-Amz-Date",
        s = "X-Amz-Signature",
        a = "X-Amz-Security-Token",
        u = "authorization",
        c = o.toLowerCase(),
        f = [u, c, "date"],
        l = s.toLowerCase(),
        d = "x-amz-content-sha256",
        h = a.toLowerCase(),
        p = {
          authorization: !0,
          "cache-control": !0,
          connection: !0,
          expect: !0,
          from: !0,
          "keep-alive": !0,
          "max-forwards": !0,
          pragma: !0,
          referer: !0,
          te: !0,
          trailer: !0,
          "transfer-encoding": !0,
          upgrade: !0,
          "user-agent": !0,
          "x-amzn-trace-id": !0,
        },
        g = /^proxy-/,
        y = /^sec-/,
        m = "AWS4-HMAC-SHA256",
        v = "AWS4-HMAC-SHA256-PAYLOAD",
        b = "aws4_request",
        w = {},
        S = [];
      function _(e, t, r) {
        return e + "/" + t + "/" + r + "/" + b;
      }
      function A(e, t, r) {
        var n = new e(t);
        return n.update(r), n.digest();
      }
      function C(e, t, r) {
        var i,
          o,
          s = e.headers,
          a = {};
        try {
          for (
            var u = Object(n.__values)(Object.keys(s).sort()), c = u.next();
            !c.done;
            c = u.next()
          ) {
            var f = c.value,
              l = f.toLowerCase();
            ((l in p ||
              (null === t || void 0 === t ? void 0 : t.has(l)) ||
              g.test(l) ||
              y.test(l)) &&
              (!r || (r && !r.has(l)))) ||
              (a[l] = s[f].trim().replace(/\s+/g, " "));
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            c && !c.done && (o = u.return) && o.call(u);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      var O = r("TARy");
      var E = r("GDOE");
      function k(e, t) {
        var r = e.headers,
          o = e.body;
        return Object(n.__awaiter)(this, void 0, void 0, function () {
          var e, s, a, u, c, f, l;
          return Object(n.__generator)(this, function (h) {
            switch (h.label) {
              case 0:
                try {
                  for (
                    e = Object(n.__values)(Object.keys(r)), s = e.next();
                    !s.done;
                    s = e.next()
                  )
                    if ((a = s.value).toLowerCase() === d) return [2, r[a]];
                } catch (p) {
                  f = { error: p };
                } finally {
                  try {
                    s && !s.done && (l = e.return) && l.call(e);
                  } finally {
                    if (f) throw f.error;
                  }
                }
                return void 0 != o
                  ? [3, 1]
                  : [
                      2,
                      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                    ];
              case 1:
                return "string" === typeof o ||
                  ArrayBuffer.isView(o) ||
                  Object(E.a)(o)
                  ? ((u = new t()).update(o), (c = i.b), [4, u.digest()])
                  : [3, 3];
              case 2:
                return [2, c.apply(void 0, [h.sent()])];
              case 3:
                return [2, "UNSIGNED-PAYLOAD"];
            }
          });
        });
      }
      function P(e) {
        var t = e.headers,
          r = e.query,
          i = Object(n.__rest)(e, ["headers", "query"]);
        return Object(n.__assign)(Object(n.__assign)({}, i), {
          headers: Object(n.__assign)({}, t),
          query: r ? x(r) : void 0,
        });
      }
      function x(e) {
        return Object.keys(e).reduce(function (t, r) {
          var i,
            o = e[r];
          return Object(n.__assign)(
            Object(n.__assign)({}, t),
            (((i = {})[r] = Array.isArray(o) ? Object(n.__spread)(o) : o), i)
          );
        }, {});
      }
      function I(e) {
        var t, r;
        e = "function" === typeof e.clone ? e.clone() : P(e);
        try {
          for (
            var i = Object(n.__values)(Object.keys(e.headers)), o = i.next();
            !o.done;
            o = i.next()
          ) {
            var s = o.value;
            f.indexOf(s.toLowerCase()) > -1 && delete e.headers[s];
          }
        } catch (a) {
          t = { error: a };
        } finally {
          try {
            o && !o.done && (r = i.return) && r.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
        return e;
      }
      function j(e) {
        return (function (e) {
          if ("number" === typeof e) return new Date(1e3 * e);
          if ("string" === typeof e)
            return Number(e) ? new Date(1e3 * Number(e)) : new Date(e);
          return e;
        })(e)
          .toISOString()
          .replace(/\.\d{3}Z$/, "Z");
      }
      var T = (function () {
          function e(e) {
            var t = e.applyChecksum,
              r = e.credentials,
              n = e.region,
              i = e.service,
              o = e.sha256,
              s = e.uriEscapePath,
              a = void 0 === s || s;
            (this.service = i),
              (this.sha256 = o),
              (this.uriEscapePath = a),
              (this.applyChecksum = "boolean" !== typeof t || t),
              (this.regionProvider = U(n)),
              (this.credentialProvider = D(r));
          }
          return (
            (e.prototype.presign = function (e, t) {
              return (
                void 0 === t && (t = {}),
                Object(n.__awaiter)(this, void 0, void 0, function () {
                  var r,
                    i,
                    o,
                    u,
                    c,
                    f,
                    l,
                    d,
                    h,
                    p,
                    g,
                    y,
                    v,
                    b,
                    w,
                    S,
                    A,
                    O,
                    E,
                    x,
                    j,
                    T,
                    U,
                    D;
                  return Object(n.__generator)(this, function (F) {
                    switch (F.label) {
                      case 0:
                        return (
                          (r = t.signingDate),
                          (i = void 0 === r ? new Date() : r),
                          (o = t.expiresIn),
                          (u = void 0 === o ? 3600 : o),
                          (c = t.unsignableHeaders),
                          (f = t.unhoistableHeaders),
                          (l = t.signableHeaders),
                          (d = t.signingRegion),
                          (h = t.signingService),
                          [4, this.credentialProvider()]
                        );
                      case 1:
                        return (
                          (p = F.sent()),
                          null === d || void 0 === d
                            ? [3, 2]
                            : ((y = d), [3, 4])
                        );
                      case 2:
                        return [4, this.regionProvider()];
                      case 3:
                        (y = F.sent()), (F.label = 4);
                      case 4:
                        return (
                          (g = y),
                          (v = R(i)),
                          (b = v.longDate),
                          (w = v.shortDate),
                          u > 604800
                            ? [
                                2,
                                Promise.reject(
                                  "Signature version 4 presigned URLs must have an expiration date less than one week in the future"
                                ),
                              ]
                            : ((S = _(
                                w,
                                g,
                                null !== h && void 0 !== h ? h : this.service
                              )),
                              (A = (function (e, t) {
                                var r, i, o;
                                void 0 === t && (t = {});
                                var s =
                                    "function" === typeof e.clone
                                      ? e.clone()
                                      : P(e),
                                  a = s.headers,
                                  u = s.query,
                                  c = void 0 === u ? {} : u;
                                try {
                                  for (
                                    var f = Object(n.__values)(Object.keys(a)),
                                      l = f.next();
                                    !l.done;
                                    l = f.next()
                                  ) {
                                    var d = l.value,
                                      h = d.toLowerCase();
                                    "x-amz-" !== h.substr(0, 6) ||
                                      (null === (o = t.unhoistableHeaders) ||
                                      void 0 === o
                                        ? void 0
                                        : o.has(h)) ||
                                      ((c[d] = a[d]), delete a[d]);
                                  }
                                } catch (p) {
                                  r = { error: p };
                                } finally {
                                  try {
                                    l && !l.done && (i = f.return) && i.call(f);
                                  } finally {
                                    if (r) throw r.error;
                                  }
                                }
                                return Object(n.__assign)(
                                  Object(n.__assign)({}, e),
                                  { headers: a, query: c }
                                );
                              })(I(e), { unhoistableHeaders: f })),
                              p.sessionToken && (A.query[a] = p.sessionToken),
                              (A.query["X-Amz-Algorithm"] = m),
                              (A.query["X-Amz-Credential"] =
                                p.accessKeyId + "/" + S),
                              (A.query["X-Amz-Date"] = b),
                              (A.query["X-Amz-Expires"] = u.toString(10)),
                              (O = C(A, c, l)),
                              (A.query["X-Amz-SignedHeaders"] = M(O)),
                              (E = A.query),
                              (x = s),
                              (j = this.getSignature),
                              (T = [b, S, this.getSigningKey(p, g, w, h)]),
                              (U = this.createCanonicalRequest),
                              (D = [A, O]),
                              [4, k(e, this.sha256)])
                        );
                      case 5:
                        return [
                          4,
                          j.apply(
                            this,
                            T.concat([U.apply(this, D.concat([F.sent()]))])
                          ),
                        ];
                      case 6:
                        return (E[x] = F.sent()), [2, A];
                    }
                  });
                })
              );
            }),
            (e.prototype.sign = function (e, t) {
              return Object(n.__awaiter)(this, void 0, void 0, function () {
                return Object(n.__generator)(this, function (r) {
                  return "string" === typeof e
                    ? [2, this.signString(e, t)]
                    : e.headers && e.payload
                    ? [2, this.signEvent(e, t)]
                    : [2, this.signRequest(e, t)];
                });
              });
            }),
            (e.prototype.signEvent = function (e, t) {
              var r = e.headers,
                o = e.payload,
                s = t.signingDate,
                a = void 0 === s ? new Date() : s,
                u = t.priorSignature,
                c = t.signingRegion,
                f = t.signingService;
              return Object(n.__awaiter)(this, void 0, void 0, function () {
                var e, t, s, l, d, h, p, g, y, m, b;
                return Object(n.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return null === c || void 0 === c
                        ? [3, 1]
                        : ((t = c), [3, 3]);
                    case 1:
                      return [4, this.regionProvider()];
                    case 2:
                      (t = n.sent()), (n.label = 3);
                    case 3:
                      return (
                        (e = t),
                        (s = R(a)),
                        (l = s.shortDate),
                        (d = s.longDate),
                        (h = _(
                          l,
                          e,
                          null !== f && void 0 !== f ? f : this.service
                        )),
                        [4, k({ headers: {}, body: o }, this.sha256)]
                      );
                    case 4:
                      return (
                        (p = n.sent()),
                        (g = new this.sha256()).update(r),
                        (m = i.b),
                        [4, g.digest()]
                      );
                    case 5:
                      return (
                        (y = m.apply(void 0, [n.sent()])),
                        (b = [v, d, h, u, y, p].join("\n")),
                        [
                          2,
                          this.signString(b, {
                            signingDate: a,
                            signingRegion: e,
                            signingService: f,
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.signString = function (e, t) {
              var r = void 0 === t ? {} : t,
                o = r.signingDate,
                s = void 0 === o ? new Date() : o,
                a = r.signingRegion,
                u = r.signingService;
              return Object(n.__awaiter)(this, void 0, void 0, function () {
                var t, r, o, c, f, l, d, h;
                return Object(n.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.credentialProvider()];
                    case 1:
                      return (
                        (t = n.sent()),
                        null === a || void 0 === a ? [3, 2] : ((o = a), [3, 4])
                      );
                    case 2:
                      return [4, this.regionProvider()];
                    case 3:
                      (o = n.sent()), (n.label = 4);
                    case 4:
                      return (
                        (r = o),
                        (c = R(s).shortDate),
                        (d = (l = this.sha256).bind),
                        [4, this.getSigningKey(t, r, c, u)]
                      );
                    case 5:
                      return (
                        (f = new (d.apply(l, [void 0, n.sent()]))()).update(e),
                        (h = i.b),
                        [4, f.digest()]
                      );
                    case 6:
                      return [2, h.apply(void 0, [n.sent()])];
                  }
                });
              });
            }),
            (e.prototype.signRequest = function (e, t) {
              var r = void 0 === t ? {} : t,
                i = r.signingDate,
                o = void 0 === i ? new Date() : i,
                s = r.signableHeaders,
                a = r.unsignableHeaders,
                f = r.signingRegion,
                l = r.signingService;
              return Object(n.__awaiter)(this, void 0, void 0, function () {
                var t, r, i, p, g, y, m, v, b, w, S;
                return Object(n.__generator)(this, function (A) {
                  switch (A.label) {
                    case 0:
                      return [4, this.credentialProvider()];
                    case 1:
                      return (
                        (t = A.sent()),
                        null === f || void 0 === f ? [3, 2] : ((i = f), [3, 4])
                      );
                    case 2:
                      return [4, this.regionProvider()];
                    case 3:
                      (i = A.sent()), (A.label = 4);
                    case 4:
                      return (
                        (r = i),
                        (p = I(e)),
                        (g = R(o)),
                        (y = g.longDate),
                        (m = g.shortDate),
                        (v = _(
                          m,
                          r,
                          null !== l && void 0 !== l ? l : this.service
                        )),
                        (p.headers[c] = y),
                        t.sessionToken && (p.headers[h] = t.sessionToken),
                        [4, k(p, this.sha256)]
                      );
                    case 5:
                      return (
                        (b = A.sent()),
                        !(function (e, t) {
                          var r, i;
                          e = e.toLowerCase();
                          try {
                            for (
                              var o = Object(n.__values)(Object.keys(t)),
                                s = o.next();
                              !s.done;
                              s = o.next()
                            )
                              if (e === s.value.toLowerCase()) return !0;
                          } catch (a) {
                            r = { error: a };
                          } finally {
                            try {
                              s && !s.done && (i = o.return) && i.call(o);
                            } finally {
                              if (r) throw r.error;
                            }
                          }
                          return !1;
                        })(d, p.headers) &&
                          this.applyChecksum &&
                          (p.headers[d] = b),
                        (w = C(p, a, s)),
                        [
                          4,
                          this.getSignature(
                            y,
                            v,
                            this.getSigningKey(t, r, m, l),
                            this.createCanonicalRequest(p, w, b)
                          ),
                        ]
                      );
                    case 6:
                      return (
                        (S = A.sent()),
                        (p.headers[u] =
                          "AWS4-HMAC-SHA256 Credential=" +
                          t.accessKeyId +
                          "/" +
                          v +
                          ", SignedHeaders=" +
                          M(w) +
                          ", Signature=" +
                          S),
                        [2, p]
                      );
                  }
                });
              });
            }),
            (e.prototype.createCanonicalRequest = function (e, t, r) {
              var i = Object.keys(t).sort();
              return (
                e.method +
                "\n" +
                this.getCanonicalPath(e) +
                "\n" +
                (function (e) {
                  var t,
                    r,
                    i = e.query,
                    o = void 0 === i ? {} : i,
                    s = [],
                    a = {},
                    u = function (e) {
                      if (e.toLowerCase() === l) return "continue";
                      s.push(e);
                      var t = o[e];
                      "string" === typeof t
                        ? (a[e] = Object(O.a)(e) + "=" + Object(O.a)(t))
                        : Array.isArray(t) &&
                          (a[e] = t
                            .slice(0)
                            .sort()
                            .reduce(function (t, r) {
                              return t.concat([
                                Object(O.a)(e) + "=" + Object(O.a)(r),
                              ]);
                            }, [])
                            .join("&"));
                    };
                  try {
                    for (
                      var c = Object(n.__values)(Object.keys(o).sort()),
                        f = c.next();
                      !f.done;
                      f = c.next()
                    )
                      u(f.value);
                  } catch (d) {
                    t = { error: d };
                  } finally {
                    try {
                      f && !f.done && (r = c.return) && r.call(c);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  return s
                    .map(function (e) {
                      return a[e];
                    })
                    .filter(function (e) {
                      return e;
                    })
                    .join("&");
                })(e) +
                "\n" +
                i
                  .map(function (e) {
                    return e + ":" + t[e];
                  })
                  .join("\n") +
                "\n\n" +
                i.join(";") +
                "\n" +
                r
              );
            }),
            (e.prototype.createStringToSign = function (e, t, r) {
              return Object(n.__awaiter)(this, void 0, void 0, function () {
                var o, s;
                return Object(n.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (o = new this.sha256()).update(r), [4, o.digest()];
                    case 1:
                      return (
                        (s = n.sent()),
                        [
                          2,
                          "AWS4-HMAC-SHA256\n" +
                            e +
                            "\n" +
                            t +
                            "\n" +
                            Object(i.b)(s),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.getCanonicalPath = function (e) {
              var t = e.path;
              return this.uriEscapePath
                ? "/" +
                    encodeURIComponent(t.replace(/^\//, "")).replace(
                      /%2F/g,
                      "/"
                    )
                : t;
            }),
            (e.prototype.getSignature = function (e, t, r, o) {
              return Object(n.__awaiter)(this, void 0, void 0, function () {
                var s, a, u, c, f;
                return Object(n.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.createStringToSign(e, t, o)];
                    case 1:
                      return (
                        (s = n.sent()), (c = (u = this.sha256).bind), [4, r]
                      );
                    case 2:
                      return (
                        (a = new (c.apply(u, [void 0, n.sent()]))()).update(s),
                        (f = i.b),
                        [4, a.digest()]
                      );
                    case 3:
                      return [2, f.apply(void 0, [n.sent()])];
                  }
                });
              });
            }),
            (e.prototype.getSigningKey = function (e, t, r, o) {
              return (function (e, t, r, o, s) {
                return Object(n.__awaiter)(void 0, void 0, void 0, function () {
                  var a, u, c, f, l, d, h, p, g;
                  return Object(n.__generator)(this, function (y) {
                    switch (y.label) {
                      case 0:
                        return [4, A(e, t.secretAccessKey, t.accessKeyId)];
                      case 1:
                        if (
                          ((a = y.sent()),
                          (u =
                            r +
                            ":" +
                            o +
                            ":" +
                            s +
                            ":" +
                            Object(i.b)(a) +
                            ":" +
                            t.sessionToken) in w)
                        )
                          return [2, w[u]];
                        for (S.push(u); S.length > 50; ) delete w[S.shift()];
                        (c = "AWS4" + t.secretAccessKey), (y.label = 2);
                      case 2:
                        y.trys.push([2, 7, 8, 9]),
                          (f = Object(n.__values)([r, o, s, b])),
                          (l = f.next()),
                          (y.label = 3);
                      case 3:
                        return l.done
                          ? [3, 6]
                          : ((d = l.value), [4, A(e, c, d)]);
                      case 4:
                        (c = y.sent()), (y.label = 5);
                      case 5:
                        return (l = f.next()), [3, 3];
                      case 6:
                        return [3, 9];
                      case 7:
                        return (h = y.sent()), (p = { error: h }), [3, 9];
                      case 8:
                        try {
                          l && !l.done && (g = f.return) && g.call(f);
                        } finally {
                          if (p) throw p.error;
                        }
                        return [7];
                      case 9:
                        return [2, (w[u] = c)];
                    }
                  });
                });
              })(this.sha256, e, r, t, o || this.service);
            }),
            e
          );
        })(),
        R = function (e) {
          var t = j(e).replace(/[\-:]/g, "");
          return { longDate: t, shortDate: t.substr(0, 8) };
        },
        M = function (e) {
          return Object.keys(e).sort().join(";");
        },
        U = function (e) {
          if ("string" === typeof e) {
            var t = Promise.resolve(e);
            return function () {
              return t;
            };
          }
          return e;
        },
        D = function (e) {
          if ("object" === typeof e) {
            var t = Promise.resolve(e);
            return function () {
              return t;
            };
          }
          return e;
        };
    },
    lPiR: function (e, t, r) {
      !(function (t, n) {
        var i;
        e.exports =
          ((i = r("Ib8C")),
          (function (e) {
            var t = i,
              r = t.lib,
              n = r.WordArray,
              o = r.Hasher,
              s = t.algo,
              a = [],
              u = [];
            !(function () {
              function t(t) {
                for (var r = e.sqrt(t), n = 2; n <= r; n++)
                  if (!(t % n)) return !1;
                return !0;
              }
              function r(e) {
                return (4294967296 * (e - (0 | e))) | 0;
              }
              for (var n = 2, i = 0; i < 64; )
                t(n) &&
                  (i < 8 && (a[i] = r(e.pow(n, 0.5))),
                  (u[i] = r(e.pow(n, 1 / 3))),
                  i++),
                  n++;
            })();
            var c = [],
              f = (s.SHA256 = o.extend({
                _doReset: function () {
                  this._hash = new n.init(a.slice(0));
                },
                _doProcessBlock: function (e, t) {
                  for (
                    var r = this._hash.words,
                      n = r[0],
                      i = r[1],
                      o = r[2],
                      s = r[3],
                      a = r[4],
                      f = r[5],
                      l = r[6],
                      d = r[7],
                      h = 0;
                    h < 64;
                    h++
                  ) {
                    if (h < 16) c[h] = 0 | e[t + h];
                    else {
                      var p = c[h - 15],
                        g =
                          ((p << 25) | (p >>> 7)) ^
                          ((p << 14) | (p >>> 18)) ^
                          (p >>> 3),
                        y = c[h - 2],
                        m =
                          ((y << 15) | (y >>> 17)) ^
                          ((y << 13) | (y >>> 19)) ^
                          (y >>> 10);
                      c[h] = g + c[h - 7] + m + c[h - 16];
                    }
                    var v = (n & i) ^ (n & o) ^ (i & o),
                      b =
                        ((n << 30) | (n >>> 2)) ^
                        ((n << 19) | (n >>> 13)) ^
                        ((n << 10) | (n >>> 22)),
                      w =
                        d +
                        (((a << 26) | (a >>> 6)) ^
                          ((a << 21) | (a >>> 11)) ^
                          ((a << 7) | (a >>> 25))) +
                        ((a & f) ^ (~a & l)) +
                        u[h] +
                        c[h];
                    (d = l),
                      (l = f),
                      (f = a),
                      (a = (s + w) | 0),
                      (s = o),
                      (o = i),
                      (i = n),
                      (n = (w + (b + v)) | 0);
                  }
                  (r[0] = (r[0] + n) | 0),
                    (r[1] = (r[1] + i) | 0),
                    (r[2] = (r[2] + o) | 0),
                    (r[3] = (r[3] + s) | 0),
                    (r[4] = (r[4] + a) | 0),
                    (r[5] = (r[5] + f) | 0),
                    (r[6] = (r[6] + l) | 0),
                    (r[7] = (r[7] + d) | 0);
                },
                _doFinalize: function () {
                  var t = this._data,
                    r = t.words,
                    n = 8 * this._nDataBytes,
                    i = 8 * t.sigBytes;
                  return (
                    (r[i >>> 5] |= 128 << (24 - (i % 32))),
                    (r[14 + (((i + 64) >>> 9) << 4)] = e.floor(n / 4294967296)),
                    (r[15 + (((i + 64) >>> 9) << 4)] = n),
                    (t.sigBytes = 4 * r.length),
                    this._process(),
                    this._hash
                  );
                },
                clone: function () {
                  var e = o.clone.call(this);
                  return (e._hash = this._hash.clone()), e;
                },
              }));
            (t.SHA256 = o._createHelper(f)),
              (t.HmacSHA256 = o._createHmacHelper(f));
          })(Math),
          i.SHA256);
      })();
    },
    lSCD: function (e, t, r) {
      var n = r("NykK"),
        i = r("GoyQ");
      e.exports = function (e) {
        if (!i(e)) return !1;
        var t = n(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    lSNA: function (e, t) {
      (e.exports = function (e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    lwAK: function (e, t, r) {
      "use strict";
      var n;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var i = (
        (n = r("q1tI")) && n.__esModule ? n : { default: n }
      ).default.createContext({});
      t.AmpStateContext = i;
    },
    m0iZ: function (e, t, r) {
      "use strict";
      var n, i;
      function o(e) {
        return (
          e &&
          !!["provider"].find(function (t) {
            return e.hasOwnProperty(t);
          })
        );
      }
      function s(e) {
        return (
          e &&
          !!["customProvider"].find(function (t) {
            return e.hasOwnProperty(t);
          })
        );
      }
      function a(e) {
        return (
          e &&
          !!["customState"].find(function (t) {
            return e.hasOwnProperty(t);
          })
        );
      }
      function u(e) {
        return void 0 !== e.redirectSignIn;
      }
      function c(e) {
        return !!e.username;
      }
      r.d(t, "b", function () {
        return n;
      }),
        r.d(t, "e", function () {
          return o;
        }),
        r.d(t, "f", function () {
          return s;
        }),
        r.d(t, "c", function () {
          return a;
        }),
        r.d(t, "d", function () {
          return u;
        }),
        r.d(t, "a", function () {
          return i;
        }),
        r.d(t, "g", function () {
          return c;
        }),
        (function (e) {
          (e.Cognito = "COGNITO"),
            (e.Google = "Google"),
            (e.Facebook = "Facebook"),
            (e.Amazon = "LoginWithAmazon"),
            (e.Apple = "SignInWithApple");
        })(n || (n = {})),
        (function (e) {
          (e.NoConfig = "noConfig"),
            (e.MissingAuthConfig = "missingAuthConfig"),
            (e.EmptyUsername = "emptyUsername"),
            (e.InvalidUsername = "invalidUsername"),
            (e.EmptyPassword = "emptyPassword"),
            (e.EmptyCode = "emptyCode"),
            (e.SignUpError = "signUpError"),
            (e.NoMFA = "noMFA"),
            (e.InvalidMFA = "invalidMFA"),
            (e.EmptyChallengeResponse = "emptyChallengeResponse"),
            (e.NoUserSession = "noUserSession"),
            (e.Default = "default");
        })(i || (i = {}));
    },
    mPvQ: function (e, t, r) {
      var n = r("5fIB"),
        i = r("rlHP"),
        o = r("KckH"),
        s = r("kG2m");
      e.exports = function (e) {
        return n(e) || i(e) || o(e) || s();
      };
    },
    mRvm: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var n = r("mrSG"),
        i = {
          name: "deserializerMiddleware",
          step: "deserialize",
          tags: ["DESERIALIZER"],
          override: !0,
        },
        o = {
          name: "serializerMiddleware",
          step: "serialize",
          tags: ["SERIALIZER"],
          override: !0,
        };
      function s(e, t, r) {
        return {
          applyToStack: function (s) {
            s.add(
              (function (e, t) {
                return function (r, i) {
                  return function (i) {
                    return Object(n.__awaiter)(
                      void 0,
                      void 0,
                      void 0,
                      function () {
                        var o, s;
                        return Object(n.__generator)(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return [4, r(i)];
                            case 1:
                              return (o = n.sent().response), [4, t(o, e)];
                            case 2:
                              return (
                                (s = n.sent()), [2, { response: o, output: s }]
                              );
                          }
                        });
                      }
                    );
                  };
                };
              })(e, r),
              i
            ),
              s.add(
                (function (e, t) {
                  return function (r, i) {
                    return function (i) {
                      return Object(n.__awaiter)(
                        void 0,
                        void 0,
                        void 0,
                        function () {
                          var o;
                          return Object(n.__generator)(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return [4, t(i.input, e)];
                              case 1:
                                return (
                                  (o = s.sent()),
                                  [
                                    2,
                                    r(
                                      Object(n.__assign)(
                                        Object(n.__assign)({}, i),
                                        { request: o }
                                      )
                                    ),
                                  ]
                                );
                            }
                          });
                        }
                      );
                    };
                  };
                })(e, t),
                o
              );
          },
        };
      }
    },
    mdPL: function (e, t, r) {
      (function (e) {
        var n = r("WFqU"),
          i = t && !t.nodeType && t,
          o = i && "object" == typeof e && e && !e.nodeType && e,
          s = o && o.exports === i && n.process,
          a = (function () {
            try {
              var e = o && o.require && o.require("util").types;
              return e || (s && s.binding && s.binding("util"));
            } catch (t) {}
          })();
        e.exports = a;
      }).call(this, r("LY0y")(e));
    },
    mrSG: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "__extends", function () {
          return i;
        }),
        r.d(t, "__assign", function () {
          return o;
        }),
        r.d(t, "__rest", function () {
          return s;
        }),
        r.d(t, "__decorate", function () {
          return a;
        }),
        r.d(t, "__param", function () {
          return u;
        }),
        r.d(t, "__metadata", function () {
          return c;
        }),
        r.d(t, "__awaiter", function () {
          return f;
        }),
        r.d(t, "__generator", function () {
          return l;
        }),
        r.d(t, "__createBinding", function () {
          return d;
        }),
        r.d(t, "__exportStar", function () {
          return h;
        }),
        r.d(t, "__values", function () {
          return p;
        }),
        r.d(t, "__read", function () {
          return g;
        }),
        r.d(t, "__spread", function () {
          return y;
        }),
        r.d(t, "__spreadArrays", function () {
          return m;
        }),
        r.d(t, "__await", function () {
          return v;
        }),
        r.d(t, "__asyncGenerator", function () {
          return b;
        }),
        r.d(t, "__asyncDelegator", function () {
          return w;
        }),
        r.d(t, "__asyncValues", function () {
          return S;
        }),
        r.d(t, "__makeTemplateObject", function () {
          return _;
        }),
        r.d(t, "__importStar", function () {
          return A;
        }),
        r.d(t, "__importDefault", function () {
          return C;
        }),
        r.d(t, "__classPrivateFieldGet", function () {
          return O;
        }),
        r.d(t, "__classPrivateFieldSet", function () {
          return E;
        });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      function i(e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function s(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        }
        return r;
      }
      function a(e, t, r, n) {
        var i,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) &&
              (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
        return o > 3 && s && Object.defineProperty(t, r, s), s;
      }
      function u(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function c(e, t) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      function f(e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              u(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function a(e) {
            try {
              u(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          u((n = n.apply(e, t || [])).next());
        });
      }
      function l(e, t) {
        var r,
          n,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & o[0]
                          ? n.return
                          : o[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, o[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (n = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (a) {
                  (o = [6, a]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function d(e, t, r, n) {
        void 0 === n && (n = r), (e[n] = t[r]);
      }
      function h(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function p(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(e, t) {
        var r = "function" === typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          o = r.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
            s.push(n.value);
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function m() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++)
          for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++)
            n[i] = o[s];
        return n;
      }
      function v(e) {
        return this instanceof v ? ((this.v = e), this) : new v(e);
      }
      function b(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          i = r.apply(e, t || []),
          o = [];
        return (
          (n = {}),
          s("next"),
          s("throw"),
          s("return"),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function s(e) {
          i[e] &&
            (n[e] = function (t) {
              return new Promise(function (r, n) {
                o.push([e, t, r, n]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = i[e](t)).value instanceof v
              ? Promise.resolve(r.value.v).then(u, c)
              : f(o[0][2], r);
          } catch (n) {
            f(o[0][3], n);
          }
          var r;
        }
        function u(e) {
          a("next", e);
        }
        function c(e) {
          a("throw", e);
        }
        function f(e, t) {
          e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
      }
      function w(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, i) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: v(e[n](t)), done: "return" === n }
                  : i
                  ? i(t)
                  : t;
              }
            : i;
        }
      }
      function S(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = p(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, i) {
                (function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, i, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function _(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function A(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function C(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function O(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function E(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    nHoN: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r("mrSG").__exportStar(r("AQMs"), t);
    },
    naxo: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      });
      var n = r("mrSG"),
        i = r("Enk7"),
        o = "content-length";
      var s = {
          step: "build",
          tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
          name: "contentLengthMiddleware",
          override: !0,
        },
        a = function (e) {
          return {
            applyToStack: function (t) {
              t.add(
                (function (e) {
                  var t = this;
                  return function (r) {
                    return function (s) {
                      return Object(n.__awaiter)(
                        t,
                        void 0,
                        void 0,
                        function () {
                          var t, a, u, c, f;
                          return Object(n.__generator)(this, function (l) {
                            return (
                              (t = s.request),
                              i.a.isInstance(t) &&
                                ((a = t.body),
                                (u = t.headers),
                                a &&
                                  -1 ===
                                    Object.keys(u)
                                      .map(function (e) {
                                        return e.toLowerCase();
                                      })
                                      .indexOf(o) &&
                                  void 0 !== (c = e(a)) &&
                                  (t.headers = Object(n.__assign)(
                                    Object(n.__assign)({}, t.headers),
                                    (((f = {})["content-length"] = String(c)),
                                    f)
                                  ))),
                              [
                                2,
                                r(
                                  Object(n.__assign)(
                                    Object(n.__assign)({}, s),
                                    { request: t }
                                  )
                                ),
                              ]
                            );
                          });
                        }
                      );
                    };
                  };
                })(e.bodyLengthChecker),
                s
              );
            },
          };
        };
    },
    nmnc: function (e, t, r) {
      var n = r("Kz5y").Symbol;
      e.exports = n;
    },
    ntEb: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.supportsZeroByteGCM =
          t.supportsSubtleCrypto =
          t.supportsSecureRandom =
          t.supportsWebCrypto =
            void 0);
      var n = r("mrSG"),
        i = [
          "decrypt",
          "digest",
          "encrypt",
          "exportKey",
          "generateKey",
          "importKey",
          "sign",
          "verify",
        ];
      function o(e) {
        return (
          "object" === typeof e &&
          "object" === typeof e.crypto &&
          "function" === typeof e.crypto.getRandomValues
        );
      }
      function s(e) {
        return (
          e &&
          i.every(function (t) {
            return "function" === typeof e[t];
          })
        );
      }
      (t.supportsWebCrypto = function (e) {
        return (
          !(!o(e) || "object" !== typeof e.crypto.subtle) && s(e.crypto.subtle)
        );
      }),
        (t.supportsSecureRandom = o),
        (t.supportsSubtleCrypto = s),
        (t.supportsZeroByteGCM = function (e) {
          return n.__awaiter(this, void 0, void 0, function () {
            var t;
            return n.__generator(this, function (r) {
              switch (r.label) {
                case 0:
                  if (!s(e)) return [2, !1];
                  r.label = 1;
                case 1:
                  return (
                    r.trys.push([1, 4, , 5]),
                    [
                      4,
                      e.generateKey({ name: "AES-GCM", length: 128 }, !1, [
                        "encrypt",
                      ]),
                    ]
                  );
                case 2:
                  return (
                    (t = r.sent()),
                    [
                      4,
                      e.encrypt(
                        {
                          name: "AES-GCM",
                          iv: new Uint8Array(Array(12)),
                          additionalData: new Uint8Array(Array(16)),
                          tagLength: 128,
                        },
                        t,
                        new Uint8Array(0)
                      ),
                    ]
                  );
                case 3:
                  return [2, 16 === r.sent().byteLength];
                case 4:
                  return r.sent(), [2, !1];
                case 5:
                  return [2];
              }
            });
          });
        });
    },
    p46w: function (e, t, r) {
      var n, i;
      !(function (o) {
        if (
          (void 0 ===
            (i = "function" === typeof (n = o) ? n.call(t, r, t, e) : n) ||
            (e.exports = i),
          !0,
          (e.exports = o()),
          !!0)
        ) {
          var s = window.Cookies,
            a = (window.Cookies = o());
          a.noConflict = function () {
            return (window.Cookies = s), a;
          };
        }
      })(function () {
        function e() {
          for (var e = 0, t = {}; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) t[n] = r[n];
          }
          return t;
        }
        function t(e) {
          return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        return (function r(n) {
          function i() {}
          function o(t, r, o) {
            if ("undefined" !== typeof document) {
              "number" ===
                typeof (o = e({ path: "/" }, i.defaults, o)).expires &&
                (o.expires = new Date(1 * new Date() + 864e5 * o.expires)),
                (o.expires = o.expires ? o.expires.toUTCString() : "");
              try {
                var s = JSON.stringify(r);
                /^[\{\[]/.test(s) && (r = s);
              } catch (c) {}
              (r = n.write
                ? n.write(r, t)
                : encodeURIComponent(String(r)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
                (t = encodeURIComponent(String(t))
                  .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[\(\)]/g, escape));
              var a = "";
              for (var u in o)
                o[u] &&
                  ((a += "; " + u),
                  !0 !== o[u] && (a += "=" + o[u].split(";")[0]));
              return (document.cookie = t + "=" + r + a);
            }
          }
          function s(e, r) {
            if ("undefined" !== typeof document) {
              for (
                var i = {},
                  o = document.cookie ? document.cookie.split("; ") : [],
                  s = 0;
                s < o.length;
                s++
              ) {
                var a = o[s].split("="),
                  u = a.slice(1).join("=");
                r || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                try {
                  var c = t(a[0]);
                  if (((u = (n.read || n)(u, c) || t(u)), r))
                    try {
                      u = JSON.parse(u);
                    } catch (f) {}
                  if (((i[c] = u), e === c)) break;
                } catch (f) {}
              }
              return e ? i[e] : i;
            }
          }
          return (
            (i.set = o),
            (i.get = function (e) {
              return s(e, !1);
            }),
            (i.getJSON = function (e) {
              return s(e, !0);
            }),
            (i.remove = function (t, r) {
              o(t, "", e(r, { expires: -1 }));
            }),
            (i.defaults = {}),
            (i.withConverter = r),
            i
          );
        })(function () {});
      });
    },
    p72H: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EMPTY_DATA_SHA_256 = t.SHA_256_HMAC_ALGO = t.SHA_256_HASH = void 0),
        (t.SHA_256_HASH = { name: "SHA-256" }),
        (t.SHA_256_HMAC_ALGO = { name: "HMAC", hash: t.SHA_256_HASH }),
        (t.EMPTY_DATA_SHA_256 = new Uint8Array([
          227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111,
          185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120,
          82, 184, 85,
        ]));
    },
    qKvR: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return y;
      }),
        r.d(t, "d", function () {
          return m;
        }),
        r.d(t, "a", function () {
          return A;
        }),
        r.d(t, "c", function () {
          return _;
        });
      var n = r("dI71"),
        i = r("q1tI");
      var o = (function () {
          function e(e) {
            (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.insert = function (e) {
              if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
                var t,
                  r = (function (e) {
                    var t = document.createElement("style");
                    return (
                      t.setAttribute("data-emotion", e.key),
                      void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                      t.appendChild(document.createTextNode("")),
                      t
                    );
                  })(this);
                (t =
                  0 === this.tags.length
                    ? this.before
                    : this.tags[this.tags.length - 1].nextSibling),
                  this.container.insertBefore(r, t),
                  this.tags.push(r);
              }
              var n = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var i = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(n);
                try {
                  var o = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
                  i.insertRule(e, o ? 0 : i.cssRules.length);
                } catch (s) {
                  0;
                }
              } else n.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        s = r("0x0X"),
        a = "/*|*/";
      function u(e) {
        e && c.current.insert(e + "}");
      }
      var c = { current: null },
        f = function (e, t, r, n, i, o, s, f, l, d) {
          switch (e) {
            case 1:
              switch (t.charCodeAt(0)) {
                case 64:
                  return c.current.insert(t + ";"), "";
                case 108:
                  if (98 === t.charCodeAt(2)) return "";
              }
              break;
            case 2:
              if (0 === f) return t + a;
              break;
            case 3:
              switch (f) {
                case 102:
                case 112:
                  return c.current.insert(r[0] + t), "";
                default:
                  return t + (0 === d ? a : "");
              }
            case -2:
              t.split("/*|*/}").forEach(u);
          }
        },
        l = function (e) {
          void 0 === e && (e = {});
          var t,
            r = e.key || "css";
          void 0 !== e.prefix && (t = { prefix: e.prefix });
          var n = new s.a(t);
          var i,
            a = {};
          i = e.container || document.head;
          var u,
            l = document.querySelectorAll("style[data-emotion-" + r + "]");
          Array.prototype.forEach.call(l, function (e) {
            e
              .getAttribute("data-emotion-" + r)
              .split(" ")
              .forEach(function (e) {
                a[e] = !0;
              }),
              e.parentNode !== i && i.appendChild(e);
          }),
            n.use(e.stylisPlugins)(f),
            (u = function (e, t, r, i) {
              var o = t.name;
              (c.current = r), n(e, t.styles), i && (d.inserted[o] = !0);
            });
          var d = {
            key: r,
            sheet: new o({
              key: r,
              container: i,
              nonce: e.nonce,
              speedy: e.speedy,
            }),
            nonce: e.nonce,
            inserted: a,
            registered: {},
            insert: u,
          };
          return d;
        },
        d = (r("VbXa"), r("SIPS")),
        h = r("MiSq"),
        p = Object.prototype.hasOwnProperty,
        g = Object(i.createContext)(
          "undefined" !== typeof HTMLElement ? l() : null
        ),
        y = Object(i.createContext)({}),
        m =
          (g.Provider,
          function (e) {
            var t = function (t, r) {
              return Object(i.createElement)(g.Consumer, null, function (n) {
                return e(t, n, r);
              });
            };
            return Object(i.forwardRef)(t);
          }),
        v = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        b = function (e, t) {
          var r = {};
          for (var n in t) p.call(t, n) && (r[n] = t[n]);
          return (r[v] = e), r;
        },
        w = function (e, t, r, n) {
          var o = null === r ? t.css : t.css(r);
          "string" === typeof o &&
            void 0 !== e.registered[o] &&
            (o = e.registered[o]);
          var s = t[v],
            a = [o],
            u = "";
          "string" === typeof t.className
            ? (u = Object(d.a)(e.registered, a, t.className))
            : null != t.className && (u = t.className + " ");
          var c = Object(h.a)(a);
          Object(d.b)(e, c, "string" === typeof s);
          u += e.key + "-" + c.name;
          var f = {};
          for (var l in t)
            p.call(t, l) && "css" !== l && l !== v && (f[l] = t[l]);
          return (f.ref = n), (f.className = u), Object(i.createElement)(s, f);
        },
        S = m(function (e, t, r) {
          return "function" === typeof e.css
            ? Object(i.createElement)(y.Consumer, null, function (n) {
                return w(t, e, n, r);
              })
            : w(t, e, null, r);
        });
      var _ = function (e, t) {
          var r = arguments;
          if (null == t || !p.call(t, "css"))
            return i.createElement.apply(void 0, r);
          var n = r.length,
            o = new Array(n);
          (o[0] = S), (o[1] = b(e, t));
          for (var s = 2; s < n; s++) o[s] = r[s];
          return i.createElement.apply(null, o);
        },
        A = m(function (e, t) {
          var r = e.styles;
          if ("function" === typeof r)
            return Object(i.createElement)(y.Consumer, null, function (e) {
              var n = Object(h.a)([r(e)]);
              return Object(i.createElement)(C, { serialized: n, cache: t });
            });
          var n = Object(h.a)([r]);
          return Object(i.createElement)(C, { serialized: n, cache: t });
        }),
        C = (function (e) {
          function t(t, r, n) {
            return e.call(this, t, r, n) || this;
          }
          Object(n.a)(t, e);
          var r = t.prototype;
          return (
            (r.componentDidMount = function () {
              this.sheet = new o({
                key: this.props.cache.key + "-global",
                nonce: this.props.cache.sheet.nonce,
                container: this.props.cache.sheet.container,
              });
              var e = document.querySelector(
                "style[data-emotion-" +
                  this.props.cache.key +
                  '="' +
                  this.props.serialized.name +
                  '"]'
              );
              null !== e && this.sheet.tags.push(e),
                this.props.cache.sheet.tags.length &&
                  (this.sheet.before = this.props.cache.sheet.tags[0]),
                this.insertStyles();
            }),
            (r.componentDidUpdate = function (e) {
              e.serialized.name !== this.props.serialized.name &&
                this.insertStyles();
            }),
            (r.insertStyles = function () {
              if (
                (void 0 !== this.props.serialized.next &&
                  Object(d.b)(this.props.cache, this.props.serialized.next, !0),
                this.sheet.tags.length)
              ) {
                var e =
                  this.sheet.tags[this.sheet.tags.length - 1]
                    .nextElementSibling;
                (this.sheet.before = e), this.sheet.flush();
              }
              this.props.cache.insert(
                "",
                this.props.serialized,
                this.sheet,
                !1
              );
            }),
            (r.componentWillUnmount = function () {
              this.sheet.flush();
            }),
            (r.render = function () {
              return null;
            }),
            t
          );
        })(i.Component),
        O = function e(t) {
          for (var r = t.length, n = 0, i = ""; n < r; n++) {
            var o = t[n];
            if (null != o) {
              var s = void 0;
              switch (typeof o) {
                case "boolean":
                  break;
                case "object":
                  if (Array.isArray(o)) s = e(o);
                  else
                    for (var a in ((s = ""), o))
                      o[a] && a && (s && (s += " "), (s += a));
                  break;
                default:
                  s = o;
              }
              s && (i && (i += " "), (i += s));
            }
          }
          return i;
        };
      function E(e, t, r) {
        var n = [],
          i = Object(d.a)(e, n, r);
        return n.length < 2 ? r : i + t(n);
      }
      m(function (e, t) {
        return Object(i.createElement)(y.Consumer, null, function (r) {
          var n = function () {
              for (
                var e = arguments.length, r = new Array(e), n = 0;
                n < e;
                n++
              )
                r[n] = arguments[n];
              var i = Object(h.a)(r, t.registered);
              return Object(d.b)(t, i, !1), t.key + "-" + i.name;
            },
            i = {
              css: n,
              cx: function () {
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                return E(t.registered, n, O(r));
              },
              theme: r,
            },
            o = e.children(i);
          return !0, o;
        });
      });
    },
    qT12: function (e, t, r) {
      "use strict";
      var n = 60103,
        i = 60106,
        o = 60107,
        s = 60108,
        a = 60114,
        u = 60109,
        c = 60110,
        f = 60112,
        l = 60113,
        d = 60120,
        h = 60115,
        p = 60116,
        g = 60121,
        y = 60122,
        m = 60117,
        v = 60129,
        b = 60131;
      if ("function" === typeof Symbol && Symbol.for) {
        var w = Symbol.for;
        (n = w("react.element")),
          (i = w("react.portal")),
          (o = w("react.fragment")),
          (s = w("react.strict_mode")),
          (a = w("react.profiler")),
          (u = w("react.provider")),
          (c = w("react.context")),
          (f = w("react.forward_ref")),
          (l = w("react.suspense")),
          (d = w("react.suspense_list")),
          (h = w("react.memo")),
          (p = w("react.lazy")),
          (g = w("react.block")),
          (y = w("react.server.block")),
          (m = w("react.fundamental")),
          (v = w("react.debug_trace_mode")),
          (b = w("react.legacy_hidden"));
      }
      function S(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case o:
                case a:
                case s:
                case l:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case f:
                    case p:
                    case h:
                    case u:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      var _ = u,
        A = n,
        C = f,
        O = o,
        E = p,
        k = h,
        P = i,
        x = a,
        I = s,
        j = l;
      (t.ContextConsumer = c),
        (t.ContextProvider = _),
        (t.Element = A),
        (t.ForwardRef = C),
        (t.Fragment = O),
        (t.Lazy = E),
        (t.Memo = k),
        (t.Portal = P),
        (t.Profiler = x),
        (t.StrictMode = I),
        (t.Suspense = j),
        (t.isAsyncMode = function () {
          return !1;
        }),
        (t.isConcurrentMode = function () {
          return !1;
        }),
        (t.isContextConsumer = function (e) {
          return S(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return S(e) === u;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }),
        (t.isForwardRef = function (e) {
          return S(e) === f;
        }),
        (t.isFragment = function (e) {
          return S(e) === o;
        }),
        (t.isLazy = function (e) {
          return S(e) === p;
        }),
        (t.isMemo = function (e) {
          return S(e) === h;
        }),
        (t.isPortal = function (e) {
          return S(e) === i;
        }),
        (t.isProfiler = function (e) {
          return S(e) === a;
        }),
        (t.isStrictMode = function (e) {
          return S(e) === s;
        }),
        (t.isSuspense = function (e) {
          return S(e) === l;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === o ||
            e === a ||
            e === v ||
            e === s ||
            e === l ||
            e === d ||
            e === b ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === p ||
                e.$$typeof === h ||
                e.$$typeof === u ||
                e.$$typeof === c ||
                e.$$typeof === f ||
                e.$$typeof === m ||
                e.$$typeof === g ||
                e[0] === y))
          );
        }),
        (t.typeOf = S);
    },
    qcsT: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return o;
      }),
        r.d(t, "a", function () {
          return l;
        });
      var n = r("mrSG"),
        i = r("ko+D");
      function o(e) {
        var t,
          r = this,
          o = s(e.credentials || e.credentialDefaultProvider(e)),
          a = e.signingEscapePath,
          u = void 0 === a || a,
          c = e.systemClockOffset,
          f = void 0 === c ? e.systemClockOffset || 0 : c,
          l = e.sha256;
        return (
          (t = e.signer
            ? s(e.signer)
            : function () {
                return s(e.region)()
                  .then(function (t) {
                    return Object(n.__awaiter)(r, void 0, void 0, function () {
                      return Object(n.__generator)(this, function (r) {
                        switch (r.label) {
                          case 0:
                            return [4, e.regionInfoProvider(t)];
                          case 1:
                            return [2, [r.sent() || {}, t]];
                        }
                      });
                    });
                  })
                  .then(function (t) {
                    var r = Object(n.__read)(t, 2),
                      s = r[0],
                      a = r[1],
                      c = s.signingRegion,
                      f = s.signingService;
                    return (
                      (e.signingRegion = e.signingRegion || c || a),
                      (e.signingName = e.signingName || f || e.serviceId),
                      new i.a({
                        credentials: o,
                        region: e.signingRegion,
                        service: e.signingName,
                        sha256: l,
                        uriEscapePath: u,
                      })
                    );
                  });
              }),
          Object(n.__assign)(Object(n.__assign)({}, e), {
            systemClockOffset: f,
            signingEscapePath: u,
            credentials: o,
            signer: t,
          })
        );
      }
      function s(e) {
        if ("object" === typeof e) {
          var t = Promise.resolve(e);
          return function () {
            return t;
          };
        }
        return e;
      }
      var a = r("Enk7"),
        u = function (e) {
          return new Date(Date.now() + e);
        };
      function c(e) {
        return function (t, r) {
          return function (i) {
            return Object(n.__awaiter)(this, void 0, void 0, function () {
              var o, s, c, f, l, d, h, p, g;
              return Object(n.__generator)(this, function (y) {
                switch (y.label) {
                  case 0:
                    return a.a.isInstance(i.request)
                      ? "function" !== typeof e.signer
                        ? [3, 2]
                        : [4, e.signer()]
                      : [2, t(i)];
                  case 1:
                    return (s = y.sent()), [3, 3];
                  case 2:
                    (s = e.signer), (y.label = 3);
                  case 3:
                    return (
                      (o = s),
                      (f = t),
                      (l = [Object(n.__assign)({}, i)]),
                      (g = {}),
                      [
                        4,
                        o.sign(i.request, {
                          signingDate: new Date(
                            Date.now() + e.systemClockOffset
                          ),
                          signingRegion: r.signing_region,
                          signingService: r.signing_service,
                        }),
                      ]
                    );
                  case 4:
                    return [
                      4,
                      f.apply(void 0, [
                        n.__assign.apply(
                          void 0,
                          l.concat([((g.request = y.sent()), g)])
                        ),
                      ]),
                    ];
                  case 5:
                    return (
                      (c = y.sent()),
                      (d = c.response.headers),
                      (h = d && (d.date || d.Date)) &&
                        ((p = Date.parse(h)),
                        (m = p),
                        (v = e.systemClockOffset),
                        Math.abs(u(v).getTime() - m) >= 3e5 &&
                          (e.systemClockOffset = p - Date.now())),
                      [2, c]
                    );
                }
                var m, v;
              });
            });
          };
        };
      }
      var f = {
          name: "awsAuthMiddleware",
          tags: ["SIGNATURE", "AWSAUTH"],
          relation: "after",
          toMiddleware: "retryMiddleware",
          override: !0,
        },
        l = function (e) {
          return {
            applyToStack: function (t) {
              t.addRelativeTo(c(e), f);
            },
          };
        };
    },
    r36Y: function (e, t, r) {
      "use strict";
      e.exports = r("Copi");
    },
    rKjV: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "props", function () {
          return s;
        }),
        r.d(t, "createShouldForwardProp", function () {
          return a;
        });
      var n = r("4qRI"),
        i = r("9uj6"),
        o = r("za5s"),
        s = Object(o.compose)(
          o.space,
          o.typography,
          o.color,
          o.layout,
          o.flexbox,
          o.border,
          o.background,
          o.position,
          o.grid,
          o.shadow,
          o.buttonStyle,
          o.textStyle,
          o.colorStyle
        ).propNames,
        a = function (e) {
          var t = new RegExp("^(" + e.join("|") + ")$");
          return Object(n.a)(function (e) {
            return Object(i.a)(e) && !t.test(e);
          });
        };
      t.default = a(s);
    },
    rU8T: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    s4NR: function (e, t, r) {
      "use strict";
      (t.decode = t.parse = r("kd2E")), (t.encode = t.stringify = r("4JlD"));
    },
    sEf8: function (e, t) {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    shjB: function (e, t) {
      e.exports = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    tadb: function (e, t, r) {
      var n = r("Cwc5")(r("Kz5y"), "DataView");
      e.exports = n;
    },
    tjlA: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r("H7XF"),
          i = r("kVK+"),
          o = r("49sm");
        function s() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(e, t) {
          if (s() < t) throw new RangeError("Invalid typed array length");
          return (
            u.TYPED_ARRAY_SUPPORT
              ? ((e = new Uint8Array(t)).__proto__ = u.prototype)
              : (null === e && (e = new u(t)), (e.length = t)),
            e
          );
        }
        function u(e, t, r) {
          if (!u.TYPED_ARRAY_SUPPORT && !(this instanceof u))
            return new u(e, t, r);
          if ("number" === typeof e) {
            if ("string" === typeof t)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return l(this, e);
          }
          return c(this, e, t, r);
        }
        function c(e, t, r, n) {
          if ("number" === typeof t)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer
            ? (function (e, t, r, n) {
                if ((t.byteLength, r < 0 || t.byteLength < r))
                  throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (n || 0))
                  throw new RangeError("'length' is out of bounds");
                t =
                  void 0 === r && void 0 === n
                    ? new Uint8Array(t)
                    : void 0 === n
                    ? new Uint8Array(t, r)
                    : new Uint8Array(t, r, n);
                u.TYPED_ARRAY_SUPPORT
                  ? ((e = t).__proto__ = u.prototype)
                  : (e = d(e, t));
                return e;
              })(e, t, r, n)
            : "string" === typeof t
            ? (function (e, t, r) {
                ("string" === typeof r && "" !== r) || (r = "utf8");
                if (!u.isEncoding(r))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var n = 0 | p(t, r),
                  i = (e = a(e, n)).write(t, r);
                i !== n && (e = e.slice(0, i));
                return e;
              })(e, t, r)
            : (function (e, t) {
                if (u.isBuffer(t)) {
                  var r = 0 | h(t.length);
                  return 0 === (e = a(e, r)).length || t.copy(e, 0, 0, r), e;
                }
                if (t) {
                  if (
                    ("undefined" !== typeof ArrayBuffer &&
                      t.buffer instanceof ArrayBuffer) ||
                    "length" in t
                  )
                    return "number" !== typeof t.length || (n = t.length) !== n
                      ? a(e, 0)
                      : d(e, t);
                  if ("Buffer" === t.type && o(t.data)) return d(e, t.data);
                }
                var n;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(e, t);
        }
        function f(e) {
          if ("number" !== typeof e)
            throw new TypeError('"size" argument must be a number');
          if (e < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function l(e, t) {
          if ((f(t), (e = a(e, t < 0 ? 0 : 0 | h(t))), !u.TYPED_ARRAY_SUPPORT))
            for (var r = 0; r < t; ++r) e[r] = 0;
          return e;
        }
        function d(e, t) {
          var r = t.length < 0 ? 0 : 0 | h(t.length);
          e = a(e, r);
          for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
          return e;
        }
        function h(e) {
          if (e >= s())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                s().toString(16) +
                " bytes"
            );
          return 0 | e;
        }
        function p(e, t) {
          if (u.isBuffer(e)) return e.length;
          if (
            "undefined" !== typeof ArrayBuffer &&
            "function" === typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
          )
            return e.byteLength;
          "string" !== typeof e && (e = "" + e);
          var r = e.length;
          if (0 === r) return 0;
          for (var n = !1; ; )
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
              case void 0:
                return z(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return H(e).length;
              default:
                if (n) return z(e).length;
                (t = ("" + t).toLowerCase()), (n = !0);
            }
        }
        function g(e, t, r) {
          var n = !1;
          if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
          if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
            return "";
          if ((r >>>= 0) <= (t >>>= 0)) return "";
          for (e || (e = "utf8"); ; )
            switch (e) {
              case "hex":
                return I(this, t, r);
              case "utf8":
              case "utf-8":
                return E(this, t, r);
              case "ascii":
                return P(this, t, r);
              case "latin1":
              case "binary":
                return x(this, t, r);
              case "base64":
                return O(this, t, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return j(this, t, r);
              default:
                if (n) throw new TypeError("Unknown encoding: " + e);
                (e = (e + "").toLowerCase()), (n = !0);
            }
        }
        function y(e, t, r) {
          var n = e[t];
          (e[t] = e[r]), (e[r] = n);
        }
        function m(e, t, r, n, i) {
          if (0 === e.length) return -1;
          if (
            ("string" === typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            (r = +r),
            isNaN(r) && (r = i ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length)
          ) {
            if (i) return -1;
            r = e.length - 1;
          } else if (r < 0) {
            if (!i) return -1;
            r = 0;
          }
          if (("string" === typeof t && (t = u.from(t, n)), u.isBuffer(t)))
            return 0 === t.length ? -1 : v(e, t, r, n, i);
          if ("number" === typeof t)
            return (
              (t &= 255),
              u.TYPED_ARRAY_SUPPORT &&
              "function" === typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(e, t, r)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                : v(e, [t], r, n, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function v(e, t, r, n, i) {
          var o,
            s = 1,
            a = e.length,
            u = t.length;
          if (
            void 0 !== n &&
            ("ucs2" === (n = String(n).toLowerCase()) ||
              "ucs-2" === n ||
              "utf16le" === n ||
              "utf-16le" === n)
          ) {
            if (e.length < 2 || t.length < 2) return -1;
            (s = 2), (a /= 2), (u /= 2), (r /= 2);
          }
          function c(e, t) {
            return 1 === s ? e[t] : e.readUInt16BE(t * s);
          }
          if (i) {
            var f = -1;
            for (o = r; o < a; o++)
              if (c(e, o) === c(t, -1 === f ? 0 : o - f)) {
                if ((-1 === f && (f = o), o - f + 1 === u)) return f * s;
              } else -1 !== f && (o -= o - f), (f = -1);
          } else
            for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
              for (var l = !0, d = 0; d < u; d++)
                if (c(e, o + d) !== c(t, d)) {
                  l = !1;
                  break;
                }
              if (l) return o;
            }
          return -1;
        }
        function b(e, t, r, n) {
          r = Number(r) || 0;
          var i = e.length - r;
          n ? (n = Number(n)) > i && (n = i) : (n = i);
          var o = t.length;
          if (o % 2 !== 0) throw new TypeError("Invalid hex string");
          n > o / 2 && (n = o / 2);
          for (var s = 0; s < n; ++s) {
            var a = parseInt(t.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            e[r + s] = a;
          }
          return s;
        }
        function w(e, t, r, n) {
          return q(z(t, e.length - r), e, r, n);
        }
        function S(e, t, r, n) {
          return q(
            (function (e) {
              for (var t = [], r = 0; r < e.length; ++r)
                t.push(255 & e.charCodeAt(r));
              return t;
            })(t),
            e,
            r,
            n
          );
        }
        function _(e, t, r, n) {
          return S(e, t, r, n);
        }
        function A(e, t, r, n) {
          return q(H(t), e, r, n);
        }
        function C(e, t, r, n) {
          return q(
            (function (e, t) {
              for (
                var r, n, i, o = [], s = 0;
                s < e.length && !((t -= 2) < 0);
                ++s
              )
                (n = (r = e.charCodeAt(s)) >> 8),
                  (i = r % 256),
                  o.push(i),
                  o.push(n);
              return o;
            })(t, e.length - r),
            e,
            r,
            n
          );
        }
        function O(e, t, r) {
          return 0 === t && r === e.length
            ? n.fromByteArray(e)
            : n.fromByteArray(e.slice(t, r));
        }
        function E(e, t, r) {
          r = Math.min(e.length, r);
          for (var n = [], i = t; i < r; ) {
            var o,
              s,
              a,
              u,
              c = e[i],
              f = null,
              l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (i + l <= r)
              switch (l) {
                case 1:
                  c < 128 && (f = c);
                  break;
                case 2:
                  128 === (192 & (o = e[i + 1])) &&
                    (u = ((31 & c) << 6) | (63 & o)) > 127 &&
                    (f = u);
                  break;
                case 3:
                  (o = e[i + 1]),
                    (s = e[i + 2]),
                    128 === (192 & o) &&
                      128 === (192 & s) &&
                      (u = ((15 & c) << 12) | ((63 & o) << 6) | (63 & s)) >
                        2047 &&
                      (u < 55296 || u > 57343) &&
                      (f = u);
                  break;
                case 4:
                  (o = e[i + 1]),
                    (s = e[i + 2]),
                    (a = e[i + 3]),
                    128 === (192 & o) &&
                      128 === (192 & s) &&
                      128 === (192 & a) &&
                      (u =
                        ((15 & c) << 18) |
                        ((63 & o) << 12) |
                        ((63 & s) << 6) |
                        (63 & a)) > 65535 &&
                      u < 1114112 &&
                      (f = u);
              }
            null === f
              ? ((f = 65533), (l = 1))
              : f > 65535 &&
                ((f -= 65536),
                n.push(((f >>> 10) & 1023) | 55296),
                (f = 56320 | (1023 & f))),
              n.push(f),
              (i += l);
          }
          return (function (e) {
            var t = e.length;
            if (t <= k) return String.fromCharCode.apply(String, e);
            var r = "",
              n = 0;
            for (; n < t; )
              r += String.fromCharCode.apply(String, e.slice(n, (n += k)));
            return r;
          })(n);
        }
        (t.Buffer = u),
          (t.SlowBuffer = function (e) {
            +e != e && (e = 0);
            return u.alloc(+e);
          }),
          (t.INSPECT_MAX_BYTES = 50),
          (u.TYPED_ARRAY_SUPPORT =
            void 0 !== e.TYPED_ARRAY_SUPPORT
              ? e.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var e = new Uint8Array(1);
                    return (
                      (e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === e.foo() &&
                        "function" === typeof e.subarray &&
                        0 === e.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (t.kMaxLength = s()),
          (u.poolSize = 8192),
          (u._augment = function (e) {
            return (e.__proto__ = u.prototype), e;
          }),
          (u.from = function (e, t, r) {
            return c(null, e, t, r);
          }),
          u.TYPED_ARRAY_SUPPORT &&
            ((u.prototype.__proto__ = Uint8Array.prototype),
            (u.__proto__ = Uint8Array),
            "undefined" !== typeof Symbol &&
              Symbol.species &&
              u[Symbol.species] === u &&
              Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (u.alloc = function (e, t, r) {
            return (function (e, t, r, n) {
              return (
                f(t),
                t <= 0
                  ? a(e, t)
                  : void 0 !== r
                  ? "string" === typeof n
                    ? a(e, t).fill(r, n)
                    : a(e, t).fill(r)
                  : a(e, t)
              );
            })(null, e, t, r);
          }),
          (u.allocUnsafe = function (e) {
            return l(null, e);
          }),
          (u.allocUnsafeSlow = function (e) {
            return l(null, e);
          }),
          (u.isBuffer = function (e) {
            return !(null == e || !e._isBuffer);
          }),
          (u.compare = function (e, t) {
            if (!u.isBuffer(e) || !u.isBuffer(t))
              throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (
              var r = e.length, n = t.length, i = 0, o = Math.min(r, n);
              i < o;
              ++i
            )
              if (e[i] !== t[i]) {
                (r = e[i]), (n = t[i]);
                break;
              }
            return r < n ? -1 : n < r ? 1 : 0;
          }),
          (u.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function (e, t) {
            if (!o(e))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === e.length) return u.alloc(0);
            var r;
            if (void 0 === t)
              for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            var n = u.allocUnsafe(t),
              i = 0;
            for (r = 0; r < e.length; ++r) {
              var s = e[r];
              if (!u.isBuffer(s))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              s.copy(n, i), (i += s.length);
            }
            return n;
          }),
          (u.byteLength = p),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 !== 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) y(this, t, t + 1);
            return this;
          }),
          (u.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 !== 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
              y(this, t, t + 3), y(this, t + 1, t + 2);
            return this;
          }),
          (u.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 !== 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
              y(this, t, t + 7),
                y(this, t + 1, t + 6),
                y(this, t + 2, t + 5),
                y(this, t + 3, t + 4);
            return this;
          }),
          (u.prototype.toString = function () {
            var e = 0 | this.length;
            return 0 === e
              ? ""
              : 0 === arguments.length
              ? E(this, 0, e)
              : g.apply(this, arguments);
          }),
          (u.prototype.equals = function (e) {
            if (!u.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === u.compare(this, e);
          }),
          (u.prototype.inspect = function () {
            var e = "",
              r = t.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((e = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
                this.length > r && (e += " ... ")),
              "<Buffer " + e + ">"
            );
          }),
          (u.prototype.compare = function (e, t, r, n, i) {
            if (!u.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === t && (t = 0),
              void 0 === r && (r = e ? e.length : 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = this.length),
              t < 0 || r > e.length || n < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (n >= i && t >= r) return 0;
            if (n >= i) return -1;
            if (t >= r) return 1;
            if (this === e) return 0;
            for (
              var o = (i >>>= 0) - (n >>>= 0),
                s = (r >>>= 0) - (t >>>= 0),
                a = Math.min(o, s),
                c = this.slice(n, i),
                f = e.slice(t, r),
                l = 0;
              l < a;
              ++l
            )
              if (c[l] !== f[l]) {
                (o = c[l]), (s = f[l]);
                break;
              }
            return o < s ? -1 : s < o ? 1 : 0;
          }),
          (u.prototype.includes = function (e, t, r) {
            return -1 !== this.indexOf(e, t, r);
          }),
          (u.prototype.indexOf = function (e, t, r) {
            return m(this, e, t, r, !0);
          }),
          (u.prototype.lastIndexOf = function (e, t, r) {
            return m(this, e, t, r, !1);
          }),
          (u.prototype.write = function (e, t, r, n) {
            if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
            else if (void 0 === r && "string" === typeof t)
              (n = t), (r = this.length), (t = 0);
            else {
              if (!isFinite(t))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (t |= 0),
                isFinite(r)
                  ? ((r |= 0), void 0 === n && (n = "utf8"))
                  : ((n = r), (r = void 0));
            }
            var i = this.length - t;
            if (
              ((void 0 === r || r > i) && (r = i),
              (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var o = !1; ; )
              switch (n) {
                case "hex":
                  return b(this, e, t, r);
                case "utf8":
                case "utf-8":
                  return w(this, e, t, r);
                case "ascii":
                  return S(this, e, t, r);
                case "latin1":
                case "binary":
                  return _(this, e, t, r);
                case "base64":
                  return A(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return C(this, e, t, r);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (o = !0);
              }
          }),
          (u.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        var k = 4096;
        function P(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);
          for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
          return n;
        }
        function x(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);
          for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
          return n;
        }
        function I(e, t, r) {
          var n = e.length;
          (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
          for (var i = "", o = t; o < r; ++o) i += L(e[o]);
          return i;
        }
        function j(e, t, r) {
          for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2)
            i += String.fromCharCode(n[o] + 256 * n[o + 1]);
          return i;
        }
        function T(e, t, r) {
          if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > r)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function R(e, t, r, n, i, o) {
          if (!u.isBuffer(e))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > i || t < o)
            throw new RangeError('"value" argument is out of bounds');
          if (r + n > e.length) throw new RangeError("Index out of range");
        }
        function M(e, t, r, n) {
          t < 0 && (t = 65535 + t + 1);
          for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i)
            e[r + i] =
              (t & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
        }
        function U(e, t, r, n) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i)
            e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255;
        }
        function D(e, t, r, n, i, o) {
          if (r + n > e.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function F(e, t, r, n, o) {
          return o || D(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
        }
        function N(e, t, r, n, o) {
          return o || D(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
        }
        (u.prototype.slice = function (e, t) {
          var r,
            n = this.length;
          if (
            ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            (t = void 0 === t ? n : ~~t) < 0
              ? (t += n) < 0 && (t = 0)
              : t > n && (t = n),
            t < e && (t = e),
            u.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(e, t)).__proto__ = u.prototype;
          else {
            var i = t - e;
            r = new u(i, void 0);
            for (var o = 0; o < i; ++o) r[o] = this[o + e];
          }
          return r;
        }),
          (u.prototype.readUIntLE = function (e, t, r) {
            (e |= 0), (t |= 0), r || T(e, t, this.length);
            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
              n += this[e + o] * i;
            return n;
          }),
          (u.prototype.readUIntBE = function (e, t, r) {
            (e |= 0), (t |= 0), r || T(e, t, this.length);
            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
              n += this[e + --t] * i;
            return n;
          }),
          (u.prototype.readUInt8 = function (e, t) {
            return t || T(e, 1, this.length), this[e];
          }),
          (u.prototype.readUInt16LE = function (e, t) {
            return t || T(e, 2, this.length), this[e] | (this[e + 1] << 8);
          }),
          (u.prototype.readUInt16BE = function (e, t) {
            return t || T(e, 2, this.length), (this[e] << 8) | this[e + 1];
          }),
          (u.prototype.readUInt32LE = function (e, t) {
            return (
              t || T(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
          (u.prototype.readUInt32BE = function (e, t) {
            return (
              t || T(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
          (u.prototype.readIntLE = function (e, t, r) {
            (e |= 0), (t |= 0), r || T(e, t, this.length);
            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
              n += this[e + o] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
          }),
          (u.prototype.readIntBE = function (e, t, r) {
            (e |= 0), (t |= 0), r || T(e, t, this.length);
            for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256); )
              o += this[e + --n] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
          }),
          (u.prototype.readInt8 = function (e, t) {
            return (
              t || T(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            );
          }),
          (u.prototype.readInt16LE = function (e, t) {
            t || T(e, 2, this.length);
            var r = this[e] | (this[e + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (u.prototype.readInt16BE = function (e, t) {
            t || T(e, 2, this.length);
            var r = this[e + 1] | (this[e] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (u.prototype.readInt32LE = function (e, t) {
            return (
              t || T(e, 4, this.length),
              this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function (e, t) {
            return (
              t || T(e, 4, this.length),
              (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
            );
          }),
          (u.prototype.readFloatLE = function (e, t) {
            return t || T(e, 4, this.length), i.read(this, e, !0, 23, 4);
          }),
          (u.prototype.readFloatBE = function (e, t) {
            return t || T(e, 4, this.length), i.read(this, e, !1, 23, 4);
          }),
          (u.prototype.readDoubleLE = function (e, t) {
            return t || T(e, 8, this.length), i.read(this, e, !0, 52, 8);
          }),
          (u.prototype.readDoubleBE = function (e, t) {
            return t || T(e, 8, this.length), i.read(this, e, !1, 52, 8);
          }),
          (u.prototype.writeUIntLE = function (e, t, r, n) {
            ((e = +e), (t |= 0), (r |= 0), n) ||
              R(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1,
              o = 0;
            for (this[t] = 255 & e; ++o < r && (i *= 256); )
              this[t + o] = (e / i) & 255;
            return t + r;
          }),
          (u.prototype.writeUIntBE = function (e, t, r, n) {
            ((e = +e), (t |= 0), (r |= 0), n) ||
              R(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1,
              o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
              this[t + i] = (e / o) & 255;
            return t + r;
          }),
          (u.prototype.writeUInt8 = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || R(this, e, t, 1, 255, 0),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (u.prototype.writeUInt16LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || R(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : M(this, e, t, !0),
              t + 2
            );
          }),
          (u.prototype.writeUInt16BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || R(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : M(this, e, t, !1),
              t + 2
            );
          }),
          (u.prototype.writeUInt32LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || R(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e))
                : U(this, e, t, !0),
              t + 4
            );
          }),
          (u.prototype.writeUInt32BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || R(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : U(this, e, t, !1),
              t + 4
            );
          }),
          (u.prototype.writeIntLE = function (e, t, r, n) {
            if (((e = +e), (t |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              R(this, e, t, r, i - 1, -i);
            }
            var o = 0,
              s = 1,
              a = 0;
            for (this[t] = 255 & e; ++o < r && (s *= 256); )
              e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
                (this[t + o] = (((e / s) >> 0) - a) & 255);
            return t + r;
          }),
          (u.prototype.writeIntBE = function (e, t, r, n) {
            if (((e = +e), (t |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              R(this, e, t, r, i - 1, -i);
            }
            var o = r - 1,
              s = 1,
              a = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
              e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
                (this[t + o] = (((e / s) >> 0) - a) & 255);
            return t + r;
          }),
          (u.prototype.writeInt8 = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || R(this, e, t, 1, 127, -128),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (u.prototype.writeInt16LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || R(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : M(this, e, t, !0),
              t + 2
            );
          }),
          (u.prototype.writeInt16BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || R(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : M(this, e, t, !1),
              t + 2
            );
          }),
          (u.prototype.writeInt32LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || R(this, e, t, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  (this[t + 2] = e >>> 16),
                  (this[t + 3] = e >>> 24))
                : U(this, e, t, !0),
              t + 4
            );
          }),
          (u.prototype.writeInt32BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || R(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : U(this, e, t, !1),
              t + 4
            );
          }),
          (u.prototype.writeFloatLE = function (e, t, r) {
            return F(this, e, t, !0, r);
          }),
          (u.prototype.writeFloatBE = function (e, t, r) {
            return F(this, e, t, !1, r);
          }),
          (u.prototype.writeDoubleLE = function (e, t, r) {
            return N(this, e, t, !0, r);
          }),
          (u.prototype.writeDoubleBE = function (e, t, r) {
            return N(this, e, t, !1, r);
          }),
          (u.prototype.copy = function (e, t, r, n) {
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
              e.length - t < n - r && (n = e.length - t + r);
            var i,
              o = n - r;
            if (this === e && r < t && t < n)
              for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
            else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < o; ++i) e[i + t] = this[i + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
            return o;
          }),
          (u.prototype.fill = function (e, t, r, n) {
            if ("string" === typeof e) {
              if (
                ("string" === typeof t
                  ? ((n = t), (t = 0), (r = this.length))
                  : "string" === typeof r && ((n = r), (r = this.length)),
                1 === e.length)
              ) {
                var i = e.charCodeAt(0);
                i < 256 && (e = i);
              }
              if (void 0 !== n && "string" !== typeof n)
                throw new TypeError("encoding must be a string");
              if ("string" === typeof n && !u.isEncoding(n))
                throw new TypeError("Unknown encoding: " + n);
            } else "number" === typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r)
              throw new RangeError("Out of range index");
            if (r <= t) return this;
            var o;
            if (
              ((t >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              e || (e = 0),
              "number" === typeof e)
            )
              for (o = t; o < r; ++o) this[o] = e;
            else {
              var s = u.isBuffer(e) ? e : z(new u(e, n).toString()),
                a = s.length;
              for (o = 0; o < r - t; ++o) this[o + t] = s[o % a];
            }
            return this;
          });
        var B = /[^+\/0-9A-Za-z-_]/g;
        function L(e) {
          return e < 16 ? "0" + e.toString(16) : e.toString(16);
        }
        function z(e, t) {
          var r;
          t = t || 1 / 0;
          for (var n = e.length, i = null, o = [], s = 0; s < n; ++s) {
            if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
              if (!i) {
                if (r > 56319) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === n) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = r;
                continue;
              }
              if (r < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
                continue;
              }
              r = 65536 + (((i - 55296) << 10) | (r - 56320));
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), r < 128)) {
              if ((t -= 1) < 0) break;
              o.push(r);
            } else if (r < 2048) {
              if ((t -= 2) < 0) break;
              o.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((t -= 3) < 0) break;
              o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              o.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            }
          }
          return o;
        }
        function H(e) {
          return n.toByteArray(
            (function (e) {
              if (
                (e = (function (e) {
                  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                })(e).replace(B, "")).length < 2
              )
                return "";
              for (; e.length % 4 !== 0; ) e += "=";
              return e;
            })(e)
          );
        }
        function q(e, t, r, n) {
          for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
            t[i + r] = e[i];
          return i;
        }
      }).call(this, r("ntbh"));
    },
    tlIM: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "locateWindow", function () {
          return i;
        });
      var n = {};
      function i() {
        return "undefined" !== typeof window
          ? window
          : "undefined" !== typeof self
          ? self
          : n;
      }
    },
    v4IS: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return q;
      });
      var n = r("m0iZ"),
        i = r("Nt7R"),
        o = r("Qycn"),
        s = r("R10A"),
        a = r("QuJe"),
        u = r("9ONQ"),
        c = r("HzrR"),
        f = Object(c.b)().isBrowser,
        l = (function () {
          function e(e) {
            void 0 === e && (e = {}),
              (this.cookies = new u.a()),
              (this.store = f ? window.localStorage : Object.create(null)),
              (this.cookies = e.req
                ? new u.a(e.req.headers.cookie)
                : new u.a()),
              Object.assign(this.store, this.cookies.getAll());
          }
          return (
            Object.defineProperty(e.prototype, "length", {
              get: function () {
                return Object.entries(this.store).length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.clear = function () {
              var e = this;
              Array.from(new Array(this.length))
                .map(function (t, r) {
                  return e.key(r);
                })
                .forEach(function (t) {
                  return e.removeItem(t);
                });
            }),
            (e.prototype.getItem = function (e) {
              return this.getLocalItem(e);
            }),
            (e.prototype.getLocalItem = function (e) {
              return Object.prototype.hasOwnProperty.call(this.store, e)
                ? this.store[e]
                : null;
            }),
            (e.prototype.getUniversalItem = function (e) {
              return this.cookies.get(e);
            }),
            (e.prototype.key = function (e) {
              return Object.keys(this.store)[e];
            }),
            (e.prototype.removeItem = function (e) {
              this.removeLocalItem(e), this.removeUniversalItem(e);
            }),
            (e.prototype.removeLocalItem = function (e) {
              delete this.store[e];
            }),
            (e.prototype.removeUniversalItem = function (e) {
              this.cookies.remove(e, { path: "/" });
            }),
            (e.prototype.setItem = function (e, t) {
              switch ((this.setLocalItem(e, t), e.split(".").pop())) {
                case "LastAuthUser":
                case "accessToken":
                case "idToken":
                  this.setUniversalItem(e, t);
              }
            }),
            (e.prototype.setLocalItem = function (e, t) {
              this.store[e] = t;
            }),
            (e.prototype.setUniversalItem = function (e, t) {
              this.cookies.set(e, t, {
                path: "/",
                sameSite: !0,
                secure: "localhost" !== window.location.hostname,
              });
            }),
            e
          );
        })(),
        d = r("2Lx6");
      var h = r("fQM2"),
        p = r("TESy"),
        g = r("QmWs"),
        y = function (e) {
          var t = window.open(e, "_self");
          return t ? Promise.resolve(t) : Promise.reject();
        },
        m = r("lPiR"),
        v = r.n(m),
        b = r("ETIr"),
        w = r.n(b),
        S = function () {
          return (S =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        _ = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                u(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function a(e) {
              try {
                u(n.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(s, a);
            }
            u((n = n.apply(e, t || [])).next());
          });
        },
        A = function (e, t) {
          var r,
            n,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (a) {
                    (o = [6, a]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        },
        C = function (e, t) {
          var r = "function" === typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              s.push(n.value);
          } catch (a) {
            i = { error: a };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        },
        O =
          "undefined" !== typeof Symbol && "function" === typeof Symbol.for
            ? Symbol.for("amplify_default")
            : "@@amplify_default",
        E = function (e, t, r) {
          o.a.dispatch("auth", { event: e, data: t, message: r }, "Auth", O);
        },
        k = new i.a("OAuth"),
        P = (function () {
          function e(e) {
            var t = e.config,
              r = e.cognitoClientId,
              n = e.scopes,
              i = void 0 === n ? [] : n;
            if (
              ((this._urlOpener = t.urlOpener || y),
              (this._config = t),
              (this._cognitoClientId = r),
              !this.isValidScopes(i))
            )
              throw Error("scopes must be a String Array");
            this._scopes = i;
          }
          return (
            (e.prototype.isValidScopes = function (e) {
              return (
                Array.isArray(e) &&
                e.every(function (e) {
                  return "string" === typeof e;
                })
              );
            }),
            (e.prototype.oauthSignIn = function (e, t, r, i, o, s) {
              void 0 === e && (e = "code"), void 0 === o && (o = n.b.Cognito);
              var a = this._generateState(32),
                u = s
                  ? a +
                    "-" +
                    s
                      .split("")
                      .map(function (e) {
                        return e.charCodeAt(0).toString(16).padStart(2, "0");
                      })
                      .join("")
                  : a;
              !(function (e) {
                window.sessionStorage.setItem("oauth_state", e);
              })(u);
              var c,
                f = this._generateRandom(128);
              (c = f), window.sessionStorage.setItem("ouath_pkce_key", c);
              var l = this._generateChallenge(f),
                d = this._scopes.join(" "),
                h =
                  "https://" +
                  t +
                  "/oauth2/authorize?" +
                  Object.entries(
                    S(
                      S(
                        {
                          redirect_uri: r,
                          response_type: e,
                          client_id: i,
                          identity_provider: o,
                          scope: d,
                          state: u,
                        },
                        "code" === e ? { code_challenge: l } : {}
                      ),
                      "code" === e ? { code_challenge_method: "S256" } : {}
                    )
                  )
                    .map(function (e) {
                      var t = C(e, 2),
                        r = t[0],
                        n = t[1];
                      return (
                        encodeURIComponent(r) + "=" + encodeURIComponent(n)
                      );
                    })
                    .join("&");
              k.debug("Redirecting to " + h), this._urlOpener(h, r);
            }),
            (e.prototype._handleCodeFlow = function (e) {
              return _(this, void 0, void 0, function () {
                var t, r, i, o, s, a, u, c, f, l, d, h, p, y;
                return A(this, function (m) {
                  switch (m.label) {
                    case 0:
                      return (
                        (t = (Object(g.parse)(e).query || "")
                          .split("&")
                          .map(function (e) {
                            return e.split("=");
                          })
                          .reduce(
                            function (e, t) {
                              var r,
                                n = C(t, 2),
                                i = n[0],
                                o = n[1];
                              return S(S({}, e), (((r = {})[i] = o), r));
                            },
                            { code: void 0 }
                          ).code),
                        (r = Object(g.parse)(e).pathname || "/"),
                        (i =
                          Object(g.parse)(this._config.redirectSignIn)
                            .pathname || "/"),
                        t && r === i
                          ? ((o =
                              "https://" +
                              this._config.domain +
                              "/oauth2/token"),
                            E("codeFlow", {}, "Retrieving tokens from " + o),
                            (s = Object(n.d)(this._config)
                              ? this._cognitoClientId
                              : this._config.clientID),
                            (a = Object(n.d)(this._config)
                              ? this._config.redirectSignIn
                              : this._config.redirectUri),
                            (u = (function () {
                              var e =
                                window.sessionStorage.getItem("ouath_pkce_key");
                              return (
                                window.sessionStorage.removeItem(
                                  "ouath_pkce_key"
                                ),
                                e
                              );
                            })()),
                            (c = S(
                              {
                                grant_type: "authorization_code",
                                code: t,
                                client_id: s,
                                redirect_uri: a,
                              },
                              u ? { code_verifier: u } : {}
                            )),
                            k.debug(
                              "Calling token endpoint: " + o + " with",
                              c
                            ),
                            (f = Object.entries(c)
                              .map(function (e) {
                                var t = C(e, 2),
                                  r = t[0],
                                  n = t[1];
                                return (
                                  encodeURIComponent(r) +
                                  "=" +
                                  encodeURIComponent(n)
                                );
                              })
                              .join("&")),
                            [
                              4,
                              fetch(o, {
                                method: "POST",
                                headers: {
                                  "Content-Type":
                                    "application/x-www-form-urlencoded",
                                },
                                body: f,
                              }),
                            ])
                          : [2]
                      );
                    case 1:
                      return [4, m.sent().json()];
                    case 2:
                      if (
                        ((l = m.sent()),
                        (d = l.access_token),
                        (h = l.refresh_token),
                        (p = l.id_token),
                        (y = l.error))
                      )
                        throw new Error(y);
                      return [
                        2,
                        { accessToken: d, refreshToken: h, idToken: p },
                      ];
                  }
                });
              });
            }),
            (e.prototype._handleImplicitFlow = function (e) {
              return _(this, void 0, void 0, function () {
                var t, r, n;
                return A(this, function (i) {
                  return (
                    (t = (Object(g.parse)(e).hash || "#")
                      .substr(1)
                      .split("&")
                      .map(function (e) {
                        return e.split("=");
                      })
                      .reduce(
                        function (e, t) {
                          var r,
                            n = C(t, 2),
                            i = n[0],
                            o = n[1];
                          return S(S({}, e), (((r = {})[i] = o), r));
                        },
                        { id_token: void 0, access_token: void 0 }
                      )),
                    (r = t.id_token),
                    (n = t.access_token),
                    E("implicitFlow", {}, "Got tokens from " + e),
                    k.debug("Retrieving implicit tokens from " + e + " with"),
                    [2, { accessToken: n, idToken: r, refreshToken: null }]
                  );
                });
              });
            }),
            (e.prototype.handleAuthResponse = function (e) {
              return _(this, void 0, void 0, function () {
                var t, r, n, i, o, s, a;
                return A(this, function (u) {
                  switch (u.label) {
                    case 0:
                      if (
                        (u.trys.push([0, 5, , 6]),
                        (t = e
                          ? S(
                              S(
                                {},
                                (Object(g.parse)(e).hash || "#")
                                  .substr(1)
                                  .split("&")
                                  .map(function (e) {
                                    return e.split("=");
                                  })
                                  .reduce(function (e, t) {
                                    var r = C(t, 2),
                                      n = r[0],
                                      i = r[1];
                                    return (e[n] = i), e;
                                  }, {})
                              ),
                              (Object(g.parse)(e).query || "")
                                .split("&")
                                .map(function (e) {
                                  return e.split("=");
                                })
                                .reduce(function (e, t) {
                                  var r = C(t, 2),
                                    n = r[0],
                                    i = r[1];
                                  return (e[n] = i), e;
                                }, {})
                            )
                          : {}),
                        (r = t.error),
                        (n = t.error_description),
                        r)
                      )
                        throw new Error(n);
                      return (
                        (i = this._validateState(t)),
                        k.debug(
                          "Starting " +
                            this._config.responseType +
                            " flow with " +
                            e
                        ),
                        "code" !== this._config.responseType
                          ? [3, 2]
                          : ((o = [{}]), [4, this._handleCodeFlow(e)])
                      );
                    case 1:
                      return [
                        2,
                        S.apply(void 0, [
                          S.apply(void 0, o.concat([u.sent()])),
                          { state: i },
                        ]),
                      ];
                    case 2:
                      return (s = [{}]), [4, this._handleImplicitFlow(e)];
                    case 3:
                      return [
                        2,
                        S.apply(void 0, [
                          S.apply(void 0, s.concat([u.sent()])),
                          { state: i },
                        ]),
                      ];
                    case 4:
                      return [3, 6];
                    case 5:
                      throw (
                        ((a = u.sent()),
                        k.error("Error handling auth response.", a),
                        a)
                      );
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype._validateState = function (e) {
              if (e) {
                var t = (function () {
                    var e = window.sessionStorage.getItem("oauth_state");
                    return window.sessionStorage.removeItem("oauth_state"), e;
                  })(),
                  r = e.state;
                if (t && t !== r)
                  throw new Error("Invalid state in OAuth flow");
                return r;
              }
            }),
            (e.prototype.signOut = function () {
              return _(this, void 0, void 0, function () {
                var e, t, r;
                return A(this, function (i) {
                  return (
                    (e = "https://" + this._config.domain + "/logout?"),
                    (t = Object(n.d)(this._config)
                      ? this._cognitoClientId
                      : this._config.oauth.clientID),
                    (r = Object(n.d)(this._config)
                      ? this._config.redirectSignOut
                      : this._config.returnTo),
                    (e += Object.entries({
                      client_id: t,
                      logout_uri: encodeURIComponent(r),
                    })
                      .map(function (e) {
                        var t = C(e, 2);
                        return t[0] + "=" + t[1];
                      })
                      .join("&")),
                    E(
                      "oAuthSignOut",
                      { oAuth: "signOut" },
                      "Signing out from " + e
                    ),
                    k.debug("Signing out from " + e),
                    [2, this._urlOpener(e)]
                  );
                });
              });
            }),
            (e.prototype._generateState = function (e) {
              for (
                var t = "",
                  r = e,
                  n =
                    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                r > 0;
                --r
              )
                t += n[Math.round(Math.random() * (n.length - 1))];
              return t;
            }),
            (e.prototype._generateChallenge = function (e) {
              return this._base64URL(v()(e));
            }),
            (e.prototype._base64URL = function (e) {
              return e
                .toString(w.a)
                .replace(/=/g, "")
                .replace(/\+/g, "-")
                .replace(/\//g, "_");
            }),
            (e.prototype._generateRandom = function (e) {
              var t = new Uint8Array(e);
              if ("undefined" !== typeof window && window.crypto)
                window.crypto.getRandomValues(t);
              else
                for (var r = 0; r < e; r += 1)
                  t[r] =
                    (Math.random() *
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
                        .length) |
                    0;
              return this._bufferToString(t);
            }),
            (e.prototype._bufferToString = function (e) {
              for (
                var t =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                  r = [],
                  n = 0;
                n < e.byteLength;
                n += 1
              ) {
                var i = e[n] % t.length;
                r.push(t[i]);
              }
              return r.join("");
            }),
            e
          );
        })(),
        x = r("YKz8"),
        I = (function () {
          var e = function (t, r) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(t, r);
          };
          return function (t, r) {
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        j = new i.a("AuthError"),
        T = (function (e) {
          function t(r) {
            var n = this,
              i = M[r],
              o = i.message,
              s = i.log;
            return (
              ((n = e.call(this, o) || this).constructor = t),
              Object.setPrototypeOf(n, t.prototype),
              (n.name = "AuthError"),
              (n.log = s || o),
              j.error(n.log),
              n
            );
          }
          return I(t, e), t;
        })(Error),
        R = (function (e) {
          function t(r) {
            var n = e.call(this, r) || this;
            return (
              (n.constructor = t),
              Object.setPrototypeOf(n, t.prototype),
              (n.name = "NoUserPoolError"),
              n
            );
          }
          return I(t, e), t;
        })(T),
        M = {
          noConfig: {
            message: x.a.DEFAULT_MSG,
            log: "\n            Error: Amplify has not been configured correctly.\n            This error is typically caused by one of the following scenarios:\n\n            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point\n                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information\n            \n            2. There might be multiple conflicting versions of amplify packages in your node_modules.\n\t\t\t\tRefer to our docs site for help upgrading Amplify packages (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)\n        ",
          },
          missingAuthConfig: {
            message: x.a.DEFAULT_MSG,
            log: "\n            Error: Amplify has not been configured correctly. \n            The configuration object is missing required auth properties.\n            This error is typically caused by one of the following scenarios:\n\n            1. Did you run `amplify push` after adding auth via `amplify add auth`?\n                See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information\n\n            2. This could also be caused by multiple conflicting versions of amplify packages, see (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js) for help upgrading Amplify packages.\n        ",
          },
          emptyUsername: { message: x.a.EMPTY_USERNAME },
          invalidUsername: { message: x.a.INVALID_USERNAME },
          emptyPassword: { message: x.a.EMPTY_PASSWORD },
          emptyCode: { message: x.a.EMPTY_CODE },
          signUpError: {
            message: x.a.SIGN_UP_ERROR,
            log: "The first parameter should either be non-null string or object",
          },
          noMFA: { message: x.a.NO_MFA },
          invalidMFA: { message: x.a.INVALID_MFA },
          emptyChallengeResponse: { message: x.a.EMPTY_CHALLENGE },
          noUserSession: { message: x.a.NO_USER_SESSION },
          default: { message: x.a.DEFAULT_MSG },
        },
        U = function () {
          return (U =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        D = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                u(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function a(e) {
              try {
                u(n.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(s, a);
            }
            u((n = n.apply(e, t || [])).next());
          });
        },
        F = function (e, t) {
          var r,
            n,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (a) {
                    (o = [6, a]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        },
        N = function (e, t) {
          var r = "function" === typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              s.push(n.value);
          } catch (a) {
            i = { error: a };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        },
        B = new i.a("AuthClass"),
        L = "aws.cognito.signin.user.admin",
        z =
          "undefined" !== typeof Symbol && "function" === typeof Symbol.for
            ? Symbol.for("amplify_default")
            : "@@amplify_default",
        H = function (e, t, r) {
          o.a.dispatch("auth", { event: e, data: t, message: r }, "Auth", z);
        },
        q = new ((function () {
          function e(e) {
            var t = this;
            (this.userPool = null),
              (this.user = null),
              (this.oAuthFlowInProgress = !1),
              (this.Credentials = s.a),
              (this.wrapRefreshSessionCallback = function (e) {
                return function (t, r) {
                  return (
                    r
                      ? H("tokenRefresh", void 0, "New token retrieved")
                      : H(
                          "tokenRefresh_failure",
                          t,
                          "Failed to retrieve new token"
                        ),
                    e(t, r)
                  );
                };
              }),
              this.configure(e),
              (this.currentCredentials = this.currentCredentials.bind(this)),
              (this.currentUserCredentials =
                this.currentUserCredentials.bind(this)),
              o.a.listen("auth", function (e) {
                switch (e.payload.event) {
                  case "signIn":
                    t._storage.setItem("amplify-signin-with-hostedUI", "false");
                    break;
                  case "signOut":
                    t._storage.removeItem("amplify-signin-with-hostedUI");
                    break;
                  case "cognitoHostedUI":
                    t._storage.setItem("amplify-signin-with-hostedUI", "true");
                }
              });
          }
          return (
            (e.prototype.getModuleName = function () {
              return "Auth";
            }),
            (e.prototype.configure = function (e) {
              var t = this;
              if (!e) return this._config || {};
              B.debug("configure Auth");
              var r = Object.assign(
                {},
                this._config,
                a.a.parseMobilehubConfig(e).Auth,
                e
              );
              this._config = r;
              var i = this._config,
                o = i.userPoolId,
                s = i.userPoolWebClientId,
                u = i.cookieStorage,
                f = i.oauth,
                h = i.region,
                g = i.identityPoolId,
                y = i.mandatorySignIn,
                m = i.refreshHandlers,
                v = i.identityPoolRegion,
                b = i.clientMetadata,
                w = i.endpoint;
              if (this._config.storage) {
                if (!this._isValidAuthStorage(this._config.storage))
                  throw (
                    (B.error("The storage in the Auth config is not valid!"),
                    new Error("Empty storage object"))
                  );
                this._storage = this._config.storage;
              } else
                this._storage = u
                  ? new p.i(u)
                  : e.ssr
                  ? new l()
                  : new d.a().getStorage();
              if (
                ((this._storageSync = Promise.resolve()),
                "function" === typeof this._storage.sync &&
                  (this._storageSync = this._storage.sync()),
                o)
              ) {
                var S = { UserPoolId: o, ClientId: s, endpoint: w };
                (S.Storage = this._storage),
                  (this.userPool = new p.g(S, this.wrapRefreshSessionCallback));
              }
              this.Credentials.configure({
                mandatorySignIn: y,
                region: v || h,
                userPoolId: o,
                identityPoolId: g,
                refreshHandlers: m,
                storage: this._storage,
              });
              var _ = f
                ? Object(n.d)(this._config.oauth)
                  ? f
                  : f.awsCognito
                : void 0;
              if (_) {
                var A = Object.assign(
                  {
                    cognitoClientId: s,
                    UserPoolId: o,
                    domain: _.domain,
                    scopes: _.scope,
                    redirectSignIn: _.redirectSignIn,
                    redirectSignOut: _.redirectSignOut,
                    responseType: _.responseType,
                    Storage: this._storage,
                    urlOpener: _.urlOpener,
                    clientMetadata: b,
                  },
                  _.options
                );
                this._oAuthHandler = new P({
                  scopes: A.scopes,
                  config: A,
                  cognitoClientId: A.cognitoClientId,
                });
                var C = {};
                !(function (e) {
                  if (c.a.browserOrNode().isBrowser && window.location)
                    e({ url: window.location.href });
                  else if (!c.a.browserOrNode().isNode)
                    throw new Error("Not supported");
                })(function (e) {
                  var r = e.url;
                  C[r] || ((C[r] = !0), t._handleAuthResponse(r));
                });
              }
              return (
                H(
                  "configured",
                  null,
                  "The Auth category has been configured successfully"
                ),
                this._config
              );
            }),
            (e.prototype.signUp = function (e) {
              for (var t = this, r = [], i = 1; i < arguments.length; i++)
                r[i - 1] = arguments[i];
              if (!this.userPool) return this.rejectNoUserPool();
              var o,
                s = null,
                a = null,
                u = [],
                c = null;
              if (e && "string" === typeof e) {
                (s = e), (a = r ? r[0] : null);
                var f = r ? r[1] : null,
                  l = r ? r[2] : null;
                f && u.push(new p.f({ Name: "email", Value: f })),
                  l && u.push(new p.f({ Name: "phone_number", Value: l }));
              } else {
                if (!e || "object" !== typeof e)
                  return this.rejectAuthError(n.a.SignUpError);
                (s = e.username),
                  (a = e.password),
                  e && e.clientMetadata
                    ? (o = e.clientMetadata)
                    : this._config.clientMetadata &&
                      (o = this._config.clientMetadata);
                var d = e.attributes;
                d &&
                  Object.keys(d).map(function (e) {
                    u.push(new p.f({ Name: e, Value: d[e] }));
                  });
                var h = e.validationData;
                h &&
                  ((c = []),
                  Object.keys(h).map(function (e) {
                    c.push(new p.f({ Name: e, Value: h[e] }));
                  }));
              }
              return s
                ? a
                  ? (B.debug("signUp attrs:", u),
                    B.debug("signUp validation data:", c),
                    new Promise(function (e, r) {
                      t.userPool.signUp(
                        s,
                        a,
                        u,
                        c,
                        function (t, n) {
                          t
                            ? (H("signUp_failure", t, s + " failed to signup"),
                              r(t))
                            : (H(
                                "signUp",
                                n,
                                s + " has signed up successfully"
                              ),
                              e(n));
                        },
                        o
                      );
                    }))
                  : this.rejectAuthError(n.a.EmptyPassword)
                : this.rejectAuthError(n.a.EmptyUsername);
            }),
            (e.prototype.confirmSignUp = function (e, t, r) {
              if (!this.userPool) return this.rejectNoUserPool();
              if (!e) return this.rejectAuthError(n.a.EmptyUsername);
              if (!t) return this.rejectAuthError(n.a.EmptyCode);
              var i,
                o = this.createCognitoUser(e),
                s =
                  !r ||
                  "boolean" !== typeof r.forceAliasCreation ||
                  r.forceAliasCreation;
              return (
                r && r.clientMetadata
                  ? (i = r.clientMetadata)
                  : this._config.clientMetadata &&
                    (i = this._config.clientMetadata),
                new Promise(function (e, r) {
                  o.confirmRegistration(
                    t,
                    s,
                    function (t, n) {
                      t ? r(t) : e(n);
                    },
                    i
                  );
                })
              );
            }),
            (e.prototype.resendSignUp = function (e, t) {
              if (
                (void 0 === t && (t = this._config.clientMetadata),
                !this.userPool)
              )
                return this.rejectNoUserPool();
              if (!e) return this.rejectAuthError(n.a.EmptyUsername);
              var r = this.createCognitoUser(e);
              return new Promise(function (e, n) {
                r.resendConfirmationCode(function (t, r) {
                  t ? n(t) : e(r);
                }, t);
              });
            }),
            (e.prototype.signIn = function (e, t, r) {
              if (
                (void 0 === r && (r = this._config.clientMetadata),
                !this.userPool)
              )
                return this.rejectNoUserPool();
              var i = null,
                o = null,
                s = {};
              if ("string" === typeof e) (i = e), (o = t);
              else {
                if (!Object(n.g)(e))
                  return this.rejectAuthError(n.a.InvalidUsername);
                "undefined" !== typeof t &&
                  B.warn(
                    "The password should be defined under the first parameter object!"
                  ),
                  (i = e.username),
                  (o = e.password),
                  (s = e.validationData);
              }
              if (!i) return this.rejectAuthError(n.a.EmptyUsername);
              var a = new p.a({
                Username: i,
                Password: o,
                ValidationData: s,
                ClientMetadata: r,
              });
              return o
                ? this.signInWithPassword(a)
                : this.signInWithoutPassword(a);
            }),
            (e.prototype.authCallbacks = function (e, t, r) {
              var n = this,
                i = this;
              return {
                onSuccess: function (o) {
                  return D(n, void 0, void 0, function () {
                    var n, s, a, u;
                    return F(this, function (c) {
                      switch (c.label) {
                        case 0:
                          B.debug(o),
                            delete e.challengeName,
                            delete e.challengeParam,
                            (c.label = 1);
                        case 1:
                          return (
                            c.trys.push([1, 4, 5, 9]),
                            [4, this.Credentials.clear()]
                          );
                        case 2:
                          return (
                            c.sent(), [4, this.Credentials.set(o, "session")]
                          );
                        case 3:
                          return (
                            (n = c.sent()),
                            B.debug("succeed to get cognito credentials", n),
                            [3, 9]
                          );
                        case 4:
                          return (
                            (s = c.sent()),
                            B.debug("cannot get cognito credentials", s),
                            [3, 9]
                          );
                        case 5:
                          return (
                            c.trys.push([5, 7, , 8]),
                            [4, this.currentUserPoolUser()]
                          );
                        case 6:
                          return (
                            (a = c.sent()),
                            (i.user = a),
                            H(
                              "signIn",
                              a,
                              "A user " +
                                e.getUsername() +
                                " has been signed in"
                            ),
                            t(a),
                            [3, 8]
                          );
                        case 7:
                          return (
                            (u = c.sent()),
                            B.error("Failed to get the signed in user", u),
                            r(u),
                            [3, 8]
                          );
                        case 8:
                          return [7];
                        case 9:
                          return [2];
                      }
                    });
                  });
                },
                onFailure: function (t) {
                  B.debug("signIn failure", t),
                    H(
                      "signIn_failure",
                      t,
                      e.getUsername() + " failed to signin"
                    ),
                    r(t);
                },
                customChallenge: function (r) {
                  B.debug("signIn custom challenge answer required"),
                    (e.challengeName = "CUSTOM_CHALLENGE"),
                    (e.challengeParam = r),
                    t(e);
                },
                mfaRequired: function (r, n) {
                  B.debug("signIn MFA required"),
                    (e.challengeName = r),
                    (e.challengeParam = n),
                    t(e);
                },
                mfaSetup: function (r, n) {
                  B.debug("signIn mfa setup", r),
                    (e.challengeName = r),
                    (e.challengeParam = n),
                    t(e);
                },
                newPasswordRequired: function (r, n) {
                  B.debug("signIn new password"),
                    (e.challengeName = "NEW_PASSWORD_REQUIRED"),
                    (e.challengeParam = {
                      userAttributes: r,
                      requiredAttributes: n,
                    }),
                    t(e);
                },
                totpRequired: function (r, n) {
                  B.debug("signIn totpRequired"),
                    (e.challengeName = r),
                    (e.challengeParam = n),
                    t(e);
                },
                selectMFAType: function (r, n) {
                  B.debug("signIn selectMFAType", r),
                    (e.challengeName = r),
                    (e.challengeParam = n),
                    t(e);
                },
              };
            }),
            (e.prototype.signInWithPassword = function (e) {
              var t = this;
              if (this.pendingSignIn)
                throw new Error("Pending sign-in attempt already in progress");
              var r = this.createCognitoUser(e.getUsername());
              return (
                (this.pendingSignIn = new Promise(function (n, i) {
                  r.authenticateUser(
                    e,
                    t.authCallbacks(
                      r,
                      function (e) {
                        (t.pendingSignIn = null), n(e);
                      },
                      function (e) {
                        (t.pendingSignIn = null), i(e);
                      }
                    )
                  );
                })),
                this.pendingSignIn
              );
            }),
            (e.prototype.signInWithoutPassword = function (e) {
              var t = this,
                r = this.createCognitoUser(e.getUsername());
              return (
                r.setAuthenticationFlowType("CUSTOM_AUTH"),
                new Promise(function (n, i) {
                  r.initiateAuth(e, t.authCallbacks(r, n, i));
                })
              );
            }),
            (e.prototype.getMFAOptions = function (e) {
              return new Promise(function (t, r) {
                e.getMFAOptions(function (e, n) {
                  if (e) return B.debug("get MFA Options failed", e), void r(e);
                  B.debug("get MFA options success", n), t(n);
                });
              });
            }),
            (e.prototype.getPreferredMFA = function (e, t) {
              var r = this,
                n = this;
              return new Promise(function (i, o) {
                var s = r._config.clientMetadata,
                  a = !!t && t.bypassCache;
                e.getUserData(
                  function (e, t) {
                    if (e)
                      return (
                        B.debug("getting preferred mfa failed", e), void o(e)
                      );
                    var r = n._getMfaTypeFromUserData(t);
                    return r ? void i(r) : void o("invalid MFA Type");
                  },
                  { bypassCache: a, clientMetadata: s }
                );
              });
            }),
            (e.prototype._getMfaTypeFromUserData = function (e) {
              var t = null,
                r = e.PreferredMfaSetting;
              if (r) t = r;
              else {
                var n = e.UserMFASettingList;
                if (n)
                  0 === n.length
                    ? (t = "NOMFA")
                    : B.debug("invalid case for getPreferredMFA", e);
                else t = e.MFAOptions ? "SMS_MFA" : "NOMFA";
              }
              return t;
            }),
            (e.prototype._getUserData = function (e, t) {
              return new Promise(function (r, n) {
                e.getUserData(function (e, t) {
                  return e
                    ? (B.debug("getting user data failed", e), void n(e))
                    : void r(t);
                }, t);
              });
            }),
            (e.prototype.setPreferredMFA = function (e, t) {
              return D(this, void 0, void 0, function () {
                var r, i, o, s, a, u;
                return F(this, function (c) {
                  switch (c.label) {
                    case 0:
                      return (
                        (r = this._config.clientMetadata),
                        [
                          4,
                          this._getUserData(e, {
                            bypassCache: !0,
                            clientMetadata: r,
                          }),
                        ]
                      );
                    case 1:
                      switch (((i = c.sent()), (o = null), (s = null), t)) {
                        case "TOTP":
                          return [3, 2];
                        case "SMS":
                          return [3, 3];
                        case "NOMFA":
                          return [3, 4];
                      }
                      return [3, 6];
                    case 2:
                      return (s = { PreferredMfa: !0, Enabled: !0 }), [3, 7];
                    case 3:
                      return (o = { PreferredMfa: !0, Enabled: !0 }), [3, 7];
                    case 4:
                      return (
                        (a = i.UserMFASettingList),
                        [4, this._getMfaTypeFromUserData(i)]
                      );
                    case 5:
                      if ("NOMFA" === (u = c.sent()))
                        return [2, Promise.resolve("No change for mfa type")];
                      if ("SMS_MFA" === u)
                        o = { PreferredMfa: !1, Enabled: !1 };
                      else {
                        if ("SOFTWARE_TOKEN_MFA" !== u)
                          return [2, this.rejectAuthError(n.a.InvalidMFA)];
                        s = { PreferredMfa: !1, Enabled: !1 };
                      }
                      return (
                        a &&
                          0 !== a.length &&
                          a.forEach(function (e) {
                            "SMS_MFA" === e
                              ? (o = { PreferredMfa: !1, Enabled: !1 })
                              : "SOFTWARE_TOKEN_MFA" === e &&
                                (s = { PreferredMfa: !1, Enabled: !1 });
                          }),
                        [3, 7]
                      );
                    case 6:
                      return (
                        B.debug("no validmfa method provided"),
                        [2, this.rejectAuthError(n.a.NoMFA)]
                      );
                    case 7:
                      return (
                        this,
                        [
                          2,
                          new Promise(function (t, n) {
                            e.setUserMfaPreference(o, s, function (i, o) {
                              if (i)
                                return (
                                  B.debug("Set user mfa preference error", i),
                                  n(i)
                                );
                              B.debug("Set user mfa success", o),
                                B.debug(
                                  "Caching the latest user data into local"
                                ),
                                e.getUserData(
                                  function (e, r) {
                                    return e
                                      ? (B.debug("getting user data failed", e),
                                        n(e))
                                      : t(o);
                                  },
                                  { bypassCache: !0, clientMetadata: r }
                                );
                            });
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.disableSMS = function (e) {
              return new Promise(function (t, r) {
                e.disableMFA(function (e, n) {
                  if (e) return B.debug("disable mfa failed", e), void r(e);
                  B.debug("disable mfa succeed", n), t(n);
                });
              });
            }),
            (e.prototype.enableSMS = function (e) {
              return new Promise(function (t, r) {
                e.enableMFA(function (e, n) {
                  if (e) return B.debug("enable mfa failed", e), void r(e);
                  B.debug("enable mfa succeed", n), t(n);
                });
              });
            }),
            (e.prototype.setupTOTP = function (e) {
              return new Promise(function (t, r) {
                e.associateSoftwareToken({
                  onFailure: function (e) {
                    B.debug("associateSoftwareToken failed", e), r(e);
                  },
                  associateSecretCode: function (e) {
                    B.debug("associateSoftwareToken sucess", e), t(e);
                  },
                });
              });
            }),
            (e.prototype.verifyTotpToken = function (e, t) {
              return (
                B.debug("verification totp token", e, t),
                new Promise(function (r, n) {
                  e.verifySoftwareToken(t, "My TOTP device", {
                    onFailure: function (e) {
                      B.debug("verifyTotpToken failed", e), n(e);
                    },
                    onSuccess: function (t) {
                      H(
                        "signIn",
                        e,
                        "A user " + e.getUsername() + " has been signed in"
                      ),
                        B.debug("verifyTotpToken success", t),
                        r(t);
                    },
                  });
                })
              );
            }),
            (e.prototype.confirmSignIn = function (e, t, r, i) {
              var o = this;
              if ((void 0 === i && (i = this._config.clientMetadata), !t))
                return this.rejectAuthError(n.a.EmptyCode);
              var s = this;
              return new Promise(function (n, a) {
                e.sendMFACode(
                  t,
                  {
                    onSuccess: function (t) {
                      return D(o, void 0, void 0, function () {
                        var r, i;
                        return F(this, function (o) {
                          switch (o.label) {
                            case 0:
                              B.debug(t), (o.label = 1);
                            case 1:
                              return (
                                o.trys.push([1, 4, 5, 6]),
                                [4, this.Credentials.clear()]
                              );
                            case 2:
                              return (
                                o.sent(),
                                [4, this.Credentials.set(t, "session")]
                              );
                            case 3:
                              return (
                                (r = o.sent()),
                                B.debug(
                                  "succeed to get cognito credentials",
                                  r
                                ),
                                [3, 6]
                              );
                            case 4:
                              return (
                                (i = o.sent()),
                                B.debug("cannot get cognito credentials", i),
                                [3, 6]
                              );
                            case 5:
                              return (
                                (s.user = e),
                                H(
                                  "signIn",
                                  e,
                                  "A user " +
                                    e.getUsername() +
                                    " has been signed in"
                                ),
                                n(e),
                                [7]
                              );
                            case 6:
                              return [2];
                          }
                        });
                      });
                    },
                    onFailure: function (e) {
                      B.debug("confirm signIn failure", e), a(e);
                    },
                  },
                  r,
                  i
                );
              });
            }),
            (e.prototype.completeNewPassword = function (e, t, r, i) {
              var o = this;
              if (
                (void 0 === r && (r = {}),
                void 0 === i && (i = this._config.clientMetadata),
                !t)
              )
                return this.rejectAuthError(n.a.EmptyPassword);
              var s = this;
              return new Promise(function (n, a) {
                e.completeNewPasswordChallenge(
                  t,
                  r,
                  {
                    onSuccess: function (t) {
                      return D(o, void 0, void 0, function () {
                        var r, i;
                        return F(this, function (o) {
                          switch (o.label) {
                            case 0:
                              B.debug(t), (o.label = 1);
                            case 1:
                              return (
                                o.trys.push([1, 4, 5, 6]),
                                [4, this.Credentials.clear()]
                              );
                            case 2:
                              return (
                                o.sent(),
                                [4, this.Credentials.set(t, "session")]
                              );
                            case 3:
                              return (
                                (r = o.sent()),
                                B.debug(
                                  "succeed to get cognito credentials",
                                  r
                                ),
                                [3, 6]
                              );
                            case 4:
                              return (
                                (i = o.sent()),
                                B.debug("cannot get cognito credentials", i),
                                [3, 6]
                              );
                            case 5:
                              return (
                                (s.user = e),
                                H(
                                  "signIn",
                                  e,
                                  "A user " +
                                    e.getUsername() +
                                    " has been signed in"
                                ),
                                n(e),
                                [7]
                              );
                            case 6:
                              return [2];
                          }
                        });
                      });
                    },
                    onFailure: function (e) {
                      B.debug("completeNewPassword failure", e),
                        H(
                          "completeNewPassword_failure",
                          e,
                          o.user + " failed to complete the new password flow"
                        ),
                        a(e);
                    },
                    mfaRequired: function (t, r) {
                      B.debug("signIn MFA required"),
                        (e.challengeName = t),
                        (e.challengeParam = r),
                        n(e);
                    },
                    mfaSetup: function (t, r) {
                      B.debug("signIn mfa setup", t),
                        (e.challengeName = t),
                        (e.challengeParam = r),
                        n(e);
                    },
                    totpRequired: function (t, r) {
                      B.debug("signIn mfa setup", t),
                        (e.challengeName = t),
                        (e.challengeParam = r),
                        n(e);
                    },
                  },
                  i
                );
              });
            }),
            (e.prototype.sendCustomChallengeAnswer = function (e, t, r) {
              var i = this;
              if (
                (void 0 === r && (r = this._config.clientMetadata),
                !this.userPool)
              )
                return this.rejectNoUserPool();
              if (!t) return this.rejectAuthError(n.a.EmptyChallengeResponse);
              return new Promise(function (n, o) {
                e.sendCustomChallengeAnswer(t, i.authCallbacks(e, n, o), r);
              });
            }),
            (e.prototype.updateUserAttributes = function (e, t, r) {
              void 0 === r && (r = this._config.clientMetadata);
              var n = [],
                i = this;
              return new Promise(function (o, s) {
                i.userSession(e).then(function (i) {
                  for (var a in t)
                    if ("sub" !== a && a.indexOf("_verified") < 0) {
                      var u = { Name: a, Value: t[a] };
                      n.push(u);
                    }
                  e.updateAttributes(
                    n,
                    function (e, t) {
                      return e ? s(e) : o(t);
                    },
                    r
                  );
                });
              });
            }),
            (e.prototype.userAttributes = function (e) {
              var t = this;
              return new Promise(function (r, n) {
                t.userSession(e).then(function (t) {
                  e.getUserAttributes(function (e, t) {
                    e ? n(e) : r(t);
                  });
                });
              });
            }),
            (e.prototype.verifiedContact = function (e) {
              var t = this;
              return this.userAttributes(e).then(function (e) {
                var r = t.attributesToObject(e),
                  n = {},
                  i = {};
                return (
                  r.email &&
                    (r.email_verified
                      ? (i.email = r.email)
                      : (n.email = r.email)),
                  r.phone_number &&
                    (r.phone_number_verified
                      ? (i.phone_number = r.phone_number)
                      : (n.phone_number = r.phone_number)),
                  { verified: i, unverified: n }
                );
              });
            }),
            (e.prototype.currentUserPoolUser = function (e) {
              var t = this;
              return this.userPool
                ? new Promise(function (r, n) {
                    t._storageSync
                      .then(function () {
                        return D(t, void 0, void 0, function () {
                          var t,
                            i,
                            s = this;
                          return F(this, function (a) {
                            switch (a.label) {
                              case 0:
                                return this.isOAuthInProgress()
                                  ? (B.debug(
                                      "OAuth signIn in progress, waiting for resolution..."
                                    ),
                                    [
                                      4,
                                      new Promise(function (e) {
                                        var t = setTimeout(function () {
                                          B.debug(
                                            "OAuth signIn in progress timeout"
                                          ),
                                            o.a.remove("auth", r),
                                            e();
                                        }, 1e4);
                                        function r(n) {
                                          var i = n.payload.event;
                                          ("cognitoHostedUI" !== i &&
                                            "cognitoHostedUI_failure" !== i) ||
                                            (B.debug(
                                              "OAuth signIn resolved: " + i
                                            ),
                                            clearTimeout(t),
                                            o.a.remove("auth", r),
                                            e());
                                        }
                                        o.a.listen("auth", r);
                                      }),
                                    ])
                                  : [3, 2];
                              case 1:
                                a.sent(), (a.label = 2);
                              case 2:
                                return (t = this.userPool.getCurrentUser())
                                  ? ((i = this._config.clientMetadata),
                                    t.getSession(
                                      function (i, o) {
                                        return D(
                                          s,
                                          void 0,
                                          void 0,
                                          function () {
                                            var s,
                                              a,
                                              u,
                                              c = this;
                                            return F(this, function (f) {
                                              switch (f.label) {
                                                case 0:
                                                  return i
                                                    ? (B.debug(
                                                        "Failed to get the user session",
                                                        i
                                                      ),
                                                      n(i),
                                                      [2])
                                                    : (s = !!e && e.bypassCache)
                                                    ? [
                                                        4,
                                                        this.Credentials.clear(),
                                                      ]
                                                    : [3, 2];
                                                case 1:
                                                  f.sent(), (f.label = 2);
                                                case 2:
                                                  return (
                                                    (a =
                                                      this._config
                                                        .clientMetadata),
                                                    (u = o
                                                      .getAccessToken()
                                                      .decodePayload().scope),
                                                    (void 0 === u ? "" : u)
                                                      .split(" ")
                                                      .includes(L)
                                                      ? (t.getUserData(
                                                          function (e, i) {
                                                            if (e)
                                                              return (
                                                                B.debug(
                                                                  "getting user data failed",
                                                                  e
                                                                ),
                                                                void ("User is disabled." ===
                                                                  e.message ||
                                                                "User does not exist." ===
                                                                  e.message ||
                                                                "Access Token has been revoked" ===
                                                                  e.message
                                                                  ? n(e)
                                                                  : r(t))
                                                              );
                                                            for (
                                                              var o =
                                                                  i.PreferredMfaSetting ||
                                                                  "NOMFA",
                                                                s = [],
                                                                a = 0;
                                                              a <
                                                              i.UserAttributes
                                                                .length;
                                                              a++
                                                            ) {
                                                              var u = {
                                                                  Name: i
                                                                    .UserAttributes[
                                                                    a
                                                                  ].Name,
                                                                  Value:
                                                                    i
                                                                      .UserAttributes[
                                                                      a
                                                                    ].Value,
                                                                },
                                                                f = new p.f(u);
                                                              s.push(f);
                                                            }
                                                            var l =
                                                              c.attributesToObject(
                                                                s
                                                              );
                                                            return (
                                                              Object.assign(t, {
                                                                attributes: l,
                                                                preferredMFA: o,
                                                              }),
                                                              r(t)
                                                            );
                                                          },
                                                          {
                                                            bypassCache: s,
                                                            clientMetadata: a,
                                                          }
                                                        ),
                                                        [2])
                                                      : (B.debug(
                                                          "Unable to get the user data because the " +
                                                            L +
                                                            " is not in the scopes of the access token"
                                                        ),
                                                        [2, r(t)])
                                                  );
                                              }
                                            });
                                          }
                                        );
                                      },
                                      { clientMetadata: i }
                                    ),
                                    [2])
                                  : (B.debug(
                                      "Failed to get user from user pool"
                                    ),
                                    n("No current user"),
                                    [2]);
                            }
                          });
                        });
                      })
                      .catch(function (e) {
                        return (
                          B.debug("Failed to sync cache info into memory", e),
                          n(e)
                        );
                      });
                  })
                : this.rejectNoUserPool();
            }),
            (e.prototype.isOAuthInProgress = function () {
              return this.oAuthFlowInProgress;
            }),
            (e.prototype.currentAuthenticatedUser = function (e) {
              return D(this, void 0, void 0, function () {
                var t, r, n, i, o;
                return F(this, function (s) {
                  switch (s.label) {
                    case 0:
                      B.debug("getting current authenticated user"),
                        (t = null),
                        (s.label = 1);
                    case 1:
                      return s.trys.push([1, 3, , 4]), [4, this._storageSync];
                    case 2:
                      return s.sent(), [3, 4];
                    case 3:
                      throw (
                        ((r = s.sent()),
                        B.debug("Failed to sync cache info into memory", r),
                        r)
                      );
                    case 4:
                      try {
                        (n = JSON.parse(
                          this._storage.getItem("aws-amplify-federatedInfo")
                        )) && (t = U(U({}, n.user), { token: n.token }));
                      } catch (a) {
                        B.debug("cannot load federated user from auth storage");
                      }
                      return t
                        ? ((this.user = t),
                          B.debug(
                            "get current authenticated federated user",
                            this.user
                          ),
                          [2, this.user])
                        : [3, 5];
                    case 5:
                      B.debug("get current authenticated userpool user"),
                        (i = null),
                        (s.label = 6);
                    case 6:
                      return (
                        s.trys.push([6, 8, , 9]),
                        [4, this.currentUserPoolUser(e)]
                      );
                    case 7:
                      return (i = s.sent()), [3, 9];
                    case 8:
                      return (
                        "No userPool" === (o = s.sent()) &&
                          B.error(
                            "Cannot get the current user because the user pool is missing. Please make sure the Auth module is configured with a valid Cognito User Pool ID"
                          ),
                        B.debug(
                          "The user is not authenticated by the error",
                          o
                        ),
                        [2, Promise.reject("The user is not authenticated")]
                      );
                    case 9:
                      return (this.user = i), [2, this.user];
                  }
                });
              });
            }),
            (e.prototype.currentSession = function () {
              var e = this;
              return (
                B.debug("Getting current session"),
                this.userPool
                  ? new Promise(function (t, r) {
                      e.currentUserPoolUser()
                        .then(function (n) {
                          e.userSession(n)
                            .then(function (e) {
                              t(e);
                            })
                            .catch(function (e) {
                              B.debug("Failed to get the current session", e),
                                r(e);
                            });
                        })
                        .catch(function (e) {
                          B.debug("Failed to get the current user", e), r(e);
                        });
                    })
                  : Promise.reject()
              );
            }),
            (e.prototype.userSession = function (e) {
              if (!e)
                return (
                  B.debug("the user is null"),
                  this.rejectAuthError(n.a.NoUserSession)
                );
              var t = this._config.clientMetadata;
              return new Promise(function (r, n) {
                B.debug("Getting the session from this user:", e),
                  e.getSession(
                    function (t, i) {
                      return t
                        ? (B.debug("Failed to get the session from user", e),
                          void n(t))
                        : (B.debug("Succeed to get the user session", i),
                          void r(i));
                    },
                    { clientMetadata: t }
                  );
              });
            }),
            (e.prototype.currentUserCredentials = function () {
              return D(this, void 0, void 0, function () {
                var e,
                  t,
                  r = this;
                return F(this, function (n) {
                  switch (n.label) {
                    case 0:
                      B.debug("Getting current user credentials"),
                        (n.label = 1);
                    case 1:
                      return n.trys.push([1, 3, , 4]), [4, this._storageSync];
                    case 2:
                      return n.sent(), [3, 4];
                    case 3:
                      throw (
                        ((e = n.sent()),
                        B.debug("Failed to sync cache info into memory", e),
                        e)
                      );
                    case 4:
                      t = null;
                      try {
                        t = JSON.parse(
                          this._storage.getItem("aws-amplify-federatedInfo")
                        );
                      } catch (i) {
                        B.debug(
                          "failed to get or parse item aws-amplify-federatedInfo",
                          i
                        );
                      }
                      return t
                        ? [2, this.Credentials.refreshFederatedToken(t)]
                        : [
                            2,
                            this.currentSession()
                              .then(function (e) {
                                return (
                                  B.debug("getting session success", e),
                                  r.Credentials.set(e, "session")
                                );
                              })
                              .catch(function (e) {
                                return (
                                  B.debug("getting session failed", e),
                                  r.Credentials.set(null, "guest")
                                );
                              }),
                          ];
                  }
                });
              });
            }),
            (e.prototype.currentCredentials = function () {
              return (
                B.debug("getting current credentials"), this.Credentials.get()
              );
            }),
            (e.prototype.verifyUserAttribute = function (e, t, r) {
              return (
                void 0 === r && (r = this._config.clientMetadata),
                new Promise(function (n, i) {
                  e.getAttributeVerificationCode(
                    t,
                    {
                      onSuccess: function () {
                        return n();
                      },
                      onFailure: function (e) {
                        return i(e);
                      },
                    },
                    r
                  );
                })
              );
            }),
            (e.prototype.verifyUserAttributeSubmit = function (e, t, r) {
              return r
                ? new Promise(function (n, i) {
                    e.verifyAttribute(t, r, {
                      onSuccess: function (e) {
                        n(e);
                      },
                      onFailure: function (e) {
                        i(e);
                      },
                    });
                  })
                : this.rejectAuthError(n.a.EmptyCode);
            }),
            (e.prototype.verifyCurrentUserAttribute = function (e) {
              var t = this;
              return t.currentUserPoolUser().then(function (r) {
                return t.verifyUserAttribute(r, e);
              });
            }),
            (e.prototype.verifyCurrentUserAttributeSubmit = function (e, t) {
              var r = this;
              return r.currentUserPoolUser().then(function (n) {
                return r.verifyUserAttributeSubmit(n, e, t);
              });
            }),
            (e.prototype.cognitoIdentitySignOut = function (e, t) {
              return D(this, void 0, void 0, function () {
                var r,
                  n,
                  i = this;
                return F(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return o.trys.push([0, 2, , 3]), [4, this._storageSync];
                    case 1:
                      return o.sent(), [3, 3];
                    case 2:
                      throw (
                        ((r = o.sent()),
                        B.debug("Failed to sync cache info into memory", r),
                        r)
                      );
                    case 3:
                      return (
                        (n =
                          this._oAuthHandler &&
                          "true" ===
                            this._storage.getItem(
                              "amplify-signin-with-hostedUI"
                            )),
                        [
                          2,
                          new Promise(function (r, o) {
                            if (e && e.global) {
                              B.debug("user global sign out", t);
                              var s = i._config.clientMetadata;
                              t.getSession(
                                function (e, s) {
                                  if (e)
                                    return (
                                      B.debug(
                                        "failed to get the user session",
                                        e
                                      ),
                                      o(e)
                                    );
                                  t.globalSignOut({
                                    onSuccess: function (e) {
                                      if (
                                        (B.debug("global sign out success"), !n)
                                      )
                                        return r();
                                      i.oAuthSignOutRedirect(r, o);
                                    },
                                    onFailure: function (e) {
                                      return (
                                        B.debug("global sign out failed", e),
                                        o(e)
                                      );
                                    },
                                  });
                                },
                                { clientMetadata: s }
                              );
                            } else {
                              if (
                                (B.debug("user sign out", t), t.signOut(), !n)
                              )
                                return r();
                              i.oAuthSignOutRedirect(r, o);
                            }
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.oAuthSignOutRedirect = function (e, t) {
              c.a.browserOrNode().isBrowser
                ? this.oAuthSignOutRedirectOrReject(t)
                : this.oAuthSignOutAndResolve(e);
            }),
            (e.prototype.oAuthSignOutAndResolve = function (e) {
              this._oAuthHandler.signOut(), e();
            }),
            (e.prototype.oAuthSignOutRedirectOrReject = function (e) {
              this._oAuthHandler.signOut(),
                setTimeout(function () {
                  return e("Signout timeout fail");
                }, 3e3);
            }),
            (e.prototype.signOut = function (e) {
              return D(this, void 0, void 0, function () {
                var t;
                return F(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        r.trys.push([0, 2, , 3]), [4, this.cleanCachedItems()]
                      );
                    case 1:
                      return r.sent(), [3, 3];
                    case 2:
                      return (
                        r.sent(),
                        B.debug("failed to clear cached items"),
                        [3, 3]
                      );
                    case 3:
                      return this.userPool
                        ? (t = this.userPool.getCurrentUser())
                          ? [4, this.cognitoIdentitySignOut(e, t)]
                          : [3, 5]
                        : [3, 7];
                    case 4:
                      return r.sent(), [3, 6];
                    case 5:
                      B.debug("no current Cognito user"), (r.label = 6);
                    case 6:
                      return [3, 8];
                    case 7:
                      B.debug("no Congito User pool"), (r.label = 8);
                    case 8:
                      return (
                        H("signOut", this.user, "A user has been signed out"),
                        (this.user = null),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.cleanCachedItems = function () {
              return D(this, void 0, void 0, function () {
                return F(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.Credentials.clear()];
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.changePassword = function (e, t, r, n) {
              var i = this;
              return (
                void 0 === n && (n = this._config.clientMetadata),
                new Promise(function (o, s) {
                  i.userSession(e).then(function (i) {
                    e.changePassword(
                      t,
                      r,
                      function (e, t) {
                        return e
                          ? (B.debug("change password failure", e), s(e))
                          : o(t);
                      },
                      n
                    );
                  });
                })
              );
            }),
            (e.prototype.forgotPassword = function (e, t) {
              if (
                (void 0 === t && (t = this._config.clientMetadata),
                !this.userPool)
              )
                return this.rejectNoUserPool();
              if (!e) return this.rejectAuthError(n.a.EmptyUsername);
              var r = this.createCognitoUser(e);
              return new Promise(function (n, i) {
                r.forgotPassword(
                  {
                    onSuccess: function () {
                      n();
                    },
                    onFailure: function (t) {
                      B.debug("forgot password failure", t),
                        H(
                          "forgotPassword_failure",
                          t,
                          e + " forgotPassword failed"
                        ),
                        i(t);
                    },
                    inputVerificationCode: function (t) {
                      H(
                        "forgotPassword",
                        r,
                        e + " has initiated forgot password flow"
                      ),
                        n(t);
                    },
                  },
                  t
                );
              });
            }),
            (e.prototype.forgotPasswordSubmit = function (e, t, r, i) {
              if (
                (void 0 === i && (i = this._config.clientMetadata),
                !this.userPool)
              )
                return this.rejectNoUserPool();
              if (!e) return this.rejectAuthError(n.a.EmptyUsername);
              if (!t) return this.rejectAuthError(n.a.EmptyCode);
              if (!r) return this.rejectAuthError(n.a.EmptyPassword);
              var o = this.createCognitoUser(e);
              return new Promise(function (n, s) {
                o.confirmPassword(
                  t,
                  r,
                  {
                    onSuccess: function () {
                      H(
                        "forgotPasswordSubmit",
                        o,
                        e + " forgotPasswordSubmit successful"
                      ),
                        n();
                    },
                    onFailure: function (t) {
                      H(
                        "forgotPasswordSubmit_failure",
                        t,
                        e + " forgotPasswordSubmit failed"
                      ),
                        s(t);
                    },
                  },
                  i
                );
              });
            }),
            (e.prototype.currentUserInfo = function () {
              return D(this, void 0, void 0, function () {
                var e, t, r, n, i, o, s;
                return F(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (e = this.Credentials.getCredSource()) &&
                        "aws" !== e &&
                        "userPool" !== e
                        ? [3, 9]
                        : [
                            4,
                            this.currentUserPoolUser().catch(function (e) {
                              return B.debug(e);
                            }),
                          ];
                    case 1:
                      if (!(s = a.sent())) return [2, null];
                      a.label = 2;
                    case 2:
                      return (
                        a.trys.push([2, 8, , 9]), [4, this.userAttributes(s)]
                      );
                    case 3:
                      (t = a.sent()),
                        (r = this.attributesToObject(t)),
                        (n = null),
                        (a.label = 4);
                    case 4:
                      return (
                        a.trys.push([4, 6, , 7]), [4, this.currentCredentials()]
                      );
                    case 5:
                      return (n = a.sent()), [3, 7];
                    case 6:
                      return (
                        (i = a.sent()),
                        B.debug(
                          "Failed to retrieve credentials while getting current user info",
                          i
                        ),
                        [3, 7]
                      );
                    case 7:
                      return [
                        2,
                        {
                          id: n ? n.identityId : void 0,
                          username: s.getUsername(),
                          attributes: r,
                        },
                      ];
                    case 8:
                      return (
                        (o = a.sent()),
                        B.debug("currentUserInfo error", o),
                        [2, {}]
                      );
                    case 9:
                      return "federated" === e
                        ? [2, (s = this.user) || {}]
                        : [2];
                  }
                });
              });
            }),
            (e.prototype.federatedSignIn = function (e, t, r) {
              return D(this, void 0, void 0, function () {
                var i, o, s, a, u, c, f, l, d, h, p;
                return F(this, function (g) {
                  switch (g.label) {
                    case 0:
                      if (
                        !this._config.identityPoolId &&
                        !this._config.userPoolId
                      )
                        throw new Error(
                          "Federation requires either a User Pool or Identity Pool in config"
                        );
                      if (
                        "undefined" === typeof e &&
                        this._config.identityPoolId &&
                        !this._config.userPoolId
                      )
                        throw new Error(
                          "Federation with Identity Pools requires tokens passed as arguments"
                        );
                      return Object(n.e)(e) ||
                        Object(n.f)(e) ||
                        Object(n.c)(e) ||
                        "undefined" === typeof e
                        ? ((i = e || { provider: n.b.Cognito }),
                          (u = Object(n.e)(i) ? i.provider : i.customProvider),
                          Object(n.e)(i),
                          (o = i.customState),
                          this._config.userPoolId &&
                            ((s = Object(n.d)(this._config.oauth)
                              ? this._config.userPoolWebClientId
                              : this._config.oauth.clientID),
                            (a = Object(n.d)(this._config.oauth)
                              ? this._config.oauth.redirectSignIn
                              : this._config.oauth.redirectUri),
                            this._oAuthHandler.oauthSignIn(
                              this._config.oauth.responseType,
                              this._config.oauth.domain,
                              a,
                              s,
                              u,
                              o
                            )),
                          [3, 4])
                        : [3, 1];
                    case 1:
                      u = e;
                      try {
                        (c = JSON.stringify(
                          JSON.parse(
                            this._storage.getItem("aws-amplify-federatedInfo")
                          ).user
                        )) &&
                          B.warn(
                            "There is already a signed in user: " +
                              c +
                              " in your app.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYou should not call Auth.federatedSignIn method again as it may cause unexpected behavior."
                          );
                      } catch (y) {}
                      return (
                        (f = t.token),
                        (l = t.identity_id),
                        (d = t.expires_at),
                        [
                          4,
                          this.Credentials.set(
                            {
                              provider: u,
                              token: f,
                              identity_id: l,
                              user: r,
                              expires_at: d,
                            },
                            "federation"
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (h = g.sent()), [4, this.currentAuthenticatedUser()]
                      );
                    case 3:
                      return (
                        (p = g.sent()),
                        H(
                          "signIn",
                          p,
                          "A user " + p.username + " has been signed in"
                        ),
                        B.debug("federated sign in credentials", h),
                        [2, h]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype._handleAuthResponse = function (e) {
              return D(this, void 0, void 0, function () {
                var t, r, n, i, o, s, a, u, f, l, d, h, y, m;
                return F(this, function (v) {
                  switch (v.label) {
                    case 0:
                      if (this.oAuthFlowInProgress)
                        return (
                          B.debug(
                            "Skipping URL " + e + " current flow in progress"
                          ),
                          [2]
                        );
                      v.label = 1;
                    case 1:
                      if (
                        (v.trys.push([1, , 8, 9]),
                        (this.oAuthFlowInProgress = !0),
                        !this._config.userPoolId)
                      )
                        throw new Error(
                          "OAuth responses require a User Pool defined in config"
                        );
                      if (
                        (H(
                          "parsingCallbackUrl",
                          { url: e },
                          "The callback url is being parsed"
                        ),
                        (t =
                          e ||
                          (c.a.browserOrNode().isBrowser
                            ? window.location.href
                            : "")),
                        (r = !!(Object(g.parse)(t).query || "")
                          .split("&")
                          .map(function (e) {
                            return e.split("=");
                          })
                          .find(function (e) {
                            var t = N(e, 1)[0];
                            return "code" === t || "error" === t;
                          })),
                        (n = !!(Object(g.parse)(t).hash || "#")
                          .substr(1)
                          .split("&")
                          .map(function (e) {
                            return e.split("=");
                          })
                          .find(function (e) {
                            var t = N(e, 1)[0];
                            return "access_token" === t || "error" === t;
                          })),
                        !r && !n)
                      )
                        return [3, 7];
                      this._storage.setItem(
                        "amplify-redirected-from-hosted-ui",
                        "true"
                      ),
                        (v.label = 2);
                    case 2:
                      return (
                        v.trys.push([2, 6, , 7]),
                        [4, this._oAuthHandler.handleAuthResponse(t)]
                      );
                    case 3:
                      return (
                        (i = v.sent()),
                        (o = i.accessToken),
                        (s = i.idToken),
                        (a = i.refreshToken),
                        (u = i.state),
                        (f = new p.h({
                          IdToken: new p.c({ IdToken: s }),
                          RefreshToken: new p.d({ RefreshToken: a }),
                          AccessToken: new p.b({ AccessToken: o }),
                        })),
                        (l = void 0),
                        this._config.identityPoolId
                          ? [4, this.Credentials.set(f, "session")]
                          : [3, 5]
                      );
                    case 4:
                      (l = v.sent()),
                        B.debug("AWS credentials", l),
                        (v.label = 5);
                    case 5:
                      return (
                        (d = /-/.test(u)),
                        (h = this.createCognitoUser(
                          f.getIdToken().decodePayload()["cognito:username"]
                        )).setSignInUserSession(f),
                        window &&
                          "undefined" !== typeof window.history &&
                          window.history.replaceState(
                            {},
                            null,
                            this._config.oauth.redirectSignIn
                          ),
                        H(
                          "signIn",
                          h,
                          "A user " + h.getUsername() + " has been signed in"
                        ),
                        H(
                          "cognitoHostedUI",
                          h,
                          "A user " +
                            h.getUsername() +
                            " has been signed in via Cognito Hosted UI"
                        ),
                        d &&
                          ((y = u.split("-").splice(1).join("-")),
                          H(
                            "customOAuthState",
                            y
                              .match(/.{2}/g)
                              .map(function (e) {
                                return String.fromCharCode(parseInt(e, 16));
                              })
                              .join(""),
                            "State for user " + h.getUsername()
                          )),
                        [2, l]
                      );
                    case 6:
                      return (
                        (m = v.sent()),
                        B.debug("Error in cognito hosted auth response", m),
                        H(
                          "signIn_failure",
                          m,
                          "The OAuth response flow failed"
                        ),
                        H(
                          "cognitoHostedUI_failure",
                          m,
                          "A failure occurred when returning to the Cognito Hosted UI"
                        ),
                        H(
                          "customState_failure",
                          m,
                          "A failure occurred when returning state"
                        ),
                        [3, 7]
                      );
                    case 7:
                      return [3, 9];
                    case 8:
                      return (this.oAuthFlowInProgress = !1), [7];
                    case 9:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.essentialCredentials = function (e) {
              return {
                accessKeyId: e.accessKeyId,
                sessionToken: e.sessionToken,
                secretAccessKey: e.secretAccessKey,
                identityId: e.identityId,
                authenticated: e.authenticated,
              };
            }),
            (e.prototype.attributesToObject = function (e) {
              var t = this,
                r = {};
              return (
                e &&
                  e.map(function (e) {
                    "email_verified" === e.Name ||
                    "phone_number_verified" === e.Name
                      ? (r[e.Name] =
                          t.isTruthyString(e.Value) || !0 === e.Value)
                      : (r[e.Name] = e.Value);
                  }),
                r
              );
            }),
            (e.prototype.isTruthyString = function (e) {
              return (
                "function" === typeof e.toLowerCase &&
                "true" === e.toLowerCase()
              );
            }),
            (e.prototype.createCognitoUser = function (e) {
              var t = { Username: e, Pool: this.userPool };
              t.Storage = this._storage;
              var r = this._config.authenticationFlowType,
                n = new p.e(t);
              return r && n.setAuthenticationFlowType(r), n;
            }),
            (e.prototype._isValidAuthStorage = function (e) {
              return (
                !!e &&
                "function" === typeof e.getItem &&
                "function" === typeof e.setItem &&
                "function" === typeof e.removeItem &&
                "function" === typeof e.clear
              );
            }),
            (e.prototype.noUserPoolErrorHandler = function (e) {
              return !e || (e.userPoolId && e.identityPoolId)
                ? n.a.NoConfig
                : n.a.MissingAuthConfig;
            }),
            (e.prototype.rejectAuthError = function (e) {
              return Promise.reject(new T(e));
            }),
            (e.prototype.rejectNoUserPool = function () {
              var e = this.noUserPoolErrorHandler(this._config);
              return Promise.reject(new R(e));
            }),
            e
          );
        })())(null);
      h.a.register(q);
    },
    vNVm: function (e, t, r) {
      "use strict";
      var n = r("zoAU");
      (t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            r = e.disabled || !s,
            u = (0, i.useRef)(),
            c = (0, i.useState)(!1),
            f = n(c, 2),
            l = f[0],
            d = f[1],
            h = (0, i.useCallback)(
              function (e) {
                u.current && (u.current(), (u.current = void 0)),
                  r ||
                    l ||
                    (e &&
                      e.tagName &&
                      (u.current = (function (e, t, r) {
                        var n = (function (e) {
                            var t = e.rootMargin || "",
                              r = a.get(t);
                            if (r) return r;
                            var n = new Map(),
                              i = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = n.get(e.target),
                                    r =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && r && t(r);
                                });
                              }, e);
                            return (
                              a.set(
                                t,
                                (r = { id: t, observer: i, elements: n })
                              ),
                              r
                            );
                          })(r),
                          i = n.id,
                          o = n.observer,
                          s = n.elements;
                        return (
                          s.set(e, t),
                          o.observe(e),
                          function () {
                            s.delete(e),
                              o.unobserve(e),
                              0 === s.size && (o.disconnect(), a.delete(i));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && d(e);
                        },
                        { rootMargin: t }
                      )));
              },
              [r, t, l]
            );
          return (
            (0, i.useEffect)(
              function () {
                if (!s && !l) {
                  var e = (0, o.requestIdleCallback)(function () {
                    return d(!0);
                  });
                  return function () {
                    return (0, o.cancelIdleCallback)(e);
                  };
                }
              },
              [l]
            ),
            [h, l]
          );
        });
      var i = r("q1tI"),
        o = r("0G5g"),
        s = "undefined" !== typeof IntersectionObserver;
      var a = new Map();
    },
    vOnD: function (e, t, r) {
      "use strict";
      (function (e) {
        r.d(t, "a", function () {
          return Re;
        }),
          r.d(t, "b", function () {
            return me;
          }),
          r.d(t, "d", function () {
            return Me;
          });
        var n = r("TOwV"),
          i = r("q1tI"),
          o = r.n(i),
          s = r("Gytx"),
          a = r.n(s),
          u = r("0x0X"),
          c = r("ME5O"),
          f = r("9uj6"),
          l = r("2mql"),
          d = r.n(l);
        function h() {
          return (h =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
        }
        var p = function (e, t) {
            for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
              r.push(t[n], e[n + 1]);
            return r;
          },
          g = function (e) {
            return (
              null !== e &&
              "object" == typeof e &&
              "[object Object]" ===
                (e.toString
                  ? e.toString()
                  : Object.prototype.toString.call(e)) &&
              !Object(n.typeOf)(e)
            );
          },
          y = Object.freeze([]),
          m = Object.freeze({});
        function v(e) {
          return "function" == typeof e;
        }
        function b(e) {
          return e.displayName || e.name || "Component";
        }
        function w(e) {
          return e && "string" == typeof e.styledComponentId;
        }
        var S =
            ("undefined" != typeof e &&
              (e.env.REACT_APP_SC_ATTR || e.env.SC_ATTR)) ||
            "data-styled",
          _ = "undefined" != typeof window && "HTMLElement" in window,
          A = Boolean(
            "boolean" == typeof SC_DISABLE_SPEEDY
              ? SC_DISABLE_SPEEDY
              : "undefined" != typeof e &&
                void 0 !== e.env.REACT_APP_SC_DISABLE_SPEEDY &&
                "" !== e.env.REACT_APP_SC_DISABLE_SPEEDY
              ? "false" !== e.env.REACT_APP_SC_DISABLE_SPEEDY &&
                e.env.REACT_APP_SC_DISABLE_SPEEDY
              : "undefined" != typeof e &&
                void 0 !== e.env.SC_DISABLE_SPEEDY &&
                "" !== e.env.SC_DISABLE_SPEEDY &&
                "false" !== e.env.SC_DISABLE_SPEEDY &&
                e.env.SC_DISABLE_SPEEDY
          ),
          C = {};
        function O(e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
          throw new Error(
            "An error occurred. See https://git.io/JUIaE#" +
              e +
              " for more information." +
              (r.length > 0 ? " Args: " + r.join(", ") : "")
          );
        }
        var E = (function () {
            function e(e) {
              (this.groupSizes = new Uint32Array(512)),
                (this.length = 512),
                (this.tag = e);
            }
            var t = e.prototype;
            return (
              (t.indexOfGroup = function (e) {
                for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
                return t;
              }),
              (t.insertRules = function (e, t) {
                if (e >= this.groupSizes.length) {
                  for (var r = this.groupSizes, n = r.length, i = n; e >= i; )
                    (i <<= 1) < 0 && O(16, "" + e);
                  (this.groupSizes = new Uint32Array(i)),
                    this.groupSizes.set(r),
                    (this.length = i);
                  for (var o = n; o < i; o++) this.groupSizes[o] = 0;
                }
                for (
                  var s = this.indexOfGroup(e + 1), a = 0, u = t.length;
                  a < u;
                  a++
                )
                  this.tag.insertRule(s, t[a]) && (this.groupSizes[e]++, s++);
              }),
              (t.clearGroup = function (e) {
                if (e < this.length) {
                  var t = this.groupSizes[e],
                    r = this.indexOfGroup(e),
                    n = r + t;
                  this.groupSizes[e] = 0;
                  for (var i = r; i < n; i++) this.tag.deleteRule(r);
                }
              }),
              (t.getGroup = function (e) {
                var t = "";
                if (e >= this.length || 0 === this.groupSizes[e]) return t;
                for (
                  var r = this.groupSizes[e],
                    n = this.indexOfGroup(e),
                    i = n + r,
                    o = n;
                  o < i;
                  o++
                )
                  t += this.tag.getRule(o) + "/*!sc*/\n";
                return t;
              }),
              e
            );
          })(),
          k = new Map(),
          P = new Map(),
          x = 1,
          I = function (e) {
            if (k.has(e)) return k.get(e);
            for (; P.has(x); ) x++;
            var t = x++;
            return k.set(e, t), P.set(t, e), t;
          },
          j = function (e) {
            return P.get(e);
          },
          T = function (e, t) {
            k.set(e, t), P.set(t, e);
          },
          R = "style[" + S + '][data-styled-version="5.3.0"]',
          M = new RegExp(
            "^" + S + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
          ),
          U = function (e, t, r) {
            for (var n, i = r.split(","), o = 0, s = i.length; o < s; o++)
              (n = i[o]) && e.registerName(t, n);
          },
          D = function (e, t) {
            for (
              var r = t.innerHTML.split("/*!sc*/\n"),
                n = [],
                i = 0,
                o = r.length;
              i < o;
              i++
            ) {
              var s = r[i].trim();
              if (s) {
                var a = s.match(M);
                if (a) {
                  var u = 0 | parseInt(a[1], 10),
                    c = a[2];
                  0 !== u &&
                    (T(c, u), U(e, c, a[3]), e.getTag().insertRules(u, n)),
                    (n.length = 0);
                } else n.push(s);
              }
            }
          },
          F = function () {
            return "undefined" != typeof window &&
              void 0 !== window.__webpack_nonce__
              ? window.__webpack_nonce__
              : null;
          },
          N = function (e) {
            var t = document.head,
              r = e || t,
              n = document.createElement("style"),
              i = (function (e) {
                for (var t = e.childNodes, r = t.length; r >= 0; r--) {
                  var n = t[r];
                  if (n && 1 === n.nodeType && n.hasAttribute(S)) return n;
                }
              })(r),
              o = void 0 !== i ? i.nextSibling : null;
            n.setAttribute(S, "active"),
              n.setAttribute("data-styled-version", "5.3.0");
            var s = F();
            return s && n.setAttribute("nonce", s), r.insertBefore(n, o), n;
          },
          B = (function () {
            function e(e) {
              var t = (this.element = N(e));
              t.appendChild(document.createTextNode("")),
                (this.sheet = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (
                    var t = document.styleSheets, r = 0, n = t.length;
                    r < n;
                    r++
                  ) {
                    var i = t[r];
                    if (i.ownerNode === e) return i;
                  }
                  O(17);
                })(t)),
                (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                try {
                  return this.sheet.insertRule(t, e), this.length++, !0;
                } catch (e) {
                  return !1;
                }
              }),
              (t.deleteRule = function (e) {
                this.sheet.deleteRule(e), this.length--;
              }),
              (t.getRule = function (e) {
                var t = this.sheet.cssRules[e];
                return void 0 !== t && "string" == typeof t.cssText
                  ? t.cssText
                  : "";
              }),
              e
            );
          })(),
          L = (function () {
            function e(e) {
              var t = (this.element = N(e));
              (this.nodes = t.childNodes), (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                if (e <= this.length && e >= 0) {
                  var r = document.createTextNode(t),
                    n = this.nodes[e];
                  return (
                    this.element.insertBefore(r, n || null), this.length++, !0
                  );
                }
                return !1;
              }),
              (t.deleteRule = function (e) {
                this.element.removeChild(this.nodes[e]), this.length--;
              }),
              (t.getRule = function (e) {
                return e < this.length ? this.nodes[e].textContent : "";
              }),
              e
            );
          })(),
          z = (function () {
            function e(e) {
              (this.rules = []), (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                return (
                  e <= this.length &&
                  (this.rules.splice(e, 0, t), this.length++, !0)
                );
              }),
              (t.deleteRule = function (e) {
                this.rules.splice(e, 1), this.length--;
              }),
              (t.getRule = function (e) {
                return e < this.length ? this.rules[e] : "";
              }),
              e
            );
          })(),
          H = _,
          q = { isServer: !_, useCSSOMInjection: !A },
          V = (function () {
            function e(e, t, r) {
              void 0 === e && (e = m),
                void 0 === t && (t = {}),
                (this.options = h({}, q, {}, e)),
                (this.gs = t),
                (this.names = new Map(r)),
                !this.options.isServer &&
                  _ &&
                  H &&
                  ((H = !1),
                  (function (e) {
                    for (
                      var t = document.querySelectorAll(R), r = 0, n = t.length;
                      r < n;
                      r++
                    ) {
                      var i = t[r];
                      i &&
                        "active" !== i.getAttribute(S) &&
                        (D(e, i), i.parentNode && i.parentNode.removeChild(i));
                    }
                  })(this));
            }
            e.registerId = function (e) {
              return I(e);
            };
            var t = e.prototype;
            return (
              (t.reconstructWithOptions = function (t, r) {
                return (
                  void 0 === r && (r = !0),
                  new e(
                    h({}, this.options, {}, t),
                    this.gs,
                    (r && this.names) || void 0
                  )
                );
              }),
              (t.allocateGSInstance = function (e) {
                return (this.gs[e] = (this.gs[e] || 0) + 1);
              }),
              (t.getTag = function () {
                return (
                  this.tag ||
                  (this.tag =
                    ((r = (t = this.options).isServer),
                    (n = t.useCSSOMInjection),
                    (i = t.target),
                    (e = r ? new z(i) : n ? new B(i) : new L(i)),
                    new E(e)))
                );
                var e, t, r, n, i;
              }),
              (t.hasNameForId = function (e, t) {
                return this.names.has(e) && this.names.get(e).has(t);
              }),
              (t.registerName = function (e, t) {
                if ((I(e), this.names.has(e))) this.names.get(e).add(t);
                else {
                  var r = new Set();
                  r.add(t), this.names.set(e, r);
                }
              }),
              (t.insertRules = function (e, t, r) {
                this.registerName(e, t), this.getTag().insertRules(I(e), r);
              }),
              (t.clearNames = function (e) {
                this.names.has(e) && this.names.get(e).clear();
              }),
              (t.clearRules = function (e) {
                this.getTag().clearGroup(I(e)), this.clearNames(e);
              }),
              (t.clearTag = function () {
                this.tag = void 0;
              }),
              (t.toString = function () {
                return (function (e) {
                  for (
                    var t = e.getTag(), r = t.length, n = "", i = 0;
                    i < r;
                    i++
                  ) {
                    var o = j(i);
                    if (void 0 !== o) {
                      var s = e.names.get(o),
                        a = t.getGroup(i);
                      if (void 0 !== s && 0 !== a.length) {
                        var u = S + ".g" + i + '[id="' + o + '"]',
                          c = "";
                        void 0 !== s &&
                          s.forEach(function (e) {
                            e.length > 0 && (c += e + ",");
                          }),
                          (n += "" + a + u + '{content:"' + c + '"}/*!sc*/\n');
                      }
                    }
                  }
                  return n;
                })(this);
              }),
              e
            );
          })(),
          W = /(a)(d)/gi,
          G = function (e) {
            return String.fromCharCode(e + (e > 25 ? 39 : 97));
          };
        function K(e) {
          var t,
            r = "";
          for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = G(t % 52) + r;
          return (G(t % 52) + r).replace(W, "$1-$2");
        }
        var Y = function (e, t) {
            for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
            return e;
          },
          $ = function (e) {
            return Y(5381, e);
          };
        function J(e) {
          for (var t = 0; t < e.length; t += 1) {
            var r = e[t];
            if (v(r) && !w(r)) return !1;
          }
          return !0;
        }
        var Z = $("5.3.0"),
          X = (function () {
            function e(e, t, r) {
              (this.rules = e),
                (this.staticRulesId = ""),
                (this.isStatic = (void 0 === r || r.isStatic) && J(e)),
                (this.componentId = t),
                (this.baseHash = Y(Z, t)),
                (this.baseStyle = r),
                V.registerId(t);
            }
            return (
              (e.prototype.generateAndInjectStyles = function (e, t, r) {
                var n = this.componentId,
                  i = [];
                if (
                  (this.baseStyle &&
                    i.push(this.baseStyle.generateAndInjectStyles(e, t, r)),
                  this.isStatic && !r.hash)
                )
                  if (
                    this.staticRulesId &&
                    t.hasNameForId(n, this.staticRulesId)
                  )
                    i.push(this.staticRulesId);
                  else {
                    var o = ye(this.rules, e, t, r).join(""),
                      s = K(Y(this.baseHash, o.length) >>> 0);
                    if (!t.hasNameForId(n, s)) {
                      var a = r(o, "." + s, void 0, n);
                      t.insertRules(n, s, a);
                    }
                    i.push(s), (this.staticRulesId = s);
                  }
                else {
                  for (
                    var u = this.rules.length,
                      c = Y(this.baseHash, r.hash),
                      f = "",
                      l = 0;
                    l < u;
                    l++
                  ) {
                    var d = this.rules[l];
                    if ("string" == typeof d) f += d;
                    else if (d) {
                      var h = ye(d, e, t, r),
                        p = Array.isArray(h) ? h.join("") : h;
                      (c = Y(c, p + l)), (f += p);
                    }
                  }
                  if (f) {
                    var g = K(c >>> 0);
                    if (!t.hasNameForId(n, g)) {
                      var y = r(f, "." + g, void 0, n);
                      t.insertRules(n, g, y);
                    }
                    i.push(g);
                  }
                }
                return i.join(" ");
              }),
              e
            );
          })(),
          Q = /^\s*\/\/.*$/gm,
          ee = [":", "[", ".", "#"];
        function te(e) {
          var t,
            r,
            n,
            i,
            o = void 0 === e ? m : e,
            s = o.options,
            a = void 0 === s ? m : s,
            c = o.plugins,
            f = void 0 === c ? y : c,
            l = new u.a(a),
            d = [],
            h = (function (e) {
              function t(t) {
                if (t)
                  try {
                    e(t + "}");
                  } catch (e) {}
              }
              return function (r, n, i, o, s, a, u, c, f, l) {
                switch (r) {
                  case 1:
                    if (0 === f && 64 === n.charCodeAt(0))
                      return e(n + ";"), "";
                    break;
                  case 2:
                    if (0 === c) return n + "/*|*/";
                    break;
                  case 3:
                    switch (c) {
                      case 102:
                      case 112:
                        return e(i[0] + n), "";
                      default:
                        return n + (0 === l ? "/*|*/" : "");
                    }
                  case -2:
                    n.split("/*|*/}").forEach(t);
                }
              };
            })(function (e) {
              d.push(e);
            }),
            p = function (e, n, o) {
              return (0 === n && -1 !== ee.indexOf(o[r.length])) || o.match(i)
                ? e
                : "." + t;
            };
          function g(e, o, s, a) {
            void 0 === a && (a = "&");
            var u = e.replace(Q, ""),
              c = o && s ? s + " " + o + " { " + u + " }" : u;
            return (
              (t = a),
              (r = o),
              (n = new RegExp("\\" + r + "\\b", "g")),
              (i = new RegExp("(\\" + r + "\\b){2,}")),
              l(s || !o ? "" : o, c)
            );
          }
          return (
            l.use(
              [].concat(f, [
                function (e, t, i) {
                  2 === e &&
                    i.length &&
                    i[0].lastIndexOf(r) > 0 &&
                    (i[0] = i[0].replace(n, p));
                },
                h,
                function (e) {
                  if (-2 === e) {
                    var t = d;
                    return (d = []), t;
                  }
                },
              ])
            ),
            (g.hash = f.length
              ? f
                  .reduce(function (e, t) {
                    return t.name || O(15), Y(e, t.name);
                  }, 5381)
                  .toString()
              : ""),
            g
          );
        }
        var re = o.a.createContext(),
          ne = (re.Consumer, o.a.createContext()),
          ie = (ne.Consumer, new V()),
          oe = te();
        function se() {
          return Object(i.useContext)(re) || ie;
        }
        function ae() {
          return Object(i.useContext)(ne) || oe;
        }
        function ue(e) {
          var t = Object(i.useState)(e.stylisPlugins),
            r = t[0],
            n = t[1],
            s = se(),
            u = Object(i.useMemo)(
              function () {
                var t = s;
                return (
                  e.sheet
                    ? (t = e.sheet)
                    : e.target &&
                      (t = t.reconstructWithOptions({ target: e.target }, !1)),
                  e.disableCSSOMInjection &&
                    (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                  t
                );
              },
              [e.disableCSSOMInjection, e.sheet, e.target]
            ),
            c = Object(i.useMemo)(
              function () {
                return te({
                  options: { prefix: !e.disableVendorPrefixes },
                  plugins: r,
                });
              },
              [e.disableVendorPrefixes, r]
            );
          return (
            Object(i.useEffect)(
              function () {
                a()(r, e.stylisPlugins) || n(e.stylisPlugins);
              },
              [e.stylisPlugins]
            ),
            o.a.createElement(
              re.Provider,
              { value: u },
              o.a.createElement(ne.Provider, { value: c }, e.children)
            )
          );
        }
        var ce = (function () {
            function e(e, t) {
              var r = this;
              (this.inject = function (e, t) {
                void 0 === t && (t = oe);
                var n = r.name + t.hash;
                e.hasNameForId(r.id, n) ||
                  e.insertRules(r.id, n, t(r.rules, n, "@keyframes"));
              }),
                (this.toString = function () {
                  return O(12, String(r.name));
                }),
                (this.name = e),
                (this.id = "sc-keyframes-" + e),
                (this.rules = t);
            }
            return (
              (e.prototype.getName = function (e) {
                return void 0 === e && (e = oe), this.name + e.hash;
              }),
              e
            );
          })(),
          fe = /([A-Z])/,
          le = /([A-Z])/g,
          de = /^ms-/,
          he = function (e) {
            return "-" + e.toLowerCase();
          };
        function pe(e) {
          return fe.test(e) ? e.replace(le, he).replace(de, "-ms-") : e;
        }
        var ge = function (e) {
          return null == e || !1 === e || "" === e;
        };
        function ye(e, t, r, n) {
          if (Array.isArray(e)) {
            for (var i, o = [], s = 0, a = e.length; s < a; s += 1)
              "" !== (i = ye(e[s], t, r, n)) &&
                (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
            return o;
          }
          return ge(e)
            ? ""
            : w(e)
            ? "." + e.styledComponentId
            : v(e)
            ? "function" != typeof (u = e) ||
              (u.prototype && u.prototype.isReactComponent) ||
              !t
              ? e
              : ye(e(t), t, r, n)
            : e instanceof ce
            ? r
              ? (e.inject(r, n), e.getName(n))
              : e
            : g(e)
            ? (function e(t, r) {
                var n,
                  i,
                  o = [];
                for (var s in t)
                  t.hasOwnProperty(s) &&
                    !ge(t[s]) &&
                    (g(t[s])
                      ? o.push.apply(o, e(t[s], s))
                      : v(t[s])
                      ? o.push(pe(s) + ":", t[s], ";")
                      : o.push(
                          pe(s) +
                            ": " +
                            ((n = s),
                            (null == (i = t[s]) ||
                            "boolean" == typeof i ||
                            "" === i
                              ? ""
                              : "number" != typeof i || 0 === i || n in c.a
                              ? String(i).trim()
                              : i + "px") + ";")
                        ));
                return r ? [r + " {"].concat(o, ["}"]) : o;
              })(e)
            : e.toString();
          var u;
        }
        function me(e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
          return v(e) || g(e)
            ? ye(p(y, [e].concat(r)))
            : 0 === r.length && 1 === e.length && "string" == typeof e[0]
            ? e
            : ye(p(e, r));
        }
        new Set();
        var ve = function (e, t, r) {
            return (
              void 0 === r && (r = m),
              (e.theme !== r.theme && e.theme) || t || r.theme
            );
          },
          be = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
          we = /(^-|-$)/g;
        function Se(e) {
          return e.replace(be, "-").replace(we, "");
        }
        var _e = function (e) {
          return K($(e) >>> 0);
        };
        function Ae(e) {
          return "string" == typeof e && !0;
        }
        var Ce = function (e) {
            return (
              "function" == typeof e ||
              ("object" == typeof e && null !== e && !Array.isArray(e))
            );
          },
          Oe = function (e) {
            return (
              "__proto__" !== e && "constructor" !== e && "prototype" !== e
            );
          };
        function Ee(e, t, r) {
          var n = e[r];
          Ce(t) && Ce(n) ? ke(n, t) : (e[r] = t);
        }
        function ke(e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
          for (var i = 0, o = r; i < o.length; i++) {
            var s = o[i];
            if (Ce(s)) for (var a in s) Oe(a) && Ee(e, s[a], a);
          }
          return e;
        }
        var Pe = o.a.createContext();
        Pe.Consumer;
        var xe = {};
        function Ie(e, t, r) {
          var n = w(e),
            s = !Ae(e),
            a = t.attrs,
            u = void 0 === a ? y : a,
            c = t.componentId,
            l =
              void 0 === c
                ? (function (e, t) {
                    var r = "string" != typeof e ? "sc" : Se(e);
                    xe[r] = (xe[r] || 0) + 1;
                    var n = r + "-" + _e("5.3.0" + r + xe[r]);
                    return t ? t + "-" + n : n;
                  })(t.displayName, t.parentComponentId)
                : c,
            p = t.displayName,
            g =
              void 0 === p
                ? (function (e) {
                    return Ae(e) ? "styled." + e : "Styled(" + b(e) + ")";
                  })(e)
                : p,
            S =
              t.displayName && t.componentId
                ? Se(t.displayName) + "-" + t.componentId
                : t.componentId || l,
            _ =
              n && e.attrs
                ? Array.prototype.concat(e.attrs, u).filter(Boolean)
                : u,
            A = t.shouldForwardProp;
          n &&
            e.shouldForwardProp &&
            (A = t.shouldForwardProp
              ? function (r, n, i) {
                  return (
                    e.shouldForwardProp(r, n, i) && t.shouldForwardProp(r, n, i)
                  );
                }
              : e.shouldForwardProp);
          var C,
            O = new X(r, S, n ? e.componentStyle : void 0),
            E = O.isStatic && 0 === u.length,
            k = function (e, t) {
              return (function (e, t, r, n) {
                var o = e.attrs,
                  s = e.componentStyle,
                  a = e.defaultProps,
                  u = e.foldedComponentIds,
                  c = e.shouldForwardProp,
                  l = e.styledComponentId,
                  d = e.target,
                  p = (function (e, t, r) {
                    void 0 === e && (e = m);
                    var n = h({}, t, { theme: e }),
                      i = {};
                    return (
                      r.forEach(function (e) {
                        var t,
                          r,
                          o,
                          s = e;
                        for (t in (v(s) && (s = s(n)), s))
                          n[t] = i[t] =
                            "className" === t
                              ? ((r = i[t]),
                                (o = s[t]),
                                r && o ? r + " " + o : r || o)
                              : s[t];
                      }),
                      [n, i]
                    );
                  })(ve(t, Object(i.useContext)(Pe), a) || m, t, o),
                  g = p[0],
                  y = p[1],
                  b = (function (e, t, r, n) {
                    var i = se(),
                      o = ae();
                    return t
                      ? e.generateAndInjectStyles(m, i, o)
                      : e.generateAndInjectStyles(r, i, o);
                  })(s, n, g),
                  w = r,
                  S = y.$as || t.$as || y.as || t.as || d,
                  _ = Ae(S),
                  A = y !== t ? h({}, t, {}, y) : t,
                  C = {};
                for (var O in A)
                  "$" !== O[0] &&
                    "as" !== O &&
                    ("forwardedAs" === O
                      ? (C.as = A[O])
                      : (c ? c(O, f.a, S) : !_ || Object(f.a)(O)) &&
                        (C[O] = A[O]));
                return (
                  t.style &&
                    y.style !== t.style &&
                    (C.style = h({}, t.style, {}, y.style)),
                  (C.className = Array.prototype
                    .concat(u, l, b !== l ? b : null, t.className, y.className)
                    .filter(Boolean)
                    .join(" ")),
                  (C.ref = w),
                  Object(i.createElement)(S, C)
                );
              })(C, e, t, E);
            };
          return (
            (k.displayName = g),
            ((C = o.a.forwardRef(k)).attrs = _),
            (C.componentStyle = O),
            (C.displayName = g),
            (C.shouldForwardProp = A),
            (C.foldedComponentIds = n
              ? Array.prototype.concat(
                  e.foldedComponentIds,
                  e.styledComponentId
                )
              : y),
            (C.styledComponentId = S),
            (C.target = n ? e.target : e),
            (C.withComponent = function (e) {
              var n = t.componentId,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    i = {},
                    o = Object.keys(e);
                  for (n = 0; n < o.length; n++)
                    (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                  return i;
                })(t, ["componentId"]),
                o = n && n + "-" + (Ae(e) ? e : Se(b(e)));
              return Ie(e, h({}, i, { attrs: _, componentId: o }), r);
            }),
            Object.defineProperty(C, "defaultProps", {
              get: function () {
                return this._foldedDefaultProps;
              },
              set: function (t) {
                this._foldedDefaultProps = n ? ke({}, e.defaultProps, t) : t;
              },
            }),
            (C.toString = function () {
              return "." + C.styledComponentId;
            }),
            s &&
              d()(C, e, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                shouldForwardProp: !0,
                styledComponentId: !0,
                target: !0,
                withComponent: !0,
              }),
            C
          );
        }
        var je = function (e) {
          return (function e(t, r, i) {
            if ((void 0 === i && (i = m), !Object(n.isValidElementType)(r)))
              return O(1, String(r));
            var o = function () {
              return t(r, i, me.apply(void 0, arguments));
            };
            return (
              (o.withConfig = function (n) {
                return e(t, r, h({}, i, {}, n));
              }),
              (o.attrs = function (n) {
                return e(
                  t,
                  r,
                  h({}, i, {
                    attrs: Array.prototype.concat(i.attrs, n).filter(Boolean),
                  })
                );
              }),
              o
            );
          })(Ie, e);
        };
        [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "textPath",
          "tspan",
        ].forEach(function (e) {
          je[e] = je(e);
        });
        var Te = (function () {
          function e(e, t) {
            (this.rules = e),
              (this.componentId = t),
              (this.isStatic = J(e)),
              V.registerId(this.componentId + 1);
          }
          var t = e.prototype;
          return (
            (t.createStyles = function (e, t, r, n) {
              var i = n(ye(this.rules, t, r, n).join(""), ""),
                o = this.componentId + e;
              r.insertRules(o, o, i);
            }),
            (t.removeStyles = function (e, t) {
              t.clearRules(this.componentId + e);
            }),
            (t.renderStyles = function (e, t, r, n) {
              e > 2 && V.registerId(this.componentId + e),
                this.removeStyles(e, r),
                this.createStyles(e, t, r, n);
            }),
            e
          );
        })();
        function Re(e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
          var s = me.apply(void 0, [e].concat(r)),
            a = "sc-global-" + _e(JSON.stringify(s)),
            u = new Te(s, a);
          function c(e) {
            var t = se(),
              r = ae(),
              n = Object(i.useContext)(Pe),
              o = Object(i.useRef)(t.allocateGSInstance(a)).current;
            return (
              Object(i.useLayoutEffect)(
                function () {
                  return (
                    f(o, e, t, n, r),
                    function () {
                      return u.removeStyles(o, t);
                    }
                  );
                },
                [o, e, t, n, r]
              ),
              null
            );
          }
          function f(e, t, r, n, i) {
            if (u.isStatic) u.renderStyles(e, C, r, i);
            else {
              var o = h({}, t, { theme: ve(t, n, c.defaultProps) });
              u.renderStyles(e, o, r, i);
            }
          }
          return o.a.memo(c);
        }
        function Me(e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
          var i = me.apply(void 0, [e].concat(r)).join(""),
            o = _e(i);
          return new ce(o, i);
        }
        !(function () {
          function e() {
            var e = this;
            (this._emitSheetCSS = function () {
              var t = e.instance.toString(),
                r = F();
              return (
                "<style " +
                [
                  r && 'nonce="' + r + '"',
                  S + '="true"',
                  'data-styled-version="5.3.0"',
                ]
                  .filter(Boolean)
                  .join(" ") +
                ">" +
                t +
                "</style>"
              );
            }),
              (this.getStyleTags = function () {
                return e.sealed ? O(2) : e._emitSheetCSS();
              }),
              (this.getStyleElement = function () {
                var t;
                if (e.sealed) return O(2);
                var r =
                    (((t = {})[S] = ""),
                    (t["data-styled-version"] = "5.3.0"),
                    (t.dangerouslySetInnerHTML = {
                      __html: e.instance.toString(),
                    }),
                    t),
                  n = F();
                return (
                  n && (r.nonce = n),
                  [o.a.createElement("style", h({}, r, { key: "sc-0-0" }))]
                );
              }),
              (this.seal = function () {
                e.sealed = !0;
              }),
              (this.instance = new V({ isServer: !0 })),
              (this.sealed = !1);
          }
          var t = e.prototype;
          (t.collectStyles = function (e) {
            return this.sealed
              ? O(2)
              : o.a.createElement(ue, { sheet: this.instance }, e);
          }),
            (t.interleaveWithNodeStream = function (e) {
              return O(3);
            });
        })();
        t.c = je;
      }).call(this, r("8oxB"));
    },
    vcXL: function (e, t, r) {
      "use strict";
      var n = self.fetch.bind(self);
      (e.exports = n), (e.exports.default = e.exports);
    },
    viNG: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WebCryptoSha256 = t.Ie11Sha256 = void 0),
        r("mrSG").__exportStar(r("ZIxo"), t);
      var n = r("dFEU");
      Object.defineProperty(t, "Ie11Sha256", {
        enumerable: !0,
        get: function () {
          return n.Sha256;
        },
      });
      var i = r("b4Ml");
      Object.defineProperty(t, "WebCryptoSha256", {
        enumerable: !0,
        get: function () {
          return i.Sha256;
        },
      });
    },
    wU8f: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var n = r("mrSG"),
        i = r("M39V"),
        o = r.n(i),
        s = function (e) {
          var t = e.serviceId,
            r = e.clientVersion;
          return function () {
            return Object(n.__awaiter)(void 0, void 0, void 0, function () {
              var e, i, s, a, u, c, f, l, d;
              return Object(n.__generator)(this, function (n) {
                return (
                  (e = (
                    null ===
                      (s =
                        null === window || void 0 === window
                          ? void 0
                          : window.navigator) || void 0 === s
                      ? void 0
                      : s.userAgent
                  )
                    ? o.a.parse(window.navigator.userAgent)
                    : void 0),
                  (i = [
                    ["aws-sdk-js", r],
                    [
                      "os/" +
                        ((null ===
                          (a = null === e || void 0 === e ? void 0 : e.os) ||
                        void 0 === a
                          ? void 0
                          : a.name) || "other"),
                      null ===
                        (u = null === e || void 0 === e ? void 0 : e.os) ||
                      void 0 === u
                        ? void 0
                        : u.version,
                    ],
                    ["lang/js"],
                    [
                      "md/browser",
                      (null !==
                        (f =
                          null ===
                            (c =
                              null === e || void 0 === e
                                ? void 0
                                : e.browser) || void 0 === c
                            ? void 0
                            : c.name) && void 0 !== f
                        ? f
                        : "unknown") +
                        "_" +
                        (null !==
                          (d =
                            null ===
                              (l =
                                null === e || void 0 === e
                                  ? void 0
                                  : e.browser) || void 0 === l
                              ? void 0
                              : l.version) && void 0 !== d
                          ? d
                          : "unknown"),
                    ],
                  ]),
                  t && i.push(["api/" + t, r]),
                  [2, i]
                );
              });
            });
          };
        };
    },
    xDdU: function (e, t, r) {
      var n,
        i,
        o = r("4fRq"),
        s = r("I2ZF"),
        a = 0,
        u = 0;
      e.exports = function (e, t, r) {
        var c = (t && r) || 0,
          f = t || [],
          l = (e = e || {}).node || n,
          d = void 0 !== e.clockseq ? e.clockseq : i;
        if (null == l || null == d) {
          var h = o();
          null == l && (l = n = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]),
            null == d && (d = i = 16383 & ((h[6] << 8) | h[7]));
        }
        var p = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
          g = void 0 !== e.nsecs ? e.nsecs : u + 1,
          y = p - a + (g - u) / 1e4;
        if (
          (y < 0 && void 0 === e.clockseq && (d = (d + 1) & 16383),
          (y < 0 || p > a) && void 0 === e.nsecs && (g = 0),
          g >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (a = p), (u = g), (i = d);
        var m = (1e4 * (268435455 & (p += 122192928e5)) + g) % 4294967296;
        (f[c++] = (m >>> 24) & 255),
          (f[c++] = (m >>> 16) & 255),
          (f[c++] = (m >>> 8) & 255),
          (f[c++] = 255 & m);
        var v = ((p / 4294967296) * 1e4) & 268435455;
        (f[c++] = (v >>> 8) & 255),
          (f[c++] = 255 & v),
          (f[c++] = ((v >>> 24) & 15) | 16),
          (f[c++] = (v >>> 16) & 255),
          (f[c++] = (d >>> 8) | 128),
          (f[c++] = 255 & d);
        for (var b = 0; b < 6; ++b) f[c + b] = l[b];
        return t || s(f);
      };
    },
    xk4V: function (e, t, r) {
      var n = r("4fRq"),
        i = r("I2ZF");
      e.exports = function (e, t, r) {
        var o = (t && r) || 0;
        "string" == typeof e &&
          ((t = "binary" === e ? new Array(16) : null), (e = null));
        var s = (e = e || {}).random || (e.rng || n)();
        if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t))
          for (var a = 0; a < 16; ++a) t[o + a] = s[a];
        return t || i(s);
      };
    },
    yGk4: function (e, t, r) {
      var n = r("Cwc5")(r("Kz5y"), "Set");
      e.exports = n;
    },
    za5s: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "get", function () {
          return c;
        }),
        r.d(t, "createParser", function () {
          return f;
        }),
        r.d(t, "createStyleFunction", function () {
          return h;
        }),
        r.d(t, "compose", function () {
          return g;
        }),
        r.d(t, "system", function () {
          return p;
        }),
        r.d(t, "margin", function () {
          return z;
        }),
        r.d(t, "padding", function () {
          return H;
        }),
        r.d(t, "space", function () {
          return q;
        }),
        r.d(t, "color", function () {
          return b;
        }),
        r.d(t, "layout", function () {
          return y;
        }),
        r.d(t, "typography", function () {
          return S;
        }),
        r.d(t, "flexbox", function () {
          return A;
        }),
        r.d(t, "border", function () {
          return x;
        }),
        r.d(t, "background", function () {
          return T;
        }),
        r.d(t, "position", function () {
          return U;
        }),
        r.d(t, "grid", function () {
          return E;
        }),
        r.d(t, "shadow", function () {
          return V;
        }),
        r.d(t, "boxShadow", function () {
          return W;
        }),
        r.d(t, "textShadow", function () {
          return W;
        }),
        r.d(t, "variant", function () {
          return K;
        }),
        r.d(t, "buttonStyle", function () {
          return Y;
        }),
        r.d(t, "textStyle", function () {
          return $;
        }),
        r.d(t, "colorStyle", function () {
          return J;
        }),
        r.d(t, "borders", function () {
          return I;
        }),
        r.d(t, "width", function () {
          return Z;
        }),
        r.d(t, "height", function () {
          return X;
        }),
        r.d(t, "minWidth", function () {
          return Q;
        }),
        r.d(t, "minHeight", function () {
          return ee;
        }),
        r.d(t, "maxWidth", function () {
          return te;
        }),
        r.d(t, "maxHeight", function () {
          return re;
        }),
        r.d(t, "size", function () {
          return ne;
        }),
        r.d(t, "verticalAlign", function () {
          return ie;
        }),
        r.d(t, "display", function () {
          return oe;
        }),
        r.d(t, "overflow", function () {
          return se;
        }),
        r.d(t, "overflowX", function () {
          return ae;
        }),
        r.d(t, "overflowY", function () {
          return ue;
        }),
        r.d(t, "opacity", function () {
          return ce;
        }),
        r.d(t, "fontSize", function () {
          return fe;
        }),
        r.d(t, "fontFamily", function () {
          return le;
        }),
        r.d(t, "fontWeight", function () {
          return de;
        }),
        r.d(t, "lineHeight", function () {
          return he;
        }),
        r.d(t, "textAlign", function () {
          return pe;
        }),
        r.d(t, "fontStyle", function () {
          return ge;
        }),
        r.d(t, "letterSpacing", function () {
          return ye;
        }),
        r.d(t, "alignItems", function () {
          return me;
        }),
        r.d(t, "alignContent", function () {
          return ve;
        }),
        r.d(t, "justifyItems", function () {
          return be;
        }),
        r.d(t, "justifyContent", function () {
          return we;
        }),
        r.d(t, "flexWrap", function () {
          return Se;
        }),
        r.d(t, "flexDirection", function () {
          return _e;
        }),
        r.d(t, "flex", function () {
          return Ae;
        }),
        r.d(t, "flexGrow", function () {
          return Ce;
        }),
        r.d(t, "flexShrink", function () {
          return Oe;
        }),
        r.d(t, "flexBasis", function () {
          return Ee;
        }),
        r.d(t, "justifySelf", function () {
          return ke;
        }),
        r.d(t, "alignSelf", function () {
          return Pe;
        }),
        r.d(t, "order", function () {
          return xe;
        }),
        r.d(t, "gridGap", function () {
          return Ie;
        }),
        r.d(t, "gridColumnGap", function () {
          return je;
        }),
        r.d(t, "gridRowGap", function () {
          return Te;
        }),
        r.d(t, "gridColumn", function () {
          return Re;
        }),
        r.d(t, "gridRow", function () {
          return Me;
        }),
        r.d(t, "gridAutoFlow", function () {
          return Ue;
        }),
        r.d(t, "gridAutoColumns", function () {
          return De;
        }),
        r.d(t, "gridAutoRows", function () {
          return Fe;
        }),
        r.d(t, "gridTemplateColumns", function () {
          return Ne;
        }),
        r.d(t, "gridTemplateRows", function () {
          return Be;
        }),
        r.d(t, "gridTemplateAreas", function () {
          return Le;
        }),
        r.d(t, "gridArea", function () {
          return ze;
        }),
        r.d(t, "borderWidth", function () {
          return He;
        }),
        r.d(t, "borderStyle", function () {
          return qe;
        }),
        r.d(t, "borderColor", function () {
          return Ve;
        }),
        r.d(t, "borderTop", function () {
          return We;
        }),
        r.d(t, "borderRight", function () {
          return Ge;
        }),
        r.d(t, "borderBottom", function () {
          return Ke;
        }),
        r.d(t, "borderLeft", function () {
          return Ye;
        }),
        r.d(t, "borderRadius", function () {
          return $e;
        }),
        r.d(t, "backgroundImage", function () {
          return Je;
        }),
        r.d(t, "backgroundSize", function () {
          return Ze;
        }),
        r.d(t, "backgroundPosition", function () {
          return Xe;
        }),
        r.d(t, "backgroundRepeat", function () {
          return Qe;
        }),
        r.d(t, "zIndex", function () {
          return et;
        }),
        r.d(t, "top", function () {
          return tt;
        }),
        r.d(t, "right", function () {
          return rt;
        }),
        r.d(t, "bottom", function () {
          return nt;
        }),
        r.d(t, "left", function () {
          return it;
        }),
        r.d(t, "style", function () {
          return ot;
        });
      var n = r("Qetd"),
        i = r.n(n),
        o = function (e, t) {
          var r = i()({}, e, t);
          for (var n in e) {
            var o;
            e[n] &&
              "object" === typeof t[n] &&
              i()(r, (((o = {})[n] = i()(e[n], t[n])), o));
          }
          return r;
        },
        s = {
          breakpoints: [40, 52, 64].map(function (e) {
            return e + "em";
          }),
        },
        a = function (e) {
          return "@media screen and (min-width: " + e + ")";
        },
        u = function (e, t) {
          return c(t, e, e);
        },
        c = function (e, t, r, n, i) {
          for (t = t && t.split ? t.split(".") : [t], n = 0; n < t.length; n++)
            e = e ? e[t[n]] : i;
          return e === i ? r : e;
        },
        f = function e(t) {
          var r = {},
            n = function (e) {
              var n = {},
                u = !1,
                f = e.theme && e.theme.disableStyledSystemCache;
              for (var h in e)
                if (t[h]) {
                  var p = t[h],
                    g = e[h],
                    y = c(e.theme, p.scale, p.defaults);
                  if ("object" !== typeof g) i()(n, p(g, y, e));
                  else {
                    if (
                      ((r.breakpoints =
                        (!f && r.breakpoints) ||
                        c(e.theme, "breakpoints", s.breakpoints)),
                      Array.isArray(g))
                    ) {
                      (r.media =
                        (!f && r.media) || [null].concat(r.breakpoints.map(a))),
                        (n = o(n, l(r.media, p, y, g, e)));
                      continue;
                    }
                    null !== g &&
                      ((n = o(n, d(r.breakpoints, p, y, g, e))), (u = !0));
                  }
                }
              return (
                u &&
                  (n = (function (e) {
                    var t = {};
                    return (
                      Object.keys(e)
                        .sort(function (e, t) {
                          return e.localeCompare(t, void 0, {
                            numeric: !0,
                            sensitivity: "base",
                          });
                        })
                        .forEach(function (r) {
                          t[r] = e[r];
                        }),
                      t
                    );
                  })(n)),
                n
              );
            };
          (n.config = t), (n.propNames = Object.keys(t)), (n.cache = r);
          var u = Object.keys(t).filter(function (e) {
            return "config" !== e;
          });
          return (
            u.length > 1 &&
              u.forEach(function (r) {
                var i;
                n[r] = e((((i = {})[r] = t[r]), i));
              }),
            n
          );
        },
        l = function (e, t, r, n, o) {
          var s = {};
          return (
            n.slice(0, e.length).forEach(function (n, a) {
              var u,
                c = e[a],
                f = t(n, r, o);
              c ? i()(s, (((u = {})[c] = i()({}, s[c], f)), u)) : i()(s, f);
            }),
            s
          );
        },
        d = function (e, t, r, n, o) {
          var s = {};
          for (var u in n) {
            var c = e[u],
              f = t(n[u], r, o);
            if (c) {
              var l,
                d = a(c);
              i()(s, (((l = {})[d] = i()({}, s[d], f)), l));
            } else i()(s, f);
          }
          return s;
        },
        h = function (e) {
          var t = e.properties,
            r = e.property,
            n = e.scale,
            i = e.transform,
            o = void 0 === i ? u : i,
            s = e.defaultScale;
          t = t || [r];
          var a = function (e, r, n) {
            var i = {},
              s = o(e, r, n);
            if (null !== s)
              return (
                t.forEach(function (e) {
                  i[e] = s;
                }),
                i
              );
          };
          return (a.scale = n), (a.defaults = s), a;
        },
        p = function (e) {
          void 0 === e && (e = {});
          var t = {};
          return (
            Object.keys(e).forEach(function (r) {
              var n = e[r];
              t[r] =
                !0 !== n
                  ? "function" !== typeof n
                    ? h(n)
                    : n
                  : h({ property: r, scale: r });
            }),
            f(t)
          );
        },
        g = function () {
          for (
            var e = {}, t = arguments.length, r = new Array(t), n = 0;
            n < t;
            n++
          )
            r[n] = arguments[n];
          r.forEach(function (t) {
            t && t.config && i()(e, t.config);
          });
          var o = f(e);
          return o;
        },
        y = p({
          width: {
            property: "width",
            scale: "sizes",
            transform: function (e, t) {
              return c(
                t,
                e,
                !(function (e) {
                  return "number" === typeof e && !isNaN(e);
                })(e) || e > 1
                  ? e
                  : 100 * e + "%"
              );
            },
          },
          height: { property: "height", scale: "sizes" },
          minWidth: { property: "minWidth", scale: "sizes" },
          minHeight: { property: "minHeight", scale: "sizes" },
          maxWidth: { property: "maxWidth", scale: "sizes" },
          maxHeight: { property: "maxHeight", scale: "sizes" },
          size: { properties: ["width", "height"], scale: "sizes" },
          overflow: !0,
          overflowX: !0,
          overflowY: !0,
          display: !0,
          verticalAlign: !0,
        }),
        m = y,
        v = {
          color: { property: "color", scale: "colors" },
          backgroundColor: { property: "backgroundColor", scale: "colors" },
          opacity: !0,
        };
      v.bg = v.backgroundColor;
      var b = p(v),
        w = b,
        S = p({
          fontFamily: { property: "fontFamily", scale: "fonts" },
          fontSize: {
            property: "fontSize",
            scale: "fontSizes",
            defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
          },
          fontWeight: { property: "fontWeight", scale: "fontWeights" },
          lineHeight: { property: "lineHeight", scale: "lineHeights" },
          letterSpacing: { property: "letterSpacing", scale: "letterSpacings" },
          textAlign: !0,
          fontStyle: !0,
        }),
        _ = S,
        A = p({
          alignItems: !0,
          alignContent: !0,
          justifyItems: !0,
          justifyContent: !0,
          flexWrap: !0,
          flexDirection: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          flexBasis: !0,
          justifySelf: !0,
          alignSelf: !0,
          order: !0,
        }),
        C = A,
        O = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
        E = p({
          gridGap: {
            property: "gridGap",
            scale: "space",
            defaultScale: O.space,
          },
          gridColumnGap: {
            property: "gridColumnGap",
            scale: "space",
            defaultScale: O.space,
          },
          gridRowGap: {
            property: "gridRowGap",
            scale: "space",
            defaultScale: O.space,
          },
          gridColumn: !0,
          gridRow: !0,
          gridAutoFlow: !0,
          gridAutoColumns: !0,
          gridAutoRows: !0,
          gridTemplateColumns: !0,
          gridTemplateRows: !0,
          gridTemplateAreas: !0,
          gridArea: !0,
        }),
        k = E,
        P = {
          border: { property: "border", scale: "borders" },
          borderWidth: { property: "borderWidth", scale: "borderWidths" },
          borderStyle: { property: "borderStyle", scale: "borderStyles" },
          borderColor: { property: "borderColor", scale: "colors" },
          borderRadius: { property: "borderRadius", scale: "radii" },
          borderTop: { property: "borderTop", scale: "borders" },
          borderTopLeftRadius: {
            property: "borderTopLeftRadius",
            scale: "radii",
          },
          borderTopRightRadius: {
            property: "borderTopRightRadius",
            scale: "radii",
          },
          borderRight: { property: "borderRight", scale: "borders" },
          borderBottom: { property: "borderBottom", scale: "borders" },
          borderBottomLeftRadius: {
            property: "borderBottomLeftRadius",
            scale: "radii",
          },
          borderBottomRightRadius: {
            property: "borderBottomRightRadius",
            scale: "radii",
          },
          borderLeft: { property: "borderLeft", scale: "borders" },
          borderX: {
            properties: ["borderLeft", "borderRight"],
            scale: "borders",
          },
          borderY: {
            properties: ["borderTop", "borderBottom"],
            scale: "borders",
          },
          borderTopWidth: { property: "borderTopWidth", scale: "borderWidths" },
          borderTopColor: { property: "borderTopColor", scale: "colors" },
          borderTopStyle: { property: "borderTopStyle", scale: "borderStyles" },
        };
      (P.borderTopLeftRadius = {
        property: "borderTopLeftRadius",
        scale: "radii",
      }),
        (P.borderTopRightRadius = {
          property: "borderTopRightRadius",
          scale: "radii",
        }),
        (P.borderBottomWidth = {
          property: "borderBottomWidth",
          scale: "borderWidths",
        }),
        (P.borderBottomColor = {
          property: "borderBottomColor",
          scale: "colors",
        }),
        (P.borderBottomStyle = {
          property: "borderBottomStyle",
          scale: "borderStyles",
        }),
        (P.borderBottomLeftRadius = {
          property: "borderBottomLeftRadius",
          scale: "radii",
        }),
        (P.borderBottomRightRadius = {
          property: "borderBottomRightRadius",
          scale: "radii",
        }),
        (P.borderLeftWidth = {
          property: "borderLeftWidth",
          scale: "borderWidths",
        }),
        (P.borderLeftColor = { property: "borderLeftColor", scale: "colors" }),
        (P.borderLeftStyle = {
          property: "borderLeftStyle",
          scale: "borderStyles",
        }),
        (P.borderRightWidth = {
          property: "borderRightWidth",
          scale: "borderWidths",
        }),
        (P.borderRightColor = {
          property: "borderRightColor",
          scale: "colors",
        }),
        (P.borderRightStyle = {
          property: "borderRightStyle",
          scale: "borderStyles",
        });
      var x = p(P),
        I = x,
        j = {
          background: !0,
          backgroundImage: !0,
          backgroundSize: !0,
          backgroundPosition: !0,
          backgroundRepeat: !0,
        };
      (j.bgImage = j.backgroundImage),
        (j.bgSize = j.backgroundSize),
        (j.bgPosition = j.backgroundPosition),
        (j.bgRepeat = j.backgroundRepeat);
      var T = p(j),
        R = T,
        M = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
        U = p({
          position: !0,
          zIndex: { property: "zIndex", scale: "zIndices" },
          top: { property: "top", scale: "space", defaultScale: M.space },
          right: { property: "right", scale: "space", defaultScale: M.space },
          bottom: { property: "bottom", scale: "space", defaultScale: M.space },
          left: { property: "left", scale: "space", defaultScale: M.space },
        }),
        D = U,
        F = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
        N = function (e) {
          return "number" === typeof e && !isNaN(e);
        },
        B = function (e, t) {
          if (!N(e)) return c(t, e, e);
          var r = e < 0,
            n = Math.abs(e),
            i = c(t, n, n);
          return N(i) ? i * (r ? -1 : 1) : r ? "-" + i : i;
        },
        L = {};
      (L.margin = {
        margin: {
          property: "margin",
          scale: "space",
          transform: B,
          defaultScale: F.space,
        },
        marginTop: {
          property: "marginTop",
          scale: "space",
          transform: B,
          defaultScale: F.space,
        },
        marginRight: {
          property: "marginRight",
          scale: "space",
          transform: B,
          defaultScale: F.space,
        },
        marginBottom: {
          property: "marginBottom",
          scale: "space",
          transform: B,
          defaultScale: F.space,
        },
        marginLeft: {
          property: "marginLeft",
          scale: "space",
          transform: B,
          defaultScale: F.space,
        },
        marginX: {
          properties: ["marginLeft", "marginRight"],
          scale: "space",
          transform: B,
          defaultScale: F.space,
        },
        marginY: {
          properties: ["marginTop", "marginBottom"],
          scale: "space",
          transform: B,
          defaultScale: F.space,
        },
      }),
        (L.margin.m = L.margin.margin),
        (L.margin.mt = L.margin.marginTop),
        (L.margin.mr = L.margin.marginRight),
        (L.margin.mb = L.margin.marginBottom),
        (L.margin.ml = L.margin.marginLeft),
        (L.margin.mx = L.margin.marginX),
        (L.margin.my = L.margin.marginY),
        (L.padding = {
          padding: {
            property: "padding",
            scale: "space",
            defaultScale: F.space,
          },
          paddingTop: {
            property: "paddingTop",
            scale: "space",
            defaultScale: F.space,
          },
          paddingRight: {
            property: "paddingRight",
            scale: "space",
            defaultScale: F.space,
          },
          paddingBottom: {
            property: "paddingBottom",
            scale: "space",
            defaultScale: F.space,
          },
          paddingLeft: {
            property: "paddingLeft",
            scale: "space",
            defaultScale: F.space,
          },
          paddingX: {
            properties: ["paddingLeft", "paddingRight"],
            scale: "space",
            defaultScale: F.space,
          },
          paddingY: {
            properties: ["paddingTop", "paddingBottom"],
            scale: "space",
            defaultScale: F.space,
          },
        }),
        (L.padding.p = L.padding.padding),
        (L.padding.pt = L.padding.paddingTop),
        (L.padding.pr = L.padding.paddingRight),
        (L.padding.pb = L.padding.paddingBottom),
        (L.padding.pl = L.padding.paddingLeft),
        (L.padding.px = L.padding.paddingX),
        (L.padding.py = L.padding.paddingY);
      var z = p(L.margin),
        H = p(L.padding),
        q = g(z, H),
        V = p({
          boxShadow: { property: "boxShadow", scale: "shadows" },
          textShadow: { property: "textShadow", scale: "shadows" },
        }),
        W = V,
        G = r("OJSm"),
        K = function (e) {
          var t,
            r,
            n = e.scale,
            i = e.prop,
            o = void 0 === i ? "variant" : i,
            s = e.variants,
            a = void 0 === s ? {} : s,
            u = e.key;
          ((r = Object.keys(a).length
            ? function (e, t, r) {
                return Object(G.default)(c(t, e, null))(r.theme);
              }
            : function (e, t) {
                return c(t, e, null);
              }).scale = n || u),
            (r.defaults = a);
          var l = (((t = {})[o] = r), t);
          return f(l);
        },
        Y = K({ key: "buttons" }),
        $ = K({ key: "textStyles", prop: "textStyle" }),
        J = K({ key: "colorStyles", prop: "colors" }),
        Z = m.width,
        X = m.height,
        Q = m.minWidth,
        ee = m.minHeight,
        te = m.maxWidth,
        re = m.maxHeight,
        ne = m.size,
        ie = m.verticalAlign,
        oe = m.display,
        se = m.overflow,
        ae = m.overflowX,
        ue = m.overflowY,
        ce = w.opacity,
        fe = _.fontSize,
        le = _.fontFamily,
        de = _.fontWeight,
        he = _.lineHeight,
        pe = _.textAlign,
        ge = _.fontStyle,
        ye = _.letterSpacing,
        me = C.alignItems,
        ve = C.alignContent,
        be = C.justifyItems,
        we = C.justifyContent,
        Se = C.flexWrap,
        _e = C.flexDirection,
        Ae = C.flex,
        Ce = C.flexGrow,
        Oe = C.flexShrink,
        Ee = C.flexBasis,
        ke = C.justifySelf,
        Pe = C.alignSelf,
        xe = C.order,
        Ie = k.gridGap,
        je = k.gridColumnGap,
        Te = k.gridRowGap,
        Re = k.gridColumn,
        Me = k.gridRow,
        Ue = k.gridAutoFlow,
        De = k.gridAutoColumns,
        Fe = k.gridAutoRows,
        Ne = k.gridTemplateColumns,
        Be = k.gridTemplateRows,
        Le = k.gridTemplateAreas,
        ze = k.gridArea,
        He = I.borderWidth,
        qe = I.borderStyle,
        Ve = I.borderColor,
        We = I.borderTop,
        Ge = I.borderRight,
        Ke = I.borderBottom,
        Ye = I.borderLeft,
        $e = I.borderRadius,
        Je = R.backgroundImage,
        Ze = R.backgroundSize,
        Xe = R.backgroundPosition,
        Qe = R.backgroundRepeat,
        et = D.zIndex,
        tt = D.top,
        rt = D.right,
        nt = D.bottom,
        it = D.left,
        ot = function (e) {
          var t = e.prop,
            r = e.cssProperty,
            n = e.alias,
            i = e.key,
            o = e.transformValue,
            s = e.scale,
            a = e.properties,
            u = {};
          return (
            (u[t] = h({
              properties: a,
              property: r || t,
              scale: i,
              defaultScale: s,
              transform: o,
            })),
            n && (u[n] = u[t]),
            f(u)
          );
        };
    },
  },
]);
