import { defineComponent as f, computed as B, openBlock as l, createElementBlock as d, normalizeClass as o, createElementVNode as C, unref as y, withKeys as s, toDisplayString as b, createCommentVNode as k } from "vue";
const h = ["type", "disabled", "onKeyup"], K = { key: 0 }, v = ["type", "disabled", "onKeyup"], m = { key: 0 }, x = /* @__PURE__ */ f({
  __name: "Button",
  props: {
    wrapClass: { default: void 0 },
    wrapMode: { type: Boolean },
    size: { default: void 0 },
    color: { default: void 0 },
    type: { default: "button" },
    disabled: { type: Boolean },
    auto: { type: Boolean },
    label: { default: void 0 },
    noneStyle: { type: Boolean },
    isPending: { type: Boolean },
    onClick: { type: Function, default: void 0 },
    onKeyup: { type: Function, default: void 0 }
  },
  setup(e) {
    const t = e, i = (a) => {
      var n;
      (n = t.onClick) == null || n.call(t, a);
    }, u = (a) => {
      var n;
      (n = t.onKeyup) == null || n.call(t, a);
    }, c = B(() => t.disabled || t.isPending);
    return (a, n) => e.wrapMode ? (l(), d("div", {
      key: 0,
      class: o(["btn_wrap", e.wrapClass]),
      tabindex: "0"
    }, [
      C("button", {
        type: e.type,
        class: o(e.noneStyle ? "" : ["btnBasic", e.size, e.color, { disabled: e.disabled }, { auto: e.auto }]),
        disabled: y(c),
        onClick: i,
        onKeyup: s(u, ["enter"])
      }, [
        e.label ? (l(), d("span", K, b(e.label), 1)) : k("", !0)
      ], 42, h)
    ], 2)) : (l(), d("button", {
      key: 1,
      type: e.type,
      class: o(e.noneStyle ? "" : ["btnBasic", e.size, e.color, { disabled: e.disabled }, { auto: e.auto }]),
      disabled: y(c),
      onClick: i,
      onKeyup: s(u, ["enter"])
    }, [
      e.label ? (l(), d("span", m, b(e.label), 1)) : k("", !0)
    ], 42, v));
  }
}), w = ["type", "disabled", "onKeyup"], r = { key: 0 }, z = ["type", "disabled", "onKeyup"], S = { key: 0 }, $ = /* @__PURE__ */ f({
  __name: "Header",
  props: {
    wrapClass: { default: void 0 },
    wrapMode: { type: Boolean },
    size: { default: void 0 },
    color: { default: void 0 },
    type: { default: "button" },
    disabled: { type: Boolean },
    auto: { type: Boolean },
    label: { default: void 0 },
    noneStyle: { type: Boolean },
    isPending: { type: Boolean },
    onClick: { type: Function, default: void 0 },
    onKeyup: { type: Function, default: void 0 }
  },
  setup(e) {
    const t = e, i = (a) => {
      var n;
      (n = t.onClick) == null || n.call(t, a);
    }, u = (a) => {
      var n;
      (n = t.onKeyup) == null || n.call(t, a);
    }, c = B(() => t.disabled || t.isPending);
    return (a, n) => e.wrapMode ? (l(), d("div", {
      key: 0,
      class: o(["btn_wrap", e.wrapClass]),
      tabindex: "0"
    }, [
      C("button", {
        type: e.type,
        class: o(e.noneStyle ? "" : ["btnBasic", e.size, e.color, { disabled: e.disabled }, { auto: e.auto }]),
        disabled: y(c),
        onClick: i,
        onKeyup: s(u, ["enter"])
      }, [
        e.label ? (l(), d("span", r, b(e.label), 1)) : k("", !0)
      ], 42, w)
    ], 2)) : (l(), d("button", {
      key: 1,
      type: e.type,
      class: o(e.noneStyle ? "" : ["btnBasic", e.size, e.color, { disabled: e.disabled }, { auto: e.auto }]),
      disabled: y(c),
      onClick: i,
      onKeyup: s(u, ["enter"])
    }, [
      e.label ? (l(), d("span", S, b(e.label), 1)) : k("", !0)
    ], 42, z));
  }
});
export {
  x as Button,
  $ as Header
};
