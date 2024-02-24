import { Grid, InputAdornment, TextField, styled, Divider } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { CONTACT_OUR_TEAM, FOOTER_LABELS } from 'src/utils/constants'
import logo from 'src/assets/logo.svg'
import rightArrow from 'src/assets/icons/pink-arrow-right.svg'
import facebook from 'src/assets/icons/facebook.svg'
import twitter from 'src/assets/icons/twitter.svg'
import instagram from 'src/assets/icons/instagram.svg'
import Avatar from 'src/components/atoms/Avatar'
import { useNavigate } from 'react-router-dom'

const FooterGrid = styled(Grid)({
  background: theme.palette.primary.main,
  padding: '5vw 8vw',
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

const WhiteDivider = styled(Divider)({
  borderColor: theme.palette.structural.white
})

const WhiteTypography = styled(Typography)({
  color: theme.palette.structural.white
})

const FooterItem = styled(Grid)({
  cursor: 'pointer'
})

const SocialIcon = styled('a')({
  // border: '1px solid #fff',
  // borderRadius: '50%',
  // width: '44px',
  // height: '44px',
  cursor: 'pointer'
})

export const SocialGroup = () => {
  return (
    <Grid container columnGap={5}>
      <Grid item>
        <SocialIcon
          href='https://www.facebook.com/BloodWarriors'
          target='blank'
        >
          <img src={facebook} height={22} />
        </SocialIcon>
      </Grid>
      <Grid item>
        <SocialIcon href='' target='blank'>
          <img src={twitter} height={22} />
        </SocialIcon>
      </Grid>
      <Grid item>
        <SocialIcon href='https://www.instagram.com/bwindia_/' target='blank'>
          <img src={instagram} height={22} />
        </SocialIcon>
      </Grid>
    </Grid>
  )
}

const Footer = () => {
  const navigate = useNavigate()
  return (
    <>
      <FooterGrid container direction='column' rowGap={8}>
        {/* <Grid item>
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
        </Grid> */}
        <Grid item>
          <Grid
            container
            justifyContent={{ xs: 'center', md: 'space-between' }}
            textAlign={{ xs: 'center', md: 'start' }}
            rowGap={4}
            alignItems='center'
          >
            <Grid item>
              <Grid container direction='column' rowGap={2}>
                <Grid item>
                  <WhiteTypography fontWeight={1000} variant='h4'>
                    Get in touch
                  </WhiteTypography>
                </Grid>
                <Grid item>
                  <Grid container direction='column'>
                    <Grid item>
                      <WhiteTypography fontWeight={1000} component='span'>
                        Email :{' '}
                      </WhiteTypography>
                      <WhiteTypography component='span'>
                        contact@bloodwarriors.in
                      </WhiteTypography>
                    </Grid>
                    <Grid item>
                      <WhiteTypography fontWeight={1000} component='span'>
                        Phone :{' '}
                      </WhiteTypography>
                      <WhiteTypography component='span'>
                        +91 90001 90002
                      </WhiteTypography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                columnGap={2}
                justifyContent={{ xs: 'center', md: 'end' }}
              >
                {FOOTER_LABELS.map((item, index) => (
                  <>
                    <FooterItem
                      item
                      key={`footer-${item.label}`}
                      onClick={() => {
                        navigate(item.path)
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        })
                      }}
                    >
                      <WhiteTypography variant='h5' fontWeight={1000}>
                        {item.label}
                      </WhiteTypography>
                    </FooterItem>
                    {index !== FOOTER_LABELS.length - 1 && (
                      <Grid item>
                        <WhiteTypography variant='h5'>|</WhiteTypography>
                      </Grid>
                    )}
                  </>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <WhiteDivider />
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent={{ md: 'space-between' }}
            flexDirection={{ xs: 'column-reverse', md: 'row' }}
            alignItems='center'
            rowGap={3}
          >
            <Grid item>
              <WhiteTypography>
                &copy; Blood Warriors 2023 . All Rights Reserved.
              </WhiteTypography>
            </Grid>
            <Grid item>
              <SocialGroup />
            </Grid>
          </Grid>
        </Grid>
      </FooterGrid>
    </>
  )
}

export default Footer
