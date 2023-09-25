import React from "react";
import Box from "../box";
import SearchBox from "../searchbox";
import Checkbox from "../checkbox";
import Button from "../button";
import "./CategoryFilter.style.scss";

function CategoryFilter ({
    categories,
    selectedCats,
    toggleCheckbox,
    searchQuery,
    handleSearch,
    searchResult,
    applyCats,
    buttonText
}) {
    return (
        <Box title="Categories">
            <SearchBox
                searchQuery={searchQuery}
                onChange={event => handleSearch(event.target.value)}
                showIcon={true}
            />

            <div className="categories-container">
                {categories.length === 0 &&
                    <h3>Loading...</h3>
                }

                {selectedCats.map((cat, index) => (
                    <Checkbox
                        key={index}
                        value={cat}
                        checked={true}
                        onChange={event => toggleCheckbox(event.target)}
                    />
                ))}

                {searchQuery && searchResult.length === 0
                    ? <h3>No Categories Found.</h3>
                    : [...searchResult.length > 0 ? searchResult : categories].map((cat, index) => {
                        if (selectedCats.includes(cat)) {
                            return null;
                        }
                        return (
                            <Checkbox
                                key={index}
                                value={cat}
                                onChange={(event) => toggleCheckbox(event.target)}
                            />
                        );
                    })
                }
            </div>

            <Button onClick={applyCats}>
                {buttonText}
            </Button>
        </Box>
    )
}

export default CategoryFilter;