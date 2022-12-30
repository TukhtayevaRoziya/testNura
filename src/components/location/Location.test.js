/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react"
import Location from "./Location"


describe('location', () => {
  it('just checking texts', ()=>{
    const {getByText} = render(<Location />)

    expect(getByText(/Локация/i)).toBeInTheDocument()
    expect(getByText(/Локация/i)).toHaveStyle('font-weight:bold')
  })
})
