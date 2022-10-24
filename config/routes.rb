Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    resources :plants do
      resources :notes
    end

    get '/randomplant', to: 'plants#randomplants'
    resources :notes do 
      resources :wishlist
    end
    resources :plants do
      resources :pestdiseases
    end
    resources :users, only: :update

    get '/:id/wishlistPlants', to: 'wishlists#wishlistPlants'
    get '/:id/plantWishlist', to: 'plants#plantWishlists'
    
  end 
end
