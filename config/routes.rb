Rails.application.routes.draw do
  resources :games
  resources :users
  resources :user_games
  get '/user_games/count/:id', to: 'user_games#count'

  post '/login', to: 'users#login'
  get '/login', to: 'users#login'
  get '/logout', to: 'users#logout'
  # get '/patients/:id', to: 'patients#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
