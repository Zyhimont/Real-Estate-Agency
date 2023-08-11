import { React, useEffect, useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import './Realty.css';
import { getFullRealtyList } from "../../utils/api/commonApi";
import { Pagination } from "../Pagination/Pagination";

const Realty = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState({});
    const [sorting, setSorting] = useState({ sortType: "title" });

    const [realtyState, setRealtyState] = useState({
        loading: true,
        realty: [],
    });

    const [imagesState, setImagesState] = useState({
        loading: true,
        images: [],
    });

    useEffect(() => {
        getFullRealtyList(setRealtyState, setImagesState);
    }, []);

    let filteredRealty = useMemo(() => {
        if (!filter.filterType) {
            return null;
        }

        setSorting({ sortType: "title" });
        for (let filt of filter.filterType) {
            const filtered = realtyState.realty.filter((item) => item[filt].toLowerCase()
                                            .includes(filter.filterValue.toLowerCase()));
            if (filtered.length) {
                return filtered;
            }
        }
    }, [filter]);

    function filterRealty(event, filterType) {
        if (event.target.tagName !== "SPAN" || event.target.classList.contains("realty-block-header")) {
            return;
        }

        document.body.querySelector("#filters .item-active")?.classList.remove("item-active");
        event.target.classList.add("item-active");
        const filterValue = event.target.dataset.filter;
        setFilter({ filterType: [filterType], filterValue: filterValue });
    }

    function searchRealty(event) {
        const filterType = ["title", "address", "description", "property_type", "cost"];
        const filterValue = event.target.previousElementSibling.value;
        setFilter({ filterType: filterType, filterValue: filterValue });
    }

    filteredRealty = useMemo(() => {
        let realty = filteredRealty || realtyState.realty;

        switch (sorting.sortType) {
            case "cost":
                return realty.sort((a, b) => +a[sorting.sortType] - +b[sorting.sortType]);
            case "address":
            case "title":
                return realty.sort((a, b) => a[sorting.sortType].localeCompare(b[sorting.sortType], { sensitivity: "base" }));
        }
    }, [sorting]);

    function sortRealty(event) {
        if (event.target.tagName !== "SPAN" || event.target.classList.contains("realty-block-header")) {
            return;
        }

        document.body.querySelector("#sortings .item-active")?.classList.remove("item-active");
        event.target.classList.add("item-active");
        const sortType = event.target.dataset.sort;
        setSorting({ sortType });
    }

    function openRealty(event) {
        const id = event.target.closest(".realty-card").id;
        const realty = realtyState.realty.find((item) => +item.id === +id);
        navigate(`/realty/${id}`, { state: { realty } });
    };

    function realtyItems({ currentItems }) {
        return (
            <div>
                {currentItems.map((item) => (
                    <div className="realty-card" key={item.id} id={item.id} onClick={openRealty}>
                        <img className="img-borders" src={
                            !imagesState.loading && item.images ? item.images[0].image : "./media/img/realty_placeholder.png"
                        } alt="property" />

                        <div className="realty-card-info">
                            <div className="realty-card-info-top">
                                <span className="realty-card-title">{item.title}</span>
                                <span className="realty-card-address secondaryText">{item.address}</span>
                                <span>
                                    <span>{item.cost}</span>
                                    <span> USD</span>
                                </span>
                            </div>
                            <p className="realty-description secondaryText">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="realty-page-content innerWidth paddings">
            <div className="realty-main-block">
                <div className="realty-left">
                    <div className="realty-filters" id="filters" onClick={(e) => filterRealty(e, "property_type")}>
                        <div className="realty-filters-type">
                            <span className="realty-block-header">Realty type</span>
                            <span data-filter="">All</span>
                            <span data-filter="commercial">Commercial</span>
                            <span data-filter="residential">Residential</span>
                        </div>
                    </div>

                    <div className="realty-sorting" id="sortings" onClick={(e) => sortRealty(e)}>
                        <span className="realty-block-header">Sort By</span>
                        <span data-sort="title">Title</span>
                        <span data-sort="cost">Cost</span>
                        <span data-sort="address">Address</span>
                    </div>
                </div>

                <div className="realty-right">
                    <div className="search-bar-realty" id="search">
                        <input type="text"/>
                        <button className="btn" onClick={searchRealty}>Search</button>
                    </div>
                    {
                        realtyState.loading ? <span className="primaryText flexCenter">Just a minute, please...</span>
                            : <Pagination itemsPerPage={4} ItemsComponent={realtyItems}
                                items={(filteredRealty.length ? filteredRealty : realtyState.realty)}
                            />
                    }
                </div>
            </div>
        </div>
    )
}

export default Realty;