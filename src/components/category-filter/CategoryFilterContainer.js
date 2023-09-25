import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";

const btnText = "Apply";

function CategoryFilterContainer () {
    const [categories, setCategories] = useState([]);
    const [selectedCats, setSelectedCats] = useState(() => {
        const storedCats = localStorage.getItem("selectedCats");
        return storedCats ? JSON.parse(storedCats) : [];
    });
    const [searchQuery, setSearchQuery] = useState();
    const [searchResult, setSearchResult] = useState([]);
    const [buttonText, setButtonText] = useState(btnText);

    const fetchJson = () => {
        fetch("./Categories.json")
            .then(response => {
                return response.json();
            }).then(data => {
            setCategories(data.data);
        }).catch(e => {
            console.log(e.message);
        });
    }

    const toggleCheckbox = target => {
        if (target.checked) {
            setSelectedCats((prevState) => [...prevState, target.value]);
        } else {
            const updatedArray = selectedCats.filter(item => item !== target.value);
            setSelectedCats(updatedArray);
        }
    }

    const handleSearch = searchTerm => {
        setSearchQuery(searchTerm);
        const filteredItems = categories.filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResult(filteredItems);
    }

    const applyCats = () => {
        localStorage.setItem("selectedCats", JSON.stringify(selectedCats));

        setButtonText("Applied !");

        setTimeout(() => {
            setButtonText(btnText);
        }, 1500);
    }

    useEffect(() => {
        fetchJson();
    },[])

    // Auto Save Selected Categories to localStorage on Check/Uncheck
    // useEffect(() => {
    //     localStorage.setItem("selectedCats", JSON.stringify(selectedCats));
    // }, [selectedCats]);

    return (
        <CategoryFilter
            categories={categories}
            selectedCats={selectedCats}
            toggleCheckbox={toggleCheckbox}
            searchQuery={searchQuery}
            handleSearch={handleSearch}
            searchResult={searchResult}
            applyCats={applyCats}
            buttonText={buttonText}
        />
    )
}

export default CategoryFilterContainer;