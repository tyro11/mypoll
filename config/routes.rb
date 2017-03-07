Rails.application.routes.draw do
  get 'votes/update'

  resources :questions
  root 'questions#index'
  post '/vote'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
