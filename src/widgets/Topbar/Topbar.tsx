
import { Container } from './TopbarProps'
import reactLogo from '@/assets/react.svg'

export default function Topbar() {
    return (
        <Container>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </Container>
    )
}
