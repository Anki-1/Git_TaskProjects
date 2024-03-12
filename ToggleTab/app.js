const data = [
    {
        unit: '1 unit',
        discount: '10% Off',
        standard: 'Standard Price',
        newPrice: '$10.00 USD',
        oldPrice: '$24.00 USD',
    },
    {
        unit: '2 unit',
        discount: '20% Off',
        standard: 'Standard Price',
        newPrice: '$18.00 USD',
        oldPrice: '$24.00 USD',
    },
    {
        unit: '3 unit',
        discount: '30% Off',
        standard: 'Standard Price',
        newPrice: '$24.00 USD',
        oldPrice: '$24.00 USD',
    }
];

const boxes = document.querySelectorAll('.box .content');
const total = document.querySelector('.total > span');
const boxContainer = document.querySelector('.boxContainer');


const mapBOGOContent = function (info) {
    boxes.forEach((box, index) => {
        const { unit, discount, standard, oldPrice, newPrice } = info[index];

        const content = `
            <div class="details">
                <input type="radio" name="box-selection" class="box-radio" data-target="top-box">
                <div class="info">
                    <div class="price">
                        <p class="unit">${unit}</p>
                        <p class="discount">${discount}</p>
                    </div>
                    <div class="standard">
                        <p>${standard}</p>
                    </div>
                </div>
            </div>
            <div class="priceAmount">
                <div class="amount">
                    <p class="newPrice">${newPrice}</p>
                    <p class="oldPrice">${oldPrice}</p>
                </div>
            </div>
        `;
        box.innerHTML = content;
    });
};

mapBOGOContent(data);

const middleBox = document.querySelector('.middle-box');
const middlePrice = document.querySelector('.middle-box .newPrice');

middleBox.insertAdjacentHTML('beforeEnd', `<p class='popular'>MOST POPULAR</p>`);
document.querySelectorAll('input.box-radio')[1].checked = true;
total.textContent = middlePrice.textContent;

const displayContent = function (e) {
    if (e.target.classList.contains('content')) {
        document.querySelectorAll('.box').forEach(boxes => boxes.classList.remove('addBorder'));
        document.querySelectorAll('.dropdownContent').forEach(dropdown => dropdown.classList.remove('show'));
        document.querySelectorAll('input.box-radio').forEach(radio => radio.checked = false)
        e.target.closest('.box').classList.add('addBorder');
        e.target.closest('.box').querySelector('.dropdownContent').classList.add('show');
        e.target.closest('.box').querySelector('.box-radio').checked = true;
        total.textContent = e.target.closest('.box').querySelector('.newPrice').textContent
    }
}

boxContainer.addEventListener('click', displayContent);
