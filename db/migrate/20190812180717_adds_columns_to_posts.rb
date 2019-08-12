class AddsColumnsToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :latitude, :string
    add_column :posts, :longitude, :string
  end
end
