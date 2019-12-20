Rails.application.routes.draw do
  resources :games
  resources :users
  post '/login', to: 'users#login'

  # get '/patients/:id', to: 'patients#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
