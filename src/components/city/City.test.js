/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react'
import City from './City'

describe('city', () => {
  it('just check texts', () => {
    const { getByText } = render(<City />)
    expect(getByText(/Основные преимущества городка/i)).toBeInTheDocument()
    
    expect(
      getByText(
        /Каждому владельцу коттеджа даётся возможность на своем земельном участке возводить дополнительные застройки: баню, сауну, летнюю кухню и др./i,
      ),
    ).toBeInTheDocument()
  })
})
