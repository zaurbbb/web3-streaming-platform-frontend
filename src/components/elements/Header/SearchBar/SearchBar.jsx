import React from 'react';

import css from './SearchBar.module.scss'

const SearchBar = () => {
    // const intl = useIntl();
    // const data = useNamesCollection();
    // const [filteredData, setFilteredData] = useState([]);
    // const [wordEntered, setWordEntered] = useState("");
    //
    // const handleFilter = (event) => {
    //     const searchWord = event.target.value;
    //     setWordEntered(searchWord);
    //     const newFilter = data.filter((value) => {
    //         return value.name.toLowerCase().includes(searchWord.toLowerCase());
    //     });
    //
    //     if (searchWord === "") {
    //         setFilteredData([]);
    //     } else {
    //         setFilteredData(newFilter);
    //     }
    // };

    return (
        <div className={css.ContainerBlock}>
                <input
                    type="text"
                    className={css.SearchInput}
                    // value={wordEntered}
                    // onChange={handleFilter}
                    placeholder='Search'
                />
            {/*{filteredData.length !== 0 && (*/}
            {/*    <div className={css.ResultsElement}>*/}
            {/*        {filteredData.map((value, key) => {*/}
            {/*            return (*/}
            {/*                <Link*/}
            {/*                    className={css.ResultItemElement}*/}
            {/*                    to={`/name/${value.id}`}*/}
            {/*                    target="_blank"*/}
            {/*                    key={key}*/}
            {/*                >*/}
            {/*                    <img*/}
            {/*                        src={SearchIconBlack}*/}
            {/*                        alt="search"*/}
            {/*                    />*/}
            {/*                    <p>{value.name} </p>*/}
            {/*                </Link>*/}
            {/*            );*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
}

export default SearchBar;