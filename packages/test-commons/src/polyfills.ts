/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

/**
 * Require the minimal set of ES2015+ polyfills from `core-js` library.
 * See "NPM Installation" section of docs homepage for more information.
 */
export function applyPolyfills() {
    require("core-js/fn/array/from");
    require("core-js/fn/map");
    require("core-js/fn/set");
}
