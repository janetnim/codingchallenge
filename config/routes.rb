Rails.application.routes.draw do
  get 'homepage/index'
  namespace :api do
    namespace :v1 do
      get 'tasks/index'
      post 'tasks/create'
      patch '/tasks/:id', to: 'tasks#update'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
