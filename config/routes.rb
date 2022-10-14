Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    resources :plants do
      resources :notes
    end

    get '/randomplant', to: 'cats#randomplants'
    resources :notes do 
      resources :wishlist
    end
    resources :users, only: :update
  end 
end
