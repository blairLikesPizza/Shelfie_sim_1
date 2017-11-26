UPDATE Bin
SET binName = $2,
    shelfId = $3,
    itemName = $4,
    itemPrice = $5
WHERE id = $1
returning *;