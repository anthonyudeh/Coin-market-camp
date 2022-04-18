

//////////////  display highlight on cliclk ////////////////

const hideNShow = document.getElementById("btn-container-info-on-graph");

console.log(hideNShow);
function myClick() {
  if (hideNShow.style.display === "none") {
    hideNShow.style.display = "flex";
  } else {
    hideNShow.style.display = "none";
  }
}

////////////////       Fetching      //////////////////////
var list = document.querySelector("first-list-table diff-first-list-tle");

const getTodoItems = async () => {
  try {
    const response = await window.axios.get(
      "https://cors-any-where-code-mena.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "837459ce-5242-457a-82c9-af52040c2776",
        },
      }
    );
    const table = document.getElementById("table-inu");

    const value = response.data.data;
    console.log(value);
    value.forEach((element) => {
      const a = `<tr>
            <td class="first-list-table diff-first-list-tle">
              <div><i class="fa-solid fa-star-of-david"></i></div>
              <div>${element.cmc_rank}</div>
            </td>
            <td class="camp-name diff-camp-name">
              <img src="./images/1027.png" alt="" />
              <div class="name-class">
                <h3>${element.name}</h3>
                <p class="coin--shortname">${element.symbol}</p>
              </div>
              <span>Buy</span>
            </td>
            <td class="mmds">$40,456.16</td>
            <td class="drop mmds">
              <div><i class="fa-solid fa-caret-down"></i></i></div>
              <p>1.13%</p>
            </td>
            <td class="drop mmds">
              <div><i class="fa-solid fa-caret-down"></i></div>
              <p>11.95%</p>
            </td>
            <td class="mmds">$767,443,826,543</td>
            <td class="diff-td mmds">
              <h2>$34,702,116,388</h2>
              <h3>859,575 BTCBTC</h3>
            </td>
            <td class="mmds">
              <h2>$34,702,116,388</h2>
              <div>
                <div></div>
              </div>
            </td>
            <td class="mmds">
              <div class="bad-graph"><img src="./images/1.svg" alt=""></div>
              <div></div>
            </td>
          </tr>
`;
      //   table.appendChild(a);
      table.innerHTML += a;
    });
  } catch (errors) {
    console.error(errors);
  }
};

getTodoItems();


const history =  async () => {

}