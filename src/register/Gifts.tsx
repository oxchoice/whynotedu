import { Box, Text } from "materials";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    height: 115px;
    background: #323232;
    color: #f9f9f9 !important;

    .light {
        font-weight: 100;
    }
`

export const Gifts = () => {
    return (
        <Wrapper>
            <Text content="π" size={30} />
            <Box flexDirection="column" flex={1} marginLeft={28}>
                <Text bold content="4μ μΆμλλ 'COX'" size={16} />
                <Text content="λκ΅¬λ³΄λ€ λΉ λ₯΄κ² μΆμ μλ¦Ό λ°μ!" size={16} marginTop={12}/>
            </Box>
        </Wrapper>
    )
}