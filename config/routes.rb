# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'tasks/index'
      post 'tasks/create'
      patch '/show/:id', to: 'tasks#update'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
