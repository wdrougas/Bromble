class UsersController < ApplicationController

  def index
    users = User.all
    render json: users.to_json(serialized_data)
  end

  def create
    user = User.create(strong_user_params)
    byebug
    render json: user.to_json(serialized_data)
  end

  private

  def strong_user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :location, :password_digest)
  end

  def serialized_data
    {:except => [:created_at, :updated_at]}
  end

end
