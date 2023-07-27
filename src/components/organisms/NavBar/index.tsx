import { Box, Grid, Menu, MenuItem, styled } from '@mui/material'
import React, { useState } from 'react'
import Button from 'src/components/atoms/Button'
import Typography from 'src/components/atoms/Typography'
import { NAVBAR_ITEMS, REGISTER_NOW } from 'src/utils/constants'
import theme from 'src/themes'
import logo from 'src/assets/logos/BW Long Logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavbarItem } from 'src/utils/types'
import menuIcon from 'src/assets/icons/menu.svg'
import dropdownIcon from 'src/assets/icons/down-arrow.svg'
import { HOME_PAGE_ROUTE } from 'src/utils/urls'
import { getRouteParent } from 'src/utils/functions'

const NavBox = styled(Box)({
  //   width: "100%",
  background: theme.palette.structural.white,
  padding: '0 8vw',
  position: 'sticky',
  top: 0,
  zIndex: 100
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

const MobileMenuItems = styled(Menu)(() => ({
  '& .MuiMenu-paper': {
    left: '0 !important',
    maxWidth: '100%',
    marginTop: '1.5rem'
  }
}))

const Logo = styled('img')({
  cursor: 'pointer'
})

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [active, setActive] = useState<string>(
    getRouteParent(location.pathname)
  )

  const navigateToRoute = (route: string) => {
    setActive(route)
    navigate(route)
  }

  const NormalNavItem = (props: {
    item: NavbarItem
    active: string
    index: number
  }) => {
    return (
      <NavItem
        item
        active={props.active === props.item.route}
        onClick={() => {
          navigateToRoute(props.item.route)
        }}
      >
        <Typography variant='h4'>{props.item.name}</Typography>
      </NavItem>
    )
  }

  const DropdownNavItem = (props: {
    item: NavbarItem
    active: string
    index: number
  }) => {
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
        <NavItem
          item
          active={props.active === props.item.route}
          id='nav-dropdown-button'
          aria-controls={open ? 'nav-dropdown-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleMenuClick}
        >
          <Grid container flexWrap='nowrap'>
            <Typography variant='h4'>{REGISTER_NOW}</Typography>
            <img src={dropdownIcon} />
          </Grid>
        </NavItem>
        <Menu
          id='nav-dropdown-menu'
          aria-labelledby='nav-dropdown-button'
          anchorEl={anchorEl}
          open={open}
          sx={{
            width: '100vw'
          }}
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
          {props.item.children.map((child: NavbarItem, index: number) => (
            <MenuItem
              onClick={() => {
                handleMenuClose()
                navigateToRoute(props.item.route)
              }}
              key={`menuitem-${index + 1}`}
            >
              {child.name}
            </MenuItem>
          ))}
        </Menu>
      </>
    )
  }

  const ButtonNavItem = (props: {
    item: NavbarItem
    active: string
    index: number
  }) => {
    return (
      <Grid item>
        <Button
          size='large'
          outlineColor={theme.palette.primary.main}
          variant={props.active === props.item.route ? 'contained' : 'outlined'}
          onClick={() => {
            navigateToRoute(props.item.route)
          }}
        >
          {props.item.name}
        </Button>
      </Grid>
    )
  }

  const MobileMenu = (props: { open?: boolean }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
      setMobileMenuOpen(!mobileMenuOpen)
    }
    const handleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
      <>
        <img
          src={menuIcon}
          onClick={(e) => {
            handleMobileMenu()
            handleClick(e)
          }}
          id='mobile-menu-button'
          aria-controls={open ? 'mobile-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
        />
        <MobileMenuItems
          id='mobile-menu'
          aria-labelledby='mobile-menu-button'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          elevation={0}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Grid
            container
            direction='column'
            rowGap={3}
            py={3}
            alignItems='center'
            width='100vw'
          >
            <NavItems />
          </Grid>
        </MobileMenuItems>
      </>
    )
  }

  const NavItems = () => {
    return (
      <>
        {NAVBAR_ITEMS.map((item: NavbarItem, index: number) => (
          <>
            {item.type === 'normal' && item.children.length === 0 && (
              <NormalNavItem item={item} active={active} index={index} />
            )}
            {item.type === 'normal' && item.children.length !== 0 && (
              <DropdownNavItem item={item} active={active} index={index} />
            )}
            {item.type === 'button' && (
              <ButtonNavItem item={item} active={active} index={index} />
            )}
          </>
        ))}
      </>
    )
  }

  return (
    <>
      <NavBox>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Logo
              src={logo}
              width={100}
              height={100}
              onClick={() => {
                navigateToRoute(HOME_PAGE_ROUTE)
              }}
            />
          </Grid>
          <Grid item>
            <Grid container display={{ xs: 'flex', lg: 'none' }}>
              <Grid item>
                <MobileMenu />
              </Grid>
            </Grid>
            <Grid
              container
              columnGap={7}
              alignItems='center'
              display={{ xs: 'none', lg: 'flex' }}
            >
              <NavItems />
            </Grid>
          </Grid>
        </Grid>
      </NavBox>
    </>
  )
}

export default Navbar
