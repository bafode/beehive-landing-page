import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { Grid } from '@mui/material'
const DynamicHomeHero = dynamic(() => import('../screens/Hero'))
const DynamicHomeOurConcepts = dynamic(() => import('../screens/Concept'))

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
      </Grid>
    </Fragment>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
