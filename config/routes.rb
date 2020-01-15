Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json}  do
    resources :users
    resources :videos, only: [:show, :index]
    resources :genres, only: [:show,:index]
    resources :mylists, only: [:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy]
  end
  root to: 'static_pages#root'
end
