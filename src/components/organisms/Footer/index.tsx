import { Grid, InputAdornment, TextField, styled } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { CONTACT_OUR_TEAM, FOOTER_LABELS } from 'src/utils/constants'
import logo from 'src/assets/logo.svg'
import rightArrow from 'src/assets/icons/pink-arrow-right.svg'
import facebook from 'src/assets/icons/facebook.svg'
import twitter from 'src/assets/icons/twitter.svg'
import instagram from 'src/assets/icons/instagram.svg'

interface Props {}

const FooterGrid = styled(Grid)({
  background: theme.palette.primary.main,
  padding: '8vw 8vw 5vw',
  color: theme.palette.structural.white
})

const InputIcon = styled('div')({
  background: theme.palette.structural.white,
  padding: '0.9rem 0.9rem 0.7rem',
  borderRadius: '0.5rem 0.5rem 0 0'
})

const WhiteInput = styled(TextField)({
  '& .MuiInput-root:before': {
    borderColor: theme.palette.structural.white,
    borderWidth: '0.5px',
    bottom: '1.5px'
  },
  '& .MuiInput-root:hover:before': {
    borderColor: theme.palette.structural.white,
    borderWidth: '0.5px',
    bottom: '1.5px'
  },
  '& .MuiInput-root:after': {
    border: 'none'
  },
  '& .MuiInput-root': {
    color: theme.palette.structural.white,
    paddingBottom: '0.5rem',
    alignItems: 'baseline'
  },
  '& .MuiInputAdornment-root': {
    marginTop: '10px'
  }
})

const Footer = (props: Props) => {
  return (
    <>
      <FooterGrid container direction='column' rowGap={8}>
        <Grid item>
          <Grid container alignItems='center'>
            <Grid item xs={4}>
              <Grid container direction='column' rowGap={3}>
                <Grid item>
                  <Typography variant='h4'>{CONTACT_OUR_TEAM}</Typography>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item>
                      <WhiteInput
                        fullWidth
                        variant='standard'
                        placeholder='Email address'
                        InputProps={{
                          endAdornment: <InputAdornment position='end'><InputIcon>
                          <img src={rightArrow} width={20} height={20} />
                        </InputIcon></InputAdornment>
                        }}
                      />
                    </Grid>
                    {/* <Grid item>
                      <InputIcon>
                        <img src={rightArrow} width={20} height={20} />
                      </InputIcon>
                    </Grid> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid container justifyContent='space-between'>
                {FOOTER_LABELS.map((columnItems, colIndex) => (
                  <Grid item key={`footer-column-${colIndex}`}>
                    <Grid container direction='column' rowGap={3}>
                      {columnItems.map((item, itemIndex) => (
                        <Grid item key={`footer-item-${colIndex}${itemIndex}`}>
                          <Typography>{item}</Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item>
              <img src={logo} width={64} height={64} />
            </Grid>
            <Grid item>
              <Grid container columnGap={5}>
                <Grid item>
                  <img src={facebook} height={22} />
                </Grid>
                <Grid item>
                  <img src={twitter} height={22} />
                </Grid>
                <Grid item>
                  <img src={instagram} height={22} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FooterGrid>
    </>
  )
}

export default Footer
