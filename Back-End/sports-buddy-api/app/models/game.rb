class Game < ApplicationRecord
    has_many :user_games
    has_many :users, through: :user_games
    accepts_nested_attributes_for :user_games
end
