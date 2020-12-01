import React from 'react'
import { Global, css, connect, styled, Head } from 'frontity'
import Switch from '@frontity/components/switch'
import Header from './header'
import List from './list'
import Post from './post'
import Loading from './loading'
import Title from './title'
import PageError from './page-error'
import Home from './home'
import CanvasSpace from './canvasSpace'
import Container from './container'

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link)

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name='description' content={state.frontity.description} />
        <html lang='en' />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      <Front>
        <CanvasSpace />
        {/* Add the header of the site. */}
        <HeadContainer>
          <Header />
        </HeadContainer>
        <Container>
          {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
          <Main>
            <Switch>
              <Home when={data.isHome} />
              <Loading when={data.isFetching} />
              <List when={data.isArchive} />
              <Post when={data.isPostType} />
              <PageError when={data.isError} />
            </Switch>
          </Main>
        </Container>
      </Front>
    </>
  )
}

export default connect(Theme)

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`

const Front = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeadContainer = styled.div`
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
`
