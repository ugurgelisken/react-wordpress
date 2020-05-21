import React, { useState, useEffect } from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import axios from 'axios';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

import './Sidebar.css';

function Sidebar({ t }) {

    let blogPath = "/" + global._.specialPageSlugs.blog + "/";
    
    const history = useHistory();

    const [categoriesList, setCategoriesList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
 
    const goToSearch = () =>{
        if(searchInput.length > 2){
            history.push(blogPath + searchInput);
            setSearchInput("");
        }
    }

    useEffect(() => {
        const fetch = async () => {
            let result_categories = await axios('categories?per_page=100');
            setCategoriesList(result_categories.data.filter(item=> item.name!==global._.disabledCategorySlugs[0] && item.name!==global._.disabledCategorySlugs[1] && item.name!==global._.disabledCategorySlugs[2] && item.name!==global._.disabledCategorySlugs[3] ));
        }
        fetch();
    }, []);

    return (
        <div>
            <div className="right-side-box">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="..."
                        aria-label="..."
                        value={searchInput} onChange={e => setSearchInput(e.target.value)}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                              goToSearch()
                            }
                          }}
                    />
                    <InputGroup.Append>
                        <Button onClick={() => goToSearch()} variant="outline-secondary">{t('search')} </Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <h2>{t('categories')}</h2>
            <ul className="categories">
                {categoriesList.map((category) =>
                    <li key={category.slug} className="category-item li"><Link to={"/category/" + category.slug} >{category.name}&nbsp;({category.count}) </Link></li>
                )}
            </ul>
        </div>
    )
}
export default withNamespaces()(Sidebar);