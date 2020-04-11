select * from cart_items ci
join product p on ci.product_id = p.product_id
where ci.cart_id = $1;