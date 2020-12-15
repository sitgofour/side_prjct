import styled from 'styled-components';
import Header from '../components/Header';


function Categories() {

    const categoriesList = ["Zoom", "Productivity", "Math", "Science"];
    const CategoriesLayout = styled.div`

    `
    const Title = styled.h2`
    
    `
    const CategoriesDiv = styled.div`
    
    `

    const Category = styled.div`

    `  


    return (
        <CategoriesLayout>
            {/* <Header /> */}
            <CategoriesLayout>
                <Title></Title>
                    {categoriesList.map(category => {
                        return (
                            <Category>{category}</Category>
                        )
                    })}
            </CategoriesLayout>
        </CategoriesLayout>
    )
}


export default Categories;