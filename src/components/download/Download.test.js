/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react'

import Download from './Download'

describe('download', () => {
  it('just testing texts', () => {
    const { getByText } = render(<Download />)
    expect(getByText(/Скачать презентацию/i)).toBeInTheDocument()

    expect(
      getByText(/Оставьте свои контакты и мы вам вышлем/i),
    ).toBeInTheDocument()
  })
})
