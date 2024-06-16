let getProduct = JSON.parse(localStorage.getItem('cart_items'));
let parentProduct = document.querySelector('.all_items');

let totalPrice = document.querySelector('.totalCount');
let btnPrice = document.querySelector('.btnCheck');

let total = 0;

getProduct.forEach((product) => {
    let cartList = document.createElement('div');
    cartList.classList.add('cart_list');

    console.log(cartList);

    total += parseFloat(product.prdPrice);
    totalPrice.textContent = `$${total}`;
    btnPrice.textContent = `Checkout ($${total})`;

    cartList.innerHTML = `<div class="cart_details">
                            <div class="cart_img">
                                <img src=${product.prdImg} alt="">
                            </div>
                            <div class="cart_info">
                                <h3>${product.prdName}</h3>
                                <span>${product.prdPrice}</span>
                            </div>
                        </div>
                        <div class="cart_quantity">
                            <div class="delete">
                                <span>Delete</span>
                                <i class="fa-solid fa-trash"></i>
                            </div>
                            <div class="quantity">
                                <div class="minus">
                                    <span>-</span>
                                </div>
                                <div class="number">
                                    <span>0</span>
                                </div>
                                <div class="add">
                                    <span>+</span>
                                </div>
                            </div>
                        </div>`;

    let minus = cartList.querySelector('.minus');
    let add = cartList.querySelector('.add');
    let numberValue = cartList.querySelector('.number');

    let del = cartList.querySelector('.delete');

    let number = 1;

    numberValue.innerHTML = number;

    minus.addEventListener('click', () => {
        if (number > 1) {
            number--;
            numberValue.innerText = number;
            total -= parseFloat(product.prdPrice);
            totalPrice.textContent = `$${total}`;
            btnPrice.textContent = `Checkout ($${total})`;
        }
    });

    add.addEventListener('click', () => {
        if (number < 20) {
            number++;
            numberValue.innerText = number;
            total += parseFloat(product.prdPrice);
            totalPrice.textContent = `$${total}`;
            btnPrice.textContent = `Checkout ($${total})`;
        }
    });

    del.addEventListener('click', () => {
        cartList.remove();
        total -= parseFloat(product.prdPrice);
        totalPrice.textContent = `$${total}`;
        btnPrice.textContent = `Checkout ($${total})`;
    })

    parentProduct.append(cartList)
});

let checkOutBtn = document.querySelector('.btnCheck');
let popForm = document.querySelector('.pop_form');
if (total > 0) {
    checkOutBtn.addEventListener('click', () => {
        popForm.style.display = 'flex'
    })
}

popForm.addEventListener('click', () => {
    popForm.style.display = 'none'
});