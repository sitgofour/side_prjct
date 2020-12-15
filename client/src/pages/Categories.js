import styled from 'styled-components';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';


function Categories({ children }) {
    let { path, url } = useRouteMatch();

    const categoriesList = ["Zoom", "Productivity", "Math", "Science", "Language Arts"];
    const CategoriesLayout = styled.div`

    `
    const Title = styled.h2`
    
    `
    const CategoriesDiv = styled.div`
    
    `

    const CategoryLink = styled.div`

    `  


    return (
        <CategoriesLayout>
            <CategoriesDiv>
                <Title>Categories Title</Title>
                    {categoriesList.map(category => {
                        return (
                            <Link to={`${url}/${category}`}>
                                <CategoryLink>{category}</CategoryLink>
                            </Link>
                        )
                    })}
                    {/* {children} */}
            </CategoriesDiv>
        </CategoriesLayout>
    )
}


export default Categories;