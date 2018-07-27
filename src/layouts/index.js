import React from 'react'
import PropTypes from 'prop-types'
import Main2 from '../pages/Main2'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
  <Main2 render={(props) => <div><h1>This is my RENDER PROP</h1> {props.children}</div>}>

 <div>DDDDDDDaaavvviiiiddd   jjjjj zzz,.., child1 - hhhhhuu</div>
 <div>child2 - asdf</div>
 <div>child3 - erwet</div>
 <div>child4 - asdewwwww</div>


      </Main2>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
