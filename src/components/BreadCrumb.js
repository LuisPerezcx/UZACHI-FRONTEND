import React from 'react'
import '../styles/BreadCrumb.css'

export const BreadCrumb = ({links}) => {
  return (
    <nav className="breadcrumb ms-5 ">
      <ul>
        {links.map((link, index) => (
          <li key={index} className="breadcrumb-item">
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
