class AddindextoMyList < ActiveRecord::Migration[5.2]
  def change
    add_index(:mylists, [:user_id,:video_id] , unique: true)
  end
end
