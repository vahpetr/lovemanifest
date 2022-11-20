import styled from "styled-components"

const HeartBeat = () => {
  return (
    <div className="heartbeat"><div></div></div>
  )
}

export default HeartBeat

export const HeartBeatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: inherit;
`
