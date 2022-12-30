/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react'
import EndSection from './EndSection'

describe('end section', () => {
  it('just checking texts', () => {
    const { getByText } = render(<EndSection />)

    expect(getByText(/Создание сайта maxico.kz/i)).toBeInTheDocument()
  })
})
