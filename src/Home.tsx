import Link from 'next/link'
import React from 'react';
import Clock from '../src/components/Clock'
import Countries from '../src/components/Countries'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import theme from './theme';
import themeOther from './theme-other'

const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  return (
    <div>
      <AppBar
        style={{backgroudColor: muiTheme.palette.primary1Color, flexWrap: 'wrap'}}
        showMenuIconButton={true}
        title={AppBar}
        titleStyle={muiTheme.title}
        iconClassNameRight='muidocs-icon-navigation-expand-more'
        >
      </AppBar>
    <div>Hello worlds!!</div>
    <div>p
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
    <Button color="primary">Test Material UI</Button>
    <br />
    <br />
    <Grid container={true}>
      <Grid item={true}>
      </Grid>
      <Grid item={true}>
        <Countries />
      </Grid>
    </Grid>
  </div>
  )
}

export default Home;
