import logoImg from '../../assets/logo.svg'
import { Summary } from '../Summary'

import { Container, Content } from './styles'

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button">
                    Nova Transação
                </button>

            </Content>
        </Container>
    )

}