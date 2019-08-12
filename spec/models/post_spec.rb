require 'rails_helper'

RSpec.describe Post, type: :model do
    it "should validate name" do
      post = Post.create
      expect(post.errors[:name]).to_not be_empty
    end
  end