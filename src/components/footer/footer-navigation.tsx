import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { FooterSectionTitle } from '@/components/footer'


const companyMenu: Array<Navigation> = [
  { label: 'Nous Contacter', path: '#' },
  { label: "Centre d'aide", path: '#' },
  { label: 'Conditions et politique de Confidentialité', path: '#' },
]

const platformMenu: Array<Navigation> = [
  { label: 'Android', path: '#' },
  { label: 'IOS', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'black',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Besoin d'aide?" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Utiliser Beehive" />
        {platformMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      {/* <Grid item xs={12} md={5}>
        <FooterSectionTitle title="Preinscription" />
        <ContactInput />
      </Grid> */}
    </Grid>
  )
}

export default FooterNavigation
