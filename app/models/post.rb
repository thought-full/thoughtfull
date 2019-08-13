class Post < ApplicationRecord
    belongs_to :user
    validates :date, :body, :public_view, :user_id, presence: true
end
