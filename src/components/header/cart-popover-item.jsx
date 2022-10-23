import React from "react"
import { formatPrice } from "../../utils/format-price"

const CartPopoverItem = ({ item, currencyCode }) => {
  return (
    <div className="flex">
      <div className="overflow-hidden rounded-md mr-4">
        <img className="w-16 h-auto" src={item.thumbnail} alt={item.title} />
      </div>
      <div className="flex flex-col justify-between py-2">
        <div>
          <p className="font-medium text-sm">{item.title}</p>
          <p className="text-xs mt-1">
            <span className="text-black">Variant:</span> {item.description}
          </p>
        </div>
        <div className="flex items-center font-light text-xs">
          <p>
            <span className="text-black">Quantity</span>{" "}
            <span>{item.quantity}</span>
          </p>
          <div className="w-px h-4 bg-black mx-3" />
          <p>
            <span className="text-black">Price</span>{" "}
            <span>
              {formatPrice(item.unit_price, currencyCode, item.quantity)}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartPopoverItem
