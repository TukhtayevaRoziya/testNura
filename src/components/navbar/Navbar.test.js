/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Navbar from "./Navbar"

describe('navbar', () => {
  it('checking', ()=>{
    const {getByRole, getByTestId} = render(<Navbar/>)

    expect(getByRole('checkbox').checked).toEqual(false)
 
    userEvent.click(getByTestId('label'))
    expect(getByRole('checkbox').checked).toEqual(true)

    userEvent.click(getByTestId('label'))
    expect(getByRole('checkbox').checked).toEqual(false)

  })
})
