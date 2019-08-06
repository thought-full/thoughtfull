class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.timestamp :date
      t.text :body
      t.boolean :public_view
      t.integer :user_id

      t.timestamps
    end
  end
end
