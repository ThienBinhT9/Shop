import {faShoppingBag, faCreditCard, faDiamond, faDonate} from '@fortawesome/free-solid-svg-icons'


const policy = [
    {
        name: "Miễn phí giao hàng",
        description: "Miễn phí ship với đơn hàng > 239K",
        icon:faShoppingBag,
        to:'/support'
    },
    {
        name: "Thanh toán COD",
        description: "Thanh toán khi nhận hàng (COD)",
        icon:faCreditCard,
        to:'/support'
    },
    {
        name: "Khách hàng VIP",
        description: "Ưu đãi dành cho khách hàng VIP",
        icon:faDiamond,
        to:'/support'
    },
    {
        name: "Hỗ trợ bảo hành",
        description: "Đổi, sửa đồ tại tất cả store",
        icon:faDonate,
        to:'/support'
    }
]

export default policy