import minus from '../icons/minus.svg';
import plus from '../icons/plus.svg';

const CartData =[
    {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2,
    },{
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
    },
];

export default function cart() {
    const CartInner = CartData.map ( Data =>
        <div class="product-container col col-12" data-count="0" data-price={Data.price}>
            <img class="img-container"src={Data.img} alt="" />
            <div class="product-info">
                <div class="product-name">{Data.name}</div>
                <div class="product-control-container">
                    <div class="product-control">
                        <img src={minus} class="product-action minus" alt="" />
                        <span class="product-count">0</span>
                        <img src={plus} class="product-action plus" alt="" />
                    </div>
                </div>
                <div class="price">$0</div>
            </div>
        </div>
    )
    return(
        <section class="cart-container col col-lg-5 col-sm-12">
            <h3 class="cart-title">購物籃</h3>
            <section class="product-list col col-12" data-total-price="0">
                {CartInner}
            </section>
            <section class="cart-info shipping col col-12">
                <div class="text">運費</div>
                <div class="price">免費</div>
            </section>
            <section class="cart-info total col col-12">
                <div class="text">小計</div>
                <div class="price">$0</div>
            </section>
        </section>
    )
}