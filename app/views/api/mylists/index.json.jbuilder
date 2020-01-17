@mylists.each do |list|
    json.set! list.video_id do
        json.partial! '/api/mylists/mylist', list: list
    end
end