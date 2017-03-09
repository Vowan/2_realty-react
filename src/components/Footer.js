import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
     <FilterLink filter="SHOW_PENDING">
      Pended
    </FilterLink>
     <FilterLink filter="SHOW_CANCELED">
      Completed
    </FilterLink>
  </p>
)

export default Footer
