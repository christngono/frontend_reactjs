import "bootstrap/dist/css/bootstrap.min.css"
import MainBanner from "../../shared-components/MainBanner/MainBanner"
import styled from "styled-components"

const BlockMatter = styled.div`
  border: solid #e5e5e5;
  border-radius: 12px;
  border-width: 2px 2px 4px;
  cursor: pointer;
  outline: 0;
  touch-action: manipulation;
  transform: translateZ(0);
  margin-top: 10px;
`

const Courses = () => {
  return (
    <>
      <MainBanner />
      <BlockMatter>
        <p>ici on affcihe le cours</p>
      </BlockMatter>
    </>
  )
}

export default Courses
