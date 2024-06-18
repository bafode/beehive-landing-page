import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { Grid } from '@mui/material'
const DynamicHomeHero = dynamic(() => import('../screens/Hero'))
const DynamicHomeOurConcepts = dynamic(() => import('../screens/Concept'))
const DynamicHomeComprendre = dynamic(() => import('../screens/Comprendre'))
const DynamicHomePricing = dynamic(() => import('../screens/Pricing'))
const DynamicHomeNewsLetter = dynamic(() => import('../screens/Newsletter'))

const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Grid spacing={2}>
        <Grid item xs={12}>
          <DynamicHomeHero />
        </Grid>
        <Grid item xs={12}>
          <DynamicHomeOurConcepts />
        </Grid>
        <Grid item xs={12}>
          <DynamicHomeComprendre />
        </Grid>
        <Grid item xs={12}>
          <DynamicHomePricing />
        </Grid>
        <Grid item xs={12}>
          <DynamicHomeNewsLetter />
        </Grid>
      </Grid>
    </Fragment>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
