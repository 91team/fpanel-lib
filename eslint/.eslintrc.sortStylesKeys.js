const files = ['**/styles.ts']

const rules = {
  'sort-keys-fix/sort-keys-fix': [
    'error',
    'custom',
    {
      order: [
        'composes',
        'extend',
        'content',
        'position',
        'display',
        'grid',
        'gridArea',
        'gridAutoColumns',
        'gridAutoFlow',
        'gridAutoRows',
        'gridColumn',
        'gridColumnStart',
        'gridColumnEnd',
        'gridColumnGap',
        'gridRow',
        'gridRowStart',
        'gridRowEnd',
        'gridRowGap',
        'gridTemplate',
        'gridTemplateAreas',
        'gridTemplateColumns',
        'gridTemplateRows',
        'gridGap',
        'flex',
        'flexFlow',
        'flexOrder',
        'order',
        'flexDirection',
        'flexWrap',
        'flexAlign',
        'flexPack',
        'justifyContent',
        'alignItems',
        'alignSelf',
        'alignContent',
        'flexBasis',
        'flexGrow',
        'flexShrink',
        'tableLayout',
        'emptyCells',
        'captionSide',
        'borderSpacing',
        'borderCollapse',
        'visibility',
        'float',
        'clear',
        'top',
        'right',
        'bottom',
        'left',
        'minWidth',
        'maxWidth',
        'width',
        'minHeight',
        'maxHeight',
        'height',
        'margin',
        'marginTop',
        'marginRight',
        'marginBottom',
        'marginLeft',
        'padding',
        'paddingTop',
        'paddingRight',
        'paddingBottom',
        'paddingLeft',
        'font',
        'fontFamily',
        'fontSize',
        'fontWeight',
        'fontStyle',
        'fontVariant',
        'fontSizeAdjust',
        'fontStretch',
        'fontEffect',
        'fontEmphasize',
        'fontEmphasizePosition',
        'fontEmphasizeStyle',
        'fontSmooth',
        'lineHeight',
        'letterSpacing',
        'color',
        'textShadow',
        'textOutline',
        'textTransform',
        'textWrap',
        'textOverflow',
        'textDecoration',
        'textEmphasis',
        'textEmphasisColor',
        'textEmphasisStyle',
        'textEmphasisPosition',
        'textIndent',
        'textJustify',
        'textAlign',
        'verticalAlign',
        'whiteSpace',
        'wordWrap',
        'wordBreak',
        'tabSize',
        'hyphens',
        'background',
        'backgroundColor',
        'backgroundImage',
        'backgroundRepeat',
        'backgroundAttachment',
        'backgroundPosition',
        'backgroundPositionX',
        'backgroundPositionY',
        'backgroundClip',
        'backgroundOrigin',
        'backgroundSize',
        'objectFit',
        'objectPosition',
        'border',
        'borderWidth',
        'borderStyle',
        'borderColor',
        'borderTop',
        'borderTopWidth',
        'borderTopStyle',
        'borderTopColor',
        'borderRight',
        'borderRightWidth',
        'borderRightStyle',
        'borderRightColor',
        'borderBottom',
        'borderBottomWidth',
        'borderBottomStyle',
        'borderBottomColor',
        'borderLeft',
        'borderLeftWidth',
        'borderLeftStyle',
        'borderLeftColor',
        'borderRadius',
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomRightRadius',
        'borderBottomLeftRadius',
        'borderImage',
        'borderImageSource',
        'borderImageSlice',
        'borderImageWidth',
        'borderImageOutset',
        'borderImageRepeat',
        'outline',
        'outlineWidth',
        'outlineStyle',
        'outlineColor',
        'outlineOffset',
        'boxShadow',
        'listStyle',
        'listStylePosition',
        'listStyleType',
        'listStyleImage',
        'zIndex',
        'zoom',
        'overflow',
        'overflowX',
        'overflowY',
        'clip',
        '-webkit-overflow-scrolling',
        'boxSizing',
        'quotes',
        'counterReset',
        'counterIncrement',
        'resize',
        'cursor',
        'pointerEvents',
        'userSelect',
        'opacity',
        'transform',
        'transformOrigin',
        'transition',
        'transitionSelay',
        'transitionTimingFunction',
        'transitionDuration',
        'transitionProperty',
        'animation',
        'animationName',
        'animationDuration',
        'animationPlayState',
        'animationTimingFunction',
        'animationDelay',
        'animationIterationCount',
        'animationDirection',
        'use',
        'fill',
        'stroke',
        'strokeWidth'
      ]
    }
  ]
}

module.exports = {
  files,
  rules
}
