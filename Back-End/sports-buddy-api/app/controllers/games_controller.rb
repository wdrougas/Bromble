class GamesController < ApplicationController
  def index
    games = Game.all
    render json: games.to_json(serialized_data)
  end

  def create
    game = Game.create(strong_game_params)
    render json: game.to_json(serialized_data)
  end

  def show
    game = Game.find(params[:id])
    render json: game.to_json(serialized_data)
  end

  private

    def strong_game_params
      params.require(:game).permit(:location, :time, :result, :sport)
    end

    def serialized_data
      {:except => [:created_at, :updated_at]}
    end
end
