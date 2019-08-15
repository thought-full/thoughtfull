class Post < ApplicationRecord
    belongs_to :user
    validates :date, :body, :user_id, presence: true

  def upvote!
    increment! :votes
  end

  def downvote!
    decrement! :votes
  end
end
