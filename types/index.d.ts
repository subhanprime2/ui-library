declare function getDefaultExportFromCjs(x: any): any;
declare var react: {
    exports: {};
};
declare var react_development: {
    exports: {};
};
declare var hasRequiredReact_development: any;
declare function requireReact_development(): {};
declare var react_production_min: {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare var hasRequiredReact_production_min: any;
declare function requireReact_production_min(): {};
declare var reactExports: {};
declare var React: any;
/**
 * @license lucide-react v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
declare var defaultAttributes: {
    xmlns: string;
    width: number;
    height: number;
    viewBox: string;
    fill: string;
    stroke: string;
    strokeWidth: number;
    strokeLinecap: string;
    strokeLinejoin: string;
};
/**
 * @license lucide-react v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
declare const toKebabCase: (string: any) => any;
declare const createLucideIcon: (iconName: any, iconNode: any) => any;
/**
 * @license lucide-react v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
declare const ArrowLeft: any;
/**
 * @license lucide-react v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
declare const Plus: any;
/**
 * @license lucide-react v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
declare const SearchSlash: any;
/**
 * @license lucide-react v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
declare const Search: any;
/**
 * @license lucide-react v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
declare const X: any;
/**
 * @public
 */
declare const MotionConfigContext: any;
declare const MotionContext: any;
/**
 * @public
 */
declare const PresenceContext: any;
declare const isBrowser: boolean;
declare const useIsomorphicLayoutEffect: any;
declare const LazyContext: any;
/**
 * Convert camelCase to dash-case properties.
 */
declare const camelToDash: (str: any) => any;
declare const optimizedAppearDataId = "framerAppearId";
declare const optimizedAppearDataAttribute: string;
declare function useVisualElement(Component: any, visualState: any, props: any, createVisualElement: any): any;
declare function isRefObject(ref: any): boolean;
/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
declare function useMotionRef(visualState: any, visualElement: any, externalRef: any): any;
/**
 * Decides if the supplied variable is variant label
 */
declare function isVariantLabel(v: any): boolean;
declare function isAnimationControls(v: any): boolean;
declare const variantPriorityOrder: string[];
declare const variantProps: string[];
declare function isControllingVariants(props: any): boolean;
declare function isVariantNode(props: any): boolean;
declare function getCurrentTreeVariants(props: any, context: any): any;
declare function useCreateMotionContext(props: any): any;
declare function variantLabelsAsDependency(prop: any): any;
declare const featureProps: {
    animation: string[];
    exit: string[];
    drag: string[];
    focus: string[];
    hover: string[];
    tap: string[];
    pan: string[];
    inView: string[];
    layout: string[];
};
declare const featureDefinitions: {};
declare function loadFeatures(features: any): void;
declare const LayoutGroupContext: any;
/**
 * Internal, exported only for usage in Framer
 */
declare const SwitchLayoutGroupContext: any;
declare const motionComponentSymbol: unique symbol;
/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */
declare function createMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState, Component, }: {
    preloadedFeatures: any;
    createVisualElement: any;
    useRender: any;
    useVisualState: any;
    Component: any;
}): any;
declare function useLayoutId({ layoutId }: {
    layoutId: any;
}): any;
/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
declare function createMotionProxy(createConfig: any): (Component: any, customMotionComponentConfig?: {}) => any;
/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
declare const lowercaseSVGElements: string[];
declare function isSVGComponent(Component: any): boolean;
declare const scaleCorrectors: {};
declare function addScaleCorrector(correctors: any): void;
/**
 * Generate a list of every possible transform key.
 */
declare const transformPropOrder: string[];
/**
 * A quick lookup for transform props.
 */
declare const transformProps: Set<string>;
declare function isForcedMotionValue(key: any, { layout, layoutId }: {
    layout: any;
    layoutId: any;
}): any;
declare const isMotionValue: (value: any) => boolean;
declare const translateAlias: {
    x: string;
    y: string;
    z: string;
    transformPerspective: string;
};
declare const numTransforms: number;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
declare function buildTransform(transform: any, { enableHardwareAcceleration, allowTransformNone, }: {
    enableHardwareAcceleration?: boolean | undefined;
    allowTransformNone?: boolean | undefined;
}, transformIsDefault: any, transformTemplate: any): string;
declare const checkStringStartsWith: (token: any) => (key: any) => boolean;
declare const isCSSVariableName: (key: any) => boolean;
declare const isCSSVariableToken: (key: any) => boolean;
declare const cssVariableRegex: RegExp;
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
declare const getValueAsType: (value: any, type: any) => any;
declare const clamp: (min: any, max: any, v: any) => number;
declare const number: {
    test: (v: any) => boolean;
    parse: typeof parseFloat;
    transform: (v: any) => any;
};
declare const alpha: {
    transform: (v: any) => number;
    test: (v: any) => boolean;
    parse: typeof parseFloat;
};
declare const scale: {
    default: number;
    test: (v: any) => boolean;
    parse: typeof parseFloat;
    transform: (v: any) => any;
};
/**
 * TODO: When we move from string as a source of truth to data models
 * everything in this folder should probably be referred to as models vs types
 */
declare const sanitize: (v: any) => number;
declare const floatRegex: RegExp;
declare const colorRegex: RegExp;
declare const singleColorRegex: RegExp;
declare function isString(v: any): boolean;
declare const createUnitType: (unit: any) => {
    test: (v: any) => any;
    parse: typeof parseFloat;
    transform: (v: any) => string;
};
declare const degrees: {
    test: (v: any) => any;
    parse: typeof parseFloat;
    transform: (v: any) => string;
};
declare const percent: {
    test: (v: any) => any;
    parse: typeof parseFloat;
    transform: (v: any) => string;
};
declare const px: {
    test: (v: any) => any;
    parse: typeof parseFloat;
    transform: (v: any) => string;
};
declare const vh: {
    test: (v: any) => any;
    parse: typeof parseFloat;
    transform: (v: any) => string;
};
declare const vw: {
    test: (v: any) => any;
    parse: typeof parseFloat;
    transform: (v: any) => string;
};
declare const progressPercentage: {
    parse: (v: any) => number;
    transform: (v: any) => string;
    test: (v: any) => any;
};
declare const int: {
    transform: (x: number) => number;
    test: (v: any) => boolean;
    parse: typeof parseFloat;
};
declare const numberValueTypes: {
    borderWidth: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderTopWidth: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderRightWidth: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderBottomWidth: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderLeftWidth: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderRadius: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    radius: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderTopLeftRadius: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderTopRightRadius: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderBottomRightRadius: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderBottomLeftRadius: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    width: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    maxWidth: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    height: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    maxHeight: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    size: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    top: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    right: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    bottom: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    left: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    padding: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    paddingTop: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    paddingRight: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    paddingBottom: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    paddingLeft: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    margin: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    marginTop: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    marginRight: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    marginBottom: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    marginLeft: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    rotate: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    rotateX: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    rotateY: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    rotateZ: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    scale: {
        default: number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
        transform: (v: any) => any;
    };
    scaleX: {
        default: number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
        transform: (v: any) => any;
    };
    scaleY: {
        default: number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
        transform: (v: any) => any;
    };
    scaleZ: {
        default: number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
        transform: (v: any) => any;
    };
    skew: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    skewX: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    skewY: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    distance: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    translateX: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    translateY: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    translateZ: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    x: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    y: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    z: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    perspective: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    transformPerspective: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    opacity: {
        transform: (v: any) => number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
    };
    originX: {
        parse: (v: any) => number;
        transform: (v: any) => string;
        test: (v: any) => any;
    };
    originY: {
        parse: (v: any) => number;
        transform: (v: any) => string;
        test: (v: any) => any;
    };
    originZ: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    zIndex: {
        transform: (x: number) => number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
    };
    fillOpacity: {
        transform: (v: any) => number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
    };
    strokeOpacity: {
        transform: (v: any) => number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
    };
    numOctaves: {
        transform: (x: number) => number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
    };
};
declare function buildHTMLStyles(state: any, latestValues: any, options: any, transformTemplate: any): void;
declare const createHtmlRenderState: () => {
    style: {};
    transform: {};
    transformOrigin: {};
    vars: {};
};
declare function copyRawValuesOnly(target: any, source: any, props: any): void;
declare function useInitialMotionValues({ transformTemplate }: {
    transformTemplate: any;
}, visualState: any, isStatic: any): any;
declare function useStyle(props: any, visualState: any, isStatic: any): any;
declare function useHTMLProps(props: any, visualState: any, isStatic: any): {};
/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
declare const validMotionProps: Set<string>;
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
declare function isValidMotionProp(key: any): any;
declare let shouldForward: (key: any) => boolean;
declare function loadExternalIsValidProp(isValidProp: any): void;
declare function filterProps(props: any, isDom: any, forwardMotionProps: any): {};
declare function calcOrigin$1(origin: any, offset: any, size: any): string;
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
declare function calcSVGTransformOrigin(dimensions: any, originX: any, originY: any): string;
declare const dashKeys: {
    offset: string;
    array: string;
};
declare const camelKeys: {
    offset: string;
    array: string;
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
declare function buildSVGPath(attrs: any, length: any, spacing?: number, offset?: number, useDashCase?: boolean): void;
/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
declare function buildSVGAttrs(state: any, { attrX, attrY, attrScale, originX, originY, pathLength, pathSpacing, pathOffset, ...latest }: {
    [x: string]: any;
    attrX: any;
    attrY: any;
    attrScale: any;
    originX: any;
    originY: any;
    pathLength: any;
    pathSpacing?: number | undefined;
    pathOffset?: number | undefined;
}, options: any, isSVGTag: any, transformTemplate: any): void;
declare const createSvgRenderState: () => {
    attrs: {};
    style: {};
    transform: {};
    transformOrigin: {};
    vars: {};
};
declare const isSVGTag: (tag: any) => boolean;
declare function useSVGProps(props: any, visualState: any, _isStatic: any, Component: any): any;
declare function createUseRender(forwardMotionProps?: boolean): (Component: any, props: any, ref: any, { latestValues }: {
    latestValues: any;
}, isStatic: any) => any;
declare function renderHTML(element: any, { style, vars }: {
    style: any;
    vars: any;
}, styleProp: any, projection: any): void;
/**
 * A set of attribute names that are always read/written as camel case.
 */
declare const camelCaseAttributes: Set<string>;
declare function renderSVG(element: any, renderState: any, _styleProp: any, projection: any): void;
declare function scrapeMotionValuesFromProps$1(props: any, prevProps: any): {};
declare function scrapeMotionValuesFromProps(props: any, prevProps: any): {};
declare function resolveVariantFromProps(props: any, definition: any, custom: any, currentValues?: {}, currentVelocity?: {}): any;
/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
declare function useConstant(init: any): any;
declare const isKeyframesTarget: (v: any) => boolean;
declare const isCustomValue: (v: any) => boolean;
declare const resolveFinalValueInKeyframes: (v: any) => any;
/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */
declare function resolveMotionValue(value: any): any;
declare function makeState({ scrapeMotionValuesFromProps, createRenderState, onMount, }: {
    scrapeMotionValuesFromProps: any;
    createRenderState: any;
    onMount: any;
}, props: any, context: any, presenceContext: any): {
    latestValues: {};
    renderState: any;
};
declare const makeUseVisualState: (config: any) => (props: any, isStatic: any) => any;
declare function makeLatestValues(props: any, context: any, presenceContext: any, scrapeMotionValues: any): {};
declare const noop: (any: any) => any;
declare class Queue {
    constructor();
    add(process: any): true | undefined;
    remove(process: any): void;
    clear(): void;
}
declare function createRenderStep(runNextFrame: any): {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (callback: any, keepAlive?: boolean, immediate?: boolean) => any;
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (callback: any) => void;
    /**
     * Execute all schedule callbacks.
     */
    process: (frameData: any) => void;
};
declare const stepsOrder: string[];
declare const maxElapsed = 40;
declare function createRenderBatcher(scheduleNextBatch: any, allowKeepAlive: any): {
    schedule: {};
    cancel: (process: any) => void;
    state: {
        delta: number;
        timestamp: number;
        isProcessing: boolean;
    };
    steps: {};
};
declare const frame: {}, cancelFrame: (process: any) => void, frameData: {
    delta: number;
    timestamp: number;
    isProcessing: boolean;
}, steps: {};
declare const svgMotionConfig: {
    useVisualState: (props: any, isStatic: any) => any;
};
declare const htmlMotionConfig: {
    useVisualState: (props: any, isStatic: any) => any;
};
declare function createDomMotionConfig(Component: any, { forwardMotionProps }: {
    forwardMotionProps?: boolean | undefined;
}, preloadedFeatures: any, createVisualElement: any): {
    preloadedFeatures: any;
    useRender: (Component: any, props: any, ref: any, { latestValues }: {
        latestValues: any;
    }, isStatic: any) => any;
    createVisualElement: any;
    Component: any;
    useVisualState: (props: any, isStatic: any) => any;
};
declare function addDomEvent(target: any, eventName: any, handler: any, options?: {
    passive: boolean;
}): () => any;
declare const isPrimaryPointer: (event: any) => boolean;
declare function extractEventInfo(event: any, pointType?: string): {
    point: {
        x: any;
        y: any;
    };
};
declare const addPointerInfo: (handler: any) => (event: any) => any;
declare function addPointerEvent(target: any, eventName: any, handler: any, options: any): () => any;
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
declare const combineFunctions: (a: any, b: any) => (v: any) => any;
declare const pipe: (...transformers: any[]) => any;
declare function createLock(name: any): () => false | (() => void);
declare const globalHorizontalLock: () => false | (() => void);
declare const globalVerticalLock: () => false | (() => void);
declare function getGlobalLock(drag: any): boolean;
declare function isDragActive(): boolean;
declare class Feature {
    constructor(node: any);
    update(): void;
}
declare function addHoverEvent(node: any, isActive: any): () => any;
declare class HoverGesture extends Feature {
    mount(): void;
    unmount(): void;
}
declare class FocusGesture extends Feature {
    constructor();
    onFocus(): void;
    onBlur(): void;
    mount(): void;
    unmount(): void;
}
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
declare const isNodeOrChild: (parent: any, child: any) => any;
declare function fireSyntheticPointerEvent(name: any, handler: any): void;
declare class PressGesture extends Feature {
    constructor();
    startPress(event: any, info: any): void;
    checkPressEnd(): boolean;
    cancelPress(event: any, info: any): void;
    mount(): void;
    unmount(): void;
}
/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
declare const observerCallbacks: WeakMap<object, any>;
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
declare const observers: WeakMap<object, any>;
declare const fireObserverCallback: (entry: any) => void;
declare const fireAllObserverCallbacks: (entries: any) => void;
declare function initIntersectionObserver({ root, ...options }: {
    [x: string]: any;
    root: any;
}): any;
declare function observeIntersection(element: any, options: any, callback: any): () => void;
declare const thresholdNames: {
    some: number;
    all: number;
};
declare class InViewFeature extends Feature {
    constructor();
    startObserver(): () => void;
    mount(): void;
    update(): void;
    unmount(): void;
}
declare function hasViewportOptionChanged({ viewport }: {
    viewport?: {} | undefined;
}, { viewport: prevViewport }?: {
    viewport?: {} | undefined;
}): (name: any) => boolean;
declare const gestureAnimations: {
    inView: {
        Feature: typeof InViewFeature;
    };
    tap: {
        Feature: typeof PressGesture;
    };
    focus: {
        Feature: typeof FocusGesture;
    };
    hover: {
        Feature: typeof HoverGesture;
    };
};
declare function shallowCompare(next: any, prev: any): boolean;
/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
declare function getCurrent(visualElement: any): {};
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
declare function getVelocity$1(visualElement: any): {};
declare function resolveVariant(visualElement: any, definition: any, custom: any): any;
declare let warning: (any: any) => any;
declare let invariant: (any: any) => any;
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
declare const secondsToMilliseconds: (seconds: any) => number;
declare const millisecondsToSeconds: (milliseconds: any) => number;
declare const instantAnimationState: {
    current: boolean;
};
declare const isBezierDefinition: (easing: any) => boolean;
declare function isWaapiSupportedEasing(easing: any): any;
declare const cubicBezierAsString: ([a, b, c, d]: [any, any, any, any]) => string;
declare const supportedWaapiEasing: {
    linear: string;
    ease: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
    circIn: string;
    circOut: string;
    backIn: string;
    backOut: string;
};
declare function mapEasingToNativeEasing(easing: any): any;
declare function animateStyle(element: any, valueName: any, keyframes: any, { delay, duration, repeat, repeatType, ease, times, }?: {
    delay?: number | undefined;
    duration: any;
    repeat?: number | undefined;
    repeatType?: string | undefined;
    ease: any;
    times: any;
}): any;
declare function getFinalKeyframe(keyframes: any, { repeat, repeatType }: {
    repeat: any;
    repeatType?: string | undefined;
}): any;
declare const calcBezier: (t: any, a1: any, a2: any) => number;
declare const subdivisionPrecision = 1e-7;
declare const subdivisionMaxIterations = 12;
declare function binarySubdivide(x: any, lowerBound: any, upperBound: any, mX1: any, mX2: any): any;
declare function cubicBezier(mX1: any, mY1: any, mX2: any, mY2: any): (any: any) => any;
declare const easeIn: (any: any) => any;
declare const easeOut: (any: any) => any;
declare const easeInOut: (any: any) => any;
declare const isEasingArray: (ease: any) => boolean;
declare const mirrorEasing: (easing: any) => (p: any) => number;
declare const reverseEasing: (easing: any) => (p: any) => number;
declare const circIn: (p: any) => number;
declare const circOut: (p: any) => number;
declare const circInOut: (p: any) => number;
declare const backOut: (any: any) => any;
declare const backIn: (p: any) => number;
declare const backInOut: (p: any) => number;
declare const anticipate: (p: any) => number;
declare const easingLookup: {
    linear: (any: any) => any;
    easeIn: (any: any) => any;
    easeInOut: (any: any) => any;
    easeOut: (any: any) => any;
    circIn: (p: any) => number;
    circInOut: (p: any) => number;
    circOut: (p: any) => number;
    backIn: (p: any) => number;
    backInOut: (p: any) => number;
    backOut: (any: any) => any;
    anticipate: (p: any) => number;
};
declare const easingDefinitionToFunction: (definition: any) => any;
/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */
declare const isColorString: (type: any, testProp: any) => (v: any) => boolean;
declare const splitColor: (aName: any, bName: any, cName: any) => (v: any) => any;
declare const clampRgbUnit: (v: any) => number;
declare const rgbUnit: {
    transform: (v: any) => number;
    test: (v: any) => boolean;
    parse: typeof parseFloat;
};
declare const rgba: {
    test: (v: any) => boolean;
    parse: (v: any) => any;
    transform: ({ red, green, blue, alpha: alpha$1 }: {
        red: any;
        green: any;
        blue: any;
        alpha?: number | undefined;
    }) => string;
};
declare function parseHex(v: any): {
    red: number;
    green: number;
    blue: number;
    alpha: number;
};
declare const hex: {
    test: (v: any) => boolean;
    parse: typeof parseHex;
    transform: ({ red, green, blue, alpha: alpha$1 }: {
        red: any;
        green: any;
        blue: any;
        alpha?: number | undefined;
    }) => string;
};
declare const hsla: {
    test: (v: any) => boolean;
    parse: (v: any) => any;
    transform: ({ hue, saturation, lightness, alpha: alpha$1 }: {
        hue: any;
        saturation: any;
        lightness: any;
        alpha?: number | undefined;
    }) => string;
};
declare const color: {
    test: (v: any) => boolean;
    parse: (v: any) => any;
    transform: (v: any) => any;
};
declare const mix: (from: any, to: any, progress: any) => any;
declare function hueToRgb(p: any, q: any, t: any): any;
declare function hslaToRgba({ hue, saturation, lightness, alpha }: {
    hue: any;
    saturation: any;
    lightness: any;
    alpha: any;
}): {
    red: number;
    green: number;
    blue: number;
    alpha: any;
};
declare const mixLinearColor: (from: any, to: any, v: any) => number;
declare const colorTypes: ({
    test: (v: any) => boolean;
    parse: (v: any) => any;
    transform: ({ red, green, blue, alpha: alpha$1 }: {
        red: any;
        green: any;
        blue: any;
        alpha?: number | undefined;
    }) => string;
} | {
    test: (v: any) => boolean;
    parse: (v: any) => any;
    transform: ({ hue, saturation, lightness, alpha: alpha$1 }: {
        hue: any;
        saturation: any;
        lightness: any;
        alpha?: number | undefined;
    }) => string;
})[];
declare const getColorType: (v: any) => {
    test: (v: any) => boolean;
    parse: (v: any) => any;
    transform: ({ red, green, blue, alpha: alpha$1 }: {
        red: any;
        green: any;
        blue: any;
        alpha?: number | undefined;
    }) => string;
} | {
    test: (v: any) => boolean;
    parse: (v: any) => any;
    transform: ({ hue, saturation, lightness, alpha: alpha$1 }: {
        hue: any;
        saturation: any;
        lightness: any;
        alpha?: number | undefined;
    }) => string;
} | undefined;
declare function asRGBA(color: any): any;
declare const mixColor: (from: any, to: any) => (v: any) => string;
declare function test(v: any): boolean;
declare const cssVarTokeniser: {
    regex: RegExp;
    countKey: string;
    token: string;
    parse: (any: any) => any;
};
declare const colorTokeniser: {
    regex: RegExp;
    countKey: string;
    token: string;
    parse: (v: any) => any;
};
declare const numberTokeniser: {
    regex: RegExp;
    countKey: string;
    token: string;
    parse: typeof parseFloat;
};
declare function tokenise(info: any, { regex, countKey, token, parse }: {
    regex: any;
    countKey: any;
    token: any;
    parse: any;
}): void;
declare function analyseComplexValue(value: any): {
    value: any;
    tokenised: any;
    values: never[];
    numVars: number;
    numColors: number;
    numNumbers: number;
};
declare function parseComplexValue(v: any): never[];
declare function createTransformer(source: any): (v: any) => any;
declare const convertNumbersToZero: (v: any) => any;
declare function getAnimatableNone$1(v: any): any;
declare const complex: {
    test: typeof test;
    parse: typeof parseComplexValue;
    createTransformer: typeof createTransformer;
    getAnimatableNone: typeof getAnimatableNone$1;
};
declare const mixImmediate: (origin: any, target: any) => (p: any) => string;
declare function getMixer(origin: any, target: any): any;
declare const mixArray: (from: any, to: any) => (v: any) => any[];
declare const mixObject: (origin: any, target: any) => (v: any) => any;
declare const mixComplex: (origin: any, target: any) => any;
declare const progress: (from: any, to: any, value: any) => number;
declare const mixNumber: (from: any, to: any) => (p: any) => any;
declare function detectMixerFactory(v: any): (origin: any, target: any) => any;
declare function createMixers(output: any, ease: any, customMixer: any): any[];
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */
declare function interpolate(input: any, output: any, { clamp: isClamp, ease, mixer }?: {
    clamp?: boolean | undefined;
    ease: any;
    mixer: any;
}): (v: any) => any;
declare function fillOffset(offset: any, remaining: any): void;
declare function defaultOffset(arr: any): number[];
declare function convertOffsetToTimes(offset: any, duration: any): any;
declare function defaultEasing(values: any, easing: any): any;
declare function keyframes({ duration, keyframes: keyframeValues, times, ease, }: {
    duration?: number | undefined;
    keyframes: any;
    times: any;
    ease?: string | undefined;
}): {
    calculatedDuration: number;
    next: (t: any) => {
        done: boolean;
        value: any;
    };
};
declare function velocityPerSecond(velocity: any, frameDuration: any): number;
declare const velocitySampleDuration = 5;
declare function calcGeneratorVelocity(resolveValue: any, t: any, current: any): number;
declare const safeMin = 0.001;
declare const minDuration = 0.01;
declare const maxDuration$1 = 10;
declare const minDamping = 0.05;
declare const maxDamping = 1;
declare function findSpring({ duration, bounce, velocity, mass, }: {
    duration?: number | undefined;
    bounce?: number | undefined;
    velocity?: number | undefined;
    mass?: number | undefined;
}): {
    stiffness: number;
    damping: number;
    duration: number;
};
declare const rootIterations = 12;
declare function approximateRoot(envelope: any, derivative: any, initialGuess: any): any;
declare function calcAngularFreq(undampedFreq: any, dampingRatio: any): number;
declare const durationKeys: string[];
declare const physicsKeys: string[];
declare function isSpringType(options: any, keys: any): any;
declare function getSpringOptions(options: any): any;
declare function spring({ keyframes, restDelta, restSpeed, ...options }: {
    [x: string]: any;
    keyframes: any;
    restDelta: any;
    restSpeed: any;
}): {
    calculatedDuration: any;
    next: (t: any) => {
        done: boolean;
        value: any;
    };
};
declare function inertia({ keyframes, velocity, power, timeConstant, bounceDamping, bounceStiffness, modifyTarget, min, max, restDelta, restSpeed, }: {
    keyframes: any;
    velocity?: number | undefined;
    power?: number | undefined;
    timeConstant?: number | undefined;
    bounceDamping?: number | undefined;
    bounceStiffness?: number | undefined;
    modifyTarget: any;
    min: any;
    max: any;
    restDelta?: number | undefined;
    restSpeed: any;
}): {
    calculatedDuration: null;
    next: (t: any) => any;
};
declare const frameloopDriver: (update: any) => {
    start: () => any;
    stop: () => void;
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => number;
};
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
declare const maxGeneratorDuration = 20000;
declare function calcGeneratorDuration(generator: any): number;
declare const types: {
    decay: typeof inertia;
    inertia: typeof inertia;
    tween: typeof keyframes;
    keyframes: typeof keyframes;
    spring: typeof spring;
};
/**
 * Animate a single value on the main thread.
 *
 * This function is written, where functionality overlaps,
 * to be largely spec-compliant with WAAPI to allow fungibility
 * between the two.
 */
declare function animateValue({ autoplay, delay, driver, keyframes: keyframes$1, type, repeat, repeatDelay, repeatType, onPlay, onStop, onComplete, onUpdate, ...options }: {
    [x: string]: any;
    autoplay?: boolean | undefined;
    delay?: number | undefined;
    driver?: ((update: any) => {
        start: () => any;
        stop: () => void;
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */
        now: () => number;
    }) | undefined;
    keyframes: any;
    type?: string | undefined;
    repeat?: number | undefined;
    repeatDelay?: number | undefined;
    repeatType?: string | undefined;
    onPlay: any;
    onStop: any;
    onComplete: any;
    onUpdate: any;
}): {
    then(resolve: any, reject: any): any;
    time: number;
    readonly duration: number;
    speed: number;
    readonly state: string;
    play: () => void;
    pause: () => void;
    stop: () => void;
    cancel: () => void;
    complete: () => void;
    sample: (elapsed: any) => any;
};
declare function memo(callback: any): () => any;
declare const supportsWaapi: () => any;
/**
 * A list of values that can be hardware-accelerated.
 */
declare const acceleratedValues: Set<string>;
/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */
declare const sampleDelta = 10;
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
declare const maxDuration = 20000;
declare const requiresPregeneratedKeyframes: (valueName: any, options: any) => boolean;
declare function createAcceleratedAnimation(value: any, valueName: any, { onUpdate, onComplete, ...options }: {
    [x: string]: any;
    onUpdate: any;
    onComplete: any;
}): false | {
    then(resolve: any, reject: any): any;
    attachTimeline(timeline: any): (any: any) => any;
    time: number;
    speed: any;
    readonly duration: number;
    play: () => void;
    pause: () => any;
    stop: () => void;
    complete: () => any;
    cancel: () => void;
};
declare function createInstantAnimation({ keyframes, delay, onUpdate, onComplete, }: {
    keyframes: any;
    delay: any;
    onUpdate: any;
    onComplete: any;
}): {
    then(resolve: any, reject: any): any;
    time: number;
    readonly duration: number;
    speed: number;
    readonly state: string;
    play: () => void;
    pause: () => void;
    stop: () => void;
    cancel: () => void;
    complete: () => void;
    sample: (elapsed: any) => any;
} | {
    time: number;
    speed: number;
    duration: number;
    play: (any: any) => any;
    pause: (any: any) => any;
    stop: (any: any) => any;
    then: (resolve: any) => Promise<void>;
    cancel: (any: any) => any;
    complete: (any: any) => any;
};
declare const underDampedSpring: {
    type: string;
    stiffness: number;
    damping: number;
    restSpeed: number;
};
declare const criticallyDampedSpring: (target: any) => {
    type: string;
    stiffness: number;
    damping: number;
    restSpeed: number;
};
declare const keyframesTransition: {
    type: string;
    duration: number;
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */
declare const ease: {
    type: string;
    ease: number[];
    duration: number;
};
declare const getDefaultTransition: (valueKey: any, { keyframes }: {
    keyframes: any;
}) => {
    type: string;
    stiffness: number;
    damping: number;
    restSpeed: number;
} | {
    type: string;
    duration: number;
};
/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
declare const isAnimatable: (key: any, value: any) => boolean;
/**
 * Properties that should default to 1 or 100%
 */
declare const maxDefaults: Set<string>;
declare function applyDefaultFilter(v: any): any;
declare const functionRegex: RegExp;
declare const filter: {
    getAnimatableNone: (v: any) => any;
    test: typeof test;
    parse: typeof parseComplexValue;
    createTransformer: typeof createTransformer;
};
/**
 * A map of default value types for common values
 */
declare const defaultValueTypes: {
    color: {
        test: (v: any) => boolean;
        parse: (v: any) => any;
        transform: (v: any) => any;
    };
    backgroundColor: {
        test: (v: any) => boolean;
        parse: (v: any) => any;
        transform: (v: any) => any;
    };
    outlineColor: {
        test: (v: any) => boolean;
        parse: (v: any) => any;
        transform: (v: any) => any;
    };
    fill: {
        test: (v: any) => boolean;
        parse: (v: any) => any;
        transform: (v: any) => any;
    };
    stroke: {
        test: (v: any) => boolean;
        parse: (v: any) => any;
        transform: (v: any) => any;
    };
    borderColor: {
        test: (v: any) => boolean;
        parse: (v: any) => any;
        transform: (v: any) => any;
    };
    borderTopColor: {
        test: (v: any) => boolean;
        parse: (v: any) => any;
        transform: (v: any) => any;
    };
    borderRightColor: {
        test: (v: any) => boolean;
        parse: (v: any) => any;
        transform: (v: any) => any;
    };
    borderBottomColor: {
        test: (v: any) => boolean;
        parse: (v: any) => any;
        transform: (v: any) => any;
    };
    borderLeftColor: {
        test: (v: any) => boolean;
        parse: (v: any) => any;
        transform: (v: any) => any;
    };
    filter: {
        getAnimatableNone: (v: any) => any;
        test: typeof test;
        parse: typeof parseComplexValue;
        createTransformer: typeof createTransformer;
    };
    WebkitFilter: {
        getAnimatableNone: (v: any) => any;
        test: typeof test;
        parse: typeof parseComplexValue;
        createTransformer: typeof createTransformer;
    };
    borderWidth: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderTopWidth: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderRightWidth: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderBottomWidth: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderLeftWidth: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderRadius: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    radius: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderTopLeftRadius: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderTopRightRadius: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderBottomRightRadius: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    borderBottomLeftRadius: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    width: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    maxWidth: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    height: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    maxHeight: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    size: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    top: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    right: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    bottom: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    left: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    padding: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    paddingTop: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    paddingRight: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    paddingBottom: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    paddingLeft: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    margin: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    marginTop: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    marginRight: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    marginBottom: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    marginLeft: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    rotate: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    rotateX: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    rotateY: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    rotateZ: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    scale: {
        default: number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
        transform: (v: any) => any;
    };
    scaleX: {
        default: number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
        transform: (v: any) => any;
    };
    scaleY: {
        default: number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
        transform: (v: any) => any;
    };
    scaleZ: {
        default: number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
        transform: (v: any) => any;
    };
    skew: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    skewX: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    skewY: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    distance: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    translateX: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    translateY: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    translateZ: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    x: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    y: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    z: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    perspective: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    transformPerspective: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    opacity: {
        transform: (v: any) => number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
    };
    originX: {
        parse: (v: any) => number;
        transform: (v: any) => string;
        test: (v: any) => any;
    };
    originY: {
        parse: (v: any) => number;
        transform: (v: any) => string;
        test: (v: any) => any;
    };
    originZ: {
        test: (v: any) => any;
        parse: typeof parseFloat;
        transform: (v: any) => string;
    };
    zIndex: {
        transform: (x: number) => number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
    };
    fillOpacity: {
        transform: (v: any) => number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
    };
    strokeOpacity: {
        transform: (v: any) => number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
    };
    numOctaves: {
        transform: (x: number) => number;
        test: (v: any) => boolean;
        parse: typeof parseFloat;
    };
};
/**
 * Gets the default ValueType for the provided value key
 */
declare const getDefaultValueType: (key: any) => any;
declare function getAnimatableNone(key: any, value: any): any;
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
declare const isZeroValueString: (v: any) => boolean;
declare function isNone(value: any): boolean | undefined;
declare function getKeyframes(value: any, valueName: any, target: any, transition: any): any[];
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
declare function isTransitionDefined({ when, delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }: {
    [x: string]: any;
    when: any;
    delay: any;
    delayChildren: any;
    staggerChildren: any;
    staggerDirection: any;
    repeat: any;
    repeatType: any;
    repeatDelay: any;
    from: any;
    elapsed: any;
}): boolean;
declare function getValueTransition(transition: any, key: any): any;
declare const animateMotionValue: (valueName: any, value: any, target: any, transition?: {}) => (onComplete: any) => {
    then(resolve: any, reject: any): any;
    time: number;
    readonly duration: number;
    speed: number;
    readonly state: string;
    play: () => void;
    pause: () => void;
    stop: () => void;
    cancel: () => void;
    complete: () => void;
    sample: (elapsed: any) => any;
} | {
    then(resolve: any, reject: any): any;
    attachTimeline(timeline: any): (any: any) => any;
    time: number;
    speed: any;
    readonly duration: number;
    play: () => void;
    pause: () => any;
    stop: () => void;
    complete: () => any;
    cancel: () => void;
} | {
    time: number;
    speed: number;
    duration: number;
    play: (any: any) => any;
    pause: (any: any) => any;
    stop: (any: any) => any;
    then: (resolve: any) => Promise<void>;
    cancel: (any: any) => any;
    complete: (any: any) => any;
};
declare function isWillChangeMotionValue(value: any): boolean;
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
declare const isNumericalString: (v: any) => boolean;
declare function addUniqueItem(arr: any, item: any): void;
declare function removeItem(arr: any, item: any): void;
declare class SubscriptionManager {
    constructor();
    add(handler: any): () => void;
    notify(a: any, b: any, c: any): void;
    getSize(): any;
    clear(): void;
}
declare const warned: Set<unknown>;
declare function warnOnce(condition: any, message: any, element: any): void;
declare const isFloat: (value: any) => boolean;
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
declare class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(init: any, options?: {});
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription: any): any;
    on(eventName: any, callback: any): any;
    clearListeners(): void;
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    attach(passiveEffect: any, stopPassiveEffect: any): void;
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v: any, render?: boolean): void;
    setWithVelocity(prev: any, current: any, delta: any): void;
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v: any): void;
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get(): any;
    /**
     * @public
     */
    getPrevious(): any;
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity(): number;
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    start(startAnimation: any): Promise<void>;
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop(): void;
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating(): boolean;
    clearAnimation(): void;
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy(): void;
}
declare function motionValue(init: any, options: any): MotionValue;
/**
 * Tests a provided value against a ValueType
 */
declare const testValueType: (v: any) => (type: any) => any;
/**
 * ValueType for "auto"
 */
declare const auto: {
    test: (v: any) => boolean;
    parse: (v: any) => any;
};
/**
 * A list of value types commonly used for dimensions
 */
declare const dimensionValueTypes: ({
    test: (v: any) => boolean;
    parse: typeof parseFloat;
    transform: (v: any) => any;
} | {
    test: (v: any) => any;
    parse: typeof parseFloat;
    transform: (v: any) => string;
} | {
    test: (v: any) => boolean;
    parse: (v: any) => any;
})[];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
declare const findDimensionValueType: (v: any) => {
    test: (v: any) => boolean;
    parse: typeof parseFloat;
    transform: (v: any) => any;
} | {
    test: (v: any) => any;
    parse: typeof parseFloat;
    transform: (v: any) => string;
} | {
    test: (v: any) => boolean;
    parse: (v: any) => any;
} | undefined;
/**
 * A list of all ValueTypes
 */
declare const valueTypes: ({
    test: (v: any) => boolean;
    parse: typeof parseFloat;
    transform: (v: any) => any;
} | {
    test: (v: any) => any;
    parse: typeof parseFloat;
    transform: (v: any) => string;
} | {
    test: (v: any) => boolean;
    parse: (v: any) => any;
})[];
/**
 * Tests a value against the list of ValueTypes
 */
declare const findValueType: (v: any) => {
    test: (v: any) => boolean;
    parse: typeof parseFloat;
    transform: (v: any) => any;
} | {
    test: (v: any) => any;
    parse: typeof parseFloat;
    transform: (v: any) => string;
} | {
    test: (v: any) => boolean;
    parse: (v: any) => any;
} | undefined;
/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
declare function setMotionValue(visualElement: any, key: any, value: any): void;
declare function setTarget(visualElement: any, definition: any): void;
declare function checkTargetForNewValues(visualElement: any, target: any, origin: any): void;
declare function getOriginFromTransition(key: any, transition: any): any;
declare function getOrigin(target: any, transition: any, visualElement: any): {};
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
declare function shouldBlockAnimation({ protectedKeys, needsAnimating }: {
    protectedKeys: any;
    needsAnimating: any;
}, key: any): any;
declare function hasKeyframesChanged(value: any, target: any): boolean | undefined;
declare function animateTarget(visualElement: any, definition: any, { delay, transitionOverride, type }?: {
    delay?: number | undefined;
    transitionOverride: any;
    type: any;
}): any[];
declare function animateVariant(visualElement: any, variant: any, options?: {}): Promise<void> | Promise<[void | any[], void | any[]]>;
declare function animateChildren(visualElement: any, variant: any, delayChildren: number | undefined, staggerChildren: number | undefined, staggerDirection: number | undefined, options: any): Promise<any[]>;
declare function sortByTreeOrder(a: any, b: any): any;
declare function animateVisualElement(visualElement: any, definition: any, options?: {}): Promise<any>;
declare const reversePriorityOrder: string[];
declare const numAnimationTypes: number;
declare function animateList(visualElement: any): (animations: any) => Promise<any[]>;
declare function createAnimationState(visualElement: any): {
    animateChanges: (options: any, changedActiveType: any) => Promise<void> | Promise<any[]>;
    setActive: (type: any, isActive: any, options: any) => Promise<void> | Promise<any[]>;
    setAnimateFunction: (makeAnimator: any) => void;
    getState: () => {
        animate: {
            isActive: boolean;
            protectedKeys: {};
            needsAnimating: {};
            prevResolvedValues: {};
        };
        whileInView: {
            isActive: boolean;
            protectedKeys: {};
            needsAnimating: {};
            prevResolvedValues: {};
        };
        whileHover: {
            isActive: boolean;
            protectedKeys: {};
            needsAnimating: {};
            prevResolvedValues: {};
        };
        whileTap: {
            isActive: boolean;
            protectedKeys: {};
            needsAnimating: {};
            prevResolvedValues: {};
        };
        whileDrag: {
            isActive: boolean;
            protectedKeys: {};
            needsAnimating: {};
            prevResolvedValues: {};
        };
        whileFocus: {
            isActive: boolean;
            protectedKeys: {};
            needsAnimating: {};
            prevResolvedValues: {};
        };
        exit: {
            isActive: boolean;
            protectedKeys: {};
            needsAnimating: {};
            prevResolvedValues: {};
        };
    };
};
declare function checkVariantsDidChange(prev: any, next: any): boolean;
declare function createTypeState(isActive?: boolean): {
    isActive: boolean;
    protectedKeys: {};
    needsAnimating: {};
    prevResolvedValues: {};
};
declare function createState(): {
    animate: {
        isActive: boolean;
        protectedKeys: {};
        needsAnimating: {};
        prevResolvedValues: {};
    };
    whileInView: {
        isActive: boolean;
        protectedKeys: {};
        needsAnimating: {};
        prevResolvedValues: {};
    };
    whileHover: {
        isActive: boolean;
        protectedKeys: {};
        needsAnimating: {};
        prevResolvedValues: {};
    };
    whileTap: {
        isActive: boolean;
        protectedKeys: {};
        needsAnimating: {};
        prevResolvedValues: {};
    };
    whileDrag: {
        isActive: boolean;
        protectedKeys: {};
        needsAnimating: {};
        prevResolvedValues: {};
    };
    whileFocus: {
        isActive: boolean;
        protectedKeys: {};
        needsAnimating: {};
        prevResolvedValues: {};
    };
    exit: {
        isActive: boolean;
        protectedKeys: {};
        needsAnimating: {};
        prevResolvedValues: {};
    };
};
declare class AnimationFeature extends Feature {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(node: any);
    updateAnimationControlsSubscription(): void;
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount(): void;
    update(): void;
    unmount(): void;
}
declare let id$1: number;
declare class ExitAnimationFeature extends Feature {
    constructor();
    update(): void;
    mount(): void;
    unmount(): void;
}
declare const animations: {
    animation: {
        Feature: typeof AnimationFeature;
    };
    exit: {
        Feature: typeof ExitAnimationFeature;
    };
};
declare const distance: (a: any, b: any) => number;
declare function distance2D(a: any, b: any): number;
/**
 * @internal
 */
declare class PanSession {
    constructor(event: any, handlers: any, { transformPagePoint, contextWindow }?: {
        transformPagePoint: any;
        contextWindow: any;
    });
    updateHandlers(handlers: any): void;
    end(): void;
}
declare function transformPoint(info: any, transformPagePoint: any): any;
declare function subtractPoint(a: any, b: any): {
    x: number;
    y: number;
};
declare function getPanInfo({ point }: {
    point: any;
}, history: any): {
    point: any;
    delta: {
        x: number;
        y: number;
    };
    offset: {
        x: number;
        y: number;
    };
    velocity: {
        x: number;
        y: number;
    };
};
declare function startDevicePoint(history: any): any;
declare function lastDevicePoint(history: any): any;
declare function getVelocity(history: any, timeDelta: any): {
    x: number;
    y: number;
};
declare function calcLength(axis: any): number;
declare function isNear(value: any, target?: number, maxDistance?: number): boolean;
declare function calcAxisDelta(delta: any, source: any, target: any, origin?: number): void;
declare function calcBoxDelta(delta: any, source: any, target: any, origin: any): void;
declare function calcRelativeAxis(target: any, relative: any, parent: any): void;
declare function calcRelativeBox(target: any, relative: any, parent: any): void;
declare function calcRelativeAxisPosition(target: any, layout: any, parent: any): void;
declare function calcRelativePosition(target: any, layout: any, parent: any): void;
/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
declare function applyConstraints(point: any, { min, max }: {
    min: any;
    max: any;
}, elastic: any): any;
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
declare function calcRelativeAxisConstraints(axis: any, min: any, max: any): {
    min: any;
    max: number | undefined;
};
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
declare function calcRelativeConstraints(layoutBox: any, { top, left, bottom, right }: {
    top: any;
    left: any;
    bottom: any;
    right: any;
}): {
    x: {
        min: any;
        max: number | undefined;
    };
    y: {
        min: any;
        max: number | undefined;
    };
};
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
declare function calcViewportAxisConstraints(layoutAxis: any, constraintsAxis: any): {
    min: number;
    max: number;
};
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
declare function calcViewportConstraints(layoutBox: any, constraintsBox: any): {
    x: {
        min: number;
        max: number;
    };
    y: {
        min: number;
        max: number;
    };
};
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
declare function calcOrigin(source: any, target: any): number;
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
declare function rebaseAxisConstraints(layout: any, constraints: any): {};
declare const defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
declare function resolveDragElastic(dragElastic?: number): {
    x: {
        min: any;
        max: any;
    };
    y: {
        min: any;
        max: any;
    };
};
declare function resolveAxisElastic(dragElastic: any, minLabel: any, maxLabel: any): {
    min: any;
    max: any;
};
declare function resolvePointElastic(dragElastic: any, label: any): any;
declare const createAxisDelta: () => {
    translate: number;
    scale: number;
    origin: number;
    originPoint: number;
};
declare const createDelta: () => {
    x: {
        translate: number;
        scale: number;
        origin: number;
        originPoint: number;
    };
    y: {
        translate: number;
        scale: number;
        origin: number;
        originPoint: number;
    };
};
declare const createAxis: () => {
    min: number;
    max: number;
};
declare const createBox: () => {
    x: {
        min: number;
        max: number;
    };
    y: {
        min: number;
        max: number;
    };
};
declare function eachAxis(callback: any): any[];
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
declare function convertBoundingBoxToBox({ top, left, right, bottom, }: {
    top: any;
    left: any;
    right: any;
    bottom: any;
}): {
    x: {
        min: any;
        max: any;
    };
    y: {
        min: any;
        max: any;
    };
};
declare function convertBoxToBoundingBox({ x, y }: {
    x: any;
    y: any;
}): {
    top: any;
    right: any;
    bottom: any;
    left: any;
};
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
declare function transformBoxPoints(point: any, transformPoint: any): any;
declare function isIdentityScale(scale: any): boolean;
declare function hasScale({ scale, scaleX, scaleY }: {
    scale: any;
    scaleX: any;
    scaleY: any;
}): boolean;
declare function hasTransform(values: any): any;
declare function has2DTranslate(values: any): any;
declare function is2DTranslate(value: any): any;
/**
 * Scales a point based on a factor and an originPoint
 */
declare function scalePoint(point: any, scale: any, originPoint: any): any;
/**
 * Applies a translate/scale delta to a point
 */
declare function applyPointDelta(point: any, translate: any, scale: any, originPoint: any, boxScale: any): any;
/**
 * Applies a translate/scale delta to an axis
 */
declare function applyAxisDelta(axis: any, translate: number | undefined, scale: number | undefined, originPoint: any, boxScale: any): void;
/**
 * Applies a translate/scale delta to a box
 */
declare function applyBoxDelta(box: any, { x, y }: {
    x: any;
    y: any;
}): void;
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
declare function applyTreeDeltas(box: any, treeScale: any, treePath: any, isSharedTransition?: boolean): void;
declare function snapToDefault(scale: any): any;
declare function translateAxis(axis: any, distance: any): void;
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
declare function transformAxis(axis: any, transforms: any, [key, scaleKey, originKey]: [any, any, any]): void;
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
declare const xKeys$1: string[];
declare const yKeys$1: string[];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
declare function transformBox(box: any, transform: any): void;
declare function measureViewportBox(instance: any, transformPoint: any): {
    x: {
        min: any;
        max: any;
    };
    y: {
        min: any;
        max: any;
    };
};
declare function measurePageBox(element: any, rootProjectionNode: any, transformPagePoint: any): {
    x: {
        min: any;
        max: any;
    };
    y: {
        min: any;
        max: any;
    };
};
declare const getContextWindow: ({ current }: {
    current: any;
}) => any;
declare const elementDragControls: WeakMap<object, any>;
/**
 *
 */
declare class VisualElementDragControls {
    constructor(visualElement: any);
    start(originEvent: any, { snapToCursor }?: {
        snapToCursor?: boolean | undefined;
    }): void;
    stop(event: any, info: any): void;
    cancel(): void;
    updateAxis(axis: any, _point: any, offset: any): void;
    resolveConstraints(): void;
    resolveRefConstraints(): false | {
        x: {
            min: number;
            max: number;
        };
        y: {
            min: number;
            max: number;
        };
    };
    startAnimation(velocity: any): Promise<any[]>;
    startAxisValueAnimation(axis: any, transition: any): any;
    stopAnimation(): void;
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(axis: any): any;
    snapToCursor(point: any): void;
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints(): void;
    addListeners(): (() => void) | undefined;
    getProps(): any;
}
declare function shouldDrag(direction: any, drag: any, currentDirection: any): boolean;
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
declare function getCurrentDirection(offset: any, lockThreshold?: number): string | null;
declare class DragGesture extends Feature {
    constructor(node: any);
    mount(): void;
    unmount(): void;
}
declare const asyncHandler: (handler: any) => (event: any, info: any) => void;
declare class PanGesture extends Feature {
    constructor();
    onPointerDown(pointerDownEvent: any): void;
    createPanHandlers(): {
        onSessionStart: (event: any, info: any) => void;
        onStart: (event: any, info: any) => void;
        onMove: any;
        onEnd: (event: any, info: any) => void;
    };
    mount(): void;
    update(): void;
    unmount(): void;
}
/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
declare function usePresence(): (boolean | null)[] | (boolean | (() => any))[];
/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */
declare const globalProjectionState: {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: boolean;
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: boolean;
};
declare function pixelsToPercent(pixels: any, axis: any): number;
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
declare const correctBorderRadius: {
    correct: (latest: any, node: any) => any;
};
declare const correctBoxShadow: {
    correct: (latest: any, { treeScale, projectionDelta }: {
        treeScale: any;
        projectionDelta: any;
    }) => any;
};
declare class MeasureLayoutWithContext extends React.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount(): void;
    getSnapshotBeforeUpdate(prevProps: any): null;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    safeToRemove(): void;
    render(): null;
}
declare function MeasureLayout(props: any): any;
declare const defaultScaleCorrectors: {
    borderRadius: {
        applyTo: string[];
        correct: (latest: any, node: any) => any;
    };
    borderTopLeftRadius: {
        correct: (latest: any, node: any) => any;
    };
    borderTopRightRadius: {
        correct: (latest: any, node: any) => any;
    };
    borderBottomLeftRadius: {
        correct: (latest: any, node: any) => any;
    };
    borderBottomRightRadius: {
        correct: (latest: any, node: any) => any;
    };
    boxShadow: {
        correct: (latest: any, { treeScale, projectionDelta }: {
            treeScale: any;
            projectionDelta: any;
        }) => any;
    };
};
declare const borders: string[];
declare const numBorders: number;
declare const asNumber: (value: any) => any;
declare const isPx: (value: any) => any;
declare function mixValues(target: any, follow: any, lead: any, progress: any, shouldCrossfadeOpacity: any, isOnlyMember: any): void;
declare function getRadius(values: any, radiusName: any): any;
declare const easeCrossfadeIn: (p: any) => any;
declare const easeCrossfadeOut: (p: any) => any;
declare function compress(min: any, max: any, easing: any): (p: any) => any;
/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
declare function copyAxisInto(axis: any, originAxis: any): void;
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
declare function copyBoxInto(box: any, originBox: any): void;
/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
declare function removePointDelta(point: any, translate: any, scale: any, originPoint: any, boxScale: any): any;
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
declare function removeAxisDelta(axis: any, translate: number | undefined, scale: number | undefined, origin: number | undefined, boxScale: any, originAxis?: any, sourceAxis?: any): void;
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
declare function removeAxisTransforms(axis: any, transforms: any, [key, scaleKey, originKey]: [any, any, any], origin: any, sourceAxis: any): void;
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
declare const xKeys: string[];
declare const yKeys: string[];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
declare function removeBoxTransforms(box: any, transforms: any, originBox: any, sourceBox: any): void;
declare function isAxisDeltaZero(delta: any): boolean;
declare function isDeltaZero(delta: any): boolean;
declare function boxEquals(a: any, b: any): boolean;
declare function boxEqualsRounded(a: any, b: any): boolean;
declare function aspectRatio(box: any): number;
declare class NodeStack {
    constructor();
    add(node: any): void;
    remove(node: any): void;
    relegate(node: any): boolean;
    promote(node: any, preserveFollowOpacity: any): void;
    exitAnimationComplete(): void;
    scheduleRender(): void;
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    removeLeadSnapshot(): void;
}
declare function buildProjectionTransform(delta: any, treeScale: any, latestTransform: any): string;
declare const compareByDepth: (a: any, b: any) => number;
declare class FlatTree {
    constructor();
    add(child: any): void;
    remove(child: any): void;
    forEach(callback: any): void;
}
/**
 * Timeout defined in ms
 */
declare function delay(callback: any, timeout: any): () => void;
declare function record(data: any): void;
declare function isSVGElement(element: any): boolean;
declare function animateSingleValue(value: any, keyframes: any, options: any): any;
declare const transformAxes: string[];
declare const hiddenVisibility: {
    visibility: string;
};
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */
declare const animationTarget = 1000;
declare let id: number;
/**
 * Use a mutable data object for debug data so as to not create a new
 * object every frame.
 */
declare const projectionFrameData: {
    type: string;
    totalNodes: number;
    resolvedTargetDeltas: number;
    recalculatedProjection: number;
};
declare function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform, }: {
    attachResizeListener: any;
    defaultParent: any;
    measureScroll: any;
    checkIsScrollRoot: any;
    resetTransform: any;
}): {
    new (latestValues?: {}, parent?: any): {
        addEventListener(name: any, handler: any): any;
        notifyListeners(name: any, ...args: any[]): void;
        hasListeners(name: any): any;
        /**
         * Lifecycles
         */
        mount(instance: any, isLayoutDirty?: any): void;
        unmount(): void;
        blockUpdate(): void;
        unblockUpdate(): void;
        isUpdateBlocked(): any;
        isTreeAnimationBlocked(): any;
        startUpdate(): void;
        getTransformTemplate(): any;
        willUpdate(shouldNotifyListeners?: boolean): void;
        update(): void;
        didUpdate(): void;
        clearAllSnapshots(): void;
        scheduleUpdateProjection(): void;
        scheduleCheckAfterUnmount(): void;
        /**
         * Update measurements
         */
        updateSnapshot(): void;
        updateLayout(): void;
        updateScroll(phase?: string): void;
        resetTransform(): void;
        measure(removeTransform?: boolean): {
            animationId: any;
            measuredBox: any;
            layoutBox: {
                x: {
                    min: number;
                    max: number;
                };
                y: {
                    min: number;
                    max: number;
                };
            };
            latestValues: {};
            source: any;
        };
        measurePageBox(): any;
        removeElementScroll(box: any): {
            x: {
                min: number;
                max: number;
            };
            y: {
                min: number;
                max: number;
            };
        };
        applyTransform(box: any, transformOnly?: boolean): {
            x: {
                min: number;
                max: number;
            };
            y: {
                min: number;
                max: number;
            };
        };
        removeTransform(box: any): {
            x: {
                min: number;
                max: number;
            };
            y: {
                min: number;
                max: number;
            };
        };
        setTargetDelta(delta: any): void;
        setOptions(options: any): void;
        clearMeasurements(): void;
        forceRelativeParentToResolveTarget(): void;
        resolveTargetDelta(forceRecalculation?: boolean): void;
        getClosestProjectingParent(): any;
        isProjecting(): boolean;
        calcProjection(): void;
        hide(): void;
        show(): void;
        scheduleRender(notifyAll?: boolean): void;
        setAnimationOrigin(delta: any, hasOnlyRelativeTargetChanged?: boolean): void;
        startAnimation(options: any): void;
        completeAnimation(): void;
        finishAnimation(): void;
        applyTransformsToTarget(): void;
        registerSharedNode(layoutId: any, node: any): void;
        isLead(): boolean;
        getLead(): any;
        getPrevLead(): any;
        getStack(): any;
        promote({ needsReset, transition, preserveFollowOpacity, }?: {
            needsReset: any;
            transition: any;
            preserveFollowOpacity: any;
        }): void;
        relegate(): any;
        resetRotation(): void;
        getProjectionStyles(styleProp: any): {} | undefined;
        clearSnapshot(): void;
        resetTree(): void;
    };
};
declare function updateLayout(node: any): void;
declare function notifyLayoutUpdate(node: any): void;
declare function propagateDirtyNodes(node: any): void;
declare function cleanDirtyNodes(node: any): void;
declare function clearSnapshot(node: any): void;
declare function clearMeasurements(node: any): void;
declare function clearIsLayoutDirty(node: any): void;
declare function resetTransformStyle(node: any): void;
declare function finishAnimation(node: any): void;
declare function resolveTargetDelta(node: any): void;
declare function calcProjection(node: any): void;
declare function resetRotation(node: any): void;
declare function removeLeadSnapshots(stack: any): void;
declare function mixAxisDelta(output: any, delta: any, p: any): void;
declare function mixAxis(output: any, from: any, to: any, p: any): void;
declare function mixBox(output: any, from: any, to: any, p: any): void;
declare function hasOpacityCrossfade(node: any): any;
declare const defaultLayoutTransition: {
    duration: number;
    ease: number[];
};
declare const userAgentContains: (string: any) => boolean;
/**
 * Measured bounding boxes must be rounded in Safari and
 * left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
 * can appear to jump.
 */
declare const roundPoint: ((x: number) => number) | ((any: any) => any);
declare function roundAxis(axis: any): void;
declare function roundBox(box: any): void;
declare function shouldAnimatePositionOnly(animationType: any, snapshot: any, layout: any): boolean;
declare const DocumentProjectionNode: {
    new (latestValues?: {}, parent?: any): {
        addEventListener(name: any, handler: any): any;
        notifyListeners(name: any, ...args: any[]): void;
        hasListeners(name: any): any;
        /**
         * Lifecycles
         */
        mount(instance: any, isLayoutDirty?: any): void;
        unmount(): void;
        blockUpdate(): void;
        unblockUpdate(): void;
        isUpdateBlocked(): any;
        isTreeAnimationBlocked(): any;
        startUpdate(): void;
        getTransformTemplate(): any;
        willUpdate(shouldNotifyListeners?: boolean): void;
        update(): void;
        didUpdate(): void;
        clearAllSnapshots(): void;
        scheduleUpdateProjection(): void;
        scheduleCheckAfterUnmount(): void;
        /**
         * Update measurements
         */
        updateSnapshot(): void;
        updateLayout(): void;
        updateScroll(phase?: string): void;
        resetTransform(): void;
        measure(removeTransform?: boolean): {
            animationId: any;
            measuredBox: any;
            layoutBox: {
                x: {
                    min: number;
                    max: number;
                };
                y: {
                    min: number;
                    max: number;
                };
            };
            latestValues: {};
            source: any;
        };
        measurePageBox(): any;
        removeElementScroll(box: any): {
            x: {
                min: number;
                max: number;
            };
            y: {
                min: number;
                max: number;
            };
        };
        applyTransform(box: any, transformOnly?: boolean): {
            x: {
                min: number;
                max: number;
            };
            y: {
                min: number;
                max: number;
            };
        };
        removeTransform(box: any): {
            x: {
                min: number;
                max: number;
            };
            y: {
                min: number;
                max: number;
            };
        };
        setTargetDelta(delta: any): void;
        setOptions(options: any): void;
        clearMeasurements(): void;
        forceRelativeParentToResolveTarget(): void;
        resolveTargetDelta(forceRecalculation?: boolean): void;
        getClosestProjectingParent(): any;
        isProjecting(): boolean;
        calcProjection(): void;
        hide(): void;
        show(): void;
        scheduleRender(notifyAll?: boolean): void;
        setAnimationOrigin(delta: any, hasOnlyRelativeTargetChanged?: boolean): void;
        startAnimation(options: any): void;
        completeAnimation(): void;
        finishAnimation(): void;
        applyTransformsToTarget(): void;
        registerSharedNode(layoutId: any, node: any): void;
        isLead(): boolean;
        getLead(): any;
        getPrevLead(): any;
        getStack(): any;
        promote({ needsReset, transition, preserveFollowOpacity, }?: {
            needsReset: any;
            transition: any;
            preserveFollowOpacity: any;
        }): void;
        relegate(): any;
        resetRotation(): void;
        getProjectionStyles(styleProp: any): {} | undefined;
        clearSnapshot(): void;
        resetTree(): void;
    };
};
declare const rootProjectionNode: {
    current: undefined;
};
declare const HTMLProjectionNode: {
    new (latestValues?: {}, parent?: any): {
        addEventListener(name: any, handler: any): any;
        notifyListeners(name: any, ...args: any[]): void;
        hasListeners(name: any): any;
        /**
         * Lifecycles
         */
        mount(instance: any, isLayoutDirty?: any): void;
        unmount(): void;
        blockUpdate(): void;
        unblockUpdate(): void;
        isUpdateBlocked(): any;
        isTreeAnimationBlocked(): any;
        startUpdate(): void;
        getTransformTemplate(): any;
        willUpdate(shouldNotifyListeners?: boolean): void;
        update(): void;
        didUpdate(): void;
        clearAllSnapshots(): void;
        scheduleUpdateProjection(): void;
        scheduleCheckAfterUnmount(): void;
        /**
         * Update measurements
         */
        updateSnapshot(): void;
        updateLayout(): void;
        updateScroll(phase?: string): void;
        resetTransform(): void;
        measure(removeTransform?: boolean): {
            animationId: any;
            measuredBox: any;
            layoutBox: {
                x: {
                    min: number;
                    max: number;
                };
                y: {
                    min: number;
                    max: number;
                };
            };
            latestValues: {};
            source: any;
        };
        measurePageBox(): any;
        removeElementScroll(box: any): {
            x: {
                min: number;
                max: number;
            };
            y: {
                min: number;
                max: number;
            };
        };
        applyTransform(box: any, transformOnly?: boolean): {
            x: {
                min: number;
                max: number;
            };
            y: {
                min: number;
                max: number;
            };
        };
        removeTransform(box: any): {
            x: {
                min: number;
                max: number;
            };
            y: {
                min: number;
                max: number;
            };
        };
        setTargetDelta(delta: any): void;
        setOptions(options: any): void;
        clearMeasurements(): void;
        forceRelativeParentToResolveTarget(): void;
        resolveTargetDelta(forceRecalculation?: boolean): void;
        getClosestProjectingParent(): any;
        isProjecting(): boolean;
        calcProjection(): void;
        hide(): void;
        show(): void;
        scheduleRender(notifyAll?: boolean): void;
        setAnimationOrigin(delta: any, hasOnlyRelativeTargetChanged?: boolean): void;
        startAnimation(options: any): void;
        completeAnimation(): void;
        finishAnimation(): void;
        applyTransformsToTarget(): void;
        registerSharedNode(layoutId: any, node: any): void;
        isLead(): boolean;
        getLead(): any;
        getPrevLead(): any;
        getStack(): any;
        promote({ needsReset, transition, preserveFollowOpacity, }?: {
            needsReset: any;
            transition: any;
            preserveFollowOpacity: any;
        }): void;
        relegate(): any;
        resetRotation(): void;
        getProjectionStyles(styleProp: any): {} | undefined;
        clearSnapshot(): void;
        resetTree(): void;
    };
};
declare const drag: {
    pan: {
        Feature: typeof PanGesture;
    };
    drag: {
        Feature: typeof DragGesture;
        ProjectionNode: {
            new (latestValues?: {}, parent?: any): {
                addEventListener(name: any, handler: any): any;
                notifyListeners(name: any, ...args: any[]): void;
                hasListeners(name: any): any;
                /**
                 * Lifecycles
                 */
                mount(instance: any, isLayoutDirty?: any): void;
                unmount(): void;
                blockUpdate(): void;
                unblockUpdate(): void;
                isUpdateBlocked(): any;
                isTreeAnimationBlocked(): any;
                startUpdate(): void;
                getTransformTemplate(): any;
                willUpdate(shouldNotifyListeners?: boolean): void;
                update(): void;
                didUpdate(): void;
                clearAllSnapshots(): void;
                scheduleUpdateProjection(): void;
                scheduleCheckAfterUnmount(): void;
                /**
                 * Update measurements
                 */
                updateSnapshot(): void;
                updateLayout(): void;
                updateScroll(phase?: string): void;
                resetTransform(): void;
                measure(removeTransform?: boolean): {
                    animationId: any;
                    measuredBox: any;
                    layoutBox: {
                        x: {
                            min: number;
                            max: number;
                        };
                        y: {
                            min: number;
                            max: number;
                        };
                    };
                    latestValues: {};
                    source: any;
                };
                measurePageBox(): any;
                removeElementScroll(box: any): {
                    x: {
                        min: number;
                        max: number;
                    };
                    y: {
                        min: number;
                        max: number;
                    };
                };
                applyTransform(box: any, transformOnly?: boolean): {
                    x: {
                        min: number;
                        max: number;
                    };
                    y: {
                        min: number;
                        max: number;
                    };
                };
                removeTransform(box: any): {
                    x: {
                        min: number;
                        max: number;
                    };
                    y: {
                        min: number;
                        max: number;
                    };
                };
                setTargetDelta(delta: any): void;
                setOptions(options: any): void;
                clearMeasurements(): void;
                forceRelativeParentToResolveTarget(): void;
                resolveTargetDelta(forceRecalculation?: boolean): void;
                getClosestProjectingParent(): any;
                isProjecting(): boolean;
                calcProjection(): void;
                hide(): void;
                show(): void;
                scheduleRender(notifyAll?: boolean): void;
                setAnimationOrigin(delta: any, hasOnlyRelativeTargetChanged?: boolean): void;
                startAnimation(options: any): void;
                completeAnimation(): void;
                finishAnimation(): void;
                applyTransformsToTarget(): void;
                registerSharedNode(layoutId: any, node: any): void;
                isLead(): boolean;
                getLead(): any;
                getPrevLead(): any;
                getStack(): any;
                promote({ needsReset, transition, preserveFollowOpacity, }?: {
                    needsReset: any;
                    transition: any;
                    preserveFollowOpacity: any;
                }): void;
                relegate(): any;
                resetRotation(): void;
                getProjectionStyles(styleProp: any): {} | undefined;
                clearSnapshot(): void;
                resetTree(): void;
            };
        };
        MeasureLayout: typeof MeasureLayout;
    };
};
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
declare const splitCSSVariableRegex: RegExp;
declare function parseCSSVariable(current: any): string[] | undefined[];
declare const maxDepth = 4;
declare function getVariableValue(current: any, element: any, depth?: number): string | number | undefined;
/**
 * Resolve CSS variables from
 *
 * @internal
 */
declare function resolveCSSVariables(visualElement: any, { ...target }: {
    [x: string]: any;
}, transitionEnd: any): {
    target: {
        [x: string]: any;
    };
    transitionEnd: any;
};
declare const positionalKeys: Set<string>;
declare const isPositionalKey: (key: any) => boolean;
declare const hasPositionalKey: (target: any) => boolean;
declare const isNumOrPxType: (v: any) => boolean;
declare const getPosFromMatrix: (matrix: any, pos: any) => number;
declare const getTranslateFromMatrix: (pos2: any, pos3: any) => (_bbox: any, { transform }: {
    transform: any;
}) => number;
declare const transformKeys: Set<string>;
declare const nonTranslationalTransformKeys: string[];
declare function removeNonTranslationalTransform(visualElement: any): any[];
declare const positionalValues: {
    width: ({ x }: {
        x: any;
    }, { paddingLeft, paddingRight }: {
        paddingLeft?: string | undefined;
        paddingRight?: string | undefined;
    }) => number;
    height: ({ y }: {
        y: any;
    }, { paddingTop, paddingBottom }: {
        paddingTop?: string | undefined;
        paddingBottom?: string | undefined;
    }) => number;
    top: (_bbox: any, { top }: {
        top: any;
    }) => number;
    left: (_bbox: any, { left }: {
        left: any;
    }) => number;
    bottom: ({ y }: {
        y: any;
    }, { top }: {
        top: any;
    }) => number;
    right: ({ x }: {
        x: any;
    }, { left }: {
        left: any;
    }) => number;
    x: (_bbox: any, { transform }: {
        transform: any;
    }) => number;
    y: (_bbox: any, { transform }: {
        transform: any;
    }) => number;
};
declare const convertChangedValueTypes: (target: any, visualElement: any, changedKeys: any) => any;
declare const checkAndConvertChangedValueTypes: (visualElement: any, target: any, origin?: {}, transitionEnd?: {}) => {
    target: any;
    transitionEnd: {};
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
declare function unitConversion(visualElement: any, target: any, origin: any, transitionEnd: any): {
    target: any;
    transitionEnd: any;
};
/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
declare const parseDomVariant: (visualElement: any, target: any, origin: any, transitionEnd: any) => {
    target: any;
    transitionEnd: any;
};
declare const prefersReducedMotion: {
    current: null;
};
declare const hasReducedMotionListener: {
    current: boolean;
};
declare function initPrefersReducedMotion(): void;
declare function updateMotionValuesFromProps(element: any, next: any, prev: any): any;
declare const visualElementStore: WeakMap<object, any>;
declare const featureNames: string[];
declare const numFeatures: number;
declare const propEventHandlers: string[];
declare const numVariantProps: number;
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */
declare class VisualElement {
    constructor({ parent, props, presenceContext, reducedMotionConfig, visualState, }: {
        parent: any;
        props: any;
        presenceContext: any;
        reducedMotionConfig: any;
        visualState: any;
    }, options?: {});
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props: any, _prevProps: any): {};
    mount(instance: any): void;
    unmount(): void;
    bindToMotionValue(key: any, value: any): void;
    sortNodePosition(other: any): any;
    loadFeatures({ children, ...renderedProps }: {
        [x: string]: any;
        children: any;
    }, isStrict: any, preloadedFeatures: any, initialLayoutGroupConfig: any): any;
    updateFeatures(): void;
    triggerBuild(): void;
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox(): any;
    getStaticValue(key: any): any;
    setStaticValue(key: any, value: any): void;
    /**
     * Make a target animatable by Popmotion. For instance, if we're
     * trying to animate width from 100px to 100vw we need to measure 100vw
     * in pixels to determine what we really need to animate to. This is also
     * pluggable to support Framer's custom value types like Color,
     * and CSS variables.
     */
    makeTargetAnimatable(target: any, canMutate?: boolean): any;
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props: any, presenceContext: any): void;
    getProps(): any;
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name: any): any;
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition(): any;
    getTransformPagePoint(): any;
    getClosestVariantNode(): any;
    getVariantContext(startAtParent?: boolean): any;
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child: any): (() => any) | undefined;
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key: any, value: any): void;
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key: any): void;
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key: any): any;
    getValue(key: any, defaultValue: any): any;
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key: any): any;
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key: any, value: any): void;
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key: any): any;
    on(eventName: any, callback: any): any;
    notify(eventName: any, ...args: any[]): void;
}
declare class DOMVisualElement extends VisualElement {
    sortInstanceNodePosition(a: any, b: any): 1 | -1;
    getBaseTargetFromProps(props: any, key: any): any;
    removeValueFromRenderState(key: any, { vars, style }: {
        vars: any;
        style: any;
    }): void;
    makeTargetAnimatableFromInstance({ transition, transitionEnd, ...target }: {
        [x: string]: any;
        transition: any;
        transitionEnd: any;
    }, { transformValues }: {
        transformValues: any;
    }, isMounted: any): {
        transition: any;
        transitionEnd: any;
    };
}
declare function getComputedStyle$1(element: any): CSSStyleDeclaration;
declare class HTMLVisualElement extends DOMVisualElement {
    readValueFromInstance(instance: any, key: any): any;
    measureInstanceViewportBox(instance: any, { transformPagePoint }: {
        transformPagePoint: any;
    }): {
        x: {
            min: any;
            max: any;
        };
        y: {
            min: any;
            max: any;
        };
    };
    build(renderState: any, latestValues: any, options: any, props: any): void;
    scrapeMotionValuesFromProps(props: any, prevProps: any): {};
    handleChildMotionValue(): void;
    renderInstance(instance: any, renderState: any, styleProp: any, projection: any): void;
}
declare class SVGVisualElement extends DOMVisualElement {
    constructor();
    getBaseTargetFromProps(props: any, key: any): any;
    readValueFromInstance(instance: any, key: any): any;
    measureInstanceViewportBox(): {
        x: {
            min: number;
            max: number;
        };
        y: {
            min: number;
            max: number;
        };
    };
    scrapeMotionValuesFromProps(props: any, prevProps: any): {};
    build(renderState: any, latestValues: any, options: any, props: any): void;
    renderInstance(instance: any, renderState: any, styleProp: any, projection: any): void;
    mount(instance: any): void;
}
declare const createDomVisualElement: (Component: any, options: any) => HTMLVisualElement | SVGVisualElement;
declare const layout: {
    layout: {
        ProjectionNode: {
            new (latestValues?: {}, parent?: any): {
                addEventListener(name: any, handler: any): any;
                notifyListeners(name: any, ...args: any[]): void;
                hasListeners(name: any): any;
                /**
                 * Lifecycles
                 */
                mount(instance: any, isLayoutDirty?: any): void;
                unmount(): void;
                blockUpdate(): void;
                unblockUpdate(): void;
                isUpdateBlocked(): any;
                isTreeAnimationBlocked(): any;
                startUpdate(): void;
                getTransformTemplate(): any;
                willUpdate(shouldNotifyListeners?: boolean): void;
                update(): void;
                didUpdate(): void;
                clearAllSnapshots(): void;
                scheduleUpdateProjection(): void;
                scheduleCheckAfterUnmount(): void;
                /**
                 * Update measurements
                 */
                updateSnapshot(): void;
                updateLayout(): void;
                updateScroll(phase?: string): void;
                resetTransform(): void;
                measure(removeTransform?: boolean): {
                    animationId: any;
                    measuredBox: any;
                    layoutBox: {
                        x: {
                            min: number;
                            max: number;
                        };
                        y: {
                            min: number;
                            max: number;
                        };
                    };
                    latestValues: {};
                    source: any;
                };
                measurePageBox(): any;
                removeElementScroll(box: any): {
                    x: {
                        min: number;
                        max: number;
                    };
                    y: {
                        min: number;
                        max: number;
                    };
                };
                applyTransform(box: any, transformOnly?: boolean): {
                    x: {
                        min: number;
                        max: number;
                    };
                    y: {
                        min: number;
                        max: number;
                    };
                };
                removeTransform(box: any): {
                    x: {
                        min: number;
                        max: number;
                    };
                    y: {
                        min: number;
                        max: number;
                    };
                };
                setTargetDelta(delta: any): void;
                setOptions(options: any): void;
                clearMeasurements(): void;
                forceRelativeParentToResolveTarget(): void;
                resolveTargetDelta(forceRecalculation?: boolean): void;
                getClosestProjectingParent(): any;
                isProjecting(): boolean;
                calcProjection(): void;
                hide(): void;
                show(): void;
                scheduleRender(notifyAll?: boolean): void;
                setAnimationOrigin(delta: any, hasOnlyRelativeTargetChanged?: boolean): void;
                startAnimation(options: any): void;
                completeAnimation(): void;
                finishAnimation(): void;
                applyTransformsToTarget(): void;
                registerSharedNode(layoutId: any, node: any): void;
                isLead(): boolean;
                getLead(): any;
                getPrevLead(): any;
                getStack(): any;
                promote({ needsReset, transition, preserveFollowOpacity, }?: {
                    needsReset: any;
                    transition: any;
                    preserveFollowOpacity: any;
                }): void;
                relegate(): any;
                resetRotation(): void;
                getProjectionStyles(styleProp: any): {} | undefined;
                clearSnapshot(): void;
                resetTree(): void;
            };
        };
        MeasureLayout: typeof MeasureLayout;
    };
};
declare const preloadedFeatures: {
    layout: {
        ProjectionNode: {
            new (latestValues?: {}, parent?: any): {
                addEventListener(name: any, handler: any): any;
                notifyListeners(name: any, ...args: any[]): void;
                hasListeners(name: any): any;
                /**
                 * Lifecycles
                 */
                mount(instance: any, isLayoutDirty?: any): void;
                unmount(): void;
                blockUpdate(): void;
                unblockUpdate(): void;
                isUpdateBlocked(): any;
                isTreeAnimationBlocked(): any;
                startUpdate(): void;
                getTransformTemplate(): any;
                willUpdate(shouldNotifyListeners?: boolean): void;
                update(): void;
                didUpdate(): void;
                clearAllSnapshots(): void;
                scheduleUpdateProjection(): void;
                scheduleCheckAfterUnmount(): void;
                /**
                 * Update measurements
                 */
                updateSnapshot(): void;
                updateLayout(): void;
                updateScroll(phase?: string): void;
                resetTransform(): void;
                measure(removeTransform?: boolean): {
                    animationId: any;
                    measuredBox: any;
                    layoutBox: {
                        x: {
                            min: number;
                            max: number;
                        };
                        y: {
                            min: number;
                            max: number;
                        };
                    };
                    latestValues: {};
                    source: any;
                };
                measurePageBox(): any;
                removeElementScroll(box: any): {
                    x: {
                        min: number;
                        max: number;
                    };
                    y: {
                        min: number;
                        max: number;
                    };
                };
                applyTransform(box: any, transformOnly?: boolean): {
                    x: {
                        min: number;
                        max: number;
                    };
                    y: {
                        min: number;
                        max: number;
                    };
                };
                removeTransform(box: any): {
                    x: {
                        min: number;
                        max: number;
                    };
                    y: {
                        min: number;
                        max: number;
                    };
                };
                setTargetDelta(delta: any): void;
                setOptions(options: any): void;
                clearMeasurements(): void;
                forceRelativeParentToResolveTarget(): void;
                resolveTargetDelta(forceRecalculation?: boolean): void;
                getClosestProjectingParent(): any;
                isProjecting(): boolean;
                calcProjection(): void;
                hide(): void;
                show(): void;
                scheduleRender(notifyAll?: boolean): void;
                setAnimationOrigin(delta: any, hasOnlyRelativeTargetChanged?: boolean): void;
                startAnimation(options: any): void;
                completeAnimation(): void;
                finishAnimation(): void;
                applyTransformsToTarget(): void;
                registerSharedNode(layoutId: any, node: any): void;
                isLead(): boolean;
                getLead(): any;
                getPrevLead(): any;
                getStack(): any;
                promote({ needsReset, transition, preserveFollowOpacity, }?: {
                    needsReset: any;
                    transition: any;
                    preserveFollowOpacity: any;
                }): void;
                relegate(): any;
                resetRotation(): void;
                getProjectionStyles(styleProp: any): {} | undefined;
                clearSnapshot(): void;
                resetTree(): void;
            };
        };
        MeasureLayout: typeof MeasureLayout;
    };
    pan: {
        Feature: typeof PanGesture;
    };
    drag: {
        Feature: typeof DragGesture;
        ProjectionNode: {
            new (latestValues?: {}, parent?: any): {
                addEventListener(name: any, handler: any): any;
                notifyListeners(name: any, ...args: any[]): void;
                hasListeners(name: any): any;
                /**
                 * Lifecycles
                 */
                mount(instance: any, isLayoutDirty?: any): void;
                unmount(): void;
                blockUpdate(): void;
                unblockUpdate(): void;
                isUpdateBlocked(): any;
                isTreeAnimationBlocked(): any;
                startUpdate(): void;
                getTransformTemplate(): any;
                willUpdate(shouldNotifyListeners?: boolean): void;
                update(): void;
                didUpdate(): void;
                clearAllSnapshots(): void;
                scheduleUpdateProjection(): void;
                scheduleCheckAfterUnmount(): void;
                /**
                 * Update measurements
                 */
                updateSnapshot(): void;
                updateLayout(): void;
                updateScroll(phase?: string): void;
                resetTransform(): void;
                measure(removeTransform?: boolean): {
                    animationId: any;
                    measuredBox: any;
                    layoutBox: {
                        x: {
                            min: number;
                            max: number;
                        };
                        y: {
                            min: number;
                            max: number;
                        };
                    };
                    latestValues: {};
                    source: any;
                };
                measurePageBox(): any;
                removeElementScroll(box: any): {
                    x: {
                        min: number;
                        max: number;
                    };
                    y: {
                        min: number;
                        max: number;
                    };
                };
                applyTransform(box: any, transformOnly?: boolean): {
                    x: {
                        min: number;
                        max: number;
                    };
                    y: {
                        min: number;
                        max: number;
                    };
                };
                removeTransform(box: any): {
                    x: {
                        min: number;
                        max: number;
                    };
                    y: {
                        min: number;
                        max: number;
                    };
                };
                setTargetDelta(delta: any): void;
                setOptions(options: any): void;
                clearMeasurements(): void;
                forceRelativeParentToResolveTarget(): void;
                resolveTargetDelta(forceRecalculation?: boolean): void;
                getClosestProjectingParent(): any;
                isProjecting(): boolean;
                calcProjection(): void;
                hide(): void;
                show(): void;
                scheduleRender(notifyAll?: boolean): void;
                setAnimationOrigin(delta: any, hasOnlyRelativeTargetChanged?: boolean): void;
                startAnimation(options: any): void;
                completeAnimation(): void;
                finishAnimation(): void;
                applyTransformsToTarget(): void;
                registerSharedNode(layoutId: any, node: any): void;
                isLead(): boolean;
                getLead(): any;
                getPrevLead(): any;
                getStack(): any;
                promote({ needsReset, transition, preserveFollowOpacity, }?: {
                    needsReset: any;
                    transition: any;
                    preserveFollowOpacity: any;
                }): void;
                relegate(): any;
                resetRotation(): void;
                getProjectionStyles(styleProp: any): {} | undefined;
                clearSnapshot(): void;
                resetTree(): void;
            };
        };
        MeasureLayout: typeof MeasureLayout;
    };
    inView: {
        Feature: typeof InViewFeature;
    };
    tap: {
        Feature: typeof PressGesture;
    };
    focus: {
        Feature: typeof FocusGesture;
    };
    hover: {
        Feature: typeof HoverGesture;
    };
    animation: {
        Feature: typeof AnimationFeature;
    };
    exit: {
        Feature: typeof ExitAnimationFeature;
    };
};
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
declare const motion: (Component: any, customMotionComponentConfig?: {}) => any;
declare function useIsMounted(): any;
declare function useForceUpdate(): any[];
/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
declare class PopChildMeasure extends reactExports.Component {
    getSnapshotBeforeUpdate(prevProps: any): null;
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate(): void;
    render(): any;
}
declare function PopChild({ children, isPresent }: {
    children: any;
    isPresent: any;
}): any;
declare const PresenceChild: ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, }: {
    children: any;
    initial: any;
    isPresent: any;
    onExitComplete: any;
    custom: any;
    presenceAffectsLayout: any;
    mode: any;
}) => any;
declare function newChildrenMap(): Map<any, any>;
declare function useUnmountEffect(callback: any): any;
declare const getChildKey: (child: any) => any;
declare function updateChildLookup(children: any, allChildren: any): void;
declare function onlyElements(children: any): any[];
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
declare const AnimatePresence: ({ children, custom, initial, onExitComplete, exitBeforeEnter, presenceAffectsLayout, mode, }: {
    children: any;
    custom: any;
    initial?: boolean | undefined;
    onExitComplete: any;
    exitBeforeEnter: any;
    presenceAffectsLayout?: boolean | undefined;
    mode?: string | undefined;
}) => any;
declare function FilterSelected(_a: any): any;
declare function FilterCategory(_a: any): any;
declare function FilterScreen(_a: any): any;
declare function FilterSearch(_a: any): any;
declare function FilterSelectedDisplay(_a: any): any;
declare function FilterDropdown(_a: any): any;
declare function Filter(_a: any): any;
