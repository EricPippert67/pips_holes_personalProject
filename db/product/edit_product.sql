update product 
set image =$2,
name=$3,
price=$4,
category=$5
where product_id = $1;