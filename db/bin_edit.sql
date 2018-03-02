UPDATE Bin
SET binName = $3,
    shelfId = $4,
    itemName = $5,
    itemPrice = $6
WHERE binname = $2 AND shelfid = $1
returning *;

-- select * from bin
-- where binname = $2 AND shelfid = $1;
