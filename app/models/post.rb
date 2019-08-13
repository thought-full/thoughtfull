class Post < ApplicationRecord
    belongs_to :user
    validates :date, :body, :user_id, presence: true
end
