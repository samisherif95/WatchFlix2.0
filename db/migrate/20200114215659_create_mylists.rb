class CreateMylists < ActiveRecord::Migration[5.2]
  def change
    create_table :mylists do |t|
      t.integer :user_id, null:false
      t.integer :video_id, null:false
      t.timestamps
    end
    add_index(:mylists,:user_id)
    add_index(:mylists,:video_id)
  end
end
