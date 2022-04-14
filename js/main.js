const litag = document.getElementsByTagName(li)

const fetchUsers = () => {
    return async () => {
    try {
        const response = await axios.get(
            "https://cors-any-where-code-mena.herokuapp.com/https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
            {
                headers: {
                    "X-CMC_PRO_API_KEY": "837459ce-5242-457a-82c9-af52040c2776",
                },
            }
            );
            console.log(response);
            //   dispatch(fetchUserSuccess(response));
    } catch (err) {
        //   dispatch(fetchUserFailure);
        console.log(err); 
    }
    console.log(reponse)
};

};

litag.addEventlistner("click", fetchUsers)