function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
      E = C.document,
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.concat,
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.4.1",
      k = function k(e, t) {
    return new k.fn.init(e, t);
  },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function d(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  k.fn = k.prototype = {
    jquery: f,
    constructor: k,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return k.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(k.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, k.extend = k.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, k.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t) {
      b(e, {
        nonce: t && t.nonce
      });
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (d(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(p, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (d(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g.apply([], a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var h = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        k = "sizzle" + 1 * new Date(),
        m = n.document,
        S = 0,
        r = 0,
        p = ue(),
        x = ue(),
        N = ue(),
        A = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        F = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp($),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + $),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ne = function ne(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && U.test(t)) {
            (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;

            while (o--) {
              l[o] = "#" + s + " " + xe(l[o]);
            }

            c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace(B, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[k] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : m;
      return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        A(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = p[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [S, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
          return s[k] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [S, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(B, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = N[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
        }

        (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = S += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument === C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (S = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (S = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;

  var T = function T(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && k(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      N = k.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? k.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : k.filter(n, e, r);
  }

  k.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, k.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (k.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        k.find(e, i[t], n);
      }

      return 1 < r ? k.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
  }).prototype = k.fn, q = k(E);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  k.fn.extend({
    has: function has(e) {
      var t = k(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (k.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && k(e);
      if (!N.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), k.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return T(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return T(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return T(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return T(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return T(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return T(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
    }
  }, function (r, i) {
    k.fn[r] = function (e, t) {
      var n = k.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var R = /[^\x20\t\r\n\f]+/g;

  function M(e) {
    return e;
  }

  function I(e) {
    throw e;
  }

  function W(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  k.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
      n[t] = !0;
    }), n) : k.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          k.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return k.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = k.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < k.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, k.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return k.Deferred(function (r) {
            k.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return k.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? k.extend(e, a) : a;
        }
      },
          s = {};
      return k.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        W(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, k.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = k.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
  }

  k.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      k.readyException(e);
    }), this;
  }, k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]);
    }
  }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var _ = function _(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      _(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(k(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      z = /^-ms-/,
      U = /-([a-z])/g;

  function X(e, t) {
    return t.toUpperCase();
  }

  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }

  var G = function G(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Y() {
    this.expando = k.expando + Y.uid++;
  }

  Y.uid = 1, Y.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
        i[V(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t);
    }
  };
  var Q = new Y(),
      J = new Y(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;

  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      J.set(e, t, n);
    } else n = void 0;
    return n;
  }

  k.extend({
    hasData: function hasData(e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function data(e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      J.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Q.remove(e, t);
    }
  }), k.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
          }

          Q.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        J.set(this, n);
      }) : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          J.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        J.remove(this, e);
      });
    }
  }), k.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        k.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Q.get(e, n) || Q.access(e, n, {
        empty: k.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n]);
        })
      });
    }
  }), k.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = k.queue(this, t, n);
        k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        k.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
      re = ["Top", "Right", "Bottom", "Left"],
      ie = E.documentElement,
      oe = function oe(e) {
    return k.contains(e.ownerDocument, e);
  },
      ae = {
    composed: !0
  };

  ie.getRootNode && (oe = function oe(e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
  });

  var se = function se(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
  },
      ue = function ue(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    for (o in i = n.apply(e, r || []), t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function le(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return k.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, k.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ce = {};

  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  k.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        se(this) ? k(this).show() : k(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
  }

  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
  var me,
      xe,
      be = /<|&#?\w+;/;

  function we(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
  var Te = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ee = /^([^.]*)(?:\.(.+)|)/;

  function ke() {
    return !0;
  }

  function Se() {
    return !1;
  }

  function Ne(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ae(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ae(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return k().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
      k.event.add(this, t, i, r, n);
    });
  }

  function De(e, i, o) {
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Q.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Q.set(this, i, {
          value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }

  k.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.get(t);

      if (v) {
        n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(R) || [""]).length;

        while (l--) {
          d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && k.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.hasData(e) && Q.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;

        while (l--) {
          if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            k.event.remove(e, d + t[l], n, r, !0);
          }
        }

        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = k.event.fix(e),
          u = new Array(arguments.length),
          l = (Q.get(this, "events") || {})[s.type] || [],
          c = k.event.special[s.type] || {};

      for (u[0] = s, t = 1; t < arguments.length; t++) {
        u[t] = arguments[t];
      }

      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = k.event.handlers.call(this, s, l), t = 0;

        while ((i = a[t++]) && !s.isPropagationStopped()) {
          s.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) {
            s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, k.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, k.Event = function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
  }, k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, k.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, k.event.addProp), k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    k.event.special[e] = {
      setup: function setup() {
        return De(this, e, Ne), !1;
      },
      trigger: function trigger() {
        return De(this, e), !0;
      },
      delegateType: t
    };
  }), k.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    k.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), k.fn.extend({
    on: function on(e, t, n, r) {
      return Ae(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ae(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
        k.event.remove(this, e, n, t);
      });
    }
  });
  var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      qe = /<script|<style|<link/i,
      Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Oe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
  }

  function Pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Re(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Me(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
        for (n = 0, r = l[i].length; n < r; n++) {
          k.event.add(t, i, l[i][n]);
        }
      }
      J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
    }
  }

  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
    });

    if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) {
        u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }) : b(u.textContent.replace(He, ""), u, l));
      }
    }

    return n;
  }

  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  k.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = oe(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Me(o[r], a[r]);
      } else Me(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (G(n)) {
          if (t = n[Q.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            }
            n[Q.expando] = void 0;
          }

          n[J.expando] && (n[J.expando] = void 0);
        }
      }
    }
  }), k.fn.extend({
    detach: function detach(e) {
      return We(this, e, !0);
    },
    remove: function remove(e) {
      return We(this, e);
    },
    text: function text(e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Ie(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Ie(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Oe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return k.clone(this, e, t);
      });
    },
    html: function html(e) {
      return _(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = k.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Ie(this, arguments, function (e) {
        var t = this.parentNode;
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), k.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    k.fn[e] = function (e) {
      for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
      Fe = function Fe(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Be = new RegExp(re.join("|"), "i");

  function _e(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function ze(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (u) {
        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s = E.createElement("div"),
        u = E.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), a;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      }
    }));
  }();
  var Ue = ["Webkit", "Moz", "ms"],
      Xe = E.createElement("div").style,
      Ve = {};

  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return t || (e in Xe ? e : Ve[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Ue.length;

      while (n--) {
        if ((e = Ue[n] + t) in Xe) return e;
      }
    }(e) || e);
  }

  var Ye = /^(none|table(?!-c[ea]).+)/,
      Qe = /^--/,
      Je = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ke = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function tt(e, t, n) {
    var r = Fe(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
        o = i,
        a = _e(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }

  k.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = _e(e, "opacity");

            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = V(t),
            u = Qe.test(t),
            l = e.style;
        if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = V(t);
      return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), k.each(["height", "width"], function (e, u) {
    k.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
          return tt(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s);
      }
    };
  }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), k.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    k.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (k.cssHooks[i + o].set = Ze);
  }), k.fn.extend({
    css: function css(e, t) {
      return _(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Fe(e), i = t.length; a < i; a++) {
            o[t[a]] = k.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((k.Tween = nt).prototype = {
    constructor: nt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
    }
  }).init.prototype = nt.prototype, (nt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, k.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, k.fx = nt.prototype.init, k.fx.step = {};
  var rt,
      it,
      ot,
      at,
      st = /^(?:toggle|show|hide)$/,
      ut = /queueHooks$/;

  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick());
  }

  function ct() {
    return C.setTimeout(function () {
      rt = void 0;
    }), rt = Date.now();
  }

  function ft(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function pt(e, t, n) {
    for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function dt(o, e, t) {
    var n,
        a,
        r = 0,
        i = dt.prefilters.length,
        s = k.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: k.extend({}, e),
      opts: k.extend(!0, {
        specialEasing: {},
        easing: k.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: rt || ct(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  k.Animation = k.extend(dt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return le(n.elem, e, ne.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(R);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");

      for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], st.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || k.style(e, r);
        }
      }

      if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
          for (r in g || fe([e]), Q.remove(e, "fxshow"), d) {
            k.style(e, r, d[r]);
          }
        })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    }
  }), k.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? k.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
    }, r;
  }, k.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(se).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function a() {
        var e = dt(this, k.extend({}, t), o);
        (i || Q.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = k.timers,
            r = Q.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && ut.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || k.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Q.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = k.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), k.each(["toggle", "show", "hide"], function (e, r) {
    var i = k.fn[r];

    k.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
    };
  }), k.each({
    slideDown: ft("show"),
    slideUp: ft("hide"),
    slideToggle: ft("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    k.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), k.timers = [], k.fx.tick = function () {
    var e,
        t = 0,
        n = k.timers;

    for (rt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || k.fx.stop(), rt = void 0;
  }, k.fx.timer = function (e) {
    k.timers.push(e), k.fx.start();
  }, k.fx.interval = 13, k.fx.start = function () {
    it || (it = !0, lt());
  }, k.fx.stop = function () {
    it = null;
  }, k.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, k.fn.delay = function (r, e) {
    return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
  var ht,
      gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function attr(e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    }
  }), k.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(R);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ht = {
    set: function set(e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = gt[t] || k.find.attr;

    gt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r;
    };
  });
  var vt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;

  function mt(e) {
    return (e.match(R) || []).join(" ");
  }

  function xt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function bt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
  }

  k.fn.extend({
    prop: function prop(e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    }
  }), k.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = k.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (k.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    k.propFix[this.toLowerCase()] = this;
  }), k.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).addClass(t.call(this, e, xt(this)));
      });
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).removeClass(t.call(this, e, xt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = k(this), r = bt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var wt = /\r/g;
  k.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = k.find.attr(e, "value");
          return null != t ? t : mt(k.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = k(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), k.each(["radio", "checkbox"], function () {
    k.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
      }
    }, y.checkOn || (k.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var Tt = /^(?:focusinfocus|focusoutblur)$/,
      Ct = function Ct(e) {
    e.stopPropagation();
  };

  k.extend(k.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = k.extend(new k.Event(), n, {
        type: e,
        isSimulated: !0
      });
      k.event.trigger(r, null, t);
    }
  }), k.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0);
    }
  }), y.focusin || k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      k.event.simulate(r, e.target, k.event.fix(e));
    };

    k.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r);
        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r) - 1;
        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
      }
    };
  });
  var Et = C.location,
      kt = Date.now(),
      St = /\?/;

  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
  };

  var Nt = /\[\]$/,
      At = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      jt = /^(?:input|select|textarea|keygen)/i;

  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      qt(n + "[" + t + "]", e[t], r, i);
    }
  }

  k.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      qt(n, e[n], t, i);
    }
    return r.join("&");
  }, k.fn.extend({
    serialize: function serialize() {
      return k.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = k.prop(this, "elements");
        return e ? k.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = k(this).val();
        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(At, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(At, "\r\n")
        };
      }).get();
    }
  });
  var Lt = /%20/g,
      Ht = /#.*$/,
      Ot = /([?&])_=[^&]*/,
      Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Rt = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Ft = E.createElement("a");

  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(R) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function _t(t, i, o, a) {
    var s = {},
        u = t === Wt;

    function l(e) {
      var r;
      return s[e] = !0, k.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = k.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && k.extend(!0, e, r), e;
  }

  Ft.href = Et.href, k.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": k.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
    },
    ajaxPrefilter: Bt(It),
    ajaxTransport: Bt(Wt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Pt.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;

      for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return k.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return k.get(e, void 0, t, "script");
    }
  }), k.each(["get", "post"], function (e, i) {
    k[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, k.isPlainObject(e) && e));
    };
  }), k._evalUrl = function (e, t) {
    return k.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        k.globalEval(e, t);
      }
    });
  }, k.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = k(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        k(this).replaceWith(this.childNodes);
      }), this;
    }
  }), k.expr.pseudos.hidden = function (e) {
    return !k.expr.pseudos.visible(e);
  }, k.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, k.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Ut = {
    0: 200,
    1223: 204
  },
      Xt = k.ajaxSettings.xhr();
  y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || Xt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), k.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return k.globalEval(e), e;
      }
    }
  }), k.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), k.ajaxTransport("script", function (n) {
    var r, _i2;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = k("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i2 = function i(e) {
          r.remove(), _i2 = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i2 && _i2();
      }
    };
  });
  var Vt,
      Gt = [],
      Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return this[e] = !0, e;
    }
  }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || k.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r, i, o;
  }, k.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && k.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    k.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), k.expr.pseudos.animated = function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem;
    }).length;
  }, k.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, k.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - k.css(r, "marginTop", !0),
          left: t.left - i.left - k.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === k.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || ie;
      });
    }
  }), k.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    k.fn[t] = function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), k.each(["top", "left"], function (e, n) {
    k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
      if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t;
    });
  }), k.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    k.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      k.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    k.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), k.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), k.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), k.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || k.guid++, i;
  }, k.holdReady = function (e) {
    e ? k.readyWait++ : k.ready(!0);
  }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
    var t = k.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return k;
  });
  var Qt = C.jQuery,
      Jt = C.$;
  return k.noConflict = function (e) {
    return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
  }, e || (C.jQuery = C.$ = k), k;
});
/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery);
}(this, function (e, p) {
  "use strict";

  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  function s(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }

  function t(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, i);
    }

    return n;
  }

  function l(o) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2 ? t(Object(r), !0).forEach(function (e) {
        var t, n, i;
        t = o, i = r[n = e], n in t ? Object.defineProperty(t, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = i;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function (e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
      });
    }

    return o;
  }

  p = p && p.hasOwnProperty("default") ? p["default"] : p;
  var n = "transitionend";

  function o(e) {
    var t = this,
        n = !1;
    return p(this).one(m.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || m.triggerTransitionEnd(t);
    }, e), this;
  }

  var m = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function getUID(e) {
      for (; e += ~~(1e6 * Math.random()), document.getElementById(e);) {
        ;
      }

      return e;
    },
    getSelectorFromElement: function getSelectorFromElement(e) {
      var t = e.getAttribute("data-target");

      if (!t || "#" === t) {
        var n = e.getAttribute("href");
        t = n && "#" !== n ? n.trim() : "";
      }

      try {
        return document.querySelector(t) ? t : null;
      } catch (e) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(e) {
      if (!e) return 0;
      var t = p(e).css("transition-duration"),
          n = p(e).css("transition-delay"),
          i = parseFloat(t),
          o = parseFloat(n);
      return i || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0;
    },
    reflow: function reflow(e) {
      return e.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(e) {
      p(e).trigger(n);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(n);
    },
    isElement: function isElement(e) {
      return (e[0] || e).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(e, t, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = t[i],
              s = r && m.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }
      }

      var a;
    },
    findShadowRoot: function findShadowRoot(e) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? m.findShadowRoot(e.parentNode) : null;
      var t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    },
    jQueryDetection: function jQueryDetection() {
      if ("undefined" == typeof p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var e = p.fn.jquery.split(" ")[0].split(".");
      if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }
  };
  m.jQueryDetection(), p.fn.emulateTransitionEnd = o, p.event.special[m.TRANSITION_END] = {
    bindType: n,
    delegateType: n,
    handle: function handle(e) {
      if (p(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
    }
  };

  var r = "alert",
      a = "bs.alert",
      c = "." + a,
      h = p.fn[r],
      u = {
    CLOSE: "close" + c,
    CLOSED: "closed" + c,
    CLICK_DATA_API: "click" + c + ".data-api"
  },
      f = "alert",
      d = "fade",
      g = "show",
      _ = function () {
    function i(e) {
      this._element = e;
    }

    var e = i.prototype;
    return e.close = function (e) {
      var t = this._element;
      e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
    }, e.dispose = function () {
      p.removeData(this._element, a), this._element = null;
    }, e._getRootElement = function (e) {
      var t = m.getSelectorFromElement(e),
          n = !1;
      return t && (n = document.querySelector(t)), n = n || p(e).closest("." + f)[0];
    }, e._triggerCloseEvent = function (e) {
      var t = p.Event(u.CLOSE);
      return p(e).trigger(t), t;
    }, e._removeElement = function (t) {
      var n = this;

      if (p(t).removeClass(g), p(t).hasClass(d)) {
        var e = m.getTransitionDurationFromElement(t);
        p(t).one(m.TRANSITION_END, function (e) {
          return n._destroyElement(t, e);
        }).emulateTransitionEnd(e);
      } else this._destroyElement(t);
    }, e._destroyElement = function (e) {
      p(e).detach().trigger(u.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = p(this),
            t = e.data(a);
        t || (t = new i(this), e.data(a, t)), "close" === n && t[n](this);
      });
    }, i._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }]), i;
  }();

  p(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _())), p.fn[r] = _._jQueryInterface, p.fn[r].Constructor = _, p.fn[r].noConflict = function () {
    return p.fn[r] = h, _._jQueryInterface;
  };

  var v = "button",
      y = "bs.button",
      E = "." + y,
      b = ".data-api",
      w = p.fn[v],
      T = "active",
      C = "btn",
      S = "focus",
      D = '[data-toggle^="button"]',
      I = '[data-toggle="buttons"]',
      A = '[data-toggle="button"]',
      O = '[data-toggle="buttons"] .btn',
      N = 'input:not([type="hidden"])',
      k = ".active",
      L = ".btn",
      P = {
    CLICK_DATA_API: "click" + E + b,
    FOCUS_BLUR_DATA_API: "focus" + E + b + " blur" + E + b,
    LOAD_DATA_API: "load" + E + b
  },
      x = function () {
    function n(e) {
      this._element = e;
    }

    var e = n.prototype;
    return e.toggle = function () {
      var e = !0,
          t = !0,
          n = p(this._element).closest(I)[0];

      if (n) {
        var i = this._element.querySelector(N);

        if (i) {
          if ("radio" === i.type) {
            if (i.checked && this._element.classList.contains(T)) e = !1;else {
              var o = n.querySelector(k);
              o && p(o).removeClass(T);
            }
          } else "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(T) && (e = !1) : e = !1;
          e && (i.checked = !this._element.classList.contains(T), p(i).trigger("change")), i.focus(), t = !1;
        }
      }

      this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), e && p(this._element).toggleClass(T));
    }, e.dispose = function () {
      p.removeData(this._element, y), this._element = null;
    }, n._jQueryInterface = function (t) {
      return this.each(function () {
        var e = p(this).data(y);
        e || (e = new n(this), p(this).data(y, e)), "toggle" === t && e[t]();
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }]), n;
  }();

  p(document).on(P.CLICK_DATA_API, D, function (e) {
    var t = e.target;
    if (p(t).hasClass(C) || (t = p(t).closest(L)[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();else {
      var n = t.querySelector(N);
      if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) return void e.preventDefault();

      x._jQueryInterface.call(p(t), "toggle");
    }
  }).on(P.FOCUS_BLUR_DATA_API, D, function (e) {
    var t = p(e.target).closest(L)[0];
    p(t).toggleClass(S, /^focus(in)?$/.test(e.type));
  }), p(window).on(P.LOAD_DATA_API, function () {
    for (var e = [].slice.call(document.querySelectorAll(O)), t = 0, n = e.length; t < n; t++) {
      var i = e[t],
          o = i.querySelector(N);
      o.checked || o.hasAttribute("checked") ? i.classList.add(T) : i.classList.remove(T);
    }

    for (var r = 0, s = (e = [].slice.call(document.querySelectorAll(A))).length; r < s; r++) {
      var a = e[r];
      "true" === a.getAttribute("aria-pressed") ? a.classList.add(T) : a.classList.remove(T);
    }
  }), p.fn[v] = x._jQueryInterface, p.fn[v].Constructor = x, p.fn[v].noConflict = function () {
    return p.fn[v] = w, x._jQueryInterface;
  };

  var j = "carousel",
      H = "bs.carousel",
      R = "." + H,
      F = ".data-api",
      M = p.fn[j],
      W = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      U = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      B = "next",
      q = "prev",
      K = "left",
      Q = "right",
      V = {
    SLIDE: "slide" + R,
    SLID: "slid" + R,
    KEYDOWN: "keydown" + R,
    MOUSEENTER: "mouseenter" + R,
    MOUSELEAVE: "mouseleave" + R,
    TOUCHSTART: "touchstart" + R,
    TOUCHMOVE: "touchmove" + R,
    TOUCHEND: "touchend" + R,
    POINTERDOWN: "pointerdown" + R,
    POINTERUP: "pointerup" + R,
    DRAG_START: "dragstart" + R,
    LOAD_DATA_API: "load" + R + F,
    CLICK_DATA_API: "click" + R + F
  },
      Y = "carousel",
      z = "active",
      X = "slide",
      G = "carousel-item-right",
      $ = "carousel-item-left",
      J = "carousel-item-next",
      Z = "carousel-item-prev",
      ee = "pointer-event",
      te = ".active",
      ne = ".active.carousel-item",
      ie = ".carousel-item",
      oe = ".carousel-item img",
      re = ".carousel-item-next, .carousel-item-prev",
      se = ".carousel-indicators",
      ae = "[data-slide], [data-slide-to]",
      le = '[data-ride="carousel"]',
      ce = {
    TOUCH: "touch",
    PEN: "pen"
  },
      he = function () {
    function r(e, t) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(se), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var e = r.prototype;
    return e.next = function () {
      this._isSliding || this._slide(B);
    }, e.nextWhenVisible = function () {
      !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next();
    }, e.prev = function () {
      this._isSliding || this._slide(q);
    }, e.pause = function (e) {
      e || (this._isPaused = !0), this._element.querySelector(re) && (m.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, e.cycle = function (e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, e.to = function (e) {
      var t = this;
      this._activeElement = this._element.querySelector(ne);

      var n = this._getItemIndex(this._activeElement);

      if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) p(this._element).one(V.SLID, function () {
        return t.to(e);
      });else {
        if (n === e) return this.pause(), void this.cycle();
        var i = n < e ? B : q;

        this._slide(i, this._items[e]);
      }
    }, e.dispose = function () {
      p(this._element).off(R), p.removeData(this._element, H), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, e._getConfig = function (e) {
      return e = l({}, W, {}, e), m.typeCheckConfig(j, e, U), e;
    }, e._handleSwipe = function () {
      var e = Math.abs(this.touchDeltaX);

      if (!(e <= 40)) {
        var t = e / this.touchDeltaX;
        (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next();
      }
    }, e._addEventListeners = function () {
      var t = this;
      this._config.keyboard && p(this._element).on(V.KEYDOWN, function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && p(this._element).on(V.MOUSEENTER, function (e) {
        return t.pause(e);
      }).on(V.MOUSELEAVE, function (e) {
        return t.cycle(e);
      }), this._config.touch && this._addTouchEventListeners();
    }, e._addTouchEventListeners = function () {
      var t = this;

      if (this._touchSupported) {
        var n = function n(e) {
          t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
        },
            i = function i(e) {
          t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
            return t.cycle(e);
          }, 500 + t._config.interval));
        };

        p(this._element.querySelectorAll(oe)).on(V.DRAG_START, function (e) {
          return e.preventDefault();
        }), this._pointerEvent ? (p(this._element).on(V.POINTERDOWN, function (e) {
          return n(e);
        }), p(this._element).on(V.POINTERUP, function (e) {
          return i(e);
        }), this._element.classList.add(ee)) : (p(this._element).on(V.TOUCHSTART, function (e) {
          return n(e);
        }), p(this._element).on(V.TOUCHMOVE, function (e) {
          return function (e) {
            e.originalEvent.touches && 1 < e.originalEvent.touches.length ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX;
          }(e);
        }), p(this._element).on(V.TOUCHEND, function (e) {
          return i(e);
        }));
      }
    }, e._keydown = function (e) {
      if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
        case 37:
          e.preventDefault(), this.prev();
          break;

        case 39:
          e.preventDefault(), this.next();
      }
    }, e._getItemIndex = function (e) {
      return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(ie)) : [], this._items.indexOf(e);
    }, e._getItemByDirection = function (e, t) {
      var n = e === B,
          i = e === q,
          o = this._getItemIndex(t),
          r = this._items.length - 1;

      if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
      var s = (o + (e === q ? -1 : 1)) % this._items.length;
      return -1 == s ? this._items[this._items.length - 1] : this._items[s];
    }, e._triggerSlideEvent = function (e, t) {
      var n = this._getItemIndex(e),
          i = this._getItemIndex(this._element.querySelector(ne)),
          o = p.Event(V.SLIDE, {
        relatedTarget: e,
        direction: t,
        from: i,
        to: n
      });

      return p(this._element).trigger(o), o;
    }, e._setActiveIndicatorElement = function (e) {
      if (this._indicatorsElement) {
        var t = [].slice.call(this._indicatorsElement.querySelectorAll(te));
        p(t).removeClass(z);

        var n = this._indicatorsElement.children[this._getItemIndex(e)];

        n && p(n).addClass(z);
      }
    }, e._slide = function (e, t) {
      var n,
          i,
          o,
          r = this,
          s = this._element.querySelector(ne),
          a = this._getItemIndex(s),
          l = t || s && this._getItemByDirection(e, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);

      if (o = e === B ? (n = $, i = J, K) : (n = G, i = Z, Q), l && p(l).hasClass(z)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
        var u = p.Event(V.SLID, {
          relatedTarget: l,
          direction: o,
          from: a,
          to: c
        });

        if (p(this._element).hasClass(X)) {
          p(l).addClass(i), m.reflow(l), p(s).addClass(n), p(l).addClass(n);
          var f = parseInt(l.getAttribute("data-interval"), 10);
          f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
          var d = m.getTransitionDurationFromElement(s);
          p(s).one(m.TRANSITION_END, function () {
            p(l).removeClass(n + " " + i).addClass(z), p(s).removeClass(z + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
              return p(r._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(d);
        } else p(s).removeClass(z), p(l).addClass(z), this._isSliding = !1, p(this._element).trigger(u);

        h && this.cycle();
      }
    }, r._jQueryInterface = function (i) {
      return this.each(function () {
        var e = p(this).data(H),
            t = l({}, W, {}, p(this).data());
        "object" == _typeof(i) && (t = l({}, t, {}, i));
        var n = "string" == typeof i ? i : t.slide;
        if (e || (e = new r(this, t), p(this).data(H, e)), "number" == typeof i) e.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        } else t.interval && t.ride && (e.pause(), e.cycle());
      });
    }, r._dataApiClickHandler = function (e) {
      var t = m.getSelectorFromElement(this);

      if (t) {
        var n = p(t)[0];

        if (n && p(n).hasClass(Y)) {
          var i = l({}, p(n).data(), {}, p(this).data()),
              o = this.getAttribute("data-slide-to");
          o && (i.interval = !1), r._jQueryInterface.call(p(n), i), o && p(n).data(H).to(o), e.preventDefault();
        }
      }
    }, s(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return W;
      }
    }]), r;
  }();

  p(document).on(V.CLICK_DATA_API, ae, he._dataApiClickHandler), p(window).on(V.LOAD_DATA_API, function () {
    for (var e = [].slice.call(document.querySelectorAll(le)), t = 0, n = e.length; t < n; t++) {
      var i = p(e[t]);

      he._jQueryInterface.call(i, i.data());
    }
  }), p.fn[j] = he._jQueryInterface, p.fn[j].Constructor = he, p.fn[j].noConflict = function () {
    return p.fn[j] = M, he._jQueryInterface;
  };

  var ue = "collapse",
      fe = "bs.collapse",
      de = "." + fe,
      pe = p.fn[ue],
      me = {
    toggle: !0,
    parent: ""
  },
      ge = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      _e = {
    SHOW: "show" + de,
    SHOWN: "shown" + de,
    HIDE: "hide" + de,
    HIDDEN: "hidden" + de,
    CLICK_DATA_API: "click" + de + ".data-api"
  },
      ve = "show",
      ye = "collapse",
      Ee = "collapsing",
      be = "collapsed",
      we = "width",
      Te = "height",
      Ce = ".show, .collapsing",
      Se = '[data-toggle="collapse"]',
      De = function () {
    function a(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(Se)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = m.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
          return e === t;
        });
        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var e = a.prototype;
    return e.toggle = function () {
      p(this._element).hasClass(ve) ? this.hide() : this.show();
    }, e.show = function () {
      var e,
          t,
          n = this;

      if (!this._isTransitioning && !p(this._element).hasClass(ve) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(Ce)).filter(function (e) {
        return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(ye);
      })).length && (e = null), !(e && (t = p(e).not(this._selector).data(fe)) && t._isTransitioning))) {
        var i = p.Event(_e.SHOW);

        if (p(this._element).trigger(i), !i.isDefaultPrevented()) {
          e && (a._jQueryInterface.call(p(e).not(this._selector), "hide"), t || p(e).data(fe, null));

          var o = this._getDimension();

          p(this._element).removeClass(ye).addClass(Ee), this._element.style[o] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(be).attr("aria-expanded", !0), this.setTransitioning(!0);
          var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
              s = m.getTransitionDurationFromElement(this._element);
          p(this._element).one(m.TRANSITION_END, function () {
            p(n._element).removeClass(Ee).addClass(ye).addClass(ve), n._element.style[o] = "", n.setTransitioning(!1), p(n._element).trigger(_e.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px";
        }
      }
    }, e.hide = function () {
      var e = this;

      if (!this._isTransitioning && p(this._element).hasClass(ve)) {
        var t = p.Event(_e.HIDE);

        if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", m.reflow(this._element), p(this._element).addClass(Ee).removeClass(ye).removeClass(ve);
          var i = this._triggerArray.length;
          if (0 < i) for (var o = 0; o < i; o++) {
            var r = this._triggerArray[o],
                s = m.getSelectorFromElement(r);
            if (null !== s) p([].slice.call(document.querySelectorAll(s))).hasClass(ve) || p(r).addClass(be).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";
          var a = m.getTransitionDurationFromElement(this._element);
          p(this._element).one(m.TRANSITION_END, function () {
            e.setTransitioning(!1), p(e._element).removeClass(Ee).addClass(ye).trigger(_e.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, e.setTransitioning = function (e) {
      this._isTransitioning = e;
    }, e.dispose = function () {
      p.removeData(this._element, fe), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, e._getConfig = function (e) {
      return (e = l({}, me, {}, e)).toggle = Boolean(e.toggle), m.typeCheckConfig(ue, e, ge), e;
    }, e._getDimension = function () {
      return p(this._element).hasClass(we) ? we : Te;
    }, e._getParent = function () {
      var e,
          n = this;
      m.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
      var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(e.querySelectorAll(t));
      return p(i).each(function (e, t) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]);
      }), e;
    }, e._addAriaAndCollapsedClass = function (e, t) {
      var n = p(e).hasClass(ve);
      t.length && p(t).toggleClass(be, !n).attr("aria-expanded", n);
    }, a._getTargetFromElement = function (e) {
      var t = m.getSelectorFromElement(e);
      return t ? document.querySelector(t) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var e = p(this),
            t = e.data(fe),
            n = l({}, me, {}, e.data(), {}, "object" == _typeof(i) && i ? i : {});

        if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(fe, t)), "string" == typeof i) {
          if ("undefined" == typeof t[i]) throw new TypeError('No method named "' + i + '"');
          t[i]();
        }
      });
    }, s(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return me;
      }
    }]), a;
  }();

  p(document).on(_e.CLICK_DATA_API, Se, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();
    var n = p(this),
        t = m.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(t));
    p(i).each(function () {
      var e = p(this),
          t = e.data(fe) ? "toggle" : n.data();

      De._jQueryInterface.call(e, t);
    });
  }), p.fn[ue] = De._jQueryInterface, p.fn[ue].Constructor = De, p.fn[ue].noConflict = function () {
    return p.fn[ue] = pe, De._jQueryInterface;
  };

  var Ie = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
      Ae = function () {
    for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) {
      if (Ie && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
    }

    return 0;
  }();

  var Oe = Ie && window.Promise ? function (e) {
    var t = !1;
    return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, Ae));
    };
  };

  function Ne(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }

  function ke(e, t) {
    if (1 !== e.nodeType) return [];
    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
    return t ? n[t] : n;
  }

  function Le(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }

  function Pe(e) {
    if (!e) return document.body;

    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;

      case "#document":
        return e.body;
    }

    var t = ke(e),
        n = t.overflow,
        i = t.overflowX,
        o = t.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? e : Pe(Le(e));
  }

  function xe(e) {
    return e && e.referenceNode ? e.referenceNode : e;
  }

  var je = Ie && !(!window.MSInputMethodContext || !document.documentMode),
      He = Ie && /MSIE 10/.test(navigator.userAgent);

  function Re(e) {
    return 11 === e ? je : 10 === e ? He : je || He;
  }

  function Fe(e) {
    if (!e) return document.documentElement;

    for (var t = Re(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }

    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === ke(n, "position") ? Fe(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }

  function Me(e) {
    return null !== e.parentNode ? Me(e.parentNode) : e;
  }

  function We(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        o = n ? t : e,
        r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s = r.commonAncestorContainer;
    if (e !== s && t !== s || i.contains(o)) return function (e) {
      var t = e.nodeName;
      return "BODY" !== t && ("HTML" === t || Fe(e.firstElementChild) === e);
    }(s) ? s : Fe(s);
    var a = Me(e);
    return a.host ? We(a.host, t) : We(e, Me(t).host);
  }

  function Ue(e, t) {
    var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
        i = e.nodeName;
    if ("BODY" !== i && "HTML" !== i) return e[n];
    var o = e.ownerDocument.documentElement;
    return (e.ownerDocument.scrollingElement || o)[n];
  }

  function Be(e, t) {
    var n = "x" === t ? "Left" : "Top",
        i = "Left" == n ? "Right" : "Bottom";
    return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10);
  }

  function qe(e, t, n, i) {
    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Re(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0);
  }

  function Ke(e) {
    var t = e.body,
        n = e.documentElement,
        i = Re(10) && getComputedStyle(n);
    return {
      height: qe("Height", t, n, i),
      width: qe("Width", t, n, i)
    };
  }

  var Qe = function Qe(e, t, n) {
    return t && Ve(e.prototype, t), n && Ve(e, n), e;
  };

  function Ve(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  function Ye(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  var ze = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
    }

    return e;
  };

  function Xe(e) {
    return ze({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function Ge(e) {
    var t = {};

    try {
      if (Re(10)) {
        t = e.getBoundingClientRect();
        var n = Ue(e, "top"),
            i = Ue(e, "left");
        t.top += n, t.left += i, t.bottom += n, t.right += i;
      } else t = e.getBoundingClientRect();
    } catch (e) {}

    var o = {
      left: t.left,
      top: t.top,
      width: t.right - t.left,
      height: t.bottom - t.top
    },
        r = "HTML" === e.nodeName ? Ke(e.ownerDocument) : {},
        s = r.width || e.clientWidth || o.width,
        a = r.height || e.clientHeight || o.height,
        l = e.offsetWidth - s,
        c = e.offsetHeight - a;

    if (l || c) {
      var h = ke(e);
      l -= Be(h, "x"), c -= Be(h, "y"), o.width -= l, o.height -= c;
    }

    return Xe(o);
  }

  function $e(e, t, n) {
    var i = 2 < arguments.length && void 0 !== n && n,
        o = Re(10),
        r = "HTML" === t.nodeName,
        s = Ge(e),
        a = Ge(t),
        l = Pe(e),
        c = ke(t),
        h = parseFloat(c.borderTopWidth, 10),
        u = parseFloat(c.borderLeftWidth, 10);
    i && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
    var f = Xe({
      top: s.top - a.top - h,
      left: s.left - a.left - u,
      width: s.width,
      height: s.height
    });

    if (f.marginTop = 0, f.marginLeft = 0, !o && r) {
      var d = parseFloat(c.marginTop, 10),
          p = parseFloat(c.marginLeft, 10);
      f.top -= h - d, f.bottom -= h - d, f.left -= u - p, f.right -= u - p, f.marginTop = d, f.marginLeft = p;
    }

    return (o && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (f = function (e, t, n) {
      var i = 2 < arguments.length && void 0 !== n && n,
          o = Ue(t, "top"),
          r = Ue(t, "left"),
          s = i ? -1 : 1;
      return e.top += o * s, e.bottom += o * s, e.left += r * s, e.right += r * s, e;
    }(f, t)), f;
  }

  function Je(e) {
    if (!e || !e.parentElement || Re()) return document.documentElement;

    for (var t = e.parentElement; t && "none" === ke(t, "transform");) {
      t = t.parentElement;
    }

    return t || document.documentElement;
  }

  function Ze(e, t, n, i, o) {
    var r = 4 < arguments.length && void 0 !== o && o,
        s = {
      top: 0,
      left: 0
    },
        a = r ? Je(e) : We(e, xe(t));
    if ("viewport" === i) s = function (e, t) {
      var n = 1 < arguments.length && void 0 !== t && t,
          i = e.ownerDocument.documentElement,
          o = $e(e, i),
          r = Math.max(i.clientWidth, window.innerWidth || 0),
          s = Math.max(i.clientHeight, window.innerHeight || 0),
          a = n ? 0 : Ue(i),
          l = n ? 0 : Ue(i, "left");
      return Xe({
        top: a - o.top + o.marginTop,
        left: l - o.left + o.marginLeft,
        width: r,
        height: s
      });
    }(a, r);else {
      var l = void 0;
      "scrollParent" === i ? "BODY" === (l = Pe(Le(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
      var c = $e(l, a, r);
      if ("HTML" !== l.nodeName || function e(t) {
        var n = t.nodeName;
        if ("BODY" === n || "HTML" === n) return !1;
        if ("fixed" === ke(t, "position")) return !0;
        var i = Le(t);
        return !!i && e(i);
      }(a)) s = c;else {
        var h = Ke(e.ownerDocument),
            u = h.height,
            f = h.width;
        s.top += c.top - c.marginTop, s.bottom = u + c.top, s.left += c.left - c.marginLeft, s.right = f + c.left;
      }
    }
    var d = "number" == typeof (n = n || 0);
    return s.left += d ? n : n.left || 0, s.top += d ? n : n.top || 0, s.right -= d ? n : n.right || 0, s.bottom -= d ? n : n.bottom || 0, s;
  }

  function et(e, t, i, n, o, r) {
    var s = 5 < arguments.length && void 0 !== r ? r : 0;
    if (-1 === e.indexOf("auto")) return e;
    var a = Ze(i, n, s, o),
        l = {
      top: {
        width: a.width,
        height: t.top - a.top
      },
      right: {
        width: a.right - t.right,
        height: a.height
      },
      bottom: {
        width: a.width,
        height: a.bottom - t.bottom
      },
      left: {
        width: t.left - a.left,
        height: a.height
      }
    },
        c = Object.keys(l).map(function (e) {
      return ze({
        key: e
      }, l[e], {
        area: function (e) {
          return e.width * e.height;
        }(l[e])
      });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        h = c.filter(function (e) {
      var t = e.width,
          n = e.height;
      return t >= i.clientWidth && n >= i.clientHeight;
    }),
        u = 0 < h.length ? h[0].key : c[0].key,
        f = e.split("-")[1];
    return u + (f ? "-" + f : "");
  }

  function tt(e, t, n, i) {
    var o = 3 < arguments.length && void 0 !== i ? i : null;
    return $e(n, o ? Je(t) : We(t, xe(n)), o);
  }

  function nt(e) {
    var t = e.ownerDocument.defaultView.getComputedStyle(e),
        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
        i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
    return {
      width: e.offsetWidth + i,
      height: e.offsetHeight + n
    };
  }

  function it(e) {
    var t = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }

  function ot(e, t, n) {
    n = n.split("-")[0];
    var i = nt(e),
        o = {
      width: i.width,
      height: i.height
    },
        r = -1 !== ["right", "left"].indexOf(n),
        s = r ? "top" : "left",
        a = r ? "left" : "top",
        l = r ? "height" : "width",
        c = r ? "width" : "height";
    return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[it(a)], o;
  }

  function rt(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }

  function st(e, n, t) {
    return (void 0 === t ? e : e.slice(0, function (e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n;
      });
      var i = rt(e, function (e) {
        return e[t] === n;
      });
      return e.indexOf(i);
    }(e, "name", t))).forEach(function (e) {
      e["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var t = e["function"] || e.fn;
      e.enabled && Ne(t) && (n.offsets.popper = Xe(n.offsets.popper), n.offsets.reference = Xe(n.offsets.reference), n = t(n, e));
    }), n;
  }

  function at(e, n) {
    return e.some(function (e) {
      var t = e.name;
      return e.enabled && t === n;
    });
  }

  function lt(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
      var o = t[i],
          r = o ? "" + o + n : e;
      if ("undefined" != typeof document.body.style[r]) return r;
    }

    return null;
  }

  function ct(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }

  function ht(e, t, n, i) {
    n.updateBound = i, ct(e).addEventListener("resize", n.updateBound, {
      passive: !0
    });
    var o = Pe(e);
    return function e(t, n, i, o) {
      var r = "BODY" === t.nodeName,
          s = r ? t.ownerDocument.defaultView : t;
      s.addEventListener(n, i, {
        passive: !0
      }), r || e(Pe(s.parentNode), n, i, o), o.push(s);
    }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
  }

  function ut() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function (e, t) {
      return ct(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
        e.removeEventListener("scroll", t.updateBound);
      }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
    }(this.reference, this.state));
  }

  function ft(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function dt(n, i) {
    Object.keys(i).forEach(function (e) {
      var t = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ft(i[e]) && (t = "px"), n.style[e] = i[e] + t;
    });
  }

  function pt(e, t) {
    function n(e) {
      return e;
    }

    var i = e.offsets,
        o = i.popper,
        r = i.reference,
        s = Math.round,
        a = Math.floor,
        l = s(r.width),
        c = s(o.width),
        h = -1 !== ["left", "right"].indexOf(e.placement),
        u = -1 !== e.placement.indexOf("-"),
        f = t ? h || u || l % 2 == c % 2 ? s : a : n,
        d = t ? s : n;
    return {
      left: f(l % 2 == 1 && c % 2 == 1 && !u && t ? o.left - 1 : o.left),
      top: d(o.top),
      bottom: d(o.bottom),
      right: f(o.right)
    };
  }

  var mt = Ie && /Firefox/i.test(navigator.userAgent);

  function gt(e, t, n) {
    var i = rt(e, function (e) {
      return e.name === t;
    }),
        o = !!i && e.some(function (e) {
      return e.name === n && e.enabled && e.order < i.order;
    });

    if (!o) {
      var r = "`" + t + "`",
          s = "`" + n + "`";
      console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
    }

    return o;
  }

  var _t = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      vt = _t.slice(3);

  function yt(e, t) {
    var n = 1 < arguments.length && void 0 !== t && t,
        i = vt.indexOf(e),
        o = vt.slice(i + 1).concat(vt.slice(0, i));
    return n ? o.reverse() : o;
  }

  var Et = "flip",
      bt = "clockwise",
      wt = "counterclockwise";

  function Tt(e, o, r, t) {
    var s = [0, 0],
        a = -1 !== ["right", "left"].indexOf(t),
        n = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        i = n.indexOf(rt(n, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/,
        c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
    return (c = c.map(function (e, t) {
      var n = (1 === t ? !a : a) ? "height" : "width",
          i = !1;
      return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return function (e, t, n, i) {
          var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              r = +o[1],
              s = o[2];
          if (!r) return e;
          if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
          var a = void 0;

          switch (s) {
            case "%p":
              a = n;
              break;

            case "%":
            case "%r":
            default:
              a = i;
          }

          return Xe(a)[t] / 100 * r;
        }(e, n, o, r);
      });
    })).forEach(function (n, i) {
      n.forEach(function (e, t) {
        ft(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1));
      });
    }), s;
  }

  var Ct = {
    placement: "bottom",
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = t.split("-")[1];

          if (i) {
            var o = e.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                h = {
              start: Ye({}, l, r[l]),
              end: Ye({}, l, r[l] + r[c] - s[c])
            };
            e.offsets.popper = ze({}, s, h[i]);
          }

          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function fn(e, t) {
          var n = t.offset,
              i = e.placement,
              o = e.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0;
          return l = ft(+n) ? [+n, 0] : Tt(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e;
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, i) {
          var t = i.boundariesElement || Fe(e.instance.popper);
          e.instance.reference === t && (t = Fe(t));
          var n = lt("transform"),
              o = e.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[n];
          o.top = "", o.left = "", o[n] = "";
          var l = Ze(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
          o.top = r, o.left = s, o[n] = a, i.boundaries = l;
          var c = i.priority,
              h = e.offsets.popper,
              u = {
            primary: function primary(e) {
              var t = h[e];
              return h[e] < l[e] && !i.escapeWithReference && (t = Math.max(h[e], l[e])), Ye({}, e, t);
            },
            secondary: function secondary(e) {
              var t = "right" === e ? "left" : "top",
                  n = h[t];
              return h[e] > l[e] && !i.escapeWithReference && (n = Math.min(h[t], l[e] - ("right" === e ? h.width : h.height))), Ye({}, t, n);
            }
          };
          return c.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
            h = ze({}, h, u[t](e));
          }), e.offsets.popper = h, e;
        },
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent"
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
              n = t.popper,
              i = t.reference,
              o = e.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
          return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, t) {
          var n;
          if (!gt(e.instance.modifiers, "arrow", "keepTogether")) return e;
          var i = t.element;

          if ("string" == typeof i) {
            if (!(i = e.instance.popper.querySelector(i))) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;

          var o = e.placement.split("-")[0],
              r = e.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              u = h.toLowerCase(),
              f = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = nt(i)[c];
          a[d] - p < s[u] && (e.offsets.popper[u] -= s[u] - (a[d] - p)), a[u] + p > s[d] && (e.offsets.popper[u] += a[u] + p - s[d]), e.offsets.popper = Xe(e.offsets.popper);

          var m = a[u] + a[c] / 2 - p / 2,
              g = ke(e.instance.popper),
              _ = parseFloat(g["margin" + h], 10),
              v = parseFloat(g["border" + h + "Width"], 10),
              y = m - e.offsets.popper[u] - _ - v;

          return y = Math.max(Math.min(s[c] - p, y), 0), e.arrowElement = i, e.offsets.arrow = (Ye(n = {}, u, Math.round(y)), Ye(n, f, ""), n), e;
        },
        element: "[x-arrow]"
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(m, g) {
          if (at(m.instance.modifiers, "inner")) return m;
          if (m.flipped && m.placement === m.originalPlacement) return m;

          var _ = Ze(m.instance.popper, m.instance.reference, g.padding, g.boundariesElement, m.positionFixed),
              v = m.placement.split("-")[0],
              y = it(v),
              E = m.placement.split("-")[1] || "",
              b = [];

          switch (g.behavior) {
            case Et:
              b = [v, y];
              break;

            case bt:
              b = yt(v);
              break;

            case wt:
              b = yt(v, !0);
              break;

            default:
              b = g.behavior;
          }

          return b.forEach(function (e, t) {
            if (v !== e || b.length === t + 1) return m;
            v = m.placement.split("-")[0], y = it(v);
            var n = m.offsets.popper,
                i = m.offsets.reference,
                o = Math.floor,
                r = "left" === v && o(n.right) > o(i.left) || "right" === v && o(n.left) < o(i.right) || "top" === v && o(n.bottom) > o(i.top) || "bottom" === v && o(n.top) < o(i.bottom),
                s = o(n.left) < o(_.left),
                a = o(n.right) > o(_.right),
                l = o(n.top) < o(_.top),
                c = o(n.bottom) > o(_.bottom),
                h = "left" === v && s || "right" === v && a || "top" === v && l || "bottom" === v && c,
                u = -1 !== ["top", "bottom"].indexOf(v),
                f = !!g.flipVariations && (u && "start" === E && s || u && "end" === E && a || !u && "start" === E && l || !u && "end" === E && c),
                d = !!g.flipVariationsByContent && (u && "start" === E && a || u && "end" === E && s || !u && "start" === E && c || !u && "end" === E && l),
                p = f || d;
            (r || h || p) && (m.flipped = !0, (r || h) && (v = b[t + 1]), p && (E = function (e) {
              return "end" === e ? "start" : "start" === e ? "end" : e;
            }(E)), m.placement = v + (E ? "-" + E : ""), m.offsets.popper = ze({}, m.offsets.popper, ot(m.instance.popper, m.offsets.reference, m.placement)), m = st(m.instance.modifiers, m, "flip"));
          }), m;
        },
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport",
        flipVariations: !1,
        flipVariationsByContent: !1
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = e.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
          return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = it(t), e.offsets.popper = Xe(o), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!gt(e.instance.modifiers, "hide", "preventOverflow")) return e;
          var t = e.offsets.reference,
              n = rt(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name;
          }).boundaries;

          if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
          }

          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var n = t.x,
              i = t.y,
              o = e.offsets.popper,
              r = rt(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;
          void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
          var s = void 0 !== r ? r : t.gpuAcceleration,
              a = Fe(e.instance.popper),
              l = Ge(a),
              c = {
            position: o.position
          },
              h = pt(e, window.devicePixelRatio < 2 || !mt),
              u = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              d = lt("transform"),
              p = void 0,
              m = void 0;
          if (m = "bottom" == u ? "HTML" === a.nodeName ? -a.clientHeight + h.bottom : -l.height + h.bottom : h.top, p = "right" == f ? "HTML" === a.nodeName ? -a.clientWidth + h.right : -l.width + h.right : h.left, s && d) c[d] = "translate3d(" + p + "px, " + m + "px, 0)", c[u] = 0, c[f] = 0, c.willChange = "transform";else {
            var g = "bottom" == u ? -1 : 1,
                _ = "right" == f ? -1 : 1;

            c[u] = m * g, c[f] = p * _, c.willChange = u + ", " + f;
          }
          var v = {
            "x-placement": e.placement
          };
          return e.attributes = ze({}, v, e.attributes), e.styles = ze({}, c, e.styles), e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: "bottom",
        y: "right"
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          return dt(e.instance.popper, e.styles), function (t, n) {
            Object.keys(n).forEach(function (e) {
              !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
            });
          }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && dt(e.arrowElement, e.arrowStyles), e;
        },
        onLoad: function onLoad(e, t, n, i, o) {
          var r = tt(o, t, e, n.positionFixed),
              s = et(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
          return t.setAttribute("x-placement", s), dt(t, {
            position: n.positionFixed ? "fixed" : "absolute"
          }), n;
        },
        gpuAcceleration: void 0
      }
    }
  },
      St = (Qe(Dt, [{
    key: "update",
    value: function value() {
      return function () {
        if (!this.state.isDestroyed) {
          var e = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {}
          };
          e.offsets.reference = tt(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = et(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = ot(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = st(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
        }
      }.call(this);
    }
  }, {
    key: "destroy",
    value: function value() {
      return function () {
        return this.state.isDestroyed = !0, at(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[lt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
      }.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function value() {
      return function () {
        this.state.eventsEnabled || (this.state = ht(this.reference, this.options, this.state, this.scheduleUpdate));
      }.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function value() {
      return ut.call(this);
    }
  }]), Dt);

  function Dt(e, t) {
    var n = this,
        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    !function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, Dt), this.scheduleUpdate = function () {
      return requestAnimationFrame(n.update);
    }, this.update = Oe(this.update.bind(this)), this.options = ze({}, Dt.Defaults, i), this.state = {
      isDestroyed: !1,
      isCreated: !1,
      scrollParents: []
    }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(ze({}, Dt.Defaults.modifiers, i.modifiers)).forEach(function (e) {
      n.options.modifiers[e] = ze({}, Dt.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {});
    }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
      return ze({
        name: e
      }, n.options.modifiers[e]);
    }).sort(function (e, t) {
      return e.order - t.order;
    }), this.modifiers.forEach(function (e) {
      e.enabled && Ne(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state);
    }), this.update();
    var o = this.options.eventsEnabled;
    o && this.enableEventListeners(), this.state.eventsEnabled = o;
  }

  St.Utils = ("undefined" != typeof window ? window : global).PopperUtils, St.placements = _t, St.Defaults = Ct;

  var It = "dropdown",
      At = "bs.dropdown",
      Ot = "." + At,
      Nt = ".data-api",
      kt = p.fn[It],
      Lt = new RegExp("38|40|27"),
      Pt = {
    HIDE: "hide" + Ot,
    HIDDEN: "hidden" + Ot,
    SHOW: "show" + Ot,
    SHOWN: "shown" + Ot,
    CLICK: "click" + Ot,
    CLICK_DATA_API: "click" + Ot + Nt,
    KEYDOWN_DATA_API: "keydown" + Ot + Nt,
    KEYUP_DATA_API: "keyup" + Ot + Nt
  },
      xt = "disabled",
      jt = "show",
      Ht = "dropup",
      Rt = "dropright",
      Ft = "dropleft",
      Mt = "dropdown-menu-right",
      Wt = "position-static",
      Ut = '[data-toggle="dropdown"]',
      Bt = ".dropdown form",
      qt = ".dropdown-menu",
      Kt = ".navbar-nav",
      Qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Vt = "top-start",
      Yt = "top-end",
      zt = "bottom-start",
      Xt = "bottom-end",
      Gt = "right-start",
      $t = "left-start",
      Jt = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null
  },
      Zt = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string",
    popperConfig: "(null|object)"
  },
      en = function () {
    function c(e, t) {
      this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var e = c.prototype;
    return e.toggle = function () {
      if (!this._element.disabled && !p(this._element).hasClass(xt)) {
        var e = p(this._menu).hasClass(jt);
        c._clearMenus(), e || this.show(!0);
      }
    }, e.show = function (e) {
      if (void 0 === e && (e = !1), !(this._element.disabled || p(this._element).hasClass(xt) || p(this._menu).hasClass(jt))) {
        var t = {
          relatedTarget: this._element
        },
            n = p.Event(Pt.SHOW, t),
            i = c._getParentFromElement(this._element);

        if (p(i).trigger(n), !n.isDefaultPrevented()) {
          if (!this._inNavbar && e) {
            if ("undefined" == typeof St) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
            var o = this._element;
            "parent" === this._config.reference ? o = i : m.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(i).addClass(Wt), this._popper = new St(o, this._menu, this._getPopperConfig());
          }

          "ontouchstart" in document.documentElement && 0 === p(i).closest(Kt).length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(jt), p(i).toggleClass(jt).trigger(p.Event(Pt.SHOWN, t));
        }
      }
    }, e.hide = function () {
      if (!this._element.disabled && !p(this._element).hasClass(xt) && p(this._menu).hasClass(jt)) {
        var e = {
          relatedTarget: this._element
        },
            t = p.Event(Pt.HIDE, e),
            n = c._getParentFromElement(this._element);

        p(n).trigger(t), t.isDefaultPrevented() || (this._popper && this._popper.destroy(), p(this._menu).toggleClass(jt), p(n).toggleClass(jt).trigger(p.Event(Pt.HIDDEN, e)));
      }
    }, e.dispose = function () {
      p.removeData(this._element, At), p(this._element).off(Ot), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, e.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, e._addEventListeners = function () {
      var t = this;
      p(this._element).on(Pt.CLICK, function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, e._getConfig = function (e) {
      return e = l({}, this.constructor.Default, {}, p(this._element).data(), {}, e), m.typeCheckConfig(It, e, this.constructor.DefaultType), e;
    }, e._getMenuElement = function () {
      if (!this._menu) {
        var e = c._getParentFromElement(this._element);

        e && (this._menu = e.querySelector(qt));
      }

      return this._menu;
    }, e._getPlacement = function () {
      var e = p(this._element.parentNode),
          t = zt;
      return e.hasClass(Ht) ? (t = Vt, p(this._menu).hasClass(Mt) && (t = Yt)) : e.hasClass(Rt) ? t = Gt : e.hasClass(Ft) ? t = $t : p(this._menu).hasClass(Mt) && (t = Xt), t;
    }, e._detectNavbar = function () {
      return 0 < p(this._element).closest(".navbar").length;
    }, e._getOffset = function () {
      var t = this,
          e = {};
      return "function" == typeof this._config.offset ? e.fn = function (e) {
        return e.offsets = l({}, e.offsets, {}, t._config.offset(e.offsets, t._element) || {}), e;
      } : e.offset = this._config.offset, e;
    }, e._getPopperConfig = function () {
      var e = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (e.modifiers.applyStyle = {
        enabled: !1
      }), l({}, e, {}, this._config.popperConfig);
    }, c._jQueryInterface = function (t) {
      return this.each(function () {
        var e = p(this).data(At);

        if (e || (e = new c(this, "object" == _typeof(t) ? t : null), p(this).data(At, e)), "string" == typeof t) {
          if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, c._clearMenus = function (e) {
      if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var t = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = t.length; n < i; n++) {
        var o = c._getParentFromElement(t[n]),
            r = p(t[n]).data(At),
            s = {
          relatedTarget: t[n]
        };

        if (e && "click" === e.type && (s.clickEvent = e), r) {
          var a = r._menu;

          if (p(o).hasClass(jt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(o, e.target))) {
            var l = p.Event(Pt.HIDE, s);
            p(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), t[n].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), p(a).removeClass(jt), p(o).removeClass(jt).trigger(p.Event(Pt.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (e) {
      var t,
          n = m.getSelectorFromElement(e);
      return n && (t = document.querySelector(n)), t || e.parentNode;
    }, c._dataApiKeydownHandler = function (e) {
      if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(qt).length)) : Lt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !p(this).hasClass(xt))) {
        var t = c._getParentFromElement(this),
            n = p(t).hasClass(jt);

        if (n || 27 !== e.which) if (n && (!n || 27 !== e.which && 32 !== e.which)) {
          var i = [].slice.call(t.querySelectorAll(Qt)).filter(function (e) {
            return p(e).is(":visible");
          });

          if (0 !== i.length) {
            var o = i.indexOf(e.target);
            38 === e.which && 0 < o && o--, 40 === e.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
          }
        } else {
          if (27 === e.which) {
            var r = t.querySelector(Ut);
            p(r).trigger("focus");
          }

          p(this).trigger("click");
        }
      }
    }, s(c, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Jt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Zt;
      }
    }]), c;
  }();

  p(document).on(Pt.KEYDOWN_DATA_API, Ut, en._dataApiKeydownHandler).on(Pt.KEYDOWN_DATA_API, qt, en._dataApiKeydownHandler).on(Pt.CLICK_DATA_API + " " + Pt.KEYUP_DATA_API, en._clearMenus).on(Pt.CLICK_DATA_API, Ut, function (e) {
    e.preventDefault(), e.stopPropagation(), en._jQueryInterface.call(p(this), "toggle");
  }).on(Pt.CLICK_DATA_API, Bt, function (e) {
    e.stopPropagation();
  }), p.fn[It] = en._jQueryInterface, p.fn[It].Constructor = en, p.fn[It].noConflict = function () {
    return p.fn[It] = kt, en._jQueryInterface;
  };

  var tn = "modal",
      nn = "bs.modal",
      on = "." + nn,
      rn = p.fn[tn],
      sn = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      an = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      ln = {
    HIDE: "hide" + on,
    HIDE_PREVENTED: "hidePrevented" + on,
    HIDDEN: "hidden" + on,
    SHOW: "show" + on,
    SHOWN: "shown" + on,
    FOCUSIN: "focusin" + on,
    RESIZE: "resize" + on,
    CLICK_DISMISS: "click.dismiss" + on,
    KEYDOWN_DISMISS: "keydown.dismiss" + on,
    MOUSEUP_DISMISS: "mouseup.dismiss" + on,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + on,
    CLICK_DATA_API: "click" + on + ".data-api"
  },
      cn = "modal-dialog-scrollable",
      hn = "modal-scrollbar-measure",
      un = "modal-backdrop",
      fn = "modal-open",
      dn = "fade",
      pn = "show",
      mn = "modal-static",
      gn = ".modal-dialog",
      _n = ".modal-body",
      vn = '[data-toggle="modal"]',
      yn = '[data-dismiss="modal"]',
      En = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      bn = ".sticky-top",
      wn = function () {
    function o(e, t) {
      this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(gn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    var e = o.prototype;
    return e.toggle = function (e) {
      return this._isShown ? this.hide() : this.show(e);
    }, e.show = function (e) {
      var t = this;

      if (!this._isShown && !this._isTransitioning) {
        p(this._element).hasClass(dn) && (this._isTransitioning = !0);
        var n = p.Event(ln.SHOW, {
          relatedTarget: e
        });
        p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(ln.CLICK_DISMISS, yn, function (e) {
          return t.hide(e);
        }), p(this._dialog).on(ln.MOUSEDOWN_DISMISS, function () {
          p(t._element).one(ln.MOUSEUP_DISMISS, function (e) {
            p(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return t._showElement(e);
        }));
      }
    }, e.hide = function (e) {
      var t = this;

      if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = p.Event(ln.HIDE);

        if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = p(this._element).hasClass(dn);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(ln.FOCUSIN), p(this._element).removeClass(pn), p(this._element).off(ln.CLICK_DISMISS), p(this._dialog).off(ln.MOUSEDOWN_DISMISS), i) {
            var o = m.getTransitionDurationFromElement(this._element);
            p(this._element).one(m.TRANSITION_END, function (e) {
              return t._hideModal(e);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, e.dispose = function () {
      [window, this._element, this._dialog].forEach(function (e) {
        return p(e).off(on);
      }), p(document).off(ln.FOCUSIN), p.removeData(this._element, nn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, e.handleUpdate = function () {
      this._adjustDialog();
    }, e._getConfig = function (e) {
      return e = l({}, sn, {}, e), m.typeCheckConfig(tn, e, an), e;
    }, e._triggerBackdropTransition = function () {
      var e = this;

      if ("static" === this._config.backdrop) {
        var t = p.Event(ln.HIDE_PREVENTED);
        if (p(this._element).trigger(t), t.defaultPrevented) return;

        this._element.classList.add(mn);

        var n = m.getTransitionDurationFromElement(this._element);
        p(this._element).one(m.TRANSITION_END, function () {
          e._element.classList.remove(mn);
        }).emulateTransitionEnd(n), this._element.focus();
      } else this.hide();
    }, e._showElement = function (e) {
      var t = this,
          n = p(this._element).hasClass(dn),
          i = this._dialog ? this._dialog.querySelector(_n) : null;
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass(cn) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && m.reflow(this._element), p(this._element).addClass(pn), this._config.focus && this._enforceFocus();

      function o() {
        t._config.focus && t._element.focus(), t._isTransitioning = !1, p(t._element).trigger(r);
      }

      var r = p.Event(ln.SHOWN, {
        relatedTarget: e
      });

      if (n) {
        var s = m.getTransitionDurationFromElement(this._dialog);
        p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(s);
      } else o();
    }, e._enforceFocus = function () {
      var t = this;
      p(document).off(ln.FOCUSIN).on(ln.FOCUSIN, function (e) {
        document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus();
      });
    }, e._setEscapeEvent = function () {
      var t = this;
      this._isShown && this._config.keyboard ? p(this._element).on(ln.KEYDOWN_DISMISS, function (e) {
        27 === e.which && t._triggerBackdropTransition();
      }) : this._isShown || p(this._element).off(ln.KEYDOWN_DISMISS);
    }, e._setResizeEvent = function () {
      var t = this;
      this._isShown ? p(window).on(ln.RESIZE, function (e) {
        return t.handleUpdate(e);
      }) : p(window).off(ln.RESIZE);
    }, e._hideModal = function () {
      var e = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        p(document.body).removeClass(fn), e._resetAdjustments(), e._resetScrollbar(), p(e._element).trigger(ln.HIDDEN);
      });
    }, e._removeBackdrop = function () {
      this._backdrop && (p(this._backdrop).remove(), this._backdrop = null);
    }, e._showBackdrop = function (e) {
      var t = this,
          n = p(this._element).hasClass(dn) ? dn : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = un, n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), p(this._element).on(ln.CLICK_DISMISS, function (e) {
          t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && t._triggerBackdropTransition();
        }), n && m.reflow(this._backdrop), p(this._backdrop).addClass(pn), !e) return;
        if (!n) return void e();
        var i = m.getTransitionDurationFromElement(this._backdrop);
        p(this._backdrop).one(m.TRANSITION_END, e).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        p(this._backdrop).removeClass(pn);

        var o = function o() {
          t._removeBackdrop(), e && e();
        };

        if (p(this._element).hasClass(dn)) {
          var r = m.getTransitionDurationFromElement(this._backdrop);
          p(this._backdrop).one(m.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();
      } else e && e();
    }, e._adjustDialog = function () {
      var e = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, e._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, e._checkScrollbar = function () {
      var e = document.body.getBoundingClientRect();
      this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, e._setScrollbar = function () {
      var o = this;

      if (this._isBodyOverflowing) {
        var e = [].slice.call(document.querySelectorAll(En)),
            t = [].slice.call(document.querySelectorAll(bn));
        p(e).each(function (e, t) {
          var n = t.style.paddingRight,
              i = p(t).css("padding-right");
          p(t).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
        }), p(t).each(function (e, t) {
          var n = t.style.marginRight,
              i = p(t).css("margin-right");
          p(t).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
        });
        var n = document.body.style.paddingRight,
            i = p(document.body).css("padding-right");
        p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }

      p(document.body).addClass(fn);
    }, e._resetScrollbar = function () {
      var e = [].slice.call(document.querySelectorAll(En));
      p(e).each(function (e, t) {
        var n = p(t).data("padding-right");
        p(t).removeData("padding-right"), t.style.paddingRight = n || "";
      });
      var t = [].slice.call(document.querySelectorAll("" + bn));
      p(t).each(function (e, t) {
        var n = p(t).data("margin-right");
        "undefined" != typeof n && p(t).css("margin-right", n).removeData("margin-right");
      });
      var n = p(document.body).data("padding-right");
      p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, e._getScrollbarWidth = function () {
      var e = document.createElement("div");
      e.className = hn, document.body.appendChild(e);
      var t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    }, o._jQueryInterface = function (n, i) {
      return this.each(function () {
        var e = p(this).data(nn),
            t = l({}, sn, {}, p(this).data(), {}, "object" == _typeof(n) && n ? n : {});

        if (e || (e = new o(this, t), p(this).data(nn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n](i);
        } else t.show && e.show(i);
      });
    }, s(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return sn;
      }
    }]), o;
  }();

  p(document).on(ln.CLICK_DATA_API, vn, function (e) {
    var t,
        n = this,
        i = m.getSelectorFromElement(this);
    i && (t = document.querySelector(i));
    var o = p(t).data(nn) ? "toggle" : l({}, p(t).data(), {}, p(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
    var r = p(t).one(ln.SHOW, function (e) {
      e.isDefaultPrevented() || r.one(ln.HIDDEN, function () {
        p(n).is(":visible") && n.focus();
      });
    });

    wn._jQueryInterface.call(p(t), o, this);
  }), p.fn[tn] = wn._jQueryInterface, p.fn[tn].Constructor = wn, p.fn[tn].noConflict = function () {
    return p.fn[tn] = rn, wn._jQueryInterface;
  };
  var Tn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Cn = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      Sn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Dn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function In(e, r, t) {
    if (0 === e.length) return e;
    if (t && "function" == typeof t) return t(e);

    for (var n = new window.DOMParser().parseFromString(e, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i = function i(e) {
      var t = a[e],
          n = t.nodeName.toLowerCase();
      if (-1 === s.indexOf(t.nodeName.toLowerCase())) return t.parentNode.removeChild(t), "continue";
      var i = [].slice.call(t.attributes),
          o = [].concat(r["*"] || [], r[n] || []);
      i.forEach(function (e) {
        !function (e, t) {
          var n = e.nodeName.toLowerCase();
          if (-1 !== t.indexOf(n)) return -1 === Tn.indexOf(n) || Boolean(e.nodeValue.match(Sn) || e.nodeValue.match(Dn));

          for (var i = t.filter(function (e) {
            return e instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }

          return !1;
        }(e, o) && t.removeAttribute(e.nodeName);
      });
    }, o = 0, l = a.length; o < l; o++) {
      i(o);
    }

    return n.body.innerHTML;
  }

  var An = "tooltip",
      On = "bs.tooltip",
      Nn = "." + On,
      kn = p.fn[An],
      Ln = "bs-tooltip",
      Pn = new RegExp("(^|\\s)" + Ln + "\\S+", "g"),
      xn = ["sanitize", "whiteList", "sanitizeFn"],
      jn = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object",
    popperConfig: "(null|object)"
  },
      Hn = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      Rn = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: Cn,
    popperConfig: null
  },
      Fn = "show",
      Mn = "out",
      Wn = {
    HIDE: "hide" + Nn,
    HIDDEN: "hidden" + Nn,
    SHOW: "show" + Nn,
    SHOWN: "shown" + Nn,
    INSERTED: "inserted" + Nn,
    CLICK: "click" + Nn,
    FOCUSIN: "focusin" + Nn,
    FOCUSOUT: "focusout" + Nn,
    MOUSEENTER: "mouseenter" + Nn,
    MOUSELEAVE: "mouseleave" + Nn
  },
      Un = "fade",
      Bn = "show",
      qn = ".tooltip-inner",
      Kn = ".arrow",
      Qn = "hover",
      Vn = "focus",
      Yn = "click",
      zn = "manual",
      Xn = function () {
    function i(e, t) {
      if ("undefined" == typeof St) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
    }

    var e = i.prototype;
    return e.enable = function () {
      this._isEnabled = !0;
    }, e.disable = function () {
      this._isEnabled = !1;
    }, e.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, e.toggle = function (e) {
      if (this._isEnabled) if (e) {
        var t = this.constructor.DATA_KEY,
            n = p(e.currentTarget).data(t);
        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (p(this.getTipElement()).hasClass(Bn)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, e.dispose = function () {
      clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, e.show = function () {
      var t = this;
      if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
      var e = p.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        p(this.element).trigger(e);
        var n = m.findShadowRoot(this.element),
            i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
        if (e.isDefaultPrevented() || !i) return;
        var o = this.getTipElement(),
            r = m.getUID(this.constructor.NAME);
        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && p(o).addClass(Un);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            a = this._getAttachment(s);

        this.addAttachmentClass(a);

        var l = this._getContainer();

        p(o).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(o).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new St(this.element, o, this._getPopperConfig(a)), p(o).addClass(Bn), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);

        var c = function c() {
          t.config.animation && t._fixTransition();
          var e = t._hoverState;
          t._hoverState = null, p(t.element).trigger(t.constructor.Event.SHOWN), e === Mn && t._leave(null, t);
        };

        if (p(this.tip).hasClass(Un)) {
          var h = m.getTransitionDurationFromElement(this.tip);
          p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h);
        } else c();
      }
    }, e.hide = function (e) {
      function t() {
        n._hoverState !== Fn && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), p(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
      }

      var n = this,
          i = this.getTipElement(),
          o = p.Event(this.constructor.Event.HIDE);

      if (p(this.element).trigger(o), !o.isDefaultPrevented()) {
        if (p(i).removeClass(Bn), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger[Yn] = !1, this._activeTrigger[Vn] = !1, this._activeTrigger[Qn] = !1, p(this.tip).hasClass(Un)) {
          var r = m.getTransitionDurationFromElement(i);
          p(i).one(m.TRANSITION_END, t).emulateTransitionEnd(r);
        } else t();

        this._hoverState = "";
      }
    }, e.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, e.isWithContent = function () {
      return Boolean(this.getTitle());
    }, e.addAttachmentClass = function (e) {
      p(this.getTipElement()).addClass(Ln + "-" + e);
    }, e.getTipElement = function () {
      return this.tip = this.tip || p(this.config.template)[0], this.tip;
    }, e.setContent = function () {
      var e = this.getTipElement();
      this.setElementContent(p(e.querySelectorAll(qn)), this.getTitle()), p(e).removeClass(Un + " " + Bn);
    }, e.setElementContent = function (e, t) {
      "object" != _typeof(t) || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = In(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text());
    }, e.getTitle = function () {
      var e = this.element.getAttribute("data-original-title");
      return e = e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title);
    }, e._getPopperConfig = function (e) {
      var t = this;
      return l({}, {
        placement: e,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Kn
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(e) {
          e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
        },
        onUpdate: function onUpdate(e) {
          return t._handlePopperPlacementChange(e);
        }
      }, {}, this.config.popperConfig);
    }, e._getOffset = function () {
      var t = this,
          e = {};
      return "function" == typeof this.config.offset ? e.fn = function (e) {
        return e.offsets = l({}, e.offsets, {}, t.config.offset(e.offsets, t.element) || {}), e;
      } : e.offset = this.config.offset, e;
    }, e._getContainer = function () {
      return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container);
    }, e._getAttachment = function (e) {
      return Hn[e.toUpperCase()];
    }, e._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (e) {
          return i.toggle(e);
        });else if (e !== zn) {
          var t = e === Qn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = e === Qn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          p(i.element).on(t, i.config.selector, function (e) {
            return i._enter(e);
          }).on(n, i.config.selector, function (e) {
            return i._leave(e);
          });
        }
      }), this._hideModalHandler = function () {
        i.element && i.hide();
      }, p(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, e._fixTitle = function () {
      var e = _typeof(this.element.getAttribute("data-original-title"));

      !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, e._enter = function (e, t) {
      var n = this.constructor.DATA_KEY;
      (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Vn : Qn] = !0), p(t.getTipElement()).hasClass(Bn) || t._hoverState === Fn ? t._hoverState = Fn : (clearTimeout(t._timeout), t._hoverState = Fn, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
        t._hoverState === Fn && t.show();
      }, t.config.delay.show) : t.show());
    }, e._leave = function (e, t) {
      var n = this.constructor.DATA_KEY;
      (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Vn : Qn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Mn, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
        t._hoverState === Mn && t.hide();
      }, t.config.delay.hide) : t.hide());
    }, e._isWithActiveTrigger = function () {
      for (var e in this._activeTrigger) {
        if (this._activeTrigger[e]) return !0;
      }

      return !1;
    }, e._getConfig = function (e) {
      var t = p(this.element).data();
      return Object.keys(t).forEach(function (e) {
        -1 !== xn.indexOf(e) && delete t[e];
      }), "number" == typeof (e = l({}, this.constructor.Default, {}, t, {}, "object" == _typeof(e) && e ? e : {})).delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), m.typeCheckConfig(An, e, this.constructor.DefaultType), e.sanitize && (e.template = In(e.template, e.whiteList, e.sanitizeFn)), e;
    }, e._getDelegateConfig = function () {
      var e = {};
      if (this.config) for (var t in this.config) {
        this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
      }
      return e;
    }, e._cleanTipClass = function () {
      var e = p(this.getTipElement()),
          t = e.attr("class").match(Pn);
      null !== t && t.length && e.removeClass(t.join(""));
    }, e._handlePopperPlacementChange = function (e) {
      var t = e.instance;
      this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
    }, e._fixTransition = function () {
      var e = this.getTipElement(),
          t = this.config.animation;
      null === e.getAttribute("x-placement") && (p(e).removeClass(Un), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = p(this).data(On),
            t = "object" == _typeof(n) && n;

        if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data(On, e)), "string" == typeof n)) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Rn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return An;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return On;
      }
    }, {
      key: "Event",
      get: function get() {
        return Wn;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Nn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return jn;
      }
    }]), i;
  }();

  p.fn[An] = Xn._jQueryInterface, p.fn[An].Constructor = Xn, p.fn[An].noConflict = function () {
    return p.fn[An] = kn, Xn._jQueryInterface;
  };

  var Gn = "popover",
      $n = "bs.popover",
      Jn = "." + $n,
      Zn = p.fn[Gn],
      ei = "bs-popover",
      ti = new RegExp("(^|\\s)" + ei + "\\S+", "g"),
      ni = l({}, Xn.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      ii = l({}, Xn.DefaultType, {
    content: "(string|element|function)"
  }),
      oi = "fade",
      ri = "show",
      si = ".popover-header",
      ai = ".popover-body",
      li = {
    HIDE: "hide" + Jn,
    HIDDEN: "hidden" + Jn,
    SHOW: "show" + Jn,
    SHOWN: "shown" + Jn,
    INSERTED: "inserted" + Jn,
    CLICK: "click" + Jn,
    FOCUSIN: "focusin" + Jn,
    FOCUSOUT: "focusout" + Jn,
    MOUSEENTER: "mouseenter" + Jn,
    MOUSELEAVE: "mouseleave" + Jn
  },
      ci = function (e) {
    function i() {
      return e.apply(this, arguments) || this;
    }

    !function (e, t) {
      e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t;
    }(i, e);
    var t = i.prototype;
    return t.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, t.addAttachmentClass = function (e) {
      p(this.getTipElement()).addClass(ei + "-" + e);
    }, t.getTipElement = function () {
      return this.tip = this.tip || p(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var e = p(this.getTipElement());
      this.setElementContent(e.find(si), this.getTitle());

      var t = this._getContent();

      "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(ai), t), e.removeClass(oi + " " + ri);
    }, t._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, t._cleanTipClass = function () {
      var e = p(this.getTipElement()),
          t = e.attr("class").match(ti);
      null !== t && 0 < t.length && e.removeClass(t.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = p(this).data($n),
            t = "object" == _typeof(n) ? n : null;

        if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data($n, e)), "string" == typeof n)) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return ni;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Gn;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return $n;
      }
    }, {
      key: "Event",
      get: function get() {
        return li;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Jn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ii;
      }
    }]), i;
  }(Xn);

  p.fn[Gn] = ci._jQueryInterface, p.fn[Gn].Constructor = ci, p.fn[Gn].noConflict = function () {
    return p.fn[Gn] = Zn, ci._jQueryInterface;
  };

  var hi = "scrollspy",
      ui = "bs.scrollspy",
      fi = "." + ui,
      di = p.fn[hi],
      pi = {
    offset: 10,
    method: "auto",
    target: ""
  },
      mi = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      gi = {
    ACTIVATE: "activate" + fi,
    SCROLL: "scroll" + fi,
    LOAD_DATA_API: "load" + fi + ".data-api"
  },
      _i = "dropdown-item",
      vi = "active",
      yi = '[data-spy="scroll"]',
      Ei = ".nav, .list-group",
      bi = ".nav-link",
      wi = ".nav-item",
      Ti = ".list-group-item",
      Ci = ".dropdown",
      Si = ".dropdown-item",
      Di = ".dropdown-toggle",
      Ii = "offset",
      Ai = "position",
      Oi = function () {
    function n(e, t) {
      var n = this;
      this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + bi + "," + this._config.target + " " + Ti + "," + this._config.target + " " + Si, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(gi.SCROLL, function (e) {
        return n._process(e);
      }), this.refresh(), this._process();
    }

    var e = n.prototype;
    return e.refresh = function () {
      var t = this,
          e = this._scrollElement === this._scrollElement.window ? Ii : Ai,
          o = "auto" === this._config.method ? e : this._config.method,
          r = o === Ai ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
        var t,
            n = m.getSelectorFromElement(e);

        if (n && (t = document.querySelector(n)), t) {
          var i = t.getBoundingClientRect();
          if (i.width || i.height) return [p(t)[o]().top + r, n];
        }

        return null;
      }).filter(function (e) {
        return e;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, e.dispose = function () {
      p.removeData(this._element, ui), p(this._scrollElement).off(fi), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, e._getConfig = function (e) {
      if ("string" != typeof (e = l({}, pi, {}, "object" == _typeof(e) && e ? e : {})).target) {
        var t = p(e.target).attr("id");
        t || (t = m.getUID(hi), p(e.target).attr("id", t)), e.target = "#" + t;
      }

      return m.typeCheckConfig(hi, e, mi), e;
    }, e._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, e._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, e._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, e._process = function () {
      var e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();

      if (this._scrollHeight !== t && this.refresh(), n <= e) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && e >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, e._activate = function (t) {
      this._activeTarget = t, this._clear();

      var e = this._selector.split(",").map(function (e) {
        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
      }),
          n = p([].slice.call(document.querySelectorAll(e.join(","))));

      n.hasClass(_i) ? (n.closest(Ci).find(Di).addClass(vi), n.addClass(vi)) : (n.addClass(vi), n.parents(Ei).prev(bi + ", " + Ti).addClass(vi), n.parents(Ei).prev(wi).children(bi).addClass(vi)), p(this._scrollElement).trigger(gi.ACTIVATE, {
        relatedTarget: t
      });
    }, e._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
        return e.classList.contains(vi);
      }).forEach(function (e) {
        return e.classList.remove(vi);
      });
    }, n._jQueryInterface = function (t) {
      return this.each(function () {
        var e = p(this).data(ui);

        if (e || (e = new n(this, "object" == _typeof(t) && t), p(this).data(ui, e)), "string" == typeof t) {
          if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return pi;
      }
    }]), n;
  }();

  p(window).on(gi.LOAD_DATA_API, function () {
    for (var e = [].slice.call(document.querySelectorAll(yi)), t = e.length; t--;) {
      var n = p(e[t]);

      Oi._jQueryInterface.call(n, n.data());
    }
  }), p.fn[hi] = Oi._jQueryInterface, p.fn[hi].Constructor = Oi, p.fn[hi].noConflict = function () {
    return p.fn[hi] = di, Oi._jQueryInterface;
  };

  var Ni = "bs.tab",
      ki = "." + Ni,
      Li = p.fn.tab,
      Pi = {
    HIDE: "hide" + ki,
    HIDDEN: "hidden" + ki,
    SHOW: "show" + ki,
    SHOWN: "shown" + ki,
    CLICK_DATA_API: "click" + ki + ".data-api"
  },
      xi = "dropdown-menu",
      ji = "active",
      Hi = "disabled",
      Ri = "fade",
      Fi = "show",
      Mi = ".dropdown",
      Wi = ".nav, .list-group",
      Ui = ".active",
      Bi = "> li > .active",
      qi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Ki = ".dropdown-toggle",
      Qi = "> .dropdown-menu .active",
      Vi = function () {
    function i(e) {
      this._element = e;
    }

    var e = i.prototype;
    return e.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(ji) || p(this._element).hasClass(Hi))) {
        var e,
            i,
            t = p(this._element).closest(Wi)[0],
            o = m.getSelectorFromElement(this._element);

        if (t) {
          var r = "UL" === t.nodeName || "OL" === t.nodeName ? Bi : Ui;
          i = (i = p.makeArray(p(t).find(r)))[i.length - 1];
        }

        var s = p.Event(Pi.HIDE, {
          relatedTarget: this._element
        }),
            a = p.Event(Pi.SHOW, {
          relatedTarget: i
        });

        if (i && p(i).trigger(s), p(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          o && (e = document.querySelector(o)), this._activate(this._element, t);

          var l = function l() {
            var e = p.Event(Pi.HIDDEN, {
              relatedTarget: n._element
            }),
                t = p.Event(Pi.SHOWN, {
              relatedTarget: i
            });
            p(i).trigger(e), p(n._element).trigger(t);
          };

          e ? this._activate(e, e.parentNode, l) : l();
        }
      }
    }, e.dispose = function () {
      p.removeData(this._element, Ni), this._element = null;
    }, e._activate = function (e, t, n) {
      function i() {
        return o._transitionComplete(e, r, n);
      }

      var o = this,
          r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children(Ui) : p(t).find(Bi))[0],
          s = n && r && p(r).hasClass(Ri);

      if (r && s) {
        var a = m.getTransitionDurationFromElement(r);
        p(r).removeClass(Fi).one(m.TRANSITION_END, i).emulateTransitionEnd(a);
      } else i();
    }, e._transitionComplete = function (e, t, n) {
      if (t) {
        p(t).removeClass(ji);
        var i = p(t.parentNode).find(Qi)[0];
        i && p(i).removeClass(ji), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
      }

      if (p(e).addClass(ji), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), m.reflow(e), e.classList.contains(Ri) && e.classList.add(Fi), e.parentNode && p(e.parentNode).hasClass(xi)) {
        var o = p(e).closest(Mi)[0];

        if (o) {
          var r = [].slice.call(o.querySelectorAll(Ki));
          p(r).addClass(ji);
        }

        e.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = p(this),
            t = e.data(Ni);

        if (t || (t = new i(this), e.data(Ni, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }]), i;
  }();

  p(document).on(Pi.CLICK_DATA_API, qi, function (e) {
    e.preventDefault(), Vi._jQueryInterface.call(p(this), "show");
  }), p.fn.tab = Vi._jQueryInterface, p.fn.tab.Constructor = Vi, p.fn.tab.noConflict = function () {
    return p.fn.tab = Li, Vi._jQueryInterface;
  };

  var Yi = "toast",
      zi = "bs.toast",
      Xi = "." + zi,
      Gi = p.fn[Yi],
      $i = {
    CLICK_DISMISS: "click.dismiss" + Xi,
    HIDE: "hide" + Xi,
    HIDDEN: "hidden" + Xi,
    SHOW: "show" + Xi,
    SHOWN: "shown" + Xi
  },
      Ji = "fade",
      Zi = "hide",
      eo = "show",
      to = "showing",
      no = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      io = {
    animation: !0,
    autohide: !0,
    delay: 500
  },
      oo = '[data-dismiss="toast"]',
      ro = function () {
    function i(e, t) {
      this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners();
    }

    var e = i.prototype;
    return e.show = function () {
      var e = this,
          t = p.Event($i.SHOW);

      if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
        this._config.animation && this._element.classList.add(Ji);

        var n = function n() {
          e._element.classList.remove(to), e._element.classList.add(eo), p(e._element).trigger($i.SHOWN), e._config.autohide && (e._timeout = setTimeout(function () {
            e.hide();
          }, e._config.delay));
        };

        if (this._element.classList.remove(Zi), m.reflow(this._element), this._element.classList.add(to), this._config.animation) {
          var i = m.getTransitionDurationFromElement(this._element);
          p(this._element).one(m.TRANSITION_END, n).emulateTransitionEnd(i);
        } else n();
      }
    }, e.hide = function () {
      if (this._element.classList.contains(eo)) {
        var e = p.Event($i.HIDE);
        p(this._element).trigger(e), e.isDefaultPrevented() || this._close();
      }
    }, e.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(eo) && this._element.classList.remove(eo), p(this._element).off($i.CLICK_DISMISS), p.removeData(this._element, zi), this._element = null, this._config = null;
    }, e._getConfig = function (e) {
      return e = l({}, io, {}, p(this._element).data(), {}, "object" == _typeof(e) && e ? e : {}), m.typeCheckConfig(Yi, e, this.constructor.DefaultType), e;
    }, e._setListeners = function () {
      var e = this;
      p(this._element).on($i.CLICK_DISMISS, oo, function () {
        return e.hide();
      });
    }, e._close = function () {
      function e() {
        t._element.classList.add(Zi), p(t._element).trigger($i.HIDDEN);
      }

      var t = this;

      if (this._element.classList.remove(eo), this._config.animation) {
        var n = m.getTransitionDurationFromElement(this._element);
        p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = p(this),
            t = e.data(zi);

        if (t || (t = new i(this, "object" == _typeof(n) && n), e.data(zi, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](this);
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return no;
      }
    }, {
      key: "Default",
      get: function get() {
        return io;
      }
    }]), i;
  }();

  p.fn[Yi] = ro._jQueryInterface, p.fn[Yi].Constructor = ro, p.fn[Yi].noConflict = function () {
    return p.fn[Yi] = Gi, ro._jQueryInterface;
  }, e.Alert = _, e.Button = x, e.Carousel = he, e.Collapse = De, e.Dropdown = en, e.Modal = wn, e.Popover = ci, e.Scrollspy = Oi, e.Tab = Vi, e.Toast = ro, e.Tooltip = Xn, e.Util = m, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});
/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * Compressed by http://jscompress.com/
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.11
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */

!function (a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], b) : b("undefined" != typeof exports ? require("jquery") : a.jQuery);
}(this, function (a) {
  "use strict";

  function h(b) {
    if (c.webkit && !b) return {
      height: 0,
      width: 0
    };

    if (!c.data.outer) {
      var d = {
        border: "none",
        "box-sizing": "content-box",
        height: "200px",
        margin: "0",
        padding: "0",
        width: "200px"
      };
      c.data.inner = a("<div>").css(a.extend({}, d)), c.data.outer = a("<div>").css(a.extend({
        left: "-1000px",
        overflow: "scroll",
        position: "absolute",
        top: "-1000px"
      }, d)).append(c.data.inner).appendTo("body");
    }

    return c.data.outer.scrollLeft(1e3).scrollTop(1e3), {
      height: Math.ceil(c.data.outer.offset().top - c.data.inner.offset().top || 0),
      width: Math.ceil(c.data.outer.offset().left - c.data.inner.offset().left || 0)
    };
  }

  function i() {
    var a = h(!0);
    return !(a.height || a.width);
  }

  function j(a) {
    var b = a.originalEvent;
    return (!b.axis || b.axis !== b.HORIZONTAL_AXIS) && !b.wheelDeltaX;
  }

  var b = !1,
      c = {
    data: {
      index: 0,
      name: "scrollbar"
    },
    firefox: /firefox/i.test(navigator.userAgent),
    macosx: /mac/i.test(navigator.platform),
    msedge: /edge\/\d+/i.test(navigator.userAgent),
    msie: /(msie|trident)/i.test(navigator.userAgent),
    mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
    overlay: null,
    scroll: null,
    scrolls: [],
    webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
  };
  c.scrolls.add = function (a) {
    this.remove(a).push(a);
  }, c.scrolls.remove = function (b) {
    for (; a.inArray(b, this) >= 0;) {
      this.splice(a.inArray(b, this), 1);
    }

    return this;
  };

  var d = {
    autoScrollSize: !0,
    autoUpdate: !0,
    debug: !1,
    disableBodyScroll: !1,
    duration: 200,
    ignoreMobile: !1,
    ignoreOverlay: !1,
    isRtl: !1,
    scrollStep: 30,
    showArrows: !1,
    stepScrolling: !0,
    scrollx: null,
    scrolly: null,
    onDestroy: null,
    onFallback: null,
    onInit: null,
    onScroll: null,
    onUpdate: null
  },
      e = function e(b) {
    c.scroll || (c.overlay = i(), c.scroll = h(), g(), a(window).resize(function () {
      var a = !1;

      if (c.scroll && (c.scroll.height || c.scroll.width)) {
        var b = h();
        b.height === c.scroll.height && b.width === c.scroll.width || (c.scroll = b, a = !0);
      }

      g(a);
    })), this.container = b, this.namespace = ".scrollbar_" + c.data.index++, this.options = a.extend({}, d, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, b.data(c.data.name, this), c.scrolls.add(this);
  };

  e.prototype = {
    destroy: function destroy() {
      if (this.wrapper) {
        this.container.removeData(c.data.name), c.scrolls.remove(this);
        var b = this.container.scrollLeft(),
            d = this.container.scrollTop();
        this.container.insertBefore(this.wrapper).css({
          height: "",
          margin: "",
          "max-height": ""
        }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(b).scrollTop(d), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").addBack().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").addBack().off(this.namespace), this.wrapper.remove(), a(document).add("body").off(this.namespace), a.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container]);
      }
    },
    init: function init(b) {
      var d = this,
          e = this.container,
          f = this.containerWrapper || e,
          g = this.namespace,
          h = a.extend(this.options, b || {}),
          i = {
        x: this.scrollx,
        y: this.scrolly
      },
          k = this.wrapper,
          l = {},
          m = {
        scrollLeft: e.scrollLeft(),
        scrollTop: e.scrollTop()
      };
      if (c.mobile && h.ignoreMobile || c.overlay && h.ignoreOverlay || c.macosx && !c.webkit) return a.isFunction(h.onFallback) && h.onFallback.apply(this, [e]), !1;
      if (k) l = {
        height: "auto",
        "margin-bottom": c.scroll.height * -1 + "px",
        "max-height": ""
      }, l[h.isRtl ? "margin-left" : "margin-right"] = c.scroll.width * -1 + "px", f.css(l);else {
        if (this.wrapper = k = a("<div>").addClass("scroll-wrapper").addClass(e.attr("class")).css("position", "absolute" === e.css("position") ? "absolute" : "relative").insertBefore(e).append(e), h.isRtl && k.addClass("scroll--rtl"), e.is("textarea") && (this.containerWrapper = f = a("<div>").insertBefore(e).append(e), k.addClass("scroll-textarea")), l = {
          height: "auto",
          "margin-bottom": c.scroll.height * -1 + "px",
          "max-height": ""
        }, l[h.isRtl ? "margin-left" : "margin-right"] = c.scroll.width * -1 + "px", f.addClass("scroll-content").css(l), e.on("scroll" + g, function (b) {
          var f = e.scrollLeft(),
              g = e.scrollTop();
          if (h.isRtl) switch (!0) {
            case c.firefox:
              f = Math.abs(f);

            case c.msedge || c.msie:
              f = e[0].scrollWidth - e[0].clientWidth - f;
          }
          a.isFunction(h.onScroll) && h.onScroll.call(d, {
            maxScroll: i.y.maxScrollOffset,
            scroll: g,
            size: i.y.size,
            visible: i.y.visible
          }, {
            maxScroll: i.x.maxScrollOffset,
            scroll: f,
            size: i.x.size,
            visible: i.x.visible
          }), i.x.isVisible && i.x.scroll.bar.css("left", f * i.x.kx + "px"), i.y.isVisible && i.y.scroll.bar.css("top", g * i.y.kx + "px");
        }), k.on("scroll" + g, function () {
          k.scrollTop(0).scrollLeft(0);
        }), h.disableBodyScroll) {
          var n = function n(a) {
            j(a) ? i.y.isVisible && i.y.mousewheel(a) : i.x.isVisible && i.x.mousewheel(a);
          };

          k.on("MozMousePixelScroll" + g, n), k.on("mousewheel" + g, n), c.mobile && k.on("touchstart" + g, function (b) {
            var c = b.originalEvent.touches && b.originalEvent.touches[0] || b,
                d = {
              pageX: c.pageX,
              pageY: c.pageY
            },
                f = {
              left: e.scrollLeft(),
              top: e.scrollTop()
            };
            a(document).on("touchmove" + g, function (a) {
              var b = a.originalEvent.targetTouches && a.originalEvent.targetTouches[0] || a;
              e.scrollLeft(f.left + d.pageX - b.pageX), e.scrollTop(f.top + d.pageY - b.pageY), a.preventDefault();
            }), a(document).on("touchend" + g, function () {
              a(document).off(g);
            });
          });
        }

        a.isFunction(h.onInit) && h.onInit.apply(this, [e]);
      }
      a.each(i, function (b, f) {
        var k = null,
            l = 1,
            m = "x" === b ? "scrollLeft" : "scrollTop",
            n = h.scrollStep,
            o = function o() {
          var a = e[m]();
          e[m](a + n), 1 == l && a + n >= p && (a = e[m]()), l == -1 && a + n <= p && (a = e[m]()), e[m]() == a && k && k();
        },
            p = 0;

        f.scroll || (f.scroll = d._getScroll(h["scroll" + b]).addClass("scroll-" + b), h.showArrows && f.scroll.addClass("scroll-element_arrows_visible"), f.mousewheel = function (a) {
          if (!f.isVisible || "x" === b && j(a)) return !0;
          if ("y" === b && !j(a)) return i.x.mousewheel(a), !0;
          var c = a.originalEvent.wheelDelta * -1 || a.originalEvent.detail,
              g = f.size - f.visible - f.offset;
          return c || ("x" === b && a.originalEvent.deltaX ? c = 40 * a.originalEvent.deltaX : "y" === b && a.originalEvent.deltaY && (c = 40 * a.originalEvent.deltaY)), (c > 0 && p < g || c < 0 && p > 0) && (p += c, p < 0 && (p = 0), p > g && (p = g), d.scrollTo = d.scrollTo || {}, d.scrollTo[m] = p, setTimeout(function () {
            d.scrollTo && (e.stop().animate(d.scrollTo, 240, "linear", function () {
              p = e[m]();
            }), d.scrollTo = null);
          }, 1)), a.preventDefault(), !1;
        }, f.scroll.on("MozMousePixelScroll" + g, f.mousewheel).on("mousewheel" + g, f.mousewheel).on("mouseenter" + g, function () {
          p = e[m]();
        }), f.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + g, function (g) {
          if (1 != g.which) return !0;
          l = 1;
          var i = {
            eventOffset: g["x" === b ? "pageX" : "pageY"],
            maxScrollValue: f.size - f.visible - f.offset,
            scrollbarOffset: f.scroll.bar.offset()["x" === b ? "left" : "top"],
            scrollbarSize: f.scroll.bar["x" === b ? "outerWidth" : "outerHeight"]()
          },
              j = 0,
              q = 0;

          if (a(this).hasClass("scroll-arrow")) {
            if (l = a(this).hasClass("scroll-arrow_more") ? 1 : -1, n = h.scrollStep * l, p = l > 0 ? i.maxScrollValue : 0, h.isRtl) switch (!0) {
              case c.firefox:
                p = l > 0 ? 0 : i.maxScrollValue * -1;
                break;

              case c.msie || c.msedge:
            }
          } else l = i.eventOffset > i.scrollbarOffset + i.scrollbarSize ? 1 : i.eventOffset < i.scrollbarOffset ? -1 : 0, "x" === b && h.isRtl && (c.msie || c.msedge) && (l *= -1), n = Math.round(.75 * f.visible) * l, p = i.eventOffset - i.scrollbarOffset - (h.stepScrolling ? 1 == l ? i.scrollbarSize : 0 : Math.round(i.scrollbarSize / 2)), p = e[m]() + p / f.kx;

          return d.scrollTo = d.scrollTo || {}, d.scrollTo[m] = h.stepScrolling ? e[m]() + n : p, h.stepScrolling && (k = function k() {
            p = e[m](), clearInterval(q), clearTimeout(j), j = 0, q = 0;
          }, j = setTimeout(function () {
            q = setInterval(o, 40);
          }, h.duration + 100)), setTimeout(function () {
            d.scrollTo && (e.animate(d.scrollTo, h.duration), d.scrollTo = null);
          }, 1), d._handleMouseDown(k, g);
        }), f.scroll.bar.on("mousedown" + g, function (i) {
          if (1 != i.which) return !0;
          var j = i["x" === b ? "pageX" : "pageY"],
              k = e[m]();
          return f.scroll.addClass("scroll-draggable"), a(document).on("mousemove" + g, function (a) {
            var d = parseInt((a["x" === b ? "pageX" : "pageY"] - j) / f.kx, 10);
            "x" === b && h.isRtl && (c.msie || c.msedge) && (d *= -1), e[m](k + d);
          }), d._handleMouseDown(function () {
            f.scroll.removeClass("scroll-draggable"), p = e[m]();
          }, i);
        }));
      }), a.each(i, function (a, b) {
        var c = "scroll-scroll" + a + "_visible",
            d = "x" == a ? i.y : i.x;
        b.scroll.removeClass(c), d.scroll.removeClass(c), f.removeClass(c);
      }), a.each(i, function (b, c) {
        a.extend(c, "x" == b ? {
          offset: parseInt(e.css("left"), 10) || 0,
          size: e.prop("scrollWidth"),
          visible: k.width()
        } : {
          offset: parseInt(e.css("top"), 10) || 0,
          size: e.prop("scrollHeight"),
          visible: k.height()
        });
      }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), a.isFunction(h.onUpdate) && h.onUpdate.apply(this, [e]), a.each(i, function (a, b) {
        var c = "x" === a ? "left" : "top",
            d = "x" === a ? "outerWidth" : "outerHeight",
            f = "x" === a ? "width" : "height",
            g = parseInt(e.css(c), 10) || 0,
            i = b.size,
            j = b.visible + g,
            k = b.scroll.size[d]() + (parseInt(b.scroll.size.css(c), 10) || 0);
        h.autoScrollSize && (b.scrollbarSize = parseInt(k * j / i, 10), b.scroll.bar.css(f, b.scrollbarSize + "px")), b.scrollbarSize = b.scroll.bar[d](), b.kx = (k - b.scrollbarSize) / (i - j) || 1, b.maxScrollOffset = i - j;
      }), e.scrollLeft(m.scrollLeft).scrollTop(m.scrollTop).trigger("scroll");
    },
    _getScroll: function _getScroll(b) {
      var c = {
        advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
        simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
      };
      return c[b] && (b = c[b]), b || (b = c.simple), b = "string" == typeof b ? a(b).appendTo(this.wrapper) : a(b), a.extend(b, {
        bar: b.find(".scroll-bar"),
        size: b.find(".scroll-element_size"),
        track: b.find(".scroll-element_track")
      }), b;
    },
    _handleMouseDown: function _handleMouseDown(b, c) {
      var d = this.namespace;
      return a(document).on("blur" + d, function () {
        a(document).add("body").off(d), b && b();
      }), a(document).on("dragstart" + d, function (a) {
        return a.preventDefault(), !1;
      }), a(document).on("mouseup" + d, function () {
        a(document).add("body").off(d), b && b();
      }), a("body").on("selectstart" + d, function (a) {
        return a.preventDefault(), !1;
      }), c && c.preventDefault(), !1;
    },
    _updateScroll: function _updateScroll(b, d) {
      var e = this.container,
          f = this.containerWrapper || e,
          g = "scroll-scroll" + b + "_visible",
          h = "x" === b ? this.scrolly : this.scrollx,
          i = parseInt(this.container.css("x" === b ? "left" : "top"), 10) || 0,
          j = this.wrapper,
          k = d.size,
          l = d.visible + i;
      d.isVisible = k - l > 1, d.isVisible ? (d.scroll.addClass(g), h.scroll.addClass(g), f.addClass(g)) : (d.scroll.removeClass(g), h.scroll.removeClass(g), f.removeClass(g)), "y" === b && (e.is("textarea") || k < l ? f.css({
        height: l + c.scroll.height + "px",
        "max-height": "none"
      }) : f.css({
        "max-height": l + c.scroll.height + "px"
      })), d.size == e.prop("scrollWidth") && h.size == e.prop("scrollHeight") && d.visible == j.width() && h.visible == j.height() && d.offset == (parseInt(e.css("left"), 10) || 0) && h.offset == (parseInt(e.css("top"), 10) || 0) || (a.extend(this.scrollx, {
        offset: parseInt(e.css("left"), 10) || 0,
        size: e.prop("scrollWidth"),
        visible: j.width()
      }), a.extend(this.scrolly, {
        offset: parseInt(e.css("top"), 10) || 0,
        size: this.container.prop("scrollHeight"),
        visible: j.height()
      }), this._updateScroll("x" === b ? "y" : "x", h));
    }
  };
  var f = e;
  a.fn.scrollbar = function (b, d) {
    return "string" != typeof b && (d = b, b = "init"), "undefined" == typeof d && (d = []), a.isArray(d) || (d = [d]), this.not("body, .scroll-wrapper").each(function () {
      var e = a(this),
          g = e.data(c.data.name);
      (g || "init" === b) && (g || (g = new f(e)), g[b] && g[b].apply(g, d));
    }), this;
  }, a.fn.scrollbar.options = d;

  var g = function () {
    var a = 0,
        d = 0;
    return function (e) {
      var f, h, i, j, k, l, m;

      for (f = 0; f < c.scrolls.length; f++) {
        j = c.scrolls[f], h = j.container, i = j.options, k = j.wrapper, l = j.scrollx, m = j.scrolly, (e || i.autoUpdate && k && k.is(":visible") && (h.prop("scrollWidth") != l.size || h.prop("scrollHeight") != m.size || k.width() != l.visible || k.height() != m.visible)) && (j.init(), i.debug && (window.console && console.log({
          scrollHeight: h.prop("scrollHeight") + ":" + j.scrolly.size,
          scrollWidth: h.prop("scrollWidth") + ":" + j.scrollx.size,
          visibleHeight: k.height() + ":" + j.scrolly.visible,
          visibleWidth: k.width() + ":" + j.scrollx.visible
        }, !0), d++));
      }

      b && d > 10 ? (window.console && console.log("Scroll updates exceed 10"), g = function g() {}) : (clearTimeout(a), a = setTimeout(g, 300));
    };
  }();

  window.angular && !function (a) {
    a.module("jQueryScrollbar", []).provider("jQueryScrollbar", function () {
      var b = d;
      return {
        setOptions: function setOptions(c) {
          a.extend(b, c);
        },
        $get: function $get() {
          return {
            options: a.copy(b)
          };
        }
      };
    }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function (a, b) {
      return {
        restrict: "AC",
        link: function link(c, d, e) {
          var f = b(e.jqueryScrollbar),
              g = f(c);
          d.scrollbar(g || a.options).on("$destroy", function () {
            d.scrollbar("destroy");
          });
        }
      };
    }]);
  }(window.angular);
});
/*!
 * Chart.js v2.9.3
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e(function () {
    try {
      return require("moment");
    } catch (t) {}
  }()) : "function" == typeof define && define.amd ? define(["require"], function (t) {
    return e(function () {
      try {
        return t("moment");
      } catch (t) {}
    }());
  }) : (t = t || self).Chart = e(t.moment);
}(this, function (t) {
  "use strict";

  t = t && t.hasOwnProperty("default") ? t["default"] : t;

  var e = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  },
      n = function (t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports;
  }(function (t) {
    var n = {};

    for (var i in e) {
      e.hasOwnProperty(i) && (n[e[i]] = i);
    }

    var a = t.exports = {
      rgb: {
        channels: 3,
        labels: "rgb"
      },
      hsl: {
        channels: 3,
        labels: "hsl"
      },
      hsv: {
        channels: 3,
        labels: "hsv"
      },
      hwb: {
        channels: 3,
        labels: "hwb"
      },
      cmyk: {
        channels: 4,
        labels: "cmyk"
      },
      xyz: {
        channels: 3,
        labels: "xyz"
      },
      lab: {
        channels: 3,
        labels: "lab"
      },
      lch: {
        channels: 3,
        labels: "lch"
      },
      hex: {
        channels: 1,
        labels: ["hex"]
      },
      keyword: {
        channels: 1,
        labels: ["keyword"]
      },
      ansi16: {
        channels: 1,
        labels: ["ansi16"]
      },
      ansi256: {
        channels: 1,
        labels: ["ansi256"]
      },
      hcg: {
        channels: 3,
        labels: ["h", "c", "g"]
      },
      apple: {
        channels: 3,
        labels: ["r16", "g16", "b16"]
      },
      gray: {
        channels: 1,
        labels: ["gray"]
      }
    };

    for (var r in a) {
      if (a.hasOwnProperty(r)) {
        if (!("channels" in a[r])) throw new Error("missing channels property: " + r);
        if (!("labels" in a[r])) throw new Error("missing channel labels property: " + r);
        if (a[r].labels.length !== a[r].channels) throw new Error("channel and label counts mismatch: " + r);
        var o = a[r].channels,
            s = a[r].labels;
        delete a[r].channels, delete a[r].labels, Object.defineProperty(a[r], "channels", {
          value: o
        }), Object.defineProperty(a[r], "labels", {
          value: s
        });
      }
    }

    a.rgb.hsl = function (t) {
      var e,
          n,
          i = t[0] / 255,
          a = t[1] / 255,
          r = t[2] / 255,
          o = Math.min(i, a, r),
          s = Math.max(i, a, r),
          l = s - o;
      return s === o ? e = 0 : i === s ? e = (a - r) / l : a === s ? e = 2 + (r - i) / l : r === s && (e = 4 + (i - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + s) / 2, [e, 100 * (s === o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n];
    }, a.rgb.hsv = function (t) {
      var e,
          n,
          i,
          a,
          r,
          o = t[0] / 255,
          s = t[1] / 255,
          l = t[2] / 255,
          u = Math.max(o, s, l),
          d = u - Math.min(o, s, l),
          h = function h(t) {
        return (u - t) / 6 / d + .5;
      };

      return 0 === d ? a = r = 0 : (r = d / u, e = h(o), n = h(s), i = h(l), o === u ? a = i - n : s === u ? a = 1 / 3 + e - i : l === u && (a = 2 / 3 + n - e), a < 0 ? a += 1 : a > 1 && (a -= 1)), [360 * a, 100 * r, 100 * u];
    }, a.rgb.hwb = function (t) {
      var e = t[0],
          n = t[1],
          i = t[2];
      return [a.rgb.hsl(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, i))), 100 * (i = 1 - 1 / 255 * Math.max(e, Math.max(n, i)))];
    }, a.rgb.cmyk = function (t) {
      var e,
          n = t[0] / 255,
          i = t[1] / 255,
          a = t[2] / 255;
      return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - a))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e];
    }, a.rgb.keyword = function (t) {
      var i = n[t];
      if (i) return i;
      var a,
          r,
          o,
          s = 1 / 0;

      for (var l in e) {
        if (e.hasOwnProperty(l)) {
          var u = e[l],
              d = (r = t, o = u, Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2) + Math.pow(r[2] - o[2], 2));
          d < s && (s = d, a = l);
        }
      }

      return a;
    }, a.keyword.rgb = function (t) {
      return e[t];
    }, a.rgb.xyz = function (t) {
      var e = t[0] / 255,
          n = t[1] / 255,
          i = t[2] / 255;
      return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)];
    }, a.rgb.lab = function (t) {
      var e = a.rgb.xyz(t),
          n = e[0],
          i = e[1],
          r = e[2];
      return i /= 100, r /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))];
    }, a.hsl.rgb = function (t) {
      var e,
          n,
          i,
          a,
          r,
          o = t[0] / 360,
          s = t[1] / 100,
          l = t[2] / 100;
      if (0 === s) return [r = 255 * l, r, r];
      e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];

      for (var u = 0; u < 3; u++) {
        (i = o + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, r = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, a[u] = 255 * r;
      }

      return a;
    }, a.hsl.hsv = function (t) {
      var e = t[0],
          n = t[1] / 100,
          i = t[2] / 100,
          a = n,
          r = Math.max(i, .01);
      return n *= (i *= 2) <= 1 ? i : 2 - i, a *= r <= 1 ? r : 2 - r, [e, 100 * (0 === i ? 2 * a / (r + a) : 2 * n / (i + n)), 100 * ((i + n) / 2)];
    }, a.hsv.rgb = function (t) {
      var e = t[0] / 60,
          n = t[1] / 100,
          i = t[2] / 100,
          a = Math.floor(e) % 6,
          r = e - Math.floor(e),
          o = 255 * i * (1 - n),
          s = 255 * i * (1 - n * r),
          l = 255 * i * (1 - n * (1 - r));

      switch (i *= 255, a) {
        case 0:
          return [i, l, o];

        case 1:
          return [s, i, o];

        case 2:
          return [o, i, l];

        case 3:
          return [o, s, i];

        case 4:
          return [l, o, i];

        case 5:
          return [i, o, s];
      }
    }, a.hsv.hsl = function (t) {
      var e,
          n,
          i,
          a = t[0],
          r = t[1] / 100,
          o = t[2] / 100,
          s = Math.max(o, .01);
      return i = (2 - r) * o, n = r * s, [a, 100 * (n = (n /= (e = (2 - r) * s) <= 1 ? e : 2 - e) || 0), 100 * (i /= 2)];
    }, a.hwb.rgb = function (t) {
      var e,
          n,
          i,
          a,
          r,
          o,
          s,
          l = t[0] / 360,
          u = t[1] / 100,
          d = t[2] / 100,
          h = u + d;

      switch (h > 1 && (u /= h, d /= h), i = 6 * l - (e = Math.floor(6 * l)), 0 != (1 & e) && (i = 1 - i), a = u + i * ((n = 1 - d) - u), e) {
        default:
        case 6:
        case 0:
          r = n, o = a, s = u;
          break;

        case 1:
          r = a, o = n, s = u;
          break;

        case 2:
          r = u, o = n, s = a;
          break;

        case 3:
          r = u, o = a, s = n;
          break;

        case 4:
          r = a, o = u, s = n;
          break;

        case 5:
          r = n, o = u, s = a;
      }

      return [255 * r, 255 * o, 255 * s];
    }, a.cmyk.rgb = function (t) {
      var e = t[0] / 100,
          n = t[1] / 100,
          i = t[2] / 100,
          a = t[3] / 100;
      return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a))];
    }, a.xyz.rgb = function (t) {
      var e,
          n,
          i,
          a = t[0] / 100,
          r = t[1] / 100,
          o = t[2] / 100;
      return n = -.9689 * a + 1.8758 * r + .0415 * o, i = .0557 * a + -.204 * r + 1.057 * o, e = (e = 3.2406 * a + -1.5372 * r + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))];
    }, a.xyz.lab = function (t) {
      var e = t[0],
          n = t[1],
          i = t[2];
      return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))];
    }, a.lab.xyz = function (t) {
      var e,
          n,
          i,
          a = t[0];
      e = t[1] / 500 + (n = (a + 16) / 116), i = n - t[2] / 200;
      var r = Math.pow(n, 3),
          o = Math.pow(e, 3),
          s = Math.pow(i, 3);
      return n = r > .008856 ? r : (n - 16 / 116) / 7.787, e = o > .008856 ? o : (e - 16 / 116) / 7.787, i = s > .008856 ? s : (i - 16 / 116) / 7.787, [e *= 95.047, n *= 100, i *= 108.883];
    }, a.lab.lch = function (t) {
      var e,
          n = t[0],
          i = t[1],
          a = t[2];
      return (e = 360 * Math.atan2(a, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + a * a), e];
    }, a.lch.lab = function (t) {
      var e,
          n = t[0],
          i = t[1];
      return e = t[2] / 360 * 2 * Math.PI, [n, i * Math.cos(e), i * Math.sin(e)];
    }, a.rgb.ansi16 = function (t) {
      var e = t[0],
          n = t[1],
          i = t[2],
          r = 1 in arguments ? arguments[1] : a.rgb.hsv(t)[2];
      if (0 === (r = Math.round(r / 50))) return 30;
      var o = 30 + (Math.round(i / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
      return 2 === r && (o += 60), o;
    }, a.hsv.ansi16 = function (t) {
      return a.rgb.ansi16(a.hsv.rgb(t), t[2]);
    }, a.rgb.ansi256 = function (t) {
      var e = t[0],
          n = t[1],
          i = t[2];
      return e === n && n === i ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(i / 255 * 5);
    }, a.ansi16.rgb = function (t) {
      var e = t % 10;
      if (0 === e || 7 === e) return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e];
      var n = .5 * (1 + ~~(t > 50));
      return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255];
    }, a.ansi256.rgb = function (t) {
      if (t >= 232) {
        var e = 10 * (t - 232) + 8;
        return [e, e, e];
      }

      var n;
      return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255];
    }, a.rgb.hex = function (t) {
      var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
      return "000000".substring(e.length) + e;
    }, a.hex.rgb = function (t) {
      var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!e) return [0, 0, 0];
      var n = e[0];
      3 === e[0].length && (n = n.split("").map(function (t) {
        return t + t;
      }).join(""));
      var i = parseInt(n, 16);
      return [i >> 16 & 255, i >> 8 & 255, 255 & i];
    }, a.rgb.hcg = function (t) {
      var e,
          n = t[0] / 255,
          i = t[1] / 255,
          a = t[2] / 255,
          r = Math.max(Math.max(n, i), a),
          o = Math.min(Math.min(n, i), a),
          s = r - o;
      return e = s <= 0 ? 0 : r === n ? (i - a) / s % 6 : r === i ? 2 + (a - n) / s : 4 + (n - i) / s + 4, e /= 6, [360 * (e %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)];
    }, a.hsl.hcg = function (t) {
      var e = t[1] / 100,
          n = t[2] / 100,
          i = 1,
          a = 0;
      return (i = n < .5 ? 2 * e * n : 2 * e * (1 - n)) < 1 && (a = (n - .5 * i) / (1 - i)), [t[0], 100 * i, 100 * a];
    }, a.hsv.hcg = function (t) {
      var e = t[1] / 100,
          n = t[2] / 100,
          i = e * n,
          a = 0;
      return i < 1 && (a = (n - i) / (1 - i)), [t[0], 100 * i, 100 * a];
    }, a.hcg.rgb = function (t) {
      var e = t[0] / 360,
          n = t[1] / 100,
          i = t[2] / 100;
      if (0 === n) return [255 * i, 255 * i, 255 * i];
      var a,
          r = [0, 0, 0],
          o = e % 1 * 6,
          s = o % 1,
          l = 1 - s;

      switch (Math.floor(o)) {
        case 0:
          r[0] = 1, r[1] = s, r[2] = 0;
          break;

        case 1:
          r[0] = l, r[1] = 1, r[2] = 0;
          break;

        case 2:
          r[0] = 0, r[1] = 1, r[2] = s;
          break;

        case 3:
          r[0] = 0, r[1] = l, r[2] = 1;
          break;

        case 4:
          r[0] = s, r[1] = 0, r[2] = 1;
          break;

        default:
          r[0] = 1, r[1] = 0, r[2] = l;
      }

      return a = (1 - n) * i, [255 * (n * r[0] + a), 255 * (n * r[1] + a), 255 * (n * r[2] + a)];
    }, a.hcg.hsv = function (t) {
      var e = t[1] / 100,
          n = e + t[2] / 100 * (1 - e),
          i = 0;
      return n > 0 && (i = e / n), [t[0], 100 * i, 100 * n];
    }, a.hcg.hsl = function (t) {
      var e = t[1] / 100,
          n = t[2] / 100 * (1 - e) + .5 * e,
          i = 0;
      return n > 0 && n < .5 ? i = e / (2 * n) : n >= .5 && n < 1 && (i = e / (2 * (1 - n))), [t[0], 100 * i, 100 * n];
    }, a.hcg.hwb = function (t) {
      var e = t[1] / 100,
          n = e + t[2] / 100 * (1 - e);
      return [t[0], 100 * (n - e), 100 * (1 - n)];
    }, a.hwb.hcg = function (t) {
      var e = t[1] / 100,
          n = 1 - t[2] / 100,
          i = n - e,
          a = 0;
      return i < 1 && (a = (n - i) / (1 - i)), [t[0], 100 * i, 100 * a];
    }, a.apple.rgb = function (t) {
      return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255];
    }, a.rgb.apple = function (t) {
      return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535];
    }, a.gray.rgb = function (t) {
      return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255];
    }, a.gray.hsl = a.gray.hsv = function (t) {
      return [0, 0, t[0]];
    }, a.gray.hwb = function (t) {
      return [0, 100, t[0]];
    }, a.gray.cmyk = function (t) {
      return [0, 0, 0, t[0]];
    }, a.gray.lab = function (t) {
      return [t[0], 0, 0];
    }, a.gray.hex = function (t) {
      var e = 255 & Math.round(t[0] / 100 * 255),
          n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
      return "000000".substring(n.length) + n;
    }, a.rgb.gray = function (t) {
      return [(t[0] + t[1] + t[2]) / 3 / 255 * 100];
    };
  });

  n.rgb, n.hsl, n.hsv, n.hwb, n.cmyk, n.xyz, n.lab, n.lch, n.hex, n.keyword, n.ansi16, n.ansi256, n.hcg, n.apple, n.gray;

  function i(t) {
    var e = function () {
      for (var t = {}, e = Object.keys(n), i = e.length, a = 0; a < i; a++) {
        t[e[a]] = {
          distance: -1,
          parent: null
        };
      }

      return t;
    }(),
        i = [t];

    for (e[t].distance = 0; i.length;) {
      for (var a = i.pop(), r = Object.keys(n[a]), o = r.length, s = 0; s < o; s++) {
        var l = r[s],
            u = e[l];
        -1 === u.distance && (u.distance = e[a].distance + 1, u.parent = a, i.unshift(l));
      }
    }

    return e;
  }

  function a(t, e) {
    return function (n) {
      return e(t(n));
    };
  }

  function r(t, e) {
    for (var i = [e[t].parent, t], r = n[e[t].parent][t], o = e[t].parent; e[o].parent;) {
      i.unshift(e[o].parent), r = a(n[e[o].parent][o], r), o = e[o].parent;
    }

    return r.conversion = i, r;
  }

  var o = {};
  Object.keys(n).forEach(function (t) {
    o[t] = {}, Object.defineProperty(o[t], "channels", {
      value: n[t].channels
    }), Object.defineProperty(o[t], "labels", {
      value: n[t].labels
    });

    var e = function (t) {
      for (var e = i(t), n = {}, a = Object.keys(e), o = a.length, s = 0; s < o; s++) {
        var l = a[s];
        null !== e[l].parent && (n[l] = r(l, e));
      }

      return n;
    }(t);

    Object.keys(e).forEach(function (n) {
      var i = e[n];
      o[t][n] = function (t) {
        var e = function e(_e2) {
          if (null == _e2) return _e2;
          arguments.length > 1 && (_e2 = Array.prototype.slice.call(arguments));
          var n = t(_e2);
          if ("object" == _typeof(n)) for (var i = n.length, a = 0; a < i; a++) {
            n[a] = Math.round(n[a]);
          }
          return n;
        };

        return "conversion" in t && (e.conversion = t.conversion), e;
      }(i), o[t][n].raw = function (t) {
        var e = function e(_e3) {
          return null == _e3 ? _e3 : (arguments.length > 1 && (_e3 = Array.prototype.slice.call(arguments)), t(_e3));
        };

        return "conversion" in t && (e.conversion = t.conversion), e;
      }(i);
    });
  });
  var s = o,
      l = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  },
      u = {
    getRgba: d,
    getHsla: h,
    getRgb: function getRgb(t) {
      var e = d(t);
      return e && e.slice(0, 3);
    },
    getHsl: function getHsl(t) {
      var e = h(t);
      return e && e.slice(0, 3);
    },
    getHwb: c,
    getAlpha: function getAlpha(t) {
      var e = d(t);
      if (e) return e[3];
      if (e = h(t)) return e[3];
      if (e = c(t)) return e[3];
    },
    hexString: function hexString(t, e) {
      e = void 0 !== e && 3 === t.length ? e : t[3];
      return "#" + v(t[0]) + v(t[1]) + v(t[2]) + (e >= 0 && e < 1 ? v(Math.round(255 * e)) : "");
    },
    rgbString: function rgbString(t, e) {
      if (e < 1 || t[3] && t[3] < 1) return f(t, e);
      return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
    },
    rgbaString: f,
    percentString: function percentString(t, e) {
      if (e < 1 || t[3] && t[3] < 1) return g(t, e);
      var n = Math.round(t[0] / 255 * 100),
          i = Math.round(t[1] / 255 * 100),
          a = Math.round(t[2] / 255 * 100);
      return "rgb(" + n + "%, " + i + "%, " + a + "%)";
    },
    percentaString: g,
    hslString: function hslString(t, e) {
      if (e < 1 || t[3] && t[3] < 1) return p(t, e);
      return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
    },
    hslaString: p,
    hwbString: function hwbString(t, e) {
      void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
      return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
    },
    keyword: function keyword(t) {
      return b[t.slice(0, 3)];
    }
  };

  function d(t) {
    if (t) {
      var e = [0, 0, 0],
          n = 1,
          i = t.match(/^#([a-fA-F0-9]{3,4})$/i),
          a = "";

      if (i) {
        a = (i = i[1])[3];

        for (var r = 0; r < e.length; r++) {
          e[r] = parseInt(i[r] + i[r], 16);
        }

        a && (n = Math.round(parseInt(a + a, 16) / 255 * 100) / 100);
      } else if (i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
        a = i[2], i = i[1];

        for (r = 0; r < e.length; r++) {
          e[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16);
        }

        a && (n = Math.round(parseInt(a, 16) / 255 * 100) / 100);
      } else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
        for (r = 0; r < e.length; r++) {
          e[r] = parseInt(i[r + 1]);
        }

        n = parseFloat(i[4]);
      } else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
        for (r = 0; r < e.length; r++) {
          e[r] = Math.round(2.55 * parseFloat(i[r + 1]));
        }

        n = parseFloat(i[4]);
      } else if (i = t.match(/(\w+)/)) {
        if ("transparent" == i[1]) return [0, 0, 0, 0];
        if (!(e = l[i[1]])) return;
      }

      for (r = 0; r < e.length; r++) {
        e[r] = m(e[r], 0, 255);
      }

      return n = n || 0 == n ? m(n, 0, 1) : 1, e[3] = n, e;
    }
  }

  function h(t) {
    if (t) {
      var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

      if (e) {
        var n = parseFloat(e[4]);
        return [m(parseInt(e[1]), 0, 360), m(parseFloat(e[2]), 0, 100), m(parseFloat(e[3]), 0, 100), m(isNaN(n) ? 1 : n, 0, 1)];
      }
    }
  }

  function c(t) {
    if (t) {
      var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

      if (e) {
        var n = parseFloat(e[4]);
        return [m(parseInt(e[1]), 0, 360), m(parseFloat(e[2]), 0, 100), m(parseFloat(e[3]), 0, 100), m(isNaN(n) ? 1 : n, 0, 1)];
      }
    }
  }

  function f(t, e) {
    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
  }

  function g(t, e) {
    return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")";
  }

  function p(t, e) {
    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
  }

  function m(t, e, n) {
    return Math.min(Math.max(e, t), n);
  }

  function v(t) {
    var e = t.toString(16).toUpperCase();
    return e.length < 2 ? "0" + e : e;
  }

  var b = {};

  for (var x in l) {
    b[l[x]] = x;
  }

  var y = function y(t) {
    return t instanceof y ? t : this instanceof y ? (this.valid = !1, this.values = {
      rgb: [0, 0, 0],
      hsl: [0, 0, 0],
      hsv: [0, 0, 0],
      hwb: [0, 0, 0],
      cmyk: [0, 0, 0, 0],
      alpha: 1
    }, void ("string" == typeof t ? (e = u.getRgba(t)) ? this.setValues("rgb", e) : (e = u.getHsla(t)) ? this.setValues("hsl", e) : (e = u.getHwb(t)) && this.setValues("hwb", e) : "object" == _typeof(t) && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new y(t);
    var e;
  };

  y.prototype = {
    isValid: function isValid() {
      return this.valid;
    },
    rgb: function rgb() {
      return this.setSpace("rgb", arguments);
    },
    hsl: function hsl() {
      return this.setSpace("hsl", arguments);
    },
    hsv: function hsv() {
      return this.setSpace("hsv", arguments);
    },
    hwb: function hwb() {
      return this.setSpace("hwb", arguments);
    },
    cmyk: function cmyk() {
      return this.setSpace("cmyk", arguments);
    },
    rgbArray: function rgbArray() {
      return this.values.rgb;
    },
    hslArray: function hslArray() {
      return this.values.hsl;
    },
    hsvArray: function hsvArray() {
      return this.values.hsv;
    },
    hwbArray: function hwbArray() {
      var t = this.values;
      return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
    },
    cmykArray: function cmykArray() {
      return this.values.cmyk;
    },
    rgbaArray: function rgbaArray() {
      var t = this.values;
      return t.rgb.concat([t.alpha]);
    },
    hslaArray: function hslaArray() {
      var t = this.values;
      return t.hsl.concat([t.alpha]);
    },
    alpha: function alpha(t) {
      return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
    },
    red: function red(t) {
      return this.setChannel("rgb", 0, t);
    },
    green: function green(t) {
      return this.setChannel("rgb", 1, t);
    },
    blue: function blue(t) {
      return this.setChannel("rgb", 2, t);
    },
    hue: function hue(t) {
      return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
    },
    saturation: function saturation(t) {
      return this.setChannel("hsl", 1, t);
    },
    lightness: function lightness(t) {
      return this.setChannel("hsl", 2, t);
    },
    saturationv: function saturationv(t) {
      return this.setChannel("hsv", 1, t);
    },
    whiteness: function whiteness(t) {
      return this.setChannel("hwb", 1, t);
    },
    blackness: function blackness(t) {
      return this.setChannel("hwb", 2, t);
    },
    value: function value(t) {
      return this.setChannel("hsv", 2, t);
    },
    cyan: function cyan(t) {
      return this.setChannel("cmyk", 0, t);
    },
    magenta: function magenta(t) {
      return this.setChannel("cmyk", 1, t);
    },
    yellow: function yellow(t) {
      return this.setChannel("cmyk", 2, t);
    },
    black: function black(t) {
      return this.setChannel("cmyk", 3, t);
    },
    hexString: function hexString() {
      return u.hexString(this.values.rgb);
    },
    rgbString: function rgbString() {
      return u.rgbString(this.values.rgb, this.values.alpha);
    },
    rgbaString: function rgbaString() {
      return u.rgbaString(this.values.rgb, this.values.alpha);
    },
    percentString: function percentString() {
      return u.percentString(this.values.rgb, this.values.alpha);
    },
    hslString: function hslString() {
      return u.hslString(this.values.hsl, this.values.alpha);
    },
    hslaString: function hslaString() {
      return u.hslaString(this.values.hsl, this.values.alpha);
    },
    hwbString: function hwbString() {
      return u.hwbString(this.values.hwb, this.values.alpha);
    },
    keyword: function keyword() {
      return u.keyword(this.values.rgb, this.values.alpha);
    },
    rgbNumber: function rgbNumber() {
      var t = this.values.rgb;
      return t[0] << 16 | t[1] << 8 | t[2];
    },
    luminosity: function luminosity() {
      for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
        var i = t[n] / 255;
        e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
      }

      return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
    },
    contrast: function contrast(t) {
      var e = this.luminosity(),
          n = t.luminosity();
      return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05);
    },
    level: function level(t) {
      var e = this.contrast(t);
      return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
    },
    dark: function dark() {
      var t = this.values.rgb;
      return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
    },
    light: function light() {
      return !this.dark();
    },
    negate: function negate() {
      for (var t = [], e = 0; e < 3; e++) {
        t[e] = 255 - this.values.rgb[e];
      }

      return this.setValues("rgb", t), this;
    },
    lighten: function lighten(t) {
      var e = this.values.hsl;
      return e[2] += e[2] * t, this.setValues("hsl", e), this;
    },
    darken: function darken(t) {
      var e = this.values.hsl;
      return e[2] -= e[2] * t, this.setValues("hsl", e), this;
    },
    saturate: function saturate(t) {
      var e = this.values.hsl;
      return e[1] += e[1] * t, this.setValues("hsl", e), this;
    },
    desaturate: function desaturate(t) {
      var e = this.values.hsl;
      return e[1] -= e[1] * t, this.setValues("hsl", e), this;
    },
    whiten: function whiten(t) {
      var e = this.values.hwb;
      return e[1] += e[1] * t, this.setValues("hwb", e), this;
    },
    blacken: function blacken(t) {
      var e = this.values.hwb;
      return e[2] += e[2] * t, this.setValues("hwb", e), this;
    },
    greyscale: function greyscale() {
      var t = this.values.rgb,
          e = .3 * t[0] + .59 * t[1] + .11 * t[2];
      return this.setValues("rgb", [e, e, e]), this;
    },
    clearer: function clearer(t) {
      var e = this.values.alpha;
      return this.setValues("alpha", e - e * t), this;
    },
    opaquer: function opaquer(t) {
      var e = this.values.alpha;
      return this.setValues("alpha", e + e * t), this;
    },
    rotate: function rotate(t) {
      var e = this.values.hsl,
          n = (e[0] + t) % 360;
      return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this;
    },
    mix: function mix(t, e) {
      var n = t,
          i = void 0 === e ? .5 : e,
          a = 2 * i - 1,
          r = this.alpha() - n.alpha(),
          o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
          s = 1 - o;
      return this.rgb(o * this.red() + s * n.red(), o * this.green() + s * n.green(), o * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i));
    },
    toJSON: function toJSON() {
      return this.rgb();
    },
    clone: function clone() {
      var t,
          e,
          n = new y(),
          i = this.values,
          a = n.values;

      for (var r in i) {
        i.hasOwnProperty(r) && (t = i[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
      }

      return n;
    }
  }, y.prototype.spaces = {
    rgb: ["red", "green", "blue"],
    hsl: ["hue", "saturation", "lightness"],
    hsv: ["hue", "saturation", "value"],
    hwb: ["hue", "whiteness", "blackness"],
    cmyk: ["cyan", "magenta", "yellow", "black"]
  }, y.prototype.maxes = {
    rgb: [255, 255, 255],
    hsl: [360, 100, 100],
    hsv: [360, 100, 100],
    hwb: [360, 100, 100],
    cmyk: [100, 100, 100, 100]
  }, y.prototype.getValues = function (t) {
    for (var e = this.values, n = {}, i = 0; i < t.length; i++) {
      n[t.charAt(i)] = e[t][i];
    }

    return 1 !== e.alpha && (n.a = e.alpha), n;
  }, y.prototype.setValues = function (t, e) {
    var n,
        i,
        a = this.values,
        r = this.spaces,
        o = this.maxes,
        l = 1;
    if (this.valid = !0, "alpha" === t) l = e;else if (e.length) a[t] = e.slice(0, t.length), l = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
      for (n = 0; n < t.length; n++) {
        a[t][n] = e[t.charAt(n)];
      }

      l = e.a;
    } else if (void 0 !== e[r[t][0]]) {
      var u = r[t];

      for (n = 0; n < t.length; n++) {
        a[t][n] = e[u[n]];
      }

      l = e.alpha;
    }
    if (a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l)), "alpha" === t) return !1;

    for (n = 0; n < t.length; n++) {
      i = Math.max(0, Math.min(o[t][n], a[t][n])), a[t][n] = Math.round(i);
    }

    for (var d in r) {
      d !== t && (a[d] = s[t][d](a[t]));
    }

    return !0;
  }, y.prototype.setSpace = function (t, e) {
    var n = e[0];
    return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this);
  }, y.prototype.setChannel = function (t, e, n) {
    var i = this.values[t];
    return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this);
  }, "undefined" != typeof window && (window.Color = y);

  var _,
      k = y,
      w = {
    noop: function noop() {},
    uid: (_ = 0, function () {
      return _++;
    }),
    isNullOrUndef: function isNullOrUndef(t) {
      return null == t;
    },
    isArray: function isArray(t) {
      if (Array.isArray && Array.isArray(t)) return !0;
      var e = Object.prototype.toString.call(t);
      return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
    },
    isObject: function isObject(t) {
      return null !== t && "[object Object]" === Object.prototype.toString.call(t);
    },
    isFinite: function (_isFinite) {
      function isFinite(_x) {
        return _isFinite.apply(this, arguments);
      }

      isFinite.toString = function () {
        return _isFinite.toString();
      };

      return isFinite;
    }(function (t) {
      return ("number" == typeof t || t instanceof Number) && isFinite(t);
    }),
    valueOrDefault: function valueOrDefault(t, e) {
      return void 0 === t ? e : t;
    },
    valueAtIndexOrDefault: function valueAtIndexOrDefault(t, e, n) {
      return w.valueOrDefault(w.isArray(t) ? t[e] : t, n);
    },
    callback: function callback(t, e, n) {
      if (t && "function" == typeof t.call) return t.apply(n, e);
    },
    each: function each(t, e, n, i) {
      var a, r, o;
      if (w.isArray(t)) {
        if (r = t.length, i) for (a = r - 1; a >= 0; a--) {
          e.call(n, t[a], a);
        } else for (a = 0; a < r; a++) {
          e.call(n, t[a], a);
        }
      } else if (w.isObject(t)) for (r = (o = Object.keys(t)).length, a = 0; a < r; a++) {
        e.call(n, t[o[a]], o[a]);
      }
    },
    arrayEquals: function arrayEquals(t, e) {
      var n, i, a, r;
      if (!t || !e || t.length !== e.length) return !1;

      for (n = 0, i = t.length; n < i; ++n) {
        if (a = t[n], r = e[n], a instanceof Array && r instanceof Array) {
          if (!w.arrayEquals(a, r)) return !1;
        } else if (a !== r) return !1;
      }

      return !0;
    },
    clone: function clone(t) {
      if (w.isArray(t)) return t.map(w.clone);

      if (w.isObject(t)) {
        for (var e = {}, n = Object.keys(t), i = n.length, a = 0; a < i; ++a) {
          e[n[a]] = w.clone(t[n[a]]);
        }

        return e;
      }

      return t;
    },
    _merger: function _merger(t, e, n, i) {
      var a = e[t],
          r = n[t];
      w.isObject(a) && w.isObject(r) ? w.merge(a, r, i) : e[t] = w.clone(r);
    },
    _mergerIf: function _mergerIf(t, e, n) {
      var i = e[t],
          a = n[t];
      w.isObject(i) && w.isObject(a) ? w.mergeIf(i, a) : e.hasOwnProperty(t) || (e[t] = w.clone(a));
    },
    merge: function merge(t, e, n) {
      var i,
          a,
          r,
          o,
          s,
          l = w.isArray(e) ? e : [e],
          u = l.length;
      if (!w.isObject(t)) return t;

      for (i = (n = n || {}).merger || w._merger, a = 0; a < u; ++a) {
        if (e = l[a], w.isObject(e)) for (s = 0, o = (r = Object.keys(e)).length; s < o; ++s) {
          i(r[s], t, e, n);
        }
      }

      return t;
    },
    mergeIf: function mergeIf(t, e) {
      return w.merge(t, e, {
        merger: w._mergerIf
      });
    },
    extend: Object.assign || function (t) {
      return w.merge(t, [].slice.call(arguments, 1), {
        merger: function merger(t, e, n) {
          e[t] = n[t];
        }
      });
    },
    inherits: function inherits(t) {
      var e = this,
          n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
        return e.apply(this, arguments);
      },
          i = function i() {
        this.constructor = n;
      };

      return i.prototype = e.prototype, n.prototype = new i(), n.extend = w.inherits, t && w.extend(n.prototype, t), n.__super__ = e.prototype, n;
    },
    _deprecated: function _deprecated(t, e, n, i) {
      void 0 !== e && console.warn(t + ': "' + n + '" is deprecated. Please use "' + i + '" instead');
    }
  },
      M = w;

  w.callCallback = w.callback, w.indexOf = function (t, e, n) {
    return Array.prototype.indexOf.call(t, e, n);
  }, w.getValueOrDefault = w.valueOrDefault, w.getValueAtIndexOrDefault = w.valueAtIndexOrDefault;
  var S = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return -t * (t - 2);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return (t -= 1) * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return -((t -= 1) * t * t * t - 1);
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return (t -= 1) * t * t * t * t + 1;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function easeInSine(t) {
      return 1 - Math.cos(t * (Math.PI / 2));
    },
    easeOutSine: function easeOutSine(t) {
      return Math.sin(t * (Math.PI / 2));
    },
    easeInOutSine: function easeInOutSine(t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    },
    easeInExpo: function easeInExpo(t) {
      return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
    },
    easeOutExpo: function easeOutExpo(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    },
    easeInOutExpo: function easeInOutExpo(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
    },
    easeInCirc: function easeInCirc(t) {
      return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
    },
    easeOutCirc: function easeOutCirc(t) {
      return Math.sqrt(1 - (t -= 1) * t);
    },
    easeInOutCirc: function easeInOutCirc(t) {
      return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function easeInElastic(t) {
      var e = 1.70158,
          n = 0,
          i = 1;
      return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n));
    },
    easeOutElastic: function easeOutElastic(t) {
      var e = 1.70158,
          n = 0,
          i = 1;
      return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);
    },
    easeInOutElastic: function easeInOutElastic(t) {
      var e = 1.70158,
          n = 0,
          i = 1;
      return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1);
    },
    easeInBack: function easeInBack(t) {
      var e = 1.70158;
      return t * t * ((e + 1) * t - e);
    },
    easeOutBack: function easeOutBack(t) {
      var e = 1.70158;
      return (t -= 1) * t * ((e + 1) * t + e) + 1;
    },
    easeInOutBack: function easeInOutBack(t) {
      var e = 1.70158;
      return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
    },
    easeInBounce: function easeInBounce(t) {
      return 1 - S.easeOutBounce(1 - t);
    },
    easeOutBounce: function easeOutBounce(t) {
      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
    easeInOutBounce: function easeInOutBounce(t) {
      return t < .5 ? .5 * S.easeInBounce(2 * t) : .5 * S.easeOutBounce(2 * t - 1) + .5;
    }
  },
      C = {
    effects: S
  };
  M.easingEffects = S;
  var P = Math.PI,
      A = P / 180,
      D = 2 * P,
      T = P / 2,
      I = P / 4,
      F = 2 * P / 3,
      L = {
    clear: function clear(t) {
      t.ctx.clearRect(0, 0, t.width, t.height);
    },
    roundedRect: function roundedRect(t, e, n, i, a, r) {
      if (r) {
        var o = Math.min(r, a / 2, i / 2),
            s = e + o,
            l = n + o,
            u = e + i - o,
            d = n + a - o;
        t.moveTo(e, l), s < u && l < d ? (t.arc(s, l, o, -P, -T), t.arc(u, l, o, -T, 0), t.arc(u, d, o, 0, T), t.arc(s, d, o, T, P)) : s < u ? (t.moveTo(s, n), t.arc(u, l, o, -T, T), t.arc(s, l, o, T, P + T)) : l < d ? (t.arc(s, l, o, -P, 0), t.arc(s, d, o, 0, P)) : t.arc(s, l, o, -P, P), t.closePath(), t.moveTo(e, n);
      } else t.rect(e, n, i, a);
    },
    drawPoint: function drawPoint(t, e, n, i, a, r) {
      var o,
          s,
          l,
          u,
          d,
          h = (r || 0) * A;
      if (e && "object" == _typeof(e) && ("[object HTMLImageElement]" === (o = e.toString()) || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, a), t.rotate(h), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore();

      if (!(isNaN(n) || n <= 0)) {
        switch (t.beginPath(), e) {
          default:
            t.arc(i, a, n, 0, D), t.closePath();
            break;

          case "triangle":
            t.moveTo(i + Math.sin(h) * n, a - Math.cos(h) * n), h += F, t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n), h += F, t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n), t.closePath();
            break;

          case "rectRounded":
            u = n - (d = .516 * n), s = Math.cos(h + I) * u, l = Math.sin(h + I) * u, t.arc(i - s, a - l, d, h - P, h - T), t.arc(i + l, a - s, d, h - T, h), t.arc(i + s, a + l, d, h, h + T), t.arc(i - l, a + s, d, h + T, h + P), t.closePath();
            break;

          case "rect":
            if (!r) {
              u = Math.SQRT1_2 * n, t.rect(i - u, a - u, 2 * u, 2 * u);
              break;
            }

            h += I;

          case "rectRot":
            s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + l, a - s), t.lineTo(i + s, a + l), t.lineTo(i - l, a + s), t.closePath();
            break;

          case "crossRot":
            h += I;

          case "cross":
            s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s);
            break;

          case "star":
            s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s), h += I, s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s);
            break;

          case "line":
            s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l);
            break;

          case "dash":
            t.moveTo(i, a), t.lineTo(i + Math.cos(h) * n, a + Math.sin(h) * n);
        }

        t.fill(), t.stroke();
      }
    },
    _isPointInArea: function _isPointInArea(t, e) {
      return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6;
    },
    clipArea: function clipArea(t, e) {
      t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
    },
    unclipArea: function unclipArea(t) {
      t.restore();
    },
    lineTo: function lineTo(t, e, n, i) {
      var a = n.steppedLine;

      if (a) {
        if ("middle" === a) {
          var r = (e.x + n.x) / 2;
          t.lineTo(r, i ? n.y : e.y), t.lineTo(r, i ? e.y : n.y);
        } else "after" === a && !i || "after" !== a && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);

        t.lineTo(n.x, n.y);
      } else n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y);
    }
  },
      O = L;
  M.clear = L.clear, M.drawRoundedRectangle = function (t) {
    t.beginPath(), L.roundedRect.apply(L, arguments);
  };
  var R = {
    _set: function _set(t, e) {
      return M.merge(this[t] || (this[t] = {}), e);
    }
  };

  R._set("global", {
    defaultColor: "rgba(0,0,0,0.1)",
    defaultFontColor: "#666",
    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    defaultFontSize: 12,
    defaultFontStyle: "normal",
    defaultLineHeight: 1.2,
    showLines: !0
  });

  var z = R,
      N = M.valueOrDefault;
  var B = {
    toLineHeight: function toLineHeight(t, e) {
      var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
      if (!n || "normal" === n[1]) return 1.2 * e;

      switch (t = +n[2], n[3]) {
        case "px":
          return t;

        case "%":
          t /= 100;
      }

      return e * t;
    },
    toPadding: function toPadding(t) {
      var e, n, i, a;
      return M.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, a = +t.left || 0) : e = n = i = a = +t || 0, {
        top: e,
        right: n,
        bottom: i,
        left: a,
        height: e + i,
        width: a + n
      };
    },
    _parseFont: function _parseFont(t) {
      var e = z.global,
          n = N(t.fontSize, e.defaultFontSize),
          i = {
        family: N(t.fontFamily, e.defaultFontFamily),
        lineHeight: M.options.toLineHeight(N(t.lineHeight, e.defaultLineHeight), n),
        size: n,
        style: N(t.fontStyle, e.defaultFontStyle),
        weight: null,
        string: ""
      };
      return i.string = function (t) {
        return !t || M.isNullOrUndef(t.size) || M.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
      }(i), i;
    },
    resolve: function resolve(t, e, n, i) {
      var a,
          r,
          o,
          s = !0;

      for (a = 0, r = t.length; a < r; ++a) {
        if (void 0 !== (o = t[a]) && (void 0 !== e && "function" == typeof o && (o = o(e), s = !1), void 0 !== n && M.isArray(o) && (o = o[n], s = !1), void 0 !== o)) return i && !s && (i.cacheable = !1), o;
      }
    }
  },
      E = {
    _factorize: function _factorize(t) {
      var e,
          n = [],
          i = Math.sqrt(t);

      for (e = 1; e < i; e++) {
        t % e == 0 && (n.push(e), n.push(t / e));
      }

      return i === (0 | i) && n.push(i), n.sort(function (t, e) {
        return t - e;
      }).pop(), n;
    },
    log10: Math.log10 || function (t) {
      var e = Math.log(t) * Math.LOG10E,
          n = Math.round(e);
      return t === Math.pow(10, n) ? n : e;
    }
  },
      W = E;
  M.log10 = E.log10;
  var V = M,
      H = C,
      j = O,
      q = B,
      U = W,
      Y = {
    getRtlAdapter: function getRtlAdapter(t, e, n) {
      return t ? function (t, e) {
        return {
          x: function x(n) {
            return t + t + e - n;
          },
          setWidth: function setWidth(t) {
            e = t;
          },
          textAlign: function textAlign(t) {
            return "center" === t ? t : "right" === t ? "left" : "right";
          },
          xPlus: function xPlus(t, e) {
            return t - e;
          },
          leftForLtr: function leftForLtr(t, e) {
            return t - e;
          }
        };
      }(e, n) : {
        x: function x(t) {
          return t;
        },
        setWidth: function setWidth(t) {},
        textAlign: function textAlign(t) {
          return t;
        },
        xPlus: function xPlus(t, e) {
          return t + e;
        },
        leftForLtr: function leftForLtr(t, e) {
          return t;
        }
      };
    },
    overrideTextDirection: function overrideTextDirection(t, e) {
      var n, i;
      "ltr" !== e && "rtl" !== e || (i = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = i);
    },
    restoreTextDirection: function restoreTextDirection(t) {
      var e = t.prevTextDirection;
      void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]));
    }
  };
  V.easing = H, V.canvas = j, V.options = q, V.math = U, V.rtl = Y;

  var G = function G(t) {
    V.extend(this, t), this.initialize.apply(this, arguments);
  };

  V.extend(G.prototype, {
    _type: void 0,
    initialize: function initialize() {
      this.hidden = !1;
    },
    pivot: function pivot() {
      var t = this;
      return t._view || (t._view = V.extend({}, t._model)), t._start = {}, t;
    },
    transition: function transition(t) {
      var e = this,
          n = e._model,
          i = e._start,
          a = e._view;
      return n && 1 !== t ? (a || (a = e._view = {}), i || (i = e._start = {}), function (t, e, n, i) {
        var a,
            r,
            o,
            s,
            l,
            u,
            d,
            h,
            c,
            f = Object.keys(n);

        for (a = 0, r = f.length; a < r; ++a) {
          if (u = n[o = f[a]], e.hasOwnProperty(o) || (e[o] = u), (s = e[o]) !== u && "_" !== o[0]) {
            if (t.hasOwnProperty(o) || (t[o] = s), (d = _typeof(u)) === _typeof(l = t[o])) if ("string" === d) {
              if ((h = k(l)).valid && (c = k(u)).valid) {
                e[o] = c.mix(h, i).rgbString();
                continue;
              }
            } else if (V.isFinite(l) && V.isFinite(u)) {
              e[o] = l + (u - l) * i;
              continue;
            }
            e[o] = u;
          }
        }
      }(i, a, n, t), e) : (e._view = V.extend({}, n), e._start = null, e);
    },
    tooltipPosition: function tooltipPosition() {
      return {
        x: this._model.x,
        y: this._model.y
      };
    },
    hasValue: function hasValue() {
      return V.isNumber(this._model.x) && V.isNumber(this._model.y);
    }
  }), G.extend = V.inherits;
  var X = G,
      K = X.extend({
    chart: null,
    currentStep: 0,
    numSteps: 60,
    easing: "",
    render: null,
    onAnimationProgress: null,
    onAnimationComplete: null
  }),
      Z = K;
  Object.defineProperty(K.prototype, "animationObject", {
    get: function get() {
      return this;
    }
  }), Object.defineProperty(K.prototype, "chartInstance", {
    get: function get() {
      return this.chart;
    },
    set: function set(t) {
      this.chart = t;
    }
  }), z._set("global", {
    animation: {
      duration: 1e3,
      easing: "easeOutQuart",
      onProgress: V.noop,
      onComplete: V.noop
    }
  });
  var $ = {
    animations: [],
    request: null,
    addAnimation: function addAnimation(t, e, n, i) {
      var a,
          r,
          o = this.animations;

      for (e.chart = t, e.startTime = Date.now(), e.duration = n, i || (t.animating = !0), a = 0, r = o.length; a < r; ++a) {
        if (o[a].chart === t) return void (o[a] = e);
      }

      o.push(e), 1 === o.length && this.requestAnimationFrame();
    },
    cancelAnimation: function cancelAnimation(t) {
      var e = V.findIndex(this.animations, function (e) {
        return e.chart === t;
      });
      -1 !== e && (this.animations.splice(e, 1), t.animating = !1);
    },
    requestAnimationFrame: function requestAnimationFrame() {
      var t = this;
      null === t.request && (t.request = V.requestAnimFrame.call(window, function () {
        t.request = null, t.startDigest();
      }));
    },
    startDigest: function startDigest() {
      this.advance(), this.animations.length > 0 && this.requestAnimationFrame();
    },
    advance: function advance() {
      for (var t, e, n, i, a = this.animations, r = 0; r < a.length;) {
        e = (t = a[r]).chart, n = t.numSteps, i = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1, t.currentStep = Math.min(i, n), V.callback(t.render, [e, t], e), V.callback(t.onAnimationProgress, [t], e), t.currentStep >= n ? (V.callback(t.onAnimationComplete, [t], e), e.animating = !1, a.splice(r, 1)) : ++r;
      }
    }
  },
      J = V.options.resolve,
      Q = ["push", "pop", "shift", "splice", "unshift"];

  function tt(t, e) {
    var n = t._chartjs;

    if (n) {
      var i = n.listeners,
          a = i.indexOf(e);
      -1 !== a && i.splice(a, 1), i.length > 0 || (Q.forEach(function (e) {
        delete t[e];
      }), delete t._chartjs);
    }
  }

  var et = function et(t, e) {
    this.initialize(t, e);
  };

  V.extend(et.prototype, {
    datasetElementType: null,
    dataElementType: null,
    _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
    initialize: function initialize(t, e) {
      var n = this;
      n.chart = t, n.index = e, n.linkScales(), n.addElements(), n._type = n.getMeta().type;
    },
    updateIndex: function updateIndex(t) {
      this.index = t;
    },
    linkScales: function linkScales() {
      var t = this.getMeta(),
          e = this.chart,
          n = e.scales,
          i = this.getDataset(),
          a = e.options.scales;
      null !== t.xAxisID && t.xAxisID in n && !i.xAxisID || (t.xAxisID = i.xAxisID || a.xAxes[0].id), null !== t.yAxisID && t.yAxisID in n && !i.yAxisID || (t.yAxisID = i.yAxisID || a.yAxes[0].id);
    },
    getDataset: function getDataset() {
      return this.chart.data.datasets[this.index];
    },
    getMeta: function getMeta() {
      return this.chart.getDatasetMeta(this.index);
    },
    getScaleForId: function getScaleForId(t) {
      return this.chart.scales[t];
    },
    _getValueScaleId: function _getValueScaleId() {
      return this.getMeta().yAxisID;
    },
    _getIndexScaleId: function _getIndexScaleId() {
      return this.getMeta().xAxisID;
    },
    _getValueScale: function _getValueScale() {
      return this.getScaleForId(this._getValueScaleId());
    },
    _getIndexScale: function _getIndexScale() {
      return this.getScaleForId(this._getIndexScaleId());
    },
    reset: function reset() {
      this._update(!0);
    },
    destroy: function destroy() {
      this._data && tt(this._data, this);
    },
    createMetaDataset: function createMetaDataset() {
      var t = this.datasetElementType;
      return t && new t({
        _chart: this.chart,
        _datasetIndex: this.index
      });
    },
    createMetaData: function createMetaData(t) {
      var e = this.dataElementType;
      return e && new e({
        _chart: this.chart,
        _datasetIndex: this.index,
        _index: t
      });
    },
    addElements: function addElements() {
      var t,
          e,
          n = this.getMeta(),
          i = this.getDataset().data || [],
          a = n.data;

      for (t = 0, e = i.length; t < e; ++t) {
        a[t] = a[t] || this.createMetaData(t);
      }

      n.dataset = n.dataset || this.createMetaDataset();
    },
    addElementAndReset: function addElementAndReset(t) {
      var e = this.createMetaData(t);
      this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
    },
    buildOrUpdateElements: function buildOrUpdateElements() {
      var t,
          e,
          n = this,
          i = n.getDataset(),
          a = i.data || (i.data = []);
      n._data !== a && (n._data && tt(n._data, n), a && Object.isExtensible(a) && (e = n, (t = a)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: {
          listeners: [e]
        }
      }), Q.forEach(function (e) {
        var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
            i = t[e];
        Object.defineProperty(t, e, {
          configurable: !0,
          enumerable: !1,
          value: function value() {
            var e = Array.prototype.slice.call(arguments),
                a = i.apply(this, e);
            return V.each(t._chartjs.listeners, function (t) {
              "function" == typeof t[n] && t[n].apply(t, e);
            }), a;
          }
        });
      }))), n._data = a), n.resyncElements();
    },
    _configure: function _configure() {
      this._config = V.merge({}, [this.chart.options.datasets[this._type], this.getDataset()], {
        merger: function merger(t, e, n) {
          "_meta" !== t && "data" !== t && V._merger(t, e, n);
        }
      });
    },
    _update: function _update(t) {
      this._configure(), this._cachedDataOpts = null, this.update(t);
    },
    update: V.noop,
    transition: function transition(t) {
      for (var e = this.getMeta(), n = e.data || [], i = n.length, a = 0; a < i; ++a) {
        n[a].transition(t);
      }

      e.dataset && e.dataset.transition(t);
    },
    draw: function draw() {
      var t = this.getMeta(),
          e = t.data || [],
          n = e.length,
          i = 0;

      for (t.dataset && t.dataset.draw(); i < n; ++i) {
        e[i].draw();
      }
    },
    getStyle: function getStyle(t) {
      var e,
          n = this.getMeta(),
          i = n.dataset;
      return this._configure(), i && void 0 === t ? e = this._resolveDatasetElementOptions(i || {}) : (t = t || 0, e = this._resolveDataElementOptions(n.data[t] || {}, t)), !1 !== e.fill && null !== e.fill || (e.backgroundColor = e.borderColor), e;
    },
    _resolveDatasetElementOptions: function _resolveDatasetElementOptions(t, e) {
      var n,
          i,
          a,
          r,
          o = this,
          s = o.chart,
          l = o._config,
          u = t.custom || {},
          d = s.options.elements[o.datasetElementType.prototype._type] || {},
          h = o._datasetElementOptions,
          c = {},
          f = {
        chart: s,
        dataset: o.getDataset(),
        datasetIndex: o.index,
        hover: e
      };

      for (n = 0, i = h.length; n < i; ++n) {
        a = h[n], r = e ? "hover" + a.charAt(0).toUpperCase() + a.slice(1) : a, c[a] = J([u[r], l[r], d[r]], f);
      }

      return c;
    },
    _resolveDataElementOptions: function _resolveDataElementOptions(t, e) {
      var n = this,
          i = t && t.custom,
          a = n._cachedDataOpts;
      if (a && !i) return a;
      var r,
          o,
          s,
          l,
          u = n.chart,
          d = n._config,
          h = u.options.elements[n.dataElementType.prototype._type] || {},
          c = n._dataElementOptions,
          f = {},
          g = {
        chart: u,
        dataIndex: e,
        dataset: n.getDataset(),
        datasetIndex: n.index
      },
          p = {
        cacheable: !i
      };
      if (i = i || {}, V.isArray(c)) for (o = 0, s = c.length; o < s; ++o) {
        f[l = c[o]] = J([i[l], d[l], h[l]], g, e, p);
      } else for (o = 0, s = (r = Object.keys(c)).length; o < s; ++o) {
        f[l = r[o]] = J([i[l], d[c[l]], d[l], h[l]], g, e, p);
      }
      return p.cacheable && (n._cachedDataOpts = Object.freeze(f)), f;
    },
    removeHoverStyle: function removeHoverStyle(t) {
      V.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = this.chart.data.datasets[t._datasetIndex],
          n = t._index,
          i = t.custom || {},
          a = t._model,
          r = V.getHoverColor;
      t.$previousStyle = {
        backgroundColor: a.backgroundColor,
        borderColor: a.borderColor,
        borderWidth: a.borderWidth
      }, a.backgroundColor = J([i.hoverBackgroundColor, e.hoverBackgroundColor, r(a.backgroundColor)], void 0, n), a.borderColor = J([i.hoverBorderColor, e.hoverBorderColor, r(a.borderColor)], void 0, n), a.borderWidth = J([i.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth], void 0, n);
    },
    _removeDatasetHoverStyle: function _removeDatasetHoverStyle() {
      var t = this.getMeta().dataset;
      t && this.removeHoverStyle(t);
    },
    _setDatasetHoverStyle: function _setDatasetHoverStyle() {
      var t,
          e,
          n,
          i,
          a,
          r,
          o = this.getMeta().dataset,
          s = {};

      if (o) {
        for (r = o._model, a = this._resolveDatasetElementOptions(o, !0), t = 0, e = (i = Object.keys(a)).length; t < e; ++t) {
          s[n = i[t]] = r[n], r[n] = a[n];
        }

        o.$previousStyle = s;
      }
    },
    resyncElements: function resyncElements() {
      var t = this.getMeta(),
          e = this.getDataset().data,
          n = t.data.length,
          i = e.length;
      i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n);
    },
    insertElements: function insertElements(t, e) {
      for (var n = 0; n < e; ++n) {
        this.addElementAndReset(t + n);
      }
    },
    onDataPush: function onDataPush() {
      var t = arguments.length;
      this.insertElements(this.getDataset().data.length - t, t);
    },
    onDataPop: function onDataPop() {
      this.getMeta().data.pop();
    },
    onDataShift: function onDataShift() {
      this.getMeta().data.shift();
    },
    onDataSplice: function onDataSplice(t, e) {
      this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
    },
    onDataUnshift: function onDataUnshift() {
      this.insertElements(0, arguments.length);
    }
  }), et.extend = V.inherits;
  var nt = et,
      it = 2 * Math.PI;

  function at(t, e) {
    var n = e.startAngle,
        i = e.endAngle,
        a = e.pixelMargin,
        r = a / e.outerRadius,
        o = e.x,
        s = e.y;
    t.beginPath(), t.arc(o, s, e.outerRadius, n - r, i + r), e.innerRadius > a ? (r = a / e.innerRadius, t.arc(o, s, e.innerRadius - a, i + r, n - r, !0)) : t.arc(o, s, a, i + Math.PI / 2, n - Math.PI / 2), t.closePath(), t.clip();
  }

  function rt(t, e, n) {
    var i = "inner" === e.borderAlign;
    i ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), n.fullCircles && function (t, e, n, i) {
      var a,
          r = n.endAngle;

      for (i && (n.endAngle = n.startAngle + it, at(t, n), n.endAngle = r, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += it, n.fullCircles--)), t.beginPath(), t.arc(n.x, n.y, n.innerRadius, n.startAngle + it, n.startAngle, !0), a = 0; a < n.fullCircles; ++a) {
        t.stroke();
      }

      for (t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + it), a = 0; a < n.fullCircles; ++a) {
        t.stroke();
      }
    }(t, e, n, i), i && at(t, n), t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle), t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0), t.closePath(), t.stroke();
  }

  z._set("global", {
    elements: {
      arc: {
        backgroundColor: z.global.defaultColor,
        borderColor: "#fff",
        borderWidth: 2,
        borderAlign: "center"
      }
    }
  });

  var ot = X.extend({
    _type: "arc",
    inLabelRange: function inLabelRange(t) {
      var e = this._view;
      return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
    },
    inRange: function inRange(t, e) {
      var n = this._view;

      if (n) {
        for (var i = V.getAngleFromPoint(n, {
          x: t,
          y: e
        }), a = i.angle, r = i.distance, o = n.startAngle, s = n.endAngle; s < o;) {
          s += it;
        }

        for (; a > s;) {
          a -= it;
        }

        for (; a < o;) {
          a += it;
        }

        var l = a >= o && a <= s,
            u = r >= n.innerRadius && r <= n.outerRadius;
        return l && u;
      }

      return !1;
    },
    getCenterPoint: function getCenterPoint() {
      var t = this._view,
          e = (t.startAngle + t.endAngle) / 2,
          n = (t.innerRadius + t.outerRadius) / 2;
      return {
        x: t.x + Math.cos(e) * n,
        y: t.y + Math.sin(e) * n
      };
    },
    getArea: function getArea() {
      var t = this._view;
      return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
    },
    tooltipPosition: function tooltipPosition() {
      var t = this._view,
          e = t.startAngle + (t.endAngle - t.startAngle) / 2,
          n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
      return {
        x: t.x + Math.cos(e) * n,
        y: t.y + Math.sin(e) * n
      };
    },
    draw: function draw() {
      var t,
          e = this._chart.ctx,
          n = this._view,
          i = "inner" === n.borderAlign ? .33 : 0,
          a = {
        x: n.x,
        y: n.y,
        innerRadius: n.innerRadius,
        outerRadius: Math.max(n.outerRadius - i, 0),
        pixelMargin: i,
        startAngle: n.startAngle,
        endAngle: n.endAngle,
        fullCircles: Math.floor(n.circumference / it)
      };

      if (e.save(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, a.fullCircles) {
        for (a.endAngle = a.startAngle + it, e.beginPath(), e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), t = 0; t < a.fullCircles; ++t) {
          e.fill();
        }

        a.endAngle = a.startAngle + n.circumference % it;
      }

      e.beginPath(), e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), e.fill(), n.borderWidth && rt(e, n, a), e.restore();
    }
  }),
      st = V.valueOrDefault,
      lt = z.global.defaultColor;

  z._set("global", {
    elements: {
      line: {
        tension: .4,
        backgroundColor: lt,
        borderWidth: 3,
        borderColor: lt,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        capBezierPoints: !0,
        fill: !0
      }
    }
  });

  var ut = X.extend({
    _type: "line",
    draw: function draw() {
      var t,
          e,
          n,
          i = this,
          a = i._view,
          r = i._chart.ctx,
          o = a.spanGaps,
          s = i._children.slice(),
          l = z.global,
          u = l.elements.line,
          d = -1,
          h = i._loop;

      if (s.length) {
        if (i._loop) {
          for (t = 0; t < s.length; ++t) {
            if (e = V.previousItem(s, t), !s[t]._view.skip && e._view.skip) {
              s = s.slice(t).concat(s.slice(0, t)), h = o;
              break;
            }
          }

          h && s.push(s[0]);
        }

        for (r.save(), r.lineCap = a.borderCapStyle || u.borderCapStyle, r.setLineDash && r.setLineDash(a.borderDash || u.borderDash), r.lineDashOffset = st(a.borderDashOffset, u.borderDashOffset), r.lineJoin = a.borderJoinStyle || u.borderJoinStyle, r.lineWidth = st(a.borderWidth, u.borderWidth), r.strokeStyle = a.borderColor || l.defaultColor, r.beginPath(), (n = s[0]._view).skip || (r.moveTo(n.x, n.y), d = 0), t = 1; t < s.length; ++t) {
          n = s[t]._view, e = -1 === d ? V.previousItem(s, t) : s[d], n.skip || (d !== t - 1 && !o || -1 === d ? r.moveTo(n.x, n.y) : V.canvas.lineTo(r, e._view, n), d = t);
        }

        h && r.closePath(), r.stroke(), r.restore();
      }
    }
  }),
      dt = V.valueOrDefault,
      ht = z.global.defaultColor;

  function ct(t) {
    var e = this._view;
    return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
  }

  z._set("global", {
    elements: {
      point: {
        radius: 3,
        pointStyle: "circle",
        backgroundColor: ht,
        borderColor: ht,
        borderWidth: 1,
        hitRadius: 1,
        hoverRadius: 4,
        hoverBorderWidth: 1
      }
    }
  });

  var ft = X.extend({
    _type: "point",
    inRange: function inRange(t, e) {
      var n = this._view;
      return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2);
    },
    inLabelRange: ct,
    inXRange: ct,
    inYRange: function inYRange(t) {
      var e = this._view;
      return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
    },
    getCenterPoint: function getCenterPoint() {
      var t = this._view;
      return {
        x: t.x,
        y: t.y
      };
    },
    getArea: function getArea() {
      return Math.PI * Math.pow(this._view.radius, 2);
    },
    tooltipPosition: function tooltipPosition() {
      var t = this._view;
      return {
        x: t.x,
        y: t.y,
        padding: t.radius + t.borderWidth
      };
    },
    draw: function draw(t) {
      var e = this._view,
          n = this._chart.ctx,
          i = e.pointStyle,
          a = e.rotation,
          r = e.radius,
          o = e.x,
          s = e.y,
          l = z.global,
          u = l.defaultColor;
      e.skip || (void 0 === t || V.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || u, n.lineWidth = dt(e.borderWidth, l.elements.point.borderWidth), n.fillStyle = e.backgroundColor || u, V.canvas.drawPoint(n, i, r, o, s, a));
    }
  }),
      gt = z.global.defaultColor;

  function pt(t) {
    return t && void 0 !== t.width;
  }

  function mt(t) {
    var e, n, i, a, r;
    return pt(t) ? (r = t.width / 2, e = t.x - r, n = t.x + r, i = Math.min(t.y, t.base), a = Math.max(t.y, t.base)) : (r = t.height / 2, e = Math.min(t.x, t.base), n = Math.max(t.x, t.base), i = t.y - r, a = t.y + r), {
      left: e,
      top: i,
      right: n,
      bottom: a
    };
  }

  function vt(t, e, n) {
    return t === e ? n : t === n ? e : t;
  }

  function bt(t, e, n) {
    var i,
        a,
        r,
        o,
        s = t.borderWidth,
        l = function (t) {
      var e = t.borderSkipped,
          n = {};
      return e ? (t.horizontal ? t.base > t.x && (e = vt(e, "left", "right")) : t.base < t.y && (e = vt(e, "bottom", "top")), n[e] = !0, n) : n;
    }(t);

    return V.isObject(s) ? (i = +s.top || 0, a = +s.right || 0, r = +s.bottom || 0, o = +s.left || 0) : i = a = r = o = +s || 0, {
      t: l.top || i < 0 ? 0 : i > n ? n : i,
      r: l.right || a < 0 ? 0 : a > e ? e : a,
      b: l.bottom || r < 0 ? 0 : r > n ? n : r,
      l: l.left || o < 0 ? 0 : o > e ? e : o
    };
  }

  function xt(t, e, n) {
    var i = null === e,
        a = null === n,
        r = !(!t || i && a) && mt(t);
    return r && (i || e >= r.left && e <= r.right) && (a || n >= r.top && n <= r.bottom);
  }

  z._set("global", {
    elements: {
      rectangle: {
        backgroundColor: gt,
        borderColor: gt,
        borderSkipped: "bottom",
        borderWidth: 0
      }
    }
  });

  var yt = X.extend({
    _type: "rectangle",
    draw: function draw() {
      var t = this._chart.ctx,
          e = this._view,
          n = function (t) {
        var e = mt(t),
            n = e.right - e.left,
            i = e.bottom - e.top,
            a = bt(t, n / 2, i / 2);
        return {
          outer: {
            x: e.left,
            y: e.top,
            w: n,
            h: i
          },
          inner: {
            x: e.left + a.l,
            y: e.top + a.t,
            w: n - a.l - a.r,
            h: i - a.t - a.b
          }
        };
      }(e),
          i = n.outer,
          a = n.inner;

      t.fillStyle = e.backgroundColor, t.fillRect(i.x, i.y, i.w, i.h), i.w === a.w && i.h === a.h || (t.save(), t.beginPath(), t.rect(i.x, i.y, i.w, i.h), t.clip(), t.fillStyle = e.borderColor, t.rect(a.x, a.y, a.w, a.h), t.fill("evenodd"), t.restore());
    },
    height: function height() {
      var t = this._view;
      return t.base - t.y;
    },
    inRange: function inRange(t, e) {
      return xt(this._view, t, e);
    },
    inLabelRange: function inLabelRange(t, e) {
      var n = this._view;
      return pt(n) ? xt(n, t, null) : xt(n, null, e);
    },
    inXRange: function inXRange(t) {
      return xt(this._view, t, null);
    },
    inYRange: function inYRange(t) {
      return xt(this._view, null, t);
    },
    getCenterPoint: function getCenterPoint() {
      var t,
          e,
          n = this._view;
      return pt(n) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
        x: t,
        y: e
      };
    },
    getArea: function getArea() {
      var t = this._view;
      return pt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base);
    },
    tooltipPosition: function tooltipPosition() {
      var t = this._view;
      return {
        x: t.x,
        y: t.y
      };
    }
  }),
      _t = {},
      kt = ot,
      wt = ut,
      Mt = ft,
      St = yt;
  _t.Arc = kt, _t.Line = wt, _t.Point = Mt, _t.Rectangle = St;
  var Ct = V._deprecated,
      Pt = V.valueOrDefault;

  function At(t, e, n) {
    var i,
        a,
        r = n.barThickness,
        o = e.stackCount,
        s = e.pixels[t],
        l = V.isNullOrUndef(r) ? function (t, e) {
      var n,
          i,
          a,
          r,
          o = t._length;

      for (a = 1, r = e.length; a < r; ++a) {
        o = Math.min(o, Math.abs(e[a] - e[a - 1]));
      }

      for (a = 0, r = t.getTicks().length; a < r; ++a) {
        i = t.getPixelForTick(a), o = a > 0 ? Math.min(o, Math.abs(i - n)) : o, n = i;
      }

      return o;
    }(e.scale, e.pixels) : -1;
    return V.isNullOrUndef(r) ? (i = l * n.categoryPercentage, a = n.barPercentage) : (i = r * o, a = 1), {
      chunk: i / o,
      ratio: a,
      start: s - i / 2
    };
  }

  z._set("bar", {
    hover: {
      mode: "label"
    },
    scales: {
      xAxes: [{
        type: "category",
        offset: !0,
        gridLines: {
          offsetGridLines: !0
        }
      }],
      yAxes: [{
        type: "linear"
      }]
    }
  }), z._set("global", {
    datasets: {
      bar: {
        categoryPercentage: .8,
        barPercentage: .9
      }
    }
  });
  var Dt = nt.extend({
    dataElementType: _t.Rectangle,
    _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
    initialize: function initialize() {
      var t,
          e,
          n = this;
      nt.prototype.initialize.apply(n, arguments), (t = n.getMeta()).stack = n.getDataset().stack, t.bar = !0, e = n._getIndexScale().options, Ct("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Ct("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Ct("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Ct("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Ct("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness");
    },
    update: function update(t) {
      var e,
          n,
          i = this.getMeta().data;

      for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) {
        this.updateElement(i[e], e, t);
      }
    },
    updateElement: function updateElement(t, e, n) {
      var i = this,
          a = i.getMeta(),
          r = i.getDataset(),
          o = i._resolveDataElementOptions(t, e);

      t._xScale = i.getScaleForId(a.xAxisID), t._yScale = i.getScaleForId(a.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
        backgroundColor: o.backgroundColor,
        borderColor: o.borderColor,
        borderSkipped: o.borderSkipped,
        borderWidth: o.borderWidth,
        datasetLabel: r.label,
        label: i.chart.data.labels[e]
      }, V.isArray(r.data[e]) && (t._model.borderSkipped = null), i._updateElementGeometry(t, e, n, o), t.pivot();
    },
    _updateElementGeometry: function _updateElementGeometry(t, e, n, i) {
      var a = this,
          r = t._model,
          o = a._getValueScale(),
          s = o.getBasePixel(),
          l = o.isHorizontal(),
          u = a._ruler || a.getRuler(),
          d = a.calculateBarValuePixels(a.index, e, i),
          h = a.calculateBarIndexPixels(a.index, e, u, i);

      r.horizontal = l, r.base = n ? s : d.base, r.x = l ? n ? s : d.head : h.center, r.y = l ? h.center : n ? s : d.head, r.height = l ? h.size : void 0, r.width = l ? void 0 : h.size;
    },
    _getStacks: function _getStacks(t) {
      var e,
          n,
          i = this._getIndexScale(),
          a = i._getMatchingVisibleMetas(this._type),
          r = i.options.stacked,
          o = a.length,
          s = [];

      for (e = 0; e < o && (n = a[e], (!1 === r || -1 === s.indexOf(n.stack) || void 0 === r && void 0 === n.stack) && s.push(n.stack), n.index !== t); ++e) {
        ;
      }

      return s;
    },
    getStackCount: function getStackCount() {
      return this._getStacks().length;
    },
    getStackIndex: function getStackIndex(t, e) {
      var n = this._getStacks(t),
          i = void 0 !== e ? n.indexOf(e) : -1;

      return -1 === i ? n.length - 1 : i;
    },
    getRuler: function getRuler() {
      var t,
          e,
          n = this._getIndexScale(),
          i = [];

      for (t = 0, e = this.getMeta().data.length; t < e; ++t) {
        i.push(n.getPixelForValue(null, t, this.index));
      }

      return {
        pixels: i,
        start: n._startPixel,
        end: n._endPixel,
        stackCount: this.getStackCount(),
        scale: n
      };
    },
    calculateBarValuePixels: function calculateBarValuePixels(t, e, n) {
      var i,
          a,
          r,
          o,
          s,
          l,
          u,
          d = this.chart,
          h = this._getValueScale(),
          c = h.isHorizontal(),
          f = d.data.datasets,
          g = h._getMatchingVisibleMetas(this._type),
          p = h._parseValue(f[t].data[e]),
          m = n.minBarLength,
          v = h.options.stacked,
          b = this.getMeta().stack,
          x = void 0 === p.start ? 0 : p.max >= 0 && p.min >= 0 ? p.min : p.max,
          y = void 0 === p.start ? p.end : p.max >= 0 && p.min >= 0 ? p.max - p.min : p.min - p.max,
          _ = g.length;

      if (v || void 0 === v && void 0 !== b) for (i = 0; i < _ && (a = g[i]).index !== t; ++i) {
        a.stack === b && (r = void 0 === (u = h._parseValue(f[a.index].data[e])).start ? u.end : u.min >= 0 && u.max >= 0 ? u.max : u.min, (p.min < 0 && r < 0 || p.max >= 0 && r > 0) && (x += r));
      }
      return o = h.getPixelForValue(x), l = (s = h.getPixelForValue(x + y)) - o, void 0 !== m && Math.abs(l) < m && (l = m, s = y >= 0 && !c || y < 0 && c ? o - m : o + m), {
        size: l,
        base: o,
        head: s,
        center: s + l / 2
      };
    },
    calculateBarIndexPixels: function calculateBarIndexPixels(t, e, n, i) {
      var a = "flex" === i.barThickness ? function (t, e, n) {
        var i,
            a = e.pixels,
            r = a[t],
            o = t > 0 ? a[t - 1] : null,
            s = t < a.length - 1 ? a[t + 1] : null,
            l = n.categoryPercentage;
        return null === o && (o = r - (null === s ? e.end - e.start : s - r)), null === s && (s = r + r - o), i = r - (r - Math.min(o, s)) / 2 * l, {
          chunk: Math.abs(s - o) / 2 * l / e.stackCount,
          ratio: n.barPercentage,
          start: i
        };
      }(e, n, i) : At(e, n, i),
          r = this.getStackIndex(t, this.getMeta().stack),
          o = a.start + a.chunk * r + a.chunk / 2,
          s = Math.min(Pt(i.maxBarThickness, 1 / 0), a.chunk * a.ratio);
      return {
        base: o - s / 2,
        head: o + s / 2,
        center: o,
        size: s
      };
    },
    draw: function draw() {
      var t = this.chart,
          e = this._getValueScale(),
          n = this.getMeta().data,
          i = this.getDataset(),
          a = n.length,
          r = 0;

      for (V.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) {
        var o = e._parseValue(i.data[r]);

        isNaN(o.min) || isNaN(o.max) || n[r].draw();
      }

      V.canvas.unclipArea(t.ctx);
    },
    _resolveDataElementOptions: function _resolveDataElementOptions() {
      var t = this,
          e = V.extend({}, nt.prototype._resolveDataElementOptions.apply(t, arguments)),
          n = t._getIndexScale().options,
          i = t._getValueScale().options;

      return e.barPercentage = Pt(n.barPercentage, e.barPercentage), e.barThickness = Pt(n.barThickness, e.barThickness), e.categoryPercentage = Pt(n.categoryPercentage, e.categoryPercentage), e.maxBarThickness = Pt(n.maxBarThickness, e.maxBarThickness), e.minBarLength = Pt(i.minBarLength, e.minBarLength), e;
    }
  }),
      Tt = V.valueOrDefault,
      It = V.options.resolve;

  z._set("bubble", {
    hover: {
      mode: "single"
    },
    scales: {
      xAxes: [{
        type: "linear",
        position: "bottom",
        id: "x-axis-0"
      }],
      yAxes: [{
        type: "linear",
        position: "left",
        id: "y-axis-0"
      }]
    },
    tooltips: {
      callbacks: {
        title: function title() {
          return "";
        },
        label: function label(t, e) {
          var n = e.datasets[t.datasetIndex].label || "",
              i = e.datasets[t.datasetIndex].data[t.index];
          return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")";
        }
      }
    }
  });

  var Ft = nt.extend({
    dataElementType: _t.Point,
    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
    update: function update(t) {
      var e = this,
          n = e.getMeta().data;
      V.each(n, function (n, i) {
        e.updateElement(n, i, t);
      });
    },
    updateElement: function updateElement(t, e, n) {
      var i = this,
          a = i.getMeta(),
          r = t.custom || {},
          o = i.getScaleForId(a.xAxisID),
          s = i.getScaleForId(a.yAxisID),
          l = i._resolveDataElementOptions(t, e),
          u = i.getDataset().data[e],
          d = i.index,
          h = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == _typeof(u) ? u : NaN, e, d),
          c = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);

      t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
        backgroundColor: l.backgroundColor,
        borderColor: l.borderColor,
        borderWidth: l.borderWidth,
        hitRadius: l.hitRadius,
        pointStyle: l.pointStyle,
        rotation: l.rotation,
        radius: n ? 0 : l.radius,
        skip: r.skip || isNaN(h) || isNaN(c),
        x: h,
        y: c
      }, t.pivot();
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          n = t._options,
          i = V.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
        radius: e.radius
      }, e.backgroundColor = Tt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Tt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Tt(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius;
    },
    _resolveDataElementOptions: function _resolveDataElementOptions(t, e) {
      var n = this,
          i = n.chart,
          a = n.getDataset(),
          r = t.custom || {},
          o = a.data[e] || {},
          s = nt.prototype._resolveDataElementOptions.apply(n, arguments),
          l = {
        chart: i,
        dataIndex: e,
        dataset: a,
        datasetIndex: n.index
      };

      return n._cachedDataOpts === s && (s = V.extend({}, s)), s.radius = It([r.radius, o.r, n._config.radius, i.options.elements.point.radius], l, e), s;
    }
  }),
      Lt = V.valueOrDefault,
      Ot = Math.PI,
      Rt = 2 * Ot,
      zt = Ot / 2;

  z._set("doughnut", {
    animation: {
      animateRotate: !0,
      animateScale: !1
    },
    hover: {
      mode: "single"
    },
    legendCallback: function legendCallback(t) {
      var e,
          n,
          i,
          a = document.createElement("ul"),
          r = t.data,
          o = r.datasets,
          s = r.labels;
      if (a.setAttribute("class", t.id + "-legend"), o.length) for (e = 0, n = o[0].data.length; e < n; ++e) {
        (i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
      }
      return a.outerHTML;
    },
    legend: {
      labels: {
        generateLabels: function generateLabels(t) {
          var e = t.data;
          return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
            var a = t.getDatasetMeta(0),
                r = a.controller.getStyle(i);
            return {
              text: n,
              fillStyle: r.backgroundColor,
              strokeStyle: r.borderColor,
              lineWidth: r.borderWidth,
              hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden,
              index: i
            };
          }) : [];
        }
      },
      onClick: function onClick(t, e) {
        var n,
            i,
            a,
            r = e.index,
            o = this.chart;

        for (n = 0, i = (o.data.datasets || []).length; n < i; ++n) {
          (a = o.getDatasetMeta(n)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
        }

        o.update();
      }
    },
    cutoutPercentage: 50,
    rotation: -zt,
    circumference: Rt,
    tooltips: {
      callbacks: {
        title: function title() {
          return "";
        },
        label: function label(t, e) {
          var n = e.labels[t.index],
              i = ": " + e.datasets[t.datasetIndex].data[t.index];
          return V.isArray(n) ? (n = n.slice())[0] += i : n += i, n;
        }
      }
    }
  });

  var Nt = nt.extend({
    dataElementType: _t.Arc,
    linkScales: V.noop,
    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
    getRingIndex: function getRingIndex(t) {
      for (var e = 0, n = 0; n < t; ++n) {
        this.chart.isDatasetVisible(n) && ++e;
      }

      return e;
    },
    update: function update(t) {
      var e,
          n,
          i,
          a,
          r = this,
          o = r.chart,
          s = o.chartArea,
          l = o.options,
          u = 1,
          d = 1,
          h = 0,
          c = 0,
          f = r.getMeta(),
          g = f.data,
          p = l.cutoutPercentage / 100 || 0,
          m = l.circumference,
          v = r._getRingWeight(r.index);

      if (m < Rt) {
        var b = l.rotation % Rt,
            x = (b += b >= Ot ? -Rt : b < -Ot ? Rt : 0) + m,
            y = Math.cos(b),
            _ = Math.sin(b),
            k = Math.cos(x),
            w = Math.sin(x),
            M = b <= 0 && x >= 0 || x >= Rt,
            S = b <= zt && x >= zt || x >= Rt + zt,
            C = b <= -zt && x >= -zt || x >= Ot + zt,
            P = b === -Ot || x >= Ot ? -1 : Math.min(y, y * p, k, k * p),
            A = C ? -1 : Math.min(_, _ * p, w, w * p),
            D = M ? 1 : Math.max(y, y * p, k, k * p),
            T = S ? 1 : Math.max(_, _ * p, w, w * p);

        u = (D - P) / 2, d = (T - A) / 2, h = -(D + P) / 2, c = -(T + A) / 2;
      }

      for (i = 0, a = g.length; i < a; ++i) {
        g[i]._options = r._resolveDataElementOptions(g[i], i);
      }

      for (o.borderWidth = r.getMaxBorderWidth(), e = (s.right - s.left - o.borderWidth) / u, n = (s.bottom - s.top - o.borderWidth) / d, o.outerRadius = Math.max(Math.min(e, n) / 2, 0), o.innerRadius = Math.max(o.outerRadius * p, 0), o.radiusLength = (o.outerRadius - o.innerRadius) / (r._getVisibleDatasetWeightTotal() || 1), o.offsetX = h * o.outerRadius, o.offsetY = c * o.outerRadius, f.total = r.calculateTotal(), r.outerRadius = o.outerRadius - o.radiusLength * r._getRingWeightOffset(r.index), r.innerRadius = Math.max(r.outerRadius - o.radiusLength * v, 0), i = 0, a = g.length; i < a; ++i) {
        r.updateElement(g[i], i, t);
      }
    },
    updateElement: function updateElement(t, e, n) {
      var i = this,
          a = i.chart,
          r = a.chartArea,
          o = a.options,
          s = o.animation,
          l = (r.left + r.right) / 2,
          u = (r.top + r.bottom) / 2,
          d = o.rotation,
          h = o.rotation,
          c = i.getDataset(),
          f = n && s.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(c.data[e]) * (o.circumference / Rt),
          g = n && s.animateScale ? 0 : i.innerRadius,
          p = n && s.animateScale ? 0 : i.outerRadius,
          m = t._options || {};
      V.extend(t, {
        _datasetIndex: i.index,
        _index: e,
        _model: {
          backgroundColor: m.backgroundColor,
          borderColor: m.borderColor,
          borderWidth: m.borderWidth,
          borderAlign: m.borderAlign,
          x: l + a.offsetX,
          y: u + a.offsetY,
          startAngle: d,
          endAngle: h,
          circumference: f,
          outerRadius: p,
          innerRadius: g,
          label: V.valueAtIndexOrDefault(c.label, e, a.data.labels[e])
        }
      });
      var v = t._model;
      n && s.animateRotate || (v.startAngle = 0 === e ? o.rotation : i.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot();
    },
    calculateTotal: function calculateTotal() {
      var t,
          e = this.getDataset(),
          n = this.getMeta(),
          i = 0;
      return V.each(n.data, function (n, a) {
        t = e.data[a], isNaN(t) || n.hidden || (i += Math.abs(t));
      }), i;
    },
    calculateCircumference: function calculateCircumference(t) {
      var e = this.getMeta().total;
      return e > 0 && !isNaN(t) ? Rt * (Math.abs(t) / e) : 0;
    },
    getMaxBorderWidth: function getMaxBorderWidth(t) {
      var e,
          n,
          i,
          a,
          r,
          o,
          s,
          l,
          u = 0,
          d = this.chart;
      if (!t) for (e = 0, n = d.data.datasets.length; e < n; ++e) {
        if (d.isDatasetVisible(e)) {
          t = (i = d.getDatasetMeta(e)).data, e !== this.index && (r = i.controller);
          break;
        }
      }
      if (!t) return 0;

      for (e = 0, n = t.length; e < n; ++e) {
        a = t[e], r ? (r._configure(), o = r._resolveDataElementOptions(a, e)) : o = a._options, "inner" !== o.borderAlign && (s = o.borderWidth, u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u);
      }

      return u;
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          n = t._options,
          i = V.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth
      }, e.backgroundColor = Lt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Lt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Lt(n.hoverBorderWidth, n.borderWidth);
    },
    _getRingWeightOffset: function _getRingWeightOffset(t) {
      for (var e = 0, n = 0; n < t; ++n) {
        this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
      }

      return e;
    },
    _getRingWeight: function _getRingWeight(t) {
      return Math.max(Lt(this.chart.data.datasets[t].weight, 1), 0);
    },
    _getVisibleDatasetWeightTotal: function _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length);
    }
  });
  z._set("horizontalBar", {
    hover: {
      mode: "index",
      axis: "y"
    },
    scales: {
      xAxes: [{
        type: "linear",
        position: "bottom"
      }],
      yAxes: [{
        type: "category",
        position: "left",
        offset: !0,
        gridLines: {
          offsetGridLines: !0
        }
      }]
    },
    elements: {
      rectangle: {
        borderSkipped: "left"
      }
    },
    tooltips: {
      mode: "index",
      axis: "y"
    }
  }), z._set("global", {
    datasets: {
      horizontalBar: {
        categoryPercentage: .8,
        barPercentage: .9
      }
    }
  });
  var Bt = Dt.extend({
    _getValueScaleId: function _getValueScaleId() {
      return this.getMeta().xAxisID;
    },
    _getIndexScaleId: function _getIndexScaleId() {
      return this.getMeta().yAxisID;
    }
  }),
      Et = V.valueOrDefault,
      Wt = V.options.resolve,
      Vt = V.canvas._isPointInArea;

  function Ht(t, e) {
    var n = t && t.options.ticks || {},
        i = n.reverse,
        a = void 0 === n.min ? e : 0,
        r = void 0 === n.max ? e : 0;
    return {
      start: i ? r : a,
      end: i ? a : r
    };
  }

  function jt(t, e, n) {
    var i = n / 2,
        a = Ht(t, i),
        r = Ht(e, i);
    return {
      top: r.end,
      right: a.end,
      bottom: r.start,
      left: a.start
    };
  }

  function qt(t) {
    var e, n, i, a;
    return V.isObject(t) ? (e = t.top, n = t.right, i = t.bottom, a = t.left) : e = n = i = a = t, {
      top: e,
      right: n,
      bottom: i,
      left: a
    };
  }

  z._set("line", {
    showLines: !0,
    spanGaps: !1,
    hover: {
      mode: "label"
    },
    scales: {
      xAxes: [{
        type: "category",
        id: "x-axis-0"
      }],
      yAxes: [{
        type: "linear",
        id: "y-axis-0"
      }]
    }
  });

  var Ut = nt.extend({
    datasetElementType: _t.Line,
    dataElementType: _t.Point,
    _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
    _dataElementOptions: {
      backgroundColor: "pointBackgroundColor",
      borderColor: "pointBorderColor",
      borderWidth: "pointBorderWidth",
      hitRadius: "pointHitRadius",
      hoverBackgroundColor: "pointHoverBackgroundColor",
      hoverBorderColor: "pointHoverBorderColor",
      hoverBorderWidth: "pointHoverBorderWidth",
      hoverRadius: "pointHoverRadius",
      pointStyle: "pointStyle",
      radius: "pointRadius",
      rotation: "pointRotation"
    },
    update: function update(t) {
      var e,
          n,
          i = this,
          a = i.getMeta(),
          r = a.dataset,
          o = a.data || [],
          s = i.chart.options,
          l = i._config,
          u = i._showLine = Et(l.showLine, s.showLines);

      for (i._xScale = i.getScaleForId(a.xAxisID), i._yScale = i.getScaleForId(a.yAxisID), u && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = i._yScale, r._datasetIndex = i.index, r._children = o, r._model = i._resolveDatasetElementOptions(r), r.pivot()), e = 0, n = o.length; e < n; ++e) {
        i.updateElement(o[e], e, t);
      }

      for (u && 0 !== r._model.tension && i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e) {
        o[e].pivot();
      }
    },
    updateElement: function updateElement(t, e, n) {
      var i,
          a,
          r = this,
          o = r.getMeta(),
          s = t.custom || {},
          l = r.getDataset(),
          u = r.index,
          d = l.data[e],
          h = r._xScale,
          c = r._yScale,
          f = o.dataset._model,
          g = r._resolveDataElementOptions(t, e);

      i = h.getPixelForValue("object" == _typeof(d) ? d : NaN, e, u), a = n ? c.getBasePixel() : r.calculatePointY(d, e, u), t._xScale = h, t._yScale = c, t._options = g, t._datasetIndex = u, t._index = e, t._model = {
        x: i,
        y: a,
        skip: s.skip || isNaN(i) || isNaN(a),
        radius: g.radius,
        pointStyle: g.pointStyle,
        rotation: g.rotation,
        backgroundColor: g.backgroundColor,
        borderColor: g.borderColor,
        borderWidth: g.borderWidth,
        tension: Et(s.tension, f ? f.tension : 0),
        steppedLine: !!f && f.steppedLine,
        hitRadius: g.hitRadius
      };
    },
    _resolveDatasetElementOptions: function _resolveDatasetElementOptions(t) {
      var e = this,
          n = e._config,
          i = t.custom || {},
          a = e.chart.options,
          r = a.elements.line,
          o = nt.prototype._resolveDatasetElementOptions.apply(e, arguments);

      return o.spanGaps = Et(n.spanGaps, a.spanGaps), o.tension = Et(n.lineTension, r.tension), o.steppedLine = Wt([i.steppedLine, n.steppedLine, r.stepped]), o.clip = qt(Et(n.clip, jt(e._xScale, e._yScale, o.borderWidth))), o;
    },
    calculatePointY: function calculatePointY(t, e, n) {
      var i,
          a,
          r,
          o,
          s,
          l,
          u,
          d = this.chart,
          h = this._yScale,
          c = 0,
          f = 0;

      if (h.options.stacked) {
        for (s = +h.getRightValue(t), u = (l = d._getSortedVisibleDatasetMetas()).length, i = 0; i < u && (r = l[i]).index !== n; ++i) {
          a = d.data.datasets[r.index], "line" === r.type && r.yAxisID === h.id && ((o = +h.getRightValue(a.data[e])) < 0 ? f += o || 0 : c += o || 0);
        }

        return s < 0 ? h.getPixelForValue(f + s) : h.getPixelForValue(c + s);
      }

      return h.getPixelForValue(t);
    },
    updateBezierControlPoints: function updateBezierControlPoints() {
      var t,
          e,
          n,
          i,
          a = this.chart,
          r = this.getMeta(),
          o = r.dataset._model,
          s = a.chartArea,
          l = r.data || [];

      function u(t, e, n) {
        return Math.max(Math.min(t, n), e);
      }

      if (o.spanGaps && (l = l.filter(function (t) {
        return !t._model.skip;
      })), "monotone" === o.cubicInterpolationMode) V.splineCurveMonotone(l);else for (t = 0, e = l.length; t < e; ++t) {
        n = l[t]._model, i = V.splineCurve(V.previousItem(l, t)._model, n, V.nextItem(l, t)._model, o.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
      }
      if (a.options.elements.line.capBezierPoints) for (t = 0, e = l.length; t < e; ++t) {
        n = l[t]._model, Vt(n, s) && (t > 0 && Vt(l[t - 1]._model, s) && (n.controlPointPreviousX = u(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = u(n.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && Vt(l[t + 1]._model, s) && (n.controlPointNextX = u(n.controlPointNextX, s.left, s.right), n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom)));
      }
    },
    draw: function draw() {
      var t,
          e = this.chart,
          n = this.getMeta(),
          i = n.data || [],
          a = e.chartArea,
          r = e.canvas,
          o = 0,
          s = i.length;

      for (this._showLine && (t = n.dataset._model.clip, V.canvas.clipArea(e.ctx, {
        left: !1 === t.left ? 0 : a.left - t.left,
        right: !1 === t.right ? r.width : a.right + t.right,
        top: !1 === t.top ? 0 : a.top - t.top,
        bottom: !1 === t.bottom ? r.height : a.bottom + t.bottom
      }), n.dataset.draw(), V.canvas.unclipArea(e.ctx)); o < s; ++o) {
        i[o].draw(a);
      }
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          n = t._options,
          i = V.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
        radius: e.radius
      }, e.backgroundColor = Et(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Et(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Et(n.hoverBorderWidth, n.borderWidth), e.radius = Et(n.hoverRadius, n.radius);
    }
  }),
      Yt = V.options.resolve;

  z._set("polarArea", {
    scale: {
      type: "radialLinear",
      angleLines: {
        display: !1
      },
      gridLines: {
        circular: !0
      },
      pointLabels: {
        display: !1
      },
      ticks: {
        beginAtZero: !0
      }
    },
    animation: {
      animateRotate: !0,
      animateScale: !0
    },
    startAngle: -.5 * Math.PI,
    legendCallback: function legendCallback(t) {
      var e,
          n,
          i,
          a = document.createElement("ul"),
          r = t.data,
          o = r.datasets,
          s = r.labels;
      if (a.setAttribute("class", t.id + "-legend"), o.length) for (e = 0, n = o[0].data.length; e < n; ++e) {
        (i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
      }
      return a.outerHTML;
    },
    legend: {
      labels: {
        generateLabels: function generateLabels(t) {
          var e = t.data;
          return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
            var a = t.getDatasetMeta(0),
                r = a.controller.getStyle(i);
            return {
              text: n,
              fillStyle: r.backgroundColor,
              strokeStyle: r.borderColor,
              lineWidth: r.borderWidth,
              hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden,
              index: i
            };
          }) : [];
        }
      },
      onClick: function onClick(t, e) {
        var n,
            i,
            a,
            r = e.index,
            o = this.chart;

        for (n = 0, i = (o.data.datasets || []).length; n < i; ++n) {
          (a = o.getDatasetMeta(n)).data[r].hidden = !a.data[r].hidden;
        }

        o.update();
      }
    },
    tooltips: {
      callbacks: {
        title: function title() {
          return "";
        },
        label: function label(t, e) {
          return e.labels[t.index] + ": " + t.yLabel;
        }
      }
    }
  });

  var Gt = nt.extend({
    dataElementType: _t.Arc,
    linkScales: V.noop,
    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
    _getIndexScaleId: function _getIndexScaleId() {
      return this.chart.scale.id;
    },
    _getValueScaleId: function _getValueScaleId() {
      return this.chart.scale.id;
    },
    update: function update(t) {
      var e,
          n,
          i,
          a = this,
          r = a.getDataset(),
          o = a.getMeta(),
          s = a.chart.options.startAngle || 0,
          l = a._starts = [],
          u = a._angles = [],
          d = o.data;

      for (a._updateRadius(), o.count = a.countVisibleElements(), e = 0, n = r.data.length; e < n; e++) {
        l[e] = s, i = a._computeAngle(e), u[e] = i, s += i;
      }

      for (e = 0, n = d.length; e < n; ++e) {
        d[e]._options = a._resolveDataElementOptions(d[e], e), a.updateElement(d[e], e, t);
      }
    },
    _updateRadius: function _updateRadius() {
      var t = this,
          e = t.chart,
          n = e.chartArea,
          i = e.options,
          a = Math.min(n.right - n.left, n.bottom - n.top);
      e.outerRadius = Math.max(a / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength;
    },
    updateElement: function updateElement(t, e, n) {
      var i = this,
          a = i.chart,
          r = i.getDataset(),
          o = a.options,
          s = o.animation,
          l = a.scale,
          u = a.data.labels,
          d = l.xCenter,
          h = l.yCenter,
          c = o.startAngle,
          f = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
          g = i._starts[e],
          p = g + (t.hidden ? 0 : i._angles[e]),
          m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
          v = t._options || {};
      V.extend(t, {
        _datasetIndex: i.index,
        _index: e,
        _scale: l,
        _model: {
          backgroundColor: v.backgroundColor,
          borderColor: v.borderColor,
          borderWidth: v.borderWidth,
          borderAlign: v.borderAlign,
          x: d,
          y: h,
          innerRadius: 0,
          outerRadius: n ? m : f,
          startAngle: n && s.animateRotate ? c : g,
          endAngle: n && s.animateRotate ? c : p,
          label: V.valueAtIndexOrDefault(u, e, u[e])
        }
      }), t.pivot();
    },
    countVisibleElements: function countVisibleElements() {
      var t = this.getDataset(),
          e = this.getMeta(),
          n = 0;
      return V.each(e.data, function (e, i) {
        isNaN(t.data[i]) || e.hidden || n++;
      }), n;
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          n = t._options,
          i = V.getHoverColor,
          a = V.valueOrDefault;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth
      }, e.backgroundColor = a(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = a(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = a(n.hoverBorderWidth, n.borderWidth);
    },
    _computeAngle: function _computeAngle(t) {
      var e = this,
          n = this.getMeta().count,
          i = e.getDataset(),
          a = e.getMeta();
      if (isNaN(i.data[t]) || a.data[t].hidden) return 0;
      var r = {
        chart: e.chart,
        dataIndex: t,
        dataset: i,
        datasetIndex: e.index
      };
      return Yt([e.chart.options.elements.arc.angle, 2 * Math.PI / n], r, t);
    }
  });
  z._set("pie", V.clone(z.doughnut)), z._set("pie", {
    cutoutPercentage: 0
  });
  var Xt = Nt,
      Kt = V.valueOrDefault;

  z._set("radar", {
    spanGaps: !1,
    scale: {
      type: "radialLinear"
    },
    elements: {
      line: {
        fill: "start",
        tension: 0
      }
    }
  });

  var Zt = nt.extend({
    datasetElementType: _t.Line,
    dataElementType: _t.Point,
    linkScales: V.noop,
    _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
    _dataElementOptions: {
      backgroundColor: "pointBackgroundColor",
      borderColor: "pointBorderColor",
      borderWidth: "pointBorderWidth",
      hitRadius: "pointHitRadius",
      hoverBackgroundColor: "pointHoverBackgroundColor",
      hoverBorderColor: "pointHoverBorderColor",
      hoverBorderWidth: "pointHoverBorderWidth",
      hoverRadius: "pointHoverRadius",
      pointStyle: "pointStyle",
      radius: "pointRadius",
      rotation: "pointRotation"
    },
    _getIndexScaleId: function _getIndexScaleId() {
      return this.chart.scale.id;
    },
    _getValueScaleId: function _getValueScaleId() {
      return this.chart.scale.id;
    },
    update: function update(t) {
      var e,
          n,
          i = this,
          a = i.getMeta(),
          r = a.dataset,
          o = a.data || [],
          s = i.chart.scale,
          l = i._config;

      for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = i.index, r._children = o, r._loop = !0, r._model = i._resolveDatasetElementOptions(r), r.pivot(), e = 0, n = o.length; e < n; ++e) {
        i.updateElement(o[e], e, t);
      }

      for (i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e) {
        o[e].pivot();
      }
    },
    updateElement: function updateElement(t, e, n) {
      var i = this,
          a = t.custom || {},
          r = i.getDataset(),
          o = i.chart.scale,
          s = o.getPointPositionForValue(e, r.data[e]),
          l = i._resolveDataElementOptions(t, e),
          u = i.getMeta().dataset._model,
          d = n ? o.xCenter : s.x,
          h = n ? o.yCenter : s.y;

      t._scale = o, t._options = l, t._datasetIndex = i.index, t._index = e, t._model = {
        x: d,
        y: h,
        skip: a.skip || isNaN(d) || isNaN(h),
        radius: l.radius,
        pointStyle: l.pointStyle,
        rotation: l.rotation,
        backgroundColor: l.backgroundColor,
        borderColor: l.borderColor,
        borderWidth: l.borderWidth,
        tension: Kt(a.tension, u ? u.tension : 0),
        hitRadius: l.hitRadius
      };
    },
    _resolveDatasetElementOptions: function _resolveDatasetElementOptions() {
      var t = this,
          e = t._config,
          n = t.chart.options,
          i = nt.prototype._resolveDatasetElementOptions.apply(t, arguments);

      return i.spanGaps = Kt(e.spanGaps, n.spanGaps), i.tension = Kt(e.lineTension, n.elements.line.tension), i;
    },
    updateBezierControlPoints: function updateBezierControlPoints() {
      var t,
          e,
          n,
          i,
          a = this.getMeta(),
          r = this.chart.chartArea,
          o = a.data || [];

      function s(t, e, n) {
        return Math.max(Math.min(t, n), e);
      }

      for (a.dataset._model.spanGaps && (o = o.filter(function (t) {
        return !t._model.skip;
      })), t = 0, e = o.length; t < e; ++t) {
        n = o[t]._model, i = V.splineCurve(V.previousItem(o, t, !0)._model, n, V.nextItem(o, t, !0)._model, n.tension), n.controlPointPreviousX = s(i.previous.x, r.left, r.right), n.controlPointPreviousY = s(i.previous.y, r.top, r.bottom), n.controlPointNextX = s(i.next.x, r.left, r.right), n.controlPointNextY = s(i.next.y, r.top, r.bottom);
      }
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          n = t._options,
          i = V.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
        radius: e.radius
      }, e.backgroundColor = Kt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Kt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Kt(n.hoverBorderWidth, n.borderWidth), e.radius = Kt(n.hoverRadius, n.radius);
    }
  });
  z._set("scatter", {
    hover: {
      mode: "single"
    },
    scales: {
      xAxes: [{
        id: "x-axis-1",
        type: "linear",
        position: "bottom"
      }],
      yAxes: [{
        id: "y-axis-1",
        type: "linear",
        position: "left"
      }]
    },
    tooltips: {
      callbacks: {
        title: function title() {
          return "";
        },
        label: function label(t) {
          return "(" + t.xLabel + ", " + t.yLabel + ")";
        }
      }
    }
  }), z._set("global", {
    datasets: {
      scatter: {
        showLine: !1
      }
    }
  });
  var $t = {
    bar: Dt,
    bubble: Ft,
    doughnut: Nt,
    horizontalBar: Bt,
    line: Ut,
    polarArea: Gt,
    pie: Xt,
    radar: Zt,
    scatter: Ut
  };

  function Jt(t, e) {
    return t["native"] ? {
      x: t.x,
      y: t.y
    } : V.getRelativePosition(t, e);
  }

  function Qt(t, e) {
    var n,
        i,
        a,
        r,
        o,
        s,
        l = t._getSortedVisibleDatasetMetas();

    for (i = 0, r = l.length; i < r; ++i) {
      for (a = 0, o = (n = l[i].data).length; a < o; ++a) {
        (s = n[a])._view.skip || e(s);
      }
    }
  }

  function te(t, e) {
    var n = [];
    return Qt(t, function (t) {
      t.inRange(e.x, e.y) && n.push(t);
    }), n;
  }

  function ee(t, e, n, i) {
    var a = Number.POSITIVE_INFINITY,
        r = [];
    return Qt(t, function (t) {
      if (!n || t.inRange(e.x, e.y)) {
        var o = t.getCenterPoint(),
            s = i(e, o);
        s < a ? (r = [t], a = s) : s === a && r.push(t);
      }
    }), r;
  }

  function ne(t) {
    var e = -1 !== t.indexOf("x"),
        n = -1 !== t.indexOf("y");
    return function (t, i) {
      var a = e ? Math.abs(t.x - i.x) : 0,
          r = n ? Math.abs(t.y - i.y) : 0;
      return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
    };
  }

  function ie(t, e, n) {
    var i = Jt(e, t);
    n.axis = n.axis || "x";
    var a = ne(n.axis),
        r = n.intersect ? te(t, i) : ee(t, i, !1, a),
        o = [];
    return r.length ? (t._getSortedVisibleDatasetMetas().forEach(function (t) {
      var e = t.data[r[0]._index];
      e && !e._view.skip && o.push(e);
    }), o) : [];
  }

  var ae = {
    modes: {
      single: function single(t, e) {
        var n = Jt(e, t),
            i = [];
        return Qt(t, function (t) {
          if (t.inRange(n.x, n.y)) return i.push(t), i;
        }), i.slice(0, 1);
      },
      label: ie,
      index: ie,
      dataset: function dataset(t, e, n) {
        var i = Jt(e, t);
        n.axis = n.axis || "xy";
        var a = ne(n.axis),
            r = n.intersect ? te(t, i) : ee(t, i, !1, a);
        return r.length > 0 && (r = t.getDatasetMeta(r[0]._datasetIndex).data), r;
      },
      "x-axis": function xAxis(t, e) {
        return ie(t, e, {
          intersect: !1
        });
      },
      point: function point(t, e) {
        return te(t, Jt(e, t));
      },
      nearest: function nearest(t, e, n) {
        var i = Jt(e, t);
        n.axis = n.axis || "xy";
        var a = ne(n.axis);
        return ee(t, i, n.intersect, a);
      },
      x: function x(t, e, n) {
        var i = Jt(e, t),
            a = [],
            r = !1;
        return Qt(t, function (t) {
          t.inXRange(i.x) && a.push(t), t.inRange(i.x, i.y) && (r = !0);
        }), n.intersect && !r && (a = []), a;
      },
      y: function y(t, e, n) {
        var i = Jt(e, t),
            a = [],
            r = !1;
        return Qt(t, function (t) {
          t.inYRange(i.y) && a.push(t), t.inRange(i.x, i.y) && (r = !0);
        }), n.intersect && !r && (a = []), a;
      }
    }
  },
      re = V.extend;

  function oe(t, e) {
    return V.where(t, function (t) {
      return t.pos === e;
    });
  }

  function se(t, e) {
    return t.sort(function (t, n) {
      var i = e ? n : t,
          a = e ? t : n;
      return i.weight === a.weight ? i.index - a.index : i.weight - a.weight;
    });
  }

  function le(t, e, n, i) {
    return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
  }

  function ue(t, e, n) {
    var i,
        a,
        r = n.box,
        o = t.maxPadding;

    if (n.size && (t[n.pos] -= n.size), n.size = n.horizontal ? r.height : r.width, t[n.pos] += n.size, r.getPadding) {
      var s = r.getPadding();
      o.top = Math.max(o.top, s.top), o.left = Math.max(o.left, s.left), o.bottom = Math.max(o.bottom, s.bottom), o.right = Math.max(o.right, s.right);
    }

    if (i = e.outerWidth - le(o, t, "left", "right"), a = e.outerHeight - le(o, t, "top", "bottom"), i !== t.w || a !== t.h) return t.w = i, t.h = a, n.horizontal ? i !== t.w : a !== t.h;
  }

  function de(t, e) {
    var n = e.maxPadding;

    function i(t) {
      var i = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      return t.forEach(function (t) {
        i[t] = Math.max(e[t], n[t]);
      }), i;
    }

    return i(t ? ["left", "right"] : ["top", "bottom"]);
  }

  function he(t, e, n) {
    var i,
        a,
        r,
        o,
        s,
        l,
        u = [];

    for (i = 0, a = t.length; i < a; ++i) {
      (o = (r = t[i]).box).update(r.width || e.w, r.height || e.h, de(r.horizontal, e)), ue(e, n, r) && (l = !0, u.length && (s = !0)), o.fullWidth || u.push(r);
    }

    return s && he(u, e, n) || l;
  }

  function ce(t, e, n) {
    var i,
        a,
        r,
        o,
        s = n.padding,
        l = e.x,
        u = e.y;

    for (i = 0, a = t.length; i < a; ++i) {
      o = (r = t[i]).box, r.horizontal ? (o.left = o.fullWidth ? s.left : e.left, o.right = o.fullWidth ? n.outerWidth - s.right : e.left + e.w, o.top = u, o.bottom = u + o.height, o.width = o.right - o.left, u = o.bottom) : (o.left = l, o.right = l + o.width, o.top = e.top, o.bottom = e.top + e.h, o.height = o.bottom - o.top, l = o.right);
    }

    e.x = l, e.y = u;
  }

  z._set("global", {
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }
  });

  var fe,
      ge = {
    defaults: {},
    addBox: function addBox(t, e) {
      t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () {
        return [{
          z: 0,
          draw: function draw() {
            e.draw.apply(e, arguments);
          }
        }];
      }, t.boxes.push(e);
    },
    removeBox: function removeBox(t, e) {
      var n = t.boxes ? t.boxes.indexOf(e) : -1;
      -1 !== n && t.boxes.splice(n, 1);
    },
    configure: function configure(t, e, n) {
      for (var i, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) {
        i = a[o], n.hasOwnProperty(i) && (e[i] = n[i]);
      }
    },
    update: function update(t, e, n) {
      if (t) {
        var i = t.options.layout || {},
            a = V.options.toPadding(i.padding),
            r = e - a.width,
            o = n - a.height,
            s = function (t) {
          var e = function (t) {
            var e,
                n,
                i,
                a = [];

            for (e = 0, n = (t || []).length; e < n; ++e) {
              i = t[e], a.push({
                index: e,
                box: i,
                pos: i.position,
                horizontal: i.isHorizontal(),
                weight: i.weight
              });
            }

            return a;
          }(t),
              n = se(oe(e, "left"), !0),
              i = se(oe(e, "right")),
              a = se(oe(e, "top"), !0),
              r = se(oe(e, "bottom"));

          return {
            leftAndTop: n.concat(a),
            rightAndBottom: i.concat(r),
            chartArea: oe(e, "chartArea"),
            vertical: n.concat(i),
            horizontal: a.concat(r)
          };
        }(t.boxes),
            l = s.vertical,
            u = s.horizontal,
            d = Object.freeze({
          outerWidth: e,
          outerHeight: n,
          padding: a,
          availableWidth: r,
          vBoxMaxWidth: r / 2 / l.length,
          hBoxMaxHeight: o / 2
        }),
            h = re({
          maxPadding: re({}, a),
          w: r,
          h: o,
          x: a.left,
          y: a.top
        }, a);

        !function (t, e) {
          var n, i, a;

          for (n = 0, i = t.length; n < i; ++n) {
            (a = t[n]).width = a.horizontal ? a.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, a.height = a.horizontal && e.hBoxMaxHeight;
          }
        }(l.concat(u), d), he(l, h, d), he(u, h, d) && he(l, h, d), function (t) {
          var e = t.maxPadding;

          function n(n) {
            var i = Math.max(e[n] - t[n], 0);
            return t[n] += i, i;
          }

          t.y += n("top"), t.x += n("left"), n("right"), n("bottom");
        }(h), ce(s.leftAndTop, h, d), h.x += h.w, h.y += h.h, ce(s.rightAndBottom, h, d), t.chartArea = {
          left: h.left,
          top: h.top,
          right: h.left + h.w,
          bottom: h.top + h.h
        }, V.each(s.chartArea, function (e) {
          var n = e.box;
          re(n, t.chartArea), n.update(h.w, h.h);
        });
      }
    }
  },
      pe = (fe = Object.freeze({
    __proto__: null,
    "default": "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"
  })) && fe["default"] || fe,
      me = "$chartjs",
      ve = "chartjs-size-monitor",
      be = "chartjs-render-monitor",
      xe = "chartjs-render-animation",
      ye = ["animationstart", "webkitAnimationStart"],
      _e = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
  };

  function ke(t, e) {
    var n = V.getStyle(t, e),
        i = n && n.match(/^(\d+)(\.\d+)?px$/);
    return i ? Number(i[1]) : void 0;
  }

  var we = !!function () {
    var t = !1;

    try {
      var e = Object.defineProperty({}, "passive", {
        get: function get() {
          t = !0;
        }
      });
      window.addEventListener("e", null, e);
    } catch (t) {}

    return t;
  }() && {
    passive: !0
  };

  function Me(t, e, n) {
    t.addEventListener(e, n, we);
  }

  function Se(t, e, n) {
    t.removeEventListener(e, n, we);
  }

  function Ce(t, e, n, i, a) {
    return {
      type: t,
      chart: e,
      "native": a || null,
      x: void 0 !== n ? n : null,
      y: void 0 !== i ? i : null
    };
  }

  function Pe(t) {
    var e = document.createElement("div");
    return e.className = t || "", e;
  }

  function Ae(t, e, n) {
    var i,
        a,
        r,
        o,
        s = t[me] || (t[me] = {}),
        l = s.resizer = function (t) {
      var e = Pe(ve),
          n = Pe(ve + "-expand"),
          i = Pe(ve + "-shrink");
      n.appendChild(Pe()), i.appendChild(Pe()), e.appendChild(n), e.appendChild(i), e._reset = function () {
        n.scrollLeft = 1e6, n.scrollTop = 1e6, i.scrollLeft = 1e6, i.scrollTop = 1e6;
      };

      var a = function a() {
        e._reset(), t();
      };

      return Me(n, "scroll", a.bind(n, "expand")), Me(i, "scroll", a.bind(i, "shrink")), e;
    }((i = function i() {
      if (s.resizer) {
        var i = n.options.maintainAspectRatio && t.parentNode,
            a = i ? i.clientWidth : 0;
        e(Ce("resize", n)), i && i.clientWidth < a && n.canvas && e(Ce("resize", n));
      }
    }, r = !1, o = [], function () {
      o = Array.prototype.slice.call(arguments), a = a || this, r || (r = !0, V.requestAnimFrame.call(window, function () {
        r = !1, i.apply(a, o);
      }));
    }));

    !function (t, e) {
      var n = t[me] || (t[me] = {}),
          i = n.renderProxy = function (t) {
        t.animationName === xe && e();
      };

      V.each(ye, function (e) {
        Me(t, e, i);
      }), n.reflow = !!t.offsetParent, t.classList.add(be);
    }(t, function () {
      if (s.resizer) {
        var e = t.parentNode;
        e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset();
      }
    });
  }

  function De(t) {
    var e = t[me] || {},
        n = e.resizer;
    delete e.resizer, function (t) {
      var e = t[me] || {},
          n = e.renderProxy;
      n && (V.each(ye, function (e) {
        Se(t, e, n);
      }), delete e.renderProxy), t.classList.remove(be);
    }(t), n && n.parentNode && n.parentNode.removeChild(n);
  }

  var Te = {
    disableCSSInjection: !1,
    _enabled: "undefined" != typeof window && "undefined" != typeof document,
    _ensureLoaded: function _ensureLoaded(t) {
      if (!this.disableCSSInjection) {
        var e = t.getRootNode ? t.getRootNode() : document;
        !function (t, e) {
          var n = t[me] || (t[me] = {});

          if (!n.containsStyles) {
            n.containsStyles = !0, e = "/* Chart.js */\n" + e;
            var i = document.createElement("style");
            i.setAttribute("type", "text/css"), i.appendChild(document.createTextNode(e)), t.appendChild(i);
          }
        }(e.host ? e : document.head, pe);
      }
    },
    acquireContext: function acquireContext(t, e) {
      "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
      var n = t && t.getContext && t.getContext("2d");
      return n && n.canvas === t ? (this._ensureLoaded(t), function (t, e) {
        var n = t.style,
            i = t.getAttribute("height"),
            a = t.getAttribute("width");

        if (t[me] = {
          initial: {
            height: i,
            width: a,
            style: {
              display: n.display,
              height: n.height,
              width: n.width
            }
          }
        }, n.display = n.display || "block", null === a || "" === a) {
          var r = ke(t, "width");
          void 0 !== r && (t.width = r);
        }

        if (null === i || "" === i) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);else {
          var o = ke(t, "height");
          void 0 !== r && (t.height = o);
        }
      }(t, e), n) : null;
    },
    releaseContext: function releaseContext(t) {
      var e = t.canvas;

      if (e[me]) {
        var n = e[me].initial;
        ["height", "width"].forEach(function (t) {
          var i = n[t];
          V.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i);
        }), V.each(n.style || {}, function (t, n) {
          e.style[n] = t;
        }), e.width = e.width, delete e[me];
      }
    },
    addEventListener: function addEventListener(t, e, n) {
      var i = t.canvas;

      if ("resize" !== e) {
        var a = n[me] || (n[me] = {});
        Me(i, e, (a.proxies || (a.proxies = {}))[t.id + "_" + e] = function (e) {
          n(function (t, e) {
            var n = _e[t.type] || t.type,
                i = V.getRelativePosition(t, e);
            return Ce(n, e, i.x, i.y, t);
          }(e, t));
        });
      } else Ae(i, n, t);
    },
    removeEventListener: function removeEventListener(t, e, n) {
      var i = t.canvas;

      if ("resize" !== e) {
        var a = ((n[me] || {}).proxies || {})[t.id + "_" + e];
        a && Se(i, e, a);
      } else De(i);
    }
  };
  V.addEvent = Me, V.removeEvent = Se;
  var Ie = Te._enabled ? Te : {
    acquireContext: function acquireContext(t) {
      return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
    }
  },
      Fe = V.extend({
    initialize: function initialize() {},
    acquireContext: function acquireContext() {},
    releaseContext: function releaseContext() {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {}
  }, Ie);

  z._set("global", {
    plugins: {}
  });

  var Le = {
    _plugins: [],
    _cacheId: 0,
    register: function register(t) {
      var e = this._plugins;
      [].concat(t).forEach(function (t) {
        -1 === e.indexOf(t) && e.push(t);
      }), this._cacheId++;
    },
    unregister: function unregister(t) {
      var e = this._plugins;
      [].concat(t).forEach(function (t) {
        var n = e.indexOf(t);
        -1 !== n && e.splice(n, 1);
      }), this._cacheId++;
    },
    clear: function clear() {
      this._plugins = [], this._cacheId++;
    },
    count: function count() {
      return this._plugins.length;
    },
    getAll: function getAll() {
      return this._plugins;
    },
    notify: function notify(t, e, n) {
      var i,
          a,
          r,
          o,
          s,
          l = this.descriptors(t),
          u = l.length;

      for (i = 0; i < u; ++i) {
        if ("function" == typeof (s = (r = (a = l[i]).plugin)[e]) && ((o = [t].concat(n || [])).push(a.options), !1 === s.apply(r, o))) return !1;
      }

      return !0;
    },
    descriptors: function descriptors(t) {
      var e = t.$plugins || (t.$plugins = {});
      if (e.id === this._cacheId) return e.descriptors;
      var n = [],
          i = [],
          a = t && t.config || {},
          r = a.options && a.options.plugins || {};
      return this._plugins.concat(a.plugins || []).forEach(function (t) {
        if (-1 === n.indexOf(t)) {
          var e = t.id,
              a = r[e];
          !1 !== a && (!0 === a && (a = V.clone(z.global.plugins[e])), n.push(t), i.push({
            plugin: t,
            options: a || {}
          }));
        }
      }), e.descriptors = i, e.id = this._cacheId, i;
    },
    _invalidate: function _invalidate(t) {
      delete t.$plugins;
    }
  },
      Oe = {
    constructors: {},
    defaults: {},
    registerScaleType: function registerScaleType(t, e, n) {
      this.constructors[t] = e, this.defaults[t] = V.clone(n);
    },
    getScaleConstructor: function getScaleConstructor(t) {
      return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
    },
    getScaleDefaults: function getScaleDefaults(t) {
      return this.defaults.hasOwnProperty(t) ? V.merge({}, [z.scale, this.defaults[t]]) : {};
    },
    updateScaleDefaults: function updateScaleDefaults(t, e) {
      this.defaults.hasOwnProperty(t) && (this.defaults[t] = V.extend(this.defaults[t], e));
    },
    addScalesToLayout: function addScalesToLayout(t) {
      V.each(t.scales, function (e) {
        e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, ge.addBox(t, e);
      });
    }
  },
      Re = V.valueOrDefault,
      ze = V.rtl.getRtlAdapter;

  z._set("global", {
    tooltips: {
      enabled: !0,
      custom: null,
      mode: "nearest",
      position: "average",
      intersect: !0,
      backgroundColor: "rgba(0,0,0,0.8)",
      titleFontStyle: "bold",
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleFontColor: "#fff",
      titleAlign: "left",
      bodySpacing: 2,
      bodyFontColor: "#fff",
      bodyAlign: "left",
      footerFontStyle: "bold",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFontColor: "#fff",
      footerAlign: "left",
      yPadding: 6,
      xPadding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      multiKeyBackground: "#fff",
      displayColors: !0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      callbacks: {
        beforeTitle: V.noop,
        title: function title(t, e) {
          var n = "",
              i = e.labels,
              a = i ? i.length : 0;

          if (t.length > 0) {
            var r = t[0];
            r.label ? n = r.label : r.xLabel ? n = r.xLabel : a > 0 && r.index < a && (n = i[r.index]);
          }

          return n;
        },
        afterTitle: V.noop,
        beforeBody: V.noop,
        beforeLabel: V.noop,
        label: function label(t, e) {
          var n = e.datasets[t.datasetIndex].label || "";
          return n && (n += ": "), V.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value, n;
        },
        labelColor: function labelColor(t, e) {
          var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;

          return {
            borderColor: n.borderColor,
            backgroundColor: n.backgroundColor
          };
        },
        labelTextColor: function labelTextColor() {
          return this._options.bodyFontColor;
        },
        afterLabel: V.noop,
        afterBody: V.noop,
        beforeFooter: V.noop,
        footer: V.noop,
        afterFooter: V.noop
      }
    }
  });

  var Ne = {
    average: function average(t) {
      if (!t.length) return !1;
      var e,
          n,
          i = 0,
          a = 0,
          r = 0;

      for (e = 0, n = t.length; e < n; ++e) {
        var o = t[e];

        if (o && o.hasValue()) {
          var s = o.tooltipPosition();
          i += s.x, a += s.y, ++r;
        }
      }

      return {
        x: i / r,
        y: a / r
      };
    },
    nearest: function nearest(t, e) {
      var n,
          i,
          a,
          r = e.x,
          o = e.y,
          s = Number.POSITIVE_INFINITY;

      for (n = 0, i = t.length; n < i; ++n) {
        var l = t[n];

        if (l && l.hasValue()) {
          var u = l.getCenterPoint(),
              d = V.distanceBetweenPoints(e, u);
          d < s && (s = d, a = l);
        }
      }

      if (a) {
        var h = a.tooltipPosition();
        r = h.x, o = h.y;
      }

      return {
        x: r,
        y: o
      };
    }
  };

  function Be(t, e) {
    return e && (V.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }

  function Ee(t) {
    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
  }

  function We(t) {
    var e = z.global;
    return {
      xPadding: t.xPadding,
      yPadding: t.yPadding,
      xAlign: t.xAlign,
      yAlign: t.yAlign,
      rtl: t.rtl,
      textDirection: t.textDirection,
      bodyFontColor: t.bodyFontColor,
      _bodyFontFamily: Re(t.bodyFontFamily, e.defaultFontFamily),
      _bodyFontStyle: Re(t.bodyFontStyle, e.defaultFontStyle),
      _bodyAlign: t.bodyAlign,
      bodyFontSize: Re(t.bodyFontSize, e.defaultFontSize),
      bodySpacing: t.bodySpacing,
      titleFontColor: t.titleFontColor,
      _titleFontFamily: Re(t.titleFontFamily, e.defaultFontFamily),
      _titleFontStyle: Re(t.titleFontStyle, e.defaultFontStyle),
      titleFontSize: Re(t.titleFontSize, e.defaultFontSize),
      _titleAlign: t.titleAlign,
      titleSpacing: t.titleSpacing,
      titleMarginBottom: t.titleMarginBottom,
      footerFontColor: t.footerFontColor,
      _footerFontFamily: Re(t.footerFontFamily, e.defaultFontFamily),
      _footerFontStyle: Re(t.footerFontStyle, e.defaultFontStyle),
      footerFontSize: Re(t.footerFontSize, e.defaultFontSize),
      _footerAlign: t.footerAlign,
      footerSpacing: t.footerSpacing,
      footerMarginTop: t.footerMarginTop,
      caretSize: t.caretSize,
      cornerRadius: t.cornerRadius,
      backgroundColor: t.backgroundColor,
      opacity: 0,
      legendColorBackground: t.multiKeyBackground,
      displayColors: t.displayColors,
      borderColor: t.borderColor,
      borderWidth: t.borderWidth
    };
  }

  function Ve(t, e) {
    return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding;
  }

  function He(t) {
    return Be([], Ee(t));
  }

  var je = X.extend({
    initialize: function initialize() {
      this._model = We(this._options), this._lastActive = [];
    },
    getTitle: function getTitle() {
      var t = this,
          e = t._options,
          n = e.callbacks,
          i = n.beforeTitle.apply(t, arguments),
          a = n.title.apply(t, arguments),
          r = n.afterTitle.apply(t, arguments),
          o = [];
      return o = Be(o, Ee(i)), o = Be(o, Ee(a)), o = Be(o, Ee(r));
    },
    getBeforeBody: function getBeforeBody() {
      return He(this._options.callbacks.beforeBody.apply(this, arguments));
    },
    getBody: function getBody(t, e) {
      var n = this,
          i = n._options.callbacks,
          a = [];
      return V.each(t, function (t) {
        var r = {
          before: [],
          lines: [],
          after: []
        };
        Be(r.before, Ee(i.beforeLabel.call(n, t, e))), Be(r.lines, i.label.call(n, t, e)), Be(r.after, Ee(i.afterLabel.call(n, t, e))), a.push(r);
      }), a;
    },
    getAfterBody: function getAfterBody() {
      return He(this._options.callbacks.afterBody.apply(this, arguments));
    },
    getFooter: function getFooter() {
      var t = this,
          e = t._options.callbacks,
          n = e.beforeFooter.apply(t, arguments),
          i = e.footer.apply(t, arguments),
          a = e.afterFooter.apply(t, arguments),
          r = [];
      return r = Be(r, Ee(n)), r = Be(r, Ee(i)), r = Be(r, Ee(a));
    },
    update: function update(t) {
      var e,
          n,
          i,
          a,
          r,
          o,
          s,
          l,
          u,
          d,
          h = this,
          c = h._options,
          f = h._model,
          g = h._model = We(c),
          p = h._active,
          m = h._data,
          v = {
        xAlign: f.xAlign,
        yAlign: f.yAlign
      },
          b = {
        x: f.x,
        y: f.y
      },
          x = {
        width: f.width,
        height: f.height
      },
          y = {
        x: f.caretX,
        y: f.caretY
      };

      if (p.length) {
        g.opacity = 1;
        var _ = [],
            k = [];
        y = Ne[c.position].call(h, p, h._eventPosition);
        var w = [];

        for (e = 0, n = p.length; e < n; ++e) {
          w.push((i = p[e], a = void 0, r = void 0, o = void 0, s = void 0, l = void 0, u = void 0, d = void 0, a = i._xScale, r = i._yScale || i._scale, o = i._index, s = i._datasetIndex, l = i._chart.getDatasetMeta(s).controller, u = l._getIndexScale(), d = l._getValueScale(), {
            xLabel: a ? a.getLabelForIndex(o, s) : "",
            yLabel: r ? r.getLabelForIndex(o, s) : "",
            label: u ? "" + u.getLabelForIndex(o, s) : "",
            value: d ? "" + d.getLabelForIndex(o, s) : "",
            index: o,
            datasetIndex: s,
            x: i._model.x,
            y: i._model.y
          }));
        }

        c.filter && (w = w.filter(function (t) {
          return c.filter(t, m);
        })), c.itemSort && (w = w.sort(function (t, e) {
          return c.itemSort(t, e, m);
        })), V.each(w, function (t) {
          _.push(c.callbacks.labelColor.call(h, t, h._chart)), k.push(c.callbacks.labelTextColor.call(h, t, h._chart));
        }), g.title = h.getTitle(w, m), g.beforeBody = h.getBeforeBody(w, m), g.body = h.getBody(w, m), g.afterBody = h.getAfterBody(w, m), g.footer = h.getFooter(w, m), g.x = y.x, g.y = y.y, g.caretPadding = c.caretPadding, g.labelColors = _, g.labelTextColors = k, g.dataPoints = w, x = function (t, e) {
          var n = t._chart.ctx,
              i = 2 * e.yPadding,
              a = 0,
              r = e.body,
              o = r.reduce(function (t, e) {
            return t + e.before.length + e.lines.length + e.after.length;
          }, 0);
          o += e.beforeBody.length + e.afterBody.length;
          var s = e.title.length,
              l = e.footer.length,
              u = e.titleFontSize,
              d = e.bodyFontSize,
              h = e.footerFontSize;
          i += s * u, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += o * d, i += o ? (o - 1) * e.bodySpacing : 0, i += l ? e.footerMarginTop : 0, i += l * h, i += l ? (l - 1) * e.footerSpacing : 0;

          var c = 0,
              f = function f(t) {
            a = Math.max(a, n.measureText(t).width + c);
          };

          return n.font = V.fontString(u, e._titleFontStyle, e._titleFontFamily), V.each(e.title, f), n.font = V.fontString(d, e._bodyFontStyle, e._bodyFontFamily), V.each(e.beforeBody.concat(e.afterBody), f), c = e.displayColors ? d + 2 : 0, V.each(r, function (t) {
            V.each(t.before, f), V.each(t.lines, f), V.each(t.after, f);
          }), c = 0, n.font = V.fontString(h, e._footerFontStyle, e._footerFontFamily), V.each(e.footer, f), {
            width: a += 2 * e.xPadding,
            height: i
          };
        }(this, g), b = function (t, e, n, i) {
          var a = t.x,
              r = t.y,
              o = t.caretSize,
              s = t.caretPadding,
              l = t.cornerRadius,
              u = n.xAlign,
              d = n.yAlign,
              h = o + s,
              c = l + s;
          return "right" === u ? a -= e.width : "center" === u && ((a -= e.width / 2) + e.width > i.width && (a = i.width - e.width), a < 0 && (a = 0)), "top" === d ? r += h : r -= "bottom" === d ? e.height + h : e.height / 2, "center" === d ? "left" === u ? a += h : "right" === u && (a -= h) : "left" === u ? a -= c : "right" === u && (a += c), {
            x: a,
            y: r
          };
        }(g, x, v = function (t, e) {
          var n,
              i,
              a,
              r,
              o,
              s = t._model,
              l = t._chart,
              u = t._chart.chartArea,
              d = "center",
              h = "center";
          s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
          var c = (u.left + u.right) / 2,
              f = (u.top + u.bottom) / 2;
          "center" === h ? (n = function n(t) {
            return t <= c;
          }, i = function i(t) {
            return t > c;
          }) : (n = function n(t) {
            return t <= e.width / 2;
          }, i = function i(t) {
            return t >= l.width - e.width / 2;
          }), a = function a(t) {
            return t + e.width + s.caretSize + s.caretPadding > l.width;
          }, r = function r(t) {
            return t - e.width - s.caretSize - s.caretPadding < 0;
          }, o = function o(t) {
            return t <= f ? "top" : "bottom";
          }, n(s.x) ? (d = "left", a(s.x) && (d = "center", h = o(s.y))) : i(s.x) && (d = "right", r(s.x) && (d = "center", h = o(s.y)));
          var g = t._options;
          return {
            xAlign: g.xAlign ? g.xAlign : d,
            yAlign: g.yAlign ? g.yAlign : h
          };
        }(this, x), h._chart);
      } else g.opacity = 0;

      return g.xAlign = v.xAlign, g.yAlign = v.yAlign, g.x = b.x, g.y = b.y, g.width = x.width, g.height = x.height, g.caretX = y.x, g.caretY = y.y, h._model = g, t && c.custom && c.custom.call(h, g), h;
    },
    drawCaret: function drawCaret(t, e) {
      var n = this._chart.ctx,
          i = this._view,
          a = this.getCaretPosition(t, e, i);
      n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
    },
    getCaretPosition: function getCaretPosition(t, e, n) {
      var i,
          a,
          r,
          o,
          s,
          l,
          u = n.caretSize,
          d = n.cornerRadius,
          h = n.xAlign,
          c = n.yAlign,
          f = t.x,
          g = t.y,
          p = e.width,
          m = e.height;
      if ("center" === c) s = g + m / 2, "left" === h ? (a = (i = f) - u, r = i, o = s + u, l = s - u) : (a = (i = f + p) + u, r = i, o = s - u, l = s + u);else if ("left" === h ? (i = (a = f + d + u) - u, r = a + u) : "right" === h ? (i = (a = f + p - d - u) - u, r = a + u) : (i = (a = n.caretX) - u, r = a + u), "top" === c) s = (o = g) - u, l = o;else {
        s = (o = g + m) + u, l = o;
        var v = r;
        r = i, i = v;
      }
      return {
        x1: i,
        x2: a,
        x3: r,
        y1: o,
        y2: s,
        y3: l
      };
    },
    drawTitle: function drawTitle(t, e, n) {
      var i,
          a,
          r,
          o = e.title,
          s = o.length;

      if (s) {
        var l = ze(e.rtl, e.x, e.width);

        for (t.x = Ve(e, e._titleAlign), n.textAlign = l.textAlign(e._titleAlign), n.textBaseline = "middle", i = e.titleFontSize, a = e.titleSpacing, n.fillStyle = e.titleFontColor, n.font = V.fontString(i, e._titleFontStyle, e._titleFontFamily), r = 0; r < s; ++r) {
          n.fillText(o[r], l.x(t.x), t.y + i / 2), t.y += i + a, r + 1 === s && (t.y += e.titleMarginBottom - a);
        }
      }
    },
    drawBody: function drawBody(t, e, n) {
      var i,
          a,
          r,
          o,
          s,
          l,
          u,
          d,
          h = e.bodyFontSize,
          c = e.bodySpacing,
          f = e._bodyAlign,
          g = e.body,
          p = e.displayColors,
          m = 0,
          v = p ? Ve(e, "left") : 0,
          b = ze(e.rtl, e.x, e.width),
          x = function x(e) {
        n.fillText(e, b.x(t.x + m), t.y + h / 2), t.y += h + c;
      },
          y = b.textAlign(f);

      for (n.textAlign = f, n.textBaseline = "middle", n.font = V.fontString(h, e._bodyFontStyle, e._bodyFontFamily), t.x = Ve(e, y), n.fillStyle = e.bodyFontColor, V.each(e.beforeBody, x), m = p && "right" !== y ? "center" === f ? h / 2 + 1 : h + 2 : 0, s = 0, u = g.length; s < u; ++s) {
        for (i = g[s], a = e.labelTextColors[s], r = e.labelColors[s], n.fillStyle = a, V.each(i.before, x), l = 0, d = (o = i.lines).length; l < d; ++l) {
          if (p) {
            var _ = b.x(v);

            n.fillStyle = e.legendColorBackground, n.fillRect(b.leftForLtr(_, h), t.y, h, h), n.lineWidth = 1, n.strokeStyle = r.borderColor, n.strokeRect(b.leftForLtr(_, h), t.y, h, h), n.fillStyle = r.backgroundColor, n.fillRect(b.leftForLtr(b.xPlus(_, 1), h - 2), t.y + 1, h - 2, h - 2), n.fillStyle = a;
          }

          x(o[l]);
        }

        V.each(i.after, x);
      }

      m = 0, V.each(e.afterBody, x), t.y -= c;
    },
    drawFooter: function drawFooter(t, e, n) {
      var i,
          a,
          r = e.footer,
          o = r.length;

      if (o) {
        var s = ze(e.rtl, e.x, e.width);

        for (t.x = Ve(e, e._footerAlign), t.y += e.footerMarginTop, n.textAlign = s.textAlign(e._footerAlign), n.textBaseline = "middle", i = e.footerFontSize, n.fillStyle = e.footerFontColor, n.font = V.fontString(i, e._footerFontStyle, e._footerFontFamily), a = 0; a < o; ++a) {
          n.fillText(r[a], s.x(t.x), t.y + i / 2), t.y += i + e.footerSpacing;
        }
      }
    },
    drawBackground: function drawBackground(t, e, n, i) {
      n.fillStyle = e.backgroundColor, n.strokeStyle = e.borderColor, n.lineWidth = e.borderWidth;
      var a = e.xAlign,
          r = e.yAlign,
          o = t.x,
          s = t.y,
          l = i.width,
          u = i.height,
          d = e.cornerRadius;
      n.beginPath(), n.moveTo(o + d, s), "top" === r && this.drawCaret(t, i), n.lineTo(o + l - d, s), n.quadraticCurveTo(o + l, s, o + l, s + d), "center" === r && "right" === a && this.drawCaret(t, i), n.lineTo(o + l, s + u - d), n.quadraticCurveTo(o + l, s + u, o + l - d, s + u), "bottom" === r && this.drawCaret(t, i), n.lineTo(o + d, s + u), n.quadraticCurveTo(o, s + u, o, s + u - d), "center" === r && "left" === a && this.drawCaret(t, i), n.lineTo(o, s + d), n.quadraticCurveTo(o, s, o + d, s), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke();
    },
    draw: function draw() {
      var t = this._chart.ctx,
          e = this._view;

      if (0 !== e.opacity) {
        var n = {
          width: e.width,
          height: e.height
        },
            i = {
          x: e.x,
          y: e.y
        },
            a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
            r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
        this._options.enabled && r && (t.save(), t.globalAlpha = a, this.drawBackground(i, e, t, n), i.y += e.yPadding, V.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(i, e, t), this.drawBody(i, e, t), this.drawFooter(i, e, t), V.rtl.restoreTextDirection(t, e.textDirection), t.restore());
      }
    },
    handleEvent: function handleEvent(t) {
      var e,
          n = this,
          i = n._options;
      return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : (n._active = n._chart.getElementsAtEventForMode(t, i.mode, i), i.reverse && n._active.reverse()), (e = !V.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
        x: t.x,
        y: t.y
      }, n.update(!0), n.pivot())), e;
    }
  }),
      qe = Ne,
      Ue = je;
  Ue.positioners = qe;
  var Ye = V.valueOrDefault;

  function Ge() {
    return V.merge({}, [].slice.call(arguments), {
      merger: function merger(t, e, n, i) {
        if ("xAxes" === t || "yAxes" === t) {
          var a,
              r,
              o,
              s = n[t].length;

          for (e[t] || (e[t] = []), a = 0; a < s; ++a) {
            o = n[t][a], r = Ye(o.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || o.type && o.type !== e[t][a].type ? V.merge(e[t][a], [Oe.getScaleDefaults(r), o]) : V.merge(e[t][a], o);
          }
        } else V._merger(t, e, n, i);
      }
    });
  }

  function Xe() {
    return V.merge({}, [].slice.call(arguments), {
      merger: function merger(t, e, n, i) {
        var a = e[t] || {},
            r = n[t];
        "scales" === t ? e[t] = Ge(a, r) : "scale" === t ? e[t] = V.merge(a, [Oe.getScaleDefaults(r.type), r]) : V._merger(t, e, n, i);
      }
    });
  }

  function Ke(t) {
    var e = t.options;
    V.each(t.scales, function (e) {
      ge.removeBox(t, e);
    }), e = Xe(z.global, z[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize();
  }

  function Ze(t, e, n) {
    var i,
        a = function a(t) {
      return t.id === i;
    };

    do {
      i = e + n++;
    } while (V.findIndex(t, a) >= 0);

    return i;
  }

  function $e(t) {
    return "top" === t || "bottom" === t;
  }

  function Je(t, e) {
    return function (n, i) {
      return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
    };
  }

  z._set("global", {
    elements: {},
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    hover: {
      onHover: null,
      mode: "nearest",
      intersect: !0,
      animationDuration: 400
    },
    onClick: null,
    maintainAspectRatio: !0,
    responsive: !0,
    responsiveAnimationDuration: 0
  });

  var Qe = function Qe(t, e) {
    return this.construct(t, e), this;
  };

  V.extend(Qe.prototype, {
    construct: function construct(t, e) {
      var n = this;

      e = function (t) {
        var e = (t = t || {}).data = t.data || {};
        return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = Xe(z.global, z[t.type], t.options || {}), t;
      }(e);

      var i = Fe.acquireContext(t, e),
          a = i && i.canvas,
          r = a && a.height,
          o = a && a.width;
      n.id = V.uid(), n.ctx = i, n.canvas = a, n.config = e, n.width = o, n.height = r, n.aspectRatio = r ? o / r : null, n.options = e.options, n._bufferedRender = !1, n._layers = [], n.chart = n, n.controller = n, Qe.instances[n.id] = n, Object.defineProperty(n, "data", {
        get: function get() {
          return n.config.data;
        },
        set: function set(t) {
          n.config.data = t;
        }
      }), i && a ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item");
    },
    initialize: function initialize() {
      var t = this;
      return Le.notify(t, "beforeInit"), V.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), Le.notify(t, "afterInit"), t;
    },
    clear: function clear() {
      return V.canvas.clear(this), this;
    },
    stop: function stop() {
      return $.cancelAnimation(this), this;
    },
    resize: function resize(t) {
      var e = this,
          n = e.options,
          i = e.canvas,
          a = n.maintainAspectRatio && e.aspectRatio || null,
          r = Math.max(0, Math.floor(V.getMaximumWidth(i))),
          o = Math.max(0, Math.floor(a ? r / a : V.getMaximumHeight(i)));

      if ((e.width !== r || e.height !== o) && (i.width = e.width = r, i.height = e.height = o, i.style.width = r + "px", i.style.height = o + "px", V.retinaScale(e, n.devicePixelRatio), !t)) {
        var s = {
          width: r,
          height: o
        };
        Le.notify(e, "resize", [s]), n.onResize && n.onResize(e, s), e.stop(), e.update({
          duration: n.responsiveAnimationDuration
        });
      }
    },
    ensureScalesHaveIDs: function ensureScalesHaveIDs() {
      var t = this.options,
          e = t.scales || {},
          n = t.scale;
      V.each(e.xAxes, function (t, n) {
        t.id || (t.id = Ze(e.xAxes, "x-axis-", n));
      }), V.each(e.yAxes, function (t, n) {
        t.id || (t.id = Ze(e.yAxes, "y-axis-", n));
      }), n && (n.id = n.id || "scale");
    },
    buildOrUpdateScales: function buildOrUpdateScales() {
      var t = this,
          e = t.options,
          n = t.scales || {},
          i = [],
          a = Object.keys(n).reduce(function (t, e) {
        return t[e] = !1, t;
      }, {});
      e.scales && (i = i.concat((e.scales.xAxes || []).map(function (t) {
        return {
          options: t,
          dtype: "category",
          dposition: "bottom"
        };
      }), (e.scales.yAxes || []).map(function (t) {
        return {
          options: t,
          dtype: "linear",
          dposition: "left"
        };
      }))), e.scale && i.push({
        options: e.scale,
        dtype: "radialLinear",
        isDefault: !0,
        dposition: "chartArea"
      }), V.each(i, function (e) {
        var i = e.options,
            r = i.id,
            o = Ye(i.type, e.dtype);
        $e(i.position) !== $e(e.dposition) && (i.position = e.dposition), a[r] = !0;
        var s = null;
        if (r in n && n[r].type === o) (s = n[r]).options = i, s.ctx = t.ctx, s.chart = t;else {
          var l = Oe.getScaleConstructor(o);
          if (!l) return;
          s = new l({
            id: r,
            type: o,
            options: i,
            ctx: t.ctx,
            chart: t
          }), n[s.id] = s;
        }
        s.mergeTicksOptions(), e.isDefault && (t.scale = s);
      }), V.each(a, function (t, e) {
        t || delete n[e];
      }), t.scales = n, Oe.addScalesToLayout(this);
    },
    buildOrUpdateControllers: function buildOrUpdateControllers() {
      var t,
          e,
          n = this,
          i = [],
          a = n.data.datasets;

      for (t = 0, e = a.length; t < e; t++) {
        var r = a[t],
            o = n.getDatasetMeta(t),
            s = r.type || n.config.type;
        if (o.type && o.type !== s && (n.destroyDatasetMeta(t), o = n.getDatasetMeta(t)), o.type = s, o.order = r.order || 0, o.index = t, o.controller) o.controller.updateIndex(t), o.controller.linkScales();else {
          var l = $t[o.type];
          if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');
          o.controller = new l(n, t), i.push(o.controller);
        }
      }

      return i;
    },
    resetElements: function resetElements() {
      var t = this;
      V.each(t.data.datasets, function (e, n) {
        t.getDatasetMeta(n).controller.reset();
      }, t);
    },
    reset: function reset() {
      this.resetElements(), this.tooltip.initialize();
    },
    update: function update(t) {
      var e,
          n,
          i = this;

      if (t && "object" == _typeof(t) || (t = {
        duration: t,
        lazy: arguments[1]
      }), Ke(i), Le._invalidate(i), !1 !== Le.notify(i, "beforeUpdate")) {
        i.tooltip._data = i.data;
        var a = i.buildOrUpdateControllers();

        for (e = 0, n = i.data.datasets.length; e < n; e++) {
          i.getDatasetMeta(e).controller.buildOrUpdateElements();
        }

        i.updateLayout(), i.options.animation && i.options.animation.duration && V.each(a, function (t) {
          t.reset();
        }), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], Le.notify(i, "afterUpdate"), i._layers.sort(Je("z", "_idx")), i._bufferedRender ? i._bufferedRequest = {
          duration: t.duration,
          easing: t.easing,
          lazy: t.lazy
        } : i.render(t);
      }
    },
    updateLayout: function updateLayout() {
      var t = this;
      !1 !== Le.notify(t, "beforeLayout") && (ge.update(this, this.width, this.height), t._layers = [], V.each(t.boxes, function (e) {
        e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers());
      }, t), t._layers.forEach(function (t, e) {
        t._idx = e;
      }), Le.notify(t, "afterScaleUpdate"), Le.notify(t, "afterLayout"));
    },
    updateDatasets: function updateDatasets() {
      if (!1 !== Le.notify(this, "beforeDatasetsUpdate")) {
        for (var t = 0, e = this.data.datasets.length; t < e; ++t) {
          this.updateDataset(t);
        }

        Le.notify(this, "afterDatasetsUpdate");
      }
    },
    updateDataset: function updateDataset(t) {
      var e = this.getDatasetMeta(t),
          n = {
        meta: e,
        index: t
      };
      !1 !== Le.notify(this, "beforeDatasetUpdate", [n]) && (e.controller._update(), Le.notify(this, "afterDatasetUpdate", [n]));
    },
    render: function render(t) {
      var e = this;
      t && "object" == _typeof(t) || (t = {
        duration: t,
        lazy: arguments[1]
      });
      var n = e.options.animation,
          i = Ye(t.duration, n && n.duration),
          a = t.lazy;

      if (!1 !== Le.notify(e, "beforeRender")) {
        var r = function r(t) {
          Le.notify(e, "afterRender"), V.callback(n && n.onComplete, [t], e);
        };

        if (n && i) {
          var o = new Z({
            numSteps: i / 16.66,
            easing: t.easing || n.easing,
            render: function render(t, e) {
              var n = V.easing.effects[e.easing],
                  i = e.currentStep,
                  a = i / e.numSteps;
              t.draw(n(a), a, i);
            },
            onAnimationProgress: n.onProgress,
            onAnimationComplete: r
          });
          $.addAnimation(e, o, i, a);
        } else e.draw(), r(new Z({
          numSteps: 0,
          chart: e
        }));

        return e;
      }
    },
    draw: function draw(t) {
      var e,
          n,
          i = this;

      if (i.clear(), V.isNullOrUndef(t) && (t = 1), i.transition(t), !(i.width <= 0 || i.height <= 0) && !1 !== Le.notify(i, "beforeDraw", [t])) {
        for (n = i._layers, e = 0; e < n.length && n[e].z <= 0; ++e) {
          n[e].draw(i.chartArea);
        }

        for (i.drawDatasets(t); e < n.length; ++e) {
          n[e].draw(i.chartArea);
        }

        i._drawTooltip(t), Le.notify(i, "afterDraw", [t]);
      }
    },
    transition: function transition(t) {
      for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) {
        this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
      }

      this.tooltip.transition(t);
    },
    _getSortedDatasetMetas: function _getSortedDatasetMetas(t) {
      var e,
          n,
          i = [];

      for (e = 0, n = (this.data.datasets || []).length; e < n; ++e) {
        t && !this.isDatasetVisible(e) || i.push(this.getDatasetMeta(e));
      }

      return i.sort(Je("order", "index")), i;
    },
    _getSortedVisibleDatasetMetas: function _getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    },
    drawDatasets: function drawDatasets(t) {
      var e, n;

      if (!1 !== Le.notify(this, "beforeDatasetsDraw", [t])) {
        for (n = (e = this._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n) {
          this.drawDataset(e[n], t);
        }

        Le.notify(this, "afterDatasetsDraw", [t]);
      }
    },
    drawDataset: function drawDataset(t, e) {
      var n = {
        meta: t,
        index: t.index,
        easingValue: e
      };
      !1 !== Le.notify(this, "beforeDatasetDraw", [n]) && (t.controller.draw(e), Le.notify(this, "afterDatasetDraw", [n]));
    },
    _drawTooltip: function _drawTooltip(t) {
      var e = this.tooltip,
          n = {
        tooltip: e,
        easingValue: t
      };
      !1 !== Le.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), Le.notify(this, "afterTooltipDraw", [n]));
    },
    getElementAtEvent: function getElementAtEvent(t) {
      return ae.modes.single(this, t);
    },
    getElementsAtEvent: function getElementsAtEvent(t) {
      return ae.modes.label(this, t, {
        intersect: !0
      });
    },
    getElementsAtXAxis: function getElementsAtXAxis(t) {
      return ae.modes["x-axis"](this, t, {
        intersect: !0
      });
    },
    getElementsAtEventForMode: function getElementsAtEventForMode(t, e, n) {
      var i = ae.modes[e];
      return "function" == typeof i ? i(this, t, n) : [];
    },
    getDatasetAtEvent: function getDatasetAtEvent(t) {
      return ae.modes.dataset(this, t, {
        intersect: !0
      });
    },
    getDatasetMeta: function getDatasetMeta(t) {
      var e = this.data.datasets[t];
      e._meta || (e._meta = {});
      var n = e._meta[this.id];
      return n || (n = e._meta[this.id] = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null,
        order: e.order || 0,
        index: t
      }), n;
    },
    getVisibleDatasetCount: function getVisibleDatasetCount() {
      for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) {
        this.isDatasetVisible(e) && t++;
      }

      return t;
    },
    isDatasetVisible: function isDatasetVisible(t) {
      var e = this.getDatasetMeta(t);
      return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
    },
    generateLegend: function generateLegend() {
      return this.options.legendCallback(this);
    },
    destroyDatasetMeta: function destroyDatasetMeta(t) {
      var e = this.id,
          n = this.data.datasets[t],
          i = n._meta && n._meta[e];
      i && (i.controller.destroy(), delete n._meta[e]);
    },
    destroy: function destroy() {
      var t,
          e,
          n = this,
          i = n.canvas;

      for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t) {
        n.destroyDatasetMeta(t);
      }

      i && (n.unbindEvents(), V.canvas.clear(n), Fe.releaseContext(n.ctx), n.canvas = null, n.ctx = null), Le.notify(n, "destroy"), delete Qe.instances[n.id];
    },
    toBase64Image: function toBase64Image() {
      return this.canvas.toDataURL.apply(this.canvas, arguments);
    },
    initToolTip: function initToolTip() {
      var t = this;
      t.tooltip = new Ue({
        _chart: t,
        _chartInstance: t,
        _data: t.data,
        _options: t.options.tooltips
      }, t);
    },
    bindEvents: function bindEvents() {
      var t = this,
          e = t._listeners = {},
          n = function n() {
        t.eventHandler.apply(t, arguments);
      };

      V.each(t.options.events, function (i) {
        Fe.addEventListener(t, i, n), e[i] = n;
      }), t.options.responsive && (n = function n() {
        t.resize();
      }, Fe.addEventListener(t, "resize", n), e.resize = n);
    },
    unbindEvents: function unbindEvents() {
      var t = this,
          e = t._listeners;
      e && (delete t._listeners, V.each(e, function (e, n) {
        Fe.removeEventListener(t, n, e);
      }));
    },
    updateHoverStyle: function updateHoverStyle(t, e, n) {
      var i,
          a,
          r,
          o = n ? "set" : "remove";

      for (a = 0, r = t.length; a < r; ++a) {
        (i = t[a]) && this.getDatasetMeta(i._datasetIndex).controller[o + "HoverStyle"](i);
      }

      "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + o + "DatasetHoverStyle"]();
    },
    eventHandler: function eventHandler(t) {
      var e = this,
          n = e.tooltip;

      if (!1 !== Le.notify(e, "beforeEvent", [t])) {
        e._bufferedRender = !0, e._bufferedRequest = null;
        var i = e.handleEvent(t);
        n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), Le.notify(e, "afterEvent", [t]);
        var a = e._bufferedRequest;
        return a ? e.render(a) : i && !e.animating && (e.stop(), e.render({
          duration: e.options.hover.animationDuration,
          lazy: !0
        })), e._bufferedRender = !1, e._bufferedRequest = null, e;
      }
    },
    handleEvent: function handleEvent(t) {
      var e,
          n = this,
          i = n.options || {},
          a = i.hover;
      return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, a.mode, a), V.callback(i.onHover || i.hover.onHover, [t["native"], n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t["native"], n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, a.mode, !1), n.active.length && a.mode && n.updateHoverStyle(n.active, a.mode, !0), e = !V.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e;
    }
  }), Qe.instances = {};
  var tn = Qe;
  Qe.Controller = Qe, Qe.types = {}, V.configMerge = Xe, V.scaleMerge = Ge;

  function en() {
    throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.");
  }

  function nn(t) {
    this.options = t || {};
  }

  V.extend(nn.prototype, {
    formats: en,
    parse: en,
    format: en,
    add: en,
    diff: en,
    startOf: en,
    endOf: en,
    _create: function _create(t) {
      return t;
    }
  }), nn.override = function (t) {
    V.extend(nn.prototype, t);
  };
  var an = {
    _date: nn
  },
      rn = {
    formatters: {
      values: function values(t) {
        return V.isArray(t) ? t : "" + t;
      },
      linear: function linear(t, e, n) {
        var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
        Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
        var a = V.log10(Math.abs(i)),
            r = "";
        if (0 !== t) {
          if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
            var o = V.log10(Math.abs(t)),
                s = Math.floor(o) - Math.floor(a);
            s = Math.max(Math.min(s, 20), 0), r = t.toExponential(s);
          } else {
            var l = -1 * Math.floor(a);
            l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l);
          }
        } else r = "0";
        return r;
      },
      logarithmic: function logarithmic(t, e, n) {
        var i = t / Math.pow(10, Math.floor(V.log10(t)));
        return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : "";
      }
    }
  },
      on = V.isArray,
      sn = V.isNullOrUndef,
      ln = V.valueOrDefault,
      un = V.valueAtIndexOrDefault;

  function dn(t, e, n) {
    var i,
        a = t.getTicks().length,
        r = Math.min(e, a - 1),
        o = t.getPixelForTick(r),
        s = t._startPixel,
        l = t._endPixel;
    if (!(n && (i = 1 === a ? Math.max(o - s, l - o) : 0 === e ? (t.getPixelForTick(1) - o) / 2 : (o - t.getPixelForTick(r - 1)) / 2, (o += r < e ? i : -i) < s - 1e-6 || o > l + 1e-6))) return o;
  }

  function hn(t, e, n, i) {
    var a,
        r,
        o,
        s,
        l,
        u,
        d,
        h,
        c,
        f,
        g,
        p,
        m,
        v = n.length,
        b = [],
        x = [],
        y = [];

    for (a = 0; a < v; ++a) {
      if (s = n[a].label, l = n[a].major ? e.major : e.minor, t.font = u = l.string, d = i[u] = i[u] || {
        data: {},
        gc: []
      }, h = l.lineHeight, c = f = 0, sn(s) || on(s)) {
        if (on(s)) for (r = 0, o = s.length; r < o; ++r) {
          g = s[r], sn(g) || on(g) || (c = V.measureText(t, d.data, d.gc, c, g), f += h);
        }
      } else c = V.measureText(t, d.data, d.gc, c, s), f = h;

      b.push(c), x.push(f), y.push(h / 2);
    }

    function _(t) {
      return {
        width: b[t] || 0,
        height: x[t] || 0,
        offset: y[t] || 0
      };
    }

    return function (t, e) {
      V.each(t, function (t) {
        var n,
            i = t.gc,
            a = i.length / 2;

        if (a > e) {
          for (n = 0; n < a; ++n) {
            delete t.data[i[n]];
          }

          i.splice(0, a);
        }
      });
    }(i, v), p = b.indexOf(Math.max.apply(null, b)), m = x.indexOf(Math.max.apply(null, x)), {
      first: _(0),
      last: _(v - 1),
      widest: _(p),
      highest: _(m)
    };
  }

  function cn(t) {
    return t.drawTicks ? t.tickMarkLength : 0;
  }

  function fn(t) {
    var e, n;
    return t.display ? (e = V.options._parseFont(t), n = V.options.toPadding(t.padding), e.lineHeight + n.height) : 0;
  }

  function gn(t, e) {
    return V.extend(V.options._parseFont({
      fontFamily: ln(e.fontFamily, t.fontFamily),
      fontSize: ln(e.fontSize, t.fontSize),
      fontStyle: ln(e.fontStyle, t.fontStyle),
      lineHeight: ln(e.lineHeight, t.lineHeight)
    }), {
      color: V.options.resolve([e.fontColor, t.fontColor, z.global.defaultFontColor])
    });
  }

  function pn(t) {
    var e = gn(t, t.minor);
    return {
      minor: e,
      major: t.major.enabled ? gn(t, t.major) : e
    };
  }

  function mn(t) {
    var e,
        n,
        i,
        a = [];

    for (n = 0, i = t.length; n < i; ++n) {
      void 0 !== (e = t[n])._index && a.push(e);
    }

    return a;
  }

  function vn(t, e, n, i) {
    var a,
        r,
        o,
        s,
        l = ln(n, 0),
        u = Math.min(ln(i, t.length), t.length),
        d = 0;

    for (e = Math.ceil(e), i && (e = (a = i - n) / Math.floor(a / e)), s = l; s < 0;) {
      d++, s = Math.round(l + d * e);
    }

    for (r = Math.max(l, 0); r < u; r++) {
      o = t[r], r === s ? (o._index = r, d++, s = Math.round(l + d * e)) : delete o.label;
    }
  }

  z._set("scale", {
    display: !0,
    position: "left",
    offset: !1,
    gridLines: {
      display: !0,
      color: "rgba(0,0,0,0.1)",
      lineWidth: 1,
      drawBorder: !0,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickMarkLength: 10,
      zeroLineWidth: 1,
      zeroLineColor: "rgba(0,0,0,0.25)",
      zeroLineBorderDash: [],
      zeroLineBorderDashOffset: 0,
      offsetGridLines: !1,
      borderDash: [],
      borderDashOffset: 0
    },
    scaleLabel: {
      display: !1,
      labelString: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      beginAtZero: !1,
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      padding: 0,
      reverse: !1,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 0,
      labelOffset: 0,
      callback: rn.formatters.values,
      minor: {},
      major: {}
    }
  });

  var bn = X.extend({
    zeroLineIndex: 0,
    getPadding: function getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0
      };
    },
    getTicks: function getTicks() {
      return this._ticks;
    },
    _getLabels: function _getLabels() {
      var t = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
    },
    mergeTicksOptions: function mergeTicksOptions() {},
    beforeUpdate: function beforeUpdate() {
      V.callback(this.options.beforeUpdate, [this]);
    },
    update: function update(t, e, n) {
      var i,
          a,
          r,
          o,
          s,
          l = this,
          u = l.options.ticks,
          d = u.sampleSize;
      if (l.beforeUpdate(), l.maxWidth = t, l.maxHeight = e, l.margins = V.extend({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, n), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), o = l.buildTicks() || [], (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks) for (o = [], i = 0, a = l.ticks.length; i < a; ++i) {
        o.push({
          value: l.ticks[i],
          major: !1
        });
      }
      return l._ticks = o, s = d < o.length, r = l._convertTicksToLabels(s ? function (t, e) {
        for (var n = [], i = t.length / e, a = 0, r = t.length; a < r; a += i) {
          n.push(t[Math.floor(a)]);
        }

        return n;
      }(o, d) : o), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = u.display && (u.autoSkip || "auto" === u.source) ? l._autoSkip(o) : o, s && (r = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = r, l.afterUpdate(), l.minSize;
    },
    _configure: function _configure() {
      var t,
          e,
          n = this,
          i = n.options.ticks.reverse;
      n.isHorizontal() ? (t = n.left, e = n.right) : (t = n.top, e = n.bottom, i = !i), n._startPixel = t, n._endPixel = e, n._reversePixels = i, n._length = e - t;
    },
    afterUpdate: function afterUpdate() {
      V.callback(this.options.afterUpdate, [this]);
    },
    beforeSetDimensions: function beforeSetDimensions() {
      V.callback(this.options.beforeSetDimensions, [this]);
    },
    setDimensions: function setDimensions() {
      var t = this;
      t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
    },
    afterSetDimensions: function afterSetDimensions() {
      V.callback(this.options.afterSetDimensions, [this]);
    },
    beforeDataLimits: function beforeDataLimits() {
      V.callback(this.options.beforeDataLimits, [this]);
    },
    determineDataLimits: V.noop,
    afterDataLimits: function afterDataLimits() {
      V.callback(this.options.afterDataLimits, [this]);
    },
    beforeBuildTicks: function beforeBuildTicks() {
      V.callback(this.options.beforeBuildTicks, [this]);
    },
    buildTicks: V.noop,
    afterBuildTicks: function afterBuildTicks(t) {
      var e = this;
      return on(t) && t.length ? V.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = V.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t);
    },
    beforeTickToLabelConversion: function beforeTickToLabelConversion() {
      V.callback(this.options.beforeTickToLabelConversion, [this]);
    },
    convertTicksToLabels: function convertTicksToLabels() {
      var t = this.options.ticks;
      this.ticks = this.ticks.map(t.userCallback || t.callback, this);
    },
    afterTickToLabelConversion: function afterTickToLabelConversion() {
      V.callback(this.options.afterTickToLabelConversion, [this]);
    },
    beforeCalculateTickRotation: function beforeCalculateTickRotation() {
      V.callback(this.options.beforeCalculateTickRotation, [this]);
    },
    calculateTickRotation: function calculateTickRotation() {
      var t,
          e,
          n,
          i,
          a,
          r,
          o,
          s = this,
          l = s.options,
          u = l.ticks,
          d = s.getTicks().length,
          h = u.minRotation || 0,
          c = u.maxRotation,
          f = h;
      !s._isVisible() || !u.display || h >= c || d <= 1 || !s.isHorizontal() ? s.labelRotation = h : (e = (t = s._getLabelSizes()).widest.width, n = t.highest.height - t.highest.offset, i = Math.min(s.maxWidth, s.chart.width - e), e + 6 > (a = l.offset ? s.maxWidth / d : i / (d - 1)) && (a = i / (d - (l.offset ? .5 : 1)), r = s.maxHeight - cn(l.gridLines) - u.padding - fn(l.scaleLabel), o = Math.sqrt(e * e + n * n), f = V.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / a, 1)), Math.asin(Math.min(r / o, 1)) - Math.asin(n / o))), f = Math.max(h, Math.min(c, f))), s.labelRotation = f);
    },
    afterCalculateTickRotation: function afterCalculateTickRotation() {
      V.callback(this.options.afterCalculateTickRotation, [this]);
    },
    beforeFit: function beforeFit() {
      V.callback(this.options.beforeFit, [this]);
    },
    fit: function fit() {
      var t = this,
          e = t.minSize = {
        width: 0,
        height: 0
      },
          n = t.chart,
          i = t.options,
          a = i.ticks,
          r = i.scaleLabel,
          o = i.gridLines,
          s = t._isVisible(),
          l = "bottom" === i.position,
          u = t.isHorizontal();

      if (u ? e.width = t.maxWidth : s && (e.width = cn(o) + fn(r)), u ? s && (e.height = cn(o) + fn(r)) : e.height = t.maxHeight, a.display && s) {
        var d = pn(a),
            h = t._getLabelSizes(),
            c = h.first,
            f = h.last,
            g = h.widest,
            p = h.highest,
            m = .4 * d.minor.lineHeight,
            v = a.padding;

        if (u) {
          var b = 0 !== t.labelRotation,
              x = V.toRadians(t.labelRotation),
              y = Math.cos(x),
              _ = Math.sin(x),
              k = _ * g.width + y * (p.height - (b ? p.offset : 0)) + (b ? 0 : m);

          e.height = Math.min(t.maxHeight, e.height + k + v);
          var w,
              M,
              S = t.getPixelForTick(0) - t.left,
              C = t.right - t.getPixelForTick(t.getTicks().length - 1);
          b ? (w = l ? y * c.width + _ * c.offset : _ * (c.height - c.offset), M = l ? _ * (f.height - f.offset) : y * f.width + _ * f.offset) : (w = c.width / 2, M = f.width / 2), t.paddingLeft = Math.max((w - S) * t.width / (t.width - S), 0) + 3, t.paddingRight = Math.max((M - C) * t.width / (t.width - C), 0) + 3;
        } else {
          var P = a.mirror ? 0 : g.width + v + m;
          e.width = Math.min(t.maxWidth, e.width + P), t.paddingTop = c.height / 2, t.paddingBottom = f.height / 2;
        }
      }

      t.handleMargins(), u ? (t.width = t._length = n.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = n.height - t.margins.top - t.margins.bottom);
    },
    handleMargins: function handleMargins() {
      var t = this;
      t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom));
    },
    afterFit: function afterFit() {
      V.callback(this.options.afterFit, [this]);
    },
    isHorizontal: function isHorizontal() {
      var t = this.options.position;
      return "top" === t || "bottom" === t;
    },
    isFullWidth: function isFullWidth() {
      return this.options.fullWidth;
    },
    getRightValue: function getRightValue(t) {
      if (sn(t)) return NaN;
      if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
      if (t) if (this.isHorizontal()) {
        if (void 0 !== t.x) return this.getRightValue(t.x);
      } else if (void 0 !== t.y) return this.getRightValue(t.y);
      return t;
    },
    _convertTicksToLabels: function _convertTicksToLabels(t) {
      var e,
          n,
          i,
          a = this;

      for (a.ticks = t.map(function (t) {
        return t.value;
      }), a.beforeTickToLabelConversion(), e = a.convertTicksToLabels(t) || a.ticks, a.afterTickToLabelConversion(), n = 0, i = t.length; n < i; ++n) {
        t[n].label = e[n];
      }

      return e;
    },
    _getLabelSizes: function _getLabelSizes() {
      var t = this,
          e = t._labelSizes;
      return e || (t._labelSizes = e = hn(t.ctx, pn(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e;
    },
    _parseValue: function _parseValue(t) {
      var e, n, i, a;
      return on(t) ? (e = +this.getRightValue(t[0]), n = +this.getRightValue(t[1]), i = Math.min(e, n), a = Math.max(e, n)) : (e = void 0, n = t = +this.getRightValue(t), i = t, a = t), {
        min: i,
        max: a,
        start: e,
        end: n
      };
    },
    _getScaleLabel: function _getScaleLabel(t) {
      var e = this._parseValue(t);

      return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t);
    },
    getLabelForIndex: V.noop,
    getPixelForValue: V.noop,
    getValueForPixel: V.noop,
    getPixelForTick: function getPixelForTick(t) {
      var e = this.options.offset,
          n = this._ticks.length,
          i = 1 / Math.max(n - (e ? 0 : 1), 1);
      return t < 0 || t > n - 1 ? null : this.getPixelForDecimal(t * i + (e ? i / 2 : 0));
    },
    getPixelForDecimal: function getPixelForDecimal(t) {
      return this._reversePixels && (t = 1 - t), this._startPixel + t * this._length;
    },
    getDecimalForPixel: function getDecimalForPixel(t) {
      var e = (t - this._startPixel) / this._length;
      return this._reversePixels ? 1 - e : e;
    },
    getBasePixel: function getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    },
    getBaseValue: function getBaseValue() {
      var t = this.min,
          e = this.max;
      return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    },
    _autoSkip: function _autoSkip(t) {
      var e,
          n,
          i,
          a,
          r = this.options.ticks,
          o = this._length,
          s = r.maxTicksLimit || o / this._tickSize() + 1,
          l = r.major.enabled ? function (t) {
        var e,
            n,
            i = [];

        for (e = 0, n = t.length; e < n; e++) {
          t[e].major && i.push(e);
        }

        return i;
      }(t) : [],
          u = l.length,
          d = l[0],
          h = l[u - 1];
      if (u > s) return function (t, e, n) {
        var i,
            a,
            r = 0,
            o = e[0];

        for (n = Math.ceil(n), i = 0; i < t.length; i++) {
          a = t[i], i === o ? (a._index = i, o = e[++r * n]) : delete a.label;
        }
      }(t, l, u / s), mn(t);

      if (i = function (t, e, n, i) {
        var a,
            r,
            o,
            s,
            l = function (t) {
          var e,
              n,
              i = t.length;
          if (i < 2) return !1;

          for (n = t[0], e = 1; e < i; ++e) {
            if (t[e] - t[e - 1] !== n) return !1;
          }

          return n;
        }(t),
            u = (e.length - 1) / i;

        if (!l) return Math.max(u, 1);

        for (o = 0, s = (a = V.math._factorize(l)).length - 1; o < s; o++) {
          if ((r = a[o]) > u) return r;
        }

        return Math.max(u, 1);
      }(l, t, 0, s), u > 0) {
        for (e = 0, n = u - 1; e < n; e++) {
          vn(t, i, l[e], l[e + 1]);
        }

        return a = u > 1 ? (h - d) / (u - 1) : null, vn(t, i, V.isNullOrUndef(a) ? 0 : d - a, d), vn(t, i, h, V.isNullOrUndef(a) ? t.length : h + a), mn(t);
      }

      return vn(t, i), mn(t);
    },
    _tickSize: function _tickSize() {
      var t = this.options.ticks,
          e = V.toRadians(this.labelRotation),
          n = Math.abs(Math.cos(e)),
          i = Math.abs(Math.sin(e)),
          a = this._getLabelSizes(),
          r = t.autoSkipPadding || 0,
          o = a ? a.widest.width + r : 0,
          s = a ? a.highest.height + r : 0;

      return this.isHorizontal() ? s * n > o * i ? o / n : s / i : s * i < o * n ? s / n : o / i;
    },
    _isVisible: function _isVisible() {
      var t,
          e,
          n,
          i = this.chart,
          a = this.options.display;
      if ("auto" !== a) return !!a;

      for (t = 0, e = i.data.datasets.length; t < e; ++t) {
        if (i.isDatasetVisible(t) && ((n = i.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
      }

      return !1;
    },
    _computeGridLineItems: function _computeGridLineItems(t) {
      var e,
          n,
          i,
          a,
          r,
          o,
          s,
          l,
          u,
          d,
          h,
          c,
          f,
          g,
          p,
          m,
          v,
          b = this,
          x = b.chart,
          y = b.options,
          _ = y.gridLines,
          k = y.position,
          w = _.offsetGridLines,
          M = b.isHorizontal(),
          S = b._ticksToDraw,
          C = S.length + (w ? 1 : 0),
          P = cn(_),
          A = [],
          D = _.drawBorder ? un(_.lineWidth, 0, 0) : 0,
          T = D / 2,
          I = V._alignPixel,
          F = function F(t) {
        return I(x, t, D);
      };

      for ("top" === k ? (e = F(b.bottom), s = b.bottom - P, u = e - T, h = F(t.top) + T, f = t.bottom) : "bottom" === k ? (e = F(b.top), h = t.top, f = F(t.bottom) - T, s = e + T, u = b.top + P) : "left" === k ? (e = F(b.right), o = b.right - P, l = e - T, d = F(t.left) + T, c = t.right) : (e = F(b.left), d = t.left, c = F(t.right) - T, o = e + T, l = b.left + P), n = 0; n < C; ++n) {
        i = S[n] || {}, sn(i.label) && n < S.length || (n === b.zeroLineIndex && y.offset === w ? (g = _.zeroLineWidth, p = _.zeroLineColor, m = _.zeroLineBorderDash || [], v = _.zeroLineBorderDashOffset || 0) : (g = un(_.lineWidth, n, 1), p = un(_.color, n, "rgba(0,0,0,0.1)"), m = _.borderDash || [], v = _.borderDashOffset || 0), void 0 !== (a = dn(b, i._index || n, w)) && (r = I(x, a, g), M ? o = l = d = c = r : s = u = h = f = r, A.push({
          tx1: o,
          ty1: s,
          tx2: l,
          ty2: u,
          x1: d,
          y1: h,
          x2: c,
          y2: f,
          width: g,
          color: p,
          borderDash: m,
          borderDashOffset: v
        })));
      }

      return A.ticksLength = C, A.borderValue = e, A;
    },
    _computeLabelItems: function _computeLabelItems() {
      var t,
          e,
          n,
          i,
          a,
          r,
          o,
          s,
          l,
          u,
          d,
          h,
          c = this,
          f = c.options,
          g = f.ticks,
          p = f.position,
          m = g.mirror,
          v = c.isHorizontal(),
          b = c._ticksToDraw,
          x = pn(g),
          y = g.padding,
          _ = cn(f.gridLines),
          k = -V.toRadians(c.labelRotation),
          w = [];

      for ("top" === p ? (r = c.bottom - _ - y, o = k ? "left" : "center") : "bottom" === p ? (r = c.top + _ + y, o = k ? "right" : "center") : "left" === p ? (a = c.right - (m ? 0 : _) - y, o = m ? "left" : "right") : (a = c.left + (m ? 0 : _) + y, o = m ? "right" : "left"), t = 0, e = b.length; t < e; ++t) {
        i = (n = b[t]).label, sn(i) || (s = c.getPixelForTick(n._index || t) + g.labelOffset, u = (l = n.major ? x.major : x.minor).lineHeight, d = on(i) ? i.length : 1, v ? (a = s, h = "top" === p ? ((k ? 1 : .5) - d) * u : (k ? 0 : .5) * u) : (r = s, h = (1 - d) * u / 2), w.push({
          x: a,
          y: r,
          rotation: k,
          label: i,
          font: l,
          textOffset: h,
          textAlign: o
        }));
      }

      return w;
    },
    _drawGrid: function _drawGrid(t) {
      var e = this,
          n = e.options.gridLines;

      if (n.display) {
        var i,
            a,
            r,
            o,
            s,
            l = e.ctx,
            u = e.chart,
            d = V._alignPixel,
            h = n.drawBorder ? un(n.lineWidth, 0, 0) : 0,
            c = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));

        for (r = 0, o = c.length; r < o; ++r) {
          i = (s = c[r]).width, a = s.color, i && a && (l.save(), l.lineWidth = i, l.strokeStyle = a, l.setLineDash && (l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset), l.beginPath(), n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)), n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)), l.stroke(), l.restore());
        }

        if (h) {
          var f,
              g,
              p,
              m,
              v = h,
              b = un(n.lineWidth, c.ticksLength - 1, 1),
              x = c.borderValue;
          e.isHorizontal() ? (f = d(u, e.left, v) - v / 2, g = d(u, e.right, b) + b / 2, p = m = x) : (p = d(u, e.top, v) - v / 2, m = d(u, e.bottom, b) + b / 2, f = g = x), l.lineWidth = h, l.strokeStyle = un(n.color, 0), l.beginPath(), l.moveTo(f, p), l.lineTo(g, m), l.stroke();
        }
      }
    },
    _drawLabels: function _drawLabels() {
      var t = this;

      if (t.options.ticks.display) {
        var e,
            n,
            i,
            a,
            r,
            o,
            s,
            l,
            u = t.ctx,
            d = t._labelItems || (t._labelItems = t._computeLabelItems());

        for (e = 0, i = d.length; e < i; ++e) {
          if (o = (r = d[e]).font, u.save(), u.translate(r.x, r.y), u.rotate(r.rotation), u.font = o.string, u.fillStyle = o.color, u.textBaseline = "middle", u.textAlign = r.textAlign, s = r.label, l = r.textOffset, on(s)) for (n = 0, a = s.length; n < a; ++n) {
            u.fillText("" + s[n], 0, l), l += o.lineHeight;
          } else u.fillText(s, 0, l);
          u.restore();
        }
      }
    },
    _drawTitle: function _drawTitle() {
      var t = this,
          e = t.ctx,
          n = t.options,
          i = n.scaleLabel;

      if (i.display) {
        var a,
            r,
            o = ln(i.fontColor, z.global.defaultFontColor),
            s = V.options._parseFont(i),
            l = V.options.toPadding(i.padding),
            u = s.lineHeight / 2,
            d = n.position,
            h = 0;

        if (t.isHorizontal()) a = t.left + t.width / 2, r = "bottom" === d ? t.bottom - u - l.bottom : t.top + u + l.top;else {
          var c = "left" === d;
          a = c ? t.left + u + l.top : t.right - u - l.top, r = t.top + t.height / 2, h = c ? -.5 * Math.PI : .5 * Math.PI;
        }
        e.save(), e.translate(a, r), e.rotate(h), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = o, e.font = s.string, e.fillText(i.labelString, 0, 0), e.restore();
      }
    },
    draw: function draw(t) {
      this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels());
    },
    _layers: function _layers() {
      var t = this,
          e = t.options,
          n = e.ticks && e.ticks.z || 0,
          i = e.gridLines && e.gridLines.z || 0;
      return t._isVisible() && n !== i && t.draw === t._draw ? [{
        z: i,
        draw: function draw() {
          t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments);
        }
      }, {
        z: n,
        draw: function draw() {
          t._drawLabels.apply(t, arguments);
        }
      }] : [{
        z: n,
        draw: function draw() {
          t.draw.apply(t, arguments);
        }
      }];
    },
    _getMatchingVisibleMetas: function _getMatchingVisibleMetas(t) {
      var e = this,
          n = e.isHorizontal();
      return e.chart._getSortedVisibleDatasetMetas().filter(function (i) {
        return (!t || i.type === t) && (n ? i.xAxisID === e.id : i.yAxisID === e.id);
      });
    }
  });
  bn.prototype._draw = bn.prototype.draw;

  var xn = bn,
      yn = V.isNullOrUndef,
      _n = xn.extend({
    determineDataLimits: function determineDataLimits() {
      var t,
          e = this,
          n = e._getLabels(),
          i = e.options.ticks,
          a = i.min,
          r = i.max,
          o = 0,
          s = n.length - 1;

      void 0 !== a && (t = n.indexOf(a)) >= 0 && (o = t), void 0 !== r && (t = n.indexOf(r)) >= 0 && (s = t), e.minIndex = o, e.maxIndex = s, e.min = n[o], e.max = n[s];
    },
    buildTicks: function buildTicks() {
      var t = this._getLabels(),
          e = this.minIndex,
          n = this.maxIndex;

      this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1);
    },
    getLabelForIndex: function getLabelForIndex(t, e) {
      var n = this.chart;
      return n.getDatasetMeta(e).controller._getValueScaleId() === this.id ? this.getRightValue(n.data.datasets[e].data[t]) : this._getLabels()[t];
    },
    _configure: function _configure() {
      var t = this,
          e = t.options.offset,
          n = t.ticks;
      xn.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), n && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(n.length - (e ? 0 : 1), 1));
    },
    getPixelForValue: function getPixelForValue(t, e, n) {
      var i,
          a,
          r,
          o = this;
      return yn(e) || yn(n) || (t = o.chart.data.datasets[n].data[e]), yn(t) || (i = o.isHorizontal() ? t.x : t.y), (void 0 !== i || void 0 !== t && isNaN(e)) && (a = o._getLabels(), t = V.valueOrDefault(i, t), e = -1 !== (r = a.indexOf(t)) ? r : e, isNaN(e) && (e = t)), o.getPixelForDecimal((e - o._startValue) / o._valueRange);
    },
    getPixelForTick: function getPixelForTick(t) {
      var e = this.ticks;
      return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex);
    },
    getValueForPixel: function getValueForPixel(t) {
      var e = Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
      return Math.min(Math.max(e, 0), this.ticks.length - 1);
    },
    getBasePixel: function getBasePixel() {
      return this.bottom;
    }
  }),
      kn = {
    position: "bottom"
  };

  _n._defaults = kn;
  var wn = V.noop,
      Mn = V.isNullOrUndef;
  var Sn = xn.extend({
    getRightValue: function getRightValue(t) {
      return "string" == typeof t ? +t : xn.prototype.getRightValue.call(this, t);
    },
    handleTickRangeOptions: function handleTickRangeOptions() {
      var t = this,
          e = t.options.ticks;

      if (e.beginAtZero) {
        var n = V.sign(t.min),
            i = V.sign(t.max);
        n < 0 && i < 0 ? t.max = 0 : n > 0 && i > 0 && (t.min = 0);
      }

      var a = void 0 !== e.min || void 0 !== e.suggestedMin,
          r = void 0 !== e.max || void 0 !== e.suggestedMax;
      void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== r && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
    },
    getTickLimit: function getTickLimit() {
      var t,
          e = this.options.ticks,
          n = e.stepSize,
          i = e.maxTicksLimit;
      return n ? t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (t = this._computeTickLimit(), i = i || 11), i && (t = Math.min(i, t)), t;
    },
    _computeTickLimit: function _computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    },
    handleDirectionalChanges: wn,
    buildTicks: function buildTicks() {
      var t = this,
          e = t.options.ticks,
          n = t.getTickLimit(),
          i = {
        maxTicks: n = Math.max(2, n),
        min: e.min,
        max: e.max,
        precision: e.precision,
        stepSize: V.valueOrDefault(e.fixedStepSize, e.stepSize)
      },
          a = t.ticks = function (t, e) {
        var n,
            i,
            a,
            r,
            o = [],
            s = t.stepSize,
            l = s || 1,
            u = t.maxTicks - 1,
            d = t.min,
            h = t.max,
            c = t.precision,
            f = e.min,
            g = e.max,
            p = V.niceNum((g - f) / u / l) * l;
        if (p < 1e-14 && Mn(d) && Mn(h)) return [f, g];
        (r = Math.ceil(g / p) - Math.floor(f / p)) > u && (p = V.niceNum(r * p / u / l) * l), s || Mn(c) ? n = Math.pow(10, V._decimalPlaces(p)) : (n = Math.pow(10, c), p = Math.ceil(p * n) / n), i = Math.floor(f / p) * p, a = Math.ceil(g / p) * p, s && (!Mn(d) && V.almostWhole(d / p, p / 1e3) && (i = d), !Mn(h) && V.almostWhole(h / p, p / 1e3) && (a = h)), r = (a - i) / p, r = V.almostEquals(r, Math.round(r), p / 1e3) ? Math.round(r) : Math.ceil(r), i = Math.round(i * n) / n, a = Math.round(a * n) / n, o.push(Mn(d) ? i : d);

        for (var m = 1; m < r; ++m) {
          o.push(Math.round((i + m * p) * n) / n);
        }

        return o.push(Mn(h) ? a : h), o;
      }(i, t);

      t.handleDirectionalChanges(), t.max = V.max(a), t.min = V.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
    },
    convertTicksToLabels: function convertTicksToLabels() {
      var t = this;
      t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), xn.prototype.convertTicksToLabels.call(t);
    },
    _configure: function _configure() {
      var t,
          e = this,
          n = e.getTicks(),
          i = e.min,
          a = e.max;
      xn.prototype._configure.call(e), e.options.offset && n.length && (i -= t = (a - i) / Math.max(n.length - 1, 1) / 2, a += t), e._startValue = i, e._endValue = a, e._valueRange = a - i;
    }
  }),
      Cn = {
    position: "left",
    ticks: {
      callback: rn.formatters.linear
    }
  };

  function Pn(t, e, n, i) {
    var a,
        r,
        o = t.options,
        s = function (t, e, n) {
      var i = [n.type, void 0 === e && void 0 === n.stack ? n.index : "", n.stack].join(".");
      return void 0 === t[i] && (t[i] = {
        pos: [],
        neg: []
      }), t[i];
    }(e, o.stacked, n),
        l = s.pos,
        u = s.neg,
        d = i.length;

    for (a = 0; a < d; ++a) {
      r = t._parseValue(i[a]), isNaN(r.min) || isNaN(r.max) || n.data[a].hidden || (l[a] = l[a] || 0, u[a] = u[a] || 0, o.relativePoints ? l[a] = 100 : r.min < 0 || r.max < 0 ? u[a] += r.min : l[a] += r.max);
    }
  }

  function An(t, e, n) {
    var i,
        a,
        r = n.length;

    for (i = 0; i < r; ++i) {
      a = t._parseValue(n[i]), isNaN(a.min) || isNaN(a.max) || e.data[i].hidden || (t.min = Math.min(t.min, a.min), t.max = Math.max(t.max, a.max));
    }
  }

  var Dn = Sn.extend({
    determineDataLimits: function determineDataLimits() {
      var t,
          e,
          n,
          i,
          a = this,
          r = a.options,
          o = a.chart.data.datasets,
          s = a._getMatchingVisibleMetas(),
          l = r.stacked,
          u = {},
          d = s.length;

      if (a.min = Number.POSITIVE_INFINITY, a.max = Number.NEGATIVE_INFINITY, void 0 === l) for (t = 0; !l && t < d; ++t) {
        l = void 0 !== (e = s[t]).stack;
      }

      for (t = 0; t < d; ++t) {
        n = o[(e = s[t]).index].data, l ? Pn(a, u, e, n) : An(a, e, n);
      }

      V.each(u, function (t) {
        i = t.pos.concat(t.neg), a.min = Math.min(a.min, V.min(i)), a.max = Math.max(a.max, V.max(i));
      }), a.min = V.isFinite(a.min) && !isNaN(a.min) ? a.min : 0, a.max = V.isFinite(a.max) && !isNaN(a.max) ? a.max : 1, a.handleTickRangeOptions();
    },
    _computeTickLimit: function _computeTickLimit() {
      var t;
      return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = V.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight));
    },
    handleDirectionalChanges: function handleDirectionalChanges() {
      this.isHorizontal() || this.ticks.reverse();
    },
    getLabelForIndex: function getLabelForIndex(t, e) {
      return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
    },
    getPixelForValue: function getPixelForValue(t) {
      return this.getPixelForDecimal((+this.getRightValue(t) - this._startValue) / this._valueRange);
    },
    getValueForPixel: function getValueForPixel(t) {
      return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
    },
    getPixelForTick: function getPixelForTick(t) {
      var e = this.ticksAsNumbers;
      return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]);
    }
  }),
      Tn = Cn;
  Dn._defaults = Tn;
  var In = V.valueOrDefault,
      Fn = V.math.log10;
  var Ln = {
    position: "left",
    ticks: {
      callback: rn.formatters.logarithmic
    }
  };

  function On(t, e) {
    return V.isFinite(t) && t >= 0 ? t : e;
  }

  var Rn = xn.extend({
    determineDataLimits: function determineDataLimits() {
      var t,
          e,
          n,
          i,
          a,
          r,
          o = this,
          s = o.options,
          l = o.chart,
          u = l.data.datasets,
          d = o.isHorizontal();

      function h(t) {
        return d ? t.xAxisID === o.id : t.yAxisID === o.id;
      }

      o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, o.minNotZero = Number.POSITIVE_INFINITY;
      var c = s.stacked;
      if (void 0 === c) for (t = 0; t < u.length; t++) {
        if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e) && void 0 !== e.stack) {
          c = !0;
          break;
        }
      }

      if (s.stacked || c) {
        var f = {};

        for (t = 0; t < u.length; t++) {
          var g = [(e = l.getDatasetMeta(t)).type, void 0 === s.stacked && void 0 === e.stack ? t : "", e.stack].join(".");
          if (l.isDatasetVisible(t) && h(e)) for (void 0 === f[g] && (f[g] = []), a = 0, r = (i = u[t].data).length; a < r; a++) {
            var p = f[g];
            n = o._parseValue(i[a]), isNaN(n.min) || isNaN(n.max) || e.data[a].hidden || n.min < 0 || n.max < 0 || (p[a] = p[a] || 0, p[a] += n.max);
          }
        }

        V.each(f, function (t) {
          if (t.length > 0) {
            var e = V.min(t),
                n = V.max(t);
            o.min = Math.min(o.min, e), o.max = Math.max(o.max, n);
          }
        });
      } else for (t = 0; t < u.length; t++) {
        if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e)) for (a = 0, r = (i = u[t].data).length; a < r; a++) {
          n = o._parseValue(i[a]), isNaN(n.min) || isNaN(n.max) || e.data[a].hidden || n.min < 0 || n.max < 0 || (o.min = Math.min(n.min, o.min), o.max = Math.max(n.max, o.max), 0 !== n.min && (o.minNotZero = Math.min(n.min, o.minNotZero)));
        }
      }

      o.min = V.isFinite(o.min) ? o.min : null, o.max = V.isFinite(o.max) ? o.max : null, o.minNotZero = V.isFinite(o.minNotZero) ? o.minNotZero : null, this.handleTickRangeOptions();
    },
    handleTickRangeOptions: function handleTickRangeOptions() {
      var t = this,
          e = t.options.ticks;
      t.min = On(e.min, t.min), t.max = On(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(Fn(t.min)) - 1), t.max = Math.pow(10, Math.floor(Fn(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(Fn(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(Fn(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(Fn(t.max))) : t.minNotZero = 1);
    },
    buildTicks: function buildTicks() {
      var t = this,
          e = t.options.ticks,
          n = !t.isHorizontal(),
          i = {
        min: On(e.min),
        max: On(e.max)
      },
          a = t.ticks = function (t, e) {
        var n,
            i,
            a = [],
            r = In(t.min, Math.pow(10, Math.floor(Fn(e.min)))),
            o = Math.floor(Fn(e.max)),
            s = Math.ceil(e.max / Math.pow(10, o));
        0 === r ? (n = Math.floor(Fn(e.minNotZero)), i = Math.floor(e.minNotZero / Math.pow(10, n)), a.push(r), r = i * Math.pow(10, n)) : (n = Math.floor(Fn(r)), i = Math.floor(r / Math.pow(10, n)));
        var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;

        do {
          a.push(r), 10 === ++i && (i = 1, l = ++n >= 0 ? 1 : l), r = Math.round(i * Math.pow(10, n) * l) / l;
        } while (n < o || n === o && i < s);

        var u = In(t.max, r);
        return a.push(u), a;
      }(i, t);

      t.max = V.max(a), t.min = V.min(a), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && a.reverse();
    },
    convertTicksToLabels: function convertTicksToLabels() {
      this.tickValues = this.ticks.slice(), xn.prototype.convertTicksToLabels.call(this);
    },
    getLabelForIndex: function getLabelForIndex(t, e) {
      return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
    },
    getPixelForTick: function getPixelForTick(t) {
      var e = this.tickValues;
      return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]);
    },
    _getFirstTickValue: function _getFirstTickValue(t) {
      var e = Math.floor(Fn(t));
      return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
    },
    _configure: function _configure() {
      var t = this,
          e = t.min,
          n = 0;
      xn.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), n = In(t.options.ticks.fontSize, z.global.defaultFontSize) / t._length), t._startValue = Fn(e), t._valueOffset = n, t._valueRange = (Fn(t.max) - Fn(e)) / (1 - n);
    },
    getPixelForValue: function getPixelForValue(t) {
      var e = this,
          n = 0;
      return (t = +e.getRightValue(t)) > e.min && t > 0 && (n = (Fn(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(n);
    },
    getValueForPixel: function getValueForPixel(t) {
      var e = this,
          n = e.getDecimalForPixel(t);
      return 0 === n && 0 === e.min ? 0 : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange);
    }
  }),
      zn = Ln;
  Rn._defaults = zn;
  var Nn = V.valueOrDefault,
      Bn = V.valueAtIndexOrDefault,
      En = V.options.resolve,
      Wn = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      color: "rgba(0,0,0,0.1)",
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    gridLines: {
      circular: !1
    },
    ticks: {
      showLabelBackdrop: !0,
      backdropColor: "rgba(255,255,255,0.75)",
      backdropPaddingY: 2,
      backdropPaddingX: 2,
      callback: rn.formatters.linear
    },
    pointLabels: {
      display: !0,
      fontSize: 10,
      callback: function callback(t) {
        return t;
      }
    }
  };

  function Vn(t) {
    var e = t.ticks;
    return e.display && t.display ? Nn(e.fontSize, z.global.defaultFontSize) + 2 * e.backdropPaddingY : 0;
  }

  function Hn(t, e, n, i, a) {
    return t === i || t === a ? {
      start: e - n / 2,
      end: e + n / 2
    } : t < i || t > a ? {
      start: e - n,
      end: e
    } : {
      start: e,
      end: e + n
    };
  }

  function jn(t) {
    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
  }

  function qn(t, e, n, i) {
    var a,
        r,
        o = n.y + i / 2;
    if (V.isArray(e)) for (a = 0, r = e.length; a < r; ++a) {
      t.fillText(e[a], n.x, o), o += i;
    } else t.fillText(e, n.x, o);
  }

  function Un(t, e, n) {
    90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h);
  }

  function Yn(t) {
    return V.isNumber(t) ? t : 0;
  }

  var Gn = Sn.extend({
    setDimensions: function setDimensions() {
      var t = this;
      t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Vn(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2;
    },
    determineDataLimits: function determineDataLimits() {
      var t = this,
          e = t.chart,
          n = Number.POSITIVE_INFINITY,
          i = Number.NEGATIVE_INFINITY;
      V.each(e.data.datasets, function (a, r) {
        if (e.isDatasetVisible(r)) {
          var o = e.getDatasetMeta(r);
          V.each(a.data, function (e, a) {
            var r = +t.getRightValue(e);
            isNaN(r) || o.data[a].hidden || (n = Math.min(r, n), i = Math.max(r, i));
          });
        }
      }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions();
    },
    _computeTickLimit: function _computeTickLimit() {
      return Math.ceil(this.drawingArea / Vn(this.options));
    },
    convertTicksToLabels: function convertTicksToLabels() {
      var t = this;
      Sn.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(function () {
        var e = V.callback(t.options.pointLabels.callback, arguments, t);
        return e || 0 === e ? e : "";
      });
    },
    getLabelForIndex: function getLabelForIndex(t, e) {
      return +this.getRightValue(this.chart.data.datasets[e].data[t]);
    },
    fit: function fit() {
      var t = this.options;
      t.display && t.pointLabels.display ? function (t) {
        var e,
            n,
            i,
            a = V.options._parseFont(t.options.pointLabels),
            r = {
          l: 0,
          r: t.width,
          t: 0,
          b: t.height - t.paddingTop
        },
            o = {};

        t.ctx.font = a.string, t._pointLabelSizes = [];
        var s,
            l,
            u,
            d = t.chart.data.labels.length;

        for (e = 0; e < d; e++) {
          i = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = a.lineHeight, u = t.pointLabels[e], n = V.isArray(u) ? {
            w: V.longestText(s, s.font, u),
            h: u.length * l
          } : {
            w: s.measureText(u).width,
            h: l
          }, t._pointLabelSizes[e] = n;
          var h = t.getIndexAngle(e),
              c = V.toDegrees(h) % 360,
              f = Hn(c, i.x, n.w, 0, 180),
              g = Hn(c, i.y, n.h, 90, 270);
          f.start < r.l && (r.l = f.start, o.l = h), f.end > r.r && (r.r = f.end, o.r = h), g.start < r.t && (r.t = g.start, o.t = h), g.end > r.b && (r.b = g.end, o.b = h);
        }

        t.setReductions(t.drawingArea, r, o);
      }(this) : this.setCenterPoint(0, 0, 0, 0);
    },
    setReductions: function setReductions(t, e, n) {
      var i = this,
          a = e.l / Math.sin(n.l),
          r = Math.max(e.r - i.width, 0) / Math.sin(n.r),
          o = -e.t / Math.cos(n.t),
          s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
      a = Yn(a), r = Yn(r), o = Yn(o), s = Yn(s), i.drawingArea = Math.min(Math.floor(t - (a + r) / 2), Math.floor(t - (o + s) / 2)), i.setCenterPoint(a, r, o, s);
    },
    setCenterPoint: function setCenterPoint(t, e, n, i) {
      var a = this,
          r = a.width - e - a.drawingArea,
          o = t + a.drawingArea,
          s = n + a.drawingArea,
          l = a.height - a.paddingTop - i - a.drawingArea;
      a.xCenter = Math.floor((o + r) / 2 + a.left), a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop);
    },
    getIndexAngle: function getIndexAngle(t) {
      var e = this.chart,
          n = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360;
      return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360;
    },
    getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
      var e = this;
      if (V.isNullOrUndef(t)) return NaN;
      var n = e.drawingArea / (e.max - e.min);
      return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n;
    },
    getPointPosition: function getPointPosition(t, e) {
      var n = this.getIndexAngle(t) - Math.PI / 2;
      return {
        x: Math.cos(n) * e + this.xCenter,
        y: Math.sin(n) * e + this.yCenter
      };
    },
    getPointPositionForValue: function getPointPositionForValue(t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    },
    getBasePosition: function getBasePosition(t) {
      var e = this.min,
          n = this.max;
      return this.getPointPositionForValue(t || 0, this.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0);
    },
    _drawGrid: function _drawGrid() {
      var t,
          e,
          n,
          i = this,
          a = i.ctx,
          r = i.options,
          o = r.gridLines,
          s = r.angleLines,
          l = Nn(s.lineWidth, o.lineWidth),
          u = Nn(s.color, o.color);

      if (r.pointLabels.display && function (t) {
        var e = t.ctx,
            n = t.options,
            i = n.pointLabels,
            a = Vn(n),
            r = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
            o = V.options._parseFont(i);

        e.save(), e.font = o.string, e.textBaseline = "middle";

        for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
          var l = 0 === s ? a / 2 : 0,
              u = t.getPointPosition(s, r + l + 5),
              d = Bn(i.fontColor, s, z.global.defaultFontColor);
          e.fillStyle = d;
          var h = t.getIndexAngle(s),
              c = V.toDegrees(h);
          e.textAlign = jn(c), Un(c, t._pointLabelSizes[s], u), qn(e, t.pointLabels[s], u, o.lineHeight);
        }

        e.restore();
      }(i), o.display && V.each(i.ticks, function (t, n) {
        0 !== n && (e = i.getDistanceFromCenterForValue(i.ticksAsNumbers[n]), function (t, e, n, i) {
          var a,
              r = t.ctx,
              o = e.circular,
              s = t.chart.data.labels.length,
              l = Bn(e.color, i - 1),
              u = Bn(e.lineWidth, i - 1);

          if ((o || s) && l && u) {
            if (r.save(), r.strokeStyle = l, r.lineWidth = u, r.setLineDash && (r.setLineDash(e.borderDash || []), r.lineDashOffset = e.borderDashOffset || 0), r.beginPath(), o) r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);else {
              a = t.getPointPosition(0, n), r.moveTo(a.x, a.y);

              for (var d = 1; d < s; d++) {
                a = t.getPointPosition(d, n), r.lineTo(a.x, a.y);
              }
            }
            r.closePath(), r.stroke(), r.restore();
          }
        }(i, o, e, n));
      }), s.display && l && u) {
        for (a.save(), a.lineWidth = l, a.strokeStyle = u, a.setLineDash && (a.setLineDash(En([s.borderDash, o.borderDash, []])), a.lineDashOffset = En([s.borderDashOffset, o.borderDashOffset, 0])), t = i.chart.data.labels.length - 1; t >= 0; t--) {
          e = i.getDistanceFromCenterForValue(r.ticks.reverse ? i.min : i.max), n = i.getPointPosition(t, e), a.beginPath(), a.moveTo(i.xCenter, i.yCenter), a.lineTo(n.x, n.y), a.stroke();
        }

        a.restore();
      }
    },
    _drawLabels: function _drawLabels() {
      var t = this,
          e = t.ctx,
          n = t.options.ticks;

      if (n.display) {
        var i,
            a,
            r = t.getIndexAngle(0),
            o = V.options._parseFont(n),
            s = Nn(n.fontColor, z.global.defaultFontColor);

        e.save(), e.font = o.string, e.translate(t.xCenter, t.yCenter), e.rotate(r), e.textAlign = "center", e.textBaseline = "middle", V.each(t.ticks, function (r, l) {
          (0 !== l || n.reverse) && (i = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]), n.showLabelBackdrop && (a = e.measureText(r).width, e.fillStyle = n.backdropColor, e.fillRect(-a / 2 - n.backdropPaddingX, -i - o.size / 2 - n.backdropPaddingY, a + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY)), e.fillStyle = s, e.fillText(r, 0, -i));
        }), e.restore();
      }
    },
    _drawTitle: V.noop
  }),
      Xn = Wn;
  Gn._defaults = Xn;
  var Kn = V._deprecated,
      Zn = V.options.resolve,
      $n = V.valueOrDefault,
      Jn = Number.MIN_SAFE_INTEGER || -9007199254740991,
      Qn = Number.MAX_SAFE_INTEGER || 9007199254740991,
      ti = {
    millisecond: {
      common: !0,
      size: 1,
      steps: 1e3
    },
    second: {
      common: !0,
      size: 1e3,
      steps: 60
    },
    minute: {
      common: !0,
      size: 6e4,
      steps: 60
    },
    hour: {
      common: !0,
      size: 36e5,
      steps: 24
    },
    day: {
      common: !0,
      size: 864e5,
      steps: 30
    },
    week: {
      common: !1,
      size: 6048e5,
      steps: 4
    },
    month: {
      common: !0,
      size: 2628e6,
      steps: 12
    },
    quarter: {
      common: !1,
      size: 7884e6,
      steps: 4
    },
    year: {
      common: !0,
      size: 3154e7
    }
  },
      ei = Object.keys(ti);

  function ni(t, e) {
    return t - e;
  }

  function ii(t) {
    return V.valueOrDefault(t.time.min, t.ticks.min);
  }

  function ai(t) {
    return V.valueOrDefault(t.time.max, t.ticks.max);
  }

  function ri(t, e, n, i) {
    var a = function (t, e, n) {
      for (var i, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s;) {
        if (a = t[(i = o + s >> 1) - 1] || null, r = t[i], !a) return {
          lo: null,
          hi: r
        };
        if (r[e] < n) o = i + 1;else {
          if (!(a[e] > n)) return {
            lo: a,
            hi: r
          };
          s = i - 1;
        }
      }

      return {
        lo: r,
        hi: null
      };
    }(t, e, n),
        r = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
        o = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
        s = o[e] - r[e],
        l = s ? (n - r[e]) / s : 0,
        u = (o[i] - r[i]) * l;

    return r[i] + u;
  }

  function oi(t, e) {
    var n = t._adapter,
        i = t.options.time,
        a = i.parser,
        r = a || i.format,
        o = e;
    return "function" == typeof a && (o = a(o)), V.isFinite(o) || (o = "string" == typeof r ? n.parse(o, r) : n.parse(o)), null !== o ? +o : (a || "function" != typeof r || (o = r(e), V.isFinite(o) || (o = n.parse(o))), o);
  }

  function si(t, e) {
    if (V.isNullOrUndef(e)) return null;
    var n = t.options.time,
        i = oi(t, t.getRightValue(e));
    return null === i ? i : (n.round && (i = +t._adapter.startOf(i, n.round)), i);
  }

  function li(t, e, n, i) {
    var a,
        r,
        o,
        s = ei.length;

    for (a = ei.indexOf(t); a < s - 1; ++a) {
      if (o = (r = ti[ei[a]]).steps ? r.steps : Qn, r.common && Math.ceil((n - e) / (o * r.size)) <= i) return ei[a];
    }

    return ei[s - 1];
  }

  function ui(t, e, n) {
    var i,
        a,
        r = [],
        o = {},
        s = e.length;

    for (i = 0; i < s; ++i) {
      o[a = e[i]] = i, r.push({
        value: a,
        major: !1
      });
    }

    return 0 !== s && n ? function (t, e, n, i) {
      var a,
          r,
          o = t._adapter,
          s = +o.startOf(e[0].value, i),
          l = e[e.length - 1].value;

      for (a = s; a <= l; a = +o.add(a, 1, i)) {
        (r = n[a]) >= 0 && (e[r].major = !0);
      }

      return e;
    }(t, r, o, n) : r;
  }

  var di = xn.extend({
    initialize: function initialize() {
      this.mergeTicksOptions(), xn.prototype.initialize.call(this);
    },
    update: function update() {
      var t = this,
          e = t.options,
          n = e.time || (e.time = {}),
          i = t._adapter = new an._date(e.adapters.date);
      return Kn("time scale", n.format, "time.format", "time.parser"), Kn("time scale", n.min, "time.min", "ticks.min"), Kn("time scale", n.max, "time.max", "ticks.max"), V.mergeIf(n.displayFormats, i.formats()), xn.prototype.update.apply(t, arguments);
    },
    getRightValue: function getRightValue(t) {
      return t && void 0 !== t.t && (t = t.t), xn.prototype.getRightValue.call(this, t);
    },
    determineDataLimits: function determineDataLimits() {
      var t,
          e,
          n,
          i,
          a,
          r,
          o,
          s = this,
          l = s.chart,
          u = s._adapter,
          d = s.options,
          h = d.time.unit || "day",
          c = Qn,
          f = Jn,
          g = [],
          p = [],
          m = [],
          v = s._getLabels();

      for (t = 0, n = v.length; t < n; ++t) {
        m.push(si(s, v[t]));
      }

      for (t = 0, n = (l.data.datasets || []).length; t < n; ++t) {
        if (l.isDatasetVisible(t)) {
          if (a = l.data.datasets[t].data, V.isObject(a[0])) for (p[t] = [], e = 0, i = a.length; e < i; ++e) {
            r = si(s, a[e]), g.push(r), p[t][e] = r;
          } else p[t] = m.slice(0), o || (g = g.concat(m), o = !0);
        } else p[t] = [];
      }

      m.length && (c = Math.min(c, m[0]), f = Math.max(f, m[m.length - 1])), g.length && (g = n > 1 ? function (t) {
        var e,
            n,
            i,
            a = {},
            r = [];

        for (e = 0, n = t.length; e < n; ++e) {
          a[i = t[e]] || (a[i] = !0, r.push(i));
        }

        return r;
      }(g).sort(ni) : g.sort(ni), c = Math.min(c, g[0]), f = Math.max(f, g[g.length - 1])), c = si(s, ii(d)) || c, f = si(s, ai(d)) || f, c = c === Qn ? +u.startOf(Date.now(), h) : c, f = f === Jn ? +u.endOf(Date.now(), h) + 1 : f, s.min = Math.min(c, f), s.max = Math.max(c + 1, f), s._table = [], s._timestamps = {
        data: g,
        datasets: p,
        labels: m
      };
    },
    buildTicks: function buildTicks() {
      var t,
          e,
          n,
          i = this,
          a = i.min,
          r = i.max,
          o = i.options,
          s = o.ticks,
          l = o.time,
          u = i._timestamps,
          d = [],
          h = i.getLabelCapacity(a),
          c = s.source,
          f = o.distribution;

      for (u = "data" === c || "auto" === c && "series" === f ? u.data : "labels" === c ? u.labels : function (t, e, n, i) {
        var a,
            r = t._adapter,
            o = t.options,
            s = o.time,
            l = s.unit || li(s.minUnit, e, n, i),
            u = Zn([s.stepSize, s.unitStepSize, 1]),
            d = "week" === l && s.isoWeekday,
            h = e,
            c = [];
        if (d && (h = +r.startOf(h, "isoWeek", d)), h = +r.startOf(h, d ? "day" : l), r.diff(n, e, l) > 1e5 * u) throw e + " and " + n + " are too far apart with stepSize of " + u + " " + l;

        for (a = h; a < n; a = +r.add(a, u, l)) {
          c.push(a);
        }

        return a !== n && "ticks" !== o.bounds || c.push(a), c;
      }(i, a, r, h), "ticks" === o.bounds && u.length && (a = u[0], r = u[u.length - 1]), a = si(i, ii(o)) || a, r = si(i, ai(o)) || r, t = 0, e = u.length; t < e; ++t) {
        (n = u[t]) >= a && n <= r && d.push(n);
      }

      return i.min = a, i.max = r, i._unit = l.unit || (s.autoSkip ? li(l.minUnit, i.min, i.max, h) : function (t, e, n, i, a) {
        var r, o;

        for (r = ei.length - 1; r >= ei.indexOf(n); r--) {
          if (o = ei[r], ti[o].common && t._adapter.diff(a, i, o) >= e - 1) return o;
        }

        return ei[n ? ei.indexOf(n) : 0];
      }(i, d.length, l.minUnit, i.min, i.max)), i._majorUnit = s.major.enabled && "year" !== i._unit ? function (t) {
        for (var e = ei.indexOf(t) + 1, n = ei.length; e < n; ++e) {
          if (ti[ei[e]].common) return ei[e];
        }
      }(i._unit) : void 0, i._table = function (t, e, n, i) {
        if ("linear" === i || !t.length) return [{
          time: e,
          pos: 0
        }, {
          time: n,
          pos: 1
        }];
        var a,
            r,
            o,
            s,
            l,
            u = [],
            d = [e];

        for (a = 0, r = t.length; a < r; ++a) {
          (s = t[a]) > e && s < n && d.push(s);
        }

        for (d.push(n), a = 0, r = d.length; a < r; ++a) {
          l = d[a + 1], o = d[a - 1], s = d[a], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({
            time: s,
            pos: a / (r - 1)
          });
        }

        return u;
      }(i._timestamps.data, a, r, f), i._offsets = function (t, e, n, i, a) {
        var r,
            o,
            s = 0,
            l = 0;
        return a.offset && e.length && (r = ri(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - r : (ri(t, "time", e[1], "pos") - r) / 2, o = ri(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? o : (o - ri(t, "time", e[e.length - 2], "pos")) / 2), {
          start: s,
          end: l,
          factor: 1 / (s + 1 + l)
        };
      }(i._table, d, 0, 0, o), s.reverse && d.reverse(), ui(i, d, i._majorUnit);
    },
    getLabelForIndex: function getLabelForIndex(t, e) {
      var n = this,
          i = n._adapter,
          a = n.chart.data,
          r = n.options.time,
          o = a.labels && t < a.labels.length ? a.labels[t] : "",
          s = a.datasets[e].data[t];
      return V.isObject(s) && (o = n.getRightValue(s)), r.tooltipFormat ? i.format(oi(n, o), r.tooltipFormat) : "string" == typeof o ? o : i.format(oi(n, o), r.displayFormats.datetime);
    },
    tickFormatFunction: function tickFormatFunction(t, e, n, i) {
      var a = this._adapter,
          r = this.options,
          o = r.time.displayFormats,
          s = o[this._unit],
          l = this._majorUnit,
          u = o[l],
          d = n[e],
          h = r.ticks,
          c = l && u && d && d.major,
          f = a.format(t, i || (c ? u : s)),
          g = c ? h.major : h.minor,
          p = Zn([g.callback, g.userCallback, h.callback, h.userCallback]);
      return p ? p(f, e, n) : f;
    },
    convertTicksToLabels: function convertTicksToLabels(t) {
      var e,
          n,
          i = [];

      for (e = 0, n = t.length; e < n; ++e) {
        i.push(this.tickFormatFunction(t[e].value, e, t));
      }

      return i;
    },
    getPixelForOffset: function getPixelForOffset(t) {
      var e = this._offsets,
          n = ri(this._table, "time", t, "pos");
      return this.getPixelForDecimal((e.start + n) * e.factor);
    },
    getPixelForValue: function getPixelForValue(t, e, n) {
      var i = null;
      if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = si(this, t)), null !== i) return this.getPixelForOffset(i);
    },
    getPixelForTick: function getPixelForTick(t) {
      var e = this.getTicks();
      return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
    },
    getValueForPixel: function getValueForPixel(t) {
      var e = this._offsets,
          n = this.getDecimalForPixel(t) / e.factor - e.end,
          i = ri(this._table, "pos", n, "time");
      return this._adapter._create(i);
    },
    _getLabelSize: function _getLabelSize(t) {
      var e = this.options.ticks,
          n = this.ctx.measureText(t).width,
          i = V.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation),
          a = Math.cos(i),
          r = Math.sin(i),
          o = $n(e.fontSize, z.global.defaultFontSize);
      return {
        w: n * a + o * r,
        h: n * r + o * a
      };
    },
    getLabelWidth: function getLabelWidth(t) {
      return this._getLabelSize(t).w;
    },
    getLabelCapacity: function getLabelCapacity(t) {
      var e = this,
          n = e.options.time,
          i = n.displayFormats,
          a = i[n.unit] || i.millisecond,
          r = e.tickFormatFunction(t, 0, ui(e, [t], e._majorUnit), a),
          o = e._getLabelSize(r),
          s = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h);

      return e.options.offset && s--, s > 0 ? s : 1;
    }
  }),
      hi = {
    position: "bottom",
    distribution: "linear",
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      displayFormat: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      autoSkip: !1,
      source: "auto",
      major: {
        enabled: !1
      }
    }
  };
  di._defaults = hi;
  var ci = {
    category: _n,
    linear: Dn,
    logarithmic: Rn,
    radialLinear: Gn,
    time: di
  },
      fi = {
    datetime: "MMM D, YYYY, h:mm:ss a",
    millisecond: "h:mm:ss.SSS a",
    second: "h:mm:ss a",
    minute: "h:mm a",
    hour: "hA",
    day: "MMM D",
    week: "ll",
    month: "MMM YYYY",
    quarter: "[Q]Q - YYYY",
    year: "YYYY"
  };
  an._date.override("function" == typeof t ? {
    _id: "moment",
    formats: function formats() {
      return fi;
    },
    parse: function parse(e, n) {
      return "string" == typeof e && "string" == typeof n ? e = t(e, n) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null;
    },
    format: function format(e, n) {
      return t(e).format(n);
    },
    add: function add(e, n, i) {
      return t(e).add(n, i).valueOf();
    },
    diff: function diff(e, n, i) {
      return t(e).diff(t(n), i);
    },
    startOf: function startOf(e, n, i) {
      return e = t(e), "isoWeek" === n ? e.isoWeekday(i).valueOf() : e.startOf(n).valueOf();
    },
    endOf: function endOf(e, n) {
      return t(e).endOf(n).valueOf();
    },
    _create: function _create(e) {
      return t(e);
    }
  } : {}), z._set("global", {
    plugins: {
      filler: {
        propagate: !0
      }
    }
  });
  var gi = {
    dataset: function dataset(t) {
      var e = t.fill,
          n = t.chart,
          i = n.getDatasetMeta(e),
          a = i && n.isDatasetVisible(e) && i.dataset._children || [],
          r = a.length || 0;
      return r ? function (t, e) {
        return e < r && a[e]._view || null;
      } : null;
    },
    boundary: function boundary(t) {
      var e = t.boundary,
          n = e ? e.x : null,
          i = e ? e.y : null;
      return V.isArray(e) ? function (t, n) {
        return e[n];
      } : function (t) {
        return {
          x: null === n ? t.x : n,
          y: null === i ? t.y : i
        };
      };
    }
  };

  function pi(t, e, n) {
    var i,
        a = t._model || {},
        r = a.fill;
    if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;
    if (!0 === r) return "origin";
    if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return "-" !== r[0] && "+" !== r[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;

    switch (r) {
      case "bottom":
        return "start";

      case "top":
        return "end";

      case "zero":
        return "origin";

      case "origin":
      case "start":
      case "end":
        return r;

      default:
        return !1;
    }
  }

  function mi(t) {
    return (t.el._scale || {}).getPointPositionForValue ? function (t) {
      var e,
          n,
          i,
          a,
          r,
          o = t.el._scale,
          s = o.options,
          l = o.chart.data.labels.length,
          u = t.fill,
          d = [];
      if (!l) return null;

      for (e = s.ticks.reverse ? o.max : o.min, n = s.ticks.reverse ? o.min : o.max, i = o.getPointPositionForValue(0, e), a = 0; a < l; ++a) {
        r = "start" === u || "end" === u ? o.getPointPositionForValue(a, "start" === u ? e : n) : o.getBasePosition(a), s.gridLines.circular && (r.cx = i.x, r.cy = i.y, r.angle = o.getIndexAngle(a) - Math.PI / 2), d.push(r);
      }

      return d;
    }(t) : function (t) {
      var e,
          n = t.el._model || {},
          i = t.el._scale || {},
          a = t.fill,
          r = null;
      if (isFinite(a)) return null;

      if ("start" === a ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === a ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePixel && (r = i.getBasePixel()), null != r) {
        if (void 0 !== r.x && void 0 !== r.y) return r;
        if (V.isFinite(r)) return {
          x: (e = i.isHorizontal()) ? r : null,
          y: e ? null : r
        };
      }

      return null;
    }(t);
  }

  function vi(t, e, n) {
    var i,
        a = t[e].fill,
        r = [e];
    if (!n) return a;

    for (; !1 !== a && -1 === r.indexOf(a);) {
      if (!isFinite(a)) return a;
      if (!(i = t[a])) return !1;
      if (i.visible) return a;
      r.push(a), a = i.fill;
    }

    return !1;
  }

  function bi(t) {
    var e = t.fill,
        n = "dataset";
    return !1 === e ? null : (isFinite(e) || (n = "boundary"), gi[n](t));
  }

  function xi(t) {
    return t && !t.skip;
  }

  function yi(t, e, n, i, a) {
    var r, o, s, l;

    if (i && a) {
      for (t.moveTo(e[0].x, e[0].y), r = 1; r < i; ++r) {
        V.canvas.lineTo(t, e[r - 1], e[r]);
      }

      if (void 0 === n[0].angle) for (t.lineTo(n[a - 1].x, n[a - 1].y), r = a - 1; r > 0; --r) {
        V.canvas.lineTo(t, n[r], n[r - 1], !0);
      } else for (o = n[0].cx, s = n[0].cy, l = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)), r = a - 1; r > 0; --r) {
        t.arc(o, s, l, n[r].angle, n[r - 1].angle, !0);
      }
    }
  }

  function _i(t, e, n, i, a, r) {
    var o,
        s,
        l,
        u,
        d,
        h,
        c,
        f,
        g = e.length,
        p = i.spanGaps,
        m = [],
        v = [],
        b = 0,
        x = 0;

    for (t.beginPath(), o = 0, s = g; o < s; ++o) {
      d = n(u = e[l = o % g]._view, l, i), h = xi(u), c = xi(d), r && void 0 === f && h && (s = g + (f = o + 1)), h && c ? (b = m.push(u), x = v.push(d)) : b && x && (p ? (h && m.push(u), c && v.push(d)) : (yi(t, m, v, b, x), b = x = 0, m = [], v = []));
    }

    yi(t, m, v, b, x), t.closePath(), t.fillStyle = a, t.fill();
  }

  var ki = {
    id: "filler",
    afterDatasetsUpdate: function afterDatasetsUpdate(t, e) {
      var n,
          i,
          a,
          r,
          o = (t.data.datasets || []).length,
          s = e.propagate,
          l = [];

      for (i = 0; i < o; ++i) {
        r = null, (a = (n = t.getDatasetMeta(i)).dataset) && a._model && a instanceof _t.Line && (r = {
          visible: t.isDatasetVisible(i),
          fill: pi(a, i, o),
          chart: t,
          el: a
        }), n.$filler = r, l.push(r);
      }

      for (i = 0; i < o; ++i) {
        (r = l[i]) && (r.fill = vi(l, i, s), r.boundary = mi(r), r.mapper = bi(r));
      }
    },
    beforeDatasetsDraw: function beforeDatasetsDraw(t) {
      var e,
          n,
          i,
          a,
          r,
          o,
          s,
          l = t._getSortedVisibleDatasetMetas(),
          u = t.ctx;

      for (n = l.length - 1; n >= 0; --n) {
        (e = l[n].$filler) && e.visible && (a = (i = e.el)._view, r = i._children || [], o = e.mapper, s = a.backgroundColor || z.global.defaultColor, o && s && r.length && (V.canvas.clipArea(u, t.chartArea), _i(u, r, o, a, s, i._loop), V.canvas.unclipArea(u)));
      }
    }
  },
      wi = V.rtl.getRtlAdapter,
      Mi = V.noop,
      Si = V.valueOrDefault;

  function Ci(t, e) {
    return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
  }

  z._set("global", {
    legend: {
      display: !0,
      position: "top",
      align: "center",
      fullWidth: !0,
      reverse: !1,
      weight: 1e3,
      onClick: function onClick(t, e) {
        var n = e.datasetIndex,
            i = this.chart,
            a = i.getDatasetMeta(n);
        a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update();
      },
      onHover: null,
      onLeave: null,
      labels: {
        boxWidth: 40,
        padding: 10,
        generateLabels: function generateLabels(t) {
          var e = t.data.datasets,
              n = t.options.legend || {},
              i = n.labels && n.labels.usePointStyle;
          return t._getSortedDatasetMetas().map(function (n) {
            var a = n.controller.getStyle(i ? 0 : void 0);
            return {
              text: e[n.index].label,
              fillStyle: a.backgroundColor,
              hidden: !t.isDatasetVisible(n.index),
              lineCap: a.borderCapStyle,
              lineDash: a.borderDash,
              lineDashOffset: a.borderDashOffset,
              lineJoin: a.borderJoinStyle,
              lineWidth: a.borderWidth,
              strokeStyle: a.borderColor,
              pointStyle: a.pointStyle,
              rotation: a.rotation,
              datasetIndex: n.index
            };
          }, this);
        }
      }
    },
    legendCallback: function legendCallback(t) {
      var e,
          n,
          i,
          a = document.createElement("ul"),
          r = t.data.datasets;

      for (a.setAttribute("class", t.id + "-legend"), e = 0, n = r.length; e < n; e++) {
        (i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = r[e].backgroundColor, r[e].label && i.appendChild(document.createTextNode(r[e].label));
      }

      return a.outerHTML;
    }
  });

  var Pi = X.extend({
    initialize: function initialize(t) {
      V.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1;
    },
    beforeUpdate: Mi,
    update: function update(t, e, n) {
      var i = this;
      return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
    },
    afterUpdate: Mi,
    beforeSetDimensions: Mi,
    setDimensions: function setDimensions() {
      var t = this;
      t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: Mi,
    beforeBuildLabels: Mi,
    buildLabels: function buildLabels() {
      var t = this,
          e = t.options.labels || {},
          n = V.callback(e.generateLabels, [t.chart], t) || [];
      e.filter && (n = n.filter(function (n) {
        return e.filter(n, t.chart.data);
      })), t.options.reverse && n.reverse(), t.legendItems = n;
    },
    afterBuildLabels: Mi,
    beforeFit: Mi,
    fit: function fit() {
      var t = this,
          e = t.options,
          n = e.labels,
          i = e.display,
          a = t.ctx,
          r = V.options._parseFont(n),
          o = r.size,
          s = t.legendHitBoxes = [],
          l = t.minSize,
          u = t.isHorizontal();

      if (u ? (l.width = t.maxWidth, l.height = i ? 10 : 0) : (l.width = i ? 10 : 0, l.height = t.maxHeight), i) {
        if (a.font = r.string, u) {
          var d = t.lineWidths = [0],
              h = 0;
          a.textAlign = "left", a.textBaseline = "middle", V.each(t.legendItems, function (t, e) {
            var i = Ci(n, o) + o / 2 + a.measureText(t.text).width;
            (0 === e || d[d.length - 1] + i + 2 * n.padding > l.width) && (h += o + n.padding, d[d.length - (e > 0 ? 0 : 1)] = 0), s[e] = {
              left: 0,
              top: 0,
              width: i,
              height: o
            }, d[d.length - 1] += i + n.padding;
          }), l.height += h;
        } else {
          var c = n.padding,
              f = t.columnWidths = [],
              g = t.columnHeights = [],
              p = n.padding,
              m = 0,
              v = 0;
          V.each(t.legendItems, function (t, e) {
            var i = Ci(n, o) + o / 2 + a.measureText(t.text).width;
            e > 0 && v + o + 2 * c > l.height && (p += m + n.padding, f.push(m), g.push(v), m = 0, v = 0), m = Math.max(m, i), v += o + c, s[e] = {
              left: 0,
              top: 0,
              width: i,
              height: o
            };
          }), p += m, f.push(m), g.push(v), l.width += p;
        }

        t.width = l.width, t.height = l.height;
      } else t.width = l.width = t.height = l.height = 0;
    },
    afterFit: Mi,
    isHorizontal: function isHorizontal() {
      return "top" === this.options.position || "bottom" === this.options.position;
    },
    draw: function draw() {
      var t = this,
          e = t.options,
          n = e.labels,
          i = z.global,
          a = i.defaultColor,
          r = i.elements.line,
          o = t.height,
          s = t.columnHeights,
          l = t.width,
          u = t.lineWidths;

      if (e.display) {
        var d,
            h = wi(e.rtl, t.left, t.minSize.width),
            c = t.ctx,
            f = Si(n.fontColor, i.defaultFontColor),
            g = V.options._parseFont(n),
            p = g.size;

        c.textAlign = h.textAlign("left"), c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = g.string;

        var m = Ci(n, p),
            v = t.legendHitBoxes,
            b = function b(t, i) {
          switch (e.align) {
            case "start":
              return n.padding;

            case "end":
              return t - i;

            default:
              return (t - i + n.padding) / 2;
          }
        },
            x = t.isHorizontal();

        d = x ? {
          x: t.left + b(l, u[0]),
          y: t.top + n.padding,
          line: 0
        } : {
          x: t.left + n.padding,
          y: t.top + b(o, s[0]),
          line: 0
        }, V.rtl.overrideTextDirection(t.ctx, e.textDirection);
        var y = p + n.padding;
        V.each(t.legendItems, function (e, i) {
          var f = c.measureText(e.text).width,
              g = m + p / 2 + f,
              _ = d.x,
              k = d.y;
          h.setWidth(t.minSize.width), x ? i > 0 && _ + g + n.padding > t.left + t.minSize.width && (k = d.y += y, d.line++, _ = d.x = t.left + b(l, u[d.line])) : i > 0 && k + y > t.top + t.minSize.height && (_ = d.x = _ + t.columnWidths[d.line] + n.padding, d.line++, k = d.y = t.top + b(o, s[d.line]));
          var w = h.x(_);
          !function (t, e, i) {
            if (!(isNaN(m) || m <= 0)) {
              c.save();
              var o = Si(i.lineWidth, r.borderWidth);

              if (c.fillStyle = Si(i.fillStyle, a), c.lineCap = Si(i.lineCap, r.borderCapStyle), c.lineDashOffset = Si(i.lineDashOffset, r.borderDashOffset), c.lineJoin = Si(i.lineJoin, r.borderJoinStyle), c.lineWidth = o, c.strokeStyle = Si(i.strokeStyle, a), c.setLineDash && c.setLineDash(Si(i.lineDash, r.borderDash)), n && n.usePointStyle) {
                var s = m * Math.SQRT2 / 2,
                    l = h.xPlus(t, m / 2),
                    u = e + p / 2;
                V.canvas.drawPoint(c, i.pointStyle, s, l, u, i.rotation);
              } else c.fillRect(h.leftForLtr(t, m), e, m, p), 0 !== o && c.strokeRect(h.leftForLtr(t, m), e, m, p);

              c.restore();
            }
          }(w, k, e), v[i].left = h.leftForLtr(w, v[i].width), v[i].top = k, function (t, e, n, i) {
            var a = p / 2,
                r = h.xPlus(t, m + a),
                o = e + a;
            c.fillText(n.text, r, o), n.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(r, o), c.lineTo(h.xPlus(r, i), o), c.stroke());
          }(w, k, e, f), x ? d.x += g + n.padding : d.y += y;
        }), V.rtl.restoreTextDirection(t.ctx, e.textDirection);
      }
    },
    _getLegendItemAt: function _getLegendItemAt(t, e) {
      var n,
          i,
          a,
          r = this;
      if (t >= r.left && t <= r.right && e >= r.top && e <= r.bottom) for (a = r.legendHitBoxes, n = 0; n < a.length; ++n) {
        if (t >= (i = a[n]).left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height) return r.legendItems[n];
      }
      return null;
    },
    handleEvent: function handleEvent(t) {
      var e,
          n = this,
          i = n.options,
          a = "mouseup" === t.type ? "click" : t.type;

      if ("mousemove" === a) {
        if (!i.onHover && !i.onLeave) return;
      } else {
        if ("click" !== a) return;
        if (!i.onClick) return;
      }

      e = n._getLegendItemAt(t.x, t.y), "click" === a ? e && i.onClick && i.onClick.call(n, t["native"], e) : (i.onLeave && e !== n._hoveredItem && (n._hoveredItem && i.onLeave.call(n, t["native"], n._hoveredItem), n._hoveredItem = e), i.onHover && e && i.onHover.call(n, t["native"], e));
    }
  });

  function Ai(t, e) {
    var n = new Pi({
      ctx: t.ctx,
      options: e,
      chart: t
    });
    ge.configure(t, n, e), ge.addBox(t, n), t.legend = n;
  }

  var Di = {
    id: "legend",
    _element: Pi,
    beforeInit: function beforeInit(t) {
      var e = t.options.legend;
      e && Ai(t, e);
    },
    beforeUpdate: function beforeUpdate(t) {
      var e = t.options.legend,
          n = t.legend;
      e ? (V.mergeIf(e, z.global.legend), n ? (ge.configure(t, n, e), n.options = e) : Ai(t, e)) : n && (ge.removeBox(t, n), delete t.legend);
    },
    afterEvent: function afterEvent(t, e) {
      var n = t.legend;
      n && n.handleEvent(e);
    }
  },
      Ti = V.noop;

  z._set("global", {
    title: {
      display: !1,
      fontStyle: "bold",
      fullWidth: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3
    }
  });

  var Ii = X.extend({
    initialize: function initialize(t) {
      V.extend(this, t), this.legendHitBoxes = [];
    },
    beforeUpdate: Ti,
    update: function update(t, e, n) {
      var i = this;
      return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
    },
    afterUpdate: Ti,
    beforeSetDimensions: Ti,
    setDimensions: function setDimensions() {
      var t = this;
      t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: Ti,
    beforeBuildLabels: Ti,
    buildLabels: Ti,
    afterBuildLabels: Ti,
    beforeFit: Ti,
    fit: function fit() {
      var t,
          e = this,
          n = e.options,
          i = e.minSize = {},
          a = e.isHorizontal();
      n.display ? (t = (V.isArray(n.text) ? n.text.length : 1) * V.options._parseFont(n).lineHeight + 2 * n.padding, e.width = i.width = a ? e.maxWidth : t, e.height = i.height = a ? t : e.maxHeight) : e.width = i.width = e.height = i.height = 0;
    },
    afterFit: Ti,
    isHorizontal: function isHorizontal() {
      var t = this.options.position;
      return "top" === t || "bottom" === t;
    },
    draw: function draw() {
      var t = this,
          e = t.ctx,
          n = t.options;

      if (n.display) {
        var i,
            a,
            r,
            o = V.options._parseFont(n),
            s = o.lineHeight,
            l = s / 2 + n.padding,
            u = 0,
            d = t.top,
            h = t.left,
            c = t.bottom,
            f = t.right;

        e.fillStyle = V.valueOrDefault(n.fontColor, z.global.defaultFontColor), e.font = o.string, t.isHorizontal() ? (a = h + (f - h) / 2, r = d + l, i = f - h) : (a = "left" === n.position ? h + l : f - l, r = d + (c - d) / 2, i = c - d, u = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(a, r), e.rotate(u), e.textAlign = "center", e.textBaseline = "middle";
        var g = n.text;
        if (V.isArray(g)) for (var p = 0, m = 0; m < g.length; ++m) {
          e.fillText(g[m], 0, p, i), p += s;
        } else e.fillText(g, 0, 0, i);
        e.restore();
      }
    }
  });

  function Fi(t, e) {
    var n = new Ii({
      ctx: t.ctx,
      options: e,
      chart: t
    });
    ge.configure(t, n, e), ge.addBox(t, n), t.titleBlock = n;
  }

  var Li = {},
      Oi = ki,
      Ri = Di,
      zi = {
    id: "title",
    _element: Ii,
    beforeInit: function beforeInit(t) {
      var e = t.options.title;
      e && Fi(t, e);
    },
    beforeUpdate: function beforeUpdate(t) {
      var e = t.options.title,
          n = t.titleBlock;
      e ? (V.mergeIf(e, z.global.title), n ? (ge.configure(t, n, e), n.options = e) : Fi(t, e)) : n && (ge.removeBox(t, n), delete t.titleBlock);
    }
  };

  for (var Ni in Li.filler = Oi, Li.legend = Ri, Li.title = zi, tn.helpers = V, function () {
    function t(t, e, n) {
      var i;
      return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i;
    }

    function e(t) {
      return null != t && "none" !== t;
    }

    function n(n, i, a) {
      var r = document.defaultView,
          o = V._getParentNode(n),
          s = r.getComputedStyle(n)[i],
          l = r.getComputedStyle(o)[i],
          u = e(s),
          d = e(l),
          h = Number.POSITIVE_INFINITY;

      return u || d ? Math.min(u ? t(s, n, a) : h, d ? t(l, o, a) : h) : "none";
    }

    V.where = function (t, e) {
      if (V.isArray(t) && Array.prototype.filter) return t.filter(e);
      var n = [];
      return V.each(t, function (t) {
        e(t) && n.push(t);
      }), n;
    }, V.findIndex = Array.prototype.findIndex ? function (t, e, n) {
      return t.findIndex(e, n);
    } : function (t, e, n) {
      n = void 0 === n ? t : n;

      for (var i = 0, a = t.length; i < a; ++i) {
        if (e.call(n, t[i], i, t)) return i;
      }

      return -1;
    }, V.findNextWhere = function (t, e, n) {
      V.isNullOrUndef(n) && (n = -1);

      for (var i = n + 1; i < t.length; i++) {
        var a = t[i];
        if (e(a)) return a;
      }
    }, V.findPreviousWhere = function (t, e, n) {
      V.isNullOrUndef(n) && (n = t.length);

      for (var i = n - 1; i >= 0; i--) {
        var a = t[i];
        if (e(a)) return a;
      }
    }, V.isNumber = function (t) {
      return !isNaN(parseFloat(t)) && isFinite(t);
    }, V.almostEquals = function (t, e, n) {
      return Math.abs(t - e) < n;
    }, V.almostWhole = function (t, e) {
      var n = Math.round(t);
      return n - e <= t && n + e >= t;
    }, V.max = function (t) {
      return t.reduce(function (t, e) {
        return isNaN(e) ? t : Math.max(t, e);
      }, Number.NEGATIVE_INFINITY);
    }, V.min = function (t) {
      return t.reduce(function (t, e) {
        return isNaN(e) ? t : Math.min(t, e);
      }, Number.POSITIVE_INFINITY);
    }, V.sign = Math.sign ? function (t) {
      return Math.sign(t);
    } : function (t) {
      return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
    }, V.toRadians = function (t) {
      return t * (Math.PI / 180);
    }, V.toDegrees = function (t) {
      return t * (180 / Math.PI);
    }, V._decimalPlaces = function (t) {
      if (V.isFinite(t)) {
        for (var e = 1, n = 0; Math.round(t * e) / e !== t;) {
          e *= 10, n++;
        }

        return n;
      }
    }, V.getAngleFromPoint = function (t, e) {
      var n = e.x - t.x,
          i = e.y - t.y,
          a = Math.sqrt(n * n + i * i),
          r = Math.atan2(i, n);
      return r < -.5 * Math.PI && (r += 2 * Math.PI), {
        angle: r,
        distance: a
      };
    }, V.distanceBetweenPoints = function (t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }, V.aliasPixel = function (t) {
      return t % 2 == 0 ? 0 : .5;
    }, V._alignPixel = function (t, e, n) {
      var i = t.currentDevicePixelRatio,
          a = n / 2;
      return Math.round((e - a) * i) / i + a;
    }, V.splineCurve = function (t, e, n, i) {
      var a = t.skip ? e : t,
          r = e,
          o = n.skip ? e : n,
          s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
          l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
          u = s / (s + l),
          d = l / (s + l),
          h = i * (u = isNaN(u) ? 0 : u),
          c = i * (d = isNaN(d) ? 0 : d);
      return {
        previous: {
          x: r.x - h * (o.x - a.x),
          y: r.y - h * (o.y - a.y)
        },
        next: {
          x: r.x + c * (o.x - a.x),
          y: r.y + c * (o.y - a.y)
        }
      };
    }, V.EPSILON = Number.EPSILON || 1e-14, V.splineCurveMonotone = function (t) {
      var e,
          n,
          i,
          a,
          r,
          o,
          s,
          l,
          u,
          d = (t || []).map(function (t) {
        return {
          model: t._model,
          deltaK: 0,
          mK: 0
        };
      }),
          h = d.length;

      for (e = 0; e < h; ++e) {
        if (!(i = d[e]).model.skip) {
          if (n = e > 0 ? d[e - 1] : null, (a = e < h - 1 ? d[e + 1] : null) && !a.model.skip) {
            var c = a.model.x - i.model.x;
            i.deltaK = 0 !== c ? (a.model.y - i.model.y) / c : 0;
          }

          !n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2;
        }
      }

      for (e = 0; e < h - 1; ++e) {
        i = d[e], a = d[e + 1], i.model.skip || a.model.skip || (V.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (r = i.mK / i.deltaK, o = a.mK / i.deltaK, (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = r * s * i.deltaK, a.mK = o * s * i.deltaK)));
      }

      for (e = 0; e < h; ++e) {
        (i = d[e]).model.skip || (n = e > 0 ? d[e - 1] : null, a = e < h - 1 ? d[e + 1] : null, n && !n.model.skip && (u = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - u, i.model.controlPointPreviousY = i.model.y - u * i.mK), a && !a.model.skip && (u = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + u, i.model.controlPointNextY = i.model.y + u * i.mK));
      }
    }, V.nextItem = function (t, e, n) {
      return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
    }, V.previousItem = function (t, e, n) {
      return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
    }, V.niceNum = function (t, e) {
      var n = Math.floor(V.log10(t)),
          i = t / Math.pow(10, n);
      return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n);
    }, V.requestAnimFrame = "undefined" == typeof window ? function (t) {
      t();
    } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
      return window.setTimeout(t, 1e3 / 60);
    }, V.getRelativePosition = function (t, e) {
      var n,
          i,
          a = t.originalEvent || t,
          r = t.target || t.srcElement,
          o = r.getBoundingClientRect(),
          s = a.touches;
      s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = a.clientX, i = a.clientY);
      var l = parseFloat(V.getStyle(r, "padding-left")),
          u = parseFloat(V.getStyle(r, "padding-top")),
          d = parseFloat(V.getStyle(r, "padding-right")),
          h = parseFloat(V.getStyle(r, "padding-bottom")),
          c = o.right - o.left - l - d,
          f = o.bottom - o.top - u - h;
      return {
        x: n = Math.round((n - o.left - l) / c * r.width / e.currentDevicePixelRatio),
        y: i = Math.round((i - o.top - u) / f * r.height / e.currentDevicePixelRatio)
      };
    }, V.getConstraintWidth = function (t) {
      return n(t, "max-width", "clientWidth");
    }, V.getConstraintHeight = function (t) {
      return n(t, "max-height", "clientHeight");
    }, V._calculatePadding = function (t, e, n) {
      return (e = V.getStyle(t, e)).indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10);
    }, V._getParentNode = function (t) {
      var e = t.parentNode;
      return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
    }, V.getMaximumWidth = function (t) {
      var e = V._getParentNode(t);

      if (!e) return t.clientWidth;

      var n = e.clientWidth,
          i = n - V._calculatePadding(e, "padding-left", n) - V._calculatePadding(e, "padding-right", n),
          a = V.getConstraintWidth(t);

      return isNaN(a) ? i : Math.min(i, a);
    }, V.getMaximumHeight = function (t) {
      var e = V._getParentNode(t);

      if (!e) return t.clientHeight;

      var n = e.clientHeight,
          i = n - V._calculatePadding(e, "padding-top", n) - V._calculatePadding(e, "padding-bottom", n),
          a = V.getConstraintHeight(t);

      return isNaN(a) ? i : Math.min(i, a);
    }, V.getStyle = function (t, e) {
      return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
    }, V.retinaScale = function (t, e) {
      var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;

      if (1 !== n) {
        var i = t.canvas,
            a = t.height,
            r = t.width;
        i.height = a * n, i.width = r * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = a + "px", i.style.width = r + "px");
      }
    }, V.fontString = function (t, e, n) {
      return e + " " + t + "px " + n;
    }, V.longestText = function (t, e, n, i) {
      var a = (i = i || {}).data = i.data || {},
          r = i.garbageCollect = i.garbageCollect || [];
      i.font !== e && (a = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;
      var o,
          s,
          l,
          u,
          d,
          h = 0,
          c = n.length;

      for (o = 0; o < c; o++) {
        if (null != (u = n[o]) && !0 !== V.isArray(u)) h = V.measureText(t, a, r, h, u);else if (V.isArray(u)) for (s = 0, l = u.length; s < l; s++) {
          null == (d = u[s]) || V.isArray(d) || (h = V.measureText(t, a, r, h, d));
        }
      }

      var f = r.length / 2;

      if (f > n.length) {
        for (o = 0; o < f; o++) {
          delete a[r[o]];
        }

        r.splice(0, f);
      }

      return h;
    }, V.measureText = function (t, e, n, i, a) {
      var r = e[a];
      return r || (r = e[a] = t.measureText(a).width, n.push(a)), r > i && (i = r), i;
    }, V.numberOfLabelLines = function (t) {
      var e = 1;
      return V.each(t, function (t) {
        V.isArray(t) && t.length > e && (e = t.length);
      }), e;
    }, V.color = k ? function (t) {
      return t instanceof CanvasGradient && (t = z.global.defaultColor), k(t);
    } : function (t) {
      return console.error("Color.js not found!"), t;
    }, V.getHoverColor = function (t) {
      return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : V.color(t).saturate(.5).darken(.1).rgbString();
    };
  }(), tn._adapters = an, tn.Animation = Z, tn.animationService = $, tn.controllers = $t, tn.DatasetController = nt, tn.defaults = z, tn.Element = X, tn.elements = _t, tn.Interaction = ae, tn.layouts = ge, tn.platform = Fe, tn.plugins = Le, tn.Scale = xn, tn.scaleService = Oe, tn.Ticks = rn, tn.Tooltip = Ue, tn.helpers.each(ci, function (t, e) {
    tn.scaleService.registerScaleType(e, t, t._defaults);
  }), Li) {
    Li.hasOwnProperty(Ni) && tn.plugins.register(Li[Ni]);
  }

  tn.platform.initialize();
  var Bi = tn;
  return "undefined" != typeof window && (window.Chart = tn), tn.Chart = tn, tn.Legend = Li.legend._element, tn.Title = Li.title._element, tn.pluginService = tn.plugins, tn.PluginBase = tn.Element.extend({}), tn.canvasHelpers = tn.helpers.canvas, tn.layoutService = tn.layouts, tn.LinearScaleBase = Sn, tn.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function (t) {
    tn[t] = function (e, n) {
      return new tn(e, tn.helpers.merge(n || {}, {
        type: t.charAt(0).toLowerCase() + t.slice(1)
      }));
    };
  }), Bi;
}); //
// Chart extension for making the bars rounded
// Code from: https://codepen.io/jedtrow/full/ygRYgo
//

Chart.elements.Rectangle.prototype.draw = function () {
  var ctx = this._chart.ctx;
  var vm = this._view;
  var left, right, top, bottom, signX, signY, borderSkipped, radius;
  var borderWidth = vm.borderWidth; // Set Radius Here
  // If radius is large enough to cause drawing errors a max radius is imposed

  var cornerRadius = 6;

  if (!vm.horizontal) {
    // bar
    left = vm.x - vm.width / 2;
    right = vm.x + vm.width / 2;
    top = vm.y;
    bottom = vm.base;
    signX = 1;
    signY = bottom > top ? 1 : -1;
    borderSkipped = vm.borderSkipped || 'bottom';
  } else {
    // horizontal bar
    left = vm.base;
    right = vm.x;
    top = vm.y - vm.height / 2;
    bottom = vm.y + vm.height / 2;
    signX = right > left ? 1 : -1;
    signY = 1;
    borderSkipped = vm.borderSkipped || 'left';
  } // Canvas doesn't allow us to stroke inside the width so we can
  // adjust the sizes to fit if we're setting a stroke on the line


  if (borderWidth) {
    // borderWidth shold be less than bar width and bar height.
    var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    var halfStroke = borderWidth / 2; // Adjust borderWidth when bar top position is near vm.base(zero).

    var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
    var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
    var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
    var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0); // not become a vertical line?

    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    } // not become a horizontal line?


    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth; // Corner points, from bottom-left to bottom-right clockwise
  // | 1 2 |
  // | 0 3 |

  var corners = [[left, bottom], [left, top], [right, top], [right, bottom]]; // Find first (starting) corner with fallback to 'bottom'

  var borders = ['bottom', 'left', 'top', 'right'];
  var startCorner = borders.indexOf(borderSkipped, 0);

  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  } // Draw rectangle from 'startCorner'


  var corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (var i = 1; i < 4; i++) {
    corner = cornerAt(i);
    nextCornerId = i + 1;

    if (nextCornerId == 4) {
      nextCornerId = 0;
    }

    nextCorner = cornerAt(nextCornerId);
    width = corners[2][0] - corners[1][0];
    height = corners[0][1] - corners[1][1];
    x = corners[1][0];
    y = corners[1][1];
    var radius = cornerRadius; // Fix radius being too large

    if (radius > height / 2) {
      radius = height / 2;
    }

    if (radius > width / 2) {
      radius = width / 2;
    }

    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  }

  ctx.fill();

  if (borderWidth) {
    ctx.stroke();
  }
};
/*!

=========================================================
* Argon Dashboard - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
//
// Layout
//


'use strict';

var Layout = function () {
  function pinSidenav() {
    $('.sidenav-toggler').addClass('active');
    $('.sidenav-toggler').data('action', 'sidenav-unpin');
    $('body').removeClass('g-sidenav-hidden').addClass('g-sidenav-show g-sidenav-pinned');
    $('body').append('<div class="backdrop d-xl-none" data-action="sidenav-unpin" data-target=' + $('#sidenav-main').data('target') + ' />'); // Store the sidenav state in a cookie session

    Cookies.set('sidenav-state', 'pinned');
  }

  function unpinSidenav() {
    $('.sidenav-toggler').removeClass('active');
    $('.sidenav-toggler').data('action', 'sidenav-pin');
    $('body').removeClass('g-sidenav-pinned').addClass('g-sidenav-hidden');
    $('body').find('.backdrop').remove(); // Store the sidenav state in a cookie session

    Cookies.set('sidenav-state', 'unpinned');
  } // Set sidenav state from cookie


  var $sidenavState = Cookies.get('sidenav-state') ? Cookies.get('sidenav-state') : 'pinned';

  if ($(window).width() > 1200) {
    if ($sidenavState == 'pinned') {
      pinSidenav();
    }

    if (Cookies.get('sidenav-state') == 'unpinned') {
      unpinSidenav();
    }

    $(window).resize(function () {
      if ($('body').hasClass('g-sidenav-show') && !$('body').hasClass('g-sidenav-pinned')) {
        $('body').removeClass('g-sidenav-show').addClass('g-sidenav-hidden');
      }
    });
  }

  if ($(window).width() < 1200) {
    $('body').removeClass('g-sidenav-hide').addClass('g-sidenav-hidden');
    $('body').removeClass('g-sidenav-show');
    $(window).resize(function () {
      if ($('body').hasClass('g-sidenav-show') && !$('body').hasClass('g-sidenav-pinned')) {
        $('body').removeClass('g-sidenav-show').addClass('g-sidenav-hidden');
      }
    });
  }

  $("body").on("click", "[data-action]", function (e) {
    e.preventDefault();
    var $this = $(this);
    var action = $this.data('action');
    var target = $this.data('target'); // Manage actions

    switch (action) {
      case 'sidenav-pin':
        pinSidenav();
        break;

      case 'sidenav-unpin':
        unpinSidenav();
        break;

      case 'search-show':
        target = $this.data('target');
        $('body').removeClass('g-navbar-search-show').addClass('g-navbar-search-showing');
        setTimeout(function () {
          $('body').removeClass('g-navbar-search-showing').addClass('g-navbar-search-show');
        }, 150);
        setTimeout(function () {
          $('body').addClass('g-navbar-search-shown');
        }, 300);
        break;

      case 'search-close':
        target = $this.data('target');
        $('body').removeClass('g-navbar-search-shown');
        setTimeout(function () {
          $('body').removeClass('g-navbar-search-show').addClass('g-navbar-search-hiding');
        }, 150);
        setTimeout(function () {
          $('body').removeClass('g-navbar-search-hiding').addClass('g-navbar-search-hidden');
        }, 300);
        setTimeout(function () {
          $('body').removeClass('g-navbar-search-hidden');
        }, 500);
        break;
    }
  }); // Add sidenav modifier classes on mouse events

  $('.sidenav').on('mouseenter', function () {
    if (!$('body').hasClass('g-sidenav-pinned')) {
      $('body').removeClass('g-sidenav-hide').removeClass('g-sidenav-hidden').addClass('g-sidenav-show');
    }
  });
  $('.sidenav').on('mouseleave', function () {
    if (!$('body').hasClass('g-sidenav-pinned')) {
      $('body').removeClass('g-sidenav-show').addClass('g-sidenav-hide');
      setTimeout(function () {
        $('body').removeClass('g-sidenav-hide').addClass('g-sidenav-hidden');
      }, 300);
    }
  }); // Make the body full screen size if it has not enough content inside

  $(window).on('load resize', function () {
    if ($('body').height() < 800) {
      $('body').css('min-height', '100vh');
      $('#footer-main').addClass('footer-auto-bottom');
    }
  });
}(); //
// Charts
//


'use strict';

var Charts = function () {
  // Variable
  var $toggle = $('[data-toggle="chart"]');
  var mode = 'light'; //(themeMode) ? themeMode : 'light';

  var fonts = {
    base: 'Open Sans'
  }; // Colors

  var colors = {
    gray: {
      100: '#f6f9fc',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#8898aa',
      700: '#525f7f',
      800: '#32325d',
      900: '#212529'
    },
    theme: {
      'default': '#172b4d',
      'primary': '#5e72e4',
      'secondary': '#f4f5f7',
      'info': '#11cdef',
      'success': '#2dce89',
      'danger': '#f5365c',
      'warning': '#fb6340'
    },
    black: '#12263F',
    white: '#FFFFFF',
    transparent: 'transparent'
  }; // Methods
  // Chart.js global options

  function chartOptions() {
    // Options
    var options = {
      defaults: {
        global: {
          responsive: true,
          maintainAspectRatio: false,
          defaultColor: mode == 'dark' ? colors.gray[700] : colors.gray[600],
          defaultFontColor: mode == 'dark' ? colors.gray[700] : colors.gray[600],
          defaultFontFamily: fonts.base,
          defaultFontSize: 13,
          layout: {
            padding: 0
          },
          legend: {
            display: false,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 16
            }
          },
          elements: {
            point: {
              radius: 0,
              backgroundColor: colors.theme['primary']
            },
            line: {
              tension: .4,
              borderWidth: 4,
              borderColor: colors.theme['primary'],
              backgroundColor: colors.transparent,
              borderCapStyle: 'rounded'
            },
            rectangle: {
              backgroundColor: colors.theme['warning']
            },
            arc: {
              backgroundColor: colors.theme['primary'],
              borderColor: mode == 'dark' ? colors.gray[800] : colors.white,
              borderWidth: 4
            }
          },
          tooltips: {
            enabled: true,
            mode: 'index',
            intersect: false
          }
        },
        doughnut: {
          cutoutPercentage: 83,
          legendCallback: function legendCallback(chart) {
            var data = chart.data;
            var content = '';
            data.labels.forEach(function (label, index) {
              var bgColor = data.datasets[0].backgroundColor[index];
              content += '<span class="chart-legend-item">';
              content += '<i class="chart-legend-indicator" style="background-color: ' + bgColor + '"></i>';
              content += label;
              content += '</span>';
            });
            return content;
          }
        }
      }
    }; // yAxes

    Chart.scaleService.updateScaleDefaults('linear', {
      gridLines: {
        borderDash: [2],
        borderDashOffset: [2],
        color: mode == 'dark' ? colors.gray[900] : colors.gray[300],
        drawBorder: false,
        drawTicks: false,
        drawOnChartArea: true,
        zeroLineWidth: 0,
        zeroLineColor: 'rgba(0,0,0,0)',
        zeroLineBorderDash: [2],
        zeroLineBorderDashOffset: [2]
      },
      ticks: {
        beginAtZero: true,
        padding: 10,
        callback: function callback(value) {
          if (!(value % 10)) {
            return value;
          }
        }
      }
    }); // xAxes

    Chart.scaleService.updateScaleDefaults('category', {
      gridLines: {
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false
      },
      ticks: {
        padding: 20
      },
      maxBarThickness: 10
    });
    return options;
  } // Parse global options


  function parseOptions(parent, options) {
    for (var item in options) {
      if (_typeof(options[item]) !== 'object') {
        parent[item] = options[item];
      } else {
        parseOptions(parent[item], options[item]);
      }
    }
  } // Push options


  function pushOptions(parent, options) {
    for (var item in options) {
      if (Array.isArray(options[item])) {
        options[item].forEach(function (data) {
          parent[item].push(data);
        });
      } else {
        pushOptions(parent[item], options[item]);
      }
    }
  } // Pop options


  function popOptions(parent, options) {
    for (var item in options) {
      if (Array.isArray(options[item])) {
        options[item].forEach(function (data) {
          parent[item].pop();
        });
      } else {
        popOptions(parent[item], options[item]);
      }
    }
  } // Toggle options


  function toggleOptions(elem) {
    var options = elem.data('add');
    var $target = $(elem.data('target'));
    var $chart = $target.data('chart');

    if (elem.is(':checked')) {
      // Add options
      pushOptions($chart, options); // Update chart

      $chart.update();
    } else {
      // Remove options
      popOptions($chart, options); // Update chart

      $chart.update();
    }
  } // Update options


  function updateOptions(elem) {
    var options = elem.data('update');
    var $target = $(elem.data('target'));
    var $chart = $target.data('chart'); // Parse options

    parseOptions($chart, options); // Toggle ticks

    toggleTicks(elem, $chart); // Update chart

    $chart.update();
  } // Toggle ticks


  function toggleTicks(elem, $chart) {
    if (elem.data('prefix') !== undefined || elem.data('prefix') !== undefined) {
      var prefix = elem.data('prefix') ? elem.data('prefix') : '';
      var suffix = elem.data('suffix') ? elem.data('suffix') : ''; // Update ticks

      $chart.options.scales.yAxes[0].ticks.callback = function (value) {
        if (!(value % 10)) {
          return prefix + value + suffix;
        }
      }; // Update tooltips


      $chart.options.tooltips.callbacks.label = function (item, data) {
        var label = data.datasets[item.datasetIndex].label || '';
        var yLabel = item.yLabel;
        var content = '';

        if (data.datasets.length > 1) {
          content += '<span class="popover-body-label mr-auto">' + label + '</span>';
        }

        content += '<span class="popover-body-value">' + prefix + yLabel + suffix + '</span>';
        return content;
      };
    }
  } // Events
  // Parse global options


  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  } // Toggle options


  $toggle.on({
    'change': function change() {
      var $this = $(this);

      if ($this.is('[data-add]')) {
        toggleOptions($this);
      }
    },
    'click': function click() {
      var $this = $(this);

      if ($this.is('[data-update]')) {
        updateOptions($this);
      }
    }
  }); // Return

  return {
    colors: colors,
    fonts: fonts,
    mode: mode
  };
}(); //
// Icon code copy/paste
//


'use strict';

var CopyIcon = function () {
  // Variables
  var $element = '.btn-icon-clipboard',
      $btn = $($element); // Methods

  function init($this) {
    $this.tooltip().on('mouseleave', function () {
      // Explicitly hide tooltip, since after clicking it remains
      // focused (as it's a button), so tooltip would otherwise
      // remain visible until focus is moved away
      $this.tooltip('hide');
    });
    var clipboard = new ClipboardJS($element);
    clipboard.on('success', function (e) {
      $(e.trigger).attr('title', 'Copied!').tooltip('_fixTitle').tooltip('show').attr('title', 'Copy to clipboard').tooltip('_fixTitle');
      e.clearSelection();
    });
  } // Events


  if ($btn.length) {
    init($btn);
  }
}(); //
// Navbar
//


'use strict';

var Navbar = function () {
  // Variables
  var $nav = $('.navbar-nav, .navbar-nav .nav');
  var $collapse = $('.navbar .collapse');
  var $dropdown = $('.navbar .dropdown'); // Methods

  function accordion($this) {
    $this.closest($nav).find($collapse).not($this).collapse('hide');
  }

  function closeDropdown($this) {
    var $dropdownMenu = $this.find('.dropdown-menu');
    $dropdownMenu.addClass('close');
    setTimeout(function () {
      $dropdownMenu.removeClass('close');
    }, 200);
  } // Events


  $collapse.on({
    'show.bs.collapse': function showBsCollapse() {
      accordion($(this));
    }
  });
  $dropdown.on({
    'hide.bs.dropdown': function hideBsDropdown() {
      closeDropdown($(this));
    }
  });
}(); //
// Navbar collapse
//


var NavbarCollapse = function () {
  // Variables
  var $nav = $('.navbar-nav'),
      $collapse = $('.navbar .navbar-custom-collapse'); // Methods

  function hideNavbarCollapse($this) {
    $this.addClass('collapsing-out');
  }

  function hiddenNavbarCollapse($this) {
    $this.removeClass('collapsing-out');
  } // Events


  if ($collapse.length) {
    $collapse.on({
      'hide.bs.collapse': function hideBsCollapse() {
        hideNavbarCollapse($collapse);
      }
    });
    $collapse.on({
      'hidden.bs.collapse': function hiddenBsCollapse() {
        hiddenNavbarCollapse($collapse);
      }
    });
  }

  var navbar_menu_visible = 0;
  $(".sidenav-toggler").click(function () {
    if (navbar_menu_visible == 1) {
      $('body').removeClass('nav-open');
      navbar_menu_visible = 0;
      $('.bodyClick').remove();
    } else {
      var div = '<div class="bodyClick"></div>';
      $(div).appendTo('body').click(function () {
        $('body').removeClass('nav-open');
        navbar_menu_visible = 0;
        $('.bodyClick').remove();
      });
      $('body').addClass('nav-open');
      navbar_menu_visible = 1;
    }
  });
}(); //
// Popover
//


'use strict';

var Popover = function () {
  // Variables
  var $popover = $('[data-toggle="popover"]'),
      $popoverClass = ''; // Methods

  function init($this) {
    if ($this.data('color')) {
      $popoverClass = 'popover-' + $this.data('color');
    }

    var options = {
      trigger: 'focus',
      template: '<div class="popover ' + $popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    };
    $this.popover(options);
  } // Events


  if ($popover.length) {
    $popover.each(function () {
      init($(this));
    });
  }
}(); //
// Scroll to (anchor links)
//


'use strict';

var ScrollTo = function () {
  //
  // Variables
  //
  var $scrollTo = $('.scroll-me, [data-scroll-to], .toc-entry a'); //
  // Methods
  //

  function scrollTo($this) {
    var $el = $this.attr('href');
    var offset = $this.data('scroll-to-offset') ? $this.data('scroll-to-offset') : 0;
    var options = {
      scrollTop: $($el).offset().top - offset
    }; // Animate scroll to the selected section

    $('html, body').stop(true, true).animate(options, 600);
    event.preventDefault();
  } //
  // Events
  //


  if ($scrollTo.length) {
    $scrollTo.on('click', function (event) {
      scrollTo($(this));
    });
  }
}(); //
// Tooltip
//


'use strict';

var Tooltip = function () {
  // Variables
  var $tooltip = $('[data-toggle="tooltip"]'); // Methods

  function init() {
    $tooltip.tooltip();
  } // Events


  if ($tooltip.length) {
    init();
  }
}(); //
// Form control
//


'use strict';

var FormControl = function () {
  // Variables
  var $input = $('.form-control'); // Methods

  function init($this) {
    $this.on('focus blur', function (e) {
      $(this).parents('.form-group').toggleClass('focused', e.type === 'focus');
    }).trigger('blur');
  } // Events


  if ($input.length) {
    init($input);
  }
}(); //
// Google maps
//


var $map = $('#map-default'),
    map,
    lat,
    lng,
    color = "#5e72e4";

function initMap() {
  map = document.getElementById('map-default');
  lat = map.getAttribute('data-lat');
  lng = map.getAttribute('data-lng');
  var myLatlng = new google.maps.LatLng(lat, lng);
  var mapOptions = {
    zoom: 12,
    scrollwheel: false,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(map, mapOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Hello World!'
  });
  var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' + '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
  });
}

if ($map.length) {
  google.maps.event.addDomListener(window, 'load', initMap);
} //
// Bars chart
//


var BarsChart = function () {
  //
  // Variables
  //
  var $chart = $('#chart-bars'); //
  // Methods
  //
  // Init chart

  function initChart($chart) {
    // Create chart
    var ordersChart = new Chart($chart, {
      type: 'bar',
      data: {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales',
          data: [25, 20, 30, 22, 17, 29]
        }]
      }
    }); // Save to jQuery object

    $chart.data('chart', ordersChart);
  } // Init chart


  if ($chart.length) {
    initChart($chart);
  }
}();

'use strict'; //
// Sales chart
//


var SalesChart = function () {
  // Variables
  var $chart = $('#chart-sales-dark'); // Methods

  function init($chart) {
    var salesChart = new Chart($chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            gridLines: {
              lineWidth: 1,
              color: Charts.colors.gray[900],
              zeroLineColor: Charts.colors.gray[900]
            },
            ticks: {
              callback: function callback(value) {
                if (!(value % 10)) {
                  return '$' + value + 'k';
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function label(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">$' + yLabel + 'k</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Performance',
          data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
        }]
      }
    }); // Save to jQuery object

    $chart.data('chart', salesChart);
  }

  ; // Events

  if ($chart.length) {
    init($chart);
  }
}(); //
// Bootstrap Datepicker
//


'use strict';

var Datepicker = function () {
  // Variables
  var $datepicker = $('.datepicker'); // Methods

  function init($this) {
    var options = {
      disableTouchKeyboard: true,
      autoclose: false
    };
    $this.datepicker(options);
  } // Events


  if ($datepicker.length) {
    $datepicker.each(function () {
      init($(this));
    });
  }
}(); //
// Form control
//


'use strict';

var noUiSlider = function () {
  // Variables
  // var $sliderContainer = $('.input-slider-container'),
  // 		$slider = $('.input-slider'),
  // 		$sliderId = $slider.attr('id'),
  // 		$sliderMinValue = $slider.data('range-value-min');
  // 		$sliderMaxValue = $slider.data('range-value-max');;
  // // Methods
  //
  // function init($this) {
  // 	$this.on('focus blur', function(e) {
  //       $this.parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
  //   }).trigger('blur');
  // }
  //
  //
  // // Events
  //
  // if ($input.length) {
  // 	init($input);
  // }
  if ($(".input-slider-container")[0]) {
    $('.input-slider-container').each(function () {
      var slider = $(this).find('.input-slider');
      var sliderId = slider.attr('id');
      var minValue = slider.data('range-value-min');
      var maxValue = slider.data('range-value-max');
      var sliderValue = $(this).find('.range-slider-value');
      var sliderValueId = sliderValue.attr('id');
      var startValue = sliderValue.data('range-value-low');
      var c = document.getElementById(sliderId),
          d = document.getElementById(sliderValueId);
      noUiSlider.create(c, {
        start: [parseInt(startValue)],
        connect: [true, false],
        //step: 1000,
        range: {
          'min': [parseInt(minValue)],
          'max': [parseInt(maxValue)]
        }
      });
      c.noUiSlider.on('update', function (a, b) {
        d.textContent = a[b];
      });
    });
  }

  if ($("#input-slider-range")[0]) {
    var c = document.getElementById("input-slider-range"),
        d = document.getElementById("input-slider-range-value-low"),
        e = document.getElementById("input-slider-range-value-high"),
        f = [d, e];
    noUiSlider.create(c, {
      start: [parseInt(d.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high'))],
      connect: !0,
      range: {
        min: parseInt(c.getAttribute('data-range-value-min')),
        max: parseInt(c.getAttribute('data-range-value-max'))
      }
    }), c.noUiSlider.on("update", function (a, b) {
      f[b].textContent = a[b];
    });
  }
}(); //
// Scrollbar
//


'use strict';

var Scrollbar = function () {
  // Variables
  var $scrollbar = $('.scrollbar-inner'); // Methods

  function init() {
    $scrollbar.scrollbar().scrollLock();
  } // Events


  if ($scrollbar.length) {
    init();
  }
}();
