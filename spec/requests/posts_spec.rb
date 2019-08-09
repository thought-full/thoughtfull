require 'rails_helper'

describe "GET #index" do
  before do
    get "/"
  end
  it "returns http success" do
    expect(response).to have_http_status(:success)
  end
end


describe "Posts API", type: :request do
  context "when logged in" do
  u = User.create(email: "test@gmail.com", password: "testing")
    it "gets a list of posts" do
      # creates a user
      u = User.create(email: "test@gmail.com", password: "testing")
      # puts u.valid?
      # puts u.errors.full_messages

      # user creates a post
      p = Post.create(date: "12/12/12", body: "rspec test", public_view: false, user_id: u.id)
      # puts p.valid?
      # puts p.errors.full_messages
      
      # Make a request to the API
      get "/"

      # Convert the response into a Ruby Hash
      json = JSON.parse(response.body)

      # Assure that we got a successful response
      expect(response).to be_success

      # Assure that we got one result back as expected
      expect(json.length).to eq(1)
    end

    it "creates a post" do
      # The params we are sending with the request
      post_params = {
        post: {
          date: "12/12/11",
          body: "create post rspec",
          public_view: true,
          user_id: u.id
        }
      }
  
      # Send a request to the server
      post '/posts', params: post_params
  
      # Assure that we get a request back
      expect(response).to have_http_status(:ok)
  
      # Look up the post we expected to be created in the Database
      new_post = Post.first
  
      # Assure that the created post has the correct attributes
      expect(new_post.body).to eq("create post rspec")
    end
  end
end