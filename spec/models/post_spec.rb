require 'rails_helper'

RSpec.describe Post, type: :model do
    it "should validate date" do
      post = Post.create
      expect(post.errors[:date]).to_not be_empty
    end

    it "should validate body" do
      post = Post.create
      expect(post.errors[:body]).to_not be_empty
    end
  
    it "validates public or private view" do
      post = Post.create
      expect(post.errors[:public_view]).to_not be_empty
    end
  
    it "validates user ID" do
      post = Post.create
      expect(post.errors[:user_id]).to_not be_empty
    end
    
    # it "validates address" do
    #   post = Post.create
    #   expect(post.errors[:address]).to_not be_empty
    # end

  end