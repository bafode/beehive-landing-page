
import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { Grid } from '@mui/material'
const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Grid spacing={2}>
        <Grid item xs={12}>
          <h1>Beehive</h1>
        </Grid>
      </Grid>
    </Fragment>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
