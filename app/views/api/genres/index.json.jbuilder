
@genres.each do |genre|
    json.set! genre.id do
        json.extract! genre, :genre, :id
    end
end