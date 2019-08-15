class ChangeDateDatatypeInMyTable < ActiveRecord::Migration[5.2]
  def up
    change_column :posts, :date, :date
  end

  def down
    change_column :posts, :date, :datetime
  end
end
