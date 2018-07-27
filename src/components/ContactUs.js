import React from 'react'
import Link from 'gatsby-link'

const ContactUs = ({ header }) => (

      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#333333',
            textDecoration: 'none',
          }}
        >
          {header}
        </Link>
      </h1>
)

export default ContactUs
