const getTrending = async () => {
//   spinner.style.display = "block";
  try {
    const response = await window.axios.get(
      "https://cors-any-where-code-mena.herokuapp.com/https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/historical",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "837459ce-5242-457a-82c9-af52040c2776",
        },
      }
    );

    console.log(response);
    
  } catch (errors) {
    console.error(errors);
  }
}
getTrending()

// https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/historical