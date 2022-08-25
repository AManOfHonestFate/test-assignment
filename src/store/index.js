import { createStore } from "vuex";

export default createStore({
  state: {
    items: [
      {id: 1, price: 10120, title: "First item",
        body: "Item description item description. Item description item description. Item description item description.",
        url: "https://s3-alpha-sig.figma.com/img/488b/7f1f/e88ef4c6003a678c0c9d6a1b91606ae9?Expires=1662336000&Signature=D3x~qQrD~vwui5nUzCoz6~hnllGgxHqoXsPtis-rrgLeXWM1jeUmrMZSBw5VqebNfkxK-uwghN2j9ZzqynFgOu0QpkH-Mu4mSMwA3FAWQiveLP4s30VVYG-S-BTss4XJePA15qltgTMYdzehXurluTelv3uXnSezId-b7~bCVTY-7sOEi~IIoxYm-h2wFKSbOZQ~ZoUL9fXAELc1tx3kK3YLKamOc6O3213QGoaDcZjvrKcIiqyS7r~MPBDkZC3bO3N0RAOIOHTDMpneLwDzOWwu5zhk~4gQPga1y38u7l1a41aNLbtXEbXd~jjFlhx76TG0B0z80Wf7FKeOBeWREg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      },
      {id: 2, price: 100120, title: "Second item",
        body: "Item description item description. Item description item description. Item description item description.",
        url: "https://s3-alpha-sig.figma.com/img/488b/7f1f/e88ef4c6003a678c0c9d6a1b91606ae9?Expires=1662336000&Signature=D3x~qQrD~vwui5nUzCoz6~hnllGgxHqoXsPtis-rrgLeXWM1jeUmrMZSBw5VqebNfkxK-uwghN2j9ZzqynFgOu0QpkH-Mu4mSMwA3FAWQiveLP4s30VVYG-S-BTss4XJePA15qltgTMYdzehXurluTelv3uXnSezId-b7~bCVTY-7sOEi~IIoxYm-h2wFKSbOZQ~ZoUL9fXAELc1tx3kK3YLKamOc6O3213QGoaDcZjvrKcIiqyS7r~MPBDkZC3bO3N0RAOIOHTDMpneLwDzOWwu5zhk~4gQPga1y38u7l1a41aNLbtXEbXd~jjFlhx76TG0B0z80Wf7FKeOBeWREg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      },
      {id: 3, price: 2050, title: "Third item",
        body: "Item description item description. Item description item description. Item description item description.",
        url: "https://s3-alpha-sig.figma.com/img/488b/7f1f/e88ef4c6003a678c0c9d6a1b91606ae9?Expires=1662336000&Signature=D3x~qQrD~vwui5nUzCoz6~hnllGgxHqoXsPtis-rrgLeXWM1jeUmrMZSBw5VqebNfkxK-uwghN2j9ZzqynFgOu0QpkH-Mu4mSMwA3FAWQiveLP4s30VVYG-S-BTss4XJePA15qltgTMYdzehXurluTelv3uXnSezId-b7~bCVTY-7sOEi~IIoxYm-h2wFKSbOZQ~ZoUL9fXAELc1tx3kK3YLKamOc6O3213QGoaDcZjvrKcIiqyS7r~MPBDkZC3bO3N0RAOIOHTDMpneLwDzOWwu5zhk~4gQPga1y38u7l1a41aNLbtXEbXd~jjFlhx76TG0B0z80Wf7FKeOBeWREg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      },
      {id: 4, price: 40120, title: "Fourth item",
        body: "Item description item description. Item description item description. Item description item description.",
        url: "https://s3-alpha-sig.figma.com/img/488b/7f1f/e88ef4c6003a678c0c9d6a1b91606ae9?Expires=1662336000&Signature=D3x~qQrD~vwui5nUzCoz6~hnllGgxHqoXsPtis-rrgLeXWM1jeUmrMZSBw5VqebNfkxK-uwghN2j9ZzqynFgOu0QpkH-Mu4mSMwA3FAWQiveLP4s30VVYG-S-BTss4XJePA15qltgTMYdzehXurluTelv3uXnSezId-b7~bCVTY-7sOEi~IIoxYm-h2wFKSbOZQ~ZoUL9fXAELc1tx3kK3YLKamOc6O3213QGoaDcZjvrKcIiqyS7r~MPBDkZC3bO3N0RAOIOHTDMpneLwDzOWwu5zhk~4gQPga1y38u7l1a41aNLbtXEbXd~jjFlhx76TG0B0z80Wf7FKeOBeWREg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"

      },
    ],
  },
  getters: {},
  mutations: {
    addNewItem(state, newItem) {
      state.items.push(newItem);
    },
    removeItem(state, id) {
      state.items = state.items.filter(item => item.id !== id);
    }
  },
  actions: {},
  modules: {},
});
