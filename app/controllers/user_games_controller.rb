class UserGamesController < ApplicationController

    def index
        user_games = UserGame.all
        render json: user_games.to_json(serialized_data)
      end

      def create
        user_game = UserGame.create(strong_user_game_params)
        render json: user_game.to_json(serialized_data)
      end

      def show
        user_game = UserGame.find(params[:id])
        render json: user_game.to_json(serialized_data)
      end

      def count
        games_count = UserGame.where(user_id: params[:id]).count
        render json: games_count
      end

      private

      def strong_user_game_params
        params.require(:user_game).permit(:user_id, :game_id)
      end

      def serialized_data
        {:except => [:created_at, :updated_at]}
      end


end
