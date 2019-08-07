class PostsController < ApplicationController
    before_action :authenticate_user!, only: [:create, :destroy]

    def index
        @posts = Post.all
        render json: @posts
    end

    def show
      @post = Post.find(params[:id])
      if @post
        render json: @post
      else
        render json: {error: "not found"}, status: 404
      end
    end

    def create
        @post = current_user.posts.create(post_params)
        render json: @post, status: 201
    end

    def destroy
        @post = current_user.posts.find(params[:id])
        if @post.destroy
            render json: @post
        else
            render json: {error: 'could not delete'}, status: 400
        end
    end

    private

    def post_params
        params.require(:post).permit(:date, :body, :public_view)
    end
end
