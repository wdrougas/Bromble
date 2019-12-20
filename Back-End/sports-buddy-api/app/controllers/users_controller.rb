class UsersController < ApplicationController

  def index
    users = User.all
    render json: users.to_json(serialized_data)
  end

  def create
    user = User.create(strong_user_params)
    render json: user.to_json(serialized_data)
  end

  def show
    user = User.find(params[:id])
    render json: user.to_json(serialized_data)
  end

  def login
    user = User.find_by(username: params[:username])
    # byebug
    if user
      if user.password_digest === params[:password_digest]
        render json: user.to_json(serialized_data)
      else
        render json: {message: 'Invalid username or password. Please check.'}
      end
    else
      render json: {message: 'user not found'}
    end
  end

  private

  def strong_user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :location, :password_digest)
  end

  def serialized_data
    {:except => [:password_digest, :created_at, :updated_at]}
  end

end
