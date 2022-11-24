import { logRoles, render, screen } from "@testing-library/react"
import GifGridItem from "../../src/components/GifGridItem"

describe('Pruebas en el componente <GifGridItem/>', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    test('debe de hacer match con el snapshot', () => { 
        const {container} = render(<GifGridItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('debe mostrar la imagen con el URL y el ALT indicado', () => { 
        render(<GifGridItem title={title} url={url} />)
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(title);

    })

    test('debe mostrar el titulo en el componente', () => { 
        render(<GifGridItem title={title} url={url} />)
        screen.getByText(title)
    })
})