!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var o = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
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
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            i,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return i;
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
    n((n.s = 14));
})([
  function (e, t, n) {
    "use strict";
    t.a = function (e, ...t) {
      for (let n = 0; n < t.length; n++) if (void 0 === (e = e[t[n]])) return;
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(4);
    t.a = async function (e) {
      const t = Object.keys(e),
        n = await Object(i.a)(t);
      return { ...e, ...n };
    };
  },
  function (e, t, n) {
    "use strict";
    function i(e, t) {
      if (e.hasOwnProperty(t)) return e[t];
      throw `${t} missing on ${JSON.stringify(e)}`;
    }
    n.d(t, "a", function () {
      return i;
    });
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function () {
      return currentUserId;
    }),
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return currentUserScreenName;
      });
    var _lib_dig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
      _lib_find_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
    const scripts = document.querySelectorAll("script");
    scripts.forEach((script) => {
      script.innerHTML.includes("__INITIAL_STATE__") && eval(script.innerHTML);
    });
    const session = Object(_lib_dig__WEBPACK_IMPORTED_MODULE_0__.a)(
        window,
        "__INITIAL_STATE__",
        "session"
      ),
      users = Object(_lib_dig__WEBPACK_IMPORTED_MODULE_0__.a)(
        window,
        "__INITIAL_STATE__",
        "entities",
        "users",
        "entities"
      ),
      currentUserId = () =>
        Object(_lib_find_property__WEBPACK_IMPORTED_MODULE_1__.a)(
          session,
          "user_id"
        );
    function currentUserScreenName() {
      const e = users
        ? Object(_lib_find_property__WEBPACK_IMPORTED_MODULE_1__.a)(
            users,
            currentUserId()
          )
        : Object(_lib_find_property__WEBPACK_IMPORTED_MODULE_1__.a)(
            session,
            "user"
          );
      return Object(_lib_find_property__WEBPACK_IMPORTED_MODULE_1__.a)(
        e,
        "screen_name"
      );
    }
  },
  function (e, t, n) {
    "use strict";
    function i(e, t) {
      return new Promise((n) => {
        const i = {};
        (i[e] = t),
          chrome.storage.sync.set(i, () => {
            chrome.runtime.lastError
              ? (console.log(chrome.runtime.lastError.message),
                chrome.storage.local.set(i, () => n()))
              : (chrome.storage.local.remove(e), n());
          });
      });
    }
    function o(e) {
      return new Promise((t) => {
        chrome.storage.sync.get(e, (n) => {
          chrome.storage.local.get(e, (e) => {
            const i = { ...n, ...e };
            t(i);
          });
        });
      });
    }
    n.d(t, "b", function () {
      return i;
    }),
      n.d(t, "a", function () {
        return o;
      });
  },
  function (e, t, n) {
    "use strict";
    function i() {
      return new Promise((e) => {
        chrome.storage.sync.get(["proActivationKey", "proExpiresAt"], (t) =>
          e(t)
        );
      });
    }
    function o(e) {
      return void 0 !== e && e.proExpiresAt >= Date.now();
    }
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return o;
      });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return a;
      });
    var i = n(4);
    const o = "autopilotActions";
    async function a() {
      return (await Object(i.a)([o]))[o];
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var i = n(1);
    const o = {
      autopilotPauseAfterActionMax: "",
      autopilotPauseAfterActionMin: "",
      autopilotRepeatAfter: 60,
      autopilotRepeatAfterMax: 60,
    };
    function a() {
      return Object(i.a)(o);
    }
  },
  function (e, t, n) {
    "use strict";
    var i = n(1);
    const o = {
      likeMaxFollowers: "",
      likeMaxFollowersFollowingRatio: "",
      likeMaxFollowing: "",
      likeMaxTweetLikes: "",
      likeMinFollowers: "",
      likeMinFollowing: "",
      likeMinFollowersFollowingRatio: "",
      likeMinTweetLikes: "",
      likeIntervalMax: 8,
      likeIntervalMin: 4,
      likeLanguageWhitelist: "",
      likeLimit: 1e3,
      likePauseWhenUnableToLike: 10,
      likeSkipFollowed: !1,
      likeSkipReplies: !1,
      likeSkipRetweets: !1,
      likeSkipRetweetsWithComment: !1,
      likeSkipLikedXTweetsFromUser: "",
      likeTweetTextBlacklist: "",
    };
    t.a = { all: () => Object(i.a)(o) };
  },
  function (e, t, n) {
    "use strict";
    var i = n(1);
    const o = {
      retweetIntervalMax: 8,
      retweetIntervalMin: 4,
      retweetLanguageWhitelist: "",
      retweetLimit: 1e3,
      retweetPauseWhenUnableToRetweet: 10,
      retweetSkipFollowed: !1,
      retweetSkipReplies: !1,
      retweetSkipRetweets: !1,
      retweetSkipRetweetsWithComment: !1,
      retweetTweetTextBlacklist: "",
    };
    t.a = { all: () => Object(i.a)(o) };
  },
  function (e, t, n) {
    "use strict";
    var i = n(1);
    const o = {
      followBlacklist: "@username1,@username2",
      followBioBlacklist: "",
      followBioRequired: !1,
      followBioWhitelist: "",
      followDailyLimit: "",
      followIntervalMax: 8,
      followIntervalMin: 4,
      followLimit: 400,
      followMaxFollowers: "",
      followMaxFollowersFollowingRatio: "",
      followMaxFollowing: "",
      followMinFollowers: "",
      followMinFollowing: "",
      followMinFollowersFollowingRatio: "",
      followPauseAfterSkipMax: "",
      followPauseAfterSkipMin: "",
      followPauseWhenTwitterLimitExceeded: 5,
      followProfileImageRequired: !1,
      followProtectedRequired: !1,
      followSkipFollowed: !0,
      followSkipFollower: !1,
      followSkipProtected: !1,
      followSkipVerified: !1,
      followTweetLanguageWhitelist: "",
    };
    t.a = { all: () => Object(i.a)(o) };
  },
  function (e, t, n) {
    "use strict";
    var i = n(1);
    const o = {
      unfollowBlacklist: "@username1,@username2",
      unfollowBioBlacklist: "",
      unfollowFollowersLessThan: "",
      unfollowFollowersGreaterThan: "",
      unfollowFollowingLessThan: "",
      unfollowFollowingGreaterThan: "",
      unfollowIntervalMax: 8,
      unfollowIntervalMin: 4,
      unfollowLimit: "",
      unfollowMassFollowedRequired: !1,
      unfollowMinDaysFollowed: 2,
      unfollowPauseAfterSkipMax: "",
      unfollowPauseAfterSkipMin: "",
      unfollowSkipFollower: !0,
      unfollowSkipVerified: !1,
    };
    t.a = { all: () => Object(i.a)(o) };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var i = n(1);
    const o = {
      unlikeIntervalMax: 8,
      unlikeIntervalMin: 4,
      unlikeLimit: "",
      unlikeMassLikedRequired: !1,
      unlikeMinDaysSinceLike: 2,
    };
    function a() {
      return Object(i.a)(o);
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var i = n(1);
    const o = {
      unretweetIntervalMax: 8,
      unretweetIntervalMin: 4,
      unretweetLimit: "",
      unretweetMassRetweetedRequired: !1,
      unretweetMinDaysSinceRetweet: 2,
    };
    function a() {
      return Object(i.a)(o);
    }
  },
  function (e, t, n) {
    n(18), (e.exports = n(15));
  },
  function (e, t, n) {},
  ,
  ,
  function (e, t, n) {
    "use strict";
    function i(e) {
      return new Promise((t) => {
        console.log(`Sleeping ${e} ms ...`), setTimeout(() => t(), e);
      });
    }
    n.r(t);
    const o = "SuperpowersForTwitterSuspendedAutopilotActionTypes";
    const a = () => {
      const e = sessionStorage.getItem(o);
      return "string" != typeof e ? [] : JSON.parse(e);
    };
    function r() {
      if ("object" != typeof ai) return;
      const e = a().concat(ai.type);
      sessionStorage.setItem(o, JSON.stringify(e));
    }
    var s = function (e, t) {
      t = null == t ? 1 : t;
      const n = null == e ? 0 : e.length;
      if (!n || t < 1) return [];
      t = t > n ? n : t;
      let i = -1;
      const o = n - 1,
        a = [...e];
      for (; ++i < t; ) {
        const e = i + Math.floor(Math.random() * (o - i + 1)),
          t = a[e];
        (a[e] = a[i]), (a[i] = t);
      }
      return a.slice(0, t);
    };
    const l = [
        {
          title: "Superpowers for LinkedIn",
          text: "Mass connect, mass withdraw invitation and mass view profile on LinkedIn with powerful options.",
          action: {
            text: "Learn more",
            url: "https://www.clemensteichmann.com/superpowers-for-linkedin",
          },
        },
        {
          title: "Superpowers for Instagram",
          text: "Mass follow, mass unfollow and mass like on Instagram with powerful options.",
          action: {
            text: "Learn more",
            url: "https://www.clemensteichmann.com/superpowers-for-instagram",
          },
        },
        {
          title: "Superpowers for Twitter PRO",
          text: "Unlimited and ad-free",
          action: {
            text: "Get PRO",
            url: "https://www.clemensteichmann.com/superpowers-for-twitter/pro",
          },
        },
        {
          title: "Fast Inventory System",
          text: "A well-organized home inventory makes you happy. You only have useful things and are aware of them.",
          action: {
            text: "Learn more",
            url: "https://fastinventorysystem.com/",
          },
        },
      ],
      c = ({ text: e, title: t, action: n }) =>
        `\n    <div class="sft-ad animated fadeInRight">\n      <div class="sft-ad__title">${t}</div>\n      <div class="sft-ad__text">${e}</div>\n      <a class="sft-ad__action" href="${n.url}" target="_blank">${n.text}</a>\n    </div>\n  `,
      u = document.createElement("div");
    function f() {
      u.style.display = "none";
    }
    u.classList.add("sft-ads"), document.body.appendChild(u);
    const w = (e) => {
      if (e < 60) return String(e);
      const t = e / 60 / 60,
        n = Math.floor(t),
        i = 60 * (t - n),
        o = Math.floor(i),
        a = 60 * (i - o),
        r = Math.round(a);
      let s;
      return (
        n > 0
          ? ((s = String(n)), (s += ":"), (s += String(o).padStart(2, 0)))
          : (s = String(o)),
        (s += ":"),
        (s += String(r).padStart(2, 0))
      );
    };
    const d = document.createElement("div");
    let p;
    function m() {
      p = "follow";
    }
    function y() {
      p = "unfollow";
    }
    function b() {
      p = "like";
    }
    function g() {
      p = "retweet";
    }
    function k() {
      p = "unretweet";
    }
    function _() {
      p = "unlike";
    }
    function h(e) {
      d.innerHTML = `Continuing autopilot in ${(function (e) {
        const t = e % 1e3;
        let n = w((e - t) / 1e3);
        return (n += "."), (n += String(t).padStart(3, 0));
      })(e)} ...`;
    }
    d.classList.add("sft-status-bar__label");
    var F = n(3);
    function x() {
      return (
        location.pathname.toUpperCase() ==
        `/${Object(F.b)()}/following`.toUpperCase()
      );
    }
    function v() {
      return (
        location.pathname.toUpperCase() ==
        `/${Object(F.b)()}/likes`.toUpperCase()
      );
    }
    function R() {
      return (
        location.pathname.toUpperCase() == `/${Object(F.b)()}`.toUpperCase()
      );
    }
    function L() {
      return location.pathname.includes("/lists/");
    }
    var S = n(0),
      j = n(2);
    function O(e) {
      const t = [];
      return (
        e.timeline.instructions
          .filter((e) => "object" == typeof e.addEntries)
          .map((e) => e.addEntries.entries)
          .flat()
          .forEach((n) => {
            const i = Object(S.a)(n, "content", "item", "content", "tweet");
            if (void 0 === i) return;
            if (i.promotedMetadata) return;
            if (void 0 === i.id) return;
            const o = e.globalObjects.tweets[i.id];
            if (void 0 === o) return;
            const a = Object(j.a)(o, "user_id_str");
            (o.user = Object(j.a)(e.globalObjects.users, a)), t.push(o);
          }),
        t
      );
    }
    function T(e) {
      const t =
        Object(S.a)(
          e,
          "data",
          "list",
          "tweets_timeline",
          "timeline",
          "instructions"
        ) ||
        Object(S.a)(
          e,
          "data",
          "user",
          "result",
          "timeline",
          "timeline",
          "instructions"
        ) ||
        Object(S.a)(
          e,
          "data",
          "user",
          "result",
          "timeline_v2",
          "timeline",
          "instructions"
        ) ||
        Object(S.a)(
          e,
          "data",
          "community",
          "community_timeline",
          "timeline",
          "instructions"
        ) ||
        Object(S.a)(
          e,
          "data",
          "topic_by_rest_id",
          "topic_page",
          "body",
          "timeline",
          "instructions"
        ) ||
        Object(S.a)(e, "data", "home", "home_timeline_urt", "instructions") ||
        Object(S.a)(
          e,
          "data",
          "search_by_raw_query",
          "search_timeline",
          "timeline",
          "instructions"
        );
      if (!t) return;
      const n = [];
      return (
        t.forEach((e) => {
          "TimelineAddEntries" == e.type &&
            e.entries.forEach((e) => {
              const t =
                Object(S.a)(
                  e,
                  "content",
                  "itemContent",
                  "tweet_results",
                  "result"
                ) || Object(S.a)(e, "content", "itemContent", "tweet");
              if ("object" != typeof t) return;
              if ("object" != typeof t.legacy) return;
              const i =
                Object(S.a)(t, "core", "user") ||
                Object(S.a)(t, "core", "user_results", "result");
              "object" == typeof i &&
                "object" == typeof i.legacy &&
                ((t.legacy.id_str = t.rest_id),
                (t.legacy.user = i.legacy),
                (t.legacy.user.id_str = i.rest_id),
                (t.legacy.retweeted_status_id_str =
                  Object(S.a)(
                    t.legacy,
                    "retweeted_status_result",
                    "result",
                    "rest_id"
                  ) || Object(S.a)(t.legacy, "retweeted_status", "rest_id")),
                n.push(t.legacy));
            });
        }),
        n
      );
    }
    const E = (e, t, n, i) => {
      const o = e();
      if (o) n(o);
      else {
        if ("number" == typeof t) {
          if (t <= 0) return void i("time limit exceeded");
          t -= 100;
        }
        setTimeout(() => E(e, t, n, i), 100);
      }
    };
    var M = function (e, t) {
      return new Promise((n, i) => {
        E(e, t, n, i);
      });
    };
    let I;
    const $ = async ({ fromIndex: e = 0, getList: t, getFocusableEl: n }) => {
        if (!Mn) {
          qn(), console.log("Scan list for usable index ...");
          for (let i = e; i < t().length; i++) {
            if (n(t()[i])) return i;
          }
          return (
            window.scrollBy(0, 300),
            await i(500),
            await $({ fromIndex: e, getList: t, getFocusableEl: n })
          );
        }
      },
      A = async ({ callback: e, getList: t, getFocusableEl: n, index: i }) => {
        if (Mn) return;
        if ((qn(), In))
          return void (await C({
            callback: e,
            getList: t,
            getFocusableEl: n,
            index: i,
            milliseconds: 500,
          }));
        if (void 0 === t()) return;
        const o = t()[i];
        if (void 0 === o)
          await C({
            callback: e,
            getList: t,
            getFocusableEl: n,
            index: i,
            milliseconds: 100,
          });
        else {
          try {
            (o.focusableEl = await M(() => n(o), 2e3)), (I = window.scrollY);
          } catch (o) {
            console.log(o), I && window.scrollTo(0, I);
            const a = await $({
              fromIndex: i + 1,
              getList: t,
              getFocusableEl: n,
            });
            return void (await A({
              callback: e,
              getList: t,
              getFocusableEl: n,
              index: a,
            }));
          }
          o.focusableEl.focus(),
            await e(o, i),
            await A({
              callback: e,
              getList: t,
              getFocusableEl: n,
              index: i + 1,
            });
        }
      },
      C = async ({
        callback: e,
        getList: t,
        getFocusableEl: n,
        index: o,
        milliseconds: a,
      }) => {
        await i(a),
          await A({ callback: e, getList: t, getFocusableEl: n, index: o });
      };
    async function D({ callback: e, getFocusableEl: t, getList: n }) {
      I = void 0;
      const i = await $({ getList: n, getFocusableEl: t });
      await A({ callback: e, getList: n, getFocusableEl: t, index: i });
    }
    function P(e) {
      return e.followers_count;
    }
    function q(e) {
      return 1 == e.followed_by;
    }
    function U(e) {
      const t = e.followers_count;
      if ("number" != typeof t) return;
      const n = e.friends_count;
      return "number" == typeof n ? t / n : void 0;
    }
    function B(e) {
      return e.friends_count;
    }
    function W(e) {
      return Object(j.a)(e, "id_str");
    }
    function G(e) {
      return 1 == e.protected;
    }
    function N(e) {
      return 1 == e.verified;
    }
    function H(e) {
      return Object(j.a)(e, "description");
    }
    function X(e) {
      return `/${Object(j.a)(e, "screen_name")}`;
    }
    const K = (e) => Object(j.a)(e, "id_str");
    function V(e) {
      return Object(j.a)(e, "lang");
    }
    function Q(e) {
      return Object(j.a)(e, "favorite_count");
    }
    function J(e) {
      return 1 == e.favorited;
    }
    function Y(e) {
      return "string" == typeof e.in_reply_to_status_id_str;
    }
    function z(e) {
      return "string" == typeof e.retweeted_status_id_str;
    }
    function Z(e) {
      return "string" == typeof e.quoted_status_id_str;
    }
    function ee(e) {
      return 1 == e.retweeted;
    }
    function te(e) {
      return e.retweeted_status_id_str || K(e);
    }
    function ne(e) {
      return e.full_text;
    }
    const ie = (e) => Object(j.a)(e, "user");
    function oe(e) {
      return W(ie(e));
    }
    function ae(e) {
      const t = `[data-testid="tweet"] a[href$="/status/${te(
        e
      )}"][role="link"]`;
      return (
        console.log(`Querying tweet link with ${t}`), document.querySelector(t)
      );
    }
    function re(e) {
      return e.focusableEl.closest('[data-testid="tweet"]').lastElementChild;
    }
    const se = document.createElement("script");
    (se.type = "text/javascript"),
      (se.innerHTML =
        "\n(function() {\n  var XHR = XMLHttpRequest.prototype\n  var open = XHR.open\n  XHR.open = function(method, url) {\n    this.url = url\n    this.origin = location.href.toUpperCase()\n    return open.apply(this, arguments)\n  }\n  var send = XHR.send\n  XHR.send = function(body) {\n    this.addEventListener('load', function() {\n      window.postMessage({body: body, origin: this.origin, response: this.response, status: this.status, url: this.url}, '*')\n    })\n    return send.apply(this, arguments)\n  }\n})()\n"),
      document.head.prepend(se);
    const le = {};
    function ce(e, t) {
      (le[e] = le[e] || []), le[e].push(t);
    }
    window.addEventListener("message", (e) => {
      e.data.origin &&
        "string" == typeof e.data.response &&
        e.data.url &&
        e.data.status &&
        (({ body: e, origin: t, response: n, status: i, url: o }) => {
          Object.keys(le).forEach((a) => {
            if (!o.includes(a)) return;
            let r = {};
            if (n.length > 0)
              try {
                r = JSON.parse(n);
              } catch (e) {
                console.error(e);
              }
            le[a].forEach((n) =>
              n({ body: e, origin: t, parsedResponse: r, status: i, url: o })
            );
          });
        })(e.data);
    });
    const ue = {},
      fe = (e, t) => {
        !1 !== Array.isArray(t) &&
          0 !== t.length &&
          (ue[e] ? (ue[e] = ue[e].concat(t)) : (ue[e] = t));
      };
    ce("2/timeline/favorites/", ({ origin: e, parsedResponse: t }) =>
      fe(e, O(t))
    ),
      ce("/Likes", ({ origin: e, parsedResponse: t }) => fe(e, T(t)));
    const we = () => ue[location.href.toUpperCase()];
    async function de(e) {
      await D({ callback: e, getFocusableEl: ae, getList: we });
    }
    function pe(e) {
      const t = `[data-testid="${e.id_str}-follow"]`;
      return (
        console.log(`Querying follow button of ${e.screen_name} with ${t}`),
        document.querySelector(t)
      );
    }
    function me(e) {
      const t = `[aria-modal="true"] [data-testid="UserCell"] a[href="${X(
        e
      )}"][role="link"]:not([dir])`;
      return (
        console.log(`Querying profile link of ${e.screen_name} with ${t}`),
        document.querySelector(t)
      );
    }
    function ye(e) {
      return e.focusableEl.closest('[data-testid="UserCell"]');
    }
    const be = {},
      ge = (e, t) => {
        t && 0 != t.length && (be[e] ? (be[e] = be[e].concat(t)) : (be[e] = t));
      },
      ke = (e) => {
        const t = [];
        return (
          e.timeline.instructions
            .filter((e) => "object" == typeof e.addEntries)
            .map((e) => e.addEntries.entries)
            .flat()
            .forEach((n) => {
              const i = Object(S.a)(
                n,
                "content",
                "item",
                "content",
                "user",
                "id"
              );
              if (i) {
                const n = e.globalObjects.users[i];
                n && t.push(n);
              }
            }),
          t
        );
      },
      _e = (e, t) => {
        const n =
          Object(S.a)(
            t,
            "data",
            "user",
            "followers_timeline",
            "timeline",
            "instructions"
          ) ||
          Object(S.a)(
            t,
            "data",
            "favoriters_timeline",
            "timeline",
            "instructions"
          ) ||
          Object(S.a)(
            t,
            "data",
            "user",
            "following_timeline",
            "timeline",
            "instructions"
          ) ||
          Object(S.a)(
            t,
            "data",
            "user",
            "result",
            "timeline",
            "timeline",
            "instructions"
          ) ||
          Object(S.a)(
            t,
            "data",
            "list",
            "members_timeline",
            "timeline",
            "instructions"
          ) ||
          Object(S.a)(
            t,
            "data",
            "list",
            "subscribers_timeline",
            "timeline",
            "instructions"
          ) ||
          Object(S.a)(
            t,
            "data",
            "retweeters_timeline",
            "timeline",
            "instructions"
          ) ||
          Object(S.a)(
            t,
            "data",
            "search_by_raw_query",
            "search_timeline",
            "timeline",
            "instructions"
          );
        if (!n) return;
        const i = [];
        return (
          n.forEach((t) => {
            "TimelineAddEntries" == t.type
              ? t.entries.forEach((e) => {
                  const t =
                    Object(S.a)(e, "content", "itemContent", "user") ||
                    Object(S.a)(
                      e,
                      "content",
                      "itemContent",
                      "user_results",
                      "result"
                    );
                  "object" == typeof t &&
                    "object" == typeof t.legacy &&
                    ((t.legacy.id_str = t.rest_id), i.push(t.legacy));
                })
              : "TimelineClearCache" == t.type && (be[e] = void 0);
          }),
          i
        );
      };
    ce("/lists/members.json", ({ origin: e, parsedResponse: t }) =>
      ge(e, t.users)
    ),
      ce("/lists/subscribers.json", ({ origin: e, parsedResponse: t }) =>
        ge(e, t.users)
      ),
      ce("followers/list.json", ({ origin: e, parsedResponse: t }) =>
        ge(e, t.users)
      ),
      ce("friends/list.json", ({ origin: e, parsedResponse: t }) =>
        ge(e, t.users)
      ),
      ce("timeline/liked_by.json", ({ origin: e, parsedResponse: t }) =>
        ge(e, ke(t))
      ),
      ce("timeline/retweeted_by.json", ({ origin: e, parsedResponse: t }) =>
        ge(e, ke(t))
      ),
      ce("search/adaptive.json", ({ origin: e, parsedResponse: t }) =>
        ge(e, ke(t))
      ),
      ce("/Favoriters", ({ origin: e, parsedResponse: t }) => ge(e, _e(e, t))),
      ce("/Followers", ({ origin: e, parsedResponse: t }) => ge(e, _e(e, t))),
      ce("/Following", ({ origin: e, parsedResponse: t }) => ge(e, _e(e, t))),
      ce("/ListMembers", ({ origin: e, parsedResponse: t }) => ge(e, _e(e, t))),
      ce("/ListSubscribers", ({ origin: e, parsedResponse: t }) =>
        ge(e, _e(e, t))
      ),
      ce("/Retweeters", ({ origin: e, parsedResponse: t }) => ge(e, _e(e, t))),
      ce(
        "/api/2/people_discovery/modules_urt.json",
        ({ origin: e, parsedResponse: t }) => {
          /\/I\/CONNECT_PEOPLE|\/FOLLOWERS|\/FOLLOWING|\/SUGGESTED/.test(e) &&
            ((e = e.replace(/FOLLOWERS|FOLLOWING/g, "SUGGESTED")),
            ge(
              e,
              ((e, t) => {
                const n = Object(S.a)(t, "timeline", "instructions");
                if (!1 === Array.isArray(n)) return;
                const i = [];
                return (
                  n.forEach((e) => {
                    const n = Object(S.a)(e, "addEntries", "entries");
                    !1 !== Array.isArray(n) &&
                      n.forEach((e) => {
                        const n = Object(S.a)(
                          e,
                          "content",
                          "timelineModule",
                          "items"
                        );
                        !1 !== Array.isArray(n) &&
                          n.forEach((e) => {
                            const n = Object(S.a)(
                              e,
                              "item",
                              "content",
                              "user",
                              "id"
                            );
                            if (n) {
                              const e = t.globalObjects.users[n];
                              e && i.push(e);
                            }
                          });
                      });
                  }),
                  i
                );
              })(0, t)
            ));
        }
      ),
      ce("i/api/graphql", ({ origin: e, parsedResponse: t }) =>
        ge(e, _e(e, t))
      );
    const he = () => be[location.href.toUpperCase()];
    async function Fe(
      e,
      t = function (e) {
        const t = `[data-testid="UserCell"] a[href="${X(e)}"][role="link"]`;
        return (
          console.log(`Querying profile link of ${e.screen_name} with ${t}`),
          document.querySelector(t)
        );
      }
    ) {
      await D({ callback: e, getFocusableEl: t, getList: he });
    }
    const xe = {},
      ve = (e, t) => {
        !1 !== Array.isArray(t) &&
          0 !== t.length &&
          (Hn() && (e = xn.toUpperCase()),
          xe[e] ? (xe[e] = xe[e].concat(t)) : (xe[e] = t));
      };
    ce("search/adaptive.json", ({ origin: e, parsedResponse: t }) =>
      ve(e, O(t))
    ),
      ce("/timeline/list.json", ({ origin: e, parsedResponse: t }) =>
        ve(e, O(t))
      ),
      ce("i/api/2/live_event/timeline/", ({ origin: e, parsedResponse: t }) =>
        ve(e, O(t))
      ),
      ce("/ListLatestTweetsTimeline", ({ origin: e, parsedResponse: t }) =>
        ve(e, T(t))
      ),
      ce("/CommunityTweetsTimeline", ({ origin: e, parsedResponse: t }) =>
        ve(e, T(t))
      ),
      ce("/TopicLandingPage", ({ origin: e, parsedResponse: t }) =>
        ve(e, T(t))
      ),
      ce("i/api/graphql", ({ origin: e, parsedResponse: t }) => ve(e, T(t)));
    const Re = () => xe[location.href.toUpperCase()];
    async function Le(e) {
      await D({ callback: e, getFocusableEl: ae, getList: Re });
    }
    const Se = {},
      je = (e, t) => {
        !1 !== Array.isArray(t) &&
          0 !== t.length &&
          (Hn() && (e = xn.toUpperCase()),
          Se[e] ? (Se[e] = Se[e].concat(t)) : (Se[e] = t));
      };
    ce("/2/timeline/home.json", ({ origin: e, parsedResponse: t }) =>
      je(e, O(t))
    ),
      ce("/HomeTimeline", ({ origin: e, parsedResponse: t }) => je(e, T(t)));
    const Oe = () => Se[location.href.toUpperCase()];
    async function Te(e) {
      await D({ callback: e, getFocusableEl: ae, getList: Oe });
    }
    const Ee = {},
      Me = (e, t) => {
        !1 !== Array.isArray(t) &&
          0 !== t.length &&
          (Ee[e] ? (Ee[e] = Ee[e].concat(t)) : (Ee[e] = t));
      };
    ce("2/timeline/profile/", ({ origin: e, parsedResponse: t }) =>
      Me(e, O(t))
    ),
      ce("/UserTweets", ({ origin: e, parsedResponse: t }) => Me(e, T(t)));
    const Ie = () => Ee[location.href.toUpperCase()];
    async function $e(e) {
      await D({ callback: e, getFocusableEl: ae, getList: Ie });
    }
    const Ae = document.createElement("div");
    (Ae.innerText = "Autopilot"),
      Ae.setAttribute("role", "button"),
      Ae.classList.add("sft-button", "sft-button--autopilot");
    const Ce = () => {
      Ae.style.display = "none";
    };
    async function De() {
      "/home" == location.pathname &&
      !he() &&
      (await (async function () {
        return "object" == typeof (await Jn());
      })())
        ? (Ae.style.display = "initial")
        : Ce();
    }
    Ae.addEventListener("click", () => {
      Ce(), li();
    });
    const Pe = window.indexedDB.open("MassFollowForTwitter", 8);
    let qe;
    function Ue(e, t) {
      qe.transaction([e], "readwrite").objectStore(e).add(t);
    }
    function Be(e, t) {
      return new Promise((n) => {
        if (!qe.objectStoreNames.contains(e)) return void n(void 0);
        const i = qe.transaction([e]).objectStore(e).get(t);
        i.onsuccess = () => {
          n(i.result);
        };
      });
    }
    (Pe.onupgradeneeded = (e) => {
      (qe = e.target.result),
        e.oldVersion < 3 &&
          qe.createObjectStore("v2FollowRecord", {
            keyPath: ["creatorId", "userId"],
          }),
        e.oldVersion < 4 &&
          qe.createObjectStore("retweetRecord", {
            keyPath: ["creatorId", "retweetedStatusId"],
          }),
        e.oldVersion < 5 &&
          qe.createObjectStore("likeRecord", {
            keyPath: ["creatorId", "tweetId"],
          }),
        e.oldVersion < 6 &&
          Pe.transaction
            .objectStore("likeRecord")
            .createIndex("tweetUserId", "tweetUserId"),
        e.oldVersion < 8 &&
          Pe.transaction
            .objectStore("v2FollowRecord")
            .createIndex("createdAt", ["creatorId", "createdAt"]);
    }),
      (Pe.onerror = (e) => {
        console.log(e);
      }),
      (Pe.onsuccess = (e) => {
        qe = e.target.result;
      });
    const We = "likeRecord";
    function Ge(e) {
      return (function (e, t, n) {
        return new Promise((i) => {
          const o = qe
            .transaction([e], "readonly")
            .objectStore(e)
            .index(t)
            .count(IDBKeyRange.only(n));
          o.onsuccess = () => {
            i(o.result);
          };
        });
      })(We, "tweetUserId", oe(e));
    }
    const Ne = (e) => 0 === e.trim().length;
    function He(e) {
      if (!Ne(e)) return e.split(",").map((e) => e.trim());
    }
    function Xe(e, t) {
      return t.includes(V(e));
    }
    var Ke = function (e) {
      return e[Math.floor(Math.random() * e.length)];
    };
    function Ve(e, t) {
      let n = 1e3 * parseFloat(e);
      const i = 1e3 * parseFloat(t),
        o = [n];
      for (; n < i; ) (n += 100), o.push(n);
      return o;
    }
    function Qe(e) {
      return Ke(e);
    }
    let Je;
    const Ye = () => {
        try {
          Je.scrollIntoView({ block: "center" });
        } catch (e) {
          console.error(e);
        }
      },
      ze = (e, t) => {
        const n = document.createElement("div");
        n.classList.add("sft-notification", `sft-notification--${t}`),
          (n.textContent = e);
        try {
          Je.appendChild(n);
        } catch (e) {
          console.error(e);
        }
        Ye();
      };
    function Ze(e) {
      console.log(e), ze(e, "success");
    }
    function et(e) {
      console.log(e), ze(e, "warning");
    }
    function tt(e) {
      Je = e;
    }
    function nt(e, t) {
      tt(re(e)), et(t);
    }
    function it(e, t) {
      tt(re(e)), Ze(t);
    }
    const ot = "v2FollowRecord";
    function at(e) {
      return (
        (t = ot),
        (n = [Object(F.a)(), e]),
        void qe.transaction([t], "readwrite").objectStore(t).delete(n)
      );
      var t, n;
    }
    function rt(e) {
      return Be(ot, [Object(F.a)(), W(e)]);
    }
    function st(e) {
      return Be("followRecord", e.id_str);
    }
    function lt(e) {
      if (0 === e.length) return;
      const t = e
        .split(",")
        .map((e) => e.trim())
        .filter((e) => e.length);
      return new RegExp(t.join("|"), "i");
    }
    var ct = n(8);
    const ut = async () => {
        const e = await ct.a.all();
        return (
          (e.languageWhitelist = He(e.likeLanguageWhitelist)),
          (e.intervalDurationRange = Ve(e.likeIntervalMin, e.likeIntervalMax)),
          (e.skipLikedXTweetsFromUser = parseInt(
            e.likeSkipLikedXTweetsFromUser
          )),
          (e.tweetTextBlacklist = lt(e.likeTweetTextBlacklist)),
          (e.maxFollowing = parseInt(e.likeMaxFollowing)),
          (e.minFollowing = parseInt(e.likeMinFollowing)),
          (e.maxFollowers = parseInt(e.likeMaxFollowers)),
          (e.minFollowers = parseInt(e.likeMinFollowers)),
          (e.maxFollowersFollowingRatio = parseFloat(
            e.likeMaxFollowersFollowingRatio
          )),
          (e.minFollowersFollowingRatio = parseFloat(
            e.likeMinFollowersFollowingRatio
          )),
          (e.maxTweetLikes = parseInt(e.likeMaxTweetLikes)),
          (e.minTweetLikes = parseInt(e.likeMinTweetLikes)),
          e
        );
      },
      ft = async (e, t) => {
        const n = await (async function (e, t) {
          if (J(e)) return "already liked";
          if (t.minTweetLikes) {
            const n = Q(e);
            if (n < t.minTweetLikes)
              return `${n} Tweet likes, but ${t.minTweetLikes} minimum required`;
          }
          if (t.maxTweetLikes) {
            const n = Q(e);
            if (n > t.maxTweetLikes)
              return `${n} Tweet likes, but ${t.maxTweetLikes} maximum required`;
          }
          if (t.languageWhitelist && !Xe(e, t.languageWhitelist))
            return `language "${V(e)}" not whitelisted`;
          if (t.tweetTextBlacklist instanceof RegExp && ne(e)) {
            const n = ne(e).match(t.tweetTextBlacklist);
            if (n) return `${n.join()} found in Tweet text, but is blacklisted`;
          }
          if (t.likeSkipReplies && Y(e)) return "is reply";
          if (t.likeSkipRetweets && z(e)) return "is Retweet";
          if (t.likeSkipRetweetsWithComment && Z(e))
            return "is Retweet with comment";
          if (t.minFollowing) {
            const n = B(ie(e));
            if ("number" == typeof n && n < t.minFollowing)
              return `${n} following, but ${t.minFollowing} minimum required`;
          }
          if (t.maxFollowing) {
            const n = B(ie(e));
            if ("number" == typeof n && n > t.maxFollowing)
              return `${n} following, but ${t.maxFollowing} maximum required`;
          }
          if (t.minFollowers) {
            const n = P(ie(e));
            if ("number" == typeof n && n < t.minFollowers)
              return `${n} followers, but ${t.minFollowers} minimum required`;
          }
          if (t.maxFollowers) {
            const n = P(ie(e));
            if ("number" == typeof n && n > t.maxFollowers)
              return `${n} followers, but ${t.maxFollowers} maximum required`;
          }
          if (t.minFollowersFollowingRatio) {
            const n = U(ie(e));
            if (n && n < t.minFollowersFollowingRatio)
              return `${n.toFixed(2)} followers/following ratio, but ${
                t.minFollowersFollowingRatio
              } minimum required`;
          }
          if (t.maxFollowersFollowingRatio) {
            const n = U(ie(e));
            if (n && n >= t.maxFollowersFollowingRatio)
              return `${n.toFixed(2)} followers/following ratio, but ${
                t.maxFollowersFollowingRatio
              } maximum required`;
          }
          if (t.likeSkipFollowed) {
            const t = ie(e);
            if (await rt(t)) return "already followed once";
            if (await st(t)) return "already followed once";
          }
          if (t.skipLikedXTweetsFromUser) {
            const n = await Ge(e);
            if ("number" == typeof n && n >= t.skipLikedXTweetsFromUser)
              return `already liked ${n} Tweet(s) from user`;
          }
          return !0;
        })(e, t);
        if (1 == n) {
          const n = (function (e) {
            return e.focusableEl
              .closest('[data-testid="tweet"]')
              .querySelector('[data-testid="like"]');
          })(e);
          if (!n) return !1;
          n.click(),
            (function (e) {
              const t = {
                createdAt: Date.now(),
                creatorId: Object(F.a)(),
                tweetId: K(e),
                tweetUserId: oe(e),
              };
              Ue(We, t);
            })(e),
            Nn(),
            it(e, "successfully liked");
          const i = Qe(t.intervalDurationRange);
          await Pn(i), Ye();
        } else n && nt(e, n);
      };
    async function wt(e, t) {
      const n = await ut();
      await An(),
        n.likeLimit && Wn(n.likeLimit),
        e && Wn(e),
        t && Dn(t),
        Un(n.likePauseWhenUnableToLike),
        Re()
          ? await Le(async (e) => {
              await ft(e, n);
            })
          : Oe()
          ? (delete n.likeSkipFollowed,
            delete n.likeSkipLikedXTweetsFromUser,
            delete n.maxFollowing,
            delete n.minFollowing,
            delete n.maxFollowers,
            delete n.minFollowers,
            delete n.maxFollowersFollowingRatio,
            delete n.minFollowersFollowingRatio,
            await Te(async (e) => {
              await ft(e, n);
            }))
          : we()
          ? await de(async (e) => {
              await ft(e, n);
            })
          : Ie() &&
            (delete n.maxFollowing,
            delete n.minFollowing,
            delete n.maxFollowers,
            delete n.minFollowers,
            delete n.maxFollowersFollowingRatio,
            delete n.minFollowersFollowingRatio,
            await $e(async (e) => {
              await ft(e, n);
            }));
    }
    const dt = document.createElement("div");
    (dt.innerText = "Like all"),
      dt.setAttribute("role", "button"),
      dt.classList.add("sft-button", "sft-button--like");
    const pt = () => {
      dt.style.display = "none";
    };
    dt.addEventListener("click", async () => {
      b(), Ce(), It(), ht(), pt(), await wt();
    });
    const mt = "retweetRecord";
    var yt = n(9);
    const bt = async () => {
        const e = await yt.a.all();
        return (
          (e.languageWhitelist = He(e.retweetLanguageWhitelist)),
          (e.intervalDurationRange = Ve(
            e.retweetIntervalMin,
            e.retweetIntervalMax
          )),
          (e.tweetTextBlacklist = lt(e.retweetTweetTextBlacklist)),
          e
        );
      },
      gt = async (e, t) => {
        const n = await (async function (e, t) {
          if (ee(e)) return "already retweeted";
          if (t.languageWhitelist && !Xe(e, t.languageWhitelist))
            return `language "${V(e)}" not whitelisted`;
          if (t.tweetTextBlacklist instanceof RegExp && ne(e)) {
            const n = ne(e).match(t.tweetTextBlacklist);
            if (n) return `${n.join()} found in Tweet text, but is blacklisted`;
          }
          if (t.retweetSkipFollowed) {
            const t = ie(e);
            if (await rt(t)) return "already followed once";
            if (await st(t)) return "already followed once";
          }
          return t.retweetSkipReplies && Y(e)
            ? "is reply"
            : t.retweetSkipRetweets && z(e)
            ? "is Retweet"
            : !t.retweetSkipRetweetsWithComment ||
              !Z(e) ||
              "is Retweet with comment";
        })(e, t);
        if (1 == n) {
          const n = (function (e) {
            return e.focusableEl
              .closest('[data-testid="tweet"]')
              .querySelector('[data-testid="retweet"]');
          })(e);
          if (!n) return !1;
          Gn("/compose/tweet"),
            n.click(),
            (
              await M(
                () =>
                  (() =>
                    document.querySelector(
                      'div[data-testid="retweetConfirm"]'
                    ))() ||
                  (() =>
                    document.querySelector(
                      '[aria-modal="true"] [data-testid="toolBar"] [data-testid="tweetButton"]'
                    ))(),
                9999
              )
            ).click(),
            (function (e) {
              const t = te(e),
                n = {
                  createdAt: Date.now(),
                  creatorId: Object(F.a)(),
                  retweetedStatusId: t,
                };
              Ue(mt, n);
            })(e),
            Nn(),
            it(e, "successfully retweeted");
          const i = Qe(t.intervalDurationRange);
          await Pn(i), Ye();
        } else n && nt(e, n);
      };
    async function kt(e, t) {
      const n = await bt();
      await An(),
        n.retweetLimit && Wn(n.retweetLimit),
        e && Wn(e),
        t && Dn(t),
        Un(n.retweetPauseWhenUnableToRetweet),
        Re()
          ? await Le(async (e) => {
              await gt(e, n);
            })
          : Oe()
          ? (delete n.retweetSkipFollowed,
            await Te(async (e) => {
              await gt(e, n);
            }))
          : Ie() &&
            (await $e(async (e) => {
              await gt(e, n);
            }));
    }
    const _t = document.createElement("div");
    (_t.innerText = "Retweet all"),
      _t.setAttribute("role", "button"),
      _t.classList.add("sft-button", "sft-button--retweet");
    const ht = () => {
      _t.style.display = "none";
    };
    function Ft() {
      (Re() && !location.pathname.includes("/communities/")) ||
      Oe() ||
      (Ie() && !R())
        ? (_t.style.display = "initial")
        : ht();
    }
    function xt(e) {
      return e.split(",").map((e) => e.trim().toUpperCase());
    }
    function vt(e, t) {
      return t.includes(`@${Object(j.a)(e, "screen_name").toUpperCase()}`);
    }
    function Rt(e) {
      !(function (e) {
        const t = {
          createdAt: Date.now(),
          creatorId: Object(F.a)(),
          userId: W(e),
        };
        Ue(ot, t);
      })(e),
        Nn();
    }
    async function Lt(e, t) {
      if (
        !(function (e) {
          return Object(j.a)(e, "screen_name") == Object(F.b)();
        })(e) &&
        (function (e) {
          return 1 != e.following && 1 != e.follow_request_sent;
        })(e)
      ) {
        if (
          (function (e) {
            return 1 == e.blocked_by;
          })(e)
        )
          return "is blocking you";
        if (
          t.followBioRequired &&
          (function (e) {
            return "" === Object(j.a)(e, "description");
          })(e)
        )
          return "has no biography";
        if (t.followSkipVerified && N(e)) return "is verified";
        if (vt(e, t.blacklist)) return "is blacklisted";
        if (
          t.followProfileImageRequired &&
          (function (e) {
            return 1 == e.default_profile_image;
          })(e)
        )
          return "has default profile image";
        if (t.followSkipProtected && G(e)) return "is protected";
        if (t.followProtectedRequired && !G(e)) return "is not protected";
        if (t.followSkipFollower && q(e)) return "is following you";
        if (t.minFollowing) {
          const n = B(e);
          if ("number" == typeof n && n < t.minFollowing)
            return `${n} following, but ${t.minFollowing} minimum required`;
        }
        if (t.maxFollowing) {
          const n = B(e);
          if ("number" == typeof n && n > t.maxFollowing)
            return `${n} following, but ${t.maxFollowing} maximum required`;
        }
        if (t.minFollowers) {
          const n = P(e);
          if ("number" == typeof n && n < t.minFollowers)
            return `${n} followers, but ${t.minFollowers} minimum required`;
        }
        if (t.maxFollowers) {
          const n = P(e);
          if ("number" == typeof n && n > t.maxFollowers)
            return `${n} followers, but ${t.maxFollowers} maximum required`;
        }
        if (t.minFollowersFollowingRatio) {
          const n = U(e);
          if (n && n < t.minFollowersFollowingRatio)
            return `${n.toFixed(2)} followers/following ratio, but ${
              t.minFollowersFollowingRatio
            } minimum required`;
        }
        if (t.maxFollowersFollowingRatio) {
          const n = U(e);
          if (n && n >= t.maxFollowersFollowingRatio)
            return `${n.toFixed(2)} followers/following ratio, but ${
              t.maxFollowersFollowingRatio
            } maximum required`;
        }
        if (t.bioBlacklist instanceof RegExp) {
          const n = H(e).match(t.bioBlacklist);
          if (n) return `${n.join()} found in bio, but is blacklisted`;
        }
        if (t.bioWhitelist instanceof RegExp) {
          const n = H(e);
          if (!1 === t.bioWhitelist.test(n))
            return "no whitelisted word found in bio";
        }
        if (t.followSkipFollowed) {
          if (await rt(e)) return "already followed once";
          if (await st(e)) return "already followed once";
        }
        return !0;
      }
    }
    async function St(e, t) {
      let n;
      if (
        1 ==
        (n =
          t.tweetLanguageWhitelist && !Xe(e, t.tweetLanguageWhitelist)
            ? `language "${V(e)}" not whitelisted`
            : await Lt(e.user, t))
      ) {
        let n;
        Gn(X(e.user)),
          (function (e) {
            const t = `a[href="${X(e.user)}"][role="link"]`;
            return e.focusableEl
              .closest('[data-testid="tweet"]')
              .querySelector(t);
          })(e).click();
        try {
          n = await M(() => pe(e.user), 2e3);
        } catch (e) {
          console.log(e);
        }
        if (
          (n && n.click(),
          window.history.back(),
          await M(() => Xn()),
          (e.focusableEl = await M(() => ae(e))),
          e.focusableEl.focus(),
          tt(re(e)),
          !n)
        )
          return et("follow button not found");
        Rt(e.user), Ze("successfully followed");
        const i = Qe(t.intervalDurationRange);
        await Pn(i);
      } else tt(re(e)), n && (et(n), await Pn(500));
    }
    _t.addEventListener("click", async () => {
      g(), It(), ht(), pt(), await kt();
    });
    const jt = async (e) => {
      if (!Mn) {
        for (let t = e; t >= 0; t--) {
          const n = he()[t];
          if (((n.focusableEl = me(n)), n.focusableEl)) {
            if ((n.focusableEl.scrollIntoView(), t === e)) return;
            break;
          }
        }
        await Pn(40), await jt(e);
      }
    };
    var Ot = n(10);
    const Tt = async () => {
      const e = await Ot.a.all();
      return (
        (e.blacklist = xt(e.followBlacklist)),
        (e.bioBlacklist = lt(e.followBioBlacklist)),
        (e.bioWhitelist = lt(e.followBioWhitelist)),
        (e.tweetLanguageWhitelist = He(e.followTweetLanguageWhitelist)),
        (e.intervalDurationRange = Ve(
          e.followIntervalMin,
          e.followIntervalMax
        )),
        (e.maxFollowing = parseInt(e.followMaxFollowing)),
        (e.minFollowing = parseInt(e.followMinFollowing)),
        (e.maxFollowers = parseInt(e.followMaxFollowers)),
        (e.minFollowers = parseInt(e.followMinFollowers)),
        (e.maxFollowersFollowingRatio = parseFloat(
          e.followMaxFollowersFollowingRatio
        )),
        (e.minFollowersFollowingRatio = parseFloat(
          e.followMinFollowersFollowingRatio
        )),
        e.followPauseAfterSkipMin &&
          e.followPauseAfterSkipMax &&
          (e.pauseAfterSkipRange = Ve(
            e.followPauseAfterSkipMin,
            e.followPauseAfterSkipMax
          )),
        e
      );
    };
    async function Et(e, t) {
      const n = await Tt();
      var i;
      await An(),
        n.followLimit && Wn(n.followLimit),
        e && Wn(e),
        n.followDailyLimit &&
          ((i = await (async function () {
            const e = qe
                .transaction([ot], "readonly")
                .objectStore(ot)
                .index("createdAt"),
              t = IDBKeyRange.bound(
                [Object(F.a)(), Date.now() - 864e5],
                [Object(F.a)(), Date.now()]
              );
            let n = 0;
            return new Promise((i) => {
              e.openCursor(t).onsuccess = (e) => {
                const t = e.target.result;
                t ? ((n += 1), t.continue()) : i(n);
              };
            });
          })()),
          (Ln = i),
          (function (e) {
            Ln >= (vn = e) && ((Mn = !0), r(), bn());
          })(n.followDailyLimit)),
        t && Dn(t),
        Un(n.followPauseWhenTwitterLimitExceeded),
        L() && he()
          ? await (async function (e) {
              await Fe(async (t, n) => {
                const i = await Lt(t, e);
                if (1 == i) {
                  let i = pe(t);
                  if (i) i.click(), Rt(t);
                  else {
                    Gn(X(t)), t.focusableEl.click();
                    try {
                      i = await M(() => pe(t), 4e3);
                    } catch (e) {
                      console.log(e);
                    }
                    i && (i.click(), Rt(t)),
                      window.history.back(),
                      await M(() => Xn()),
                      await jt(n);
                  }
                  if ((tt(ye(t)), !i)) return et("follow button not found");
                  Ze("successfully followed");
                  const o = Qe(e.intervalDurationRange);
                  await Pn(o);
                } else tt(ye(t)), i && (et(i), await Pn(500));
              }, me);
            })(n)
          : Re()
          ? await (async function (e) {
              await Le(async (t) => {
                await St(t, e);
              });
            })(n)
          : we()
          ? await (async function (e) {
              await de(async (t) => {
                await St(t, e);
              });
            })(n)
          : await (async function (e) {
              await Fe(async (t) => {
                const n = await Lt(t, e);
                if ((tt(ye(t)), 1 == n)) {
                  const n = pe(t);
                  if (!n) return et("follow button not found");
                  n.click(), Rt(t), Ze("successfully followed");
                  const i = Qe(e.intervalDurationRange);
                  await Pn(i);
                } else if ((n && et(n), e.pauseAfterSkipRange)) {
                  const t = Qe(e.pauseAfterSkipRange);
                  await Pn(t);
                }
              });
            })(n);
    }
    const Mt = document.createElement("div");
    (Mt.innerText = "Follow all"),
      Mt.setAttribute("role", "button"),
      Mt.classList.add("sft-button", "sft-button--follow");
    const It = () => {
      Mt.style.display = "none";
    };
    Mt.addEventListener("click", async () => {
      m(), It(), pt(), ht(), await Et();
    });
    const $t = 864e5;
    function At(e) {
      return (Date.now() - e) / $t;
    }
    const Ct = (e, t, n) => n.indexOf(e) == t,
      Dt = (e, t) => {
        const n = [];
        if (t.followingLessThan) {
          if (B(e) < t.followingLessThan) return !0;
          n.push(`${B(e)} Following`);
        }
        if (t.followingGreaterThan) {
          if (B(e) > t.followingGreaterThan) return !0;
          n.push(`${B(e)} Following`);
        }
        if (t.followersLessThan) {
          if (P(e) < t.followersLessThan) return !0;
          n.push(`${P(e)} Followers`);
        }
        if (t.followersGreaterThan) {
          if (P(e) > t.followersGreaterThan) return !0;
          n.push(`${P(e)} Followers`);
        }
        return 0 === n.length || n.filter(Ct).join(", ");
      };
    async function Pt(e, t) {
      if (
        (function (e) {
          return Object(j.a)(e, "following");
        })(e)
      ) {
        if (t.unfollowSkipFollower && q(e)) return "is following you";
        if (t.unfollowSkipVerified && N(e)) return "is verified";
        if (vt(e, t.blacklist)) return "is blacklisted";
        if (t.bioBlacklist instanceof RegExp) {
          const n = H(e).match(t.bioBlacklist);
          if (n) return `${n.join()} found in bio, but is blacklisted`;
        }
        if (t.unfollowMassFollowedRequired || t.minDaysFollowed) {
          const n = await rt(e),
            i = await st(e);
          if (t.unfollowMassFollowedRequired && !n && !i)
            return "has not been mass followed";
          if (t.minDaysFollowed && n) {
            const e = At(n.createdAt);
            if (e < t.minDaysFollowed)
              return `${e.toFixed(2)} days followed, but ${
                t.minDaysFollowed
              } days minimum required`;
          }
          if (t.minDaysFollowed && i) {
            const e = At(i.createdAt);
            if (e < t.minDaysFollowed)
              return `${e} days followed, but ${t.minDaysFollowed} days minimum required`;
          }
        }
        return Dt(e, t);
      }
    }
    var qt = n(11);
    const Ut = async () => {
      const e = await qt.a.all();
      return (
        (e.blacklist = xt(e.unfollowBlacklist)),
        (e.bioBlacklist = lt(e.unfollowBioBlacklist)),
        (e.followingLessThan = parseInt(e.unfollowFollowingLessThan)),
        (e.followingGreaterThan = parseInt(e.unfollowFollowingGreaterThan)),
        (e.followersLessThan = parseInt(e.unfollowFollowersLessThan)),
        (e.followersGreaterThan = parseInt(e.unfollowFollowersGreaterThan)),
        (e.intervalDurationRange = Ve(
          e.unfollowIntervalMin,
          e.unfollowIntervalMax
        )),
        (e.minDaysFollowed = parseFloat(e.unfollowMinDaysFollowed)),
        e.unfollowPauseAfterSkipMin &&
          e.unfollowPauseAfterSkipMax &&
          (e.pauseAfterSkipRange = Ve(
            e.unfollowPauseAfterSkipMin,
            e.unfollowPauseAfterSkipMax
          )),
        e
      );
    };
    async function Bt(e, t) {
      const n = await Ut();
      await An(),
        n.unfollowLimit && Wn(n.unfollowLimit),
        e && Wn(e),
        t && Dn(t),
        await Fe(async (e) => {
          tt(ye(e));
          const t = await Pt(e, n);
          if (1 == t) {
            const t = (function (e) {
              const t = `[data-testid="${e.id_str}-unfollow"]`;
              return (
                console.log(
                  `Querying unfollow button of ${e.screen_name} with ${t}`
                ),
                document.querySelector(t)
              );
            })(e);
            if (!t) return et("unfollow button not found");
            t.click(),
              document
                .querySelector('div[data-testid="confirmationSheetConfirm"]')
                .click(),
              Nn(),
              Ze("successfully unfollowed");
            const i = Qe(n.intervalDurationRange);
            await Pn(i);
          } else if ((t && et(t), n.pauseAfterSkipRange)) {
            const e = Qe(n.pauseAfterSkipRange);
            await Pn(e);
          }
        });
    }
    const Wt = document.createElement("div");
    (Wt.innerText = "Unfollow all"),
      Wt.setAttribute("role", "button"),
      Wt.classList.add("sft-button", "sft-button--unfollow");
    const Gt = () => {
      Wt.style.display = "none";
    };
    async function Nt(e, t) {
      if (J(e)) {
        if (t.unlikeMassLikedRequired || t.minDaysSinceLike) {
          const n = await (function (e) {
            return Be(We, [Object(F.a)(), K(e)]);
          })(e);
          if (t.unlikeMassLikedRequired && !n) return "has not been mass liked";
          if (t.minDaysSinceLike && n) {
            const e = At(n.createdAt);
            if (e < t.minDaysSinceLike)
              return `${e.toFixed(2)} days since like, but ${
                t.minDaysSinceLike
              } minimum required`;
          }
        }
        return !0;
      }
    }
    Wt.addEventListener("click", async () => {
      y(), Gt(), await Bt();
    });
    var Ht = n(12);
    const Xt = async () => {
      const e = await Object(Ht.a)();
      return (
        (e.intervalDurationRange = Ve(
          e.unlikeIntervalMin,
          e.unlikeIntervalMax
        )),
        (e.minDaysSinceLike = parseFloat(e.unlikeMinDaysSinceLike)),
        e
      );
    };
    async function Kt(e, t) {
      const n = await Xt();
      await An(),
        n.unlikeLimit && Wn(n.unlikeLimit),
        e && Wn(e),
        t && Dn(t),
        await de(async (e) => {
          const t = await Nt(e, n);
          if (1 == t) {
            const t = (function (e) {
              return e.focusableEl
                .closest('[data-testid="tweet"]')
                .querySelector('[data-testid="unlike"]');
            })(e);
            if (!t) return !1;
            t.click(), Nn(), it(e, "successfully unliked");
            const i = Qe(n.intervalDurationRange);
            await Pn(i);
          } else t && (nt(e, t), await Pn(500));
        });
    }
    const Vt = document.createElement("div");
    (Vt.innerText = "Unlike all"),
      Vt.setAttribute("role", "button"),
      Vt.classList.add("sft-button", "sft-button--unlike");
    const Qt = () => {
      Vt.style.display = "none";
    };
    async function Jt(e, t) {
      if (ee(e)) {
        if (t.minDaysSinceRetweet) {
          const n = At(
            (function (e) {
              const t = Object(j.a)(e, "created_at");
              return Date.parse(t);
            })(e)
          );
          if (n < t.minDaysSinceRetweet)
            return `${n.toFixed(2)} days since retweet, but ${
              t.minDaysSinceRetweet
            } minimum required`;
        }
        if (t.unretweetMassRetweetedRequired) {
          if (
            !(await (function (e) {
              const t = te(e);
              return Be(mt, [Object(F.a)(), t]);
            })(e))
          )
            return "has not been mass retweeted";
        }
        return !0;
      }
    }
    Vt.addEventListener("click", async () => {
      _(), Qt(), await Kt();
    });
    var Yt = n(13);
    const zt = () =>
        document.querySelector('div[data-testid="unretweetConfirm"]'),
      Zt = async () => {
        const e = await Object(Yt.a)();
        return (
          (e.intervalDurationRange = Ve(
            e.unretweetIntervalMin,
            e.unretweetIntervalMax
          )),
          (e.minDaysSinceRetweet = parseFloat(e.unretweetMinDaysSinceRetweet)),
          e
        );
      };
    async function en(e, t) {
      const n = await Zt();
      await An(),
        n.unretweetLimit && Wn(n.unretweetLimit),
        e && Wn(e),
        t && Dn(t),
        await $e(async (e) => {
          const t = await Jt(e, n);
          if (1 == t) {
            const t = (function (e) {
              return e.focusableEl
                .closest('[data-testid="tweet"]')
                .querySelector('[data-testid="unretweet"]');
            })(e);
            if (!t) return !1;
            t.click(),
              (await M(() => zt())).click(),
              Nn(),
              it(e, "successfully unretweeted");
            const i = Qe(n.intervalDurationRange);
            await Pn(i);
          } else t && (nt(e, t), await Pn(500));
        });
    }
    const tn = document.createElement("div");
    (tn.innerText = "Unretweet all"),
      tn.setAttribute("role", "button"),
      tn.classList.add("sft-button", "sft-button--unretweet");
    const nn = () => {
      tn.style.display = "none";
    };
    tn.addEventListener("click", async () => {
      k(), nn(), await en();
    });
    const on = document.createElement("aside");
    on.setAttribute("role", "complementary"),
      on.classList.add("sft-panel"),
      document.body.appendChild(on);
    const an = () => {
        on.style.display = "none";
      },
      rn = () => {
        on.style.display = "flex";
      };
    function sn() {
      Mn ||
        (De(),
        (he() && !x()) || (Re() && !L()) || we()
          ? (Mt.style.display = "initial")
          : It(),
        Re() || (Ie() && !R()) || (we() && !v()) || Oe()
          ? (dt.style.display = "initial")
          : pt(),
        Ft(),
        he() && x() ? (Wt.style.display = "initial") : Gt(),
        we() && v() ? (Vt.style.display = "initial") : Qt(),
        Ie() && R() ? (tn.style.display = "initial") : nn(),
        "initial" == Ae.style.display ||
        "initial" == Mt.style.display ||
        "initial" == dt.style.display ||
        "initial" == _t.style.display ||
        "initial" == Wt.style.display ||
        "initial" == Vt.style.display ||
        "initial" == tn.style.display
          ? ((ln.style.display = "none"),
            on.classList.toggle(
              "sft-panel--search-page",
              "/search" == location.pathname
            ),
            rn())
          : an());
    }
    const ln = document.createElement("div");
    ln.classList.add("sft-status-bar");
    const cn = document.createElement("div");
    (cn.innerText = "Skip"),
      cn.setAttribute("role", "button"),
      cn.classList.add("sft-status-bar__button"),
      ln.append(cn),
      cn.addEventListener("click", async () => {
        (cn.style.display = "none"), await wi();
      });
    const un = document.createElement("div");
    (un.innerText = "Cancel"),
      un.setAttribute("role", "button"),
      un.classList.add("sft-status-bar__button"),
      ln.append(un),
      un.addEventListener("click", () => {
        $n(), ci(), an(), f();
      });
    const fn = document.createElement("div");
    function wn() {
      (un.style.display = "initial"),
        (fn.style.display = "none"),
        (cn.style.display = "none"),
        (function () {
          switch (p) {
            case "follow":
              d.textContent = `Twitter follow limit exceeded. Continuing in ${w(
                In
              )} ...`;
              break;
            case "like":
              d.textContent = `Unable to like. Continuing in ${w(In)} ...`;
              break;
            case "retweet":
              d.textContent = `Unable to retweet. Continuing in ${w(In)} ...`;
          }
        })();
    }
    function dn(e) {
      (un.style.display = "initial"),
        (fn.style.display = "none"),
        (cn.style.display = "none"),
        (function (e) {
          d.textContent = `Repeating autopilot in ${w(e)} ...`;
        })(e);
    }
    function pn(e) {
      (un.style.display = "initial"),
        (fn.style.display = "none"),
        (cn.style.display = "none"),
        h(e);
    }
    function mn(e, t) {
      (un.style.display = "initial"),
        (fn.style.display = "none"),
        (cn.style.display = "initial"),
        (function (e, t) {
          d.textContent = `Autopilot ${e}/${t} ...`;
        })(e, t);
    }
    function yn() {
      (un.style.display = "none"),
        (fn.style.display = "initial"),
        (cn.style.display = "none"),
        (function () {
          switch (p) {
            case "follow":
              d.textContent = `Successfully followed ${Fn} users`;
              break;
            case "unfollow":
              d.textContent = `Successfully unfollowed ${Fn} users`;
              break;
            case "like":
              d.textContent = `Successfully liked ${Fn} Tweets`;
              break;
            case "retweet":
              d.textContent = `Successfully retweeted ${Fn} Tweets`;
              break;
            case "unretweet":
              d.textContent = `Successfully unretweeted ${Fn} Tweets`;
              break;
            case "unlike":
              d.textContent = `Successfully unliked ${Fn} Tweets`;
          }
        })();
    }
    function bn() {
      (un.style.display = "none"),
        (fn.style.display = "initial"),
        (cn.style.display = "none"),
        (d.textContent = `You have reached the daily limit of ${vn}`),
        console.log(d.textContent);
    }
    function gn() {
      (un.style.display = "initial"),
        (fn.style.display = "none"),
        (cn.style.display = mi() ? "initial" : "none"),
        (function () {
          const e = Rn ? `${Fn}/${Rn}` : Fn;
          switch (p) {
            case "follow":
              d.textContent = `Following ${e} ...`;
              break;
            case "unfollow":
              d.textContent = `Unfollowing ${e} ...`;
              break;
            case "like":
              d.textContent = `Liking ${e} ...`;
              break;
            case "retweet":
              d.textContent = `Retweeting ${e} ...`;
              break;
            case "unretweet":
              d.textContent = `Unretweeting ${e} ...`;
              break;
            case "unlike":
              d.textContent = `Unliking ${e} ...`;
          }
        })();
    }
    function kn() {
      (ln.style.display = "flex"), It(), pt(), ht(), Gt();
    }
    (fn.innerText = "Close"),
      fn.setAttribute("role", "button"),
      fn.classList.add("sft-status-bar__button"),
      ln.append(fn),
      fn.addEventListener("click", () => an());
    var _n = n(5);
    // Unfollow / follow Limit
    const hn = 200;
    let Fn,
      xn,
      vn,
      Rn,
      Ln,
      Sn,
      jn,
      On,
      Tn,
      En,
      Mn = !1,
      In = !1;
    function $n() {
      Mn = !0;
    }
    async function An() {
      (Fn = 0),
        (Ln = void 0),
        (vn = void 0),
        (In = !1),
        (xn = location.href),
        (Sn = void 0),
        (jn = void 0),
        (Tn = void 0);
      const e = await Object(_n.a)();
      (On = Object(_n.b)(e)) ||
        ((Rn = hn),
        (u.innerHTML = s(l, 3)
          .map((e) => c(e))
          .join("")),
        (u.style.display = "flex")),
        gn(),
        kn();
    }
    const Cn = () => {
      jn = Sn ? Date.now() + Sn : void 0;
    };
    function Dn(e) {
      (Sn = 1e3 * parseFloat(e)), Cn();
    }
    async function Pn(e) {
      jn && (jn += e), await i(e);
    }
    function qn() {
      jn &&
        jn <= Date.now() &&
        (console.log("Idle timeout"), (jn = void 0), (Mn = !0));
    }
    function Un(e) {
      En = 60 * parseFloat(e);
    }
    function Bn() {
      In = En;
      const e = setInterval(() => {
        (In -= 1), wn(), (In <= 0 || Mn) && (clearInterval(e), (In = !1));
      }, 1e3);
    }
    function Wn(e) {
      On ? (Rn = e) : Rn && e < Rn && (Rn = e), gn();
    }
    function Gn(e) {
      Tn = e;
    }
    function Nn() {
      (Fn += 1),
        Rn && Rn <= Fn
          ? ((Mn = !0), yn())
          : vn && Fn + Ln >= vn
          ? ((Mn = !0), r(), bn())
          : gn(),
        Cn();
    }
    function Hn() {
      return location.href == xn || location.pathname == Tn || ((Mn = !1), !1);
    }
    function Xn() {
      return location.href == xn;
    }
    var Kn = n(6);
    const Vn = (e) => {
        switch (e.type) {
          case "mass_follow":
          case "mass_like":
          case "mass_retweet":
            return e.url;
          case "mass_unfollow":
          case "mass_unlike":
          case "mass_unretweet":
            return !0;
          default:
            return !1;
        }
      },
      Qn = async () => {
        const e = await Object(Kn.a)();
        return Array.isArray(e) ? e.filter(Vn) : [];
      };
    async function Jn() {
      return (await Qn())[0];
    }
    const Yn = (e) => `https://www.twitter.com${e}`;
    const zn = "SuperpowersForTwitterAutopilotActionId";
    async function Zn() {
      const e = sessionStorage.getItem(zn);
      if ("string" == typeof e)
        return (
          sessionStorage.removeItem(zn),
          await (async function (e) {
            return (await Qn()).find((t) => t.id === e);
          })(e)
        );
    }
    function ei(e) {
      switch ((sessionStorage.setItem(zn, e.id), e.type)) {
        case "mass_follow":
        case "mass_like":
        case "mass_retweet":
          location.href = e.url;
          break;
        case "mass_unfollow":
          location.href = ((t = Object(F.b)()), Yn(`/${t}/following`));
          break;
        case "mass_unlike":
          location.href = (function (e) {
            return Yn(`/${e}/likes`);
          })(Object(F.b)());
          break;
        case "mass_unretweet":
          location.href = (function (e) {
            return Yn(`/${e}`);
          })(Object(F.b)());
      }
      var t;
    }
    const ti = 2;
    async function ni() {
      const e = await (async function () {
        return (await Qn()).length;
      })();
      if (e <= ti) return e;
      const t = await Object(_n.a)();
      return Object(_n.b)(t) ? e : ti;
    }
    const ii = async (e, t) => {
      try {
        return await M(() => (t && console.log(t), e()), 9e3);
      } catch (e) {
        return console.log(e), console.log("Skipping action ..."), void wi();
      }
    };
    var oi = n(7);
    let ai,
      ri,
      si = !1;
    const li = async () => {
        sessionStorage.removeItem(o), (ai = await Jn()), (si = !1);
        const e = await ni();
        mn(ai.number, e), rn(), kn(), ei(ai);
      },
      ci = () => {
        si = !0;
      },
      ui = async () => {
        const e = await Object(oi.a)();
        if (!e.autopilotRepeatAfter) return void ci();
        const t = await Object(_n.a)();
        if (!Object(_n.b)(t)) return void ci();
        let n = ((e, t) => {
          let n = 60 * parseFloat(e);
          const i = 60 * parseFloat(t),
            o = [n];
          for (; n < i; ) (n += 60), o.push(n);
          return Ke(o);
        })(e.autopilotRepeatAfter, e.autopilotRepeatAfterMax);
        dn(n);
        const i = setInterval(() => {
          si
            ? clearInterval(i)
            : (dn((n -= 1)), n <= 0 && (clearInterval(i), li()));
        }, 1e3);
      },
      fi = async (e) => {
        const t = await (async function (e) {
          const t = await Qn(),
            n = a(),
            i = t.filter((t) => t.id == e || !n.includes(t.type)),
            o = i.map((e) => e.id).indexOf(e);
          if (-1 !== o) return i[o + 1];
        })(ai.id);
        if (t && t.number <= e) {
          if (
            (await (async () => {
              const {
                autopilotPauseAfterActionMin: e,
                autopilotPauseAfterActionMax: t,
              } = await Object(oi.a)();
              if (!e) return;
              if (!t) return;
              let n = Qe(Ve(e, t));
              for (; n > 0; ) {
                if (si) return;
                pn(n), (n -= 100), await i(100);
              }
            })(),
            si)
          )
            return;
          mn(t.number, e), ei(t);
        } else await ui();
      };
    async function wi() {
      (ri = !0), $n();
      const e = await ni();
      fi(e);
    }
    async function di() {
      if ((ai = await Zn())) {
        ri = !1;
        const e = await ni();
        if (
          (mn(ai.number, e),
          rn(),
          kn(),
          await (async function (e) {
            switch (e.type) {
              case "mass_follow":
                if (
                  (await ii(
                    () => Re() || he() || we(),
                    "Find Tweets, users or likes ..."
                  ),
                  !mi())
                )
                  return;
                if (pi()) return;
                m(), await Et(e.limit, e.idleTimeout);
                break;
              case "mass_like":
                if (
                  (await ii(
                    () => Re() || we() || Ie() || Oe(),
                    "Find Tweets or likes ..."
                  ),
                  !mi())
                )
                  return;
                if (pi()) return;
                b(), await wt(e.limit, e.idleTimeout);
                break;
              case "mass_retweet":
                if ((await ii(() => Re() || Ie(), "Find Tweets ..."), !mi()))
                  return;
                if (pi()) return;
                g(), await kt(e.limit, e.idleTimeout);
                break;
              case "mass_unfollow":
                if ((await ii(() => he() && x(), "Find users ..."), !mi()))
                  return;
                if (pi()) return;
                y(), await Bt(e.limit, e.idleTimeout);
                break;
              case "mass_unlike":
                if ((await ii(() => we() && v(), "Find likes ..."), !mi()))
                  return;
                if (pi()) return;
                _(), await Kt(e.limit, e.idleTimeout);
                break;
              case "mass_unretweet":
                if ((await ii(() => Ie() && R(), "Find Tweets ..."), !mi()))
                  return;
                if (pi()) return;
                k(), await en(e.limit, e.idleTimeout);
            }
          })(ai),
          si)
        )
          return;
        if (ri) return;
        await fi(e);
      }
    }
    function pi() {
      return !0 === ri;
    }
    function mi() {
      return "object" == typeof ai && !1 === si;
    }
    const yi = (e) => {
      if ("object" != typeof e) return;
      const t = e.errors;
      if (!Array.isArray(t)) return;
      const n = t[0];
      return "object" == typeof n ? 162 === n.code : void 0;
    };
    ln.prepend(d),
      on.append(ln, Ae, Mt, Wt, _t, dt, tn, Vt),
      ce(
        "friendships/create.json",
        ({ body: e, parsedResponse: t, status: n }) => {
          200 != n &&
            (at(e.match(/&user_id=(\d+)/)[1]),
            yi(t) || (Bn(), mi() ? (r(), $n()) : Bn()));
        }
      ),
      ce("favorites/create.json", ({ status: e }) => {
        200 != e && (mi() ? (r(), $n()) : Bn());
      }),
      ce("statuses/retweet.json", ({ status: e }) => {
        200 != e && (mi() ? (r(), $n()) : Bn());
      });
    (async () => {
      await di(),
        setInterval(async () => {
          mi() || Hn() || (await sn(), f());
        }, 200);
    })();
  },
]);
