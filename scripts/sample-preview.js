//console.log("hello javascript");
function onButtonClick(mData){
    //console.log("hello world");
    $.ajax({
                url: 'mailer.php',
                dataType: 'json',
                type: 'post',
                data: {
                    'mMail' : $("#mailID").val(),
                    'mOutput' : mData
                },
                success: function( data ){
                    $("#mailStatus1").html("<div class=\"col-md-5\"><p>Mail sent</p></div>");
                    $("#mailStatus2").html("");
                }
    });
};
(function() {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype,
        o = this,
        r = o.EventEmitter;
    n.getListeners = function(t) {
        var e, i, n = this._getEvents();
        if ("object" == typeof t) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function(t, i) {
        var n, o = this.getListenersAsObject(t),
            r = "object" == typeof i;
        for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {
            listener: i,
            once: !1
        });
        return this
    }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
        return this.getListeners(t), this
    }, n.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function(t, i) {
        var n, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function(t, e, i) {
        var n, o, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--;) r.call(this, e, i[n]);
        else
            for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
        return this
    }, n.removeEvent = function(t) {
        var e, i = typeof t,
            n = this._getEvents();
        if ("string" === i) delete n[t];
        else if ("object" === i)
            for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, n._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}).call(this),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var o = function() {};
        i.removeEventListener ? o = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (o = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var r = {
            bind: n,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : t.eventie = r
    }(this),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(window, function(t, e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function o(t) {
            return "[object Array]" === u.call(t)
        }

        function r(t) {
            var e = [];
            if (o(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function s(t, e, i) {
            if (!(this instanceof s)) return new s(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = r(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), h && (this.jqDeferred = new h.Deferred);
            var o = this;
            setTimeout(function() {
                o.check()
            })
        }

        function a(t) {
            this.img = t
        }

        function l(t) {
            this.src = t, f[t] = this
        }
        var h = t.jQuery,
            p = t.console,
            c = void 0 !== p,
            u = Object.prototype.toString;
        s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var n = i.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var o = i.querySelectorAll("img"), r = 0, s = o.length; s > r; r++) {
                        var a = o[r];
                        this.addImage(a)
                    }
            }
        }, s.prototype.addImage = function(t) {
            var e = new a(t);
            this.images.push(e)
        }, s.prototype.check = function() {
            function t(t, o) {
                return e.options.debug && c && p.log("confirm", t, o), e.progress(t), i++, i === n && e.complete(), !0
            }
            var e = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, !n) return void this.complete();
            for (var o = 0; n > o; o++) {
                var r = this.images[o];
                r.on("confirm", t), r.check()
            }
        }, s.prototype.progress = function(t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function() {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
            })
        }, s.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function() {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, h && (h.fn.imagesLoaded = function(t, e) {
            var i = new s(this, t, e);
            return i.jqDeferred.promise(h(this))
        }), a.prototype = new e, a.prototype.check = function() {
            var t = f[this.img.src] || new l(this.img.src);
            if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var e = this;
            t.on("confirm", function(t, i) {
                return e.confirm(t.isLoaded, i), !0
            }), t.check()
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emit("confirm", this, e)
        };
        var f = {};
        return l.prototype = new e, l.prototype.check = function() {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function(t) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(t)
        }, l.prototype.onerror = function(t) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
        }, l.prototype.confirm = function(t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, l.prototype.unbindProxyEvents = function(t) {
            i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
        }, s
    }),
    function(t) {
        function e() {}

        function i(t) {
            function i(e) {
                e.prototype.option || (e.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function o(e, i) {
                t.fn[e] = function(o) {
                    if ("string" == typeof o) {
                        for (var s = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                            var h = this[a],
                                p = t.data(h, e);
                            if (p)
                                if (t.isFunction(p[o]) && "_" !== o.charAt(0)) {
                                    var c = p[o].apply(p, s);
                                    if (void 0 !== c) return c
                                } else r("no such method '" + o + "' for " + e + " instance");
                            else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var n = t.data(this, e);
                        n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                    })
                }
            }
            if (t) {
                var r = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
                return t.bridget = function(t, e) {
                    i(e), o(t, e)
                }, t.bridget
            }
        }
        var n = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
    }(window),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var o = function() {};
        i.removeEventListener ? o = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (o = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var r = {
            bind: n,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
    }(this),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : r.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== o.readyState;
            if (!e.isReady && !i) {
                e.isReady = !0;
                for (var n = 0, s = r.length; s > n; n++) {
                    var a = r[n];
                    a()
                }
            }
        }

        function n(n) {
            return n.bind(o, "DOMContentLoaded", i), n.bind(o, "readystatechange", i), n.bind(t, "load", i), e
        }
        var o = t.document,
            r = [];
        e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], n)) : t.docReady = n(t.eventie)
    }(this),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            o = this,
            r = o.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, o = this.getListenersAsObject(t),
                r = "object" == typeof i;
            for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, o, r = this.getListenersAsObject(t);
            for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, o, r = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) r.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if (t instanceof RegExp)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, o, r, s = this.getListenersAsObject(t);
            for (o in s)
                if (s.hasOwnProperty(o))
                    for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return o.EventEmitter = r, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, o = 0, r = i.length; r > o; o++)
                    if (e = i[o] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = s.length; i > e; e++) {
                var n = s[e];
                t[n] = 0
            }
            return t
        }

        function n(t) {
            function n(t) {
                if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var n = r(t);
                    if ("none" === n.display) return i();
                    var o = {};
                    o.width = t.offsetWidth, o.height = t.offsetHeight;
                    for (var p = o.isBorderBox = !(!h || !n[h] || "border-box" !== n[h]), c = 0, u = s.length; u > c; c++) {
                        var f = s[c],
                            d = n[f];
                        d = a(t, d);
                        var m = parseFloat(d);
                        o[f] = isNaN(m) ? 0 : m
                    }
                    var g = o.paddingLeft + o.paddingRight,
                        y = o.paddingTop + o.paddingBottom,
                        v = o.marginLeft + o.marginRight,
                        x = o.marginTop + o.marginBottom,
                        b = o.borderLeftWidth + o.borderRightWidth,
                        w = o.borderTopWidth + o.borderBottomWidth,
                        _ = p && l,
                        L = e(n.width);
                    L !== !1 && (o.width = L + (_ ? 0 : g + b));
                    var I = e(n.height);
                    return I !== !1 && (o.height = I + (_ ? 0 : y + w)), o.innerWidth = o.width - (g + b), o.innerHeight = o.height - (y + w), o.outerWidth = o.width + v, o.outerHeight = o.height + x, o
                }
            }

            function a(t, e) {
                if (o || -1 === e.indexOf("%")) return e;
                var i = t.style,
                    n = i.left,
                    r = t.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = n, s && (r.left = s), e
            }
            var l, h = t("boxSizing");
            return function() {
                if (h) {
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[h] = "border-box";
                    var i = document.body || document.documentElement;
                    i.appendChild(t);
                    var n = r(t);
                    l = 200 === e(n.width), i.removeChild(t)
                }
            }(), n
        }
        var o = t.getComputedStyle,
            r = o ? function(t) {
                return o(t, null)
            } : function(t) {
                return t.currentStyle
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("get-style-property")) : t.getSize = n(t.getStyleProperty)
    }(window),
    function(t, e) {
        function i(t, e) {
            return t[a](e)
        }

        function n(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function o(t, e) {
            n(t);
            for (var i = t.parentNode.querySelectorAll(e), o = 0, r = i.length; r > o; o++)
                if (i[o] === t) return !0;
            return !1
        }

        function r(t, e) {
            return n(t), i(t, e)
        }
        var s, a = function() {
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0, n = t.length; n > i; i++) {
                var o = t[i],
                    r = o + "MatchesSelector";
                if (e[r]) return r
            }
        }();
        if (a) {
            var l = document.createElement("div"),
                h = i(l, "div");
            s = h ? i : r
        } else s = o;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return s
        }) : window.matchesSelector = s
    }(this, Element.prototype),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function n(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function o(t, o, r) {
            function a(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var l = r("transition"),
                h = r("transform"),
                p = l && h,
                c = !!r("perspective"),
                u = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[l],
                f = ["transform", "transition", "transitionDuration", "transitionProperty"],
                d = function() {
                    for (var t = {}, e = 0, i = f.length; i > e; e++) {
                        var n = f[e],
                            o = r(n);
                        o && o !== n && (t[n] = o)
                    }
                    return t
                }();
            e(a.prototype, t.prototype), a.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, a.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, a.prototype.getSize = function() {
                this.size = o(this.element)
            }, a.prototype.css = function(t) {
                var e = this.element.style;
                for (var i in t) {
                    var n = d[i] || i;
                    e[n] = t[i]
                }
            }, a.prototype.getPosition = function() {
                var t = s(this.element),
                    e = this.layout.options,
                    i = e.isOriginLeft,
                    n = e.isOriginTop,
                    o = parseInt(t[i ? "left" : "right"], 10),
                    r = parseInt(t[n ? "top" : "bottom"], 10);
                o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
                var a = this.layout.size;
                o -= i ? a.paddingLeft : a.paddingRight, r -= n ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r
            }, a.prototype.layoutPosition = function() {
                var t = this.layout.size,
                    e = this.layout.options,
                    i = {};
                e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
            };
            var m = c ? function(t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function(t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            a.prototype._transitionTo = function(t, e) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    o = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = o === this.position.x && r === this.position.y;
                if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
                var a = t - i,
                    l = e - n,
                    h = {},
                    p = this.layout.options;
                a = p.isOriginLeft ? a : -a, l = p.isOriginTop ? l : -l, h.transform = m(a, l), this.transition({
                    to: h,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, a.prototype.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, a.prototype.moveTo = p ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, a.prototype._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, a.prototype._transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var n = this.element.offsetHeight;
                    n = null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            };
            var g = h && n(h) + ",opacity";
            a.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: g,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(u, this, !1))
            }, a.prototype.transition = a.prototype[l ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t)
            }, a.prototype.onotransitionend = function(t) {
                this.ontransitionend(t)
            };
            var y = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            a.prototype.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        n = y[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                        var o = e.onEnd[n];
                        o.call(this), delete e.onEnd[n]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, a.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
            }, a.prototype._removeStyles = function(t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e)
            };
            var v = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return a.prototype.removeTransitionStyles = function() {
                this.css(v)
            }, a.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, a.prototype.remove = function() {
                if (!l || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                var t = this;
                this.on("transitionEnd", function() {
                    return t.removeElem(), !0
                }), this.hide()
            }, a.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, a.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, a.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, a
        }
        var r = t.getComputedStyle,
            s = r ? function(t) {
                return r(t, null)
            } : function(t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === c.call(t)
        }

        function n(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
            else e.push(t);
            return e
        }

        function o(t, e) {
            var i = f(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }

        function s(i, s, c, f, d, m) {
            function g(t, i) {
                if ("string" == typeof t && (t = a.querySelector(t)), !t || !u(t)) return void(l && l.error("Bad " + this.constructor.namespace + " element: " + t));
                this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
                var n = ++y;
                this.element.outlayerGUID = n, v[n] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var y = 0,
                v = {};
            return g.namespace = "outlayer", g.Item = m, g.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(g.prototype, c.prototype), g.prototype.option = function(t) {
                e(this.options, t)
            }, g.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, g.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, g.prototype._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, r = e.length; r > o; o++) {
                    var s = e[o],
                        a = new i(s, this);
                    n.push(a)
                }
                return n
            }, g.prototype._filterFindItemElements = function(t) {
                t = n(t);
                for (var e = this.options.itemSelector, i = [], o = 0, r = t.length; r > o; o++) {
                    var s = t[o];
                    if (u(s))
                        if (e) {
                            d(s, e) && i.push(s);
                            for (var a = s.querySelectorAll(e), l = 0, h = a.length; h > l; l++) i.push(a[l])
                        } else i.push(s)
                }
                return i
            }, g.prototype.getItemElements = function() {
                for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                return t
            }, g.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
                this.getSize()
            }, g.prototype.getSize = function() {
                this.size = f(this.element)
            }, g.prototype._getMeasurement = function(t, e) {
                var i, n = this.options[t];
                n ? ("string" == typeof n ? i = this.element.querySelector(n) : u(n) && (i = n), this[t] = i ? f(i)[e] : n) : this[t] = 0
            }, g.prototype.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, g.prototype._getItemsForLayout = function(t) {
                for (var e = [], i = 0, n = t.length; n > i; i++) {
                    var o = t[i];
                    o.isIgnored || e.push(o)
                }
                return e
            }, g.prototype._layoutItems = function(t, e) {
                function i() {
                    n.emitEvent("layoutComplete", [n, t])
                }
                var n = this;
                if (!t || !t.length) return void i();
                this._itemsOn(t, "layout", i);
                for (var o = [], r = 0, s = t.length; s > r; r++) {
                    var a = t[r],
                        l = this._getItemLayoutPosition(a);
                    l.item = a, l.isInstant = e || a.isLayoutInstant, o.push(l)
                }
                this._processLayoutQueue(o)
            }, g.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, g.prototype._processLayoutQueue = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this._positionItem(n.item, n.x, n.y, n.isInstant)
                }
            }, g.prototype._positionItem = function(t, e, i, n) {
                n ? t.goTo(e, i) : t.moveTo(e, i)
            }, g.prototype._postLayout = function() {
                this.resizeContainer()
            }, g.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, g.prototype._getContainerSize = p, g.prototype._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, g.prototype._itemsOn = function(t, e, i) {
                function n() {
                    return o++, o === r && i.call(s), !0
                }
                for (var o = 0, r = t.length, s = this, a = 0, l = t.length; l > a; a++) {
                    var h = t[a];
                    h.on(e, n)
                }
            }, g.prototype.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, g.prototype.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, g.prototype.stamp = function(t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        this.ignore(n)
                    }
                }
            }, g.prototype.unstamp = function(t) {
                if (t = this._find(t))
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        o(n, this.stamps), this.unignore(n)
                    }
            }, g.prototype._find = function(t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n(t)) : void 0
            }, g.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var i = this.stamps[t];
                        this._manageStamp(i)
                    }
                }
            }, g.prototype._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, g.prototype._manageStamp = p, g.prototype._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    n = f(t),
                    o = {
                        left: e.left - i.left - n.marginLeft,
                        top: e.top - i.top - n.marginTop,
                        right: i.right - e.right - n.marginRight,
                        bottom: i.bottom - e.bottom - n.marginBottom
                    };
                return o
            }, g.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, g.prototype.bindResize = function() {
                this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
            }, g.prototype.unbindResize = function() {
                this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
            }, g.prototype.onresize = function() {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, g.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, g.prototype.needsResizeLayout = function() {
                var t = f(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }, g.prototype.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, g.prototype.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, g.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                }
            }, g.prototype.reveal = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var n = t[i];
                        n.reveal()
                    }
            }, g.prototype.hide = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var n = t[i];
                        n.hide()
                    }
            }, g.prototype.getItem = function(t) {
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var n = this.items[e];
                    if (n.element === t) return n
                }
            }, g.prototype.getItems = function(t) {
                if (t && t.length) {
                    for (var e = [], i = 0, n = t.length; n > i; i++) {
                        var o = t[i],
                            r = this.getItem(o);
                        r && e.push(r)
                    }
                    return e
                }
            }, g.prototype.remove = function(t) {
                t = n(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function() {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        s.remove(), o(s, this.items)
                    }
                }
            }, g.prototype.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var n = this.items[e];
                    n.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
            }, g.data = function(t) {
                var e = t && t.outlayerGUID;
                return e && v[e]
            }, g.create = function(t, i) {
                function n() {
                    g.apply(this, arguments)
                }
                return Object.create ? n.prototype = Object.create(g.prototype) : e(n.prototype, g.prototype), n.prototype.constructor = n, n.defaults = e({}, g.defaults), e(n.defaults, i), n.prototype.settings = {}, n.namespace = t, n.data = g.data, n.Item = function() {
                    m.apply(this, arguments)
                }, n.Item.prototype = new m, s(function() {
                    for (var e = r(t), i = a.querySelectorAll(".js-" + e), o = "data-" + e + "-options", s = 0, p = i.length; p > s; s++) {
                        var c, u = i[s],
                            f = u.getAttribute(o);
                        try {
                            c = f && JSON.parse(f)
                        } catch (d) {
                            l && l.error("Error parsing " + o + " on " + u.nodeName.toLowerCase() + (u.id ? "#" + u.id : "") + ": " + d);
                            continue
                        }
                        var m = new n(u, c);
                        h && h.data(u, t, m)
                    }
                }), h && h.bridget && h.bridget(t, n), n
            }, g.Item = m, g
        }
        var a = t.document,
            l = t.console,
            h = t.jQuery,
            p = function() {},
            c = Object.prototype.toString,
            u = "object" == typeof HTMLElement ? function(t) {
                return t instanceof HTMLElement
            } : function(t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            f = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function(t) {
        function e(t) {
            function e() {
                t.Item.apply(this, arguments)
            }
            return e.prototype = new t.Item, e.prototype._create = function() {
                this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
            }, e.prototype.updateSortData = function() {
                if (!this.isIgnored) {
                    this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var n = e[i];
                        this.sortData[i] = n(this.element, this)
                    }
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window),
    function(t) {
        function e(t, e) {
            function i(t) {
                this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
            }
            return function() {
                function t(t) {
                    return function() {
                        return e.prototype[t].apply(this.isotope, arguments)
                    }
                }
                for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, r = n.length; r > o; o++) {
                    var s = n[o];
                    i.prototype[s] = t(s)
                }
            }(), i.prototype.needsVerticalResizeLayout = function() {
                var e = t(this.isotope.element),
                    i = this.isotope.size && e;
                return i && e.innerHeight !== this.isotope.size.innerHeight
            }, i.prototype._getMeasurement = function() {
                this.isotope._getMeasurement.apply(this, arguments)
            }, i.prototype.getColumnWidth = function() {
                this.getSegmentSize("column", "Width")
            }, i.prototype.getRowHeight = function() {
                this.getSegmentSize("row", "Height")
            }, i.prototype.getSegmentSize = function(t, e) {
                var i = t + e,
                    n = "outer" + e;
                if (this._getMeasurement(i, n), !this[i]) {
                    var o = this.getFirstItemSize();
                    this[i] = o && o[n] || this.isotope.size["inner" + e]
                }
            }, i.prototype.getFirstItemSize = function() {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element)
            }, i.prototype.layout = function() {
                this.isotope.layout.apply(this.isotope, arguments)
            }, i.prototype.getSize = function() {
                this.isotope.getSize(), this.size = this.isotope.size
            }, i.modes = {}, i.create = function(t, e) {
                function n() {
                    i.apply(this, arguments)
                }
                return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
            }, i
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window),
    function(t) {
        function e(t, e) {
            var n = t.create("masonry");
            return n.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var t = this.cols;
                for (this.colYs = []; t--;) this.colYs.push(0);
                this.maxY = 0
            }, n.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, n.prototype.getContainerWidth = function() {
                var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                    i = e(t);
                this.containerWidth = i && i.innerWidth
            }, n.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    n = e && 1 > e ? "round" : "ceil",
                    o = Math[n](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (var r = this._getColGroup(o), s = Math.min.apply(Math, r), a = i(r, s), l = {
                        x: this.columnWidth * a,
                        y: s
                    }, h = s + t.size.outerHeight, p = this.cols + 1 - r.length, c = 0; p > c; c++) this.colYs[a + c] = h;
                return l
            }, n.prototype._getColGroup = function(t) {
                if (2 > t) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                    var o = this.colYs.slice(n, n + t);
                    e[n] = Math.max.apply(Math, o)
                }
                return e
            }, n.prototype._manageStamp = function(t) {
                var i = e(t),
                    n = this._getElementOffset(t),
                    o = this.options.isOriginLeft ? n.left : n.right,
                    r = o + i.outerWidth,
                    s = Math.floor(o / this.columnWidth);
                s = Math.max(0, s);
                var a = Math.floor(r / this.columnWidth);
                a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
                for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, h = s; a >= h; h++) this.colYs[h] = Math.max(l, this.colYs[h])
            }, n.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
            }, n.prototype._getContainerFitWidth = function() {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }, n.prototype.needsResizeLayout = function() {
                var t = this.containerWidth;
                return this.getContainerWidth(), t !== this.containerWidth
            }, n
        }
        var i = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++) {
                var o = t[i];
                if (o === e) return i
            }
            return -1
        };
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t, i) {
            var n = t.create("masonry"),
                o = n.prototype._getElementOffset,
                r = n.prototype.layout,
                s = n.prototype._getMeasurement;
            e(n.prototype, i.prototype), n.prototype._getElementOffset = o, n.prototype.layout = r, n.prototype._getMeasurement = s;
            var a = n.prototype.measureColumns;
            n.prototype.measureColumns = function() {
                this.items = this.isotope.filteredItems, a.call(this)
            };
            var l = n.prototype._manageStamp;
            return n.prototype._manageStamp = function() {
                this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
            }, n
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
    }(window),
    function(t) {
        function e(t) {
            var e = t.create("fitRows");
            return e.prototype._resetLayout = function() {
                this.x = 0, this.y = 0, this.maxY = 0
            }, e.prototype._getItemLayoutPosition = function(t) {
                t.getSize(), 0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
                var e = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
            }, e.prototype._getContainerSize = function() {
                return {
                    height: this.maxY
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
    }(window),
    function(t) {
        function e(t) {
            var e = t.create("vertical", {
                horizontalAlignment: 0
            });
            return e.prototype._resetLayout = function() {
                this.y = 0
            }, e.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return this.y += t.size.outerHeight, {
                    x: e,
                    y: i
                }
            }, e.prototype._getContainerSize = function() {
                return {
                    height: this.y
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === p.call(t)
        }

        function n(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
            else e.push(t);
            return e
        }

        function o(t, e) {
            var i = c(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t, i, r, l, p) {
            function c(t, e) {
                return function(i, n) {
                    for (var o = 0, r = t.length; r > o; o++) {
                        var s = t[o],
                            a = i.sortData[s],
                            l = n.sortData[s];
                        if (a > l || l > a) {
                            var h = void 0 !== e[s] ? e[s] : e,
                                p = h ? 1 : -1;
                            return (a > l ? 1 : -1) * p
                        }
                    }
                    return 0
                }
            }
            var u = t.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
            u.Item = l, u.LayoutMode = p, u.prototype._create = function() {
                this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
                for (var e in p.modes) this._initLayoutMode(e)
            }, u.prototype.reloadItems = function() {
                this.itemGUID = 0, t.prototype.reloadItems.call(this)
            }, u.prototype._itemize = function() {
                for (var e = t.prototype._itemize.apply(this, arguments), i = 0, n = e.length; n > i; i++) {
                    var o = e[i];
                    o.id = this.itemGUID++
                }
                return this._updateItemsSortData(e), e
            }, u.prototype._initLayoutMode = function(t) {
                var i = p.modes[t],
                    n = this.options[t] || {};
                this.options[t] = i.options ? e(i.options, n) : n, this.modes[t] = new i(this)
            }, u.prototype.layout = function() {
                return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
            }, u.prototype._layout = function() {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
            }, u.prototype.arrange = function(t) {
                this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
            }, u.prototype._init = u.prototype.arrange, u.prototype._getIsInstant = function() {
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                return this._isInstant = t, t
            }, u.prototype._filter = function(t) {
                function e() {
                    c.reveal(o), c.hide(r)
                }
                var i = this.options.filter;
                i = i || "*";
                for (var n = [], o = [], r = [], s = this._getFilterTest(i), a = 0, l = t.length; l > a; a++) {
                    var h = t[a];
                    if (!h.isIgnored) {
                        var p = s(h);
                        p && n.push(h), p && h.isHidden ? o.push(h) : p || h.isHidden || r.push(h)
                    }
                }
                var c = this;
                return this._isInstant ? this._noTransition(e) : e(), n
            }, u.prototype._getFilterTest = function(t) {
                return s && this.options.isJQueryFiltering ? function(e) {
                    return s(e.element).is(t)
                } : "function" == typeof t ? function(e) {
                    return t(e.element)
                } : function(e) {
                    return r(e.element, t)
                }
            }, u.prototype.updateSortData = function(t) {
                this._getSorters(), t = n(t);
                var e = this.getItems(t);
                e = e.length ? e : this.items, this._updateItemsSortData(e)
            }, u.prototype._getSorters = function() {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = f(i)
                }
            }, u.prototype._updateItemsSortData = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    n.updateSortData()
                }
            };
            var f = function() {
                function t(t) {
                    if ("string" != typeof t) return t;
                    var i = a(t).split(" "),
                        n = i[0],
                        o = n.match(/^\[(.+)\]$/),
                        r = o && o[1],
                        s = e(r, n),
                        l = u.sortDataParsers[i[1]];
                    return t = l ? function(t) {
                        return t && l(s(t))
                    } : function(t) {
                        return t && s(t)
                    }
                }

                function e(t, e) {
                    var i;
                    return i = t ? function(e) {
                        return e.getAttribute(t)
                    } : function(t) {
                        var i = t.querySelector(e);
                        return i && h(i)
                    }
                }
                return t
            }();
            u.sortDataParsers = {
                parseInt: function(t) {
                    return parseInt(t, 10)
                },
                parseFloat: function(t) {
                    return parseFloat(t)
                }
            }, u.prototype._sort = function() {
                var t = this.options.sortBy;
                if (t) {
                    var e = [].concat.apply(t, this.sortHistory),
                        i = c(e, this.options.sortAscending);
                    this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
                }
            }, u.prototype._mode = function() {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw Error("No layout mode: " + t);
                return e.options = this.options[t], e
            }, u.prototype._resetLayout = function() {
                t.prototype._resetLayout.call(this), this._mode()._resetLayout()
            }, u.prototype._getItemLayoutPosition = function(t) {
                return this._mode()._getItemLayoutPosition(t)
            }, u.prototype._manageStamp = function(t) {
                this._mode()._manageStamp(t)
            }, u.prototype._getContainerSize = function() {
                return this._mode()._getContainerSize()
            }, u.prototype.needsResizeLayout = function() {
                return this._mode().needsResizeLayout()
            }, u.prototype.appended = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i)
                }
            }, u.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps();
                    var n = this._filterRevealAdded(e);
                    this.layoutItems(i), this.filteredItems = n.concat(this.filteredItems)
                }
            }, u.prototype._filterRevealAdded = function(t) {
                var e = this._noTransition(function() {
                    return this._filter(t)
                });
                return this.layoutItems(e, !0), this.reveal(e), t
            }, u.prototype.insert = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i, n, o = e.length;
                    for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
                    var r = this._filter(e);
                    for (this._noTransition(function() {
                            this.hide(r)
                        }), i = 0; o > i; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
                    this.reveal(r)
                }
            };
            var d = u.prototype.remove;
            return u.prototype.remove = function(t) {
                t = n(t);
                var e = this.getItems(t);
                if (d.call(this, t), e && e.length)
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        o(s, this.filteredItems)
                    }
            }, u.prototype._noTransition = function(t) {
                var e = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var i = t.call(this);
                return this.options.transitionDuration = e, i
            }, u
        }
        var s = t.jQuery,
            a = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            l = document.documentElement,
            h = l.textContent ? function(t) {
                return t.textContent
            } : function(t) {
                return t.innerText
            },
            p = Object.prototype.toString,
            c = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window),
    function(t, e, $, i) {
        "use strict";
        var n = $("html"),
            o = $(t),
            r = $(e),
            s = $.fancybox = function() {
                s.open.apply(this, arguments)
            },
            a = navigator.userAgent.match(/msie/i),
            l = null,
            h = e.createTouch !== i,
            p = function(t) {
                return t && t.hasOwnProperty && t instanceof $
            },
            c = function(t) {
                return t && "string" === $.type(t)
            },
            u = function(t) {
                return c(t) && t.indexOf("%") > 0
            },
            f = function(t) {
                return t && !(t.style.overflow && "hidden" === t.style.overflow) && (t.clientWidth && t.scrollWidth > t.clientWidth || t.clientHeight && t.scrollHeight > t.clientHeight)
            },
            d = function(t, e) {
                var i = parseInt(t, 10) || 0;
                return e && u(t) && (i = s.getViewport()[e] / 100 * i), Math.ceil(i)
            },
            m = function(t, e) {
                return d(t, e) + "px"
            };
        $.extend(s, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !h,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (a ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                    loading: '<div id="fancybox-loading"><div></div></div>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: $.noop,
                beforeLoad: $.noop,
                afterLoad: $.noop,
                beforeShow: $.noop,
                afterShow: $.noop,
                beforeChange: $.noop,
                beforeClose: $.noop,
                afterClose: $.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(t, e) {
                return t && ($.isPlainObject(e) || (e = {}), !1 !== s.close(!0)) ? ($.isArray(t) || (t = p(t) ? $(t).get() : [t]), $.each(t, function(n, o) {
                    var r = {},
                        a, l, h, u, f, d, m;
                    "object" === $.type(o) && (o.nodeType && (o = $(o)), p(o) ? (r = {
                        href: o.data("fancybox-href") || o.attr("href"),
                        title: $("<div/>").text(o.data("fancybox-title") || o.attr("title") || "").html(),
                        isDom: !0,
                        element: o
                    }, $.metadata && $.extend(!0, r, o.metadata())) : r = o), a = e.href || r.href || (c(o) ? o : null), l = e.title !== i ? e.title : r.title || "", h = e.content || r.content, u = h ? "html" : e.type || r.type, !u && r.isDom && (u = o.data("fancybox-type"), u || (f = o.prop("class").match(/fancybox\.(\w+)/), u = f ? f[1] : null)), c(a) && (u || (s.isImage(a) ? u = "image" : s.isSWF(a) ? u = "swf" : "#" === a.charAt(0) ? u = "inline" : c(o) && (u = "html", h = o)), "ajax" === u && (d = a.split(/\s+/, 2), a = d.shift(), m = d.shift())), h || ("inline" === u ? a ? h = $(c(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : r.isDom && (h = o) : "html" === u ? h = a : u || a || !r.isDom || (u = "inline", h = o)), $.extend(r, {
                        href: a,
                        type: u,
                        content: h,
                        title: l,
                        selector: m
                    }), t[n] = r
                }), s.opts = $.extend(!0, {}, s.defaults, e), e.keys !== i && (s.opts.keys = e.keys ? $.extend({}, s.defaults.keys, e.keys) : !1), s.group = t, s._start(s.opts.index)) : void 0
            },
            cancel: function() {
                var t = s.coming;
                t && !1 === s.trigger("onCancel") || (s.hideLoading(), t && (s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), s.coming = null, s.current || s._afterZoomOut(t)))
            },
            close: function(t) {
                s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isActive && (s.isOpen && t !== !0 ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, $(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : ($(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut())))
            },
            play: function(t) {
                var e = function() {
                        clearTimeout(s.player.timer)
                    },
                    i = function() {
                        e(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
                    },
                    n = function() {
                        e(), r.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd")
                    },
                    o = function() {
                        s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, r.bind({
                            "onCancel.player beforeClose.player": n,
                            "onUpdate.player": i,
                            "beforeLoad.player": e
                        }), i(), s.trigger("onPlayStart"))
                    };
                t === !0 || !s.player.isActive && t !== !1 ? o() : n()
            },
            next: function(t) {
                var e = s.current;
                e && (c(t) || (t = e.direction.next), s.jumpto(e.index + 1, t, "next"))
            },
            prev: function(t) {
                var e = s.current;
                e && (c(t) || (t = e.direction.prev), s.jumpto(e.index - 1, t, "prev"))
            },
            jumpto: function(t, e, n) {
                var o = s.current;
                o && (t = d(t), s.direction = e || o.direction[t >= o.index ? "next" : "prev"], s.router = n || "jumpto", o.loop && (0 > t && (t = o.group.length + t % o.group.length), t %= o.group.length), o.group[t] !== i && (s.cancel(), s._start(t)))
            },
            reposition: function(t, e) {
                var i = s.current,
                    n = i ? i.wrap : null,
                    o;
                n && (o = s._getPosition(e), t && "scroll" === t.type ? (delete o.position, n.stop(!0, !0).animate(o, 200)) : (n.css(o), i.pos = $.extend({}, i.dim, o)))
            },
            update: function(t) {
                var e = t && t.originalEvent && t.originalEvent.type,
                    i = !e || "orientationchange" === e;
                i && (clearTimeout(l), l = null), s.isOpen && !l && (l = setTimeout(function() {
                    var n = s.current;
                    n && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (i || "load" === e || "resize" === e && n.autoResize) && s._setDimension(), "scroll" === e && n.canShrink || s.reposition(t), s.trigger("onUpdate"), l = null)
                }, i && !h ? 0 : 300))
            },
            toggle: function(t) {
                s.isOpen && (s.current.fitToView = "boolean" === $.type(t) ? t : !s.current.fitToView, h && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update())
            },
            hideLoading: function() {
                r.unbind(".loading"), $("#fancybox-loading").remove()
            },
            showLoading: function() {
                var t, e;
                s.hideLoading(), t = $(s.opts.tpl.loading).click(s.cancel).appendTo("body"), r.bind("keydown.loading", function(t) {
                    27 === (t.which || t.keyCode) && (t.preventDefault(), s.cancel())
                }), s.defaults.fixed || (e = s.getViewport(), t.css({
                    position: "absolute",
                    top: .5 * e.h + e.y,
                    left: .5 * e.w + e.x
                })), s.trigger("onLoading")
            },
            getViewport: function() {
                var e = s.current && s.current.locked || !1,
                    i = {
                        x: o.scrollLeft(),
                        y: o.scrollTop()
                    };
                return e && e.length ? (i.w = e[0].clientWidth, i.h = e[0].clientHeight) : (i.w = h && t.innerWidth ? t.innerWidth : o.width(), i.h = h && t.innerHeight ? t.innerHeight : o.height()), i
            },
            unbindEvents: function() {
                s.wrap && p(s.wrap) && s.wrap.unbind(".fb"), r.unbind(".fb"), o.unbind(".fb")
            },
            bindEvents: function() {
                var t = s.current,
                    e;
                t && (o.bind("orientationchange.fb" + (h ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update), e = t.keys, e && r.bind("keydown.fb", function(n) {
                    var o = n.which || n.keyCode,
                        r = n.target || n.srcElement;
                    return 27 === o && s.coming ? !1 : void(n.ctrlKey || n.altKey || n.shiftKey || n.metaKey || r && (r.type || $(r).is("[contenteditable]")) || $.each(e, function(e, r) {
                        return t.group.length > 1 && r[o] !== i ? (s[e](r[o]), n.preventDefault(), !1) : $.inArray(o, r) > -1 ? (s[e](), n.preventDefault(), !1) : void 0
                    }))
                }), $.fn.mousewheel && t.mouseWheel && s.wrap.bind("mousewheel.fb", function(e, i, n, o) {
                    for (var r = e.target || null, a = $(r), l = !1; a.length && !(l || a.is(".fancybox-skin") || a.is(".fancybox-wrap"));) l = f(a[0]), a = $(a).parent();
                    0 === i || l || s.group.length > 1 && !t.canShrink && (o > 0 || n > 0 ? s.prev(o > 0 ? "down" : "left") : (0 > o || 0 > n) && s.next(0 > o ? "up" : "right"), e.preventDefault())
                }))
            },
            trigger: function(t, e) {
                var i, n = e || s.coming || s.current;
                if (n) {
                    if ($.isFunction(n[t]) && (i = n[t].apply(n, Array.prototype.slice.call(arguments, 1))), i === !1) return !1;
                    n.helpers && $.each(n.helpers, function(e, i) {
                        i && s.helpers[e] && $.isFunction(s.helpers[e][t]) && s.helpers[e][t]($.extend(!0, {}, s.helpers[e].defaults, i), n)
                    })
                }
                r.trigger(t)
            },
            isImage: function(t) {
                return c(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(t) {
                return c(t) && t.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(t) {
                var e = {},
                    i, n, o, r, a;
                if (t = d(t), i = s.group[t] || null, !i) return !1;
                if (e = $.extend(!0, {}, s.opts, i), r = e.margin, a = e.padding, "number" === $.type(r) && (e.margin = [r, r, r, r]), "number" === $.type(a) && (e.padding = [a, a, a, a]), e.modal && $.extend(!0, e, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), e.autoSize && (e.autoWidth = e.autoHeight = !0), "auto" === e.width && (e.autoWidth = !0), "auto" === e.height && (e.autoHeight = !0), e.group = s.group, e.index = t, s.coming = e, !1 === s.trigger("beforeLoad")) return void(s.coming = null);
                if (o = e.type, n = e.href, !o) return s.coming = null, s.current && s.router && "jumpto" !== s.router ? (s.current.index = t, s[s.router](s.direction)) : !1;
                if (s.isActive = !0, ("image" === o || "swf" === o) && (e.autoHeight = e.autoWidth = !1, e.scrolling = "visible"), "image" === o && (e.aspectRatio = !0), "iframe" === o && h && (e.scrolling = "scroll"), e.wrap = $(e.tpl.wrap).addClass("fancybox-" + (h ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + e.wrapCSS).appendTo(e.parent || "body"), $.extend(e, {
                        skin: $(".fancybox-skin", e.wrap),
                        outer: $(".fancybox-outer", e.wrap),
                        inner: $(".fancybox-inner", e.wrap)
                    }), $.each(["Top", "Right", "Bottom", "Left"], function(t, i) {
                        e.skin.css("padding" + i, m(e.padding[t]))
                    }), s.trigger("onReady"), "inline" === o || "html" === o) {
                    if (!e.content || !e.content.length) return s._error("content")
                } else if (!n) return s._error("href");
                "image" === o ? s._loadImage() : "ajax" === o ? s._loadAjax() : "iframe" === o ? s._loadIframe() : s._afterLoad()
            },
            _error: function(t) {
                $.extend(s.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: t,
                    content: s.coming.tpl.error
                }), s._afterLoad()
            },
            _loadImage: function() {
                var t = s.imgPreload = new Image;
                t.onload = function() {
                    this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad()
                }, t.onerror = function() {
                    this.onload = this.onerror = null, s._error("image")
                }, t.src = s.coming.href, t.complete !== !0 && s.showLoading()
            },
            _loadAjax: function() {
                var t = s.coming;
                s.showLoading(), s.ajaxLoad = $.ajax($.extend({}, t.ajax, {
                    url: t.href,
                    error: function(t, e) {
                        s.coming && "abort" !== e ? s._error("ajax", t) : s.hideLoading()
                    },
                    success: function(e, i) {
                        "success" === i && (t.content = e, s._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var t = s.coming,
                    e = $(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", h ? "auto" : t.iframe.scrolling).attr("src", t.href);
                $(t.wrap).bind("onReset", function() {
                    try {
                        $(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (t) {}
                }), t.iframe.preload && (s.showLoading(), e.one("load", function() {
                    $(this).data("ready", 1), h || $(this).bind("load.fb", s.update), $(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad()
                })), t.content = e.appendTo(t.inner), t.iframe.preload || s._afterLoad()
            },
            _preloadImages: function() {
                var t = s.group,
                    e = s.current,
                    i = t.length,
                    n = e.preload ? Math.min(e.preload, i - 1) : 0,
                    o, r;
                for (r = 1; n >= r; r += 1) o = t[(e.index + r) % i], "image" === o.type && o.href && ((new Image).src = o.href)
            },
            _afterLoad: function() {
                var t = s.coming,
                    e = s.current,
                    i = "fancybox-placeholder",
                    n, o, r, a, l, h;
                if (s.hideLoading(), t && s.isActive !== !1) {
                    if (!1 === s.trigger("afterLoad", t, e)) return t.wrap.stop(!0).trigger("onReset").remove(), void(s.coming = null);
                    switch (e && (s.trigger("beforeChange", e), e.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), s.unbindEvents(), n = t, o = t.content, r = t.type, a = t.scrolling, $.extend(s, {
                        wrap: n.wrap,
                        skin: n.skin,
                        outer: n.outer,
                        inner: n.inner,
                        current: n,
                        previous: e
                    }), l = n.href, r) {
                        case "inline":
                        case "ajax":
                        case "html":
                            n.selector ? o = $("<div>").html(o).find(n.selector) : p(o) && (o.data(i) || o.data(i, $('<div class="' + i + '"></div>').insertAfter(o).hide()), o = o.show().detach(), n.wrap.bind("onReset", function() {
                                $(this).find(o).length && o.hide().replaceAll(o.data(i)).data(i, !1)
                            }));
                            break;
                        case "image":
                            o = n.tpl.image.replace(/\{href\}/g, l);
                            break;
                        case "swf":
                            o = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + l + '"></param>', h = "", $.each(n.swf, function(t, e) {
                                o += '<param name="' + t + '" value="' + e + '"></param>', h += " " + t + '="' + e + '"'
                            }), o += '<embed src="' + l + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                    }
                    p(o) && o.parent().is(n.inner) || n.inner.append(o), s.trigger("beforeShow"), n.inner.css("overflow", "yes" === a ? "scroll" : "no" === a ? "hidden" : a), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? e.prevMethod && s.transitions[e.prevMethod]() : $(".fancybox-wrap").not(n.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? n.nextMethod : n.openMethod](), s._preloadImages()
                }
            },
            _setDimension: function() {
                var t = s.getViewport(),
                    e = 0,
                    i = !1,
                    n = !1,
                    o = s.wrap,
                    r = s.skin,
                    a = s.inner,
                    l = s.current,
                    h = l.width,
                    p = l.height,
                    c = l.minWidth,
                    f = l.minHeight,
                    g = l.maxWidth,
                    y = l.maxHeight,
                    v = l.scrolling,
                    x = l.scrollOutside ? l.scrollbarWidth : 0,
                    b = l.margin,
                    w = d(b[1] + b[3]),
                    _ = d(b[0] + b[2]),
                    L, I, E, S, C, z, O, T, k, W, R, j, P, M, A;
                if (o.add(r).add(a).width("auto").height("auto").removeClass("fancybox-tmp"), L = d(r.outerWidth(!0) - r.width()), I = d(r.outerHeight(!0) - r.height()), E = w + L, S = _ + I, C = u(h) ? (t.w - E) * d(h) / 100 : h, z = u(p) ? (t.h - S) * d(p) / 100 : p, "iframe" === l.type) {
                    if (M = l.content, l.autoHeight && 1 === M.data("ready")) try {
                        M[0].contentWindow.document.location && (a.width(C).height(9999), A = M.contents().find("body"), x && A.css("overflow-x", "hidden"), z = A.outerHeight(!0))
                    } catch (D) {}
                } else(l.autoWidth || l.autoHeight) && (a.addClass("fancybox-tmp"), l.autoWidth || a.width(C), l.autoHeight || a.height(z), l.autoWidth && (C = a.width()), l.autoHeight && (z = a.height()), a.removeClass("fancybox-tmp"));
                if (h = d(C), p = d(z), k = C / z, c = d(u(c) ? d(c, "w") - E : c), g = d(u(g) ? d(g, "w") - E : g), f = d(u(f) ? d(f, "h") - S : f), y = d(u(y) ? d(y, "h") - S : y), O = g, T = y, l.fitToView && (g = Math.min(t.w - E, g), y = Math.min(t.h - S, y)), j = t.w - w, P = t.h - _, l.aspectRatio ? (h > g && (h = g, p = d(h / k)), p > y && (p = y, h = d(p * k)), c > h && (h = c, p = d(h / k)), f > p && (p = f, h = d(p * k))) : (h = Math.max(c, Math.min(h, g)), l.autoHeight && "iframe" !== l.type && (a.width(h), p = a.height()), p = Math.max(f, Math.min(p, y))), l.fitToView)
                    if (a.width(h).height(p), o.width(h + L), W = o.width(), R = o.height(), l.aspectRatio)
                        for (;
                            (W > j || R > P) && h > c && p > f && !(e++ > 19);) p = Math.max(f, Math.min(y, p - 10)), h = d(p * k), c > h && (h = c, p = d(h / k)), h > g && (h = g, p = d(h / k)), a.width(h).height(p), o.width(h + L), W = o.width(), R = o.height();
                    else h = Math.max(c, Math.min(h, h - (W - j))), p = Math.max(f, Math.min(p, p - (R - P)));
                x && "auto" === v && z > p && j > h + L + x && (h += x), a.width(h).height(p), o.width(h + L), W = o.width(), R = o.height(), i = (W > j || R > P) && h > c && p > f, n = l.aspectRatio ? O > h && T > p && C > h && z > p : (O > h || T > p) && (C > h || z > p), $.extend(l, {
                    dim: {
                        width: m(W),
                        height: m(R)
                    },
                    origWidth: C,
                    origHeight: z,
                    canShrink: i,
                    canExpand: n,
                    wPadding: L,
                    hPadding: I,
                    wrapSpace: R - r.outerHeight(!0),
                    skinSpace: r.height() - p
                }), !M && l.autoHeight && p > f && y > p && !n && a.height("auto")
            },
            _getPosition: function(t) {
                var e = s.current,
                    i = s.getViewport(),
                    n = e.margin,
                    o = s.wrap.width() + n[1] + n[3],
                    r = s.wrap.height() + n[0] + n[2],
                    a = {
                        position: "absolute",
                        top: n[0],
                        left: n[3]
                    };
                return e.autoCenter && e.fixed && !t && r <= i.h && o <= i.w ? a.position = "fixed" : e.locked || (a.top += i.y, a.left += i.x), a.top = m(Math.max(a.top, a.top + (i.h - r) * e.topRatio)), a.left = m(Math.max(a.left, a.left + (i.w - o) * e.leftRatio)), a
            },
            _afterZoomIn: function() {
                var t = s.current;
                t && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible").addClass("fancybox-opened").hide().show(0), s.update(), (t.closeClick || t.nextClick && s.group.length > 1) && s.inner.css("cursor", "pointer").bind("click.fb", function(e) {
                    $(e.target).is("a") || $(e.target).parent().is("a") || (e.preventDefault(), s[t.closeClick ? "close" : "next"]())
                }), t.closeBtn && $(t.tpl.closeBtn).appendTo(s.skin).bind("click.fb", function(t) {
                    t.preventDefault(), s.close()
                }), t.arrows && s.group.length > 1 && ((t.loop || t.index > 0) && $(t.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (t.loop || t.index < s.group.length - 1) && $(t.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play(!0)) : s.play(!1))
            },
            _afterZoomOut: function(t) {
                t = t || s.current, $(".fancybox-wrap").trigger("onReset").remove(), $.extend(s, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), s.trigger("afterClose", t)
            }
        }), s.transitions = {
            getOrigPosition: function() {
                var t = s.current,
                    e = t.element,
                    i = t.orig,
                    n = {},
                    o = 50,
                    r = 50,
                    a = t.hPadding,
                    l = t.wPadding,
                    h = s.getViewport();
                return !i && t.isDom && e.is(":visible") && (i = e.find("img:first"), i.length || (i = e)), p(i) ? (n = i.offset(), i.is("img") && (o = i.outerWidth(), r = i.outerHeight())) : (n.top = h.y + (h.h - r) * t.topRatio, n.left = h.x + (h.w - o) * t.leftRatio), ("fixed" === s.wrap.css("position") || t.locked) && (n.top -= h.y, n.left -= h.x), n = {
                    top: m(n.top - a * t.topRatio),
                    left: m(n.left - l * t.leftRatio),
                    width: m(o + l),
                    height: m(r + a)
                }
            },
            step: function(t, e) {
                var i, n, o, r = e.prop,
                    a = s.current,
                    l = a.wrapSpace,
                    h = a.skinSpace;
                ("width" === r || "height" === r) && (i = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), s.isClosing && (i = 1 - i), n = "width" === r ? a.wPadding : a.hPadding, o = t - n, s.skin[r](d("width" === r ? o : o - l * i)), s.inner[r](d("width" === r ? o : o - l * i - h * i)))
            },
            zoomIn: function() {
                var t = s.current,
                    e = t.pos,
                    i = t.openEffect,
                    n = "elastic" === i,
                    o = $.extend({
                        opacity: 1
                    }, e);
                delete o.position, n ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === i && (e.opacity = .1), s.wrap.css(e).animate(o, {
                    duration: "none" === i ? 0 : t.openSpeed,
                    easing: t.openEasing,
                    step: n ? this.step : null,
                    complete: s._afterZoomIn
                })
            },
            zoomOut: function() {
                var t = s.current,
                    e = t.closeEffect,
                    i = "elastic" === e,
                    n = {
                        opacity: .1
                    };
                i && (n = this.getOrigPosition(), t.closeOpacity && (n.opacity = .1)), s.wrap.animate(n, {
                    duration: "none" === e ? 0 : t.closeSpeed,
                    easing: t.closeEasing,
                    step: i ? this.step : null,
                    complete: s._afterZoomOut
                })
            },
            changeIn: function() {
                var t = s.current,
                    e = t.nextEffect,
                    i = t.pos,
                    n = {
                        opacity: 1
                    },
                    o = s.direction,
                    r = 200,
                    a;
                i.opacity = .1, "elastic" === e && (a = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (i[a] = m(d(i[a]) - r), n[a] = "+=" + r + "px") : (i[a] = m(d(i[a]) + r), n[a] = "-=" + r + "px")), "none" === e ? s._afterZoomIn() : s.wrap.css(i).animate(n, {
                    duration: t.nextSpeed,
                    easing: t.nextEasing,
                    complete: s._afterZoomIn
                })
            },
            changeOut: function() {
                var t = s.previous,
                    e = t.prevEffect,
                    i = {
                        opacity: .1
                    },
                    n = s.direction,
                    o = 200;
                "elastic" === e && (i["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=" + o + "px"), t.wrap.animate(i, {
                    duration: "none" === e ? 0 : t.prevSpeed,
                    easing: t.prevEasing,
                    complete: function() {
                        $(this).trigger("onReset").remove()
                    }
                })
            }
        }, s.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !h,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: $("html"),
            create: function(t) {
                var e;
                t = $.extend({}, this.defaults, t), this.overlay && this.close(), e = s.coming ? s.coming.parent : t.parent, this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(e && e.lenth ? e : "body"), this.fixed = !1, t.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(t) {
                var e = this;
                t = $.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (o.bind("resize.overlay", $.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function(t) {
                    return $(t.target).hasClass("fancybox-overlay") ? (s.isActive ? s.close() : e.close(), !1) : void 0
                }), this.overlay.css(t.css).show()
            },
            close: function() {
                o.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && ($(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), o.scrollTop(this.scrollV).scrollLeft(this.scrollH)), $(".fancybox-overlay").remove().hide(), $.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            },
            update: function() {
                var t = "100%",
                    i;
                this.overlay.width(t).height("100%"), a ? (i = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), r.width() > i && (t = r.width())) : r.width() > o.width() && (t = r.width()), this.overlay.width(t).height(r.height())
            },
            onReady: function(t, e) {
                var i = this.overlay;
                $(".fancybox-overlay").stop(!0, !0), i || this.create(t), t.locked && this.fixed && e.fixed && (e.locked = this.overlay.append(e.wrap), e.fixed = !1), t.showEarly === !0 && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(t, e) {
                e.locked && !this.el.hasClass("fancybox-lock") && (this.fixPosition !== !1 && $("*").filter(function() {
                    return "fixed" === $(this).css("position") && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = o.scrollTop(), this.scrollH = o.scrollLeft(), this.el.addClass("fancybox-lock"), o.scrollTop(this.scrollV).scrollLeft(this.scrollH)), this.open(t)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(t) {
                this.overlay && !s.coming && this.overlay.fadeOut(t.speedOut, $.proxy(this.close, this))
            }
        }, s.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(t) {
                var e = s.current,
                    i = e.title,
                    n = t.type,
                    o, r;
                if ($.isFunction(i) && (i = i.call(e.element, e)), c(i) && "" !== $.trim(i)) {
                    switch (o = $('<div class="fancybox-title fancybox-title-' + n + '-wrap">' + i + "</div>"), n) {
                        case "inside":
                            r = s.skin;
                            break;
                        case "outside":
                            r = s.wrap;
                            break;
                        case "over":
                            r = s.inner;
                            break;
                        default:
                            r = s.skin, o.appendTo("body"), a && o.width(o.width()), o.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(d(o.css("margin-bottom")))
                    }
                    o["top" === t.position ? "prependTo" : "appendTo"](r)
                }
            }
        }, $.fn.fancybox = function(t) {
            var e, i = $(this),
                n = this.selector || "",
                o = function(o) {
                    var r = $(this).blur(),
                        a = e,
                        l, h;
                    o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || r.is(".fancybox-wrap") || (l = t.groupAttr || "data-fancybox-group", h = r.attr(l), h || (l = "rel", h = r.get(0)[l]), h && "" !== h && "nofollow" !== h && (r = n.length ? $(n) : i, r = r.filter("[" + l + '="' + h + '"]'), a = r.index(this)), t.index = a, s.open(r, t) !== !1 && o.preventDefault())
                };
            return t = t || {}, e = t.index || 0, n && t.live !== !1 ? r.undelegate(n, "click.fb-start").delegate(n + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", o) : i.unbind("click.fb-start").bind("click.fb-start", o), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, r.ready(function() {
            var e, o;
            $.scrollbarWidth === i && ($.scrollbarWidth = function() {
                var t = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    e = t.children(),
                    i = e.innerWidth() - e.height(99).innerWidth();
                return t.remove(), i
            }), $.support.fixedPosition === i && ($.support.fixedPosition = function() {
                var t = $('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    e = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
                return t.remove(), e
            }()), $.extend(s.defaults, {
                scrollbarWidth: $.scrollbarWidth(),
                fixed: $.support.fixedPosition,
                parent: $("body")
            }), e = $(t).width(), n.addClass("fancybox-lock-test"), o = $(t).width(), n.removeClass("fancybox-lock-test"), $("<style type='text/css'>.fancybox-margin{margin-right:" + (o - e) + "px;}</style>").appendTo("head")
        })
    }(window, document, jQuery),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
    }(function($) {
        function t(t) {
            return s.raw ? t : encodeURIComponent(t)
        }

        function e(t) {
            return s.raw ? t : decodeURIComponent(t)
        }

        function i(e) {
            return t(s.json ? JSON.stringify(e) : String(e))
        }

        function n(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(r, " ")), s.json ? JSON.parse(t) : t
            } catch (e) {}
        }

        function o(t, e) {
            var i = s.raw ? t : n(t);
            return $.isFunction(e) ? e(i) : i
        }
        var r = /\+/g,
            s = $.cookie = function(n, r, a) {
                if (void 0 !== r && !$.isFunction(r)) {
                    if (a = $.extend({}, s.defaults, a), "number" == typeof a.expires) {
                        var l = a.expires,
                            h = a.expires = new Date;
                        h.setTime(+h + 864e5 * l)
                    }
                    return document.cookie = [t(n), "=", i(r), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
                }
                for (var p = n ? void 0 : {}, c = document.cookie ? document.cookie.split("; ") : [], u = 0, f = c.length; f > u; u++) {
                    var d = c[u].split("="),
                        m = e(d.shift()),
                        g = d.join("=");
                    if (n && n === m) {
                        p = o(g, r);
                        break
                    }
                    n || void 0 === (g = o(g)) || (p[m] = g)
                }
                return p
            };
        s.defaults = {}, $.removeCookie = function(t, e) {
            return void 0 === $.cookie(t) ? !1 : ($.cookie(t, "", $.extend({}, e, {
                expires: -1
            })), !$.cookie(t))
        }
    });
var filterVal = "all",
    widthVal, heightVal, colorVal = "none",
    chosenTitle;
$(function() {
    if ($("#phone-alert .alert").on("closed.bs.alert", function() {
            $.cookie("hidephonenumber", "true", {
                expires: 7
            })
        }), "true" == $.cookie("hidephonenumber") && $("#phone-alert").hide(), $(".fancybox").fancybox(), $("#sv-affix").length > 0) {
        var t = $("#sv-affix").offset(),
            e = $("#sv-affix").outerWidth();
        $("#sv-affix").css("width", e + "px"), $("#sv-affix").affix({
            offset: {
                top: t.top - 20
            }
        })
    }
    if ($("#gallery-images").imagesLoaded(function() {
            var t = $("#gallery-images .gallery-img").length,
                e = $("#gallery-images").isotope({
                    itemSelector: ".gallery-img",
                    masonry: {
                        gutter: 25
                    },
                    isInitLayout: !1
                });
            e.isotope("on", "layoutComplete", function() {
                function e() {
                    i >= t || ($("#gallery-images .gallery-img").eq(i).addClass("fadeIn"), i++, setTimeout(e, 100))
                }
                var i = 0;
                e()
            }), e.isotope("arrange")
        }), $(".page-imagelibrary").length > 0) {
        $(".curtaincolors").hide();
        var i = function(t) {
                $(".curtain-width-first").remove(), $("#gallery").remove(), $("#collapseThree > div").append("<div id='gallery'></div>");
                var e = $("#gallery-hidden").find(".thumb[data-length='" + t + "']");
                e.each(function(t) {
                    $(this).find("img").attr("src", $(this).find("img").data("src"))
                }), e.clone().appendTo($("#gallery")), $(".thumb").click(function(t) {
                    chosenTitle = $(this).find("img").attr("title"),
                            $(".choose-image-first").hide(),
                            $("#foregroundimage").html(""),
                            $("#foregroundimage").append('<img data-caption="' + $(this).find(".caption small").text() + '" data-length="' + $(this).data("length") + '" data-title="' + $(this).find(".caption").text() + '" src="' + $(this).find("img").data("original") + '">').hide().fadeIn(), n(colorVal), $("#curtain-height-step").collapse("show"), $("html, body").animate({
                        scrollTop: $("#curtain-height-step").offset().top
                    }, 300)
                }), $("#gallery").imagesLoaded(function() {
                    $("#gallery").isotope({
                        isInitLayout: !0,
                        itemSelector: ".thumb",
                        getSortData: {
                            filename: "[src]"
                        },
                        layoutMode: "masonry",
                        masonry: {
                            gutter: 20
                        },
                        transitionDuration: 0
                    })
                })
            },
            n = function(t) {
                "none" == t ? ($("#foregroundimage img").css("padding", "0px"), $("#foregroundimage img").css("padding-bottom", "0px")) : ($("#foregroundimage img").css("padding", "12px"), $("#foregroundimage img").css("padding-bottom", "24px"), $("#foregroundimage img").removeClass(), $("#foregroundimage img").addClass(t), $("#foregroundimage img").data("fcolor", t))
            };
        $(".widthfilterbtn").click(function() {
            widthVal = $(this).data("val"), i(widthVal), $(".widthfilterbtn.active").removeClass("active"), $(this).addClass("active"), $("#curtain-style-step").collapse("show"), $("html, body").animate({
                scrollTop: $("#curtain-style-step").parent().offset().top
            }, 300)
        }), $(".framecolor").click(function(t) {
            return "windowframe" == $(this).data("colorclass") ? void $(".curtaincolors").show() : ("none" == $(this).data("colorclass") && $(".curtaincolors").hide(), colorVal = $(this).data("colorclass"), n(colorVal), $(".framecolor.active").removeClass("active"), $(this).addClass("active"), void $("html, body").animate({
                scrollTop: $("#collapseThree").parent().offset().top
            }, 300))
        }), $(".filtereins").click(function() {
            filterVal = $(this).attr("rel").toLowerCase().replace(" ", "-"), i(widthVal), $(".main-categories a.active").removeClass("active"), $(this).addClass("active"), $("html, body").animate({
                scrollTop: $("#collapseThree").parent().offset().top
            }, 300)
        }), $(".heightfilterbtn").click(function() {
            heightVal = $(this).data("val"), $("#curtain-height-step a.active").removeClass("active"), $(this).addClass("active"), $("#collapseFour").collapse("show"), $("#collapseFive").collapse("show"), $("html, body").animate({
                scrollTop: $("#collapseFour").parent().offset().top
            }, 300)
        }), $("#borderwidth").on("keyup change", function() {
            $("#foregroundimage img").css("padding", 3 * parseInt($(this).val()) + "px"), $("#foregroundimage img").css("padding-bottom", 3 * parseInt($(this).val()) * 2 + "px"), $("#foregroundimage img")[0].naturalWidth + 3 * parseInt($(this).val()) * 2 > 745 && console.log("zu groß... neuberechnung")
        }), $("#generatebutton").click(function() {
            var t;
            $("#pdfstatus").text("Please wait a Moment while we are generating your preview..."),
             $.get("imagelibrary_counter.php", function(e) {
                t = "CurtainPreview_" + chosenTitle + "_" + e + ".pdf";
                var i;
                i = "none" == colorVal ? 0 : 12,$.getJSON("pdftest.php",{
                  "img" : $("#foregroundimage img").attr("src"),
                  "fName" : $("#foregroundimage img").data("title"),
                  "fCaption":$("#foregroundimage img").data("caption"),
                  "fcolor" : $("#foregroundimage img").data("fcolor"),
                  "fpadding" : i,
                  "clength" : $("#foregroundimage img").data("length"),
                  "cheight" : heightVal,
                  "outputFile" : t
                }).done(function(e){
                  console.log(e);
                  ht = '<a href="' + e[0] + '" target="_blank">Click here to download your PDF</a>';
                  ht += '<br><br><p id="mailStatus1">Or email a copy to yourself</p><br><br>';
                  ht += '<div class="row"  id="mailStatus2">';
                  ht += '<div class="col-md-5"><input type="text" class="form-control" id="mailID" placeholder="Enter your email address here"></div>';
                  ht += '<div class="col-md-3"><button class="btn btn-default btn" onclick="onButtonClick(\''+t+'\')">Mail Me a Copy</button></div>';
                  ht += '</div>';
                  $("#pdfstatus").html(ht);
                })
                /**
                $.getJSON("http://do.convertapi.com/Web2Pdf/json", {
                    ApiKey: "124197111",
                    CUrl: "http://sereneview.com/imagelibrary_pdf.php?
                    img=" +$("#foregroundimage img").attr("src") +
                      "&name=" + $("#foregroundimage img").data("title") +
                       "&fcolor=" + $("#foregroundimage img").data("fcolor") +
                        "&name=" + $("#foregroundimage img").data("title") +
                         "&fpadding=" + i +
                          "&clength=" + $("#foregroundimage img").data("length") +
                           "&cheight=" + heightVal,
                    OutputFileName: t,
                    StoreFile: !0
                }).done(function(e) {
                    $("#pdfstatus").html('<a href="' + e.FileUrl + '">Click here to download your PDF</a>'),
                    $.get("imagelibrary_download.php?filename=" + t + "&url=" + e.FileUrl, function(t) {
                        console.log("Download was performed.")
                    })
                })*/
            })
        })
    }
});
