Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  root 'posts#index'

  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resource :profile, only: [:edit, :update, :show]
  resources :posts do
    member do
      post :like
      get :likes
    end

    collection do
      get :search
      get :autocomplete
    end
  end

  namespace :api do
    namespace :v1 do
      resources :comments,  only: [:index, :show, :create, :destroy]
    end
  end
  resources :colors, only: [:create]
end
