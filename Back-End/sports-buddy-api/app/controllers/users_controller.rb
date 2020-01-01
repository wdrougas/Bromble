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
    if user
      if user.password_digest === params[:password_digest]
        render json: user.to_json(serialized_data)
      else
        render json: {message: 'Invalid username or password. Please check.'}
      end
    else
      render json: {message: "User doesn't exist. Create and account"}
    end
  end

  def logout
    user = null
    render json: {message: 'User logout.'}
  end

  private

  def strong_user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :location, :password_digest, :profile_photo)
  end

  def serialized_data
    {:except => [:password_digest, :updated_at],
          :include =>
            {:games =>
              {
                :except => [:created_at, :updated_at]
              }
            }
    }
  end

end
