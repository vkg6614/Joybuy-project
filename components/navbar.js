function navbar() {
  return `<div class="top-div">
          <div>
            <p>
              Ship to<img
                class="flag"
                src="https://www.merchantstronghold.com/currency/wp-content/uploads/2017/05/usd-1.png"
              />US/USD
            </p>
            <span class="material-icons"> arrow_drop_down </span>
          </div>
          <div><a href="#">Quick Guide</a></div>
          <div>
            <p>Help</p>
            <span class="material-icons"> arrow_drop_down</span>
          </div>
          <div><a class="media" href="#">Media and Investing</a></div>

          <div>
            <p class="sell">Sell With Us</p>
            <span class="material-icons"> arrow_drop_down </span>
          </div>
          <div>
            <p>Site/Language</p>
            <span class="material-icons"> arrow_drop_down </span>
          </div>
        </div>
        <div class="mid-div">
          <img
            src="https://img10.joybuy.com/tuangou/jfs/t1/24107/24/11739/7795/5c924d58Eae30ea8a/815e2989f4164d36.png"
          />
          <div class="input-div">
            <span>ALL</span
            ><span class="material-icons border"> expand_more </span>
            <input type="text" oninput="debounce(main,500)" class="input_box" />
            <button>
              <span class="material-icons search"> search </span>
            </button>
          </div>
          <div class="user-data">
            <div>
              <span class="material-icons"> shopping_cart </span>
              <p>Cart</p>
            </div>
            <div>
              <span class="material-icons"> perm_identity </span>
              <p class="loginBtn">Log in</p>
            </div>
            <p class="signupBtn">Sign up</p>
          </div>
          <div class="oninput_div"></div>
        </div>
        <div class="bottom-div">
          <div class="leftDiv">
            <div class="hamburgers">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>Catogories</p>
            <span class="material-icons"> arrow_drop_down </span>
          </div>
          <div class="content">
            <p>Wholesale Zone</p>
            <p>Super Deals</p>
            <p>Xiaomi Zone</p>
            <p>Joy Collection</p>
          </div>
        </div>`;
}

export { navbar };
