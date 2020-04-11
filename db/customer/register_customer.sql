insert into customer (
    email,
    password
) values (
    $1,
    $2
)
returning customer_id, email;