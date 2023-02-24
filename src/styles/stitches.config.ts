import * as Stitches from '@stitches/react'

interface GradientBorderParams {
  width?: number
  gradient?: string
}

export const { styled, globalCss, getCssText, config, keyframes, css } =
  Stitches.createStitches({
    theme: {
      colors: {
        white: '#fafafa',
        black: '#171717',
        blue: '#3357c9',
        green: '#88DFAB',
        blueGreenGradient100:
          'linear-gradient(150deg, #3357c9 10.21%, #88DFAB 84.57%)',
        blueGreenGradient40:
          'linear-gradient(150deg, #3357c966 10.21%, #88DFAB66 84.57%)',
      },
      sizes: {
        type: '80rem',
        document: '120rem',
        largeDoc: '1600px',
      },
      space: {
        '5': '0.5rem',
        '10': '1rem',
        '15': '1.5rem',
        '20': '2rem',
        '25': '2.5rem',
        '30': '3rem',
        '35': '3.5rem',
        '40': '4rem',
        '45': '4.5rem',
        '50': '5rem',
        '55': '5.5rem',
        '60': '6rem',
        '65': '6.5rem',
        '70': '7rem',
        '75': '7.5rem',
        '80': '8rem',
      },
      radii: {
        r4: '0.4rem',
        r8: '0.8rem',
        r20: '2rem',
        round: '50%',
      },
      zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        5: '500',
        max: '999',
      },
      fonts: {
        sans: 'Inter, -apple-system, system-ui, sans-serif',
        'sans-var': '"Inter var", -apple-system, system-ui, sans-serif',
        mono: '"Space Mono", monospace',
        serif: '',
      },
      fontWeights: {
        light: 300,
        default: 400,
        bold: 600,
        semiblack: 700,
      },
      fontSizes: {
        XXL: '4.8rem',
        XL: '4rem',
        L: '3.2rem',
        M: '2.6rem',
        S: '2rem',
        XS: '1.6rem',
        XXS: '1.4rem',
        code: '1.4rem',
      },
      lineHeights: {
        XXL: '5.8rem',
        XL: '5rem',
        L: '4.2rem',
        M: '3.6rem',
        S: '3rem',
        XS: '2.6rem',
        XXS: '180%',
        code: '1.8rem',
      },
    },
    media: {
      tabletUp: '(min-width: 768px)',
      desktopUp: '(min-width: 1024px)',
      largeDesktopUp: '(min-width: 1680px)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
      motion: '(prefers-reduced-motion: no-preference)',
      documentUp: '(min-width: 1200px)',
    },
    utils: {
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      debug: (value: Stitches.PropertyValue<'color'>) => ({
        border: `solid 1px ${value}`,
      }),
      // require unused variable to allow custom CSS type to be used
      visuallyHidden: (_val: string) => ({
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
      }),
      gradientBorder: ({ width = 1, gradient = '' }: GradientBorderParams) => ({
        position: 'relative',

        '&::before': {
          content: `''`,
          display: 'block',
          backgroundImage: gradient,
          position: 'absolute',
          top: `-${width}px`,
          left: `-${width}px`,
          width: `calc(100% + ${width * 2}px)`,
          height: `calc(100% + ${width * 2}px)`,
          borderRadius: 'inherit',
          zIndex: -1,
        },
      }),

      hover: (val: object) => ({
        '@media (hover:hover)': {
          '&:hover': {
            ...val,
          },
        },
      }),
    },
  })

type StitchesConfig = typeof config
type CSS = Stitches.CSS<StitchesConfig>
type ScaleValue<TValue> = Stitches.ScaleValue<TValue, StitchesConfig>

export type { StitchesConfig, CSS, ScaleValue }
