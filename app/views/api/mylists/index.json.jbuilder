@mylists.each do |list|
    json.set! list.id do
        json.partial! '/api/mylists/mylist', list: list
    end
end