import React from 'react'
import { useParams, useNavigate } from 'react-router'
import { getAbout, deleteAbout } from './data'
export default function Invoice() {
  let params = useParams()
  let invoice = getAbout(parseInt(params.aboutId, 10))
  let navigate = useNavigate()
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteAbout(invoice.number)
            navigate('/about')
          }}
        >
          Delete
        </button>
      </p>
    </main>
  )
}
