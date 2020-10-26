// Images
declare module '*.png' {
  const value: string
  export default value
}
declare module '*.jpg' {
  const value: string
  export default value
}
declare module '*.jpeg' {
  const value: string
  export default value
}
declare module '*.svg' {
  const value: string
  export default value
}
// For svg-sprite-loader in webpack
declare module 'assets/images/sprite/*.svg' {
  const sprite: {
    id: string
  }
  export default sprite
}

// Fonts
declare module '*.woff' {
  const value: string
  export default value
}
declare module '*.woff2' {
  const value: string
  export default value
}
declare module '*.otf' {
  const value: string
  export default value
}
declare module '*.ttf' {
  const value: string
  export default value
}

// Web Worker
declare module '*.worker.ts' {
  const value: string
  export default value
}
declare module '*.worker.js' {
  const value: string
  export default value
}

declare type ValueOf<T> = T[keyof T]

declare type LatLonCoordinates = { lat: number; lon: number }

declare function __non_webpack_require__(path: string): any
