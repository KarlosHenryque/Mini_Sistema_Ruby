Rails.application.routes.draw do
  root 'homepage#index'

  get '/login', to: 'login#login'
  post '/login', to: 'login#autenticar'
  get '/cadastrar', to: 'login#cadastrar'
  post 'cadastrar', to: 'login#criar_usuario'
end
