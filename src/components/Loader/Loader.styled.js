import styled, { keyframes } from 'styled-components'

export const pulse = keyframes`
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`

export const LoaderWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  color: #3498db; /* Можна замінити на пропс */
`

export const Dot = styled.div`
  position: absolute;
  width: 6.4px;
  height: 6.4px;
  background: currentColor;
  border-radius: 50%;
  animation: ${pulse} 1.2s linear infinite;
  ${({ index }) => `
    animation-delay: -${index * 0.1}s;
    top: ${getTop(index)}px;
    left: ${getLeft(index)}px;
  `}
`

// Позиції кожної крапки
export const positions = [
  [36.8, 66.24],
  [22.08, 62.29579],
  [11.30421, 51.52],
  [7.36, 36.8],
  [11.30421, 22.08],
  [22.08, 11.30421],
  [36.8, 7.36],
  [51.52, 11.30421],
  [62.29579, 22.08],
  [66.24, 36.8],
  [62.29579, 51.52],
  [51.52, 62.29579],
]

export const getTop = (i) => positions[i][0]
export const getLeft = (i) => positions[i][1]