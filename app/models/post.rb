class Post < ApplicationRecord
    belongs_to :user
    has_one_attached :image
    validates :date, :body, :user_id, presence: true

  def upvote!
    increment! :votes
  end

  def downvote!
    decrement! :votes
  end
end
