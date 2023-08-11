export function getFullRealtyList(setRealtyState, setImagesState) {
    fetch("/api/v1/houses/houseslist/")
            .then((res) => res.json())
            .then((realty) => {
                setRealtyState({ loading: false, realty: realty, filteredRealty: JSON.parse(JSON.stringify(realty)) });
                for (let house of realty) {
                    getImagesByRealtyArray(house, setRealtyState);
                    switch (+house.property_type) {
                        case 1:
                            house.property_type = "residential";
                            break;
                        case 2:
                            house.property_type = "commercial";
                            break;
                    }
                }
                setImagesState({loading: false});
                
                return realty;
            });
}

export function getRealtyById(id, setRealtyState, setImagesState) {
    fetch(`/api/v1/houses/houseslist/${id}/`)
            .then((res) => res.json())
            .then((realty) => {
                setRealtyState({ loading: false, realty: realty });
                getImagesByRealty(realty, setRealtyState, setImagesState);
            });
}

export function getImagesByRealtyArray(house, setRealtyState) {
    fetch(`/api/v1/houses/houseimages/${house.id}/`)
        .then((res) => res.json())
        .then((images) => {
            for (let img of images) {
                if (img.image.includes("/static/media")) {
                    img.image = process.env.REACT_APP_BACKEND_HOST + img.image;
                } else {
                    img.image = process.env.REACT_APP_BACKEND_HOST + "/static/media" + img.image;
                }
            }
            return ({
                ...house,
                images: images
            });
        })
        .then((house) => {
            setRealtyState(({realty}) => {
                const newRealty = realty?.map(property => {
                    if (property.id === house.id) {
                        return house;
                    }
                    return property;
                })
                return ({
                    loading: false,
                    realty: newRealty,
                    filteredRealty: JSON.parse(JSON.stringify(newRealty)),
                });
            });
        });
}

export function getImagesByRealty(house, setRealtyState, setImagesState) {
    fetch(`/api/v1/houses/houseimages/${house.id}/`)
    .then((res) => res.json())
    .then((images) => {
        for (let img of images) {
            if (img.image.includes("/static/media")) {
                img.image = process.env.REACT_APP_BACKEND_HOST + img.image;
            } else {
                img.image = process.env.REACT_APP_BACKEND_HOST + "/static/media" + img.image;
            }
        }
        return ({
            ...house,
            images: images
        });
    })
    .then((house) => {
        setRealtyState({
            loading: false,
            realty: house,
        });
        setImagesState({loading: false});
    });
}