Rails.application.routes.draw do
  resources :games
  resources :users
  resources :user_games
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
