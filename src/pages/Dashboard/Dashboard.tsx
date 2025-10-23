import ProtectedRoute from '@routes/ProtectedRoute'
import React from 'react'

function Dashboard() {
  return (
    <ProtectedRoute>Dashboard</ProtectedRoute>
  )
}

export default Dashboard