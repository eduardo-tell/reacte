import styled from 'styled-components'

export const ContentBody = styled.div`
    height: 20rem;
`
export const CardProductImage = styled.div`
    height: 60%;
    display: block;
    overflow: hidden;

    picture {
        width: 100%;
        padding-top: 5rem;
        overflow: hidden;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

export const CardProductContent = styled.div`
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const CardProductActions = styled.div`
    height: 15%;
    justify-content: space-between;
`

// button.favorited {
//     background-color: green;
// }

// .card-product {
//     height: 20rem;

//     &__image {
//         height: 30%;
//         overflow: hidden;

//         img {
//             object-fit: cover;
//         }
//     }
// }
