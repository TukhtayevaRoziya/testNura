/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react"
import Map from "./Map"

describe('map', () => {
  it('just checking texts', ()=>{
    const {getByText} = render(<Map />)

    expect(getByText(/ул. Кунаева 10, БЦ “Изумрудный”, блок - А, этаж 1/i)).toBeInTheDocument()
  })
})
