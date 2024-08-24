import React from 'react'
import { Pagination as RAPagination } from 'react-admin'

export const Pagination = (props) => (
  <RAPagination rowsPerPageOptions={[50, 100, 500]} {...props} />
)
