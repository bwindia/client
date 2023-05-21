import { createTheme } from '@mui/material'
import React from 'react'
declare module '@mui/material/styles' {
  interface PaletteColor {
    500: string
    300: string
    100: string
  }

  interface CustomPalette {
    other: {
      stroke2: string
      icon1: string
      icon2: string
    }
    structural: {
      blue: string
      white: string
      shadow: string
      card_hover: string
      button_hover: string
    }
  }

  interface CustomTypography {
    caption1: React.CSSProperties

    body3: React.CSSProperties
    link_text: React.CSSProperties
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface TypographyVariants extends CustomTypography {}
  interface TypographyVariantsOptions extends CustomTypography {}
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption1: true

    body3: true
    link_text: true
  }
}

export let theme = createTheme({
  palette: {
    primary: {
      main: '#F14164'
    },

    text: {
      primary: '#3B3B3B',
      secondary: '#626262',
      disabled: '#141414'
    },

    other: {
      stroke2: '#E5E4E5',
      icon1: '#141414',
      icon2: '#A5A8AC'
    },
    structural: {
      blue: '#F8F9FA',
      white: '#FFFFFF',
      shadow: '#A5A4A433',
      card_hover: '#F3F2F5',
      button_hover: '#F4EFFF'
    }
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontStyle: 'regular',
      fontSize: '64px',
      lineHeight: '75px',
      fontWeight: 'bolder'
    },
    h3: {
      fontStyle: 'regular',
      fontSize: '36px',
      lineHeight: '49px',
      fontWeight: 'bolder'
    },
    h4: {
      fontStyle: 'regular',
      fontSize: '24px',
      lineHeight: '36px'
    },
    caption1: {
      fontStyle: 'regular',
      fontSize: '16px',
      lineHeight: '27px'
    },
    body1: {
      fontStyle: 'regular',
      fontSize: '16px',
      lineHeight: '27px'
    },
    body2: {
      fontStyle: 'regular',
      fontSize: '12px',
      lineHeight: '20px'
    },

    body3: {
      fontStyle: 'regular',
      fontSize: '12px',
      lineHeight: '20px'
    },
    link_text: {
      fontStyle: 'regular',
      fontSize: '14px',
      lineHeight: '13.3px'
    }
  }
})

theme = createTheme(theme, {
  components: {
    // MuiDialog: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiPaper-root": {
    //         borderRadius: "1rem",
    //       },
    //     },
    //   },
    // },
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiOutlinedInput-root": {
    //         "&.Mui-focused fieldset": {
    //           border: `0.063rem solid ${theme.palette.other.stroke2}`,
    //           borderBottom: `0.125rem solid ${theme.palette.primary["500"]}`,
    //         },
    //         borderRadius: "0.5rem",
    //       },
    //       "& label": {
    //         fontSize: theme.typography.body2.fontSize,
    //         lineHeight: theme.typography.body2.lineHeight,
    //       },
    //       "& label.Mui-focused": {
    //         color: theme.palette.primary[500],
    //       },
    //       "& label.Mui-disabled": {
    //         color: theme.palette.text.primary,
    //       },
    //       "& .MuiInputBase-input.Mui-disabled": {
    //         WebkitTextFillColor: theme.palette.text.primary,
    //     },
    //       "& .MuiFormLabel-root,fieldset": {
    //         color: theme.palette.text.primary,
    //         fontSize: theme.typography.caption1.fontSize,
    //         lineHeight: theme.typography.caption1.lineHeight,
    //       },
    //       "& .MuiInputBase-input": {
    //         fontSize: theme.typography.body2.fontSize,
    //         lineHeight: theme.typography.body2.lineHeight,
    //       },
    //       "input,textarea": { color: theme.palette.text.disabled },
    //     },
    //   },
    // },
    // MuiFormControl: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiOutlinedInput-root": {
    //         "&.Mui-focused fieldset": {
    //           border: `0.063rem solid ${theme.palette.other.stroke2}`,
    //           borderBottom: `0.125rem solid ${theme.palette.primary["500"]}`,
    //         },
    //         borderRadius: "0.5rem",
    //       },
    //       "& label": {
    //         fontSize: theme.typography.body2.fontSize,
    //         lineHeight: theme.typography.body2.lineHeight,
    //       },
    //       "& label.Mui-focused": {
    //         color: theme.palette.primary[500],
    //       },
    //       "& label.Mui-disabled": {
    //         color: theme.palette.text.primary,
    //       },
    //       "& .MuiFormLabel-root,fieldset": {
    //         color: theme.palette.text.primary,
    //         fontSize: theme.typography.caption1.fontSize,
    //         lineHeight: theme.typography.caption1.lineHeight,
    //       },
    //       "& .MuiSelect-input": {
    //         fontSize: theme.typography.body2.fontSize,
    //         lineHeight: theme.typography.body2.lineHeight,
    //       },
    //       "input,textarea": { color: theme.palette.text.disabled },
    //     },
    //   },
    // },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            borderRadius: '8px',
            padding: '12px 28px',
            textTransform: 'none',
            border: 'none',
            color: theme.palette.structural.white,
            boxShadow: 'none',
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              filter: 'drop-shadow(0px 4px rgba(165, 164, 164, 0.2))'
            },
            '&.Mui-disabled': {
              color: theme.palette.structural.white,
              backgroundColor: theme.palette.primary.main,
              opacity: '50%'
            }
          }
        },
        {
          props: { variant: 'outlined' },
          style: {
            borderRadius: '8px',
            padding: '12px 28px',
            textTransform: 'none',
            color: theme.palette.primary['500'],
            '&:hover': {
              border: 'none'
              // backgroundColor: "none",
            }
          }
        },
        {
          props: { size: 'large' },
          style: {
            fontSize: '24px',
            padding: '12px 28px',
            ...theme.typography.h4
          }
        },
        {
          props: { size: 'medium' },
          style: {
            padding: '12px 20px'
          }
        }
      ]
    }
  }
})
export default theme
