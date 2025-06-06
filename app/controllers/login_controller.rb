class LoginController < ApplicationController
  def login
  end

  def autenticar
    user = User.find_by(email: params[:email])
    if user && user.senha == params[:senha]
      session[:user_id] = user.id
      redirect_to root_path, notice: "Login realizado com sucesso!"
    else
      flash.now[:alert] = "Email ou senha inválidos"
      render :login, status: :unprocessable_entity
    end
  end

  def cadastrar
    @user = User.new
  end

  def criar_usuario
    @user = User.new(user_params)
    if @user.save
      redirect_to login_path, notice: "Usuário cadastrado com sucesso."
    else
      render :cadastrar, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:nome, :email, :senha, :conf_senha)
  end
end
