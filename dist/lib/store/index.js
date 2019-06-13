"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_state_tree_1 = require("mobx-state-tree");
let store = null;
const Store = mobx_state_tree_1.types.model({});
exports.initStore = (isServer, snapshot = null) => {
    if (isServer) {
        store = Store.create();
    }
    if (store === null) {
        store = Store.create();
    }
    if (snapshot) {
        mobx_state_tree_1.applySnapshot(store, snapshot);
    }
    return store;
};
//# sourceMappingURL=index.js.map