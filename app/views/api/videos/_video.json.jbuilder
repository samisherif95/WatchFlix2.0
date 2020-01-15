json.extract! video, :id, :title, :description, :year, :video_type, :rating
json.photo_url url_for(video.photo)
json.video_url url_for(video.video_url) if video.video_url.attached?
json.genre_ids video.genres.pluck(:id)