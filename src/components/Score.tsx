import React from 'react'
import styled from 'styled-components'
import { selectScore } from '../store/clickerSlice'
import { useAppSelector } from '../store/store'

const StyledScore = styled.div`
    height: 50px;
    width: 100%;
`
const Score = () => {
  const score = useAppSelector(selectScore)
  return (
    <div>{score}</div>
  )
}

export default Score