Rails.application.routes.draw do
  resources :posts do
    member do
      put :upvote
      put :downvote
    end
  end

  devise_for :users

  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: "pages#index"
end
