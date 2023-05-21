import { Box, Grid, Menu, MenuItem, styled } from '@mui/material'
import React from 'react'
import Button from 'src/components/atoms/Button'
import Typography from 'src/components/atoms/Typography'
import {
  ABOUT_US,
  DONOR,
  HOME,
  PATIENT,
  REGISTER_NOW,
  SIGN_IN,
  VOLUNTEER
} from 'src/utils/constants'
import theme from 'src/themes'
import logo from 'src/assets/logo.svg'

interface Props {
  active: number
}

const NavBox = styled(Box)({
  //   width: "100%",
  background: theme.palette.structural.white,
  padding: '0 8vw'
})

const NavItem = styled(Grid)((props: { active: boolean }) => ({
  cursor: 'pointer',
  '&:hover': {
    borderBottom: `1px solid ${theme.palette.primary.main}`
  },
  ...(props.active && {
    borderBottom: `1px solid ${theme.palette.primary.main}`
  })
}))

const Navbar = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = (): void => {
    setAnchorEl(null)
  }
  return (
    <>
      <NavBox>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <img src={logo} width={100} height={100} />
          </Grid>
          <Grid item>
            <Grid container columnGap={7} alignItems='center'>
              <NavItem item active={props.active === 0}>
                <Typography variant='h4'>{HOME}</Typography>
              </NavItem>
              <NavItem item active={props.active === 1}>
                <Typography variant='h4'>{ABOUT_US}</Typography>
              </NavItem>
              <NavItem
                item
                active={props.active === 2}
                id='nav-dropdown-button'
                aria-controls={open ? 'nav-dropdown-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleMenuClick}
              >
                <Typography variant='h4'>{REGISTER_NOW}</Typography>
              </NavItem>
              <Menu
                id='nav-dropdown-menu'
                aria-labelledby='nav-dropdown-button'
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
              >
                <MenuItem onClick={handleMenuClose}>{PATIENT}</MenuItem>
                <MenuItem onClick={handleMenuClose}>{DONOR}</MenuItem>
                <MenuItem onClick={handleMenuClose}>{VOLUNTEER}</MenuItem>
              </Menu>
              <Grid item>
                <Button size='large' variant='outlined'>
                  {SIGN_IN}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </NavBox>
    </>
  )
}

export default Navbar
