import { Box, Grid, Menu, MenuItem, styled } from '@mui/material'
import React from 'react'
import Button from 'src/components/atoms/Button'
import Typography from 'src/components/atoms/Typography'
import { NAVBAR_ITEMS, REGISTER_NOW } from 'src/utils/constants'
import theme from 'src/themes'
import logo from 'src/assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { NavbarItem } from 'src/utils/types'

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
  const navigate = useNavigate()

  const navigateToRoute = (route: string) => {
    navigate(route)
  }

  const NormalNavItem = (props: {
    item: NavbarItem
    active: number
    index: number
  }) => {
    return (
      <NavItem
        item
        active={props.active === props.index}
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
    active: number
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
          active={props.active === props.index}
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
    active: number
    index: number
  }) => {
    return (
      <Grid item>
        <Button
          size='large'
          variant={props.active === props.index ? 'contained' : 'outlined'}
          onClick={() => {
            navigateToRoute(props.item.route)
          }}
        >
          {props.item.name}
        </Button>
      </Grid>
    )
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
              {NAVBAR_ITEMS.map((item: NavbarItem, index: number) => (
                <>
                  {item.type === 'normal' && item.children.length === 0 && (
                    <NormalNavItem
                      item={item}
                      active={props.active}
                      index={index}
                    />
                  )}
                  {item.type === 'normal' && item.children.length !== 0 && (
                    <DropdownNavItem
                      item={item}
                      active={props.active}
                      index={index}
                    />
                  )}
                  {item.type === 'button' && (
                    <ButtonNavItem
                      item={item}
                      active={props.active}
                      index={index}
                    />
                  )}
                </>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </NavBox>
    </>
  )
}

export default Navbar
