class Video < ApplicationRecord
    validates  :title, :description, :year, :video_type, :rating, presence: true

    has_many :lists,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Mylist

    has_many :video_genres,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :VideoGenre

    has_many :genres,
        through: :video_genres,
        source: :genre

    has_one_attached :photo

    has_one_attached :video_url
end
