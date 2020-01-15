class VideoGenre < ApplicationRecord
    validates :genre_id, :video_id, presence: true
    
    belongs_to :genre,
        primary_key: :id,
        foreign_key: :genre_id,
        class_name: :Genre

    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video
end
